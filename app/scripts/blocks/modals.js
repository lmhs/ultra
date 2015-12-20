import '../third-party/bootstrap-modals.js';
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
	$('.js-login-btn').on('click',() => {
		$('#loginPopup').modal('hide');
	});
	$('.js-register-btn').on('click',() => {
		$('#loginPopup').modal('hide');
	});
	$('.js-forgot-btn').on('click',() => {
		$('#loginPopup').modal('hide');
	});
	$('.js-forgot-return').on('click',() => {
		$('#forgotPopup').modal('hide');
		$('#loginPopup').modal('show');
	});
	if ($('.js-open-subscribe-modal').length) {
		let subscribeSection = $('.js-open-subscribe-modal');
		if (subscribeSection.is(':visible')) {
			let modalOffset = Math.floor(subscribeSection.offset().top);
			let subscribeSectionHeight = subscribeSection.outerHeight();
			let shown = false;

			$(window).on('scroll resize', function() {
				if (!shown) {
					let pageOffset = window.pageYOffset;
					let windowHeight = $(window).height();

					if (pageOffset >= ( modalOffset - windowHeight ) ) {
						$('#subscribePopup').modal('show');
						shown = true;
					}
				}
			});
		}
	}

}));
