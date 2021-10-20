const slider = document.querySelector('.specializations__images-slider')
const sliderPrew = document.querySelector('.specializations__images-slider-prew')
const sliderNext = document.querySelector('.specializations__images-slider-next')
// specializations__images
const sliderItems = document.querySelectorAll('.specializations__images-slider__wrap > img')
const sliderWrap = [...document.querySelectorAll('.specializations__images-slider__wrap')]
// 
function slides() {
  let width = document.querySelector('.specializations__images').offsetWidth
  let height = 0
  
  sliderItems.forEach(el => {
    el.style.width = width + 'px'
    height = el.offsetHeight
  });

  slider.style.width = width + 'px'
  slider.style.height = height + 'px'

  sliderWrap[0].style.left = 0
  // 
  sliderNext.addEventListener('click', function() {

    console.log(parseInt(sliderWrap[0].style.left));

    sliderWrap[0].style.cssText = `left: ${ parseInt(sliderWrap[0].style.left) - slider.offsetWidth }` + 'px';

    if ( sliderWrap[0].style.left == -(slider.offsetWidth * (sliderItems.length)) + 'px' ) {
      sliderWrap[0].style.left = 0 + 'px'
    }
  })
  sliderPrew.addEventListener('click', function() {

    sliderWrap[0].style.cssText = `left: ${ parseInt(sliderWrap[0].style.left) + slider.offsetWidth }` + 'px';

    if ( sliderWrap[0].style.left > 0 + 'px' ) {
      sliderWrap[0].style.left = 0 + 'px'
    }
  })
}
// 
window.addEventListener('resize', () => {
  sliderSpecializations()
});
function sliderSpecializations() {
  sliderWrap[0].style.left = 0
  slider.style.width = document.querySelector('.specializations__images').offsetWidth + 'px'
  let height = 0
  sliderItems.forEach(el => {
    el.style.width = document.querySelector('.specializations__images').offsetWidth + 'px'
    height = el.offsetHeight
  });
  slider.style.height = height + 'px'

}
// 
sliderSpecializations()
slides()



