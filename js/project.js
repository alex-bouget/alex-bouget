class Project {
    constructor(name, description, tags, theme, container) {
        this.name = name;
        this.description = description;
        this.tags = tags;
        this.theme = theme;
        this.project = document.createElement("div");
        var dname = document.createElement("h1")
        dname.innerHTML = this.name;
        var ddescription = document.createElement("p")
        ddescription.innerHTML = this.description;
        var dtags = document.createElement("p");
        dtags.innerHTML = "Tags: ";
        for (var tag in this.tags) {
            dtags.innerHTML += this.tags[tag] + ", ";
        }
        dtags.innerHTML = dtags.innerHTML.slice(0, -2);


        this.project.appendChild(dname);
        this.project.appendChild(ddescription);
        this.project.appendChild(dtags);
        container.appendChild(this.project);
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