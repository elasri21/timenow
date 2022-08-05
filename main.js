const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");
const closeMenu = document.querySelector(".close");

menu.addEventListener("click", function() {
    this.style.display = "none";
    nav.style.display = "block";
    closeMenu.style.display = "block";
});
closeMenu.addEventListener("click", function() {
    this.style.display = "none";
    nav.style.display = "none";
    menu.style.display = "block";
});
//
const rightBoll = document.querySelector(".right-boll");
const leftBoll = document.querySelector(".left-boll");
leftBoll.addEventListener("click", function() {
    this.style.display = "none";
    rightBoll.style.display = "block";
});
rightBoll.addEventListener("click", function() {
    this.style.display = "none";
    leftBoll.style.display = "block";
});

// get the form
const form = document.querySelector(".form form");
const container = document.querySelector(".container");
const dashboard = document.querySelector(".dashboard");
form.addEventListener("submit", function(e){
    if(form.elements.email.value != "") {
        e.preventDefault();
        container.style.display = "none";
        dashboard.style.display = "block";
        form.elements.email.value = ""
    } else {
        e.preventDefault();
    }
});


