<?php

namespace Controller;

class Controller {
    public $pathname;

    function __construct()
    {
        $this->pathname = end(explode('/', trim($_SERVER['REQUEST_URI'], '\/')));
    }

    public function includeCss()
    {
        if (is_file(__DIR__ . '/../../pages/' . $this->pathname . '/index.css')) {
            echo '<link rel="stylesheet" href="/' . $_ENV['INDEX'] . 'pages/' . $this->pathname . '/index.css">';
        }
    }

    public function includeJs()
    {
        if (is_file(__DIR__ . '/../../pages/' . $this->pathname . '/index.js')) {
            echo '<script src="/' . $_ENV['INDEX'] . 'pages/' . $this->pathname . '/index.js" type="module"></script>';
        }
    }
}

?>