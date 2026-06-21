#!/usr/bin/env python3
"""Add missing Wikidata claims for BioNixus Q140188264 (BIO-56 follow-up).

Ensures P31 (instance of: business) and P18 (image) on Q140188264.
P18 requires uploading the logo to Wikimedia Commons first.

Requires env vars:
  WIKIDATA_USERNAME — Wikidata / Commons bot username
  WIKIDATA_PASSWORD — Bot password from Special:BotPasswords
"""

from __future__ import annotations

import http.cookiejar
import json
import mimetypes
import os
import sys
import tempfile
import urllib.parse
import urllib.request
from pathlib import Path

ENTITY_ID = "Q140188264"
LOGO_URL = "https://www.bionixus.com/bionixus-logo.webp"
COMMONS_FILENAME = "BioNixus logo.webp"
USER_AGENT = "BioNixusGEOBot/1.0 (Paperclip BIO-56; contact admin@bionixus.com)"


class MediaWikiClient:
    def __init__(self, api_base: str) -> None:
        self.api_base = api_base
        self.cookie_jar = http.cookiejar.CookieJar()
        self.opener = urllib.request.build_opener(urllib.request.HTTPCookieProcessor(self.cookie_jar))

    def api(self, params: dict, post: bool = False, multipart: dict | None = None) -> dict:
        params.setdefault("format", "json")
        headers = {"User-Agent": USER_AGENT}
        if multipart:
            boundary = "----BioNixusBoundary7MA4YWxkTrZu0gW"
            body_parts: list[bytes] = []
            for key, value in params.items():
                body_parts.append(f"--{boundary}\r\n".encode())
                body_parts.append(f'Content-Disposition: form-data; name="{key}"\r\n\r\n'.encode())
                body_parts.append(f"{value}\r\n".encode())
            for key, (filename, content, content_type) in multipart.items():
                body_parts.append(f"--{boundary}\r\n".encode())
                body_parts.append(
                    f'Content-Disposition: form-data; name="{key}"; filename="{filename}"\r\n'.encode()
                )
                body_parts.append(f"Content-Type: {content_type}\r\n\r\n".encode())
                body_parts.append(content)
                body_parts.append(b"\r\n")
            body_parts.append(f"--{boundary}--\r\n".encode())
            data = b"".join(body_parts)
            headers["Content-Type"] = f"multipart/form-data; boundary={boundary}"
            req = urllib.request.Request(self.api_base, data=data, headers=headers, method="POST")
        elif post:
            data = urllib.parse.urlencode(params).encode()
            req = urllib.request.Request(self.api_base, data=data, headers=headers, method="POST")
        else:
            req = urllib.request.Request(f"{self.api_base}?{urllib.parse.urlencode(params)}", headers=headers)
        with self.opener.open(req, timeout=120) as resp:
            return json.loads(resp.read().decode())

    def login(self, username: str, password: str) -> str:
        login_token = self.api({"action": "query", "meta": "tokens", "type": "login"})["query"]["tokens"]["logintoken"]
        login_resp = self.api(
            {"action": "login", "lgname": username, "lgpassword": password, "lgtoken": login_token},
            post=True,
        )
        if login_resp.get("login", {}).get("result") != "Success":
            raise RuntimeError(f"Login failed on {self.api_base}: {login_resp}")
        return self.api({"action": "query", "meta": "tokens", "type": "csrf"})["query"]["tokens"]["csrftoken"]


def download_logo(path: Path) -> None:
    req = urllib.request.Request(LOGO_URL, headers={"User-Agent": USER_AGENT})
    with urllib.request.urlopen(req, timeout=60) as resp:
        path.write_bytes(resp.read())


def commons_file_exists(client: MediaWikiClient, filename: str) -> bool:
    title = f"File:{filename}"
    resp = client.api({"action": "query", "titles": title, "prop": "info"})
    pages = resp.get("query", {}).get("pages", {})
    page = next(iter(pages.values()))
    return "missing" not in page


