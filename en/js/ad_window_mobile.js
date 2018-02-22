// JQuery Document
$(function () {
	$(window).resize(function(){
		var current_width = $(window).width();
		if(current_width < 768){
		$("#ad_window1").hide();
		$("#ad_window1m").show();
		}
		if(current_width > 768){
		$("#ad_window1").show();
		$("#ad_window1m").hide();
		}
	});
	$(window).ready(function(){
		var current_width = $(window).width();
		if(current_width < 768){
		$("#ad_window1").hide();
		$("#ad_window1m").show();
		}
		if(current_width > 768){
		$("#ad_window1").show();
		$("#ad_window1m").hide();
		}
	});
});
