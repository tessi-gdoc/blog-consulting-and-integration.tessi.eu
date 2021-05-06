---
lang: fr
key: blog-post
image: image_bpmn_cmmn_interview_emmanuel-de-ternay.png
imageAlt: BPM_Case_Management_modèles_de_notation
path: emmanuel-de-ternay-BPMN-CMMN-methodologie-processus-metiers
title: 'Emmanuel de Ternay, Tessi : "BPMN et CMMN : une approche projet efficace
  au service des processus métiers"'
description: Issus des solutions de BPM et de Case Management, les modèles de
  notation BPMN et de CMMN sont des outils puissants lorsqu'il convient de
  repenser des processus ou créer de nouvelles applications métier. Retour
  d'expérience et conseils d'expert !
date: 2021-05-05T11:08:48.585Z
tags:
  - contentServices
  - caseManagement
author: tcj
introduction: Fort de 28 ans d’expérience, **Emmanuel de Ternay** évolue depuis
  le début de sa carrière entre éditeurs et intégrateurs de solutions, dans le
  monde de la gestion de l’information d’Entreprise (ou Enterprise Information
  Management – EIM). **Solution Leader et Business Analyst** chez Tessi Conseil
  & Intégration depuis 12 années, il se voit confier de nombreux projets de
  digitalisation des processus et de gestion des données. Constatant un intérêt
  croissant pour les modèles de notation, tels que le **BPMN (Business Process
  Management Notation) et le CMMN (Case Management Modeling Notation),** il les
  met à l’épreuve lors d’exercices de modélisation de processus pour le
  développement d’applications métiers.Retour sur une approche projet efficace
  dont il nous définit les contours.
---
## Le BPMN et le CMMN : de quoi s’agit-il ?

Le BPMN et le CMMN sont tous deux des langages permettant de standardiser la façon dont on modélise des processus métiers. Ces modèles de notation partagent la même finalité, néanmoins ils suivent des logiques différentes.

Le BPMN est un langage normé issu du BPM. Il permet de représenter une **suite de séquences prédéfinies** d’activités et d’interactions entre les différents acteurs d’un processus. Pour que le BPMN soit efficace, il faut que le fonctionnement de ce processus soit comparable à une routine, composée de tâches récurrentes et identiques, aboutissant à une réponse binaire.

A partir du moment où le nombre de critères et d’étapes augmentent de trop, - multipliant par conséquent les chemins alternatifs, les branchements, les interactions, et les exceptions -, alors on constate une perte d’efficacité de ce modèle. La représentation devient tentaculaire, à tel point qu’elle en est illisible et difficile à comprendre. Or, là est tout l’intérêt de la modélisation de processus.

C’est notamment pour cette raison que le CMMN est un complément. Descendant d’une approche de Case Management, ce modèle est adapté à la modélisation de processus non prédictifs. C’est-à-dire aux processus jalonnés d’activités ou de tâches imprévisibles, évolutives, dont on ne peut prévoir un ordre d’exécution en amont. A l’image du Case Management, le CMMN est donc un modèle de notation construit sur un impératif de flexibilité. Il répond au besoin de gérer des processus dans une équation à une ou plusieurs inconnues. C’est précisément parce que le CMMN est de nature non structurée, permettant de représenter des processus de manière détachée d’un processus séquentiel, qu’il se révèle bien plus efficace pour modéliser des processus aux nombreux chemins alternatifs possibles.

Plutôt que de décrire la logique par un process **procédural** – en suivant un ensemble d’étapes définies – la logique du CMMN est **déclarative**, chaque élément de cas pris individuellement définit ses propres conditions. Lorsque les activités sont déterminées par une combinaison de jugements humains, d’événements survenus au moment de l’exécution et de conditions sur les données d’une affaire, on privilégiera le CMMN.

 

## BPMN et CMMN : faut-il les opposer ?

Pas de dogmatisme suraigu ! **De nature certes différente, le CMMN et le BPMN ne s’opposent pas, mais ils se conjuguent.** Il n’est pas question de préférer un langage à l’autre, mais plutôt de savoir lesutiliser à bon escient. L’utilisation d’un langage ou de l’autre suppose d’avoir consulté, au préalable, les métiers sur leur façon de travailler.

**Très souvent, nous commençons la modélisation avec le BPMN**. Mais si l’on constate au cours de la modélisation que des événements et des décisions ad hoc difficilement prédictibles se multiplient, il ne faut pas hésiter à **basculer tout ou partie en CMMN**.

Idem, dans la démarche inverse. Il peut paraître pertinent dans certains cas de commencer la modélisation par du CMMN. Si toutefois, il s’avère que nous sommes en train de construire un système avec des tâches interdépendantes, alors mieux vaut s’orienter vers du BPMN.

Enfin, parfois, on s’apercevra que la combinaison des deux modèles de notation est pertinente car l’un enrichit l’autre et permet ainsi une description optimale du processus.  

En effet, il ne faut pas croire que le CMMN constitue la réponse à tout. **Le CMMN se veut très flexible, mais en contrepartie, fait que la logique n’est pas toujours évidente à communiquer.** Le CMMN s’adapte bien au modèle agile où le product owner se doit de clarifier les éléments à construire par desspécifications. Très peu d’éléments composent le CMMN, ainsi chaque modèle deprocessus doit être décrit dans des spécifications. Principalement, les éléments d’entrée et de sortiesont à clarifier à partir du modèle pour orienter correctement la lecture. **Le CMMN est donc bien un complément du BPMN et le Business Analyst doit apprendre à naviguer d’un langage à un autre selon les circonstances du processus à décrire**.

 

