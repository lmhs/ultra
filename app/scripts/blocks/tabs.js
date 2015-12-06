import '../third-party/bootstrap-tab.js';
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
	$('.js-product-nav').on('click','.js-product-nav-tab', function (e) {
		e.preventDefault();
		$(this).tab('show')
	});

	$('.js-tablet-social-nav').on('click','.js-tablet-social-nav-tab', function (e) {
		e.preventDefault();
		$(this).tab('show')
	});

	$('.js-subheader-nav-tab').on('click','.js-category-nav-tab', function (e) {
		e.preventDefault();
		$(this).tab('show')
	});

	$('.js-menu-popup-nav').on('click','.js-menu-popup-nav-tab', function (e) {
		e.preventDefault();
		$(this).tab('show')
	});
}));
