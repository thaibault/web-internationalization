if(typeof window==='undefined'||window===null)var window=(typeof globalThis==='undefined'||globalThis===null)?{}:globalThis;/******/ var __webpack_modules__ = ([
/* 0 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var NATIVE_BIND = __webpack_require__(21);

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
/* 1 */
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
/* 2 */
/***/ ((module) => {


module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),
/* 3 */
/***/ ((module) => {


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
/* 4 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var fails = __webpack_require__(2);

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] !== 7;
});


/***/ }),
/* 5 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var isObject = __webpack_require__(9);

var $String = String;
var $TypeError = TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw new $TypeError($String(argument) + ' is not an object');
};


/***/ }),
/* 6 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var NATIVE_BIND = __webpack_require__(21);

var call = Function.prototype.call;
// eslint-disable-next-line es/no-function-prototype-bind -- safe
module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),
/* 7 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var uncurryThis = __webpack_require__(0);
var toObject = __webpack_require__(44);

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),
/* 8 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var uncurryThis = __webpack_require__(0);

// eslint-disable-next-line es/no-set -- safe
var SetPrototype = Set.prototype;

module.exports = {
  // eslint-disable-next-line es/no-set -- safe
  Set: Set,
  add: uncurryThis(SetPrototype.add),
  has: uncurryThis(SetPrototype.has),
  remove: uncurryThis(SetPrototype['delete']),
  proto: SetPrototype
};


/***/ }),
/* 9 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var isCallable = __webpack_require__(3);

module.exports = function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),
/* 10 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var globalThis = __webpack_require__(1);
var shared = __webpack_require__(49);
var hasOwn = __webpack_require__(7);
var uid = __webpack_require__(33);
var NATIVE_SYMBOL = __webpack_require__(24);
var USE_SYMBOL_AS_UID = __webpack_require__(48);

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
/* 11 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var has = (__webpack_require__(8).has);

// Perform ? RequireInternalSlot(M, [[SetData]])
module.exports = function (it) {
  has(it);
  return it;
};


/***/ }),
/* 12 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var call = __webpack_require__(6);

module.exports = function (record, fn, ITERATOR_INSTEAD_OF_RECORD) {
  var iterator = ITERATOR_INSTEAD_OF_RECORD ? record : record.iterator;
  var next = record.next;
  var step, result;
  while (!(step = call(next, iterator)).done) {
    result = fn(step.value);
    if (result !== undefined) return result;
  }
};


/***/ }),
/* 13 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var aCallable = __webpack_require__(17);
var anObject = __webpack_require__(5);
var call = __webpack_require__(6);
var toIntegerOrInfinity = __webpack_require__(37);
var getIteratorDirect = __webpack_require__(42);

var INVALID_SIZE = 'Invalid size';
var $RangeError = RangeError;
var $TypeError = TypeError;
var max = Math.max;

var SetRecord = function (set, intSize) {
  this.set = set;
  this.size = max(intSize, 0);
  this.has = aCallable(set.has);
  this.keys = aCallable(set.keys);
};

SetRecord.prototype = {
  getIterator: function () {
    return getIteratorDirect(anObject(call(this.keys, this.set)));
  },
  includes: function (it) {
    return call(this.has, this.set, it);
  }
};

// `GetSetRecord` abstract operation
// https://tc39.es/proposal-set-methods/#sec-getsetrecord
module.exports = function (obj) {
  anObject(obj);
  var numSize = +obj.size;
  // NOTE: If size is undefined, then numSize will be NaN
  // eslint-disable-next-line no-self-compare -- NaN check
  if (numSize !== numSize) throw new $TypeError(INVALID_SIZE);
  var intSize = toIntegerOrInfinity(numSize);
  if (intSize < 0) throw new $RangeError(INVALID_SIZE);
  return new SetRecord(obj, intSize);
};


/***/ }),
/* 14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var call = __webpack_require__(6);
var anObject = __webpack_require__(5);
var getMethod = __webpack_require__(23);

module.exports = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject(iterator);
  try {
    innerResult = getMethod(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = call(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject(innerResult);
  return value;
};


/***/ }),
/* 15 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var uncurryThis = __webpack_require__(0);

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var DESCRIPTORS = __webpack_require__(4);
var IE8_DOM_DEFINE = __webpack_require__(50);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(52);
var anObject = __webpack_require__(5);
var toPropertyKey = __webpack_require__(47);

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
/* 17 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var isCallable = __webpack_require__(3);
var tryToString = __webpack_require__(30);

var $TypeError = TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw new $TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),
/* 18 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var globalThis = __webpack_require__(1);
var isCallable = __webpack_require__(3);

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(globalThis[namespace]) : globalThis[namespace] && globalThis[namespace][method];
};


/***/ }),
/* 19 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var uncurryThis = __webpack_require__(0);
var iterateSimple = __webpack_require__(12);
var SetHelpers = __webpack_require__(8);

var Set = SetHelpers.Set;
var SetPrototype = SetHelpers.proto;
var forEach = uncurryThis(SetPrototype.forEach);
var keys = uncurryThis(SetPrototype.keys);
var next = keys(new Set()).next;

module.exports = function (set, fn, interruptible) {
  return interruptible ? iterateSimple({ iterator: keys(set), next: next }, fn) : forEach(set, fn);
};


/***/ }),
/* 20 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var uncurryThisAccessor = __webpack_require__(110);
var SetHelpers = __webpack_require__(8);

module.exports = uncurryThisAccessor(SetHelpers.proto, 'size', 'get') || function (set) {
  return set.size;
};


/***/ }),
/* 21 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var fails = __webpack_require__(2);

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = function () { /* empty */ }.bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});


/***/ }),
/* 22 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(70);
var requireObjectCoercible = __webpack_require__(46);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),
/* 23 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var aCallable = __webpack_require__(17);
var isNullOrUndefined = __webpack_require__(27);

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return isNullOrUndefined(func) ? undefined : aCallable(func);
};


/***/ }),
/* 24 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(72);
var fails = __webpack_require__(2);
var globalThis = __webpack_require__(1);

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
/* 25 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var toLength = __webpack_require__(81);

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),
/* 26 */
/***/ ((module) => {


module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 27 */
/***/ ((module) => {


// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function (it) {
  return it === null || it === undefined;
};


/***/ }),
/* 28 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var getBuiltIn = __webpack_require__(18);
var isCallable = __webpack_require__(3);
var isPrototypeOf = __webpack_require__(29);
var USE_SYMBOL_AS_UID = __webpack_require__(48);

var $Object = Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};


/***/ }),
/* 29 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var uncurryThis = __webpack_require__(0);

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),
/* 30 */
/***/ ((module) => {


var $String = String;

module.exports = function (argument) {
  try {
    return $String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),
/* 31 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var IS_PURE = __webpack_require__(41);
var globalThis = __webpack_require__(1);
var defineGlobalProperty = __webpack_require__(32);

var SHARED = '__core-js_shared__';
var store = module.exports = globalThis[SHARED] || defineGlobalProperty(SHARED, {});

(store.versions || (store.versions = [])).push({
  version: '3.51.0',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2013–2025 Denis Pushkarev (zloirock.ru), 2025–2026 CoreJS Company (core-js.io). All rights reserved.',
  license: 'https://github.com/zloirock/core-js/blob/v3.51.0/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});


/***/ }),
/* 32 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var globalThis = __webpack_require__(1);

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
/* 33 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var uncurryThis = __webpack_require__(0);

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.1.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),
/* 34 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var DESCRIPTORS = __webpack_require__(4);
var definePropertyModule = __webpack_require__(16);
var createPropertyDescriptor = __webpack_require__(26);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 35 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var isCallable = __webpack_require__(3);
var definePropertyModule = __webpack_require__(16);
var makeBuiltIn = __webpack_require__(53);
var defineGlobalProperty = __webpack_require__(32);

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
/* 36 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var shared = __webpack_require__(49);
var uid = __webpack_require__(33);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),
/* 37 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var trunc = __webpack_require__(80);

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};


/***/ }),
/* 38 */
/***/ ((module) => {


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
/* 39 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var SetHelpers = __webpack_require__(8);
var iterate = __webpack_require__(19);

var Set = SetHelpers.Set;
var add = SetHelpers.add;

module.exports = function (set) {
  var result = new Set();
  iterate(set, function (it) {
    add(result, it);
  });
  return result;
};


/***/ }),
/* 40 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var globalThis = __webpack_require__(1);
var getOwnPropertyDescriptor = (__webpack_require__(69).f);
var createNonEnumerableProperty = __webpack_require__(34);
var defineBuiltIn = __webpack_require__(35);
var defineGlobalProperty = __webpack_require__(32);
var copyConstructorProperties = __webpack_require__(77);
var isForced = __webpack_require__(82);

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
/* 41 */
/***/ ((module) => {


module.exports = false;


/***/ }),
/* 42 */
/***/ ((module) => {


// `GetIteratorDirect(obj)` abstract operation
// https://tc39.es/ecma262/#sec-getiteratordirect
module.exports = function (obj) {
  return {
    iterator: obj,
    next: obj.next,
    done: false
  };
};


/***/ }),
/* 43 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__(5);
var definePropertiesModule = __webpack_require__(124);
var enumBugKeys = __webpack_require__(38);
var hiddenKeys = __webpack_require__(55);
var html = __webpack_require__(94);
var documentCreateElement = __webpack_require__(51);
var sharedKey = __webpack_require__(36);

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
/* 44 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var requireObjectCoercible = __webpack_require__(46);

var $Object = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return $Object(requireObjectCoercible(argument));
};


/***/ }),
/* 45 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var classof = __webpack_require__(15);

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) === 'Array';
};


/***/ }),
/* 46 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var isNullOrUndefined = __webpack_require__(27);

var $TypeError = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
  return it;
};


/***/ }),
/* 47 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var toPrimitive = __webpack_require__(71);
var isSymbol = __webpack_require__(28);

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),
/* 48 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(24);

module.exports = NATIVE_SYMBOL &&
  !Symbol.sham &&
  typeof Symbol.iterator == 'symbol';


/***/ }),
/* 49 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var store = __webpack_require__(31);
// eslint-disable-next-line es/no-object-create -- safe
var create = Object.create || Object;

module.exports = function (key, value) {
  return store[key] || (store[key] = value || create(null));
};


/***/ }),
/* 50 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var DESCRIPTORS = __webpack_require__(4);
var fails = __webpack_require__(2);
var createElement = __webpack_require__(51);

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a !== 7;
});


/***/ }),
/* 51 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var globalThis = __webpack_require__(1);
var isObject = __webpack_require__(9);

var document = globalThis.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),
/* 52 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var DESCRIPTORS = __webpack_require__(4);
var fails = __webpack_require__(2);

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
/* 53 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var uncurryThis = __webpack_require__(0);
var fails = __webpack_require__(2);
var isCallable = __webpack_require__(3);
var hasOwn = __webpack_require__(7);
var DESCRIPTORS = __webpack_require__(4);
var CONFIGURABLE_FUNCTION_NAME = (__webpack_require__(121)/* .CONFIGURABLE */ .i2);
var inspectSource = __webpack_require__(75);
var InternalStateModule = __webpack_require__(54);

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
/* 54 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var NATIVE_WEAK_MAP = __webpack_require__(76);
var globalThis = __webpack_require__(1);
var isObject = __webpack_require__(9);
var createNonEnumerableProperty = __webpack_require__(34);
var hasOwn = __webpack_require__(7);
var shared = __webpack_require__(31);
var sharedKey = __webpack_require__(36);
var hiddenKeys = __webpack_require__(55);

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
/* 55 */
/***/ ((module) => {


module.exports = {};


/***/ }),
/* 56 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var uncurryThis = __webpack_require__(0);
var hasOwn = __webpack_require__(7);
var toIndexedObject = __webpack_require__(22);
var indexOf = (__webpack_require__(57)/* .indexOf */ .q);
var hiddenKeys = __webpack_require__(55);

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
/* 57 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var toIndexedObject = __webpack_require__(22);
var toAbsoluteIndex = __webpack_require__(79);
var lengthOfArrayLike = __webpack_require__(25);

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
/* 58 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var classof = __webpack_require__(15);
var isNullOrUndefined = __webpack_require__(27);
var getMethod = __webpack_require__(23);
var wellKnownSymbol = __webpack_require__(10);

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  if (!isNullOrUndefined(it)) return getMethod(it, ITERATOR)
    || getMethod(it, '@@iterator')
    || (classof(it) === 'Arguments' ? ArrayPrototype[ITERATOR] : undefined);
};


/***/ }),
/* 59 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var makeBuiltIn = __webpack_require__(53);
var defineProperty = __webpack_require__(16);

module.exports = function (target, name, descriptor) {
  if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
  if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
  return defineProperty.f(target, name, descriptor);
};


/***/ }),
/* 60 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var getBuiltIn = __webpack_require__(18);

var createSetLike = function (size) {
  return {
    size: size,
    has: function () {
      return false;
    },
    keys: function () {
      return {
        next: function () {
          return { done: true };
        }
      };
    }
  };
};

var createSetLikeWithInfinitySize = function (size) {
  return {
    size: size,
    has: function () {
      return true;
    },
    keys: function () {
      throw new Error('e');
    }
  };
};

module.exports = function (name, callback) {
  var Set = getBuiltIn('Set');
  try {
    new Set()[name](createSetLike(0));
    try {
      // late spec change, early WebKit ~ Safari 17 implementation does not pass it
      // https://github.com/tc39/proposal-set-methods/pull/88
      // also covered engines with
      // https://bugs.webkit.org/show_bug.cgi?id=272679
      new Set()[name](createSetLike(-1));
      return false;
    } catch (error2) {
      if (!callback) return true;
      // early V8 implementation bug
      // https://issues.chromium.org/issues/351332634
      try {
        new Set()[name](createSetLikeWithInfinitySize(-Infinity));
        return false;
      } catch (error) {
        var set = new Set([1, 2]);
        return callback(set[name](createSetLikeWithInfinitySize(Infinity)));
      }
    }
  } catch (error) {
    return false;
  }
};


/***/ }),
/* 61 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var globalThis = __webpack_require__(1);

// https://github.com/tc39/ecma262/pull/3467
module.exports = function (METHOD_NAME, ExpectedError) {
  var Iterator = globalThis.Iterator;
  var IteratorPrototype = Iterator && Iterator.prototype;
  var method = IteratorPrototype && IteratorPrototype[METHOD_NAME];

  var CLOSED = false;

  if (method) try {
    method.call({
      next: function () { return { done: true }; },
      'return': function () { CLOSED = true; }
    }, -1);
  } catch (error) {
    // https://bugs.webkit.org/show_bug.cgi?id=291195
    if (!(error instanceof ExpectedError)) CLOSED = false;
  }

  if (!CLOSED) return method;
};


/***/ }),
/* 62 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var bind = __webpack_require__(83);
var call = __webpack_require__(6);
var anObject = __webpack_require__(5);
var tryToString = __webpack_require__(30);
var isArrayIteratorMethod = __webpack_require__(85);
var lengthOfArrayLike = __webpack_require__(25);
var isPrototypeOf = __webpack_require__(29);
var getIterator = __webpack_require__(87);
var getIteratorMethod = __webpack_require__(58);
var iteratorClose = __webpack_require__(14);

var $TypeError = TypeError;

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var ResultPrototype = Result.prototype;

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_RECORD = !!(options && options.IS_RECORD);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    var $iterator = iterator;
    iterator = undefined;
    if ($iterator) iteratorClose($iterator, 'normal');
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_RECORD) {
    iterator = iterable.iterator;
  } else if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (!iterFn) throw new $TypeError(tryToString(iterable) + ' is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && isPrototypeOf(ResultPrototype, result)) return result;
      } return new Result(false);
    }
    iterator = getIterator(iterable, iterFn);
  }

  next = IS_RECORD ? iterable.next : iterator.next;
  while (!(step = call(next, iterator)).done) {
    // `IteratorValue` errors should propagate without closing the iterator
    var value = step.value;
    try {
      result = callFn(value);
    } catch (error) {
      if (iterator) iteratorClose(iterator, 'throw', error);
      else throw error;
    }
    if (typeof result == 'object' && result && isPrototypeOf(ResultPrototype, result)) return result;
  } return new Result(false);
};


/***/ }),
/* 63 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var DESCRIPTORS = __webpack_require__(4);
var definePropertyModule = __webpack_require__(16);
var createPropertyDescriptor = __webpack_require__(26);

module.exports = function (object, key, value) {
  if (DESCRIPTORS) definePropertyModule.f(object, key, createPropertyDescriptor(0, value));
  else object[key] = value;
};


/***/ }),
/* 64 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var anObject = __webpack_require__(5);
var iteratorClose = __webpack_require__(14);

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  } catch (error) {
    iteratorClose(iterator, 'throw', error);
  }
};


/***/ }),
/* 65 */
/***/ ((module) => {


// Should throw an error on invalid iterator
// https://issues.chromium.org/issues/336839115
module.exports = function (methodName, argument) {
  // eslint-disable-next-line es/no-iterator -- required for testing
  var method = typeof Iterator == 'function' && Iterator.prototype[methodName];
  if (method) try {
    method.call({ next: null }, argument).next();
  } catch (error) {
    return true;
  }
};


/***/ }),
/* 66 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var classof = __webpack_require__(104);

var $String = String;

module.exports = function (argument) {
  if (classof(argument) === 'Symbol') throw new TypeError('Cannot convert a Symbol value to a string');
  return $String(argument);
};


/***/ }),
/* 67 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var uncurryThis = __webpack_require__(0);
var hasOwn = __webpack_require__(7);

var $SyntaxError = SyntaxError;
var $parseInt = parseInt;
var fromCharCode = String.fromCharCode;
var at = uncurryThis(''.charAt);
var slice = uncurryThis(''.slice);
var exec = uncurryThis(/./.exec);

var codePoints = {
  '\\"': '"',
  '\\\\': '\\',
  '\\/': '/',
  '\\b': '\b',
  '\\f': '\f',
  '\\n': '\n',
  '\\r': '\r',
  '\\t': '\t'
};

var IS_4_HEX_DIGITS = /^[\da-f]{4}$/i;
// eslint-disable-next-line regexp/no-control-character -- safe
var IS_C0_CONTROL_CODE = /^[\u0000-\u001F]$/;

module.exports = function (source, i) {
  var unterminated = true;
  var value = '';
  while (i < source.length) {
    var chr = at(source, i);
    if (chr === '\\') {
      var twoChars = slice(source, i, i + 2);
      if (hasOwn(codePoints, twoChars)) {
        value += codePoints[twoChars];
        i += 2;
      } else if (twoChars === '\\u') {
        i += 2;
        var fourHexDigits = slice(source, i, i + 4);
        if (!exec(IS_4_HEX_DIGITS, fourHexDigits)) throw new $SyntaxError('Bad Unicode escape at: ' + i);
        value += fromCharCode($parseInt(fourHexDigits, 16));
        i += 4;
      } else throw new $SyntaxError('Unknown escape sequence: "' + twoChars + '"');
    } else if (chr === '"') {
      unterminated = false;
      i++;
      break;
    } else {
      if (exec(IS_C0_CONTROL_CODE, chr)) throw new $SyntaxError('Bad control character in string literal at: ' + i);
      value += chr;
      i++;
    }
  }
  if (unterminated) throw new $SyntaxError('Unterminated string at: ' + i);
  return { value: value, end: i };
};


/***/ }),
/* 68 */
/***/ ((module) => {


// Should get iterator record of a set-like object before cloning this
// https://bugs.webkit.org/show_bug.cgi?id=289430
module.exports = function (METHOD_NAME) {
  try {
    // eslint-disable-next-line es/no-set -- needed for test
    var baseSet = new Set();
    var setLike = {
      size: 0,
      has: function () { return true; },
      keys: function () {
        // eslint-disable-next-line es/no-object-defineproperty -- needed for test
        return Object.defineProperty({}, 'next', {
          get: function () {
            baseSet.clear();
            baseSet.add(4);
            return function () {
              return { done: true };
            };
          }
        });
      }
    };
    var result = baseSet[METHOD_NAME](setLike);

    return result.size === 1 && result.values().next().value === 4;
  } catch (error) {
    return false;
  }
};


/***/ }),
/* 69 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var DESCRIPTORS = __webpack_require__(4);
var call = __webpack_require__(6);
var propertyIsEnumerableModule = __webpack_require__(120);
var createPropertyDescriptor = __webpack_require__(26);
var toIndexedObject = __webpack_require__(22);
var toPropertyKey = __webpack_require__(47);
var hasOwn = __webpack_require__(7);
var IE8_DOM_DEFINE = __webpack_require__(50);

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
/* 70 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var uncurryThis = __webpack_require__(0);
var fails = __webpack_require__(2);
var classof = __webpack_require__(15);

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
/* 71 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var call = __webpack_require__(6);
var isObject = __webpack_require__(9);
var isSymbol = __webpack_require__(28);
var getMethod = __webpack_require__(23);
var ordinaryToPrimitive = __webpack_require__(74);
var wellKnownSymbol = __webpack_require__(10);

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
/* 72 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var globalThis = __webpack_require__(1);
var userAgent = __webpack_require__(73);

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
/* 73 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var globalThis = __webpack_require__(1);

var navigator = globalThis.navigator;
var userAgent = navigator && navigator.userAgent;

module.exports = userAgent ? String(userAgent) : '';


/***/ }),
/* 74 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var call = __webpack_require__(6);
var isCallable = __webpack_require__(3);
var isObject = __webpack_require__(9);

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
/* 75 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var uncurryThis = __webpack_require__(0);
var isCallable = __webpack_require__(3);
var store = __webpack_require__(31);

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),
/* 76 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var globalThis = __webpack_require__(1);
var isCallable = __webpack_require__(3);

var WeakMap = globalThis.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));


/***/ }),
/* 77 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var hasOwn = __webpack_require__(7);
var ownKeys = __webpack_require__(78);
var getOwnPropertyDescriptorModule = __webpack_require__(69);
var definePropertyModule = __webpack_require__(16);

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
/* 78 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var getBuiltIn = __webpack_require__(18);
var uncurryThis = __webpack_require__(0);
var getOwnPropertyNamesModule = __webpack_require__(122);
var getOwnPropertySymbolsModule = __webpack_require__(123);
var anObject = __webpack_require__(5);

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),
/* 79 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var toIntegerOrInfinity = __webpack_require__(37);

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
/* 80 */
/***/ ((module) => {


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
/* 81 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var toIntegerOrInfinity = __webpack_require__(37);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  var len = toIntegerOrInfinity(argument);
  return len > 0 ? min(len, 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),
/* 82 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var fails = __webpack_require__(2);
var isCallable = __webpack_require__(3);

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
/* 83 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var uncurryThis = __webpack_require__(84);
var aCallable = __webpack_require__(17);
var NATIVE_BIND = __webpack_require__(21);

var bind = uncurryThis(uncurryThis.bind);

// optional / simple context binding
module.exports = function (fn, that) {
  aCallable(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 84 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var classofRaw = __webpack_require__(15);
var uncurryThis = __webpack_require__(0);

module.exports = function (fn) {
  // Nashorn bug:
  //   https://github.com/zloirock/core-js/issues/1128
  //   https://github.com/zloirock/core-js/issues/1130
  if (classofRaw(fn) === 'Function') return uncurryThis(fn);
};


/***/ }),
/* 85 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var wellKnownSymbol = __webpack_require__(10);
var Iterators = __webpack_require__(86);

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),
/* 86 */
/***/ ((module) => {


module.exports = Object.create ? Object.create(null) : {};


/***/ }),
/* 87 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var call = __webpack_require__(6);
var isCallable = __webpack_require__(3);
var anObject = __webpack_require__(5);
var tryToString = __webpack_require__(30);
var getIteratorMethod = __webpack_require__(58);

var $TypeError = TypeError;

module.exports = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
  if (isCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
  throw new $TypeError(tryToString(argument) + ' is not iterable');
};


/***/ }),
/* 88 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var NATIVE_BIND = __webpack_require__(21);

var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var call = FunctionPrototype.call;

// eslint-disable-next-line es/no-function-prototype-bind, es/no-reflect -- safe
module.exports = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function () {
  return call.apply(apply, arguments);
});


/***/ }),
/* 89 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var DESCRIPTORS = __webpack_require__(4);
var isArray = __webpack_require__(45);

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Safari < 13 does not throw an error in this case
var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS && !function () {
  // makes no sense without proper strict mode support
  if (this !== undefined) return true;
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).length = 1;
  } catch (error) {
    return error instanceof TypeError;
  }
}();

module.exports = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function (O, length) {
  if (isArray(O) && !getOwnPropertyDescriptor(O, 'length').writable) {
    throw new $TypeError('Cannot set read only .length');
  } return O.length = length;
} : function (O, length) {
  return O.length = length;
};


/***/ }),
/* 90 */
/***/ ((module) => {


var $TypeError = TypeError;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

module.exports = function (it) {
  if (it > MAX_SAFE_INTEGER) throw new $TypeError('Maximum allowed index exceeded');
  return it;
};


/***/ }),
/* 91 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var isPrototypeOf = __webpack_require__(29);

var $TypeError = TypeError;

module.exports = function (it, Prototype) {
  if (isPrototypeOf(Prototype, it)) return it;
  throw new $TypeError('Incorrect invocation');
};


/***/ }),
/* 92 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var fails = __webpack_require__(2);

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),
/* 93 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var internalObjectKeys = __webpack_require__(56);
var enumBugKeys = __webpack_require__(38);

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),
/* 94 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var getBuiltIn = __webpack_require__(18);

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),
/* 95 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var defineBuiltIn = __webpack_require__(35);

module.exports = function (target, src, options) {
  for (var key in src) defineBuiltIn(target, key, src[key], options);
  return target;
};


/***/ }),
/* 96 */
/***/ ((module) => {


// `CreateIterResultObject` abstract operation
// https://tc39.es/ecma262/#sec-createiterresultobject
module.exports = function (value, done) {
  return { value: value, done: done };
};


/***/ }),
/* 97 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var iteratorClose = __webpack_require__(14);

module.exports = function (iters, kind, value) {
  for (var i = iters.length - 1; i >= 0; i--) {
    if (iters[i] === undefined) continue;
    try {
      value = iteratorClose(iters[i].iterator, kind, value);
    } catch (error) {
      kind = 'throw';
      value = error;
    }
  }
  if (kind === 'throw') throw value;
  return value;
};


/***/ }),
/* 98 */
/***/ ((module) => {


// release references held by exhausted / closed iterator helpers to allow GC of the source chain
module.exports = function (state) {
  state.iterator = state.next = state.nextHandler = state.mapper = state.predicate = state.inner =
    state.iterables = state.iters = state.openIters = state.padding = state.finishResults = state.buffer = null;
};


/***/ }),
/* 99 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $ = __webpack_require__(40);
var $includes = (__webpack_require__(57)/* .includes */ .m);
var fails = __webpack_require__(2);
var addToUnscopables = __webpack_require__(100);

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
/* 100 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var wellKnownSymbol = __webpack_require__(10);
var create = __webpack_require__(43);
var defineProperty = (__webpack_require__(16).f);

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
/* 101 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var anObject = __webpack_require__(5);

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
/* 102 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(103);

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
/* 103 */
/***/ ((module) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 104 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var TO_STRING_TAG_SUPPORT = __webpack_require__(105);
var isCallable = __webpack_require__(3);
var classofRaw = __webpack_require__(15);
var wellKnownSymbol = __webpack_require__(10);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var $Object = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) === 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) === 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};


/***/ }),
/* 105 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var wellKnownSymbol = __webpack_require__(10);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};
// eslint-disable-next-line unicorn/no-immediate-mutation -- ES3 syntax limitation
test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),
/* 106 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var isObject = __webpack_require__(9);
var getInternalState = (__webpack_require__(54).get);

module.exports = function isRawJSON(O) {
  if (!isObject(O)) return false;
  var state = getInternalState(O);
  return !!state && state.type === 'RawJSON';
};


/***/ }),
/* 107 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var uncurryThis = __webpack_require__(0);

// `thisNumberValue` abstract operation
// https://tc39.es/ecma262/#sec-thisnumbervalue
module.exports = uncurryThis(1.1.valueOf);


/***/ }),
/* 108 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


/* eslint-disable es/no-json -- safe */
var fails = __webpack_require__(2);

module.exports = !fails(function () {
  var unsafeInt = '9007199254740993';
  // eslint-disable-next-line es/no-json-rawjson -- feature detection
  var raw = JSON.rawJSON(unsafeInt);
  // eslint-disable-next-line es/no-json-israwjson -- feature detection
  return !JSON.isRawJSON(raw) || JSON.stringify(raw) !== unsafeInt;
});


/***/ }),
/* 109 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var aSet = __webpack_require__(11);
var SetHelpers = __webpack_require__(8);
var clone = __webpack_require__(39);
var size = __webpack_require__(20);
var getSetRecord = __webpack_require__(13);
var iterateSet = __webpack_require__(19);
var iterateSimple = __webpack_require__(12);

var has = SetHelpers.has;
var remove = SetHelpers.remove;

// `Set.prototype.difference` method
// https://tc39.es/ecma262/#sec-set.prototype.difference
module.exports = function difference(other) {
  var O = aSet(this);
  var otherRec = getSetRecord(other);
  var result = clone(O);
  if (size(result) <= otherRec.size) iterateSet(result, function (e) {
    if (otherRec.includes(e)) remove(result, e);
  });
  else iterateSimple(otherRec.getIterator(), function (e) {
    if (has(result, e)) remove(result, e);
  });
  return result;
};


/***/ }),
/* 110 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var uncurryThis = __webpack_require__(0);
var aCallable = __webpack_require__(17);

module.exports = function (object, key, method) {
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    return uncurryThis(aCallable(Object.getOwnPropertyDescriptor(object, key)[method]));
  } catch (error) { /* empty */ }
};


/***/ }),
/* 111 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var aSet = __webpack_require__(11);
var SetHelpers = __webpack_require__(8);
var size = __webpack_require__(20);
var getSetRecord = __webpack_require__(13);
var iterateSet = __webpack_require__(19);
var iterateSimple = __webpack_require__(12);

var Set = SetHelpers.Set;
var add = SetHelpers.add;
var has = SetHelpers.has;

// `Set.prototype.intersection` method
// https://tc39.es/ecma262/#sec-set.prototype.intersection
module.exports = function intersection(other) {
  var O = aSet(this);
  var otherRec = getSetRecord(other);
  var result = new Set();

  if (size(O) > otherRec.size) {
    iterateSimple(otherRec.getIterator(), function (e) {
      if (has(O, e)) add(result, e);
    });
  } else {
    iterateSet(O, function (e) {
      if (otherRec.includes(e)) add(result, e);
    });
  }

  return result;
};


/***/ }),
/* 112 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var aSet = __webpack_require__(11);
var has = (__webpack_require__(8).has);
var size = __webpack_require__(20);
var getSetRecord = __webpack_require__(13);
var iterateSet = __webpack_require__(19);
var iterateSimple = __webpack_require__(12);
var iteratorClose = __webpack_require__(14);

// `Set.prototype.isDisjointFrom` method
// https://tc39.es/ecma262/#sec-set.prototype.isdisjointfrom
module.exports = function isDisjointFrom(other) {
  var O = aSet(this);
  var otherRec = getSetRecord(other);
  if (size(O) <= otherRec.size) return iterateSet(O, function (e) {
    if (otherRec.includes(e)) return false;
  }, true) !== false;
  var iterator = otherRec.getIterator();
  return iterateSimple(iterator, function (e) {
    if (has(O, e)) return iteratorClose(iterator.iterator, 'normal', false);
  }) !== false;
};


/***/ }),
/* 113 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var aSet = __webpack_require__(11);
var size = __webpack_require__(20);
var iterate = __webpack_require__(19);
var getSetRecord = __webpack_require__(13);

// `Set.prototype.isSubsetOf` method
// https://tc39.es/ecma262/#sec-set.prototype.issubsetof
module.exports = function isSubsetOf(other) {
  var O = aSet(this);
  var otherRec = getSetRecord(other);
  if (size(O) > otherRec.size) return false;
  return iterate(O, function (e) {
    if (!otherRec.includes(e)) return false;
  }, true) !== false;
};


/***/ }),
/* 114 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var aSet = __webpack_require__(11);
var has = (__webpack_require__(8).has);
var size = __webpack_require__(20);
var getSetRecord = __webpack_require__(13);
var iterateSimple = __webpack_require__(12);
var iteratorClose = __webpack_require__(14);

// `Set.prototype.isSupersetOf` method
// https://tc39.es/ecma262/#sec-set.prototype.issupersetof
module.exports = function isSupersetOf(other) {
  var O = aSet(this);
  var otherRec = getSetRecord(other);
  if (size(O) < otherRec.size) return false;
  var iterator = otherRec.getIterator();
  return iterateSimple(iterator, function (e) {
    if (!has(O, e)) return iteratorClose(iterator.iterator, 'normal', false);
  }) !== false;
};


/***/ }),
/* 115 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var aSet = __webpack_require__(11);
var SetHelpers = __webpack_require__(8);
var clone = __webpack_require__(39);
var getSetRecord = __webpack_require__(13);
var iterateSimple = __webpack_require__(12);

var add = SetHelpers.add;
var has = SetHelpers.has;
var remove = SetHelpers.remove;

// `Set.prototype.symmetricDifference` method
// https://tc39.es/ecma262/#sec-set.prototype.symmetricdifference
module.exports = function symmetricDifference(other) {
  var O = aSet(this);
  var keysIter = getSetRecord(other).getIterator();
  var result = clone(O);
  iterateSimple(keysIter, function (e) {
    if (has(O, e)) remove(result, e);
    else add(result, e);
  });
  return result;
};


/***/ }),
/* 116 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var aSet = __webpack_require__(11);
var add = (__webpack_require__(8).add);
var clone = __webpack_require__(39);
var getSetRecord = __webpack_require__(13);
var iterateSimple = __webpack_require__(12);

// `Set.prototype.union` method
// https://tc39.es/ecma262/#sec-set.prototype.union
module.exports = function union(other) {
  var O = aSet(this);
  var keysIter = getSetRecord(other).getIterator();
  var result = clone(O);
  iterateSimple(keysIter, function (it) {
    add(result, it);
  });
  return result;
};


/***/ }),
/* 117 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
  module.exports = __webpack_require__(102)();
}


/***/ }),
/* 118 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var uncurryThis = __webpack_require__(0);

// eslint-disable-next-line es/no-map -- safe
var MapPrototype = Map.prototype;

module.exports = {
  // eslint-disable-next-line es/no-map -- safe
  Map: Map,
  set: uncurryThis(MapPrototype.set),
  get: uncurryThis(MapPrototype.get),
  has: uncurryThis(MapPrototype.has),
  remove: uncurryThis(MapPrototype['delete']),
  proto: MapPrototype
};


/***/ }),
/* 119 */,
/* 120 */
/***/ ((__unused_webpack_module, exports) => {


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
/* 121 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var DESCRIPTORS = __webpack_require__(4);
var hasOwn = __webpack_require__(7);

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
/* 122 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var internalObjectKeys = __webpack_require__(56);
var enumBugKeys = __webpack_require__(38);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),
/* 123 */
/***/ ((__unused_webpack_module, exports) => {


// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 124 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var DESCRIPTORS = __webpack_require__(4);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(52);
var definePropertyModule = __webpack_require__(16);
var anObject = __webpack_require__(5);
var toIndexedObject = __webpack_require__(22);
var objectKeys = __webpack_require__(93);

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
/* 125 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var DESCRIPTORS = __webpack_require__(4);
var defineBuiltInAccessor = __webpack_require__(59);
var regExpFlagsDetection = __webpack_require__(126);
var regExpFlagsGetterImplementation = __webpack_require__(101);

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
/* 126 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var globalThis = __webpack_require__(1);
var fails = __webpack_require__(2);

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
/* 127 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AmM: () => (/* binding */ __webpack_exports__unique),
/* harmony export */   Cal: () => (/* binding */ __webpack_exports__copy),
/* harmony export */   DoQ: () => (/* binding */ __webpack_exports__represent),
/* harmony export */   GPZ: () => (/* binding */ __webpack_exports__format),
/* harmony export */   Gvm: () => (/* binding */ __webpack_exports__isObject),
/* harmony export */   HCR: () => (/* binding */ __webpack_exports__replace),
/* harmony export */   Lz6: () => (/* binding */ __webpack_exports__globalContext),
/* harmony export */   MXd: () => (/* binding */ __webpack_exports__UTILITY_SCOPE),
/* harmony export */   Tnt: () => (/* binding */ __webpack_exports__isFunction),
/* harmony export */   UKu: () => (/* binding */ __webpack_exports__getAll),
/* harmony export */   VyI: () => (/* binding */ __webpack_exports__Logger),
/* harmony export */   X$i: () => (/* binding */ __webpack_exports__extend),
/* harmony export */   XD1: () => (/* binding */ __webpack_exports__delimitedToCamelCase),
/* harmony export */   XnV: () => (/* binding */ __webpack_exports__fadeOut),
/* harmony export */   _3z: () => (/* binding */ __webpack_exports__evaluate),
/* harmony export */   bGc: () => (/* binding */ __webpack_exports__UTILITY_SCOPE_NAMES),
/* harmony export */   c_I: () => (/* binding */ __webpack_exports__Lock),
/* harmony export */   eQA: () => (/* binding */ __webpack_exports__convertPlainObjectToMap),
/* harmony export */   gQT: () => (/* binding */ __webpack_exports__lowerCase),
/* harmony export */   h1R: () => (/* binding */ __webpack_exports__camelCaseToDelimited),
/* harmony export */   kpl: () => (/* binding */ __webpack_exports__closest),
/* harmony export */   oAg: () => (/* binding */ __webpack_exports__unwrap),
/* harmony export */   q4_: () => (/* binding */ __webpack_exports__getText),
/* harmony export */   qGl: () => (/* binding */ __webpack_exports__fadeIn),
/* harmony export */   tEg: () => (/* binding */ __webpack_exports__NOOP),
/* harmony export */   wEV: () => (/* binding */ __webpack_exports__compile),
/* harmony export */   wRz: () => (/* binding */ __webpack_exports__timeout)
/* harmony export */ });
/* unused harmony exports ABBREVIATIONS, ALLOWED_STARTING_VARIABLE_SYMBOLS, ALLOWED_VARIABLE_SYMBOLS, ANIMATION_END_EVENT_NAMES, AsyncFunction, CLASS_TO_TYPE_MAPPING, CLI_COLOR, CLOSE_EVENT_NAMES, CONSOLE_METHODS, DATE_TIME_PATTERN_CACHE, DEFAULT_ENCODING, DEFAULT_OPTIONS, FIX_ENCODING_ERROR_MAPPING, IGNORE_NULL_AND_UNDEFINED_SYMBOL, KEYBOARD_CODES, KEY_CODES, KNOWN_DISALLOWED_VARIABLE_NAMES_BUT_OBJECT_KEYS, LEVELS, LEVELS_COLOR, LOCALES, MANUAL_SCROLL_EVENT_NAMES, MAXIMAL_NUMBER_OF_ITERATIONS, NO_ITEM_FOUND_SYMBOL, PLAIN_OBJECT_PROTOTYPES, POLYFILL_TEMPLATE_STRINGS, SCROLL_EVENT_NAMES, SELECTOR_KEY_NAMES, SPECIAL_REGEX_SEQUENCES, STOP_AUTO_SCROLLING, Semaphore, TRANSITION_END_EVENT_NAMES, UTILITY_SCOPE_VALUES, VALUE_COPY_SYMBOL, addDynamicGetterAndSetter, addSeparatorToPath, aggregatePropertyIfEqual, cacheImage, capitalize, ceil, checkReachability, checkUnreachability, clearRequireCache, compressStyleValue, convertCircularObjectToJSON, convertMapToPlainObject, convertSubstringInPlainObject, convertToValidVariableName, copyDirectoryRecursive, copyDirectoryRecursiveSync, copyFile, copyFileSync, createDomNodes, currentRequire, dateTimeFormat, debounce, decodeHTMLEntities, deleteCookie, deleteEmptyItems, determineGlobalContext, determineType, determineUniqueScopeName, encodeURIComponentExtended, equals, escapeRegularExpressions, evaluateAnd, evaluateArrayContains, evaluateAsyncDynamicData, evaluateConcat, evaluateCondition, evaluateDynamicData, evaluateExpression, evaluateIf, evaluateMapping, evaluateOperation, evaluateOptionalThen, evaluateOr, evaluateOrThrowError, evaluateSelector, evaluateSelectorUntilLastObject, evaluateSwitch, evaluateUnaryOperation, extract, extractIfMatches, extractIfPropertyExists, extractIfPropertyMatches, fade, findNormalizedMatchRange, fixKnownEncodingErrors, floor, getCookie, getCurrentRequire, getDomainName, getEditDistance, getParameterNames, getParents, getPortNumber, getProcessCloseHandler, getProtocolName, getProxyHandler, getURLParameter, getUTCTimestamp, handleChildProcess, hasPathPrefix, identity, importFilesystemAPI, imports, interpretDateTime, interruptableScrollTo, intersect, invertArrayFilter, isAndExpression, isAnyMatching, isArrayContainsExpression, isArrayLike, isConcatExpression, isCondition, isDirectory, isDirectorySync, isEquivalent, isFile, isFileSync, isHidden, isIfExpression, isImportSyntaxSupported, isMap, isMappingExpression, isNotANumber, isNumeric, isOperation, isOrExpression, isPlainObject, isProxy, isSelector, isSet, isSpecificExpression, isSwitchExpression, isUnaryOperation, isValue, isWindow, isolateScope, isolatedRequire, limit, makeArray, makeRange, mark, mask, maskForRegularExpression, merge, mockConsole, modifyObject, normalizeDateTime, normalizeDomNodeSelector, normalizePhoneNumber, normalizeSelector, normalizeURL, normalizeZipCode, onDocumentReady, optionalImport, optionalRequire, paginate, parseEncodedObject, permute, permuteLength, preventDefault, removeArrayItem, removeKeyPrefixes, removeKeysInEvaluation, representPhoneNumber, representURL, round, scrollTo, selectArrayItem, serviceURLEquals, setCookie, setGlobalContext, setOptionalRequire, sliceAllExceptNumberAndLastSeparator, sliceWeekday, sort, sortTopological, stopPropagation, sumUpProperty, trailingThrottle, unwrapProxy, viewArrayAsScope, viewObjectAsScope, walkDirectoryRecursively, walkDirectoryRecursivelySync, wrap */
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99);
/* harmony import */ var core_js_modules_es_regexp_flags_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(125);
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
    [Project page](https://tsickert.com/clientnode)

    Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012

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
/***/ (function(module, __nested_webpack_exports__, __nested_webpack_require_5927__) {

__nested_webpack_require_5927__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_5927__.d(__nested_webpack_exports__, {
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
/* module decorator */ module = __nested_webpack_require_5927__.hmd(module);
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module module *//* !
    region header
    [Project page](https://tsickert.com/clientnode)

    Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/function _regenerator(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var r,e,o="function"==typeof Symbol?Symbol:{},n=o.iterator||"@@iterator",a=o.toStringTag||"@@toStringTag";function i(o,n,a,i){var u=n&&n.prototype instanceof Generator?n:Generator,f=Object.create(u.prototype);return _regeneratorDefine2(f,"_invoke",function(t,o,n){var a,i,u,f=0,p=n||[],y=!1,G={p:0,n:0,v:r,a:l,f:l.bind(r,4),d:function d(t,e){return a=t,i=0,u=r,G.n=e,c}};function l(t,o){for(i=t,u=o,e=0;!y&&f&&!n&&e<p.length;e++){var n,a=p[e],l=G.p,F=a[2];t>3?(n=F===o)&&(u=a[(i=a[4])?5:(i=3,3)],a[4]=a[5]=r):a[0]<=l&&((n=t<2&&l<a[1])?(i=0,G.v=o,G.n=a[1]):l<F&&(n=t<3||a[0]>o||o>F)&&(a[4]=t,a[5]=o,G.n=F,i=0))}if(n||t>1)return c;throw y=!0,o}return function(n,p,F){if(f>1)throw TypeError("Generator is already running");for(y&&1===p&&l(p,F),i=p,u=F;(e=i<2?r:u)||!y;){a||(i?i<3?(i>1&&(G.n=-1),l(i,u)):G.n=u:G.v=u);try{if(f=2,a){if(i||(n="next"),e=a[n]){if(!(e=e.call(a,u)))throw TypeError("iterator result is not an object");if(!e.done)return e;u=e.value,i<2&&(i=0)}else 1===i&&(e=a.return)&&e.call(a),i<2&&(u=TypeError("The iterator does not provide a '"+n+"' method"),i=1);a=r}else if((e=(y=G.n<0)?u:t.call(o,G))!==c)break}catch(t){a=r,i=1,u=t}finally{f=1}}return{value:e,done:y}}}(o,a,i),!0),f}var c={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}e=Object.getPrototypeOf;var u=[][n]?e(e([][n]())):(_regeneratorDefine2(e={},n,function(){return this}),e),f=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(u);function p(r){return Object.setPrototypeOf?Object.setPrototypeOf(r,GeneratorFunctionPrototype):(r.__proto__=GeneratorFunctionPrototype,_regeneratorDefine2(r,a,"GeneratorFunction")),r.prototype=Object.create(f),r}return GeneratorFunction.prototype=GeneratorFunctionPrototype,_regeneratorDefine2(f,"constructor",GeneratorFunctionPrototype),_regeneratorDefine2(GeneratorFunctionPrototype,"constructor",GeneratorFunction),GeneratorFunction.displayName="GeneratorFunction",_regeneratorDefine2(GeneratorFunctionPrototype,a,"GeneratorFunction"),_regeneratorDefine2(f),_regeneratorDefine2(f,a,"Generator"),_regeneratorDefine2(f,n,function(){return this}),_regeneratorDefine2(f,"toString",function(){return"[object Generator]"}),(_regenerator=function _regenerator(){return{w:i,m:p}})()}function _regeneratorDefine2(e,r,n,t){var i=Object.defineProperty;try{i({},"",{})}catch(e){i=0}_regeneratorDefine2=function _regeneratorDefine(e,r,n,t){function o(r,n){_regeneratorDefine2(e,r,function(e){return this._invoke(r,n,e)})}r?i?i(e,r,{value:n,enumerable:!t,configurable:!t,writable:!t}):e[r]=n:(o("next",0),o("throw",1),o("return",2))},_regeneratorDefine2(e,r,n,t)}function asyncGeneratorStep(n,t,e,r,o,a,c){try{var i=n[a](c),u=i.value}catch(n){return void e(n)}i.done?t(u):Promise.resolve(u).then(r,o)}function _asyncToGenerator(n){return function(){var t=this,e=arguments;return new Promise(function(r,o){var a=n.apply(t,e);function _next(n){asyncGeneratorStep(a,r,o,_next,_throw,"next",n)}function _throw(n){asyncGeneratorStep(a,r,o,_next,_throw,"throw",n)}_next(void 0)})}}function _slicedToArray(e,i){return _iterableToArrayLimit(e,i)||_unsupportedIterableToArray(e,i)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var o={}.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}function _iterableToArrayLimit(r,t){var e=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(Array.isArray(r)&&(null==e||e===("undefined"!=typeof Symbol&&[][Symbol.iterator])||e===[]["@@iterator"]))return r;if(null!=e){var l,n,i,a,u=[],o=!0,f=!1;try{if(i=(e=e.call(r)).next,0===t){if(Object(e)!==e)return;o=!1}else for(;!(o=(l=i.call(e)).done)&&(u.push(l.value),u.length!==t);o=!0);}catch(r){f=!0,n=r}finally{try{if(!o&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(f)throw n}}return u}}var determineGlobalContext=function determineGlobalContext(){if(typeof globalThis==="undefined"){if(typeof window==="undefined"){if(typeof __nested_webpack_require_5927__.g==="undefined")return   false?0:module;if(Object.prototype.hasOwnProperty.call(__nested_webpack_require_5927__.g,"window"))return __nested_webpack_require_5927__.g.window;return __nested_webpack_require_5927__.g}return window}return globalThis};var globalContext=determineGlobalContext();var currentRequire=typeof globalContext.require==="undefined"?null:globalContext.require;var optionalRequire;var setOptionalRequire=function setOptionalRequire(localCurrentRequire){optionalRequire=function optionalRequire(id){try{return localCurrentRequire?localCurrentRequire(id):null}catch(_unused){return null}}};setOptionalRequire(currentRequire);var clearRequireCache=function clearRequireCache(cache){if(cache===void 0){var _currentRequire;cache=((_currentRequire=currentRequire)===null||_currentRequire===void 0?void 0:_currentRequire.cache)||__nested_webpack_require_5927__.c}var backup={};for(var _i=0,_Object$entries=Object.entries(cache);_i<_Object$entries.length;_i++){var _Object$entries$_i=_slicedToArray(_Object$entries[_i],2),key=_Object$entries$_i[0],_module=_Object$entries$_i[1];backup[key]=_module;delete cache[key]}return backup};// Make preprocessed require function available at runtime.
var getCurrentRequire=/*#__PURE__*/function(){var _getCurrentRequire=_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(){var _yield$import,createRequire,_t;return _regenerator().w(function(_context){while(1)switch(_context.p=_context.n){case 0:if(!currentRequire){_context.n=1;break}return _context.a(2,currentRequire);case 1:_context.p=1;_context.n=2;return import(/* webpackIgnore: true */"node:module");case 2:_yield$import=_context.v;createRequire=_yield$import.createRequire;currentRequire=createRequire("file:///Users/torben.sickert/local/public/project/repository/web-internationalization/node_modules/clientnode/dist/index.js");setOptionalRequire(currentRequire);return _context.a(2,currentRequire);case 3:_context.p=3;_t=_context.v;console.error(_t);return _context.a(2,null)}},_callee,null,[[1,3]])}));function getCurrentRequire(){return _getCurrentRequire.apply(this,arguments)}return getCurrentRequire}();var isImportSyntaxSupported=function isImportSyntaxSupported(){try{// eslint-disable-next-line @typescript-eslint/no-implied-eval
new Function("import(\"data:text/javascript,\")");return true}catch(_unused2){return false}};var isolatedRequire=function isolatedRequire(path,requireFunction){if(requireFunction===void 0){requireFunction=currentRequire||__nested_webpack_require_5927__(6)}var backup=clearRequireCache(requireFunction.cache);try{return requireFunction(path);// eslint-disable-next-line no-useless-catch
}catch(error){throw error}finally{restoreRequireCache(requireFunction.cache,backup)}};var optionalImport=/*#__PURE__*/function(){var _optionalImport=_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(id,options){var _t2,_t3;return _regenerator().w(function(_context2){while(1)switch(_context2.p=_context2.n){case 0:if(options===void 0){options={}}_context2.p=1;if(!isImportSyntaxSupported()){_context2.n=3;break}_context2.n=2;return import(/* webpackIgnore: true */id,options);case 2:_t2=_context2.v;_context2.n=5;break;case 3:_context2.n=4;return Promise.resolve(null);case 4:_t2=_context2.v;case 5:return _context2.a(2,_t2);case 6:_context2.p=6;_t3=_context2.v;_context2.n=7;return Promise.resolve(null);case 7:return _context2.a(2,_context2.v)}},_callee2,null,[[1,6]])}));function optionalImport(_x,_x2){return _optionalImport.apply(this,arguments)}return optionalImport}();var restoreRequireCache=function restoreRequireCache(cache,backup){if(cache===void 0){var _currentRequire2;cache=((_currentRequire2=currentRequire)===null||_currentRequire2===void 0?void 0:_currentRequire2.cache)||__nested_webpack_require_5927__.c}clearRequireCache();for(var _i2=0,_Object$entries2=Object.entries(backup);_i2<_Object$entries2.length;_i2++){var _Object$entries2$_i=_slicedToArray(_Object$entries2[_i2],2),key=_Object$entries2$_i[0],_module2=_Object$entries2$_i[1];cache[key]=_module2}};

/***/ }),
/* 3 */
/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_15942__) {

__nested_webpack_require_15942__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_15942__.d(__nested_webpack_exports__, {
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
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_15942__(0);
/* harmony import */ var core_js_modules_es_regexp_flags_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_15942__(8);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_15942__(1);
/* harmony import */ var _indicators_js__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_15942__(4);
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_15942__(9);
/* harmony import */ var _string_js__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_15942__(7);
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module object *//* !
    region header
    [Project page](https://tsickert.com/clientnode)

    Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/function _toConsumableArray(a){return _arrayWithoutHoles(a)||_iterableToArray(a)||_unsupportedIterableToArray(a)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArray(r){var e="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(Array.isArray(r)&&(null==e||e===("undefined"!=typeof Symbol&&[][Symbol.iterator])||e===[]["@@iterator"]))return r;if(null!=e){for(var t,o=[],a=e.call(r);!(t=a.next()).done;)o.push(t.value);return o}}function _arrayWithoutHoles(a){if(Array.isArray(a))return _arrayLikeToArray(a)}function _regenerator(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var r,e,o="function"==typeof Symbol?Symbol:{},n=o.iterator||"@@iterator",a=o.toStringTag||"@@toStringTag";function i(o,n,a,i){var u=n&&n.prototype instanceof Generator?n:Generator,f=Object.create(u.prototype);return _regeneratorDefine2(f,"_invoke",function(t,o,n){var a,i,u,f=0,p=n||[],y=!1,G={p:0,n:0,v:r,a:l,f:l.bind(r,4),d:function d(t,e){return a=t,i=0,u=r,G.n=e,c}};function l(t,o){for(i=t,u=o,e=0;!y&&f&&!n&&e<p.length;e++){var n,a=p[e],l=G.p,F=a[2];t>3?(n=F===o)&&(u=a[(i=a[4])?5:(i=3,3)],a[4]=a[5]=r):a[0]<=l&&((n=t<2&&l<a[1])?(i=0,G.v=o,G.n=a[1]):l<F&&(n=t<3||a[0]>o||o>F)&&(a[4]=t,a[5]=o,G.n=F,i=0))}if(n||t>1)return c;throw y=!0,o}return function(n,p,F){if(f>1)throw TypeError("Generator is already running");for(y&&1===p&&l(p,F),i=p,u=F;(e=i<2?r:u)||!y;){a||(i?i<3?(i>1&&(G.n=-1),l(i,u)):G.n=u:G.v=u);try{if(f=2,a){if(i||(n="next"),e=a[n]){if(!(e=e.call(a,u)))throw TypeError("iterator result is not an object");if(!e.done)return e;u=e.value,i<2&&(i=0)}else 1===i&&(e=a.return)&&e.call(a),i<2&&(u=TypeError("The iterator does not provide a '"+n+"' method"),i=1);a=r}else if((e=(y=G.n<0)?u:t.call(o,G))!==c)break}catch(t){a=r,i=1,u=t}finally{f=1}}return{value:e,done:y}}}(o,a,i),!0),f}var c={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}e=Object.getPrototypeOf;var u=[][n]?e(e([][n]())):(_regeneratorDefine2(e={},n,function(){return this}),e),f=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(u);function p(r){return Object.setPrototypeOf?Object.setPrototypeOf(r,GeneratorFunctionPrototype):(r.__proto__=GeneratorFunctionPrototype,_regeneratorDefine2(r,a,"GeneratorFunction")),r.prototype=Object.create(f),r}return GeneratorFunction.prototype=GeneratorFunctionPrototype,_regeneratorDefine2(f,"constructor",GeneratorFunctionPrototype),_regeneratorDefine2(GeneratorFunctionPrototype,"constructor",GeneratorFunction),GeneratorFunction.displayName="GeneratorFunction",_regeneratorDefine2(GeneratorFunctionPrototype,a,"GeneratorFunction"),_regeneratorDefine2(f),_regeneratorDefine2(f,a,"Generator"),_regeneratorDefine2(f,n,function(){return this}),_regeneratorDefine2(f,"toString",function(){return"[object Generator]"}),(_regenerator=function _regenerator(){return{w:i,m:p}})()}function _regeneratorDefine2(e,r,n,t){var i=Object.defineProperty;try{i({},"",{})}catch(e){i=0}_regeneratorDefine2=function _regeneratorDefine(e,r,n,t){function o(r,n){_regeneratorDefine2(e,r,function(e){return this._invoke(r,n,e)})}r?i?i(e,r,{value:n,enumerable:!t,configurable:!t,writable:!t}):e[r]=n:(o("next",0),o("throw",1),o("return",2))},_regeneratorDefine2(e,r,n,t)}function asyncGeneratorStep(n,t,e,r,o,a,c){try{var i=n[a](c),u=i.value}catch(n){return void e(n)}i.done?t(u):Promise.resolve(u).then(r,o)}function _asyncToGenerator(n){return function(){var t=this,e=arguments;return new Promise(function(r,o){var a=n.apply(t,e);function _next(n){asyncGeneratorStep(a,r,o,_next,_throw,"next",n)}function _throw(n){asyncGeneratorStep(a,r,o,_next,_throw,"throw",n)}_next(void 0)})}}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function _objectSpread(r){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(o),!0).forEach(function(t){_defineProperty(r,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):ownKeys(Object(o)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))})}return r}function _defineProperty(r,t,o){return(t=_toPropertyKey(t))in r?Object.defineProperty(r,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[t]=o,r}function _toPropertyKey(r){var o=_toPrimitive(r,"string");return"symbol"==_typeof(o)?o:o+""}function _toPrimitive(t,e){if("object"!=_typeof(t)||!t)return t;var r;if("undefined"!=typeof Symbol&&void 0!==(r=t[Symbol.toPrimitive])){var i=r.call(t,e||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)};function _slicedToArray(e,i){return _iterableToArrayLimit(e,i)||_unsupportedIterableToArray(e,i)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArrayLimit(r,t){var e=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(Array.isArray(r)&&(null==e||e===("undefined"!=typeof Symbol&&[][Symbol.iterator])||e===[]["@@iterator"]))return r;if(null!=e){var l,n,i,a,u=[],o=!0,f=!1;try{if(i=(e=e.call(r)).next,0===t){if(Object(e)!==e)return;o=!1}else for(;!(o=(l=i.call(e)).done)&&(u.push(l.value),u.length!==t);o=!0);}catch(r){f=!0,n=r}finally{try{if(!o&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(f)throw n}}return u}}function _createForOfIteratorHelper(e,t){var _n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!_n){if(Array.isArray(e)||(_n=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){_n&&(e=_n);var o=0,F=function F(){};return{s:F,n:function n(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function e(r){throw r},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u,i=!0;return{s:function s(){_n=_n.call(e)},n:function n(){i=!0;var r=_n.next();return r.done?{done:!0}:{value:r.value,done:i=!1}},e:function e(r){a=!0,u=r},f:function f(){try{i||null==_n.return||_n.return()}finally{if(a)throw u}}}}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var o={}.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)};/**
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
 */var _evaluateAsyncDynamicData=/*#__PURE__*/function(){var _evaluateAsyncDynamicData2=_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(data,givenOptions){var options,result,index,_iterator16,_step16,item,_i14,_Object$entries8,_Object$entries8$_i,key,value,_t;return _regenerator().w(function(_context){while(1)switch(_context.p=_context.n){case 0:if(givenOptions===void 0){givenOptions={}}options=_objectSpread({scope:{},selfReferenceName:"self",expressionIndicatorKey:"__async_evaluate__",executionIndicatorKey:"__async_execute__"},givenOptions);if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isObject */ .Gv)(data)){_context.n=1;break}return _context.a(2,data);case 1:if(!(options.selfReferenceName in options.scope))options.scope[options.selfReferenceName]=data;result=data;if(!Array.isArray(data)){_context.n=10;break}index=0;_iterator16=_createForOfIteratorHelper(data);_context.p=2;_iterator16.s();case 3:if((_step16=_iterator16.n()).done){_context.n=6;break}item=_step16.value;_context.n=4;return _evaluateAsyncDynamicData(item,options);case 4:result[index]=_context.v;index+=1;case 5:_context.n=3;break;case 6:_context.n=8;break;case 7:_context.p=7;_t=_context.v;_iterator16.e(_t);case 8:_context.p=8;_iterator16.f();return _context.f(8);case 9:return _context.a(2,result);case 10:_i14=0,_Object$entries8=Object.entries(data);case 11:if(!(_i14<_Object$entries8.length)){_context.n=16;break}_Object$entries8$_i=_slicedToArray(_Object$entries8[_i14],2),key=_Object$entries8$_i[0],value=_Object$entries8$_i[1];if(![options.expressionIndicatorKey,options.executionIndicatorKey].includes(key)){_context.n=13;break}_context.n=12;return (0,_string_js__WEBPACK_IMPORTED_MODULE_5__/* .evaluateOrThrowError */ .VK)(value,{scope:options.scope,async:true,execute:key===options.executionIndicatorKey});case 12:return _context.a(2,_context.v);case 13:_context.n=14;return _evaluateAsyncDynamicData(value,options);case 14:result[key]=_context.v;case 15:_i14++;_context.n=11;break;case 16:return _context.a(2,result)}},_callee,null,[[2,7,8,9]])}));function evaluateAsyncDynamicData(_x,_x2){return _evaluateAsyncDynamicData2.apply(this,arguments)}return evaluateAsyncDynamicData}();/**
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
 */var evaluateDynamicData=function evaluateDynamicData(object,givenOptions){if(givenOptions===void 0){givenOptions={}}var options=_objectSpread({scope:{},selfReferenceName:"self",expressionIndicatorKey:"__evaluate__",executionIndicatorKey:"__execute__"},givenOptions);if(_typeof(object)!=="object"||object===null)return object;if(!(options.selfReferenceName in options.scope))options.scope[options.selfReferenceName]=object;var internalEvaluateAndThrowError=function internalEvaluateAndThrowError(code,type){if(type===void 0){type=options.expressionIndicatorKey}return (0,_string_js__WEBPACK_IMPORTED_MODULE_5__/* .evaluateOrThrowError */ .VK)(code,{scope:options.scope,async:false,execute:type===options.executionIndicatorKey})};var _addProxyRecursively=function addProxyRecursively(data){if(_typeof(data)!=="object"||data===null||typeof Proxy==="undefined")return data;for(var _i15=0,_Object$entries9=Object.entries(data);_i15<_Object$entries9.length;_i15++){var _Object$entries9$_i=_slicedToArray(_Object$entries9[_i15],2),key=_Object$entries9$_i[0],givenValue=_Object$entries9$_i[1];if(key!=="__target__"&&(0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isObject */ .Gv)(givenValue)){var value=givenValue;_addProxyRecursively(value);// NOTE: We only wrap needed objects for performance reasons.
if(Object.prototype.hasOwnProperty.call(value,options.expressionIndicatorKey)||Object.prototype.hasOwnProperty.call(value,options.executionIndicatorKey)){var backup=value;data[key]=new Proxy(value,{get:function get(target,key){if(key==="__target__")return target;if(key==="hasOwnProperty")/*
                                        eslint-disable
                                        @typescript-eslint/unbound-method
                                    */return target[key];/*
                                        eslint-enable
                                        @typescript-eslint/unbound-method
                                    *//*
                                    NOTE: Very complicated section, do only
                                    changes while having good tests.
                                */for(var _i16=0,_arr6=[options.expressionIndicatorKey,options.executionIndicatorKey];_i16<_arr6.length;_i16++){var type=_arr6[_i16];if(key===type&&typeof target[key]==="string")return _resolve(internalEvaluateAndThrowError(target[key],type))}var resolvedTarget=_resolve(target);if(key==="toString"){var result=internalEvaluateAndThrowError(resolvedTarget);return result[key].bind(result)}if(typeof key!=="string"){var _result$key;var _result=internalEvaluateAndThrowError(resolvedTarget);if((_result$key=_result[key])!==null&&_result$key!==void 0&&_result$key.bind)return _result[key].bind(_result);return _result[key]}for(var _i17=0,_arr7=[options.expressionIndicatorKey,options.executionIndicatorKey];_i17<_arr7.length;_i17++){var _type=_arr7[_i17];if(Object.prototype.hasOwnProperty.call(target,_type)){var _result2=internalEvaluateAndThrowError(target[_type],_type);/*
                                            NOTE: Resolving the whole
                                            evaluated result could re-enter
                                            the currently running evaluation
                                            (cyclic references between
                                            dynamic values) so only the
                                            accessed value gets resolved.
                                        */var _value13=_resolve(_result2[key]);if(_value13!==null&&_value13!==void 0&&_value13.bind)return _value13.bind(_result2);return _value13}}return resolvedTarget[key];// End of complicated stuff.
},ownKeys:function ownKeys(target){for(var _i18=0,_arr8=[options.expressionIndicatorKey,options.executionIndicatorKey];_i18<_arr8.length;_i18++){var type=_arr8[_i18];if(Object.prototype.hasOwnProperty.call(target,type))return Object.getOwnPropertyNames(_resolve(internalEvaluateAndThrowError(target[type],type)))}return Object.getOwnPropertyNames(target)}});/*
                        NOTE: Known proxy polyfills does not provide the
                        "__target__" api.
                    */if(!data[key].__target__)data[key].__target__=backup}}}return data};var _resolve=function resolve(data){if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isObject */ .Gv)(data)){if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isProxy */ .ju)(data)){// NOTE: We have to skip "ownKeys" proxy trap here.
for(var _i19=0,_arr9=[options.expressionIndicatorKey,options.executionIndicatorKey];_i19<_arr9.length;_i19++){var type=_arr9[_i19];if(Object.prototype.hasOwnProperty.call(data,type))return data[type]}data=data.__target__}for(var _i20=0,_Object$entries0=Object.entries(data);_i20<_Object$entries0.length;_i20++){var _Object$entries0$_i=_slicedToArray(_Object$entries0[_i20],2),key=_Object$entries0$_i[0],value=_Object$entries0$_i[1];if([options.expressionIndicatorKey,options.executionIndicatorKey].includes(key)){if(typeof Proxy==="undefined")return _resolve(internalEvaluateAndThrowError(value));return value}data[key]=_resolve(value)}}return data};options.scope.resolve=_resolve;var _removeProxyRecursively=function removeProxyRecursively(data){if((0,_indicators_js__WEBPACK_IMPORTED_MODULE_3__/* .isObject */ .Gv)(data))for(var _i21=0,_Object$entries1=Object.entries(data);_i21<_Object$entries1.length;_i21++){var _Object$entries1$_i=_slicedToArray(_Object$entries1[_i21],2),key=_Object$entries1$_i[0],value=_Object$entries1$_i[1];if(key!=="__target__"&&value!==null&&["function","undefined"].includes(_typeof(value))){var target=value.__target__;if(typeof target!=="undefined")data[key]=target;_removeProxyRecursively(value)}}return data};if(Object.prototype.hasOwnProperty.call(object,options.expressionIndicatorKey))return internalEvaluateAndThrowError(object[options.expressionIndicatorKey]);else if(Object.prototype.hasOwnProperty.call(object,options.executionIndicatorKey))return internalEvaluateAndThrowError(object[options.executionIndicatorKey],options.executionIndicatorKey);return _removeProxyRecursively(_resolve(_addProxyRecursively(object)))};/**
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
/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_85457__) {

__nested_webpack_require_85457__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_85457__.d(__nested_webpack_exports__, {
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
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_85457__(0);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_85457__(1);
/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_85457__(3);
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module indicators *//* !
    region header
    [Project page](https://tsickert.com/clientnode)

    Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)};function _createForOfIteratorHelper(e,t){var _n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!_n){if(Array.isArray(e)||(_n=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){_n&&(e=_n);var o=0,F=function F(){};return{s:F,n:function n(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function e(r){throw r},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u,i=!0;return{s:function s(){_n=_n.call(e)},n:function n(){i=!0;var r=_n.next();return r.done?{done:!0}:{value:r.value,done:i=!1}},e:function e(r){a=!0,u=r},f:function f(){try{i||null==_n.return||_n.return()}finally{if(a)throw u}}}}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var o={}.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n};/**
 * Checks whether one of the given pattern matches given string.
 * @param target - Target to check in pattern for.
 * @param pattern - List of pattern to check for.
 * @returns Value "true" if given object is matches by at leas one of the
 * given pattern and "false" otherwise.
 */var isAnyMatching=function isAnyMatching(target,pattern){var _iterator=_createForOfIteratorHelper(pattern),_step;try{for(_iterator.s();!(_step=_iterator.n()).done;){var currentPattern=_step.value;if(typeof currentPattern==="string"){if(currentPattern===target)return true}else if(currentPattern.test(target))return true}}catch(err){_iterator.e(err)}finally{_iterator.f()}return false};/**
 * Checks if given object is similar to an array and can be handled like an
 * array.
 * @param object - Object to check behavior for.
 * @returns A boolean value indicating whether given object is array like.
 */var isArrayLike=function isArrayLike(object){var length;try{length=Boolean(object)&&object.length}catch(_unused){return false}var type=(0,_object_js__WEBPACK_IMPORTED_MODULE_2__/* .determineType */ .Sj)(object);if(type==="function"||isWindow(object))return false;if(type==="array"||length===0)return true;if(typeof length==="number"&&length>0)try{var _dump=object[length-1];return true}catch(_unused2){// Continue regardless of an error.
}return false};/**
 * Checks whether given object is a function.
 * @param value - Value to check.
 * @returns Value "true" if given object is a function and "false"
 * otherwise.
 */var isFunction=function isFunction(value){return Boolean(value)&&["[object AsyncFunction]","[object Function]"].includes({}.toString.call(value))};/**
 * Checks whether given object is a map.
 * @param value - Value to check.
 * @returns Value "true" if given object is a map and "false" otherwise.
 */var isMap=function isMap(value){return (0,_object_js__WEBPACK_IMPORTED_MODULE_2__/* .determineType */ .Sj)(value)==="map"};/**
 * Determines whether its argument represents a JavaScript number.
 * @param value - Value to analyze.
 * @returns A boolean value indicating whether given object is numeric
 * like.
 */var isNumeric=function isNumeric(value){var type=(0,_object_js__WEBPACK_IMPORTED_MODULE_2__/* .determineType */ .Sj)(value);/*
        NOTE: "parseFloat" "NaNs" numeric-cast false positives ("") but
        misinterprets leading-number strings, particularly hex literals
        ("0x...") subtraction forces infinities to NaN.
    */return["number","string"].includes(type)&&!isNaN(value-parseFloat(value))};/**
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
 * Checks whether given object is a proxy.
 * @param value - Value to check.
 * @returns Value "true" if given object is a proxy and "false" otherwise.
 */var isProxy=function isProxy(value){return Boolean(value===null||value===void 0?void 0:value.__target__)};/**
 * Checks whether given object is a set.
 * @param value - Value to check.
 * @returns Value "true" if given object is a set and "false" otherwise.
 */var isSet=function isSet(value){return (0,_object_js__WEBPACK_IMPORTED_MODULE_2__/* .determineType */ .Sj)(value)==="set"};/**
 * Determine whether the argument is a window.
 * @param value - Value to check for.
 * @returns Boolean value indicating the result.
 */var isWindow=function isWindow(value){return![null,undefined].includes(value)&&_typeof(value)==="object"&&value===(value===null||value===void 0?void 0:value.window)};

/***/ }),
/* 5 */
/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_93223__) {

/* harmony export */ __nested_webpack_require_93223__.d(__nested_webpack_exports__, {
/* harmony export */   $Q: function() { return /* binding */ MAXIMAL_NUMBER_OF_ITERATIONS; },
/* harmony export */   Lz: function() { return /* binding */ globalContext; },
/* harmony export */   QH: function() { return /* binding */ mockConsole; },
/* harmony export */   tE: function() { return /* binding */ NOOP; },
/* harmony export */   zm: function() { return /* binding */ setGlobalContext; }
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_93223__(1);
/* harmony import */ var _module_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_93223__(2);
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module context *//* !
    region header
    [Project page](https://tsickert.com/clientnode)

    Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/var _optionalRequire$defa,_optionalRequire;function _createForOfIteratorHelper(e,t){var _n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!_n){if(Array.isArray(e)||(_n=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){_n&&(e=_n);var o=0,F=function F(){};return{s:F,n:function n(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function e(r){throw r},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u,i=!0;return{s:function s(){_n=_n.call(e)},n:function n(){i=!0;var r=_n.next();return r.done?{done:!0}:{value:r.value,done:i=!1}},e:function e(r){a=!0,u=r},f:function f(){try{i||null==_n.return||_n.return()}finally{if(a)throw u}}}}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var o={}.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n};var globalContext=(0,_module_js__WEBPACK_IMPORTED_MODULE_0__/* .determineGlobalContext */ .a8)();var setGlobalContext=function setGlobalContext(context){globalContext=context};globalContext.fetch=globalContext.fetch?globalContext.fetch.bind(globalContext):(_optionalRequire$defa=(_optionalRequire=(0,_module_js__WEBPACK_IMPORTED_MODULE_0__/* .optionalRequire */ .I5)("node-fetch"))===null||_optionalRequire===void 0?void 0:_optionalRequire.default)!==null&&_optionalRequire$defa!==void 0?_optionalRequire$defa:function(){for(var _len=arguments.length,parameters=new Array(_len),_key=0;_key<_len;_key++){parameters[_key]=arguments[_key]}return (0,_module_js__WEBPACK_IMPORTED_MODULE_0__/* .optionalImport */ .Sw)(/* webpackIgnore: true */"node-fetch").then(function(module){var _ref;return(_ref=module).default.apply(_ref,parameters)})};var MAXIMAL_NUMBER_OF_ITERATIONS={value:100};// A no-op dummy function.
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
/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_97539__) {

__nested_webpack_require_97539__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_97539__.d(__nested_webpack_exports__, {
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
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_97539__(0);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_97539__(1);
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_97539__(5);
/* harmony import */ var _filesystem_js__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_97539__(12);
/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_97539__(3);
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module string *//* !
    region header
    [Project page](https://tsickert.com/clientnode)

    Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/// region imports
function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _slicedToArray(e,i){return _iterableToArrayLimit(e,i)||_unsupportedIterableToArray(e,i)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArrayLimit(r,t){var e=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(Array.isArray(r)&&(null==e||e===("undefined"!=typeof Symbol&&[][Symbol.iterator])||e===[]["@@iterator"]))return r;if(null!=e){var l,n,i,a,u=[],o=!0,f=!1;try{if(i=(e=e.call(r)).next,0===t){if(Object(e)!==e)return;o=!1}else for(;!(o=(l=i.call(e)).done)&&(u.push(l.value),u.length!==t);o=!0);}catch(r){f=!0,n=r}finally{try{if(!o&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(f)throw n}}return u}}function _construct(e,o,p){if(_isNativeReflectConstruct())return Reflect.construct.apply(null,arguments);var n=[null];n.push.apply(n,o);var l=new(e.bind.apply(e,n));return p&&_setPrototypeOf(l,p.prototype),l}function _setPrototypeOf(t,e){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},_setPrototypeOf(t,e)}function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}function _toConsumableArray(a){return _arrayWithoutHoles(a)||_iterableToArray(a)||_unsupportedIterableToArray(a)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArray(r){var e="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(Array.isArray(r)&&(null==e||e===("undefined"!=typeof Symbol&&[][Symbol.iterator])||e===[]["@@iterator"]))return r;if(null!=e){for(var t,o=[],a=e.call(r);!(t=a.next()).done;)o.push(t.value);return o}}function _arrayWithoutHoles(a){if(Array.isArray(a))return _arrayLikeToArray(a)};function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function _objectSpread(r){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(o),!0).forEach(function(t){_defineProperty(r,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):ownKeys(Object(o)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))})}return r}function _defineProperty(r,t,o){return(t=_toPropertyKey(t))in r?Object.defineProperty(r,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[t]=o,r}function _toPropertyKey(r){var o=_toPrimitive(r,"string");return"symbol"==_typeof(o)?o:o+""}function _toPrimitive(t,e){if("object"!=_typeof(t)||!t)return t;var r;if("undefined"!=typeof Symbol&&void 0!==(r=t[Symbol.toPrimitive])){var i=r.call(t,e||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function _createForOfIteratorHelper(e,t){var _n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!_n){if(Array.isArray(e)||(_n=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){_n&&(e=_n);var o=0,F=function F(){};return{s:F,n:function n(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function e(r){throw r},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u,i=!0;return{s:function s(){_n=_n.call(e)},n:function n(){i=!0;var r=_n.next();return r.done?{done:!0}:{value:r.value,done:i=!1}},e:function e(r){a=!0,u=r},f:function f(){try{i||null==_n.return||_n.return()}finally{if(a)throw u}}}}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var o={}.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n};// endregion
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
    */// region url handling
/**
 * Appends a path selector to the given path if there isn't one yet.
 * @param path - The path for appending a selector.
 * @param pathSeparator - The selector for appending to a path.
 * @returns The appended path.
 */var addSeparatorToPath=function addSeparatorToPath(path,pathSeparator){if(pathSeparator===void 0){pathSeparator="/"}path=path.trim();if(path.substring(path.length-1)!==pathSeparator&&path.length)return path+pathSeparator;return path};/**
 * This method is intended for encoding *key* or *value* parts of a query
 * component. We need a custom method because "encodeURIComponent()" is too
 * aggressive and encodes stuff that doesn't have to be encoded per
 * "http://tools.ietf.org/html/rfc3986:".
 * @param url - URL to encode.
 * @param encodeSpaces - Indicates whether given url should encode
 * whitespaces as "+" or "%20".
 * @returns Encoded given url.
 */var encodeURIComponentExtended=function encodeURIComponentExtended(url,encodeSpaces){if(encodeSpaces===void 0){encodeSpaces=false}return encodeURIComponent(url).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,encodeSpaces?"%20":"+")};/**
 * Extracts domain name from given url. If no explicit domain name given
 * current domain name will be assumed. If no parameter is given, the current
 * domain name will be determined.
 * @param url - The url to extract domain from.
 * @param fallback - The fallback host name if no one exits in given url
 * (default is current hostname).
 * @returns Extracted domain.
 */var getDomainName=function getDomainName(url,fallback){if(url===void 0){var _globalContext$locati;url=((_globalContext$locati=_context_js__WEBPACK_IMPORTED_MODULE_2__/* .globalContext */ .Lz.location)===null||_globalContext$locati===void 0?void 0:_globalContext$locati.href)||""}if(fallback===void 0){var _globalContext$locati2;fallback=((_globalContext$locati2=_context_js__WEBPACK_IMPORTED_MODULE_2__/* .globalContext */ .Lz.location)===null||_globalContext$locati2===void 0?void 0:_globalContext$locati2.hostname)||""}var result=/^([a-z]*:?\/\/)?([^/]+?)(?::[0-9]+)?(?:\/.*|$)/i.exec(url);if(result&&result.length>2&&result[1]&&result[2])return result[2];return fallback};/**
 * Extracts port number from given url. If no explicit port number is given
 * and no fallback is defined, the current port number will be assumed for local
 * links. For external links 80 will be assumed for http protocols and 443
 * for https protocols.
 * @param url - The url to extract port from.
 * @param fallback - Fallback port number if no explicit one was found.
 * Default is derived from the current protocol name.
 * @returns Extracted port number.
 */var getPortNumber=function getPortNumber(url,fallback){var _globalContext$locati5;if(url===void 0){var _globalContext$locati3;url=((_globalContext$locati3=_context_js__WEBPACK_IMPORTED_MODULE_2__/* .globalContext */ .Lz.location)===null||_globalContext$locati3===void 0?void 0:_globalContext$locati3.href)||""}if(fallback===void 0){var _globalContext$locati4;fallback=(_globalContext$locati4=_context_js__WEBPACK_IMPORTED_MODULE_2__/* .globalContext */ .Lz.location)!==null&&_globalContext$locati4!==void 0&&_globalContext$locati4.port?parseInt(_context_js__WEBPACK_IMPORTED_MODULE_2__/* .globalContext */ .Lz.location.port):null}var result=/^(?:[a-z]*:?\/\/[^/]+?)?[^/]+?:([0-9]+)/i.exec(url);if(result&&result.length>1)return parseInt(result[1],10);if(fallback!==null)return fallback;if(// NOTE: Would result in an endless loop:
// serviceURLEquals(url, ...parameters) &&
(_globalContext$locati5=_context_js__WEBPACK_IMPORTED_MODULE_2__/* .globalContext */ .Lz.location)!==null&&_globalContext$locati5!==void 0&&_globalContext$locati5.port&&parseInt(_context_js__WEBPACK_IMPORTED_MODULE_2__/* .globalContext */ .Lz.location.port,10))return parseInt(_context_js__WEBPACK_IMPORTED_MODULE_2__/* .globalContext */ .Lz.location.port,10);return getProtocolName(url)==="https"?443:80};/**
 * Extracts protocol name from given url. If no explicit url is given,
 * the current protocol will be assumed. If no parameter is given, the current
 * protocol number will be determined.
 * @param url - The url to extract protocol from.
 * @param fallback - Fallback port to use if no protocol exists in given
 * url (default is current protocol).
 * @returns Extracted protocol.
 */var getProtocolName=function getProtocolName(url,fallback){if(url===void 0){var _globalContext$locati6;url=((_globalContext$locati6=_context_js__WEBPACK_IMPORTED_MODULE_2__/* .globalContext */ .Lz.location)===null||_globalContext$locati6===void 0?void 0:_globalContext$locati6.href)||""}if(fallback===void 0){var _globalContext$locati7;fallback=((_globalContext$locati7=_context_js__WEBPACK_IMPORTED_MODULE_2__/* .globalContext */ .Lz.location)===null||_globalContext$locati7===void 0?void 0:_globalContext$locati7.protocol)&&_context_js__WEBPACK_IMPORTED_MODULE_2__/* .globalContext */ .Lz.location.protocol.substring(0,_context_js__WEBPACK_IMPORTED_MODULE_2__/* .globalContext */ .Lz.location.protocol.length-1)||""}var result=/^([a-z]+):\/\//i.exec(url);if(result&&result.length>1&&result[1])return result[1];return fallback};/**
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
 */var getURLParameter=function getURLParameter(keyToGet,allowDuplicates,givenInput,subDelimiter,hashedPathIndicator,givenSearch,givenHash){if(keyToGet===void 0){keyToGet=null}if(allowDuplicates===void 0){allowDuplicates=false}if(givenInput===void 0){givenInput=null}if(subDelimiter===void 0){subDelimiter="$"}if(hashedPathIndicator===void 0){hashedPathIndicator="!"}if(givenSearch===void 0){givenSearch=null}if(givenHash===void 0){var _globalContext$locati8,_globalContext$locati9;givenHash=(_globalContext$locati8=(_globalContext$locati9=_context_js__WEBPACK_IMPORTED_MODULE_2__/* .globalContext */ .Lz.location)===null||_globalContext$locati9===void 0?void 0:_globalContext$locati9.hash)!==null&&_globalContext$locati8!==void 0?_globalContext$locati8:""}// region set search and hash
var hash=givenHash!==null&&givenHash!==void 0?givenHash:"#";var search="";if(givenSearch)search=givenSearch;else if(hashedPathIndicator&&hash.startsWith(hashedPathIndicator)){var subHashStartIndex=hash.indexOf("#");var pathAndSearch;if(subHashStartIndex===-1){pathAndSearch=hash.substring(hashedPathIndicator.length);hash=""}else{pathAndSearch=hash.substring(hashedPathIndicator.length,subHashStartIndex);hash=hash.substring(subHashStartIndex)}var subSearchStartIndex=pathAndSearch.indexOf("?");if(subSearchStartIndex!==-1)search=pathAndSearch.substring(subSearchStartIndex)}else if(_context_js__WEBPACK_IMPORTED_MODULE_2__/* .globalContext */ .Lz.location)search=_context_js__WEBPACK_IMPORTED_MODULE_2__/* .globalContext */ .Lz.location.search||"";var input=givenInput?givenInput:search;// endregion
// region determine data from search and hash if specified
var both=input==="&";if(both||input==="#"){var decodedHash="";try{decodedHash=decodeURIComponent(hash)}catch(_unused){// Continue regardless of an error.
}var subDelimiterIndex=decodedHash.indexOf(subDelimiter);if(subDelimiterIndex===-1)input="";else{input=decodedHash.substring(subDelimiterIndex);if(input.startsWith(subDelimiter))input=input.substring(subDelimiter.length)}}else if(input.startsWith("?"))input=input.substring("?".length);var data=input?input.split("&"):[];search=search.substring("?".length);if(both&&search)data=data.concat(search.split("&"));// endregion
// region construct data structure
var parameters=[];var _iterator=_createForOfIteratorHelper(data),_step;try{for(_iterator.s();!(_step=_iterator.n()).done;){var _value=_step.value;var keyValuePair=_value.split("=");var key=void 0;try{key=decodeURIComponent(keyValuePair[0])}catch(_unused2){key=""}try{_value=decodeURIComponent(keyValuePair[1])}catch(_unused3){_value=""}parameters.push(key);if(allowDuplicates){if(Object.prototype.hasOwnProperty.call(parameters,key)&&Array.isArray(parameters[key]))parameters[key].push(_value);else parameters[key]=[_value];}else parameters[key]=_value}// endregion
}catch(err){_iterator.e(err)}finally{_iterator.f()}if(keyToGet){if(Object.prototype.hasOwnProperty.call(parameters,keyToGet))return parameters[keyToGet];return null}return parameters};/**
 * Checks if a given path has given path prefix.
 * @param prefix - Path prefix to search for.
 * @param path - Path to search in.
 * @param separator - Delimiter to use in a path (default is the posix
 * conform slash).
 * @returns Value "true" if given prefix occurs and "false" otherwise.
 */var hasPathPrefix=function hasPathPrefix(prefix,path,separator){if(prefix===void 0){prefix="/admin"}if(path===void 0){var _globalContext$locati0;path=((_globalContext$locati0=_context_js__WEBPACK_IMPORTED_MODULE_2__/* .globalContext */ .Lz.location)===null||_globalContext$locati0===void 0?void 0:_globalContext$locati0.pathname)||""}if(separator===void 0){separator="/"}if(typeof prefix==="string"){if(!prefix.endsWith(separator))prefix+=separator;return path===prefix.substring(0,prefix.length-separator.length)||path.startsWith(prefix)}return false};/**
 * Normalized given website url.
 * @param givenURL - Uniform resource locator to normalize.
 * @returns Normalized result.
 */var normalizeURL=function normalizeURL(givenURL){if(typeof givenURL==="string"){var url=givenURL.replace(/^:?\/+/,"").replace(/\/+$/,"").trim();if(url.startsWith("http"))return url;return"http://".concat(url)}return""};/**
 * Represents given website url.
 * @param url - Uniform resource locator to represent.
 * @returns Represented result.
 */var representURL=function representURL(url){if(typeof url==="string")return url.replace(/^(https?)?:?\/+/,"").replace(/\/+$/,"").trim();return""};/**
 * Checks if given url points to another "service" than the second given url.
 * If no second given url is provided, the current url will be assumed.
 * @param url - URL to check against second url.
 * @param referenceURL - URL to check against first url.
 * @returns Returns "true" if given first url has same domain as given
 * second (or current).
 */var serviceURLEquals=function serviceURLEquals(url,referenceURL){if(referenceURL===void 0){var _globalContext$locati1;referenceURL=((_globalContext$locati1=_context_js__WEBPACK_IMPORTED_MODULE_2__/* .globalContext */ .Lz.location)===null||_globalContext$locati1===void 0?void 0:_globalContext$locati1.href)||""}var domain=getDomainName(url,"");var protocol=getProtocolName(url,"");var port=getPortNumber(url);return(domain===""||domain===getDomainName(referenceURL))&&(protocol===""||protocol===getProtocolName(referenceURL))&&(port===null||port===getPortNumber(referenceURL))};// endregion
/**
 * Converts a camel-cased string to its delimited string version.
 * @param value - The string to format.
 * @param delimiter - Defines delimiter string.
 * @param abbreviations - Collection of shortcut words to represent uppercased.
 * @returns The formatted string.
 */var camelCaseToDelimited=function camelCaseToDelimited(value,delimiter,abbreviations){if(delimiter===void 0){delimiter="-"}if(abbreviations===void 0){abbreviations=null}if(!abbreviations)abbreviations=_constants_js__WEBPACK_IMPORTED_MODULE_1__/* .ABBREVIATIONS */ .Iy;var escapedDelimiter=maskForRegularExpression(delimiter);if(abbreviations.length){var abbreviationPattern="";var _iterator2=_createForOfIteratorHelper(abbreviations),_step2;try{for(_iterator2.s();!(_step2=_iterator2.n()).done;){var abbreviation=_step2.value;if(abbreviationPattern)abbreviationPattern+="|";abbreviationPattern+=abbreviation.toUpperCase()}}catch(err){_iterator2.e(err)}finally{_iterator2.f()}value=value.replace(new RegExp("(".concat(abbreviationPattern,")(").concat(abbreviationPattern,")"),"g"),"$1".concat(delimiter,"$2"))}value=value.replace(new RegExp("([^".concat(escapedDelimiter,"])([A-Z][a-z]+)"),"g"),"$1".concat(delimiter,"$2"));return value.replace(new RegExp("([a-z0-9])([A-Z])","g"),"$1".concat(delimiter,"$2")).toLowerCase()};/**
 * Converts a string to its capitalized representation.
 * @param string - The string to format.
 * @returns The formatted string.
 */var capitalize=function capitalize(string){return string.charAt(0).toUpperCase()+string.substring(1)};/**
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
    */var globalNames=Object.keys(globalThis).concat("globalThis").filter(function(name){return new RegExp("^[".concat(ALLOWED_STARTING_VARIABLE_SYMBOLS,"]")+"[".concat(ALLOWED_VARIABLE_SYMBOLS,"]*$")).test(name)&&!KNOWN_DISALLOWED_VARIABLE_NAMES_BUT_OBJECT_KEYS.includes(name)});var result={error:null,globalNames:globalNames,globalNamesUndefinedList:globalNames.map(function(){return undefined}),originalScopeNames:Array.isArray(options.scope)?options.scope:typeof options.scope==="string"?[options.scope]:Object.keys(options.scope),scopeNameMapping:{},scopeNames:[],templateFunction:function templateFunction(){return undefined}};var _iterator3=_createForOfIteratorHelper(result.originalScopeNames),_step3;try{for(_iterator3.s();!(_step3=_iterator3.n()).done;){var name=_step3.value;var newName=convertToValidVariableName(name);result.scopeNameMapping[name]=newName;result.scopeNames.push(newName)}// region try to polyfill template string literals for older engines
}catch(err){_iterator3.e(err)}finally{_iterator3.f()}if(POLYFILL_TEMPLATE_STRINGS.value)if((_Babel=_context_js__WEBPACK_IMPORTED_MODULE_2__/* .globalContext */ .Lz.Babel)!==null&&_Babel!==void 0&&_Babel.transform)expression=_context_js__WEBPACK_IMPORTED_MODULE_2__/* .globalContext */ .Lz.Babel.transform("(".concat(expression,")"),{plugins:["transform-template-literals"]}).code;else if(expression.startsWith("`")&&expression.endsWith("`")){var escapeMarker="####";// Convert template string into legacy string concatenations.
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
 * Compresses given style attribute value.
 * @param styleValue - Style value to compress.
 * @returns The compressed value.
 */var compressStyleValue=function compressStyleValue(styleValue){return styleValue.replace(/ *([:;]) */g,"$1").replace(/ +/g," ").replace(/^;+/,"").replace(/;+$/,"").trim()};/**
 * Translates a given name into a valid JavaScript one.
 * @param name - Name to convert.
 * @returns Converted name is returned.
 */var convertToValidVariableName=function convertToValidVariableName(name){if(["class","default"].includes(name))return"_".concat(name);return name// Remove all disallowed starting characters.
.replace(new RegExp("^[^".concat(ALLOWED_STARTING_VARIABLE_SYMBOLS,"]+")),"")// Remove all disallowed characters within a variable name and make
// continuing character upper case.
.replace(new RegExp("[^".concat(ALLOWED_VARIABLE_SYMBOLS,"]+([a-zA-Z])"),"g"),function(_fullMatch,firstLetter){return firstLetter.toUpperCase()})};/**
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
 * Translates a given string into the regular expression validated
 * representation.
 * @param value - String to convert.
 * @param excludeSymbols - Symbols not to escape.
 * @returns Converted string.
 */var escapeRegularExpressions=function escapeRegularExpressions(value,excludeSymbols){if(excludeSymbols===void 0){excludeSymbols=[]}// NOTE: This is only for performance improvements.
if(value.length===1&&!_constants_js__WEBPACK_IMPORTED_MODULE_1__/* .SPECIAL_REGEX_SEQUENCES */ .FI.includes(value))return value;// The escape sequence must also be escaped; but at first.
if(!excludeSymbols.includes("\\"))value.replace(/\\/g,"\\\\");var _iterator5=_createForOfIteratorHelper(_constants_js__WEBPACK_IMPORTED_MODULE_1__/* .SPECIAL_REGEX_SEQUENCES */ .FI),_step5;try{for(_iterator5.s();!(_step5=_iterator5.n()).done;){var replace=_step5.value;if(!excludeSymbols.includes(replace))value=value.replace(new RegExp("\\".concat(replace),"g"),"\\".concat(replace))}}catch(err){_iterator5.e(err)}finally{_iterator5.f()}return value};/**
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
 * Abbreviates a given string if it excesses a given limit.
 * @param value - String to abbreviate.
 * @param limit - Maximum length of processed string.
 * @returns Abbreviated given string.
 */var limit=function limit(value,_limit){if(_limit===void 0){_limit=100}if(value.length<=_limit)return value;var dots="...";return value.substring(0,_limit-dots.length)+dots};/**
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
 * Validates the current string for using in a regular expression pattern.
 * Special regular expression chars will be escaped.
 * @param value - The string to format.
 * @returns The formatted string.
 */var maskForRegularExpression=function maskForRegularExpression(value){return value.replace(/([\\|.*$^+[\]()?\-{}])/g,"\\$1")};/**
 * Converts a dom selector to a prefixed dom selector string.
 * @param selector - A dom node selector.
 * @param selectorPrefix - A dom node selector prefix to take into account.
 * @returns Returns given selector prefixed.
 */var normalizeDomNodeSelector=function normalizeDomNodeSelector(selector,selectorPrefix){if(selectorPrefix===void 0){selectorPrefix=""}var domNodeSelectorPrefix="";if(selectorPrefix)domNodeSelectorPrefix="".concat(selectorPrefix," ");if(!(selector.startsWith(domNodeSelectorPrefix)||selector.trim().startsWith("<")))selector=domNodeSelectorPrefix+selector;return selector.trim()};/**
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
    */var compiledPattern=/^(.*[0-9].*)-([0-9]+)$/;if(compiledPattern.test(value))return value.replace(compiledPattern,function(_match,baseNumber,directDialingNumberSuffix){return"".concat(baseNumber.replace(/[^0-9]+/g,""),"-")+directDialingNumberSuffix});return value.replace(/[^0-9]+/g,"")};

/***/ }),
/* 8 */
/***/ (function(module, __unused_webpack_exports, __nested_webpack_require_148917__) {

var x = function(y) {
	var x = {}; __nested_webpack_require_148917__.d(x, y); return x
} 
var y = function(x) { return function() { return x; }; }
module.exports = x({  });

/***/ }),
/* 9 */
/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_149181__) {

__nested_webpack_require_149181__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_149181__.d(__nested_webpack_exports__, {
/* harmony export */   LI: function() { return /* binding */ round; },
/* harmony export */   RI: function() { return /* binding */ floor; },
/* harmony export */   W2: function() { return /* binding */ isNotANumber; },
/* harmony export */   mk: function() { return /* binding */ ceil; },
/* harmony export */   n$: function() { return /* binding */ getUTCTimestamp; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_149181__(0);
/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_149181__(3);
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module number *//* !
    region header
    [Project page](https://tsickert.com/clientnode)

    Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*//**
 * Rounds a given number up accurate to given number of digits.
 * @param number - The number to round.
 * @param digits - The number of digits after comma.
 * @returns Returns the rounded number.
 */var ceil=function ceil(number,digits){if(digits===void 0){digits=0}return Math.ceil(number*Math.pow(10,digits))/Math.pow(10,digits)};/**
 * Rounds a given number down accurate to given number of digits.
 * @param number - The number to round.
 * @param digits - The number of digits after comma.
 * @returns Returns the rounded number.
 */var floor=function floor(number,digits){if(digits===void 0){digits=0}return Math.floor(number*Math.pow(10,digits))/Math.pow(10,digits)};/**
 * Rounds a given number accurate to given number of digits.
 * @param number - The number to round.
 * @param digits - The number of digits after comma.
 * @returns Returns the rounded number.
 */var round=function round(number,digits){if(digits===void 0){digits=0}return Math.round(number*Math.pow(10,digits))/Math.pow(10,digits)};/**
 * Determines corresponding utc timestamp for given date object.
 * @param value - Date to convert.
 * @param inMilliseconds - Indicates whether given number should be in
 * seconds (default) or milliseconds.
 * @returns Determined numerous value.
 */var getUTCTimestamp=function getUTCTimestamp(value,inMilliseconds){if(inMilliseconds===void 0){inMilliseconds=false}var date=[null,undefined].includes(value)?new Date:new Date(value);return Date.UTC(date.getUTCFullYear(),date.getUTCMonth(),date.getUTCDate(),date.getUTCHours(),date.getUTCMinutes(),date.getUTCSeconds(),date.getUTCMilliseconds())/(inMilliseconds?1:1000)};/**
 * Checks if given object is java scripts native "Number.NaN" object.
 * @param value - Value to check.
 * @returns Returns whether given value is not a number or not.
 */var isNotANumber=function isNotANumber(value){return (0,_object_js__WEBPACK_IMPORTED_MODULE_1__/* .determineType */ .Sj)(value)==="number"&&isNaN(value)};

/***/ }),
/* 10 */
/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_152400__) {

/* harmony export */ __nested_webpack_require_152400__.d(__nested_webpack_exports__, {
/* harmony export */   c: function() { return /* binding */ Lock; }
/* harmony export */ });
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module Lock *//* !
    region header
    [Project page](https://tsickert.com/clientnode)

    Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _regenerator(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var r,e,o="function"==typeof Symbol?Symbol:{},n=o.iterator||"@@iterator",a=o.toStringTag||"@@toStringTag";function i(o,n,a,i){var u=n&&n.prototype instanceof Generator?n:Generator,f=Object.create(u.prototype);return _regeneratorDefine2(f,"_invoke",function(t,o,n){var a,i,u,f=0,p=n||[],y=!1,G={p:0,n:0,v:r,a:l,f:l.bind(r,4),d:function d(t,e){return a=t,i=0,u=r,G.n=e,c}};function l(t,o){for(i=t,u=o,e=0;!y&&f&&!n&&e<p.length;e++){var n,a=p[e],l=G.p,F=a[2];t>3?(n=F===o)&&(u=a[(i=a[4])?5:(i=3,3)],a[4]=a[5]=r):a[0]<=l&&((n=t<2&&l<a[1])?(i=0,G.v=o,G.n=a[1]):l<F&&(n=t<3||a[0]>o||o>F)&&(a[4]=t,a[5]=o,G.n=F,i=0))}if(n||t>1)return c;throw y=!0,o}return function(n,p,F){if(f>1)throw TypeError("Generator is already running");for(y&&1===p&&l(p,F),i=p,u=F;(e=i<2?r:u)||!y;){a||(i?i<3?(i>1&&(G.n=-1),l(i,u)):G.n=u:G.v=u);try{if(f=2,a){if(i||(n="next"),e=a[n]){if(!(e=e.call(a,u)))throw TypeError("iterator result is not an object");if(!e.done)return e;u=e.value,i<2&&(i=0)}else 1===i&&(e=a.return)&&e.call(a),i<2&&(u=TypeError("The iterator does not provide a '"+n+"' method"),i=1);a=r}else if((e=(y=G.n<0)?u:t.call(o,G))!==c)break}catch(t){a=r,i=1,u=t}finally{f=1}}return{value:e,done:y}}}(o,a,i),!0),f}var c={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}e=Object.getPrototypeOf;var u=[][n]?e(e([][n]())):(_regeneratorDefine2(e={},n,function(){return this}),e),f=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(u);function p(r){return Object.setPrototypeOf?Object.setPrototypeOf(r,GeneratorFunctionPrototype):(r.__proto__=GeneratorFunctionPrototype,_regeneratorDefine2(r,a,"GeneratorFunction")),r.prototype=Object.create(f),r}return GeneratorFunction.prototype=GeneratorFunctionPrototype,_regeneratorDefine2(f,"constructor",GeneratorFunctionPrototype),_regeneratorDefine2(GeneratorFunctionPrototype,"constructor",GeneratorFunction),GeneratorFunction.displayName="GeneratorFunction",_regeneratorDefine2(GeneratorFunctionPrototype,a,"GeneratorFunction"),_regeneratorDefine2(f),_regeneratorDefine2(f,a,"Generator"),_regeneratorDefine2(f,n,function(){return this}),_regeneratorDefine2(f,"toString",function(){return"[object Generator]"}),(_regenerator=function _regenerator(){return{w:i,m:p}})()}function _regeneratorDefine2(e,r,n,t){var i=Object.defineProperty;try{i({},"",{})}catch(e){i=0}_regeneratorDefine2=function _regeneratorDefine(e,r,n,t){function o(r,n){_regeneratorDefine2(e,r,function(e){return this._invoke(r,n,e)})}r?i?i(e,r,{value:n,enumerable:!t,configurable:!t,writable:!t}):e[r]=n:(o("next",0),o("throw",1),o("return",2))},_regeneratorDefine2(e,r,n,t)}function asyncGeneratorStep(n,t,e,r,o,a,c){try{var i=n[a](c),u=i.value}catch(n){return void e(n)}i.done?t(u):Promise.resolve(u).then(r,o)}function _asyncToGenerator(n){return function(){var t=this,e=arguments;return new Promise(function(r,o){var a=n.apply(t,e);function _next(n){asyncGeneratorStep(a,r,o,_next,_throw,"next",n)}function _throw(n){asyncGeneratorStep(a,r,o,_next,_throw,"throw",n)}_next(void 0)})}}function _classCallCheck(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(r,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,_toPropertyKey(i.key),i)}}function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function _defineProperty(r,t,o){return(t=_toPropertyKey(t))in r?Object.defineProperty(r,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[t]=o,r}function _toPropertyKey(r){var o=_toPrimitive(r,"string");return"symbol"==_typeof(o)?o:o+""}function _toPrimitive(t,e){if("object"!=_typeof(t)||!t)return t;var r;if("undefined"!=typeof Symbol&&void 0!==(r=t[Symbol.toPrimitive])){var i=r.call(t,e||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}/**
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
/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_161114__) {

/* harmony export */ __nested_webpack_require_161114__.d(__nested_webpack_exports__, {
/* harmony export */   j: function() { return /* binding */ Semaphore; }
/* harmony export */ });
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module Semaphore *//* !
    region header
    [Project page](https://tsickert.com/clientnode)

    Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _classCallCheck(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(r,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,_toPropertyKey(i.key),i)}}function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function _defineProperty(r,t,o){return(t=_toPropertyKey(t))in r?Object.defineProperty(r,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[t]=o,r}function _toPropertyKey(r){var o=_toPrimitive(r,"string");return"symbol"==_typeof(o)?o:o+""}function _toPrimitive(t,e){if("object"!=_typeof(t)||!t)return t;var r;if("undefined"!=typeof Symbol&&void 0!==(r=t[Symbol.toPrimitive])){var i=r.call(t,e||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}/**
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
/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_164680__) {

__nested_webpack_require_164680__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_164680__.d(__nested_webpack_exports__, {
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
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_164680__(0);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_164680__(1);
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_164680__(5);
/* harmony import */ var _module_js__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_164680__(2);
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module filesystem *//* !
    region header
    [Project page](https://tsickert.com/clientnode)

    Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function _objectSpread(r){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(o),!0).forEach(function(t){_defineProperty(r,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):ownKeys(Object(o)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))})}return r}function _defineProperty(r,t,o){return(t=_toPropertyKey(t))in r?Object.defineProperty(r,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[t]=o,r}function _toPropertyKey(r){var o=_toPrimitive(r,"string");return"symbol"==_typeof(o)?o:o+""}function _toPrimitive(t,e){if("object"!=_typeof(t)||!t)return t;var r;if("undefined"!=typeof Symbol&&void 0!==(r=t[Symbol.toPrimitive])){var i=r.call(t,e||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)};function _regenerator(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var r,e,o="function"==typeof Symbol?Symbol:{},n=o.iterator||"@@iterator",a=o.toStringTag||"@@toStringTag";function i(o,n,a,i){var u=n&&n.prototype instanceof Generator?n:Generator,f=Object.create(u.prototype);return _regeneratorDefine2(f,"_invoke",function(t,o,n){var a,i,u,f=0,p=n||[],y=!1,G={p:0,n:0,v:r,a:l,f:l.bind(r,4),d:function d(t,e){return a=t,i=0,u=r,G.n=e,c}};function l(t,o){for(i=t,u=o,e=0;!y&&f&&!n&&e<p.length;e++){var n,a=p[e],l=G.p,F=a[2];t>3?(n=F===o)&&(u=a[(i=a[4])?5:(i=3,3)],a[4]=a[5]=r):a[0]<=l&&((n=t<2&&l<a[1])?(i=0,G.v=o,G.n=a[1]):l<F&&(n=t<3||a[0]>o||o>F)&&(a[4]=t,a[5]=o,G.n=F,i=0))}if(n||t>1)return c;throw y=!0,o}return function(n,p,F){if(f>1)throw TypeError("Generator is already running");for(y&&1===p&&l(p,F),i=p,u=F;(e=i<2?r:u)||!y;){a||(i?i<3?(i>1&&(G.n=-1),l(i,u)):G.n=u:G.v=u);try{if(f=2,a){if(i||(n="next"),e=a[n]){if(!(e=e.call(a,u)))throw TypeError("iterator result is not an object");if(!e.done)return e;u=e.value,i<2&&(i=0)}else 1===i&&(e=a.return)&&e.call(a),i<2&&(u=TypeError("The iterator does not provide a '"+n+"' method"),i=1);a=r}else if((e=(y=G.n<0)?u:t.call(o,G))!==c)break}catch(t){a=r,i=1,u=t}finally{f=1}}return{value:e,done:y}}}(o,a,i),!0),f}var c={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}e=Object.getPrototypeOf;var u=[][n]?e(e([][n]())):(_regeneratorDefine2(e={},n,function(){return this}),e),f=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(u);function p(r){return Object.setPrototypeOf?Object.setPrototypeOf(r,GeneratorFunctionPrototype):(r.__proto__=GeneratorFunctionPrototype,_regeneratorDefine2(r,a,"GeneratorFunction")),r.prototype=Object.create(f),r}return GeneratorFunction.prototype=GeneratorFunctionPrototype,_regeneratorDefine2(f,"constructor",GeneratorFunctionPrototype),_regeneratorDefine2(GeneratorFunctionPrototype,"constructor",GeneratorFunction),GeneratorFunction.displayName="GeneratorFunction",_regeneratorDefine2(GeneratorFunctionPrototype,a,"GeneratorFunction"),_regeneratorDefine2(f),_regeneratorDefine2(f,a,"Generator"),_regeneratorDefine2(f,n,function(){return this}),_regeneratorDefine2(f,"toString",function(){return"[object Generator]"}),(_regenerator=function _regenerator(){return{w:i,m:p}})()}function _regeneratorDefine2(e,r,n,t){var i=Object.defineProperty;try{i({},"",{})}catch(e){i=0}_regeneratorDefine2=function _regeneratorDefine(e,r,n,t){function o(r,n){_regeneratorDefine2(e,r,function(e){return this._invoke(r,n,e)})}r?i?i(e,r,{value:n,enumerable:!t,configurable:!t,writable:!t}):e[r]=n:(o("next",0),o("throw",1),o("return",2))},_regeneratorDefine2(e,r,n,t)}function _createForOfIteratorHelper(e,t){var _n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!_n){if(Array.isArray(e)||(_n=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){_n&&(e=_n);var o=0,F=function F(){};return{s:F,n:function n(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function e(r){throw r},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u,i=!0;return{s:function s(){_n=_n.call(e)},n:function n(){i=!0;var r=_n.next();return r.done?{done:!0}:{value:r.value,done:i=!1}},e:function e(r){a=!0,u=r},f:function f(){try{i||null==_n.return||_n.return()}finally{if(a)throw u}}}}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var o={}.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}function asyncGeneratorStep(n,t,e,r,o,a,c){try{var i=n[a](c),u=i.value}catch(n){return void e(n)}i.done?t(u):Promise.resolve(u).then(r,o)}function _asyncToGenerator(n){return function(){var t=this,e=arguments;return new Promise(function(r,o){var a=n.apply(t,e);function _next(n){asyncGeneratorStep(a,r,o,_next,_throw,"next",n)}function _throw(n){asyncGeneratorStep(a,r,o,_next,_throw,"throw",n)}_next(void 0)})}};var imports={};var mkdirSync;var readdirSync;var readFileSync;var statSync;var writeFileSync;var mkdir;var readdir;var readFile;var stat;var writeFile;var basename;var join;var resolve;var importPromises=[];var importFilesystemAPI=function importFilesystemAPI(){if(importPromises.length>0)return Promise.all(importPromises);var fsImportPromise=(0,_module_js__WEBPACK_IMPORTED_MODULE_3__/* .optionalImport */ .Sw)("fs");void fsImportPromise.then(function(module){imports.fs=module;if(module){mkdirSync=module.mkdirSync;readdirSync=module.readdirSync;readFileSync=module.readFileSync;statSync=module.statSync;writeFileSync=module.writeFileSync}else{mkdirSync=null;readdirSync=null;readFileSync=null;statSync=null;writeFileSync=null}});var fsPromisesImportPromise=(0,_module_js__WEBPACK_IMPORTED_MODULE_3__/* .optionalImport */ .Sw)("fs/promises");void fsPromisesImportPromise.then(function(module){imports.fsPromises=module;if(module){mkdir=module.mkdir;readdir=module.readdir;readFile=module.readFile;stat=module.stat;writeFile=module.writeFile}else{mkdir=null;readdir=null;readFile=null;stat=null;writeFile=null}});var pathImportPromise=(0,_module_js__WEBPACK_IMPORTED_MODULE_3__/* .optionalImport */ .Sw)("path");void pathImportPromise.then(function(module){imports.path=module;if(module){basename=module.basename;join=module.join;resolve=module.resolve}else{basename=null;join=null;resolve=null}});importPromises.push(fsImportPromise,fsPromisesImportPromise,pathImportPromise);return Promise.all(importPromises)};/**
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
/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_191251__) {

__nested_webpack_require_191251__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_191251__.d(__nested_webpack_exports__, {
/* harmony export */   dG: function() { return /* binding */ stopPropagation; },
/* harmony export */   p0: function() { return /* binding */ trailingThrottle; },
/* harmony export */   sg: function() { return /* binding */ debounce; },
/* harmony export */   wR: function() { return /* binding */ timeout; },
/* harmony export */   wo: function() { return /* binding */ preventDefault; }
/* harmony export */ });
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_191251__(5);
/* harmony import */ var _indicators_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_191251__(4);
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module utility *//* !
    region header
    [Project page](https://tsickert.com/clientnode)

    Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/function _toConsumableArray(a){return _arrayWithoutHoles(a)||_iterableToArray(a)||_unsupportedIterableToArray(a)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var o={}.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(t,e):void 0}}function _iterableToArray(r){var e="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(Array.isArray(r)&&(null==e||e===("undefined"!=typeof Symbol&&[][Symbol.iterator])||e===[]["@@iterator"]))return r;if(null!=e){for(var t,o=[],a=e.call(r);!(t=a.next()).done;)o.push(t.value);return o}}function _arrayWithoutHoles(a){if(Array.isArray(a))return _arrayLikeToArray(a)}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n};/**
 * Prevents event functions from triggering too close after each trigger by
 * defining a minimal span between each function call. Additional arguments
 * given to this function will be forwarded to the given event function call.
 * @param callback - The function to call debounced.
 * @param thresholdInMilliseconds - The minimum time span between each
 * function call.
 * @param additionalArguments - Additional arguments to forward to given
 * function.
 * @returns Returns the wrapped method.
 */var debounce=function debounce(callback,thresholdInMilliseconds){if(thresholdInMilliseconds===void 0){thresholdInMilliseconds=600}for(var _len=arguments.length,additionalArguments=new Array(_len>2?_len-2:0),_key=2;_key<_len;_key++){additionalArguments[_key-2]=arguments[_key]}var timeoutPromise;var nextResultPromiseResolver;var nextResultPromise=new Promise(function(resolve){nextResultPromiseResolver=resolve});return function(){var _timeoutPromise;for(var _len2=arguments.length,parameters=new Array(_len2),_key2=0;_key2<_len2;_key2++){parameters[_key2]=arguments[_key2]}parameters=parameters.concat(additionalArguments);(_timeoutPromise=timeoutPromise)===null||_timeoutPromise===void 0||_timeoutPromise.clear();timeoutPromise=timeout(function(){nextResultPromiseResolver(callback.apply(void 0,_toConsumableArray(parameters)));nextResultPromise=new Promise(function(resolve){nextResultPromiseResolver=resolve})},thresholdInMilliseconds);return nextResultPromise}};/**
 * Prevents event functions from triggering too often by defining a minimal
 * span between each function call. Additional arguments given to this function
 * will be forwarded to the given event function call.
 * @param callback - The function to call debounced.
 * @param thresholdInMilliseconds - The minimum time span between each
 * function call.
 * @param additionalArguments - Additional arguments to forward to given
 * function.
 * @returns Returns the wrapped method.
 */var trailingThrottle=function trailingThrottle(callback,thresholdInMilliseconds){if(thresholdInMilliseconds===void 0){thresholdInMilliseconds=600}for(var _len3=arguments.length,additionalArguments=new Array(_len3>2?_len3-2:0),_key3=2;_key3<_len3;_key3++){additionalArguments[_key3-2]=arguments[_key3]}var timeoutID=null;var recentParameters=[];return function(){for(var _len4=arguments.length,parameters=new Array(_len4),_key4=0;_key4<_len4;_key4++){parameters[_key4]=arguments[_key4]}recentParameters=parameters;if(timeoutID)return;timeoutID=setTimeout(function(){callback.apply(void 0,_toConsumableArray(recentParameters).concat(additionalArguments));// Reset for next cycle.
timeoutID=null;recentParameters=[]},thresholdInMilliseconds)}};var preventDefault=function preventDefault(event){event.preventDefault()};var stopPropagation=function stopPropagation(event){event.stopPropagation()};/**
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
        */var numberOfRemainingTimeouts=Math.floor(delayInMilliseconds/maximumTimeoutDelayInMilliseconds);var finalTimeoutDuration=delayInMilliseconds%maximumTimeoutDelayInMilliseconds;var _delay=function delay(){if(numberOfRemainingTimeouts>0){numberOfRemainingTimeouts-=1;result.timeoutID=setTimeout(_delay,maximumTimeoutDelayInMilliseconds)}else result.timeoutID=setTimeout(wrappedCallback,finalTimeoutDuration)};_delay()}result.clear=function(){if(Object.prototype.hasOwnProperty.call(result,"timeoutID")){clearTimeout(result.timeoutID);(throwOnTimeoutClear?rejectCallback:resolveCallback)(true)}};return result};

/***/ }),
/* 14 */
/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_199157__) {

/* harmony export */ __nested_webpack_require_199157__.d(__nested_webpack_exports__, {
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
/* harmony import */ var _indicators_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_199157__(4);
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/* !
    region header
    [Project page](https://tsickert.com/clientnode)

    Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/function _createForOfIteratorHelper(e,t){var _n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!_n){if(Array.isArray(e)||(_n=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){_n&&(e=_n);var o=0,F=function F(){};return{s:F,n:function n(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function e(r){throw r},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u,i=!0;return{s:function s(){_n=_n.call(e)},n:function n(){i=!0;var r=_n.next();return r.done?{done:!0}:{value:r.value,done:i=!1}},e:function e(r){a=!0,u=r},f:function f(){try{i||null==_n.return||_n.return()}finally{if(a)throw u}}}}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var o={}.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n};var isSpecificExpression=function isSpecificExpression(expression,indicatorKey,properties){if(properties===void 0){properties=[]}if(!((0,_indicators_js__WEBPACK_IMPORTED_MODULE_0__/* .isPlainObject */ .Qd)(expression)&&Object.prototype.hasOwnProperty.call(expression,indicatorKey)))return false;var _iterator=_createForOfIteratorHelper(properties),_step;try{for(_iterator.s();!(_step=_iterator.n()).done;){var name=_step.value;if(!Object.prototype.hasOwnProperty.call(expression,name))return false}}catch(err){_iterator.e(err)}finally{_iterator.f()}return true};var isCondition=function isCondition(expression){return isSpecificExpression(expression,"$comparator",["value1","value2"])};var isAndExpression=function isAndExpression(expression){return isSpecificExpression(expression,"$and")};var isOrExpression=function isOrExpression(expression){return isSpecificExpression(expression,"$or")};var isConcatExpression=function isConcatExpression(expression){return isSpecificExpression(expression,"$concat")};var isMappingExpression=function isMappingExpression(expression){return isSpecificExpression(expression,"$mapping",["data"])};var isOperation=function isOperation(expression){return isSpecificExpression(expression,"$operator",["operand1","operand2"])};var isUnaryOperation=function isUnaryOperation(expression){return isSpecificExpression(expression,"$operator",["operand"])};var isIfExpression=function isIfExpression(expression){return isSpecificExpression(expression,"$if")};var isSwitchExpression=function isSwitchExpression(expression){return isSpecificExpression(expression,"$switch")};var isArrayContainsExpression=function isArrayContainsExpression(expression){return isSpecificExpression(expression,"$arrayContains")};var isSelector=function isSelector(expression){return isSpecificExpression(expression,"$select")};var isValue=function isValue(expression){return!(isSelector(expression)||isCondition(expression)||isUnaryOperation(expression)||isOperation(expression)||isAndExpression(expression)||isOrExpression(expression)||isConcatExpression(expression)||isMappingExpression(expression)||isIfExpression(expression)||isSwitchExpression(expression)||isArrayContainsExpression(expression))};

/***/ }),
/* 15 */
/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_204319__) {

__nested_webpack_require_204319__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_204319__.d(__nested_webpack_exports__, {
/* harmony export */   A_: function() { return /* binding */ LEVELS; },
/* harmony export */   Vy: function() { return /* binding */ Logger; },
/* harmony export */   Wh: function() { return /* binding */ LEVELS_COLOR; }
/* harmony export */ });
/* harmony import */ var _cli_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_204319__(1);
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_204319__(5);
/* harmony import */ var _indicators_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_204319__(4);
/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_204319__(3);
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module Logger *//* !
    region header
    [Project page](https://tsickert.com/clientnode)

    Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/var _Logger;function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _slicedToArray(e,i){return _iterableToArrayLimit(e,i)||_unsupportedIterableToArray(e,i)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var o={}.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}function _iterableToArrayLimit(r,t){var e=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(Array.isArray(r)&&(null==e||e===("undefined"!=typeof Symbol&&[][Symbol.iterator])||e===[]["@@iterator"]))return r;if(null!=e){var l,n,i,a,u=[],o=!0,f=!1;try{if(i=(e=e.call(r)).next,0===t){if(Object(e)!==e)return;o=!1}else for(;!(o=(l=i.call(e)).done)&&(u.push(l.value),u.length!==t);o=!0);}catch(r){f=!0,n=r}finally{try{if(!o&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(f)throw n}}return u}}function _regenerator(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var r,e,o="function"==typeof Symbol?Symbol:{},n=o.iterator||"@@iterator",a=o.toStringTag||"@@toStringTag";function i(o,n,a,i){var u=n&&n.prototype instanceof Generator?n:Generator,f=Object.create(u.prototype);return _regeneratorDefine2(f,"_invoke",function(t,o,n){var a,i,u,f=0,p=n||[],y=!1,G={p:0,n:0,v:r,a:l,f:l.bind(r,4),d:function d(t,e){return a=t,i=0,u=r,G.n=e,c}};function l(t,o){for(i=t,u=o,e=0;!y&&f&&!n&&e<p.length;e++){var n,a=p[e],l=G.p,F=a[2];t>3?(n=F===o)&&(u=a[(i=a[4])?5:(i=3,3)],a[4]=a[5]=r):a[0]<=l&&((n=t<2&&l<a[1])?(i=0,G.v=o,G.n=a[1]):l<F&&(n=t<3||a[0]>o||o>F)&&(a[4]=t,a[5]=o,G.n=F,i=0))}if(n||t>1)return c;throw y=!0,o}return function(n,p,F){if(f>1)throw TypeError("Generator is already running");for(y&&1===p&&l(p,F),i=p,u=F;(e=i<2?r:u)||!y;){a||(i?i<3?(i>1&&(G.n=-1),l(i,u)):G.n=u:G.v=u);try{if(f=2,a){if(i||(n="next"),e=a[n]){if(!(e=e.call(a,u)))throw TypeError("iterator result is not an object");if(!e.done)return e;u=e.value,i<2&&(i=0)}else 1===i&&(e=a.return)&&e.call(a),i<2&&(u=TypeError("The iterator does not provide a '"+n+"' method"),i=1);a=r}else if((e=(y=G.n<0)?u:t.call(o,G))!==c)break}catch(t){a=r,i=1,u=t}finally{f=1}}return{value:e,done:y}}}(o,a,i),!0),f}var c={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}e=Object.getPrototypeOf;var u=[][n]?e(e([][n]())):(_regeneratorDefine2(e={},n,function(){return this}),e),f=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(u);function p(r){return Object.setPrototypeOf?Object.setPrototypeOf(r,GeneratorFunctionPrototype):(r.__proto__=GeneratorFunctionPrototype,_regeneratorDefine2(r,a,"GeneratorFunction")),r.prototype=Object.create(f),r}return GeneratorFunction.prototype=GeneratorFunctionPrototype,_regeneratorDefine2(f,"constructor",GeneratorFunctionPrototype),_regeneratorDefine2(GeneratorFunctionPrototype,"constructor",GeneratorFunction),GeneratorFunction.displayName="GeneratorFunction",_regeneratorDefine2(GeneratorFunctionPrototype,a,"GeneratorFunction"),_regeneratorDefine2(f),_regeneratorDefine2(f,a,"Generator"),_regeneratorDefine2(f,n,function(){return this}),_regeneratorDefine2(f,"toString",function(){return"[object Generator]"}),(_regenerator=function _regenerator(){return{w:i,m:p}})()}function _regeneratorDefine2(e,r,n,t){var i=Object.defineProperty;try{i({},"",{})}catch(e){i=0}_regeneratorDefine2=function _regeneratorDefine(e,r,n,t){function o(r,n){_regeneratorDefine2(e,r,function(e){return this._invoke(r,n,e)})}r?i?i(e,r,{value:n,enumerable:!t,configurable:!t,writable:!t}):e[r]=n:(o("next",0),o("throw",1),o("return",2))},_regeneratorDefine2(e,r,n,t)}function asyncGeneratorStep(n,t,e,r,o,a,c){try{var i=n[a](c),u=i.value}catch(n){return void e(n)}i.done?t(u):Promise.resolve(u).then(r,o)}function _asyncToGenerator(n){return function(){var t=this,e=arguments;return new Promise(function(r,o){var a=n.apply(t,e);function _next(n){asyncGeneratorStep(a,r,o,_next,_throw,"next",n)}function _throw(n){asyncGeneratorStep(a,r,o,_next,_throw,"throw",n)}_next(void 0)})}}function _classCallCheck(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(r,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,_toPropertyKey(i.key),i)}}function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function _defineProperty(r,t,o){return(t=_toPropertyKey(t))in r?Object.defineProperty(r,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[t]=o,r}function _toPropertyKey(r){var o=_toPrimitive(r,"string");return"symbol"==_typeof(o)?o:o+""}function _toPrimitive(t,e){if("object"!=_typeof(t)||!t)return t;var r;if("undefined"!=typeof Symbol&&void 0!==(r=t[Symbol.toPrimitive])){var i=r.call(t,e||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)};var LEVELS=["error","critical","warn","info","debug"];var LEVELS_COLOR=[_cli_js__WEBPACK_IMPORTED_MODULE_0__/* .CLI_COLOR */ .l_.red,_cli_js__WEBPACK_IMPORTED_MODULE_0__/* .CLI_COLOR */ .l_.magenta,_cli_js__WEBPACK_IMPORTED_MODULE_0__/* .CLI_COLOR */ .l_.yellow,_cli_js__WEBPACK_IMPORTED_MODULE_0__/* .CLI_COLOR */ .l_.green,_cli_js__WEBPACK_IMPORTED_MODULE_0__/* .CLI_COLOR */ .l_.blue];/**
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
     * @returns Returns a promise which resolves when the log message has been
     * printed.
     */},{key:"log",value:(function(){var _log=_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(object,force,avoidAnnotation,level){var currentLevelIndex,levelIndex,_globalContext$consol,messages,annotation,_len,additionalArguments,_key,multiLineAnnotation,lineLength,remainingLength,halfRemainingLength,consoleMethodName,_globalContext$window,_args=arguments;return _regenerator().w(function(_context){while(1)switch(_context.n){case 0:if(object===void 0){object=""}if(force===void 0){force=false}if(avoidAnnotation===void 0){avoidAnnotation=false}if(level===void 0){level="info"}currentLevelIndex=LEVELS.indexOf(this.level);levelIndex=LEVELS.indexOf(level);if(!(force||currentLevelIndex>=levelIndex)){_context.n=9;break}messages=[];annotation="".concat(LEVELS_COLOR[levelIndex]).concat(level)+"".concat(_cli_js__WEBPACK_IMPORTED_MODULE_0__/* .CLI_COLOR */ .l_.default,":").concat(this.name,":")+"".concat((new Date).toISOString(),":");for(_len=_args.length,additionalArguments=new Array(_len>4?_len-4:0),_key=4;_key<_len;_key++){additionalArguments[_key-4]=_args[_key]}if(!avoidAnnotation){_context.n=1;break}messages.push(object);_context.n=6;break;case 1:if(!(typeof object==="string")){_context.n=2;break}messages.push.apply(messages,[annotation,object].concat(additionalArguments));_context.n=6;break;case 2:if(!((0,_indicators_js__WEBPACK_IMPORTED_MODULE_2__/* .isNumeric */ .kf)(object)||typeof object==="boolean")){_context.n=3;break}messages.push.apply(messages,[annotation,object.toString()].concat(additionalArguments));_context.n=6;break;case 3:multiLineAnnotation=annotation.substring(0,annotation.length-1);lineLength=79-2;// Color codes are invisible so we have to add it.
remainingLength=lineLength+LEVELS_COLOR[levelIndex].length+_cli_js__WEBPACK_IMPORTED_MODULE_0__/* .CLI_COLOR */ .l_.default.length-multiLineAnnotation.length;halfRemainingLength=Math.floor(remainingLength/2);_context.n=4;return this.log(",".concat("-".repeat(halfRemainingLength))+multiLineAnnotation+"-".repeat(halfRemainingLength)+"".concat("-".repeat(remainingLength%2),","),force,true,level);case 4:_context.n=5;return this.log(object,force,true,level);case 5:_context.n=6;return this.log("'".concat("-".repeat(lineLength),"'"),force,true,level);case 6:// NOTE: There is no native "console.critical" method.
consoleMethodName=level==="critical"?"error":level;if(!messages.length){_context.n=9;break}if(!(typeof process!=="undefined"&&process.stdout)){_context.n=8;break}_context.n=7;return new Promise(function(resolve,reject){process.stdout.write("".concat(messages.map(String).join(" "),"\n"),function(error){if(error)/*
                                            eslint-disable
                                            prefer-promise-reject-errors
                                        */reject(error);/*
                                            eslint-enable
                                            prefer-promise-reject-errors
                                        */else resolve()})});case 7:_context.n=9;break;case 8:if(!(_context_js__WEBPACK_IMPORTED_MODULE_1__/* .globalContext */ .Lz.console&&consoleMethodName in _context_js__WEBPACK_IMPORTED_MODULE_1__/* .globalContext */ .Lz.console)||_context_js__WEBPACK_IMPORTED_MODULE_1__/* .globalContext */ .Lz.console[consoleMethodName]===_context_js__WEBPACK_IMPORTED_MODULE_1__/* .NOOP */ .tE){if(Object.prototype.hasOwnProperty.call(_context_js__WEBPACK_IMPORTED_MODULE_1__/* .globalContext */ .Lz,"window")&&Object.prototype.hasOwnProperty.call(_context_js__WEBPACK_IMPORTED_MODULE_1__/* .globalContext */ .Lz.window,"alert"))(_globalContext$window=_context_js__WEBPACK_IMPORTED_MODULE_1__/* .globalContext */ .Lz.window)===null||_globalContext$window===void 0||_globalContext$window.alert(messages.join(" "))}else(_globalContext$consol=_context_js__WEBPACK_IMPORTED_MODULE_1__/* .globalContext */ .Lz.console)[consoleMethodName].apply(_globalContext$consol,messages);case 9:return _context.a(2)}},_callee,this)}));function log(_x,_x2,_x3,_x4){return _log.apply(this,arguments)}return log}()/**
     * Wrapper method for the native console method usually provided by
     * interpreter.
     * @param object - Any object to print.
     * @param additionalArguments - Additional arguments are used for string
     * formatting.
     * @returns Returns a promise which resolves when the log message has been
     * printed.
     */)},{key:"info",value:function info(object){if(object===void 0){object=""}for(var _len2=arguments.length,additionalArguments=new Array(_len2>1?_len2-1:0),_key2=1;_key2<_len2;_key2++){additionalArguments[_key2-1]=arguments[_key2]}return this.log.apply(this,[object,false,false,"info"].concat(additionalArguments))}/**
     * Wrapper method for the native console method usually provided by
     * interpreter.
     * @param object - Any object to print.
     * @param additionalArguments - Additional arguments are used for string
     * formatting.
     * @returns Returns a promise which resolves when the log message has been
     * printed.
     */},{key:"debug",value:function debug(object){if(object===void 0){object=""}for(var _len3=arguments.length,additionalArguments=new Array(_len3>1?_len3-1:0),_key3=1;_key3<_len3;_key3++){additionalArguments[_key3-1]=arguments[_key3]}return this.log.apply(this,[object,false,false,"debug"].concat(additionalArguments))}/**
     * Wrapper method for the native console method usually provided by
     * interpreter.
     * @param object - Any object to print.
     * @param additionalArguments - Additional arguments are used for string
     * formatting.
     * @returns Returns a promise which resolves when the log message has been
     * printed.
     */},{key:"error",value:function error(object){if(object===void 0){object=""}for(var _len4=arguments.length,additionalArguments=new Array(_len4>1?_len4-1:0),_key4=1;_key4<_len4;_key4++){additionalArguments[_key4-1]=arguments[_key4]}return this.log.apply(this,[object,true,false,"error"].concat(additionalArguments))}/**
     * Wrapper method for the native console method usually provided by
     * interpreter.
     * @param object - Any object to print.
     * @param additionalArguments - Additional arguments are used for string
     * formatting.
     * @returns Returns a promise which resolves when the log message has been
     * printed.
     */},{key:"critical",value:function critical(object){if(object===void 0){object=""}for(var _len5=arguments.length,additionalArguments=new Array(_len5>1?_len5-1:0),_key5=1;_key5<_len5;_key5++){additionalArguments[_key5-1]=arguments[_key5]}return this.log.apply(this,[object,true,false,"critical"].concat(additionalArguments))}/**
     * Wrapper method for the native console method usually provided by
     * interpreter.
     * @param object - Any object to print.
     * @param additionalArguments - Additional arguments are used for string
     * formatting.
     * @returns Returns a promise which resolves when the log message has been
     * printed.
     */},{key:"warn",value:function warn(object){if(object===void 0){object=""}for(var _len6=arguments.length,additionalArguments=new Array(_len6>1?_len6-1:0),_key6=1;_key6<_len6;_key6++){additionalArguments[_key6-1]=arguments[_key6]}return this.log.apply(this,[object,false,false,"warn"].concat(additionalArguments))}/**
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
/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_222850__) {

__nested_webpack_require_222850__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_222850__.d(__nested_webpack_exports__, {
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
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_222850__(0);
/* harmony import */ var _indicators_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_222850__(4);
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module array *//* !
    region header
    [Project page](https://tsickert.com/clientnode)

    Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function _objectSpread(r){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(o),!0).forEach(function(t){_defineProperty(r,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):ownKeys(Object(o)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))})}return r}function _defineProperty(r,t,o){return(t=_toPropertyKey(t))in r?Object.defineProperty(r,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[t]=o,r}function _toPropertyKey(r){var o=_toPrimitive(r,"string");return"symbol"==_typeof(o)?o:o+""}function _toPrimitive(t,e){if("object"!=_typeof(t)||!t)return t;var r;if("undefined"!=typeof Symbol&&void 0!==(r=t[Symbol.toPrimitive])){var i=r.call(t,e||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function _toConsumableArray(a){return _arrayWithoutHoles(a)||_iterableToArray(a)||_unsupportedIterableToArray(a)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArray(r){var e="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(Array.isArray(r)&&(null==e||e===("undefined"!=typeof Symbol&&[][Symbol.iterator])||e===[]["@@iterator"]))return r;if(null!=e){for(var t,o=[],a=e.call(r);!(t=a.next()).done;)o.push(t.value);return o}}function _arrayWithoutHoles(a){if(Array.isArray(a))return _arrayLikeToArray(a)}function _createForOfIteratorHelper(e,t){var _n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!_n){if(Array.isArray(e)||(_n=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){_n&&(e=_n);var o=0,F=function F(){};return{s:F,n:function n(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function e(r){throw r},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u,i=!0;return{s:function s(){_n=_n.call(e)},n:function n(){i=!0;var r=_n.next();return r.done?{done:!0}:{value:r.value,done:i=!1}},e:function e(r){a=!0,u=r},f:function f(){try{i||null==_n.return||_n.return()}finally{if(a)throw u}}}};function _slicedToArray(e,i){return _iterableToArrayLimit(e,i)||_unsupportedIterableToArray(e,i)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var o={}.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}function _iterableToArrayLimit(r,t){var e=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(Array.isArray(r)&&(null==e||e===("undefined"!=typeof Symbol&&[][Symbol.iterator])||e===[]["@@iterator"]))return r;if(null!=e){var l,n,i,a,u=[],o=!0,f=!1;try{if(i=(e=e.call(r)).next,0===t){if(Object(e)!==e)return;o=!1}else for(;!(o=(l=i.call(e)).done)&&(u.push(l.value),u.length!==t);o=!0);}catch(r){f=!0,n=r}finally{try{if(!o&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(f)throw n}}return u}};/**
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
 */var sortTopological=function sortTopological(items){var edges=[];for(var _i11=0,_Object$entries4=Object.entries(items);_i11<_Object$entries4.length;_i11++){var _Object$entries4$_i=_slicedToArray(_Object$entries4[_i11],2),name=_Object$entries4$_i[0],value=_Object$entries4$_i[1];items[name]=[].concat(value);if(value.length>0){var _iterator3=_createForOfIteratorHelper(makeArray(value)),_step3;try{for(_iterator3.s();!(_step3=_iterator3.n()).done;){var dependencyName=_step3.value;edges.push([name,dependencyName])}}catch(err){_iterator3.e(err)}finally{_iterator3.f()}}else edges.push([name])}var nodes=[];// Accumulate unique nodes into a large list.
for(var _i12=0,_edges=edges;_i12<_edges.length;_i12++){var edge=_edges[_i12];var _iterator4=_createForOfIteratorHelper(edge),_step4;try{for(_iterator4.s();!(_step4=_iterator4.n()).done;){var node=_step4.value;if(!nodes.includes(node))nodes.push(node)}}catch(err){_iterator4.e(err)}finally{_iterator4.f()}}var sorted=[];// Define a visitor function that recursively traverses dependencies.
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
            */var _iterator5=_createForOfIteratorHelper(edges),_step5;try{for(_iterator5.s();!(_step5=_iterator5.n()).done;){var _edge2=_step5.value;if(_edge2[0]===_node)// Recursively traverse to node dependencies.
_visit(_edge2[1],[_node])}}catch(err){_iterator5.e(err)}finally{_iterator5.f()}sorted.push(_node)}}return sorted};/**
 * Sums up given property of given item list.
 * @param data - The objects with specified property to sum up.
 * @param propertyName - Property name to sum up its value.
 * @returns The aggregated value.
 */var sumUpProperty=function sumUpProperty(data,propertyName){var result=0;if(Array.isArray(data)&&data.length){var _iterator6=_createForOfIteratorHelper(data),_step6;try{for(_iterator6.s();!(_step6=_iterator6.n()).done;){var item=_step6.value;if(Object.prototype.hasOwnProperty.call(item,propertyName))result+=parseFloat(item[propertyName]||0)}}catch(err){_iterator6.e(err)}finally{_iterator6.f()}}return result};/**
 * Makes all values in given iterable unique by removing duplicates (The first
 * occurrences will be left).
 * @param data - Array like object.
 * @returns Sliced version of given object.
 */var unique=function unique(data){var result=[];var _iterator7=_createForOfIteratorHelper(makeArray(data)),_step7;try{for(_iterator7.s();!(_step7=_iterator7.n()).done;){var value=_step7.value;if(!result.includes(value))result.push(value)}}catch(err){_iterator7.e(err)}finally{_iterator7.f()}return result};

/***/ }),
/* 17 */
/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_248200__) {

__nested_webpack_require_248200__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_248200__.d(__nested_webpack_exports__, {
/* harmony export */   DP: function() { return /* binding */ normalizeDateTime; },
/* harmony export */   JZ: function() { return /* binding */ _interpretDateTime; },
/* harmony export */   LE: function() { return /* binding */ dateTimeFormat; },
/* harmony export */   hr: function() { return /* binding */ DATE_TIME_PATTERN_CACHE; },
/* harmony export */   jJ: function() { return /* binding */ sliceWeekday; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_248200__(0);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_248200__(1);
/* harmony import */ var _string_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_248200__(7);
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module dateTime *//* !
    region header
    [Project page](https://tsickert.com/clientnode)

    Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _construct(e,o,p){if(_isNativeReflectConstruct())return Reflect.construct.apply(null,arguments);var n=[null];n.push.apply(n,o);var l=new(e.bind.apply(e,n));return p&&_setPrototypeOf(l,p.prototype),l}function _setPrototypeOf(t,e){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},_setPrototypeOf(t,e)}function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}function _createForOfIteratorHelper(e,t){var _n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!_n){if(Array.isArray(e)||(_n=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){_n&&(e=_n);var o=0,F=function F(){};return{s:F,n:function n(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function e(r){throw r},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u,i=!0;return{s:function s(){_n=_n.call(e)},n:function n(){i=!0;var r=_n.next();return r.done?{done:!0}:{value:r.value,done:i=!1}},e:function e(r){a=!0,u=r},f:function f(){try{i||null==_n.return||_n.return()}finally{if(a)throw u}}}}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var o={}.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function _objectSpread(r){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(o),!0).forEach(function(t){_defineProperty(r,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):ownKeys(Object(o)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))})}return r}function _defineProperty(r,t,o){return(t=_toPropertyKey(t))in r?Object.defineProperty(r,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[t]=o,r}function _toPropertyKey(r){var o=_toPrimitive(r,"string");return"symbol"==_typeof(o)?o:o+""}function _toPrimitive(t,e){if("object"!=_typeof(t)||!t)return t;var r;if("undefined"!=typeof Symbol&&void 0!==(r=t[Symbol.toPrimitive])){var i=r.call(t,e||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)};// Caches compiled date tine pattern regular expressions.
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
/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_267931__) {

__nested_webpack_require_267931__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_267931__.d(__nested_webpack_exports__, {
/* harmony export */   D_: function() { return /* binding */ identity; },
/* harmony export */   Gj: function() { return /* binding */ _getParameterNames; },
/* harmony export */   gH: function() { return /* binding */ invertArrayFilter; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_267931__(0);
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module function *//* !
    region header
    [Project page](https://tsickert.com/clientnode)

    Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/function _createForOfIteratorHelper(e,t){var _n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!_n){if(Array.isArray(e)||(_n=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){_n&&(e=_n);var o=0,F=function F(){};return{s:F,n:function n(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function e(r){throw r},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u,i=!0;return{s:function s(){_n=_n.call(e)},n:function n(){i=!0;var r=_n.next();return r.done?{done:!0}:{value:r.value,done:i=!1}},e:function e(r){a=!0,u=r},f:function f(){try{i||null==_n.return||_n.return()}finally{if(a)throw u}}}}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var o={}.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}/**
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
/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_272369__) {

/* harmony export */ __nested_webpack_require_272369__.d(__nested_webpack_exports__, {
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
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_272369__(4);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_272369__(3);
/* harmony import */ var _indicator_functions_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_272369__(14);
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/* !
    region header
    [Project page](https://tsickert.com/clientnode)

    Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _slicedToArray(e,i){return _iterableToArrayLimit(e,i)||_unsupportedIterableToArray(e,i)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArrayLimit(r,t){var e=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(Array.isArray(r)&&(null==e||e===("undefined"!=typeof Symbol&&[][Symbol.iterator])||e===[]["@@iterator"]))return r;if(null!=e){var l,n,i,a,u=[],o=!0,f=!1;try{if(i=(e=e.call(r)).next,0===t){if(Object(e)!==e)return;o=!1}else for(;!(o=(l=i.call(e)).done)&&(u.push(l.value),u.length!==t);o=!0);}catch(r){f=!0,n=r}finally{try{if(!o&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(f)throw n}}return u}}function _toConsumableArray(a){return _arrayWithoutHoles(a)||_iterableToArray(a)||_unsupportedIterableToArray(a)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArray(r){var e="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(Array.isArray(r)&&(null==e||e===("undefined"!=typeof Symbol&&[][Symbol.iterator])||e===[]["@@iterator"]))return r;if(null!=e){for(var t,o=[],a=e.call(r);!(t=a.next()).done;)o.push(t.value);return o}}function _arrayWithoutHoles(a){if(Array.isArray(a))return _arrayLikeToArray(a)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function _objectSpread(r){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(o),!0).forEach(function(t){_defineProperty(r,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):ownKeys(Object(o)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))})}return r}function _defineProperty(r,t,o){return(t=_toPropertyKey(t))in r?Object.defineProperty(r,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[t]=o,r}function _toPropertyKey(r){var o=_toPrimitive(r,"string");return"symbol"==_typeof(o)?o:o+""}function _toPrimitive(t,e){if("object"!=_typeof(t)||!t)return t;var r;if("undefined"!=typeof Symbol&&void 0!==(r=t[Symbol.toPrimitive])){var i=r.call(t,e||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function _createForOfIteratorHelper(e,t){var _n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!_n){if(Array.isArray(e)||(_n=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){_n&&(e=_n);var o=0,F=function F(){};return{s:F,n:function n(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function e(r){throw r},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u,i=!0;return{s:function s(){_n=_n.call(e)},n:function n(){i=!0;var r=_n.next();return r.done?{done:!0}:{value:r.value,done:i=!1}},e:function e(r){a=!0,u=r},f:function f(){try{i||null==_n.return||_n.return()}finally{if(a)throw u}}}}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var o={}.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n};var SELECTOR_KEY_NAMES=new Set(["name"]);var NO_ITEM_FOUND_SYMBOL=Symbol.for("EXPRESSION_EVALUATOR_NO_ITEM_FOUND");var DEFAULT_OPTIONS={skipMissingLevel:false,contextReplacements:{},delimiter:"."};var addBracketBasedPathElements=function addBracketBasedPathElements(subParts){var path=[];// NOTE: We add index assignments into path array.
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
 */var evaluateSelector=function evaluateSelector(selector,scope,options){if(scope===void 0){scope={}}if(options===void 0){options={}}var _evaluateSelectorUnti=evaluateSelectorUntilLastObject(selector,scope,options),_evaluateSelectorUnti2=_slicedToArray(_evaluateSelectorUnti,2),lastObject=_evaluateSelectorUnti2[0],lastKey=_evaluateSelectorUnti2[1];if(lastKey==="")return scope;if((0,_index_js__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .Tn)(lastKey))return lastKey(lastObject);if(Object.prototype.hasOwnProperty.call(lastObject,lastKey))return lastObject[lastKey];return options.skipMissingLevel?lastObject:undefined};var evaluateCondition=function evaluateCondition(condition,scope,options){var value1=evaluateExpression(condition.value1,scope,options);var value2=evaluateExpression(condition.value2,scope,options);switch(condition.$comparator){case"==":return (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .equals */ .aI)(value1,value2);case"!=":return!(0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .equals */ .aI)(value1,value2);case"<":return value1<value2;case"<=":return value1<=value2;case">":return value1>value2;case">=":return value1>=value2}};var evaluateOperation=function evaluateOperation(operation,scope,options){var operand1=evaluateExpression(operation.operand1,scope,options);var operand2=evaluateExpression(operation.operand2,scope,options);switch(operation.$operator){case"+":return operand1+operand2;case"-":return operand1-operand2;case"*":return operand1*operand2;case"**":return Math.pow(operand1,operand2);case"/":return operand1/operand2}};var evaluateUnaryOperation=function evaluateUnaryOperation(operation,scope,options){var operand=evaluateExpression(operation.operand,scope,options);switch(operation.$operator){case"!":return!operand;case"!!":return Boolean(operand)}};var evaluateOptionalThen=function evaluateOptionalThen(expression,scope,options){if(typeof expression.then==="undefined")return undefined;return evaluateExpression(expression.then,scope,options)};var evaluateIf=function evaluateIf(expression,scope,options){if(evaluateExpression(expression.$if,scope,options))return evaluateOptionalThen(expression,scope,options);return typeof expression.else==="undefined"?undefined:evaluateExpression(expression.else,scope)};var evaluateSwitch=function evaluateSwitch(expression,scope,options){var value=evaluateExpression(expression.$switch,scope);var _iterator7=_createForOfIteratorHelper(expression.caseExpressions),_step7;try{for(_iterator7.s();!(_step7=_iterator7.n()).done;){var caseExpression=_step7.value;if(value===evaluateExpression(caseExpression.$case,scope,options))return evaluateOptionalThen(caseExpression,scope,options)}}catch(err){_iterator7.e(err)}finally{_iterator7.f()}if(typeof expression.default!=="undefined")return evaluateExpression(expression.default,scope,options);return undefined};var evaluateAnd=function evaluateAnd(expression,scope,options){var _iterator8=_createForOfIteratorHelper(expression.$and),_step8;try{for(_iterator8.s();!(_step8=_iterator8.n()).done;){var condition=_step8.value;if(!evaluateExpression(condition,scope,options))return false}}catch(err){_iterator8.e(err)}finally{_iterator8.f()}return true};var evaluateOr=function evaluateOr(expression,scope,options){var _iterator9=_createForOfIteratorHelper(expression.$or),_step9;try{for(_iterator9.s();!(_step9=_iterator9.n()).done;){var condition=_step9.value;if(evaluateExpression(condition,scope,options))return true}}catch(err){_iterator9.e(err)}finally{_iterator9.f()}return false};var evaluateConcat=function evaluateConcat(expression,scope,options){var result=[];var isArray=false;var _iterator0=_createForOfIteratorHelper(expression.$concat),_step0;try{for(_iterator0.s();!(_step0=_iterator0.n()).done;){var item=_step0.value;var value=evaluateExpression(item,scope,options);if(Array.isArray(value))isArray=true;result=result.concat(value)}}catch(err){_iterator0.e(err)}finally{_iterator0.f()}return isArray?result:result.join("")};var evaluateMapping=function evaluateMapping(expression,scope,options){var givenData=evaluateExpression(expression.data,scope,options);var normalizedGivenData=[];if(Array.isArray(givenData))normalizedGivenData=givenData;else for(var _i=0,_Object$entries=Object.entries(givenData);_i<_Object$entries.length;_i++){var _Object$entries$_i=_slicedToArray(_Object$entries[_i],2),key=_Object$entries$_i[0],value=_Object$entries$_i[1];normalizedGivenData.push(_objectSpread(_objectSpread({},value),{},{$key:key}))}var result=[];var _iterator1=_createForOfIteratorHelper(normalizedGivenData),_step1;try{for(_iterator1.s();!(_step1=_iterator1.n()).done;){var item=_step1.value;var _value={};for(var _i2=0,_Object$entries2=Object.entries(expression.$mapping);_i2<_Object$entries2.length;_i2++){var _Object$entries2$_i=_slicedToArray(_Object$entries2[_i2],2),sourceName=_Object$entries2$_i[0],targetName=_Object$entries2$_i[1];if(Object.prototype.hasOwnProperty.call(item,sourceName))_value[targetName]=item[sourceName]}result.push(_value)}}catch(err){_iterator1.e(err)}finally{_iterator1.f()}return result};var evaluateArrayContains=function evaluateArrayContains(expression,scope,options){var array=scope;if(expression.$arrayContains.target!=null)array=evaluateExpression(expression.$arrayContains.target,scope,options);var value=evaluateExpression(expression.$arrayContains.value,scope,options);var key=evaluateExpression(expression.$arrayContains.key,scope,options);if(!Array.isArray(array))return false;return array.some(function(item){if(typeof key==="string"&&(0,_index_js__WEBPACK_IMPORTED_MODULE_0__/* .isPlainObject */ .Qd)(item)&&Object.prototype.hasOwnProperty.call(item,key)){var record=item;return record[key]===value}return item===value})};function evaluateExpression(expression,scope,options){if(scope===void 0){scope={}}if(options===void 0){options={}}if((0,_indicator_functions_js__WEBPACK_IMPORTED_MODULE_2__/* .isSelector */ .cB)(expression))return evaluateSelector(expression.$select,scope,options);if((0,_indicator_functions_js__WEBPACK_IMPORTED_MODULE_2__/* .isCondition */ .G3)(expression))return evaluateCondition(expression,scope,options);if((0,_indicator_functions_js__WEBPACK_IMPORTED_MODULE_2__/* .isUnaryOperation */ .bF)(expression))return evaluateUnaryOperation(expression,scope,options);if((0,_indicator_functions_js__WEBPACK_IMPORTED_MODULE_2__/* .isOperation */ .YG)(expression))return evaluateOperation(expression,scope,options);if((0,_indicator_functions_js__WEBPACK_IMPORTED_MODULE_2__/* .isOrExpression */ .g6)(expression))return evaluateOr(expression,scope,options);if((0,_indicator_functions_js__WEBPACK_IMPORTED_MODULE_2__/* .isAndExpression */ .Gc)(expression))return evaluateAnd(expression,scope,options);if((0,_indicator_functions_js__WEBPACK_IMPORTED_MODULE_2__/* .isConcatExpression */ .HK)(expression))return evaluateConcat(expression,scope,options);if((0,_indicator_functions_js__WEBPACK_IMPORTED_MODULE_2__/* .isMappingExpression */ .Z9)(expression))return evaluateMapping(expression,scope,options);if((0,_indicator_functions_js__WEBPACK_IMPORTED_MODULE_2__/* .isIfExpression */ .MP)(expression))return evaluateIf(expression,scope,options);if((0,_indicator_functions_js__WEBPACK_IMPORTED_MODULE_2__/* .isSwitchExpression */ .$y)(expression))return evaluateSwitch(expression,scope,options);if((0,_indicator_functions_js__WEBPACK_IMPORTED_MODULE_2__/* .isArrayContainsExpression */ .ZI)(expression))return evaluateArrayContains(expression,scope,options);return expression}/* harmony default export */ __nested_webpack_exports__.Ay = (evaluateExpression);

/***/ }),
/* 20 */
/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_292202__) {

/* harmony export */ __nested_webpack_require_292202__.d(__nested_webpack_exports__, {
/* harmony export */   b: function() { return /* binding */ viewArrayAsScope; },
/* harmony export */   x: function() { return /* binding */ _viewObjectAsScope; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_292202__(0);
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/* !
    region header
    [Project page](https://tsickert.com/clientnode)

    Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)};function _createForOfIteratorHelper(e,t){var _n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!_n){if(Array.isArray(e)||(_n=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){_n&&(e=_n);var o=0,F=function F(){};return{s:F,n:function n(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function e(r){throw r},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u,i=!0;return{s:function s(){_n=_n.call(e)},n:function n(){i=!0;var r=_n.next();return r.done?{done:!0}:{value:r.value,done:i=!1}},e:function e(r){a=!0,u=r},f:function f(){try{i||null==_n.return||_n.return()}finally{if(a)throw u}}}}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var o={}.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}var viewArrayAsScope=function viewArrayAsScope(data,childrenPropertyNames,propertyReferenceKeys){return new Proxy(data,{ownKeys:function ownKeys(target){return Reflect.ownKeys(target)},get:function get(target,name){var _iterator=_createForOfIteratorHelper(target),_step;try{for(_iterator.s();!(_step=_iterator.n()).done;){var element=_step.value;var _iterator2=_createForOfIteratorHelper(propertyReferenceKeys),_step2;try{for(_iterator2.s();!(_step2=_iterator2.n()).done;){var key=_step2.value;if(element[key]===name){// NOTE: Type[keyof Type]
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
/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_297532__) {

/* harmony export */ __nested_webpack_require_297532__.d(__nested_webpack_exports__, {
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
/* harmony import */ var _evaluators_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_297532__(19);
/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_297532__(20);
/* harmony import */ var _indicator_functions_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_297532__(14);
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/* !
    region header
    [Project page](https://tsickert.com/clientnode)

    Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/var evaluateExpression=_evaluators_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Ay;/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (0)));

/***/ }),
/* 22 */
/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_302742__) {

/* harmony export */ __nested_webpack_require_302742__.d(__nested_webpack_exports__, {
/* harmony export */   l: function() { return /* reexport safe */ _constants_js__WEBPACK_IMPORTED_MODULE_0__.l_; }
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_302742__(1);
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module cli *//* !
    region header
    [Project page](https://tsickert.com/clientnode)

    Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012

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
/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_303856__) {

/* harmony export */ __nested_webpack_require_303856__.d(__nested_webpack_exports__, {
/* harmony export */   Ri: function() { return /* binding */ getCookie; },
/* harmony export */   TV: function() { return /* binding */ setCookie; },
/* harmony export */   Yj: function() { return /* binding */ deleteCookie; }
/* harmony export */ });
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_303856__(5);
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module cookie *//* !
    region header
    [Project page](https://tsickert.com/clientnode)

    Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function _objectSpread(r){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(o),!0).forEach(function(t){_defineProperty(r,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):ownKeys(Object(o)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))})}return r}function _defineProperty(r,t,o){return(t=_toPropertyKey(t))in r?Object.defineProperty(r,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[t]=o,r}function _toPropertyKey(r){var o=_toPrimitive(r,"string");return"symbol"==_typeof(o)?o:o+""}function _toPrimitive(t,e){if("object"!=_typeof(t)||!t)return t;var r;if("undefined"!=typeof Symbol&&void 0!==(r=t[Symbol.toPrimitive])){var i=r.call(t,e||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function _createForOfIteratorHelper(e,t){var _n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!_n){if(Array.isArray(e)||(_n=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){_n&&(e=_n);var o=0,F=function F(){};return{s:F,n:function n(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function e(r){throw r},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u,i=!0;return{s:function s(){_n=_n.call(e)},n:function n(){i=!0;var r=_n.next();return r.done?{done:!0}:{value:r.value,done:i=!1}},e:function e(r){a=!0,u=r},f:function f(){try{i||null==_n.return||_n.return()}finally{if(a)throw u}}}}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var o={}.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n};/**
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
/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_310491__) {

/* harmony export */ __nested_webpack_require_310491__.d(__nested_webpack_exports__, {
/* harmony export */   CJ: function() { return /* binding */ cacheImage; },
/* harmony export */   QB: function() { return /* binding */ checkReachability; },
/* harmony export */   Zx: function() { return /* binding */ checkUnreachability; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_310491__(0);
/* harmony import */ var _indicators_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_310491__(4);
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_310491__(5);
/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_310491__(3);
/* harmony import */ var _utility_js__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_310491__(13);
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module data-transfer *//* !
    region header
    [Project page](https://tsickert.com/clientnode)

    Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/function _regenerator(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var r,e,o="function"==typeof Symbol?Symbol:{},n=o.iterator||"@@iterator",a=o.toStringTag||"@@toStringTag";function i(o,n,a,i){var u=n&&n.prototype instanceof Generator?n:Generator,f=Object.create(u.prototype);return _regeneratorDefine2(f,"_invoke",function(t,o,n){var a,i,u,f=0,p=n||[],y=!1,G={p:0,n:0,v:r,a:l,f:l.bind(r,4),d:function d(t,e){return a=t,i=0,u=r,G.n=e,c}};function l(t,o){for(i=t,u=o,e=0;!y&&f&&!n&&e<p.length;e++){var n,a=p[e],l=G.p,F=a[2];t>3?(n=F===o)&&(u=a[(i=a[4])?5:(i=3,3)],a[4]=a[5]=r):a[0]<=l&&((n=t<2&&l<a[1])?(i=0,G.v=o,G.n=a[1]):l<F&&(n=t<3||a[0]>o||o>F)&&(a[4]=t,a[5]=o,G.n=F,i=0))}if(n||t>1)return c;throw y=!0,o}return function(n,p,F){if(f>1)throw TypeError("Generator is already running");for(y&&1===p&&l(p,F),i=p,u=F;(e=i<2?r:u)||!y;){a||(i?i<3?(i>1&&(G.n=-1),l(i,u)):G.n=u:G.v=u);try{if(f=2,a){if(i||(n="next"),e=a[n]){if(!(e=e.call(a,u)))throw TypeError("iterator result is not an object");if(!e.done)return e;u=e.value,i<2&&(i=0)}else 1===i&&(e=a.return)&&e.call(a),i<2&&(u=TypeError("The iterator does not provide a '"+n+"' method"),i=1);a=r}else if((e=(y=G.n<0)?u:t.call(o,G))!==c)break}catch(t){a=r,i=1,u=t}finally{f=1}}return{value:e,done:y}}}(o,a,i),!0),f}var c={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}e=Object.getPrototypeOf;var u=[][n]?e(e([][n]())):(_regeneratorDefine2(e={},n,function(){return this}),e),f=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(u);function p(r){return Object.setPrototypeOf?Object.setPrototypeOf(r,GeneratorFunctionPrototype):(r.__proto__=GeneratorFunctionPrototype,_regeneratorDefine2(r,a,"GeneratorFunction")),r.prototype=Object.create(f),r}return GeneratorFunction.prototype=GeneratorFunctionPrototype,_regeneratorDefine2(f,"constructor",GeneratorFunctionPrototype),_regeneratorDefine2(GeneratorFunctionPrototype,"constructor",GeneratorFunction),GeneratorFunction.displayName="GeneratorFunction",_regeneratorDefine2(GeneratorFunctionPrototype,a,"GeneratorFunction"),_regeneratorDefine2(f),_regeneratorDefine2(f,a,"Generator"),_regeneratorDefine2(f,n,function(){return this}),_regeneratorDefine2(f,"toString",function(){return"[object Generator]"}),(_regenerator=function _regenerator(){return{w:i,m:p}})()}function _regeneratorDefine2(e,r,n,t){var i=Object.defineProperty;try{i({},"",{})}catch(e){i=0}_regeneratorDefine2=function _regeneratorDefine(e,r,n,t){function o(r,n){_regeneratorDefine2(e,r,function(e){return this._invoke(r,n,e)})}r?i?i(e,r,{value:n,enumerable:!t,configurable:!t,writable:!t}):e[r]=n:(o("next",0),o("throw",1),o("return",2))},_regeneratorDefine2(e,r,n,t)};function asyncGeneratorStep(n,t,e,r,o,a,c){try{var i=n[a](c),u=i.value}catch(n){return void e(n)}i.done?t(u):Promise.resolve(u).then(r,o)}function _asyncToGenerator(n){return function(){var t=this,e=arguments;return new Promise(function(r,o){var a=n.apply(t,e);function _next(n){asyncGeneratorStep(a,r,o,_next,_throw,"next",n)}function _throw(n){asyncGeneratorStep(a,r,o,_next,_throw,"throw",n)}_next(void 0)})}};/**
 * Preloads a given url via a temporary created image element.
 * @param url - To image which should be downloaded.
 * @returns A Promise indicating whether the image was loaded.
 */var cacheImage=function cacheImage(url){return new Promise(function(resolve,reject){var imageElement=document.createElement("img");imageElement.onload=function(){var isLoaded=imageElement.complete;imageElement.remove();if(isLoaded)resolve();else reject(new Error("Image could not be loaded."))};imageElement.src=url})};/**
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
})}));case 2:_context4.p=2;_t5=check;_context4.n=3;return _context_js__WEBPACK_IMPORTED_MODULE_2__/* .globalContext */ .Lz.fetch(url,options.options);case 3:result=_t5(_context4.v);if(!result){_context4.n=4;break}return _context4.a(2,result);case 4:_context4.n=6;break;case 5:_context4.p=5;_t6=_context4.v;return _context4.a(2,_t6);case 6:throw new Error("Given url \"".concat(url,"\" is reachable."));case 7:return _context4.a(2)}},_callee4,null,[[2,5]])}));function checkUnreachability(_x3,_x4){return _checkUnreachability.apply(this,arguments)}return checkUnreachability}();

/***/ }),
/* 25 */
/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_324777__) {

/* harmony export */ __nested_webpack_require_324777__.d(__nested_webpack_exports__, {
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
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_324777__(0);
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_324777__(5);
/* harmony import */ var _utility_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_324777__(13);
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module domNode *//* !
    region header
    [Project page](https://tsickert.com/clientnode)

    Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _regenerator(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var r,e,o="function"==typeof Symbol?Symbol:{},n=o.iterator||"@@iterator",a=o.toStringTag||"@@toStringTag";function i(o,n,a,i){var u=n&&n.prototype instanceof Generator?n:Generator,f=Object.create(u.prototype);return _regeneratorDefine2(f,"_invoke",function(t,o,n){var a,i,u,f=0,p=n||[],y=!1,G={p:0,n:0,v:r,a:l,f:l.bind(r,4),d:function d(t,e){return a=t,i=0,u=r,G.n=e,c}};function l(t,o){for(i=t,u=o,e=0;!y&&f&&!n&&e<p.length;e++){var n,a=p[e],l=G.p,F=a[2];t>3?(n=F===o)&&(u=a[(i=a[4])?5:(i=3,3)],a[4]=a[5]=r):a[0]<=l&&((n=t<2&&l<a[1])?(i=0,G.v=o,G.n=a[1]):l<F&&(n=t<3||a[0]>o||o>F)&&(a[4]=t,a[5]=o,G.n=F,i=0))}if(n||t>1)return c;throw y=!0,o}return function(n,p,F){if(f>1)throw TypeError("Generator is already running");for(y&&1===p&&l(p,F),i=p,u=F;(e=i<2?r:u)||!y;){a||(i?i<3?(i>1&&(G.n=-1),l(i,u)):G.n=u:G.v=u);try{if(f=2,a){if(i||(n="next"),e=a[n]){if(!(e=e.call(a,u)))throw TypeError("iterator result is not an object");if(!e.done)return e;u=e.value,i<2&&(i=0)}else 1===i&&(e=a.return)&&e.call(a),i<2&&(u=TypeError("The iterator does not provide a '"+n+"' method"),i=1);a=r}else if((e=(y=G.n<0)?u:t.call(o,G))!==c)break}catch(t){a=r,i=1,u=t}finally{f=1}}return{value:e,done:y}}}(o,a,i),!0),f}var c={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}e=Object.getPrototypeOf;var u=[][n]?e(e([][n]())):(_regeneratorDefine2(e={},n,function(){return this}),e),f=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(u);function p(r){return Object.setPrototypeOf?Object.setPrototypeOf(r,GeneratorFunctionPrototype):(r.__proto__=GeneratorFunctionPrototype,_regeneratorDefine2(r,a,"GeneratorFunction")),r.prototype=Object.create(f),r}return GeneratorFunction.prototype=GeneratorFunctionPrototype,_regeneratorDefine2(f,"constructor",GeneratorFunctionPrototype),_regeneratorDefine2(GeneratorFunctionPrototype,"constructor",GeneratorFunction),GeneratorFunction.displayName="GeneratorFunction",_regeneratorDefine2(GeneratorFunctionPrototype,a,"GeneratorFunction"),_regeneratorDefine2(f),_regeneratorDefine2(f,a,"Generator"),_regeneratorDefine2(f,n,function(){return this}),_regeneratorDefine2(f,"toString",function(){return"[object Generator]"}),(_regenerator=function _regenerator(){return{w:i,m:p}})()}function _regeneratorDefine2(e,r,n,t){var i=Object.defineProperty;try{i({},"",{})}catch(e){i=0}_regeneratorDefine2=function _regeneratorDefine(e,r,n,t){function o(r,n){_regeneratorDefine2(e,r,function(e){return this._invoke(r,n,e)})}r?i?i(e,r,{value:n,enumerable:!t,configurable:!t,writable:!t}):e[r]=n:(o("next",0),o("throw",1),o("return",2))},_regeneratorDefine2(e,r,n,t)}function asyncGeneratorStep(n,t,e,r,o,a,c){try{var i=n[a](c),u=i.value}catch(n){return void e(n)}i.done?t(u):Promise.resolve(u).then(r,o)}function _asyncToGenerator(n){return function(){var t=this,e=arguments;return new Promise(function(r,o){var a=n.apply(t,e);function _next(n){asyncGeneratorStep(a,r,o,_next,_throw,"next",n)}function _throw(n){asyncGeneratorStep(a,r,o,_next,_throw,"throw",n)}_next(void 0)})}};function _slicedToArray(e,i){return _iterableToArrayLimit(e,i)||_unsupportedIterableToArray(e,i)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArrayLimit(r,t){var e=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(Array.isArray(r)&&(null==e||e===("undefined"!=typeof Symbol&&[][Symbol.iterator])||e===[]["@@iterator"]))return r;if(null!=e){var l,n,i,a,u=[],o=!0,f=!1;try{if(i=(e=e.call(r)).next,0===t){if(Object(e)!==e)return;o=!1}else for(;!(o=(l=i.call(e)).done)&&(u.push(l.value),u.length!==t);o=!0);}catch(r){f=!0,n=r}finally{try{if(!o&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(f)throw n}}return u}}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function _objectSpread(r){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(o),!0).forEach(function(t){_defineProperty(r,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):ownKeys(Object(o)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))})}return r}function _defineProperty(r,t,o){return(t=_toPropertyKey(t))in r?Object.defineProperty(r,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[t]=o,r}function _toPropertyKey(r){var o=_toPrimitive(r,"string");return"symbol"==_typeof(o)?o:o+""}function _toPrimitive(t,e){if("object"!=_typeof(t)||!t)return t;var r;if("undefined"!=typeof Symbol&&void 0!==(r=t[Symbol.toPrimitive])){var i=r.call(t,e||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function _toConsumableArray(a){return _arrayWithoutHoles(a)||_iterableToArray(a)||_unsupportedIterableToArray(a)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArray(r){var e="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(Array.isArray(r)&&(null==e||e===("undefined"!=typeof Symbol&&[][Symbol.iterator])||e===[]["@@iterator"]))return r;if(null!=e){for(var t,o=[],a=e.call(r);!(t=a.next()).done;)o.push(t.value);return o}}function _arrayWithoutHoles(a){if(Array.isArray(a))return _arrayLikeToArray(a)}function _createForOfIteratorHelper(e,t){var _n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!_n){if(Array.isArray(e)||(_n=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){_n&&(e=_n);var o=0,F=function F(){};return{s:F,n:function n(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function e(r){throw r},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u,i=!0;return{s:function s(){_n=_n.call(e)},n:function n(){i=!0;var r=_n.next();return r.done?{done:!0}:{value:r.value,done:i=!1}},e:function e(r){a=!0,u=r},f:function f(){try{i||null==_n.return||_n.return()}finally{if(a)throw u}}}}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var o={}.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n};var STOP_AUTO_SCROLLING={value:_context_js__WEBPACK_IMPORTED_MODULE_1__/* .NOOP */ .tE};var MANUAL_SCROLL_EVENT_NAMES=["DOMMouseScroll","keydown","mousedown","mousewheel","wheel","touchstart","touchmove"];var SCROLL_EVENT_NAMES=["scroll"].concat(MANUAL_SCROLL_EVENT_NAMES);var closest=function closest(node,selector,startWithParent){var _node$parentElement;if(startWithParent===void 0){startWithParent=false}return"closest"in node&&!startWithParent?node.closest(selector):((_node$parentElement=node.parentElement)===null||_node$parentElement===void 0?void 0:_node$parentElement.closest(selector))||null};var createDomNodes=function createDomNodes(html){var domNodeWrapper=document.createElement("div");domNodeWrapper.innerHTML=html;if(domNodeWrapper.childNodes.length===1)/*
            NOTE: We need to clone the nested child to decouple it from its
            parent node.
        */return domNodeWrapper.childNodes[0].cloneNode(true);return domNodeWrapper};var fade=function fade(domNode,intervalInMilliseconds,out){if(intervalInMilliseconds===void 0){intervalInMilliseconds=200}if(out===void 0){out=true}var transitionBackup=domNode.style.transition;var visibleBackup=domNode.style.visibility;var opacityBackup=domNode.style.opacity;var hadStyleAttribute=domNode.hasAttribute("style");if(out){domNode.style.visibility="hidden";domNode.style.opacity="0";domNode.style.transition="visibility 0s ".concat(String(intervalInMilliseconds),"ms, ")+"opacity ".concat(String(intervalInMilliseconds),"ms linear")}else{domNode.style.visibility="visible";domNode.style.opacity="1";domNode.style.transition="opacity ".concat(String(intervalInMilliseconds),"ms linear")}var clearTimeoutAndResetDomNode=_context_js__WEBPACK_IMPORTED_MODULE_1__/* .NOOP */ .tE;var resolved=false;var promise=new Promise(function(resolve){clearTimeoutAndResetDomNode=function clearTimeoutAndResetDomNode(){domNode.style.transition=transitionBackup;resolved=true;resolve()};void (0,_utility_js__WEBPACK_IMPORTED_MODULE_2__/* .timeout */ .wR)(intervalInMilliseconds).then(clearTimeoutAndResetDomNode)});promise.clear=function(){if(!resolved){domNode.style.transition="none";clearTimeoutAndResetDomNode()}};promise.resetStyles=function(){if(hadStyleAttribute){domNode.style.transition=transitionBackup;domNode.style.visibility=visibleBackup;domNode.style.opacity=opacityBackup}else domNode.removeAttribute("style")};return promise};var fadeIn=function fadeIn(domNode,intervalInMilliseconds){if(intervalInMilliseconds===void 0){intervalInMilliseconds=200}return fade(domNode,intervalInMilliseconds,false)};var fadeOut=function fadeOut(domNode,intervalInMilliseconds){if(intervalInMilliseconds===void 0){intervalInMilliseconds=200}return fade(domNode,intervalInMilliseconds)};var getAll=function getAll(root){if(!_context_js__WEBPACK_IMPORTED_MODULE_1__/* .globalContext */ .Lz.document)return[];var nodes=[];// SHOW_ALL includes elements, text, and comments
var walker=_context_js__WEBPACK_IMPORTED_MODULE_1__/* .globalContext */ .Lz.document.createTreeWalker(root,NodeFilter.SHOW_ALL,null);var currentNode=walker.currentNode;while(currentNode){nodes.push(currentNode);currentNode=walker.nextNode()}return nodes};var getParents=function getParents(node){var result=[];while(node.parentNode){result.push(node.parentNode);node=node.parentNode}return result};var _getText=function getText(root,recursive){if(recursive===void 0){recursive=false}if(root.nodeType===Node.TEXT_NODE){var _root$nodeValue;var content=(_root$nodeValue=root.nodeValue)===null||_root$nodeValue===void 0?void 0:_root$nodeValue.trim();if(content)return[content]}var result=[];var _iterator=_createForOfIteratorHelper(root.childNodes),_step;try{for(_iterator.s();!(_step=_iterator.n()).done;){var domNode=_step.value;if(recursive||domNode.nodeType===Node.TEXT_NODE)result.push.apply(result,_toConsumableArray(_getText(domNode)))}}catch(err){_iterator.e(err)}finally{_iterator.f()}return result};/**
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
var _step2=function step(currentTime){if(!startTime)startTime=currentTime;var progress=currentTime-startTime;var timeRatio=Math.min(progress/options.durationInMilliseconds,1);var easedRatio=easeInOutQuad(timeRatio);// Linearly interpolate the positions based on eased progress.
var nextY=startY+distanceY*easedRatio;var nextX=startX+distanceX*easedRatio;// Apply scroll to window or container.
if(isWindow)window.scrollTo(nextX,nextY);else{;options.containerDomNode.scrollTop=nextY;options.containerDomNode.scrollLeft=nextX}if(timeRatio<1)animationFrameId=requestAnimationFrame(_step2);else STOP_AUTO_SCROLLING.value()};animationFrameId=requestAnimationFrame(_step2)};/**
 * Scrolls to the given DomNode's location or tio of the page.
 * @param targetDomNode - DomNode to scroll to. If not given, scrolls to the
 * top of the page.
 * @param behavior - Scroll behavior to use.
 */var scrollTo=function scrollTo(targetDomNode,behavior){var _globalContext$window;if(targetDomNode===void 0){targetDomNode=null}if(behavior===void 0){behavior="smooth"}if(targetDomNode&&!("getBoundingClientRect"in targetDomNode))targetDomNode=targetDomNode.parentElement;var _ref=targetDomNode?targetDomNode.getBoundingClientRect():{left:0,top:0},left=_ref.left,top=_ref.top;(_globalContext$window=_context_js__WEBPACK_IMPORTED_MODULE_1__/* .globalContext */ .Lz.window)===null||_globalContext$window===void 0||_globalContext$window.scrollTo({left:left,top:top,behavior:behavior})};/**
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
 */var replace=function replace(domNodeToReplace,replacementDomNodes,skipEmptyTextNodes){if(skipEmptyTextNodes===void 0){skipEmptyTextNodes=false}var _iterator2=_createForOfIteratorHelper([].concat(replacementDomNodes).reverse()),_step3;try{for(_iterator2.s();!(_step3=_iterator2.n()).done;){var _replacement$nodeValu;var replacement=_step3.value;if(!(skipEmptyTextNodes&&replacement.nodeType===Node.TEXT_NODE&&((_replacement$nodeValu=replacement.nodeValue)===null||_replacement$nodeValu===void 0?void 0:_replacement$nodeValu.trim())===""))domNodeToReplace.after(replacement)}}catch(err){_iterator2.e(err)}finally{_iterator2.f()}domNodeToReplace.remove()};/**
 * Moves the content of a given dom node one level up and removes the given
 * node.
 * @param domNode - Node to unwrap.
 * @returns List of unwrapped nodes.
 */var unwrap=function unwrap(domNode){var parent=domNode.parentNode;var result=[];// NOTE: We need to use "Array.from" to copy the list.
for(var _i6=0,_Array$from=Array.from(domNode.childNodes);_i6<_Array$from.length;_i6++){var childNode=_Array$from[_i6];result.push(childNode);if(parent)parent.insertBefore(childNode,domNode)}if(parent)parent.removeChild(domNode);return result};var wrap=function wrap(domNodes,wrapper){var domNodeList=domNodes.length?Array.from(domNodes):[domNodes];// Use the first element's position as the anchor point
var first=domNodeList[0];if(first.parentNode)first.parentNode.insertBefore(wrapper,first);var _iterator3=_createForOfIteratorHelper(domNodeList),_step4;try{for(_iterator3.s();!(_step4=_iterator3.n()).done;){var domNode=_step4.value;wrapper.appendChild(domNode)}}catch(err){_iterator3.e(err)}finally{_iterator3.f()}};

/***/ }),
/* 26 */
/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_349654__) {

/* harmony export */ __nested_webpack_require_349654__.d(__nested_webpack_exports__, {
/* harmony export */   G: function() { return /* binding */ handleChildProcess; },
/* harmony export */   q: function() { return /* binding */ getProcessCloseHandler; }
/* harmony export */ });
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_349654__(5);
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module process *//* !
    region header
    [Project page](https://tsickert.com/clientnode)

    Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012

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
/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_352404__) {

/* harmony export */ __nested_webpack_require_352404__.d(__nested_webpack_exports__, {
/* harmony export */   Ez: function() { return /* binding */ determineUniqueScopeName; },
/* harmony export */   MX: function() { return /* binding */ UTILITY_SCOPE; },
/* harmony export */   Xw: function() { return /* binding */ UTILITY_SCOPE_VALUES; },
/* harmony export */   bG: function() { return /* binding */ UTILITY_SCOPE_NAMES; },
/* harmony export */   uf: function() { return /* binding */ isolateScope; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_352404__(0);
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_352404__(5);
/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_352404__(16);
/* harmony import */ var _datetime_js__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_352404__(17);
/* harmony import */ var _filesystem_js__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_352404__(12);
/* harmony import */ var _function_js__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_352404__(18);
/* harmony import */ var _indicators_js__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_352404__(4);
/* harmony import */ var _Logger_js__WEBPACK_IMPORTED_MODULE_7__ = __nested_webpack_require_352404__(15);
/* harmony import */ var _module_js__WEBPACK_IMPORTED_MODULE_8__ = __nested_webpack_require_352404__(2);
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_9__ = __nested_webpack_require_352404__(9);
/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_10__ = __nested_webpack_require_352404__(3);
/* harmony import */ var _string_js__WEBPACK_IMPORTED_MODULE_11__ = __nested_webpack_require_352404__(7);
/* harmony import */ var _utility_js__WEBPACK_IMPORTED_MODULE_12__ = __nested_webpack_require_352404__(13);
var _array_js__WEBPACK_IMPORTED_MODULE_2___namespace_object = {};
__nested_webpack_require_352404__.r(_array_js__WEBPACK_IMPORTED_MODULE_2___namespace_object);
__nested_webpack_require_352404__.d(_array_js__WEBPACK_IMPORTED_MODULE_2___namespace_object, {
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
__nested_webpack_require_352404__.r(_datetime_js__WEBPACK_IMPORTED_MODULE_3___namespace_object);
__nested_webpack_require_352404__.d(_datetime_js__WEBPACK_IMPORTED_MODULE_3___namespace_object, {
	DATE_TIME_PATTERN_CACHE: function() { return _datetime_js__WEBPACK_IMPORTED_MODULE_3__.hr; },
	dateTimeFormat: function() { return _datetime_js__WEBPACK_IMPORTED_MODULE_3__.LE; },
	interpretDateTime: function() { return _datetime_js__WEBPACK_IMPORTED_MODULE_3__.JZ; },
	normalizeDateTime: function() { return _datetime_js__WEBPACK_IMPORTED_MODULE_3__.DP; },
	sliceWeekday: function() { return _datetime_js__WEBPACK_IMPORTED_MODULE_3__.jJ; }
});
var _filesystem_js__WEBPACK_IMPORTED_MODULE_4___namespace_object = {};
__nested_webpack_require_352404__.r(_filesystem_js__WEBPACK_IMPORTED_MODULE_4___namespace_object);
__nested_webpack_require_352404__.d(_filesystem_js__WEBPACK_IMPORTED_MODULE_4___namespace_object, {
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
__nested_webpack_require_352404__.r(_function_js__WEBPACK_IMPORTED_MODULE_5___namespace_object);
__nested_webpack_require_352404__.d(_function_js__WEBPACK_IMPORTED_MODULE_5___namespace_object, {
	getParameterNames: function() { return _function_js__WEBPACK_IMPORTED_MODULE_5__.Gj; },
	identity: function() { return _function_js__WEBPACK_IMPORTED_MODULE_5__.D_; },
	invertArrayFilter: function() { return _function_js__WEBPACK_IMPORTED_MODULE_5__.gH; }
});
var _indicators_js__WEBPACK_IMPORTED_MODULE_6___namespace_object = {};
__nested_webpack_require_352404__.r(_indicators_js__WEBPACK_IMPORTED_MODULE_6___namespace_object);
__nested_webpack_require_352404__.d(_indicators_js__WEBPACK_IMPORTED_MODULE_6___namespace_object, {
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
__nested_webpack_require_352404__.r(_Logger_js__WEBPACK_IMPORTED_MODULE_7___namespace_object);
__nested_webpack_require_352404__.d(_Logger_js__WEBPACK_IMPORTED_MODULE_7___namespace_object, {
	LEVELS: function() { return _Logger_js__WEBPACK_IMPORTED_MODULE_7__.A_; },
	LEVELS_COLOR: function() { return _Logger_js__WEBPACK_IMPORTED_MODULE_7__.Wh; },
	Logger: function() { return _Logger_js__WEBPACK_IMPORTED_MODULE_7__.Vy; },
	"default": function() { return _Logger_js__WEBPACK_IMPORTED_MODULE_7__.Ay; }
});
var _module_js__WEBPACK_IMPORTED_MODULE_8___namespace_object = {};
__nested_webpack_require_352404__.r(_module_js__WEBPACK_IMPORTED_MODULE_8___namespace_object);
__nested_webpack_require_352404__.d(_module_js__WEBPACK_IMPORTED_MODULE_8___namespace_object, {
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
__nested_webpack_require_352404__.r(_number_js__WEBPACK_IMPORTED_MODULE_9___namespace_object);
__nested_webpack_require_352404__.d(_number_js__WEBPACK_IMPORTED_MODULE_9___namespace_object, {
	ceil: function() { return _number_js__WEBPACK_IMPORTED_MODULE_9__.mk; },
	floor: function() { return _number_js__WEBPACK_IMPORTED_MODULE_9__.RI; },
	getUTCTimestamp: function() { return _number_js__WEBPACK_IMPORTED_MODULE_9__.n$; },
	isNotANumber: function() { return _number_js__WEBPACK_IMPORTED_MODULE_9__.W2; },
	round: function() { return _number_js__WEBPACK_IMPORTED_MODULE_9__.LI; }
});
var _object_js__WEBPACK_IMPORTED_MODULE_10___namespace_object = {};
__nested_webpack_require_352404__.r(_object_js__WEBPACK_IMPORTED_MODULE_10___namespace_object);
__nested_webpack_require_352404__.d(_object_js__WEBPACK_IMPORTED_MODULE_10___namespace_object, {
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
__nested_webpack_require_352404__.r(_string_js__WEBPACK_IMPORTED_MODULE_11___namespace_object);
__nested_webpack_require_352404__.d(_string_js__WEBPACK_IMPORTED_MODULE_11___namespace_object, {
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
__nested_webpack_require_352404__.r(_utility_js__WEBPACK_IMPORTED_MODULE_12___namespace_object);
__nested_webpack_require_352404__.d(_utility_js__WEBPACK_IMPORTED_MODULE_12___namespace_object, {
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
    [Project page](https://tsickert.com/clientnode)

    Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012

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
 * Generates a unique name in given scope (useful for jsonp requests).
 * @param prefix - A prefix which will be prepended to unique name.
 * @param suffix - A suffix which will be prepended to unique name.
 * @param scope - A scope where the name should be unique.
 * @param initialUniqueName - An initial scope name to use if not exists.
 * @returns The function name.
 */var determineUniqueScopeName=function determineUniqueScopeName(prefix,suffix,scope,initialUniqueName){if(prefix===void 0){prefix="callback"}if(suffix===void 0){suffix=""}if(scope===void 0){scope=_context_js__WEBPACK_IMPORTED_MODULE_1__/* .globalContext */ .Lz}if(initialUniqueName===void 0){initialUniqueName=""}if(initialUniqueName.length&&!(initialUniqueName in scope))return initialUniqueName;var uniqueName=prefix+suffix;for(var iteration=0;iteration<_context_js__WEBPACK_IMPORTED_MODULE_1__/* .MAXIMAL_NUMBER_OF_ITERATIONS */ .$Q.value;iteration++){uniqueName=prefix+String(Math.round(Math.random()*Math.pow(10,10)))+suffix;if(!(uniqueName in scope))break}return uniqueName};/**
 * Overwrites all inherited variables from parent scope with "undefined".
 * @param scope - A scope where inherited names will be removed.
 * @param prefixesToIgnore - Name prefixes to ignore during deleting names in
 * given scope.
 * @returns The isolated scope.
 */var isolateScope=function isolateScope(scope,prefixesToIgnore){if(prefixesToIgnore===void 0){prefixesToIgnore=[]}for(var name in scope)if(!(prefixesToIgnore.includes(name.charAt(0))||["constructor","prototype","this"].includes(name)||Object.prototype.hasOwnProperty.call(scope,name)))/*
                NOTE: Delete ("delete $scope[name]") doesn't destroy the
                automatic lookup to parent scope.
            */scope[name]=undefined;return scope};

/***/ }),
/* 28 */
/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_371860__) {

/* harmony export */ __nested_webpack_require_371860__.d(__nested_webpack_exports__, {
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
/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_371860__(16);
/* harmony import */ var _domNode_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_371860__(25);
/* harmony import */ var _cli_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_371860__(22);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_371860__(1);
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_371860__(5);
/* harmony import */ var _cookie_js__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_371860__(23);
/* harmony import */ var _data_transfer_js__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_371860__(24);
/* harmony import */ var _datetime_js__WEBPACK_IMPORTED_MODULE_7__ = __nested_webpack_require_371860__(17);
/* harmony import */ var _expression_index_js__WEBPACK_IMPORTED_MODULE_8__ = __nested_webpack_require_371860__(21);
/* harmony import */ var _filesystem_js__WEBPACK_IMPORTED_MODULE_9__ = __nested_webpack_require_371860__(12);
/* harmony import */ var _function_js__WEBPACK_IMPORTED_MODULE_10__ = __nested_webpack_require_371860__(18);
/* harmony import */ var _indicators_js__WEBPACK_IMPORTED_MODULE_11__ = __nested_webpack_require_371860__(4);
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_12__ = __nested_webpack_require_371860__(9);
/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_13__ = __nested_webpack_require_371860__(3);
/* harmony import */ var _process_js__WEBPACK_IMPORTED_MODULE_14__ = __nested_webpack_require_371860__(26);
/* harmony import */ var _module_js__WEBPACK_IMPORTED_MODULE_15__ = __nested_webpack_require_371860__(2);
/* harmony import */ var _scope_js__WEBPACK_IMPORTED_MODULE_16__ = __nested_webpack_require_371860__(27);
/* harmony import */ var _string_js__WEBPACK_IMPORTED_MODULE_17__ = __nested_webpack_require_371860__(7);
/* harmony import */ var _Logger_js__WEBPACK_IMPORTED_MODULE_18__ = __nested_webpack_require_371860__(15);
/* harmony import */ var _utility_js__WEBPACK_IMPORTED_MODULE_19__ = __nested_webpack_require_371860__(13);
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module clientnode *//* !
    region header
    [Project page](https://tsickert.com/clientnode)

    Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012

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
/******/ function __nested_webpack_require_399954__(moduleId) {
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
/******/ 	__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_399954__);
/******/ 
/******/ 	// Flag the module as loaded
/******/ 	module.loaded = true;
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/******/ // expose the module cache
/******/ __nested_webpack_require_399954__.c = __webpack_module_cache__;
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ !function() {
/******/ 	// define getter/value functions for harmony exports
/******/ 	__nested_webpack_require_399954__.d = function(exports, definition) {
/******/ 		if(Array.isArray(definition)) {
/******/ 			var i = 0;
/******/ 			while(i < definition.length) {
/******/ 				var key = definition[i++];
/******/ 				var binding = definition[i++];
/******/ 				if(!__nested_webpack_require_399954__.o(exports, key)) {
/******/ 					if(binding === 0) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 					} else {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 					}
/******/ 				} else if(binding === 0) { i++; }
/******/ 			}
/******/ 		} else {
/******/ 			for(var key in definition) {
/******/ 				if(__nested_webpack_require_399954__.o(definition, key) && !__nested_webpack_require_399954__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	};
/******/ }();
/******/ 
/******/ /* webpack/runtime/global */
/******/ !function() {
/******/ 	__nested_webpack_require_399954__.g = (function() {
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
/******/ 	__nested_webpack_require_399954__.hmd = function(module) {
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
/******/ 	__nested_webpack_require_399954__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ }();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ !function() {
/******/ 	// define __esModule on exports
/******/ 	__nested_webpack_require_399954__.r = function(exports) {
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
/******/ var __nested_webpack_exports__ = __nested_webpack_require_399954__(28);
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
/******/ const __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	const cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	const module = __webpack_module_cache__[moduleId] = {
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
/******/ /* webpack/runtime/concatenation wrap */
/******/ // wrap a concatenated module body as a lazy, memoized accessor; mod is
/******/ // set before the body runs so re-entrant calls (require cycles) observe
/******/ // the partial exports like Node.js
/******/ __webpack_require__.cw = (body) => {
/******/ 	var mod;
/******/ 	return () => {
/******/ 		if (body) {
/******/ 			var fn = body;
/******/ 			body = 0;
/******/ 			mod = { exports: {} };
/******/ 			fn.call(mod.exports, mod, mod.exports);
/******/ 		}
/******/ 		return mod.exports;
/******/ 	};
/******/ };
/******/ 
/******/ /* webpack/runtime/define property getters */
/******/ // define getter/value functions for harmony exports
/******/ __webpack_require__.d = (exports, definition) => {
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
/******/ __webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 
/************************************************************************/

// EXTERNAL MODULE: ./node_modules/core-js/internals/a-callable.js
var a_callable_namespaceFn = () => {
	return __webpack_require__(17);
};

// EXTERNAL MODULE: ./node_modules/core-js/internals/an-instance.js
var an_instance_namespaceFn = () => {
	return __webpack_require__(91);
};

// EXTERNAL MODULE: ./node_modules/core-js/internals/an-object.js
var an_object_namespaceFn = () => {
	return __webpack_require__(5);
};

// EXTERNAL MODULE: ./node_modules/core-js/internals/array-includes.js
var array_includes_namespaceFn = () => {
	return __webpack_require__(57);
};

// EXTERNAL MODULE: ./node_modules/core-js/internals/array-set-length.js
var array_set_length_namespaceFn = () => {
	return __webpack_require__(89);
};

// EXTERNAL MODULE: ./node_modules/core-js/internals/call-with-safe-iteration-closing.js
var call_with_safe_iteration_closing_namespaceFn = () => {
	return __webpack_require__(64);
};

// EXTERNAL MODULE: ./node_modules/core-js/internals/classof-raw.js
var classof_raw_namespaceFn = () => {
	return __webpack_require__(15);
};

// EXTERNAL MODULE: ./node_modules/core-js/internals/correct-prototype-getter.js
var correct_prototype_getter_namespaceFn = () => {
	return __webpack_require__(92);
};

// EXTERNAL MODULE: ./node_modules/core-js/internals/create-iter-result-object.js
var create_iter_result_object_namespaceFn = () => {
	return __webpack_require__(96);
};

// EXTERNAL MODULE: ./node_modules/core-js/internals/create-non-enumerable-property.js
var create_non_enumerable_property_namespaceFn = () => {
	return __webpack_require__(34);
};

// EXTERNAL MODULE: ./node_modules/core-js/internals/create-property.js
var create_property_namespaceFn = () => {
	return __webpack_require__(63);
};

// EXTERNAL MODULE: ./node_modules/core-js/internals/define-built-in-accessor.js
var define_built_in_accessor_namespaceFn = () => {
	return __webpack_require__(59);
};

// EXTERNAL MODULE: ./node_modules/core-js/internals/define-built-in.js
var define_built_in_namespaceFn = () => {
	return __webpack_require__(35);
};

// EXTERNAL MODULE: ./node_modules/core-js/internals/define-built-ins.js
var define_built_ins_namespaceFn = () => {
	return __webpack_require__(95);
};

// EXTERNAL MODULE: ./node_modules/core-js/internals/descriptors.js
var descriptors_namespaceFn = () => {
	return __webpack_require__(4);
};

// EXTERNAL MODULE: ./node_modules/core-js/internals/does-not-exceed-safe-integer.js
var does_not_exceed_safe_integer_namespaceFn = () => {
	return __webpack_require__(90);
};

// EXTERNAL MODULE: ./node_modules/core-js/internals/export.js
var export_namespaceFn = () => {
	return __webpack_require__(40);
};

// EXTERNAL MODULE: ./node_modules/core-js/internals/fails.js
var fails_namespaceFn = () => {
	return __webpack_require__(2);
};

// EXTERNAL MODULE: ./node_modules/core-js/internals/function-apply.js
var function_apply_namespaceFn = () => {
	return __webpack_require__(88);
};

// EXTERNAL MODULE: ./node_modules/core-js/internals/function-call.js
var function_call_namespaceFn = () => {
	return __webpack_require__(6);
};

// EXTERNAL MODULE: ./node_modules/core-js/internals/function-uncurry-this.js
var function_uncurry_this_namespaceFn = () => {
	return __webpack_require__(0);
};

// EXTERNAL MODULE: ./node_modules/core-js/internals/get-built-in.js
var get_built_in_namespaceFn = () => {
	return __webpack_require__(18);
};

// EXTERNAL MODULE: ./node_modules/core-js/internals/get-iterator-direct.js
var get_iterator_direct_namespaceFn = () => {
	return __webpack_require__(42);
};

// EXTERNAL MODULE: ./node_modules/core-js/internals/get-method.js
var get_method_namespaceFn = () => {
	return __webpack_require__(23);
};

// EXTERNAL MODULE: ./node_modules/core-js/internals/global-this.js
var global_this_namespaceFn = () => {
	return __webpack_require__(1);
};

// EXTERNAL MODULE: ./node_modules/core-js/internals/has-own-property.js
var has_own_property_namespaceFn = () => {
	return __webpack_require__(7);
};

// EXTERNAL MODULE: ./node_modules/core-js/internals/internal-state.js
var internal_state_namespaceFn = () => {
	return __webpack_require__(54);
};

// EXTERNAL MODULE: ./node_modules/core-js/internals/is-array.js
var is_array_namespaceFn = () => {
	return __webpack_require__(45);
};

// EXTERNAL MODULE: ./node_modules/core-js/internals/is-callable.js
var is_callable_namespaceFn = () => {
	return __webpack_require__(3);
};

// EXTERNAL MODULE: ./node_modules/core-js/internals/is-object.js
var is_object_namespaceFn = () => {
	return __webpack_require__(9);
};

// EXTERNAL MODULE: ./node_modules/core-js/internals/is-pure.js
var is_pure_namespaceFn = () => {
	return __webpack_require__(41);
};

// EXTERNAL MODULE: ./node_modules/core-js/internals/is-raw-json.js
var is_raw_json_namespaceFn = () => {
	return __webpack_require__(106);
};

// EXTERNAL MODULE: ./node_modules/core-js/internals/is-symbol.js
var is_symbol_namespaceFn = () => {
	return __webpack_require__(28);
};

// EXTERNAL MODULE: ./node_modules/core-js/internals/iterate.js
var iterate_namespaceFn = () => {
	return __webpack_require__(62);
};

// EXTERNAL MODULE: ./node_modules/core-js/internals/iterator-cleanup-state.js
var iterator_cleanup_state_namespaceFn = () => {
	return __webpack_require__(98);
};

// EXTERNAL MODULE: ./node_modules/core-js/internals/iterator-close-all.js
var iterator_close_all_namespaceFn = () => {
	return __webpack_require__(97);
};

// EXTERNAL MODULE: ./node_modules/core-js/internals/iterator-close.js
var iterator_close_namespaceFn = () => {
	return __webpack_require__(14);
};

// MODULE: ./node_modules/core-js/internals/iterator-create-proxy.js
var iterator_create_proxy_namespaceFn = /*#__PURE__*/__webpack_require__.cw((module) => {

var call = (function_call_namespaceFn());
var create = (object_create_namespaceFn());
var createNonEnumerableProperty = (create_non_enumerable_property_namespaceFn());
var defineBuiltIns = (define_built_ins_namespaceFn());
var wellKnownSymbol = (well_known_symbol_namespaceFn());
var InternalStateModule = (internal_state_namespaceFn());
var getMethod = (get_method_namespaceFn());
var IteratorPrototype = (iterators_core_namespaceFn().H);
var createIterResultObject = (create_iter_result_object_namespaceFn());
var iteratorClose = (iterator_close_namespaceFn());
var iteratorCloseAll = (iterator_close_all_namespaceFn());
var cleanupState = (iterator_cleanup_state_namespaceFn());

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ITERATOR_HELPER = 'IteratorHelper';
var WRAP_FOR_VALID_ITERATOR = 'WrapForValidIterator';
var NORMAL = 'normal';
var THROW = 'throw';
var setInternalState = InternalStateModule.set;

var createIteratorProxyPrototype = function (IS_ITERATOR) {
  var getInternalState = InternalStateModule.getterFor(IS_ITERATOR ? WRAP_FOR_VALID_ITERATOR : ITERATOR_HELPER);

  return defineBuiltIns(create(IteratorPrototype), {
    next: function next() {
      var state = getInternalState(this);
      // for simplification:
      //   for `%WrapForValidIteratorPrototype%.next` or with `state.returnHandlerResult` our `nextHandler` returns `IterResultObject`
      //   for `%IteratorHelperPrototype%.next` - just a value
      if (IS_ITERATOR) return state.nextHandler();
      if (state.done) return createIterResultObject(undefined, true);
      try {
        var result = state.nextHandler();
        if (state.done) cleanupState(state);
        return state.returnHandlerResult ? result : createIterResultObject(result, state.done);
      } catch (error) {
        state.done = true;
        cleanupState(state);
        throw error;
      }
    },
    'return': function () {
      var state = getInternalState(this);
      var iterator = state.iterator;
      var inner = state.inner;
      var openIters = state.openIters;
      var done = state.done;
      state.done = true;
      if (IS_ITERATOR) {
        var returnMethod = getMethod(iterator, 'return');
        return returnMethod ? call(returnMethod, iterator) : createIterResultObject(undefined, true);
      }
      cleanupState(state);
      if (done) return createIterResultObject(undefined, true);
      if (inner) try {
        iteratorClose(inner.iterator, NORMAL);
      } catch (error) {
        return iteratorClose(iterator, THROW, error);
      }
      if (openIters) try {
        iteratorCloseAll(openIters, NORMAL);
      } catch (error) {
        if (iterator) return iteratorClose(iterator, THROW, error);
        throw error;
      }
      if (iterator) iteratorClose(iterator, NORMAL);
      return createIterResultObject(undefined, true);
    }
  });
};

var WrapForValidIteratorPrototype = createIteratorProxyPrototype(true);
var IteratorHelperPrototype = createIteratorProxyPrototype(false);

createNonEnumerableProperty(IteratorHelperPrototype, TO_STRING_TAG, 'Iterator Helper');

module.exports = function (nextHandler, IS_ITERATOR, RETURN_HANDLER_RESULT) {
  var IteratorProxy = function Iterator(record, state) {
    if (state) {
      state.iterator = record.iterator;
      state.next = record.next;
    } else state = record;
    state.type = IS_ITERATOR ? WRAP_FOR_VALID_ITERATOR : ITERATOR_HELPER;
    state.returnHandlerResult = !!RETURN_HANDLER_RESULT;
    state.nextHandler = nextHandler;
    state.counter = 0;
    state.done = false;
    setInternalState(this, state);
  };

  IteratorProxy.prototype = IS_ITERATOR ? WrapForValidIteratorPrototype : IteratorHelperPrototype;

  return IteratorProxy;
};

});

// EXTERNAL MODULE: ./node_modules/core-js/internals/iterator-helper-throws-on-invalid-iterator.js
var iterator_helper_throws_on_invalid_iterator_namespaceFn = () => {
	return __webpack_require__(65);
};

// EXTERNAL MODULE: ./node_modules/core-js/internals/iterator-helper-without-closing-on-early-error.js
var iterator_helper_without_closing_on_early_error_namespaceFn = () => {
	return __webpack_require__(61);
};

// MODULE: ./node_modules/core-js/internals/iterators-core.js
var iterators_core_namespaceFn = /*#__PURE__*/__webpack_require__.cw((module) => {

var fails = (fails_namespaceFn());
var isCallable = (is_callable_namespaceFn());
var isObject = (is_object_namespaceFn());
var create = (object_create_namespaceFn());
var getPrototypeOf = (object_get_prototype_of_namespaceFn());
var defineBuiltIn = (define_built_in_namespaceFn());
var wellKnownSymbol = (well_known_symbol_namespaceFn());
var IS_PURE = (is_pure_namespaceFn());

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = !isObject(IteratorPrototype) || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};
else if (IS_PURE) IteratorPrototype = create(IteratorPrototype);

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable(IteratorPrototype[ITERATOR])) {
  defineBuiltIn(IteratorPrototype, ITERATOR, function () {
    return this;
  });
}

module.exports = {
  H: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};

});

// EXTERNAL MODULE: ./node_modules/core-js/internals/length-of-array-like.js
var length_of_array_like_namespaceFn = () => {
	return __webpack_require__(25);
};

// EXTERNAL MODULE: ./node_modules/core-js/internals/map-helpers.js
var map_helpers_namespaceFn = () => {
	return __webpack_require__(118);
};

// EXTERNAL MODULE: ./node_modules/core-js/internals/native-raw-json.js
var native_raw_json_namespaceFn = () => {
	return __webpack_require__(108);
};

// EXTERNAL MODULE: ./node_modules/core-js/internals/object-create.js
var object_create_namespaceFn = () => {
	return __webpack_require__(43);
};

// MODULE: ./node_modules/core-js/internals/object-get-prototype-of.js
var object_get_prototype_of_namespaceFn = /*#__PURE__*/__webpack_require__.cw((module) => {

var hasOwn = (has_own_property_namespaceFn());
var isCallable = (is_callable_namespaceFn());
var toObject = (to_object_namespaceFn());
var sharedKey = (shared_key_namespaceFn());
var CORRECT_PROTOTYPE_GETTER = (correct_prototype_getter_namespaceFn());

var IE_PROTO = sharedKey('IE_PROTO');
var $Object = Object;
var ObjectPrototype = $Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
module.exports = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function (O) {
  var object = toObject(O);
  if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof $Object ? ObjectPrototype : null;
};

});

// EXTERNAL MODULE: ./node_modules/core-js/internals/parse-json-string.js
var parse_json_string_namespaceFn = () => {
	return __webpack_require__(67);
};

// EXTERNAL MODULE: ./node_modules/core-js/internals/set-difference.js
var set_difference_namespaceFn = () => {
	return __webpack_require__(109);
};

// EXTERNAL MODULE: ./node_modules/core-js/internals/set-intersection.js
var set_intersection_namespaceFn = () => {
	return __webpack_require__(111);
};

// EXTERNAL MODULE: ./node_modules/core-js/internals/set-is-disjoint-from.js
var set_is_disjoint_from_namespaceFn = () => {
	return __webpack_require__(112);
};

// EXTERNAL MODULE: ./node_modules/core-js/internals/set-is-subset-of.js
var set_is_subset_of_namespaceFn = () => {
	return __webpack_require__(113);
};

// EXTERNAL MODULE: ./node_modules/core-js/internals/set-is-superset-of.js
var set_is_superset_of_namespaceFn = () => {
	return __webpack_require__(114);
};

// EXTERNAL MODULE: ./node_modules/core-js/internals/set-method-accept-set-like.js
var set_method_accept_set_like_namespaceFn = () => {
	return __webpack_require__(60);
};

// EXTERNAL MODULE: ./node_modules/core-js/internals/set-method-get-keys-before-cloning-detection.js
var set_method_get_keys_before_cloning_detection_namespaceFn = () => {
	return __webpack_require__(68);
};

// EXTERNAL MODULE: ./node_modules/core-js/internals/set-symmetric-difference.js
var set_symmetric_difference_namespaceFn = () => {
	return __webpack_require__(115);
};

// EXTERNAL MODULE: ./node_modules/core-js/internals/set-union.js
var set_union_namespaceFn = () => {
	return __webpack_require__(116);
};

// EXTERNAL MODULE: ./node_modules/core-js/internals/shared-key.js
var shared_key_namespaceFn = () => {
	return __webpack_require__(36);
};

// EXTERNAL MODULE: ./node_modules/core-js/internals/symbol-constructor-detection.js
var symbol_constructor_detection_namespaceFn = () => {
	return __webpack_require__(24);
};

// EXTERNAL MODULE: ./node_modules/core-js/internals/this-number-value.js
var this_number_value_namespaceFn = () => {
	return __webpack_require__(107);
};

// EXTERNAL MODULE: ./node_modules/core-js/internals/to-object.js
var to_object_namespaceFn = () => {
	return __webpack_require__(44);
};

// EXTERNAL MODULE: ./node_modules/core-js/internals/to-string.js
var to_string_namespaceFn = () => {
	return __webpack_require__(66);
};

// EXTERNAL MODULE: ./node_modules/core-js/internals/uid.js
var uid_namespaceFn = () => {
	return __webpack_require__(33);
};

// EXTERNAL MODULE: ./node_modules/core-js/internals/well-known-symbol.js
var well_known_symbol_namespaceFn = () => {
	return __webpack_require__(10);
};

// MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push_namespaceFn = /*#__PURE__*/__webpack_require__.cw(() => {

var $ = (export_namespaceFn());
var toObject = (to_object_namespaceFn());
var lengthOfArrayLike = (length_of_array_like_namespaceFn());
var setArrayLength = (array_set_length_namespaceFn());
var doesNotExceedSafeInteger = (does_not_exceed_safe_integer_namespaceFn());
var fails = (fails_namespaceFn());

var INCORRECT_TO_LENGTH = fails(function () {
  return [].push.call({ length: 0x100000000 }, 1) !== 4294967297;
});

// V8 <= 121 and Safari <= 15.4; FF < 23 throws InternalError
// https://bugs.chromium.org/p/v8/issues/detail?id=12681
var properErrorOnNonWritableLength = function () {
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).push();
  } catch (error) {
    return error instanceof TypeError;
  }
};

var FORCED = INCORRECT_TO_LENGTH || !properErrorOnNonWritableLength();

// `Array.prototype.push` method
// https://tc39.es/ecma262/#sec-array.prototype.push
$({ target: 'Array', proto: true, arity: 1, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  push: function push(item) {
    var O = toObject(this);
    var len = lengthOfArrayLike(O);
    var argCount = arguments.length;
    doesNotExceedSafeInteger(len + argCount);
    for (var i = 0; i < argCount; i++) {
      O[len] = arguments[i];
      len++;
    }
    setArrayLength(O, len);
    return len;
  }
});

});

// MODULE: ./node_modules/core-js/modules/es.iterator.constructor.js
var es_iterator_constructor_namespaceFn = /*#__PURE__*/__webpack_require__.cw(() => {

var $ = (export_namespaceFn());
var globalThis = (global_this_namespaceFn());
var anInstance = (an_instance_namespaceFn());
var anObject = (an_object_namespaceFn());
var isCallable = (is_callable_namespaceFn());
var getPrototypeOf = (object_get_prototype_of_namespaceFn());
var defineBuiltInAccessor = (define_built_in_accessor_namespaceFn());
var createProperty = (create_property_namespaceFn());
var fails = (fails_namespaceFn());
var hasOwn = (has_own_property_namespaceFn());
var wellKnownSymbol = (well_known_symbol_namespaceFn());
var IteratorPrototype = (iterators_core_namespaceFn().H);
var DESCRIPTORS = (descriptors_namespaceFn());
var IS_PURE = (is_pure_namespaceFn());

var CONSTRUCTOR = 'constructor';
var ITERATOR = 'Iterator';
var TO_STRING_TAG = wellKnownSymbol('toStringTag');

var $TypeError = TypeError;
var NativeIterator = globalThis[ITERATOR];

// FF56- have non-standard global helper `Iterator`
var FORCED = IS_PURE
  || !isCallable(NativeIterator)
  || NativeIterator.prototype !== IteratorPrototype
  // FF44- non-standard `Iterator` passes previous tests
  || !fails(function () { NativeIterator({}); });

var IteratorConstructor = function Iterator() {
  anInstance(this, IteratorPrototype);
  if (getPrototypeOf(this) === IteratorPrototype) throw new $TypeError('Abstract class Iterator not directly constructable');
};

var defineIteratorPrototypeAccessor = function (key, value) {
  if (DESCRIPTORS) {
    defineBuiltInAccessor(IteratorPrototype, key, {
      configurable: true,
      get: function () {
        return value;
      },
      set: function (replacement) {
        anObject(this);
        if (this === IteratorPrototype) throw new $TypeError("You can't redefine this property");
        if (hasOwn(this, key)) this[key] = replacement;
        else createProperty(this, key, replacement);
      }
    });
  } else IteratorPrototype[key] = value;
};

if (!hasOwn(IteratorPrototype, TO_STRING_TAG)) defineIteratorPrototypeAccessor(TO_STRING_TAG, ITERATOR);

if (FORCED || !hasOwn(IteratorPrototype, CONSTRUCTOR) || IteratorPrototype[CONSTRUCTOR] === Object) {
  defineIteratorPrototypeAccessor(CONSTRUCTOR, IteratorConstructor);
}

IteratorConstructor.prototype = IteratorPrototype;

// `Iterator` constructor
// https://tc39.es/ecma262/#sec-iterator
$({ global: true, constructor: true, forced: FORCED }, {
  Iterator: IteratorConstructor
});

});

// MODULE: ./node_modules/core-js/modules/es.iterator.filter.js
var es_iterator_filter_namespaceFn = /*#__PURE__*/__webpack_require__.cw(() => {

var $ = (export_namespaceFn());
var call = (function_call_namespaceFn());
var aCallable = (a_callable_namespaceFn());
var anObject = (an_object_namespaceFn());
var getIteratorDirect = (get_iterator_direct_namespaceFn());
var createIteratorProxy = (iterator_create_proxy_namespaceFn());
var callWithSafeIterationClosing = (call_with_safe_iteration_closing_namespaceFn());
var IS_PURE = (is_pure_namespaceFn());
var iteratorClose = (iterator_close_namespaceFn());
var iteratorHelperThrowsOnInvalidIterator = (iterator_helper_throws_on_invalid_iterator_namespaceFn());
var iteratorHelperWithoutClosingOnEarlyError = (iterator_helper_without_closing_on_early_error_namespaceFn());

var FILTER_WITHOUT_THROWING_ON_INVALID_ITERATOR = !IS_PURE && !iteratorHelperThrowsOnInvalidIterator('filter', function () { /* empty */ });
var filterWithoutClosingOnEarlyError = !IS_PURE && !FILTER_WITHOUT_THROWING_ON_INVALID_ITERATOR
  && iteratorHelperWithoutClosingOnEarlyError('filter', TypeError);

var FORCED = IS_PURE || FILTER_WITHOUT_THROWING_ON_INVALID_ITERATOR || filterWithoutClosingOnEarlyError;

var IteratorProxy = createIteratorProxy(function () {
  var iterator = this.iterator;
  var predicate = this.predicate;
  var next = this.next;
  var result, done, value;
  while (true) {
    result = anObject(call(next, iterator));
    done = this.done = !!result.done;
    if (done) return;
    value = result.value;
    if (callWithSafeIterationClosing(iterator, predicate, [value, this.counter++], true)) return value;
  }
});

// `Iterator.prototype.filter` method
// https://tc39.es/ecma262/#sec-iterator.prototype.filter
$({ target: 'Iterator', proto: true, real: true, forced: FORCED }, {
  filter: function filter(predicate) {
    anObject(this);
    try {
      aCallable(predicate);
    } catch (error) {
      iteratorClose(this, 'throw', error);
    }

    if (filterWithoutClosingOnEarlyError) return call(filterWithoutClosingOnEarlyError, this, predicate);

    return new IteratorProxy(getIteratorDirect(this), {
      predicate: predicate
    });
  }
});

});

// MODULE: ./node_modules/core-js/modules/es.iterator.for-each.js
var es_iterator_for_each_namespaceFn = /*#__PURE__*/__webpack_require__.cw(() => {

var $ = (export_namespaceFn());
var call = (function_call_namespaceFn());
var iterate = (iterate_namespaceFn());
var aCallable = (a_callable_namespaceFn());
var anObject = (an_object_namespaceFn());
var getIteratorDirect = (get_iterator_direct_namespaceFn());
var iteratorClose = (iterator_close_namespaceFn());
var iteratorHelperWithoutClosingOnEarlyError = (iterator_helper_without_closing_on_early_error_namespaceFn());

var forEachWithoutClosingOnEarlyError = iteratorHelperWithoutClosingOnEarlyError('forEach', TypeError);

// `Iterator.prototype.forEach` method
// https://tc39.es/ecma262/#sec-iterator.prototype.foreach
$({ target: 'Iterator', proto: true, real: true, forced: forEachWithoutClosingOnEarlyError }, {
  forEach: function forEach(fn) {
    anObject(this);
    try {
      aCallable(fn);
    } catch (error) {
      iteratorClose(this, 'throw', error);
    }

    if (forEachWithoutClosingOnEarlyError) return call(forEachWithoutClosingOnEarlyError, this, fn);

    var record = getIteratorDirect(this);
    var counter = 0;
    iterate(record, function (value) {
      fn(value, counter++);
    }, { IS_RECORD: true });
  }
});

});

// MODULE: ./node_modules/core-js/modules/es.iterator.map.js
var es_iterator_map_namespaceFn = /*#__PURE__*/__webpack_require__.cw(() => {

var $ = (export_namespaceFn());
var call = (function_call_namespaceFn());
var aCallable = (a_callable_namespaceFn());
var anObject = (an_object_namespaceFn());
var getIteratorDirect = (get_iterator_direct_namespaceFn());
var createIteratorProxy = (iterator_create_proxy_namespaceFn());
var callWithSafeIterationClosing = (call_with_safe_iteration_closing_namespaceFn());
var iteratorClose = (iterator_close_namespaceFn());
var iteratorHelperThrowsOnInvalidIterator = (iterator_helper_throws_on_invalid_iterator_namespaceFn());
var iteratorHelperWithoutClosingOnEarlyError = (iterator_helper_without_closing_on_early_error_namespaceFn());
var IS_PURE = (is_pure_namespaceFn());

var MAP_WITHOUT_THROWING_ON_INVALID_ITERATOR = !IS_PURE && !iteratorHelperThrowsOnInvalidIterator('map', function () { /* empty */ });
var mapWithoutClosingOnEarlyError = !IS_PURE && !MAP_WITHOUT_THROWING_ON_INVALID_ITERATOR
  && iteratorHelperWithoutClosingOnEarlyError('map', TypeError);

var FORCED = IS_PURE || MAP_WITHOUT_THROWING_ON_INVALID_ITERATOR || mapWithoutClosingOnEarlyError;

var IteratorProxy = createIteratorProxy(function () {
  var iterator = this.iterator;
  var result = anObject(call(this.next, iterator));
  var done = this.done = !!result.done;
  if (!done) return callWithSafeIterationClosing(iterator, this.mapper, [result.value, this.counter++], true);
});

// `Iterator.prototype.map` method
// https://tc39.es/ecma262/#sec-iterator.prototype.map
$({ target: 'Iterator', proto: true, real: true, forced: FORCED }, {
  map: function map(mapper) {
    anObject(this);
    try {
      aCallable(mapper);
    } catch (error) {
      iteratorClose(this, 'throw', error);
    }

    if (mapWithoutClosingOnEarlyError) return call(mapWithoutClosingOnEarlyError, this, mapper);

    return new IteratorProxy(getIteratorDirect(this), {
      mapper: mapper
    });
  }
});

});

// MODULE: ./node_modules/core-js/modules/es.iterator.reduce.js
var es_iterator_reduce_namespaceFn = /*#__PURE__*/__webpack_require__.cw(() => {

var $ = (export_namespaceFn());
var iterate = (iterate_namespaceFn());
var aCallable = (a_callable_namespaceFn());
var anObject = (an_object_namespaceFn());
var getIteratorDirect = (get_iterator_direct_namespaceFn());
var iteratorClose = (iterator_close_namespaceFn());
var iteratorHelperWithoutClosingOnEarlyError = (iterator_helper_without_closing_on_early_error_namespaceFn());
var apply = (function_apply_namespaceFn());
var fails = (fails_namespaceFn());

var $TypeError = TypeError;

// https://bugs.webkit.org/show_bug.cgi?id=291651
var FAILS_ON_INITIAL_UNDEFINED = fails(function () {
  // eslint-disable-next-line es/no-iterator-prototype-reduce, es/no-array-prototype-keys, array-callback-return -- required for testing
  [].keys().reduce(function () { /* empty */ }, undefined);
});

var reduceWithoutClosingOnEarlyError = !FAILS_ON_INITIAL_UNDEFINED && iteratorHelperWithoutClosingOnEarlyError('reduce', $TypeError);

// `Iterator.prototype.reduce` method
// https://tc39.es/ecma262/#sec-iterator.prototype.reduce
$({ target: 'Iterator', proto: true, real: true, forced: FAILS_ON_INITIAL_UNDEFINED || reduceWithoutClosingOnEarlyError }, {
  reduce: function reduce(reducer /* , initialValue */) {
    anObject(this);
    try {
      aCallable(reducer);
    } catch (error) {
      iteratorClose(this, 'throw', error);
    }

    var noInitial = arguments.length < 2;
    var accumulator = noInitial ? undefined : arguments[1];
    if (reduceWithoutClosingOnEarlyError) {
      return apply(reduceWithoutClosingOnEarlyError, this, noInitial ? [reducer] : [reducer, accumulator]);
    }
    var record = getIteratorDirect(this);
    var counter = 0;
    iterate(record, function (value) {
      if (noInitial) {
        noInitial = false;
        accumulator = value;
      } else {
        accumulator = reducer(accumulator, value, counter);
      }
      counter++;
    }, { IS_RECORD: true });
    if (noInitial) throw new $TypeError('Reduce of empty iterator with no initial value');
    return accumulator;
  }
});

});

// MODULE: ./node_modules/core-js/modules/es.json.parse.js
var es_json_parse_namespaceFn = /*#__PURE__*/__webpack_require__.cw(() => {

var $ = (export_namespaceFn());
var DESCRIPTORS = (descriptors_namespaceFn());
var globalThis = (global_this_namespaceFn());
var getBuiltIn = (get_built_in_namespaceFn());
var uncurryThis = (function_uncurry_this_namespaceFn());
var call = (function_call_namespaceFn());
var isCallable = (is_callable_namespaceFn());
var isObject = (is_object_namespaceFn());
var isArray = (is_array_namespaceFn());
var hasOwn = (has_own_property_namespaceFn());
var toString = (to_string_namespaceFn());
var lengthOfArrayLike = (length_of_array_like_namespaceFn());
var createProperty = (create_property_namespaceFn());
var fails = (fails_namespaceFn());
var parseJSONString = (parse_json_string_namespaceFn());
var NATIVE_SYMBOL = (symbol_constructor_detection_namespaceFn());

var JSON = globalThis.JSON;
var Number = globalThis.Number;
var SyntaxError = globalThis.SyntaxError;
var nativeParse = JSON && JSON.parse;
var enumerableOwnProperties = getBuiltIn('Object', 'keys');
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var at = uncurryThis(''.charAt);
var slice = uncurryThis(''.slice);
var exec = uncurryThis(/./.exec);
var push = uncurryThis([].push);

var IS_DIGIT = /^\d$/;
var IS_NON_ZERO_DIGIT = /^[1-9]$/;
var IS_NUMBER_START = /^[\d-]$/;
var IS_WHITESPACE = /^[\t\n\r ]$/;

var PRIMITIVE = 0;
var OBJECT = 1;

var $parse = function (source, reviver) {
  source = toString(source);
  var context = new Context(source, 0);
  var root = context.parse();
  var value = root.value;
  var endIndex = context.skip(IS_WHITESPACE, root.end);
  if (endIndex < source.length) {
    throw new SyntaxError('Unexpected extra character: "' + at(source, endIndex) + '" after the parsed data at: ' + endIndex);
  }
  return isCallable(reviver) ? internalize({ '': value }, '', reviver, root) : value;
};

var internalize = function (holder, name, reviver, node) {
  var val = holder[name];
  var unmodified = node && val === node.value;
  var context = unmodified && typeof node.source == 'string' ? { source: node.source } : {};
  var elementRecordsLen, keys, len, i, P;
  if (isObject(val)) {
    var nodeIsArray = isArray(val);
    var nodes = unmodified ? node.nodes : nodeIsArray ? [] : {};
    if (nodeIsArray) {
      elementRecordsLen = nodes.length;
      len = lengthOfArrayLike(val);
      for (i = 0; i < len; i++) {
        internalizeProperty(val, i, internalize(val, '' + i, reviver, i < elementRecordsLen ? nodes[i] : undefined));
      }
    } else {
      keys = enumerableOwnProperties(val);
      len = lengthOfArrayLike(keys);
      for (i = 0; i < len; i++) {
        P = keys[i];
        internalizeProperty(val, P, internalize(val, P, reviver, hasOwn(nodes, P) ? nodes[P] : undefined));
      }
    }
  }
  return call(reviver, holder, name, val, context);
};

var internalizeProperty = function (object, key, value) {
  if (DESCRIPTORS) {
    var descriptor = getOwnPropertyDescriptor(object, key);
    if (descriptor && !descriptor.configurable) return;
  }
  if (value === undefined) delete object[key];
  else createProperty(object, key, value);
};

var Node = function (value, end, source, nodes) {
  this.value = value;
  this.end = end;
  this.source = source;
  this.nodes = nodes;
};

var Context = function (source, index) {
  this.source = source;
  this.index = index;
};

// https://www.json.org/json-en.html
Context.prototype = {
  fork: function (nextIndex) {
    return new Context(this.source, nextIndex);
  },
  parse: function () {
    var source = this.source;
    var i = this.skip(IS_WHITESPACE, this.index);
    var fork = this.fork(i);
    var chr = at(source, i);
    if (exec(IS_NUMBER_START, chr)) return fork.number();
    switch (chr) {
      case '{':
        return fork.object();
      case '[':
        return fork.array();
      case '"':
        return fork.string();
      case 't':
        return fork.keyword(true);
      case 'f':
        return fork.keyword(false);
      case 'n':
        return fork.keyword(null);
    } throw new SyntaxError('Unexpected character: "' + chr + '" at: ' + i);
  },
  node: function (type, value, start, end, nodes) {
    return new Node(value, end, type ? null : slice(this.source, start, end), nodes);
  },
  object: function () {
    var source = this.source;
    var i = this.index + 1;
    var expectKeypair = false;
    var object = {};
    var nodes = {};
    var closed = false;
    while (i < source.length) {
      i = this.until(['"', '}'], i);
      if (at(source, i) === '}' && !expectKeypair) {
        i++;
        closed = true;
        break;
      }
      // Parsing the key
      var result = this.fork(i).string();
      var key = result.value;
      i = result.end;
      i = this.until([':'], i) + 1;
      // Parsing value
      i = this.skip(IS_WHITESPACE, i);
      result = this.fork(i).parse();
      createProperty(nodes, key, result);
      createProperty(object, key, result.value);
      i = this.until([',', '}'], result.end);
      var chr = at(source, i);
      if (chr === ',') {
        expectKeypair = true;
        i++;
      } else if (chr === '}') {
        i++;
        closed = true;
        break;
      }
    }
    if (!closed) throw new SyntaxError('Unterminated object at: ' + i);
    return this.node(OBJECT, object, this.index, i, nodes);
  },
  array: function () {
    var source = this.source;
    var i = this.index + 1;
    var expectElement = false;
    var array = [];
    var nodes = [];
    var closed = false;
    while (i < source.length) {
      i = this.skip(IS_WHITESPACE, i);
      if (at(source, i) === ']' && !expectElement) {
        i++;
        closed = true;
        break;
      }
      var result = this.fork(i).parse();
      push(nodes, result);
      push(array, result.value);
      i = this.until([',', ']'], result.end);
      if (at(source, i) === ',') {
        expectElement = true;
        i++;
      } else if (at(source, i) === ']') {
        i++;
        closed = true;
        break;
      }
    }
    if (!closed) throw new SyntaxError('Unterminated array at: ' + i);
    return this.node(OBJECT, array, this.index, i, nodes);
  },
  string: function () {
    var index = this.index;
    var parsed = parseJSONString(this.source, this.index + 1);
    return this.node(PRIMITIVE, parsed.value, index, parsed.end);
  },
  number: function () {
    var source = this.source;
    var startIndex = this.index;
    var i = startIndex;
    if (at(source, i) === '-') i++;
    if (at(source, i) === '0') i++;
    else if (exec(IS_NON_ZERO_DIGIT, at(source, i))) i = this.skip(IS_DIGIT, i + 1);
    else throw new SyntaxError('Failed to parse number at: ' + i);
    if (at(source, i) === '.') {
      var fractionStartIndex = i + 1;
      i = this.skip(IS_DIGIT, fractionStartIndex);
      if (fractionStartIndex === i) throw new SyntaxError("Failed to parse number's fraction at: " + i);
    }
    if (at(source, i) === 'e' || at(source, i) === 'E') {
      i++;
      if (at(source, i) === '+' || at(source, i) === '-') i++;
      var exponentStartIndex = i;
      i = this.skip(IS_DIGIT, i);
      if (exponentStartIndex === i) throw new SyntaxError("Failed to parse number's exponent value at: " + i);
    }
    return this.node(PRIMITIVE, Number(slice(source, startIndex, i)), startIndex, i);
  },
  keyword: function (value) {
    var keyword = '' + value;
    var index = this.index;
    var endIndex = index + keyword.length;
    if (slice(this.source, index, endIndex) !== keyword) throw new SyntaxError('Failed to parse value at: ' + index);
    return this.node(PRIMITIVE, value, index, endIndex);
  },
  skip: function (regex, i) {
    var source = this.source;
    for (; i < source.length; i++) if (!exec(regex, at(source, i))) break;
    return i;
  },
  until: function (array, i) {
    i = this.skip(IS_WHITESPACE, i);
    var chr = at(this.source, i);
    for (var j = 0; j < array.length; j++) if (array[j] === chr) return i;
    throw new SyntaxError('Unexpected character: "' + chr + '" at: ' + i);
  }
};

var NO_SOURCE_SUPPORT = fails(function () {
  var unsafeInt = '9007199254740993';
  var source;
  nativeParse(unsafeInt, function (key, value, context) {
    source = context.source;
  });
  return source !== unsafeInt;
});

var PROPER_BASE_PARSE = NATIVE_SYMBOL && !fails(function () {
  // Safari 9 bug
  return 1 / nativeParse('-0 \t') !== -Infinity;
});

// `JSON.parse` method
// https://tc39.es/ecma262/#sec-json.parse
// https://github.com/tc39/proposal-json-parse-with-source
$({ target: 'JSON', stat: true, forced: NO_SOURCE_SUPPORT }, {
  parse: function parse(text, reviver) {
    return PROPER_BASE_PARSE && !isCallable(reviver) ? nativeParse(text) : $parse(text, reviver);
  }
});

});

// MODULE: ./node_modules/core-js/modules/es.json.stringify.js
var es_json_stringify_namespaceFn = /*#__PURE__*/__webpack_require__.cw(() => {

var $ = (export_namespaceFn());
var getBuiltIn = (get_built_in_namespaceFn());
var call = (function_call_namespaceFn());
var uncurryThis = (function_uncurry_this_namespaceFn());
var fails = (fails_namespaceFn());
var isArray = (is_array_namespaceFn());
var isCallable = (is_callable_namespaceFn());
var isObject = (is_object_namespaceFn());
var create = (object_create_namespaceFn());
var isRawJSON = (is_raw_json_namespaceFn());
var isSymbol = (is_symbol_namespaceFn());
var classof = (classof_raw_namespaceFn());
var thisNumberValue = (this_number_value_namespaceFn());
var includes = (array_includes_namespaceFn()/* includes */.m);
var hasOwn = (has_own_property_namespaceFn());
var toString = (to_string_namespaceFn());
var parseJSONString = (parse_json_string_namespaceFn());
var uid = (uid_namespaceFn());
var NATIVE_SYMBOL = (symbol_constructor_detection_namespaceFn());
var NATIVE_RAW_JSON = (native_raw_json_namespaceFn());

var $String = String;
var $TypeError = TypeError;
var $stringify = getBuiltIn('JSON', 'stringify');
var $BigInt = getBuiltIn('BigInt');
var stringValueOf = uncurryThis(''.valueOf);
var booleanValueOf = uncurryThis(true.valueOf);
var bigIntValueOf = $BigInt && uncurryThis($BigInt.prototype.valueOf);
var exec = uncurryThis(/./.exec);
var charAt = uncurryThis(''.charAt);
var charCodeAt = uncurryThis(''.charCodeAt);
var replace = uncurryThis(''.replace);
var slice = uncurryThis(''.slice);
var push = uncurryThis([].push);
var pop = uncurryThis([].pop);
var numberToString = uncurryThis(1.1.toString);

var surrogates = /[\uD800-\uDFFF]/g;
var leadingSurrogates = /^[\uD800-\uDBFF]$/;
var trailingSurrogates = /^[\uDC00-\uDFFF]$/;
var digits = /^\d+$/;

// a placeholder of a raw JSON value
var RAW_MARK = uid();
// a prefix of keys of a reordered object, see `createOrderedObject`
var KEY_MARK = uid();
// the last key of a reordered object, marks the end of its serialization
var END_MARK = uid();
var RAW_MARK_LENGTH = RAW_MARK.length;
var KEY_MARK_LENGTH = KEY_MARK.length;

var WRONG_SYMBOLS_CONVERSION = !NATIVE_SYMBOL || fails(function () {
  var symbol = getBuiltIn('Symbol')('stringify detection');
  // MS Edge converts symbol values to JSON as {}
  return $stringify([symbol]) !== '[null]'
    // WebKit converts symbol values to JSON as null
    || $stringify({ a: symbol }) !== '{}'
    // V8 throws on boxed symbols
    || $stringify(Object(symbol)) !== '{}';
});

// https://github.com/tc39/proposal-well-formed-stringify
var ILL_FORMED_UNICODE = fails(function () {
  return $stringify('\uDF06\uD834') !== '"\\udf06\\ud834"'
    || $stringify('\uDEAD') !== '"\\udead"';
});

var isRawJSONValue = NATIVE_RAW_JSON ? getBuiltIn('JSON', 'isRawJSON') : isRawJSON;

var stringifyWithProperSymbolsConversion = WRONG_SYMBOLS_CONVERSION ? function (it, replacer, space) {
  return $stringify(it, function (key, value) {
    var replaced = call(replacer, this, key, value);
    if (!isSymbol(replaced)) return replaced;
  }, space);
} : $stringify;

var fixIllFormedJSON = function (match, offset, string) {
  var prev = charAt(string, offset - 1);
  var next = charAt(string, offset + 1);
  if (
    (exec(leadingSurrogates, match) && !exec(trailingSurrogates, next)) ||
    (exec(trailingSurrogates, match) && !exec(leadingSurrogates, prev))
  ) {
    return '\\u' + numberToString(charCodeAt(match, 0), 16);
  } return match;
};

// `PropertyList` of `JSON.stringify`
// https://tc39.es/ecma262/#sec-json.stringify
var getPropertyList = function (replacer) {
  if (!isArray(replacer)) return;
  var rawLength = replacer.length;
  var propertyList = [];
  // a null prototype object is used as a set of already added keys to keep the deduplication linear
  var addedKeys = create(null);
  for (var i = 0; i < rawLength; i++) {
    var element = replacer[i];
    var key;
    if (typeof element == 'string') key = element;
    else if (typeof element == 'number' || classof(element) === 'Number' || classof(element) === 'String') key = toString(element);
    else continue;
    if (!hasOwn(addedKeys, key)) {
      addedKeys[key] = true;
      push(propertyList, key);
    }
  }
  return propertyList;
};

// values with such an internal slot are unwrapped by `SerializeJSONProperty` instead of being serialized as objects
var hasInternalSlot = function (valueOf, it) {
  try {
    valueOf(it);
    return true;
  } catch (error) {
    return false;
  }
};

// the slot check is expensive, so it's performed only for the kind reported by the value itself -
// a value lying about its kind via `Symbol.toStringTag` is serialized as an ordinary object
var isBoxedPrimitive = function (it) {
  var kind = classof(it);
  return (kind === 'Number' && hasInternalSlot(thisNumberValue, it))
    || (kind === 'String' && hasInternalSlot(stringValueOf, it))
    || (kind === 'Boolean' && hasInternalSlot(booleanValueOf, it))
    || (!!bigIntValueOf && kind === 'BigInt' && hasInternalSlot(bigIntValueOf, it));
};

// only objects serialized by `SerializeJSONObject` are affected by the property list
var isSerializedAsObject = function (it) {
  if (!isObject(it) || isCallable(it) || isArray(it)) return false;
  try {
    return !isBoxedPrimitive(it);
  // `classof` reads `Symbol.toStringTag`, so a proxy could throw - it has no internal slots anyway
  } catch (error) {
    return true;
  }
};

// the engine unwraps it in the same order as it would read the original property,
// so the property is read lazily and `toJSON` is called once and with the original key
var createElementHolder = function (holder, key) {
  return {
    toJSON: function () {
      var element = holder[key];
      if (isObject(element) || typeof element == 'bigint') {
        var elementToJSON = element.toJSON;
        if (isCallable(elementToJSON)) element = call(elementToJSON, element, key);
      } return element;
    }
  };
};

// own keys of objects are sorted - integer-like keys are moved to the beginning,
// so such keys should be marked and restored in the serialized string
var getKeyPrefix = function (propertyList) {
  for (var i = 0, length = propertyList.length; i < length; i++) {
    if (exec(digits, propertyList[i])) return KEY_MARK;
  } return '';
};

// `SerializeJSONObject` iterates the property list, so the value is replaced with an object with keys in this order
var createOrderedObject = function (value, propertyList, keyPrefix) {
  // keys are not marked if the property list has no integer-like keys, so `Object.prototype`
  // with a setter, a non-writable property or `__proto__` should not intercept the assignment
  var ordered = create(null);
  for (var i = 0, length = propertyList.length; i < length; i++) {
    var key = propertyList[i];
    ordered[keyPrefix + key] = createElementHolder(value, key);
  }
  ordered[END_MARK] = null;
  return ordered;
};

// `JSON.stringify` method
// https://tc39.es/ecma262/#sec-json.stringify
// https://github.com/tc39/proposal-json-parse-with-source
if ($stringify) $({ target: 'JSON', stat: true, arity: 3, forced: WRONG_SYMBOLS_CONVERSION || ILL_FORMED_UNICODE || !NATIVE_RAW_JSON }, {
  stringify: function stringify(text, replacer, space) {
    var replacerFunction = isCallable(replacer) ? replacer : undefined;
    var propertyList = replacerFunction ? undefined : getPropertyList(replacer);
    var keyPrefix = propertyList && getKeyPrefix(propertyList);
    var rawStrings = [];
    var openObjects = [];
    var parentOrdered = [];
    var currentOrdered;
    var marked = false;
    var root = true;

    var json = stringifyWithProperSymbolsConversion(text, function (key, value) {
      // some old implementations (like WebKit) could pass numbers as keys
      key = $String(key);

      if (propertyList) {
        if (key === END_MARK) {
          pop(openObjects);
          currentOrdered = pop(parentOrdered);
          return;
        }
        if (root) root = false;
        // the innermost reordered object already contains only keys of the property list and arrays are not
        // affected by it, the rest of objects (like objects with a fake `Symbol.toStringTag`) are filtered here
        else if (this !== currentOrdered && !isArray(this) && !includes(propertyList, key)) return;
      } else if (replacerFunction) value = call(replacerFunction, this, key, value);

      if (isRawJSONValue(value)) {
        if (NATIVE_RAW_JSON) return value;
        marked = true;
        return RAW_MARK + (push(rawStrings, value.rawJSON) - 1);
      }

      if (propertyList && isSerializedAsObject(value)) {
        // reordered objects are new each time, so cycles should be detected before the engine does it
        if (includes(openObjects, value)) throw new $TypeError('Converting circular structure to JSON');
        var ordered = createOrderedObject(value, propertyList, keyPrefix);
        push(openObjects, value);
        push(parentOrdered, currentOrdered);
        currentOrdered = ordered;
        if (keyPrefix) marked = true;
        return ordered;
      }

      return value;
    }, space);

    if (typeof json != 'string') return json;

    if (ILL_FORMED_UNICODE) json = replace(json, surrogates, fixIllFormedJSON);

    if (!marked) return json;

    var result = '';
    var length = json.length;

    for (var i = 0; i < length; i++) {
      var chr = charAt(json, i);
      if (chr === '"') {
        var end = parseJSONString(json, ++i).end - 1;
        var string = slice(json, i, end);
        if (slice(string, 0, RAW_MARK_LENGTH) === RAW_MARK) result += rawStrings[slice(string, RAW_MARK_LENGTH)];
        else if (slice(string, 0, KEY_MARK_LENGTH) === KEY_MARK) result += '"' + slice(string, KEY_MARK_LENGTH) + '"';
        else result += '"' + string + '"';
        i = end;
      } else result += chr;
    }

    return result;
  }
});

});

// MODULE: ./node_modules/core-js/modules/es.map.get-or-insert-computed.js
var es_map_get_or_insert_computed_namespaceFn = /*#__PURE__*/__webpack_require__.cw(() => {

var $ = (export_namespaceFn());
var aCallable = (a_callable_namespaceFn());
var MapHelpers = (map_helpers_namespaceFn());
var IS_PURE = (is_pure_namespaceFn());

var get = MapHelpers.get;
var has = MapHelpers.has;
var set = MapHelpers.set;

// `Map.prototype.getOrInsertComputed` method
// https://tc39.es/ecma262/#sec-map.prototype.getorinsertcomputed
$({ target: 'Map', proto: true, real: true, forced: IS_PURE }, {
  getOrInsertComputed: function getOrInsertComputed(key, callbackfn) {
    var hasKey = has(this, key);
    aCallable(callbackfn);
    if (hasKey) return get(this, key);
    // CanonicalizeKeyedCollectionKey
    if (key === 0 && 1 / key === -Infinity) key = 0;
    var value = callbackfn(key);
    set(this, key, value);
    return value;
  }
});

});

// MODULE: ./node_modules/core-js/modules/es.map.get-or-insert.js
var es_map_get_or_insert_namespaceFn = /*#__PURE__*/__webpack_require__.cw(() => {

var $ = (export_namespaceFn());
var MapHelpers = (map_helpers_namespaceFn());
var IS_PURE = (is_pure_namespaceFn());

var get = MapHelpers.get;
var has = MapHelpers.has;
var set = MapHelpers.set;

// `Map.prototype.getOrInsert` method
// https://tc39.es/ecma262/#sec-map.prototype.getorinsert
$({ target: 'Map', proto: true, real: true, forced: IS_PURE }, {
  getOrInsert: function getOrInsert(key, value) {
    if (has(this, key)) return get(this, key);
    set(this, key, value);
    return value;
  }
});

});

// MODULE: ./node_modules/core-js/modules/es.set.difference.v2.js
var es_set_difference_v2_namespaceFn = /*#__PURE__*/__webpack_require__.cw(() => {

var $ = (export_namespaceFn());
var difference = (set_difference_namespaceFn());
var fails = (fails_namespaceFn());
var setMethodAcceptSetLike = (set_method_accept_set_like_namespaceFn());

var SET_LIKE_INCORRECT_BEHAVIOR = !setMethodAcceptSetLike('difference', function (result) {
  return result.size === 0;
});

var FORCED = SET_LIKE_INCORRECT_BEHAVIOR || fails(function () {
  // https://bugs.webkit.org/show_bug.cgi?id=288595
  var setLike = {
    size: 1,
    has: function () { return true; },
    keys: function () {
      var index = 0;
      return {
        next: function () {
          var done = index++ > 1;
          if (baseSet.has(1)) baseSet.clear();
          return { done: done, value: 2 };
        }
      };
    }
  };
  // eslint-disable-next-line es/no-set -- testing
  var baseSet = new Set([1, 2, 3, 4]);
  // eslint-disable-next-line es/no-set-prototype-difference -- testing
  return baseSet.difference(setLike).size !== 3;
});

// `Set.prototype.difference` method
// https://tc39.es/ecma262/#sec-set.prototype.difference
$({ target: 'Set', proto: true, real: true, forced: FORCED }, {
  difference: difference
});

});

// MODULE: ./node_modules/core-js/modules/es.set.intersection.v2.js
var es_set_intersection_v2_namespaceFn = /*#__PURE__*/__webpack_require__.cw(() => {

var $ = (export_namespaceFn());
var fails = (fails_namespaceFn());
var intersection = (set_intersection_namespaceFn());
var setMethodAcceptSetLike = (set_method_accept_set_like_namespaceFn());

var INCORRECT = !setMethodAcceptSetLike('intersection', function (result) {
  return result.size === 2 && result.has(1) && result.has(2);
}) || fails(function () {
  // eslint-disable-next-line es/no-array-from, es/no-set, es/no-set-prototype-intersection -- testing
  return String(Array.from(new Set([1, 2, 3]).intersection(new Set([3, 2])))) !== '3,2';
});

// `Set.prototype.intersection` method
// https://tc39.es/ecma262/#sec-set.prototype.intersection
$({ target: 'Set', proto: true, real: true, forced: INCORRECT }, {
  intersection: intersection
});

});

// MODULE: ./node_modules/core-js/modules/es.set.is-disjoint-from.v2.js
var es_set_is_disjoint_from_v2_namespaceFn = /*#__PURE__*/__webpack_require__.cw(() => {

var $ = (export_namespaceFn());
var isDisjointFrom = (set_is_disjoint_from_namespaceFn());
var setMethodAcceptSetLike = (set_method_accept_set_like_namespaceFn());

var INCORRECT = !setMethodAcceptSetLike('isDisjointFrom', function (result) {
  return !result;
});

// `Set.prototype.isDisjointFrom` method
// https://tc39.es/ecma262/#sec-set.prototype.isdisjointfrom
$({ target: 'Set', proto: true, real: true, forced: INCORRECT }, {
  isDisjointFrom: isDisjointFrom
});

});

// MODULE: ./node_modules/core-js/modules/es.set.is-subset-of.v2.js
var es_set_is_subset_of_v2_namespaceFn = /*#__PURE__*/__webpack_require__.cw(() => {

var $ = (export_namespaceFn());
var isSubsetOf = (set_is_subset_of_namespaceFn());
var setMethodAcceptSetLike = (set_method_accept_set_like_namespaceFn());

var INCORRECT = !setMethodAcceptSetLike('isSubsetOf', function (result) {
  return result;
});

// `Set.prototype.isSubsetOf` method
// https://tc39.es/ecma262/#sec-set.prototype.issubsetof
$({ target: 'Set', proto: true, real: true, forced: INCORRECT }, {
  isSubsetOf: isSubsetOf
});

});

// MODULE: ./node_modules/core-js/modules/es.set.is-superset-of.v2.js
var es_set_is_superset_of_v2_namespaceFn = /*#__PURE__*/__webpack_require__.cw(() => {

var $ = (export_namespaceFn());
var isSupersetOf = (set_is_superset_of_namespaceFn());
var setMethodAcceptSetLike = (set_method_accept_set_like_namespaceFn());

var INCORRECT = !setMethodAcceptSetLike('isSupersetOf', function (result) {
  return !result;
});

// `Set.prototype.isSupersetOf` method
// https://tc39.es/ecma262/#sec-set.prototype.issupersetof
$({ target: 'Set', proto: true, real: true, forced: INCORRECT }, {
  isSupersetOf: isSupersetOf
});

});

// MODULE: ./node_modules/core-js/modules/es.set.symmetric-difference.v2.js
var es_set_symmetric_difference_v2_namespaceFn = /*#__PURE__*/__webpack_require__.cw(() => {

var $ = (export_namespaceFn());
var symmetricDifference = (set_symmetric_difference_namespaceFn());
var setMethodGetKeysBeforeCloning = (set_method_get_keys_before_cloning_detection_namespaceFn());
var setMethodAcceptSetLike = (set_method_accept_set_like_namespaceFn());

var FORCED = !setMethodAcceptSetLike('symmetricDifference') || !setMethodGetKeysBeforeCloning('symmetricDifference');

// `Set.prototype.symmetricDifference` method
// https://tc39.es/ecma262/#sec-set.prototype.symmetricdifference
$({ target: 'Set', proto: true, real: true, forced: FORCED }, {
  symmetricDifference: symmetricDifference
});

});

// MODULE: ./node_modules/core-js/modules/es.set.union.v2.js
var es_set_union_v2_namespaceFn = /*#__PURE__*/__webpack_require__.cw(() => {

var $ = (export_namespaceFn());
var union = (set_union_namespaceFn());
var setMethodGetKeysBeforeCloning = (set_method_get_keys_before_cloning_detection_namespaceFn());
var setMethodAcceptSetLike = (set_method_accept_set_like_namespaceFn());

var FORCED = !setMethodAcceptSetLike('union') || !setMethodGetKeysBeforeCloning('union');

// `Set.prototype.union` method
// https://tc39.es/ecma262/#sec-set.prototype.union
$({ target: 'Set', proto: true, real: true, forced: FORCED }, {
  union: union
});

});

;// ./node_modules/core-js/modules/es.iterator.for-each.js
es_iterator_for_each_namespaceFn();

;// ./node_modules/core-js/modules/es.iterator.reduce.js
es_iterator_reduce_namespaceFn();

;// ./node_modules/core-js/modules/es.array.push.js
es_array_push_namespaceFn();

;// ./node_modules/core-js/modules/es.iterator.constructor.js
es_iterator_constructor_namespaceFn();

;// ./node_modules/core-js/modules/es.iterator.map.js
es_iterator_map_namespaceFn();

// EXTERNAL MODULE: ./node_modules/clientnode/dist/index.js
var dist = /*#__PURE__*/__webpack_require__(127);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(99);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = /*#__PURE__*/__webpack_require__(117);
;// ./node_modules/clientnode/dist/property-types.js
if(typeof property_types_window==='undefined'||property_types_window===null)var property_types_window=(typeof globalThis==='undefined'||globalThis===null)?{}:globalThis;


;// external "core-js/modules/es.array.includes.js"

;// external "prop-types"

;// ./src/property-types.ts
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module propertTypes *//* !
    region header
    [Project page](https://tsickert.com/react-material-input)

    Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/// region imports
function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)};function _defineProperties(r,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,_toPropertyKey(i.key),i)}}function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function _classCallCheck(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}function _inherits(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),r&&_setPrototypeOf(t,r)}function _callSuper(e,c,p){return c=_getPrototypeOf(c),_possibleConstructorReturn(e,_isNativeReflectConstruct()?Reflect.construct(c,p||[],_getPrototypeOf(e).constructor):c.apply(e,p))}function _possibleConstructorReturn(t,e){if(e&&("object"==_typeof(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _wrapNativeSuper(p){var n="function"==typeof Map?new Map:void 0;return _wrapNativeSuper=function _wrapNativeSuper(p){if(null===p||!_isNativeFunction(p))return p;if("function"!=typeof p)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(p))return n.get(p);n.set(p,Wrapper)}function Wrapper(){return _construct(p,arguments,_getPrototypeOf(this).constructor)}return Wrapper.prototype=Object.create(p.prototype,{constructor:{value:Wrapper,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(Wrapper,p)},_wrapNativeSuper(p)}function _construct(e,o,p){if(_isNativeReflectConstruct())return Reflect.construct.apply(null,arguments);var n=[null];n.push.apply(n,o);var l=new(e.bind.apply(e,n));return p&&_setPrototypeOf(l,p.prototype),l}function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}function _isNativeFunction(t){try{return-1!==Function.toString.call(t).indexOf("[native code]")}catch(n){return"function"==typeof t}}function _setPrototypeOf(t,e){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},_setPrototypeOf(t,e)}function _getPrototypeOf(t){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},_getPrototypeOf(t)}function _defineProperty(r,t,o){return(t=_toPropertyKey(t))in r?Object.defineProperty(r,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[t]=o,r}function _toPropertyKey(r){var o=_toPrimitive(r,"string");return"symbol"==_typeof(o)?o:o+""}function _toPrimitive(t,e){if("object"!=_typeof(t)||!t)return t;var r;if("undefined"!=typeof Symbol&&void 0!==(r=t[Symbol.toPrimitive])){var i=r.call(t,e||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)};// endregion
var NullSymbol=Symbol("clientnodePropertyTypesNull");var UndefinedSymbol=Symbol("clientnodePropertyTypesUndefined");var RealTypes={any:prop_types.any,array:prop_types.array,arrayOf:prop_types.arrayOf,bool:prop_types.bool,boolean:prop_types.bool,element:prop_types.element,elementType:prop_types.elementType,exact:prop_types.exact,func:prop_types.func,instanceOf:prop_types.instanceOf,node:prop_types.node,number:prop_types.number,object:prop_types.object,objectOf:prop_types.objectOf,oneOf:prop_types.oneOf,oneOfType:prop_types.oneOfType,shape:prop_types.shape,string:prop_types.string,symbol:prop_types.symbol};var createDummy=function createDummy(result){if(result===void 0){result=null}var type=function type(){return result};type.isRequired=function(){return null};return type};/**
 * Dummy validation class.
 * @property message - Holds error message as string.
 */var ValidationError=/*#__PURE__*/function(_Function){/**
     * Initializes dummy validation error instance.
     */function ValidationError(){var _this;_classCallCheck(this,ValidationError);_this=_callSuper(this,ValidationError,["return null"]);_defineProperty(_this,"message","DummyErrorMessage");return _this}_inherits(ValidationError,_Function);return _createClass(ValidationError)}(/*#__PURE__*/_wrapNativeSuper(Function));/*
    NOTE: Each value has to be different (a real copy) to distinguish them from
    each other during runtime property reflections.
    Strict equality checks between different values have to be negative.
*/var DummyTypes={any:createDummy(),array:createDummy(),arrayOf:createDummy(new ValidationError),bool:createDummy(),boolean:createDummy(),element:createDummy(),elementType:createDummy(new ValidationError),exact:createDummy(),func:createDummy(),instanceOf:createDummy(new ValidationError),node:createDummy(),number:createDummy(),object:createDummy(),objectOf:createDummy(new ValidationError),oneOf:createDummy(new ValidationError),oneOfType:createDummy(new ValidationError),shape:createDummy(new ValidationError),string:createDummy(),symbol:createDummy()};var PropertyTypes=["debug","dev","development"].includes(("production"||0).trim().toLowerCase())?RealTypes:DummyTypes;var any=PropertyTypes.any;var property_types_array=PropertyTypes.array;var arrayOf=PropertyTypes.arrayOf;var bool=PropertyTypes.bool;var property_types_boolean=PropertyTypes.bool;var property_types_element=PropertyTypes.element;var elementType=PropertyTypes.elementType;var exact=PropertyTypes.exact;var func=PropertyTypes.func;var instanceOf=PropertyTypes.instanceOf;var property_types_node=PropertyTypes.node;var property_types_number=PropertyTypes.number;var property_types_object=PropertyTypes.object;var objectOf=PropertyTypes.objectOf;var oneOf=PropertyTypes.oneOf;var oneOfType=PropertyTypes.oneOfType;var shape=PropertyTypes.shape;var property_types_string=PropertyTypes.string;var property_types_symbol=PropertyTypes.symbol;/* harmony default export */ var property_types = ((/* unused pure expression or super */ null && (PropertyTypes)));


;// ./node_modules/core-js/modules/es.map.get-or-insert-computed.js
es_map_get_or_insert_computed_namespaceFn();

;// ./node_modules/core-js/modules/es.map.get-or-insert.js
es_map_get_or_insert_namespaceFn();

;// ./node_modules/web-component-wrapper/dist/decorator.js
if(typeof decorator_window==='undefined'||decorator_window===null)var decorator_window=(typeof globalThis==='undefined'||globalThis===null)?{}:globalThis;




/******/ var decorator_webpack_modules_ = ([
/* 0 */
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_806__) => {

const x = (y) => {
	const x = {}; __nested_webpack_require_806__.d(x, y); return x
} 
const y = (x) => (() => (x))
module.exports = x({ ["camelCaseToDelimited"]: () => (dist/* camelCaseToDelimited */.h1R), ["copy"]: () => (dist/* copy */.Cal) });

/***/ }),
/* 1 */
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_1180__) => {

const x = (y) => {
	const x = {}; __nested_webpack_require_1180__.d(x, y); return x
} 
const y = (x) => (() => (x))
module.exports = x({  });

/***/ }),
/* 2 */
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_1398__) => {

const x = (y) => {
	const x = {}; __nested_webpack_require_1398__.d(x, y); return x
} 
const y = (x) => (() => (x))
module.exports = x({  });

/***/ }),
/* 3 */,
/* 4 */
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_1625__) => {

const x = (y) => {
	const x = {}; __nested_webpack_require_1625__.d(x, y); return x
} 
const y = (x) => (() => (x))
module.exports = x({  });

/***/ }),
/* 5 */
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_1843__) => {

const x = (y) => {
	const x = {}; __nested_webpack_require_1843__.d(x, y); return x
} 
const y = (x) => (() => (x))
module.exports = x({ ["string"]: () => (property_types_string) });

/***/ })
/******/ ]);
/************************************************************************/
/******/ // The module cache
/******/ const decorator_webpack_module_cache_ = {};
/******/ 
/******/ // The require function
/******/ function __nested_webpack_require_2314__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	const cachedModule = decorator_webpack_module_cache_[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	const module = decorator_webpack_module_cache_[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	decorator_webpack_modules_[moduleId](module, module.exports, __nested_webpack_require_2314__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ // define getter/value functions for harmony exports
/******/ __nested_webpack_require_2314__.d = (exports, definition) => {
/******/ 	for(var key in definition) {
/******/ 		if(__nested_webpack_require_2314__.o(definition, key) && !__nested_webpack_require_2314__.o(exports, key)) {
/******/ 			Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 		}
/******/ 	}
/******/ };
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ __nested_webpack_require_2314__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 
/************************************************************************/
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_2314__(4);
/* harmony import */ var core_js_modules_es_map_get_or_insert_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_2314__(1);
/* harmony import */ var core_js_modules_es_map_get_or_insert_computed_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_2314__(2);
/* harmony import */ var clientnode__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_2314__(0);
/* harmony import */ var clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_2314__(5);
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module decorator *//* !
    region header
    [Project page](https://tsickert.com/web-component-wrapper)

    Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 4.0 international license.
    See https://creativecommons.org/licenses/by/4.0/deed.de
    endregion
*/// region imports
// endregion
/*
    NOTE: Every class owns these members, so they do not indicate an existing
    static configuration.
*/const INTRINSIC_CLASS_MEMBER_NAMES=["length","name","prototype"];/**
 * Checks if given class defines an own static member with given name.
 * @param self - Class to check.
 * @param name - Member name to check.
 * @returns A boolean indicating whether given member exists.
 */const hasOwnStaticMember=(self,name)=>Object.prototype.hasOwnProperty.call(self,name)&&!INTRINSIC_CLASS_MEMBER_NAMES.includes(name);/**
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
 */function decorator_property(options={}){options={readAttribute:true,type:clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.string,...options};/**
     * Registers given property to different property / attribute conversion
     * data structures.
     * NOTE: It is important to set static configuration properties on its
     * "own" properties instead of some inherited one. So we have to check via
     * "hasOwnProperty" for existence in this decorator.
     * @param target - Instance to apply given property to.
     * @param name - Field name to apply.
     */return function(target,name){if(typeof name!=="string")return;const self=target.self||target.constructor;if(options.readAttribute){if(!Object.prototype.hasOwnProperty.call(self,"observedAttributes"))self.observedAttributes=self.observedAttributes?[...self.observedAttributes]:[];const attributeName=(0,clientnode__WEBPACK_IMPORTED_MODULE_3__.camelCaseToDelimited)(name);if(self.observedAttributes&&!self.observedAttributes.includes(attributeName))self.observedAttributes.push(attributeName)}if(options.type){if(!Object.prototype.hasOwnProperty.call(self,"propertyTypes"))self.propertyTypes=self.propertyTypes?{...self.propertyTypes}:{};if(self.propertyTypes&&(options.update||!hasOwnStaticMember(self,name)))self.propertyTypes[name]=options.type}if(options.writeAttribute){if(!Object.prototype.hasOwnProperty.call(self,"propertiesToReflectAsAttributes"))self.propertiesToReflectAsAttributes=self.propertiesToReflectAsAttributes?(0,clientnode__WEBPACK_IMPORTED_MODULE_3__.copy)(self.propertiesToReflectAsAttributes):[];const reflectionConfiguration=self.propertiesToReflectAsAttributes;if(options.update||(reflectionConfiguration instanceof Map?!reflectionConfiguration.has(name):Array.isArray(reflectionConfiguration)?!reflectionConfiguration.includes(name):typeof reflectionConfiguration==="object"&&!Object.prototype.hasOwnProperty.call(reflectionConfiguration,name))){let result;if(typeof options.writeAttribute==="boolean"){if(options.writeAttribute&&self.propertyTypes&&Object.prototype.hasOwnProperty.call(self.propertyTypes,name))result=self.propertyTypes[name]}else result=options.writeAttribute;if(result!==undefined){if(Array.isArray(self.propertiesToReflectAsAttributes))if(options.writeAttribute===true){if(!self.propertiesToReflectAsAttributes.includes(name))self.propertiesToReflectAsAttributes.push(name)}else if(self.normalizePropertyTypeList)self.propertiesToReflectAsAttributes=self.normalizePropertyTypeList(self.propertiesToReflectAsAttributes);if(self.propertiesToReflectAsAttributes instanceof Map)self.propertiesToReflectAsAttributes.set(name,result);else if(!Array.isArray(self.propertiesToReflectAsAttributes)&&typeof self.propertiesToReflectAsAttributes==="object")self.propertiesToReflectAsAttributes[name]=result}}}if(options.alias){if(!Object.prototype.hasOwnProperty.call(self,"propertyAliases"))self.propertyAliases=self.propertyAliases?{...self.propertyAliases}:{};if(self.propertyAliases&&(options.update||!hasOwnStaticMember(self,name)))self.propertyAliases[name]=options.alias}}}/* harmony default export */ const decorator = ((/* unused pure expression or super */ null && (decorator_property)));


;// ./node_modules/core-js/modules/es.iterator.filter.js
es_iterator_filter_namespaceFn();

;// ./node_modules/core-js/modules/es.json.parse.js
es_json_parse_namespaceFn();

;// ./node_modules/core-js/modules/es.json.stringify.js
es_json_stringify_namespaceFn();

;// ./node_modules/core-js/modules/es.set.difference.v2.js
es_set_difference_v2_namespaceFn();

;// ./node_modules/core-js/modules/es.set.intersection.v2.js
es_set_intersection_v2_namespaceFn();

;// ./node_modules/core-js/modules/es.set.is-disjoint-from.v2.js
es_set_is_disjoint_from_v2_namespaceFn();

;// ./node_modules/core-js/modules/es.set.is-subset-of.v2.js
es_set_is_subset_of_v2_namespaceFn();

;// ./node_modules/core-js/modules/es.set.is-superset-of.v2.js
es_set_is_superset_of_v2_namespaceFn();

;// ./node_modules/core-js/modules/es.set.symmetric-difference.v2.js
es_set_symmetric_difference_v2_namespaceFn();

;// ./node_modules/core-js/modules/es.set.union.v2.js
es_set_union_v2_namespaceFn();

;// ./node_modules/web-component-wrapper/dist/Web.js
if(typeof Web_window==='undefined'||Web_window===null)var Web_window=(typeof globalThis==='undefined'||globalThis===null)?{}:globalThis;


















/******/ var Web_webpack_modules_ = ([
/* 0 */
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_1766__) => {

const x = (y) => {
	const x = {}; __nested_webpack_require_1766__.d(x, y); return x
} 
const y = (x) => (() => (x))
module.exports = x({ ["Logger"]: () => (dist/* Logger */.VyI), ["NOOP"]: () => (dist/* NOOP */.tEg), ["UTILITY_SCOPE"]: () => (dist/* UTILITY_SCOPE */.MXd), ["UTILITY_SCOPE_NAMES"]: () => (dist/* UTILITY_SCOPE_NAMES */.bGc), ["camelCaseToDelimited"]: () => (dist/* camelCaseToDelimited */.h1R), ["compile"]: () => (dist/* compile */.wEV), ["convertPlainObjectToMap"]: () => (dist/* convertPlainObjectToMap */.eQA), ["copy"]: () => (dist/* copy */.Cal), ["delimitedToCamelCase"]: () => (dist/* delimitedToCamelCase */.XD1), ["evaluate"]: () => (dist/* evaluate */._3z), ["extend"]: () => (dist/* extend */.X$i), ["isFunction"]: () => (dist/* isFunction */.Tnt), ["isObject"]: () => (dist/* isObject */.Gvm), ["lowerCase"]: () => (dist/* lowerCase */.gQT), ["replace"]: () => (dist/* replace */.HCR), ["represent"]: () => (dist/* represent */.DoQ), ["timeout"]: () => (dist/* timeout */.wRz), ["unique"]: () => (dist/* unique */.AmM), ["unwrap"]: () => (dist/* unwrap */.oAg) });

/***/ }),
/* 1 */
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_3411__) => {

const x = (y) => {
	const x = {}; __nested_webpack_require_3411__.d(x, y); return x
} 
const y = (x) => (() => (x))
module.exports = x({  });

/***/ }),
/* 2 */
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_3629__) => {

const x = (y) => {
	const x = {}; __nested_webpack_require_3629__.d(x, y); return x
} 
const y = (x) => (() => (x))
module.exports = x({  });

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_3859__) => {

/* harmony export */ __nested_webpack_require_3859__.d(__nested_webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export property */
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_3859__(4);
/* harmony import */ var core_js_modules_es_map_get_or_insert_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_3859__(1);
/* harmony import */ var core_js_modules_es_map_get_or_insert_computed_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_3859__(2);
/* harmony import */ var clientnode__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_3859__(0);
/* harmony import */ var clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_3859__(5);
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module decorator *//* !
    region header
    [Project page](https://tsickert.com/web-component-wrapper)

    Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 4.0 international license.
    See https://creativecommons.org/licenses/by/4.0/deed.de
    endregion
*/// region imports
// endregion
/*
    NOTE: Every class owns these members, so they do not indicate an existing
    static configuration.
*/const INTRINSIC_CLASS_MEMBER_NAMES=["length","name","prototype"];/**
 * Checks if given class defines an own static member with given name.
 * @param self - Class to check.
 * @param name - Member name to check.
 * @returns A boolean indicating whether given member exists.
 */const hasOwnStaticMember=(self,name)=>Object.prototype.hasOwnProperty.call(self,name)&&!INTRINSIC_CLASS_MEMBER_NAMES.includes(name);/**
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
 */function property(options={}){options={readAttribute:true,type:clientnode_property_types__WEBPACK_IMPORTED_MODULE_4__.string,...options};/**
     * Registers given property to different property / attribute conversion
     * data structures.
     * NOTE: It is important to set static configuration properties on its
     * "own" properties instead of some inherited one. So we have to check via
     * "hasOwnProperty" for existence in this decorator.
     * @param target - Instance to apply given property to.
     * @param name - Field name to apply.
     */return function(target,name){if(typeof name!=="string")return;const self=target.self||target.constructor;if(options.readAttribute){if(!Object.prototype.hasOwnProperty.call(self,"observedAttributes"))self.observedAttributes=self.observedAttributes?[...self.observedAttributes]:[];const attributeName=(0,clientnode__WEBPACK_IMPORTED_MODULE_3__.camelCaseToDelimited)(name);if(self.observedAttributes&&!self.observedAttributes.includes(attributeName))self.observedAttributes.push(attributeName)}if(options.type){if(!Object.prototype.hasOwnProperty.call(self,"propertyTypes"))self.propertyTypes=self.propertyTypes?{...self.propertyTypes}:{};if(self.propertyTypes&&(options.update||!hasOwnStaticMember(self,name)))self.propertyTypes[name]=options.type}if(options.writeAttribute){if(!Object.prototype.hasOwnProperty.call(self,"propertiesToReflectAsAttributes"))self.propertiesToReflectAsAttributes=self.propertiesToReflectAsAttributes?(0,clientnode__WEBPACK_IMPORTED_MODULE_3__.copy)(self.propertiesToReflectAsAttributes):[];const reflectionConfiguration=self.propertiesToReflectAsAttributes;if(options.update||(reflectionConfiguration instanceof Map?!reflectionConfiguration.has(name):Array.isArray(reflectionConfiguration)?!reflectionConfiguration.includes(name):typeof reflectionConfiguration==="object"&&!Object.prototype.hasOwnProperty.call(reflectionConfiguration,name))){let result;if(typeof options.writeAttribute==="boolean"){if(options.writeAttribute&&self.propertyTypes&&Object.prototype.hasOwnProperty.call(self.propertyTypes,name))result=self.propertyTypes[name]}else result=options.writeAttribute;if(result!==undefined){if(Array.isArray(self.propertiesToReflectAsAttributes))if(options.writeAttribute===true){if(!self.propertiesToReflectAsAttributes.includes(name))self.propertiesToReflectAsAttributes.push(name)}else if(self.normalizePropertyTypeList)self.propertiesToReflectAsAttributes=self.normalizePropertyTypeList(self.propertiesToReflectAsAttributes);if(self.propertiesToReflectAsAttributes instanceof Map)self.propertiesToReflectAsAttributes.set(name,result);else if(!Array.isArray(self.propertiesToReflectAsAttributes)&&typeof self.propertiesToReflectAsAttributes==="object")self.propertiesToReflectAsAttributes[name]=result}}}if(options.alias){if(!Object.prototype.hasOwnProperty.call(self,"propertyAliases"))self.propertyAliases=self.propertyAliases?{...self.propertyAliases}:{};if(self.propertyAliases&&(options.update||!hasOwnStaticMember(self,name)))self.propertyAliases[name]=options.alias}}}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (property);

/***/ }),
/* 4 */
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_9456__) => {

const x = (y) => {
	const x = {}; __nested_webpack_require_9456__.d(x, y); return x
} 
const y = (x) => (() => (x))
module.exports = x({  });

/***/ }),
/* 5 */
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_9674__) => {

const x = (y) => {
	const x = {}; __nested_webpack_require_9674__.d(x, y); return x
} 
const y = (x) => (() => (x))
module.exports = x({ ["any"]: () => (any), ["array"]: () => (property_types_array), ["arrayOf"]: () => (arrayOf), ["boolean"]: () => (property_types_boolean), ["element"]: () => (property_types_element), ["elementType"]: () => (elementType), ["exact"]: () => (exact), ["func"]: () => (func), ["instanceOf"]: () => (instanceOf), ["node"]: () => (property_types_node), ["number"]: () => (property_types_number), ["object"]: () => (property_types_object), ["objectOf"]: () => (objectOf), ["oneOf"]: () => (oneOf), ["oneOfType"]: () => (oneOfType), ["shape"]: () => (shape), ["string"]: () => (property_types_string), ["symbol"]: () => (property_types_symbol) });

/***/ }),
/* 6 */,
/* 7 */
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_11549__) => {

const x = (y) => {
	const x = {}; __nested_webpack_require_11549__.d(x, y); return x
} 
const y = (x) => (() => (x))
module.exports = x({  });

/***/ }),
/* 8 */
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_11767__) => {

const x = (y) => {
	const x = {}; __nested_webpack_require_11767__.d(x, y); return x
} 
const y = (x) => (() => (x))
module.exports = x({  });

/***/ }),
/* 9 */,
/* 10 */
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_11995__) => {

const x = (y) => {
	const x = {}; __nested_webpack_require_11995__.d(x, y); return x
} 
const y = (x) => (() => (x))
module.exports = x({  });

/***/ })
/******/ ]);
/************************************************************************/
/******/ // The module cache
/******/ const Web_webpack_module_cache_ = {};
/******/ 
/******/ // The require function
/******/ function __nested_webpack_require_12377__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	const cachedModule = Web_webpack_module_cache_[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	const module = Web_webpack_module_cache_[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	Web_webpack_modules_[moduleId](module, module.exports, __nested_webpack_require_12377__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ // define getter/value functions for harmony exports
/******/ __nested_webpack_require_12377__.d = (exports, definition) => {
/******/ 	for(var key in definition) {
/******/ 		if(__nested_webpack_require_12377__.o(definition, key) && !__nested_webpack_require_12377__.o(exports, key)) {
/******/ 			Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 		}
/******/ 	}
/******/ };
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ __nested_webpack_require_12377__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 
/************************************************************************/

;// external "core-js/modules/es.iterator.for-each.js"

;// external "core-js/modules/es.iterator.reduce.js"

// EXTERNAL MODULE: external "core-js/modules/es.array.push.js"
var es_array_push_js_ = __nested_webpack_require_12377__(4);
// EXTERNAL MODULE: external "core-js/modules/es.iterator.constructor.js"
var es_iterator_constructor_js_ = __nested_webpack_require_12377__(7);
// EXTERNAL MODULE: external "core-js/modules/es.iterator.filter.js"
var es_iterator_filter_js_ = __nested_webpack_require_12377__(10);
// EXTERNAL MODULE: external "core-js/modules/es.iterator.map.js"
var es_iterator_map_js_ = __nested_webpack_require_12377__(8);
;// external "core-js/modules/es.json.parse.js"

;// external "core-js/modules/es.json.stringify.js"

// EXTERNAL MODULE: external "core-js/modules/es.map.get-or-insert.js"
var es_map_get_or_insert_js_ = __nested_webpack_require_12377__(1);
// EXTERNAL MODULE: external "core-js/modules/es.map.get-or-insert-computed.js"
var es_map_get_or_insert_computed_js_ = __nested_webpack_require_12377__(2);
;// external "core-js/modules/es.set.difference.v2.js"

;// external "core-js/modules/es.set.intersection.v2.js"

;// external "core-js/modules/es.set.is-disjoint-from.v2.js"

;// external "core-js/modules/es.set.is-subset-of.v2.js"

;// external "core-js/modules/es.set.is-superset-of.v2.js"

;// external "core-js/modules/es.set.symmetric-difference.v2.js"

;// external "core-js/modules/es.set.union.v2.js"

// EXTERNAL MODULE: external "clientnode"
var external_clientnode_ = __nested_webpack_require_12377__(0);
// EXTERNAL MODULE: external "clientnode/property-types"
var property_types_ = __nested_webpack_require_12377__(5);
// EXTERNAL MODULE: ./src/decorator.ts
var Web_decorator = /*#__PURE__*/__nested_webpack_require_12377__(3);
;// ./src/Web.ts
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module web *//* !
    region header
    [Project page](https://tsickert.com/web-component-wrapper)

    Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 4.0 international license.
    See https://creativecommons.org/licenses/by/4.0/deed.de
    endregion
*/// region imports
var _dec,_class,_descriptor,_Web;function _initializerDefineProperty(e,i,r,l){r&&Object.defineProperty(e,i,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(l):void 0})};function Web_defineProperty(r,t,o){return(t=Web_toPropertyKey(t))in r?Object.defineProperty(r,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[t]=o,r}function Web_toPropertyKey(r){var o=Web_toPrimitive(r,"string");return"symbol"==typeof o?o:o+""}function Web_toPrimitive(t,e){if("object"!=typeof t||!t)return t;var r;if("undefined"!=typeof Symbol&&void 0!==(r=t[Symbol.toPrimitive])){var i=r.call(t,e||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function _applyDecoratedDescriptor(i,e,r,n,l){var a={};return Object.keys(n).forEach(function(i){a[i]=n[i]}),a.enumerable=!!a.enumerable,a.configurable=!!a.configurable,("value"in a||a.initializer)&&(a.writable=!0),a=r.slice().reverse().reduce(function(r,n){return n(i,e,r)||r},a),l&&void 0!==a.initializer&&(a.value=a.initializer?a.initializer.call(l):void 0,a.initializer=void 0),void 0===a.initializer?(Object.defineProperty(i,e,a),null):a}function _initializerWarningHelper(r,e){throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform.")};// endregion
const log=new external_clientnode_.Logger({name:"web-component-wrapper.web"});/*
    NOTE: We mock HTMLElement to be able to load this class and derived one
    into node environments.
*/const GenericHTMLElement=typeof HTMLElement==="undefined"?// eslint-disable-next-line @typescript-eslint/no-extraneous-class
class HTMLElement{}:HTMLElement;/**
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
 */let Web=(_dec=(0,Web_decorator/* default */.A)({type:property_types_.boolean,writeAttribute:true}),_class=(_Web=class Web extends GenericHTMLElement{// endregion
// region live cycle hooks
/**
     * Initializes host dom content and properties.
     * @returns Nothing.
     */constructor(){super();Web_defineProperty(this,"renderState",{promise:Promise.resolve(""),pending:false,resolve:external_clientnode_.NOOP});// Constructor might be executed when accessed via child components.
Web_defineProperty(this,"childComponentInstances",[]);Web_defineProperty(this,"batchAttributeUpdates",true);Web_defineProperty(this,"batchPropertyUpdates",true);Web_defineProperty(this,"batchUpdates",true);/*
        NOTE: We set these properties to true initially since we want to
        prevent any updates until the component is connected to dom.
    */Web_defineProperty(this,"batchedAttributeUpdateRunning",true);Web_defineProperty(this,"batchedPropertyUpdateRunning",true);Web_defineProperty(this,"batchedUpdateRunning",true);Web_defineProperty(this,"connectionRegistered",false);Web_defineProperty(this,"pendingAttributeUpdates",[]);Web_defineProperty(this,"parentInstance",null);Web_defineProperty(this,"rootInstance",void 0);Web_defineProperty(this,"hostDomNode",void 0);Web_defineProperty(this,"scope",{...external_clientnode_.UTILITY_SCOPE});Web_defineProperty(this,"domNodeEventBindings",new Map);Web_defineProperty(this,"domNodeTemplateCache",new Map);Web_defineProperty(this,"externalProperties",{});Web_defineProperty(this,"ignoreAttributeUpdateObservations",false);Web_defineProperty(this,"internalProperties",{});Web_defineProperty(this,"outputEventNames",new Set);Web_defineProperty(this,"instance",null);_initializerDefineProperty(this,"isRoot",_descriptor,this);Web_defineProperty(this,"runDomConnectionAndRenderingInSameEventQueue",false);Web_defineProperty(this,"self",Web);Web_defineProperty(this,"slots",{});this.prepareNewRenderingPromise();/*
            NOTE: We cannot use something like "this." e.g. "this.self" to
            determine class properties since instance properties like "self"
            may not set properly yet because this method is called during
            constructing this instance itself.
        */this.self=this.constructor;if(!this.self._propertiesToReflectAsAttributes)this.self._propertiesToReflectAsAttributes=this.self.normalizePropertyTypeList(this.self.propertiesToReflectAsAttributes);this.generateAliasIndex();// NOTE: Shadow root will be applied when rendering the first time.
this.hostDomNode=this;this.rootInstance=this;/*
            NOTE: We define getter and setter at the end to avoid shadowing
            existing property names.
        */this.defineGetterAndSetterInterface()}/**
     * Triggered when ever a given attribute has changed and triggers to update
     * configured dom content.
     * @param name - Attribute name which was updates.
     * @param oldValue - Old attribute value.
     * @param newValue - New updated value.
     */attributeChangedCallback(name,oldValue,newValue){if(this.ignoreAttributeUpdateObservations||oldValue===newValue)return;void this.onUpdateAttribute(name,newValue)}/**
     * Updates given attribute representation.
     * @param name - Attribute name which was updates.
     * @param newValue - New updated value.
     * @returns Promise resolving when attribute has been updated.
     */onUpdateAttribute(name,newValue){const promise=new Promise(resolve=>this.pendingAttributeUpdates.push(()=>{this.evaluateStringOrNullAndSetAsProperty(name,newValue);if(this.batchAttributeUpdates){if(!(this.batchedAttributeUpdateRunning||this.batchedUpdateRunning)){this.batchedAttributeUpdateRunning=true;this.batchedUpdateRunning=true;void (0,external_clientnode_.timeout)(()=>{this.batchedAttributeUpdateRunning=false;this.batchedUpdateRunning=false;void this.render("attributeChanged")})}}else void this.render("attributeChanged");resolve()}));if(this.connectionRegistered)while(this.pendingAttributeUpdates.length)this.pendingAttributeUpdates.shift()();return promise}/**
     * Triggered when this component is mounted into the document.
     * Attaches event handler, grabs given slots, reflects external properties,
     * and enqueues first rendering.
     */connectedCallback(){// NOTE: Hack to support IE 11 here.
try{this.isConnected=true}catch{// Ignore error.
}this.connectionRegistered=true;// NOTE: Can be overwritten during optional root determining.
this.parentInstance=this;this.rootInstance=this;this.attachEventHandler();if(this.self.determineRootBinding){this.determineRootBinding();if(this.parentInstance!==this&&this.parentInstance.childComponentInstances)this.parentInstance.childComponentInstances.push(this)}if(this.self.applyRootBinding&&this.isRoot){this.determineRenderScope();this.applyBinding(this,this.scope)}while(this.pendingAttributeUpdates.length)this.pendingAttributeUpdates.shift()();this.batchedAttributeUpdateRunning=false;this.batchedPropertyUpdateRunning=false;this.batchedUpdateRunning=false;this.grabGivenSlots();this.reflectExternalProperties(this.externalProperties);if(this.runDomConnectionAndRenderingInSameEventQueue)void this.render("connected");else void (0,external_clientnode_.timeout)(()=>{void this.render("connected")})}/**
     * Triggered when this component is unmounted from the document. Event
     * handlers will be removed and state updated accordingly.
     */disconnectedCallback(){this.unRender("disconnected");this.unregisterConnectionState()}// endregion
// region getter/setter
/**
     * Registers needed getter and setter to get notified about changes and
     * reflect them.
     */defineGetterAndSetterInterface(){const allPropertyNames=(0,external_clientnode_.unique)(Object.keys(this.self.propertyTypes).concat(this.self._propertyAliasIndex?Object.keys(this.self._propertyAliasIndex):[]));for(const propertyName of allPropertyNames){// If there already exists a local value, use them.
if(Object.prototype.hasOwnProperty.call(this,propertyName))this.setPropertyValue(/* eslint-disable @typescript-eslint/unbound-method */propertyName,this[propertyName]/* eslint-enable @typescript-eslint/unbound-method */);Object.defineProperty(this,propertyName,{configurable:true,get:()=>this.getPropertyValue(propertyName),set:value=>{this.setPropertyValue(propertyName,value);this.triggerPropertySpecificRendering(propertyName,value)}})}}/**
     * Creates an index to match alias source and target against each other on
     * constant runtime.
     * @param name - Name to search an alternate name for.
     * @returns Found alias or "null".
     */getPropertyAlias(name){if(this.self._propertyAliasIndex&&Object.prototype.hasOwnProperty.call(this.self._propertyAliasIndex,name))return this.self._propertyAliasIndex[name];return null}/**
     * Generic property getter. Forwards properties from the "properties"
     * field.
     * @param name - Property name to retrieve.
     * @returns Retrieved property value.
     */getPropertyValue(name){const result=this.instance?.current?.properties&&(// NOTE: Base properties should not be shadowed.
!Object.prototype.hasOwnProperty.call(Web.propertyTypes,name)||Object.prototype.hasOwnProperty.call(this.instance.current.properties,name))?this.instance.current.properties[name]:this.internalProperties[name]??this.externalProperties[name];if(this.instance?.current?.state&&Object.prototype.hasOwnProperty.call(this.instance.current.state,name))return this.instance.current.state[name];return result}/**
     * External property setter. Respects configured aliases.
     * @param name - Property name to write.
     * @param value - New value to write.
     */setExternalPropertyValue(name,value){this.externalProperties[name]=value;const alias=this.getPropertyAlias(name);if(alias)this.externalProperties[alias]=value}/**
     * Internal property setter. Respects configured aliases.
     * @param name - Property name to write.
     * @param value - New value to write.
     */setInternalPropertyValue(name,value){this.internalProperties[name]=value;const alias=this.getPropertyAlias(name);if(alias)this.internalProperties[alias]=value}/**
     * Generic property setter. Forwards field writes into internal and
     * external property representations.
     * @param name - Property name to write.
     * @param value - New value to write.
     */setPropertyValue(name,value){this.reflectProperties({[name]:value});this.setInternalPropertyValue(name,value)}/**
     * Triggers a new rendering cycle and respects property-specific state
     * connection.
     * @param name - Property name to write.
     * @param value - New value to write.
     */triggerPropertySpecificRendering(name,value){if(this.batchPropertyUpdates){if(!(this.batchedPropertyUpdateRunning||this.batchedUpdateRunning)){this.batchedPropertyUpdateRunning=true;this.batchedUpdateRunning=true;void (0,external_clientnode_.timeout)(()=>{if(value!==undefined&&this.isStateProperty(name)){void this.render("preStatePropertyChanged");void (0,external_clientnode_.timeout)(()=>{this.setInternalPropertyValue(name,undefined);this.batchedPropertyUpdateRunning=false;this.batchedUpdateRunning=false;void this.render("postStatePropertyChanged");this.triggerOutputEvents()})}else{this.batchedPropertyUpdateRunning=false;this.batchedUpdateRunning=false;void this.render("propertyChanged");this.triggerOutputEvents()}})}}else{const isStateProperty=this.isStateProperty(name);void this.render(isStateProperty?"preStatePropertyChanged":"propertyChanged");if(value!==undefined&&isStateProperty){this.setInternalPropertyValue(name,undefined);void this.render("postStatePropertyChanged")}this.triggerOutputEvents()}}// endregion
// region helper
/// region utility
unregisterConnectionState(){// NOTE: Hack to support IE 11 here.
try{this.isConnected=false}catch{// Ignore error.
}this.connectionRegistered=false;this.slots={}}unregisterDomNodeEventBindings(){for(const map of this.domNodeEventBindings.values())for(const deregister of map.values())deregister()}//// region dom nodes
/**
     * Binds properties and event handler to the given dom node.
     * @param domNode - Node to start traversing from.
     * @param scope - Scope to render property value again.
     * @param eventBindings - Indicates whether to bind event handler.
     * @param valueBindings - Indicates whether to bind attribute and property
     * values.
     */applyBinding(domNode,scope,eventBindings=true,valueBindings=true){if(!domNode.getAttributeNames)return;for(const attributeName of domNode.getAttributeNames()){let name;if(attributeName.startsWith("data-bind-"))name=attributeName.substring("data-bind-".length);else if(attributeName.startsWith("bind-"))name=attributeName.substring("bind-".length);if(name){const value=domNode.getAttribute(attributeName);if(value===null)continue;if(valueBindings&&(name.startsWith("attribute-")||name.startsWith("property-"))){const evaluated=(0,external_clientnode_.evaluate)(value,{scope,binding:domNode});if(evaluated.error){void log.warn("Error occurred during processing given",`attribute binding "${attributeName}" on node:`,domNode,evaluated.error);continue}if(name.startsWith("attribute-"))domNode.setAttribute(name.substring("attribute-".length),evaluated.result);else/*
                            NOTE: Cast to "textContent" to have a writable
                            property here.
                        */domNode[(0,external_clientnode_.delimitedToCamelCase)(name.substring("property-".length))]=evaluated.result}else if(eventBindings&&name.startsWith("on-")){name=(0,external_clientnode_.delimitedToCamelCase)(name.substring("on-".length));scope={log,event:undefined,parameters:undefined,...scope};/*
                        NOTE: We pre-compile event listener since they should
                        usually be called more often than binded.
                    */const compilation=(0,external_clientnode_.compile)(value,{scope,execute:true,binding:domNode});if(compilation.error)void log.warn("Error occurred during compiling given event",`binding "${attributeName}" on node:`,domNode,compilation.error);else this.addSecureEventListener(domNode,name,(...parameters)=>{scope.event=parameters[0];scope.parameters=parameters;try{compilation.templateFunction(/*
                                            NOTE: We want to be sure to have
                                            the same ordering as we have for
                                            the scope names and to call
                                            internal registered getter by
                                            retrieving values. So simple using
                                            "...Object.values(scope)" is not
                                            appreciate here.
                                        */...compilation.originalScopeNames.map(name=>scope[name]))}catch(error){void log.warn("Error occurred during processing","given event binding",`"${attributeName}" on node:`,domNode,`Given expression "${value}" could`,"not be evaluated with given scope","names \""+compilation.scopeNames.join("\", \"")+`": ${(0,external_clientnode_.represent)(error)}`)}})}}}}/**
     * Binds properties and event handler to given, sibling, and nested nodes.
     * @param domNode - Node to start traversing from.
     * @param scope - Scope to render property value again.
     * @param renderSlots - Indicates whether to render nested elements of
     * slots (determined by an existing corresponding attribute).
     * @param eventBindings - Indicates whether to bind event handler.
     * @param valueBindings - Indicates whether to bind attribute and property
     * values.
     */applyBindings(domNode,scope,renderSlots=true,eventBindings=true,valueBindings=true){while(domNode){if(domNode.attributes?.length&&(renderSlots||!domNode.getAttribute("slot")))this.applyBinding(domNode,scope,eventBindings,valueBindings);/*
                NOTE: Slots of nested custom components (recognized by their
                dash in name) should be rendered by their own.
            */if(!domNode.nodeName.toLowerCase().includes("-"))this.applyBindings(domNode.firstChild,scope,true,eventBindings,valueBindings);domNode=domNode.nextSibling}}/**
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
     */compileDomNodeTemplate(domNode,scope=[],options={}){options={ignoreComponents:true,ignoreNestedComponents:true,unsafe:this.self.renderUnsafe,...options};const nodeName=domNode.nodeName.toLowerCase();/*
            NOTE: Slots of nested custom components (recognized by their dash
            in name) should be rendered / controlled by them on their own.
        */if(options.ignoreComponents&&nodeName.includes("-"))return null;if(options.unsafe){let template=domNode.innerHTML;if(!template&&domNode.template)template=domNode.template;if(this.self.hasCode(template)){const result=(0,external_clientnode_.compile)(`\`${template}\``,{scope});return{domNode,children:[],error:result.error,scopeNames:result.scopeNames,template,templateFunction:result.templateFunction}}return null}let template=null;if(nodeName==="#text"){const content=domNode.textContent;if(content&&this.self.hasCode(content))template=content.replace(/&nbsp;/g," ").trim()}const children=[];const result={children,domNode};if(template){const compilationResult=(0,external_clientnode_.compile)(`\`${template}\``,{scope});result.error=compilationResult.error;result.scopeNames=compilationResult.scopeNames;result.template=template;result.templateFunction=compilationResult.templateFunction}// Compile content of each nested node.
let currentDomNode=domNode.firstChild;while(currentDomNode){if(!options.filter||options.filter(currentDomNode)){const result=this.compileDomNodeTemplate(currentDomNode,scope,{...options,ignoreComponents:options.ignoreNestedComponents});if(result)children.push(result)}currentDomNode=currentDomNode.nextSibling}return result}/**
     * @param options - Evaluation options.
     * @param scope - Scope to evaluate against.
     * @returns Evaluated string result or null.
     */evaluateCompiledDomNodeTemplate(options,scope){const{domNode,error,templateFunction,scopeNames}=options;if(!(templateFunction&&scopeNames))return null;if(error){void log.warn("Error occurred during compiling node content:",error);return null}let output=null;try{output=templateFunction(...scopeNames.map(name=>scope[name]))}catch(error){void log.warn(`Error occurred when "${this.self._name}" is  running`,`"${String(templateFunction)}": with bound`,`names "${scopeNames.join("\", \"")}":`,`"${error}". Rendering node:`,domNode)}return output}/**
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
     */evaluateDomNodeTemplate(domNode,scope={},options={}){options={domNodeTemplateCache:this.domNodeTemplateCache,ignoreComponents:true,ignoreNestedComponents:true,unsafe:this.self.renderUnsafe,...options};const domNodeTemplateCache=options.domNodeTemplateCache;if(!domNodeTemplateCache.has(domNode)){const compilerOptions={filter:options.filter,ignoreComponents:options.ignoreComponents,ignoreNestedComponents:options.ignoreNestedComponents,unsafe:options.unsafe};const compiledDomNode=this.compileDomNodeTemplate(domNode,scope,compilerOptions);if(compiledDomNode)domNodeTemplateCache.set(domNode,compiledDomNode)}if(domNodeTemplateCache.has(domNode)){const compiledDomNode=domNodeTemplateCache.get(domNode);const output=this.evaluateCompiledDomNodeTemplate(compiledDomNode,scope);if(output!==null)if(options.unsafe&&domNode.innerHTML)domNode.innerHTML=output;else domNode.textContent=output;if(compiledDomNode.children.length){const evaluateChildDomNode=children=>{for(const childCompiledDomNode of children){const output=this.evaluateCompiledDomNodeTemplate(childCompiledDomNode,scope);if(output!==null)childCompiledDomNode.domNode.textContent=output;if(childCompiledDomNode.children.length)evaluateChildDomNode(childCompiledDomNode.children)}};evaluateChildDomNode(compiledDomNode.children)}}if(options.applyBindings)this.applyBindings(domNode,scope)}/**
     * Adds an event listener to the given dom node so that it will be
     * deregistered when the component instance is destroyed.
     * @param domNode - Node to assign event handler to.
     * @param name - Event name.
     * @param handler - Callback to trigger when given event occurs.
     * @param options - Add event listener options.
     * @param removeOptions - Remove event listener options.
     * @returns Deregister function.
     */addSecureEventListener(domNode,name,handler,options,removeOptions){/*
            NOTE: Has to be done before retrieving the event map since it may
            be removed when the old handler was the last one registered.
        */this.domNodeEventBindings.get(domNode)?.get(name)?.();if(!this.domNodeEventBindings.has(domNode))this.domNodeEventBindings.set(// eslint-disable-next-line func-call-spacing
domNode,new Map);const eventMap=this.domNodeEventBindings.get(domNode);const deregister=()=>{domNode.removeEventListener(name,handler,removeOptions);// NOTE: An outdated deregister should not remove its successor.
if(eventMap.get(name)===deregister)eventMap.delete(name);if(eventMap.size===0&&this.domNodeEventBindings.get(domNode)===eventMap)this.domNodeEventBindings.delete(domNode)};eventMap.set(name,deregister);domNode.addEventListener(name,handler,options);return deregister}//// endregion
/**
     * Determines initial root which initializes rendering digest.
     */determineRootBinding(){/*
            If this component is the root component, we have to trigger
            nested event handler by our own in global context since there is no
            parent doing that for us.
        */let currentElement=this.parentNode;while(currentElement){const isComponent=currentElement instanceof Web||currentElement.nodeName.includes("-")&&currentElement.nodeName!=="#document-fragment";const isInShadowDOM=currentElement.parentNode===null&&/* eslint-disable @typescript-eslint/no-base-to-string */currentElement.toString()==="[object ShadowRoot]";/* eslint-enable @typescript-eslint/no-base-to-string */if(isComponent){// Check whether we found the first parent component.
if(this.rootInstance===this){this.parentInstance=currentElement;/*
                        NOTE: There is at least one parent, so we can set
                        "isRoot" to "false".
                    */this.setPropertyValue("isRoot",false)}this.rootInstance=currentElement}else if(isInShadowDOM)/*
                    NOTE: Assume none root if determined a wrapped closed
                    shadow DOM.
                */this.setPropertyValue("isRoot",false);/*
                NOTE: Continue with the shadow root's host to find components
                which rendered us into their (even closed) shadow DOM.
            */currentElement=isInShadowDOM?currentElement.host:currentElement.parentNode}}/**
     * Checks if given content hast code (to compile and render).
     * @param content - Potential string with code inside.
     * @returns A boolean indicating whether given content has code.
     */static hasCode(content){return(// NOTE: First three conditions are only for performance.
typeof content==="string"&&content.includes("${")&&content.includes("}")&&/\${[\s\S]+}/.test(content))}/**
     * Converts given the list, item, or map to a map (with ordering).
     * @param value - Attribute reflection configuration.
     * @returns Generated map.
     */static normalizePropertyTypeList(value){if(typeof value==="string")value=[value];if(Array.isArray(value)){const givenValue=value;const newValue=new Map;for(const name of givenValue)if(Object.prototype.hasOwnProperty.call(Web.propertyTypes,name))newValue.set(name,Web.propertyTypes[name]);return newValue}return (0,external_clientnode_.convertPlainObjectToMap)(value)}/// endregion
/// region events
/**
     * Attaches event handler to keep in sync with nested components properties
     * states.
     */attachEventHandler(){if(this.self.eventToPropertyMapping===null)return;/*
            NOTE: We only reflect properties by implicit determined events if
            their where no explicitly defined.
        */const somethingDefined=this.attachExplicitDefinedOutputEventHandler();this.attachImplicitDefinedOutputEventHandler(!somethingDefined)}/**
     * Attach explicitly defined event handler to synchronize internal and
     * external property states.
     * @returns Returns "true" if there are some defined and "false" otherwise.
     */attachExplicitDefinedOutputEventHandler(){if(!this.self.eventToPropertyMapping)return false;// Grab all existing output to property definitions
let result=false;for(const name of Object.keys(this.self.eventToPropertyMapping))if(!Object.prototype.hasOwnProperty.call(this.internalProperties,name)){result=true;this.outputEventNames.add(name);this.setInternalPropertyValue(name,async(...parameters)=>{const result=await this.reflectEventToProperties(name,parameters);if(result)parameters[0]=result;this.forwardEvent(name,parameters)})}return result}/**
     * Attach implicitly defined event handler to synchronize internal and
     * external property states.
     * @param reflectProperties - Indicates whether implicitly determined
     * properties should be reflected.
     */attachImplicitDefinedOutputEventHandler(reflectProperties=true){// Determine all event handlers to inject
for(const[name,type]of Object.entries(this.self.propertyTypes))if(!Object.prototype.hasOwnProperty.call(this.internalProperties,name)&&[property_types_.func,"function"].includes(type)&&!this.self.renderProperties.includes(name)){this.outputEventNames.add(name);this.setInternalPropertyValue(name,(...parameters)=>{if(reflectProperties)void this.reflectEventToProperties(name,parameters);this.forwardEvent(name,parameters)})}}/**
     * Triggers all identified events to communicate internal property / state
     * changes.
     */triggerOutputEvents(){for(const name of this.outputEventNames)this.forwardEvent(name,[this.externalProperties])}/**
     * Forwards given event as the native web event.
     * @param name - Event name.
     * @param parameters - Event parameters.
     * @returns False if event is cancelable, and at least one of the event
     * handlers which received event called "Event.preventDefault()",
     * otherwise true will be returned.
     */forwardEvent(name,parameters){if(name.length>"onX".length&&name.startsWith("on"))name=(0,external_clientnode_.lowerCase)(name.substring(2));return this.dispatchEvent(new CustomEvent(name,{detail:{parameters}}))}/// endregion
/// region slots
/**
     * Renders component given slot contents into the given dom node. If
     * expected slots are not given but a fallback is specified, they will be
     * loaded into internal slot mapping.
     * @param targetDomNode - Target dom node to render slots into.
     * @param scope - Environment to render slots again if specified.
     */applySlots(targetDomNode,scope){for(const domNode of Array.from(targetDomNode.querySelectorAll("slot"))){const name=domNode.getAttribute("name");if(name===null||name==="default"){if(this.slots.default){if(this.self.renderSlots){if(this.self.evaluateSlots)for(const domNode of this.slots.default)this.evaluateDomNodeTemplate(domNode,scope);(0,external_clientnode_.replace)(domNode,this.slots.default,Web.trimSlots)}}else this.slots.default=(0,external_clientnode_.unwrap)(domNode).map(domNode=>this.grabSlotContent(domNode));}else if(this.slots[name]){if(this.self.renderSlots){if(this.self.evaluateSlots)this.evaluateDomNodeTemplate(this.slots[name],scope);(0,external_clientnode_.replace)(domNode,this.slots[name],Web.trimSlots)}}else this.slots[name]=this.grabSlotContent((0,external_clientnode_.unwrap)(domNode).filter(domNode=>domNode.nodeName.toLowerCase()!=="#text")[0])}}/**
     * Determines slot content from the given node.
     * @param slot - Node to grab slot content from.
     * @returns Determined slot.
     */grabSlotContent(slot){/*
            If real (template) code is wrapped in a "textarea" tag, unwrap it
            now. This extra wrapping can be used to avoid first dom rendering
            before template code has been evaluated.
        */const element=slot.firstElementChild?slot:null;if(element&&element.firstElementChild?.nodeName.toLowerCase()==="textarea"&&(!element.firstElementChild.hasAttribute("data-no-template")||element.firstElementChild.getAttribute("data-no-template")==="false")){const content=element.firstElementChild.value;/*
                NOTE: These kinds of slots are always used as a template and
                should therefore be copied in every case.
                NOTE: A flat copy should suffice since we will replace nested
                content.
                NOTE: Remove template content in copied node to avoid rendering
                them before being evaluated. We cannot remove template code
                from the source node since this would make it impossible to
                re-instantiate this slot during whole component
                re-instantiation.
            */element.classList.remove("web-component-template");const newSlot=element.cloneNode();element.classList.add("web-component-template");newSlot.innerHTML="";newSlot.template=content;return newSlot}return this.self.cloneSlots?slot.cloneNode(true):slot}/**
     * Saves given slots.
     */grabGivenSlots(){this.slots={};for(const slot of Array.from(this.querySelectorAll("[slot]"))){// NOTE: This is how we avoid grabbing slots from nested components.
let currentElement=slot.parentNode;let skip=true;while(currentElement){if(currentElement.nodeName.includes("-")){if(currentElement===this)skip=false;break}currentElement=currentElement.parentNode}if(skip)continue;const slotValue=slot.getAttribute("slot")?.trim();this.slots[slotValue??slot.nodeName.toLowerCase()]=this.grabSlotContent(slot)}if(this.slots.default)this.slots.default=[].concat(this.slots.default);else if(this.childNodes.length>0)this.slots.default=Array.from(this.childNodes).map(domNode=>this.grabSlotContent(domNode));else this.slots.default=[]}/// endregion
/// region properties
/**
     * Determines if a given property name exists in wrapped component state.
     * @param name - Property name to check if exists in state.
     * @returns Boolean result.
     */isStateProperty(name){return Boolean(this.instance?.current?.state&&(Object.prototype.hasOwnProperty.call(this.instance.current.state,name)||this.instance.current.state.modelState&&Object.prototype.hasOwnProperty.call(this.instance.current.state.modelState,name)))}/**
     * Generates an alias to name and the other way around mapping if not
     * exists.
     */generateAliasIndex(){if(!this.self._propertyAliasIndex){this.self._propertyAliasIndex={...this.self.propertyAliases};// Align alias mapping for better performance while mapping them.
for(const[name,value]of Object.entries(this.self._propertyAliasIndex))if(!Object.prototype.hasOwnProperty.call(this.self._propertyAliasIndex,value))this.self._propertyAliasIndex[value]=name}}/**
     * Reflects wrapped component state back to web-component's attributes.
     * @param properties - Properties to update in reflected attribute state.
     */reflectExternalProperties(properties){/*
            NOTE: We can avoid an additional attribute parsing for
            reflections.
        */this.ignoreAttributeUpdateObservations=true;for(const[name,value]of Object.entries(properties)){this.setExternalPropertyValue(name,value);if(!this.isConnected)continue;const attributeName=(0,external_clientnode_.camelCaseToDelimited)(name);if(this.self._propertiesToReflectAsAttributes?.has(name))switch(this.self._propertiesToReflectAsAttributes.get(name)){case property_types_.boolean:case"boolean":if(value){if(this.getAttribute(attributeName)!=="")this.setAttribute(attributeName,"")}else if(this.hasAttribute(attributeName))this.removeAttribute(attributeName);break;case property_types_.func:case"function":break;case"json":if(value){const representation=JSON.stringify(value);if(representation&&this.getAttribute(attributeName)!==representation){this.setAttribute(attributeName,representation);break}}if(this.hasAttribute(attributeName))this.removeAttribute(attributeName);break;case property_types_.number:case"number":if(typeof value==="number"&&!isNaN(value)){const valueAsString=String(value);if(this.getAttribute(attributeName)!==valueAsString)this.setAttribute(attributeName,valueAsString)}else if(this.hasAttribute(attributeName))this.removeAttribute(attributeName);break;case property_types_.string:case"string":if(value){if(this.getAttribute(attributeName)!==value)this.setAttribute(attributeName,value)}else if(this.hasAttribute(attributeName))this.removeAttribute(attributeName);break;case property_types_.any:case property_types_.array:case property_types_.arrayOf:case property_types_.element:case property_types_.elementType:case property_types_.instanceOf:case property_types_.node:case property_types_.object:case"object":case property_types_.objectOf:case property_types_.shape:case property_types_.exact:case property_types_.symbol:default:if(value){const representation=(0,external_clientnode_.represent)(value);if(representation&&this.getAttribute(attributeName)!==representation){this.setAttribute(attributeName,representation);break}}if(this.hasAttribute(attributeName))this.removeAttribute(attributeName);break}}this.ignoreAttributeUpdateObservations=false}/**
     * Reflects wrapped component state back to web-component's attributes and
     * properties.
     * @param properties - Properties to update in reflected property state.
     */reflectProperties(properties){this.reflectExternalProperties(properties);/*
            NOTE: Do not reflect properties which are hold in state. These
            values are only set once when they are explicitly set
            (see "setPropertyValue").
        */if(this.instance?.current?.state&&typeof this.instance.current.state==="object")for(const name of Object.keys(this.instance.current.state).concat(this.instance.current.state.modelState?Object.keys(this.instance.current.state.modelState):[]))if(Object.prototype.hasOwnProperty.call(this.internalProperties,name))/*
                        We want to avoid fully deleting this property to know
                        which properties exist in the underlying instance.
                    */this.setInternalPropertyValue(name,undefined);if(this.internalProperties.model?.state){delete this.internalProperties.model.state;this.setInternalPropertyValue("model",this.internalProperties.model)}for(const name of this.self.controllableProperties)if(Object.prototype.hasOwnProperty.call(properties,name))this.setInternalPropertyValue(name,properties[name])}/**
     * Reflect the given event handler call with the given parameter back to
     * current properties state.
     * @param name - Event name.
     * @param parameters - List of parameter to given event handler call.
     * @returns Mapped properties or null if nothing could be mapped.
     */async reflectEventToProperties(name,parameters){/*
            NOTE: We enforce to update component state immediately after an
            event occurs since batching usually does not make sense here. An
            event runs within its own context.
            On the other hand, it can be necessary to immediately reflect a
            property change to the component internal state to avoid
            contradicting internal render cycles.
        */const oldBatchUpdatesConfiguration=this.batchUpdates;this.batchUpdates=false;let result=null;let handled=false;// region check if there exists an explicit mapper
if(this.self.eventToPropertyMapping&&Object.prototype.hasOwnProperty.call(this.self.eventToPropertyMapping,name)&&(0,external_clientnode_.isFunction)(this.self.eventToPropertyMapping[name])){const wrappedMapping=this.self.eventToPropertyMapping[name](...parameters,this);const mapping=wrappedMapping&&"then"in wrappedMapping&&(0,external_clientnode_.isFunction)(wrappedMapping.then)?await wrappedMapping:wrappedMapping;handled=true;if(Array.isArray(mapping)){result=mapping[0];this.reflectProperties(result);(0,external_clientnode_.extend)(true,this.internalProperties,mapping[1])}else if(mapping===null)handled=false;else if(typeof mapping==="object"){result=mapping;this.reflectProperties(mapping)}}// endregion
if(!handled&&parameters.length>0&&(0,external_clientnode_.isObject)(parameters[0])){/*
                Identified as somehow throw data back event (no synthetic
                event; derived from a user-triggered one) when following
                condition does not hold.
            */let newProperties=parameters[0];if("persist"in parameters[0]&&(0,external_clientnode_.isFunction)(parameters[0].persist)){newProperties={};for(const propertyName of Object.keys(this.self.propertyTypes))for(const name of[propertyName].concat(this.getPropertyAlias(propertyName)??[])){const currentValue=parameters[0].currentTarget&&Object.prototype.hasOwnProperty.call(parameters[0].currentTarget,name)?/*
                                    Update all known properties from event
                                    target instance.
                                */parameters[0].currentTarget[name]:/*
                                    Update all known properties from adapter
                                    instance.
                                */this.getPropertyValue(name);if(currentValue!==this.externalProperties[name])newProperties[name]=currentValue}}else if(![null,undefined].includes(newProperties.detail?.value))newProperties={...newProperties.detail};result=newProperties;this.reflectProperties(newProperties)}this.triggerRender("propertyReflected");this.batchUpdates=oldBatchUpdatesConfiguration;return result}/**
     * Evaluates the given property value depending on its property definition
     * and registers in a property mapping object.
     * @param attributeName - Name of given value.
     * @param value - Value to evaluate.
     */evaluateStringOrNullAndSetAsProperty(attributeName,value){const preEvaluate=attributeName.startsWith("-");const effectiveAttributeName=preEvaluate?attributeName.substring(1):attributeName;let name=(0,external_clientnode_.delimitedToCamelCase)(effectiveAttributeName);const alias=this.getPropertyAlias(name);if(alias&&Object.prototype.hasOwnProperty.call(this.self.propertyTypes,alias))name=alias;if(Object.prototype.hasOwnProperty.call(this.self.propertyTypes,name)){const type=this.self.propertyTypes[name];if(preEvaluate){if(value){const result=(0,external_clientnode_.evaluate)(value,{scope:{...external_clientnode_.UTILITY_SCOPE},binding:this});if(result.error){void log.warn(`Failed to process pre-evaluation attribute`,`"${attributeName}": ${result.error}. Will be`,"set to \"undefined\".");this.setInternalPropertyValue(name,undefined)}else{this.setInternalPropertyValue(name,result.result);this.setExternalPropertyValue(name,result.result)}}}else switch(type){case property_types_.boolean:case"boolean":{const booleanValue=![null,"false"].includes(value);this.setInternalPropertyValue(name,booleanValue);this.setExternalPropertyValue(name,booleanValue);break}case property_types_.func:case"function":{let error=null;let templateFunction;const scopeNames=["data","event","firstArgument","firstParameter","options"];if(value){const result=(0,external_clientnode_.compile)(value,{scope:scopeNames.concat("parameters","scope",external_clientnode_.UTILITY_SCOPE_NAMES),execute:true,binding:this});error=result.error;templateFunction=result.templateFunction;if(error)void log.warn("Failed to compile given handler",`"${attributeName}": ${error}.`)}this.setInternalPropertyValue(name,(...parameters)=>{if(this.outputEventNames.has(name))void this.reflectEventToProperties(name,parameters);let result=undefined;if(!error){const scope={parameters,...external_clientnode_.UTILITY_SCOPE};for(const name of scopeNames)scope[name]=parameters[0];try{result=templateFunction?.(...scopeNames.map(name=>scope[name]),parameters,scope,...external_clientnode_.UTILITY_SCOPE_NAMES.map(name=>external_clientnode_.UTILITY_SCOPE[name]))}catch(error){void log.warn("Failed to evaluate function",`"${attributeName}" with expression`,`"${value}" and scope`,"variables",`"${scopeNames.join("\", \"")}" set to`,`"${(0,external_clientnode_.represent)(parameters)}":`,`${error}. Set property`,`to "undefined".`)}}if(!this.self.renderProperties.includes(name))this.forwardEvent(name,parameters);return result});if(!error)this.setExternalPropertyValue(name,templateFunction);break}case"json":{if(value){let evaluated;try{evaluated=JSON.parse(value)}catch(error){void log.warn("Error occurred during parsing given json",`attribute "${attributeName}":`,(0,external_clientnode_.represent)(error));break}// NOTE: That both values do have to be avoided.
this.setInternalPropertyValue(name,evaluated);this.setExternalPropertyValue(name,(0,external_clientnode_.copy)(evaluated,false,1))}else{this.setInternalPropertyValue(name,null);this.setExternalPropertyValue(name,null)}break}case property_types_.number:case"number":{if(value===null){this.setInternalPropertyValue(name,value);this.setExternalPropertyValue(name,value);break}/*
                        NOTE: You should not name this variable "number" since
                        babel gets confused caused by existing module wide
                        property type variable "number".
                    */let numberValue=parseFloat(value);if(isNaN(numberValue))numberValue=undefined;this.setInternalPropertyValue(name,numberValue);this.setExternalPropertyValue(name,numberValue);break}case property_types_.string:case"string":{this.setInternalPropertyValue(name,value);this.setExternalPropertyValue(name,value);break}case property_types_.any:case property_types_.array:case property_types_.arrayOf:case property_types_.element:case property_types_.elementType:case property_types_.instanceOf:case property_types_.node:case property_types_.object:case"object":case property_types_.objectOf:case property_types_.oneOf:case property_types_.oneOfType:case property_types_.shape:case property_types_.exact:case property_types_.symbol:default:{if(value){const evaluated=(0,external_clientnode_.evaluate)(value,{binding:this});if(evaluated.error){void log.warn("Error occurred during processing given",`attribute configuration "${attributeName}":`,evaluated.error);break}// NOTE: That both values do have to be avoided.
this.setInternalPropertyValue(name,evaluated.result);this.setExternalPropertyValue(name,(0,external_clientnode_.copy)(evaluated.result,false,1))}else if(this.hasAttribute(attributeName)){this.setInternalPropertyValue(name,true);this.setExternalPropertyValue(name,true)}else{this.setInternalPropertyValue(name,null);this.setExternalPropertyValue(name,null)}break}}}}/// endregion
/// region render
/**
     * Produces a promise resolving when all nested rendering promises have
     * been resolved. This only waits for registered nested components. That
     * means that nested components which where connected before the parent
     * component got initialized will not be waited for. That might happen
     * when nested component types got registered before the parent ones.
     */async waitForNestedComponentRendering(){if(!this.childComponentInstances)return;await Promise.all(this.childComponentInstances.map(component=>component.renderState.pending?component.renderState.promise:Promise.resolve()))}/**
     * Resolves the rendering promise.
     * @param reason - Rendering reason description.
     * @param resolveRendering - Indicates whether to resolve the rendering or
     * just return a resolving promise directly.
     * @returns A promise resolving when all nested render promises have been
     * resolved.
     */async resolveRenderingPromiseIfSet(reason,resolveRendering){if(resolveRendering){await this.waitForNestedComponentRendering();this.renderState.pending=false;this.renderState.resolve(reason);this.prepareNewRenderingPromise()}}/**
     * Sets up a new rendering cycle representing promise.
     */prepareNewRenderingPromise(){if(!this.renderState.pending)this.renderState.promise=new Promise(resolve=>{this.renderState.resolve=reason=>{this.renderState.pending=false;resolve(reason)}})}/**
     * Triggers a new rendering cycle by respecting batch configuration.
     * @param reason - A description why rendering should be triggered.
     */triggerRender(reason){if(this.batchUpdates){if(!this.batchedUpdateRunning){this.batchedUpdateRunning=true;void (0,external_clientnode_.timeout)(()=>{this.batchedUpdateRunning=false;void this.render(reason)})}}else void this.render(reason)}/**
     * Creates shadow root if not created yet and assigns to the current root
     * property.
     */applyShadowRootIfNotExisting(){if(this.self.shadowDOM&&this.hostDomNode===this)this.hostDomNode=(!("attachShadow"in this)&&"ShadyDOM"in Web_window?Web_window.ShadyDOM.wrap(this):this).attachShadow((0,external_clientnode_.isObject)(this.self.shadowDOM)?this.self.shadowDOM:{mode:"open"})}/**
     * Determines a new scope object with a useful default set of environment
     * values.
     * @param scope - To apply to generated scope.
     */determineRenderScope(scope={}){this.scope={...(this.parentInstance?.scope||{}),...this.scope,...this.internalProperties,parentInstance:this.parentInstance,rootInstance:this.rootInstance,self:this,[(0,external_clientnode_.lowerCase)(this.self._name)||"instance"]:this,...scope};this.scope.scope=this.scope}/**
     * Does the rendering job. Should be called when ever state changes should
     * be projected to the hosts dom content.
     * @param reason - Description why rendering is necessary.
     * @param resolveRendering - Indicates whether rendering should be resolved
     * finally. Should be set to "false" via super calls in inherited render
     * methods which do further dom manipulations afterward and resolve the
     * rendering process by their own.
     * @returns A promise resolving when rendering has been finished. A promise
     * may be needed for classes inheriting from this class.
     */async render(reason="unknown",resolveRendering=true){this.unRender("reRender",reason);this.childComponentInstances=[];this.renderState.pending=true;if(this.isRoot){await this.resolveRenderingPromiseIfSet(reason,resolveRendering);if(resolveRendering){await Promise.all(this.self.pendingRenderPromises);this.self.pendingRenderPromises=[]}}this.self.pendingRenderPromises.push(this.renderState.promise);this.determineRenderScope();/*
            NOTE: "unRender" has removed all registered event listeners
            including root ones so we have to bind them again (with the newly
            determined scope) before dispatching the "render" event.
        */if(this.self.applyRootBinding&&this.isRoot)this.applyBinding(this,this.scope);if(!(this.self.doRender&&this.dispatchEvent(new CustomEvent("render",{detail:{reason,scope:this.scope}})))){await this.resolveRenderingPromiseIfSet(reason,resolveRendering);return}const evaluated=(0,external_clientnode_.evaluate)(`\`${this.self.content}\``,{scope:this.scope});if(evaluated.error){void log.warn(`Failed to process template: ${evaluated.error}`);this.renderState.resolve(reason);await Promise.all(this.self.pendingRenderPromises);return}this.applyShadowRootIfNotExisting();/*
            NOTE: We first render into an intermediate render target and apply
            slot content until we finally publish everything to the document.
            This avoids painting twice and internetexplorer bugs with an empty
            node after first overwriting the content of "this.rootInstance".
        */const renderTargetDomNode=document.createElement("div");renderTargetDomNode.innerHTML=evaluated.result;this.applySlots(renderTargetDomNode,{...this.scope,parentInstance:this});this.hostDomNode.innerHTML=renderTargetDomNode.innerHTML;/*
            NOTE: Event handler have to be bound before nested components
            dispatch their first events (like "render"). Nested components
            render in a later event queue so binding them synchronously here
            is early enough.
        */this.applyBindings(this.hostDomNode.firstChild,this.scope,this.self.renderSlots,true,false);/*
            NOTE: Wait until nested components have registered themselves to be
            able to wait for their rendering.
        */await (0,external_clientnode_.timeout)();void this.waitForNestedComponentRendering().then(()=>{this.applyBindings(this.hostDomNode.firstChild,this.scope,this.self.renderSlots,false,true)});await this.resolveRenderingPromiseIfSet(reason,resolveRendering)}/**
     * Should free up memory listeners related to deprecated HTML.
     * @param _reason - Description why rendering is necessary.
     * @param _reRenderReason - Description why a re-rendering is necessary.
     */unRender(_reason="unknown",_reRenderReason){this.unregisterDomNodeEventBindings()}/// endregion
// endregion
},Web_defineProperty(_Web,"applyRootBinding",true),Web_defineProperty(_Web,"pendingRenderPromises",[]),Web_defineProperty(_Web,"content","<slot>Please provide a template to transclude.</slot>"),Web_defineProperty(_Web,"determineRootBinding",true),Web_defineProperty(_Web,"shadowDOM",null),Web_defineProperty(_Web,"observedAttributes",[]),Web_defineProperty(_Web,"controllableProperties",[]),Web_defineProperty(_Web,"eventToPropertyMapping",{}),Web_defineProperty(_Web,"propertyAliases",{}),Web_defineProperty(_Web,"propertyTypes",{onClick:property_types_.func}),Web_defineProperty(_Web,"propertiesToReflectAsAttributes",[]),Web_defineProperty(_Web,"renderProperties",["children"]),Web_defineProperty(_Web,"doRender",false),Web_defineProperty(_Web,"cloneSlots",false),Web_defineProperty(_Web,"evaluateSlots",false),Web_defineProperty(_Web,"renderSlots",true),Web_defineProperty(_Web,"trimSlots",true),Web_defineProperty(_Web,"renderUnsafe",false),Web_defineProperty(_Web,"_name","BaseWeb"),Web_defineProperty(_Web,"_propertyAliasIndex",void 0),Web_defineProperty(_Web,"_propertiesToReflectAsAttributes",void 0),_Web),_descriptor=_applyDecoratedDescriptor(_class.prototype,"isRoot",[_dec],{configurable:true,enumerable:true,writable:true,initializer:function(){return true}}),_class);const api=(/* unused pure expression or super */ null && ({component:Web,register:(tagName=(0,external_clientnode_.camelCaseToDelimited)(Web._name))=>{customElements.define(tagName,Web)}}));/* harmony default export */ const src_Web = ((/* unused pure expression or super */ null && (Web)));


;// ./src/index.ts
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module web-internationalization *//* !
    region header
    [Project page](https://tsickert.com/web-internationalization)

    Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 4.0 international license.
    See https://creativecommons.org/licenses/by/4.0/deed.de
    endregion
*/// region imports
var src_dec,_dec2,_dec3,_dec4,_dec5,src_class,src_descriptor,_descriptor2,_descriptor3,_descriptor4,_descriptor5,_WebInternationalization;function src_initializerDefineProperty(e,i,r,l){r&&Object.defineProperty(e,i,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(l):void 0})}function src_defineProperty(r,t,o){return(t=src_toPropertyKey(t))in r?Object.defineProperty(r,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[t]=o,r}function src_toPropertyKey(r){var o=src_toPrimitive(r,"string");return"symbol"==typeof o?o:o+""}function src_toPrimitive(t,e){if("object"!=typeof t||!t)return t;var r;if("undefined"!=typeof Symbol&&void 0!==(r=t[Symbol.toPrimitive])){var i=r.call(t,e||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function src_applyDecoratedDescriptor(i,e,r,n,l){var a={};return Object.keys(n).forEach(function(i){a[i]=n[i]}),a.enumerable=!!a.enumerable,a.configurable=!!a.configurable,("value"in a||a.initializer)&&(a.writable=!0),a=r.slice().reverse().reduce(function(r,n){return n(i,e,r)||r},a),l&&void 0!==a.initializer&&(a.value=a.initializer?a.initializer.call(l):void 0,a.initializer=void 0),void 0===a.initializer?(Object.defineProperty(i,e,a),null):a}function src_initializerWarningHelper(r,e){throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform.")};// endregion
const src_log=new dist/* Logger */.VyI({name:"web-internationalization"});// region plugins/classes
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
 */let WebInternationalization=(src_dec=decorator_property({type:property_types_object}),_dec2=decorator_property({type:func}),_dec3=decorator_property({type:func}),_dec4=decorator_property({type:func}),_dec5=decorator_property({type:func}),src_class=(_WebInternationalization=class WebInternationalization extends Web{// region public methods
/// region live-cycle
/**
     * Defines dynamic getter and setter interface and resolves a configuration
     * object. Initializes the map implementation.
     */constructor(){super();/*
            Babel property declaration transformation overwrites defined
            properties at the end of an implicit constructor. So we have to
            redefine them as long as we want to declare expected component
            interface properties to enable static type checks.
        */src_defineProperty(this,"self",WebInternationalization);// region api properties
src_initializerDefineProperty(this,"options",src_descriptor,this);src_initializerDefineProperty(this,"onEnsure",_descriptor2,this);src_initializerDefineProperty(this,"onSwitch",_descriptor3,this);src_initializerDefineProperty(this,"onEnsured",_descriptor4,this);src_initializerDefineProperty(this,"onSwitched",_descriptor5,this);// endregion
src_defineProperty(this,"switchLanguageButtonDomNodes",null);src_defineProperty(this,"languageButtonEventHandler",[]);src_defineProperty(this,"currentLanguage","enUS");src_defineProperty(this,"knownTranslations",{});src_defineProperty(this,"lock",new dist/* Lock */.c_I);src_defineProperty(this,"_domNodesToFade",[]);src_defineProperty(this,"_replacements",[]);src_defineProperty(this,"_domNodesWithKnownTranslation",{});this.defineGetterAndSetterInterface()}/**
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
     */async switch(language,ensure=false){if(language!==true){// NOTE: Respect aliases like "de" for "deDE" as well.
const normalizedLanguage=this._normalizeLanguage(language);if(this.options.selection.length&&!this.options.selection.includes(language)&&!this.options.selection.includes(normalizedLanguage)){void src_log.debug(`"${language}" isn't one of the allowed languages.`);return}language=normalizedLanguage}await this.lock.acquire(this.options.lockDescription);if(language===true){ensure=true;language=this.currentLanguage}if(ensure||this.currentLanguage!==language){let actionDescription="Switch to";if(ensure)actionDescription="Ensure";void src_log.debug(`${actionDescription} "${language}".`);this._switchCurrentLanguageIndicator(language);if(ensure)await this.onEnsure(language);else await this.onSwitch(this.currentLanguage,language);this._domNodesToFade=[];this._replacements=[];this._collectDomNodesToReplace(language,ensure);await this._handleSwitchEffect(language,ensure);return}void src_log.debug(`"${language}" is already current selected language.`);void this.lock.release(this.options.lockDescription)}/**
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
     */_determineUsefulLanguage(){let result;if(this.options.initial)result=this.options.initial;else if(Object.prototype.hasOwnProperty.call(dist/* globalContext */.Lz6,"window"))if(dist/* globalContext */.Lz6.window?.localStorage.getItem(this.options.sessionDescription)){result=dist/* globalContext */.Lz6.window.localStorage.getItem(this.options.sessionDescription);void src_log.debug(`Determine "${result}", because of local storage`,"information.")}else if(dist/* globalContext */.Lz6.window?.navigator.language){result=dist/* globalContext */.Lz6.window.navigator.language;void src_log.debug(`Determine "${result}", because of browser settings.`)}if(!result){result=this.options.default;void src_log.debug(`Determine "${result}", because of default option.`)}result=this._normalizeLanguage(result);if(this.options.selection.length&&!this.options.selection.includes(result)){void src_log.debug(`"${result}" isn't one of the allowed languages. Set`,`language to "${this.options.selection[0]}".`);result=this.options.selection[0]}if(dist/* globalContext */.Lz6.window?.localStorage)dist/* globalContext */.Lz6.window.localStorage.setItem(this.options.sessionDescription,result);return result}/**
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
     */_switchLanguage(language){for(const replacement of this._replacements){const currentText=this._getCurrentNodeText(replacement.domNodeToTranslate);const trimmedText=currentText.trim();if(!this.options.templateDelimiter||!trimmedText.endsWith(this.options.templateDelimiter.post)&&this.options.templateDelimiter.post){const currentLanguageDomNode=this._resolveCurrentLanguageDomNode(replacement);const currentLanguage=currentLanguageDomNode.textContent;if(currentLanguage&&language===currentLanguage)void src_log.warn(`Text node "${replacement.textToReplaceWith}" is`,`marked as "${currentLanguage}" and has same`,"translation language as it already is.");// Move markup to be replaced next its parent node.
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
},src_defineProperty(_WebInternationalization,"_name","WebInternationalization"),src_defineProperty(_WebInternationalization,"_defaultOptions",{currentLanguageIndicatorClassName:"current",currentLanguagePattern:"^[a-z]{2}[A-Z]{2}$",default:"enUS",useEffect:true,initial:null,languageHashPrefix:"lang-",languageMapping:{deDE:["de","de_de","de-de","german","deutsch"],enUS:["en","en_us","en-us"],enEN:["en_en","en-en","english"],frFR:["fr","fr_fr","fr-fr","french"]},lockDescription:"{1}Switch",preReplacementLanguagePattern:"^\\|({1})$",alternativeDomNodeNames:["lang-alternative"],replaceDomNodeNames:["#text","lang-replace"],replacementDomNodeNames:["#comment","lang-replacement"],replacementLanguagePattern:"^([a-z]{2}[A-Z]{2}):((.|\\s)*)$",selection:[],selectors:{knownTranslation:".web-internationalization-generated-content",hideClassName:"wi-hide"},sessionDescription:"{1}",templateDelimiter:{pre:"{{",post:"}}"}}),_WebInternationalization),src_descriptor=src_applyDecoratedDescriptor(src_class.prototype,"options",[src_dec],{configurable:true,enumerable:true,writable:true,initializer:function(){return{}}}),_descriptor2=src_applyDecoratedDescriptor(src_class.prototype,"onEnsure",[_dec2],{configurable:true,enumerable:true,writable:true,initializer:function(){return dist/* NOOP */.tEg}}),_descriptor3=src_applyDecoratedDescriptor(src_class.prototype,"onSwitch",[_dec3],{configurable:true,enumerable:true,writable:true,initializer:function(){return dist/* NOOP */.tEg}}),_descriptor4=src_applyDecoratedDescriptor(src_class.prototype,"onEnsured",[_dec4],{configurable:true,enumerable:true,writable:true,initializer:function(){return dist/* NOOP */.tEg}}),_descriptor5=src_applyDecoratedDescriptor(src_class.prototype,"onSwitched",[_dec5],{configurable:true,enumerable:true,writable:true,initializer:function(){return dist/* NOOP */.tEg}}),src_class);// endregion
const src_api={component:WebInternationalization,register:(tagName=(0,dist/* camelCaseToDelimited */.h1R)(WebInternationalization._name))=>{customElements.define(tagName,WebInternationalization)}};/* harmony default export */ const src = (WebInternationalization);if(dist/* globalContext */.Lz6.AUTO_DEFINE_WEB_INTERNATIONALIZATION)src_api.register();
export { WebInternationalization, src_api as api, src as default, src_log as log };
