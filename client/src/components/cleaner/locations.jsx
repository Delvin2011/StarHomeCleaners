const locations = [
    {label:"Aanwins AH",value:"62"},
    {label:"Abbotsford",value:"36"},
    {label:"Aeroton",value:"22"},
    {label:"Alan Manor",value:"17"},
    {label:"Albertskroon",value:"52"},
    {label:"Albertville",value:"38"},
    {label:"Aldara Park",value:"38"},
    {label:"Allen's Nek",value:"54"},
    {label:"Alsef AH",value:"68"},
    {label:"Alveda",value:"24"},
    {label:"Amalgam",value:"22"},
    {label:"Ambot AH",value:"66"},
    {label:"Amorosa",value:"66"},
    {label:"Aspen Hills Nature Estate",value:"22"},
    {label:"Atholl",value:"42"},
    {label:"Auckland Park",value:"28"},
    {label:"Bagleyston",value:"38"},
    {label:"Barlow Park",value:"46"},
    {label:"Bassonia",value:"6"},
    {label:"Bellairs Park",value:"74"},
    {label:"Bellevue",value:"22"},
    {label:"Bellevue East",value:"20"},
    {label:"Benrose",value:"16"},
    {label:"Berario",value:"58"},
    {label:"Bergbron",value:"46"},
    {label:"Bertrams",value:"10"},
    {label:"Beverley",value:"86"},
    {label:"Beverley Gardens",value:"74"},
    {label:"Bezuidenhout Valley",value:"20"},
    {label:"Birdhaven",value:"36"},
    {label:"Birnam",value:"38"},
    {label:"Blackheath",value:"38"},
    {label:"Blairgowrie",value:"40"},
    {label:"Bloubosrand",value:"84"},
    {label:"Booysens",value:"10"},
    {label:"Booysens Reserve",value:"12"},
    {label:"Bordeaux",value:"44"},
    {label:"Boskruin",value:"66"},
    {label:"Bosmont",value:"40"},
    {label:"Bramley",value:"42"},
    {label:"Bramley North",value:"42"},
    {label:"Bramley Park",value:"42"},
    {label:"Bramley View",value:"56"},
    {label:"Brixton",value:"24"},
    {label:"Broadacres AH",value:"92"},
    {label:"Bromhof",value:"66"},
    {label:"Bruma",value:"42"},
    {label:"Bryanbrink",value:"52"},
    {label:"Bryanston",value:"84"},
    {label:"Buccleuch",value:"60"},
    {label:"Bushwillow Park",value:"56"},
    {label:"Carenvale",value:"56"},
    {label:"Cedar Lakes",value:"90"},
    {label:"Cheltondale",value:"38"},
    {label:"Chislehurston",value:"52"},
    {label:"Chrisville",value:"8"},
    {label:"City and Suburban",value:"14"},
    {label:"Claremont",value:"46"},
    {label:"Cleveland",value:"32"},
    {label:"Comptonville",value:"30"},
    {label:"Constantia Kloof",value:"52"},
    {label:"Corlett Gardens",value:"56"},
    {label:"Coronationville",value:"30"},
    {label:"Cosmo City",value:"84"},
    {label:"Cottesloe",value:"22"},
    {label:"Country Life Park",value:"48"},
    {label:"Craighall",value:"40"},
    {label:"Craighall Park",value:"38"},
    {label:"Cresta",value:"42"},
    {label:"Creswell Park",value:"56"},
    {label:"Croesus",value:"44"},
    {label:"Crosby",value:"30"},
    {label:"Crown",value:"18"},
    {label:"Crown Gardens",value:"12"},
    {label:"Crown Mine",value:"20"},
    {label:"Crown North",value:"20"},
    {label:"Crystal Gardens",value:"46"},
    {label:"Cyrildene",value:"44"},
    {label:"Daniel Brink Park",value:"76"},
    {label:"Darrenwood",value:"38"},
    {label:"Davidsonville",value:"50"},
    {label:"Delarey",value:"40"},
    {label:"Denver",value:"18"},
    {label:"Dewetshof",value:"20"},
    {label:"Discovery",value:"54"},
    {label:"Doornfontein",value:"16"},
    {label:"Dorelan",value:"52"},
    {label:"Douglasdale",value:"86"},
    {label:"Droste Park",value:"16"},
    {label:"Dunkeld",value:"34"},
    {label:"Dunsevern",value:"52"},
    {label:"Durban Roodepoort Deep Gold Mine",value:""},
    {label:"Duxberry",value:"56"},
    {label:"Eagle Canyon",value:"68"},
    {label:"East Town",value:"38"},
    {label:"Eastgate",value:"40"},
    {label:"Edenburg",value:"78"},
    {label:"Eikenhof",value:"22"},
    {label:"Eikenhof SP1",value:"20"},
    {label:"Elandspark",value:"14"},
    {label:"Eldorado Estate",value:"42"},
    {label:"Electron",value:"12"},
    {label:"Emmarentia",value:"26"},
    {label:"Evans Park",value:"14"},
    {label:"Fairland",value:"54"},
    {label:"Fairmount",value:"52"},
    {label:"Fairmount Ridge",value:"50"},
    {label:"Fairvale",value:"48"},
    {label:"Fairview",value:"16"},
    {label:"Fairway",value:"40"},
    {label:"Fairwood",value:"36"},
    {label:"Fellside",value:"36"},
    {label:"Ferndale",value:"74"},
    {label:"Ferreirasdorp",value:"14"},
    {label:"Fleurhof",value:"48"},
    {label:"Floracliffe",value:"52"},
    {label:"Florida",value:"44"},
    {label:"Florida Glen",value:"44"},
    {label:"Florida Hills",value:"48"},
    {label:"Florida Lake",value:"50"},
    {label:"Florida North",value:"26"},
    {label:"Florida Park",value:"50"},
    {label:"Florida View",value:"44"},
    {label:"Fontainebleau",value:"68"},
    {label:"Fordsburg",value:"16"},
    {label:"Forest Hill",value:"4"},
    {label:"Forest Town",value:"28"},
    {label:"Formain",value:"54"},
    {label:"Founders Hill",value:"60"},
    {label:"Fourways",value:"82"},
    {label:"Fourways Gardens",value:"82"},
    {label:"Frankenwald",value:"62"},
    {label:"Franklin Roosevelt Park",value:"36"},
    {label:"Freedom Park",value:"40"},
    {label:"Gallo Manor",value:"52"},
    {label:"Georginia",value:"56"},
    {label:"Gillview",value:"6"},
    {label:"Glenadrienne SP1",value:"44"},
    {label:"Glenadrienne SP2",value:"44"},
    {label:"Glenanda",value:"10"},
    {label:"Glenesk",value:"6"},
    {label:"Glenhazel",value:"50"},
    {label:"Glensan",value:"50"},
    {label:"Glenvista",value:"13"},
    {label:"Greenside",value:"32"},
    {label:"Greenside East",value:"30"},
    {label:"Greenstone Hill",value:"54"},
    {label:"Greenstone Park",value:"54"},
    {label:"Gresswold",value:"44"},
    {label:"Greymont",value:"50"},
    {label:"Groblerpark",value:"68"},
    {label:"Haddon",value:"6"},
    {label:"Hamberg",value:"52"},
    {label:"Harison Park",value:"16"},
    {label:"Harison View",value:"82"},
    {label:"Harveston AH",value:"64"},
    {label:"Hawkins Estate",value:"40"},
    {label:"Helderkruin",value:"66"},
    {label:"Heriotdale",value:"32"},
    {label:"Highlands",value:"20"},
    {label:"Highlands North",value:"40"},
    {label:"Homestead Park",value:"26"},
    {label:"Honey Hill",value:"56"},
    {label:"Honeydew Ridge",value:"64"},
    {label:"Hoogland",value:"78"},
    {label:"Horison",value:"58"},
    {label:"Houghton Estate",value:"32"},
    {label:"Hunters Hill A. H. SP",value:"76"},
    {label:"Hurlingham",value:"42"},
    {label:"Hurlingham Gardens",value:"42"},
    {label:"Hurst Hill",value:"30"},
    {label:"Hyde Park",value:"32"},
    {label:"Illovo",value:"42"},
    {label:"Inadan AH",value:"86"},
    {label:"Inanda",value:"86"},
    {label:"Industria",value:"30"},
    {label:"Industria North",value:"44"},
    {label:"Industria West",value:"30"},
    {label:"Jacanlee",value:"40"},
    {label:"Jackal Creek Golf Estate",value:"74"},
    {label:"Jan Hofmeyer",value:"24"},
    {label:"Johannesburg North",value:"76"},
    {label:"Judith's Paarl",value:"20"},
    {label:"Jukskei Park",value:"78"},
    {label:"Kelland",value:"60"},
    {label:"Kelvin",value:"62"},
    {label:"Kengies AH",value:"92"},
    {label:"Kenilworth",value:"2"},
    {label:"Kensington",value:"24"},
    {label:"Kensington B",value:"48"},
    {label:"Kentview",value:"36"},
    {label:"Kew",value:"44"},
    {label:"Kibler Park 1",value:"24"},
    {label:"Kibler Park 2",value:"24"},
    {label:"Killarney",value:"26"},
    {label:"Kimbult AH",value:"66"},
    {label:"Kleve Hill Park",value:"68"},
    {label:"Klipfontein View",value:"76"},
    {label:"Klipriviersberg Estate",value:"10"},
    {label:"Klipriviersberg Nature Reserve",value:"22"},
    {label:"Klipspruit West",value:"50"},
    {label:"Kloofendal",value:"60"},
    {label:"Kramerville",value:"46"},
    {label:"Kya Sand SP",value:"82"},
    {label:"La Rochelle",value:"4"},
    {label:"Lakeside",value:"76"},
    {label:"Langlaagte North",value:"30"},
    {label:"Laser Park",value:"70"},
    {label:"Lea Glen",value:"38"},
    {label:"Liefde en Vrede",value:"20"},
    {label:"Linbro Park AH",value:"64"},
    {label:"Lindberg Park",value:"6"},
    {label:"Linden",value:"32"},
    {label:"Lindhaven",value:"64"},
    {label:"Linksfield",value:"52"},
    {label:"Linksfield Ridge",value:"50"},
    {label:"Linmeyer",value:"6"},
    {label:"Little Falls",value:"58"},
    {label:"Lombardy East",value:"54"},
    {label:"Lombardy West",value:"58"},
    {label:"Lone Hill",value:"90"},
    {label:"Longdale",value:"26"},
    {label:"Lorentzville",value:"20"},
    {label:"Lyme Park",value:"46"},
    {label:"Lyndhurst",value:"50"},
    {label:"Magaliessig",value:"82"},
    {label:"Malanshof",value:"68"},
    {label:"Malvern",value:"24"},
    {label:"Manufacta",value:"62"},
    {label:"Maraisburg",value:"42"},
    {label:"Marlboro Gardens",value:"50"},
    {label:"Maroeladal",value:"90"},
    {label:"Marshalltown",value:"10"},
    {label:"Martindale",value:"32"},
    {label:"Maryvale",value:"34"},
    {label:"Matholesville",value:"24"},
    {label:"Mayfair",value:"22"},
    {label:"Mayfair West",value:"26"},
    {label:"Mayfield Park",value:"20"},
    {label:"Melrose",value:"34"},
    {label:"Melrose Estate",value:"34"},
    {label:"Melville",value:"26"},
    {label:"Meredale",value:"20"},
    {label:"Modderfontein",value:"60"},
    {label:"Modderfontein AH",value:"60"},
    {label:"Moffat Park",value:"10"},
    {label:"Moffat View",value:"10"},
    {label:"Mondeor",value:"16"},
    {label:"Montclare",value:"46"},
    {label:"Montgomery Park",value:"36"},
    {label:"Montroux",value:"18"},
    {label:"Moodie Hill",value:"52"},
    {label:"Moret",value:"46"},
    {label:"Morningside",value:"48"},
    {label:"Morningside Manor",value:"50"},
    {label:"Mostyn Park AH",value:"86"},
    {label:"Mountain View",value:"26"},
    {label:"Mulbarton",value:"14"},
    {label:"Nancefield",value:"44"},
    {label:"Nancefield Industrial",value:"40"},
    {label:"Nasrec",value:"22"},
    {label:"Naturena",value:"32"},
    {label:"Needwood",value:"94"},
    {label:"New Brighton",value:"42"},
    {label:"New Centre",value:"10"},
    {label:"New Doornfontein",value:"16"},
    {label:"Newclare",value:"44"},
    {label:"Newlands",value:"50"},
    {label:"Newtown",value:"14"},
    {label:"Noordhang",value:"80"},
    {label:"Norscot",value:"82"},
    {label:"North Doornfontein",value:"12"},
    {label:"North Riding",value:"74"},
    {label:"North Riding AH",value:"74"},
    {label:"Northcliff",value:"52"},
    {label:"Northgate",value:"76"},
    {label:"Northworld",value:"72"},
    {label:"Northworld AH",value:"76"},
    {label:"Norwood",value:"32"},
    {label:"Oakdene",value:"4"},
    {label:"Oaklands",value:"32"},
    {label:"Observatory",value:"24"},
    {label:"Olivedale",value:"74"},
    {label:"Ontdekkers Park",value:"54"},
    {label:"Ophirton",value:"10"},
    {label:"Orange Grove",value:"28"},
    {label:"Orchards",value:"32"},
    {label:"Ormonde",value:"16"},
    {label:"Ormonde View",value:"20"},
    {label:"Paarlshoop",value:"22"},
    {label:"Pageview",value:"20"},
    {label:"Palmlands AH",value:"86"},
    {label:"Park Central",value:"10"},
    {label:"Parkhurst",value:"36"},
    {label:"Parkmore",value:"40"},
    {label:"Parktown",value:"22"},
    {label:"Parktown North",value:"30"},
    {label:"Parkview",value:"24"},
    {label:"Parkwood",value:"26"},
    {label:"Paulshof",value:"78"},
    {label:"Percelia Estate",value:"38"},
    {label:"Petervale",value:"80"},
    {label:"Pierneef Park",value:"32"},
    {label:"Pine Park",value:"34"},
    {label:"Pine Slopes AH",value:"86"},
    {label:"Poortview AH",value:"68"},
    {label:"President Ridge",value:"40"},
    {label:"Princess",value:"60"},
    {label:"Princess AH",value:"70"},
    {label:"Prolecon",value:"16"},
    {label:"Queenshaven",value:"10"},
    {label:"Quellerina",value:"46"},
    {label:"Radiokop",value:"60"},
    {label:"Raedene Estate",value:"36"},
    {label:"Rand Lease Gold Mine",value:"50"},
    {label:"Randpark",value:"44"},
    {label:"Randpark Ridge",value:"60"},
    {label:"Randview",value:"20"},
    {label:"Raumarais Park",value:"42"},
    {label:"Reefhaven",value:"64"},
    {label:"Regents Park",value:"6"},
    {label:"Rembrandt Park",value:"52"},
    {label:"Rembrandt Ridge",value:"52"},
    {label:"Reuven",value:"8"},
    {label:"Rewlatch",value:"8"},
    {label:"Richmond",value:"22"},
    {label:"Ridgeway",value:"12"},
    {label:"Risana",value:"10"},
    {label:"Risidale",value:"20"},
    {label:"Risipark AH",value:"22"},
    {label:"River Club",value:"52"},
    {label:"Riverbend AH",value:"84"},
    {label:"Riverlea",value:"26"},
    {label:"Riviera",value:"26"},
    {label:"Rivonia",value:"64"},
    {label:"Robertsham",value:"8"},
    {label:"Robertville",value:"46"},
    {label:"Robin Acres",value:"38"},
    {label:"Robin Hills",value:"38"},
    {label:"Robindale",value:"38"},
    {label:"Roodekrans",value:"72"},
    {label:"Roodekrans AH",value:"72"},
    {label:"Roodepoort SP",value:"56"},
    {label:"Roodeport North",value:"58"},
    {label:"Roodeport West",value:"62"},
    {label:"Roseacre",value:"8"},
    {label:"Rosebank",value:"30"},
    {label:"Rosettenville",value:"2"},
    {label:"Rosherville",value:"18"},
    {label:"Rossmore",value:"26"},
    {label:"Rouxville",value:"40"},
    {label:"Ruimsig",value:"68"},
    {label:"Ruimsig AH",value:"70"},
    {label:"Ruiterhof",value:"44"},
    {label:"Sandhurst",value:"36"},
    {label:"Sandown",value:"48"},
    {label:"Sandringham",value:"50"},
    {label:"Savoy Estate",value:"40"},
    {label:"Saxonwold",value:"24"},
    {label:"Sebenza",value:"58"},
    {label:"Selby",value:"10"},
    {label:"Selwyn",value:"52"},
    {label:"Sharonlea",value:"72"},
    {label:"Silvamonte",value:"48"},
    {label:"Simba",value:"42"},
    {label:"Slovo Park",value:"114"},
    {label:"Sonnedal AH",value:"72"},
    {label:"Sonneglans",value:"72"},
    {label:"South Hills",value:"10"},
    {label:"South Kensington",value:"26"},
    {label:"Southdale",value:"8"},
    {label:"Southgate",value:"18"},
    {label:"Springfield",value:"6"},
    {label:"Steeledale",value:"12"},
    {label:"Stormill",value:"46"},
    {label:"Stratford",value:"90"},
    {label:"Strathavon",value:"46"},
    {label:"Strijdompark",value:"72"},
    {label:"Strubensvallei",value:"58"},
    {label:"Suideroord",value:"10"},
    {label:"Sundowner",value:"68"},
    {label:"Sundowner Ext",value:"68"},
    {label:"Sunningdale Ridge",value:"40"},
    {label:"Sunninghill",value:"64"},
    {label:"Sunset Acres",value:"50"},
    {label:"Sydenham",value:"40"},
    {label:"Talboton",value:"40"},
    {label:"Technikon",value:"62"},
    {label:"The Gardens",value:"40"},
    {label:"The Hill",value:"4"},
    {label:"The Woodlands",value:"88"},
    {label:"Theta",value:"16"},
    {label:"Thornhill Estate",value:"56"},
    {label:"Towerby",value:"4"},
    {label:"Townsview",value:"2"},
    {label:"Tres Jolie AH",value:"76"},
    {label:"Triomf",value:"54"},
    {label:"Troyeville",value:"18"},
    {label:"Tulisa Park",value:"12"},
    {label:"Turf Club",value:"6"},
    {label:"Turffontein",value:"4"},
    {label:"Uitsaaisentrum",value:"26"},
    {label:"Unigray",value:"10"},
    {label:"Valeriedene",value:"54"},
    {label:"Vandia Grove",value:"76"},
    {label:"Victoria",value:"30"},
    {label:"Victory Park",value:"60"},
    {label:"Viewcrest",value:"48"},
    {label:"Village Main Reef Gold Mine",value:"40"},
    {label:"Vrededorp",value:"22"},
    {label:"Waterval Estate",value:"20"},
    {label:"Waverley",value:"20"},
    {label:"Weltevredenpark",value:"62"},
    {label:"Wendywood",value:"52"},
    {label:"West Turffontein",value:"6"},
    {label:"Westcliff",value:"26"},
    {label:"Westfield",value:"50"},
    {label:"Whiteridge",value:"46"},
    {label:"Wibsey Dip",value:"44"},
    {label:"Wierda Valley",value:"48"},
    {label:"Wilfordon AH",value:"62"},
    {label:"Wilgeheuwel",value:"60"},
    {label:"Willowbrook",value:"66"},
    {label:"Willowild",value:"46"},
    {label:"Wilro Park",value:"68"},
    {label:"Winchester Hills",value:"10"},
    {label:"Windsor East",value:"42"},
    {label:"Windsor Glen",value:"42"},
    {label:"Windsor West",value:"62"},
    {label:"Winston Ridge",value:"40"},
    {label:"Witkoppen",value:"86"},
    {label:"Witpoortjie",value:"62"},
    {label:"Wolhuter",value:"16"},
    {label:"Woodmead",value:"60"},
    {label:"Wynberg",value:"44"},
    {label:"Zandspruit SP",value:"86"},
    {label:"Zonnehoewe AH",value:"80"}    
];

export default locations;