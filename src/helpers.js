// une série de one-liners utiles à mon programme

// identity::any -> any
// ne fait rien, ce qui parfois est bien
export const identity = (a) => a;
// prop::string -> Object -> any
// prend une propriété d'objet (string), retourne une fonction qui prend un objet...
// ...et retourne la propriété donnée plus tôt pour cet objet
export const prop = (k) => (o) => o[k];
// prop::string -> (objet, objet) -> number
// prend une propriété d'objet (string), retourne une fonction qui prend 2 objets...
// ...et retourne le diff entre pour la clé données plus tôt pour ces objets
// s'utilise princepalement dans un "sort"
export const sortBy = (k) => (a, b) => a[k] - b[k];
