let arrow = document.querySelector(".arrow");

// working with scroll

window.addEventListener("scroll", () => {
    let scrollPosition = window.scrollY;
    // by doing log you can see the values 
    console.log(scrollPosition);

    // toggle() fnc , it add's the class if it does not exists and removes it if it does exists.
    arrow.classList.toggle("fade-out", scrollPosition > 5);
});