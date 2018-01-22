var webpack = require('webpack')
var path = require('path')



module.exports = {
  entry:{
    home:'./js/home.js',
    index:'./js/index.js'
  },
  output: {
    path:path.join(__dirname + '/../dist'),
    filename:'[name].js',
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
    contentBase:'./dist',
    hot: true,
    host: '127.0.0.1',
    historyApiFallback: true
  }
}