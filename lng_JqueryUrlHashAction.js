/*
 * lng_JqueryUrlHashAction version 1.0
 * ce plugin vous permet d'attaché à un essemple élément des actions spécifiques à
 * chacun et une action commune.
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
			//création de la fonction
			var fn = window[$(this).attr("lng_action")];
			//appel à la function
			fn();
			//lancement de la function générique
			opts.callback();
		}
		

		// création d'une liste d'action
		$(this).each(createAction);
		// interface fluide
		return $(this);
	};
})(jQuery);
