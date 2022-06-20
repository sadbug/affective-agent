module.exports = {
    resolve:{
        fallback:{ "path": require.resolve("path-browserify") }
    }
}
const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
}