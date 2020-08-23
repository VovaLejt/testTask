<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/html">
<head>
    <meta charset="UTF-8">
    <title>SMS</title>
    <link rel="stylesheet" href="style.css">
    <script src="action.js"></script>
    <script src="transliteration.js"></script>
</head>
<body>
<form action="saveInDb.php" method="post">
    Ваше сообшение:
    <br>
    <textarea id="sms" name="sms" placeholder="Введите текст" onchange="countChar()" onkeyup="countChar()"
              onload="countChar()"></textarea>
    <br>
    Количество символов:&nbsp;&nbsp;&nbsp;
    <input type="text" id="count_char" value="0" readonly="readonly">
    <br>
    Количество сообщений:
    <input type="text" id="count_sms" name="count_sms" value="0" readonly="readonly">
    <br>
    Транслитерировать:
    <input type="checkbox" id="translit" onclick="transliteration()">
    <br>
    <br>
    <input type="submit" name="save" value="Сохранить"  onclick='window.location.reload()'>
</form>
</body>
</html>