var modal = document.getElementById("ModalGameSetting");

var span = document.getElementsByClassName("close")[0];


const facile = [10, 10, 12];
const moyen = [14, 14, 30];
const difficile = [18, 18, 66]


document.addEventListener("DOMContentLoaded", () => {
  modal.style.display = "block";
});


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

let difficulty = facile;

const cards = document.querySelectorAll(".flex-modal-lvl")

cards.forEach((card)=>{
  card.addEventListener("click", () =>{
  
    if (card.id === "modal-flex-lv1"){
      console.log("facile");
      difficulty = facile;

      modal.classList.add("end");
      setTimeout(() => {
      modal.style.display = "none";
      }, 1300);

      return difficulty;
    }
    else if(card.id === "modal-flex-lv2"){
      console.log("moyen");
      difficulty = moyen;
      
      modal.classList.add("end");
      setTimeout(() => {
      modal.style.display = "none";
      }, 1300);

      return difficulty;
    }
    else if(card.id === "modal-flex-lv3"){
      console.log("difficile");
      difficulty = difficile;

      
      modal.classList.add("end");
      setTimeout(() => {
      modal.style.display = "none";
      }, 1300);

      return difficulty;
      
    }
    
  });
  
});

export function getDifficulty() {
  return difficulty;
}