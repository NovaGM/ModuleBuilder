parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function r(r){return e(r)||o(r)||n(r)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(r,t){if(r){if("string"==typeof r)return a(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);return"Object"===n&&r.constructor&&(n=r.constructor.name),"Map"===n||"Set"===n?Array.from(r):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(r,t):void 0}}function o(r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r))return Array.from(r)}function e(r){if(Array.isArray(r))return a(r)}function a(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=r[n];return o}function c(r,t,n,o,e,a,c){try{var u=r[a](c),s=u.value}catch(i){return void n(i)}u.done?t(s):Promise.resolve(s).then(o,e)}function u(r){return function(){var t=this,n=arguments;return new Promise(function(o,e){var a=r.apply(t,n);function u(r){c(a,o,e,u,s,"next",r)}function s(r){c(a,o,e,u,s,"throw",r)}u(void 0)})}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var s="0.1.0",i={gooseModHandlers:{onImport:function(){var t=u(regeneratorRuntime.mark(function t(){var n,o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:(n=window.document.styleSheets[0]).insertRule("html > body.theme-custom {\n      --background-primary: var(--background-primary-custom);\n      --background-secondary: var(--background-secondary-custom);\n      --background-secondary-alt: var(--background-secondary-alt-custom)\n      --background-tertiary: var(--background-tertiary-custom);\n\n      --channeltextarea-background: var(--background-tertiary);\n      --background-message-hover: rgba(4, 4, 5, 0.07);\n\n      --background-accent: var(--background-accent-custom);\n      --background-floating: var(--background-tertiary);\n\n      --scrollbar-thin-thumb: var(--brand-color);\n      --scrollbar-auto-thumb: var(--scrollbar-thin-thumb);\n      --scrollbar-auto-scrollbar-color-thumb: var(--scrollbar-thin-thumb);\n\n      --scrollbar-auto-track: var(--background-secondary-alt);\n      --scrollbar-auto-scrollbar-color-track: var(--scrollbar-auto-track);\n\n      --brand-color: var(--brand-color-custom);\n      --brand-color-hover: var(--brand-color-hover-custom);\n    }",n.cssRules.length),document.body.classList.add("theme-custom"),o=["--background-primary","--background-secondary","--background-secondary-alt","--background-tertiary","--background-accent","--brand-color","--brand-color-hover"],goosemodScope.settings.createItem("Custom Theme",["(v".concat(s,")")].concat(r(o.map(function(r){return{type:"text-and-color",text:r.substring(2).replace(/-/g," ").replace(/(^|\W)([a-z])/g,function(r,t,n){return"".concat(t).concat(n.toUpperCase())}),oninput:function(t){document.body.style.setProperty("".concat(r,"-custom"),t)}}}))));case 5:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),onRemove:function(){var r=u(regeneratorRuntime.mark(function r(){var t;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:document.body.classList.remove("theme-custom"),t=goosemodScope.settings.items.find(function(r){return"Custom Theme"===r[1]}),goosemodScope.settings.items.splice(goosemodScope.settings.items.indexOf(t),1);case 3:case"end":return r.stop()}},r)}));return function(){return r.apply(this,arguments)}}()}};exports.default=i;
},{}]},{},["index.js"], null);parcelRequire('index.js').default