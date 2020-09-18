const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  optimization: {
    minimize: false,
    minimizer: [
    	new TerserPlugin({
	        terserOptions: {
	            keep_classnames: true,
	            keep_fnames: true
	        }
	      })
    	]
  },
  mode: "production",
  entry: './src/app',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader?configFile=build.tsconfig.json',
        exclude: path.resolve(__dirname, '/node_modules')
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'app.js',
    library: 'app',
    path: path.resolve(__dirname, 'out'),
  },
};