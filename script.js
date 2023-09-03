//Selecionar os elementos

const colors = ["Red", "Green","Blue", "Orange" ];


const btn = document.querySelector("#btn");
const color = document.querySelector("#name-color");


btn.addEventListener("click", function(){

    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.innerHTML = colors[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}

