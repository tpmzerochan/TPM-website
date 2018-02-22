// JQuery Document
$(function () {
	$(window).resize(function(){
		var current_width = $(window).width();
		if(current_width < 768){
		$("#compare_img").hide();
		$("#compare_img_mobile").show();
		}
		if(current_width > 768){
		$("#compare_img").show();
		$("#compare_img_mobile").hide();
		}
	});
	$(window).ready(function(){
		var current_width = $(window).width();
		if(current_width < 768){
		$("#compare_img").hide();
		$("#compare_img_mobile").show();
		}
		if(current_width > 768){
		$("#compare_img").show();
		$("#compare_img_mobile").hide();
		}
	});
});