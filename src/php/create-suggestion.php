<?php

/**
 * Create a Suggestion.
 *
 * POST: suggestion, url
 * Output: error
 */

// Disable error reporting.
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Prepare MySQL and JSON output.
$pdo = new PDO("mysql:host=localhost;dbname=peachy_tools", "peachy_tools", "");
$o = [];

// POST Variables.
if (!isset($_POST['suggestion']))
    $o['error'] = true;
$suggestion = $_POST['suggestion'];
$url = $_POST['url'];

// Validate suggestion.
if (empty($suggestion)) {
    $o['error'] = true;
    echo json_encode($o);
    return;
}

// Store the suggestion.
$s = $pdo->prepare('INSERT INTO suggestion(suggestion, url) VALUES (:s, :u)');
$r = $s->execute(array(':s' => $suggestion, ':u' => $url));
if (!$r) $o['error'] = true;
echo json_encode($o);
