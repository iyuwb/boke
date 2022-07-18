#   Openlayers基础

>   在Vue中使用Openlayers和天地图，实现一系列功能
>
>   需要 下载ol：`npm install ol`
>
>   ---
>
>   官方文档：
>
>   - 天地图：http://lbs.tianditu.gov.cn/server/MapService.html
>     - 需要注册天地图key： https://console.tianditu.gov.cn/api/key
>   - Openlayers：https://openlayers.org

### 初始化地图

地图图层

> WMTS：	https://openlayers.org/en/latest/apidoc/module-ol_source_WMTS-WMTS.html

```js
// 引入依赖
import * as source from 'ol/source'
import WMTSTileGrid from 'ol/tilegrid/WMTS'
import * as extent from 'ol/extent'
import * as proj from 'ol/proj'
import TileLayer from 'ol/layer/Tile'

const projection = proj.get('EPSG:4326') //坐标系
const projectionExtent = projection.getExtent()
// 地图图层
export const vecLayer = new TileLayer({
    title: 'tianditu1', 
    visible: true, //是否可视
    source: new source.WMTS({
        url: 'https://t0.tianditu.gov.cn/vec_c/wmts?tk=' + webKey,//webKey为开发者key
        layer: 'vec',
        style: 'default',
        matrixSet: 'c',
        tilePixelRatio: 2,
        format: 'tiles',
        wrapX: !0,
        tileGrid: new WMTSTileGrid({
          origin: extent.getTopLeft(projectionExtent),
          resolutions: resolutions.slice(0, 20),
          matrixIds: matrixIds.slice(0, 20)
        })
    })
})
// 地图信息图层
export const cvaLayer = new TileLayer({
    title: 'tianditu2',
    visible: true,
    source: new source.WMTS({
        url: 'https://t0.tianditu.gov.cn/cva_c/wmts?tk=' + webKey,
        layer: 'cva',
        style: 'default',
        matrixSet: 'c',
        tilePixelRatio: 2,
        format: 'tiles',
        wrapX: !0,
        tileGrid: new WMTSTileGrid({
          origin: extent.getTopLeft(projectionExtent),
          resolutions: resolutions.slice(0, 20),
          matrixIds: matrixIds.slice(0, 20)
        })
    })
})
```

加载地图

```js
// 引入依赖
import * as olInteraction from 'ol/interaction'
import Map from 'ol/Map'
import View from 'ol/View'
// 引入图层
import {
  vecLayer,
  cvaLayer,
} from '@/config/layer.js'


//  初始化加载地图
this.view = new View({
    projection: 'EPSG:4326', //坐标系
    zoom: 15,	//当前层级
    center: this.currentPosition, //初始默认位置
    maxZoom: 18, //最大层级
    minZoom: 8	//最小层级
})
this.map = new Map({
    target: 'map-container',
    view: this.view,
    layers: [vecLayer, cvaLayer], //加载图层
    controls: control.defaults({
        zoom: false,
        rotate: false,
        attribution: false
    }),
  	// 默认事件相关  禁用或者打开
    interactions: new olInteraction.defaults({
        // 屏蔽双击放大事件
        doubleClickZoom: false,
        // 屏蔽旋转事件
        altShiftDragRotate: false,
        pinchRotate: false
    })
})
```

