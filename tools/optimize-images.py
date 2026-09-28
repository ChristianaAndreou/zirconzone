"""Δημιουργεί ελαφριές εκδόσεις WebP όλων των εικόνων του site στο images/web/.
Τρέξε:  pip install pillow  &&  python tools/optimize-images.py
"""
from pathlib import Path
from PIL import Image, ImageOps

SRC = Path("images")
OUT = SRC / "web"
OUT.mkdir(exist_ok=True)
MAX_SIDE = 1400   # αρκετό για retina σε κάρτες και lightbox

for f in sorted(SRC.iterdir()):
    if f.suffix.lower() not in {".png", ".jpg", ".jpeg"} or f.name == "zz.jpg":
        continue
    im = ImageOps.exif_transpose(Image.open(f)).convert("RGB")
    im.thumbnail((MAX_SIDE, MAX_SIDE), Image.LANCZOS)
    im.save(OUT / (f.stem + ".webp"), "WEBP", quality=80, method=6)

# Logo: αφαιρεί το λευκό φόντο ώστε να κάθεται σωστά σε οποιοδήποτε χρώμα
logo = Image.open(SRC / "zz.jpg").convert("RGBA")
px = [(r, g, b, 0 if min(r, g, b) > 235 else a) for r, g, b, a in logo.getdata()]
logo.putdata(px)
logo = logo.crop(logo.getbbox())
logo.thumbnail((600, 600), Image.LANCZOS)
logo.save(OUT / "logo.png", optimize=True)
print("done")
