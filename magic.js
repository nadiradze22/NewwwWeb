var scrollUp = document.querySelector('.scroll-up');
var Navbar = document.querySelector('nav');
var Ul = document.querySelector('ul');
var white = document.querySelector('.fa-sun');
var black = document.querySelector('.fa-moon');
var Cont = document.querySelector('.container');
var New = document.querySelector('.news');
var logo  = document.querySelector('.logo')

white.addEventListener('click', ()=> {
Cont.style.background = 'white';
New.style.background = 'white';
Navbar.style.background = 'white'
Ul.style.background =  'white';
logo.style.borderBottom = '2px solid black'
logo.style.borderTop = '2px solid black'
scrollUp.style.background = 'black'
Cont.style.transition = '1s'
New.style.transition = '1s'
})


black.addEventListener('click', ()=> {
   Cont.style.background = 'black';
   New.style.background =  'black';
Ul.style.background =  'black';
    logo.style.borderBottom = '2px solid white'
   logo.style.borderTop = '2px solid white'
Navbar.style.background = 'black'
scrollUp.style.background = 'white'
   Cont.style.transition = '1s'
New.style.transition = '1s'
   })



 scrollUp.addEventListener('click', function(){
     window.scrollTo(0,0),
     scrollbehivior = 'smooth';
 });

 window.addEventListener('scroll', ()=>{
     var scrolled = this.scrollY;
     if(scrolled > 300){
        scrollUp.style.opacity = '1'
        scrollUp.style.top = '70%'
     }else{
        scrollUp.style.opacity = '0'
        scrollUp.style.top = '0'
     }
 })



