const menuBtn = document.querySelector('.menu-btn');
const navBar = document.querySelector('.navbar');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {  
    navBar.style.display='';  
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    navBar.style.display='none';
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});