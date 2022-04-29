<?php include '../../includes/inc.header.php';?>

<?php

extract($_POST);

$msg = "
    <p>Name: {$contact_name}</p>
    <p>Email: {$contact_email}</p>
    <p>Phone Number: {$contact_phone_number}</p>
    <p>Message: {$contact_message}</p>
";

// mail("joshdrentlaw@gmail.com", "Potential Client: {$contact_name}", wordwrap($msg, 70));

?>

<section>
    <h1>Thank you,<br><span><?= $contact_name ?></span>!</h1>
    <p>I will be in touch shortly.</p>
</section>

<?php include '../../includes/inc.footer.php';?>