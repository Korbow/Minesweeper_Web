

const currentPage = window.location.pathname.split("/").pop().replace(".html", "");

let currentLink = null;

document.querySelectorAll(".navbar-content a").forEach(link => {
    if (link.getAttribute("href").includes(currentPage)) {
        link.classList.add("is-active");
        link.setAttribute("id", "active-link")
        currentLink = link;
    }
});
const logoCiteMaudite = document.querySelector("#logo_cite_maudite")
logoCiteMaudite.addEventListener('click', function () {
    window.location.href = "index.html";
});



const navbar = document.querySelector(".navbar-content");

navbar.addEventListener("mouseenter", () => {
    if (currentLink) currentLink.classList.remove("is-active");
});

navbar.addEventListener("mouseleave", () => {
    if (currentLink) currentLink.classList.add("is-active");
});




//audio allumage :

const soundHover = document.querySelector(".detonator-container");
const audioBriquet = document.getElementById("audio_briquet");
const audioFeu = document.getElementById("audio_feu");

soundHover.addEventListener("mouseenter", () => {
  audioBriquet.currentTime = 0;
  audioBriquet.play();

  setTimeout(() => {
    audioFeu.currentTime = 6;
    audioFeu.play();
  }, 0);
});

soundHover.addEventListener("mouseleave", () => {
  audioBriquet.pause();
  audioBriquet.currentTime = 0;

  audioFeu.pause();
  audioFeu.currentTime = 0;
});





function triggerExplosion(element) {
    // Obtenir la position 
    const rect = element.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
  
    // Cer cle
    const explosion = document.createElement('div');
    explosion.className = 'explosion';
    explosion.style.left = `${x}px`;
    explosion.style.top = `${y}px`;
  
    document.body.appendChild(explosion);
    

    const audioExplosion = document.getElementById("audio_explosion");
    audioExplosion.currentTime = 0; // remet au début si besoin
    audioExplosion.play();


    element.classList.add("shake");

    


    setTimeout(() => {
      const startContainer = document.getElementById("btn-commencer-centrer");
      if (startContainer) {
        startContainer.style.display = "none";
      }

      
      lancerJeu()

  }, 2600);

  
  setTimeout(() => {
    explosion.style.opacity = "0"; // fade-out 

    setTimeout(() => {
      explosion.remove();
      element.classList.remove("shake");
      audioExplosion.pause();
    }, 4000); // duree du fade-out
  }, 1500); // duree de l explosion

  }
  




