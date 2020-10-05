---
lang: fr
key: blog-post
image: tes_18_12620_logo_tessi_bleu_rvb.jpg
imageAlt: interfaçage_web_service_API_ECM_GED
path: connecteurs-api-web-service-jms-quel-interfacage-pour-logiciels-ged-ecm
title: Des connecteurs aux API, quel interfaçage pour vos logiciels de GED Et d'ECM ?
description: "L'intégration de solutions de GED, d'ECM, ou de CCM à vos
  applicatifs existants représente un enjeu clé. Découvrez les différents modes
  d'interfaçage et comment choisir entre connecteur, API, web service et JMS. "
date: 2020-10-05T09:56:04.378Z
tags:
  - contentServices
author: dop
introduction: L’absence de communication de la GED ou de l’ECM avec les autres
  systèmes de l’entreprise constitue un problème fréquent pour les
  organisations. Or, des systèmes qui ne communiquent pas entre eux, ce sont des
  systèmes dont on ne peut pas utiliser les pleines capacités. **Pour garantir
  une circulation de l’information optimisée, l’intégration de la solution de
  GED, d’ECM ou de CCM à vos solutions existantes représente un enjeu clé**.
  Connecteurs ou API ? API directe ou embarquée en web service ? Que choisir
  pour interfacer au mieux vos systèmes logiciels entre eux ? Pour quel niveau
  d’intégration ? Nous vous proposons dans cet article de passer en revue les
  différentes méthodes d’interfaçage, afin d’identifier les contraintes et les
  opportunités de chacune.
---
## Les différents modes d’interfaçage : Connecteurs, API, Web Service, JMS

Logiciel de comptabilité, de relation client, système d’information RH, logiciel de CFAO ou de production… **Les solutions de gestion de contenus sont de plus en plus utilisées en appui d’autres briques logicielles**. Pour que ces dernières fonctionnent de concert, il est primordial de pouvoir les interfacer facilement. Pour ce faire, il existe différentes solutions, plus ou moins ergonomiques. On peut par exemple commencer par un interfaçage complètement asynchrone, qui est la scrutation de répertoire partagé (holfolder) et alimenté par copie ou FTP. Cette solution robuste est capable d’encaisser des volumes importants et présente l’avantage d’un coût de fonctionnement et de mise en œuvre très faible.

### Les connecteurs, la solution d’origine

Etant donné que le coût de création d’un connecteur est particulièrement élevé, **le choix d’une solution de gestion de contenus s’est longtemps fait en fonction du catalogue des connecteurs proposés**. Ainsi, plus une solution disposait de connexions avec des progiciels, mieux c’était. Certains éditeurs de GED et d’ECM ont donc tout mis en œuvre pour que leurs solutions puissent s’interfacer avec tous types de logiciels. En effet, les GED ont eu intérêt à s’interfacer au plus tôt avec des logiciels producteurs (messagerie, systèmes bancaires) pour pouvoir offrir ce contenu. Le marché a eu tendance à concevoir des connecteurs pour les principaux acteurs et quelques produits de niches. Les produits métiers géraient principalement des données et non des documents. L’importance grandissante du document dans la transformation digitale a ensuite montré qu’il devenait nécessaire de standardiser les interfaces. Difficile en effet de proposer un connecteur pour chaque application possible et imaginable ! Ainsi, les connecteurs sont dorénavant spécialisés aux grandes offres vers Office, SAP, SAGE, tandis que la tendance s’oriente très nettement vers les API.

### Les API, une solution multiforme

API signifie « Application Programming Interface », soit « Interface de Programmation Applicative » en bon français. D’une certaine façon, **les API sont des passerelles permettant à plusieurs applications de communiquer entre elles**. Une API, c’est une collection de méthodes, rendues publiques ou privées, offertes pour interagir avec le logiciel qui expose ce catalogue. Elle constitue un point de passage obligatoire et contrôlé par le propriétaire ou son auteur. Ce catalogue est accessible sous réserve de respecter des prérequis technologiques (souvent standards). Ainsi, une API implique **l’appel de fonctions à partir d’un programme logiciel**. Elle définit les méthodes d’interaction, d’un logiciel à un autre, en fixant **un ensemble de règles** et de spécifications que doit suivre un programme logiciel pour faciliter l’interaction. A l’opposé des connecteurs, les API permettent de créer un **point de communication standardisé**, qui vise à faciliter les échanges de données entre les systèmes. Avec une API, l’intégralité des fonctions est développée et l’éditeur choisit les fonctions qu’il souhaite exposer à un public donné.

