var ModalGameSetting = document.getElementById("ModalGameSetting");
var ModalCustomSetting = document.getElementById("ModalCustomSetting");




const facile = [10, 10, 12];
const moyen = [14, 14, 30];
const difficile = [18, 18, 66]


document.addEventListener("DOMContentLoaded", () => {
  ModalGameSetting.style.display = "block";
  ModalCustomSetting.style.display = "none";
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

export function getDifficulty() {
  return difficulty;
}