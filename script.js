// Wait until the DOM is fully loaded

document.addEventListener("DOMContentLoaded", function (){
    // GET DOM elements

    const hamburgger = document.querySelector(".hamburgger");
    const navMenu = document.querySelector(".nav-menu");


    // toggle menu when hambugger is  clicked

    hamburgger.addEventListener("click", function(){
        navMenu.classList.toggle("active");
        hamburgger.classList.toggle("active");
    });


    // handle window resize: auto-close mobile menu on desktop view

    window.addEventListener("resize", function(){
    if(this.window.innerWidth > 768){
        // on desktop, ensure menu is visible and hamburger is great
        navMenu.classList. remove("active")
        hamburgger.classList.remove("active")
        };
    })
})