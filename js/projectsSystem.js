var ProjectsSystem = new class {
    constructor() {
        this.projectsContainer = document.getElementById("allProject");
        this.projects = this.createAllProjects();
        this.depliant = document.getElementById("depliant");
        this.constructDepliant();
        this.showAll();
        this.createEvent();
        this.tagFilter = [];
    }

    constructDepliant() {
        var tags = [];
        for (var project in this.projects) {
            for (var tag in this.projects[project].tags) {
                if (!tags.includes(this.projects[project].tags[tag])) {
                    tags.push(this.projects[project].tags[tag]);
                }
            }
        }
        for (var tagPack in tagsData) {
            var i = 0;
            for (var tag in tags) {
                if (!tagsData[tagPack].includes(tags[tag])) {
                    continue;
                } else {
                    if (i == 0) {
                        var pack = document.createElement("p");
                        pack.innerHTML = tagPack;
                        this.depliant.appendChild(pack);
                    }
                    i=1;
                }
                var tagData = document.createElement("input");
                tagData.type = "button";
                tagData.value = tags[tag];
                tagData.className = "tag";
                tagData.id = "tag-" + tags[tag];
                tagData.onclick = function () {
                    ProjectsSystem.filter(this.value);
                }
                this.depliant.appendChild(tagData);
            }
        }
    }

    showAll() {
        for (var project in this.projects) {
            this.projects[project].show();
        }
    }

    hideAll() {
        for (var project in this.projects) {
            this.projects[project].hide();
        }
    }

    filter(tag) {
        if (this.tagFilter.includes(tag)) {
            this.tagFilter.splice(this.tagFilter.indexOf(tag), 1);
            var tagElement = document.getElementById("tag-" + tag);
            tagElement.style.backgroundColor = "white";
            tagElement.style.color = "black";
        } else {
            if (tag != undefined) {
                this.tagFilter.push(tag);
                var tagElement = document.getElementById("tag-" + tag);
                tagElement.style.backgroundColor = "black";
                tagElement.style.color = "white";

            }
        }
        var projects = [];
        for (var project in this.projects) {
            projects.push(this.projects[project]);
        }
        for (var i = 0; i < projects.length; i++) {
            if (!projects[i].filter(this.tagFilter, document.getElementById("Research").value)) {
                projects.splice(i, 1);
                i--;
                continue;

            }
        }
        this.hideAll();
        for (var project in projects) {
            projects[project].show();
        }
    }

    createAllProjects() {
        var projects = [];
        for (var project in ProjectData) {
            projects.push(
                new Project(
                    ProjectData[project].name,
                    ProjectData[project].description,
                    ProjectData[project].tags,
                    ProjectData[project].theme,
                    ProjectData[project].theme_data,
                    this.projectsContainer,
                    document.getElementById("projectTemplate")

                )
            );
        }
        return projects;
    }

    createEvent() {
        document.getElementById("Research").onblur = function () {
            if (ProjectsSystem.researchReload != undefined) {
                clearTimeout(ProjectsSystem.researchReload);
            }
        }
        document.getElementById("Research").onfocus = function () {
            ProjectsSystem.researchReload = setInterval(function () {
                ProjectsSystem.filter();
            }, 50);
        }
        document.getElementById("Research").onmouseenter = function () {
            document.getElementById("depliant").style.display = "flex";
        }
        document.getElementById("Research").onmouseleave = function () {
            document.getElementById("depliant").style.display = "none";
        }
        document.getElementById("depliant").onmouseenter = function () {
            document.getElementById("depliant").style.display = "flex";
        }
        document.getElementById("depliant").onmouseleave = function () {
            document.getElementById("depliant").style.display = "none";
        }
    }
}();
