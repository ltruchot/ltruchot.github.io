import './styles.scss';
import { data } from './src/data';
import {
  renderApp, renderHeader, renderMain, renderFooter, renderEnd,
} from './src/rendering';

console.log('Pourquoi tu regardes la console ? La confiance règne...');

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
app.innerHTML = renderApp();

// élements utiles
const header = document.querySelector('header');
const main = document.querySelector('main');
const footer = document.querySelector('footer');
const commandeElement = footer.querySelector('#commande');

/* comportement des boutons */
const changeButtonsState = ({ products, vaccines }) => {
  const btnCommande = footer.querySelector('#btn-commande');
  const btnCancel = footer.querySelector('#btn-annuler');
  const isEmpty = products.length === 0;
  // actions impossibles si panie vide
  btnCommande.disabled = isEmpty;
  btnCancel.style.visibility = isEmpty ? 'hidden' : 'visible';
  // oulà, WTF... reduce ? connais pas.
  // bon en gros, on cumule les prix des vaccins multiplié par les quantitées choisies
  state.totalPrice = products.reduce((acc, [id, qte]) => (vaccines[id].prix * qte) + acc, 0);
  btnCommande.innerHTML = `Commander €${state.totalPrice.toFixed(2)}`;
};

// premier rendering
header.innerHTML = renderHeader(state);
main.innerHTML = renderMain(state);
commandeElement.innerHTML = renderFooter(state);
changeButtonsState(state);

// delegation des évènements
header.addEventListener('click', (e) => {
  if (e.target.matches('#btn-filter')) {
    // click sur filter -> change state -> rerender
    state.authorizedFilter = !state.authorizedFilter;
    header.innerHTML = renderHeader(state);
    main.innerHTML = renderMain(state);
  } else if (e.target.matches('#btn-sort')) {
    // click sur sort -> change state -> rerender
    state.priceSort = !state.priceSort;
    header.innerHTML = renderHeader(state);
    main.innerHTML = renderMain(state);
  }
});

main.addEventListener('click', (e) => {
  if (e.target.matches('.btn-reserver')) {
    // click sur reserver -> trouver la carte concernée et son id
    const carte = e.target.closest('.carte');
    const ipt = carte.querySelector('.ipt-qte');
    // ne garder que la partie chiffrée de l'id
    const idx = carte.id.split('-')[1];
    const qte = parseInt(ipt.value, 10);
    // "guard" en cas de valeur fantaisiste saisie par l'user
    if (Number.isNaN(qte) || qte <= 0) {
      window.alert(`La quantité de vaccin ${state.vaccines[idx].nom} est erronée ou fantaisiste.`);
      ipt.value = '';
      return;
    }
    // "guards" en cas de valeur trop grande saisie par l'user
    if (qte > state.vaccines[idx].quantite) {
      window.alert(`Il n'y a pas assez de réserve pour le vaccin ${state.vaccines[idx].nom}.`);
      ipt.value = '';
      return;
    }

    // comme les "if" ont un return, pas besoin de "else"...
    // ...ce qui suit n'a lieu que si il n'y a pas d'erreur avant
    // change state
    state.products.push([idx, qte]);
    state.vaccines[idx].reservation = true;
    // rerender
    main.innerHTML = renderMain(state);
    commandeElement.innerHTML = renderFooter(state);
    changeButtonsState(state);
  }
});

footer.addEventListener('click', (e) => {
  if (e.target.matches('#btn-annuler')) {
    // click sur annuler -> vider le panier / clean réservation vaccins
    state.products = [];
    state.vaccines = state.vaccines.map((v) => ({ ...v, reservation: false }));
    // rerender
    commandeElement.innerHTML = renderFooter(state);
    changeButtonsState(state);
    main.innerHTML = renderMain(state);
  } else if (e.target.matches('#btn-commande')) {
    // click sur commander -> remplacer contenu par un message
    document.body.innerHTML = renderEnd(state);
  }
});
