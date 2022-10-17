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
        "theme": "oneimage",
        "theme_data": {
            "name": "ClimatView",
            "description": "SAE 2.4 et 2.5, 2022",
        }
    },
    {
        "name": "Lowatem",
        "description": "SAE 1.02, maintiens d'un code sur la durée",
        "tags": ["2021", "Java", "SAE", "IUT"],
        "theme": "oneimage",
        "theme_data": {
            "img1": "img/root/Lowatem1.png",
            "img1Alt": "Lowatem graphique",
            "CahierCharges": `- Créer les règles d'un jeu suivant
                les instructions demandés (une fois une règles implémenter et fonctionnelle, on passe au suivant)
                <br>
            - Créer une "intelligence artificielles" (doit juste pouvoir prendre le coups le plus intéressant)"
            `,
            "competences": `- Java<br>
            - Avoir un code propre et maintenable sur le temps<br>
            - Test unitaires<br>
            - Travailler en équipes<br>
            `,
            "methodes": `J'ai débuter par lire le code puis, pour chaque demande, j'ai commencé par ajouter le code besoin afin de changer le code préexistant pour que tous fonctionne.
            <br>
            Pour l'IA, nous avons tous deux créer une intelligence puis avec un code développer au début de cette partie nous les avons fusionné.`
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
    "oneimage": `
        <section>
            <img src="{img1}" alt="{img1Alt}">
            <div>
                <h3>Cahier des charges</h3>
                <p>{CahierCharges}</p>
            </div>
        </section>
        <article>
            <section>
                <h3>Compétences</h3>
                <p>{competences}</p>
            </section>
            <section>
                <h3>Méthodes</h3>
                <p>{methodes}</p>
            </section>
        </article>
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