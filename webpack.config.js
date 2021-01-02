const path = require('path')

module.exports = {
  entry: './JS/script.js',
  output: {
    path: path.resolve(__dirname, 'Public'), 
    filename: 'bundle.js' 
  },
  mode: "development",
  devServer: {
    open: true,
    contentBase: path.join(__dirname, 'Public'),
    watchContentBase: true,
    // compress: true,
    // port: 9000
  }
};