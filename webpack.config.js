const webpack = require('webpack');

module.exports = {
	context: __dirname + '/src',
	devtool: 'hidden-source-map', // eval-source-map to check source map
	module: {
		loaders: [{
			test: /.js?$/,
			loader: 'babel-loader',
			exclude: /node_modules/,
			query: {
				presets: ['es2015']
			}
		}]
	},
	entry: [
		'./example.js'
	],
	output: {
		path: __dirname + '/dist',
		filename: 'webpack-bundle.js'
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin(),
		new webpack.LoaderOptionsPlugin({
		  debug: false,
		  minimize: true
		})
	]
}