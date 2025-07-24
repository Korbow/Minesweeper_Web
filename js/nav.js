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
    if (window.location.pathname.includes("/page")){
        window.location.href = "../index.html";
    }
    else{
        window.location.href = "index.html";
    }
});



const navbar = document.querySelector(".navbar-content");

navbar.addEventListener("mouseenter", () => {
    if (currentLink) currentLink.classList.remove("is-active");
});

navbar.addEventListener("mouseleave", () => {
    if (currentLink) currentLink.classList.add("is-active");
});




const button = document.getElementById("enable-sound");

const spanTexte = document.querySelector(".text-base");

const icon = document.getElementById("svg-unmute");

const volume = document.querySelector(".volume");


const bgreveal = document.querySelector(".bg-reveal");

let targetX = 0, targetY = 0;
let currentX = 0, currentY = 0;


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


    button.classList.add("active");

  // Après l'animation, garde "clicked" mais retire "active"
  setTimeout(() => {
    button.classList.remove("active");
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
     button.classList.add("idle");
     volume.classList.add("border");
  }, 400);




});