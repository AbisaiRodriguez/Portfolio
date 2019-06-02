const burger = document.querySelector(".burger");
const navLinks = document.querySelectorAll(".nav-links li");


burger.addEventListener("click", () => {
    // toggle nav
    document.querySelector(".nav-links").classList.toggle("active");
    // animate links
    navLinks.forEach( (link, index) => {
        if(link.style.animation){
            link.style.animation = "";
        }
        else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }

        console.log(link.style.animation);
    });
    //burger animation
    burger.classList.toggle("toggle");
});

const app = () => {
    burger();
}
