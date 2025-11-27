var APP_DATA = {
  "scenes": [
    {
      "id": "0-pavilion",
      "name": "pavilion",
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
        "yaw": 0.523602129081695,
        "pitch": 0.0839558224759216,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -0.5215682516723774,
          "pitch": 0.2027219522441186,
          "rotation": 5.497787143782138,
          "target": "1-pond"
        },
        {
          "yaw": 0.16151914822573765,
          "pitch": 0.118201509421759,
          "rotation": 0,
          "target": "3-square2"
        },
        {
          "yaw": -2.675202070929947,
          "pitch": 0.20822287331158762,
          "rotation": 5.497787143782138,
          "target": "4-swimming-pool"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.538929342612672,
          "pitch": -0.012640277683576784,
          "title": "涼亭",
          "text": "可以休息<div>常有人在此下象棋</div>"
        }
      ]
    },
    {
      "id": "1-pond",
      "name": "pond",
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
        "yaw": 1.4116351200628436,
        "pitch": 0.07014117587406332,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -3.0903910103550274,
          "pitch": 0.10511544912582771,
          "rotation": 0,
          "target": "2-sguare"
        },
        {
          "yaw": -0.5170086282751551,
          "pitch": 0.19502247633293912,
          "rotation": 5.497787143782138,
          "target": "0-pavilion"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.862442797343565,
          "pitch": 0.24688280483007574,
          "title": "池塘",
          "text": "裡面什麼都沒有了..."
        }
      ]
    },
    {
      "id": "2-sguare",
      "name": "sguare",
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
        "yaw": 0.07483592906693559,
        "pitch": -0.08893128862777999,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -2.864630789917701,
          "pitch": 0.20791925816868861,
          "rotation": 0,
          "target": "3-square2"
        },
        {
          "yaw": -2.478108693110082,
          "pitch": 0.16582807634877206,
          "rotation": 0.7853981633974483,
          "target": "1-pond"
        },
        {
          "yaw": 2.6134131574115846,
          "pitch": 0.11374527986749072,
          "rotation": 0.7853981633974483,
          "target": "4-swimming-pool"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.010190591146443495,
          "pitch": 0.23233721235154547,
          "title": "廣場",
          "text": "常有人在這跳舞"
        }
      ]
    },
    {
      "id": "3-square2",
      "name": "square2",
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
        "yaw": -1.6910428204013215,
        "pitch": 0.17460456345936848,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -2.8946038929543096,
          "pitch": 0.09231732104547596,
          "rotation": 0,
          "target": "0-pavilion"
        },
        {
          "yaw": 0.4371227796520589,
          "pitch": 0.2390141644927244,
          "rotation": 5.497787143782138,
          "target": "2-sguare"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.288200521055588,
          "pitch": 0.23228353034702032,
          "title": "小廣場",
          "text": "有座椅，可以休息"
        }
      ]
    },
    {
      "id": "4-swimming-pool",
      "name": "swimming pool",
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
        "yaw": -2.3990917978265003,
        "pitch": 0.07123930821996716,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 1.839195061051928,
          "pitch": 0.3108817591606865,
          "rotation": 0.7853981633974483,
          "target": "0-pavilion"
        },
        {
          "yaw": -3.111615936828528,
          "pitch": 0.1343377945526587,
          "rotation": 5.497787143782138,
          "target": "2-sguare"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.364674256087369,
          "pitch": -0.31720918848288804,
          "title": "游泳池",
          "text": "一個標準的泳池"
        }
      ]
    }
  ],
  "name": "park2",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
