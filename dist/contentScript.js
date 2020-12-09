/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!*********************************************************************************************!*\
  !*** /Users/mazexin/tron/TronLink/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!*************************************************************************************************!*\
  !*** /Users/mazexin/tron/TronLink/node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!********************************************************************************************!*\
  !*** /Users/mazexin/tron/TronLink/node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \********************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!******************************************************************************************!*\
  !*** /Users/mazexin/tron/TronLink/node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \******************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/createClass.js":
/*!***************************************************************************************!*\
  !*** /Users/mazexin/tron/TronLink/node_modules/@babel/runtime/helpers/createClass.js ***!
  \***************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/defineProperty.js":
/*!******************************************************************************************!*\
  !*** /Users/mazexin/tron/TronLink/node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \******************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!******************************************************************************************!*\
  !*** /Users/mazexin/tron/TronLink/node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \******************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/inherits.js":
/*!************************************************************************************!*\
  !*** /Users/mazexin/tron/TronLink/node_modules/@babel/runtime/helpers/inherits.js ***!
  \************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "../../node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!*************************************************************************************************!*\
  !*** /Users/mazexin/tron/TronLink/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!*******************************************************************************************!*\
  !*** /Users/mazexin/tron/TronLink/node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!*********************************************************************************************!*\
  !*** /Users/mazexin/tron/TronLink/node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!*****************************************************************************************************!*\
  !*** /Users/mazexin/tron/TronLink/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "../../node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "../../node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!******************************************************************************************!*\
  !*** /Users/mazexin/tron/TronLink/node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \******************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!*********************************************************************************************!*\
  !*** /Users/mazexin/tron/TronLink/node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "../../node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "../../node_modules/@babel/runtime/helpers/iterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "../../node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/typeof.js":
/*!**********************************************************************************!*\
  !*** /Users/mazexin/tron/TronLink/node_modules/@babel/runtime/helpers/typeof.js ***!
  \**********************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "../../node_modules/@babel/runtime/regenerator/index.js":
/*!*************************************************************************************!*\
  !*** /Users/mazexin/tron/TronLink/node_modules/@babel/runtime/regenerator/index.js ***!
  \*************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "../../node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "../../node_modules/dateformat/lib/dateformat.js":
/*!******************************************************************************!*\
  !*** /Users/mazexin/tron/TronLink/node_modules/dateformat/lib/dateformat.js ***!
  \******************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*
 * Date Format 1.2.3
 * (c) 2007-2009 Steven Levithan <stevenlevithan.com>
 * MIT license
 *
 * Includes enhancements by Scott Trenda <scott.trenda.net>
 * and Kris Kowal <cixar.com/~kris.kowal/>
 *
 * Accepts a date, a mask, or a date and a mask.
 * Returns a formatted version of the given date.
 * The date defaults to the current date/time.
 * The mask defaults to dateFormat.masks.default.
 */

