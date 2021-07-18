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
1. Push a commit that bumps up the version of Peachy Tools by modifying these files:
    * `build-page.js`
    * `webpack.conf.js`
    * `swoff.js`
1. Use Google Cloud's _Cloud Shell_.
1. Either `git clone https://github.com/NimJay/peachy-tools.git` or `git pull` on the existing repository clone.
1. Go into the `src/` folder.
1. Uncomment the Google Analytics `<script>` in `server/build-page.js`.
1. `npm run build-front-end-css`
1. `npm run build-front-end-js`
1. If a new tool was added: `npm run generate-code`.
1. Upload the code to Google App Engine: `gcloud app deploy`
