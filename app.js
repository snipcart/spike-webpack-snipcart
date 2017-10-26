const htmlStandards = require('reshape-standard')
const cssStandards = require('spike-css-standards')
const jsStandards = require('spike-js-standards')
const pageId = require('spike-page-id')
const sugarml = require('sugarml')
const sugarss = require('sugarss')
const products = require('./assets/data/products/index.js')
const isProduction = process.env.SPIKE_ENV === 'production'

module.exports = {
  devtool: 'source-map',
  matchers: { html: '*(**/)*.sgr', css: '*(**/)*.sss' },
  ignore: ['**/layout.sgr', '**/_*', '**/.*', 'readme.md', 'yarn.lock'],
  reshape: htmlStandards({
    locals: ctx => {
      return {
        products: products,
        APIkey: 'YjdiNWIyOTUtZTIyMy00MWMwLTkwNDUtMzI1M2M2NTgxYjE0'
      }
    },
    minify: isProduction,
    parser: sugarml
  }),
  postcss: cssStandards({ minify: isProduction, parser: sugarss }),
  babel: jsStandards()
}
