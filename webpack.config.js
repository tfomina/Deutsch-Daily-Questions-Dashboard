const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  devtool: "inline-source-map",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.min.js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  devServer: {
    contentBase: path.join(__dirname, "src"),
    compress: true,
    port: 3000,
    hot: true,
    historyApiFallback: true,
    watchContentBase: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(woff|woff2|ttf|eot|svg)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: "./src/index.html",
      title: "Deutsch Daily Questions Dashboard",
    }),
  ],
};