(function(global) {
  'use strict';

  var dateFormat = (function() {
      var token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|"[^"]*"|'[^']*'/g;
      var timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g;
      var timezoneClip = /[^-+\dA-Z]/g;
  
      // Regexes and supporting functions are cached through closure
      return function (date, mask, utc, gmt) {
  
        // You can't provide utc if you skip other args (use the 'UTC:' mask prefix)
        if (arguments.length === 1 && kindOf(date) === 'string' && !/\d/.test(date)) {
          mask = date;
          date = undefined;
        }
  
        date = date || new Date;
  
        if(!(date instanceof Date)) {
          date = new Date(date);
        }
  
        if (isNaN(date)) {
          throw TypeError('Invalid date');
        }
  
        mask = String(dateFormat.masks[mask] || mask || dateFormat.masks['default']);
  
        // Allow setting the utc/gmt argument via the mask
        var maskSlice = mask.slice(0, 4);
        if (maskSlice === 'UTC:' || maskSlice === 'GMT:') {
          mask = mask.slice(4);
          utc = true;
          if (maskSlice === 'GMT:') {
            gmt = true;
          }
        }
  
        var _ = utc ? 'getUTC' : 'get';
        var d = date[_ + 'Date']();
        var D = date[_ + 'Day']();
        var m = date[_ + 'Month']();
        var y = date[_ + 'FullYear']();
        var H = date[_ + 'Hours']();
        var M = date[_ + 'Minutes']();
        var s = date[_ + 'Seconds']();
        var L = date[_ + 'Milliseconds']();
        var o = utc ? 0 : date.getTimezoneOffset();
        var W = getWeek(date);
        var N = getDayOfWeek(date);
        var flags = {
          d:    d,
          dd:   pad(d),
          ddd:  dateFormat.i18n.dayNames[D],
          dddd: dateFormat.i18n.dayNames[D + 7],
          m:    m + 1,
          mm:   pad(m + 1),
          mmm:  dateFormat.i18n.monthNames[m],
          mmmm: dateFormat.i18n.monthNames[m + 12],
          yy:   String(y).slice(2),
          yyyy: y,
          h:    H % 12 || 12,
          hh:   pad(H % 12 || 12),
          H:    H,
          HH:   pad(H),
          M:    M,
          MM:   pad(M),
          s:    s,
          ss:   pad(s),
          l:    pad(L, 3),
          L:    pad(Math.round(L / 10)),
          t:    H < 12 ? dateFormat.i18n.timeNames[0] : dateFormat.i18n.timeNames[1],
          tt:   H < 12 ? dateFormat.i18n.timeNames[2] : dateFormat.i18n.timeNames[3],
          T:    H < 12 ? dateFormat.i18n.timeNames[4] : dateFormat.i18n.timeNames[5],
          TT:   H < 12 ? dateFormat.i18n.timeNames[6] : dateFormat.i18n.timeNames[7],
          Z:    gmt ? 'GMT' : utc ? 'UTC' : (String(date).match(timezone) || ['']).pop().replace(timezoneClip, ''),
          o:    (o > 0 ? '-' : '+') + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
          S:    ['th', 'st', 'nd', 'rd'][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10],
          W:    W,
          N:    N
        };
  
        return mask.replace(token, function (match) {
          if (match in flags) {
            return flags[match];
          }
          return match.slice(1, match.length - 1);
        });
      };
    })();

  dateFormat.masks = {
    'default':               'ddd mmm dd yyyy HH:MM:ss',
    'shortDate':             'm/d/yy',
    'mediumDate':            'mmm d, yyyy',
    'longDate':              'mmmm d, yyyy',
    'fullDate':              'dddd, mmmm d, yyyy',
    'shortTime':             'h:MM TT',
    'mediumTime':            'h:MM:ss TT',
    'longTime':              'h:MM:ss TT Z',
    'isoDate':               'yyyy-mm-dd',
    'isoTime':               'HH:MM:ss',
    'isoDateTime':           'yyyy-mm-dd\'T\'HH:MM:sso',
    'isoUtcDateTime':        'UTC:yyyy-mm-dd\'T\'HH:MM:ss\'Z\'',
    'expiresHeaderFormat':   'ddd, dd mmm yyyy HH:MM:ss Z'
  };

  // Internationalization strings
  dateFormat.i18n = {
    dayNames: [
      'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat',
      'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ],
    monthNames: [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
      'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ],
    timeNames: [
      'a', 'p', 'am', 'pm', 'A', 'P', 'AM', 'PM'
    ]
  };

function pad(val, len) {
  val = String(val);
  len = len || 2;
  while (val.length < len) {
    val = '0' + val;
  }
  return val;
}

/**
 * Get the ISO 8601 week number
 * Based on comments from
 * http://techblog.procurios.nl/k/n618/news/view/33796/14863/Calculate-ISO-8601-week-and-year-in-javascript.html
 *
 * @param  {Object} `date`
 * @return {Number}
 */
function getWeek(date) {
  // Remove time components of date
  var targetThursday = new Date(date.getFullYear(), date.getMonth(), date.getDate());

  // Change date to Thursday same week
  targetThursday.setDate(targetThursday.getDate() - ((targetThursday.getDay() + 6) % 7) + 3);

  // Take January 4th as it is always in week 1 (see ISO 8601)
  var firstThursday = new Date(targetThursday.getFullYear(), 0, 4);

  // Change date to Thursday same week
  firstThursday.setDate(firstThursday.getDate() - ((firstThursday.getDay() + 6) % 7) + 3);

  // Check if daylight-saving-time-switch occurred and correct for it
  var ds = targetThursday.getTimezoneOffset() - firstThursday.getTimezoneOffset();
  targetThursday.setHours(targetThursday.getHours() - ds);

  // Number of weeks between target Thursday and first Thursday
  var weekDiff = (targetThursday - firstThursday) / (86400000*7);
  return 1 + Math.floor(weekDiff);
}

/**
 * Get ISO-8601 numeric representation of the day of the week
 * 1 (for Monday) through 7 (for Sunday)
 * 
 * @param  {Object} `date`
 * @return {Number}
 */
function getDayOfWeek(date) {
  var dow = date.getDay();
  if(dow === 0) {
    dow = 7;
  }
  return dow;
}

/**
 * kind-of shortcut
 * @param  {*} val
 * @return {String}
 */
function kindOf(val) {
  if (val === null) {
    return 'null';
  }

  if (val === undefined) {
    return 'undefined';
  }

  if (typeof val !== 'object') {
    return typeof val;
  }

  if (Array.isArray(val)) {
    return 'array';
  }

  return {}.toString.call(val)
    .slice(8, -1).toLowerCase();
};



  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return dateFormat;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this);


/***/ }),

/***/ "../../node_modules/eventemitter3/index.js":
/*!************************************************************************!*\
  !*** /Users/mazexin/tron/TronLink/node_modules/eventemitter3/index.js ***!
  \************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty
  , prefix = '~';

/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @private
 */
function Events() {}

//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
  Events.prototype = Object.create(null);

  //
  // This hack is needed because the `__proto__` property is still inherited in
  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
  //
  if (!new Events().__proto__) prefix = false;
}

/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
 * Add a listener for a given event.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} once Specify if the listener is a one-time listener.
 * @returns {EventEmitter}
 * @private
 */
function addListener(emitter, event, fn, context, once) {
  if (typeof fn !== 'function') {
    throw new TypeError('The listener must be a function');
  }

  var listener = new EE(fn, context || emitter, once)
    , evt = prefix ? prefix + event : event;

  if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
  else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
  else emitter._events[evt] = [emitter._events[evt], listener];

  return emitter;
}

/**
 * Clear event by name.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} evt The Event name.
 * @private
 */
function clearEvent(emitter, evt) {
  if (--emitter._eventsCount === 0) emitter._events = new Events();
  else delete emitter._events[evt];
}

/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @public
 */
function EventEmitter() {
  this._events = new Events();
  this._eventsCount = 0;
}

/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @public
 */
EventEmitter.prototype.eventNames = function eventNames() {
  var names = []
    , events
    , name;

  if (this._eventsCount === 0) return names;

  for (name in (events = this._events)) {
    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  }

  if (Object.getOwnPropertySymbols) {
    return names.concat(Object.getOwnPropertySymbols(events));
  }

  return names;
};

/**
 * Return the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Array} The registered listeners.
 * @public
 */
EventEmitter.prototype.listeners = function listeners(event) {
  var evt = prefix ? prefix + event : event
    , handlers = this._events[evt];

  if (!handlers) return [];
  if (handlers.fn) return [handlers.fn];

  for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
    ee[i] = handlers[i].fn;
  }

  return ee;
};

/**
 * Return the number of listeners listening to a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Number} The number of listeners.
 * @public
 */
EventEmitter.prototype.listenerCount = function listenerCount(event) {
  var evt = prefix ? prefix + event : event
    , listeners = this._events[evt];

  if (!listeners) return 0;
  if (listeners.fn) return 1;
  return listeners.length;
};

