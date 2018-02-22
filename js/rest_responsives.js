// JQuery Document
$(function () {
	$(window).resize(function(){
		var current_width = $(window).width();
		if(current_width < 900){
		$('#fullpage').load('../restaurant-mobile.php');
		}
		if(current_width > 900){
		$('#fullpage').load('../restaurant-desktop.php');
		}
	});
	$(window).ready(function(){
		var current_width = $(window).width();
		if(current_width < 900){
		$('#fullpage').load('../restaurant-mobile.php');
		}
		if(current_width > 900){
		$('#fullpage').load('/restaurant-desktop.php');
		}
	});
});