### Web Service, la solution en vogue

Un Web Service désigne un service rendu au travers du web par un serveur pour un client, pour peu que chacun respecte un contrat d’échange d’informations défini. A l’instar d’une API, il s’agit d’un moyen de communication entre plusieurs applications. Mais tandis qu’une API sert d’interface entre deux applications différentes afin qu’elles puissent communiquer entre elles et interagir, un Web Service permet l’interaction entre deux machines sur un réseau sur mode « question/réponse ». Pour faire simple, on peut dire **qu’un Web Service est une API enveloppée dans le protocole HTTP**. A la différence des API, les Web Services n’offrent que les fonctions que l’éditeur a bien voulu offrir à l’extérieur, celles qu’il a jugées nécessaires. En 2020, la tendance penche clairement pour les Web Services qui embarquent une API.

Il convient enfin de noter l’adoption croissante de l’architecture REST, qui permet au travers du web de manipuler sans état et grâce à une liste d’opérateurs simples les ressources distantes. Les systèmes de GED et ECM se prêtes particulièrement bien à cette architecture pour effectuer des fonctions primitives sur les objets hébergés.

### Messageries JMS et MQseries : des solutions résilientes

Les files d’attentes de messages, couplées à une API, sont des solutions encore largement utilisées de nos jours. Cet interfaçage plus simple peut se faire par l’intermédiaire de fichiers plats, imports et exports, et est adapté pour des données de masse. Aussi appelées « messages queuing », **ces solutions sont particulièrement adaptées aux besoins asynchrones** (actions/demandes planifiées)**, mais aussi aux besoins synchrones** (la demande peut intervenir n’importe quand, mais la réponse ne sera pas nécessairement instantanée, selon la disponibilité des machines). MQ ou JMS font partie de cette famille encore largement plébiscitée grâce à la résilience offerte, ainsi qu’à la capacité de maîtriser la gestion de nombreux échanges à moindre risque.

## Connecteurs ou API ? Web Service ou JMS ? Comment choisir ?

Les connecteurs et les API représentent deux grandes familles d’interfaçage, quand le Web Service et le JMS constituent le vecteur pour véhiculer la requête, pour invoquer une méthode offerte par l’API.

### Connecteurs : avantages et inconvénients

#### Avantages des connecteurs

Disposer d’un connecteur entre sa GED et SAP, par exemple, c’est l’assurance que les deux logiciels fonctionneront parfaitement. C’est une solution quasiment prête à l’emploi. L’autre avantage, c’est que **l’utilisateur n’a pas à s’occuper de la maintenance lors de l’évolution du produit tiers**. Mais si c’est à l’éditeur d’adapter le produit, c’est bien au client de faire une montée de version vers ce nouveau connecteur…

#### Inconvénients des connecteurs

Mettre en place un connecteur n’est pas une mince affaire. Cela implique de **réaliser de nombreux réglages et représente un coût important**. Parfois, des protocoles d’échanges de fichiers standards représenteront une alternative bien plus simple.

Avec un connecteur, si une mésentente entre les deux éditeurs de logiciels survient, **le client qui a investi sur ce connecteur peut être lésé**. En décorrélant davantage, avec un web-service, ce risque est moindre, puisque le niveau d’autonomie est plus fort. Pour résumer, on peut dire que **si le connecteur permet que deux logiciels fonctionnent parfaitement à l’instant T, c’est une solution moins évolutive et moins souple**. Surtout, il faut s’assurer que la solution de gestions de contenus dispose de connecteurs avec tous les autres logiciels dont on dispose déjà, mais aussi avec tous ceux qu’on envisage d’avoir, ce qui est particulièrement contraignant comme cadre. A titre d’exemple, une GED peut avoir un connecteur avec Office, mais n’en n’offrirait pas pour une autre solution de messagerie (Lotus, g=Gmail…). Cette information peut guider des choix d’équipement.

