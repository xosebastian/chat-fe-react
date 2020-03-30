const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const path = require("path");

module.exports = {
  watch: process.env.NODE_ENV === "production" ? false : true,
  mode: "development",
  devServer: {
    port: process.env.PORT ? process.env.PORT : 3000,
    host: "localhost",
    historyApiFallback: true,
    hot: true,
    contentBase: path.resolve(__dirname, "dist"),
    compress: true,
    inline: true,
    index: "index.html"
  },
  performance: {
    hints: process.env.NODE_ENV === "production" ? "warning" : false
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        compress: { 
          drop_console:true
        },
        test: /\.js(\?.*)?$/i
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8000,
              name: "images/[hash]-[name].[ext]"
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../",
              modules: true,
              sourceMap: true,
              importLoader: 2
            }
          },
          "css-loader"
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
        loader: "file-loader"
      }
    ]
  },
  output: {
    filename: "[name].bbva.js",
    path: path.resolve(__dirname, "dist")
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  plugins: [
    new ExtractTextPlugin("bbva.css"),
    new MiniCssExtractPlugin({
      filename: "[name].bbva.css",
      chunkFilename: "[id].css",
      ignoreOrder: false
    }),
    new HtmlWebPackPlugin({
      title: "...",
      entry: "./src/index.js",
      template: path.resolve("./public/", "index.html"),
      filename: "index.html",
      hash: true
    })
  ]
};