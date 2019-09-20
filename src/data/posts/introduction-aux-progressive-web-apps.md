---
templateKey: blog-post
image: /img/pwa_bg.jpg
title: Introduction aux Progressive Web Apps
description: >-
  Pourquoi les Progressive Web Apps sont-elles devenues l’un des éléments-clés
  de la stratégie commerciale de Google ? Découvrez l'intérêt et le
  développement de ces applications dans votre processus de communication
  client. 
date: 2019-09-19T10:07:15.284Z
tags:
  - Communication client (CCM)
authors:
  - avatar: /img/avatar_default.png
    firstname: Mathieu
    lastname: Gauthier
    position: Consultant technique
introduction: >-
  Pourquoi les Progressive Web Apps sont-elles devenues l’un des éléments-clés
  de la stratégie commerciale de Google ?



  Les pays émergents sont aujourd’hui de grands consommateurs d'Internet. En
  effet, on estime que chaque année, en Inde, plus de 100 millions de nouveaux
  utilisateurs se connectent. Cela offre un marché très lucratif à Google pour
  vendre de la publicité. Cependant, le coût de la data est très élevé et la
  couverture réseau est limitée à la 2G/3G. Les possesseurs de mobiles utilisent
  principalement des services
  [USSD](https://fr.wikipedia.org/wiki/Unstructured_Supplementary_Service_Data)
  pour accéder à leur compte bancaire ou à Internet, ce qui rend l’implantation
  de Google d’autant plus compliquée.



  Aujourd’hui, on est capable de fabriquer un smartphone pour seulement 10 à 15
  dollars avec des capacités de stockage très limitées et une mémoire faible.
  Ils sont principalement commercialisés dans des pays en voie de développement
  et peuvent difficilement installer des applications natives. Google n'a
  d'autre choix que d'opter pour une nouvelle solution technologique peu
  gourmande pour s'adapter à ces smartphones low-cost. La multinationale prend
  alors la décision d'investir dans le développement d'applications web légères,
  rapides, installables et indépendantes de la qualité du réseau: la
  **Progessive Web App (PWA)**.
---
## 01 / PWA vs Native App

A priori, la stratégie de Google se base uniquement sur la proposition d'une nouvelle offre dans les pays émergents. Mais quel serait l'intérêt d'une PWA dans un pays fortement industrialisé ? Les capacités des smartphones en Europe sont bien assez suffisantes pour installer de nombreuses applications natives. Dans ce cas, pourquoi ne pas directement en développer une ?

Plusieurs réponses sont valables :

* **La distribution des applications natives c'est compliqué !** Pour qu'un de vos clients utilise votre application, il faut le convaincre d'aller la télécharger (depuis un store ou votre site), puis de l'installer (prendre une partie plus ou moins volumineuse de sa capacité de stockage) et enfin, de l'inciter à l'utiliser et à y rester. Cela demande beaucoup d'efforts et un coût d'acquisition élevé (10 fois plus qu'une PWA d'après [une étude lancée par une startup portugaise Selio](https://www.geekmj.org/insights/progressive-web-app-introduction-599)).
* **Le côut de production est très faible.** Au lieu de mobiliser plusieurs équipes de développeurs pour la réalisation d'une application iOS, Android et d'un site web, le développement d'une Progressive Web App ne nécessite qu'une seule équipe.
* **La PWA améliore l'engagement des utilisateurs.** De nombreuses entreprises ont décidé de créer ou de migrer vers des PWA pour améliorer leur taux d'engagements. On peut citer Twitter avec sa PWA [Twitter Lite](https://mobile.twitter.com/home), [Uber](https://m.uber.com), Trivago, New York Times et évidemment, Google avec Maps Go, Photos, Google +... Vous pouvez retrouver sur le site [PwaStats](https://www.pwastats.com/) les articles regroupant les statistiques commerciales des PWA de certaines de ces entreprises.
* **La PWA peut rivaliser avec une application native.** En fonction de vos besoins, il est possible d'obtenir des résultats très satisfaisants en matière de performance. Grâce aux HTML5 APIs ([cf. whatwebcando.today](https://whatwebcando.today/)), les PWA arrivent aujourd'hui à utiliser des fonctionnalités propres aux applications natives mais en abuser risque de baisser le _framerate_ (taux d'images par seconde) de votre web app. Si on reprend l'exemple de [Twitter Lite](https://mobile.twitter.com/home), d'après leur Engineering Lead, Nicolas Gallagher:
  > _Twitter Lite is now the fastest, least expensive, and most reliable way to use Twitter. The web app rivals the performance of our native apps but requires less than 3% of the device storage space compared to Twitter for Android_
* **Faible consommation de données** Une application native peut consommer plusieurs dizaines de MB voire GB de data (par exemple, il n'est pas rare d'obtenir un cache de plusieurs GB pour l'application mobile Facebook). Pour une PWA, le serveur distribue uniquement des fichiers HTML, CSS et Javascript _compressés et minifiés_ de manière à réduire considérablement la taille de l'application mais aussi du cache. Dans le cas de [Twitter](https://mobile.twitter.com/home), la Progressive Web App ne fait que 600KB contre 23.5MB pour l'application Android.

**Mais...**

il est indéniable que la PWA à son niveau actuel ne remplace pas l'application mobile, dû à son manque de fonctionnalités natives supportées par l'OS de nos smartphones (et plus particulièrement par iOS). De plus, l'évolutivité du marché de la PWA chez Apple parait compromis en raison d'un manque à gagner sur la "App Store Tax" de 30% (uniquement applicable aux applications natives présentes sur le App Store).

Cependant, en Mars 2019, l'entreprise a fait un effort avec la sortie de iOS 11.3 et Safari 13. Un utilisateur d'iPhone peut dorénavant supporter une partie des fonctionnalités des Progressive Web Apps mais cela reste encore très lacunaire.

Malgré ce dernier point, la PWA reste un atout majeur dans votre communication client et peut nettement améliorer l'engagement de vos utilisateurs, même sur Safari et IE (Internet Explorer).

**Convaincu.e ? Si c'est le cas, il est grand temps de vous proposer un cahier des charges pour le développement de votre PWA.**

## 02 / Le cachier des charges

Lorsqu'une application est progressive, elle ne demande pas directement des autorisations à l'utilisateur pour accéder à l'ensemble de ses fonctionnalités mais lui laisse le choix en fonction des pages visitées. Par exemple, si on prend le cas de Google Maps, l'application ne vous demande pas, dès l'ouverture, l'activation de la géolocalisation mais elle vous propose plutôt un bouton pour créer un itinéraire depuis votre position vers une autre.

Une PWA doit supporter le principe **F.I.R.E** :

* **Fast (performante) :** _en intégrant un [App-Shell](https://developers.google.com/web/fundamentals/architecture/app-shell) à vos pages, en réduisant la taille de nos fichiers, en optimisant et compressant ces images, en suivant le pattern [PRPL](https://developers.google.com/web/fundamentals/performance/prpl-pattern/)... Il faut que l'application charge une faible quantité de données côté serveur et son utilisation doit rester fluide malgré les animations ou les utilisations d'API HTML5._
* **Integrated (intégrée) :** _grâce aux manifestes W3C et à l'installation du Service Worker. Ces élements permettent aux navigateurs de trouver rapidement votre web app et de la proposer en tant qu'application installable sur l'écran d'accueil sans passer par un app store._
* **Reliable (fiable) :** _en utilisant un Service Worker (gestionnaire de cache) correctement configuré pour manipuler les fichiers (HTML, CSS, JS, images...) distribués par le serveur. Avec cette approche, on veut éviter à tout prix, le problème du lie-fi. C'est ce moment où le réseau vous indique sur votre smartphone, une connexion stable alors que ce n'est pas le cas. De plus, l'application doit être servie via TLS pour éviter les fraudes lors des transactions client-serveur par formulaire._
* **Engaging (engageante) :** _en proposant une interface (UI) responsive (adpatée à n'importe quel format: mobile, tablette, desktop) en mode plein écran, un réengagement facilité grâce à des push notifications et des mises à jour régulières du contenu._

L'ensemble de ces fonctionnalités forment un cachier des charges précis. Un outil Google **Lighthouse** permet de vérfier cette checklist à votre place. Sur Chrome, vous pouvez effectuer cet audit depuis la console de votre navigateur. Celui-ci vous donnera une note entre 0 et 100 en fonction des performances, des bonnes pratiques, de l'accessibilité et du référencement (SEO) de votre application.

## 03 / Passons au développement

Le développement d'une Progressive Web App ne nécessite aucun framework particulier. Vous pouvez développer votre application entièrement en utilisant du **HTML, CSS et du Javascript (JS)** mais il est préférable, dans un objectif de mise en production, d'utiliser des outils performants et flexibles. Certains vous seront proposés dans cette article. Cela vous permettra de vous concentrer sur la partie métier de votre application et de gagner du temps sur la configuration d'une PWA.

**Dans cette troisième partie, nous allons suivre le principe F.I.R.E pour le développement. Toutefois, nous nous concentrerons surtout sur l'intégration et la fiabilité. Les autres points sont primordiaux mais dépendants du contenu et des fonctionnalités de votre application.**

### Service Worker

Dans le cahier des charges, le Service Worker est un des éléments indispensables pour valider votre PWA.

**Mais en quoi cela consiste ?**

Il s'agit d'un script lancé en tâche de fond non bloquante servant de _proxy_ pour servir les fichiers de votre application. Le Service Worker est enregistré par le navigateur et répond à des événements de manière asynchrone pour mettre en cache vos fichiers HTML, CSS, JS, images etc...

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

Dans le code ci-dessus, on utilise directement l'API native `navigator` et on vérifie [la compatibilité PWA avec le navigateur](https://caniuse.com/#search=service%20worker). Si cela est le cas, on utilise en Javascript les [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) pour réaliser des opérations asynchrones. On tente alors d'enregistrer un Service Worker (SW). Si cette opération est un succès, on réalise la fonction insérée en tant que paramètre dans le `then`. Ici, il s'agit d'un simple `console.log(message)`. Si, au contraire, l'enregistrement du SW échoue, l'exception est récupérée dans le `catch`.

Le fichier `sw.js` n'est pas encore présent sur le serveur. On va l'ajouter et l'agrémenter de quelques lignes de Javascript indispensables pour gérer correctement la capacité _offline_ de votre PWA. Nous allons utiliser ici un outil, développé par l'équipe Google Chrome, pour paramétrer notre SW: [Workbox](https://developers.google.com/web/tools/workbox/).

```javascript:title=sw.js
importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js'
);

if (workbox) {
  workbox.routing.registerRoute(
    /\.(?:html|js|css|png|jpg|jpeg|svg|gif)$/,
    new workbox.strategies.StaleWhileRevalidate()
  );
}
```

Ce petit script permet de servir tous les fichiers HTML, CSS, JS et images depuis le cache du navigateur. De plus, le service worker met à jour toutes ces ressources si besoin, à partir du réseau, en fond de tâche. On peut évidemment modifier l'expression régulière utilisée ici pour capturer d'autres types de fichier comme de la vidéo ou de l'audio.

La gestion du cache n'est pas chose aisée. Elle dépend des ressources, de l'utilisation et du développement de votre application. Dans notre cas, Workbox effectue énormément de travail qui nous épargne l'utilisation de l'API [Cache](https://developer.mozilla.org/en-US/docs/Web/API/Cache). L'outil nous permet d'appliquer plusieurs [statégies](https://developers.google.com/web/tools/workbox/reference-docs/latest/workbox.strategies) en fonction des ressources à récupérer sur le serveur. Dans notre exemple, la stratégie `StaleWhileRevalidate` demande au service worker de récupérer les ressources depuis le cache et le réseau en parallèle. Si une ancienne version de ces ressources est déjà en cache, la stratégie va alors proposer de la servir au client. En parallèle, des requêtes HTTP essayent de récupérer une nouvelle version sur le serveur. Le cache est alors mis à jour avec la réponse du réseau pour chaque requête réussie.

**Avec cette politique de cache et notre SW enregistré, nous rendons notre application beaucoup plus fiable et moins dépendante du réseau. Passons maintenant à l'intégration de notre future PWA...**

### Web App Manifest

La prochaine étape de développement c'est la mise en place d'un manifeste [W3C](https://w3c.github.io/manifest/) propre à la PWA. Il s'agit simplement d'un fichier _JSON_ dans lequel on retouve les informations de l'application comme son nom, ses icônes, l'affichage en tant qu'application native etc...
Ce manifeste autorise l'application à la lancer en mode plein écran (sans la barre d'adresse du navigateur = `standalone`), gérer l'orientation de l'écran (forcé le lancement de l'application en mode `portrait`) et définir un Splash Screen (avec un logo, un nom et une couleur de fond). Dans le fichier JSON ci-dessous, on définit des icônes avec plusieurs tailles. L'image en _192x192px_ sera utilisée en tant qu'icône de lancement sur l'écran d'accueil de votre smartphone. Quant à celle en _512x512px_, elle sera affichée sur le Splash Screen.

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

**Mais...**

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

**Dorénavant, votre application peut s'installer sur votre écran d'accueil de smartphone. Mais comment votre utilisateur peut-il savoir si votre site est intégrable ?**

Google Chrome (et maintenant Firefox) sur Android, affiche automatiquement une bannière sur votre site pour indiquer qu'il peut être intégré comme une application native. Toutefois, votre site doit respecter les points suivants :

* Avoir un manifest W3C valide
* L'ensemble de ses ressources doivent être servi sur du HTTPS ([letsencrypt](https://letsencrypt.org/) propose, par ailleurs, des certificats gratuits)
* Avoir un SW valide et enregistré
* Être visité 2 fois, avec au moins 5 minutes entre chaque visite

Une autre solution serait de proposer votre propre bannière avec les explications d'installation sur [Chrome](https://support.google.com/pixelphone/answer/2781850?hl=en), [Firefox](https://hacks.mozilla.org/2017/10/progressive-web-apps-firefox-android/) ou [Safari](https://support.apple.com/fr-fr/guide/shortcuts/apd735880972/ios). Libre à vous de décider !

## 04 / Au-delà de l'application mobile, quelles sont les opportunités ?

Chez [Tessi](https://www.tessi.eu/solution/technologies/consulting-and-integration/), nous proposons des solutions de traitement et gestion documentaire qui nous permettent de composer, de produire et délivrer massivement des maquettes statiques et personnalisés en fonction du client. Certains de ces logiciels intègrent des modules de composition de _"documents dynamiques"_. En d'autres termes, il s'agit de générer, à partir d'un ou plusieurs flux de données, une collection d'applications rendues uniquement côté client. L'outil utilise un framework de création d'interface utilisateur, basé sur une architecture de composants : [Bobril](https://github.com/Bobris/Bobril)). Cela permet d'utiliser le logiciel simplement en intégrant des blocs (tableau, image, diagrammes, contenu textuel...) dans une interface de conception.

**Mais le problème c'est la livraison...**

Un _document dynamique_ est généré sous la forme d'un seul fichier HTML, encapsulant Javascript, CSS et images (encodées en base 64). Contrairement à un document statique (PDF par exemple), la livraison d'un fichier HTML ne peut se faire via mail ou un téléchargement sur un site. Cela procure au client une très mauvaise expérience. On risque alors de perdre son engagement par rapport à l'utilisation d'un _document dynamique_.

Cependant, il peut être particulièrement intéressant pour délivrer ce type de document d'utiliser les fonctionnalités d'une PWA. Il est tout à fait imaginable de développer un tableau de bord regroupant l'ensemble des _documents dynamiques_ d'un utilisateur, les rendant accessibles et sécurisés par un portail web. Au moment de la première consultation d'un document, le client peut alors l'ajouter comme une application native sur son écran d'accueil, grâce à une bannière, et profiter des capacités _offline_ de son document. Un système de _push notifications_ peut alors être intégré pour informer l'utilisateur d'une nouvelle livraison. La fluidité de ce processus nous permet d'améliorer, auprès du client, l'engagement et l'expérience utilisateur de notre solution.

**En conclusion, il n'est pas difficile aujourd'hui de développer, tester et mettre en production une Progressive Web App. Elle permet de nombreux cas d'utilisation comme on a pu le voir avec les documents dynamiques.**

**De plus, la PWA a gagné en popularité dans les entreprises spécialisées dans le developpement logiciel. Certaines personnes préfèrent même remplacer leurs applications natives de réseaux sociaux avec leur version PWA. Leur objectif est de gagner de l'espace de stockage sur leur téléphone pour laisser la place à des applications plus importantes et plus volumineuses. C'est d'ailleurs la principale raison du développement de _Twitter Lite_.**
