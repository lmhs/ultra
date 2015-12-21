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
	// let menuIsOpen = false;
	$(document).click(function(e) {
		if ( $(e.target).closest('.js-main-menu-item').length === 0 ) {
			$('#js-top-menu').find('.js-main-menu-item.is-selected').removeClass('is-selected');
		}
		if ( $(e.target).closest('.js-user-menu-wrap').length === 0 ) {
			$('.js-user-menu-wrap.is-opened').removeClass('is-opened');
		}
	});
	$('#js-top-menu').on('click','.js-main-menu-link', function () {
		$('.js-main-menu-item').removeClass('is-selected');
		$(this).closest('.js-main-menu-item').addClass('is-selected');
	})
	$('.js-user-menu-wrap').on('click','.js-user-menu', function () {
		$(this).closest('.js-user-menu-wrap').toggleClass('is-opened');
	})
}));
