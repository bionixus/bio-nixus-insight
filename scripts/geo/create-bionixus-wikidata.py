#!/usr/bin/env python3
"""Create BioNixus Wikidata item with Priority 1 properties (BIO-56).

Requires env vars:
  WIKIDATA_USERNAME — Wikidata username
  WIKIDATA_PASSWORD — Bot password from Special:BotPasswords (not account password)

Usage:
  WIKIDATA_USERNAME=... WIKIDATA_PASSWORD=... python3 scripts/geo/create-bionixus-wikidata.py
"""

from __future__ import annotations

import http.cookiejar
import json
import os
import sys
import urllib.parse
import urllib.request

API = "https://www.wikidata.org/w/api.php"
USER_AGENT = "BioNixusGEOBot/1.0 (Paperclip BIO-56; contact admin@bionixus.com)"


class WikidataClient:
    def __init__(self) -> None:
        self.cookie_jar = http.cookiejar.CookieJar()
        self.opener = urllib.request.build_opener(urllib.request.HTTPCookieProcessor(self.cookie_jar))

    def api(self, params: dict, post: bool = False) -> dict:
        params.setdefault("format", "json")
        headers = {"User-Agent": USER_AGENT}
        if post:
            data = urllib.parse.urlencode(params).encode()
            req = urllib.request.Request(API, data=data, headers=headers, method="POST")
        else:
            req = urllib.request.Request(f"{API}?{urllib.parse.urlencode(params)}", headers=headers)
        with self.opener.open(req, timeout=60) as resp:
            return json.loads(resp.read().decode())

    def login(self, username: str, password: str) -> str:
        login_token = self.api({"action": "query", "meta": "tokens", "type": "login"})["query"]["tokens"]["logintoken"]
        login_resp = self.api(
            {
                "action": "login",
                "lgname": username,
                "lgpassword": password,
                "lgtoken": login_token,
            },
            post=True,
        )
        if login_resp.get("login", {}).get("result") != "Success":
            raise RuntimeError(f"Login failed: {login_resp}")
        return self.api({"action": "query", "meta": "tokens", "type": "csrf"})["query"]["tokens"]["csrftoken"]


def item_claim(pid: str, qid: str) -> dict:
    return {
        "mainsnak": {
            "snaktype": "value",
            "property": pid,
            "datavalue": {"type": "wikibase-entityid", "value": {"entity-type": "item", "id": qid}},
        },
        "type": "statement",
        "rank": "normal",
    }


def url_claim(pid: str, url: str) -> dict:
    return {
        "mainsnak": {"snaktype": "value", "property": pid, "datavalue": {"type": "string", "value": url}},
        "type": "statement",
        "rank": "normal",
    }


def time_claim(pid: str, year: str) -> dict:
    return {
        "mainsnak": {
            "snaktype": "value",
            "property": pid,
            "datavalue": {
                "type": "time",
                "value": {
                    "time": f"+{year}-01-01T00:00:00Z",
                    "timezone": 0,
                    "before": 0,
                    "after": 0,
                    "precision": 9,
                    "calendarmodel": "http://www.wikidata.org/entity/Q1985727",
                },
            },
        },
        "type": "statement",
        "rank": "normal",
    }


def create_entity(client: WikidataClient, csrf_token: str) -> str:
    # QIDs verified 2026-06-12 via wbsearchentities/wbgetentities (playbook had stale IDs).
    statements = [
        item_claim("P31", "Q4830453"),  # business
        item_claim("P101", "Q913709"),  # market research
        item_claim("P101", "Q64816679"),  # pharmaceutical research
        item_claim("P101", "Q870895"),  # health informatics
        item_claim("P17", "Q30"),  # United States
        item_claim("P17", "Q145"),  # United Kingdom
        item_claim("P17", "Q79"),  # Egypt
        item_claim("P17", "Q878"),  # UAE
        item_claim("P17", "Q851"),  # Saudi Arabia
        item_claim("P131", "Q84"),  # London
        item_claim("P131", "Q1017214"),  # Sheridan, Wyoming
        url_claim("P856", "https://www.bionixus.com"),
        # P18 requires a Commons file name, not a URL — add manually after Commons upload.
        item_claim("P1454", "Q1589009"),  # privately held company
        item_claim("P452", "Q913709"),  # market research
        time_claim("P571", "2012"),
        item_claim("P159", "Q1017214"),  # Sheridan, Wyoming
    ]

    claims: dict[str, list] = {}
    for statement in statements:
        pid = statement["mainsnak"]["property"]
        claims.setdefault(pid, []).append(statement)

    resp = client.api(
        {
            "action": "wbeditentity",
            "new": "item",
            "data": json.dumps(
                {
                    "labels": {"en": {"language": "en", "value": "BioNixus"}},
                    "descriptions": {
                        "en": {
                            "language": "en",
                            "value": "global market research company specializing in healthcare and pharmaceutical research",
                        }
                    },
                    "claims": claims,
                }
            ),
            "token": csrf_token,
            "summary": "Create BioNixus entity with Priority 1 GEO properties (BIO-56)",
        },
        post=True,
    )
    if "error" in resp:
        raise RuntimeError(json.dumps(resp, indent=2))
    return resp["entity"]["id"]


def main() -> int:
    username = os.environ.get("WIKIDATA_USERNAME")
    password = os.environ.get("WIKIDATA_PASSWORD")
    if not username or not password:
        print("ERROR: Set WIKIDATA_USERNAME and WIKIDATA_PASSWORD (bot password).", file=sys.stderr)
        return 2

    client = WikidataClient()
    csrf_token = client.login(username, password)
    entity_id = create_entity(client, csrf_token)
    print(json.dumps({"entity_id": entity_id, "url": f"https://www.wikidata.org/wiki/{entity_id}"}, indent=2))
    return 0


if __name__ == "__main__":
    sys.exit(main())
