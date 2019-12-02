// в этом файле описываются конфигурации для нашего веб пака
const path = require("path"); // делает рекваир (практически все что мы прописываем через рекваир, это мы обращаемся к package.json);
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  // здесь экспортируем все наши настройки
  entry: {
    // задается точка входа - указываем, что это объект и в этом объекте мы описываем сам путь к входному файлу JS
    app: "./src/index.js" // это стандартный путь (заходим в папку src и создаем index.js, в котором подключаются все библиотеки)
  },
  output: {
    // точка выхода,
    filename: "[name].js", // почему [name]? потому что, если у нас будет несколько точек входа, то вылезит ошибка. Чтобыв ее не было, пишем [name], который берется из текущего ярлыка
    path: path.resolve(__dirname, "./dist"), // путь, здесь используем тот самый пакет, который устанавливали path. Зачем он? - webpack ищет путь точку входа с самого корня, если это винда то с диска ц и так далее. И для того, чтобы он искал этот путь наиболее корректно. Поэтому мы к нему обращаемся и через метод resolve передаем два параметра 1-ый дирнайм, и название папки дист, чтобы она создавалась здесь
    publicPath: "/dist" // нужен для дев сервера, чтобы он корректно работал
  },
  module: {
    rules: [
      {
        //правила
        test: /\.js$/, //регулярка на то, что мы будем проверять. Обратились через легулярку ко всем js файлам
        loader: "babel-loader", // подключаем лодер
        exclude: "/node_modules" //чтобы ускорить нашу компиляцию, мы будем исключать какие-либо файлы
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader, // каждый плагин надо регистрировать. Это мы делаем в конце (см. строку 42);
          {
            loader: "css-loader",
            options: { sourceMap: true }
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              config: { path: "src/js/postcss.config.js" }
            }
          },
          {
            loader: "sass-loader",
            options: { sourceMap: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader, // каждый плагин надо регистрировать. Это мы делаем в конце (см. строку 42);
          {
            loader: "css-loader",
            options: { sourceMap: true }
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              config: { path: "src/js/postcss.config.js" }
            }
          }
        ]
      }
    ]
  },
  devServer: {
    overlay: true // отвечает за показ ошибок, чтобы они выводились не в консоли, а на экране браузера
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css"
    })
  ]
};
