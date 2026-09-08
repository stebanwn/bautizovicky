const GUESTS = [
  {
    "slug": "anita",
    "title": "Señora",
    "name": "ANITA MARIA DEL CASTILLO",
    "people": 1,
    "observation": "",
    "greeting": "Estimada señora"
  },
  {
    "slug": "paola",
    "title": "Señora",
    "name": "PAOLA MEDRANO E HIJO",
    "people": 2,
    "observation": "Incluye acompañante menor",
    "greeting": "Estimada señora"
  },
  {
    "slug": "ximena",
    "title": "Señora",
    "name": "XIMENA MEDRANO",
    "people": 1,
    "observation": "",
    "greeting": "Estimada señora"
  },
  {
    "slug": "fabian",
    "title": "Familia",
    "name": "FABIAN MEDRANO",
    "people": 4,
    "observation": "",
    "greeting": "Familia"
  },
  {
    "slug": "danilo",
    "title": "Familia",
    "name": "DANILO SUÁREZ",
    "people": 4,
    "observation": "",
    "greeting": "Familia"
  },
  {
    "slug": "oswaldo",
    "title": "Señor",
    "name": "OSWALDO DEL CASTILLO",
    "people": 1,
    "observation": "",
    "greeting": "Estimado señor"
  },
  {
    "slug": "gabriela",
    "title": "Señora",
    "name": "GABRIELA DEL CASTILLO E HIJO",
    "people": 2,
    "observation": "Incluye acompañante menor",
    "greeting": "Estimada señora"
  },
  {
    "slug": "richard",
    "title": "Señor y señora",
    "name": "RICHARD DEL CASTILLO",
    "people": 2,
    "observation": "",
    "greeting": "Estimados señor y señora"
  },
  {
    "slug": "teresa",
    "title": "Señora",
    "name": "TERESA PEÑA E HIJO",
    "people": 2,
    "observation": "Incluye acompañante menor",
    "greeting": "Estimada señora"
  },
  {
    "slug": "roberto",
    "title": "Familia",
    "name": "ROBERTO DEL CASTILLO",
    "people": 5,
    "observation": "",
    "greeting": "Familia"
  },
  {
    "slug": "manuel",
    "title": "Señor y señora",
    "name": "MANUEL DEL CASTILLO",
    "people": 2,
    "observation": "",
    "greeting": "Estimados señor y señora"
  },
  {
    "slug": "paul",
    "title": "Familia",
    "name": "PAUL DEL CASTILLO",
    "people": 5,
    "observation": "",
    "greeting": "Familia"
  },
  {
    "slug": "jose",
    "title": "Señor",
    "name": "JOSÉ DEL CASTILLO E HIJO",
    "people": 2,
    "observation": "Incluye acompañante menor",
    "greeting": "Estimado señor"
  },
  {
    "slug": "gabriel",
    "title": "Familia",
    "name": "GABRIEL ROSERO",
    "people": 3,
    "observation": "",
    "greeting": "Familia"
  },
  {
    "slug": "marco",
    "title": "Señor y señora",
    "name": "MARCO NEGRETE",
    "people": 2,
    "observation": "",
    "greeting": "Estimados señor y señora"
  },
  {
    "slug": "alexander",
    "title": "Señor y señora",
    "name": "ALEXANDER PALMA Y JOHANA NEGRETE",
    "people": 2,
    "observation": "",
    "greeting": "Estimados señor y señora"
  },
  {
    "slug": "marcos",
    "title": "Familia",
    "name": "MARCOS ESTRELLA",
    "people": 3,
    "observation": "",
    "greeting": "Familia"
  },
  {
    "slug": "jose-luis",
    "title": "Familia",
    "name": "JOSE LUIS LARREATEGUI",
    "people": 3,
    "observation": "",
    "greeting": "Familia"
  },
  {
    "slug": "stefany",
    "title": "Señora",
    "name": "Stefany Pullupaxi E HIJO",
    "people": 2,
    "observation": "Incluye acompañante menor",
    "greeting": "Estimada señora"
  },
  {
    "slug": "carlos",
    "title": "Señor",
    "name": "CARLOS RON",
    "people": 1,
    "observation": "",
    "greeting": "Estimado señor"
  },
  {
    "slug": "diego",
    "title": "Señor",
    "name": "DIEGO RON",
    "people": 1,
    "observation": "",
    "greeting": "Estimado señor"
  },
  {
    "slug": "alexis",
    "title": "Familia",
    "name": "ALEXIS SOLORZANO",
    "people": 3,
    "observation": "",
    "greeting": "Familia"
  },
  {
    "slug": "didier",
    "title": "Familia",
    "name": "DIDIER LOGAÑA",
    "people": 4,
    "observation": "",
    "greeting": "Familia"
  },
  {
    "slug": "patricia",
    "title": "Señora",
    "name": "PATRICIA ALMEIDA E HIJA",
    "people": 2,
    "observation": "Incluye acompañante menor",
    "greeting": "Estimada señora"
  },
  {
    "slug": "oswaldo-santamaria",
    "title": "Familia",
    "name": "OSWALDO SANTAMARIA",
    "people": 3,
    "observation": "",
    "greeting": "Familia"
  },
  {
    "slug": "carlos-salguero",
    "title": "Familia",
    "name": "CARLOS SALGUERO",
    "people": 5,
    "observation": "",
    "greeting": "Familia"
  },
  {
    "slug": "liliana",
    "title": "Señorita",
    "name": "LILIANA PACHECO",
    "people": 1,
    "observation": "",
    "greeting": "Estimada señorita"
  },
  {
    "slug": "richard-cagua",
    "title": "Señor",
    "name": "RICHARD CAGUA",
    "people": 1,
    "observation": "",
    "greeting": "Estimado señor"
  },
  {
    "slug": "oscar",
    "title": "Señor",
    "name": "OSCAR ALCACIEGA",
    "people": 1,
    "observation": "",
    "greeting": "Estimado señor"
  },
  {
    "slug": "shina",
    "title": "Señorita",
    "name": "SHINA SEPA",
    "people": 1,
    "observation": "",
    "greeting": "Estimada señorita"
  },
  {
    "slug": "santiago",
    "title": "Señor y señora",
    "name": "SANTIAGO ARGUELLO",
    "people": 2,
    "observation": "",
    "greeting": "Estimados señor y señora"
  }
];
