import $ from 'jquery';

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
	var reasonArticle = $('.js-reasons-article');
	var showArticleLink = $('.js-show-reasons-article');
	var showArticleLinkWrap = $('.js-showmore-wrap');

	if (reasonArticle.hasClass('reasons-article--is-hidden')) {
		showArticleLinkWrap.on('click', '.js-show-reasons-article', function () {
			reasonArticle.removeClass('reasons-article--is-hidden');
			showArticleLinkWrap.hide();
		});
	}


}));
