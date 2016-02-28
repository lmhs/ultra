import noUiSlider from 'nouislider';
import 'wnumb';

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
  'use strict';
	// https://github.com/leongersen/noUiSlider
	var slider = document.getElementById('slider');
	var experienceSlider = document.getElementById('js-experience-slider');

	if (slider !== null) {
		noUiSlider.create(slider, {
			start: [ 4000, 1000000 ],
			connect: true,
			behaviour: 'drag-tap',
			// http://refreshless.com/nouislider/slider-values/#section-non-linear
			// http://refreshless.com/nouislider/slider-values/#section-non-linear-step
			range: {
				'min': [ 0, 100 ],
				'30%': [ 200000, 10000 ],
				'70%': [ 10000000, 100000 ],
				'max': [ 26000000, 400000 ]
			},
			// http://refreshless.com/nouislider/slider-read-write/#section-formatting
			// http://refreshless.com/wnumb/
			format: wNumb({
				decimals: 0,
				thousand: ' '
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

		inputNumberTo.addEventListener('change', function () {
			slider.noUiSlider.set([null, this.value]);
		});
		inputNumberFrom.addEventListener('change', function () {
			slider.noUiSlider.set([this.value, null]);
		});
	}

	if (experienceSlider !== null) {
		noUiSlider.create(experienceSlider, {
			start: [ 2 ],
			connect: 'lower',
			step: 1,
			range: {
				'min': [  1 ],
				'max': [ 12 ]
			},
			// http://refreshless.com/nouislider/slider-read-write/#section-formatting
			// http://refreshless.com/wnumb/
			format: wNumb({
				decimals: 0
			})
		});

		var inputNumberExperience = document.getElementById('js-experience-slider-months');

		experienceSlider.noUiSlider.on('update', function ( value ) {

			inputNumberExperience.innerHTML  = value;

		});
	}

}));
