<?php

$database = 'database.txt';

if (isset($_POST['sms'])) {
    file_put_contents($database,"Тело сообщения: ".$_POST['sms']." / Количество сообщений: ".$_POST['count_sms'].PHP_EOL,FILE_APPEND);
}






