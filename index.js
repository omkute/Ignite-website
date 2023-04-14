var hamburger = document.querySelector(".hamburger");
var navMenu = document.querySelector(".nav-menu");


hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    console.log("clicked")

})

document.querySelectorAll(".nav-items").forEach(n => n.addEventListener("click",()=>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))
