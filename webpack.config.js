const resolve = require('path').resolve
const webpack = require('webpack')
// const HtmlWebpackPlugin = require('html-webpack-plugin')

const BabiliPlugin=require("babili-webpack-plugin");

const url = require('url')
const publicPath = ''

module.exports = (options = {}) => ({
  entry: {
    vendor: './src/vendor',
    index: './src/main.js'
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: options.dev ? '[name].js' : '[name].js?[chunkhash]',
    chunkFilename: '[id].js?[chunkhash]',
    publicPath: options.dev ? '/assets/' : publicPath
  },
  module: {
    rules: [{
        test: /\.vue$/,
        use: ['vue-loader']
      },
      {
        test: /\.js$/,
        use: ['babel-loader'],
       // exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        }]
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    // new HtmlWebpackPlugin({
    //   minify: {
    //     //是否对大小写敏感，默认false
    //    caseSensitive: true,
       
    //    //是否简写boolean格式的属性如：disabled="disabled" 简写为disabled  默认false
    //    collapseBooleanAttributes: true,
       
    //    //是否去除空格，默认false
    //    collapseWhitespace: true,
       
    //    //是否压缩html里的css（使用clean-css进行的压缩） 默认值false；
    //    minifyCSS: true,
       
    //    //是否压缩html里的js（使用uglify-js进行的压缩）
    //    minifyJS: true,
       
    //    //Prevents the escaping of the values of attributes
    //    preventAttributesEscaping: true,
       
    //    //是否移除属性的引号 默认false
    //    removeAttributeQuotes: false,
       
    //    //是否移除注释 默认false
    //    removeComments: true,
       
    //    //从脚本和样式删除的注释 默认false
    //    removeCommentsFromCDATA: true,
       
    //    //是否删除空属性，默认false
    //    removeEmptyAttributes: true,
       
    //    //  若开启此项，生成的html中没有 body 和 head，html也未闭合
    //    removeOptionalTags: false, 
       
    //    //删除多余的属性
    //    removeRedundantAttributes: true, 
       
    //    //删除script的类型属性，在h5下面script的type默认值：text/javascript 默认值false
    //    removeScriptTypeAttributes: true,
       
    //    //删除style的类型属性， type="text/css" 同上
    //    removeStyleLinkTypeAttributes: true,
       
    //    //使用短的文档类型，默认false
    //    useShortDoctype: true,
    //    },
    //   template: 'src/index.html'
    // })
    new BabiliPlugin()
  ],
  resolve: {
    alias: {
      '~': resolve(__dirname, 'src')
    },
    extensions: ['.js', '.vue', '.json', '.css']
  },
  devServer: {
    host: '127.0.0.1',
    port: 8010,
    proxy: {
      '/api/': {
        target: 'http://127.0.0.1:8080',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
    historyApiFallback: {
      index: url.parse(options.dev ? '/assets/' : publicPath).pathname
    }
  },
  devtool: options.dev ? '#cheap-module-eval-source-map' : '#cheap-module-source-map'
})
