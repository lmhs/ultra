import $ from 'jquery';
import './third-party/bootstrap-modals.js';
import './third-party/bootstrap-button.js';
import './blocks/slider.js';
import './blocks/details.js';
import './blocks/select.js';
import './blocks/tabs.js';
import './blocks/tooltip.js';
import './blocks/countdown.js';
import './blocks/spinner.js';
import './blocks/carousel.js';

$(() => {
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

	$('.js-more-btn').on('click', function () {
    var $btn = $(this).button('loading')
    // business logic...
    setTimeout(() => {
    	alert("Загружено!");
    	$btn.button('reset')
    }, 4000)


  })
})