def upload_logo(client: MediaWikiClient, csrf_token: str, logo_path: Path) -> str:
    if commons_file_exists(client, COMMONS_FILENAME):
        return COMMONS_FILENAME

    text = "\n".join(
        [
            "== {{int:filedesc}} ==",
            "{{en|1=Logo of [[d:Q140188264|BioNixus]], a global market research company specializing in healthcare and pharmaceutical research.}}",
            "{{Logo}}",
            "",
            "== {{int:license-header}} ==",
            "{{CopyrightedFreeUseLogo|BioNixus|site=www.bionixus.com}}",
        ]
    )
    content = logo_path.read_bytes()
    content_type = mimetypes.guess_type(str(logo_path))[0] or "image/webp"
    resp = client.api(
        {
            "action": "upload",
            "filename": COMMONS_FILENAME,
            "text": text,
            "comment": "Upload BioNixus logo for Wikidata P18 (BIO-56)",
            "token": csrf_token,
            "ignorewarnings": "1",
        },
        multipart={"file": (COMMONS_FILENAME, content, content_type)},
    )
    if resp.get("upload", {}).get("result") not in {"Success", "Warning"}:
        raise RuntimeError(json.dumps(resp, indent=2))
    return COMMONS_FILENAME


def entity_has_claim(client: MediaWikiClient, entity_id: str, pid: str) -> bool:
    resp = client.api({"action": "wbgetentities", "ids": entity_id, "props": "claims"})
    return pid in resp.get("entities", {}).get(entity_id, {}).get("claims", {})


def add_commons_image_claim(client: MediaWikiClient, csrf_token: str, entity_id: str, filename: str) -> None:
    resp = client.api(
        {
            "action": "wbeditentity",
            "id": entity_id,
            "data": json.dumps(
                {
                    "claims": {
                        "P18": [
                            {
                                "mainsnak": {
                                    "snaktype": "value",
                                    "property": "P18",
                                    "datavalue": {"type": "string", "value": filename},
                                },
                                "type": "statement",
                                "rank": "normal",
                            }
                        ]
                    }
                }
            ),
            "token": csrf_token,
            "summary": "Add BioNixus logo (P18) from Commons (BIO-56)",
            "bot": "1",
        },
        post=True,
    )
    if "error" in resp:
        raise RuntimeError(json.dumps(resp, indent=2))


def add_item_claim(client: MediaWikiClient, csrf_token: str, entity_id: str, pid: str, qid: str) -> None:
    resp = client.api(
        {
            "action": "wbcreateclaim",
            "entity": entity_id,
            "property": pid,
            "snaktype": "value",
            "value": qid,
            "token": csrf_token,
            "summary": f"Add {pid} for BioNixus GEO entity (BIO-56)",
            "bot": "1",
        },
        post=True,
    )
    if "error" in resp:
        raise RuntimeError(json.dumps(resp, indent=2))


def main() -> int:
    username = os.environ.get("WIKIDATA_USERNAME")
    password = os.environ.get("WIKIDATA_PASSWORD")
    if not username or not password:
        print("ERROR: Set WIKIDATA_USERNAME and WIKIDATA_PASSWORD.", file=sys.stderr)
        return 2

    wikidata = MediaWikiClient("https://www.wikidata.org/w/api.php")
    commons = MediaWikiClient("https://commons.wikimedia.org/w/api.php")

    wd_token = wikidata.login(username, password)
    commons_token = commons.login(username, password)

    results: dict[str, object] = {"entity_id": ENTITY_ID, "url": f"https://www.wikidata.org/wiki/{ENTITY_ID}"}

    with tempfile.TemporaryDirectory() as tmp:
        logo_path = Path(tmp) / "bionixus-logo.webp"
        download_logo(logo_path)
        commons_filename = upload_logo(commons, commons_token, logo_path)
        results["commons_file"] = commons_filename

    if not entity_has_claim(wikidata, ENTITY_ID, "P31"):
        add_item_claim(wikidata, wd_token, ENTITY_ID, "P31", "Q4830453")
        results["p31"] = "added"
    else:
        results["p31"] = "already_present (business / Q4830453)"

    if not entity_has_claim(wikidata, ENTITY_ID, "P18"):
        add_commons_image_claim(wikidata, wd_token, ENTITY_ID, commons_filename)
        results["p18"] = "added"
        results["commons_url"] = "https://commons.wikimedia.org/wiki/File:BioNixus_logo.webp"
    else:
        results["p18"] = "already_present"
        results["commons_url"] = "https://commons.wikimedia.org/wiki/File:BioNixus_logo.webp"

    print(json.dumps(results, indent=2))
    return 0


if __name__ == "__main__":
    sys.exit(main())
