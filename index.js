if(typeof window==='undefined'||window===null)var window=(typeof globalThis==='undefined'||globalThis===null)?{}:globalThis;/******/ var __webpack_modules__ = ([
/* 0 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var check = function (it) {
  return it && it.Math === Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) ||
  check(typeof this == 'object' && this) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();


/***/ }),
/* 1 */
/***/ (function(module) {


module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),
/* 2 */
/***/ (function(module) {


// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
var documentAll = typeof document == 'object' && document.all;

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
module.exports = typeof documentAll == 'undefined' && documentAll !== undefined ? function (argument) {
  return typeof argument == 'function' || argument === documentAll;
} : function (argument) {
  return typeof argument == 'function';
};


/***/ }),
/* 3 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var fails = __webpack_require__(1);

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] !== 7;
});


/***/ }),
/* 4 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var NATIVE_BIND = __webpack_require__(15);

var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
// eslint-disable-next-line es/no-function-prototype-bind -- safe
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);

module.exports = NATIVE_BIND ? uncurryThisWithBind : function (fn) {
  return function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),
/* 5 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(4);
var toObject = __webpack_require__(50);

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),
/* 6 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var isCallable = __webpack_require__(2);

module.exports = function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),
/* 7 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(3);
var IE8_DOM_DEFINE = __webpack_require__(26);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(29);
var anObject = __webpack_require__(8);
var toPropertyKey = __webpack_require__(19);

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw new $TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 8 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var isObject = __webpack_require__(6);

var $String = String;
var $TypeError = TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw new $TypeError($String(argument) + ' is not an object');
};


/***/ }),
/* 9 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(39);
var requireObjectCoercible = __webpack_require__(17);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),
/* 10 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var NATIVE_BIND = __webpack_require__(15);

var call = Function.prototype.call;
// eslint-disable-next-line es/no-function-prototype-bind -- safe
module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),
/* 11 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var globalThis = __webpack_require__(0);
var isCallable = __webpack_require__(2);

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(globalThis[namespace]) : globalThis[namespace] && globalThis[namespace][method];
};


/***/ }),
/* 12 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var IS_PURE = __webpack_require__(49);
var globalThis = __webpack_require__(0);
var defineGlobalProperty = __webpack_require__(13);

var SHARED = '__core-js_shared__';
var store = module.exports = globalThis[SHARED] || defineGlobalProperty(SHARED, {});

(store.versions || (store.versions = [])).push({
  version: '3.49.0',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2013–2025 Denis Pushkarev (zloirock.ru), 2025–2026 CoreJS Company (core-js.io). All rights reserved.',
  license: 'https://github.com/zloirock/core-js/blob/v3.49.0/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});


/***/ }),
/* 13 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var globalThis = __webpack_require__(0);

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(globalThis, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    globalThis[key] = value;
  } return value;
};


/***/ }),
/* 14 */
/***/ (function(module) {


// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),
/* 15 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var fails = __webpack_require__(1);

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = function () { /* empty */ }.bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});


/***/ }),
/* 16 */
/***/ (function(module) {


module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 17 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var isNullOrUndefined = __webpack_require__(18);

var $TypeError = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
  return it;
};


/***/ }),
/* 18 */
/***/ (function(module) {


// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function (it) {
  return it === null || it === undefined;
};


/***/ }),
/* 19 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var toPrimitive = __webpack_require__(41);
var isSymbol = __webpack_require__(20);

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),
/* 20 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var getBuiltIn = __webpack_require__(11);
var isCallable = __webpack_require__(2);
var isPrototypeOf = __webpack_require__(42);
var USE_SYMBOL_AS_UID = __webpack_require__(21);

var $Object = Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};


/***/ }),
/* 21 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(22);

module.exports = NATIVE_SYMBOL &&
  !Symbol.sham &&
  typeof Symbol.iterator == 'symbol';


/***/ }),
/* 22 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(43);
var fails = __webpack_require__(1);
var globalThis = __webpack_require__(0);

var $String = globalThis.String;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol('symbol detection');
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
  // of course, fail.
  return !$String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),
/* 23 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var globalThis = __webpack_require__(0);
var shared = __webpack_require__(24);
var hasOwn = __webpack_require__(5);
var uid = __webpack_require__(25);
var NATIVE_SYMBOL = __webpack_require__(22);
var USE_SYMBOL_AS_UID = __webpack_require__(21);

var Symbol = globalThis.Symbol;
var WellKnownSymbolsStore = shared('wks');
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol['for'] || Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name)) {
    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name)
      ? Symbol[name]
      : createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),
/* 24 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var store = __webpack_require__(12);

module.exports = function (key, value) {
  return store[key] || (store[key] = value || {});
};


/***/ }),
/* 25 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(4);

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.1.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),
/* 26 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(3);
var fails = __webpack_require__(1);
var createElement = __webpack_require__(27);

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a !== 7;
});


/***/ }),
/* 27 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var globalThis = __webpack_require__(0);
var isObject = __webpack_require__(6);

var document = globalThis.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),
/* 28 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(3);
var definePropertyModule = __webpack_require__(7);
var createPropertyDescriptor = __webpack_require__(16);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 29 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(3);
var fails = __webpack_require__(1);

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype !== 42;
});


/***/ }),
/* 30 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(4);
var fails = __webpack_require__(1);
var isCallable = __webpack_require__(2);
var hasOwn = __webpack_require__(5);
var DESCRIPTORS = __webpack_require__(3);
var CONFIGURABLE_FUNCTION_NAME = (__webpack_require__(75)/* .CONFIGURABLE */ .i2);
var inspectSource = __webpack_require__(52);
var InternalStateModule = __webpack_require__(76);

var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var $String = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
var stringSlice = uncurryThis(''.slice);
var replace = uncurryThis(''.replace);
var join = uncurryThis([].join);

var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {
  return defineProperty(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn = module.exports = function (value, name, options) {
  if (stringSlice($String(name), 0, 7) === 'Symbol(') {
    name = '[' + replace($String(name), /^Symbol\(([^)]*)\).*$/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
    if (DESCRIPTORS) defineProperty(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) {
    defineProperty(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS) defineProperty(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState(value);
  if (!hasOwn(state, 'source')) {
    state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, 'toString');


/***/ }),
/* 31 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var shared = __webpack_require__(24);
var uid = __webpack_require__(25);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),
/* 32 */
/***/ (function(module) {


module.exports = {};


/***/ }),
/* 33 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(4);
var hasOwn = __webpack_require__(5);
var toIndexedObject = __webpack_require__(9);
var indexOf = (__webpack_require__(56)/* .indexOf */ .q);
var hiddenKeys = __webpack_require__(32);

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};


/***/ }),
/* 34 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var trunc = __webpack_require__(58);

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};


/***/ }),
/* 35 */
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(37);
var $includes = (__webpack_require__(56)/* .includes */ .m);
var fails = __webpack_require__(1);
var addToUnscopables = __webpack_require__(62);

// FF99+ bug
var BROKEN_ON_SPARSE = fails(function () {
  // eslint-disable-next-line es/no-array-prototype-includes -- detection
  return !Array(1).includes();
});

// Safari 26.4- bug
var BROKEN_ON_SPARSE_WITH_FROM_INDEX = fails(function () {
  // eslint-disable-next-line no-sparse-arrays, es/no-array-prototype-includes -- detection
  return [, 1].includes(undefined, 1);
});

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true, forced: BROKEN_ON_SPARSE || BROKEN_ON_SPARSE_WITH_FROM_INDEX }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),
/* 36 */
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

/**
@license @nocompile
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
(function(){/*

 Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at
 http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 Google as part of the polymer project is also subject to an additional IP
 rights grant found at http://polymer.github.io/PATENTS.txt
*/
'use strict';var v;function ba(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}var ca="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function da(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof __webpack_require__.g&&__webpack_require__.g];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var ea=da(this);function fa(a,b){if(b)a:{var c=ea;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ca(c,a,{configurable:!0,writable:!0,value:b})}}
fa("Symbol",function(a){function b(e){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c("jscomp_symbol_"+(e||"")+"_"+d++,e)}function c(e,f){this.g=e;ca(this,"description",{configurable:!0,writable:!0,value:f})}if(a)return a;c.prototype.toString=function(){return this.g};var d=0;return b});
fa("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=ea[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ca(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ja(ba(this))}})}return a});function ja(a){a={next:a};a[Symbol.iterator]=function(){return this};return a}
function ka(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:ba(a)}}function w(a){if(!(a instanceof Array)){a=ka(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}var la;if("function"==typeof Object.setPrototypeOf)la=Object.setPrototypeOf;else{var na;a:{var oa={a:!0},pa={};try{pa.__proto__=oa;na=pa.a;break a}catch(a){}na=!1}la=na?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var qa=la;function ra(){this.u=!1;this.h=null;this.Oa=void 0;this.g=1;this.ea=0;this.i=null}function ua(a){if(a.u)throw new TypeError("Generator is already running");a.u=!0}ra.prototype.O=function(a){this.Oa=a};function wa(a,b){a.i={ab:b,fb:!0};a.g=a.ea}ra.prototype.return=function(a){this.i={return:a};this.g=this.ea};function ya(a,b){a.g=3;return{value:b}}function za(a){this.g=new ra;this.h=a}
function Aa(a,b){ua(a.g);var c=a.g.h;if(c)return Ba(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.g.return);a.g.return(b);return Ca(a)}function Ba(a,b,c,d){try{var e=b.call(a.g.h,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.g.u=!1,e;var f=e.value}catch(g){return a.g.h=null,wa(a.g,g),Ca(a)}a.g.h=null;d.call(a.g,f);return Ca(a)}
function Ca(a){for(;a.g.g;)try{var b=a.h(a.g);if(b)return a.g.u=!1,{value:b.value,done:!1}}catch(c){a.g.Oa=void 0,wa(a.g,c)}a.g.u=!1;if(a.g.i){b=a.g.i;a.g.i=null;if(b.fb)throw b.ab;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Da(a){this.next=function(b){ua(a.g);a.g.h?b=Ba(a,a.g.h.next,b,a.g.O):(a.g.O(b),b=Ca(a));return b};this.throw=function(b){ua(a.g);a.g.h?b=Ba(a,a.g.h["throw"],b,a.g.O):(wa(a.g,b),b=Ca(a));return b};this.return=function(b){return Aa(a,b)};this[Symbol.iterator]=function(){return this}}function Ea(a,b){b=new Da(new za(b));qa&&a.prototype&&qa(b,a.prototype);return b}Array.from||(Array.from=function(a){return[].slice.call(a)});
Object.assign||(Object.assign=function(a){for(var b=[].slice.call(arguments,1),c=0,d;c<b.length;c++)if(d=b[c])for(var e=a,f=Object.keys(d),g=0;g<f.length;g++){var h=f[g];e[h]=d[h]}return a});var Fa=setTimeout;function Ga(){}function Ha(a,b){return function(){a.apply(b,arguments)}}function A(a){if(!(this instanceof A))throw new TypeError("Promises must be constructed via new");if("function"!==typeof a)throw new TypeError("not a function");this.N=0;this.Ha=!1;this.I=void 0;this.ba=[];Ia(a,this)}
function Ja(a,b){for(;3===a.N;)a=a.I;0===a.N?a.ba.push(b):(a.Ha=!0,Ka(function(){var c=1===a.N?b.hb:b.ib;if(null===c)(1===a.N?La:Ma)(b.promise,a.I);else{try{var d=c(a.I)}catch(e){Ma(b.promise,e);return}La(b.promise,d)}}))}
function La(a,b){try{if(b===a)throw new TypeError("A promise cannot be resolved with itself.");if(b&&("object"===typeof b||"function"===typeof b)){var c=b.then;if(b instanceof A){a.N=3;a.I=b;Na(a);return}if("function"===typeof c){Ia(Ha(c,b),a);return}}a.N=1;a.I=b;Na(a)}catch(d){Ma(a,d)}}function Ma(a,b){a.N=2;a.I=b;Na(a)}
function Na(a){2===a.N&&0===a.ba.length&&Ka(function(){a.Ha||"undefined"!==typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",a.I)});for(var b=0,c=a.ba.length;b<c;b++)Ja(a,a.ba[b]);a.ba=null}function Oa(a,b,c){this.hb="function"===typeof a?a:null;this.ib="function"===typeof b?b:null;this.promise=c}function Ia(a,b){var c=!1;try{a(function(d){c||(c=!0,La(b,d))},function(d){c||(c=!0,Ma(b,d))})}catch(d){c||(c=!0,Ma(b,d))}}
A.prototype["catch"]=function(a){return this.then(null,a)};A.prototype.then=function(a,b){var c=new this.constructor(Ga);Ja(this,new Oa(a,b,c));return c};A.prototype["finally"]=function(a){var b=this.constructor;return this.then(function(c){return b.resolve(a()).then(function(){return c})},function(c){return b.resolve(a()).then(function(){return b.reject(c)})})};
function Pa(a){return new A(function(b,c){function d(h,k){try{if(k&&("object"===typeof k||"function"===typeof k)){var l=k.then;if("function"===typeof l){l.call(k,function(m){d(h,m)},c);return}}e[h]=k;0===--f&&b(e)}catch(m){c(m)}}if(!a||"undefined"===typeof a.length)return c(new TypeError("Promise.all accepts an array"));var e=Array.prototype.slice.call(a);if(0===e.length)return b([]);for(var f=e.length,g=0;g<e.length;g++)d(g,e[g])})}
function Qa(a){return a&&"object"===typeof a&&a.constructor===A?a:new A(function(b){b(a)})}function Ra(a){return new A(function(b,c){c(a)})}function Sa(a){return new A(function(b,c){if(!a||"undefined"===typeof a.length)return c(new TypeError("Promise.race accepts an array"));for(var d=0,e=a.length;d<e;d++)Qa(a[d]).then(b,c)})}var Ka="function"===typeof setImmediate&&function(a){setImmediate(a)}||function(a){Fa(a,0)};/*

Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
if(!window.Promise){window.Promise=A;A.prototype.then=A.prototype.then;A.all=Pa;A.race=Sa;A.resolve=Qa;A.reject=Ra;var Ta=document.createTextNode(""),Ua=[];(new MutationObserver(function(){for(var a=Ua.length,b=0;b<a;b++)Ua[b]();Ua.splice(0,a)})).observe(Ta,{characterData:!0});Ka=function(a){Ua.push(a);Ta.textContent=0<Ta.textContent.length?"":"a"}};/*
 Copyright (C) 2015 by WebReflection

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
(function(a,b){if(!(b in a)){var c=typeof __webpack_require__.g===typeof c?window:__webpack_require__.g,d=0,e=String(Math.random()),f="__\u0001symbol@@"+e,g=a.getOwnPropertyNames,h=a.getOwnPropertyDescriptor,k=a.create,l=a.keys,m=a.freeze||a,q=a.defineProperty,H=a.defineProperties,C=h(a,"getOwnPropertyNames"),t=a.prototype,F=t.hasOwnProperty,E=t.propertyIsEnumerable,N=t.toString,y=function(I,u,G){F.call(I,f)||q(I,f,{enumerable:!1,configurable:!1,writable:!1,value:{}});I[f]["@@"+u]=G},X=function(I,u){var G=k(I);g(u).forEach(function(p){sa.call(u,
p)&&Va(G,p,u[p])});return G},x=function(){},ta=function(I){return I!=f&&!F.call(ha,I)},ia=function(I){return I!=f&&F.call(ha,I)},sa=function(I){var u=String(I);return ia(u)?F.call(this,u)&&!!this[f]&&this[f]["@@"+u]:E.call(this,I)},n=function(I){q(t,I,{enumerable:!1,configurable:!0,get:x,set:function(u){xa(this,I,{enumerable:!1,configurable:!0,writable:!0,value:u});y(this,I,!0)}});ha[I]=q(a(I),"constructor",kc);return m(ha[I])},J=function G(u){if(this instanceof G)throw new TypeError("Symbol is not a constructor");
return n("__\u0001symbol:".concat(u||"",e,++d))},ha=k(null),kc={value:J},ib=function(u){return ha[u]},Va=function(u,G,p){var r=String(G);if(ia(r)){G=xa;if(p.enumerable){var B=k(p);B.enumerable=!1}else B=p;G(u,r,B);y(u,r,!!p.enumerable)}else q(u,G,p);return u},jb=function(u){return g(u).filter(ia).map(ib)};C.value=Va;q(a,"defineProperty",C);C.value=jb;q(a,b,C);C.value=function(u){return g(u).filter(ta)};q(a,"getOwnPropertyNames",C);C.value=function(u,G){var p=jb(G);p.length?l(G).concat(p).forEach(function(r){sa.call(G,
r)&&Va(u,r,G[r])}):H(u,G);return u};q(a,"defineProperties",C);C.value=sa;q(t,"propertyIsEnumerable",C);C.value=J;q(c,"Symbol",C);C.value=function(u){u="__\u0001symbol:".concat("__\u0001symbol:",u,e);return u in t?ha[u]:n(u)};q(J,"for",C);C.value=function(u){if(ta(u))throw new TypeError(u+" is not a symbol");if(F.call(ha,u)&&(u=u.slice(10),"__\u0001symbol:"===u.slice(0,10)&&(u=u.slice(10),u!==e)))return u=u.slice(0,u.length-e.length),0<u.length?u:void 0};q(J,"keyFor",C);C.value=function(u,G){var p=
h(u,G);p&&ia(G)&&(p.enumerable=sa.call(u,G));return p};q(a,"getOwnPropertyDescriptor",C);C.value=function(u,G){return 1===arguments.length||"undefined"===typeof G?k(u):X(u,G)};q(a,"create",C);C.value=function(){var u=N.call(this);return"[object String]"===u&&ia(this)?"[object Symbol]":u};q(t,"toString",C);try{if(!0===k(q({},"__\u0001symbol:",{get:function(){return q(this,"__\u0001symbol:",{value:!0})["__\u0001symbol:"]}}))["__\u0001symbol:"])var xa=q;else throw"IE11";}catch(u){xa=function(G,p,r){var B=
h(t,p);delete t[p];q(G,p,r);q(t,p,B)}}}})(Object,"getOwnPropertySymbols");
(function(a,b){var c=a.defineProperty,d=a.prototype,e=d.toString,f;"iterator match replace search split hasInstance isConcatSpreadable unscopables species toPrimitive toStringTag".split(" ").forEach(function(g){g in b||(c(b,g,{value:b(g)}),"toStringTag"===g&&(f=a.getOwnPropertyDescriptor(d,"toString"),f.value=function(){var h=e.call(this),k=null==this?this:this[b.toStringTag];return null==k?h:"[object "+k+"]"},c(d,"toString",f)))})})(Object,Symbol);
(function(a,b,c){function d(){return this}b[a]||(b[a]=function(){var e=0,f=this,g={next:function(){var h=f.length<=e;return h?{done:h}:{done:h,value:f[e++]}}};g[a]=d;return g});c[a]||(c[a]=function(){var e=String.fromCodePoint,f=this,g=0,h=f.length,k={next:function(){var l=h<=g,m=l?"":e(f.codePointAt(g));g+=m.length;return l?{done:l}:{done:l,value:m}}};k[a]=d;return k})})(Symbol.iterator,Array.prototype,String.prototype);/*

Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
var Wa=Object.prototype.toString;Object.prototype.toString=function(){return void 0===this?"[object Undefined]":null===this?"[object Null]":Wa.call(this)};Object.keys=function(a){return Object.getOwnPropertyNames(a).filter(function(b){return(b=Object.getOwnPropertyDescriptor(a,b))&&b.enumerable})};
String.prototype[Symbol.iterator]&&String.prototype.codePointAt||(String.prototype[Symbol.iterator]=function Xa(){var b,c=this;return Ea(Xa,function(d){1==d.g&&(b=0);if(3!=d.g)return b<c.length?d=ya(d,c[b]):(d.g=0,d=void 0),d;b++;d.g=2})});Set.prototype[Symbol.iterator]||(Set.prototype[Symbol.iterator]=function Ya(){var b,c=this,d;return Ea(Ya,function(e){1==e.g&&(b=[],c.forEach(function(f){b.push(f)}),d=0);if(3!=e.g)return d<b.length?e=ya(e,b[d]):(e.g=0,e=void 0),e;d++;e.g=2})});
Map.prototype[Symbol.iterator]||(Map.prototype[Symbol.iterator]=function Za(){var b,c=this,d;return Ea(Za,function(e){1==e.g&&(b=[],c.forEach(function(f,g){b.push([g,f])}),d=0);if(3!=e.g)return d<b.length?e=ya(e,b[d]):(e.g=0,e=void 0),e;d++;e.g=2})});/*

Copyright (c) 2020 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
var $a=document.createEvent("Event");$a.initEvent("foo",!0,!0);$a.preventDefault();if(!$a.defaultPrevented){var ab=Event.prototype.preventDefault;Event.prototype.preventDefault=function(){this.cancelable&&(ab.call(this),Object.defineProperty(this,"defaultPrevented",{get:function(){return!0},configurable:!0}))}}var bb=/Trident/.test(navigator.userAgent);
if(!window.Event||bb&&"function"!==typeof window.Event){var cb=window.Event;window.Event=function(a,b){b=b||{};var c=document.createEvent("Event");c.initEvent(a,!!b.bubbles,!!b.cancelable);return c};if(cb){for(var db in cb)window.Event[db]=cb[db];window.Event.prototype=cb.prototype}}
if(!window.CustomEvent||bb&&"function"!==typeof window.CustomEvent)window.CustomEvent=function(a,b){b=b||{};var c=document.createEvent("CustomEvent");c.initCustomEvent(a,!!b.bubbles,!!b.cancelable,b.detail);return c},window.CustomEvent.prototype=window.Event.prototype;
if(!window.MouseEvent||bb&&"function"!==typeof window.MouseEvent){var eb=window.MouseEvent;window.MouseEvent=function(a,b){b=b||{};var c=document.createEvent("MouseEvent");c.initMouseEvent(a,!!b.bubbles,!!b.cancelable,b.view||window,b.detail,b.screenX,b.screenY,b.clientX,b.clientY,b.ctrlKey,b.altKey,b.shiftKey,b.metaKey,b.button,b.relatedTarget);return c};if(eb)for(var fb in eb)window.MouseEvent[fb]=eb[fb];window.MouseEvent.prototype=eb.prototype};var gb,hb=function(){function a(){e++}var b=!1,c=!1,d={get capture(){return b=!0},get once(){return c=!0}},e=0,f=document.createElement("div");f.addEventListener("click",a,d);var g=b&&c;g&&(f.dispatchEvent(new Event("click")),f.dispatchEvent(new Event("click")),g=1==e);f.removeEventListener("click",a,d);return g}(),kb=null!==(gb=window.EventTarget)&&void 0!==gb?gb:window.Node;
if(!hb&&"addEventListener"in kb.prototype){var lb=function(a){if(!a||"object"!==typeof a&&"function"!==typeof a){var b=!!a;a=!1}else b=!!a.capture,a=!!a.once;return{capture:b,once:a}},mb=kb.prototype.addEventListener,nb=kb.prototype.removeEventListener,qb=new WeakMap,rb=new WeakMap,sb=function(a,b,c){var d=c?qb:rb;c=d.get(a);void 0===c&&d.set(a,c=new Map);a=c.get(b);void 0===a&&c.set(b,a=new WeakMap);return a};kb.prototype.addEventListener=function(a,b,c){var d=this;if(null!=b){c=lb(c);var e=c.capture;
c=c.once;var f=sb(this,a,e);if(!f.has(b)){var g=c?function(h){f.delete(b);nb.call(d,a,g,e);if("function"===typeof b)return b.call(d,h);if("function"===typeof(null===b||void 0===b?void 0:b.handleEvent))return b.handleEvent(h)}:null;f.set(b,g);mb.call(this,a,null!==g&&void 0!==g?g:b,e)}}};kb.prototype.removeEventListener=function(a,b,c){if(null!=b){c=lb(c).capture;var d=sb(this,a,c),e=d.get(b);void 0!==e&&(d.delete(b),nb.call(this,a,null!==e&&void 0!==e?e:b,c))}}};Object.getOwnPropertyDescriptor(Node.prototype,"baseURI")||Object.defineProperty(Node.prototype,"baseURI",{get:function(){var a=(this.ownerDocument||this).querySelector("base[href]");return a&&a.href||window.location.href},configurable:!0,enumerable:!0});/*

Copyright (c) 2020 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
var tb,ub,vb=Element.prototype,wb=null!==(tb=Object.getOwnPropertyDescriptor(vb,"attributes"))&&void 0!==tb?tb:Object.getOwnPropertyDescriptor(Node.prototype,"attributes"),xb=null!==(ub=null===wb||void 0===wb?void 0:wb.get)&&void 0!==ub?ub:function(){return this.attributes},yb=Array.prototype.map;vb.hasOwnProperty("getAttributeNames")||(vb.getAttributeNames=function(){return yb.call(xb.call(this),function(a){return a.name})});var zb,Ab=Element.prototype;Ab.hasOwnProperty("matches")||(Ab.matches=null!==(zb=Ab.webkitMatchesSelector)&&void 0!==zb?zb:Ab.msMatchesSelector);var Bb=Node.prototype.appendChild;function Cb(a){a=a.prototype;a.hasOwnProperty("append")||Object.defineProperty(a,"append",{configurable:!0,enumerable:!0,writable:!0,value:function(b){for(var c=[],d=0;d<arguments.length;++d)c[d]=arguments[d];c=ka(c);for(d=c.next();!d.done;d=c.next())d=d.value,Bb.call(this,"string"===typeof d?document.createTextNode(d):d)}})}Cb(Document);Cb(DocumentFragment);Cb(Element);var Db,Eb,Fb=Node.prototype.insertBefore,Gb=null!==(Eb=null===(Db=Object.getOwnPropertyDescriptor(Node.prototype,"firstChild"))||void 0===Db?void 0:Db.get)&&void 0!==Eb?Eb:function(){return this.firstChild};
function Hb(a){a=a.prototype;a.hasOwnProperty("prepend")||Object.defineProperty(a,"prepend",{configurable:!0,enumerable:!0,writable:!0,value:function(b){for(var c=[],d=0;d<arguments.length;++d)c[d]=arguments[d];d=Gb.call(this);c=ka(c);for(var e=c.next();!e.done;e=c.next())e=e.value,Fb.call(this,"string"===typeof e?document.createTextNode(e):e,d)}})}Hb(Document);Hb(DocumentFragment);Hb(Element);var Ib,Jb,Kb=Node.prototype.appendChild,Lb=Node.prototype.removeChild,Mb=null!==(Jb=null===(Ib=Object.getOwnPropertyDescriptor(Node.prototype,"firstChild"))||void 0===Ib?void 0:Ib.get)&&void 0!==Jb?Jb:function(){return this.firstChild};
function Nb(a){a=a.prototype;a.hasOwnProperty("replaceChildren")||Object.defineProperty(a,"replaceChildren",{configurable:!0,enumerable:!0,writable:!0,value:function(b){for(var c=[],d=0;d<arguments.length;++d)c[d]=arguments[d];for(;null!==(d=Mb.call(this));)Lb.call(this,d);c=ka(c);for(d=c.next();!d.done;d=c.next())d=d.value,Kb.call(this,"string"===typeof d?document.createTextNode(d):d)}})}Nb(Document);Nb(DocumentFragment);Nb(Element);var Ob,Pb,Qb,Rb,Sb=Node.prototype.insertBefore,Tb=null!==(Pb=null===(Ob=Object.getOwnPropertyDescriptor(Node.prototype,"parentNode"))||void 0===Ob?void 0:Ob.get)&&void 0!==Pb?Pb:function(){return this.parentNode},Ub=null!==(Rb=null===(Qb=Object.getOwnPropertyDescriptor(Node.prototype,"nextSibling"))||void 0===Qb?void 0:Qb.get)&&void 0!==Rb?Rb:function(){return this.nextSibling};
function Vb(a){a=a.prototype;a.hasOwnProperty("after")||Object.defineProperty(a,"after",{configurable:!0,enumerable:!0,writable:!0,value:function(b){for(var c=[],d=0;d<arguments.length;++d)c[d]=arguments[d];d=Tb.call(this);if(null!==d){var e=Ub.call(this);c=ka(c);for(var f=c.next();!f.done;f=c.next())f=f.value,Sb.call(d,"string"===typeof f?document.createTextNode(f):f,e)}}})}Vb(CharacterData);Vb(Element);var Wb,Xb,Yb=Node.prototype.insertBefore,Zb=null!==(Xb=null===(Wb=Object.getOwnPropertyDescriptor(Node.prototype,"parentNode"))||void 0===Wb?void 0:Wb.get)&&void 0!==Xb?Xb:function(){return this.parentNode};
function $b(a){a=a.prototype;a.hasOwnProperty("before")||Object.defineProperty(a,"before",{configurable:!0,enumerable:!0,writable:!0,value:function(b){for(var c=[],d=0;d<arguments.length;++d)c[d]=arguments[d];d=Zb.call(this);if(null!==d){c=ka(c);for(var e=c.next();!e.done;e=c.next())e=e.value,Yb.call(d,"string"===typeof e?document.createTextNode(e):e,this)}}})}$b(CharacterData);$b(Element);var ac,bc,cc=Node.prototype.removeChild,dc=null!==(bc=null===(ac=Object.getOwnPropertyDescriptor(Node.prototype,"parentNode"))||void 0===ac?void 0:ac.get)&&void 0!==bc?bc:function(){return this.parentNode};function ec(a){a=a.prototype;a.hasOwnProperty("remove")||Object.defineProperty(a,"remove",{configurable:!0,enumerable:!0,writable:!0,value:function(){var b=dc.call(this);b&&cc.call(b,this)}})}ec(CharacterData);ec(Element);var fc,gc,hc=Node.prototype.insertBefore,ic=Node.prototype.removeChild,jc=null!==(gc=null===(fc=Object.getOwnPropertyDescriptor(Node.prototype,"parentNode"))||void 0===fc?void 0:fc.get)&&void 0!==gc?gc:function(){return this.parentNode};
function lc(a){a=a.prototype;a.hasOwnProperty("replaceWith")||Object.defineProperty(a,"replaceWith",{configurable:!0,enumerable:!0,writable:!0,value:function(b){for(var c=[],d=0;d<arguments.length;++d)c[d]=arguments[d];d=jc.call(this);if(null!==d){c=ka(c);for(var e=c.next();!e.done;e=c.next())e=e.value,hc.call(d,"string"===typeof e?document.createTextNode(e):e,this);ic.call(d,this)}}})}lc(CharacterData);lc(Element);var mc=window.Element.prototype,nc=window.HTMLElement.prototype,oc=window.SVGElement.prototype;!nc.hasOwnProperty("classList")||mc.hasOwnProperty("classList")||oc.hasOwnProperty("classList")||Object.defineProperty(mc,"classList",Object.getOwnPropertyDescriptor(nc,"classList"));var pc=Element.prototype,qc=Element.prototype.hasAttribute,rc=Element.prototype.setAttribute,sc=Element.prototype.removeAttribute;pc.hasOwnProperty("toggleAttribute")||(pc.toggleAttribute=function(a,b){if(void 0===b){if(qc.call(this,a))return sc.call(this,a),!1;rc.call(this,a,"");return!0}if(b)return qc.call(this,a)||rc.call(this,a,""),!0;sc.call(this,a);return!1});/*

 Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at
 http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 Google as part of the polymer project is also subject to an additional IP
 rights grant found at http://polymer.github.io/PATENTS.txt
*/
var tc=document.createElement("style");tc.textContent="body {transition: opacity ease-in 0.2s; } \nbody[unresolved] {opacity: 0; display: block; overflow: hidden; position: relative; } \n";var uc=document.querySelector("head");uc.insertBefore(tc,uc.firstChild);var vc=window;vc.WebComponents=vc.WebComponents||{flags:{}};var wc=document.querySelector('script[src*="webcomponents-bundle"]'),xc=/wc-(.+)/,yc={};if(!yc.noOpts){location.search.slice(1).split("&").forEach(function(a){a=a.split("=");var b;a[0]&&(b=a[0].match(xc))&&(yc[b[1]]=a[1]||!0)});if(wc)for(var zc=0,Ac=void 0;Ac=wc.attributes[zc];zc++)"src"!==Ac.name&&(yc[Ac.name]=Ac.value||!0);var Bc={};yc.log&&yc.log.split&&yc.log.split(",").forEach(function(a){Bc[a]=!0});yc.log=Bc}
vc.WebComponents.flags=yc;var Cc=yc.shadydom;if(Cc){vc.ShadyDOM=vc.ShadyDOM||{};vc.ShadyDOM.force=Cc;var Dc=yc.noPatch;vc.ShadyDOM.noPatch="true"===Dc?!0:Dc}var Ec=yc.register||yc.ce;Ec&&window.customElements&&(vc.customElements.forcePolyfill=Ec);/*

 Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
(function(){function a(){}function b(p,r){if(!p.childNodes.length)return[];switch(p.nodeType){case Node.DOCUMENT_NODE:return F.call(p,r);case Node.DOCUMENT_FRAGMENT_NODE:return E.call(p,r);default:return t.call(p,r)}}var c="undefined"===typeof HTMLTemplateElement,d=!(document.createDocumentFragment().cloneNode()instanceof DocumentFragment),e=!1;/Trident/.test(navigator.userAgent)&&function(){function p(z,R){if(z instanceof DocumentFragment)for(var ob;ob=z.firstChild;)B.call(this,ob,R);else B.call(this,
z,R);return z}e=!0;var r=Node.prototype.cloneNode;Node.prototype.cloneNode=function(z){z=r.call(this,z);this instanceof DocumentFragment&&(z.__proto__=DocumentFragment.prototype);return z};DocumentFragment.prototype.querySelectorAll=HTMLElement.prototype.querySelectorAll;DocumentFragment.prototype.querySelector=HTMLElement.prototype.querySelector;Object.defineProperties(DocumentFragment.prototype,{nodeType:{get:function(){return Node.DOCUMENT_FRAGMENT_NODE},configurable:!0},localName:{get:function(){},
configurable:!0},nodeName:{get:function(){return"#document-fragment"},configurable:!0}});var B=Node.prototype.insertBefore;Node.prototype.insertBefore=p;var K=Node.prototype.appendChild;Node.prototype.appendChild=function(z){z instanceof DocumentFragment?p.call(this,z,null):K.call(this,z);return z};var aa=Node.prototype.removeChild,ma=Node.prototype.replaceChild;Node.prototype.replaceChild=function(z,R){z instanceof DocumentFragment?(p.call(this,z,R),aa.call(this,R)):ma.call(this,z,R);return R};Document.prototype.createDocumentFragment=
function(){var z=this.createElement("df");z.__proto__=DocumentFragment.prototype;return z};var va=Document.prototype.importNode;Document.prototype.importNode=function(z,R){R=va.call(this,z,R||!1);z instanceof DocumentFragment&&(R.__proto__=DocumentFragment.prototype);return R}}();var f=Node.prototype.cloneNode,g=Document.prototype.createElement,h=Document.prototype.importNode,k=Node.prototype.removeChild,l=Node.prototype.appendChild,m=Node.prototype.replaceChild,q=DOMParser.prototype.parseFromString,
H=Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,"innerHTML")||{get:function(){return this.innerHTML},set:function(p){this.innerHTML=p}},C=Object.getOwnPropertyDescriptor(window.Node.prototype,"childNodes")||{get:function(){return this.childNodes}},t=Element.prototype.querySelectorAll,F=Document.prototype.querySelectorAll,E=DocumentFragment.prototype.querySelectorAll,N=function(){if(!c){var p=document.createElement("template"),r=document.createElement("template");r.content.appendChild(document.createElement("div"));
p.content.appendChild(r);p=p.cloneNode(!0);return 0===p.content.childNodes.length||0===p.content.firstChild.content.childNodes.length||d}}();if(c){var y=document.implementation.createHTMLDocument("template"),X=!0,x=document.createElement("style");x.textContent="template{display:none;}";var ta=document.head;ta.insertBefore(x,ta.firstElementChild);a.prototype=Object.create(HTMLElement.prototype);var ia=!document.createElement("div").hasOwnProperty("innerHTML");a.Z=function(p){if(!p.content&&p.namespaceURI===
document.documentElement.namespaceURI){p.content=y.createDocumentFragment();for(var r;r=p.firstChild;)l.call(p.content,r);if(ia)p.__proto__=a.prototype;else if(p.cloneNode=function(B){return a.va(this,B)},X)try{n(p),J(p)}catch(B){X=!1}a.bootstrap(p.content)}};var sa={option:["select"],thead:["table"],col:["colgroup","table"],tr:["tbody","table"],th:["tr","tbody","table"],td:["tr","tbody","table"]},n=function(p){Object.defineProperty(p,"innerHTML",{get:function(){return xa(this)},set:function(r){var B=
sa[(/<([a-z][^/\0>\x20\t\r\n\f]+)/i.exec(r)||["",""])[1].toLowerCase()];if(B)for(var K=0;K<B.length;K++)r="<"+B[K]+">"+r+"</"+B[K]+">";y.body.innerHTML=r;for(a.bootstrap(y);this.content.firstChild;)k.call(this.content,this.content.firstChild);r=y.body;if(B)for(K=0;K<B.length;K++)r=r.lastChild;for(;r.firstChild;)l.call(this.content,r.firstChild)},configurable:!0})},J=function(p){Object.defineProperty(p,"outerHTML",{get:function(){return"<template>"+this.innerHTML+"</template>"},set:function(r){if(this.parentNode){y.body.innerHTML=
r;for(r=this.ownerDocument.createDocumentFragment();y.body.firstChild;)l.call(r,y.body.firstChild);m.call(this.parentNode,r,this)}else throw Error("Failed to set the 'outerHTML' property on 'Element': This element has no parent node.");},configurable:!0})};n(a.prototype);J(a.prototype);a.bootstrap=function(p){p=b(p,"template");for(var r=0,B=p.length,K;r<B&&(K=p[r]);r++)a.Z(K)};document.addEventListener("DOMContentLoaded",function(){a.bootstrap(document)});Document.prototype.createElement=function(){var p=
g.apply(this,arguments);"template"===p.localName&&a.Z(p);return p};DOMParser.prototype.parseFromString=function(){var p=q.apply(this,arguments);a.bootstrap(p);return p};Object.defineProperty(HTMLElement.prototype,"innerHTML",{get:function(){return xa(this)},set:function(p){H.set.call(this,p);a.bootstrap(this)},configurable:!0,enumerable:!0});var ha=/[&\u00A0"]/g,kc=/[&\u00A0<>]/g,ib=function(p){switch(p){case "&":return"&amp;";case "<":return"&lt;";case ">":return"&gt;";case '"':return"&quot;";case "\u00a0":return"&nbsp;"}};
x=function(p){for(var r={},B=0;B<p.length;B++)r[p[B]]=!0;return r};var Va=x("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")),jb=x("style script xmp iframe noembed noframes plaintext noscript".split(" ")),xa=function(p,r){"template"===p.localName&&(p=p.content);for(var B="",K=r?r(p):C.get.call(p),aa=0,ma=K.length,va;aa<ma&&(va=K[aa]);aa++){a:{var z=va;var R=p;var ob=r;switch(z.nodeType){case Node.ELEMENT_NODE:for(var Kc=z.localName,pb="<"+Kc,Zh=z.attributes,
He=0;R=Zh[He];He++)pb+=" "+R.name+'="'+R.value.replace(ha,ib)+'"';pb+=">";z=Va[Kc]?pb:pb+xa(z,ob)+"</"+Kc+">";break a;case Node.TEXT_NODE:z=z.data;z=R&&jb[R.localName]?z:z.replace(kc,ib);break a;case Node.COMMENT_NODE:z="\x3c!--"+z.data+"--\x3e";break a;default:throw window.console.error(z),Error("not implemented");}}B+=z}return B}}if(c||N){a.va=function(p,r){var B=f.call(p,!1);this.Z&&this.Z(B);r&&(l.call(B.content,f.call(p.content,!0)),I(B.content,p.content));return B};var I=function(p,r){if(r.querySelectorAll&&
(r=b(r,"template"),0!==r.length)){p=b(p,"template");for(var B=0,K=p.length,aa,ma;B<K;B++)ma=r[B],aa=p[B],a&&a.Z&&a.Z(ma),m.call(aa.parentNode,u.call(ma,!0),aa)}},u=Node.prototype.cloneNode=function(p){if(!e&&d&&this instanceof DocumentFragment)if(p)var r=G.call(this.ownerDocument,this,!0);else return this.ownerDocument.createDocumentFragment();else this.nodeType===Node.ELEMENT_NODE&&"template"===this.localName&&this.namespaceURI==document.documentElement.namespaceURI?r=a.va(this,p):r=f.call(this,
p);p&&I(r,this);return r},G=Document.prototype.importNode=function(p,r){r=r||!1;if("template"===p.localName)return a.va(p,r);var B=h.call(this,p,r);if(r){I(B,p);p=b(B,'script:not([type]),script[type="application/javascript"],script[type="text/javascript"]');for(var K,aa=0;aa<p.length;aa++){K=p[aa];r=g.call(document,"script");r.textContent=K.textContent;for(var ma=K.attributes,va=0,z;va<ma.length;va++)z=ma[va],r.setAttribute(z.name,z.value);m.call(K.parentNode,r,K)}}return B}}c&&(window.HTMLTemplateElement=
a)})();/*

Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function Fc(){}Fc.prototype.toJSON=function(){return{}};function D(a){a.__shady||(a.__shady=new Fc);return a.__shady}function L(a){return a&&a.__shady};var M=window.ShadyDOM||{};M.cb=!(!Element.prototype.attachShadow||!Node.prototype.getRootNode);var Gc=Object.getOwnPropertyDescriptor(Node.prototype,"firstChild");M.D=!!(Gc&&Gc.configurable&&Gc.get);M.Ba=M.force||!M.cb;M.J=M.noPatch||!1;M.ha=M.preferPerformance;M.Da="on-demand"===M.J;var Hc;var Ic=M.querySelectorImplementation;Hc=-1<["native","selectorEngine"].indexOf(Ic)?Ic:void 0;M.wb=Hc;M.Ra=navigator.userAgent.match("Trident");
function Jc(){return Document.prototype.msElementsFromPoint?"msElementsFromPoint":"elementsFromPoint"}function Lc(a){return(a=L(a))&&void 0!==a.firstChild}function O(a){return a instanceof ShadowRoot}function Mc(a){return(a=(a=L(a))&&a.root)&&Nc(a)}var Oc=Element.prototype,Pc=Oc.matches||Oc.matchesSelector||Oc.mozMatchesSelector||Oc.msMatchesSelector||Oc.oMatchesSelector||Oc.webkitMatchesSelector,Qc=document.createTextNode(""),Rc=0,Sc=[];
(new MutationObserver(function(){for(;Sc.length;)try{Sc.shift()()}catch(a){throw Qc.textContent=Rc++,a;}})).observe(Qc,{characterData:!0});function Tc(a){Sc.push(a);Qc.textContent=Rc++}var Uc=document.contains?function(a,b){return a.__shady_native_contains(b)}:function(a,b){return a===b||a.documentElement&&a.documentElement.__shady_native_contains(b)};function Vc(a,b){for(;b;){if(b==a)return!0;b=b.__shady_parentNode}return!1}
function Wc(a){for(var b=a.length-1;0<=b;b--){var c=a[b],d=c.getAttribute("id")||c.getAttribute("name");d&&"length"!==d&&isNaN(d)&&(a[d]=c)}a.item=function(e){return a[e]};a.namedItem=function(e){if("length"!==e&&isNaN(e)&&a[e])return a[e];for(var f=ka(a),g=f.next();!g.done;g=f.next())if(g=g.value,(g.getAttribute("id")||g.getAttribute("name"))==e)return g;return null};return a}function Xc(a){var b=[];for(a=a.__shady_native_firstChild;a;a=a.__shady_native_nextSibling)b.push(a);return b}
function Yc(a){var b=[];for(a=a.__shady_firstChild;a;a=a.__shady_nextSibling)b.push(a);return b}function Zc(a,b,c){c.configurable=!0;if(c.value)a[b]=c.value;else try{Object.defineProperty(a,b,c)}catch(d){}}function P(a,b,c,d){c=void 0===c?"":c;for(var e in b)d&&0<=d.indexOf(e)||Zc(a,c+e,b[e])}function $c(a,b){for(var c in b)c in a&&Zc(a,c,b[c])}function Q(a){var b={};Object.getOwnPropertyNames(a).forEach(function(c){b[c]=Object.getOwnPropertyDescriptor(a,c)});return b}
function ad(a,b){for(var c=Object.getOwnPropertyNames(b),d=0,e;d<c.length;d++)e=c[d],a[e]=b[e]}function bd(a){return a instanceof Node?a:document.createTextNode(""+a)}function cd(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=arguments[c];if(1===b.length)return bd(b[0]);c=document.createDocumentFragment();b=ka(b);for(var d=b.next();!d.done;d=b.next())c.appendChild(bd(d.value));return c}
function dd(a){var b;for(b=void 0===b?1:b;0<b;b--)a=a.reduce(function(c,d){Array.isArray(d)?c.push.apply(c,w(d)):c.push(d);return c},[]);return a}function ed(a){var b=[],c=new Set;a=ka(a);for(var d=a.next();!d.done;d=a.next())d=d.value,c.has(d)||(b.push(d),c.add(d));return b};var fd=[],gd;function hd(a){gd||(gd=!0,Tc(id));fd.push(a)}function id(){gd=!1;for(var a=!!fd.length;fd.length;)fd.shift()();return a}id.list=fd;function jd(){this.g=!1;this.addedNodes=[];this.removedNodes=[];this.qa=new Set}function kd(a){a.g||(a.g=!0,Tc(function(){a.flush()}))}jd.prototype.flush=function(){if(this.g){this.g=!1;var a=this.takeRecords();a.length&&this.qa.forEach(function(b){b(a)})}};jd.prototype.takeRecords=function(){if(this.addedNodes.length||this.removedNodes.length){var a=[{addedNodes:this.addedNodes,removedNodes:this.removedNodes}];this.addedNodes=[];this.removedNodes=[];return a}return[]};
function ld(a,b){var c=D(a);c.ga||(c.ga=new jd);c.ga.qa.add(b);var d=c.ga;return{Va:b,X:d,Wa:a,takeRecords:function(){return d.takeRecords()}}}function md(a){var b=a&&a.X;b&&(b.qa.delete(a.Va),b.qa.size||(D(a.Wa).ga=null))}
function nd(a,b){var c=b.getRootNode();return a.map(function(d){var e=c===d.target.getRootNode();if(e&&d.addedNodes){if(e=[].slice.call(d.addedNodes).filter(function(f){return c===f.getRootNode()}),e.length)return d=Object.create(d),Object.defineProperty(d,"addedNodes",{value:e,configurable:!0}),d}else if(e)return d}).filter(function(d){return d})};var od=/[&\u00A0"]/g,pd=/[&\u00A0<>]/g;function qd(a){switch(a){case "&":return"&amp;";case "<":return"&lt;";case ">":return"&gt;";case '"':return"&quot;";case "\u00a0":return"&nbsp;"}}function rd(a){for(var b={},c=0;c<a.length;c++)b[a[c]]=!0;return b}var sd=rd("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")),td=rd("style script xmp iframe noembed noframes plaintext noscript".split(" "));
function ud(a,b){"template"===a.localName&&(a=a.content);for(var c="",d=b?b(a):a.childNodes,e=0,f=d.length,g=void 0;e<f&&(g=d[e]);e++){a:{var h=g;var k=a,l=b;switch(h.nodeType){case Node.ELEMENT_NODE:k=h.localName;for(var m="<"+k,q=h.attributes,H=0,C;C=q[H];H++)m+=" "+C.name+'="'+C.value.replace(od,qd)+'"';m+=">";h=sd[k]?m:m+ud(h,l)+"</"+k+">";break a;case Node.TEXT_NODE:h=h.data;h=k&&td[k.localName]?h:h.replace(pd,qd);break a;case Node.COMMENT_NODE:h="\x3c!--"+h.data+"--\x3e";break a;default:throw window.console.error(h),
Error("not implemented");}}c+=h}return c};var vd=M.D,wd={querySelector:function(a){return this.__shady_native_querySelector(a)},querySelectorAll:function(a){return this.__shady_native_querySelectorAll(a)}},xd={};function yd(a){xd[a]=function(b){return b["__shady_native_"+a]}}function zd(a,b){P(a,b,"__shady_native_");for(var c in b)yd(c)}function S(a,b){b=void 0===b?[]:b;for(var c=0;c<b.length;c++){var d=b[c],e=Object.getOwnPropertyDescriptor(a,d);e&&(Object.defineProperty(a,"__shady_native_"+d,e),e.value?wd[d]||(wd[d]=e.value):yd(d))}}
var Ad=document.createTreeWalker(document,NodeFilter.SHOW_ALL,null,!1),Bd=document.createTreeWalker(document,NodeFilter.SHOW_ELEMENT,null,!1),Cd=document.implementation.createHTMLDocument("inert");function Dd(a){for(var b;b=a.__shady_native_firstChild;)a.__shady_native_removeChild(b)}var Ed=["firstElementChild","lastElementChild","children","childElementCount"],Fd=["querySelector","querySelectorAll","append","prepend","replaceChildren"];
function Gd(){var a=["dispatchEvent","addEventListener","removeEventListener"];window.EventTarget?(S(window.EventTarget.prototype,a),void 0===window.__shady_native_addEventListener&&S(Window.prototype,a)):(S(Node.prototype,a),S(Window.prototype,a),S(XMLHttpRequest.prototype,a));vd?S(Node.prototype,"parentNode firstChild lastChild previousSibling nextSibling childNodes parentElement textContent".split(" ")):zd(Node.prototype,{parentNode:{get:function(){Ad.currentNode=this;return Ad.parentNode()}},
firstChild:{get:function(){Ad.currentNode=this;return Ad.firstChild()}},lastChild:{get:function(){Ad.currentNode=this;return Ad.lastChild()}},previousSibling:{get:function(){Ad.currentNode=this;return Ad.previousSibling()}},nextSibling:{get:function(){Ad.currentNode=this;return Ad.nextSibling()}},childNodes:{get:function(){var b=[];Ad.currentNode=this;for(var c=Ad.firstChild();c;)b.push(c),c=Ad.nextSibling();return b}},parentElement:{get:function(){Bd.currentNode=this;return Bd.parentNode()}},textContent:{get:function(){switch(this.nodeType){case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:for(var b=
document.createTreeWalker(this,NodeFilter.SHOW_TEXT,null,!1),c="",d;d=b.nextNode();)c+=d.nodeValue;return c;default:return this.nodeValue}},set:function(b){if("undefined"===typeof b||null===b)b="";switch(this.nodeType){case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:Dd(this);(0<b.length||this.nodeType===Node.ELEMENT_NODE)&&this.__shady_native_insertBefore(document.createTextNode(b),void 0);break;default:this.nodeValue=b}}}});S(Node.prototype,"appendChild insertBefore removeChild replaceChild cloneNode contains".split(" "));
S(HTMLElement.prototype,["parentElement","contains"]);a={firstElementChild:{get:function(){Bd.currentNode=this;return Bd.firstChild()}},lastElementChild:{get:function(){Bd.currentNode=this;return Bd.lastChild()}},children:{get:function(){var b=[];Bd.currentNode=this;for(var c=Bd.firstChild();c;)b.push(c),c=Bd.nextSibling();return Wc(b)}},childElementCount:{get:function(){return this.children?this.children.length:0}}};vd?(S(Element.prototype,Ed),S(Element.prototype,["previousElementSibling","nextElementSibling",
"innerHTML","className"]),S(HTMLElement.prototype,["children","innerHTML","className"])):(zd(Element.prototype,a),zd(Element.prototype,{previousElementSibling:{get:function(){Bd.currentNode=this;return Bd.previousSibling()}},nextElementSibling:{get:function(){Bd.currentNode=this;return Bd.nextSibling()}},innerHTML:{get:function(){return ud(this,Xc)},set:function(b){var c="template"===this.localName?this.content:this;Dd(c);var d=this.localName||"div";d=this.namespaceURI&&this.namespaceURI!==Cd.namespaceURI?
Cd.createElementNS(this.namespaceURI,d):Cd.createElement(d);d.innerHTML=b;for(b="template"===this.localName?d.content:d;d=b.__shady_native_firstChild;)c.__shady_native_insertBefore(d,void 0)}},className:{get:function(){return this.getAttribute("class")||""},set:function(b){this.setAttribute("class",b)}}}));S(Element.prototype,"setAttribute getAttribute hasAttribute removeAttribute toggleAttribute focus blur".split(" "));S(Element.prototype,Fd);S(HTMLElement.prototype,["focus","blur"]);window.HTMLTemplateElement&&
S(window.HTMLTemplateElement.prototype,["innerHTML"]);vd?S(DocumentFragment.prototype,Ed):zd(DocumentFragment.prototype,a);S(DocumentFragment.prototype,Fd);vd?(S(Document.prototype,Ed),S(Document.prototype,["activeElement"])):zd(Document.prototype,a);S(Document.prototype,["importNode","getElementById","elementFromPoint",Jc()]);S(Document.prototype,Fd)};var Hd=Q({get childNodes(){return this.__shady_childNodes},get firstChild(){return this.__shady_firstChild},get lastChild(){return this.__shady_lastChild},get childElementCount(){return this.__shady_childElementCount},get children(){return this.__shady_children},get firstElementChild(){return this.__shady_firstElementChild},get lastElementChild(){return this.__shady_lastElementChild},get shadowRoot(){return this.__shady_shadowRoot}}),Id=Q({get textContent(){return this.__shady_textContent},set textContent(a){this.__shady_textContent=
a},get innerHTML(){return this.__shady_innerHTML},set innerHTML(a){this.__shady_innerHTML=a}}),Jd=Q({get parentElement(){return this.__shady_parentElement},get parentNode(){return this.__shady_parentNode},get nextSibling(){return this.__shady_nextSibling},get previousSibling(){return this.__shady_previousSibling},get nextElementSibling(){return this.__shady_nextElementSibling},get previousElementSibling(){return this.__shady_previousElementSibling},get className(){return this.__shady_className},set className(a){this.__shady_className=
a}});function Kd(a){for(var b in a){var c=a[b];c&&(c.enumerable=!1)}}Kd(Hd);Kd(Id);Kd(Jd);var Ld=M.D||!0===M.J,Md=Ld?function(){}:function(a){var b=D(a);b.Ta||(b.Ta=!0,$c(a,Jd))},Nd=Ld?function(){}:function(a){var b=D(a);b.Sa||(b.Sa=!0,$c(a,Hd),window.customElements&&window.customElements.polyfillWrapFlushCallback&&!M.J||$c(a,Id))};var Od="__eventWrappers"+Date.now(),Pd=function(){var a=Object.getOwnPropertyDescriptor(Event.prototype,"composed");return a?function(b){return a.get.call(b)}:null}(),Qd=function(){function a(){}var b=!1,c={get capture(){b=!0;return!1}};window.addEventListener("test",a,c);window.removeEventListener("test",a,c);return b}();function Rd(a){if(null===a||"object"!==typeof a&&"function"!==typeof a){var b=!!a;var c=!1}else{b=!!a.capture;c=!!a.once;var d=a.U}return{Pa:d,capture:b,once:c,Na:Qd?a:b}}
var Sd={blur:!0,focus:!0,focusin:!0,focusout:!0,click:!0,dblclick:!0,mousedown:!0,mouseenter:!0,mouseleave:!0,mousemove:!0,mouseout:!0,mouseover:!0,mouseup:!0,wheel:!0,beforeinput:!0,input:!0,keydown:!0,keyup:!0,compositionstart:!0,compositionupdate:!0,compositionend:!0,touchstart:!0,touchend:!0,touchmove:!0,touchcancel:!0,pointerover:!0,pointerenter:!0,pointerdown:!0,pointermove:!0,pointerup:!0,pointercancel:!0,pointerout:!0,pointerleave:!0,gotpointercapture:!0,lostpointercapture:!0,dragstart:!0,
drag:!0,dragenter:!0,dragleave:!0,dragover:!0,drop:!0,dragend:!0,DOMActivate:!0,DOMFocusIn:!0,DOMFocusOut:!0,keypress:!0},Td={DOMAttrModified:!0,DOMAttributeNameChanged:!0,DOMCharacterDataModified:!0,DOMElementNameChanged:!0,DOMNodeInserted:!0,DOMNodeInsertedIntoDocument:!0,DOMNodeRemoved:!0,DOMNodeRemovedFromDocument:!0,DOMSubtreeModified:!0};function Ud(a){return a instanceof Node?a.__shady_getRootNode():a}
function Vd(a,b){var c=[],d=a;for(a=Ud(a);d;)c.push(d),d=d.__shady_assignedSlot?d.__shady_assignedSlot:d.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&d.host&&(b||d!==a)?d.host:d.__shady_parentNode;c[c.length-1]===document&&c.push(window);return c}function Wd(a){a.__composedPath||(a.__composedPath=Vd(a.target,!0));return a.__composedPath}function Xd(a,b){if(!O)return a;a=Vd(a,!0);for(var c=0,d,e=void 0,f,g=void 0;c<b.length;c++)if(d=b[c],f=Ud(d),f!==e&&(g=a.indexOf(f),e=f),!O(f)||-1<g)return d}
var Yd={get composed(){void 0===this.__composed&&(Pd?this.__composed="focusin"===this.type||"focusout"===this.type||Pd(this):!1!==this.isTrusted&&(this.__composed=Sd[this.type]));return this.__composed||!1},composedPath:function(){this.__composedPath||(this.__composedPath=Vd(this.__target,this.composed));return this.__composedPath},get target(){return Xd(this.currentTarget||this.__previousCurrentTarget,this.composedPath())},get relatedTarget(){if(!this.__relatedTarget)return null;this.__relatedTargetComposedPath||
(this.__relatedTargetComposedPath=Vd(this.__relatedTarget,!0));return Xd(this.currentTarget||this.__previousCurrentTarget,this.__relatedTargetComposedPath)},stopPropagation:function(){Event.prototype.stopPropagation.call(this);this.ua=!0},stopImmediatePropagation:function(){Event.prototype.stopImmediatePropagation.call(this);this.ua=this.__immediatePropagationStopped=!0}},Zd=M.D&&Object.getOwnPropertyDescriptor(Event.prototype,"eventPhase");
Zd&&(Object.defineProperty(Yd,"eventPhase",{get:function(){return this.currentTarget===this.target?Event.AT_TARGET:this.__shady_native_eventPhase},enumerable:!0,configurable:!0}),Object.defineProperty(Yd,"__shady_native_eventPhase",Zd));function $d(a){function b(c,d){c=new a(c,d);c.__composed=d&&!!d.composed;return c}b.__proto__=a;b.prototype=a.prototype;return b}var ae={focus:!0,blur:!0};function be(a){return a.__target!==a.target||a.__relatedTarget!==a.relatedTarget}
function ce(a,b,c){if(c=b.__handlers&&b.__handlers[a.type]&&b.__handlers[a.type][c])for(var d=0,e;(e=c[d])&&(!be(a)||a.target!==a.relatedTarget)&&(e.call(b,a),!a.__immediatePropagationStopped);d++);}var de=(new Event("e")).hasOwnProperty("currentTarget");
function ee(a){a=de?Object.create(a):a;var b=a.composedPath(),c=b.map(function(m){return Xd(m,b)}),d=a.bubbles,e=Object.getOwnPropertyDescriptor(a,"currentTarget");Object.defineProperty(a,"currentTarget",{configurable:!0,enumerable:!0,get:function(){return k}});var f=Event.CAPTURING_PHASE,g=Object.getOwnPropertyDescriptor(a,"eventPhase");Object.defineProperty(a,"eventPhase",{configurable:!0,enumerable:!0,get:function(){return f}});try{for(var h=b.length-1;0<=h;h--){var k=b[h];f=k===c[h]?Event.AT_TARGET:
Event.CAPTURING_PHASE;ce(a,k,"capture");if(a.ua)return}for(h=0;h<b.length;h++){k=b[h];var l=k===c[h];if(l||d)if(f=l?Event.AT_TARGET:Event.BUBBLING_PHASE,ce(a,k,"bubble"),a.ua)break}}finally{de||(e?Object.defineProperty(a,"currentTarget",e):delete a.currentTarget,g?Object.defineProperty(a,"eventPhase",g):delete a.eventPhase)}}function fe(a,b,c,d){for(var e=0;e<a.length;e++){var f=a[e],g=f.type,h=f.capture;if(b===f.node&&c===g&&d===h)return e}return-1}
function ge(a){id();return!M.ha&&this instanceof Node&&!Uc(document,this)?(a.__target||he(a,this),ee(a)):this.__shady_native_dispatchEvent(a)}
function ie(a,b,c){var d=this,e=Rd(c),f=e.capture,g=e.once,h=e.Pa;e=e.Na;if(b){var k=typeof b;if("function"===k||"object"===k)if("object"!==k||b.handleEvent&&"function"===typeof b.handleEvent){if(Td[a])return this.__shady_native_addEventListener(a,b,e);var l=h||this;if(h=b[Od]){if(-1<fe(h,l,a,f))return}else b[Od]=[];h=function(m){g&&d.__shady_removeEventListener(a,b,c);m.__target||he(m);if(l!==d){var q=Object.getOwnPropertyDescriptor(m,"currentTarget");Object.defineProperty(m,"currentTarget",{get:function(){return l},
configurable:!0});var H=Object.getOwnPropertyDescriptor(m,"eventPhase");Object.defineProperty(m,"eventPhase",{configurable:!0,enumerable:!0,get:function(){return f?Event.CAPTURING_PHASE:Event.BUBBLING_PHASE}})}m.__previousCurrentTarget=m.currentTarget;if(!O(l)&&"slot"!==l.localName||-1!=m.composedPath().indexOf(l))if(m.composed||-1<m.composedPath().indexOf(l))if(be(m)&&m.target===m.relatedTarget)m.eventPhase===Event.BUBBLING_PHASE&&m.stopImmediatePropagation();else if(m.eventPhase===Event.CAPTURING_PHASE||
m.bubbles||m.target===l||l instanceof Window){var C="function"===k?b.call(l,m):b.handleEvent&&b.handleEvent(m);l!==d&&(q?(Object.defineProperty(m,"currentTarget",q),q=null):delete m.currentTarget,H?(Object.defineProperty(m,"eventPhase",H),H=null):delete m.eventPhase);return C}};b[Od].push({node:l,type:a,capture:f,ub:h});this.__handlers=this.__handlers||{};this.__handlers[a]=this.__handlers[a]||{capture:[],bubble:[]};this.__handlers[a][f?"capture":"bubble"].push(h);ae[a]||this.__shady_native_addEventListener(a,
h,e)}}}function je(a,b,c){if(b){var d=Rd(c);c=d.capture;var e=d.Pa;d=d.Na;if(Td[a])return this.__shady_native_removeEventListener(a,b,d);var f=e||this;e=void 0;var g=null;try{g=b[Od]}catch(h){}g&&(f=fe(g,f,a,c),-1<f&&(e=g.splice(f,1)[0].ub,g.length||(b[Od]=void 0)));this.__shady_native_removeEventListener(a,e||b,d);e&&this.__handlers&&this.__handlers[a]&&(a=this.__handlers[a][c?"capture":"bubble"],b=a.indexOf(e),-1<b&&a.splice(b,1))}}
function ke(){for(var a in ae)window.__shady_native_addEventListener(a,function(b){b.__target||(he(b),ee(b))},!0)}var le=Q(Yd);function he(a,b){b=void 0===b?a.target:b;a.__target=b;a.__relatedTarget=a.relatedTarget;if(M.D){b=Object.getPrototypeOf(a);if(!b.hasOwnProperty("__shady_patchedProto")){var c=Object.create(b);c.__shady_sourceProto=b;P(c,le);b.__shady_patchedProto=c}a.__proto__=b.__shady_patchedProto}else P(a,le)}var me=$d(Event),ne=$d(CustomEvent),oe=$d(MouseEvent);
function pe(){if(!Pd&&Object.getOwnPropertyDescriptor(Event.prototype,"isTrusted")){var a=function(){var b=new MouseEvent("click",{bubbles:!0,cancelable:!0,composed:!0});this.__shady_dispatchEvent(b)};Element.prototype.click?Element.prototype.click=a:HTMLElement.prototype.click&&(HTMLElement.prototype.click=a)}}
var qe=Object.getOwnPropertyNames(Element.prototype).filter(function(a){return"on"===a.substring(0,2)}),re=Object.getOwnPropertyNames(HTMLElement.prototype).filter(function(a){return"on"===a.substring(0,2)});function se(a){return{set:function(b){var c=D(this),d=a.substring(2);c.T||(c.T={});c.T[a]&&this.removeEventListener(d,c.T[a]);this.__shady_addEventListener(d,b);c.T[a]=b},get:function(){var b=L(this);return b&&b.T&&b.T[a]},configurable:!0}};function te(a,b){return{index:a,ia:[],pa:b}}
function ue(a,b,c,d){var e=0,f=0,g=0,h=0,k=Math.min(b-e,d-f);if(0==e&&0==f)a:{for(g=0;g<k;g++)if(a[g]!==c[g])break a;g=k}if(b==a.length&&d==c.length){h=a.length;for(var l=c.length,m=0;m<k-g&&ve(a[--h],c[--l]);)m++;h=m}e+=g;f+=g;b-=h;d-=h;if(0==b-e&&0==d-f)return[];if(e==b){for(b=te(e,0);f<d;)b.ia.push(c[f++]);return[b]}if(f==d)return[te(e,b-e)];k=e;g=f;d=d-g+1;h=b-k+1;b=Array(d);for(l=0;l<d;l++)b[l]=Array(h),b[l][0]=l;for(l=0;l<h;l++)b[0][l]=l;for(l=1;l<d;l++)for(m=1;m<h;m++)if(a[k+m-1]===c[g+l-1])b[l][m]=
b[l-1][m-1];else{var q=b[l-1][m]+1,H=b[l][m-1]+1;b[l][m]=q<H?q:H}k=b.length-1;g=b[0].length-1;d=b[k][g];for(a=[];0<k||0<g;)0==k?(a.push(2),g--):0==g?(a.push(3),k--):(h=b[k-1][g-1],l=b[k-1][g],m=b[k][g-1],q=l<m?l<h?l:h:m<h?m:h,q==h?(h==d?a.push(0):(a.push(1),d=h),k--,g--):q==l?(a.push(3),k--,d=l):(a.push(2),g--,d=m));a.reverse();b=void 0;k=[];for(g=0;g<a.length;g++)switch(a[g]){case 0:b&&(k.push(b),b=void 0);e++;f++;break;case 1:b||(b=te(e,0));b.pa++;e++;b.ia.push(c[f]);f++;break;case 2:b||(b=te(e,
0));b.pa++;e++;break;case 3:b||(b=te(e,0)),b.ia.push(c[f]),f++}b&&k.push(b);return k}function ve(a,b){return a===b};var we=Q({dispatchEvent:ge,addEventListener:ie,removeEventListener:je});var xe=null;function ye(){xe||(xe=window.ShadyCSS&&window.ShadyCSS.ScopingShim);return xe||null}function ze(a,b,c){var d=ye();return d&&"class"===b?(d.setElementClass(a,c),!0):!1}function Ae(a,b){var c=ye();c&&c.unscopeNode(a,b)}function Be(a,b){var c=ye();if(!c)return!0;if(a.nodeType===Node.DOCUMENT_FRAGMENT_NODE){c=!0;for(a=a.__shady_firstChild;a;a=a.__shady_nextSibling)c=c&&Be(a,b);return c}return a.nodeType!==Node.ELEMENT_NODE?!0:c.currentScopeForNode(a)===b}
function Ce(a){if(a.nodeType!==Node.ELEMENT_NODE)return"";var b=ye();return b?b.currentScopeForNode(a):""}function De(a,b){if(a)for(a.nodeType===Node.ELEMENT_NODE&&b(a),a=a.__shady_firstChild;a;a=a.__shady_nextSibling)a.nodeType===Node.ELEMENT_NODE&&De(a,b)};var Ee=window.document,Fe=M.ha,Ge=Object.getOwnPropertyDescriptor(Node.prototype,"isConnected"),Ie=Ge&&Ge.get;function Je(a){for(var b;b=a.__shady_firstChild;)a.__shady_removeChild(b)}function Ke(a){var b=L(a);if(b&&void 0!==b.ta)for(b=a.__shady_firstChild;b;b=b.__shady_nextSibling)Ke(b);if(a=L(a))a.ta=void 0}function Le(a){var b=a;if(a&&"slot"===a.localName){var c=L(a);(c=c&&c.aa)&&(b=c.length?c[0]:Le(a.__shady_nextSibling))}return b}
function Me(a,b,c){if(a=(a=L(a))&&a.ga){if(b)if(b.nodeType===Node.DOCUMENT_FRAGMENT_NODE)for(var d=0,e=b.childNodes.length;d<e;d++)a.addedNodes.push(b.childNodes[d]);else a.addedNodes.push(b);c&&a.removedNodes.push(c);kd(a)}}
var Te=Q({get parentNode(){var a=L(this);a=a&&a.parentNode;return void 0!==a?a:this.__shady_native_parentNode},get firstChild(){var a=L(this);a=a&&a.firstChild;return void 0!==a?a:this.__shady_native_firstChild},get lastChild(){var a=L(this);a=a&&a.lastChild;return void 0!==a?a:this.__shady_native_lastChild},get nextSibling(){var a=L(this);a=a&&a.nextSibling;return void 0!==a?a:this.__shady_native_nextSibling},get previousSibling(){var a=L(this);a=a&&a.previousSibling;return void 0!==a?a:this.__shady_native_previousSibling},
get childNodes(){if(Lc(this)){var a=L(this);if(!a.childNodes){a.childNodes=[];for(var b=this.__shady_firstChild;b;b=b.__shady_nextSibling)a.childNodes.push(b)}var c=a.childNodes}else c=this.__shady_native_childNodes;c.item=function(d){return c[d]};return c},get parentElement(){var a=L(this);(a=a&&a.parentNode)&&a.nodeType!==Node.ELEMENT_NODE&&(a=null);return void 0!==a?a:this.__shady_native_parentElement},get isConnected(){if(Ie&&Ie.call(this))return!0;if(this.nodeType==Node.DOCUMENT_FRAGMENT_NODE)return!1;
var a=this.ownerDocument;if(null===a||Uc(a,this))return!0;for(a=this;a&&!(a instanceof Document);)a=a.__shady_parentNode||(O(a)?a.host:void 0);return!!(a&&a instanceof Document)},get textContent(){if(Lc(this)){for(var a=[],b=this.__shady_firstChild;b;b=b.__shady_nextSibling)b.nodeType!==Node.COMMENT_NODE&&a.push(b.__shady_textContent);return a.join("")}return this.__shady_native_textContent},set textContent(a){if("undefined"===typeof a||null===a)a="";switch(this.nodeType){case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:if(!Lc(this)&&
M.D){var b=this.__shady_firstChild;(b!=this.__shady_lastChild||b&&b.nodeType!=Node.TEXT_NODE)&&Je(this);this.__shady_native_textContent=a}else Je(this),(0<a.length||this.nodeType===Node.ELEMENT_NODE)&&this.__shady_insertBefore(document.createTextNode(a));break;default:this.nodeValue=a}},insertBefore:function(a,b){if(this.ownerDocument!==Ee&&a.ownerDocument!==Ee)return this.__shady_native_insertBefore(a,b),a;if(a===this)throw Error("Failed to execute 'appendChild' on 'Node': The new child element contains the parent.");
if(b){var c=L(b);c=c&&c.parentNode;if(void 0!==c&&c!==this||void 0===c&&b.__shady_native_parentNode!==this)throw Error("Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.");}if(b===a)return a;Me(this,a);var d=[],e=(c=Ne(this))?c.host.localName:Ce(this),f=a.__shady_parentNode;if(f){var g=Ce(a);var h=!!c||!Ne(a)||Fe&&void 0!==this.__noInsertionPoint;f.__shady_removeChild(a,h)}f=!0;var k=(!Fe||void 0===a.__noInsertionPoint&&void 0===
this.__noInsertionPoint)&&!Be(a,e),l=c&&!a.__noInsertionPoint&&(!Fe||a.nodeType===Node.DOCUMENT_FRAGMENT_NODE);if(l||k)k&&(g=g||Ce(a)),De(a,function(m){l&&"slot"===m.localName&&d.push(m);if(k){var q=g;ye()&&(q&&Ae(m,q),(q=ye())&&q.scopeNode(m,e))}});d.length&&(Oe(c),c.i.push.apply(c.i,w(d)),Pe(c));Lc(this)&&(Qe(a,this,b),h=L(this),h.root?(f=!1,Mc(this)&&Pe(h.root)):c&&"slot"===this.localName&&(f=!1,Pe(c)));f?(c=O(this)?this.host:this,b?(b=Le(b),c.__shady_native_insertBefore(a,b)):c.__shady_native_appendChild(a)):
a.ownerDocument!==this.ownerDocument&&this.ownerDocument.adoptNode(a);return a},appendChild:function(a){if(this!=a||!O(a))return this.__shady_insertBefore(a)},removeChild:function(a,b){b=void 0===b?!1:b;if(this.ownerDocument!==Ee)return this.__shady_native_removeChild(a);if(a.__shady_parentNode!==this)throw Error("The node to be removed is not a child of this node: "+a);Me(this,null,a);var c=Ne(a),d=c&&Re(c,a),e=L(this);if(Lc(this)&&(Se(a,this),Mc(this))){Pe(e.root);var f=!0}if(ye()&&!b&&c&&a.nodeType!==
Node.TEXT_NODE){var g=Ce(a);De(a,function(h){Ae(h,g)})}Ke(a);c&&((b="slot"===this.localName)&&(f=!0),(d||b)&&Pe(c));f||(f=O(this)?this.host:this,(!e.root&&"slot"!==a.localName||f===a.__shady_native_parentNode)&&f.__shady_native_removeChild(a));return a},replaceChild:function(a,b){this.__shady_insertBefore(a,b);this.__shady_removeChild(b);return a},cloneNode:function(a){if("template"==this.localName)return this.__shady_native_cloneNode(a);var b=this.__shady_native_cloneNode(!1);if(a&&b.nodeType!==
Node.ATTRIBUTE_NODE){a=this.__shady_firstChild;for(var c;a;a=a.__shady_nextSibling)c=a.__shady_cloneNode(!0),b.__shady_appendChild(c)}return b},getRootNode:function(a){if(this&&this.nodeType){var b=D(this),c=b.ta;void 0===c&&(O(this)?(c=this,b.ta=c):(c=(c=this.__shady_parentNode)?c.__shady_getRootNode(a):this,document.documentElement.__shady_native_contains(this)&&(b.ta=c)));return c}},contains:function(a){return Vc(this,a)}});var Ve=Q({get assignedSlot(){var a=this.__shady_parentNode;(a=a&&a.__shady_shadowRoot)&&Ue(a);return(a=L(this))&&a.assignedSlot||null}});/*

 Copyright (c) 2022 The Polymer Project Authors
 SPDX-License-Identifier: BSD-3-Clause
*/
var We=new Map;[["(",{end:")",sa:!0}],["[",{end:"]",sa:!0}],['"',{end:'"',sa:!1}],["'",{end:"'",sa:!1}]].forEach(function(a){var b=ka(a);a=b.next().value;b=b.next().value;We.set(a,b)});function Xe(a,b,c,d){for(d=void 0===d?!0:d;b<a.length;b++)if("\\"===a[b]&&b<a.length-1&&"\n"!==a[b+1])b++;else{if(-1!==c.indexOf(a[b]))return b;if(d&&We.has(a[b])){var e=We.get(a[b]);b=Xe(a,b+1,[e.end],e.sa)}}return a.length}
function Ye(a){function b(){if(0<d.length){for(;" "===d[d.length-1];)d.pop();c.push({La:d.filter(function(k,l){return 0===l%2}),Za:d.filter(function(k,l){return 1===l%2})});d.length=0}}for(var c=[],d=[],e=0;e<a.length;){var f=d[d.length-1],g=Xe(a,e,[","," ",">","+","~"]),h=g===e?a[e]:a.substring(e,g);if(","===h)b();else if(-1===[void 0," ",">","+","~"].indexOf(f)||" "!==h)" "===f&&-1!==[">","+","~"].indexOf(h)?d[d.length-1]=h:d.push(h);e=g+(g===e?1:0)}b();return c};function Ze(a,b,c){var d=[];$e(a,b,c,d);return d}function $e(a,b,c,d){for(a=a.__shady_firstChild;a;a=a.__shady_nextSibling){var e;if(e=a.nodeType===Node.ELEMENT_NODE){e=a;var f=b,g=c,h=d,k=f(e);k&&h.push(e);g&&g(k)?e=k:($e(e,f,g,h),e=void 0)}if(e)break}}
var af={get firstElementChild(){var a=L(this);if(a&&void 0!==a.firstChild){for(a=this.__shady_firstChild;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.__shady_nextSibling;return a}return this.__shady_native_firstElementChild},get lastElementChild(){var a=L(this);if(a&&void 0!==a.lastChild){for(a=this.__shady_lastChild;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.__shady_previousSibling;return a}return this.__shady_native_lastElementChild},get children(){return Lc(this)?Wc(Array.prototype.filter.call(Yc(this),
function(a){return a.nodeType===Node.ELEMENT_NODE})):this.__shady_native_children},get childElementCount(){var a=this.__shady_children;return a?a.length:0}},bf=Q((af.append=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=arguments[c];this.__shady_insertBefore(cd.apply(null,w(b)),null)},af.prepend=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=arguments[c];this.__shady_insertBefore(cd.apply(null,w(b)),this.__shady_firstChild)},af.replaceChildren=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=
arguments[c];for(;null!==(c=this.__shady_firstChild);)this.__shady_removeChild(c);this.__shady_insertBefore(cd.apply(null,w(b)),null)},af));
function cf(a,b){function c(e,f){return(e===a||-1===f.indexOf(":scope"))&&Pc.call(e,f)}var d=Ye(b);if(1>d.length)return[];for(b=dd(Ze(a,function(){return!0}).map(function(e){return dd(d.map(function(f){var g=f.La,h=g.length-1;return c(e,g[h])?{target:e,da:f,fa:e,index:h}:[]}))}));b.some(function(e){return 0<e.index});)b=dd(b.map(function(e){if(0>=e.index)return e;var f=e.target,g=e.fa,h=e.da;e=e.index-1;var k=h.Za[e],l=h.La[e];if(" "===k){k=[];for(g=g.__shady_parentElement;g;g=g.__shady_parentElement)c(g,
l)&&k.push({target:f,da:h,fa:g,index:e});return k}if(">"===k)return g=g.__shady_parentElement,c(g,l)?{target:f,da:h,fa:g,index:e}:[];if("+"===k)return(g=g.__shady_previousElementSibling)&&c(g,l)?{target:f,da:h,fa:g,index:e}:[];if("~"===k){k=[];for(g=g.__shady_previousElementSibling;g;g=g.__shady_previousElementSibling)c(g,l)&&k.push({target:f,da:h,fa:g,index:e});return k}throw Error("Unrecognized combinator: '"+k+"'.");}));return ed(b.map(function(e){return e.target}))}
var df=M.querySelectorImplementation,ef=Q({querySelector:function(a){if("native"===df){var b=Array.prototype.slice.call((this instanceof ShadowRoot?this.host:this).__shady_native_querySelectorAll(a)),c=this.__shady_getRootNode();b=ka(b);for(var d=b.next();!d.done;d=b.next())if(d=d.value,d.__shady_getRootNode()==c)return d;return null}if("selectorEngine"===df)return cf(this,a)[0]||null;if(void 0===df)return Ze(this,function(e){return Pc.call(e,a)},function(e){return!!e})[0]||null;throw Error("Unrecognized value of ShadyDOM.querySelectorImplementation: '"+
(df+"'"));},querySelectorAll:function(a,b){if(b||"native"===df){b=Array.prototype.slice.call((this instanceof ShadowRoot?this.host:this).__shady_native_querySelectorAll(a));var c=this.__shady_getRootNode();return Wc(b.filter(function(d){return d.__shady_getRootNode()==c}))}if("selectorEngine"===df)return Wc(cf(this,a));if(void 0===df)return Wc(Ze(this,function(d){return Pc.call(d,a)}));throw Error("Unrecognized value of ShadyDOM.querySelectorImplementation: '"+(df+"'"));}}),ff=M.ha&&!M.J?ad({},bf):
bf;ad(bf,ef);var gf=Q({after:function(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=arguments[c];c=this.__shady_parentNode;if(null!==c){var d=this.__shady_nextSibling;c.__shady_insertBefore(cd.apply(null,w(b)),d)}},before:function(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=arguments[c];c=this.__shady_parentNode;null!==c&&c.__shady_insertBefore(cd.apply(null,w(b)),this)},remove:function(){var a=this.__shady_parentNode;null!==a&&a.__shady_removeChild(this)},replaceWith:function(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=
arguments[c];c=this.__shady_parentNode;if(null!==c){var d=this.__shady_nextSibling;c.__shady_removeChild(this);c.__shady_insertBefore(cd.apply(null,w(b)),d)}}});var hf=window.document;function jf(a,b){if("slot"===b)a=a.__shady_parentNode,Mc(a)&&Pe(L(a).root);else if("slot"===a.localName&&"name"===b&&(b=Ne(a))){if(b.g){kf(b);var c=a.Ua,d=lf(a);if(d!==c){c=b.h[c];var e=c.indexOf(a);0<=e&&c.splice(e,1);c=b.h[d]||(b.h[d]=[]);c.push(a);1<c.length&&(b.h[d]=mf(c))}}Pe(b)}}
var nf=Q({get previousElementSibling(){var a=L(this);if(a&&void 0!==a.previousSibling){for(a=this.__shady_previousSibling;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.__shady_previousSibling;return a}return this.__shady_native_previousElementSibling},get nextElementSibling(){var a=L(this);if(a&&void 0!==a.nextSibling){for(a=this.__shady_nextSibling;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.__shady_nextSibling;return a}return this.__shady_native_nextElementSibling},get slot(){return this.getAttribute("slot")},
set slot(a){this.__shady_setAttribute("slot",a)},get className(){return this.getAttribute("class")||""},set className(a){this.__shady_setAttribute("class",a)},setAttribute:function(a,b){this.ownerDocument!==hf?this.__shady_native_setAttribute(a,b):ze(this,a,b)||(this.__shady_native_setAttribute(a,b),jf(this,a))},removeAttribute:function(a){this.ownerDocument!==hf?this.__shady_native_removeAttribute(a):ze(this,a,"")?""===this.getAttribute(a)&&this.__shady_native_removeAttribute(a):(this.__shady_native_removeAttribute(a),
jf(this,a))},toggleAttribute:function(a,b){if(this.ownerDocument!==hf)return this.__shady_native_toggleAttribute(a,b);if(!ze(this,a,""))return b=this.__shady_native_toggleAttribute(a,b),jf(this,a),b;if(""===this.getAttribute(a)&&!b)return this.__shady_native_toggleAttribute(a,b)}});M.ha||qe.forEach(function(a){nf[a]=se(a)});
var sf=Q({attachShadow:function(a){if(!this)throw Error("Must provide a host.");if(!a)throw Error("Not enough arguments.");if(a.shadyUpgradeFragment&&!M.Ra){var b=a.shadyUpgradeFragment;b.__proto__=ShadowRoot.prototype;of(b,this,a);pf(b,b);a=b.__noInsertionPoint?null:b.querySelectorAll("slot");b.__noInsertionPoint=void 0;if(a&&a.length){var c=b;Oe(c);c.i.push.apply(c.i,w(a));Pe(b)}b.host.__shady_native_appendChild(b)}else b=new qf(rf,this,a);return this.__CE_shadowRoot=b},get shadowRoot(){var a=L(this);
return a&&a.lb||null}});ad(nf,sf);var tf=document.implementation.createHTMLDocument("inert"),uf=Q({get innerHTML(){return Lc(this)?ud("template"===this.localName?this.content:this,Yc):this.__shady_native_innerHTML},set innerHTML(a){if("template"===this.localName)this.__shady_native_innerHTML=a;else{Je(this);var b=this.localName||"div";b=this.namespaceURI&&this.namespaceURI!==tf.namespaceURI?tf.createElementNS(this.namespaceURI,b):tf.createElement(b);for(M.D?b.__shady_native_innerHTML=a:b.innerHTML=a;a=b.__shady_firstChild;)this.__shady_insertBefore(a)}}});var vf=Q({blur:function(){var a=L(this);(a=(a=a&&a.root)&&a.activeElement)?a.__shady_blur():this.__shady_native_blur()}});M.ha||re.forEach(function(a){vf[a]=se(a)});var wf=Q({assignedNodes:function(a){if("slot"===this.localName){var b=this.__shady_getRootNode();b&&O(b)&&Ue(b);return(b=L(this))?(a&&a.flatten?b.aa:b.assignedNodes)||[]:[]}},addEventListener:function(a,b,c){if("slot"!==this.localName||"slotchange"===a)ie.call(this,a,b,c);else{"object"!==typeof c&&(c={capture:!!c});var d=this.__shady_parentNode;if(!d)throw Error("ShadyDOM cannot attach event to slot unless it has a `parentNode`");c.U=this;d.__shady_addEventListener(a,b,c)}},removeEventListener:function(a,
b,c){if("slot"!==this.localName||"slotchange"===a)je.call(this,a,b,c);else{"object"!==typeof c&&(c={capture:!!c});var d=this.__shady_parentNode;if(!d)throw Error("ShadyDOM cannot attach event to slot unless it has a `parentNode`");c.U=this;d.__shady_removeEventListener(a,b,c)}}});var xf=Q({getElementById:function(a){return""===a?null:Ze(this,function(b){return b.id==a},function(b){return!!b})[0]||null}});function yf(a,b){for(var c;b&&!a.has(c=b.__shady_getRootNode());)b=c.host;return b}function zf(a){var b=new Set;for(b.add(a);O(a)&&a.host;)a=a.host.__shady_getRootNode(),b.add(a);return b}
var Af="__shady_native_"+Jc(),Bf=Q({get activeElement(){var a=M.D?document.__shady_native_activeElement:document.activeElement;if(!a||!a.nodeType)return null;var b=!!O(this);if(!(this===document||b&&this.host!==a&&this.host.__shady_native_contains(a)))return null;for(b=Ne(a);b&&b!==this;)a=b.host,b=Ne(a);return this===document?b?null:a:b===this?a:null},elementsFromPoint:function(a,b){a=document[Af](a,b);if(this===document&&M.useNativeDocumentEFP)return a;a=[].slice.call(a);b=zf(this);for(var c=new Set,
d=0;d<a.length;d++)c.add(yf(b,a[d]));var e=[];c.forEach(function(f){return e.push(f)});return e},elementFromPoint:function(a,b){return this===document&&M.useNativeDocumentEFP?this.__shady_native_elementFromPoint(a,b):this.__shady_elementsFromPoint(a,b)[0]||null}});var Cf=window.document,Df=Q({importNode:function(a,b){if(a.ownerDocument!==Cf||"template"===a.localName)return this.__shady_native_importNode(a,b);var c=this.__shady_native_importNode(a,!1);if(b)for(a=a.__shady_firstChild;a;a=a.__shady_nextSibling)b=this.__shady_importNode(a,!0),c.__shady_appendChild(b);return c}});var Ef=Q({dispatchEvent:ge,addEventListener:ie.bind(window),removeEventListener:je.bind(window)});var Ff={};Object.getOwnPropertyDescriptor(HTMLElement.prototype,"parentElement")&&(Ff.parentElement=Te.parentElement);Object.getOwnPropertyDescriptor(HTMLElement.prototype,"contains")&&(Ff.contains=Te.contains);Object.getOwnPropertyDescriptor(HTMLElement.prototype,"children")&&(Ff.children=bf.children);Object.getOwnPropertyDescriptor(HTMLElement.prototype,"innerHTML")&&(Ff.innerHTML=uf.innerHTML);Object.getOwnPropertyDescriptor(HTMLElement.prototype,"className")&&(Ff.className=nf.className);
var Gf={EventTarget:[we],Node:[Te,window.EventTarget?null:we],Text:[Ve],Comment:[Ve],CDATASection:[Ve],ProcessingInstruction:[Ve],Element:[nf,bf,gf,Ve,!M.D||"innerHTML"in Element.prototype?uf:null,window.HTMLSlotElement?null:wf],HTMLElement:[vf,Ff],HTMLSlotElement:[wf],DocumentFragment:[ff,xf],Document:[Df,ff,xf,Bf],Window:[Ef],CharacterData:[gf],XMLHttpRequest:[window.EventTarget?null:we]},Hf=M.D?null:["innerHTML","textContent"];
function If(a,b,c,d){b.forEach(function(e){return a&&e&&P(a,e,c,d)})}function Jf(a){var b=a?null:Hf,c;for(c in Gf)If(window[c]&&window[c].prototype,Gf[c],a,b)}["Text","Comment","CDATASection","ProcessingInstruction"].forEach(function(a){var b=window[a],c=Object.create(b.prototype);c.__shady_protoIsPatched=!0;If(c,Gf.EventTarget);If(c,Gf.Node);Gf[a]&&If(c,Gf[a]);b.prototype.__shady_patchedProto=c});
function Kf(a){a.__shady_protoIsPatched=!0;If(a,Gf.EventTarget);If(a,Gf.Node);If(a,Gf.Element);If(a,Gf.HTMLElement);If(a,Gf.HTMLSlotElement);return a};var Lf=M.Da,Mf=M.D;function Nf(a,b){if(Lf&&!a.__shady_protoIsPatched&&!O(a)){var c=Object.getPrototypeOf(a),d=c.hasOwnProperty("__shady_patchedProto")&&c.__shady_patchedProto;d||(d=Object.create(c),Kf(d),c.__shady_patchedProto=d);Object.setPrototypeOf(a,d)}Mf||(1===b?Md(a):2===b&&Nd(a))}
function Of(a,b,c,d){Nf(a,1);d=d||null;var e=D(a),f=d?D(d):null;e.previousSibling=d?f.previousSibling:b.__shady_lastChild;if(f=L(e.previousSibling))f.nextSibling=a;if(f=L(e.nextSibling=d))f.previousSibling=a;e.parentNode=b;d?d===c.firstChild&&(c.firstChild=a):(c.lastChild=a,c.firstChild||(c.firstChild=a));c.childNodes=null}
function Qe(a,b,c){Nf(b,2);var d=D(b);void 0!==d.firstChild&&(d.childNodes=null);if(a.nodeType===Node.DOCUMENT_FRAGMENT_NODE)for(a=a.__shady_native_firstChild;a;a=a.__shady_native_nextSibling)Of(a,b,d,c);else Of(a,b,d,c)}
function Se(a,b){var c=D(a);b=D(b);a===b.firstChild&&(b.firstChild=c.nextSibling);a===b.lastChild&&(b.lastChild=c.previousSibling);a=c.previousSibling;var d=c.nextSibling;a&&(D(a).nextSibling=d);d&&(D(d).previousSibling=a);c.parentNode=c.previousSibling=c.nextSibling=void 0;void 0!==b.childNodes&&(b.childNodes=null)}
function pf(a,b){var c=D(a);if(b||void 0===c.firstChild){c.childNodes=null;var d=c.firstChild=a.__shady_native_firstChild;c.lastChild=a.__shady_native_lastChild;Nf(a,2);c=d;for(d=void 0;c;c=c.__shady_native_nextSibling){var e=D(c);e.parentNode=b||a;e.nextSibling=c.__shady_native_nextSibling;e.previousSibling=d||null;d=c;Nf(c,1)}}};var Pf=Q({addEventListener:function(a,b,c){"object"!==typeof c&&(c={capture:!!c});c.U=c.U||this;this.host.__shady_addEventListener(a,b,c)},removeEventListener:function(a,b,c){"object"!==typeof c&&(c={capture:!!c});c.U=c.U||this;this.host.__shady_removeEventListener(a,b,c)}});function Qf(a,b){P(a,Pf,b);P(a,Bf,b);P(a,uf,b);P(a,bf,b);M.J&&!b?(P(a,Te,b),P(a,xf,b)):M.D||(P(a,Jd),P(a,Hd),P(a,Id))};var rf={},Rf=M.deferConnectionCallbacks&&"loading"===document.readyState,Sf;function Tf(a){var b=[];do b.unshift(a);while(a=a.__shady_parentNode);return b}function qf(a,b,c){if(a!==rf)throw new TypeError("Illegal constructor");this.g=null;of(this,b,c)}
function of(a,b,c){a.host=b;a.mode=c&&c.mode;pf(a.host);b=D(a.host);b.root=a;b.lb="closed"!==a.mode?a:null;b=D(a);b.firstChild=b.lastChild=b.parentNode=b.nextSibling=b.previousSibling=null;if(M.preferPerformance)for(;b=a.host.__shady_native_firstChild;)a.host.__shady_native_removeChild(b);else Pe(a)}function Pe(a){a.Y||(a.Y=!0,hd(function(){return Ue(a)}))}
function Ue(a){var b;if(b=a.Y){for(var c;a;)a:{a.Y&&(c=a),b=a;a=b.host.__shady_getRootNode();if(O(a)&&(b=L(b.host))&&0<b.ka)break a;a=void 0}b=c}(c=b)&&c._renderSelf()}
qf.prototype._renderSelf=function(){var a=Rf;Rf=!0;this.Y=!1;if(this.g){kf(this);for(var b=0,c;b<this.g.length;b++){c=this.g[b];var d=L(c),e=d.assignedNodes;d.assignedNodes=[];d.aa=[];if(d.Ja=e)for(d=0;d<e.length;d++){var f=L(e[d]);f.xa=f.assignedSlot;f.assignedSlot===c&&(f.assignedSlot=null)}}for(b=this.host.__shady_firstChild;b;b=b.__shady_nextSibling)Uf(this,b);for(b=0;b<this.g.length;b++){c=this.g[b];e=L(c);if(!e.assignedNodes.length)for(d=c.__shady_firstChild;d;d=d.__shady_nextSibling)Uf(this,
d,c);(d=(d=L(c.__shady_parentNode))&&d.root)&&(Nc(d)||d.Y)&&d._renderSelf();Vf(this,e.aa,e.assignedNodes);if(d=e.Ja){for(f=0;f<d.length;f++)L(d[f]).xa=null;e.Ja=null;d.length>e.assignedNodes.length&&(e.Aa=!0)}e.Aa&&(e.Aa=!1,Wf(this,c))}c=this.g;b=[];for(e=0;e<c.length;e++)d=c[e].__shady_parentNode,(f=L(d))&&f.root||!(0>b.indexOf(d))||b.push(d);for(c=0;c<b.length;c++){f=b[c];e=f===this?this.host:f;d=[];for(f=f.__shady_firstChild;f;f=f.__shady_nextSibling)if("slot"==f.localName)for(var g=L(f).aa,h=
0;h<g.length;h++)d.push(g[h]);else d.push(f);f=Xc(e);g=ue(d,d.length,f,f.length);for(var k=h=0,l=void 0;h<g.length&&(l=g[h]);h++){for(var m=0,q=void 0;m<l.ia.length&&(q=l.ia[m]);m++)q.__shady_native_parentNode===e&&e.__shady_native_removeChild(q),f.splice(l.index+k,1);k-=l.pa}k=0;for(l=void 0;k<g.length&&(l=g[k]);k++)for(h=f[l.index],m=l.index;m<l.index+l.pa;m++)q=d[m],e.__shady_native_insertBefore(q,h),f.splice(m,0,q)}}if(!M.preferPerformance&&!this.Ia)for(b=this.host.__shady_firstChild;b;b=b.__shady_nextSibling)c=
L(b),b.__shady_native_parentNode!==this.host||"slot"!==b.localName&&c.assignedSlot||this.host.__shady_native_removeChild(b);this.Ia=!0;Rf=a;Sf&&Sf()};function Uf(a,b,c){var d=D(b),e=d.xa;d.xa=null;c||(c=(a=a.h[b.__shady_slot||"__catchall"])&&a[0]);c?(D(c).assignedNodes.push(b),d.assignedSlot=c):d.assignedSlot=void 0;e!==d.assignedSlot&&d.assignedSlot&&(D(d.assignedSlot).Aa=!0)}
function Vf(a,b,c){for(var d=0,e=void 0;d<c.length&&(e=c[d]);d++)if("slot"==e.localName){var f=L(e).assignedNodes;f&&f.length&&Vf(a,b,f)}else b.push(c[d])}function Wf(a,b){b.__shady_native_dispatchEvent(new Event("slotchange"));b=L(b);b.assignedSlot&&Wf(a,b.assignedSlot)}function Oe(a){a.i=a.i||[];a.g=a.g||[];a.h=a.h||{}}
function kf(a){if(a.i&&a.i.length){for(var b=a.i,c,d=0;d<b.length;d++){var e=b[d];pf(e);var f=e.__shady_parentNode;pf(f);f=L(f);f.ka=(f.ka||0)+1;f=lf(e);a.h[f]?(c=c||{},c[f]=!0,a.h[f].push(e)):a.h[f]=[e];a.g.push(e)}if(c)for(var g in c)a.h[g]=mf(a.h[g]);a.i=[]}}function lf(a){var b=a.name||a.getAttribute("name")||"__catchall";return a.Ua=b}
function mf(a){return a.sort(function(b,c){b=Tf(b);for(var d=Tf(c),e=0;e<b.length;e++){c=b[e];var f=d[e];if(c!==f)return b=Yc(c.__shady_parentNode),b.indexOf(c)-b.indexOf(f)}})}
function Re(a,b){if(a.g){kf(a);var c=a.h,d;for(d in c)for(var e=c[d],f=0;f<e.length;f++){var g=e[f];if(Vc(b,g)){e.splice(f,1);var h=a.g.indexOf(g);0<=h&&(a.g.splice(h,1),(h=L(g.__shady_parentNode))&&h.ka&&h.ka--);f--;g=L(g);if(h=g.aa)for(var k=0;k<h.length;k++){var l=h[k],m=l.__shady_native_parentNode;m&&m.__shady_native_removeChild(l)}g.aa=[];g.assignedNodes=[];h=!0}}return h}}function Nc(a){kf(a);return!(!a.g||!a.g.length)}
(function(a){a.__proto__=DocumentFragment.prototype;Qf(a,"__shady_");Qf(a);Object.defineProperties(a,{nodeType:{value:Node.DOCUMENT_FRAGMENT_NODE,configurable:!0},nodeName:{value:"#document-fragment",configurable:!0},nodeValue:{value:null,configurable:!0}});["localName","namespaceURI","prefix"].forEach(function(b){Object.defineProperty(a,b,{value:void 0,configurable:!0})});["ownerDocument","baseURI","isConnected"].forEach(function(b){Object.defineProperty(a,b,{get:function(){return this.host[b]},
configurable:!0})})})(qf.prototype);
if(window.customElements&&window.customElements.define&&M.Ba&&!M.preferPerformance){var Xf=new Map;Sf=function(){var a=[];Xf.forEach(function(d,e){a.push([e,d])});Xf.clear();for(var b=0;b<a.length;b++){var c=a[b][0];a[b][1]?c.__shadydom_connectedCallback():c.__shadydom_disconnectedCallback()}};Rf&&document.addEventListener("readystatechange",function(){Rf=!1;Sf()},{once:!0});var Yf=function(a,b,c){var d=0,e="__isConnected"+d++;if(b||c)a.prototype.connectedCallback=a.prototype.__shadydom_connectedCallback=
function(){Rf?Xf.set(this,!0):this[e]||(this[e]=!0,b&&b.call(this))},a.prototype.disconnectedCallback=a.prototype.__shadydom_disconnectedCallback=function(){Rf?this.isConnected||Xf.set(this,!1):this[e]&&(this[e]=!1,c&&c.call(this))};return a},Zf=window.customElements.define,$f=function(a,b){var c=b.prototype.connectedCallback,d=b.prototype.disconnectedCallback;Zf.call(window.customElements,a,Yf(b,c,d));b.prototype.connectedCallback=c;b.prototype.disconnectedCallback=d};window.customElements.define=
$f;Object.defineProperty(window.CustomElementRegistry.prototype,"define",{value:$f,configurable:!0})}function Ne(a){a=a.__shady_getRootNode();if(O(a))return a};function ag(a){this.node=a}v=ag.prototype;v.addEventListener=function(a,b,c){return this.node.__shady_addEventListener(a,b,c)};v.removeEventListener=function(a,b,c){return this.node.__shady_removeEventListener(a,b,c)};v.appendChild=function(a){return this.node.__shady_appendChild(a)};v.insertBefore=function(a,b){return this.node.__shady_insertBefore(a,b)};v.removeChild=function(a){return this.node.__shady_removeChild(a)};v.replaceChild=function(a,b){return this.node.__shady_replaceChild(a,b)};
v.cloneNode=function(a){return this.node.__shady_cloneNode(a)};v.getRootNode=function(a){return this.node.__shady_getRootNode(a)};v.contains=function(a){return this.node.__shady_contains(a)};v.dispatchEvent=function(a){return this.node.__shady_dispatchEvent(a)};v.setAttribute=function(a,b){this.node.__shady_setAttribute(a,b)};v.getAttribute=function(a){return this.node.__shady_native_getAttribute(a)};v.hasAttribute=function(a){return this.node.__shady_native_hasAttribute(a)};v.removeAttribute=function(a){this.node.__shady_removeAttribute(a)};
v.toggleAttribute=function(a,b){return this.node.__shady_toggleAttribute(a,b)};v.attachShadow=function(a){return this.node.__shady_attachShadow(a)};v.focus=function(){this.node.__shady_native_focus()};v.blur=function(){this.node.__shady_blur()};v.importNode=function(a,b){if(this.node.nodeType===Node.DOCUMENT_NODE)return this.node.__shady_importNode(a,b)};v.getElementById=function(a){if(this.node.nodeType===Node.DOCUMENT_NODE)return this.node.__shady_getElementById(a)};
v.elementsFromPoint=function(a,b){return this.node.__shady_elementsFromPoint(a,b)};v.elementFromPoint=function(a,b){return this.node.__shady_elementFromPoint(a,b)};v.querySelector=function(a){return this.node.__shady_querySelector(a)};v.querySelectorAll=function(a,b){return this.node.__shady_querySelectorAll(a,b)};v.assignedNodes=function(a){if("slot"===this.node.localName)return this.node.__shady_assignedNodes(a)};
v.append=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=arguments[c];return this.node.__shady_append.apply(this.node,w(b))};v.prepend=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=arguments[c];return this.node.__shady_prepend.apply(this.node,w(b))};v.after=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=arguments[c];return this.node.__shady_after.apply(this.node,w(b))};
v.before=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=arguments[c];return this.node.__shady_before.apply(this.node,w(b))};v.remove=function(){return this.node.__shady_remove()};v.replaceWith=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=arguments[c];return this.node.__shady_replaceWith.apply(this.node,w(b))};
ea.Object.defineProperties(ag.prototype,{activeElement:{configurable:!0,enumerable:!0,get:function(){if(O(this.node)||this.node.nodeType===Node.DOCUMENT_NODE)return this.node.__shady_activeElement}},_activeElement:{configurable:!0,enumerable:!0,get:function(){return this.activeElement}},host:{configurable:!0,enumerable:!0,get:function(){if(O(this.node))return this.node.host}},parentNode:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_parentNode}},firstChild:{configurable:!0,
enumerable:!0,get:function(){return this.node.__shady_firstChild}},lastChild:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_lastChild}},nextSibling:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_nextSibling}},previousSibling:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_previousSibling}},childNodes:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_childNodes}},parentElement:{configurable:!0,enumerable:!0,
get:function(){return this.node.__shady_parentElement}},firstElementChild:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_firstElementChild}},lastElementChild:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_lastElementChild}},nextElementSibling:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_nextElementSibling}},previousElementSibling:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_previousElementSibling}},
children:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_children}},childElementCount:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_childElementCount}},shadowRoot:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_shadowRoot}},assignedSlot:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_assignedSlot}},isConnected:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_isConnected}},innerHTML:{configurable:!0,
enumerable:!0,get:function(){return this.node.__shady_innerHTML},set:function(a){this.node.__shady_innerHTML=a}},textContent:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_textContent},set:function(a){this.node.__shady_textContent=a}},slot:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_slot},set:function(a){this.node.__shady_slot=a}},className:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_className},set:function(a){this.node.__shady_className=
a}}});function bg(a){Object.defineProperty(ag.prototype,a,{get:function(){return this.node["__shady_"+a]},set:function(b){this.node["__shady_"+a]=b},configurable:!0})}qe.forEach(function(a){return bg(a)});re.forEach(function(a){return bg(a)});var cg=new WeakMap;function dg(a){if(O(a)||a instanceof ag)return a;var b=cg.get(a);b||(b=new ag(a),cg.set(a,b));return b};if(M.Ba){var eg=M.D?function(a){return a}:function(a){Nd(a);Md(a);return a},ShadyDOM={inUse:M.Ba,patch:eg,isShadyRoot:O,enqueue:hd,flush:id,flushInitial:function(a){!a.Ia&&a.Y&&Ue(a)},settings:M,filterMutations:nd,observeChildren:ld,unobserveChildren:md,deferConnectionCallbacks:M.deferConnectionCallbacks,preferPerformance:M.preferPerformance,handlesDynamicScoping:!0,wrap:M.J?dg:eg,wrapIfNeeded:!0===M.J?dg:function(a){return a},Wrapper:ag,composedPath:Wd,noPatch:M.J,patchOnDemand:M.Da,nativeMethods:wd,
nativeTree:xd,patchElementProto:Kf,querySelectorImplementation:M.querySelectorImplementation};window.ShadyDOM=ShadyDOM;Gd();Jf("__shady_");Object.defineProperty(document,"_activeElement",Bf.activeElement);P(Window.prototype,Ef,"__shady_");M.J?M.Da&&P(Element.prototype,sf):(Jf(),pe());ke();window.Event=me;window.CustomEvent=ne;window.MouseEvent=oe;window.ShadowRoot=qf};var fg=window.Document.prototype.createElement,gg=window.Document.prototype.createElementNS,hg=window.Document.prototype.importNode,ig=window.Document.prototype.prepend,jg=window.Document.prototype.append,kg=window.DocumentFragment.prototype.prepend,lg=window.DocumentFragment.prototype.append,mg=window.Node.prototype.cloneNode,ng=window.Node.prototype.appendChild,og=window.Node.prototype.insertBefore,pg=window.Node.prototype.removeChild,qg=window.Node.prototype.replaceChild,rg=Object.getOwnPropertyDescriptor(window.Node.prototype,
"textContent"),sg=window.Element.prototype.attachShadow,tg=Object.getOwnPropertyDescriptor(window.Element.prototype,"innerHTML"),ug=window.Element.prototype.getAttribute,vg=window.Element.prototype.setAttribute,wg=window.Element.prototype.removeAttribute,xg=window.Element.prototype.toggleAttribute,yg=window.Element.prototype.getAttributeNS,zg=window.Element.prototype.setAttributeNS,Ag=window.Element.prototype.removeAttributeNS,Bg=window.Element.prototype.insertAdjacentElement,Cg=window.Element.prototype.insertAdjacentHTML,
Dg=window.Element.prototype.prepend,Eg=window.Element.prototype.append,Fg=window.Element.prototype.before,Gg=window.Element.prototype.after,Hg=window.Element.prototype.replaceWith,Ig=window.Element.prototype.remove,Jg=window.HTMLElement,Kg=Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,"innerHTML"),Lg=window.HTMLElement.prototype.insertAdjacentElement,Mg=window.HTMLElement.prototype.insertAdjacentHTML;var Ng=new Set;"annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" ").forEach(function(a){return Ng.add(a)});function Og(a){var b=Ng.has(a);a=/^[a-z][.0-9_a-z]*-[-.0-9_a-z]*$/.test(a);return!b&&a}var Pg=document.contains?document.contains.bind(document):document.documentElement.contains.bind(document.documentElement);
function T(a){var b=a.isConnected;if(void 0!==b)return b;if(Pg(a))return!0;for(;a&&!(a.__CE_isImportDocument||a instanceof Document);)a=a.parentNode||(window.ShadowRoot&&a instanceof ShadowRoot?a.host:void 0);return!(!a||!(a.__CE_isImportDocument||a instanceof Document))}function Qg(a){var b=a.children;if(b)return Array.prototype.slice.call(b);b=[];for(a=a.firstChild;a;a=a.nextSibling)a.nodeType===Node.ELEMENT_NODE&&b.push(a);return b}
function Rg(a,b){for(;b&&b!==a&&!b.nextSibling;)b=b.parentNode;return b&&b!==a?b.nextSibling:null}
function Sg(a,b,c){for(var d=a;d;){if(d.nodeType===Node.ELEMENT_NODE){var e=d;b(e);var f=e.localName;if("link"===f&&"import"===e.getAttribute("rel")){d=e.import;void 0===c&&(c=new Set);if(d instanceof Node&&!c.has(d))for(c.add(d),d=d.firstChild;d;d=d.nextSibling)Sg(d,b,c);d=Rg(a,e);continue}else if("template"===f){d=Rg(a,e);continue}if(e=e.__CE_shadowRoot)for(e=e.firstChild;e;e=e.nextSibling)Sg(e,b,c)}d=d.firstChild?d.firstChild:Rg(a,d)}};function Tg(){var a=!(null===Ug||void 0===Ug||!Ug.noDocumentConstructionObserver),b=!(null===Ug||void 0===Ug||!Ug.shadyDomFastWalk);this.ca=[];this.g=[];this.W=!1;this.shadyDomFastWalk=b;this.sb=!a}function Vg(a,b,c,d){var e=window.ShadyDOM;if(a.shadyDomFastWalk&&e&&e.inUse){if(b.nodeType===Node.ELEMENT_NODE&&c(b),b.querySelectorAll)for(a=e.nativeMethods.querySelectorAll.call(b,"*"),b=0;b<a.length;b++)c(a[b])}else Sg(b,c,d)}function Wg(a,b){a.W=!0;a.ca.push(b)}
function Xg(a,b){a.W=!0;a.g.push(b)}function Yg(a,b){a.W&&Vg(a,b,function(c){return Zg(a,c)})}function Zg(a,b){if(a.W&&!b.__CE_patched){b.__CE_patched=!0;for(var c=0;c<a.ca.length;c++)a.ca[c](b);for(c=0;c<a.g.length;c++)a.g[c](b)}}function $g(a,b){var c=[];Vg(a,b,function(e){return c.push(e)});for(b=0;b<c.length;b++){var d=c[b];1===d.__CE_state?a.connectedCallback(d):ah(a,d)}}
function bh(a,b){var c=[];Vg(a,b,function(e){return c.push(e)});for(b=0;b<c.length;b++){var d=c[b];1===d.__CE_state&&a.disconnectedCallback(d)}}
function ch(a,b,c){c=void 0===c?{}:c;var d=c.tb,e=c.upgrade||function(g){return ah(a,g)},f=[];Vg(a,b,function(g){a.W&&Zg(a,g);if("link"===g.localName&&"import"===g.getAttribute("rel")){var h=g.import;h instanceof Node&&(h.__CE_isImportDocument=!0,h.__CE_registry=document.__CE_registry);h&&"complete"===h.readyState?h.__CE_documentLoadHandled=!0:g.addEventListener("load",function(){var k=g.import;if(!k.__CE_documentLoadHandled){k.__CE_documentLoadHandled=!0;var l=new Set;d&&(d.forEach(function(m){return l.add(m)}),
l.delete(k));ch(a,k,{tb:l,upgrade:e})}})}else f.push(g)},d);for(b=0;b<f.length;b++)e(f[b])}
function ah(a,b){try{var c=b.ownerDocument,d=c.__CE_registry;var e=d&&(c.defaultView||c.__CE_isImportDocument)?dh(d,b.localName):void 0;if(e&&void 0===b.__CE_state){e.constructionStack.push(b);try{try{if(new e.constructorFunction!==b)throw Error("The custom element constructor did not produce the element being upgraded.");}finally{e.constructionStack.pop()}}catch(k){throw b.__CE_state=2,k;}b.__CE_state=1;b.__CE_definition=e;if(e.attributeChangedCallback&&b.hasAttributes()){var f=e.observedAttributes;
for(e=0;e<f.length;e++){var g=f[e],h=b.getAttribute(g);null!==h&&a.attributeChangedCallback(b,g,null,h,null)}}T(b)&&a.connectedCallback(b)}}catch(k){eh(k)}}Tg.prototype.connectedCallback=function(a){var b=a.__CE_definition;if(b.connectedCallback)try{b.connectedCallback.call(a)}catch(c){eh(c)}};Tg.prototype.disconnectedCallback=function(a){var b=a.__CE_definition;if(b.disconnectedCallback)try{b.disconnectedCallback.call(a)}catch(c){eh(c)}};
Tg.prototype.attributeChangedCallback=function(a,b,c,d,e){var f=a.__CE_definition;if(f.attributeChangedCallback&&-1<f.observedAttributes.indexOf(b))try{f.attributeChangedCallback.call(a,b,c,d,e)}catch(g){eh(g)}};
function fh(a,b,c,d){var e=b.__CE_registry;if(e&&(null===d||"http://www.w3.org/1999/xhtml"===d)&&(e=dh(e,c)))try{var f=new e.constructorFunction;if(void 0===f.__CE_state||void 0===f.__CE_definition)throw Error("Failed to construct '"+c+"': The returned value was not constructed with the HTMLElement constructor.");if("http://www.w3.org/1999/xhtml"!==f.namespaceURI)throw Error("Failed to construct '"+c+"': The constructed element's namespace must be the HTML namespace.");if(f.hasAttributes())throw Error("Failed to construct '"+
c+"': The constructed element must not have any attributes.");if(null!==f.firstChild)throw Error("Failed to construct '"+c+"': The constructed element must not have any children.");if(null!==f.parentNode)throw Error("Failed to construct '"+c+"': The constructed element must not have a parent node.");if(f.ownerDocument!==b)throw Error("Failed to construct '"+c+"': The constructed element's owner document is incorrect.");if(f.localName!==c)throw Error("Failed to construct '"+c+"': The constructed element's local name is incorrect.");
return f}catch(g){return eh(g),b=null===d?fg.call(b,c):gg.call(b,d,c),Object.setPrototypeOf(b,HTMLUnknownElement.prototype),b.__CE_state=2,b.__CE_definition=void 0,Zg(a,b),b}b=null===d?fg.call(b,c):gg.call(b,d,c);Zg(a,b);return b}
function eh(a){var b="",c="",d=0,e=0;a instanceof Error?(b=a.message,c=a.sourceURL||a.fileName||"",d=a.line||a.lineNumber||0,e=a.column||a.columnNumber||0):b="Uncaught "+String(a);var f=void 0;void 0===ErrorEvent.prototype.initErrorEvent?f=new ErrorEvent("error",{cancelable:!0,message:b,filename:c,lineno:d,colno:e,error:a}):(f=document.createEvent("ErrorEvent"),f.initErrorEvent("error",!1,!0,b,c,d),f.preventDefault=function(){Object.defineProperty(this,"defaultPrevented",{configurable:!0,get:function(){return!0}})});
void 0===f.error&&Object.defineProperty(f,"error",{configurable:!0,enumerable:!0,get:function(){return a}});window.dispatchEvent(f);f.defaultPrevented||console.error(a)};function gh(){var a=this;this.I=void 0;this.Ka=new Promise(function(b){a.g=b})}gh.prototype.resolve=function(a){if(this.I)throw Error("Already resolved.");this.I=a;this.g(a)};function hh(a){var b=document;this.X=void 0;this.S=a;this.g=b;ch(this.S,this.g);"loading"===this.g.readyState&&(this.X=new MutationObserver(this.h.bind(this)),this.X.observe(this.g,{childList:!0,subtree:!0}))}function ih(a){a.X&&a.X.disconnect()}hh.prototype.h=function(a){var b=this.g.readyState;"interactive"!==b&&"complete"!==b||ih(this);for(b=0;b<a.length;b++)for(var c=a[b].addedNodes,d=0;d<c.length;d++)ch(this.S,c[d])};function U(a){this.ma=new Map;this.na=new Map;this.Fa=new Map;this.wa=!1;this.za=new Map;this.la=function(b){return b()};this.V=!1;this.oa=[];this.S=a;this.Ga=a.sb?new hh(a):void 0}v=U.prototype;v.jb=function(a,b){var c=this;if(!(b instanceof Function))throw new TypeError("Custom element constructor getters must be functions.");jh(this,a);this.ma.set(a,b);this.oa.push(a);this.V||(this.V=!0,this.la(function(){return kh(c)}))};
v.define=function(a,b){var c=this;if(!(b instanceof Function))throw new TypeError("Custom element constructors must be functions.");jh(this,a);lh(this,a,b);this.oa.push(a);this.V||(this.V=!0,this.la(function(){return kh(c)}))};function jh(a,b){if(!Og(b))throw new SyntaxError("The element name '"+b+"' is not valid.");if(dh(a,b))throw Error("A custom element with name '"+(b+"' has already been defined."));if(a.wa)throw Error("A custom element is already being defined.");}
function lh(a,b,c){a.wa=!0;var d;try{var e=c.prototype;if(!(e instanceof Object))throw new TypeError("The custom element constructor's prototype is not an object.");var f=function(m){var q=e[m];if(void 0!==q&&!(q instanceof Function))throw Error("The '"+m+"' callback must be a function.");return q};var g=f("connectedCallback");var h=f("disconnectedCallback");var k=f("adoptedCallback");var l=(d=f("attributeChangedCallback"))&&c.observedAttributes||[]}catch(m){throw m;}finally{a.wa=!1}c={localName:b,
constructorFunction:c,connectedCallback:g,disconnectedCallback:h,adoptedCallback:k,attributeChangedCallback:d,observedAttributes:l,constructionStack:[]};a.na.set(b,c);a.Fa.set(c.constructorFunction,c);return c}v.upgrade=function(a){ch(this.S,a)};
function kh(a){if(!1!==a.V){a.V=!1;for(var b=[],c=a.oa,d=new Map,e=0;e<c.length;e++)d.set(c[e],[]);ch(a.S,document,{upgrade:function(k){if(void 0===k.__CE_state){var l=k.localName,m=d.get(l);m?m.push(k):a.na.has(l)&&b.push(k)}}});for(e=0;e<b.length;e++)ah(a.S,b[e]);for(e=0;e<c.length;e++){for(var f=c[e],g=d.get(f),h=0;h<g.length;h++)ah(a.S,g[h]);(f=a.za.get(f))&&f.resolve(void 0)}c.length=0}}v.get=function(a){if(a=dh(this,a))return a.constructorFunction};
v.whenDefined=function(a){if(!Og(a))return Promise.reject(new SyntaxError("'"+a+"' is not a valid custom element name."));var b=this.za.get(a);if(b)return b.Ka;b=new gh;this.za.set(a,b);var c=this.na.has(a)||this.ma.has(a);a=-1===this.oa.indexOf(a);c&&a&&b.resolve(void 0);return b.Ka};v.polyfillWrapFlushCallback=function(a){this.Ga&&ih(this.Ga);var b=this.la;this.la=function(c){return a(function(){return b(c)})}};
function dh(a,b){var c=a.na.get(b);if(c)return c;if(c=a.ma.get(b)){a.ma.delete(b);try{return lh(a,b,c())}catch(d){eh(d)}}}U.prototype.define=U.prototype.define;U.prototype.upgrade=U.prototype.upgrade;U.prototype.get=U.prototype.get;U.prototype.whenDefined=U.prototype.whenDefined;U.prototype.polyfillDefineLazy=U.prototype.jb;U.prototype.polyfillWrapFlushCallback=U.prototype.polyfillWrapFlushCallback;function mh(a,b,c){function d(e){return function(f){for(var g=[],h=0;h<arguments.length;++h)g[h]=arguments[h];h=[];for(var k=[],l=0;l<g.length;l++){var m=g[l];m instanceof Element&&T(m)&&k.push(m);if(m instanceof DocumentFragment)for(m=m.firstChild;m;m=m.nextSibling)h.push(m);else h.push(m)}e.apply(this,g);for(g=0;g<k.length;g++)bh(a,k[g]);if(T(this))for(g=0;g<h.length;g++)k=h[g],k instanceof Element&&$g(a,k)}}void 0!==c.prepend&&(b.prepend=d(c.prepend));void 0!==c.append&&(b.append=d(c.append))}
;function nh(a){Document.prototype.createElement=function(b){return fh(a,this,b,null)};Document.prototype.importNode=function(b,c){b=hg.call(this,b,!!c);this.__CE_registry?ch(a,b):Yg(a,b);return b};Document.prototype.createElementNS=function(b,c){return fh(a,this,c,b)};mh(a,Document.prototype,{prepend:ig,append:jg})};function oh(a){function b(d){return function(e){for(var f=[],g=0;g<arguments.length;++g)f[g]=arguments[g];g=[];for(var h=[],k=0;k<f.length;k++){var l=f[k];l instanceof Element&&T(l)&&h.push(l);if(l instanceof DocumentFragment)for(l=l.firstChild;l;l=l.nextSibling)g.push(l);else g.push(l)}d.apply(this,f);for(f=0;f<h.length;f++)bh(a,h[f]);if(T(this))for(f=0;f<g.length;f++)h=g[f],h instanceof Element&&$g(a,h)}}var c=Element.prototype;void 0!==Fg&&(c.before=b(Fg));void 0!==Gg&&(c.after=b(Gg));void 0!==
Hg&&(c.replaceWith=function(d){for(var e=[],f=0;f<arguments.length;++f)e[f]=arguments[f];f=[];for(var g=[],h=0;h<e.length;h++){var k=e[h];k instanceof Element&&T(k)&&g.push(k);if(k instanceof DocumentFragment)for(k=k.firstChild;k;k=k.nextSibling)f.push(k);else f.push(k)}h=T(this);Hg.apply(this,e);for(e=0;e<g.length;e++)bh(a,g[e]);if(h)for(bh(a,this),e=0;e<f.length;e++)g=f[e],g instanceof Element&&$g(a,g)});void 0!==Ig&&(c.remove=function(){var d=T(this);Ig.call(this);d&&bh(a,this)})};function ph(a){function b(e,f){Object.defineProperty(e,"innerHTML",{enumerable:f.enumerable,configurable:!0,get:f.get,set:function(g){var h=this,k=void 0;T(this)&&(k=[],Vg(a,this,function(q){q!==h&&k.push(q)}));f.set.call(this,g);if(k)for(var l=0;l<k.length;l++){var m=k[l];1===m.__CE_state&&a.disconnectedCallback(m)}this.ownerDocument.__CE_registry?ch(a,this):Yg(a,this);return g}})}function c(e,f){e.insertAdjacentElement=function(g,h){var k=T(h);g=f.call(this,g,h);k&&bh(a,h);T(g)&&$g(a,h);return g}}
function d(e,f){function g(h,k){for(var l=[];h!==k;h=h.nextSibling)l.push(h);for(k=0;k<l.length;k++)ch(a,l[k])}e.insertAdjacentHTML=function(h,k){h=h.toLowerCase();if("beforebegin"===h){var l=this.previousSibling;f.call(this,h,k);g(l||this.parentNode.firstChild,this)}else if("afterbegin"===h)l=this.firstChild,f.call(this,h,k),g(this.firstChild,l);else if("beforeend"===h)l=this.lastChild,f.call(this,h,k),g(l||this.firstChild,null);else if("afterend"===h)l=this.nextSibling,f.call(this,h,k),g(this.nextSibling,
l);else throw new SyntaxError("The value provided ("+String(h)+") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");}}sg&&(Element.prototype.attachShadow=function(e){e=sg.call(this,e);if(a.W&&!e.__CE_patched){e.__CE_patched=!0;for(var f=0;f<a.ca.length;f++)a.ca[f](e)}return this.__CE_shadowRoot=e});tg&&tg.get?b(Element.prototype,tg):Kg&&Kg.get?b(HTMLElement.prototype,Kg):Xg(a,function(e){b(e,{enumerable:!0,configurable:!0,get:function(){return mg.call(this,!0).innerHTML},set:function(f){var g=
"template"===this.localName,h=g?this.content:this,k=gg.call(document,this.namespaceURI,this.localName);for(k.innerHTML=f;0<h.childNodes.length;)pg.call(h,h.childNodes[0]);for(f=g?k.content:k;0<f.childNodes.length;)ng.call(h,f.childNodes[0])}})});Element.prototype.setAttribute=function(e,f){if(1!==this.__CE_state)return vg.call(this,e,f);var g=ug.call(this,e);vg.call(this,e,f);f=ug.call(this,e);a.attributeChangedCallback(this,e,g,f,null)};Element.prototype.setAttributeNS=function(e,f,g){if(1!==this.__CE_state)return zg.call(this,
e,f,g);var h=yg.call(this,e,f);zg.call(this,e,f,g);g=yg.call(this,e,f);a.attributeChangedCallback(this,f,h,g,e)};Element.prototype.removeAttribute=function(e){if(1!==this.__CE_state)return wg.call(this,e);var f=ug.call(this,e);wg.call(this,e);null!==f&&a.attributeChangedCallback(this,e,f,null,null)};xg&&(Element.prototype.toggleAttribute=function(e,f){if(1!==this.__CE_state)return xg.call(this,e,f);var g=ug.call(this,e),h=null!==g;f=xg.call(this,e,f);h!==f&&a.attributeChangedCallback(this,e,g,f?"":
null,null);return f});Element.prototype.removeAttributeNS=function(e,f){if(1!==this.__CE_state)return Ag.call(this,e,f);var g=yg.call(this,e,f);Ag.call(this,e,f);var h=yg.call(this,e,f);g!==h&&a.attributeChangedCallback(this,f,g,h,e)};Lg?c(HTMLElement.prototype,Lg):Bg&&c(Element.prototype,Bg);Mg?d(HTMLElement.prototype,Mg):Cg&&d(Element.prototype,Cg);mh(a,Element.prototype,{prepend:Dg,append:Eg});oh(a)};var qh={};function rh(a){function b(){var c=this.constructor;var d=document.__CE_registry.Fa.get(c);if(!d)throw Error("Failed to construct a custom element: The constructor was not registered with `customElements`.");var e=d.constructionStack;if(0===e.length)return e=fg.call(document,d.localName),Object.setPrototypeOf(e,c.prototype),e.__CE_state=1,e.__CE_definition=d,Zg(a,e),e;var f=e.length-1,g=e[f];if(g===qh)throw Error("Failed to construct '"+d.localName+"': This element was already constructed.");e[f]=
qh;Object.setPrototypeOf(g,c.prototype);Zg(a,g);return g}b.prototype=Jg.prototype;Object.defineProperty(HTMLElement.prototype,"constructor",{writable:!0,configurable:!0,enumerable:!1,value:b});window.HTMLElement=b};function sh(a){function b(c,d){Object.defineProperty(c,"textContent",{enumerable:d.enumerable,configurable:!0,get:d.get,set:function(e){if(this.nodeType===Node.TEXT_NODE)d.set.call(this,e);else{var f=void 0;if(this.firstChild){var g=this.childNodes,h=g.length;if(0<h&&T(this)){f=Array(h);for(var k=0;k<h;k++)f[k]=g[k]}}d.set.call(this,e);if(f)for(e=0;e<f.length;e++)bh(a,f[e])}}})}Node.prototype.insertBefore=function(c,d){if(c instanceof DocumentFragment){var e=Qg(c);c=og.call(this,c,d);if(T(this))for(d=
0;d<e.length;d++)$g(a,e[d]);return c}e=c instanceof Element&&T(c);d=og.call(this,c,d);e&&bh(a,c);T(this)&&$g(a,c);return d};Node.prototype.appendChild=function(c){if(c instanceof DocumentFragment){var d=Qg(c);c=ng.call(this,c);if(T(this))for(var e=0;e<d.length;e++)$g(a,d[e]);return c}d=c instanceof Element&&T(c);e=ng.call(this,c);d&&bh(a,c);T(this)&&$g(a,c);return e};Node.prototype.cloneNode=function(c){c=mg.call(this,!!c);this.ownerDocument.__CE_registry?ch(a,c):Yg(a,c);return c};Node.prototype.removeChild=
function(c){var d=c instanceof Element&&T(c),e=pg.call(this,c);d&&bh(a,c);return e};Node.prototype.replaceChild=function(c,d){if(c instanceof DocumentFragment){var e=Qg(c);c=qg.call(this,c,d);if(T(this))for(bh(a,d),d=0;d<e.length;d++)$g(a,e[d]);return c}e=c instanceof Element&&T(c);var f=qg.call(this,c,d),g=T(this);g&&bh(a,d);e&&bh(a,c);g&&$g(a,c);return f};rg&&rg.get?b(Node.prototype,rg):Wg(a,function(c){b(c,{enumerable:!0,configurable:!0,get:function(){for(var d=[],e=this.firstChild;e;e=e.nextSibling)e.nodeType!==
Node.COMMENT_NODE&&d.push(e.textContent);return d.join("")},set:function(d){for(;this.firstChild;)pg.call(this,this.firstChild);null!=d&&""!==d&&ng.call(this,document.createTextNode(d))}})})};var Ug=window.customElements;function th(){var a=new Tg;rh(a);nh(a);mh(a,DocumentFragment.prototype,{prepend:kg,append:lg});sh(a);ph(a);window.CustomElementRegistry=U;a=new U(a);document.__CE_registry=a;Object.defineProperty(window,"customElements",{configurable:!0,enumerable:!0,value:a})}Ug&&!Ug.forcePolyfill&&"function"==typeof Ug.define&&"function"==typeof Ug.get||th();window.__CE_installPolyfill=th;/*

Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function uh(){this.end=this.start=0;this.rules=this.parent=this.previous=null;this.cssText=this.parsedCssText="";this.atRule=!1;this.type=0;this.parsedSelector=this.selector=this.keyframesName=""}
function vh(a){var b=a=a.replace(wh,"").replace(xh,""),c=new uh;c.start=0;c.end=b.length;for(var d=c,e=0,f=b.length;e<f;e++)if("{"===b[e]){d.rules||(d.rules=[]);var g=d,h=g.rules[g.rules.length-1]||null;d=new uh;d.start=e+1;d.parent=g;d.previous=h;g.rules.push(d)}else"}"===b[e]&&(d.end=e+1,d=d.parent||c);return yh(c,a)}
function yh(a,b){var c=b.substring(a.start,a.end-1);a.parsedCssText=a.cssText=c.trim();a.parent&&(c=b.substring(a.previous?a.previous.end:a.parent.start,a.start-1),c=zh(c),c=c.replace(Ah," "),c=c.substring(c.lastIndexOf(";")+1),c=a.parsedSelector=a.selector=c.trim(),a.atRule=0===c.indexOf("@"),a.atRule?0===c.indexOf("@media")?a.type=Bh:c.match(Ch)&&(a.type=Dh,a.keyframesName=a.selector.split(Ah).pop()):a.type=0===c.indexOf("--")?Eh:Fh);if(c=a.rules)for(var d=0,e=c.length,f=void 0;d<e&&(f=c[d]);d++)yh(f,
b);return a}function zh(a){return a.replace(/\\([0-9a-f]{1,6})\s/gi,function(b,c){b=c;for(c=6-b.length;c--;)b="0"+b;return"\\"+b})}
function Gh(a,b,c){c=void 0===c?"":c;var d="";if(a.cssText||a.rules){var e=a.rules,f;if(f=e)f=e[0],f=!(f&&f.selector&&0===f.selector.indexOf("--"));if(f){f=0;for(var g=e.length,h=void 0;f<g&&(h=e[f]);f++)d=Gh(h,b,d)}else b?b=a.cssText:(b=a.cssText,b=b.replace(Hh,"").replace(Ih,""),b=b.replace(Jh,"").replace(Kh,"")),(d=b.trim())&&(d="  "+d+"\n")}d&&(a.selector&&(c+=a.selector+" {\n"),c+=d,a.selector&&(c+="}\n\n"));return c}
var Fh=1,Dh=7,Bh=4,Eh=1E3,wh=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,xh=/@import[^;]*;/gim,Hh=/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,Ih=/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,Jh=/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,Kh=/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,Ch=/^@[^\s]*keyframes/,Ah=/\s+/g;var V=!(window.ShadyDOM&&window.ShadyDOM.inUse),Lh;function Mh(a){Lh=a&&a.shimcssproperties?!1:V||!(navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)||!window.CSS||!CSS.supports||!CSS.supports("box-shadow","0 0 0 var(--foo)"))}var Nh;window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(Nh=window.ShadyCSS.cssBuild);var Oh=!(!window.ShadyCSS||!window.ShadyCSS.disableRuntime);
window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?Lh=window.ShadyCSS.nativeCss:window.ShadyCSS?(Mh(window.ShadyCSS),window.ShadyCSS=void 0):Mh(window.WebComponents&&window.WebComponents.flags);var W=Lh;var Ph=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,Qh=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,Rh=/(--[\w-]+)\s*([:,;)]|$)/gi,Sh=/(animation\s*:)|(animation-name\s*:)/,Th=/@media\s(.*)/,Uh=/\{[^}]*\}/g;var Vh=new Set;function Wh(a,b){if(!a)return"";"string"===typeof a&&(a=vh(a));b&&Xh(a,b);return Gh(a,W)}function Yh(a){!a.__cssRules&&a.textContent&&(a.__cssRules=vh(a.textContent));return a.__cssRules||null}function $h(a){return!!a.parent&&a.parent.type===Dh}function Xh(a,b,c,d){if(a){var e=!1,f=a.type;if(d&&f===Bh){var g=a.selector.match(Th);g&&(window.matchMedia(g[1]).matches||(e=!0))}f===Fh?b(a):c&&f===Dh?c(a):f===Eh&&(e=!0);if((a=a.rules)&&!e)for(e=0,f=a.length,g=void 0;e<f&&(g=a[e]);e++)Xh(g,b,c,d)}}
function ai(a,b,c,d){var e=document.createElement("style");b&&e.setAttribute("scope",b);e.textContent=a;bi(e,c,d);return e}var ci=null;function di(a){a=document.createComment(" Shady DOM styles for "+a+" ");var b=document.head;b.insertBefore(a,(ci?ci.nextSibling:null)||b.firstChild);return ci=a}function bi(a,b,c){b=b||document.head;b.insertBefore(a,c&&c.nextSibling||b.firstChild);ci?a.compareDocumentPosition(ci)===Node.DOCUMENT_POSITION_PRECEDING&&(ci=a):ci=a}
function ei(a,b){for(var c=0,d=a.length;b<d;b++)if("("===a[b])c++;else if(")"===a[b]&&0===--c)return b;return-1}function fi(a,b){var c=a.indexOf("var(");if(-1===c)return b(a,"","","");var d=ei(a,c+3),e=a.substring(c+4,d);c=a.substring(0,c);a=fi(a.substring(d+1),b);d=e.indexOf(",");return-1===d?b(c,e.trim(),"",a):b(c,e.substring(0,d).trim(),e.substring(d+1).trim(),a)}function gi(a,b){V?a.setAttribute("class",b):window.ShadyDOM.nativeMethods.setAttribute.call(a,"class",b)}
var hi=window.ShadyDOM&&window.ShadyDOM.wrap||function(a){return a};function ii(a){var b=a.localName,c="";b?-1<b.indexOf("-")||(c=b,b=a.getAttribute&&a.getAttribute("is")||""):(b=a.is,c=a.extends);return{is:b,ja:c}}function ji(a){for(var b=[],c="",d=0;0<=d&&d<a.length;d++)if("("===a[d]){var e=ei(a,d);c+=a.slice(d,e+1);d=e}else","===a[d]?(b.push(c),c=""):c+=a[d];c&&b.push(c);return b}
function ki(a){if(void 0!==Nh)return Nh;if(void 0===a.__cssBuild){var b=a.getAttribute("css-build");if(b)a.__cssBuild=b;else{a:{b="template"===a.localName?a.content.firstChild:a.firstChild;if(b instanceof Comment&&(b=b.textContent.trim().split(":"),"css-build"===b[0])){b=b[1];break a}b=""}if(""!==b){var c="template"===a.localName?a.content.firstChild:a.firstChild;c.parentNode.removeChild(c)}a.__cssBuild=b}}return a.__cssBuild||""}
function li(a){a=void 0===a?"":a;return""!==a&&W?V?"shadow"===a:"shady"===a:!1};function mi(){}function ni(a,b){oi(pi,a,function(c){qi(c,b||"")})}function oi(a,b,c){b.nodeType===Node.ELEMENT_NODE&&c(b);var d;"template"===b.localName?d=(b.content||b._content||b).childNodes:d=b.children||b.childNodes;if(d)for(b=0;b<d.length;b++)oi(a,d[b],c)}
function qi(a,b,c){if(b)if(a.classList)c?(a.classList.remove("style-scope"),a.classList.remove(b)):(a.classList.add("style-scope"),a.classList.add(b));else if(a.getAttribute){var d=a.getAttribute("class");c?d&&(b=d.replace("style-scope","").replace(b,""),gi(a,b)):gi(a,(d?d+" ":"")+"style-scope "+b)}}function ri(a,b,c){oi(pi,a,function(d){qi(d,b,!0);qi(d,c)})}function si(a,b){oi(pi,a,function(c){qi(c,b||"",!0)})}
function ti(a,b,c,d,e){var f=pi;e=void 0===e?"":e;""===e&&(V||"shady"===(void 0===d?"":d)?e=Wh(b,c):(a=ii(a),e=ui(f,b,a.is,a.ja,c)+"\n\n"));return e.trim()}function ui(a,b,c,d,e){var f=vi(c,d);c=c?"."+c:"";return Wh(b,function(g){g.i||(g.selector=g.G=wi(a,g,a.h,c,f),g.i=!0);e&&e(g,c,f)})}function vi(a,b){return b?"[is="+a+"]":a}
function wi(a,b,c,d,e){var f=ji(b.selector);if(!$h(b)){b=0;for(var g=f.length,h=void 0;b<g&&(h=f[b]);b++)f[b]=c.call(a,h,d,e)}return f.filter(function(k){return!!k}).join(",")}function xi(a){return a.replace(yi,function(b,c,d){-1<d.indexOf("+")?d=d.replace(/\+/g,"___"):-1<d.indexOf("___")&&(d=d.replace(/___/g,"+"));return":"+c+"("+d+")"})}
function zi(a){for(var b=[],c;c=a.match(Ai);){var d=c.index,e=ei(a,d);if(-1===e)throw Error(c.input+" selector missing ')'");c=a.slice(d,e+1);a=a.replace(c,"\ue000");b.push(c)}return{Ea:a,matches:b}}function Bi(a,b){var c=a.split("\ue000");return b.reduce(function(d,e,f){return d+e+c[f+1]},c[0])}
mi.prototype.h=function(a,b,c){var d=!1;a=a.trim();var e=yi.test(a);e&&(a=a.replace(yi,function(h,k,l){return":"+k+"("+l.replace(/\s/g,"")+")"}),a=xi(a));var f=Ai.test(a);if(f){var g=zi(a);a=g.Ea;g=g.matches}a=a.replace(Ci,":host $1");a=a.replace(Di,function(h,k,l){d||(h=Ei(l,k,b,c),d=d||h.stop,k=h.Ya,l=h.value);return k+l});f&&(a=Bi(a,g));e&&(a=xi(a));return a=a.replace(Fi,function(h,k,l,m){return'[dir="'+l+'"] '+k+m+", "+k+'[dir="'+l+'"]'+m})};
function Ei(a,b,c,d){var e=a.indexOf("::slotted");0<=a.indexOf(":host")?a=Gi(a,d):0!==e&&(a=c?Hi(a,c):a);c=!1;0<=e&&(b="",c=!0);if(c){var f=!0;c&&(a=a.replace(Ii,function(g,h){return" > "+h}))}return{value:a,Ya:b,stop:f}}function Hi(a,b){a=a.split(/(\[.+?\])/);for(var c=[],d=0;d<a.length;d++)if(1===d%2)c.push(a[d]);else{var e=a[d];if(""!==e||d!==a.length-1)e=e.split(":"),e[0]+=b,c.push(e.join(":"))}return c.join("")}
function Gi(a,b){var c=a.match(Ji);return(c=c&&c[2].trim()||"")?c[0].match(Ki)?a.replace(Ji,function(d,e,f){return b+f}):c.split(Ki)[0]===b?c:"should_not_match":a.replace(":host",b)}function Li(a){":root"===a.selector&&(a.selector="html")}mi.prototype.i=function(a){return a.match(":host")?"":a.match("::slotted")?this.h(a,":not(.style-scope)"):Hi(a.trim(),":not(.style-scope)")};ea.Object.defineProperties(mi.prototype,{g:{configurable:!0,enumerable:!0,get:function(){return"style-scope"}}});
var yi=/:(nth[-\w]+)\(([^)]+)\)/,Di=/(^|[\s>+~]+)((?:\[.+?\]|[^\s>+~=[])+)/g,Ki=/[[.:#*]/,Ci=/^(::slotted)/,Ji=/(:host)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,Ii=/(?:::slotted)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,Fi=/(.*):dir\((?:(ltr|rtl))\)(.*)/,Ai=/:(?:matches|any|-(?:webkit|moz)-any)/,pi=new mi;function Mi(a,b,c,d,e){this.M=a||null;this.h=b||null;this.Ca=c||[];this.K=null;this.cssBuild=e||"";this.ja=d||"";this.g=this.L=this.R=null}function Ni(a){return a?a.__styleInfo:null}function Oi(a,b){return a.__styleInfo=b}Mi.prototype.i=function(){return this.M};Mi.prototype._getStyleRules=Mi.prototype.i;function Pi(a){var b=this.matches||this.matchesSelector||this.mozMatchesSelector||this.msMatchesSelector||this.oMatchesSelector||this.webkitMatchesSelector;return b&&b.call(this,a)}var Qi=/:host\s*>\s*/,Ri=navigator.userAgent.match("Trident");function Si(){}function Ti(a){var b={},c=[],d=0;Xh(a,function(f){Ui(f);f.index=d++;f=f.F.cssText;for(var g;g=Rh.exec(f);){var h=g[1];":"!==g[2]&&(b[h]=!0)}},function(f){c.push(f)});a.h=c;a=[];for(var e in b)a.push(e);return a}
function Ui(a){if(!a.F){var b={},c={};Vi(a,c)&&(b.P=c,a.rules=null);b.cssText=a.parsedCssText.replace(Uh,"").replace(Ph,"");a.F=b}}function Vi(a,b){var c=a.F;if(c){if(c.P)return Object.assign(b,c.P),!0}else{c=a.parsedCssText;for(var d;a=Ph.exec(c);){d=(a[2]||a[3]).trim();if("inherit"!==d||"unset"!==d)b[a[1].trim()]=d;d=!0}return d}}
function Wi(a,b,c){b&&(b=0<=b.indexOf(";")?Xi(a,b,c):fi(b,function(d,e,f,g){if(!e)return d+g;(e=Wi(a,c[e],c))&&"initial"!==e?"apply-shim-inherit"===e&&(e="inherit"):e=Wi(a,c[f]||f,c)||f;return d+(e||"")+g}));return b&&b.trim()||""}
function Xi(a,b,c){b=b.split(";");for(var d=0,e,f;d<b.length;d++)if(e=b[d]){Qh.lastIndex=0;if(f=Qh.exec(e))e=Wi(a,c[f[1]],c);else if(f=e.indexOf(":"),-1!==f){var g=e.substring(f);g=g.trim();g=Wi(a,g,c)||g;e=e.substring(0,f)+g}b[d]=e&&e.lastIndexOf(";")===e.length-1?e.slice(0,-1):e||""}return b.join(";")}
function Yi(a,b){var c={},d=[];Xh(a,function(e){e.F||Ui(e);var f=e.G||e.parsedSelector;b&&e.F.P&&f&&Pi.call(b,f)&&(Vi(e,c),e=e.index,f=parseInt(e/32,10),d[f]=(d[f]||0)|1<<e%32)},null,!0);return{P:c,key:d}}
function Zi(a,b,c,d){b.F||Ui(b);if(b.F.P){var e=ii(a);a=e.is;e=e.ja;e=a?vi(a,e):"html";var f=b.parsedSelector;var g=!!f.match(Qi)||"html"===e&&-1<f.indexOf("html");var h=0===f.indexOf(":host")&&!g;"shady"===c&&(g=f===e+" > *."+e||-1!==f.indexOf("html"),h=!g&&0===f.indexOf(e));if(g||h)c=e,h&&(b.G||(b.G=wi(pi,b,pi.h,a?"."+a:"",e)),c=b.G||e),g&&"html"===e&&(c=b.G||b.O),d({Ea:c,gb:h,vb:g})}}
function $i(a,b,c){var d={},e={};Xh(b,function(f){Zi(a,f,c,function(g){Pi.call(a._element||a,g.Ea)&&(g.gb?Vi(f,d):Vi(f,e))})},null,!0);return{mb:e,eb:d}}
function aj(a,b,c,d){var e=ii(b),f=vi(e.is,e.ja),g=new RegExp("(?:^|[^.#[:])"+(b.extends?"\\"+f.slice(0,-1)+"\\]":f)+"($|[.:[\\s>+~])"),h=Ni(b);e=h.M;h=h.cssBuild;var k=bj(e,d);return ti(b,e,function(l){var m="";l.F||Ui(l);l.F.cssText&&(m=Xi(a,l.F.cssText,c));l.cssText=m;if(!V&&!$h(l)&&l.cssText){var q=m=l.cssText;null==l.Ma&&(l.Ma=Sh.test(m));if(l.Ma)if(null==l.ra){l.ra=[];for(var H in k)q=k[H],q=q(m),m!==q&&(m=q,l.ra.push(H))}else{for(H=0;H<l.ra.length;++H)q=k[l.ra[H]],m=q(m);q=m}l.cssText=q;l.G=
l.G||l.selector;m="."+d;H=ji(l.G);q=0;for(var C=H.length,t=void 0;q<C&&(t=H[q]);q++)H[q]=t.match(g)?t.replace(f,m):m+" "+t;l.selector=H.join(",")}},h)}function bj(a,b){a=a.h;var c={};if(!V&&a)for(var d=0,e=a[d];d<a.length;e=a[++d]){var f=e,g=b;f.u=new RegExp("\\b"+f.keyframesName+"(?!\\B|-)","g");f.g=f.keyframesName+"-"+g;f.G=f.G||f.selector;f.selector=f.G.replace(f.keyframesName,f.g);c[e.keyframesName]=cj(e)}return c}function cj(a){return function(b){return b.replace(a.u,a.g)}}
function dj(a,b){var c=ej,d=Yh(a);a.textContent=Wh(d,function(e){var f=e.cssText=e.parsedCssText;e.F&&e.F.cssText&&(f=f.replace(Hh,"").replace(Ih,""),e.cssText=Xi(c,f,b))})}ea.Object.defineProperties(Si.prototype,{g:{configurable:!0,enumerable:!0,get:function(){return"x-scope"}}});var ej=new Si;var fj={},gj=window.customElements;if(gj&&!V&&!Oh){var hj=gj.define;gj.define=function(a,b,c){fj[a]||(fj[a]=di(a));hj.call(gj,a,b,c)}};function ij(){this.cache={}}ij.prototype.store=function(a,b,c,d){var e=this.cache[a]||[];e.push({P:b,styleElement:c,L:d});100<e.length&&e.shift();this.cache[a]=e};function jj(){}var kj=new RegExp(pi.g+"\\s*([^\\s]*)");function lj(a){return(a=(a.classList&&a.classList.value?a.classList.value:a.getAttribute("class")||"").match(kj))?a[1]:""}function mj(a){var b=hi(a).getRootNode();return b===a||b===a.ownerDocument?"":(a=b.host)?ii(a).is:""}
function nj(a){for(var b=0;b<a.length;b++){var c=a[b];if(c.target!==document.documentElement&&c.target!==document.head)for(var d=0;d<c.addedNodes.length;d++){var e=c.addedNodes[d];if(e.nodeType===Node.ELEMENT_NODE){var f=e.getRootNode(),g=lj(e);if(g&&f===e.ownerDocument&&("style"!==e.localName&&"template"!==e.localName||""===ki(e)))si(e,g);else if(f instanceof ShadowRoot)for(f=mj(e),f!==g&&ri(e,g,f),e=window.ShadyDOM.nativeMethods.querySelectorAll.call(e,":not(."+pi.g+")"),g=0;g<e.length;g++){f=e[g];
var h=mj(f);h&&qi(f,h)}}}}}
if(!(V||window.ShadyDOM&&window.ShadyDOM.handlesDynamicScoping)){var oj=new MutationObserver(nj),pj=function(a){oj.observe(a,{childList:!0,subtree:!0})};if(window.customElements&&!window.customElements.polyfillWrapFlushCallback)pj(document);else{var qj=function(){pj(document.body)};window.HTMLImports?window.HTMLImports.whenReady(qj):requestAnimationFrame(function(){if("loading"===document.readyState){var a=function(){qj();document.removeEventListener("readystatechange",a)};document.addEventListener("readystatechange",
a)}else qj()})}jj=function(){nj(oj.takeRecords())}};var rj={};var sj=Promise.resolve();function tj(a){if(a=rj[a])a._applyShimCurrentVersion=a._applyShimCurrentVersion||0,a._applyShimValidatingVersion=a._applyShimValidatingVersion||0,a._applyShimNextVersion=(a._applyShimNextVersion||0)+1}function uj(a){return a._applyShimCurrentVersion===a._applyShimNextVersion}function vj(a){a._applyShimValidatingVersion=a._applyShimNextVersion;a._validating||(a._validating=!0,sj.then(function(){a._applyShimCurrentVersion=a._applyShimNextVersion;a._validating=!1}))};var wj={},xj=new ij;function Y(){this.ea={};this.i=document.documentElement;var a=new uh;a.rules=[];this.u=Oi(this.i,new Mi(a));this.O=!1;this.g=this.h=null}v=Y.prototype;v.flush=function(){jj()};v.bb=function(a){return Yh(a)};v.qb=function(a){return Wh(a)};v.prepareTemplate=function(a,b,c){this.prepareTemplateDom(a,b);this.prepareTemplateStyles(a,b,c)};
v.prepareTemplateStyles=function(a,b,c){if(!a._prepared&&!Oh){V||fj[b]||(fj[b]=di(b));a._prepared=!0;a.name=b;a.extends=c;rj[b]=a;var d=ki(a),e=li(d);c={is:b,extends:c};for(var f=[],g=a.content.querySelectorAll("style"),h=0;h<g.length;h++){var k=g[h];if(k.hasAttribute("shady-unscoped")){if(!V){var l=k.textContent;if(!Vh.has(l)){Vh.add(l);var m=document.createElement("style");m.setAttribute("shady-unscoped","");m.textContent=l;document.head.appendChild(m)}k.parentNode.removeChild(k)}}else f.push(k.textContent),
k.parentNode.removeChild(k)}f=f.join("").trim()+(wj[b]||"");yj(this);if(!e){if(g=!d)g=Qh.test(f)||Ph.test(f),Qh.lastIndex=0,Ph.lastIndex=0;h=vh(f);g&&W&&this.h&&this.h.transformRules(h,b);a._styleAst=h}g=[];W||(g=Ti(a._styleAst));if(!g.length||W)h=V?a.content:null,b=fj[b]||null,d=ti(c,a._styleAst,null,d,e?f:""),d=d.length?ai(d,c.is,h,b):null,a._style=d;a.g=g}};v.kb=function(a,b){wj[b]=a.join(" ")};
v.prepareTemplateDom=function(a,b){if(!Oh){var c=ki(a);V||"shady"===c||a._domPrepared||(a._domPrepared=!0,ni(a.content,b))}};function zj(a){var b=ii(a),c=b.is;b=b.ja;var d=fj[c]||null,e=rj[c];if(e){c=e._styleAst;var f=e.g;e=ki(e);b=new Mi(c,d,f,b,e);Oi(a,b);return b}}
function Aj(a){!a.g&&window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface&&(a.g=window.ShadyCSS.CustomStyleInterface,a.g.transformCallback=function(b){a.Qa(b)},a.g.validateCallback=function(){requestAnimationFrame(function(){(a.g.enqueued||a.O)&&a.flushCustomStyles()})})}function yj(a){if(!a.h&&window.ShadyCSS&&window.ShadyCSS.ApplyShim){a.h=window.ShadyCSS.ApplyShim;a.h.invalidCallback=tj;var b=!0}else b=!1;Aj(a);return b}
v.flushCustomStyles=function(){if(!Oh){var a=yj(this);if(this.g){var b=this.g.processStyles();if((a||this.g.enqueued)&&!li(this.u.cssBuild)){if(W){if(!this.u.cssBuild)for(a=0;a<b.length;a++){var c=this.g.getStyleForCustomStyle(b[a]);if(c&&W&&this.h){var d=Yh(c);yj(this);this.h.transformRules(d);c.textContent=Wh(d)}}}else{Bj(this,b);Cj(this,this.i,this.u);for(a=0;a<b.length;a++)(c=this.g.getStyleForCustomStyle(b[a]))&&dj(c,this.u.R);this.O&&this.styleDocument()}this.g.enqueued=!1}}}};
function Bj(a,b){b=b.map(function(c){return a.g.getStyleForCustomStyle(c)}).filter(function(c){return!!c});b.sort(function(c,d){c=d.compareDocumentPosition(c);return c&Node.DOCUMENT_POSITION_FOLLOWING?1:c&Node.DOCUMENT_POSITION_PRECEDING?-1:0});a.u.M.rules=b.map(function(c){return Yh(c)})}
v.styleElement=function(a,b){if(Oh){if(b){Ni(a)||Oi(a,new Mi(null));var c=Ni(a);c.K=c.K||{};Object.assign(c.K,b);Dj(this,a,c)}}else if(c=Ni(a)||zj(a))if(a!==this.i&&(this.O=!0),b&&(c.K=c.K||{},Object.assign(c.K,b)),W)Dj(this,a,c);else if(this.flush(),Cj(this,a,c),c.Ca&&c.Ca.length){b=ii(a).is;var d;a:{if(d=xj.cache[b])for(var e=d.length-1;0<=e;e--){var f=d[e];b:{var g=c.Ca;for(var h=0;h<g.length;h++){var k=g[h];if(f.P[k]!==c.R[k]){g=!1;break b}}g=!0}if(g){d=f;break a}}d=void 0}g=d?d.styleElement:
null;e=c.L;(f=d&&d.L)||(f=this.ea[b]=(this.ea[b]||0)+1,f=b+"-"+f);c.L=f;f=c.L;h=ej;h=g?g.textContent||"":aj(h,a,c.R,f);k=Ni(a);var l=k.g;l&&!V&&l!==g&&(l._useCount--,0>=l._useCount&&l.parentNode&&l.parentNode.removeChild(l));V?k.g?(k.g.textContent=h,g=k.g):h&&(g=ai(h,f,a.shadowRoot,k.h)):g?g.parentNode||(Ri&&-1<h.indexOf("@media")&&(g.textContent=h),bi(g,null,k.h)):h&&(g=ai(h,f,null,k.h));g&&(g._useCount=g._useCount||0,k.g!=g&&g._useCount++,k.g=g);f=g;V||(g=c.L,k=h=a.getAttribute("class")||"",e&&
(k=h.replace(new RegExp("\\s*x-scope\\s*"+e+"\\s*","g")," ")),k+=(k?" ":"")+"x-scope "+g,h!==k&&gi(a,k));d||xj.store(b,c.R,f,c.L)}};
function Dj(a,b,c){var d=ii(b).is;if(c.K){var e=c.K,f;for(f in e)null===f?b.style.removeProperty(f):b.style.setProperty(f,e[f])}e=rj[d];if(!(!e&&b!==a.i||e&&""!==ki(e))&&e&&e._style&&!uj(e)){if(uj(e)||e._applyShimValidatingVersion!==e._applyShimNextVersion)yj(a),a.h&&a.h.transformRules(e._styleAst,d),e._style.textContent=ti(b,c.M),vj(e);V&&(a=b.shadowRoot)&&(a=a.querySelector("style"))&&(a.textContent=ti(b,c.M));c.M=e._styleAst}}
function Ej(a,b){return(b=hi(b).getRootNode().host)?Ni(b)||zj(b)?b:Ej(a,b):a.i}function Cj(a,b,c){var d=Ej(a,b),e=Ni(d),f=e.R;d===a.i||f||(Cj(a,d,e),f=e.R);a=Object.create(f||null);d=$i(b,c.M,c.cssBuild);b=Yi(e.M,b).P;Object.assign(a,d.eb,b,d.mb);b=c.K;for(var g in b)if((e=b[g])||0===e)a[g]=e;g=ej;b=Object.getOwnPropertyNames(a);for(e=0;e<b.length;e++)d=b[e],a[d]=Wi(g,a[d],a);c.R=a}v.styleDocument=function(a){this.styleSubtree(this.i,a)};
v.styleSubtree=function(a,b){var c=hi(a),d=c.shadowRoot,e=a===this.i;(d||e)&&this.styleElement(a,b);if(a=e?c:d)for(a=Array.from(a.querySelectorAll("*")).filter(function(f){return hi(f).shadowRoot}),b=0;b<a.length;b++)this.styleSubtree(a[b])};
v.Qa=function(a){var b=this,c=ki(a);c!==this.u.cssBuild&&(this.u.cssBuild=c);if(!li(c)){var d=Yh(a);Xh(d,function(e){if(V)Li(e);else{var f=pi;e.selector=e.parsedSelector;Li(e);e.selector=e.G=wi(f,e,f.i,void 0,void 0)}W&&""===c&&(yj(b),b.h&&b.h.transformRule(e))});W?a.textContent=Wh(d):this.u.M.rules.push(d)}};v.getComputedStyleValue=function(a,b){var c;W||(c=(Ni(a)||Ni(Ej(this,a))).R[b]);return(c=c||window.getComputedStyle(a).getPropertyValue(b))?c.trim():""};
v.pb=function(a,b){var c=hi(a).getRootNode();b=b?("string"===typeof b?b:String(b)).split(/\s/):[];c=c.host&&c.host.localName;if(!c){var d=a.getAttribute("class");if(d){d=d.split(/\s/);for(var e=0;e<d.length;e++)if(d[e]===pi.g){c=d[e+1];break}}}c&&b.push(pi.g,c);W||(c=Ni(a))&&c.L&&b.push(ej.g,c.L);gi(a,b.join(" "))};v.Xa=function(a){return Ni(a)};v.ob=function(a,b){qi(a,b)};v.rb=function(a,b){qi(a,b,!0)};v.nb=function(a){return mj(a)};v.$a=function(a){return lj(a)};Y.prototype.flush=Y.prototype.flush;
Y.prototype.prepareTemplate=Y.prototype.prepareTemplate;Y.prototype.styleElement=Y.prototype.styleElement;Y.prototype.styleDocument=Y.prototype.styleDocument;Y.prototype.styleSubtree=Y.prototype.styleSubtree;Y.prototype.getComputedStyleValue=Y.prototype.getComputedStyleValue;Y.prototype.setElementClass=Y.prototype.pb;Y.prototype._styleInfoForNode=Y.prototype.Xa;Y.prototype.transformCustomStyleForDocument=Y.prototype.Qa;Y.prototype.getStyleAst=Y.prototype.bb;Y.prototype.styleAstToString=Y.prototype.qb;
Y.prototype.flushCustomStyles=Y.prototype.flushCustomStyles;Y.prototype.scopeNode=Y.prototype.ob;Y.prototype.unscopeNode=Y.prototype.rb;Y.prototype.scopeForNode=Y.prototype.nb;Y.prototype.currentScopeForNode=Y.prototype.$a;Y.prototype.prepareAdoptedCssText=Y.prototype.kb;Object.defineProperties(Y.prototype,{nativeShadow:{get:function(){return V}},nativeCss:{get:function(){return W}}});var Z=new Y,Fj,Gj;window.ShadyCSS&&(Fj=window.ShadyCSS.ApplyShim,Gj=window.ShadyCSS.CustomStyleInterface);
window.ShadyCSS={ScopingShim:Z,prepareTemplate:function(a,b,c){Z.flushCustomStyles();Z.prepareTemplate(a,b,c)},prepareTemplateDom:function(a,b){Z.prepareTemplateDom(a,b)},prepareTemplateStyles:function(a,b,c){Z.flushCustomStyles();Z.prepareTemplateStyles(a,b,c)},styleSubtree:function(a,b){Z.flushCustomStyles();Z.styleSubtree(a,b)},styleElement:function(a){Z.flushCustomStyles();Z.styleElement(a)},styleDocument:function(a){Z.flushCustomStyles();Z.styleDocument(a)},flushCustomStyles:function(){Z.flushCustomStyles()},
getComputedStyleValue:function(a,b){return Z.getComputedStyleValue(a,b)},nativeCss:W,nativeShadow:V,cssBuild:Nh,disableRuntime:Oh};Fj&&(window.ShadyCSS.ApplyShim=Fj);Gj&&(window.ShadyCSS.CustomStyleInterface=Gj);(function(a){function b(t){""==t&&(f.call(this),this.m=!0);return t.toLowerCase()}function c(t){var F=t.charCodeAt(0);return 32<F&&127>F&&-1==[34,35,60,62,63,96].indexOf(F)?t:encodeURIComponent(t)}function d(t){var F=t.charCodeAt(0);return 32<F&&127>F&&-1==[34,35,60,62,96].indexOf(F)?t:encodeURIComponent(t)}function e(t,F,E){function N(ha){sa.push(ha)}var y=F||"scheme start",X=0,x="",ta=!1,ia=!1,sa=[];a:for(;(void 0!=t[X-1]||0==X)&&!this.m;){var n=t[X];switch(y){case "scheme start":if(n&&q.test(n))x+=
n.toLowerCase(),y="scheme";else if(F){N("Invalid scheme.");break a}else{x="";y="no scheme";continue}break;case "scheme":if(n&&H.test(n))x+=n.toLowerCase();else if(":"==n){this.l=x;x="";if(F)break a;void 0!==l[this.l]&&(this.H=!0);y="file"==this.l?"relative":this.H&&E&&E.l==this.l?"relative or authority":this.H?"authority first slash":"scheme data"}else if(F){void 0!=n&&N("Code point not allowed in scheme: "+n);break a}else{x="";X=0;y="no scheme";continue}break;case "scheme data":"?"==n?(this.A="?",
y="query"):"#"==n?(this.C="#",y="fragment"):void 0!=n&&"\t"!=n&&"\n"!=n&&"\r"!=n&&(this.ya+=c(n));break;case "no scheme":if(E&&void 0!==l[E.l]){y="relative";continue}else N("Missing scheme."),f.call(this),this.m=!0;break;case "relative or authority":if("/"==n&&"/"==t[X+1])y="authority ignore slashes";else{N("Expected /, got: "+n);y="relative";continue}break;case "relative":this.H=!0;"file"!=this.l&&(this.l=E.l);if(void 0==n){this.o=E.o;this.v=E.v;this.s=E.s.slice();this.A=E.A;this.B=E.B;this.j=E.j;
break a}else if("/"==n||"\\"==n)"\\"==n&&N("\\ is an invalid code point."),y="relative slash";else if("?"==n)this.o=E.o,this.v=E.v,this.s=E.s.slice(),this.A="?",this.B=E.B,this.j=E.j,y="query";else if("#"==n)this.o=E.o,this.v=E.v,this.s=E.s.slice(),this.A=E.A,this.C="#",this.B=E.B,this.j=E.j,y="fragment";else{y=t[X+1];var J=t[X+2];if("file"!=this.l||!q.test(n)||":"!=y&&"|"!=y||void 0!=J&&"/"!=J&&"\\"!=J&&"?"!=J&&"#"!=J)this.o=E.o,this.v=E.v,this.B=E.B,this.j=E.j,this.s=E.s.slice(),this.s.pop();y=
"relative path";continue}break;case "relative slash":if("/"==n||"\\"==n)"\\"==n&&N("\\ is an invalid code point."),y="file"==this.l?"file host":"authority ignore slashes";else{"file"!=this.l&&(this.o=E.o,this.v=E.v,this.B=E.B,this.j=E.j);y="relative path";continue}break;case "authority first slash":if("/"==n)y="authority second slash";else{N("Expected '/', got: "+n);y="authority ignore slashes";continue}break;case "authority second slash":y="authority ignore slashes";if("/"!=n){N("Expected '/', got: "+
n);continue}break;case "authority ignore slashes":if("/"!=n&&"\\"!=n){y="authority";continue}else N("Expected authority, got: "+n);break;case "authority":if("@"==n){ta&&(N("@ already seen."),x+="%40");ta=!0;for(n=0;n<x.length;n++)J=x[n],"\t"==J||"\n"==J||"\r"==J?N("Invalid whitespace in authority."):":"==J&&null===this.j?this.j="":(J=c(J),null!==this.j?this.j+=J:this.B+=J);x=""}else if(void 0==n||"/"==n||"\\"==n||"?"==n||"#"==n){X-=x.length;x="";y="host";continue}else x+=n;break;case "file host":if(void 0==
n||"/"==n||"\\"==n||"?"==n||"#"==n){2!=x.length||!q.test(x[0])||":"!=x[1]&&"|"!=x[1]?(0!=x.length&&(this.o=b.call(this,x),x=""),y="relative path start"):y="relative path";continue}else"\t"==n||"\n"==n||"\r"==n?N("Invalid whitespace in file host."):x+=n;break;case "host":case "hostname":if(":"!=n||ia)if(void 0==n||"/"==n||"\\"==n||"?"==n||"#"==n){this.o=b.call(this,x);x="";y="relative path start";if(F)break a;continue}else"\t"!=n&&"\n"!=n&&"\r"!=n?("["==n?ia=!0:"]"==n&&(ia=!1),x+=n):N("Invalid code point in host/hostname: "+
n);else if(this.o=b.call(this,x),x="",y="port","hostname"==F)break a;break;case "port":if(/[0-9]/.test(n))x+=n;else if(void 0==n||"/"==n||"\\"==n||"?"==n||"#"==n||F){""!=x&&(x=parseInt(x,10),x!=l[this.l]&&(this.v=x+""),x="");if(F)break a;y="relative path start";continue}else"\t"==n||"\n"==n||"\r"==n?N("Invalid code point in port: "+n):(f.call(this),this.m=!0);break;case "relative path start":"\\"==n&&N("'\\' not allowed in path.");y="relative path";if("/"!=n&&"\\"!=n)continue;break;case "relative path":if(void 0!=
n&&"/"!=n&&"\\"!=n&&(F||"?"!=n&&"#"!=n))"\t"!=n&&"\n"!=n&&"\r"!=n&&(x+=c(n));else{"\\"==n&&N("\\ not allowed in relative path.");if(J=m[x.toLowerCase()])x=J;".."==x?(this.s.pop(),"/"!=n&&"\\"!=n&&this.s.push("")):"."==x&&"/"!=n&&"\\"!=n?this.s.push(""):"."!=x&&("file"==this.l&&0==this.s.length&&2==x.length&&q.test(x[0])&&"|"==x[1]&&(x=x[0]+":"),this.s.push(x));x="";"?"==n?(this.A="?",y="query"):"#"==n&&(this.C="#",y="fragment")}break;case "query":F||"#"!=n?void 0!=n&&"\t"!=n&&"\n"!=n&&"\r"!=n&&(this.A+=
d(n)):(this.C="#",y="fragment");break;case "fragment":void 0!=n&&"\t"!=n&&"\n"!=n&&"\r"!=n&&(this.C+=n)}X++}}function f(){this.B=this.ya=this.l="";this.j=null;this.v=this.o="";this.s=[];this.C=this.A="";this.H=this.m=!1}function g(t,F){void 0===F||F instanceof g||(F=new g(String(F)));this.g=t;f.call(this);e.call(this,this.g.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g,""),null,F)}var h=!1;try{var k=new URL("b","http://a");k.pathname="c%20d";h="http://a/c%20d"===k.href}catch(t){}if(!h){var l=Object.create(null);
l.ftp=21;l.file=0;l.gopher=70;l.http=80;l.https=443;l.ws=80;l.wss=443;var m=Object.create(null);m["%2e"]=".";m[".%2e"]="..";m["%2e."]="..";m["%2e%2e"]="..";var q=/[a-zA-Z]/,H=/[a-zA-Z0-9+\-.]/;g.prototype={toString:function(){return this.href},get href(){if(this.m)return this.g;var t="";if(""!=this.B||null!=this.j)t=this.B+(null!=this.j?":"+this.j:"")+"@";return this.protocol+(this.H?"//"+t+this.host:"")+this.pathname+this.A+this.C},set href(t){f.call(this);e.call(this,t)},get protocol(){return this.l+
":"},set protocol(t){this.m||e.call(this,t+":","scheme start")},get host(){return this.m?"":this.v?this.o+":"+this.v:this.o},set host(t){!this.m&&this.H&&e.call(this,t,"host")},get hostname(){return this.o},set hostname(t){!this.m&&this.H&&e.call(this,t,"hostname")},get port(){return this.v},set port(t){!this.m&&this.H&&e.call(this,t,"port")},get pathname(){return this.m?"":this.H?"/"+this.s.join("/"):this.ya},set pathname(t){!this.m&&this.H&&(this.s=[],e.call(this,t,"relative path start"))},get search(){return this.m||
!this.A||"?"==this.A?"":this.A},set search(t){!this.m&&this.H&&(this.A="?","?"==t[0]&&(t=t.slice(1)),e.call(this,t,"query"))},get hash(){return this.m||!this.C||"#"==this.C?"":this.C},set hash(t){this.m||(t?(this.C="#","#"==t[0]&&(t=t.slice(1)),e.call(this,t,"fragment")):this.C="")},get origin(){var t;if(this.m||!this.l)return"";switch(this.l){case "data":case "file":case "javascript":case "mailto":return"null"}return(t=this.host)?this.l+"://"+t:""}};var C=a.URL;C&&(g.createObjectURL=function(t){return C.createObjectURL.apply(C,
arguments)},g.revokeObjectURL=function(t){C.revokeObjectURL(t)});a.URL=g}})(window);/*

Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
var Hj=window.customElements,Ij=!1,Jj=null;Hj.polyfillWrapFlushCallback&&Hj.polyfillWrapFlushCallback(function(a){Jj=a;Ij&&a()});function Kj(){window.HTMLTemplateElement.bootstrap&&window.HTMLTemplateElement.bootstrap(window.document);Jj&&Jj();Ij=!0;window.WebComponents.ready=!0;document.dispatchEvent(new CustomEvent("WebComponentsReady",{bubbles:!0}))}
"complete"!==document.readyState?(window.addEventListener("load",Kj),window.addEventListener("DOMContentLoaded",function(){window.removeEventListener("load",Kj);Kj()})):Kj();}).call(this);

//# sourceMappingURL=webcomponents-bundle.js.map


/***/ }),
/* 37 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var globalThis = __webpack_require__(0);
var getOwnPropertyDescriptor = (__webpack_require__(38).f);
var createNonEnumerableProperty = __webpack_require__(28);
var defineBuiltIn = __webpack_require__(51);
var defineGlobalProperty = __webpack_require__(13);
var copyConstructorProperties = __webpack_require__(54);
var isForced = __webpack_require__(61);

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = globalThis;
  } else if (STATIC) {
    target = globalThis[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = globalThis[TARGET] && globalThis[TARGET].prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    defineBuiltIn(target, key, sourceProperty, options);
  }
};


/***/ }),
/* 38 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(3);
var call = __webpack_require__(10);
var propertyIsEnumerableModule = __webpack_require__(74);
var createPropertyDescriptor = __webpack_require__(16);
var toIndexedObject = __webpack_require__(9);
var toPropertyKey = __webpack_require__(19);
var hasOwn = __webpack_require__(5);
var IE8_DOM_DEFINE = __webpack_require__(26);

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ }),
/* 39 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(4);
var fails = __webpack_require__(1);
var classof = __webpack_require__(40);

var $Object = Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) === 'String' ? split(it, '') : $Object(it);
} : $Object;


/***/ }),
/* 40 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(4);

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),
/* 41 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var call = __webpack_require__(10);
var isObject = __webpack_require__(6);
var isSymbol = __webpack_require__(20);
var getMethod = __webpack_require__(45);
var ordinaryToPrimitive = __webpack_require__(48);
var wellKnownSymbol = __webpack_require__(23);

var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw new $TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),
/* 42 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(4);

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),
/* 43 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var globalThis = __webpack_require__(0);
var userAgent = __webpack_require__(44);

var process = globalThis.process;
var Deno = globalThis.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),
/* 44 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var globalThis = __webpack_require__(0);

var navigator = globalThis.navigator;
var userAgent = navigator && navigator.userAgent;

module.exports = userAgent ? String(userAgent) : '';


/***/ }),
/* 45 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var aCallable = __webpack_require__(46);
var isNullOrUndefined = __webpack_require__(18);

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return isNullOrUndefined(func) ? undefined : aCallable(func);
};


/***/ }),
/* 46 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var isCallable = __webpack_require__(2);
var tryToString = __webpack_require__(47);

var $TypeError = TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw new $TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),
/* 47 */
/***/ (function(module) {


var $String = String;

module.exports = function (argument) {
  try {
    return $String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),
/* 48 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var call = __webpack_require__(10);
var isCallable = __webpack_require__(2);
var isObject = __webpack_require__(6);

var $TypeError = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw new $TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 49 */
/***/ (function(module) {


module.exports = false;


/***/ }),
/* 50 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var requireObjectCoercible = __webpack_require__(17);

var $Object = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return $Object(requireObjectCoercible(argument));
};


/***/ }),
/* 51 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var isCallable = __webpack_require__(2);
var definePropertyModule = __webpack_require__(7);
var makeBuiltIn = __webpack_require__(30);
var defineGlobalProperty = __webpack_require__(13);

module.exports = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable(value)) makeBuiltIn(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) { /* empty */ }
    if (simple) O[key] = value;
    else definePropertyModule.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};


/***/ }),
/* 52 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(4);
var isCallable = __webpack_require__(2);
var store = __webpack_require__(12);

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),
/* 53 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var globalThis = __webpack_require__(0);
var isCallable = __webpack_require__(2);

var WeakMap = globalThis.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));


/***/ }),
/* 54 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var hasOwn = __webpack_require__(5);
var ownKeys = __webpack_require__(55);
var getOwnPropertyDescriptorModule = __webpack_require__(38);
var definePropertyModule = __webpack_require__(7);

module.exports = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};


/***/ }),
/* 55 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var getBuiltIn = __webpack_require__(11);
var uncurryThis = __webpack_require__(4);
var getOwnPropertyNamesModule = __webpack_require__(77);
var getOwnPropertySymbolsModule = __webpack_require__(78);
var anObject = __webpack_require__(8);

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),
/* 56 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var toIndexedObject = __webpack_require__(9);
var toAbsoluteIndex = __webpack_require__(57);
var lengthOfArrayLike = __webpack_require__(59);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    if (length === 0) return !IS_INCLUDES && -1;
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el !== el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value !== value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  m: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  q: createMethod(false)
};


/***/ }),
/* 57 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var toIntegerOrInfinity = __webpack_require__(34);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),
/* 58 */
/***/ (function(module) {


var ceil = Math.ceil;
var floor = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};


/***/ }),
/* 59 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var toLength = __webpack_require__(60);

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),
/* 60 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var toIntegerOrInfinity = __webpack_require__(34);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  var len = toIntegerOrInfinity(argument);
  return len > 0 ? min(len, 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),
/* 61 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var fails = __webpack_require__(1);
var isCallable = __webpack_require__(2);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value === POLYFILL ? true
    : value === NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),
/* 62 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var wellKnownSymbol = __webpack_require__(23);
var create = __webpack_require__(63);
var defineProperty = (__webpack_require__(7).f);

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] === undefined) {
  defineProperty(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),
/* 63 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__(8);
var definePropertiesModule = __webpack_require__(79);
var enumBugKeys = __webpack_require__(14);
var hiddenKeys = __webpack_require__(32);
var html = __webpack_require__(65);
var documentCreateElement = __webpack_require__(27);
var sharedKey = __webpack_require__(31);

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  // eslint-disable-next-line no-useless-assignment -- avoid memory leak
  activeXDocument = null;
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es/no-object-create -- safe
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};


/***/ }),
/* 64 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var internalObjectKeys = __webpack_require__(33);
var enumBugKeys = __webpack_require__(14);

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),
/* 65 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var getBuiltIn = __webpack_require__(11);

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),
/* 66 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var makeBuiltIn = __webpack_require__(30);
var defineProperty = __webpack_require__(7);

module.exports = function (target, name, descriptor) {
  if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
  if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
  return defineProperty.f(target, name, descriptor);
};


/***/ }),
/* 67 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var anObject = __webpack_require__(8);

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.hasIndices) result += 'd';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.unicodeSets) result += 'v';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),
/* 68 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(69);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 69 */
/***/ (function(module) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 70 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) // removed by dead control flow
{ var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(68)();
}


/***/ }),
/* 71 */
/***/ (function() {

// extracted by mini-css-extract-plugin


/***/ }),
/* 72 */
/***/ (function() {

/**
@license @nocompile
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
(function () {
    'use strict';

    (function(){if(void 0===window.Reflect||void 0===window.customElements||window.customElements.polyfillWrapFlushCallback)return;const a=HTMLElement;window.HTMLElement={HTMLElement:function HTMLElement(){return Reflect.construct(a,[],this.constructor)}}.HTMLElement,HTMLElement.prototype=a.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,a);})();

}());


/***/ }),
/* 73 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  RU: function() { return /* binding */ WebDocumentation; },
  FH: function() { return /* binding */ source_api; },
  Ay: function() { return /* binding */ source; },
  Rm: function() { return /* binding */ source_log; }
});

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(35);
// EXTERNAL MODULE: ./node_modules/clientnode/dist/index.js
var dist = __webpack_require__(82);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(70);
;// ./node_modules/clientnode/dist/property-types.js
if(typeof property_types_window==='undefined'||property_types_window===null)var property_types_window=(typeof globalThis==='undefined'||globalThis===null)?{}:globalThis;


;// external "core-js/modules/es.array.includes.js"

;// external "prop-types"

;// ./src/property-types.ts
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module propertTypes *//* !
    region header
    [Project page](https://torben.website/react-material-input)

    Copyright Torben Sickert (info["~at~"]torben.website) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/// region imports
function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)};function _defineProperties(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,_toPropertyKey(o.key),o)}}function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function _classCallCheck(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_setPrototypeOf(t,e)}function _callSuper(t,o,e){return o=_getPrototypeOf(o),_possibleConstructorReturn(t,_isNativeReflectConstruct()?Reflect.construct(o,e||[],_getPrototypeOf(t).constructor):o.apply(t,e))}function _possibleConstructorReturn(t,e){if(e&&("object"==_typeof(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _wrapNativeSuper(t){var r="function"==typeof Map?new Map:void 0;return _wrapNativeSuper=function _wrapNativeSuper(t){if(null===t||!_isNativeFunction(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(t))return r.get(t);r.set(t,Wrapper)}function Wrapper(){return _construct(t,arguments,_getPrototypeOf(this).constructor)}return Wrapper.prototype=Object.create(t.prototype,{constructor:{value:Wrapper,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(Wrapper,t)},_wrapNativeSuper(t)}function _construct(t,e,r){if(_isNativeReflectConstruct())return Reflect.construct.apply(null,arguments);var o=[null];o.push.apply(o,e);var p=new(t.bind.apply(t,o));return r&&_setPrototypeOf(p,r.prototype),p}function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}function _isNativeFunction(t){try{return-1!==Function.toString.call(t).indexOf("[native code]")}catch(n){return"function"==typeof t}}function _setPrototypeOf(t,e){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},_setPrototypeOf(t,e)}function _getPrototypeOf(t){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},_getPrototypeOf(t)}function _defineProperty(e,r,t){return(r=_toPropertyKey(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _toPropertyKey(t){var i=_toPrimitive(t,"string");return"symbol"==_typeof(i)?i:i+""}function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)};// endregion
var NullSymbol=Symbol("clientnodePropertyTypesNull");var UndefinedSymbol=Symbol("clientnodePropertyTypesUndefined");var RealTypes={any:prop_types.any,array:prop_types.array,arrayOf:prop_types.arrayOf,bool:prop_types.bool,boolean:prop_types.bool,element:prop_types.element,elementType:prop_types.elementType,exact:prop_types.exact,func:prop_types.func,instanceOf:prop_types.instanceOf,node:prop_types.node,number:prop_types.number,object:prop_types.object,objectOf:prop_types.objectOf,oneOf:prop_types.oneOf,oneOfType:prop_types.oneOfType,shape:prop_types.shape,string:prop_types.string,symbol:prop_types.symbol};var createDummy=function createDummy(result){if(result===void 0){result=null}var type=function type(){return result};type.isRequired=function(){return null};return type};/**
 * Dummy validation class.
 * @property message - Holds error message as string.
 */var ValidationError=/*#__PURE__*/function(_Function){/**
     * Initializes dummy validation error instance.
     */function ValidationError(){var _this;_classCallCheck(this,ValidationError);_this=_callSuper(this,ValidationError,["return null"]);_defineProperty(_this,"message","DummyErrorMessage");return _this}_inherits(ValidationError,_Function);return _createClass(ValidationError)}(/*#__PURE__*/_wrapNativeSuper(Function));/*
    NOTE: Each value has to be different (a real copy) to distinguish them from
    each other during runtime property reflections.
    Strict equality checks between different values have to be negative.
*/var DummyTypes={any:createDummy(),array:createDummy(),arrayOf:createDummy(new ValidationError),bool:createDummy(),boolean:createDummy(),element:createDummy(),elementType:createDummy(new ValidationError),exact:createDummy(),func:createDummy(),instanceOf:createDummy(new ValidationError),node:createDummy(),number:createDummy(),object:createDummy(),objectOf:createDummy(new ValidationError),oneOf:createDummy(new ValidationError),oneOfType:createDummy(new ValidationError),shape:createDummy(new ValidationError),string:createDummy(),symbol:createDummy()};var PropertyTypes=["debug","dev","development"].includes(("production"||0).trim().toLowerCase())?RealTypes:DummyTypes;var any=PropertyTypes.any;var array=PropertyTypes.array;var arrayOf=PropertyTypes.arrayOf;var bool=PropertyTypes.bool;var property_types_boolean=PropertyTypes.bool;var property_types_element=PropertyTypes.element;var elementType=PropertyTypes.elementType;var exact=PropertyTypes.exact;var func=PropertyTypes.func;var instanceOf=PropertyTypes.instanceOf;var node=PropertyTypes.node;var number=PropertyTypes.number;var object=PropertyTypes.object;var objectOf=PropertyTypes.objectOf;var oneOf=PropertyTypes.oneOf;var oneOfType=PropertyTypes.oneOfType;var shape=PropertyTypes.shape;var string=PropertyTypes.string;var symbol=PropertyTypes.symbol;/* harmony default export */ var property_types = ((/* unused pure expression or super */ null && (PropertyTypes)));


;// ./node_modules/web-component-wrapper/dist/compatible/decorator.js
if(typeof decorator_window==='undefined'||decorator_window===null)var decorator_window=(typeof globalThis==='undefined'||globalThis===null)?{}:globalThis;

/******/ var decorator_webpack_modules_ = ([
/* 0 */
/***/ (function(module, __unused_webpack_exports, __nested_webpack_require_399__) {

var x = function(y) {
	var x = {}; __nested_webpack_require_399__.d(x, y); return x
} 
var y = function(x) { return function() { return x; }; }
module.exports = x({ ["camelCaseToDelimited"]: function() { return dist/* camelCaseToDelimited */.h1R; }, ["copy"]: function() { return dist/* copy */.Cal; } });

/***/ }),
/* 1 */
/***/ (function(module, __unused_webpack_exports, __nested_webpack_require_837__) {

var x = function(y) {
	var x = {}; __nested_webpack_require_837__.d(x, y); return x
} 
var y = function(x) { return function() { return x; }; }
module.exports = x({ ["string"]: function() { return string; } });

/***/ })
/******/ ]);
/************************************************************************/
/******/ // The module cache
/******/ var decorator_webpack_module_cache_ = {};
/******/ 
/******/ // The require function
/******/ function __nested_webpack_require_1347__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = decorator_webpack_module_cache_[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = decorator_webpack_module_cache_[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	decorator_webpack_modules_[moduleId](module, module.exports, __nested_webpack_require_1347__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ // define getter/value functions for harmony exports
/******/ __nested_webpack_require_1347__.d = function(exports, definition) {
/******/ 	for(var key in definition) {
/******/ 		if(__nested_webpack_require_1347__.o(definition, key) && !__nested_webpack_require_1347__.o(exports, key)) {
/******/ 			Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 		}
/******/ 	}
/******/ };
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ __nested_webpack_require_1347__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); };
/******/ 
/************************************************************************/
var __nested_webpack_exports__ = {};
/* harmony export */ __nested_webpack_require_1347__.d(__nested_webpack_exports__, {
/* harmony export */   M: function() { return /* binding */ property; }
/* harmony export */ });
/* harmony import */ var clientnode__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_1347__(0);
/* harmony import */ var clientnode_property_types__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_1347__(1);
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module decorator *//* !
    region header
    [Project page](https://torben.website/web-component-wrapper)

    Copyright Torben Sickert (info["~at~"]torben.website) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/// region imports
function decorator_typeof(o){"@babel/helpers - typeof";return decorator_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},decorator_typeof(o)}function _toConsumableArray(r){return _arrayWithoutHoles(r)||_iterableToArray(r)||_unsupportedIterableToArray(r)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}function _iterableToArray(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}function _arrayWithoutHoles(r){if(Array.isArray(r))return _arrayLikeToArray(r)}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach(function(r){decorator_defineProperty(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function decorator_defineProperty(e,r,t){return(r=decorator_toPropertyKey(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function decorator_toPropertyKey(t){var i=decorator_toPrimitive(t,"string");return"symbol"==decorator_typeof(i)?i:i+""}function decorator_toPrimitive(t,r){if("object"!=decorator_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=decorator_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)};// endregion
/**
 * Generates a decorator based on given configuration.
 * @param options - Property configuration to define how to transfer attributes
 * and properties into each other.
 * @param options.alias - Alternate property name.
 * @param options.readAttribute - Indicates whether to read from existing
 * attribute also.
 * @param options.type - Value type to parse value.
 * @param options.update - Indicates whether to overwrite already existing
 * property configurations.
 * @param options.writeAttribute - Indicates whether to sync attribute
 * representation back into dom.
 * @returns Generated decorator.
 */function property(options){if(options===void 0){options={}}options=_objectSpread({readAttribute:true,type:clientnode_property_types__WEBPACK_IMPORTED_MODULE_1__.string},options);/**
     * Registers given property to different property / attribute conversion
     * data structures.
     * NOTE: It is important to set static configuration properties on its
     * "own" properties instead of some inherited one. So we have to check via
     * "hasOwnProperty" for existence in this decorator.
     * @param target - Instance to apply given property to.
     * @param name - Field name to apply.
     */return function(target,name){if(typeof name!=="string")return;var self=target.self||target.constructor;if(options.readAttribute){if(!Object.prototype.hasOwnProperty.call(self,"observedAttributes"))self.observedAttributes=self.observedAttributes?_toConsumableArray(self.observedAttributes):[];var attributeName=(0,clientnode__WEBPACK_IMPORTED_MODULE_0__.camelCaseToDelimited)(name);if(self.observedAttributes&&!self.observedAttributes.includes(attributeName))self.observedAttributes.push(attributeName)}if(options.type){if(!Object.prototype.hasOwnProperty.call(self,"propertyTypes"))self.propertyTypes=self.propertyTypes?_objectSpread({},self.propertyTypes):{};if(self.propertyTypes&&(options.update||!Object.prototype.hasOwnProperty.call(self,name)))self.propertyTypes[name]=options.type}if(options.writeAttribute){if(!Object.prototype.hasOwnProperty.call(self,"propertiesToReflectAsAttributes"))self.propertiesToReflectAsAttributes=self.propertiesToReflectAsAttributes?(0,clientnode__WEBPACK_IMPORTED_MODULE_0__.copy)(self.propertiesToReflectAsAttributes):[];if(options.update||self.propertiesToReflectAsAttributes instanceof Map&&!self.propertiesToReflectAsAttributes.has(name)||Array.isArray(self.propertiesToReflectAsAttributes)&&!self.propertiesToReflectAsAttributes.includes(name)||decorator_typeof(self.propertiesToReflectAsAttributes)==="object"&&!Object.prototype.hasOwnProperty.call(self.propertiesToReflectAsAttributes,name)){var result;if(typeof options.writeAttribute==="boolean"){if(options.writeAttribute&&self.propertyTypes&&Object.prototype.hasOwnProperty.call(self.propertyTypes,name))result=self.propertyTypes[name]}else result=options.writeAttribute;if(result!==undefined){if(Array.isArray(self.propertiesToReflectAsAttributes))if(options.writeAttribute===true)self.propertiesToReflectAsAttributes.push(name);else if(self.normalizePropertyTypeList)self.propertiesToReflectAsAttributes=self.normalizePropertyTypeList(self.propertiesToReflectAsAttributes);if(self.propertiesToReflectAsAttributes instanceof Map)self.propertiesToReflectAsAttributes.set(name,result);if(decorator_typeof(self.propertiesToReflectAsAttributes)==="object")self.propertiesToReflectAsAttributes[name]=result}}}if(options.alias){if(!Object.prototype.hasOwnProperty.call(self,"propertyAliases"))self.propertyAliases=self.propertyAliases?_objectSpread({},self.propertyAliases):{};if(self.propertyAliases&&(options.update||!Object.prototype.hasOwnProperty.call(self,name)))self.propertyAliases[name]=options.alias}}}/* harmony default export */ __nested_webpack_exports__.A = (property);
var __webpack_exports__default = __nested_webpack_exports__.A;


;// ./node_modules/web-component-wrapper/dist/compatible/Web.js
if(typeof Web_window==='undefined'||Web_window===null)var Web_window=(typeof globalThis==='undefined'||globalThis===null)?{}:globalThis;

/******/ var Web_webpack_modules_ = ([
/* 0 */
/***/ (function(module, __unused_webpack_exports, __nested_webpack_require_399__) {

var x = function(y) {
	var x = {}; __nested_webpack_require_399__.d(x, y); return x
} 
var y = function(x) { return function() { return x; }; }
module.exports = x({ ["Logger"]: function() { return dist/* Logger */.VyI; }, ["NOOP"]: function() { return dist/* NOOP */.tEg; }, ["UTILITY_SCOPE"]: function() { return dist/* UTILITY_SCOPE */.MXd; }, ["UTILITY_SCOPE_NAMES"]: function() { return dist/* UTILITY_SCOPE_NAMES */.bGc; }, ["camelCaseToDelimited"]: function() { return dist/* camelCaseToDelimited */.h1R; }, ["compile"]: function() { return dist/* compile */.wEV; }, ["convertPlainObjectToMap"]: function() { return dist/* convertPlainObjectToMap */.eQA; }, ["copy"]: function() { return dist/* copy */.Cal; }, ["delimitedToCamelCase"]: function() { return dist/* delimitedToCamelCase */.XD1; }, ["evaluate"]: function() { return dist/* evaluate */._3z; }, ["extend"]: function() { return dist/* extend */.X$i; }, ["isFunction"]: function() { return dist/* isFunction */.Tnt; }, ["isObject"]: function() { return dist/* isObject */.Gvm; }, ["lowerCase"]: function() { return dist/* lowerCase */.gQT; }, ["replace"]: function() { return dist/* replace */.HCR; }, ["represent"]: function() { return dist/* represent */.DoQ; }, ["timeout"]: function() { return dist/* timeout */.wRz; }, ["unique"]: function() { return dist/* unique */.AmM; }, ["unwrap"]: function() { return dist/* unwrap */.oAg; } });

/***/ }),
/* 1 */
/***/ (function(module, __unused_webpack_exports, __nested_webpack_require_2363__) {

var x = function(y) {
	var x = {}; __nested_webpack_require_2363__.d(x, y); return x
} 
var y = function(x) { return function() { return x; }; }
module.exports = x({ ["any"]: function() { return any; }, ["array"]: function() { return array; }, ["arrayOf"]: function() { return arrayOf; }, ["boolean"]: function() { return property_types_boolean; }, ["element"]: function() { return property_types_element; }, ["elementType"]: function() { return elementType; }, ["exact"]: function() { return exact; }, ["func"]: function() { return func; }, ["instanceOf"]: function() { return instanceOf; }, ["node"]: function() { return node; }, ["number"]: function() { return number; }, ["object"]: function() { return object; }, ["objectOf"]: function() { return objectOf; }, ["oneOf"]: function() { return oneOf; }, ["oneOfType"]: function() { return oneOfType; }, ["shape"]: function() { return shape; }, ["string"]: function() { return string; }, ["symbol"]: function() { return symbol; } });

/***/ }),
/* 2 */
/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_4545__) {

/* unused harmony export property */
/* harmony import */ var clientnode__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_4545__(0);
/* harmony import */ var clientnode_property_types__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_4545__(1);
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module decorator *//* !
    region header
    [Project page](https://torben.website/web-component-wrapper)

    Copyright Torben Sickert (info["~at~"]torben.website) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/// region imports
function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _toConsumableArray(r){return _arrayWithoutHoles(r)||_iterableToArray(r)||_unsupportedIterableToArray(r)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}function _iterableToArray(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}function _arrayWithoutHoles(r){if(Array.isArray(r))return _arrayLikeToArray(r)}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach(function(r){_defineProperty(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function _defineProperty(e,r,t){return(r=_toPropertyKey(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _toPropertyKey(t){var i=_toPrimitive(t,"string");return"symbol"==_typeof(i)?i:i+""}function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)};// endregion
/**
 * Generates a decorator based on given configuration.
 * @param options - Property configuration to define how to transfer attributes
 * and properties into each other.
 * @param options.alias - Alternate property name.
 * @param options.readAttribute - Indicates whether to read from existing
 * attribute also.
 * @param options.type - Value type to parse value.
 * @param options.update - Indicates whether to overwrite already existing
 * property configurations.
 * @param options.writeAttribute - Indicates whether to sync attribute
 * representation back into dom.
 * @returns Generated decorator.
 */function property(options){if(options===void 0){options={}}options=_objectSpread({readAttribute:true,type:clientnode_property_types__WEBPACK_IMPORTED_MODULE_1__.string},options);/**
     * Registers given property to different property / attribute conversion
     * data structures.
     * NOTE: It is important to set static configuration properties on its
     * "own" properties instead of some inherited one. So we have to check via
     * "hasOwnProperty" for existence in this decorator.
     * @param target - Instance to apply given property to.
     * @param name - Field name to apply.
     */return function(target,name){if(typeof name!=="string")return;var self=target.self||target.constructor;if(options.readAttribute){if(!Object.prototype.hasOwnProperty.call(self,"observedAttributes"))self.observedAttributes=self.observedAttributes?_toConsumableArray(self.observedAttributes):[];var attributeName=(0,clientnode__WEBPACK_IMPORTED_MODULE_0__.camelCaseToDelimited)(name);if(self.observedAttributes&&!self.observedAttributes.includes(attributeName))self.observedAttributes.push(attributeName)}if(options.type){if(!Object.prototype.hasOwnProperty.call(self,"propertyTypes"))self.propertyTypes=self.propertyTypes?_objectSpread({},self.propertyTypes):{};if(self.propertyTypes&&(options.update||!Object.prototype.hasOwnProperty.call(self,name)))self.propertyTypes[name]=options.type}if(options.writeAttribute){if(!Object.prototype.hasOwnProperty.call(self,"propertiesToReflectAsAttributes"))self.propertiesToReflectAsAttributes=self.propertiesToReflectAsAttributes?(0,clientnode__WEBPACK_IMPORTED_MODULE_0__.copy)(self.propertiesToReflectAsAttributes):[];if(options.update||self.propertiesToReflectAsAttributes instanceof Map&&!self.propertiesToReflectAsAttributes.has(name)||Array.isArray(self.propertiesToReflectAsAttributes)&&!self.propertiesToReflectAsAttributes.includes(name)||_typeof(self.propertiesToReflectAsAttributes)==="object"&&!Object.prototype.hasOwnProperty.call(self.propertiesToReflectAsAttributes,name)){var result;if(typeof options.writeAttribute==="boolean"){if(options.writeAttribute&&self.propertyTypes&&Object.prototype.hasOwnProperty.call(self.propertyTypes,name))result=self.propertyTypes[name]}else result=options.writeAttribute;if(result!==undefined){if(Array.isArray(self.propertiesToReflectAsAttributes))if(options.writeAttribute===true)self.propertiesToReflectAsAttributes.push(name);else if(self.normalizePropertyTypeList)self.propertiesToReflectAsAttributes=self.normalizePropertyTypeList(self.propertiesToReflectAsAttributes);if(self.propertiesToReflectAsAttributes instanceof Map)self.propertiesToReflectAsAttributes.set(name,result);if(_typeof(self.propertiesToReflectAsAttributes)==="object")self.propertiesToReflectAsAttributes[name]=result}}}if(options.alias){if(!Object.prototype.hasOwnProperty.call(self,"propertyAliases"))self.propertyAliases=self.propertyAliases?_objectSpread({},self.propertyAliases):{};if(self.propertyAliases&&(options.update||!Object.prototype.hasOwnProperty.call(self,name)))self.propertyAliases[name]=options.alias}}}/* harmony default export */ __nested_webpack_exports__.A = (property);

/***/ })
/******/ ]);
/************************************************************************/
/******/ // The module cache
/******/ var Web_webpack_module_cache_ = {};
/******/ 
/******/ // The require function
/******/ function __nested_webpack_require_11656__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = Web_webpack_module_cache_[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = Web_webpack_module_cache_[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	Web_webpack_modules_[moduleId](module, module.exports, __nested_webpack_require_11656__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ // define getter/value functions for harmony exports
/******/ __nested_webpack_require_11656__.d = function(exports, definition) {
/******/ 	for(var key in definition) {
/******/ 		if(__nested_webpack_require_11656__.o(definition, key) && !__nested_webpack_require_11656__.o(exports, key)) {
/******/ 			Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 		}
/******/ 	}
/******/ };
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ __nested_webpack_require_11656__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); };
/******/ 
/************************************************************************/
var Web_nested_webpack_exports_ = {};
/* harmony export */ __nested_webpack_require_11656__.d(Web_nested_webpack_exports_, {
/* harmony export */   FH: function() { return /* binding */ api; },
/* harmony export */   Hh: function() { return /* binding */ GenericHTMLElement; },
/* harmony export */   Nc: function() { return /* binding */ Web; },
/* harmony export */   Rm: function() { return /* binding */ log; }
/* harmony export */ });
/* harmony import */ var Web_clientnode_WEBPACK_IMPORTED_MODULE_0_ = __nested_webpack_require_11656__(0);
/* harmony import */ var Web_clientnode_property_types_WEBPACK_IMPORTED_MODULE_1_ = __nested_webpack_require_11656__(1);
/* harmony import */ var _decorator_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_11656__(2);
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module web *//* !
    region header
    [Project page](https://torben.website/web-component-wrapper)

    Copyright Torben Sickert (info["~at~"]torben.website) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/// region imports
var _dec,_class,_descriptor,_Web;function Web_typeof(o){"@babel/helpers - typeof";return Web_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},Web_typeof(o)}function _slicedToArray(r,e){return _arrayWithHoles(r)||_iterableToArrayLimit(r,e)||Web_unsupportedIterableToArray(r,e)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}function _arrayWithHoles(r){if(Array.isArray(r))return r}function _regenerator(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var e,t,r="function"==typeof Symbol?Symbol:{},n=r.iterator||"@@iterator",o=r.toStringTag||"@@toStringTag";function i(r,n,o,i){var c=n&&n.prototype instanceof Generator?n:Generator,u=Object.create(c.prototype);return _regeneratorDefine2(u,"_invoke",function(r,n,o){var i,c,u,f=0,p=o||[],y=!1,G={p:0,n:0,v:e,a:d,f:d.bind(e,4),d:function d(t,r){return i=t,c=0,u=e,G.n=r,a}};function d(r,n){for(c=r,u=n,t=0;!y&&f&&!o&&t<p.length;t++){var o,i=p[t],d=G.p,l=i[2];r>3?(o=l===n)&&(u=i[(c=i[4])?5:(c=3,3)],i[4]=i[5]=e):i[0]<=d&&((o=r<2&&d<i[1])?(c=0,G.v=n,G.n=i[1]):d<l&&(o=r<3||i[0]>n||n>l)&&(i[4]=r,i[5]=n,G.n=l,c=0))}if(o||r>1)return a;throw y=!0,n}return function(o,p,l){if(f>1)throw TypeError("Generator is already running");for(y&&1===p&&d(p,l),c=p,u=l;(t=c<2?e:u)||!y;){i||(c?c<3?(c>1&&(G.n=-1),d(c,u)):G.n=u:G.v=u);try{if(f=2,i){if(c||(o="next"),t=i[o]){if(!(t=t.call(i,u)))throw TypeError("iterator result is not an object");if(!t.done)return t;u=t.value,c<2&&(c=0)}else 1===c&&(t=i.return)&&t.call(i),c<2&&(u=TypeError("The iterator does not provide a '"+o+"' method"),c=1);i=e}else if((t=(y=G.n<0)?u:r.call(n,G))!==a)break}catch(t){i=e,c=1,u=t}finally{f=1}}return{value:t,done:y}}}(r,o,i),!0),u}var a={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}t=Object.getPrototypeOf;var c=[][n]?t(t([][n]())):(_regeneratorDefine2(t={},n,function(){return this}),t),u=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(c);function f(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,GeneratorFunctionPrototype):(e.__proto__=GeneratorFunctionPrototype,_regeneratorDefine2(e,o,"GeneratorFunction")),e.prototype=Object.create(u),e}return GeneratorFunction.prototype=GeneratorFunctionPrototype,_regeneratorDefine2(u,"constructor",GeneratorFunctionPrototype),_regeneratorDefine2(GeneratorFunctionPrototype,"constructor",GeneratorFunction),GeneratorFunction.displayName="GeneratorFunction",_regeneratorDefine2(GeneratorFunctionPrototype,o,"GeneratorFunction"),_regeneratorDefine2(u),_regeneratorDefine2(u,o,"Generator"),_regeneratorDefine2(u,n,function(){return this}),_regeneratorDefine2(u,"toString",function(){return"[object Generator]"}),(_regenerator=function _regenerator(){return{w:i,m:f}})()}function _regeneratorDefine2(e,r,n,t){var i=Object.defineProperty;try{i({},"",{})}catch(e){i=0}_regeneratorDefine2=function _regeneratorDefine(e,r,n,t){function o(r,n){_regeneratorDefine2(e,r,function(e){return this._invoke(r,n,e)})}r?i?i(e,r,{value:n,enumerable:!t,configurable:!t,writable:!t}):e[r]=n:(o("next",0),o("throw",1),o("return",2))},_regeneratorDefine2(e,r,n,t)}function asyncGeneratorStep(n,t,e,r,o,a,c){try{var i=n[a](c),u=i.value}catch(n){return void e(n)}i.done?t(u):Promise.resolve(u).then(r,o)}function _asyncToGenerator(n){return function(){var t=this,e=arguments;return new Promise(function(r,o){var a=n.apply(t,e);function _next(n){asyncGeneratorStep(a,r,o,_next,_throw,"next",n)}function _throw(n){asyncGeneratorStep(a,r,o,_next,_throw,"throw",n)}_next(void 0)})}}function Web_toConsumableArray(r){return Web_arrayWithoutHoles(r)||Web_iterableToArray(r)||Web_unsupportedIterableToArray(r)||Web_nonIterableSpread()}function Web_nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function Web_iterableToArray(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}function Web_arrayWithoutHoles(r){if(Array.isArray(r))return Web_arrayLikeToArray(r)}function _createForOfIteratorHelper(r,e){var t="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(!t){if(Array.isArray(r)||(t=Web_unsupportedIterableToArray(r))||e&&r&&"number"==typeof r.length){t&&(r=t);var _n=0,F=function F(){};return{s:F,n:function n(){return _n>=r.length?{done:!0}:{done:!1,value:r[_n++]}},e:function e(r){throw r},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,u=!1;return{s:function s(){t=t.call(r)},n:function n(){var r=t.next();return a=r.done,r},e:function e(r){u=!0,o=r},f:function f(){try{a||null==t.return||t.return()}finally{if(u)throw o}}}}function Web_unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return Web_arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Web_arrayLikeToArray(r,a):void 0}}function Web_arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}function _initializerDefineProperty(e,i,r,l){r&&Object.defineProperty(e,i,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(l):void 0})}function Web_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function Web_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?Web_ownKeys(Object(t),!0).forEach(function(r){Web_defineProperty(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Web_ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Web_inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Web_setPrototypeOf(t,e)}function Web_setPrototypeOf(t,e){return Web_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},Web_setPrototypeOf(t,e)}function Web_callSuper(t,o,e){return o=Web_getPrototypeOf(o),Web_possibleConstructorReturn(t,Web_isNativeReflectConstruct()?Reflect.construct(o,e||[],Web_getPrototypeOf(t).constructor):o.apply(t,e))}function Web_possibleConstructorReturn(t,e){if(e&&("object"==Web_typeof(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return Web_assertThisInitialized(t)}function Web_assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Web_isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(t){}return(Web_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}function Web_getPrototypeOf(t){return Web_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Web_getPrototypeOf(t)}function Web_defineProperty(e,r,t){return(r=Web_toPropertyKey(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _applyDecoratedDescriptor(i,e,r,n,l){var a={};return Object.keys(n).forEach(function(i){a[i]=n[i]}),a.enumerable=!!a.enumerable,a.configurable=!!a.configurable,("value"in a||a.initializer)&&(a.writable=!0),a=r.slice().reverse().reduce(function(r,n){return n(i,e,r)||r},a),l&&void 0!==a.initializer&&(a.value=a.initializer?a.initializer.call(l):void 0,a.initializer=void 0),void 0===a.initializer?(Object.defineProperty(i,e,a),null):a}function _initializerWarningHelper(r,e){throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform.")}function Web_defineProperties(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,Web_toPropertyKey(o.key),o)}}function Web_createClass(e,r,t){return r&&Web_defineProperties(e.prototype,r),t&&Web_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function Web_toPropertyKey(t){var i=Web_toPrimitive(t,"string");return"symbol"==Web_typeof(i)?i:i+""}function Web_toPrimitive(t,r){if("object"!=Web_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=Web_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}function Web_classCallCheck(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")};// endregion
var log=new Web_clientnode_WEBPACK_IMPORTED_MODULE_0_.Logger({name:"web-component-wrapper.web"});/*
    NOTE: We mock HTMLElement to be able to load this class and derived one
    into node environments.
*/var GenericHTMLElement=typeof HTMLElement==="undefined"?/*#__PURE__*/// eslint-disable-next-line @typescript-eslint/no-extraneous-class
Web_createClass(function HTMLElement(){Web_classCallCheck(this,HTMLElement)}):HTMLElement;/**
 * Generic web component to render a content against instance-specific values.
 * @property applyRootBinding - If determined itself as root declarative event
 * and property bindings will be applied to itself.
 * @property content - Content to render when changes happened.
 * @property determineRootBinding - If checked this component determines if it
 * is a root component (not wrapped by another web-component).
 * @property shadowDOM - Configures if a shadow dom should be used during
 * web-component instantiation. Can hold initialize configuration.
 * @property observedAttributes - Attribute names to observe for changes.
 * @property controllableProperties - A list of controllable property names.
 * @property eventToPropertyMapping - Explicitly defined output events (a
 * mapping of event names to a potential parameter to properties-transformer).
 * @property propertyAliases - A mapping of property names to be treated as
 * equal.
 * @property propertyTypes - Configuration defining how to convert attributes
 * into properties and reflect property changes back to attributes.
 * @property propertiesToReflectAsAttributes - An Item, List, or Mapping of
 * properties to reflect as attributes.
 * @property renderProperties - List of known render properties.
 * @property cloneSlots - Indicates whether to clone slot before to transclude
 * content into them. If a slot should be used multiple times (for example,
 * when it works as a template node.) they should be copied to avoid unexpected
 * mutations.
 * @property doRender - Configures whether this component instance should
 * evaluate its given body content.
 * @property evaluateSlots - Indicates whether to evaluate slot content when
 * before rendering them.
 * @property renderSlots - Indicates whether determined slots should be
 * rendered into root node.
 * @property trimSlots - Ignore empty text nodes while applying slots.
 * @property renderUnsafe - Defines default render behavior.
 * @property _name - Name to access instance-evaluated content or used
 * to derive default component name. This is also useful for logging.
 * @property _propertyAliasIndex - Internal alias index to quickly match
 * properties in both directions.
 * @property _propertiesToReflectAsAttributes - A mapping of property names to
 * set as attributes when they are set/updated. Uses a map to hold order and
 * determine if a property exists in constant runtime.
 * @property renderState - Holds data about currently running render state.
 * @property renderState.promise - Promise resolving when next rendering has
 * been finished.
 * @property renderState.pending - Indicates whether a rendering task is
 * performing.
 * @property renderState.resolve - Callback to trigger when rendering has been
 * finished.
 * @property childComponentInstances - List of direct child components (needed
 * to wait for them to finish dom manipulation).
 * @property batchAttributeUpdates - Indicates whether to directly update dom
 * after each attribute mutation or to wait and batch mutations after current
 * queue has been finished.
 * @property batchPropertyUpdates - Indicates whether to directly update dom
 * after each property mutation or to wait and batch mutations after current
 * queue has been finished.
 * @property batchUpdates - Indicates whether to directly perform a
 * re-rendering after changes on properties have been made.
 * @property batchedAttributeUpdateRunning - A boolean indicator to identify if
 * an attribute update is currently batched.
 * @property batchedPropertyUpdateRunning - A boolean indicator to identify if
 * a property update is currently batched.
 * @property batchedUpdateRunning - Indicates whether a batched render update
 * is currently running.
 * @param connectionRegistered - Indicates whether this component is connected
 * to DOM and could run its connectedCallback.
 * @param pendingAttributeUpdates - Holds pending attribute updates which
 * should be performed when the component is connected to DOM.
 * @property parentInstance - Parent component instance.
 * @property rootInstance - Root component instance.
 * @property scope - Render scope.
 * @property domNodeEventBindings - Holds a mapping from nodes with registered
 * event handlers mapped to their deregistration function.
 * @property domNodeTemplateCache - Caches template compilation results.
 * @property externalProperties - Holds currently evaluated or seen properties.
 * @property ignoreAttributeUpdateObservations - Indicates whether attribute
 * updates should be considered (usually only needed internally).
 * @property internalProperties - Holds currently evaluated properties which
 * are owned by this instance and should always be delegated.
 * @property outputEventNames - Set of determined output event names.
 * @property instance - Wrapped component instance.
 * @property isRoot - Indicates whether their exists another web-derived
 * component up the tree or not.
 * @property root - Hosting dom node.
 * @property runDomConnectionAndRenderingInSameEventQueue - Indicates whether
 * we should render initial dom immediately after the component is connected to
 * dom. Deactivating this allows wrapped components to detect their parents
 * since their parent-connected callback will be called before the children's
 * render method.
 * @property self - Back-reference to this class.
 * @property slots - Grabbed slots that where present in the connecting phase.
 */var Web=(_dec=(0,_decorator_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({type:Web_clientnode_property_types_WEBPACK_IMPORTED_MODULE_1_.boolean,writeAttribute:true}),_class=(_Web=/*#__PURE__*/function(_GenericHTMLElement){// endregion
// region live cycle hooks
/**
     * Initializes host dom content and properties.
     * @returns Nothing.
     */function Web(){var _this;Web_classCallCheck(this,Web);_this=Web_callSuper(this,Web);Web_defineProperty(_this,"renderState",{promise:Promise.resolve(""),pending:false,resolve:Web_clientnode_WEBPACK_IMPORTED_MODULE_0_.NOOP});// Constructor might be executed when accessed via child components.
Web_defineProperty(_this,"childComponentInstances",[]);Web_defineProperty(_this,"batchAttributeUpdates",true);Web_defineProperty(_this,"batchPropertyUpdates",true);Web_defineProperty(_this,"batchUpdates",true);/*
        NOTE: We set these properties to true initially since we want to
        prevent any updates until the component is connected to dom.
    */Web_defineProperty(_this,"batchedAttributeUpdateRunning",true);Web_defineProperty(_this,"batchedPropertyUpdateRunning",true);Web_defineProperty(_this,"batchedUpdateRunning",true);Web_defineProperty(_this,"connectionRegistered",false);Web_defineProperty(_this,"pendingAttributeUpdates",[]);Web_defineProperty(_this,"parentInstance",null);Web_defineProperty(_this,"rootInstance",void 0);Web_defineProperty(_this,"hostDomNode",void 0);Web_defineProperty(_this,"scope",Web_objectSpread({},Web_clientnode_WEBPACK_IMPORTED_MODULE_0_.UTILITY_SCOPE));Web_defineProperty(_this,"domNodeEventBindings",new Map);Web_defineProperty(_this,"domNodeTemplateCache",new Map);Web_defineProperty(_this,"externalProperties",{});Web_defineProperty(_this,"ignoreAttributeUpdateObservations",false);Web_defineProperty(_this,"internalProperties",{});Web_defineProperty(_this,"outputEventNames",new Set);Web_defineProperty(_this,"instance",null);_initializerDefineProperty(_this,"isRoot",_descriptor,_this);Web_defineProperty(_this,"runDomConnectionAndRenderingInSameEventQueue",false);Web_defineProperty(_this,"self",Web);Web_defineProperty(_this,"slots",{});_this.prepareNewRenderingPromise();/*
            NOTE: We cannot use something like "this." e.g. "this.self" to
            determine class properties since instance properties like "self"
            may not set properly yet because this method is called during
            constructing this instance itself.
        */_this.self=_this.constructor;if(!_this.self._propertiesToReflectAsAttributes)_this.self._propertiesToReflectAsAttributes=_this.self.normalizePropertyTypeList(_this.self.propertiesToReflectAsAttributes);_this.generateAliasIndex();// NOTE: Shadow root will be applied when rendering the first time.
_this.hostDomNode=_this;_this.rootInstance=_this;/*
            NOTE: We define getter and setter at the end to avoid shadowing
            existing property names.
        */_this.defineGetterAndSetterInterface();return _this}/**
     * Triggered when ever a given attribute has changed and triggers to update
     * configured dom content.
     * @param name - Attribute name which was updates.
     * @param oldValue - Old attribute value.
     * @param newValue - New updated value.
     */Web_inherits(Web,_GenericHTMLElement);return Web_createClass(Web,[{key:"attributeChangedCallback",value:function attributeChangedCallback(name,oldValue,newValue){if(this.ignoreAttributeUpdateObservations||oldValue===newValue)return;void this.onUpdateAttribute(name,newValue)}/**
     * Updates given attribute representation.
     * @param name - Attribute name which was updates.
     * @param newValue - New updated value.
     * @returns Promise resolving when attribute has been updated.
     */},{key:"onUpdateAttribute",value:function onUpdateAttribute(name,newValue){var _this2=this;var promise=new Promise(function(resolve){return _this2.pendingAttributeUpdates.push(function(){_this2.evaluateStringOrNullAndSetAsProperty(name,newValue);if(_this2.batchAttributeUpdates){if(!(_this2.batchedAttributeUpdateRunning||_this2.batchedUpdateRunning)){_this2.batchedAttributeUpdateRunning=true;_this2.batchedUpdateRunning=true;void (0,Web_clientnode_WEBPACK_IMPORTED_MODULE_0_.timeout)(function(){_this2.batchedAttributeUpdateRunning=false;_this2.batchedUpdateRunning=false;void _this2.render("attributeChanged")})}}else void _this2.render("attributeChanged");resolve()})});if(this.connectionRegistered)while(this.pendingAttributeUpdates.length)this.pendingAttributeUpdates.shift()();return promise}/**
     * Triggered when this component is mounted into the document.
     * Attaches event handler, grabs given slots, reflects external properties,
     * and enqueues first rendering.
     */},{key:"connectedCallback",value:function connectedCallback(){var _this3=this;// NOTE: Hack to support IE 11 here.
try{this.isConnected=true}catch(_unused){// Ignore error.
}this.connectionRegistered=true;// NOTE: Can be overwritten during optional root determining.
this.parentInstance=this;this.rootInstance=this;this.attachEventHandler();if(this.self.determineRootBinding){this.determineRootBinding();if(this.parentInstance!==this&&this.parentInstance.childComponentInstances)this.parentInstance.childComponentInstances.push(this)}if(this.self.applyRootBinding&&this.isRoot){this.determineRenderScope();this.applyBinding(this,this.scope)}while(this.pendingAttributeUpdates.length)this.pendingAttributeUpdates.shift()();this.batchedAttributeUpdateRunning=false;this.batchedPropertyUpdateRunning=false;this.batchedUpdateRunning=false;this.grabGivenSlots();this.reflectExternalProperties(this.externalProperties);if(this.runDomConnectionAndRenderingInSameEventQueue)void this.render("connected");else void (0,Web_clientnode_WEBPACK_IMPORTED_MODULE_0_.timeout)(function(){void _this3.render("connected")})}/**
     * Triggered when this component is unmounted from the document. Event
     * handlers will be removed and state updated accordingly.
     */},{key:"disconnectedCallback",value:function disconnectedCallback(){this.unRender("disconnected");this.unregisterConnectionState()}// endregion
// region getter/setter
/**
     * Registers needed getter and setter to get notified about changes and
     * reflect them.
     */},{key:"defineGetterAndSetterInterface",value:function defineGetterAndSetterInterface(){var _this4=this;var allPropertyNames=(0,Web_clientnode_WEBPACK_IMPORTED_MODULE_0_.unique)(Object.keys(this.self.propertyTypes).concat(this.self._propertyAliasIndex?Object.keys(this.self._propertyAliasIndex):[]));var _iterator=_createForOfIteratorHelper(allPropertyNames),_step;try{var _loop=function _loop(){var propertyName=_step.value;// If there already exists a local value, use them.
if(Object.prototype.hasOwnProperty.call(_this4,propertyName))_this4.setPropertyValue(/* eslint-disable @typescript-eslint/unbound-method */propertyName,_this4[propertyName]/* eslint-enable @typescript-eslint/unbound-method */);Object.defineProperty(_this4,propertyName,{configurable:true,get:function get(){return _this4.getPropertyValue(propertyName)},set:function set(value){_this4.setPropertyValue(propertyName,value);_this4.triggerPropertySpecificRendering(propertyName,value)}})};for(_iterator.s();!(_step=_iterator.n()).done;){_loop()}}catch(err){_iterator.e(err)}finally{_iterator.f()}}/**
     * Creates an index to match alias source and target against each other on
     * constant runtime.
     * @param name - Name to search an alternate name for.
     * @returns Found alias or "null".
     */},{key:"getPropertyAlias",value:function getPropertyAlias(name){if(this.self._propertyAliasIndex&&Object.prototype.hasOwnProperty.call(this.self._propertyAliasIndex,name))return this.self._propertyAliasIndex[name];return null}/**
     * Generic property getter. Forwards properties from the "properties"
     * field.
     * @param name - Property name to retrieve.
     * @returns Retrieved property value.
     */},{key:"getPropertyValue",value:function getPropertyValue(name){var _this$instance,_name,_this$instance2;var result=(_this$instance=this.instance)!==null&&_this$instance!==void 0&&(_this$instance=_this$instance.current)!==null&&_this$instance!==void 0&&_this$instance.properties&&(// NOTE: Base properties should not be shadowed.
Object.prototype.hasOwnProperty.call(!Web.propertyTypes,name)||Object.prototype.hasOwnProperty.call(this.instance.current.properties,name))?this.instance.current.properties[name]:(_name=this.internalProperties[name])!==null&&_name!==void 0?_name:this.externalProperties[name];if((_this$instance2=this.instance)!==null&&_this$instance2!==void 0&&(_this$instance2=_this$instance2.current)!==null&&_this$instance2!==void 0&&_this$instance2.state&&Object.prototype.hasOwnProperty.call(this.instance.current.state,name))return this.instance.current.state[name];return result}/**
     * External property setter. Respects configured aliases.
     * @param name - Property name to write.
     * @param value - New value to write.
     */},{key:"setExternalPropertyValue",value:function setExternalPropertyValue(name,value){this.externalProperties[name]=value;var alias=this.getPropertyAlias(name);if(alias)this.externalProperties[alias]=value}/**
     * Internal property setter. Respects configured aliases.
     * @param name - Property name to write.
     * @param value - New value to write.
     */},{key:"setInternalPropertyValue",value:function setInternalPropertyValue(name,value){this.internalProperties[name]=value;var alias=this.getPropertyAlias(name);if(alias)this.internalProperties[alias]=value}/**
     * Generic property setter. Forwards field writes into internal and
     * external property representations.
     * @param name - Property name to write.
     * @param value - New value to write.
     */},{key:"setPropertyValue",value:function setPropertyValue(name,value){this.reflectProperties(Web_defineProperty({},name,value));this.setInternalPropertyValue(name,value)}/**
     * Triggers a new rendering cycle and respects property-specific state
     * connection.
     * @param name - Property name to write.
     * @param value - New value to write.
     */},{key:"triggerPropertySpecificRendering",value:function triggerPropertySpecificRendering(name,value){var _this5=this;if(this.batchPropertyUpdates){if(!(this.batchedPropertyUpdateRunning||this.batchedUpdateRunning)){this.batchedPropertyUpdateRunning=true;this.batchedUpdateRunning=true;void (0,Web_clientnode_WEBPACK_IMPORTED_MODULE_0_.timeout)(function(){if(value!==undefined&&_this5.isStateProperty(name)){void _this5.render("preStatePropertyChanged");void (0,Web_clientnode_WEBPACK_IMPORTED_MODULE_0_.timeout)(function(){_this5.setInternalPropertyValue(name,undefined);_this5.batchedPropertyUpdateRunning=false;_this5.batchedUpdateRunning=false;void _this5.render("postStatePropertyChanged");_this5.triggerOutputEvents()})}else{_this5.batchedPropertyUpdateRunning=false;_this5.batchedUpdateRunning=false;void _this5.render("propertyChanged");_this5.triggerOutputEvents()}})}}else{var isStateProperty=this.isStateProperty(name);void this.render(isStateProperty?"preStatePropertyChanged":"propertyChanged");if(value!==undefined&&isStateProperty){this.setInternalPropertyValue(name,undefined);void this.render("postStatePropertyChanged")}this.triggerOutputEvents()}}// endregion
// region helper
/// region utility
},{key:"unregisterConnectionState",value:function unregisterConnectionState(){// NOTE: Hack to support IE 11 here.
try{this.isConnected=false}catch(_unused2){// Ignore error.
}this.connectionRegistered=false;this.slots={}}},{key:"unregisterDomNodeEventBindings",value:function unregisterDomNodeEventBindings(){var _iterator2=_createForOfIteratorHelper(this.domNodeEventBindings.values()),_step2;try{for(_iterator2.s();!(_step2=_iterator2.n()).done;){var map=_step2.value;var _iterator3=_createForOfIteratorHelper(map.values()),_step3;try{for(_iterator3.s();!(_step3=_iterator3.n()).done;){var deregister=_step3.value;deregister()}}catch(err){_iterator3.e(err)}finally{_iterator3.f()}}}catch(err){_iterator2.e(err)}finally{_iterator2.f()}}//// region dom nodes
/**
     * Binds properties and event handler to the given dom node.
     * @param domNode - Node to start traversing from.
     * @param scope - Scope to render property value again.
     */},{key:"applyBinding",value:function applyBinding(domNode,scope){var _this6=this;if(!domNode.getAttributeNames)return;var _iterator4=_createForOfIteratorHelper(domNode.getAttributeNames()),_step4;try{var _loop2=function _loop2(){var attributeName=_step4.value;var name;if(attributeName.startsWith("data-bind-"))name=attributeName.substring("data-bind-".length);else if(attributeName.startsWith("bind-"))name=attributeName.substring("bind-".length);if(name){var value=domNode.getAttribute(attributeName);if(value===null)return 0;// continue
if(name.startsWith("attribute-")||name.startsWith("property-")){var evaluated=(0,Web_clientnode_WEBPACK_IMPORTED_MODULE_0_.evaluate)(value,{scope:scope,binding:domNode});if(evaluated.error){log.warn("Error occurred during processing given","attribute binding \"".concat(attributeName,"\" on node:"),domNode,evaluated.error);return 0;// continue
}if(name.startsWith("attribute-"))domNode.setAttribute(name.substring("attribute-".length),evaluated.result);else/*
                            NOTE: Cast to "textContent" to have a writable
                            property here.
                        */domNode[(0,Web_clientnode_WEBPACK_IMPORTED_MODULE_0_.delimitedToCamelCase)(name.substring("property-".length))]=evaluated.result}else if(name.startsWith("on-")){name=(0,Web_clientnode_WEBPACK_IMPORTED_MODULE_0_.delimitedToCamelCase)(name.substring("on-".length));scope=Web_objectSpread({log:log,event:undefined,parameters:undefined},scope);/*
                        NOTE: We pre-compile event listener since they should
                        usually be called more often than binded.
                    */var compilation=(0,Web_clientnode_WEBPACK_IMPORTED_MODULE_0_.compile)(value,{scope:scope,execute:true,binding:domNode});if(compilation.error)log.warn("Error occurred during compiling given event","binding \"".concat(attributeName,"\" on node:"),domNode,compilation.error);else _this6.addSecureEventListener(domNode,name,function(){for(var _len=arguments.length,parameters=new Array(_len),_key=0;_key<_len;_key++){parameters[_key]=arguments[_key]}scope.event=parameters[0];scope.parameters=parameters;try{compilation.templateFunction.apply(compilation,Web_toConsumableArray(compilation.originalScopeNames.map(function(name){return scope[name]})))}catch(error){log.warn("Error occurred during processing","given event binding","\"".concat(attributeName,"\" on node:"),domNode,"Given expression \"".concat(value,"\" could"),"not be evaluated with given scope","names \""+compilation.scopeNames.join("\", \"")+"\": ".concat((0,Web_clientnode_WEBPACK_IMPORTED_MODULE_0_.represent)(error)))}})}}},_ret;for(_iterator4.s();!(_step4=_iterator4.n()).done;){_ret=_loop2();if(_ret===0)continue}}catch(err){_iterator4.e(err)}finally{_iterator4.f()}}/**
     * Binds properties and event handler to given, sibling, and nested nodes.
     * @param domNode - Node to start traversing from.
     * @param scope - Scope to render property value again.
     * @param renderSlots - Indicates whether to render nested elements of
     * slots (determined by an existing corresponding attribute).
     */},{key:"applyBindings",value:function applyBindings(domNode,scope,renderSlots){if(renderSlots===void 0){renderSlots=true}while(domNode){var _attributes;if((_attributes=domNode.attributes)!==null&&_attributes!==void 0&&_attributes.length&&(renderSlots||!domNode.getAttribute("slot")))this.applyBinding(domNode,scope);/*
                NOTE: Slots of nested custom components (recognized by their
                dash in name) should be rendered by their own.
            */if(!domNode.nodeName.toLowerCase().includes("-"))this.applyBindings(domNode.firstChild,scope);domNode=domNode.nextSibling}}/**
     * Compiles given node content and their children. Provides a corresponding
     * map of compiled template functions connected to their (sub) nodes and
     * expected scope names.
     * @param domNode - Node to compile.
     * @param scope - Scope to extract names from.
     * @param options - Additional compile options.
     * @param options.filter - Callback to exclude some node from being
     * compiled.
     * @param options.ignoreComponents - Indicates if component properties
     * should be traversed or not.
     * @param options.ignoreNestedComponents - Indicates if nested components
     * should be traversed or not.
     * @param options.unsafe - Indicates if full HTML generation should be
     * allowed.
     * @returns Map of compiled templates.
     */},{key:"compileDomNodeTemplate",value:function compileDomNodeTemplate(domNode,scope,options){if(scope===void 0){scope=[]}if(options===void 0){options={}}options=Web_objectSpread({ignoreComponents:true,ignoreNestedComponents:true,unsafe:this.self.renderUnsafe},options);var nodeName=domNode.nodeName.toLowerCase();/*
            NOTE: Slots of nested custom components (recognized by their dash
            in name) should be rendered / controlled by them on their own.
        */if(options.ignoreComponents&&nodeName.includes("-"))return null;if(options.unsafe){var _template=domNode.innerHTML;if(!_template&&domNode.template)_template=domNode.template;if(this.self.hasCode(_template)){var _result=(0,Web_clientnode_WEBPACK_IMPORTED_MODULE_0_.compile)("`".concat(_template,"`"),{scope:scope});return{domNode:domNode,children:[],error:_result.error,scopeNames:_result.scopeNames,template:_template,templateFunction:_result.templateFunction}}return null}var template=null;if(nodeName==="#text"){var content=domNode.textContent;if(content&&this.self.hasCode(content))template=content.replace(/&nbsp;/g," ").trim()}var children=[];var result={children:children,domNode:domNode};if(template){var compilationResult=(0,Web_clientnode_WEBPACK_IMPORTED_MODULE_0_.compile)("`".concat(template,"`"),{scope:scope});result.error=compilationResult.error;result.scopeNames=compilationResult.scopeNames;result.template=template;result.templateFunction=compilationResult.templateFunction}// Compile content of each nested node.
var currentDomNode=domNode.firstChild;while(currentDomNode){if(!options.filter||options.filter(currentDomNode)){var _result2=this.compileDomNodeTemplate(currentDomNode,scope,Web_objectSpread(Web_objectSpread({},options),{},{ignoreComponents:options.ignoreNestedComponents}));if(_result2)children.push(_result2)}currentDomNode=currentDomNode.nextSibling}return result}/**
     * @param options - Evaluation options.
     * @param scope - Scope to evaluate against.
     * @returns Evaluated string result or null.
     */},{key:"evaluateCompiledDomNodeTemplate",value:function evaluateCompiledDomNodeTemplate(options,scope){var domNode=options.domNode,error=options.error,templateFunction=options.templateFunction,scopeNames=options.scopeNames;if(!(templateFunction&&scopeNames))return null;if(error){log.warn("Error occurred during compiling node content:",error);return null}var output=null;try{output=templateFunction.apply(void 0,Web_toConsumableArray(scopeNames.map(function(name){return scope[name]})))}catch(error){log.warn("Error occurred when \"".concat(this.self._name,"\" is  running"),"\"".concat(String(templateFunction),"\": with bound"),"names \"".concat(scopeNames.join("\", \""),"\":"),"\"".concat(error,"\". Rendering node:"),domNode)}return output}/**
     * Compiles and evaluates given node content and their children. Replaces
     * each node content with their evaluated representation.
     * @param domNode - Node to evaluate.
     * @param scope - Scope to render against.
     * @param options - Compile options.
     * @param options.applyBindings - Indicates whether to apply bindings to
     * given dom nodes.
     * @param options.filter - Callback to exclude some node from being
     * compiled.
     * @param options.ignoreComponents - Indicates if component properties
     * should be traversed or not.
     * @param options.ignoreNestedComponents - Indicates if nested components
     * should be traversed or not.
     * @param options.domNodeTemplateCache - Yet compiled dom nodes to just
     * reference instead of recompiling.
     * @param options.unsafe - Indicates if full HTML generation should be
     * allowed.
     */},{key:"evaluateDomNodeTemplate",value:function evaluateDomNodeTemplate(domNode,scope,options){var _this7=this;if(scope===void 0){scope={}}if(options===void 0){options={}}options=Web_objectSpread({domNodeTemplateCache:this.domNodeTemplateCache,ignoreComponents:true,ignoreNestedComponents:true,unsafe:this.self.renderUnsafe},options);var domNodeTemplateCache=options.domNodeTemplateCache;if(!domNodeTemplateCache.has(domNode)){var compilerOptions={filter:options.filter,ignoreComponents:options.ignoreComponents,ignoreNestedComponents:options.ignoreNestedComponents,unsafe:options.unsafe};var compiledDomNode=this.compileDomNodeTemplate(domNode,scope,compilerOptions);if(compiledDomNode)domNodeTemplateCache.set(domNode,compiledDomNode)}if(domNodeTemplateCache.has(domNode)){var _compiledDomNode=domNodeTemplateCache.get(domNode);var output=this.evaluateCompiledDomNodeTemplate(_compiledDomNode,scope);if(output!==null)if(options.unsafe&&domNode.innerHTML)domNode.innerHTML=output;else domNode.textContent=output;if(_compiledDomNode.children.length){var _evaluateChildDomNode=function evaluateChildDomNode(children){var _iterator5=_createForOfIteratorHelper(children),_step5;try{for(_iterator5.s();!(_step5=_iterator5.n()).done;){var childCompiledDomNode=_step5.value;var _output=_this7.evaluateCompiledDomNodeTemplate(childCompiledDomNode,scope);if(_output!==null)childCompiledDomNode.domNode.textContent=_output;if(childCompiledDomNode.children.length)_evaluateChildDomNode(childCompiledDomNode.children)}}catch(err){_iterator5.e(err)}finally{_iterator5.f()}};_evaluateChildDomNode(_compiledDomNode.children)}}if(options.applyBindings)this.applyBindings(domNode,scope)}/**
     * Adds an event listener to the given dom node so that it will be
     * deregistered when the component instance is destroyed.
     * @param domNode - Node to assign event handler to.
     * @param name - Event name.
     * @param handler - Callback to trigger when given event occurs.
     * @param options - Add event listener options.
     * @param removeOptions - Remove event listener options.
     * @returns Deregister function.
     */},{key:"addSecureEventListener",value:function addSecureEventListener(domNode,name,handler,options,removeOptions){var _this8=this;if(!this.domNodeEventBindings.has(domNode))this.domNodeEventBindings.set(// eslint-disable-next-line func-call-spacing
domNode,new Map);var eventMap=this.domNodeEventBindings.get(domNode);var oldHandler=eventMap.get(name);if(oldHandler&&oldHandler!==handler)oldHandler();var deregister=function deregister(){domNode.removeEventListener(name,handler,removeOptions);eventMap.delete(name);if(eventMap.size===0)_this8.domNodeEventBindings.delete(domNode)};eventMap.set(name,deregister);domNode.addEventListener(name,handler,options);return deregister}//// endregion
/**
     * Determines initial root which initializes rendering digest.
     */},{key:"determineRootBinding",value:function determineRootBinding(){/*
            If this component is the root component, we have to trigger
            nested event handler by our own in global context since there is no
            parent doing that for us.
        */var currentElement=this.parentNode;while(currentElement){var isComponent=currentElement instanceof Web||currentElement.nodeName.includes("-")&&currentElement.nodeName!=="#document-fragment";var isInShadowDOM=currentElement.parentNode===null&&/* eslint-disable @typescript-eslint/no-base-to-string */currentElement.toString()==="[object ShadowRoot]";/* eslint-enable @typescript-eslint/no-base-to-string */if(isComponent){// Check whether we found the first parent component.
if(this.rootInstance===this){this.parentInstance=currentElement;/*
                        NOTE: There is at least one parent, so we can set
                        "isRoot" to "false".
                    */this.setPropertyValue("isRoot",false)}this.rootInstance=currentElement}else if(isInShadowDOM)/*
                    NOTE: Assume none root if determined a wrapped closed
                    shadow DOM.
                */this.setPropertyValue("isRoot",false);currentElement=currentElement.parentNode}}/**
     * Checks if given content hast code (to compile and render).
     * @param content - Potential string with code inside.
     * @returns A boolean indicating whether given content has code.
     */},{key:"attachEventHandler",value:/// endregion
/// region events
/**
     * Attaches event handler to keep in sync with nested components properties
     * states.
     */function attachEventHandler(){if(this.self.eventToPropertyMapping===null)return;/*
            NOTE: We only reflect properties by implicit determined events if
            their where no explicitly defined.
        */var somethingDefined=this.attachExplicitDefinedOutputEventHandler();this.attachImplicitDefinedOutputEventHandler(!somethingDefined)}/**
     * Attach explicitly defined event handler to synchronize internal and
     * external property states.
     * @returns Returns "true" if there are some defined and "false" otherwise.
     */},{key:"attachExplicitDefinedOutputEventHandler",value:function attachExplicitDefinedOutputEventHandler(){var _this9=this;if(!this.self.eventToPropertyMapping)return false;// Grab all existing output to property definitions
var result=false;var _loop3=function _loop3(){var name=_Object$keys[_i];if(!Object.prototype.hasOwnProperty.call(_this9.internalProperties,name)){result=true;_this9.outputEventNames.add(name);_this9.setInternalPropertyValue(name,/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(){var _len2,parameters,_key2,result,_args=arguments;return _regenerator().w(function(_context){while(1)switch(_context.n){case 0:for(_len2=_args.length,parameters=new Array(_len2),_key2=0;_key2<_len2;_key2++){parameters[_key2]=_args[_key2]}_context.n=1;return _this9.reflectEventToProperties(name,parameters);case 1:result=_context.v;if(result)parameters[0]=result;_this9.forwardEvent(name,parameters);case 2:return _context.a(2)}},_callee)})))}};for(var _i=0,_Object$keys=Object.keys(this.self.eventToPropertyMapping);_i<_Object$keys.length;_i++){_loop3()}return result}/**
     * Attach implicitly defined event handler to synchronize internal and
     * external property states.
     * @param reflectProperties - Indicates whether implicitly determined
     * properties should be reflected.
     */},{key:"attachImplicitDefinedOutputEventHandler",value:function attachImplicitDefinedOutputEventHandler(reflectProperties){var _this0=this;if(reflectProperties===void 0){reflectProperties=true}var _loop4=function _loop4(){var _Object$entries$_i=_slicedToArray(_Object$entries[_i2],2),name=_Object$entries$_i[0],type=_Object$entries$_i[1];if(!Object.prototype.hasOwnProperty.call(_this0.internalProperties,name)&&[Web_clientnode_property_types_WEBPACK_IMPORTED_MODULE_1_.func,"function"].includes(type)&&!_this0.self.renderProperties.includes(name)){_this0.outputEventNames.add(name);_this0.setInternalPropertyValue(name,function(){for(var _len3=arguments.length,parameters=new Array(_len3),_key3=0;_key3<_len3;_key3++){parameters[_key3]=arguments[_key3]}if(reflectProperties)void _this0.reflectEventToProperties(name,parameters);_this0.forwardEvent(name,parameters)})}};// Determine all event handlers to inject
for(var _i2=0,_Object$entries=Object.entries(this.self.propertyTypes);_i2<_Object$entries.length;_i2++){_loop4()}}/**
     * Triggers all identified events to communicate internal property / state
     * changes.
     */},{key:"triggerOutputEvents",value:function triggerOutputEvents(){var _iterator6=_createForOfIteratorHelper(this.outputEventNames),_step6;try{for(_iterator6.s();!(_step6=_iterator6.n()).done;){var name=_step6.value;this.forwardEvent(name,[this.externalProperties])}}catch(err){_iterator6.e(err)}finally{_iterator6.f()}}/**
     * Forwards given event as the native web event.
     * @param name - Event name.
     * @param parameters - Event parameters.
     * @returns False if event is cancelable, and at least one of the event
     * handlers which received event called "Event.preventDefault()",
     * otherwise true will be returned.
     */},{key:"forwardEvent",value:function forwardEvent(name,parameters){if(name.length>"onX".length&&name.startsWith("on"))name=(0,Web_clientnode_WEBPACK_IMPORTED_MODULE_0_.lowerCase)(name.substring(2));return this.dispatchEvent(new CustomEvent(name,{detail:{parameters:parameters}}))}/// endregion
/// region slots
/**
     * Renders component given slot contents into the given dom node. If
     * expected slots are not given but a fallback is specified, they will be
     * loaded into internal slot mapping.
     * @param targetDomNode - Target dom node to render slots into.
     * @param scope - Environment to render slots again if specified.
     */},{key:"applySlots",value:function applySlots(targetDomNode,scope){var _this1=this;for(var _i3=0,_Array$from=Array.from(targetDomNode.querySelectorAll("slot"));_i3<_Array$from.length;_i3++){var domNode=_Array$from[_i3];var name=domNode.getAttribute("name");if(name===null||name==="default"){if(this.slots.default){if(this.self.renderSlots){if(this.self.evaluateSlots){var _iterator7=_createForOfIteratorHelper(this.slots.default),_step7;try{for(_iterator7.s();!(_step7=_iterator7.n()).done;){var _domNode=_step7.value;this.evaluateDomNodeTemplate(_domNode,scope)}}catch(err){_iterator7.e(err)}finally{_iterator7.f()}};(0,Web_clientnode_WEBPACK_IMPORTED_MODULE_0_.replace)(domNode,this.slots.default,Web.trimSlots)}}else this.slots.default=(0,Web_clientnode_WEBPACK_IMPORTED_MODULE_0_.unwrap)(domNode).map(function(domNode){return _this1.grabSlotContent(domNode)});}else if(this.slots[name]){if(this.self.renderSlots){if(this.self.evaluateSlots)this.evaluateDomNodeTemplate(this.slots[name],scope);(0,Web_clientnode_WEBPACK_IMPORTED_MODULE_0_.replace)(domNode,this.slots[name],Web.trimSlots)}}else this.slots[name]=this.grabSlotContent((0,Web_clientnode_WEBPACK_IMPORTED_MODULE_0_.unwrap)(domNode).filter(function(domNode){return domNode.nodeName.toLowerCase()!=="#text"})[0])}}/**
     * Determines slot content from the given node.
     * @param slot - Node to grab slot content from.
     * @returns Determined slot.
     */},{key:"grabSlotContent",value:function grabSlotContent(slot){var _element$firstElement;/*
            If real (template) code is wrapped in a "textarea" tag, unwrap it
            now. This extra wrapping can be used to avoid first dom rendering
            before template code has been evaluated.
        */var element=Web_clientnode_property_types_WEBPACK_IMPORTED_MODULE_1_.node.firstElementChild?slot:null;if(element&&((_element$firstElement=element.firstElementChild)===null||_element$firstElement===void 0?void 0:_element$firstElement.nodeName.toLowerCase())==="textarea"&&(!element.firstElementChild.hasAttribute("data-no-template")||element.firstElementChild.getAttribute("data-no-template")==="false")){var content=element.firstElementChild.value;/*
                NOTE: These kinds of slots are always used as a template and
                should therefore be copied in every case.
                NOTE: A flat copy should suffice since we will replace nested
                content.
                NOTE: Remove template content in copied node to avoid rendering
                them before being evaluated. We cannot remove template code
                from the source node since this would make it impossible to
                re-instantiate this slot during whole component
                re-instantiation.
            */element.classList.remove("web-component-template");var newSlot=element.cloneNode();element.classList.add("web-component-template");newSlot.innerHTML="";newSlot.template=content;return newSlot}return this.self.cloneSlots?slot.cloneNode(true):slot}/**
     * Saves given slots.
     */},{key:"grabGivenSlots",value:function grabGivenSlots(){var _this10=this;this.slots={};for(var _i4=0,_Array$from2=Array.from(this.querySelectorAll("[slot]"));_i4<_Array$from2.length;_i4++){var _slot$getAttribute;var slot=_Array$from2[_i4];// NOTE: This is how we avoid grabbing slots from nested components.
var currentElement=slot.parentNode;var skip=true;while(currentElement){if(currentElement.nodeName.includes("-")){if(currentElement===this)skip=false;break}currentElement=currentElement.parentNode}if(skip)continue;var slotValue=(_slot$getAttribute=slot.getAttribute("slot"))===null||_slot$getAttribute===void 0?void 0:_slot$getAttribute.trim();this.slots[slotValue!==null&&slotValue!==void 0?slotValue:slot.nodeName.toLowerCase()]=this.grabSlotContent(slot)}if(this.slots.default)this.slots.default=[].concat(this.slots.default);else if(this.childNodes.length>0)this.slots.default=Array.from(this.childNodes).map(function(domNode){return _this10.grabSlotContent(domNode)});else this.slots.default=[]}/// endregion
/// region properties
/**
     * Determines if a given property name exists in wrapped component state.
     * @param name - Property name to check if exists in state.
     * @returns Boolean result.
     */},{key:"isStateProperty",value:function isStateProperty(name){var _this$instance3;return Boolean(((_this$instance3=this.instance)===null||_this$instance3===void 0||(_this$instance3=_this$instance3.current)===null||_this$instance3===void 0?void 0:_this$instance3.state)&&(Object.prototype.hasOwnProperty.call(this.instance.current.state,name)||this.instance.current.state.modelState&&Object.prototype.hasOwnProperty.call(this.instance.current.state.modelState,name)))}/**
     * Generates an alias to name and the other way around mapping if not
     * exists.
     */},{key:"generateAliasIndex",value:function generateAliasIndex(){if(!this.self._propertyAliasIndex){this.self._propertyAliasIndex=Web_objectSpread({},this.self.propertyAliases);// Align alias mapping for better performance while mapping them.
for(var _i5=0,_Object$entries2=Object.entries(this.self._propertyAliasIndex);_i5<_Object$entries2.length;_i5++){var _Object$entries2$_i=_slicedToArray(_Object$entries2[_i5],2),name=_Object$entries2$_i[0],value=_Object$entries2$_i[1];if(!Object.prototype.hasOwnProperty.call(this.self._propertyAliasIndex,value))this.self._propertyAliasIndex[value]=name}}}/**
     * Reflects wrapped component state back to web-component's attributes.
     * @param properties - Properties to update in reflected attribute state.
     */},{key:"reflectExternalProperties",value:function reflectExternalProperties(properties){/*
            NOTE: We can avoid an additional attribute parsing for
            reflections.
        */this.ignoreAttributeUpdateObservations=true;for(var _i6=0,_Object$entries3=Object.entries(properties);_i6<_Object$entries3.length;_i6++){var _this$self$_propertie;var _Object$entries3$_i=_slicedToArray(_Object$entries3[_i6],2),name=_Object$entries3$_i[0],value=_Object$entries3$_i[1];this.setExternalPropertyValue(name,value);if(!this.isConnected)continue;var attributeName=(0,Web_clientnode_WEBPACK_IMPORTED_MODULE_0_.camelCaseToDelimited)(name);if((_this$self$_propertie=this.self._propertiesToReflectAsAttributes)!==null&&_this$self$_propertie!==void 0&&_this$self$_propertie.has(name))switch(this.self._propertiesToReflectAsAttributes.get(name)){case Web_clientnode_property_types_WEBPACK_IMPORTED_MODULE_1_.boolean:case"boolean":if(value){if(this.getAttribute(attributeName)!=="")this.setAttribute(attributeName,"")}else if(this.hasAttribute(attributeName))this.removeAttribute(attributeName);break;case Web_clientnode_property_types_WEBPACK_IMPORTED_MODULE_1_.func:case"function":break;case"json":if(value){var representation=JSON.stringify(value);if(representation&&this.getAttribute(attributeName)!==representation){this.setAttribute(attributeName,representation);break}}if(this.hasAttribute(attributeName))this.removeAttribute(attributeName);break;case Web_clientnode_property_types_WEBPACK_IMPORTED_MODULE_1_.number:case"number":if(typeof value==="number"&&!isNaN(value)){var valueAsString=String(value);if(this.getAttribute(attributeName)!==valueAsString)this.setAttribute(attributeName,valueAsString)}else if(this.hasAttribute(attributeName))this.removeAttribute(attributeName);break;case Web_clientnode_property_types_WEBPACK_IMPORTED_MODULE_1_.string:case"string":if(value){if(this.getAttribute(attributeName)!==value)this.setAttribute(attributeName,value)}else if(this.hasAttribute(attributeName))this.removeAttribute(attributeName);break;case Web_clientnode_property_types_WEBPACK_IMPORTED_MODULE_1_.any:case Web_clientnode_property_types_WEBPACK_IMPORTED_MODULE_1_.array:case Web_clientnode_property_types_WEBPACK_IMPORTED_MODULE_1_.arrayOf:case Web_clientnode_property_types_WEBPACK_IMPORTED_MODULE_1_.element:case Web_clientnode_property_types_WEBPACK_IMPORTED_MODULE_1_.elementType:case Web_clientnode_property_types_WEBPACK_IMPORTED_MODULE_1_.instanceOf:case Web_clientnode_property_types_WEBPACK_IMPORTED_MODULE_1_.node:case Web_clientnode_property_types_WEBPACK_IMPORTED_MODULE_1_.object:case"object":case Web_clientnode_property_types_WEBPACK_IMPORTED_MODULE_1_.objectOf:case Web_clientnode_property_types_WEBPACK_IMPORTED_MODULE_1_.shape:case Web_clientnode_property_types_WEBPACK_IMPORTED_MODULE_1_.exact:case Web_clientnode_property_types_WEBPACK_IMPORTED_MODULE_1_.symbol:default:if(value){var _representation=(0,Web_clientnode_WEBPACK_IMPORTED_MODULE_0_.represent)(value);if(_representation&&this.getAttribute(attributeName)!==_representation){this.setAttribute(attributeName,_representation);break}}if(this.hasAttribute(attributeName))this.removeAttribute(attributeName);break}}this.ignoreAttributeUpdateObservations=false}/**
     * Reflects wrapped component state back to web-component's attributes and
     * properties.
     * @param properties - Properties to update in reflected property state.
     */},{key:"reflectProperties",value:function reflectProperties(properties){var _this$instance4,_this$internalPropert;this.reflectExternalProperties(properties);/*
            NOTE: Do not reflect properties which are hold in state. These
            values are only set once when they are explicitly set
            (see "setPropertyValue").
        */if((_this$instance4=this.instance)!==null&&_this$instance4!==void 0&&(_this$instance4=_this$instance4.current)!==null&&_this$instance4!==void 0&&_this$instance4.state&&Web_typeof(this.instance.current.state)==="object"){var _iterator8=_createForOfIteratorHelper(Object.keys(this.instance.current.state).concat(this.instance.current.state.modelState?Object.keys(this.instance.current.state.modelState):[])),_step8;try{for(_iterator8.s();!(_step8=_iterator8.n()).done;){var name=_step8.value;if(Object.prototype.hasOwnProperty.call(this.internalProperties,name))/*
                        We want to avoid fully deleting this property to know
                        which properties exist in the underlying instance.
                    */this.setInternalPropertyValue(name,undefined)}}catch(err){_iterator8.e(err)}finally{_iterator8.f()}}if((_this$internalPropert=this.internalProperties.model)!==null&&_this$internalPropert!==void 0&&_this$internalPropert.state){delete this.internalProperties.model.state;this.setInternalPropertyValue("model",this.internalProperties.model)}var _iterator9=_createForOfIteratorHelper(this.self.controllableProperties),_step9;try{for(_iterator9.s();!(_step9=_iterator9.n()).done;){var _name2=_step9.value;if(Object.prototype.hasOwnProperty.call(properties,_name2))this.setInternalPropertyValue(_name2,properties[_name2])}}catch(err){_iterator9.e(err)}finally{_iterator9.f()}}/**
     * Reflect the given event handler call with the given parameter back to
     * current properties state.
     * @param name - Event name.
     * @param parameters - List of parameter to given event handler call.
     * @returns Mapped properties or null if nothing could be mapped.
     */},{key:"reflectEventToProperties",value:(function(){var _reflectEventToProperties=_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(name,parameters){var oldBatchUpdatesConfiguration,result,handled,_this$self$eventToPro,wrappedMapping,mapping,_newProperties$detail,newProperties,_i7,_Object$keys2,_this$getPropertyAlia,propertyName,_iterator0,_step0,_name3,currentValue,_t;return _regenerator().w(function(_context2){while(1)switch(_context2.n){case 0:/*
            NOTE: We enforce to update component state immediately after an
            event occurs since batching usually does not make sense here. An
            event runs within its own context.
            On the other hand, it can be necessary to immediately reflect a
            property change to the component internal state to avoid
            contradicting internal render cycles.
        */oldBatchUpdatesConfiguration=this.batchUpdates;this.batchUpdates=false;result=null;handled=false;// region check if there exists an explicit mapper
if(!(this.self.eventToPropertyMapping&&Object.prototype.hasOwnProperty.call(this.self.eventToPropertyMapping,name)&&(0,Web_clientnode_WEBPACK_IMPORTED_MODULE_0_.isFunction)(this.self.eventToPropertyMapping[name]))){_context2.n=4;break}wrappedMapping=(_this$self$eventToPro=this.self.eventToPropertyMapping)[name].apply(_this$self$eventToPro,Web_toConsumableArray(parameters).concat([this]));if(!(wrappedMapping&&"then"in wrappedMapping&&(0,Web_clientnode_WEBPACK_IMPORTED_MODULE_0_.isFunction)(wrappedMapping.then))){_context2.n=2;break}_context2.n=1;return wrappedMapping;case 1:_t=_context2.v;_context2.n=3;break;case 2:_t=wrappedMapping;case 3:mapping=_t;handled=true;if(Array.isArray(mapping)){result=mapping[0];this.reflectProperties(result);(0,Web_clientnode_WEBPACK_IMPORTED_MODULE_0_.extend)(true,this.internalProperties,mapping[1])}else if(mapping===null)handled=false;else if(Web_typeof(mapping)==="object"){result=mapping;this.reflectProperties(mapping)}case 4:// endregion
if(!handled&&parameters.length>0&&(0,Web_clientnode_WEBPACK_IMPORTED_MODULE_0_.isObject)(parameters[0])){/*
                Identified as somehow throw data back event (no synthetic
                event; derived from a user-triggered one) when following
                condition does not hold.
            */newProperties=parameters[0];if("persist"in parameters[0]&&(0,Web_clientnode_WEBPACK_IMPORTED_MODULE_0_.isFunction)(parameters[0].persist)){newProperties={};for(_i7=0,_Object$keys2=Object.keys(this.self.propertyTypes);_i7<_Object$keys2.length;_i7++){propertyName=_Object$keys2[_i7];_iterator0=_createForOfIteratorHelper([propertyName].concat((_this$getPropertyAlia=this.getPropertyAlias(propertyName))!==null&&_this$getPropertyAlia!==void 0?_this$getPropertyAlia:[]));try{for(_iterator0.s();!(_step0=_iterator0.n()).done;){_name3=_step0.value;currentValue=parameters[0].currentTarget&&Object.prototype.hasOwnProperty.call(parameters[0].currentTarget,_name3)?/*
                                    Update all known properties from event
                                    target instance.
                                */parameters[0].currentTarget[_name3]:/*
                                    Update all known properties from adapter
                                    instance.
                                */this.getPropertyValue(_name3);if(currentValue!==this.externalProperties[_name3])newProperties[_name3]=currentValue}}catch(err){_iterator0.e(err)}finally{_iterator0.f()}}}else if(![null,undefined].includes((_newProperties$detail=newProperties.detail)===null||_newProperties$detail===void 0?void 0:_newProperties$detail.value))newProperties=Web_objectSpread({},newProperties.detail);result=newProperties;this.reflectProperties(newProperties)}this.triggerRender("propertyReflected");this.batchUpdates=oldBatchUpdatesConfiguration;return _context2.a(2,result)}},_callee2,this)}));function reflectEventToProperties(_x,_x2){return _reflectEventToProperties.apply(this,arguments)}return reflectEventToProperties}()/**
     * Evaluates the given property value depending on its property definition
     * and registers in a property mapping object.
     * @param attributeName - Name of given value.
     * @param value - Value to evaluate.
     */)},{key:"evaluateStringOrNullAndSetAsProperty",value:function evaluateStringOrNullAndSetAsProperty(attributeName,value){var _this11=this;var preEvaluate=attributeName.startsWith("-");var effectiveAttributeName=preEvaluate?attributeName.substring(1):attributeName;var name=(0,Web_clientnode_WEBPACK_IMPORTED_MODULE_0_.delimitedToCamelCase)(effectiveAttributeName);var alias=this.getPropertyAlias(name);if(alias&&Object.prototype.hasOwnProperty.call(this.self.propertyTypes,alias))name=alias;if(Object.prototype.hasOwnProperty.call(this.self.propertyTypes,name)){var type=this.self.propertyTypes[name];if(preEvaluate){if(value){var result=(0,Web_clientnode_WEBPACK_IMPORTED_MODULE_0_.evaluate)(value,{scope:Web_objectSpread({},Web_clientnode_WEBPACK_IMPORTED_MODULE_0_.UTILITY_SCOPE),binding:this});if(result.error){log.warn("Failed to process pre-evaluation attribute","\"".concat(attributeName,"\": ").concat(result.error,". Will be"),"set to \"undefined\".");this.setInternalPropertyValue(name,undefined)}else{this.setInternalPropertyValue(name,result.result);this.setExternalPropertyValue(name,result.result)}}}else switch(type){case Web_clientnode_property_types_WEBPACK_IMPORTED_MODULE_1_.boolean:case"boolean":{var booleanValue=![null,"false"].includes(value);this.setInternalPropertyValue(name,booleanValue);this.setExternalPropertyValue(name,booleanValue);break}case Web_clientnode_property_types_WEBPACK_IMPORTED_MODULE_1_.func:case"function":{var error=null;var templateFunction;var scopeNames=["data","event","firstArgument","firstParameter","options"];if(value){var _result3=(0,Web_clientnode_WEBPACK_IMPORTED_MODULE_0_.compile)(value,{scope:scopeNames.concat("parameters","scope",Web_clientnode_WEBPACK_IMPORTED_MODULE_0_.UTILITY_SCOPE_NAMES),execute:true,binding:this});error=_result3.error;templateFunction=_result3.templateFunction;if(error)log.warn("Failed to compile given handler","\"".concat(attributeName,"\": ").concat(error,"."))}this.setInternalPropertyValue(name,function(){for(var _len4=arguments.length,parameters=new Array(_len4),_key4=0;_key4<_len4;_key4++){parameters[_key4]=arguments[_key4]}if(_this11.outputEventNames.has(name))void _this11.reflectEventToProperties(name,parameters);var result=undefined;if(!error){var scope=Web_objectSpread({parameters:parameters},Web_clientnode_WEBPACK_IMPORTED_MODULE_0_.UTILITY_SCOPE);for(var _i8=0,_scopeNames=scopeNames;_i8<_scopeNames.length;_i8++){var _name4=_scopeNames[_i8];scope[_name4]=parameters[0]}try{var _templateFunction;result=(_templateFunction=templateFunction)===null||_templateFunction===void 0?void 0:_templateFunction.apply(void 0,Web_toConsumableArray(scopeNames.map(function(name){return scope[name]})).concat([parameters,scope],Web_toConsumableArray(Web_clientnode_WEBPACK_IMPORTED_MODULE_0_.UTILITY_SCOPE_NAMES.map(function(name){return Web_clientnode_WEBPACK_IMPORTED_MODULE_0_.UTILITY_SCOPE[name]}))))}catch(error){log.warn("Failed to evaluate function","\"".concat(attributeName,"\" with expression"),"\"".concat(value,"\" and scope"),"variables","\"".concat(scopeNames.join("\", \""),"\" set to"),"\"".concat((0,Web_clientnode_WEBPACK_IMPORTED_MODULE_0_.represent)(parameters),"\":"),"".concat(error,". Set property"),"to \"undefined\".")}}if(!_this11.self.renderProperties.includes(name))_this11.forwardEvent(name,parameters);return result});if(!error)this.setExternalPropertyValue(name,templateFunction);break}case"json":{if(value){var evaluated;try{evaluated=JSON.parse(value)}catch(error){log.warn("Error occurred during parsing given json","attribute \"".concat(attributeName,"\":"),(0,Web_clientnode_WEBPACK_IMPORTED_MODULE_0_.represent)(error));break}// NOTE: That both values do have to be avoided.
this.setInternalPropertyValue(name,evaluated);this.setExternalPropertyValue(name,(0,Web_clientnode_WEBPACK_IMPORTED_MODULE_0_.copy)(evaluated,false,1))}else{this.setInternalPropertyValue(name,null);this.setExternalPropertyValue(name,null)}break}case Web_clientnode_property_types_WEBPACK_IMPORTED_MODULE_1_.number:case"number":{if(value===null){this.setInternalPropertyValue(name,value);this.setExternalPropertyValue(name,value);break}/*
                        NOTE: You should not name this variable "number" since
                        babel gets confused caused by existing module wide
                        property type variable "number".
                    */var numberValue=parseFloat(value);if(isNaN(numberValue))numberValue=undefined;this.setInternalPropertyValue(name,numberValue);this.setExternalPropertyValue(name,numberValue);break}case Web_clientnode_property_types_WEBPACK_IMPORTED_MODULE_1_.string:case"string":{this.setInternalPropertyValue(name,value);this.setExternalPropertyValue(name,value);break}case Web_clientnode_property_types_WEBPACK_IMPORTED_MODULE_1_.any:case Web_clientnode_property_types_WEBPACK_IMPORTED_MODULE_1_.array:case Web_clientnode_property_types_WEBPACK_IMPORTED_MODULE_1_.arrayOf:case Web_clientnode_property_types_WEBPACK_IMPORTED_MODULE_1_.element:case Web_clientnode_property_types_WEBPACK_IMPORTED_MODULE_1_.elementType:case Web_clientnode_property_types_WEBPACK_IMPORTED_MODULE_1_.instanceOf:case Web_clientnode_property_types_WEBPACK_IMPORTED_MODULE_1_.node:case Web_clientnode_property_types_WEBPACK_IMPORTED_MODULE_1_.object:case"object":case Web_clientnode_property_types_WEBPACK_IMPORTED_MODULE_1_.objectOf:case Web_clientnode_property_types_WEBPACK_IMPORTED_MODULE_1_.oneOf:case Web_clientnode_property_types_WEBPACK_IMPORTED_MODULE_1_.oneOfType:case Web_clientnode_property_types_WEBPACK_IMPORTED_MODULE_1_.shape:case Web_clientnode_property_types_WEBPACK_IMPORTED_MODULE_1_.exact:case Web_clientnode_property_types_WEBPACK_IMPORTED_MODULE_1_.symbol:default:{if(value){var _evaluated=(0,Web_clientnode_WEBPACK_IMPORTED_MODULE_0_.evaluate)(value,{binding:this});if(_evaluated.error){log.warn("Error occurred during processing given","attribute configuration \"".concat(attributeName,"\":"),_evaluated.error);break}// NOTE: That both values do have to be avoided.
this.setInternalPropertyValue(name,_evaluated.result);this.setExternalPropertyValue(name,(0,Web_clientnode_WEBPACK_IMPORTED_MODULE_0_.copy)(_evaluated.result,false,1))}else if(this.hasAttribute(attributeName)){this.setInternalPropertyValue(name,true);this.setExternalPropertyValue(name,true)}else{this.setInternalPropertyValue(name,null);this.setExternalPropertyValue(name,null)}break}}}}/// endregion
/// region render
/**
     * Produces a promise resolving when all nested rendering promises have
     * been resolved. This only waits for registered nested components. That
     * means that nested components which where connected before the parent
     * component got initialized will not be waited for. That might happen
     * when nested component types got registered before the parent ones.
     */},{key:"waitForNestedComponentRendering",value:function(){var _waitForNestedComponentRendering=_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(){return _regenerator().w(function(_context3){while(1)switch(_context3.n){case 0:if(this.childComponentInstances){_context3.n=1;break}return _context3.a(2);case 1:_context3.n=2;return Promise.all(this.childComponentInstances.map(function(component){return component.renderState.pending?component.renderState.promise:Promise.resolve()}));case 2:return _context3.a(2)}},_callee3,this)}));function waitForNestedComponentRendering(){return _waitForNestedComponentRendering.apply(this,arguments)}return waitForNestedComponentRendering}()/**
     * Resolves the rendering promise.
     * @param reason - Rendering reason description.
     * @param resolveRendering - Indicates whether to resolve the rendering or
     * just return a resolving promise directly.
     * @returns A promise resolving when all nested render promises have been
     * resolved.
     */},{key:"resolveRenderingPromiseIfSet",value:(function(){var _resolveRenderingPromiseIfSet=_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(reason,resolveRendering){return _regenerator().w(function(_context4){while(1)switch(_context4.n){case 0:if(!resolveRendering){_context4.n=2;break}_context4.n=1;return this.waitForNestedComponentRendering();case 1:this.renderState.pending=false;this.renderState.resolve(reason);this.prepareNewRenderingPromise();case 2:return _context4.a(2)}},_callee4,this)}));function resolveRenderingPromiseIfSet(_x3,_x4){return _resolveRenderingPromiseIfSet.apply(this,arguments)}return resolveRenderingPromiseIfSet}()/**
     * Sets up a new rendering cycle representing promise.
     */)},{key:"prepareNewRenderingPromise",value:function prepareNewRenderingPromise(){var _this12=this;if(!this.renderState.pending)this.renderState.promise=new Promise(function(resolve){_this12.renderState.resolve=function(reason){_this12.renderState.pending=false;resolve(reason)}})}/**
     * Triggers a new rendering cycle by respecting batch configuration.
     * @param reason - A description why rendering should be triggered.
     */},{key:"triggerRender",value:function triggerRender(reason){var _this13=this;if(this.batchUpdates){if(!this.batchedUpdateRunning){this.batchedUpdateRunning=true;void (0,Web_clientnode_WEBPACK_IMPORTED_MODULE_0_.timeout)(function(){_this13.batchedUpdateRunning=false;void _this13.render(reason)})}}else void this.render(reason)}/**
     * Creates shadow root if not created yet and assigns to the current root
     * property.
     */},{key:"applyShadowRootIfNotExisting",value:function applyShadowRootIfNotExisting(){if(this.self.shadowDOM&&this.hostDomNode===this)this.hostDomNode=(!("attachShadow"in this)&&"ShadyDOM"in Web_window?Web_window.ShadyDOM.wrap(this):this).attachShadow((0,Web_clientnode_WEBPACK_IMPORTED_MODULE_0_.isObject)(this.self.shadowDOM)?this.self.shadowDOM:{mode:"open"})}/**
     * Determines a new scope object with a useful default set of environment
     * values.
     * @param scope - To apply to generated scope.
     */},{key:"determineRenderScope",value:function determineRenderScope(scope){var _this$parentInstance;if(scope===void 0){scope={}}this.scope=Web_objectSpread(Web_objectSpread(Web_objectSpread(Web_objectSpread({},((_this$parentInstance=this.parentInstance)===null||_this$parentInstance===void 0?void 0:_this$parentInstance.scope)||{}),this.scope),this.internalProperties),{},Web_defineProperty({parentInstance:this.parentInstance,rootInstance:this.rootInstance,self:this},(0,Web_clientnode_WEBPACK_IMPORTED_MODULE_0_.lowerCase)(this.self._name)||"instance",this),scope);this.scope.scope=this.scope}/**
     * Does the rendering job. Should be called when ever state changes should
     * be projected to the hosts dom content.
     * @param reason - Description why rendering is necessary.
     * @param resolveRendering - Indicates whether rendering should be resolved
     * finally. Should be set to "false" via super calls in inherited render
     * methods which do further dom manipulations afterward and resolve the
     * rendering process by their own.
     * @returns A promise resolving when rendering has been finished. A promise
     * may be needed for classes inheriting from this class.
     */},{key:"render",value:(function(){var _render=_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(reason,resolveRendering){var _this14=this;var evaluated,renderTargetDomNode;return _regenerator().w(function(_context5){while(1)switch(_context5.n){case 0:if(reason===void 0){reason="unknown"}if(resolveRendering===void 0){resolveRendering=true}this.unRender("reRender",reason);this.childComponentInstances=[];this.renderState.pending=true;if(!this.isRoot){_context5.n=3;break}_context5.n=1;return this.resolveRenderingPromiseIfSet(reason,resolveRendering);case 1:if(!resolveRendering){_context5.n=3;break}_context5.n=2;return Promise.all(this.self.pendingRenderPromises);case 2:this.self.pendingRenderPromises=[];case 3:this.self.pendingRenderPromises.push(this.renderState.promise);this.determineRenderScope();if(this.self.doRender&&this.dispatchEvent(new CustomEvent("render",{detail:{reason:reason,scope:this.scope}}))){_context5.n=5;break}_context5.n=4;return this.resolveRenderingPromiseIfSet(reason,resolveRendering);case 4:return _context5.a(2);case 5:evaluated=(0,Web_clientnode_WEBPACK_IMPORTED_MODULE_0_.evaluate)("`".concat(this.self.content,"`"),{scope:this.scope});if(!evaluated.error){_context5.n=7;break}log.warn("Failed to process template: ".concat(evaluated.error));this.renderState.resolve(reason);_context5.n=6;return Promise.all(this.self.pendingRenderPromises);case 6:return _context5.a(2);case 7:this.applyShadowRootIfNotExisting();/*
            NOTE: We first render into an intermediate render target and apply
            slot content until we finally publish everything to the document.
            This avoids painting twice and internetexplorer bugs with an empty
            node after first overwriting the content of "this.rootInstance".
        */renderTargetDomNode=document.createElement("div");renderTargetDomNode.innerHTML=evaluated.result;this.applySlots(renderTargetDomNode,Web_objectSpread(Web_objectSpread({},this.scope),{},{parentInstance:this}));this.hostDomNode.innerHTML=renderTargetDomNode.innerHTML;/*
            NOTE: Wait until nested components have registered themselves to be
            able to wait for their rendering.
        */_context5.n=8;return (0,Web_clientnode_WEBPACK_IMPORTED_MODULE_0_.timeout)();case 8:void this.waitForNestedComponentRendering().then(function(){_this14.applyBindings(_this14.hostDomNode.firstChild,_this14.scope,_this14.self.renderSlots)});_context5.n=9;return this.resolveRenderingPromiseIfSet(reason,resolveRendering);case 9:return _context5.a(2)}},_callee5,this)}));function render(_x5,_x6){return _render.apply(this,arguments)}return render}()/**
     * Should free up memory listeners related to deprecated HTML.
     * @param _reason - Description why rendering is necessary.
     * @param _reRenderReason - Description why a re-rendering is necessary.
     */)},{key:"unRender",value:function unRender(_reason,_reRenderReason){if(_reason===void 0){_reason="unknown"}this.unregisterDomNodeEventBindings()}/// endregion
// endregion
}],[{key:"hasCode",value:function hasCode(content){return(// NOTE: First three conditions are only for performance.
typeof content==="string"&&content.includes("${")&&content.includes("}")&&/\${[\s\S]+}/.test(content))}/**
     * Converts given the list, item, or map to a map (with ordering).
     * @param value - Attribute reflection configuration.
     * @returns Generated map.
     */},{key:"normalizePropertyTypeList",value:function normalizePropertyTypeList(value){if(typeof value==="string")value=[value];if(Array.isArray(value)){var givenValue=value;var newValue=new Map;var _iterator1=_createForOfIteratorHelper(givenValue),_step1;try{for(_iterator1.s();!(_step1=_iterator1.n()).done;){var name=_step1.value;if(Object.prototype.hasOwnProperty.call(Web.propertyTypes,name))newValue.set(name,Web.propertyTypes[name])}}catch(err){_iterator1.e(err)}finally{_iterator1.f()}return newValue}return (0,Web_clientnode_WEBPACK_IMPORTED_MODULE_0_.convertPlainObjectToMap)(value)}}])}(GenericHTMLElement),Web_defineProperty(_Web,"applyRootBinding",true),Web_defineProperty(_Web,"pendingRenderPromises",[]),Web_defineProperty(_Web,"content","<slot>Please provide a template to transclude.</slot>"),Web_defineProperty(_Web,"determineRootBinding",true),Web_defineProperty(_Web,"shadowDOM",null),Web_defineProperty(_Web,"observedAttributes",[]),Web_defineProperty(_Web,"controllableProperties",[]),Web_defineProperty(_Web,"eventToPropertyMapping",{}),Web_defineProperty(_Web,"propertyAliases",{}),Web_defineProperty(_Web,"propertyTypes",{onClick:Web_clientnode_property_types_WEBPACK_IMPORTED_MODULE_1_.func}),Web_defineProperty(_Web,"propertiesToReflectAsAttributes",[]),Web_defineProperty(_Web,"renderProperties",["children"]),Web_defineProperty(_Web,"doRender",false),Web_defineProperty(_Web,"cloneSlots",false),Web_defineProperty(_Web,"evaluateSlots",false),Web_defineProperty(_Web,"renderSlots",true),Web_defineProperty(_Web,"trimSlots",true),Web_defineProperty(_Web,"renderUnsafe",false),Web_defineProperty(_Web,"_name","BaseWeb"),Web_defineProperty(_Web,"_propertyAliasIndex",void 0),Web_defineProperty(_Web,"_propertiesToReflectAsAttributes",void 0),_Web),_descriptor=_applyDecoratedDescriptor(_class.prototype,"isRoot",[_dec],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return true}}),_class);var api={component:Web,register:function register(tagName){if(tagName===void 0){tagName=(0,Web_clientnode_WEBPACK_IMPORTED_MODULE_0_.camelCaseToDelimited)(Web._name)}customElements.define(tagName,Web)}};/* harmony default export */ Web_nested_webpack_exports_.Ay = (Web);
var Web_webpack_exports_default = Web_nested_webpack_exports_.Ay;


;// ./node_modules/website-utilities/index.js
if(typeof website_utilities_window==='undefined'||website_utilities_window===null)var website_utilities_window=(typeof globalThis==='undefined'||globalThis===null)?{}:globalThis;



/******/ // The require scope
/******/ const __nested_webpack_require_1710__ = {};
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ // define getter/value functions for harmony exports
/******/ __nested_webpack_require_1710__.d = (exports, definition) => {
/******/ 	for(var key in definition) {
/******/ 		if(__nested_webpack_require_1710__.o(definition, key) && !__nested_webpack_require_1710__.o(exports, key)) {
/******/ 			Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 		}
/******/ 	}
/******/ };
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ __nested_webpack_require_1710__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 
/************************************************************************/
// extracted by mini-css-extract-plugin


;// external "clientnode"

;// external "clientnode/property-types"

;// external "web-component-wrapper/decorator"

;// external "web-component-wrapper/Web"

;// ./index.ts
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module website-utilities *//* !
    region header
    [Project page](https://torben.website/website-utilities)

    Copyright Torben Sickert (info["~at~"]torben.website) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/// region imports
var website_utilities_dec,_dec2,_dec3,_dec4,_dec5,_dec6,_dec7,_dec8,_dec9,_dec0,_dec1,website_utilities_class,website_utilities_descriptor,_descriptor2,_descriptor3,_descriptor4,_descriptor5,_descriptor6,_descriptor7,_descriptor8,_descriptor9,_descriptor0,_descriptor1,_WebsiteUtilities;function website_utilities_initializerDefineProperty(e,i,r,l){r&&Object.defineProperty(e,i,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(l):void 0})}function website_utilities_defineProperty(e,r,t){return(r=website_utilities_toPropertyKey(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function website_utilities_toPropertyKey(t){var i=website_utilities_toPrimitive(t,"string");return"symbol"==typeof i?i:i+""}function website_utilities_toPrimitive(t,r){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}function website_utilities_applyDecoratedDescriptor(i,e,r,n,l){var a={};return Object.keys(n).forEach(function(i){a[i]=n[i]}),a.enumerable=!!a.enumerable,a.configurable=!!a.configurable,("value"in a||a.initializer)&&(a.writable=!0),a=r.slice().reverse().reduce(function(r,n){return n(i,e,r)||r},a),l&&void 0!==a.initializer&&(a.value=a.initializer?a.initializer.call(l):void 0,a.initializer=void 0),void 0===a.initializer?(Object.defineProperty(i,e,a),null):a}function website_utilities_initializerWarningHelper(r,e){throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform.")};// endregion
const website_utilities_log=new dist/* Logger */.VyI({name:"website-utilities"});// region plugins/classes
/**
 * This plugin holds common methods to extend a whole website.
 * @property _defaultOptions - Options extended by the options given to the
 * initializer method.
 * @property _defaultOptions.additionalPageLoadingTimeInMilliseconds -
 * Additional time to wait until page will be indicated as loaded.
 * @property _defaultOptions.selectors - Mapping of dom node descriptions to
 * their corresponding selectors.
 * @property _defaultOptions.selectors.top - Selector to indicate that viewport
 * is currently on top.
 * @property _defaultOptions.selectors.scrollToTopButtons - Selectors for
 * starting an animated scroll to top.
 * @property _defaultOptions.selectors.startUpAnimationClassPrefix - Class name
 * selector prefix for all dom nodes to appear during startup animations.
 * @property _defaultOptions.selectors.windowLoadingCover - Selector to the full
 * window loading cover dom node.
 * @property _defaultOptions.startUpAnimationElementDelayInMilliseconds - Delay
 * between two startup animated dom nodes in order.
 * @property _defaultOptions.tracking - Indicates whether tracking should be
 * used or not.
 * @property _defaultOptions.windowLoadedTimeoutAfterDocLoadedInMSec - Duration
 * after loading cover should be removed.
 * @property options - Finally configured given options.
 * @property currentSectionName - Saves current section hash name.
 * @property startUpAnimationIsComplete - Indicates whether startup animations
 * have finished.
 * @property viewportIsOnTop - Indicates whether current viewport is on top.
 * @property windowLoaded - Indicates whether the window is already loaded.
 * @property onChangeMediaQueryMode - Callback to trigger if media query mode
 * changes.
 * @property onChangeToExtraSmallMode - Callback to trigger if media query mode
 * changes to extra small mode.
 * @property onChangeToLargeMode - Callback to trigger if media query mode
 * changes to large mode.
 * @property onChangeToMediumMode - Callback to trigger if media query mode
 * changes to medium mode.
 * @property onChangeToSmallMode - Callback to trigger if media query mode
 * changes to small mode.
 * @property onStartUpAnimationComplete - Callback to trigger if all startup
 * animations have finished.
 * @property onSwitchSection - Callback to trigger if the current section
 * switches.
 * @property onViewportMovesAwayFromTop - Callback to trigger when viewport
 * moves away from top.
 * @property onViewportMovesToTop - Callback to trigger when viewport arrives
 * at top.
 * @property onButtonClick - Function to call on button click events.
 * @property onLinkClick - Function to call on link click events.
 * @property onSectionSwitch - Function to call on section switches.
 * @property onTrack - Tracker call itself.
 */let WebsiteUtilities=(website_utilities_dec=property({type:object}),_dec2=property({type:func}),_dec3=property({type:func}),_dec4=property({type:func}),_dec5=property({type:func}),_dec6=property({type:func}),_dec7=property({type:func}),_dec8=property({type:func}),_dec9=property({type:func}),_dec0=property({type:func}),_dec1=property({type:func}),website_utilities_class=(_WebsiteUtilities=class WebsiteUtilities extends Web{/// endregion
// region public
/// region live-cycle
/**
     * Defines dynamic getter and setter interface and resolves the
     * configuration object. Initializes the map implementation.
     */constructor(){super();/*
            Babel's property declaration transformation overwrites defined
            properties at the end of an implicit constructor. So we have to
            redefine them as long as we want to declare expected component
            interface properties to enable static type checks.
        */website_utilities_defineProperty(this,"self",WebsiteUtilities);// region api properties
website_utilities_initializerDefineProperty(this,"options",website_utilities_descriptor,this);website_utilities_initializerDefineProperty(this,"onStartUpAnimationComplete",_descriptor2,this);website_utilities_initializerDefineProperty(this,"onSwitchSection",_descriptor3,this);website_utilities_initializerDefineProperty(this,"onViewportMovesAwayFromTop",_descriptor4,this);website_utilities_initializerDefineProperty(this,"onViewportMovesToTop",_descriptor5,this);website_utilities_initializerDefineProperty(this,"onUnfocusResponsiveMenu",_descriptor6,this);website_utilities_initializerDefineProperty(this,"onLoaded",_descriptor7,this);website_utilities_initializerDefineProperty(this,"onButtonClick",_descriptor8,this);website_utilities_initializerDefineProperty(this,"onSectionSwitch",_descriptor9,this);website_utilities_initializerDefineProperty(this,"onLinkClick",_descriptor0,this);website_utilities_initializerDefineProperty(this,"onTrack",_descriptor1,this);// endregion
website_utilities_defineProperty(this,"currentSectionName","");website_utilities_defineProperty(this,"startUpAnimationIsComplete",false);website_utilities_defineProperty(this,"viewportIsOnTop",void 0);website_utilities_defineProperty(this,"observerDeregisters",[]);/// region dom nodes
website_utilities_defineProperty(this,"windowLoadingCoverDomNode",null);website_utilities_defineProperty(this,"topDomNode",null);website_utilities_defineProperty(this,"priorityNavigationDomNodes",null);website_utilities_defineProperty(this,"routerOutletDomNode",null);website_utilities_defineProperty(this,"sectionDomNodes",{});website_utilities_defineProperty(this,"scrollToTopButtonDomNodes",null);this.defineGetterAndSetterInterface()}/**
     * Triggered when ever a given attribute has changed and triggers to update
     * configured dom content.
     * @param name - Attribute name which was updates.
     * @param newValue - New updated value.
     * @returns Promise resolving when attribute has been updated.
     */async onUpdateAttribute(name,newValue){await super.onUpdateAttribute(name,newValue);if(name==="options")this._extendOptions()}/**
     * Updates controlled dom elements.
     * @param reason - Why an update has been triggered.
     * @param resolveRendering - Indicates whether rendering should be resolved
     * finally. Should be set to "false" via super calls in inherited render
     * methods which do further dom manipulations afterward and resolve the
     * rendering process by their own.
     * @returns A promise resolving when rendering has finished. A promise may
     * be needed for classes inheriting from this class.
     */async render(reason="unknown",resolveRendering=true){await super.render(reason,false);if(Object.keys(this.options).length===0)this._extendOptions();this.disableScrolling();if(!this.self.windowLoaded){const onLoaded=()=>{if(!this.self.windowLoaded){this.self.windowLoaded=true;void this._removeLoadingCover().then(()=>{this.enableScrolling();void this._performStartUpEffects().then(()=>{this.addMenuHighlighterViewTransition()});this.onLoaded()})}};void (0,dist/* onDocumentReady */.qqP)(()=>{void (0,dist/* timeout */.wRz)(onLoaded,this.options.windowLoadedTimeoutAfterDocLoadedInMSec)});if(dist/* globalContext */.Lz6.window)this.addSecureEventListener(dist/* globalContext */.Lz6.window,"load",onLoaded)}await this.waitForNestedComponentRendering();this.grabDomNodes();this._bindScrollEvents();this._bindClickTracking();await this._initializeRouting();this.initializePriorityNavigation();await this.resolveRenderingPromiseIfSet(reason,resolveRendering)}/**
     * Should free up memory listeners related to deprecated HTML.
     * @param reason - Description why rendering is necessary.
     * @param reRenderReason - Description why a re-rendering is necessary.
     */unRender(reason="unknown",reRenderReason){super.unRender(reason,reRenderReason);for(const deregister of this.observerDeregisters)deregister()}// endregion
grabDomNodes(){this.topDomNode=this.hostDomNode.querySelector(this.options.selectors.top);this.scrollToTopButtonDomNodes=this.hostDomNode.querySelectorAll(this.options.selectors.scrollToTopButtons);this.priorityNavigationDomNodes=this.hostDomNode.querySelectorAll(`.${this.options.selectors.priorityNavigationClassName}`);this.routerOutletDomNode=this.hostDomNode.querySelector(this.options.selectors.routerOutlet);for(const domNode of this.routerOutletDomNode?.children??[]){const name=domNode.getAttribute("data-website-utilities-section");if(name==="")this.sectionDomNodes.default=domNode;else if(name&&this.options.sectionNames.managed.includes(name))this.sectionDomNodes[name]=domNode}this.windowLoadingCoverDomNode=this.hostDomNode.querySelector(this.options.selectors.windowLoadingCover)??this.hostDomNode.parentElement?.querySelector(this.options.selectors.windowLoadingCover)??dist/* globalContext */.Lz6.document?.body.querySelector(this.options.selectors.windowLoadingCover)??null}/**
     * This method disables scrolling on the given web view.
     */disableScrolling(){if(!this.hostDomNode.parentElement)return;this.hostDomNode.parentElement.classList.add("wu-disable-scrolling");this.addSecureEventListener(this.hostDomNode.parentElement,"touchmove",dist/* preventDefault */.woC)}/**
     * This method disables scrolling on the given web view.
     */enableScrolling(){if(!this.hostDomNode.parentElement)return;this.hostDomNode.parentElement.classList.remove("wu-disable-scrolling");this.hostDomNode.parentElement.classList.remove("touchmove");this.hostDomNode.parentElement.removeEventListener("touchmove",dist/* preventDefault */.woC)}/**
     * Triggers an analytics event. All given arguments are forwarded to
     * configured analytics event code to define to their environment
     * variables.
     * @param properties - Event tracking information.
     */async track(properties){if(dist/* globalContext */.Lz6.window?.location&&this.options.tracking){const trackingItem={context:`${dist/* globalContext */.Lz6.window.location.pathname}#`+this.currentSectionName,...properties};if(typeof trackingItem.value!=="number"||isNaN(trackingItem.value))trackingItem.value=1;website_utilities_log.debug("Run tracking code: \"event\" with arguments:");website_utilities_log.debug(trackingItem);try{await this._onTrack(trackingItem)}catch(error){website_utilities_log.warn(`Problem in tracking "${(0,dist/* represent */.DoQ)(trackingItem)}":`,(0,dist/* represent */.DoQ)(error))}}}initializePriorityNavigation(){const{selectors}=this.options;const overflowIndicatorClassName=selectors.priorityNavigationOverflowIndicatorClassName;if(this.priorityNavigationDomNodes?.length===0)return;for(const domNode of this.priorityNavigationDomNodes||[])for(const item of domNode.querySelectorAll(`[href="#${this.currentSectionName}"]`))item.classList.add(selectors.activeNavigationItemClassName);const setupOverflowMenu=()=>{for(const menuDomNode of this.priorityNavigationDomNodes||[]){const allMenuItemsDomNode=menuDomNode.querySelectorAll("ul > li");const menuItemDomNodes=Array.from(allMenuItemsDomNode).filter(domNode=>!domNode.classList.contains(overflowIndicatorClassName));// Checking top position of first item (sometimes changes)
const firstTopPosition=allMenuItemsDomNode[0].offsetTop;let wrappedElements=[];for(const domNode of menuItemDomNodes){const topPosition=domNode.offsetTop;if(topPosition!==firstTopPosition)wrappedElements.push(domNode)}if(menuItemDomNodes.length-wrappedElements.length<this.options.minimumNumberOfMenuItems)wrappedElements=menuItemDomNodes.slice();const overflowMenu=menuDomNode.querySelector(`.${overflowIndicatorClassName}`);if(wrappedElements.length){// Clone set before altering
const newSet=wrappedElements.map(domNode=>{const copy=domNode.cloneNode(true);/*
                            NOTE: We remove all inline styles to remove running
                            transitions and instance-specific styling which
                            might not be useful in stacked menu.
                        */for(const domNode of copy.querySelectorAll("[style]"))domNode.removeAttribute("style");return copy});// Hide ones that we're moving
for(const domNode of wrappedElements)domNode.classList.add(selectors.priorityNavigationListItemHideClassName);// Add wrapped elements to dropdown
const overflowNavigationList=menuDomNode.querySelector(selectors.priorityNavigationOverflowList);if(overflowNavigationList)for(const domNode of newSet)overflowNavigationList.append(domNode);if(overflowMenu){const className=this.options.selectors.priorityNavigationShowOverflowIndicatorClassName;menuDomNode.classList.add(className)}}else if(overflowMenu)menuDomNode.classList.remove(this.options.selectors.priorityNavigationShowOverflowIndicatorClassName)}};for(const domNode of this.hostDomNode.querySelectorAll(`.${overflowIndicatorClassName}`)){const menuDomNode=domNode.closest(`.${selectors.priorityNavigationClassName}`);this.addSecureEventListener(domNode,"click",()=>{menuDomNode?.classList.toggle(selectors.priorityNavigationOverflowOpenClassName)});if(!dist/* globalContext */.Lz6.document)continue;/*
                Listen for clicks anywhere on the webpage to close overflow
                menu.
            */this.addSecureEventListener(dist/* globalContext */.Lz6.document,"click",event=>{if(menuDomNode?.classList.contains(selectors.priorityNavigationOverflowOpenClassName)){const clickWasInMenu=Boolean(event.target&&(0,dist/* getParents */.wTB)(event.target).some(parentDomNode=>menuDomNode===parentDomNode));const result=this.onUnfocusResponsiveMenu(event,clickWasInMenu);if(result===true||!clickWasInMenu&&result!==false)menuDomNode.classList.remove(selectors.priorityNavigationOverflowOpenClassName)}})}for(const menuDomNode of this.priorityNavigationDomNodes||[]){const update=(0,dist/* trailingThrottle */.p06)(()=>{/*
                        NOTE: Skip update if overflow menu is currently open
                        to avoid interrupting CSS transitions (toggling
                        display:none/inline-block on the indicator kills
                        running transitions).
                    */if(menuDomNode.classList.contains(selectors.priorityNavigationOverflowOpenClassName))return;menuDomNode.classList.add(selectors.priorityNavigationOverflowResizingClassName);for(const domNode of menuDomNode.querySelectorAll(selectors.priorityNavigationOverflowList))while(domNode.firstChild)domNode.removeChild(domNode.firstChild);menuDomNode.classList.remove(this.options.selectors.priorityNavigationShowOverflowIndicatorClassName);for(const domNode of menuDomNode.querySelectorAll("ul > li"))if(!domNode.classList.contains(selectors.priorityNavigationOverflowIndicatorClassName))domNode.classList.remove(selectors.priorityNavigationListItemHideClassName);setupOverflowMenu();menuDomNode.classList.remove(selectors.priorityNavigationOverflowResizingClassName)},20);const observer=new ResizeObserver(update);this.observerDeregisters.push(()=>{observer.unobserve(menuDomNode)});observer.observe(menuDomNode)}setupOverflowMenu()}addMenuHighlighterViewTransition(){if(!dist/* globalContext */.Lz6.document)return;const styleDomNode=document.createElement("style");styleDomNode.type="text/css";const styles=`
            .wu-priority-navigation
            .wu-priority-navigation__link--active::after {
                view-transition-name: wu-menu-highlight;
            }
        `;styleDomNode.appendChild(dist/* globalContext */.Lz6.document.createTextNode(styles));dist/* globalContext */.Lz6.document.getElementsByTagName("head")[0].appendChild(styleDomNode)}activateNavigationItemHighlighters(sectionName){const className=this.options.selectors.activeNavigationItemClassName;for(const domNode of this.priorityNavigationDomNodes||[]){for(const item of domNode.querySelectorAll(`.${className}`))item.classList.remove(className);for(const item of domNode.querySelectorAll(`[href="#${sectionName}"]`))item.classList.add(className)}}triggerNavigationItemHighlighterSwitching(sectionName){if(dist/* globalContext */.Lz6.document?.startViewTransition){dist/* globalContext */.Lz6.document.startViewTransition(()=>{this.activateNavigationItemHighlighters(sectionName)});return}this.activateNavigationItemHighlighters(sectionName)}// endregion
// region protected methods
/// region event
async _onButtonClick(event){if((await this.onButtonClick(event))===false)return;const button=event.target;const content=(0,dist/* getText */.q4_)(button).join(" ");void this._onTrack({event:"buttonClick",eventType:"click",label:content,reference:button.getAttribute("action")||button.getAttribute("target")||button.getAttribute("type")||content,subject:"button",value:parseInt(button.getAttribute("website-analytics-value")||"1"),userInteraction:true})}async _onSectionSwitch(sectionName,oldSectionName,event){if((await this.onSectionSwitch(sectionName,oldSectionName,event))===false)return;if(!dist/* globalContext */.Lz6.window?.location)return;await this._onTrack({event:"sectionSwitch",eventType:"sectionSwitch",label:sectionName,reference:`${dist/* globalContext */.Lz6.window.location.pathname}#${sectionName}`,subject:"url",userInteraction:false})}async _onLinkClick(event){if((await this.onLinkClick(event))===false)return;const link=event.target;const content=(0,dist/* getText */.q4_)(link).join(" ");void this._onTrack({event:"linkClick",eventType:"click",label:content,reference:link.getAttribute("href")||link.getAttribute("action")||link.getAttribute("target")||link.getAttribute("type")||content,subject:"link",value:parseInt(link.getAttribute("website-analytics-value")||"1"),userInteraction:true})}async _onTrack(item){if((await this.onTrack(item))===false)return;if(this.options.tracking)dist/* globalContext */.Lz6.dataLayer?.push(item)}/**
     * This method triggers if the viewport moves to the top.
     */_onViewportMovesToTop(){this._finishScrollToTopButtonTransition();for(const domNode of this.scrollToTopButtonDomNodes??[]){const cancel=()=>{domNode.removeEventListener("transitionend",setSettledClass);domNode.removeEventListener("transitioncancel",cancel)};const setSettledClass=()=>{if(this.viewportIsOnTop)domNode.classList.add(this.options.selectors.scrollToTopScrollTopSettledStateClassName);cancel()};domNode.addEventListener("transitionend",setSettledClass,{once:true});domNode.addEventListener("transitioncancel",cancel,{once:true});domNode.classList.add(this.options.selectors.scrollToTopScrollUpStateClassName)}}/**
     * This method triggers if the viewport moves away from the top.
     */async _onViewportMovesAwayFromTop(){for(const domNode of this.scrollToTopButtonDomNodes??[])domNode.classList.remove(this.options.selectors.scrollToTopScrollTopSettledStateClassName);/*
            NOTE: We need to render the none-setteled state beforehand to make
            sure browser will perform the transition.
        */await (0,dist/* timeout */.wRz)();this._finishScrollToTopButtonTransition();for(const domNode of this.scrollToTopButtonDomNodes??[])domNode.classList.add(this.options.selectors.scrollToTopScrollDownStateClassName)}/**
     * This method triggers if we change the current section.
     * @param sectionName - Contains the new section name.
     * @param event - Optional event that triggered the switch.
     * @returns Promise resolving when the section switch has been finished.
     */async switchSection(sectionName,event){if(dist/* globalContext */.Lz6.window&&"location" in dist/* globalContext.window */.Lz6.window&&(sectionName===""||this.options.sectionNames.managed.includes(sectionName)||this.options.sectionNames.unmanaged.includes(sectionName))){const oldSectionDomNode=Object.prototype.hasOwnProperty.call(this.sectionDomNodes,this.currentSectionName)?this.sectionDomNodes[this.currentSectionName]:this.sectionDomNodes.default??null;const newSectionDomNode=Object.prototype.hasOwnProperty.call(this.sectionDomNodes,sectionName)?this.sectionDomNodes[sectionName]:this.sectionDomNodes.default??null;await this.self.switchSectionLock.acquire();this.triggerNavigationItemHighlighterSwitching(sectionName);website_utilities_log.debug(`Run section switch from "${this.currentSectionName}" to`,`"${sectionName}".`);if(this.currentSectionName===sectionName){if(oldSectionDomNode){oldSectionDomNode.classList.remove("wu-section-active");oldSectionDomNode.classList.add("wu-section-inactive")}if(newSectionDomNode){newSectionDomNode.classList.remove("wu-section-inactive");newSectionDomNode.classList.add("wu-section-active")}}else if(!(this.options.sectionNames.unmanaged.includes(sectionName)&&this.options.sectionNames.unmanaged.includes(this.currentSectionName))){(0,dist/* interruptableScrollTo */.CcH)();if(oldSectionDomNode){await (0,dist/* fadeOut */.XnV)(oldSectionDomNode);oldSectionDomNode.classList.remove("wu-section-active");oldSectionDomNode.classList.add("wu-section-inactive")}if(newSectionDomNode){newSectionDomNode.classList.remove("wu-section-inactive");newSectionDomNode.classList.add("wu-section-active");await (0,dist/* fadeIn */.qGl)(newSectionDomNode)}}const oldSectionName=this.currentSectionName;this.currentSectionName=sectionName;try{await this._onSectionSwitch(this.currentSectionName,oldSectionName,event)}catch(error){website_utilities_log.warn("Problem due to call section switch callback on section",`"${this.currentSectionName}": ${(0,dist/* represent */.DoQ)(error)}`)}await this.self.switchSectionLock.release()}}// endregion
/// region helper
/**
     * Extends given options by default options.
     */_extendOptions(){/*
            NOTE: Using the internal setter avoids triggering an additional
            rendering.
        */this.setPropertyValue("options",(0,dist/* extend */.X$i)(true,{},this.self._defaultOptions,this.options))}/**
     * Handle section switches.
     * @returns Promise resolving when routing initialization has been
     * finished.
     */_initializeRouting(){if(this.currentSectionName==="")this.currentSectionName=this.options.sectionNames.default;this._bindNavigationEvents();const sectionNameCandidate=dist/* globalContext */.Lz6.location?.hash&&dist/* globalContext */.Lz6.location.hash.substring("#".length);if(sectionNameCandidate&&(this.options.sectionNames.managed.includes(sectionNameCandidate)||this.options.sectionNames.unmanaged.includes(sectionNameCandidate)))this.currentSectionName=sectionNameCandidate;for(const domNode of Object.values(this.sectionDomNodes))domNode.classList.add("wu-section-inactive");return this.switchSection(sectionNameCandidate||this.currentSectionName)}/**
     * Removes class names from scroll-to-top buttons to stop running
     * transitions.
     */_finishScrollToTopButtonTransition(){for(const domNode of this.scrollToTopButtonDomNodes??[])domNode.classList.remove(this.options.selectors.scrollToTopScrollUpStateClassName,this.options.selectors.scrollToTopScrollDownStateClassName)}/**
     * This method triggers if the view port arrives at special areas.
     */_bindScrollEvents(){if(!dist/* globalContext */.Lz6.document)return;if(dist/* globalContext */.Lz6.window)this.addSecureEventListener(dist/* globalContext */.Lz6.window,"scroll",event=>{if(dist/* globalContext */.Lz6.window?.scrollY){if(this.viewportIsOnTop){this.viewportIsOnTop=false;void this._onViewportMovesAwayFromTop().then(this.onViewportMovesAwayFromTop.bind(this,event))}}else if(!this.viewportIsOnTop){this.viewportIsOnTop=true;this._onViewportMovesToTop();this.onViewportMovesToTop(event)}});if(dist/* globalContext */.Lz6.window?.scrollY){this.viewportIsOnTop=false;void this._onViewportMovesAwayFromTop().then(()=>{this.onViewportMovesAwayFromTop()})}else{this.viewportIsOnTop=true;for(const domNode of this.scrollToTopButtonDomNodes??[])domNode.classList.add(this.options.selectors.scrollToTopScrollTopSettledStateClassName);this._onViewportMovesToTop();this.onViewportMovesToTop()}}/**
     * This method triggers after the window is loaded.
     * @returns Promise resolving to nothing when loading cover has been
     * removed.
     */async _removeLoadingCover(){await (0,dist/* timeout */.wRz)(this.options.additionalPageLoadingTimeInMilliseconds);// Hide startup animation dom nodes to show them step by step.
for(const domNode of this.hostDomNode.querySelectorAll("[class^=\""+`${this.options.selectors.startUpAnimationClassPrefix}"], `+"[class*=\" "+`${this.options.selectors.startUpAnimationClassPrefix}"]`))domNode.style.opacity="0";if(this.windowLoadingCoverDomNode)await (0,dist/* fadeOut */.XnV)(this.windowLoadingCoverDomNode)}/**
     * This method handles the given startup effect step.
     * @returns Promise resolving to nothing when startup effects have been
     * finished.
     */async _performStartUpEffects(){const animationPromises=[];let elementNumber=1;// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
while(true){const domNodesToAnimate=this.hostDomNode.querySelectorAll("."+this.options.selectors.startUpAnimationClassPrefix+String(elementNumber));if(domNodesToAnimate.length===0){await Promise.all(animationPromises);this.startUpAnimationIsComplete=true;this.onStartUpAnimationComplete();break}await (0,dist/* timeout */.wRz)(this.options.startUpAnimationElementDelayInMilliseconds);for(const domNode of domNodesToAnimate){domNode.style.removeProperty("opacity");const handler=(0,dist/* fadeIn */.qGl)(domNode);animationPromises.push(handler.then(()=>{handler.resetStyles()}))}elementNumber+=1}}/**
     * This method adds triggers to switch the section.
     */_bindNavigationEvents(){if(dist/* globalContext */.Lz6.window)this.addSecureEventListener(dist/* globalContext */.Lz6.window,"hashchange",event=>{if(this.startUpAnimationIsComplete){const newSectionNameCandidate=location.hash.substring("#".length);void this.switchSection(newSectionNameCandidate,event)}});this._bindScrollToTopButton()}/**
     * Adds trigger to scroll top buttons.
     */_bindScrollToTopButton(){for(const domNode of this.scrollToTopButtonDomNodes||[])this.addSecureEventListener(domNode,"click",event=>{event.preventDefault();(0,dist/* interruptableScrollTo */.CcH)()})}/**
     * Executes the page tracking code.
     */_bindClickTracking(){if(this.options.tracking){for(const domNode of this.hostDomNode.querySelectorAll("a"))this.addSecureEventListener(domNode,"click",event=>{void this._onLinkClick(event)});for(const domNode of this.hostDomNode.querySelectorAll("button"))this.addSecureEventListener(domNode,"click",event=>{void this._onButtonClick(event)})}}/// endregion
// endregion
},website_utilities_defineProperty(_WebsiteUtilities,"_name","WebsiteUtilities"),website_utilities_defineProperty(_WebsiteUtilities,"_defaultOptions",{additionalPageLoadingTimeInMilliseconds:0,startUpAnimationElementDelayInMilliseconds:100,windowLoadedTimeoutAfterDocLoadedInMSec:2000,domain:"auto",sectionNames:{default:"",managed:["home"],unmanaged:[]},selectors:{windowLoadingCover:".wu-window-loading-cover",startUpAnimationClassPrefix:"wu-start-up-animation-number-",top:".wu-header",routerOutlet:".wu-router-outlet",scrollToTopButtons:".wu-scroll-to-top",scrollToTopScrollTopSettledStateClassName:"wu-top-settled",scrollToTopScrollUpStateClassName:"wu-scroll-up",scrollToTopScrollDownStateClassName:"wu-scroll-down",priorityNavigationClassName:"wu-priority-navigation",priorityNavigationOverflowOpenClassName:"wu-priority-navigation--overflow-open",priorityNavigationShowOverflowIndicatorClassName:"wu-priority-navigation--show-overflow-indicator",priorityNavigationOverflowResizingClassName:"wu-priority-navigation--resizing",activeNavigationItemClassName:"wu-priority-navigation__link--active",priorityNavigationListItemHideClassName:"wu-priority-navigation__list__item--hide",priorityNavigationOverflowIndicatorClassName:"wu-priority-navigation__list__overflow-indicator",priorityNavigationOverflowList:".wu-priority-navigation__overflow-list"},minimumNumberOfMenuItems:3,tracking:false}),website_utilities_defineProperty(_WebsiteUtilities,"windowLoaded",false),website_utilities_defineProperty(_WebsiteUtilities,"switchSectionLock",new dist/* Lock */.c_I),_WebsiteUtilities),website_utilities_descriptor=website_utilities_applyDecoratedDescriptor(website_utilities_class.prototype,"options",[website_utilities_dec],{configurable:true,enumerable:true,writable:true,initializer:function(){return{}}}),_descriptor2=website_utilities_applyDecoratedDescriptor(website_utilities_class.prototype,"onStartUpAnimationComplete",[_dec2],{configurable:true,enumerable:true,writable:true,initializer:function(){return dist/* NOOP */.tEg}}),_descriptor3=website_utilities_applyDecoratedDescriptor(website_utilities_class.prototype,"onSwitchSection",[_dec3],{configurable:true,enumerable:true,writable:true,initializer:function(){return dist/* NOOP */.tEg}}),_descriptor4=website_utilities_applyDecoratedDescriptor(website_utilities_class.prototype,"onViewportMovesAwayFromTop",[_dec4],{configurable:true,enumerable:true,writable:true,initializer:function(){return dist/* NOOP */.tEg}}),_descriptor5=website_utilities_applyDecoratedDescriptor(website_utilities_class.prototype,"onViewportMovesToTop",[_dec5],{configurable:true,enumerable:true,writable:true,initializer:function(){return dist/* NOOP */.tEg}}),_descriptor6=website_utilities_applyDecoratedDescriptor(website_utilities_class.prototype,"onUnfocusResponsiveMenu",[_dec6],{configurable:true,enumerable:true,writable:true,initializer:function(){return dist/* NOOP */.tEg}}),_descriptor7=website_utilities_applyDecoratedDescriptor(website_utilities_class.prototype,"onLoaded",[_dec7],{configurable:true,enumerable:true,writable:true,initializer:function(){return dist/* NOOP */.tEg}}),_descriptor8=website_utilities_applyDecoratedDescriptor(website_utilities_class.prototype,"onButtonClick",[_dec8],{configurable:true,enumerable:true,writable:true,initializer:function(){return function(_event){return Promise.resolve(undefined)}}}),_descriptor9=website_utilities_applyDecoratedDescriptor(website_utilities_class.prototype,"onSectionSwitch",[_dec9],{configurable:true,enumerable:true,writable:true,initializer:function(){return function(_sectionName,_oldSectionName,_event){return Promise.resolve(undefined)}}}),_descriptor0=website_utilities_applyDecoratedDescriptor(website_utilities_class.prototype,"onLinkClick",[_dec0],{configurable:true,enumerable:true,writable:true,initializer:function(){return function(_event){return Promise.resolve(undefined)}}}),_descriptor1=website_utilities_applyDecoratedDescriptor(website_utilities_class.prototype,"onTrack",[_dec1],{configurable:true,enumerable:true,writable:true,initializer:function(){return function(_item){return Promise.resolve(undefined)}}}),website_utilities_class);// endregion
const website_utilities_api={component:WebsiteUtilities,register:(tagName=(0,dist/* camelCaseToDelimited */.h1R)(WebsiteUtilities._name))=>{customElements.define(tagName,WebsiteUtilities)}};/* harmony default export */ const index = ((/* unused pure expression or super */ null && (WebsiteUtilities)));if(dist/* globalContext */.Lz6.AUTO_DEFINE_WEBSITE_UTILITIES)website_utilities_api.register();


;// ./node_modules/web-internationalization/dist/index.js
if(typeof dist_window==='undefined'||dist_window===null)var dist_window=(typeof globalThis==='undefined'||globalThis===null)?{}:globalThis;




;// external "clientnode"

;// external "clientnode/property-types"

;// external "web-component-wrapper/decorator"

;// external "web-component-wrapper/Web"

;// ./src/index.ts
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module web-internationalization *//* !
    region header
    [Project page](https://torben.website/web-internationalization)

    Copyright Torben Sickert (info["~at~"]torben.website) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/// region imports
var dist_dec,dist_dec2,dist_dec3,dist_dec4,dist_dec5,dist_class,dist_descriptor,dist_descriptor2,dist_descriptor3,dist_descriptor4,dist_descriptor5,_WebInternationalization;function dist_initializerDefineProperty(e,i,r,l){r&&Object.defineProperty(e,i,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(l):void 0})}function dist_defineProperty(e,r,t){return(r=dist_toPropertyKey(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function dist_toPropertyKey(t){var i=dist_toPrimitive(t,"string");return"symbol"==typeof i?i:i+""}function dist_toPrimitive(t,r){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}function dist_applyDecoratedDescriptor(i,e,r,n,l){var a={};return Object.keys(n).forEach(function(i){a[i]=n[i]}),a.enumerable=!!a.enumerable,a.configurable=!!a.configurable,("value"in a||a.initializer)&&(a.writable=!0),a=r.slice().reverse().reduce(function(r,n){return n(i,e,r)||r},a),l&&void 0!==a.initializer&&(a.value=a.initializer?a.initializer.call(l):void 0,a.initializer=void 0),void 0===a.initializer?(Object.defineProperty(i,e,a),null):a}function dist_initializerWarningHelper(r,e){throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform.")};// endregion
const dist_log=new dist/* Logger */.VyI({name:"web-internationalization"});// region plugins/classes
/**
 * This plugin holds all necessary methods to extend a website for
 * internationalization.
 * @property _defaultOptions - Options extended by the options given to the
 * initializer method.
 * @property _defaultOptions.currentLanguageIndicatorClassName - Class name
 * which marks current language switcher button or link.
 * @property _defaultOptions.currentLanguagePattern - Saves a pattern to
 * recognize current language marker.
 * @property _defaultOptions.default - Initial language to use.
 * @property _defaultOptions.useEffect - Indicates whether a fade effect
 * should be performed.
 * @property _defaultOptions.initial - Initial set language (if omitted it will
 * be determined based on environment information).
 * @property _defaultOptions.languageHashPrefix - Hash prefix to determine
 * current active language by url.
 * @property _defaultOptions.languageMapping - A mapping of alternate language
 * descriptions.
 * @property _defaultOptions.lockDescription - Lock description.
 * @property _defaultOptions.preReplacementLanguagePattern - Pattern to
 * introduce a pre-replacement language node.
 * @property _defaultOptions.replaceDomNodeNames - Tag names which indicates
 * dom nodes which should be replaced.
 * @property _defaultOptions.replacementDomNodeNames - Dom node tag name which
 * should be interpreted as a hidden alternate language node (contains text in
 * another language).
 * @property _defaultOptions.replacementLanguagePattern - Text pattern to
 * introduce a post-replacement node.
 * @property _defaultOptions.selection - List of all supported languages.
 * @property _defaultOptions.selectors - Mapping of necessary dom node
 * selectors.
 * @property _defaultOptions.selectors.knownTranslation - Selector to find
 * known translation sections.
 * @property _defaultOptions.sessionDescription - Description to save current
 * language in session storage.
 * @property _defaultOptions.templateDelimiter - Template delimiter to
 * recognize dynamic content.
 * @property _defaultOptions.templateDelimiter.pre - Delimiter that introduces
 * a dynamic expression.
 * @property _defaultOptions.templateDelimiter.post - Delimiter which finishes
 * a dynamic expression.
 * @property options - Finally configured given options.
 * @property currentLanguage - Saves the current language.
 * @property knownTranslations - Saves a mapping of known language strings and
 * their corresponding translations, to boost language replacements or saves
 * redundant replacements in a dom tree.
 * @property lock - Lock instance when updating dom noes.
 * @property _domNodesToFade - Saves all dom nodes that should be animated.
 * @property _replacements - Saves all text nodes that should be replaced.
 * @property _domNodesWithKnownTranslation - Saves a mapping of known text
 * snippets to their corresponding $-extended dom nodes.
 */let WebInternationalization=(dist_dec=property({type:object}),dist_dec2=property({type:func}),dist_dec3=property({type:func}),dist_dec4=property({type:func}),dist_dec5=property({type:func}),dist_class=(_WebInternationalization=class WebInternationalization extends Web{// region public methods
/// region live-cycle
/**
     * Defines dynamic getter and setter interface and resolves a configuration
     * object. Initializes the map implementation.
     */constructor(){super();/*
            Babel property declaration transformation overwrites defined
            properties at the end of an implicit constructor. So we have to
            redefine them as long as we want to declare expected component
            interface properties to enable static type checks.
        */dist_defineProperty(this,"self",WebInternationalization);// region api properties
dist_initializerDefineProperty(this,"options",dist_descriptor,this);dist_initializerDefineProperty(this,"onEnsure",dist_descriptor2,this);dist_initializerDefineProperty(this,"onSwitch",dist_descriptor3,this);dist_initializerDefineProperty(this,"onEnsured",dist_descriptor4,this);dist_initializerDefineProperty(this,"onSwitched",dist_descriptor5,this);// endregion
dist_defineProperty(this,"switchLanguageButtonDomNodes",null);dist_defineProperty(this,"languageButtonEventHandler",[]);dist_defineProperty(this,"currentLanguage","enUS");dist_defineProperty(this,"knownTranslations",{});dist_defineProperty(this,"lock",new dist/* Lock */.c_I);dist_defineProperty(this,"_domNodesToFade",[]);dist_defineProperty(this,"_replacements",[]);dist_defineProperty(this,"_domNodesWithKnownTranslation",{});this.defineGetterAndSetterInterface()}/**
     * Triggered when ever a given attribute has changed and triggers to update
     * configured dom content.
     * @param name - Attribute name which was updates.
     * @param newValue - New updated value.
     * @returns Returns when attribute has been updated.
     */async onUpdateAttribute(name,newValue){await super.onUpdateAttribute(name,newValue);if(name==="options")this._extendOptions()}/**
     * Updates controlled dom elements.
     * @param reason - Why an update has been triggered.
     * @param resolveRendering - Indicates whether rendering should be resolved
     * finally. Should be set to "false" via super calls in inherited render
     * methods which do further dom manipulations afterward and resolve the
     * rendering process by their own.
     * @returns A promise resolving when rendering has finished. A promise may
     * be needed for classes inheriting from this class.
     */async render(reason="unknown",resolveRendering=true){await super.render(reason,false);if(Object.keys(this.options).length===0)this._extendOptions();this.options.preReplacementLanguagePattern=(0,dist/* format */.GPZ)(this.options.preReplacementLanguagePattern,this.options.replacementLanguagePattern.substring(1,this.options.replacementLanguagePattern.length-1));this.options.lockDescription=(0,dist/* format */.GPZ)(this.options.lockDescription,this.self._name);this.options.sessionDescription=(0,dist/* format */.GPZ)(this.options.sessionDescription,this.self._name);await this.waitForNestedComponentRendering();this._movePreReplacementNodes();this.currentLanguage=this._normalizeLanguage(this.options.default);/*
            NOTE: Only switch current language indicator if we haven't an
            initial language switch which will perform the indicator switch.
        */const newLanguage=this._determineUsefulLanguage();this.refreshLanguageButtonDomNodesBinding();if(this.currentLanguage===newLanguage)await this.refresh();else await this.switch(newLanguage,true);await this.resolveRenderingPromiseIfSet(reason,resolveRendering)}/// endregion
refreshLanguageButtonDomNodesBinding(){this.switchLanguageButtonDomNodes=this.hostDomNode.querySelectorAll(`a[href^="#${this.options.languageHashPrefix}"]`);const determineSelection=this.options.selection.length===0;for(const deregister of this.languageButtonEventHandler)deregister();this.languageButtonEventHandler=[];for(const domNode of this.switchLanguageButtonDomNodes){if(determineSelection)this.options.selection.push(domNode.getAttribute("href").substring(`#${this.options.languageHashPrefix}`.length));const handler=event=>{event.preventDefault();const url=event.target?.getAttribute("href");if(url)void this.switch(url.substring(this.options.languageHashPrefix.length+1))};this.languageButtonEventHandler.push(this.addSecureEventListener(domNode,"click",handler))}}/**
     * Switches the current language to a given language. This method is
     * mutually synchronized.
     * @param language - New language as string or "true". If set to "true" it
     * indicates that the dom tree should be checked again current language to
     * ensure every text node has the right content.
     * @param ensure - Indicates if a switch effect should be avoided.
     * @returns Returns the current instance wrapped in a promise.
     */async switch(language,ensure=false){if(language!==true&&this.options.selection.length&&!this.options.selection.includes(language)){dist_log.debug(`"${language}" isn't one of the allowed languages.`);return}await this.lock.acquire(this.options.lockDescription);if(language===true){ensure=true;language=this.currentLanguage}else language=this._normalizeLanguage(language);if(ensure||this.currentLanguage!==language){let actionDescription="Switch to";if(ensure)actionDescription="Ensure";dist_log.debug(`${actionDescription} "${language}".`);this._switchCurrentLanguageIndicator(language);if(ensure)await this.onEnsure(language);else await this.onSwitch(this.currentLanguage,language);this._domNodesToFade=[];this._replacements=[];this._collectDomNodesToReplace(language,ensure);await this._handleSwitchEffect(language,ensure);return}dist_log.debug(`"${language}" is already current selected language.`);void this.lock.release(this.options.lockDescription)}/**
     * Ensures current selected language.
     * @returns Promise resolving to nothing when switching as finished.
     */refresh(){this._movePreReplacementNodes();return this.switch(true)}/// endregion
// region protected methods
/**
     * Extends given options by default options.
     */_extendOptions(){/*
            NOTE: Using the internal setter avoids triggering an additional
            rendering.
        */this.setPropertyValue("options",(0,dist/* extend */.X$i)(true,{},this.self._defaultOptions,this.options))}/**
     * Depending on activated switching effect this method initialized the
     * effect of replace all text string directly.
     * @param language - New language to use.
     * @param ensure - Indicates if current language should be ensured again
     * every text node content.
     * @returns Returns the current instance wrapped in a promise.
     */async _handleSwitchEffect(language,ensure){const oldLanguage=this.currentLanguage;if(!ensure&&this.options.useEffect&&this._domNodesToFade.length>0){await Promise.all(this._domNodesToFade.map(domNode=>{const handler=(0,dist/* fadeOut */.XnV)(domNode);return handler.then(()=>{handler.resetStyles()})}));this._switchLanguage(language);await Promise.all(this._domNodesToFade.map(domNode=>{const handler=(0,dist/* fadeIn */.qGl)(domNode);return handler.then(()=>{handler.resetStyles()})}));this.onSwitched(oldLanguage,language);void this.lock.release(this.options.lockDescription);return}this._switchLanguage(language);if(ensure)this.onEnsured(language);else this.onSwitched(oldLanguage,language);void this.lock.release(this.options.lockDescription)}/**
     * Moves pre-replacement dom nodes into the next dom node behind the
     * translation text to use the same translation algorithm for both.
     */_movePreReplacementNodes(){for(const domNode of (0,dist/* getAll */.UKu)(this.hostDomNode)){const nodeName=domNode.nodeName.toLowerCase();if(this.options.replacementDomNodeNames.includes(nodeName)){if(!["#comment","#text"].includes(nodeName))// NOTE: Hide replacement dom nodes.
domNode.classList.add(this.options.selectors.hideClassName);const regularExpression=new RegExp(this.options.preReplacementLanguagePattern);const match=domNode.textContent?.match(regularExpression);if(domNode.textContent&&match&&match[0]){domNode.textContent=domNode.textContent.replace(regularExpression,match[1]);if(domNode.parentElement){let selfFound=false;for(const subDomNode of (0,dist/* getAll */.UKu)(domNode.parentElement)){if(selfFound&&(0,dist/* getText */.q4_)(subDomNode,true).length>0){subDomNode.appendChild(domNode);break}if(domNode===subDomNode)selfFound=true}}}}}}/**
     * Collects all text nodes that should be replaced later.
     * @param language - New language to use.
     * @param ensure - Indicates if the whole dom should be checked again
     * current language to ensure every text node has right content.
     */_collectDomNodesToReplace(language,ensure){let currentDomNodeToTranslate=null;let currentLanguageDomNode=null;this.knownTranslations={};for(const domNode of (0,dist/* getAll */.UKu)(this.hostDomNode)){const nodeName=domNode.nodeName.toLowerCase();const nodeTextContent=(0,dist/* getText */.q4_)(domNode,true);// NOTE: We skip empty and nested nodes.
if(this._shouldSkipDomNode(domNode,nodeTextContent,currentDomNodeToTranslate))continue;if(this.options.replaceDomNodeNames.includes(nodeName))currentDomNodeToTranslate=domNode;else if(this.options.alternativeDomNodeNames.includes(nodeName)){if(!domNode.hasAttribute("lang"))this._initializeCurrentLanguageDomNode(domNode,ensure);else if(domNode.getAttribute("lang")===language)this._processAlternativeDomNode(domNode,language,ensure,currentLanguageDomNode)}else if(currentDomNodeToTranslate){if(this.options.replacementDomNodeNames.includes(nodeName)){;({domNodeToTranslate:currentDomNodeToTranslate,languageDomNode:currentLanguageDomNode}=this._processReplacementDomNode(domNode,nodeName,language,ensure,currentDomNodeToTranslate,currentLanguageDomNode));continue}currentDomNodeToTranslate=null;currentLanguageDomNode=null}}this._registerKnownTextNodes()}/**
     * Determines whether a given dom node should be skipped during
     * translation collection.
     * @param domNode - The dom node to evaluate.
     * @param nodeTextContent - Pre-computed text content of the node.
     * @param currentDomNodeToTranslate - The currently tracked translation
     * ancestor node.
     * @returns Returns true if the node should be skipped.
     */_shouldSkipDomNode(domNode,nodeTextContent,currentDomNodeToTranslate){return nodeTextContent.length===0&&(domNode.nodeType!==Node.COMMENT_NODE||(domNode.nodeValue||"").trim()==="")||Boolean(currentDomNodeToTranslate?.contains(domNode))||Boolean((0,dist/* closest */.kpl)(domNode,this.options.replaceDomNodeNames.concat(this.options.replacementDomNodeNames).join(","),true))}/**
     * Processes an alternative dom node by finding its active sibling,
     * ensuring it has the necessary attributes and registering it for
     * replacement.
     * @param domNode - The alternative language dom node.
     * @param language - New language to use.
     * @param ensure - Indicates if current language should be ensured again
     * every text node content.
     * @param currentLanguageDomNode - The currently tracked language indicator
     * node.
     */_processAlternativeDomNode(domNode,language,ensure,currentLanguageDomNode){/*
            When dealing with alternative dom nodes we do not rely on dom node
            positions to keep them stable. Therefore, we identify the current
            dom node to translate by going through all siblings.
         */let activeSibling=null;for(const candidate of domNode.parentElement.querySelectorAll(this.options.alternativeDomNodeNames.join(",")))if(candidate.hasAttribute("active")||!candidate.hasAttribute("lang")){activeSibling=candidate;break}if(!activeSibling)return;this._initializeCurrentLanguageDomNode(activeSibling,ensure);this._registerTextNodeToChange(activeSibling,domNode,domNode.innerHTML,currentLanguageDomNode)}_initializeCurrentLanguageDomNode(domNode,ensure){if(!domNode.hasAttribute("active"))domNode.setAttribute("active","");if(!domNode.hasAttribute("lang"))domNode.setAttribute("lang",ensure?this.options.default||this.currentLanguage:this.currentLanguage)}/**
     * Processes a replacement dom node like comment or lang-replacement
     * element and updates translation state accordingly.
     * @param domNode - The replacement dom node.
     * @param nodeName - Lowercase node name of the replacement node.
     * @param language - New language to use.
     * @param ensure - Indicates if current language should be ensured again
     * every text node content.
     * @param currentDomNodeToTranslate - The currently tracked node whose
     * content is to be replaced.
     * @param currentLanguageDomNode - The currently tracked language indicator
     * node.
     * @returns Updated references for the tracked translation and language
     * indicator nodes.
     */_processReplacementDomNode(domNode,nodeName,language,ensure,currentDomNodeToTranslate,currentLanguageDomNode){const content=nodeName==="#comment"?domNode.textContent:domNode.innerHTML;const match=content.match(new RegExp(this.options.replacementLanguagePattern));if(Array.isArray(match)&&match[1]===language){// Save known text translations.
this.knownTranslations[(0,dist/* getText */.q4_)(currentDomNodeToTranslate,true).join(" ")]=match[2].trim();currentLanguageDomNode=this._ensureLastTextNodeHavingLanguageIndicator(currentDomNodeToTranslate,currentLanguageDomNode,ensure);this._registerTextNodeToChange(currentDomNodeToTranslate,domNode,match[2],currentLanguageDomNode);return{domNodeToTranslate:null,languageDomNode:null}}if(domNode.textContent.match(new RegExp(this.options.currentLanguagePattern)))currentLanguageDomNode=domNode;return{domNodeToTranslate:currentDomNodeToTranslate,languageDomNode:currentLanguageDomNode}}/**
     * Iterates all text nodes in language known area with known translations.
     */_registerKnownTextNodes(){this._domNodesWithKnownTranslation={};for(const domNode of this.hostDomNode.querySelectorAll(this.options.selectors.knownTranslation))for(const node of (0,dist/* getAll */.UKu)(domNode)){const content=(0,dist/* getText */.q4_)(node).join(" ");// NOTE: We skip empty and nested text nodes.
if(content&&!this.options.replaceDomNodeNames.includes(node.nodeName.toLowerCase())&&!(0,dist/* closest */.kpl)(node,this.options.replaceDomNodeNames.join(","),true)&&Object.prototype.hasOwnProperty.call(this.knownTranslations,content)){this._domNodesToFade.push(node.parentElement);if(Object.prototype.hasOwnProperty.call(this._domNodesWithKnownTranslation,this.knownTranslations[content]))this._domNodesWithKnownTranslation[this.knownTranslations[content]].push(node);else this._domNodesWithKnownTranslation[this.knownTranslations[content]]=[node]}}}/**
     * Normalizes a given language string.
     * @param language - New language to use.
     * @returns Returns the normalized version of given language.
     */_normalizeLanguage(language){for(const[otherLanguage,aliases]of Object.entries(this.options.languageMapping)){if(!aliases.includes(otherLanguage.toLowerCase()))aliases.push(otherLanguage.toLowerCase());if(aliases.includes(language.toLowerCase()))return otherLanguage}return this.options.default}/**
     * Determines a useful initial language depending on session and browser
     * settings.
     * @returns Returns the determined language.
     */_determineUsefulLanguage(){let result;if(this.options.initial)result=this.options.initial;else if(Object.prototype.hasOwnProperty.call(dist/* globalContext */.Lz6,"window"))if(dist/* globalContext */.Lz6.window?.localStorage.getItem(this.options.sessionDescription)){result=dist/* globalContext */.Lz6.window.localStorage.getItem(this.options.sessionDescription);dist_log.debug(`Determine "${result}", because of local storage`,"information.")}else if(dist/* globalContext */.Lz6.window?.navigator.language){result=dist/* globalContext */.Lz6.window.navigator.language;dist_log.debug(`Determine "${result}", because of browser settings.`)}if(!result){result=this.options.default;dist_log.debug(`Determine "${result}", because of default option.`)}result=this._normalizeLanguage(result);if(this.options.selection.length&&!this.options.selection.includes(result)){dist_log.debug(`"${result}" isn't one of the allowed languages. Set`,`language to "${this.options.selection[0]}".`);result=this.options.selection[0]}if(dist/* globalContext */.Lz6.window?.localStorage)dist/* globalContext */.Lz6.window.localStorage.setItem(this.options.sessionDescription,result);return result}/**
     * Registers a text node to change its content with a given replacement.
     * @param domNodeToTranslate - Text node with content to
     * translate.
     * @param domNodeToReplaceWith - A node with replacement content.
     * @param textToReplaceWith - Text content to use as replacement.
     * @param currentLanguageDomNode - A potential given text node indicating
     * the language of given text node.
     */_registerTextNodeToChange(domNodeToTranslate,domNodeToReplaceWith,textToReplaceWith,currentLanguageDomNode){this._domNodesToFade.push(domNodeToTranslate.parentElement);if(domNodeToReplaceWith)this._replacements.push({domNodeToTranslate,domNodeToReplaceWith,textToReplaceWith,currentLanguageDomNode})}/**
     * Checks if the last text node has a language indication comment node.
     * This function is called after each parsed dom text node.
     * @param lastTextNodeToTranslate - Last text node to check.
     * @param lastLanguageDomNode - A potential given language indication
     * commend node.
     * @param ensure - Indicates if current language should be ensured again
     * every text node content.
     * @returns Returns the retrieved or newly created language indicating
     * comment node.
     */_ensureLastTextNodeHavingLanguageIndicator(lastTextNodeToTranslate,lastLanguageDomNode,ensure){if(lastTextNodeToTranslate&&!lastLanguageDomNode){/*
                Last text node doesn't have a current language indicating dom
                node.
            */let currentLocalLanguage=this.currentLanguage;if(ensure)currentLocalLanguage=this.options.default||this.currentLanguage;lastLanguageDomNode=dist/* globalContext */.Lz6.document?.createComment(currentLocalLanguage)||null;if(lastLanguageDomNode)lastTextNodeToTranslate.after(lastLanguageDomNode)}return lastLanguageDomNode}/**
     * Performs the low-level text replacements for switching to a given
     * language.
     * @param language - The new language to switch to.
     */_switchLanguage(language){for(const replacement of this._replacements){const currentText=this._getCurrentNodeText(replacement.domNodeToTranslate);const trimmedText=currentText.trim();if(!this.options.templateDelimiter||!trimmedText.endsWith(this.options.templateDelimiter.post)&&this.options.templateDelimiter.post){const currentLanguageDomNode=this._resolveCurrentLanguageDomNode(replacement);const currentLanguage=currentLanguageDomNode.textContent;if(currentLanguage&&language===currentLanguage)dist_log.warn(`Text node "${replacement.textToReplaceWith}" is`,`marked as "${currentLanguage}" and has same`,"translation language as it already is.");// Move markup to be replaced next its parent node.
const nodeName=replacement.domNodeToReplaceWith.nodeName.toLowerCase();if(this.options.alternativeDomNodeNames.includes(nodeName)){;replacement.domNodeToReplaceWith.setAttribute("active","");replacement.domNodeToTranslate.removeAttribute("active");continue}const newNode=this._createBackupNode(nodeName,currentLanguage,currentText,replacement.domNodeToTranslate);replacement.domNodeToTranslate.after(newNode);replacement.domNodeToTranslate.after(dist/* globalContext */.Lz6.document.createComment(language));this._applyTextReplacement(replacement);currentLanguageDomNode.remove();replacement.domNodeToReplaceWith.remove()}}this._updateKnownTextNodes();if(dist/* globalContext */.Lz6.localStorage)dist/* globalContext */.Lz6.localStorage.setItem(this.options.sessionDescription,language);this.currentLanguage=language}/**
     * Returns the current text content of a dom node, preferring innerHTML
     * over textContent when available.
     * @param domNode - The dom node to read the text content from.
     * @returns The current text content of the dom node.
     */_getCurrentNodeText(domNode){return"innerHTML"in domNode?domNode.innerHTML:domNode.textContent}/**
     * Resolves the current language dom node for a given replacement. If the
     * node was not set initially it is determined by iterating through the
     * siblings and cached on the replacement object.
     * @param replacement - The replacement whose language dom node should be
     * resolved.
     * @returns The resolved language indicator dom node or null.
     */_resolveCurrentLanguageDomNode(replacement){if(replacement.currentLanguageDomNode)return replacement.currentLanguageDomNode;/*
            Language dom node wasn't present initially. So we have to
            determine it now.
        */let currentLanguageDomNode=document.body;let currentDomNodeFound=false;for(const domNode of (0,dist/* getAll */.UKu)(replacement.domNodeToTranslate.parentElement)){if(currentDomNodeFound){replacement.currentLanguageDomNode=currentLanguageDomNode=domNode;break}if(domNode===replacement.domNodeToTranslate)currentDomNodeFound=true}return currentLanguageDomNode}/**
     * Creates a backup node for the current dom node content before the
     * replacement is applied. Returns either a comment node or an element
     * node depending on `nodeName`.
     * @param nodeName - Lowercase node name of the replacement node.
     * @param currentLanguage - Current language string used as prefix.
     * @param currentText - Text content of the node to back up.
     * @param domNodeToTranslate - The dom node whose children are moved into
     * the backup element (for non-comment nodes).
     * @returns The created backup node.
     */_createBackupNode(nodeName,currentLanguage,currentText,domNodeToTranslate){if(nodeName==="#comment")return dist/* globalContext */.Lz6.document.createComment(`${currentLanguage}:${currentText}`);const newNode=dist/* globalContext */.Lz6.document.createElement(nodeName);newNode.appendChild(dist/* globalContext */.Lz6.document.createTextNode(`${currentLanguage}:`));newNode.classList.add(this.options.selectors.hideClassName);// NOTE: We need to use "Array.from" to copy the list.
for(const childNode of Array.from(domNodeToTranslate.childNodes))newNode.appendChild(childNode);return newNode}/**
     * Applies the actual text replacement to the target dom node. Moves
     * child nodes from the replacement node or sets innerHTML/textContent
     * directly depending on the node type.
     * @param replacement - Replacement object containing source, target and
     * replacement text information.
     */_applyTextReplacement(replacement){if("innerHTML"in replacement.domNodeToTranslate){if(replacement.domNodeToReplaceWith.nodeName.toLowerCase()==="#comment")replacement.domNodeToTranslate.innerHTML=replacement.textToReplaceWith;else{let languageRemoved=false;// NOTE: We need to use "Array.from" to copy the list.
for(const childNode of Array.from(replacement.domNodeToReplaceWith.childNodes)){if(!languageRemoved){childNode.textContent=childNode.textContent.replace(/^[a-z]{2}[A-Z]{2}:/,"");languageRemoved=true}replacement.domNodeToTranslate.appendChild(childNode)}}}else replacement.domNodeToTranslate.textContent=replacement.textToReplaceWith}/**
     * Updates all dom nodes that have a known translation to their translated
     * text content.
     */_updateKnownTextNodes(){for(const[content,domNodes]of Object.entries(this._domNodesWithKnownTranslation))for(const domNode of domNodes)domNode.textContent=content}/**
     * Switches the current language indicator in language switch triggered dom
     * nodes.
     * @param language - The new language to switch to.
     */_switchCurrentLanguageIndicator(language){for(const domNode of this.hostDomNode.querySelectorAll(`a[href="#${this.options.languageHashPrefix}`+`${this.currentLanguage}"].`+this.options.currentLanguageIndicatorClassName))domNode.classList.remove(this.options.currentLanguageIndicatorClassName);for(const domNode of this.hostDomNode.querySelectorAll(`a[href="#${this.options.languageHashPrefix}${language}"]`))domNode.classList.add(this.options.currentLanguageIndicatorClassName)}// endregion
},dist_defineProperty(_WebInternationalization,"_name","WebInternationalization"),dist_defineProperty(_WebInternationalization,"_defaultOptions",{currentLanguageIndicatorClassName:"current",currentLanguagePattern:"^[a-z]{2}[A-Z]{2}$",default:"enUS",useEffect:true,initial:null,languageHashPrefix:"lang-",languageMapping:{deDE:["de","de_de","de-de","german","deutsch"],enUS:["en","en_us","en-us"],enEN:["en_en","en-en","english"],frFR:["fr","fr_fr","fr-fr","french"]},lockDescription:"{1}Switch",preReplacementLanguagePattern:"^\\|({1})$",alternativeDomNodeNames:["lang-alternative"],replaceDomNodeNames:["#text","lang-replace"],replacementDomNodeNames:["#comment","lang-replacement"],replacementLanguagePattern:"^([a-z]{2}[A-Z]{2}):((.|\\s)*)$",selection:[],selectors:{knownTranslation:".web-internationalization-generated-content",hideClassName:"wi-hide"},sessionDescription:"{1}",templateDelimiter:{pre:"{{",post:"}}"}}),_WebInternationalization),dist_descriptor=dist_applyDecoratedDescriptor(dist_class.prototype,"options",[dist_dec],{configurable:true,enumerable:true,writable:true,initializer:function(){return{}}}),dist_descriptor2=dist_applyDecoratedDescriptor(dist_class.prototype,"onEnsure",[dist_dec2],{configurable:true,enumerable:true,writable:true,initializer:function(){return dist/* NOOP */.tEg}}),dist_descriptor3=dist_applyDecoratedDescriptor(dist_class.prototype,"onSwitch",[dist_dec3],{configurable:true,enumerable:true,writable:true,initializer:function(){return dist/* NOOP */.tEg}}),dist_descriptor4=dist_applyDecoratedDescriptor(dist_class.prototype,"onEnsured",[dist_dec4],{configurable:true,enumerable:true,writable:true,initializer:function(){return dist/* NOOP */.tEg}}),dist_descriptor5=dist_applyDecoratedDescriptor(dist_class.prototype,"onSwitched",[dist_dec5],{configurable:true,enumerable:true,writable:true,initializer:function(){return dist/* NOOP */.tEg}}),dist_class);// endregion
const dist_api={component:WebInternationalization,register:(tagName=(0,dist/* camelCaseToDelimited */.h1R)(WebInternationalization._name))=>{customElements.define(tagName,WebInternationalization)}};/* harmony default export */ const src = ((/* unused pure expression or super */ null && (WebInternationalization)));if(dist/* globalContext */.Lz6.AUTO_DEFINE_WEB_INTERNATIONALIZATION)dist_api.register();


;// ./source/index.ts
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module web-documentation *//* !
    region header
    [Project page](https://github.com/web-documentation)

    Copyright Torben Sickert (info["~at~"]torben.website) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/// region imports
function source_typeof(o){"@babel/helpers - typeof";return source_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},source_typeof(o)}var source_dec,source_dec2,source_class,source_descriptor,source_descriptor2,_WebDocumentation;function _regeneratorValues(e){if(null!=e){var t=e["function"==typeof Symbol&&Symbol.iterator||"@@iterator"],r=0;if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length))return{next:function next(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}}}throw new TypeError(source_typeof(e)+" is not iterable")};function source_createForOfIteratorHelper(r,e){var t="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(!t){if(Array.isArray(r)||(t=source_unsupportedIterableToArray(r))||e&&r&&"number"==typeof r.length){t&&(r=t);var _n=0,F=function F(){};return{s:F,n:function n(){return _n>=r.length?{done:!0}:{done:!1,value:r[_n++]}},e:function e(r){throw r},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,u=!1;return{s:function s(){t=t.call(r)},n:function n(){var r=t.next();return a=r.done,r},e:function e(r){u=!0,o=r},f:function f(){try{a||null==t.return||t.return()}finally{if(u)throw o}}}}function source_unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return source_arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?source_arrayLikeToArray(r,a):void 0}}function source_arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}function source_regenerator(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var e,t,r="function"==typeof Symbol?Symbol:{},n=r.iterator||"@@iterator",o=r.toStringTag||"@@toStringTag";function i(r,n,o,i){var c=n&&n.prototype instanceof Generator?n:Generator,u=Object.create(c.prototype);return source_regeneratorDefine2(u,"_invoke",function(r,n,o){var i,c,u,f=0,p=o||[],y=!1,G={p:0,n:0,v:e,a:d,f:d.bind(e,4),d:function d(t,r){return i=t,c=0,u=e,G.n=r,a}};function d(r,n){for(c=r,u=n,t=0;!y&&f&&!o&&t<p.length;t++){var o,i=p[t],d=G.p,l=i[2];r>3?(o=l===n)&&(u=i[(c=i[4])?5:(c=3,3)],i[4]=i[5]=e):i[0]<=d&&((o=r<2&&d<i[1])?(c=0,G.v=n,G.n=i[1]):d<l&&(o=r<3||i[0]>n||n>l)&&(i[4]=r,i[5]=n,G.n=l,c=0))}if(o||r>1)return a;throw y=!0,n}return function(o,p,l){if(f>1)throw TypeError("Generator is already running");for(y&&1===p&&d(p,l),c=p,u=l;(t=c<2?e:u)||!y;){i||(c?c<3?(c>1&&(G.n=-1),d(c,u)):G.n=u:G.v=u);try{if(f=2,i){if(c||(o="next"),t=i[o]){if(!(t=t.call(i,u)))throw TypeError("iterator result is not an object");if(!t.done)return t;u=t.value,c<2&&(c=0)}else 1===c&&(t=i.return)&&t.call(i),c<2&&(u=TypeError("The iterator does not provide a '"+o+"' method"),c=1);i=e}else if((t=(y=G.n<0)?u:r.call(n,G))!==a)break}catch(t){i=e,c=1,u=t}finally{f=1}}return{value:t,done:y}}}(r,o,i),!0),u}var a={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}t=Object.getPrototypeOf;var c=[][n]?t(t([][n]())):(source_regeneratorDefine2(t={},n,function(){return this}),t),u=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(c);function f(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,GeneratorFunctionPrototype):(e.__proto__=GeneratorFunctionPrototype,source_regeneratorDefine2(e,o,"GeneratorFunction")),e.prototype=Object.create(u),e}return GeneratorFunction.prototype=GeneratorFunctionPrototype,source_regeneratorDefine2(u,"constructor",GeneratorFunctionPrototype),source_regeneratorDefine2(GeneratorFunctionPrototype,"constructor",GeneratorFunction),GeneratorFunction.displayName="GeneratorFunction",source_regeneratorDefine2(GeneratorFunctionPrototype,o,"GeneratorFunction"),source_regeneratorDefine2(u),source_regeneratorDefine2(u,o,"Generator"),source_regeneratorDefine2(u,n,function(){return this}),source_regeneratorDefine2(u,"toString",function(){return"[object Generator]"}),(source_regenerator=function _regenerator(){return{w:i,m:f}})()}function source_regeneratorDefine2(e,r,n,t){var i=Object.defineProperty;try{i({},"",{})}catch(e){i=0}source_regeneratorDefine2=function _regeneratorDefine(e,r,n,t){function o(r,n){source_regeneratorDefine2(e,r,function(e){return this._invoke(r,n,e)})}r?i?i(e,r,{value:n,enumerable:!t,configurable:!t,writable:!t}):e[r]=n:(o("next",0),o("throw",1),o("return",2))},source_regeneratorDefine2(e,r,n,t)}function source_asyncGeneratorStep(n,t,e,r,o,a,c){try{var i=n[a](c),u=i.value}catch(n){return void e(n)}i.done?t(u):Promise.resolve(u).then(r,o)}function source_asyncToGenerator(n){return function(){var t=this,e=arguments;return new Promise(function(r,o){var a=n.apply(t,e);function _next(n){source_asyncGeneratorStep(a,r,o,_next,_throw,"next",n)}function _throw(n){source_asyncGeneratorStep(a,r,o,_next,_throw,"throw",n)}_next(void 0)})}}function source_initializerDefineProperty(e,i,r,l){r&&Object.defineProperty(e,i,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(l):void 0})}function source_classCallCheck(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}function source_defineProperties(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,source_toPropertyKey(o.key),o)}}function source_createClass(e,r,t){return r&&source_defineProperties(e.prototype,r),t&&source_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function source_inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&source_setPrototypeOf(t,e)}function source_setPrototypeOf(t,e){return source_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},source_setPrototypeOf(t,e)}function source_callSuper(t,o,e){return o=source_getPrototypeOf(o),source_possibleConstructorReturn(t,source_isNativeReflectConstruct()?Reflect.construct(o,e||[],source_getPrototypeOf(t).constructor):o.apply(t,e))}function source_possibleConstructorReturn(t,e){if(e&&("object"==source_typeof(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return source_assertThisInitialized(t)}function source_assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function source_isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(t){}return(source_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}function _superPropGet(t,o,e,r){var p=_get(source_getPrototypeOf(1&r?t.prototype:t),o,e);return 2&r&&"function"==typeof p?function(t){return p.apply(e,t)}:p}function _get(){return _get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var p=_superPropBase(e,t);if(p){var n=Object.getOwnPropertyDescriptor(p,t);return n.get?n.get.call(arguments.length<3?e:r):n.value}},_get.apply(null,arguments)}function _superPropBase(t,o){for(;!{}.hasOwnProperty.call(t,o)&&null!==(t=source_getPrototypeOf(t)););return t}function source_getPrototypeOf(t){return source_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},source_getPrototypeOf(t)}function source_defineProperty(e,r,t){return(r=source_toPropertyKey(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function source_toPropertyKey(t){var i=source_toPrimitive(t,"string");return"symbol"==source_typeof(i)?i:i+""}function source_toPrimitive(t,r){if("object"!=source_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=source_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}function source_applyDecoratedDescriptor(i,e,r,n,l){var a={};return Object.keys(n).forEach(function(i){a[i]=n[i]}),a.enumerable=!!a.enumerable,a.configurable=!!a.configurable,("value"in a||a.initializer)&&(a.writable=!0),a=r.slice().reverse().reduce(function(r,n){return n(i,e,r)||r},a),l&&void 0!==a.initializer&&(a.value=a.initializer?a.initializer.call(l):void 0,a.initializer=void 0),void 0===a.initializer?(Object.defineProperty(i,e,a),null):a}function source_initializerWarningHelper(r,e){throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform.")};// endregion
var source_log=new dist/* Logger */.VyI({name:"web-documentation"});// region plugins/classes
/**
 * This plugin holds all needed methods to extend a whole documentation site.
 * @property _defaultOptions - Options extended by the options given to the
 * initializer method.
 * @property _defaultOptions.selectors - Object with a mapping of needed dom
 * node descriptions to their corresponding selectors.
 * @property _defaultOptions.showExample - Options object to configure code
 * example representation.
 * @property _defaultOptions.showExample.pattern - Regular expression to
 * introduce a code example section.
 * @property _defaultOptions.showExample.domNodeName - Dom node name to
 * indicate a declarative example section.
 * @property _defaultOptions.showExample.htmlWrapper - HTML example wrapper.
 * @property _defaultOptions.section - Configuration object for section
 * switches between the main page and legal notes descriptions.
 * @property self - Reference to this class.
 * @property doRender - Indicates that this components should evaluate given
 * body content.
 * @property options - Finally configured given options.
 */var WebDocumentation=(source_dec=property({type:object}),source_dec2=property({type:func}),source_class=(_WebDocumentation=/*#__PURE__*/function(_Web){// endregion
// region public
/// region live-cycle
/**
     * Defines dynamic getter and setter interface and resolves configuration
     * object. Initializes the map implementation.
     */function WebDocumentation(){var _this;source_classCallCheck(this,WebDocumentation);_this=source_callSuper(this,WebDocumentation);/*
            Babels property declaration transformation overwrites defined
            properties at the end of an implicit constructor. So we have to
            redefined them as long as we want to declare expected component
            interface properties to enable static type checks.
        */source_defineProperty(_this,"self",WebDocumentation);// region api properties
source_initializerDefineProperty(_this,"options",source_descriptor,_this);source_initializerDefineProperty(_this,"onExamplesLoaded",source_descriptor2,_this);// endregion
// region domNodes
source_defineProperty(_this,"aboutThisWebsiteLinkDomNodes",null);source_defineProperty(_this,"aboutThisWebsiteSectionDomNode",null);source_defineProperty(_this,"codeDomNodes",null);source_defineProperty(_this,"headlineDomNodes",null);source_defineProperty(_this,"tableOfContentDomNode",null);source_defineProperty(_this,"tableOfContentLinkDomNodes",null);_this.defineGetterAndSetterInterface();return _this}/**
     * Triggered when ever a given attribute has changed and triggers to update
     * configured dom content.
     * @param name - Attribute name which was updates.
     * @param newValue - New updated value.
     * @returns A promise resolving when attribute has been updated.
     */source_inherits(WebDocumentation,_Web);return source_createClass(WebDocumentation,[{key:"onUpdateAttribute",value:(function(){var _onUpdateAttribute=source_asyncToGenerator(/*#__PURE__*/source_regenerator().m(function _callee(name,newValue){return source_regenerator().w(function(_context){while(1)switch(_context.n){case 0:_context.n=1;return _superPropGet(WebDocumentation,"onUpdateAttribute",this,3)([name,newValue]);case 1:if(name==="options")this._extendOptions();case 2:return _context.a(2)}},_callee,this)}));function onUpdateAttribute(_x,_x2){return _onUpdateAttribute.apply(this,arguments)}return onUpdateAttribute}()/**
     * Updates controlled dom elements.
     * @param reason - Why an update has been triggered.
     * @param resolveRendering - Indicates whether rendering should be resolved
     * finally. Should be set to "false" via super calls in inherited render
     * methods which do further dom manipulations afterward and resolve the
     * rendering process by their own.
     * @returns A promise resolving when rendering has finished. A promise may
     * be needed for classes inheriting from this class.
     */)},{key:"render",value:(function(){var _render=source_asyncToGenerator(/*#__PURE__*/source_regenerator().m(function _callee2(reason,resolveRendering){return source_regenerator().w(function(_context2){while(1)switch(_context2.n){case 0:if(reason===void 0){reason="unknown"}if(resolveRendering===void 0){resolveRendering=true}_context2.n=1;return _superPropGet(WebDocumentation,"render",this,3)([reason,false]);case 1:if(Object.keys(this.options).length===0)this._extendOptions();_context2.n=2;return this.waitForNestedComponentRendering();case 2:this.grabDomNodes();/*
            NOTE: We have to render examples first to avoid having dots in
            example code.
        */_context2.n=3;return this._showExamples();case 3:this._makeCodeEllipsis();this._generateTableOfContentsLinks();_context2.n=4;return this.resolveRenderingPromiseIfSet(reason,resolveRendering);case 4:return _context2.a(2)}},_callee2,this)}));function render(_x3,_x4){return _render.apply(this,arguments)}return render}()/// endregion
)},{key:"grabDomNodes",value:function grabDomNodes(){this.aboutThisWebsiteLinkDomNodes=this.hostDomNode.querySelectorAll(this.options.selectors.aboutThisWebsiteLink);this.aboutThisWebsiteSectionDomNode=this.hostDomNode.querySelector(this.options.selectors.aboutThisWebsiteSection);this.codeDomNodes=this.hostDomNode.querySelectorAll(this.options.selectors.code);this.headlineDomNodes=this.hostDomNode.querySelectorAll(this.options.selectors.headlines);this.tableOfContentDomNode=this.hostDomNode.querySelector(this.options.selectors.tableOfContent)}// endregion
// region protected methods
/**
     * Extends given options by default options.
     */},{key:"_extendOptions",value:function _extendOptions(){/*
            NOTE: Using the internal setter avoids to trigger an additinal
            rendering.
        */this.setPropertyValue("options",(0,dist/* extend */.X$i)(true,{},this.self._defaultOptions,this.options))}/**
     * Generates a table of contents via creating links referring to headlines.
     */},{key:"_generateTableOfContentsLinks",value:function _generateTableOfContentsLinks(){var _this$headlineDomNode,_this2=this;if(!this.tableOfContentDomNode)return;var listItemsHTML="";var level=0;var firstLevel=0;var first=true;var _iterator=source_createForOfIteratorHelper((_this$headlineDomNode=this.headlineDomNodes)!==null&&_this$headlineDomNode!==void 0?_this$headlineDomNode:[]),_step;try{for(_iterator.s();!(_step=_iterator.n()).done;){var _domNode$getAttribute;var domNode=_step.value;if((0,dist/* closest */.kpl)(domNode,".show-example-wrapper"))return;var newLevel=parseInt(domNode.nodeName.replace(/\D/g,""));if(first)firstLevel=newLevel;if(newLevel>level)listItemsHTML+="<ul>";else if(newLevel<level)listItemsHTML+="</ul>";listItemsHTML+="\n                <li>\n                    <a href=\"#".concat((_domNode$getAttribute=domNode.getAttribute("id"))!==null&&_domNode$getAttribute!==void 0?_domNode$getAttribute:"unknown","\">\n                        ").concat(domNode.innerText,"\n                    </a>\n                </li>\n            ");level=newLevel;first=false}// Close remaining inner lists.
}catch(err){_iterator.e(err)}finally{_iterator.f()}while(level<firstLevel){listItemsHTML+="</ul>";level+=1}var _iterator2=source_createForOfIteratorHelper(this.tableOfContentDomNode.childNodes),_step2;try{for(_iterator2.s();!(_step2=_iterator2.n()).done;){var _domNode=_step2.value;if(_domNode.nodeType===Node.COMMENT_NODE&&_domNode.nodeValue==="wd-table-of-contents"){_domNode.after((0,dist/* createDomNodes */.C_t)(listItemsHTML));_domNode.remove()}}}catch(err){_iterator2.e(err)}finally{_iterator2.f()}this.tableOfContentLinkDomNodes=this.tableOfContentDomNode.querySelectorAll(this.options.selectors.tableOfContentLinks);var _iterator3=source_createForOfIteratorHelper(this.tableOfContentLinkDomNodes),_step3;try{for(_iterator3.s();!(_step3=_iterator3.n()).done;){var _domNode2=_step3.value;this.addSecureEventListener(_domNode2,"click",function(event){var _event$target;event.preventDefault();var selector=(_event$target=event.target)===null||_event$target===void 0?void 0:_event$target.getAttribute("href");if(selector){var targetDomNode=_this2.hostDomNode.querySelector(selector);if(targetDomNode)(0,dist/* interruptableScrollTo */.CcH)({targetDomNode:targetDomNode})}})}}catch(err){_iterator3.e(err)}finally{_iterator3.f()}if(this.tableOfContentDomNode.style.display==="none")this.tableOfContentDomNode.style.display="initial"}/**
     * This method makes dotes after code lines which are too long. This
     * prevents line wrapping.
     */},{key:"_makeCodeEllipsis",value:function _makeCodeEllipsis(){var _this$codeDomNodes;var lengthLimit=89;// 79
var _iterator4=source_createForOfIteratorHelper((_this$codeDomNodes=this.codeDomNodes)!==null&&_this$codeDomNodes!==void 0?_this$codeDomNodes:[]),_step4;try{for(_iterator4.s();!(_step4=_iterator4.n()).done;){var domNode=_step4.value;var newContent="";var codeLines=domNode.innerHTML.split("\n");var subIndex=0;var _iterator5=source_createForOfIteratorHelper(codeLines),_step5;try{for(_iterator5.s();!(_step5=_iterator5.n()).done;){var value=_step5.value;/*
                    NOTE: Wrap a div object to grantee that $ will accept the
                    input.
                */var excess=(0,dist/* getText */.q4_)((0,dist/* createDomNodes */.C_t)("<div>".concat(value,"</div>"))).length-lengthLimit;if(excess>0)newContent+=this._replaceExcessWithDots(value,excess);else newContent+=value;if(subIndex+1!==codeLines.length)newContent+="\n";subIndex+=1}}catch(err){_iterator5.e(err)}finally{_iterator5.f()}domNode.innerHTML=newContent}}catch(err){_iterator4.e(err)}finally{_iterator4.f()}}/**
     * Replaces given html content with a shorter version trimmed by given
     * amount of excess.
     * @param content - String to trim.
     * @param excess - Amount of excess.
     * @returns Returns the trimmed content.
     */},{key:"_replaceExcessWithDots",value:function _replaceExcessWithDots(content,excess){// Add space for ending dots.
excess+="...".length;var newContent="";var contentDomNodes=(0,dist/* getAll */.UKu)((0,dist/* createDomNodes */.C_t)("<wrapper>".concat(content,"</wrapper>")));contentDomNodes.reverse();var _iterator6=source_createForOfIteratorHelper(contentDomNodes),_step6;try{for(_iterator6.s();!(_step6=_iterator6.n()).done;){var domNode=_step6.value;var wrapper=(0,dist/* createDomNodes */.C_t)("<wrapper><wrapper>");(0,dist/* wrap */.LV7)(domNode,wrapper);var textContent=domNode.textContent||"";var contentSnippet=wrapper.innerHTML;if(!contentSnippet)contentSnippet=textContent;if(excess)if(textContent.length<excess){excess-=textContent.length;contentSnippet=""}else if(textContent.length>=excess){/*
                        NOTE: We have to ensure that no HTML tag will be
                        shortened: We work on "textContent" property only.
                    */domNode.textContent=textContent.substring(0,textContent.length-excess-1)+"...";excess=0;contentSnippet=wrapper.innerHTML;if(!contentSnippet)contentSnippet=domNode.textContent}newContent=contentSnippet+newContent}}catch(err){_iterator6.e(err)}finally{_iterator6.f()}return newContent}/**
     * Shows marked example codes directly in browser.
     */},{key:"_showExamples",value:(function(){var _showExamples2=source_asyncToGenerator(/*#__PURE__*/source_regenerator().m(function _callee3(){var _iterator7,_step7,domNode,match,codeDomNode,codeWrapper,code,_domNode3,reInjectScripts,encodedCode,dataURI,_iterator8,_step8,_loop,_t,_t2,_t3,_t4;return source_regenerator().w(function(_context4){while(1)switch(_context4.p=_context4.n){case 0:_iterator7=source_createForOfIteratorHelper((0,dist/* getAll */.UKu)(this.hostDomNode));_context4.p=1;_iterator7.s();case 2:if((_step7=_iterator7.n()).done){_context4.n=21;break}domNode=_step7.value;if(!(domNode.nodeName===this.options.showExample.domNodeName)){_context4.n=20;break}match=(domNode.textContent||"").match(new RegExp(this.options.showExample.pattern));codeDomNode=domNode.nextSibling;if(!(match&&codeDomNode)){_context4.n=20;break}codeWrapper=codeDomNode.querySelector(this.options.selectors.codeWrapper);code=codeWrapper===null||codeWrapper===void 0?void 0:codeWrapper.innerText;if(!code)code=codeDomNode.innerText;_context4.p=3;_domNode3=null;reInjectScripts=false;if(!(match.length>2&&match[2])){_context4.n=10;break}if(!["javascript","javascripts","js"].includes(match[2].toLowerCase())){_context4.n=8;break}/*
                                    NOTE: We're using a data URI to import the
                                    code as a module.
                                */encodedCode=encodeURIComponent(code);dataURI="data:text/javascript;charset=utf-8,"+encodedCode;_context4.p=4;_context4.n=5;return import(/* webpackIgnore: true */dataURI);case 5:_context4.n=7;break;case 6:_context4.p=6;_t=_context4.v;source_log.warn("Error occurred during running "+"code \"".concat(code,"\":"),_t);case 7:_context4.n=9;break;case 8:if(["css","cascadingstylesheet","cascadingstylesheets","stylesheet","stylesheets","sheet","sheets","style","styles"].includes(match[2].toLowerCase())){_domNode3=dist/* globalContext */.Lz6.document.createElement("style");_domNode3.setAttribute("type","text/css");_domNode3.innerText=code}else if(match[2].toLowerCase()==="hidden"){_domNode3=(0,dist/* createDomNodes */.C_t)(code);reInjectScripts=true}else{_domNode3=(0,dist/* createDomNodes */.C_t)((0,dist/* format */.GPZ)(this.options.showExample.htmlWrapper,code));reInjectScripts=true}case 9:_context4.n=11;break;case 10:_domNode3=(0,dist/* createDomNodes */.C_t)((0,dist/* format */.GPZ)(this.options.showExample.htmlWrapper,code));reInjectScripts=true;case 11:if(!_domNode3){_context4.n=18;break}codeDomNode.after(_domNode3);if(!reInjectScripts){_context4.n=18;break}/*
                                    Injected script tags are not executed by
                                    default. So we need to reinject those.
                                */_iterator8=source_createForOfIteratorHelper(_domNode3.querySelectorAll("script"));_context4.p=12;_loop=/*#__PURE__*/source_regenerator().m(function _loop(){var scriptDomNode,newScriptDomNode,_iterator9,_step9,name,promise;return source_regenerator().w(function(_context3){while(1)switch(_context3.n){case 0:scriptDomNode=_step8.value;newScriptDomNode=document.createElement("script");_iterator9=source_createForOfIteratorHelper(scriptDomNode.getAttributeNames());try{for(_iterator9.s();!(_step9=_iterator9.n()).done;){name=_step9.value;newScriptDomNode.setAttribute(name,scriptDomNode.getAttribute(name))}}catch(err){_iterator9.e(err)}finally{_iterator9.f()}newScriptDomNode.textContent=scriptDomNode.textContent;promise=new Promise(function(resolve){newScriptDomNode.addEventListener("load",resolve)});if(scriptDomNode.parentNode)scriptDomNode.parentNode.replaceChild(newScriptDomNode,scriptDomNode);_context3.n=1;return promise;case 1:return _context3.a(2)}},_loop)});_iterator8.s();case 13:if((_step8=_iterator8.n()).done){_context4.n=15;break}return _context4.d(_regeneratorValues(_loop()),14);case 14:_context4.n=13;break;case 15:_context4.n=17;break;case 16:_context4.p=16;_t2=_context4.v;_iterator8.e(_t2);case 17:_context4.p=17;_iterator8.f();return _context4.f(17);case 18:_context4.n=20;break;case 19:_context4.p=19;_t3=_context4.v;source_log.critical("Error while integrating code \"".concat(code,"\":"),String(_t3));case 20:_context4.n=2;break;case 21:_context4.n=23;break;case 22:_context4.p=22;_t4=_context4.v;_iterator7.e(_t4);case 23:_context4.p=23;_iterator7.f();return _context4.f(23);case 24:this.onExamplesLoaded();case 25:return _context4.a(2)}},_callee3,this,[[12,16,17,18],[4,6],[3,19],[1,22,23,24]])}));function _showExamples(){return _showExamples2.apply(this,arguments)}return _showExamples}()// endregion
)}])}(Web),source_defineProperty(_WebDocumentation,"content","\n        <website-utilities\n            options=\"{sectionNames: {\n                default: 'home',\n                managed: ['home', 'about-this-website']\n            }}\"\n        >\n            <web-internationalization\n                options=\"{selectors: {\n                    knownTranslation: '.wd-table-of-contents ul li'\n                }}\"\n            >\n                <slot>Please provide a template to transclude.</slot>\n            </web-internationalization>\n        </website-utilities>\n    "),source_defineProperty(_WebDocumentation,"_name","WebDocumentation"),source_defineProperty(_WebDocumentation,"_defaultOptions",{selectors:{aboutThisWebsiteLink:"a[href=\"#about-this-website\"]",aboutThisWebsiteSection:".wd-section__about-this-website",codeWrapper:"pre",code:"code",headlines:".wd-section__home h1, .wd-section__home h2, "+".wd-section__home h3, .wd-section__home h4, "+".wd-section__home h5, .wd-section__home h6",tableOfContent:".wd-table-of-contents",tableOfContentLinks:".wd-table-of-contents ul li a[href^=\"#\"]"},showExample:{domNodeName:"#comment",htmlWrapper:"\n                <div class=\"wd-show-example-wrapper\">\n                    <h3>\n                        Example:\n                        <!--deDE:Beispiel:-->\n                        <!--frFR:Exemple:-->\n                    </h3>\n                    {1}\n                </div>\n            ",pattern:"^ *showExample(: *([^ ]+))? *$"}}),source_defineProperty(_WebDocumentation,"doRender",true),_WebDocumentation),source_descriptor=source_applyDecoratedDescriptor(source_class.prototype,"options",[source_dec],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return{}}}),source_descriptor2=source_applyDecoratedDescriptor(source_class.prototype,"onExamplesLoaded",[source_dec2],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return dist/* NOOP */.tEg}}),source_class);// endregion
var source_api={component:WebDocumentation,register:function register(tagName){if(tagName===void 0){tagName=(0,dist/* camelCaseToDelimited */.h1R)(WebDocumentation._name)}website_utilities_api.register();dist_api.register();customElements.define(tagName,WebDocumentation)}};/* harmony default export */ var source = (WebDocumentation);if(dist/* globalContext */.Lz6.AUTO_DEFINE_WEB_DOCUMENTATION)source_api.register();

/***/ }),
/* 74 */
/***/ (function(__unused_webpack_module, exports) {


var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),
/* 75 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(3);
var hasOwn = __webpack_require__(5);

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && function something() { /* empty */ }.name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  i2: CONFIGURABLE
};


/***/ }),
/* 76 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var NATIVE_WEAK_MAP = __webpack_require__(53);
var globalThis = __webpack_require__(0);
var isObject = __webpack_require__(6);
var createNonEnumerableProperty = __webpack_require__(28);
var hasOwn = __webpack_require__(5);
var shared = __webpack_require__(12);
var sharedKey = __webpack_require__(31);
var hiddenKeys = __webpack_require__(32);

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = globalThis.TypeError;
var WeakMap = globalThis.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw new TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  /* eslint-disable no-self-assign -- prototype methods protection */
  store.get = store.get;
  store.has = store.has;
  store.set = store.set;
  /* eslint-enable no-self-assign -- prototype methods protection */
  set = function (it, metadata) {
    if (store.has(it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store.set(it, metadata);
    return metadata;
  };
  get = function (it) {
    return store.get(it) || {};
  };
  has = function (it) {
    return store.has(it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),
/* 77 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var internalObjectKeys = __webpack_require__(33);
var enumBugKeys = __webpack_require__(14);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),
/* 78 */
/***/ (function(__unused_webpack_module, exports) {


// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 79 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(3);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(29);
var definePropertyModule = __webpack_require__(7);
var anObject = __webpack_require__(8);
var toIndexedObject = __webpack_require__(9);
var objectKeys = __webpack_require__(64);

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var props = toIndexedObject(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
  return O;
};


/***/ }),
/* 80 */
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(3);
var defineBuiltInAccessor = __webpack_require__(66);
var regExpFlagsDetection = __webpack_require__(81);
var regExpFlagsGetterImplementation = __webpack_require__(67);

// `RegExp.prototype.flags` getter
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
if (DESCRIPTORS && !regExpFlagsDetection.correct) {
  defineBuiltInAccessor(RegExp.prototype, 'flags', {
    configurable: true,
    get: regExpFlagsGetterImplementation
  });

  regExpFlagsDetection.correct = true;
}


/***/ }),
/* 81 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var globalThis = __webpack_require__(0);
var fails = __webpack_require__(1);

// babel-minify and Closure Compiler transpiles RegExp('.', 'd') -> /./d and it causes SyntaxError
var RegExp = globalThis.RegExp;

var FLAGS_GETTER_IS_CORRECT = !fails(function () {
  var INDICES_SUPPORT = true;
  try {
    RegExp('.', 'd');
  } catch (error) {
    INDICES_SUPPORT = false;
  }

  var O = {};
  // modern V8 bug
  var calls = '';
  var expected = INDICES_SUPPORT ? 'dgimsy' : 'gimsy';

  var addGetter = function (key, chr) {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty(O, key, { get: function () {
      calls += chr;
      return true;
    } });
  };

  var pairs = {
    dotAll: 's',
    global: 'g',
    ignoreCase: 'i',
    multiline: 'm',
    sticky: 'y'
  };

  if (INDICES_SUPPORT) pairs.hasIndices = 'd';

  for (var key in pairs) addGetter(key, pairs[key]);

  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var result = Object.getOwnPropertyDescriptor(RegExp.prototype, 'flags').get.call(O);

  return result !== expected || calls !== expected;
});

module.exports = { correct: FLAGS_GETTER_IS_CORRECT };


/***/ }),
/* 82 */
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AmM: function() { return /* binding */ __webpack_exports__unique; },
/* harmony export */   C_t: function() { return /* binding */ __webpack_exports__createDomNodes; },
/* harmony export */   Cal: function() { return /* binding */ __webpack_exports__copy; },
/* harmony export */   CcH: function() { return /* binding */ __webpack_exports__interruptableScrollTo; },
/* harmony export */   DoQ: function() { return /* binding */ __webpack_exports__represent; },
/* harmony export */   GPZ: function() { return /* binding */ __webpack_exports__format; },
/* harmony export */   Gvm: function() { return /* binding */ __webpack_exports__isObject; },
/* harmony export */   HCR: function() { return /* binding */ __webpack_exports__replace; },
/* harmony export */   LV7: function() { return /* binding */ __webpack_exports__wrap; },
/* harmony export */   Lz6: function() { return /* binding */ __webpack_exports__globalContext; },
/* harmony export */   MXd: function() { return /* binding */ __webpack_exports__UTILITY_SCOPE; },
/* harmony export */   Tnt: function() { return /* binding */ __webpack_exports__isFunction; },
/* harmony export */   UKu: function() { return /* binding */ __webpack_exports__getAll; },
/* harmony export */   VyI: function() { return /* binding */ __webpack_exports__Logger; },
/* harmony export */   X$i: function() { return /* binding */ __webpack_exports__extend; },
/* harmony export */   XD1: function() { return /* binding */ __webpack_exports__delimitedToCamelCase; },
/* harmony export */   XnV: function() { return /* binding */ __webpack_exports__fadeOut; },
/* harmony export */   _3z: function() { return /* binding */ __webpack_exports__evaluate; },
/* harmony export */   bGc: function() { return /* binding */ __webpack_exports__UTILITY_SCOPE_NAMES; },
/* harmony export */   c_I: function() { return /* binding */ __webpack_exports__Lock; },
/* harmony export */   eQA: function() { return /* binding */ __webpack_exports__convertPlainObjectToMap; },
/* harmony export */   gQT: function() { return /* binding */ __webpack_exports__lowerCase; },
/* harmony export */   h1R: function() { return /* binding */ __webpack_exports__camelCaseToDelimited; },
/* harmony export */   kpl: function() { return /* binding */ __webpack_exports__closest; },
/* harmony export */   oAg: function() { return /* binding */ __webpack_exports__unwrap; },
/* harmony export */   p06: function() { return /* binding */ __webpack_exports__trailingThrottle; },
/* harmony export */   q4_: function() { return /* binding */ __webpack_exports__getText; },
/* harmony export */   qGl: function() { return /* binding */ __webpack_exports__fadeIn; },
/* harmony export */   qqP: function() { return /* binding */ __webpack_exports__onDocumentReady; },
/* harmony export */   tEg: function() { return /* binding */ __webpack_exports__NOOP; },
/* harmony export */   wEV: function() { return /* binding */ __webpack_exports__compile; },
/* harmony export */   wRz: function() { return /* binding */ __webpack_exports__timeout; },
/* harmony export */   wTB: function() { return /* binding */ __webpack_exports__getParents; },
/* harmony export */   woC: function() { return /* binding */ __webpack_exports__preventDefault; }
/* harmony export */ });
/* unused harmony exports ABBREVIATIONS, ALLOWED_STARTING_VARIABLE_SYMBOLS, ALLOWED_VARIABLE_SYMBOLS, ANIMATION_END_EVENT_NAMES, AsyncFunction, CLASS_TO_TYPE_MAPPING, CLI_COLOR, CLOSE_EVENT_NAMES, CONSOLE_METHODS, DATE_TIME_PATTERN_CACHE, DEFAULT_ENCODING, DEFAULT_OPTIONS, FIX_ENCODING_ERROR_MAPPING, IGNORE_NULL_AND_UNDEFINED_SYMBOL, KEYBOARD_CODES, KEY_CODES, KNOWN_DISALLOWED_VARIABLE_NAMES_BUT_OBJECT_KEYS, LEVELS, LEVELS_COLOR, LOCALES, MANUAL_SCROLL_EVENT_NAMES, MAXIMAL_NUMBER_OF_ITERATIONS, NO_ITEM_FOUND_SYMBOL, PLAIN_OBJECT_PROTOTYPES, POLYFILL_TEMPLATE_STRINGS, SCROLL_EVENT_NAMES, SELECTOR_KEY_NAMES, SPECIAL_REGEX_SEQUENCES, STOP_AUTO_SCROLLING, Semaphore, TRANSITION_END_EVENT_NAMES, UTILITY_SCOPE_VALUES, VALUE_COPY_SYMBOL, addDynamicGetterAndSetter, addSeparatorToPath, aggregatePropertyIfEqual, cacheImage, capitalize, ceil, checkReachability, checkUnreachability, clearRequireCache, compressStyleValue, convertCircularObjectToJSON, convertMapToPlainObject, convertSubstringInPlainObject, convertToValidVariableName, copyDirectoryRecursive, copyDirectoryRecursiveSync, copyFile, copyFileSync, currentRequire, dateTimeFormat, debounce, decodeHTMLEntities, deleteCookie, deleteEmptyItems, determineGlobalContext, determineType, determineUniqueScopeName, encodeURIComponentExtended, equals, escapeRegularExpressions, evaluateAnd, evaluateArrayContains, evaluateAsyncDynamicData, evaluateConcat, evaluateCondition, evaluateDynamicData, evaluateExpression, evaluateIf, evaluateMapping, evaluateOperation, evaluateOptionalThen, evaluateOr, evaluateOrThrowError, evaluateSelector, evaluateSelectorUntilLastObject, evaluateSwitch, evaluateUnaryOperation, extract, extractIfMatches, extractIfPropertyExists, extractIfPropertyMatches, fade, findNormalizedMatchRange, fixKnownEncodingErrors, floor, getCookie, getCurrentRequire, getDomainName, getEditDistance, getParameterNames, getPortNumber, getProcessCloseHandler, getProtocolName, getProxyHandler, getURLParameter, getUTCTimestamp, handleChildProcess, hasPathPrefix, identity, importFilesystemAPI, imports, interpretDateTime, intersect, invertArrayFilter, isAndExpression, isAnyMatching, isArrayContainsExpression, isArrayLike, isConcatExpression, isCondition, isDirectory, isDirectorySync, isEquivalent, isFile, isFileSync, isHidden, isIfExpression, isImportSyntaxSupported, isMap, isMappingExpression, isNotANumber, isNumeric, isOperation, isOrExpression, isPlainObject, isProxy, isSelector, isSet, isSpecificExpression, isSwitchExpression, isUnaryOperation, isValue, isWindow, isolateScope, isolatedRequire, limit, makeArray, makeRange, mark, mask, maskForRegularExpression, merge, mockConsole, modifyObject, normalizeDateTime, normalizeDomNodeSelector, normalizePhoneNumber, normalizeSelector, normalizeURL, normalizeZipCode, optionalImport, optionalRequire, paginate, parseEncodedObject, permute, permuteLength, removeArrayItem, removeKeyPrefixes, removeKeysInEvaluation, representPhoneNumber, representURL, round, scrollTo, selectArrayItem, serviceURLEquals, setCookie, setGlobalContext, setOptionalRequire, sliceAllExceptNumberAndLastSeparator, sliceWeekday, sort, sortTopological, stopPropagation, sumUpProperty, unwrapProxy, viewArrayAsScope, viewObjectAsScope, walkDirectoryRecursively, walkDirectoryRecursivelySync */
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var core_js_modules_es_regexp_flags_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80);
if(typeof window==='undefined'||window===null)var window=(typeof globalThis==='undefined'||globalThis===null)?{}:globalThis;

/******/ var __webpack_modules__ = ([
/* 0 */
/***/ (function(module, __unused_webpack_exports, __nested_webpack_require_478__) {

var x = function(y) {
	var x = {}; __nested_webpack_require_478__.d(x, y); return x
} 
var y = function(x) { return function() { return x; }; }
module.exports = x({  });

/***/ }),
/* 1 */
/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_742__) {

/* harmony export */ __nested_webpack_require_742__.d(__nested_webpack_exports__, {
/* harmony export */   FI: function() { return /* binding */ SPECIAL_REGEX_SEQUENCES; },
/* harmony export */   Fp: function() { return /* binding */ VALUE_COPY_SYMBOL; },
/* harmony export */   GU: function() { return /* binding */ TRANSITION_END_EVENT_NAMES; },
/* harmony export */   Iy: function() { return /* binding */ ABBREVIATIONS; },
/* harmony export */   Lb: function() { return /* binding */ KEY_CODES; },
/* harmony export */   Vx: function() { return /* binding */ ANIMATION_END_EVENT_NAMES; },
/* harmony export */   YZ: function() { return /* binding */ LOCALES; },
/* harmony export */   c_: function() { return /* reexport safe */ _Lock_js__WEBPACK_IMPORTED_MODULE_0__.c; },
/* harmony export */   dy: function() { return /* binding */ KEYBOARD_CODES; },
/* harmony export */   jE: function() { return /* binding */ PLAIN_OBJECT_PROTOTYPES; },
/* harmony export */   jG: function() { return /* binding */ CLOSE_EVENT_NAMES; },
/* harmony export */   jf: function() { return /* reexport safe */ _Semaphore_js__WEBPACK_IMPORTED_MODULE_1__.j; },
/* harmony export */   jg: function() { return /* binding */ CONSOLE_METHODS; },
/* harmony export */   l_: function() { return /* binding */ CLI_COLOR; },
/* harmony export */   p_: function() { return /* binding */ IGNORE_NULL_AND_UNDEFINED_SYMBOL; },
/* harmony export */   rq: function() { return /* binding */ CLASS_TO_TYPE_MAPPING; },
/* harmony export */   uJ: function() { return /* binding */ DEFAULT_ENCODING; }
/* harmony export */ });
/* harmony import */ var _Lock_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_742__(10);
/* harmony import */ var _Semaphore_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_742__(11);
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module constants *//* !
    region header
    [Project page](https://torben.website/clientnode)

    Copyright Torben Sickert (info["~at~"]torben.website) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/var CLI_COLOR={black:"\x1B[30m",blink:"\x1B[5m",blue:"\x1B[0;34m",bold:"\x1B[1m",cyan:"\x1B[36m",darkGray:"\x1B[0;90m",default:"\x1B[0m",dim:"\x1B[2m",green:"\x1B[32m",invert:"\x1B[7m",invisible:"\x1B[8m",lightBlue:"\x1B[0;94m",lightCyan:"\x1B[0;96m",lightGray:"\x1B[0;37m",lightGreen:"\x1B[0;92m",lightMagenta:"\x1B[0;95m",lightRed:"\x1B[0;91m",lightYellow:"\x1B[0;93m",magenta:"\x1B[35m",nodim:"\x1B[22m",noblink:"\x1B[25m",nobold:"\x1B[21m",noinvert:"\x1B[27m",noinvisible:"\x1B[28m",nounderline:"\x1B[24m",red:"\x1B[31m",underline:"\x1B[4m",white:"\x1B[37m",yellow:"\x1B[33m"};var DEFAULT_ENCODING="utf8";var CLOSE_EVENT_NAMES=["close","exit","SIGINT","SIGTERM","SIGQUIT","uncaughtException"];var CONSOLE_METHODS=["debug","error","info","log","warn"];var VALUE_COPY_SYMBOL=Symbol.for("clientnodeValue");var IGNORE_NULL_AND_UNDEFINED_SYMBOL=Symbol.for("clientnodeIgnoreNullAndUndefined");// Lists all known abbreviation for proper camel case to delimited and back
// conversion.
var ABBREVIATIONS=["html","id","url","us","de","api","href"];// Saves a string with all css3 browser specific animation end event names.
var ANIMATION_END_EVENT_NAMES="animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd";// String representation to object type name mapping.
var CLASS_TO_TYPE_MAPPING={"[object Array]":"array","[object Boolean]":"boolean","[object Date]":"date","[object Error]":"error","[object Function]":"function","[object Map]":"map","[object Number]":"number","[object Object]":"object","[object RegExp]":"regexp","[object Set]":"set","[object String]":"string"};// Saves a mapping from key codes to their corresponding name.
var KEY_CODES={BACKSPACE:8,SPACE:32,TAB:9,DELETE:46,ENTER:13,COMMA:188,PERIOD:190,END:35,ESCAPE:27,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,HOME:36,NUMPAD_ADD:107,NUMPAD_SUBTRACT:109,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,PAGE_UP:33,PAGE_DOWN:34,UP:38,DOWN:40,LEFT:37,RIGHT:39};var KEYBOARD_CODES={BACKSPACE:"Backspace",SPACE:"Space",TAB:"Tab",DELETE:"Delete",ENTER:"Enter",COMMA:"Comma",PERIOD:"Period",END:"End",ESCAPE:"Escape",F1:"F1",F2:"F2",F3:"F3",F4:"F4",F5:"F5",F6:"F6",F7:"F7",F8:"F8",F9:"F9",F10:"F10",F11:"F111",F12:"F12",HOME:"Home",NUMPAD_ADD:"NumpadAdd",NUMPAD_SUBTRACT:"NumpadSubtract",NUMPAD_DECIMAL:"NumpadDecimal",NUMPAD_DIVIDE:"NumpadDivide",NUMPAD_ENTER:"NumpadEnter",NUMPAD_MULTIPLY:"NumpadMultiply",PAGE_UP:"PageUp",PAGE_DOWN:"PageUp",UP:"ArrowUp",DOWN:"ArrowDown",LEFT:"ArrowLeft",RIGHT:"ArrowUp"};var LOCALES=[];var PLAIN_OBJECT_PROTOTYPES=[Object.prototype];// A list of special regular expression symbols.
var SPECIAL_REGEX_SEQUENCES=["-","[","]","(",")","^","$","*","+",".","{","}"];// Saves a string with all css3 browser specific transition end event names.
var TRANSITION_END_EVENT_NAMES="transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd";

/***/ }),
/* 2 */
/***/ (function(module, __nested_webpack_exports__, __nested_webpack_require_5931__) {

__nested_webpack_require_5931__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_5931__.d(__nested_webpack_exports__, {
/* harmony export */   Dx: function() { return /* binding */ isolatedRequire; },
/* harmony export */   I5: function() { return /* binding */ optionalRequire; },
/* harmony export */   Ni: function() { return /* binding */ clearRequireCache; },
/* harmony export */   SD: function() { return /* binding */ setOptionalRequire; },
/* harmony export */   Sw: function() { return /* binding */ optionalImport; },
/* harmony export */   a8: function() { return /* binding */ determineGlobalContext; },
/* harmony export */   lE: function() { return /* binding */ currentRequire; },
/* harmony export */   xN: function() { return /* binding */ isImportSyntaxSupported; },
/* harmony export */   zM: function() { return /* binding */ getCurrentRequire; }
/* harmony export */ });
/* module decorator */ module = __nested_webpack_require_5931__.hmd(module);
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module module *//* !
    region header
    [Project page](https://torben.website/clientnode)

    Copyright Torben Sickert (info["~at~"]torben.website) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/function _slicedToArray(r,e){return _arrayWithHoles(r)||_iterableToArrayLimit(r,e)||_unsupportedIterableToArray(r,e)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}function _arrayWithHoles(r){if(Array.isArray(r))return r}function _regenerator(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var e,t,r="function"==typeof Symbol?Symbol:{},n=r.iterator||"@@iterator",o=r.toStringTag||"@@toStringTag";function i(r,n,o,i){var c=n&&n.prototype instanceof Generator?n:Generator,u=Object.create(c.prototype);return _regeneratorDefine2(u,"_invoke",function(r,n,o){var i,c,u,f=0,p=o||[],y=!1,G={p:0,n:0,v:e,a:d,f:d.bind(e,4),d:function d(t,r){return i=t,c=0,u=e,G.n=r,a}};function d(r,n){for(c=r,u=n,t=0;!y&&f&&!o&&t<p.length;t++){var o,i=p[t],d=G.p,l=i[2];r>3?(o=l===n)&&(u=i[(c=i[4])?5:(c=3,3)],i[4]=i[5]=e):i[0]<=d&&((o=r<2&&d<i[1])?(c=0,G.v=n,G.n=i[1]):d<l&&(o=r<3||i[0]>n||n>l)&&(i[4]=r,i[5]=n,G.n=l,c=0))}if(o||r>1)return a;throw y=!0,n}return function(o,p,l){if(f>1)throw TypeError("Generator is already running");for(y&&1===p&&d(p,l),c=p,u=l;(t=c<2?e:u)||!y;){i||(c?c<3?(c>1&&(G.n=-1),d(c,u)):G.n=u:G.v=u);try{if(f=2,i){if(c||(o="next"),t=i[o]){if(!(t=t.call(i,u)))throw TypeError("iterator result is not an object");if(!t.done)return t;u=t.value,c<2&&(c=0)}else 1===c&&(t=i.return)&&t.call(i),c<2&&(u=TypeError("The iterator does not provide a '"+o+"' method"),c=1);i=e}else if((t=(y=G.n<0)?u:r.call(n,G))!==a)break}catch(t){i=e,c=1,u=t}finally{f=1}}return{value:t,done:y}}}(r,o,i),!0),u}var a={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}t=Object.getPrototypeOf;var c=[][n]?t(t([][n]())):(_regeneratorDefine2(t={},n,function(){return this}),t),u=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(c);function f(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,GeneratorFunctionPrototype):(e.__proto__=GeneratorFunctionPrototype,_regeneratorDefine2(e,o,"GeneratorFunction")),e.prototype=Object.create(u),e}return GeneratorFunction.prototype=GeneratorFunctionPrototype,_regeneratorDefine2(u,"constructor",GeneratorFunctionPrototype),_regeneratorDefine2(GeneratorFunctionPrototype,"constructor",GeneratorFunction),GeneratorFunction.displayName="GeneratorFunction",_regeneratorDefine2(GeneratorFunctionPrototype,o,"GeneratorFunction"),_regeneratorDefine2(u),_regeneratorDefine2(u,o,"Generator"),_regeneratorDefine2(u,n,function(){return this}),_regeneratorDefine2(u,"toString",function(){return"[object Generator]"}),(_regenerator=function _regenerator(){return{w:i,m:f}})()}function _regeneratorDefine2(e,r,n,t){var i=Object.defineProperty;try{i({},"",{})}catch(e){i=0}_regeneratorDefine2=function _regeneratorDefine(e,r,n,t){function o(r,n){_regeneratorDefine2(e,r,function(e){return this._invoke(r,n,e)})}r?i?i(e,r,{value:n,enumerable:!t,configurable:!t,writable:!t}):e[r]=n:(o("next",0),o("throw",1),o("return",2))},_regeneratorDefine2(e,r,n,t)}function asyncGeneratorStep(n,t,e,r,o,a,c){try{var i=n[a](c),u=i.value}catch(n){return void e(n)}i.done?t(u):Promise.resolve(u).then(r,o)}function _asyncToGenerator(n){return function(){var t=this,e=arguments;return new Promise(function(r,o){var a=n.apply(t,e);function _next(n){asyncGeneratorStep(a,r,o,_next,_throw,"next",n)}function _throw(n){asyncGeneratorStep(a,r,o,_next,_throw,"throw",n)}_next(void 0)})}}var determineGlobalContext=function determineGlobalContext(){if(typeof globalThis==="undefined"){if(typeof window==="undefined"){if(typeof __nested_webpack_require_5931__.g==="undefined")return   false?0:module;if(Object.prototype.hasOwnProperty.call(__nested_webpack_require_5931__.g,"window"))return __nested_webpack_require_5931__.g.window;return __nested_webpack_require_5931__.g}return window}return globalThis};var globalContext=determineGlobalContext();var isImportSyntaxSupported=function isImportSyntaxSupported(){try{// eslint-disable-next-line @typescript-eslint/no-implied-eval
new Function("import(\"data:text/javascript,\")");return true}catch(_unused){return false}};var currentRequire=typeof globalContext.require==="undefined"?null:globalContext.require;var optionalRequire;var setOptionalRequire=function setOptionalRequire(localCurrentRequire){optionalRequire=function optionalRequire(id){try{return localCurrentRequire?localCurrentRequire(id):null}catch(_unused2){return null}}};setOptionalRequire(currentRequire);// Make preprocessed require function available at runtime.
var getCurrentRequire=/*#__PURE__*/function(){var _getCurrentRequire=_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(){var _yield$Function,createRequire,_t;return _regenerator().w(function(_context){while(1)switch(_context.p=_context.n){case 0:if(!currentRequire){_context.n=1;break}return _context.a(2,currentRequire);case 1:_context.p=1;_context.n=2;return new Function("return import(\"node:module\")")();case 2:_yield$Function=_context.v;createRequire=_yield$Function.createRequire;/*
            eslint-enable
            @typescript-eslint/no-implied-eval,
            @typescript-eslint/no-unsafe-call
        */// eslint-disable-next-line @typescript-eslint/no-unsafe-call
currentRequire=createRequire("file:///private/var/folders/qh/f1bt61v52lg2626gybz1529h0000gn/T/web-documentationlyMaiQ/node_modules/clientnode/dist/index.js");setOptionalRequire(currentRequire);return _context.a(2,currentRequire);case 3:_context.p=3;_t=_context.v;console.error(_t);return _context.a(2,null)}},_callee,null,[[1,3]])}));function getCurrentRequire(){return _getCurrentRequire.apply(this,arguments)}return getCurrentRequire}();var clearRequireCache=function clearRequireCache(cache){if(cache===void 0){var _currentRequire;cache=((_currentRequire=currentRequire)===null||_currentRequire===void 0?void 0:_currentRequire.cache)||__nested_webpack_require_5931__.c}var backup={};for(var _i=0,_Object$entries=Object.entries(cache);_i<_Object$entries.length;_i++){var _Object$entries$_i=_slicedToArray(_Object$entries[_i],2),key=_Object$entries$_i[0],_module=_Object$entries$_i[1];backup[key]=_module;delete cache[key]}return backup};var restoreRequireCache=function restoreRequireCache(cache,backup){if(cache===void 0){var _currentRequire2;cache=((_currentRequire2=currentRequire)===null||_currentRequire2===void 0?void 0:_currentRequire2.cache)||__nested_webpack_require_5931__.c}clearRequireCache();for(var _i2=0,_Object$entries2=Object.entries(backup);_i2<_Object$entries2.length;_i2++){var _Object$entries2$_i=_slicedToArray(_Object$entries2[_i2],2),key=_Object$entries2$_i[0],_module2=_Object$entries2$_i[1];cache[key]=_module2}};var isolatedRequire=function isolatedRequire(path,requireFunction){if(requireFunction===void 0){requireFunction=currentRequire||__nested_webpack_require_5931__(6)}var backup=clearRequireCache(requireFunction.cache);try{return requireFunction(path);// eslint-disable-next-line no-useless-catch
}catch(error){throw error}finally{restoreRequireCache(requireFunction.cache,backup)}};var optionalImport=/*#__PURE__*/function(){var _optionalImport=_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(id,options){var _t2,_t3;return _regenerator().w(function(_context2){while(1)switch(_context2.p=_context2.n){case 0:if(options===void 0){options={}}_context2.p=1;if(!isImportSyntaxSupported()){_context2.n=3;break}_context2.n=2;return new Function("options","return import('".concat(id,"', options)"))(options);case 2:_t2=_context2.v;_context2.n=5;break;case 3:_context2.n=4;return Promise.resolve(null);case 4:_t2=_context2.v;case 5:return _context2.a(2,_t2);case 6:_context2.p=6;_t3=_context2.v;_context2.n=7;return Promise.resolve(null);case 7:return _context2.a(2,_context2.v)}},_callee2,null,[[1,6]])}));function optionalImport(_x,_x2){return _optionalImport.apply(this,arguments)}return optionalImport}();

/***/ }),
/* 3 */
/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_16145__) {

__nested_webpack_require_16145__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_16145__.d(__nested_webpack_exports__, {
/* harmony export */   C: function() { return /* binding */ _copy; },
/* harmony export */   Do: function() { return /* binding */ _represent; },
/* harmony export */   J3: function() { return /* binding */ evaluateDynamicData; },
/* harmony export */   Pi: function() { return /* binding */ _evaluateAsyncDynamicData; },
/* harmony export */   QB: function() { return /* binding */ _addDynamicGetterAndSetter; },
/* harmony export */   Sj: function() { return /* binding */ determineType; },
/* harmony export */   X$: function() { return /* binding */ _extend; },
/* harmony export */   _2: function() { return /* binding */ _modifyObject; },
/* harmony export */   aI: function() { return /* binding */ _equals; },
/* harmony export */   bo: function() { return /* binding */ getProxyHandler; },
/* harmony export */   dK: function() { return /* binding */ _mask; },
/* harmony export */   di: function() { return /* binding */ sort; },
/* harmony export */   dr: function() { return /* binding */ _convertSubstringInPlainObject; },
/* harmony export */   eQ: function() { return /* binding */ _convertPlainObjectToMap; },
/* harmony export */   iE: function() { return /* binding */ _removeKeysInEvaluation; },
/* harmony export */   oW: function() { return /* binding */ _convertMapToPlainObject; },
/* harmony export */   q1: function() { return /* binding */ _unwrapProxy; },
/* harmony export */   uu: function() { return /* binding */ _removeKeyPrefixes; },
/* harmony export */   zP: function() { return /* binding */ convertCircularObjectToJSON; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_16145__(0);
/* harmony import */ var core_js_modules_es_regexp_flags_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_16145__(8);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_16145__(1);
/* harmony import */ var _indicators_js__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_16145__(4);
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_16145__(9);
/* harmony import */ var _string_js__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_16145__(7);
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module object *//* !
    region header
    [Project page](https://torben.website/clientnode)

    Copyright Torben Sickert (info["~at~"]torben.website) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/function _toConsumableArray(r){return _arrayWithoutHoles(r)||_iterableToArray(r)||_unsupportedIterableToArray(r)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArray(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}function _arrayWithoutHoles(r){if(Array.isArray(r))return _arrayLikeToArray(r)}function _regenerator(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var e,t,r="function"==typeof Symbol?Symbol:{},n=r.iterator||"@@iterator",o=r.toStringTag||"@@toStringTag";function i(r,n,o,i){var c=n&&n.prototype instanceof Generator?n:Generator,u=Object.create(c.prototype);return _regeneratorDefine2(u,"_invoke",function(r,n,o){var i,c,u,f=0,p=o||[],y=!1,G={p:0,n:0,v:e,a:d,f:d.bind(e,4),d:function d(t,r){return i=t,c=0,u=e,G.n=r,a}};function d(r,n){for(c=r,u=n,t=0;!y&&f&&!o&&t<p.length;t++){var o,i=p[t],d=G.p,l=i[2];r>3?(o=l===n)&&(u=i[(c=i[4])?5:(c=3,3)],i[4]=i[5]=e):i[0]<=d&&((o=r<2&&d<i[1])?(c=0,G.v=n,G.n=i[1]):d<l&&(o=r<3||i[0]>n||n>l)&&(i[4]=r,i[5]=n,G.n=l,c=0))}if(o||r>1)return a;throw y=!0,n}return function(o,p,l){if(f>1)throw TypeError("Generator is already running");for(y&&1===p&&d(p,l),c=p,u=l;(t=c<2?e:u)||!y;){i||(c?c<3?(c>1&&(G.n=-1),d(c,u)):G.n=u:G.v=u);try{if(f=2,i){if(c||(o="next"),t=i[o]){if(!(t=t.call(i,u)))throw TypeError("iterator result is not an object");if(!t.done)return t;u=t.value,c<2&&(c=0)}else 1===c&&(t=i.return)&&t.call(i),c<2&&(u=TypeError("The iterator does not provide a '"+o+"' method"),c=1);i=e}else if((t=(y=G.n<0)?u:r.call(n,G))!==a)break}catch(t){i=e,c=1,u=t}finally{f=1}}return{value:t,done:y}}}(r,o,i),!0),u}var a={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}t=Object.getPrototypeOf;var c=[][n]?t(t([][n]())):(_regeneratorDefine2(t={},n,function(){return this}),t),u=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(c);function f(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,GeneratorFunctionPrototype):(e.__proto__=GeneratorFunctionPrototype,_regeneratorDefine2(e,o,"GeneratorFunction")),e.prototype=Object.create(u),e}return GeneratorFunction.prototype=GeneratorFunctionPrototype,_regeneratorDefine2(u,"constructor",GeneratorFunctionPrototype),_regeneratorDefine2(GeneratorFunctionPrototype,"constructor",GeneratorFunction),GeneratorFunction.displayName="GeneratorFunction",_regeneratorDefine2(GeneratorFunctionPrototype,o,"GeneratorFunction"),_regeneratorDefine2(u),_regeneratorDefine2(u,o,"Generator"),_regeneratorDefine2(u,n,function(){return this}),_regeneratorDefine2(u,"toString",function(){return"[object Generator]"}),(_regenerator=function _regenerator(){return{w:i,m:f}})()}function _regeneratorDefine2(e,r,n,t){var i=Object.defineProperty;try{i({},"",{})}catch(e){i=0}_regeneratorDefine2=function _regeneratorDefine(e,r,n,t){function o(r,n){_regeneratorDefine2(e,r,function(e){return this._invoke(r,n,e)})}r?i?i(e,r,{value:n,enumerable:!t,configurable:!t,writable:!t}):e[r]=n:(o("next",0),o("throw",1),o("return",2))},_regeneratorDefine2(e,r,n,t)}function asyncGeneratorStep(n,t,e,r,o,a,c){try{var i=n[a](c),u=i.value}catch(n){return void e(n)}i.done?t(u):Promise.resolve(u).then(r,o)}function _asyncToGenerator(n){return function(){var t=this,e=arguments;return new Promise(function(r,o){var a=n.apply(t,e);function _next(n){asyncGeneratorStep(a,r,o,_next,_throw,"next",n)}function _throw(n){asyncGeneratorStep(a,r,o,_next,_throw,"throw",n)}_next(void 0)})}}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach(function(r){_defineProperty(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function _defineProperty(e,r,t){return(r=_toPropertyKey(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _toPropertyKey(t){var i=_toPrimitive(t,"string");return"symbol"==_typeof(i)?i:i+""}function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)};function _slicedToArray(r,e){return _arrayWithHoles(r)||_iterableToArrayLimit(r,e)||_unsupportedIterableToArray(r,e)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}function _arrayWithHoles(r){if(Array.isArray(r))return r}function _createForOfIteratorHelper(r,e){var t="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(!t){if(Array.isArray(r)||(t=_unsupportedIterableToArray(r))||e&&r&&"number"==typeof r.length){t&&(r=t);var _n=0,F=function F(){};return{s:F,n:function n(){return _n>=r.length?{done:!0}:{done:!1,value:r[_n++]}},e:function e(r){throw r},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,u=!1;return{s:function s(){t=t.call(r)},n:function n(){var r=t.next();return a=r.done,r},e:function e(r){u=!0,o=r},f:function f(){try{a||null==t.return||t.return()}finally{if(u)throw o}}}}function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)};/**
 * Adds dynamic getter and setter to any given data structure such as maps.
 * @param object - Object to proxy.
 * @param getterWrapper - Function to wrap each property get.
 * @param setterWrapper - Function to wrap each property set.
 * @param methodNames - Method names to perform actions on the given
 * object.
 * @param deep - Indicates to perform a deep wrapping of specified types.
 * @param typesToExtend - Types which should be extended (Checks are
 * performed via "value instanceof type".).
 * @returns Returns given object wrapped with a dynamic getter proxy.
 */var _addDynamicGetterAndSetter=function addDynamicGetterAndSetter(object,getterWrapper,setterWrapper,methodNames,deep,typesToExtend){if(getterWrapper===void 0){getterWrapper=null}if(setterWrapper===void 0){setterWrapper=null}if(methodNames===void 0){methodNames={}}if(deep===void 0){deep=true}if(typesToExtend===void 0){typesToExtend=[Object]}if(deep&&_typeof(object)==="object")if(Array.isArray(object)){var index=0;var _iterator=_createForOfIteratorHelper(object),_step;try{for(_iterator.s();!(_step=_iterator.n()).done;){var value=_step.value;object[index]=_addDynamicGetterAndSetter(value,getterWrapper,setterWrapper,methodNames,deep);index+=1}}catch(err){_iterator.e(err)}finally{_iterator.f()}}else if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isMap */ .jh)(object)){var _iterator2=_createForOfIteratorHelper(object),_step2;try{for(_iterator2.s();!(_step2=_iterator2.n()).done;){var _step2$value=_slicedToArray(_step2.value,2),key=_step2$value[0],_value=_step2$value[1];object.set(key,_addDynamicGetterAndSetter(_value,getterWrapper,setterWrapper,methodNames,deep))}}catch(err){_iterator2.e(err)}finally{_iterator2.f()}}else if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isSet */ .vM)(object)){var cache=[];var _iterator3=_createForOfIteratorHelper(object),_step3;try{for(_iterator3.s();!(_step3=_iterator3.n()).done;){var _value3=_step3.value;object.delete(_value3);cache.push(_addDynamicGetterAndSetter(_value3,getterWrapper,setterWrapper,methodNames,deep))}}catch(err){_iterator3.e(err)}finally{_iterator3.f()}for(var _i=0,_cache=cache;_i<_cache.length;_i++){var _value2=_cache[_i];object.add(_value2)}}else if(object!==null)for(var _i2=0,_Object$entries=Object.entries(object);_i2<_Object$entries.length;_i2++){var _Object$entries$_i=_slicedToArray(_Object$entries[_i2],2),_key=_Object$entries$_i[0],_value4=_Object$entries$_i[1];object[_key]=_addDynamicGetterAndSetter(_value4,getterWrapper,setterWrapper,methodNames,deep)}if(getterWrapper||setterWrapper){var _iterator4=_createForOfIteratorHelper(typesToExtend),_step4;try{var _loop=function _loop(){var type=_step4.value;if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isObject */ .Gv)(object)&&object instanceof type){var defaultHandler=getProxyHandler(object,methodNames);var handler=getProxyHandler(object,methodNames);if(getterWrapper)handler.get=function(_target,name){if(name==="__target__")return object;if(name==="__revoke__")return function(){revoke();return object};if(typeof object[name]==="function")return object[name];return getterWrapper(defaultHandler.get(proxy,name),name,object)};if(setterWrapper)handler.set=function(_target,name,value){return defaultHandler.set(proxy,name,setterWrapper(name,value,object))};var _Proxy$revocable=Proxy.revocable({},handler),proxy=_Proxy$revocable.proxy,revoke=_Proxy$revocable.revoke;return{v:proxy}}},_ret;for(_iterator4.s();!(_step4=_iterator4.n()).done;){_ret=_loop();if(_ret)return _ret.v}}catch(err){_iterator4.e(err)}finally{_iterator4.f()}}return object};/**
 * Converts given object into its serialized JSON representation by
 * replacing circular references with a given provided value.
 *
 * This method traverses given object recursively and tracks of seen and
 * already serialized structures to reuse generated strings or mark a
 * circular reference.
 * @param object - Object to serialize.
 * @param determineCircularReferenceValue - Callback to create a fallback
 * value depending on given redundant value.
 * @param numberOfSpaces - Number of spaces to use for string formatting.
 * @returns The formatted JSON string.
 */var convertCircularObjectToJSON=function convertCircularObjectToJSON(object,determineCircularReferenceValue,numberOfSpaces){if(determineCircularReferenceValue===void 0){determineCircularReferenceValue=function determineCircularReferenceValue(serializedValue){return serializedValue!==null&&serializedValue!==void 0?serializedValue:"__circularReference__"}}if(numberOfSpaces===void 0){numberOfSpaces=0}var seenObjects=new Map;var stringifier=function stringifier(object){var _replacer=function replacer(key,value){if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isObject */ .Gv)(value)){var _seenObjects$get;if(seenObjects.has(value))return determineCircularReferenceValue((_seenObjects$get=seenObjects.get(value))!==null&&_seenObjects$get!==void 0?_seenObjects$get:null,key,value,seenObjects);// NOTE: Set before traversing deeper to detect cycles.
seenObjects.set(value,null);var result;if(Array.isArray(value)){result=[];var _iterator5=_createForOfIteratorHelper(value),_step5;try{for(_iterator5.s();!(_step5=_iterator5.n()).done;){var item=_step5.value;result.push(_replacer(null,item))}}catch(err){_iterator5.e(err)}finally{_iterator5.f()}}else{result={};for(var _i3=0,_Object$entries2=Object.entries(value);_i3<_Object$entries2.length;_i3++){var _Object$entries2$_i=_slicedToArray(_Object$entries2[_i3],2),name=_Object$entries2$_i[0],subValue=_Object$entries2$_i[1];result[name]=_replacer(name,subValue)}}seenObjects.set(value,result);return result}return value};return JSON.stringify(object,_replacer,numberOfSpaces)};return stringifier(object)};/**
 * Converts given map and all nested found maps objects to corresponding
 * object.
 * @param object - Map to convert to.
 * @param deep - Indicates whether to perform a recursive conversion.
 * @returns Given map as object.
 */var _convertMapToPlainObject=function convertMapToPlainObject(object,deep){if(deep===void 0){deep=true}if(_typeof(object)==="object"){if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isMap */ .jh)(object)){var newObject={};var _iterator6=_createForOfIteratorHelper(object),_step6;try{for(_iterator6.s();!(_step6=_iterator6.n()).done;){var _step6$value=_slicedToArray(_step6.value,2),key=_step6$value[0],value=_step6$value[1];if(deep)value=_convertMapToPlainObject(value,deep);if(["number","string"].includes(_typeof(key)))newObject[String(key)]=value}}catch(err){_iterator6.e(err)}finally{_iterator6.f()}return newObject}if(deep)if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isPlainObject */ .Qd)(object))for(var _i4=0,_Object$entries3=Object.entries(object);_i4<_Object$entries3.length;_i4++){var _Object$entries3$_i=_slicedToArray(_Object$entries3[_i4],2),_key2=_Object$entries3$_i[0],_value5=_Object$entries3$_i[1];object[_key2]=_convertMapToPlainObject(_value5,deep)}else if(Array.isArray(object)){var index=0;for(var _i5=0,_arr=object;_i5<_arr.length;_i5++){var _value6=_arr[_i5];object[index]=_convertMapToPlainObject(_value6,deep);index+=1}}else if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isSet */ .vM)(object)){var cache=[];var _iterator7=_createForOfIteratorHelper(object),_step7;try{for(_iterator7.s();!(_step7=_iterator7.n()).done;){var _value8=_step7.value;object.delete(_value8);cache.push(_convertMapToPlainObject(_value8,deep))}}catch(err){_iterator7.e(err)}finally{_iterator7.f()}for(var _i6=0,_cache2=cache;_i6<_cache2.length;_i6++){var _value7=_cache2[_i6];object.add(_value7)}}}return object};/**
 * Converts given plain object and all nested found objects to
 * corresponding map.
 * @param object - Object to convert to.
 * @param deep - Indicates whether to perform a recursive conversion.
 * @returns Given object as map.
 */var _convertPlainObjectToMap=function convertPlainObjectToMap(object,deep){if(deep===void 0){deep=true}if(_typeof(object)==="object"){if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isPlainObject */ .Qd)(object)){var newObject=new Map;for(var _i7=0,_Object$entries4=Object.entries(object);_i7<_Object$entries4.length;_i7++){var _Object$entries4$_i=_slicedToArray(_Object$entries4[_i7],2),key=_Object$entries4$_i[0],value=_Object$entries4$_i[1];if(deep)object[key]=_convertPlainObjectToMap(value,deep);newObject.set(key,object[key])}return newObject}if(deep)if(Array.isArray(object)){var index=0;for(var _i8=0,_arr2=object;_i8<_arr2.length;_i8++){var _value9=_arr2[_i8];object[index]=_convertPlainObjectToMap(_value9,deep);index+=1}}else if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isMap */ .jh)(object)){var _iterator8=_createForOfIteratorHelper(object),_step8;try{for(_iterator8.s();!(_step8=_iterator8.n()).done;){var _step8$value=_slicedToArray(_step8.value,2),_key3=_step8$value[0],_value0=_step8$value[1];object.set(_key3,_convertPlainObjectToMap(_value0,deep))}}catch(err){_iterator8.e(err)}finally{_iterator8.f()}}else if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isSet */ .vM)(object)){var cache=[];var _iterator9=_createForOfIteratorHelper(object),_step9;try{for(_iterator9.s();!(_step9=_iterator9.n()).done;){var _value10=_step9.value;object.delete(_value10);cache.push(_convertPlainObjectToMap(_value10,deep))}}catch(err){_iterator9.e(err)}finally{_iterator9.f()}for(var _i9=0,_cache3=cache;_i9<_cache3.length;_i9++){var _value1=_cache3[_i9];object.add(_value1)}}}return object};/**
 * Replaces given pattern in each value in given object recursively with
 * given string replacement.
 * @param object - Object to convert substrings in.
 * @param pattern - Regular expression to replace.
 * @param replacement - String to use as replacement for found patterns.
 * @returns Converted object with replaced patterns.
 */var _convertSubstringInPlainObject=function convertSubstringInPlainObject(object,pattern,replacement){for(var _i0=0,_Object$entries5=Object.entries(object);_i0<_Object$entries5.length;_i0++){var _Object$entries5$_i=_slicedToArray(_Object$entries5[_i0],2),key=_Object$entries5$_i[0],value=_Object$entries5$_i[1];if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isPlainObject */ .Qd)(value))object[key]=_convertSubstringInPlainObject(value,pattern,replacement);else if(typeof value==="string")object[key]=value.replace(pattern,replacement)}return object};/* eslint-disable jsdoc/require-description-complete-sentence *//**
 * Copies given object (of any type) into optionally given destination.
 * @param source - Object to copy.
 * @param copyBlobs - Determines whether to copy blobs as well.
 * @param recursionLimit - Specifies how deep we should traverse into given
 * object recursively.
 * @param recursionEndValue - Indicates which value to use for recursion ends.
 * Usually a reference to corresponding source value will be used.
 * @param destination - Target to copy source to.
 * @param cyclic - Indicates whether known sub structures should be copied or
 * referenced (if "true" endless loops can occur if source has cyclic
 * structures).
 * @param knownReferences - Used to avoid traversing loops and not to copy
 * references e.g. to objects not to copy (e.g. symbol polyfills).
 * @param recursionLevel - Internally used to track current recursion level in
 * given source data structure.
 * @returns Value "true" if both objects are equal and "false" otherwise.
 */var _copy=function copy(source,copyBlobs,recursionLimit,recursionEndValue,destination,cyclic,knownReferences,recursionLevel){if(copyBlobs===void 0){copyBlobs=false}if(recursionLimit===void 0){recursionLimit=-1}if(recursionEndValue===void 0){recursionEndValue=_constants_js__WEBPACK_IMPORTED_MODULE_2__/* .VALUE_COPY_SYMBOL */ .Fp}if(destination===void 0){destination=null}if(cyclic===void 0){cyclic=false}if(knownReferences===void 0){knownReferences=[]}if(recursionLevel===void 0){recursionLevel=0}/* eslint-enable jsdoc/require-description-complete-sentence */if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isObject */ .Gv)(source))if(destination){if(source===destination)throw new Error("Can't copy because source and destination are "+"identical.");if(!cyclic&&![undefined,null].includes(source)){var index=knownReferences.indexOf(source);if(index!==-1)return knownReferences[index];knownReferences.push(source)}var copyValue=function copyValue(value){if(recursionLimit!==-1&&recursionLimit<recursionLevel+1)return recursionEndValue===_constants_js__WEBPACK_IMPORTED_MODULE_2__/* .VALUE_COPY_SYMBOL */ .Fp?value:recursionEndValue;var result=_copy(value,copyBlobs,recursionLimit,recursionEndValue,null,cyclic,knownReferences,recursionLevel+1);if(!cyclic&&![undefined,null].includes(value)&&_typeof(value)==="object")knownReferences.push(value);return result};if(Array.isArray(source)){var _iterator0=_createForOfIteratorHelper(source),_step0;try{for(_iterator0.s();!(_step0=_iterator0.n()).done;){var item=_step0.value;destination.push(copyValue(item))}}catch(err){_iterator0.e(err)}finally{_iterator0.f()}}else if(source instanceof Map){var _iterator1=_createForOfIteratorHelper(source),_step1;try{for(_iterator1.s();!(_step1=_iterator1.n()).done;){var _step1$value=_slicedToArray(_step1.value,2),key=_step1$value[0],value=_step1$value[1];destination.set(key,copyValue(value))}}catch(err){_iterator1.e(err)}finally{_iterator1.f()}}else if(source instanceof Set){var _iterator10=_createForOfIteratorHelper(source),_step10;try{for(_iterator10.s();!(_step10=_iterator10.n()).done;){var _value11=_step10.value;destination.add(copyValue(_value11))}}catch(err){_iterator10.e(err)}finally{_iterator10.f()}}else for(var _i1=0,_Object$entries6=Object.entries(source);_i1<_Object$entries6.length;_i1++){var _Object$entries6$_i=_slicedToArray(_Object$entries6[_i1],2),_key4=_Object$entries6$_i[0],_value12=_Object$entries6$_i[1];try{destination[_key4]=copyValue(_value12)}catch(error){throw new Error("Failed to copy property value object \""+"".concat(_key4,"\": ").concat(_represent(error)),{cause:error})}}}else{if(Array.isArray(source))return _copy(source,copyBlobs,recursionLimit,recursionEndValue,[],cyclic,knownReferences,recursionLevel);if(source instanceof Map)return _copy(source,copyBlobs,recursionLimit,recursionEndValue,new Map,cyclic,knownReferences,recursionLevel);if(source instanceof Set)return _copy(source,copyBlobs,recursionLimit,recursionEndValue,new Set,cyclic,knownReferences,recursionLevel);if(source instanceof Date)return new Date(source.getTime());if(source instanceof RegExp){var modifier=/[^/]*$/.exec(source.toString());destination=new RegExp(source.source,modifier?modifier[0]:undefined);destination.lastIndex=source.lastIndex;return destination}if(typeof Blob!=="undefined"&&source instanceof Blob)return copyBlobs?source.slice(0,source.size,source.type):source;return _copy(source,copyBlobs,recursionLimit,recursionEndValue,{},cyclic,knownReferences,recursionLevel)}return destination||source};/**
 * Determine the internal JavaScript [[Class]] of an object.
 * @param value - Value to analyze.
 * @returns Name of determined type.
 */var determineType=function determineType(value){if([null,undefined].includes(value))return String(value);var type=_typeof(value);if(["function","object"].includes(type)&&"toString"in value){var stringRepresentation=Object.prototype.toString.call(value);if(Object.prototype.hasOwnProperty.call(_constants_js__WEBPACK_IMPORTED_MODULE_2__/* .CLASS_TO_TYPE_MAPPING */ .rq,stringRepresentation))return _constants_js__WEBPACK_IMPORTED_MODULE_2__/* .CLASS_TO_TYPE_MAPPING */ .rq[stringRepresentation]}return type};/**
 * Returns true if given items are equal for given property list. If
 * property list isn't set all properties will be checked. All keys which
 * starts with one of the exception prefixes will be omitted.
 * @param firstValue - First object to compare.
 * @param secondValue - Second object to compare.
 * @param givenOptions - Options to define how to compare.
 * @param givenOptions.properties - Property names to check. Check all if
 * "null" is selected (default).
 * @param givenOptions.deep - Recursion depth negative values means
 * infinitely deep (default).
 * @param givenOptions.exceptionPrefixes - Property prefixes which
 * indicates properties to ignore.
 * @param givenOptions.ignoreFunctions - Indicates whether functions have
 * to be identical to interpret is as equal. If set to "true" two functions
 * will be assumed to be equal (default).
 * @param givenOptions.compareBlobs - Indicates whether binary data should
 * be converted to a base64 string to compare their content. Makes this
 * function asynchronous in browsers and potentially takes a lot of
 * resources.
 * @returns Value "true" if both objects are equal and "false" otherwise.
 * If "compareBlobs" is activated, and we're running in a browser like
 * environment and binary data is given, then a promise wrapping the
 * determined boolean values is returned.
 */var _equals=function equals(firstValue,secondValue,givenOptions){if(givenOptions===void 0){givenOptions={}}var options=_objectSpread({compareBlobs:false,deep:-1,exceptionPrefixes:[],ignoreFunctions:true,properties:null,returnReasonIfNotEqual:false},givenOptions);if(options.ignoreFunctions&&(0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isFunction */ .Tn)(firstValue)&&(0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isFunction */ .Tn)(secondValue)||firstValue===secondValue||(0,_number_js__WEBPACK_IMPORTED_MODULE_4__/* .isNotANumber */ .W2)(firstValue)&&(0,_number_js__WEBPACK_IMPORTED_MODULE_4__/* .isNotANumber */ .W2)(secondValue)||firstValue instanceof RegExp&&secondValue instanceof RegExp&&firstValue.toString()===secondValue.toString()&&firstValue.flags.split("").sort().join("")===secondValue.flags.split("").sort().join("")||firstValue instanceof Date&&secondValue instanceof Date&&(isNaN(firstValue.getTime())&&isNaN(secondValue.getTime())||!isNaN(firstValue.getTime())&&!isNaN(secondValue.getTime())&&firstValue.getTime()===secondValue.getTime())||options.compareBlobs&&eval("typeof Buffer")!=="undefined"&&Object.prototype.hasOwnProperty.call(eval("Buffer"),"isBuffer")&&firstValue instanceof eval("Buffer")&&secondValue instanceof eval("Buffer")&&firstValue.toString("base64")===secondValue.toString("base64"))return true;if(options.compareBlobs&&typeof Blob!=="undefined"&&firstValue instanceof Blob&&secondValue instanceof Blob)return new Promise(function(resolve){var values=[];for(var _i10=0,_arr3=[firstValue,secondValue];_i10<_arr3.length;_i10++){var value=_arr3[_i10];var fileReader=new FileReader;fileReader.onload=function(event){if(event.target===null)values.push(null);else values.push(event.target.result);if(values.length===2)if(values[0]===values[1])resolve(true);else resolve(options.returnReasonIfNotEqual?">>> Blob(".concat(_represent(values[0]),")  !== ")+"Blob(".concat(_represent(values[1]),")"):false)};fileReader.readAsDataURL(value)}});if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isPlainObject */ .Qd)(firstValue)&&(0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isPlainObject */ .Qd)(secondValue)&&!(firstValue instanceof RegExp||secondValue instanceof RegExp)||Array.isArray(firstValue)&&Array.isArray(secondValue)&&firstValue.length===secondValue.length||determineType(firstValue)===determineType(secondValue)&&["map","set"].includes(determineType(firstValue))&&firstValue.size===secondValue.size){var promises=[];for(var _i11=0,_arr4=[[firstValue,secondValue],[secondValue,firstValue]];_i11<_arr4.length;_i11++){var _arr4$_i=_slicedToArray(_arr4[_i11],2),first=_arr4$_i[0],second=_arr4$_i[1];var firstIsArray=Array.isArray(first);if(firstIsArray&&(!Array.isArray(second)||first.length!==second.length))return options.returnReasonIfNotEqual?".length":false;var firstIsMap=(0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isMap */ .jh)(first);if(firstIsMap&&(!(0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isMap */ .jh)(second)||first.size!==second.size))return options.returnReasonIfNotEqual?".size":false;var firstIsSet=(0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isSet */ .vM)(first);if(firstIsSet&&(!(0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isSet */ .vM)(second)||first.size!==second.size))return options.returnReasonIfNotEqual?".size":false;if(firstIsArray){var index=0;var _loop2=function _loop2(){var value=_arr5[_i12];if(options.deep!==0){var result=_equals(value,second[index],_objectSpread(_objectSpread({},options),{},{deep:options.deep-1}));if(!result)return{v:false};var currentIndex=index;var determineResult=function determineResult(result){var _$$result$;return typeof result==="string"?"[".concat(String(currentIndex),"]")+((_$$result$={"[":"",">":" "}[result[0]])!==null&&_$$result$!==void 0?_$$result$:".")+result:result};if(Object.prototype.hasOwnProperty.call(result,"then"))promises.push(result.then(determineResult));if(typeof result==="string")return{v:determineResult(result)}}index+=1},_ret2;for(var _i12=0,_arr5=first;_i12<_arr5.length;_i12++){_ret2=_loop2();if(_ret2)return _ret2.v}}else if(firstIsMap){var _iterator11=_createForOfIteratorHelper(first),_step11;try{var _loop3=function _loop3(){var _step11$value=_slicedToArray(_step11.value,2),key=_step11$value[0],value=_step11$value[1];if(options.deep!==0){var result=_equals(value,second.get(key),_objectSpread(_objectSpread({},options),{},{deep:options.deep-1}));if(!result)return{v:false};var determineResult=function determineResult(result){var _$$result$2;return typeof result==="string"?"get(".concat(_represent(key),")")+((_$$result$2={"[":"",">":" "}[result[0]])!==null&&_$$result$2!==void 0?_$$result$2:".")+result:result};if(Object.prototype.hasOwnProperty.call(result,"then"))promises.push(result.then(determineResult));if(typeof result==="string")return{v:determineResult(result)}}},_ret3;for(_iterator11.s();!(_step11=_iterator11.n()).done;){_ret3=_loop3();if(_ret3)return _ret3.v}}catch(err){_iterator11.e(err)}finally{_iterator11.f()}}else if(firstIsSet){var _iterator12=_createForOfIteratorHelper(first),_step12;try{var _loop4=function _loop4(){var value=_step12.value;if(options.deep!==0){var equal=false;var subPromises=[];/*
                            NOTE: Check if their exists at least one being
                            equally.
                        */var _iterator13=_createForOfIteratorHelper(second),_step13;try{for(_iterator13.s();!(_step13=_iterator13.n()).done;){var _secondValue=_step13.value;var result=_equals(value,_secondValue,_objectSpread(_objectSpread({},options),{},{deep:options.deep-1}));if(typeof result==="boolean"){if(result){equal=true;break}}else subPromises.push(result)}}catch(err){_iterator13.e(err)}finally{_iterator13.f()}var determineResult=function determineResult(equal){return equal?true:options.returnReasonIfNotEqual?">>> {-> ".concat(_represent(value)," not found}"):false};if(equal)/*
                                NOTE: We do not have to wait for promises to be
                                resolved when one match could be found.
                            */return 0;// continue
if(subPromises.length)promises.push(new Promise(function(resolve){Promise.all(subPromises).then(function(results){resolve(determineResult(results.some(function(result){return result})))},function(){// Do nothing.
})}));return{v:determineResult(false)}}},_ret4;for(_iterator12.s();!(_step12=_iterator12.n()).done;){_ret4=_loop4();if(_ret4===0)continue;if(_ret4)return _ret4.v}}catch(err){_iterator12.e(err)}finally{_iterator12.f()}}else{var _loop5=function _loop5(){var _Object$entries7$_i=_slicedToArray(_Object$entries7[_i13],2),key=_Object$entries7$_i[0],value=_Object$entries7$_i[1];if(options.properties&&!options.properties.includes(key))return 0;// break
var doBreak=false;var _iterator14=_createForOfIteratorHelper(options.exceptionPrefixes),_step14;try{for(_iterator14.s();!(_step14=_iterator14.n()).done;){var exceptionPrefix=_step14.value;if(key.startsWith(exceptionPrefix)){doBreak=true;break}}}catch(err){_iterator14.e(err)}finally{_iterator14.f()}if(doBreak)return 0;// break
if(options.deep!==0){var result=_equals(value,second[key],_objectSpread(_objectSpread({},options),{},{deep:options.deep-1}));if(!result)return{v:false};var determineResult=function determineResult(result){var _$$result$3;return typeof result==="string"?key+((_$$result$3={"[":"",">":" "}[result[0]])!==null&&_$$result$3!==void 0?_$$result$3:".")+result:result};if(Object.prototype.hasOwnProperty.call(result,"then"))promises.push(result.then(determineResult));if(typeof result==="string")return{v:determineResult(result)}}},_ret5;for(var _i13=0,_Object$entries7=Object.entries(first);_i13<_Object$entries7.length;_i13++){_ret5=_loop5();if(_ret5===0)break;if(_ret5)return _ret5.v}}}if(promises.length)return new Promise(function(resolve){Promise.all(promises).then(function(results){var _iterator15=_createForOfIteratorHelper(results),_step15;try{for(_iterator15.s();!(_step15=_iterator15.n()).done;){var result=_step15.value;if(!result||typeof result==="string"){resolve(result);break}}}catch(err){_iterator15.e(err)}finally{_iterator15.f()}resolve(true)},function(){// Do nothing.
})});return true}return options.returnReasonIfNotEqual?">>> ".concat(_represent(firstValue)," !== ").concat(_represent(secondValue)):false};/**
 * Wraps given data structure into proxies recursively to evaluate and resolve
 * each get request to data having an object with indicating keys and replaces
 * that object with corresponding evaluated values. All nested objects are
 * wrapped with a proxy to resolve chains of referencing expressions as well.
 * @param object - Given mapping to resolve.
 * @param givenOptions - Options to configure evaluation.
 * @param givenOptions.scope - Scope to use evaluate again.
 * @param givenOptions.selfReferenceName - Name to use for reference to given
 * object.
 * @param givenOptions.expressionIndicatorKey - Indicator property name to mark
 * a value to evaluate.
 * @param givenOptions.executionIndicatorKey - Indicator property name to mark
 * a value to evaluate.
 * @returns Evaluated given mapping.
 */var evaluateDynamicData=function evaluateDynamicData(object,givenOptions){if(givenOptions===void 0){givenOptions={}}var options=_objectSpread({scope:{},selfReferenceName:"self",expressionIndicatorKey:"__evaluate__",executionIndicatorKey:"__execute__"},givenOptions);if(_typeof(object)!=="object"||object===null)return object;if(!(options.selfReferenceName in options.scope))options.scope[options.selfReferenceName]=object;var internalEvaluateAndThrowError=function internalEvaluateAndThrowError(code,type){if(type===void 0){type=options.expressionIndicatorKey}return (0,_string_js__WEBPACK_IMPORTED_MODULE_5__/* .evaluateOrThrowError */ .VK)(code,{scope:options.scope,async:false,execute:type===options.executionIndicatorKey})};var _addProxyRecursively=function addProxyRecursively(data){if(_typeof(data)!=="object"||data===null||typeof Proxy==="undefined")return data;for(var _i14=0,_Object$entries8=Object.entries(data);_i14<_Object$entries8.length;_i14++){var _Object$entries8$_i=_slicedToArray(_Object$entries8[_i14],2),key=_Object$entries8$_i[0],givenValue=_Object$entries8$_i[1];if(key!=="__target__"&&(0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isObject */ .Gv)(givenValue)){var value=givenValue;_addProxyRecursively(value);// NOTE: We only wrap needed objects for performance reasons.
if(Object.prototype.hasOwnProperty.call(value,options.expressionIndicatorKey)||Object.prototype.hasOwnProperty.call(value,options.executionIndicatorKey)){var backup=value;data[key]=new Proxy(value,{get:function get(target,key){if(key==="__target__")return target;if(key==="hasOwnProperty")/*
                                        eslint-disable
                                        @typescript-eslint/unbound-method
                                    */return target[key];/*
                                        eslint-enable
                                        @typescript-eslint/unbound-method
                                    *//*
                                    NOTE: Very complicated section, do only
                                    changes while having good tests.
                                */for(var _i15=0,_arr6=[options.expressionIndicatorKey,options.executionIndicatorKey];_i15<_arr6.length;_i15++){var type=_arr6[_i15];if(key===type&&typeof target[key]==="string")return _resolve(internalEvaluateAndThrowError(target[key],type))}var resolvedTarget=_resolve(target);if(key==="toString"){var result=internalEvaluateAndThrowError(resolvedTarget);return result[key].bind(result)}if(typeof key!=="string"){var _result$key;var _result=internalEvaluateAndThrowError(resolvedTarget);if((_result$key=_result[key])!==null&&_result$key!==void 0&&_result$key.bind)return _result[key].bind(_result);return _result[key]}for(var _i16=0,_arr7=[options.expressionIndicatorKey,options.executionIndicatorKey];_i16<_arr7.length;_i16++){var _type=_arr7[_i16];if(Object.prototype.hasOwnProperty.call(target,_type)){var _result2=internalEvaluateAndThrowError(target[_type],_type);/*
                                            NOTE: Resolving the whole
                                            evaluated result could re-enter
                                            the currently running evaluation
                                            (cyclic references between
                                            dynamic values) so only the
                                            accessed value gets resolved.
                                        */var _value13=_resolve(_result2[key]);if(_value13!==null&&_value13!==void 0&&_value13.bind)return _value13.bind(_result2);return _value13}}return resolvedTarget[key];// End of complicated stuff.
},ownKeys:function ownKeys(target){for(var _i17=0,_arr8=[options.expressionIndicatorKey,options.executionIndicatorKey];_i17<_arr8.length;_i17++){var type=_arr8[_i17];if(Object.prototype.hasOwnProperty.call(target,type))return Object.getOwnPropertyNames(_resolve(internalEvaluateAndThrowError(target[type],type)))}return Object.getOwnPropertyNames(target)}});/*
                        NOTE: Known proxy polyfills does not provide the
                        "__target__" api.
                    */if(!data[key].__target__)data[key].__target__=backup}}}return data};var _resolve=function resolve(data){if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isObject */ .Gv)(data)){if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isProxy */ .ju)(data)){// NOTE: We have to skip "ownKeys" proxy trap here.
for(var _i18=0,_arr9=[options.expressionIndicatorKey,options.executionIndicatorKey];_i18<_arr9.length;_i18++){var type=_arr9[_i18];if(Object.prototype.hasOwnProperty.call(data,type))return data[type]}data=data.__target__}for(var _i19=0,_Object$entries9=Object.entries(data);_i19<_Object$entries9.length;_i19++){var _Object$entries9$_i=_slicedToArray(_Object$entries9[_i19],2),key=_Object$entries9$_i[0],value=_Object$entries9$_i[1];if([options.expressionIndicatorKey,options.executionIndicatorKey].includes(key)){if(typeof Proxy==="undefined")return _resolve(internalEvaluateAndThrowError(value));return value}data[key]=_resolve(value)}}return data};options.scope.resolve=_resolve;var _removeProxyRecursively=function removeProxyRecursively(data){if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isObject */ .Gv)(data))for(var _i20=0,_Object$entries0=Object.entries(data);_i20<_Object$entries0.length;_i20++){var _Object$entries0$_i=_slicedToArray(_Object$entries0[_i20],2),key=_Object$entries0$_i[0],value=_Object$entries0$_i[1];if(key!=="__target__"&&value!==null&&["function","undefined"].includes(_typeof(value))){var target=value.__target__;if(typeof target!=="undefined")data[key]=target;_removeProxyRecursively(value)}}return data};if(Object.prototype.hasOwnProperty.call(object,options.expressionIndicatorKey))return internalEvaluateAndThrowError(object[options.expressionIndicatorKey]);else if(Object.prototype.hasOwnProperty.call(object,options.executionIndicatorKey))return internalEvaluateAndThrowError(object[options.executionIndicatorKey],options.executionIndicatorKey);return _removeProxyRecursively(_resolve(_addProxyRecursively(object)))};/**
 * Searches for indicating keys and replaces that data with corresponding
 * evaluated and promise resolved value.
 * @param data - Given mapping to resolve.
 * @param givenOptions - Options to configure evaluation.
 * @param givenOptions.scope - Scope to use evaluate again.
 * @param givenOptions.selfReferenceName - Name to use for reference to given
 * object.
 * @param givenOptions.expressionIndicatorKey - Indicator property name to mark
 * a value to evaluate.
 * @param givenOptions.executionIndicatorKey - Indicator property name to mark
 * a value to evaluate.
 * @returns Evaluated given mapping.
 */var _evaluateAsyncDynamicData=/*#__PURE__*/function(){var _evaluateAsyncDynamicData2=_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(data,givenOptions){var options,result,index,_iterator16,_step16,item,_i21,_Object$entries1,_Object$entries1$_i,key,value,_t;return _regenerator().w(function(_context){while(1)switch(_context.p=_context.n){case 0:if(givenOptions===void 0){givenOptions={}}options=_objectSpread({scope:{},selfReferenceName:"self",expressionIndicatorKey:"__async_evaluate__",executionIndicatorKey:"__async_execute__"},givenOptions);if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isObject */ .Gv)(data)){_context.n=1;break}return _context.a(2,data);case 1:if(!(options.selfReferenceName in options.scope))options.scope[options.selfReferenceName]=data;result=data;if(!Array.isArray(data)){_context.n=10;break}index=0;_iterator16=_createForOfIteratorHelper(data);_context.p=2;_iterator16.s();case 3:if((_step16=_iterator16.n()).done){_context.n=6;break}item=_step16.value;_context.n=4;return _evaluateAsyncDynamicData(item,options);case 4:result[index]=_context.v;index+=1;case 5:_context.n=3;break;case 6:_context.n=8;break;case 7:_context.p=7;_t=_context.v;_iterator16.e(_t);case 8:_context.p=8;_iterator16.f();return _context.f(8);case 9:return _context.a(2,result);case 10:_i21=0,_Object$entries1=Object.entries(data);case 11:if(!(_i21<_Object$entries1.length)){_context.n=16;break}_Object$entries1$_i=_slicedToArray(_Object$entries1[_i21],2),key=_Object$entries1$_i[0],value=_Object$entries1$_i[1];if(![options.expressionIndicatorKey,options.executionIndicatorKey].includes(key)){_context.n=13;break}_context.n=12;return (0,_string_js__WEBPACK_IMPORTED_MODULE_5__/* .evaluateOrThrowError */ .VK)(value,{scope:options.scope,async:true,execute:key===options.executionIndicatorKey});case 12:return _context.a(2,_context.v);case 13:_context.n=14;return _evaluateAsyncDynamicData(value,options);case 14:result[key]=_context.v;case 15:_i21++;_context.n=11;break;case 16:return _context.a(2,result)}},_callee,null,[[2,7,8,9]])}));function evaluateAsyncDynamicData(_x,_x2){return _evaluateAsyncDynamicData2.apply(this,arguments)}return evaluateAsyncDynamicData}();/**
 * Removes properties in objects where a dynamic indicator lives.
 * @param data - Object to traverse recursively.
 * @param expressionIndicators - Property key to remove.
 * @returns Given object with removed properties.
 */var _removeKeysInEvaluation=function removeKeysInEvaluation(data,expressionIndicators){if(expressionIndicators===void 0){expressionIndicators=["__evaluate__","__execute__"]}for(var _i22=0,_Object$entries10=Object.entries(data);_i22<_Object$entries10.length;_i22++){var _Object$entries10$_i=_slicedToArray(_Object$entries10[_i22],2),key=_Object$entries10$_i[0],value=_Object$entries10$_i[1];if(!expressionIndicators.includes(key)&&expressionIndicators.some(function(name){return Object.prototype.hasOwnProperty.call(data,name)}))delete data[key];else if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isPlainObject */ .Qd)(value))_removeKeysInEvaluation(value,expressionIndicators)}return data};/**
 * Extends given target object with given sources object. As target and
 * sources many expandable types are allowed but target and sources have to
 * come from the same type.
 * @param targetOrDeepIndicator - Maybe the target or deep indicator.
 * @param targetOrSource - Target or source object; depending on first
 * argument.
 * @param additionalSources - Source objects to extend into target.
 * @returns Returns given target extended with all given sources.
 */var _extend=function extend(targetOrDeepIndicator,targetOrSource){var deep=false;for(var _len=arguments.length,additionalSources=new Array(_len>2?_len-2:0),_key5=2;_key5<_len;_key5++){additionalSources[_key5-2]=arguments[_key5]}var sources=additionalSources;var target;if(targetOrDeepIndicator===_constants_js__WEBPACK_IMPORTED_MODULE_2__/* .IGNORE_NULL_AND_UNDEFINED_SYMBOL */ .p_||typeof targetOrDeepIndicator==="boolean"){// Handle a deep copy situation and skip deep indicator and target.
deep=targetOrDeepIndicator;target=targetOrSource}else{target=targetOrDeepIndicator;if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isObject */ .Gv)(targetOrSource))sources=[targetOrSource].concat(_toConsumableArray(sources));else if(targetOrSource!==undefined)target=targetOrSource}var mergeValue=function mergeValue(targetValue,value){if(value===targetValue)return targetValue;// Traverse recursively if we're merging plain objects or maps.
if(deep&&value&&((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isPlainObject */ .Qd)(value)||(0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isMap */ .jh)(value))){var clone;if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isMap */ .jh)(value))clone=targetValue&&(0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isMap */ .jh)(targetValue)?targetValue:new Map;else clone=targetValue&&(0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isPlainObject */ .Qd)(targetValue)?targetValue:{};return _extend(deep,clone,value)}return value};var _iterator17=_createForOfIteratorHelper(sources),_step17;try{for(_iterator17.s();!(_step17=_iterator17.n()).done;){var source=_step17.value;var targetType=_typeof(target);var sourceType=_typeof(source);if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isMap */ .jh)(target))targetType+=" Map";if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isMap */ .jh)(source))sourceType+=" Map";if(targetType===sourceType&&target!==source){if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isMap */ .jh)(target)&&(0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isMap */ .jh)(source)){var _iterator18=_createForOfIteratorHelper(source),_step18;try{for(_iterator18.s();!(_step18=_iterator18.n()).done;){var _step18$value=_slicedToArray(_step18.value,2),key=_step18$value[0],value=_step18$value[1];target.set(key,mergeValue(target.get(key),value))}}catch(err){_iterator18.e(err)}finally{_iterator18.f()}}else if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isObject */ .Gv)(target)&&!Array.isArray(target)&&!(typeof Blob!=="undefined"&&target instanceof Blob)&&(0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isObject */ .Gv)(source)&&!Array.isArray(source)&&!(typeof Blob!=="undefined"&&source instanceof Blob)){for(var _i23=0,_Object$entries11=Object.entries(source);_i23<_Object$entries11.length;_i23++){var _Object$entries11$_i=_slicedToArray(_Object$entries11[_i23],2),_key6=_Object$entries11$_i[0],_value14=_Object$entries11$_i[1];if(!(deep===_constants_js__WEBPACK_IMPORTED_MODULE_2__/* .IGNORE_NULL_AND_UNDEFINED_SYMBOL */ .p_&&[null,undefined].includes(_value14)))target[_key6]=mergeValue(target[_key6],_value14)}}else target=source;}else target=source}}catch(err){_iterator17.e(err)}finally{_iterator17.f()}return target};/**
 * Generates a proxy handler which forwards all operations to given object
 * as there wouldn't be a proxy.
 * @param target - Object to proxy.
 * @param methodNames - Mapping of operand name to object specific method
 * name.
 * @returns Determined proxy handler.
 */var getProxyHandler=function getProxyHandler(target,methodNames){if(methodNames===void 0){methodNames={}}methodNames=_objectSpread({delete:"[]",get:"[]",has:"[]",set:"[]"},methodNames);return{deleteProperty:function deleteProperty(_targetObject,key){if(methodNames.delete==="[]"&&typeof key==="string")delete target[key];else return target[methodNames.delete](key);return true},get:function get(_targetObject,key){if(methodNames.get==="[]"&&typeof key==="string")return target[key];return target[methodNames.get](key)},has:function has(_targetObject,key){if(methodNames.has==="[]")return key in target;return target[methodNames.has](key)},set:function set(_targetObject,key,value){if(methodNames.set==="[]"&&typeof key==="string")target[key]=value;else return target[methodNames.set](key,value);return true}}};/**
 * Slices all properties from given object which does not match provided
 * object mask. Items can be explicitly whitelisted via "include" mask
 * configuration or black listed via "exclude" mask configuration.
 * @param object - Object to slice.
 * @param maskConfiguration - Mask configuration.
 * @returns Given but sliced object. If (nested) object will be modified a
 * flat copy of that object will be returned.
 */var _mask=function mask(object,maskConfiguration){maskConfiguration=_objectSpread({exclude:false,include:true},maskConfiguration);if(maskConfiguration.exclude===true||Array.isArray(maskConfiguration.exclude)&&maskConfiguration.exclude.length===0||maskConfiguration.include===false||_typeof(object)!=="object")return{};var exclude=Array.isArray(maskConfiguration.exclude)?maskConfiguration.exclude.reduce(function(mask,key){return _objectSpread(_objectSpread({},mask),{},_defineProperty({},key,true))},{}):maskConfiguration.exclude;var include=Array.isArray(maskConfiguration.include)?maskConfiguration.include.reduce(function(mask,key){return _objectSpread(_objectSpread({},mask),{},_defineProperty({},key,true))},{}):maskConfiguration.include;var result={};if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isPlainObject */ .Qd)(include)){for(var _i24=0,_Object$entries12=Object.entries(include);_i24<_Object$entries12.length;_i24++){var _Object$entries12$_i=_slicedToArray(_Object$entries12[_i24],2),key=_Object$entries12$_i[0],value=_Object$entries12$_i[1];if(Object.prototype.hasOwnProperty.call(object,key))if(value===true)result[key]=object[key];else if(((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isPlainObject */ .Qd)(value)||Array.isArray(value)&&value.length)&&_typeof(object[key])==="object")result[key]=_mask(object[key],{include:value})}}else// In this branch "mask.include === true" holds.
result=object;if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isPlainObject */ .Qd)(exclude)){var useCopy=false;var copy=_objectSpread({},result);for(var _i25=0,_Object$entries13=Object.entries(exclude);_i25<_Object$entries13.length;_i25++){var _Object$entries13$_i=_slicedToArray(_Object$entries13[_i25],2),_key7=_Object$entries13$_i[0],_value15=_Object$entries13$_i[1];if(Object.prototype.hasOwnProperty.call(copy,_key7))if(_value15===true){useCopy=true;delete copy[_key7]}else if(((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isPlainObject */ .Qd)(_value15)||Array.isArray(_value15)&&_value15.length)&&_typeof(copy[_key7])==="object"){var current=copy[_key7];copy[_key7]=_mask(copy[_key7],{exclude:_value15});if(copy[_key7]!==current)useCopy=true}}if(useCopy)result=copy}return result};/**
 * Modifies given target corresponding to given source and removes source
 * modification infos.
 * @param target - Object to modify.
 * @param source - Source object to load modifications from.
 * @param removeIndicatorKey - Indicator property name or value to mark a
 * value to remove from object or list.
 * @param prependIndicatorKey - Indicator property name to mark a value to
 * prepend to target list.
 * @param appendIndicatorKey - Indicator property name to mark a value to
 * append to target list.
 * @param positionPrefix - Indicates a prefix to use a value on given
 * position to add or remove.
 * @param positionSuffix - Indicates a suffix to use a value on given
 * position to add or remove.
 * @param parentSource - Source context to remove modification info from
 * (usually only needed internally).
 * @param parentKey - Source key in given source context to remove
 * modification info from (usually only needed internally).
 * @returns Given target modified with given source.
 */var _modifyObject=function modifyObject(target,source,removeIndicatorKey,prependIndicatorKey,appendIndicatorKey,positionPrefix,positionSuffix,parentSource,parentKey){if(removeIndicatorKey===void 0){removeIndicatorKey="__remove__"}if(prependIndicatorKey===void 0){prependIndicatorKey="__prepend__"}if(appendIndicatorKey===void 0){appendIndicatorKey="__append__"}if(positionPrefix===void 0){positionPrefix="__"}if(positionSuffix===void 0){positionSuffix="__"}if(parentSource===void 0){parentSource=null}if(parentKey===void 0){parentKey=null}if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isMap */ .jh)(source)&&(0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isMap */ .jh)(target)){var _iterator19=_createForOfIteratorHelper(source),_step19;try{for(_iterator19.s();!(_step19=_iterator19.n()).done;){var _step19$value=_slicedToArray(_step19.value,2),key=_step19$value[0],value=_step19$value[1];if(target.has(key))_modifyObject(target.get(key),value,removeIndicatorKey,prependIndicatorKey,appendIndicatorKey,positionPrefix,positionSuffix,source,key)}}catch(err){_iterator19.e(err)}finally{_iterator19.f()}}else if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isObject */ .Gv)(source)&&(0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isObject */ .Gv)(target))for(var _i26=0,_Object$entries14=Object.entries(source);_i26<_Object$entries14.length;_i26++){var _Object$entries14$_i=_slicedToArray(_Object$entries14[_i26],2),_key8=_Object$entries14$_i[0],sourceValue=_Object$entries14$_i[1];var index=NaN;if(Array.isArray(target)&&_key8.startsWith(positionPrefix)&&_key8.endsWith(positionSuffix)){index=parseInt(_key8.substring(positionPrefix.length,_key8.length-positionSuffix.length),10);if(index<0||index>=target.length)index=NaN}if([removeIndicatorKey,prependIndicatorKey,appendIndicatorKey].includes(_key8)||!isNaN(index)){if(Array.isArray(target)){if(_key8===removeIndicatorKey){var values=[].concat(sourceValue);var _iterator20=_createForOfIteratorHelper(values),_step20;try{for(_iterator20.s();!(_step20=_iterator20.n()).done;){var _value16=_step20.value;if(typeof _value16==="string"&&_value16.startsWith(positionPrefix)&&_value16.endsWith(positionSuffix))target.splice(parseInt(_value16.substring(positionPrefix.length,_value16.length-positionSuffix.length),10),1);else if(target.includes(_value16))target.splice(target.indexOf(_value16),1);else if(typeof _value16==="number"&&_value16<target.length)target.splice(_value16,1)}}catch(err){_iterator20.e(err)}finally{_iterator20.f()}}else if(_key8===appendIndicatorKey)target=target.concat(sourceValue);else if(_key8===prependIndicatorKey)target=[].concat(sourceValue).concat(target);else if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isObject */ .Gv)(target[index])&&(0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isObject */ .Gv)(sourceValue))_extend(true,_modifyObject(target[index],sourceValue,removeIndicatorKey,prependIndicatorKey,appendIndicatorKey,positionPrefix,positionSuffix),target[index],sourceValue);else target[index]=sourceValue;}else if(_key8===removeIndicatorKey){var _iterator21=_createForOfIteratorHelper([].concat(sourceValue)),_step21;try{for(_iterator21.s();!(_step21=_iterator21.n()).done;){var _value17=_step21.value;if(typeof _value17==="string"&&Object.prototype.hasOwnProperty.call(target,_value17))delete target[_value17]}}catch(err){_iterator21.e(err)}finally{_iterator21.f()}}delete source[_key8];if(parentSource&&typeof parentKey==="string")delete parentSource[parentKey]}else if(target!==null&&Object.prototype.hasOwnProperty.call(target,_key8))target[_key8]=_modifyObject(target[_key8],sourceValue,removeIndicatorKey,prependIndicatorKey,appendIndicatorKey,positionPrefix,positionSuffix,source,_key8)}return target};/**
 * Removes given key from given object recursively.
 * @param object - Object to process.
 * @param keys - List of keys to remove.
 * @returns Processed given object.
 */var _removeKeyPrefixes=function removeKeyPrefixes(object,keys){if(keys===void 0){keys="#"}var resolvedKeys=[].concat(keys);if(Array.isArray(object)){var index=0;var _iterator22=_createForOfIteratorHelper(object.slice()),_step22;try{for(_iterator22.s();!(_step22=_iterator22.n()).done;){var subObject=_step22.value;var skip=false;if(typeof subObject==="string"){var _iterator23=_createForOfIteratorHelper(resolvedKeys),_step23;try{for(_iterator23.s();!(_step23=_iterator23.n()).done;){var key=_step23.value;if(subObject.startsWith("".concat(key,":"))){object.splice(index,1);skip=true;break}}}catch(err){_iterator23.e(err)}finally{_iterator23.f()}if(skip)continue}object[index]=_removeKeyPrefixes(subObject,resolvedKeys);index+=1}}catch(err){_iterator22.e(err)}finally{_iterator22.f()}}else if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isSet */ .vM)(object)){var _iterator24=_createForOfIteratorHelper(new Set(object)),_step24;try{for(_iterator24.s();!(_step24=_iterator24.n()).done;){var _subObject=_step24.value;var _skip=false;if(typeof _subObject==="string"){var _iterator25=_createForOfIteratorHelper(resolvedKeys),_step25;try{for(_iterator25.s();!(_step25=_iterator25.n()).done;){var _key9=_step25.value;if(_subObject.startsWith("".concat(_key9,":"))){object.delete(_subObject);_skip=true;break}}}catch(err){_iterator25.e(err)}finally{_iterator25.f()}if(_skip)continue}_removeKeyPrefixes(_subObject,resolvedKeys)}}catch(err){_iterator24.e(err)}finally{_iterator24.f()}}else if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isMap */ .jh)(object)){var _iterator26=_createForOfIteratorHelper(new Map(object)),_step26;try{for(_iterator26.s();!(_step26=_iterator26.n()).done;){var _step26$value=_slicedToArray(_step26.value,2),_key0=_step26$value[0],_subObject2=_step26$value[1];var _skip2=false;if(typeof _key0==="string"){var _iterator27=_createForOfIteratorHelper(resolvedKeys),_step27;try{for(_iterator27.s();!(_step27=_iterator27.n()).done;){var resolvedKey=_step27.value;var escapedKey=(0,_string_js__WEBPACK_IMPORTED_MODULE_5__/* .escapeRegularExpressions */ .jt)(resolvedKey);if(new RegExp("^".concat(escapedKey,"[0-9]*$")).test(_key0)){object.delete(_key0);_skip2=true;break}}}catch(err){_iterator27.e(err)}finally{_iterator27.f()}if(_skip2)continue}object.set(_key0,_removeKeyPrefixes(_subObject2,resolvedKeys))}}catch(err){_iterator26.e(err)}finally{_iterator26.f()}}else if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isObject */ .Gv)(object))for(var _i27=0,_Object$entries15=Object.entries(Object.assign({},object));_i27<_Object$entries15.length;_i27++){var _Object$entries15$_i=_slicedToArray(_Object$entries15[_i27],2),_key1=_Object$entries15$_i[0],value=_Object$entries15$_i[1];var _skip3=false;var _iterator28=_createForOfIteratorHelper(resolvedKeys),_step28;try{for(_iterator28.s();!(_step28=_iterator28.n()).done;){var _resolvedKey=_step28.value;var _escapedKey=(0,_string_js__WEBPACK_IMPORTED_MODULE_5__/* .escapeRegularExpressions */ .jt)(_resolvedKey);if(new RegExp("^".concat(_escapedKey,"[0-9]*$")).test(_key1)){delete object[_key1];_skip3=true;break}}}catch(err){_iterator28.e(err)}finally{_iterator28.f()}if(_skip3)continue;object[_key1]=_removeKeyPrefixes(value,resolvedKeys)}return object};/**
 * Represents given object as formatted string.
 * @param object - Object to represent.
 * @param maximumLengthOfLists - Maximum number of array item to render.
 * @param indention - String (usually whitespaces) to use as indention.
 * @param initialIndention - String (usually whitespaces) to use as
 * additional indention for the first object traversing level.
 * @param maximumNumberOfLevelsReachedIdentifier - Replacement for objects
 * which are out of specified bounds to traverse.
 * @param numberOfLevels - Specifies number of levels to traverse given
 * data structure.
 * @returns Representation string.
 */var _represent=function represent(object,maximumLengthOfLists,indention,initialIndention,maximumNumberOfLevelsReachedIdentifier,numberOfLevels){if(maximumLengthOfLists===void 0){maximumLengthOfLists=30}if(indention===void 0){indention="    "}if(initialIndention===void 0){initialIndention=""}if(maximumNumberOfLevelsReachedIdentifier===void 0){maximumNumberOfLevelsReachedIdentifier="__maximum_number_of_levels_reached__"}if(numberOfLevels===void 0){numberOfLevels=8}if(numberOfLevels===0)return String(maximumNumberOfLevelsReachedIdentifier);if(object===null)return"null";if(object===undefined)return"undefined";if(typeof object==="string")return"\"".concat(object.replace(/\n/g,"\n".concat(initialIndention)),"\"");if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isNumeric */ .kf)(object)||typeof object==="boolean")return String(object);if(object instanceof Date)return object.toISOString();if(Array.isArray(object)){var _result3="[";var _firstSeen=false;var _counter=1;var _iterator29=_createForOfIteratorHelper(object),_step29;try{for(_iterator29.s();!(_step29=_iterator29.n()).done;){var item=_step29.value;if(_counter>maximumLengthOfLists){_result3+="\n".concat(initialIndention,"...");break}if(_firstSeen)_result3+=",";_result3+="\n".concat(initialIndention).concat(indention)+_represent(item,maximumLengthOfLists,indention,"".concat(initialIndention).concat(indention),maximumNumberOfLevelsReachedIdentifier,numberOfLevels-1);_firstSeen=true;_counter+=1}}catch(err){_iterator29.e(err)}finally{_iterator29.f()}if(_firstSeen)_result3+="\n".concat(initialIndention);_result3+="]";return _result3}if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isMap */ .jh)(object)){var _result4="";var _firstSeen2=false;var _counter2=1;var _iterator30=_createForOfIteratorHelper(object),_step30;try{for(_iterator30.s();!(_step30=_iterator30.n()).done;){var _step30$value=_slicedToArray(_step30.value,2),key=_step30$value[0],_item=_step30$value[1];if(_counter2>maximumLengthOfLists){_result4+=",\n".concat(initialIndention,"...");break}if(_firstSeen2)_result4+=",\n".concat(initialIndention).concat(indention);_result4+=_represent(key,maximumLengthOfLists,indention,"".concat(initialIndention).concat(indention),maximumNumberOfLevelsReachedIdentifier,numberOfLevels-1)+" -> "+_represent(_item,maximumLengthOfLists,indention,"".concat(initialIndention).concat(indention),maximumNumberOfLevelsReachedIdentifier,numberOfLevels-1);_firstSeen2=true;_counter2+=1}}catch(err){_iterator30.e(err)}finally{_iterator30.f()}if(!_firstSeen2)_result4="EmptyMap";return _result4}if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isSet */ .vM)(object)){var _result5="{";var _firstSeen3=false;var _counter3=1;var _iterator31=_createForOfIteratorHelper(object),_step31;try{for(_iterator31.s();!(_step31=_iterator31.n()).done;){var _item2=_step31.value;if(_counter3>maximumLengthOfLists){_result5+=",\n".concat(initialIndention,"...");break}if(_firstSeen3)_result5+=",";_result5+="\n".concat(initialIndention).concat(indention)+_represent(_item2,maximumLengthOfLists,indention,"".concat(initialIndention).concat(indention),maximumNumberOfLevelsReachedIdentifier,numberOfLevels-1);_firstSeen3=true;_counter3+=1}}catch(err){_iterator31.e(err)}finally{_iterator31.f()}if(_firstSeen3)_result5+="\n".concat(initialIndention,"}");else _result5="EmptySet";return _result5}if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isFunction */ .Tn)(object))return"__function__";var result="{";var keys=Object.getOwnPropertyNames(object).sort();var firstSeen=false;var counter=1;var _iterator32=_createForOfIteratorHelper(keys),_step32;try{for(_iterator32.s();!(_step32=_iterator32.n()).done;){var _key10=_step32.value;if(counter>maximumLengthOfLists){result+=",\n".concat(initialIndention,"...");break}if(firstSeen)result+=",";result+="\n".concat(initialIndention).concat(indention).concat(_key10,": ")+_represent(object[_key10],maximumLengthOfLists,indention,"".concat(initialIndention).concat(indention),maximumNumberOfLevelsReachedIdentifier,numberOfLevels-1);firstSeen=true;counter+=1}}catch(err){_iterator32.e(err)}finally{_iterator32.f()}if(firstSeen)result+="\n".concat(initialIndention);result+="}";return result};/**
 * Sort given objects keys.
 * @param object - Object which keys should be sorted.
 * @returns Sorted list of given keys.
 */var sort=function sort(object){var keys=[];if(Array.isArray(object))for(var index=0;index<object.length;index++)keys.push(index);else if(_typeof(object)==="object")if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isMap */ .jh)(object)){var _iterator33=_createForOfIteratorHelper(object),_step33;try{for(_iterator33.s();!(_step33=_iterator33.n()).done;){var keyValuePair=_step33.value;keys.push(keyValuePair[0])}}catch(err){_iterator33.e(err)}finally{_iterator33.f()}}else if(object!==null)for(var _i28=0,_Object$keys=Object.keys(object);_i28<_Object$keys.length;_i28++){var key=_Object$keys[_i28];keys.push(key)}return keys.sort()};/**
 * Removes a proxy from given data structure recursively.
 * @param object - Object to proxy.
 * @param seenObjects - Tracks all already processed objects to avoid
 * endless loops (usually only needed for internal purpose).
 * @returns Returns given object unwrapped from a dynamic proxy.
 */var _unwrapProxy=function unwrapProxy(object,seenObjects){if(seenObjects===void 0){seenObjects=new Set}if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isObject */ .Gv)(object)){if(seenObjects.has(object))return object;try{if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isFunction */ .Tn)(object.__revoke__)){if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isProxy */ .ju)(object))object=object.__target__;object.__revoke__()}}catch(_unused){return object}finally{seenObjects.add(object)}if(Array.isArray(object)){var index=0;var _iterator34=_createForOfIteratorHelper(object),_step34;try{for(_iterator34.s();!(_step34=_iterator34.n()).done;){var value=_step34.value;object[index]=_unwrapProxy(value,seenObjects);index+=1}}catch(err){_iterator34.e(err)}finally{_iterator34.f()}}else if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isMap */ .jh)(object)){var _iterator35=_createForOfIteratorHelper(object),_step35;try{for(_iterator35.s();!(_step35=_iterator35.n()).done;){var _step35$value=_slicedToArray(_step35.value,2),key=_step35$value[0],_value18=_step35$value[1];object.set(key,_unwrapProxy(_value18,seenObjects))}}catch(err){_iterator35.e(err)}finally{_iterator35.f()}}else if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isSet */ .vM)(object)){var cache=[];var _iterator36=_createForOfIteratorHelper(object),_step36;try{for(_iterator36.s();!(_step36=_iterator36.n()).done;){var _value20=_step36.value;object.delete(_value20);cache.push(_unwrapProxy(_value20,seenObjects))}}catch(err){_iterator36.e(err)}finally{_iterator36.f()}for(var _i29=0,_cache4=cache;_i29<_cache4.length;_i29++){var _value19=_cache4[_i29];object.add(_value19)}}else for(var _i30=0,_Object$entries16=Object.entries(object);_i30<_Object$entries16.length;_i30++){var _Object$entries16$_i=_slicedToArray(_Object$entries16[_i30],2),_key11=_Object$entries16$_i[0],_value21=_Object$entries16$_i[1];object[_key11]=_unwrapProxy(_value21,seenObjects)}}return object};

/***/ }),
/* 4 */
/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_85381__) {

__nested_webpack_require_85381__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_85381__.d(__nested_webpack_exports__, {
/* harmony export */   GP: function() { return /* binding */ isAnyMatching; },
/* harmony export */   Gv: function() { return /* binding */ isObject; },
/* harmony export */   Qd: function() { return /* binding */ isPlainObject; },
/* harmony export */   Tn: function() { return /* binding */ isFunction; },
/* harmony export */   Xj: function() { return /* binding */ isArrayLike; },
/* harmony export */   jh: function() { return /* binding */ isMap; },
/* harmony export */   ju: function() { return /* binding */ isProxy; },
/* harmony export */   kf: function() { return /* binding */ isNumeric; },
/* harmony export */   l6: function() { return /* binding */ isWindow; },
/* harmony export */   vM: function() { return /* binding */ isSet; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_85381__(0);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_85381__(1);
/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_85381__(3);
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module indicators *//* !
    region header
    [Project page](https://torben.website/clientnode)

    Copyright Torben Sickert (info["~at~"]torben.website) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/function _createForOfIteratorHelper(r,e){var t="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(!t){if(Array.isArray(r)||(t=_unsupportedIterableToArray(r))||e&&r&&"number"==typeof r.length){t&&(r=t);var _n=0,F=function F(){};return{s:F,n:function n(){return _n>=r.length?{done:!0}:{done:!1,value:r[_n++]}},e:function e(r){throw r},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,u=!1;return{s:function s(){t=t.call(r)},n:function n(){var r=t.next();return a=r.done,r},e:function e(r){u=!0,o=r},f:function f(){try{a||null==t.return||t.return()}finally{if(u)throw o}}}}function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)};/**
 * Determines whether its argument represents a JavaScript number.
 * @param value - Value to analyze.
 * @returns A boolean value indicating whether given object is numeric
 * like.
 */var isNumeric=function isNumeric(value){var type=(0,_object_js__WEBPACK_IMPORTED_MODULE_2__/* .determineType */ .Sj)(value);/*
        NOTE: "parseFloat" "NaNs" numeric-cast false positives ("") but
        misinterprets leading-number strings, particularly hex literals
        ("0x...") subtraction forces infinities to NaN.
    */return["number","string"].includes(type)&&!isNaN(value-parseFloat(value))};/**
 * Determine whether the argument is a window.
 * @param value - Value to check for.
 * @returns Boolean value indicating the result.
 */var isWindow=function isWindow(value){return![null,undefined].includes(value)&&_typeof(value)==="object"&&value===(value===null||value===void 0?void 0:value.window)};/**
 * Checks if given object is similar to an array and can be handled like an
 * array.
 * @param object - Object to check behavior for.
 * @returns A boolean value indicating whether given object is array like.
 */var isArrayLike=function isArrayLike(object){var length;try{length=Boolean(object)&&object.length}catch(_unused){return false}var type=(0,_object_js__WEBPACK_IMPORTED_MODULE_2__/* .determineType */ .Sj)(object);if(type==="function"||isWindow(object))return false;if(type==="array"||length===0)return true;if(typeof length==="number"&&length>0)try{var _dump=object[length-1];return true}catch(_unused2){// Continue regardless of an error.
}return false};/**
 * Checks whether one of the given pattern matches given string.
 * @param target - Target to check in pattern for.
 * @param pattern - List of pattern to check for.
 * @returns Value "true" if given object is matches by at leas one of the
 * given pattern and "false" otherwise.
 */var isAnyMatching=function isAnyMatching(target,pattern){var _iterator=_createForOfIteratorHelper(pattern),_step;try{for(_iterator.s();!(_step=_iterator.n()).done;){var currentPattern=_step.value;if(typeof currentPattern==="string"){if(currentPattern===target)return true}else if(currentPattern.test(target))return true}}catch(err){_iterator.e(err)}finally{_iterator.f()}return false};/**
 * Checks whether given object is a native object but not null.
 * @param value - Value to check.
 * @returns Value "true" if given object is a plain javaScript object and
 * "false" otherwise.
 */var isObject=function isObject(value){return value!==null&&_typeof(value)==="object"};/**
 * Checks whether given object is a plain native object.
 * @param value - Value to check.
 * @returns Value "true" if given object is a plain javaScript object and
 * "false" otherwise.
 */var isPlainObject=function isPlainObject(value){var _prototype$constructo;if(!isObject(value))return false;var prototype=Object.getPrototypeOf(value);if(_constants_js__WEBPACK_IMPORTED_MODULE_1__/* .PLAIN_OBJECT_PROTOTYPES */ .jE.includes(prototype))return true;/*
        NOTE: Plain objects created in another realm (a vm context like used by
        test runners or a worker for example) have their own "Object.prototype"
        instance and would not be recognized by the identity check above.
    */return prototype!==null&&Object.getPrototypeOf(prototype)===null&&((_prototype$constructo=prototype.constructor)===null||_prototype$constructo===void 0?void 0:_prototype$constructo.name)==="Object"};/**
 * Checks whether given object is a set.
 * @param value - Value to check.
 * @returns Value "true" if given object is a set and "false" otherwise.
 */var isSet=function isSet(value){return (0,_object_js__WEBPACK_IMPORTED_MODULE_2__/* .determineType */ .Sj)(value)==="set"};/**
 * Checks whether given object is a map.
 * @param value - Value to check.
 * @returns Value "true" if given object is a map and "false" otherwise.
 */var isMap=function isMap(value){return (0,_object_js__WEBPACK_IMPORTED_MODULE_2__/* .determineType */ .Sj)(value)==="map"};/**
 * Checks whether given object is a proxy.
 * @param value - Value to check.
 * @returns Value "true" if given object is a proxy and "false" otherwise.
 */var isProxy=function isProxy(value){return Boolean(value.__target__)};/**
 * Checks whether given object is a function.
 * @param value - Value to check.
 * @returns Value "true" if given object is a function and "false"
 * otherwise.
 */var isFunction=function isFunction(value){return Boolean(value)&&["[object AsyncFunction]","[object Function]"].includes({}.toString.call(value))};

/***/ }),
/* 5 */
/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_93073__) {

/* harmony export */ __nested_webpack_require_93073__.d(__nested_webpack_exports__, {
/* harmony export */   $Q: function() { return /* binding */ MAXIMAL_NUMBER_OF_ITERATIONS; },
/* harmony export */   Lz: function() { return /* binding */ globalContext; },
/* harmony export */   QH: function() { return /* binding */ mockConsole; },
/* harmony export */   tE: function() { return /* binding */ NOOP; },
/* harmony export */   zm: function() { return /* binding */ setGlobalContext; }
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_93073__(1);
/* harmony import */ var _module_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_93073__(2);
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module context *//* !
    region header
    [Project page](https://torben.website/clientnode)

    Copyright Torben Sickert (info["~at~"]torben.website) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/var _optionalRequire$defa,_optionalRequire;function _createForOfIteratorHelper(r,e){var t="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(!t){if(Array.isArray(r)||(t=_unsupportedIterableToArray(r))||e&&r&&"number"==typeof r.length){t&&(r=t);var _n=0,F=function F(){};return{s:F,n:function n(){return _n>=r.length?{done:!0}:{done:!1,value:r[_n++]}},e:function e(r){throw r},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,u=!1;return{s:function s(){t=t.call(r)},n:function n(){var r=t.next();return a=r.done,r},e:function e(r){u=!0,o=r},f:function f(){try{a||null==t.return||t.return()}finally{if(u)throw o}}}}function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n};var globalContext=(0,_module_js__WEBPACK_IMPORTED_MODULE_0__/* .determineGlobalContext */ .a8)();var setGlobalContext=function setGlobalContext(context){globalContext=context};globalContext.fetch=globalContext.fetch?globalContext.fetch.bind(globalContext):(_optionalRequire$defa=(_optionalRequire=(0,_module_js__WEBPACK_IMPORTED_MODULE_0__/* .optionalRequire */ .I5)("node-fetch"))===null||_optionalRequire===void 0?void 0:_optionalRequire.default)!==null&&_optionalRequire$defa!==void 0?_optionalRequire$defa:function(){for(var _len=arguments.length,parameters=new Array(_len),_key=0;_key<_len;_key++){parameters[_key]=arguments[_key]}return (0,_module_js__WEBPACK_IMPORTED_MODULE_0__/* .optionalImport */ .Sw)(/* webpackIgnore: true */"node-fetch").then(function(module){var _ref;return(_ref=module).default.apply(_ref,parameters)})};var MAXIMAL_NUMBER_OF_ITERATIONS={value:100};// A no-op dummy function.
var NOOP=function NOOP(){// Do nothing.
};var mockConsole=function mockConsole(){// Avoid errors in browsers that lack a console.
if(!Object.prototype.hasOwnProperty.call(globalContext,"console"))globalContext.console={};if(!globalContext.console)globalContext.console={};var _iterator=_createForOfIteratorHelper(_constants_js__WEBPACK_IMPORTED_MODULE_1__/* .CONSOLE_METHODS */ .jg),_step;try{for(_iterator.s();!(_step=_iterator.n()).done;){var methodName=_step.value;if(!(methodName in globalContext.console))globalContext.console[methodName]=NOOP}}catch(err){_iterator.e(err)}finally{_iterator.f()}};

/***/ }),
/* 6 */
/***/ (function(module) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = 6;
module.exports = webpackEmptyContext;

/***/ }),
/* 7 */
/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_97352__) {

__nested_webpack_require_97352__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_97352__.d(__nested_webpack_exports__, {
/* harmony export */   AB: function() { return /* binding */ limit; },
/* harmony export */   GP: function() { return /* binding */ format; },
/* harmony export */   Gy: function() { return /* binding */ mark; },
/* harmony export */   K$: function() { return /* binding */ normalizeZipCode; },
/* harmony export */   KC: function() { return /* binding */ representPhoneNumber; },
/* harmony export */   LK: function() { return /* binding */ getURLParameter; },
/* harmony export */   Lt: function() { return /* binding */ decodeHTMLEntities; },
/* harmony export */   RS: function() { return /* binding */ normalizeDomNodeSelector; },
/* harmony export */   Tx: function() { return /* binding */ findNormalizedMatchRange; },
/* harmony export */   U7: function() { return /* binding */ sliceAllExceptNumberAndLastSeparator; },
/* harmony export */   Ud: function() { return /* binding */ POLYFILL_TEMPLATE_STRINGS; },
/* harmony export */   Un: function() { return /* binding */ getEditDistance; },
/* harmony export */   V5: function() { return /* binding */ encodeURIComponentExtended; },
/* harmony export */   VK: function() { return /* binding */ evaluateOrThrowError; },
/* harmony export */   VU: function() { return /* binding */ getPortNumber; },
/* harmony export */   W5: function() { return /* binding */ maskForRegularExpression; },
/* harmony export */   Wq: function() { return /* binding */ getDomainName; },
/* harmony export */   XD: function() { return /* binding */ delimitedToCamelCase; },
/* harmony export */   Yn: function() { return /* binding */ hasPathPrefix; },
/* harmony export */   ZH: function() { return /* binding */ capitalize; },
/* harmony export */   _3: function() { return /* binding */ evaluate; },
/* harmony export */   _4: function() { return /* binding */ serviceURLEquals; },
/* harmony export */   _x: function() { return /* binding */ KNOWN_DISALLOWED_VARIABLE_NAMES_BUT_OBJECT_KEYS; },
/* harmony export */   a$: function() { return /* binding */ convertToValidVariableName; },
/* harmony export */   aL: function() { return /* binding */ ALLOWED_VARIABLE_SYMBOLS; },
/* harmony export */   bM: function() { return /* binding */ ALLOWED_STARTING_VARIABLE_SYMBOLS; },
/* harmony export */   dc: function() { return /* binding */ normalizeURL; },
/* harmony export */   fS: function() { return /* binding */ AsyncFunction; },
/* harmony export */   gB: function() { return /* binding */ getProtocolName; },
/* harmony export */   gQ: function() { return /* binding */ lowerCase; },
/* harmony export */   h1: function() { return /* binding */ camelCaseToDelimited; },
/* harmony export */   h2: function() { return /* binding */ normalizePhoneNumber; },
/* harmony export */   jL: function() { return /* binding */ parseEncodedObject; },
/* harmony export */   jt: function() { return /* binding */ escapeRegularExpressions; },
/* harmony export */   k7: function() { return /* binding */ FIX_ENCODING_ERROR_MAPPING; },
/* harmony export */   oz: function() { return /* binding */ representURL; },
/* harmony export */   p0: function() { return /* binding */ addSeparatorToPath; },
/* harmony export */   pM: function() { return /* binding */ fixKnownEncodingErrors; },
/* harmony export */   v0: function() { return /* binding */ compressStyleValue; },
/* harmony export */   wE: function() { return /* binding */ compile; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_97352__(0);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_97352__(1);
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_97352__(5);
/* harmony import */ var _filesystem_js__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_97352__(12);
/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_97352__(3);
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module string *//* !
    region header
    [Project page](https://torben.website/clientnode)

    Copyright Torben Sickert (info["~at~"]torben.website) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/// region imports
function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _slicedToArray(r,e){return _arrayWithHoles(r)||_iterableToArrayLimit(r,e)||_unsupportedIterableToArray(r,e)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}function _arrayWithHoles(r){if(Array.isArray(r))return r}function _construct(t,e,r){if(_isNativeReflectConstruct())return Reflect.construct.apply(null,arguments);var o=[null];o.push.apply(o,e);var p=new(t.bind.apply(t,o));return r&&_setPrototypeOf(p,r.prototype),p}function _setPrototypeOf(t,e){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},_setPrototypeOf(t,e)}function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}function _toConsumableArray(r){return _arrayWithoutHoles(r)||_iterableToArray(r)||_unsupportedIterableToArray(r)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArray(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}function _arrayWithoutHoles(r){if(Array.isArray(r))return _arrayLikeToArray(r)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach(function(r){_defineProperty(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function _defineProperty(e,r,t){return(r=_toPropertyKey(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _toPropertyKey(t){var i=_toPrimitive(t,"string");return"symbol"==_typeof(i)?i:i+""}function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}function _createForOfIteratorHelper(r,e){var t="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(!t){if(Array.isArray(r)||(t=_unsupportedIterableToArray(r))||e&&r&&"number"==typeof r.length){t&&(r=t);var _n=0,F=function F(){};return{s:F,n:function n(){return _n>=r.length?{done:!0}:{done:!1,value:r[_n++]}},e:function e(r){throw r},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,u=!1;return{s:function s(){t=t.call(r)},n:function n(){var r=t.next();return a=r.done,r},e:function e(r){u=!0,o=r},f:function f(){try{a||null==t.return||t.return()}finally{if(u)throw o}}}}function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n};// endregion
var KNOWN_DISALLOWED_VARIABLE_NAMES_BUT_OBJECT_KEYS=["default","if","for","class","function","return","const","let","var"];var POLYFILL_TEMPLATE_STRINGS={value:false};// Partial regular expression matching symbols which should be allowed within a
// variable name excluding the first character.
var ALLOWED_VARIABLE_SYMBOLS="0-9a-zA-Z_$";// Partial regular expression matching symbols which should be allowed as
// starting character for a variable name.
var ALLOWED_STARTING_VARIABLE_SYMBOLS="a-zA-Z_$";var FIX_ENCODING_ERROR_MAPPING=[["\xC3\\x84","\xC4"],["\xC3\\x96","\xD6"],["\xC3\\x9c","\xDC"],["\xC3\xA4","\xE4"],["\xC3\xB6","\xF6"],["\xC3\xBC","\xFC"],["\\x96","-"],["\xC3\xA9","\xE9"],["\xC3\xA8","e"],["\xC3\xB4","o"],["\xC3 ","\xE1"],["\xC3\xB8","\xF8"],["\xC3\\x9f","\xDF"],["\xC3","\xDF"]];var AsyncFunction=/*
        eslint-disable
        @typescript-eslint/no-implied-eval,@typescript-eslint/no-unsafe-call
    */new Function("return Object.getPrototypeOf(async function() {})")().constructor;/*
        eslint-enable
        @typescript-eslint/no-implied-eval,@typescript-eslint/no-unsafe-call
    *//**
 * Translates a given string into the regular expression validated
 * representation.
 * @param value - String to convert.
 * @param excludeSymbols - Symbols not to escape.
 * @returns Converted string.
 */var escapeRegularExpressions=function escapeRegularExpressions(value,excludeSymbols){if(excludeSymbols===void 0){excludeSymbols=[]}// NOTE: This is only for performance improvements.
if(value.length===1&&!_constants_js__WEBPACK_IMPORTED_MODULE_1__/* .SPECIAL_REGEX_SEQUENCES */ .FI.includes(value))return value;// The escape sequence must also be escaped; but at first.
if(!excludeSymbols.includes("\\"))value.replace(/\\/g,"\\\\");var _iterator=_createForOfIteratorHelper(_constants_js__WEBPACK_IMPORTED_MODULE_1__/* .SPECIAL_REGEX_SEQUENCES */ .FI),_step;try{for(_iterator.s();!(_step=_iterator.n()).done;){var replace=_step.value;if(!excludeSymbols.includes(replace))value=value.replace(new RegExp("\\".concat(replace),"g"),"\\".concat(replace))}}catch(err){_iterator.e(err)}finally{_iterator.f()}return value};/**
 * Translates a given name into a valid JavaScript one.
 * @param name - Name to convert.
 * @returns Converted name is returned.
 */var convertToValidVariableName=function convertToValidVariableName(name){if(["class","default"].includes(name))return"_".concat(name);return name// Remove all disallowed starting characters.
.replace(new RegExp("^[^".concat(ALLOWED_STARTING_VARIABLE_SYMBOLS,"]+")),"")// Remove all disallowed characters within a variable name and make
// continuing character upper case.
.replace(new RegExp("[^".concat(ALLOWED_VARIABLE_SYMBOLS,"]+([a-zA-Z])"),"g"),function(_fullMatch,firstLetter){return firstLetter.toUpperCase()})};// region url handline
/**
 * This method is intended for encoding *key* or *value* parts of a query
 * component. We need a custom method because "encodeURIComponent()" is too
 * aggressive and encodes stuff that doesn't have to be encoded per
 * "http://tools.ietf.org/html/rfc3986:".
 * @param url - URL to encode.
 * @param encodeSpaces - Indicates whether given url should encode
 * whitespaces as "+" or "%20".
 * @returns Encoded given url.
 */var encodeURIComponentExtended=function encodeURIComponentExtended(url,encodeSpaces){if(encodeSpaces===void 0){encodeSpaces=false}return encodeURIComponent(url).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,encodeSpaces?"%20":"+")};/**
 * Appends a path selector to the given path if there isn't one yet.
 * @param path - The path for appending a selector.
 * @param pathSeparator - The selector for appending to a path.
 * @returns The appended path.
 */var addSeparatorToPath=function addSeparatorToPath(path,pathSeparator){if(pathSeparator===void 0){pathSeparator="/"}path=path.trim();if(path.substring(path.length-1)!==pathSeparator&&path.length)return path+pathSeparator;return path};/**
 * Checks if a given path has given path prefix.
 * @param prefix - Path prefix to search for.
 * @param path - Path to search in.
 * @param separator - Delimiter to use in a path (default is the posix
 * conform slash).
 * @returns Value "true" if given prefix occurs and "false" otherwise.
 */var hasPathPrefix=function hasPathPrefix(prefix,path,separator){if(prefix===void 0){prefix="/admin"}if(path===void 0){var _globalContext$locati;path=((_globalContext$locati=_context_js__WEBPACK_IMPORTED_MODULE_2__/* .globalContext */ .Lz.location)===null||_globalContext$locati===void 0?void 0:_globalContext$locati.pathname)||""}if(separator===void 0){separator="/"}if(typeof prefix==="string"){if(!prefix.endsWith(separator))prefix+=separator;return path===prefix.substring(0,prefix.length-separator.length)||path.startsWith(prefix)}return false};/**
 * Extracts domain name from given url. If no explicit domain name given
 * current domain name will be assumed. If no parameter is given, the current
 * domain name will be determined.
 * @param url - The url to extract domain from.
 * @param fallback - The fallback host name if no one exits in given url
 * (default is current hostname).
 * @returns Extracted domain.
 */var getDomainName=function getDomainName(url,fallback){if(url===void 0){var _globalContext$locati2;url=((_globalContext$locati2=_context_js__WEBPACK_IMPORTED_MODULE_2__/* .globalContext */ .Lz.location)===null||_globalContext$locati2===void 0?void 0:_globalContext$locati2.href)||""}if(fallback===void 0){var _globalContext$locati3;fallback=((_globalContext$locati3=_context_js__WEBPACK_IMPORTED_MODULE_2__/* .globalContext */ .Lz.location)===null||_globalContext$locati3===void 0?void 0:_globalContext$locati3.hostname)||""}var result=/^([a-z]*:?\/\/)?([^/]+?)(?::[0-9]+)?(?:\/.*|$)/i.exec(url);if(result&&result.length>2&&result[1]&&result[2])return result[2];return fallback};/**
 * Extracts port number from given url. If no explicit port number is given
 * and no fallback is defined, the current port number will be assumed for local
 * links. For external links 80 will be assumed for http protocols and 443
 * for https protocols.
 * @param url - The url to extract port from.
 * @param fallback - Fallback port number if no explicit one was found.
 * Default is derived from the current protocol name.
 * @returns Extracted port number.
 */var getPortNumber=function getPortNumber(url,fallback){var _globalContext$locati6;if(url===void 0){var _globalContext$locati4;url=((_globalContext$locati4=_context_js__WEBPACK_IMPORTED_MODULE_2__/* .globalContext */ .Lz.location)===null||_globalContext$locati4===void 0?void 0:_globalContext$locati4.href)||""}if(fallback===void 0){var _globalContext$locati5;fallback=(_globalContext$locati5=_context_js__WEBPACK_IMPORTED_MODULE_2__/* .globalContext */ .Lz.location)!==null&&_globalContext$locati5!==void 0&&_globalContext$locati5.port?parseInt(_context_js__WEBPACK_IMPORTED_MODULE_2__/* .globalContext */ .Lz.location.port):null}var result=/^(?:[a-z]*:?\/\/[^/]+?)?[^/]+?:([0-9]+)/i.exec(url);if(result&&result.length>1)return parseInt(result[1],10);if(fallback!==null)return fallback;if(// NOTE: Would result in an endless loop:
// serviceURLEquals(url, ...parameters) &&
(_globalContext$locati6=_context_js__WEBPACK_IMPORTED_MODULE_2__/* .globalContext */ .Lz.location)!==null&&_globalContext$locati6!==void 0&&_globalContext$locati6.port&&parseInt(_context_js__WEBPACK_IMPORTED_MODULE_2__/* .globalContext */ .Lz.location.port,10))return parseInt(_context_js__WEBPACK_IMPORTED_MODULE_2__/* .globalContext */ .Lz.location.port,10);return getProtocolName(url)==="https"?443:80};/**
 * Extracts protocol name from given url. If no explicit url is given,
 * the current protocol will be assumed. If no parameter is given, the current
 * protocol number will be determined.
 * @param url - The url to extract protocol from.
 * @param fallback - Fallback port to use if no protocol exists in given
 * url (default is current protocol).
 * @returns Extracted protocol.
 */var getProtocolName=function getProtocolName(url,fallback){if(url===void 0){var _globalContext$locati7;url=((_globalContext$locati7=_context_js__WEBPACK_IMPORTED_MODULE_2__/* .globalContext */ .Lz.location)===null||_globalContext$locati7===void 0?void 0:_globalContext$locati7.href)||""}if(fallback===void 0){var _globalContext$locati8;fallback=((_globalContext$locati8=_context_js__WEBPACK_IMPORTED_MODULE_2__/* .globalContext */ .Lz.location)===null||_globalContext$locati8===void 0?void 0:_globalContext$locati8.protocol)&&_context_js__WEBPACK_IMPORTED_MODULE_2__/* .globalContext */ .Lz.location.protocol.substring(0,_context_js__WEBPACK_IMPORTED_MODULE_2__/* .globalContext */ .Lz.location.protocol.length-1)||""}var result=/^([a-z]+):\/\//i.exec(url);if(result&&result.length>1&&result[1])return result[1];return fallback};/**
 * Read a page's GET URL variables and return them as an associative array
 * and preserves ordering.
 * @param keyToGet - If provided the corresponding value for a given key is
 * returned or full object otherwise.
 * @param allowDuplicates - Indicates whether to return arrays of values or
 * single values. If set to "false" (default) last values will overwrite
 * preceding values.
 * @param givenInput - An alternative input to the url search parameter. If
 * "#" is given, the complete current hashtag will be interpreted as url and
 * search parameter will be extracted from there. If "&" is given a classical
 * search parameter, and hash parameter will be taken in an account. If a
 * search string is given, this will be analyzed. The default is to take a
 * given search part into account.
 * @param subDelimiter - Defines which sequence indicates the start of
 * parameter in a hash part of the url.
 * @param hashedPathIndicator - If defined and given hash starts with this
 * indicator, given hash will be interpreted as a path containing search and
 * hash parts.
 * @param givenSearch - Search part to take into account defaults to
 * current url search part.
 * @param givenHash - Hash part to take into account defaults to current
 * url hash part.
 * @returns Returns the current get array or requested value. If the requested
 * key doesn't exist, "undefined" is returned.
 */var getURLParameter=function getURLParameter(keyToGet,allowDuplicates,givenInput,subDelimiter,hashedPathIndicator,givenSearch,givenHash){if(keyToGet===void 0){keyToGet=null}if(allowDuplicates===void 0){allowDuplicates=false}if(givenInput===void 0){givenInput=null}if(subDelimiter===void 0){subDelimiter="$"}if(hashedPathIndicator===void 0){hashedPathIndicator="!"}if(givenSearch===void 0){givenSearch=null}if(givenHash===void 0){var _globalContext$locati9,_globalContext$locati0;givenHash=(_globalContext$locati9=(_globalContext$locati0=_context_js__WEBPACK_IMPORTED_MODULE_2__/* .globalContext */ .Lz.location)===null||_globalContext$locati0===void 0?void 0:_globalContext$locati0.hash)!==null&&_globalContext$locati9!==void 0?_globalContext$locati9:""}// region set search and hash
var hash=givenHash!==null&&givenHash!==void 0?givenHash:"#";var search="";if(givenSearch)search=givenSearch;else if(hashedPathIndicator&&hash.startsWith(hashedPathIndicator)){var subHashStartIndex=hash.indexOf("#");var pathAndSearch;if(subHashStartIndex===-1){pathAndSearch=hash.substring(hashedPathIndicator.length);hash=""}else{pathAndSearch=hash.substring(hashedPathIndicator.length,subHashStartIndex);hash=hash.substring(subHashStartIndex)}var subSearchStartIndex=pathAndSearch.indexOf("?");if(subSearchStartIndex!==-1)search=pathAndSearch.substring(subSearchStartIndex)}else if(_context_js__WEBPACK_IMPORTED_MODULE_2__/* .globalContext */ .Lz.location)search=_context_js__WEBPACK_IMPORTED_MODULE_2__/* .globalContext */ .Lz.location.search||"";var input=givenInput?givenInput:search;// endregion
// region determine data from search and hash if specified
var both=input==="&";if(both||input==="#"){var decodedHash="";try{decodedHash=decodeURIComponent(hash)}catch(_unused){// Continue regardless of an error.
}var subDelimiterIndex=decodedHash.indexOf(subDelimiter);if(subDelimiterIndex===-1)input="";else{input=decodedHash.substring(subDelimiterIndex);if(input.startsWith(subDelimiter))input=input.substring(subDelimiter.length)}}else if(input.startsWith("?"))input=input.substring("?".length);var data=input?input.split("&"):[];search=search.substring("?".length);if(both&&search)data=data.concat(search.split("&"));// endregion
// region construct data structure
var parameters=[];var _iterator2=_createForOfIteratorHelper(data),_step2;try{for(_iterator2.s();!(_step2=_iterator2.n()).done;){var _value=_step2.value;var keyValuePair=_value.split("=");var key=void 0;try{key=decodeURIComponent(keyValuePair[0])}catch(_unused2){key=""}try{_value=decodeURIComponent(keyValuePair[1])}catch(_unused3){_value=""}parameters.push(key);if(allowDuplicates){if(Object.prototype.hasOwnProperty.call(parameters,key)&&Array.isArray(parameters[key]))parameters[key].push(_value);else parameters[key]=[_value];}else parameters[key]=_value}// endregion
}catch(err){_iterator2.e(err)}finally{_iterator2.f()}if(keyToGet){if(Object.prototype.hasOwnProperty.call(parameters,keyToGet))return parameters[keyToGet];return null}return parameters};/**
 * Checks if given url points to another "service" than the second given url.
 * If no second given url is provided, the current url will be assumed.
 * @param url - URL to check against second url.
 * @param referenceURL - URL to check against first url.
 * @returns Returns "true" if given first url has same domain as given
 * second (or current).
 */var serviceURLEquals=function serviceURLEquals(url,referenceURL){if(referenceURL===void 0){var _globalContext$locati1;referenceURL=((_globalContext$locati1=_context_js__WEBPACK_IMPORTED_MODULE_2__/* .globalContext */ .Lz.location)===null||_globalContext$locati1===void 0?void 0:_globalContext$locati1.href)||""}var domain=getDomainName(url,"");var protocol=getProtocolName(url,"");var port=getPortNumber(url);return(domain===""||domain===getDomainName(referenceURL))&&(protocol===""||protocol===getProtocolName(referenceURL))&&(port===null||port===getPortNumber(referenceURL))};/**
 * Normalized given website url.
 * @param givenURL - Uniform resource locator to normalize.
 * @returns Normalized result.
 */var normalizeURL=function normalizeURL(givenURL){if(typeof givenURL==="string"){var url=givenURL.replace(/^:?\/+/,"").replace(/\/+$/,"").trim();if(url.startsWith("http"))return url;return"http://".concat(url)}return""};/**
 * Represents given website url.
 * @param url - Uniform resource locator to represent.
 * @returns Represented result.
 */var representURL=function representURL(url){if(typeof url==="string")return url.replace(/^(https?)?:?\/+/,"").replace(/\/+$/,"").trim();return""};// endregion
/**
 * Converts a camel-cased string to its delimited string version.
 * @param value - The string to format.
 * @param delimiter - Defines delimiter string.
 * @param abbreviations - Collection of shortcut words to represent uppercased.
 * @returns The formatted string.
 */var camelCaseToDelimited=function camelCaseToDelimited(value,delimiter,abbreviations){if(delimiter===void 0){delimiter="-"}if(abbreviations===void 0){abbreviations=null}if(!abbreviations)abbreviations=_constants_js__WEBPACK_IMPORTED_MODULE_1__/* .ABBREVIATIONS */ .Iy;var escapedDelimiter=maskForRegularExpression(delimiter);if(abbreviations.length){var abbreviationPattern="";var _iterator3=_createForOfIteratorHelper(abbreviations),_step3;try{for(_iterator3.s();!(_step3=_iterator3.n()).done;){var abbreviation=_step3.value;if(abbreviationPattern)abbreviationPattern+="|";abbreviationPattern+=abbreviation.toUpperCase()}}catch(err){_iterator3.e(err)}finally{_iterator3.f()}value=value.replace(new RegExp("(".concat(abbreviationPattern,")(").concat(abbreviationPattern,")"),"g"),"$1".concat(delimiter,"$2"))}value=value.replace(new RegExp("([^".concat(escapedDelimiter,"])([A-Z][a-z]+)"),"g"),"$1".concat(delimiter,"$2"));return value.replace(new RegExp("([a-z0-9])([A-Z])","g"),"$1".concat(delimiter,"$2")).toLowerCase()};/**
 * Converts a string to its capitalized representation.
 * @param string - The string to format.
 * @returns The formatted string.
 */var capitalize=function capitalize(string){return string.charAt(0).toUpperCase()+string.substring(1)};/**
 * Compresses given style attribute value.
 * @param styleValue - Style value to compress.
 * @returns The compressed value.
 */var compressStyleValue=function compressStyleValue(styleValue){return styleValue.replace(/ *([:;]) */g,"$1").replace(/ +/g," ").replace(/^;+/,"").replace(/;+$/,"").trim()};/**
 * Decodes all html symbols in text nodes in a given html string.
 * @param htmlString - HTML string to decode.
 * @returns Decoded html string.
 */var decodeHTMLEntities=function decodeHTMLEntities(htmlString){if(_context_js__WEBPACK_IMPORTED_MODULE_2__/* .globalContext */ .Lz.document){var textareaDomNode=_context_js__WEBPACK_IMPORTED_MODULE_2__/* .globalContext */ .Lz.document.createElement("textarea");textareaDomNode.innerHTML=htmlString;return textareaDomNode.value}return null};/**
 * Converts a delimited string to its camel case representation.
 * @param value - The string to format.
 * @param delimiter - Delimiter string to use.
 * @param abbreviations - Collection of shortcut words to represent uppercased.
 * @param preserveWrongFormattedAbbreviations - If set to "True" wrong
 * formatted camel case abbreviations will be ignored.
 * @param removeMultipleDelimiter - Indicates whether a series of delimiter
 * should be consolidated.
 * @returns The formatted string.
 */var delimitedToCamelCase=function delimitedToCamelCase(value,delimiter,abbreviations,preserveWrongFormattedAbbreviations,removeMultipleDelimiter){if(delimiter===void 0){delimiter="-"}if(abbreviations===void 0){abbreviations=null}if(preserveWrongFormattedAbbreviations===void 0){preserveWrongFormattedAbbreviations=false}if(removeMultipleDelimiter===void 0){removeMultipleDelimiter=false}var escapedDelimiter=maskForRegularExpression(delimiter);if(!abbreviations)abbreviations=_constants_js__WEBPACK_IMPORTED_MODULE_1__/* .ABBREVIATIONS */ .Iy;var abbreviationPattern;if(preserveWrongFormattedAbbreviations)abbreviationPattern=_constants_js__WEBPACK_IMPORTED_MODULE_1__/* .ABBREVIATIONS */ .Iy.join("|");else{abbreviationPattern="";var _iterator4=_createForOfIteratorHelper(abbreviations),_step4;try{for(_iterator4.s();!(_step4=_iterator4.n()).done;){var abbreviation=_step4.value;if(abbreviationPattern)abbreviationPattern+="|";abbreviationPattern+="".concat(capitalize(abbreviation),"|").concat(abbreviation)}}catch(err){_iterator4.e(err)}finally{_iterator4.f()}}var stringStartsWithDelimiter=value.startsWith(delimiter);if(stringStartsWithDelimiter)value=value.substring(delimiter.length);value=value.replace(new RegExp("(".concat(escapedDelimiter,")(").concat(abbreviationPattern,")")+"(".concat(escapedDelimiter,"|$)"),"g"),function(_fullMatch,before,abbreviation,after){return before+abbreviation.toUpperCase()+after});if(removeMultipleDelimiter)escapedDelimiter="(?:".concat(escapedDelimiter,")+");value=value.replace(new RegExp("".concat(escapedDelimiter,"([a-zA-Z0-9])"),"g"),function(_fullMatch,firstLetter){return firstLetter.toUpperCase()});if(stringStartsWithDelimiter)value=delimiter+value;return value};/**
 * Compiles a given string as an expression with given scope names.
 * @param expression - The string to interpret.
 * @param givenOptions - Expression options.
 * @param givenOptions.scope - Scope to extract names from.
 * @param givenOptions.execute - Indicates whether to execute or evaluate.
 * @param givenOptions.removeGlobalScope - Indicates whether to shadow global
 * scope.
 * @param givenOptions.binding - Object to apply as "this" in evaluation scope.
 * @param givenOptions.async - Indicates whether to compile an async function.
 * @returns Object of prepared scope name mappings and compiled function or
 * error string message if given expression couldn't be compiled.
 */var compile=function compile(expression,givenOptions){var _Babel;if(givenOptions===void 0){givenOptions={}}var options=_objectSpread({scope:[],async:false,execute:false,removeGlobalScope:true,binding:{}},givenOptions);/*
        NOTE: We do this global variable name determining as close as possible
        to the compiling step to cover as much as possible global introduces
        variables.
    */var globalNames=Object.keys(globalThis).concat("globalThis").filter(function(name){return new RegExp("^[".concat(ALLOWED_STARTING_VARIABLE_SYMBOLS,"]")+"[".concat(ALLOWED_VARIABLE_SYMBOLS,"]*$")).test(name)&&!KNOWN_DISALLOWED_VARIABLE_NAMES_BUT_OBJECT_KEYS.includes(name)});var result={error:null,globalNames:globalNames,globalNamesUndefinedList:globalNames.map(function(){return undefined}),originalScopeNames:Array.isArray(options.scope)?options.scope:typeof options.scope==="string"?[options.scope]:Object.keys(options.scope),scopeNameMapping:{},scopeNames:[],templateFunction:function templateFunction(){return undefined}};var _iterator5=_createForOfIteratorHelper(result.originalScopeNames),_step5;try{for(_iterator5.s();!(_step5=_iterator5.n()).done;){var name=_step5.value;var newName=convertToValidVariableName(name);result.scopeNameMapping[name]=newName;result.scopeNames.push(newName)}// region try to polyfill template string literals for older engines
}catch(err){_iterator5.e(err)}finally{_iterator5.f()}if(POLYFILL_TEMPLATE_STRINGS.value)if((_Babel=_context_js__WEBPACK_IMPORTED_MODULE_2__/* .globalContext */ .Lz.Babel)!==null&&_Babel!==void 0&&_Babel.transform)expression=_context_js__WEBPACK_IMPORTED_MODULE_2__/* .globalContext */ .Lz.Babel.transform("(".concat(expression,")"),{plugins:["transform-template-literals"]}).code;else if(expression.startsWith("`")&&expression.endsWith("`")){var escapeMarker="####";// Convert template string into legacy string concatenations.
expression=expression// Mark simple escape sequences.
.replace(/\\\$/g,escapeMarker)// Handle avoidable template expression: Use raw code.
.replace(/^`\$\{([\s\S]+)}`$/,"String($1)")// Use plain string with single quotes.
.replace(/^`([^']+)`$/,"'$1'")// Use plain string with double quotes.
.replace(/^`([^"]+)`$/,"\"$1\"");// Use single quotes and hope (just a heuristic).
var quote=expression.charAt(0)==="`"?"'":expression.charAt(0);expression=expression// Replace a simple placeholder.
// NOTE: Replace complete bracket pairs.
.replace(/\$\{((([^{]*{[^}]*}[^}]*})|[^{}]+)+)}/g,"".concat(quote,"+($1)+").concat(quote)).replace(/^`([\s\S]+)`$/,"".concat(quote,"$1").concat(quote))// Remove remaining newlines.
.replace(/\n+/g,"")// Replace marked escape sequences.
.replace(new RegExp(escapeMarker,"g"),"\\$")}// endregion
var innerTemplateFunction;try{// eslint-disable-next-line @typescript-eslint/no-unsafe-call
innerTemplateFunction=_construct(options.async?AsyncFunction:Function,_toConsumableArray(options.removeGlobalScope?result.globalNames:[]).concat(_toConsumableArray(result.scopeNames),["".concat(options.execute?"":"return ").concat(expression)]))}catch(error){result.error="Given ".concat(options.async?"async":"sync"," expression ")+"\"".concat(expression,"\" could not be compiled width ")+"given scope names \"".concat(result.scopeNames.join("\", \""),"\": ")+(0,_object_js__WEBPACK_IMPORTED_MODULE_3__/* .represent */ .Do)(error)}if(innerTemplateFunction){var boundInnerTemplateFunction=innerTemplateFunction.bind(options.binding);result.templateFunction=options.removeGlobalScope?function(){for(var _len=arguments.length,parameters=new Array(_len),_key=0;_key<_len;_key++){parameters[_key]=arguments[_key]}return(/*
                    NOTE: We shadow existing global names to sandbox
                    expressions.
                */boundInnerTemplateFunction.apply(void 0,_toConsumableArray(result.globalNamesUndefinedList).concat(parameters)))}:boundInnerTemplateFunction}return result};/**
 * Evaluates a given string as an expression against a given scope.
 * @param expression - The string to interpret.
 * @param givenOptions - Expression options.
 * @param givenOptions.scope - Scope to extract names from.
 * @param givenOptions.execute - Indicates whether to execute or evaluate.
 * @param givenOptions.removeGlobalScope - Indicates whether to shadow global
 * scope.
 * @param givenOptions.binding - Object to apply as "this" in evaluation scope.
 * @param givenOptions.async - Indicates whether to compile an async function.
 * @returns Object with an error message during parsing / running or result.
 */var evaluate=function evaluate(expression,givenOptions){if(givenOptions===void 0){givenOptions={}}var options=_objectSpread({scope:{},async:false,execute:false,removeGlobalScope:true,binding:{}},givenOptions);// NOTE: We extract string-only types from given scope type.
var _compile=compile(expression,options),error=_compile.error,originalScopeNames=_compile.originalScopeNames,scopeNames=_compile.scopeNames,templateFunction=_compile.templateFunction;var result={compileError:null,runtimeError:null,error:"Not yet evaluated.",result:undefined};if(error){result.compileError=result.error=error;return result}try{result={compileError:null,runtimeError:null,error:null,result:templateFunction.apply(void 0,_toConsumableArray(originalScopeNames.map(function(name){return options.scope[name]})))}}catch(error){result.error=result.runtimeError="Given ".concat(options.async?"async":"sync"," expression ")+"\"".concat(expression,"\" could not be evaluated with given scope ")+"names \"".concat(scopeNames.join("\", \""),"\": ")+(0,_object_js__WEBPACK_IMPORTED_MODULE_3__/* .represent */ .Do)(error)}return result};/**
 * Evaluates a given string as an expression against a given scope. Does same
 * as "evaluate" but throws an exception if an error occurs and returns the
 * evaluated value instead of an object with error and result.
 * @param expression - The string to interpret.
 * @param options - Expression options.
 * @param options.scope - Scope to extract names from.
 * @param options.execute - Indicates whether to execute or evaluate.
 * @param options.removeGlobalScope - Indicates whether to shadow global scope.
 * @param options.binding - Object to apply as "this" in evaluation scope.
 * @param options.async - Indicates whether to compile an async function.
 * @returns Object with an error message during parsing / running or result.
 */var evaluateOrThrowError=function evaluateOrThrowError(expression,options){if(options===void 0){options={}}var evaluated=evaluate(expression,options);if(evaluated.error)throw new Error(evaluated.error);return evaluated.result};/**
 * Finds the string match of a given query in a given target text by applying a
 * given normalization function to target and query.
 * @param target - Target to search in.
 * @param query - Search string to search for.
 * @param normalizer - Function to use as normalization for queries and search
 * targets.
 * @param skipTagDelimitedParts - Indicates whether to, for example, ignore
 * html tags via "['<', '>']" (the default).
 * @returns Start and end index of matching range.
 */var findNormalizedMatchRange=function findNormalizedMatchRange(target,query,normalizer,skipTagDelimitedParts){if(normalizer===void 0){normalizer=function normalizer(value){return typeof value==="string"?value.trim().toLowerCase():value}}if(skipTagDelimitedParts===void 0){skipTagDelimitedParts=["<",">"]}var normalizedQuery=normalizer(query);var stringNormalizedQuery;if(typeof normalizedQuery==="string")stringNormalizedQuery=normalizedQuery;else{var match=target.match(normalizedQuery);stringNormalizedQuery=match?match[0]:""}if(!stringNormalizedQuery)return null;var normalizedTarget=normalizer(target);if(!normalizedTarget)return null;var stringTarget=typeof target==="string"?target:normalizedTarget;var inTag=false;for(var index=0;index<stringTarget.length;index+=1){if(inTag){if(Array.isArray(skipTagDelimitedParts)&&stringTarget.charAt(index)===skipTagDelimitedParts[1])inTag=false;continue}if(Array.isArray(skipTagDelimitedParts)&&stringTarget.charAt(index)===skipTagDelimitedParts[0]){inTag=true;continue}/*
            Skip positions the normalizer strips away (e.g. leading
            whitespace), so the reported match index aligns with the real
            character.
        */if(!normalizer(stringTarget.charAt(index)))continue;if(normalizer(stringTarget.substring(index)).startsWith(stringNormalizedQuery)){if(stringNormalizedQuery.length===1)return[index,index+1];for(var subIndex=stringTarget.length;subIndex>index;subIndex-=1)if(!normalizer(stringTarget.substring(index,subIndex)).startsWith(stringNormalizedQuery))return[index,subIndex+1]}}return null};/**
 * Fixes known encoding problems in given data.
 * @param data - To process.
 * @returns Processed data.
 */var fixKnownEncodingErrors=function fixKnownEncodingErrors(data){for(var _i=0,_FIX_ENCODING_ERROR_M=FIX_ENCODING_ERROR_MAPPING;_i<_FIX_ENCODING_ERROR_M.length;_i++){var _FIX_ENCODING_ERROR_M2=_slicedToArray(_FIX_ENCODING_ERROR_M[_i],2),search=_FIX_ENCODING_ERROR_M2[0],replacement=_FIX_ENCODING_ERROR_M2[1];data=data.replace(new RegExp(search,"g"),replacement)}return data};/**
 * Performs a string formation. Replaces every placeholder "{i}" with the i'th
 * argument.
 * @param string - The string to format.
 * @param additionalArguments - Additional arguments are interpreted as
 * replacements for string formatting.
 * @returns The formatted string.
 */var format=function format(string){for(var _len2=arguments.length,additionalArguments=new Array(_len2>1?_len2-1:0),_key2=1;_key2<_len2;_key2++){additionalArguments[_key2-1]=arguments[_key2]}additionalArguments.unshift(string);var index=0;for(var _i2=0,_additionalArguments=additionalArguments;_i2<_additionalArguments.length;_i2++){var _value2=_additionalArguments[_i2];string=string.replace(new RegExp("\\{".concat(String(index),"\\}"),"gm"),String(_value2));index+=1}return string};/**
 * Calculates the edit (levenstein) distance between two given strings.
 * @param first - First string to compare.
 * @param second - Second string to compare.
 * @returns The distance as number.
 */var getEditDistance=function getEditDistance(first,second){/*
        Create empty edit distance matrix for all possible modifications of
        substrings of "first" to substrings of "second".
    */var distanceMatrix=Array(second.length+1).fill(null).map(function(){return Array(first.length+1).fill(null)});/*
        Fill the first row of the matrix.
        If this is the first row, then, we're transforming an empty string to
        "first". In this case the number of transformations equals to the size
        of the "first" substring.
    */for(var index=0;index<=first.length;index++)distanceMatrix[0][index]=index;/*
        Fill the first column of the matrix.
        If this is the first column, then we're transforming an empty string to
        "second".
        In this case the number of transformations equals to the size of the
        "second" substring.
    */for(var _index=0;_index<=second.length;_index++)distanceMatrix[_index][0]=_index;for(var firstIndex=1;firstIndex<=second.length;firstIndex++)for(var secondIndex=1;secondIndex<=first.length;secondIndex++){var indicator=first[secondIndex-1]===second[firstIndex-1]?0:1;distanceMatrix[firstIndex][secondIndex]=Math.min(// deletion
distanceMatrix[firstIndex][secondIndex-1]+1,// insertion
distanceMatrix[firstIndex-1][secondIndex]+1,// substitution
distanceMatrix[firstIndex-1][secondIndex-1]+indicator)}return distanceMatrix[second.length][first.length]};/**
 * Validates the current string for using in a regular expression pattern.
 * Special regular expression chars will be escaped.
 * @param value - The string to format.
 * @returns The formatted string.
 */var maskForRegularExpression=function maskForRegularExpression(value){return value.replace(/([\\|.*$^+[\]()?\-{}])/g,"\\$1")};/**
 * Converts a string to its lower case representation.
 * @param string - The string to format.
 * @returns The formatted string.
 */var lowerCase=function lowerCase(string){return string.charAt(0).toLowerCase()+string.substring(1)};/**
 * Wraps given mark strings in a given target with a given marker.
 * @param target - String to search in.
 * @param givenSearchWords - String or regular expression or array of those to
 * search for.
 * @param givenOptions - Defines highlighting behavior.
 * @param givenOptions.marker - HTML template string to mark.
 * @param givenOptions.normalizer - Pure normalization function to use before
 * searching for matches.
 * @param givenOptions.skipTagDelimitedParts - Indicates whether to, for
 * example, ignore html tags via "['<', '>']" (the default).
 * @returns Processed result.
 */var mark=function mark(target,givenSearchWords,givenOptions){if(givenOptions===void 0){givenOptions={}}if(typeof target==="string"&&(Array.isArray(givenSearchWords)&&givenSearchWords.length||givenSearchWords instanceof RegExp||typeof givenSearchWords==="string"&&givenSearchWords.length)){var options=_objectSpread({marker:"<span class=\"tools-mark\">{1}</span>",normalizer:function normalizer(value){return typeof value==="string"?value.trim().toLowerCase():value},skipTagDelimitedParts:["<",">"]},givenOptions);target=target.trim();var markedTarget=[];var searchWords=[].concat(givenSearchWords);var index=0;var _iterator6=_createForOfIteratorHelper(searchWords),_step6;try{for(_iterator6.s();!(_step6=_iterator6.n()).done;){var _word=_step6.value;searchWords[index]=options.normalizer(_word);index+=1}}catch(err){_iterator6.e(err)}finally{_iterator6.f()}var restTarget=target;var offset=0;/*
            Search for matches as long there is enough target text remaining to
            walk through.
        */for(var iteration=0;iteration<_context_js__WEBPACK_IMPORTED_MODULE_2__/* .MAXIMAL_NUMBER_OF_ITERATIONS */ .$Q.value;iteration++){var nearestRange=null;var currentRange=void 0;// Find the nearest next matching word.
var _iterator7=_createForOfIteratorHelper(searchWords),_step7;try{for(_iterator7.s();!(_step7=_iterator7.n()).done;){var word=_step7.value;currentRange=findNormalizedMatchRange(restTarget,word,options.normalizer,options.skipTagDelimitedParts);if(currentRange&&(!nearestRange||currentRange[0]<nearestRange[0]))nearestRange=currentRange}}catch(err){_iterator7.e(err)}finally{_iterator7.f()}if(nearestRange){if(nearestRange[0]>0)markedTarget.push(target.substring(offset,offset+nearestRange[0]));markedTarget.push(typeof options.marker==="string"?format(options.marker,target.substring(offset+nearestRange[0],offset+nearestRange[1])):options.marker(target.substring(offset+nearestRange[0],offset+nearestRange[1]),markedTarget));offset+=nearestRange[1];restTarget=target.substring(offset)}else{if(restTarget.length)markedTarget.push(restTarget);break}}return typeof options.marker==="string"?markedTarget.join(""):markedTarget}return target};/**
 * Normalizes a given phone number for automatic dialing or comparison.
 * @param value - Number to normalize.
 * @param dialable - Indicates whether the result should be dialed or
 * represented as lossless data.
 * @returns Normalized number.
 */var normalizePhoneNumber=function normalizePhoneNumber(value,dialable){if(dialable===void 0){dialable=true}if(typeof value==="string"||typeof value==="number"){var normalizedValue=String(value).trim();// Normalize country code prefix.
normalizedValue=normalizedValue.replace(/^[^0-9]*\+/,"00");// Remove alternate direct dial numbers.
normalizedValue=normalizedValue.replace(/([0-9].*?) *(,|o[rd]?)\.? ?-?[0-9]+$/,"$1");if(dialable)return normalizedValue.replace(/[^0-9]+/g,"");var separatorPattern="(?:[ /\\-]+)";// Remove unneeded area code zero in brackets.
normalizedValue=normalizedValue.replace(new RegExp("^(.+?)".concat(separatorPattern,"?\\(0\\)").concat(separatorPattern,"?")+"(.+)$"),"$1-$2");// Remove unneeded area code brackets.
normalizedValue=normalizedValue.replace(new RegExp("^(.+?)".concat(separatorPattern,"?\\((.+)\\)")+"".concat(separatorPattern,"?(.+)$")),"$1-$2-$3");/*
            Remove separators that don't mark semantics:
            1: Country code
            2: Area code
            3: Number
        */var compiledPattern=new RegExp("^(00[0-9]+)".concat(separatorPattern,"([0-9]+)").concat(separatorPattern)+"(.+)$");if(compiledPattern.test(normalizedValue))// Country code and area code matched.
normalizedValue=normalizedValue.replace(compiledPattern,function(_match,countryCode,areaCode,number){return"".concat(countryCode,"-").concat(areaCode,"-")+sliceAllExceptNumberAndLastSeparator(number)});else{/*
                One prefix code matched:
                1: Prefix code
                2: Number
            */compiledPattern=/^([0-9 ]+)[/-](.+)$/;var replacer=function replacer(_match,prefixCode,number){return"".concat(prefixCode.replace(/ +/,""),"-")+sliceAllExceptNumberAndLastSeparator(number)};if(compiledPattern.test(normalizedValue))// Prefer "/" or "-" over " " as area code separator.
normalizedValue=normalizedValue.replace(compiledPattern,replacer);else normalizedValue=normalizedValue.replace(new RegExp("^([0-9]+)".concat(separatorPattern,"(.+)$")),replacer)}return normalizedValue.replace(/[^0-9-]+/g,"").replace(/^-+$/,"")}return""};/**
 * Normalizes a given zip code for automatic address processing.
 * @param value - Number to normalize.
 * @returns Normalized number.
 */var normalizeZipCode=function normalizeZipCode(value){if(typeof value==="string"||typeof value==="number")return String(value).trim().replace(/^([^0-9]*[a-zA-Z]-)?(.+)$/,function(match,prefix,code){if(prefix)prefix=prefix.substring(prefix.length-2).charAt(0).toUpperCase()+"-";return(prefix!==null&&prefix!==void 0?prefix:"")+(code!==null&&code!==void 0?code:"").trim().replace(/[^0-9]+/g,"")});return""};/**
 * Converts a given serialized, base64 encoded or file path given object into a
 * native JavaScript one if possible.
 * @param serializedObject - Object as string.
 * @param scope - An optional scope which will be used to evaluate given object
 * in.
 * @param name - The name under given scope will be available.
 * @returns The parsed object if possible and null otherwise.
 */var parseEncodedObject=function parseEncodedObject(serializedObject,scope,name){var _imports$fs;if(scope===void 0){scope={}}if(name===void 0){name="scope"}if(!((_imports$fs=_filesystem_js__WEBPACK_IMPORTED_MODULE_4__/* .imports */ .VW.fs)!==null&&_imports$fs!==void 0&&_imports$fs.readFileSync))throw new Error("File system api could not be loaded.");if(serializedObject.endsWith(".json")&&(0,_filesystem_js__WEBPACK_IMPORTED_MODULE_4__/* .isFileSync */ .WY)(serializedObject))serializedObject=_filesystem_js__WEBPACK_IMPORTED_MODULE_4__/* .imports */ .VW.fs.readFileSync(serializedObject,{encoding:_constants_js__WEBPACK_IMPORTED_MODULE_1__/* .DEFAULT_ENCODING */ .uJ});serializedObject=serializedObject.trim();if(!serializedObject.startsWith("{"))serializedObject=eval("Buffer").from(serializedObject,"base64").toString(_constants_js__WEBPACK_IMPORTED_MODULE_1__/* .DEFAULT_ENCODING */ .uJ);var result=evaluate(serializedObject,{scope:_defineProperty({},name,scope)});if(_typeof(result.result)==="object")return result.result;return null};/**
 * Represents a given phone number. NOTE: Currently only support German phone
 * numbers.
 * @param value - Number to format.
 * @returns Formatted number.
 */var representPhoneNumber=function representPhoneNumber(value){if(["number","string"].includes((0,_object_js__WEBPACK_IMPORTED_MODULE_3__/* .determineType */ .Sj)(value))&&value){// Represent country code and leading area code zero.
var normalizedValue=// eslint-disable-next-line @typescript-eslint/no-base-to-string
String(value).replace(/^(00|\+)([0-9]+)-([0-9-]+)$/,"+$2 (0) $3");// Add German country code if not exists.
normalizedValue=normalizedValue.replace(/^0([1-9][0-9-]+)$/,"+49 (0) $1");// Separate area code from base number.
normalizedValue=normalizedValue.replace(/^([^-]+)-([0-9-]+)$/,"$1 / $2");// Partition base number in one triple and tuples or tuples only.
return normalizedValue.replace(/^(.*?)([0-9]+)(-?[0-9]*)$/,function(_match,prefix,number,suffix){return prefix+(number.length%2===0?number.replace(/([0-9]{2})/g,"$1 "):number.replace(/^([0-9]{3})([0-9]+)$/,function(_match,triple,rest){return"".concat(triple," ")+rest.replace(/([0-9]{2})/g,"$1 ").trim()})+suffix).trim()}).trim()}return""};/**
 * Slices all none numbers but preserves last separator.
 * @param value - String to process.
 * @returns - Sliced given value.
 */var sliceAllExceptNumberAndLastSeparator=function sliceAllExceptNumberAndLastSeparator(value){/*
        1: baseNumber
        2: directDialingNumberSuffix
    */var compiledPattern=/^(.*[0-9].*)-([0-9]+)$/;if(compiledPattern.test(value))return value.replace(compiledPattern,function(_match,baseNumber,directDialingNumberSuffix){return"".concat(baseNumber.replace(/[^0-9]+/g,""),"-")+directDialingNumberSuffix});return value.replace(/[^0-9]+/g,"")};/**
 * Converts a dom selector to a prefixed dom selector string.
 * @param selector - A dom node selector.
 * @param selectorPrefix - A dom node selector prefix to take into account.
 * @returns Returns given selector prefixed.
 */var normalizeDomNodeSelector=function normalizeDomNodeSelector(selector,selectorPrefix){if(selectorPrefix===void 0){selectorPrefix=""}var domNodeSelectorPrefix="";if(selectorPrefix)domNodeSelectorPrefix="".concat(selectorPrefix," ");if(!(selector.startsWith(domNodeSelectorPrefix)||selector.trim().startsWith("<")))selector=domNodeSelectorPrefix+selector;return selector.trim()};/**
 * Abbreviates a given string if it excesses a given limit.
 * @param value - String to abbreviate.
 * @param limit - Maximum length of processed string.
 * @returns Abbreviated given string.
 */var limit=function limit(value,_limit){if(_limit===void 0){_limit=100}if(value.length<=_limit)return value;var dots="...";return value.substring(0,_limit-dots.length)+dots};

/***/ }),
/* 8 */
/***/ (function(module, __unused_webpack_exports, __nested_webpack_require_148450__) {

var x = function(y) {
	var x = {}; __nested_webpack_require_148450__.d(x, y); return x
} 
var y = function(x) { return function() { return x; }; }
module.exports = x({  });

/***/ }),
/* 9 */
/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_148714__) {

__nested_webpack_require_148714__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_148714__.d(__nested_webpack_exports__, {
/* harmony export */   LI: function() { return /* binding */ round; },
/* harmony export */   RI: function() { return /* binding */ floor; },
/* harmony export */   W2: function() { return /* binding */ isNotANumber; },
/* harmony export */   mk: function() { return /* binding */ ceil; },
/* harmony export */   n$: function() { return /* binding */ getUTCTimestamp; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_148714__(0);
/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_148714__(3);
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module number *//* !
    region header
    [Project page](https://torben.website/clientnode)

    Copyright Torben Sickert (info["~at~"]torben.website) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*//**
 * Determines corresponding utc timestamp for given date object.
 * @param value - Date to convert.
 * @param inMilliseconds - Indicates whether given number should be in
 * seconds (default) or milliseconds.
 * @returns Determined numerous value.
 */var getUTCTimestamp=function getUTCTimestamp(value,inMilliseconds){if(inMilliseconds===void 0){inMilliseconds=false}var date=[null,undefined].includes(value)?new Date:new Date(value);return Date.UTC(date.getUTCFullYear(),date.getUTCMonth(),date.getUTCDate(),date.getUTCHours(),date.getUTCMinutes(),date.getUTCSeconds(),date.getUTCMilliseconds())/(inMilliseconds?1:1000)};/**
 * Checks if given object is java scripts native "Number.NaN" object.
 * @param value - Value to check.
 * @returns Returns whether given value is not a number or not.
 */var isNotANumber=function isNotANumber(value){return (0,_object_js__WEBPACK_IMPORTED_MODULE_1__/* .determineType */ .Sj)(value)==="number"&&isNaN(value)};/**
 * Rounds a given number accurate to given number of digits.
 * @param number - The number to round.
 * @param digits - The number of digits after comma.
 * @returns Returns the rounded number.
 */var round=function round(number,digits){if(digits===void 0){digits=0}return Math.round(number*Math.pow(10,digits))/Math.pow(10,digits)};/**
 * Rounds a given number up accurate to given number of digits.
 * @param number - The number to round.
 * @param digits - The number of digits after comma.
 * @returns Returns the rounded number.
 */var ceil=function ceil(number,digits){if(digits===void 0){digits=0}return Math.ceil(number*Math.pow(10,digits))/Math.pow(10,digits)};/**
 * Rounds a given number down accurate to given number of digits.
 * @param number - The number to round.
 * @param digits - The number of digits after comma.
 * @returns Returns the rounded number.
 */var floor=function floor(number,digits){if(digits===void 0){digits=0}return Math.floor(number*Math.pow(10,digits))/Math.pow(10,digits)};

/***/ }),
/* 10 */
/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_151937__) {

/* harmony export */ __nested_webpack_require_151937__.d(__nested_webpack_exports__, {
/* harmony export */   c: function() { return /* binding */ Lock; }
/* harmony export */ });
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module Lock *//* !
    region header
    [Project page](https://torben.website/clientnode)

    Copyright Torben Sickert (info["~at~"]torben.website) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _regenerator(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var e,t,r="function"==typeof Symbol?Symbol:{},n=r.iterator||"@@iterator",o=r.toStringTag||"@@toStringTag";function i(r,n,o,i){var c=n&&n.prototype instanceof Generator?n:Generator,u=Object.create(c.prototype);return _regeneratorDefine2(u,"_invoke",function(r,n,o){var i,c,u,f=0,p=o||[],y=!1,G={p:0,n:0,v:e,a:d,f:d.bind(e,4),d:function d(t,r){return i=t,c=0,u=e,G.n=r,a}};function d(r,n){for(c=r,u=n,t=0;!y&&f&&!o&&t<p.length;t++){var o,i=p[t],d=G.p,l=i[2];r>3?(o=l===n)&&(u=i[(c=i[4])?5:(c=3,3)],i[4]=i[5]=e):i[0]<=d&&((o=r<2&&d<i[1])?(c=0,G.v=n,G.n=i[1]):d<l&&(o=r<3||i[0]>n||n>l)&&(i[4]=r,i[5]=n,G.n=l,c=0))}if(o||r>1)return a;throw y=!0,n}return function(o,p,l){if(f>1)throw TypeError("Generator is already running");for(y&&1===p&&d(p,l),c=p,u=l;(t=c<2?e:u)||!y;){i||(c?c<3?(c>1&&(G.n=-1),d(c,u)):G.n=u:G.v=u);try{if(f=2,i){if(c||(o="next"),t=i[o]){if(!(t=t.call(i,u)))throw TypeError("iterator result is not an object");if(!t.done)return t;u=t.value,c<2&&(c=0)}else 1===c&&(t=i.return)&&t.call(i),c<2&&(u=TypeError("The iterator does not provide a '"+o+"' method"),c=1);i=e}else if((t=(y=G.n<0)?u:r.call(n,G))!==a)break}catch(t){i=e,c=1,u=t}finally{f=1}}return{value:t,done:y}}}(r,o,i),!0),u}var a={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}t=Object.getPrototypeOf;var c=[][n]?t(t([][n]())):(_regeneratorDefine2(t={},n,function(){return this}),t),u=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(c);function f(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,GeneratorFunctionPrototype):(e.__proto__=GeneratorFunctionPrototype,_regeneratorDefine2(e,o,"GeneratorFunction")),e.prototype=Object.create(u),e}return GeneratorFunction.prototype=GeneratorFunctionPrototype,_regeneratorDefine2(u,"constructor",GeneratorFunctionPrototype),_regeneratorDefine2(GeneratorFunctionPrototype,"constructor",GeneratorFunction),GeneratorFunction.displayName="GeneratorFunction",_regeneratorDefine2(GeneratorFunctionPrototype,o,"GeneratorFunction"),_regeneratorDefine2(u),_regeneratorDefine2(u,o,"Generator"),_regeneratorDefine2(u,n,function(){return this}),_regeneratorDefine2(u,"toString",function(){return"[object Generator]"}),(_regenerator=function _regenerator(){return{w:i,m:f}})()}function _regeneratorDefine2(e,r,n,t){var i=Object.defineProperty;try{i({},"",{})}catch(e){i=0}_regeneratorDefine2=function _regeneratorDefine(e,r,n,t){function o(r,n){_regeneratorDefine2(e,r,function(e){return this._invoke(r,n,e)})}r?i?i(e,r,{value:n,enumerable:!t,configurable:!t,writable:!t}):e[r]=n:(o("next",0),o("throw",1),o("return",2))},_regeneratorDefine2(e,r,n,t)}function asyncGeneratorStep(n,t,e,r,o,a,c){try{var i=n[a](c),u=i.value}catch(n){return void e(n)}i.done?t(u):Promise.resolve(u).then(r,o)}function _asyncToGenerator(n){return function(){var t=this,e=arguments;return new Promise(function(r,o){var a=n.apply(t,e);function _next(n){asyncGeneratorStep(a,r,o,_next,_throw,"next",n)}function _throw(n){asyncGeneratorStep(a,r,o,_next,_throw,"throw",n)}_next(void 0)})}}function _classCallCheck(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,_toPropertyKey(o.key),o)}}function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function _defineProperty(e,r,t){return(r=_toPropertyKey(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _toPropertyKey(t){var i=_toPrimitive(t,"string");return"symbol"==_typeof(i)?i:i+""}function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}/**
 * Represents the lock state.
 * @property locks - Mapping of lock descriptions to their corresponding
 * callbacks.
 */var Lock=/*#__PURE__*/function(){/**
     * Initializes locks.
     * @param locks - Mapping of a lock description to callbacks for calling
     * when given lock should be released.
     */function Lock(locks){if(locks===void 0){locks={}}_classCallCheck(this,Lock);_defineProperty(this,"lock",void 0);_defineProperty(this,"locks",void 0);this.locks=locks}/**
     * Calling this method introduces a starting point for a critical area with
     * potential race conditions. The area will be bind to given description
     * string. So don't use same names for different areas.
     * @param description - A short string describing the critical areas
     * properties.
     * @param callback - A procedure which should only be executed if the
     * interpreter isn't in the given critical area. The lock description
     * string will be given to the callback function.
     * @param autoRelease - Release the lock after execution of given callback.
     * @returns Returns a promise which will be resolved after releasing lock.
     */return _createClass(Lock,[{key:"acquire",value:function acquire(description,callback,autoRelease){var _this=this;if(autoRelease===void 0){autoRelease=false}return new Promise(function(resolve){var wrappedCallback=function wrappedCallback(description){var _result;var result;if(callback)result=callback(description);var finish=function finish(value){if(autoRelease)void _this.release(description);resolve(value);return value};if((_result=result)!==null&&_result!==void 0&&_result.then)return result.then(finish);finish(result);return result};if(description){if(Object.prototype.hasOwnProperty.call(_this.locks,description))_this.locks[description].push(wrappedCallback);else{_this.locks[description]=[];void wrappedCallback(description)}return}if(_this.lock)_this.lock.push(wrappedCallback);else{_this.lock=[];void wrappedCallback(description)}})}/**
     * Calling this method causes the given critical area to be finished and
     * all functions given to "acquire()" will be executed in right order.
     * @param description - A short string describing the critical areas
     * properties.
     * @returns Returns the return (maybe promise resolved) value of the
     * callback given to the "acquire" method.
     */},{key:"release",value:(function(){var _release=_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(description){var _this$lock;var _callback,callback;return _regenerator().w(function(_context){while(1)switch(_context.n){case 0:if(!description){_context.n=4;break}if(!Object.prototype.hasOwnProperty.call(this.locks,description)){_context.n=3;break}_callback=this.locks[description].shift();if(!(_callback===undefined)){_context.n=1;break}delete this.locks[description];_context.n=3;break;case 1:_context.n=2;return _callback(description);case 2:return _context.a(2,_context.v);case 3:return _context.a(2);case 4:callback=(_this$lock=this.lock)===null||_this$lock===void 0?void 0:_this$lock.shift();if(!(callback===undefined)){_context.n=5;break}this.lock=undefined;_context.n=7;break;case 5:_context.n=6;return callback();case 6:return _context.a(2,_context.v);case 7:return _context.a(2)}},_callee,this)}));function release(_x){return _release.apply(this,arguments)}return release}())}])}();/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (0)));

/***/ }),
/* 11 */
/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_160625__) {

/* harmony export */ __nested_webpack_require_160625__.d(__nested_webpack_exports__, {
/* harmony export */   j: function() { return /* binding */ Semaphore; }
/* harmony export */ });
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module Semaphore *//* !
    region header
    [Project page](https://torben.website/clientnode)

    Copyright Torben Sickert (info["~at~"]torben.website) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _classCallCheck(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,_toPropertyKey(o.key),o)}}function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function _defineProperty(e,r,t){return(r=_toPropertyKey(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _toPropertyKey(t){var i=_toPrimitive(t,"string");return"symbol"==_typeof(i)?i:i+""}function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}/**
 * Represents the semaphore state.
 * @property queue - List of waiting resource requests.
 * @property numberOfFreeResources - Number free allowed concurrent resource
 * uses.
 * @property numberOfResources - Number of allowed concurrent resource uses.
 */var Semaphore=/*#__PURE__*/function(){/**
     * Initializes number of resources.
     * @param numberOfResources - Number of resources to manage.
     */function Semaphore(numberOfResources){if(numberOfResources===void 0){numberOfResources=2}_classCallCheck(this,Semaphore);_defineProperty(this,"queue",[]);_defineProperty(this,"numberOfResources",void 0);_defineProperty(this,"numberOfFreeResources",void 0);this.numberOfResources=numberOfResources;this.numberOfFreeResources=numberOfResources}/**
     * Acquires a new resource and runs given callback if available.
     * @returns A promise which will be resolved if requested resource is
     * available.
     */return _createClass(Semaphore,[{key:"acquire",value:function acquire(){var _this=this;return new Promise(function(resolve){if(_this.numberOfFreeResources<=0)_this.queue.push(resolve);else{_this.numberOfFreeResources-=1;resolve(_this.numberOfFreeResources)}})}/**
     * Releases a resource and runs a waiting resolver if there exists some.
     */},{key:"release",value:function release(){var callback=this.queue.shift();if(callback===undefined)this.numberOfFreeResources+=1;else callback(this.numberOfFreeResources)}}])}();/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (0)));

/***/ }),
/* 12 */
/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_164165__) {

__nested_webpack_require_164165__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_164165__.d(__nested_webpack_exports__, {
/* harmony export */   L5: function() { return /* binding */ importFilesystemAPI; },
/* harmony export */   VW: function() { return /* binding */ imports; },
/* harmony export */   WY: function() { return /* binding */ isFileSync; },
/* harmony export */   Xp: function() { return /* binding */ copyFileSync; },
/* harmony export */   ZP: function() { return /* binding */ isDirectorySync; },
/* harmony export */   fo: function() { return /* binding */ isFile; },
/* harmony export */   hu: function() { return /* binding */ _walkDirectoryRecursivelySync; },
/* harmony export */   m3: function() { return /* binding */ copyFile; },
/* harmony export */   uD: function() { return /* binding */ copyDirectoryRecursiveSync; },
/* harmony export */   vX: function() { return /* binding */ copyDirectoryRecursive; },
/* harmony export */   wd: function() { return /* binding */ isDirectory; },
/* harmony export */   y3: function() { return /* binding */ _walkDirectoryRecursively; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_164165__(0);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_164165__(1);
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_164165__(5);
/* harmony import */ var _module_js__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_164165__(2);
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module filesystem *//* !
    region header
    [Project page](https://torben.website/clientnode)

    Copyright Torben Sickert (info["~at~"]torben.website) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach(function(r){_defineProperty(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function _defineProperty(e,r,t){return(r=_toPropertyKey(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _toPropertyKey(t){var i=_toPrimitive(t,"string");return"symbol"==_typeof(i)?i:i+""}function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)};function _regenerator(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var e,t,r="function"==typeof Symbol?Symbol:{},n=r.iterator||"@@iterator",o=r.toStringTag||"@@toStringTag";function i(r,n,o,i){var c=n&&n.prototype instanceof Generator?n:Generator,u=Object.create(c.prototype);return _regeneratorDefine2(u,"_invoke",function(r,n,o){var i,c,u,f=0,p=o||[],y=!1,G={p:0,n:0,v:e,a:d,f:d.bind(e,4),d:function d(t,r){return i=t,c=0,u=e,G.n=r,a}};function d(r,n){for(c=r,u=n,t=0;!y&&f&&!o&&t<p.length;t++){var o,i=p[t],d=G.p,l=i[2];r>3?(o=l===n)&&(u=i[(c=i[4])?5:(c=3,3)],i[4]=i[5]=e):i[0]<=d&&((o=r<2&&d<i[1])?(c=0,G.v=n,G.n=i[1]):d<l&&(o=r<3||i[0]>n||n>l)&&(i[4]=r,i[5]=n,G.n=l,c=0))}if(o||r>1)return a;throw y=!0,n}return function(o,p,l){if(f>1)throw TypeError("Generator is already running");for(y&&1===p&&d(p,l),c=p,u=l;(t=c<2?e:u)||!y;){i||(c?c<3?(c>1&&(G.n=-1),d(c,u)):G.n=u:G.v=u);try{if(f=2,i){if(c||(o="next"),t=i[o]){if(!(t=t.call(i,u)))throw TypeError("iterator result is not an object");if(!t.done)return t;u=t.value,c<2&&(c=0)}else 1===c&&(t=i.return)&&t.call(i),c<2&&(u=TypeError("The iterator does not provide a '"+o+"' method"),c=1);i=e}else if((t=(y=G.n<0)?u:r.call(n,G))!==a)break}catch(t){i=e,c=1,u=t}finally{f=1}}return{value:t,done:y}}}(r,o,i),!0),u}var a={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}t=Object.getPrototypeOf;var c=[][n]?t(t([][n]())):(_regeneratorDefine2(t={},n,function(){return this}),t),u=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(c);function f(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,GeneratorFunctionPrototype):(e.__proto__=GeneratorFunctionPrototype,_regeneratorDefine2(e,o,"GeneratorFunction")),e.prototype=Object.create(u),e}return GeneratorFunction.prototype=GeneratorFunctionPrototype,_regeneratorDefine2(u,"constructor",GeneratorFunctionPrototype),_regeneratorDefine2(GeneratorFunctionPrototype,"constructor",GeneratorFunction),GeneratorFunction.displayName="GeneratorFunction",_regeneratorDefine2(GeneratorFunctionPrototype,o,"GeneratorFunction"),_regeneratorDefine2(u),_regeneratorDefine2(u,o,"Generator"),_regeneratorDefine2(u,n,function(){return this}),_regeneratorDefine2(u,"toString",function(){return"[object Generator]"}),(_regenerator=function _regenerator(){return{w:i,m:f}})()}function _regeneratorDefine2(e,r,n,t){var i=Object.defineProperty;try{i({},"",{})}catch(e){i=0}_regeneratorDefine2=function _regeneratorDefine(e,r,n,t){function o(r,n){_regeneratorDefine2(e,r,function(e){return this._invoke(r,n,e)})}r?i?i(e,r,{value:n,enumerable:!t,configurable:!t,writable:!t}):e[r]=n:(o("next",0),o("throw",1),o("return",2))},_regeneratorDefine2(e,r,n,t)}function _createForOfIteratorHelper(r,e){var t="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(!t){if(Array.isArray(r)||(t=_unsupportedIterableToArray(r))||e&&r&&"number"==typeof r.length){t&&(r=t);var _n=0,F=function F(){};return{s:F,n:function n(){return _n>=r.length?{done:!0}:{done:!1,value:r[_n++]}},e:function e(r){throw r},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,u=!1;return{s:function s(){t=t.call(r)},n:function n(){var r=t.next();return a=r.done,r},e:function e(r){u=!0,o=r},f:function f(){try{a||null==t.return||t.return()}finally{if(u)throw o}}}}function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}function asyncGeneratorStep(n,t,e,r,o,a,c){try{var i=n[a](c),u=i.value}catch(n){return void e(n)}i.done?t(u):Promise.resolve(u).then(r,o)}function _asyncToGenerator(n){return function(){var t=this,e=arguments;return new Promise(function(r,o){var a=n.apply(t,e);function _next(n){asyncGeneratorStep(a,r,o,_next,_throw,"next",n)}function _throw(n){asyncGeneratorStep(a,r,o,_next,_throw,"throw",n)}_next(void 0)})}};var imports={};var mkdirSync;var readdirSync;var readFileSync;var statSync;var writeFileSync;var mkdir;var readdir;var readFile;var stat;var writeFile;var basename;var join;var resolve;var importPromises=[];var importFilesystemAPI=function importFilesystemAPI(){if(importPromises.length>0)return Promise.all(importPromises);var fsImportPromise=(0,_module_js__WEBPACK_IMPORTED_MODULE_3__/* .optionalImport */ .Sw)("fs");void fsImportPromise.then(function(module){imports.fs=module;if(module){mkdirSync=module.mkdirSync;readdirSync=module.readdirSync;readFileSync=module.readFileSync;statSync=module.statSync;writeFileSync=module.writeFileSync}else{mkdirSync=null;readdirSync=null;readFileSync=null;statSync=null;writeFileSync=null}});var fsPromisesImportPromise=(0,_module_js__WEBPACK_IMPORTED_MODULE_3__/* .optionalImport */ .Sw)("fs/promises");void fsPromisesImportPromise.then(function(module){imports.fsPromises=module;if(module){mkdir=module.mkdir;readdir=module.readdir;readFile=module.readFile;stat=module.stat;writeFile=module.writeFile}else{mkdir=null;readdir=null;readFile=null;stat=null;writeFile=null}});var pathImportPromise=(0,_module_js__WEBPACK_IMPORTED_MODULE_3__/* .optionalImport */ .Sw)("path");void pathImportPromise.then(function(module){imports.path=module;if(module){basename=module.basename;join=module.join;resolve=module.resolve}else{basename=null;join=null;resolve=null}});importPromises.push(fsImportPromise,fsPromisesImportPromise,pathImportPromise);return Promise.all(importPromises)};/**
 * Copies given source directory via path to given target directory location
 * with same target name as source file has or copy to given complete target
 * directory path.
 * @param sourcePath - Path to directory to copy.
 * @param targetPath - Target directory or complete directory location to copy
 * in.
 * @param contents - Indicates whether we only want to copy content of source
 * path without recreating the sourcefile itself on target location.
 * @param callback - Function to invoke for each traversed file.
 * @param readOptions - Options to use for reading source file.
 * @param writeOptions - Options to use for writing to target file.
 * @returns Promise holding the determined target directory path.
 */var copyDirectoryRecursive=/*#__PURE__*/function(){var _copyDirectoryRecursive=_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(sourcePath,targetPath,contents,callback,readOptions,writeOptions){var _iterator,_step,_currentSourceFile$st,currentSourceFile,currentTargetPath,_t,_t2,_t3,_t4,_t5;return _regenerator().w(function(_context){while(1)switch(_context.p=_context.n){case 0:if(contents===void 0){contents=false}if(callback===void 0){callback=_context_js__WEBPACK_IMPORTED_MODULE_2__/* .NOOP */ .tE}if(readOptions===void 0){readOptions={encoding:null,flag:"r"}}if(writeOptions===void 0){writeOptions={encoding:_constants_js__WEBPACK_IMPORTED_MODULE_1__/* .DEFAULT_ENCODING */ .uJ,flag:"w",mode:438}}if(basename&&join&&mkdir&&resolve){_context.n=1;break}throw new Error("Could not load filesystem functions.");case 1:sourcePath=resolve(sourcePath);_t=!contents;if(!_t){_context.n=3;break}_context.n=2;return isDirectory(targetPath);case 2:_t=_context.v;case 3:if(!_t){_context.n=4;break}targetPath=resolve(targetPath,basename(sourcePath));case 4:_context.p=4;_context.n=5;return mkdir(targetPath);case 5:_context.n=7;break;case 6:_context.p=6;_t2=_context.v;if(!(_t2.code!=="EEXIST")){_context.n=7;break}throw _t2;case 7:_t3=_createForOfIteratorHelper;_context.n=8;return _walkDirectoryRecursively(sourcePath,callback);case 8:_iterator=_t3(_context.v);_context.p=9;_iterator.s();case 10:if((_step=_iterator.n()).done){_context.n=17;break}currentSourceFile=_step.value;currentTargetPath=join(targetPath,currentSourceFile.path.substring(sourcePath.length));if(!((_currentSourceFile$st=currentSourceFile.stats)!==null&&_currentSourceFile$st!==void 0&&_currentSourceFile$st.isDirectory())){_context.n=15;break}_context.p=11;_context.n=12;return mkdir(currentTargetPath);case 12:_context.n=14;break;case 13:_context.p=13;_t4=_context.v;if(!(_t4.code!=="EEXIST")){_context.n=14;break}throw _t4;case 14:_context.n=16;break;case 15:_context.n=16;return copyFile(currentSourceFile.path,currentTargetPath,readOptions,writeOptions);case 16:_context.n=10;break;case 17:_context.n=19;break;case 18:_context.p=18;_t5=_context.v;_iterator.e(_t5);case 19:_context.p=19;_iterator.f();return _context.f(19);case 20:return _context.a(2,targetPath)}},_callee,null,[[11,13],[9,18,19,20],[4,6]])}));function copyDirectoryRecursive(_x,_x2,_x3,_x4,_x5,_x6){return _copyDirectoryRecursive.apply(this,arguments)}return copyDirectoryRecursive}();/**
 * Copies given source directory via path to given target directory location
 * with same target name as source file has or copy to given complete target
 * directory path.
 * @param sourcePath - Path to directory to copy.
 * @param targetPath - Target directory or complete directory location to copy
 * in.
 * @param contents - Indicates whether we only want to copy content of source
 * path without recreating the sourcefile itself on target location.
 * @param callback - Function to invoke for each traversed file.
 * @param readOptions - Options to use for reading source file.
 * @param writeOptions - Options to use for writing to target file.
 * @returns Determined target directory path.
 */var copyDirectoryRecursiveSync=function copyDirectoryRecursiveSync(sourcePath,targetPath,contents,callback,readOptions,writeOptions){if(contents===void 0){contents=false}if(callback===void 0){callback=_context_js__WEBPACK_IMPORTED_MODULE_2__/* .NOOP */ .tE}if(readOptions===void 0){readOptions={encoding:null,flag:"r"}}if(writeOptions===void 0){writeOptions={encoding:_constants_js__WEBPACK_IMPORTED_MODULE_1__/* .DEFAULT_ENCODING */ .uJ,flag:"w",mode:438}}if(!(basename&&join&&mkdirSync&&resolve))throw new Error("Could not load filesystem functions.");sourcePath=resolve(sourcePath);if(!contents&&isDirectorySync(targetPath))targetPath=resolve(targetPath,basename(sourcePath));// NOTE: Try/Check if target folder needs to be created.
try{mkdirSync(targetPath)}catch(error){if(error.code!=="EEXIST")throw error}for(var _i=0,_walkDirectoryRecursi=_walkDirectoryRecursivelySync(sourcePath,callback);_i<_walkDirectoryRecursi.length;_i++){var _currentSourceFile$st2;var currentSourceFile=_walkDirectoryRecursi[_i];var currentTargetPath=join(targetPath,currentSourceFile.path.substring(sourcePath.length));if((_currentSourceFile$st2=currentSourceFile.stats)!==null&&_currentSourceFile$st2!==void 0&&_currentSourceFile$st2.isDirectory())try{mkdirSync(currentTargetPath)}catch(error){if(error.code!=="EEXIST")throw error}else copyFileSync(currentSourceFile.path,currentTargetPath,readOptions,writeOptions)}return targetPath};/**
 * Copies given source file via path to given target directory location with
 * same target name as source file has or copy to given complete target file
 * path.
 * @param sourcePath - Path to file to copy.
 * @param targetPath - Target directory or complete file location to copy to.
 * @param readOptions - Options to use for reading source file.
 * @param writeOptions - Options to use for writing to target file.
 * @returns Determined target file path.
 */var copyFile=/*#__PURE__*/function(){var _copyFile=_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(sourcePath,targetPath,readOptions,writeOptions){var _t6,_t7;return _regenerator().w(function(_context2){while(1)switch(_context2.n){case 0:if(readOptions===void 0){readOptions={encoding:null,flag:"r"}}if(writeOptions===void 0){writeOptions={encoding:_constants_js__WEBPACK_IMPORTED_MODULE_1__/* .DEFAULT_ENCODING */ .uJ,flag:"w",mode:438}}if(basename&&readFile&&resolve&&writeFile){_context2.n=1;break}throw new Error("Could not load filesystem functions.");case 1:_context2.n=2;return isDirectory(targetPath);case 2:if(!_context2.v){_context2.n=3;break}targetPath=resolve(targetPath,basename(sourcePath));case 3:_t6=writeFile;_t7=targetPath;_context2.n=4;return readFile(sourcePath,readOptions);case 4:_context2.n=5;return _t6(_t7,_context2.v,writeOptions);case 5:return _context2.a(2,targetPath)}},_callee2)}));function copyFile(_x7,_x8,_x9,_x0){return _copyFile.apply(this,arguments)}return copyFile}();/**
 * Copies given source file via path to given target directory location with
 * same target name as source file has or copy to given complete target file
 * path.
 * @param sourcePath - Path to file to copy.
 * @param targetPath - Target directory or complete file location to copy to.
 * @param readOptions - Options to use for reading source file.
 * @param writeOptions - Options to use for writing to target file.
 * @returns Determined target file path.
 */var copyFileSync=function copyFileSync(sourcePath,targetPath,readOptions,writeOptions){if(readOptions===void 0){readOptions={encoding:null,flag:"r"}}if(writeOptions===void 0){writeOptions={encoding:_constants_js__WEBPACK_IMPORTED_MODULE_1__/* .DEFAULT_ENCODING */ .uJ,flag:"w",mode:438}}if(!(basename&&readFileSync&&resolve&&writeFileSync))throw new Error("Could not load filesystem functions.");/*
        NOTE: If target path references a directory a new file with the same
        name will be created.
    */if(isDirectorySync(targetPath))targetPath=resolve(targetPath,basename(sourcePath));writeFileSync(targetPath,readFileSync(sourcePath,readOptions),writeOptions);return targetPath};/**
 * Checks if given path points to a valid directory.
 * @param filePath - Path to directory.
 * @returns A promise holding a boolean which indicates directory existence.
 */var isDirectory=/*#__PURE__*/function(){var _isDirectory=_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(filePath){var _t8;return _regenerator().w(function(_context3){while(1)switch(_context3.p=_context3.n){case 0:if(stat){_context3.n=1;break}throw new Error("Could not load filesystem functions.");case 1:_context3.p=1;_context3.n=2;return stat(filePath);case 2:return _context3.a(2,_context3.v.isDirectory());case 3:_context3.p=3;_t8=_context3.v;if(!(Object.prototype.hasOwnProperty.call(_t8,"code")&&["ENOENT","ENOTDIR"].includes(_t8.code))){_context3.n=4;break}return _context3.a(2,false);case 4:throw _t8;case 5:return _context3.a(2)}},_callee3,null,[[1,3]])}));function isDirectory(_x1){return _isDirectory.apply(this,arguments)}return isDirectory}();/**
 * Checks if given path points to a valid directory.
 * @param filePath - Path to directory.
 * @returns A boolean which indicates directory existence.
 */var isDirectorySync=function isDirectorySync(filePath){if(!statSync)throw new Error("Could not load filesystem functions.");try{return statSync(filePath).isDirectory()}catch(error){if(Object.prototype.hasOwnProperty.call(error,"code")&&["ENOENT","ENOTDIR"].includes(error.code))return false;throw error}};/**
 * Checks if given path points to a valid file.
 * @param filePath - Path to directory.
 * @returns A promise holding a boolean which indicates directory existence.
 */var isFile=/*#__PURE__*/function(){var _isFile=_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(filePath){var _t9;return _regenerator().w(function(_context4){while(1)switch(_context4.p=_context4.n){case 0:if(stat){_context4.n=1;break}throw new Error("Could not load filesystem functions.");case 1:_context4.p=1;_context4.n=2;return stat(filePath);case 2:return _context4.a(2,_context4.v.isFile());case 3:_context4.p=3;_t9=_context4.v;if(!(Object.prototype.hasOwnProperty.call(_t9,"code")&&["ENOENT","ENOTDIR"].includes(_t9.code))){_context4.n=4;break}return _context4.a(2,false);case 4:throw _t9;case 5:return _context4.a(2)}},_callee4,null,[[1,3]])}));function isFile(_x10){return _isFile.apply(this,arguments)}return isFile}();/**
 * Checks if given path points to a valid file.
 * @param filePath - Path to file.
 * @returns A boolean which indicates file existence.
 */var isFileSync=function isFileSync(filePath){if(!statSync)throw new Error("Could not load filesystem functions.");try{return statSync(filePath).isFile()}catch(error){if(Object.prototype.hasOwnProperty.call(error,"code")&&["ENOENT","ENOTDIR"].includes(error.code))return false;throw error}};/**
 * Iterates through given directory structure recursively and calls given
 * callback for each found file. Callback gets file path and corresponding stat
 * object as argument.
 * @param directoryPath - Path to directory structure to traverse.
 * @param callback - Function to invoke for each traversed file and potentially
 * manipulate further traversing in alphabetical sorted order.
 * If it returns "null" or a promise resolving to "null", no further files
 * will be traversed afterward.
 * If it handles a directory and returns "false" or a promise resolving to
 * "false" no traversing into that directory will occur.
 * @param options - Options to use for nested "readdir" calls.
 * @returns A promise holding the determined files.
 */var _walkDirectoryRecursively=/*#__PURE__*/function(){var _walkDirectoryRecursively2=_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(directoryPath,callback,options){var files,_iterator2,_step2,directoryEntry,filePath,_file,finalFiles,_i2,_files,_file$stats,file,result,_t0,_t1,_t10,_t11;return _regenerator().w(function(_context5){while(1)switch(_context5.p=_context5.n){case 0:if(callback===void 0){callback=null}if(options===void 0){options=_constants_js__WEBPACK_IMPORTED_MODULE_1__/* .DEFAULT_ENCODING */ .uJ}if(readdir&&resolve&&stat){_context5.n=1;break}throw new Error("Could not load filesystem functions.");case 1:files=[];_t0=_createForOfIteratorHelper;_context5.n=2;return readdir(directoryPath,typeof options==="string"?{encoding:options,withFileTypes:true}:_objectSpread(_objectSpread({},options),{},{withFileTypes:true}));case 2:_iterator2=_t0(_context5.v);_context5.p=3;_iterator2.s();case 4:if((_step2=_iterator2.n()).done){_context5.n=10;break}directoryEntry=_step2.value;filePath=resolve(directoryPath,directoryEntry.name);_file={directoryPath:directoryPath,directoryEntry:directoryEntry,error:null,name:directoryEntry.name,path:filePath,stats:null};_context5.p=5;_context5.n=6;return stat(filePath);case 6:_file.stats=_context5.v;_context5.n=8;break;case 7:_context5.p=7;_t1=_context5.v;_file.error=_t1;case 8:files.push(_file);case 9:_context5.n=4;break;case 10:_context5.n=12;break;case 11:_context5.p=11;_t10=_context5.v;_iterator2.e(_t10);case 12:_context5.p=12;_iterator2.f();return _context5.f(12);case 13:if(callback)/*
            NOTE: Directories and have to be iterated first to be able to
            avoid deeper unwanted traversing.
        */files.sort(function(firstFile,secondFile){var _firstFile$stats,_secondFile$stats2;if((_firstFile$stats=firstFile.stats)!==null&&_firstFile$stats!==void 0&&_firstFile$stats.isDirectory()){var _secondFile$stats;if((_secondFile$stats=secondFile.stats)!==null&&_secondFile$stats!==void 0&&_secondFile$stats.isDirectory())return 0;return-1}if((_secondFile$stats2=secondFile.stats)!==null&&_secondFile$stats2!==void 0&&_secondFile$stats2.isDirectory())return 1;return 0});finalFiles=[];_i2=0,_files=files;case 14:if(!(_i2<_files.length)){_context5.n=21;break}file=_files[_i2];finalFiles.push(file);result=callback?callback(file):undefined;if(!(result===null)){_context5.n=15;break}return _context5.a(3,21);case 15:if(!(_typeof(result)==="object"&&"then"in result)){_context5.n=17;break}_context5.n=16;return result;case 16:result=_context5.v;case 17:if(!(result===null)){_context5.n=18;break}return _context5.a(3,21);case 18:if(!(result!==false&&(_file$stats=file.stats)!==null&&_file$stats!==void 0&&_file$stats.isDirectory())){_context5.n=20;break}_t11=finalFiles;_context5.n=19;return _walkDirectoryRecursively(file.path,callback,options);case 19:finalFiles=_t11.concat.call(_t11,_context5.v);case 20:_i2++;_context5.n=14;break;case 21:return _context5.a(2,finalFiles)}},_callee5,null,[[5,7],[3,11,12,13]])}));function walkDirectoryRecursively(_x11,_x12,_x13){return _walkDirectoryRecursively2.apply(this,arguments)}return walkDirectoryRecursively}();/**
 * Iterates through given directory structure recursively and calls given
 * callback for each found file. Callback gets file path and corresponding
 * stats object as argument.
 * @param directoryPath - Path to directory structure to traverse.
 * @param callback - Function to invoke for each traversed file.
 * @param options - Options to use for nested "readdir" calls.
 * @returns Determined list if all files.
 */var _walkDirectoryRecursivelySync=function walkDirectoryRecursivelySync(directoryPath,callback,options){if(callback===void 0){callback=_context_js__WEBPACK_IMPORTED_MODULE_2__/* .NOOP */ .tE}if(options===void 0){options=_constants_js__WEBPACK_IMPORTED_MODULE_1__/* .DEFAULT_ENCODING */ .uJ}if(!(readdirSync&&resolve&&statSync))throw new Error("Could not load filesystem functions.");var files=[];var _iterator3=_createForOfIteratorHelper(readdirSync(directoryPath,typeof options==="string"?{encoding:options,withFileTypes:true}:_objectSpread(_objectSpread({},options),{},{withFileTypes:true}))),_step3;try{for(_iterator3.s();!(_step3=_iterator3.n()).done;){var directoryEntry=_step3.value;var filePath=resolve(directoryPath,directoryEntry.name);var _file2={directoryPath:directoryPath,directoryEntry:directoryEntry,error:null,name:directoryEntry.name,path:filePath,stats:null};try{_file2.stats=statSync(filePath)}catch(error){_file2.error=error}files.push(_file2)}}catch(err){_iterator3.e(err)}finally{_iterator3.f()}var finalFiles=[];if(callback){/*
            NOTE: Directories have to be iterated first to potentially
            avoid deeper iterations.
        */files.sort(function(firstFile,secondFile){var _firstFile$stats2,_secondFile$stats4;if((_firstFile$stats2=firstFile.stats)!==null&&_firstFile$stats2!==void 0&&_firstFile$stats2.isDirectory()){var _secondFile$stats3;if((_secondFile$stats3=secondFile.stats)!==null&&_secondFile$stats3!==void 0&&_secondFile$stats3.isDirectory())return 0;return-1}if((_secondFile$stats4=secondFile.stats)!==null&&_secondFile$stats4!==void 0&&_secondFile$stats4.isDirectory())return 1;return 0});var _iterator4=_createForOfIteratorHelper(files),_step4;try{for(_iterator4.s();!(_step4=_iterator4.n()).done;){var _file$stats2;var file=_step4.value;finalFiles.push(file);var result=callback(file);if(result===null)break;if(result!==false&&(_file$stats2=file.stats)!==null&&_file$stats2!==void 0&&_file$stats2.isDirectory())finalFiles=finalFiles.concat(_walkDirectoryRecursivelySync(file.path,callback,options))}}catch(err){_iterator4.e(err)}finally{_iterator4.f()}}return finalFiles};

/***/ }),
/* 13 */
/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_190669__) {

__nested_webpack_require_190669__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_190669__.d(__nested_webpack_exports__, {
/* harmony export */   dG: function() { return /* binding */ stopPropagation; },
/* harmony export */   p0: function() { return /* binding */ trailingThrottle; },
/* harmony export */   sg: function() { return /* binding */ debounce; },
/* harmony export */   wR: function() { return /* binding */ timeout; },
/* harmony export */   wo: function() { return /* binding */ preventDefault; }
/* harmony export */ });
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_190669__(5);
/* harmony import */ var _indicators_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_190669__(4);
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module utility *//* !
    region header
    [Project page](https://torben.website/clientnode)

    Copyright Torben Sickert (info["~at~"]torben.website) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/function _toConsumableArray(r){return _arrayWithoutHoles(r)||_iterableToArray(r)||_unsupportedIterableToArray(r)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}function _iterableToArray(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}function _arrayWithoutHoles(r){if(Array.isArray(r))return _arrayLikeToArray(r)}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n};/**
 * Prevents event functions from triggering too often by defining a minimal
 * span between each function call. Additional arguments given to this function
 * will be forwarded to the given event function call.
 * @param callback - The function to call debounced.
 * @param thresholdInMilliseconds - The minimum time span between each
 * function call.
 * @param additionalArguments - Additional arguments to forward to given
 * function.
 * @returns Returns the wrapped method.
 */var trailingThrottle=function trailingThrottle(callback,thresholdInMilliseconds){if(thresholdInMilliseconds===void 0){thresholdInMilliseconds=600}for(var _len=arguments.length,additionalArguments=new Array(_len>2?_len-2:0),_key=2;_key<_len;_key++){additionalArguments[_key-2]=arguments[_key]}var timeoutID=null;var recentParameters=[];return function(){for(var _len2=arguments.length,parameters=new Array(_len2),_key2=0;_key2<_len2;_key2++){parameters[_key2]=arguments[_key2]}recentParameters=parameters;if(timeoutID)return;timeoutID=setTimeout(function(){callback.apply(void 0,_toConsumableArray(recentParameters).concat(additionalArguments));// Reset for next cycle.
timeoutID=null;recentParameters=[]},thresholdInMilliseconds)}};/**
 * Prevents event functions from triggering too close after each trigger by
 * defining a minimal span between each function call. Additional arguments
 * given to this function will be forwarded to the given event function call.
 * @param callback - The function to call debounced.
 * @param thresholdInMilliseconds - The minimum time span between each
 * function call.
 * @param additionalArguments - Additional arguments to forward to given
 * function.
 * @returns Returns the wrapped method.
 */var debounce=function debounce(callback,thresholdInMilliseconds){if(thresholdInMilliseconds===void 0){thresholdInMilliseconds=600}for(var _len3=arguments.length,additionalArguments=new Array(_len3>2?_len3-2:0),_key3=2;_key3<_len3;_key3++){additionalArguments[_key3-2]=arguments[_key3]}var timeoutPromise;var nextResultPromiseResolver;var nextResultPromise=new Promise(function(resolve){nextResultPromiseResolver=resolve});return function(){var _timeoutPromise;for(var _len4=arguments.length,parameters=new Array(_len4),_key4=0;_key4<_len4;_key4++){parameters[_key4]=arguments[_key4]}parameters=parameters.concat(additionalArguments);(_timeoutPromise=timeoutPromise)===null||_timeoutPromise===void 0||_timeoutPromise.clear();timeoutPromise=timeout(function(){nextResultPromiseResolver(callback.apply(void 0,_toConsumableArray(parameters)));nextResultPromise=new Promise(function(resolve){nextResultPromiseResolver=resolve})},thresholdInMilliseconds);return nextResultPromise}};/**
 * Triggers given callback after given duration. Supports unlimited
 * duration length and returns a promise which will be resolved after given
 * duration has been passed.
 * @param parameters - Observes the first three existing parameters. If one
 * is a number it will be interpreted as delay in milliseconds until given
 * callback will be triggered. If one is of type function it will be used
 * as callback and if one is of type boolean it will indicate if returning
 * promise should be rejected or resolved if given internally created
 * timeout should be canceled. Additional parameters will be forwarded to
 * given callback.
 * @returns A promise resolving after given delay or being rejected if
 * value "true" is within one of the first three parameters. The promise
 * holds a boolean indicating whether timeout has been canceled or
 * resolved.
 */var timeout=function timeout(){for(var _len5=arguments.length,parameters=new Array(_len5),_key5=0;_key5<_len5;_key5++){parameters[_key5]=arguments[_key5]}var callback=_context_js__WEBPACK_IMPORTED_MODULE_0__/* .NOOP */ .tE;var delayInMilliseconds=0;var throwOnTimeoutClear=false;for(var _i=0,_parameters=parameters;_i<_parameters.length;_i++){var value=_parameters[_i];if(typeof value==="number"&&!isNaN(value))delayInMilliseconds=value;else if(typeof value==="boolean")throwOnTimeoutClear=value;else if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_1__/* .isFunction */ .Tn)(value))callback=value}var rejectCallback;var resolveCallback;var result=new Promise(function(resolve,reject){rejectCallback=reject;resolveCallback=resolve});var wrappedCallback=function wrappedCallback(){var _callback;(_callback=callback).call.apply(_callback,[result].concat(parameters));resolveCallback(false)};var maximumTimeoutDelayInMilliseconds=2147483647;if(delayInMilliseconds<=maximumTimeoutDelayInMilliseconds)result.timeoutID=setTimeout(wrappedCallback,delayInMilliseconds);else{/*
            Determine the number of times we need to delay by maximum
            possible timeout duration.
        */var numberOfRemainingTimeouts=Math.floor(delayInMilliseconds/maximumTimeoutDelayInMilliseconds);var finalTimeoutDuration=delayInMilliseconds%maximumTimeoutDelayInMilliseconds;var _delay=function delay(){if(numberOfRemainingTimeouts>0){numberOfRemainingTimeouts-=1;result.timeoutID=setTimeout(_delay,maximumTimeoutDelayInMilliseconds)}else result.timeoutID=setTimeout(wrappedCallback,finalTimeoutDuration)};_delay()}result.clear=function(){if(Object.prototype.hasOwnProperty.call(result,"timeoutID")){clearTimeout(result.timeoutID);(throwOnTimeoutClear?rejectCallback:resolveCallback)(true)}};return result};var preventDefault=function preventDefault(event){event.preventDefault()};var stopPropagation=function stopPropagation(event){event.stopPropagation()};

/***/ }),
/* 14 */
/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_198407__) {

/* harmony export */ __nested_webpack_require_198407__.d(__nested_webpack_exports__, {
/* harmony export */   $y: function() { return /* binding */ isSwitchExpression; },
/* harmony export */   G3: function() { return /* binding */ isCondition; },
/* harmony export */   Gc: function() { return /* binding */ isAndExpression; },
/* harmony export */   HK: function() { return /* binding */ isConcatExpression; },
/* harmony export */   MP: function() { return /* binding */ isIfExpression; },
/* harmony export */   YG: function() { return /* binding */ isOperation; },
/* harmony export */   Z9: function() { return /* binding */ isMappingExpression; },
/* harmony export */   ZI: function() { return /* binding */ isArrayContainsExpression; },
/* harmony export */   bF: function() { return /* binding */ isUnaryOperation; },
/* harmony export */   bQ: function() { return /* binding */ isSpecificExpression; },
/* harmony export */   cB: function() { return /* binding */ isSelector; },
/* harmony export */   g6: function() { return /* binding */ isOrExpression; },
/* harmony export */   ml: function() { return /* binding */ isValue; }
/* harmony export */ });
/* harmony import */ var _indicators_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_198407__(4);
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/* !
    region header
    [Project page](https://torben.website/clientnode)

    Copyright Torben Sickert (info["~at~"]torben.website) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/function _createForOfIteratorHelper(r,e){var t="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(!t){if(Array.isArray(r)||(t=_unsupportedIterableToArray(r))||e&&r&&"number"==typeof r.length){t&&(r=t);var _n=0,F=function F(){};return{s:F,n:function n(){return _n>=r.length?{done:!0}:{done:!1,value:r[_n++]}},e:function e(r){throw r},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,u=!1;return{s:function s(){t=t.call(r)},n:function n(){var r=t.next();return a=r.done,r},e:function e(r){u=!0,o=r},f:function f(){try{a||null==t.return||t.return()}finally{if(u)throw o}}}}function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n};var isSpecificExpression=function isSpecificExpression(expression,indicatorKey,properties){if(properties===void 0){properties=[]}if(!((0,_indicators_js__WEBPACK_IMPORTED_MODULE_0__/* .isPlainObject */ .Qd)(expression)&&Object.prototype.hasOwnProperty.call(expression,indicatorKey)))return false;var _iterator=_createForOfIteratorHelper(properties),_step;try{for(_iterator.s();!(_step=_iterator.n()).done;){var name=_step.value;if(!Object.prototype.hasOwnProperty.call(expression,name))return false}}catch(err){_iterator.e(err)}finally{_iterator.f()}return true};var isCondition=function isCondition(expression){return isSpecificExpression(expression,"$comparator",["value1","value2"])};var isAndExpression=function isAndExpression(expression){return isSpecificExpression(expression,"$and")};var isOrExpression=function isOrExpression(expression){return isSpecificExpression(expression,"$or")};var isConcatExpression=function isConcatExpression(expression){return isSpecificExpression(expression,"$concat")};var isMappingExpression=function isMappingExpression(expression){return isSpecificExpression(expression,"$mapping",["data"])};var isOperation=function isOperation(expression){return isSpecificExpression(expression,"$operator",["operand1","operand2"])};var isUnaryOperation=function isUnaryOperation(expression){return isSpecificExpression(expression,"$operator",["operand"])};var isIfExpression=function isIfExpression(expression){return isSpecificExpression(expression,"$if")};var isSwitchExpression=function isSwitchExpression(expression){return isSpecificExpression(expression,"$switch")};var isSelector=function isSelector(expression){return isSpecificExpression(expression,"$select")};var isArrayContainsExpression=function isArrayContainsExpression(expression){return isSpecificExpression(expression,"$arrayContains")};var isValue=function isValue(expression){return!(isSelector(expression)||isCondition(expression)||isUnaryOperation(expression)||isOperation(expression)||isAndExpression(expression)||isOrExpression(expression)||isConcatExpression(expression)||isMappingExpression(expression)||isIfExpression(expression)||isSwitchExpression(expression)||isArrayContainsExpression(expression))};

/***/ }),
/* 15 */
/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_203532__) {

__nested_webpack_require_203532__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_203532__.d(__nested_webpack_exports__, {
/* harmony export */   A_: function() { return /* binding */ LEVELS; },
/* harmony export */   Vy: function() { return /* binding */ Logger; },
/* harmony export */   Wh: function() { return /* binding */ LEVELS_COLOR; }
/* harmony export */ });
/* harmony import */ var _cli_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_203532__(1);
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_203532__(5);
/* harmony import */ var _indicators_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_203532__(4);
/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_203532__(3);
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module Logger *//* !
    region header
    [Project page](https://torben.website/clientnode)

    Copyright Torben Sickert (info["~at~"]torben.website) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/var _Logger;function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _slicedToArray(r,e){return _arrayWithHoles(r)||_iterableToArrayLimit(r,e)||_unsupportedIterableToArray(r,e)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}function _arrayWithHoles(r){if(Array.isArray(r))return r}function _classCallCheck(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,_toPropertyKey(o.key),o)}}function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function _defineProperty(e,r,t){return(r=_toPropertyKey(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _toPropertyKey(t){var i=_toPrimitive(t,"string");return"symbol"==_typeof(i)?i:i+""}function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)};var LEVELS=["error","critical","warn","info","debug"];var LEVELS_COLOR=[_cli_js__WEBPACK_IMPORTED_MODULE_0__/* .CLI_COLOR */ .l_.red,_cli_js__WEBPACK_IMPORTED_MODULE_0__/* .CLI_COLOR */ .l_.magenta,_cli_js__WEBPACK_IMPORTED_MODULE_0__/* .CLI_COLOR */ .l_.yellow,_cli_js__WEBPACK_IMPORTED_MODULE_0__/* .CLI_COLOR */ .l_.green,_cli_js__WEBPACK_IMPORTED_MODULE_0__/* .CLI_COLOR */ .l_.blue];/**
 * This plugin provides such interface logic like generic controller logic for
 * integrating plugins into $, mutual exclusion for dependent gui elements,
 * logging additional string, array or function handling. A set of helper
 * functions to parse  option objects dom trees or handle events is also
 * provided.
 * @property level - Logging level.
 * @property name - Logger description.
 */var Logger=/*#__PURE__*/function(){/**
     * Initializes logger.
     * @param options - Options to set.
     */function Logger(options){if(options===void 0){options={}}_classCallCheck(this,Logger);_defineProperty(this,"level",Logger.defaultLevel);_defineProperty(this,"name",Logger.defaultName);this.configure(options);Logger.instances[this.name]=this}/**
     * Configures logger.
     * @param options - Options to set.
     * @param options.name - Description of the logger instance.
     * @param options.level - Logging level to configure.
     */return _createClass(Logger,[{key:"configure",value:function configure(_ref){var name=_ref.name,level=_ref.level;if(level)this.level=level;else this.level=Logger.defaultLevel;if(name)this.name=name;else this.name=Logger.defaultName}/**
     * Shows the given object's representation in the browsers console if
     * possible or in a standalone alert-window as fallback.
     * @param object - Any object to print.
     * @param force - If set to "true" given input will be shown independently
     * of current logging configuration or interpreter's console
     * implementation.
     * @param avoidAnnotation - If set to "true" given input has no module or
     * log level specific annotations.
     * @param level - Description of log messages importance.
     * @param additionalArguments - Additional values to print.
     */},{key:"log",value:function log(object,force,avoidAnnotation,level){if(force===void 0){force=false}if(avoidAnnotation===void 0){avoidAnnotation=false}if(level===void 0){level="info"}var currentLevelIndex=LEVELS.indexOf(this.level);var levelIndex=LEVELS.indexOf(level);if(force||currentLevelIndex>=levelIndex){var _globalContext$consol;var messages=[];var annotation="".concat(LEVELS_COLOR[levelIndex]).concat(level)+"".concat(_cli_js__WEBPACK_IMPORTED_MODULE_0__/* .CLI_COLOR */ .l_.default,":").concat(this.name,":")+"".concat(new Date().toISOString(),":");for(var _len=arguments.length,additionalArguments=new Array(_len>4?_len-4:0),_key=4;_key<_len;_key++){additionalArguments[_key-4]=arguments[_key]}if(avoidAnnotation)messages.push(object);else if(typeof object==="string")messages.push.apply(messages,[annotation,object].concat(additionalArguments));else if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_2__/* .isNumeric */ .kf)(object)||typeof object==="boolean")messages.push.apply(messages,[annotation,object.toString()].concat(additionalArguments));else{var multiLineAnnotation=annotation.substring(0,annotation.length-1);var lineLength=79-2;// Color codes are invisible so we have to add it.
var remainingLength=lineLength+LEVELS_COLOR[levelIndex].length+_cli_js__WEBPACK_IMPORTED_MODULE_0__/* .CLI_COLOR */ .l_.default.length-multiLineAnnotation.length;var halfRemainingLength=Math.floor(remainingLength/2);this.log(",".concat("-".repeat(halfRemainingLength))+multiLineAnnotation+"-".repeat(halfRemainingLength)+"".concat("-".repeat(remainingLength%2),","),force,true,level);this.log(object,force,true,level);this.log("'".concat("-".repeat(lineLength),"'"),force,true,level)}if(messages.length)if(!(_context_js__WEBPACK_IMPORTED_MODULE_1__/* .globalContext */ .Lz.console&&level in _context_js__WEBPACK_IMPORTED_MODULE_1__/* .globalContext */ .Lz.console)||_context_js__WEBPACK_IMPORTED_MODULE_1__/* .globalContext */ .Lz.console[level]===_context_js__WEBPACK_IMPORTED_MODULE_1__/* .NOOP */ .tE){var _globalContext$window;if(Object.prototype.hasOwnProperty.call(_context_js__WEBPACK_IMPORTED_MODULE_1__/* .globalContext */ .Lz,"window")&&Object.prototype.hasOwnProperty.call(_context_js__WEBPACK_IMPORTED_MODULE_1__/* .globalContext */ .Lz.window,"alert"))(_globalContext$window=_context_js__WEBPACK_IMPORTED_MODULE_1__/* .globalContext */ .Lz.window)===null||_globalContext$window===void 0||_globalContext$window.alert(messages.join(" "))}else(_globalContext$consol=_context_js__WEBPACK_IMPORTED_MODULE_1__/* .globalContext */ .Lz.console)[level].apply(_globalContext$consol,messages)}}/**
     * Wrapper method for the native console method usually provided by
     * interpreter.
     * @param object - Any object to print.
     * @param additionalArguments - Additional arguments are used for string
     * formatting.
     */},{key:"info",value:function info(object){for(var _len2=arguments.length,additionalArguments=new Array(_len2>1?_len2-1:0),_key2=1;_key2<_len2;_key2++){additionalArguments[_key2-1]=arguments[_key2]}this.log.apply(this,[object,false,false,"info"].concat(additionalArguments))}/**
     * Wrapper method for the native console method usually provided by
     * interpreter.
     * @param object - Any object to print.
     * @param additionalArguments - Additional arguments are used for string
     * formatting.
     */},{key:"debug",value:function debug(object){for(var _len3=arguments.length,additionalArguments=new Array(_len3>1?_len3-1:0),_key3=1;_key3<_len3;_key3++){additionalArguments[_key3-1]=arguments[_key3]}this.log.apply(this,[object,false,false,"debug"].concat(additionalArguments))}/**
     * Wrapper method for the native console method usually provided by
     * interpreter.
     * @param object - Any object to print.
     * @param additionalArguments - Additional arguments are used for string
     * formatting.
     */},{key:"error",value:function error(object){for(var _len4=arguments.length,additionalArguments=new Array(_len4>1?_len4-1:0),_key4=1;_key4<_len4;_key4++){additionalArguments[_key4-1]=arguments[_key4]}this.log.apply(this,[object,true,false,"error"].concat(additionalArguments))}/**
     * Wrapper method for the native console method usually provided by
     * interpreter.
     * @param object - Any object to print.
     * @param additionalArguments - Additional arguments are used for string
     * formatting.
     */},{key:"critical",value:function critical(object){for(var _len5=arguments.length,additionalArguments=new Array(_len5>1?_len5-1:0),_key5=1;_key5<_len5;_key5++){additionalArguments[_key5-1]=arguments[_key5]}this.log.apply(this,[object,true,false,"warn"].concat(additionalArguments))}/**
     * Wrapper method for the native console method usually provided by
     * interpreter.
     * @param object - Any object to print.
     * @param additionalArguments - Additional arguments are used for string
     * formatting.
     */},{key:"warn",value:function warn(object){for(var _len6=arguments.length,additionalArguments=new Array(_len6>1?_len6-1:0),_key6=1;_key6<_len6;_key6++){additionalArguments[_key6-1]=arguments[_key6]}this.log.apply(this,[object,false,false,"warn"].concat(additionalArguments))}/**
     * Dumps a given object in a human-readable format.
     * @param object - Any object to show.
     * @param level - Number of levels to dig into given object recursively.
     * @param currentLevel - Maximal number of recursive function calls to
     * represent given object.
     * @returns Returns the serialized version of given object.
     */}],[{key:"configureAllInstances",value:/**
     * Configures all logger instances.
     * @param options - Options to set.
     */function configureAllInstances(options){if(options===void 0){options={}}if(options.level)Logger.defaultLevel=options.level;if(options.name)Logger.defaultName=options.name;for(var _i=0,_Object$values=Object.values(Logger.instances);_i<_Object$values.length;_i++){var logger=_Object$values[_i];logger.configure(options)}}},{key:"show",value:function show(object,level,currentLevel){if(level===void 0){level=3}if(currentLevel===void 0){currentLevel=0}var output="";if((0,_object_js__WEBPACK_IMPORTED_MODULE_3__/* .determineType */ .Sj)(object)==="object"){for(var _i2=0,_Object$entries=Object.entries(object);_i2<_Object$entries.length;_i2++){var _Object$entries$_i=_slicedToArray(_Object$entries[_i2],2),key=_Object$entries$_i[0],value=_Object$entries$_i[1];output+="".concat(key,": ");if(currentLevel<=level)output+=Logger.show(value,level,currentLevel+1);else output+=String(value);output+="\n"}return output.trim()}output=String(object).trim();return"".concat(output," (Type: \"").concat((0,_object_js__WEBPACK_IMPORTED_MODULE_3__/* .determineType */ .Sj)(object),"\")")}}])}();_Logger=Logger;_defineProperty(Logger,"defaultLevel","warn");_defineProperty(Logger,"defaultName","app");_defineProperty(Logger,"selfClass",_Logger);_defineProperty(Logger,"instances",{});_defineProperty(Logger,"runtimeVersion",Math.random());/* harmony default export */ __nested_webpack_exports__.Ay = (Logger);

/***/ }),
/* 16 */
/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_216539__) {

__nested_webpack_require_216539__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_216539__.d(__nested_webpack_exports__, {
/* harmony export */   Am: function() { return /* binding */ unique; },
/* harmony export */   En: function() { return /* binding */ paginate; },
/* harmony export */   Hb: function() { return /* binding */ removeArrayItem; },
/* harmony export */   Ht: function() { return /* binding */ extractIfPropertyMatches; },
/* harmony export */   Ny: function() { return /* binding */ _permute2; },
/* harmony export */   QR: function() { return /* binding */ makeRange; },
/* harmony export */   ST: function() { return /* binding */ aggregatePropertyIfEqual; },
/* harmony export */   UX: function() { return /* binding */ sortTopological; },
/* harmony export */   _2: function() { return /* binding */ sumUpProperty; },
/* harmony export */   bH: function() { return /* binding */ permuteLength; },
/* harmony export */   dO: function() { return /* binding */ deleteEmptyItems; },
/* harmony export */   gv: function() { return /* binding */ makeArray; },
/* harmony export */   h1: function() { return /* binding */ merge; },
/* harmony export */   o6: function() { return /* binding */ extract; },
/* harmony export */   q6: function() { return /* binding */ extractIfPropertyExists; },
/* harmony export */   u7: function() { return /* binding */ extractIfMatches; },
/* harmony export */   y$: function() { return /* binding */ intersect; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_216539__(0);
/* harmony import */ var _indicators_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_216539__(4);
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module array *//* !
    region header
    [Project page](https://torben.website/clientnode)

    Copyright Torben Sickert (info["~at~"]torben.website) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach(function(r){_defineProperty(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function _defineProperty(e,r,t){return(r=_toPropertyKey(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _toPropertyKey(t){var i=_toPrimitive(t,"string");return"symbol"==_typeof(i)?i:i+""}function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}function _toConsumableArray(r){return _arrayWithoutHoles(r)||_iterableToArray(r)||_unsupportedIterableToArray(r)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArray(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}function _arrayWithoutHoles(r){if(Array.isArray(r))return _arrayLikeToArray(r)}function _createForOfIteratorHelper(r,e){var t="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(!t){if(Array.isArray(r)||(t=_unsupportedIterableToArray(r))||e&&r&&"number"==typeof r.length){t&&(r=t);var _n=0,F=function F(){};return{s:F,n:function n(){return _n>=r.length?{done:!0}:{done:!1,value:r[_n++]}},e:function e(r){throw r},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,u=!1;return{s:function s(){t=t.call(r)},n:function n(){var r=t.next();return a=r.done,r},e:function e(r){u=!0,o=r},f:function f(){try{a||null==t.return||t.return()}finally{if(u)throw o}}}};function _slicedToArray(r,e){return _arrayWithHoles(r)||_iterableToArrayLimit(r,e)||_unsupportedIterableToArray(r,e)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}function _arrayWithHoles(r){if(Array.isArray(r))return r};/**
 * Summarizes given property of given item list.
 * @param data - Array of objects with given property name.
 * @param propertyName - Property name to summarize.
 * @param defaultValue - Value to return if property values doesn't match.
 * @returns Aggregated value.
 */var aggregatePropertyIfEqual=function aggregatePropertyIfEqual(data,propertyName,defaultValue){if(defaultValue===void 0){defaultValue=""}var result=defaultValue;if(Array.isArray(data)&&data.length&&Object.prototype.hasOwnProperty.call(data[0],propertyName)){result=data[0][propertyName];for(var _i=0,_makeArray=makeArray(data);_i<_makeArray.length;_i++){var item=_makeArray[_i];if(item[propertyName]!==result)return defaultValue}}return result};/**
 * Deletes every item witch has only empty attributes for given property names.
 * If given property names are empty each attribute will be considered. The
 * empty string, "null" and "undefined" will be interpreted as empty.
 * @param data - Data to filter.
 * @param propertyNames - Properties to consider.
 * @returns Given data without empty items.
 */var deleteEmptyItems=function deleteEmptyItems(data,propertyNames){if(propertyNames===void 0){propertyNames=[]}var result=[];for(var _i2=0,_makeArray2=makeArray(data);_i2<_makeArray2.length;_i2++){var item=_makeArray2[_i2];var empty=true;for(var _i3=0,_Object$entries=Object.entries(item);_i3<_Object$entries.length;_i3++){var _Object$entries$_i=_slicedToArray(_Object$entries[_i3],2),propertyName=_Object$entries$_i[0],value=_Object$entries$_i[1];if(!["",null,undefined].includes(value)&&(!propertyNames.length||makeArray(propertyNames).includes(propertyName))){empty=false;break}}if(!empty)result.push(item)}return result};/**
 * Extracts all properties from all items which occur in given property names.
 * @param data - Data where each item should be sliced.
 * @param propertyNames - Property names to extract.
 * @returns Data with sliced items.
 */var extract=function extract(data,propertyNames){var result=[];for(var _i4=0,_makeArray3=makeArray(data);_i4<_makeArray3.length;_i4++){var item=_makeArray3[_i4];var newItem={};for(var _i5=0,_makeArray4=makeArray(propertyNames);_i5<_makeArray4.length;_i5++){var propertyName=_makeArray4[_i5];if(Object.prototype.hasOwnProperty.call(item,propertyName))newItem[propertyName]=item[propertyName]}result.push(newItem)}return result};/**
 * Extracts all values which matches given regular expression.
 * @param data - Data to filter.
 * @param regularExpression - Pattern to match for.
 * @returns Filtered data.
 */var extractIfMatches=function extractIfMatches(data,regularExpression){if(!regularExpression)return makeArray(data);var result=[];for(var _i6=0,_makeArray5=makeArray(data);_i6<_makeArray5.length;_i6++){var value=_makeArray5[_i6];if((typeof regularExpression==="string"?new RegExp(regularExpression):regularExpression).test(value))result.push(value)}return result};/**
 * Filters given data if given property is set or not.
 * @param data - Data to filter.
 * @param propertyName - Property name to check for existence.
 * @returns Given data without the items which doesn't have specified property.
 */var extractIfPropertyExists=function extractIfPropertyExists(data,propertyName){if(data&&propertyName){var result=[];for(var _i7=0,_makeArray6=makeArray(data);_i7<_makeArray6.length;_i7++){var item=_makeArray6[_i7];var exists=false;for(var _i8=0,_Object$entries2=Object.entries(item);_i8<_Object$entries2.length;_i8++){var _Object$entries2$_i=_slicedToArray(_Object$entries2[_i8],2),key=_Object$entries2$_i[0],value=_Object$entries2$_i[1];if(key===propertyName&&![null,undefined].includes(value)){exists=true;break}}if(exists)result.push(item)}return result}return data};/**
 * Extract given data where specified property value matches given patterns.
 * @param data - Data to filter.
 * @param propertyPattern - Mapping of property names to pattern.
 * @returns Filtered data.
 */var extractIfPropertyMatches=function extractIfPropertyMatches(data,propertyPattern){if(data){var result=[];for(var _i9=0,_makeArray7=makeArray(data);_i9<_makeArray7.length;_i9++){var item=_makeArray7[_i9];var matches=true;for(var propertyName in propertyPattern)if(!(propertyPattern[propertyName]&&(typeof propertyPattern[propertyName]==="string"?new RegExp(propertyPattern[propertyName]):propertyPattern[propertyName]).test(item[propertyName]))){matches=false;break}if(matches)result.push(item)}return result}return data};/**
 * Determines all objects which exists in "first" and in "second".
 * Object key which will be compared are given by "keys". If an empty array is
 * given each key will be compared. If an object is given corresponding initial
 * data key will be mapped to referenced new data key.
 * @param first - Referenced data to check for.
 * @param second - Data to check for existence.
 * @param keys - Keys to define equality.
 * @param strict - The strict parameter indicates whether "null" and
 * "undefined" should be interpreted as equal (takes only effect if given keys
 * aren't empty).
 * @returns Data which does exit in given initial data.
 */var intersect=function intersect(first,second,keys,strict){if(keys===void 0){keys=[]}if(strict===void 0){strict=true}var containingData=[];second=makeArray(second);var intersectItem=function intersectItem(firstItem,secondItem,firstKey,secondKey,keysAreAnArray,iterateGivenKeys){if(iterateGivenKeys){if(keysAreAnArray)firstKey=secondKey}else secondKey=firstKey;if(secondItem[secondKey]!==firstItem[firstKey]&&(strict||!([null,undefined].includes(secondItem[secondKey])&&[null,undefined].includes(firstItem[firstKey]))))return false};for(var _i0=0,_makeArray8=makeArray(first);_i0<_makeArray8.length;_i0++){var firstItem=_makeArray8[_i0];if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_1__/* .isPlainObject */ .Qd)(firstItem))for(var _i1=0,_arr=second;_i1<_arr.length;_i1++){var secondItem=_arr[_i1];var exists=true;var iterateGivenKeys=void 0;var keysAreAnArray=Array.isArray(keys);if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_1__/* .isPlainObject */ .Qd)(keys)||keysAreAnArray&&keys.length)iterateGivenKeys=true;else{iterateGivenKeys=false;keys=firstItem}if(Array.isArray(keys)){var index=0;var _iterator=_createForOfIteratorHelper(keys),_step;try{for(_iterator.s();!(_step=_iterator.n()).done;){var key=_step.value;if(intersectItem(firstItem,secondItem,index,key,keysAreAnArray,iterateGivenKeys)===false){exists=false;break}index+=1}}catch(err){_iterator.e(err)}finally{_iterator.f()}}else for(var _i10=0,_Object$entries3=Object.entries(keys);_i10<_Object$entries3.length;_i10++){var _Object$entries3$_i=_slicedToArray(_Object$entries3[_i10],2),_key=_Object$entries3$_i[0],value=_Object$entries3$_i[1];if(intersectItem(firstItem,secondItem,_key,value,keysAreAnArray,iterateGivenKeys)===false){exists=false;break}}if(exists){containingData.push(firstItem);break}}else if(second.includes(firstItem))containingData.push(firstItem)}return containingData};/**
 * Converts given object into an array.
 * @param object - Target to convert.
 * @returns Generated array.
 */var makeArray=function makeArray(object){var result=[];if(![null,undefined].includes(object))if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_1__/* .isArrayLike */ .Xj)(Object(object)))merge(result,typeof object==="string"?[object]:object);else result.push(object);return result};/**
 * Creates a list of items within given range.
 * @param range - Array of lower and upper bounds. If only one value is given
 * lower bound will be assumed to be zero. Both integers have to be positive
 * and will be contained in the resulting array. If more than two numbers are
 * provided given range will be returned.
 * @param step - Space between two consecutive values.
 * @param ignoreLastStep - Removes last step.
 * @returns Produced array of integers.
 */var makeRange=function makeRange(range,step,ignoreLastStep){if(step===void 0){step=1}if(ignoreLastStep===void 0){ignoreLastStep=false}range=[].concat(range);var index;var higherBound;if(range.length===1){index=0;higherBound=parseInt(String(range[0]),10)}else if(range.length===2){index=parseInt(String(range[0]),10);higherBound=parseInt(String(range[1]),10)}else return range;if(higherBound<index)return[];var result=[index];while(index<=higherBound-step){index+=step;if(!ignoreLastStep||index<=higherBound-step)result.push(index)}return result};/**
 * Merge the contents of two arrays together into the first array.
 * @param target - Target array.
 * @param source - Source array.
 * @returns Target array with merged given source one.
 */var merge=function merge(target,source){if(!Array.isArray(source))source=Array.prototype.slice.call(source);var _iterator2=_createForOfIteratorHelper(source),_step2;try{for(_iterator2.s();!(_step2=_iterator2.n()).done;){var value=_step2.value;target.push(value)}}catch(err){_iterator2.e(err)}finally{_iterator2.f()}return target};/**
 * Generates a list if pagination symbols to render a pagination from.
 * @param options - Configure bounds and current page of pagination to
 * determine.
 * @param options.boundaryCount - Indicates where to start pagination within
 * given total range.
 * @param options.disabled - Indicates whether to disable all items.
 * @param options.hideNextButton - Indicates whether to show a jump to next
 * item.
 * @param options.hidePrevButton - Indicates whether to show a jump to previous
 * item.
 * @param options.page - Indicates current visible page.
 * @param options.pageSize - Number of items per page.
 * @param options.showFirstButton - Indicates whether to show a jump to first
 * item.
 * @param options.showLastButton - Indicates whether to show a jump to last
 * item.
 * @param options.siblingCount - Number of sibling page symbols next to current
 * page symbol.
 * @param options.total - Number of all items to paginate.
 * @returns A list of pagination symbols.
 */var paginate=function paginate(options){if(options===void 0){options={}}var _options=options,_options$boundaryCoun=_options.boundaryCount,boundaryCount=_options$boundaryCoun===void 0?1:_options$boundaryCoun,_options$disabled=_options.disabled,disabled=_options$disabled===void 0?false:_options$disabled,_options$hideNextButt=_options.hideNextButton,hideNextButton=_options$hideNextButt===void 0?false:_options$hideNextButt,_options$hidePrevButt=_options.hidePrevButton,hidePrevButton=_options$hidePrevButt===void 0?false:_options$hidePrevButt,_options$page=_options.page,page=_options$page===void 0?1:_options$page,_options$pageSize=_options.pageSize,pageSize=_options$pageSize===void 0?5:_options$pageSize,_options$showFirstBut=_options.showFirstButton,showFirstButton=_options$showFirstBut===void 0?false:_options$showFirstBut,_options$showLastButt=_options.showLastButton,showLastButton=_options$showLastButt===void 0?false:_options$showLastButt,_options$siblingCount=_options.siblingCount,siblingCount=_options$siblingCount===void 0?4:_options$siblingCount,_options$total=_options.total,total=_options$total===void 0?100:_options$total;var numberOfPages=typeof pageSize==="number"&&!isNaN(pageSize)?Math.ceil(total/pageSize):total;var startPages=makeRange([1,Math.min(boundaryCount,numberOfPages)]);var endPages=makeRange([Math.max(numberOfPages-boundaryCount+1,boundaryCount+1),numberOfPages]);var siblingsStart=Math.max(Math.min(// Left boundary for lower pages.
page-siblingCount,// Lower boundary for higher pages.
numberOfPages-boundaryCount-siblingCount*2-1),// If number is greater than number of "startPages".
boundaryCount+2);var siblingsEnd=Math.min(Math.max(// Right bound for higher pages.
page+siblingCount,// Upper boundary for lower pages.
boundaryCount+siblingCount*2+2),// If number is less than number of "endPages".
endPages.length>0?endPages[0]-2:numberOfPages-1);/*
        Symbol list of items to render represent as pagination.

        Example result:

        [
            'first', 'previous',
            1,
            'start-ellipsis',
            4, 5, 6,
            'end-ellipsis',
            10,
            'next', 'last'
        ]
    */return[].concat(_toConsumableArray(showFirstButton?["first"]:[]),_toConsumableArray(hidePrevButton?[]:["previous"]),_toConsumableArray(startPages),_toConsumableArray(siblingsStart>boundaryCount+2?["start-ellipsis"]:boundaryCount+1<numberOfPages-boundaryCount?[boundaryCount+1]:[]),_toConsumableArray(makeRange([siblingsStart,siblingsEnd])),_toConsumableArray(siblingsEnd<numberOfPages-boundaryCount-1?["end-ellipsis"]:numberOfPages-boundaryCount>boundaryCount?[numberOfPages-boundaryCount]:[]),_toConsumableArray(endPages),_toConsumableArray(hideNextButton?[]:["next"]),_toConsumableArray(showLastButton?["last"]:[])).map(function(item){var _first$last;return typeof item==="number"?{disabled:disabled,page:item,selected:item===page,type:"page"}:_objectSpread({disabled:disabled||item.indexOf("ellipsis")===-1&&(item==="next"||item==="last"?page>=numberOfPages:page<=1),selected:false,type:item},item.endsWith("-ellipsis")?{}:{page:((_first$last={first:1,last:numberOfPages}[item])!==null&&_first$last!==void 0?_first$last:item==="next")?Math.min(page+1,numberOfPages):// NOTE: Is "previous" type.
Math.max(page-1,1)})})};/**
 * Generates all permutations of given iterable.
 * @param data - Array like object.
 * @returns Array of permuted arrays.
 */var _permute2=function permute(data){var result=[];var _permute=function permute(currentData,dataToMixin){if(dataToMixin===void 0){dataToMixin=[]}if(currentData.length===0)result.push(dataToMixin);else for(var index=0;index<currentData.length;index++){var copy=currentData.slice();_permute(copy,dataToMixin.concat(copy.splice(index,1)))}};_permute(data);return result};/**
 * Generates all lengths permutations of given iterable.
 * @param data - Array like object.
 * @param minimalSubsetLength - Defines how long the minimal subset length
 * should be.
 * @returns Array of permuted arrays.
 */var permuteLength=function permuteLength(data,minimalSubsetLength){if(minimalSubsetLength===void 0){minimalSubsetLength=1}var result=[];if(data.length===0)return result;var _generate=function generate(index,source,rest){if(index===0){if(rest.length>0)result[result.length]=rest;return}for(var sourceIndex=0;sourceIndex<source.length;sourceIndex++)_generate(index-1,source.slice(sourceIndex+1),rest.concat([source[sourceIndex]]))};for(var index=minimalSubsetLength;index<data.length;index++)_generate(index,data,[]);result.push(data);return result};/**
 * Sums up given property of given item list.
 * @param data - The objects with specified property to sum up.
 * @param propertyName - Property name to sum up its value.
 * @returns The aggregated value.
 */var sumUpProperty=function sumUpProperty(data,propertyName){var result=0;if(Array.isArray(data)&&data.length){var _iterator3=_createForOfIteratorHelper(data),_step3;try{for(_iterator3.s();!(_step3=_iterator3.n()).done;){var item=_step3.value;if(Object.prototype.hasOwnProperty.call(item,propertyName))result+=parseFloat(item[propertyName]||0)}}catch(err){_iterator3.e(err)}finally{_iterator3.f()}}return result};/**
 * Removes given target on given list.
 * @param list - Array to splice.
 * @param target - Target to remove from given list.
 * @param strict - Indicates whether to fire an exception if given target
 * doesn't exist given list.
 * @returns Item with the appended target.
 */var removeArrayItem=function removeArrayItem(list,target,strict){if(strict===void 0){strict=false}var index=list.indexOf(target);if(index===-1){if(strict)throw new Error("Given target doesn't exists in given list.")}else list.splice(index,1);return list};/**
 * Sorts given object of dependencies in a topological order.
 * @param items - Items to sort.
 * @returns Sorted array of given items respecting their dependencies.
 */var sortTopological=function sortTopological(items){var edges=[];for(var _i11=0,_Object$entries4=Object.entries(items);_i11<_Object$entries4.length;_i11++){var _Object$entries4$_i=_slicedToArray(_Object$entries4[_i11],2),name=_Object$entries4$_i[0],value=_Object$entries4$_i[1];items[name]=[].concat(value);if(value.length>0){var _iterator4=_createForOfIteratorHelper(makeArray(value)),_step4;try{for(_iterator4.s();!(_step4=_iterator4.n()).done;){var dependencyName=_step4.value;edges.push([name,dependencyName])}}catch(err){_iterator4.e(err)}finally{_iterator4.f()}}else edges.push([name])}var nodes=[];// Accumulate unique nodes into a large list.
for(var _i12=0,_edges=edges;_i12<_edges.length;_i12++){var edge=_edges[_i12];var _iterator5=_createForOfIteratorHelper(edge),_step5;try{for(_iterator5.s();!(_step5=_iterator5.n()).done;){var node=_step5.value;if(!nodes.includes(node))nodes.push(node)}}catch(err){_iterator5.e(err)}finally{_iterator5.f()}}var sorted=[];// Define a visitor function that recursively traverses dependencies.
var _visit=function visit(node,predecessors){// Check if a node is dependent of itself.
if(predecessors.length!==0&&predecessors.includes(node))throw new Error("Cyclic dependency found. \"".concat(node,"\" is dependent of ")+"itself.\n"+"Dependency chain: \"".concat(predecessors.join("\" -> \""),"\" => \"")+"".concat(node,"\"."));var index=nodes.indexOf(node);// If the node still exists, traverse its dependencies.
if(index!==-1){var copy;// Mark the node to exclude it from future iterations.
nodes[index]=null;/*
                Loop through all edges and follow dependencies of the current
                node
            */for(var _i13=0,_edges2=edges;_i13<_edges2.length;_i13++){var _edge=_edges2[_i13];if(_edge[0]===node){/*
                        Lazily create a copy of predecessors with the current
                        node concatenated onto it.
                    */copy=copy||predecessors.concat([node]);// Recursively traverse to node dependencies.
_visit(_edge[1],copy)}}sorted.push(node)}};for(var index=0;index<nodes.length;index++){var _node=nodes[index];// Ignore nodes that have been excluded.
if(_node){// Mark the node to exclude it from future iterations.
nodes[index]=null;/*
                Loop through all edges and follow dependencies of the current
                node.
            */var _iterator6=_createForOfIteratorHelper(edges),_step6;try{for(_iterator6.s();!(_step6=_iterator6.n()).done;){var _edge2=_step6.value;if(_edge2[0]===_node)// Recursively traverse to node dependencies.
_visit(_edge2[1],[_node])}}catch(err){_iterator6.e(err)}finally{_iterator6.f()}sorted.push(_node)}}return sorted};/**
 * Makes all values in given iterable unique by removing duplicates (The first
 * occurrences will be left).
 * @param data - Array like object.
 * @returns Sliced version of given object.
 */var unique=function unique(data){var result=[];var _iterator7=_createForOfIteratorHelper(makeArray(data)),_step7;try{for(_iterator7.s();!(_step7=_iterator7.n()).done;){var value=_step7.value;if(!result.includes(value))result.push(value)}}catch(err){_iterator7.e(err)}finally{_iterator7.f()}return result};

/***/ }),
/* 17 */
/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_241610__) {

__nested_webpack_require_241610__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_241610__.d(__nested_webpack_exports__, {
/* harmony export */   DP: function() { return /* binding */ normalizeDateTime; },
/* harmony export */   JZ: function() { return /* binding */ _interpretDateTime; },
/* harmony export */   LE: function() { return /* binding */ dateTimeFormat; },
/* harmony export */   hr: function() { return /* binding */ DATE_TIME_PATTERN_CACHE; },
/* harmony export */   jJ: function() { return /* binding */ sliceWeekday; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_241610__(0);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_241610__(1);
/* harmony import */ var _string_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_241610__(7);
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module dateTime *//* !
    region header
    [Project page](https://torben.website/clientnode)

    Copyright Torben Sickert (info["~at~"]torben.website) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _construct(t,e,r){if(_isNativeReflectConstruct())return Reflect.construct.apply(null,arguments);var o=[null];o.push.apply(o,e);var p=new(t.bind.apply(t,o));return r&&_setPrototypeOf(p,r.prototype),p}function _setPrototypeOf(t,e){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},_setPrototypeOf(t,e)}function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}function _createForOfIteratorHelper(r,e){var t="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(!t){if(Array.isArray(r)||(t=_unsupportedIterableToArray(r))||e&&r&&"number"==typeof r.length){t&&(r=t);var _n=0,F=function F(){};return{s:F,n:function n(){return _n>=r.length?{done:!0}:{done:!1,value:r[_n++]}},e:function e(r){throw r},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,u=!1;return{s:function s(){t=t.call(r)},n:function n(){var r=t.next();return a=r.done,r},e:function e(r){u=!0,o=r},f:function f(){try{a||null==t.return||t.return()}finally{if(u)throw o}}}}function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach(function(r){_defineProperty(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function _defineProperty(e,r,t){return(r=_toPropertyKey(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _toPropertyKey(t){var i=_toPrimitive(t,"string");return"symbol"==_typeof(i)?i:i+""}function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)};// Caches compiled date tine pattern regular expressions.
var DATE_TIME_PATTERN_CACHE=[];/**
 * Formats given date or current via given format specification.
 * @param format - Format specification.
 * @param dateTime - Date time to format.
 * @param options - Additional configuration options for "Intl.DateTimeFormat".
 * @param locales - Locale or list of locales to use for formatting. First one
 * take precedence of latter ones.
 * @returns Formatted date time string.
 */var dateTimeFormat=function dateTimeFormat(format,dateTime,options,locales){if(format===void 0){format="full"}if(dateTime===void 0){dateTime=new Date}if(options===void 0){options={}}if(locales===void 0){locales=_constants_js__WEBPACK_IMPORTED_MODULE_1__/* .LOCALES */ .YZ}if(typeof dateTime==="number")/*
            NOTE: "Date" constructor expects milliseconds as unit instead
            of more common used seconds.
        */dateTime*=1000;var normalizedDateTime=new Date(dateTime);if(["full","long","medium","short"].includes(format))return new Intl.DateTimeFormat([].concat(locales,"en-US"),_objectSpread({dateStyle:format,timeStyle:format},options)).format(normalizedDateTime);var scope={};var _iterator=_createForOfIteratorHelper(["full","long","medium","short"]),_step;try{for(_iterator.s();!(_step=_iterator.n()).done;){var style=_step.value;scope["".concat(style,"Literals")]=[];var _dateTimeFormat=new Intl.DateTimeFormat([].concat(locales,"en-US"),_objectSpread({dateStyle:style,timeStyle:style},options));scope[style]=_dateTimeFormat.format(normalizedDateTime);var _iterator2=_createForOfIteratorHelper(_dateTimeFormat.formatToParts(normalizedDateTime)),_step2;try{for(_iterator2.s();!(_step2=_iterator2.n()).done;){var item=_step2.value;if(item.type==="literal")scope["".concat(style,"Literals")].push(item.value);else scope["".concat(style).concat((0,_string_js__WEBPACK_IMPORTED_MODULE_2__/* .capitalize */ .ZH)(item.type))]=item.value}}catch(err){_iterator2.e(err)}finally{_iterator2.f()}}}catch(err){_iterator.e(err)}finally{_iterator.f()}var evaluated=(0,_string_js__WEBPACK_IMPORTED_MODULE_2__/* .evaluate */ ._3)("`".concat(format,"`"),{scope:scope});if(evaluated.error)throw new Error(evaluated.error);/*
        NOTE: For some reason hidden symbols are injected differently on
        different platforms, so we have to normalize for predictable
        testing.
    */return evaluated.result.replace(/\s/g," ")};/**
 * Interprets given content string as date time.
 * @param value - Date time string to interpret.
 * @param interpretAsUTC - Identifies if given date should be interpreted as
 * utc. If not set given strings will be interpreted as it is depended on
 * given format and number like string as utc.
 * @returns Interpret date time object.
 */var _interpretDateTime=function interpretDateTime(value,interpretAsUTC){var resolvedInterpretAsUTC=Boolean(interpretAsUTC);// region iso format
/*
        Let's first check if we have a simplified iso 8602 date time
        representation like:

        "YYYY-MM-DDTHH:mm:ss.sssZ" or "YYYY-MM-DDTHH:mm:ss.sss+HH:mm".

        Please note for the native "Date" implementation:

        When the time zone offset is absent, date-only forms are interpreted as
        a UTC time and date-time forms are interpreted as local time. This is
        due to a historical spec error that was not consistent with ISO 8601
        but could not be changed due to web compatibility.
    */var hourAndMinutesPattern="[0-2][0-9]:[0-6][0-9]";var pattern="^"+(// Year, month and day:
"[0-9]{4}-[01][0-9]-[0-3][0-9]"+"(?<time>"+("(?:T"+(hourAndMinutesPattern+"(?:"+(// Seconds:
":[0-6][0-9]"+// Milliseconds:
"(?:\\.[0-9]+)?")+")?"+// Timezone definition:
"(?<dateTimeTimezone>Z|(?:[+-]".concat(hourAndMinutesPattern,"))?"))+")"+"|"+// Timezone definition:
"(?<dateTimezone>Z|(?:[+-]".concat(hourAndMinutesPattern,"))"))+")?")+"$";var match=value.match(new RegExp(pattern,"i"));if(match){var _match$groups$dateTim,_match$groups,_match$groups2;var result=new Date(value);if(isNaN(result.getDate()))return null;var timezone=(_match$groups$dateTim=(_match$groups=match.groups)===null||_match$groups===void 0?void 0:_match$groups.dateTimeTimezone)!==null&&_match$groups$dateTim!==void 0?_match$groups$dateTim:(_match$groups2=match.groups)===null||_match$groups2===void 0?void 0:_match$groups2.dateTimezone;if(!timezone){var _match$groups4;if([null,undefined].includes(interpretAsUTC))resolvedInterpretAsUTC=false;if(resolvedInterpretAsUTC){var _match$groups3;if(!((_match$groups3=match.groups)!==null&&_match$groups3!==void 0&&_match$groups3.time))/*
                        NOTE: Date only strings will be interpreted as UTC
                        already.
                    */return result;// local to utc
return new Date(result.getTime()-result.getTimezoneOffset()*60*1000)}if((_match$groups4=match.groups)!==null&&_match$groups4!==void 0&&_match$groups4.time)/*
                    NOTE: Date time strings will be interpreted as local
                    already.
                */return result;// utc to local
return new Date(result.getTime()+result.getTimezoneOffset()*60*1000)}return result}// endregion
value=value.replace(/^(-?)-*0*([1-9][0-9]*)$/,"$1$2");// region interpret integer number
/*
        NOTE: Do not use "parseFloat" since we want to interpret delimiter as
        date delimiters.
    */if(String(parseInt(value))===value){if([null,undefined].includes(interpretAsUTC))resolvedInterpretAsUTC=true;var roughDateForTimeZoneDetermining=new Date(parseInt(value)*1000);return new Date((parseInt(value)+(resolvedInterpretAsUTC?0:roughDateForTimeZoneDetermining.getTimezoneOffset()*60))*1000)}// endregion
if(!DATE_TIME_PATTERN_CACHE.length){// region pre-compile regular expressions
/// region pattern
var millisecondPattern="(?<millisecond>(?:0{0,3}[0-9])|(?:0{0,2}[1-9]{2})|"+"(?:0?[1-9]{3})|(?:1[1-9]{3}))";var minuteAndSecondPattern="(?:0?[0-9])|(?:[1-5][0-9])|(?:60)";var secondPattern="(?<second>".concat(minuteAndSecondPattern,")");var minutePattern="(?<minute>".concat(minuteAndSecondPattern,")");var hourPattern="(?<hour>(?:0?[0-9])|(?:1[0-9])|(?:2[0-4]))";var noonIndicatorPattern="(?<noonIndicator> *(?:(?:a\\.?m\\.?)|(?:p\\.?m\\.?)))?";var dayPattern="(?<day>(?:0?[1-9])|(?:[1-2][0-9])|(?:3[01]))";var monthPattern="(?<month>(?:0?[1-9])|(?:1[0-2]))";var yearPattern="(?<year>(?:0?[1-9])|(?:[1-9][0-9]+))";/// endregion
var patternPresenceCache={};var _iterator3=_createForOfIteratorHelper(["t"," "]),_step3;try{for(_iterator3.s();!(_step3=_iterator3.n()).done;){var timeDelimiter=_step3.value;var _iterator4=_createForOfIteratorHelper([":","/","-"," "]),_step4;try{for(_iterator4.s();!(_step4=_iterator4.n()).done;){var timeComponentDelimiter=_step4.value;for(var _i=0,_arr=[hourPattern+"".concat(timeComponentDelimiter,"+")+minutePattern+noonIndicatorPattern,hourPattern+"".concat(timeComponentDelimiter,"+")+minutePattern+"".concat(timeComponentDelimiter,"+")+secondPattern+noonIndicatorPattern,hourPattern+"".concat(timeComponentDelimiter,"+")+minutePattern+"".concat(timeComponentDelimiter,"+")+secondPattern+"".concat(timeComponentDelimiter,"+")+millisecondPattern+noonIndicatorPattern,hourPattern+noonIndicatorPattern];_i<_arr.length;_i++){var timeFormat=_arr[_i];for(var _i2=0,_arr2=[{delimiter:["/","-"," "],pattern:[monthPattern+"${delimiter}"+dayPattern+"${delimiter}"+yearPattern,monthPattern+"${delimiter}"+dayPattern+" +"+yearPattern,yearPattern+"${delimiter}"+monthPattern+"${delimiter}"+dayPattern,yearPattern+" +"+monthPattern+"${delimiter}"+dayPattern,monthPattern+"${delimiter}"+dayPattern+"${delimiter}"+yearPattern+"".concat(timeDelimiter,"+")+timeFormat,monthPattern+"${delimiter}"+dayPattern+" +"+yearPattern+"".concat(timeDelimiter,"+")+timeFormat,timeFormat+"".concat(timeDelimiter,"+")+monthPattern+"${delimiter}"+dayPattern+"${delimiter}"+yearPattern,timeFormat+"".concat(timeDelimiter,"+")+monthPattern+"${delimiter}"+dayPattern+" +"+yearPattern,yearPattern+"${delimiter}"+monthPattern+"${delimiter}"+dayPattern+"".concat(timeDelimiter,"+")+timeFormat,yearPattern+" +"+monthPattern+"${delimiter}"+dayPattern+"".concat(timeDelimiter,"+")+timeFormat,timeFormat+"".concat(timeDelimiter,"+")+yearPattern+"${delimiter}"+monthPattern+"${delimiter}"+dayPattern,timeFormat+"".concat(timeDelimiter,"+")+yearPattern+" +"+monthPattern+"${delimiter}"+dayPattern]},{delimiter:"\\.",pattern:[dayPattern+"${delimiter}"+monthPattern+"${delimiter}"+yearPattern,dayPattern+"${delimiter}"+monthPattern+" +"+yearPattern,yearPattern+"${delimiter}"+dayPattern+"${delimiter}"+monthPattern,yearPattern+" +"+dayPattern+"${delimiter}"+monthPattern,dayPattern+"${delimiter}"+monthPattern+"${delimiter}"+yearPattern+"".concat(timeDelimiter,"+")+timeFormat,dayPattern+"${delimiter}"+monthPattern+" +"+yearPattern+"".concat(timeDelimiter,"+")+timeFormat,timeFormat+"".concat(timeDelimiter,"+")+dayPattern+"${delimiter}"+monthPattern+"${delimiter}"+yearPattern,timeFormat+"".concat(timeDelimiter,"+")+dayPattern+"${delimiter}"+monthPattern+" +"+yearPattern,yearPattern+"${delimiter}"+dayPattern+"${delimiter}"+monthPattern+"".concat(timeDelimiter,"+")+timeFormat,yearPattern+" +"+dayPattern+"${delimiter}"+monthPattern+"".concat(timeDelimiter,"+")+timeFormat,timeFormat+"".concat(timeDelimiter,"+")+yearPattern+"${delimiter}"+dayPattern+"${delimiter}"+monthPattern,timeFormat+"".concat(timeDelimiter,"+")+yearPattern+" +"+dayPattern+"${delimiter}"+monthPattern]},{pattern:timeFormat}];_i2<_arr2.length;_i2++){var _dateTimeFormat2=_arr2[_i2];var _iterator5=_createForOfIteratorHelper([].concat(Object.prototype.hasOwnProperty.call(_dateTimeFormat2,"delimiter")?_dateTimeFormat2.delimiter:"-")),_step5;try{for(_iterator5.s();!(_step5=_iterator5.n()).done;){var delimiter=_step5.value;var _iterator6=_createForOfIteratorHelper([].concat(_dateTimeFormat2.pattern)),_step6;try{for(_iterator6.s();!(_step6=_iterator6.n()).done;){var _pattern=_step6.value;var evaluatedPattern=(0,_string_js__WEBPACK_IMPORTED_MODULE_2__/* .evaluate */ ._3)("`^".concat(_pattern,"$`"),{scope:{delimiter:"".concat(delimiter,"+")}}).result;if(evaluatedPattern&&!Object.prototype.hasOwnProperty.call(patternPresenceCache,evaluatedPattern)){patternPresenceCache[evaluatedPattern]=true;DATE_TIME_PATTERN_CACHE.push(new RegExp(evaluatedPattern))}}}catch(err){_iterator6.e(err)}finally{_iterator6.f()}}}catch(err){_iterator5.e(err)}finally{_iterator5.f()}}}}}catch(err){_iterator4.e(err)}finally{_iterator4.f()}}// endregion
}catch(err){_iterator3.e(err)}finally{_iterator3.f()}}// region pre-process
// NOTE: All patterns can assume lower cased strings.
value=value.toLowerCase();/*
        Reduce each sequence on none alphanumeric symbols to the first
        symbol (consolidate delimiters).
    */value=value.replace(/([^0-9a-z])[^0-9a-z]+/g,"$1");var monthNumber=1;for(var _i3=0,_arr3=[["jan","january?","janvier"],["feb","february?","f\xE9vrier"],["m(?:a|ae|\xE4)r","m(?:a|ae|\xE4)r(?:ch|s|z)"],["ap[rv]","a[pv]ril"],["ma[iy]"],["ju[ein]","jui?n[ei]?"],["jul","jul[iy]","juillet"],["aug","august","ao\xFBt"],["sep","septemb(?:er|re)"],["o[ck]t","o[ck]tob(?:er|re)"],["nov","novemb(?:er|re)"],["de[cz]","d[e\xE9][cz]emb(?:er|re)"]];_i3<_arr3.length;_i3++){var monthVariation=_arr3[_i3];var matched=false;var _iterator7=_createForOfIteratorHelper(monthVariation),_step7;try{for(_iterator7.s();!(_step7=_iterator7.n()).done;){var name=_step7.value;var _pattern2=new RegExp("(^|[^a-z])".concat(name,"([^a-z]|$)"));if(_pattern2.test(value)){value=value.replace(_pattern2,"$1".concat(String(monthNumber),"$2"));matched=true;break}}}catch(err){_iterator7.e(err)}finally{_iterator7.f()}if(matched)break;monthNumber+=1}value=sliceWeekday(value);var timezonePattern=/(.+)\+(.+)$/;var timezoneMatch=timezonePattern.exec(value);if(timezoneMatch)value=value.replace(timezonePattern,"$1");var _iterator8=_createForOfIteratorHelper(["","Uhr","o'clock"]),_step8;try{for(_iterator8.s();!(_step8=_iterator8.n()).done;){var wordToSlice=_step8.value;value=value.replace(wordToSlice,"")}}catch(err){_iterator8.e(err)}finally{_iterator8.f()}value=value.trim();// endregion
// region try to match a pattern
var _loop=function _loop(){var dateTimePattern=_DATE_TIME_PATTERN_CA[_i4];var match=null;try{match=value.match(dateTimePattern)}catch(_unused){// Continue regardless of an error.
}if(match){var _match$groups5;var get=function get(name,fallback){if(fallback===void 0){fallback=0}return match.groups&&name in match.groups?parseInt(match.groups[name],10):fallback};var parameter=[get("year",1970),get("month",1)-1,get("day",1),get("hour"),get("minute"),get("second"),get("millisecond")];if((_match$groups5=match.groups)!==null&&_match$groups5!==void 0&&_match$groups5.noonIndicator&&match.groups.noonIndicator.trim().replace(/\./g,"")==="pm"&&parameter[3]<=12)parameter[3]+=12;var _result=null;if(timezoneMatch){var timeShift=_interpretDateTime(timezoneMatch[2],true);if(timeShift)_result=new Date(Date.UTC.apply(Date,parameter)-timeShift.getTime())}if(!_result)if(resolvedInterpretAsUTC)_result=new Date(Date.UTC.apply(Date,parameter));else _result=_construct(Date,parameter);if(isNaN(_result.getDate()))return{v:null};return{v:_result}}},_ret;for(var _i4=0,_DATE_TIME_PATTERN_CA=DATE_TIME_PATTERN_CACHE;_i4<_DATE_TIME_PATTERN_CA.length;_i4++){_ret=_loop();if(_ret)return _ret.v}// endregion
return null};/**
 * Interprets a date object from given artefact.
 * @param value - To interpret.
 * @param interpretAsUTC - Identifies if given date should be interpreted as
 * utc. If not set given strings will be interpreted as it is dependent on
 * given format and numbers as utc.
 * @returns Interpreted date object or "null" if given value couldn't be
 * interpreted.
 */var normalizeDateTime=function normalizeDateTime(value,interpretAsUTC){if(value===void 0){value=null}var resolvedInterpretAsUTC=Boolean(interpretAsUTC);if(value===null)return new Date;if(typeof value==="string"){/*
            We make a simple pre-check to determine if it could be a date like
            representation. Idea: There should be at least some numbers and
            separators.
        */if(/^.*(?:(?:[0-9]{1,4}[^0-9]){2}|[0-9]{1,4}[^0-9.]).*$/.test(value)){value=_interpretDateTime(value,resolvedInterpretAsUTC);if(value===null)return value;return value}var floatRepresentation=parseFloat(value);if(String(floatRepresentation)===value)value=floatRepresentation}if(typeof value==="number"){if([null,undefined].includes(interpretAsUTC))resolvedInterpretAsUTC=true;var roughDateForTimeZoneDetermining=new Date(value*1000);return new Date((value+(resolvedInterpretAsUTC?0:roughDateForTimeZoneDetermining.getTimezoneOffset()*60))*1000)}// Try to deal with types which are either numbers or strings.
var result=new Date(value);if(isNaN(result.getDate()))return null;return result};/**
 * Slice weekday from given date representation.
 * @param value - String to process.
 * @returns Sliced given string.
 */var sliceWeekday=function sliceWeekday(value){var weekdayPattern=/[a-z]{2}\.+ *([^ ].*)$/i;var weekdayMatch=weekdayPattern.exec(value);if(weekdayMatch)return value.replace(weekdayPattern,"$1");return value};

/***/ }),
/* 18 */
/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_261274__) {

__nested_webpack_require_261274__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_261274__.d(__nested_webpack_exports__, {
/* harmony export */   D_: function() { return /* binding */ identity; },
/* harmony export */   Gj: function() { return /* binding */ _getParameterNames; },
/* harmony export */   gH: function() { return /* binding */ invertArrayFilter; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_261274__(0);
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module function *//* !
    region header
    [Project page](https://torben.website/clientnode)

    Copyright Torben Sickert (info["~at~"]torben.website) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/function _createForOfIteratorHelper(r,e){var t="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(!t){if(Array.isArray(r)||(t=_unsupportedIterableToArray(r))||e&&r&&"number"==typeof r.length){t&&(r=t);var _n=0,F=function F(){};return{s:F,n:function n(){return _n>=r.length?{done:!0}:{done:!1,value:r[_n++]}},e:function e(r){throw r},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,u=!1;return{s:function s(){t=t.call(r)},n:function n(){var r=t.next();return a=r.done,r},e:function e(r){u=!0,o=r},f:function f(){try{a||null==t.return||t.return()}finally{if(u)throw o}}}}function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}/**
 * Determines all parameter names from given callable (function or class,
 * ...).
 * @param callable - Function or function code to inspect.
 * @returns List of parameter names.
 */var _getParameterNames=function getParameterNames(callable){var functionCode=(typeof callable==="string"?callable:// Strip comments.
callable.toString()).replace(/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,"");if(functionCode.startsWith("class"))return _getParameterNames("function "+functionCode.replace(/.*(constructor\([^)]+\))/m,"$1"));// Try classic function declaration.
var parameter=/^function\s*[^(]*\(\s*([^)]*)\)/m.exec(functionCode);if(parameter===null)// Try arrow function declaration.
parameter=/^[^(]*\(\s*([^)]*)\) *=>.*/m.exec(functionCode);if(parameter===null)// Try one argument and without brackets arrow function declaration.
parameter=/([^= ]+) *=>.*/m.exec(functionCode);var names=[];if(parameter&&parameter.length>1&&parameter[1].trim().length){var _iterator=_createForOfIteratorHelper(parameter[1].split(",")),_step;try{for(_iterator.s();!(_step=_iterator.n()).done;)// Remove default parameter values.
{var name=_step.value;names.push(name.replace(/=.+$/g,"").trim())}}catch(err){_iterator.e(err)}finally{_iterator.f()}return names}return names};/**
 * Implements the identity function.
 * @param value - A value to return.
 * @returns Returns the given value.
 */var identity=function identity(value){return value};/**
 * Inverted filter helper to inverse each given filter.
 * @param filter - A function that filters an array.
 * @returns The inverted filter.
 */var invertArrayFilter=function invertArrayFilter(filter){return function(data){if(Array.isArray(data)){for(var _len=arguments.length,additionalParameter=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){additionalParameter[_key-1]=arguments[_key]}var filteredData=filter.apply(void 0,[data].concat(additionalParameter));var result=[];if(filteredData.length){var _iterator2=_createForOfIteratorHelper(data),_step2;try{for(_iterator2.s();!(_step2=_iterator2.n()).done;){var date=_step2.value;if(!filteredData.includes(date))result.push(date)}}catch(err){_iterator2.e(err)}finally{_iterator2.f()}}else result=data;return result}return data}};

/***/ }),
/* 19 */
/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_265675__) {

/* harmony export */ __nested_webpack_require_265675__.d(__nested_webpack_exports__, {
/* harmony export */   CH: function() { return /* binding */ evaluateUnaryOperation; },
/* harmony export */   Cp: function() { return /* binding */ evaluateArrayContains; },
/* harmony export */   F9: function() { return /* binding */ evaluateCondition; },
/* harmony export */   Fm: function() { return /* binding */ selectArrayItem; },
/* harmony export */   Hg: function() { return /* binding */ evaluateOr; },
/* harmony export */   Lm: function() { return /* binding */ evaluateSelector; },
/* harmony export */   Pl: function() { return /* binding */ _normalizeSelector; },
/* harmony export */   Q2: function() { return /* binding */ evaluateConcat; },
/* harmony export */   YN: function() { return /* binding */ NO_ITEM_FOUND_SYMBOL; },
/* harmony export */   ZF: function() { return /* binding */ evaluateOperation; },
/* harmony export */   cB: function() { return /* binding */ evaluateMapping; },
/* harmony export */   f7: function() { return /* binding */ evaluateOptionalThen; },
/* harmony export */   fG: function() { return /* binding */ SELECTOR_KEY_NAMES; },
/* harmony export */   j0: function() { return /* binding */ evaluateAnd; },
/* harmony export */   j4: function() { return /* binding */ evaluateSwitch; },
/* harmony export */   lp: function() { return /* binding */ DEFAULT_OPTIONS; },
/* harmony export */   rb: function() { return /* binding */ evaluateIf; },
/* harmony export */   yf: function() { return /* binding */ evaluateSelectorUntilLastObject; }
/* harmony export */ });
/* unused harmony export evaluateExpression */
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_265675__(4);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_265675__(3);
/* harmony import */ var _indicator_functions_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_265675__(14);
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/* !
    region header
    [Project page](https://torben.website/clientnode)

    Copyright Torben Sickert (info["~at~"]torben.website) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _slicedToArray(r,e){return _arrayWithHoles(r)||_iterableToArrayLimit(r,e)||_unsupportedIterableToArray(r,e)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}function _arrayWithHoles(r){if(Array.isArray(r))return r}function _toConsumableArray(r){return _arrayWithoutHoles(r)||_iterableToArray(r)||_unsupportedIterableToArray(r)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArray(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}function _arrayWithoutHoles(r){if(Array.isArray(r))return _arrayLikeToArray(r)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach(function(r){_defineProperty(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function _defineProperty(e,r,t){return(r=_toPropertyKey(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _toPropertyKey(t){var i=_toPrimitive(t,"string");return"symbol"==_typeof(i)?i:i+""}function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}function _createForOfIteratorHelper(r,e){var t="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(!t){if(Array.isArray(r)||(t=_unsupportedIterableToArray(r))||e&&r&&"number"==typeof r.length){t&&(r=t);var _n=0,F=function F(){};return{s:F,n:function n(){return _n>=r.length?{done:!0}:{done:!1,value:r[_n++]}},e:function e(r){throw r},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,u=!1;return{s:function s(){t=t.call(r)},n:function n(){var r=t.next();return a=r.done,r},e:function e(r){u=!0,o=r},f:function f(){try{a||null==t.return||t.return()}finally{if(u)throw o}}}}function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n};var SELECTOR_KEY_NAMES=new Set(["name"]);var NO_ITEM_FOUND_SYMBOL=Symbol.for("EXPRESSION_EVALUATOR_NO_ITEM_FOUND");var DEFAULT_OPTIONS={skipMissingLevel:false,contextReplacements:{},delimiter:"."};var addBracketBasedPathElements=function addBracketBasedPathElements(subParts){var path=[];// NOTE: We add index assignments into path array.
var _iterator=_createForOfIteratorHelper(subParts),_step;try{for(_iterator.s();!(_step=_iterator.n()).done;){var subPart=_step.value;var openingBracketPosition=subPart.indexOf("[");if(openingBracketPosition>0)path.push(subPart.substring(0,openingBracketPosition));// Trim bracket padding "[index]" => "index".
path.push(subPart.substring(openingBracketPosition+1,subPart.length-1))}}catch(err){_iterator.e(err)}finally{_iterator.f()}return path};var _normalizeSelector=function normalizeSelector(selector,givenOptions){if(givenOptions===void 0){givenOptions={}}var options=_objectSpread(_objectSpread({},DEFAULT_OPTIONS),{},{scope:{}},givenOptions);var path=[];var _iterator2=_createForOfIteratorHelper([].concat(selector)),_step2;try{for(_iterator2.s();!(_step2=_iterator2.n()).done;){var component=_step2.value;if(typeof component==="string"){var parts=component.split(options.delimiter);var _iterator3=_createForOfIteratorHelper(parts),_step3;try{for(_iterator3.s();!(_step3=_iterator3.n()).done;){var part=_step3.value;if(!part)continue;if((0,_index_js__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .Tn)(part)){path.push(part);continue}// Identify bracket based selectors like "[index]".
var openingBracketPosition=part.indexOf("[");var restPart=part;if(openingBracketPosition!==-1){restPart=part.substring(openingBracketPosition);part=part.substring(0,openingBracketPosition)}if(Object.prototype.hasOwnProperty.call(options.contextReplacements,part))path.push.apply(path,_toConsumableArray(_normalizeSelector(options.contextReplacements[part],options)));else path.push(part);if(restPart!==part){// Trim bracket padding "[index]" => "index".
var subParts=restPart.match(/[^[]*\[\d+]/g);path.push.apply(path,_toConsumableArray(addBracketBasedPathElements(subParts)))}}}catch(err){_iterator3.e(err)}finally{_iterator3.f()}}else path.push(evaluateExpression(component,options.scope,options))}}catch(err){_iterator2.e(err)}finally{_iterator2.f()}return path};var selectArrayItem=function selectArrayItem(data,keyOrIndex){// Assume that an array item should be found by its property name.
var _iterator4=_createForOfIteratorHelper(data),_step4;try{for(_iterator4.s();!(_step4=_iterator4.n()).done;){var item=_step4.value;var _iterator5=_createForOfIteratorHelper(SELECTOR_KEY_NAMES),_step5;try{for(_iterator5.s();!(_step5=_iterator5.n()).done;){var selectorKeyName=_step5.value;if(Object.prototype.hasOwnProperty.call(item,selectorKeyName)&&item[selectorKeyName]===keyOrIndex)return item}}catch(err){_iterator5.e(err)}finally{_iterator5.f()}}}catch(err){_iterator4.e(err)}finally{_iterator4.f()}return NO_ITEM_FOUND_SYMBOL};/**
 * Retrieves substructure in given object referenced by given selector
 * path.
 * @param selector - Selector path.
 * @param scope - Object to search in.
 * @param givenOptions - Object to configure evaluation.
 * @param givenOptions.contextReplacements - Configuration how to replace
 * "this" and "thisParent" keywords in selectors.
 * @param givenOptions.delimiter - Delimiter to delimit given selector
 * components.
 * @param givenOptions.skipMissingLevel - Indicates to skip missing level in
 * given path.
 * @returns Determined sub structure of given data or "undefined".
 */var evaluateSelectorUntilLastObject=function evaluateSelectorUntilLastObject(selector,scope,givenOptions){if(scope===void 0){scope={}}if(givenOptions===void 0){givenOptions={}}var options=_objectSpread(_objectSpread({},DEFAULT_OPTIONS),givenOptions);/*
        Create a list of keys or indexes to retrieve specified value from given
        object.
    */var path=_normalizeSelector(selector,_objectSpread(_objectSpread({},options),{},{scope:scope}));// Dig into given scope for each previously found key or index.
var result=scope;var index=0;var _iterator6=_createForOfIteratorHelper(path),_step6;try{for(_iterator6.s();!(_step6=_iterator6.n()).done;){var keyOrIndex=_step6.value;var isLastPart=index===path.length-1;if((0,_index_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Gv)(result)){if(Array.isArray(result)&&typeof keyOrIndex==="string"&&isNaN(parseInt(keyOrIndex))){var item=selectArrayItem(result,keyOrIndex);if(item!==NO_ITEM_FOUND_SYMBOL){if(isLastPart)return typeof keyOrIndex==="number"?[result,keyOrIndex]:[result,result.indexOf(item)];result=item}}else if(isLastPart)return[result,keyOrIndex];else if((0,_index_js__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .Tn)(keyOrIndex))result=keyOrIndex(result);else if(Object.prototype.hasOwnProperty.call(result,keyOrIndex))result=result[keyOrIndex];else if(!options.skipMissingLevel)return[result,keyOrIndex]}else if(isLastPart)return[result,keyOrIndex];else if(!options.skipMissingLevel)return[result,keyOrIndex];index+=1}}catch(err){_iterator6.e(err)}finally{_iterator6.f()}return[{},""]};/**
 * Retrieves substructure in given object referenced by given selector
 * path.
 * @param selector - Selector path.
 * @param scope - Object to search in.
 * @param options - Options object to configure evaluation.
 * @param options.contextReplacements - Configuration how to replace "this"
 * and "thisParent" keywords in selectors.
 * @param options.delimiter - Delimiter to delimit given selector components.
 * @param options.skipMissingLevel - Indicates to skip missing level in given
 * path.
 * @returns Determined sub structure of given data or "undefined".
 */var evaluateSelector=function evaluateSelector(selector,scope,options){if(scope===void 0){scope={}}if(options===void 0){options={}}var _evaluateSelectorUnti=evaluateSelectorUntilLastObject(selector,scope,options),_evaluateSelectorUnti2=_slicedToArray(_evaluateSelectorUnti,2),lastObject=_evaluateSelectorUnti2[0],lastKey=_evaluateSelectorUnti2[1];if(lastKey==="")return scope;if((0,_index_js__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .Tn)(lastKey))return lastKey(lastObject);if(Object.prototype.hasOwnProperty.call(lastObject,lastKey))return lastObject[lastKey];return options.skipMissingLevel?lastObject:undefined};var evaluateCondition=function evaluateCondition(condition,scope,options){var value1=evaluateExpression(condition.value1,scope,options);var value2=evaluateExpression(condition.value2,scope,options);switch(condition.$comparator){case"==":return (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .equals */ .aI)(value1,value2);case"!=":return!(0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .equals */ .aI)(value1,value2);case"<":return value1<value2;case"<=":return value1<=value2;case">":return value1>value2;case">=":return value1>=value2}};var evaluateUnaryOperation=function evaluateUnaryOperation(operation,scope,options){var operand=evaluateExpression(operation.operand,scope,options);switch(operation.$operator){case"!":return!operand;case"!!":return Boolean(operand)}};var evaluateOperation=function evaluateOperation(operation,scope,options){var operand1=evaluateExpression(operation.operand1,scope,options);var operand2=evaluateExpression(operation.operand2,scope,options);switch(operation.$operator){case"+":return operand1+operand2;case"-":return operand1-operand2;case"*":return operand1*operand2;case"**":return Math.pow(operand1,operand2);case"/":return operand1/operand2}};var evaluateOptionalThen=function evaluateOptionalThen(expression,scope,options){if(typeof expression.then==="undefined")return undefined;return evaluateExpression(expression.then,scope,options)};var evaluateIf=function evaluateIf(expression,scope,options){if(evaluateExpression(expression.$if,scope,options))return evaluateOptionalThen(expression,scope,options);return typeof expression.else==="undefined"?undefined:evaluateExpression(expression.else,scope)};var evaluateSwitch=function evaluateSwitch(expression,scope,options){var value=evaluateExpression(expression.$switch,scope);var _iterator7=_createForOfIteratorHelper(expression.caseExpressions),_step7;try{for(_iterator7.s();!(_step7=_iterator7.n()).done;){var caseExpression=_step7.value;if(value===evaluateExpression(caseExpression.$case,scope,options))return evaluateOptionalThen(caseExpression,scope,options)}}catch(err){_iterator7.e(err)}finally{_iterator7.f()}if(typeof expression.default!=="undefined")return evaluateExpression(expression.default,scope,options);return undefined};var evaluateAnd=function evaluateAnd(expression,scope,options){var _iterator8=_createForOfIteratorHelper(expression.$and),_step8;try{for(_iterator8.s();!(_step8=_iterator8.n()).done;){var condition=_step8.value;if(!evaluateExpression(condition,scope,options))return false}}catch(err){_iterator8.e(err)}finally{_iterator8.f()}return true};var evaluateOr=function evaluateOr(expression,scope,options){var _iterator9=_createForOfIteratorHelper(expression.$or),_step9;try{for(_iterator9.s();!(_step9=_iterator9.n()).done;){var condition=_step9.value;if(evaluateExpression(condition,scope,options))return true}}catch(err){_iterator9.e(err)}finally{_iterator9.f()}return false};var evaluateConcat=function evaluateConcat(expression,scope,options){var result=[];var isArray=false;var _iterator0=_createForOfIteratorHelper(expression.$concat),_step0;try{for(_iterator0.s();!(_step0=_iterator0.n()).done;){var item=_step0.value;var value=evaluateExpression(item,scope,options);if(Array.isArray(value))isArray=true;result=result.concat(value)}}catch(err){_iterator0.e(err)}finally{_iterator0.f()}return isArray?result:result.join("")};var evaluateMapping=function evaluateMapping(expression,scope,options){var givenData=evaluateExpression(expression.data,scope,options);var normalizedGivenData=[];if(Array.isArray(givenData))normalizedGivenData=givenData;else for(var _i=0,_Object$entries=Object.entries(givenData);_i<_Object$entries.length;_i++){var _Object$entries$_i=_slicedToArray(_Object$entries[_i],2),key=_Object$entries$_i[0],value=_Object$entries$_i[1];normalizedGivenData.push(_objectSpread(_objectSpread({},value),{},{$key:key}))}var result=[];var _iterator1=_createForOfIteratorHelper(normalizedGivenData),_step1;try{for(_iterator1.s();!(_step1=_iterator1.n()).done;){var item=_step1.value;var _value={};for(var _i2=0,_Object$entries2=Object.entries(expression.$mapping);_i2<_Object$entries2.length;_i2++){var _Object$entries2$_i=_slicedToArray(_Object$entries2[_i2],2),sourceName=_Object$entries2$_i[0],targetName=_Object$entries2$_i[1];if(Object.prototype.hasOwnProperty.call(item,sourceName))_value[targetName]=item[sourceName]}result.push(_value)}}catch(err){_iterator1.e(err)}finally{_iterator1.f()}return result};var evaluateArrayContains=function evaluateArrayContains(expression,scope,options){var array=scope;if(expression.$arrayContains.target!=null)array=evaluateExpression(expression.$arrayContains.target,scope,options);var value=evaluateExpression(expression.$arrayContains.value,scope,options);var key=evaluateExpression(expression.$arrayContains.key,scope,options);if(!Array.isArray(array))return false;return array.some(function(item){if(typeof key==="string"&&(0,_index_js__WEBPACK_IMPORTED_MODULE_0__/* .isPlainObject */ .Qd)(item)&&Object.prototype.hasOwnProperty.call(item,key)){var record=item;return record[key]===value}return item===value})};function evaluateExpression(expression,scope,options){if(scope===void 0){scope={}}if(options===void 0){options={}}if((0,_indicator_functions_js__WEBPACK_IMPORTED_MODULE_2__/* .isSelector */ .cB)(expression))return evaluateSelector(expression.$select,scope,options);if((0,_indicator_functions_js__WEBPACK_IMPORTED_MODULE_2__/* .isCondition */ .G3)(expression))return evaluateCondition(expression,scope,options);if((0,_indicator_functions_js__WEBPACK_IMPORTED_MODULE_2__/* .isUnaryOperation */ .bF)(expression))return evaluateUnaryOperation(expression,scope,options);if((0,_indicator_functions_js__WEBPACK_IMPORTED_MODULE_2__/* .isOperation */ .YG)(expression))return evaluateOperation(expression,scope,options);if((0,_indicator_functions_js__WEBPACK_IMPORTED_MODULE_2__/* .isOrExpression */ .g6)(expression))return evaluateOr(expression,scope,options);if((0,_indicator_functions_js__WEBPACK_IMPORTED_MODULE_2__/* .isAndExpression */ .Gc)(expression))return evaluateAnd(expression,scope,options);if((0,_indicator_functions_js__WEBPACK_IMPORTED_MODULE_2__/* .isConcatExpression */ .HK)(expression))return evaluateConcat(expression,scope,options);if((0,_indicator_functions_js__WEBPACK_IMPORTED_MODULE_2__/* .isMappingExpression */ .Z9)(expression))return evaluateMapping(expression,scope,options);if((0,_indicator_functions_js__WEBPACK_IMPORTED_MODULE_2__/* .isIfExpression */ .MP)(expression))return evaluateIf(expression,scope,options);if((0,_indicator_functions_js__WEBPACK_IMPORTED_MODULE_2__/* .isSwitchExpression */ .$y)(expression))return evaluateSwitch(expression,scope,options);if((0,_indicator_functions_js__WEBPACK_IMPORTED_MODULE_2__/* .isArrayContainsExpression */ .ZI)(expression))return evaluateArrayContains(expression,scope,options);return expression}/* harmony default export */ __nested_webpack_exports__.Ay = (evaluateExpression);

/***/ }),
/* 20 */
/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_285229__) {

/* harmony export */ __nested_webpack_require_285229__.d(__nested_webpack_exports__, {
/* harmony export */   b: function() { return /* binding */ viewArrayAsScope; },
/* harmony export */   x: function() { return /* binding */ _viewObjectAsScope; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_285229__(0);
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/* !
    region header
    [Project page](https://torben.website/clientnode)

    Copyright Torben Sickert (info["~at~"]torben.website) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)};function _createForOfIteratorHelper(r,e){var t="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(!t){if(Array.isArray(r)||(t=_unsupportedIterableToArray(r))||e&&r&&"number"==typeof r.length){t&&(r=t);var _n=0,F=function F(){};return{s:F,n:function n(){return _n>=r.length?{done:!0}:{done:!1,value:r[_n++]}},e:function e(r){throw r},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,u=!1;return{s:function s(){t=t.call(r)},n:function n(){var r=t.next();return a=r.done,r},e:function e(r){u=!0,o=r},f:function f(){try{a||null==t.return||t.return()}finally{if(u)throw o}}}}function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}var viewArrayAsScope=function viewArrayAsScope(data,childrenPropertyNames,propertyReferenceKeys){return new Proxy(data,{ownKeys:function ownKeys(target){return Reflect.ownKeys(target)},get:function get(target,name){var _iterator=_createForOfIteratorHelper(target),_step;try{for(_iterator.s();!(_step=_iterator.n()).done;){var element=_step.value;var _iterator2=_createForOfIteratorHelper(propertyReferenceKeys),_step2;try{for(_iterator2.s();!(_step2=_iterator2.n()).done;){var key=_step2.value;if(element[key]===name){// NOTE: Type[keyof Type]
// NOTE: ScopeType[keyof ScopeType]
// type ScopeValueType = object
/*
                            eslint-disable
                            @typescript-eslint/no-unnecessary-type-arguments
                        */return _viewObjectAsScope(element,childrenPropertyNames,propertyReferenceKeys);/*
                            eslint-enable
                            @typescript-eslint/no-unnecessary-type-arguments
                        */}}}catch(err){_iterator2.e(err)}finally{_iterator2.f()}}}catch(err){_iterator.e(err)}finally{_iterator.f()}return undefined},set:function set(target,name,value){var index=0;var _iterator3=_createForOfIteratorHelper(target),_step3;try{for(_iterator3.s();!(_step3=_iterator3.n()).done;){var item=_step3.value;var _iterator4=_createForOfIteratorHelper(propertyReferenceKeys),_step4;try{for(_iterator4.s();!(_step4=_iterator4.n()).done;){var key=_step4.value;if(item[key]===name){target[index]=value;return true}}}catch(err){_iterator4.e(err)}finally{_iterator4.f()}index+=1}}catch(err){_iterator3.e(err)}finally{_iterator3.f()}return false}})};var _viewObjectAsScope=function viewObjectAsScope(data,childrenPropertyNames,propertyReferenceKeys){if(childrenPropertyNames===void 0){childrenPropertyNames=["children"]}if(propertyReferenceKeys===void 0){propertyReferenceKeys=["name"]}return new Proxy(data,{ownKeys:function ownKeys(target){return Reflect.ownKeys(target)},get:function get(target,name){var value=target[name];if(Object.prototype.hasOwnProperty.call(target,name)){if(childrenPropertyNames.includes(name)&&Array.isArray(value)){// NOTE: Type[keyof Type]
// NOTE: ScopeType[keyof ScopeType]
return viewArrayAsScope(value,childrenPropertyNames,propertyReferenceKeys)}if(value!==null&&_typeof(value)==="object"){// NOTE: Type[keyof Type]
// NOTE: ScopeType[keyof ScopeType]
// type ScopeValueType = object
/*
                        eslint-disable
                        @typescript-eslint/no-unnecessary-type-arguments
                    */return _viewObjectAsScope(value,childrenPropertyNames,propertyReferenceKeys);/*
                        eslint-enable
                        @typescript-eslint/no-unnecessary-type-arguments
                    */}return value}return undefined},set:function set(target,name,value){if(Object.prototype.hasOwnProperty.call(target,name))if(Object.prototype.hasOwnProperty.call(target,name)){target[name]=value;return true}return false}})};

/***/ }),
/* 21 */
/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_290522__) {

/* harmony export */ __nested_webpack_require_290522__.d(__nested_webpack_exports__, {
/* harmony export */   $y: function() { return /* reexport safe */ _indicator_functions_js__WEBPACK_IMPORTED_MODULE_2__.$y; },
/* harmony export */   CH: function() { return /* reexport safe */ _evaluators_js__WEBPACK_IMPORTED_MODULE_0__.CH; },
/* harmony export */   Cp: function() { return /* reexport safe */ _evaluators_js__WEBPACK_IMPORTED_MODULE_0__.Cp; },
/* harmony export */   F9: function() { return /* reexport safe */ _evaluators_js__WEBPACK_IMPORTED_MODULE_0__.F9; },
/* harmony export */   Fm: function() { return /* reexport safe */ _evaluators_js__WEBPACK_IMPORTED_MODULE_0__.Fm; },
/* harmony export */   G3: function() { return /* reexport safe */ _indicator_functions_js__WEBPACK_IMPORTED_MODULE_2__.G3; },
/* harmony export */   Gc: function() { return /* reexport safe */ _indicator_functions_js__WEBPACK_IMPORTED_MODULE_2__.Gc; },
/* harmony export */   HK: function() { return /* reexport safe */ _indicator_functions_js__WEBPACK_IMPORTED_MODULE_2__.HK; },
/* harmony export */   Hg: function() { return /* reexport safe */ _evaluators_js__WEBPACK_IMPORTED_MODULE_0__.Hg; },
/* harmony export */   Ld: function() { return /* reexport safe */ _indicator_functions_js__WEBPACK_IMPORTED_MODULE_2__.cB; },
/* harmony export */   Lm: function() { return /* reexport safe */ _evaluators_js__WEBPACK_IMPORTED_MODULE_0__.Lm; },
/* harmony export */   MP: function() { return /* reexport safe */ _indicator_functions_js__WEBPACK_IMPORTED_MODULE_2__.MP; },
/* harmony export */   O4: function() { return /* binding */ evaluateExpression; },
/* harmony export */   Pl: function() { return /* reexport safe */ _evaluators_js__WEBPACK_IMPORTED_MODULE_0__.Pl; },
/* harmony export */   Q2: function() { return /* reexport safe */ _evaluators_js__WEBPACK_IMPORTED_MODULE_0__.Q2; },
/* harmony export */   YG: function() { return /* reexport safe */ _indicator_functions_js__WEBPACK_IMPORTED_MODULE_2__.YG; },
/* harmony export */   YN: function() { return /* reexport safe */ _evaluators_js__WEBPACK_IMPORTED_MODULE_0__.YN; },
/* harmony export */   Z9: function() { return /* reexport safe */ _indicator_functions_js__WEBPACK_IMPORTED_MODULE_2__.Z9; },
/* harmony export */   ZF: function() { return /* reexport safe */ _evaluators_js__WEBPACK_IMPORTED_MODULE_0__.ZF; },
/* harmony export */   ZI: function() { return /* reexport safe */ _indicator_functions_js__WEBPACK_IMPORTED_MODULE_2__.ZI; },
/* harmony export */   bC: function() { return /* reexport safe */ _helper_js__WEBPACK_IMPORTED_MODULE_1__.b; },
/* harmony export */   bF: function() { return /* reexport safe */ _indicator_functions_js__WEBPACK_IMPORTED_MODULE_2__.bF; },
/* harmony export */   bQ: function() { return /* reexport safe */ _indicator_functions_js__WEBPACK_IMPORTED_MODULE_2__.bQ; },
/* harmony export */   cB: function() { return /* reexport safe */ _evaluators_js__WEBPACK_IMPORTED_MODULE_0__.cB; },
/* harmony export */   f7: function() { return /* reexport safe */ _evaluators_js__WEBPACK_IMPORTED_MODULE_0__.f7; },
/* harmony export */   fG: function() { return /* reexport safe */ _evaluators_js__WEBPACK_IMPORTED_MODULE_0__.fG; },
/* harmony export */   g6: function() { return /* reexport safe */ _indicator_functions_js__WEBPACK_IMPORTED_MODULE_2__.g6; },
/* harmony export */   j0: function() { return /* reexport safe */ _evaluators_js__WEBPACK_IMPORTED_MODULE_0__.j0; },
/* harmony export */   j4: function() { return /* reexport safe */ _evaluators_js__WEBPACK_IMPORTED_MODULE_0__.j4; },
/* harmony export */   lp: function() { return /* reexport safe */ _evaluators_js__WEBPACK_IMPORTED_MODULE_0__.lp; },
/* harmony export */   ml: function() { return /* reexport safe */ _indicator_functions_js__WEBPACK_IMPORTED_MODULE_2__.ml; },
/* harmony export */   rb: function() { return /* reexport safe */ _evaluators_js__WEBPACK_IMPORTED_MODULE_0__.rb; },
/* harmony export */   xk: function() { return /* reexport safe */ _helper_js__WEBPACK_IMPORTED_MODULE_1__.x; },
/* harmony export */   yf: function() { return /* reexport safe */ _evaluators_js__WEBPACK_IMPORTED_MODULE_0__.yf; }
/* harmony export */ });
/* harmony import */ var _evaluators_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_290522__(19);
/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_290522__(20);
/* harmony import */ var _indicator_functions_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_290522__(14);
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/* !
    region header
    [Project page](https://torben.website/clientnode)

    Copyright Torben Sickert (info["~at~"]torben.website) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/var evaluateExpression=_evaluators_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Ay;/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (0)));

/***/ }),
/* 22 */
/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_295736__) {

/* harmony export */ __nested_webpack_require_295736__.d(__nested_webpack_exports__, {
/* harmony export */   l: function() { return /* reexport safe */ _constants_js__WEBPACK_IMPORTED_MODULE_0__.l_; }
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_295736__(1);
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module cli *//* !
    region header
    [Project page](https://torben.website/clientnode)

    Copyright Torben Sickert (info["~at~"]torben.website) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*//*
    NOTE: "CLI_COLOR" is defined in and re-exported from "./constants" (instead
    of being declared here directly) to avoid a webpack code generation issue
    where an import-less module loses its export declarations when bundled as a
    dependency of another entry point.
*/

/***/ }),
/* 23 */
/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_296854__) {

/* harmony export */ __nested_webpack_require_296854__.d(__nested_webpack_exports__, {
/* harmony export */   Ri: function() { return /* binding */ getCookie; },
/* harmony export */   TV: function() { return /* binding */ setCookie; },
/* harmony export */   Yj: function() { return /* binding */ deleteCookie; }
/* harmony export */ });
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_296854__(5);
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module cookie *//* !
    region header
    [Project page](https://torben.website/clientnode)

    Copyright Torben Sickert (info["~at~"]torben.website) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach(function(r){_defineProperty(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function _defineProperty(e,r,t){return(r=_toPropertyKey(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _toPropertyKey(t){var i=_toPrimitive(t,"string");return"symbol"==_typeof(i)?i:i+""}function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}function _createForOfIteratorHelper(r,e){var t="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(!t){if(Array.isArray(r)||(t=_unsupportedIterableToArray(r))||e&&r&&"number"==typeof r.length){t&&(r=t);var _n=0,F=function F(){};return{s:F,n:function n(){return _n>=r.length?{done:!0}:{done:!1,value:r[_n++]}},e:function e(r){throw r},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,u=!1;return{s:function s(){t=t.call(r)},n:function n(){var r=t.next();return a=r.done,r},e:function e(r){u=!0,o=r},f:function f(){try{a||null==t.return||t.return()}finally{if(u)throw o}}}}function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n};/**
 * Deletes a cookie value by given name.
 * @param name - Name to identify requested value.
 */var deleteCookie=function deleteCookie(name){if(_context_js__WEBPACK_IMPORTED_MODULE_0__/* .globalContext */ .Lz.document)_context_js__WEBPACK_IMPORTED_MODULE_0__/* .globalContext */ .Lz.document.cookie="".concat(name,"=; Max-Age=-99999999;")};/**
 * Gets a cookie value by given name.
 * @param name - Name to identify requested value.
 * @returns Requested value.
 */var getCookie=function getCookie(name){if(_context_js__WEBPACK_IMPORTED_MODULE_0__/* .globalContext */ .Lz.document){var key="".concat(name,"=");var decodedCookie=decodeURIComponent(_context_js__WEBPACK_IMPORTED_MODULE_0__/* .globalContext */ .Lz.document.cookie);var _iterator=_createForOfIteratorHelper(decodedCookie.split(";")),_step;try{for(_iterator.s();!(_step=_iterator.n()).done;){var date=_step.value;while(date.startsWith(" "))date=date.substring(1);if(date.startsWith(key))return date.substring(key.length,date.length)}}catch(err){_iterator.e(err)}finally{_iterator.f()}return""}return null};/**
 * Sets a cookie key-value-pair.
 * @param name - Name to identify given value.
 * @param value - Value to set.
 * @param givenOptions - Cookie set options.
 * @param givenOptions.domain - Domain to reference with given key-value-pair.
 * @param givenOptions.httpOnly - Indicates if this cookie should be accessible
 * from client or not.
 * @param givenOptions.minimal - Set only minimum number of options.
 * @param givenOptions.numberOfDaysUntilExpiration - Number of days until given
 * key shouldn't be deleted.
 * @param givenOptions.path - Path to reference with given key-value-pair.
 * @param givenOptions.sameSite - Set same site policy to "Lax", "None" or
 * "Strict".
 * @param givenOptions.secure - Indicates if this cookie is only valid for
 * "https" connections.
 * @returns A boolean indicating whether cookie could be set or not.
 */var setCookie=function setCookie(name,value,givenOptions){if(givenOptions===void 0){givenOptions={}}if(_context_js__WEBPACK_IMPORTED_MODULE_0__/* .globalContext */ .Lz.document){var _globalContext$locati;var options=_objectSpread({domain:"",httpOnly:false,minimal:false,numberOfDaysUntilExpiration:365,path:"/",sameSite:"Lax",secure:true},givenOptions);var now=new Date;now.setTime(now.getTime()+options.numberOfDaysUntilExpiration*24*60*60*1000);if(options.domain===""&&(_globalContext$locati=_context_js__WEBPACK_IMPORTED_MODULE_0__/* .globalContext */ .Lz.location)!==null&&_globalContext$locati!==void 0&&_globalContext$locati.hostname)options.domain=_context_js__WEBPACK_IMPORTED_MODULE_0__/* .globalContext */ .Lz.location.hostname;_context_js__WEBPACK_IMPORTED_MODULE_0__/* .globalContext */ .Lz.document.cookie="".concat(name,"=").concat(value)+(options.minimal?"":";Expires=\"".concat(now.toUTCString())+";Path=".concat(options.path)+";Domain=".concat(options.domain)+(options.sameSite?";SameSite=".concat(options.sameSite):"")+(options.secure?";Secure":"")+(options.httpOnly?";HttpOnly":""));return true}return false};

/***/ }),
/* 24 */
/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_303422__) {

/* harmony export */ __nested_webpack_require_303422__.d(__nested_webpack_exports__, {
/* harmony export */   CJ: function() { return /* binding */ cacheImage; },
/* harmony export */   QB: function() { return /* binding */ checkReachability; },
/* harmony export */   Zx: function() { return /* binding */ checkUnreachability; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_303422__(0);
/* harmony import */ var _indicators_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_303422__(4);
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_303422__(5);
/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_303422__(3);
/* harmony import */ var _utility_js__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_303422__(13);
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module data-transfer *//* !
    region header
    [Project page](https://torben.website/clientnode)

    Copyright Torben Sickert (info["~at~"]torben.website) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/function _regenerator(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var e,t,r="function"==typeof Symbol?Symbol:{},n=r.iterator||"@@iterator",o=r.toStringTag||"@@toStringTag";function i(r,n,o,i){var c=n&&n.prototype instanceof Generator?n:Generator,u=Object.create(c.prototype);return _regeneratorDefine2(u,"_invoke",function(r,n,o){var i,c,u,f=0,p=o||[],y=!1,G={p:0,n:0,v:e,a:d,f:d.bind(e,4),d:function d(t,r){return i=t,c=0,u=e,G.n=r,a}};function d(r,n){for(c=r,u=n,t=0;!y&&f&&!o&&t<p.length;t++){var o,i=p[t],d=G.p,l=i[2];r>3?(o=l===n)&&(u=i[(c=i[4])?5:(c=3,3)],i[4]=i[5]=e):i[0]<=d&&((o=r<2&&d<i[1])?(c=0,G.v=n,G.n=i[1]):d<l&&(o=r<3||i[0]>n||n>l)&&(i[4]=r,i[5]=n,G.n=l,c=0))}if(o||r>1)return a;throw y=!0,n}return function(o,p,l){if(f>1)throw TypeError("Generator is already running");for(y&&1===p&&d(p,l),c=p,u=l;(t=c<2?e:u)||!y;){i||(c?c<3?(c>1&&(G.n=-1),d(c,u)):G.n=u:G.v=u);try{if(f=2,i){if(c||(o="next"),t=i[o]){if(!(t=t.call(i,u)))throw TypeError("iterator result is not an object");if(!t.done)return t;u=t.value,c<2&&(c=0)}else 1===c&&(t=i.return)&&t.call(i),c<2&&(u=TypeError("The iterator does not provide a '"+o+"' method"),c=1);i=e}else if((t=(y=G.n<0)?u:r.call(n,G))!==a)break}catch(t){i=e,c=1,u=t}finally{f=1}}return{value:t,done:y}}}(r,o,i),!0),u}var a={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}t=Object.getPrototypeOf;var c=[][n]?t(t([][n]())):(_regeneratorDefine2(t={},n,function(){return this}),t),u=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(c);function f(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,GeneratorFunctionPrototype):(e.__proto__=GeneratorFunctionPrototype,_regeneratorDefine2(e,o,"GeneratorFunction")),e.prototype=Object.create(u),e}return GeneratorFunction.prototype=GeneratorFunctionPrototype,_regeneratorDefine2(u,"constructor",GeneratorFunctionPrototype),_regeneratorDefine2(GeneratorFunctionPrototype,"constructor",GeneratorFunction),GeneratorFunction.displayName="GeneratorFunction",_regeneratorDefine2(GeneratorFunctionPrototype,o,"GeneratorFunction"),_regeneratorDefine2(u),_regeneratorDefine2(u,o,"Generator"),_regeneratorDefine2(u,n,function(){return this}),_regeneratorDefine2(u,"toString",function(){return"[object Generator]"}),(_regenerator=function _regenerator(){return{w:i,m:f}})()}function _regeneratorDefine2(e,r,n,t){var i=Object.defineProperty;try{i({},"",{})}catch(e){i=0}_regeneratorDefine2=function _regeneratorDefine(e,r,n,t){function o(r,n){_regeneratorDefine2(e,r,function(e){return this._invoke(r,n,e)})}r?i?i(e,r,{value:n,enumerable:!t,configurable:!t,writable:!t}):e[r]=n:(o("next",0),o("throw",1),o("return",2))},_regeneratorDefine2(e,r,n,t)};function asyncGeneratorStep(n,t,e,r,o,a,c){try{var i=n[a](c),u=i.value}catch(n){return void e(n)}i.done?t(u):Promise.resolve(u).then(r,o)}function _asyncToGenerator(n){return function(){var t=this,e=arguments;return new Promise(function(r,o){var a=n.apply(t,e);function _next(n){asyncGeneratorStep(a,r,o,_next,_throw,"next",n)}function _throw(n){asyncGeneratorStep(a,r,o,_next,_throw,"throw",n)}_next(void 0)})}};/**
 * Checks if given url response with given status code.
 * @param url - Url to check reachability.
 * @param givenOptions - Options to configure.
 * @param givenOptions.wait - Boolean indicating if we should retry until a
 * status code will be given.
 * @param givenOptions.statusCodes - Status codes to check for.
 * @param givenOptions.timeoutInSeconds - Delay after assuming given resource
 * isn't available if no response is coming.
 * @param givenOptions.pollIntervalInSeconds - Seconds between two tries to
 * reach given url.
 * @param givenOptions.options - Fetch options to use.
 * @param givenOptions.expectedIntermediateStatusCodes - A list of expected but
 * unwanted response codes. If detecting them waiting will continue until an
 * expected (positive) code occurs or timeout is reached.
 * @returns A promise which will be resolved if a request to given url has
 * finished and resulting status code matches given expected status code.
 * Otherwise, returned promise will be rejected.
 */var checkReachability=/*#__PURE__*/function(){var _checkReachability=_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(url,givenOptions){var _ref;var abortController,options,statusCodes,expectedIntermediateStatusCodes,isStatusCodeExpected,checkAndThrow,_t3;return _regenerator().w(function(_context2){while(1)switch(_context2.n){case 0:if(givenOptions===void 0){givenOptions={}}if(_context_js__WEBPACK_IMPORTED_MODULE_2__/* .globalContext */ .Lz.fetch){_context2.n=1;break}throw new Error("Missing fetch implementation available.");case 1:abortController=(_ref=givenOptions.abortController)!==null&&_ref!==void 0?_ref:new AbortController;options=(0,_object_js__WEBPACK_IMPORTED_MODULE_3__/* .extend */ .X$)(true,{expectedIntermediateStatusCodes:[],options:{signal:abortController.signal},pollIntervalInSeconds:0.1,statusCodes:200,timeoutInSeconds:10,wait:false},givenOptions);statusCodes=[].concat(options.statusCodes);expectedIntermediateStatusCodes=[].concat(options.expectedIntermediateStatusCodes);isStatusCodeExpected=function isStatusCodeExpected(response,statusCodes){return"status"in response&&statusCodes.includes(response.status)};checkAndThrow=function checkAndThrow(response){if(!isStatusCodeExpected(response,statusCodes))throw new Error("Given status code ".concat(String(response.status)," ")+"differs from ".concat(statusCodes.join(", "),"."));return response};if(!options.wait){_context2.n=2;break}return _context2.a(2,new Promise(function(resolve,reject){var timedOut=false;var timer=(0,_utility_js__WEBPACK_IMPORTED_MODULE_4__/* .timeout */ .wR)(options.timeoutInSeconds*1000);var retryErrorHandler=function retryErrorHandler(error){if(!timedOut){currentlyRunningTimer=(0,_utility_js__WEBPACK_IMPORTED_MODULE_4__/* .timeout */ .wR)(options.pollIntervalInSeconds*1000,wrapper);/*
                        NOTE: A timer rejection is expected. Avoid throwing
                        errors about unhandled promise rejections.
                    */currentlyRunningTimer.catch(function(){// Do nothing regardless of an error.
})}return error};var wrapper=/*#__PURE__*/function(){var _wrapper=_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(){var response,_t,_t2;return _regenerator().w(function(_context){while(1)switch(_context.p=_context.n){case 0:_context.p=0;_context.n=1;return _context_js__WEBPACK_IMPORTED_MODULE_2__/* .globalContext */ .Lz.fetch(url,options.options);case 1:response=_context.v;_context.n=3;break;case 2:_context.p=2;_t=_context.v;return _context.a(2,retryErrorHandler(_t));case 3:_context.p=3;resolve(checkAndThrow(response));timer.clear();_context.n=6;break;case 4:_context.p=4;_t2=_context.v;if(!isStatusCodeExpected(response,expectedIntermediateStatusCodes)){_context.n=5;break}return _context.a(2,retryErrorHandler(_t2));case 5:/* eslint-disable prefer-promise-reject-errors */reject(_t2);/* eslint-enable prefer-promise-reject-errors */timer.clear();case 6:return _context.a(2,response)}},_callee,null,[[3,4],[0,2]])}));function wrapper(){return _wrapper.apply(this,arguments)}return wrapper}();var currentlyRunningTimer=(0,_utility_js__WEBPACK_IMPORTED_MODULE_4__/* .timeout */ .wR)(wrapper);timer.then(function(){timedOut=true;currentlyRunningTimer.clear();reject(new Error("Timeout of ".concat(String(options.timeoutInSeconds)," ")+"seconds reached."));abortController.abort()},function(){// Do nothing.
})}));case 2:_t3=checkAndThrow;_context2.n=3;return _context_js__WEBPACK_IMPORTED_MODULE_2__/* .globalContext */ .Lz.fetch(url,options.options);case 3:return _context2.a(2,_t3(_context2.v))}},_callee2)}));function checkReachability(_x,_x2){return _checkReachability.apply(this,arguments)}return checkReachability}();/**
 * Checks if given url isn't reachable.
 * @param url - Url to check reachability.
 * @param givenOptions - Options to configure.
 * @param givenOptions.wait - Boolean indicating if we should retry until a
 * status code will be given.
 * @param givenOptions.timeoutInSeconds - Delay after assuming given resource
 * will stay available.
 * @param givenOptions.pollIntervalInSeconds - Seconds between two tries to
 * reach given url.
 * @param givenOptions.statusCodes - Status codes to check for.
 * @param givenOptions.options - Fetch options to use.
 * @returns A promise which will be resolved if a request to given url couldn't
 * be finished. Otherwise, returned promise will be rejected. If "wait" is set
 * to "true" we will resolve to another promise still resolving when final
 * timeout is reached or the endpoint is unreachable (after some tries).
 */var checkUnreachability=/*#__PURE__*/function(){var _checkUnreachability=_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(url,givenOptions){var _ref2;var abortController,options,check,result,_t5,_t6;return _regenerator().w(function(_context4){while(1)switch(_context4.p=_context4.n){case 0:if(givenOptions===void 0){givenOptions={}}if(_context_js__WEBPACK_IMPORTED_MODULE_2__/* .globalContext */ .Lz.fetch){_context4.n=1;break}throw new Error("Missing fetch implementation available.");case 1:abortController=(_ref2=givenOptions.abortController)!==null&&_ref2!==void 0?_ref2:new AbortController;options=(0,_object_js__WEBPACK_IMPORTED_MODULE_3__/* .extend */ .X$)(true,{options:{signal:abortController.signal},pollIntervalInSeconds:0.1,statusCodes:[],timeoutInSeconds:10,wait:false},givenOptions);check=function check(response){var statusCodes=[].concat(options.statusCodes);if(statusCodes.length){if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_1__/* .isObject */ .Gv)(response)&&"status"in response&&statusCodes.includes(response.status))throw new Error("Given url \"".concat(url,"\" is reachable and responses with ")+"status code \"".concat(String(response.status),"\"."));return new Error("Given status code is not \"".concat(statusCodes.join(", "),"\"."))}return null};if(!options.wait){_context4.n=2;break}return _context4.a(2,new Promise(function(resolve,reject){var timedOut=false;var _wrapper2=/*#__PURE__*/function(){var _wrapper3=_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(){var response,result,_t4;return _regenerator().w(function(_context3){while(1)switch(_context3.p=_context3.n){case 0:_context3.p=0;_context3.n=1;return _context_js__WEBPACK_IMPORTED_MODULE_2__/* .globalContext */ .Lz.fetch(url,options.options);case 1:response=_context3.v;if(!timedOut){_context3.n=2;break}return _context3.a(2,response);case 2:result=check(response);if(!result){_context3.n=3;break}timer.clear();resolve(result);return _context3.a(2,result);case 3:currentlyRunningTimer=(0,_utility_js__WEBPACK_IMPORTED_MODULE_4__/* .timeout */ .wR)(options.pollIntervalInSeconds*1000,_wrapper2);/*
                        NOTE: A timer rejection is expected. Avoid throwing
                        errors about unhandled promise rejections.
                    */currentlyRunningTimer.catch(function(){// Do nothing regardless of an error.
});_context3.n=5;break;case 4:_context3.p=4;_t4=_context3.v;timer.clear();resolve(_t4);return _context3.a(2,_t4);case 5:return _context3.a(2,null)}},_callee3,null,[[0,4]])}));function wrapper(){return _wrapper3.apply(this,arguments)}return wrapper}();var currentlyRunningTimer=(0,_utility_js__WEBPACK_IMPORTED_MODULE_4__/* .timeout */ .wR)(_wrapper2);var timer=(0,_utility_js__WEBPACK_IMPORTED_MODULE_4__/* .timeout */ .wR)(options.timeoutInSeconds*1000);timer.then(function(){timedOut=true;currentlyRunningTimer.clear();reject(new Error("Timeout of ".concat(String(options.timeoutInSeconds)," ")+"seconds reached."));abortController.abort()},function(){// Do nothing.
})}));case 2:_context4.p=2;_t5=check;_context4.n=3;return _context_js__WEBPACK_IMPORTED_MODULE_2__/* .globalContext */ .Lz.fetch(url,options.options);case 3:result=_t5(_context4.v);if(!result){_context4.n=4;break}return _context4.a(2,result);case 4:_context4.n=6;break;case 5:_context4.p=5;_t6=_context4.v;return _context4.a(2,_t6);case 6:throw new Error("Given url \"".concat(url,"\" is reachable."));case 7:return _context4.a(2)}},_callee4,null,[[2,5]])}));function checkUnreachability(_x3,_x4){return _checkUnreachability.apply(this,arguments)}return checkUnreachability}();/**
 * Preloads a given url via a temporary created image element.
 * @param url - To image which should be downloaded.
 * @returns A Promise indicating whether the image was loaded.
 */var cacheImage=function cacheImage(url){return new Promise(function(resolve,reject){var imageElement=document.createElement("img");imageElement.onload=function(){var isLoaded=imageElement.complete;imageElement.remove();if(isLoaded)resolve();else reject(new Error("Image could not be loaded."))};imageElement.src=url})};

/***/ }),
/* 25 */
/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_317712__) {

/* harmony export */ __nested_webpack_require_317712__.d(__nested_webpack_exports__, {
/* harmony export */   C_: function() { return /* binding */ createDomNodes; },
/* harmony export */   Cc: function() { return /* binding */ interruptableScrollTo; },
/* harmony export */   D7: function() { return /* binding */ STOP_AUTO_SCROLLING; },
/* harmony export */   HC: function() { return /* binding */ replace; },
/* harmony export */   LV: function() { return /* binding */ wrap; },
/* harmony export */   Rv: function() { return /* binding */ fade; },
/* harmony export */   S: function() { return /* binding */ SCROLL_EVENT_NAMES; },
/* harmony export */   UK: function() { return /* binding */ getAll; },
/* harmony export */   VG: function() { return /* binding */ scrollTo; },
/* harmony export */   Xn: function() { return /* binding */ fadeOut; },
/* harmony export */   ZQ: function() { return /* binding */ MANUAL_SCROLL_EVENT_NAMES; },
/* harmony export */   dK: function() { return /* binding */ _isHidden; },
/* harmony export */   kp: function() { return /* binding */ closest; },
/* harmony export */   l2: function() { return /* binding */ isEquivalent; },
/* harmony export */   oA: function() { return /* binding */ unwrap; },
/* harmony export */   q4: function() { return /* binding */ _getText; },
/* harmony export */   qG: function() { return /* binding */ fadeIn; },
/* harmony export */   qq: function() { return /* binding */ onDocumentReady; },
/* harmony export */   wT: function() { return /* binding */ getParents; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_317712__(0);
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_317712__(5);
/* harmony import */ var _utility_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_317712__(13);
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module domNode *//* !
    region header
    [Project page](https://torben.website/clientnode)

    Copyright Torben Sickert (info["~at~"]torben.website) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _regenerator(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var e,t,r="function"==typeof Symbol?Symbol:{},n=r.iterator||"@@iterator",o=r.toStringTag||"@@toStringTag";function i(r,n,o,i){var c=n&&n.prototype instanceof Generator?n:Generator,u=Object.create(c.prototype);return _regeneratorDefine2(u,"_invoke",function(r,n,o){var i,c,u,f=0,p=o||[],y=!1,G={p:0,n:0,v:e,a:d,f:d.bind(e,4),d:function d(t,r){return i=t,c=0,u=e,G.n=r,a}};function d(r,n){for(c=r,u=n,t=0;!y&&f&&!o&&t<p.length;t++){var o,i=p[t],d=G.p,l=i[2];r>3?(o=l===n)&&(u=i[(c=i[4])?5:(c=3,3)],i[4]=i[5]=e):i[0]<=d&&((o=r<2&&d<i[1])?(c=0,G.v=n,G.n=i[1]):d<l&&(o=r<3||i[0]>n||n>l)&&(i[4]=r,i[5]=n,G.n=l,c=0))}if(o||r>1)return a;throw y=!0,n}return function(o,p,l){if(f>1)throw TypeError("Generator is already running");for(y&&1===p&&d(p,l),c=p,u=l;(t=c<2?e:u)||!y;){i||(c?c<3?(c>1&&(G.n=-1),d(c,u)):G.n=u:G.v=u);try{if(f=2,i){if(c||(o="next"),t=i[o]){if(!(t=t.call(i,u)))throw TypeError("iterator result is not an object");if(!t.done)return t;u=t.value,c<2&&(c=0)}else 1===c&&(t=i.return)&&t.call(i),c<2&&(u=TypeError("The iterator does not provide a '"+o+"' method"),c=1);i=e}else if((t=(y=G.n<0)?u:r.call(n,G))!==a)break}catch(t){i=e,c=1,u=t}finally{f=1}}return{value:t,done:y}}}(r,o,i),!0),u}var a={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}t=Object.getPrototypeOf;var c=[][n]?t(t([][n]())):(_regeneratorDefine2(t={},n,function(){return this}),t),u=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(c);function f(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,GeneratorFunctionPrototype):(e.__proto__=GeneratorFunctionPrototype,_regeneratorDefine2(e,o,"GeneratorFunction")),e.prototype=Object.create(u),e}return GeneratorFunction.prototype=GeneratorFunctionPrototype,_regeneratorDefine2(u,"constructor",GeneratorFunctionPrototype),_regeneratorDefine2(GeneratorFunctionPrototype,"constructor",GeneratorFunction),GeneratorFunction.displayName="GeneratorFunction",_regeneratorDefine2(GeneratorFunctionPrototype,o,"GeneratorFunction"),_regeneratorDefine2(u),_regeneratorDefine2(u,o,"Generator"),_regeneratorDefine2(u,n,function(){return this}),_regeneratorDefine2(u,"toString",function(){return"[object Generator]"}),(_regenerator=function _regenerator(){return{w:i,m:f}})()}function _regeneratorDefine2(e,r,n,t){var i=Object.defineProperty;try{i({},"",{})}catch(e){i=0}_regeneratorDefine2=function _regeneratorDefine(e,r,n,t){function o(r,n){_regeneratorDefine2(e,r,function(e){return this._invoke(r,n,e)})}r?i?i(e,r,{value:n,enumerable:!t,configurable:!t,writable:!t}):e[r]=n:(o("next",0),o("throw",1),o("return",2))},_regeneratorDefine2(e,r,n,t)}function asyncGeneratorStep(n,t,e,r,o,a,c){try{var i=n[a](c),u=i.value}catch(n){return void e(n)}i.done?t(u):Promise.resolve(u).then(r,o)}function _asyncToGenerator(n){return function(){var t=this,e=arguments;return new Promise(function(r,o){var a=n.apply(t,e);function _next(n){asyncGeneratorStep(a,r,o,_next,_throw,"next",n)}function _throw(n){asyncGeneratorStep(a,r,o,_next,_throw,"throw",n)}_next(void 0)})}};function _slicedToArray(r,e){return _arrayWithHoles(r)||_iterableToArrayLimit(r,e)||_unsupportedIterableToArray(r,e)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}function _arrayWithHoles(r){if(Array.isArray(r))return r}function _toConsumableArray(r){return _arrayWithoutHoles(r)||_iterableToArray(r)||_unsupportedIterableToArray(r)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArray(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}function _arrayWithoutHoles(r){if(Array.isArray(r))return _arrayLikeToArray(r)}function _createForOfIteratorHelper(r,e){var t="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(!t){if(Array.isArray(r)||(t=_unsupportedIterableToArray(r))||e&&r&&"number"==typeof r.length){t&&(r=t);var _n=0,F=function F(){};return{s:F,n:function n(){return _n>=r.length?{done:!0}:{done:!1,value:r[_n++]}},e:function e(r){throw r},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,u=!1;return{s:function s(){t=t.call(r)},n:function n(){var r=t.next();return a=r.done,r},e:function e(r){u=!0,o=r},f:function f(){try{a||null==t.return||t.return()}finally{if(u)throw o}}}}function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach(function(r){_defineProperty(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function _defineProperty(e,r,t){return(r=_toPropertyKey(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _toPropertyKey(t){var i=_toPrimitive(t,"string");return"symbol"==_typeof(i)?i:i+""}function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)};var createDomNodes=function createDomNodes(html){var domNodeWrapper=document.createElement("div");domNodeWrapper.innerHTML=html;if(domNodeWrapper.childNodes.length===1)/*
            NOTE: We need to clone the nested child to decouple it from its
            parent node.
        */return domNodeWrapper.childNodes[0].cloneNode(true);return domNodeWrapper};var fade=function fade(domNode,intervalInMilliseconds,out){if(intervalInMilliseconds===void 0){intervalInMilliseconds=200}if(out===void 0){out=true}var transitionBackup=domNode.style.transition;var visibleBackup=domNode.style.visibility;var opacityBackup=domNode.style.opacity;var hadStyleAttribute=domNode.hasAttribute("style");if(out){domNode.style.visibility="hidden";domNode.style.opacity="0";domNode.style.transition="visibility 0s ".concat(String(intervalInMilliseconds),"ms, ")+"opacity ".concat(String(intervalInMilliseconds),"ms linear")}else{domNode.style.visibility="visible";domNode.style.opacity="1";domNode.style.transition="opacity ".concat(String(intervalInMilliseconds),"ms linear")}var clearTimeoutAndResetDomNode=_context_js__WEBPACK_IMPORTED_MODULE_1__/* .NOOP */ .tE;var resolved=false;var promise=new Promise(function(resolve){clearTimeoutAndResetDomNode=function clearTimeoutAndResetDomNode(){domNode.style.transition=transitionBackup;resolved=true;resolve()};void (0,_utility_js__WEBPACK_IMPORTED_MODULE_2__/* .timeout */ .wR)(intervalInMilliseconds).then(clearTimeoutAndResetDomNode)});promise.clear=function(){if(!resolved){domNode.style.transition="none";clearTimeoutAndResetDomNode()}};promise.resetStyles=function(){if(hadStyleAttribute){domNode.style.transition=transitionBackup;domNode.style.visibility=visibleBackup;domNode.style.opacity=opacityBackup}else domNode.removeAttribute("style")};return promise};var fadeIn=function fadeIn(domNode,intervalInMilliseconds){if(intervalInMilliseconds===void 0){intervalInMilliseconds=200}return fade(domNode,intervalInMilliseconds,false)};var fadeOut=function fadeOut(domNode,intervalInMilliseconds){if(intervalInMilliseconds===void 0){intervalInMilliseconds=200}return fade(domNode,intervalInMilliseconds)};var STOP_AUTO_SCROLLING={value:_context_js__WEBPACK_IMPORTED_MODULE_1__/* .NOOP */ .tE};var MANUAL_SCROLL_EVENT_NAMES=["DOMMouseScroll","keydown","mousedown","mousewheel","wheel","touchstart","touchmove"];var SCROLL_EVENT_NAMES=["scroll"].concat(MANUAL_SCROLL_EVENT_NAMES);/**
 * Smoothly scrolls both horizontally and vertically to a target DOM node.
 * Cancels instantly if the user interacts with the mouse, touch, or keys.
 * @param givenOptions - Configuration options.
 * @param givenOptions.targetDomNode - The DOM node you want to scroll to.
 * @param givenOptions.containerDomNode - The scrollable parent.
 * @param givenOptions.durationInMilliseconds - Animation duration in
 * milliseconds.
 * @param givenOptions.interruptOnManualScroll - Whether to stop the animation
 * if the user starts to scroll manually.
 * @param givenOptions.offset - Pixel offsets.
 * @param givenOptions.offset.top - Vertical offset in pixels.
 * @param givenOptions.offset.left - Horizontal offset in pixels.
 */var interruptableScrollTo=function interruptableScrollTo(givenOptions){if(givenOptions===void 0){givenOptions={}}if(!(_context_js__WEBPACK_IMPORTED_MODULE_1__/* .globalContext */ .Lz.document&&_context_js__WEBPACK_IMPORTED_MODULE_1__/* .globalContext */ .Lz.window))return;var document=_context_js__WEBPACK_IMPORTED_MODULE_1__/* .globalContext */ .Lz.document;var body=document.body;var window=_context_js__WEBPACK_IMPORTED_MODULE_1__/* .globalContext */ .Lz.window;if(givenOptions.containerDomNode&&!("getBoundingClientRect"in givenOptions.containerDomNode)&&"parentElement"in givenOptions.containerDomNode)givenOptions.containerDomNode=givenOptions.containerDomNode.parentElement;if(givenOptions.targetDomNode&&!("getBoundingClientRect"in givenOptions.targetDomNode)&&"parentElement"in givenOptions.targetDomNode)givenOptions.targetDomNode=givenOptions.targetDomNode.parentElement;var options=_objectSpread({targetDomNode:body,containerDomNode:window,durationInMilliseconds:500,offset:_objectSpread({top:0,left:0},givenOptions.offset||{}),interruptOnManualScroll:true},givenOptions);var isWindow=options.containerDomNode===window;// 1. Get current starting scroll positions
var startY=isWindow?window.scrollY||document.documentElement.scrollTop:options.containerDomNode.scrollTop;var startX=isWindow?window.scrollX||document.documentElement.scrollLeft:options.containerDomNode.scrollLeft;// 2. Calculate targetDomNode positions for both axes
var targetY;var targetX;if(isWindow){var rect=options.targetDomNode.getBoundingClientRect();targetY=rect.top+(window.scrollY||document.documentElement.scrollTop)-options.offset.top;targetX=rect.left+(window.scrollX||document.documentElement.scrollLeft)-options.offset.left}else{// Relative to the scrollable parent container
targetY=options.targetDomNode.offsetTop-options.containerDomNode.offsetTop-options.offset.top;targetX=options.targetDomNode.offsetLeft-options.containerDomNode.offsetLeft-options.offset.left}var distanceY=targetY-startY;var distanceX=targetX-startX;// If no movement is needed, exit immediately
if(distanceY===0&&distanceX===0)return;var startTime=null;var animationFrameId=null;// Easing function
var easeInOutQuad=function easeInOutQuad(time){return time<0.5?2*time*time:-1+(4-2*time)*time};if(options.interruptOnManualScroll){// 3. Define the interrupt / teardown system
STOP_AUTO_SCROLLING.value=function(){if(animationFrameId){cancelAnimationFrame(animationFrameId);animationFrameId=null}for(var _i=0,_arr=[body,document.querySelector("html"),window];_i<_arr.length;_i++){var node=_arr[_i];for(var _i2=0,_MANUAL_SCROLL_EVENT_=MANUAL_SCROLL_EVENT_NAMES;_i2<_MANUAL_SCROLL_EVENT_.length;_i2++){var name=_MANUAL_SCROLL_EVENT_[_i2];node===null||node===void 0||node.removeEventListener(name,STOP_AUTO_SCROLLING.value)}}STOP_AUTO_SCROLLING.value=_context_js__WEBPACK_IMPORTED_MODULE_1__/* .NOOP */ .tE};for(var _i3=0,_arr2=[body,document.querySelector("html"),window];_i3<_arr2.length;_i3++){var node=_arr2[_i3];for(var _i4=0,_MANUAL_SCROLL_EVENT_2=MANUAL_SCROLL_EVENT_NAMES;_i4<_MANUAL_SCROLL_EVENT_2.length;_i4++){var name=_MANUAL_SCROLL_EVENT_2[_i4];node===null||node===void 0||node.addEventListener(name,STOP_AUTO_SCROLLING.value,{passive:true})}}}// 4. Multi-axis animation loop
var _step=function step(currentTime){if(!startTime)startTime=currentTime;var progress=currentTime-startTime;var timeRatio=Math.min(progress/options.durationInMilliseconds,1);var easedRatio=easeInOutQuad(timeRatio);// Linearly interpolate the positions based on eased progress.
var nextY=startY+distanceY*easedRatio;var nextX=startX+distanceX*easedRatio;// Apply scroll to window or container.
if(isWindow)window.scrollTo(nextX,nextY);else{;options.containerDomNode.scrollTop=nextY;options.containerDomNode.scrollLeft=nextX}if(timeRatio<1)animationFrameId=requestAnimationFrame(_step);else STOP_AUTO_SCROLLING.value()};animationFrameId=requestAnimationFrame(_step)};/**
 * Scrolls to the given DomNode's location or tio of the page.
 * @param targetDomNode - DomNode to scroll to. If not given, scrolls to the
 * top of the page.
 * @param behavior - Scroll behavior to use.
 */var scrollTo=function scrollTo(targetDomNode,behavior){var _globalContext$window;if(targetDomNode===void 0){targetDomNode=null}if(behavior===void 0){behavior="smooth"}if(targetDomNode&&!("getBoundingClientRect"in targetDomNode))targetDomNode=targetDomNode.parentElement;var _ref=targetDomNode?targetDomNode.getBoundingClientRect():{left:0,top:0},left=_ref.left,top=_ref.top;(_globalContext$window=_context_js__WEBPACK_IMPORTED_MODULE_1__/* .globalContext */ .Lz.window)===null||_globalContext$window===void 0||_globalContext$window.scrollTo({left:left,top:top,behavior:behavior})};var getAll=function getAll(root){if(!_context_js__WEBPACK_IMPORTED_MODULE_1__/* .globalContext */ .Lz.document)return[];var nodes=[];// SHOW_ALL includes elements, text, and comments
var walker=_context_js__WEBPACK_IMPORTED_MODULE_1__/* .globalContext */ .Lz.document.createTreeWalker(root,NodeFilter.SHOW_ALL,null);var currentNode=walker.currentNode;while(currentNode){nodes.push(currentNode);currentNode=walker.nextNode()}return nodes};var closest=function closest(node,selector,startWithParent){var _node$parentElement;if(startWithParent===void 0){startWithParent=false}return"closest"in node&&!startWithParent?node.closest(selector):((_node$parentElement=node.parentElement)===null||_node$parentElement===void 0?void 0:_node$parentElement.closest(selector))||null};var getParents=function getParents(node){var result=[];while(node.parentNode){result.push(node.parentNode);node=node.parentNode}return result};var _getText=function getText(root,recursive){if(recursive===void 0){recursive=false}if(root.nodeType===Node.TEXT_NODE){var _root$nodeValue;var content=(_root$nodeValue=root.nodeValue)===null||_root$nodeValue===void 0?void 0:_root$nodeValue.trim();if(content)return[content]}var result=[];var _iterator=_createForOfIteratorHelper(root.childNodes),_step2;try{for(_iterator.s();!(_step2=_iterator.n()).done;){var domNode=_step2.value;if(recursive||domNode.nodeType===Node.TEXT_NODE)result.push.apply(result,_toConsumableArray(_getText(domNode)))}}catch(err){_iterator.e(err)}finally{_iterator.f()}return result};/**
 * Checks whether given html or text strings are equal.
 * @param first - First html, selector to dom node or text to compare.
 * @param second - Second html, selector to dom node or text to compare.
 * @param forceHTMLString - Indicates whether given contents are
 * interpreted as html string (otherwise automatic detection will be
 * triggered).
 * @returns Returns true if both dom representations are equivalent.
 */var isEquivalent=function isEquivalent(first,second,forceHTMLString){if(forceHTMLString===void 0){forceHTMLString=false}if(first===second)return true;if(!(first&&second))return false;if(!_context_js__WEBPACK_IMPORTED_MODULE_1__/* .globalContext */ .Lz.document)throw new Error("Missing document in global context.");var createElement=_context_js__WEBPACK_IMPORTED_MODULE_1__/* .globalContext */ .Lz.document.createElement.bind(_context_js__WEBPACK_IMPORTED_MODULE_1__/* .globalContext */ .Lz.document);var determineHTMLPattern=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;var inputs={first:first,second:second};var domNodes={first:createElement("dummy"),second:createElement("dummy")};/*
        NOTE: Assume that strings that start "<" and end with ">" are mark up
        and skip the more expensive regular expression check.
    */for(var _i5=0,_Object$entries=Object.entries(inputs);_i5<_Object$entries.length;_i5++){var _Object$entries$_i=_slicedToArray(_Object$entries[_i5],2),type=_Object$entries$_i[0],html=_Object$entries$_i[1];if(typeof html==="string"){if(forceHTMLString||html.startsWith("<")&&html.endsWith(">")&&html.length>=3||determineHTMLPattern.test(html))domNodes[type]=createDomNodes(html);else{var domNode=document.querySelector(html);if(domNode)/*
                        NOTE: We copy the node tree to not manipulate the
                        original dom node by normalizing it afterward.
                    */domNodes[type]=domNode.cloneNode(true);else return false}}else if("cloneNode"in html)domNodes[type]=html.cloneNode(true);else return false}domNodes.first.normalize();domNodes.second.normalize();return domNodes.first.isEqualNode(domNodes.second)};/**
 * Checks whether the given dom node is visible or takes space in the document
 * flow.
 * Elements with visibility: hidden or opacity: 0 are considered to be visible,
 * since they still consume space in the layout. During animations that hide an
 * element, the element is considered to be visible until the end of the
 * animation.
 * @param domNode - To inspect.
 * @returns A boolean indicating the visibility.
 */var _isHidden=function isHidden(domNode){var _globalContext$docume;return!((_globalContext$docume=_context_js__WEBPACK_IMPORTED_MODULE_1__/* .globalContext */ .Lz.document)!==null&&_globalContext$docume!==void 0&&_globalContext$docume.contains(domNode))||domNode.style.display==="none"||domNode.nodeName==="INPUT"&&domNode.getAttribute("type")==="hidden"||["contents","inline"].includes(domNode.style.display)&&(!("innerHTML"in domNode)||domNode.innerHTML.trim()==="")||domNode.style.height==="0px"&&domNode.style.width==="0px"||Boolean(domNode.parentElement)&&_isHidden(domNode.parentElement)};var onDocumentReady=function onDocumentReady(callback){return new Promise(function(resolve){return void _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(){return _regenerator().w(function(_context){while(1)switch(_context.n){case 0:if(!["complete","interactive"].includes(document.readyState)){_context.n=2;break}_context.n=1;return (0,_utility_js__WEBPACK_IMPORTED_MODULE_2__/* .timeout */ .wR)();case 1:resolve();callback===null||callback===void 0||callback();_context.n=3;break;case 2:document.addEventListener("DOMContentLoaded",function(){resolve();callback===null||callback===void 0||callback()});case 3:return _context.a(2)}},_callee)}))()})};/**
 * Replaces a given dom node with given nodes.
 * @param domNodeToReplace - Node to replace its children.
 * @param replacementDomNodes - Node or array of nodes to use as replacement.
 * @param skipEmptyTextNodes - Configures whether to trim text.
 */var replace=function replace(domNodeToReplace,replacementDomNodes,skipEmptyTextNodes){if(skipEmptyTextNodes===void 0){skipEmptyTextNodes=false}var _iterator2=_createForOfIteratorHelper([].concat(replacementDomNodes).reverse()),_step3;try{for(_iterator2.s();!(_step3=_iterator2.n()).done;){var _replacement$nodeValu;var replacement=_step3.value;if(!(skipEmptyTextNodes&&replacement.nodeType===Node.TEXT_NODE&&((_replacement$nodeValu=replacement.nodeValue)===null||_replacement$nodeValu===void 0?void 0:_replacement$nodeValu.trim())===""))domNodeToReplace.after(replacement)}}catch(err){_iterator2.e(err)}finally{_iterator2.f()}domNodeToReplace.remove()};var wrap=function wrap(domNodes,wrapper){var domNodeList=domNodes.length?Array.from(domNodes):[domNodes];// Use the first element's position as the anchor point
var first=domNodeList[0];if(first.parentNode)first.parentNode.insertBefore(wrapper,first);var _iterator3=_createForOfIteratorHelper(domNodeList),_step4;try{for(_iterator3.s();!(_step4=_iterator3.n()).done;){var domNode=_step4.value;wrapper.appendChild(domNode)}}catch(err){_iterator3.e(err)}finally{_iterator3.f()}};/**
 * Moves the content of a given dom node one level up and removes the given
 * node.
 * @param domNode - Node to unwrap.
 * @returns List of unwrapped nodes.
 */var unwrap=function unwrap(domNode){var parent=domNode.parentNode;var result=[];// NOTE: We need to use "Array.from" to copy the list.
for(var _i6=0,_Array$from=Array.from(domNode.childNodes);_i6<_Array$from.length;_i6++){var childNode=_Array$from[_i6];result.push(childNode);if(parent)parent.insertBefore(childNode,domNode)}if(parent)parent.removeChild(domNode);return result};

/***/ }),
/* 26 */
/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_342310__) {

/* harmony export */ __nested_webpack_require_342310__.d(__nested_webpack_exports__, {
/* harmony export */   G: function() { return /* binding */ handleChildProcess; },
/* harmony export */   q: function() { return /* binding */ getProcessCloseHandler; }
/* harmony export */ });
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_342310__(5);
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module process *//* !
    region header
    [Project page](https://torben.website/clientnode)

    Copyright Torben Sickert (info["~at~"]torben.website) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*//**
 * Generates a one shot close handler which triggers given promise methods.
 * If a reason is provided it will be given as resolve target. An Error will be
 * generated if return code is not zero. The generated Error has a property
 * "returnCode" which provides corresponding process return code.
 * @param resolve - Promise's resolve function.
 * @param reject - Promise's reject function.
 * @param reason - Promise target if process has a zero return code.
 * @param callback - Optional function to call of process has successfully
 * finished.
 * @returns Process close handler function.
 */var getProcessCloseHandler=function getProcessCloseHandler(resolve,reject,reason,callback){if(reason===void 0){reason=null}if(callback===void 0){callback=_context_js__WEBPACK_IMPORTED_MODULE_0__/* .NOOP */ .tE}var finished=false;return function(returnCode){if(finished)finished=true;else{finished=true;for(var _len=arguments.length,parameters=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){parameters[_key-1]=arguments[_key]}if(typeof returnCode!=="number"||returnCode===0){callback();resolve({reason:reason,parameters:parameters})}else{var error=new Error("Task exited with error code ".concat(String(returnCode)));error.returnCode=returnCode;error.parameters=parameters;reject(error)}}}};/**
 * Forwards given child process communication channels to corresponding current
 * process communication channels.
 * @param childProcess - Child process meta data.
 * @returns Given child process meta data.
 */var handleChildProcess=function handleChildProcess(childProcess){if(childProcess.stdout)childProcess.stdout.pipe(process.stdout);if(childProcess.stderr)childProcess.stderr.pipe(process.stderr);childProcess.on("close",function(returnCode){if(returnCode!==0)console.error("Task exited with error code ".concat(String(returnCode)))});return childProcess};

/***/ }),
/* 27 */
/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_345064__) {

/* harmony export */ __nested_webpack_require_345064__.d(__nested_webpack_exports__, {
/* harmony export */   Ez: function() { return /* binding */ determineUniqueScopeName; },
/* harmony export */   MX: function() { return /* binding */ UTILITY_SCOPE; },
/* harmony export */   Xw: function() { return /* binding */ UTILITY_SCOPE_VALUES; },
/* harmony export */   bG: function() { return /* binding */ UTILITY_SCOPE_NAMES; },
/* harmony export */   uf: function() { return /* binding */ isolateScope; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_345064__(0);
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_345064__(5);
/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_345064__(16);
/* harmony import */ var _datetime_js__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_345064__(17);
/* harmony import */ var _filesystem_js__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_345064__(12);
/* harmony import */ var _function_js__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_345064__(18);
/* harmony import */ var _indicators_js__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_345064__(4);
/* harmony import */ var _Logger_js__WEBPACK_IMPORTED_MODULE_7__ = __nested_webpack_require_345064__(15);
/* harmony import */ var _module_js__WEBPACK_IMPORTED_MODULE_8__ = __nested_webpack_require_345064__(2);
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_9__ = __nested_webpack_require_345064__(9);
/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_10__ = __nested_webpack_require_345064__(3);
/* harmony import */ var _string_js__WEBPACK_IMPORTED_MODULE_11__ = __nested_webpack_require_345064__(7);
/* harmony import */ var _utility_js__WEBPACK_IMPORTED_MODULE_12__ = __nested_webpack_require_345064__(13);
var _array_js__WEBPACK_IMPORTED_MODULE_2___namespace_object = {};
__nested_webpack_require_345064__.r(_array_js__WEBPACK_IMPORTED_MODULE_2___namespace_object);
__nested_webpack_require_345064__.d(_array_js__WEBPACK_IMPORTED_MODULE_2___namespace_object, {
	aggregatePropertyIfEqual: function() { return _array_js__WEBPACK_IMPORTED_MODULE_2__.ST; },
	deleteEmptyItems: function() { return _array_js__WEBPACK_IMPORTED_MODULE_2__.dO; },
	extract: function() { return _array_js__WEBPACK_IMPORTED_MODULE_2__.o6; },
	extractIfMatches: function() { return _array_js__WEBPACK_IMPORTED_MODULE_2__.u7; },
	extractIfPropertyExists: function() { return _array_js__WEBPACK_IMPORTED_MODULE_2__.q6; },
	extractIfPropertyMatches: function() { return _array_js__WEBPACK_IMPORTED_MODULE_2__.Ht; },
	intersect: function() { return _array_js__WEBPACK_IMPORTED_MODULE_2__.y$; },
	makeArray: function() { return _array_js__WEBPACK_IMPORTED_MODULE_2__.gv; },
	makeRange: function() { return _array_js__WEBPACK_IMPORTED_MODULE_2__.QR; },
	merge: function() { return _array_js__WEBPACK_IMPORTED_MODULE_2__.h1; },
	paginate: function() { return _array_js__WEBPACK_IMPORTED_MODULE_2__.En; },
	permute: function() { return _array_js__WEBPACK_IMPORTED_MODULE_2__.Ny; },
	permuteLength: function() { return _array_js__WEBPACK_IMPORTED_MODULE_2__.bH; },
	removeArrayItem: function() { return _array_js__WEBPACK_IMPORTED_MODULE_2__.Hb; },
	sortTopological: function() { return _array_js__WEBPACK_IMPORTED_MODULE_2__.UX; },
	sumUpProperty: function() { return _array_js__WEBPACK_IMPORTED_MODULE_2__._2; },
	unique: function() { return _array_js__WEBPACK_IMPORTED_MODULE_2__.Am; }
});
var _datetime_js__WEBPACK_IMPORTED_MODULE_3___namespace_object = {};
__nested_webpack_require_345064__.r(_datetime_js__WEBPACK_IMPORTED_MODULE_3___namespace_object);
__nested_webpack_require_345064__.d(_datetime_js__WEBPACK_IMPORTED_MODULE_3___namespace_object, {
	DATE_TIME_PATTERN_CACHE: function() { return _datetime_js__WEBPACK_IMPORTED_MODULE_3__.hr; },
	dateTimeFormat: function() { return _datetime_js__WEBPACK_IMPORTED_MODULE_3__.LE; },
	interpretDateTime: function() { return _datetime_js__WEBPACK_IMPORTED_MODULE_3__.JZ; },
	normalizeDateTime: function() { return _datetime_js__WEBPACK_IMPORTED_MODULE_3__.DP; },
	sliceWeekday: function() { return _datetime_js__WEBPACK_IMPORTED_MODULE_3__.jJ; }
});
var _filesystem_js__WEBPACK_IMPORTED_MODULE_4___namespace_object = {};
__nested_webpack_require_345064__.r(_filesystem_js__WEBPACK_IMPORTED_MODULE_4___namespace_object);
__nested_webpack_require_345064__.d(_filesystem_js__WEBPACK_IMPORTED_MODULE_4___namespace_object, {
	copyDirectoryRecursive: function() { return _filesystem_js__WEBPACK_IMPORTED_MODULE_4__.vX; },
	copyDirectoryRecursiveSync: function() { return _filesystem_js__WEBPACK_IMPORTED_MODULE_4__.uD; },
	copyFile: function() { return _filesystem_js__WEBPACK_IMPORTED_MODULE_4__.m3; },
	copyFileSync: function() { return _filesystem_js__WEBPACK_IMPORTED_MODULE_4__.Xp; },
	importFilesystemAPI: function() { return _filesystem_js__WEBPACK_IMPORTED_MODULE_4__.L5; },
	imports: function() { return _filesystem_js__WEBPACK_IMPORTED_MODULE_4__.VW; },
	isDirectory: function() { return _filesystem_js__WEBPACK_IMPORTED_MODULE_4__.wd; },
	isDirectorySync: function() { return _filesystem_js__WEBPACK_IMPORTED_MODULE_4__.ZP; },
	isFile: function() { return _filesystem_js__WEBPACK_IMPORTED_MODULE_4__.fo; },
	isFileSync: function() { return _filesystem_js__WEBPACK_IMPORTED_MODULE_4__.WY; },
	walkDirectoryRecursively: function() { return _filesystem_js__WEBPACK_IMPORTED_MODULE_4__.y3; },
	walkDirectoryRecursivelySync: function() { return _filesystem_js__WEBPACK_IMPORTED_MODULE_4__.hu; }
});
var _function_js__WEBPACK_IMPORTED_MODULE_5___namespace_object = {};
__nested_webpack_require_345064__.r(_function_js__WEBPACK_IMPORTED_MODULE_5___namespace_object);
__nested_webpack_require_345064__.d(_function_js__WEBPACK_IMPORTED_MODULE_5___namespace_object, {
	getParameterNames: function() { return _function_js__WEBPACK_IMPORTED_MODULE_5__.Gj; },
	identity: function() { return _function_js__WEBPACK_IMPORTED_MODULE_5__.D_; },
	invertArrayFilter: function() { return _function_js__WEBPACK_IMPORTED_MODULE_5__.gH; }
});
var _indicators_js__WEBPACK_IMPORTED_MODULE_6___namespace_object = {};
__nested_webpack_require_345064__.r(_indicators_js__WEBPACK_IMPORTED_MODULE_6___namespace_object);
__nested_webpack_require_345064__.d(_indicators_js__WEBPACK_IMPORTED_MODULE_6___namespace_object, {
	isAnyMatching: function() { return _indicators_js__WEBPACK_IMPORTED_MODULE_6__.GP; },
	isArrayLike: function() { return _indicators_js__WEBPACK_IMPORTED_MODULE_6__.Xj; },
	isFunction: function() { return _indicators_js__WEBPACK_IMPORTED_MODULE_6__.Tn; },
	isMap: function() { return _indicators_js__WEBPACK_IMPORTED_MODULE_6__.jh; },
	isNumeric: function() { return _indicators_js__WEBPACK_IMPORTED_MODULE_6__.kf; },
	isObject: function() { return _indicators_js__WEBPACK_IMPORTED_MODULE_6__.Gv; },
	isPlainObject: function() { return _indicators_js__WEBPACK_IMPORTED_MODULE_6__.Qd; },
	isProxy: function() { return _indicators_js__WEBPACK_IMPORTED_MODULE_6__.ju; },
	isSet: function() { return _indicators_js__WEBPACK_IMPORTED_MODULE_6__.vM; },
	isWindow: function() { return _indicators_js__WEBPACK_IMPORTED_MODULE_6__.l6; }
});
var _Logger_js__WEBPACK_IMPORTED_MODULE_7___namespace_object = {};
__nested_webpack_require_345064__.r(_Logger_js__WEBPACK_IMPORTED_MODULE_7___namespace_object);
__nested_webpack_require_345064__.d(_Logger_js__WEBPACK_IMPORTED_MODULE_7___namespace_object, {
	LEVELS: function() { return _Logger_js__WEBPACK_IMPORTED_MODULE_7__.A_; },
	LEVELS_COLOR: function() { return _Logger_js__WEBPACK_IMPORTED_MODULE_7__.Wh; },
	Logger: function() { return _Logger_js__WEBPACK_IMPORTED_MODULE_7__.Vy; },
	"default": function() { return _Logger_js__WEBPACK_IMPORTED_MODULE_7__.Ay; }
});
var _module_js__WEBPACK_IMPORTED_MODULE_8___namespace_object = {};
__nested_webpack_require_345064__.r(_module_js__WEBPACK_IMPORTED_MODULE_8___namespace_object);
__nested_webpack_require_345064__.d(_module_js__WEBPACK_IMPORTED_MODULE_8___namespace_object, {
	clearRequireCache: function() { return _module_js__WEBPACK_IMPORTED_MODULE_8__.Ni; },
	currentRequire: function() { return _module_js__WEBPACK_IMPORTED_MODULE_8__.lE; },
	determineGlobalContext: function() { return _module_js__WEBPACK_IMPORTED_MODULE_8__.a8; },
	getCurrentRequire: function() { return _module_js__WEBPACK_IMPORTED_MODULE_8__.zM; },
	isImportSyntaxSupported: function() { return _module_js__WEBPACK_IMPORTED_MODULE_8__.xN; },
	isolatedRequire: function() { return _module_js__WEBPACK_IMPORTED_MODULE_8__.Dx; },
	optionalImport: function() { return _module_js__WEBPACK_IMPORTED_MODULE_8__.Sw; },
	optionalRequire: function() { return _module_js__WEBPACK_IMPORTED_MODULE_8__.I5; },
	setOptionalRequire: function() { return _module_js__WEBPACK_IMPORTED_MODULE_8__.SD; }
});
var _number_js__WEBPACK_IMPORTED_MODULE_9___namespace_object = {};
__nested_webpack_require_345064__.r(_number_js__WEBPACK_IMPORTED_MODULE_9___namespace_object);
__nested_webpack_require_345064__.d(_number_js__WEBPACK_IMPORTED_MODULE_9___namespace_object, {
	ceil: function() { return _number_js__WEBPACK_IMPORTED_MODULE_9__.mk; },
	floor: function() { return _number_js__WEBPACK_IMPORTED_MODULE_9__.RI; },
	getUTCTimestamp: function() { return _number_js__WEBPACK_IMPORTED_MODULE_9__.n$; },
	isNotANumber: function() { return _number_js__WEBPACK_IMPORTED_MODULE_9__.W2; },
	round: function() { return _number_js__WEBPACK_IMPORTED_MODULE_9__.LI; }
});
var _object_js__WEBPACK_IMPORTED_MODULE_10___namespace_object = {};
__nested_webpack_require_345064__.r(_object_js__WEBPACK_IMPORTED_MODULE_10___namespace_object);
__nested_webpack_require_345064__.d(_object_js__WEBPACK_IMPORTED_MODULE_10___namespace_object, {
	addDynamicGetterAndSetter: function() { return _object_js__WEBPACK_IMPORTED_MODULE_10__.QB; },
	convertCircularObjectToJSON: function() { return _object_js__WEBPACK_IMPORTED_MODULE_10__.zP; },
	convertMapToPlainObject: function() { return _object_js__WEBPACK_IMPORTED_MODULE_10__.oW; },
	convertPlainObjectToMap: function() { return _object_js__WEBPACK_IMPORTED_MODULE_10__.eQ; },
	convertSubstringInPlainObject: function() { return _object_js__WEBPACK_IMPORTED_MODULE_10__.dr; },
	copy: function() { return _object_js__WEBPACK_IMPORTED_MODULE_10__.C; },
	determineType: function() { return _object_js__WEBPACK_IMPORTED_MODULE_10__.Sj; },
	equals: function() { return _object_js__WEBPACK_IMPORTED_MODULE_10__.aI; },
	evaluateAsyncDynamicData: function() { return _object_js__WEBPACK_IMPORTED_MODULE_10__.Pi; },
	evaluateDynamicData: function() { return _object_js__WEBPACK_IMPORTED_MODULE_10__.J3; },
	extend: function() { return _object_js__WEBPACK_IMPORTED_MODULE_10__.X$; },
	getProxyHandler: function() { return _object_js__WEBPACK_IMPORTED_MODULE_10__.bo; },
	mask: function() { return _object_js__WEBPACK_IMPORTED_MODULE_10__.dK; },
	modifyObject: function() { return _object_js__WEBPACK_IMPORTED_MODULE_10__._2; },
	removeKeyPrefixes: function() { return _object_js__WEBPACK_IMPORTED_MODULE_10__.uu; },
	removeKeysInEvaluation: function() { return _object_js__WEBPACK_IMPORTED_MODULE_10__.iE; },
	represent: function() { return _object_js__WEBPACK_IMPORTED_MODULE_10__.Do; },
	sort: function() { return _object_js__WEBPACK_IMPORTED_MODULE_10__.di; },
	unwrapProxy: function() { return _object_js__WEBPACK_IMPORTED_MODULE_10__.q1; }
});
var _string_js__WEBPACK_IMPORTED_MODULE_11___namespace_object = {};
__nested_webpack_require_345064__.r(_string_js__WEBPACK_IMPORTED_MODULE_11___namespace_object);
__nested_webpack_require_345064__.d(_string_js__WEBPACK_IMPORTED_MODULE_11___namespace_object, {
	ALLOWED_STARTING_VARIABLE_SYMBOLS: function() { return _string_js__WEBPACK_IMPORTED_MODULE_11__.bM; },
	ALLOWED_VARIABLE_SYMBOLS: function() { return _string_js__WEBPACK_IMPORTED_MODULE_11__.aL; },
	AsyncFunction: function() { return _string_js__WEBPACK_IMPORTED_MODULE_11__.fS; },
	FIX_ENCODING_ERROR_MAPPING: function() { return _string_js__WEBPACK_IMPORTED_MODULE_11__.k7; },
	KNOWN_DISALLOWED_VARIABLE_NAMES_BUT_OBJECT_KEYS: function() { return _string_js__WEBPACK_IMPORTED_MODULE_11__._x; },
	POLYFILL_TEMPLATE_STRINGS: function() { return _string_js__WEBPACK_IMPORTED_MODULE_11__.Ud; },
	addSeparatorToPath: function() { return _string_js__WEBPACK_IMPORTED_MODULE_11__.p0; },
	camelCaseToDelimited: function() { return _string_js__WEBPACK_IMPORTED_MODULE_11__.h1; },
	capitalize: function() { return _string_js__WEBPACK_IMPORTED_MODULE_11__.ZH; },
	compile: function() { return _string_js__WEBPACK_IMPORTED_MODULE_11__.wE; },
	compressStyleValue: function() { return _string_js__WEBPACK_IMPORTED_MODULE_11__.v0; },
	convertToValidVariableName: function() { return _string_js__WEBPACK_IMPORTED_MODULE_11__.a$; },
	decodeHTMLEntities: function() { return _string_js__WEBPACK_IMPORTED_MODULE_11__.Lt; },
	delimitedToCamelCase: function() { return _string_js__WEBPACK_IMPORTED_MODULE_11__.XD; },
	encodeURIComponentExtended: function() { return _string_js__WEBPACK_IMPORTED_MODULE_11__.V5; },
	escapeRegularExpressions: function() { return _string_js__WEBPACK_IMPORTED_MODULE_11__.jt; },
	evaluate: function() { return _string_js__WEBPACK_IMPORTED_MODULE_11__._3; },
	evaluateOrThrowError: function() { return _string_js__WEBPACK_IMPORTED_MODULE_11__.VK; },
	findNormalizedMatchRange: function() { return _string_js__WEBPACK_IMPORTED_MODULE_11__.Tx; },
	fixKnownEncodingErrors: function() { return _string_js__WEBPACK_IMPORTED_MODULE_11__.pM; },
	format: function() { return _string_js__WEBPACK_IMPORTED_MODULE_11__.GP; },
	getDomainName: function() { return _string_js__WEBPACK_IMPORTED_MODULE_11__.Wq; },
	getEditDistance: function() { return _string_js__WEBPACK_IMPORTED_MODULE_11__.Un; },
	getPortNumber: function() { return _string_js__WEBPACK_IMPORTED_MODULE_11__.VU; },
	getProtocolName: function() { return _string_js__WEBPACK_IMPORTED_MODULE_11__.gB; },
	getURLParameter: function() { return _string_js__WEBPACK_IMPORTED_MODULE_11__.LK; },
	hasPathPrefix: function() { return _string_js__WEBPACK_IMPORTED_MODULE_11__.Yn; },
	limit: function() { return _string_js__WEBPACK_IMPORTED_MODULE_11__.AB; },
	lowerCase: function() { return _string_js__WEBPACK_IMPORTED_MODULE_11__.gQ; },
	mark: function() { return _string_js__WEBPACK_IMPORTED_MODULE_11__.Gy; },
	maskForRegularExpression: function() { return _string_js__WEBPACK_IMPORTED_MODULE_11__.W5; },
	normalizeDomNodeSelector: function() { return _string_js__WEBPACK_IMPORTED_MODULE_11__.RS; },
	normalizePhoneNumber: function() { return _string_js__WEBPACK_IMPORTED_MODULE_11__.h2; },
	normalizeURL: function() { return _string_js__WEBPACK_IMPORTED_MODULE_11__.dc; },
	normalizeZipCode: function() { return _string_js__WEBPACK_IMPORTED_MODULE_11__.K$; },
	parseEncodedObject: function() { return _string_js__WEBPACK_IMPORTED_MODULE_11__.jL; },
	representPhoneNumber: function() { return _string_js__WEBPACK_IMPORTED_MODULE_11__.KC; },
	representURL: function() { return _string_js__WEBPACK_IMPORTED_MODULE_11__.oz; },
	serviceURLEquals: function() { return _string_js__WEBPACK_IMPORTED_MODULE_11__._4; },
	sliceAllExceptNumberAndLastSeparator: function() { return _string_js__WEBPACK_IMPORTED_MODULE_11__.U7; }
});
var _utility_js__WEBPACK_IMPORTED_MODULE_12___namespace_object = {};
__nested_webpack_require_345064__.r(_utility_js__WEBPACK_IMPORTED_MODULE_12___namespace_object);
__nested_webpack_require_345064__.d(_utility_js__WEBPACK_IMPORTED_MODULE_12___namespace_object, {
	debounce: function() { return _utility_js__WEBPACK_IMPORTED_MODULE_12__.sg; },
	preventDefault: function() { return _utility_js__WEBPACK_IMPORTED_MODULE_12__.wo; },
	stopPropagation: function() { return _utility_js__WEBPACK_IMPORTED_MODULE_12__.dG; },
	timeout: function() { return _utility_js__WEBPACK_IMPORTED_MODULE_12__.wR; },
	trailingThrottle: function() { return _utility_js__WEBPACK_IMPORTED_MODULE_12__.p0; }
});
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module scope *//* !
    region header
    [Project page](https://torben.website/clientnode)

    Copyright Torben Sickert (info["~at~"]torben.website) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/var UTILITY_SCOPE={array:_array_js__WEBPACK_IMPORTED_MODULE_2___namespace_object,datetime:_datetime_js__WEBPACK_IMPORTED_MODULE_3___namespace_object,filesystem:_filesystem_js__WEBPACK_IMPORTED_MODULE_4___namespace_object,functions:_function_js__WEBPACK_IMPORTED_MODULE_5___namespace_object,indicators:_indicators_js__WEBPACK_IMPORTED_MODULE_6___namespace_object,logger:_Logger_js__WEBPACK_IMPORTED_MODULE_7___namespace_object,module:_module_js__WEBPACK_IMPORTED_MODULE_8___namespace_object,number:_number_js__WEBPACK_IMPORTED_MODULE_9___namespace_object,object:_object_js__WEBPACK_IMPORTED_MODULE_10___namespace_object,string:_string_js__WEBPACK_IMPORTED_MODULE_11___namespace_object,utility:_utility_js__WEBPACK_IMPORTED_MODULE_12___namespace_object};/*
    NOTE: Not generating these two arrays facilitates static code analysis in
    consuming code.
*/var UTILITY_SCOPE_NAMES=["array","datetime","filesystem","functions","indicators","logger","module","number","object","string","utility"];var UTILITY_SCOPE_VALUES=[_array_js__WEBPACK_IMPORTED_MODULE_2___namespace_object,_datetime_js__WEBPACK_IMPORTED_MODULE_3___namespace_object,_filesystem_js__WEBPACK_IMPORTED_MODULE_4___namespace_object,_function_js__WEBPACK_IMPORTED_MODULE_5___namespace_object,_indicators_js__WEBPACK_IMPORTED_MODULE_6___namespace_object,_Logger_js__WEBPACK_IMPORTED_MODULE_7___namespace_object,_module_js__WEBPACK_IMPORTED_MODULE_8___namespace_object,_number_js__WEBPACK_IMPORTED_MODULE_9___namespace_object,_object_js__WEBPACK_IMPORTED_MODULE_10___namespace_object,_string_js__WEBPACK_IMPORTED_MODULE_11___namespace_object,_utility_js__WEBPACK_IMPORTED_MODULE_12___namespace_object];/**
 * Overwrites all inherited variables from parent scope with "undefined".
 * @param scope - A scope where inherited names will be removed.
 * @param prefixesToIgnore - Name prefixes to ignore during deleting names in
 * given scope.
 * @returns The isolated scope.
 */var isolateScope=function isolateScope(scope,prefixesToIgnore){if(prefixesToIgnore===void 0){prefixesToIgnore=[]}for(var name in scope)if(!(prefixesToIgnore.includes(name.charAt(0))||["constructor","prototype","this"].includes(name)||Object.prototype.hasOwnProperty.call(scope,name)))/*
                NOTE: Delete ("delete $scope[name]") doesn't destroy the
                automatic lookup to parent scope.
            */scope[name]=undefined;return scope};/**
 * Generates a unique name in given scope (useful for jsonp requests).
 * @param prefix - A prefix which will be prepended to unique name.
 * @param suffix - A suffix which will be prepended to unique name.
 * @param scope - A scope where the name should be unique.
 * @param initialUniqueName - An initial scope name to use if not exists.
 * @returns The function name.
 */var determineUniqueScopeName=function determineUniqueScopeName(prefix,suffix,scope,initialUniqueName){if(prefix===void 0){prefix="callback"}if(suffix===void 0){suffix=""}if(scope===void 0){scope=_context_js__WEBPACK_IMPORTED_MODULE_1__/* .globalContext */ .Lz}if(initialUniqueName===void 0){initialUniqueName=""}if(initialUniqueName.length&&!(initialUniqueName in scope))return initialUniqueName;var uniqueName=prefix+suffix;for(var iteration=0;iteration<_context_js__WEBPACK_IMPORTED_MODULE_1__/* .MAXIMAL_NUMBER_OF_ITERATIONS */ .$Q.value;iteration++){uniqueName=prefix+String(Math.round(Math.random()*Math.pow(10,10)))+suffix;if(!(uniqueName in scope))break}return uniqueName};

/***/ }),
/* 28 */
/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_364524__) {

/* harmony export */ __nested_webpack_require_364524__.d(__nested_webpack_exports__, {
/* harmony export */   $Qt: function() { return /* reexport safe */ _context_js__WEBPACK_IMPORTED_MODULE_4__.$Q; },
/* harmony export */   $yZ: function() { return /* reexport safe */ _expression_index_js__WEBPACK_IMPORTED_MODULE_8__.$y; },
/* harmony export */   ABv: function() { return /* reexport safe */ _string_js__WEBPACK_IMPORTED_MODULE_17__.AB; },
/* harmony export */   A_Y: function() { return /* reexport safe */ _Logger_js__WEBPACK_IMPORTED_MODULE_18__.A_; },
/* harmony export */   AmM: function() { return /* reexport safe */ _array_js__WEBPACK_IMPORTED_MODULE_0__.Am; },
/* harmony export */   CHz: function() { return /* reexport safe */ _expression_index_js__WEBPACK_IMPORTED_MODULE_8__.CH; },
/* harmony export */   CJD: function() { return /* reexport safe */ _data_transfer_js__WEBPACK_IMPORTED_MODULE_6__.CJ; },
/* harmony export */   C_t: function() { return /* reexport safe */ _domNode_js__WEBPACK_IMPORTED_MODULE_1__.C_; },
/* harmony export */   Cal: function() { return /* reexport safe */ _object_js__WEBPACK_IMPORTED_MODULE_13__.C; },
/* harmony export */   CcH: function() { return /* reexport safe */ _domNode_js__WEBPACK_IMPORTED_MODULE_1__.Cc; },
/* harmony export */   CpF: function() { return /* reexport safe */ _expression_index_js__WEBPACK_IMPORTED_MODULE_8__.j4; },
/* harmony export */   Cpg: function() { return /* reexport safe */ _expression_index_js__WEBPACK_IMPORTED_MODULE_8__.Cp; },
/* harmony export */   D70: function() { return /* reexport safe */ _domNode_js__WEBPACK_IMPORTED_MODULE_1__.D7; },
/* harmony export */   DPF: function() { return /* reexport safe */ _datetime_js__WEBPACK_IMPORTED_MODULE_7__.DP; },
/* harmony export */   D_O: function() { return /* reexport safe */ _function_js__WEBPACK_IMPORTED_MODULE_10__.D_; },
/* harmony export */   DoQ: function() { return /* reexport safe */ _object_js__WEBPACK_IMPORTED_MODULE_13__.Do; },
/* harmony export */   Dx_: function() { return /* reexport safe */ _module_js__WEBPACK_IMPORTED_MODULE_15__.Dx; },
/* harmony export */   EnV: function() { return /* reexport safe */ _array_js__WEBPACK_IMPORTED_MODULE_0__.En; },
/* harmony export */   EzC: function() { return /* reexport safe */ _scope_js__WEBPACK_IMPORTED_MODULE_16__.Ez; },
/* harmony export */   F9T: function() { return /* reexport safe */ _expression_index_js__WEBPACK_IMPORTED_MODULE_8__.F9; },
/* harmony export */   FIJ: function() { return /* reexport safe */ _constants_js__WEBPACK_IMPORTED_MODULE_3__.FI; },
/* harmony export */   FmA: function() { return /* reexport safe */ _expression_index_js__WEBPACK_IMPORTED_MODULE_8__.Fm; },
/* harmony export */   FpT: function() { return /* reexport safe */ _constants_js__WEBPACK_IMPORTED_MODULE_3__.Fp; },
/* harmony export */   G3o: function() { return /* reexport safe */ _expression_index_js__WEBPACK_IMPORTED_MODULE_8__.G3; },
/* harmony export */   GPX: function() { return /* reexport safe */ _indicators_js__WEBPACK_IMPORTED_MODULE_11__.GP; },
/* harmony export */   GPZ: function() { return /* reexport safe */ _string_js__WEBPACK_IMPORTED_MODULE_17__.GP; },
/* harmony export */   GUh: function() { return /* reexport safe */ _constants_js__WEBPACK_IMPORTED_MODULE_3__.GU; },
/* harmony export */   Gcp: function() { return /* reexport safe */ _expression_index_js__WEBPACK_IMPORTED_MODULE_8__.Gc; },
/* harmony export */   GjK: function() { return /* reexport safe */ _function_js__WEBPACK_IMPORTED_MODULE_10__.Gj; },
/* harmony export */   Gvm: function() { return /* reexport safe */ _indicators_js__WEBPACK_IMPORTED_MODULE_11__.Gv; },
/* harmony export */   GyP: function() { return /* reexport safe */ _string_js__WEBPACK_IMPORTED_MODULE_17__.Gy; },
/* harmony export */   Gye: function() { return /* reexport safe */ _process_js__WEBPACK_IMPORTED_MODULE_14__.G; },
/* harmony export */   HCR: function() { return /* reexport safe */ _domNode_js__WEBPACK_IMPORTED_MODULE_1__.HC; },
/* harmony export */   HKz: function() { return /* reexport safe */ _expression_index_js__WEBPACK_IMPORTED_MODULE_8__.HK; },
/* harmony export */   Hb_: function() { return /* reexport safe */ _array_js__WEBPACK_IMPORTED_MODULE_0__.Hb; },
/* harmony export */   Hgw: function() { return /* reexport safe */ _expression_index_js__WEBPACK_IMPORTED_MODULE_8__.Hg; },
/* harmony export */   HtC: function() { return /* reexport safe */ _array_js__WEBPACK_IMPORTED_MODULE_0__.Ht; },
/* harmony export */   I5u: function() { return /* reexport safe */ _module_js__WEBPACK_IMPORTED_MODULE_15__.I5; },
/* harmony export */   Iyg: function() { return /* reexport safe */ _constants_js__WEBPACK_IMPORTED_MODULE_3__.Iy; },
/* harmony export */   J3U: function() { return /* reexport safe */ _object_js__WEBPACK_IMPORTED_MODULE_13__.J3; },
/* harmony export */   JZy: function() { return /* reexport safe */ _datetime_js__WEBPACK_IMPORTED_MODULE_7__.JZ; },
/* harmony export */   K$h: function() { return /* reexport safe */ _string_js__WEBPACK_IMPORTED_MODULE_17__.K$; },
/* harmony export */   KC: function() { return /* reexport safe */ _string_js__WEBPACK_IMPORTED_MODULE_17__.KC; },
/* harmony export */   L5n: function() { return /* reexport safe */ _filesystem_js__WEBPACK_IMPORTED_MODULE_9__.L5; },
/* harmony export */   LE6: function() { return /* reexport safe */ _datetime_js__WEBPACK_IMPORTED_MODULE_7__.LE; },
/* harmony export */   LIG: function() { return /* reexport safe */ _number_js__WEBPACK_IMPORTED_MODULE_12__.LI; },
/* harmony export */   LK5: function() { return /* reexport safe */ _string_js__WEBPACK_IMPORTED_MODULE_17__.LK; },
/* harmony export */   LV7: function() { return /* reexport safe */ _domNode_js__WEBPACK_IMPORTED_MODULE_1__.LV; },
/* harmony export */   Lbj: function() { return /* reexport safe */ _constants_js__WEBPACK_IMPORTED_MODULE_3__.Lb; },
/* harmony export */   Lmt: function() { return /* reexport safe */ _expression_index_js__WEBPACK_IMPORTED_MODULE_8__.Lm; },
/* harmony export */   LtR: function() { return /* reexport safe */ _string_js__WEBPACK_IMPORTED_MODULE_17__.Lt; },
/* harmony export */   Lz6: function() { return /* reexport safe */ _context_js__WEBPACK_IMPORTED_MODULE_4__.Lz; },
/* harmony export */   MPP: function() { return /* reexport safe */ _expression_index_js__WEBPACK_IMPORTED_MODULE_8__.MP; },
/* harmony export */   MXd: function() { return /* reexport safe */ _scope_js__WEBPACK_IMPORTED_MODULE_16__.MX; },
/* harmony export */   NiH: function() { return /* reexport safe */ _module_js__WEBPACK_IMPORTED_MODULE_15__.Ni; },
/* harmony export */   Ny6: function() { return /* reexport safe */ _array_js__WEBPACK_IMPORTED_MODULE_0__.Ny; },
/* harmony export */   O4d: function() { return /* reexport safe */ _expression_index_js__WEBPACK_IMPORTED_MODULE_8__.O4; },
/* harmony export */   PiL: function() { return /* reexport safe */ _object_js__WEBPACK_IMPORTED_MODULE_13__.Pi; },
/* harmony export */   Plz: function() { return /* reexport safe */ _expression_index_js__WEBPACK_IMPORTED_MODULE_8__.Pl; },
/* harmony export */   Q2$: function() { return /* reexport safe */ _expression_index_js__WEBPACK_IMPORTED_MODULE_8__.Q2; },
/* harmony export */   QB1: function() { return /* reexport safe */ _data_transfer_js__WEBPACK_IMPORTED_MODULE_6__.QB; },
/* harmony export */   QBp: function() { return /* reexport safe */ _object_js__WEBPACK_IMPORTED_MODULE_13__.QB; },
/* harmony export */   QH2: function() { return /* reexport safe */ _context_js__WEBPACK_IMPORTED_MODULE_4__.QH; },
/* harmony export */   QR5: function() { return /* reexport safe */ _array_js__WEBPACK_IMPORTED_MODULE_0__.QR; },
/* harmony export */   QdQ: function() { return /* reexport safe */ _indicators_js__WEBPACK_IMPORTED_MODULE_11__.Qd; },
/* harmony export */   RIf: function() { return /* reexport safe */ _number_js__WEBPACK_IMPORTED_MODULE_12__.RI; },
/* harmony export */   RSk: function() { return /* reexport safe */ _string_js__WEBPACK_IMPORTED_MODULE_17__.RS; },
/* harmony export */   Ri8: function() { return /* reexport safe */ _cookie_js__WEBPACK_IMPORTED_MODULE_5__.Ri; },
/* harmony export */   Rvh: function() { return /* reexport safe */ _domNode_js__WEBPACK_IMPORTED_MODULE_1__.Rv; },
/* harmony export */   SDh: function() { return /* reexport safe */ _module_js__WEBPACK_IMPORTED_MODULE_15__.SD; },
/* harmony export */   STO: function() { return /* reexport safe */ _array_js__WEBPACK_IMPORTED_MODULE_0__.ST; },
/* harmony export */   Sai: function() { return /* reexport safe */ _domNode_js__WEBPACK_IMPORTED_MODULE_1__.S; },
/* harmony export */   Sjp: function() { return /* reexport safe */ _object_js__WEBPACK_IMPORTED_MODULE_13__.Sj; },
/* harmony export */   Swo: function() { return /* reexport safe */ _module_js__WEBPACK_IMPORTED_MODULE_15__.Sw; },
/* harmony export */   TVt: function() { return /* reexport safe */ _cookie_js__WEBPACK_IMPORTED_MODULE_5__.TV; },
/* harmony export */   Tnt: function() { return /* reexport safe */ _indicators_js__WEBPACK_IMPORTED_MODULE_11__.Tn; },
/* harmony export */   Txh: function() { return /* reexport safe */ _string_js__WEBPACK_IMPORTED_MODULE_17__.Tx; },
/* harmony export */   U7e: function() { return /* reexport safe */ _string_js__WEBPACK_IMPORTED_MODULE_17__.U7; },
/* harmony export */   UKu: function() { return /* reexport safe */ _domNode_js__WEBPACK_IMPORTED_MODULE_1__.UK; },
/* harmony export */   UXV: function() { return /* reexport safe */ _array_js__WEBPACK_IMPORTED_MODULE_0__.UX; },
/* harmony export */   Ud8: function() { return /* reexport safe */ _string_js__WEBPACK_IMPORTED_MODULE_17__.Ud; },
/* harmony export */   UnK: function() { return /* reexport safe */ _string_js__WEBPACK_IMPORTED_MODULE_17__.Un; },
/* harmony export */   V5V: function() { return /* reexport safe */ _string_js__WEBPACK_IMPORTED_MODULE_17__.V5; },
/* harmony export */   VGy: function() { return /* reexport safe */ _domNode_js__WEBPACK_IMPORTED_MODULE_1__.VG; },
/* harmony export */   VK1: function() { return /* reexport safe */ _string_js__WEBPACK_IMPORTED_MODULE_17__.VK; },
/* harmony export */   VU: function() { return /* reexport safe */ _string_js__WEBPACK_IMPORTED_MODULE_17__.VU; },
/* harmony export */   VWk: function() { return /* reexport safe */ _filesystem_js__WEBPACK_IMPORTED_MODULE_9__.VW; },
/* harmony export */   Vxr: function() { return /* reexport safe */ _constants_js__WEBPACK_IMPORTED_MODULE_3__.Vx; },
/* harmony export */   VyI: function() { return /* reexport safe */ _Logger_js__WEBPACK_IMPORTED_MODULE_18__.Vy; },
/* harmony export */   W2K: function() { return /* reexport safe */ _number_js__WEBPACK_IMPORTED_MODULE_12__.W2; },
/* harmony export */   W5V: function() { return /* reexport safe */ _string_js__WEBPACK_IMPORTED_MODULE_17__.W5; },
/* harmony export */   WYL: function() { return /* reexport safe */ _filesystem_js__WEBPACK_IMPORTED_MODULE_9__.WY; },
/* harmony export */   WhR: function() { return /* reexport safe */ _Logger_js__WEBPACK_IMPORTED_MODULE_18__.Wh; },
/* harmony export */   WqZ: function() { return /* reexport safe */ _string_js__WEBPACK_IMPORTED_MODULE_17__.Wq; },
/* harmony export */   X$i: function() { return /* reexport safe */ _object_js__WEBPACK_IMPORTED_MODULE_13__.X$; },
/* harmony export */   XD1: function() { return /* reexport safe */ _string_js__WEBPACK_IMPORTED_MODULE_17__.XD; },
/* harmony export */   Xj4: function() { return /* reexport safe */ _indicators_js__WEBPACK_IMPORTED_MODULE_11__.Xj; },
/* harmony export */   XnV: function() { return /* reexport safe */ _domNode_js__WEBPACK_IMPORTED_MODULE_1__.Xn; },
/* harmony export */   XpE: function() { return /* reexport safe */ _filesystem_js__WEBPACK_IMPORTED_MODULE_9__.Xp; },
/* harmony export */   Xwj: function() { return /* reexport safe */ _scope_js__WEBPACK_IMPORTED_MODULE_16__.Xw; },
/* harmony export */   YG: function() { return /* reexport safe */ _expression_index_js__WEBPACK_IMPORTED_MODULE_8__.YG; },
/* harmony export */   YNy: function() { return /* reexport safe */ _expression_index_js__WEBPACK_IMPORTED_MODULE_8__.YN; },
/* harmony export */   YZc: function() { return /* reexport safe */ _constants_js__WEBPACK_IMPORTED_MODULE_3__.YZ; },
/* harmony export */   Yj7: function() { return /* reexport safe */ _cookie_js__WEBPACK_IMPORTED_MODULE_5__.Yj; },
/* harmony export */   Yn1: function() { return /* reexport safe */ _string_js__WEBPACK_IMPORTED_MODULE_17__.Yn; },
/* harmony export */   Z9G: function() { return /* reexport safe */ _expression_index_js__WEBPACK_IMPORTED_MODULE_8__.Z9; },
/* harmony export */   ZF5: function() { return /* reexport safe */ _expression_index_js__WEBPACK_IMPORTED_MODULE_8__.ZF; },
/* harmony export */   ZHe: function() { return /* reexport safe */ _string_js__WEBPACK_IMPORTED_MODULE_17__.ZH; },
/* harmony export */   ZIk: function() { return /* reexport safe */ _expression_index_js__WEBPACK_IMPORTED_MODULE_8__.ZI; },
/* harmony export */   ZPH: function() { return /* reexport safe */ _filesystem_js__WEBPACK_IMPORTED_MODULE_9__.ZP; },
/* harmony export */   ZQM: function() { return /* reexport safe */ _domNode_js__WEBPACK_IMPORTED_MODULE_1__.ZQ; },
/* harmony export */   Zxe: function() { return /* reexport safe */ _data_transfer_js__WEBPACK_IMPORTED_MODULE_6__.Zx; },
/* harmony export */   _2M: function() { return /* reexport safe */ _object_js__WEBPACK_IMPORTED_MODULE_13__._2; },
/* harmony export */   _2j: function() { return /* reexport safe */ _array_js__WEBPACK_IMPORTED_MODULE_0__._2; },
/* harmony export */   _3z: function() { return /* reexport safe */ _string_js__WEBPACK_IMPORTED_MODULE_17__._3; },
/* harmony export */   _4_: function() { return /* reexport safe */ _string_js__WEBPACK_IMPORTED_MODULE_17__._4; },
/* harmony export */   _xl: function() { return /* reexport safe */ _string_js__WEBPACK_IMPORTED_MODULE_17__._x; },
/* harmony export */   a$v: function() { return /* reexport safe */ _string_js__WEBPACK_IMPORTED_MODULE_17__.a$; },
/* harmony export */   a85: function() { return /* reexport safe */ _module_js__WEBPACK_IMPORTED_MODULE_15__.a8; },
/* harmony export */   aIS: function() { return /* reexport safe */ _object_js__WEBPACK_IMPORTED_MODULE_13__.aI; },
/* harmony export */   aLL: function() { return /* reexport safe */ _string_js__WEBPACK_IMPORTED_MODULE_17__.aL; },
/* harmony export */   bCg: function() { return /* reexport safe */ _expression_index_js__WEBPACK_IMPORTED_MODULE_8__.bC; },
/* harmony export */   bF9: function() { return /* reexport safe */ _expression_index_js__WEBPACK_IMPORTED_MODULE_8__.bF; },
/* harmony export */   bGc: function() { return /* reexport safe */ _scope_js__WEBPACK_IMPORTED_MODULE_16__.bG; },
/* harmony export */   bHv: function() { return /* reexport safe */ _array_js__WEBPACK_IMPORTED_MODULE_0__.bH; },
/* harmony export */   bMn: function() { return /* reexport safe */ _string_js__WEBPACK_IMPORTED_MODULE_17__.bM; },
/* harmony export */   bQE: function() { return /* reexport safe */ _expression_index_js__WEBPACK_IMPORTED_MODULE_8__.bQ; },
/* harmony export */   boz: function() { return /* reexport safe */ _object_js__WEBPACK_IMPORTED_MODULE_13__.bo; },
/* harmony export */   cB6: function() { return /* reexport safe */ _expression_index_js__WEBPACK_IMPORTED_MODULE_8__.Ld; },
/* harmony export */   cBX: function() { return /* reexport safe */ _expression_index_js__WEBPACK_IMPORTED_MODULE_8__.cB; },
/* harmony export */   c_I: function() { return /* reexport safe */ _constants_js__WEBPACK_IMPORTED_MODULE_3__.c_; },
/* harmony export */   dGi: function() { return /* reexport safe */ _utility_js__WEBPACK_IMPORTED_MODULE_19__.dG; },
/* harmony export */   dK4: function() { return /* reexport safe */ _domNode_js__WEBPACK_IMPORTED_MODULE_1__.dK; },
/* harmony export */   dKf: function() { return /* reexport safe */ _object_js__WEBPACK_IMPORTED_MODULE_13__.dK; },
/* harmony export */   dO3: function() { return /* reexport safe */ _array_js__WEBPACK_IMPORTED_MODULE_0__.dO; },
/* harmony export */   dcF: function() { return /* reexport safe */ _string_js__WEBPACK_IMPORTED_MODULE_17__.dc; },
/* harmony export */   diJ: function() { return /* reexport safe */ _object_js__WEBPACK_IMPORTED_MODULE_13__.di; },
/* harmony export */   drT: function() { return /* reexport safe */ _object_js__WEBPACK_IMPORTED_MODULE_13__.dr; },
/* harmony export */   dy: function() { return /* reexport safe */ _constants_js__WEBPACK_IMPORTED_MODULE_3__.dy; },
/* harmony export */   eQA: function() { return /* reexport safe */ _object_js__WEBPACK_IMPORTED_MODULE_13__.eQ; },
/* harmony export */   f7_: function() { return /* reexport safe */ _expression_index_js__WEBPACK_IMPORTED_MODULE_8__.f7; },
/* harmony export */   fGw: function() { return /* reexport safe */ _expression_index_js__WEBPACK_IMPORTED_MODULE_8__.fG; },
/* harmony export */   fSi: function() { return /* reexport safe */ _string_js__WEBPACK_IMPORTED_MODULE_17__.fS; },
/* harmony export */   fo6: function() { return /* reexport safe */ _filesystem_js__WEBPACK_IMPORTED_MODULE_9__.fo; },
/* harmony export */   g6W: function() { return /* reexport safe */ _expression_index_js__WEBPACK_IMPORTED_MODULE_8__.g6; },
/* harmony export */   gBH: function() { return /* reexport safe */ _string_js__WEBPACK_IMPORTED_MODULE_17__.gB; },
/* harmony export */   gHf: function() { return /* reexport safe */ _function_js__WEBPACK_IMPORTED_MODULE_10__.gH; },
/* harmony export */   gQT: function() { return /* reexport safe */ _string_js__WEBPACK_IMPORTED_MODULE_17__.gQ; },
/* harmony export */   gvj: function() { return /* reexport safe */ _array_js__WEBPACK_IMPORTED_MODULE_0__.gv; },
/* harmony export */   h1I: function() { return /* reexport safe */ _array_js__WEBPACK_IMPORTED_MODULE_0__.h1; },
/* harmony export */   h1R: function() { return /* reexport safe */ _string_js__WEBPACK_IMPORTED_MODULE_17__.h1; },
/* harmony export */   h2u: function() { return /* reexport safe */ _string_js__WEBPACK_IMPORTED_MODULE_17__.h2; },
/* harmony export */   hrV: function() { return /* reexport safe */ _datetime_js__WEBPACK_IMPORTED_MODULE_7__.hr; },
/* harmony export */   hue: function() { return /* reexport safe */ _filesystem_js__WEBPACK_IMPORTED_MODULE_9__.hu; },
/* harmony export */   iEp: function() { return /* reexport safe */ _object_js__WEBPACK_IMPORTED_MODULE_13__.iE; },
/* harmony export */   j0_: function() { return /* reexport safe */ _expression_index_js__WEBPACK_IMPORTED_MODULE_8__.j0; },
/* harmony export */   jEx: function() { return /* reexport safe */ _constants_js__WEBPACK_IMPORTED_MODULE_3__.jE; },
/* harmony export */   jGn: function() { return /* reexport safe */ _constants_js__WEBPACK_IMPORTED_MODULE_3__.jG; },
/* harmony export */   jJA: function() { return /* reexport safe */ _datetime_js__WEBPACK_IMPORTED_MODULE_7__.jJ; },
/* harmony export */   jLw: function() { return /* reexport safe */ _string_js__WEBPACK_IMPORTED_MODULE_17__.jL; },
/* harmony export */   jft: function() { return /* reexport safe */ _constants_js__WEBPACK_IMPORTED_MODULE_3__.jf; },
/* harmony export */   jgV: function() { return /* reexport safe */ _constants_js__WEBPACK_IMPORTED_MODULE_3__.jg; },
/* harmony export */   jhc: function() { return /* reexport safe */ _indicators_js__WEBPACK_IMPORTED_MODULE_11__.jh; },
/* harmony export */   jtP: function() { return /* reexport safe */ _string_js__WEBPACK_IMPORTED_MODULE_17__.jt; },
/* harmony export */   ju_: function() { return /* reexport safe */ _indicators_js__WEBPACK_IMPORTED_MODULE_11__.ju; },
/* harmony export */   k7H: function() { return /* reexport safe */ _string_js__WEBPACK_IMPORTED_MODULE_17__.k7; },
/* harmony export */   kf$: function() { return /* reexport safe */ _indicators_js__WEBPACK_IMPORTED_MODULE_11__.kf; },
/* harmony export */   kpl: function() { return /* reexport safe */ _domNode_js__WEBPACK_IMPORTED_MODULE_1__.kp; },
/* harmony export */   l2f: function() { return /* reexport safe */ _domNode_js__WEBPACK_IMPORTED_MODULE_1__.l2; },
/* harmony export */   l6U: function() { return /* reexport safe */ _indicators_js__WEBPACK_IMPORTED_MODULE_11__.l6; },
/* harmony export */   lE: function() { return /* reexport safe */ _module_js__WEBPACK_IMPORTED_MODULE_15__.lE; },
/* harmony export */   l_R: function() { return /* reexport safe */ _cli_js__WEBPACK_IMPORTED_MODULE_2__.l; },
/* harmony export */   lp4: function() { return /* reexport safe */ _expression_index_js__WEBPACK_IMPORTED_MODULE_8__.lp; },
/* harmony export */   m3v: function() { return /* reexport safe */ _filesystem_js__WEBPACK_IMPORTED_MODULE_9__.m3; },
/* harmony export */   mkO: function() { return /* reexport safe */ _number_js__WEBPACK_IMPORTED_MODULE_12__.mk; },
/* harmony export */   mlT: function() { return /* reexport safe */ _expression_index_js__WEBPACK_IMPORTED_MODULE_8__.ml; },
/* harmony export */   n$t: function() { return /* reexport safe */ _number_js__WEBPACK_IMPORTED_MODULE_12__.n$; },
/* harmony export */   o6p: function() { return /* reexport safe */ _array_js__WEBPACK_IMPORTED_MODULE_0__.o6; },
/* harmony export */   oAg: function() { return /* reexport safe */ _domNode_js__WEBPACK_IMPORTED_MODULE_1__.oA; },
/* harmony export */   oWd: function() { return /* reexport safe */ _object_js__WEBPACK_IMPORTED_MODULE_13__.oW; },
/* harmony export */   ozN: function() { return /* reexport safe */ _string_js__WEBPACK_IMPORTED_MODULE_17__.oz; },
/* harmony export */   p06: function() { return /* reexport safe */ _utility_js__WEBPACK_IMPORTED_MODULE_19__.p0; },
/* harmony export */   p0o: function() { return /* reexport safe */ _string_js__WEBPACK_IMPORTED_MODULE_17__.p0; },
/* harmony export */   pMn: function() { return /* reexport safe */ _string_js__WEBPACK_IMPORTED_MODULE_17__.pM; },
/* harmony export */   p_N: function() { return /* reexport safe */ _constants_js__WEBPACK_IMPORTED_MODULE_3__.p_; },
/* harmony export */   q1l: function() { return /* reexport safe */ _object_js__WEBPACK_IMPORTED_MODULE_13__.q1; },
/* harmony export */   q4_: function() { return /* reexport safe */ _domNode_js__WEBPACK_IMPORTED_MODULE_1__.q4; },
/* harmony export */   q6J: function() { return /* reexport safe */ _array_js__WEBPACK_IMPORTED_MODULE_0__.q6; },
/* harmony export */   qAE: function() { return /* reexport safe */ _process_js__WEBPACK_IMPORTED_MODULE_14__.q; },
/* harmony export */   qGl: function() { return /* reexport safe */ _domNode_js__WEBPACK_IMPORTED_MODULE_1__.qG; },
/* harmony export */   qqP: function() { return /* reexport safe */ _domNode_js__WEBPACK_IMPORTED_MODULE_1__.qq; },
/* harmony export */   rbM: function() { return /* reexport safe */ _expression_index_js__WEBPACK_IMPORTED_MODULE_8__.rb; },
/* harmony export */   rqe: function() { return /* reexport safe */ _constants_js__WEBPACK_IMPORTED_MODULE_3__.rq; },
/* harmony export */   sg1: function() { return /* reexport safe */ _utility_js__WEBPACK_IMPORTED_MODULE_19__.sg; },
/* harmony export */   tEg: function() { return /* reexport safe */ _context_js__WEBPACK_IMPORTED_MODULE_4__.tE; },
/* harmony export */   u7e: function() { return /* reexport safe */ _array_js__WEBPACK_IMPORTED_MODULE_0__.u7; },
/* harmony export */   uDW: function() { return /* reexport safe */ _filesystem_js__WEBPACK_IMPORTED_MODULE_9__.uD; },
/* harmony export */   uJx: function() { return /* reexport safe */ _constants_js__WEBPACK_IMPORTED_MODULE_3__.uJ; },
/* harmony export */   ufo: function() { return /* reexport safe */ _scope_js__WEBPACK_IMPORTED_MODULE_16__.uf; },
/* harmony export */   uuH: function() { return /* reexport safe */ _object_js__WEBPACK_IMPORTED_MODULE_13__.uu; },
/* harmony export */   v0e: function() { return /* reexport safe */ _string_js__WEBPACK_IMPORTED_MODULE_17__.v0; },
/* harmony export */   vMM: function() { return /* reexport safe */ _indicators_js__WEBPACK_IMPORTED_MODULE_11__.vM; },
/* harmony export */   vXz: function() { return /* reexport safe */ _filesystem_js__WEBPACK_IMPORTED_MODULE_9__.vX; },
/* harmony export */   wEV: function() { return /* reexport safe */ _string_js__WEBPACK_IMPORTED_MODULE_17__.wE; },
/* harmony export */   wRz: function() { return /* reexport safe */ _utility_js__WEBPACK_IMPORTED_MODULE_19__.wR; },
/* harmony export */   wTB: function() { return /* reexport safe */ _domNode_js__WEBPACK_IMPORTED_MODULE_1__.wT; },
/* harmony export */   wdB: function() { return /* reexport safe */ _filesystem_js__WEBPACK_IMPORTED_MODULE_9__.wd; },
/* harmony export */   woC: function() { return /* reexport safe */ _utility_js__WEBPACK_IMPORTED_MODULE_19__.wo; },
/* harmony export */   xNv: function() { return /* reexport safe */ _module_js__WEBPACK_IMPORTED_MODULE_15__.xN; },
/* harmony export */   xkW: function() { return /* reexport safe */ _expression_index_js__WEBPACK_IMPORTED_MODULE_8__.xk; },
/* harmony export */   y$5: function() { return /* reexport safe */ _array_js__WEBPACK_IMPORTED_MODULE_0__.y$; },
/* harmony export */   y3h: function() { return /* reexport safe */ _filesystem_js__WEBPACK_IMPORTED_MODULE_9__.y3; },
/* harmony export */   yfJ: function() { return /* reexport safe */ _expression_index_js__WEBPACK_IMPORTED_MODULE_8__.yf; },
/* harmony export */   zMs: function() { return /* reexport safe */ _module_js__WEBPACK_IMPORTED_MODULE_15__.zM; },
/* harmony export */   zPE: function() { return /* reexport safe */ _object_js__WEBPACK_IMPORTED_MODULE_13__.zP; },
/* harmony export */   zm2: function() { return /* reexport safe */ _context_js__WEBPACK_IMPORTED_MODULE_4__.zm; }
/* harmony export */ });
/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_364524__(16);
/* harmony import */ var _domNode_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_364524__(25);
/* harmony import */ var _cli_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_364524__(22);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_364524__(1);
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_364524__(5);
/* harmony import */ var _cookie_js__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_364524__(23);
/* harmony import */ var _data_transfer_js__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_364524__(24);
/* harmony import */ var _datetime_js__WEBPACK_IMPORTED_MODULE_7__ = __nested_webpack_require_364524__(17);
/* harmony import */ var _expression_index_js__WEBPACK_IMPORTED_MODULE_8__ = __nested_webpack_require_364524__(21);
/* harmony import */ var _filesystem_js__WEBPACK_IMPORTED_MODULE_9__ = __nested_webpack_require_364524__(12);
/* harmony import */ var _function_js__WEBPACK_IMPORTED_MODULE_10__ = __nested_webpack_require_364524__(18);
/* harmony import */ var _indicators_js__WEBPACK_IMPORTED_MODULE_11__ = __nested_webpack_require_364524__(4);
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_12__ = __nested_webpack_require_364524__(9);
/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_13__ = __nested_webpack_require_364524__(3);
/* harmony import */ var _process_js__WEBPACK_IMPORTED_MODULE_14__ = __nested_webpack_require_364524__(26);
/* harmony import */ var _module_js__WEBPACK_IMPORTED_MODULE_15__ = __nested_webpack_require_364524__(2);
/* harmony import */ var _scope_js__WEBPACK_IMPORTED_MODULE_16__ = __nested_webpack_require_364524__(27);
/* harmony import */ var _string_js__WEBPACK_IMPORTED_MODULE_17__ = __nested_webpack_require_364524__(7);
/* harmony import */ var _Logger_js__WEBPACK_IMPORTED_MODULE_18__ = __nested_webpack_require_364524__(15);
/* harmony import */ var _utility_js__WEBPACK_IMPORTED_MODULE_19__ = __nested_webpack_require_364524__(13);
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module clientnode *//* !
    region header
    [Project page](https://torben.website/clientnode)

    Copyright Torben Sickert (info["~at~"]torben.website) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/

/***/ })
/******/ ]);
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __nested_webpack_require_392622__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		id: moduleId,
/******/ 		loaded: false,
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_392622__);
/******/ 
/******/ 	// Flag the module as loaded
/******/ 	module.loaded = true;
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/******/ // expose the module cache
/******/ __nested_webpack_require_392622__.c = __webpack_module_cache__;
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ !function() {
/******/ 	// define getter/value functions for harmony exports
/******/ 	__nested_webpack_require_392622__.d = function(exports, definition) {
/******/ 		if(Array.isArray(definition)) {
/******/ 			var i = 0;
/******/ 			while(i < definition.length) {
/******/ 				var key = definition[i++];
/******/ 				var binding = definition[i++];
/******/ 				if(!__nested_webpack_require_392622__.o(exports, key)) {
/******/ 					if(binding === 0) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 					} else {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 					}
/******/ 				} else if(binding === 0) { i++; }
/******/ 			}
/******/ 		} else {
/******/ 			for(var key in definition) {
/******/ 				if(__nested_webpack_require_392622__.o(definition, key) && !__nested_webpack_require_392622__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	};
/******/ }();
/******/ 
/******/ /* webpack/runtime/global */
/******/ !function() {
/******/ 	__nested_webpack_require_392622__.g = (function() {
/******/ 		if (typeof globalThis === 'object') return globalThis;
/******/ 		try {
/******/ 			return this || new Function('return this')();
/******/ 		} catch (e) {
/******/ 			if (typeof window === 'object') return window;
/******/ 		}
/******/ 	})();
/******/ }();
/******/ 
/******/ /* webpack/runtime/harmony module decorator */
/******/ !function() {
/******/ 	__nested_webpack_require_392622__.hmd = function(module) {
/******/ 		module = Object.create(module);
/******/ 		if (!module.children) module.children = [];
/******/ 		Object.defineProperty(module, 'exports', {
/******/ 			enumerable: true,
/******/ 			set: function() {
/******/ 				throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 			}
/******/ 		});
/******/ 		return module;
/******/ 	};
/******/ }();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ !function() {
/******/ 	__nested_webpack_require_392622__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ }();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ !function() {
/******/ 	// define __esModule on exports
/******/ 	__nested_webpack_require_392622__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ }();
/******/ 
/************************************************************************/
/******/ 
/******/ // module cache are used so entry inlining is disabled
/******/ // startup
/******/ // Load entry module and return exports
/******/ var __nested_webpack_exports__ = __nested_webpack_require_392622__(28);
/******/ var __webpack_exports__ABBREVIATIONS = __nested_webpack_exports__.Iyg;
/******/ var __webpack_exports__ALLOWED_STARTING_VARIABLE_SYMBOLS = __nested_webpack_exports__.bMn;
/******/ var __webpack_exports__ALLOWED_VARIABLE_SYMBOLS = __nested_webpack_exports__.aLL;
/******/ var __webpack_exports__ANIMATION_END_EVENT_NAMES = __nested_webpack_exports__.Vxr;
/******/ var __webpack_exports__AsyncFunction = __nested_webpack_exports__.fSi;
/******/ var __webpack_exports__CLASS_TO_TYPE_MAPPING = __nested_webpack_exports__.rqe;
/******/ var __webpack_exports__CLI_COLOR = __nested_webpack_exports__.l_R;
/******/ var __webpack_exports__CLOSE_EVENT_NAMES = __nested_webpack_exports__.jGn;
/******/ var __webpack_exports__CONSOLE_METHODS = __nested_webpack_exports__.jgV;
/******/ var __webpack_exports__DATE_TIME_PATTERN_CACHE = __nested_webpack_exports__.hrV;
/******/ var __webpack_exports__DEFAULT_ENCODING = __nested_webpack_exports__.uJx;
/******/ var __webpack_exports__DEFAULT_OPTIONS = __nested_webpack_exports__.lp4;
/******/ var __webpack_exports__FIX_ENCODING_ERROR_MAPPING = __nested_webpack_exports__.k7H;
/******/ var __webpack_exports__IGNORE_NULL_AND_UNDEFINED_SYMBOL = __nested_webpack_exports__.p_N;
/******/ var __webpack_exports__KEYBOARD_CODES = __nested_webpack_exports__.dy;
/******/ var __webpack_exports__KEY_CODES = __nested_webpack_exports__.Lbj;
/******/ var __webpack_exports__KNOWN_DISALLOWED_VARIABLE_NAMES_BUT_OBJECT_KEYS = __nested_webpack_exports__._xl;
/******/ var __webpack_exports__LEVELS = __nested_webpack_exports__.A_Y;
/******/ var __webpack_exports__LEVELS_COLOR = __nested_webpack_exports__.WhR;
/******/ var __webpack_exports__LOCALES = __nested_webpack_exports__.YZc;
/******/ var __webpack_exports__Lock = __nested_webpack_exports__.c_I;
/******/ var __webpack_exports__Logger = __nested_webpack_exports__.VyI;
/******/ var __webpack_exports__MANUAL_SCROLL_EVENT_NAMES = __nested_webpack_exports__.ZQM;
/******/ var __webpack_exports__MAXIMAL_NUMBER_OF_ITERATIONS = __nested_webpack_exports__.$Qt;
/******/ var __webpack_exports__NOOP = __nested_webpack_exports__.tEg;
/******/ var __webpack_exports__NO_ITEM_FOUND_SYMBOL = __nested_webpack_exports__.YNy;
/******/ var __webpack_exports__PLAIN_OBJECT_PROTOTYPES = __nested_webpack_exports__.jEx;
/******/ var __webpack_exports__POLYFILL_TEMPLATE_STRINGS = __nested_webpack_exports__.Ud8;
/******/ var __webpack_exports__SCROLL_EVENT_NAMES = __nested_webpack_exports__.Sai;
/******/ var __webpack_exports__SELECTOR_KEY_NAMES = __nested_webpack_exports__.fGw;
/******/ var __webpack_exports__SPECIAL_REGEX_SEQUENCES = __nested_webpack_exports__.FIJ;
/******/ var __webpack_exports__STOP_AUTO_SCROLLING = __nested_webpack_exports__.D70;
/******/ var __webpack_exports__Semaphore = __nested_webpack_exports__.jft;
/******/ var __webpack_exports__TRANSITION_END_EVENT_NAMES = __nested_webpack_exports__.GUh;
/******/ var __webpack_exports__UTILITY_SCOPE = __nested_webpack_exports__.MXd;
/******/ var __webpack_exports__UTILITY_SCOPE_NAMES = __nested_webpack_exports__.bGc;
/******/ var __webpack_exports__UTILITY_SCOPE_VALUES = __nested_webpack_exports__.Xwj;
/******/ var __webpack_exports__VALUE_COPY_SYMBOL = __nested_webpack_exports__.FpT;
/******/ var __webpack_exports__addDynamicGetterAndSetter = __nested_webpack_exports__.QBp;
/******/ var __webpack_exports__addSeparatorToPath = __nested_webpack_exports__.p0o;
/******/ var __webpack_exports__aggregatePropertyIfEqual = __nested_webpack_exports__.STO;
/******/ var __webpack_exports__cacheImage = __nested_webpack_exports__.CJD;
/******/ var __webpack_exports__camelCaseToDelimited = __nested_webpack_exports__.h1R;
/******/ var __webpack_exports__capitalize = __nested_webpack_exports__.ZHe;
/******/ var __webpack_exports__ceil = __nested_webpack_exports__.mkO;
/******/ var __webpack_exports__checkReachability = __nested_webpack_exports__.QB1;
/******/ var __webpack_exports__checkUnreachability = __nested_webpack_exports__.Zxe;
/******/ var __webpack_exports__clearRequireCache = __nested_webpack_exports__.NiH;
/******/ var __webpack_exports__closest = __nested_webpack_exports__.kpl;
/******/ var __webpack_exports__compile = __nested_webpack_exports__.wEV;
/******/ var __webpack_exports__compressStyleValue = __nested_webpack_exports__.v0e;
/******/ var __webpack_exports__convertCircularObjectToJSON = __nested_webpack_exports__.zPE;
/******/ var __webpack_exports__convertMapToPlainObject = __nested_webpack_exports__.oWd;
/******/ var __webpack_exports__convertPlainObjectToMap = __nested_webpack_exports__.eQA;
/******/ var __webpack_exports__convertSubstringInPlainObject = __nested_webpack_exports__.drT;
/******/ var __webpack_exports__convertToValidVariableName = __nested_webpack_exports__.a$v;
/******/ var __webpack_exports__copy = __nested_webpack_exports__.Cal;
/******/ var __webpack_exports__copyDirectoryRecursive = __nested_webpack_exports__.vXz;
/******/ var __webpack_exports__copyDirectoryRecursiveSync = __nested_webpack_exports__.uDW;
/******/ var __webpack_exports__copyFile = __nested_webpack_exports__.m3v;
/******/ var __webpack_exports__copyFileSync = __nested_webpack_exports__.XpE;
/******/ var __webpack_exports__createDomNodes = __nested_webpack_exports__.C_t;
/******/ var __webpack_exports__currentRequire = __nested_webpack_exports__.lE;
/******/ var __webpack_exports__dateTimeFormat = __nested_webpack_exports__.LE6;
/******/ var __webpack_exports__debounce = __nested_webpack_exports__.sg1;
/******/ var __webpack_exports__decodeHTMLEntities = __nested_webpack_exports__.LtR;
/******/ var __webpack_exports__deleteCookie = __nested_webpack_exports__.Yj7;
/******/ var __webpack_exports__deleteEmptyItems = __nested_webpack_exports__.dO3;
/******/ var __webpack_exports__delimitedToCamelCase = __nested_webpack_exports__.XD1;
/******/ var __webpack_exports__determineGlobalContext = __nested_webpack_exports__.a85;
/******/ var __webpack_exports__determineType = __nested_webpack_exports__.Sjp;
/******/ var __webpack_exports__determineUniqueScopeName = __nested_webpack_exports__.EzC;
/******/ var __webpack_exports__encodeURIComponentExtended = __nested_webpack_exports__.V5V;
/******/ var __webpack_exports__equals = __nested_webpack_exports__.aIS;
/******/ var __webpack_exports__escapeRegularExpressions = __nested_webpack_exports__.jtP;
/******/ var __webpack_exports__evaluate = __nested_webpack_exports__._3z;
/******/ var __webpack_exports__evaluateAnd = __nested_webpack_exports__.j0_;
/******/ var __webpack_exports__evaluateArrayContains = __nested_webpack_exports__.Cpg;
/******/ var __webpack_exports__evaluateAsyncDynamicData = __nested_webpack_exports__.PiL;
/******/ var __webpack_exports__evaluateConcat = __nested_webpack_exports__.Q2$;
/******/ var __webpack_exports__evaluateCondition = __nested_webpack_exports__.F9T;
/******/ var __webpack_exports__evaluateDynamicData = __nested_webpack_exports__.J3U;
/******/ var __webpack_exports__evaluateExpression = __nested_webpack_exports__.O4d;
/******/ var __webpack_exports__evaluateIf = __nested_webpack_exports__.rbM;
/******/ var __webpack_exports__evaluateMapping = __nested_webpack_exports__.cBX;
/******/ var __webpack_exports__evaluateOperation = __nested_webpack_exports__.ZF5;
/******/ var __webpack_exports__evaluateOptionalThen = __nested_webpack_exports__.f7_;
/******/ var __webpack_exports__evaluateOr = __nested_webpack_exports__.Hgw;
/******/ var __webpack_exports__evaluateOrThrowError = __nested_webpack_exports__.VK1;
/******/ var __webpack_exports__evaluateSelector = __nested_webpack_exports__.Lmt;
/******/ var __webpack_exports__evaluateSelectorUntilLastObject = __nested_webpack_exports__.yfJ;
/******/ var __webpack_exports__evaluateSwitch = __nested_webpack_exports__.CpF;
/******/ var __webpack_exports__evaluateUnaryOperation = __nested_webpack_exports__.CHz;
/******/ var __webpack_exports__extend = __nested_webpack_exports__.X$i;
/******/ var __webpack_exports__extract = __nested_webpack_exports__.o6p;
/******/ var __webpack_exports__extractIfMatches = __nested_webpack_exports__.u7e;
/******/ var __webpack_exports__extractIfPropertyExists = __nested_webpack_exports__.q6J;
/******/ var __webpack_exports__extractIfPropertyMatches = __nested_webpack_exports__.HtC;
/******/ var __webpack_exports__fade = __nested_webpack_exports__.Rvh;
/******/ var __webpack_exports__fadeIn = __nested_webpack_exports__.qGl;
/******/ var __webpack_exports__fadeOut = __nested_webpack_exports__.XnV;
/******/ var __webpack_exports__findNormalizedMatchRange = __nested_webpack_exports__.Txh;
/******/ var __webpack_exports__fixKnownEncodingErrors = __nested_webpack_exports__.pMn;
/******/ var __webpack_exports__floor = __nested_webpack_exports__.RIf;
/******/ var __webpack_exports__format = __nested_webpack_exports__.GPZ;
/******/ var __webpack_exports__getAll = __nested_webpack_exports__.UKu;
/******/ var __webpack_exports__getCookie = __nested_webpack_exports__.Ri8;
/******/ var __webpack_exports__getCurrentRequire = __nested_webpack_exports__.zMs;
/******/ var __webpack_exports__getDomainName = __nested_webpack_exports__.WqZ;
/******/ var __webpack_exports__getEditDistance = __nested_webpack_exports__.UnK;
/******/ var __webpack_exports__getParameterNames = __nested_webpack_exports__.GjK;
/******/ var __webpack_exports__getParents = __nested_webpack_exports__.wTB;
/******/ var __webpack_exports__getPortNumber = __nested_webpack_exports__.VU;
/******/ var __webpack_exports__getProcessCloseHandler = __nested_webpack_exports__.qAE;
/******/ var __webpack_exports__getProtocolName = __nested_webpack_exports__.gBH;
/******/ var __webpack_exports__getProxyHandler = __nested_webpack_exports__.boz;
/******/ var __webpack_exports__getText = __nested_webpack_exports__.q4_;
/******/ var __webpack_exports__getURLParameter = __nested_webpack_exports__.LK5;
/******/ var __webpack_exports__getUTCTimestamp = __nested_webpack_exports__.n$t;
/******/ var __webpack_exports__globalContext = __nested_webpack_exports__.Lz6;
/******/ var __webpack_exports__handleChildProcess = __nested_webpack_exports__.Gye;
/******/ var __webpack_exports__hasPathPrefix = __nested_webpack_exports__.Yn1;
/******/ var __webpack_exports__identity = __nested_webpack_exports__.D_O;
/******/ var __webpack_exports__importFilesystemAPI = __nested_webpack_exports__.L5n;
/******/ var __webpack_exports__imports = __nested_webpack_exports__.VWk;
/******/ var __webpack_exports__interpretDateTime = __nested_webpack_exports__.JZy;
/******/ var __webpack_exports__interruptableScrollTo = __nested_webpack_exports__.CcH;
/******/ var __webpack_exports__intersect = __nested_webpack_exports__.y$5;
/******/ var __webpack_exports__invertArrayFilter = __nested_webpack_exports__.gHf;
/******/ var __webpack_exports__isAndExpression = __nested_webpack_exports__.Gcp;
/******/ var __webpack_exports__isAnyMatching = __nested_webpack_exports__.GPX;
/******/ var __webpack_exports__isArrayContainsExpression = __nested_webpack_exports__.ZIk;
/******/ var __webpack_exports__isArrayLike = __nested_webpack_exports__.Xj4;
/******/ var __webpack_exports__isConcatExpression = __nested_webpack_exports__.HKz;
/******/ var __webpack_exports__isCondition = __nested_webpack_exports__.G3o;
/******/ var __webpack_exports__isDirectory = __nested_webpack_exports__.wdB;
/******/ var __webpack_exports__isDirectorySync = __nested_webpack_exports__.ZPH;
/******/ var __webpack_exports__isEquivalent = __nested_webpack_exports__.l2f;
/******/ var __webpack_exports__isFile = __nested_webpack_exports__.fo6;
/******/ var __webpack_exports__isFileSync = __nested_webpack_exports__.WYL;
/******/ var __webpack_exports__isFunction = __nested_webpack_exports__.Tnt;
/******/ var __webpack_exports__isHidden = __nested_webpack_exports__.dK4;
/******/ var __webpack_exports__isIfExpression = __nested_webpack_exports__.MPP;
/******/ var __webpack_exports__isImportSyntaxSupported = __nested_webpack_exports__.xNv;
/******/ var __webpack_exports__isMap = __nested_webpack_exports__.jhc;
/******/ var __webpack_exports__isMappingExpression = __nested_webpack_exports__.Z9G;
/******/ var __webpack_exports__isNotANumber = __nested_webpack_exports__.W2K;
/******/ var __webpack_exports__isNumeric = __nested_webpack_exports__.kf$;
/******/ var __webpack_exports__isObject = __nested_webpack_exports__.Gvm;
/******/ var __webpack_exports__isOperation = __nested_webpack_exports__.YG;
/******/ var __webpack_exports__isOrExpression = __nested_webpack_exports__.g6W;
/******/ var __webpack_exports__isPlainObject = __nested_webpack_exports__.QdQ;
/******/ var __webpack_exports__isProxy = __nested_webpack_exports__.ju_;
/******/ var __webpack_exports__isSelector = __nested_webpack_exports__.cB6;
/******/ var __webpack_exports__isSet = __nested_webpack_exports__.vMM;
/******/ var __webpack_exports__isSpecificExpression = __nested_webpack_exports__.bQE;
/******/ var __webpack_exports__isSwitchExpression = __nested_webpack_exports__.$yZ;
/******/ var __webpack_exports__isUnaryOperation = __nested_webpack_exports__.bF9;
/******/ var __webpack_exports__isValue = __nested_webpack_exports__.mlT;
/******/ var __webpack_exports__isWindow = __nested_webpack_exports__.l6U;
/******/ var __webpack_exports__isolateScope = __nested_webpack_exports__.ufo;
/******/ var __webpack_exports__isolatedRequire = __nested_webpack_exports__.Dx_;
/******/ var __webpack_exports__limit = __nested_webpack_exports__.ABv;
/******/ var __webpack_exports__lowerCase = __nested_webpack_exports__.gQT;
/******/ var __webpack_exports__makeArray = __nested_webpack_exports__.gvj;
/******/ var __webpack_exports__makeRange = __nested_webpack_exports__.QR5;
/******/ var __webpack_exports__mark = __nested_webpack_exports__.GyP;
/******/ var __webpack_exports__mask = __nested_webpack_exports__.dKf;
/******/ var __webpack_exports__maskForRegularExpression = __nested_webpack_exports__.W5V;
/******/ var __webpack_exports__merge = __nested_webpack_exports__.h1I;
/******/ var __webpack_exports__mockConsole = __nested_webpack_exports__.QH2;
/******/ var __webpack_exports__modifyObject = __nested_webpack_exports__._2M;
/******/ var __webpack_exports__normalizeDateTime = __nested_webpack_exports__.DPF;
/******/ var __webpack_exports__normalizeDomNodeSelector = __nested_webpack_exports__.RSk;
/******/ var __webpack_exports__normalizePhoneNumber = __nested_webpack_exports__.h2u;
/******/ var __webpack_exports__normalizeSelector = __nested_webpack_exports__.Plz;
/******/ var __webpack_exports__normalizeURL = __nested_webpack_exports__.dcF;
/******/ var __webpack_exports__normalizeZipCode = __nested_webpack_exports__.K$h;
/******/ var __webpack_exports__onDocumentReady = __nested_webpack_exports__.qqP;
/******/ var __webpack_exports__optionalImport = __nested_webpack_exports__.Swo;
/******/ var __webpack_exports__optionalRequire = __nested_webpack_exports__.I5u;
/******/ var __webpack_exports__paginate = __nested_webpack_exports__.EnV;
/******/ var __webpack_exports__parseEncodedObject = __nested_webpack_exports__.jLw;
/******/ var __webpack_exports__permute = __nested_webpack_exports__.Ny6;
/******/ var __webpack_exports__permuteLength = __nested_webpack_exports__.bHv;
/******/ var __webpack_exports__preventDefault = __nested_webpack_exports__.woC;
/******/ var __webpack_exports__removeArrayItem = __nested_webpack_exports__.Hb_;
/******/ var __webpack_exports__removeKeyPrefixes = __nested_webpack_exports__.uuH;
/******/ var __webpack_exports__removeKeysInEvaluation = __nested_webpack_exports__.iEp;
/******/ var __webpack_exports__replace = __nested_webpack_exports__.HCR;
/******/ var __webpack_exports__represent = __nested_webpack_exports__.DoQ;
/******/ var __webpack_exports__representPhoneNumber = __nested_webpack_exports__.KC;
/******/ var __webpack_exports__representURL = __nested_webpack_exports__.ozN;
/******/ var __webpack_exports__round = __nested_webpack_exports__.LIG;
/******/ var __webpack_exports__scrollTo = __nested_webpack_exports__.VGy;
/******/ var __webpack_exports__selectArrayItem = __nested_webpack_exports__.FmA;
/******/ var __webpack_exports__serviceURLEquals = __nested_webpack_exports__._4_;
/******/ var __webpack_exports__setCookie = __nested_webpack_exports__.TVt;
/******/ var __webpack_exports__setGlobalContext = __nested_webpack_exports__.zm2;
/******/ var __webpack_exports__setOptionalRequire = __nested_webpack_exports__.SDh;
/******/ var __webpack_exports__sliceAllExceptNumberAndLastSeparator = __nested_webpack_exports__.U7e;
/******/ var __webpack_exports__sliceWeekday = __nested_webpack_exports__.jJA;
/******/ var __webpack_exports__sort = __nested_webpack_exports__.diJ;
/******/ var __webpack_exports__sortTopological = __nested_webpack_exports__.UXV;
/******/ var __webpack_exports__stopPropagation = __nested_webpack_exports__.dGi;
/******/ var __webpack_exports__sumUpProperty = __nested_webpack_exports__._2j;
/******/ var __webpack_exports__timeout = __nested_webpack_exports__.wRz;
/******/ var __webpack_exports__trailingThrottle = __nested_webpack_exports__.p06;
/******/ var __webpack_exports__unique = __nested_webpack_exports__.AmM;
/******/ var __webpack_exports__unwrap = __nested_webpack_exports__.oAg;
/******/ var __webpack_exports__unwrapProxy = __nested_webpack_exports__.q1l;
/******/ var __webpack_exports__viewArrayAsScope = __nested_webpack_exports__.bCg;
/******/ var __webpack_exports__viewObjectAsScope = __nested_webpack_exports__.xkW;
/******/ var __webpack_exports__walkDirectoryRecursively = __nested_webpack_exports__.y3h;
/******/ var __webpack_exports__walkDirectoryRecursivelySync = __nested_webpack_exports__.hue;
/******/ var __webpack_exports__wrap = __nested_webpack_exports__.LV7;
/******/ 
/******/ 


/***/ })
/******/ ]);
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ // define getter/value functions for harmony exports
/******/ __webpack_require__.d = function(exports, definition) {
/******/ 	for(var key in definition) {
/******/ 		if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 			Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 		}
/******/ 	}
/******/ };
/******/ 
/******/ /* webpack/runtime/global */
/******/ __webpack_require__.g = (function() {
/******/ 	if (typeof globalThis === 'object') return globalThis;
/******/ 	try {
/******/ 		return this || new Function('return this')();
/******/ 	} catch (e) {
/******/ 		if (typeof window === 'object') return window;
/******/ 	}
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ __webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); };
/******/ 
/************************************************************************/
/******/ 
/******/ // startup
/******/ // Load entry module and return exports
/******/ __webpack_require__(71);
/******/ // This entry module is referenced by other modules so it can't be inlined
/******/ __webpack_require__(36);
/******/ __webpack_require__(72);
/******/ var __webpack_exports__ = __webpack_require__(73);
/******/ var __webpack_exports__WebDocumentation = __webpack_exports__.RU;
/******/ var __webpack_exports__api = __webpack_exports__.FH;
/******/ var __webpack_exports__default = __webpack_exports__.Ay;
/******/ var __webpack_exports__log = __webpack_exports__.Rm;
/******/ export { __webpack_exports__WebDocumentation as WebDocumentation, __webpack_exports__api as api, __webpack_exports__default as default, __webpack_exports__log as log };
/******/ 
