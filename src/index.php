<!DOCTYPE html>
<html>
	<head>
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
        <meta charset="utf-8">

		<!-- Mobile Browser Toolbar Color -->
		<!-- Chrome, Firefox OS and Opera --><meta name="theme-color" content="#95dc5f">
		<!-- Windows Phone --><meta name="msapplication-navbutton-color" content="#95dc5f">
		<!-- iOS Safari --><meta name="apple-mobile-web-app-status-bar-style" content="#95dc5f">

		<!-- Chrome "Add to Homescreen" -->
		<meta name="mobile-web-app-capable" content="yes">
		<link rel="icon" href="/img/favicon-192.png" sizes="192x192">

		<!-- favicon.png -->
		<link rel="shortcut icon" href="favicon.png" type="image/png">
		<link rel="icon" href="favicon.png" type="image/png">

<?php
		// <meta> tags that rely on the requested URI.
		include_once 'php/MetaTags.php';
		echo MetaTags::get() . "\n";
?>

		<!-- I M P O R T -->
        <!-- Roboto Font --><link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
		<!-- peachytools.css --><link type="text/css" rel="stylesheet" href="/css/peachytools.css" />

	</head>

	<body>
		   <div id="peachytools"></div>
           <!-- index.js -->
           <script src="/js/bundle/peachytools.js"></script>
	</body>
</html>
