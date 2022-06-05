<?php include '../../includes/inc.header.php';?>

<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
require __DIR__ . '/../../vendor/autoload.php';

if (empty($_POST)) {
    echo 'Must be post';
    return false;
}

extract($_POST);

$contact_name = strip_tags($contact_name);
$testName = array_filter(explode(' ', $contact_name));
if (count($testName) < 2) {
    echo 'Name is invalid';
    return false;
}

$contact_email = filter_var($contact_email, FILTER_SANITIZE_EMAIL);
if (!filter_var($contact_email, FILTER_VALIDATE_EMAIL)) {
    echo 'Email is invalid';
    return false;
}

$contact_phone_number = filter_var($contact_phone_number, FILTER_SANITIZE_NUMBER_INT);
if (!preg_match("/^\+?\d?-?\d{3}-?\d{3}-?\d{4}$/", $contact_phone_number)) {
    echo 'Phone number is invalid';
    return false;
}

$contact_message = strip_tags($contact_message);
if (empty($contact_message)) {
    echo 'Message is empty';
    return false;
}

// if any bots ignore js, this honeypot will catch the bot
if ($honeypot) {
    echo 'Fuck you bot';
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

    if ($_ENV['ENVIRONMENT'] === 'production') {
        $mail->send();
    } else {
        echo $msg;
    }
} catch (Exception $e) {
    echo "Message could not be sent. Mail Error: {$mail->ErrorInfo}";
}

?>

<section>
    <h1>Thank you,<br><span><?= $contact_name ?></span>!</h1>
    <p>I will be in touch shortly.</p>
</section>

<?php include '../../includes/inc.footer.php';?>