parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Eofe":[function(require,module,exports) {

},{"./..\\webfonts\\fa-brands-400.eot":[["fa-brands-400.37ac7aa9.eot","YH3g"],"YH3g"],"./..\\webfonts\\fa-brands-400.woff2":[["fa-brands-400.75407efa.woff2","qUWF"],"qUWF"],"./..\\webfonts\\fa-brands-400.woff":[["fa-brands-400.2ba681df.woff","d16i"],"d16i"],"./..\\webfonts\\fa-brands-400.ttf":[["fa-brands-400.effdf7ca.ttf","Lu1x"],"Lu1x"],"./..\\webfonts\\fa-brands-400.svg":[["fa-brands-400.5a5ec54a.svg","GRGc"],"GRGc"],"./..\\webfonts\\fa-regular-400.eot":[["fa-regular-400.6eacca26.eot","nv22"],"nv22"],"./..\\webfonts\\fa-regular-400.woff2":[["fa-regular-400.1d9d06ec.woff2","M504"],"M504"],"./..\\webfonts\\fa-regular-400.woff":[["fa-regular-400.df770621.woff","H1q6"],"H1q6"],"./..\\webfonts\\fa-regular-400.ttf":[["fa-regular-400.7b7b2e58.ttf","Evul"],"Evul"],"./..\\webfonts\\fa-regular-400.svg":[["fa-regular-400.8492b0f5.svg","D7rB"],"D7rB"],"./..\\webfonts\\fa-solid-900.eot":[["fa-solid-900.d183197b.eot","ISQp"],"ISQp"],"./..\\webfonts\\fa-solid-900.woff2":[["fa-solid-900.45f9d2b3.woff2","PerI"],"PerI"],"./..\\webfonts\\fa-solid-900.woff":[["fa-solid-900.a4dd9117.woff","nA9q"],"nA9q"],"./..\\webfonts\\fa-solid-900.ttf":[["fa-solid-900.ec666f35.ttf","FJZt"],"FJZt"],"./..\\webfonts\\fa-solid-900.svg":[["fa-solid-900.ab2ae31a.svg","lFqB"],"lFqB"]}],"RokV":[function(require,module,exports) {

},{}],"I4sy":[function(require,module,exports) {

},{"@fortawesome/fontawesome-free/css/all.css":"Eofe","tailwindcss/dist/tailwind.css":"RokV"}],"vpnQ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.data=void 0;var e=[{nom:"BBIBP-CorV",inventeurs:["Sinopharm"],lieux:["Chine"],technologie:"virus inactivé",quantite:420,prix:17,approuve:!0,img:"bbibp-corv.jpg",reservation:!1},{nom:"Sputnik V",inventeurs:["Gamaleya"],lieux:["Russie","Inde"],technologie:"adenovirus",quantite:130,prix:12,approuve:!1,img:"sputnik-v.jpg",reservation:!1},{nom:"AZD1222",inventeurs:["AstraZeneca","University of Oxford"],lieux:["Royaume Unis","Brésil","Inde"],technologie:"adenovirus",quantite:5028,prix:1.78,approuve:!1,img:"azd1222.jpg",reservation:!1},{nom:"Tozinameran",inventeurs:["BioNTech","Pfizer","Fosun Pharma"],lieux:["Allemagne","USA"],technologie:"ARN messager",quantite:980,prix:14,approuve:!0,img:"tozinameran.jpg",reservation:!1},{nom:"mRNA-1273",inventeurs:["Moderna","NIAID","BARDA"],lieux:["USA"],technologie:"ARN messager",quantite:240,prix:28,approuve:!1,img:"mrna-1273.jpg",reservation:!1},{nom:"Ad26.COV2.S",inventeurs:["Johnson & Johnson","BIDMC"],lieux:["USA","Amérique du Sud","Ukraine","Afrique du Sud"],technologie:"adenovirus",quantite:110,prix:31,approuve:!1,img:"ad26-cov2-s.jpg",reservation:!1}];exports.data=e;
},{}],"aol7":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.confetti=l;var e=["#a864fd","#29cdff","#78ff44","#ff718d","#fdff6a"];function t(e,t,i,n,s){return Array.from({length:t}).map(function(t,r){var a=document.createElement("div"),l=i[r%i.length];return a.style["background-color"]=l,a.style.width=n,a.style.height=s,a.style.position="absolute",a.style.willChange="transform, opacity",a.style.visibility="hidden",e.appendChild(a),a})}function i(e,t,i,n){var s=e*(Math.PI/180),r=t*(Math.PI/180);return{x:0,y:0,z:0,wobble:10*n(),wobbleSpeed:.1+.1*n(),velocity:.5*i+n()*i,angle2D:-s+(.5*r-n()*r),angle3D:-Math.PI/4+n()*(Math.PI/2),tiltAngle:n()*Math.PI,tiltAngleSpeed:.1+.3*n()}}function n(e,t,i,n){e.physics.x+=Math.cos(e.physics.angle2D)*e.physics.velocity,e.physics.y+=Math.sin(e.physics.angle2D)*e.physics.velocity,e.physics.z+=Math.sin(e.physics.angle3D)*e.physics.velocity,e.physics.wobble+=e.physics.wobbleSpeed,n?e.physics.velocity*=n:e.physics.velocity-=e.physics.velocity*i,e.physics.y+=3,e.physics.tiltAngle+=e.physics.tiltAngleSpeed;var s=e.physics,r=s.x,a=s.y,l=s.z,o=s.tiltAngle,c=s.wobble,y="translate3d("+(r+10*Math.cos(c))+"px, "+(a+10*Math.sin(c))+"px, "+l+"px) rotate3d(1, 1, 1, "+o+"rad)";e.element.style.visibility="visible",e.element.style.transform=y,e.element.style.opacity=1-t}function s(e,t,i,s,r,a){var l=void 0;return new Promise(function(o){requestAnimationFrame(function c(y){l||(l=y);var h=y-l,p=l===y?0:(y-l)/r;t.slice(0,Math.ceil(h/a)).forEach(function(e){n(e,p,i,s)}),y-l<r?requestAnimationFrame(c):(t.forEach(function(t){if(t.element.parentNode===e)return e.removeChild(t.element)}),o())})})}var r={angle:90,spread:45,startVelocity:45,elementCount:50,width:"10px",height:"10px",perspective:"",colors:e,duration:3e3,stagger:0,dragFriction:.1,random:Math.random};function a(e){return!e.stagger&&e.delay&&(e.stagger=e.delay),e}function l(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=Object.assign({},r,a(n)),o=l.elementCount,c=l.colors,y=l.width,h=l.height,p=l.perspective,d=l.angle,u=l.spread,g=l.startVelocity,f=l.decay,v=l.dragFriction,m=l.duration,b=l.stagger,M=l.random;return e.style.perspective=p,s(e,t(e,o,c,y,h).map(function(e){return{element:e,physics:i(d,u,g,M)}}),v,f,m,b)}
},{}],"s49y":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.sortBy=exports.prop=exports.identity=void 0;var r=function(r){return r};exports.identity=r;var t=function(r){return function(t){return t[r]}};exports.prop=t;var e=function(r){return function(t,e){return t[r]-e[r]}};exports.sortBy=e;
},{}],"pPGC":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.renderEnd=exports.renderFooter=exports.renderMain=exports.renderHeader=exports.renderApp=void 0;var e=require("dom-confetti"),n=require("./helpers");function t(e,n){return l(e)||i(e,n)||o(e,n)||r()}function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(e,n){if(e){if("string"==typeof e)return a(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?a(e,n):void 0}}function a(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function i(e,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(t.push(i.value),!n||t.length!==n);r=!0);}catch(s){o=!0,a=s}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}return t}}function l(e){if(Array.isArray(e))return e}var s=function(){return'\n<h1 class="title-font text-center mb-8 font-extrabold text-6xl tracking-wider">\n  Covid Killer\n</h1>\n<header class="text-center mb-8">\n</header>\n<main class="flex flex-wrap mx-4 mt-4 justify-center">\n</main>\n<footer class=\'w-full text-center border-t border-grey p-4 text-white fixed bottom-0 left-0 bg-gray-800\'>\n  <h2 class="text-xl font-medium mb-3">\n    Résumé / \n    <button id="btn-commande" class="ml-1 p-2 bold rounded bg-blue-100 text-blue-700">\n      Commander\n    </button>\n    <button id="btn-annuler" class="ml-1 p-2 bold rounded bg-red-100 text-red-700">\n      Annuler\n    </button>\n  </h2>\n  <ul class="text-left m-auto max-w-xl flex flex-wrap" id="commande"></ul>\n</footer>\n'};exports.renderApp=s;var c=function(e){var n=e.authorizedFilter,t=e.priceSort;return'\n  <button id="btn-filter" class="p-2 bold rounded bg-green-100 text-green-700">\n  '.concat(n?"Montrer tout":"Cacher vaccins non approuvé",'\n  </button>\n  <button id="btn-sort" class="p-2 bold rounded bg-yellow-100 text-yellow-700">\n  ').concat(t?"Annuler le tri":"Trier par prix croissant","\n  </button>\n")};exports.renderHeader=c;var d=function(e){var t=e.vaccines,r=e.authorizedFilter,o=e.priceSort;return t.filter(r?(0,n.prop)("approuve"):n.identity).sort(o?(0,n.sortBy)("prix"):n.identity).map(function(e,n){return'\n  <div class="carte p-10 md:w-96 flex flex-col" id="item-'.concat(n,'">\n    <div class="pattern-dots-md gray-light">\n      <div class="rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6">\n        <img src="').concat(e.img,'" class="block w-full mb-4" />\n        <div class="flex items-center mb-2">\n          <div class="w-10 h-10 mr-4 inline-flex items-center justify-center rounded-full ').concat("ARN messager"===e.technologie?"bg-green-100 text-green-700":"bg-yellow-100 text-yellow-700",' flex-shrink-0 p-2">\n              <i class="fas ').concat("ARN messager"===e.technologie?"fa-dna":"fa-viruses",'"></i>\n          </div>\n          ').concat(e.technologie,'\n        </div>\n        <div class="flex-grow">\n          <h2 class="text-xl font-medium mb-3">').concat(e.nom,'</h2>\n          <div class="flex">\n            <input \n              type="number" \n              class="ipt-qte text-gray-800 w-1/2 mr-1 p-2 rounded"\n              ').concat(e.reservation?"disabled":"",'\n               />\n            <button \n              class="btn-reserver w-1/2 ml-1 p-2 bold rounded ').concat(e.reservation?"bg-gray-500 text-gray-400":"bg-blue-100 text-blue-700",'"\n              ').concat(e.reservation?"disabled":"",'>Réserver</button>\n          </div>\n          <h3 class="bold underline mb-2">Informations complémentaires</h3>\n          <p class="leading-relaxed text-sm">\n             <strong>Prix unit.:</strong> €').concat(e.prix.toFixed(2),"<br />\n             <strong>Qté disponible:</strong> ").concat(e.quantite,"<br />\n             <strong>Marque:</strong> ").concat(e.inventeurs.join(", "),"<br />\n             <strong>Lieux:</strong> ").concat(e.lieux.join(", "),"\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n  ")}).join("")};exports.renderMain=d;var u=function(e){var n=e.products,r=e.vaccines;return n.map(function(e){var n=t(e,2),o=n[0],a=n[1];return'\n    <li class="bg-gray-600 m-2 rounded p-2">\n      '.concat(r[o].nom,"\n      <strong>x").concat(a," / €").concat((r[o].prix*a).toFixed(2),"</strong>\n    </li>\n  ")}).join("")};exports.renderFooter=u;var b=function(e){var n=e.totalPrice;return'\n<div class="text-center">\n  La commande a bien été enregistrée...<br /> \n  Votre compte a été débité de €'.concat(n.toFixed(2),'.<br />\n  Le colis est en route, patience !<br />\n  <button onclick="location.reload()" class="mt-2 p-2 bold rounded bg-red-100 text-red-700">\n    Annuler\n  </button>\n</div>')};exports.renderEnd=b;var m,p=!1;window.addEventListener("keydown",function(n){m=m||"l"!==n.key?void 0:setTimeout(function(){return p=!0},2e3),p&&(document.body.innerHTML='<h1 class="text-center text-6xl absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">Bonne<br />Année<br />2021</h1>\n    <div id="eg" class="absolute w-0 left-1/2 top-1/2"></div>',(0,e.confetti)(document.getElementById("eg"),{duration:7e3,spread:360,angle:180}))}),window.addEventListener("keyup",function(){clearTimeout(m)});
},{"dom-confetti":"aol7","./helpers":"s49y"}],"mpVp":[function(require,module,exports) {
"use strict";require("./styles.scss");var e=require("./src/data"),r=require("./src/rendering");function t(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function n(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?t(Object(n),!0).forEach(function(r){i(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){return d(e)||s(e,r)||c(e,r)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(e,r){if(e){if("string"==typeof e)return u(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?u(e,r):void 0}}function u(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function s(e,r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var t=[],n=!0,i=!1,o=void 0;try{for(var a,c=e[Symbol.iterator]();!(n=(a=c.next()).done)&&(t.push(a.value),!r||t.length!==r);n=!0);}catch(u){i=!0,o=u}finally{try{n||null==c.return||c.return()}finally{if(i)throw o}}return t}}function d(e){if(Array.isArray(e))return e}console.log("Pourquoi tu regardes la console ? La confiance règne...");var l={authorizedFilter:!1,priceSort:!1,vaccines:e.data,products:[],totalPrice:0};document.body.classList.add("text-gray-200","bg-gray-900","max-w-7xl","mx-auto","px-5","pt-8","pb-32");var f=document.getElementById("app");f.innerHTML=(0,r.renderApp)();var p=document.querySelector("header"),y=document.querySelector("main"),v=document.querySelector("footer"),b=v.querySelector("#commande"),m=function(e){var r=e.products,t=e.vaccines,n=v.querySelector("#btn-commande"),i=v.querySelector("#btn-annuler"),a=0===r.length;n.disabled=a,i.style.visibility=a?"hidden":"visible",l.totalPrice=r.reduce(function(e,r){var n=o(r,2),i=n[0],a=n[1];return t[i].prix*a+e},0),n.innerHTML="Commander €".concat(l.totalPrice.toFixed(2))};p.innerHTML=(0,r.renderHeader)(l),y.innerHTML=(0,r.renderMain)(l),b.innerHTML=(0,r.renderFooter)(l),m(l),p.addEventListener("click",function(e){e.target.matches("#btn-filter")?(l.authorizedFilter=!l.authorizedFilter,p.innerHTML=(0,r.renderHeader)(l),y.innerHTML=(0,r.renderMain)(l)):e.target.matches("#btn-sort")&&(l.priceSort=!l.priceSort,p.innerHTML=(0,r.renderHeader)(l),y.innerHTML=(0,r.renderMain)(l))}),y.addEventListener("click",function(e){if(e.target.matches(".btn-reserver")){var t=e.target.closest(".carte"),n=t.querySelector(".ipt-qte"),i=t.id.split("-")[1],o=parseInt(n.value,10);if(Number.isNaN(o)||o<=0)return window.alert("La quantité de vaccin ".concat(l.vaccines[i].nom," est erronée ou fantaisiste.")),void(n.value="");if(o>l.vaccines[i].quantite)return window.alert("Il n'y a pas assez de réserve pour le vaccin ".concat(l.vaccines[i].nom,".")),void(n.value="");l.products.push([i,o]),l.vaccines[i].reservation=!0,y.innerHTML=(0,r.renderMain)(l),b.innerHTML=(0,r.renderFooter)(l),m(l)}}),v.addEventListener("click",function(e){e.target.matches("#btn-annuler")?(l.products=[],l.vaccines=l.vaccines.map(function(e){return n(n({},e),{},{reservation:!1})}),b.innerHTML=(0,r.renderFooter)(l),m(l),y.innerHTML=(0,r.renderMain)(l)):e.target.matches("#btn-commande")&&(document.body.innerHTML=(0,r.renderEnd)(l))});
},{"./styles.scss":"I4sy","./src/data":"vpnQ","./src/rendering":"pPGC"}]},{},["mpVp"], null)
//# sourceMappingURL=/script.5d5275dd.js.map