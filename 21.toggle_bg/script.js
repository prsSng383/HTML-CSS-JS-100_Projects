const container = document.querySelector(".container");
const circle = document.querySelector(".circle");
const root = document.documentElement ;
let toggle = true;

circle.addEventListener("click" , ()=>{
   
    if(toggle === true){

        root.style.setProperty("--text" , "black");
        root.style.setProperty("--right" , "210px");
        root.style.backgroundColor = "black";
        container.style.backgroundColor = "white"
        toggle = false;
    }
    else{
        root.style.setProperty("--text" , "white");
        root.style.setProperty("--right" , "10px");
        root.style.backgroundColor = "white";
        container.style.backgroundColor = "black"
        toggle = true;
    }
})