import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import select2 from 'select2';
import './bootstrap-modals.js';
import './bootstrap-tooltip.js';
// import './bootstrap-select.js';
import './bootstrap-tab.js';
import './jquery.details.min.js';
import './jquery.countdown.js';
import './jquery.inputnumber.js';

$(() => {
	svg4everybody();


	if (!Modernizr.details) {
		$('details').details();
	}

	$('[data-toggle="tooltip"]').tooltip();

	$('.js-product-nav').on('click','.js-product-nav-tab', function (e) {
		e.preventDefault();
		$(this).tab('show')
	});

	// $('#phone1').countDown({
	// 	targetOffset: {
	// 		'day': 		18,
	// 		'month': 	0,
	// 		'year': 	0,
	// 		'hour': 	6,
	// 		'min': 		23,
	// 		'sec': 		54
	// 	},
	//    omitWeeks: true
	// });

	$('select').select2({
		minimumResultsForSearch: Infinity
	});

	$("input[type=number],input[data-type=number],#spinner").spinner();

})

// ()();
