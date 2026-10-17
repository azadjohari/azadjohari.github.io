"""Refresh content-based asset URLs after editing CSS, scripts or trip details.

Run from any directory. Use --check to verify without changing the HTML.
"""
import hashlib
from pathlib import Path
import re
import sys

root = Path(__file__).resolve().parent
page = root / "index.html"
html = page.read_text()
updated = html
for name in ("styles.css", "trip.js", "app.js"):
    digest = hashlib.sha256((root / name).read_bytes()).hexdigest()[:16]
    # Match only these local asset attributes, preserving all other HTML.
    pattern = r'((?:href|src)="\./' + re.escape(name) + r')(?:\?[^"\s]*)?(")'
    updated, count = re.subn(pattern, lambda match: f'{match[1]}?v={digest}{match[2]}', updated)
    if count != 1:
        raise SystemExit(f"Expected one asset reference for {name}, found {count}")

if "--check" in sys.argv:
    if html != updated:
        raise SystemExit("Asset URLs are stale. Run python raya-2027/update-assets.py")
    print("Asset URLs match the current CSS and JavaScript.")
else:
    page.write_text(updated)
    print("Updated content-based CSS and JavaScript URLs.")
