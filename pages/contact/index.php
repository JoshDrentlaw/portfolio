<?php include '../../includes/inc.header.php'; ?>

<section id="contact-container">
    <div id="message-container">
        <h1>There's never a better <span>time</span><br>than <span>today</span> to get<br><span>started</span> on your
            <span>dreams</span>.
        </h1>
        <div id="card-deck">
            <div class="card">
                <h2 class="card-title">Trust & Confidence</h2>
                <div class="icon-container">
                    <i class="fa-solid fa-2x fa-handshake"></i>
                    <i class="fa-solid fa-2x fa-shield-heart"></i>
                </div>
                <div class="card-body">
                    <p>My goal is to be open and upfront about every step of my process.</p>
                    <p>Communication will always encouraged and you'll never feel left in the dark.</p>
                </div>
            </div>
            <div class="card">
                <h2 class="card-title">Experience</h2>
                <div class="icon-container">
                    <i class="fa-solid fa-2x fa-laptop-code"></i>
                    <i class="fa-solid fa-2x fa-bug-slash"></i>
                </div>
                <div class="card-body">
                    <p>With 10 years of experience in web development on my side I will help you and your
                        business reach your full online potential.</p>
                    <p>When things go wrong, you will know that you are in safe hands.</p>
                </div>
            </div>
            <div class="card">
                <h2 class="card-title">Quality</h2>
                <div class="icon-container" style="font-size:22px;">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                <div class="card-body">
                    <p>Every design should feel unique and feel like it's yours.</p>
                    <p>I wont stop until you are fully sasified with your website.</p>
                    <p>Feel confident that your website will look great everywhere.</p>
                </div>
            </div>
        </div>
    </div>
    <div id="contact-form-container">
        <form id="contact-form" action="contactHandler.php" method="POST">
            <div style="display:none;"><input type="checkbox" id="honeypot" name="honeypot"></div>
            <div class="form-group">
                <label for="contact_name">Full Name</label>
                <input type="text" name="contact_name" class="form-control"
                    placeholder="Enter your first and last name">
            </div>
            <div class="form-group">
                <label for="contact_email">Email</label>
                <input type="email" name="contact_email" class="form-control" placeholder="Enter your email">
            </div>
            <div class="form-group">
                <label for="contact_phone_number">Phone Number</label>
                <input type="phone" name="contact_phone_number" class="form-control"
                    placeholder="Enter your phone number"
                    pattern="^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$">
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

<?php include '../../includes/inc.footer.php'; ?>