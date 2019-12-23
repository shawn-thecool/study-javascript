const path = require('path')

module.exports = {
  entry: {
    app: ['./src/ex1.basic.ts', './src/ex2.implement.ts', './src/ex1.types.ts']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
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
