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
import noUiSlider from 'nouislider';
import 'wnumb';

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

	$('.js-tablet-social-nav').on('click','.js-tablet-social-nav-tab', function (e) {
		e.preventDefault();
		$(this).tab('show')
	});
	$('.js-subheader-nav-tab').on('click','.js-category-nav-tab', function (e) {
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
	dropdownAutoWidth : true,
	minimumResultsForSearch: Infinity
});

var categorySelect = $('.category__select').select2({
	dropdownAutoWidth : 'true',
	width: "460px",
	minimumResultsForSearch: Infinity
			// containerCssClass : "category__select__dropdown"
		});

categorySelect.data('select2').$results.addClass("category__select__dropdown")


	// http://indigojs.github.io/bootstrap-spinner/
	$("input[type=number],input[data-type=number],#spinner").spinner();

	// https://github.com/leongersen/noUiSlider
	var slider = document.getElementById('slider');

	noUiSlider.create(slider, {
		start: [ 4000, 1000000 ],
		connect: true,
		step: 100,
		// http://refreshless.com/nouislider/slider-values/#section-non-linear
		range: {
			'min': [ 0 ],
			'30%': [ 200000 ],
			'70%': [ 10000000 ],
			'max': [ 26000000 ]
		},
		// http://refreshless.com/nouislider/slider-read-write/#section-formatting
		// http://refreshless.com/wnumb/
		format: wNumb({
			decimals: 0,
			thousand: ' ',
			postfix: ' BYR',
		})
	});
	// duplicate values to input fields
	var inputNumberTo = document.getElementById('js-slider-to');
	var inputNumberFrom = document.getElementById('js-slider-from');

	slider.noUiSlider.on('update', function( values, handle ) {

		var value = values[handle];

		if ( handle ) {
			inputNumberTo.value = value;
		} else {
			inputNumberFrom.value = value;
		}
	});

	inputNumberTo.addEventListener('change', function(){
		slider.noUiSlider.set([null, this.value]);
	});
	inputNumberFrom.addEventListener('change', function(){
		slider.noUiSlider.set([this.value, null]);
	});


})

// ()();
