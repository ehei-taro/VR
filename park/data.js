var APP_DATA = {
  "scenes": [
    {
      "id": "0-",
      "name": "入口",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -1.9270073416671778,
        "pitch": 0.055066455511029844,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -0.9579697660459399,
          "pitch": 0.0968762242338137,
          "rotation": 11.780972450961727,
          "target": "1-"
        },
        {
          "yaw": -2.7993710534219343,
          "pitch": 0.17213230100841947,
          "rotation": 11.780972450961727,
          "target": "4-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.3209784228323613,
          "pitch": -0.17169518838913334,
          "title": "榮星花園石牌",
          "text": "<img src=\"data:image/png;base64,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\" alt=\"\">"
        }
      ]
    },
    {
      "id": "1-",
      "name": "水池",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.8849029340202748,
        "pitch": 0.24223629473304342,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 0.5187320080793629,
          "pitch": 0.2774405071843269,
          "rotation": 0,
          "target": "0-"
        },
        {
          "yaw": -2.972272121698797,
          "pitch": 0.36239585938226426,
          "rotation": 5.497787143782138,
          "target": "3-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.8759981929386713,
          "pitch": 0.274775563898654,
          "title": "水池",
          "text": "螢火蟲復育區"
        }
      ]
    },
    {
      "id": "2-",
      "name": "樹蔭走廊",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.05164749827330439,
        "pitch": 0.03504228987066327,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -1.8981716250473752,
          "pitch": 0.4593262276517347,
          "rotation": 0,
          "target": "3-"
        },
        {
          "yaw": -0.07734671862944431,
          "pitch": 0.1076001136075142,
          "rotation": 0,
          "target": "4-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.06902463152757576,
          "pitch": -0.43151108013619854,
          "title": "樹蔭走廊",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "3-",
      "name": "籃球場",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.6352008710753143,
        "pitch": 0.1170672370237007,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 0.09159340704187358,
          "pitch": 0.17856598743905217,
          "rotation": 0.7853981633974483,
          "target": "1-"
        },
        {
          "yaw": -3.088887780659073,
          "pitch": 0.4302338335474598,
          "rotation": 0,
          "target": "2-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.2347917694188304,
          "pitch": 0.12046449744007148,
          "title": "籃球場",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "4-",
      "name": "噴水池",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -1.3951475825366622,
        "pitch": 0.08492350518134728,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 2.9057022810691677,
          "pitch": 0.5389067260172347,
          "rotation": 5.497787143782138,
          "target": "2-"
        },
        {
          "yaw": -1.0414670171924563,
          "pitch": 0.02695930167557492,
          "rotation": 0,
          "target": "0-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.168524945090823,
          "pitch": -0.018507921611245592,
          "title": "舞台",
          "text": "<br>"
        },
        {
          "yaw": -1.307792517932004,
          "pitch": 0.3263249821645928,
          "title": "噴水池",
          "text": "<br>"
        }
      ]
    }
  ],
  "name": "Park",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
