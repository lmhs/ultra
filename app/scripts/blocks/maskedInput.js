import $ from 'jquery';
import '../third-party/jquery.maskedInput.js';

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
 	$(".js-phone").mask("+375 (99) 999-99-99");
}));
