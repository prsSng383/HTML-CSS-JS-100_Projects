const cls = document.querySelector(".close");
const opn = document.querySelector(".open")
const inpt = document.querySelector("input");

cls.addEventListener("click", ()=>{
//   to show the password , i am changing the type of the inputfield.
    inpt.type = "name";
    cls.style.display = "none";
    opn.style.display = "block"

})

opn.addEventListener("click", ()=>{

    inpt.type = "password";
    cls.style.display = "block";
    opn.style.display = "none"

})