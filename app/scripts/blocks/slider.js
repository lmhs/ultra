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
	let slider = document.getElementById('slider');

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
		let inputNumberTo = document.getElementById('js-slider-to');
		let inputNumberFrom = document.getElementById('js-slider-from');

		slider.noUiSlider.on('update', ( values, handle ) => {

			let value = values[handle];

			if ( handle ) {
				inputNumberTo.value = value;
			} else {
				inputNumberFrom.value = value;
			}
		});

		inputNumberTo.addEventListener('change', () => {
			slider.noUiSlider.set([null, this.value]);
		});
		inputNumberFrom.addEventListener('change', () => {
			slider.noUiSlider.set([this.value, null]);
		});
	}

}));
