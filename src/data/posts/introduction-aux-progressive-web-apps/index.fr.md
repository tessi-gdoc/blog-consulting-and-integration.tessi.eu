---
lang: fr
key: blog-post
image: /img/introduction_aux_progressive_web_app.png
imageAlt: Introduction aux Progressive Web Apps
path: introduction-progressive-web-apps-avantages-exemple-tuto
title: 'Introduction aux Progressive Web Apps : Avantages et développement  '
description: >-
  Pourquoi les Progressive Web Apps sont-elles devenues l’un des éléments-clés
  de la stratégie commerciale de Google ? Découvrez les avantages d’une
  progressive web app et un tuto appliqué à un exemple concret pour développer
  votre PWA. 
date: 2020-01-06T17:03:48.051Z
tags:
  - ccm
authors:
  - avatar: /img/mag.jpg
    firstname: Mathieu
    lastname: Gauthier
introduction: >-
  Les Progressive Web Apps sont une invention de Google. Initialement, elles
  étaient destinées aux pays émergents, grands consommateurs d’Internet mais où
  les smartphones utilisés sont loin d’être aussi performants que ceux que nous
  connaissons. Leur mémoire est très limitée, la couverture réseau en est encore
  à la 2G/3G et le coût de la data est élevé. Difficile alors d’installer des
  applications natives gourmandes en stockage et nécessitant une connexion
  Internet pour leur bon fonctionnement. C’est pourquoi, pour faciliter son
  implantation dans ces pays en voie de développement, Google n’avait d’autres
  choix que d’opter pour une nouvelle solution technologique afin de s’adapter
  au marché. La multinationale prend alors la décision d'investir dans le
  développement d'applications web légères, rapides, installables et
  indépendantes de la qualité du réseau : la Progressive Web App (PWA).
  Regardons de plus près les avantages de ce type d’application mobile et leurs
  principes de développement.
---
## 01/ Les Progressive Web Apps : une alternative aux applications natives à considérer

### Les avantages de la PWA vs. l'application native

A priori, la stratégie de Google se base uniquement sur la proposition d'une nouvelle offre dans les pays émergents. Mais quel serait l'intérêt d'une PWA dans un pays fortement industrialisé ? Les capacités des smartphones en Europe sont bien assez suffisantes pour installer de nombreuses applications natives. Alors pourquoi songer à privilégier le développement d'une PWA au lieu d'une application native.

Plusieurs réponses sont valables :

