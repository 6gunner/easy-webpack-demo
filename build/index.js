//build/index.js
// 利用webpack-tool来查看webpack编译后的结果文件。
const WebpackTool = require('webpack-tool')
const VIEW = process.env.VIEW

const webpackTool = new WebpackTool({
  devServer: {
    before: (before) => {
      // register koa middleware
    },
    after: (app) => {
      // register koa middleware
    },
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        pathRewrite: { '^/api': '' },
      },
    },
    historyApiFallback: {
      index: '/index.html',
    },
  },
})

const webpackConfig = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: {
    index: './src/index.js',
  },
  module: {
    rules: [],
  },
  plugins: [],
}

if (VIEW === 'development') {
  // start webpack build and show build result ui view
  webpackTool.server(webpackConfig)
} else {
  // if you want to show build result ui view for build mode, please set  process.env.BUILD_VIEW=true
  webpackTool.build(webpackConfig)
}
