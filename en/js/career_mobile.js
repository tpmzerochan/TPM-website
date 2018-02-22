// JQuery Document
$(function () {
	$(window).resize(function(){
		var current_width = $(window).width();
		if(current_width < 768){
		$("#career1").hide();
		$("#career1m").show();
		}
		if(current_width > 768){
		$("#career1").show();
		$("#career1m").hide();
		}
	});
	$(window).ready(function(){
		var current_width = $(window).width();
		if(current_width < 768){
		$("#career1").hide();
		$("#career1m").show();
		}
		if(current_width > 768){
		$("#career1").show();
		$("#career1m").hide();
		}
	});
});
