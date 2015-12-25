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
	$('.js-reviews').on('click', '.js-follow-reviews-link', function(){
		if (!$('.js-follow-reviews').hasClass('is-opened')){
			$('.js-follow-reviews').addClass('is-opened');
		}
	});

}));
