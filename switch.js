function change_style(){
    if (localStorage.getItem("color") === "style.css") {
        document.getElementById("page_style").setAttribute("href", "alternate.css");
        localStorage.setItem("color", "alternate.css");
    }
    else {
        document.getElementById("page_style").setAttribute("href", "style.css");
        localStorage.setItem("color", "style.css");
    } 
}

window.onload = function() {
    if (!localStorage.getItem("color")) {
        localStorage.setItem("color", "style.css");
    }

    document.getElementById("page_style").setAttribute("href", localStorage.getItem("color"));
}