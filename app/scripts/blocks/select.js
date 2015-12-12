import select2 from 'select2';
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
	$('select').select2({
		dropdownAutoWidth : true,
		minimumResultsForSearch: Infinity
	});

	if ($('.js-select-category').length) {
		var categorySelect = $('.js-select-category').select2({
		dropdownAutoWidth : 'true',
		width: "460px",
		minimumResultsForSearch: Infinity
				// containerCssClass : "category__select__dropdown"
			});

		categorySelect.data('select2').$results.addClass("select--big__dropdown")
	}
}));
