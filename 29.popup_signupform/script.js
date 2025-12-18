const sign  = document.querySelector(".sign");
const container2 = document.querySelector(".container2");
const span = document.querySelector("span");

// nothing much design mattered .
sign.addEventListener("click" , ()=>{
     container2.style.display= "flex" ;
})

span.addEventListener("click",()=>{
    container2.style.display= "none" ;
})
