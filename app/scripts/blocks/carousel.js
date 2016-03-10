// http://kenwheeler.github.io/slick/
import 'slick-carousel';
import $ from 'jquery';

(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define(['jquery'], factory);
	} else if (typeof module === 'object' && module.exports) {
		// Node/CommonJS
		module.exports = factory(require('jquery'));
	} else {
		// Browser globals
		factory(jQuery);
	}
}(function ($) {
	var carouselSettings = {
		prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><i class="icon-arrow-left-fff-13x24 slick-prev__icon"></i></button>',
		nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><i class="icon-arrow-right-fff-13x24 slick-next__icon"></i></button>',
		dots: true,
		responsive: [
		{
			breakpoint: 720,
			settings: {
				arrows: false
			}
		},{
			breakpoint: 480,
			settings: {
				arrows: true,
				dots: false
			}
		}]
	};
	$('.js-carousel').slick(carouselSettings);

	var liveCarouselSettings = {
		prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><i class="icon-arrow-left-fff-13x24 slick-prev__icon"></i></button>',
		nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><i class="icon-arrow-right-fff-13x24 slick-next__icon"></i></button>',
		dots: false,
		slidesToShow: 5,
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 990,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				arrows: false,
				dots: false
			}
		},{
			breakpoint: 720,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				arrows: false,
				dots: false
			}
		},{
			breakpoint: 480,
			settings: 'unslick'
		}]
	};
	$('.js-live-carousel').slick(liveCarouselSettings);

	var similarCarouselSettings = {
		prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><i class="icon-arrow-left-fff-13x24 slick-prev__icon"></i></button>',
		nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><i class="icon-arrow-right-fff-13x24 slick-next__icon"></i></button>',
		dots: false,
		slidesToShow: 5,
		slidesToScroll: 5,
		responsive: [
		{
			breakpoint: 990,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				arrows: false,
				dots: false
			}
		},{
			breakpoint: 720,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				arrows: false,
				dots: false
			}
		},{
			breakpoint: 480,
			settings: 'unslick'
		}]
	};
	$('.js-similar-carousel').slick(similarCarouselSettings);

	$('.js-set-items-row').slick({
		prevArrow: '<button type="button" data-role="none" class="slick-prev slick-prev-small" aria-label="Previous" tabindex="0" role="button"><i class="icon-arrow-left-fff-13x24 slick-prev__icon"></i></button>',
		nextArrow: '<button type="button" data-role="none" class="slick-next slick-next-small" aria-label="Next" tabindex="0" role="button"><i class="icon-arrow-right-fff-13x24 slick-next__icon"></i></button>',
		dots: false,
		slidesToShow: 4,
		slidesToScroll: 1
	});

	$('.js-set-categories-row').slick({
		prevArrow: '<button type="button" data-role="none" class="slick-prev slick-prev-small" aria-label="Previous" tabindex="0" role="button"><i class="icon-arrow-left-fff-13x24 slick-prev__icon"></i></button>',
		nextArrow: '<button type="button" data-role="none" class="slick-next slick-next-small" aria-label="Next" tabindex="0" role="button"><i class="icon-arrow-right-fff-13x24 slick-next__icon"></i></button>',
		dots: false,
		slidesToShow: 4,
		slidesToScroll: 1
	});

	$('.js-other-carousel').slick({
		prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><i class="icon-arrow-left-fff-13x24 slick-prev__icon"></i></button>',
		nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><i class="icon-arrow-right-fff-13x24 slick-next__icon"></i></button>',
		dots: false,
		slidesToShow: 5,
		slidesToScroll: 5,
		responsive: [
		{
			breakpoint: 990,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				arrows: false,
				dots: false
			}
		},{
			breakpoint: 720,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				arrows: false,
				dots: false
			}
		},{
			breakpoint: 480,
			settings: 'unslick'
		}]
	});

	var announceCarouselSettings = {
		mobileFirst: true,
		centerMode: true,
		centerPadding: '20px',
		arrows: false,
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [{
			breakpoint: 480,
			settings: 'unslick'
		}]
	};
	$('.js-announce-carousel').slick(announceCarouselSettings);

	var recentCarouselSettings = {
		prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><i class="icon-arrow-left-fff-13x24 slick-prev__icon"></i></button>',
		nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><i class="icon-arrow-right-fff-13x24 slick-next__icon"></i></button>',
		dots: false,
		slidesToShow: 5,
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 990,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				arrows: false,
				dots: false
			}
		},{
			breakpoint: 720,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				arrows: false,
				dots: false
			}
		},{
			breakpoint: 480,
			settings: 'unslick'
		}]
	};
	$('.js-recent-carousel').slick(recentCarouselSettings);

	var sidebarCarouselSettings = {
		prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><i class="icon-arrow-up-EB-24x12 slick-prev__icon"></i></button>',
		nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><i class="icon-arrow-down-EB-24x12 slick-next__icon"></i></button>',
		dots: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		vertical: true,
		verticalSwiping: true,
		infinite: false,
		asNavFor: '.js-gallery-product',
		centerMode: true,
  	focusOnSelect: true,
  	responsive: [{
			breakpoint: 990,
			settings: 'unslick'
		}]
	};
	$('.js-sidebar-product').slick(sidebarCarouselSettings);

	$(window).on('resize orientationChange', function(event) {
		if ($(window).width() <= 990) {
			if ($('.js-sidebar-product').hasClass('slick-initialized')) {
        $('.js-sidebar-product').slick('unslick');
      }
      return;
		}
		if (!$('.js-sidebar-product').hasClass('slick-initialized')) {
			$('.js-sidebar-product').slick(sidebarCarouselSettings);
			var currentSlide = $('.js-gallery-product').slick('slickCurrentSlide');
			return $('.js-sidebar-product').slick('slickGoTo',currentSlide);
    }

		if ($(window).width() <= 480) {
			if ($('.js-recent-carousel').hasClass('slick-initialized')) {
        $('.js-recent-carousel').slick('unslick');
      }
			if ($('.js-other-carousel').hasClass('slick-initialized')) {
        $('.js-other-carousel').slick('unslick');
      }
			if ($('.js-live-carousel').hasClass('slick-initialized')) {
        $('.js-live-carousel').slick('unslick');
      }
			if ($('.js-similar-carousel').hasClass('slick-initialized')) {
        $('.js-similar-carousel').slick('unslick');
      }
			if ($('.js-announce-carousel').hasClass('slick-initialized')) {
        $('.js-announce-carousel').slick('unslick');
      }
      return;
		}
		if (!$('.js-recent-carousel').hasClass('slick-initialized')) {
      return $('.js-recent-carousel').slick(recentCarouselSettings);
    }
		if (!$('.js-other-carousel').hasClass('slick-initialized')) {
      return $('.js-other-carousel').slick(otherCarouselSettings);
    }
		if (!$('.js-live-carousel').hasClass('slick-initialized')) {
      return $('.js-live-carousel').slick(liveCarouselSettings);
    }
		if (!$('.js-similar-carousel').hasClass('slick-initialized')) {
      return $('.js-similar-carousel').slick(similarCarouselSettings);
    }
		if (!$('.js-announce-carousel').hasClass('slick-initialized')) {
      return $('.js-announce-carousel').slick(announceCarouselSettings);
    }
	});

	$('.js-gallery-product').slick({
		arrows: false,
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: false,
  	fade: true,
		asNavFor: '.js-sidebar-product',
		responsive: [
		{
			breakpoint: 990,
			settings: {
				slidesToShow: 1,
				centerMode: true,
				centerPadding: '40px',
				fade: false
			}
		}]
	});
	$('.js-gallery-product').slick('slickFilter',':not(.product-gallery__main__item--is-hidden)');
}));
