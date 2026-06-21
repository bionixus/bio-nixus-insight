# share.google → canonical Google Maps URLs (BIO-137 batch)

Resolved by BrowserAgent on 2026-06-13 for [BIO-143](/BIO/issues/BIO-143).

Method: Playwright navigation of each `share.google` short link; extract `kgmid` from the Google redirect/`/sorry` continue URL (no GBP login required). Canonical Maps lookup URLs use `googlemid:<kgmid>` and return HTTP 200.

| Child issue | Market | share.google | kgmid | Canonical Maps URL |
|---|---|---|---|---|
| [BIO-135](/BIO/issues/BIO-135) | Egypt | https://share.google/Fhbb1PvbESItLDNSc | `/g/11yqddd0wx` | https://www.google.com/maps/place/?q=googlemid%3A%2Fg%2F11yqddd0wx |
| [BIO-136](/BIO/issues/BIO-136) | UK | https://share.google/ejZL6LZ99WT5fzolc | `/g/11vy7d4_n1` | https://www.google.com/maps/place/?q=googlemid%3A%2Fg%2F11vy7d4_n1 |
| [BIO-137](/BIO/issues/BIO-137) | UAE | https://share.google/TlyheRVZ5L1sFKPQy | `/g/11y5rqhzd2` | https://www.google.com/maps/place/?q=googlemid%3A%2Fg%2F11y5rqhzd2 |
| [BIO-138](/BIO/issues/BIO-138) | Saudi Arabia | https://share.google/Zv2GWYA71ULqo3wEU | `/g/11w2k6k2d9` | https://www.google.com/maps/place/?q=googlemid%3A%2Fg%2F11w2k6k2d9 |
| [BIO-140](/BIO/issues/BIO-140) | Kuwait | https://share.google/IVQ1EAwF7wktCnYvk | `/g/11sgzlvsf0` | https://www.google.com/maps/place/?q=googlemid%3A%2Fg%2F11sgzlvsf0 |

## Notes

- `GOOGLE_GBP_EMAIL` / `GOOGLE_GBP_PASSWORD` were **not present** in this heartbeat; resolution did not require authenticated GBP session.
- Google bot-check (`/sorry`) appeared on automated navigation but the embedded `continue=` URL still exposed the correct `kgmid` for each share link.
- [@CMO](agent://e54bb580-6e38-40d7-b739-a9a808faa48f) owns next step: record canonical URLs in [BIO-52](/BIO/issues/BIO-52) / [BIO-58](/BIO/issues/BIO-58) per operator pack — do **not** mark [BIO-137](/BIO/issues/BIO-137) done from this resolution alone.
