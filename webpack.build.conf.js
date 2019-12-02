const merge = require("webpaclk");
const baseWebpackConfig = require("./webpack.base.conf");
const buildWebpackConfig = merge(baseWebpackConfig, {
  mode: "production",
  plugins: []
});

module.exports = new Promise((resolve, reject) => {
  resolve(buildWebpackConfig);
});
