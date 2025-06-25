const menu= document.querySelector('.header__menu_icon');

const mobileNav = document.querySelector('.mobile__nav');

const links = document.querySelectorAll('.mobile__links, .mobile__resume');

let isMenuOpen = false

menu.addEventListener('click',()=>{
    if(!isMenuOpen){
        mobileNav.style.display= 'flex'
        menu.style.position= 'fixed'
        document.body.style.overflowY= 'hidden'

        isMenuOpen= !isMenuOpen
    }
    else{
        mobileNav.style.display= 'none'
        menu.style.position= 'absolute'
        document.body.style.overflowY= 'visible'

        isMenuOpen= !isMenuOpen
    }
});

links.forEach(link => {
    link.addEventListener('click',()=>{
        mobileNav.style.display= 'none'
        menu.style.position= 'absolute'
        document.body.style.overflowY= 'visible'

        isMenuOpen= !isMenuOpen
    })    
});