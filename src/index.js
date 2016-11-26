'use strict';

var compatible = require('blear.utils.compatible');

var matchesSelector = compatible.js('matchesSelector', document.body);

// if (typeof CLASSICAL !== 'undefined' && CLASSICAL === true) {
//     exports.isMatched = function (el, selector) {
//         // http://tanalin.com/en/blog/2012/12/matches-selector-ie8/
//         var els = el.parentNode.querySelectorAll(selector),
//             count = els.length;
//
//         for (var i = 0; i < count; i++) {
//             if (els[i] === el) {
//                 return true;
//             }
//         }
//
//         return false;
//     };
// } else {
// iE9 支持
exports.isMatched = function (el, selector) {
    return el[matchesSelector](selector);
};
// }