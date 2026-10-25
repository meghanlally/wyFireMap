// JSON objects for the two datasets used on the map.
// Both use the GeoJSON format (coordinates are [longitude, latitude]).

// Dataset 1: large Wyoming wildfires (5,000+ acres) discovered June-September 2024
var firesData = {
  "type": "FeatureCollection",
  "name": "Wyoming Large Wildfires, June-September 2024",
  "source": "NIFC WFIGS Incident Locations",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "name": "Remington Fire",
        "acres": 196368,
        "discovered": "2024-08-22",
        "county": "Sheridan",
        "cause": "Undetermined"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -106.0712,
          44.9416
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "House Draw Fire",
        "acres": 174547,
        "discovered": "2024-08-21",
        "county": "Johnson",
        "cause": "Natural"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -106.5204,
          44.1303
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Elk Fire",
        "acres": 98352,
        "discovered": "2024-09-27",
        "county": "Sheridan",
        "cause": "Natural"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -107.5686,
          44.8981
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Pack Trail Fire",
        "acres": 89930,
        "discovered": "2024-08-16",
        "county": "Teton",
        "cause": "Natural"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -110.1468,
          43.5941
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Flat Rock Fire",
        "acres": 52421,
        "discovered": "2024-08-22",
        "county": "Campbell",
        "cause": "Undetermined"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -105.5794,
          44.3538
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Short Draw Fire",
        "acres": 40000,
        "discovered": "2024-09-11",
        "county": "Campbell",
        "cause": "Undetermined"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -105.6171,
          44.9552
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Pleasant Valley Fire",
        "acres": 28984,
        "discovered": "2024-07-30",
        "county": "Platte",
        "cause": "Undetermined"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -104.7253,
          42.3082
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Fish Creek Fire",
        "acres": 26313,
        "discovered": "2024-08-16",
        "county": "Teton",
        "cause": "Natural"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -110.1454,
          43.6745
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Constitution Fire",
        "acres": 24630,
        "discovered": "2024-08-21",
        "county": "Campbell",
        "cause": "Undetermined"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -105.4866,
          44.5355
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Wildcat Creek Fire",
        "acres": 18775,
        "discovered": "2024-08-02",
        "county": "Campbell",
        "cause": "Undetermined"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -105.1093,
          43.5413
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Badger Fire",
        "acres": 8028,
        "discovered": "2024-07-24",
        "county": "Sheridan",
        "cause": "Undetermined"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -106.7651,
          44.9637
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Deer Creek Fire",
        "acres": 6699,
        "discovered": "2024-08-03",
        "county": "Johnson",
        "cause": "Undetermined"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -106.0403,
          44.5397
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Road 22 Fire",
        "acres": 5576,
        "discovered": "2024-07-14",
        "county": "Goshen",
        "cause": "Undetermined"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -104.3682,
          41.71
        ]
      }
    }
  ]
};

