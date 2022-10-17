let Loader = new class {
    load(theme, data, container) {
        var dat = themeData[theme];
        for (var key in data) {
            dat = dat.replace("{" + key + "}", data[key]);
        }
        container.innerHTML = "<div class=\"" + theme + "\">" + dat + "</div>";
    }
}();