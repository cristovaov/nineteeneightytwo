const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./assets/js/index.js",
  output: {
    filename: "js/bundle.js",
    path: path.resolve(__dirname, "static")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node-modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css" 
    })
  ]
};
