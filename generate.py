import json
import sys
import pyproj
from shapely.geometry import Point, Polygon
from lsystems import GosperCurve, MooreCurve, TerdragonCurve

# Grid specification

CURVE_TYPE = GosperCurve(5)
SPACING_FACTOR = 3.3  # Increase above 1 to try and get higher curves to work
SITE_BOUNDARY = [
    [-264612.965645827469416, 6807187.508185653947294],
    [-264576.27361474907957, 6807277.491023774258792],
    [-264504.19998227362521, 6807264.823536854237318],
    [-264427.321440966508817, 6807461.824798953719437],
    [-264400.676037445256952, 6807559.67021516431123],
    [-264383.640451587387361, 6807721.72668576054275],
    [-264383.203641693631653, 6807812.583143669180572],
    [-264257.402392281917855, 6807779.385591740719974],
    [-264177.466181718278676, 6807946.246971168555319],
    [-264406.791375958418939, 6808048.897296208888292],
    [-264680.234369471261743, 6808076.416319518350065],
    [-264680.671179365017451, 6808062.001593024469912],
    [-264640.047859242476989, 6808009.147595874965191],
    [-264655.336205525207333, 6807836.60768782813102],
    [-264688.096947559446562, 6807780.69602142367512],
    [-264719.110450018604752, 6807723.473925336264074],
    [-264772.401257061050273, 6807730.462883639149368],
    [-264782.884694512060378, 6807663.194159994833171],
    [-264809.96690792706795, 6807638.951210885308683],
    [-264841.417220279981848, 6807630.215013009496033],
    [-264845.785319218004588, 6807614.92666672822088],
    [-264829.186543253948912, 6807608.374518320895731],
    [-264825.255254209798295, 6807583.913164269179106],
    [-264874.177962314221077, 6807494.148731095716357],
    [-264892.96078774734633, 6807453.743815918453038],
    [-264895.581647109938785, 6807256.960958766750991],
    [-264612.965645827469416, 6807187.508185653947294],
]

# Load emoji
emojis = []
with open("emoji.txt") as fh:
    for line in fh:
        if line.startswith("#"):
            continue
        emojis.append(line.strip())

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
