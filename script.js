//Selecionar os elementos

const colors = ["red", "green","blue", "#f15025" ]

const changeBtn = document.querySelector("#btn-submit");
const nameColor = document.querySelector("#name-color");
const backColor = document.querySelector("#background");


changeBtn.addEventListener("click", function(){
    console.log("Apertou o botão!!");
    backColor.style.background = 'green';
    nameColor.innerHTML = 'Green';
})