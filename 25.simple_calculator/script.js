let select = document.querySelector("select");
let input1 = document.querySelector("#num1");
let input2 = document.querySelector("#num2");
let button = document.querySelector("#calculate");
let p = document.querySelector("#result");

button.addEventListener("click", ()=>{
    
    let val1 = Number(input1.value);
    let val2 = Number(input2.value);
    // one thing you can learn here is , if you will not change the input values to number , on doing addition 
    // the val1 and val2 will concat , means val1=5 and val2=4 instead of 9 you will get 54.
    let operator = select.value;
    let res;

    console.log(val1, val2)
   
    // fetching the operators from the select element and using switch case to applly operations based on it.
    switch(operator){
        case "+": res = val1 + val2;
        break;
        case "-": res = val1 - val2;
        break;
        case "*": res = val1 * val2;
        break;
        case "/": res = val1 / val2;
        break;
    }
    p.innerHTML = `Result: ${res.toFixed(2)}`;
})

