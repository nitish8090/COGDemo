import GeoTIFF from 'ol/source/GeoTIFF.js';
import Map from 'ol/Map.js';
import TileLayer from 'ol/layer/WebGLTile.js';
import OSM from 'ol/source/OSM.js';
import View from 'ol/View.js';

const source = new GeoTIFF({
  sources: [
    {
      url: 'http://127.0.0.1:8080/California-Vegetation-CanopyBaseHeight-2019-Summer-00010m-3857-small.tif',
    },
  ],
});

console.log(source.getView())

const map = new Map({
  target: 'map',
  layers: [
   
    new TileLayer({
      source: new OSM(),
    }),
    new TileLayer({
      source: source,
    }),
  ],
  view:new View( {
    center: [1074488,4408779],
  zoom: 2,}),
});

