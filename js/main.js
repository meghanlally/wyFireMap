// Wyoming Wildfires and Summer Weather, 2024
// Uses the Leaflet API. Data comes from the JSON objects in data.js.

// ---------- 1. Create the map ----------
var map = L.map('map').setView([43.0, -107.5], 7);

// ---------- 2. Tile layers (basemaps) ----------
var streetMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; OpenStreetMap contributors'
});

var satelliteMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  maxZoom: 19,
  attribution: 'Tiles &copy; Esri, Maxar, Earthstar Geographics'
});

var topoMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
  maxZoom: 19,
  attribution: 'Tiles &copy; Esri'
});

// Start with the street map
streetMap.addTo(map);

// ---------- 3. Layer groups (overlays) ----------
var fireLayer = L.layerGroup();
var stationLayer = L.layerGroup();
var lineLayer = L.layerGroup();

// ---------- 4. Helper functions ----------

// Color for a station based on rain as a percent of normal
function getStationColor(percent) {
  if (percent < 50) {
    return '#8c2d04';   // much drier than normal
  } else if (percent < 75) {
    return '#e6550d';   // drier than normal
  } else if (percent < 100) {
    return '#fdd0a2';   // a little drier than normal
  } else {
    return '#31a354';   // normal or wetter
  }
}

// Circle size for a fire based on acres burned
function getFireRadius(acres) {
  var radius = Math.sqrt(acres) / 22;
  if (radius < 5) {
    radius = 5;
  }
  return radius;
}

// Add commas to big numbers (196368 -> 196,368)
function formatNumber(num) {
  return num.toLocaleString();
}

// ---------- 5. Weather station markers (squares) ----------
var stations = stationsData.features;

for (var i = 0; i < stations.length; i++) {
  var s = stations[i].properties;
  var sLat = stations[i].geometry.coordinates[1];
  var sLng = stations[i].geometry.coordinates[0];

  // Square icon colored by percent of normal rain
  var squareIcon = L.divIcon({
    className: '',
    html: '<div class="station-icon" style="background-color:' + getStationColor(s.percentOfNormal) + '"></div>',
    iconSize: [14, 14]
  });

  var stationMarker = L.marker([sLat, sLng], { icon: squareIcon });

  var stationPopup =
    '<div class="popup-title">' + s.name + ' Weather Station</div>' +
    'Station: ' + s.station + '<br>' +
    'Elevation: ' + formatNumber(s.elevation) + ' ft<br>' +
    'Rain, Jun-Sep 2024: ' + s.precip + ' in<br>' +
    'Normal rain: ' + s.normalPrecip + ' in<br>' +
    '<b>Percent of normal: ' + s.percentOfNormal + '%</b><br>' +
    'Average high: ' + s.avgHighTemp + ' &deg;F (' + s.tempDeparture + ' &deg;F above normal)';

  if (s.missingDays > 0) {
    stationPopup += '<br><i>Note: ' + s.missingDays + ' days of rain data missing</i>';
  }

  stationMarker.bindPopup(stationPopup);
  stationMarker.addTo(stationLayer);
}

// ---------- 6. Wildfire markers (circles) and nearest-station analysis ----------
var fires = firesData.features;
var results = [];   // holds the analysis for each fire

for (var j = 0; j < fires.length; j++) {
  var f = fires[j].properties;
  var fLat = fires[j].geometry.coordinates[1];
  var fLng = fires[j].geometry.coordinates[0];
  var firePoint = L.latLng(fLat, fLng);

  // Find the nearest weather station by looping through all stations
  var nearest = null;
  var nearestMeters = Infinity;

  for (var k = 0; k < stations.length; k++) {
    var stationPoint = L.latLng(stations[k].geometry.coordinates[1], stations[k].geometry.coordinates[0]);
    var meters = map.distance(firePoint, stationPoint);   // Leaflet distance in meters
    if (meters < nearestMeters) {
      nearestMeters = meters;
      nearest = stations[k];
    }
  }

  var miles = Math.round(nearestMeters / 1609.34);
  var n = nearest.properties;

  // Draw a dashed line from the fire to its nearest station
  var line = L.polyline([firePoint, [nearest.geometry.coordinates[1], nearest.geometry.coordinates[0]]], {
    color: '#555',
    weight: 2,
    dashArray: '6, 6'
  });
  line.bindPopup(f.name + ' to ' + n.name + ': ' + miles + ' miles');
  line.addTo(lineLayer);

  // Fire circle sized by acres
  var fireMarker = L.circleMarker(firePoint, {
    radius: getFireRadius(f.acres),
    color: '#67000d',
    weight: 1,
    fillColor: '#d62728',
    fillOpacity: 0.7
  });

  var firePopup =
    '<div class="popup-title">' + f.name + '</div>' +
    'County: ' + f.county + '<br>' +
    'Acres burned: ' + formatNumber(f.acres) + '<br>' +
    'Discovered: ' + f.discovered + '<br>' +
    'Cause: ' + f.cause + '<br><hr>' +
    'Nearest station: ' + n.name + ' (' + miles + ' miles)<br>' +
    'Rain at that station: <b>' + n.percentOfNormal + '% of normal</b><br>' +
    'Average high: ' + n.tempDeparture + ' &deg;F above normal';

  fireMarker.bindPopup(firePopup);
  fireMarker.addTo(fireLayer);

  results.push({
    name: f.name,
    acres: f.acres,
    station: n.name,
    miles: miles,
    percent: n.percentOfNormal,
    marker: fireMarker
  });
}

