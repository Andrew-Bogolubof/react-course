var webpack = require("webpack");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

const mode = process.env.NODE_ENV === "PROD" ? "production" : "development";

const commonConfig = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/, /dist/, /.test.jsx?$/],
        use: ["babel-loader"],
      },
    ],
  },
  optimization: {
    splitChunks: { chunks: "all" },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ],
  entry: { index: path.resolve(__dirname, "src", "index.jsx") },
};

const developmentConfig = {
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.SourceMapDevToolPlugin({
      filename: "[file].map",
      exclude: [/node_modules/],
    }),
  ],
  devtool: "source-map",
};

const productionConfig = {
  plugins: [new CleanWebpackPlugin()],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};

const getConfig = (mode) => {
  switch (mode) {
    case "production":
      return merge(commonConfig, productionConfig, { mode });
    case "development":
      return merge(commonConfig, developmentConfig, { mode });
    default:
      throw new Error(`Trying to use an unknown mode, ${mode}`);
  }
};

module.exports = getConfig(mode);
