#!/usr/bin/env node
// -*- coding: utf-8 -*-
import "core-js/modules/es.array.push.js";
import "core-js/modules/es.iterator.constructor.js";
import "core-js/modules/es.iterator.map.js";
import "core-js/modules/es.json.stringify.js";
import { Lock as __WEBPACK_EXTERNAL_MODULE_clientnode_Lock__, Logger as __WEBPACK_EXTERNAL_MODULE_clientnode_Logger__, NOOP as __WEBPACK_EXTERNAL_MODULE_clientnode_NOOP__, camelCaseToDelimited as __WEBPACK_EXTERNAL_MODULE_clientnode_camelCaseToDelimited__, closest as __WEBPACK_EXTERNAL_MODULE_clientnode_closest__, createDomNodes as __WEBPACK_EXTERNAL_MODULE_clientnode_createDomNodes__, extend as __WEBPACK_EXTERNAL_MODULE_clientnode_extend__, fadeIn as __WEBPACK_EXTERNAL_MODULE_clientnode_fadeIn__, fadeOut as __WEBPACK_EXTERNAL_MODULE_clientnode_fadeOut__, format as __WEBPACK_EXTERNAL_MODULE_clientnode_format__, getAll as __WEBPACK_EXTERNAL_MODULE_clientnode_getAll__, getText as __WEBPACK_EXTERNAL_MODULE_clientnode_getText__, globalContext as __WEBPACK_EXTERNAL_MODULE_clientnode_globalContext__, isEquivalent as __WEBPACK_EXTERNAL_MODULE_clientnode_isEquivalent__, timeout as __WEBPACK_EXTERNAL_MODULE_clientnode_timeout__ } from "clientnode";
import { afterEach as __WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_afterEach__, beforeAll as __WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_beforeAll__, describe as __WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_describe__, expect as __WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_expect__, test as __WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_test__ } from "@jest/globals";
import "@webcomponents/webcomponentsjs/custom-elements-es5-adapter";
import "core-js/modules/es.iterator.for-each.js";
import "core-js/modules/es.iterator.reduce.js";
import { func as __WEBPACK_EXTERNAL_MODULE_clientnode_property_types_4789ebe2_func__, object as __WEBPACK_EXTERNAL_MODULE_clientnode_property_types_4789ebe2_object__ } from "clientnode/property-types";
import { property as __WEBPACK_EXTERNAL_MODULE_web_component_wrapper_decorator_a680de5c_property__ } from "web-component-wrapper/decorator";
import { Web as __WEBPACK_EXTERNAL_MODULE_web_component_wrapper_Web_aacc6608_Web__ } from "web-component-wrapper/Web";

;// external "core-js/modules/es.array.push.js"

;// external "core-js/modules/es.iterator.constructor.js"

;// external "core-js/modules/es.iterator.map.js"

;// external "core-js/modules/es.json.stringify.js"

;// external "clientnode"

;// external "@jest/globals"

;// external "@webcomponents/webcomponentsjs/custom-elements-es5-adapter"

;// external "core-js/modules/es.iterator.for-each.js"

