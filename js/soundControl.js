
const button = document.getElementById("enable-sound");

const spanTexte = document.querySelector(".text-base");

const icon = document.getElementById("svg-unmute");

const volume = document.querySelector(".volume");


const bgreveal = document.querySelector(".bg-reveal");

let targetX = 0, targetY = 0;
let currentX = 0, currentY = 0;
let isunmute = false;

button.addEventListener("mousemove", (e) => {
  const rect = button.getBoundingClientRect();
  targetX = e.clientX - rect.left;
  targetY = e.clientY - rect.top;
});

function animateMask() {
  // interpolation douce (0.1 = vitesse, ajustable)
  currentX += (targetX - currentX) * 0.1;
  currentY += (targetY - currentY) * 0.1;

  // maj CSS vars
  button.style.setProperty("--x", `${currentX}px`);
  button.style.setProperty("--y", `${currentY}px`);

  requestAnimationFrame(animateMask);
}

animateMask(); 
button.addEventListener("mouseleave", () => {
  if (!button.classList.contains("active")) {
    button.style.setProperty("--x", `-150px`);
    button.style.setProperty("--y", `-150px`);
  }
});

button.addEventListener("click", (e) => {
  const rect = button.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;


  button.style.setProperty("--x", `${x}px`);
  button.style.setProperty("--y", `${y}px`);


  // Active la classe


    volume.classList.add("one");
    

  // Après l'animation, garde "clicked" mais retire "active"
  setTimeout(() => {
     volume.classList.remove("one");
     

    button.classList.add("clicked");
  }, 1000);

  setTimeout(() => {
    icon.classList.add("unmuted");
    spanTexte.innerHTML="";
    
  }, 100);

  setTimeout(() => {
    bgreveal.classList.add("dispa");
    bgreveal.classList.remove("bg-reveal");
    button.classList.remove("clicked");
    button.classList.add("no-before");

    button.classList.add("before");
  }, 1000);

  setTimeout(() => {
    isunmute = true;
    sessionStorage.setItem("isunmute", "true");

    button.classList.add("idle");
    volume.classList.add("border");
  }, 400);




});

const savedUnmute = sessionStorage.getItem("isunmute");

if (savedUnmute === "true") {
  isunmute = true;
  spanTexte.innerHTML = "";
  button.classList.add("no-before", "before", "idle", "clicked");
  volume.classList.add("border");
  bgreveal.classList.add("dispa");
  bgreveal.classList.remove("bg-reveal");
}
else {
    isunmute = false;

}

window.addEventListener('DOMContentLoaded', () => {



  const volumeSlider = document.getElementById('volume-slider');
  const savedVolume = localStorage.getItem('globalVolume');
  const initialVolume = savedVolume !== null ? parseFloat(savedVolume) : 0.5;

  // Appliquer le volume sauvegardé à tous les audios
  setVolumeForAllAudios(initialVolume);

  // Si le slider est présent sur la page, synchroniser sa position
  if (volumeSlider) {
    volumeSlider.value = initialVolume;

    // Lorsqu'on modifie le slider
    volumeSlider.addEventListener('input', () => {
      const currentVolume = parseFloat(volumeSlider.value);
      setVolumeForAllAudios(currentVolume);
      localStorage.setItem('globalVolume', currentVolume);
    });
  }
});

function setVolumeForAllAudios(volume) {
  document.querySelectorAll('audio').forEach(audio => {
    audio.volume = volume;
  });
}