'use strict';

var Cleaner  = require('clean-css');
var defaultCleaner = new Cleaner();
var Promise = require('promise');

exports.name = 'clean-css';
exports.inputFormats = ['clean-css', 'css', 'cssmin'];
exports.outputFormat = 'css';

function getCleaner (options) {
  if (!options ||
      (typeof options === 'object' && Object.keys(options).length === 0)) {
    return defaultCleaner;
  } else {
    return new Cleaner(options);
  }
}

exports.render = function (str, options) {
  return getCleaner(options).minify(str).styles;
};

exports.renderAsync = function (str, options) {
  return new Promise(function (fulfill, reject) {
    getCleaner(options).minify(str, function (err, minified) {
      if (err) {
        reject(err);
      }
      else {
        fulfill(minified.styles);
      }
    });
  });
};
