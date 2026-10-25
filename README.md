# Wyoming Wildfires and Summer Weather, 2024

An interactive Leaflet web map that compares Wyoming's largest 2024 wildfires with summer rain and temperature at nearby weather stations.

## Files

| File | What it does |
|---|---|
| `index.html` | Page layout: side panel (summary and table) and the map |
| `css/style.css` | Styles for the panel, table, legend, and square station markers |
| `js/data.js` | The two datasets as JSON (GeoJSON) objects: `firesData` and `stationsData` |
| `js/main.js` | Builds the map, markers, popups, nearest-station analysis, layer control, and legend |

## Datasets

**Dataset 1: Wyoming large wildfires, June–September 2024.** This dataset has the 13 Wyoming wildfires that started between June 1 and September 30, 2024 and burned at least 5,000 acres. Each point is the fire's starting location and includes the fire name, acres burned, date discovered, county, and cause. It comes from the National Interagency Fire Center's WFIGS Incident Locations service. It matters because 2024 was a severe fire year in Wyoming. Fires like Remington (196,368 acres) and House Draw (174,547 acres) burned grazing land, homes, and livestock forage in the northeast part of the state.

**Dataset 2: Wyoming weather stations, summer 2024.** This dataset has 16 NOAA weather stations, mostly at town airports, across Wyoming. For June 1–September 30, 2024, each station lists total rain, its normal rain (1991–2020 average), rain as a percent of normal, the average daily high temperature, and how far that high was above normal. The data comes from NOAA station records through the RCC-ACIS data service. The two datasets are related because hot, dry weather dries out grass and timber, which lets fires start more easily and spread farther. Comparing the fire locations with nearby station weather shows whether the biggest fires happened where summer was driest.

## Analysis

**Approach.** I used a nearest-neighbor analysis. For each fire, the code loops through every weather station and uses Leaflet's `map.distance()` to find the closest one. It then draws a dashed line between them and adds that station's rain and temperature to the fire's popup. The fire circles are sized by acres burned (proportional symbols), and the station squares are colored by percent of normal rain (graduated colors), so both datasets can be compared on one map. The side panel adds up the acres burned near dry stations (under 60% of normal rain) and lists every fire with its nearest station.

**Findings.** 11 of the 13 large fires were nearest a station that got less than 60% of its normal summer rain. Those fires burned 654,380 of 770,623 acres, or 85% of the total. All 16 stations were hotter than normal, by 2.2 to 5.9 °F on average. The driest area was the Powder River Basin around Gillette (35% of normal), where Flat Rock, Short Draw, Constitution, and Deer Creek burned. The two exceptions were Pack Trail and Fish Creek near Jackson, where rain was close to normal (93%). Those were lightning-caused fires in mountain timber, which can burn even in a near-normal year. Limits: the nearest station is 2 to 53 miles from each fire, so it only gives a general picture of local weather, and a match between dry weather and fires does not prove the weather caused them. Wind, fuel type, and how each fire started also matter.

## Layer controls

- **Basemaps:** Street Map (OpenStreetMap), Satellite (Esri World Imagery), Topographic (Esri World Topo Map)
- **Overlays:** Wildfires (2024), Weather Stations, Fire to Nearest Station lines
- Click a row in the side table to zoom to that fire and open its popup.

## Data sources

- National Interagency Fire Center, WFIGS Incident Locations: https://data-nifc.opendata.arcgis.com/
- NOAA station data and 1991–2020 normals through RCC-ACIS: https://www.rcc-acis.org/
- Note: the Gillette station is missing 5 days of rain data, Jackson 2 days, and Evanston 1 day, so their totals may be slightly low.

## Publishing on GitHub Pages

1. Create a new public repository on GitHub (for example, `finalWebMap`).
2. Upload `index.html`, `README.md`, and the `css` and `js` folders, keeping the folder structure.
3. Go to **Settings > Pages**, set the source to **Deploy from a branch**, then choose **main** and **/ (root)**, and save.
4. After a minute or two, the map will be live at `https://<your-username>.github.io/finalWebMap/`.
