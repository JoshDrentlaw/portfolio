<?php include '../../includes/inc.header.php';?>

<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
require __DIR__ . '/../../vendor/autoload.php';

extract($_POST);

// if any bots ignore js, this honeypot will catch the bot
if ($honeypot) {
    return false;
}

$msg = "
    <p>Name: {$contact_name}</p>
    <p>Email: {$contact_email}</p>
    <p>Phone Number: {$contact_phone_number}</p>
    <p>Message: {$contact_message}</p>
";

$mail = new PHPMailer(true);
try {
    // $mail->SMTPDebug = $_ENV['ENVIRONMENT'] === 'production' ? 0 : SMTP::DEBUG_SERVER;
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'joshdrentlaw@gmail.com';
    $mail->Password = $_ENV['SMTP_APPLICATION_PASSWORD'];
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    $mail->setFrom('jdrentlaw@joshdrentlaw.com', 'Josh Drentlaw');
    $mail->addAddress("joshdrentlaw@gmail.com");
    $mail->isHTML(true);
    $mail->Subject = "Potential Client: {$contact_name}";
    $mail->Body = $msg;

    $mail->send();
} catch (Exception $e) {
    echo "Message could not be sent. Mail Error: {$mail->ErrorInfo}";
}

?>

<section>
    <h1>Thank you,<br><span><?= $contact_name ?></span>!</h1>
    <p>I will be in touch shortly.</p>
</section>

<?php include '../../includes/inc.footer.php';?>