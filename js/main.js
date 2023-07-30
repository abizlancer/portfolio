
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
console.log(gsap);
if(ScrollTrigger.isTouch !== 1) {
  
  ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',
    smooth: 1.5,
    effects: true,
  })
  
  
}
gsap.fromTo('.go-up span', {y: '110%'}, {y: 0, ease: "Power4.easeOut", duration: 2 }, '<')

const menu = document.querySelector('.menu')
const menuOpenBtn = document.querySelector('.navbar__burger')
const menuCloseBtn = document.querySelector('.menu__close')

menuOpenBtn.addEventListener('click', () => { 
  menu.classList.add('active')
})
menuCloseBtn.addEventListener('click', () => {
  menu.classList.remove('active') 
})

// about section
const tlAbout = gsap.timeline({
  scrollTrigger:{
    trigger: '.about',
    start: '-70%',
    end: '0%',
  }
})
tlAbout.fromTo('.about--bg', { opacity: 0 }, { opacity: 1, ease: "Power4.easeOut", duration: 2.35 }, )
tlAbout.fromTo('.about__content--title span', {y: '110%'}, {y: 0, ease: "Power4.easeOut", duration: 1.75 }, '<20%')
tlAbout.fromTo('.about__content--info span', { opacity: 0,}, { opacity: 1, ease: "Power4.easeOut", duration: 1.75 }, '<')