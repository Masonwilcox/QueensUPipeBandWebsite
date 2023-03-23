<?php
require 'vendor/autoload.php';

use Aws\Ses\SesClient;
use Aws\Exception\AwsException;

function send_email($recipient, $subject, $body) {
    $sender = "queensupipeband@gmail.com";
    $region = "us-east-1";
    $charset = "UTF-8";

    $SesClient = new SesClient([
        'version' => 'latest',
        'region' => $region,
        'credentials' => [
            'key' => 'AKIAZCL45J2XH44KTUPI',
            'secret' => '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',
        ]
    ]);

    try {
        $result = $SesClient->sendEmail([
            'Destination' => [
                'ToAddresses' => [$recipient],
            ],
            'ReplyToAddresses' => [$sender],
            'Source' => $sender,
            'Message' => [
                'Body' => [
                    'Html' => [
                        'Charset' => $charset,
                        'Data' => $body,
                    ],
                ],
                'Subject' => [
                    'Charset' => $charset,
                    'Data' => $subject,
                ],
            ],
        ]);
    } catch (AwsException $e) {
        echo $e->getMessage();
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $level = $_POST['level'];

    $subject = "Bagpipe Lessons Signup";
    $body = "Name: {$name}<br>Email: {$email}<br>Level: {$level}";

    // Send email to queensupipeband@gmail.com
    send_email("queensupipeband@gmail.com", $subject, $body);

    // Send email to the input email address
    send_email($email, $subject, $body);

    echo "Emails sent successfully!";
}
