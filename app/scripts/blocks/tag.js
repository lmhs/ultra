import $ from 'jquery';
'use strict';

(function (factory) {
	if (typeof exports === 'object') {
		// CommonJS (Node)
		var jQuery = require('jquery');
		module.exports = factory(jQuery || $);
	} else if (typeof define === 'function' && define.amd) {
		// AMD (RequireJS)
		define(['jquery'], factory);
	} else {
		// globals
		factory(jQuery || $);
	}
}(function($) {
	$('.js-tag').on('click','.js-remove-tag', function(){
		$(this).closest('.js-tag').remove();
	})
	$('.js-tag').on('click',function(){
		var tag = $(this);
		tag.addClass('is-opened');
		tag.find('select').select2('open');
	})

}));
