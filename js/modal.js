import { getGameEnded } from './TimerEtScore.js';

var ModalGameSetting = document.getElementById("ModalGameSetting");
var ModalCustomSetting = document.getElementById("ModalCustomSetting");
var ModalGameOver = document.getElementById("ModalGameOver");




const facile = [10, 10, 12];
const moyen = [14, 14, 30];
const difficile = [18, 18, 66]


document.addEventListener("DOMContentLoaded", () => {
  ModalGameSetting.style.display = "block";
  ModalCustomSetting.style.display = "none";
  ModalGameOver.style.display = "none";
});


window.onclick = function(event) {
  if (event.target == ModalGameSetting) {
    ModalGameSetting.style.display = "none";
  }
}
  

let difficulty = facile;

const cards = document.querySelectorAll(".flex-modal-lvl")
const cardCustom = document.getElementById("cardCustom")

cards.forEach((card)=>{
  card.addEventListener("click", () =>{
  
    if (card.id === "modal-flex-lv1"){
      console.log("facile");
      difficulty = facile;

      ModalGameSetting.classList.add("end");
      setTimeout(() => {
      ModalGameSetting.style.display = "none";
      }, 1300);

      return difficulty;
    }
    else if(card.id === "modal-flex-lv2"){
      console.log("moyen");
      difficulty = moyen;

      ModalGameSetting.classList.add("end");
      setTimeout(() => {
      ModalGameSetting.style.display = "none";
      }, 1300);

      return difficulty;
    }
    else if(card.id === "modal-flex-lv3"){
      console.log("difficile");
      difficulty = difficile;

      
      ModalGameSetting.classList.add("end");
      setTimeout(() => {
      ModalGameSetting.style.display = "none";
      }, 1300);

      console.log(difficulty);
      return difficulty;
      
      
    }
    
  });
  
});



cardCustom.addEventListener("click", () =>{
  ModalGameSetting.style.display = "none";
  ModalCustomSetting.style.display = "block";

  


});

const submitCustomBtn = document.getElementById('submitCustom');
submitCustomBtn.addEventListener("click", () =>{


  let nLignesV = document.getElementById('nlignes').value;
  let nColonnesV = document.getElementById('ncolonnes').value;
  let nMinesV = document.getElementById('nmines').value;

  if(nMinesV <= nLignesV*nColonnesV){
    difficulty = [nLignesV, nColonnesV, nMinesV]
    ModalCustomSetting.classList.add("end");
    setTimeout(() => {
      ModalCustomSetting.style.display = "none";
      }, 1300);

    console.log(difficulty);
  }else{
    alert("Le nombre de ligne doit être inférieur au produit du nombre de lignes et du nombre de colonnes !")
  }
   

});




export function getDifficulty() {
  return difficulty;
}


document.addEventListener("gameOver", () => {
  if (getGameEnded()) {
    ModalGameOver.style.display = "block";
    console.log("wow!")
  }
});