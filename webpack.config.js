const path = require('path');
const nodeExternals = require('webpack-node-externals');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const os = require('os');
console.log();

module.exports = {
  mode: 'production',
  target: 'node',
  node: {
    __dirname: false,
  },
  externals: [nodeExternals()], // removes node_modules from your final bundle
  entry: './dist/index.js', // make sure this matches the main root of your code
  output: {
    path: path.join(__dirname), // this can be any path and directory you want
    filename: 'ITunesPluginX.js',
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()], // enabling this reduces file size and readability
  },
  module: {
    rules: [
      {
        test: /\.node$/,
        loader: 'node-loader',
        options: {
          name: '[name].[ext]',
        },
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: 'node_modules/winax/build/Release/node_activex.node',
          to: '.',
        },
      ],
    }),
  ],
  // externals: './node_activex',
};

// node_modules\\winax\\build\\Release\\node_activex.node
