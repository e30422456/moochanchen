$(window).load(function(){
        $('#loading').delay(500).fadeOut(3000);
        });

//scroll left and top
$(function() {
 $("body").mousewheel(function(event, delta) {
  if($("body").width() <= 768){
      this.scrollTop -= (delta);
  }else if($("body").width() > 768){
      this.scrollLeft -= (delta * 40);
  }
  event.preventDefault();
 });
});

//overlay
$('.toggle').click(function() {
	$(this).toggleClass('active');
	$('#overlay').toggleClass('open');
	$('#header_left').toggleClass('change');
});

//Smooth scroll
/*$('#overlay a, #header_left a,#top a').on('click', function() {
	if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
		var hash  = $(this.hash);
	if (hash.length) {
		var top_space = 0;
	if ($('#button_container').length) {
		top_space = $('#button_container').outerHeight();

	if (! $('#button_container').hasClass('header-scrolled')) {
		top_space = top_space ;
		}
	}
	
	if($("body").width() <= 768){
      	$('html, body').animate({
		scrollTop: hash.offset().top - top_space}, 1500, 'easeInOutExpo');
	}else if($("body").width() > 768){
		$('html, body').animate({
		scrollLeft: hash.offset().left - top_space}, 2000, 'easeInOutExpo');
	}
	
	if ($(this).parents('#button_container').length) {
		$('#overlay').removeClass('menu-active');
		$(this).closest('li').addClass('menu-active');
		$('#header_left').removeClass('change');
		}	
return false;
  }
}
});*/

//WOW

wow.init();
