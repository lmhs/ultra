import '../third-party/jquery.spinner.js';
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
	// http://indigojs.github.io/bootstrap-spinner/
	$("input[type=number],input[data-type=number],#spinner").spinner();
}));
