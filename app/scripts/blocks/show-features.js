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
	let featuresBody = $('.js-features-body');
	let showFeaturesButton = $('.js-button-show-more-features');
	let showFeaturesWrap = $('.js-button-show-more-features-wrap');

	if (featuresBody.hasClass('product-page-lp-features__body--hidden')) {
		showFeaturesWrap.on('click', '.js-button-show-more-features', function () {
			featuresBody.removeClass('product-page-lp-features__body--hidden');
			showFeaturesWrap.hide();
		});
	}


}));
