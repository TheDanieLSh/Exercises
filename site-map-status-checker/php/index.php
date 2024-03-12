<?php
	function siteMapParse($site)
	{
		$xmlMapAddress = $site . "sitemap.xml";
		$xmlMap = simplexml_load_string(file_get_contents($xmlMapAddress));

		foreach ($xmlMap as $url) {
			$request = curl_init($url -> loc);
			curl_setopt($request, CURLOPT_RETURNTRANSFER, true);
			curl_setopt($request, CURLOPT_FOLLOWLOCATION, true);
			curl_setopt($request, CURLOPT_MAXREDIRS, 5);
			curl_setopt($request, CURLOPT_TIMEOUT, 10);
			curl_exec($request);
			echo $url -> loc . "->" . strval(curl_getinfo($request, CURLINFO_HTTP_CODE)) . "\n";
			curl_close($request);
		}
		echo "\n";
	}

	siteMapParse("https://mfk-botanica.ru/");