const fs = require('fs');

const DEFAULT_TITLE = 'Peachy Tools';
const DEFAULT_DESCRIPTION = 'Every little tool you need, in one place.';

/**
 * @typedef {Object} Page
 * @property {string} contents - The <html> contents of the page.
 * @property {boolean} isTool - Indicated whether the Page is for a tool.
 */

/**
 * @param {string} pagePath - A string like "/about" or "/pictionary-generator".
 * @returns {Page} The page that matches the given pagePath.
 */
function buildPage(pagePath) {

    const tool = getToolByPath(pagePath);
    const title = tool ? `${tool.name} - Peachy Tools` : DEFAULT_TITLE;
    const description = tool ? tool.description : DEFAULT_DESCRIPTION;

    const page = {};
    page.isTool = !!tool;
    page.contents = `<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
<meta charset="utf-8">

<title>${title}</title>
<meta name="description" content="${description}">
<meta name="author" content="Peachy Tools">

`/* Mobile Browser Toolbar Color */+`
<meta name="theme-color" content="#95dc5f">
<meta name="msapplication-navbutton-color" content="#95dc5f">
<meta name="apple-mobile-web-app-status-bar-style" content="#95dc5f">

`/* favicon.png */+`
<link rel="shortcut icon" href="favicon.png" type="image/png">
<link rel="icon" href="favicon.png" type="image/png">

`/* manifest.json + "Add to Homescreen" */+`
<link rel="manifest" href="/manifest.json">
<meta name="mobile-web-app-capable" content="yes">
<link rel="icon" href="/img/favicon-192.png" sizes="192x192">

`/* Open Graph Protocol */+`
<meta property="og:title" content="${title}" />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://peachytools.com/" />
<meta property="og:image" content="https://peachytools.com/img/logo-card.png" />
<meta property="og:image:width" content="200" />
<meta property="og:image:height" content="200" />
<meta property="og:description" content="${description}" />

`/* Twitter Card */+`
<meta name="twitter:card" content="summary" />
<meta name="twitter:title" content="${title}" />
<meta name="twitter:description" content="${description}" />
<meta name="twitter:image" content="https://peachytools.com/img/logo-card.png" />

`/* Imports */+`
<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
<link type="text/css" rel="stylesheet" href="/css/peachytools.css?v=9" />
<script src="/node_modules/babel-polyfill/dist/polyfill.min.js"></script>

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

<script src="/js/v9/peachytools.js"></script>

</body>
</html>`;

    return page;
}

function getToolByPath(path) {
    return getEnabledTools().find(tool => `/${tool.url}` === path);
}

function getEnabledTools() {
    const toolsFile = fs.readFileSync(__dirname + '/../../tools.json');
    const tools = JSON.parse(toolsFile);
    return tools.filter(t => t.disabled !== true);
}

module.exports = buildPage;
