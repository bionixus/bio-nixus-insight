#!/usr/bin/env python3
"""Add P854 references and fix Commons logo licensing for BioNixus Q140188264 (BIO-134).

Adds sourced references to notability-critical claims (P856, P571, P159, P101) and
updates File:BioNixus logo.webp on Commons to remove the invalid CopyrightedFreeUseLogo
tagging and apply the VRT-pending licensing block until permissions@wikimedia.org confirms.

Requires env vars:
  WIKIDATA_USERNAME — Wikidata / Commons account (e.g. Bionixus bot user)
  WIKIDATA_PASSWORD — Bot password from Special:BotPasswords

Usage:
  python3 scripts/geo/add-bionixus-wikidata-references.py
  python3 scripts/geo/add-bionixus-wikidata-references.py --dry-run
"""

from __future__ import annotations

import argparse
import http.cookiejar
import json
import os
import sys
import urllib.parse
import urllib.request
from datetime import datetime, timezone

ENTITY_ID = "Q140188264"
COMMONS_FILE = "BioNixus logo.webp"
USER_AGENT = "BioNixusGEOBot/1.0 (Paperclip BIO-134; contact admin@bionixus.com)"

# Statement GUIDs on Q140188264 (verified 2026-06-13 via wbgetentities API)
STATEMENTS: dict[str, list[str]] = {
    "P856": ["Q140188264$4F4D9419-C39C-4FC6-9F01-117DB1618175"],
    "P571": ["Q140188264$D649055A-AF25-420B-9EDE-DF8BD717FC26"],
    "P159": ["Q140188264$6F568806-2D4A-4783-9C5D-7C6E42E209A9"],
    "P101": [
        "Q140188264$2054428A-5D1A-4F02-B1DD-E26D93C56229",  # market research Q913709
        "Q140188264$86351535-C4D0-4137-B4AE-39685A7761A4",  # pharmaceutical research Q64816679
        "Q140188264$A5113D3A-A50C-418D-9E67-E5319A1C9007",  # health informatics Q870895
    ],
}

# Official + independent reference URLs (Search Intent Alignment + E-E-A-T)
REFERENCE_URLS: dict[str, list[str]] = {
    "P856": [
        "https://www.bionixus.com",
        "https://www.greenbook.org/company/BioNixus-Market-Research",
    ],
    "P571": [
        "https://www.bionixus.com/about",
        "https://www.greenbook.org/company/BioNixus-Market-Research",
    ],
    "P159": [
        "https://www.bionixus.com/about",
        "https://www.greenbook.org/company/BioNixus-Market-Research",
    ],
    "P101": [
        "https://www.bionixus.com/about",
        "https://www.greenbook.org/company/BioNixus-Market-Research",
    ],
}

COMMONS_PAGE_TEXT = "\n".join(
    [
        "== {{int:filedesc}} ==",
        "{{en|1=Logo of [[d:Q140188264|BioNixus]], a global market research company specializing in healthcare and pharmaceutical research.}}",
        "{{Logo}}",
        "",
        "== {{int:license-header}} ==",
        "{{Awaiting OTRS}}",
        "",
        "The copyright holder, BioNixus, has submitted a permission request to "
        "[mailto:permissions@wikimedia.org permissions@wikimedia.org] to release this logo under a "
        "free license for use on Wikimedia projects. See [[Commons:VRT]] for the volunteer response process.",
        "",
        "{{Trademarked}}",
    ]
)


class MediaWikiClient:
    def __init__(self, api_base: str) -> None:
        self.api_base = api_base
        self.cookie_jar = http.cookiejar.CookieJar()
        self.opener = urllib.request.build_opener(urllib.request.HTTPCookieProcessor(self.cookie_jar))

    def api(self, params: dict, post: bool = False) -> dict:
        params.setdefault("format", "json")
        headers = {"User-Agent": USER_AGENT}
        if post:
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


def retrieved_snak() -> dict:
    now = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
    return {
        "snaktype": "value",
        "property": "P813",
        "datavalue": {
            "type": "time",
            "value": {
                "time": f"+{now}",
                "timezone": 0,
                "before": 0,
                "after": 0,
                "precision": 11,
                "calendarmodel": "http://www.wikidata.org/entity/Q1985727",
            },
        },
    }


def build_reference_snaks(urls: list[str]) -> dict:
    return {
        "P854": [
            {
                "snaktype": "value",
                "property": "P854",
                "datavalue": {"type": "string", "value": url},
            }
            for url in urls
        ],
        "P813": [retrieved_snak()],
    }


