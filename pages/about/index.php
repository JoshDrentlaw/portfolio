<?php include '../../includes/inc.header.php'; ?>

<h1>I Make Web Design <span>Simple</span><br>So That You Can Focus On<br><span>What Matters To You</span></h1>

<div id="about-container">
    <div id="about-text-container">
        <p>Your mission to grow your business and connect with your customers, not spend weeks figuring out how to get a
            website
            up.</p>

        <p>My mission is to deliver an amazing website, so you can spend time on what matters most to you.</p>

        <p>Please check out my services below and do not hesitate to
            <a href="/<?= $_ENV['INDEX'] ?>pages/contact/" class="btn btn-primary btn-compact">contact me</a> for a
            quote.
        </p>
    </div>
    <div id="about-img-container">
        <figure>
            <img src="/<?= $_ENV['INDEX'] ?>public/images/cashier.jpg" alt="Cashier" loading="lazy" width="100%">
            <figcaption>Photo by Christiann Koepke on Unsplash</figcaption>
        </figure>
    </div>
</div>

<div id="services-container"></div>

<?php include '../../includes/inc.footer.php';?>