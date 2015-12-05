import '../third-party/jquery.countdown.js';
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
	if ($('#phone1').length) {
		$('#phone1').countDown({
			targetOffset: {
				'day': 		18,
				'month': 	0,
				'year': 	0,
				'hour': 	6,
				'min': 		23,
				'sec': 		54
			},
		   omitWeeks: true
		})
	}
}));
