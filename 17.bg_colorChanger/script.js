let btn = document.querySelector(".b");
let high = document.querySelector(".c");


function generateHex(){
    let a = "0123456789ABCDEF" ; 
    let b = "#" ;

    for(let i = 0 ; i < 6 ; i++){
      b += a[Math.round(Math.random() * 15)];
    }
    //  Loop will work 6 times , and will find the number between 0 to 16 , and then it will look 
    //  look for the same postion in the 'a' string , & will fetch randomly from the string . 
    // while concatinating it to "b" and returns a HEX-Code we use in CSS
    return b ;
}

btn.addEventListener("click",()=>{

    let c =  generateHex();
    high.innerHTML = c ;
    document.body.style.backgroundColor = c ;
})