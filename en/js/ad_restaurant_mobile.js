// JQuery Document
$(function () {
	$(window).resize(function(){
		var current_width = $(window).width();
		if(current_width < 768){
		$("#ad_restaurant1").hide();
		$("#ad_restaurant1m").show();
		}
		if(current_width > 768){
		$("#ad_restaurant1").show();
		$("#ad_restaurant1m").hide();
		}
	});
	$(window).ready(function(){
		var current_width = $(window).width();
		if(current_width < 768){
		$("#ad_restaurant1").hide();
		$("#ad_restaurant1m").show();
		}
		if(current_width > 768){
		$("#ad_restaurant1").show();
		$("#ad_restaurant1m").hide();
		}
	});
});
