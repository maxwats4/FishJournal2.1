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
    '13039000': {
      name: 'HENRYS LAKE NR LAKE ID',
      sitecode: '13039000',
      lat: 44.5972222,
      long: -111.353611
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
        name: "MADISON RIVER AT KIRBY RANCH NR CAMERON MT",
        sitecode: '06038800',
        lat: 44.88865556,
        long: -111.580886
      },
      '10068500': {
        name: "BEAR RIVER AT PESCADERO ID",
        sitecode: '10068500',
        lat: 43.2036,
        long: -112.3719
      },
      '10092700': {
        name: "BEAR RIVER AT IDAHO-UTAH STATE LINE",
        sitecode: '10092700',
        lat: 42.0129808,
        long: -111.92134
      },
      '10125500': {
        name: "MALAD RIVER AT WOODRUFF ID",
        sitecode: '10125500',
        lat: 42.0297222,
        long: -112.2295833
      },
      '12305000': {
        name: "KOOTENAI RIVER AT LEONIA, ID",
        sitecode: '12305000',
        lat: 48.6168833,
        long: -116.0491944
      },
      '12306500': {
        name: "MOYIE RIVER AT EASTPORT ID",
        sitecode: '12306500',
        lat: 48.99916667,
        long: -116.1797222
      },
      '12308000': {
        name: "KOOTENAI RIVER BEL MOYIE RIVER NR BONNERS FERRY ID",
        sitecode: '12308000',
        lat: 48.6993,
        long: -116.1962389
      },
      '12309500': {
        name: "KOOTENAI RIVER AT BONNERS FERRY ID",
        sitecode: '12309500',
        lat: 48.69805556,
        long: -116.3125
      },
      '12321500': {
        name: "BOUNDARY CREEK NR PORTHILL ID",
        sitecode: '12321500',
        lat: 48.9972222,
        long: -116.5691667
      },
      '12322000': {
        name: "KOOTENAI RIVER AT PORTHILL ID",
        sitecode: '12322000',
        lat: 48.99638889,
        long: -116.5075
      },
      '12391950': {
        name: "CLARK FORK RIVER BELOW CABINET GORGE DAM ID",
        sitecode: '12391950',
        lat: 48.08805556,
        long: -116.0727778
      },
      '12392155': {
        name: "LIGHTNING CREEK AT CLARK FORK ID",
        sitecode: '12392155',
        lat: 48.15166667,
        long: -116.1816667
      },
      '12392300': {
        name: "PACK RIVER NR COLBURN ID",
        sitecode: '12392300',
        lat: 48.42,
        long: -116.5019444
      },
      '12393501': {
        name: "PRIEST R OUTFLOW NR COOLIN, ID",
        sitecode: '12393501',
        lat: 48.4880333,
        long: -116.9085833
      },
      '12395000': {
        name: "PRIEST RIVER NEAR PRIEST RIVER, ID",
        sitecode: '12395000',
        lat: 48.20852,
        long: -116.9146429
      },
      '12395500': {
        name: "PEND OREILLE RIVER AT NEWPORT WA",
        sitecode: '12395500',
        lat: 48.1822222,
        long: -117.0341667
      },
      '12411000': {
        name: "NF COEUR D ALENE R AB SHOSHONE CK NR PRICHARD ID",
        sitecode: '12411000',
        lat: 47.7061111,
        long: -115.9791667
      },
      '12413000': {
        name: "NF COEUR D ALENE RIVER AT ENAVILLE ID",
        sitecode: '12413000',
        lat: 47.5722,
        long: -116.2528
      },
      '12413125': {
        name: "CANYON CREEK AB MOUTH AT WALLACE, ID",
        sitecode: '12413125',
        lat: 47.4725,
        long: -115.9147222
      },
      '12413130': {
        name: "NINEMILE CREEK AB MOUTH AT WALLACE, ID",
        sitecode: '12413130',
        lat: 47.4749,
        long: -115.9227
      },
      '12413131': {
        name: "SF COEUR D ALENE R ABV PLACER CR AT WALLACE ID",
        sitecode: '12413131',
        lat: 47.47518056,
        long: -115.9284444
      },
      '12413210': {
        name: "SF COEUR D ALENE AT ELIZABETH PARK NR KELLOGG ID",
        sitecode: '12413210',
        lat: 47.53138889,
        long: -116.0925
      },
      '12413355': {
        name: "SF COEUR D ALENE RIVER ABV PINE CR NR PINEHURST ID",
        sitecode: '12413355',
        lat: 47.5483333,
        long: -116.2197222
      },
      '12413470': {
        name: "SF COEUR D ALENE RIVER NR PINEHURST, ID",
        sitecode: '12413470',
        lat: 47.5513111,
        long: -116.2362917
      },
      '12413500': {
        name: "COEUR D ALENE RIVER NR CATALDO ID",
        sitecode: '12413500',
        lat: 47.5548222,
        long: -116.3246222
      },
      '12413860': {
        name: "COEUR D ALENE RIVER NR HARRISON ID",
        sitecode: '12413860',
        lat: 47.4786111,
        long: -116.7330556
      },
      '12413875': {
        name: "ST JOE RIVER AT RED IVES RANGER STATION, ID",
        sitecode: '12413875',
        lat: 47.05602858,
        long: -115.3532001
      },
      '12414500': {
        name: "ST JOE RIVER AT CALDER, ID",
        sitecode: '12414500',
        lat: 47.2744444,
        long: -116.1888889
      },
      '12414900': {
        name: "ST MARIES RIVER NR SANTA, ID",
        sitecode: '12414900',
        lat: 47.1761111,
        long: -116.4933333
      },
      '12415070': {
        name: "ST JOE RIVER AT SAINT MARIES, ID",
        sitecode: '12415070',
        lat: 47.3169444,
        long: -116.5547222
      },
      '12415135': {
        name: "ST JOE RIVER AT RAMSDELL NR ST MARIES ID",
        sitecode: '12415135',
        lat: 47.3522222,
        long: -116.6755556
      },
      '12415500': {
        name: "COEUR D ALENE LAKE AT COEUR D ALENE ID",
        sitecode: '12415500',
        lat: 47.6661111,
        long: -116.7705556
      },
      '12417650': {
        name: "SPOKANE RIVER BLW BLACKWELL NR COEUR D ALENE ID",
        sitecode: '12417650',
        lat: 47.6947222,
        long: -116.8152778
      },
      '12419000': {
        name: "SPOKANE RIVER NEAR POST FALLS, ID",
        sitecode: '12419000',
        lat: 47.70295737,
        long: -116.9779747
      },
      '13032500': {
        name: "SNAKE RIVER NR IRWIN ID",
        sitecode: '13032500',
        lat: 43.3508333,
        long: -111.2188889
      },
      '13037500': {
        name: "SNAKE RIVER NR HEISE ID",
        sitecode: '13037500',
        lat: 43.6125,
        long: -111.66
      },
      '13038000': {
        name: "DRY BED NR RIRIE ID",
        sitecode: '13038000',
        lat: 43.63888889,
        long: -111.716111
      },
      '13038500': {
        name: "SNAKE RIVER AT LORENZO ID",
        sitecode: '13038500',
        lat: 43.73527778,
        long: -111.8780556
      },
      '13039500': {
        name: "HENRYS FORK NR LAKE ID",
        sitecode: '13039500',
        lat: 44.5944444,
        long: -111.3497222
      },
      '13042500': {
        name: "HENRYS FORK NR ISLAND PARK ID",
        sitecode: '13042500',
        lat: 44.41666667,
        long: -111.3947222
      },
      '13046000': {
        name: "HENRYS FORK NR ASHTON ID",
        sitecode: '13046000',
        lat: 44.0697222,
        long: -111.5105556
      },
      '13046995': {
        name: "FALL RIVER AB YELLOWSTONE CANAL NR SQUIRREL ID",
        sitecode: '13046995',
        lat: 44.06194444,
        long: -111.1519444
      },
      '13047500': {
        name: "FALL RIVER NR SQUIRREL ID",
        sitecode: '13047500',
        lat: 44.0686111,
        long: -111.2413889
      },
      '13047600': {
        name: "FALL RIVER NR ASHTON ID",
        sitecode: '13047600',
        lat: 44.0561111,
        long: -111.358611
      },
      '13049500': {
        name: "FALL RIVER NR CHESTER ID",
        sitecode: '13049500',
        lat: 44.0183333,
        long: -111.5666667
      },
      '13050500': {
        name: "HENRYS FORK AT ST ANTHONY ID",
        sitecode: '13050500',
        lat: 43.96694444,
        long: -111.6725
      },
      '13052200': {
        name: "TETON RIVER AB SOUTH LEIGH CREEK NR DRIGGS ID",
        sitecode: '13052200',
        lat: 43.78194444,
        long: -111.2091667
      },
      '13055000': {
        name: "TETON RIVER NR ST ANTHONY ID",
        sitecode: '13055000',
        lat: 43.9272222,
        long: 43.9272222
      },
      '13055250': {
        name: "NF TETON RIVER NR SUGAR CITY ID",
        sitecode: '13055250',
        lat: 43.8875,
        long: -111.7577778
      },
      '13055340': {
        name: "SF TETON RIVER NEAR REXBURG ID",
        sitecode: '13055340',
        lat: 43.835,
        long: -111.7777778
      },
      '13056500': {
        name: "HENRYS FORK NR REXBURG ID",
        sitecode: '13056500',
        lat: 43.8258333,
        long: -111.905
      },
      '13057000': {
        name: "SNAKE RIVER NR MENAN ID",
        sitecode: '13057000',
        lat: 43.75277778,
        long: -111.9791667
      },
      '13057132': {
        name: "GREAT WESTERN SPILLBACK NR IDAHO FALLS ID",
        sitecode: '13057132',
        lat: 43.6008333,
        long: -112.0619444
      },
      '13057155': {
        name: "SNAKE RIVER AB EAGLE ROCK NR IDAHO FALLS ID",
        sitecode: '13057155',
        lat: 43.6047222,
        long: -112.058611
      },
      '13057300': {
        name: "GRAYS LAKE DIV TO BLACKFOOT R BASIN NR WAYAN, ID",
        sitecode: '13057300',
        lat: 43.00555556,
        long: -111.493611
      },
      '13057940': {
        name: "WILLOW CREEK BL TEX CREEK NR RIRIE ID",
        sitecode: '13057940',
        lat: 43.44194444,
        long: -111.7283333
      },
      '13058000': {
        name: "WILLOW CREEK NR RIRIE ID",
        sitecode: '13058000',
        lat: 43.5833333,
        long: -111.746111
      },
      '13058510': {
        name: "SAND CREEK NEAR UCON ID",
        sitecode: '13058510',
        lat: 43.57416667,
        long: -111.895
      },
      '13058520': {
        name: "WILLOW CREEK FLOODWAY CHANNEL NR UCON ID",
        sitecode: '13058520',
        lat: 43.57638889,
        long: -111.9130556
      },
      '13058529': {
        name: "WILLOW CR FLOODWAY CHANNEL AT MOUTH NR ID FALLS ID",
        sitecode: '13058529',
        lat: 43.5747222,
        long: -112.0480556
      },
      '13058530': {
        name: "WILLOW CREEK BLW FLOODWAY CHANNEL NR UCON ID",
        sitecode: '13058530',
        lat: 43.5758333,
        long: -111.9119444
      },
      '13060000': {
        name: "SNAKE RIVER NR SHELLEY ID",
        sitecode: '13060000',
        lat: 43.41305556,
        long: -112.135
      },
      '13062500': {
        name: "SNAKE RIVER AT BLACKFOOT ID",
        sitecode: '13062500',
        lat: 43.1975,
        long: -112.3691667
      },
      '13063000': {
        name: "BLACKFOOT RIVER AB RESERVOIR NR HENRY ID",
        sitecode: '13063000',
        lat: 42.81527778,
        long: -111.5066667
      },
      '13066000': {
        name: "BLACKFOOT RIVER NR SHELLEY ID",
        sitecode: '13066000',
        lat: 43.26277778,
        long: -112.0477778
      },
      '13068300': {
        name: "BLACKFOOT RIVER BELOW NORTH CANAL AT BLACKFOOT ID",
        sitecode: '13068300',
        lat: 43.1683333,
        long: -112.3347222
      },
      '13068495': {
        name: "BLACKFOOT RIVER BYPASS NR BLACKFOOT ID",
        sitecode: '13068495',
        lat: 43.1708333,
        long: -112.3877778
      },
      '13068500': {
        name: "BLACKFOOT RIVER NR BLACKFOOT ID",
        sitecode: '13068500',
        lat: 43.13055556,
        long: -112.4766667
      },
      '13068501': {
        name: "BLACKFOOT RIVER AND BYPASS CHANNEL NR BLACKFOOT ID",
        sitecode: '13068501',
        lat: 43.13047008,
        long: -112.4772036
      },
      '13069500': {
        name: "SNAKE RIVER NR BLACKFOOT ID",
        sitecode: '13069500',
        lat: 43.12527778,
        long: -112.5188889
      },
      '13071010': {
        name: "PORTNEUF R. ABV TOPONCE RD, NR CHESTERFIELD, ID",
        sitecode: '13071010',
        lat: 42.8697472,
        long: -111.934211
      },
      '13072400': {
        name: "PORTNEUF RIVER AT PEBBLE ID",
        sitecode: '13072400',
        lat: 42.7435361,
        long: -112.001636
      },
      '13073000': {
        name: "PORTNEUF RIVER AT TOPAZ ID",
        sitecode: '13073000',
        lat: 42.6247222,
        long: -112.0880556
      },
      '13074400': {
        name: "PORTNEUF RIVER AT INKOM, ID",
        sitecode: '13074400',
        lat: 42.7918333,
        long: -112.2520694
      },
      '13075000': {
        name: "MARSH CREEK NR MCCAMMON ID",
        sitecode: '13075000',
        lat: 42.63,
        long: -112.2255556
      },
      '13075500': {
        name: "PORTNEUF RIVER AT POCATELLO ID",
        sitecode: '13075500',
        lat: 42.87166667,
        long: -112.4680556
      },
      '13075910': {
        name: "PORTNEUF RIVER NR TYHEE ID",
        sitecode: '13075910',
        lat: 42.9447222,
        long: -112.5444444
      },
      '13075983': {
        name: "SPRING CREEK AT SHEEPSKIN RD NR FORT HALL ID",
        sitecode: '13075983',
        lat: 43.0425,
        long: -112.55
      },
      '13077000': {
        name: "SNAKE RIVER AT NEELEY ID",
        sitecode: '13077000',
        lat: 42.7675,
        long: -112.8794444
      },
      '13078000': {
        name: "RAFT RIVER AB ONEMILE CREEK NR MALTA ID",
        sitecode: '13078000',
        lat: 42.0636111,
        long: -113.4513889
      },
      '13079300': {
        name: "CASSIA CREEK BELOW BLACKSMITH CK, ID",
        sitecode: '13079300',
        lat: 42.27766944,
        long: -113.4963417
      },
      '13081500': {
        name: "SNAKE R NR MINIDOKA ID AT HOWELLS FERRY",
        sitecode: '13081500',
        lat: 42.67277778,
        long: -113.5002778
      },
      '13082500': {
        name: "GOOSE CREEK AB TRAPPER CREEK NR OAKLEY ID",
        sitecode: '13082500',
        lat: 42.1261111,
        long: -113.9355556
      },
      '13087900': {
        name: "MILNER LAKE AT MILNER DAM ID",
        sitecode: '13087900',
        lat: 42.52305556,
        long: -114.0133333
      },
      '13087995': {
        name: "SNAKE RIVER GAGING STATION AT MILNER ID",
        sitecode: '13087995',
        lat: 42.52805556,
        long: -114.0183333
      },
      '13089500': {
        name: "DEVILS WASHBOWL SPRING NR KIMBERLY 10S 18E",
        sitecode: '13089500',
        lat: 42.5897222,
        long: -114.3469444
      },
      '13090500': {
        name: "SNAKE RIVER NR TWIN FALLS ID",
        sitecode: '13090500',
        lat: 42.6061111,
        long: -114.4763889
      },
      '13092747': {
        name: "ROCK CREEK AB HWY 30/93 XING AT TWIN FALLS ID",
        sitecode: '13092747',
        lat: 42.5625,
        long: -114.4947222
      },
      '13093383': {
        name: "SNAKE RIVER AT PIGEON COVE NR TWIN FALLS, ID",
        sitecode: '13093383',
        lat: 42.6518222,
        long: -114.6287528
      },
      '13094000': {
        name: "SNAKE RIVER NR BUHL ID",
        sitecode: '13094000',
        lat: 42.6658333,
        long: -114.7122222
      },
      '13095175': {
        name: "BRIGGS SPRING AT HEAD NEAR BUHL ID",
        sitecode: '13095175',
        lat: 42.67388889,
        long: -114.8091667
      },
      '13095500': {
        name: "BOX CANYON SPRINGS NR WENDELL ID",
        sitecode: '13095500',
        lat: 42.7075,
        long: -114.8102778
      },
      '13108150': {
        name: "SALMON FALLS CREEK NR HAGERMAN ID",
        sitecode: '13108150',
        lat: 42.69638889,
        long: -114.8552778
      },
      '13112000': {
        name: "CAMAS CREEK AT CAMAS ID",
        sitecode: '13112000',
        lat: 44.00277778,
        long: -112.221111
      },
      '13116500': {
        name: "MEDICINE LODGE CREEK NR SMALL ID",
        sitecode: '13116500',
        lat: 44.25916667,
        long: -112.4102778
      },
      '13118700': {
        name: "LITTLE LOST RIVER BL WET CREEK NR HOWE ID",
        sitecode: '13118700',
        lat: 44.1386111,
        long: -113.2452778
      },
      '13118975': {
        name: "LITTLE LOST RIVER AB FLOOD DIVERSION NR HOWE ID",
        sitecode: '13118975',
        lat: 43.884825,
        long: -113.0970083
      },
      '13119000': {
        name: "LITTLE LOST RIVER NR HOWE, ID",
        sitecode: '13119000',
        lat: 43.87027778,
        long: -113.0880556
      },
      '13120000': {
        name: "NF BIG LOST RIVER AT WILD HORSE NR CHILLY ID",
        sitecode: '13120000',
        lat: 43.93277778,
        long: -114.1138889
      },
      '13120500': {
        name: "BIG LOST RIVER AT HOWELL RANCH NR CHILLY ID",
        sitecode: '13120500',
        lat: 43.9983333,
        long: -114.021111
      },
      '13122000': {
        name: "THOUSAND SPRINGS CREEK NR CHILLY ID",
        sitecode: '13122000',
        lat: 44.06666667,
        long: -113.8402778
      },
      '13124265': {
        name: "WARM SPRINGS CREEK BELOW DIVERSION NR MACKAY ID",
        sitecode: '13124265',
        lat: 43.98513889,
        long: -113.7990833
      },
      '13127000': {
        name: "BIG LOST RIVER BL MACKAY RES NR MACKAY ID",
        sitecode: '13127000',
        lat: 43.93916667,
        long: -113.6483333
      },
      '13128900': {
        name: "LOWER CEDAR CREEK AB DIVS NR MACKAY ID",
        sitecode: '13128900',
        lat: 43.96694444,
        long: -113.5777778
      },
      '13130300': {
        name: "BIG LOST RIVER NR LESLIE ID",
        sitecode: '13130300',
        lat: 43.859375	,
        long: -113.4666694
      },
      '13131000': {
        name: "ANTELOPE CREEK NR DARLINGTON, ID",
        sitecode: '13131000',
        lat: 43.7336111	,
        long: -113.5147222
      },
      '13132100': {
        name: "BIG LOST RIVER BELOW MOORE DIV NR MOORE ID",
        sitecode: '13132100',
        lat: 43.7843611	,
        long: -113.3608889
      },
      '13132373': {
        name: "BIG LOST RIVER AT ARCO AT SUNSET ROAD ID",
        sitecode: '13132373',
        lat: 43.63819444	,
        long: -113.3265
      },
      '13132500': {
        name: "BIG LOST RIVER NR ARCO ID",
        sitecode: '13132500',
        lat: 43.5822222	,
        long: -113.2705556
      },
      '13132513': {
        name: "INL DIVERSION AT HEAD NEAR ARCO ID",
        sitecode: '13132513',
        lat: 43.5136111	,
        long: -113.0838889
      },
      '13132520': {
        name: "BIG LOST RIVER BL INL DIV NEAR ARCO ID",
        sitecode: '13132520',
        lat: 43.5158333,
        long: -113.0819444
      },
      '13132535': {
        name: "BIG LOST R AT LINCOLN BLVD BRIDGE NR ATOMIC CITY",
        sitecode: '13132535',
        lat: 43.57440278,
        long: -112.9421167
      },
      '13132565': {
        name: "BIG LOST RIVER AB BIG LOST RIVER SINKS NR HOWE ID",
        sitecode: '13132565',
        lat: 43.7233333,
        long: -112.875
      },
      '13135500': {
        name: "BIG WOOD RIVER NR KETCHUM ID",
        sitecode: '13135500',
        lat: 43.78626389,
        long: -114.4250556
      },
      '13135520': {
        name: "NF BIG WOOD RIVER NR SAWTOOTH NRA HQ NR KETCHUM ID",
        sitecode: '13135520',
        lat: 43.7861111,
        long: -114.4191667
      },
      '13136550': {
        name: "WARM SPRINGS CR AT GATES RD NR KETCHUM, ID",
        sitecode: '13136550',
        lat: 43.6830972,
        long: -114.4055167
      },
      '13137300': {
        name: "TRAIL CREEK NR SUN VALLEY, ID",
        sitecode: '13137300',
        lat: 43.72319444,
        long: -114.3243806
      },
      '13137500': {
        name: "TRAIL CREEK AT KETCHUM ID",
        sitecode: '13137500',
        lat: 	43.67421667,
        long: -114.362261
      },
      '13138000': {
        name: "EAST FORK BIG WOOD RIVER AT GIMLET ID",
        sitecode: '13138000',
        lat: 43.60305556,
        long: -114.3302778
      },
      '13139510': {
        name: "BIG WOOD RIVER AT HAILEY ID TOTAL FLOW",
        sitecode: '13139510',
        lat: 43.5172222,
        long: -114.3216667
      },
      '13140335': {
        name: "BIG WOOD R AT S BROADFORD BRIDGE NR BELLEVUE, ID",
        sitecode: '13140335',
        lat: 43.4679833,
        long: -114.2677389
      },
      '13140800': {
        name: "BIG WOOD RIVER AT STANTON CROSSING NR BELLEVUE ID",
        sitecode: '13140800',
        lat: 43.32916667,
        long: -114.3191667
      },
      '13141500': {
        name: "CAMAS CREEK NR BLAINE ID",
        sitecode: '13141500',
        lat: 43.33277778,
        long: -114.5419444
      },
      '13142500': {
        name: "BIG WOOD RIVER BL MAGIC DAM NR RICHFIELD ID",
        sitecode: '13142500',
        lat: 43.24805556,
        long: -114.3566667
      },
      '13147900': {
        name: "LITTLE WOOD RIVER AB HIGH FIVE CREEK NR CAREY ID",
        sitecode: '13147900',
        lat: 43.49305556,
        long: -114.0572222
      },
      '13148500': {
        name: "LITTLE WOOD RIVER NR CAREY ID",
        sitecode: '13148500',
        lat: 43.39,
        long: -113.9997222
      },
      '13150430': {
        name: "SILVER CREEK AT SPORTSMAN ACCESS NR PICABO ID",
        sitecode: '13150430',
        lat: 43.3233611,
        long: -114.10835
      },
      '131504301': {
        name: "SILVER CREEK NEAR WEST CAMPGROUND",
        sitecode: '131504301',
        lat: 43.3251111,
        long: -114.106436
      },
      '13152500': {
        name: "MALAD RIVER NR GOODING ID",
        sitecode: '13152500',
        lat: 42.88638889,
        long: -114.8030556
      },
      '13154500': {
        name: "SNAKE RIVER AT KING HILL ID",
        sitecode: '13154500',
        lat: 43.0022222,
        long: -115.2025
      },
      '13159800': {
        name: "CANYON CR AT OREGON TRAIL XING NR MOUNTAIN HOME ID",
        sitecode: '13159800',
        lat: 43.2611111,
        long: -115.7025
      },
      '13161930': {
        name: "BIG JACKS CREEK AT PARKER TRAIL NR GRASMERE, ID",
        sitecode: '13161930',
        lat: 42.59388889,
        long: -115.9938889
      },
      '13168500': {
        name: "BRUNEAU RIVER NR HOT SPRING ID",
        sitecode: '13168500',
        lat: 42.7711111,
        long: -115.7202778
      },
      '13172500': {
        name: "SNAKE RIVER NR MURPHY ID",
        sitecode: '13172500',
        lat: 43.25481389,
        long: -116.3906389
      },
      '13176400': {
        name: "EF OWYHEE RIVER AT CRUTCHER CROSSING, ID",
        sitecode: '13176400',
        lat: 42.26136944,
        long: -116.8684417
      },
      '13185000': {
        name: "BOISE RIVER NR TWIN SPRINGS ID",
        sitecode: '13185000',
        lat: 43.66805556,
        long: -115.7252778
      },
      '13186000': {
        name: "SF BOISE RIVER NR FEATHERVILLE ID",
        sitecode: '13186000',
        lat: 43.4958333,
        long: -115.3080556
      },
      '13190500': {
        name: "SF BOISE RIVER AT ANDERSON RANCH DAM ID",
        sitecode: '13190500',
        lat: 43.3436111,
        long: -115.4775
      },
      '13200000': {
        name: "MORES CREEK AB ROBIE CREEK NR ARROWROCK DAM ID",
        sitecode: '13200000',
        lat: 43.64805556,
        long: -115.9897222
      },
      '13201500': {
        name: "LUCKY PEAK LAKE NR BOISE ID",
        sitecode: '13201500',
        lat: 43.52555556,
        long: -116.0552778
      },
      '13206000': {
        name: "BOISE RIVER AT GLENWOOD BRIDGE NR BOISE ID",
        sitecode: '13206000',
        lat: 43.66055556,
        long: -116.2791667
      },
      '13206305': {
        name: "BOISE RIVER SOUTH CHANNEL AT EAGLE ID",
        sitecode: '13206305',
        lat: 43.67527778,
        long: -116.353611
      },
      '13206400': {
        name: "EAGLE DRAIN AT EAGLE, ID",
        sitecode: '13206400',
        lat: 43.69166667,
        long: -116.3563889
      },
      '13210045': {
        name: "BOISE R. NEAR MIDDLETON, ID",
        sitecode: '13210045',
        lat: 43.68175556,
        long: -116.5587056
      },
      '13210810': {
        name: "FIFTEENMILE CREEK NR MIDLAND BLVD NR MIDDLETON, ID",
        sitecode: '13210810',
        lat: 43.67405,
        long: -116.585411
      },
      '13210824': {
        name: "N MIDDLETON DRAIN MILL SLOUGH AT MIDDLETON ID",
        sitecode: '13210824',
        lat: 43.70655,
        long: -116.6181917
      },
      '13210831': {
        name: "SOUTH MIDDLETON DRAIN AT MIDDLETON ID",
        sitecode: '13210831',
        lat: 43.70210556,
        long: -116.6181917
      },
      '13210980': {
        name: "MASON CREEK AT CALDWELL ID",
        sitecode: '13210980',
        lat: 43.68321667,
        long: -116.6631917
      },
      '13210986': {
        name: "W HARTLEY GULCH NR CALDWELL ID",
        sitecode: '13210986',
        lat: 43.69960556,
        long: -116.6856944
      },
      '132109867': {
        name: "EAST HARTLEY ABV BACKWATER NR CALDWELL, ID",
        sitecode: '132109867',
        lat: 43.70030556,
        long: -116.6731778
      },
      '13211205': {
        name: "BOISE RIVER AT CALDWELL, ID",
        sitecode: '13211205',
        lat: 43.67735278,
        long: -116.7011306
      },
      '13212549': {
        name: "CONWAY GULCH BELOW 1ST ST AT NOTUS, ID",
        sitecode: '13212549',
        lat: 43.72803056,
        long: -116.7997222
      },
      '13212890': {
        name: "DIXIE DRAIN NR WILDER ID",
        sitecode: '13212890',
        lat: 43.73071667,
        long: -116.8893167
      },
      '13213000': {
        name: "BOISE RIVER NR PARMA ID",
        sitecode: '13213000',
        lat: 43.78166667,
        long: -116.9727778
      },
      '13213072': {
        name: "SAND RUN GULCH NR PARMA ID",
        sitecode: '13213072',
        lat: 43.79960556,
        long: -116.975711
      },
      '13213100': {
        name: "SNAKE RIVER AT NYSSA OR",
        sitecode: '13213100',
        lat: 43.8761111,
        long: -116.9825
      },
      '13235000': {
        name: "SOUTH FORK PAYETTE RIVER AT LOWMAN, ID",
        sitecode: '13235000',
        lat: 44.08527778,
        long: -115.6222222
      },
      '13236500': {
        name: "DEADWOOD RIVER BL DEADWOOD RES NR LOWMAN ID",
        sitecode: '13236500',
        lat: 44.29194444,
        long: -115.6419444
      },
      '13237920': {
        name: "MIDDLE FORK PAYETTE RIVER NR CROUCH ID",
        sitecode: '13237920',
        lat: 44.1086111,
        long: -115.9822222
      },
      '13239000': {
        name: "NF PAYETTE RIVER AT MCCALL ID",
        sitecode: '13239000',
        lat: 44.9072222,
        long: -116.1191667
      },
      '13240000': {
        name: "LAKE FORK PAYETTE RIVER AB JUMBO CR NR MCCALL ID",
        sitecode: '13240000',
        lat: 44.9136111,
        long: -115.9972222
      },
      '13246000': {
        name: "NF PAYETTE RIVER NR BANKS ID",
        sitecode: '13246000',
        lat: 44.11416667,
        long: -116.1072222
      },
      '13247500': {
        name: "PAYETTE RIVER NR HORSESHOE BEND ID",
        sitecode: '13247500',
        lat: 43.9433333,
        long: -116.1966667
      },
      '13249500': {
        name: "PAYETTE RIVER NR EMMETT ID",
        sitecode: '13249500',
        lat: 43.93055556,
        long: -116.4427778
      },
      '13250000': {
        name: "PAYETTE RIVER NR LETHA ID",
        sitecode: '13250000',
        lat: 43.8961111,
        long: -116.6277778
      },
      '13251000': {
        name: "PAYETTE RIVER NR PAYETTE ID",
        sitecode: '13251000',
        lat: 44.0422222,
        long: -116.9252778
      },
      '13258500': {
        name: "WEISER RIVER NR CAMBRIDGE ID",
        sitecode: '13258500',
        lat: 44.5794444,
        long: -116.6433333
      },
      '13265500': {
        name: "CRANE CREEK AT MOUTH NR WEISER ID",
        sitecode: '13265500',
        lat: 44.2918111,
        long: -116.7826306
      },
      '13266000': {
        name: "WEISER RIVER NR WEISER ID",
        sitecode: '13266000',
        lat: 44.27,
        long: -116.7722222
      },
      '13269000': {
        name: "SNAKE RIVER AT WEISER ID",
        sitecode: '13269000',
        lat: 44.24555556,
        long: -116.9808333
      },
      '13295000': {
        name: "VALLEY CREEK AT STANLEY ID",
        sitecode: '13295000',
        lat: 44.2225,
        long: -114.931111
      },
      '13296000': {
        name: "YANKEE FORK SALMON RIVER NR CLAYTON ID",
        sitecode: '13296000',
        lat: 44.27888889,
        long: -114.7338889
      },
      '13296500': {
        name: "SALMON RIVER BL YANKEE FORK NR CLAYTON ID",
        sitecode: '13296500',
        lat: 44.2683333,
        long: -114.7327778
      },
      '13297330': {
        name: "THOMPSON CREEK NR CLAYTON ID",
        sitecode: '13297330',
        lat: 44.27027778,
        long: -114.5166667
      },
      '13297350': {
        name: "BRUNO CREEK NR CLAYTON ID",
        sitecode: '13297350',
        lat: 44.2975,
        long: -114.4813889
      },
      '13297355': {
        name: "Paasasikwana Naokwaide bl Bruno Ck",
        sitecode: '13297355',
        lat: 44.2908333,
        long: -114.4716667
      },
      '13297380': {
        name: "SALMON RIVER AB EAST FORK NR CLAYTON ID",
        sitecode: '13297380',
        lat: 44.26664167,
        long: -114.3267583
      },
      '13302005': {
        name: "PAHSIMEROI RIVER AT ELLIS ID",
        sitecode: '13302005',
        lat: 44.69166667,
        long: -114.0469444
      },
      '13302500': {
        name: "SALMON RIVER AT SALMON ID",
        sitecode: '13302500',
        lat: 45.1836111,
        long: -113.8952778
      },
      '13304050': {
        name: "BIT TIMBER CREEK ABV MOUTH AT LEODORE, ID",
        sitecode: '13304050',
        lat: 44.68879167,
        long: -113.3704056
      },
      '13304700': {
        name: "Lemhi River near McFarland, ID",
        sitecode: '13304700',
        lat: 44.80256667,
        long: -113.5658778
      },
      '13305000': {
        name: "LEMHI RIVER NR LEMHI ID",
        sitecode: '13305000',
        lat: 44.94,
        long: -113.6391667
      },
      '13305310': {
        name: "LEMHI RIVER BELOW L5 DIVERSION NEAR SALMON, ID",
        sitecode: '13305310',
        lat: 45.13277778,
        long: -113.7988889
      },
      '13306370': {
        name: "PANTHER CREEK AT COBALT, ID",
        sitecode: '13306370',
        lat: 45.0897222,
        long: -114.2366667
      },
      '13306385': {
        name: "NAPIAS CREEK BELOW ARNETT CREEK NEAR LEESBURG, ID",
        sitecode: '13306385',
        lat: 45.20555556,
        long: -114.1338889
      },
      '13307000': {
        name: "SALMON RIVER NR SHOUP ID",
        sitecode: '13307000',
        lat: 45.3225,
        long: -114.44
      },
      '13309220': {
        name: "MF SALMON RIVER AT MF LODGE NR YELLOW PINE ID",
        sitecode: '13309220',
        lat: 44.7215194,
        long: -115.0143472
      },
      '13310199': {
        name: "MF SALMON RIVER AT MOUTH NR SHOUP, ID",
        sitecode: '13310199',
        lat: 45.2936111,
        long: -114.5963889
      },
      '13310700': {
        name: "SF SALMON RIVER NR KRASSEL RANGER STATION ID",
        sitecode: '13310700',
        lat: 44.9869444,
        long: -115.725
      },
      '13311000': {
        name: "EF OF SF SALMON RIVER AT STIBNITE, ID",
        sitecode: '13311000',
        lat: 44.9057222,
        long: -115.3295
      },
      '13311250': {
        name: "EFSF SALMON R ABV SUGAR CRK NR STIBNITE, ID",
        sitecode: '13311250',
        lat: 44.93477778,
        long: -115.3366944
      },
      '13311450': {
        name: "SUGAR CREEK NR STIBNITE, ID",
        sitecode: '13311450',
        lat: 44.9363611,
        long: -115.3372222
      },
      '13313000': {
        name: "JOHNSON CREEK AT YELLOW PINE ID",
        sitecode: '13313000',
        lat: 44.96166667,
        long: -115.5
      },
      '13316500': {
        name: "LITTLE SALMON RIVER AT RIGGINS ID",
        sitecode: '13316500',
        lat: 45.41305556,
        long: -116.3252778
      },
      '13317000': {
        name: "SALMON RIVER AT WHITE BIRD ID",
        sitecode: '13317000',
        lat: 45.75027778,
        long: -116.3238889
      },
      '13317660': {
        name: "SNAKE RIVER AT McDUFF RAPIDS AT CHINA GARDEN ID",
        sitecode: '13317660',
        lat: 46.00305556,
        long: -116.9169444
      },
      '13336500': {
        name: "SELWAY RIVER NR LOWELL ID",
        sitecode: '13336500',
        lat: 46.08666667,
        long: -115.5138889
      },
      '13337000': {
        name: "LOCHSA RIVER NR LOWELL ID",
        sitecode: '13337000',
        lat: 46.1508333,
        long: -115.5872222
      },
      '13337095': {
        name: "UPPER CLEAR CREEK NEAR KOOSKIA, ID",
        sitecode: '13337095',
        lat: 46.0470361,
        long: -115.866161
      },
      '13338500': {
        name: "SF CLEARWATER RIVER AT STITES ID",
        sitecode: '13338500',
        lat: 46.08638889,
        long: -115.9766667
      },
      '13338950': {
        name: "LAWYER CREEK AT KAMIAH ID",
        sitecode: '13338950',
        lat: 46.2114194,
        long: -116.0697972
      },
      '13339500': {
        name: "LOLO CREEK NR GREER ID",
        sitecode: '13339500',
        lat: 46.37166667,
        long: -116.1625
      },
      '13340000': {
        name: "CLEARWATER RIVER AT OROFINO ID",
        sitecode: '13340000',
        lat: 46.4783333,
        long: -116.2575
      },
      '13340600': {
        name: "NF CLEARWATER RIVER NR CANYON RANGER STATION ID",
        sitecode: '13340600',
        lat: 46.84055556,
        long: -115.621111
      },
      '13341050': {
        name: "CLEARWATER RIVER NR PECK ID",
        sitecode: '13341050',
        lat: 46.50027778,
        long: -116.3925
      },
      '13341140': {
        name: "BIG CANYON CREEK NR PECK ID",
        sitecode: '13341140',
        lat: 46.4679333,
        long: -116.4183028
      },
      '13341570': {
        name: "POTLATCH RIVER BEL LITTLE POTLATCH CR NR SPALDING",
        sitecode: '13341570',
        lat: 46.4986111,
        long: -116.7619444
      },
      '13342450': {
        name: "LAPWAI CREEK NR LAPWAI, ID",
        sitecode: '13342450',
        lat: 46.42638889,
        long: -116.806111
      },
      '13342500': {
        name: "CLEARWATER RIVER AT SPALDING ID",
        sitecode: '13342500',
        lat: 46.4483333,
        long: -116.8275
      },
      '13345000': {
        name: "PALOUSE RIVER NR POTLATCH, ID",
        sitecode: '13345000',
        lat: 46.91527778,
        long: -116.951111
      },
      '13346800': {
        name: "PARADISE CR AT UNIVERSITY OF IDAHO AT MOSCOW ID",
        sitecode: '13346800',
        lat: 46.7319444,
        long: -117.0241667
      },
      // Utah rivers
      '10109000': {
        name: "LOGAN RIVER ABOVE STATE DAM, NEAR LOGAN, UT",
        sitecode: '10109000',
        lat: 41.74355,
        long: -111.7839806
      },
      '10154200': {
        name: "PROVO RIVER NEAR WOODLAND, UT",
        sitecode: '10154200',
        lat: 40.5577278,
        long: -111.1687838
      },
      '10155000': {
        name: "PROVO RIVER NEAR HAILSTONE, UT",
        sitecode: '10155000',
        lat: 40.6051111,
        long: -111.3145278
      },
      '10155200': {
        name: "PROVO RIV AT RIV ROAD BRIDGE NR HEBER CITY, UT",
        sitecode: '10155200',
        lat: 40.55439805,
        long: -111.4332426
      },
      '10155500': {
        name: "PROVO RIVER NEAR CHARLESTON, UT",
        sitecode: '10155500',
        lat: 40.4841221,
        long: -111.4635198
      },
      '10163000': {
        name: "PROVO RIVER AT PROVO, UT",
        sitecode: '10163000',
        lat: 40.23925556,
        long: -111.7111944
      },
      
      
  };

// Maybe add a sorting function to sort all the 

export default waterLocations;
  