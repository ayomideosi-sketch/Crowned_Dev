const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");
const overlay = document.querySelector(".menu-overlay")
menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    overlay.classList.toggle("active");
    menuBtn.classList.toggle("open");
});
overlay.addEventListener("click", () => {
    navMenu.classList.remove("active");
    overlay.classList.remove("active");
    menuBtn.classList.remove("open");
})
const navLinks = document.querySelectorAll("#nav-menu a");
navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        navMenu.classList.remove("active");
        overlay.classList.remove("active");
        menuBtn.classList.remove("open");
        setTimeout(() => {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }, 250);
    });
});