const path = require('path');
const webpack = require('webpack');
const assetsPath = path.resolve(__dirname, '../public/assets');
const { webpackHost, webpackPort } = require('../config/env');
module.exports = {
  devtool: 'inline-source-map',
  context: path.resolve(__dirname, '..'),
  entry: {
    main: [
      `webpack-hot-middleware/client?path=http://${webpackHost}:${webpackPort}/__webpack_hmr`,
      './src/index.js',
    ],
  },
  output: {
    path: assetsPath,
    filename: '[name].js',
    chunkFilename: '[name]-[chunkhash].js',
    publicPath: `http://${webpackHost}:${webpackPort}/assets/`,
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },
      // { 
      //   test: /\.(png|jpg)$/,
      //   loader: 'file-loader?name=images/[name].[ext]' 
      // },
      // {   
      //   test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, 
      //   loader: 'file-loader?name=fonts/[name].[ext]' 
      // },
      // {
      //   test: /\.css$/,
      //   loader: 'style!css!autoprefixer?browsers=last 2 versions'
      // },
      // {   
      //   test: /\.styl$/, 
      //   loader: 'style!css!stylus-loader' 
      // }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.svg']
  },
  plugins: [
    // hot reload
    new webpack.HotModuleReplacementPlugin(),
    new webpack.IgnorePlugin(/webpack-stats\.json$/),
    new webpack.DefinePlugin({
      __CLIENT__: true,
      __DEVTOOLS__: true,
      'process.env': {
        NODE_ENV: '"development"',
      },
    }),
  ],
};