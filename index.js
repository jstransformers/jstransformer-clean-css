'use strict'

const Cleaner = require('clean-css')

const defaultCleaner = new Cleaner()

exports.name = 'clean-css'
exports.inputFormats = ['clean-css', 'cssmin']
exports.outputFormat = 'css'

function getCleaner(options) {
  if (!options ||
      (typeof options === 'object' && Object.keys(options).length === 0)) {
    return defaultCleaner
  }
  return new Cleaner(options)
}

exports.render = function (str, options) {
  return getCleaner(options).minify(str).styles
}

exports.renderAsync = function (str, options) {
  return new Promise((resolve, reject) => {
    getCleaner(options).minify(str, (err, minified) => {
      if (err) {
        reject(err)
      } else {
        resolve(minified.styles)
      }
    })
  })
}
