/*===== SHOW MENU =====*/
const showMenu  = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')


/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })

}
window.addEventListener('scroll', scrollActive)


/*===== CHANGE BACKGROUND HEADER =====*/ 
function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >= 200) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


/*===== SHOW SCROLL TOP =====*/ 
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top')
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)


/*===== MIXITUP FILTER RESEARCH =====*/ 
const mixer = mixitup('.research__container', {
    selectors: {
        target: '.research__content'
    },
    animation: {
        duration: 400
    }
});


/* Link active research */ 
const linkresearch = document.querySelectorAll('.research__item')

function activeresearch(){
    if(linkresearch){
        linkresearch.forEach(l => l.classList.remove('active-research'))
        this.classList.add('active-research')
    }
}
linkresearch.forEach(l => l.addEventListener('click', activeresearch))

/*===== SWIPER CAROUSEL =====*/ 
const mySwiper = new Swiper('.testimonial__container', {
    spaceBetween: 16,
    loop: true,
    grabCursor: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints:{
        640:{
            slidesPerView: 2,
        },
        1024:{
            slidesPerView: 3,
        },
    }

    //Navigation arrows
    //navigation: {
    //    nextEl: '.swiper-button-next',
    //    prevEl: '.swiper-button-prev',
    //},

    //And if we need scrollbar
    //scrollbar: {
    //    el: '.swiper-scrollbar',        
    //},
})


/*===== GSAP ANIMATION =====*/ 
gsap.from('.home__img', {opacity:0, duration:3, delay:0.6, x:60})
gsap.from('.home__data', {opacity:0, duration:3, delay:0.8, y:25})
gsap.from('.home__name', {opacity:0, duration:3, delay:0.5, y:25, ease:'expo.out', stagger:0.2})
gsap.from('.home__greeting', {opacity:0, duration:3, delay:1.5, y:25, ease:'expo.out', stagger:0.2})
gsap.from('.home__profession', {opacity:0, duration:3, delay:2, y:25, ease:'expo.out', stagger:0.2})
gsap.from('.home__button', {opacity:0, duration:3, delay:1.5, y:25, ease:'expo.out', stagger:0.2})
gsap.from('.nav__log', {opacity:0, duration:3, delay:1.5, y:25, ease:'expo.out', stagger:0.2})
gsap.from('.nav__toggle', {opacity:0, duration:3, delay:1.5, y:25, ease:'expo.out', stagger:0.2})
gsap.from('.nav__item', {opacity:0, duration:3, delay:1.5, y:25, ease:'expo.out', stagger:0.2})
gsap.from('.home__social-icon', {opacity:0, duration:2, delay:2.3, y:25, ease:'expo.out', stagger:0.2})
