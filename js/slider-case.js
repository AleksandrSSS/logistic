const block = document.querySelector('.case__content')
const sliderWrapCase = document.querySelector('.case__slider-wrap')
const sliderCaseItems = document.querySelectorAll('.case__slider')
const blockStyle = parseInt(window.getComputedStyle(block, null).getPropertyValue("padding-bottom"));
const sliderChilds = [...sliderWrapCase.children]
const widthSliderWrapCase = document.documentElement.clientWidth * sliderChilds.length
// const paginations = document.querySelectorAll('.case__pagination > span')
// 
const caseControlPrew = document.querySelector('.case__control-prew')
const caseControlNext = document.querySelector('.case__control-next')
// 
const blockPaginations = document.querySelector('.case__pagination')
//
sliderInit() 
createPaginationBullets()
caseControlNext.addEventListener('click', slidesNext)
caseControlPrew.addEventListener('click', slidesPrew)
// 
function sliderInit() {
  
  sliderCaseItems.forEach(item => {
  
    item.style.cssText = `
    width: ${getWidth()}px;`
  })
  block.style.cssText = `
    height: ${ +sliderWrapCase.offsetHeight + blockStyle }px;`
  // 
  sliderWrapCase.style.left = 0
}
// 
function createPaginationBullets() {
  sliderCaseItems.forEach(item => {
    let span = document.createElement('span')
    blockPaginations.appendChild(span)
  })
  pagination()
}
// 
function slidesPrew() {

  if (parseInt(sliderWrapCase.style.left) < 0) {
    sliderWrapCase.style.cssText = `
    left: ${parseInt(sliderWrapCase.style.left) + getWidth()}px;`
  }
  pagination();
}
// 
function slidesNext() {
  let flag = parseInt(sliderWrapCase.style.left)
  if (flag == 0) {
    sliderWrapCase.style.cssText = `
      left: -${getWidth()}px;`
  }
  if (flag < 0) {
    sliderWrapCase.style.cssText = `
      left: -${ -flag + getWidth()}px;`
  }
  //
  if (Math.round(sliderWrapCase.offsetWidth) + flag == getWidth()) {
    sliderWrapCase.style.cssText = `
    left: 0px;`
  }
  pagination();
}
//
function pagination() {
  let paginations = [...blockPaginations.children]
  let images = [...sliderWrapCase.children]
  //
  let flag;
  sliderCaseItems.forEach(element => {
    flag = element.offsetWidth
  });
  //
  checkAndShow( paginations, flag ) 
  checkAndShow( images, flag ) 
}
// 
function checkAndShow( array, flag ) {
  array.forEach( (item, index, arr) => {
    item.classList.remove('active')
    let a = Math.abs(parseInt(sliderWrapCase.style.left)) / flag
    a = Math.round(a)
    console.log(a);
    arr[Math.round(a)].classList.add('active')
  })
}
// 
window.addEventListener('resize', () => {

  sliderInit()
  pagination()
});
// 
const bullets = [...blockPaginations.children]
bullets.forEach((element, index, array) => {
  element.addEventListener('click', () => {
    // 
    sliderWrapCase.style.cssText = `
      left: -${getWidth() * index}px;`
    // 
    pagination()
  })
});

function getWidth() {
  let width
  if( document.documentElement.clientWidth > 1920 ) {
    width = 1920
  } else {
    width = document.documentElement.clientWidth
  }
  return width
}




