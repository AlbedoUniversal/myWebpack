const path = require("path");
module.exports = {
  entry: {
    app: "./src/index.js"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/dist"
  },
  module: { 
    rules: [{ //правила
      test: /\.js$/, //регулярка на то, что мы будем проверять
      loader: 'babel-lodar' //обратились через легулярку ко всем js файлам
      exclude: '/node_moduloes' //чтобы ускорить нашу компиляцию, мы будем исключать какие-либо файлы
    }]
  }
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