/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @public
 */
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return false;

  var listeners = this._events[evt]
    , len = arguments.length
    , args
    , i;

  if (listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

    switch (len) {
      case 1: return listeners.fn.call(listeners.context), true;
      case 2: return listeners.fn.call(listeners.context, a1), true;
      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len -1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length
      , j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

      switch (len) {
        case 1: listeners[i].fn.call(listeners[i].context); break;
        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
        default:
          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
            args[j - 1] = arguments[j];
          }

          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};

/**
 * Add a listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  return addListener(this, event, fn, context, false);
};

/**
 * Add a one-time listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.once = function once(event, fn, context) {
  return addListener(this, event, fn, context, true);
};

/**
 * Remove the listeners of a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {*} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return this;
  if (!fn) {
    clearEvent(this, evt);
    return this;
  }

  var listeners = this._events[evt];

  if (listeners.fn) {
    if (
      listeners.fn === fn &&
      (!once || listeners.once) &&
      (!context || listeners.context === context)
    ) {
      clearEvent(this, evt);
    }
  } else {
    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
      if (
        listeners[i].fn !== fn ||
        (once && !listeners[i].once) ||
        (context && listeners[i].context !== context)
      ) {
        events.push(listeners[i]);
      }
    }

    //
    // Reset the array, or remove it completely if we have no more listeners.
    //
    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
    else clearEvent(this, evt);
  }

  return this;
};

/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {(String|Symbol)} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  var evt;

  if (event) {
    evt = prefix ? prefix + event : event;
    if (this._events[evt]) clearEvent(this, evt);
  } else {
    this._events = new Events();
    this._eventsCount = 0;
  }

  return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;

//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;

//
// Expose the module.
//
if (true) {
  module.exports = EventEmitter;
}


/***/ }),

/***/ "../../node_modules/extensionizer/extension-instance.js":
/*!*************************************************************************************!*\
  !*** /Users/mazexin/tron/TronLink/node_modules/extensionizer/extension-instance.js ***!
  \*************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

const apis = [
  'alarms',
  'bookmarks',
  'browserAction',
  'commands',
  'contextMenus',
  'cookies',
  'downloads',
  'events',
  'extension',
  'extensionTypes',
  'history',
  'i18n',
  'idle',
  'notifications',
  'pageAction',
  'runtime',
  'storage',
  'tabs',
  'webNavigation',
  'webRequest',
  'windows',
]

const hasChrome = typeof chrome !== 'undefined'
const hasWindow = typeof window !== 'undefined'
const hasBrowser = typeof browser !== 'undefined'

function Extension () {
  const _this = this

  apis.forEach(function (api) {

    _this[api] = null

    if (hasChrome) {
      try {
        if (chrome[api]) {
          _this[api] = chrome[api]
        }
      } catch (e) {
      }
    }

    if (hasWindow) {
      try {
        if (window[api]) {
          _this[api] = window[api]
        }
      } catch (e) {
      }
    }

    if (hasBrowser) {
      try {
        if (browser[api]) {
          _this[api] = browser[api]
        }
      } catch (e) {
      }
      try {
        _this.api = browser.extension[api]
      } catch (e) {
      }
    }
  })

  if (hasBrowser) {
    try {
      if (browser && browser.runtime) {
        this.runtime = browser.runtime
      }
    } catch (e) {
    }

    try {
      if (browser && browser.browserAction) {
        this.browserAction = browser.browserAction
      }
    } catch (e) {
    }
  }

}

module.exports = Extension


/***/ }),

/***/ "../../node_modules/extensionizer/index.js":
/*!************************************************************************!*\
  !*** /Users/mazexin/tron/TronLink/node_modules/extensionizer/index.js ***!
  \************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

/* Extension.js
 *
 * A module for unifying browser differences in the WebExtension API.
 *
 * Initially implemented because Chrome hides all of their WebExtension API
 * behind a global `chrome` variable, but we'd like to start grooming
 * the code-base for cross-browser extension support.
 *
 * You can read more about the WebExtension API here:
 * https://developer.mozilla.org/en-US/Add-ons/WebExtensions
 */

const Extension = __webpack_require__(/*! ./extension-instance */ "../../node_modules/extensionizer/extension-instance.js")
module.exports = new Extension()


/***/ }),

/***/ "../../node_modules/regenerator-runtime/runtime.js":
/*!********************************************************************************!*\
  !*** /Users/mazexin/tron/TronLink/node_modules/regenerator-runtime/runtime.js ***!
  \********************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "../../node_modules/uuid/lib/bytesToUuid.js":
/*!*************************************************************************!*\
  !*** /Users/mazexin/tron/TronLink/node_modules/uuid/lib/bytesToUuid.js ***!
  \*************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([bth[buf[i++]], bth[buf[i++]], 
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]]]).join('');
}

module.exports = bytesToUuid;


/***/ }),

/***/ "../../node_modules/uuid/lib/rng-browser.js":
/*!*************************************************************************!*\
  !*** /Users/mazexin/tron/TronLink/node_modules/uuid/lib/rng-browser.js ***!
  \*************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),

/***/ "../../node_modules/uuid/v4.js":
/*!************************************************************!*\
  !*** /Users/mazexin/tron/TronLink/node_modules/uuid/v4.js ***!
  \************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "../../node_modules/uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "../../node_modules/uuid/lib/bytesToUuid.js");

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),

/***/ "../lib/EventChannel.js":
/*!******************************!*\
  !*** ../lib/EventChannel.js ***!
  \******************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../node_modules/@babel/runtime/helpers/inherits.js"));

var _eventemitter = _interopRequireDefault(__webpack_require__(/*! eventemitter3 */ "../../node_modules/eventemitter3/index.js"));

