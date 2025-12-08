let arr = ["Awesome", "Cool", "Mostly Liked", "Lovely"];
let text = document.querySelector(".text");

// current index position in the array.
let index = 0;

function animateWord(word) {
  //This is for forward character motion!
  for (let i = 1; i <= word.length; i++) {
    setTimeout(() => {
      text.textContent = word.slice(0, i);
    }, i * 250);
  }

  //This is for backward character motion!
  for (let i = 1; i <= word.length; i++) {
    setTimeout(() => {
      text.textContent = word.slice(0, -i);
    }, (word.length + i) * 250);
  }

  
 // calling the next element in the array....
  setTimeout(() => {
    index = (index + 1) % arr.length ; 
    animateWord(arr[index]);
  }, (word.length * 2 + 1) * 250);
}

// function call
animateWord(arr[index]);
