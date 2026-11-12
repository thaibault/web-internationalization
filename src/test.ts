// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
'use strict'
/* !
    region header
    Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 4.0 international license.
    See https://creativecommons.org/licenses/by/4.0/deed.de
    endregion
*/
// region imports
import type {HTMLItem} from 'clientnode'

import {
    createDomNodes, FirstParameter, globalContext, isEquivalent, timeout
} from 'clientnode'

import {afterEach, beforeAll, describe, expect, test} from '@jest/globals'
import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter'

import WebInternationalization, {api} from './index'
import type {Options} from './type'
// endregion
describe('WebInternationalization', (): void => {
    let root: WebInternationalization

    beforeAll(async () => {
        if (Object.prototype.hasOwnProperty.call(
            globalContext.window, 'localStorage'
        ))
            globalContext.window?.localStorage.removeItem(
                WebInternationalization._name
            )

        api.register()
        root = document.createElement('web-internationalization') as
            WebInternationalization
        document.body.appendChild(root)

        await root.renderState.promise
    })
    // region tests
    /// region public methods
    test('switch', async (): Promise<void> => {
        await expect(root.switch('en')).resolves.toBeUndefined()

        root.hostDomNode.innerHTML = '<div>english<!--deDE:german--></div>'
        await root.switch('deDE')

        expect(isEquivalent(
            root.hostDomNode.innerHTML.replace(/[ \n]+/g, ' '),
            '<div>german<!--deDE--><!--enUS:english--></div>'
        )).toStrictEqual(true)

        await root.switch('deDE')
        expect(isEquivalent(
            root.hostDomNode.innerHTML.replace(/[ \n]+/g, ' '),
            '<div>german<!--deDE--><!--enUS:english--></div>'
        )).toStrictEqual(true)

        await root.switch('en')
        expect(isEquivalent(
            root.hostDomNode.innerHTML.replace(/[ \n]+/g, ' '),
            '<div>english<!--enUS--><!--deDE:german--></div>'
        )).toStrictEqual(true)

        root.hostDomNode.innerHTML = `
            <div class="web-internationalization-generated-content">
                <ul><li><a href="#">english</a></li></ul>
            </div>
            <div>english<!--deDE:german--></div>
        `
        await root.switch('de')

        expect(isEquivalent(
            root.hostDomNode.innerHTML.replace(/[ \n]+/g, ' '),
            ' <div class="web-internationalization-generated-content"> ' +
                '<ul><li><a href="#">german</a></li></ul>' +
            ' </div>' +
            ' <div>german<!--deDE--><!--enUS:english--></div> '
        )).toStrictEqual(true)
    })
    test('refresh', (): Promise<void> =>
        expect(root.refresh()).resolves.toBeUndefined()
    )
    /// endregion
    /// region protected methods
    /*
        NOTE: We cannot use clientnode's "testEach" helper since
        "internationalization isn't available during test specification time.
    */
    test.each([
        ['deDE', 'de'],
        ['deDE', 'de-de'],
        ['enUS', 'en-us'],
        ['frFR', 'fr'],
        ['enUS', '']
    ])(
        `'%s' === _normalizeLanguage('%s')`,
        (
            expected: ReturnType<WebInternationalization['_normalizeLanguage']>,
            given: FirstParameter<WebInternationalization['_normalizeLanguage']>
        ) => {
            expect(root._normalizeLanguage(given)).toStrictEqual(expected)
        }
    )
    test('_determineUsefulLanguage', (): void => {
        if (typeof globalThis.window.localStorage !== 'undefined') {
            globalThis.window.localStorage[root.options.sessionDescription] =
                'enUS'
            expect(root._determineUsefulLanguage())
                .toStrictEqual('enUS')
            delete globalThis.window.localStorage[
                root.options.sessionDescription
            ]
        }
        let referenceLanguage: string = root.options.default
        if (
            Object.prototype.hasOwnProperty.call(globalThis, 'navigator') &&
            typeof globalThis.navigator.language !== 'undefined'
        )
            referenceLanguage = globalThis.navigator.language
        expect(root._normalizeLanguage(root._determineUsefulLanguage()))
            .toStrictEqual(root._normalizeLanguage(referenceLanguage))
    })
    test('_handleSwitchEffect', (): Promise<void> =>
        expect(root._handleSwitchEffect('deDE', false))
            .resolves
            .toBeUndefined()
    )
    test('_registerTextNodeToChange', () => {
        root._registerTextNodeToChange(
            root,
            root.children[0] as HTMLItem,
            '2',
            root.children[0] as HTMLElement
        )

        expect(root._replacements[0].domNodeToTranslate)
            .toStrictEqual(root)

        expect(root._replacements).toHaveLength(1)

        root._registerTextNodeToChange(root, null, '2', null)
        expect(root._replacements).toHaveLength(1)
        root._replacements = []
    })
    test('_ensureLastTextNodeHavingLanguageIndicator', () => {
        expect(root._ensureLastTextNodeHavingLanguageIndicator(
            null, null, false
        )).toStrictEqual(null)
    })
    test('_switchLanguage', () => {
        root._switchLanguage('enUS')
        expect(root.currentLanguage).toStrictEqual('enUS')

        root._switchLanguage('deDE')
        expect(root.currentLanguage).toStrictEqual('deDE')
    })
    test('_switchCurrentLanguageIndicator', () => {
        const englishLink = createDomNodes<HTMLAnchorElement>(
            `<a href="#${root.options.languageHashPrefix}enUS">`
        )
        const germanLink = createDomNodes<HTMLAnchorElement>(
            `<a href="#${root.options.languageHashPrefix}deDE">`
        )
        root.append(englishLink)
        root.append(germanLink)

        root._switchCurrentLanguageIndicator('enUS')
        root.currentLanguage = 'enUS'

        expect(englishLink.classList.contains(
            root.options.currentLanguageIndicatorClassName
        )).toStrictEqual(true)
        expect(germanLink.classList.contains(
            root.options.currentLanguageIndicatorClassName
        )).toStrictEqual(false)

        root._switchCurrentLanguageIndicator('deDE')
        root.currentLanguage = 'deDE'

        expect(englishLink.classList.contains(
            root.options.currentLanguageIndicatorClassName
        )).toStrictEqual(false)
        expect(germanLink.classList.contains(
            root.options.currentLanguageIndicatorClassName
        )).toStrictEqual(true)
    })
    /// endregion
    // endregion
})
describe('WebInternationalization markup', (): void => {
    const instances: Array<WebInternationalization> = []
    /**
     * Creates, connects and renders a new component instance.
     * @param content - Inner html to translate.
     * @param options - Options to apply via attribute.
     * @returns Promise resolving to rendered instance.
     */
    const create = async (
        content: string, options: Partial<Options> = {}
    ): Promise<WebInternationalization> => {
        const domNode = document.createElement('web-internationalization') as
            WebInternationalization
        domNode.setAttribute(
            'options',
            JSON.stringify({initial: 'enUS', useEffect: false, ...options})
        )
        domNode.innerHTML = content
        document.body.appendChild(domNode)

        await domNode.renderState.promise

        instances.push(domNode)

        return domNode
    }
    /**
     * Waits until all pending language switches are finished.
     * @param domNode - Instance to wait for.
     * @returns Promise resolving when lock is free again.
     */
    const settle = async (domNode: WebInternationalization) => {
        await domNode.lock.acquire(domNode.options.lockDescription)
        await domNode.lock.release(domNode.options.lockDescription)
    }
    const text = (domNode: Element): string =>
        (domNode.textContent || '').replace(/\s+/g, ' ').trim()

    beforeAll(() => {
        if (!customElements.get('web-internationalization'))
            api.register()
    })
    afterEach(() => {
        for (const domNode of instances.splice(0))
            domNode.remove()
        globalContext.window?.localStorage.removeItem(
            WebInternationalization._name
        )
    })

    test('options attribute update', async (): Promise<void> => {
        const domNode = await create('<p>english<!--deDE:german--></p>')

        await domNode.onUpdateAttribute(
            'options', JSON.stringify({default: 'deDE'})
        )
        // Wait for triggered re-rendering.
        await timeout()
        await settle(domNode)

        expect(domNode.options.default).toStrictEqual('deDE')
        expect(domNode.options.languageHashPrefix).toStrictEqual('lang-')
    })
    test('initial language differing from default', async () => {
        const domNode = await create(
            '<p>english<!--deDE:german--></p>', {initial: 'deDE'}
        )

        expect(domNode.currentLanguage).toStrictEqual('deDE')
        expect(text(domNode)).toStrictEqual('german')
    })
    test('replace node with comment replacements', async () => {
        const domNode = await create(
            '<p><lang-replace>english <strong>nodes</strong></lang-replace>' +
            '<!--deDE:german <strong>Knoten</strong>--></p>'
        )

        await domNode.switch('deDE')
        expect(text(domNode)).toStrictEqual('german Knoten')
        expect(domNode.querySelector('lang-replace strong')?.textContent)
            .toStrictEqual('Knoten')

        await domNode.switch('enUS')
        expect(text(domNode)).toStrictEqual('english nodes')
    })
    test('replace node with replacement nodes', async () => {
        const domNode = await create(
            '<p><lang-replace>english <strong>nodes</strong></lang-replace>' +
            '<lang-replacement>deDE:german <strong>Knoten</strong>' +
            '</lang-replacement>' +
            '<lang-replacement>frFR:french <strong>noeuds</strong>' +
            '</lang-replacement></p>'
        )

        for (const replacement of domNode.querySelectorAll(
            'lang-replacement'
        ))
            expect(replacement.classList.contains(
                domNode.options.selectors.hideClassName
            )).toStrictEqual(true)

        await domNode.switch('deDE')
        expect(text(domNode.querySelector('lang-replace') as Element))
            .toStrictEqual('german Knoten')

        await domNode.switch('frFR')
        expect(text(domNode.querySelector('lang-replace') as Element))
            .toStrictEqual('french noeuds')

        await domNode.switch('enUS')
        expect(text(domNode.querySelector('lang-replace') as Element))
            .toStrictEqual('english nodes')
    })
    test('alternative nodes', async () => {
        const domNode = await create(
            '<p><lang-alternative>english</lang-alternative>' +
            '<lang-alternative lang="deDE">german</lang-alternative>' +
            '<lang-alternative lang="frFR">french</lang-alternative></p>'
        )
        const [english, german, french] =
            Array.from(domNode.querySelectorAll('lang-alternative'))
        const active = () =>
            [english, german, french].map((node) => node.hasAttribute('active'))

        await domNode.switch('deDE')
        expect(english.getAttribute('lang')).toStrictEqual('enUS')
        expect(active()).toStrictEqual([false, true, false])

        await domNode.switch('frFR')
        expect(active()).toStrictEqual([false, false, true])

        await domNode.switch('enUS')
        expect(active()).toStrictEqual([true, false, false])
    })
    test('alternative nodes without active sibling', async () => {
        const domNode = await create(
            '<p><lang-alternative lang="enUS">english</lang-alternative>' +
            '<lang-alternative lang="deDE">german</lang-alternative></p>'
        )

        await domNode.switch('deDE')
        expect(domNode.querySelectorAll('lang-alternative[active]'))
            .toHaveLength(0)
    })
    test('pre-replacement nodes', async () => {
        const domNode = await create(
            '<div><!--|deDE:german--><p>english</p></div>'
        )

        expect(domNode.querySelector('p')?.childNodes).toHaveLength(2)

        await domNode.switch('deDE')
        expect(text(domNode.querySelector('p') as Element))
            .toStrictEqual('german')
    })
    test('known translations', async () => {
        const domNode = await create(
            '<div class="web-internationalization-generated-content">' +
            '<a>english</a><a>english</a></div>' +
            '<p>english<!--deDE:german--></p>'
        )

        await domNode.switch('deDE')
        expect(Array.from(domNode.querySelectorAll('a')).map(text))
            .toStrictEqual(['german', 'german'])
    })
    test('switch with effect', async () => {
        const domNode = await create(
            '<p>english<!--deDE:german--></p>', {useEffect: true}
        )

        await domNode.switch('deDE')
        expect(text(domNode)).toStrictEqual('german')
    })
    test('mismatching language indicator', async () => {
        const domNode = await create(
            '<p>english<!--deDE--><!--deDE:german--></p>'
        )
        await domNode.switch('deDE')

        expect(text(domNode)).toStrictEqual('german')
    })
    test('skip template expressions', async () => {
        const domNode = await create('<p>{{value}}<!--deDE:wert--></p>')

        await domNode.switch('deDE')
        expect(text(domNode)).toStrictEqual('{{value}}')
    })
    test('language links', async () => {
        const domNode = await create(
            '<a href="#lang-deDE">de</a><a href="#lang-enUS">en</a>' +
            '<p>english<!--deDE:german--></p>'
        )
        const [german, english] = Array.from(domNode.querySelectorAll('a'))

        expect(domNode.options.selection).toStrictEqual(['deDE', 'enUS'])
        expect(english.classList.contains('current')).toStrictEqual(true)

        german.click()
        await settle(domNode)
        expect(domNode.currentLanguage).toStrictEqual('deDE')
        expect(german.classList.contains('current')).toStrictEqual(true)
        expect(english.classList.contains('current')).toStrictEqual(false)

        // Not allowed languages are ignored.
        await domNode.switch('frFR')
        expect(domNode.currentLanguage).toStrictEqual('deDE')

        // Re-binding replaces previous handlers.
        domNode.refreshLanguageButtonDomNodesBinding()
        expect(domNode.languageButtonEventHandler).toHaveLength(2)

        english.removeAttribute('href')
        english.click()
        await settle(domNode)
        expect(domNode.currentLanguage).toStrictEqual('deDE')
    })
    test('_determineUsefulLanguage fallbacks', async () => {
        const domNode = await create('', {selection: ['deDE', 'frFR']})

        expect(domNode._determineUsefulLanguage()).toStrictEqual('deDE')

        domNode.options.initial = null
        domNode.options.selection = []
        globalContext.window?.localStorage.removeItem(
            domNode.options.sessionDescription
        )
        // Shadow browser language by an empty own property.
        const navigator = globalContext.window?.navigator as Navigator
        Object.defineProperty(
            navigator, 'language', {configurable: true, value: ''}
        )
        try {
            domNode.options.default = 'frFR'
            expect(domNode._determineUsefulLanguage()).toStrictEqual('frFR')
        } finally {
            Reflect.deleteProperty(navigator, 'language')
        }

        expect(navigator.language).not.toStrictEqual('')
    })
    test('_ensureLastTextNodeHavingLanguageIndicator', async () => {
        const domNode = await create('<p>english</p>', {default: 'deDE'})
        const textNode = (domNode.querySelector('p') as HTMLElement)
            .firstChild as unknown as HTMLItem

        const indicator = domNode._ensureLastTextNodeHavingLanguageIndicator(
            textNode, null, true
        )

        expect(indicator?.textContent).toStrictEqual('deDE')
        expect(textNode.nextSibling).toStrictEqual(indicator)
    })
})
