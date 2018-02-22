// JQuery Document
$(function () {
	$(window).resize(function(){
		var current_width = $(window).width();
		if(current_width < 768){
		$("#aboutus-02").hide();
		$("#aboutus-02m").show();
		}
		if(current_width > 768){
		$("#aboutus-02").show();
		$("#aboutus-02m").hide();
		}
	});
	$(window).ready(function(){
		var current_width = $(window).width();
		if(current_width < 768){
		$("#aboutus-02").hide();
		$("#aboutus-02m").show();
		}
		if(current_width > 768){
		$("#aboutus-02").show();
		$("#aboutus-02m").hide();
		}
	});
});
