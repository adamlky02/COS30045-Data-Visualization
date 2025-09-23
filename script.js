// Optional: highlight nav link dynamically (redundant since handled in HTML)
document.addEventListener("DOMContentLoaded", () => {
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll(".navbar a");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const exploreBtn = document.getElementById("exploreButton");

    if (exploreBtn) {
        exploreBtn.addEventListener("click", function () {
            alert("Check our Televisions page for details!");
        });
    }
});

