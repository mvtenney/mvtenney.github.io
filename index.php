<?php
    $author= 'Michael Tenney';
    $pageTitle = 'Home';
    $title = "{$author} | {$pageTitle}";
    $referrer = htmlspecialchars($_GET['referrer']);
    
    //array
    $names = [
        'Jeff',
        'Russel',
        'Tehseen'
    ];

    //associative array
    $person = [
        'age' => 27,
        'hair' => 'blonde',
        'career' => 'frontend developer'
    ];
    $person['name'] = 'Mike';
    // Checks for referral query string value, shows different intro text based off of organic or targeted link.
    function getWelcomeText($a){
        if ($a) {
            echo "Thank you for visiting my profile on $a";
        } else {
            echo 'Thank you for visiting my portfolio!';
        }
    }

    unset($person['age']);

require 'index.view.php';