* **La distribution des applications natives est compliquée.** Pour qu'un de vos clients utilise votre application, il faut le convaincre d'aller la télécharger depuis un store ou votre site web, puis de l'installer (autrement-dit prendre une partie plus ou moins volumineuse de la capacité de stockage de son smartphone) et enfin, de l'inciter à l'utiliser et à y revenir. Cela demande beaucoup d'efforts, et un coût d'acquisition qui, [selon la startup portugaise Selio](https://www.geekmj.org/progressive-web-app-introduction), serait 10 fois plus élevé que pour une PWA.
* **Le côut de production d'une PWA est très faible.** Au lieu de mobiliser plusieurs équipes de développeurs pour la réalisation d'une application native iOS, Android ou d'un site web, le développement d'une Progressive Web App ne nécessite qu'une seule équipe.
* **La PWA améliore l'engagement des utilisateurs.** De nombreuses entreprises ont décidé de créer ou de migrer vers des PWA pour améliorer leur taux d'engagement. On peut citer Twitter avec sa PWA [Twitter Lite](https://mobile.twitter.com/home), Uber, Trivago, New York Times et évidemment, Google avec Maps Go, Photos, Google +... Vous pouvez retrouver sur le site [PwaStats](https://www.pwastats.com/) les statistiques commerciales des PWA de certaines de ces entreprises et bien d'autres.
* **La PWA peut rivaliser avec une application native.** En fonction de vos besoins, il est possible d'obtenir des résultats très satisfaisants en matière de performance. Nicolas Gallagher, Engineer Lead de Twitter Lite confie :

> Twitter Lite is now the fastest, least expensive, and most reliable way to use Twitter. The web apprivals the performance of our native apps but requires less than 3% of the device storage space compared to Twitter for Android.

D'un point de vue fonctionnel, les PWA arrivent également aujourd'hui à utiliser des fonctionnalités propres aux applications natives grâce aux HTML5 APIs.

* **Faible consommation de données.** Une application native peut consommer plusieurs dizaines de MB voire GB de data (par exemple, il n'est pas rare d'obtenir un cache de plusieurs GB pour l'application mobile Facebook). Pour une PWA, le serveur distribue uniquement des fichiers HTML, CSS et Javascript compressés et minifiés de manière à réduire considérablement la taille de l'application mais aussi du cache. Dans le cas de Twitter, la Progressive Web App ne fait que 600KB contre 23.5MB pour l'application Android.

### Progressive Web Apps sur iOS : Apple tente de résister

Il est indéniable que la PWA à son niveau actuel ne remplace pas l'application mobile telle qu'on la connaît. Cela est dû à son manque de fonctionnalités natives supportées par l'OS de nos smartphones et plus particulièrement par iOS. De plus, l'évolutivité du marché de la PWA chez Apple parait compromise en raison d'un manque à gagner sur la *"App StoreTax"* de 30%. En effet, cette taxe étant applicable uniquement aux applications sur l’App Store et donc aux applications natives, la PWA s’en est affranchie.

Pour autant, en Mars 2019, Apple a fait un effort avec la sortie de iOS 11.3 et Safari 13. Un utilisateur d'iPhone peut dorénavant supporter une partie des fonctionnalités des Progressive Web Apps.

En effet, difficile de complètement fermer la porte aux Progressive Web Apps, à présent largement adoptées par les entreprises et les particuliers. En addition des avantages évoqués plus haut, elles représentent notamment un atout majeur pour vos communications client, capable de nettement améliorer l'engagement de vos utilisateurs qu’ils soient adeptes de Safari, Internet Explorer, ou bien Chrome évidemment.

## 02 / Les Progressive Web Apps pour vos communications commerciales

![Progressive Web Apps](/img/pwa_bg.jpg "PWA Tessi")

Chez [Tessi](https://www.tessi.eu/solution/technologies/consulting-and-integration/), nous proposons des solutions de traitement et gestion documentaire permettant de composer, de produire et de délivrer des modèles de document (maquettes) en volume et/ou personnalisées en fonction du besoin. Certains de ces logiciels intègrent des modules de composition de documents dynamiques. En d'autres termes, il s'agit de générer, à partir d'un ou plusieurs flux de données, une collection d'applications rendues uniquement côté client. L'outil utilise un *framework* de création d'interface utilisateur, basé sur une architecture de composants : [Bobril](https://github.com/Bobris/Bobril). Cela permet d'utiliser le logiciel simplement en intégrant des blocs (tableau, image, diagrammes, contenu textuel...) dans une interface de conception.

Un document dynamique est généré sous la forme d'un seul fichier HTML, encapsulant Javascript, CSS et images (encodées en base 64). Contrairement à un document statique (PDF par exemple), la livraison d'un fichier HTML ne peut se faire via mail ou un téléchargement sur un site. L'expérience client ne serait pas au rendez-vous.

Cependant, il peut être particulièrement intéressant d’utiliser les fonctionnalités d’une PWA pour délivrer ce type de document. Il est tout à fait imaginable de développer un tableau de bord regroupant l'ensemble des documents dynamiques d'un utilisateur, les rendant accessibles et sécurisés via un portail web. Au moment de la première consultation d'un document, le client peut alors l'ajouter comme une application native sur son écran d'accueil, grâce à une bannière, et profiter des capacités offline de son document. Un système de push notifications peut également être intégré pour informer l'utilisateur d'une nouvelle livraison. La fluidité de ce processus permet d'améliorer, auprès du client, l'expérience utilisateur et par conséquent son engagement.

## 03 / Tutoriel : comment développer une Progressive Web App ?

### Le cahier des charges pour une PWA

Une PWA est réussie lorsqu’elle respecte les principes F.I.R.E (fiable, intégrée, rapide, et engageante). On vous partage quelques bonnes pratiques pour y parvenir :

* **FAST** 

  Vous pouvez rendre votre PWA **performante** en intégrant un [App-Shell](https://developers.google.com/web/fundamentals/architecture/app-shell) à vos pages, en réduisant la taille de vos fichiers, en optimisant et compressant les images, en suivant le pattern [PRPL](https://developers.google.com/web/fundamentals/performance/prpl-pattern/)... L'objectif est que l'application ne charge qu’une faible quantité de données côté serveur et que son utilisation reste fluide malgré les animations ou les utilisations d'API HTML5.
* **INTEGRATED**

  Une progressive web app est dite **intégrée** lorsque les navigateurs sont capables de trouver rapidement votre web app et de la proposer en tant qu’application installable sur l’écran d’accueil sans passer par un app store. Cela est rendu possible grâce aux manifestes W3C et à l'installation du Service Worker (gestionnaire de cache).
* **RELIABLE**

  Pour qu'une Progressive Web App soit considérée comme **fiable**, il faut éviter à tout prix de se heurter au problème du lie-fi. C’est ce moment où le réseau indique sur votre smartphone une connexion stable alors que ce n'est pas le cas. Parer à ce désagrément nécessite d’utiliser un Service Worker correctement configuré pour manipuler les fichiers (HTML, CSS, JS, images...). De plus, il faut que votre application soit servie via HTTPS pour éviter les fraudes lors des transactions client-serveur par formulaire.
* **ENGAGING**

  Votre PWA sera **engageante** si elle est responsive, c’est-à-dire qu'elle s’adapte à n’importe quel format : mobile, tablette, desktop. Il est également conseillé de mettre votre contenu régulièrement à jour et envoyer des notifications push pour inviter les utilisateurs à revenir. Enfin, il est possible de limiter les demandes d’accès à des fonctionnalités de votre smartphone à certaines pages seulement. Par exemple, Google Maps ne vous demande pas, dès l'ouverture de celle-ci, les autorisations d’accès dont elle a besoin pour pleinement fonctionner (ce que font les applications natives). En l’occurrence, Google maps peut avoir besoin d’activer la fonctionnalité de géolocalisation de votre smartphone. Mais elle ne vous demandera cette autorisation que lorsque vous aurez besoin d’un itinéraire depuis votre position. L'utilisateur comprend alors l’objet de la demande. Cette dernière étant contextualisée, elle semble moins intrusive. Ainsi, l’utilisateur est plus à même d'accepter.

L'ensemble de ces fonctionnalités forment un cahier des charges précis. A cet effet, vous pouvez utiliser l'outil Google Lighthouse qui permet de vérifier cette checklist à votre place. Sur Chrome, vous pouvez effectuer cet audit depuis la console de votre navigateur. Celui-ci vous donnera une note entre 0 et 100 en fonction des performances, des bonnes pratiques, de l'accessibilité et du référencement (SEO) de votre application.

### Les principes de développement d'une PWA

Le développement d'une Progressive Web App ne nécessite aucun framework particulier. Vous pouvez développer votre application entièrement en utilisant du HTML, CSS et du Javascript (JS) mais il est préférable, dans un objectif de mise en production, d'utiliser des outils performants et flexibles. Cela vous permettra de vous concentrer sur la partie métier de votre application et de gagner du temps sur la configuration d'une PWA.

Pour le développement, il convient bien sûr de garder en tête les principes F.I.R.E. Toutefois, nous nous concentrerons surtout sur les aspects d’intégration et de fiabilité pour la suite de l'article. Les autres points sont également essentiels mais dépendants du contenu et des fonctionnalités de votre application.

#### Service Worker

Dans le cahier des charges, le Service Worker est un des éléments indispensables pour valider votre PWA. Il s'agit d'un script lancé en tâche de fond non bloquante servant de *proxy* pour servir les fichiers de votre application. Le Service Worker est enregistré par le navigateur et répond à des événements de manière asynchrone pour mettre en cache vos fichiers HTML, CSS, JS, images etc...

Lors de la seconde visite de l'utilisateur, le Service Worker détecte si une mise à jour des fichiers est nécessaire. Si ce n'est pas le cas, il va rediriger les requêtes faites par le client vers les fichiers en cache. Cela vous permet donc de garder votre application complètement hors-ligne.

Si du nouveau contenu est arrivé du côté de votre serveur web, le Service Worker est capable de mettre à jour les fichiers en cache, une fois la connexion de votre utilisateur de nouveau disponible.

Pour permettre à votre navigateur d'enregistrer votre Service Worker, il vous suffit d'ajouter la balise `<script>` ci-dessous à votre fichier HTML (avant la balise fermante `</body>`).

```html:title=index.html
<html>
  <head>
    <!-- [...] -->
  </head>
  <body>
    <!-- Contenu de votre application/votre App Shell-->
    <script>
      if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
          navigator.serviceWorker
            .register('/sw.js')
            .then(registration => {
              console.log(
                `Service Worker enregistré ! Ressource: ${registration.scope}`
              );
            })
            .catch(err => {
              console.log(
                `Echec de l'enregistrement du Service Worker: ${err}`
              );
            });
        });
      }
    </script>
  </body>
