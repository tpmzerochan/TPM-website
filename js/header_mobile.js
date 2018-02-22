// JQuery Document
$(function () {
	$(window).resize(function(){
		var current_width = $(window).width();
		if(current_width < 767){
		$('.mobile-tel-number').show();
		$('.btn-number').hide();
		}
		if(current_width > 767){
		$('.btn-number').show();
		$('.mobile-tel-number').hide();
		}
	});
	$(window).ready(function(){
		var current_width = $(window).width();
		if(current_width < 767){
		$('.mobile-tel-number').show();
		$('.btn-number').hide();
		}
		if(current_width > 767){
		$('.btn-number').show();
		$('.mobile-tel-number').hide();
		}
	});
});