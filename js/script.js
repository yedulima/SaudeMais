let icon = document.getElementById("icon");

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if (icon.src.match("moon-stars")){
        icon.src = "./img/sun.png";
    } else {
        icon.src = "./img/moon-stars.png";
    }
}