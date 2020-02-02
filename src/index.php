<!DOCTYPE html>
<html lang="en">
	<head>
		<meta name="viewport" content="width=device-width, initial-scale=1">
        <meta charset="utf-8">

		<!-- Global site tag (gtag.js) - Google Analytics -->
		<!-- Production only
		<script async src="https://www.googletagmanager.com/gtag/js?id=UA-108360287-1"></script>
		<script>
			window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());
			gtag('config', 'UA-108360287-1');
		</script> -->

		<!-- Mobile Browser Toolbar Color -->
		<!-- Chrome, Firefox OS and Opera --><meta name="theme-color" content="#95dc5f">
		<!-- Windows Phone --><meta name="msapplication-navbutton-color" content="#95dc5f">
		<!-- iOS Safari --><meta name="apple-mobile-web-app-status-bar-style" content="#95dc5f">

		<!-- manifest.json + "Add to Homescreen" -->
		<link rel="manifest" href="/manifest.json">
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
		<!-- peachytools.css --><link type="text/css" rel="stylesheet" href="/css/peachytools.css?v=9" />
		<!-- Babel Polyfill --><script src="/node_modules/babel-polyfill/dist/polyfill.min.js"></script>

	</head>

	<body>
		   <div id="peachytools">
			   <section>
				   <div class="container">
					   <h2 style="margin-bottom: 0px;">Loading...</h2>
					   <p>Please make sure JavaScript is enabled.</p>
				   </div>
			   </section>
		   </div>
           <!-- index.js -->
           <script src="/js/v9/peachytools.js"></script>
	</body>
</html>
