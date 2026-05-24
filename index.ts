// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module web-internationalization */
'use strict'
/* !
    region header
    [Project page](https://torben.website/web-internationalization)

    Copyright Torben Sickert (info["~at~"]torben.website) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/
// region imports
import {
    camelCaseToDelimited,
    closest,
    extend,
    fadeIn,
    fadeOut,
    getAll,
    getText,
    globalContext,
    HTMLItem,
    Lock,
    Logger,
    Mapping,
    NOOP,
    format
} from 'clientnode'
import {func, object} from 'clientnode/property-types'
import {property} from 'web-component-wrapper/decorator'
import {WebComponentAPI} from 'web-component-wrapper/type'
import {Web} from 'web-component-wrapper/Web'

import {DefaultOptions, Options, Replacement} from './type'
// endregion
export const log = new Logger({name: 'web-internationalization'})
// region plugins/classes
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
 */
export class WebInternationalization<
    TElement = HTMLElement,
    ExternalProperties extends Mapping<unknown> = Mapping<unknown>,
    InternalProperties extends Mapping<unknown> = Mapping<unknown>
> extends Web<
    TElement, ExternalProperties, InternalProperties
> {
    static _name = 'WebInternationalization'

    static _defaultOptions: DefaultOptions = {
        currentLanguageIndicatorClassName: 'current',
        currentLanguagePattern: '^[a-z]{2}[A-Z]{2}$',
        default: 'enUS',
        useEffect: true,
        initial: null,
        languageHashPrefix: 'lang-',
        languageMapping: {
            deDE: ['de', 'de_de', 'de-de', 'german', 'deutsch'],
            enUS: ['en', 'en_us', 'en-us'],
            enEN: ['en_en', 'en-en', 'english'],
            frFR: ['fr', 'fr_fr', 'fr-fr', 'french']
        },
        lockDescription: '{1}Switch',
        preReplacementLanguagePattern: '^\\|({1})$',
        alternativeDomNodeNames: ['lang-alternative'],
        replaceDomNodeNames: ['#text', 'lang-replace'],
        replacementDomNodeNames: ['#comment', 'lang-replacement'],
        replacementLanguagePattern: '^([a-z]{2}[A-Z]{2}):((.|\\s)*)$',
        selection: [],
        selectors: {
            knownTranslation: '.web-internationalization-generated-content',
            hideClassName: 'wi-hide'
        },
        sessionDescription: '{1}',
        templateDelimiter: {pre: '{{', post: '}}'}
    }

    readonly self = WebInternationalization
    // region api properties
    @property({type: object})
        options = {} as Options

    @property({type: func})
        onEnsure: (language: string) => Promise<void> = NOOP
    @property({type: func})
        onSwitch: (oldLanguage: string, newLanguage: string) => Promise<void> =
            NOOP
    @property({type: func})
        onEnsured: (language: string) => void = NOOP
    @property({type: func})
        onSwitched: (oldLanguage: string, newLanguage: string) => void = NOOP
    // endregion
    switchLanguageButtonDomNodes: NodeListOf<HTMLAnchorElement> | null = null

    currentLanguage = 'enUS'
    knownTranslations: Mapping = {}

    lock = new Lock()

    _domNodesToFade: Array<HTMLElement> = []
    _replacements: Array<Replacement> = []
    _domNodesWithKnownTranslation: Mapping<Array<HTMLItem>> = {}
    // region public methods
    /// region live-cycle
    /**
     * Defines dynamic getter and setter interface and resolves a configuration
     * object. Initializes the map implementation.
     */
    constructor() {
        super()
        /*
            Babel property declaration transformation overwrites defined
            properties at the end of an implicit constructor. So we have to
            redefine them as long as we want to declare expected component
            interface properties to enable static type checks.
        */
        this.defineGetterAndSetterInterface()
    }
    /**
     * Triggered when ever a given attribute has changed and triggers to update
     * configured dom content.
     * @param name - Attribute name which was updates.
     * @param newValue - New updated value.
     * @returns Returns when attribute has been updated.
     */
    async onUpdateAttribute(name: string, newValue: string): Promise<void> {
        await super.onUpdateAttribute(name, newValue)

        if (name === 'options')
            this._extendOptions()
    }
    /**
     * Updates controlled dom elements.
     * @param reason - Why an update has been triggered.
     * @param resolveRendering - Indicates whether rendering should be resolved
     * finally. Should be set to "false" via super calls in inherited render
     * methods which do further dom manipulations afterward and resolve the
     * rendering process by their own.
     * @returns A promise resolving when rendering has finished. A promise may
     * be needed for classes inheriting from this class.
     */
    async render(reason = 'unknown', resolveRendering = true): Promise<void> {
        await super.render(reason, false)

        if (Object.keys(this.options).length === 0)
            this._extendOptions()

        this.options.preReplacementLanguagePattern = format(
            this.options.preReplacementLanguagePattern,
            this.options.replacementLanguagePattern.substring(
                1, this.options.replacementLanguagePattern.length - 1
            )
        )
        this.options.lockDescription =
            format(this.options.lockDescription, this.self._name)
        this.options.sessionDescription =
            format(this.options.sessionDescription, this.self._name)

        await this.waitForNestedComponentRendering()

        this.switchLanguageButtonDomNodes =
            this.hostDomNode.querySelectorAll(
                `a[href^="#${this.options.languageHashPrefix}"]`
            )

        this._movePreReplacementNodes()

        this.currentLanguage = this._normalizeLanguage(this.options.default)
        /*
            NOTE: Only switch current language indicator if we haven't an
            initial language switch which will perform the indicator switch.
        */
        const newLanguage: string = this._determineUsefulLanguage()

        const determineSelection = this.options.selection.length === 0

        for (const domNode of this.switchLanguageButtonDomNodes) {
            if (determineSelection)
                this.options.selection.push(
                    (domNode.getAttribute('href') as string)
                        .substring(
                            `#${this.options.languageHashPrefix}`.length
                        )
                )

            const handler = (event: Event) => {
                event.preventDefault()

                const url = (
                    event.target as Element | null
                )?.getAttribute('href')
                if (url)
                    void this.switch(url.substring(
                        this.options.languageHashPrefix.length + 1
                    ))
            }
            this.addSecureEventListener(domNode, 'click', handler)
        }

        if (this.currentLanguage === newLanguage)
            await this.refresh()
        else
            await this.switch(newLanguage, true)

        await this.resolveRenderingPromiseIfSet(reason, resolveRendering)
    }
    /// endregion
    /**
     * Switches the current language to a given language. This method is
     * mutually synchronized.
     * @param language - New language as string or "true". If set to "true" it
     * indicates that the dom tree should be checked again current language to
     * ensure every text node has the right content.
     * @param ensure - Indicates if a switch effect should be avoided.
     * @returns Returns the current instance wrapped in a promise.
     */
    async switch(language: string | true, ensure = false): Promise<void> {
        if (
            language !== true &&
            this.options.selection.length &&
            !this.options.selection.includes(language)
        ) {
            log.debug(`"${language}" isn't one of the allowed languages.`)

            return
        }

        await this.lock.acquire(this.options.lockDescription)

        if (language === true) {
            ensure = true

            language = this.currentLanguage
        } else
            language = this._normalizeLanguage(language)


        if (ensure || this.currentLanguage !== language) {
            let actionDescription = 'Switch to'
            if (ensure)
                actionDescription = 'Ensure'

            log.debug(`${actionDescription} "${language}".`)

            this._switchCurrentLanguageIndicator(language)

            if (ensure)
                await this.onEnsure(language)
            else
                await this.onSwitch(this.currentLanguage, language)

            this._domNodesToFade = []
            this._replacements = []
            this._collectDomNodesToReplace(language, ensure)

            await this._handleSwitchEffect(language, ensure)

            return
        }

        log.debug(`"${language}" is already current selected language.`)

        void this.lock.release(this.options.lockDescription)
    }
    /**
     * Ensures current selected language.
     * @returns Promise resolving to nothing when switching as finished.
     */
    refresh(): Promise<void> {
        this._movePreReplacementNodes()

        return this.switch(true)
    }
    /// endregion
    // region protected methods
    /**
     * Extends given options by default options.
     */
    _extendOptions() {
        /*
            NOTE: Using the internal setter avoids triggering an additional
            rendering.
        */
        this.setPropertyValue(
            'options',
            extend<Options>(true, {}, this.self._defaultOptions, this.options)
        )
    }
    /**
     * Depending on activated switching effect this method initialized the
     * effect of replace all text string directly.
     * @param language - New language to use.
     * @param ensure - Indicates if current language should be ensured again
     * every text node content.
     * @returns Returns the current instance wrapped in a promise.
     */
    async _handleSwitchEffect(
        language: string, ensure: boolean
    ): Promise<void> {
        const oldLanguage: string = this.currentLanguage
        if (
            !ensure &&
            this.options.useEffect &&
            this._domNodesToFade.length > 0
        ) {
            await Promise.all(
                this._domNodesToFade.map((domNode) => {
                    const handler = fadeOut(domNode)
                    return handler.then(() => {
                        handler.resetStyles()
                    })
                })
            )

            this._switchLanguage(language)

            await Promise.all(
                this._domNodesToFade.map((domNode) => {
                    const handler = fadeIn(domNode)
                    return handler.then(() => {
                        handler.resetStyles()
                    })
                })
            )

            this.onSwitched(oldLanguage, language)

            void this.lock.release(this.options.lockDescription)

            return
        }

        this._switchLanguage(language)

        if (ensure)
            this.onEnsured(language)
        else
            this.onSwitched(oldLanguage, language)

        void this.lock.release(this.options.lockDescription)
    }
    /**
     * Moves pre-replacement dom nodes into the next dom node behind the
     * translation text to use the same translation algorithm for both.
     */
    _movePreReplacementNodes(): void {
        for (const domNode of getAll(this.hostDomNode)) {
            const nodeName: string = domNode.nodeName.toLowerCase()

            if (this.options.replacementDomNodeNames.includes(nodeName)) {
                if (!['#comment', '#text'].includes(nodeName))
                    // NOTE: Hide replacement dom nodes.
                    (domNode as HTMLElement).classList.add(
                        this.options.selectors.hideClassName
                    )

                const regularExpression =
                    new RegExp(this.options.preReplacementLanguagePattern)
                const match: RegExpMatchArray | null | undefined =
                    domNode.textContent?.match(regularExpression)
                if (domNode.textContent && match && match[0]) {
                    domNode.textContent = domNode.textContent.replace(
                        regularExpression, match[1]
                    )

                    if (domNode.parentElement) {
                        let selfFound = false
                        for (const subDomNode of getAll(
                            domNode.parentElement
                        )) {
                            if (
                                selfFound &&
                                getText(subDomNode, true).length > 0
                            ) {
                                subDomNode.appendChild(domNode)

                                break
                            }

                            if (domNode === subDomNode)
                                selfFound = true
                        }
                    }
                }
            }
        }
    }
    /**
     * Collects all text nodes that should be replaced later.
     * @param language - New language to use.
     * @param ensure - Indicates if the whole dom should be checked again
     * current language to ensure every text node has right content.
     */
    _collectDomNodesToReplace(language: string, ensure: boolean): void {
        let currentDomNodeToTranslate: HTMLItem | null = null
        let currentLanguageDomNode: HTMLItem | null = null

        this.knownTranslations = {}

        for (const domNode of getAll(this.hostDomNode)) {
            const nodeName: string = domNode.nodeName.toLowerCase()
            const nodeTextContent = getText(domNode, true)

            // NOTE: We skip empty and nested nodes.
            if (this._shouldSkipDomNode(
                domNode, nodeTextContent, currentDomNodeToTranslate
            ))
                continue

            if (this.options.replaceDomNodeNames.includes(nodeName))
                currentDomNodeToTranslate = domNode as HTMLItem
            else if (this.options.alternativeDomNodeNames.includes(nodeName)) {
                if (!(domNode as Element).hasAttribute('lang'))
                    this._initializeCurrentLanguageDomNode(
                        domNode as Element, ensure
                    )
                else if (
                    (domNode as Element).getAttribute('lang') ===
                        language
                )
                    this._processAlternativeDomNode(
                        domNode as HTMLItem,
                        language,
                        ensure,
                        currentLanguageDomNode
                    )
            } else if (currentDomNodeToTranslate) {
                if (this.options.replacementDomNodeNames.includes(nodeName)) {
                    ;({
                        domNodeToTranslate: currentDomNodeToTranslate,
                        languageDomNode: currentLanguageDomNode
                    } = this._processReplacementDomNode(
                        domNode as HTMLItem,
                        nodeName,
                        language,
                        ensure,
                        currentDomNodeToTranslate,
                        currentLanguageDomNode
                    ))

                    continue
                }

                currentDomNodeToTranslate = null
                currentLanguageDomNode = null
            }
        }

        this._registerKnownTextNodes()
    }
    /**
     * Determines whether a given dom node should be skipped during
     * translation collection.
     * @param domNode - The dom node to evaluate.
     * @param nodeTextContent - Pre-computed text content of the node.
     * @param currentDomNodeToTranslate - The currently tracked translation
     * ancestor node.
     * @returns Returns true if the node should be skipped.
     */
    _shouldSkipDomNode(
        domNode: Node,
        nodeTextContent: Array<string>,
        currentDomNodeToTranslate: HTMLItem | null
    ): boolean {
        return (
            nodeTextContent.length === 0 &&
            (
                domNode.nodeType !== Node.COMMENT_NODE ||
                ((domNode as Comment).nodeValue || '').trim() === ''
            ) ||
            Boolean(currentDomNodeToTranslate?.contains(domNode)) ||
            Boolean(closest(
                domNode,
                this.options.replaceDomNodeNames
                    .concat(this.options.replacementDomNodeNames)
                    .join(','),
                true
            ))
        )
    }
    /**
     * Processes an alternative dom node by finding its active sibling,
     * ensuring it has the necessary attributes and registering it for
     * replacement.
     * @param domNode - The alternative language dom node.
     * @param language - New language to use.
     * @param ensure - Indicates if current language should be ensured again
     * every text node content.
     * @param currentLanguageDomNode - The currently tracked language indicator
     * node.
     */
    _processAlternativeDomNode(
        domNode: HTMLItem,
        language: string,
        ensure: boolean,
        currentLanguageDomNode: HTMLItem | null
    ): void {
        /*
            When dealing with alternative dom nodes we do not rely on dom node
            positions to keep them stable. Therefore, we identify the current
            dom node to translate by going through all siblings.
         */
        let activeSibling: HTMLElement | null = null
        for (const candidate of ((
            domNode as unknown as Element
        ).parentElement as Element).querySelectorAll(
            this.options.alternativeDomNodeNames.join(',')
        ))
            if (
                candidate.hasAttribute('active') ||
                !candidate.hasAttribute('lang')
            ) {
                activeSibling = candidate as HTMLElement
                break
            }

        if (!activeSibling)
            return

        this._initializeCurrentLanguageDomNode(activeSibling, ensure)

        this._registerTextNodeToChange(
            activeSibling,
            domNode,
            (domNode as unknown as HTMLElement).innerHTML,
            currentLanguageDomNode
        )
    }
    _initializeCurrentLanguageDomNode(domNode: Element, ensure: boolean) {
        if (!domNode.hasAttribute('active'))
            domNode.setAttribute('active', '')
        if (!domNode.hasAttribute('lang'))
            domNode.setAttribute(
                'lang',
                ensure ?
                    (this.options.default || this.currentLanguage) :
                    this.currentLanguage
            )
    }
    /**
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
     */
    _processReplacementDomNode(
        domNode: HTMLItem,
        nodeName: string,
        language: string,
        ensure: boolean,
        currentDomNodeToTranslate: HTMLItem,
        currentLanguageDomNode: HTMLItem | null
    ): {
        domNodeToTranslate: HTMLItem | null
        languageDomNode: HTMLItem | null
    } {
        const content = nodeName === '#comment' ?
            domNode.textContent :
            (domNode as unknown as HTMLElement).innerHTML

        const match: Array<string> | null | undefined =
            content.match(new RegExp(this.options.replacementLanguagePattern))

        if (Array.isArray(match) && match[1] === language) {
            // Save known text translations.
            this.knownTranslations[
                getText(currentDomNodeToTranslate, true).join(' ')
            ] = match[2].trim()

            currentLanguageDomNode =
                this._ensureLastTextNodeHavingLanguageIndicator(
                    currentDomNodeToTranslate,
                    currentLanguageDomNode,
                    ensure
                )

            this._registerTextNodeToChange(
                currentDomNodeToTranslate,
                domNode,
                match[2],
                currentLanguageDomNode
            )

            return {domNodeToTranslate: null, languageDomNode: null}
        }

        if (domNode.textContent.match(
            new RegExp(this.options.currentLanguagePattern)
        ))
            currentLanguageDomNode = domNode

        return {
            domNodeToTranslate: currentDomNodeToTranslate,
            languageDomNode: currentLanguageDomNode
        }
    }
    /**
     * Iterates all text nodes in language known area with known translations.
     */
    _registerKnownTextNodes(): void {
        this._domNodesWithKnownTranslation = {}

        for (const domNode of this.hostDomNode.querySelectorAll(
            this.options.selectors.knownTranslation
        ))
            for (const node of getAll(domNode)) {
                const content = getText(node).join(' ')
                // NOTE: We skip empty and nested text nodes.
                if (
                    content &&
                    !this.options.replaceDomNodeNames.includes(
                        node.nodeName.toLowerCase()
                    ) &&
                    !closest(
                        node,
                        this.options.replaceDomNodeNames.join(','),
                        true
                    ) &&
                    Object.prototype.hasOwnProperty.call(
                        this.knownTranslations, content
                    )
                ) {
                    this._domNodesToFade.push(
                        node.parentElement as HTMLElement
                    )

                    if (
                        Object.prototype.hasOwnProperty.call(
                            this._domNodesWithKnownTranslation,
                            this.knownTranslations[content]
                        )
                    )
                        this._domNodesWithKnownTranslation[
                            this.knownTranslations[content]
                        ].push(node as HTMLItem)
                    else
                        this._domNodesWithKnownTranslation[
                            this.knownTranslations[content]
                        ] = [node as HTMLItem]
                }
            }
    }
    /**
     * Normalizes a given language string.
     * @param language - New language to use.
     * @returns Returns the normalized version of given language.
     */
    _normalizeLanguage(language: string): string {
        for (const [otherLanguage, aliases] of Object.entries(
            this.options.languageMapping
        )) {
            if (!aliases.includes(otherLanguage.toLowerCase()))
                aliases.push(otherLanguage.toLowerCase())

            if (aliases.includes(language.toLowerCase()))
                return otherLanguage
        }

        return this.options.default
    }
    /**
     * Determines a useful initial language depending on session and browser
     * settings.
     * @returns Returns the determined language.
     */
    _determineUsefulLanguage(): string {
        let result: string | undefined
        if (this.options.initial)
            result = this.options.initial
        else if (Object.prototype.hasOwnProperty.call(globalContext, 'window'))
            if (globalContext.window?.localStorage.getItem(
                this.options.sessionDescription
            )) {
                result = globalContext.window.localStorage.getItem(
                    this.options.sessionDescription
                ) as string

                log.debug(
                    `Determine "${result}", because of local storage`,
                    'information.'
                )
            } else if (globalContext.window?.navigator.language) {
                result = globalContext.window.navigator.language

                log.debug(
                    `Determine "${result}", because of browser settings.`
                )
            }

        if (!result) {
            result = this.options.default

            log.debug(`Determine "${result}", because of default option.`)
        }
        result = this._normalizeLanguage(result)
        if (
            this.options.selection.length &&
            !this.options.selection.includes(result)
        ) {
            log.debug(
                `"${result}" isn't one of the allowed languages. Set`,
                `language to "${this.options.selection[0]}".`
            )

            result = this.options.selection[0]
        }

        if (globalContext.window?.localStorage)
            globalContext.window.localStorage.setItem(
                this.options.sessionDescription, result
            )

        return result
    }
    /**
     * Registers a text node to change its content with a given replacement.
     * @param domNodeToTranslate - Text node with content to
     * translate.
     * @param domNodeToReplaceWith - A node with replacement content.
     * @param textToReplaceWith - Text content to use as replacement.
     * @param currentLanguageDomNode - A potential given text node indicating
     * the language of given text node.
     */
    _registerTextNodeToChange(
        domNodeToTranslate: HTMLItem,
        domNodeToReplaceWith: HTMLItem | null,
        textToReplaceWith: string,
        currentLanguageDomNode: HTMLItem | null
    ) {
        this._domNodesToFade.push(
            domNodeToTranslate.parentElement as HTMLElement
        )

        if (domNodeToReplaceWith)
            this._replacements.push({
                domNodeToTranslate,
                domNodeToReplaceWith,
                textToReplaceWith,
                currentLanguageDomNode
            })
    }
    /**
     * Checks if the last text node has a language indication comment node.
     * This function is called after each parsed dom text node.
     * @param lastTextNodeToTranslate - Last text node to check.
     * @param lastLanguageDomNode - A potential given language indication
     * commend node.
     * @param ensure - Indicates if current language should be ensured again
     * every text node content.
     * @returns Returns the retrieved or newly created language indicating
     * comment node.
     */
    _ensureLastTextNodeHavingLanguageIndicator(
        lastTextNodeToTranslate: HTMLItem | null,
        lastLanguageDomNode: HTMLItem | null,
        ensure: boolean
    ): HTMLItem | null {
        if (lastTextNodeToTranslate && !lastLanguageDomNode) {
            /*
                Last text node doesn't have a current language indicating dom
                node.
            */
            let currentLocalLanguage: string = this.currentLanguage
            if (ensure)
                currentLocalLanguage =
                    this.options.default || this.currentLanguage

            lastLanguageDomNode =
                globalContext.document?.createComment(currentLocalLanguage) ||
                null
            if (lastLanguageDomNode)
                lastTextNodeToTranslate.after(lastLanguageDomNode)
        }

        return lastLanguageDomNode
    }
    /**
     * Performs the low-level text replacements for switching to a given
     * language.
     * @param language - The new language to switch to.
     */
    _switchLanguage(language: string): void {
        for (const replacement of this._replacements) {
            const currentText: string =
                this._getCurrentNodeText(replacement.domNodeToTranslate)

            const trimmedText: string = currentText.trim()
            if (
                !this.options.templateDelimiter ||
                !trimmedText.endsWith(this.options.templateDelimiter.post) &&
                this.options.templateDelimiter.post
            ) {
                const currentLanguageDomNode: HTMLItem =
                    this._resolveCurrentLanguageDomNode(replacement)

                const currentLanguage: string =
                    currentLanguageDomNode.textContent
                if (currentLanguage && language === currentLanguage)
                    log.warn(
                        `Text node "${replacement.textToReplaceWith}" is`,
                        `marked as "${currentLanguage}" and has same`,
                        'translation language as it already is.'
                    )

                // Move markup to be replaced next its parent node.
                const nodeName: string =
                    replacement.domNodeToReplaceWith.nodeName.toLowerCase()
                if (this.options.alternativeDomNodeNames.includes(nodeName)) {
                    ;(replacement.domNodeToReplaceWith as Element)
                        .setAttribute('active', '')
                    ;(replacement.domNodeToTranslate as Element)
                        .removeAttribute('active')

                    continue
                }

                const newNode = this._createBackupNode(
                    nodeName,
                    currentLanguage,
                    currentText,
                    replacement.domNodeToTranslate
                )
                replacement.domNodeToTranslate.after(newNode)

                replacement.domNodeToTranslate.after(
                    (globalContext.document as Document)
                        .createComment(language)
                )

                this._applyTextReplacement(replacement)

                currentLanguageDomNode.remove()
                replacement.domNodeToReplaceWith.remove()
            }
        }

        this._updateKnownTextNodes()

        if (globalContext.localStorage)
            globalContext.localStorage.setItem(
                this.options.sessionDescription, language
            )

        this.currentLanguage = language
    }
    /**
     * Returns the current text content of a dom node, preferring innerHTML
     * over textContent when available.
     * @param domNode - The dom node to read the text content from.
     * @returns The current text content of the dom node.
     */
    _getCurrentNodeText(domNode: HTMLItem): string {
        return 'innerHTML' in domNode ?
            domNode.innerHTML :
            domNode.textContent
    }
    /**
     * Resolves the current language dom node for a given replacement. If the
     * node was not set initially it is determined by iterating through the
     * siblings and cached on the replacement object.
     * @param replacement - The replacement whose language dom node should be
     * resolved.
     * @returns The resolved language indicator dom node or null.
     */
    _resolveCurrentLanguageDomNode(replacement: Replacement): HTMLItem {
        if (replacement.currentLanguageDomNode)
            return replacement.currentLanguageDomNode

        /*
            Language dom node wasn't present initially. So we have to
            determine it now.
        */
        let currentLanguageDomNode = document.body
        let currentDomNodeFound = false
        for (const domNode of getAll(
            replacement.domNodeToTranslate.parentElement as HTMLElement
        )) {
            if (currentDomNodeFound) {
                replacement.currentLanguageDomNode =
                    currentLanguageDomNode = domNode as HTMLElement

                break
            }

            if (domNode === replacement.domNodeToTranslate)
                currentDomNodeFound = true
        }

        return currentLanguageDomNode
    }
    /**
     * Creates a backup node for the current dom node content before the
     * replacement is applied. Returns either a comment node or an element
     * node depending on `nodeName`.
     * @param nodeName - Lowercase node name of the replacement node.
     * @param currentLanguage - Current language string used as prefix.
     * @param currentText - Text content of the node to back up.
     * @param domNodeToTranslate - The dom node whose children are moved into
     * the backup element (for non-comment nodes).
     * @returns The created backup node.
     */
    _createBackupNode(
        nodeName: string,
        currentLanguage: string,
        currentText: string,
        domNodeToTranslate: HTMLItem
    ): Comment | HTMLElement {
        if (nodeName === '#comment')
            return (globalContext.document as Document).createComment(
                `${currentLanguage}:${currentText}`
            )

        const newNode =
            (globalContext.document as Document).createElement(nodeName)
        newNode.appendChild(
            (globalContext.document as Document)
                .createTextNode(`${currentLanguage}:`)
        )
        newNode.classList.add(this.options.selectors.hideClassName)
        // NOTE: We need to use "Array.from" to copy the list.
        for (const childNode of Array.from(domNodeToTranslate.childNodes))
            newNode.appendChild(childNode)

        return newNode
    }
    /**
     * Applies the actual text replacement to the target dom node. Moves
     * child nodes from the replacement node or sets innerHTML/textContent
     * directly depending on the node type.
     * @param replacement - Replacement object containing source, target and
     * replacement text information.
     */
    _applyTextReplacement(replacement: Replacement): void {
        if ('innerHTML' in replacement.domNodeToTranslate)
            if (
                replacement.domNodeToReplaceWith.nodeName.toLowerCase() ===
                '#comment'
            )
                replacement.domNodeToTranslate.innerHTML =
                    replacement.textToReplaceWith
            else {
                let languageRemoved = false
                // NOTE: We need to use "Array.from" to copy the list.
                for (const childNode of Array.from(
                    replacement.domNodeToReplaceWith.childNodes
                )) {
                    if (!languageRemoved) {
                        childNode.textContent =
                            (childNode.textContent as string)
                                .replace(/^[a-z]{2}[A-Z]{2}:/, '')
                        languageRemoved = true
                    }
                    replacement.domNodeToTranslate.appendChild(childNode)
                }
            }
        else
            replacement.domNodeToTranslate.textContent =
                replacement.textToReplaceWith
    }
    /**
     * Updates all dom nodes that have a known translation to their translated
     * text content.
     */
    _updateKnownTextNodes(): void {
        for (const [content, domNodes] of Object.entries(
            this._domNodesWithKnownTranslation
        ))
            for (const domNode of domNodes)
                domNode.textContent = content
    }
    /**
     * Switches the current language indicator in language switch triggered dom
     * nodes.
     * @param language - The new language to switch to.
     */
    _switchCurrentLanguageIndicator(language: string) {
        for (const domNode of this.hostDomNode.querySelectorAll(
            `a[href="#${this.options.languageHashPrefix}` +
            `${this.currentLanguage}"].` +
            this.options.currentLanguageIndicatorClassName
        ))
            domNode.classList.remove(
                this.options.currentLanguageIndicatorClassName
            )

        for (const domNode of this.hostDomNode.querySelectorAll(
            `a[href="#${this.options.languageHashPrefix}${language}"]`
        ))
            domNode.classList.add(
                this.options.currentLanguageIndicatorClassName
            )
    }
    // endregion
}
// endregion
export const api: WebComponentAPI<
    HTMLElement, Mapping<unknown>, Mapping<unknown>, typeof Web
> = {
    component: WebInternationalization,
    register: (
        tagName: string = camelCaseToDelimited(WebInternationalization._name)
    ) => {
        customElements.define(tagName, WebInternationalization)
    }
}
export default WebInternationalization

if ((globalContext as Mapping<boolean>).AUTO_DEFINE_WEB_INTERNATIONALIZATION)
    api.register()
