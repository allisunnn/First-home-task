<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Wynik formularza</title>
</head>
<body>

<h2>Dane z formularza</h2>

<?php
// Funkcja zabezpieczająca dane
function safe($value) {
    return htmlspecialchars($value ?? '', ENT_QUOTES, 'UTF-8');
}

echo "<strong>Imię:</strong> " . safe($_POST["imie"]) . "<br>";
echo "<strong>Nazwisko:</strong> " . safe($_POST["nazwisko"]) . "<br>";
echo "<strong>Data urodzenia:</strong> " . safe($_POST["data_urodzenia"]) . "<br>";
echo "<strong>Hasło:</strong> " . safe($_POST["haslo"]) . "<br>";
echo "<strong>Ulica:</strong> " . safe($_POST["ulica"]) . "<br>";
echo "<strong>Miasto:</strong> " . safe($_POST["miasto"]) . "<br>";
echo "<strong>Email:</strong> " . safe($_POST["email"]) . "<br>";

echo "<strong>Czy posiadasz prawo jazdy:</strong> " . safe($_POST["prawo_jazdy"]) . "<br>";

echo "<strong>Płeć:</strong> " . safe($_POST["Płec"]) . "<br>";

echo "<strong>Uwagi:</strong> " . safe($_POST["uwagi"]) . "<br>";
echo "<strong>Telefon:</strong> " . safe($_POST["telefon"]) . "<br>";
echo "<strong>Województwo:</strong> " . safe($_POST["województwo"]) . "<br>";
?>

</body>
</html>
