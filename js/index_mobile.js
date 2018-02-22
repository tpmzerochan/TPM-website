// JQuery Document
$(function () {
	$(window).resize(function(){
		var current_width = $(window).width();
		if(current_width < 768){
		$("#section1").hide();
		$("#section3").hide();
		$("#section4").hide();
		$("#section5").hide();
		$("#section6").hide();
		$("#section7").hide();
		$("#section10").hide();

		$("#section1m").show();
		$("#section3m").show();
		$("#section4m").show();
		$("#section5m").show();
		$("#section6m").show();
		$("#section7m").show();
		$("#section10m").show();

		$('.page-s1').attr("href", "index.php#section1m");
		$('.page-s4').attr("href", "index.php#section4m");
		$('.page-s5').attr("href", "index.php#section5m");
		$('.page-s6').attr("href", "index.php#section6m");
		$('.page-s7').attr("href", "index.php#section7m");

		$('.mobile-tel-number').show();

		}
		if(current_width > 768){
		$("#section1").show();
		$("#section3").show();
		$("#section4").show();
		$("#section5").show();
		$("#section6").show();
		$("#section7").show();
		$("#section10").show();

		$("#section1m").hide();
		$("#section3m").hide();
		$("#section4m").hide();
		$("#section5m").hide();
		$("#section6m").hide();
		$("#section7m").hide();
		$("#section10m").hide();

		$('.page-s1').attr("href", "index.php#section1");
		$('.page-s4').attr("href", "index.php#section4");
		$('.page-s5').attr("href", "index.php#section5");
		$('.page-s6').attr("href", "index.php#section6");
		$('.page-s7').attr("href", "index.php#section7");

		$('.mobile-tel-number').hide();


		}
	});


	$(window).ready(function(){
		var current_width = $(window).width();
		if(current_width < 768){
		$("#section1").hide();
		$("#section3").hide();
		$("#section4").hide();
		$("#section5").hide();
		$("#section6").hide();
		$("#section7").hide();
		$("#section10").hide();

		$("#section1m").show();
		$("#section3m").show();
		$("#section4m").show();
		$("#section5m").show();
		$("#section6m").show();
		$("#section7m").show();
		$("#section10m").show();

		$('.page-s1').attr("href", "index.php#section1m");
		$('.page-s4').attr("href", "index.php#section4m");
		$('.page-s5').attr("href", "index.php#section5m");
		$('.page-s6').attr("href", "index.php#section6m");
		$('.page-s7').attr("href", "index.php#section7m");

		$('.mobile-tel-number').show();

		}
		if(current_width > 768){
		$("#section1").show();
		$("#section3").show();
		$("#section4").show();
		$("#section5").show();
		$("#section6").show();
		$("#section7").show();
		$("#section10").show();

		$("#section1m").hide();
		$("#section3m").hide();
		$("#section4m").hide();
		$("#section5m").hide();
		$("#section6m").hide();
		$("#section7m").hide();
		$("#section10m").hide();

		$('.mobile-tel-number').hide();


		}
	});
});