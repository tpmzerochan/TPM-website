// JQuery Document
$(function () {
	$(window).resize(function(){
		var current_width = $(window).width();
		if(current_width < 768){
		$("#blogger1").hide();
		$("#blogger1m").show();
		}
		if(current_width > 768){
		$("#blogger1").show();
		$("#blogger1m").hide();
		}
	});
	$(window).ready(function(){
		var current_width = $(window).width();
		if(current_width < 768){
		$("#blogger1").hide();
		$("#blogger1m").show();
		}
		if(current_width > 768){
		$("#blogger1").show();
		$("#blogger1m").hide();
		}
	});
});
