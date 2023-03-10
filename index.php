

<?php

    $name = $_POST['name'];
    $email = $_POST['email'];
    $level = $_POST['level'];
    $to = $email;
    $cc = "queensupipeband@gmail.com";
    $subject = "Class Signup Confirmation";
    $message = "Thank you " . $name . " for signing up for our " . $level . " class. We will contact you at " . $email . " to confirm your class.";
    $headers = "From: queensupipeband@gmail.com" . "\r\n" ."CC: $cc";
    mail($to, $subject, $message, $headers);
?>

