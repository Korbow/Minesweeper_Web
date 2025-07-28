
const button = document.getElementById("enable-sound");

const spanTexte = document.querySelector(".text-base");

const icon = document.getElementById("svg-unmute");

const volume = document.querySelector(".volume");

const bgreveal = document.querySelector(".bg-reveal");




let targetX = 0, targetY = 0;
let currentX = 0, currentY = 0;

if (sessionStorage.getItem("isunmute") === null) {
  sessionStorage.setItem("isunmute", "false");
}

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


  // Début du process d'animation
    volume.classList.add("one");
    
  // Deuxieme phase du process d'animation
  setTimeout(() => {
    volume.classList.remove("one");
    volume.classList.add("two");
  }, 1000);

  // Troisieme phase du process d'animation
  setTimeout(() => {
    volume.classList.add("three");
    spanTexte.innerHTML="";
  }, 100);

  // Quatrieme phase du process d'animation
  setTimeout(() => {
    volume.classList.add("four");
    bgreveal.classList.remove("bg-reveal");
  }, 1000);

  // Derniere phase du process d'animation
  setTimeout(() => {

    sessionStorage.setItem("isunmute", "true");
    volume.classList.add("five");
    
    
  }, 400);


});

const savedUnmute = sessionStorage.getItem("isunmute");
const savedVolume = sessionStorage.getItem("globalVolume");

console.log("[DEBUG] savedUnmute =", savedUnmute);

const isRefresh = performance.getEntriesByType("navigation")[0]?.type === "reload";

if (performance.getEntriesByType("navigation")[0]?.type === "reload"){
  sessionStorage.setItem("isunmute", "false");
}

if (!isRefresh && savedUnmute === "true") {
  spanTexte.innerHTML = "";
  
  icon.classList.add("unmuted");
  volume.classList.add("four", "five");
  bgreveal?.classList.remove("bg-reveal");

  const initialVolume = savedVolume !== null ? parseFloat(savedVolume) : 0.5;
  setVolumeForAllAudios(initialVolume);
  const slider = document.getElementById("volume-slider");
  if (slider) slider.value = initialVolume;
}
else{
  console.log("[DEBUG] savedUnmute =", savedUnmute);
}


const volumeSlider = document.getElementById("volume-slider");
if (volumeSlider) {
  const initialVolume = savedVolume !== null ? parseFloat(savedVolume) : 0.5;
  volumeSlider.value = initialVolume;
  setVolumeForAllAudios(initialVolume);

  volumeSlider.addEventListener("input", () => {
    const currentVolume = parseFloat(volumeSlider.value);
    setVolumeForAllAudios(currentVolume);
    sessionStorage.setItem("globalVolume", currentVolume);
  });
}


function setVolumeForAllAudios(volume) {
  document.querySelectorAll("audio").forEach(audio => {
    audio.volume = volume;
  });
}