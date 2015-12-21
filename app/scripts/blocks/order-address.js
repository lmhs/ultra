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
	$('.js-order-form').on('change','.js-radio-address input[name="addressRadios"]', function(){
		var self = $(this);
		var addressBlock = self.closest('.js-radio-address-block').find('.js-address');
		if (self.is(':checked')) {
			$('.js-radio-address-block').find('.js-address').addClass('address--is-hidden');
			addressBlock.removeClass('address--is-hidden');
		}

	})
}));
