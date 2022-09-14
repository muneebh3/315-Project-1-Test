function change_style() {
    var alt = false;
    document.getElementById("style_change").onclick = function() {
        alt = true;
    };
    if (alt) {
        document.getElementById("page_style").setAttribute("href", "main.css");
        alt = false;
    }
    else {
        document.getElementById("page_style").setAttribute("href", "alternate.css");
        alt = true;
    }
}
