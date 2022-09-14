function change_style(){
    var style = localStorage.getItem("color");
    var sheet = document.getElementById("page_style");

    if (style != "style.css") {
        sheet.href = "style.css";
        localStorage.setItem("color", "style.css");
    }
    else {
        sheet.href = "style.css";
        localStorage.setItem("color", "style.css");

        sheet.href = "alternate.css";
        localStorage.setItem("color", "alternate.css");
    } 
}
