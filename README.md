# jstransformer-clean-css

[clean-css](https://github.com/jakubpawlowicz/clean-css) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-clean-css/master.svg)](https://travis-ci.org/jstransformers/jstransformer-clean-css)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-clean-css/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-clean-css)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-clean-css/master.svg)](http://david-dm.org/jstransformers/jstransformer-clean-css)
[![Greenkeeper badge](https://badges.greenkeeper.io/jstransformers/jstransformer-clean-css.svg)](https://greenkeeper.io/)
[![NPM version](https://img.shields.io/npm/v/jstransformer-clean-css.svg)](https://www.npmjs.org/package/jstransformer-clean-css)

## Installation

    npm install jstransformer-clean-css

## API

```js
var clean = require('jstransformer')(require('jstransformer-clean-css'))

clean.render('a { font-weight: bold; }').body
//=> 'a{font-weight:bold;}'
```

## License

MIT
