const path = require("path");
module.exports = {
  entry: {
    app: "./src/index.js"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist"
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     filename: "index.html",
  //     template: "./index.html"
  //   })
  // ],
  devServer: {
    // contentBase: path.resolve(__dirname, "dist"),
    overlay: true
  }
};
