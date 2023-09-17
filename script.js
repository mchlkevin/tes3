(function(){
    var script = {
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "id": "rootPlayer",
 "children": [
  "this.MainViewer",
  "this.Container_22BB12F4_3075_D173_4184_EC3BC4955417",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_4041C033_7558_FB6E_41CE_BFE427F3AF92",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9"
 ],
 "backgroundPreloadEnabled": true,
 "defaultVRPointer": "laser",
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "paddingRight": 0,
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "width": "100%",
 "minHeight": 20,
 "gap": 10,
 "layout": "absolute",
 "class": "Player",
 "scrollBarMargin": 2,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "contentOpaque": false,
 "minWidth": 20,
 "definitions": [{
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_307A510B_3B03_C86B_41B9_A9C23E177918_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_307A510B_3B03_C86B_41B9_A9C23E177918_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_307A510B_3B03_C86B_41B9_A9C23E177918_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_307A510B_3B03_C86B_41B9_A9C23E177918_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_307A510B_3B03_C86B_41B9_A9C23E177918_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_307A510B_3B03_C86B_41B9_A9C23E177918_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_307A510B_3B03_C86B_41B9_A9C23E177918_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_307A510B_3B03_C86B_41B9_A9C23E177918_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_307A510B_3B03_C86B_41B9_A9C23E177918_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_307A510B_3B03_C86B_41B9_A9C23E177918_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_307A510B_3B03_C86B_41B9_A9C23E177918_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_307A510B_3B03_C86B_41B9_A9C23E177918_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_307A510B_3B03_C86B_41B9_A9C23E177918_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_307A510B_3B03_C86B_41B9_A9C23E177918_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_307A510B_3B03_C86B_41B9_A9C23E177918_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_307A510B_3B03_C86B_41B9_A9C23E177918_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_307A510B_3B03_C86B_41B9_A9C23E177918_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_307A510B_3B03_C86B_41B9_A9C23E177918_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_307A510B_3B03_C86B_41B9_A9C23E177918_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_307A510B_3B03_C86B_41B9_A9C23E177918_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_307A510B_3B03_C86B_41B9_A9C23E177918_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_307A510B_3B03_C86B_41B9_A9C23E177918_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_307A510B_3B03_C86B_41B9_A9C23E177918_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_307A510B_3B03_C86B_41B9_A9C23E177918_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_307A510B_3B03_C86B_41B9_A9C23E177918_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "PANO_20230220_144235",
 "id": "panorama_307A510B_3B03_C86B_41B9_A9C23E177918",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_307A614B_3B03_C8D4_41BF_536BCB4B0653"
  }
 ],
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_307A510B_3B03_C86B_41B9_A9C23E177918_t.jpg",
 "overlays": [
  "this.overlay_5CE54FDD_4847_FC10_41C6_23012A10EC2B"
 ]
},
{
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3092BB52_3B03_58F4_419B_7FC04DB4BD7A_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_3092BB52_3B03_58F4_419B_7FC04DB4BD7A_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3092BB52_3B03_58F4_419B_7FC04DB4BD7A_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3092BB52_3B03_58F4_419B_7FC04DB4BD7A_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3092BB52_3B03_58F4_419B_7FC04DB4BD7A_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_3092BB52_3B03_58F4_419B_7FC04DB4BD7A_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3092BB52_3B03_58F4_419B_7FC04DB4BD7A_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3092BB52_3B03_58F4_419B_7FC04DB4BD7A_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3092BB52_3B03_58F4_419B_7FC04DB4BD7A_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3092BB52_3B03_58F4_419B_7FC04DB4BD7A_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_3092BB52_3B03_58F4_419B_7FC04DB4BD7A_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3092BB52_3B03_58F4_419B_7FC04DB4BD7A_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3092BB52_3B03_58F4_419B_7FC04DB4BD7A_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3092BB52_3B03_58F4_419B_7FC04DB4BD7A_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_3092BB52_3B03_58F4_419B_7FC04DB4BD7A_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3092BB52_3B03_58F4_419B_7FC04DB4BD7A_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3092BB52_3B03_58F4_419B_7FC04DB4BD7A_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3092BB52_3B03_58F4_419B_7FC04DB4BD7A_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_3092BB52_3B03_58F4_419B_7FC04DB4BD7A_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3092BB52_3B03_58F4_419B_7FC04DB4BD7A_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3092BB52_3B03_58F4_419B_7FC04DB4BD7A_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3092BB52_3B03_58F4_419B_7FC04DB4BD7A_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_3092BB52_3B03_58F4_419B_7FC04DB4BD7A_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3092BB52_3B03_58F4_419B_7FC04DB4BD7A_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3092BB52_3B03_58F4_419B_7FC04DB4BD7A_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "PANO_20230220_134956",
 "id": "panorama_3092BB52_3B03_58F4_419B_7FC04DB4BD7A",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3097F933_3B03_D8B4_41C5_01A06E7961C0"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_307A515A_3B03_C8F4_41C4_54E6993B1850"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3078B71E_3B02_C86D_41B7_70A00F950FF0"
  }
 ],
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_3092BB52_3B03_58F4_419B_7FC04DB4BD7A_t.jpg",
 "overlays": [
  "this.overlay_5720B492_401E_25C5_41CE_771E8C674E5E",
  "this.overlay_5805F204_4012_5CCD_41A1_5683594B4290",
  "this.overlay_5F1D131D_44FA_9FBF_41C5_37A25093F96B"
 ]
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 180,
  "class": "PanoramaCameraPosition",
  "pitch": -6.61
 },
 "id": "camera_B267835F_A386_D6DA_41BA_7634CA2BAD4B"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "pitch": 0
 },
 "id": "camera_B2EC92DB_A386_D7DB_41D3_5917A0C95389"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -70.53,
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "pitch": -5.14
 },
 "id": "camera_B257A356_A386_D62A_41E1_2D1D9FC80B3A"
},
{
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3078B71E_3B02_C86D_41B7_70A00F950FF0_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_3078B71E_3B02_C86D_41B7_70A00F950FF0_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3078B71E_3B02_C86D_41B7_70A00F950FF0_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3078B71E_3B02_C86D_41B7_70A00F950FF0_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3078B71E_3B02_C86D_41B7_70A00F950FF0_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_3078B71E_3B02_C86D_41B7_70A00F950FF0_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3078B71E_3B02_C86D_41B7_70A00F950FF0_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3078B71E_3B02_C86D_41B7_70A00F950FF0_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3078B71E_3B02_C86D_41B7_70A00F950FF0_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3078B71E_3B02_C86D_41B7_70A00F950FF0_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_3078B71E_3B02_C86D_41B7_70A00F950FF0_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3078B71E_3B02_C86D_41B7_70A00F950FF0_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3078B71E_3B02_C86D_41B7_70A00F950FF0_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3078B71E_3B02_C86D_41B7_70A00F950FF0_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_3078B71E_3B02_C86D_41B7_70A00F950FF0_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3078B71E_3B02_C86D_41B7_70A00F950FF0_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3078B71E_3B02_C86D_41B7_70A00F950FF0_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3078B71E_3B02_C86D_41B7_70A00F950FF0_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_3078B71E_3B02_C86D_41B7_70A00F950FF0_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3078B71E_3B02_C86D_41B7_70A00F950FF0_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3078B71E_3B02_C86D_41B7_70A00F950FF0_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3078B71E_3B02_C86D_41B7_70A00F950FF0_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_3078B71E_3B02_C86D_41B7_70A00F950FF0_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3078B71E_3B02_C86D_41B7_70A00F950FF0_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3078B71E_3B02_C86D_41B7_70A00F950FF0_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "PANO_20230220_145009",
 "id": "panorama_3078B71E_3B02_C86D_41B7_70A00F950FF0",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3092BB52_3B03_58F4_419B_7FC04DB4BD7A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3093310B_3B02_C86B_41C3_C2951B951ED9"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3096786D_3B03_D8AF_4172_8E6C661ABF5B"
  }
 ],
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_3078B71E_3B02_C86D_41B7_70A00F950FF0_t.jpg",
 "overlays": [
  "this.overlay_57A08D10_4017_E4C5_41AB_928C0BF00C53",
  "this.overlay_5846A480_4016_25C5_4199_F4FE881D3D90",
  "this.overlay_5F86838B_487C_E4F0_41A6_545CCCC03249"
 ]
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -27.11,
  "class": "PanoramaCameraPosition",
  "pitch": 1.99
 },
 "id": "panorama_30790F3E_3B03_B8AC_41A5_E2DFF4789AB7_camera"
},
{
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3787367E_3B02_C8AC_41CB_776E387D818B_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_3787367E_3B02_C8AC_41CB_776E387D818B_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3787367E_3B02_C8AC_41CB_776E387D818B_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3787367E_3B02_C8AC_41CB_776E387D818B_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3787367E_3B02_C8AC_41CB_776E387D818B_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_3787367E_3B02_C8AC_41CB_776E387D818B_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3787367E_3B02_C8AC_41CB_776E387D818B_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3787367E_3B02_C8AC_41CB_776E387D818B_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3787367E_3B02_C8AC_41CB_776E387D818B_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3787367E_3B02_C8AC_41CB_776E387D818B_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_3787367E_3B02_C8AC_41CB_776E387D818B_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3787367E_3B02_C8AC_41CB_776E387D818B_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3787367E_3B02_C8AC_41CB_776E387D818B_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3787367E_3B02_C8AC_41CB_776E387D818B_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_3787367E_3B02_C8AC_41CB_776E387D818B_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3787367E_3B02_C8AC_41CB_776E387D818B_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3787367E_3B02_C8AC_41CB_776E387D818B_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3787367E_3B02_C8AC_41CB_776E387D818B_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_3787367E_3B02_C8AC_41CB_776E387D818B_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3787367E_3B02_C8AC_41CB_776E387D818B_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3787367E_3B02_C8AC_41CB_776E387D818B_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3787367E_3B02_C8AC_41CB_776E387D818B_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_3787367E_3B02_C8AC_41CB_776E387D818B_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3787367E_3B02_C8AC_41CB_776E387D818B_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3787367E_3B02_C8AC_41CB_776E387D818B_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "PANO_20230220_142558",
 "id": "panorama_3787367E_3B02_C8AC_41CB_776E387D818B",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30923FA1_3B02_F857_41BA_FD481F5C0F86"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3078AA42_3B02_B8D5_41CC_21946806B3DC"
  }
 ],
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_3787367E_3B02_C8AC_41CB_776E387D818B_t.jpg",
 "overlays": [
  "this.overlay_549757C2_4032_634A_41AC_CFEB5D09CD01",
  "this.overlay_5852E39C_485D_6417_41B5_E09B13852909"
 ]
},
{
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3093310B_3B02_C86B_41C3_C2951B951ED9_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_3093310B_3B02_C86B_41C3_C2951B951ED9_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3093310B_3B02_C86B_41C3_C2951B951ED9_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3093310B_3B02_C86B_41C3_C2951B951ED9_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3093310B_3B02_C86B_41C3_C2951B951ED9_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_3093310B_3B02_C86B_41C3_C2951B951ED9_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3093310B_3B02_C86B_41C3_C2951B951ED9_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3093310B_3B02_C86B_41C3_C2951B951ED9_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3093310B_3B02_C86B_41C3_C2951B951ED9_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3093310B_3B02_C86B_41C3_C2951B951ED9_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_3093310B_3B02_C86B_41C3_C2951B951ED9_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3093310B_3B02_C86B_41C3_C2951B951ED9_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3093310B_3B02_C86B_41C3_C2951B951ED9_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3093310B_3B02_C86B_41C3_C2951B951ED9_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_3093310B_3B02_C86B_41C3_C2951B951ED9_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3093310B_3B02_C86B_41C3_C2951B951ED9_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3093310B_3B02_C86B_41C3_C2951B951ED9_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3093310B_3B02_C86B_41C3_C2951B951ED9_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_3093310B_3B02_C86B_41C3_C2951B951ED9_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3093310B_3B02_C86B_41C3_C2951B951ED9_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3093310B_3B02_C86B_41C3_C2951B951ED9_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3093310B_3B02_C86B_41C3_C2951B951ED9_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_3093310B_3B02_C86B_41C3_C2951B951ED9_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3093310B_3B02_C86B_41C3_C2951B951ED9_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3093310B_3B02_C86B_41C3_C2951B951ED9_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "PANO_20230220_145200",
 "id": "panorama_3093310B_3B02_C86B_41C3_C2951B951ED9",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30795FD8_3B03_D7F4_41A1_C9184964EF98"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3078B71E_3B02_C86D_41B7_70A00F950FF0"
  }
 ],
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_3093310B_3B02_C86B_41C3_C2951B951ED9_t.jpg",
 "overlays": [
  "this.overlay_56F0664E_4495_999D_41B0_11D7BD441567",
  "this.overlay_5706A618_4495_9986_41CE_D5715B13195F"
 ]
},
{
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30923FA1_3B02_F857_41BA_FD481F5C0F86_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_30923FA1_3B02_F857_41BA_FD481F5C0F86_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_30923FA1_3B02_F857_41BA_FD481F5C0F86_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_30923FA1_3B02_F857_41BA_FD481F5C0F86_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30923FA1_3B02_F857_41BA_FD481F5C0F86_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_30923FA1_3B02_F857_41BA_FD481F5C0F86_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_30923FA1_3B02_F857_41BA_FD481F5C0F86_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_30923FA1_3B02_F857_41BA_FD481F5C0F86_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_30923FA1_3B02_F857_41BA_FD481F5C0F86_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30923FA1_3B02_F857_41BA_FD481F5C0F86_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_30923FA1_3B02_F857_41BA_FD481F5C0F86_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_30923FA1_3B02_F857_41BA_FD481F5C0F86_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_30923FA1_3B02_F857_41BA_FD481F5C0F86_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30923FA1_3B02_F857_41BA_FD481F5C0F86_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_30923FA1_3B02_F857_41BA_FD481F5C0F86_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_30923FA1_3B02_F857_41BA_FD481F5C0F86_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_30923FA1_3B02_F857_41BA_FD481F5C0F86_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30923FA1_3B02_F857_41BA_FD481F5C0F86_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_30923FA1_3B02_F857_41BA_FD481F5C0F86_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_30923FA1_3B02_F857_41BA_FD481F5C0F86_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_30923FA1_3B02_F857_41BA_FD481F5C0F86_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30923FA1_3B02_F857_41BA_FD481F5C0F86_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_30923FA1_3B02_F857_41BA_FD481F5C0F86_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_30923FA1_3B02_F857_41BA_FD481F5C0F86_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_30923FA1_3B02_F857_41BA_FD481F5C0F86_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "PANO_20230220_142204",
 "id": "panorama_30923FA1_3B02_F857_41BA_FD481F5C0F86",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30791B62_3B03_78D4_41C8_03252B699D1D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3787367E_3B02_C8AC_41CB_776E387D818B"
  }
 ],
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_30923FA1_3B02_F857_41BA_FD481F5C0F86_t.jpg",
 "overlays": [
  "this.overlay_546D757D_4036_273E_41C2_1264800D59EC",
  "this.overlay_5483D285_4036_3DCF_41BE_1E2B93146B99"
 ]
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 22.75,
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "pitch": -0.95
 },
 "id": "panorama_3096786D_3B03_D8AF_4172_8E6C661ABF5B_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -138.12,
  "class": "PanoramaCameraPosition",
  "pitch": -4.41
 },
 "id": "camera_B219330B_A386_D63B_41B6_CD028735FAE1"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -62.45,
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "pitch": -1.47
 },
 "id": "camera_B228C31E_A386_D65A_41DD_9E846A50ED1B"
},
{
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3096786D_3B03_D8AF_4172_8E6C661ABF5B_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_3096786D_3B03_D8AF_4172_8E6C661ABF5B_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3096786D_3B03_D8AF_4172_8E6C661ABF5B_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3096786D_3B03_D8AF_4172_8E6C661ABF5B_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3096786D_3B03_D8AF_4172_8E6C661ABF5B_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_3096786D_3B03_D8AF_4172_8E6C661ABF5B_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3096786D_3B03_D8AF_4172_8E6C661ABF5B_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3096786D_3B03_D8AF_4172_8E6C661ABF5B_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3096786D_3B03_D8AF_4172_8E6C661ABF5B_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3096786D_3B03_D8AF_4172_8E6C661ABF5B_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_3096786D_3B03_D8AF_4172_8E6C661ABF5B_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3096786D_3B03_D8AF_4172_8E6C661ABF5B_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3096786D_3B03_D8AF_4172_8E6C661ABF5B_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3096786D_3B03_D8AF_4172_8E6C661ABF5B_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_3096786D_3B03_D8AF_4172_8E6C661ABF5B_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3096786D_3B03_D8AF_4172_8E6C661ABF5B_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3096786D_3B03_D8AF_4172_8E6C661ABF5B_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3096786D_3B03_D8AF_4172_8E6C661ABF5B_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_3096786D_3B03_D8AF_4172_8E6C661ABF5B_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3096786D_3B03_D8AF_4172_8E6C661ABF5B_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3096786D_3B03_D8AF_4172_8E6C661ABF5B_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3096786D_3B03_D8AF_4172_8E6C661ABF5B_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_3096786D_3B03_D8AF_4172_8E6C661ABF5B_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3096786D_3B03_D8AF_4172_8E6C661ABF5B_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3096786D_3B03_D8AF_4172_8E6C661ABF5B_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "PANO_20230220_144609",
 "id": "panorama_3096786D_3B03_D8AF_4172_8E6C661ABF5B",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3093F939_3B03_F8B4_41A3_D11ED150C5EE"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3078B71E_3B02_C86D_41B7_70A00F950FF0"
  }
 ],
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_3096786D_3B03_D8AF_4172_8E6C661ABF5B_t.jpg",
 "overlays": [
  "this.overlay_5E5C19E2_487D_E430_41A2_A0DD5BE90846",
  "this.overlay_543E0DE8_485C_DC30_41C8_4B4FFF96BAA9"
 ]
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -19.84,
  "class": "PanoramaCameraPosition",
  "pitch": -2.2
 },
 "id": "camera_B245834D_A386_D63E_41D9_F003C8E47D93"
},
{
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30792973_3B03_58B4_4199_8A731C61F367_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_30792973_3B03_58B4_4199_8A731C61F367_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_30792973_3B03_58B4_4199_8A731C61F367_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_30792973_3B03_58B4_4199_8A731C61F367_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30792973_3B03_58B4_4199_8A731C61F367_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_30792973_3B03_58B4_4199_8A731C61F367_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_30792973_3B03_58B4_4199_8A731C61F367_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_30792973_3B03_58B4_4199_8A731C61F367_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_30792973_3B03_58B4_4199_8A731C61F367_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30792973_3B03_58B4_4199_8A731C61F367_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_30792973_3B03_58B4_4199_8A731C61F367_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_30792973_3B03_58B4_4199_8A731C61F367_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_30792973_3B03_58B4_4199_8A731C61F367_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30792973_3B03_58B4_4199_8A731C61F367_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_30792973_3B03_58B4_4199_8A731C61F367_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_30792973_3B03_58B4_4199_8A731C61F367_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_30792973_3B03_58B4_4199_8A731C61F367_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30792973_3B03_58B4_4199_8A731C61F367_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_30792973_3B03_58B4_4199_8A731C61F367_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_30792973_3B03_58B4_4199_8A731C61F367_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_30792973_3B03_58B4_4199_8A731C61F367_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30792973_3B03_58B4_4199_8A731C61F367_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_30792973_3B03_58B4_4199_8A731C61F367_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_30792973_3B03_58B4_4199_8A731C61F367_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_30792973_3B03_58B4_4199_8A731C61F367_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "PANO_20230220_133928",
 "id": "panorama_30792973_3B03_58B4_4199_8A731C61F367",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3085FECD_3B02_B9EF_41C9_7D50EF406B59"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30796AA1_3B03_5857_41C3_400381D47B0A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_307BD3F5_3B03_4FBC_41C7_644CF74C11BE"
  }
 ],
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_30792973_3B03_58B4_4199_8A731C61F367_t.jpg",
 "overlays": [
  "this.overlay_261F97EA_3F5C_FD39_41CB_F54385D7ECE4",
  "this.overlay_2615DBA9_3F5D_753B_41CB_0E24C29C53BD",
  "this.overlay_26B7390A_3F43_32F9_41C3_83BD4DFBCBC3"
 ]
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -161.69,
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "pitch": 2.12
 },
 "id": "panorama_3097F933_3B03_D8B4_41C5_01A06E7961C0_camera"
},
{
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30938DA3_3B03_5854_41CC_20C2E9CBDCAB_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_30938DA3_3B03_5854_41CC_20C2E9CBDCAB_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_30938DA3_3B03_5854_41CC_20C2E9CBDCAB_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_30938DA3_3B03_5854_41CC_20C2E9CBDCAB_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30938DA3_3B03_5854_41CC_20C2E9CBDCAB_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_30938DA3_3B03_5854_41CC_20C2E9CBDCAB_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_30938DA3_3B03_5854_41CC_20C2E9CBDCAB_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_30938DA3_3B03_5854_41CC_20C2E9CBDCAB_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_30938DA3_3B03_5854_41CC_20C2E9CBDCAB_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30938DA3_3B03_5854_41CC_20C2E9CBDCAB_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_30938DA3_3B03_5854_41CC_20C2E9CBDCAB_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_30938DA3_3B03_5854_41CC_20C2E9CBDCAB_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_30938DA3_3B03_5854_41CC_20C2E9CBDCAB_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30938DA3_3B03_5854_41CC_20C2E9CBDCAB_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_30938DA3_3B03_5854_41CC_20C2E9CBDCAB_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_30938DA3_3B03_5854_41CC_20C2E9CBDCAB_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_30938DA3_3B03_5854_41CC_20C2E9CBDCAB_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30938DA3_3B03_5854_41CC_20C2E9CBDCAB_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_30938DA3_3B03_5854_41CC_20C2E9CBDCAB_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_30938DA3_3B03_5854_41CC_20C2E9CBDCAB_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_30938DA3_3B03_5854_41CC_20C2E9CBDCAB_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30938DA3_3B03_5854_41CC_20C2E9CBDCAB_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_30938DA3_3B03_5854_41CC_20C2E9CBDCAB_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_30938DA3_3B03_5854_41CC_20C2E9CBDCAB_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_30938DA3_3B03_5854_41CC_20C2E9CBDCAB_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "class": "Panorama",
 "label": "PANO_20230220_144805",
 "id": "panorama_30938DA3_3B03_5854_41CC_20C2E9CBDCAB",
 "hfov": 360,
 "partial": false,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_30938DA3_3B03_5854_41CC_20C2E9CBDCAB_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -85.96,
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "pitch": -0.73
 },
 "id": "camera_B23BA32C_A386_D67E_41D7_4D52CBCD691E"
},
{
 "items": [
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "media": "this.panorama_309572FD_3B03_49AF_41C3_53D8589DC146",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_309572FD_3B03_49AF_41C3_53D8589DC146_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "media": "this.panorama_3092CC81_3B03_7854_41C3_E9207A33602F",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3092CC81_3B03_7854_41C3_E9207A33602F_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "media": "this.panorama_30796AA1_3B03_5857_41C3_400381D47B0A",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_30796AA1_3B03_5857_41C3_400381D47B0A_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "media": "this.panorama_307BD3F5_3B03_4FBC_41C7_644CF74C11BE",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_307BD3F5_3B03_4FBC_41C7_644CF74C11BE_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "media": "this.panorama_30792973_3B03_58B4_4199_8A731C61F367",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_30792973_3B03_58B4_4199_8A731C61F367_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "media": "this.panorama_30791B62_3B03_78D4_41C8_03252B699D1D",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_30791B62_3B03_78D4_41C8_03252B699D1D_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "media": "this.panorama_3078E86A_3B02_F8D4_41B1_B6E830250620",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3078E86A_3B02_F8D4_41B1_B6E830250620_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "media": "this.panorama_3085FECD_3B02_B9EF_41C9_7D50EF406B59",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3085FECD_3B02_B9EF_41C9_7D50EF406B59_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "media": "this.panorama_309FD2D2_3B03_49F5_4146_5E15829C7F3C",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_309FD2D2_3B03_49F5_4146_5E15829C7F3C_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "media": "this.panorama_3097F933_3B03_D8B4_41C5_01A06E7961C0",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3097F933_3B03_D8B4_41C5_01A06E7961C0_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "media": "this.panorama_3092BB52_3B03_58F4_419B_7FC04DB4BD7A",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3092BB52_3B03_58F4_419B_7FC04DB4BD7A_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "media": "this.panorama_307A515A_3B03_C8F4_41C4_54E6993B1850",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_307A515A_3B03_C8F4_41C4_54E6993B1850_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "media": "this.panorama_307BE642_3B03_48D5_41CD_0BD101057A2C",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_307BE642_3B03_48D5_41CD_0BD101057A2C_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "media": "this.panorama_3078B71E_3B02_C86D_41B7_70A00F950FF0",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3078B71E_3B02_C86D_41B7_70A00F950FF0_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "media": "this.panorama_309DF23B_3B03_48AB_41C5_2FF83AB16BD2",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_309DF23B_3B03_48AB_41C5_2FF83AB16BD2_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "media": "this.panorama_3093310B_3B02_C86B_41C3_C2951B951ED9",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3093310B_3B02_C86B_41C3_C2951B951ED9_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "media": "this.panorama_30795FD8_3B03_D7F4_41A1_C9184964EF98",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_30795FD8_3B03_D7F4_41A1_C9184964EF98_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "media": "this.panorama_3088473C_3B03_C8AC_41B4_BD208C3DDF9B",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3088473C_3B03_C8AC_41B4_BD208C3DDF9B_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "media": "this.panorama_307BF505_3B03_485C_41A7_6097D0B84928",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_307BF505_3B03_485C_41A7_6097D0B84928_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "media": "this.panorama_30790F3E_3B03_B8AC_41A5_E2DFF4789AB7",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_30790F3E_3B03_B8AC_41A5_E2DFF4789AB7_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "media": "this.panorama_30923FA1_3B02_F857_41BA_FD481F5C0F86",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_30923FA1_3B02_F857_41BA_FD481F5C0F86_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "media": "this.panorama_3787367E_3B02_C8AC_41CB_776E387D818B",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3787367E_3B02_C8AC_41CB_776E387D818B_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "media": "this.panorama_3078AA42_3B02_B8D5_41CC_21946806B3DC",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3078AA42_3B02_B8D5_41CC_21946806B3DC_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "media": "this.panorama_30938DA3_3B03_5854_41CC_20C2E9CBDCAB",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_30938DA3_3B03_5854_41CC_20C2E9CBDCAB_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "media": "this.panorama_307A614B_3B03_C8D4_41BF_536BCB4B0653",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_307A614B_3B03_C8D4_41BF_536BCB4B0653_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "media": "this.panorama_3093F939_3B03_F8B4_41A3_D11ED150C5EE",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3093F939_3B03_F8B4_41A3_D11ED150C5EE_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "media": "this.panorama_307A510B_3B03_C86B_41B9_A9C23E177918",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_307A510B_3B03_C86B_41B9_A9C23E177918_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "media": "this.panorama_3096786D_3B03_D8AF_4172_8E6C661ABF5B",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3096786D_3B03_D8AF_4172_8E6C661ABF5B_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "media": "this.panorama_309B7277_3B02_C8BB_415F_FC432B308E1B",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_309B7277_3B02_C8BB_415F_FC432B308E1B_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 0)",
   "media": "this.panorama_3078C9C6_3B02_DBDD_4193_AEE4B3F8B162",
   "end": "this.trigger('tourEnded')",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3078C9C6_3B02_DBDD_4193_AEE4B3F8B162_camera",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3078AA42_3B02_B8D5_41CC_21946806B3DC_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_3078AA42_3B02_B8D5_41CC_21946806B3DC_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3078AA42_3B02_B8D5_41CC_21946806B3DC_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3078AA42_3B02_B8D5_41CC_21946806B3DC_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3078AA42_3B02_B8D5_41CC_21946806B3DC_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_3078AA42_3B02_B8D5_41CC_21946806B3DC_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3078AA42_3B02_B8D5_41CC_21946806B3DC_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3078AA42_3B02_B8D5_41CC_21946806B3DC_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3078AA42_3B02_B8D5_41CC_21946806B3DC_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3078AA42_3B02_B8D5_41CC_21946806B3DC_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_3078AA42_3B02_B8D5_41CC_21946806B3DC_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3078AA42_3B02_B8D5_41CC_21946806B3DC_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3078AA42_3B02_B8D5_41CC_21946806B3DC_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3078AA42_3B02_B8D5_41CC_21946806B3DC_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_3078AA42_3B02_B8D5_41CC_21946806B3DC_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3078AA42_3B02_B8D5_41CC_21946806B3DC_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3078AA42_3B02_B8D5_41CC_21946806B3DC_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3078AA42_3B02_B8D5_41CC_21946806B3DC_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_3078AA42_3B02_B8D5_41CC_21946806B3DC_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3078AA42_3B02_B8D5_41CC_21946806B3DC_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3078AA42_3B02_B8D5_41CC_21946806B3DC_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3078AA42_3B02_B8D5_41CC_21946806B3DC_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_3078AA42_3B02_B8D5_41CC_21946806B3DC_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3078AA42_3B02_B8D5_41CC_21946806B3DC_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3078AA42_3B02_B8D5_41CC_21946806B3DC_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "PANO_20230220_142804",
 "id": "panorama_3078AA42_3B02_B8D5_41CC_21946806B3DC",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_307A614B_3B03_C8D4_41BF_536BCB4B0653"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3787367E_3B02_C8AC_41CB_776E387D818B"
  }
 ],
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_3078AA42_3B02_B8D5_41CC_21946806B3DC_t.jpg",
 "overlays": [
  "this.overlay_59C6D2FC_485B_2417_41C4_964B6DA76727",
  "this.overlay_5A30A183_4845_24F0_41CB_510BB682C953"
 ]
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 47.19,
  "class": "PanoramaCameraPosition",
  "pitch": -0.44
 },
 "id": "panorama_3088473C_3B03_C8AC_41B4_BD208C3DDF9B_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 69.51,
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "pitch": 4.89
 },
 "id": "panorama_307BE642_3B03_48D5_41CD_0BD101057A2C_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 173.77,
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "pitch": 1.51
 },
 "id": "panorama_309FD2D2_3B03_49F5_4146_5E15829C7F3C_camera"
},
{
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_309FD2D2_3B03_49F5_4146_5E15829C7F3C_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_309FD2D2_3B03_49F5_4146_5E15829C7F3C_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_309FD2D2_3B03_49F5_4146_5E15829C7F3C_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_309FD2D2_3B03_49F5_4146_5E15829C7F3C_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_309FD2D2_3B03_49F5_4146_5E15829C7F3C_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_309FD2D2_3B03_49F5_4146_5E15829C7F3C_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_309FD2D2_3B03_49F5_4146_5E15829C7F3C_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_309FD2D2_3B03_49F5_4146_5E15829C7F3C_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_309FD2D2_3B03_49F5_4146_5E15829C7F3C_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_309FD2D2_3B03_49F5_4146_5E15829C7F3C_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_309FD2D2_3B03_49F5_4146_5E15829C7F3C_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_309FD2D2_3B03_49F5_4146_5E15829C7F3C_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_309FD2D2_3B03_49F5_4146_5E15829C7F3C_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_309FD2D2_3B03_49F5_4146_5E15829C7F3C_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_309FD2D2_3B03_49F5_4146_5E15829C7F3C_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_309FD2D2_3B03_49F5_4146_5E15829C7F3C_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_309FD2D2_3B03_49F5_4146_5E15829C7F3C_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_309FD2D2_3B03_49F5_4146_5E15829C7F3C_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_309FD2D2_3B03_49F5_4146_5E15829C7F3C_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_309FD2D2_3B03_49F5_4146_5E15829C7F3C_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_309FD2D2_3B03_49F5_4146_5E15829C7F3C_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_309FD2D2_3B03_49F5_4146_5E15829C7F3C_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_309FD2D2_3B03_49F5_4146_5E15829C7F3C_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_309FD2D2_3B03_49F5_4146_5E15829C7F3C_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_309FD2D2_3B03_49F5_4146_5E15829C7F3C_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "PANO_20230220_134749",
 "id": "panorama_309FD2D2_3B03_49F5_4146_5E15829C7F3C",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3085FECD_3B02_B9EF_41C9_7D50EF406B59"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3097F933_3B03_D8B4_41C5_01A06E7961C0"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_309DF23B_3B03_48AB_41C5_2FF83AB16BD2"
  }
 ],
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_309FD2D2_3B03_49F5_4146_5E15829C7F3C_t.jpg",
 "overlays": [
  "this.overlay_4FAFAC6E_4012_E55D_41C1_5BC55072F6E6",
  "this.overlay_4FC848AA_4012_2DC5_41AC_8BE1D3DCE5F0",
  "this.overlay_5586D711_402E_64C6_419C_5A265355F128"
 ]
},
{
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_309DF23B_3B03_48AB_41C5_2FF83AB16BD2_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_309DF23B_3B03_48AB_41C5_2FF83AB16BD2_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_309DF23B_3B03_48AB_41C5_2FF83AB16BD2_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_309DF23B_3B03_48AB_41C5_2FF83AB16BD2_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_309DF23B_3B03_48AB_41C5_2FF83AB16BD2_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_309DF23B_3B03_48AB_41C5_2FF83AB16BD2_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_309DF23B_3B03_48AB_41C5_2FF83AB16BD2_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_309DF23B_3B03_48AB_41C5_2FF83AB16BD2_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_309DF23B_3B03_48AB_41C5_2FF83AB16BD2_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_309DF23B_3B03_48AB_41C5_2FF83AB16BD2_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_309DF23B_3B03_48AB_41C5_2FF83AB16BD2_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_309DF23B_3B03_48AB_41C5_2FF83AB16BD2_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_309DF23B_3B03_48AB_41C5_2FF83AB16BD2_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_309DF23B_3B03_48AB_41C5_2FF83AB16BD2_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_309DF23B_3B03_48AB_41C5_2FF83AB16BD2_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_309DF23B_3B03_48AB_41C5_2FF83AB16BD2_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_309DF23B_3B03_48AB_41C5_2FF83AB16BD2_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_309DF23B_3B03_48AB_41C5_2FF83AB16BD2_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_309DF23B_3B03_48AB_41C5_2FF83AB16BD2_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_309DF23B_3B03_48AB_41C5_2FF83AB16BD2_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_309DF23B_3B03_48AB_41C5_2FF83AB16BD2_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_309DF23B_3B03_48AB_41C5_2FF83AB16BD2_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_309DF23B_3B03_48AB_41C5_2FF83AB16BD2_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_309DF23B_3B03_48AB_41C5_2FF83AB16BD2_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_309DF23B_3B03_48AB_41C5_2FF83AB16BD2_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "PANO_20230220_141528",
 "id": "panorama_309DF23B_3B03_48AB_41C5_2FF83AB16BD2",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_309FD2D2_3B03_49F5_4146_5E15829C7F3C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30923FA1_3B02_F857_41BA_FD481F5C0F86"
  }
 ],
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_309DF23B_3B03_48AB_41C5_2FF83AB16BD2_t.jpg",
 "overlays": [
  "this.overlay_51CCECA3_4016_65CB_41CE_4F1BB804F7DD",
  "this.overlay_53C1064F_4032_655A_41C3_FFAF38F5403C"
 ]
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -152.48,
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "pitch": -2.21
 },
 "id": "panorama_30791B62_3B03_78D4_41C8_03252B699D1D_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 59.31,
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "pitch": -2.1
 },
 "id": "panorama_307A614B_3B03_C8D4_41BF_536BCB4B0653_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 77.38,
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "pitch": -1.91
 },
 "id": "panorama_309B7277_3B02_C8BB_415F_FC432B308E1B_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -12.74,
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "pitch": 3.86
 },
 "id": "panorama_307A510B_3B03_C86B_41B9_A9C23E177918_camera"
},
{
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3088473C_3B03_C8AC_41B4_BD208C3DDF9B_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_3088473C_3B03_C8AC_41B4_BD208C3DDF9B_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3088473C_3B03_C8AC_41B4_BD208C3DDF9B_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3088473C_3B03_C8AC_41B4_BD208C3DDF9B_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3088473C_3B03_C8AC_41B4_BD208C3DDF9B_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_3088473C_3B03_C8AC_41B4_BD208C3DDF9B_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3088473C_3B03_C8AC_41B4_BD208C3DDF9B_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3088473C_3B03_C8AC_41B4_BD208C3DDF9B_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3088473C_3B03_C8AC_41B4_BD208C3DDF9B_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3088473C_3B03_C8AC_41B4_BD208C3DDF9B_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_3088473C_3B03_C8AC_41B4_BD208C3DDF9B_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3088473C_3B03_C8AC_41B4_BD208C3DDF9B_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3088473C_3B03_C8AC_41B4_BD208C3DDF9B_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3088473C_3B03_C8AC_41B4_BD208C3DDF9B_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_3088473C_3B03_C8AC_41B4_BD208C3DDF9B_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3088473C_3B03_C8AC_41B4_BD208C3DDF9B_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3088473C_3B03_C8AC_41B4_BD208C3DDF9B_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3088473C_3B03_C8AC_41B4_BD208C3DDF9B_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_3088473C_3B03_C8AC_41B4_BD208C3DDF9B_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3088473C_3B03_C8AC_41B4_BD208C3DDF9B_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3088473C_3B03_C8AC_41B4_BD208C3DDF9B_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3088473C_3B03_C8AC_41B4_BD208C3DDF9B_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_3088473C_3B03_C8AC_41B4_BD208C3DDF9B_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3088473C_3B03_C8AC_41B4_BD208C3DDF9B_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3088473C_3B03_C8AC_41B4_BD208C3DDF9B_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "PANO_20230220_145939",
 "id": "panorama_3088473C_3B03_C8AC_41B4_BD208C3DDF9B",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30795FD8_3B03_D7F4_41A1_C9184964EF98"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_307BF505_3B03_485C_41A7_6097D0B84928"
  }
 ],
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_3088473C_3B03_C8AC_41B4_BD208C3DDF9B_t.jpg",
 "overlays": [
  "this.overlay_50C141A2_44B5_9A85_41CE_C712C1A8C47E",
  "this.overlay_5017E3EC_44B6_9E9E_41CA_CCE7B9431A90"
 ]
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 166.05,
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "pitch": -1.19
 },
 "id": "panorama_3078E86A_3B02_F8D4_41B1_B6E830250620_camera"
},
{
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_307A614B_3B03_C8D4_41BF_536BCB4B0653_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_307A614B_3B03_C8D4_41BF_536BCB4B0653_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_307A614B_3B03_C8D4_41BF_536BCB4B0653_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_307A614B_3B03_C8D4_41BF_536BCB4B0653_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_307A614B_3B03_C8D4_41BF_536BCB4B0653_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_307A614B_3B03_C8D4_41BF_536BCB4B0653_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_307A614B_3B03_C8D4_41BF_536BCB4B0653_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_307A614B_3B03_C8D4_41BF_536BCB4B0653_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_307A614B_3B03_C8D4_41BF_536BCB4B0653_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_307A614B_3B03_C8D4_41BF_536BCB4B0653_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_307A614B_3B03_C8D4_41BF_536BCB4B0653_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_307A614B_3B03_C8D4_41BF_536BCB4B0653_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_307A614B_3B03_C8D4_41BF_536BCB4B0653_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_307A614B_3B03_C8D4_41BF_536BCB4B0653_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_307A614B_3B03_C8D4_41BF_536BCB4B0653_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_307A614B_3B03_C8D4_41BF_536BCB4B0653_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_307A614B_3B03_C8D4_41BF_536BCB4B0653_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_307A614B_3B03_C8D4_41BF_536BCB4B0653_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_307A614B_3B03_C8D4_41BF_536BCB4B0653_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_307A614B_3B03_C8D4_41BF_536BCB4B0653_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_307A614B_3B03_C8D4_41BF_536BCB4B0653_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_307A614B_3B03_C8D4_41BF_536BCB4B0653_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_307A614B_3B03_C8D4_41BF_536BCB4B0653_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_307A614B_3B03_C8D4_41BF_536BCB4B0653_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_307A614B_3B03_C8D4_41BF_536BCB4B0653_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "PANO_20230220_143434",
 "id": "panorama_307A614B_3B03_C8D4_41BF_536BCB4B0653",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3078AA42_3B02_B8D5_41CC_21946806B3DC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_309B7277_3B02_C8BB_415F_FC432B308E1B"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3093F939_3B03_F8B4_41A3_D11ED150C5EE"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_307A510B_3B03_C86B_41B9_A9C23E177918"
  }
 ],
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_307A614B_3B03_C8D4_41BF_536BCB4B0653_t.jpg",
 "overlays": [
  "this.overlay_5B1DD8D9_484B_2410_4181_F86A19E21BEE",
  "this.overlay_5B3EC0FC_484D_2417_41C7_00939EBCAF24",
  "this.overlay_5C088142_484F_2470_41B7_D22AF5943C25",
  "this.overlay_5DDB783E_484F_2410_41A8_745C9859951D"
 ]
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -68.95,
  "class": "PanoramaCameraPosition",
  "pitch": -12.52
 },
 "id": "panorama_30795FD8_3B03_D7F4_41A1_C9184964EF98_camera"
},
{
 "items": [
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "media": "this.panorama_309572FD_3B03_49AF_41C3_53D8589DC146",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_309572FD_3B03_49AF_41C3_53D8589DC146_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "media": "this.panorama_3092CC81_3B03_7854_41C3_E9207A33602F",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3092CC81_3B03_7854_41C3_E9207A33602F_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "media": "this.panorama_30796AA1_3B03_5857_41C3_400381D47B0A",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_30796AA1_3B03_5857_41C3_400381D47B0A_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "media": "this.panorama_307BD3F5_3B03_4FBC_41C7_644CF74C11BE",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_307BD3F5_3B03_4FBC_41C7_644CF74C11BE_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "media": "this.panorama_30792973_3B03_58B4_4199_8A731C61F367",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_30792973_3B03_58B4_4199_8A731C61F367_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "media": "this.panorama_30791B62_3B03_78D4_41C8_03252B699D1D",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_30791B62_3B03_78D4_41C8_03252B699D1D_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "media": "this.panorama_3078E86A_3B02_F8D4_41B1_B6E830250620",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3078E86A_3B02_F8D4_41B1_B6E830250620_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "media": "this.panorama_3085FECD_3B02_B9EF_41C9_7D50EF406B59",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3085FECD_3B02_B9EF_41C9_7D50EF406B59_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "media": "this.panorama_309FD2D2_3B03_49F5_4146_5E15829C7F3C",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_309FD2D2_3B03_49F5_4146_5E15829C7F3C_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "media": "this.panorama_3097F933_3B03_D8B4_41C5_01A06E7961C0",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3097F933_3B03_D8B4_41C5_01A06E7961C0_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "media": "this.panorama_3092BB52_3B03_58F4_419B_7FC04DB4BD7A",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3092BB52_3B03_58F4_419B_7FC04DB4BD7A_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 12)",
   "media": "this.panorama_307A515A_3B03_C8F4_41C4_54E6993B1850",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_307A515A_3B03_C8F4_41C4_54E6993B1850_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, 13)",
   "media": "this.panorama_307BE642_3B03_48D5_41CD_0BD101057A2C",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_307BE642_3B03_48D5_41CD_0BD101057A2C_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 13, 14)",
   "media": "this.panorama_3078B71E_3B02_C86D_41B7_70A00F950FF0",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3078B71E_3B02_C86D_41B7_70A00F950FF0_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 14, 15)",
   "media": "this.panorama_309DF23B_3B03_48AB_41C5_2FF83AB16BD2",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_309DF23B_3B03_48AB_41C5_2FF83AB16BD2_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 15, 16)",
   "media": "this.panorama_3093310B_3B02_C86B_41C3_C2951B951ED9",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3093310B_3B02_C86B_41C3_C2951B951ED9_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 16, 17)",
   "media": "this.panorama_30795FD8_3B03_D7F4_41A1_C9184964EF98",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_30795FD8_3B03_D7F4_41A1_C9184964EF98_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 17, 18)",
   "media": "this.panorama_3088473C_3B03_C8AC_41B4_BD208C3DDF9B",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3088473C_3B03_C8AC_41B4_BD208C3DDF9B_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 18, 19)",
   "media": "this.panorama_307BF505_3B03_485C_41A7_6097D0B84928",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_307BF505_3B03_485C_41A7_6097D0B84928_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 19, 20)",
   "media": "this.panorama_30790F3E_3B03_B8AC_41A5_E2DFF4789AB7",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_30790F3E_3B03_B8AC_41A5_E2DFF4789AB7_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 20, 21)",
   "media": "this.panorama_30923FA1_3B02_F857_41BA_FD481F5C0F86",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_30923FA1_3B02_F857_41BA_FD481F5C0F86_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 21, 22)",
   "media": "this.panorama_3787367E_3B02_C8AC_41CB_776E387D818B",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3787367E_3B02_C8AC_41CB_776E387D818B_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 22, 23)",
   "media": "this.panorama_3078AA42_3B02_B8D5_41CC_21946806B3DC",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3078AA42_3B02_B8D5_41CC_21946806B3DC_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 23, 24)",
   "media": "this.panorama_30938DA3_3B03_5854_41CC_20C2E9CBDCAB",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_30938DA3_3B03_5854_41CC_20C2E9CBDCAB_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 24, 25)",
   "media": "this.panorama_307A614B_3B03_C8D4_41BF_536BCB4B0653",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_307A614B_3B03_C8D4_41BF_536BCB4B0653_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 25, 26)",
   "media": "this.panorama_3093F939_3B03_F8B4_41A3_D11ED150C5EE",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3093F939_3B03_F8B4_41A3_D11ED150C5EE_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 26, 27)",
   "media": "this.panorama_307A510B_3B03_C86B_41B9_A9C23E177918",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_307A510B_3B03_C86B_41B9_A9C23E177918_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 27, 28)",
   "media": "this.panorama_3096786D_3B03_D8AF_4172_8E6C661ABF5B",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3096786D_3B03_D8AF_4172_8E6C661ABF5B_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 28, 29)",
   "media": "this.panorama_309B7277_3B02_C8BB_415F_FC432B308E1B",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_309B7277_3B02_C8BB_415F_FC432B308E1B_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 29, 0)",
   "media": "this.panorama_3078C9C6_3B02_DBDD_4193_AEE4B3F8B162",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3078C9C6_3B02_DBDD_4193_AEE4B3F8B162_camera",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 157.99,
  "class": "PanoramaCameraPosition",
  "pitch": -5.35
 },
 "id": "panorama_30923FA1_3B02_F857_41BA_FD481F5C0F86_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "pitch": 0
 },
 "id": "camera_B235633F_A386_D65A_41DD_639D6E5EA16C"
},
{
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "class": "PanoramaPlayer",
 "viewerArea": "this.MainViewer",
 "mouseControlMode": "drag_acceleration",
 "displayPlaybackBar": true,
 "id": "MainViewerPanoramaPlayer",
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "touchControlMode": "drag_rotation",
 "buttonCardboardView": "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB"
},
{
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_309572FD_3B03_49AF_41C3_53D8589DC146_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_309572FD_3B03_49AF_41C3_53D8589DC146_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_309572FD_3B03_49AF_41C3_53D8589DC146_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_309572FD_3B03_49AF_41C3_53D8589DC146_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_309572FD_3B03_49AF_41C3_53D8589DC146_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_309572FD_3B03_49AF_41C3_53D8589DC146_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_309572FD_3B03_49AF_41C3_53D8589DC146_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_309572FD_3B03_49AF_41C3_53D8589DC146_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_309572FD_3B03_49AF_41C3_53D8589DC146_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_309572FD_3B03_49AF_41C3_53D8589DC146_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_309572FD_3B03_49AF_41C3_53D8589DC146_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_309572FD_3B03_49AF_41C3_53D8589DC146_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_309572FD_3B03_49AF_41C3_53D8589DC146_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_309572FD_3B03_49AF_41C3_53D8589DC146_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_309572FD_3B03_49AF_41C3_53D8589DC146_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_309572FD_3B03_49AF_41C3_53D8589DC146_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_309572FD_3B03_49AF_41C3_53D8589DC146_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_309572FD_3B03_49AF_41C3_53D8589DC146_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_309572FD_3B03_49AF_41C3_53D8589DC146_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_309572FD_3B03_49AF_41C3_53D8589DC146_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_309572FD_3B03_49AF_41C3_53D8589DC146_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_309572FD_3B03_49AF_41C3_53D8589DC146_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_309572FD_3B03_49AF_41C3_53D8589DC146_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_309572FD_3B03_49AF_41C3_53D8589DC146_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_309572FD_3B03_49AF_41C3_53D8589DC146_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Entrance",
 "id": "panorama_309572FD_3B03_49AF_41C3_53D8589DC146",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3092CC81_3B03_7854_41C3_E9207A33602F"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30791B62_3B03_78D4_41C8_03252B699D1D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_307BF505_3B03_485C_41A7_6097D0B84928"
  }
 ],
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_309572FD_3B03_49AF_41C3_53D8589DC146_t.jpg",
 "overlays": [
  "this.overlay_2EE0888B_3F4D_73FF_41BA_EB76124642D2",
  "this.overlay_282A0A6A_3F45_7739_41BA_FF7B9D94D82D",
  "this.overlay_5C3BFF5B_4496_A7BA_41B2_CFADF5D37D15"
 ]
},
{
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_309B7277_3B02_C8BB_415F_FC432B308E1B_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_309B7277_3B02_C8BB_415F_FC432B308E1B_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_309B7277_3B02_C8BB_415F_FC432B308E1B_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_309B7277_3B02_C8BB_415F_FC432B308E1B_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_309B7277_3B02_C8BB_415F_FC432B308E1B_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_309B7277_3B02_C8BB_415F_FC432B308E1B_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_309B7277_3B02_C8BB_415F_FC432B308E1B_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_309B7277_3B02_C8BB_415F_FC432B308E1B_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_309B7277_3B02_C8BB_415F_FC432B308E1B_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_309B7277_3B02_C8BB_415F_FC432B308E1B_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_309B7277_3B02_C8BB_415F_FC432B308E1B_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_309B7277_3B02_C8BB_415F_FC432B308E1B_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_309B7277_3B02_C8BB_415F_FC432B308E1B_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_309B7277_3B02_C8BB_415F_FC432B308E1B_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_309B7277_3B02_C8BB_415F_FC432B308E1B_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_309B7277_3B02_C8BB_415F_FC432B308E1B_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_309B7277_3B02_C8BB_415F_FC432B308E1B_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_309B7277_3B02_C8BB_415F_FC432B308E1B_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_309B7277_3B02_C8BB_415F_FC432B308E1B_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_309B7277_3B02_C8BB_415F_FC432B308E1B_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_309B7277_3B02_C8BB_415F_FC432B308E1B_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_309B7277_3B02_C8BB_415F_FC432B308E1B_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_309B7277_3B02_C8BB_415F_FC432B308E1B_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_309B7277_3B02_C8BB_415F_FC432B308E1B_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_309B7277_3B02_C8BB_415F_FC432B308E1B_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "PANO_20230220_143641",
 "id": "panorama_309B7277_3B02_C8BB_415F_FC432B308E1B",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_307A614B_3B03_C8D4_41BF_536BCB4B0653"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3078C9C6_3B02_DBDD_4193_AEE4B3F8B162"
  }
 ],
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_309B7277_3B02_C8BB_415F_FC432B308E1B_t.jpg",
 "overlays": [
  "this.overlay_514B73EE_4845_2433_417B_F7A2121926D4",
  "this.overlay_521D0C2E_4847_3C30_41C6_0557C48E70CA"
 ]
},
{
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_307BD3F5_3B03_4FBC_41C7_644CF74C11BE_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_307BD3F5_3B03_4FBC_41C7_644CF74C11BE_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_307BD3F5_3B03_4FBC_41C7_644CF74C11BE_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_307BD3F5_3B03_4FBC_41C7_644CF74C11BE_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_307BD3F5_3B03_4FBC_41C7_644CF74C11BE_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_307BD3F5_3B03_4FBC_41C7_644CF74C11BE_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_307BD3F5_3B03_4FBC_41C7_644CF74C11BE_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_307BD3F5_3B03_4FBC_41C7_644CF74C11BE_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_307BD3F5_3B03_4FBC_41C7_644CF74C11BE_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_307BD3F5_3B03_4FBC_41C7_644CF74C11BE_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_307BD3F5_3B03_4FBC_41C7_644CF74C11BE_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_307BD3F5_3B03_4FBC_41C7_644CF74C11BE_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_307BD3F5_3B03_4FBC_41C7_644CF74C11BE_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_307BD3F5_3B03_4FBC_41C7_644CF74C11BE_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_307BD3F5_3B03_4FBC_41C7_644CF74C11BE_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_307BD3F5_3B03_4FBC_41C7_644CF74C11BE_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_307BD3F5_3B03_4FBC_41C7_644CF74C11BE_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_307BD3F5_3B03_4FBC_41C7_644CF74C11BE_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_307BD3F5_3B03_4FBC_41C7_644CF74C11BE_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_307BD3F5_3B03_4FBC_41C7_644CF74C11BE_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_307BD3F5_3B03_4FBC_41C7_644CF74C11BE_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_307BD3F5_3B03_4FBC_41C7_644CF74C11BE_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_307BD3F5_3B03_4FBC_41C7_644CF74C11BE_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_307BD3F5_3B03_4FBC_41C7_644CF74C11BE_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_307BD3F5_3B03_4FBC_41C7_644CF74C11BE_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "PANO_20230220_134404",
 "id": "panorama_307BD3F5_3B03_4FBC_41C7_644CF74C11BE",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3085FECD_3B02_B9EF_41C9_7D50EF406B59"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30796AA1_3B03_5857_41C3_400381D47B0A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3092CC81_3B03_7854_41C3_E9207A33602F"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30792973_3B03_58B4_4199_8A731C61F367"
  }
 ],
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_307BD3F5_3B03_4FBC_41C7_644CF74C11BE_t.jpg",
 "overlays": [
  "this.overlay_27C46B58_3F45_1519_41AF_CC750FA5F036",
  "this.overlay_273CB9EE_3F47_1539_41BC_4DBE7C63DF56",
  "this.overlay_244C4C0E_3F45_12F9_41CC_C64C0FF54EAB",
  "this.overlay_24086657_3F3F_3F17_41A3_F38EA63D75C0"
 ]
},
{
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3078C9C6_3B02_DBDD_4193_AEE4B3F8B162_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_3078C9C6_3B02_DBDD_4193_AEE4B3F8B162_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3078C9C6_3B02_DBDD_4193_AEE4B3F8B162_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3078C9C6_3B02_DBDD_4193_AEE4B3F8B162_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3078C9C6_3B02_DBDD_4193_AEE4B3F8B162_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_3078C9C6_3B02_DBDD_4193_AEE4B3F8B162_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3078C9C6_3B02_DBDD_4193_AEE4B3F8B162_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3078C9C6_3B02_DBDD_4193_AEE4B3F8B162_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3078C9C6_3B02_DBDD_4193_AEE4B3F8B162_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3078C9C6_3B02_DBDD_4193_AEE4B3F8B162_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_3078C9C6_3B02_DBDD_4193_AEE4B3F8B162_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3078C9C6_3B02_DBDD_4193_AEE4B3F8B162_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3078C9C6_3B02_DBDD_4193_AEE4B3F8B162_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3078C9C6_3B02_DBDD_4193_AEE4B3F8B162_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_3078C9C6_3B02_DBDD_4193_AEE4B3F8B162_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3078C9C6_3B02_DBDD_4193_AEE4B3F8B162_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3078C9C6_3B02_DBDD_4193_AEE4B3F8B162_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3078C9C6_3B02_DBDD_4193_AEE4B3F8B162_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_3078C9C6_3B02_DBDD_4193_AEE4B3F8B162_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3078C9C6_3B02_DBDD_4193_AEE4B3F8B162_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3078C9C6_3B02_DBDD_4193_AEE4B3F8B162_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3078C9C6_3B02_DBDD_4193_AEE4B3F8B162_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_3078C9C6_3B02_DBDD_4193_AEE4B3F8B162_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3078C9C6_3B02_DBDD_4193_AEE4B3F8B162_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3078C9C6_3B02_DBDD_4193_AEE4B3F8B162_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "PANO_20230220_144040",
 "id": "panorama_3078C9C6_3B02_DBDD_4193_AEE4B3F8B162",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_309B7277_3B02_C8BB_415F_FC432B308E1B"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_307A510B_3B03_C86B_41B9_A9C23E177918"
  }
 ],
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_3078C9C6_3B02_DBDD_4193_AEE4B3F8B162_t.jpg",
 "overlays": [
  "this.overlay_52AA9482_4845_2CF3_41C6_2CFD57C877B9",
  "this.overlay_53F8098F_485B_24F0_41CD_D3033CB39E07"
 ]
},
{
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_307BF505_3B03_485C_41A7_6097D0B84928_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_307BF505_3B03_485C_41A7_6097D0B84928_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_307BF505_3B03_485C_41A7_6097D0B84928_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_307BF505_3B03_485C_41A7_6097D0B84928_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_307BF505_3B03_485C_41A7_6097D0B84928_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_307BF505_3B03_485C_41A7_6097D0B84928_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_307BF505_3B03_485C_41A7_6097D0B84928_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_307BF505_3B03_485C_41A7_6097D0B84928_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_307BF505_3B03_485C_41A7_6097D0B84928_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_307BF505_3B03_485C_41A7_6097D0B84928_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_307BF505_3B03_485C_41A7_6097D0B84928_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_307BF505_3B03_485C_41A7_6097D0B84928_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_307BF505_3B03_485C_41A7_6097D0B84928_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_307BF505_3B03_485C_41A7_6097D0B84928_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_307BF505_3B03_485C_41A7_6097D0B84928_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_307BF505_3B03_485C_41A7_6097D0B84928_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_307BF505_3B03_485C_41A7_6097D0B84928_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_307BF505_3B03_485C_41A7_6097D0B84928_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_307BF505_3B03_485C_41A7_6097D0B84928_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_307BF505_3B03_485C_41A7_6097D0B84928_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_307BF505_3B03_485C_41A7_6097D0B84928_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_307BF505_3B03_485C_41A7_6097D0B84928_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_307BF505_3B03_485C_41A7_6097D0B84928_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_307BF505_3B03_485C_41A7_6097D0B84928_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_307BF505_3B03_485C_41A7_6097D0B84928_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "PANO_20230220_150319",
 "id": "panorama_307BF505_3B03_485C_41A7_6097D0B84928",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_309572FD_3B03_49AF_41C3_53D8589DC146"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30790F3E_3B03_B8AC_41A5_E2DFF4789AB7"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3088473C_3B03_C8AC_41B4_BD208C3DDF9B"
  }
 ],
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_307BF505_3B03_485C_41A7_6097D0B84928_t.jpg",
 "overlays": [
  "this.overlay_528FBF7C_44AB_E67D_41C9_BDF72B923AFE",
  "this.overlay_5295DA12_44AD_6985_41C9_6A3D65D25630",
  "this.overlay_53BC6859_44AF_E987_41D0_3F1315E3AA4C"
 ]
},
{
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_307A515A_3B03_C8F4_41C4_54E6993B1850_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_307A515A_3B03_C8F4_41C4_54E6993B1850_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_307A515A_3B03_C8F4_41C4_54E6993B1850_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_307A515A_3B03_C8F4_41C4_54E6993B1850_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_307A515A_3B03_C8F4_41C4_54E6993B1850_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_307A515A_3B03_C8F4_41C4_54E6993B1850_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_307A515A_3B03_C8F4_41C4_54E6993B1850_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_307A515A_3B03_C8F4_41C4_54E6993B1850_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_307A515A_3B03_C8F4_41C4_54E6993B1850_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_307A515A_3B03_C8F4_41C4_54E6993B1850_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_307A515A_3B03_C8F4_41C4_54E6993B1850_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_307A515A_3B03_C8F4_41C4_54E6993B1850_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_307A515A_3B03_C8F4_41C4_54E6993B1850_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_307A515A_3B03_C8F4_41C4_54E6993B1850_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_307A515A_3B03_C8F4_41C4_54E6993B1850_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_307A515A_3B03_C8F4_41C4_54E6993B1850_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_307A515A_3B03_C8F4_41C4_54E6993B1850_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_307A515A_3B03_C8F4_41C4_54E6993B1850_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_307A515A_3B03_C8F4_41C4_54E6993B1850_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_307A515A_3B03_C8F4_41C4_54E6993B1850_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_307A515A_3B03_C8F4_41C4_54E6993B1850_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_307A515A_3B03_C8F4_41C4_54E6993B1850_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_307A515A_3B03_C8F4_41C4_54E6993B1850_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_307A515A_3B03_C8F4_41C4_54E6993B1850_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_307A515A_3B03_C8F4_41C4_54E6993B1850_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "PANO_20230220_140913",
 "id": "panorama_307A515A_3B03_C8F4_41C4_54E6993B1850",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_307BE642_3B03_48D5_41CD_0BD101057A2C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3092BB52_3B03_58F4_419B_7FC04DB4BD7A"
  }
 ],
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_307A515A_3B03_C8F4_41C4_54E6993B1850_t.jpg",
 "overlays": [
  "this.overlay_58CDE1DD_44FB_BABF_41CD_9A83DF6BF226",
  "this.overlay_59F65848_44EA_A986_41C7_B52F14392C35"
 ]
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 140.06,
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "pitch": -4.8
 },
 "id": "panorama_309572FD_3B03_49AF_41C3_53D8589DC146_camera"
},
{
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3078E86A_3B02_F8D4_41B1_B6E830250620_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_3078E86A_3B02_F8D4_41B1_B6E830250620_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3078E86A_3B02_F8D4_41B1_B6E830250620_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3078E86A_3B02_F8D4_41B1_B6E830250620_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3078E86A_3B02_F8D4_41B1_B6E830250620_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_3078E86A_3B02_F8D4_41B1_B6E830250620_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3078E86A_3B02_F8D4_41B1_B6E830250620_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3078E86A_3B02_F8D4_41B1_B6E830250620_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3078E86A_3B02_F8D4_41B1_B6E830250620_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3078E86A_3B02_F8D4_41B1_B6E830250620_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_3078E86A_3B02_F8D4_41B1_B6E830250620_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3078E86A_3B02_F8D4_41B1_B6E830250620_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3078E86A_3B02_F8D4_41B1_B6E830250620_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3078E86A_3B02_F8D4_41B1_B6E830250620_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_3078E86A_3B02_F8D4_41B1_B6E830250620_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3078E86A_3B02_F8D4_41B1_B6E830250620_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3078E86A_3B02_F8D4_41B1_B6E830250620_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3078E86A_3B02_F8D4_41B1_B6E830250620_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_3078E86A_3B02_F8D4_41B1_B6E830250620_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3078E86A_3B02_F8D4_41B1_B6E830250620_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3078E86A_3B02_F8D4_41B1_B6E830250620_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3078E86A_3B02_F8D4_41B1_B6E830250620_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_3078E86A_3B02_F8D4_41B1_B6E830250620_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3078E86A_3B02_F8D4_41B1_B6E830250620_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3078E86A_3B02_F8D4_41B1_B6E830250620_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Canteen (2)",
 "id": "panorama_3078E86A_3B02_F8D4_41B1_B6E830250620",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30923FA1_3B02_F857_41BA_FD481F5C0F86"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30791B62_3B03_78D4_41C8_03252B699D1D"
  }
 ],
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_3078E86A_3B02_F8D4_41B1_B6E830250620_t.jpg",
 "overlays": [
  "this.overlay_52D17BC2_402F_E345_41B2_0B38DD8D3946",
  "this.overlay_52DCA895_402E_2DCF_4193_F536A6532CC6"
 ]
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 17.55,
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "pitch": 4.86
 },
 "id": "panorama_3085FECD_3B02_B9EF_41C9_7D50EF406B59_camera"
},
{
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30796AA1_3B03_5857_41C3_400381D47B0A_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_30796AA1_3B03_5857_41C3_400381D47B0A_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_30796AA1_3B03_5857_41C3_400381D47B0A_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_30796AA1_3B03_5857_41C3_400381D47B0A_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30796AA1_3B03_5857_41C3_400381D47B0A_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_30796AA1_3B03_5857_41C3_400381D47B0A_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_30796AA1_3B03_5857_41C3_400381D47B0A_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_30796AA1_3B03_5857_41C3_400381D47B0A_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_30796AA1_3B03_5857_41C3_400381D47B0A_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30796AA1_3B03_5857_41C3_400381D47B0A_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_30796AA1_3B03_5857_41C3_400381D47B0A_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_30796AA1_3B03_5857_41C3_400381D47B0A_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_30796AA1_3B03_5857_41C3_400381D47B0A_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30796AA1_3B03_5857_41C3_400381D47B0A_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_30796AA1_3B03_5857_41C3_400381D47B0A_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_30796AA1_3B03_5857_41C3_400381D47B0A_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_30796AA1_3B03_5857_41C3_400381D47B0A_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30796AA1_3B03_5857_41C3_400381D47B0A_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_30796AA1_3B03_5857_41C3_400381D47B0A_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_30796AA1_3B03_5857_41C3_400381D47B0A_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_30796AA1_3B03_5857_41C3_400381D47B0A_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30796AA1_3B03_5857_41C3_400381D47B0A_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_30796AA1_3B03_5857_41C3_400381D47B0A_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_30796AA1_3B03_5857_41C3_400381D47B0A_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_30796AA1_3B03_5857_41C3_400381D47B0A_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "PANO_20230220_140456",
 "id": "panorama_30796AA1_3B03_5857_41C3_400381D47B0A",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3092CC81_3B03_7854_41C3_E9207A33602F"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_307BD3F5_3B03_4FBC_41C7_644CF74C11BE"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30792973_3B03_58B4_4199_8A731C61F367"
  }
 ],
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_30796AA1_3B03_5857_41C3_400381D47B0A_t.jpg",
 "overlays": [
  "this.overlay_2ABB88EB_3F7D_333F_41C9_AE365D9815D4",
  "this.overlay_2945C527_3F43_FD37_41C1_55760DC96BEA",
  "this.overlay_261032D3_3F5D_176E_419F_8A70D9CA0419"
 ]
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 12.36,
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "pitch": -4.13
 },
 "id": "panorama_3093F939_3B03_F8B4_41A3_D11ED150C5EE_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -163.1,
  "class": "PanoramaCameraPosition",
  "pitch": -10.86
 },
 "id": "panorama_3787367E_3B02_C8AC_41CB_776E387D818B_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -124.44,
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "pitch": 10.36
 },
 "id": "panorama_307BD3F5_3B03_4FBC_41C7_644CF74C11BE_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -139.15,
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "pitch": 0.9
 },
 "id": "panorama_30796AA1_3B03_5857_41C3_400381D47B0A_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -52.72,
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "pitch": -7.14
 },
 "id": "panorama_309DF23B_3B03_48AB_41C5_2FF83AB16BD2_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -152.68,
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "pitch": 1.9
 },
 "id": "panorama_30792973_3B03_58B4_4199_8A731C61F367_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -94.04,
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "pitch": -5.14
 },
 "id": "camera_B2FE52E9_A386_D7E7_419A_17D0E24E2803"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 27.92,
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "pitch": -2.2
 },
 "id": "camera_B2CF62A8_A386_D665_41BF_64C024C307A4"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 174.55,
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "pitch": -4.29
 },
 "id": "panorama_3078B71E_3B02_C86D_41B7_70A00F950FF0_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 20.52,
  "class": "PanoramaCameraPosition",
  "pitch": 1.96
 },
 "id": "panorama_307BF505_3B03_485C_41A7_6097D0B84928_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -41.33,
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "pitch": -5.64
 },
 "id": "panorama_3093310B_3B02_C86B_41C3_C2951B951ED9_camera"
},
{
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30795FD8_3B03_D7F4_41A1_C9184964EF98_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_30795FD8_3B03_D7F4_41A1_C9184964EF98_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_30795FD8_3B03_D7F4_41A1_C9184964EF98_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_30795FD8_3B03_D7F4_41A1_C9184964EF98_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30795FD8_3B03_D7F4_41A1_C9184964EF98_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_30795FD8_3B03_D7F4_41A1_C9184964EF98_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_30795FD8_3B03_D7F4_41A1_C9184964EF98_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_30795FD8_3B03_D7F4_41A1_C9184964EF98_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_30795FD8_3B03_D7F4_41A1_C9184964EF98_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30795FD8_3B03_D7F4_41A1_C9184964EF98_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_30795FD8_3B03_D7F4_41A1_C9184964EF98_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_30795FD8_3B03_D7F4_41A1_C9184964EF98_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_30795FD8_3B03_D7F4_41A1_C9184964EF98_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30795FD8_3B03_D7F4_41A1_C9184964EF98_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_30795FD8_3B03_D7F4_41A1_C9184964EF98_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_30795FD8_3B03_D7F4_41A1_C9184964EF98_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_30795FD8_3B03_D7F4_41A1_C9184964EF98_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30795FD8_3B03_D7F4_41A1_C9184964EF98_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_30795FD8_3B03_D7F4_41A1_C9184964EF98_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_30795FD8_3B03_D7F4_41A1_C9184964EF98_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_30795FD8_3B03_D7F4_41A1_C9184964EF98_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30795FD8_3B03_D7F4_41A1_C9184964EF98_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_30795FD8_3B03_D7F4_41A1_C9184964EF98_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_30795FD8_3B03_D7F4_41A1_C9184964EF98_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_30795FD8_3B03_D7F4_41A1_C9184964EF98_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "PANO_20230220_145356",
 "id": "panorama_30795FD8_3B03_D7F4_41A1_C9184964EF98",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3093310B_3B02_C86B_41C3_C2951B951ED9"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3088473C_3B03_C8AC_41B4_BD208C3DDF9B"
  }
 ],
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_30795FD8_3B03_D7F4_41A1_C9184964EF98_t.jpg",
 "overlays": [
  "this.overlay_5726FF5C_44AE_E7BE_41BA_104AEB871EDC",
  "this.overlay_5756143C_44BF_B9FE_41BA_CA7A35960503"
 ]
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 92.88,
  "class": "PanoramaCameraPosition",
  "pitch": 0.83
 },
 "id": "panorama_3078C9C6_3B02_DBDD_4193_AEE4B3F8B162_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 157.87,
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "pitch": -0.65
 },
 "id": "panorama_3092CC81_3B03_7854_41C3_E9207A33602F_camera"
},
{
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30791B62_3B03_78D4_41C8_03252B699D1D_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_30791B62_3B03_78D4_41C8_03252B699D1D_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_30791B62_3B03_78D4_41C8_03252B699D1D_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_30791B62_3B03_78D4_41C8_03252B699D1D_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30791B62_3B03_78D4_41C8_03252B699D1D_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_30791B62_3B03_78D4_41C8_03252B699D1D_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_30791B62_3B03_78D4_41C8_03252B699D1D_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_30791B62_3B03_78D4_41C8_03252B699D1D_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_30791B62_3B03_78D4_41C8_03252B699D1D_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30791B62_3B03_78D4_41C8_03252B699D1D_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_30791B62_3B03_78D4_41C8_03252B699D1D_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_30791B62_3B03_78D4_41C8_03252B699D1D_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_30791B62_3B03_78D4_41C8_03252B699D1D_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30791B62_3B03_78D4_41C8_03252B699D1D_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_30791B62_3B03_78D4_41C8_03252B699D1D_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_30791B62_3B03_78D4_41C8_03252B699D1D_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_30791B62_3B03_78D4_41C8_03252B699D1D_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30791B62_3B03_78D4_41C8_03252B699D1D_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_30791B62_3B03_78D4_41C8_03252B699D1D_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_30791B62_3B03_78D4_41C8_03252B699D1D_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_30791B62_3B03_78D4_41C8_03252B699D1D_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30791B62_3B03_78D4_41C8_03252B699D1D_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_30791B62_3B03_78D4_41C8_03252B699D1D_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_30791B62_3B03_78D4_41C8_03252B699D1D_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_30791B62_3B03_78D4_41C8_03252B699D1D_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Canteen",
 "id": "panorama_30791B62_3B03_78D4_41C8_03252B699D1D",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_309572FD_3B03_49AF_41C3_53D8589DC146"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3085FECD_3B02_B9EF_41C9_7D50EF406B59"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30923FA1_3B02_F857_41BA_FD481F5C0F86"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3078E86A_3B02_F8D4_41B1_B6E830250620"
  }
 ],
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_30791B62_3B03_78D4_41C8_03252B699D1D_t.jpg",
 "overlays": [
  "this.overlay_2AF1BD04_3F43_32E9_41A8_8B7057BF532E",
  "this.overlay_23FFE5B6_3FC3_1D29_41CB_C7A1467FFB11",
  "this.overlay_5213382E_4012_6CDA_41C3_53F883293E72",
  "this.overlay_531CAFB4_4036_23CE_41CD_827EEB31CD74"
 ]
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_30938DA3_3B03_5854_41CC_20C2E9CBDCAB_camera"
},
{
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3085FECD_3B02_B9EF_41C9_7D50EF406B59_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_3085FECD_3B02_B9EF_41C9_7D50EF406B59_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3085FECD_3B02_B9EF_41C9_7D50EF406B59_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3085FECD_3B02_B9EF_41C9_7D50EF406B59_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3085FECD_3B02_B9EF_41C9_7D50EF406B59_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_3085FECD_3B02_B9EF_41C9_7D50EF406B59_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3085FECD_3B02_B9EF_41C9_7D50EF406B59_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3085FECD_3B02_B9EF_41C9_7D50EF406B59_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3085FECD_3B02_B9EF_41C9_7D50EF406B59_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3085FECD_3B02_B9EF_41C9_7D50EF406B59_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_3085FECD_3B02_B9EF_41C9_7D50EF406B59_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3085FECD_3B02_B9EF_41C9_7D50EF406B59_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3085FECD_3B02_B9EF_41C9_7D50EF406B59_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3085FECD_3B02_B9EF_41C9_7D50EF406B59_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_3085FECD_3B02_B9EF_41C9_7D50EF406B59_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3085FECD_3B02_B9EF_41C9_7D50EF406B59_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3085FECD_3B02_B9EF_41C9_7D50EF406B59_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3085FECD_3B02_B9EF_41C9_7D50EF406B59_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_3085FECD_3B02_B9EF_41C9_7D50EF406B59_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3085FECD_3B02_B9EF_41C9_7D50EF406B59_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3085FECD_3B02_B9EF_41C9_7D50EF406B59_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3085FECD_3B02_B9EF_41C9_7D50EF406B59_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_3085FECD_3B02_B9EF_41C9_7D50EF406B59_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3085FECD_3B02_B9EF_41C9_7D50EF406B59_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3085FECD_3B02_B9EF_41C9_7D50EF406B59_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "PANO_20230220_134603",
 "id": "panorama_3085FECD_3B02_B9EF_41C9_7D50EF406B59",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_309FD2D2_3B03_49F5_4146_5E15829C7F3C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3092CC81_3B03_7854_41C3_E9207A33602F"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_307BD3F5_3B03_4FBC_41C7_644CF74C11BE"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30792973_3B03_58B4_4199_8A731C61F367"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30791B62_3B03_78D4_41C8_03252B699D1D"
  }
 ],
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_3085FECD_3B02_B9EF_41C9_7D50EF406B59_t.jpg",
 "overlays": [
  "this.overlay_240C7CA1_3FCD_132B_41CF_3A85A037903B",
  "this.overlay_24F8608A_3FCF_13F9_41C5_1DC2724BE127",
  "this.overlay_2401D053_3FCF_F36F_4199_6572F8B601AF",
  "this.overlay_233F88E7_3FC5_F337_413E_6893EFF87588",
  "this.overlay_22DF43D9_3FC7_151B_41C4_15E02952C6BC"
 ]
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "pitch": 0
 },
 "id": "camera_B2DAA2B7_A386_D66A_41E2_F2C5078DFD0A"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 7.92,
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "pitch": -1.7
 },
 "id": "panorama_307A515A_3B03_C8F4_41C4_54E6993B1850_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 56.43,
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "pitch": -1.17
 },
 "id": "panorama_3092BB52_3B03_58F4_419B_7FC04DB4BD7A_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -2.2,
  "class": "PanoramaCameraPosition",
  "pitch": 4.41
 },
 "id": "camera_B20EF2FD_A386_D7DF_41E0_82B65B1B54A3"
},
{
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3093F939_3B03_F8B4_41A3_D11ED150C5EE_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_3093F939_3B03_F8B4_41A3_D11ED150C5EE_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3093F939_3B03_F8B4_41A3_D11ED150C5EE_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3093F939_3B03_F8B4_41A3_D11ED150C5EE_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3093F939_3B03_F8B4_41A3_D11ED150C5EE_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_3093F939_3B03_F8B4_41A3_D11ED150C5EE_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3093F939_3B03_F8B4_41A3_D11ED150C5EE_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3093F939_3B03_F8B4_41A3_D11ED150C5EE_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3093F939_3B03_F8B4_41A3_D11ED150C5EE_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3093F939_3B03_F8B4_41A3_D11ED150C5EE_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_3093F939_3B03_F8B4_41A3_D11ED150C5EE_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3093F939_3B03_F8B4_41A3_D11ED150C5EE_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3093F939_3B03_F8B4_41A3_D11ED150C5EE_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3093F939_3B03_F8B4_41A3_D11ED150C5EE_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_3093F939_3B03_F8B4_41A3_D11ED150C5EE_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3093F939_3B03_F8B4_41A3_D11ED150C5EE_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3093F939_3B03_F8B4_41A3_D11ED150C5EE_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3093F939_3B03_F8B4_41A3_D11ED150C5EE_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_3093F939_3B03_F8B4_41A3_D11ED150C5EE_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3093F939_3B03_F8B4_41A3_D11ED150C5EE_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3093F939_3B03_F8B4_41A3_D11ED150C5EE_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3093F939_3B03_F8B4_41A3_D11ED150C5EE_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_3093F939_3B03_F8B4_41A3_D11ED150C5EE_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3093F939_3B03_F8B4_41A3_D11ED150C5EE_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3093F939_3B03_F8B4_41A3_D11ED150C5EE_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "PANO_20230220_143808",
 "id": "panorama_3093F939_3B03_F8B4_41A3_D11ED150C5EE",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3096786D_3B03_D8AF_4172_8E6C661ABF5B"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_307A614B_3B03_C8D4_41BF_536BCB4B0653"
  }
 ],
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_3093F939_3B03_F8B4_41A3_D11ED150C5EE_t.jpg",
 "overlays": [
  "this.overlay_5C50E3CF_484B_E470_41CD_C169430C939F",
  "this.overlay_5D05AE02_487B_DFF0_4196_5F8049153DE0"
 ]
},
{
 "hfovMin": "130%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3092CC81_3B03_7854_41C3_E9207A33602F_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_3092CC81_3B03_7854_41C3_E9207A33602F_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3092CC81_3B03_7854_41C3_E9207A33602F_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3092CC81_3B03_7854_41C3_E9207A33602F_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3092CC81_3B03_7854_41C3_E9207A33602F_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_3092CC81_3B03_7854_41C3_E9207A33602F_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3092CC81_3B03_7854_41C3_E9207A33602F_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3092CC81_3B03_7854_41C3_E9207A33602F_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3092CC81_3B03_7854_41C3_E9207A33602F_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3092CC81_3B03_7854_41C3_E9207A33602F_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_3092CC81_3B03_7854_41C3_E9207A33602F_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3092CC81_3B03_7854_41C3_E9207A33602F_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3092CC81_3B03_7854_41C3_E9207A33602F_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3092CC81_3B03_7854_41C3_E9207A33602F_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_3092CC81_3B03_7854_41C3_E9207A33602F_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3092CC81_3B03_7854_41C3_E9207A33602F_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3092CC81_3B03_7854_41C3_E9207A33602F_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3092CC81_3B03_7854_41C3_E9207A33602F_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_3092CC81_3B03_7854_41C3_E9207A33602F_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3092CC81_3B03_7854_41C3_E9207A33602F_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3092CC81_3B03_7854_41C3_E9207A33602F_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3092CC81_3B03_7854_41C3_E9207A33602F_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_3092CC81_3B03_7854_41C3_E9207A33602F_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3092CC81_3B03_7854_41C3_E9207A33602F_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3092CC81_3B03_7854_41C3_E9207A33602F_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "PANO_20230220_134212",
 "id": "panorama_3092CC81_3B03_7854_41C3_E9207A33602F",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_309572FD_3B03_49AF_41C3_53D8589DC146"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30796AA1_3B03_5857_41C3_400381D47B0A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_307BD3F5_3B03_4FBC_41C7_644CF74C11BE"
  }
 ],
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_3092CC81_3B03_7854_41C3_E9207A33602F_t.jpg",
 "overlays": [
  "this.overlay_2C3DF571_3F43_7D2B_41CF_9DEE3A87CE26",
  "this.overlay_2A15A742_3F45_1D69_41CD_1B650D94BA1D",
  "this.overlay_277DB4C7_3F4F_7377_41C2_2D53B7FE87BE"
 ]
},
{
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30790F3E_3B03_B8AC_41A5_E2DFF4789AB7_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_30790F3E_3B03_B8AC_41A5_E2DFF4789AB7_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_30790F3E_3B03_B8AC_41A5_E2DFF4789AB7_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_30790F3E_3B03_B8AC_41A5_E2DFF4789AB7_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30790F3E_3B03_B8AC_41A5_E2DFF4789AB7_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_30790F3E_3B03_B8AC_41A5_E2DFF4789AB7_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_30790F3E_3B03_B8AC_41A5_E2DFF4789AB7_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_30790F3E_3B03_B8AC_41A5_E2DFF4789AB7_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_30790F3E_3B03_B8AC_41A5_E2DFF4789AB7_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30790F3E_3B03_B8AC_41A5_E2DFF4789AB7_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_30790F3E_3B03_B8AC_41A5_E2DFF4789AB7_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_30790F3E_3B03_B8AC_41A5_E2DFF4789AB7_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_30790F3E_3B03_B8AC_41A5_E2DFF4789AB7_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30790F3E_3B03_B8AC_41A5_E2DFF4789AB7_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_30790F3E_3B03_B8AC_41A5_E2DFF4789AB7_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_30790F3E_3B03_B8AC_41A5_E2DFF4789AB7_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_30790F3E_3B03_B8AC_41A5_E2DFF4789AB7_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30790F3E_3B03_B8AC_41A5_E2DFF4789AB7_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_30790F3E_3B03_B8AC_41A5_E2DFF4789AB7_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_30790F3E_3B03_B8AC_41A5_E2DFF4789AB7_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_30790F3E_3B03_B8AC_41A5_E2DFF4789AB7_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30790F3E_3B03_B8AC_41A5_E2DFF4789AB7_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_30790F3E_3B03_B8AC_41A5_E2DFF4789AB7_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_30790F3E_3B03_B8AC_41A5_E2DFF4789AB7_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_30790F3E_3B03_B8AC_41A5_E2DFF4789AB7_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "PANO_20230220_151616",
 "id": "panorama_30790F3E_3B03_B8AC_41A5_E2DFF4789AB7",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3088473C_3B03_C8AC_41B4_BD208C3DDF9B"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_307BF505_3B03_485C_41A7_6097D0B84928"
  }
 ],
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_30790F3E_3B03_B8AC_41A5_E2DFF4789AB7_t.jpg",
 "overlays": [
  "this.overlay_53A4AF9A_44AB_6685_414C_3F85D66DBEE8",
  "this.overlay_537E396A_44AA_EB85_4190_A0447FCAD94C"
 ]
},
{
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_307BE642_3B03_48D5_41CD_0BD101057A2C_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_307BE642_3B03_48D5_41CD_0BD101057A2C_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_307BE642_3B03_48D5_41CD_0BD101057A2C_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_307BE642_3B03_48D5_41CD_0BD101057A2C_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_307BE642_3B03_48D5_41CD_0BD101057A2C_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_307BE642_3B03_48D5_41CD_0BD101057A2C_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_307BE642_3B03_48D5_41CD_0BD101057A2C_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_307BE642_3B03_48D5_41CD_0BD101057A2C_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_307BE642_3B03_48D5_41CD_0BD101057A2C_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_307BE642_3B03_48D5_41CD_0BD101057A2C_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_307BE642_3B03_48D5_41CD_0BD101057A2C_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_307BE642_3B03_48D5_41CD_0BD101057A2C_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_307BE642_3B03_48D5_41CD_0BD101057A2C_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_307BE642_3B03_48D5_41CD_0BD101057A2C_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_307BE642_3B03_48D5_41CD_0BD101057A2C_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_307BE642_3B03_48D5_41CD_0BD101057A2C_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_307BE642_3B03_48D5_41CD_0BD101057A2C_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_307BE642_3B03_48D5_41CD_0BD101057A2C_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_307BE642_3B03_48D5_41CD_0BD101057A2C_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_307BE642_3B03_48D5_41CD_0BD101057A2C_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_307BE642_3B03_48D5_41CD_0BD101057A2C_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_307BE642_3B03_48D5_41CD_0BD101057A2C_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_307BE642_3B03_48D5_41CD_0BD101057A2C_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_307BE642_3B03_48D5_41CD_0BD101057A2C_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_307BE642_3B03_48D5_41CD_0BD101057A2C_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "PANO_20230220_141236",
 "id": "panorama_307BE642_3B03_48D5_41CD_0BD101057A2C",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_307A515A_3B03_C8F4_41C4_54E6993B1850"
  }
 ],
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_307BE642_3B03_48D5_41CD_0BD101057A2C_t.jpg",
 "overlays": [
  "this.overlay_58564AEA_44F7_EE85_417C_08AA59BEB9DE"
 ]
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 34.53,
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "pitch": 0
 },
 "id": "camera_B2D092CC_A386_D63D_41D6_AD16BD28A38B"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 63.28,
  "class": "PanoramaCameraPosition",
  "pitch": 5.2
 },
 "id": "panorama_3078AA42_3B02_B8D5_41CC_21946806B3DC_camera"
},
{
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3097F933_3B03_D8B4_41C5_01A06E7961C0_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_3097F933_3B03_D8B4_41C5_01A06E7961C0_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3097F933_3B03_D8B4_41C5_01A06E7961C0_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3097F933_3B03_D8B4_41C5_01A06E7961C0_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3097F933_3B03_D8B4_41C5_01A06E7961C0_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_3097F933_3B03_D8B4_41C5_01A06E7961C0_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3097F933_3B03_D8B4_41C5_01A06E7961C0_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3097F933_3B03_D8B4_41C5_01A06E7961C0_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3097F933_3B03_D8B4_41C5_01A06E7961C0_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3097F933_3B03_D8B4_41C5_01A06E7961C0_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_3097F933_3B03_D8B4_41C5_01A06E7961C0_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3097F933_3B03_D8B4_41C5_01A06E7961C0_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3097F933_3B03_D8B4_41C5_01A06E7961C0_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3097F933_3B03_D8B4_41C5_01A06E7961C0_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_3097F933_3B03_D8B4_41C5_01A06E7961C0_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3097F933_3B03_D8B4_41C5_01A06E7961C0_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3097F933_3B03_D8B4_41C5_01A06E7961C0_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3097F933_3B03_D8B4_41C5_01A06E7961C0_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_3097F933_3B03_D8B4_41C5_01A06E7961C0_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3097F933_3B03_D8B4_41C5_01A06E7961C0_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3097F933_3B03_D8B4_41C5_01A06E7961C0_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3097F933_3B03_D8B4_41C5_01A06E7961C0_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_3097F933_3B03_D8B4_41C5_01A06E7961C0_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3097F933_3B03_D8B4_41C5_01A06E7961C0_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3097F933_3B03_D8B4_41C5_01A06E7961C0_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "PANO_20230220_141808",
 "id": "panorama_3097F933_3B03_D8B4_41C5_01A06E7961C0",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_309FD2D2_3B03_49F5_4146_5E15829C7F3C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3092BB52_3B03_58F4_419B_7FC04DB4BD7A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_309DF23B_3B03_48AB_41C5_2FF83AB16BD2"
  }
 ],
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_3097F933_3B03_D8B4_41C5_01A06E7961C0_t.jpg",
 "overlays": [
  "this.overlay_5592EC4A_4012_255A_41C1_272AFAD86A27",
  "this.overlay_56402ED1_4016_6546_41CD_43BDC7DB0C59",
  "this.overlay_56CB255B_401E_677A_41B0_751FCDB10574"
 ]
},
{
 "progressBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "id": "MainViewer",
 "progressBorderSize": 0,
 "toolTipFontColor": "#FFFFFF",
 "left": 0,
 "transitionMode": "blending",
 "width": "100%",
 "playbackBarBorderColor": "#FFFFFF",
 "transitionDuration": 500,
 "progressBorderRadius": 0,
 "toolTipBackgroundColor": "#000000",
 "paddingLeft": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "class": "ViewerArea",
 "minHeight": 50,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingTop": 7,
 "playbackBarLeft": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderSize": 1,
 "toolTipPaddingRight": 10,
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "toolTipPaddingLeft": 10,
 "playbackBarHeadShadowBlurRadius": 3,
 "height": "100%",
 "minWidth": 100,
 "toolTipDisplayTime": 600,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "borderRadius": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 5,
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#FFFFFF",
 "paddingBottom": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipBorderRadius": 3,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "toolTipBorderColor": "#767676",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarRight": 0,
 "shadow": false,
 "progressBarBorderSize": 0,
 "borderSize": 0,
 "toolTipShadowSpread": 0,
 "toolTipOpacity": 0.5,
 "toolTipShadowBlurRadius": 3,
 "playbackBarProgressBorderSize": 0,
 "toolTipFontSize": 13,
 "toolTipTextShadowColor": "#000000",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "paddingRight": 0,
 "toolTipFontWeight": "normal",
 "toolTipPaddingBottom": 7,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipShadowColor": "#333333",
 "top": 0,
 "playbackBarProgressOpacity": 1,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarBorderSize": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "toolTipFontStyle": "normal",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowOpacity": 0,
 "toolTipFontFamily": "Georgia",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBottom": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "paddingTop": 0,
 "playbackBarHeadShadow": true,
 "data": {
  "name": "Main Viewer"
 },
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0
},
{
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "id": "Container_22BB12F4_3075_D173_4184_EC3BC4955417",
 "left": 70,
 "width": 550,
 "paddingRight": 0,
 "children": [
  "this.Container_22BBC2F4_3075_D173_41B4_71F7A3560C34",
  "this.Container_22BBD2F4_3075_D173_41B4_8504C593E6BF",
  "this.Label_22BB22F4_3075_D173_41BB_3ACDC6CCCC83",
  "this.Label_22BB32F4_3075_D173_4191_C8B45B85DEB8"
 ],
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "minHeight": 1,
 "layout": "absolute",
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "top": 34,
 "height": 140,
 "minWidth": 1,
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "propagateClick": true,
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "shadow": false,
 "data": {
  "name": "--STICKER"
 }
},
{
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "width": 115.05,
 "right": "0%",
 "paddingRight": 0,
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "minHeight": 1,
 "layout": "absolute",
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "top": "0%",
 "height": 641,
 "minWidth": 1,
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "propagateClick": true,
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "shadow": false,
 "data": {
  "name": "-- SETTINGS"
 }
},
{
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "id": "Container_4041C033_7558_FB6E_41CE_BFE427F3AF92",
 "left": "0%",
 "width": 330,
 "paddingRight": 0,
 "children": [
  "this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
  "this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD"
 ],
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "class": "Container",
 "minHeight": 1,
 "layout": "absolute",
 "top": "0%",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "contentOpaque": false,
 "height": "100%",
 "minWidth": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "shadow": false,
 "data": {
  "name": "--- LEFT PANEL 4 (Community)"
 }
},
{
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "backgroundColorDirection": "vertical",
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "left": "0%",
 "right": "0%",
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "minHeight": 1,
 "layout": "absolute",
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "bottom": "0%",
 "backgroundOpacity": 0.6,
 "top": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "propagateClick": true,
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "visible": false,
 "overflow": "scroll",
 "shadow": false,
 "data": {
  "name": "--INFO photo"
 }
},
{
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "backgroundColorDirection": "vertical",
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "left": "0%",
 "right": "0%",
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "minHeight": 1,
 "layout": "absolute",
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "bottom": "0%",
 "backgroundOpacity": 0.6,
 "top": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "propagateClick": true,
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "visible": false,
 "overflow": "scroll",
 "shadow": false,
 "data": {
  "name": "--PANORAMA LIST"
 }
},
{
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "backgroundColorDirection": "vertical",
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "left": "0%",
 "right": "0%",
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "minHeight": 1,
 "layout": "absolute",
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "bottom": "0%",
 "backgroundOpacity": 0.6,
 "top": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "propagateClick": true,
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "visible": false,
 "overflow": "scroll",
 "shadow": false,
 "data": {
  "name": "--LOCATION"
 }
},
{
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "backgroundColorDirection": "vertical",
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "left": "0%",
 "right": "0%",
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "minHeight": 1,
 "layout": "absolute",
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "bottom": "0%",
 "backgroundOpacity": 0.6,
 "top": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "propagateClick": true,
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "visible": false,
 "overflow": "scroll",
 "shadow": false,
 "data": {
  "name": "--FLOORPLAN"
 }
},
{
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "backgroundColorDirection": "vertical",
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "left": "0%",
 "right": "0%",
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "minHeight": 1,
 "layout": "absolute",
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "bottom": "0%",
 "backgroundOpacity": 0.6,
 "top": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "propagateClick": true,
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "visible": false,
 "overflow": "scroll",
 "shadow": false,
 "data": {
  "name": "--PHOTOALBUM"
 }
},
{
 "borderSize": 0,
 "scrollBarColor": "#04A3E1",
 "id": "Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9",
 "backgroundColorDirection": "vertical",
 "children": [
  "this.Container_1E19923C_57F1_802D_41C4_18DBE75E48C1",
  "this.Container_1E18A23C_57F1_802D_41B9_D08FA26C7F4C"
 ],
 "left": "0%",
 "right": "0%",
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "minHeight": 1,
 "layout": "absolute",
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "bottom": "0%",
 "backgroundOpacity": 0.6,
 "top": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "propagateClick": true,
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, false, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "visible": false,
 "overflow": "scroll",
 "shadow": false,
 "data": {
  "name": "--REALTOR"
 }
},
{
 "borderSize": 0,
 "maxWidth": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "maxHeight": 58,
 "width": 58,
 "paddingRight": 0,
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "height": 58,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "minWidth": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": true,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "mode": "toggle",
 "transparencyActive": true,
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "shadow": false,
 "cursor": "hand"
},
{
 "borderSize": 0,
 "maxWidth": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "maxHeight": 58,
 "width": 58,
 "paddingRight": 0,
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "height": 58,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "minWidth": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": true,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "mode": "toggle",
 "transparencyActive": true,
 "data": {
  "name": "IconButton MUTE"
 },
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "shadow": false,
 "cursor": "hand"
},
{
 "id": "overlay_5CE54FDD_4847_FC10_41C6_23012A10EC2B",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5DAD783A_4844_E410_41BF_F47863D97F3A",
   "pitch": -7.28,
   "yaw": 3.28,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.08,
   "distance": 100
  }
 ],
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_307A510B_3B03_C86B_41B9_A9C23E177918_0_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 3.28,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.08,
   "pitch": -7.28
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 01c"
 }
},
{
 "id": "overlay_5720B492_401E_25C5_41CE_771E8C674E5E",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5A24457C_4016_273E_41CD_F498F81B4A41",
   "pitch": -8.7,
   "yaw": 34.1,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.23,
   "distance": 50
  }
 ],
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3092BB52_3B03_58F4_419B_7FC04DB4BD7A_0_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 34.1,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 18.23,
   "pitch": -8.7
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 01c Left-Up"
 }
},
{
 "id": "overlay_5805F204_4012_5CCD_41A1_5683594B4290",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3097F933_3B03_D8B4_41C5_01A06E7961C0, this.camera_B2CF62A8_A386_D665_41BF_64C024C307A4); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5A0D97A3_4012_23CA_41C5_643DFA8DBDA3",
   "pitch": -15.13,
   "yaw": -69.32,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 22.57,
   "distance": 50
  }
 ],
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3092BB52_3B03_58F4_419B_7FC04DB4BD7A_0_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -69.32,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 22.57,
   "pitch": -15.13
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 01b Left-Up"
 }
},
{
 "id": "overlay_5F1D131D_44FA_9FBF_41C5_37A25093F96B",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_584F4504_44F6_BB8E_41C7_EB5BDA1F191B",
   "pitch": -29.99,
   "yaw": 77.43,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 22.25,
   "distance": 50
  }
 ],
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3092BB52_3B03_58F4_419B_7FC04DB4BD7A_0_HS_2_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 77.43,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 22.25,
   "pitch": -29.99
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 01b Right-Up"
 }
},
{
 "id": "overlay_57A08D10_4017_E4C5_41AB_928C0BF00C53",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3092BB52_3B03_58F4_419B_7FC04DB4BD7A, this.camera_B257A356_A386_D62A_41E1_2D1D9FC80B3A); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5A0DC7A3_4012_23CA_41C6_5CC1357B521E",
   "pitch": -28.26,
   "yaw": -107.32,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.49,
   "distance": 50
  }
 ],
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3078B71E_3B02_C86D_41B7_70A00F950FF0_0_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -107.32,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 13.49,
   "pitch": -28.26
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 01a Right-Up"
 }
},
{
 "id": "overlay_5846A480_4016_25C5_4199_F4FE881D3D90",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5A0C57A3_4012_23CA_41C3_78F707E0B571",
   "pitch": -28.96,
   "yaw": -154.15,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.15,
   "distance": 50
  }
 ],
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3078B71E_3B02_C86D_41B7_70A00F950FF0_0_HS_3_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -154.15,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 17.15,
   "pitch": -28.96
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 01a Left-UP"
 }
},
{
 "id": "overlay_5F86838B_487C_E4F0_41A6_545CCCC03249",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_524264C8_487B_EC71_41C3_0C49A1ABAD34",
   "pitch": -7.65,
   "yaw": 36.11,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.59,
   "distance": 50
  }
 ],
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3078B71E_3B02_C86D_41B7_70A00F950FF0_0_HS_4_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 36.11,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 9.59,
   "pitch": -7.65
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 01c Right-Up"
 }
},
{
 "id": "overlay_549757C2_4032_634A_41AC_CFEB5D09CD01",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_58B77838_4032_6CC5_41CB_B9F1A3C144D6",
   "pitch": -12.04,
   "yaw": -42.14,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.86,
   "distance": 50
  }
 ],
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3787367E_3B02_C8AC_41CB_776E387D818B_0_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -42.14,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 16.86,
   "pitch": -12.04
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 01c Left-Up"
 }
},
{
 "id": "overlay_5852E39C_485D_6417_41B5_E09B13852909",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5CED0103_4845_65F1_41C1_4D2ACDC41E54",
   "pitch": -23.72,
   "yaw": -163.19,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 21.28,
   "distance": 50
  }
 ],
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3787367E_3B02_C8AC_41CB_776E387D818B_0_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -163.19,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 21.28,
   "pitch": -23.72
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 01b Left-Up"
 }
},
{
 "id": "overlay_56F0664E_4495_999D_41B0_11D7BD441567",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_56399D37_4496_EB8A_41C3_DAFFF2E328CF",
   "pitch": -31.67,
   "yaw": 145.18,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 21.4,
   "distance": 50
  }
 ],
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3093310B_3B02_C86B_41C3_C2951B951ED9_0_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 145.18,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 21.4,
   "pitch": -31.67
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 01b Right-Up"
 }
},
{
 "id": "overlay_5706A618_4495_9986_41CE_D5715B13195F",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_30795FD8_3B03_D7F4_41A1_C9184964EF98, this.camera_B219330B_A386_D63B_41B6_CD028735FAE1); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_578A3366_44AA_BF8D_41CD_7FB9C29578D3",
   "pitch": -24.41,
   "yaw": 12.65,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.11,
   "distance": 50
  }
 ],
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3093310B_3B02_C86B_41C3_C2951B951ED9_0_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 12.65,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 18.11,
   "pitch": -24.41
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 01a Right-Up"
 }
},
{
 "id": "overlay_546D757D_4036_273E_41C2_1264800D59EC",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_30791B62_3B03_78D4_41C8_03252B699D1D, this.camera_B235633F_A386_D65A_41DD_639D6E5EA16C); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_58B7C838_4032_6CC5_41C1_128D773AAC3F",
   "pitch": -2.1,
   "yaw": 32.56,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.67,
   "distance": 50
  }
 ],
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30923FA1_3B02_F857_41BA_FD481F5C0F86_0_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 32.56,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 9.67,
   "pitch": -2.1
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 01c Right-Up"
 }
},
{
 "id": "overlay_5483D285_4036_3DCF_41BE_1E2B93146B99",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_58B79838_4032_6CC5_41A9_3E1DB791313B",
   "pitch": -4.06,
   "yaw": -150.05,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.28,
   "distance": 50
  }
 ],
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30923FA1_3B02_F857_41BA_FD481F5C0F86_0_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -150.05,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 15.28,
   "pitch": -4.06
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 01c Right"
 }
},
{
 "id": "overlay_5E5C19E2_487D_E430_41A2_A0DD5BE90846",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3093F939_3B03_F8B4_41A3_D11ED150C5EE, this.camera_B23BA32C_A386_D67E_41D7_4D52CBCD691E); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5B288B2E_54E6_9AE9_41B6_719A98765654",
   "pitch": -12.44,
   "yaw": -32.5,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.02,
   "distance": 100
  }
 ],
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3096786D_3B03_D8AF_4172_8E6C661ABF5B_0_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -32.5,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 16.02,
   "pitch": -12.44
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 01c"
 }
},
{
 "id": "overlay_543E0DE8_485C_DC30_41C8_4B4FFF96BAA9",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5B283B2E_54E6_9AE9_41CB_F6F7B3BE7CAA",
   "pitch": -22.78,
   "yaw": 76.52,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.12,
   "distance": 100
  }
 ],
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3096786D_3B03_D8AF_4172_8E6C661ABF5B_0_HS_2_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 76.52,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.12,
   "pitch": -22.78
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "id": "overlay_261F97EA_3F5C_FD39_41CB_F54385D7ECE4",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_22345D28_3FDF_2D39_41C5_B7DF11EF3047",
   "pitch": -0.67,
   "yaw": -127.21,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.6,
   "distance": 100
  }
 ],
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30792973_3B03_58B4_4199_8A731C61F367_0_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -127.21,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 13.6,
   "pitch": -0.67
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 01c"
 }
},
{
 "id": "overlay_2615DBA9_3F5D_753B_41CB_0E24C29C53BD",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_25D64D15_3F4F_12EB_41CA_99C80C4C67DA",
   "pitch": -13.08,
   "yaw": -170.48,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 22.63,
   "distance": 100
  }
 ],
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30792973_3B03_58B4_4199_8A731C61F367_0_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -170.48,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 22.63,
   "pitch": -13.08
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 01c"
 }
},
{
 "id": "overlay_26B7390A_3F43_32F9_41C3_83BD4DFBCBC3",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_25D79D15_3F4F_12EB_41B1_7C6196B779F7",
   "pitch": -6.8,
   "yaw": 159.91,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.46,
   "distance": 50
  }
 ],
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30792973_3B03_58B4_4199_8A731C61F367_0_HS_2_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 159.91,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.46,
   "pitch": -6.8
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 01b Left-Up"
 }
},
{
 "id": "overlay_59C6D2FC_485B_2417_41C4_964B6DA76727",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3787367E_3B02_C8AC_41CB_776E387D818B, this.camera_B245834D_A386_D63E_41D9_F003C8E47D93); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5CEDA103_4845_65F1_41CE_E8A2020287CF",
   "pitch": -4.96,
   "yaw": 39.44,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.26,
   "distance": 100
  }
 ],
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3078AA42_3B02_B8D5_41CC_21946806B3DC_0_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 39.44,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 15.26,
   "pitch": -4.96
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 01c"
 }
},
{
 "id": "overlay_5A30A183_4845_24F0_41CB_510BB682C953",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5CEC3103_4845_65F1_41B3_258ABA65BDBF",
   "pitch": -8.45,
   "yaw": 92.2,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.13,
   "distance": 50
  }
 ],
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3078AA42_3B02_B8D5_41CC_21946806B3DC_0_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 92.2,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 16.13,
   "pitch": -8.45
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 01c Right-Up"
 }
},
{
 "id": "overlay_4FAFAC6E_4012_E55D_41C1_5BC55072F6E6",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_50AB229C_401E_5DFD_41C8_0D13425784F2",
   "pitch": -13.87,
   "yaw": 140.34,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.87,
   "distance": 50
  }
 ],
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_309FD2D2_3B03_49F5_4146_5E15829C7F3C_0_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 140.34,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.87,
   "pitch": -13.87
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 01b Left-Up"
 }
},
{
 "id": "overlay_4FC848AA_4012_2DC5_41AC_8BE1D3DCE5F0",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_50ABE29C_401E_5DFD_41CD_FAC286B831FD",
   "pitch": -20.91,
   "yaw": -27.26,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.31,
   "distance": 100
  }
 ],
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_309FD2D2_3B03_49F5_4146_5E15829C7F3C_0_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -27.26,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.31,
   "pitch": -20.91
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "id": "overlay_5586D711_402E_64C6_419C_5A265355F128",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_55CC3E35_4017_E4CF_41CB_C04E7721A600",
   "pitch": -12.31,
   "yaw": 171.71,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.98,
   "distance": 100
  }
 ],
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_309FD2D2_3B03_49F5_4146_5E15829C7F3C_0_HS_3_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 171.71,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 16.98,
   "pitch": -12.31
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 01c"
 }
},
{
 "id": "overlay_51CCECA3_4016_65CB_41CE_4F1BB804F7DD",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5386E6D3_4016_654A_41C8_249485E367D6",
   "pitch": -8.26,
   "yaw": 69.41,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.93,
   "distance": 50
  }
 ],
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_309DF23B_3B03_48AB_41C5_2FF83AB16BD2_0_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 69.41,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 17.93,
   "pitch": -8.26
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 01c Right"
 }
},
{
 "id": "overlay_53C1064F_4032_655A_41C3_FFAF38F5403C",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_58B66837_4032_6CCB_41C5_5E422E34D425",
   "pitch": -1.2,
   "yaw": -107.77,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.43,
   "distance": 50
  }
 ],
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_309DF23B_3B03_48AB_41C5_2FF83AB16BD2_0_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -107.77,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 11.43,
   "pitch": -1.2
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 01c Right"
 }
},
{
 "id": "overlay_50C141A2_44B5_9A85_41CE_C712C1A8C47E",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5B9C8FD7_4495_668B_41A8_7DEC091EEE31",
   "pitch": -1.43,
   "yaw": -0.64,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.08,
   "distance": 100
  }
 ],
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3088473C_3B03_C8AC_41B4_BD208C3DDF9B_0_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -0.64,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 10.08,
   "pitch": -1.43
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 01c"
 }
},
{
 "id": "overlay_5017E3EC_44B6_9E9E_41CA_CCE7B9431A90",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5C636073_44B6_998B_41CC_5103E921D011",
   "pitch": -8.51,
   "yaw": 152.02,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.54,
   "distance": 100
  }
 ],
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3088473C_3B03_C8AC_41B4_BD208C3DDF9B_0_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 152.02,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 16.54,
   "pitch": -8.51
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 01c"
 }
},
{
 "id": "overlay_5B1DD8D9_484B_2410_4181_F86A19E21BEE",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_511A1F12_484B_5C10_4190_DC52CAC6843D",
   "pitch": -8.25,
   "yaw": -136.56,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.4,
   "distance": 50
  }
 ],
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_307A614B_3B03_C8D4_41BF_536BCB4B0653_0_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -136.56,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 16.4,
   "pitch": -8.25
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 01c Right-Up"
 }
},
{
 "id": "overlay_5B3EC0FC_484D_2417_41C7_00939EBCAF24",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_511BAF12_484B_5C10_41A3_569CFB0C6D6C",
   "pitch": -6.2,
   "yaw": 98.24,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.92,
   "distance": 100
  }
 ],
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_307A614B_3B03_C8D4_41BF_536BCB4B0653_0_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 98.24,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 12.92,
   "pitch": -6.2
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 01c"
 }
},
{
 "id": "overlay_5C088142_484F_2470_41B7_D22AF5943C25",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_511BFF12_484B_5C10_41BC_40BF0F5D49E7",
   "pitch": -23.75,
   "yaw": 110.58,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.69,
   "distance": 50
  }
 ],
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_307A614B_3B03_C8D4_41BF_536BCB4B0653_0_HS_2_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 110.58,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 18.69,
   "pitch": -23.75
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 01b Right-Up"
 }
},
{
 "id": "overlay_5DDB783E_484F_2410_41A8_745C9859951D",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_511B0F12_484B_5C10_41A4_F3007737AE2F",
   "pitch": -11.67,
   "yaw": 9.96,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.26,
   "distance": 100
  }
 ],
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_307A614B_3B03_C8D4_41BF_536BCB4B0653_0_HS_3_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 9.96,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 16.26,
   "pitch": -11.67
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 01c"
 }
},
{
 "borderSize": 0,
 "maxWidth": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "maxHeight": 58,
 "width": 58,
 "paddingRight": 0,
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "height": 58,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "minWidth": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": true,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "mode": "toggle",
 "transparencyActive": true,
 "data": {
  "name": "IconButton HS "
 },
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "shadow": false,
 "cursor": "hand"
},
{
 "borderSize": 0,
 "maxWidth": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "maxHeight": 58,
 "width": 58,
 "paddingRight": 0,
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "height": 58,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "minWidth": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": true,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "mode": "toggle",
 "transparencyActive": true,
 "data": {
  "name": "IconButton GYRO"
 },
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "shadow": false,
 "cursor": "hand"
},
{
 "borderSize": 0,
 "maxWidth": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "maxHeight": 58,
 "width": 58,
 "paddingRight": 0,
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "height": 58,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "minWidth": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": true,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "mode": "push",
 "transparencyActive": true,
 "data": {
  "name": "IconButton VR"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "id": "overlay_2EE0888B_3F4D_73FF_41BA_EB76124642D2",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2E2A912C_3F4C_F539_41CB_6A8C6833BA24",
   "pitch": -14.77,
   "yaw": 115.42,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.81,
   "distance": 50
  }
 ],
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_309572FD_3B03_49AF_41C3_53D8589DC146_0_HS_2_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 115.42,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.81,
   "pitch": -14.77
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 01b Left-Up"
 }
},
{
 "id": "overlay_282A0A6A_3F45_7739_41BA_FF7B9D94D82D",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2658354F_3F43_1D77_41C0_EBC3118D1257",
   "pitch": -6.51,
   "yaw": 173,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.92,
   "distance": 100
  }
 ],
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_309572FD_3B03_49AF_41C3_53D8589DC146_0_HS_4_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 173,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 11.92,
   "pitch": -6.51
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "id": "overlay_5C3BFF5B_4496_A7BA_41B2_CFADF5D37D15",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_307BF505_3B03_485C_41A7_6097D0B84928, this.camera_B267835F_A386_D6DA_41BA_7634CA2BAD4B); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5D1A1C0F_4495_A99B_4194_CE2F537E8E6C",
   "pitch": -4.19,
   "yaw": 3.5,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.18,
   "distance": 100
  }
 ],
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_309572FD_3B03_49AF_41C3_53D8589DC146_0_HS_5_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 3.5,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.18,
   "pitch": -4.19
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 01c"
 }
},
{
 "id": "overlay_514B73EE_4845_2433_417B_F7A2121926D4",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_55939929_485C_E430_41CF_2D1CEB1EAF48",
   "pitch": -22.99,
   "yaw": 115.7,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.1,
   "distance": 100
  }
 ],
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_309B7277_3B02_C8BB_415F_FC432B308E1B_0_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 115.7,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.1,
   "pitch": -22.99
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "id": "overlay_521D0C2E_4847_3C30_41C6_0557C48E70CA",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_55930929_485C_E430_41C3_2D06C72E79F8",
   "pitch": -21.45,
   "yaw": 24.33,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.26,
   "distance": 100
  }
 ],
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_309B7277_3B02_C8BB_415F_FC432B308E1B_0_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 24.33,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.26,
   "pitch": -21.45
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "id": "overlay_27C46B58_3F45_1519_41AF_CC750FA5F036",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_230E7C43_3F44_F36F_41AB_72EFF0A74BA6",
   "pitch": -5.07,
   "yaw": 58.71,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.26,
   "distance": 100
  }
 ],
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_307BD3F5_3B03_4FBC_41C7_644CF74C11BE_0_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 58.71,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 15.26,
   "pitch": -5.07
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 01c"
 }
},
{
 "id": "overlay_273CB9EE_3F47_1539_41BC_4DBE7C63DF56",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_230E1C43_3F44_F36F_41B2_F898390F2DD8",
   "pitch": -8.89,
   "yaw": 88.03,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.13,
   "distance": 50
  }
 ],
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_307BD3F5_3B03_4FBC_41C7_644CF74C11BE_0_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 88.03,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 15.13,
   "pitch": -8.89
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 01b Right-Up"
 }
},
{
 "id": "overlay_244C4C0E_3F45_12F9_41CC_C64C0FF54EAB",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_231F14DD_3F3D_131B_41C0_A7696E7D8CF4",
   "pitch": -11.79,
   "yaw": -43.19,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10,
   "distance": 100
  }
 ],
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_307BD3F5_3B03_4FBC_41C7_644CF74C11BE_0_HS_4_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -43.19,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 10,
   "pitch": -11.79
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "id": "overlay_24086657_3F3F_3F17_41A3_F38EA63D75C0",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2193E829_3FC4_F33B_41B5_89439C351569",
   "pitch": -10.68,
   "yaw": -124.26,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.16,
   "distance": 100
  }
 ],
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_307BD3F5_3B03_4FBC_41C7_644CF74C11BE_0_HS_5_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -124.26,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 13.16,
   "pitch": -10.68
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "id": "overlay_52AA9482_4845_2CF3_41C6_2CFD57C877B9",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5594B929_485C_E430_41CC_F1A9948F9F22",
   "pitch": -24.58,
   "yaw": 145.46,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.42,
   "distance": 100
  }
 ],
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3078C9C6_3B02_DBDD_4193_AEE4B3F8B162_0_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 145.46,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 17.42,
   "pitch": -24.58
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "id": "overlay_53F8098F_485B_24F0_41CD_D3033CB39E07",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_55942929_485C_E430_41BF_577124D4DD4F",
   "pitch": -5.67,
   "yaw": 60.02,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.01,
   "distance": 50
  }
 ],
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3078C9C6_3B02_DBDD_4193_AEE4B3F8B162_0_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 60.02,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 12.01,
   "pitch": -5.67
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 01c Left"
 }
},
{
 "id": "overlay_528FBF7C_44AB_E67D_41C9_BDF72B923AFE",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5D418B8D_44AE_AE9F_41CD_6CBAF1D8464E",
   "pitch": -12.72,
   "yaw": 63.78,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.35,
   "distance": 50
  }
 ],
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_307BF505_3B03_485C_41A7_6097D0B84928_0_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 63.78,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 20.35,
   "pitch": -12.72
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 01c Left"
 }
},
{
 "id": "overlay_5295DA12_44AD_6985_41C9_6A3D65D25630",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3088473C_3B03_C8AC_41B4_BD208C3DDF9B, this.camera_B20EF2FD_A386_D7DF_41E0_82B65B1B54A3); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5D41CB8D_44AE_AE9F_41AA_54F0C10227DE",
   "pitch": -7.61,
   "yaw": -123.62,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.74,
   "distance": 100
  }
 ],
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_307BF505_3B03_485C_41A7_6097D0B84928_0_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -123.62,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 11.74,
   "pitch": -7.61
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 01c"
 }
},
{
 "id": "overlay_53BC6859_44AF_E987_41D0_3F1315E3AA4C",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5D403B8D_44AE_AE9F_41CB_9AC5773B1528",
   "pitch": -19.6,
   "yaw": 145.13,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 23.16,
   "distance": 50
  }
 ],
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_307BF505_3B03_485C_41A7_6097D0B84928_0_HS_2_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 145.13,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 23.16,
   "pitch": -19.6
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 01c Right-Up"
 }
},
{
 "id": "overlay_58CDE1DD_44FB_BABF_41CD_9A83DF6BF226",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3092BB52_3B03_58F4_419B_7FC04DB4BD7A, this.camera_B228C31E_A386_D65A_41DD_9E846A50ED1B); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_584F8504_44F6_BB8E_419D_DF1038AC59C3",
   "pitch": -31.43,
   "yaw": -38.53,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 22.42,
   "distance": 50
  }
 ],
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_307A515A_3B03_C8F4_41C4_54E6993B1850_0_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -38.53,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 22.42,
   "pitch": -31.43
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 01b Right-Up"
 }
},
{
 "id": "overlay_59F65848_44EA_A986_41C7_B52F14392C35",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_59A88C15_44EB_A98E_41C7_CE0C7FEE2325",
   "pitch": -14.97,
   "yaw": 64.57,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.76,
   "distance": 100
  }
 ],
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_307A515A_3B03_C8F4_41C4_54E6993B1850_0_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 64.57,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 10.76,
   "pitch": -14.97
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 01a"
 }
},
{
 "id": "overlay_52D17BC2_402F_E345_41B2_0B38DD8D3946",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_30791B62_3B03_78D4_41C8_03252B699D1D, this.camera_B2FE52E9_A386_D7E7_419A_17D0E24E2803); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_56AB113B_4032_3F3B_4188_DF6D7F574984",
   "pitch": -11.32,
   "yaw": -166.02,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 23.6,
   "distance": 100
  }
 ],
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3078E86A_3B02_F8D4_41B1_B6E830250620_0_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -166.02,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 23.6,
   "pitch": -11.32
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 01c"
 }
},
{
 "id": "overlay_52DCA895_402E_2DCF_4193_F536A6532CC6",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_56ABD13B_4032_3F3B_419D_FDB52CEAF1F8",
   "pitch": -5.1,
   "yaw": 176.21,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.81,
   "distance": 50
  }
 ],
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3078E86A_3B02_F8D4_41B1_B6E830250620_0_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 176.21,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 13.81,
   "pitch": -5.1
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 01c Left-Up"
 }
},
{
 "id": "overlay_2ABB88EB_3F7D_333F_41C9_AE365D9815D4",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_253023AC_3F43_1539_41CC_B6F91CCC40DC",
   "pitch": -10.78,
   "yaw": 167.25,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.92,
   "distance": 100
  }
 ],
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30796AA1_3B03_5857_41C3_400381D47B0A_0_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 167.25,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 12.92,
   "pitch": -10.78
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 01c"
 }
},
{
 "id": "overlay_2945C527_3F43_FD37_41C1_55760DC96BEA",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_23092C42_3F44_F369_41A3_B2CED7705BFD",
   "pitch": -19.24,
   "yaw": -68.53,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 22.74,
   "distance": 50
  }
 ],
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30796AA1_3B03_5857_41C3_400381D47B0A_0_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -68.53,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 22.74,
   "pitch": -19.24
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 01c Left-Up"
 }
},
{
 "id": "overlay_261032D3_3F5D_176E_419F_8A70D9CA0419",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_26495AC8_3F5D_1779_41A4_6AD4D50B2424",
   "pitch": -35.55,
   "yaw": -87.32,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 23.36,
   "distance": 50
  }
 ],
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30796AA1_3B03_5857_41C3_400381D47B0A_0_HS_4_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -87.32,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 23.36,
   "pitch": -35.55
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 01a Left-UP"
 }
},
{
 "id": "overlay_5726FF5C_44AE_E7BE_41BA_104AEB871EDC",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5C640073_44B6_998B_41B9_8ED8842FA01B",
   "pitch": -4.26,
   "yaw": 45.13,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.4,
   "distance": 100
  }
 ],
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30795FD8_3B03_D7F4_41A1_C9184964EF98_0_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 45.13,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 13.4,
   "pitch": -4.26
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 01c"
 }
},
{
 "id": "overlay_5756143C_44BF_B9FE_41BA_CA7A35960503",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5C648073_44B6_998B_41A2_5C66EC6A2B7A",
   "pitch": -13.19,
   "yaw": -160.37,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 19.96,
   "distance": 50
  }
 ],
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30795FD8_3B03_D7F4_41A1_C9184964EF98_0_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -160.37,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 19.96,
   "pitch": -13.19
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 01c Left"
 }
},
{
 "id": "overlay_2AF1BD04_3F43_32E9_41A8_8B7057BF532E",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_27F461EE_3F45_1539_41C0_7700BB73BDA6",
   "pitch": -8.55,
   "yaw": -13.47,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.14,
   "distance": 100
  }
 ],
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30791B62_3B03_78D4_41C8_03252B699D1D_0_HS_2_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -13.47,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 17.14,
   "pitch": -8.55
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 01c"
 }
},
{
 "id": "overlay_23FFE5B6_3FC3_1D29_41CB_C7A1467FFB11",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2190C829_3FC4_F33B_41CD_6FBF6F6C97ED",
   "pitch": -15.09,
   "yaw": -138.36,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.21,
   "distance": 50
  }
 ],
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30791B62_3B03_78D4_41C8_03252B699D1D_0_HS_3_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -138.36,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 17.21,
   "pitch": -15.09
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 01c Left-Up"
 }
},
{
 "id": "overlay_5213382E_4012_6CDA_41C3_53F883293E72",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_58BBB834_4032_6CCD_41A0_F5BC33B7BFA5",
   "pitch": -9.18,
   "yaw": 53.31,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.7,
   "distance": 100
  }
 ],
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30791B62_3B03_78D4_41C8_03252B699D1D_0_HS_4_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 53.31,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 16.7,
   "pitch": -9.18
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 01c"
 }
},
{
 "id": "overlay_531CAFB4_4036_23CE_41CD_827EEB31CD74",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_58BB1835_4032_6CCF_41C7_BC8D850AE9D3",
   "pitch": -8.37,
   "yaw": 77.4,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.25,
   "distance": 50
  }
 ],
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30791B62_3B03_78D4_41C8_03252B699D1D_0_HS_6_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 77.4,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 13.25,
   "pitch": -8.37
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 01b Right"
 }
},
{
 "id": "overlay_240C7CA1_3FCD_132B_41CF_3A85A037903B",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_20EF50D6_3FDD_1316_41A9_D5BC8AB69B80",
   "pitch": -3.69,
   "yaw": 59.9,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.76,
   "distance": 50
  }
 ],
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3085FECD_3B02_B9EF_41C9_7D50EF406B59_0_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 59.9,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.76,
   "pitch": -3.69
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 01c Right"
 }
},
{
 "id": "overlay_24F8608A_3FCF_13F9_41C5_1DC2724BE127",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_30791B62_3B03_78D4_41C8_03252B699D1D, this.camera_B2D092CC_A386_D63D_41D6_AD16BD28A38B); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_20EFB0D6_3FDD_1316_41C1_41AC6452A201",
   "pitch": -9.59,
   "yaw": 42.7,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.65,
   "distance": 50
  }
 ],
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3085FECD_3B02_B9EF_41C9_7D50EF406B59_0_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 42.7,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 20.65,
   "pitch": -9.59
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 01c Left-Up"
 }
},
{
 "id": "overlay_2401D053_3FCF_F36F_4199_6572F8B601AF",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_20EE00D6_3FDD_1316_41C8_F147ED91CD48",
   "pitch": -2.76,
   "yaw": -104.18,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.32,
   "distance": 50
  }
 ],
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3085FECD_3B02_B9EF_41C9_7D50EF406B59_0_HS_2_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -104.18,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.32,
   "pitch": -2.76
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 01c Left-Up"
 }
},
{
 "id": "overlay_233F88E7_3FC5_F337_413E_6893EFF87588",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_20EE50D6_3FDD_1316_41C3_2FD665145670",
   "pitch": -2.19,
   "yaw": -97.73,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.18,
   "distance": 100
  }
 ],
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3085FECD_3B02_B9EF_41C9_7D50EF406B59_0_HS_3_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -97.73,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.18,
   "pitch": -2.19
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 01c"
 }
},
{
 "id": "overlay_22DF43D9_3FC7_151B_41C4_15E02952C6BC",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_20EEA0D6_3FDD_1316_41CA_829B05A2DB61",
   "pitch": -2.73,
   "yaw": -91.1,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.18,
   "distance": 50
  }
 ],
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3085FECD_3B02_B9EF_41C9_7D50EF406B59_0_HS_4_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -91.1,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 11.18,
   "pitch": -2.73
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 01c Right-Up"
 }
},
{
 "id": "overlay_5C50E3CF_484B_E470_41CD_C169430C939F",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_511B4F13_484B_5C10_41BA_23EB7BD06E53",
   "pitch": -34.85,
   "yaw": -163.35,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.98,
   "distance": 100
  }
 ],
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3093F939_3B03_F8B4_41A3_D11ED150C5EE_0_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -163.35,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 16.98,
   "pitch": -34.85
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "id": "overlay_5D05AE02_487B_DFF0_4196_5F8049153DE0",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_54F71FB0_487C_FC10_41C1_490762619ABB",
   "pitch": -10.23,
   "yaw": 64.1,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.97,
   "distance": 100
  }
 ],
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3093F939_3B03_F8B4_41A3_D11ED150C5EE_0_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 64.1,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 10.97,
   "pitch": -10.23
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "id": "overlay_2C3DF571_3F43_7D2B_41CF_9DEE3A87CE26",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_283D3A50_3F43_1769_41C6_823C3D16CCBA",
   "pitch": -7.51,
   "yaw": 9.66,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.19,
   "distance": 100
  }
 ],
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3092CC81_3B03_7854_41C3_E9207A33602F_0_HS_3_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 9.66,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 15.19,
   "pitch": -7.51
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 01c"
 }
},
{
 "id": "overlay_2A15A742_3F45_1D69_41CD_1B650D94BA1D",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2A57326C_3F45_1739_4199_7A213F3111C7",
   "pitch": -10.86,
   "yaw": 118.11,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.35,
   "distance": 100
  }
 ],
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3092CC81_3B03_7854_41C3_E9207A33602F_0_HS_6_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 118.11,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 16.35,
   "pitch": -10.86
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 01c"
 }
},
{
 "id": "overlay_277DB4C7_3F4F_7377_41C2_2D53B7FE87BE",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_24B4EF7E_3F4D_2D19_41CF_7FCBF50543EC",
   "pitch": -14.87,
   "yaw": -135.55,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.81,
   "distance": 50
  }
 ],
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3092CC81_3B03_7854_41C3_E9207A33602F_0_HS_8_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -135.55,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.81,
   "pitch": -14.87
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 01a Left-UP"
 }
},
{
 "id": "overlay_53A4AF9A_44AB_6685_414C_3F85D66DBEE8",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5DA14308_4496_9F86_41CC_C2E7BDABD770",
   "pitch": -0.96,
   "yaw": -31.21,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.95,
   "distance": 100
  }
 ],
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30790F3E_3B03_B8AC_41A5_E2DFF4789AB7_0_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -31.21,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 11.95,
   "pitch": -0.96
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 01c"
 }
},
{
 "id": "overlay_537E396A_44AA_EB85_4190_A0447FCAD94C",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5DA1A308_4496_9F86_41BB_39F4991FC9E3",
   "pitch": -1.12,
   "yaw": -71.9,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.98,
   "distance": 50
  }
 ],
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30790F3E_3B03_B8AC_41A5_E2DFF4789AB7_0_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -71.9,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 11.98,
   "pitch": -1.12
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 01c Left"
 }
},
{
 "id": "overlay_58564AEA_44F7_EE85_417C_08AA59BEB9DE",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_307A515A_3B03_C8F4_41C4_54E6993B1850, this.camera_B2DAA2B7_A386_D66A_41E2_F2C5078DFD0A); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5B922FD5_4495_668F_419A_94A21CCD56CF",
   "pitch": -15.7,
   "yaw": -159.63,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.5,
   "distance": 100
  }
 ],
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_307BE642_3B03_48D5_41CD_0BD101057A2C_0_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -159.63,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 20.5,
   "pitch": -15.7
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "id": "overlay_5592EC4A_4012_255A_41C1_272AFAD86A27",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_309FD2D2_3B03_49F5_4146_5E15829C7F3C, this.camera_B2EC92DB_A386_D7DB_41D3_5917A0C95389); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_55CC4E35_4017_E4CF_41C4_35869E0CAA95",
   "pitch": -8.91,
   "yaw": 27.59,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.13,
   "distance": 100
  }
 ],
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3097F933_3B03_D8B4_41C5_01A06E7961C0_0_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 27.59,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 15.13,
   "pitch": -8.91
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 01c"
 }
},
{
 "id": "overlay_56402ED1_4016_6546_41CD_43BDC7DB0C59",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_55CC6E35_4017_E4CF_41CA_46C177673124",
   "pitch": -9.29,
   "yaw": 59.46,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.12,
   "distance": 50
  }
 ],
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3097F933_3B03_D8B4_41C5_01A06E7961C0_0_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 59.46,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 15.12,
   "pitch": -9.29
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 01c Right-Up"
 }
},
{
 "id": "overlay_56CB255B_401E_677A_41B0_751FCDB10574",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5A24357C_4016_273E_41CA_A58D5A44A53F",
   "pitch": -15.7,
   "yaw": -161.02,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.51,
   "distance": 100
  }
 ],
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3097F933_3B03_D8B4_41C5_01A06E7961C0_0_HS_2_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -161.02,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 17.51,
   "pitch": -15.7
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 01c"
 }
},
{
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "id": "Container_22BBC2F4_3075_D173_41B4_71F7A3560C34",
 "backgroundColorDirection": "vertical",
 "width": 366,
 "shadowColor": "#000000",
 "left": "0%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "shadowBlurRadius": 7,
 "class": "Container",
 "minHeight": 1,
 "gap": 10,
 "scrollBarWidth": 10,
 "shadowSpread": 1,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.8,
 "layout": "absolute",
 "height": 78,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "top": 2,
 "minWidth": 1,
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "propagateClick": true,
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "paddingTop": 0,
 "shadowHorizontalLength": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "shadow": true,
 "shadowVerticalLength": 0,
 "data": {
  "name": "white block"
 }
},
{
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "id": "Container_22BBD2F4_3075_D173_41B4_8504C593E6BF",
 "backgroundColorDirection": "vertical",
 "width": 366,
 "shadowColor": "#000000",
 "left": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "shadowBlurRadius": 7,
 "class": "Container",
 "minHeight": 1,
 "gap": 10,
 "scrollBarWidth": 10,
 "shadowSpread": 1,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.5,
 "layout": "absolute",
 "height": 46,
 "backgroundColor": [
  "#000000"
 ],
 "top": 86,
 "minWidth": 1,
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "propagateClick": true,
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "paddingTop": 0,
 "shadowHorizontalLength": 0,
 "backgroundColorRatios": [
  0.01
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "shadow": true,
 "shadowVerticalLength": 0,
 "data": {
  "name": "blue block"
 }
},
{
 "fontFamily": "Oswald",
 "borderSize": 0,
 "id": "Label_22BB22F4_3075_D173_41BB_3ACDC6CCCC83",
 "left": 10,
 "width": 391,
 "fontColor": "#000000",
 "paddingRight": 0,
 "paddingLeft": 0,
 "text": "THE HERITAGE PALACE",
 "horizontalAlign": "left",
 "minHeight": 1,
 "class": "Label",
 "backgroundOpacity": 0,
 "top": 0,
 "height": 75,
 "minWidth": 1,
 "borderRadius": 0,
 "fontSize": "37px",
 "paddingBottom": 0,
 "propagateClick": true,
 "fontStyle": "italic",
 "verticalAlign": "middle",
 "paddingTop": 0,
 "data": {
  "name": "text 1"
 },
 "shadow": false,
 "fontWeight": "bold",
 "textDecoration": "none"
},
{
 "fontFamily": "Oswald",
 "borderSize": 0,
 "textShadowVerticalLength": 0,
 "id": "Label_22BB32F4_3075_D173_4191_C8B45B85DEB8",
 "left": 12,
 "width": 385,
 "fontColor": "#FFFFFF",
 "paddingRight": 0,
 "paddingLeft": 0,
 "text": "SUKOHARJO, CENTRAL JAVA, INDONESIA",
 "horizontalAlign": "left",
 "minHeight": 1,
 "class": "Label",
 "textShadowColor": "#000000",
 "backgroundOpacity": 0,
 "top": 90,
 "height": 44,
 "minWidth": 1,
 "borderRadius": 0,
 "fontSize": "23px",
 "paddingBottom": 0,
 "textShadowBlurRadius": 10,
 "propagateClick": true,
 "fontStyle": "italic",
 "verticalAlign": "top",
 "paddingTop": 0,
 "data": {
  "name": "text 2"
 },
 "textShadowOpacity": 1,
 "shadow": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "textShadowHorizontalLength": 0
},
{
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "width": 110,
 "right": "0%",
 "paddingRight": 0,
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "gap": 10,
 "layout": "horizontal",
 "class": "Container",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "top": "0%",
 "height": 110,
 "minWidth": 1,
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "propagateClick": true,
 "scrollBarOpacity": 0.5,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "shadow": false,
 "data": {
  "name": "button menu sup"
 }
},
{
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "right": "0%",
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "width": "91.304%",
 "class": "Container",
 "minHeight": 1,
 "gap": 3,
 "layout": "vertical",
 "scrollBarMargin": 2,
 "bottom": "0%",
 "contentOpaque": false,
 "height": "85.959%",
 "minWidth": 1,
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "visible": false,
 "overflow": "scroll",
 "shadow": false,
 "data": {
  "name": "-button set"
 }
},
{
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "id": "Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
 "left": "0%",
 "width": 66,
 "paddingRight": 0,
 "children": [
  "this.Container_21F34780_3014_BF93_41A2_9BF700588BEC",
  "this.IconButton_223F0171_3014_B375_41C1_61063C3D73B3"
 ],
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "class": "Container",
 "minHeight": 1,
 "layout": "absolute",
 "top": "0%",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "contentOpaque": false,
 "height": "100%",
 "minWidth": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": true,
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "visible": false,
 "overflow": "scroll",
 "shadow": false,
 "data": {
  "name": "- COLLAPSE"
 }
},
{
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "id": "Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD",
 "width": 330,
 "right": 0,
 "paddingRight": 0,
 "children": [
  "this.Container_4521E58D_74A8_853A_418A_CF7FF914DD83",
  "this.IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882"
 ],
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "class": "Container",
 "minHeight": 1,
 "layout": "absolute",
 "top": "0%",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "contentOpaque": false,
 "height": "100%",
 "minWidth": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "shadow": false,
 "data": {
  "name": "- EXPANDED"
 }
},
{
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "15%",
 "right": "15%",
 "paddingRight": 0,
 "shadowColor": "#000000",
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "shadowBlurRadius": 25,
 "class": "Container",
 "minHeight": 1,
 "gap": 10,
 "shadowSpread": 1,
 "scrollBarMargin": 2,
 "bottom": "10%",
 "backgroundOpacity": 1,
 "scrollBarWidth": 10,
 "top": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "layout": "horizontal",
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "paddingTop": 0,
 "shadowHorizontalLength": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "shadow": true,
 "shadowVerticalLength": 0,
 "data": {
  "name": "Global"
 }
},
{
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "15%",
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "right": "15%",
 "paddingRight": 20,
 "paddingLeft": 0,
 "horizontalAlign": "right",
 "class": "Container",
 "minHeight": 1,
 "gap": 10,
 "scrollBarWidth": 10,
 "top": "10%",
 "scrollBarMargin": 2,
 "bottom": "80%",
 "backgroundOpacity": 0,
 "layout": "vertical",
 "contentOpaque": false,
 "minWidth": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "paddingTop": 20,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "shadow": false,
 "data": {
  "name": "Container X global"
 }
},
{
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "right": "15%",
 "paddingRight": 0,
 "shadowColor": "#000000",
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "shadowBlurRadius": 25,
 "class": "Container",
 "minHeight": 1,
 "gap": 10,
 "shadowSpread": 1,
 "scrollBarMargin": 2,
 "bottom": "10%",
 "backgroundOpacity": 1,
 "scrollBarWidth": 10,
 "top": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "layout": "absolute",
 "propagateClick": true,
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "paddingTop": 0,
 "shadowHorizontalLength": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "shadow": true,
 "shadowVerticalLength": 0,
 "data": {
  "name": "Global"
 }
},
{
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "15%",
 "right": "15%",
 "paddingRight": 0,
 "shadowColor": "#000000",
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "shadowBlurRadius": 25,
 "class": "Container",
 "minHeight": 1,
 "gap": 10,
 "shadowSpread": 1,
 "scrollBarMargin": 2,
 "bottom": "10%",
 "backgroundOpacity": 1,
 "scrollBarWidth": 10,
 "top": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "layout": "horizontal",
 "propagateClick": true,
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "paddingTop": 0,
 "shadowHorizontalLength": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "shadow": true,
 "shadowVerticalLength": 0,
 "data": {
  "name": "Global"
 }
},
{
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "15%",
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "right": "15%",
 "paddingRight": 20,
 "paddingLeft": 0,
 "horizontalAlign": "right",
 "class": "Container",
 "minHeight": 1,
 "gap": 10,
 "scrollBarWidth": 10,
 "top": "10%",
 "scrollBarMargin": 2,
 "bottom": "80%",
 "backgroundOpacity": 0,
 "layout": "vertical",
 "contentOpaque": false,
 "minWidth": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": true,
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "paddingTop": 20,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "shadow": false,
 "data": {
  "name": "Container X global"
 }
},
{
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "children": [
  "this.MapViewer",
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C"
 ],
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "right": "15%",
 "paddingRight": 0,
 "shadowColor": "#000000",
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "shadowBlurRadius": 25,
 "class": "Container",
 "minHeight": 1,
 "gap": 10,
 "shadowSpread": 1,
 "scrollBarMargin": 2,
 "bottom": "10%",
 "backgroundOpacity": 1,
 "scrollBarWidth": 10,
 "top": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "layout": "absolute",
 "propagateClick": true,
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "paddingTop": 0,
 "shadowHorizontalLength": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "shadow": true,
 "shadowVerticalLength": 0,
 "data": {
  "name": "Global"
 }
},
{
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "right": "15%",
 "paddingRight": 0,
 "shadowColor": "#000000",
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "shadowBlurRadius": 25,
 "class": "Container",
 "minHeight": 1,
 "gap": 10,
 "shadowSpread": 1,
 "scrollBarMargin": 2,
 "bottom": "10%",
 "backgroundOpacity": 1,
 "scrollBarWidth": 10,
 "top": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "layout": "vertical",
 "propagateClick": true,
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "paddingTop": 0,
 "shadowHorizontalLength": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "shadow": true,
 "shadowVerticalLength": 0,
 "data": {
  "name": "Global"
 }
},
{
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "children": [
  "this.Container_1E19E23C_57F1_802D_41D1_9B8B4D1D2BBD",
  "this.Container_1E19D23C_57F1_802D_41B0_92437DF80B82"
 ],
 "id": "Container_1E19923C_57F1_802D_41C4_18DBE75E48C1",
 "left": "15%",
 "right": "15%",
 "paddingRight": 0,
 "shadowColor": "#000000",
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "shadowBlurRadius": 25,
 "class": "Container",
 "minHeight": 1,
 "gap": 10,
 "shadowSpread": 1,
 "scrollBarMargin": 2,
 "bottom": "10%",
 "backgroundOpacity": 1,
 "scrollBarWidth": 10,
 "top": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "layout": "horizontal",
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "paddingTop": 0,
 "shadowHorizontalLength": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "shadow": true,
 "shadowVerticalLength": 0,
 "data": {
  "name": "Global"
 }
},
{
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "id": "Container_1E18A23C_57F1_802D_41B9_D08FA26C7F4C",
 "left": "15%",
 "children": [
  "this.IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF"
 ],
 "right": "15%",
 "paddingRight": 20,
 "paddingLeft": 0,
 "horizontalAlign": "right",
 "class": "Container",
 "minHeight": 1,
 "gap": 10,
 "scrollBarWidth": 10,
 "top": "10%",
 "scrollBarMargin": 2,
 "bottom": "80%",
 "backgroundOpacity": 0,
 "layout": "vertical",
 "contentOpaque": false,
 "minWidth": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "paddingTop": 20,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "shadow": false,
 "data": {
  "name": "Container X global"
 }
},
{
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_307A510B_3B03_C86B_41B9_A9C23E177918_0_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_5DAD783A_4844_E410_41BF_F47863D97F3A",
 "colCount": 4
},
{
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3092BB52_3B03_58F4_419B_7FC04DB4BD7A_0_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_5A24457C_4016_273E_41CD_F498F81B4A41",
 "colCount": 4
},
{
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3092BB52_3B03_58F4_419B_7FC04DB4BD7A_0_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_5A0D97A3_4012_23CA_41C5_643DFA8DBDA3",
 "colCount": 4
},
{
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3092BB52_3B03_58F4_419B_7FC04DB4BD7A_0_HS_2_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_584F4504_44F6_BB8E_41C7_EB5BDA1F191B",
 "colCount": 4
},
{
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3078B71E_3B02_C86D_41B7_70A00F950FF0_0_HS_2_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_5A0DC7A3_4012_23CA_41C6_5CC1357B521E",
 "colCount": 4
},
{
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3078B71E_3B02_C86D_41B7_70A00F950FF0_0_HS_3_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_5A0C57A3_4012_23CA_41C3_78F707E0B571",
 "colCount": 4
},
{
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3078B71E_3B02_C86D_41B7_70A00F950FF0_0_HS_4_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_524264C8_487B_EC71_41C3_0C49A1ABAD34",
 "colCount": 4
},
{
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3787367E_3B02_C8AC_41CB_776E387D818B_0_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_58B77838_4032_6CC5_41CB_B9F1A3C144D6",
 "colCount": 4
},
{
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3787367E_3B02_C8AC_41CB_776E387D818B_0_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_5CED0103_4845_65F1_41C1_4D2ACDC41E54",
 "colCount": 4
},
{
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3093310B_3B02_C86B_41C3_C2951B951ED9_0_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_56399D37_4496_EB8A_41C3_DAFFF2E328CF",
 "colCount": 4
},
{
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3093310B_3B02_C86B_41C3_C2951B951ED9_0_HS_2_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_578A3366_44AA_BF8D_41CD_7FB9C29578D3",
 "colCount": 4
},
{
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_30923FA1_3B02_F857_41BA_FD481F5C0F86_0_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_58B7C838_4032_6CC5_41C1_128D773AAC3F",
 "colCount": 4
},
{
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_30923FA1_3B02_F857_41BA_FD481F5C0F86_0_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_58B79838_4032_6CC5_41A9_3E1DB791313B",
 "colCount": 4
},
{
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3096786D_3B03_D8AF_4172_8E6C661ABF5B_0_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_5B288B2E_54E6_9AE9_41B6_719A98765654",
 "colCount": 4
},
{
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3096786D_3B03_D8AF_4172_8E6C661ABF5B_0_HS_2_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_5B283B2E_54E6_9AE9_41CB_F6F7B3BE7CAA",
 "colCount": 4
},
{
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_30792973_3B03_58B4_4199_8A731C61F367_0_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_22345D28_3FDF_2D39_41C5_B7DF11EF3047",
 "colCount": 4
},
{
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_30792973_3B03_58B4_4199_8A731C61F367_0_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_25D64D15_3F4F_12EB_41CA_99C80C4C67DA",
 "colCount": 4
},
{
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_30792973_3B03_58B4_4199_8A731C61F367_0_HS_2_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_25D79D15_3F4F_12EB_41B1_7C6196B779F7",
 "colCount": 4
},
{
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3078AA42_3B02_B8D5_41CC_21946806B3DC_0_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_5CEDA103_4845_65F1_41CE_E8A2020287CF",
 "colCount": 4
},
{
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3078AA42_3B02_B8D5_41CC_21946806B3DC_0_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_5CEC3103_4845_65F1_41B3_258ABA65BDBF",
 "colCount": 4
},
{
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_309FD2D2_3B03_49F5_4146_5E15829C7F3C_0_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_50AB229C_401E_5DFD_41C8_0D13425784F2",
 "colCount": 4
},
{
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_309FD2D2_3B03_49F5_4146_5E15829C7F3C_0_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_50ABE29C_401E_5DFD_41CD_FAC286B831FD",
 "colCount": 4
},
{
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_309FD2D2_3B03_49F5_4146_5E15829C7F3C_0_HS_3_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_55CC3E35_4017_E4CF_41CB_C04E7721A600",
 "colCount": 4
},
{
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_309DF23B_3B03_48AB_41C5_2FF83AB16BD2_0_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_5386E6D3_4016_654A_41C8_249485E367D6",
 "colCount": 4
},
{
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_309DF23B_3B03_48AB_41C5_2FF83AB16BD2_0_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_58B66837_4032_6CCB_41C5_5E422E34D425",
 "colCount": 4
},
{
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3088473C_3B03_C8AC_41B4_BD208C3DDF9B_0_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_5B9C8FD7_4495_668B_41A8_7DEC091EEE31",
 "colCount": 4
},
{
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3088473C_3B03_C8AC_41B4_BD208C3DDF9B_0_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_5C636073_44B6_998B_41CC_5103E921D011",
 "colCount": 4
},
{
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_307A614B_3B03_C8D4_41BF_536BCB4B0653_0_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_511A1F12_484B_5C10_4190_DC52CAC6843D",
 "colCount": 4
},
{
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_307A614B_3B03_C8D4_41BF_536BCB4B0653_0_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_511BAF12_484B_5C10_41A3_569CFB0C6D6C",
 "colCount": 4
},
{
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_307A614B_3B03_C8D4_41BF_536BCB4B0653_0_HS_2_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_511BFF12_484B_5C10_41BC_40BF0F5D49E7",
 "colCount": 4
},
{
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_307A614B_3B03_C8D4_41BF_536BCB4B0653_0_HS_3_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_511B0F12_484B_5C10_41A4_F3007737AE2F",
 "colCount": 4
},
{
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_309572FD_3B03_49AF_41C3_53D8589DC146_0_HS_2_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_2E2A912C_3F4C_F539_41CB_6A8C6833BA24",
 "colCount": 4
},
{
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_309572FD_3B03_49AF_41C3_53D8589DC146_0_HS_4_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_2658354F_3F43_1D77_41C0_EBC3118D1257",
 "colCount": 4
},
{
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_309572FD_3B03_49AF_41C3_53D8589DC146_0_HS_5_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_5D1A1C0F_4495_A99B_4194_CE2F537E8E6C",
 "colCount": 4
},
{
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_309B7277_3B02_C8BB_415F_FC432B308E1B_0_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_55939929_485C_E430_41CF_2D1CEB1EAF48",
 "colCount": 4
},
{
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_309B7277_3B02_C8BB_415F_FC432B308E1B_0_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_55930929_485C_E430_41C3_2D06C72E79F8",
 "colCount": 4
},
{
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_307BD3F5_3B03_4FBC_41C7_644CF74C11BE_0_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_230E7C43_3F44_F36F_41AB_72EFF0A74BA6",
 "colCount": 4
},
{
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_307BD3F5_3B03_4FBC_41C7_644CF74C11BE_0_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_230E1C43_3F44_F36F_41B2_F898390F2DD8",
 "colCount": 4
},
{
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_307BD3F5_3B03_4FBC_41C7_644CF74C11BE_0_HS_4_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_231F14DD_3F3D_131B_41C0_A7696E7D8CF4",
 "colCount": 4
},
{
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_307BD3F5_3B03_4FBC_41C7_644CF74C11BE_0_HS_5_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_2193E829_3FC4_F33B_41B5_89439C351569",
 "colCount": 4
},
{
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3078C9C6_3B02_DBDD_4193_AEE4B3F8B162_0_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_5594B929_485C_E430_41CC_F1A9948F9F22",
 "colCount": 4
},
{
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3078C9C6_3B02_DBDD_4193_AEE4B3F8B162_0_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_55942929_485C_E430_41BF_577124D4DD4F",
 "colCount": 4
},
{
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_307BF505_3B03_485C_41A7_6097D0B84928_0_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_5D418B8D_44AE_AE9F_41CD_6CBAF1D8464E",
 "colCount": 4
},
{
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_307BF505_3B03_485C_41A7_6097D0B84928_0_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_5D41CB8D_44AE_AE9F_41AA_54F0C10227DE",
 "colCount": 4
},
{
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_307BF505_3B03_485C_41A7_6097D0B84928_0_HS_2_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_5D403B8D_44AE_AE9F_41CB_9AC5773B1528",
 "colCount": 4
},
{
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_307A515A_3B03_C8F4_41C4_54E6993B1850_0_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_584F8504_44F6_BB8E_419D_DF1038AC59C3",
 "colCount": 4
},
{
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_307A515A_3B03_C8F4_41C4_54E6993B1850_0_HS_2_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_59A88C15_44EB_A98E_41C7_CE0C7FEE2325",
 "colCount": 4
},
{
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3078E86A_3B02_F8D4_41B1_B6E830250620_0_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_56AB113B_4032_3F3B_4188_DF6D7F574984",
 "colCount": 4
},
{
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3078E86A_3B02_F8D4_41B1_B6E830250620_0_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_56ABD13B_4032_3F3B_419D_FDB52CEAF1F8",
 "colCount": 4
},
{
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_30796AA1_3B03_5857_41C3_400381D47B0A_0_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_253023AC_3F43_1539_41CC_B6F91CCC40DC",
 "colCount": 4
},
{
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_30796AA1_3B03_5857_41C3_400381D47B0A_0_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_23092C42_3F44_F369_41A3_B2CED7705BFD",
 "colCount": 4
},
{
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_30796AA1_3B03_5857_41C3_400381D47B0A_0_HS_4_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_26495AC8_3F5D_1779_41A4_6AD4D50B2424",
 "colCount": 4
},
{
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_30795FD8_3B03_D7F4_41A1_C9184964EF98_0_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_5C640073_44B6_998B_41B9_8ED8842FA01B",
 "colCount": 4
},
{
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_30795FD8_3B03_D7F4_41A1_C9184964EF98_0_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_5C648073_44B6_998B_41A2_5C66EC6A2B7A",
 "colCount": 4
},
{
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_30791B62_3B03_78D4_41C8_03252B699D1D_0_HS_2_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_27F461EE_3F45_1539_41C0_7700BB73BDA6",
 "colCount": 4
},
{
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_30791B62_3B03_78D4_41C8_03252B699D1D_0_HS_3_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_2190C829_3FC4_F33B_41CD_6FBF6F6C97ED",
 "colCount": 4
},
{
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_30791B62_3B03_78D4_41C8_03252B699D1D_0_HS_4_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_58BBB834_4032_6CCD_41A0_F5BC33B7BFA5",
 "colCount": 4
},
{
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_30791B62_3B03_78D4_41C8_03252B699D1D_0_HS_6_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_58BB1835_4032_6CCF_41C7_BC8D850AE9D3",
 "colCount": 4
},
{
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3085FECD_3B02_B9EF_41C9_7D50EF406B59_0_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_20EF50D6_3FDD_1316_41A9_D5BC8AB69B80",
 "colCount": 4
},
{
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3085FECD_3B02_B9EF_41C9_7D50EF406B59_0_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_20EFB0D6_3FDD_1316_41C1_41AC6452A201",
 "colCount": 4
},
{
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3085FECD_3B02_B9EF_41C9_7D50EF406B59_0_HS_2_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_20EE00D6_3FDD_1316_41C8_F147ED91CD48",
 "colCount": 4
},
{
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3085FECD_3B02_B9EF_41C9_7D50EF406B59_0_HS_3_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_20EE50D6_3FDD_1316_41C3_2FD665145670",
 "colCount": 4
},
{
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3085FECD_3B02_B9EF_41C9_7D50EF406B59_0_HS_4_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_20EEA0D6_3FDD_1316_41CA_829B05A2DB61",
 "colCount": 4
},
{
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3093F939_3B03_F8B4_41A3_D11ED150C5EE_0_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_511B4F13_484B_5C10_41BA_23EB7BD06E53",
 "colCount": 4
},
{
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3093F939_3B03_F8B4_41A3_D11ED150C5EE_0_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_54F71FB0_487C_FC10_41C1_490762619ABB",
 "colCount": 4
},
{
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3092CC81_3B03_7854_41C3_E9207A33602F_0_HS_3_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_283D3A50_3F43_1769_41C6_823C3D16CCBA",
 "colCount": 4
},
{
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3092CC81_3B03_7854_41C3_E9207A33602F_0_HS_6_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_2A57326C_3F45_1739_4199_7A213F3111C7",
 "colCount": 4
},
{
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3092CC81_3B03_7854_41C3_E9207A33602F_0_HS_8_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_24B4EF7E_3F4D_2D19_41CF_7FCBF50543EC",
 "colCount": 4
},
{
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_30790F3E_3B03_B8AC_41A5_E2DFF4789AB7_0_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_5DA14308_4496_9F86_41CC_C2E7BDABD770",
 "colCount": 4
},
{
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_30790F3E_3B03_B8AC_41A5_E2DFF4789AB7_0_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_5DA1A308_4496_9F86_41BB_39F4991FC9E3",
 "colCount": 4
},
{
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_307BE642_3B03_48D5_41CD_0BD101057A2C_0_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_5B922FD5_4495_668F_419A_94A21CCD56CF",
 "colCount": 4
},
{
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3097F933_3B03_D8B4_41C5_01A06E7961C0_0_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_55CC4E35_4017_E4CF_41C4_35869E0CAA95",
 "colCount": 4
},
{
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3097F933_3B03_D8B4_41C5_01A06E7961C0_0_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_55CC6E35_4017_E4CF_41CA_46C177673124",
 "colCount": 4
},
{
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3097F933_3B03_D8B4_41C5_01A06E7961C0_0_HS_2_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_5A24357C_4016_273E_41CA_A58D5A44A53F",
 "colCount": 4
},
{
 "borderSize": 0,
 "maxWidth": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "maxHeight": 60,
 "width": 60,
 "paddingRight": 0,
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "height": 60,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "minWidth": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": true,
 "verticalAlign": "middle",
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "paddingTop": 0,
 "mode": "toggle",
 "transparencyActive": true,
 "data": {
  "name": "image button menu"
 },
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "shadow": false,
 "cursor": "hand"
},
{
 "borderSize": 0,
 "maxWidth": 58,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "maxHeight": 58,
 "width": 58,
 "paddingRight": 0,
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "height": 58,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "minWidth": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": true,
 "verticalAlign": "middle",
 "click": "this.shareTwitter(window.location.href)",
 "paddingTop": 0,
 "mode": "push",
 "transparencyActive": true,
 "data": {
  "name": "IconButton TWITTER"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "borderSize": 0,
 "maxWidth": 58,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "maxHeight": 58,
 "width": 58,
 "paddingRight": 0,
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "height": 58,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "minWidth": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": true,
 "verticalAlign": "middle",
 "click": "this.shareFacebook(window.location.href)",
 "paddingTop": 0,
 "mode": "push",
 "transparencyActive": true,
 "data": {
  "name": "IconButton FB"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "id": "Container_21F34780_3014_BF93_41A2_9BF700588BEC",
 "backgroundColorDirection": "vertical",
 "width": 36,
 "left": "0%",
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 10,
 "layout": "absolute",
 "class": "Container",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.4,
 "top": "0%",
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "propagateClick": true,
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "height": "100%",
 "paddingTop": 0,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "shadow": false,
 "data": {
  "name": "Container black"
 }
},
{
 "borderSize": 0,
 "maxWidth": 80,
 "id": "IconButton_223F0171_3014_B375_41C1_61063C3D73B3",
 "left": 10,
 "maxHeight": 80,
 "width": 50,
 "paddingRight": 0,
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "class": "IconButton",
 "minHeight": 1,
 "top": "40%",
 "bottom": "40%",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3_rollover.png",
 "iconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3.png",
 "minWidth": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": true,
 "verticalAlign": "middle",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, false, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, false, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, true, 0, null, null, false)",
 "paddingTop": 0,
 "mode": "push",
 "transparencyActive": true,
 "data": {
  "name": "IconButton arrow"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "id": "Container_4521E58D_74A8_853A_418A_CF7FF914DD83",
 "backgroundColorDirection": "vertical",
 "children": [
  "this.Container_0B85764A_2D07_4D95_41A5_3AC872515A8C"
 ],
 "left": "0%",
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "width": "90%",
 "minHeight": 1,
 "gap": 10,
 "layout": "absolute",
 "class": "Container",
 "scrollBarMargin": 2,
 "top": "0%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "backgroundOpacity": 0.3,
 "contentOpaque": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "height": "100%",
 "paddingTop": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "shadow": false,
 "data": {
  "name": "Container"
 }
},
{
 "borderSize": 0,
 "maxWidth": 50,
 "id": "IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882",
 "maxHeight": 50,
 "width": 50,
 "right": 9,
 "paddingRight": 0,
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "class": "IconButton",
 "minHeight": 1,
 "top": "40%",
 "bottom": "40%",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882_rollover.png",
 "iconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882.png",
 "minWidth": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": true,
 "verticalAlign": "middle",
 "click": "this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false)",
 "paddingTop": 0,
 "mode": "push",
 "transparencyActive": true,
 "data": {
  "name": "IconButton collapse"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "backgroundColorDirection": "vertical",
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "width": "85%",
 "minHeight": 1,
 "gap": 10,
 "layout": "absolute",
 "class": "Container",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000"
 ],
 "contentOpaque": false,
 "minWidth": 1,
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "shadow": false,
 "data": {
  "name": "-left"
 }
},
{
 "borderSize": 0,
 "scrollBarColor": "#0069A3",
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "backgroundColorDirection": "vertical",
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "paddingRight": 50,
 "scrollBarWidth": 10,
 "paddingLeft": 50,
 "horizontalAlign": "left",
 "width": "50%",
 "minHeight": 1,
 "gap": 0,
 "layout": "vertical",
 "class": "Container",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "minWidth": 460,
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 20,
 "backgroundOpacity": 1,
 "propagateClick": false,
 "scrollBarOpacity": 0.51,
 "verticalAlign": "top",
 "paddingTop": 20,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "shadow": false,
 "data": {
  "name": "-right"
 }
},
{
 "borderSize": 0,
 "maxWidth": 60,
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "maxHeight": 60,
 "width": "25%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "class": "IconButton",
 "minHeight": 50,
 "height": "75%",
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "minWidth": 50,
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "paddingTop": 0,
 "mode": "push",
 "transparencyActive": false,
 "data": {
  "name": "X"
 },
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "shadow": false,
 "cursor": "hand"
},
{
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "backgroundColorDirection": "vertical",
 "children": [
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "width": "100%",
 "minHeight": 1,
 "gap": 10,
 "layout": "absolute",
 "class": "Container",
 "scrollBarMargin": 2,
 "height": 140,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "propagateClick": true,
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "paddingTop": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "shadow": false,
 "data": {
  "name": "header"
 }
},
{
 "scrollBarColor": "#04A3E1",
 "itemLabelFontSize": 16,
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "left": 0,
 "rollOverItemLabelFontColor": "#04A3E1",
 "itemThumbnailScaleMode": "fit_outside",
 "itemHorizontalAlign": "center",
 "itemHeight": 160,
 "itemLabelFontColor": "#666666",
 "width": "100%",
 "paddingLeft": 70,
 "horizontalAlign": "center",
 "itemBackgroundColorDirection": "vertical",
 "class": "ThumbnailGrid",
 "itemPaddingRight": 3,
 "minHeight": 1,
 "gap": 26,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "height": "92%",
 "minWidth": 1,
 "itemLabelGap": 7,
 "borderRadius": 5,
 "itemMinHeight": 50,
 "itemMode": "normal",
 "paddingBottom": 70,
 "itemThumbnailHeight": 125,
 "itemPaddingBottom": 3,
 "verticalAlign": "middle",
 "selectedItemLabelFontColor": "#04A3E1",
 "itemLabelFontStyle": "italic",
 "itemOpacity": 1,
 "itemLabelHorizontalAlign": "center",
 "itemLabelFontFamily": "Oswald",
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "selectedItemThumbnailShadow": true,
 "shadow": false,
 "itemBorderRadius": 0,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemMaxWidth": 1000,
 "borderSize": 0,
 "itemMaxHeight": 1000,
 "selectedItemLabelFontWeight": "bold",
 "itemMinWidth": 50,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "itemThumbnailWidth": 220,
 "paddingRight": 70,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "itemPaddingLeft": 3,
 "scrollBarWidth": 10,
 "itemPaddingTop": 3,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "itemBackgroundColor": [],
 "scrollBarMargin": 2,
 "bottom": -0.2,
 "backgroundOpacity": 0,
 "itemBackgroundColorRatios": [],
 "itemLabelPosition": "bottom",
 "itemVerticalAlign": "top",
 "itemWidth": 220,
 "propagateClick": true,
 "scrollBarOpacity": 0.5,
 "itemLabelTextDecoration": "none",
 "itemThumbnailBorderRadius": 0,
 "scrollBarVisible": "rollOver",
 "itemLabelFontWeight": "normal",
 "paddingTop": 10,
 "data": {
  "name": "ThumbnailList"
 },
 "rollOverItemThumbnailShadow": true,
 "itemThumbnailOpacity": 1,
 "itemThumbnailShadow": false,
 "itemBackgroundOpacity": 0
},
{
 "insetBorder": false,
 "borderSize": 0,
 "scrollEnabled": true,
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen>",
 "minHeight": 1,
 "class": "WebFrame",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "height": "100%",
 "minWidth": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "propagateClick": true,
 "paddingTop": 0,
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "WebFrame"
 },
 "shadow": false
},
{
 "borderSize": 0,
 "maxWidth": 60,
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "maxHeight": 60,
 "width": "25%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "class": "IconButton",
 "minHeight": 50,
 "height": "75%",
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "minWidth": 50,
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "verticalAlign": "middle",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "paddingTop": 0,
 "mode": "push",
 "transparencyActive": false,
 "data": {
  "name": "X"
 },
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "shadow": false,
 "cursor": "hand"
},
{
 "progressBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "id": "MapViewer",
 "progressBorderSize": 0,
 "toolTipFontColor": "#606060",
 "left": 0,
 "transitionMode": "blending",
 "width": "100%",
 "playbackBarBorderColor": "#FFFFFF",
 "transitionDuration": 500,
 "progressBorderRadius": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "paddingLeft": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "class": "ViewerArea",
 "minHeight": 1,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingTop": 4,
 "playbackBarLeft": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderSize": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "toolTipPaddingLeft": 6,
 "playbackBarHeadShadowBlurRadius": 3,
 "height": "99.975%",
 "minWidth": 1,
 "toolTipDisplayTime": 600,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "borderRadius": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 0,
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#FFFFFF",
 "paddingBottom": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipBorderRadius": 3,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "toolTipBorderColor": "#767676",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarRight": 0,
 "shadow": false,
 "progressBarBorderSize": 0,
 "borderSize": 0,
 "toolTipShadowSpread": 0,
 "toolTipOpacity": 1,
 "toolTipShadowBlurRadius": 3,
 "playbackBarProgressBorderSize": 0,
 "toolTipFontSize": 12,
 "toolTipTextShadowColor": "#000000",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "paddingRight": 0,
 "toolTipFontWeight": "normal",
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipShadowColor": "#333333",
 "top": 0,
 "playbackBarProgressOpacity": 1,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarBorderSize": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipFontStyle": "normal",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowOpacity": 1,
 "toolTipFontFamily": "Arial",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBottom": 2,
 "progressBarBackgroundColorDirection": "vertical",
 "paddingTop": 0,
 "playbackBarHeadShadow": true,
 "data": {
  "name": "Floor Plan"
 },
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadShadowVerticalLength": 0
},
{
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "children": [
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "width": "100%",
 "minHeight": 1,
 "gap": 10,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "class": "Container",
 "height": 140,
 "contentOpaque": false,
 "minWidth": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "shadow": false,
 "data": {
  "name": "header"
 }
},
{
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "backgroundColorDirection": "vertical",
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "width": "100%",
 "minHeight": 1,
 "gap": 10,
 "layout": "absolute",
 "class": "Container",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "minWidth": 1,
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "propagateClick": true,
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "paddingTop": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "shadow": false,
 "data": {
  "name": "Container photo"
 }
},
{
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "id": "Container_1E19E23C_57F1_802D_41D1_9B8B4D1D2BBD",
 "backgroundColorDirection": "vertical",
 "children": [
  "this.Image_1E19C23C_57F1_802D_41D1_9DC72DB5C1E1"
 ],
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "width": "55%",
 "minHeight": 1,
 "gap": 10,
 "layout": "absolute",
 "class": "Container",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000"
 ],
 "contentOpaque": false,
 "minWidth": 1,
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "shadow": false,
 "data": {
  "name": "-left"
 }
},
{
 "borderSize": 0,
 "scrollBarColor": "#0069A3",
 "id": "Container_1E19D23C_57F1_802D_41B0_92437DF80B82",
 "backgroundColorDirection": "vertical",
 "children": [
  "this.Container_1E18223C_57F1_802D_41D5_C1ECF1EB519F",
  "this.Container_1E18323C_57F1_802D_41AC_3EB4DE555BBC",
  "this.Container_1E18523C_57F1_802D_41B1_88C86CD9A273"
 ],
 "paddingRight": 60,
 "scrollBarWidth": 10,
 "paddingLeft": 60,
 "horizontalAlign": "left",
 "width": "45%",
 "minHeight": 1,
 "gap": 0,
 "layout": "vertical",
 "class": "Container",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "minWidth": 460,
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 20,
 "backgroundOpacity": 1,
 "propagateClick": false,
 "scrollBarOpacity": 0.51,
 "verticalAlign": "top",
 "paddingTop": 20,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "shadow": false,
 "data": {
  "name": "-right"
 }
},
{
 "borderSize": 0,
 "maxWidth": 60,
 "id": "IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF",
 "maxHeight": 60,
 "width": "25%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "class": "IconButton",
 "minHeight": 50,
 "height": "75%",
 "rollOverIconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF_rollover.jpg",
 "iconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF.jpg",
 "minWidth": 50,
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, false, 0, null, null, false)",
 "paddingTop": 0,
 "mode": "push",
 "transparencyActive": false,
 "data": {
  "name": "X"
 },
 "pressedIconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF_pressed.jpg",
 "shadow": false,
 "cursor": "hand"
},
{
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "id": "Container_0B85764A_2D07_4D95_41A5_3AC872515A8C",
 "backgroundColorDirection": "vertical",
 "children": [
  "this.Image_0435F73B_2D0F_4BF4_4181_65F86A8DAC19",
  "this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE",
  "this.Container_19256A12_2D07_45B5_41AB_E9DE96B2DFF3",
  "this.Container_2A2CB53C_310E_0014_41C3_AB834B10253B",
  "this.Container_159EADDD_31FA_0014_41C8_8A5203EC627B",
  "this.Container_17569D7D_31FA_0015_41C4_CBC688763A8D",
  "this.Container_1758A215_31FA_0014_41B6_9A4A5384548B",
  "this.Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE",
  "this.Container_168D8311_3106_01EC_41B0_F2D40886AB88"
 ],
 "left": "0%",
 "paddingRight": 40,
 "scrollBarWidth": 10,
 "paddingLeft": 40,
 "horizontalAlign": "left",
 "width": "100%",
 "minHeight": 1,
 "layout": "absolute",
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "top": "0%",
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "backgroundOpacity": 0.7,
 "contentOpaque": false,
 "paddingBottom": 40,
 "borderRadius": 0,
 "propagateClick": true,
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "height": "100%",
 "paddingTop": 40,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "shadow": false,
 "data": {
  "name": "- Buttons set"
 }
},
{
 "borderSize": 0,
 "maxWidth": 2000,
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "maxHeight": 1000,
 "width": "100%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "class": "Image",
 "minHeight": 1,
 "top": "0%",
 "height": "100%",
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "minWidth": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "data": {
  "name": "Image"
 },
 "scaleMode": "fit_outside",
 "shadow": false
},
{
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "horizontalAlign": "right",
 "minHeight": 0,
 "gap": 0,
 "layout": "horizontal",
 "class": "Container",
 "scrollBarMargin": 2,
 "height": 60,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "paddingTop": 20,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "shadow": false,
 "data": {
  "name": "Container space"
 }
},
{
 "borderSize": 0,
 "scrollBarColor": "#E73B2C",
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "backgroundColorDirection": "vertical",
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "width": "100%",
 "minHeight": 520,
 "gap": 10,
 "layout": "vertical",
 "class": "Container",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "minWidth": 100,
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 30,
 "backgroundOpacity": 0.3,
 "propagateClick": false,
 "scrollBarOpacity": 0.79,
 "verticalAlign": "top",
 "paddingTop": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "shadow": false,
 "data": {
  "name": "Container text"
 }
},
{
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "backgroundColorDirection": "vertical",
 "width": 370,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 10,
 "layout": "horizontal",
 "class": "Container",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "height": 40,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "paddingTop": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "shadow": false,
 "data": {
  "name": "Container space"
 }
},
{
 "borderSize": 0,
 "maxWidth": 60,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "maxHeight": 60,
 "width": "100%",
 "right": 20,
 "paddingRight": 0,
 "paddingLeft": 0,
 "horizontalAlign": "right",
 "class": "IconButton",
 "minHeight": 50,
 "top": 20,
 "height": "36.14%",
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "minWidth": 50,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "propagateClick": true,
 "verticalAlign": "top",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "paddingTop": 0,
 "transparencyActive": false,
 "data": {
  "name": "IconButton X"
 },
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "shadow": false,
 "mode": "push",
 "cursor": "hand"
},
{
 "borderSize": 0,
 "maxWidth": 60,
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "maxHeight": 60,
 "width": "100%",
 "right": 20,
 "paddingRight": 0,
 "paddingLeft": 0,
 "horizontalAlign": "right",
 "class": "IconButton",
 "minHeight": 50,
 "top": 20,
 "height": "36.14%",
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "minWidth": 50,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "propagateClick": true,
 "verticalAlign": "top",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "paddingTop": 0,
 "transparencyActive": false,
 "data": {
  "name": "IconButton X"
 },
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "shadow": false,
 "mode": "push",
 "cursor": "hand"
},
{
 "progressBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "progressBorderSize": 0,
 "toolTipFontColor": "#606060",
 "left": "0%",
 "transitionMode": "blending",
 "width": "100%",
 "playbackBarBorderColor": "#FFFFFF",
 "transitionDuration": 500,
 "progressBorderRadius": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "paddingLeft": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "class": "ViewerArea",
 "minHeight": 1,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingTop": 4,
 "playbackBarLeft": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderSize": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "toolTipPaddingLeft": 6,
 "playbackBarHeadShadowBlurRadius": 3,
 "height": "100%",
 "minWidth": 1,
 "toolTipDisplayTime": 600,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "borderRadius": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 0,
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#FFFFFF",
 "paddingBottom": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipBorderRadius": 3,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "toolTipBorderColor": "#767676",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarRight": 0,
 "shadow": false,
 "progressBarBorderSize": 0,
 "borderSize": 0,
 "toolTipShadowSpread": 0,
 "toolTipOpacity": 1,
 "toolTipShadowBlurRadius": 3,
 "playbackBarProgressBorderSize": 0,
 "toolTipFontSize": 12,
 "toolTipTextShadowColor": "#000000",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "paddingRight": 0,
 "toolTipFontWeight": "normal",
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipShadowColor": "#333333",
 "top": "0%",
 "playbackBarProgressOpacity": 1,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarBorderSize": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipFontStyle": "normal",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowOpacity": 1,
 "toolTipFontFamily": "Arial",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBottom": 2,
 "progressBarBackgroundColorDirection": "vertical",
 "paddingTop": 0,
 "playbackBarHeadShadow": true,
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadShadowVerticalLength": 0
},
{
 "borderSize": 0,
 "maxWidth": 60,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "maxHeight": 60,
 "width": "14.22%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "class": "IconButton",
 "minHeight": 50,
 "top": "20%",
 "bottom": "20%",
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "minWidth": 50,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "propagateClick": true,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "transparencyActive": false,
 "data": {
  "name": "IconButton <"
 },
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "shadow": false,
 "mode": "push",
 "cursor": "hand"
},
{
 "borderSize": 0,
 "maxWidth": 60,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "maxHeight": 60,
 "width": "14.22%",
 "right": 10,
 "paddingRight": 0,
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "class": "IconButton",
 "minHeight": 50,
 "top": "20%",
 "bottom": "20%",
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "minWidth": 50,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "propagateClick": true,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "transparencyActive": false,
 "data": {
  "name": "IconButton >"
 },
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "shadow": false,
 "mode": "push",
 "cursor": "hand"
},
{
 "borderSize": 0,
 "maxWidth": 60,
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "maxHeight": 60,
 "width": "10%",
 "right": 20,
 "paddingRight": 0,
 "paddingLeft": 0,
 "horizontalAlign": "right",
 "class": "IconButton",
 "minHeight": 50,
 "top": 20,
 "height": "10%",
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "minWidth": 50,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "propagateClick": true,
 "verticalAlign": "top",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "paddingTop": 0,
 "transparencyActive": false,
 "data": {
  "name": "IconButton X"
 },
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "shadow": false,
 "mode": "push",
 "cursor": "hand"
},
{
 "borderSize": 0,
 "maxWidth": 2000,
 "id": "Image_1E19C23C_57F1_802D_41D1_9DC72DB5C1E1",
 "left": "0%",
 "maxHeight": 1000,
 "width": "100%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "class": "Image",
 "minHeight": 1,
 "top": "0%",
 "height": "100%",
 "url": "skin/Image_1E19C23C_57F1_802D_41D1_9DC72DB5C1E1.jpg",
 "minWidth": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": false,
 "verticalAlign": "bottom",
 "paddingTop": 0,
 "data": {
  "name": "Image40635"
 },
 "scaleMode": "fit_outside",
 "shadow": false
},
{
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "id": "Container_1E18223C_57F1_802D_41D5_C1ECF1EB519F",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "horizontalAlign": "right",
 "minHeight": 0,
 "gap": 0,
 "layout": "horizontal",
 "class": "Container",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "minWidth": 1,
 "borderRadius": 0,
 "height": "5%",
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "paddingTop": 20,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "shadow": false,
 "data": {
  "name": "Container space"
 }
},
{
 "borderSize": 0,
 "scrollBarColor": "#E73B2C",
 "id": "Container_1E18323C_57F1_802D_41AC_3EB4DE555BBC",
 "backgroundColorDirection": "vertical",
 "children": [
  "this.HTMLText_1E18123C_57F1_802D_41D2_B0CD0D6533F4",
  "this.Container_1E18623C_57F1_802D_41D5_C4D10C61A206"
 ],
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "width": "100%",
 "minHeight": 520,
 "gap": 10,
 "layout": "vertical",
 "class": "Container",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "minWidth": 100,
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 30,
 "backgroundOpacity": 0.3,
 "propagateClick": false,
 "scrollBarOpacity": 0.79,
 "verticalAlign": "top",
 "paddingTop": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "shadow": false,
 "data": {
  "name": "Container text"
 }
},
{
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "id": "Container_1E18523C_57F1_802D_41B1_88C86CD9A273",
 "backgroundColorDirection": "vertical",
 "width": 370,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 10,
 "layout": "horizontal",
 "class": "Container",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "height": 40,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "paddingTop": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "shadow": false,
 "data": {
  "name": "Container space"
 }
},
{
 "borderSize": 0,
 "maxWidth": 1095,
 "id": "Image_0435F73B_2D0F_4BF4_4181_65F86A8DAC19",
 "left": "0%",
 "maxHeight": 1095,
 "width": "100%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "class": "Image",
 "minHeight": 30,
 "top": "0%",
 "height": "25%",
 "url": "skin/Image_0435F73B_2D0F_4BF4_4181_65F86A8DAC19.png",
 "minWidth": 40,
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "verticalAlign": "top",
 "paddingTop": 0,
 "data": {
  "name": "Image Company"
 },
 "scaleMode": "fit_inside",
 "shadow": false
},
{
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "id": "Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE",
 "children": [
  "this.Container_208C289A_3033_51B4_41BC_C3F8D8B8F86D",
  "this.Button_0AEB5577_2D08_CE7B_41B6_192923248F4E",
  "this.Container_106C4A62_2D09_C594_41C0_0D00619DF541",
  "this.Button_0A054365_2D09_CB9F_4145_8C365B373D19",
  "this.Container_152401E8_2D0B_4694_41C5_9141C985F9C3",
  "this.Button_0B73474A_2D18_CB95_41B5_180037BA80BC",
  "this.Container_1BA343A6_2D0B_4A9D_41A8_3A02573B3B89",
  "this.Button_1D2C4FDF_2D7F_BAAB_4198_FBD1E9E469FF",
  "this.Container_15283BED_2D08_DA6F_41C5_5635F0C6DB03",
  "this.Button_0399826A_2D79_4594_41BA_934A50D0E6B4",
  "this.Container_146FF082_2D09_C695_41C4_13DE74CDAF5E",
  "this.Button_1D0C50DE_2D07_C6AD_41C1_CF4547A6CFAB",
  "this.Container_207ECEAD_3035_51EC_41A3_EE49910C654D"
 ],
 "right": "0%",
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "width": "100%",
 "class": "Container",
 "minHeight": 1,
 "layout": "vertical",
 "top": "26%",
 "gap": 0,
 "scrollBarMargin": 2,
 "bottom": "26%",
 "contentOpaque": false,
 "minWidth": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "scrollBarOpacity": 0.5,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "shadow": false,
 "data": {
  "name": "-Level 1"
 }
},
{
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "id": "Container_19256A12_2D07_45B5_41AB_E9DE96B2DFF3",
 "left": "0%",
 "children": [
  "this.Container_193B8A52_2D1B_C5B5_41C3_F44FF520A3F0",
  "this.HTMLText_29DD1615_3597_79DF_41C4_7593739E5260",
  "this.Container_2B9EE463_3593_BA7B_4195_8E8F4568BB13",
  "this.Container_283049D5_35F3_AA5F_419D_20B6A59ABCA6"
 ],
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "width": "100%",
 "minHeight": 1,
 "gap": 5,
 "layout": "vertical",
 "class": "Container",
 "scrollBarMargin": 2,
 "bottom": "0%",
 "height": 130,
 "contentOpaque": false,
 "minWidth": 1,
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "verticalAlign": "bottom",
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "shadow": false,
 "data": {
  "name": "-Container footer"
 }
},
{
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "id": "Container_2A2CB53C_310E_0014_41C3_AB834B10253B",
 "left": "0%",
 "children": [
  "this.Button_2A2DA53B_310E_001C_41C7_8885E712C50B",
  "this.Container_2A2DB53B_310E_001C_41BA_0206228E495C",
  "this.Container_1303E3BB_3106_001D_41C8_60D6F4D70B2F",
  "this.Button_2A2D853B_310E_001C_41C4_1C2E2BAFC35D",
  "this.Button_2A2DE53B_310E_001C_41BB_C7AB6950A4DD",
  "this.Button_2A2C253B_310E_001C_41B6_D3A7F4F68C3E",
  "this.Button_2A2C053B_310E_001C_41A2_583DE489828C",
  "this.Button_2A2C753B_310E_001C_41C4_B649CCC20E3D",
  "this.Button_2A2C553C_310E_0014_41C4_86393D0ADCC7",
  "this.Button_15EF2665_3106_0035_41AE_9BACA1A48D02",
  "this.Button_15F5A318_3106_001C_41C5_9AA2EF2184CF",
  "this.Button_1203FDB8_3106_001C_41B6_C9BE8EDD0DA9",
  "this.Button_13D4FC1E_310A_0017_41BA_DDA6D071C1BA"
 ],
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "width": "100%",
 "class": "Container",
 "minHeight": 1,
 "layout": "vertical",
 "top": "25%",
 "gap": 0,
 "scrollBarMargin": 2,
 "bottom": "25%",
 "contentOpaque": false,
 "minWidth": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "scrollBarOpacity": 0.5,
 "verticalAlign": "middle",
 "creationPolicy": "inAdvance",
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "visible": false,
 "overflow": "scroll",
 "shadow": false,
 "data": {
  "name": "-Level 2-1"
 }
},
{
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "id": "Container_159EADDD_31FA_0014_41C8_8A5203EC627B",
 "left": "0%",
 "children": [
  "this.Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1",
  "this.Container_15A14DDC_31FA_0014_41BE_C93192DD207E",
  "this.Container_15A16DDC_31FA_0014_4199_0FBF7553300D",
  "this.Button_15A10DDC_31FA_0014_4185_021C898E177D",
  "this.Button_15A13DDC_31FA_0014_41C5_41AE80876834",
  "this.Button_15A12DDC_31FA_0014_416B_ED845741AE5F",
  "this.Button_159EDDDC_31FA_0014_419A_61C18E43FE01",
  "this.Button_159ECDDC_31FA_0014_41B9_2D5AB1021813",
  "this.Button_159EFDDC_31FA_0014_41C6_9CF7032F84E0",
  "this.Button_159EEDDC_31FA_0014_41B6_22A86B2D2FEB",
  "this.Button_159E9DDC_31FA_0015_41B6_CB1D433C7673",
  "this.Button_159E8DDD_31FA_0014_41C5_F18F441AF371",
  "this.Button_159EBDDD_31FA_0014_41C8_935504B30727"
 ],
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "width": "100%",
 "class": "Container",
 "minHeight": 1,
 "layout": "vertical",
 "top": "25%",
 "gap": 0,
 "scrollBarMargin": 2,
 "bottom": "25%",
 "contentOpaque": false,
 "minWidth": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "scrollBarOpacity": 0.5,
 "verticalAlign": "middle",
 "creationPolicy": "inAdvance",
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "visible": false,
 "overflow": "scroll",
 "shadow": false,
 "data": {
  "name": "-Level 2-2"
 }
},
{
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "id": "Container_17569D7D_31FA_0015_41C4_CBC688763A8D",
 "left": "0%",
 "children": [
  "this.Button_1757CD7D_31FA_0015_4143_A9E37B16A50B",
  "this.Container_17579D7D_31FA_0015_41A1_D2B94269F28D",
  "this.Container_17578D7D_31FA_0015_41BE_353D3005648A",
  "this.Button_1757AD7D_31FA_0015_41C7_FB79F56FA149",
  "this.Button_17565D7D_31FA_0015_4193_78BBCB2DC70F",
  "this.Button_17564D7D_31FA_0015_41B8_A9191CD56C52",
  "this.Button_17567D7D_31FA_0015_41C2_1E0D0AF05C7A",
  "this.Button_17566D7D_31FA_0015_41AD_98D7C60C694F",
  "this.Button_17561D7D_31FA_0015_41B5_BD72FAC26B8B",
  "this.Button_17560D7D_31FA_0015_41C4_7F0EC7540CC2",
  "this.Button_17562D7D_31FA_0015_41A3_96B282B30DBA",
  "this.Button_1756DD7D_31FA_0015_41A5_988B67FCF8B7",
  "this.Button_1756FD7D_31FA_0015_41C7_DA2AAC2AAAEC"
 ],
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "width": "100%",
 "class": "Container",
 "minHeight": 1,
 "layout": "vertical",
 "top": "25%",
 "gap": 0,
 "scrollBarMargin": 2,
 "bottom": "25%",
 "contentOpaque": false,
 "minWidth": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "scrollBarOpacity": 0.5,
 "verticalAlign": "middle",
 "creationPolicy": "inAdvance",
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "visible": false,
 "overflow": "scroll",
 "shadow": false,
 "data": {
  "name": "-Level 2-3"
 }
},
{
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "id": "Container_1758A215_31FA_0014_41B6_9A4A5384548B",
 "left": "0%",
 "children": [
  "this.Button_175A5214_31FA_0014_4198_930DF49BADD9",
  "this.Container_175A4215_31FA_0014_41B2_5B8676CC3F2F",
  "this.Container_1759B215_31FA_0014_41C0_84C99CBD5517",
  "this.Button_1759A215_31FA_0014_41C7_F6B1044E5BB3",
  "this.Button_17598215_31FA_0014_41AC_1166AB319171",
  "this.Button_1759F215_31FA_0014_41BD_BBFA5FB0D882",
  "this.Button_1759D215_31FA_0014_41AD_B6C5744A0B97",
  "this.Button_17593215_31FA_0014_41C0_42BAFB0080F0",
  "this.Button_17592215_31FA_0014_41B2_AA3B5CC318B8",
  "this.Button_17590215_31FA_0014_41C1_2B2D012DCC76",
  "this.Button_17597215_31FA_0014_41C0_9BEE1DE4D7F6",
  "this.Button_17596215_31FA_0014_41C6_A42670770708",
  "this.Button_1758B215_31FA_0014_41BC_C4EAC2A9544B"
 ],
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "width": "100%",
 "class": "Container",
 "minHeight": 1,
 "layout": "vertical",
 "top": "25%",
 "gap": 0,
 "scrollBarMargin": 2,
 "bottom": "25%",
 "contentOpaque": false,
 "minWidth": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "scrollBarOpacity": 0.5,
 "verticalAlign": "middle",
 "creationPolicy": "inAdvance",
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "visible": false,
 "overflow": "scroll",
 "shadow": false,
 "data": {
  "name": "-Level 2-4"
 }
},
{
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "id": "Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE",
 "left": "0%",
 "children": [
  "this.Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C",
  "this.Container_17EA92B7_3106_0014_41A6_2B88DF32BBA7",
  "this.Container_17EAA2B7_3106_0014_41B0_ACBB1485A79E",
  "this.Button_17EAB2B7_3106_0014_41A7_209417AD3E9A",
  "this.Button_17EAD2B7_3106_0014_41C0_0B5453B4841D",
  "this.Button_17EAE2B7_3106_0014_41C7_DB7FC43AAEE0",
  "this.Button_17EB02B7_3106_0014_41AF_05D9AC36B189",
  "this.Button_17EB32B7_3106_0014_41C8_467BF6AECBE8",
  "this.Button_17EB42B7_3106_0014_41B0_CE70CBDDF438",
  "this.Button_17EB52B7_3106_0014_419C_439E593AEC43",
  "this.Button_17EB62B7_3106_0014_41C5_43B38271B353",
  "this.Button_17EB72B7_3106_0014_41B9_61857077BF4A",
  "this.Button_17EB92B7_3106_0014_41B2_34A3E3F63779"
 ],
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "width": "100%",
 "class": "Container",
 "minHeight": 1,
 "layout": "vertical",
 "top": "25%",
 "gap": 0,
 "scrollBarMargin": 2,
 "bottom": "25%",
 "contentOpaque": false,
 "minWidth": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "scrollBarOpacity": 0.5,
 "verticalAlign": "middle",
 "creationPolicy": "inAdvance",
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "visible": false,
 "overflow": "scroll",
 "shadow": false,
 "data": {
  "name": "-Level 2-5"
 }
},
{
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "id": "Container_168D8311_3106_01EC_41B0_F2D40886AB88",
 "left": "0%",
 "children": [
  "this.Button_168CA310_3106_01EC_41C7_72CE0522951A",
  "this.Container_168C8310_3106_01EC_4187_B16F315A4A23",
  "this.Container_168D7310_3106_01EC_41BE_5FCBD9E27BE4",
  "this.Button_168D6310_3106_01EC_41B8_A0B6BE627547",
  "this.Button_168D5310_3106_01EC_41B5_96D9387401B8",
  "this.Button_168D3310_3106_01EC_41AC_5D524E4677A5",
  "this.Button_168D2310_3106_01EC_41B8_9D7D1B2B55FA",
  "this.Button_168D0310_3106_01EC_41A1_FA8FC42E6FF3",
  "this.Button_168DE310_3106_01EC_4192_6A9F468A0ADE",
  "this.Button_168DD310_3106_01EC_4190_7815FA70349E",
  "this.Button_168DB310_3106_01EC_41B2_3511AA5E40E1",
  "this.Button_168DA310_3106_01EC_41BE_DF88732C2A28",
  "this.Button_168D9311_3106_01EC_41A8_3BD8769525D6"
 ],
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "width": "100%",
 "class": "Container",
 "minHeight": 1,
 "layout": "vertical",
 "top": "25%",
 "gap": 0,
 "scrollBarMargin": 2,
 "bottom": "25%",
 "contentOpaque": false,
 "minWidth": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "scrollBarOpacity": 0.5,
 "verticalAlign": "middle",
 "creationPolicy": "inAdvance",
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "visible": false,
 "overflow": "scroll",
 "shadow": false,
 "data": {
  "name": "-Level 2-6"
 }
},
{
 "borderSize": 0,
 "scrollBarColor": "#04A3E1",
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "width": "100%",
 "paddingRight": 10,
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "class": "HTMLText",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "height": "100%",
 "minWidth": 1,
 "borderRadius": 0,
 "paddingBottom": 20,
 "backgroundOpacity": 0,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.39vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.74vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.74vh;font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.44vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.95vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.44vh;font-family:'Oswald';\"><B>CONSECTETUR ADIPISCING ELIT. MORBI BIBENDUM PHARETRA LOREM, ACCUMSAN SAN NULLA.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.95vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.95vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.95vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV><p STYLE=\"margin:0; line-height:0.95vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.95vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.95vh;font-family:Arial, Helvetica, sans-serif;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.44vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.95vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.44vh;font-family:'Oswald';\"><B><I>DONEC FEUGIAT:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.95vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.49vh;\"> </SPAN>\u2022 Nisl nec mi sollicitudin facilisis </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.95vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nam sed faucibus est.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.95vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Ut eget lorem sed leo.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.95vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.95vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.44vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.95vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.44vh;font-family:'Oswald';\"><B><I>LOREM IPSUM:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.71vh;font-family:'Oswald';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "data": {
  "name": "HTMLText"
 }
},
{
 "fontFamily": "Oswald",
 "borderSize": 0,
 "iconBeforeLabel": true,
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "backgroundColorDirection": "vertical",
 "width": 180,
 "fontColor": "#FFFFFF",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingRight": 0,
 "shadowColor": "#000000",
 "paddingLeft": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "horizontalAlign": "center",
 "minHeight": 1,
 "gap": 5,
 "layout": "horizontal",
 "class": "Button",
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0.7,
 "height": 50,
 "borderColor": "#000000",
 "backgroundColor": [
  "#04A3E1"
 ],
 "shadowSpread": 1,
 "minWidth": 1,
 "borderRadius": 50,
 "fontSize": "2.39vh",
 "paddingBottom": 0,
 "mode": "push",
 "propagateClick": false,
 "fontStyle": "italic",
 "verticalAlign": "middle",
 "label": "LOREM IPSUM",
 "pressedBackgroundOpacity": 1,
 "paddingTop": 0,
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Button"
 },
 "rollOverBackgroundOpacity": 1,
 "iconHeight": 32,
 "shadow": false,
 "fontWeight": "bold",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "borderSize": 0,
 "scrollBarColor": "#04A3E1",
 "id": "HTMLText_1E18123C_57F1_802D_41D2_B0CD0D6533F4",
 "width": "100%",
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "class": "HTMLText",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "height": "46%",
 "minWidth": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": false,
 "scrollBarOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.39vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.74vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.74vh;font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV></div>",
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "data": {
  "name": "HTMLText18899"
 }
},
{
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "id": "Container_1E18623C_57F1_802D_41D5_C4D10C61A206",
 "backgroundColorDirection": "vertical",
 "children": [
  "this.Image_1E18723C_57F1_802D_41C5_8325536874A5",
  "this.HTMLText_1E18423C_57F1_802D_41C4_458DB7F892AC"
 ],
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "width": "100%",
 "minHeight": 1,
 "gap": 10,
 "layout": "horizontal",
 "class": "Container",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "minWidth": 1,
 "borderRadius": 0,
 "height": "75%",
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "paddingTop": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "shadow": false,
 "data": {
  "name": "- content"
 }
},
{
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "id": "Container_208C289A_3033_51B4_41BC_C3F8D8B8F86D",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 10,
 "layout": "absolute",
 "class": "Container",
 "scrollBarMargin": 2,
 "height": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "propagateClick": true,
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "paddingTop": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "shadow": false,
 "data": {
  "name": "line"
 }
},
{
 "fontFamily": "Oswald",
 "borderSize": 0,
 "iconBeforeLabel": true,
 "id": "Button_0AEB5577_2D08_CE7B_41B6_192923248F4E",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_2A2CB53C_310E_0014_41C3_AB834B10253B, true, 0, null, null, false)",
 "paddingRight": 0,
 "shadowColor": "#000000",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 5,
 "layout": "horizontal",
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 50,
 "borderColor": "#000000",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowSpread": 1,
 "minWidth": 1,
 "borderRadius": 0,
 "fontSize": 18,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "fontStyle": "italic",
 "verticalAlign": "middle",
 "label": "OUTDOOR AREA >",
 "pressedBackgroundOpacity": 1,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button Tour Info"
 },
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "shadow": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "id": "Container_106C4A62_2D09_C594_41C0_0D00619DF541",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 10,
 "layout": "absolute",
 "class": "Container",
 "scrollBarMargin": 2,
 "height": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "propagateClick": true,
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "paddingTop": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "shadow": false,
 "data": {
  "name": "line"
 }
},
{
 "fontFamily": "Oswald",
 "borderSize": 0,
 "iconBeforeLabel": true,
 "id": "Button_0A054365_2D09_CB9F_4145_8C365B373D19",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_159EADDD_31FA_0014_41C8_8A5203EC627B, true, 0, null, null, false)",
 "paddingRight": 0,
 "shadowColor": "#000000",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 23,
 "layout": "horizontal",
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 50,
 "borderColor": "#000000",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowSpread": 1,
 "minWidth": 1,
 "borderRadius": 0,
 "fontSize": 18,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "fontStyle": "italic",
 "verticalAlign": "middle",
 "label": "INDOOR AREA >",
 "pressedBackgroundOpacity": 1,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button Panorama List"
 },
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "shadow": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "id": "Container_152401E8_2D0B_4694_41C5_9141C985F9C3",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 10,
 "layout": "absolute",
 "class": "Container",
 "scrollBarMargin": 2,
 "height": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "propagateClick": true,
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "paddingTop": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "shadow": false,
 "data": {
  "name": "line"
 }
},
{
 "fontFamily": "Oswald",
 "borderSize": 0,
 "iconBeforeLabel": true,
 "id": "Button_0B73474A_2D18_CB95_41B5_180037BA80BC",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_17569D7D_31FA_0015_41C4_CBC688763A8D, true, 0, null, null, false)",
 "paddingRight": 0,
 "shadowColor": "#000000",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "pressedLabel": "Inserdt Text",
 "minHeight": 1,
 "gap": 5,
 "layout": "horizontal",
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 50,
 "borderColor": "#000000",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowSpread": 1,
 "minWidth": 1,
 "borderRadius": 0,
 "fontSize": 18,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "fontStyle": "italic",
 "verticalAlign": "middle",
 "label": "TRANSPORTATION MUSEUM >",
 "pressedBackgroundOpacity": 1,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button Location"
 },
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "shadow": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "id": "Container_1BA343A6_2D0B_4A9D_41A8_3A02573B3B89",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 10,
 "layout": "absolute",
 "class": "Container",
 "scrollBarMargin": 2,
 "height": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "propagateClick": true,
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "paddingTop": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "shadow": false,
 "data": {
  "name": "line"
 }
},
{
 "fontFamily": "Oswald",
 "borderSize": 0,
 "iconBeforeLabel": true,
 "id": "Button_1D2C4FDF_2D7F_BAAB_4198_FBD1E9E469FF",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_1758A215_31FA_0014_41B6_9A4A5384548B, true, 0, null, null, false)",
 "paddingRight": 0,
 "shadowColor": "#000000",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 5,
 "layout": "horizontal",
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 50,
 "borderColor": "#000000",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowSpread": 1,
 "minWidth": 1,
 "borderRadius": 0,
 "fontSize": 18,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "fontStyle": "italic",
 "verticalAlign": "middle",
 "label": "3D TRICK ART MUSEUM >",
 "pressedBackgroundOpacity": 1,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button Floorplan"
 },
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "shadow": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "id": "Container_15283BED_2D08_DA6F_41C5_5635F0C6DB03",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 10,
 "layout": "absolute",
 "class": "Container",
 "scrollBarMargin": 2,
 "height": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "propagateClick": true,
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "paddingTop": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "shadow": false,
 "data": {
  "name": "line"
 }
},
{
 "fontFamily": "Oswald",
 "borderSize": 0,
 "iconBeforeLabel": true,
 "id": "Button_0399826A_2D79_4594_41BA_934A50D0E6B4",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE, true, 0, null, null, false)",
 "paddingRight": 0,
 "shadowColor": "#000000",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 5,
 "layout": "horizontal",
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 50,
 "borderColor": "#000000",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowSpread": 1,
 "minWidth": 1,
 "borderRadius": 0,
 "fontSize": 18,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "fontStyle": "italic",
 "verticalAlign": "middle",
 "label": "SWIMMING POOL >",
 "pressedBackgroundOpacity": 1,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button Photoalbum"
 },
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "visible": false,
 "iconHeight": 32,
 "shadow": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "id": "Container_146FF082_2D09_C695_41C4_13DE74CDAF5E",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 10,
 "layout": "absolute",
 "class": "Container",
 "scrollBarMargin": 2,
 "height": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "propagateClick": true,
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "paddingTop": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "visible": false,
 "overflow": "scroll",
 "shadow": false,
 "data": {
  "name": "line"
 }
},
{
 "fontFamily": "Oswald",
 "borderSize": 0,
 "iconBeforeLabel": true,
 "id": "Button_1D0C50DE_2D07_C6AD_41C1_CF4547A6CFAB",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_168D8311_3106_01EC_41B0_F2D40886AB88, true, 0, null, null, false)",
 "paddingRight": 0,
 "shadowColor": "#000000",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 5,
 "layout": "horizontal",
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 50,
 "borderColor": "#000000",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowSpread": 1,
 "minWidth": 1,
 "borderRadius": 0,
 "fontSize": 18,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "fontStyle": "italic",
 "verticalAlign": "middle",
 "label": "RESTAURANTS >",
 "pressedBackgroundOpacity": 1,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button Contact"
 },
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "visible": false,
 "iconHeight": 32,
 "shadow": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "id": "Container_207ECEAD_3035_51EC_41A3_EE49910C654D",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 10,
 "layout": "absolute",
 "class": "Container",
 "scrollBarMargin": 2,
 "height": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "propagateClick": true,
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "paddingTop": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "visible": false,
 "overflow": "scroll",
 "shadow": false,
 "data": {
  "name": "line"
 }
},
{
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "id": "Container_193B8A52_2D1B_C5B5_41C3_F44FF520A3F0",
 "backgroundColorDirection": "vertical",
 "width": 40,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 10,
 "layout": "horizontal",
 "class": "Container",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "height": 2,
 "backgroundColor": [
  "#5CA1DE"
 ],
 "minWidth": 1,
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "propagateClick": true,
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "paddingTop": 0,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarVisible": "rollOver",
 "visible": false,
 "overflow": "visible",
 "shadow": false,
 "data": {
  "name": "blue line"
 }
},
{
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "id": "HTMLText_29DD1615_3597_79DF_41C4_7593739E5260",
 "width": "100%",
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "height": 78,
 "minWidth": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "scrollBarOpacity": 0.5,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Company Name</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>info@loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV></div>",
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "visible": false,
 "shadow": false,
 "data": {
  "name": "HTMLText47602"
 }
},
{
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "id": "Container_2B9EE463_3593_BA7B_4195_8E8F4568BB13",
 "children": [
  "this.IconButton_2B90E40F_3593_B9CB_41B4_408768336038",
  "this.IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83",
  "this.IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F",
  "this.IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5"
 ],
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "width": "100%",
 "minHeight": 1,
 "gap": 7,
 "scrollBarMargin": 2,
 "layout": "horizontal",
 "class": "Container",
 "height": 56,
 "contentOpaque": false,
 "minWidth": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "verticalAlign": "bottom",
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "shadow": false,
 "data": {
  "name": "-Container Icons 1"
 }
},
{
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "id": "Container_283049D5_35F3_AA5F_419D_20B6A59ABCA6",
 "children": [
  "this.IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15",
  "this.IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7",
  "this.IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF",
  "this.IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F"
 ],
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "width": "100%",
 "minHeight": 1,
 "gap": 7,
 "scrollBarMargin": 2,
 "layout": "horizontal",
 "class": "Container",
 "height": 44,
 "contentOpaque": false,
 "minWidth": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "shadow": false,
 "data": {
  "name": "-Container Icons 2"
 }
},
{
 "fontFamily": "Oswald",
 "borderSize": 0,
 "rollOverFontSize": 18,
 "iconBeforeLabel": true,
 "id": "Button_2A2DA53B_310E_001C_41C7_8885E712C50B",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_2A2CB53C_310E_0014_41C3_AB834B10253B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "paddingRight": 0,
 "shadowColor": "#000000",
 "rollOverFontFamily": "Oswald",
 "paddingLeft": 5,
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 5,
 "layout": "horizontal",
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 50,
 "rollOverIconURL": "skin/Button_2A2DA53B_310E_001C_41C7_8885E712C50B_rollover.png",
 "borderColor": "#000000",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowSpread": 1,
 "minWidth": 1,
 "borderRadius": 0,
 "fontSize": 18,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "fontStyle": "italic",
 "verticalAlign": "middle",
 "label": "BACK",
 "pressedBackgroundOpacity": 1,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button <BACK"
 },
 "iconURL": "skin/Button_2A2DA53B_310E_001C_41C7_8885E712C50B.png",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 30,
 "shadow": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 30,
 "cursor": "hand",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "id": "Container_2A2DB53B_310E_001C_41BA_0206228E495C",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 10,
 "layout": "absolute",
 "class": "Container",
 "scrollBarMargin": 2,
 "height": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0.5,
 "propagateClick": true,
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "paddingTop": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "shadow": false,
 "data": {
  "name": "line"
 }
},
{
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "id": "Container_1303E3BB_3106_001D_41C8_60D6F4D70B2F",
 "width": "100%",
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 10,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "class": "Container",
 "height": 8,
 "contentOpaque": false,
 "minWidth": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "shadow": false,
 "data": {
  "name": "line separator"
 }
},
{
 "fontFamily": "Oswald",
 "borderSize": 0,
 "rollOverShadow": false,
 "id": "Button_2A2D853B_310E_001C_41C4_1C2E2BAFC35D",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "shadowColor": "#000000",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 5,
 "layout": "horizontal",
 "class": "Button",
 "shadowBlurRadius": 15,
 "height": 36,
 "rollOverShadowBlurRadius": 18,
 "borderColor": "#000000",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowSpread": 1,
 "minWidth": 1,
 "borderRadius": 0,
 "fontSize": 18,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "fontStyle": "italic",
 "verticalAlign": "middle",
 "label": "Main Entrance",
 "pressedBackgroundOpacity": 1,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 1"
 },
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "shadow": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "fontFamily": "Oswald",
 "borderSize": 0,
 "iconBeforeLabel": true,
 "id": "Button_2A2DE53B_310E_001C_41BB_C7AB6950A4DD",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingRight": 0,
 "shadowColor": "#000000",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 23,
 "layout": "horizontal",
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowSpread": 1,
 "minWidth": 1,
 "borderRadius": 0,
 "fontSize": 18,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "fontStyle": "italic",
 "verticalAlign": "middle",
 "label": "Lobby",
 "pressedBackgroundOpacity": 1,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 2"
 },
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "shadow": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "fontFamily": "Oswald",
 "borderSize": 0,
 "iconBeforeLabel": true,
 "id": "Button_2A2C253B_310E_001C_41B6_D3A7F4F68C3E",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingRight": 0,
 "shadowColor": "#000000",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "pressedLabel": "Reception",
 "minHeight": 1,
 "gap": 5,
 "layout": "horizontal",
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowSpread": 1,
 "minWidth": 1,
 "borderRadius": 0,
 "fontSize": 18,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "fontStyle": "italic",
 "verticalAlign": "middle",
 "label": "Reception",
 "pressedBackgroundOpacity": 1,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 3"
 },
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "shadow": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "fontFamily": "Oswald",
 "borderSize": 0,
 "iconBeforeLabel": true,
 "id": "Button_2A2C053B_310E_001C_41A2_583DE489828C",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingRight": 0,
 "shadowColor": "#000000",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 5,
 "layout": "horizontal",
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowSpread": 1,
 "minWidth": 1,
 "borderRadius": 0,
 "fontSize": 18,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "fontStyle": "italic",
 "verticalAlign": "middle",
 "label": "Meeting Area 1",
 "pressedBackgroundOpacity": 1,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 4"
 },
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "shadow": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "fontFamily": "Oswald",
 "borderSize": 0,
 "iconBeforeLabel": true,
 "id": "Button_2A2C753B_310E_001C_41C4_B649CCC20E3D",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingRight": 0,
 "shadowColor": "#000000",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 5,
 "layout": "horizontal",
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowSpread": 1,
 "minWidth": 1,
 "borderRadius": 0,
 "fontSize": 18,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "fontStyle": "italic",
 "verticalAlign": "middle",
 "label": "Meeting Area 2",
 "pressedBackgroundOpacity": 1,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 5"
 },
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "shadow": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "fontFamily": "Oswald",
 "borderSize": 0,
 "iconBeforeLabel": true,
 "id": "Button_2A2C553C_310E_0014_41C4_86393D0ADCC7",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingRight": 0,
 "shadowColor": "#000000",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 5,
 "layout": "horizontal",
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowSpread": 1,
 "minWidth": 1,
 "borderRadius": 0,
 "fontSize": 18,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "fontStyle": "italic",
 "verticalAlign": "middle",
 "label": "Bar",
 "pressedBackgroundOpacity": 1,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 6"
 },
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "shadow": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "fontFamily": "Oswald",
 "borderSize": 0,
 "iconBeforeLabel": true,
 "id": "Button_15EF2665_3106_0035_41AE_9BACA1A48D02",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingRight": 0,
 "shadowColor": "#000000",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 5,
 "layout": "horizontal",
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowSpread": 1,
 "minWidth": 1,
 "borderRadius": 0,
 "fontSize": 18,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "fontStyle": "italic",
 "verticalAlign": "middle",
 "label": "Chill Out",
 "pressedBackgroundOpacity": 1,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 7"
 },
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "shadow": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "fontFamily": "Oswald",
 "borderSize": 0,
 "iconBeforeLabel": true,
 "id": "Button_15F5A318_3106_001C_41C5_9AA2EF2184CF",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingRight": 0,
 "shadowColor": "#000000",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 5,
 "layout": "horizontal",
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowSpread": 1,
 "minWidth": 1,
 "borderRadius": 0,
 "fontSize": 18,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "fontStyle": "italic",
 "verticalAlign": "middle",
 "label": "Terrace",
 "pressedBackgroundOpacity": 1,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 8"
 },
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "shadow": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "fontFamily": "Oswald",
 "borderSize": 0,
 "iconBeforeLabel": true,
 "id": "Button_1203FDB8_3106_001C_41B6_C9BE8EDD0DA9",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingRight": 0,
 "shadowColor": "#000000",
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 5,
 "layout": "horizontal",
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowSpread": 1,
 "minWidth": 1,
 "borderRadius": 0,
 "fontSize": 18,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "fontStyle": "italic",
 "verticalAlign": "middle",
 "label": "Garden",
 "pressedBackgroundOpacity": 1,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 9"
 },
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "visible": false,
 "iconHeight": 32,
 "shadow": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "fontFamily": "Oswald",
 "borderSize": 0,
 "iconBeforeLabel": true,
 "id": "Button_13D4FC1E_310A_0017_41BA_DDA6D071C1BA",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingRight": 0,
 "shadowColor": "#000000",
 "paddingLeft": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 5,
 "layout": "horizontal",
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowSpread": 1,
 "minWidth": 1,
 "borderRadius": 0,
 "fontSize": 18,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "fontStyle": "italic",
 "verticalAlign": "middle",
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 10"
 },
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "visible": false,
 "iconHeight": 32,
 "shadow": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)"
},
{
 "fontFamily": "Oswald",
 "borderSize": 0,
 "rollOverFontSize": 18,
 "iconBeforeLabel": true,
 "id": "Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_159EADDD_31FA_0014_41C8_8A5203EC627B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "paddingRight": 0,
 "shadowColor": "#000000",
 "rollOverFontFamily": "Oswald",
 "paddingLeft": 5,
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 5,
 "layout": "horizontal",
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 50,
 "rollOverIconURL": "skin/Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1_rollover.png",
 "borderColor": "#000000",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowSpread": 1,
 "minWidth": 1,
 "borderRadius": 0,
 "fontSize": 18,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "fontStyle": "italic",
 "verticalAlign": "middle",
 "label": "BACK",
 "pressedBackgroundOpacity": 1,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button <BACK"
 },
 "iconURL": "skin/Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1.png",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 30,
 "shadow": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 30,
 "cursor": "hand",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "id": "Container_15A14DDC_31FA_0014_41BE_C93192DD207E",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 10,
 "layout": "absolute",
 "class": "Container",
 "scrollBarMargin": 2,
 "height": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0.5,
 "propagateClick": true,
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "paddingTop": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "shadow": false,
 "data": {
  "name": "line"
 }
},
{
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "id": "Container_15A16DDC_31FA_0014_4199_0FBF7553300D",
 "width": "100%",
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 10,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "class": "Container",
 "height": 8,
 "contentOpaque": false,
 "minWidth": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "shadow": false,
 "data": {
  "name": "line separator"
 }
},
{
 "fontFamily": "Oswald",
 "borderSize": 0,
 "rollOverShadow": false,
 "id": "Button_15A10DDC_31FA_0014_4185_021C898E177D",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "shadowColor": "#000000",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 5,
 "layout": "horizontal",
 "class": "Button",
 "shadowBlurRadius": 15,
 "height": 36,
 "rollOverShadowBlurRadius": 18,
 "borderColor": "#000000",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowSpread": 1,
 "minWidth": 1,
 "borderRadius": 0,
 "fontSize": 18,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "fontStyle": "italic",
 "verticalAlign": "middle",
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 1"
 },
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "shadow": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "fontFamily": "Oswald",
 "borderSize": 0,
 "iconBeforeLabel": true,
 "id": "Button_15A13DDC_31FA_0014_41C5_41AE80876834",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingRight": 0,
 "shadowColor": "#000000",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 23,
 "layout": "horizontal",
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowSpread": 1,
 "minWidth": 1,
 "borderRadius": 0,
 "fontSize": 18,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "fontStyle": "italic",
 "verticalAlign": "middle",
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 2"
 },
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "shadow": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "fontFamily": "Oswald",
 "borderSize": 0,
 "iconBeforeLabel": true,
 "id": "Button_15A12DDC_31FA_0014_416B_ED845741AE5F",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingRight": 0,
 "shadowColor": "#000000",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "pressedLabel": "Lorem Ipsum",
 "minHeight": 1,
 "gap": 5,
 "layout": "horizontal",
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowSpread": 1,
 "minWidth": 1,
 "borderRadius": 0,
 "fontSize": 18,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "fontStyle": "italic",
 "verticalAlign": "middle",
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 3"
 },
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "shadow": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "fontFamily": "Oswald",
 "borderSize": 0,
 "iconBeforeLabel": true,
 "id": "Button_159EDDDC_31FA_0014_419A_61C18E43FE01",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingRight": 0,
 "shadowColor": "#000000",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 5,
 "layout": "horizontal",
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowSpread": 1,
 "minWidth": 1,
 "borderRadius": 0,
 "fontSize": 18,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "fontStyle": "italic",
 "verticalAlign": "middle",
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 4"
 },
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "shadow": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "fontFamily": "Oswald",
 "borderSize": 0,
 "iconBeforeLabel": true,
 "id": "Button_159ECDDC_31FA_0014_41B9_2D5AB1021813",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingRight": 0,
 "shadowColor": "#000000",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 5,
 "layout": "horizontal",
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowSpread": 1,
 "minWidth": 1,
 "borderRadius": 0,
 "fontSize": 18,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "fontStyle": "italic",
 "verticalAlign": "middle",
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 5"
 },
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "shadow": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "fontFamily": "Oswald",
 "borderSize": 0,
 "iconBeforeLabel": true,
 "id": "Button_159EFDDC_31FA_0014_41C6_9CF7032F84E0",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingRight": 0,
 "shadowColor": "#000000",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 5,
 "layout": "horizontal",
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowSpread": 1,
 "minWidth": 1,
 "borderRadius": 0,
 "fontSize": 18,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "fontStyle": "italic",
 "verticalAlign": "middle",
 "label": "Lorem ipsum",
 "pressedBackgroundOpacity": 1,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 6"
 },
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "shadow": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "fontFamily": "Oswald",
 "borderSize": 0,
 "iconBeforeLabel": true,
 "id": "Button_159EEDDC_31FA_0014_41B6_22A86B2D2FEB",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingRight": 0,
 "shadowColor": "#000000",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 5,
 "layout": "horizontal",
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowSpread": 1,
 "minWidth": 1,
 "borderRadius": 0,
 "fontSize": 18,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "fontStyle": "italic",
 "verticalAlign": "middle",
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 7"
 },
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "shadow": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "fontFamily": "Oswald",
 "borderSize": 0,
 "iconBeforeLabel": true,
 "id": "Button_159E9DDC_31FA_0015_41B6_CB1D433C7673",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingRight": 0,
 "shadowColor": "#000000",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 5,
 "layout": "horizontal",
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowSpread": 1,
 "minWidth": 1,
 "borderRadius": 0,
 "fontSize": 18,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "fontStyle": "italic",
 "verticalAlign": "middle",
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 8"
 },
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "shadow": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "fontFamily": "Oswald",
 "borderSize": 0,
 "iconBeforeLabel": true,
 "id": "Button_159E8DDD_31FA_0014_41C5_F18F441AF371",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingRight": 0,
 "shadowColor": "#000000",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 5,
 "layout": "horizontal",
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowSpread": 1,
 "minWidth": 1,
 "borderRadius": 0,
 "fontSize": 18,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "fontStyle": "italic",
 "verticalAlign": "middle",
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 9"
 },
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "shadow": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "fontFamily": "Oswald",
 "borderSize": 0,
 "iconBeforeLabel": true,
 "id": "Button_159EBDDD_31FA_0014_41C8_935504B30727",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingRight": 0,
 "shadowColor": "#000000",
 "paddingLeft": 10,
 "pressedBackgroundColorRatios": [
  0
 ],
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 5,
 "layout": "horizontal",
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowSpread": 1,
 "minWidth": 1,
 "borderRadius": 0,
 "fontSize": 18,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "fontStyle": "italic",
 "verticalAlign": "middle",
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 10"
 },
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "shadow": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)"
},
{
 "fontFamily": "Oswald",
 "borderSize": 0,
 "rollOverFontSize": 18,
 "iconBeforeLabel": true,
 "id": "Button_1757CD7D_31FA_0015_4143_A9E37B16A50B",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_17569D7D_31FA_0015_41C4_CBC688763A8D, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "paddingRight": 0,
 "shadowColor": "#000000",
 "rollOverFontFamily": "Oswald",
 "paddingLeft": 5,
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 5,
 "layout": "horizontal",
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 50,
 "rollOverIconURL": "skin/Button_1757CD7D_31FA_0015_4143_A9E37B16A50B_rollover.png",
 "borderColor": "#000000",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowSpread": 1,
 "minWidth": 1,
 "borderRadius": 0,
 "fontSize": 18,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "fontStyle": "italic",
 "verticalAlign": "middle",
 "label": "BACK",
 "pressedBackgroundOpacity": 1,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button <BACK"
 },
 "iconURL": "skin/Button_1757CD7D_31FA_0015_4143_A9E37B16A50B.png",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 30,
 "shadow": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 30,
 "cursor": "hand",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "id": "Container_17579D7D_31FA_0015_41A1_D2B94269F28D",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 10,
 "layout": "absolute",
 "class": "Container",
 "scrollBarMargin": 2,
 "height": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0.5,
 "propagateClick": true,
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "paddingTop": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "shadow": false,
 "data": {
  "name": "line"
 }
},
{
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "id": "Container_17578D7D_31FA_0015_41BE_353D3005648A",
 "width": "100%",
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 10,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "class": "Container",
 "height": 8,
 "contentOpaque": false,
 "minWidth": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "shadow": false,
 "data": {
  "name": "line separator"
 }
},
{
 "fontFamily": "Oswald",
 "borderSize": 0,
 "rollOverShadow": false,
 "id": "Button_1757AD7D_31FA_0015_41C7_FB79F56FA149",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "shadowColor": "#000000",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 5,
 "layout": "horizontal",
 "class": "Button",
 "shadowBlurRadius": 15,
 "height": 36,
 "rollOverShadowBlurRadius": 18,
 "borderColor": "#000000",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowSpread": 1,
 "minWidth": 1,
 "borderRadius": 0,
 "fontSize": 18,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "fontStyle": "italic",
 "verticalAlign": "middle",
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 1"
 },
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "shadow": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "fontFamily": "Oswald",
 "borderSize": 0,
 "iconBeforeLabel": true,
 "id": "Button_17565D7D_31FA_0015_4193_78BBCB2DC70F",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingRight": 0,
 "shadowColor": "#000000",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 23,
 "layout": "horizontal",
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowSpread": 1,
 "minWidth": 1,
 "borderRadius": 0,
 "fontSize": 18,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "fontStyle": "italic",
 "verticalAlign": "middle",
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 2"
 },
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "shadow": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "fontFamily": "Oswald",
 "borderSize": 0,
 "iconBeforeLabel": true,
 "id": "Button_17564D7D_31FA_0015_41B8_A9191CD56C52",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingRight": 0,
 "shadowColor": "#000000",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "pressedLabel": "Lorem Ipsum",
 "minHeight": 1,
 "gap": 5,
 "layout": "horizontal",
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowSpread": 1,
 "minWidth": 1,
 "borderRadius": 0,
 "fontSize": 18,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "fontStyle": "italic",
 "verticalAlign": "middle",
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 3"
 },
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "shadow": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "fontFamily": "Oswald",
 "borderSize": 0,
 "iconBeforeLabel": true,
 "id": "Button_17567D7D_31FA_0015_41C2_1E0D0AF05C7A",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingRight": 0,
 "shadowColor": "#000000",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 5,
 "layout": "horizontal",
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowSpread": 1,
 "minWidth": 1,
 "borderRadius": 0,
 "fontSize": 18,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "fontStyle": "italic",
 "verticalAlign": "middle",
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 4"
 },
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "shadow": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "fontFamily": "Oswald",
 "borderSize": 0,
 "iconBeforeLabel": true,
 "id": "Button_17566D7D_31FA_0015_41AD_98D7C60C694F",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingRight": 0,
 "shadowColor": "#000000",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 5,
 "layout": "horizontal",
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowSpread": 1,
 "minWidth": 1,
 "borderRadius": 0,
 "fontSize": 18,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "fontStyle": "italic",
 "verticalAlign": "middle",
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 5"
 },
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "shadow": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "fontFamily": "Oswald",
 "borderSize": 0,
 "iconBeforeLabel": true,
 "id": "Button_17561D7D_31FA_0015_41B5_BD72FAC26B8B",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingRight": 0,
 "shadowColor": "#000000",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 5,
 "layout": "horizontal",
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowSpread": 1,
 "minWidth": 1,
 "borderRadius": 0,
 "fontSize": 18,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "fontStyle": "italic",
 "verticalAlign": "middle",
 "label": "Lorem ipsum",
 "pressedBackgroundOpacity": 1,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 6"
 },
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "shadow": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "fontFamily": "Oswald",
 "borderSize": 0,
 "iconBeforeLabel": true,
 "id": "Button_17560D7D_31FA_0015_41C4_7F0EC7540CC2",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingRight": 0,
 "shadowColor": "#000000",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 5,
 "layout": "horizontal",
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowSpread": 1,
 "minWidth": 1,
 "borderRadius": 0,
 "fontSize": 18,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "fontStyle": "italic",
 "verticalAlign": "middle",
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 7"
 },
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "shadow": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "fontFamily": "Oswald",
 "borderSize": 0,
 "iconBeforeLabel": true,
 "id": "Button_17562D7D_31FA_0015_41A3_96B282B30DBA",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingRight": 0,
 "shadowColor": "#000000",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 5,
 "layout": "horizontal",
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowSpread": 1,
 "minWidth": 1,
 "borderRadius": 0,
 "fontSize": 18,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "fontStyle": "italic",
 "verticalAlign": "middle",
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 8"
 },
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "shadow": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "fontFamily": "Oswald",
 "borderSize": 0,
 "iconBeforeLabel": true,
 "id": "Button_1756DD7D_31FA_0015_41A5_988B67FCF8B7",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingRight": 0,
 "shadowColor": "#000000",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 5,
 "layout": "horizontal",
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowSpread": 1,
 "minWidth": 1,
 "borderRadius": 0,
 "fontSize": 18,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "fontStyle": "italic",
 "verticalAlign": "middle",
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 9"
 },
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "shadow": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "fontFamily": "Oswald",
 "borderSize": 0,
 "iconBeforeLabel": true,
 "id": "Button_1756FD7D_31FA_0015_41C7_DA2AAC2AAAEC",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingRight": 0,
 "shadowColor": "#000000",
 "paddingLeft": 10,
 "pressedBackgroundColorRatios": [
  0
 ],
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 5,
 "layout": "horizontal",
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowSpread": 1,
 "minWidth": 1,
 "borderRadius": 0,
 "fontSize": 18,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "fontStyle": "italic",
 "verticalAlign": "middle",
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 10"
 },
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "shadow": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)"
},
{
 "fontFamily": "Oswald",
 "borderSize": 0,
 "rollOverFontSize": 18,
 "iconBeforeLabel": true,
 "id": "Button_175A5214_31FA_0014_4198_930DF49BADD9",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_1758A215_31FA_0014_41B6_9A4A5384548B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "paddingRight": 0,
 "shadowColor": "#000000",
 "rollOverFontFamily": "Oswald",
 "paddingLeft": 5,
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 5,
 "layout": "horizontal",
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 50,
 "rollOverIconURL": "skin/Button_175A5214_31FA_0014_4198_930DF49BADD9_rollover.png",
 "borderColor": "#000000",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowSpread": 1,
 "minWidth": 1,
 "borderRadius": 0,
 "fontSize": 18,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "fontStyle": "italic",
 "verticalAlign": "middle",
 "label": "BACK",
 "pressedBackgroundOpacity": 1,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button <BACK"
 },
 "iconURL": "skin/Button_175A5214_31FA_0014_4198_930DF49BADD9.png",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 30,
 "shadow": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 30,
 "cursor": "hand",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "id": "Container_175A4215_31FA_0014_41B2_5B8676CC3F2F",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 10,
 "layout": "absolute",
 "class": "Container",
 "scrollBarMargin": 2,
 "height": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0.5,
 "propagateClick": true,
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "paddingTop": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "shadow": false,
 "data": {
  "name": "line"
 }
},
{
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "id": "Container_1759B215_31FA_0014_41C0_84C99CBD5517",
 "width": "100%",
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 10,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "class": "Container",
 "height": 8,
 "contentOpaque": false,
 "minWidth": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "shadow": false,
 "data": {
  "name": "line separator"
 }
},
{
 "fontFamily": "Oswald",
 "borderSize": 0,
 "rollOverShadow": false,
 "id": "Button_1759A215_31FA_0014_41C7_F6B1044E5BB3",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "shadowColor": "#000000",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 5,
 "layout": "horizontal",
 "class": "Button",
 "shadowBlurRadius": 15,
 "height": 36,
 "rollOverShadowBlurRadius": 18,
 "borderColor": "#000000",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowSpread": 1,
 "minWidth": 1,
 "borderRadius": 0,
 "fontSize": 18,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "fontStyle": "italic",
 "verticalAlign": "middle",
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 1"
 },
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "shadow": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "fontFamily": "Oswald",
 "borderSize": 0,
 "iconBeforeLabel": true,
 "id": "Button_17598215_31FA_0014_41AC_1166AB319171",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingRight": 0,
 "shadowColor": "#000000",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 23,
 "layout": "horizontal",
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowSpread": 1,
 "minWidth": 1,
 "borderRadius": 0,
 "fontSize": 18,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "fontStyle": "italic",
 "verticalAlign": "middle",
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 2"
 },
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "shadow": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "fontFamily": "Oswald",
 "borderSize": 0,
 "iconBeforeLabel": true,
 "id": "Button_1759F215_31FA_0014_41BD_BBFA5FB0D882",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingRight": 0,
 "shadowColor": "#000000",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "pressedLabel": "Lorem Ipsum",
 "minHeight": 1,
 "gap": 5,
 "layout": "horizontal",
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowSpread": 1,
 "minWidth": 1,
 "borderRadius": 0,
 "fontSize": 18,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "fontStyle": "italic",
 "verticalAlign": "middle",
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 3"
 },
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "shadow": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "fontFamily": "Oswald",
 "borderSize": 0,
 "iconBeforeLabel": true,
 "id": "Button_1759D215_31FA_0014_41AD_B6C5744A0B97",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingRight": 0,
 "shadowColor": "#000000",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 5,
 "layout": "horizontal",
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowSpread": 1,
 "minWidth": 1,
 "borderRadius": 0,
 "fontSize": 18,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "fontStyle": "italic",
 "verticalAlign": "middle",
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 4"
 },
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "shadow": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "fontFamily": "Oswald",
 "borderSize": 0,
 "iconBeforeLabel": true,
 "id": "Button_17593215_31FA_0014_41C0_42BAFB0080F0",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingRight": 0,
 "shadowColor": "#000000",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 5,
 "layout": "horizontal",
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowSpread": 1,
 "minWidth": 1,
 "borderRadius": 0,
 "fontSize": 18,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "fontStyle": "italic",
 "verticalAlign": "middle",
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 5"
 },
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "shadow": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "fontFamily": "Oswald",
 "borderSize": 0,
 "iconBeforeLabel": true,
 "id": "Button_17592215_31FA_0014_41B2_AA3B5CC318B8",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingRight": 0,
 "shadowColor": "#000000",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 5,
 "layout": "horizontal",
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowSpread": 1,
 "minWidth": 1,
 "borderRadius": 0,
 "fontSize": 18,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "fontStyle": "italic",
 "verticalAlign": "middle",
 "label": "Lorem ipsum",
 "pressedBackgroundOpacity": 1,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 6"
 },
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "shadow": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "fontFamily": "Oswald",
 "borderSize": 0,
 "iconBeforeLabel": true,
 "id": "Button_17590215_31FA_0014_41C1_2B2D012DCC76",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingRight": 0,
 "shadowColor": "#000000",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 5,
 "layout": "horizontal",
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowSpread": 1,
 "minWidth": 1,
 "borderRadius": 0,
 "fontSize": 18,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "fontStyle": "italic",
 "verticalAlign": "middle",
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 7"
 },
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "shadow": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "fontFamily": "Oswald",
 "borderSize": 0,
 "iconBeforeLabel": true,
 "id": "Button_17597215_31FA_0014_41C0_9BEE1DE4D7F6",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingRight": 0,
 "shadowColor": "#000000",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 5,
 "layout": "horizontal",
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowSpread": 1,
 "minWidth": 1,
 "borderRadius": 0,
 "fontSize": 18,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "fontStyle": "italic",
 "verticalAlign": "middle",
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 8"
 },
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "shadow": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "fontFamily": "Oswald",
 "borderSize": 0,
 "iconBeforeLabel": true,
 "id": "Button_17596215_31FA_0014_41C6_A42670770708",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingRight": 0,
 "shadowColor": "#000000",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 5,
 "layout": "horizontal",
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowSpread": 1,
 "minWidth": 1,
 "borderRadius": 0,
 "fontSize": 18,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "fontStyle": "italic",
 "verticalAlign": "middle",
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 9"
 },
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "shadow": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "fontFamily": "Oswald",
 "borderSize": 0,
 "iconBeforeLabel": true,
 "id": "Button_1758B215_31FA_0014_41BC_C4EAC2A9544B",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingRight": 0,
 "shadowColor": "#000000",
 "paddingLeft": 10,
 "pressedBackgroundColorRatios": [
  0
 ],
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 5,
 "layout": "horizontal",
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowSpread": 1,
 "minWidth": 1,
 "borderRadius": 0,
 "fontSize": 18,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "fontStyle": "italic",
 "verticalAlign": "middle",
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 10"
 },
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "shadow": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)"
},
{
 "fontFamily": "Oswald",
 "borderSize": 0,
 "rollOverFontSize": 18,
 "iconBeforeLabel": true,
 "id": "Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "paddingRight": 0,
 "shadowColor": "#000000",
 "rollOverFontFamily": "Oswald",
 "paddingLeft": 5,
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 5,
 "layout": "horizontal",
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 50,
 "rollOverIconURL": "skin/Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C_rollover.png",
 "borderColor": "#000000",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowSpread": 1,
 "minWidth": 1,
 "borderRadius": 0,
 "fontSize": 18,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "fontStyle": "italic",
 "verticalAlign": "middle",
 "label": "BACK",
 "pressedBackgroundOpacity": 1,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button <BACK"
 },
 "iconURL": "skin/Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C.png",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 30,
 "shadow": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 30,
 "cursor": "hand",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "id": "Container_17EA92B7_3106_0014_41A6_2B88DF32BBA7",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 10,
 "layout": "absolute",
 "class": "Container",
 "scrollBarMargin": 2,
 "height": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0.5,
 "propagateClick": true,
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "paddingTop": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "shadow": false,
 "data": {
  "name": "line"
 }
},
{
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "id": "Container_17EAA2B7_3106_0014_41B0_ACBB1485A79E",
 "width": "100%",
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 10,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "class": "Container",
 "height": 8,
 "contentOpaque": false,
 "minWidth": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "shadow": false,
 "data": {
  "name": "line separator"
 }
},
{
 "fontFamily": "Oswald",
 "borderSize": 0,
 "rollOverShadow": false,
 "id": "Button_17EAB2B7_3106_0014_41A7_209417AD3E9A",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "shadowColor": "#000000",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 5,
 "layout": "horizontal",
 "class": "Button",
 "shadowBlurRadius": 15,
 "height": 36,
 "rollOverShadowBlurRadius": 18,
 "borderColor": "#000000",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowSpread": 1,
 "minWidth": 1,
 "borderRadius": 0,
 "fontSize": 18,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "fontStyle": "italic",
 "verticalAlign": "middle",
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 1"
 },
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "shadow": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "fontFamily": "Oswald",
 "borderSize": 0,
 "iconBeforeLabel": true,
 "id": "Button_17EAD2B7_3106_0014_41C0_0B5453B4841D",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingRight": 0,
 "shadowColor": "#000000",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 23,
 "layout": "horizontal",
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowSpread": 1,
 "minWidth": 1,
 "borderRadius": 0,
 "fontSize": 18,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "fontStyle": "italic",
 "verticalAlign": "middle",
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 2"
 },
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "shadow": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "fontFamily": "Oswald",
 "borderSize": 0,
 "iconBeforeLabel": true,
 "id": "Button_17EAE2B7_3106_0014_41C7_DB7FC43AAEE0",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingRight": 0,
 "shadowColor": "#000000",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "pressedLabel": "Lorem Ipsum",
 "minHeight": 1,
 "gap": 5,
 "layout": "horizontal",
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowSpread": 1,
 "minWidth": 1,
 "borderRadius": 0,
 "fontSize": 18,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "fontStyle": "italic",
 "verticalAlign": "middle",
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 3"
 },
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "shadow": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "fontFamily": "Oswald",
 "borderSize": 0,
 "iconBeforeLabel": true,
 "id": "Button_17EB02B7_3106_0014_41AF_05D9AC36B189",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingRight": 0,
 "shadowColor": "#000000",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 5,
 "layout": "horizontal",
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowSpread": 1,
 "minWidth": 1,
 "borderRadius": 0,
 "fontSize": 18,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "fontStyle": "italic",
 "verticalAlign": "middle",
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 4"
 },
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "shadow": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "fontFamily": "Oswald",
 "borderSize": 0,
 "iconBeforeLabel": true,
 "id": "Button_17EB32B7_3106_0014_41C8_467BF6AECBE8",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingRight": 0,
 "shadowColor": "#000000",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 5,
 "layout": "horizontal",
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowSpread": 1,
 "minWidth": 1,
 "borderRadius": 0,
 "fontSize": 18,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "fontStyle": "italic",
 "verticalAlign": "middle",
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 5"
 },
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "shadow": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "fontFamily": "Oswald",
 "borderSize": 0,
 "iconBeforeLabel": true,
 "id": "Button_17EB42B7_3106_0014_41B0_CE70CBDDF438",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingRight": 0,
 "shadowColor": "#000000",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 5,
 "layout": "horizontal",
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowSpread": 1,
 "minWidth": 1,
 "borderRadius": 0,
 "fontSize": 18,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "fontStyle": "italic",
 "verticalAlign": "middle",
 "label": "Lorem ipsum",
 "pressedBackgroundOpacity": 1,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 6"
 },
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "shadow": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "fontFamily": "Oswald",
 "borderSize": 0,
 "iconBeforeLabel": true,
 "id": "Button_17EB52B7_3106_0014_419C_439E593AEC43",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingRight": 0,
 "shadowColor": "#000000",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 5,
 "layout": "horizontal",
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowSpread": 1,
 "minWidth": 1,
 "borderRadius": 0,
 "fontSize": 18,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "fontStyle": "italic",
 "verticalAlign": "middle",
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 7"
 },
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "shadow": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "fontFamily": "Oswald",
 "borderSize": 0,
 "iconBeforeLabel": true,
 "id": "Button_17EB62B7_3106_0014_41C5_43B38271B353",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingRight": 0,
 "shadowColor": "#000000",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 5,
 "layout": "horizontal",
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowSpread": 1,
 "minWidth": 1,
 "borderRadius": 0,
 "fontSize": 18,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "fontStyle": "italic",
 "verticalAlign": "middle",
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 8"
 },
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "shadow": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "fontFamily": "Oswald",
 "borderSize": 0,
 "iconBeforeLabel": true,
 "id": "Button_17EB72B7_3106_0014_41B9_61857077BF4A",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingRight": 0,
 "shadowColor": "#000000",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 5,
 "layout": "horizontal",
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowSpread": 1,
 "minWidth": 1,
 "borderRadius": 0,
 "fontSize": 18,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "fontStyle": "italic",
 "verticalAlign": "middle",
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 9"
 },
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "shadow": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "fontFamily": "Oswald",
 "borderSize": 0,
 "iconBeforeLabel": true,
 "id": "Button_17EB92B7_3106_0014_41B2_34A3E3F63779",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingRight": 0,
 "shadowColor": "#000000",
 "paddingLeft": 10,
 "pressedBackgroundColorRatios": [
  0
 ],
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 5,
 "layout": "horizontal",
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowSpread": 1,
 "minWidth": 1,
 "borderRadius": 0,
 "fontSize": 18,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "fontStyle": "italic",
 "verticalAlign": "middle",
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 10"
 },
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "shadow": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)"
},
{
 "fontFamily": "Oswald",
 "borderSize": 0,
 "rollOverFontSize": 18,
 "iconBeforeLabel": true,
 "id": "Button_168CA310_3106_01EC_41C7_72CE0522951A",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_168D8311_3106_01EC_41B0_F2D40886AB88, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "paddingRight": 0,
 "shadowColor": "#000000",
 "rollOverFontFamily": "Oswald",
 "paddingLeft": 5,
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 5,
 "layout": "horizontal",
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 50,
 "rollOverIconURL": "skin/Button_168CA310_3106_01EC_41C7_72CE0522951A_rollover.png",
 "borderColor": "#000000",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowSpread": 1,
 "minWidth": 1,
 "borderRadius": 0,
 "fontSize": 18,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "fontStyle": "italic",
 "verticalAlign": "middle",
 "label": "BACK",
 "pressedBackgroundOpacity": 1,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button <BACK"
 },
 "iconURL": "skin/Button_168CA310_3106_01EC_41C7_72CE0522951A.png",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 30,
 "shadow": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 30,
 "cursor": "hand",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "id": "Container_168C8310_3106_01EC_4187_B16F315A4A23",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 10,
 "layout": "absolute",
 "class": "Container",
 "scrollBarMargin": 2,
 "height": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0.5,
 "propagateClick": true,
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "paddingTop": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "shadow": false,
 "data": {
  "name": "line"
 }
},
{
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "id": "Container_168D7310_3106_01EC_41BE_5FCBD9E27BE4",
 "width": "100%",
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 10,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "class": "Container",
 "height": 8,
 "contentOpaque": false,
 "minWidth": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "shadow": false,
 "data": {
  "name": "line separator"
 }
},
{
 "fontFamily": "Oswald",
 "borderSize": 0,
 "rollOverShadow": false,
 "id": "Button_168D6310_3106_01EC_41B8_A0B6BE627547",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "shadowColor": "#000000",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 5,
 "layout": "horizontal",
 "class": "Button",
 "shadowBlurRadius": 15,
 "height": 36,
 "rollOverShadowBlurRadius": 18,
 "borderColor": "#000000",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowSpread": 1,
 "minWidth": 1,
 "borderRadius": 0,
 "fontSize": 18,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "fontStyle": "italic",
 "verticalAlign": "middle",
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 1"
 },
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "shadow": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "fontFamily": "Oswald",
 "borderSize": 0,
 "iconBeforeLabel": true,
 "id": "Button_168D5310_3106_01EC_41B5_96D9387401B8",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingRight": 0,
 "shadowColor": "#000000",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 23,
 "layout": "horizontal",
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowSpread": 1,
 "minWidth": 1,
 "borderRadius": 0,
 "fontSize": 18,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "fontStyle": "italic",
 "verticalAlign": "middle",
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 2"
 },
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "shadow": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "fontFamily": "Oswald",
 "borderSize": 0,
 "iconBeforeLabel": true,
 "id": "Button_168D3310_3106_01EC_41AC_5D524E4677A5",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingRight": 0,
 "shadowColor": "#000000",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "pressedLabel": "Lorem Ipsum",
 "minHeight": 1,
 "gap": 5,
 "layout": "horizontal",
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowSpread": 1,
 "minWidth": 1,
 "borderRadius": 0,
 "fontSize": 18,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "fontStyle": "italic",
 "verticalAlign": "middle",
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 3"
 },
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "shadow": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "fontFamily": "Oswald",
 "borderSize": 0,
 "iconBeforeLabel": true,
 "id": "Button_168D2310_3106_01EC_41B8_9D7D1B2B55FA",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingRight": 0,
 "shadowColor": "#000000",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 5,
 "layout": "horizontal",
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowSpread": 1,
 "minWidth": 1,
 "borderRadius": 0,
 "fontSize": 18,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "fontStyle": "italic",
 "verticalAlign": "middle",
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 4"
 },
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "shadow": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "fontFamily": "Oswald",
 "borderSize": 0,
 "iconBeforeLabel": true,
 "id": "Button_168D0310_3106_01EC_41A1_FA8FC42E6FF3",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingRight": 0,
 "shadowColor": "#000000",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 5,
 "layout": "horizontal",
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowSpread": 1,
 "minWidth": 1,
 "borderRadius": 0,
 "fontSize": 18,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "fontStyle": "italic",
 "verticalAlign": "middle",
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 5"
 },
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "shadow": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "fontFamily": "Oswald",
 "borderSize": 0,
 "iconBeforeLabel": true,
 "id": "Button_168DE310_3106_01EC_4192_6A9F468A0ADE",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingRight": 0,
 "shadowColor": "#000000",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 5,
 "layout": "horizontal",
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowSpread": 1,
 "minWidth": 1,
 "borderRadius": 0,
 "fontSize": 18,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "fontStyle": "italic",
 "verticalAlign": "middle",
 "label": "Lorem ipsum",
 "pressedBackgroundOpacity": 1,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 6"
 },
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "shadow": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "fontFamily": "Oswald",
 "borderSize": 0,
 "iconBeforeLabel": true,
 "id": "Button_168DD310_3106_01EC_4190_7815FA70349E",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingRight": 0,
 "shadowColor": "#000000",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 5,
 "layout": "horizontal",
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowSpread": 1,
 "minWidth": 1,
 "borderRadius": 0,
 "fontSize": 18,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "fontStyle": "italic",
 "verticalAlign": "middle",
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 7"
 },
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "shadow": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "fontFamily": "Oswald",
 "borderSize": 0,
 "iconBeforeLabel": true,
 "id": "Button_168DB310_3106_01EC_41B2_3511AA5E40E1",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingRight": 0,
 "shadowColor": "#000000",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 5,
 "layout": "horizontal",
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowSpread": 1,
 "minWidth": 1,
 "borderRadius": 0,
 "fontSize": 18,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "fontStyle": "italic",
 "verticalAlign": "middle",
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 8"
 },
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "shadow": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "fontFamily": "Oswald",
 "borderSize": 0,
 "iconBeforeLabel": true,
 "id": "Button_168DA310_3106_01EC_41BE_DF88732C2A28",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingRight": 0,
 "shadowColor": "#000000",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 5,
 "layout": "horizontal",
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowSpread": 1,
 "minWidth": 1,
 "borderRadius": 0,
 "fontSize": 18,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "fontStyle": "italic",
 "verticalAlign": "middle",
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 9"
 },
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "shadow": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "fontFamily": "Oswald",
 "borderSize": 0,
 "iconBeforeLabel": true,
 "id": "Button_168D9311_3106_01EC_41A8_3BD8769525D6",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingRight": 0,
 "shadowColor": "#000000",
 "paddingLeft": 10,
 "pressedBackgroundColorRatios": [
  0
 ],
 "horizontalAlign": "left",
 "minHeight": 1,
 "gap": 5,
 "layout": "horizontal",
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowSpread": 1,
 "minWidth": 1,
 "borderRadius": 0,
 "fontSize": 18,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "fontStyle": "italic",
 "verticalAlign": "middle",
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 10"
 },
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "shadow": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)"
},
{
 "borderSize": 0,
 "maxWidth": 200,
 "id": "Image_1E18723C_57F1_802D_41C5_8325536874A5",
 "maxHeight": 200,
 "width": "25%",
 "paddingRight": 0,
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "class": "Image",
 "minHeight": 1,
 "height": "100%",
 "url": "skin/Image_1E18723C_57F1_802D_41C5_8325536874A5.jpg",
 "minWidth": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": false,
 "verticalAlign": "top",
 "paddingTop": 0,
 "data": {
  "name": "agent photo"
 },
 "scaleMode": "fit_inside",
 "shadow": false
},
{
 "borderSize": 0,
 "scrollBarColor": "#04A3E1",
 "id": "HTMLText_1E18423C_57F1_802D_41C4_458DB7F892AC",
 "width": "75%",
 "paddingRight": 10,
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "class": "HTMLText",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "height": "100%",
 "minWidth": 1,
 "borderRadius": 0,
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.44vh;font-family:'Oswald';\"><B><I>JOHN DOE</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.44vh;font-family:'Oswald';\"><I>Licensed Real Estate Salesperson</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.76vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.95vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.76vh;font-family:'Oswald';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.76vh;font-family:'Oswald';\"><I>jhondoe@realestate.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.76vh;font-family:'Oswald';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.95vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.95vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:0.95vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.95vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.95vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV></div>",
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "data": {
  "name": "HTMLText19460"
 }
},
{
 "borderSize": 0,
 "maxWidth": 101,
 "id": "IconButton_2B90E40F_3593_B9CB_41B4_408768336038",
 "maxHeight": 101,
 "width": 44,
 "paddingRight": 0,
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "height": 44,
 "rollOverIconURL": "skin/IconButton_2B90E40F_3593_B9CB_41B4_408768336038_rollover.png",
 "iconURL": "skin/IconButton_2B90E40F_3593_B9CB_41B4_408768336038.png",
 "minWidth": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, true, 0, null, null, false)",
 "paddingTop": 0,
 "mode": "push",
 "transparencyActive": true,
 "data": {
  "name": "IconButton Info"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "borderSize": 0,
 "maxWidth": 101,
 "id": "IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83",
 "maxHeight": 101,
 "width": 44,
 "paddingRight": 0,
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "height": 44,
 "rollOverIconURL": "skin/IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83_rollover.png",
 "iconURL": "skin/IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83.png",
 "minWidth": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "paddingTop": 0,
 "mode": "push",
 "transparencyActive": false,
 "data": {
  "name": "IconButton Thumblist"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "borderSize": 0,
 "maxWidth": 101,
 "id": "IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F",
 "maxHeight": 101,
 "width": 44,
 "paddingRight": 0,
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "height": 44,
 "rollOverIconURL": "skin/IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F_rollover.png",
 "iconURL": "skin/IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F.png",
 "minWidth": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, true, 0, null, null, false)",
 "paddingTop": 0,
 "mode": "push",
 "transparencyActive": false,
 "data": {
  "name": "IconButton Location"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "borderSize": 0,
 "maxWidth": 101,
 "id": "IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5",
 "maxHeight": 101,
 "width": 44,
 "paddingRight": 0,
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "height": 44,
 "rollOverIconURL": "skin/IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5_rollover.png",
 "iconURL": "skin/IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5.png",
 "minWidth": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false)",
 "paddingTop": 0,
 "mode": "push",
 "transparencyActive": false,
 "data": {
  "name": "IconButton Photoalbum"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "borderSize": 0,
 "maxWidth": 101,
 "id": "IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15",
 "maxHeight": 101,
 "width": 44,
 "paddingRight": 0,
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "height": 44,
 "rollOverIconURL": "skin/IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15_rollover.png",
 "iconURL": "skin/IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15.png",
 "minWidth": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false)",
 "paddingTop": 0,
 "mode": "push",
 "transparencyActive": true,
 "data": {
  "name": "IconButton Floorplan"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "borderSize": 0,
 "maxWidth": 101,
 "id": "IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7",
 "maxHeight": 101,
 "width": 44,
 "paddingRight": 0,
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "height": 44,
 "rollOverIconURL": "skin/IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7_rollover.png",
 "iconURL": "skin/IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7.png",
 "minWidth": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, true, 0, null, null, false)",
 "paddingTop": 0,
 "mode": "push",
 "transparencyActive": false,
 "data": {
  "name": "IconButton Realtor"
 },
 "pressedIconURL": "skin/IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7_pressed.png",
 "shadow": false,
 "cursor": "hand"
},
{
 "borderSize": 0,
 "maxWidth": 101,
 "id": "IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF",
 "maxHeight": 101,
 "width": 44,
 "paddingRight": 0,
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "height": 44,
 "rollOverIconURL": "skin/IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF_rollover.png",
 "iconURL": "skin/IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF.png",
 "minWidth": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "mode": "push",
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "transparencyActive": false,
 "data": {
  "name": "IconButton Video"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "borderSize": 0,
 "maxWidth": 101,
 "id": "IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F",
 "maxHeight": 101,
 "width": 50,
 "paddingRight": 0,
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "height": 50,
 "iconURL": "skin/IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F.png",
 "minWidth": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "mode": "push",
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "transparencyActive": false,
 "data": {
  "name": "IconButton --"
 },
 "pressedIconURL": "skin/IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F_pressed.png",
 "visible": false,
 "shadow": false,
 "cursor": "hand"
}],
 "borderRadius": 0,
 "desktopMipmappingEnabled": false,
 "downloadEnabled": false,
 "paddingBottom": 0,
 "propagateClick": true,
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "height": "100%",
 "scripts": {
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "existsKey": function(key){  return key in window; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "unregisterKey": function(key){  delete window[key]; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "registerKey": function(key, value){  window[key] = value; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getKey": function(key){  return window[key]; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } }
 },
 "mouseWheelEnabled": true,
 "vrPolyfillScale": 0.5,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "mobileMipmappingEnabled": false,
 "shadow": false,
 "data": {
  "name": "Player468"
 }
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
