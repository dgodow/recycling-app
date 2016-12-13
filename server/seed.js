var Promise = require('bluebird');
var db = require('./models').db;
var model = require('./models').RecyclingBins;

var data = [
{
"address": "E 227 St/Bronx River Pkway",
"borough": "Bronx",
"latitude": "40.890848989",
"longitude": "-73.864223918",
"park_site_name": "227th St. Plgd",
"site_type": "Subproperty"
},
{
"address": "Allerton Ave & Moshulu Pkway",
"borough": "Bronx",
"latitude": "40.8488907878",
"longitude": "-73.8771283938",
"park_site_name": "Allerton Ballfields",
"site_type": "Subproperty"
},
{
"address": "Arthur Ave & 187 St",
"borough": "Bronx",
"latitude": "40.85557",
"longitude": "-73.887564999999995",
"park_site_name": "Arthur Ave & E 187 St",
"site_type": "Outdoor"
},
{
"address": "895 Shore Road, Pelham Bay Park",
"borough": "Bronx",
"latitude": "40.871864",
"longitude": "-73.805549",
"park_site_name": "Barstow Mansion",
"site_type": "Outdoor "
},
{
"address": "2001-2017 Bronx Park E",
"borough": "Bronx",
"latitude": "40.851889",
"longitude": "-73.868549",
"park_site_name": "Bradley Playground",
"site_type": "Subproperty"
},
{
"address": "Visitors Service Center",
"borough": "Bronx",
"latitude": "40.861525999999998",
"longitude": "-73.880658999999994",
"park_site_name": "Bronx Botanical Gardens",
"site_type": "Outdoor"
},
{
"address": "Visitors Service Center",
"borough": "Bronx",
"latitude": "40.860754999999997",
"longitude": "-73.880422999999993",
"park_site_name": "Bronx Botanical Gardens",
"site_type": "Outdoor"
},
{
"address": "Visitors Service Center",
"borough": "Bronx",
"latitude": "40.859644000000003",
"longitude": "-73.880471999999997",
"park_site_name": "Bronx Botanical Gardens",
"site_type": "Outdoor"
},
{
"address": "Visitors Service Center",
"borough": "Bronx",
"latitude": "40.862602000000003",
"longitude": "-73.880171000000004",
"park_site_name": "Bronx Botanical Gardens",
"site_type": "Outdoor"
},
{
"address": "161 ST/Grand Concourse",
"borough": "Bronx",
"latitude": "40.826939",
"longitude": "-73.922314",
"park_site_name": "Bronx County Courthouse",
"site_type": "Outdoor"
},
{
"address": "161 ST/Grand Concourse",
"borough": "Bronx",
"latitude": "40.826627",
"longitude": "-73.922447",
"park_site_name": "Bronx County Courthouse",
"site_type": "Outdoor"
},
{
"address": "Lydig Ave & Bronx Park E",
"borough": "Bronx",
"latitude": "40.854322",
"longitude": "-73.869764",
"park_site_name": "Bronx Park",
"site_type": "Outdoor "
},
{
"address": "Lydig Ave & Bronx Park E",
"borough": "Bronx",
"latitude": "40.854445",
"longitude": "-73.869863",
"park_site_name": "Bronx Park Playground at Lydig",
"site_type": "Outdoor "
},
{
"address": "Entrance to Cafeteria",
"borough": "Bronx",
"latitude": "40.849760000000003",
"longitude": "-73.880054999999999",
"park_site_name": "Bronx Zoo",
"site_type": "Outdoor"
},
{
"address": "Cafeteria",
"borough": "Bronx",
"latitude": "40.850017000000001",
"longitude": "-73.880035000000007",
"park_site_name": "Bronx Zoo",
"site_type": "Outdoor"
},
{
"address": "Bryant Avenue Bet. Seneca and Garrison Aves.",
"borough": "Bronx",
"latitude": "40.819933",
"longitude": "-73.887069",
"park_site_name": "Bryant Hill Community Garden",
"site_type": "Greenthumb"
},
{
"borough": "Bronx",
"latitude": "40.871706",
"longitude": "-73.872741",
"park_site_name": "Burke Bridge",
"site_type": "Outdoor "
},
{
"address": "In front of Alumnae Hall",
"borough": "Bronx",
"latitude": "40.911295000000003",
"longitude": "-73.907651999999999",
"park_site_name": "College of Mt. St. Vincent",
"site_type": "Outdoor"
},
{
"address": "In front of Cardinal Spellman Hall",
"borough": "Bronx",
"latitude": "40.911236000000002",
"longitude": "-73.907910000000001",
"park_site_name": "College of Mt. St. Vincent",
"site_type": "Outdoor"
},
{
"address": "Bronx River bet. Westchster Av and Bruckner Blvd",
"borough": "Bronx",
"latitude": "40.825217",
"longitude": "-73.88546",
"park_site_name": "Concrete Plant Park",
"site_type": "Outdoor "
},
{
"address": "1700 Crotona Ave",
"borough": "Bronx",
"latitude": "40.840115",
"longitude": "-73.895513",
"park_site_name": "Crotona Park ",
"site_type": "Outdoor "
},
{
"address": "1700 Crotona Ave",
"borough": "Bronx",
"latitude": "40.835226",
"longitude": "-73.895652",
"park_site_name": "Crotona Park ",
"site_type": "Outdoor "
},
{
"address": "1700 Crotona Ave",
"borough": "Bronx",
"latitude": "40.84133",
"longitude": "-73.892702",
"park_site_name": "Crotona Park ",
"site_type": "Outdoor "
},
{
"address": "1700 Crotona Ave",
"borough": "Bronx",
"latitude": "40.840876",
"longitude": "-73.898206",
"park_site_name": "Crotona Park ",
"site_type": "Outdoor "
},
{
"address": "1700 Crotona Ave",
"borough": "Bronx",
"latitude": "40.838351",
"longitude": "-73.893566",
"park_site_name": "Crotona Park ",
"site_type": "Outdoor "
},
{
"address": "1700 Crotona Ave",
"borough": "Bronx",
"latitude": "40.841123",
"longitude": "-73.898056",
"park_site_name": "Crotona Park ",
"site_type": "Outdoor "
},
{
"address": "174 St & Manor Ave",
"borough": "Bronx",
"latitude": "40.833770000000001",
"longitude": "-73.877453000000003",
"park_site_name": "E 174 St & Manor Ave",
"site_type": "Outdoor"
},
{
"address": "176 St & Marmion Ave",
"borough": "Bronx",
"latitude": "40.841444000000003",
"longitude": "-73.888486999999998",
"park_site_name": "E 176 St & Marmion Ave",
"site_type": "Outdoor"
},
{
"address": "Gun Hill Rd & Bronxwood Ave",
"borough": "Bronx",
"latitude": "40.875552999999996",
"longitude": "-73.860525999999993",
"park_site_name": "E Gun Hill Rd & Bronxwood Ave",
"site_type": "Outdoor"
},
{
"address": "Tremont Ave & Bruckner Blvd",
"borough": "Bronx",
"latitude": "40.833109",
"longitude": "-73.828284999999994",
"park_site_name": "E Tremont Ave & Bruckner Blvd",
"site_type": "Outdoor"
},
{
"address": "Tremont Ave & University Ave",
"borough": "Bronx",
"latitude": "40.85042",
"longitude": "-73.915529000000006",
"park_site_name": "E Tremont Ave & University Ave",
"site_type": "Outdoor"
},
{
"address": "315 Echo Pl",
"borough": "Bronx",
"latitude": "40.849292",
"longitude": "-73.902175",
"park_site_name": "Echo Park",
"site_type": "Outdoor "
},
{
"address": "836 Elton Avenue ",
"borough": "Bronx",
"latitude": "40.822893",
"longitude": "-73.91266",
"park_site_name": "Edith Community Garden (830 Elton Tenants Assoc.)",
"site_type": "Greenthumb"
},
{
"address": "Tinton Avenue @ E. 150th Street ",
"borough": "Bronx",
"latitude": "40.813663",
"longitude": "-73.905898",
"park_site_name": "El Flamboyan",
"site_type": "Greenthumb"
},
{
"address": "419 East 158th Street ",
"borough": "Bronx",
"latitude": "40.82201",
"longitude": "-73.914009",
"park_site_name": "Family Group Garden",
"site_type": "Greenthumb"
},
{
"address": "Grand Concourse West & Fordham Rd",
"borough": "Bronx",
"latitude": "40.862402",
"longitude": "-73.897174",
"park_site_name": "Fordham University",
"site_type": "Outdoor "
},
{
"address": "Main Entrance (Kazimiroff Blvd)",
"borough": "Bronx",
"latitude": "40.861379",
"longitude": "-73.881414",
"park_site_name": "Fordham University",
"site_type": "Outdoor "
},
{
"address": "Side Entrance (E Fordham Rd & 3 Ave)",
"borough": "Bronx",
"latitude": "40.861267",
"longitude": "-73.89014",
"park_site_name": "Fordham University",
"site_type": "Outdoor"
},
{
"address": "Kingsbridge Rd & Fordham Rd",
"borough": "Bronx",
"latitude": "40.861947999999998",
"longitude": "-73.893726000000001",
"park_site_name": "Fordham University",
"site_type": "Outdoor"
},
{
"address": "E 204 St, W/S Bronx Park",
"borough": "Bronx",
"latitude": "40.869996",
"longitude": "-73.876238",
"park_site_name": "French Charley Playground",
"site_type": "Subproperty"
},
{
"address": "851 Hornaday Avenue",
"borough": "Bronx",
"latitude": "40.847026",
"longitude": "-73.882534",
"park_site_name": "Hornaday Community Garden (volky Flower Garden)",
"site_type": "Greenthumb"
},
{
"address": "3 Ave & 149 St",
"borough": "Bronx",
"latitude": "40.816171",
"longitude": "-73.917594",
"park_site_name": "HUB 3rd Ave",
"site_type": "Outdoor "
},
{
"address": "Hunt's Point Ave Btwn. Spofford Ave & Bryant Ave",
"borough": "Bronx",
"latitude": "40.814213",
"longitude": "-73.885886",
"park_site_name": "Hunts Point",
"site_type": "Outdoor "
},
{
"address": "Hunt's Point Ave Btwn. Spofford Ave & Bryant Ave",
"borough": "Bronx",
"latitude": "40.814213",
"longitude": "-73.885886",
"park_site_name": "Hunt's Point",
"site_type": "Indoor"
},
{
"address": "Lafayette Ave & Edgewater Rd",
"borough": "Bronx",
"latitude": "40.817471",
"longitude": "-73.882622",
"park_site_name": "Hunt's point Riverside Park- Plgd - Parks",
"site_type": "Outdoor "
},
{
"address": "625 Wales Avenue ",
"borough": "Bronx",
"latitude": "40.81484",
"longitude": "-73.90691",
"park_site_name": "Isla Verde Garden",
"site_type": "Greenthumb"
},
{
"address": "15 Buchanan Place",
"borough": "Bronx",
"latitude": "40.858005",
"longitude": "-73.90485",
"park_site_name": "Jardin de las Rosas",
"site_type": "Greenthumb"
},
{
"address": "E 164 St Btwn. Grand Concourse & Walton Ave",
"borough": "Bronx",
"latitude": "40.829632",
"longitude": "-73.921933",
"park_site_name": "Joyce Kilmer",
"site_type": "Outdoor "
},
{
"address": "E 164 St Btwn. Grand Concourse & Walton Ave",
"borough": "Bronx",
"latitude": "40.827502",
"longitude": "-73.923062",
"park_site_name": "Joyce Kilmer",
"site_type": "Outdoor "
},
{
"address": "3101 Kingsbridge Ave",
"borough": "Bronx",
"latitude": "40.877667",
"longitude": "-73.90062",
"park_site_name": "Kingsbridge Heights Community Center",
"site_type": "Indoor"
},
{
"address": "1126-1140 Woodycrest Avenue ",
"borough": "Bronx",
"latitude": "40.835694",
"longitude": "-73.925664",
"park_site_name": "Las Casitas Communitiy Garden",
"site_type": "Greenthumb"
},
{
"address": "E 160th St and Elton Ave",
"borough": "Bronx",
"latitude": "40.8229705286",
"longitude": "-73.9128832182",
"park_site_name": "Little Green Garden (3) Large lower expanse",
"site_type": "Greenthumb"
},
{
"address": "Mill Pond Park",
"borough": "Bronx",
"latitude": "40.822992396899998",
"longitude": "-73.931892542900002",
"park_site_name": "Mill Pond",
"site_type": "Outdoor "
},
{
"address": "E 165 St Btwn. Jerome Ave & River Ave",
"borough": "Bronx",
"latitude": "40.834258",
"longitude": "-73.923392",
"park_site_name": "Mullaly",
"site_type": "Outdoor "
},
{
"address": "E 165 St Btwn. Jerome Ave & River Ave",
"borough": "Bronx",
"latitude": "40.831466",
"longitude": "-73.923947",
"park_site_name": "Mullaly",
"site_type": "Outdoor "
},
{
"address": "Bronx Park",
"borough": "Bronx",
"latitude": "40.8415557191",
"longitude": "-73.877522673900003",
"park_site_name": "Muskrat Playground",
"site_type": "Outdoor "
},
{
"address": "E/S Hoe Ave., S/O/ Aldus Street ",
"borough": "Bronx",
"latitude": "40.822711",
"longitude": "-73.890242",
"park_site_name": "New Hoe Avenue Garden",
"site_type": "Greenthumb"
},
{
"address": "Bronx Park",
"borough": "Bronx",
"latitude": "40.889428",
"longitude": "-73.864356",
"park_site_name": "Niles Triangle",
"site_type": "Subproperty"
},
{
"address": "Noble Ave Btwn. Bronx River Ave & E 177 St",
"borough": "Bronx",
"latitude": "40.836706",
"longitude": "-73.872355",
"park_site_name": "Noble Playground",
"site_type": "Outdoor "
},
{
"address": "Van Cortlandt Park",
"borough": "Bronx",
"latitude": "40.90208",
"longitude": "-73.868519",
"park_site_name": "Nursery",
"site_type": "Outdoor "
},
{
"address": "Bronx Blvd & E 219 St",
"borough": "Bronx",
"latitude": "40.884079",
"longitude": "-73.866996",
"park_site_name": "Olinville",
"site_type": "Subproperty"
},
{
"address": "Orchard Beach",
"borough": "Bronx",
"latitude": "40.866292",
"longitude": "-73.794774",
"park_site_name": "Orchard Beach picnic areas, basketball ct, Pelham playground, Nature Center, Boathouse",
"site_type": "Outdoor "
},
{
"address": "Orchard Beach",
"borough": "Bronx",
"latitude": "40.867984",
"longitude": "-73.793396",
"park_site_name": "Orchard Beach picnic areas, basketball ct, Pelham playground, Nature Center, Boathouse",
"site_type": "Outdoor "
},
{
"address": "Orchard Beach",
"borough": "Bronx",
"latitude": "40.868802",
"longitude": "-73.792261",
"park_site_name": "Orchard Beach picnic areas, basketball ct, Pelham playground, Nature Center, Boathouse",
"site_type": "Outdoor "
},
{
"address": "Orchard Beach",
"borough": "Bronx",
"latitude": "40.869068",
"longitude": "-73.792558",
"park_site_name": "Orchard Beach picnic areas, basketball ct, Pelham playground, Nature Center, Boathouse",
"site_type": "Outdoor "
},
{
"address": "Orchard Beach",
"borough": "Bronx",
"latitude": "40.872275",
"longitude": "-73.797323",
"park_site_name": "Orchard Beach picnic areas, basketball ct, Pelham playground, Nature Center, Boathouse",
"site_type": "Outdoor "
},
{
"address": "2551 Westchester Ave",
"borough": "Bronx",
"latitude": "40.840504",
"longitude": "-73.842668",
"park_site_name": "Owen Dolan",
"site_type": "Outdoor "
},
{
"address": "2551 Westchester Ave",
"borough": "Bronx",
"latitude": "40.840626",
"longitude": "-73.843231",
"park_site_name": "Owen Dolan",
"site_type": "Outdoor"
},
{
"address": "Olmstead Ave Btwn Turnbull Ave & Lafayette Ave ",
"borough": "Bronx",
"latitude": "40.82366",
"longitude": "-73.850766",
"park_site_name": "P.O. Serrano",
"site_type": "Outdoor "
},
{
"address": "St. Peter's Ave at Tratman Ave ",
"borough": "Bronx",
"latitude": "40.838797",
"longitude": "-73.845791",
"park_site_name": "Pearly Gates",
"site_type": "Outdoor "
},
{
"address": "Pelham Bay Park",
"borough": "Bronx",
"latitude": "40.851723",
"longitude": "-73.824697",
"park_site_name": "Pelham Bay  Ball field, north picnic area",
"site_type": "Outdoor "
},
{
"address": "Pelham Bay Park",
"borough": "Bronx",
"latitude": "40.849069",
"longitude": "-73.822954",
"park_site_name": "Pelham Bay picnic, running track",
"site_type": "Outdoor "
},
{
"address": "E 181 St, oak Tree Pl Btwn. Quarry Rd & Hughes Ave",
"borough": "Bronx",
"latitude": "40.850274",
"longitude": "-73.88992",
"park_site_name": "Quarry Ballfield- Parks",
"site_type": "Outdoor "
},
{
"address": "1086 East 180th Street",
"borough": "Bronx",
"latitude": "40.841884",
"longitude": "-73.876389",
"park_site_name": "River Garden",
"site_type": "Greenthumb"
},
{
"address": "E 180 St & Boston Rd",
"borough": "Bronx",
"latitude": "40.842795",
"longitude": "-73.877694",
"park_site_name": "River Park",
"site_type": "Outdoor "
},
{
"address": "5521 Mosholu Ave",
"borough": "Bronx",
"latitude": "40.903281",
"longitude": "-73.903611999999995",
"park_site_name": "Riverdale Neighborhood House",
"site_type": "Outdoor"
},
{
"address": "Webster Ave & E Fordham Rd",
"borough": "Bronx",
"latitude": "40.861953",
"longitude": "-73.890736",
"park_site_name": "Rosehill Park- Parks",
"site_type": "Outdoor "
},
{
"address": "Bronx River Pkwy & Rosewood St",
"borough": "Bronx",
"latitude": "40.873199",
"longitude": "-73.87052",
"park_site_name": "Rosewood- Parks",
"site_type": "Subproperty"
},
{
"address": "W Gunhill Rd & Knox Pl ",
"borough": "Bronx",
"latitude": "40.883881",
"longitude": "-73.881691",
"park_site_name": "Sachkera Plgd – Parks",
"site_type": "Subproperty"
},
{
"address": "E 223 St & De Reimer Ave",
"borough": "Bronx",
"latitude": "40.888353",
"longitude": "-73.840908",
"park_site_name": "Seton Falls Park",
"site_type": "Outdoor "
},
{
"address": "3800 Baychester Ave",
"borough": "Bronx",
"latitude": "40.885219",
"longitude": "-73.840474",
"park_site_name": "Seton Falls Park",
"site_type": "Outdoor "
},
{
"address": "Bronx Park East Btwn Britton St & Allerton Ave ",
"borough": "Bronx",
"latitude": "40.865657",
"longitude": "-73.850613",
"park_site_name": "Skate Park at Allerton",
"site_type": "Outdoor "
},
{
"address": "Skyview Shopping Plaza (Riverdale Ave & 259 St)",
"borough": "Bronx",
"latitude": "40.906877999999999",
"longitude": "-73.904143000000005",
"park_site_name": "Skyview Shopping Plaza",
"site_type": "Outdoor"
},
{
"address": "Lafayette Ave Btwn Colgate Ave & Boynton Ave ",
"borough": "Bronx",
"latitude": "40.819113",
"longitude": "-73.878003",
"park_site_name": "Soundview – Parks",
"site_type": "Outdoor "
},
{
"address": "Metcalf Ave Btwn Lafayette Ave & Seward Ave ",
"borough": "Bronx",
"latitude": "40.819274",
"longitude": "-73.870418",
"park_site_name": "Soundview – Parks",
"site_type": "Outdoor "
},
{
"address": "Metcalf Ave Btwn Seward Ave & Randall Ave",
"borough": "Bronx",
"latitude": "40.817335",
"longitude": "-73.870322",
"park_site_name": "Soundview – Parks",
"site_type": "Outdoor "
},
{
"address": "Soundview Park",
"borough": "Bronx",
"latitude": "40.816505",
"longitude": "-73.872564",
"park_site_name": "Soundview – Parks",
"site_type": "Outdoor "
},
{
"address": "Southern Blvd & 173 St",
"borough": "Bronx",
"latitude": "40.835693999999997",
"longitude": "-73.888775999999993",
"park_site_name": "Southern Blvd & E 173 St",
"site_type": "Outdoor"
},
{
"address": "Van Cortlandt Park",
"borough": "Bronx",
"latitude": "40.886538",
"longitude": "-73.898453",
"park_site_name": "Southwest Plgd – Parks",
"site_type": "Subproperty"
},
{
"address": "Seton Park",
"borough": "Bronx",
"latitude": "40.887313",
"longitude": "-73.916308",
"park_site_name": "Spuyton Duyvil plgd",
"site_type": "Outdoor "
},
{
"address": "Jerome Ave",
"borough": "Bronx",
"latitude": "40.865469",
"longitude": "-73.898571",
"park_site_name": "St. James ",
"site_type": "Indoor"
},
{
"address": "Jerome Ave",
"borough": "Bronx",
"latitude": "40.864779",
"longitude": "-73.899257",
"park_site_name": "St. James ",
"site_type": "Indoor"
},
{
"address": "E 193 St",
"borough": "Bronx",
"latitude": "40.866089",
"longitude": "-73.896967",
"park_site_name": "St. James ",
"site_type": "Indoor"
},
{
"address": "St. Anns Ave & E 145 St",
"borough": "Bronx",
"latitude": "40.811712",
"longitude": "-73.914339",
"park_site_name": "St. Mary's ",
"site_type": "Indoor"
},
{
"address": "St. Anns Ave & E 145 St",
"borough": "Bronx",
"latitude": "40.811588",
"longitude": "-73.914342",
"park_site_name": "St. Mary's ",
"site_type": "Indoor"
},
{
"address": "639 E. 137th Street",
"borough": "Bronx",
"latitude": "40.8053160148",
"longitude": "-73.9153321204",
"park_site_name": "Sunflower Garden/Girasol",
"site_type": "Greenthumb"
},
{
"address": "Broadway & Putnam Trail",
"borough": "Bronx",
"latitude": "40.887317",
"longitude": "-73.899006",
"park_site_name": "Van Cortlandt  ballfield, tennis and picnic",
"site_type": "Subproperty"
},
{
"address": "Broadway & Van Cortlandt Park 242 St",
"borough": "Bronx",
"latitude": "40.888933",
"longitude": "-73.898324",
"park_site_name": "Van Cortlandt  ballfield, tennis and picnic",
"site_type": "Subproperty"
},
{
"address": "Van Cortlandt Park",
"borough": "Bronx",
"latitude": "40.888224",
"longitude": "-73.896655",
"park_site_name": "Van Cortlandt  ballfield, tennis and picnic",
"site_type": "Subproperty"
},
{
"address": "Van Cortlandt Park",
"borough": "Bronx",
"latitude": "40.890172",
"longitude": "-73.896375",
"park_site_name": "Van Cortlandt Park ",
"site_type": "Outdoor "
},
{
"address": "Van Cortlandt Park",
"borough": "Bronx",
"latitude": "40.888255",
"longitude": "-73.897777",
"park_site_name": "Van Cortlandt Stadium",
"site_type": "Subproperty"
},
{
"address": "Van Cortlandt Park",
"borough": "Bronx",
"latitude": "40.889096",
"longitude": "-73.892278",
"park_site_name": "Van Cortlandt Stadium",
"site_type": "Subproperty"
},
{
"address": "Cross Bronx Expwy Service Rd",
"borough": "Bronx",
"latitude": "40.833505",
"longitude": "-73.86232",
"park_site_name": "Virginia Park",
"site_type": "Outdoor "
},
{
"address": "431 E. 156th Street",
"borough": "Bronx",
"latitude": "40.8205708783",
"longitude": "-73.9140313844",
"park_site_name": "Vogue Community Garden",
"site_type": "Greenthumb"
},
{
"address": "Waring Ave, Bronx Park E",
"borough": "Bronx",
"latitude": "40.860641",
"longitude": "-73.871488",
"park_site_name": "Waring Plgd",
"site_type": "Subproperty"
},
{
"address": "Noble Ave Btwn Watson Ave & Gleason Ave",
"borough": "Bronx",
"latitude": "40.828933",
"longitude": "-73.869326",
"park_site_name": "Watson & Gleason",
"site_type": "Outdoor "
},
{
"address": "1527 Jesup Ave",
"borough": "Bronx",
"latitude": "40.844147",
"longitude": "-73.918886",
"park_site_name": "West Bronx Rec. Ctr",
"site_type": "Indoor"
},
{
"address": "Van Cortlandt Park",
"borough": "Bronx",
"latitude": "40.895803",
"longitude": "-73.87943",
"park_site_name": "Woodlawn Tennis",
"site_type": "Subproperty"
},
{
"address": "762-764 Herkimer Place/13-21 Hunterfly",
"borough": "Brooklyn",
"latitude": "40.677973",
"longitude": "-73.928171",
"park_site_name": "A Better Community Garden",
"site_type": "Greenthumb"
},
{
"address": "Seaside Park",
"borough": "Brooklyn",
"latitude": "40.57519",
"longitude": "-73.971342",
"park_site_name": "Asser Levy",
"site_type": "Outdoor "
},
{
"address": "Seaside Park",
"borough": "Brooklyn",
"latitude": "40.575239",
"longitude": "-73.971889",
"park_site_name": "Asser Levy",
"site_type": "Outdoor "
},
{
"address": "5 Ave & Bay Ridge Pkwy",
"borough": "Brooklyn",
"latitude": "40.629573000000001",
"longitude": "-74.022531999999998",
"park_site_name": "Bay Ridge",
"site_type": "Outdoor "
},
{
"address": "Bensohurst Park",
"borough": "Brooklyn",
"latitude": "40.596833",
"longitude": "-73.9994",
"park_site_name": "Bensonhurst",
"site_type": "Outdoor "
},
{
"address": "Boerum Park",
"borough": "Brooklyn",
"latitude": "40.68463",
"longitude": "-73.990234",
"park_site_name": "Boerum",
"site_type": "Outdoor "
},
{
"address": "Brooklyn War Memorial",
"borough": "Brooklyn",
"latitude": "40.696536",
"longitude": "-73.990675",
"park_site_name": "Brooklyn War Memorial",
"site_type": "Outdoor "
},
{
"address": "Park Pl Btwn Brooklyn Ave & Kingston Ave",
"borough": "Brooklyn",
"latitude": "40.673811",
"longitude": "-73.943717",
"park_site_name": "Brower",
"site_type": "Outdoor "
},
{
"address": "1555 Linden Blvd",
"borough": "Brooklyn",
"latitude": "40.656762",
"longitude": "-73.90247",
"park_site_name": "Brownsville Rec Ctr",
"site_type": "Indoor"
},
{
"address": "Bushwick Inlet Park",
"borough": "Brooklyn",
"latitude": "40.722315",
"longitude": "-73.961527",
"park_site_name": "Bushwick Inlet Field",
"site_type": "Outdoor "
},
{
"address": "Korean War Veterans Plaze",
"borough": "Brooklyn",
"latitude": "40.695873",
"longitude": "-73.990218",
"park_site_name": "Cadman Plaza",
"site_type": "Outdoor "
},
{
"address": "Brooklyn War Memorial",
"borough": "Brooklyn",
"latitude": "40.697327",
"longitude": "-73.990337",
"park_site_name": "Cadman Plaza",
"site_type": "Outdoor "
},
{
"address": "President St",
"borough": "Brooklyn",
"latitude": "40.681307",
"longitude": "-73.995212",
"park_site_name": "Carroll Park",
"site_type": "Outdoor "
},
{
"address": "Carroll St",
"borough": "Brooklyn",
"latitude": "40.680946",
"longitude": "-73.995481",
"park_site_name": "Carroll Park",
"site_type": "Outdoor "
},
{
"address": "Fountain Ave",
"borough": "Brooklyn",
"latitude": "40.679442",
"longitude": "-73.876233",
"park_site_name": "City Line Park",
"site_type": "Outdoor "
},
{
"address": "Clinton St Btwn Congress St & Verandah Pl",
"borough": "Brooklyn",
"latitude": "40.688290000000002",
"longitude": "-73.996136000000007",
"park_site_name": "Cobble hill park",
"site_type": "Outdoor "
},
{
"address": "Columbus Park",
"borough": "Brooklyn",
"latitude": "40.694143",
"longitude": "-73.989791",
"park_site_name": "Columbus Park",
"site_type": "Outdoor "
},
{
"address": "Commodore Berry",
"borough": "Brooklyn",
"latitude": "40.697793",
"longitude": "-73.978653",
"park_site_name": "Commodore Berry",
"site_type": "Outdoor "
},
{
"address": "Greene Ave",
"borough": "Brooklyn",
"latitude": "40.685861",
"longitude": "-73.972638",
"park_site_name": "Cuyler Gore Park",
"site_type": "Outdoor "
},
{
"address": "Avenue P Btwn 4 St & 5 St",
"borough": "Brooklyn",
"latitude": "40.610033",
"longitude": "-73.96952",
"park_site_name": "David Marcus Plgd",
"site_type": "Outdoor "
},
{
"address": "Front St & Washington St",
"borough": "Brooklyn ",
"latitude": "40.702573",
"longitude": "-73.989752",
"park_site_name": "Dumbo Brooklyn Heights",
"site_type": "Outdoor "
},
{
"address": "Front St & Main St",
"borough": "Brooklyn ",
"latitude": "40.702631",
"longitude": "-73.990641",
"park_site_name": "Dumbo Brooklyn Heights",
"site_type": "Outdoor "
},
{
"address": "Front St & Jay St",
"borough": "Brooklyn ",
"latitude": "40.702379999999998",
"longitude": "-73.986553000000001",
"park_site_name": "Dumbo Brooklyn Heights",
"site_type": "Outdoor "
},
{
"address": "Church Ave & Flatbush Ave",
"borough": "Brooklyn",
"latitude": "40.650210000000001",
"longitude": "-73.958798000000002",
"park_site_name": "Dumbo Brooklyn Heights",
"site_type": "Outdoor "
},
{
"address": "Fulton & Washington Ave ",
"borough": "Brooklyn ",
"latitude": "40.682929999999999",
"longitude": "-73.964596",
"park_site_name": "FAB",
"site_type": "Outdoor "
},
{
"address": "Fulton St & Lafayette/Greene/S Oxford",
"borough": "Brooklyn",
"latitude": "40.687092999999997",
"longitude": "-73.976237999999995",
"park_site_name": "FAB",
"site_type": "Outdoor"
},
{
"address": "Putnam Triangle",
"borough": "Brooklyn",
"latitude": "40.682555999999998",
"longitude": "-73.961974999999995",
"park_site_name": "FAB",
"site_type": "Outdoor"
},
{
"address": "Fulton & Lafayette ",
"borough": "Brooklyn",
"latitude": "40.687072000000001",
"longitude": "-73.976557",
"park_site_name": "FAB ",
"site_type": "Outdoor "
},
{
"address": "Fulton & Clinton Ave ",
"borough": "Brooklyn ",
"latitude": "40.683557",
"longitude": "-73.966797",
"park_site_name": "FAB ",
"site_type": "Outdoor "
},
{
"address": "Lafayette & South Portland Ave",
"borough": "Brooklyn",
"latitude": "40.687207999999998",
"longitude": "-73.974620999999999",
"park_site_name": "FAB ",
"site_type": "Outdoor"
},
{
"address": "Washington Park & Dekalb Ave",
"borough": "Brooklyn",
"latitude": "40.689818",
"longitude": "-73.9732",
"park_site_name": "Fort Greene ",
"site_type": "Outdoor "
},
{
"address": "9941 Fort Hamilton Pkwy",
"borough": "Brooklyn",
"latitude": "40.613322",
"longitude": "-74.030067",
"park_site_name": "Fort Hamilton Sr. Center",
"site_type": "Indoor"
},
{
"address": "555-557 Shepherd Ave.",
"borough": "Brooklyn",
"latitude": "40.6707327095",
"longitude": "-73.8796755721",
"park_site_name": "Good Shepheard's Community Group",
"site_type": "Greenthumb"
},
{
"address": "444,448 Warwich Avenue",
"borough": "Brooklyn",
"latitude": "40.672659",
"longitude": "-73.885742",
"park_site_name": "Gregory's Garden (P.S. 158 Memorial Garden",
"site_type": "Greenthumb"
},
{
"address": "New Lots Ave at Alabama Avenue",
"borough": "Brooklyn",
"latitude": "40.66101",
"longitude": "-73.895627",
"park_site_name": "Hands  & Hearts(New Lots Urban Farm)",
"site_type": "Greenthumb"
},
{
"address": "Hillside Park",
"borough": "Brooklyn",
"latitude": "40.700784",
"longitude": "-73.995146",
"park_site_name": "Harry Chapin Plgd",
"site_type": "Outdoor "
},
{
"address": "582-590 Glenmore Ave.",
"borough": "Brooklyn",
"latitude": "40.674221",
"longitude": "-73.888573",
"park_site_name": "Herbal Garden",
"site_type": "Greenthumb"
},
{
"address": "4 St Btwn 4 Ave & 5 Ave",
"borough": "Brooklyn",
"latitude": "40.67269",
"longitude": "-73.984796",
"park_site_name": "JJ Byrne",
"site_type": "Outdoor "
},
{
"address": "4 St Btwn 4 Ave & 5 Ave",
"borough": "Brooklyn",
"latitude": "40.673262",
"longitude": "-73.984332",
"park_site_name": "JJ Byrne",
"site_type": "Outdoor "
},
{
"address": "Neptune Ave",
"borough": "Brooklyn",
"latitude": "40.578225",
"longitude": "-73.994834",
"park_site_name": "Kaiser ",
"site_type": "Outdoor "
},
{
"address": "Kelly Memorial Playground",
"borough": "Brooklyn",
"latitude": "40.603519",
"longitude": "-73.957375",
"park_site_name": "Kelly",
"site_type": "Outdoor "
},
{
"address": "Cadman Plaza",
"borough": "Brooklyn",
"latitude": "40.695719",
"longitude": "-73.990256",
"park_site_name": "Korean War Vet ",
"site_type": "Outdoor "
},
{
"address": "Oriental Blvd",
"borough": "Brooklyn",
"latitude": "40.577672",
"longitude": "-73.944616",
"park_site_name": "Manhattan Beach +BBQ",
"site_type": "Outdoor "
},
{
"address": "Oriental Blvd",
"borough": "Brooklyn",
"latitude": "40.577211",
"longitude": "-73.946587",
"park_site_name": "Manhattan Beach +BBQ",
"site_type": "Outdoor "
},
{
"address": "Marine Park",
"borough": "Brooklyn",
"latitude": "40.604084999999998",
"longitude": "-73.930702999999994",
"park_site_name": "Marine Park ",
"site_type": "Outdoor "
},
{
"address": "Bedford Ave ",
"borough": "Brooklyn",
"latitude": "40.721612",
"longitude": "-73.953668",
"park_site_name": "McCarren Park ",
"site_type": "Outdoor "
},
{
"address": "Bedford Ave ",
"borough": "Brooklyn",
"latitude": "40.721535",
"longitude": "-73.954114",
"park_site_name": "McCarren Park ",
"site_type": "Outdoor "
},
{
"address": "Driggs Ave",
"borough": "Brooklyn",
"latitude": "40.720622",
"longitude": "-73.952488",
"park_site_name": "McCarren Park ",
"site_type": "Outdoor "
},
{
"address": "Driggs Ave & Lorimer St",
"borough": "Brooklyn",
"latitude": "40.721653",
"longitude": "-73.950305",
"park_site_name": "McCarren Park ",
"site_type": "Outdoor "
},
{
"address": "McCarren Park",
"borough": "Brooklyn",
"latitude": "40.719973",
"longitude": "-73.952215",
"park_site_name": "McCarren Park ",
"site_type": "Outdoor "
},
{
"address": "Bedford Ave ",
"borough": "Brooklyn",
"latitude": "40.72173",
"longitude": "-73.953298",
"park_site_name": "McCarren Park ",
"site_type": "Outdoor "
},
{
"address": "N 12 St",
"borough": "Brooklyn",
"latitude": "40.721075",
"longitude": "-73.955512",
"park_site_name": "McCarren Park ",
"site_type": "Outdoor "
},
{
"address": "Berry St",
"borough": "Brooklyn",
"latitude": "40.721933",
"longitude": "-73.955283",
"park_site_name": "McCarren Park ",
"site_type": "Outdoor "
},
{
"address": "McGorlick Park",
"borough": "Brooklyn",
"latitude": "40.724446",
"longitude": "-73.943326",
"park_site_name": "McGorlick Park",
"site_type": "Outdoor "
},
{
"address": "261 Bedford Ave",
"borough": "Brooklyn",
"latitude": "40.715086",
"longitude": "-73.960546",
"park_site_name": "Metropolitan Rec Ctr ",
"site_type": "Indoor"
},
{
"address": "Willoughby St & Bridge St",
"borough": "Brooklyn",
"latitude": "40.692165000000003",
"longitude": "-73.985247000000001",
"park_site_name": "Metrotech",
"site_type": "Outdoor"
},
{
"address": "Mt. Prospect Park",
"borough": "Brooklyn",
"latitude": "40.67207",
"longitude": "-73.96598",
"park_site_name": "Mt. Prospect plgd",
"site_type": "Outdoor "
},
{
"address": "Myrtle Ave & Ashland Pl",
"borough": "Brooklyn",
"latitude": "40.693472999999997",
"longitude": "-73.979168000000001",
"park_site_name": "Myrtle Ave BID",
"site_type": "Outdoor"
},
{
"address": "Myrtle Ave & Adelphi St",
"borough": "Brooklyn",
"latitude": "40.693221999999999",
"longitude": "-73.971886999999995",
"park_site_name": "Myrtle Ave BID",
"site_type": "Outdoor"
},
{
"address": "Myrtle Ave & Clinton Ave",
"borough": "Brooklyn",
"latitude": "40.693126999999997",
"longitude": "-73.968789999999998",
"park_site_name": "Myrtle Ave BID",
"site_type": "Outdoor"
},
{
"address": "Myrtle Ave & Hall St",
"borough": "Brooklyn",
"latitude": "40.693455999999998",
"longitude": "-73.965907999999999",
"park_site_name": "Myrtle Ave BID",
"site_type": "Outdoor"
},
{
"address": "N. 5th St. pier",
"borough": "Brooklyn",
"latitude": "40.720628",
"longitude": "-73.965524",
"park_site_name": "N. 5th St. pier",
"site_type": "Outdoor "
},
{
"address": "590-594 Schenck Avenue",
"borough": "Brooklyn",
"latitude": "40.6659",
"longitude": "-73.887172",
"park_site_name": "New Vision Garden",
"site_type": "Greenthumb"
},
{
"address": "Owl's Head",
"borough": "Brooklyn",
"latitude": "40.639285",
"longitude": "-74.031909",
"park_site_name": "Owl's Head",
"site_type": "Outdoor "
},
{
"address": "Manhattan Beach Park",
"borough": "Brooklyn",
"latitude": "40.577492",
"longitude": "-73.946325",
"park_site_name": "Palato plgd",
"site_type": "Outdoor "
},
{
"address": "7 Ave & 6 St",
"borough": "Brooklyn",
"latitude": "40.668796999999998",
"longitude": "-73.980143999999996",
"park_site_name": "Park Slope",
"site_type": "Outdoor "
},
{
"address": "Berkeley Lincoln Playground ",
"borough": "Brooklyn",
"latitude": "40.676639",
"longitude": "-73.978903",
"park_site_name": "Park Slope Playground ",
"site_type": "Outdoor "
},
{
"address": "Pierrepon St",
"borough": "Brooklyn",
"latitude": "40.696389",
"longitude": "-73.99734",
"park_site_name": "Pierrepont Park",
"site_type": "Outdoor "
},
{
"address": "Prospect Park West",
"borough": "Brooklyn",
"latitude": "40.664608",
"longitude": "-73.976666",
"park_site_name": "Prospect Park ",
"site_type": "Outdoor "
},
{
"address": "Prospect Park West",
"borough": "Brooklyn",
"latitude": "40.66132",
"longitude": "-73.979593",
"park_site_name": "Prospect Park ",
"site_type": "Outdoor "
},
{
"address": "Ocean Ave",
"borough": "Brooklyn",
"latitude": "40.660478",
"longitude": "-73.963187",
"park_site_name": "Prospect Park ",
"site_type": "Outdoor "
},
{
"address": "Ocean Ave",
"borough": "Brooklyn",
"latitude": "40.655183",
"longitude": "-73.962214",
"park_site_name": "Prospect Park ",
"site_type": "Outdoor "
},
{
"address": "604 Marcy Avenue",
"borough": "Brooklyn",
"latitude": "40.693761",
"longitude": "-73.948972",
"park_site_name": "Red Gate Garden",
"site_type": "Greenthumb"
},
{
"address": "Red Hook Park",
"borough": "Brooklyn",
"latitude": "40.677265",
"longitude": "-74.008353",
"park_site_name": "Red Hook Park",
"site_type": "Outdoor "
},
{
"address": "3301 Avenue U",
"borough": "Brooklyn",
"latitude": "40.604374",
"longitude": "-73.930741",
"park_site_name": "Salt marsh",
"site_type": "Indoor"
},
{
"address": "Shore Rd Park",
"borough": "Brooklyn",
"latitude": "40.617506",
"longitude": "-74.040033",
"park_site_name": "Shore Road Plgd",
"site_type": "Outdoor "
},
{
"address": "Oxport Playground",
"borough": "Brooklyn",
"latitude": "40.697746",
"longitude": "-73.976199",
"park_site_name": "South Oxport ",
"site_type": "Outdoor "
},
{
"address": "Btwn Furman St & Columbia Heights",
"borough": "Brooklyn",
"latitude": "40.701079",
"longitude": "-73.995307",
"park_site_name": "Squibb Park",
"site_type": "Outdoor "
},
{
"address": "476-484 New Jersey Avenue",
"borough": "Brooklyn",
"latitude": "40.667491",
"longitude": "-73.89384",
"park_site_name": "St. John Cantius",
"site_type": "Greenthumb"
},
{
"address": "St. John's Park",
"borough": "Brooklyn",
"latitude": "40.673754",
"longitude": "-73.934855",
"park_site_name": "St. John's ",
"site_type": "Indoor"
},
{
"address": "21-25 Olive Street ",
"borough": "Brooklyn",
"latitude": "40.713316",
"longitude": "-73.938974",
"park_site_name": "St. Nicholas-Olive Street Garden",
"site_type": "Greenthumb"
},
{
"address": "1344 Pennsylvania Avenue",
"borough": "Brooklyn",
"latitude": "40.650143",
"longitude": "-73.884371999999999",
"park_site_name": "Starret City",
"site_type": "Outdoor"
},
{
"address": "Lorimer St",
"borough": "Brooklyn",
"latitude": "40.706315",
"longitude": "-73.948025",
"park_site_name": "Sternberg Park",
"site_type": "Outdoor "
},
{
"address": "Boerum St",
"borough": "Brooklyn",
"latitude": "40.705616",
"longitude": "-73.947172",
"park_site_name": "Sternberg Park",
"site_type": "Outdoor "
},
{
"address": "5 Ave & 44 St",
"borough": "Brooklyn",
"latitude": "40.648468",
"longitude": "-74.006771",
"park_site_name": "Sunset Park",
"site_type": "Indoor"
},
{
"address": "5 Ave & 44 St",
"borough": "Brooklyn",
"latitude": "40.648479999999999",
"longitude": "-74.006674000000004",
"park_site_name": "Sunset Park",
"site_type": "Outdoor "
},
{
"address": "15-17 Ten Eyck Street",
"borough": "Brooklyn",
"latitude": "40.709648",
"longitude": "-73.950166",
"park_site_name": "Ten Eyck Houses",
"site_type": "Greenthumb"
},
{
"address": "613 Hendrix Street ",
"borough": "Brooklyn",
"latitude": "40.666548",
"longitude": "-73.887691",
"park_site_name": "Triple R/Relaxation, Reflection, Revenue (Victoria Garden)",
"site_type": "Greenthumb"
},
{
"address": "613 Schenck Avenue ",
"borough": "Brooklyn",
"latitude": "40.665324",
"longitude": "-73.886769",
"park_site_name": "UCC (United Community Centers) Youth Farm/East New York Farms",
"site_type": "Greenthumb"
},
{
"address": "Underhill Ave & Prospect Pl",
"borough": "Brooklyn",
"latitude": "40.676766",
"longitude": "-73.965902",
"park_site_name": "Underhill Playground",
"site_type": "Outdoor "
},
{
"address": "Underwood Park",
"borough": "Brooklyn",
"latitude": "40.688204",
"longitude": "-73.966559",
"park_site_name": "Underwood Playground",
"site_type": "Outdoor "
},
{
"address": "2556 Pitkin Avenue.",
"borough": "Brooklyn",
"latitude": "40.674329",
"longitude": "-73.877867",
"park_site_name": "Upon the Rock",
"site_type": "Greenthumb"
},
{
"address": "253 Throop Avenue",
"borough": "Brooklyn",
"latitude": "40.695220999999997",
"longitude": "-73.943263999999999",
"park_site_name": "Vernon (Throop Avenue Block Assoc.)",
"site_type": "Greenthumb"
},
{
"address": "681 Halsey Street",
"borough": "Brooklyn",
"latitude": "40.684658",
"longitude": "-73.925222",
"park_site_name": "Welcome Home",
"site_type": "Greenthumb"
},
{
"address": "624-628 E. 6th Street ",
"borough": "Manhattan",
"latitude": "40.723831",
"longitude": "-73.980677",
"park_site_name": "6BC Botanical Garden",
"site_type": "Greenthumb"
},
{
"address": "1 Centre Street",
"borough": "Manhattan",
"latitude": "40.712187",
"longitude": "-74.005701000000002",
"park_site_name": "1 Centre Street",
"site_type": "Outdoor"
},
{
"address": "100 Centre St",
"borough": "Manhattan",
"latitude": "40.715826999999997",
"longitude": "-74.000488000000004",
"park_site_name": "100 Centre St",
"site_type": "Indoor"
},
{
"address": "100 Centre Street (South Entrance)",
"borough": "Manhattan",
"latitude": "40.715922999999997",
"longitude": "-74.001447999999996",
"park_site_name": "100 Centre Street ",
"site_type": "Outdoor"
},
{
"address": "100 Gold Street",
"borough": "Manhattan",
"latitude": "40.710450000000002",
"longitude": "-74.003754999999998",
"park_site_name": "100 Gold Street",
"site_type": "Outdoor"
},
{
"address": "111 Centre St",
"borough": "Manhattan",
"latitude": "40.716396000000003",
"longitude": "-74.001358999999994",
"park_site_name": "111 Centre St",
"site_type": "Indoor"
},
{
"address": "115 Chrystie St (Outside Main Entrance)",
"borough": "Manhattan",
"latitude": "40.718604999999997",
"longitude": "-73.993763000000001",
"park_site_name": "115 Chrystie St",
"site_type": "Outdoor"
},
{
"address": "125 St & Lenox Ave",
"borough": "Manhattan",
"latitude": "40.807944999999997",
"longitude": "-73.945622999999998",
"park_site_name": "125 St. BID",
"site_type": "Outdoor "
},
{
"address": "137 Centre St (Centre St & White St)",
"borough": "Manhattan",
"latitude": "40.716940999999998",
"longitude": "-74.000816",
"park_site_name": "137 Centre Street ",
"site_type": "Outdoor"
},
{
"address": "2 Lafayette St (Lafayette St & Reade St)",
"borough": "Manhattan",
"latitude": "40.713608000000001",
"longitude": "-74.003619",
"park_site_name": "2 Lafayette St ",
"site_type": "Outdoor"
},
{
"address": "22 Reade St (Reade St & Elk St)",
"borough": "Manhattan",
"latitude": "40.714022999999997",
"longitude": "-74.004472000000007",
"park_site_name": "22 Reade St",
"site_type": "Outdoor"
},
{
"address": "Broadway Btwn Reade St & Chambers St",
"borough": "Manhattan",
"latitude": "40.714399",
"longitude": "-74.006130999999996",
"park_site_name": "280 Broadway",
"site_type": "Outdoor"
},
{
"address": "346 Broadway",
"borough": "Manhattan",
"latitude": "40.716827000000002",
"longitude": "-74.004185000000007",
"park_site_name": "346 Broadway",
"site_type": "Indoor"
},
{
"address": "34 St & 7 Ave",
"borough": "Manhattan",
"latitude": "40.750900999999999",
"longitude": "-73.990842999999998",
"park_site_name": "34th St",
"site_type": "Outdoor "
},
{
"address": "49-51 Chambers Street (Outside Main Entrance)",
"borough": "Manhattan",
"latitude": "40.713679999999997",
"longitude": "-74.005512999999993",
"park_site_name": "49-51 Chambers Street ",
"site_type": "Outdoor"
},
{
"address": "60 Lafayette St (Lafayette & Leonard)",
"borough": "Manhattan",
"latitude": "40.716158",
"longitude": "-74.002555000000001",
"park_site_name": "60 Lafayette St",
"site_type": "Outdoor"
},
{
"address": "60 Lafayette St",
"borough": "Manhattan",
"latitude": "40.716458000000003",
"longitude": "-74.002466999999996",
"park_site_name": "60 Lafayette St",
"site_type": "Indoor"
},
{
"address": "80 Centre St",
"borough": "Manhattan",
"latitude": "40.715387",
"longitude": "-74.001773",
"park_site_name": "80 Centre St",
"site_type": "Indoor"
},
{
"address": "96 St & Lexington Ave",
"borough": "Manhattan",
"latitude": "40.785787",
"longitude": "-73.951092",
"park_site_name": "96th St Train Station (under our supervision)",
"site_type": "Outdoor "
},
{
"address": "96 St & Lexington Ave",
"borough": "Manhattan",
"latitude": "40.785717",
"longitude": "-73.950922",
"park_site_name": "96th St Train Station (under our supervision)",
"site_type": "Outdoor"
},
{
"address": "80 Catherine St",
"borough": "Manhattan",
"latitude": "40.710412",
"longitude": "-73.996979",
"park_site_name": "Al Smith Rec Ctr",
"site_type": "Indoor"
},
{
"address": "384 Asser Levy Pl",
"borough": "Manhattan",
"latitude": "40.736271",
"longitude": "-73.975508",
"park_site_name": "Asser Levy Rec Ctr",
"site_type": "Indoor"
},
{
"address": "Battery Park ",
"borough": "Manhattan",
"latitude": "40.704592",
"longitude": "-74.016957",
"park_site_name": "Battery Park - DSNY Partnership",
"site_type": "Outdoor "
},
{
"address": "Battery Park City",
"borough": "Manhattan",
"latitude": "40.711576000000001",
"longitude": "-74.016051000000004",
"park_site_name": "Battery Park City",
"site_type": "Outdoor "
},
{
"address": "Battery Park City",
"borough": "Manhattan",
"latitude": "40.705075000000001",
"longitude": "-74.017115000000004",
"park_site_name": "Battery Park City",
"site_type": "Outdoor "
},
{
"borough": "Manhattan",
"latitude": "40.711565",
"longitude": "-74.015853000000007",
"park_site_name": "Battery Park City",
"site_type": "Outdoor"
},
{
"address": "100 Centre Street",
"borough": "Manhattan",
"latitude": "40.716092000000003",
"longitude": "-74.000134000000003",
"park_site_name": "Bayard St & Baxter St",
"site_type": "Outdoor "
},
{
"address": "Mt. Carmel Pl Btwn E 26 St & E 28 St",
"borough": "Manhattan",
"latitude": "40.739982",
"longitude": "-73.978053",
"park_site_name": "Bellevue South",
"site_type": "Outdoor "
},
{
"address": "Bennett Park",
"borough": "Manhattan",
"latitude": "40.852856",
"longitude": "-73.938098",
"park_site_name": "Bennett Park",
"site_type": "Outdoor "
},
{
"address": "W 11 St Btwn Hudson St & Bleecker St",
"borough": "Manhattan",
"latitude": "40.736401",
"longitude": "-74.005572",
"park_site_name": "Bleecker St. Playground",
"site_type": "Outdoor "
},
{
"address": "Outside Entrance",
"borough": "Manhattan",
"latitude": "40.712938999999999",
"longitude": "-74.007261999999997",
"park_site_name": "Broadway & Murray St",
"site_type": "Outdoor "
},
{
"address": "Outside Plaza Entrance",
"borough": "Manhattan",
"latitude": "40.712479999999999",
"longitude": "-74.007642000000004",
"park_site_name": "Broadway & Park Place",
"site_type": "Outdoor "
},
{
"address": "Bryant Park",
"borough": "Manhattan",
"latitude": "40.754390999999998",
"longitude": "-73.983401999999998",
"park_site_name": "Bryant Park",
"site_type": "Outdoor "
},
{
"address": "Bryant Park",
"borough": "Manhattan",
"latitude": "40.753954",
"longitude": "-73.984092",
"park_site_name": "Bryant Park - Bryant Park Corp.",
"site_type": "Outdoor "
},
{
"address": "Carl Shurz Park",
"borough": "Manhattan",
"latitude": "40.77453",
"longitude": "-73.943837",
"park_site_name": "Carl Shurz",
"site_type": "Outdoor "
},
{
"address": "143-145 St. Nicholas Avenue ",
"borough": "Manhattan",
"latitude": "40.804559",
"longitude": "-73.952985",
"park_site_name": "Carrie McCracken Garden/TRUCE",
"site_type": "Greenthumb"
},
{
"address": "31 Chambers Street",
"borough": "Manhattan",
"latitude": "40.712795999999997",
"longitude": "-74.004816000000005",
"park_site_name": "Centre St & Chambers St",
"site_type": "Outdoor "
},
{
"address": "Chelsea Park",
"borough": "Manhattan",
"latitude": "40.749849",
"longitude": "-74.000856",
"park_site_name": "Chelsea Park",
"site_type": "Outdoor "
},
{
"address": "430 W 25 St",
"borough": "Manhattan",
"latitude": "40.748355",
"longitude": "-74.002007",
"park_site_name": "Chelsea Rec Center",
"site_type": "Indoor"
},
{
"address": "Hudson River Park ",
"borough": "Manhattan",
"latitude": "40.749349000000002",
"longitude": "-74.007351",
"park_site_name": "Chelsea Waterside Park Field",
"site_type": "Outdoor"
},
{
"address": "Hudson River Park ",
"borough": "Manhattan",
"latitude": "40.749318000000002",
"longitude": "-74.006980999999996",
"park_site_name": "Chelsea Waterside Park Playground",
"site_type": "Outdoor"
},
{
"address": "City Hall Park ",
"borough": "Manhattan",
"latitude": "40.711834",
"longitude": "-74.007124",
"park_site_name": "City Hall Park ",
"site_type": "Outdoor "
},
{
"address": "City Hall Park ",
"borough": "Manhattan",
"latitude": "40.712806",
"longitude": "-74.004808",
"park_site_name": "City Hall Park ",
"site_type": "Outdoor "
},
{
"address": "City Hall Park ",
"borough": "Manhattan",
"latitude": "40.712896999999998",
"longitude": "-74.007268999999994",
"park_site_name": "City Hall Park ",
"site_type": "Outdoor "
},
{
"address": "City Hall Park ",
"borough": "Manhattan",
"latitude": "40.712517",
"longitude": "-74.007573",
"park_site_name": "City Hall Park ",
"site_type": "Outdoor "
},
{
"address": "Coleman Square Playground",
"borough": "Manhattan",
"latitude": "40.710746",
"longitude": "-73.993819",
"park_site_name": "Coleman Square Playground",
"site_type": "Outdoor "
},
{
"address": "Colonel Charles Young Playground",
"borough": "Manhattan",
"latitude": "40.819645",
"longitude": "-73.936417",
"park_site_name": "Colonel Young",
"site_type": "Outdoor "
},
{
"address": "Columbus Park",
"borough": "Manhattan",
"latitude": "40.71475",
"longitude": "-74.000096",
"park_site_name": "Columbus Park - DSNY Partnership",
"site_type": "Outdoor "
},
{
"address": "Hudson River Park ",
"borough": "Manhattan",
"latitude": "40.732377",
"longitude": "-74.010734999999997",
"park_site_name": "Courtyard West ",
"site_type": "Outdoor"
},
{
"address": "Harlem River Dr & 2 Ave ",
"borough": "Manhattan",
"latitude": "40.804284",
"longitude": "-73.931744",
"park_site_name": "Crack is Wack",
"site_type": "Outdoor "
},
{
"address": "DeSalvio Playground",
"borough": "Manhattan",
"latitude": "40.721757",
"longitude": "-73.996052",
"park_site_name": "Desalvio",
"site_type": "Outdoor "
},
{
"address": "Centre Street",
"borough": "Manhattan",
"latitude": "40.715110000000003",
"longitude": "-74.002358999999998",
"park_site_name": "DSNY Main Office -Worth St",
"site_type": "Outdoor"
},
{
"address": "Lafayette Street",
"borough": "Manhattan",
"latitude": "40.715356",
"longitude": "-74.002984999999995",
"park_site_name": "DSNY Main Office -Worth St",
"site_type": "Outdoor"
},
{
"address": "Lexington Ave & E 129 St",
"borough": "Manhattan",
"latitude": "40.807191",
"longitude": "-73.934751",
"park_site_name": "Each One Teach One",
"site_type": "Outdoor "
},
{
"address": "East River Bikeway",
"borough": "Manhattan",
"latitude": "40.716205",
"longitude": "-73.975494",
"park_site_name": "East River Park- DSNY partnership",
"site_type": "Outdoor "
},
{
"address": "Broadway Btwn 39 St & 40 St",
"borough": "Manhattan",
"latitude": "40.753937999999998",
"longitude": "-73.986947000000001",
"park_site_name": "Fashion BID",
"site_type": "Outdoor "
},
{
"address": "57 St & Lexington Ave",
"borough": "Manhattan",
"latitude": "40.760841999999997",
"longitude": "-73.969307000000001",
"park_site_name": "Fashion BID",
"site_type": "Outdoor "
},
{
"address": "Father Demo Square",
"borough": "Manhattan",
"latitude": "40.730225",
"longitude": "-74.002246",
"park_site_name": "Father Dumo Square",
"site_type": "Outdoor "
},
{
"address": "Foley Square, Duane St",
"borough": "Manhattan",
"latitude": "40.714357",
"longitude": "-74.003085",
"park_site_name": "Foley Square - DSNY Partnership",
"site_type": "Outdoor "
},
{
"address": "Foley Square, Worth St",
"borough": "Manhattan",
"latitude": "40.715167",
"longitude": "-74.002599",
"park_site_name": "Foley Square - DSNY Partnership",
"site_type": "Outdoor "
},
{
"address": "7 Ave Btwn 150 St & 151 St",
"borough": "Manhattan",
"latitude": "40.824847",
"longitude": "-73.935623",
"park_site_name": "Fred Johnson",
"site_type": "Outdoor "
},
{
"address": " 42 St & Lexington Ave",
"borough": "Manhattan",
"latitude": "40.751691999999998",
"longitude": "-73.975975000000005",
"park_site_name": "Grand Central",
"site_type": "Outdoor "
},
{
"address": "270 Greenwich Street",
"borough": "Manhattan",
"latitude": "40.715108999999998",
"longitude": "-74.011381999999998",
"park_site_name": "Greenwich & Murray",
"site_type": "Outdoor "
},
{
"address": "Hamilton Fish Park",
"borough": "Manhattan",
"latitude": "40.719937",
"longitude": "-73.981432",
"park_site_name": "Hamilton Fish",
"site_type": "Indoor"
},
{
"address": "Pitt St",
"borough": "Manhattan",
"latitude": "40.720057",
"longitude": "-73.981636",
"park_site_name": "Hamilton Fish Recreation Center",
"site_type": "Outdoor "
},
{
"address": "East River Bikeway",
"borough": "Manhattan",
"latitude": "40.716618",
"longitude": "-73.975256",
"park_site_name": "Hamilton Fish Recreation Center",
"site_type": "Outdoor "
},
{
"address": "East River Bikeway",
"borough": "Manhattan",
"latitude": "40.717499",
"longitude": "-73.974858",
"park_site_name": "Hamilton Fish Recreation Center",
"site_type": "Outdoor "
},
{
"address": "East River Bikeway",
"borough": "Manhattan",
"latitude": "40.718372000000002",
"longitude": "-73.974673999999993",
"park_site_name": "Hamilton Fish Recreation Center",
"site_type": "Outdoor "
},
{
"address": "East River Bikeway",
"borough": "Manhattan",
"latitude": "40.718888",
"longitude": "-73.974598",
"park_site_name": "Hamilton Fish Recreation Center",
"site_type": "Outdoor "
},
{
"address": "East River Bikeway",
"borough": "Manhattan",
"latitude": "40.719832",
"longitude": "-73.974488",
"park_site_name": "Hamilton Fish Recreation Center",
"site_type": "Outdoor "
},
{
"address": "East River Bikeway",
"borough": "Manhattan",
"latitude": "40.721303",
"longitude": "-73.974323",
"park_site_name": "Hamilton Fish Recreation Center",
"site_type": "Outdoor "
},
{
"address": "East River Bikeway",
"borough": "Manhattan",
"latitude": "40.722911",
"longitude": "-73.973828",
"park_site_name": "Hamilton Fish Recreation Center",
"site_type": "Outdoor "
},
{
"address": "East River Bikeway",
"borough": "Manhattan",
"latitude": "40.723896",
"longitude": "-73.973184",
"park_site_name": "Hamilton Fish Recreation Center",
"site_type": "Outdoor "
},
{
"address": "East River Bikeway",
"borough": "Manhattan",
"latitude": "40.724113",
"longitude": "-73.973016",
"park_site_name": "Hamilton Fish Recreation Center",
"site_type": "Outdoor "
},
{
"address": "East River Bikeway",
"borough": "Manhattan",
"latitude": "40.725238",
"longitude": "-73.972364",
"park_site_name": "Hamilton Fish Recreation Center",
"site_type": "Outdoor "
},
{
"address": "35 W 134 St",
"borough": "Manhattan",
"latitude": "40.812748",
"longitude": "-73.939317",
"park_site_name": "Hansboro",
"site_type": "Indoor"
},
{
"address": "333 E 100 St",
"borough": "Manhattan",
"latitude": "40.78613",
"longitude": "-73.943294",
"park_site_name": "Harlem RBI – Community Group",
"site_type": "Outdoor "
},
{
"address": "Harlem River Park",
"borough": "Manhattan",
"latitude": "40.806036",
"longitude": "-73.934206",
"park_site_name": "Harlem River Ballfield",
"site_type": "Outdoor "
},
{
"address": "Hudson River Park ",
"borough": "Manhattan",
"latitude": "40.718741999999999",
"longitude": "-74.013092",
"park_site_name": "Harrison St Basketball Court",
"site_type": "Outdoor"
},
{
"address": "Washington St & Gansevoort St",
"borough": "Manhattan",
"latitude": "40.739465000000003",
"longitude": "-74.008161999999999",
"park_site_name": "High Line Park",
"site_type": "Outdoor "
},
{
"address": "High Line Park",
"borough": "Manhattan",
"latitude": "40.740850000000002",
"longitude": "-74.008055999999996",
"park_site_name": "High Line Park",
"site_type": "Outdoor "
},
{
"address": "High Line Park",
"borough": "Manhattan",
"latitude": "40.743298000000003",
"longitude": "-74.007034000000004",
"park_site_name": "High Line Park",
"site_type": "Outdoor "
},
{
"address": "Washington Bridge",
"borough": "Manhattan",
"latitude": "40.847983",
"longitude": "-73.929251",
"park_site_name": "Highbridge",
"site_type": "Indoor"
},
{
"address": "W 20 St",
"borough": "Manhattan",
"latitude": "40.746041",
"longitude": "-74.006109",
"park_site_name": "Highline Entrance+Park",
"site_type": "Outdoor "
},
{
"address": "Hudson River Park",
"borough": "Manhattan",
"latitude": "40.731457",
"longitude": "-74.010973",
"park_site_name": "Hudson River Park",
"site_type": "Outdoor "
},
{
"address": "14 St Park",
"borough": "Manhattan",
"latitude": "40.742795000000001",
"longitude": "-74.008032999999998",
"park_site_name": "Hudson River Park",
"site_type": "Outdoor"
},
{
"address": "Pier 62 Garden Area",
"borough": "Manhattan",
"latitude": "40.748683999999997",
"longitude": "-74.008825000000002",
"park_site_name": "Hudson River Park",
"site_type": "Outdoor"
},
{
"address": "Pier 62 Skate Park",
"borough": "Manhattan",
"latitude": "40.748506999999996",
"longitude": "-74.009282999999996",
"park_site_name": "Hudson River Park",
"site_type": "Outdoor"
},
{
"address": "Pier 51 Playground",
"borough": "Manhattan",
"latitude": "40.738145000000003",
"longitude": "-74.010417000000004",
"park_site_name": "Hudson River Park",
"site_type": "Outdoor"
},
{
"address": "Pier 84 (43 St Bike Shop)",
"borough": "Manhattan",
"latitude": "40.762839",
"longitude": "-74.001011000000005",
"park_site_name": "Hudson River Park",
"site_type": "Outdoor"
},
{
"address": "Pier 66 Seating Area",
"borough": "Manhattan",
"latitude": "40.751987",
"longitude": "-74.008443",
"park_site_name": "Hudson River Park",
"site_type": "Outdoor"
},
{
"address": "Pier 95",
"borough": "Manhattan",
"latitude": "40.770381",
"longitude": "-73.995823999999999",
"park_site_name": "Hudson River Park",
"site_type": "Outdoor"
},
{
"address": "Pier 40 Courtyard & Tunel",
"borough": "Manhattan",
"latitude": "40.728833000000002",
"longitude": "-74.011899",
"park_site_name": "Hudson River Park",
"site_type": "Outdoor"
},
{
"address": "Tennis Courts",
"borough": "Manhattan",
"latitude": "40.727097000000001",
"longitude": "-74.011511999999996",
"park_site_name": "Hudson River Park",
"site_type": "Outdoor"
},
{
"address": "60 Centre Street",
"borough": "Manhattan",
"latitude": "40.714666000000001",
"longitude": "-74.002176000000006",
"park_site_name": "Hudson River Park",
"site_type": "Outdoor"
},
{
"address": "Battery Park Entrance (State St & Water St)",
"borough": "Manhattan",
"latitude": "40.702410999999998",
"longitude": "-74.012878999999998",
"park_site_name": "Hudson River Park",
"site_type": "Outdoor"
},
{
"address": "Essex St & Delancy St",
"borough": "Manhattan",
"latitude": "40.702350000000003",
"longitude": "-74.014392999999998",
"park_site_name": "Hudson River Park",
"site_type": "Outdoor"
},
{
"address": "White Hall Ferry Terminal (Indoor & Outdoor)",
"borough": "Manhattan",
"latitude": "40.701307",
"longitude": "-74.011998000000006",
"park_site_name": "Hudson River Park",
"site_type": "Outdoor"
},
{
"address": "Imagination Playground",
"borough": "Manhattan",
"latitude": "40.706124",
"longitude": "-74.004217",
"park_site_name": "Imagination Playground",
"site_type": "Outdoor "
},
{
"address": "Inwood Hill Park",
"borough": "Manhattan",
"latitude": "40.87126",
"longitude": "-73.930765",
"park_site_name": "Inwood Dyckman fields",
"site_type": "Outdoor "
},
{
"address": "Inwood Hill Park",
"borough": "Manhattan",
"latitude": "40.872594",
"longitude": "-73.930199",
"park_site_name": "Inwood Dyckman fields",
"site_type": "Outdoor "
},
{
"address": "Inwood Hill Park",
"borough": "Manhattan",
"latitude": "40.867338",
"longitude": "-73.929011",
"park_site_name": "Inwood Hill",
"site_type": "Outdoor "
},
{
"address": "218 St & Indian Rd",
"borough": "Manhattan",
"latitude": "40.87303",
"longitude": "-73.918427",
"park_site_name": "Inwood Hill Nature Center",
"site_type": "Indoor"
},
{
"address": "Jay Hood Wright Park",
"borough": "Manhattan",
"latitude": "40.84637",
"longitude": "-73.940825",
"park_site_name": "J. Hood Wright",
"site_type": "Outdoor "
},
{
"address": "Jay Hood Wright Park",
"borough": "Manhattan",
"latitude": "40.84696",
"longitude": "-73.940028",
"park_site_name": "J. Hood Wright",
"site_type": "Indoor"
},
{
"address": "89 Bradhurst Ave",
"borough": "Manhattan",
"latitude": "40.824297",
"longitude": "-73.942288",
"park_site_name": "Jackie Robinson",
"site_type": "Indoor"
},
{
"address": "Jackson Square",
"borough": "Manhattan",
"latitude": "40.738952",
"longitude": "-74.002882",
"park_site_name": "Jackson Square",
"site_type": "Outdoor "
},
{
"address": "Fort Tyron Park",
"borough": "Manhattan",
"latitude": "40.859226",
"longitude": "-73.934552",
"park_site_name": "Jacob Javits Playground",
"site_type": "Outdoor "
},
{
"address": "Jacob Schiff Playground ",
"borough": "Manhattan",
"latitude": "40.820071",
"longitude": "-73.952107",
"park_site_name": "Jacob Schiff",
"site_type": "Outdoor "
},
{
"address": "John Jay Park",
"borough": "Manhattan",
"latitude": "40.769445",
"longitude": "-73.949898",
"park_site_name": "John Jay Park",
"site_type": "Outdoor "
},
{
"address": "2015 Lexington Avenue ",
"borough": "Manhattan",
"latitude": "40.802588",
"longitude": "-73.938468",
"park_site_name": "Life Spire (CRMD, Inc.)",
"site_type": "Greenthumb"
},
{
"address": "Broadway & 66 St",
"borough": "Manhattan",
"latitude": "40.773715000000003",
"longitude": "-73.981956999999994",
"park_site_name": "Lincoln Square",
"site_type": "Outdoor "
},
{
"address": "Broadway & 63 St ",
"borough": "Manhattan",
"latitude": "40.771372",
"longitude": "-73.982072000000002",
"park_site_name": "Lincoln Square",
"site_type": "Outdoor"
},
{
"address": "1547 Lexington Ave",
"borough": "Manhattan",
"latitude": "40.828677",
"longitude": "-73.948059",
"park_site_name": "Maggie's Garden",
"site_type": "Greenthumb"
},
{
"address": "W 43 St Btwn 8 & 9 Ave",
"borough": "Manhattan",
"latitude": "40.758977",
"longitude": "-73.991396",
"park_site_name": "McCaffry Plgd – Parks",
"site_type": "Outdoor "
},
{
"address": "955 Columbus Avenue ",
"borough": "Manhattan",
"latitude": "40.799707",
"longitude": "-73.962203",
"park_site_name": "Mobilization for Change Community Garden",
"site_type": "Greenthumb"
},
{
"address": "W 116 St",
"borough": "Manhattan",
"latitude": "40.805621",
"longitude": "-73.958455",
"park_site_name": "Morningside Park",
"site_type": "Outdoor "
},
{
"address": "Morningside Ave",
"borough": "Manhattan",
"latitude": "40.80413",
"longitude": "-73.958298",
"park_site_name": "Morningside Park",
"site_type": "Outdoor "
},
{
"address": "W 113 St",
"borough": "Manhattan",
"latitude": "40.803133",
"longitude": "-73.958336",
"park_site_name": "Morningside Park",
"site_type": "Outdoor "
},
{
"address": "Morningside Dr",
"borough": "Manhattan",
"latitude": "40.801921",
"longitude": "-73.960854",
"park_site_name": "Morningside Park",
"site_type": "Outdoor "
},
{
"address": "455-457 W 162nd Street ",
"borough": "Manhattan",
"latitude": "40.835708",
"longitude": "-73.939122",
"park_site_name": "Morris Jumel Ecological Garden",
"site_type": "Greenthumb"
},
{
"address": "W 79 St & Columbus Ave",
"borough": "Manhattan",
"latitude": "40.781936",
"longitude": "-73.97542",
"park_site_name": "Museum of Natural History/Planitarium",
"site_type": "Outdoor "
},
{
"address": "W 78 St & Columbus Ave",
"borough": "Manhattan",
"latitude": "40.781265",
"longitude": "-73.975927",
"park_site_name": "Museum of Natural History/Planitarium",
"site_type": "Outdoor "
},
{
"address": "Central Park West",
"borough": "Manhattan",
"latitude": "40.780558",
"longitude": "-73.972924",
"park_site_name": "Museum of Natural History/Planitarium",
"site_type": "Outdoor "
},
{
"address": "W 81 St Loop",
"borough": "Manhattan",
"latitude": "40.782175",
"longitude": "-73.972256",
"park_site_name": "Museum of Natural History/Planitarium",
"site_type": "Outdoor "
},
{
"address": "W 81 St Loop",
"borough": "Manhattan",
"latitude": "40.782665999999999",
"longitude": "-73.973214999999996",
"park_site_name": "Museum of Natural History/Planitarium",
"site_type": "Outdoor "
},
{
"address": "275-277 W. 122nd St.",
"borough": "Manhattan",
"latitude": "40.808183",
"longitude": "-73.95205",
"park_site_name": "Our Little Green Acres (Garden Eight)",
"site_type": "Greenthumb"
},
{
"address": "Outside Plaza  Entrance",
"borough": "Manhattan",
"latitude": "40.711826000000002",
"longitude": "-74.007142000000002",
"park_site_name": "Park Row & Beekman Street",
"site_type": "Outdoor "
},
{
"address": "116-122 West 134th Street ",
"borough": "Manhattan",
"latitude": "40.814478",
"longitude": "-73.943498",
"park_site_name": "Parks Council Success Garden- P.S. 175 I.S. 275",
"site_type": "Greenthumb"
},
{
"address": "Inwood Hill Park",
"borough": "Manhattan",
"latitude": "40.867205",
"longitude": "-73.929121",
"park_site_name": "Payson Playground",
"site_type": "Subproperty"
},
{
"address": "18 Mount Morris Park",
"borough": "Manhattan",
"latitude": "40.805463",
"longitude": "-73.946284",
"park_site_name": "Pelham Fritz",
"site_type": "Indoor"
},
{
"address": "Pier 25 West End, Hudson River Park",
"borough": "Manhattan",
"latitude": "40.720478",
"longitude": "-74.016222999999997",
"park_site_name": "Pier 25",
"site_type": "Outdoor"
},
{
"address": "Hudson River Park ",
"borough": "Manhattan",
"park_site_name": "Pier 25",
"site_type": "Outdoor"
},
{
"address": "Hudson River Park ",
"borough": "Manhattan",
"latitude": "40.720176000000002",
"longitude": "-74.013948999999997",
"park_site_name": "Pier 25 Mini Golf & Skate Park",
"site_type": "Outdoor"
},
{
"address": "Pier 25 Playground West Gate, Hudson River Park",
"borough": "Manhattan",
"latitude": "40.719714000000003",
"longitude": "-74.012943000000007",
"park_site_name": "Pier 25 Playground",
"site_type": "Outdoor"
},
{
"address": "Pier 40 Courtyard & Tunnel, Hudson River Park",
"borough": "Manhattan",
"latitude": "40.729170000000003",
"longitude": "-74.011317000000005",
"park_site_name": "Pier 40",
"site_type": "Outdoor"
},
{
"address": "Pier 40, Hudson River Park",
"borough": "Manhattan",
"latitude": "40.730379999999997",
"longitude": "-74.011004999999997",
"park_site_name": "Pier 40 Dog Run",
"site_type": "Outdoor"
},
{
"address": "Pier 40, Hudson River Park",
"borough": "Manhattan",
"latitude": "40.728828",
"longitude": "-74.011903000000004",
"park_site_name": "Pier 40 Roof",
"site_type": "Outdoor"
},
{
"address": "Hudson River Park ",
"borough": "Manhattan",
"latitude": "40.732970999999999",
"longitude": "-74.010874999999999",
"park_site_name": "Pier 45",
"site_type": "Outdoor"
},
{
"address": "Hudson River Park ",
"borough": "Manhattan",
"latitude": "40.743409999999997",
"longitude": "-74.009",
"park_site_name": "Pier 57",
"site_type": "Outdoor"
},
{
"address": "Hudson River Park ",
"borough": "Manhattan",
"latitude": "40.763247",
"longitude": "-74.000041999999993",
"park_site_name": "Pier 84 (44 St Park Building)",
"site_type": "Outdoor"
},
{
"address": "342-353 Pleasant Ave./502 E. 119th Street",
"borough": "Manhattan",
"latitude": "40.796609",
"longitude": "-73.931602",
"park_site_name": "Pleasant Village Community Garden",
"site_type": "Greenthumb"
},
{
"address": "Hudson River Park ",
"borough": "Manhattan",
"latitude": "40.707656",
"longitude": "-74.015975999999995",
"park_site_name": "Promenade South",
"site_type": "Outdoor"
},
{
"address": "E 54 St Btwn 1 Ave & 2 Ave",
"borough": "Manhattan",
"latitude": "40.756564",
"longitude": "-73.965043",
"park_site_name": "Rec Center  54",
"site_type": "Indoor"
},
{
"address": "Riverside Park",
"borough": "Manhattan",
"latitude": "40.787059",
"longitude": "-73.982257",
"park_site_name": "Riverside Park- Plgd @ 83rd St.",
"site_type": "Outdoor "
},
{
"address": "155 St & Frederick Douglass Blvd",
"borough": "Manhattan",
"latitude": "40.829744",
"longitude": "-73.936431",
"park_site_name": "Rucker Park-parks",
"site_type": "Outdoor "
},
{
"address": "Chrystie St",
"borough": "Manhattan",
"latitude": "40.721035",
"longitude": "-73.991596",
"park_site_name": "Sara D. Roosevelt",
"site_type": "Outdoor "
},
{
"address": "Seward park",
"borough": "Manhattan",
"latitude": "40.714603",
"longitude": "-73.990111",
"park_site_name": "Seward park",
"site_type": "Outdoor "
},
{
"address": "78-92 Avenue B",
"borough": "Manhattan",
"latitude": "40.724254",
"longitude": "-73.982088",
"park_site_name": "Sixth St. & Ave. B",
"site_type": "Greenthumb"
},
{
"address": "Broadway &  Prince St ",
"borough": "Manhattan",
"latitude": "40.724319000000001",
"longitude": "-73.997827999999998",
"park_site_name": "Soho Parnership",
"site_type": "Outdoor "
},
{
"address": "Spring St & Lafayette St",
"borough": "Manhattan",
"latitude": "40.722270000000002",
"longitude": "-73.997287",
"park_site_name": "Soho Partnership",
"site_type": "Outdoor "
},
{
"address": "St. Catherine's Park",
"borough": "Manhattan",
"latitude": "40.76512",
"longitude": "-73.958509",
"park_site_name": "St. Catherine's ",
"site_type": "Outdoor "
},
{
"address": "135 St & St. Nicholas Ave",
"borough": "Manhattan",
"latitude": "40.817272000000003",
"longitude": "-73.948248000000007",
"park_site_name": "St. Nicholas",
"site_type": "Outdoor "
},
{
"address": "St. Vartan's Park",
"borough": "Manhattan",
"latitude": "40.744858",
"longitude": "-73.973764",
"park_site_name": "St. Vartan's ",
"site_type": "Outdoor "
},
{
"address": "East River Bikeway",
"borough": "Manhattan",
"latitude": "40.73277",
"longitude": "-73.97406",
"park_site_name": "Stuyvesant- Parks",
"site_type": "Outdoor "
},
{
"address": "Jefferson Park",
"borough": "Manhattan",
"latitude": "40.793412",
"longitude": "-73.937115",
"park_site_name": "Thomas Jefferson",
"site_type": "Outdoor "
},
{
"address": "Duane St & Centre St",
"borough": "Manhattan",
"latitude": "40.714045",
"longitude": "-74.003135",
"park_site_name": "Thomas Payne",
"site_type": "Outdoor "
},
{
"address": "Duane St & Lafayette St",
"borough": "Manhattan",
"latitude": "40.714224",
"longitude": "-74.003285",
"park_site_name": "Thomas Payne",
"site_type": "Outdoor "
},
{
"address": "Centre St & Worth St",
"borough": "Manhattan",
"latitude": "40.715059",
"longitude": "-74.002355",
"park_site_name": "Thomas Payne",
"site_type": "Outdoor "
},
{
"address": "Lafayette St & Worth St",
"borough": "Manhattan",
"latitude": "40.715355",
"longitude": "-74.002982",
"park_site_name": "Thomas Payne",
"site_type": "Outdoor "
},
{
"address": "42 St Btwn Broadway & 7 Ave",
"borough": "Manhattan",
"latitude": "40.755913999999997",
"longitude": "-73.986711999999997",
"park_site_name": "Times Square",
"site_type": "Outdoor "
},
{
"address": "Avenue A & E 7 St",
"borough": "Manhattan",
"latitude": "40.72603",
"longitude": "-73.983353",
"park_site_name": "Tompkins Square Park",
"site_type": "Outdoor "
},
{
"address": "Avenue A & St. Mark's Pl",
"borough": "Manhattan",
"latitude": "40.726599",
"longitude": "-73.982985",
"park_site_name": "Tompkins Square Park",
"site_type": "Outdoor "
},
{
"address": "Avenue B & E 8 St",
"borough": "Manhattan",
"latitude": "40.725698",
"longitude": "-73.980843",
"park_site_name": "Tompkins Square Park",
"site_type": "Outdoor "
},
{
"address": "1 Clarkson St",
"borough": "Manhattan",
"latitude": "40.729474",
"longitude": "-74.005489",
"park_site_name": "Tony Dapolito",
"site_type": "Indoor"
},
{
"address": "Greenwich & North Moore",
"borough": "Manhattan",
"latitude": "40.719979000000002",
"longitude": "-74.010272000000001",
"park_site_name": "Tribeca Partnership",
"site_type": "Outdoor "
},
{
"address": "Union Square Park",
"borough": "Manhattan",
"latitude": "40.735243",
"longitude": "-73.991012",
"park_site_name": "Union Square ",
"site_type": "Outdoor "
},
{
"address": "Union Square Park",
"borough": "Manhattan",
"latitude": "40.735219",
"longitude": "-73.991603",
"park_site_name": "Union Square ",
"site_type": "Outdoor "
},
{
"address": "Union Square Park",
"borough": "Manhattan",
"latitude": "40.735292",
"longitude": "-73.991614",
"park_site_name": "Union Square ",
"site_type": "Outdoor "
},
{
"address": "Union Square Park",
"borough": "Manhattan",
"latitude": "40.737023",
"longitude": "-73.990324",
"park_site_name": "Union Square ",
"site_type": "Outdoor "
},
{
"address": "Union Square Park",
"borough": "Manhattan",
"latitude": "40.736535",
"longitude": "-73.989754",
"park_site_name": "Union Square ",
"site_type": "Outdoor "
},
{
"address": "Union Square Park",
"borough": "Manhattan",
"latitude": "40.736122",
"longitude": "-73.98963",
"park_site_name": "Union Square ",
"site_type": "Outdoor "
},
{
"address": "Union Square Park",
"borough": "Manhattan",
"latitude": "40.73534",
"longitude": "-73.990127",
"park_site_name": "Union Square ",
"site_type": "Outdoor "
},
{
"address": "Verdi Square",
"borough": "Manhattan",
"latitude": "40.77878",
"longitude": "-73.981788",
"park_site_name": "Verdi Square",
"site_type": "Outdoor "
},
{
"address": "Thompson St",
"borough": "Manhattan",
"latitude": "40.72534",
"longitude": "-74.002324",
"park_site_name": "Vesuvio Playground",
"site_type": "Outdoor "
},
{
"address": "107 Wall Street",
"borough": "Manhattan",
"latitude": "40.704695000000001",
"longitude": "-74.006729000000007",
"park_site_name": "Wall Street (South/Front)",
"site_type": "Outdoor "
},
{
"address": "100 Wall Street",
"borough": "Manhattan",
"latitude": "40.704918999999997",
"longitude": "-74.007084000000006",
"park_site_name": "Wall Street (Water/Front)",
"site_type": "Outdoor "
},
{
"address": "270 Greenwich Street",
"borough": "Manhattan",
"latitude": "40.715575000000001",
"longitude": "-74.011301000000003",
"park_site_name": "Warren & Greenwich",
"site_type": "Outdoor "
},
{
"address": "Washington Market Park",
"borough": "Manhattan",
"latitude": "40.717298",
"longitude": "-74.011001",
"park_site_name": "Washington Market Playground",
"site_type": "Outdoor "
},
{
"address": "Washington Square Park",
"borough": "Manhattan",
"latitude": "40.729689",
"longitude": "-73.99662",
"park_site_name": "Washington Square Park",
"site_type": "Outdoor "
},
{
"address": "West 124th Street and 5th Avenue ",
"borough": "Manhattan",
"latitude": "40.806938",
"longitude": "-73.945301",
"park_site_name": "West 124th Street Community Garden",
"site_type": "Greenthumb"
},
{
"address": "6 Ave Btwn W 3 St & W 4 St",
"borough": "Manhattan",
"latitude": "40.731315",
"longitude": "-74.000988",
"park_site_name": "West 4th St. Courts (PLGD)",
"site_type": "Outdoor "
},
{
"address": "West End Ave & 86 St",
"borough": "Manhattan",
"latitude": "40.788756999999997",
"longitude": "-73.977788000000004",
"park_site_name": "West End Avenuw",
"site_type": "Outdoor "
},
{
"address": "State Street outside Whitehall Ferry Terminal ",
"borough": "Manhattan",
"latitude": "40.702334999999998",
"longitude": "-74.014384000000007",
"park_site_name": "Whitehall Ferry Terminal",
"site_type": "Outdoor "
},
{
"address": "35-30 35 St",
"borough": "Queens",
"latitude": "40.755803",
"longitude": "-73.926310000000001",
"park_site_name": "A.R.R.O.W. Field house",
"site_type": "Indoor"
},
{
"borough": "Queens",
"latitude": "40.728344",
"longitude": "-73.815158999999994",
"park_site_name": "Abe Wolfson",
"site_type": "Outdoor "
},
{
"address": "Addabo Park",
"borough": "Queens",
"latitude": "40.673136999999997",
"longitude": "-73.854609999999994",
"park_site_name": "Addabo Park",
"site_type": "Outdoor "
},
{
"address": "131-40 Fowler Ave",
"borough": "Queens",
"latitude": "40.751418000000001",
"longitude": "-73.833843000000002",
"park_site_name": "Al Oerter Rec Center ",
"site_type": "Indoor"
},
{
"address": "22806 Northern Blvd",
"borough": "Queens",
"latitude": "40.762689999999999",
"longitude": "-73.753297000000003",
"park_site_name": "Alley Pond Environmental",
"site_type": "Indoor"
},
{
"address": "Alley Pond Park",
"borough": "Queens",
"latitude": "40.740062999999999",
"longitude": "-73.734290999999999",
"park_site_name": "Alley Springfield, picnic and athletic",
"site_type": "Subproperty"
},
{
"address": "Alley Pond Park",
"borough": "Queens",
"latitude": "40.739522999999998",
"longitude": "-73.734881000000001",
"park_site_name": "Alley Springfield, picnic and athletic",
"site_type": "Subproperty"
},
{
"address": "Alley Pond Park",
"borough": "Queens",
"latitude": "40.739294999999998",
"longitude": "-73.735872999999998",
"park_site_name": "Alley Springfield, picnic and athletic",
"site_type": "Subproperty"
},
{
"address": "Alley Pond Park",
"borough": "Queens",
"latitude": "40.738985999999997",
"longitude": "-73.737665000000007",
"park_site_name": "Alley Springfield, picnic and athletic",
"site_type": "Subproperty"
},
{
"address": "Alley Pond Park",
"borough": "Queens",
"latitude": "40.739758000000002",
"longitude": "-73.735460000000003",
"park_site_name": "Alley Springfield, picnic and athletic",
"site_type": "Subproperty"
},
{
"address": "Astoria Park S",
"borough": "Queens",
"latitude": "40.776788000000003",
"longitude": "-73.927530000000004",
"park_site_name": "Astoria Park",
"site_type": "Outdoor "
},
{
"address": "Ehrenreich-Austin Playground",
"borough": "Queens",
"latitude": "40.715851000000001",
"longitude": "-73.836995000000002",
"park_site_name": "Austin E",
"site_type": "Outdoor "
},
{
"address": "150-14 115th Drive ",
"borough": "Queens",
"latitude": "40.683453",
"longitude": "-73.79213",
"park_site_name": "B.C.C.A. Mini-Park and Garden",
"site_type": "Greenthumb"
},
{
"address": "155 St & 125 Ave",
"borough": "Queens",
"latitude": "40.675268000000003",
"longitude": "-73.786905000000004",
"park_site_name": "Baisley Pond Park",
"site_type": "Outdoor "
},
{
"address": "Lakeview Blvd & 118 Ave",
"borough": "Queens",
"latitude": "40.682417999999998",
"longitude": "-73.785392000000002",
"park_site_name": "Baisley Pond Park",
"site_type": "Outdoor "
},
{
"address": "155 St & 118 Ave",
"borough": "Queens",
"latitude": "40.681365999999997",
"longitude": "-73.787853999999996",
"park_site_name": "Baisley Pond Park",
"site_type": "Outdoor "
},
{
"address": "Bland Playground",
"borough": "Queens",
"latitude": "40.758381",
"longitude": "-73.831007999999997",
"park_site_name": "Bland Playground",
"site_type": "Outdoor "
},
{
"address": "Inwood Stree between Lakewood & Shore Aves",
"borough": "Queens",
"latitude": "40.690593999999997",
"longitude": "-73.803821999999997",
"park_site_name": "Block Association #81",
"site_type": "Greenthumb"
},
{
"address": "143 Ave",
"borough": "Queens",
"latitude": "40.663460000000001",
"longitude": "-73.741328999999993",
"park_site_name": "Brookville Park",
"site_type": "Outdoor "
},
{
"address": "232 St",
"borough": "Queens",
"latitude": "40.661051",
"longitude": "-73.746639000000002",
"park_site_name": "Brookville Park",
"site_type": "Outdoor "
},
{
"address": "147 Ave",
"borough": "Queens",
"latitude": "40.657674",
"longitude": "-73.748388000000006",
"park_site_name": "Brookville Park",
"site_type": "Outdoor "
},
{
"address": "Crocheron Park",
"borough": "Queens",
"latitude": "40.770752999999999",
"longitude": "-73.771739999999994",
"park_site_name": "Buzz O'Rourke Playground",
"site_type": "Subproperty"
},
{
"address": "135 Ave btwn 131 St & 132 St",
"borough": "Queens",
"latitude": "40.667504999999998",
"longitude": "-73.807496",
"park_site_name": "Byrne Park",
"site_type": "Outdoor "
},
{
"address": "Captain Tilly Park",
"borough": "Queens",
"latitude": "40.712529000000004",
"longitude": "-73.799377000000007",
"park_site_name": "Captain Tilly",
"site_type": "Outdoor "
},
{
"address": "Astoria Park",
"borough": "Queens",
"latitude": "40.779896999999998",
"longitude": "-73.922391000000005",
"park_site_name": "Charybdis plgd",
"site_type": "Subproperty"
},
{
"address": "33 Rd & 215 Pl",
"borough": "Queens",
"latitude": "40.772080000000003",
"longitude": "-73.769437999999994",
"park_site_name": "Crocheron Park",
"site_type": "Outdoor "
},
{
"address": "30-15 Seagirt Blvd. @ Beach 31st Street",
"borough": "Queens",
"latitude": "40.595548000000001",
"longitude": "-73.762265999999997",
"park_site_name": "Culinary Kids",
"site_type": "Greenthumb"
},
{
"address": "Cunningham Park",
"borough": "Queens",
"latitude": "40.736722",
"longitude": "-73.770538000000002",
"park_site_name": "Cunningham Ballfields",
"site_type": "Outdoor "
},
{
"address": "Cunningham Park",
"borough": "Queens",
"latitude": "40.735230000000001",
"longitude": "-73.772082999999995",
"park_site_name": "Cunningham Ballfields",
"site_type": "Outdoor "
},
{
"address": "Cunningham Park",
"borough": "Queens",
"latitude": "40.730966000000002",
"longitude": "-73.772458",
"park_site_name": "Cunningham Picnic",
"site_type": "Outdoor "
},
{
"address": "Cunningham Park",
"borough": "Queens",
"latitude": "40.73836",
"longitude": "-73.764990999999995",
"park_site_name": "Cunningham Soccer",
"site_type": "Outdoor "
},
{
"address": "Cunningham Park",
"borough": "Queens",
"latitude": "40.730117",
"longitude": "-73.7727",
"park_site_name": "Cunningham tennis courts",
"site_type": "Outdoor "
},
{
"address": "Cunningham Park",
"borough": "Queens",
"latitude": "40.729498999999997",
"longitude": "-73.772887999999995",
"park_site_name": "Cunningham tennis courts",
"site_type": "Outdoor "
},
{
"address": "Detective Keith Williams Park",
"borough": "Queens",
"latitude": "40.701915",
"longitude": "-73.783477000000005",
"park_site_name": "Detective Keith Williams",
"site_type": "Outdoor "
},
{
"address": "Elmhurst Park",
"borough": "Queens",
"latitude": "40.730193",
"longitude": "-73.885301999999996",
"park_site_name": "Elmhurst Park",
"site_type": "Outdoor "
},
{
"address": "United Nations Ave S",
"borough": "Queens",
"latitude": "40.744249000000003",
"longitude": "-73.844067999999993",
"park_site_name": "Flushing Meadows Corona Park",
"site_type": "Outdoor "
},
{
"address": "Amphitheater Bridge",
"borough": "Queens",
"latitude": "40.740388000000003",
"longitude": "-73.841879000000006",
"park_site_name": "Flushing Meadows Corona Park",
"site_type": "Outdoor "
},
{
"address": "Meadow Lake Trail E",
"borough": "Queens",
"latitude": "40.737039000000003",
"longitude": "-73.837856000000002",
"park_site_name": "Flushing Meadows Corona Park",
"site_type": "Outdoor "
},
{
"address": "Dinosaur Playground",
"borough": "Queens",
"latitude": "40.735168999999999",
"longitude": "-73.843434999999999",
"park_site_name": "Flushing Meadows Corona Park",
"site_type": "Outdoor "
},
{
"address": "Meadow Lake Trail W",
"borough": "Queens",
"latitude": "40.7333",
"longitude": "-73.841976000000003",
"park_site_name": "Flushing Meadows Corona Park",
"site_type": "Outdoor "
},
{
"address": "Baseball Field 13",
"borough": "Queens",
"latitude": "40.728112000000003",
"longitude": "-73.835592000000005",
"park_site_name": "Flushing Meadows Corona Park",
"site_type": "Outdoor "
},
{
"address": "Unisphere",
"borough": "Queens",
"latitude": "40.746639000000002",
"longitude": "-73.844583",
"park_site_name": "Flushing Meadows Corona Park",
"site_type": "Outdoor "
},
{
"address": "Field 2, Avenue of Commerce",
"borough": "Queens",
"latitude": "40.749150999999998",
"longitude": "-73.840065999999993",
"park_site_name": "Flushing Meadows Corona Park",
"site_type": "Outdoor "
},
{
"address": "Avery Ave & 131 St",
"borough": "Queens",
"latitude": "40.751882000000002",
"longitude": "-73.837458999999996",
"park_site_name": "Flushing Meadows Pool",
"site_type": "Indoor"
},
{
"address": "Bandshell",
"borough": "Queens",
"latitude": "40.698413000000002",
"longitude": "-73.857671999999994",
"park_site_name": "Forest Park",
"site_type": "Outdoor "
},
{
"address": "Tennis Courts",
"borough": "Queens",
"latitude": "40.697470000000003",
"longitude": "-73.856663999999995",
"park_site_name": "Forest Park",
"site_type": "Outdoor"
},
{
"address": "Dog Run",
"borough": "Queens",
"latitude": "40.696640000000002",
"longitude": "-73.860343999999998",
"park_site_name": "Forest Park",
"site_type": "Outdoor"
},
{
"address": "Woodhaven Blvd & Park Lane S",
"borough": "Queens",
"latitude": "40.697989999999997",
"longitude": "-73.853295000000003",
"park_site_name": "Forest Park",
"site_type": "Outdoor"
},
{
"address": "Victory Field Soccer & Running Track",
"borough": "Queens",
"latitude": "40.701853999999997",
"longitude": "-73.853144999999998",
"park_site_name": "Forest Park",
"site_type": "Outdoor"
},
{
"address": "Victory Field Baseball",
"borough": "Queens",
"latitude": "40.702292999999997",
"longitude": "-73.854765",
"park_site_name": "Forest Park",
"site_type": "Outdoor"
},
{
"address": "Myrtle Ave & Park Lane S",
"borough": "Queens",
"latitude": "40.701272000000003",
"longitude": "-73.841921999999997",
"park_site_name": "Forest Park",
"site_type": "Outdoor"
},
{
"address": "Weaver Rd & Totten Ave",
"borough": "Queens",
"latitude": "40.792357000000003",
"longitude": "-73.777012999999997",
"park_site_name": "Fort Totten",
"site_type": "Outdoor "
},
{
"address": "North Loop",
"borough": "Queens",
"latitude": "40.794781",
"longitude": "-73.779207",
"park_site_name": "Fort Totten",
"site_type": "Outdoor"
},
{
"address": "Story Rd",
"borough": "Queens",
"latitude": "40.792085",
"longitude": "-73.774356999999995",
"park_site_name": "Fort Totten",
"site_type": "Outdoor"
},
{
"address": "148th Street ",
"borough": "Queens",
"latitude": "40.692405999999998",
"longitude": "-73.794745000000006",
"park_site_name": "George Eagle Carr Community Garden",
"site_type": "Greenthumb"
},
{
"address": "Glendale Playground",
"borough": "Queens",
"latitude": "40.704591000000001",
"longitude": "-73.881944000000004",
"park_site_name": "Glendale Playground",
"site_type": "Outdoor "
},
{
"address": "10 St & Queens Plaza S",
"borough": "Queens",
"latitude": "40.753635000000003",
"longitude": "-73.947614999999999",
"park_site_name": "Greenthumb compound",
"site_type": "Outdoor "
},
{
"address": "Cleveland Park",
"borough": "Queens",
"latitude": "40.710068999999997",
"longitude": "-73.911456000000001",
"park_site_name": "Grover Cleveland",
"site_type": "Outdoor "
},
{
"address": "Cleveland Park",
"borough": "Queens",
"latitude": "40.71031",
"longitude": "-73.911062999999999",
"park_site_name": "Grover Cleveland",
"site_type": "Outdoor"
},
{
"address": "Hoffman Park",
"borough": "Queens",
"latitude": "40.733134999999997",
"longitude": "-73.871233000000004",
"park_site_name": "Hoffman Park",
"site_type": "Outdoor "
},
{
"address": "Hoffman Park",
"borough": "Queens",
"latitude": "40.733142999999998",
"longitude": "-73.871426999999997",
"park_site_name": "Hoffman Park",
"site_type": "Outdoor"
},
{
"address": "Hoffman Park",
"borough": "Queens",
"latitude": "40.733068000000003",
"longitude": "-73.870885000000001",
"park_site_name": "Hoffman Park",
"site_type": "Outdoor"
},
{
"address": "Hoffman Park",
"borough": "Queens",
"latitude": "40.732937999999997",
"longitude": "-73.870915999999994",
"park_site_name": "Hoffman Park",
"site_type": "Outdoor"
},
{
"address": "Hoffman Park",
"borough": "Queens",
"latitude": "40.732700999999999",
"longitude": "-73.871081000000004",
"park_site_name": "Hoffman Park",
"site_type": "Outdoor"
},
{
"address": "Hoffman Park",
"borough": "Queens",
"latitude": "40.733203000000003",
"longitude": "-73.871821999999995",
"park_site_name": "Hoffman Park",
"site_type": "Outdoor"
},
{
"address": "Juniper Valley Park",
"borough": "Queens",
"latitude": "40.720689",
"longitude": "-73.877521000000002",
"park_site_name": "Juniper Valley Park",
"site_type": "Outdoor"
},
{
"address": "Juniper Valley Park",
"borough": "Queens",
"latitude": "40.720412000000003",
"longitude": "-73.876474000000002",
"park_site_name": "Juniper Valley Park",
"site_type": "Outdoor"
},
{
"address": "Juniper Valley Park",
"borough": "Queens",
"latitude": "40.719988000000001",
"longitude": "-73.884692999999999",
"park_site_name": "Juniper Valley Park",
"site_type": "Outdoor"
},
{
"address": "Juniper Valley Park",
"borough": "Queens",
"latitude": "40.719841000000002",
"longitude": "-73.882970999999998",
"park_site_name": "Juniper Valley Park",
"site_type": "Outdoor"
},
{
"address": "Booth Memorial Ave ",
"borough": "Queens",
"latitude": "40.742502000000002",
"longitude": "-73.810260999999997",
"park_site_name": "Kissena Park",
"site_type": "Outdoor "
},
{
"address": "Lithonia Ave ",
"borough": "Queens",
"latitude": "40.749228000000002",
"longitude": "-73.803657999999999",
"park_site_name": "Kissena Park",
"site_type": "Outdoor"
},
{
"address": "Kissena Velodrome",
"borough": "Queens",
"latitude": "40.744148000000003",
"longitude": "-73.809332999999995",
"park_site_name": "Kissena Park",
"site_type": "Outdoor"
},
{
"address": "Booth Memorial Ave ",
"borough": "Queens",
"latitude": "40.742364000000002",
"longitude": "-73.808518000000007",
"park_site_name": "Kissena Park",
"site_type": "Outdoor"
},
{
"address": "Rose Ave",
"borough": "Queens",
"latitude": "40.747886999999999",
"longitude": "-73.809764999999999",
"park_site_name": "Kissena Park",
"site_type": "Outdoor"
},
{
"address": "93-29 Queens Blvd",
"borough": "Queens",
"latitude": "40.732225999999997",
"longitude": "-73.86515",
"park_site_name": "LBH Rec Center",
"site_type": "Indoor"
},
{
"address": "Marie Curie Park",
"borough": "Queens",
"latitude": "40.757266000000001",
"longitude": "-73.770977999999999",
"park_site_name": "Marie Curie Playground",
"site_type": "Outdoor "
},
{
"address": "McDonald Park",
"borough": "Queens",
"latitude": "40.721814999999999",
"longitude": "-73.845511000000002",
"park_site_name": "McDonald Park",
"site_type": "Outdoor "
},
{
"address": "McDonald Park",
"borough": "Queens",
"latitude": "40.722011999999999",
"longitude": "-73.846080000000001",
"park_site_name": "McDonald Park",
"site_type": "Outdoor"
},
{
"address": "McDonald Park",
"borough": "Queens",
"latitude": "40.722479999999997",
"longitude": "-73.847476999999998",
"park_site_name": "McDonald Park",
"site_type": "Outdoor"
},
{
"address": "Flushing Meadows Corona Park",
"borough": "Queens",
"latitude": "40.751632000000001",
"longitude": "-73.843676000000002",
"park_site_name": "Parks Academy",
"site_type": "Indoor"
},
{
"address": "Flushing Meadows Corona Park",
"borough": "Queens",
"latitude": "40.751632000000001",
"longitude": "-73.843676000000002",
"park_site_name": "Passerelle ",
"site_type": "Indoor"
},
{
"address": "Flushing Meadows Corona Park",
"borough": "Queens",
"latitude": "40.750332999999998",
"longitude": "-73.844099999999997",
"park_site_name": "Passerelle - Aquatics",
"site_type": "Indoor"
},
{
"address": "Phil Rizzuto Park ",
"borough": "Queens",
"latitude": "40.694406999999998",
"longitude": "-73.822115999999994",
"park_site_name": "Phil Rizzuto Park ",
"site_type": "Outdoor "
},
{
"address": "Flushing Meadows Corona Park",
"borough": "Queens",
"latitude": "40.740882999999997",
"longitude": "-73.849317999999997",
"park_site_name": "Playground for All Children",
"site_type": "Subproperty"
},
{
"address": "Pomonok Playground",
"borough": "Queens",
"latitude": "40.736170999999999",
"longitude": "-73.814014",
"park_site_name": "Pomonok Playground",
"site_type": "Outdoor "
},
{
"address": "47-01 111 St",
"borough": "Queens",
"latitude": "40.747126999999999",
"longitude": "-73.852214000000004",
"park_site_name": "Queens Hall of Science",
"site_type": "Indoor"
},
{
"address": "New York City Building, Flushing Meadows Corona Park",
"borough": "Queens",
"latitude": "40.745793999999997",
"longitude": "-73.846728999999996",
"park_site_name": "Queens Museum",
"site_type": "Indoor"
},
{
"address": "14 United Nations Ave S",
"borough": "Queens",
"latitude": "40.744152",
"longitude": "-73.844476",
"park_site_name": "Queens Theatre",
"site_type": "Indoor"
},
{
"address": "53-51 111 St",
"borough": "Queens",
"latitude": "40.743599000000003",
"longitude": "-73.850354999999993",
"park_site_name": "Queens Zoo",
"site_type": "Indoor"
},
{
"address": "Rainey Park",
"borough": "Queens",
"latitude": "40.765644000000002",
"longitude": "-73.941158999999999",
"park_site_name": "Rainey park",
"site_type": "Outdoor "
},
{
"address": "B 105 St Boardwalk",
"borough": "Queens",
"latitude": "40.580753999999999",
"longitude": "-73.824935999999994",
"park_site_name": "Rockaway Beach ",
"site_type": "Outdoor "
},
{
"address": "B 102 St Boardwalk",
"borough": "Queens",
"latitude": "40.581400000000002",
"longitude": "-73.823376999999994",
"park_site_name": "Rockaway Beach ",
"site_type": "Outdoor"
},
{
"address": "B 100 St Boardwalk",
"borough": "Queens",
"latitude": "40.582137000000003",
"longitude": "-73.820126999999999",
"park_site_name": "Rockaway Beach ",
"site_type": "Outdoor"
},
{
"address": "B 99 St Boardwalk",
"borough": "Queens",
"latitude": "40.582478999999999",
"longitude": "-73.819096999999999",
"park_site_name": "Rockaway Beach ",
"site_type": "Outdoor"
},
{
"address": "B 97 St Boardwalk",
"borough": "Queens",
"latitude": "40.582825",
"longitude": "-73.817858000000001",
"park_site_name": "Rockaway Beach ",
"site_type": "Outdoor"
},
{
"address": "B 95 St Boardwalk",
"borough": "Queens",
"latitude": "40.583412000000003",
"longitude": "-73.815483999999998",
"park_site_name": "Rockaway Beach ",
"site_type": "Outdoor"
},
{
"address": "B 91 St Boardwalk",
"borough": "Queens",
"latitude": "40.584150000000001",
"longitude": "-73.812472",
"park_site_name": "Rockaway Beach ",
"site_type": "Outdoor"
},
{
"address": "B 90 St Boardwalk",
"borough": "Queens",
"latitude": "40.584400000000002",
"longitude": "-73.811254000000005",
"park_site_name": "Rockaway Beach ",
"site_type": "Outdoor"
},
{
"address": "B 81 St Boardwalk",
"borough": "Queens",
"latitude": "40.585825999999997",
"longitude": "-73.807265000000001",
"park_site_name": "Rockaway Beach ",
"site_type": "Outdoor"
},
{
"address": "Bayside Pl Boardwalk",
"borough": "Queens",
"latitude": "40.585104999999999",
"longitude": "-73.809223000000003",
"park_site_name": "Rockaway Beach ",
"site_type": "Outdoor"
},
{
"address": "Rocket Park ",
"borough": "Queens",
"latitude": "40.670613000000003",
"longitude": "-73.846256999999994",
"park_site_name": "Rocket Park ",
"site_type": "Outdoor "
},
{
"address": "Baisley Blvd",
"borough": "Queens",
"latitude": "40.685918000000001",
"longitude": "-73.769315000000006",
"park_site_name": "Roy Wilkens",
"site_type": "Outdoor "
},
{
"address": "Roy Wilkens ",
"borough": "Queens",
"latitude": "40.688248999999999",
"longitude": "-73.773573999999996",
"park_site_name": "Roy Wilkens",
"site_type": "Outdoor"
},
{
"address": "115 Ave & 175 St",
"borough": "Queens",
"latitude": "40.691011000000003",
"longitude": "-73.774207000000004",
"park_site_name": "Roy Wilkens",
"site_type": "Outdoor"
},
{
"address": "Socrates Park",
"borough": "Queens",
"latitude": "40.768028999999999",
"longitude": "-73.936159000000004",
"park_site_name": "Socrates Park",
"site_type": "Outdoor "
},
{
"address": "1848 Cornaga Ave",
"borough": "Queens",
"latitude": "40.602280999999998",
"longitude": "-73.751564000000002",
"park_site_name": "Sorrentino ",
"site_type": "Indoor"
},
{
"address": "Southern Pkwy",
"borough": "Queens",
"latitude": "40.665379000000001",
"longitude": "-73.824555000000004",
"park_site_name": "Southern Fields ",
"site_type": "Outdoor "
},
{
"address": "Southern Pkwy",
"borough": "Queens",
"latitude": "40.665627000000001",
"longitude": "-73.826702999999995",
"park_site_name": "Southern Fields ",
"site_type": "Outdoor"
},
{
"address": "St. Michael's Playground",
"borough": "Queens",
"latitude": "40.758218999999997",
"longitude": "-73.900278",
"park_site_name": "St. Michaels",
"site_type": "Outdoor "
},
{
"address": "BW 34 St & Broadway",
"borough": "Queens",
"latitude": "40.758155000000002",
"longitude": "-73.919785000000005",
"park_site_name": "Steinway St",
"site_type": "Outdoor "
},
{
"address": "Sunnyside Garden Park",
"borough": "Queens",
"latitude": "40.749844000000003",
"longitude": "-73.914749999999998",
"park_site_name": "Sunnyside Garden Park",
"site_type": "Outdoor "
},
{
"address": "Sunnyside Garden Park",
"borough": "Queens",
"latitude": "40.749547",
"longitude": "-73.915139999999994",
"park_site_name": "Sunnyside Garden Park",
"site_type": "Outdoor "
},
{
"address": "Sunnyside Garden Park",
"borough": "Queens",
"latitude": "40.749687000000002",
"longitude": "-73.914270000000002",
"park_site_name": "Sunnyside Garden Park",
"site_type": "Outdoor "
},
{
"address": "Travers Park",
"borough": "Queens",
"latitude": "40.754243000000002",
"longitude": "-73.889364999999998",
"park_site_name": "Travers Park",
"site_type": "Outdoor "
},
{
"address": "Cunningham Park",
"borough": "Queens",
"latitude": "40.741627999999999",
"longitude": "-73.777361999999997",
"park_site_name": "Underhill",
"site_type": "Subproperty"
},
{
"address": "173 St",
"borough": "Queens",
"latitude": "40.701650999999998",
"longitude": "-73.783150000000006",
"park_site_name": "William Simmons Community Garden Club",
"site_type": "Greenthumb"
},
{
"address": "Flushing Meadows Corona Park",
"borough": "Queens",
"latitude": "40.751913999999999",
"longitude": "-73.837320000000005",
"park_site_name": "World ice rink",
"site_type": "Indoor"
},
{
"address": "Gen. Douglas Macarthur Park, Dongan Hills Ave",
"borough": "Staten Island",
"latitude": "40.587445",
"longitude": "-74.100364",
"park_site_name": "Berry Homes ballfield",
"site_type": "Subproperty"
},
{
"address": "Gen. Douglas Macarthur Park, Dongan Hills Ave",
"borough": "Staten Island",
"latitude": "40.586439",
"longitude": "-74.100257",
"park_site_name": "Berry Homes ballfield",
"site_type": "Subproperty"
},
{
"address": "New Dorp Lane & S Railroad Ave",
"borough": "Staten Island",
"latitude": "40.574036",
"longitude": "-74.116626999999994",
"park_site_name": "150 St",
"site_type": "Outdoor"
},
{
"address": "Bloomingdale Park, Lenevar Ave & Ramona Ave",
"borough": "Staten Island",
"latitude": "40.53514",
"longitude": "-74.208524",
"park_site_name": "Bloomingdale Playgound",
"site_type": "Outdoor "
},
{
"address": "Bloomingdale Park ",
"borough": "Staten Island",
"latitude": "40.533819",
"longitude": "-74.210241",
"park_site_name": "Bloomingdale Playgound",
"site_type": "Outdoor "
},
{
"address": "Bloomingdale Park, Richmond Pkwy & Lenevar Ave",
"borough": "Staten Island",
"latitude": "40.531521",
"longitude": "-74.207153",
"park_site_name": "Bloomingdale Playgound",
"site_type": "Outdoor "
},
{
"address": "Bloomingdale Park ",
"borough": "Staten Island",
"latitude": "40.535174",
"longitude": "-74.210125",
"park_site_name": "Bloomingdale Playgound",
"site_type": "Outdoor "
},
{
"address": "Cedar Grove Beach",
"borough": "Staten Island",
"latitude": "40.557382",
"longitude": "-74.10392",
"park_site_name": "Cedar Grove Beach",
"site_type": "Outdoor "
},
{
"address": "Cedar Grove Beach",
"borough": "Staten Island",
"latitude": "40.560272",
"longitude": "-74.10104",
"park_site_name": "Cedar Grove Beach",
"site_type": "Outdoor "
},
{
"address": "Clove Lake Park",
"borough": "Staten Island",
"latitude": "40.620135",
"longitude": "-74.118801",
"park_site_name": "Clove lake garage complex",
"site_type": "Indoor"
},
{
"address": "Clove Lake Park",
"borough": "Staten Island",
"latitude": "40.618744",
"longitude": "-74.118278",
"park_site_name": "Clove lake garage complex",
"site_type": "Indoor"
},
{
"address": "Clove Lake Park",
"borough": "Staten Island",
"latitude": "40.613891",
"longitude": "-74.113523",
"park_site_name": "Cloves Lake",
"site_type": "Outdoor "
},
{
"address": "CPL Thompson Park",
"borough": "Staten Island",
"latitude": "40.637872",
"longitude": "-74.118791",
"park_site_name": "Corporal Thompson Playground",
"site_type": "Outdoor "
},
{
"address": "Thompkins Ave Btwn Chestnut Ave & Shaughnessy Ln",
"borough": "Staten Island",
"latitude": "40.614615",
"longitude": "-74.07412",
"park_site_name": "DeMatti Playground",
"site_type": "Indoor"
},
{
"address": "Faber Pool and Park",
"borough": "Staten Island",
"latitude": "40.640999",
"longitude": "-74.135418",
"park_site_name": "Faber Pool",
"site_type": "Indoor"
},
{
"address": "Jennifer's Playground",
"borough": "Staten Island",
"latitude": "40.6200556871",
"longitude": "-74.1631154874",
"park_site_name": "Graniteville",
"site_type": "Indoor"
},
{
"address": "700 Rockland Ave",
"borough": "Staten Island",
"latitude": "40.588496",
"longitude": "-74.138918",
"park_site_name": "Greenbelt Nature Center",
"site_type": "Indoor"
},
{
"borough": "Staten Island",
"latitude": "40.584516000000001",
"longitude": "-74.125034999999997",
"park_site_name": "Greenbelt Park ",
"site_type": "Outdoor "
},
{
"address": "501 Brielle Ave",
"borough": "Staten Island",
"latitude": "40.593686",
"longitude": "-74.135646",
"park_site_name": "Greenbelt Rec Ctr",
"site_type": "Indoor"
},
{
"address": "Miller Field",
"borough": "Staten Island",
"latitude": "40.564469",
"longitude": "-74.097531",
"park_site_name": "John M. D'Amato Field",
"site_type": "Subproperty"
},
{
"address": "Tompkinsville Play Center",
"borough": "Staten Island",
"latitude": "40.637596",
"longitude": "-74.074802",
"park_site_name": "Lyons Pool",
"site_type": "Indoor"
},
{
"address": "MacArthur Park",
"borough": "Staten Island",
"latitude": "40.585877",
"longitude": "-74.100975",
"park_site_name": "MacArthur Park",
"site_type": "Outdoor "
},
{
"address": "Crescent Ave Btwn Jersey St & Beechwood Ave",
"borough": "Staten Island",
"latitude": "40.643368",
"longitude": "-74.086066",
"park_site_name": "Mahony Playground",
"site_type": "Outdoor "
},
{
"address": "Midland Playground",
"borough": "Staten Island",
"latitude": "40.575019",
"longitude": "-74.098706",
"park_site_name": "Midland Beach",
"site_type": "Outdoor "
},
{
"address": "Midland Field, Bedford Ave ",
"borough": "Staten Island",
"latitude": "40.57669",
"longitude": "-74.098663",
"park_site_name": "Midland Beach",
"site_type": "Outdoor "
},
{
"address": "Forest Ave & Elizabeth St",
"borough": "Staten Island",
"latitude": "40.628859",
"longitude": "-74.118013",
"park_site_name": "Prall Playground",
"site_type": "Outdoor "
},
{
"address": "Silver Lake Park",
"borough": "Staten Island",
"latitude": "40.627186",
"longitude": "-74.091985",
"park_site_name": "Silver Lake Dog Run",
"site_type": "Outdoor "
},
{
"address": "Silver Lake Park",
"borough": "Staten Island",
"latitude": "40.628358",
"longitude": "-74.099058",
"park_site_name": "Silver Lake Tennis",
"site_type": "Outdoor "
},
{
"borough": "Staten Island",
"latitude": "40.579312999999999",
"longitude": "-74.077687999999995",
"park_site_name": "South Beach",
"site_type": "Outdoor "
},
{
"address": "Richmond Terrace",
"borough": "Staten Island",
"latitude": "40.642709000000004",
"longitude": "-74.075723999999994",
"park_site_name": "Staten Island Ferry Terminal",
"site_type": "Outdoor"
},
{
"address": "Richmond Terrace",
"borough": "Staten Island",
"latitude": "40.642324000000002",
"longitude": "-74.075489000000005",
"park_site_name": "Staten Island Ferry Terminal",
"site_type": "Outdoor "
},
{
"address": "Hyatt Ave",
"borough": "Staten Island",
"latitude": "40.642302999999998",
"longitude": "-74.076549",
"park_site_name": "Staten Island Ferry Terminal",
"site_type": "Outdoor "
},
{
"address": "Hylan Blvd",
"borough": "Staten Island",
"latitude": "40.505646",
"longitude": "-74.235477",
"park_site_name": "Tottenville Pool",
"site_type": "Indoor"
},
{
"address": "Delafield Pl & Bard Ave",
"borough": "Staten Island",
"latitude": "40.643799",
"longitude": "-74.108845",
"park_site_name": "Walker Park",
"site_type": "Outdoor "
},
{
"address": "Davis Ave & Livingston Ct",
"borough": "Staten Island",
"latitude": "40.642843",
"longitude": "-74.11032",
"park_site_name": "Walker Park",
"site_type": "Outdoor "
},
{
"address": "Delafield Pl & Davis Ave",
"borough": "Staten Island",
"latitude": "40.643449",
"longitude": "-74.11046",
"park_site_name": "Walker Park",
"site_type": "Outdoor "
},
{
"address": "Livingston Ct & bard Ave ",
"borough": "Staten Island",
"latitude": "40.643343",
"longitude": "-74.108641",
"park_site_name": "Walker Park",
"site_type": "Outdoor "
},
{
"address": "899 Henderson Ave ",
"borough": "Staten Island",
"latitude": "40.637121",
"longitude": "-74.119287",
"park_site_name": "West Brighton Pool",
"site_type": "Indoor"
},
{
"address": "Willowbrook Park",
"borough": "Staten Island",
"latitude": "40.603832",
"longitude": "-74.158697",
"park_site_name": "Willowbrook Park",
"site_type": "Outdoor "
},
{
"address": "Willowbrook Park",
"borough": "Staten Island",
"latitude": "40.603828",
"longitude": "-74.16125",
"park_site_name": "Willowbrook Park",
"site_type": "Outdoor "
},
{
"address": "Wolfe's Pond",
"borough": "Staten Island",
"latitude": "40.517368",
"longitude": "-74.190913",
"park_site_name": "Wolfe's Pond",
"site_type": "Outdoor "
},
{
"address": "Wolfe's Pond",
"borough": "Staten Island",
"latitude": "40.518652000000003",
"longitude": "-74.187309999999997",
"park_site_name": "Wolfe's Pond",
"site_type": "Outdoor "
}
]

db.sync({force: true})
.then(function () {
  return Promise.map(data, function (row, index) {
    return model.create(data[index]);
  });
})
.catch(function (err) {
  console.error('There was totally a problem', err, err.stack);
})
.finally(function () {
  db.close() // uses promises but does not return a promise. https://github.com/sequelize/sequelize/pull/5776
  return null; // silences bluebird warning about using non-returned promises inside of handlers.
});

