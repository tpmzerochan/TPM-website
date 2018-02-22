// JQuery Document
$(function () {
	$(window).resize(function(){
		var current_width = $(window).width();
		if(current_width < 767){
		$('.rest_desktop').detach();
		}
		if(current_width > 767){
		$('.rest_mobile').detach();
		}
	});
	$(window).ready(function(){
		var current_width = $(window).width();
		if(current_width < 767){
		$('.rest_desktop').detach();
		}
		if(current_width > 767){
		$('.rest_mobile').detach();
		}
	});
});