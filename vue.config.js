// vue.config.js
// const CompressionPlugin = require('compression-webpack-plugin')
module.exports = {
  outputDir: 'src/main/resources/static',
  productionSourceMap: false,
  transpileDependencies: ['resize-detector'],
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "~@/styles/variables.scss";`
      }
    }
  }
}
