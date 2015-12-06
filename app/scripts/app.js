import $ from 'jquery';
import './third-party/bootstrap-modals.js';
import './blocks/slider.js';
import './blocks/details.js';
import './blocks/select.js';
import './blocks/tabs.js';
import './blocks/tooltip.js';
import './blocks/countdown.js';
import './blocks/spinner.js';

$(() => {
	$('.js-login-btn').on('click',() => {
		$('#loginPopup').modal('hide');
	})
	$('.js-register-btn').on('click',() => {
		$('#loginPopup').modal('hide');
	})
})
