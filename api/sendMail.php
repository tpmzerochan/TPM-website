<?php
		
	require '../vendor/autoload.php';

	$sendTo = $_POST['sendTo'];
	$name = $_POST['name'];
	$tel = $_POST['tel'];
	$message = $_POST['message'];
	$content = " \r\n 姓名：".$name." \r\n 電話:".$tel." \r\n 訊息:".$message ; 

	$from = new SendGrid\Email("TPM Website", "cs@tablepm.com");
	$subject = "Request from TPM Website ".date('Y-m-d H:i:s')." ";
	$to = new SendGrid\Email('Request from TPM Website', $sendTo);
	$content = new SendGrid\Content("text/plain", $content);
 
	// $from = new SendGrid\Email("jetsoeye edm", "no-reply@tablepm.com");
	// $subject = "jetsoeye edm ";
	// $to = new SendGrid\Email('To whom it may concern', $sendTo);
	// $html = file_get_contents('http://test.waveahead.com/edm/170906_jetsoeye_edm.html');
	// $content = new SendGrid\Content("text/html", $html);


	$mail = new SendGrid\Mail($from, $subject, $to, $content);
	$apiKey = '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';
	$sg = new \SendGrid($apiKey);
	$res = $sg->client->mail()->send()->post($mail);
	