;// external "core-js/modules/es.iterator.reduce.js"

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
var _dec,_dec2,_dec3,_dec4,_dec5,_class,_descriptor,_descriptor2,_descriptor3,_descriptor4,_descriptor5,_WebInternationalization;function _initializerDefineProperty(e,i,r,l){r&&Object.defineProperty(e,i,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(l):void 0})}function _defineProperty(r,t,o){return(t=_toPropertyKey(t))in r?Object.defineProperty(r,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[t]=o,r}function _toPropertyKey(r){var o=_toPrimitive(r,"string");return"symbol"==typeof o?o:o+""}function _toPrimitive(t,e){if("object"!=typeof t||!t)return t;var r;if("undefined"!=typeof Symbol&&void 0!==(r=t[Symbol.toPrimitive])){var i=r.call(t,e||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function _applyDecoratedDescriptor(i,e,r,n,l){var a={};return Object.keys(n).forEach(function(i){a[i]=n[i]}),a.enumerable=!!a.enumerable,a.configurable=!!a.configurable,("value"in a||a.initializer)&&(a.writable=!0),a=r.slice().reverse().reduce(function(r,n){return n(i,e,r)||r},a),l&&void 0!==a.initializer&&(a.value=a.initializer?a.initializer.call(l):void 0,a.initializer=void 0),void 0===a.initializer?(Object.defineProperty(i,e,a),null):a}function _initializerWarningHelper(r,e){throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform.")};// endregion
const log=new __WEBPACK_EXTERNAL_MODULE_clientnode_Logger__({name:"web-internationalization"});// region plugins/classes
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
 */let WebInternationalization=(_dec=__WEBPACK_EXTERNAL_MODULE_web_component_wrapper_decorator_a680de5c_property__({type:__WEBPACK_EXTERNAL_MODULE_clientnode_property_types_4789ebe2_object__}),_dec2=__WEBPACK_EXTERNAL_MODULE_web_component_wrapper_decorator_a680de5c_property__({type:__WEBPACK_EXTERNAL_MODULE_clientnode_property_types_4789ebe2_func__}),_dec3=__WEBPACK_EXTERNAL_MODULE_web_component_wrapper_decorator_a680de5c_property__({type:__WEBPACK_EXTERNAL_MODULE_clientnode_property_types_4789ebe2_func__}),_dec4=__WEBPACK_EXTERNAL_MODULE_web_component_wrapper_decorator_a680de5c_property__({type:__WEBPACK_EXTERNAL_MODULE_clientnode_property_types_4789ebe2_func__}),_dec5=__WEBPACK_EXTERNAL_MODULE_web_component_wrapper_decorator_a680de5c_property__({type:__WEBPACK_EXTERNAL_MODULE_clientnode_property_types_4789ebe2_func__}),_class=(_WebInternationalization=class WebInternationalization extends __WEBPACK_EXTERNAL_MODULE_web_component_wrapper_Web_aacc6608_Web__{// region public methods
/// region live-cycle
/**
     * Defines dynamic getter and setter interface and resolves a configuration
     * object. Initializes the map implementation.
     */constructor(){super();/*
            Babel property declaration transformation overwrites defined
            properties at the end of an implicit constructor. So we have to
            redefine them as long as we want to declare expected component
            interface properties to enable static type checks.
        */_defineProperty(this,"self",WebInternationalization);// region api properties
_initializerDefineProperty(this,"options",_descriptor,this);_initializerDefineProperty(this,"onEnsure",_descriptor2,this);_initializerDefineProperty(this,"onSwitch",_descriptor3,this);_initializerDefineProperty(this,"onEnsured",_descriptor4,this);_initializerDefineProperty(this,"onSwitched",_descriptor5,this);// endregion
_defineProperty(this,"switchLanguageButtonDomNodes",null);_defineProperty(this,"languageButtonEventHandler",[]);_defineProperty(this,"currentLanguage","enUS");_defineProperty(this,"knownTranslations",{});_defineProperty(this,"lock",new __WEBPACK_EXTERNAL_MODULE_clientnode_Lock__);_defineProperty(this,"_domNodesToFade",[]);_defineProperty(this,"_replacements",[]);_defineProperty(this,"_domNodesWithKnownTranslation",{});this.defineGetterAndSetterInterface()}/**
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
     */async render(reason="unknown",resolveRendering=true){await super.render(reason,false);if(Object.keys(this.options).length===0)this._extendOptions();this.options.preReplacementLanguagePattern=__WEBPACK_EXTERNAL_MODULE_clientnode_format__(this.options.preReplacementLanguagePattern,this.options.replacementLanguagePattern.substring(1,this.options.replacementLanguagePattern.length-1));this.options.lockDescription=__WEBPACK_EXTERNAL_MODULE_clientnode_format__(this.options.lockDescription,this.self._name);this.options.sessionDescription=__WEBPACK_EXTERNAL_MODULE_clientnode_format__(this.options.sessionDescription,this.self._name);await this.waitForNestedComponentRendering();this._movePreReplacementNodes();this.currentLanguage=this._normalizeLanguage(this.options.default);/*
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
const normalizedLanguage=this._normalizeLanguage(language);if(this.options.selection.length&&!this.options.selection.includes(language)&&!this.options.selection.includes(normalizedLanguage)){void log.debug(`"${language}" isn't one of the allowed languages.`);return}language=normalizedLanguage}await this.lock.acquire(this.options.lockDescription);if(language===true){ensure=true;language=this.currentLanguage}if(ensure||this.currentLanguage!==language){let actionDescription="Switch to";if(ensure)actionDescription="Ensure";void log.debug(`${actionDescription} "${language}".`);this._switchCurrentLanguageIndicator(language);if(ensure)await this.onEnsure(language);else await this.onSwitch(this.currentLanguage,language);this._domNodesToFade=[];this._replacements=[];this._collectDomNodesToReplace(language,ensure);await this._handleSwitchEffect(language,ensure);return}void log.debug(`"${language}" is already current selected language.`);void this.lock.release(this.options.lockDescription)}/**
     * Ensures current selected language.
     * @returns Promise resolving to nothing when switching as finished.
     */refresh(){this._movePreReplacementNodes();return this.switch(true)}/// endregion
// region protected methods
/**
     * Extends given options by default options.
     */_extendOptions(){/*
            NOTE: Using the internal setter avoids triggering an additional
            rendering.
        */this.setPropertyValue("options",__WEBPACK_EXTERNAL_MODULE_clientnode_extend__(true,{},this.self._defaultOptions,this.options))}/**
     * Depending on activated switching effect this method initialized the
     * effect of replace all text string directly.
     * @param language - New language to use.
     * @param ensure - Indicates if current language should be ensured again
     * every text node content.
     * @returns Returns the current instance wrapped in a promise.
     */async _handleSwitchEffect(language,ensure){const oldLanguage=this.currentLanguage;if(!ensure&&this.options.useEffect&&this._domNodesToFade.length>0){await Promise.all(this._domNodesToFade.map(domNode=>{const handler=__WEBPACK_EXTERNAL_MODULE_clientnode_fadeOut__(domNode);return handler.then(()=>{handler.resetStyles()})}));this._switchLanguage(language);await Promise.all(this._domNodesToFade.map(domNode=>{const handler=__WEBPACK_EXTERNAL_MODULE_clientnode_fadeIn__(domNode);return handler.then(()=>{handler.resetStyles()})}));this.onSwitched(oldLanguage,language);void this.lock.release(this.options.lockDescription);return}this._switchLanguage(language);if(ensure)this.onEnsured(language);else this.onSwitched(oldLanguage,language);void this.lock.release(this.options.lockDescription)}/**
     * Moves pre-replacement dom nodes into the next dom node behind the
     * translation text to use the same translation algorithm for both.
     */_movePreReplacementNodes(){for(const domNode of __WEBPACK_EXTERNAL_MODULE_clientnode_getAll__(this.hostDomNode)){const nodeName=domNode.nodeName.toLowerCase();if(this.options.replacementDomNodeNames.includes(nodeName)){if(!["#comment","#text"].includes(nodeName))// NOTE: Hide replacement dom nodes.
domNode.classList.add(this.options.selectors.hideClassName);const regularExpression=new RegExp(this.options.preReplacementLanguagePattern);const match=domNode.textContent?.match(regularExpression);if(domNode.textContent&&match&&match[0]){domNode.textContent=domNode.textContent.replace(regularExpression,match[1]);if(domNode.parentElement){let selfFound=false;for(const subDomNode of __WEBPACK_EXTERNAL_MODULE_clientnode_getAll__(domNode.parentElement)){if(selfFound&&__WEBPACK_EXTERNAL_MODULE_clientnode_getText__(subDomNode,true).length>0){subDomNode.appendChild(domNode);break}if(domNode===subDomNode)selfFound=true}}}}}}/**
     * Collects all text nodes that should be replaced later.
     * @param language - New language to use.
     * @param ensure - Indicates if the whole dom should be checked again
     * current language to ensure every text node has right content.
     */_collectDomNodesToReplace(language,ensure){let currentDomNodeToTranslate=null;let currentLanguageDomNode=null;this.knownTranslations={};for(const domNode of __WEBPACK_EXTERNAL_MODULE_clientnode_getAll__(this.hostDomNode)){const nodeName=domNode.nodeName.toLowerCase();const nodeTextContent=__WEBPACK_EXTERNAL_MODULE_clientnode_getText__(domNode,true);// NOTE: We skip empty and nested nodes.
if(this._shouldSkipDomNode(domNode,nodeTextContent,currentDomNodeToTranslate))continue;if(this.options.replaceDomNodeNames.includes(nodeName))currentDomNodeToTranslate=domNode;else if(this.options.alternativeDomNodeNames.includes(nodeName)){if(!domNode.hasAttribute("lang"))this._initializeCurrentLanguageDomNode(domNode,ensure);else if(domNode.getAttribute("lang")===language)this._processAlternativeDomNode(domNode,language,ensure,currentLanguageDomNode)}else if(currentDomNodeToTranslate){if(this.options.replacementDomNodeNames.includes(nodeName)){;({domNodeToTranslate:currentDomNodeToTranslate,languageDomNode:currentLanguageDomNode}=this._processReplacementDomNode(domNode,nodeName,language,ensure,currentDomNodeToTranslate,currentLanguageDomNode));continue}currentDomNodeToTranslate=null;currentLanguageDomNode=null}}this._registerKnownTextNodes()}/**
     * Determines whether a given dom node should be skipped during
     * translation collection.
     * @param domNode - The dom node to evaluate.
     * @param nodeTextContent - Pre-computed text content of the node.
     * @param currentDomNodeToTranslate - The currently tracked translation
     * ancestor node.
     * @returns Returns true if the node should be skipped.
     */_shouldSkipDomNode(domNode,nodeTextContent,currentDomNodeToTranslate){return nodeTextContent.length===0&&(domNode.nodeType!==Node.COMMENT_NODE||(domNode.nodeValue||"").trim()==="")||Boolean(currentDomNodeToTranslate?.contains(domNode))||Boolean(__WEBPACK_EXTERNAL_MODULE_clientnode_closest__(domNode,this.options.replaceDomNodeNames.concat(this.options.replacementDomNodeNames).join(","),true))}/**
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
this.knownTranslations[__WEBPACK_EXTERNAL_MODULE_clientnode_getText__(currentDomNodeToTranslate,true).join(" ")]=match[2].trim();currentLanguageDomNode=this._ensureLastTextNodeHavingLanguageIndicator(currentDomNodeToTranslate,currentLanguageDomNode,ensure);this._registerTextNodeToChange(currentDomNodeToTranslate,domNode,match[2],currentLanguageDomNode);return{domNodeToTranslate:null,languageDomNode:null}}if(domNode.textContent.match(new RegExp(this.options.currentLanguagePattern)))currentLanguageDomNode=domNode;return{domNodeToTranslate:currentDomNodeToTranslate,languageDomNode:currentLanguageDomNode}}/**
     * Iterates all text nodes in language known area with known translations.
     */_registerKnownTextNodes(){this._domNodesWithKnownTranslation={};for(const domNode of this.hostDomNode.querySelectorAll(this.options.selectors.knownTranslation))for(const node of __WEBPACK_EXTERNAL_MODULE_clientnode_getAll__(domNode)){const content=__WEBPACK_EXTERNAL_MODULE_clientnode_getText__(node).join(" ");// NOTE: We skip empty and nested text nodes.
if(content&&!this.options.replaceDomNodeNames.includes(node.nodeName.toLowerCase())&&!__WEBPACK_EXTERNAL_MODULE_clientnode_closest__(node,this.options.replaceDomNodeNames.join(","),true)&&Object.prototype.hasOwnProperty.call(this.knownTranslations,content)){this._domNodesToFade.push(node.parentElement);if(Object.prototype.hasOwnProperty.call(this._domNodesWithKnownTranslation,this.knownTranslations[content]))this._domNodesWithKnownTranslation[this.knownTranslations[content]].push(node);else this._domNodesWithKnownTranslation[this.knownTranslations[content]]=[node]}}}/**
     * Normalizes a given language string.
     * @param language - New language to use.
     * @returns Returns the normalized version of given language.
     */_normalizeLanguage(language){for(const[otherLanguage,aliases]of Object.entries(this.options.languageMapping)){if(!aliases.includes(otherLanguage.toLowerCase()))aliases.push(otherLanguage.toLowerCase());if(aliases.includes(language.toLowerCase()))return otherLanguage}return this.options.default}/**
     * Determines a useful initial language depending on session and browser
     * settings.
     * @returns Returns the determined language.
     */_determineUsefulLanguage(){let result;if(this.options.initial)result=this.options.initial;else if(Object.prototype.hasOwnProperty.call(__WEBPACK_EXTERNAL_MODULE_clientnode_globalContext__,"window"))if(__WEBPACK_EXTERNAL_MODULE_clientnode_globalContext__.window?.localStorage.getItem(this.options.sessionDescription)){result=__WEBPACK_EXTERNAL_MODULE_clientnode_globalContext__.window.localStorage.getItem(this.options.sessionDescription);void log.debug(`Determine "${result}", because of local storage`,"information.")}else if(__WEBPACK_EXTERNAL_MODULE_clientnode_globalContext__.window?.navigator.language){result=__WEBPACK_EXTERNAL_MODULE_clientnode_globalContext__.window.navigator.language;void log.debug(`Determine "${result}", because of browser settings.`)}if(!result){result=this.options.default;void log.debug(`Determine "${result}", because of default option.`)}result=this._normalizeLanguage(result);if(this.options.selection.length&&!this.options.selection.includes(result)){void log.debug(`"${result}" isn't one of the allowed languages. Set`,`language to "${this.options.selection[0]}".`);result=this.options.selection[0]}if(__WEBPACK_EXTERNAL_MODULE_clientnode_globalContext__.window?.localStorage)__WEBPACK_EXTERNAL_MODULE_clientnode_globalContext__.window.localStorage.setItem(this.options.sessionDescription,result);return result}/**
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
            */let currentLocalLanguage=this.currentLanguage;if(ensure)currentLocalLanguage=this.options.default||this.currentLanguage;lastLanguageDomNode=__WEBPACK_EXTERNAL_MODULE_clientnode_globalContext__.document?.createComment(currentLocalLanguage)||null;if(lastLanguageDomNode)lastTextNodeToTranslate.after(lastLanguageDomNode)}return lastLanguageDomNode}/**
     * Performs the low-level text replacements for switching to a given
     * language.
     * @param language - The new language to switch to.
     */_switchLanguage(language){for(const replacement of this._replacements){const currentText=this._getCurrentNodeText(replacement.domNodeToTranslate);const trimmedText=currentText.trim();if(!this.options.templateDelimiter||!trimmedText.endsWith(this.options.templateDelimiter.post)&&this.options.templateDelimiter.post){const currentLanguageDomNode=this._resolveCurrentLanguageDomNode(replacement);const currentLanguage=currentLanguageDomNode.textContent;if(currentLanguage&&language===currentLanguage)void log.warn(`Text node "${replacement.textToReplaceWith}" is`,`marked as "${currentLanguage}" and has same`,"translation language as it already is.");// Move markup to be replaced next its parent node.
const nodeName=replacement.domNodeToReplaceWith.nodeName.toLowerCase();if(this.options.alternativeDomNodeNames.includes(nodeName)){;replacement.domNodeToReplaceWith.setAttribute("active","");replacement.domNodeToTranslate.removeAttribute("active");continue}const newNode=this._createBackupNode(nodeName,currentLanguage,currentText,replacement.domNodeToTranslate);replacement.domNodeToTranslate.after(newNode);replacement.domNodeToTranslate.after(__WEBPACK_EXTERNAL_MODULE_clientnode_globalContext__.document.createComment(language));this._applyTextReplacement(replacement);currentLanguageDomNode.remove();replacement.domNodeToReplaceWith.remove()}}this._updateKnownTextNodes();if(__WEBPACK_EXTERNAL_MODULE_clientnode_globalContext__.localStorage)__WEBPACK_EXTERNAL_MODULE_clientnode_globalContext__.localStorage.setItem(this.options.sessionDescription,language);this.currentLanguage=language}/**
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
        */let currentLanguageDomNode=document.body;let currentDomNodeFound=false;for(const domNode of __WEBPACK_EXTERNAL_MODULE_clientnode_getAll__(replacement.domNodeToTranslate.parentElement)){if(currentDomNodeFound){replacement.currentLanguageDomNode=currentLanguageDomNode=domNode;break}if(domNode===replacement.domNodeToTranslate)currentDomNodeFound=true}return currentLanguageDomNode}/**
     * Creates a backup node for the current dom node content before the
     * replacement is applied. Returns either a comment node or an element
     * node depending on `nodeName`.
     * @param nodeName - Lowercase node name of the replacement node.
     * @param currentLanguage - Current language string used as prefix.
     * @param currentText - Text content of the node to back up.
     * @param domNodeToTranslate - The dom node whose children are moved into
     * the backup element (for non-comment nodes).
     * @returns The created backup node.
     */_createBackupNode(nodeName,currentLanguage,currentText,domNodeToTranslate){if(nodeName==="#comment")return __WEBPACK_EXTERNAL_MODULE_clientnode_globalContext__.document.createComment(`${currentLanguage}:${currentText}`);const newNode=__WEBPACK_EXTERNAL_MODULE_clientnode_globalContext__.document.createElement(nodeName);newNode.appendChild(__WEBPACK_EXTERNAL_MODULE_clientnode_globalContext__.document.createTextNode(`${currentLanguage}:`));newNode.classList.add(this.options.selectors.hideClassName);// NOTE: We need to use "Array.from" to copy the list.
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
},_defineProperty(_WebInternationalization,"_name","WebInternationalization"),_defineProperty(_WebInternationalization,"_defaultOptions",{currentLanguageIndicatorClassName:"current",currentLanguagePattern:"^[a-z]{2}[A-Z]{2}$",default:"enUS",useEffect:true,initial:null,languageHashPrefix:"lang-",languageMapping:{deDE:["de","de_de","de-de","german","deutsch"],enUS:["en","en_us","en-us"],enEN:["en_en","en-en","english"],frFR:["fr","fr_fr","fr-fr","french"]},lockDescription:"{1}Switch",preReplacementLanguagePattern:"^\\|({1})$",alternativeDomNodeNames:["lang-alternative"],replaceDomNodeNames:["#text","lang-replace"],replacementDomNodeNames:["#comment","lang-replacement"],replacementLanguagePattern:"^([a-z]{2}[A-Z]{2}):((.|\\s)*)$",selection:[],selectors:{knownTranslation:".web-internationalization-generated-content",hideClassName:"wi-hide"},sessionDescription:"{1}",templateDelimiter:{pre:"{{",post:"}}"}}),_WebInternationalization),_descriptor=_applyDecoratedDescriptor(_class.prototype,"options",[_dec],{configurable:true,enumerable:true,writable:true,initializer:function(){return{}}}),_descriptor2=_applyDecoratedDescriptor(_class.prototype,"onEnsure",[_dec2],{configurable:true,enumerable:true,writable:true,initializer:function(){return __WEBPACK_EXTERNAL_MODULE_clientnode_NOOP__}}),_descriptor3=_applyDecoratedDescriptor(_class.prototype,"onSwitch",[_dec3],{configurable:true,enumerable:true,writable:true,initializer:function(){return __WEBPACK_EXTERNAL_MODULE_clientnode_NOOP__}}),_descriptor4=_applyDecoratedDescriptor(_class.prototype,"onEnsured",[_dec4],{configurable:true,enumerable:true,writable:true,initializer:function(){return __WEBPACK_EXTERNAL_MODULE_clientnode_NOOP__}}),_descriptor5=_applyDecoratedDescriptor(_class.prototype,"onSwitched",[_dec5],{configurable:true,enumerable:true,writable:true,initializer:function(){return __WEBPACK_EXTERNAL_MODULE_clientnode_NOOP__}}),_class);// endregion
const api={component:WebInternationalization,register:(tagName=__WEBPACK_EXTERNAL_MODULE_clientnode_camelCaseToDelimited__(WebInternationalization._name))=>{customElements.define(tagName,WebInternationalization)}};/* harmony default export */ const src = (WebInternationalization);if(__WEBPACK_EXTERNAL_MODULE_clientnode_globalContext__.AUTO_DEFINE_WEB_INTERNATIONALIZATION)api.register();
;// ./src/test.ts
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/* !
    region header
    Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 4.0 international license.
    See https://creativecommons.org/licenses/by/4.0/deed.de
    endregion
*/// region imports
// endregion
__WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_describe__("WebInternationalization",()=>{let root;__WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_beforeAll__(async()=>{if(Object.prototype.hasOwnProperty.call(__WEBPACK_EXTERNAL_MODULE_clientnode_globalContext__.window,"localStorage"))__WEBPACK_EXTERNAL_MODULE_clientnode_globalContext__.window?.localStorage.removeItem(src._name);api.register();root=document.createElement("web-internationalization");document.body.appendChild(root);await root.renderState.promise});// region tests
/// region public methods
__WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_test__("switch",async()=>{await __WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_expect__(root.switch("en")).resolves.toBeUndefined();root.hostDomNode.innerHTML="<div>english<!--deDE:german--></div>";await root.switch("deDE");__WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_expect__(__WEBPACK_EXTERNAL_MODULE_clientnode_isEquivalent__(root.hostDomNode.innerHTML.replace(/[ \n]+/g," "),"<div>german<!--deDE--><!--enUS:english--></div>")).toStrictEqual(true);await root.switch("deDE");__WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_expect__(__WEBPACK_EXTERNAL_MODULE_clientnode_isEquivalent__(root.hostDomNode.innerHTML.replace(/[ \n]+/g," "),"<div>german<!--deDE--><!--enUS:english--></div>")).toStrictEqual(true);await root.switch("en");__WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_expect__(__WEBPACK_EXTERNAL_MODULE_clientnode_isEquivalent__(root.hostDomNode.innerHTML.replace(/[ \n]+/g," "),"<div>english<!--enUS--><!--deDE:german--></div>")).toStrictEqual(true);root.hostDomNode.innerHTML=`
            <div class="web-internationalization-generated-content">
                <ul><li><a href="#">english</a></li></ul>
            </div>
            <div>english<!--deDE:german--></div>
        `;await root.switch("de");__WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_expect__(__WEBPACK_EXTERNAL_MODULE_clientnode_isEquivalent__(root.hostDomNode.innerHTML.replace(/[ \n]+/g," ")," <div class=\"web-internationalization-generated-content\"> "+"<ul><li><a href=\"#\">german</a></li></ul>"+" </div>"+" <div>german<!--deDE--><!--enUS:english--></div> ")).toStrictEqual(true)});__WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_test__("refresh",()=>__WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_expect__(root.refresh()).resolves.toBeUndefined());/// endregion
/// region protected methods
/*
        NOTE: We cannot use clientnode's "testEach" helper since
        "internationalization isn't available during test specification time.
    */__WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_test__.each([["deDE","de"],["deDE","de-de"],["enUS","en-us"],["frFR","fr"],["enUS",""]])(`'%s' === _normalizeLanguage('%s')`,(expected,given)=>{__WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_expect__(root._normalizeLanguage(given)).toStrictEqual(expected)});__WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_test__("_determineUsefulLanguage",()=>{if(typeof globalThis.window.localStorage!=="undefined"){globalThis.window.localStorage[root.options.sessionDescription]="enUS";__WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_expect__(root._determineUsefulLanguage()).toStrictEqual("enUS");delete globalThis.window.localStorage[root.options.sessionDescription]}let referenceLanguage=root.options.default;if(Object.prototype.hasOwnProperty.call(globalThis,"navigator")&&typeof globalThis.navigator.language!=="undefined")referenceLanguage=globalThis.navigator.language;__WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_expect__(root._normalizeLanguage(root._determineUsefulLanguage())).toStrictEqual(root._normalizeLanguage(referenceLanguage))});__WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_test__("_handleSwitchEffect",()=>__WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_expect__(root._handleSwitchEffect("deDE",false)).resolves.toBeUndefined());__WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_test__("_registerTextNodeToChange",()=>{root._registerTextNodeToChange(root,root.children[0],"2",root.children[0]);__WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_expect__(root._replacements[0].domNodeToTranslate).toStrictEqual(root);__WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_expect__(root._replacements).toHaveLength(1);root._registerTextNodeToChange(root,null,"2",null);__WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_expect__(root._replacements).toHaveLength(1);root._replacements=[]});__WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_test__("_ensureLastTextNodeHavingLanguageIndicator",()=>{__WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_expect__(root._ensureLastTextNodeHavingLanguageIndicator(null,null,false)).toStrictEqual(null)});__WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_test__("_switchLanguage",()=>{root._switchLanguage("enUS");__WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_expect__(root.currentLanguage).toStrictEqual("enUS");root._switchLanguage("deDE");__WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_expect__(root.currentLanguage).toStrictEqual("deDE")});__WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_test__("_switchCurrentLanguageIndicator",()=>{const englishLink=__WEBPACK_EXTERNAL_MODULE_clientnode_createDomNodes__(`<a href="#${root.options.languageHashPrefix}enUS">`);const germanLink=__WEBPACK_EXTERNAL_MODULE_clientnode_createDomNodes__(`<a href="#${root.options.languageHashPrefix}deDE">`);root.append(englishLink);root.append(germanLink);root._switchCurrentLanguageIndicator("enUS");root.currentLanguage="enUS";__WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_expect__(englishLink.classList.contains(root.options.currentLanguageIndicatorClassName)).toStrictEqual(true);__WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_expect__(germanLink.classList.contains(root.options.currentLanguageIndicatorClassName)).toStrictEqual(false);root._switchCurrentLanguageIndicator("deDE");root.currentLanguage="deDE";__WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_expect__(englishLink.classList.contains(root.options.currentLanguageIndicatorClassName)).toStrictEqual(false);__WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_expect__(germanLink.classList.contains(root.options.currentLanguageIndicatorClassName)).toStrictEqual(true)});/// endregion
// endregion
});__WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_describe__("WebInternationalization markup",()=>{const instances=[];/**
     * Creates, connects and renders a new component instance.
     * @param content - Inner html to translate.
     * @param options - Options to apply via attribute.
     * @returns Promise resolving to rendered instance.
     */const create=async(content,options={})=>{const domNode=document.createElement("web-internationalization");domNode.setAttribute("options",JSON.stringify({initial:"enUS",useEffect:false,...options}));domNode.innerHTML=content;document.body.appendChild(domNode);await domNode.renderState.promise;instances.push(domNode);return domNode};/**
     * Waits until all pending language switches are finished.
     * @param domNode - Instance to wait for.
     * @returns Promise resolving when lock is free again.
     */const settle=async domNode=>{await domNode.lock.acquire(domNode.options.lockDescription);await domNode.lock.release(domNode.options.lockDescription)};const text=domNode=>(domNode.textContent||"").replace(/\s+/g," ").trim();__WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_beforeAll__(()=>{if(!customElements.get("web-internationalization"))api.register()});__WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_afterEach__(()=>{for(const domNode of instances.splice(0))domNode.remove();__WEBPACK_EXTERNAL_MODULE_clientnode_globalContext__.window?.localStorage.removeItem(src._name)});__WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_test__("options attribute update",async()=>{const domNode=await create("<p>english<!--deDE:german--></p>");await domNode.onUpdateAttribute("options",JSON.stringify({default:"deDE"}));// Wait for triggered re-rendering.
await __WEBPACK_EXTERNAL_MODULE_clientnode_timeout__();await settle(domNode);__WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_expect__(domNode.options.default).toStrictEqual("deDE");__WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_expect__(domNode.options.languageHashPrefix).toStrictEqual("lang-")});__WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_test__("initial language differing from default",async()=>{const domNode=await create("<p>english<!--deDE:german--></p>",{initial:"deDE"});__WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_expect__(domNode.currentLanguage).toStrictEqual("deDE");__WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_expect__(text(domNode)).toStrictEqual("german")});__WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_test__("replace node with comment replacements",async()=>{const domNode=await create("<p><lang-replace>english <strong>nodes</strong></lang-replace>"+"<!--deDE:german <strong>Knoten</strong>--></p>");await domNode.switch("deDE");__WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_expect__(text(domNode)).toStrictEqual("german Knoten");__WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_expect__(domNode.querySelector("lang-replace strong")?.textContent).toStrictEqual("Knoten");await domNode.switch("enUS");__WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_expect__(text(domNode)).toStrictEqual("english nodes")});__WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_test__("replace node with replacement nodes",async()=>{const domNode=await create("<p><lang-replace>english <strong>nodes</strong></lang-replace>"+"<lang-replacement>deDE:german <strong>Knoten</strong>"+"</lang-replacement>"+"<lang-replacement>frFR:french <strong>noeuds</strong>"+"</lang-replacement></p>");for(const replacement of domNode.querySelectorAll("lang-replacement"))__WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_expect__(replacement.classList.contains(domNode.options.selectors.hideClassName)).toStrictEqual(true);await domNode.switch("deDE");__WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_expect__(text(domNode.querySelector("lang-replace"))).toStrictEqual("german Knoten");await domNode.switch("frFR");__WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_expect__(text(domNode.querySelector("lang-replace"))).toStrictEqual("french noeuds");await domNode.switch("enUS");__WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_expect__(text(domNode.querySelector("lang-replace"))).toStrictEqual("english nodes")});__WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_test__("alternative nodes",async()=>{const domNode=await create("<p><lang-alternative>english</lang-alternative>"+"<lang-alternative lang=\"deDE\">german</lang-alternative>"+"<lang-alternative lang=\"frFR\">french</lang-alternative></p>");const[english,german,french]=Array.from(domNode.querySelectorAll("lang-alternative"));const active=()=>[english,german,french].map(node=>node.hasAttribute("active"));await domNode.switch("deDE");__WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_expect__(english.getAttribute("lang")).toStrictEqual("enUS");__WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_expect__(active()).toStrictEqual([false,true,false]);await domNode.switch("frFR");__WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_expect__(active()).toStrictEqual([false,false,true]);await domNode.switch("enUS");__WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_expect__(active()).toStrictEqual([true,false,false])});__WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_test__("alternative nodes without active sibling",async()=>{const domNode=await create("<p><lang-alternative lang=\"enUS\">english</lang-alternative>"+"<lang-alternative lang=\"deDE\">german</lang-alternative></p>");await domNode.switch("deDE");__WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_expect__(domNode.querySelectorAll("lang-alternative[active]")).toHaveLength(0)});__WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_test__("pre-replacement nodes",async()=>{const domNode=await create("<div><!--|deDE:german--><p>english</p></div>");__WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_expect__(domNode.querySelector("p")?.childNodes).toHaveLength(2);await domNode.switch("deDE");__WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_expect__(text(domNode.querySelector("p"))).toStrictEqual("german")});__WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_test__("known translations",async()=>{const domNode=await create("<div class=\"web-internationalization-generated-content\">"+"<a>english</a><a>english</a></div>"+"<p>english<!--deDE:german--></p>");await domNode.switch("deDE");__WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_expect__(Array.from(domNode.querySelectorAll("a")).map(text)).toStrictEqual(["german","german"])});__WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_test__("switch with effect",async()=>{const domNode=await create("<p>english<!--deDE:german--></p>",{useEffect:true});await domNode.switch("deDE");__WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_expect__(text(domNode)).toStrictEqual("german")});__WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_test__("mismatching language indicator",async()=>{const domNode=await create("<p>english<!--deDE--><!--deDE:german--></p>");await domNode.switch("deDE");__WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_expect__(text(domNode)).toStrictEqual("german")});__WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_test__("skip template expressions",async()=>{const domNode=await create("<p>{{value}}<!--deDE:wert--></p>");await domNode.switch("deDE");__WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_expect__(text(domNode)).toStrictEqual("{{value}}")});__WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_test__("language links",async()=>{const domNode=await create("<a href=\"#lang-deDE\">de</a><a href=\"#lang-enUS\">en</a>"+"<p>english<!--deDE:german--></p>");const[german,english]=Array.from(domNode.querySelectorAll("a"));__WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_expect__(domNode.options.selection).toStrictEqual(["deDE","enUS"]);__WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_expect__(english.classList.contains("current")).toStrictEqual(true);german.click();await settle(domNode);__WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_expect__(domNode.currentLanguage).toStrictEqual("deDE");__WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_expect__(german.classList.contains("current")).toStrictEqual(true);__WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_expect__(english.classList.contains("current")).toStrictEqual(false);// Not allowed languages are ignored.
await domNode.switch("frFR");__WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_expect__(domNode.currentLanguage).toStrictEqual("deDE");await domNode.switch("fr");__WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_expect__(domNode.currentLanguage).toStrictEqual("deDE");// Aliases of allowed languages are respected.
await domNode.switch("en");__WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_expect__(domNode.currentLanguage).toStrictEqual("enUS");await domNode.switch("de");__WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_expect__(domNode.currentLanguage).toStrictEqual("deDE");// Re-binding replaces previous handlers.
domNode.refreshLanguageButtonDomNodesBinding();__WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_expect__(domNode.languageButtonEventHandler).toHaveLength(2);english.removeAttribute("href");english.click();await settle(domNode);__WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_expect__(domNode.currentLanguage).toStrictEqual("deDE")});__WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_test__("_determineUsefulLanguage fallbacks",async()=>{const domNode=await create("",{selection:["deDE","frFR"]});__WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_expect__(domNode._determineUsefulLanguage()).toStrictEqual("deDE");domNode.options.initial=null;domNode.options.selection=[];__WEBPACK_EXTERNAL_MODULE_clientnode_globalContext__.window?.localStorage.removeItem(domNode.options.sessionDescription);// Shadow browser language by an empty own property.
const navigator=__WEBPACK_EXTERNAL_MODULE_clientnode_globalContext__.window?.navigator;Object.defineProperty(navigator,"language",{configurable:true,value:""});try{domNode.options.default="frFR";__WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_expect__(domNode._determineUsefulLanguage()).toStrictEqual("frFR")}finally{Reflect.deleteProperty(navigator,"language")}__WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_expect__(navigator.language).not.toStrictEqual("")});__WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_test__("_ensureLastTextNodeHavingLanguageIndicator",async()=>{const domNode=await create("<p>english</p>",{default:"deDE"});const textNode=domNode.querySelector("p").firstChild;const indicator=domNode._ensureLastTextNodeHavingLanguageIndicator(textNode,null,true);__WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_expect__(indicator?.textContent).toStrictEqual("deDE");__WEBPACK_EXTERNAL_MODULE__jest_globals_d700ac6c_expect__(textNode.nextSibling).toStrictEqual(indicator)})});