// Show fires and stations when the page opens
fireLayer.addTo(map);
stationLayer.addTo(map);
lineLayer.addTo(map);

// ---------- 7. Layer control ----------
var baseMaps = {
  'Street Map': streetMap,
  'Satellite': satelliteMap,
  'Topographic': topoMap
};

var overlayMaps = {
  'Wildfires (2024)': fireLayer,
  'Weather Stations': stationLayer,
  'Fire to Nearest Station': lineLayer
};

L.control.layers(baseMaps, overlayMaps, { collapsed: false }).addTo(map);

// ---------- 8. Legend ----------
var legend = L.control({ position: 'bottomright' });

legend.onAdd = function () {
  var div = L.DomUtil.create('div', 'legend');
  div.innerHTML =
    '<b>Weather stations</b><br>' +
    'Rain, Jun-Sep 2024 (% of normal)<br>' +
    '<i style="background:' + getStationColor(40) + '"></i> Under 50%<br>' +
    '<i style="background:' + getStationColor(60) + '"></i> 50 - 74%<br>' +
    '<i style="background:' + getStationColor(80) + '"></i> 75 - 99%<br>' +
    '<i style="background:' + getStationColor(100) + '"></i> 100% or more<br>' +
    '<b>Wildfires</b><br>' +
    '<i class="circle"></i> Size = acres burned';
  return div;
};

legend.addTo(map);

// ---------- 9. Analysis summary and table ----------
var totalAcres = 0;
var dryAcres = 0;
var dryFires = 0;

for (var r = 0; r < results.length; r++) {
  totalAcres += results[r].acres;
  if (results[r].percent < 60) {
    dryAcres += results[r].acres;
    dryFires++;
  }
}

var hotterCount = 0;
for (var h = 0; h < stations.length; h++) {
  if (stations[h].properties.tempDeparture > 0) {
    hotterCount++;
  }
}

var dryPercent = Math.round((dryAcres / totalAcres) * 100);

document.getElementById('summary').innerHTML =
  '<b>' + dryFires + ' of ' + results.length + ' fires</b> were nearest a station that got less than 60% of its normal summer rain. ' +
  'Those fires burned <b>' + formatNumber(dryAcres) + ' of ' + formatNumber(totalAcres) + ' acres (' + dryPercent + '%)</b>. ' +
  '<b>' + hotterCount + ' of ' + stations.length + '</b> stations were hotter than normal.';

// Fill the table (results are already sorted from largest to smallest fire)
var tbody = document.querySelector('#fireTable tbody');

for (var t = 0; t < results.length; t++) {
  var row = document.createElement('tr');
  row.innerHTML =
    '<td>' + results[t].name.replace(' Fire', '') + '</td>' +
    '<td>' + formatNumber(results[t].acres) + '</td>' +
    '<td>' + results[t].station + '</td>' +
    '<td>' + results[t].miles + '</td>' +
    '<td style="background:' + getStationColor(results[t].percent) + ';color:' + (results[t].percent < 75 ? 'white' : 'black') + '">' + results[t].percent + '%</td>';

  // Click a row to zoom to that fire and open its popup
  row.addEventListener('click', zoomToFire(results[t].marker));
  tbody.appendChild(row);
}

function zoomToFire(marker) {
  return function () {
    map.setView(marker.getLatLng(), 9);
    marker.openPopup();
  };
}
