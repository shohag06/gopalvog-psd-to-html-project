(function ($) {
	"use strict";




	jQuery(window).load(function () {

		/* Sticky Header */
		$(window).on('scroll', function () {
			if ($(this).scrollTop() > 1) {
				$('.header-full').addClass("sticky");
			} else {
				$('.header-full').removeClass("sticky");
			}
		});
		
		/* Preloader */
		$(".preloader").fadeOut()
	});
	
}(jQuery));