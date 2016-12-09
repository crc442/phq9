const webpack = require('webpack');

const debug = process.env.NOD_ENV !== 'production';

module.exports = {
  name: 'browser',
  entry: [
    './app/index.js',
  ],
  devtool: debug ? 'inline-sourcemap' : null,
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: debug ? ['react-hot', 'babel-loader'] : ['babel-loader'],
      },
      {
        test: /\.css$/,
        loaders: [
          'style?sourceMap',
          'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css'],
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/public/scripts/',
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
