// this is the file to store the map of all the sitecodes for the Idaho fishing rivers

// website for sitecodes for rivers - https://waterdata.usgs.gov/nwis/current/?type=flow&group_key=state_cd&site_no_name_select=siteno
// website for sitecodes for lakes - https://waterdata.usgs.gov/nwis/current/?type=lake&group_key=state_cd&site_no_name_select=siteno

// should be able to just export the datastructure by doing the export default myMap;

const waterLocations = {
    '12393000': { // sidecode
      name: 'PRIEST LAKE AT OUTLET NR COOLIN ID',
      sitecode: '12393000',
      lat: 48.5075,
      long: -116.8869444
    },
    '12415500': {
      name: 'COEUR D ALENE LAKE AT COEUR D ALENE ID',
      sitecode: '12415500',
      lat: 47.6661111,
      long: -116.7705556
    },
    '13039000': {
      name: 'HENRYS LAKE NR LAKE ID',
      sitecode: '13039000',
      lat: 44.5972222,
      long: -111.353611
    },
    '13087900': {
      name: 'MILNER LAKE AT MILNER DAM ID',
      sitecode: '13087900',
      lat: 42.52305556,
      long: -114.0133333
    },
    '13106500': {
      name: 'SALMON RIVER CANAL CO RES NR ROGERSON ID',
      sitecode: '13106500',
      lat: 42.2122222,
      long: -114.7333333
    },
    '13115000': {
      name: 'MUD LAKE NR TERRETON ID',
      sitecode: '13115000',
      lat: 43.8897222,
      long: -112.3580556
    },
    '13126000': {
      name: 'MACKAY RES NR MACKAY ID',
      sitecode: '13126000',
      lat: 43.95138889,
      long: -113.675
    },
    '13148200': {
      name: 'LITTLE WOOD RES NR CAREY ID',
      sitecode: '13148200',
      lat: 43.42527778,
      long: -114.0272222
    },
    '13171500': {
      name: 'CJ STRIKE RES NR GRAND VIEW ID',
      sitecode: '13171500',
      lat: 42.9436111,
      long: -115.975
    },
    '13201500': {
      name: 'LUCKY PEAK LAKE NR BOISE ID',
      sitecode: '13201500',
      lat: 43.52555556,
      long: -116.0552778
    },
    '13238500': {
        name: 'PAYETTE LAKE AT MCCALL ID',
        sitecode: '13238500',
        lat: 44.9122222,
        long: -116.1191667
      },
    // River locations
    '06038801': {
        name: 'BEAR RIVER AT BORDER, WY',
        sitecode: '06038801',
        lat: 42.21104338,
        long: -111.0538022
      },
      '06038800': {
        name: "Madison River at Kirby Ranch nr Cameron MT",
        sitecode: '06038800',
        lat: 44.88865556,
        long: -111.580886
      },
  };


export default waterLocations;
  