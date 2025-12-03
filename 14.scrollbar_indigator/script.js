let indicator = document.querySelector(".scroll-indigator .progress") ;


function scrollFnc(){
    let scrollTop = document.documentElement.scrollTop ;
    let scrollHeight = document.documentElement.scrollHeight ;
    let clientHeight = document.documentElement.clientHeight ;
    let res = scrollHeight - clientHeight ; 

    let scrolled = (scrollTop / res ) * 100 ;
    console.log(scrolled);
    indicator.style.width = `${scrolled}%`
}

window.addEventListener('scroll', scrollFnc) ;
window.addEventListener('load', scrollFnc) ;


// Lear about scrollHeight and clientHeight , What is the difference ,
// Quick thing is : scrollHeight is the height of the element that u use it with,
//                  excluding the margins , border , and any horizonatal scrollbar height..this is for entire element

//                  clientHeight similar excludes the margins , borders and scrollbar height , 
                    // which in this case is your viewport without margins , borders and scrollbar height 
                    // documentElement : is the root element means <html>
                    // try to get the logic .