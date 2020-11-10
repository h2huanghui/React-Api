const path = require('path');
const webpack = require("webpack");
const ROOTPATH = path.join(process.cwd());
const APP_PATH = path.join(ROOTPATH, '/src');

module.exports = {
  entry: {
    'index': path.join(APP_PATH, 'index.js'),
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/ 
      },
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      }
    ]
  },
  resolve: {
    alias: {
      '@': `${APP_PATH}/`,
    },
    extensions: ["*", ".js", ".jsx"]
  },
  output: {
    publicPath: '/',
    filename: 'bundle.js',
    path: path.join(ROOTPATH, '/dist')
  },
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    publicPath: "http://localhost:3000/dist/",
    port: 3000,
    hotOnly: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
}