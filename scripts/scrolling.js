//ADDENDUM: smooth navigation

const makeNavLinksSmooth = () => { //smoothCrolling
    const navLinks = document.querySelectorAll('.navLinks'); 

    for(let n in navLinks) {
        if(navLinks.hasOwnProperty(n)) {
            navLinks[n].addEventListener('click', e => {
                e.preventDefault(); 
                document.querySelector(navLinks[n].hash).scrollIntoView({
                    behavior: 'smooth'
                });
            })
        }
    }
}

const spyScrolling = () => {
    const sections = document.querySelectorAll('sections');

    window.onscroll = () => {
        const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop; 

        for(let s in sections) {
            if(sections.hasOwnProperty(s) && sections[s].offsetTop <= scrollPosition) {
                const id = sections[s].id;
                document.querySelector('.navLinks--active').classList.remove('navLinks--active');

                document.querySelector('a[href*=${id}]').parentNode.classList.add('navLinks--active'); 
            }
        }
    }
}

makeNavLinksSmooth(); 

spyScrolling(); 