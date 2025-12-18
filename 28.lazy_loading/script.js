const loading = document.querySelector(".loading");
const container = document.querySelector(".container");

window.addEventListener("load", () => {
     
    for(let i = 0 ; i <=100 ; i++){
    
        setTimeout(() => {
            // this is the UI thing the percent you saw on the screen loops from 0 to 100.
            loading.textContent = i + "%";

            // this is the blur effect that comes down from 100px to 0px.
            container.style.filter = `blur(${100 - i}px)`;
           
            // and every i occurs after 30ms.
        }, i * 30);
    }
      
    setTimeout(()=>{
        loading.style.display = "none";
    },101*30)
    

})

