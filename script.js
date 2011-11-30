$(function(){
	if($.browser.msie){
		$.fn.v = $.fn.val;
		$.fn.val = function(value){
			if ( !arguments.length ) {
				if( $(this).attr('placeholder') == $(this).v()){
					return "";
				}
				return $(this).v();
			}
			return $(this).v(value);
		};
		$('input[placeholder]').focus(function(){
			if($(this).v() == $(this).attr('placeholder')){
				$(this).v('');
			}
			$(this).removeClass('placeholder');
		}).blur(function(){
			if($.trim($(this).v()).length == 0){
				$(this).v($(this).attr('placeholder')).addClass('placeholder');
			}
		}).each(function(index, e){
			$(e).v($(e).attr('placeholder')).addClass('placeholder');
		});
	}
});