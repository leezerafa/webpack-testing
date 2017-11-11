var webpack = require('webpack');
var path = require('path');
var CommonsChunkPlugin = require('./node_modules/webpack/lib/optimize/CommonsChunkPlugin');

module.exports = {
	entry: {
		about:    __dirname + '/src/js/about.js',
		contact:  __dirname + '/src/js/contact.js',
		main: 	  __dirname + '/src/js/main.js',
		vendor: ['react','react-dom','foundation-sites','slick-carousel']
	},
	output: {
		path: 	  path.join(__dirname, 'build'),
		filename: '[name].bundle.js'
	},
	module: {
		loaders: [
			{
				test:    /\.(js|jsx)$/,
				exclude: '/node_modules/',
				loader:  'babel-loader',
				query: {
					presets: ['es2015', 'react'],
					compact: false,
				}
			},
			{
				test: 	 /\.(png|jpg)$/,
				loader: 'url-loader?limit=20000'
			},
			{
				test: 	 /\.scss$/,
				exclude: '/node_modules/',
				loader:  'style-loader!css-loader!sass-loader'
			}
		]
	},
	plugins: [
		new CommonsChunkPlugin('vendor')
	]
};