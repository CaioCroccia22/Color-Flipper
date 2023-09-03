//Selecionar os elementos

const colors = ["red", "green","blue", "#f15025" ];


const btn = document.querySelector("#btn");
const color = document.querySelector("#name-color");


btn.addEventListener("click", function(){
    console.log("Apertou o botão!!");
    backColor.style.background = 'green';
    nameColor.innerHTML = 'Green';
})