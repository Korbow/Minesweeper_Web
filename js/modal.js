var modal = document.getElementById("ModalGameSetting");




var span = document.getElementsByClassName("close")[0];

document.addEventListener("DOMContentLoaded", () => {
  modal.style.display = "block";
});


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


const cards = document.querySelectorAll(".flex-modal-lvl")

cards.forEach((card)=>{
  card.addEventListener("click", () =>{
  
    if (card.id === "modal-flex-lv1"){
      console.log("facile");
    }
    else if(card.id === "modal-flex-lv2"){
      console.log("moyen");
    }
    else if(card.id === "modal-flex-lv3"){
      console.log("difficile");
    }
  });

});