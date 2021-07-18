const path = require('path');

module.exports = {
	mode: 'production',
	entry: './js/PeachyTools.jsx',
	output: {
		path: path.resolve(__dirname, '../js/v10.0/'),
		filename: 'peachytools.js',
		publicPath: '/js/v10.0/',
		chunkFilename: '[name].peachytools.js',
    },
	watch: true,
	module: {
	  rules: [
		{
		  test: /\.jsx?$/,
		  exclude: /node_modules/,
		  loader: 'babel-loader',
		  options: {
            presets: [['@babel/preset-env', {modules: false}], ['@babel/preset-react']],
            plugins: ['@babel/plugin-syntax-dynamic-import']
    	  }
		}
	  ]
	}
};
