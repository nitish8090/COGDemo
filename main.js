import GeoTIFF from 'ol/source/GeoTIFF.js';
import Map from 'ol/Map.js';
import TileLayer from 'ol/layer/WebGLTile.js';
import OSM from 'ol/source/OSM.js';
import View from 'ol/View.js';
import {get} from 'ol/proj';

const source = new GeoTIFF({
  sources: [
    {
      url: 'https://portal.coderize.in/resources/2016/TCI.tif',
      projection: 'EPSG:32721'
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
    center: [318824,6164935],
  zoom: 10,}),
});

