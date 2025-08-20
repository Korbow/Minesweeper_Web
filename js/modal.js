import { getGameEnded, resetScoreAndTimer } from "./TimerEtScore.js";
import { lancerJeu } from "./main.js";

/* Initialisations*/
var ModalGameSetting = document.getElementById("ModalGameSetting");
var ModalCustomSetting = document.getElementById("ModalCustomSetting");
var ModalGameOver = document.getElementById("ModalGameOver");
var ModalWin = document.getElementById("ModalWin");

const facile = [10, 10, 10];
const moyen = [14, 14, 30];
const difficile = [18, 18, 66];

document.addEventListener("DOMContentLoaded", () => {
  ModalGameSetting.style.display = "block";
  ModalCustomSetting.style.display = "none";
  ModalGameOver.style.display = "none";
  ModalWin.style.display = "none";
});

window.onclick = function (event) {
  if (event.target == ModalGameSetting) {
    ModalGameSetting.style.display = "none";
  }
};

let difficulty = facile;

const cards = document.querySelectorAll(".flex-modal-lvl");
const cardCustom = document.getElementById("cardCustom");

// Selection de difficulté
cards.forEach((card) => {
  card.addEventListener("click", () => {
    if (card.id === "modal-flex-lv1") {
      console.log("facile");
      difficulty = facile;

      ModalGameSetting.classList.add("end");
      setTimeout(() => {
        ModalGameSetting.style.display = "none";
      }, 1300);

      return difficulty;
    } else if (card.id === "modal-flex-lv2") {
      console.log("moyen");
      difficulty = moyen;

      ModalGameSetting.classList.add("end");
      setTimeout(() => {
        ModalGameSetting.style.display = "none";
      }, 1300);

      return difficulty;
    } else if (card.id === "modal-flex-lv3") {
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

// parametres customs
cardCustom.addEventListener("click", () => {
  ModalGameSetting.style.display = "none";
  ModalCustomSetting.style.display = "block";
});

// btn pour push les parametres de jeu, + verifications
const submitCustomBtn = document.getElementById("submitCustom");
submitCustomBtn.addEventListener("click", () => {
  let nLignesV = Number(document.getElementById("nlignes").value);
  let nColonnesV = Number(document.getElementById("ncolonnes").value);
  let nMinesV = Number(document.getElementById("nmines").value);

  // Verifications
  if (
    !Number.isInteger(nLignesV) ||
    !Number.isInteger(nColonnesV) ||
    !Number.isInteger(nMinesV)
  ) {
    alert("Toutes les valeurs doivent être des nombres entiers !");
  } else if (nLignesV > 50 || nColonnesV > 50) {
    alert(
      "Le nombre de lignes et de colonnes ne peut pas être au-dessus de 50"
    );
  } else if (nMinesV <= 0 || nLignesV <= 0 || nColonnesV <= 0) {
    alert(
      "Le nombre de lignes, colonnes et mines ne peut pas être nul ou négatif"
    );
  } else if (nMinesV >= nLignesV * nColonnesV) {
    alert(
      "Le nombre de mines doit être inférieur au produit du nombre de lignes et du nombre de colonnes !"
    );
  } else {
    difficulty = [nLignesV, nColonnesV, nMinesV];
    ModalCustomSetting.classList.add("end");
    setTimeout(() => {
      ModalCustomSetting.style.display = "none";
    }, 1300);

    console.log(difficulty);
  }
});

//export vers le main
export function getDifficulty() {
  return difficulty;
}

//modals de fin de jeu
document.addEventListener("gameOver", () => {
  if (getGameEnded()) {
    ModalGameOver.style.display = "block";
  }
});

document.addEventListener("Win", () => {
  if (getGameEnded()) {
    ModalWin.style.display = "block";
  }
});

/*
Modal Retry
*/
const modalGoBtnRetry = document.getElementById("modalGObtnPremier");
const modalGoBtnLevel = document.getElementById("modalGObtnSecond");

const modalWinBtnRetry = document.getElementById("modalWinbtnPremier");
const modalWinBtnLevel = document.getElementById("modalWinbtnSecond");

modalGoBtnLevel.addEventListener("click", () => {
  location.reload();
});

modalGoBtnRetry.addEventListener("click", () => {
  resetScoreAndTimer();
  lancerJeu();
  ModalGameOver.style.display = "none";
});

modalWinBtnLevel.addEventListener("click", () => {
  location.reload();
});

modalWinBtnRetry.addEventListener("click", () => {
  resetScoreAndTimer();
  lancerJeu();
  ModalWin.style.display = "none";
});
