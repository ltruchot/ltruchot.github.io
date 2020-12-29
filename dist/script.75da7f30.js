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
},{}],"node_modules/dom-confetti/lib/main.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.confetti = confetti;
var defaultColors = ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"];

function createElements(root, elementCount, colors, width, height) {
  return Array.from({ length: elementCount }).map(function (_, index) {
    var element = document.createElement("div");
    var color = colors[index % colors.length];
    element.style["background-color"] = color; // eslint-disable-line space-infix-ops
    element.style.width = width;
    element.style.height = height;
    element.style.position = "absolute";
    element.style.willChange = "transform, opacity";
    element.style.visibility = "hidden";
    root.appendChild(element);
    return element;
  });
}

function randomPhysics(angle, spread, startVelocity, random) {
  var radAngle = angle * (Math.PI / 180);
  var radSpread = spread * (Math.PI / 180);
  return {
    x: 0,
    y: 0,
    z: 0,
    wobble: random() * 10,
    wobbleSpeed: 0.1 + random() * 0.1,
    velocity: startVelocity * 0.5 + random() * startVelocity,
    angle2D: -radAngle + (0.5 * radSpread - random() * radSpread),
    angle3D: -(Math.PI / 4) + random() * (Math.PI / 2),
    tiltAngle: random() * Math.PI,
    tiltAngleSpeed: 0.1 + random() * 0.3
  };
}

function updateFetti(fetti, progress, dragFriction, decay) {
  /* eslint-disable no-param-reassign */
  fetti.physics.x += Math.cos(fetti.physics.angle2D) * fetti.physics.velocity;
  fetti.physics.y += Math.sin(fetti.physics.angle2D) * fetti.physics.velocity;
  fetti.physics.z += Math.sin(fetti.physics.angle3D) * fetti.physics.velocity;
  fetti.physics.wobble += fetti.physics.wobbleSpeed;
  // Backward compatibility
  if (decay) {
    fetti.physics.velocity *= decay;
  } else {
    fetti.physics.velocity -= fetti.physics.velocity * dragFriction;
  }
  fetti.physics.y += 3;
  fetti.physics.tiltAngle += fetti.physics.tiltAngleSpeed;

  var _fetti$physics = fetti.physics,
      x = _fetti$physics.x,
      y = _fetti$physics.y,
      z = _fetti$physics.z,
      tiltAngle = _fetti$physics.tiltAngle,
      wobble = _fetti$physics.wobble;

  var wobbleX = x + 10 * Math.cos(wobble);
  var wobbleY = y + 10 * Math.sin(wobble);
  var transform = "translate3d(" + wobbleX + "px, " + wobbleY + "px, " + z + "px) rotate3d(1, 1, 1, " + tiltAngle + "rad)";

  fetti.element.style.visibility = "visible";
  fetti.element.style.transform = transform;
  fetti.element.style.opacity = 1 - progress;

  /* eslint-enable */
}

function animate(root, fettis, dragFriction, decay, duration, stagger) {
  var startTime = void 0;

  return new Promise(function (resolve) {
    function update(time) {
      if (!startTime) startTime = time;
      var elapsed = time - startTime;
      var progress = startTime === time ? 0 : (time - startTime) / duration;
      fettis.slice(0, Math.ceil(elapsed / stagger)).forEach(function (fetti) {
        updateFetti(fetti, progress, dragFriction, decay);
      });

      if (time - startTime < duration) {
        requestAnimationFrame(update);
      } else {
        fettis.forEach(function (fetti) {
          if (fetti.element.parentNode === root) {
            return root.removeChild(fetti.element);
          }
        });
        resolve();
      }
    }

    requestAnimationFrame(update);
  });
}

var defaults = {
  angle: 90,
  spread: 45,
  startVelocity: 45,
  elementCount: 50,
  width: "10px",
  height: "10px",
  perspective: "",
  colors: defaultColors,
  duration: 3000,
  stagger: 0,
  dragFriction: 0.1,
  random: Math.random
};

function backwardPatch(config) {
  if (!config.stagger && config.delay) {
    config.stagger = config.delay;
  }
  return config;
}

