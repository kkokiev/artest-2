$(window).load(function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	};
	$('body').removeClass('loaded'); 
});
/* viewport width */
function viewport(){
	var e = window,
		a = 'inner';
	if ( !( 'innerWidth' in window ) )
	{
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
};
/* viewport width */
$(function(){
	/* placeholder*/
	$('input, textarea').each(function(){
		var placeholder = $(this).attr('placeholder');
		$(this).focus(function(){ $(this).attr('placeholder', '');});
		$(this).focusout(function(){
			$(this).attr('placeholder', placeholder);
		});
	});
	/* placeholder*/

	$('.button-nav').click(function(){
		$(this).toggleClass('active'), 
		$('.main-nav-list').slideToggle(); 
		return false;
	});
	

});

var handler = function(){
	
	var height_footer = $('footer').height();
	var height_header = $('header').height();
	$('.content').css({'padding-bottom':height_footer+40, 'padding-top':height_header+40});
	
	
	var viewport_wid = viewport().width;
	
	if (viewport_wid <= 991) {
		
	}
	
}
$(window).bind('load', handler);
$(window).bind('resize', handler);



$(function(){

	/* launch bg slider */
	var bgSlider = (function() {

		var $el = $('.js-bg-slider');

		if($el.length){
		
			$el.slick({
				autoplay: true,
				autoplaySpeed: 3000,
				dots: false,
				arrows: false,
				fade: true
			});
		};

	})();


	/*setup gallery*/
	var gallery = (function() {

		var $el = $('.js-gallery-item-img');

		if($el.length){
			$el.fancybox({
				closeBtn: true,
				padding: 0
			});
		};

	})();


	/*setup styler*/
	var styledForms = (function() {

		var $el = $('.styled');

		if($el.length){
			$el.styler();
		};


	})();


	/*setup jq-ui datepicker*/
	var orderDatePicker = (function() {

		var $el = $('.js-input-grp__date');

		if($el.length){
			$el.datepicker({
				dateFormat: 'dd-mm-yy'
			});
		};

	})();


});

