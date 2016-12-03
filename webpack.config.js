const webpack = require('webpack');
const debug = process.env.NOD_ENV !== 'production';

module.exports = [
	{
		name: 'browser',
		entry: [
			'./app/index.js'
		],
		devtool: debug ? 'inline-sourcemap' : null,
		module: {
			loaders: [
				{
					test: /\.js$/,
					exclude: /node_modules/,
					loader: 'babel-loader'
				}
			]
		},
		output: {
			filename: 'client.min.js',
			path: __dirname + '/public/scripts/'
		},
		plugins: debug ? [] : [
			new webpack.optimize.DedupePlugin(),
			new webpack.optimize.OccurenceOrderPlugin(),
			new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
		]
	}	
]