const changeWelkomenImage = () => {
    let option = document.querySelector(".radio-change");
    let image = document.getElementById("welkomen-image");
    console.log(`${option.value}\n${image.src}`);
    switch(option.value){
        case 'hamburguer':
            image.src = "./img/first window/hamburguer.png";
            break;
        case 'salad':
            image.src = "./img/first window/salad.png";
            break;
        default:
            image.src = "./img/first window/hamburguer.png";
            break;
    }
}