function confetti(root) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _Object$assign = Object.assign({}, defaults, backwardPatch(config)),
      elementCount = _Object$assign.elementCount,
      colors = _Object$assign.colors,
      width = _Object$assign.width,
      height = _Object$assign.height,
      perspective = _Object$assign.perspective,
      angle = _Object$assign.angle,
      spread = _Object$assign.spread,
      startVelocity = _Object$assign.startVelocity,
      decay = _Object$assign.decay,
      dragFriction = _Object$assign.dragFriction,
      duration = _Object$assign.duration,
      stagger = _Object$assign.stagger,
      random = _Object$assign.random;

  root.style.perspective = perspective;
  var elements = createElements(root, elementCount, colors, width, height);
  var fettis = elements.map(function (element) {
    return {
      element: element,
      physics: randomPhysics(angle, spread, startVelocity, random)
    };
  });

  return animate(root, fettis, dragFriction, decay, duration, stagger);
}
},{}],"src/helpers.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sortBy = exports.prop = exports.identity = void 0;

// une série de one-liners utiles à mon programme
// identity::any -> any
// ne fait rien, ce qui parfois est bien
var identity = function identity(a) {
  return a;
}; // prop::string -> Object -> any
// prend une propriété d'objet (string), retourne une fonction qui prend un objet...
// ...et retourne la propriété donnée plus tôt pour cet objet


exports.identity = identity;

var prop = function prop(k) {
  return function (o) {
    return o[k];
  };
}; // prop::string -> (objet, objet) -> number
// prend une propriété d'objet (string), retourne une fonction qui prend 2 objets...
// ...et retourne le diff entre pour la clé données plus tôt pour ces objets
// s'utilise princepalement dans un "sort"


exports.prop = prop;

var sortBy = function sortBy(k) {
  return function (a, b) {
    return a[k] - b[k];
  };
};

exports.sortBy = sortBy;
},{}],"src/rendering.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderEnd = exports.renderFooter = exports.renderMain = exports.renderHeader = exports.renderApp = void 0;

var _domConfetti = require("dom-confetti");

var _helpers = require("./helpers");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// une série de fonctions pures permettant le rendering de l'app
// layout de base, utilisé 1x au début
var renderApp = function renderApp() {
  return "\n<h1 class=\"title-font text-center mb-8 font-extrabold text-6xl tracking-wider\">\n  Covid Killer\n</h1>\n<header class=\"text-center mb-8\">\n</header>\n<main class=\"flex flex-wrap mx-4 mt-4 justify-center\">\n</main>\n<footer class='w-full text-center border-t border-grey p-4 text-white fixed bottom-0 left-0 bg-gray-800'>\n  <h2 class=\"text-xl font-medium mb-3\">\n    R\xE9sum\xE9 / \n    <button id=\"btn-commande\" class=\"ml-1 p-2 bold rounded bg-blue-100 text-blue-700\">\n      Commander\n    </button>\n    <button id=\"btn-annuler\" class=\"ml-1 p-2 bold rounded bg-red-100 text-red-700\">\n      Annuler\n    </button>\n  </h2>\n  <ul class=\"text-left m-auto max-w-xl flex flex-wrap\" id=\"commande\"></ul>\n</footer>\n";
}; // header, rechargé selon l'état des boutons
// les boutons changent en fonctions des params, grâce à des conditions ternaires


exports.renderApp = renderApp;

var renderHeader = function renderHeader(_ref) {
  var authorizedFilter = _ref.authorizedFilter,
      priceSort = _ref.priceSort;
  return "\n  <button id=\"btn-filter\" class=\"p-2 bold rounded bg-green-100 text-green-700\">\n  ".concat(authorizedFilter ? 'Montrer tout' : 'Cacher vaccins non approuvé', "\n  </button>\n  <button id=\"btn-sort\" class=\"p-2 bold rounded bg-yellow-100 text-yellow-700\">\n  ").concat(priceSort ? 'Annuler le tri' : 'Trier par prix croissant', "\n  </button>\n");
}; // main: le coeur de l'app
// pour faire les cartes, on filtre, on tri, et enfin on map ! Booooooom, j'adore JS
// la méthode ".toFixed(2)" est un classique de l'affichage de devise:
// transforme un nombre en string avec 2 chiffres après la virgule
// ".join('')" assemble les élements d'un tableau en une seule string
// filter et sort ont une ternaire qui, selon le cas...
// ...applique une fonction qui ne fait rien (identity)... ou qui agit. Habile !


exports.renderHeader = renderHeader;

