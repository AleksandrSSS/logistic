const burgerBlock = document.querySelector('.burger__menu')
const burgerActive = document.querySelector('.burger__menu-active')
const burgerClose = document.querySelector('.burger__menu-close')
const nav = document.querySelector('.nav')
const list = document.querySelector('.nav__navigate')
const items = document.querySelectorAll('.nav__list')
const navPage = document.querySelector('.nav__page')
const navLinks = document.querySelectorAll('.nav__link')
const body = document.querySelector('body')
const burgerMenuOpen = document.querySelector('.burger__menu-open')
const burgerMenuClose = document.querySelector('.burger__menu-close')

const arrToggle = [
  burgerMenuOpen,
  burgerMenuClose,
  burgerBlock,
  nav,
  navPage,
  list,
]
items.forEach(item => {
  arrToggle.push(item) 
});
navLinks.forEach(item => {
  arrToggle.push(item) 
});

burgerBlock.addEventListener('click', showMenu)

function showMenu() {

  arrToggle.forEach(item => {
    item.classList.toggle('active');
  });

  nav.classList.contains('active') 
    ? body.style.cssText = "overflow: hidden;" 
    : body.style.cssText = "";
}