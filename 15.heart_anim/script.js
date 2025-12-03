let grayHeart = document.querySelector(".gray-heart");
let redHeart = document.querySelector(".red-heart");

grayHeart.addEventListener("click" , ()=>{

    redHeart.style.visibility = "visible";
    redHeart.style.opacity = 1;
    redHeart.style.scale = 1 ;
   
})

redHeart.addEventListener("click" , ()=>{

    redHeart.style.visibility = "hidden";
    redHeart.style.opacity = 0 ;
    redHeart.style.scale = 2;
})