<?php

include_once 'Tool.php';

/**
 * MetaTags
 * Contains static function(s) for echo-ing <meta> tags based on requested URI.
 */
class MetaTags {

    // Return the <meta> tags based on the requested URI.
    public static function get() {
        $url = substr($_SERVER['REQUEST_URI'], 1);
        $tool = Tool::getToolByURL($url);
        $tabs = "\t\t"; // Prefix.
        $t = ""; // String of tags to be returned.

        // Title and description.
        $title = 'Peachy Tools';
        $description = 'Every little tool you need, in one place.';
        if ($tool) {
            $title = $tool['name'] . ' - Peachy Tools';
            $description = $tool['description'];
        }

        // Basics
        $t .= "$tabs<title>$title</title>\n";
		$t .= "$tabs<meta name=\"description\" content=\"$description\">\n";
		$t .= "$tabs<meta name=\"author\" content=\"Peachy Tools\">\n\n";

        // Open Graph Protocol
		$t .= "$tabs<!-- Open Graph Protocol -->\n";
		$t .= "$tabs<meta property=\"og:title\" content=\"$title\" />\n";
		$t .= "$tabs<meta property=\"og:type\" content=\"website\" />\n";
		$t .= "$tabs<meta property=\"og:url\" content=\"https://peachytools.com/$url\" />\n";
		$t .= "$tabs<meta property=\"og:image\" content=\"https://peachytools.com/img/logo-card.png\" />\n";
		$t .= "$tabs<meta property=\"og:image:width\" content=\"200\" />\n";
		$t .= "$tabs<meta property=\"og:image:height\" content=\"200\" />\n";
		$t .= "$tabs<meta property=\"og:description\" content=\"$description\" />\n\n";

        // Twitter Cards
		$t .= "$tabs<!-- Twitter Card -->\n";
		$t .= "$tabs<meta name=\"twitter:card\" content=\"summary\" />\n";
		$t .= "$tabs<meta name=\"twitter:title\" content=\"$title\" />\n";
		$t .= "$tabs<meta name=\"twitter:description\" content=\"$description\" />\n";
		$t .= "$tabs<meta name=\"twitter:image\" content=\"https://peachytools.com/img/logo-card.png\" />";

        return $t;
    }
}