### API : avantages et inconvénients

**Les API sont un mode d’interfaçage plus souple et plus adaptable qu’un connecteur**. Il suffit que chaque logiciel fonctionne avec des appels API pour que les deux solutions soient interfaçables. Les deux logiciels se connaissent moins « intimement », mais sont capables de fonctionner de concert, du moment que la règle du jeu fixée par l’API est respectée.

**Avec l’API, on s’affranchit plus des versions de produits par rapport à un connecteur, mais pas encore autant qu’avec un web-service.**

Par ailleurs, la mise en place et la configuration des API est no-code ou low-code selon les cas. C’est-à-dire qu’elle ne nécessite souvent pas d’expertise du code, mais tout de même des compétences techniques.

### Files d’attente de message JMS ou MQ : avantages et inconvénients

Le consommateur n’est pas obligé de consommer à la même vitesse que le producteur. Si l’un des deux s’arrête, par exemple si le destinataire est en maintenance, **l’expéditeur continue à empiler les messages en attente**. Dès que le système consommateur sera de nouveau en route, il pourra consommer tout ce qui est en attente.

**Pour une entreprise qui n’a pas besoin de mettre ses données à jour en temps réel, le fichier plat transféré par le JMS de façon asynchrone,** planifiée, **peut tout à fait suffire**. A l’inverse, si un fonctionnement en temps réel est requis, il est possible de procéder par une file d’attente de messages. De cette façon, dès qu’une nouveauté apparaîtra d’un côté, il sera possible de la mettre à jour de l’autre.

Avec le JMS, il suffit de programmer la périodicité de la relève ou de choisir d’être en permanence à l’écoute de la file d’attente de messages pour agir dès qu’il arrive quelque chose. Ainsi, **que le besoin soit synchrone ou asynchrone, il est possible avec le JMS de mettre en place une solution simple qui fonctionne de façon relativement décorrélée des états des deux participants**.

L’autre avantage du modèle JMS, c’est sa **résilience**. Là où un Web Service pourrait être vulnérable, en cas d’un gros volume de demandes instantanées qui pourraient paralyser le serveur, le JMS encaisse les différentes demandes, qui seront traitées au fil de l’eau. Or, **pour l’image de marque, il peut être préférable que le consommateur puisse toujours envoyer des requêtes, plutôt que d’être confronté à un message indiquant que le service est momentanément indisponible**. A l’inverse, ce point peut aussi être vu comme un inconvénient, puisque le consommateur n’a pas conscience que sa demande ne sera pas forcément traitée dans l’immédiat. A noter également que **les contraintes liées aux différentes versions apparaissent dès lors qu’on ne fonctionne pas en Web Service**.

Au final, **le JMS nécessite davantage d’infrastructures qu’un Web Service, mais a le mérite de pouvoir traiter de gros volumes de transactions, grâce à une base de données robuste.** Sivous avez besoin d’empilage, c’est la solution à privilégier, moyennant l’inconvénient que représente l’infrastructure.

### Web Service : avantages et inconvénients

#### Avantages du Web Service

Le web service permet principalement de relier des applications présentes sur des machines différentes, au travers du réseau interne ou externe. L’une est connue de l’autre par sa présence sur le réseau, ce qui offre une résistance à tout changement d’architecture. Le web-service exposé véhicule donc la requête (appel à une méthode SOAP ou à une ressource REST) au travers du réseau, ce qui ouvre toute possibilité d’échange aux applications autorisées sur le réseau. Ainsi, le respect de standards par les parties prenantes assure ainsi l’interopérabilité des applications. Notons aussi que le Web Service permet de s’affranchir de la surveillance permanente nécessaire pour s’assurer qu’on ait bien le bon service et la bonne API. Avec le Web Service, plus besoin de mettre des composants ou de vérifier l’installation, ça marche. Les éditeurs de logiciels exposent leur catalogue d’API et les autres n’ont qu’à appeler les fonctions et ressources qu’elles proposent.

#### Le Inconvénients du Web Service

Le Web Service implique que les deux serveurs soient disponibles au moment où la demande est faite. Sinon, l’utilisateur peut se retrouver avec un message expliquant que le service est momentanément indisponible. A l’inverse du JMS, **le Web Service ne présente pas la contrainte de l’infrastructure, mais il est plus vulnérable aux volumes de demandes simultanées ou très rapprochées**.

