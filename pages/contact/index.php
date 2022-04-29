<?php include '../../includes/inc.header.php';?>

<section id="contact-container">
    <div id="message-container">
        <p>There's never a better <span>time</span><br>than <span>today</span> to get<br><span>started</span> on your
            <span>dreams</span>.
        </p>
    </div>
    <div id="contact-form-container">
        <form id="contact-form" action="contactHandler.php" method="POST">
            <div class="form-group">
                <label for="contact_name">Full Name</label>
                <input type="text" name="contact_name" class="form-control" placeholder="Enter your full name">
            </div>
            <div class="form-group">
                <label for="contact_email">Email</label>
                <input type="email" name="contact_email" class="form-control" placeholder="Enter your email">
            </div>
            <div class="form-group">
                <label for="contact_phone_number">Phone Number</label>
                <input type="phone" name="contact_phone_number" class="form-control"
                    placeholder="Enter your phone number">
            </div>
            <div class="form-group">
                <label for="contact_message">Message</label>
                <textarea name="contact_message" class="form-control" rows="4"
                    placeholder="Enter a short message describing what you're looking for"></textarea>
            </div>
            <button type="submit" class="btn btn-primary" id="contact-form-submit">Submit</button>
        </form>
    </div>
</section>

<?php include '../../includes/inc.footer.php';?>