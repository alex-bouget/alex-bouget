let tagsData = {
    "Date": [
        "2017",
        "2018",
        "2019",
        "2020",
        "2021",
        "2022"
    ],
    "Language": [
        "C#",
        "Python",
        "WEB",
        "SQL",
        "Java",
        "PHP",
        "BATCH"
    ],
    "Type": [
        "IUT",
        "SAE",
        "Personnelle"
    ]
}

let ProjectData = [
    {
        "name": "ClimatView",
        "description": "SAE 2.4 et 2.5, 2022",
        "tags": ["2022", "Python", "SAE", "IUT"],
        "theme": "theme1",
        "theme_data": {
            "name": "ClimatView",
            "description": "SAE 2.4 et 2.5, 2022",
        }
    },
    {
        "name": "FDS",
        "description": "Systeme de mise à jour<br>(File Download System)",
        "tags": ["2020", "2021", "Python", "PHP", "Personnelle"],
        "theme": "theme1",
    },
    {
        "name": "Relic Engine",
        "description": "Moteur de jeu 2D, avec ajout de script",
        "tags": ["2019", "2021", "Python", "Personnelle"],
        "theme": "theme1",
    },
    {
        "name": "Tchat",
        "description": "Tchat en ligne fonctionnant avec ajax",
        "tags": ["2019", "Python", "PHP", "Personnelle"],
    },
    {
        "name": "Utopia",
        "description": "Jeu de carte multijoueur",
        "tags": ["2019", "2020", "2021", "2022", "Python", "WEB", "PHP", "Personnelle"],
        "theme": "theme1",
    },
    {
        "name": "Launcher",
        "description": "Création d'un lanceur d'application avec connexion",
        "tags": ["2018", "BATCH", "Personnelle"],
        "theme": "theme1",
    },
    {
        "name": "Aie",
        "description": "Test du SpeechSynthesis avec questions/réponses",
        "tags": ["2017", "BATCH", "Personnelle"],
        "theme": "theme1",
    },
]

let themeData = {
    "theme1": `
        <p>{name}</p>
        <p>{description}</p>
    `,
    "dini": `
        <h2>Attention: Chantier en cours</h2>
        <p>Dini est
            actuellement en train de refaire mon portfolio,
            il est donc possible que certaines choses ne
            soient pas encore fonctionnelles.</p>
        <img src="./img/Dini.png">
    `
}