var EventChannel =
/*#__PURE__*/
function (_EventEmitter) {
  (0, _inherits2["default"])(EventChannel, _EventEmitter);

  function EventChannel() {
    var _this;

    var channelKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    (0, _classCallCheck2["default"])(this, EventChannel);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(EventChannel).call(this));
    if (!channelKey) throw 'No channel scope provided';
    _this._channelKey = channelKey;

    _this._registerEventListener();

    return _this;
  }

  (0, _createClass2["default"])(EventChannel, [{
    key: "_registerEventListener",
    value: function _registerEventListener() {
      var _this2 = this;

      window.addEventListener('message', function (_ref) {
        var _ref$data = _ref.data,
            _ref$data$isTronLink = _ref$data.isTronLink,
            isTronLink = _ref$data$isTronLink === void 0 ? false : _ref$data$isTronLink,
            message = _ref$data.message,
            source = _ref$data.source;
        if (!isTronLink || !message && !source) return;
        if (source === _this2._channelKey) return;
        var action = message.action,
            data = message.data;

        _this2.emit(action, data);
      });
    }
  }, {
    key: "send",
    value: function send() {
      var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (!action) return {
        success: false,
        error: 'Function requires action {string} parameter'
      };
      window.postMessage({
        message: {
          action: action,
          data: data
        },
        source: this._channelKey,
        isTronLink: true
      }, '*');
    }
  }]);
  return EventChannel;
}(_eventemitter["default"]);

var _default = EventChannel;
exports["default"] = _default;

/***/ }),

/***/ "../lib/MessageDuplex/handlers/child.js":
/*!**********************************************!*\
  !*** ../lib/MessageDuplex/handlers/child.js ***!
  \**********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../node_modules/@babel/runtime/helpers/defineProperty.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../node_modules/@babel/runtime/helpers/inherits.js"));

var _eventemitter = _interopRequireDefault(__webpack_require__(/*! eventemitter3 */ "../../node_modules/eventemitter3/index.js"));

var _v = _interopRequireDefault(__webpack_require__(/*! uuid/v4 */ "../../node_modules/uuid/v4.js"));

var _logger = _interopRequireDefault(__webpack_require__(/*! @tronlink/lib/logger */ "../lib/logger.js"));

var _extensionizer = _interopRequireDefault(__webpack_require__(/*! extensionizer */ "../../node_modules/extensionizer/index.js"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var logger = new _logger["default"]('MessageDuplex.Child');

var MessageDuplexChild =
/*#__PURE__*/
function (_EventEmitter) {
  (0, _inherits2["default"])(MessageDuplexChild, _EventEmitter);

  function MessageDuplexChild() {
    var _this;

    var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    (0, _classCallCheck2["default"])(this, MessageDuplexChild);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(MessageDuplexChild).call(this));
    if (!['tab', 'popup'].includes(type)) throw new Error("MessageDuplexChild expects a source type of either tab or popup, instead \"".concat(type, "\" was provided"));
    _this.type = type;
    _this.incoming = new Map(); // Incoming message replies

    _this.outgoing = new Map(); // Outgoing message replies

    _this.messageListener = false;
    _this.disconnectListener = false;
    _this.extensionID = _extensionizer["default"].runtime.id;

    _this.resetGovernor();

    _this.connectToHost();

    _this.connectionGovernor();

    return _this;
  }

  (0, _createClass2["default"])(MessageDuplexChild, [{
    key: "connectToHost",
    value: function connectToHost() {
      var _this2 = this;

      this.channel = _extensionizer["default"].runtime.connect(
      /*this.extensionID, */
      {
        name: this.type
      });
      this.governor.isConnected = true;
      this.messageListener = this.channel.onMessage.addListener(function (message) {
        _this2.handleMessage(message);
      });
      this.disconnectListener = this.channel.onDisconnect.addListener(function () {
        var error = _this2.channel.error || _extensionizer["default"].lastError || 'Unknown disconnect';
        logger.error('Lost connection to MessageDuplexHost:', error);
        _this2.governor.isConnected = false;

        _this2.governor.reconnect();
      });
    }
  }, {
    key: "resetGovernor",
    value: function resetGovernor() {
      if (this.governor && this.governor.connectionEstablisher.func) clearInterval(this.connectionGovernor.connectionEstablisher.func);
      this.governor = {
        isConnected: false,
        hasTimedOut: false,
        // after connectionEstablisher.remaining = 0
        connectionEstablisher: {
          func: false,
          remaining: 5 // try 5 times, 1 second span

        },
        queue: [],
        reconnect: function reconnect() {
          logger.warn('MessageDuplexChild requested reconnect');
        }
      }; // on disconnect call:
      // - this.channel.onDisconnect.removeListener(this.disconnectListener);
      // - this.channel.onMessage.removeListener(this.messageListener);
    }
  }, {
    key: "connectionGovernor",
    value: function connectionGovernor() {
      if (this.isHost) throw new Error('Host port cannot establish governor status'); // Check if extension is established here
      // Add error/disconnect listener here
      // if !this.governor.isConnected, immedietly invoke reconnection timeout
      // This function will check for disconnects, and attempt to re-establish
      // communication. It will also queue any messages during disconnection
      // for a maximum of 5 seconds before returning an error status on all messages.
    }
  }, {
    key: "handleMessage",
    value: function handleMessage(_ref) {
      var _this3 = this;

      var action = _ref.action,
          data = _ref.data,
          messageID = _ref.messageID,
          _ref$noAck = _ref.noAck,
          noAck = _ref$noAck === void 0 ? false : _ref$noAck;
      // logger.info('Received new message', { action, data, messageID });
      if (action == 'messageReply') return this.handleReply(data);
      if (noAck) return this.emit(action, data);
      this.incoming.set(messageID, function (res) {
        return _this3.send('messageReply', _objectSpread({
          messageID: messageID
        }, res), false);
      });
      this.emit(action, {
        resolve: function resolve(res) {
          if (!_this3.incoming.get(messageID)) return logger.warn("Message ".concat(messageID, " expired"));

          _this3.incoming.get(messageID)({
            error: false,
            res: res
          });

          _this3.incoming["delete"](messageID);
        },
        reject: function reject(res) {
          if (!_this3.incoming.get(messageID)) return logger.warn("Message ".concat(messageID, " expired"));

          _this3.incoming.get(messageID)({
            error: true,
            res: res
          });

          _this3.incoming["delete"](messageID);
        },
        data: data
      });
    }
  }, {
    key: "handleReply",
    value: function handleReply(_ref2) {
      var messageID = _ref2.messageID,
          error = _ref2.error,
          res = _ref2.res;
      if (!this.outgoing.has(messageID)) return; // return logger.info(`Cannot find promise for message ${ messageID }`);

      if (error) this.outgoing.get(messageID)(Promise.reject(res));else this.outgoing.get(messageID)(res);
      this.outgoing["delete"](messageID);
    }
  }, {
    key: "send",
    value: function send(action, data) {
      var _this4 = this;

      var requiresAck = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var governor = this.governor;

      if (!governor.isConnected && !governor.hasTimedOut) {
        return new Promise(function (resolve, reject) {
          return governor.queue.push({
            action: action,
            data: data,
            resolve: resolve,
            reject: reject
          });
        });
      }

      if (!governor.isConnected && governor.hasTimedOut) return Promise.reject('Failed to establish connection to extension');
      if (!requiresAck) return this.channel.postMessage({
        action: action,
        data: data,
        noAck: true
      });
      return new Promise(function (resolve, reject) {
        var messageID = (0, _v["default"])();

        _this4.outgoing.set(messageID, resolve);

        _this4.channel.postMessage({
          action: action,
          data: data,
          messageID: messageID,
          noAck: false
        });
      });
    }
  }]);
  return MessageDuplexChild;
}(_eventemitter["default"]);

var _default = MessageDuplexChild;
exports["default"] = _default;

/***/ }),

