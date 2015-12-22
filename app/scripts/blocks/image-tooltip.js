(function($, window, document){
	var nodes = {},
		timers = {},
		methods = {
			generateWindow: function(){
				nodes.tooltip = $('<div class="tooltip_window"></div>');

				// Вешаем на клик stopPropagation(), чтобы при клике
				// на открытый tooltip не закрывать его
				nodes.tooltip.on({
					click: function(event){
						event.stopPropagation();
					}
				});

				nodes.body.append(nodes.tooltip);
			},
			getContent: function(obj){
				var content = [];

				if(obj['img']){
					content.push('<img src="' + obj['img'] + '" alt="' + decodeURI(obj['title']) + '"/>')
				}
				if(obj['title'] != ''){
					content.push('<h5>' + decodeURI(obj['title']) + '</h5>');
				}
				if(obj['text'] != ''){
					content.push('<p>' + decodeURI(obj['text']) + '</p>');
				}

				return content.length > 0 ? content.join('') : false;
			},
			setCoordinates: function(element){
				/*
				nodes.tooltip
					.empty()
					.html(content)
					.css(obj.params.coord)
					.append(obj.params.arrow)
					.addClass('tooltip_show');
				*/


				var offset = element.offset(),
					width = 350, // Ширина tooltip
					possible_height = nodes.tooltip.height() + (element.data('img') ? 200 : 0) + 30,
					position = {},
					arrow = {
						direct: '',
						node: $('<i></i>'),
						css: {}
					};

				if((offset.left + element.width() + width + 40) < nodes.window.width()){
					arrow.direct = 'left';
					arrow.node.addClass('tooltip_left');

					position.left = offset.left + element.width() + 20;
				}else if((offset.left + element.width() + width) > nodes.window.width() && offset.left < width){
					arrow.direct = 'top';
					arrow.node.addClass('tooltip_top');
				}else{
					arrow.direct = 'right';
					arrow.node.addClass('tooltip_right');

					position.left = offset.left - width - 25;
				}

				if(arrow.direct === 'top'){
					position.top = offset.top + 30;
					position.left = offset.left + (element.width() / 2) - (width / 2);
				}else{
					position.top = offset.top - 11;
					arrow.css.top = 28;
				}

				nodes.tooltip
					.css(position)
					.append(arrow.node.css(arrow.css))
					.addClass('tooltip_show');
			},
			handlers: {
				show: function(event){
					var target = $(event.target).closest('.tooltip_point');
					methods.show(target);
				},
				resize: function(){
					methods.hide();
				},
				keyup: function(event){
					if(event.keyCode == 27){
						methods.hide();
					}
				},
				hide: function(){
					methods.hide();
					methods.events.clear();
				},
				stay: function(){
					clearTimeout(timers.hide);
				}
			},
			events: {
				global: function(){
					$(document).on({
						'touchstart.tooltip': methods.handlers.show,
						'mouseover.tooltip': methods.handlers.show,
						'mouseout.tooltip': methods.handlers.hide
					}, '.tooltip_point');
					$(document).on({
						'mouseover.tooltip': methods.handlers.stay,
						'mouseout.tooltip': methods.handlers.hide
					}, '.tooltip_window');
				},
				set: function(){
					nodes.window.on({
						'resize.tooltip': methods.handlers.resize
					});
					nodes.body.on({
						'keyup.tooltip': methods.handlers.keyup,
						'touchstart.tooltip': methods.handlers.hide
					});
				},
				clear: function(){
					nodes.window.off({
						'resize.tooltip': methods.handlers.resize
					});
					nodes.body.off({
						'keyup.tooltip': methods.handlers.keyup,
						'touchstart.tooltip': methods.handlers.hide
					});
				}
			},
			show: function(target){
				var content = methods.getContent(target.data());

				clearTimeout(timers.hide);

				if(nodes.tooltip.length === 0){
					methods.generateWindow();
				}

				if(content){
					nodes.tooltip.css('display', 'block');
					setTimeout(function(){
						nodes.tooltip.empty().html(content);
						methods.setCoordinates(target);

						methods.events.set();
					}, 50);
				}
			},
			hide: function(){
				timers.hide = setTimeout((function(nodes){
					return function(){
						nodes.tooltip.removeClass('tooltip_show');

						setTimeout((function(tooltip){
							tooltip.css('display', 'none');
						})(nodes.tooltip), 50);
					}
				})(nodes), 200);
			},
			init: function(){
				nodes = {
					tooltip: [],
					window: $(window),
					body: $(document.body),
					content: $('#main')
				};

				methods.events.global();
			}
		};

		methods.init();
})(jQuery, window, window.document);
