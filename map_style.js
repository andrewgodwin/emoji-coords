var map_style = {
    "version": 8,
    "name": "EMF",
    "center": [
        -2.3784,
        52.0411
    ],
    "zoom": 16,
    "bearing": 0,
    "pitch": 0,
    "sources": {
        "openmaptiles": {
            "type": "vector",
            "url": "https://api.maptiler.com/tiles/v3/tiles.json?key=iiaOS0kq1MPr2LlHPTSa"
        },
        "site_plan": {
            "type": "vector",
            "url": "https://map.emfcamp.org/capabilities/buildmap"
        },
        "villages": {
            "type": "geojson",
            "data": "https://www.emfcamp.org/api/villages.geojson"
        },
        "installations": {
            "type": "geojson",
            "data": "https://gist.githubusercontent.com/prehensile/b88c04be8c4694d7a5a85b613079e576/raw/d1effd6b6a7c25a1d83e638298c85a6fdc4ac09b/installations.json"
        }
    },
    "sprite": "https://openmaptiles.github.io/positron-gl-style/sprite",
    "glyphs": "https://map.emfcamp.org/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "paint": {
                "background-color": "rgba(240, 247, 240, 1)"
            }
        },
        {
            "id": "water",
            "type": "fill",
            "source": "openmaptiles",
            "source-layer": "water",
            "filter": [
                "==",
                "$type",
                "Polygon"
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "rgb(194, 200, 202)",
                "fill-antialias": true
            }
        },
        {
            "id": "landcover_ice_shelf",
            "type": "fill",
            "source": "openmaptiles",
            "source-layer": "landcover",
            "maxzoom": 8,
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "Polygon"
                ],
                [
                    "==",
                    "subclass",
                    "ice_shelf"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "hsl(0, 0%, 98%)",
                "fill-opacity": 0.7
            }
        },
        {
            "id": "landcover_glacier",
            "type": "fill",
            "source": "openmaptiles",
            "source-layer": "landcover",
            "maxzoom": 8,
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "Polygon"
                ],
                [
                    "==",
                    "subclass",
                    "glacier"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "hsl(0, 0%, 98%)",
                "fill-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            1
                        ],
                        [
                            8,
                            0.5
                        ]
                    ]
                }
            }
        },
        {
            "id": "landuse_residential",
            "type": "fill",
            "source": "openmaptiles",
            "source-layer": "landuse",
            "maxzoom": 16,
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "Polygon"
                ],
                [
                    "==",
                    "class",
                    "residential"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "rgb(234, 234, 230)",
                "fill-opacity": {
                    "base": 0.6,
                    "stops": [
                        [
                            8,
                            0.8
                        ],
                        [
                            9,
                            0.6
                        ]
                    ]
                }
            }
        },
        {
            "id": "waterway",
            "type": "line",
            "source": "openmaptiles",
            "source-layer": "waterway",
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "hsl(195, 17%, 78%)"
            }
        },
        {
            "id": "water_name",
            "type": "symbol",
            "source": "openmaptiles",
            "source-layer": "water_name",
            "filter": [
                "==",
                "$type",
                "LineString"
            ],
            "layout": {
                "text-field": "{name:latin}\n{name:nonlatin}",
                "symbol-placement": "line",
                "text-rotation-alignment": "map",
                "symbol-spacing": 500,
                "text-font": [
                    "Open Sans Regular"
                ],
                "text-size": 12
            },
            "paint": {
                "text-color": "rgb(157,169,177)",
                "text-halo-color": "rgb(242,243,240)",
                "text-halo-width": 1,
                "text-halo-blur": 1
            }
        },
        {
            "id": "building",
            "type": "fill",
            "source": "openmaptiles",
            "source-layer": "building",
            "minzoom": 12,
            "paint": {
                "fill-color": "rgb(234, 234, 229)",
                "fill-outline-color": "rgb(219, 219, 218)",
                "fill-antialias": true
            }
        },
        {
            "id": "tunnel_motorway_casing",
            "type": "line",
            "metadata": {
                "mapbox:group": "b6371a3f2f5a9932464fa3867530a2e5"
            },
            "source": "openmaptiles",
            "source-layer": "transportation",
            "minzoom": 6,
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "all",
                    [
                        "==",
                        "brunnel",
                        "tunnel"
                    ],
                    [
                        "==",
                        "class",
                        "motorway"
                    ]
                ]
            ],
            "layout": {
                "line-cap": "butt",
                "line-join": "miter",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "rgb(213, 213, 213)",
                "line-width": {
                    "base": 1.4,
                    "stops": [
                        [
                            5.8,
                            0
                        ],
                        [
                            6,
                            3
                        ],
                        [
                            20,
                            40
                        ]
                    ]
                },
                "line-opacity": 1
            }
        },
        {
            "id": "tunnel_motorway_inner",
            "type": "line",
            "metadata": {
                "mapbox:group": "b6371a3f2f5a9932464fa3867530a2e5"
            },
            "source": "openmaptiles",
            "source-layer": "transportation",
            "minzoom": 6,
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "all",
                    [
                        "==",
                        "brunnel",
                        "tunnel"
                    ],
                    [
                        "==",
                        "class",
                        "motorway"
                    ]
                ]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "rgb(234,234,234)",
                "line-width": {
                    "base": 1.4,
                    "stops": [
                        [
                            4,
                            2
                        ],
                        [
                            6,
                            1.3
                        ],
                        [
                            20,
                            30
                        ]
                    ]
                }
            }
        },
        {
            "id": "aeroway-taxiway",
            "type": "line",
            "metadata": {
                "mapbox:group": "1444849345966.4436"
            },
            "source": "openmaptiles",
            "source-layer": "aeroway",
            "minzoom": 12,
            "filter": [
                "all",
                [
                    "in",
                    "class",
                    "taxiway"
                ]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "hsl(0, 0%, 88%)",
                "line-width": {
                    "base": 1.55,
                    "stops": [
                        [
                            13,
                            1.8
                        ],
                        [
                            20,
                            20
                        ]
                    ]
                },
                "line-opacity": 1
            }
        },
        {
            "id": "aeroway-runway-casing",
            "type": "line",
            "metadata": {
                "mapbox:group": "1444849345966.4436"
            },
            "source": "openmaptiles",
            "source-layer": "aeroway",
            "minzoom": 11,
            "filter": [
                "all",
                [
                    "in",
                    "class",
                    "runway"
                ]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "hsl(0, 0%, 88%)",
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            11,
                            6
                        ],
                        [
                            17,
                            55
                        ]
                    ]
                },
                "line-opacity": 1
            }
        },
        {
            "id": "aeroway-area",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1444849345966.4436"
            },
            "source": "openmaptiles",
            "source-layer": "aeroway",
            "minzoom": 4,
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "Polygon"
                ],
                [
                    "in",
                    "class",
                    "runway",
                    "taxiway"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            13,
                            0
                        ],
                        [
                            14,
                            1
                        ]
                    ]
                },
                "fill-color": "rgba(255, 255, 255, 1)"
            }
        },
        {
            "id": "aeroway-runway",
            "type": "line",
            "metadata": {
                "mapbox:group": "1444849345966.4436"
            },
            "source": "openmaptiles",
            "source-layer": "aeroway",
            "minzoom": 11,
            "maxzoom": 24,
            "filter": [
                "all",
                [
                    "in",
                    "class",
                    "runway"
                ],
                [
                    "==",
                    "$type",
                    "LineString"
                ]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "rgba(255, 255, 255, 1)",
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            11,
                            4
                        ],
                        [
                            17,
                            50
                        ]
                    ]
                },
                "line-opacity": 1
            }
        },
        {
            "id": "highway_minor",
            "type": "line",
            "metadata": {
                "mapbox:group": "b6371a3f2f5a9932464fa3867530a2e5"
            },
            "source": "openmaptiles",
            "source-layer": "transportation",
            "minzoom": 8,
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "in",
                    "class",
                    "minor",
                    "service",
                    "track"
                ]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "hsl(0, 0%, 88%)",
                "line-width": {
                    "base": 1.55,
                    "stops": [
                        [
                            13,
                            1.8
                        ],
                        [
                            20,
                            20
                        ]
                    ]
                },
                "line-opacity": 0.9
            }
        },
        {
            "id": "highway_major_casing",
            "type": "line",
            "metadata": {
                "mapbox:group": "b6371a3f2f5a9932464fa3867530a2e5"
            },
            "source": "openmaptiles",
            "source-layer": "transportation",
            "minzoom": 11,
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "in",
                    "class",
                    "primary",
                    "secondary",
                    "tertiary",
                    "trunk"
                ]
            ],
            "layout": {
                "line-cap": "butt",
                "line-join": "miter",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "rgb(213, 213, 213)",
                "line-dasharray": [
                    12,
                    0
                ],
                "line-width": {
                    "base": 1.3,
                    "stops": [
                        [
                            10,
                            3
                        ],
                        [
                            20,
                            23
                        ]
                    ]
                }
            }
        },
        {
            "id": "highway_major_inner",
            "type": "line",
            "metadata": {
                "mapbox:group": "b6371a3f2f5a9932464fa3867530a2e5"
            },
            "source": "openmaptiles",
            "source-layer": "transportation",
            "minzoom": 11,
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "in",
                    "class",
                    "primary",
                    "secondary",
                    "tertiary",
                    "trunk"
                ]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#fff",
                "line-width": {
                    "base": 1.3,
                    "stops": [
                        [
                            10,
                            2
                        ],
                        [
                            20,
                            20
                        ]
                    ]
                }
            }
        },
        {
            "id": "highway_major_subtle",
            "type": "line",
            "metadata": {
                "mapbox:group": "b6371a3f2f5a9932464fa3867530a2e5"
            },
            "source": "openmaptiles",
            "source-layer": "transportation",
            "maxzoom": 11,
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "in",
                    "class",
                    "primary",
                    "secondary",
                    "tertiary",
                    "trunk"
                ]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "hsla(0, 0%, 85%, 0.69)",
                "line-width": 2
            }
        },
        {
            "id": "highway_motorway_casing",
            "type": "line",
            "metadata": {
                "mapbox:group": "b6371a3f2f5a9932464fa3867530a2e5"
            },
            "source": "openmaptiles",
            "source-layer": "transportation",
            "minzoom": 6,
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "all",
                    [
                        "!in",
                        "brunnel",
                        "bridge",
                        "tunnel"
                    ],
                    [
                        "==",
                        "class",
                        "motorway"
                    ]
                ]
            ],
            "layout": {
                "line-cap": "butt",
                "line-join": "miter",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "rgb(213, 213, 213)",
                "line-width": {
                    "base": 1.4,
                    "stops": [
                        [
                            5.8,
                            0
                        ],
                        [
                            6,
                            3
                        ],
                        [
                            20,
                            40
                        ]
                    ]
                },
                "line-dasharray": [
                    2,
                    0
                ],
                "line-opacity": 1
            }
        },
        {
            "id": "highway_motorway_inner",
            "type": "line",
            "metadata": {
                "mapbox:group": "b6371a3f2f5a9932464fa3867530a2e5"
            },
            "source": "openmaptiles",
            "source-layer": "transportation",
            "minzoom": 6,
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "all",
                    [
                        "!in",
                        "brunnel",
                        "bridge",
                        "tunnel"
                    ],
                    [
                        "==",
                        "class",
                        "motorway"
                    ]
                ]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": {
                    "base": 1,
                    "stops": [
                        [
                            5.8,
                            "hsla(0, 0%, 85%, 0.53)"
                        ],
                        [
                            6,
                            "#fff"
                        ]
                    ]
                },
                "line-width": {
                    "base": 1.4,
                    "stops": [
                        [
                            4,
                            2
                        ],
                        [
                            6,
                            1.3
                        ],
                        [
                            20,
                            30
                        ]
                    ]
                }
            }
        },
        {
            "id": "highway_motorway_subtle",
            "type": "line",
            "metadata": {
                "mapbox:group": "b6371a3f2f5a9932464fa3867530a2e5"
            },
            "source": "openmaptiles",
            "source-layer": "transportation",
            "maxzoom": 6,
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "==",
                    "class",
                    "motorway"
                ]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "hsla(0, 0%, 85%, 0.53)",
                "line-width": {
                    "base": 1.4,
                    "stops": [
                        [
                            4,
                            2
                        ],
                        [
                            6,
                            1.3
                        ]
                    ]
                }
            }
        },
        {
            "id": "railway_transit",
            "type": "line",
            "metadata": {
                "mapbox:group": "b6371a3f2f5a9932464fa3867530a2e5"
            },
            "source": "openmaptiles",
            "source-layer": "transportation",
            "minzoom": 16,
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "all",
                    [
                        "==",
                        "class",
                        "transit"
                    ],
                    [
                        "!in",
                        "brunnel",
                        "tunnel"
                    ]
                ]
            ],
            "layout": {
                "visibility": "visible",
                "line-join": "round"
            },
            "paint": {
                "line-color": "#dddddd",
                "line-width": 3
            }
        },
        {
            "id": "railway_transit_dashline",
            "type": "line",
            "metadata": {
                "mapbox:group": "b6371a3f2f5a9932464fa3867530a2e5"
            },
            "source": "openmaptiles",
            "source-layer": "transportation",
            "minzoom": 16,
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "all",
                    [
                        "==",
                        "class",
                        "transit"
                    ],
                    [
                        "!in",
                        "brunnel",
                        "tunnel"
                    ]
                ]
            ],
            "layout": {
                "visibility": "visible",
                "line-join": "round"
            },
            "paint": {
                "line-color": "#fafafa",
                "line-width": 2,
                "line-dasharray": [
                    3,
                    3
                ]
            }
        },
        {
            "id": "railway_service",
            "type": "line",
            "metadata": {
                "mapbox:group": "b6371a3f2f5a9932464fa3867530a2e5"
            },
            "source": "openmaptiles",
            "source-layer": "transportation",
            "minzoom": 16,
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "all",
                    [
                        "==",
                        "class",
                        "rail"
                    ],
                    [
                        "has",
                        "service"
                    ]
                ]
            ],
            "layout": {
                "visibility": "visible",
                "line-join": "round"
            },
            "paint": {
                "line-color": "#dddddd",
                "line-width": 3
            }
        },
        {
            "id": "railway_service_dashline",
            "type": "line",
            "metadata": {
                "mapbox:group": "b6371a3f2f5a9932464fa3867530a2e5"
            },
            "source": "openmaptiles",
            "source-layer": "transportation",
            "minzoom": 16,
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "==",
                    "class",
                    "rail"
                ],
                [
                    "has",
                    "service"
                ]
            ],
            "layout": {
                "visibility": "visible",
                "line-join": "round"
            },
            "paint": {
                "line-color": "#fafafa",
                "line-width": 2,
                "line-dasharray": [
                    3,
                    3
                ]
            }
        },
        {
            "id": "railway",
            "type": "line",
            "metadata": {
                "mapbox:group": "b6371a3f2f5a9932464fa3867530a2e5"
            },
            "source": "openmaptiles",
            "source-layer": "transportation",
            "minzoom": 13,
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "all",
                    [
                        "!has",
                        "service"
                    ],
                    [
                        "==",
                        "class",
                        "rail"
                    ]
                ]
            ],
            "layout": {
                "visibility": "visible",
                "line-join": "round"
            },
            "paint": {
                "line-color": "#dddddd",
                "line-width": {
                    "base": 1.3,
                    "stops": [
                        [
                            16,
                            3
                        ],
                        [
                            20,
                            7
                        ]
                    ]
                }
            }
        },
        {
            "id": "railway_dashline",
            "type": "line",
            "metadata": {
                "mapbox:group": "b6371a3f2f5a9932464fa3867530a2e5"
            },
            "source": "openmaptiles",
            "source-layer": "transportation",
            "minzoom": 13,
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "all",
                    [
                        "!has",
                        "service"
                    ],
                    [
                        "==",
                        "class",
                        "rail"
                    ]
                ]
            ],
            "layout": {
                "visibility": "visible",
                "line-join": "round"
            },
            "paint": {
                "line-color": "#fafafa",
                "line-width": {
                    "base": 1.3,
                    "stops": [
                        [
                            16,
                            2
                        ],
                        [
                            20,
                            6
                        ]
                    ]
                },
                "line-dasharray": [
                    3,
                    3
                ]
            }
        },
        {
            "id": "highway_motorway_bridge_casing",
            "type": "line",
            "metadata": {
                "mapbox:group": "b6371a3f2f5a9932464fa3867530a2e5"
            },
            "source": "openmaptiles",
            "source-layer": "transportation",
            "minzoom": 6,
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "all",
                    [
                        "==",
                        "brunnel",
                        "bridge"
                    ],
                    [
                        "==",
                        "class",
                        "motorway"
                    ]
                ]
            ],
            "layout": {
                "line-cap": "butt",
                "line-join": "miter",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "rgb(213, 213, 213)",
                "line-width": {
                    "base": 1.4,
                    "stops": [
                        [
                            5.8,
                            0
                        ],
                        [
                            6,
                            5
                        ],
                        [
                            20,
                            45
                        ]
                    ]
                },
                "line-dasharray": [
                    2,
                    0
                ],
                "line-opacity": 1
            }
        },
        {
            "id": "highway_motorway_bridge_inner",
            "type": "line",
            "metadata": {
                "mapbox:group": "b6371a3f2f5a9932464fa3867530a2e5"
            },
            "source": "openmaptiles",
            "source-layer": "transportation",
            "minzoom": 6,
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "all",
                    [
                        "==",
                        "brunnel",
                        "bridge"
                    ],
                    [
                        "==",
                        "class",
                        "motorway"
                    ]
                ]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": {
                    "base": 1,
                    "stops": [
                        [
                            5.8,
                            "hsla(0, 0%, 85%, 0.53)"
                        ],
                        [
                            6,
                            "#fff"
                        ]
                    ]
                },
                "line-width": {
                    "base": 1.4,
                    "stops": [
                        [
                            4,
                            2
                        ],
                        [
                            6,
                            1.3
                        ],
                        [
                            20,
                            30
                        ]
                    ]
                }
            }
        },
        {
            "id": "highway_name_motorway",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "b6371a3f2f5a9932464fa3867530a2e5"
            },
            "source": "openmaptiles",
            "source-layer": "transportation_name",
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "==",
                    "class",
                    "motorway"
                ]
            ],
            "layout": {
                "text-size": 10,
                "symbol-spacing": 350,
                "text-font": [
                    "Open Sans Regular"
                ],
                "symbol-placement": "line",
                "visibility": "visible",
                "text-rotation-alignment": "viewport",
                "text-pitch-alignment": "viewport",
                "text-field": "{ref}"
            },
            "paint": {
                "text-color": "rgb(117, 129, 145)",
                "text-halo-color": "hsl(0, 0%, 100%)",
                "text-translate": [
                    0,
                    2
                ],
                "text-halo-width": 1,
                "text-halo-blur": 1
            }
        },
        {
            "id": "boundary_state",
            "type": "line",
            "metadata": {
                "mapbox:group": "a14c9607bc7954ba1df7205bf660433f"
            },
            "source": "openmaptiles",
            "source-layer": "boundary",
            "filter": [
                "==",
                "admin_level",
                4
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "rgb(230, 204, 207)",
                "line-width": {
                    "base": 1.3,
                    "stops": [
                        [
                            3,
                            1
                        ],
                        [
                            22,
                            15
                        ]
                    ]
                },
                "line-blur": 0.4,
                "line-dasharray": [
                    2,
                    2
                ],
                "line-opacity": 1
            }
        },
        {
            "id": "boundary_country",
            "type": "line",
            "metadata": {
                "mapbox:group": "a14c9607bc7954ba1df7205bf660433f"
            },
            "source": "openmaptiles",
            "source-layer": "boundary",
            "filter": [
                "==",
                "admin_level",
                2
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-color": "rgb(230, 204, 207)",
                "line-width": {
                    "base": 1.1,
                    "stops": [
                        [
                            3,
                            1
                        ],
                        [
                            22,
                            20
                        ]
                    ]
                },
                "line-blur": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            0.4
                        ],
                        [
                            22,
                            4
                        ]
                    ]
                },
                "line-opacity": 1
            }
        },
        {
            "id": "place_other",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "101da9f13b64a08fa4b6ac1168e89e5f"
            },
            "source": "openmaptiles",
            "source-layer": "place",
            "maxzoom": 14,
            "filter": [
                "all",
                [
                    "in",
                    "class",
                    "continent",
                    "hamlet",
                    "neighbourhood",
                    "isolated_dwelling"
                ],
                [
                    "==",
                    "$type",
                    "Point"
                ]
            ],
            "layout": {
                "text-size": 10,
                "text-transform": "uppercase",
                "text-font": [
                    "Open Sans Regular"
                ],
                "text-justify": "center",
                "visibility": "visible",
                "text-offset": [
                    0.5,
                    0
                ],
                "text-anchor": "center",
                "text-field": "{name:latin}\n{name:nonlatin}"
            },
            "paint": {
                "text-color": "rgb(117, 129, 145)",
                "text-halo-color": "rgb(242,243,240)",
                "text-halo-width": 1,
                "text-halo-blur": 1
            }
        },
        {
            "id": "place_suburb",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "101da9f13b64a08fa4b6ac1168e89e5f"
            },
            "source": "openmaptiles",
            "source-layer": "place",
            "maxzoom": 15,
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "Point"
                ],
                [
                    "==",
                    "class",
                    "suburb"
                ]
            ],
            "layout": {
                "text-size": 10,
                "text-transform": "uppercase",
                "text-font": [
                    "Open Sans Regular"
                ],
                "text-justify": "center",
                "visibility": "visible",
                "text-offset": [
                    0.5,
                    0
                ],
                "text-anchor": "center",
                "text-field": "{name:latin}\n{name:nonlatin}"
            },
            "paint": {
                "text-color": "rgb(117, 129, 145)",
                "text-halo-color": "rgb(242,243,240)",
                "text-halo-width": 1,
                "text-halo-blur": 1
            }
        },
        {
            "id": "place_village",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "101da9f13b64a08fa4b6ac1168e89e5f"
            },
            "source": "openmaptiles",
            "source-layer": "place",
            "maxzoom": 14,
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "Point"
                ],
                [
                    "==",
                    "class",
                    "village"
                ]
            ],
            "layout": {
                "text-size": 10,
                "text-transform": "uppercase",
                "text-font": [
                    "Open Sans Regular"
                ],
                "text-justify": "left",
                "visibility": "visible",
                "text-offset": [
                    0.5,
                    0.2
                ],
                "icon-size": 0.4,
                "text-anchor": "left",
                "text-field": "{name:latin}\n{name:nonlatin}"
            },
            "paint": {
                "text-color": "rgb(117, 129, 145)",
                "text-halo-color": "rgb(242,243,240)",
                "text-halo-width": 1,
                "text-halo-blur": 1,
                "icon-opacity": 0.7
            }
        },
        {
            "id": "place_town",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "101da9f13b64a08fa4b6ac1168e89e5f"
            },
            "source": "openmaptiles",
            "source-layer": "place",
            "maxzoom": 15,
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "Point"
                ],
                [
                    "==",
                    "class",
                    "town"
                ]
            ],
            "layout": {
                "text-size": 10,
                "icon-image": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            "circle-11"
                        ],
                        [
                            8,
                            ""
                        ]
                    ]
                },
                "text-transform": "uppercase",
                "text-font": [
                    "Open Sans Regular"
                ],
                "text-justify": "left",
                "visibility": "visible",
                "text-offset": [
                    0.5,
                    0.2
                ],
                "icon-size": 0.4,
                "text-anchor": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            "left"
                        ],
                        [
                            8,
                            "center"
                        ]
                    ]
                },
                "text-field": "{name:latin}\n{name:nonlatin}"
            },
            "paint": {
                "text-color": "rgb(117, 129, 145)",
                "text-halo-color": "rgb(242,243,240)",
                "text-halo-width": 1,
                "text-halo-blur": 1,
                "icon-opacity": 0.7
            }
        },
        {
            "id": "place_city",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "101da9f13b64a08fa4b6ac1168e89e5f"
            },
            "source": "openmaptiles",
            "source-layer": "place",
            "maxzoom": 14,
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "Point"
                ],
                [
                    "all",
                    [
                        "!=",
                        "capital",
                        2
                    ],
                    [
                        "==",
                        "class",
                        "city"
                    ],
                    [
                        ">",
                        "rank",
                        3
                    ]
                ]
            ],
            "layout": {
                "text-size": 10,
                "icon-image": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            "circle-11"
                        ],
                        [
                            8,
                            ""
                        ]
                    ]
                },
                "text-transform": "uppercase",
                "text-font": [
                    "Open Sans Regular"
                ],
                "text-justify": "left",
                "visibility": "visible",
                "text-offset": [
                    0.5,
                    0.2
                ],
                "icon-size": 0.4,
                "text-anchor": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            "left"
                        ],
                        [
                            8,
                            "center"
                        ]
                    ]
                },
                "text-field": "{name:latin}\n{name:nonlatin}"
            },
            "paint": {
                "text-color": "rgb(117, 129, 145)",
                "text-halo-color": "rgb(242,243,240)",
                "text-halo-width": 1,
                "text-halo-blur": 1,
                "icon-opacity": 0.7
            }
        },
        {
            "id": "place_capital",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "101da9f13b64a08fa4b6ac1168e89e5f"
            },
            "source": "openmaptiles",
            "source-layer": "place",
            "maxzoom": 12,
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "Point"
                ],
                [
                    "all",
                    [
                        "==",
                        "capital",
                        2
                    ],
                    [
                        "==",
                        "class",
                        "city"
                    ]
                ]
            ],
            "layout": {
                "text-size": 14,
                "icon-image": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            "star-11"
                        ],
                        [
                            8,
                            ""
                        ]
                    ]
                },
                "text-transform": "uppercase",
                "text-font": [
                    "Open Sans Regular"
                ],
                "text-justify": "left",
                "visibility": "visible",
                "text-offset": [
                    0.5,
                    0.2
                ],
                "icon-size": 1,
                "text-anchor": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            "left"
                        ],
                        [
                            8,
                            "center"
                        ]
                    ]
                },
                "text-field": "{name:latin}\n{name:nonlatin}"
            },
            "paint": {
                "text-color": "rgb(117, 129, 145)",
                "text-halo-color": "rgb(242,243,240)",
                "text-halo-width": 1,
                "text-halo-blur": 1,
                "icon-opacity": 0.7
            }
        },
        {
            "id": "place_city_large",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "101da9f13b64a08fa4b6ac1168e89e5f"
            },
            "source": "openmaptiles",
            "source-layer": "place",
            "maxzoom": 12,
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "Point"
                ],
                [
                    "all",
                    [
                        "!=",
                        "capital",
                        2
                    ],
                    [
                        "<=",
                        "rank",
                        3
                    ],
                    [
                        "==",
                        "class",
                        "city"
                    ]
                ]
            ],
            "layout": {
                "text-size": 14,
                "icon-image": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            "circle-11"
                        ],
                        [
                            8,
                            ""
                        ]
                    ]
                },
                "text-transform": "uppercase",
                "text-font": [
                    "Open Sans Regular"
                ],
                "text-justify": "left",
                "visibility": "visible",
                "text-offset": [
                    0.5,
                    0.2
                ],
                "icon-size": 0.4,
                "text-anchor": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            "left"
                        ],
                        [
                            8,
                            "center"
                        ]
                    ]
                },
                "text-field": "{name:latin}\n{name:nonlatin}"
            },
            "paint": {
                "text-color": "rgb(117, 129, 145)",
                "text-halo-color": "rgb(242,243,240)",
                "text-halo-width": 1,
                "text-halo-blur": 1,
                "icon-opacity": 0.7
            }
        },
        {
            "id": "place_state",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "101da9f13b64a08fa4b6ac1168e89e5f"
            },
            "source": "openmaptiles",
            "source-layer": "place",
            "maxzoom": 12,
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "Point"
                ],
                [
                    "==",
                    "class",
                    "state"
                ]
            ],
            "layout": {
                "visibility": "visible",
                "text-field": "{name:latin}\n{name:nonlatin}",
                "text-font": [
                    "Open Sans Regular"
                ],
                "text-transform": "uppercase",
                "text-size": 10
            },
            "paint": {
                "text-color": "rgb(113, 129, 144)",
                "text-halo-color": "rgb(242,243,240)",
                "text-halo-width": 1,
                "text-halo-blur": 1
            }
        },
        {
            "id": "place_country_other",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "101da9f13b64a08fa4b6ac1168e89e5f"
            },
            "source": "openmaptiles",
            "source-layer": "place",
            "maxzoom": 8,
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "Point"
                ],
                [
                    "==",
                    "class",
                    "country"
                ],
                [
                    "!has",
                    "iso_a2"
                ]
            ],
            "layout": {
                "visibility": "visible",
                "text-field": "{name:latin}",
                "text-font": [
                    "Open Sans Regular"
                ],
                "text-transform": "uppercase",
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            9
                        ],
                        [
                            6,
                            11
                        ]
                    ]
                }
            },
            "paint": {
                "text-halo-width": 1.4,
                "text-halo-color": "rgba(236,236,234,0.7)",
                "text-color": {
                    "base": 1,
                    "stops": [
                        [
                            3,
                            "rgb(157,169,177)"
                        ],
                        [
                            4,
                            "rgb(153, 153, 153)"
                        ]
                    ]
                }
            }
        },
        {
            "id": "place_country_minor",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "101da9f13b64a08fa4b6ac1168e89e5f"
            },
            "source": "openmaptiles",
            "source-layer": "place",
            "maxzoom": 8,
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "Point"
                ],
                [
                    "==",
                    "class",
                    "country"
                ],
                [
                    ">=",
                    "rank",
                    2
                ],
                [
                    "has",
                    "iso_a2"
                ]
            ],
            "layout": {
                "visibility": "visible",
                "text-field": "{name:latin}",
                "text-font": [
                    "Open Sans Regular"
                ],
                "text-transform": "uppercase",
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            10
                        ],
                        [
                            6,
                            12
                        ]
                    ]
                }
            },
            "paint": {
                "text-halo-width": 1.4,
                "text-halo-color": "rgba(236,236,234,0.7)",
                "text-color": {
                    "base": 1,
                    "stops": [
                        [
                            3,
                            "rgb(157,169,177)"
                        ],
                        [
                            4,
                            "rgb(153, 153, 153)"
                        ]
                    ]
                }
            }
        },
        {
            "id": "place_country_major",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "101da9f13b64a08fa4b6ac1168e89e5f"
            },
            "source": "openmaptiles",
            "source-layer": "place",
            "maxzoom": 6,
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "Point"
                ],
                [
                    "<=",
                    "rank",
                    1
                ],
                [
                    "==",
                    "class",
                    "country"
                ],
                [
                    "has",
                    "iso_a2"
                ]
            ],
            "layout": {
                "visibility": "visible",
                "text-field": "{name:latin}",
                "text-font": [
                    "Open Sans Regular"
                ],
                "text-transform": "uppercase",
                "text-size": {
                    "base": 1.4,
                    "stops": [
                        [
                            0,
                            10
                        ],
                        [
                            3,
                            12
                        ],
                        [
                            4,
                            14
                        ]
                    ]
                },
                "text-anchor": "center"
            },
            "paint": {
                "text-halo-width": 1.4,
                "text-halo-color": "rgba(236,236,234,0.7)",
                "text-color": {
                    "base": 1,
                    "stops": [
                        [
                            3,
                            "rgb(157,169,177)"
                        ],
                        [
                            4,
                            "rgb(153, 153, 153)"
                        ]
                    ]
                }
            }
        },
        {
            "id": "bounding_box",
            "type": "fill",
            "source": "site_plan",
            "source-layer": "bounding_box",
            "paint": {
                "fill-color": "rgba(240, 247, 240, 1)"
            }
        },
        {
            "id": "areas_backstage",
            "type": "fill",
            "source": "site_plan",
            "source-layer": "areas_backstage_polygon",
            "paint": {
                "fill-color": "rgba(232, 225, 225, 1)"
            }
        },
        {
            "id": "areas_camping_polygon",
            "type": "fill",
            "source": "site_plan",
            "source-layer": "areas_camping_polygon",
            "paint": {
                "fill-color": "rgba(227, 245, 227, 1)"
            }
        },
        {
            "id": "areas_camping_outline",
            "type": "line",
            "source": "site_plan",
            "source-layer": "areas_camping_polygon",
            "paint": {
                "line-color": "rgba(10, 100, 10, 0.4)",
                "line-blur": 7,
                "line-width": 3
            }
        },
        {
            "id": "natural_woodland_polygon",
            "type": "fill",
            "source": "site_plan",
            "source-layer": "natural_woodland_polygon",
            "layout": {},
            "paint": {
                "fill-color": "rgba(139, 193, 105, 1)"
            }
        },
        {
            "id": "natural_hedges_polygon",
            "type": "fill",
            "source": "site_plan",
            "source-layer": "natural_hedges_polygon",
            "layout": {},
            "paint": {
                "fill-color": "rgba(139, 193, 105, 1)"
            }
        },
        {
            "id": "water_linestring",
            "type": "line",
            "source": "site_plan",
            "source-layer": "natural_water_linestring",
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "line-round-limit": 1.1
            },
            "paint": {
                "line-color": "rgba(78, 131, 199, 1)",
                "line-width": {
                    "stops": [
                        [
                            13,
                            1
                        ],
                        [
                            15,
                            2
                        ],
                        [
                            18,
                            6
                        ]
                    ]
                }
            }
        },
        {
            "id": "water_polygon",
            "type": "fill",
            "source": "site_plan",
            "source-layer": "natural_water_polygon",
            "layout": {},
            "paint": {
                "fill-color": "rgba(78, 131, 199, 1)",
                "fill-antialias": true
            }
        },
        {
            "id": "water_polygon_shadow",
            "type": "line",
            "source": "site_plan",
            "source-layer": "natural_water_polygon",
            "layout": {},
            "paint": {
                "line-color": "rgba(102, 102, 183, 1)",
                "line-width": {
                    "stops": [
                        [
                            13,
                            0
                        ],
                        [
                            18,
                            2
                        ]
                    ]
                }
            }
        },
        {
            "id": "heras",
            "type": "line",
            "source": "site_plan",
            "source-layer": "heras_internal__linestring",
            "paint": {
                "line-color": "rgba(148, 63, 63, 1)"
            }
        },
        {
            "id": "structures_shadow",
            "type": "line",
            "source": "site_plan",
            "source-layer": "structures_polygon",
            "minzoom": 0,
            "layout": {
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-color": "rgba(0, 0, 0, 0.3)",
                "line-width": 6,
                "line-blur": 3
            }
        },
        {
            "id": "structures_polygon",
            "type": "fill",
            "source": "site_plan",
            "source-layer": "structures_polygon",
            "minzoom": 0,
            "paint": {
                "fill-color": "rgb(144, 204, 214)"
            }
        },
        {
            "id": "structures_outline",
            "type": "line",
            "source": "site_plan",
            "source-layer": "structures_polygon",
            "minzoom": 0,
            "layout": {
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-color": "rgba(90, 81, 31, 1)"
            }
        },
        {
            "id": "structures_guys",
            "type": "line",
            "source": "site_plan",
            "source-layer": "structures_guys_&_poles_linestring",
            "minzoom": 0,
            "paint": {
                "line-color": "rgb(153, 144, 93)"
            }
        },
        {
            "id": "structures_exits",
            "type": "line",
            "source": "site_plan",
            "source-layer": "structures_exits_linestring",
            "minzoom": 0,
            "paint": {
                "line-width": 3,
                "line-color": "rgb(153, 144, 93)"
            }
        },
        {
            "id": "structures_internal_linestring",
            "type": "line",
            "source": "site_plan",
            "source-layer": "structures_internal_linestring",
            "minzoom": 0,
            "paint": {
                "line-color": "rgba(90, 81, 31, 1)"
            }
        },
        {
            "id": "structures_internal_polygon",
            "type": "line",
            "source": "site_plan",
            "source-layer": "structures_internal_polygon",
            "minzoom": 0,
            "paint": {
                "line-color": "rgba(90, 81, 31, 1)"
            }
        },
        {
            "id": "paths_fire",
            "type": "fill",
            "source": "site_plan",
            "source-layer": "paths_fire_polygon",
            "layout": {},
            "paint": {
                "fill-color": "rgba(221, 226, 203, 1)"
            }
        },
        {
            "id": "paths_trackway_case",
            "type": "line",
            "source": "site_plan",
            "source-layer": "paths_trackway_polygon",
            "layout": {},
            "paint": {
                "line-width": 3,
                "line-color": "rgba(140, 140, 140, 1)"
            }
        },
        {
            "id": "paths_trackway",
            "type": "fill",
            "source": "site_plan",
            "source-layer": "paths_trackway_polygon",
            "layout": {},
            "paint": {
                "fill-color": "rgba(185, 185, 185, 1)"
            }
        },
        {
            "id": "paths_tracks_case",
            "type": "line",
            "source": "site_plan",
            "source-layer": "paths_roads_polygon",
            "minzoom": 0,
            "layout": {
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-width": {
                    "stops": [
                        [
                            12,
                            0
                        ],
                        [
                            17,
                            5
                        ]
                    ]
                },
                "line-color": "rgba(132, 131, 131, 1)",
                "line-blur": 0.5
            }
        },
        {
            "id": "paths_tracks",
            "type": "fill",
            "source": "site_plan",
            "source-layer": "paths_roads_polygon",
            "minzoom": 0,
            "paint": {
                "fill-color": "rgba(177, 165, 147, 1)",
                "fill-outline-color": "rgba(98, 98, 97, 0)"
            }
        },
        {
            "id": "walls",
            "type": "line",
            "source": "site_plan",
            "source-layer": "walls_linestring"
        },
        {
            "id": "fences",
            "type": "line",
            "source": "site_plan",
            "source-layer": "fences_linestring",
            "paint": {
                "line-color": "rgba(134, 134, 101, 1)"
            }
        },
        {
            "id": "trees",
            "type": "circle",
            "source": "site_plan",
            "source-layer": "natural_trees_point",
            "minzoom": 13,
            "maxzoom": 0,
            "layout": {},
            "paint": {
                "circle-color": "rgba(135, 118, 29, 1)",
                "circle-stroke-color": "rgba(139, 193, 105, 1)",
                "circle-stroke-width": {
                    "stops": [
                        [
                            15,
                            0.5
                        ],
                        [
                            19,
                            10
                        ]
                    ]
                },
                "circle-radius": {
                    "stops": [
                        [
                            15,
                            0
                        ],
                        [
                            17,
                            3
                        ]
                    ]
                },
                "circle-blur": 0
            }
        },
        {
            "id": "buildings",
            "type": "fill-extrusion",
            "source": "site_plan",
            "source-layer": "buildings_polygon",
            "layout": {},
            "paint": {
                "fill-extrusion-color": "rgba(189, 170, 85, 1)",
                "fill-extrusion-height": 4
            }
        },
        {
            "id": "services_comms_ducts_case",
            "type": "line",
            "source": "site_plan",
            "source-layer": "services_comms_ducts_linestring",
            "layout": {},
            "paint": {
                "line-color": "rgba(150, 150, 150, 1)",
                "line-width": 3
            }
        },
        {
            "id": "services_comms_ducts",
            "type": "line",
            "source": "site_plan",
            "source-layer": "services_comms_ducts_linestring",
            "layout": {},
            "paint": {
                "line-color": "rgba(187, 0, 218, 1)",
                "line-width": 2
            }
        },
        {
            "id": "services_comms_lines",
            "type": "line",
            "source": "site_plan",
            "source-layer": "services_comms_buried_lines_linestring",
            "layout": {},
            "paint": {
                "line-color": "rgba(187, 0, 218, 1)",
                "line-width": 2
            }
        },
        {
            "id": "services_comms_manholes",
            "type": "circle",
            "source": "site_plan",
            "source-layer": "services_comms_manholes_point",
            "minzoom": 15,
            "paint": {
                "circle-color": "rgba(187, 0, 218, 1)",
                "circle-stroke-width": 1
            }
        },
        {
            "id": "services_comms_bt_poles",
            "type": "circle",
            "source": "site_plan",
            "source-layer": "services_comms_bt_poles_point",
            "minzoom": 15,
            "paint": {
                "circle-color": "rgba(136, 89, 6, 1)",
                "circle-stroke-width": 1
            }
        },
        {
            "id": "services_comms_cabinets",
            "type": "circle",
            "source": "site_plan",
            "source-layer": "services_comms_cabinets_point",
            "minzoom": 15,
            "paint": {
                "circle-color": "rgba(218, 0, 62, 1)",
                "circle-stroke-width": 1
            }
        },
        {
            "id": "services_comms_manholes_label-copy",
            "type": "symbol",
            "source": "site_plan",
            "source-layer": "services_comms_manholes_point",
            "minzoom": 15,
            "layout": {
                "text-field": "{id}",
                "text-font": [
                    "Open Sans Regular"
                ],
                "text-size": 14,
                "text-offset": [
                    -1,
                    0
                ]
            },
            "paint": {
                "text-halo-color": "rgba(255, 255, 255, 1)",
                "text-halo-width": 2
            }
        },
        {
            "id": "services_comms_cabinets_label",
            "type": "symbol",
            "source": "site_plan",
            "source-layer": "services_comms_cabinets_point",
            "minzoom": 15,
            "layout": {
                "text-field": "{name}",
                "text-font": [
                    "Open Sans Regular"
                ],
                "text-size": 12,
                "text-offset": [
                    -2,
                    0
                ]
            },
            "paint": {
                "text-halo-color": "rgba(255, 255, 255, 1)",
                "text-halo-width": 2
            }
        },
        {
            "id": "services_water_lines",
            "type": "line",
            "source": "site_plan",
            "source-layer": "services_water_lines_linestring",
            "layout": {},
            "paint": {
                "line-color": "#00C5FF",
                "line-width": 2
            }
        },
        {
            "id": "services_water_points",
            "type": "circle",
            "source": "site_plan",
            "source-layer": "services_water_points_point",
            "paint": {
                "circle-color": "rgba(0, 197, 255, 1)",
                "circle-stroke-color": "rgba(22, 0, 195, 1)",
                "circle-stroke-width": 2,
                "circle-radius": 3
            }
        },
        {
            "id": "site_water_pipes",
            "type": "line",
            "source": "site_plan",
            "source-layer": "water_pipes_linestring",
            "paint": {
                "line-color": "rgba(0, 89, 255, 1)",
                "line-width": 2
            }
        },
        {
            "id": "license_boundary",
            "type": "line",
            "source": "site_plan",
            "source-layer": "license_license_boundary_polygon",
            "layout": {
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-color": "rgba(226, 11, 11, 1)",
                "line-dasharray": [
                    10,
                    3
                ],
                "line-width": {
                    "stops": [
                        [
                            10,
                            1
                        ],
                        [
                            17,
                            2
                        ]
                    ]
                }
            }
        },
        {
            "id": "labels_camping",
            "type": "symbol",
            "source": "site_plan",
            "source-layer": "areas_camping_polygon",
            "minzoom": 16,
            "maxzoom": 24,
            "layout": {
                "text-field": "Camping: {camping}",
                "text-font": [
                    "Open Sans Regular"
                ],
                "text-justify": "center",
                "text-size": 13,
                "text-padding": 2,
                "symbol-placement": "point",
                "symbol-spacing": 1000,
                "symbol-avoid-edges": true,
                "text-max-width": 8
            },
            "paint": {
                "text-halo-width": 3,
                "text-halo-blur": 1,
                "text-halo-color": "rgba(255, 255, 255, 0.29)"
            }
        },
        {
            "id": "labels_gate",
            "type": "symbol",
            "source": "site_plan",
            "source-layer": "labels_gate_labels_point",
            "minzoom": 16,
            "maxzoom": 24,
            "layout": {
                "text-field": "{text}",
                "text-size": 12,
                "text-optional": false,
                "text-font": [
                    "Open Sans Regular"
                ],
                "text-keep-upright": true,
                "text-ignore-placement": false,
                "text-allow-overlap": false
            },
            "paint": {
                "text-halo-color": "rgba(241, 241, 241, 0.8)",
                "text-halo-width": 3,
                "text-color": "rgba(0, 0, 0, 1)"
            }
        },
        {
            "id": "labels_main",
            "type": "symbol",
            "source": "site_plan",
            "source-layer": "labels_point",
            "minzoom": 16,
            "maxzoom": 24,
            "layout": {
                "text-field": "{text}",
                "text-font": [
                    "Open Sans Regular"
                ],
                "text-size": 12,
                "text-optional": false
            },
            "paint": {
                "text-halo-color": "rgba(241, 241, 241, 0.8)",
                "text-halo-width": 3,
                "text-color": "rgba(0, 0, 0, 1)"
            }
        },
    ],
    "id": "positron",
    "owner": ""
}
