parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function e(e,n,t,r,o,a,u){try{var c=e[a](u),i=c.value}catch(s){return void t(s)}c.done?n(i):Promise.resolve(i).then(r,o)}function n(n){return function(){var t=this,r=arguments;return new Promise(function(o,a){var u=n.apply(t,r);function c(n){e(u,o,a,c,i,"next",n)}function i(n){e(u,o,a,c,i,"throw",n)}c(void 0)})}}var t;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var r={goosemodHandlers:{onImport:function(){var e=n(regeneratorRuntime.mark(function e(){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=function(){var e=n(regeneratorRuntime.mark(function e(){var n,t,r,o,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=goosemodScope.webpackModules.common.React,t=goosemodScope.webpackModules,r=t.findByDisplayName,o=t.findByProps,a=r("Text"),(0,o("openModal").openModal)(function(e){return n.createElement(r("ConfirmModal"),{header:"Relaunch",confirmText:"Relaunch",cancelText:o("Messages").Messages.CANCEL,onClose:function(){},onCancel:e.onClose,onConfirm:function(){return DiscordNative.app.relaunch()},transitionState:e.transitionState},n.createElement(a,{size:a.Sizes.SIZE_16},"Are you sure you want to relaunch Discord? This will completely terminate Discord and start the updater."))});case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),t=function(){var e=n(regeneratorRuntime.mark(function e(n){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:"F4"==n.code&&(n.preventDefault(),r());case 1:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),goosemodScope.settings.createItem("Relaunch",[""],n(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r();case 1:case"end":return e.stop()}},e)})),!0),document.addEventListener("keydown",t);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),onRemove:function(){var e=n(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:goosemod.settings.removeItem("Relaunch"),document.removeEventListener("keydown",t);case 2:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()}};exports.default=r;
},{}]},{},["index.js"], null);parcelRequire('index.js').default