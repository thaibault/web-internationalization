import type { HTMLItem, Mapping } from 'clientnode';
export interface Replacement {
    domNodeToTranslate: HTMLItem;
    domNodeToReplaceWith: HTMLItem;
    textToReplaceWith: string;
    currentLanguageDomNode: HTMLItem | null;
}
export interface DefaultOptions {
    currentLanguageIndicatorClassName: string;
    currentLanguagePattern: string;
    default: string;
    useEffect: boolean;
    initial: null | string;
    languageHashPrefix: string;
    languageMapping: Mapping<Array<string>>;
    lockDescription: string;
    preReplacementLanguagePattern: string;
    alternativeDomNodeNames: Array<string>;
    replaceDomNodeNames: Array<string>;
    replacementDomNodeNames: Array<string>;
    replacementLanguagePattern: string;
    selection: Array<string>;
    selectors: {
        knownTranslation: string;
        hideClassName: string;
    };
    sessionDescription: string;
    templateDelimiter: (null | {
        pre: string;
        post: string;
    });
}
export type Options = DefaultOptions;