## Comment choisir son mode d’interfaçage ?

En définitive, plutôt que de parler d’avantages et d’inconvénients, il vaut mieux envisager le choix de son mode d’interfaçage au regard des contraintes que l’on accepte de prendre ou pas, dans le contexte connu et compte tenu de l’évolution perçue. Chaque démarche a des enjeux différents. Tout dépend de la nature de la structure et de ses souhaits : **les contraintes d’une solution peuvent être les opportunités d’une autre**. D’ailleurs, pour une même application, plusieurs modes d’interfaçage peuvent être choisis.

**A l’apogée des connecteurs, tout l’enjeu était de choisir le produit proposant le plus de connecteurs possibles, en accord avec ses besoins**. Désormais, la réflexion à mener s’est élargie et il convient d’envisager le projet dans sa globalité : je souhaite que ces deux applications interagissent, mais comment ? A quel rythme ? Pourquoi ? Quelles sont mes contraintes et mes besoins ?

**A l’ère des API, les possibilités offertes sont plus grandes, mais elles nécessitent de qualifier l’usage à chaque fois**. La réflexion à conduire est plus complexe, mais à la clé, c’est un gain de souplesse et d’adaptabilité.

### Liste des questions à se poser pour choisir son mode d’interfaçage

* Quelles applications doivent être interfacées ?
* Sur quels réseaux circulera cet échange (interne, domaines, externe) ?
* Quelles technologies sont présentes d’un côté et de l’autre ?
* A quelle **fréquence** ces applications doivent-elles communiquer ?
* Pour quel **volume** ?
* Est-ce que j’ai besoin d’une réponse et d’un **traitement instantané** ou est-ce qu’il est possible de mettre en tampon ?
* De quel **niveau de sécurité** ai-je besoin ? Selon quelles **règles de gestion** ?
* Quelle tolérance aux pannes ? A quels risques est-ce que j’accepte d’être confronté ?
* Est-ce que j’ai besoin de faire des passerelles entre des produits dont le rapprochement n’est pas encore habituel ? Par exemple associer une documentation et les conversations relatives à un projet issu des outils collaboratifs, une démarche qui a pris beaucoup d’importance pendant les dispositions relatives à la pandémie du Covid-19.

De nombreux paramètres entrent en ligne de compte dans le choix de son mode d’interfaçage. Certains seront déterminants pour retenir une solution technologique plus qu’une autre, tandis que d’autres représenteront plus des points d’attention.

**L’intégration n’est pas qu’un sujet technique. Sa réussite repose sur la collaboration des parties prenantes, côté client (métier comme IT) et côté fournisseur (intégrateurs, éditeurs).** Afin de connaître l’exhaustivité des voies d’intégration possibles, le choix du mode d’interfaçage nécessite de l’analyse, de la disponibilité et l’implication du fournisseur de la solution, car on touche au contexte métier. L’intégration doit donc être facilement adaptable pour coller à l’évolution de la demande et des autres composantes de l’écosystème. A titre d’exemple, Tessi a pu transformer l’intégration d’une gestion documentaire et d’un ensemble de logiciels métiers, afin qu’une nouvelle information produit par l’un d’eux puisse être partagée non plus avec un délai (asynchronisme dû au temps de répartition), mais en temps réel grâce à un web service. A l’image d’un stock en temps réel, l’état d’un dossier client doit être le même pour tous.

***Dans tous les cas, un bon interfaçage suppose de comprendre le besoin, le bénéfice attendu, le résultat souhaité, et de s’adapter au vocabulaire métier. C’est un travail long et fastidieux par lequel il est nécessaire de passer. C’est aussi un savoir-faire et une collaboration nécessaire entre les parties, si l’on veut éviter une dilution du projet dans le temps. Faire communiquer des systèmes entre eux c’est possible, mais cela demande un tel effort que ce n’est pas toujours fait ou bien fait ! C’est pourquoi il est plus que recommandé de se faire accompagner par un prestataire à l’écoute, qui dispose d’une solide expérience dans l’interfaçage de solutions variées, tel que Tessi.***