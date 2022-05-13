<?php include '../../includes/inc.header.php';?>

<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
require __DIR__ . '/../../vendor/autoload.php';

extract($_POST);

$ln = "\r\n";

$msg = "
    <p>Name: {$contact_name}</p>
    <p>Email: {$contact_email}</p>
    <p>Phone Number: {$contact_phone_number}</p>
    <p>Message: {$contact_message}</p>
";

$headers = "MIME-Version: 1.0" . $ln
    . "Content-type:text/html;charset=iso-8895-1" . $ln
    . "From: Josh Drentlaw <info@mail.joshdrentlaw.com>" . $ln
    . "X-Sender: Josh Drentlaw <info@mail.joshdrentlaw.com>" . $ln
    . "X-Mailer: PHP/" . phpversion();
    // . "X-Priority: 1" . $ln This will make it !urgent

$mail = new PHPMailer(true);
try {
    if ($_ENV['ENVIRONMENT'] === 'production') {
        $mail->SMTPDebug = SMTP::DEBUG_SERVER;
        $mail->isSMTP();
        $mail->Host = 'mail.joshdrentlaw.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'info@joshdrentlaw.com';
        $mail->Password = $_ENV['SMTP_PASSWORD'];
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port = 465;
    }

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