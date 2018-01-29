var webpack = require('webpack')
var path = require('path')


// console.log(path.join(__dirname + '/../dist'))
module.exports = {
  entry:{
    home:'./js/home.js',
    index:'./js/index.js'
  },
  output: {
    path:path.join(__dirname + '/../dist'),
    filename:'[name].js',
    publicPath: '/chen/'
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
  devServer:{
    contentBase: path.join(__dirname + '/../dist') ,
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
}