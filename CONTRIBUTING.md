Peachy Tools Contributing
===

Hi! Thank you so much for your interest in contributing.


## Adding a Tool

To create a new Tool as [/my-new-tool](https://peachytools.com/my-new-tool)
1. Create and export your React Component at **/js/tools/_my-new-tool_/ToolComponent.jsx**.
1. Add it to `importTool()` of `ToolPage`.
1. Add it to `Tool.js`.
1. Add it to `swoff.js`.


## Deployment Checklist
1. Bumb up version of Peachy Tools.
2. Upload `index.php`, `swoff.js`, `peachy-tools.css`, and `js/v*/*`.
3. Uncomment Google Analytics in `index.php`.
4. If new tool added, run `npm run generate-code`.
5. If new tool added, upload `Tools.php`, `sitemap.xml`, and `.htaccess`.
