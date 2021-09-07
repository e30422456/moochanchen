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
const scroller = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
  direction:'horizontal',
    tablet: {
      smooth: true,
      direction: 'vertical',
    },
    smartphone: {
      smooth: false,
      direction: 'vertical',
    }
});

 scroller.destroy();
 scroller.init();
