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



if (typeof CLASSICAL !== 'undefined' && CLASSICAL === true) {
    exports.prevElement = function (el) {
        while (el = el.previousSibling) {
            if (el.nodeType === 1) {
                return el;
            }
        }

        return null;
    };
    var nextElement = exports.nextElement = function (el) {
        while (el = el.nextSibling) {
            if (el.nodeType === 1) {
                return el;
            }
        }

        return null;
    };
    exports.firstElementChild = function (el) {
        var firstChild = el.firstChild;

        if (!firstChild) {
            return firstChild;
        }

        if (firstChild.nodeType === 1) {
            return firstChild;
        }

        return nextElement(firstChild);
    };
} else {
    exports.prevElement = function (el) {
        return el.previousElementSibling;
    };
    exports.nextElement = function (el) {
        return el.nextElementSibling;
    };
    exports.firstElementChild = function (el) {
        return el.firstElementChild;
    };
}