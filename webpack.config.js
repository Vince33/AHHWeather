module.exports = {
  entry:'./src/components/main.js',
  output:{
    path:'./',
    filename:'index.js'
  },
  devServer:{
    inline:true,
    port:4200
  },
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
