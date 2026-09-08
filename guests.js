const GUESTS = [
  {
    "slug": "anita-maria-del-castillo",
    "title": "Señora",
    "name": "ANITA MARIA DEL CASTILLO",
    "people": 1,
    "observation": "",
    "greeting": "Estimada señora",
    "alias": "anita"
  },
  {
    "slug": "paola-medrano",
    "title": "Señora",
    "name": "PAOLA MEDRANO E HIJO",
    "people": 2,
    "observation": "Incluye acompañante menor",
    "greeting": "Estimada señora",
    "alias": "paola"
  },
  {
    "slug": "ximena-medrano",
    "title": "Señora",
    "name": "XIMENA MEDRANO",
    "people": 1,
    "observation": "",
    "greeting": "Estimada señora",
    "alias": "ximena"
  },
  {
    "slug": "fabian-medrano",
    "title": "Familia",
    "name": "FABIAN MEDRANO",
    "people": 4,
    "observation": "",
    "greeting": "Familia",
    "alias": "fabian"
  },
  {
    "slug": "danilo-suarez",
    "title": "Familia",
    "name": "DANILO SUÁREZ",
    "people": 4,
    "observation": "",
    "greeting": "Familia",
    "alias": "danilo"
  },
  {
    "slug": "oswaldo-del-castillo",
    "title": "Señor",
    "name": "OSWALDO DEL CASTILLO",
    "people": 1,
    "observation": "",
    "greeting": "Estimado señor",
    "alias": "oswaldo"
  },
  {
    "slug": "gabriela-del-castillo",
    "title": "Señora",
    "name": "GABRIELA DEL CASTILLO E HIJO",
    "people": 2,
    "observation": "Incluye acompañante menor",
    "greeting": "Estimada señora",
    "alias": "gabriela"
  },
  {
    "slug": "richard-del-castillo",
    "title": "Señor y señora",
    "name": "RICHARD DEL CASTILLO",
    "people": 2,
    "observation": "",
    "greeting": "Estimados señor y señora",
    "alias": "richard"
  },
  {
    "slug": "teresa-pena",
    "title": "Señora",
    "name": "TERESA PEÑA E HIJO",
    "people": 2,
    "observation": "Incluye acompañante menor",
    "greeting": "Estimada señora",
    "alias": "teresa"
  },
  {
    "slug": "roberto-del-castillo",
    "title": "Familia",
    "name": "ROBERTO DEL CASTILLO",
    "people": 5,
    "observation": "",
    "greeting": "Familia",
    "alias": "roberto"
  },
  {
    "slug": "manuel-del-castillo",
    "title": "Señor y señora",
    "name": "MANUEL DEL CASTILLO",
    "people": 2,
    "observation": "",
    "greeting": "Estimados señor y señora",
    "alias": "manuel"
  },
  {
    "slug": "paul-del-castillo",
    "title": "Familia",
    "name": "PAUL DEL CASTILLO",
    "people": 5,
    "observation": "",
    "greeting": "Familia",
    "alias": "paul"
  },
  {
    "slug": "jose-del-castillo",
    "title": "Señor",
    "name": "JOSÉ DEL CASTILLO E HIJO",
    "people": 2,
    "observation": "Incluye acompañante menor",
    "greeting": "Estimado señor",
    "alias": "jose"
  },
  {
    "slug": "gabriel-rosero",
    "title": "Familia",
    "name": "GABRIEL ROSERO",
    "people": 3,
    "observation": "",
    "greeting": "Familia",
    "alias": "gabriel"
  },
  {
    "slug": "marco-negrete",
    "title": "Señor y señora",
    "name": "MARCO NEGRETE",
    "people": 2,
    "observation": "",
    "greeting": "Estimados señor y señora",
    "alias": "marco"
  },
  {
    "slug": "alexander-palma-y-johana-negrete",
    "title": "Señor y señora",
    "name": "ALEXANDER PALMA Y JOHANA NEGRETE",
    "people": 2,
    "observation": "",
    "greeting": "Estimados señor y señora",
    "alias": "alexander"
  },
  {
    "slug": "marcos-estrella",
    "title": "Familia",
    "name": "MARCOS ESTRELLA",
    "people": 3,
    "observation": "",
    "greeting": "Familia",
    "alias": "marcos"
  },
  {
    "slug": "jose-luis-larreategui",
    "title": "Familia",
    "name": "JOSE LUIS LARREATEGUI",
    "people": 3,
    "observation": "",
    "greeting": "Familia",
    "alias": "jose-luis"
  },
  {
    "slug": "stefany-pullupaxi",
    "title": "Señora",
    "name": "Stefany Pullupaxi E HIJO",
    "people": 2,
    "observation": "Incluye acompañante menor",
    "greeting": "Estimada señora",
    "alias": "stefany"
  },
  {
    "slug": "carlos-ron",
    "title": "Señor",
    "name": "CARLOS RON",
    "people": 1,
    "observation": "",
    "greeting": "Estimado señor",
    "alias": "carlos"
  },
  {
    "slug": "diego-ron",
    "title": "Señor",
    "name": "DIEGO RON",
    "people": 1,
    "observation": "",
    "greeting": "Estimado señor",
    "alias": "diego"
  },
  {
    "slug": "alexis-solorzano",
    "title": "Familia",
    "name": "ALEXIS SOLORZANO",
    "people": 3,
    "observation": "",
    "greeting": "Familia",
    "alias": "alexis"
  },
  {
    "slug": "didier-logana",
    "title": "Familia",
    "name": "DIDIER LOGAÑA",
    "people": 4,
    "observation": "",
    "greeting": "Familia",
    "alias": "didier"
  },
  {
    "slug": "patricia-almeida",
    "title": "Señora",
    "name": "PATRICIA ALMEIDA E HIJA",
    "people": 2,
    "observation": "Incluye acompañante menor",
    "greeting": "Estimada señora",
    "alias": "patricia"
  },
  {
    "slug": "oswaldo-santamaria",
    "title": "Familia",
    "name": "OSWALDO SANTAMARIA",
    "people": 3,
    "observation": "",
    "greeting": "Familia",
    "alias": "oswaldo-santamaria"
  },
  {
    "slug": "carlos-salguero",
    "title": "Familia",
    "name": "CARLOS SALGUERO",
    "people": 5,
    "observation": "",
    "greeting": "Familia",
    "alias": "carlos-salguero"
  },
  {
    "slug": "liliana-pacheco",
    "title": "Señorita",
    "name": "LILIANA PACHECO",
    "people": 1,
    "observation": "",
    "greeting": "Estimada señorita",
    "alias": "liliana"
  },
  {
    "slug": "richard-cagua",
    "title": "Señor",
    "name": "RICHARD CAGUA",
    "people": 1,
    "observation": "",
    "greeting": "Estimado señor",
    "alias": "richard-cagua"
  },
  {
    "slug": "oscar-alcaciega",
    "title": "Señor",
    "name": "OSCAR ALCACIEGA",
    "people": 1,
    "observation": "",
    "greeting": "Estimado señor",
    "alias": "oscar"
  },
  {
    "slug": "shina-sepa",
    "title": "Señorita",
    "name": "SHINA SEPA",
    "people": 1,
    "observation": "",
    "greeting": "Estimada señorita",
    "alias": "shina"
  },
  {
    "slug": "santiago-arguello",
    "title": "Señor y señora",
    "name": "SANTIAGO ARGUELLO",
    "people": 2,
    "observation": "",
    "greeting": "Estimados señor y señora",
    "alias": "santiago"
  }
];
