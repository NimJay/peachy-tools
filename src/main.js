/**
 * This file starts up a Node.js Express web server.
 * This is only used during development.
 * During production, an Apache HTTP Server is used instead.
 */

const express = require('express');
const PORT = 3003;
var app = express();

// Serve this directory.
app.use(express.static(__dirname));

// Send index.html for Tools.
var sendIndex = (req, res) => {res.sendFile(__dirname + '/index.html');}
app.get('/character-counter', sendIndex);
app.get('/charades-generator', sendIndex);
app.get('/combinations-generator', sendIndex);
app.get('/exam-timer', sendIndex);
app.get('/permutations-generator', sendIndex);
app.get('/pictionary-generator', sendIndex);
app.get('/random-number-generator', sendIndex);
app.get('/recipe-converter', sendIndex);

// Everything else: index.html with 404.
app.use((req, res) => {
    res.status(404);
    res.sendFile(__dirname + '/index.html');
});

app.listen(PORT, function () {
    console.log('Server Peachy Tools at: http://locahost:' + PORT);
});
