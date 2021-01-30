const burger = document.querySelector('.burger');
    const nav = document.querySelector('.header-content-links'); 

    //adding the animation
    const navigationLinks = document.querySelectorAll('.header-content-links li'); 


//animating the menu 
const navSlide = () => {
    

    
    burger.addEventListener("click", () => {
        //showing nav menu
        nav.classList.toggle('header-content-links-active');


        //animating links
        navigationLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `header-content-links-fade 0.5s ease forwards ${index / 5 + 0.1}s`
            }
            
        })
        //index eases the animation process; console.log(index / 5) illustrates the delay. we can add as many links as we want; we can add a delay if we want, like this: (index / 5 + 0.3)
        //BUT it only fades in once, so: 
        // 1. if/else
        // 2. we ADD IT to the addEventListener, dum dum

        //we can modify its speed by toying with the properties at `header-content-links-fade 0.5s ease forwards ${index / 5 + 0.1}s`




        //"burger" animation 
        burger.classList.toggle('toggle'); 
    });

}

//hiding menu after clicking 
const navCollapse = () => {
    nav.addEventListener("click", () => {
        nav.classList.remove('header-content-links-active'); 
        
        navigationLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `header-content-links-fade 0.5s ease forwards ${index / 5 + 0.1}s`
            }
            
        })

        burger.classList.toggle('toggle');
    }); 
}

navSlide(); 

navCollapse(); 