var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: APP_DIR + '/webpack-index.js',
  output: {
    path: BUILD_DIR,
    filename: 'webpack-bundle.js'
  },
  cache: false,
  module: {
    loaders: [
      {
        test: /\.js?$/,
        include: APP_DIR,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'stage-2']
        }
      }
    ]
  }  
};

module.exports = config;
