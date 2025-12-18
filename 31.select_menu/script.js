let dropIcon = document.querySelector(".select i");
let options = document.querySelector(".options");
let select = document.querySelector(".select-para") ;

let selected = false;

dropIcon.addEventListener("click", () => {
  if (selected === false) {
    dropIcon.style.transform = "rotate(180deg)";
    options.style.display = "flex";
  }else{
    dropIcon.style.transform = "rotate(0deg)";
    options.style.display = "none";
  }

  selected = !selected ;
});

// onclick this is how you will know , which option from the list has been clicked.
options.addEventListener("click",(e)=>{
    let a = e.target ;
    console.log(a.textContent);
    
    select.textContent = a.textContent ;
    dropIcon.style.transform = "rotate(0deg)";
    options.style.display = "none";
    selected = !selected ;
})