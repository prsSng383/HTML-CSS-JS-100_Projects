let cursor = document.querySelector(".cursor");


// function that set's the mouse X and Y axis to the cursor div top and left properties.
function cursorAxis(posX , posY){

    cursor.style.left = `${posX}px`;
    cursor.style.top = `${posY}px`
}

// event listening to mousemove , and send the cordinates to the function as arguments.
document.addEventListener("mousemove" , (event)=>{

    let posX = event.pageX ;
    let posY = event.pageY ;
    
    console.log(posX , posY);
    cursorAxis(posX , posY)
  

})