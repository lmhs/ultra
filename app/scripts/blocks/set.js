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
	$('.js-set-categories-row').on('click','.js-choose-category',function(){
		$('.js-set-category').removeClass('set-category--is-active');
		$(this).closest('.js-set-category').toggleClass('set-category--is-active');
	})
}));
