/*
 * 
 */
(function($) {
	var lng_UrlHashAction_title = document.title;
	if(location.hash !== "")
	document.title = lng_UrlHashAction_title + ' | ' + ( location.hash.replace( /^#/, '' ) || 'blank' );
	$.fn.lng_UrlHashAction = function(options) {
		var defaults = {
			callback : null
		};
		var opts = $.extend(defaults, options);

		function createAction() {
			$(this).find("li > a").each(function(){
				if($(this).attr("lng_action") !== ""){
					$(this).click(onClick);
				}
			});
		}

		function setTitle() {
			
		}
		
		function onClick(){
			document.title = lng_UrlHashAction_title + ' | ' + $(this).attr("lng_title");
			opts.callback();
		}
		

		// création d'une liste d'action
		$(this).each(createAction);
		// interface fluide
		return $(this);
	};
})(jQuery);