## Dans quelles situations utiliser ces modèles de notation ?

Les modèles de notation sont un outil d’aide remarquable principalement dans deux situations :

* **Lorsqu’il s’agit de développer une solution pour un processus métier spécifique, pour lequel il n’existe pas de logiciel adapté.** Par exemple, si nous réalisons un projet sur un processus de traitement de factures, nous n’utiliserons ni le BPMN ni le CMMN. Il s’agit là d’un processus « standard » que nous connaissons parfaitement et pour lequel des solutions technologiques existent. A l’inverse, pour un processus de gestion des réclamations à la suite d’une fraude à la carte, modéliser le processus facilitera grandement la démarche car il s’agit là d’un processus spécifique complexe.
* **L’autre cas est celui de la réindustrialisation** c’est-à-dire lorsque nous accompagnons le client pour optimiser voire repenser entièrement son processus.

 

## Quels intérêts de modéliser ses processus concrètement ?

La modélisation permet d’instaurer un langage commun entre d’un côté l’informatique chargé du développement de la solution et de l’autre, le métier à l’origine du besoin. Il s’agit d’un outil essentiel qui va permettre au Business Analyst et aux différentes parties prenantes du processus de **mieux discuter et se challenger pour parvenir à préciser le besoin**.

En atelier chez nos clients, on s’aperçoit que parcourir une liste de cas d’usage où l’ensemble des exigences sont décrites finit par perdre l’audience. Au bout d’un moment, ils n’arrivent plus à se représenter quelle étape du processus nous sommes en train de décrire. Alors que lorsque l’on se raccroche à la **représentation visuelle** en pointant là où nous en sommes, l’audience parvient instantanément à reprendre le fil.

L’intérêt d’utiliser ces modèles CMMN et BPMN est donc surtout de se comprendre. **Et parce que nous nous comprenons, nous gagnons un temps considérable et nous nous assurons que l’application métier qui sera développée réponde bien à l’expression du besoin initial.**

Au-delà de ces langages, il faut y voir une approche projet et une façon de gérer l’information et la donnée qui évoluent. Les équipes agiles utilisent généralement une méthodologie bien connue consistant à décrire chaque fonction, à développer, individuellement. On parle de spécifications ou de backlog. L’inconvénient de cette méthode est qu’elle ne permet pas d’avoir une vision globale du processus. Or il ne faut pas oublier qu’un processus est sous-jacent au parcours client correspondant. Il a donc un impact direct sur l’expérience client. **D’où l’importance d’avoir une vue globale des processus** pour s’assurer de leur cohérence et de leur efficacité aussi bien pour les utilisateurs internes que pour les clients. C’est aussi ça qu’offre ces modèles de notation.

 

## Auriez-vous une bonne pratique à partager pour tirer profit du CMMN (Case Management Modeling Notation) ?

Aujourd’hui dans une démarche agile, on essaye de construire la solution au fur et à mesure du développement. **Le CMMN est une très bonne approche pour faire ce que l’on appelle le Minimum Viable Product (MVP)**. Autrement-dit, là où avec le BPMN on essaierait de tout détailler, notamment toutes les exceptions au risque de s’y perdre, avec le CMMN on ne va pas chercher à tout décrire du produit final. On va chercher à décrire le minimum qui va permettre de **réaliser 80% des fonctionnalités les plus importantes**.

Les exceptions et les alternatives restantes sont traitées manuellement par le chargé de dossier, ou selon les règles émises par le métier. Les problèmes complexes sont ainsi simplifiés par des flux de travail rationalisés et reproductibles, modelés sur les étapes du processus de gestion des cas. Ici, la technologie soutient le savoir-faire de l’Humain !

 

## BPMN et CMMN, de nouvelles compétences informatiques à maîtriser ?

Le père du CMMN, Bruce Silver a dit : *« ceux qui me connaissent seront surpris de savoir que j’écris un livre sur le CMMN parce que quand ce langage est né en 2014, je n’étais absolument pas enthousiaste et je l’ai beaucoup critiqué ».* Bruce Silver a changé d’avis et force est de constater que le marché s’oriente dans ce sens. D’ailleurs, le CMMN est aujourd’hui enseigné dans les filières informatiques. **Il y a fort à parier que ce langage devienne un langage universel de référence au même titre que l’est déjà le BPMN.**

Aujourd’hui l’utilisation du BPMN et du CMMN n’est pas encore systématique. Elle dépend des pratiques internes de chaque organisation. Tandis que certains grands comptes formalisent la pratique de ces langages et en imposent l’usage, d’autres n’ont pas encore franchi le pas côté CMMN. **La simplicité de construction d’un modèle devrait pourtant encourager les entreprises à l’adopter !** On observe en effet, lors des ateliers de découverte où les métiers doivent décrire leur processus, que le CMMN est facile d’utilisation. Le Business Analyst peut décrire le processus existant en direct de la séance, et ainsi s’assurer d’une bonne lecture.

Pour conclure, je dirais que les Business Analyst, les développeurs, les architectes ou encore les chefs de projet qui doivent maitriser la construction d’un modèle à partir d’une page blanche, ne peuvent que **tirer profit de la maitrise de ces modèles de notation**.