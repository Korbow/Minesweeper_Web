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
