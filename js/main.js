'use strict';

(function ($) {
	$(document).ready(function () {
		// Code
		//slick slider
		$('.slider__list').slick({
			dots: false, // включение точек
			arrows: true, // включение стрелок
			prevArrow: '<div class="slider-prev"><i class="icon-arrow"></i></div>', //custom arrow
			nextArrow: '<div class="slider-next"><i class="icon-arrow"></i></div>', // custom arrow
			// appendArrows: $('.slider__arrows'), //стрелки в другом месте разместить
			slidesToShow: 3, //сколько показывать слайдов
			slidesToScroll: 1, // по сколько елементов скролить
			autoplay: false, //auto play on
			autoplaySpeed: 4000, // скорость прокрутки в автоплей
			swipe: true, // отключает включает свап
			//centerMode: true,
			focusOnSelect: true,
			infinite: true,
			initialSlide: 0,
			centerPadding: '0px',
			variableWidth: true,
		});
	});
})(jQuery);
