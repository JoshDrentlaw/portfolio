<!DOCTYPE html>
<html lang="en">

<?php
require __DIR__ . '/../vendor/autoload.php';
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/' . '../');
$dotenv->load();

use Controller\Controller;
?>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/<?= $_ENV['INDEX'] ?>main.css">
    <?php
    $controller = new Controller();
    $controller->includeCss();
    ?>
    <title>Josh Drentlaw</title>
</head>

<body>
    <main>
        <nav>
            <div class="nav-endcap" id="head-title-container">
                <a class="nav-link nav-endcap" id="header-title" href="/<?= $_ENV['INDEX'] ?>">Josh Drentlaw</a>
            </div>
            <div id="link-container">
                <a class="nav-link<?= !in_array($controller->pathname, ['about', 'contact', 'projects', 'blog']) ? ' active' : '' ?>"
                    id="home" href="/<?= $_ENV['INDEX'] ?>">Home</a>
                <a class="nav-link<?= $controller->pathname === 'about' ? ' active' : '' ?>" id="about"
                    href="/<?= $_ENV['INDEX'] ?>pages/about">About</a>
                <a class="nav-link<?= $controller->pathname === 'projects' ? ' active' : '' ?>" id="projects"
                    href="/<?= $_ENV['INDEX'] ?>pages/projects">Projects</a>
                <a class="nav-link<?= $controller->pathname === 'blog' ? ' active' : '' ?>" id="blog"
                    href="/<?= $_ENV['INDEX'] ?>pages/blog">Blog</a>
            </div>
            <div class="nav-endcap" id="contact-container">
                <a class="nav-link" id="contact" href="/<?= $_ENV['INDEX'] ?>pages/contact">Contact</a>
            </div>
        </nav>