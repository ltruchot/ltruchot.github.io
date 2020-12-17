# Covid Killer

## Infos
Décembre 2020

JavaScript: Epreuve pratique en 7h

Répartition sur 100 pts
- épreuve théoriques: 20 pts
- épreuve pratique:
  - qualité du code: 20 pts
  - javascript statique (génération HTML): 30 pts
  - javascript dynamique (intéractions utilisateur): 30 pts

## Consignes
*Toutes sources d'information autorisées, mais pas de communication interpersonnelles pendant l'épreuve. L'aspect individuel/unique de la résolution des questions et du problème fait partie de la note*

*Les deux langues autorisée sont le Français et l'Anglais*

*Les copier/coller de code d'internet sont sanctionnés.*

*On a pas le droit de toucher au HTML. Tout le site est généré depuis le JavaScript. Par contre on peut changer le SCSS.*

*Frameworks/Librairies de SPA non autorisés (Angular, React, Vue, Jquery...)*

- Envoyez votre travail aux formateurs via un lien vers un repo github AVANT 16h45 le 18/12/2020
- Ne touchez plus jamais à ce repo après 16h45 sous peine de malus important

## Épreuve théorique sur 20pts

Pour chaque question, répondre avec **vos propres mots**, sans copier/coller, en au moins 2 phrases.
Les réponses peuvent être subjectives si il y a le signe **(s)** à la fin de la question

Vous pouvez répondre à même ce document ou dans un fichier à part

- Qu'est-ce que JavaScript Vanilla ?
- Qu'est-ce qu'AJAX ?
- Pourquoi JavaScript est parfois mal-aimé des devs ? **(s)**
- Y a-t-il des types en JavaScript ? Si oui, lesquels ?
- Est-ce que SASS est un langage qui est interprété par les navigateurs ?
- Pourquoi peut-on dire que JavaScript est un langage "multi-paradigmes" ? **(s)**
- En JS, une fonction peut-elle retourner une fonction ?
- Est-ce que "alert" existe en Node.JS ?
- Est-ce que `window.console.log === console.log` dans le navigateur ?
- Quel est votre aspect préféré du JavaScript ? **(s)**

## Épreuve pratique sur 80pts
Vous êtes codeuse/codeur JavaScript dans un hôpital de centre-ville.
Vous développez un outil de pré-commande de vaccins dans les stocks d'État, pour les responsables d'équipes médicales.
Votre site doit premettre à ces personnes de réserver différents types de vaccins parmi ceux disponibles.

Cloner et utiliser cette seed pour produire votre Single Page Application

Le script `./script.js` est déjà lié à la page d'accueil `./index.html` grâce à Parcel, de même que `style.scss` - il ne faut donc rien changer dans cette architecture.

- supprimer le dossier ".git" à la racine
- créer votre propre remote sur github et l'associer au projet
- `npm install` installe les packages de la seed
- `npm start` lance la seed en mode "développement"

### Modéliser les données
Produire un fichier JS qui exporte un Array d'objet avec les data suivantes:
#### Vaccin 1
nom: BBIBP-CorV  
Inventeurs: Sinopharm  
Lieux de production: Chine  
Technologie: virus inactivé  
Quantité: 42  
Prix unitaire: 17$  
Approuvé: oui  
#### Vaccin 2
nom: Sputnik V  
Inventeurs: Gamaleya  
Lieux de production: Russie, Inde  
Technologie: adenovirus  
Quantité: 13  
Prix unitaire: 12$  
Approuvé: non  
#### Vaccin 3
nom: AZD1222  
Inventeurs: AstraZeneca, University of Oxford  
Lieux de production: Royaume Unis, Brésil, Inde  
Technologie: adenovirus  
Quantité: 101  
Prix unitaire: 8$  
Approuvé: non  
#### Vaccin 4
nom: Tozinameran  
Inventeurs: BioNTech, Pfizer, Fosun Pharma  
Lieux de production: Allemagne, USA  
Technologie: ARN messager  
Quantité: 17  
Prix unitaire: 14$  
Approuvé: oui  
#### Vaccin 5
nom: mRNA-1273  
Inventeurs: Moderna, NIAID, BARDA  
Lieux de production: USA  
Technologie: ARN messager  
Quantité: 24  
Prix unitaire: 28$  
Approuvé: non  
#### Vaccin 6
nom: Ad26.COV2.S  
Inventeurs: Johnson & Johnson, BIDMC  
Lieux de production: USA, Amérique du Sud, Ukraine, Afrique du Sud  
Technologie: adenovirus  
Quantité: 5  
Prix unitaire: 31$  
Approuvé: non  

### Transformer les données en éléments du DOM
Les éléments suivants sont créés dans la div `#app` via JavaScript:
- un `h1` avec le nom du site
- un élément `header`, présentant 
  - un bouton pour classer par prix
  - un bouton pour cacher les vaccins "non appouvés" 
- un élément HTML `main`. 
  - C'est le catalogue montrant tous les vaccins sous forme de cartes
  - chaque carte présente une image de vaccin (présente dans le dossier "static")
  - chaque carte présente toutes les infos disponibles pour ce vaccin
  - chaque carte présente un bouton un champ vide et un bouton "réserver" à côté
- un élément `footer` présente la commande en cours (vide au début), et un bouton "passer la commande"

### Manipulation du DOM et interaction utilisateur
- Lorsqu'un utilisateur clique sur "réserver" dans une carte de vaccin
    - il apparaît dans la commande du `footer`, avec la quantité demandée (ex: Tozinameran x3)
    - le champ de quantité disparaît de la carte
    - le bouton "réserver" devient `disabled`
- Lorsqu'un utilisateur clique sur "passer la commande" dans le `footer`:
  - la page se vide
  -  un message indique "La commande a bien été enregistrée"
  - sur cet écran final, un bouton "Annuler la commande" permet de  recharger automatiquement la page dans son état initial

### Bonus (pas compté dans les points):
- Améliorer l'affichage de votre site grâce aux SCSS
- L'action de passer commande lorsqu'il n'y a pas de commande est impossible
- Un bouton dans le `footer` permet d'annuler toute la réservation d'un coup
- Il est impossible de commander plus de vaccins que les quantités existantes
- Le calcul exact des prix, vaccins par vaccins, et le total du prix final sont ajoutés dans le footer
- Ils sont aussi rappelés dans la page suivante
