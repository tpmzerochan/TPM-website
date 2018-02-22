<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>全方位餐廳發展指南 | Table Plus Media 卓加傳媒 (TPM)</title>
	<meta name="description" content="卓加傳媒(TPM)全方位餐廳發展指南有唔同方案，就睇您識唔識把握！無論您係想賺錢、慳錢，定係純粹想推廣宣傳您嘅餐廳， 我哋都有solution!">
	<meta name="keywords"  content="卓加傳媒,TPM,賺錢,慳錢,宣傳,全方位發展,餐廳" />
	<meta name="Resource-type" content="Document" />
	<link rel="stylesheet" type="text/css" href="../css/bootstrap.css" />
	<link rel="stylesheet" type="text/css" href="../css/header.css" />
	<link rel="stylesheet" type="text/css" href="../css/javascript.fullPage.css" />
	<link rel="stylesheet" type="text/css" href="../css/side-restaurant.css" />
	<link class="rest_mobile" rel="stylesheet" type="text/css" href="../css/side-restaurant-mobile.css" />
	<script src="../js/jquery-3.3.1.min.js"></script>
	<script src="../js/jquery.animateNumber.js"></script>
	<script src="../js/header_mobile.js"></script>
	<script src="../js/content_mobile.js"></script>
</head>
<body>

<?php include 'nav.php'; ?>
	<div id="fullpage">
	<script type="text/javascript">
		$(function () {
			$(window).resize(function(){
				var current_width = $(window).width();
				if(current_width < 900){
				$('#fullpage').load('/restaurant-mobile.php');
				}
				if(current_width > 900){
				$('#fullpage').load('/restaurant-desktop.php');
				}
			});
			$(window).ready(function(){
				var current_width = $(window).width();
				if(current_width < 900){
				$('#fullpage').load('/restaurant-mobile.php');
				}
				if(current_width > 900){
				$('#fullpage').load('/restaurant-desktop.php');
				}
			});
		});
	</script>
	</div>
<?php include 'footer.php'; ?>


<script src="../js/validator.js"></script>
<script src="../js/contact.js"></script> 
<script src="../js/bootstrap.js"></script>

<script type="text/javascript" src="js/javascript.fullPage.js"></script>
<script type="text/javascript">
	fullpage.initialize('#fullpage', {
		anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', '5thpage', '6thpage', 'firstPage', 'secondPage', '3rdPage', '4thpage', '5thpage', '6thpage',],
		menu: '#menu',
		css3:true,
		slidesNavigation: true,
	});
</script>
</body>
</html>
