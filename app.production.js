const htmlStandards = require('reshape-standard')
const cssStandards = require('spike-css-standards')
const optimize = require('spike-optimize')

module.exports = {
  devtool: false,
  plugins: [
    ...optimize({
      scopeHoisting: true,
      minify: true,
      aggressiveSplitting: true
    })
  ]
}
