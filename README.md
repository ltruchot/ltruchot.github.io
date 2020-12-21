# Corrections

- Qu'est-ce que JavaScript vanilla ?
C'est l'usage de JavaScript sans aucune librairie ni framework. 
Le terme "vanilla" existe pour de nombreux produits IT pour distinguer leur "version de base", hors extensions.

- Qu'est-ce qu'AJAX ?
Asynchronous JavaScript And XML désigne un outil présent dans javascript et capable de faire des requêtes "en background", sans recharger la page web qu'on consulte (contacter un serveur, charger des nouvelles données, envoyer un formulaire...). 
C'est l'emblème du web 2.0 car cela permet un experience utilisateur fluide, digne d'un logiciel, pendant la navigation sur la page web.

- Pourquoi JavaScript est parfois mal-aimé des devs ? **(s)**
JavaScript est en langage qui a été développé dans l'urgence, avec plusieurs failles et mauvaises pratiques dès le démarrage.
Les types faibles et dynamiques ainsi que l'aspect interprété génèrent beaucoup d'erreurs.
Par ailleurs, JS ne respecte pas le paradigme objet, adopté par les dev de façon généralisée dans les années 90.
Enfin, ce langage sur-utilisé produit une "fatigue" particulière chez les devs, du fait de nombreuses nouveautés annuelles depuis 10 ans, dans le langage mais aussi côté frameworks.

- Y a-t-il des types en JavaScript ? Si oui, lesquels ?
Oui, mais peu nombreux et dynamiques. Il y a les types primitifs: boolean, number et string - et le types composé Object et ses déclinaisons: Array, Function, Date, RegExp... Il y a aussi les types "vide": null et undefined.

- Est-ce que SASS est un langage qui est interprété par les navigateurs ?
Non, SASS est un préprocesseur de feuille de style qui sert avant la diffusion du site, pour produire la feuille de style.
Seuls JS, HTML et CSS sont interprétables par le navigateur (avec une ouverture sur WebAssembly ces dernières années).

- Pourquoi peut-on dire que JavaScript est un langage "multi-paradigmes" ? **(s)**
JavaSript permet le code Procédural, l'Orienté Objet (via le système de prototype et un système de classes embryonnaire), le Fonctionnel, et sa boîte à outil interne + son aspect Turing Complete l'ouvre potentiellement à d'autres paradigmes.


- En JS, une fonction peut-elle retourner une fonction ?
Tout à fait. C'est la marque d'un langage fonctionnelle où les fonctions sont des valeurs comme les autres.
On fait usage de cette technique pour la closure, l'application partielle d'argument et le curriying.

- Est-ce que `alert` existe en Node.JS ?
Non. Node.JS ne comprend pas la boite à outil "window" et toutes ses méthodes comme "alert".
En effen, en Node, il n'y a pas de fenetre de navigateur avec laquelle interagir: c'est du dévelopement backend.

- Est-ce que `window.console.log === console.log` dans le navigateur ?
Oui car console.log est un raccourci vers window.console.log.
window.console est le meme objet que "console" tout court, et donc .log la même méthode (et en fait la même référence en mémoire)

- Quel est votre aspect préféré de JavaScript ? **(s)**
Les fonctions comme "citoyennes de première classe", c'est à dire comme valeurs ordinaires qu'on peut passer en argument, stocker, retourner...
Cela permet la programmation fonctionnelle, un paradigme exigent mais extrêment puissant pour faire du code expressif, declaratif, testable et démontrable.
