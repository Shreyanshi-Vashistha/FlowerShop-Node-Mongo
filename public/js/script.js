// object for city and province dropdown
let stateObject = [
  {
    name: "Alberta",
    gst: 5,
    City: [
      "Airdrie",
      "Beaumont",
      "Brooks",
      "Calgary",
      "Camrose",
      "Chestermere",
      "Cold Lake",
      "Edmonton",
      "Fort Saskatchewan",
      "Grande Prairie",
      "Lacombe",
      "Leduc",
      "Lethbridge",
      "Lloydminster",
      "Medicine Hat",
      "Red Deer",
      "Spruce Grove",
      "St. Albert",
      "Wetaskiwin",
    ],
  },
  {
    name: "British Columbia",
    gst: 5,
    City: [
      "Abbotsford",
      "Armstrong",
      "Burnaby",
      "Campbell River",
      "Castlegar",
      "Chilliwack",
      "Colwood",
      "Coquitlam",
      "Courtenay",
      "Cranbrook",
      "Dawson Creek",
      "Delta",
      "Duncan",
      "Enderby",
      "Fernie",
      "Fort St. John",
      "Grand Forks",
      "Greenwood",
      "Kamloops",
      "Kelowna",
      "Kimberley",
      "Langford",
      "Langley",
      "Maple Ridge",
      "Merritt",
      "Nanaimo",
      "Nelson",
      "New Westminster",
      "North Vancouver",
      "Parksville",
      "Penticton",
      "Pitt Meadows",
      "Port Alberni",
      "Port Coquitlam",
      "Port Moody",
      "Powell River",
      "Prince George",
      "Prince Rupert",
      "Quesnel",
      "Revelstoke",
      "Richmond",
      "Rossland",
      "Salmon Arm",
      "Surrey",
      "Terrace",
      "Trail",
      "Vancouver",
      "Vernon",
      "Victoria",
      "West Kelowna",
      "White Rock",
      "Williams Lake",
    ],
  },
  {
    name: "Manitoba",
    gst: 5,
    City: [
      "Brandon",
      "Dauphin",
      "Flin Flon",
      "Morden",
      "Portage la Prairie",
      "Selkirk",
      "Steinbach",
      "Thompson",
      "Winkler",
      "Winnipeg",
    ],
  },
  {
    name: "New Brunswick",
    gst: 15,
    City: [
      "Bathurst",
      "Campbellton",
      "Dieppe",
      "Edmundston",
      "Fredericton",
      "Miramichi",
      "Moncton",
      "Saint John",
    ],
  },
  {
    name: "Newfoundland and Labrador",
    gst: 15,
    City: ["Corner Brook", "St. John's", "Mount Pearl"],
  },
  {
    name: "Northwest Territories",
    gst: 5,
    City: ["Yellowknife"],
  },
  {
    name: "Nova Scotia",
    gst: 15,
    City: [],
  },
  {
    name: "Nunavut",
    gst: 5,
    City: ["Iqaluit"],
  },
  {
    name: "Ontario",
    gst: 13,
    City: [
      "Barrie",
      "Belleville",
      "Brampton",
      "Brant",
      "Brantford",
      "Brockville",
      "Burlington",
      "Cambridge",
      "Clarence-Rockland",
      "Cornwall",
      "Dryden",
      "Elliot Lake",
      "Greater Sudbury",
      "Guelph",
      "Haldimand County",
      "Hamilton",
      "Kawartha Lakes",
      "Kenora",
      "Kingston",
      "Kitchener",
      "London",
      "Markham",
      "Mississauga",
      "Niagara Falls",
      "Norfolk County",
      "North Bay",
      "Orillia",
      "Oshawa",
      "Ottawa",
      "Owen Sound",
      "Pembroke",
      "Peterborough",
      "Pickering",
      "Port Colborne",
      "Prince Edward County",
      "Quinte West",
      "Richmond Hill",
      "Sarnia",
      "Sault Ste. Marie",
      "St. Catharines",
      "St. Thomas",
      "Stratford",
      "Temiskaming Shores",
      "Thorold",
      "Thunder Bay",
      "Timmins",
      "Toronto",
      "Vaughan",
      "Waterloo",
      "Welland",
      "Windsor",
      "Woodstock",
    ],
  },
  {
    name: "Prince Edward Island",
    gst: 5,
    City: ["Charlottetown", "Summerside"],
  },
  {
    name: "Quebec",
    gst: 15,
    City: [
      "Acton Vale",
      "Alma",
      "Amos",
      "Amqui",
      "Asbestos",
      "Baie-Comeau",
      "Baie-D'Urfé",
      "Baie-Saint-Paul",
      "Barkmere",
      "Beaconsfield",
      "Beauceville",
      "Beauharnois",
      "Beaupré",
      "Bécancour",
      "Bedford",
      "Belleterre",
      "Beloeil",
      "Berthierville",
      "Blainville",
      "Boisbriand",
      "Bois-des-Filion",
      "Bonaventure",
      "Boucherville",
      "Brome Lake",
      "Bromont",
      "Brossard",
      "Brownsburg-Chatham",
      "Candiac",
      "Cap-Chat",
      "Cap-Santé",
      "Carignan",
      "Carleton-sur-Mer",
      "Causapscal",
      "Chambly",
      "Chandler",
      "Chapais",
      "Charlemagne",
      "Châteauguay",
      "Château-Richer",
      "Chibougamau",
      "Clermont",
      "Coaticook",
      "Contrecoeur",
      "Cookshire-Eaton",
      "Côte Saint-Luc",
      "Coteau-du-Lac",
      "Cowansville",
      "Danville",
      "Daveluyville",
      "Dégelis",
      "Delson",
      "Desbiens",
      "Deux-Montagnes",
      "Disraeli",
      "Dolbeau-Mistassini",
      "Dollard-des-Ormeaux",
      "Donnacona",
      "Dorval",
      "Drummondville",
      "Dunham",
      "Duparquet",
      "East Angus",
      "Estérel",
      "Farnham",
      "Fermont",
      "Forestville",
      "Fossambault-sur-le-Lac",
      "Gaspé",
      "Gatineau",
      "Gracefield",
      "Granby",
      "Grande-Rivière",
      "Hampstead",
      "Hudson",
      "Huntingdon",
      "Joliette",
      "Kingsey Falls",
      "Kirkland",
      "La Malbaie",
      "La Pocatière",
      "La Prairie",
      "La Sarre",
      "La Tuque",
      "Lac-Delage",
      "Lachute",
      "Lac-Mégantic",
      "Lac-Saint-Joseph",
      "Lac-Sergent",
      "L'Ancienne-Lorette",
      "L'Assomption",
      "Laval",
      "Lavaltrie",
      "Lebel-sur-Quévillon",
      "L'Épiphanie",
      "Léry",
      "Lévis",
      "L'Île-Cadieux",
      "L'Île-Dorval",
      "L'Île-Perrot",
      "Longueuil",
      "Lorraine",
      "Louiseville",
      "Macamic",
      "Magog",
      "Malartic",
      "Maniwaki",
      "Marieville",
      "Mascouche",
      "Matagami",
      "Matane",
      "Mercier",
      "Métabetchouan–Lac-à-la-Croix",
      "Métis-sur-Mer",
      "Mirabel",
      "Mont-Joli",
      "Mont-Laurier",
      "Montmagny",
      "Montreal",
      "Montreal West",
      "Montréal-Est",
      "Mont-Saint-Hilaire",
      "Mont-Tremblant",
      "Mount Royal",
      "Murdochville",
      "Neuville",
      "New Richmond",
      "Nicolet",
      "Normandin",
      "Notre-Dame-de-l'Île-Perrot",
      "Notre-Dame-des-Prairies",
      "Otterburn Park",
      "Paspébiac",
      "Percé",
      "Pincourt",
      "Plessisville",
      "Pohénégamook",
      "Pointe-Claire",
      "Pont-Rouge",
      "Port-Cartier",
      "Portneuf",
      "Prévost",
      "Princeville",
      "Québec",
      "Repentigny",
      "Richelieu",
      "Richmond",
      "Rimouski",
      "Rivière-du-Loup",
      "Rivière-Rouge",
      "Roberval",
      "Rosemère",
      "Rouyn-Noranda",
      "Saguenay",
      "Saint-Augustin-de-Desmaures",
      "Saint-Basile",
      "Saint-Basile-le-Grand",
      "Saint-Bruno-de-Montarville",
      "Saint-Césaire",
      "Saint-Colomban",
      "Saint-Constant",
      "Sainte-Adèle",
      "Sainte-Agathe-des-Monts",
      "Sainte-Anne-de-Beaupré",
      "Sainte-Anne-de-Bellevue",
      "Sainte-Anne-des-Monts",
      "Sainte-Anne-des-Plaines",
      "Sainte-Catherine",
      "Sainte-Catherine-de-la-Jacques-Cartier",
      "Sainte-Julie",
      "Sainte-Marguerite-du-Lac-Masson",
      "Sainte-Marie",
      "Sainte-Marthe-sur-le-Lac",
      "Sainte-Thérèse",
      "Saint-Eustache",
      "Saint-Félicien",
      "Saint-Gabriel",
      "Saint-Georges",
      "Saint-Hyacinthe",
      "Saint-Jean-sur-Richelieu",
      "Saint-Jérôme",
      "Saint-Joseph-de-Beauce",
      "Saint-Joseph-de-Sorel",
      "Saint-Lambert",
      "Saint-Lazare",
      "Saint-Lin-Laurentides",
      "Saint-Marc-des-Carrières",
      "Saint-Ours",
      "Saint-Pamphile",
      "Saint-Pascal",
      "Saint-Pie",
      "Saint-Raymond",
      "Saint-Rémi",
      "Saint-Sauveur",
      "Saint-Tite",
      "Salaberry-de-Valleyfield",
      "Schefferville",
      "Scotstown",
      "Senneterre",
      "Sept-Îles",
      "Shawinigan",
      "Sherbrooke",
      "Sorel-Tracy",
      "Stanstead",
      "Sutton",
      "Témiscaming",
      "Témiscouata-sur-le-Lac",
      "Terrebonne",
      "Thetford Mines",
      "Thurso",
      "Trois-Pistoles",
      "Trois-Rivières",
      "Valcourt",
      "Val-d'Or",
      "Varennes",
      "Vaudreuil-Dorion",
      "Victoriaville",
      "Ville-Marie",
      "Warwick",
      "Waterloo",
      "Waterville",
      "Westmount",
      "Windsor",
    ],
  },
  {
    name: "Saskatchewan",
    gst: 5,
    City: [
      "Estevan",
      "Flin Flon",
      "Humboldt",
      "Lloydminster",
      "Martensville",
      "Meadow Lake",
      "Melfort",
      "Melville",
      "Moose Jaw",
      "North Battleford",
      "Prince Albert",
      "Regina",
      "Saskatoon",
      "Swift Current",
      "Warman",
      "Weyburn",
      "Yorkton",
    ],
  },
  {
    name: "Yukon Territory",
    gst: 3,
    City: ["Whitehorse"],
  },
];

//method to make dependent dropdowns
window.onload = function () {
  var itemSel = document.getElementById("province");
  var subitemSel = document.getElementById("city");
  for (let x in stateObject) {
    itemSel.options[itemSel.options.length] = new Option(
      stateObject[x].name,
      x
    );
  }
  itemSel.onchange = function () {
    subitemSel.length = 1;
    for (let y of stateObject[this.value].City) {
      subitemSel.options[subitemSel.options.length] = new Option(y, y);
      document.getElementById("gst").value = stateObject[this.value].gst;
      document.getElementById("proVal").value = stateObject[this.value].name;
    }
  };
};

// function formSubmit() {
//   console.log("----hi----");
// }
