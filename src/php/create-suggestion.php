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

// Retrieve IP Address.
$ipAddress = getenv('HTTP_CLIENT_IP')?:
getenv('HTTP_X_FORWARDED_FOR')?:
getenv('HTTP_X_FORWARDED')?:
getenv('HTTP_FORWARDED_FOR')?:
getenv('HTTP_FORWARDED')?:
getenv('REMOTE_ADDR');

// Store the suggestion.
$s = $pdo->prepare(
    'INSERT INTO suggestion(suggestion, url, ip_address) VALUES (:s, :u, :i)');
$r = $s->execute(array(':s' => $suggestion, ':u' => $url, ':i' => $ipAddress));
if (!$r) $o['error'] = true;
echo json_encode($o);
