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
	})

}));
