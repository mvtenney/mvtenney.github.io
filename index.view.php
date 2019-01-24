

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><?=$title?></title>
</head>
<body>
    <header>
        <nav>

        </nav>
        <div class="hero">
        
        </div>
    </header>
    
    <main>
        <h1>Welcome!</h1>
        <p><?php getWelcomeText($referrer);?></p>
        <ul>
            <?php foreach ($names as $name) : ?>
            <li><?=$name;?></li>
            <?php endforeach; ?>
        </ul>

        <ul>
            <?php foreach ($person as $trait => $val) : ?>
            <li><strong><?=$trait?></strong>: <?=$val?></li>
            <?php endforeach; ?>
        </ul>
    </main>
    
    <footer>
    
    </footer>
</body>
</html>