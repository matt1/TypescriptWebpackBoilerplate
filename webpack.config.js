const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/scripts/index.ts',
  devtool: 'inline-source-map',
  devServer: {contentBase: './dist'},
  module: {
    rules: [{test: /\.ts$/, use: 'ts-loader'}]
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: '**/*',
          context: path.resolve(__dirname, 'src'),
          globOptions: {
            ignore: [
              '**/scripts/**',
            ]
          },
        },
      ]
    }),
  ],
  resolve: {
    extensions: ['.ts', '.js' ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
