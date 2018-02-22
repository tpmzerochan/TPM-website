// JQuery Document
$(function () {
	$(window).resize(function(){
		var current_width = $(window).width();
		if(current_width < 767){
		$('.mobile').show();
		}
		if(current_width > 767){
		$('.desktop').show();
		}
	});
	$(window).ready(function(){
		var current_width = $(window).width();
		if(current_width < 767){
		$('.mobile').show();
		}
		if(current_width > 767){
		$('.desktop').show();
		}
	});
});