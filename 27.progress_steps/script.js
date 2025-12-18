let progress = document.querySelector('.progress');
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');

let count = 1;

next.addEventListener('click', () => {
     
    
    if(count < 5){
        // what ever the count is mluting it with 25 . if count -> 1 * 25 = 25% , 2*25 = 50% ...
        progress.style.width = (count * 25) + '%';
        
        count++;
    }
});

prev.addEventListener('click', () => {
     if(count > 1){  
    count--;
    // similar logic for the prev button also. count-> 4 * 25 = 100 - 25 = 75%
    let a = progress.style.width = `${(count * 25) - 25}%`;
    console.log(a);
    
}
});