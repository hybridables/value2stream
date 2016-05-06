/*!
 * value2stream <https://github.com/hybridables/value2stream>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var isPromise = require('is-promise')
var NativePromise = require('native-promise')
var promise2stream = require('promise2stream')

module.exports = function value2stream (val, opts, Promize) {
  if (typeof opts === 'function') {
    Promize = opts
    opts = {}
  }
  if (isPromise(val)) {
    return promise2stream(val, opts)
  }

  Promize = NativePromise || Promize
  var promise = new Promize(function (resolve) {
    resolve(val)
  })

  return promise2stream(promise, opts)
}
