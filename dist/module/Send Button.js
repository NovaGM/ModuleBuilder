parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function e(e,r){return i(e)||o(e,r)||n(e,r)||t()}function t(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var c,u=e[Symbol.iterator]();!(r=(c=u.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(a){o=!0,i=a}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}}function i(e){if(Array.isArray(e))return e}function c(e,t,n,r,o,i,c){try{var u=e[i](c),a=u.value}catch(s){return void n(s)}u.done?t(a):Promise.resolve(a).then(r,o)}function u(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){var i=e.apply(t,n);function u(e){c(i,r,o,u,a,"next",e)}function a(e){c(i,r,o,u,a,"throw",e)}u(void 0)})}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var a,s={mobileIcon:!1},l=function(e){s.mobileIcon=e;try{a()}catch(t){}a=goosemodScope.patcher.channelTextAreaButtons.patch("Send",s.mobileIcon?"https://i.imgur.com/n1TQIsQ.png":"https://i.imgur.com/qzomTIw.png",function(){if(""==goosemodScope.reactUtils.getReactInstance(document.querySelector(".channelTextArea-rNsIhG")).memoizedProps.children[4].props.textValue)return goosemodScope.webpackModules.findByProps("ComponentDispatch").ComponentDispatch.dispatch("SHAKE_APP",{duration:200,intensity:2});var e=document.querySelector(".textArea-12jD-V"),t=null==e?void 0:e.children[0],n=new KeyboardEvent("keydown",{key:"Enter",code:"Enter",which:13,keyCode:13,bubbles:!0});Object.defineProperties(n,{keyCode:{value:13},which:{value:13}}),t.dispatchEvent(n)})},p={goosemodHandlers:{onImport:function(){var e=u(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:l(s.mobileIcon);case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),onLoadingFinished:function(){var e=u(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:goosemodScope.settings.createItem("Send Button",["(v".concat(version,")"),{type:"toggle",text:"Mobile Icon",subtext:"Replaces the send button's icon with an icon similair to Discord's mobile app's send button.",onToggle:function(e){return l(e)},isToggled:function(){return s.mobileIcon}}]);case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),onRemove:function(){var e=u(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:goosemodScope.settings.removeItem("Send Button"),a();case 2:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),getSettings:function(){return[s]},loadSettings:function(t){var n=e(t,1)[0];l((s=n).mobileIcon)}}};exports.default=p;
},{}]},{},["index.js"], null);parcelRequire('index.js').default