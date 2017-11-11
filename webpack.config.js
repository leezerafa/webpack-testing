var webpack = require('webpack');

module.exports = {
	entry: __dirname + '/src/js/app.js',
	output: {
		path: 	  'build',
		filename: 'bundle.js'
	},
	devServer: {
		inline:      true,
		contentBase: './build',
		port: 		 3000
	}
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
};