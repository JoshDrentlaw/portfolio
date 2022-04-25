<?php

use PhpCsFixer\Config;
use PhpCsFixer\Finder;

$rules = [];

$finder = Finder::create()->in([]);

$config = new Config();

return $config
    ->setFinder($finder)
    ->setRules($rules);