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