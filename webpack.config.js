const webpack = require('webpack');

module.exports = {
	context: __dirname + '/src',
	devtool: "source-map",
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
		new webpack.optimize.UglifyJsPlugin(
            {
                sourceMap: true
            }
        ),
		new webpack.LoaderOptionsPlugin({
		  debug: false,
		  minimize: true
		})
	]
}
