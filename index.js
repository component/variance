
/**
 * Module dependencies.
 */

var toFunction = require('to-function')
  , mean = require('mean');

/**
 * Return the variance of `arr` with optional callback `fn(val, i)`.
 *
 * @param {Array} arr
 * @param {Function} [fn]
 * @return {Number}
 * @api public
 */

module.exports = function(arr, fn){
  if (0 == arr.length) return null;

  var m = mean(arr);
  var d = [];

  if (fn) {
    fn = toFunction(fn);
    for (var i = 0; i < arr.length; i++) {
      d.push(Math.pow(fn(arr[i], i) - m, 2));
    }
  } else {
    for (var i = 0; i < arr.length; i++) {
      d.push(Math.pow(arr[i] - m, 2));
    }
  }

  return mean(d);
};
