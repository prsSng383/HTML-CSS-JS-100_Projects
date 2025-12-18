let container = document.querySelector(".container");
let image = document.querySelector(".image");
let nav =  document.querySelector(".nav");
let a = document.querySelector(".a");

image.addEventListener("click", ()=>{
     nav.style.left = "0";
     container.style.overflow = "visible";
     image.style.scale = "0"
})

a.addEventListener("click" , ()=>{
     nav.style.left = "120%";
     container.style.overflow = "hidden";
     image.style.scale = "1";
})