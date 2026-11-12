<!-- !/usr/bin/env markdown
-*- coding: utf-8 -*-
region header
Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012

License
-------

This library written by Torben Sickert stands under a creative commons naming
4.0 international license.
See https://creativecommons.org/licenses/by/4.0/deed.de
endregion -->

<!--|deDE:Projektstatus-->
<!--|frFR:Statut du projet-->
Project Status
--------------

[![npm](https://img.shields.io/npm/v/web-internationalization?color=%23d55e5d&label=npm%20package%20version&logoColor=%23d55e5d&style=for-the-badge)](https://www.npmjs.com/package/web-internationalization)
[![npm downloads](https://img.shields.io/npm/dy/web-internationalization.svg?style=for-the-badge)](https://www.npmjs.com/package/web-internationalization)

[![build](https://img.shields.io/github/actions/workflow/status/thaibault/web-internationalization/build.yaml?style=for-the-badge)](https://github.com/thaibault/web-internationalization/actions/workflows/build.yaml)
[![build push package](https://img.shields.io/github/actions/workflow/status/thaibault/web-internationalization/build-package-and-push.yaml?label=build%20push%20package&style=for-the-badge)](https://github.com/thaibault/web-internationalization/actions/workflows/build-package-and-push.yaml)

[![check types](https://img.shields.io/github/actions/workflow/status/thaibault/web-internationalization/check-types.yaml?label=check%20types&style=for-the-badge)](https://github.com/thaibault/web-internationalization/actions/workflows/check-types.yaml)
[![lint](https://img.shields.io/github/actions/workflow/status/thaibault/web-internationalization/lint.yaml?label=lint&style=for-the-badge)](https://github.com/thaibault/web-internationalization/actions/workflows/lint.yaml)
[![test](https://img.shields.io/github/actions/workflow/status/thaibault/web-internationalization/test-coverage-report.yaml?label=test&style=for-the-badge)](https://github.com/thaibault/web-internationalization/actions/workflows/test-coverage-report.yaml)

[![code coverage](https://img.shields.io/coverallsCoverage/github/thaibault/web-internationalization?label=code%20coverage&style=for-the-badge)](https://coveralls.io/github/thaibault/web-internationalization)

[![deploy web documentation](https://img.shields.io/github/actions/workflow/status/thaibault/web-internationalization/deploy-web-documentation.yaml?label=deploy%20web%20documentation&style=for-the-badge)](https://github.com/thaibault/web-internationalization/actions/workflows/deploy-web-documentation.yaml)
[![web documentation](https://img.shields.io/website-up-down-green-red/https/tsickert.com/web-internationalization.svg?label=web-documentation&style=for-the-badge)](https://tsickert.com/web-internationalization)

<!--|deDE:Einsatzmöglichkeiten-->
<!--|frFR:Cas d'utilisation-->
Use case
--------

Translate a website directly in the browser without a build step, server or
translation files. Write the translations right next to the original text,
mostly as HTML comments, and wrap the page into the "web-internationalization"
web component. It switches all texts when a visitor clicks a language link,
remembers the choice and picks a fitting language on the first visit.
<!--deDE:
    Übersetzen Sie eine Webseite direkt im Browser, ohne Build-Schritt, Server
    oder Übersetzungsdateien. Schreiben Sie die Übersetzungen direkt neben den
    Originaltext, meist als HTML-Kommentare, und umschließen Sie die Seite mit
    der Web Component "web-internationalization". Sie wechselt alle Texte,
    wenn Besucher auf einen Sprachlink klicken, merkt sich die Auswahl und
    wählt beim ersten Besuch eine passende Sprache.
-->
<!--frFR:
    Traduisez un site web directement dans le navigateur, sans étape de
    compilation, serveur ni fichiers de traduction. Écrivez les traductions
    juste à côté du texte original, le plus souvent sous forme de
    commentaires HTML, et englobez la page dans le web component
    "web-internationalization". Il change tous les textes lorsqu'un visiteur
    clique sur un lien de langue, mémorise ce choix et choisit une langue
    adaptée lors de la première visite.
-->

<div class="wd-table-of-contents">
    <h2 id="content">Content<!--deDE:Inhalt--><!--frFR:Contenu--></h2>
    <!--wd-table-of-contents-->
</div>

<!--|deDE:Schnellstart-->
<!--|frFR:Démarrage rapide-->
Quick start
-----------

Load the bundle, which contains all dependencies, register the component and
add a few styles that hide the translations not shown:
<!--deDE:
    Laden Sie das Bundle, das alle Abhängigkeiten enthält, registrieren Sie
    die Komponente und fügen Sie ein paar Styles hinzu, die die gerade nicht
    angezeigten Übersetzungen ausblenden:
-->
<!--frFR:
    Chargez le bundle, qui contient toutes les dépendances, enregistrez le
    composant et ajoutez quelques styles qui masquent les traductions non
    affichées:
-->

```HTML
<script type="module">
    import {
        api
    } from 'https://unpkg.com/web-internationalization@latest/dist/bundle/index.js'

    api.register()
</script>
<style>
    lang-replacement, lang-alternative:not([active]), .wi-hide {
        display: none;
    }
</style>

<web-internationalization>
    <a href="#lang-enUS">English</a>
    <a href="#lang-deDE">Deutsch</a>

    <p>
        Welcome to my website.
        <!--deDE:Willkommen auf meiner Webseite.-->
    </p>
</web-internationalization>
```

Instead of calling "api.register()" you can also set
"window.AUTO_DEFINE_WEB_INTERNATIONALIZATION = true" before the script is
loaded. "api.register('my-translator')" registers the component under another
tag name.
<!--deDE:
    Statt "api.register()" aufzurufen, können Sie auch
    "window.AUTO_DEFINE_WEB_INTERNATIONALIZATION = true" setzen, bevor das
    Skript geladen wird. "api.register('my-translator')" registriert die
    Komponente unter einem anderen Tag-Namen.
-->
<!--frFR:
    Au lieu d'appeler "api.register()", vous pouvez aussi définir
    "window.AUTO_DEFINE_WEB_INTERNATIONALIZATION = true" avant le chargement
    du script. "api.register('my-translator')" enregistre le composant sous
    un autre nom de balise.
-->

<!--|deDE:Mit einem Paketmanager-->
<!--|frFR:Avec un gestionnaire de paquets-->
### With a package manager

```bash
npm install web-internationalization core-js
```

The default entry point additionally needs its optional peer dependencies
"clientnode" and "web-component-wrapper". The bundle variant
"web-internationalization/bundle" already contains them:
<!--deDE:
    Der Standardeinstiegspunkt benötigt zusätzlich seine optionalen
    Peer-Abhängigkeiten "clientnode" und "web-component-wrapper". Die
    Bundle-Variante "web-internationalization/bundle" enthält sie bereits:
-->
<!--frFR:
    Le point d'entrée par défaut nécessite en plus ses dépendances « peer »
    optionnelles "clientnode" et "web-component-wrapper". La variante bundle
    "web-internationalization/bundle" les contient déjà:
-->

```JavaScript
import {api} from 'web-internationalization'
// Or without further dependencies:
// import {api} from 'web-internationalization/bundle'

api.register()
```

<!--|deDE:Ältere Browser-->
<!--|frFR:Navigateurs plus anciens-->
### Older browsers

The default variants target browsers supporting ES6 classes. For older
browsers use "web-internationalization/compatible" or the bundle
"web-internationalization/bundle/compatible" ("dist/bundle/compatible/index.js"
on a CDN) and load the web components polyfill before.
<!--deDE:
    Die Standardvarianten zielen auf Browser, die ES6-Klassen unterstützen.
    Für ältere Browser verwenden Sie "web-internationalization/compatible"
    oder das Bundle "web-internationalization/bundle/compatible"
    ("dist/bundle/compatible/index.js" über ein CDN) und laden vorher das Web
    Components Polyfill.
-->
<!--frFR:
    Les variantes par défaut ciblent les navigateurs qui prennent en charge
    les classes ES6. Pour les navigateurs plus anciens, utilisez
    "web-internationalization/compatible" ou le bundle
    "web-internationalization/bundle/compatible"
    ("dist/bundle/compatible/index.js" via un CDN) et chargez auparavant le
    polyfill des web components.
-->

<!--|deDE:Übersetzungen schreiben-->
<!--|frFR:Écrire les traductions-->
Writing translations
--------------------

The component only translates content inside its own tag. Each language is
written as a code of two lowercase and two uppercase letters, like "enUS",
"deDE" or "frFR".
<!--deDE:
    Die Komponente übersetzt nur Inhalte innerhalb ihres eigenen Tags. Jede
    Sprache wird als Code aus zwei Klein- und zwei Großbuchstaben
    geschrieben, z. B. "enUS", "deDE" oder "frFR".
-->
<!--frFR:
    Le composant ne traduit que le contenu situé à l'intérieur de sa propre
    balise. Chaque langue s'écrit sous forme d'un code de deux lettres
    minuscules et deux majuscules, comme "enUS", "deDE" ou "frFR".
-->

<!--|deDE:Text mit Kommentaren-->
<!--|frFR:Texte avec des commentaires-->
### Text with comments

Put a comment starting with the language code and a colon right behind a
text:
<!--deDE:
    Setzen Sie direkt hinter einen Text einen Kommentar, der mit dem
    Sprachcode und einem Doppelpunkt beginnt:
-->
<!--frFR:
    Placez juste après un texte un commentaire commençant par le code de
    langue suivi de deux-points:
-->

<!--showExample-->

```HTML
<p>
    Your English version.
    <!--deDE:Ihre deutsche Variante.-->
    <!--frFR:
        Votre version française.
    -->
</p>
```

A comment with a leading "|" translates the next element containing text
instead. This is handy for headings and elements which should stay clean:
<!--deDE:
    Ein Kommentar mit vorangestelltem "|" übersetzt stattdessen das nächste
    Element, das Text enthält. Das ist praktisch für Überschriften und
    Elemente, die frei von Kommentaren bleiben sollen:
-->
<!--frFR:
    Un commentaire précédé de "|" traduit à la place l'élément suivant qui
    contient du texte. C'est pratique pour les titres et les éléments qui
    doivent rester sans commentaires:
-->

<!--showExample-->

```HTML
<!--|deDE:Ihre deutsche Variante.--><!--|frFR:Votre version française.-->
<p>Your English version.</p>
```

<!--|deDE:Text mit Auszeichnungen-->
<!--|frFR:Texte avec balisage-->
### Text with markup

A comment only replaces the single text node in front of it. To translate
text containing elements, wrap it into "lang-replace":
<!--deDE:
    Ein Kommentar ersetzt nur den einzelnen Textknoten davor. Um Text mit
    enthaltenen Elementen zu übersetzen, umschließen Sie ihn mit
    "lang-replace":
-->
<!--frFR:
    Un commentaire ne remplace que le nœud de texte qui le précède. Pour
    traduire un texte contenant des éléments, englobez-le dans
    "lang-replace":
-->

<!--showExample-->

```HTML
<p>
    <lang-replace>
        Your English version with <strong>markup</strong> inside.
    </lang-replace>
    <!--deDE:Ihre deutsche Variante mit <strong>Auszeichnung</strong>.-->
    <!--frFR:Votre version française avec <strong>balisage</strong>.-->
</p>
```

Instead of comments you can also use "lang-replacement" elements, so that
editors and tools treat the translations as regular markup:
<!--deDE:
    Statt Kommentaren können Sie auch "lang-replacement"-Elemente verwenden,
    sodass Editoren und Werkzeuge die Übersetzungen als normales Markup
    behandeln:
-->
<!--frFR:
    Au lieu de commentaires, vous pouvez aussi utiliser des éléments
    "lang-replacement", afin que les éditeurs et outils traitent les
    traductions comme du balisage ordinaire:
-->

<!--showExample-->

```HTML
<p>
    <lang-replace>
        Your English version with <strong>markup</strong> inside.
    </lang-replace>
    <lang-replacement>deDE:
        Ihre deutsche Variante mit <strong>Auszeichnung</strong>.
    </lang-replacement>
    <lang-replacement>frFR:
        Votre version française avec <strong>balisage</strong>.
    </lang-replacement>
</p>
```

<!--|deDE:Alternativen-->
<!--|frFR:Alternatives-->
### Alternatives

Replacements move content around in the DOM. If scripts or styles rely on
stable elements, write each language as its own "lang-alternative" element.
The one without a "lang" attribute holds the default language. Only the
element of the current language gets the "active" attribute and is shown:
<!--deDE:
    Ersetzungen verschieben Inhalte im DOM. Sind Skripte oder Styles auf
    stabile Elemente angewiesen, schreiben Sie jede Sprache als eigenes
    "lang-alternative"-Element. Das Element ohne "lang"-Attribut enthält die
    Standardsprache. Nur das Element der aktuellen Sprache erhält das
    Attribut "active" und wird angezeigt:
-->
<!--frFR:
    Les remplacements déplacent du contenu dans le DOM. Si des scripts ou des
    styles dépendent d'éléments stables, écrivez chaque langue dans son
    propre élément "lang-alternative". Celui sans attribut "lang" contient la
    langue par défaut. Seul l'élément de la langue courante reçoit l'attribut
    "active" et est affiché:
-->

<!--showExample-->

```HTML
<p>
    <lang-alternative>Your English version.</lang-alternative>
    <lang-alternative lang="deDE">Ihre deutsche Variante.</lang-alternative>
    <lang-alternative lang="frFR">Votre version française.</lang-alternative>
</p>
```

<!--|deDE:Bekannte Übersetzungen wiederverwenden-->
<!--|frFR:Réutiliser les traductions connues-->
### Reusing known translations

Generated content like a table of contents repeats texts which are
translated elsewhere already. Mark such areas with the class
"web-internationalization-generated-content" and every text in them which
exactly matches an already translated text is switched as well:
<!--deDE:
    Generierte Inhalte wie ein Inhaltsverzeichnis wiederholen Texte, die an
    anderer Stelle bereits übersetzt sind. Markieren Sie solche Bereiche mit
    der Klasse "web-internationalization-generated-content", dann wird jeder
    Text darin, der genau einem bereits übersetzten Text entspricht,
    ebenfalls umgeschaltet:
-->
<!--frFR:
    Un contenu généré comme une table des matières répète des textes déjà
    traduits ailleurs. Marquez ces zones avec la classe
    "web-internationalization-generated-content" et chaque texte qui y
    correspond exactement à un texte déjà traduit change lui aussi:
-->

<!--showExample-->

```HTML
<ul class="web-internationalization-generated-content">
    <li><a href="#introduction">Introduction</a></li>
</ul>

<h2 id="introduction">
    Introduction<!--deDE:Einführung--><!--frFR:Présentation-->
</h2>
```

Texts ending with the template delimiter "}}" are left untouched, so
templates rendered later on the client keep working.
<!--deDE:
    Texte, die mit dem Template-Begrenzer "}}" enden, bleiben unverändert,
    damit später im Client gerenderte Templates weiter funktionieren.
-->
<!--frFR:
    Les textes se terminant par le délimiteur de template "}}" restent
    intacts, afin que les templates rendus plus tard côté client continuent
    de fonctionner.
-->

<!--|deDE:Sprache wechseln-->
<!--|frFR:Changer de langue-->
Switching the language
----------------------

Every link inside the component pointing to "#lang-" followed by a language
code switches to that language. The link of the current language gets the
class "current", so you can highlight it with CSS:
<!--deDE:
    Jeder Link innerhalb der Komponente, der auf "#lang-" gefolgt von einem
    Sprachcode zeigt, wechselt zu dieser Sprache. Der Link der aktuellen
    Sprache erhält die Klasse "current", sodass Sie ihn per CSS hervorheben
    können:
-->
<!--frFR:
    Chaque lien à l'intérieur du composant pointant vers "#lang-" suivi d'un
    code de langue bascule vers cette langue. Le lien de la langue courante
    reçoit la classe "current", ce qui permet de le mettre en évidence en
    CSS:
-->

<!--showExample-->

```HTML
<a href="#lang-deDE">de</a>
<a href="#lang-enUS">en</a>
<a href="#lang-frFR">fr</a>
```

Without a configured "selection" these links also define which languages are
allowed. If you add links later, bind them with
"refreshLanguageButtonDomNodesBinding()". You can also switch from code:
<!--deDE:
    Ohne konfigurierte "selection" legen diese Links auch fest, welche
    Sprachen erlaubt sind. Fügen Sie später Links hinzu, binden Sie sie mit
    "refreshLanguageButtonDomNodesBinding()". Sie können auch per Code
    wechseln:
-->
<!--frFR:
    Sans "selection" configurée, ces liens définissent aussi les langues
    autorisées. Si vous ajoutez des liens plus tard, liez-les avec
    "refreshLanguageButtonDomNodesBinding()". Vous pouvez aussi changer de
    langue depuis le code:
-->

```JavaScript
const translator = document.querySelector('web-internationalization')

translator.refreshLanguageButtonDomNodesBinding()
await translator.switch('deDE')
console.log(translator.currentLanguage)
```

<!--|deDE:Startsprache-->
<!--|frFR:Langue initiale-->
### Initial language

On the first render the language is taken from the "initial" option, else
from the visitor's last choice saved in the local storage, else from the
browser language and finally from the "default" option ("enUS"). Common
spellings like "de", "de-DE" or "german" are mapped to their language code,
unknown ones fall back to the default.
<!--deDE:
    Beim ersten Rendern wird die Sprache aus der Option "initial" genommen,
    sonst aus der letzten im Local Storage gespeicherten Wahl der Besucher,
    sonst aus der Browsersprache und zuletzt aus der Option "default"
    ("enUS"). Übliche Schreibweisen wie "de", "de-DE" oder "german" werden
    ihrem Sprachcode zugeordnet, unbekannte fallen auf die Standardsprache
    zurück.
-->
<!--frFR:
    Lors du premier rendu, la langue provient de l'option "initial", sinon du
    dernier choix du visiteur enregistré dans le local storage, sinon de la
    langue du navigateur et enfin de l'option "default" ("enUS"). Les
    écritures courantes comme "de", "de-DE" ou "german" sont associées à leur
    code de langue, les inconnues reviennent à la langue par défaut.
-->

<!--|deDE:Konfiguration-->
<!--|frFR:Configuration-->
Configuration
-------------

Pass options as a JavaScript object in the "options" attribute:
<!--deDE:Übergeben Sie Optionen als JavaScript-Objekt im Attribut "options":-->
<!--frFR:
    Passez les options sous forme d'objet JavaScript dans l'attribut
    "options":
-->

```HTML
<web-internationalization
    options="{default: 'deDE', selection: ['deDE', 'enUS'], useEffect: false}"
>
    ...
</web-internationalization>
```

- "default": Language of the original texts and the fallback, "enUS" by
  default.<!--deDE:"default": Sprache der Originaltexte und Rückfallsprache, standardmäßig "enUS".--><!--frFR:"default": Langue des textes originaux et langue de repli, "enUS" par défaut.-->
- "initial": Language to start with, overrides the automatic detection.<!--deDE:"initial": Sprache, mit der begonnen wird, überschreibt die automatische Erkennung.--><!--frFR:"initial": Langue de départ, remplace la détection automatique.-->
- "selection": Allowed languages. Switching to others is ignored.<!--deDE:"selection": Erlaubte Sprachen. Wechsel zu anderen werden ignoriert.--><!--frFR:"selection": Langues autorisées. Les changements vers d'autres langues sont ignorés.-->
- "useEffect": Fades changed texts out and in, "true" by default.<!--deDE:"useEffect": Blendet geänderte Texte aus und wieder ein, standardmäßig "true".--><!--frFR:"useEffect": Fait disparaître puis réapparaître les textes modifiés, "true" par défaut.-->
- "languageMapping": Alternative spellings per language code.<!--deDE:"languageMapping": Alternative Schreibweisen je Sprachcode.--><!--frFR:"languageMapping": Écritures alternatives par code de langue.-->
- "languageHashPrefix": Link prefix of language links, "lang-" by default.<!--deDE:"languageHashPrefix": Präfix der Sprachlinks, standardmäßig "lang-".--><!--frFR:"languageHashPrefix": Préfixe des liens de langue, "lang-" par défaut.-->
- "currentLanguageIndicatorClassName": Class of the current language link,
  "current" by default.<!--deDE:"currentLanguageIndicatorClassName": Klasse des Links der aktuellen Sprache, standardmäßig "current".--><!--frFR:"currentLanguageIndicatorClassName": Classe du lien de la langue courante, "current" par défaut.-->
- "selectors.knownTranslation": Selector of areas reusing known translations.<!--deDE:"selectors.knownTranslation": Selektor der Bereiche, die bekannte Übersetzungen wiederverwenden.--><!--frFR:"selectors.knownTranslation": Sélecteur des zones réutilisant les traductions connues.-->
- "templateDelimiter": Delimiters of client side templates, "{{" and "}}" by
  default.<!--deDE:"templateDelimiter": Begrenzer clientseitiger Templates, standardmäßig "{{" und "}}".--><!--frFR:"templateDelimiter": Délimiteurs des templates côté client, "{{" et "}}" par défaut.-->

<!--|deDE:Ereignisse-->
<!--|frFR:Événements-->
### Events

"onSwitch" runs before and "onSwitched" after switching to another language,
both get the old and the new language. "onEnsure" and "onEnsured" get the
language when the current one is applied again, e.g. on the first render.
"onSwitch" and "onEnsure" may return a promise, the texts are replaced after
it resolved. Set them as properties or as attributes, where "parameters"
holds the arguments:
<!--deDE:
    "onSwitch" läuft vor und "onSwitched" nach dem Wechsel zu einer anderen
    Sprache, beide erhalten die alte und die neue Sprache. "onEnsure" und
    "onEnsured" erhalten die Sprache, wenn die aktuelle erneut angewendet
    wird, z. B. beim ersten Rendern. "onSwitch" und "onEnsure" dürfen ein
    Promise zurückgeben, die Texte werden ersetzt, sobald es erfüllt ist.
    Setzen Sie sie als Eigenschaften oder als Attribute, wobei "parameters"
    die Argumente enthält:
-->
<!--frFR:
    "onSwitch" s'exécute avant et "onSwitched" après le passage à une autre
    langue, tous deux reçoivent l'ancienne et la nouvelle langue. "onEnsure"
    et "onEnsured" reçoivent la langue lorsque la langue courante est
    appliquée de nouveau, par exemple lors du premier rendu. "onSwitch" et
    "onEnsure" peuvent retourner une promesse, les textes sont remplacés une
    fois celle-ci résolue. Définissez-les comme propriétés ou comme
    attributs, où "parameters" contient les arguments:
-->

```HTML
<web-internationalization
    on-switched="document.documentElement.lang = parameters[1].substring(0, 2)"
>
    ...
</web-internationalization>
```

```JavaScript
document.querySelector('web-internationalization').onSwitch =
    async (oldLanguage, newLanguage) => {
        await loadFonts(newLanguage)
    }
```

<!--|deDE:Entwicklung-->
<!--|frFR:Développement-->
Development
-----------

```bash
yarn install
yarn start
yarn test
```

"yarn start" serves a playground with examples of all translation variants.
<!--deDE:
    "yarn start" stellt eine Spielwiese mit Beispielen aller
    Übersetzungsvarianten bereit.
-->
<!--frFR:
    "yarn start" sert un terrain de jeu avec des exemples de toutes les
    variantes de traduction.
-->
