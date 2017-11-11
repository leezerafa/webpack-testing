var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: __dirname + '/src/js/app.js',
	output: {
		path: 	  path.join(__dirname, 'build'),
		publicPath: '/build/',
		filename: 'bundle.js'
	},
	devServer: {
		inline:      true,
		contentBase: './',
		port: 		 3000
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
				test: 	 /\.(png|jpg|ttf|eot|woff|woff2|svg|gif)$/,
				loader: 'url-loader?limit=20000'
			},
			{
				test: 	 /\.scss$/,
				exclude: '/node_modules/',
				loader:  'style-loader!css-loader!sass-loader',
			}
		]
	}

};