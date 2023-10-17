const container = document.querySelector('.item-wrap__con');
    const boxContainer = document.querySelector('.item-wrap__con__item');
    const leftArrow = document.querySelector('.arrow.left');
    const rightArrow = document.querySelector('.arrow.right');
    const scrollAmount = 200; // ３回で最大値まで行く程度の数値

    leftArrow.addEventListener('click', () => {
      const containerWidth = container.offsetWidth;
      const maxScrollAmount = boxContainer.offsetWidth - containerWidth;
      const currentScrollAmount = Math.abs(parseInt(boxContainer.style.transform.split('(')[1])) || 0;
      const newScrollAmount = Math.max(currentScrollAmount - scrollAmount, 0);
      boxContainer.style.transform = `translateX(-${newScrollAmount}px)`;
      updateArrowVisibility(newScrollAmount, maxScrollAmount);
    });

    rightArrow.addEventListener('click', () => {
      const containerWidth = container.offsetWidth;
      const maxScrollAmount = boxContainer.offsetWidth - containerWidth;
      const currentScrollAmount = Math.abs(parseInt(boxContainer.style.transform.split('(')[1])) || 0;
      const newScrollAmount = Math.min(currentScrollAmount + scrollAmount, maxScrollAmount);
      boxContainer.style.transform = `translateX(-${newScrollAmount}px)`;
      updateArrowVisibility(newScrollAmount, maxScrollAmount);
    });

    function updateArrowVisibility(scrollAmount, maxScrollAmount) {
      if (scrollAmount === 0) {
        leftArrow.classList.add('Hide');
      } else {
        leftArrow.classList.remove('Hide');
      }

      if (scrollAmount === maxScrollAmount) {
        rightArrow.classList.add('Hide');
      } else {
        rightArrow.classList.remove('Hide');
      }
    }

window.onunload = function() {};
function sizecheck() {
  w = window.innerWidth ? window.innerWidth : $(window).width();
  h = window.innerHeight ? window.innerHeight : $(window).height();
}

sizecheck();
$(function () {
  if (w > 769) {
} else { 
  $(".drawer").click(function(){
  $('body').toggleClass('nav-open');
  $('.header-wrap__nav').fadeToggle(200);
    });
  $("header-wrap__nav__list__item a").click(function(){
  $('body').toggleClass('nav-open');
  $('.header-wrap__nav').fadeToggle(200);
    });
  }
}); 