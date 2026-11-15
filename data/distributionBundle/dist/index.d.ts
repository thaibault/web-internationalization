import type { HTMLItem, Mapping } from 'clientnode';
import type { WebComponentAPI } from 'web-component-wrapper/type';
import type { DefaultOptions, Options, Replacement } from './type';
import { Lock, Logger } from 'clientnode';
import { Web } from 'web-component-wrapper/Web';
export declare const log: Logger;
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
export declare class WebInternationalization<TElement = HTMLElement, ExternalProperties extends Mapping<unknown> = Mapping<unknown>, InternalProperties extends Mapping<unknown> = Mapping<unknown>> extends Web<TElement, ExternalProperties, InternalProperties> {
    static _name: string;
    static _defaultOptions: DefaultOptions;
    readonly self: typeof WebInternationalization;
    options: Options;
    onEnsure: (language: string) => Promise<void>;
    onSwitch: (oldLanguage: string, newLanguage: string) => Promise<void>;
    onEnsured: (language: string) => void;
    onSwitched: (oldLanguage: string, newLanguage: string) => void;
    switchLanguageButtonDomNodes: NodeListOf<HTMLAnchorElement> | null;
    languageButtonEventHandler: Array<() => void>;
    currentLanguage: string;
    knownTranslations: Mapping;
    lock: Lock<string | undefined>;
    _domNodesToFade: Array<HTMLElement>;
    _replacements: Array<Replacement>;
    _domNodesWithKnownTranslation: Mapping<Array<HTMLItem>>;
    /**
     * Defines dynamic getter and setter interface and resolves a configuration
     * object. Initializes the map implementation.
     */
    constructor();
    /**
     * Triggered when ever a given attribute has changed and triggers to update
     * configured dom content.
     * @param name - Attribute name which was updates.
     * @param newValue - New updated value.
     * @returns Returns when attribute has been updated.
     */
    onUpdateAttribute(name: string, newValue: string): Promise<void>;
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
    render(reason?: string, resolveRendering?: boolean): Promise<void>;
    refreshLanguageButtonDomNodesBinding(): void;
    /**
     * Switches the current language to a given language. This method is
     * mutually synchronized.
     * @param language - New language as string or "true". If set to "true" it
     * indicates that the dom tree should be checked again current language to
     * ensure every text node has the right content.
     * @param ensure - Indicates if a switch effect should be avoided.
     * @returns Returns the current instance wrapped in a promise.
     */
    switch(language: string | true, ensure?: boolean): Promise<void>;
    /**
     * Ensures current selected language.
     * @returns Promise resolving to nothing when switching as finished.
     */
    refresh(): Promise<void>;
    /**
     * Extends given options by default options.
     */
    _extendOptions(): void;
    /**
     * Depending on activated switching effect this method initialized the
     * effect of replace all text string directly.
     * @param language - New language to use.
     * @param ensure - Indicates if current language should be ensured again
     * every text node content.
     * @returns Returns the current instance wrapped in a promise.
     */
    _handleSwitchEffect(language: string, ensure: boolean): Promise<void>;
    /**
     * Moves pre-replacement dom nodes into the next dom node behind the
     * translation text to use the same translation algorithm for both.
     */
    _movePreReplacementNodes(): void;
    /**
     * Collects all text nodes that should be replaced later.
     * @param language - New language to use.
     * @param ensure - Indicates if the whole dom should be checked again
     * current language to ensure every text node has right content.
     */
    _collectDomNodesToReplace(language: string, ensure: boolean): void;
    /**
     * Determines whether a given dom node should be skipped during
     * translation collection.
     * @param domNode - The dom node to evaluate.
     * @param nodeTextContent - Pre-computed text content of the node.
     * @param currentDomNodeToTranslate - The currently tracked translation
     * ancestor node.
     * @returns Returns true if the node should be skipped.
     */
    _shouldSkipDomNode(domNode: Node, nodeTextContent: Array<string>, currentDomNodeToTranslate: HTMLItem | null): boolean;
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
    _processAlternativeDomNode(domNode: HTMLItem, language: string, ensure: boolean, currentLanguageDomNode: HTMLItem | null): void;
    _initializeCurrentLanguageDomNode(domNode: Element, ensure: boolean): void;
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
    _processReplacementDomNode(domNode: HTMLItem, nodeName: string, language: string, ensure: boolean, currentDomNodeToTranslate: HTMLItem, currentLanguageDomNode: HTMLItem | null): {
        domNodeToTranslate: HTMLItem | null;
        languageDomNode: HTMLItem | null;
    };
    /**
     * Iterates all text nodes in language known area with known translations.
     */
    _registerKnownTextNodes(): void;
    /**
     * Normalizes a given language string.
     * @param language - New language to use.
     * @returns Returns the normalized version of given language.
     */
    _normalizeLanguage(language: string): string;
    /**
     * Determines a useful initial language depending on session and browser
     * settings.
     * @returns Returns the determined language.
     */
    _determineUsefulLanguage(): string;
    /**
     * Registers a text node to change its content with a given replacement.
     * @param domNodeToTranslate - Text node with content to
     * translate.
     * @param domNodeToReplaceWith - A node with replacement content.
     * @param textToReplaceWith - Text content to use as replacement.
     * @param currentLanguageDomNode - A potential given text node indicating
     * the language of given text node.
     */
    _registerTextNodeToChange(domNodeToTranslate: HTMLItem, domNodeToReplaceWith: HTMLItem | null, textToReplaceWith: string, currentLanguageDomNode: HTMLItem | null): void;
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
    _ensureLastTextNodeHavingLanguageIndicator(lastTextNodeToTranslate: HTMLItem | null, lastLanguageDomNode: HTMLItem | null, ensure: boolean): HTMLItem | null;
    /**
     * Performs the low-level text replacements for switching to a given
     * language.
     * @param language - The new language to switch to.
     */
    _switchLanguage(language: string): void;
    /**
     * Returns the current text content of a dom node, preferring innerHTML
     * over textContent when available.
     * @param domNode - The dom node to read the text content from.
     * @returns The current text content of the dom node.
     */
    _getCurrentNodeText(domNode: HTMLItem): string;
    /**
     * Resolves the current language dom node for a given replacement. If the
     * node was not set initially it is determined by iterating through the
     * siblings and cached on the replacement object.
     * @param replacement - The replacement whose language dom node should be
     * resolved.
     * @returns The resolved language indicator dom node or null.
     */
    _resolveCurrentLanguageDomNode(replacement: Replacement): HTMLItem;
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
    _createBackupNode(nodeName: string, currentLanguage: string, currentText: string, domNodeToTranslate: HTMLItem): Comment | HTMLElement;
    /**
     * Applies the actual text replacement to the target dom node. Moves
     * child nodes from the replacement node or sets innerHTML/textContent
     * directly depending on the node type.
     * @param replacement - Replacement object containing source, target and
     * replacement text information.
     */
    _applyTextReplacement(replacement: Replacement): void;
    /**
     * Updates all dom nodes that have a known translation to their translated
     * text content.
     */
    _updateKnownTextNodes(): void;
    /**
     * Switches the current language indicator in language switch triggered dom
     * nodes.
     * @param language - The new language to switch to.
     */
    _switchCurrentLanguageIndicator(language: string): void;
}
export declare const api: WebComponentAPI<HTMLElement, Mapping<unknown>, Mapping<unknown>, typeof Web>;
export default WebInternationalization;
