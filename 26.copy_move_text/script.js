let txt1 = document.querySelector(".txt1");
let txt2 = document.querySelector(".txt2");

let text1 = document.querySelector("#text1");
let text2 = document.querySelector("#text2");

let hoverText = document.querySelector(".hoverText");


txt1.addEventListener("click", () => {
    // this is main thing , earlier the way to copy things to clipboard was
    //  execCommand("copy") , does not work today. this is the new way
    // 
    navigator.clipboard.writeText(text1.value).then(() => {
            document.querySelector(".toast").style.display = "flex";
            setTimeout(() => {
                document.querySelector(".toast").style.display = "none";
            }, 2000);
        }).catch(err => {
            console.log("Failed to copy text: ", err);
        });
    
});
// see the logic and let me know if it make sense to you.
txt2.addEventListener("click", () => {
    hoverText.textContent = text1.value; 
    hoverText.style.display = "block"; 
    text2.style.scale = "1.1";
    text2.style.border = "4px solid greenyellow";
    text2.style.boxShadow = "0 0 10px greenyellow"; 
    text2.style.boxShadow = "0 0 15px greenyellow"; 
    text2.style.boxShadow = "0 0 20px greenyellow"; 
    text2.style.transition= "all 0.5s ease-in-out";                 
    text2.style.transitionDelay = "0.2s";         
            
    setTimeout(() => {
        hoverText.style.display = "none"; 
        text2.style.border = "2px solid greenyellow"; 
        text2.style.boxShadow = "none";
        text2.style.scale = "1";  
        text2.value = text1.value;              
    }, 500);                 
})