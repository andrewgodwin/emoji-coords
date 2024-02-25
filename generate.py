import json
import sys
import pyproj
from hilbertcurve.hilbertcurve import HilbertCurve

# Grid specification

ORIGIN = [-264900, 6807180]
SIZE = [600, 900]
CURVE_LEVEL = 10  # Should be an even number

# Emoji choice

EMOJI_CATEGORIES = [
    "face-smiling",
    "face-affection",
    "face-tongue",
    "face-hand",
    "face-neutral-skeptical",
    "face-sleepy",
    "face-unwell",
    "face-hat",
    "face-glasses",
    "face-concerned",
    "face-negative",
    "face-costume",
    "cat-face",
    "monkey-face",
    "emotion",
    "hand-fingers-open",
    "hand-fingers-partial",
    "hand-single-finger",
    "hand-fingers-closed",
    "hands",
    "hand-prop",
    "body-parts",
    "person-fantasy",
    "person-sport",
    "person-resting",
    "person-symbol",
    "animal-mammal",
    "animal-bird",
    "animal-amphibian",
    "animal-reptile",
    "animal-marine",
    "animal-bug",
    "plant-flower",
    "plant-other",
    "food-fruit",
    "food-vegetable",
    "food-prepared",
    "food-asian",
    "food-marine",
    "food-sweet",
    "drink",
    "dishware",
    "place-map",
    "place-geographic",
    "place-building",
    "place-other",
    "transport-ground",
    "transport-water",
    "transport-air",
    "hotel",
    "time",
    "sky & weather",
    "event",
    "award-medal",
    "sport",
    "game",
    "arts & crafts",
    "clothing",
    "sound",
    "music",
    "musical-instrument",
    "phone",
    "computer",
    "light & video",
    "book-paper",
    "money",
    "mail",
    "writing",
    "office",
    "lock",
    "tool",
    "science",
    "medical",
    "household",
    "other-object",
    "transport-sign",
    "warning",
    "arrow",
    "zodiac",
    "av-symbol",
    "math",
    "punctuation",
    "currency",
    "other-symbol",
    "keycap",
    "alphanum",
]
with open("all-emoji.json") as fh:
    all_emojis = json.load(fh)
emojis = []
for category in EMOJI_CATEGORIES:
    # Scan to find category
    found = False
    for line in all_emojis:
        if line == [category]:
            found = True
        elif len(line) != 4 and found:
            break
        elif found:
            emojis.append(line[2])
    if not found:
        raise ValueError(f"Bad category {category}")

print(emojis)


# Validate the number of emoji
curve = HilbertCurve(CURVE_LEVEL, 2)
hilbert_points = int((2**CURVE_LEVEL) - (1 / (2**CURVE_LEVEL))) + 1
assert (
    len(emojis) >= hilbert_points
), f"Not enough emojis (have {len(emojis)}, need {hilbert_points}"
print(f"{hilbert_points} points", file=sys.stderr)
print(f"{len(emojis)} emojis", file=sys.stderr)

# Find the maximum curve dimension the dumb way (I forget the equation)
max_x = 0
max_y = 0
for i in range(hilbert_points):
    x, y = curve.point_from_distance(i)
    max_x = max(max_x, x)
    max_y = max(max_y, y)

# Prep coordinate systems
latlong = pyproj.CRS.from_epsg(4326)
sphmerc = pyproj.CRS.from_epsg(3857)
merc_to_lat = pyproj.Transformer.from_crs(sphmerc, latlong)

# Generate GeoJSON
features = []
for i in range(hilbert_points):
    x, y = curve.point_from_distance(i)
    lat, long = merc_to_lat.transform(
        ORIGIN[0] + ((x / max_x) * SIZE[0]),
        ORIGIN[1] + ((y / max_y) * SIZE[1]),
    )
    features.append(
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [long, lat],
            },
            "properties": {"name": emojis[i]},
        }
    )

with open("data.json", "w") as fh:
    json.dump({"type": "FeatureCollection", "features": features}, fh)

with open("data.js", "w") as fh:
    fh.write("var featureCollection = ")
    json.dump({"type": "FeatureCollection", "features": features}, fh)
