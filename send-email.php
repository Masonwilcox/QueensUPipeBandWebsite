<?php
    $email = $_POST['email'];
    $to = $email;
    $cc = "queensupipeband@gmail.com";
    $subject = "Class Signup Confirmation";
    $message = "Thank you " . $name . " for signing up for our " . $level . " class. We will contact you at " . $email . " to confirm your class.";
    $headers = "From: queensupipeband@gmail.com" . "\r\n" ."CC: $cc";
    mail($to, $subject, $message, $headers);

    require "vendor/autoload.php";

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;

    $mail = new PHPMailer(true);
    
    ?>

    