def statement_has_p854(client: MediaWikiClient, entity_id: str, statement_id: str) -> bool:
    pid = statement_id.split("$", 1)[0]
    resp = client.api({"action": "wbgetentities", "ids": entity_id, "props": "claims"})
    claims = resp.get("entities", {}).get(entity_id, {}).get("claims", {}).get(pid, [])
    for claim in claims:
        if claim.get("id") != statement_id:
            continue
        for ref in claim.get("references", []):
            for snak_list in ref.get("snaks", {}).values():
                for snak in snak_list:
                    if snak.get("property") == "P854":
                        return True
    return False


def add_reference(
    client: MediaWikiClient,
    csrf_token: str,
    statement_id: str,
    urls: list[str],
    dry_run: bool,
) -> dict:
    payload = {
        "action": "wbsetreference",
        "statement": statement_id,
        "snaks": json.dumps(build_reference_snaks(urls)),
        "snaks-order": json.dumps(["P854", "P813"]),
        "bot": "1",
        "summary": "Add P854 references for BioNixus notability (BIO-134)",
        "token": csrf_token,
    }
    if dry_run:
        return {"dry_run": True, "statement": statement_id, "urls": urls}
    resp = client.api(payload, post=True)
    if "error" in resp:
        raise RuntimeError(json.dumps(resp, indent=2))
    return resp


def fix_commons_logo_page(client: MediaWikiClient, csrf_token: str, dry_run: bool) -> dict:
    title = f"File:{COMMONS_FILE}"
    if dry_run:
        return {"dry_run": True, "title": title, "text_preview": COMMONS_PAGE_TEXT[:200] + "..."}

    resp = client.api(
        {
            "action": "edit",
            "title": title,
            "text": COMMONS_PAGE_TEXT,
            "summary": "Replace invalid CopyrightedFreeUseLogo; mark Awaiting OTRS (BIO-134)",
            "token": csrf_token,
            "bot": "1",
        },
        post=True,
    )
    if "error" in resp:
        raise RuntimeError(json.dumps(resp, indent=2))
    return resp


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--dry-run", action="store_true", help="Print planned edits without API writes")
    args = parser.parse_args()

    username = os.environ.get("WIKIDATA_USERNAME")
    password = os.environ.get("WIKIDATA_PASSWORD")
    if not args.dry_run and (not username or not password):
        print("ERROR: Set WIKIDATA_USERNAME and WIKIDATA_PASSWORD.", file=sys.stderr)
        return 2

    results: dict[str, object] = {
        "entity_id": ENTITY_ID,
        "entity_url": f"https://www.wikidata.org/wiki/{ENTITY_ID}",
        "commons_url": "https://commons.wikimedia.org/wiki/File:BioNixus_logo.webp",
        "dry_run": args.dry_run,
        "references_added": [],
        "references_skipped": [],
    }

    if args.dry_run:
        for pid, guids in STATEMENTS.items():
            for guid in guids:
                results["references_added"].append(
                    {"property": pid, "statement": guid, "urls": REFERENCE_URLS[pid]}
                )
        results["commons_fix"] = {"dry_run": True, "title": f"File:{COMMONS_FILE}", "summary": "Replace invalid CopyrightedFreeUseLogo; mark Awaiting OTRS"}
        print(json.dumps(results, indent=2))
        return 0

    wikidata = MediaWikiClient("https://www.wikidata.org/w/api.php")
    commons = MediaWikiClient("https://commons.wikimedia.org/w/api.php")

    wd_token = wikidata.login(username, password)
    commons_token = commons.login(username, password)

    for pid, guids in STATEMENTS.items():
        urls = REFERENCE_URLS[pid]
        for guid in guids:
            if statement_has_p854(wikidata, ENTITY_ID, guid):
                results["references_skipped"].append({"property": pid, "statement": guid, "reason": "already_has_p854"})
                continue
            ref_result = add_reference(wikidata, wd_token, guid, urls, dry_run=False)
            results["references_added"].append(
                {
                    "property": pid,
                    "statement": guid,
                    "urls": urls,
                    "reference_hash": ref_result.get("reference", {}).get("hash"),
                }
            )

    results["commons_fix"] = fix_commons_logo_page(commons, commons_token, dry_run=False)

    print(json.dumps(results, indent=2))
    return 0


if __name__ == "__main__":
    sys.exit(main())
