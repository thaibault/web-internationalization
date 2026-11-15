if(typeof window==='undefined'||window===null)var window=(typeof globalThis==='undefined'||globalThis===null)?{}:globalThis;import "core-js/modules/es.iterator.for-each.js";
import "core-js/modules/es.iterator.reduce.js";
import "core-js/modules/es.array.push.js";
import "core-js/modules/es.iterator.constructor.js";
import "core-js/modules/es.iterator.map.js";
import { Lock as __WEBPACK_EXTERNAL_MODULE_clientnode_Lock__, Logger as __WEBPACK_EXTERNAL_MODULE_clientnode_Logger__, NOOP as __WEBPACK_EXTERNAL_MODULE_clientnode_NOOP__, camelCaseToDelimited as __WEBPACK_EXTERNAL_MODULE_clientnode_camelCaseToDelimited__, closest as __WEBPACK_EXTERNAL_MODULE_clientnode_closest__, extend as __WEBPACK_EXTERNAL_MODULE_clientnode_extend__, fadeIn as __WEBPACK_EXTERNAL_MODULE_clientnode_fadeIn__, fadeOut as __WEBPACK_EXTERNAL_MODULE_clientnode_fadeOut__, format as __WEBPACK_EXTERNAL_MODULE_clientnode_format__, getAll as __WEBPACK_EXTERNAL_MODULE_clientnode_getAll__, getText as __WEBPACK_EXTERNAL_MODULE_clientnode_getText__, globalContext as __WEBPACK_EXTERNAL_MODULE_clientnode_globalContext__ } from "clientnode";
import { func as __WEBPACK_EXTERNAL_MODULE_clientnode_property_types_4789ebe2_func__, object as __WEBPACK_EXTERNAL_MODULE_clientnode_property_types_4789ebe2_object__ } from "clientnode/property-types";
import { property as __WEBPACK_EXTERNAL_MODULE_web_component_wrapper_decorator_a680de5c_property__ } from "web-component-wrapper/decorator";
import { Web as __WEBPACK_EXTERNAL_MODULE_web_component_wrapper_Web_aacc6608_Web__ } from "web-component-wrapper/Web";

;// external "core-js/modules/es.iterator.for-each.js"

;// external "core-js/modules/es.iterator.reduce.js"

;// external "core-js/modules/es.array.push.js"

;// external "core-js/modules/es.iterator.constructor.js"

;// external "core-js/modules/es.iterator.map.js"

;// external "clientnode"

;// external "clientnode/property-types"

;// external "web-component-wrapper/decorator"

