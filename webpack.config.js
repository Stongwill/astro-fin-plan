"use strict";
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
let mode = "development";
process.env.NODE_ENV === "production" && (mode = "production");
module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: mode,
  entry: {
    main: "./index.js",
  },
  output: {
    filename: "[name].[contenthash].js", 
    path: path.resolve(__dirname, "dist"), 
    clean: true,
    assetModuleFilename: 'assets/[name][ext]'
  },
  devtool: "source-map", 
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  devServer: {
    port: "3000",
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./index.html" }),
    new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" }),
  ],
  module: {
    rules: [
      { 
        test: /\.html$/i, 
        loader: "html-loader" 
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          mode === "development" ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [require('postcss-preset-env')],
              }
            }
          },
          "sass-loader",
        ],
      },
      {
        test: /\.(png|gif|svg|jpe?g|webp)$/i,
        use: [
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75
              }
            }
          }
        ],
        type:'asset/resource',
      },
      {
        test: /\.(ttf|woff|woff2|eot|otf)$/i,
        type:'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]'
        }
      },
    ],
  },
};