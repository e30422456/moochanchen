//loading
$(window).load(function(){
        $('#loading').delay(500).fadeOut(3000);
        });

//scroll left and top
/*$(function() {
 $("body").mousewheel(function(event, delta) {
  if($("body").width() <= 768){
      this.scrollTop -= (delta * 100); 
  }else if($("body").width() > 768){
      this.scrollLeft -= (delta * 40);
  }
//  e.preventDefault();
 });
})*/

//overlay
$('.toggle').click(function() {
	$(this).toggleClass('active');
	$('#overlay').toggleClass('open');
	$('#header_left').toggleClass('change');
});

//LocomotiveScroll
let ldirection = 'horizontal';
const scroller = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
  direction:ldirection,
    tablet: {
      smooth: true,
      direction: 'vertical',
    },
    smartphone: {
      smooth: true,
      direction: 'vertical',
    }
});

window.addEventListener('resize', () => {

	let breakpoint = 1024;
	let currentWidth = window.innerWidth;

	if (currentWidth > breakpoint) {
		let ldirection = 'horizontal';
		scroller.destroy();
		scroller.init();
	}

	else {
		let ldirection = 'vertical';
		scroller.destroy();
		scroller.init();
	}

	scroller.update();
});
