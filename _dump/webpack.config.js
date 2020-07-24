const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")

module.exports = (env, argv) => {
  return {
    entry: ['./src/main.js'],
    output: {
      path: path.resolve(__dirname, `./dist`),
      publicPath: `/`,
      filename: 'build.js'
    },
    devServer: {
      contentBase: './dist',
      host: '0.0.0.0',
      disableHostCheck: true,
      historyApiFallback: true, // is it enabled ?
      inline: true
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            loaders: {}
            // other vue-loader options go here
          }
        },
        {
          enforce: 'pre',
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'eslint-loader'
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.(png|jp(e*)g|svg)$/,
          loader: 'url-loader'
        },
        {
          test: /\.(s*)css$/,
          use: [argv.mode === 'development' ? 'vue-style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        },
        {
          test: /\.html$/,
          loader: 'html-loader'
        }
      ]
    },
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.esm.js',
        '@': path.resolve(__dirname, './src')
      },
      extensions: ['*', '.js', '.vue', '.json']
    },
    optimization: {
      minimizer: [new UglifyJsPlugin(), new OptimizeCSSAssetsPlugin({})]
    },
    plugins: [
      new CopyWebpackPlugin([
        {
          from: './src/assets/geo',
          to: './geo/',
          toType: 'dir'
        }
      ]),
      new CopyWebpackPlugin([
        {
          from: './src/assets/favicon.ico',
          to: './favicon.ico',
          toType: 'file'
        }
      ]),
      new MiniCssExtractPlugin({
        filename: './style.css'
      }),
      new VueLoaderPlugin(),
      new HtmlWebPackPlugin({
        template: './src/index.html',
        filename: './index.html'
      })
    ]
  }
}