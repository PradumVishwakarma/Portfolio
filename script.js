
function menubar() {
    var a = document.getElementById("nav");
    a.classList.toggle("change");
}

document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
}, false);