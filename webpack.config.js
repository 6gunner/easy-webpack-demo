const easy = require('easywebpack')
const webpackConfig = easy.getWebpackConfig({
  env: process.env.BUILD_ENV, // 支持dev, test, prod 模式
  framework: 'js',
  entry: {
    app: 'src/lib.js',
  },
})
console.log(webpackConfig)
module.exports = webpackConfig
