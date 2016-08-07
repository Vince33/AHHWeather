 var webpack = require('webpack');

module.exports = {
  devtool: 'eval-source-map',
  entry:[
    './src/components/main.js',
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:4200/'
  ],

  output:{
    path:'build',
    filename:'index.js'
  },
  devServer:{
    hot: true,
    inline:true,
    port:4200
  },
  plugins: [
  new webpack.HotModuleReplacementPlugin(),
  ],
  module:{
    loaders:[
      {
        test:/\.js$/,
        exclude: /node_modules/,
        loader:'babel',
        query:{
          presets: ['es2015','stage-0','react']
        }
      }
    ]
  }
}