/***/ "../lib/MessageDuplex/handlers/host.js":
/*!*********************************************!*\
  !*** ../lib/MessageDuplex/handlers/host.js ***!
  \*********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "../../node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../node_modules/@babel/runtime/helpers/defineProperty.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../node_modules/@babel/runtime/helpers/inherits.js"));

var _eventemitter = _interopRequireDefault(__webpack_require__(/*! eventemitter3 */ "../../node_modules/eventemitter3/index.js"));

var _v = _interopRequireDefault(__webpack_require__(/*! uuid/v4 */ "../../node_modules/uuid/v4.js"));

var _logger = _interopRequireDefault(__webpack_require__(/*! @tronlink/lib/logger */ "../lib/logger.js"));

var _extensionizer = _interopRequireDefault(__webpack_require__(/*! extensionizer */ "../../node_modules/extensionizer/index.js"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var logger = new _logger["default"]('MessageDuplex.Host');

var MessageDuplexHost =
/*#__PURE__*/
function (_EventEmitter) {
  (0, _inherits2["default"])(MessageDuplexHost, _EventEmitter);

  function MessageDuplexHost() {
    var _this;

    (0, _classCallCheck2["default"])(this, MessageDuplexHost);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(MessageDuplexHost).call(this));
    _this.channels = new Map();
    _this.incoming = new Map(); // Incoming message replies

    _this.outgoing = new Map(); // Outgoing message replies

    _extensionizer["default"].runtime.onConnect.addListener(function (channel) {
      return _this.handleNewConnection(channel);
    });

    return _this;
  }

  (0, _createClass2["default"])(MessageDuplexHost, [{
    key: "handleNewConnection",
    value: function handleNewConnection(channel) {
      var _this2 = this;

      var extensionID = channel.sender.id;
      var uuid = (0, _v["default"])();

      if (extensionID !== _extensionizer["default"].runtime.id) {
        channel.disconnect();
        return logger.warn("Dropped unsolicited connection from ".concat(extensionID));
      }

      var name = channel.name,
          url = channel.sender.url; // logger.info(`New connection ${ name }:${ uuid } acquired`, channel);

      if (!this.channels.has(name)) this.emit("".concat(name, ":connect"));
      var channelList = this.channels.get(name) || new Map();
      var hostname = new URL(url).hostname;
      this.channels.set(name, channelList.set(uuid, {
        channel: channel,
        url: url
      }));
      channel.onMessage.addListener(function (message) {
        return _this2.handleMessage(name, _objectSpread({}, message, {
          hostname: hostname
        }));
      });
      channel.onDisconnect.addListener(function () {
        // logger.info(`Connection ${ name }:${ uuid } disconnected`);
        // Delete any pending requests that match this name + id
        var channelList = _this2.channels.get(name);

        if (!channelList) return;
        channelList["delete"](uuid);

        if (!channelList.size) {
          _this2.channels["delete"](name);

          _this2.emit("".concat(name, ":disconnect"));
        }
      });
    }
  }, {
    key: "handleMessage",
    value: function handleMessage(source, message) {
      var _this3 = this;

      // logger.info(`Received message from ${ source }:`, message);
      var _message$noAck = message.noAck,
          noAck = _message$noAck === void 0 ? false : _message$noAck,
          hostname = message.hostname,
          messageID = message.messageID,
          action = message.action,
          data = message.data;
      if (action == 'messageReply') return this.handleReply(data);
      if (source == 'tab' && !['tabRequest'].includes(action)) return logger.error("Droping unauthorized tab request: ".concat(action), data);
      if (noAck) return this.emit(action, {
        hostname: hostname,
        data: data
      });
      this.incoming.set(messageID, function (res) {
        return _this3.send(source, 'messageReply', _objectSpread({
          messageID: messageID
        }, res), false);
      });
      this.emit(action, {
        resolve: function resolve(res) {
          if (!_this3.incoming.get(messageID)) return logger.warn("Message ".concat(messageID, " expired"));

          _this3.incoming.get(messageID)({
            error: false,
            res: res
          });

          _this3.incoming["delete"](messageID);
        },
        reject: function reject(res) {
          if (!_this3.incoming.get(messageID)) return logger.warn("Message ".concat(messageID, " expired"));

          _this3.incoming.get(messageID)({
            error: true,
            res: res
          });

          _this3.incoming["delete"](messageID);
        },
        data: data,
        hostname: hostname
      });
    }
  }, {
    key: "handleReply",
    value: function handleReply(_ref) {
      var messageID = _ref.messageID,
          error = _ref.error,
          res = _ref.res;
      if (!this.outgoing.has(messageID)) return;
      if (error) this.outgoing.get(messageID)(Promise.reject(res));else this.outgoing.get(messageID)(res);
      this.outgoing["delete"](messageID);
    }
  }, {
    key: "broadcast",
    value: function broadcast(action, data) {
      var _this4 = this;

      var requiresAck = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      return Promise.all((0, _toConsumableArray2["default"])(this.channels.keys()).map(function (channelGroup) {
        return _this4.send(channelGroup, action, data, requiresAck);
      }));
    }
  }, {
    key: "send",
    value: function send() {
      var _this5 = this;

      var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var action = arguments.length > 1 ? arguments[1] : undefined;
      var data = arguments.length > 2 ? arguments[2] : undefined;
      var requiresAck = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
      if (!this.channels.has(target)) return; // return Promise.reject('Target channel does not exist');

      if (!requiresAck) {
        return this.channels.get(target).forEach(function (_ref2) {
          var channel = _ref2.channel;
          return channel.postMessage({
            action: action,
            data: data,
            noAck: true
          });
        });
      }

      return new Promise(function (resolve, reject) {
        var messageID = (0, _v["default"])();

        _this5.outgoing.set(messageID, resolve);

        _this5.channels.get(target).forEach(function (_ref3) {
          var channel = _ref3.channel;
          return channel.postMessage({
            action: action,
            data: data,
            messageID: messageID,
            noAck: false
          });
        });
      });
    }
  }]);
  return MessageDuplexHost;
}(_eventemitter["default"]);

var _default = MessageDuplexHost;
exports["default"] = _default;

/***/ }),

