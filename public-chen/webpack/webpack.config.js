var webpack = require('webpack')
var path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// console.log(path.join(__dirname + '/../dist'))
module.exports = {
  entry:{
    home:'./js/home.js',
    index:'./js/index.js'
  },
  output: {
    path:path.join(__dirname + '/../dist'),
    filename:'[name].js'
    //publicPath:"/assets/",
  },
  module: {
    rules: [
      { 
        test: /\.txt$/, use: 'raw-loader' 
      },
      {
        test: /\.js$|\.jsx$/,
        use: {
          loader:'babel-loader',
          options: {
            'presets': [
              ['env', {
                targets: {
                  browsers: ['ie >= 9']
                },
                // debug: true,
                useBuiltIns: true
              }],
              'react',
              'stage-0'
            ],
            'plugins': [
              'transform-decorators-legacy',
              ['import', [{
                'libraryName': 'antd',
                'style': true
              }]]
            ]
          },
        },
        include: path.join(__dirname, '../src'),
        exclude: /node_modules/
      },
    ]
  },
  devtool: 'eval-source-map',
  devServer:{
    contentBase:'./dist',
    hot: true,
    host: '127.0.0.1',
    historyApiFallback: true
    // proxy:{
    //   '*':{
    //     target:'http://127.0.0.1:8848'
    //   }
    // }
    //path.join(__dirname + '/../dist')
  }
  // plugins: [
  //   new CleanWebpackPlugin(['dist']),
  //   new HtmlWebpackPlugin({
  //     title: 'Hot Module Replacement'
  //   }),
  //   new webpack.NamedModulesPlugin(),
  //   new webpack.HotModuleReplacementPlugin()
  // ]
}