var renderMain = function renderMain(_ref2) {
  var vaccines = _ref2.vaccines,
      authorizedFilter = _ref2.authorizedFilter,
      priceSort = _ref2.priceSort;
  return vaccines.filter(authorizedFilter ? (0, _helpers.prop)('approuve') : _helpers.identity).sort(priceSort ? (0, _helpers.sortBy)('prix') : _helpers.identity).map(function (vaccine, i) {
    return "\n  <div class=\"carte p-10 md:w-96 flex flex-col\" id=\"item-".concat(i, "\">\n    <div class=\"pattern-dots-md gray-light\">\n      <div class=\"rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6\">\n        <img src=\"").concat(vaccine.img, "\" class=\"block w-full mb-4\" />\n        <div class=\"flex items-center mb-2\">\n          <div class=\"w-10 h-10 mr-4 inline-flex items-center justify-center rounded-full ").concat(vaccine.technologie === 'ARN messager' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700', " flex-shrink-0 p-2\">\n              <i class=\"fas ").concat(vaccine.technologie === 'ARN messager' ? 'fa-dna' : 'fa-viruses', "\"></i>\n          </div>\n          ").concat(vaccine.technologie, "\n        </div>\n        <div class=\"flex-grow\">\n          <h2 class=\"text-xl font-medium mb-3\">").concat(vaccine.nom, "</h2>\n          <div class=\"flex\">\n            <input \n              type=\"number\" \n              class=\"ipt-qte text-gray-800 w-1/2 mr-1 p-2 rounded\"\n              ").concat(vaccine.reservation ? 'disabled' : '', "\n               />\n            <button \n              class=\"btn-reserver w-1/2 ml-1 p-2 bold rounded ").concat(vaccine.reservation ? 'bg-gray-500 text-gray-400' : 'bg-blue-100 text-blue-700', "\"\n              ").concat(vaccine.reservation ? 'disabled' : '', ">R\xE9server</button>\n          </div>\n          <h3 class=\"bold underline mb-2\">Informations compl\xE9mentaires</h3>\n          <p class=\"leading-relaxed text-sm\">\n             <strong>Prix unit.:</strong> \u20AC").concat(vaccine.prix.toFixed(2), "<br />\n             <strong>Qt\xE9 disponible:</strong> ").concat(vaccine.quantite, "<br />\n             <strong>Marque:</strong> ").concat(vaccine.inventeurs.join(', '), "<br />\n             <strong>Lieux:</strong> ").concat(vaccine.lieux.join(', '), "\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n  ");
  }).join('');
}; // footer: rechargé à chaque réservation


exports.renderMain = renderMain;

var renderFooter = function renderFooter(_ref3) {
  var products = _ref3.products,
      vaccines = _ref3.vaccines;
  return products.map(function (_ref4) {
    var _ref5 = _slicedToArray(_ref4, 2),
        id = _ref5[0],
        qte = _ref5[1];

    return "\n    <li class=\"bg-gray-600 m-2 rounded p-2\">\n      ".concat(vaccines[id].nom, "\n      <strong>x").concat(qte, " / \u20AC").concat((vaccines[id].prix * qte).toFixed(2), "</strong>\n    </li>\n  ");
  }).join('');
}; // end: l'état final qd on passe la commande. sera render 1x
// location.reload() rechargera intégralement la page si besoin


exports.renderFooter = renderFooter;

var renderEnd = function renderEnd(_ref6) {
  var totalPrice = _ref6.totalPrice;
  return "\n<div class=\"text-center\">\n  La commande a bien \xE9t\xE9 enregistr\xE9e...<br /> \n  Votre compte a \xE9t\xE9 d\xE9bit\xE9 de \u20AC".concat(totalPrice.toFixed(2), ".<br />\n  Le colis est en route, patience !<br />\n  <button onclick=\"location.reload()\" class=\"mt-2 p-2 bold rounded bg-red-100 text-red-700\">\n    Annuler\n  </button>\n</div>");
}; // hidden easter egg


exports.renderEnd = renderEnd;
var eg = false;
var to;
window.addEventListener('keydown', function (e) {
  to = !to && e.key === false.toString()[2] ? setTimeout(function () {
    return eg = true;
  }, 2000) : undefined;

  if (eg) {
    document.body.innerHTML = "<h1 class=\"text-center text-6xl absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2\">Bonne<br />Ann\xE9e<br />2021</h1>\n    <div id=\"eg\" class=\"absolute w-0 left-1/2 top-1/2\"></div>";
    (0, _domConfetti.confetti)(document.getElementById('eg'), {
      duration: 7000,
      spread: 360,
      angle: 180
    });
  }
});
window.addEventListener('keyup', function () {
  clearTimeout(to);
});
},{"dom-confetti":"node_modules/dom-confetti/lib/main.js","./helpers":"src/helpers.js"}],"script.js":[function(require,module,exports) {
"use strict";

require("./styles.scss");

var _data = require("./src/data");

var _rendering = require("./src/rendering");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

console.log('Pourquoi tu regardes la console ? La confiance règne...'); // état complet de l'app

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
app.innerHTML = (0, _rendering.renderApp)(); // élements utiles

var header = document.querySelector('header');
var main = document.querySelector('main');
var footer = document.querySelector('footer');
var commandeElement = footer.querySelector('#commande');
/* comportement des boutons */

var changeButtonsState = function changeButtonsState(_ref) {
  var products = _ref.products,
      vaccines = _ref.vaccines;
  var btnCommande = footer.querySelector('#btn-commande');
  var btnCancel = footer.querySelector('#btn-annuler');
  var isEmpty = products.length === 0; // actions impossibles si panie vide

  btnCommande.disabled = isEmpty;
  btnCancel.style.visibility = isEmpty ? 'hidden' : 'visible'; // oulà, WTF... reduce ? connais pas.
  // bon en gros, on cumule les prix des vaccins multiplié par les quantitées choisies

  state.totalPrice = products.reduce(function (acc, _ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
        id = _ref3[0],
        qte = _ref3[1];

    return vaccines[id].prix * qte + acc;
  }, 0);
  btnCommande.innerHTML = "Commander \u20AC".concat(state.totalPrice.toFixed(2));
}; // premier rendering


header.innerHTML = (0, _rendering.renderHeader)(state);
main.innerHTML = (0, _rendering.renderMain)(state);
commandeElement.innerHTML = (0, _rendering.renderFooter)(state);
changeButtonsState(state); // delegation des évènements

header.addEventListener('click', function (e) {
  if (e.target.matches('#btn-filter')) {
    // click sur filter -> change state -> rerender
    state.authorizedFilter = !state.authorizedFilter;
    header.innerHTML = (0, _rendering.renderHeader)(state);
    main.innerHTML = (0, _rendering.renderMain)(state);
  } else if (e.target.matches('#btn-sort')) {
    // click sur sort -> change state -> rerender
    state.priceSort = !state.priceSort;
    header.innerHTML = (0, _rendering.renderHeader)(state);
    main.innerHTML = (0, _rendering.renderMain)(state);
  }
});
main.addEventListener('click', function (e) {
  if (e.target.matches('.btn-reserver')) {
    // click sur reserver -> trouver la carte concernée et son id
    var carte = e.target.closest('.carte');
    var ipt = carte.querySelector('.ipt-qte'); // ne garder que la partie chiffrée de l'id

    var idx = carte.id.split('-')[1];
    var qte = parseInt(ipt.value, 10); // "guard" en cas de valeur fantaisiste saisie par l'user

    if (Number.isNaN(qte) || qte <= 0) {
      window.alert("La quantit\xE9 de vaccin ".concat(state.vaccines[idx].nom, " est erron\xE9e ou fantaisiste."));
      ipt.value = '';
      return;
    } // "guards" en cas de valeur trop grande saisie par l'user


    if (qte > state.vaccines[idx].quantite) {
      window.alert("Il n'y a pas assez de r\xE9serve pour le vaccin ".concat(state.vaccines[idx].nom, "."));
      ipt.value = '';
      return;
    } // comme les "if" ont un return, pas besoin de "else"...
    // ...ce qui suit n'a lieu que si il n'y a pas d'erreur avant
    // change state


    state.products.push([idx, qte]);
    state.vaccines[idx].reservation = true; // rerender

    main.innerHTML = (0, _rendering.renderMain)(state);
    commandeElement.innerHTML = (0, _rendering.renderFooter)(state);
    changeButtonsState(state);
  }
});
footer.addEventListener('click', function (e) {
  if (e.target.matches('#btn-annuler')) {
    // click sur annuler -> vider le panier / clean réservation vaccins
    state.products = [];
    state.vaccines = state.vaccines.map(function (v) {
      return _objectSpread(_objectSpread({}, v), {}, {
        reservation: false
      });
    }); // rerender

    commandeElement.innerHTML = (0, _rendering.renderFooter)(state);
    changeButtonsState(state);
    main.innerHTML = (0, _rendering.renderMain)(state);
  } else if (e.target.matches('#btn-commande')) {
    // click sur commander -> remplacer contenu par un message
    document.body.innerHTML = (0, _rendering.renderEnd)(state);
  }
});
},{"./styles.scss":"styles.scss","./src/data":"src/data.js","./src/rendering":"src/rendering.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53388" + '/');

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