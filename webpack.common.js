const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CSSExtract = new ExtractTextPlugin("styles.css");

module.exports = {
  // entry: "./src/playground/redux-expensify.js",
  entry: ["./src/playground/Redux-101.js"],
  output: {
    path: path.join(__dirname, "dist"),
    // publicPath: "/",
    filename: "bundle.js",
  },

  plugins: [
    CSSExtract,
    new HtmlWebpackPlugin({
      template: "src/index.html",
      favicon: "src/images/favicon.ico",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(ico)$/,
        use: [
          {
            loader: "file-loader?name=[name].[ext]",
            options: {
              outputPath: "images/",
              publicPath: "images/",
            },
          },
        ],
      },
      {
        test: /\.s?css$/,
        use: CSSExtract.extract({
          use: [
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
              },
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true,
              },
            },
          ],
        }),
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "images/",
              publicPath: "images/",
            },
          },
        ],
      },
    ],
  },
};
