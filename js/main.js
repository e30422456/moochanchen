// Intro carousel

(function ($) {
	var introCarousel = $(".carousel");
	var introCarouselIndicators = $(".carousel-indicators");
	introCarousel.find(".carousel-inner").children(".carousel-item").each(function(index) {
	(index === 0) ?
	introCarouselIndicators.append("<li data-target='#introCarousel' data-slide-to='" + index + "' class='active'></li>") :
	introCarouselIndicators.append("<li data-target='#introCarousel' data-slide-to='" + index + "'></li>");
	interval:2500,

	$(this).css("background-image", "url('" + $(this).children('.carousel-background').children('img').attr('src') +"')");
	$(this).children('.carousel-background').remove();
	});
})(jQuery);

//overlay

$('#toggle').click(function() {
	$(this).toggleClass('active');
	$('#overlay').toggleClass('open');
});

//Smooth scroll
$('#overlay a, #header_right a, #go-top').on('click', function() {
	if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
		var target = $(this.hash);
	if (target.length) {
		var top_space = 0;
	if ($('.button_container').length) {
		top_space = $('.button_container').outerHeight();

	if (! $('.button_container').hasClass('header-scrolled')) {
		top_space = top_space - 40;
		}
	}
	$('html, body').animate({
		scrollTop: target.offset().top - top_space}, 1500, 'easeInOutExpo');

	if ($(this).parents('.button_container').length) {
		$('#overlay').removeClass('menu-active');
		$(this).closest('li').addClass('menu-active');
		}	
return false;
}
}
});

//WOW
new WOW().init();

$(window).load(function() {
  $('#djs-carousel').flexslider({
    animation: "slide",
    controlNav: true,
    animationLoop: true,
    slideshow: false,
    itemWidth: 210,
    itemMargin: 5,
    asNavFor: '#djs-slider'
  });
 
  $('#djs-slider').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    sync: "#djs-carousel"
  });
});

$(window).load(function() {
 $('#fa-slides').flexslider({
 animation: "slide"
 });
});

$(window).load(function() {
 $('#fa-slides2').flexslider({
 animation: "fade",
 slideshowSpeed: 8000
 });
});

$(window).load(function() {
 $('#fa-slides').flexslider({
 animation: "slide"
 });
});

$(window).load(function() {
  $('#mi-carousel').flexslider({
    animation: "slide",
    controlNav: true,
    animationLoop: true,
    slideshow: false,
    itemWidth: 210,
    itemMargin: 5,
    asNavFor: '#mi-slider'
  });
 
  $('#mi-slider').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    sync: "#mi-carousel"
  });
});