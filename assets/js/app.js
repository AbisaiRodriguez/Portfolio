const burger = document.querySelector(".burger");
const navLinks = document.querySelectorAll(".nav-links li");
var nav = document.querySelector(".nav-links");

    burger.addEventListener("click", () => {
        // toggle nav
        nav.classList.toggle("active");
        // animate links
        navLinks.forEach( (link, index) => {
            if(link.style.animation){
                link.style.animation = "";
            }
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        //burger animation
        burger.classList.toggle("toggle");
    });

    //reset on clicking nav links
    nav.addEventListener("click", () =>{
        burger.classList.remove("toggle");
        nav.classList.remove("active");
        navLinks.forEach( (link, index) => {
            if(link.style.animation){
                link.style.animation = "";
            }
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        })
    })