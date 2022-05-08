<?php include '../../includes/inc.header.php';?>

<?php

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
    . "From: Josh Drentlaw <info@joshdrentlaw.com>" . $ln
    . "X-Sender: Josh Drentlaw <info@joshdrentlaw.com>" . $ln
    . "X-Mailer: PHP/" . phpversion();
    // . "X-Priority: 1" . $ln This will make it !urgent

$res = mail("joshdrentlaw@gmail.com", "Potential Client: {$contact_name}", wordwrap($msg, 70, $ln), $headers, '-finfo@joshdrentlaw.com');

?>

<section>
    <h1>Thank you,<br><span><?= $contact_name ?></span>!</h1>
    <p>I will be in touch shortly.</p>
</section>

<?php include '../../includes/inc.footer.php';?>