;// external "web-component-wrapper/Web"

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
function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)};var _dec,_dec2,_dec3,_dec4,_dec5,_class,_descriptor,_descriptor2,_descriptor3,_descriptor4,_descriptor5,_WebInternationalization;function _slicedToArray(e,i){return _iterableToArrayLimit(e,i)||_unsupportedIterableToArray(e,i)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArrayLimit(r,t){var e=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(Array.isArray(r)&&(null==e||e===("undefined"!=typeof Symbol&&[][Symbol.iterator])||e===[]["@@iterator"]))return r;if(null!=e){var l,n,i,a,u=[],o=!0,f=!1;try{if(i=(e=e.call(r)).next,0===t){if(Object(e)!==e)return;o=!1}else for(;!(o=(l=i.call(e)).done)&&(u.push(l.value),u.length!==t);o=!0);}catch(r){f=!0,n=r}finally{try{if(!o&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(f)throw n}}return u}};function _createForOfIteratorHelper(e,t){var _n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!_n){if(Array.isArray(e)||(_n=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){_n&&(e=_n);var o=0,F=function F(){};return{s:F,n:function n(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function e(r){throw r},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u,i=!0;return{s:function s(){_n=_n.call(e)},n:function n(){i=!0;var r=_n.next();return r.done?{done:!0}:{value:r.value,done:i=!1}},e:function e(r){a=!0,u=r},f:function f(){try{i||null==_n.return||_n.return()}finally{if(a)throw u}}}}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var o={}.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}function _regenerator(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var r,e,o="function"==typeof Symbol?Symbol:{},n=o.iterator||"@@iterator",a=o.toStringTag||"@@toStringTag";function i(o,n,a,i){var u=n&&n.prototype instanceof Generator?n:Generator,f=Object.create(u.prototype);return _regeneratorDefine2(f,"_invoke",function(t,o,n){var a,i,u,f=0,p=n||[],y=!1,G={p:0,n:0,v:r,a:l,f:l.bind(r,4),d:function d(t,e){return a=t,i=0,u=r,G.n=e,c}};function l(t,o){for(i=t,u=o,e=0;!y&&f&&!n&&e<p.length;e++){var n,a=p[e],l=G.p,F=a[2];t>3?(n=F===o)&&(u=a[(i=a[4])?5:(i=3,3)],a[4]=a[5]=r):a[0]<=l&&((n=t<2&&l<a[1])?(i=0,G.v=o,G.n=a[1]):l<F&&(n=t<3||a[0]>o||o>F)&&(a[4]=t,a[5]=o,G.n=F,i=0))}if(n||t>1)return c;throw y=!0,o}return function(n,p,F){if(f>1)throw TypeError("Generator is already running");for(y&&1===p&&l(p,F),i=p,u=F;(e=i<2?r:u)||!y;){a||(i?i<3?(i>1&&(G.n=-1),l(i,u)):G.n=u:G.v=u);try{if(f=2,a){if(i||(n="next"),e=a[n]){if(!(e=e.call(a,u)))throw TypeError("iterator result is not an object");if(!e.done)return e;u=e.value,i<2&&(i=0)}else 1===i&&(e=a.return)&&e.call(a),i<2&&(u=TypeError("The iterator does not provide a '"+n+"' method"),i=1);a=r}else if((e=(y=G.n<0)?u:t.call(o,G))!==c)break}catch(t){a=r,i=1,u=t}finally{f=1}}return{value:e,done:y}}}(o,a,i),!0),f}var c={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}e=Object.getPrototypeOf;var u=[][n]?e(e([][n]())):(_regeneratorDefine2(e={},n,function(){return this}),e),f=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(u);function p(r){return Object.setPrototypeOf?Object.setPrototypeOf(r,GeneratorFunctionPrototype):(r.__proto__=GeneratorFunctionPrototype,_regeneratorDefine2(r,a,"GeneratorFunction")),r.prototype=Object.create(f),r}return GeneratorFunction.prototype=GeneratorFunctionPrototype,_regeneratorDefine2(f,"constructor",GeneratorFunctionPrototype),_regeneratorDefine2(GeneratorFunctionPrototype,"constructor",GeneratorFunction),GeneratorFunction.displayName="GeneratorFunction",_regeneratorDefine2(GeneratorFunctionPrototype,a,"GeneratorFunction"),_regeneratorDefine2(f),_regeneratorDefine2(f,a,"Generator"),_regeneratorDefine2(f,n,function(){return this}),_regeneratorDefine2(f,"toString",function(){return"[object Generator]"}),(_regenerator=function _regenerator(){return{w:i,m:p}})()}function _regeneratorDefine2(e,r,n,t){var i=Object.defineProperty;try{i({},"",{})}catch(e){i=0}_regeneratorDefine2=function _regeneratorDefine(e,r,n,t){function o(r,n){_regeneratorDefine2(e,r,function(e){return this._invoke(r,n,e)})}r?i?i(e,r,{value:n,enumerable:!t,configurable:!t,writable:!t}):e[r]=n:(o("next",0),o("throw",1),o("return",2))},_regeneratorDefine2(e,r,n,t)}function asyncGeneratorStep(n,t,e,r,o,a,c){try{var i=n[a](c),u=i.value}catch(n){return void e(n)}i.done?t(u):Promise.resolve(u).then(r,o)}function _asyncToGenerator(n){return function(){var t=this,e=arguments;return new Promise(function(r,o){var a=n.apply(t,e);function _next(n){asyncGeneratorStep(a,r,o,_next,_throw,"next",n)}function _throw(n){asyncGeneratorStep(a,r,o,_next,_throw,"throw",n)}_next(void 0)})}}function _initializerDefineProperty(e,i,r,l){r&&Object.defineProperty(e,i,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(l):void 0})}function _classCallCheck(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(r,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,_toPropertyKey(i.key),i)}}function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function _inherits(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),r&&_setPrototypeOf(t,r)}function _setPrototypeOf(t,e){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},_setPrototypeOf(t,e)}function _callSuper(e,c,p){return c=_getPrototypeOf(c),_possibleConstructorReturn(e,_isNativeReflectConstruct()?Reflect.construct(c,p||[],_getPrototypeOf(e).constructor):c.apply(e,p))}function _possibleConstructorReturn(t,e){if(e&&("object"==_typeof(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}function _superPropGet(r,e,p,f){var n=_get(_getPrototypeOf(1&f?r.prototype:r),e,p);return 2&f&&"function"==typeof n?function(t){return n.apply(p,t)}:n}function _get(){return _get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,r,n){var l=_superPropBase(t,r);if(l){var f=Object.getOwnPropertyDescriptor(l,r);return f.get?f.get.call(arguments.length<3?t:n):f.value}},_get.apply(null,arguments)}function _superPropBase(o,t){for(;!{}.hasOwnProperty.call(o,t)&&null!==(o=_getPrototypeOf(o)););return o}function _getPrototypeOf(t){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},_getPrototypeOf(t)}function _defineProperty(r,t,o){return(t=_toPropertyKey(t))in r?Object.defineProperty(r,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[t]=o,r}function _toPropertyKey(r){var o=_toPrimitive(r,"string");return"symbol"==_typeof(o)?o:o+""}function _toPrimitive(t,e){if("object"!=_typeof(t)||!t)return t;var r;if("undefined"!=typeof Symbol&&void 0!==(r=t[Symbol.toPrimitive])){var i=r.call(t,e||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function _applyDecoratedDescriptor(i,e,r,n,l){var a={};return Object.keys(n).forEach(function(i){a[i]=n[i]}),a.enumerable=!!a.enumerable,a.configurable=!!a.configurable,("value"in a||a.initializer)&&(a.writable=!0),a=r.slice().reverse().reduce(function(r,n){return n(i,e,r)||r},a),l&&void 0!==a.initializer&&(a.value=a.initializer?a.initializer.call(l):void 0,a.initializer=void 0),void 0===a.initializer?(Object.defineProperty(i,e,a),null):a}function _initializerWarningHelper(r,e){throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform.")};// endregion
var log=new __WEBPACK_EXTERNAL_MODULE_clientnode_Logger__({name:"web-internationalization"});// region plugins/classes
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
 */var WebInternationalization=(_dec=__WEBPACK_EXTERNAL_MODULE_web_component_wrapper_decorator_a680de5c_property__({type:__WEBPACK_EXTERNAL_MODULE_clientnode_property_types_4789ebe2_object__}),_dec2=__WEBPACK_EXTERNAL_MODULE_web_component_wrapper_decorator_a680de5c_property__({type:__WEBPACK_EXTERNAL_MODULE_clientnode_property_types_4789ebe2_func__}),_dec3=__WEBPACK_EXTERNAL_MODULE_web_component_wrapper_decorator_a680de5c_property__({type:__WEBPACK_EXTERNAL_MODULE_clientnode_property_types_4789ebe2_func__}),_dec4=__WEBPACK_EXTERNAL_MODULE_web_component_wrapper_decorator_a680de5c_property__({type:__WEBPACK_EXTERNAL_MODULE_clientnode_property_types_4789ebe2_func__}),_dec5=__WEBPACK_EXTERNAL_MODULE_web_component_wrapper_decorator_a680de5c_property__({type:__WEBPACK_EXTERNAL_MODULE_clientnode_property_types_4789ebe2_func__}),_class=(_WebInternationalization=/*#__PURE__*/function(_Web){// region public methods
/// region live-cycle
/**
     * Defines dynamic getter and setter interface and resolves a configuration
     * object. Initializes the map implementation.
     */function WebInternationalization(){var _this;_classCallCheck(this,WebInternationalization);_this=_callSuper(this,WebInternationalization);/*
            Babel property declaration transformation overwrites defined
            properties at the end of an implicit constructor. So we have to
            redefine them as long as we want to declare expected component
            interface properties to enable static type checks.
        */_defineProperty(_this,"self",WebInternationalization);// region api properties
_initializerDefineProperty(_this,"options",_descriptor,_this);_initializerDefineProperty(_this,"onEnsure",_descriptor2,_this);_initializerDefineProperty(_this,"onSwitch",_descriptor3,_this);_initializerDefineProperty(_this,"onEnsured",_descriptor4,_this);_initializerDefineProperty(_this,"onSwitched",_descriptor5,_this);// endregion
_defineProperty(_this,"switchLanguageButtonDomNodes",null);_defineProperty(_this,"languageButtonEventHandler",[]);_defineProperty(_this,"currentLanguage","enUS");_defineProperty(_this,"knownTranslations",{});_defineProperty(_this,"lock",new __WEBPACK_EXTERNAL_MODULE_clientnode_Lock__);_defineProperty(_this,"_domNodesToFade",[]);_defineProperty(_this,"_replacements",[]);_defineProperty(_this,"_domNodesWithKnownTranslation",{});_this.defineGetterAndSetterInterface();return _this}/**
     * Triggered when ever a given attribute has changed and triggers to update
     * configured dom content.
     * @param name - Attribute name which was updates.
     * @param newValue - New updated value.
     * @returns Returns when attribute has been updated.
     */_inherits(WebInternationalization,_Web);return _createClass(WebInternationalization,[{key:"onUpdateAttribute",value:(function(){var _onUpdateAttribute=_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(name,newValue){return _regenerator().w(function(_context){while(1)switch(_context.n){case 0:_context.n=1;return _superPropGet(WebInternationalization,"onUpdateAttribute",this,3)([name,newValue]);case 1:if(name==="options")this._extendOptions();case 2:return _context.a(2)}},_callee,this)}));function onUpdateAttribute(_x,_x2){return _onUpdateAttribute.apply(this,arguments)}return onUpdateAttribute}()/**
     * Updates controlled dom elements.
     * @param reason - Why an update has been triggered.
     * @param resolveRendering - Indicates whether rendering should be resolved
     * finally. Should be set to "false" via super calls in inherited render
     * methods which do further dom manipulations afterward and resolve the
     * rendering process by their own.
     * @returns A promise resolving when rendering has finished. A promise may
     * be needed for classes inheriting from this class.
     */)},{key:"render",value:(function(){var _render=_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(reason,resolveRendering){var newLanguage;return _regenerator().w(function(_context2){while(1)switch(_context2.n){case 0:if(reason===void 0){reason="unknown"}if(resolveRendering===void 0){resolveRendering=true}_context2.n=1;return _superPropGet(WebInternationalization,"render",this,3)([reason,false]);case 1:if(Object.keys(this.options).length===0)this._extendOptions();this.options.preReplacementLanguagePattern=__WEBPACK_EXTERNAL_MODULE_clientnode_format__(this.options.preReplacementLanguagePattern,this.options.replacementLanguagePattern.substring(1,this.options.replacementLanguagePattern.length-1));this.options.lockDescription=__WEBPACK_EXTERNAL_MODULE_clientnode_format__(this.options.lockDescription,this.self._name);this.options.sessionDescription=__WEBPACK_EXTERNAL_MODULE_clientnode_format__(this.options.sessionDescription,this.self._name);_context2.n=2;return this.waitForNestedComponentRendering();case 2:this._movePreReplacementNodes();this.currentLanguage=this._normalizeLanguage(this.options.default);/*
            NOTE: Only switch current language indicator if we haven't an
            initial language switch which will perform the indicator switch.
        */newLanguage=this._determineUsefulLanguage();this.refreshLanguageButtonDomNodesBinding();if(!(this.currentLanguage===newLanguage)){_context2.n=4;break}_context2.n=3;return this.refresh();case 3:_context2.n=5;break;case 4:_context2.n=5;return this.switch(newLanguage,true);case 5:_context2.n=6;return this.resolveRenderingPromiseIfSet(reason,resolveRendering);case 6:return _context2.a(2)}},_callee2,this)}));function render(_x3,_x4){return _render.apply(this,arguments)}return render}()/// endregion
)},{key:"refreshLanguageButtonDomNodesBinding",value:function refreshLanguageButtonDomNodesBinding(){var _this2=this;this.switchLanguageButtonDomNodes=this.hostDomNode.querySelectorAll("a[href^=\"#".concat(this.options.languageHashPrefix,"\"]"));var determineSelection=this.options.selection.length===0;var _iterator=_createForOfIteratorHelper(this.languageButtonEventHandler),_step;try{for(_iterator.s();!(_step=_iterator.n()).done;){var deregister=_step.value;deregister()}}catch(err){_iterator.e(err)}finally{_iterator.f()}this.languageButtonEventHandler=[];var _iterator2=_createForOfIteratorHelper(this.switchLanguageButtonDomNodes),_step2;try{for(_iterator2.s();!(_step2=_iterator2.n()).done;){var domNode=_step2.value;if(determineSelection)this.options.selection.push(domNode.getAttribute("href").substring("#".concat(this.options.languageHashPrefix).length));var handler=function handler(event){var _event$target;event.preventDefault();var url=(_event$target=event.target)===null||_event$target===void 0?void 0:_event$target.getAttribute("href");if(url)void _this2.switch(url.substring(_this2.options.languageHashPrefix.length+1))};this.languageButtonEventHandler.push(this.addSecureEventListener(domNode,"click",handler))}}catch(err){_iterator2.e(err)}finally{_iterator2.f()}}/**
     * Switches the current language to a given language. This method is
     * mutually synchronized.
     * @param language - New language as string or "true". If set to "true" it
     * indicates that the dom tree should be checked again current language to
     * ensure every text node has the right content.
     * @param ensure - Indicates if a switch effect should be avoided.
     * @returns Returns the current instance wrapped in a promise.
     */},{key:"switch",value:(function(){var _switch2=_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(language,ensure){var normalizedLanguage,actionDescription;return _regenerator().w(function(_context3){while(1)switch(_context3.n){case 0:if(ensure===void 0){ensure=false}if(!(language!==true)){_context3.n=2;break}// NOTE: Respect aliases like "de" for "deDE" as well.
normalizedLanguage=this._normalizeLanguage(language);if(!(this.options.selection.length&&!this.options.selection.includes(language)&&!this.options.selection.includes(normalizedLanguage))){_context3.n=1;break}void log.debug("\"".concat(language,"\" isn't one of the allowed languages."));return _context3.a(2);case 1:language=normalizedLanguage;case 2:_context3.n=3;return this.lock.acquire(this.options.lockDescription);case 3:if(language===true){ensure=true;language=this.currentLanguage}if(!(ensure||this.currentLanguage!==language)){_context3.n=8;break}actionDescription="Switch to";if(ensure)actionDescription="Ensure";void log.debug("".concat(actionDescription," \"").concat(language,"\"."));this._switchCurrentLanguageIndicator(language);if(!ensure){_context3.n=5;break}_context3.n=4;return this.onEnsure(language);case 4:_context3.n=6;break;case 5:_context3.n=6;return this.onSwitch(this.currentLanguage,language);case 6:this._domNodesToFade=[];this._replacements=[];this._collectDomNodesToReplace(language,ensure);_context3.n=7;return this._handleSwitchEffect(language,ensure);case 7:return _context3.a(2);case 8:void log.debug("\"".concat(language,"\" is already current selected language."));void this.lock.release(this.options.lockDescription);case 9:return _context3.a(2)}},_callee3,this)}));function _switch(_x5,_x6){return _switch2.apply(this,arguments)}return _switch}()/**
     * Ensures current selected language.
     * @returns Promise resolving to nothing when switching as finished.
     */)},{key:"refresh",value:function refresh(){this._movePreReplacementNodes();return this.switch(true)}/// endregion
// region protected methods
/**
     * Extends given options by default options.
     */},{key:"_extendOptions",value:function _extendOptions(){/*
            NOTE: Using the internal setter avoids triggering an additional
            rendering.
        */this.setPropertyValue("options",__WEBPACK_EXTERNAL_MODULE_clientnode_extend__(true,{},this.self._defaultOptions,this.options))}/**
     * Depending on activated switching effect this method initialized the
     * effect of replace all text string directly.
     * @param language - New language to use.
     * @param ensure - Indicates if current language should be ensured again
     * every text node content.
     * @returns Returns the current instance wrapped in a promise.
     */},{key:"_handleSwitchEffect",value:(function(){var _handleSwitchEffect2=_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(language,ensure){var oldLanguage;return _regenerator().w(function(_context4){while(1)switch(_context4.n){case 0:oldLanguage=this.currentLanguage;if(!(!ensure&&this.options.useEffect&&this._domNodesToFade.length>0)){_context4.n=3;break}_context4.n=1;return Promise.all(this._domNodesToFade.map(function(domNode){var handler=__WEBPACK_EXTERNAL_MODULE_clientnode_fadeOut__(domNode);return handler.then(function(){handler.resetStyles()})}));case 1:this._switchLanguage(language);_context4.n=2;return Promise.all(this._domNodesToFade.map(function(domNode){var handler=__WEBPACK_EXTERNAL_MODULE_clientnode_fadeIn__(domNode);return handler.then(function(){handler.resetStyles()})}));case 2:this.onSwitched(oldLanguage,language);void this.lock.release(this.options.lockDescription);return _context4.a(2);case 3:this._switchLanguage(language);if(ensure)this.onEnsured(language);else this.onSwitched(oldLanguage,language);void this.lock.release(this.options.lockDescription);case 4:return _context4.a(2)}},_callee4,this)}));function _handleSwitchEffect(_x7,_x8){return _handleSwitchEffect2.apply(this,arguments)}return _handleSwitchEffect}()/**
     * Moves pre-replacement dom nodes into the next dom node behind the
     * translation text to use the same translation algorithm for both.
     */)},{key:"_movePreReplacementNodes",value:function _movePreReplacementNodes(){var _iterator3=_createForOfIteratorHelper(__WEBPACK_EXTERNAL_MODULE_clientnode_getAll__(this.hostDomNode)),_step3;try{for(_iterator3.s();!(_step3=_iterator3.n()).done;){var domNode=_step3.value;var nodeName=domNode.nodeName.toLowerCase();if(this.options.replacementDomNodeNames.includes(nodeName)){var _domNode$textContent;if(!["#comment","#text"].includes(nodeName))// NOTE: Hide replacement dom nodes.
domNode.classList.add(this.options.selectors.hideClassName);var regularExpression=new RegExp(this.options.preReplacementLanguagePattern);var match=(_domNode$textContent=domNode.textContent)===null||_domNode$textContent===void 0?void 0:_domNode$textContent.match(regularExpression);if(domNode.textContent&&match&&match[0]){domNode.textContent=domNode.textContent.replace(regularExpression,match[1]);if(domNode.parentElement){var selfFound=false;var _iterator4=_createForOfIteratorHelper(__WEBPACK_EXTERNAL_MODULE_clientnode_getAll__(domNode.parentElement)),_step4;try{for(_iterator4.s();!(_step4=_iterator4.n()).done;){var subDomNode=_step4.value;if(selfFound&&__WEBPACK_EXTERNAL_MODULE_clientnode_getText__(subDomNode,true).length>0){subDomNode.appendChild(domNode);break}if(domNode===subDomNode)selfFound=true}}catch(err){_iterator4.e(err)}finally{_iterator4.f()}}}}}}catch(err){_iterator3.e(err)}finally{_iterator3.f()}}/**
     * Collects all text nodes that should be replaced later.
     * @param language - New language to use.
     * @param ensure - Indicates if the whole dom should be checked again
     * current language to ensure every text node has right content.
     */},{key:"_collectDomNodesToReplace",value:function _collectDomNodesToReplace(language,ensure){var currentDomNodeToTranslate=null;var currentLanguageDomNode=null;this.knownTranslations={};var _iterator5=_createForOfIteratorHelper(__WEBPACK_EXTERNAL_MODULE_clientnode_getAll__(this.hostDomNode)),_step5;try{for(_iterator5.s();!(_step5=_iterator5.n()).done;){var domNode=_step5.value;var nodeName=domNode.nodeName.toLowerCase();var nodeTextContent=__WEBPACK_EXTERNAL_MODULE_clientnode_getText__(domNode,true);// NOTE: We skip empty and nested nodes.
if(this._shouldSkipDomNode(domNode,nodeTextContent,currentDomNodeToTranslate))continue;if(this.options.replaceDomNodeNames.includes(nodeName))currentDomNodeToTranslate=domNode;else if(this.options.alternativeDomNodeNames.includes(nodeName)){if(!domNode.hasAttribute("lang"))this._initializeCurrentLanguageDomNode(domNode,ensure);else if(domNode.getAttribute("lang")===language)this._processAlternativeDomNode(domNode,language,ensure,currentLanguageDomNode)}else if(currentDomNodeToTranslate){if(this.options.replacementDomNodeNames.includes(nodeName)){;var _this$_processReplace=this._processReplacementDomNode(domNode,nodeName,language,ensure,currentDomNodeToTranslate,currentLanguageDomNode);currentDomNodeToTranslate=_this$_processReplace.domNodeToTranslate;currentLanguageDomNode=_this$_processReplace.languageDomNode;continue}currentDomNodeToTranslate=null;currentLanguageDomNode=null}}}catch(err){_iterator5.e(err)}finally{_iterator5.f()}this._registerKnownTextNodes()}/**
     * Determines whether a given dom node should be skipped during
     * translation collection.
     * @param domNode - The dom node to evaluate.
     * @param nodeTextContent - Pre-computed text content of the node.
     * @param currentDomNodeToTranslate - The currently tracked translation
     * ancestor node.
     * @returns Returns true if the node should be skipped.
     */},{key:"_shouldSkipDomNode",value:function _shouldSkipDomNode(domNode,nodeTextContent,currentDomNodeToTranslate){return nodeTextContent.length===0&&(domNode.nodeType!==Node.COMMENT_NODE||(domNode.nodeValue||"").trim()==="")||Boolean(currentDomNodeToTranslate===null||currentDomNodeToTranslate===void 0?void 0:currentDomNodeToTranslate.contains(domNode))||Boolean(__WEBPACK_EXTERNAL_MODULE_clientnode_closest__(domNode,this.options.replaceDomNodeNames.concat(this.options.replacementDomNodeNames).join(","),true))}/**
     * Processes an alternative dom node by finding its active sibling,
     * ensuring it has the necessary attributes and registering it for
     * replacement.
     * @param domNode - The alternative language dom node.
     * @param language - New language to use.
     * @param ensure - Indicates if current language should be ensured again
     * every text node content.
     * @param currentLanguageDomNode - The currently tracked language indicator
     * node.
     */},{key:"_processAlternativeDomNode",value:function _processAlternativeDomNode(domNode,language,ensure,currentLanguageDomNode){/*
            When dealing with alternative dom nodes we do not rely on dom node
            positions to keep them stable. Therefore, we identify the current
            dom node to translate by going through all siblings.
         */var activeSibling=null;var _iterator6=_createForOfIteratorHelper(domNode.parentElement.querySelectorAll(this.options.alternativeDomNodeNames.join(","))),_step6;try{for(_iterator6.s();!(_step6=_iterator6.n()).done;){var candidate=_step6.value;if(candidate.hasAttribute("active")||!candidate.hasAttribute("lang")){activeSibling=candidate;break}}}catch(err){_iterator6.e(err)}finally{_iterator6.f()}if(!activeSibling)return;this._initializeCurrentLanguageDomNode(activeSibling,ensure);this._registerTextNodeToChange(activeSibling,domNode,domNode.innerHTML,currentLanguageDomNode)}},{key:"_initializeCurrentLanguageDomNode",value:function _initializeCurrentLanguageDomNode(domNode,ensure){if(!domNode.hasAttribute("active"))domNode.setAttribute("active","");if(!domNode.hasAttribute("lang"))domNode.setAttribute("lang",ensure?this.options.default||this.currentLanguage:this.currentLanguage)}/**
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
     */},{key:"_processReplacementDomNode",value:function _processReplacementDomNode(domNode,nodeName,language,ensure,currentDomNodeToTranslate,currentLanguageDomNode){var content=nodeName==="#comment"?domNode.textContent:domNode.innerHTML;var match=content.match(new RegExp(this.options.replacementLanguagePattern));if(Array.isArray(match)&&match[1]===language){// Save known text translations.
this.knownTranslations[__WEBPACK_EXTERNAL_MODULE_clientnode_getText__(currentDomNodeToTranslate,true).join(" ")]=match[2].trim();currentLanguageDomNode=this._ensureLastTextNodeHavingLanguageIndicator(currentDomNodeToTranslate,currentLanguageDomNode,ensure);this._registerTextNodeToChange(currentDomNodeToTranslate,domNode,match[2],currentLanguageDomNode);return{domNodeToTranslate:null,languageDomNode:null}}if(domNode.textContent.match(new RegExp(this.options.currentLanguagePattern)))currentLanguageDomNode=domNode;return{domNodeToTranslate:currentDomNodeToTranslate,languageDomNode:currentLanguageDomNode}}/**
     * Iterates all text nodes in language known area with known translations.
     */},{key:"_registerKnownTextNodes",value:function _registerKnownTextNodes(){this._domNodesWithKnownTranslation={};var _iterator7=_createForOfIteratorHelper(this.hostDomNode.querySelectorAll(this.options.selectors.knownTranslation)),_step7;try{for(_iterator7.s();!(_step7=_iterator7.n()).done;){var domNode=_step7.value;var _iterator8=_createForOfIteratorHelper(__WEBPACK_EXTERNAL_MODULE_clientnode_getAll__(domNode)),_step8;try{for(_iterator8.s();!(_step8=_iterator8.n()).done;){var node=_step8.value;var content=__WEBPACK_EXTERNAL_MODULE_clientnode_getText__(node).join(" ");// NOTE: We skip empty and nested text nodes.
if(content&&!this.options.replaceDomNodeNames.includes(node.nodeName.toLowerCase())&&!__WEBPACK_EXTERNAL_MODULE_clientnode_closest__(node,this.options.replaceDomNodeNames.join(","),true)&&Object.prototype.hasOwnProperty.call(this.knownTranslations,content)){this._domNodesToFade.push(node.parentElement);if(Object.prototype.hasOwnProperty.call(this._domNodesWithKnownTranslation,this.knownTranslations[content]))this._domNodesWithKnownTranslation[this.knownTranslations[content]].push(node);else this._domNodesWithKnownTranslation[this.knownTranslations[content]]=[node]}}}catch(err){_iterator8.e(err)}finally{_iterator8.f()}}}catch(err){_iterator7.e(err)}finally{_iterator7.f()}}/**
     * Normalizes a given language string.
     * @param language - New language to use.
     * @returns Returns the normalized version of given language.
     */},{key:"_normalizeLanguage",value:function _normalizeLanguage(language){for(var _i=0,_Object$entries=Object.entries(this.options.languageMapping);_i<_Object$entries.length;_i++){var _Object$entries$_i=_slicedToArray(_Object$entries[_i],2),otherLanguage=_Object$entries$_i[0],aliases=_Object$entries$_i[1];if(!aliases.includes(otherLanguage.toLowerCase()))aliases.push(otherLanguage.toLowerCase());if(aliases.includes(language.toLowerCase()))return otherLanguage}return this.options.default}/**
     * Determines a useful initial language depending on session and browser
     * settings.
     * @returns Returns the determined language.
     */},{key:"_determineUsefulLanguage",value:function _determineUsefulLanguage(){var _globalContext$window,_globalContext$window2,_globalContext$window3;var result;if(this.options.initial)result=this.options.initial;else if(Object.prototype.hasOwnProperty.call(__WEBPACK_EXTERNAL_MODULE_clientnode_globalContext__,"window"))if((_globalContext$window=__WEBPACK_EXTERNAL_MODULE_clientnode_globalContext__.window)!==null&&_globalContext$window!==void 0&&_globalContext$window.localStorage.getItem(this.options.sessionDescription)){result=__WEBPACK_EXTERNAL_MODULE_clientnode_globalContext__.window.localStorage.getItem(this.options.sessionDescription);void log.debug("Determine \"".concat(result,"\", because of local storage"),"information.")}else if((_globalContext$window2=__WEBPACK_EXTERNAL_MODULE_clientnode_globalContext__.window)!==null&&_globalContext$window2!==void 0&&_globalContext$window2.navigator.language){result=__WEBPACK_EXTERNAL_MODULE_clientnode_globalContext__.window.navigator.language;void log.debug("Determine \"".concat(result,"\", because of browser settings."))}if(!result){result=this.options.default;void log.debug("Determine \"".concat(result,"\", because of default option."))}result=this._normalizeLanguage(result);if(this.options.selection.length&&!this.options.selection.includes(result)){void log.debug("\"".concat(result,"\" isn't one of the allowed languages. Set"),"language to \"".concat(this.options.selection[0],"\"."));result=this.options.selection[0]}if((_globalContext$window3=__WEBPACK_EXTERNAL_MODULE_clientnode_globalContext__.window)!==null&&_globalContext$window3!==void 0&&_globalContext$window3.localStorage)__WEBPACK_EXTERNAL_MODULE_clientnode_globalContext__.window.localStorage.setItem(this.options.sessionDescription,result);return result}/**
     * Registers a text node to change its content with a given replacement.
     * @param domNodeToTranslate - Text node with content to
     * translate.
     * @param domNodeToReplaceWith - A node with replacement content.
     * @param textToReplaceWith - Text content to use as replacement.
     * @param currentLanguageDomNode - A potential given text node indicating
     * the language of given text node.
     */},{key:"_registerTextNodeToChange",value:function _registerTextNodeToChange(domNodeToTranslate,domNodeToReplaceWith,textToReplaceWith,currentLanguageDomNode){this._domNodesToFade.push(domNodeToTranslate.parentElement);if(domNodeToReplaceWith)this._replacements.push({domNodeToTranslate:domNodeToTranslate,domNodeToReplaceWith:domNodeToReplaceWith,textToReplaceWith:textToReplaceWith,currentLanguageDomNode:currentLanguageDomNode})}/**
     * Checks if the last text node has a language indication comment node.
     * This function is called after each parsed dom text node.
     * @param lastTextNodeToTranslate - Last text node to check.
     * @param lastLanguageDomNode - A potential given language indication
     * commend node.
     * @param ensure - Indicates if current language should be ensured again
     * every text node content.
     * @returns Returns the retrieved or newly created language indicating
     * comment node.
     */},{key:"_ensureLastTextNodeHavingLanguageIndicator",value:function _ensureLastTextNodeHavingLanguageIndicator(lastTextNodeToTranslate,lastLanguageDomNode,ensure){if(lastTextNodeToTranslate&&!lastLanguageDomNode){var _globalContext$docume;/*
                Last text node doesn't have a current language indicating dom
                node.
            */var currentLocalLanguage=this.currentLanguage;if(ensure)currentLocalLanguage=this.options.default||this.currentLanguage;lastLanguageDomNode=((_globalContext$docume=__WEBPACK_EXTERNAL_MODULE_clientnode_globalContext__.document)===null||_globalContext$docume===void 0?void 0:_globalContext$docume.createComment(currentLocalLanguage))||null;if(lastLanguageDomNode)lastTextNodeToTranslate.after(lastLanguageDomNode)}return lastLanguageDomNode}/**
     * Performs the low-level text replacements for switching to a given
     * language.
     * @param language - The new language to switch to.
     */},{key:"_switchLanguage",value:function _switchLanguage(language){var _iterator9=_createForOfIteratorHelper(this._replacements),_step9;try{for(_iterator9.s();!(_step9=_iterator9.n()).done;){var replacement=_step9.value;var currentText=this._getCurrentNodeText(replacement.domNodeToTranslate);var trimmedText=currentText.trim();if(!this.options.templateDelimiter||!trimmedText.endsWith(this.options.templateDelimiter.post)&&this.options.templateDelimiter.post){var currentLanguageDomNode=this._resolveCurrentLanguageDomNode(replacement);var currentLanguage=currentLanguageDomNode.textContent;if(currentLanguage&&language===currentLanguage)void log.warn("Text node \"".concat(replacement.textToReplaceWith,"\" is"),"marked as \"".concat(currentLanguage,"\" and has same"),"translation language as it already is.");// Move markup to be replaced next its parent node.
var nodeName=replacement.domNodeToReplaceWith.nodeName.toLowerCase();if(this.options.alternativeDomNodeNames.includes(nodeName)){;replacement.domNodeToReplaceWith.setAttribute("active","");replacement.domNodeToTranslate.removeAttribute("active");continue}var newNode=this._createBackupNode(nodeName,currentLanguage,currentText,replacement.domNodeToTranslate);replacement.domNodeToTranslate.after(newNode);replacement.domNodeToTranslate.after(__WEBPACK_EXTERNAL_MODULE_clientnode_globalContext__.document.createComment(language));this._applyTextReplacement(replacement);currentLanguageDomNode.remove();replacement.domNodeToReplaceWith.remove()}}}catch(err){_iterator9.e(err)}finally{_iterator9.f()}this._updateKnownTextNodes();if(__WEBPACK_EXTERNAL_MODULE_clientnode_globalContext__.localStorage)__WEBPACK_EXTERNAL_MODULE_clientnode_globalContext__.localStorage.setItem(this.options.sessionDescription,language);this.currentLanguage=language}/**
     * Returns the current text content of a dom node, preferring innerHTML
     * over textContent when available.
     * @param domNode - The dom node to read the text content from.
     * @returns The current text content of the dom node.
     */},{key:"_getCurrentNodeText",value:function _getCurrentNodeText(domNode){return"innerHTML"in domNode?domNode.innerHTML:domNode.textContent}/**
     * Resolves the current language dom node for a given replacement. If the
     * node was not set initially it is determined by iterating through the
     * siblings and cached on the replacement object.
     * @param replacement - The replacement whose language dom node should be
     * resolved.
     * @returns The resolved language indicator dom node or null.
     */},{key:"_resolveCurrentLanguageDomNode",value:function _resolveCurrentLanguageDomNode(replacement){if(replacement.currentLanguageDomNode)return replacement.currentLanguageDomNode;/*
            Language dom node wasn't present initially. So we have to
            determine it now.
        */var currentLanguageDomNode=document.body;var currentDomNodeFound=false;var _iterator0=_createForOfIteratorHelper(__WEBPACK_EXTERNAL_MODULE_clientnode_getAll__(replacement.domNodeToTranslate.parentElement)),_step0;try{for(_iterator0.s();!(_step0=_iterator0.n()).done;){var domNode=_step0.value;if(currentDomNodeFound){replacement.currentLanguageDomNode=currentLanguageDomNode=domNode;break}if(domNode===replacement.domNodeToTranslate)currentDomNodeFound=true}}catch(err){_iterator0.e(err)}finally{_iterator0.f()}return currentLanguageDomNode}/**
     * Creates a backup node for the current dom node content before the
     * replacement is applied. Returns either a comment node or an element
     * node depending on `nodeName`.
     * @param nodeName - Lowercase node name of the replacement node.
     * @param currentLanguage - Current language string used as prefix.
     * @param currentText - Text content of the node to back up.
     * @param domNodeToTranslate - The dom node whose children are moved into
     * the backup element (for non-comment nodes).
     * @returns The created backup node.
     */},{key:"_createBackupNode",value:function _createBackupNode(nodeName,currentLanguage,currentText,domNodeToTranslate){if(nodeName==="#comment")return __WEBPACK_EXTERNAL_MODULE_clientnode_globalContext__.document.createComment("".concat(currentLanguage,":").concat(currentText));var newNode=__WEBPACK_EXTERNAL_MODULE_clientnode_globalContext__.document.createElement(nodeName);newNode.appendChild(__WEBPACK_EXTERNAL_MODULE_clientnode_globalContext__.document.createTextNode("".concat(currentLanguage,":")));newNode.classList.add(this.options.selectors.hideClassName);// NOTE: We need to use "Array.from" to copy the list.
for(var _i2=0,_Array$from=Array.from(domNodeToTranslate.childNodes);_i2<_Array$from.length;_i2++){var childNode=_Array$from[_i2];newNode.appendChild(childNode)}return newNode}/**
     * Applies the actual text replacement to the target dom node. Moves
     * child nodes from the replacement node or sets innerHTML/textContent
     * directly depending on the node type.
     * @param replacement - Replacement object containing source, target and
     * replacement text information.
     */},{key:"_applyTextReplacement",value:function _applyTextReplacement(replacement){if("innerHTML"in replacement.domNodeToTranslate){if(replacement.domNodeToReplaceWith.nodeName.toLowerCase()==="#comment")replacement.domNodeToTranslate.innerHTML=replacement.textToReplaceWith;else{var languageRemoved=false;// NOTE: We need to use "Array.from" to copy the list.
for(var _i3=0,_Array$from2=Array.from(replacement.domNodeToReplaceWith.childNodes);_i3<_Array$from2.length;_i3++){var childNode=_Array$from2[_i3];if(!languageRemoved){childNode.textContent=childNode.textContent.replace(/^[a-z]{2}[A-Z]{2}:/,"");languageRemoved=true}replacement.domNodeToTranslate.appendChild(childNode)}}}else replacement.domNodeToTranslate.textContent=replacement.textToReplaceWith}/**
     * Updates all dom nodes that have a known translation to their translated
     * text content.
     */},{key:"_updateKnownTextNodes",value:function _updateKnownTextNodes(){for(var _i4=0,_Object$entries2=Object.entries(this._domNodesWithKnownTranslation);_i4<_Object$entries2.length;_i4++){var _Object$entries2$_i=_slicedToArray(_Object$entries2[_i4],2),content=_Object$entries2$_i[0],domNodes=_Object$entries2$_i[1];var _iterator1=_createForOfIteratorHelper(domNodes),_step1;try{for(_iterator1.s();!(_step1=_iterator1.n()).done;){var domNode=_step1.value;domNode.textContent=content}}catch(err){_iterator1.e(err)}finally{_iterator1.f()}}}/**
     * Switches the current language indicator in language switch triggered dom
     * nodes.
     * @param language - The new language to switch to.
     */},{key:"_switchCurrentLanguageIndicator",value:function _switchCurrentLanguageIndicator(language){var _iterator10=_createForOfIteratorHelper(this.hostDomNode.querySelectorAll("a[href=\"#".concat(this.options.languageHashPrefix)+"".concat(this.currentLanguage,"\"].")+this.options.currentLanguageIndicatorClassName)),_step10;try{for(_iterator10.s();!(_step10=_iterator10.n()).done;){var domNode=_step10.value;domNode.classList.remove(this.options.currentLanguageIndicatorClassName)}}catch(err){_iterator10.e(err)}finally{_iterator10.f()}var _iterator11=_createForOfIteratorHelper(this.hostDomNode.querySelectorAll("a[href=\"#".concat(this.options.languageHashPrefix).concat(language,"\"]"))),_step11;try{for(_iterator11.s();!(_step11=_iterator11.n()).done;){var _domNode=_step11.value;_domNode.classList.add(this.options.currentLanguageIndicatorClassName)}}catch(err){_iterator11.e(err)}finally{_iterator11.f()}}// endregion
}])}(__WEBPACK_EXTERNAL_MODULE_web_component_wrapper_Web_aacc6608_Web__),_defineProperty(_WebInternationalization,"_name","WebInternationalization"),_defineProperty(_WebInternationalization,"_defaultOptions",{currentLanguageIndicatorClassName:"current",currentLanguagePattern:"^[a-z]{2}[A-Z]{2}$",default:"enUS",useEffect:true,initial:null,languageHashPrefix:"lang-",languageMapping:{deDE:["de","de_de","de-de","german","deutsch"],enUS:["en","en_us","en-us"],enEN:["en_en","en-en","english"],frFR:["fr","fr_fr","fr-fr","french"]},lockDescription:"{1}Switch",preReplacementLanguagePattern:"^\\|({1})$",alternativeDomNodeNames:["lang-alternative"],replaceDomNodeNames:["#text","lang-replace"],replacementDomNodeNames:["#comment","lang-replacement"],replacementLanguagePattern:"^([a-z]{2}[A-Z]{2}):((.|\\s)*)$",selection:[],selectors:{knownTranslation:".web-internationalization-generated-content",hideClassName:"wi-hide"},sessionDescription:"{1}",templateDelimiter:{pre:"{{",post:"}}"}}),_WebInternationalization),_descriptor=_applyDecoratedDescriptor(_class.prototype,"options",[_dec],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return{}}}),_descriptor2=_applyDecoratedDescriptor(_class.prototype,"onEnsure",[_dec2],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return __WEBPACK_EXTERNAL_MODULE_clientnode_NOOP__}}),_descriptor3=_applyDecoratedDescriptor(_class.prototype,"onSwitch",[_dec3],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return __WEBPACK_EXTERNAL_MODULE_clientnode_NOOP__}}),_descriptor4=_applyDecoratedDescriptor(_class.prototype,"onEnsured",[_dec4],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return __WEBPACK_EXTERNAL_MODULE_clientnode_NOOP__}}),_descriptor5=_applyDecoratedDescriptor(_class.prototype,"onSwitched",[_dec5],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return __WEBPACK_EXTERNAL_MODULE_clientnode_NOOP__}}),_class);// endregion
var api={component:WebInternationalization,register:function register(tagName){if(tagName===void 0){tagName=__WEBPACK_EXTERNAL_MODULE_clientnode_camelCaseToDelimited__(WebInternationalization._name)}customElements.define(tagName,WebInternationalization)}};/* harmony default export */ var src = (WebInternationalization);if(__WEBPACK_EXTERNAL_MODULE_clientnode_globalContext__.AUTO_DEFINE_WEB_INTERNATIONALIZATION)api.register();
export { WebInternationalization, api, src as default, log };
