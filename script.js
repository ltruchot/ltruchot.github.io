import './styles.scss';
import { data } from './src/data';

console.log('Pourquoi tu regardes la console ? La confiance règne...');

// la magie des oneliners et du currying
const identity = (a) => a;
const prop = (k) => (o) => o[k];
const sortBy = (k) => (a, b) => a[k] - b[k];

// état complet de l'app
const state = {
  authorizedFilter: false,
  priceSort: false,
  vaccines: data, // tous les vaccins
  products: [], // commande en cours
  totalPrice: 0,
};

// ajout de quelques classes tailwind au body
document.body.classList.add('text-gray-200', 'bg-gray-900', 'max-w-7xl', 'mx-auto', 'px-5', 'pt-8', 'pb-32');

// construction du layout de base
const app = document.getElementById('app');
app.innerHTML = `
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

/* header */
const header = document.querySelector('header');
const renderHeader = ({ authorizedFilter, priceSort }) => {
  // les boutons changent en fonctions des params, grâce à des conditions ternaires
  header.innerHTML = `
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
};
renderHeader(state);

/* main */
const main = document.querySelector('main');
const renderMain = ({ vaccines, authorizedFilter, priceSort }) => {
  // pour faire les cartes, on filtre, on tri, et enfin on map ! Booooooom, j'adore JS
  main.innerHTML = vaccines
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
};
renderMain(state);

/* footer */
const footer = document.querySelector('footer');
const commandeElement = footer.querySelector('#commande');
const btnCommande = footer.querySelector('#btn-commande');
const btnCancel = footer.querySelector('#btn-annuler');
const renderFooter = ({ products, vaccines }) => {
  const isEmpty = products.length === 0;
  btnCommande.disabled = isEmpty;
  btnCancel.style.visibility = isEmpty ? 'hidden' : 'visible';
  commandeElement.innerHTML = products.map(([id, qte]) => `
    <li class="bg-gray-600 m-2 rounded p-2">
      ${vaccines[id].nom}
      <strong>x${qte} / €${(vaccines[id].prix * qte).toFixed(2)}</strong>
    </li>
  `).join('');
  // oulà, WTF... reduce ? connais pas.
  // bon en gros, on cumule les prix des vaccins multiplié par les quantitées choisies
  state.totalPrice = products.reduce((acc, [id, qte]) => (vaccines[id].prix * qte) + acc, 0);
  btnCommande.innerHTML = `Commander €${state.totalPrice.toFixed(2)}`;
};
renderFooter(state);

// delegation des évènements
header.addEventListener('click', (e) => {
  if (e.target.matches('#btn-filter')) {
    state.authorizedFilter = !state.authorizedFilter;
    renderHeader(state);
    renderMain(state);
  } else if (e.target.matches('#btn-sort')) {
    state.priceSort = !state.priceSort;
    renderHeader(state);
    renderMain(state);
  }
});

main.addEventListener('click', (e) => {
  if (e.target.matches('.btn-reserver')) {
    const carte = e.target.closest('.carte');
    const ipt = carte.querySelector('.ipt-qte');
    // ne garder que la partie chiffrée de l'id
    const idx = carte.id.split('-')[1];
    const qte = parseInt(ipt.value, 10);
    if (qte <= state.vaccines[idx].quantite) {
      state.products.push([idx, qte]);
      state.vaccines[idx].reservation = true;
      renderMain(state);
      renderFooter(state);
    } else {
      window.alert(`Il n'y a pas assez de réserve pour le vaccin ${state.vaccines[idx].nom}`);
      ipt.value = '';
    }
  }
});

footer.addEventListener('click', (e) => {
  if (e.target.matches('#btn-annuler')) {
    state.products = [];
    state.vaccines = state.vaccines.map((v) => ({ ...v, reservation: false }));
    renderFooter(state);
    renderMain(state);
  } else if (e.target.matches('#btn-commande')) {
    document.body.innerHTML = `
    <div class="text-center">
      La commande a bien été enregistrée...<br /> 
      Votre compte a été débité de €${state.totalPrice.toFixed(2)}.<br />
      Le colis est en route, patience !<br />
      <button onclick="location.reload()" class="mt-2 p-2 bold rounded bg-red-100 text-red-700">
        Annuler
      </button>
    </div>`;
  }
});
