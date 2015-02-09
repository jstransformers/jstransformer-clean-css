'use strict';

var Cleaner  = require('clean-css');
var defaultCleaner = new Cleaner();

var versions = {};

exports.name = 'remarkable';
exports.outputFormat = 'html';
exports.render = function (str, options) {
  var cleaner;
  if (!options ||
      (typeof options === 'object' && Object.keys(options).length === 0)) {
    cleaner = defaultCleaner;
  } else {
    cleaner = new Cleaner(options);
  }
  return cleaner.minify(str).styles;
};