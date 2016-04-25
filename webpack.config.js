'use strict';
const path = require('path');
const strip = require('strip-loader');
const webpack = require('webpack');

const DEV = process.env.NODE_ENV==='development';
const PROD = process.env.NODE_ENV==='production';

const config = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devtool: !PROD ? 'cheap-module-source-map' : null,
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "http://localhost:8080",
      "Access-Control-Allow-Credentials": "true"
    },
    contentBase: "public",
    historyApiFallback: {
      index: '/index.html'
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      ENV_MODE: DEV
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.html$/,
        loader: 'raw-loader',
        exclude: /node_modules/
      },
      {
        test: [/\.scss$/, /\.css$/],
        loaders: ["style", "css", "sass"],
        exclude: /node_modules/
      }
    ]
  }
};

if(!DEV){
  config.module.loaders.push({
    test: /\.js/,
    exclude: /node_modules/,
    loaders: [
      'ng-annotate',
      strip.loader('console.log')
    ]
  });
}

module.exports = config;