// http://kenwheeler.github.io/slick/
import './polyfills/jquery.sticky.min.js';
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
	if (!Modernizr.csspositionsticky) {
		$('.sticky').Stickyfill();
	}
}));
