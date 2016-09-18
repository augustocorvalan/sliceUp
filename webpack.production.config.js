var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

/**
 * This is the Webpack configuration file for production.
 */
module.exports = {
  entry: "./src/main",

  output: {
    path: __dirname + "/build/",
    filename: "app.js"
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new ExtractTextPlugin('style.css', { allChunks: true })
  ],

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader') },
      { test: /\.(jpe?g|png|gif|svg)$/i, loader: 'url-loader?limit=8192' }
    ]
  },

  resolve: {
    root: path.resolve(__dirname, 'src'),
    extensions: ['', '.js', '.jsx', '.css']
  },

  postcss: [
    require('postcss-import')(),
    require('postcss-cssnext')(), 
    require('postcss-focus')(), //add a :focus to every :hover
    require("postcss-reporter")({ clearMessages: true })
  ]
}
