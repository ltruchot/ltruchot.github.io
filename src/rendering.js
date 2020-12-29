import { confetti } from 'dom-confetti';
import { identity, prop, sortBy } from './helpers';

// une série de fonctions pures permettant le rendering de l'app

// layout de base, utilisé 1x au début
export const renderApp = () => `
<h1 class="title-font text-center mb-8 font-extrabold text-6xl tracking-wider">
  Covid Killer
</h1>
<header class="text-center mb-8">
</header>
<main class="flex flex-wrap mx-4 mt-4 justify-center">
</main>
<footer class='w-full text-center border-t border-grey p-4 text-white fixed bottom-0 left-0 bg-gray-800'>
  <h2 class="text-xl font-medium mb-3">
    Résumé / 
    <button id="btn-commande" class="ml-1 p-2 bold rounded bg-blue-100 text-blue-700">
      Commander
    </button>
    <button id="btn-annuler" class="ml-1 p-2 bold rounded bg-red-100 text-red-700">
      Annuler
    </button>
  </h2>
  <ul class="text-left m-auto max-w-xl flex flex-wrap" id="commande"></ul>
</footer>
`;

// header, rechargé selon l'état des boutons
// les boutons changent en fonctions des params, grâce à des conditions ternaires
export const renderHeader = ({ authorizedFilter, priceSort }) => `
  <button id="btn-filter" class="p-2 bold rounded bg-green-100 text-green-700">
  ${authorizedFilter
    ? 'Montrer tout'
    : 'Cacher vaccins non approuvé'}
  </button>
  <button id="btn-sort" class="p-2 bold rounded bg-yellow-100 text-yellow-700">
  ${priceSort
    ? 'Annuler le tri'
    : 'Trier par prix croissant'}
  </button>
`;

// main: le coeur de l'app
// pour faire les cartes, on filtre, on tri, et enfin on map ! Booooooom, j'adore JS
// la méthode ".toFixed(2)" est un classique de l'affichage de devise:
// transforme un nombre en string avec 2 chiffres après la virgule
// ".join('')" assemble les élements d'un tableau en une seule string
// filter et sort ont une ternaire qui, selon le cas...
// ...applique une fonction qui ne fait rien (identity)... ou qui agit. Habile !
export const renderMain = ({ vaccines, authorizedFilter, priceSort }) => vaccines
  .filter(authorizedFilter ? prop('approuve') : identity)
  .sort(priceSort ? sortBy('prix') : identity)
  .map((vaccine, i) => `
  <div class="carte p-10 md:w-96 flex flex-col" id="item-${i}">
    <div class="pattern-dots-md gray-light">
      <div class="rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6">
        <img src="${vaccine.img}" class="block w-full mb-4" />
        <div class="flex items-center mb-2">
          <div class="w-10 h-10 mr-4 inline-flex items-center justify-center rounded-full ${vaccine.technologie === 'ARN messager' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'} flex-shrink-0 p-2">
              <i class="fas ${vaccine.technologie === 'ARN messager' ? 'fa-dna' : 'fa-viruses'}"></i>
          </div>
          ${vaccine.technologie}
        </div>
        <div class="flex-grow">
          <h2 class="text-xl font-medium mb-3">${vaccine.nom}</h2>
          <div class="flex">
            <input 
              type="number" 
              class="ipt-qte text-gray-800 w-1/2 mr-1 p-2 rounded"
              ${vaccine.reservation ? 'disabled' : ''}
               />
            <button 
              class="btn-reserver w-1/2 ml-1 p-2 bold rounded ${vaccine.reservation ? 'bg-gray-500 text-gray-400' : 'bg-blue-100 text-blue-700'}"
              ${vaccine.reservation ? 'disabled' : ''}>Réserver</button>
          </div>
          <h3 class="bold underline mb-2">Informations complémentaires</h3>
          <p class="leading-relaxed text-sm">
             <strong>Prix unit.:</strong> €${vaccine.prix.toFixed(2)}<br />
             <strong>Qté disponible:</strong> ${vaccine.quantite}<br />
             <strong>Marque:</strong> ${vaccine.inventeurs.join(', ')}<br />
             <strong>Lieux:</strong> ${vaccine.lieux.join(', ')}
          </p>
        </div>
      </div>
    </div>
  </div>
  `).join('');

// footer: rechargé à chaque réservation
export const renderFooter = ({ products, vaccines }) => products.map(([id, qte]) => `
    <li class="bg-gray-600 m-2 rounded p-2">
      ${vaccines[id].nom}
      <strong>x${qte} / €${(vaccines[id].prix * qte).toFixed(2)}</strong>
    </li>
  `).join('');

// end: l'état final qd on passe la commande. sera render 1x
// location.reload() rechargera intégralement la page si besoin
export const renderEnd = ({ totalPrice }) => `
<div class="text-center">
  La commande a bien été enregistrée...<br /> 
  Votre compte a été débité de €${totalPrice.toFixed(2)}.<br />
  Le colis est en route, patience !<br />
  <button onclick="location.reload()" class="mt-2 p-2 bold rounded bg-red-100 text-red-700">
    Annuler
  </button>
</div>`;

// hidden easter egg
let eg = false;
let to;
window.addEventListener('keydown', (e) => {
  to = !to && e.key === false.toString()[2] ? setTimeout(() => eg = true, 2000) : undefined;
  if (eg) {
    document.body.innerHTML = `<h1 class="text-center text-6xl absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">Bonne<br />Année<br />2021</h1>
    <div id="eg" class="absolute w-0 left-1/2 top-1/2"></div>`;
    confetti(document.getElementById('eg'), { duration: 7000, spread: 360, angle: 180 });
  }
});
window.addEventListener('keyup', () => {
  clearTimeout(to);
});