/***/ "../lib/MessageDuplex/index.js":
/*!*************************************!*\
  !*** ../lib/MessageDuplex/index.js ***!
  \*************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _host = _interopRequireDefault(__webpack_require__(/*! ./handlers/host */ "../lib/MessageDuplex/handlers/host.js"));

var _child = _interopRequireDefault(__webpack_require__(/*! ./handlers/child */ "../lib/MessageDuplex/handlers/child.js"));

var Tab = _child["default"].bind(null, 'tab');

var Popup = _child["default"].bind(null, 'popup');

var _default = {
  Host: _host["default"],
  Tab: Tab,
  Popup: Popup
};
exports["default"] = _default;

/***/ }),

/***/ "../lib/debugout.js":
/*!**************************!*\
  !*** ../lib/debugout.js ***!
  \**************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "../../node_modules/@babel/runtime/helpers/typeof.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../node_modules/@babel/runtime/helpers/createClass.js"));

/**
 * Created by tron on 2019/6/17.
 */
var debugout =
/*#__PURE__*/
function () {
  function debugout() {
    (0, _classCallCheck2["default"])(this, debugout);
    // OPTIONS
    this.realTimeLoggingOn = true; // log in real time (forwards to console.log)

    this.useTimestamps = false; // insert a timestamp in front of each log

    this.useLocalStorage = false; // store the output using window.localStorage() and continuously add to the same log each session

    this.recordLogs = true; // set to false after you're done debugging to avoid the log eating up memory

    this.autoTrim = true; // to avoid the log eating up potentially endless memory

    this.maxLines = 2500; // if autoTrim is true, this many most recent lines are saved

    this.tailNumLines = 100; // how many lines tail() will retrieve

    this.logFilename = 'debugout.txt'; // filename of log downloaded with downloadLog()
    // vars

    this.depth = 0;
    this.parentSizes = [0];
    this.currentResult = '';
    this.startTime = new Date();
    this.output = '';

    this.version = function () {
      return '0.5.0';
    };
    /*
     START/RESUME LOG
     */


    if (this.useLocalStorage) {
      var saved = window.localStorage.getItem('debugout.js');

      if (saved) {
        saved = JSON.parse(saved);
        this.output = saved.log;
        var start = new Date(saved.startTime);
        var end = new Date(saved.lastLog);
        this.output += '\n---- Session end: ' + saved.lastLog + ' ----\n';
        this.output += this.formatSessionDuration(start, end);
        this.output += '\n\n';
      }
    }

    this.output += '---- Session started: ' + this.startTime + ' ----\n\n';
  }
  /*
   USER METHODS
   */


  (0, _createClass2["default"])(debugout, [{
    key: "getLog",
    value: function getLog() {
      var retrievalTime = new Date(); // if recording is off, so dev knows why they don't have any logs

      if (!this.recordLogs) {
        this.log('[debugout.js] log recording is off.');
      } // if using local storage, get values


      if (this.useLocalStorage) {
        var saved = window.localStorage.getItem('debugout.js');

        if (saved) {
          saved = JSON.parse(saved);
          this.startTime = new Date(saved.startTime);
          this.output = saved.log;
          retrievalTime = new Date(saved.lastLog);
        }
      }

      return this.output + '\n---- Log retrieved: ' + retrievalTime + ' ----\n' + this.formatSessionDuration(this.startTime, retrievalTime);
    } // accepts optional number or uses the default for number of lines

  }, {
    key: "tail",
    value: function tail(numLines) {
      var numLines = numLines || this.tailLines;
      return this.trimLog(this.getLog(), numLines);
    } // accepts a string to search for

  }, {
    key: "search",
    value: function search(string) {
      var lines = this.output.split('\n');
      var rgx = new RegExp(string);
      var matched = []; // can't use a simple Array.prototype.filter() here
      // because we need to add the line number

      for (var i = 0; i < lines.length; i++) {
        var addr = '[' + i + '] ';

        if (lines[i].match(rgx)) {
          matched.push(addr + lines[i]);
        }
      }

      var result = matched.join('\n');
      if (result.length == 0) result = 'Nothing found for "' + string + '".';
      return result;
    } // accepts the starting line and how many lines after the starting line you want

  }, {
    key: "getSlice",
    value: function getSlice(lineNumber, numLines) {
      var lines = this.output.split('\n');
      var segment = lines.slice(lineNumber, lineNumber + numLines);
      return segment.join('\n');
    } // immediately downloads the log - for desktop browser use

  }, {
    key: "downloadLog",
    value: function downloadLog() {
      var file = "data:text/plain;charset=utf-8,";
      var logFile = this.getLog();
      var encoded = encodeURIComponent(logFile);
      file += encoded;
      var a = document.createElement('a');
      a.href = file;
      a.target = '_blank';
      a.download = this.logFilename;
      document.body.appendChild(a);
      a.click();
      a.remove();
    } // clears the log

  }, {
    key: "clear",
    value: function clear() {
      var clearTime = new Date();
      this.output = '---- Log cleared: ' + clearTime + ' ----\n';

      if (this.useLocalStorage) {
        // local storage
        var saveObject = {
          startTime: this.startTime,
          log: this.output,
          lastLog: clearTime
        };
        saveObject = JSON.stringify(saveObject);
        window.localStorage.setItem('debugout.js', saveObject);
      }

      if (this.realTimeLoggingOn) console.log('[debugout.js] clear()');
    } // records a log

  }, {
    key: "log",
    value: function log(obj) {
      // log in real time
      // if (this.realTimeLoggingOn) console.log(obj);
      // record log
      var type = this.determineType(obj);

      if (type != null && this.recordLogs) {
        var addition = this.formatType(type, obj); // timestamp, formatted for brevity

        if (this.useTimestamps) {
          var logTime = new Date();
          this.output += this.formatTimestamp(logTime);
        }

        this.output += addition + '\n';
        if (this.autoTrim) this.output = this.trimLog(this.output, this.maxLines); // local storage

        if (this.useLocalStorage) {
          var last = new Date();
          var saveObject = {
            startTime: this.startTime,
            log: this.output,
            lastLog: last
          };
          saveObject = JSON.stringify(saveObject);
          window.localStorage.setItem('debugout.js', saveObject);
        }
      }

      this.depth = 0;
      this.parentSizes = [0];
      this.currentResult = '';
    }
    /*
     METHODS FOR CONSTRUCTING THE LOG
     */
    // like typeof but classifies objects of type 'object'
    // kept separate from formatType() so you can use at your convenience!

  }, {
    key: "determineType",
    value: function determineType(object) {
      if (object != null) {
        var typeResult;
        var type = (0, _typeof2["default"])(object);

        if (type == 'object') {
          var len = object.length;

          if (len == null) {
            if (typeof object.getTime == 'function') {
              typeResult = 'Date';
            } else if (typeof object.test == 'function') {
              typeResult = 'RegExp';
            } else {
              typeResult = 'Object';
            }
          } else {
            typeResult = 'Array';
          }
        } else {
          typeResult = type;
        }

        return typeResult;
      } else {
        return null;
      }
    } // format type accordingly, recursively if necessary

  }, {
    key: "formatType",
    value: function formatType(type, obj) {
      switch (type) {
        case 'Object':
          this.currentResult += '{\n';
          this.depth++;
          this.parentSizes.push(this.objectSize(obj));
          var i = 0;

          for (var prop in obj) {
            this.currentResult += this.indentsForDepth(this.depth);
            this.currentResult += prop + ': ';
            var subtype = this.determineType(obj[prop]);
            var subresult = this.formatType(subtype, obj[prop]);

            if (subresult) {
              this.currentResult += subresult;
              if (i != this.parentSizes[this.depth] - 1) this.currentResult += ',';
              this.currentResult += '\n';
            } else {
              if (i != this.parentSizes[this.depth] - 1) this.currentResult += ',';
              this.currentResult += '\n';
            }

            i++;
          }

          this.depth--;
          this.parentSizes.pop();
          this.currentResult += this.indentsForDepth(this.depth);
          this.currentResult += '}';
          if (this.depth == 0) return this.currentResult;
          break;

        case 'Array':
          this.currentResult += '[';
          this.depth++;
          this.parentSizes.push(obj.length);

          for (var _i = 0; _i < obj.length; _i++) {
            var subtype = this.determineType(obj[_i]);
            if (subtype == 'Object' || subtype == 'Array') this.currentResult += '\n' + this.indentsForDepth(this.depth);
            var subresult = this.formatType(subtype, obj[_i]);

            if (subresult) {
              this.currentResult += subresult;
              if (_i != this.parentSizes[this.depth] - 1) this.currentResult += ', ';
              if (subtype == 'Array') this.currentResult += '\n';
            } else {
              if (_i != this.parentSizes[this.depth] - 1) this.currentResult += ', ';
              if (subtype != 'Object') this.currentResult += '\n';else if (_i == this.parentSizes[this.depth] - 1) this.currentResult += '\n';
            }
          }

          this.depth--;
          this.parentSizes.pop();
          this.currentResult += ']';
          if (this.depth == 0) return this.currentResult;
          break;

        case 'function':
          obj += '';
          var lines = obj.split('\n');

          for (var i = 0; i < lines.length; i++) {
            if (lines[i].match(/\}/)) this.depth--;
            this.currentResult += this.indentsForDepth(this.depth);
            if (lines[i].match(/\{/)) this.depth++;
            this.currentResult += lines[i] + '\n';
          }

          return this.currentResult;
          break;

        case 'RegExp':
          return '/' + obj.source + '/';
          break;

        case 'Date':
        case 'string':
          if (this.depth > 0 || obj.length == 0) {
            return '"' + obj + '"';
          } else {
            return obj;
          }

        case 'boolean':
          if (obj) return 'true';else return 'false';

        case 'number':
          return obj + '';
          break;
      }
    }
  }, {
    key: "indentsForDepth",
    value: function indentsForDepth(depth) {
      var str = '';

      for (var i = 0; i < depth; i++) {
        str += '\t';
      }

      return str;
    }
  }, {
    key: "trimLog",
    value: function trimLog(log, maxLines) {
      var lines = log.split('\n');

      if (lines.length > maxLines) {
        lines = lines.slice(lines.length - maxLines);
      }

      return lines.join('\n');
    }
  }, {
    key: "lines",
    value: function lines() {
      return this.output.split('\n').length;
    } // calculate testing time

  }, {
    key: "formatSessionDuration",
    value: function formatSessionDuration(startTime, endTime) {
      var msec = endTime - startTime;
      var hh = Math.floor(msec / 1000 / 60 / 60);
      var hrs = ('0' + hh).slice(-2);
      msec -= hh * 1000 * 60 * 60;
      var mm = Math.floor(msec / 1000 / 60);
      var mins = ('0' + mm).slice(-2);
      msec -= mm * 1000 * 60;
      var ss = Math.floor(msec / 1000);
      var secs = ('0' + ss).slice(-2);
      msec -= ss * 1000;
      return '---- Session duration: ' + hrs + ':' + mins + ':' + secs + ' ----';
    }
  }, {
    key: "formatTimestamp",
    value: function formatTimestamp(timestamp) {
      var year = timestamp.getFullYear();
      var date = timestamp.getDate();
      var month = ('0' + (timestamp.getMonth() + 1)).slice(-2);
      var hrs = Number(timestamp.getHours());
      var mins = ('0' + timestamp.getMinutes()).slice(-2);
      var secs = ('0' + timestamp.getSeconds()).slice(-2);
      return '[' + year + '-' + month + '-' + date + ' ' + hrs + ':' + mins + ':' + secs + ']: ';
    }
  }, {
    key: "objectSize",
    value: function objectSize(obj) {
      var size = 0,
          key;

      for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
      }

      return size;
    }
  }]);
  return debugout;
}();

