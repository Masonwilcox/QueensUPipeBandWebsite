<?php

$name = $_POST["name"];
$email = $_POST["email"];
$subject = $_POST["subject"];
$message = $_POST["message"];

require "vendor/autoload.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

$mail = new PHPMailer(true);

// $mail->SMTPDebug = SMTP::DEBUG_SERVER;

$mail->isSMTP();
$mail->SMTPAuth = true;

$mail->Host = "smtp.example.com";
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Port = 2525;

$mail->Username = "queensupipeband@gmail.com";
$mail->Password = "9227B3B17331E9E82B1A0F7B307C41EE0483";

$mail->setFrom($email, $name);
$mail->addAddress("queensupipeband@example.com", "Queens Band");

$mail->Subject = $subject;
$mail->Body = $message;

$mail->send();

header("Location: sent.html");

?>

    