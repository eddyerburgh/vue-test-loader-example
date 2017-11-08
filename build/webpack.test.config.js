const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, "../src/App.vue"),
  output: {
    filename: "../dist/bundle.js"
  },
  module: {
    // module.rules is the same as module.loaders in 1.x
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'test': 'vue-test-loader'
          },
        }
      }
    ]
  }
}