// Dataset 2: Wyoming weather stations, rain and temperature for June 1 - September 30, 2024
// precip and normalPrecip are in inches; temperatures are in degrees F
var stationsData = {
  "type": "FeatureCollection",
  "name": "Wyoming Weather Stations, Summer 2024 (June 1 - September 30)",
  "source": "NOAA via RCC-ACIS",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "name": "Casper",
        "station": "Casper-Natrona County Ap",
        "elevation": 5319,
        "precip": 1.96,
        "normalPrecip": 4.27,
        "percentOfNormal": 46,
        "avgHighTemp": 86.6,
        "tempDeparture": 3.8,
        "missingDays": 0
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -106.4736,
          42.8978
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Cheyenne",
        "station": "Cheyenne Wsfo Ap",
        "elevation": 6118,
        "precip": 5.56,
        "normalPrecip": 7.26,
        "percentOfNormal": 77,
        "avgHighTemp": 83.1,
        "tempDeparture": 4.0,
        "missingDays": 0
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -104.8081,
          41.1579
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Laramie",
        "station": "Laramie Ap",
        "elevation": 7273,
        "precip": 5.21,
        "normalPrecip": 5.08,
        "percentOfNormal": 103,
        "avgHighTemp": 82.1,
        "tempDeparture": 5.9,
        "missingDays": 0
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -105.6729,
          41.3165
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Riverton",
        "station": "Riverton Regional Ap",
        "elevation": 5447,
        "precip": 0.86,
        "normalPrecip": 2.67,
        "percentOfNormal": 32,
        "avgHighTemp": 84.9,
        "tempDeparture": 3.3,
        "missingDays": 0
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -108.4471,
          43.0622
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Sheridan",
        "station": "Sheridan Airport",
        "elevation": 3971,
        "precip": 2.75,
        "normalPrecip": 5.23,
        "percentOfNormal": 53,
        "avgHighTemp": 87.0,
        "tempDeparture": 5.1,
        "missingDays": 0
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -106.9741,
          44.7603
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Gillette",
        "station": "Gillette Campbell County Ap",
        "elevation": 4364,
        "precip": 1.9,
        "normalPrecip": 5.5,
        "percentOfNormal": 35,
        "avgHighTemp": 86.4,
        "tempDeparture": 5.2,
        "missingDays": 5
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -105.5416,
          44.3398
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Rock Springs",
        "station": "Rock Springs Ap",
        "elevation": 6758,
        "precip": 1.75,
        "normalPrecip": 2.52,
        "percentOfNormal": 69,
        "avgHighTemp": 82.1,
        "tempDeparture": 4.3,
        "missingDays": 0
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -109.0529,
          41.5947
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Cody",
        "station": "Cody",
        "elevation": 5280,
        "precip": 2.89,
        "normalPrecip": 4.56,
        "percentOfNormal": 63,
        "avgHighTemp": 82.7,
        "tempDeparture": 4.3,
        "missingDays": 0
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -109.1112,
          44.5021
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Worland",
        "station": "Worland Municipal Ap",
        "elevation": 4195,
        "precip": 1.82,
        "normalPrecip": 2.94,
        "percentOfNormal": 62,
        "avgHighTemp": 86.2,
        "tempDeparture": 2.2,
        "missingDays": 0
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -107.9502,
          43.9654
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Lander",
        "station": "Lander Airport",
        "elevation": 5572,
        "precip": 1.56,
        "normalPrecip": 3.17,
        "percentOfNormal": 49,
        "avgHighTemp": 85.1,
        "tempDeparture": 3.5,
        "missingDays": 0
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -108.726,
          42.8154
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Jackson",
        "station": "Jackson",
        "elevation": 6210,
        "precip": 5.06,
        "normalPrecip": 5.44,
        "percentOfNormal": 93,
        "avgHighTemp": 76.1,
        "tempDeparture": 2.3,
        "missingDays": 2
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -110.7615,
          43.4863
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Douglas",
        "station": "Converse County Airport Asos",
        "elevation": 4931,
        "precip": 2.3,
        "normalPrecip": 4.49,
        "percentOfNormal": 51,
        "avgHighTemp": 87.3,
        "tempDeparture": 4.1,
        "missingDays": 0
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -105.3805,
          42.796
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Big Piney",
        "station": "Big Piney Marbleton Ap",
        "elevation": 6949,
        "precip": 1.22,
        "normalPrecip": 3.41,
        "percentOfNormal": 36,
        "avgHighTemp": 79.4,
        "tempDeparture": 3.4,
        "missingDays": 0
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -110.1098,
          42.578
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Torrington",
        "station": "Torrington Municipal Ap",
        "elevation": 4194,
        "precip": 3.36,
        "normalPrecip": 5.92,
        "percentOfNormal": 57,
        "avgHighTemp": 89.9,
        "tempDeparture": 4.7,
        "missingDays": 0
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -104.1585,
          42.0613
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Buffalo",
        "station": "Buffalo Johnson County Ap",
        "elevation": 4934,
        "precip": 3.22,
        "normalPrecip": 5.62,
        "percentOfNormal": 57,
        "avgHighTemp": 82.4,
        "tempDeparture": 3.8,
        "missingDays": 0
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -106.7195,
          44.3812
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Evanston",
        "station": "Evanston Uinta Co Burns Field",
        "elevation": 7139,
        "precip": 2.61,
        "normalPrecip": 3.45,
        "percentOfNormal": 76,
        "avgHighTemp": 81.1,
        "tempDeparture": 5.1,
        "missingDays": 1
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -111.0306,
          41.2727
        ]
      }
    }
  ]
};
