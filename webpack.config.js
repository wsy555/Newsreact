var path = require('path');
var webpack = require('webpack');
module.exports = {
  devtool: 'eval-source-map',
  entry:  ['webpack/hot/dev-server', __dirname + '/app/main.js'],
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js',
  },
  module: {
      loaders: [
          {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              loader: 'babel-loader'
          },
          {test:/\.css$/,loader:'style-loader!css'},

          {test: /\.less$/,
              loader: 'style-loader!css-loader!less-loader'
          },
          {test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
              loader: "url-loader?limit=10000"
          },
          {test: /.(jpg|png|gif|svg)$/,
              loader: "url-loader"
          },
          {test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
              loader: 'file-loader'
          }
      ]
  },
    plugins: [
        new webpack.HotModuleReplacementPlugin()//热模块替换插件
    ],
    devtool:"source-map",
    //webpack-dev-server配置
    devServer: {
        contentBase: './build',
        historyApiFallback: true,
        inline: true,
        port: 8080
    }
};