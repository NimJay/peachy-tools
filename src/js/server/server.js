/**
 * This file starts up a Node.js Express web server.
 * This is only used during development.
 * During production, an Apache HTTP Server is used instead.
 */

const express = require('express');
const buildPage = require('./build-page.js');

const NON_TOOL_PATHS = [ '/' ];
const PORT = process.env.PORT || 8080;

const app = express();

// Serve this directory.
app.use(express.static(__dirname + '/../../'));

// Babel ES6 Polyfill.
app.get('/node_modules/babel-polyfill/dist/polyfill.min.js', (req, res) => {
    res.sendFile(__dirname + '/node_modules/babel-polyfill/dist/polyfill.min.js');
});

// Build and serve pages.
app.use((req, res) => {
    const page = buildPage(req.path);
    if (!page.isTool && !NON_TOOL_PATHS.includes(req.path)) {
        res.status(404);
    }
    res.send(page.contents);
});

app.listen(PORT, function () {
    console.log('Server Peachy Tools at: http://locahost:' + PORT);
});
