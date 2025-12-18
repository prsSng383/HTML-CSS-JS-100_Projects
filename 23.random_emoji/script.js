let arrEmoji = ["😀","😁","😅","🥲","🤫","😮","🤥"] ; 

let emoji = document.querySelector('.emoji') ;
let btn = document.querySelector('.btn');

function emjoiFetch(){
      
   let id =  Math.floor(Math.random() * 6) ; 
   // random() will give number btwn 0 to 1 , mult with 6 , if the random number will be 1*6 = 6 which is the 
   //  number of index in the array .
   emoji.innerHTML = arrEmoji[id];
}

btn.addEventListener('click' , emjoiFetch) ; 
