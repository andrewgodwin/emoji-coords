import json
import sys
import pyproj
from shapely.geometry import Point, Polygon
from lsystems import GosperCurve, MooreCurve

# Grid specification

CURVE_TYPE = GosperCurve(5)
SPACING_FACTOR = 3.5  # Increase above 1 to try and get higher curves to work
SITE_BOUNDARY = [
    [-264611.6552161462605, 6807182.048061979934573],
    [-264574.089565280301031, 6807271.157280313782394],
    [-264500.705503123463131, 6807259.80022307485342],
    [-264421.206102453579661, 6807457.23829506803304],
    [-264394.123889038572088, 6807560.325430002994835],
    [-264380.14597243728349, 6807721.945090705528855],
    [-264381.893212012422737, 6807805.812590313144028],
    [-264251.723863662860822, 6807773.488658172078431],
    [-264175.718942143197637, 6807947.338995900936425],
    [-264399.365607763989829, 6808051.299750623293221],
    [-264686.786517878121231, 6808080.129203613847494],
    [-264686.786517878121231, 6808058.28870892431587],
    [-264671.061361701693386, 6808042.563552747480571],
    [-264750.560762371576857, 6807833.768423515371978],
    [-264788.126413237536326, 6807771.74141859728843],
    [-264774.148496636247728, 6807724.565950067713857],
    [-264780.263835149351507, 6807672.148762813769281],
    [-264809.96690792706795, 6807638.951210885308683],
    [-264841.417220279981848, 6807630.215013009496033],
    [-264845.785319218004588, 6807614.92666672822088],
    [-264829.186543253948912, 6807608.374518320895731],
    [-264825.255254209798295, 6807583.913164269179106],
    [-264875.488391995721031, 6807498.298425085842609],
    [-264892.96078774734633, 6807453.743815918453038],
    [-264895.581647110113408, 6807250.190405412577093],
    [-264611.6552161462605, 6807182.048061979934573],
]

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

# Extract individual emoji based on categories
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

# Calculate the site origin and bounds
min_x = SITE_BOUNDARY[0][0]
min_y = SITE_BOUNDARY[0][1]
max_x = SITE_BOUNDARY[0][0]
max_y = SITE_BOUNDARY[0][1]
for x, y in SITE_BOUNDARY[1:]:
    min_x = min(min_x, x)
    min_y = min(min_y, y)
    max_x = max(max_x, x)
    max_y = max(max_y, y)
size_x = max_x - min_x
size_y = max_y - min_y

# Enumerate all points on the curve and find its bounds
curve_points = list(CURVE_TYPE.to_relative_coordinates())
# Go through and generate a list of all curve points within the boundary
boundary_polygon = Polygon(SITE_BOUNDARY)
valid_points = []
for cx, cy in curve_points:
    cx = (cx * SPACING_FACTOR) - ((SPACING_FACTOR - 1) / 2)
    cy = (cy * SPACING_FACTOR) - ((SPACING_FACTOR - 1) / 2)
    x = min_x + (cx * size_x)
    y = min_y + (cy * size_y)
    if boundary_polygon.contains(Point(x, y)):
        valid_points.append((x, y))

# Validate the number of emoji
print(f"{len(valid_points)} valid points")
print(f"{len(emojis)} emojis")
assert len(emojis) >= len(valid_points), "Not enough emojis!"

# Prep coordinate systems
latlong = pyproj.CRS.from_epsg(4326)
sphmerc = pyproj.CRS.from_epsg(3857)
merc_to_lat = pyproj.Transformer.from_crs(sphmerc, latlong)

# Generate GeoJSON
features = []
for i, (x, y) in enumerate(valid_points):
    lat, long = merc_to_lat.transform(x, y)
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
