import '../third-party/bootstrap-button.js';
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
	$('.js-more-btn').on('click', function () {
    var $btn = $(this).button('loading')
    // business logic...
    setTimeout(() => {
    	alert("Загружено!");
    	$btn.button('reset')
    }, 4000)
  })
}));
