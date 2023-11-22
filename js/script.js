const changeWelkomenImage = () => {
    let radio = document.getElementById("checked-radio");
    let image = document.getElementById("welkomen-image");
    if (radio.checked){
        image.src = "./../img/first window/hamburguer.png";
        return;
    }
    image.src = "./../img/first window/salad.png";
}