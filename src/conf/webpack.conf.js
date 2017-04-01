const path = require('path');

module.exports = {
	entry: './js/PeachyTools.jsx',
	output: {
		path: path.resolve(__dirname, '../js/bundle/'),
		filename: 'peachytools.js',
		publicPath: '/js/bundle/'
    },
	watch: true,
	module: {
	  loaders: [
		{
		  test: /\.jsx?$/,
		  exclude: /node_modules/,
		  loader: 'babel-loader',
		  options: {
          	presets: [['es2015', {modules: false}], ['react']],
          	plugins: ['syntax-dynamic-import']
    	  }
		}
	  ]
	}
};
