import '../third-party/bootstrap-affix.js';
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
	$('.js-sidebar-product').affix({
		offset: {
			top: $('.product-page__info').offset().top,
			bottom: function () {
				return (this.bottom = $( document ).height() - $('.product__expert').offset().top)
			}
		}
	})
}));