exports["default"] = debugout;
;

/***/ }),

/***/ "../lib/logger.js":
/*!************************!*\
  !*** ../lib/logger.js ***!
  \************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "../../node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../node_modules/@babel/runtime/helpers/createClass.js"));

var _dateformat = _interopRequireDefault(__webpack_require__(/*! dateformat */ "../../node_modules/dateformat/lib/dateformat.js"));

var _debugout = _interopRequireDefault(__webpack_require__(/*! ./debugout.js */ "../lib/debugout.js"));

var Logger =
/*#__PURE__*/
function () {
  function Logger(source) {
    (0, _classCallCheck2["default"])(this, Logger);
    this._source = source;
    window.bugout = new _debugout["default"]();
    return new Proxy(this, {
      get: function get(target, name) {
        return target._handleInput.bind(target, name);
      }
    });
  }

  (0, _createClass2["default"])(Logger, [{
    key: "_handleInput",
    value: function _handleInput(logType) {
      var _console;

      for (var _len = arguments.length, data = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        data[_key - 1] = arguments[_key];
      }

      var formatted = this._formatMessage(logType, data);

      logType === 'error' && data.length === 1 && window.bugout.log(data);
      logType === 'error' && data.length === 2 && window.bugout.log([data[0], data[1].stack]);

      (_console = console).log.apply(_console, (0, _toConsumableArray2["default"])(formatted));
    }
  }, {
    key: "_formatMessage",
    value: function _formatMessage() {
      var logType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'info';
      var data = arguments.length > 1 ? arguments[1] : undefined;
      var level = logType;
      var colours = {
        info: '7f8c8d',
        warn: 'f39c12',
        error: 'c0392b'
      };
      if (!colours.hasOwnProperty(logType)) level = 'info';
      var colour = colours[level];
      var timestamp = (0, _dateformat["default"])(Date.now(), 'mmm d, hh:MM:ss tt');
      return ["[".concat(timestamp, "] %c[").concat(this._source, "]: %c[").concat(level.toUpperCase(), "]:"), 'font-weight: bold;', "color: #".concat(colour, ";")].concat((0, _toConsumableArray2["default"])(data));
    }
  }]);
  return Logger;
}();

