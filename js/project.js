class Project {
    constructor(name, description, tags, theme, themeData, container, themeContainer) {
        this.name = name;
        this.description = description;
        this.tags = tags;
        this.theme = theme;
        this.theme_container = themeContainer;
        this.theme_data = themeData;


        this.project = document.createElement("div");
        this.project.onclick = () => {
            this.load_theme();
        };
        this.project.appendChild(function(that) {
            var dname = document.createElement("h1")
            dname.innerHTML = that.name;
            return dname;
        }(this));
        this.project.appendChild(function(that) {
            var ddescription = document.createElement("p")
            ddescription.innerHTML = that.description;
            return ddescription;
        }(this));
        this.project.appendChild(function (that) {
            var dtags = document.createElement("p");
            dtags.innerHTML = "Tags: ";
            for (var tag in that.tags) {
                dtags.innerHTML += that.tags[tag] + ", ";
            }
            dtags.innerHTML = dtags.innerHTML.slice(0, -2);
            return dtags;
        }(this));

        container.appendChild(this.project);
    }
    load_theme() {
        Loader.load(this.theme, this.theme_data, this.theme_container);
    }
    filter(allTags, research) {
        for (var i = 0; i < allTags.length; i++) {
            if (!this.tags.includes(allTags[i])) {
                return false;
            }
        }
        if (research == "") {
            return true;
        }
        if (this.name.toLowerCase().indexOf(research.toLowerCase()) != -1) {
            return true;
        }
        if (this.description.toLowerCase().indexOf(research.toLowerCase()) != -1) {
            return true;
        }
        return false;
    }
    show() {
        this.project.style.display = "flex";
    }

    hide() {
        this.project.style.display = "none";
    }
}