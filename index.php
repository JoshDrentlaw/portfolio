<?php include 'includes/inc.header.php';?>

<section id="hero-section">
    <div id="text-container">
        <div>
            <h2 id="hero-name">Josh Drentlaw</h2>
            <h1 id="hero-job-title">Full Stack Web Developer</h1>
        </div>
        <div>
            <a id="learn-more-btn" href="/<?= $_ENV['INDEX'] ?>pages/about">Learn More <span
                    id="learn-more-arrow">&#10132;</span></a>
        </div>
    </div>
    <div id="img-container">
        <img id="hero-img" src="/<?= $_ENV['INDEX'] ?>public/images/profile_photo_with_backdrop.png" alt="Josh Drentlaw"
            loading="lazy" width="100%">
    </div>
</section>
<section id="services-section"></section>
<section id="contact-section"></section>

<?php include 'includes/inc.footer.php';?>