exports["default"] = Logger;

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "../../node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "../../node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _MessageDuplex = _interopRequireDefault(__webpack_require__(/*! @tronlink/lib/MessageDuplex */ "../lib/MessageDuplex/index.js"));

var _EventChannel = _interopRequireDefault(__webpack_require__(/*! @tronlink/lib/EventChannel */ "../lib/EventChannel.js"));

var _logger = _interopRequireDefault(__webpack_require__(/*! @tronlink/lib/logger */ "../lib/logger.js"));

var _extensionizer = _interopRequireDefault(__webpack_require__(/*! extensionizer */ "../../node_modules/extensionizer/index.js"));

var logger = new _logger["default"]('contentScript');
var contentScript = {
  duplex: new _MessageDuplex["default"].Tab(),
  eventChannel: new _EventChannel["default"]('contentScript'),
  init: function init() {
    logger.info('Initialising TronLink');
    this.registerListeners();
    this.inject();
  },
  registerListeners: function registerListeners() {
    var _this = this;

    this.eventChannel.on('tunnel',
    /*#__PURE__*/
    function () {
      var _ref = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(data) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.t0 = _this.eventChannel;
                _context.next = 4;
                return _this.duplex.send('tabRequest', data);

              case 4:
                _context.t1 = _context.sent;

                _context.t0.send.call(_context.t0, 'tabReply', _context.t1);

                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t2 = _context["catch"](0);
                logger.info('Tab request failed:', _context.t2);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 8]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    this.duplex.on('tunnel', function (_ref2) {
      var action = _ref2.action,
          data = _ref2.data;

      _this.eventChannel.send(action, data);
    });
  },
  inject: function inject() {
    var injectionSite = document.head || document.documentElement;
    var container = document.createElement('script');
    container.src = _extensionizer["default"].extension.getURL('dist/pageHook.js');

    container.onload = function () {
      this.parentNode.removeChild(this);
    };

    injectionSite.insertBefore(container, injectionSite.children[0]);
    logger.info('TronLink injected');
  }
};
contentScript.init();

/***/ })

/******/ });
//# sourceMappingURL=contentScript.js.map