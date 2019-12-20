const path = require('path')

module.exports = {
  entry: {
    app: ['./typescript/index.ts']
  },
  output: {
    path: path.resolve(__dirname, 'typescript', 'dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-typescript']
          }
        }
      }
    ]
  },
  devtool: 'source-map',
  mode: 'development'
}
