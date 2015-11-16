import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import './bootstrap-modals.js';
import './bootstrap-tooltip.js';
import './bootstrap-dropdown.js';
import './jquery.details.min.js';

$(() => {
	svg4everybody();


	if (!Modernizr.details) {
    $('details').details();
  }
  $('[data-toggle="tooltip"]').tooltip()
});

// ($('.js-login').on('click',function (){

// }))();