</html>
```

Dans le code ci-dessus, on utilise directement l'API native `navigator` et on vérifie [la compatibilité PWA avec le navigateur](https://caniuse.com/#search=service%20worker). Si la comptabilité est vérifiée, on utilise en Javascript les [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) pour réaliser des opérations asynchrones. On tente alors d'enregistrer un Service Worker (SW). Si cette opération est un succès, on réalise la fonction insérée en tant que paramètre dans le `then`. Ici, il s'agit d'un simple `console.log(message)`. Si, au contraire, l'enregistrement du SW échoue, l'exception est récupérée dans le `catch`.

Le fichier `sw.js` n'est pas encore présent sur le serveur. On va l'ajouter et l'agrémenter de quelques lignes de Javascript indispensables pour gérer correctement la capacité *offline* de votre PWA. Nous allons utiliser ici un outil, développé par l'équipe Google Chrome, pour paramétrer notre SW: [Workbox](https://developers.google.com/web/tools/workbox/).

```javascript:title=sw.js
importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js'
);
if (workbox) {
  console.log(`Super ! Workbox est chargé 🎉`);
  
  workbox.routing.registerRoute(
    /\.(?:html|js|css|png|jpg|jpeg|svg|gif)$/,
    new workbox.strategies.StaleWhileRevalidate()
  );
}
```

Ce petit script permet de servir tous les fichiers HTML, CSS, JS et images depuis le cache du navigateur. De plus, le Service Worker met à jour toutes ces ressources si besoin, à partir du réseau, en fond de tâche. On peut évidemment modifier l'expression régulière utilisée ici pour capturer d'autres types de fichier comme de la vidéo ou de l'audio.

La gestion du cache n'est pas chose aisée. Elle dépend des ressources, de l'utilisation et du développement de votre application. Dans notre cas, Workbox effectue énormément de travail qui nous épargne l'utilisation de l'API [Cache](https://developer.mozilla.org/en-US/docs/Web/API/Cache). L'outil nous permet d'appliquer plusieurs [stratégies](https://developers.google.com/web/tools/workbox/reference-docs/latest/workbox.strategies) en fonction des ressources à récupérer sur le serveur. Dans notre exemple, la stratégie `StaleWhileRevalidate` demande au Service Worker de récupérer les ressources depuis le cache et le réseau en parallèle. Si une ancienne version de ces ressources est déjà en cache, la stratégie va alors proposer de la servir au client. En parallèle, des requêtes HTTP essayent de récupérer une nouvelle version sur le serveur. Le cache est alors mis à jour avec la réponse du réseau pour chaque requête réussie.

Avec cette politique de cache et notre SW enregistré, nous rendons notre application beaucoup plus fiable et moins dépendante du réseau. Passons maintenant à l'intégration de notre future PWA...

#### Web App Manifest

La prochaine étape de développement c'est la mise en place d'un manifeste [W3C](https://w3c.github.io/manifest/) propre à la PWA. Il s'agit d'un fichier *JSON* dans lequel on retrouve les informations de l'application comme son nom, ses icônes, l'affichage en tant qu'application native etc... Ce manifeste autorise l'application à la lancée en mode plein écran (sans la barre d'adresse du navigateur `standalone`), gérer l'orientation de l'écran (forcer le lancement de l'application en mode `portrait`) et définir un Splash Screen (avec un logo, un nom et une couleur de fond). Dans le fichier JSON ci-dessous, on définit des icônes avec plusieurs tailles. L'image en *192x192px* sera utilisée en tant qu'icône de lancement sur l'écran d'accueil de votre smartphone. Quant à celle en *512x512px*, elle sera affichée sur le Splash Screen.

```json:title=manifest.json
{
  "name": "My App",
  "short_name": "My App",
  "description": "My App description",
  "start_url": "/",
  "display": "standalone",
  "orientation": "portrait",
  "theme_color": "#3f51b5",
  "background_color": "#3f51b5",
  "icons": [
    {
      "src": "images/manifest/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "images/manifest/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

Il ne nous reste plus qu'à créer le lien dans le fichier HTML avec ce manifeste.

Mais avant, un dernier obstacle doit être écarté !

Le tableau JSON `icons` du manifeste est un standard qui n'est pas pris en compte par Safari (sur iOS, même avec les dernières versions). Il faut ajouter un lien `apple-touch-icon` dans votre HTML pour créer votre icône de lancement sur iOS.

```html:title=index.html
<html>
  <head>
    <!-- [...] -->
    <link rel="manifest" href="./manifest.json" />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="./images/manifest/icon-180x180.png"
    />
  </head>
  <body>
    <!-- Contenu de votre application/votre App Shell-->
    <script>
      // Script d'enregistrement du SW, vu précédemment
    </script>
  </body>
</html>
```

Dorénavant, votre application peut s'installer sur votre écran d'accueil de smartphone. Mais comment votre utilisateur peut-il savoir si votre site est intégrable ?

Google Chrome (et maintenant Firefox) sur Android, affiche automatiquement une bannière sur votre site pour indiquer qu'il peut être intégré comme une application native. Toutefois, votre site doit respecter les points suivants :

* Avoir un manifest W3C valide
* L'ensemble de ces ressources doivent être servies sur du HTTPS ([](https://letsencrypt.org/)[Certigna](https://www.certigna.com/), tiers de confiance européen du groupe Tessi, proprose des certificats hautement sécurisés, certifiés RGS/eIDAS).
* Avoir un Service Worker valide et enregistré
* Être visité deux fois, avec au moins 5 minutes entre chaque visite

Une autre solution serait de proposer votre propre bannière avec les explications d'installation sur [Chrome](https://support.google.com/pixelphone/answer/2781850?hl=en), [Firefox](https://hacks.mozilla.org/2017/10/progressive-web-apps-firefox-android/) ou [Safari](https://support.apple.com/fr-fr/guide/shortcuts/apd735880972/ios). Libre à vous de décider !

***En conclusion, la PWA est une alternative aux applications natives qui peut se révéler être une excellente opportunité. Elle dispose d'atouts indéniables dont une facilitée de développement et permet dans de nombreux cas d'utilisation l'amélioration de l'expérience utilisateur. C'est pourquoi la PWA a gagné en popularité dans les entreprises spécialisées dans le développement logiciel. Il est de plus en plus commun de remplacer ses applications natives avec leur version PWA pour gagner en espace de stockage et ainsi laisser la place à des applications plus importantes et plus volumineuses.***
