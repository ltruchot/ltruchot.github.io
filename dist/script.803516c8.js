parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Eofe":[function(require,module,exports) {

},{"./..\\webfonts\\fa-brands-400.eot":[["fa-brands-400.37ac7aa9.eot","YH3g"],"YH3g"],"./..\\webfonts\\fa-brands-400.woff2":[["fa-brands-400.75407efa.woff2","qUWF"],"qUWF"],"./..\\webfonts\\fa-brands-400.woff":[["fa-brands-400.2ba681df.woff","d16i"],"d16i"],"./..\\webfonts\\fa-brands-400.ttf":[["fa-brands-400.effdf7ca.ttf","Lu1x"],"Lu1x"],"./..\\webfonts\\fa-brands-400.svg":[["fa-brands-400.5a5ec54a.svg","GRGc"],"GRGc"],"./..\\webfonts\\fa-regular-400.eot":[["fa-regular-400.6eacca26.eot","nv22"],"nv22"],"./..\\webfonts\\fa-regular-400.woff2":[["fa-regular-400.1d9d06ec.woff2","M504"],"M504"],"./..\\webfonts\\fa-regular-400.woff":[["fa-regular-400.df770621.woff","H1q6"],"H1q6"],"./..\\webfonts\\fa-regular-400.ttf":[["fa-regular-400.7b7b2e58.ttf","Evul"],"Evul"],"./..\\webfonts\\fa-regular-400.svg":[["fa-regular-400.8492b0f5.svg","D7rB"],"D7rB"],"./..\\webfonts\\fa-solid-900.eot":[["fa-solid-900.d183197b.eot","ISQp"],"ISQp"],"./..\\webfonts\\fa-solid-900.woff2":[["fa-solid-900.45f9d2b3.woff2","PerI"],"PerI"],"./..\\webfonts\\fa-solid-900.woff":[["fa-solid-900.a4dd9117.woff","nA9q"],"nA9q"],"./..\\webfonts\\fa-solid-900.ttf":[["fa-solid-900.ec666f35.ttf","FJZt"],"FJZt"],"./..\\webfonts\\fa-solid-900.svg":[["fa-solid-900.ab2ae31a.svg","lFqB"],"lFqB"]}],"RokV":[function(require,module,exports) {

},{}],"I4sy":[function(require,module,exports) {

},{"@fortawesome/fontawesome-free/css/all.css":"Eofe","tailwindcss/dist/tailwind.css":"RokV"}],"vpnQ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.data=void 0;var e=[{nom:"BBIBP-CorV",inventeurs:["Sinopharm"],lieux:["Chine"],technologie:"virus inactivé",quantite:420,prix:17,approuve:!0,img:"bbibp-corv.jpg",reservation:!1},{nom:"Sputnik V",inventeurs:["Gamaleya"],lieux:["Russie","Inde"],technologie:"adenovirus",quantite:130,prix:12,approuve:!1,img:"sputnik-v.jpg",reservation:!1},{nom:"AZD1222",inventeurs:["AstraZeneca","University of Oxford"],lieux:["Royaume Unis","Brésil","Inde"],technologie:"adenovirus",quantite:5028,prix:1.78,approuve:!1,img:"azd1222.jpg",reservation:!1},{nom:"Tozinameran",inventeurs:["BioNTech","Pfizer","Fosun Pharma"],lieux:["Allemagne","USA"],technologie:"ARN messager",quantite:980,prix:14,approuve:!0,img:"tozinameran.jpg",reservation:!1},{nom:"mRNA-1273",inventeurs:["Moderna","NIAID","BARDA"],lieux:["USA"],technologie:"ARN messager",quantite:240,prix:28,approuve:!1,img:"mrna-1273.jpg",reservation:!1},{nom:"Ad26.COV2.S",inventeurs:["Johnson & Johnson","BIDMC"],lieux:["USA","Amérique du Sud","Ukraine","Afrique du Sud"],technologie:"adenovirus",quantite:110,prix:31,approuve:!1,img:"ad26-cov2-s.jpg",reservation:!1}];exports.data=e;
},{}],"mpVp":[function(require,module,exports) {
"use strict";require("./styles.scss");var e=require("./src/data");function t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function n(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?t(Object(o),!0).forEach(function(t){r(e,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})}return e}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return s(e)||l(e,t)||i(e,t)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function l(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(l){o=!0,a=l}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}}function s(e){if(Array.isArray(e))return e}console.log("Pourquoi tu regardes la console ? La confiance règne...");var u=function(e){return e},d=function(e){return function(t){return t[e]}},b=function(e){return function(t,n){return t[e]-n[e]}},m={authorizedFilter:!1,priceSort:!1,vaccines:e.data,products:[],totalPrice:0};document.body.classList.add("text-gray-200","bg-gray-900","max-w-7xl","mx-auto","px-5","pt-8","pb-32");var f=document.getElementById("app");f.innerHTML='\n<h1 class="title-font text-center mb-8 font-extrabold text-6xl tracking-wider">\n  Covid Killer\n</h1>\n<header class="text-center mb-8">\n</header>\n<main class="flex flex-wrap mx-4 mt-4 justify-center">\n</main>\n<footer class=\'w-full text-center border-t border-grey p-4 text-white fixed bottom-0 left-0 bg-gray-800\'>\n  <h2 class="text-xl font-medium mb-3">\n    Résumé / \n    <button id="btn-commande" class="ml-1 p-2 bold rounded bg-blue-100 text-blue-700">\n      Commander\n    </button>\n    <button id="btn-annuler" class="ml-1 p-2 bold rounded bg-red-100 text-red-700">\n      Annuler\n    </button>\n  </h2>\n  <ul class="text-left m-auto max-w-xl flex flex-wrap" id="commande"></ul>\n</footer>\n';var p=document.querySelector("header"),v=function(e){var t=e.authorizedFilter,n=e.priceSort;p.innerHTML='\n    <button id="btn-filter" class="p-2 bold rounded bg-green-100 text-green-700">\n    '.concat(t?"Montrer tout":"Cacher vaccins non approuvé",'\n    </button>\n    <button id="btn-sort" class="p-2 bold rounded bg-yellow-100 text-yellow-700">\n    ').concat(n?"Annuler le tri":"Trier par prix croissant","\n    </button>\n ")};v(m);var g=document.querySelector("main"),y=function(e){var t=e.vaccines,n=e.authorizedFilter,r=e.priceSort;g.innerHTML=t.filter(n?d("approuve"):u).sort(r?b("prix"):u).map(function(e,t){return'\n  <div class="carte p-10 md:w-96 flex flex-col" id="item-'.concat(t,'">\n    <div class="pattern-dots-md gray-light">\n      <div class="rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6">\n        <img src="').concat(e.img,'" class="block w-full mb-4" />\n        <div class="flex items-center mb-2">\n          <div class="w-10 h-10 mr-4 inline-flex items-center justify-center rounded-full ').concat("ARN messager"===e.technologie?"bg-green-100 text-green-700":"bg-yellow-100 text-yellow-700",' flex-shrink-0 p-2">\n              <i class="fas ').concat("ARN messager"===e.technologie?"fa-dna":"fa-viruses",'"></i>\n          </div>\n          ').concat(e.technologie,'\n        </div>\n        <div class="flex-grow">\n          <h2 class="text-xl font-medium mb-3">').concat(e.nom,'</h2>\n          <div class="flex">\n            <input \n              type="number" \n              class="ipt-qte text-gray-800 w-1/2 mr-1 p-2 rounded"\n              ').concat(e.reservation?"disabled":"",'\n               />\n            <button \n              class="btn-reserver w-1/2 ml-1 p-2 bold rounded ').concat(e.reservation?"bg-gray-500 text-gray-400":"bg-blue-100 text-blue-700",'"\n              ').concat(e.reservation?"disabled":"",'>Réserver</button>\n          </div>\n          <h3 class="bold underline mb-2">Informations complémentaires</h3>\n          <p class="leading-relaxed text-sm">\n             <strong>Prix unit.:</strong> €').concat(e.prix.toFixed(2),"<br />\n             <strong>Qté disponible:</strong> ").concat(e.quantite,"<br />\n             <strong>Marque:</strong> ").concat(e.inventeurs.join(", "),"<br />\n             <strong>Lieux:</strong> ").concat(e.lieux.join(", "),"\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n  ")}).join("")};y(m);var x=document.querySelector("footer"),h=x.querySelector("#commande"),w=x.querySelector("#btn-commande"),j=x.querySelector("#btn-annuler"),O=function(e){var t=e.products,n=e.vaccines,r=0===t.length;w.disabled=r,j.style.visibility=r?"hidden":"visible",h.innerHTML=t.map(function(e){var t=o(e,2),r=t[0],a=t[1];return'\n    <li class="bg-gray-600 m-2 rounded p-2">\n      '.concat(n[r].nom,"\n      <strong>x").concat(a," / €").concat((n[r].prix*a).toFixed(2),"</strong>\n    </li>\n  ")}).join(""),m.totalPrice=t.reduce(function(e,t){var r=o(t,2),a=r[0],i=r[1];return n[a].prix*i+e},0),w.innerHTML="Commander €".concat(m.totalPrice.toFixed(2))};O(m),p.addEventListener("click",function(e){e.target.matches("#btn-filter")?(m.authorizedFilter=!m.authorizedFilter,v(m),y(m)):e.target.matches("#btn-sort")&&(m.priceSort=!m.priceSort,v(m),y(m))}),g.addEventListener("click",function(e){if(e.target.matches(".btn-reserver")){var t=e.target.closest(".carte"),n=t.querySelector(".ipt-qte"),r=t.id.split("-")[1],o=parseInt(n.value,10);if(Number.isNaN(o)||o<=0)return window.alert("La quantité de vaccin ".concat(m.vaccines[r].nom," est erronée ou fantaisiste.")),void(n.value="");if(o>m.vaccines[r].quantite)return window.alert("Il n'y a pas assez de réserve pour le vaccin ".concat(m.vaccines[r].nom,".")),void(n.value="");m.products.push([r,o]),m.vaccines[r].reservation=!0,y(m),O(m)}}),x.addEventListener("click",function(e){e.target.matches("#btn-annuler")?(m.products=[],m.vaccines=m.vaccines.map(function(e){return n(n({},e),{},{reservation:!1})}),O(m),y(m)):e.target.matches("#btn-commande")&&(document.body.innerHTML='\n    <div class="text-center">\n      La commande a bien été enregistrée...<br /> \n      Votre compte a été débité de €'.concat(m.totalPrice.toFixed(2),'.<br />\n      Le colis est en route, patience !<br />\n      <button onclick="location.reload()" class="mt-2 p-2 bold rounded bg-red-100 text-red-700">\n        Annuler\n      </button>\n    </div>'))});
},{"./styles.scss":"I4sy","./src/data":"vpnQ"}]},{},["mpVp"], null)
//# sourceMappingURL=/script.803516c8.js.map