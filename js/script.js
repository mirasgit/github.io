const homeBtn = document.querySelector("#nav__link__home");

const header = document.querySelector("#header");
homeBtn.addEventListener("click", function() {
    
    alert("You Are Already At Home Page");

});

const navLinks = document.querySelectorAll(".nav__link");
let aboutBtn = document.querySelector("nav__link__about");
window.addEventListener("scroll", function() {
   let scrollPos = window.scrollY;
    if (scrollPos > 681){
        header.classList.add("blue");
    }
    else {
        header.classList.remove("blue");
    }
});

for(let navItem of navLinks){
    navItem.addEventListener("click", function(){
       console.log(navItem.text); 
    });
}

aboutBtn.addEventListener("scroll", function() {
   window.scrollY = pageYOffset + "680"; 
});

