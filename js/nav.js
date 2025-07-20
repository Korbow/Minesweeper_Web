const currentPage = window.location.pathname.split("/").pop().replace(".html", "");

let currentLink = null;

document.querySelectorAll(".navbar-content a").forEach(link => {
    if (link.getAttribute("href").includes(currentPage)) {
        link.classList.add("is-active");
        link.setAttribute("id", "active-link")
        currentLink = link;
    }
});