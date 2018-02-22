$(function () {

$('.page-s1').click(function(){$('.collapse').removeClass('in');});
$('.page-s4').click(function(){$('.collapse').removeClass('in');});
$('.page-s5').click(function(){$('.collapse').removeClass('in');});
$('.page-s6').click(function(){$('.collapse').removeClass('in');});
$('.page-s7').click(function(){$('.collapse').removeClass('in');});
$('.page-s8').click(function(){$('.collapse').removeClass('in');});
$('.page-s9').click(function(){$('.collapse').removeClass('in');});


$('.item-shop').mouseover(function(){
$(this).find('.black-hover').show();
$(this).find('.shop-info').show();  });

$('.item-shop').mouseout(function(){
$(this).find('.black-hover').hide();
$(this).find('.shop-info').hide();  });


$(window).scroll(function() {
var hT = $('#section2').offset().top, hH = $('#section2').outerHeight(), wH = $(window).height(),
wS = $(this).scrollTop();

if (wS > (hT+hH-wH)){
var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',');
$('.number-1').animateNumber({ number: 500 , numberStep: comma_separator_number_step });
$('.number-2').animateNumber({number: 5000000 , numberStep: comma_separator_number_step }); }
});


$('.btn-send').click(function(){
var name = $('.input-name').val();
var tel = $('.input-tel').val();
var message = $('.input-content').val();

if(name && tel && message){
$('.msg-success').removeClass('hidden'); $('.msg-error').addClass('hidden');
$('.input-name').val(''); $('.input-tel').val(''); $('.input-content').val('');
var param = {
	sendTo: 'cs@tablepm.com',
	name: name,
	tel: tel,
	message: message 
}; 
$.ajax({url: "./api/sendMail.php", type: 'POST', data: param });
}else{$('.msg-success').addClass('hidden'); $('.msg-error').removeClass('hidden');}
});


});