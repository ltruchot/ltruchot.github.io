// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"node_modules/@fortawesome/fontawesome-free/css/all.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\webfonts\\fa-brands-400.eot":[["fa-brands-400.1bb139e6.eot","node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.eot"],"node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.eot"],"./..\\webfonts\\fa-brands-400.woff2":[["fa-brands-400.1d34615d.woff2","node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.woff2"],"node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.woff2"],"./..\\webfonts\\fa-brands-400.woff":[["fa-brands-400.eca31406.woff","node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.woff"],"node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.woff"],"./..\\webfonts\\fa-brands-400.ttf":[["fa-brands-400.df86de32.ttf","node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.ttf"],"node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.ttf"],"./..\\webfonts\\fa-brands-400.svg":[["fa-brands-400.f1eb0e8c.svg","node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.svg"],"node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.svg"],"./..\\webfonts\\fa-regular-400.eot":[["fa-regular-400.a2c1909d.eot","node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.eot"],"node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.eot"],"./..\\webfonts\\fa-regular-400.woff2":[["fa-regular-400.5ca8c932.woff2","node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.woff2"],"node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.woff2"],"./..\\webfonts\\fa-regular-400.woff":[["fa-regular-400.3c3cc54e.woff","node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.woff"],"node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.woff"],"./..\\webfonts\\fa-regular-400.ttf":[["fa-regular-400.cde05ce7.ttf","node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.ttf"],"node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.ttf"],"./..\\webfonts\\fa-regular-400.svg":[["fa-regular-400.6ef294e6.svg","node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.svg"],"node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.svg"],"./..\\webfonts\\fa-solid-900.eot":[["fa-solid-900.90890cef.eot","node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.eot"],"node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.eot"],"./..\\webfonts\\fa-solid-900.woff2":[["fa-solid-900.da0e0451.woff2","node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff2"],"node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff2"],"./..\\webfonts\\fa-solid-900.woff":[["fa-solid-900.935b31ea.woff","node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff"],"node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff"],"./..\\webfonts\\fa-solid-900.ttf":[["fa-solid-900.f2409036.ttf","node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.ttf"],"node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.ttf"],"./..\\webfonts\\fa-solid-900.svg":[["fa-solid-900.c87ba59a.svg","node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.svg"],"node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.svg"],"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"node_modules/tailwindcss/dist/tailwind.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"styles.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"@fortawesome/fontawesome-free/css/all.css":"node_modules/@fortawesome/fontawesome-free/css/all.css","tailwindcss/dist/tailwind.css":"node_modules/tailwindcss/dist/tailwind.css","_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/data.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.data = void 0;
var data = [{
  nom: 'BBIBP-CorV',
  inventeurs: ['Sinopharm'],
  lieux: ['Chine'],
  technologie: 'virus inactivé',
  quantite: 420,
  prix: 17,
  approuve: true,
  img: 'bbibp-corv.jpg',
  reservation: false
}, {
  nom: 'Sputnik V',
  inventeurs: ['Gamaleya'],
  lieux: ['Russie', 'Inde'],
  technologie: 'adenovirus',
  quantite: 130,
  prix: 12,
  approuve: false,
  img: 'sputnik-v.jpg',
  reservation: false
}, {
  nom: 'AZD1222',
  inventeurs: ['AstraZeneca', 'University of Oxford'],
  lieux: ['Royaume Unis', 'Brésil', 'Inde'],
  technologie: 'adenovirus',
  quantite: 5028,
  prix: 1.78,
  approuve: false,
  img: 'azd1222.jpg',
  reservation: false
}, {
  nom: 'Tozinameran',
  inventeurs: ['BioNTech', 'Pfizer', 'Fosun Pharma'],
  lieux: ['Allemagne', 'USA'],
  technologie: 'ARN messager',
  quantite: 980,
  prix: 14,
  approuve: true,
  img: 'tozinameran.jpg',
  reservation: false
}, {
  nom: 'mRNA-1273',
  inventeurs: ['Moderna', 'NIAID', 'BARDA'],
  lieux: ['USA'],
  technologie: 'ARN messager',
  quantite: 240,
  prix: 28,
  approuve: false,
  img: 'mrna-1273.jpg',
  reservation: false
}, {
  nom: 'Ad26.COV2.S',
  inventeurs: ['Johnson & Johnson', 'BIDMC'],
  lieux: ['USA', 'Amérique du Sud', 'Ukraine', 'Afrique du Sud'],
  technologie: 'adenovirus',
  quantite: 110,
  prix: 31,
  approuve: false,
  img: 'ad26-cov2-s.jpg',
  reservation: false
}];
exports.data = data;
},{}],"script.js":[function(require,module,exports) {
"use strict";

require("./styles.scss");

var _data = require("./src/data");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

console.log('Pourquoi tu regardes la console ? La confiance règne...'); // la magie des oneliners et du currying

var identity = function identity(a) {
  return a;
};

var prop = function prop(k) {
  return function (o) {
    return o[k];
  };
};

var sortBy = function sortBy(k) {
  return function (a, b) {
    return a[k] - b[k];
  };
}; // état complet de l'app


var state = {
  authorizedFilter: false,
  priceSort: false,
  vaccines: _data.data,
  // tous les vaccins
  products: [],
  // commande en cours
  totalPrice: 0
}; // ajout de quelques classes tailwind au body

document.body.classList.add('text-gray-200', 'bg-gray-900', 'max-w-7xl', 'mx-auto', 'px-5', 'pt-8', 'pb-32'); // construction du layout de base

var app = document.getElementById('app');
app.innerHTML = "\n<h1 class=\"title-font text-center mb-8 font-extrabold text-6xl tracking-wider\">\n  Covid Killer\n</h1>\n<header class=\"text-center mb-8\">\n</header>\n<main class=\"flex flex-wrap mx-4 mt-4 justify-center\">\n</main>\n<footer class='w-full text-center border-t border-grey p-4 text-white fixed bottom-0 left-0 bg-gray-800'>\n  <h2 class=\"text-xl font-medium mb-3\">\n    R\xE9sum\xE9 / \n    <button id=\"btn-commande\" class=\"ml-1 p-2 bold rounded bg-blue-100 text-blue-700\">\n      Commander\n    </button>\n    <button id=\"btn-annuler\" class=\"ml-1 p-2 bold rounded bg-red-100 text-red-700\">\n      Annuler\n    </button>\n  </h2>\n  <ul class=\"text-left m-auto max-w-xl flex flex-wrap\" id=\"commande\"></ul>\n</footer>\n";
/* header */

var header = document.querySelector('header');

var renderHeader = function renderHeader(_ref) {
  var authorizedFilter = _ref.authorizedFilter,
      priceSort = _ref.priceSort;
  // les boutons changent en fonctions des params, grâce à des conditions ternaires
  header.innerHTML = "\n    <button id=\"btn-filter\" class=\"p-2 bold rounded bg-green-100 text-green-700\">\n    ".concat(authorizedFilter ? 'Montrer tout' : 'Cacher vaccins non approuvé', "\n    </button>\n    <button id=\"btn-sort\" class=\"p-2 bold rounded bg-yellow-100 text-yellow-700\">\n    ").concat(priceSort ? 'Annuler le tri' : 'Trier par prix croissant', "\n    </button>\n ");
};

renderHeader(state);
/* main */

var main = document.querySelector('main');

var renderMain = function renderMain(_ref2) {
  var vaccines = _ref2.vaccines,
      authorizedFilter = _ref2.authorizedFilter,
      priceSort = _ref2.priceSort;
  // pour faire les cartes, on filtre, on tri, et enfin on map ! Booooooom, j'adore JS
  // la méthode ".toFixed(2)" est un classique de l'affichage de devise:
  // transforme un nombre en string avec 2 chiffres après la virgule
  // ".join('')" assemble les élements d'un tableau en une seule string
  // filter et sort ont une ternaire qui, selon le cas...
  // ...applique une fonction qui ne fait rien (identity)  ou qui agit. Habile !
  main.innerHTML = vaccines.filter(authorizedFilter ? prop('approuve') : identity).sort(priceSort ? sortBy('prix') : identity).map(function (vaccine, i) {
    return "\n  <div class=\"carte p-10 md:w-96 flex flex-col\" id=\"item-".concat(i, "\">\n    <div class=\"pattern-dots-md gray-light\">\n      <div class=\"rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6\">\n        <img src=\"").concat(vaccine.img, "\" class=\"block w-full mb-4\" />\n        <div class=\"flex items-center mb-2\">\n          <div class=\"w-10 h-10 mr-4 inline-flex items-center justify-center rounded-full ").concat(vaccine.technologie === 'ARN messager' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700', " flex-shrink-0 p-2\">\n              <i class=\"fas ").concat(vaccine.technologie === 'ARN messager' ? 'fa-dna' : 'fa-viruses', "\"></i>\n          </div>\n          ").concat(vaccine.technologie, "\n        </div>\n        <div class=\"flex-grow\">\n          <h2 class=\"text-xl font-medium mb-3\">").concat(vaccine.nom, "</h2>\n          <div class=\"flex\">\n            <input \n              type=\"number\" \n              class=\"ipt-qte text-gray-800 w-1/2 mr-1 p-2 rounded\"\n              ").concat(vaccine.reservation ? 'disabled' : '', "\n               />\n            <button \n              class=\"btn-reserver w-1/2 ml-1 p-2 bold rounded ").concat(vaccine.reservation ? 'bg-gray-500 text-gray-400' : 'bg-blue-100 text-blue-700', "\"\n              ").concat(vaccine.reservation ? 'disabled' : '', ">R\xE9server</button>\n          </div>\n          <h3 class=\"bold underline mb-2\">Informations compl\xE9mentaires</h3>\n          <p class=\"leading-relaxed text-sm\">\n             <strong>Prix unit.:</strong> \u20AC").concat(vaccine.prix.toFixed(2), "<br />\n             <strong>Qt\xE9 disponible:</strong> ").concat(vaccine.quantite, "<br />\n             <strong>Marque:</strong> ").concat(vaccine.inventeurs.join(', '), "<br />\n             <strong>Lieux:</strong> ").concat(vaccine.lieux.join(', '), "\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n  ");
  }).join('');
};

renderMain(state);
/* footer */

var footer = document.querySelector('footer');
var commandeElement = footer.querySelector('#commande');
var btnCommande = footer.querySelector('#btn-commande');
var btnCancel = footer.querySelector('#btn-annuler');

var renderFooter = function renderFooter(_ref3) {
  var products = _ref3.products,
      vaccines = _ref3.vaccines;
  var isEmpty = products.length === 0;
  btnCommande.disabled = isEmpty;
  btnCancel.style.visibility = isEmpty ? 'hidden' : 'visible';
  commandeElement.innerHTML = products.map(function (_ref4) {
    var _ref5 = _slicedToArray(_ref4, 2),
        id = _ref5[0],
        qte = _ref5[1];

    return "\n    <li class=\"bg-gray-600 m-2 rounded p-2\">\n      ".concat(vaccines[id].nom, "\n      <strong>x").concat(qte, " / \u20AC").concat((vaccines[id].prix * qte).toFixed(2), "</strong>\n    </li>\n  ");
  }).join(''); // oulà, WTF... reduce ? connais pas.
  // bon en gros, on cumule les prix des vaccins multiplié par les quantitées choisies

  state.totalPrice = products.reduce(function (acc, _ref6) {
    var _ref7 = _slicedToArray(_ref6, 2),
        id = _ref7[0],
        qte = _ref7[1];

    return vaccines[id].prix * qte + acc;
  }, 0);
  btnCommande.innerHTML = "Commander \u20AC".concat(state.totalPrice.toFixed(2));
};

renderFooter(state); // delegation des évènements

header.addEventListener('click', function (e) {
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
main.addEventListener('click', function (e) {
  if (e.target.matches('.btn-reserver')) {
    var carte = e.target.closest('.carte');
    var ipt = carte.querySelector('.ipt-qte'); // ne garder que la partie chiffrée de l'id

    var idx = carte.id.split('-')[1];
    var qte = parseInt(ipt.value, 10);

    if (Number.isNaN(qte) || qte <= 0) {
      window.alert("La quantit\xE9 de vaccin ".concat(state.vaccines[idx].nom, " est erron\xE9e ou fantaisiste."));
      ipt.value = '';
      return;
    }

    if (qte > state.vaccines[idx].quantite) {
      window.alert("Il n'y a pas assez de r\xE9serve pour le vaccin ".concat(state.vaccines[idx].nom, "."));
      ipt.value = '';
      return;
    } // comme les "if" ont un return, pas besoin de "else"...
    // ...ceci n'a lieu que si il n'y a pas d'erreur avant


    state.products.push([idx, qte]);
    state.vaccines[idx].reservation = true;
    renderMain(state);
    renderFooter(state);
  }
});
footer.addEventListener('click', function (e) {
  if (e.target.matches('#btn-annuler')) {
    state.products = [];
    state.vaccines = state.vaccines.map(function (v) {
      return _objectSpread(_objectSpread({}, v), {}, {
        reservation: false
      });
    });
    renderFooter(state);
    renderMain(state);
  } else if (e.target.matches('#btn-commande')) {
    document.body.innerHTML = "\n    <div class=\"text-center\">\n      La commande a bien \xE9t\xE9 enregistr\xE9e...<br /> \n      Votre compte a \xE9t\xE9 d\xE9bit\xE9 de \u20AC".concat(state.totalPrice.toFixed(2), ".<br />\n      Le colis est en route, patience !<br />\n      <button onclick=\"location.reload()\" class=\"mt-2 p-2 bold rounded bg-red-100 text-red-700\">\n        Annuler\n      </button>\n    </div>");
  }
});
},{"./styles.scss":"styles.scss","./src/data":"src/data.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52973" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","script.js"], null)
//# sourceMappingURL=/script.75da7f30.js.map