!function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=10)}([function(e,t,r){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=function(e,t){var r=e[1]||"",n=e[3];if(!n)return r;if(t&&"function"==typeof btoa){var i=(s=n,a=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(l," */")),o=n.sources.map((function(e){return"/*# sourceURL=".concat(n.sourceRoot).concat(e," */")}));return[r].concat(o).concat([i]).join("\n")}var s,a,l;return[r].join("\n")}(t,e);return t[2]?"@media ".concat(t[2],"{").concat(r,"}"):r})).join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},i=0;i<this.length;i++){var o=this[i][0];null!=o&&(n[o]=!0)}for(var s=0;s<e.length;s++){var a=e[s];null!=a[0]&&n[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="(".concat(a[2],") and (").concat(r,")")),t.push(a))}},t}},function(e,t,r){"use strict";var n,i={},o=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},s=function(){var e={};return function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[t]=r}return e[t]}}();function a(e,t){for(var r=[],n={},i=0;i<e.length;i++){var o=e[i],s=t.base?o[0]+t.base:o[0],a={css:o[1],media:o[2],sourceMap:o[3]};n[s]?n[s].parts.push(a):r.push(n[s]={id:s,parts:[a]})}return r}function l(e,t){for(var r=0;r<e.length;r++){var n=e[r],o=i[n.id],s=0;if(o){for(o.refs++;s<o.parts.length;s++)o.parts[s](n.parts[s]);for(;s<n.parts.length;s++)o.parts.push(m(n.parts[s],t))}else{for(var a=[];s<n.parts.length;s++)a.push(m(n.parts[s],t));i[n.id]={id:n.id,refs:1,parts:a}}}}function c(e){var t=document.createElement("style");if(void 0===e.attributes.nonce){var n=r.nc;n&&(e.attributes.nonce=n)}if(Object.keys(e.attributes).forEach((function(r){t.setAttribute(r,e.attributes[r])})),"function"==typeof e.insert)e.insert(t);else{var i=s(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var p,d=(p=[],function(e,t){return p[e]=t,p.filter(Boolean).join("\n")});function u(e,t,r,n){var i=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=d(t,i);else{var o=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}function h(e,t,r){var n=r.css,i=r.media,o=r.sourceMap;if(i&&e.setAttribute("media",i),o&&btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var _=null,g=0;function m(e,t){var r,n,i;if(t.singleton){var o=g++;r=_||(_=c(t)),n=u.bind(null,r,o,!1),i=u.bind(null,r,o,!0)}else r=c(t),n=h.bind(null,r,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).attributes="object"==typeof t.attributes?t.attributes:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=o());var r=a(e,t);return l(r,t),function(e){for(var n=[],o=0;o<r.length;o++){var s=r[o],c=i[s.id];c&&(c.refs--,n.push(c))}e&&l(a(e,t),t);for(var p=0;p<n.length;p++){var d=n[p];if(0===d.refs){for(var u=0;u<d.parts.length;u++)d.parts[u]();delete i[d.id]}}}}},function(e,t){
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
!function(){"use strict";var e,t=!1,r=[],n=!1;function i(){window.WebComponents.ready=!0,document.dispatchEvent(new CustomEvent("WebComponentsReady",{bubbles:!0}))}function o(){window.customElements&&customElements.polyfillWrapFlushCallback&&customElements.polyfillWrapFlushCallback((function(t){e=t,n&&e()}))}function s(){window.HTMLTemplateElement&&HTMLTemplateElement.bootstrap&&HTMLTemplateElement.bootstrap(window.document),t=!0,a().then(i)}function a(){n=!1;var t=r.map((function(e){return e instanceof Function?e():e}));return r=[],Promise.all(t).then((function(){n=!0,e&&e()})).catch((function(e){console.error(e)}))}window.WebComponents=window.WebComponents||{},window.WebComponents.ready=window.WebComponents.ready||!1,window.WebComponents.waitFor=window.WebComponents.waitFor||function(e){e&&(r.push(e),t&&a())},window.WebComponents._batchCustomElements=o;var l="webcomponents-loader.js",c=[];(!("attachShadow"in Element.prototype)||!("getRootNode"in Element.prototype)||window.ShadyDOM&&window.ShadyDOM.force)&&c.push("sd"),window.customElements&&!window.customElements.forcePolyfill||c.push("ce");var p=function(){var e=document.createElement("template");if(!("content"in e))return!0;if(!(e.content.cloneNode()instanceof DocumentFragment))return!0;var t=document.createElement("template");t.content.appendChild(document.createElement("div")),e.content.appendChild(t);var r=e.cloneNode(!0);return 0===r.content.childNodes.length||0===r.content.firstChild.content.childNodes.length}();if(window.Promise&&Array.from&&window.URL&&window.Symbol&&!p||(c=["sd-ce-pf"]),c.length){var d,u="bundles/webcomponents-"+c.join("-")+".js";if(window.WebComponents.root)d=window.WebComponents.root+u;else{var h=document.querySelector('script[src*="'+l+'"]');d=h.src.replace(l,u)}var _=document.createElement("script");_.src=d,"loading"===document.readyState?(_.setAttribute("onload","window.WebComponents._batchCustomElements()"),document.write(_.outerHTML),document.addEventListener("DOMContentLoaded",s)):(_.addEventListener("load",(function(){o(),s()})),_.addEventListener("error",(function(){throw new Error("Could not load polyfill bundle"+d)})),document.head.appendChild(_))}else"complete"===document.readyState?(t=!0,i()):(window.addEventListener("load",s),window.addEventListener("DOMContentLoaded",(function(){window.removeEventListener("load",s),s()})))}()},function(e,t,r){e.exports=r.p+"eb5c8c08d7563671b75abdd4782079cb.png"},function(e,t,r){var n=r(5);"string"==typeof n&&(n=[[e.i,n,""]]);var i={insert:"head",singleton:!1};r(1)(n,i);n.locals&&(e.exports=n.locals)},function(e,t,r){(t=e.exports=r(0)(!1)).push([e.i,"@import url(https://images.godsunchained.com/fonts/css/card-fonts.css);",""]),t.push([e.i,"",""])},function(e,t,r){e.exports=r.p+"c2848aacde2d388cba47a89a95be606b.svg"},function(e,t,r){e.exports=r.p+"eddc5abb8686fffbc9f9fa841727baff.svg"},function(e,t,r){var n=r(9);"string"==typeof n&&(n=[[e.i,n,""]]);var i={insert:"head",singleton:!1};r(1)(n,i);n.locals&&(e.exports=n.locals)},function(e,t,r){(e.exports=r(0)(!1)).push([e.i,"*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n}\n\n.githubButtonContainer {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  z-index: 2;\n}\n\n.tempRenderHolder {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  opacity: 0;\n}\n\n.tempRenderHolder canvas {\n  position: absolute;\n  top: 0;\n  left: 0;\n  user-select: none;\n  pointer-events: none;\n}\n\n.compositedCardDomRender {\n  display: flex;\n  position: relative;\n  font-family: 'Unchained', serif;\n  line-height: 1.1;\n  user-select: none;\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 1000px;\n  height: 1400px;\n}\n",""])},function(e,t,r){"use strict";r.r(t);r(2);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const n="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,i=(e,t,r=null)=>{for(;t!==r;){const r=t.nextSibling;e.removeChild(t),t=r}},o=`{{lit-${String(Math.random()).slice(2)}}}`,s=`\x3c!--${o}--\x3e`,a=new RegExp(`${o}|${s}`);class l{constructor(e,t){this.parts=[],this.element=t;const r=[],n=[],i=document.createTreeWalker(t.content,133,null,!1);let s=0,l=-1,p=0;const{strings:h,values:{length:_}}=e;for(;p<_;){const e=i.nextNode();if(null!==e){if(l++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:r}=t;let n=0;for(let e=0;e<r;e++)c(t[e].name,"$lit$")&&n++;for(;n-- >0;){const t=h[p],r=u.exec(t)[2],n=r.toLowerCase()+"$lit$",i=e.getAttribute(n);e.removeAttribute(n);const o=i.split(a);this.parts.push({type:"attribute",index:l,name:r,strings:o}),p+=o.length-1}}"TEMPLATE"===e.tagName&&(n.push(e),i.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(o)>=0){const n=e.parentNode,i=t.split(a),o=i.length-1;for(let t=0;t<o;t++){let r,o=i[t];if(""===o)r=d();else{const e=u.exec(o);null!==e&&c(e[2],"$lit$")&&(o=o.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),r=document.createTextNode(o)}n.insertBefore(r,e),this.parts.push({type:"node",index:++l})}""===i[o]?(n.insertBefore(d(),e),r.push(e)):e.data=i[o],p+=o}}else if(8===e.nodeType)if(e.data===o){const t=e.parentNode;null!==e.previousSibling&&l!==s||(l++,t.insertBefore(d(),e)),s=l,this.parts.push({type:"node",index:l}),null===e.nextSibling?e.data="":(r.push(e),l--),p++}else{let t=-1;for(;-1!==(t=e.data.indexOf(o,t+1));)this.parts.push({type:"node",index:-1}),p++}}else i.currentNode=n.pop()}for(const e of r)e.parentNode.removeChild(e)}}const c=(e,t)=>{const r=e.length-t.length;return r>=0&&e.slice(r)===t},p=e=>-1!==e.index,d=()=>document.createComment(""),u=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function h(e,t){const{element:{content:r},parts:n}=e,i=document.createTreeWalker(r,133,null,!1);let o=g(n),s=n[o],a=-1,l=0;const c=[];let p=null;for(;i.nextNode();){a++;const e=i.currentNode;for(e.previousSibling===p&&(p=null),t.has(e)&&(c.push(e),null===p&&(p=e)),null!==p&&l++;void 0!==s&&s.index===a;)s.index=null!==p?-1:s.index-l,o=g(n,o),s=n[o]}c.forEach(e=>e.parentNode.removeChild(e))}const _=e=>{let t=11===e.nodeType?0:1;const r=document.createTreeWalker(e,133,null,!1);for(;r.nextNode();)t++;return t},g=(e,t=-1)=>{for(let r=t+1;r<e.length;r++){const t=e[r];if(p(t))return r}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const m=new WeakMap,f=e=>(...t)=>{const r=e(...t);return m.set(r,!0),r},y=e=>"function"==typeof e&&m.has(e),$={},b={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class w{constructor(e,t,r){this.__parts=[],this.template=e,this.processor=t,this.options=r}update(e){let t=0;for(const r of this.__parts)void 0!==r&&r.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=n?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],r=this.template.parts,i=document.createTreeWalker(e,133,null,!1);let o,s=0,a=0,l=i.nextNode();for(;s<r.length;)if(o=r[s],p(o)){for(;a<o.index;)a++,"TEMPLATE"===l.nodeName&&(t.push(l),i.currentNode=l.content),null===(l=i.nextNode())&&(i.currentNode=t.pop(),l=i.nextNode());if("node"===o.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(l.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,o.name,o.strings,this.options));s++}else this.__parts.push(void 0),s++;return n&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const v=` ${o} `;class x{constructor(e,t,r,n){this.strings=e,this.values=t,this.type=r,this.processor=n}getHTML(){const e=this.strings.length-1;let t="",r=!1;for(let n=0;n<e;n++){const e=this.strings[n],i=e.lastIndexOf("\x3c!--");r=(i>-1||r)&&-1===e.indexOf("--\x3e",i+1);const a=u.exec(e);t+=null===a?e+(r?v:s):e.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+o}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const S=e=>null===e||!("object"==typeof e||"function"==typeof e),C=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class k{constructor(e,t,r){this.dirty=!0,this.element=e,this.name=t,this.strings=r,this.parts=[];for(let e=0;e<r.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new P(this)}_getValue(){const e=this.strings,t=e.length-1;let r="";for(let n=0;n<t;n++){r+=e[n];const t=this.parts[n];if(void 0!==t){const e=t.value;if(S(e)||!C(e))r+="string"==typeof e?e:String(e);else for(const t of e)r+="string"==typeof t?t:String(t)}}return r+=e[t],r}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class P{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===$||S(e)&&e===this.value||(this.value=e,y(e)||(this.committer.dirty=!0))}commit(){for(;y(this.value);){const e=this.value;this.value=$,e(this)}this.value!==$&&this.committer.commit()}}class E{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(d()),this.endNode=e.appendChild(d())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=d()),e.__insert(this.endNode=d())}insertAfterPart(e){e.__insert(this.startNode=d()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;y(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=$,e(this)}const e=this.__pendingValue;e!==$&&(S(e)?e!==this.value&&this.__commitText(e):e instanceof x?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):C(e)?this.__commitIterable(e):e===b?(this.value=b,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,r="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=r:this.__commitNode(document.createTextNode(r)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof w&&this.value.template===t)this.value.update(e.values);else{const r=new w(t,e.processor,this.options),n=r._clone();r.update(e.values),this.__commitNode(n),this.value=r}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let r,n=0;for(const i of e)r=t[n],void 0===r&&(r=new E(this.options),t.push(r),0===n?r.appendIntoPart(this):r.insertAfterPart(t[n-1])),r.setValue(i),r.commit(),n++;n<t.length&&(t.length=n,this.clear(r&&r.endNode))}clear(e=this.startNode){i(this.startNode.parentNode,e.nextSibling,this.endNode)}}class T{constructor(e,t,r){if(this.value=void 0,this.__pendingValue=void 0,2!==r.length||""!==r[0]||""!==r[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=r}setValue(e){this.__pendingValue=e}commit(){for(;y(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=$,e(this)}if(this.__pendingValue===$)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=$}}class z extends k{constructor(e,t,r){super(e,t,r),this.single=2===r.length&&""===r[0]&&""===r[1]}_createPart(){return new N(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class N extends P{}let O=!1;(()=>{try{const e={get capture(){return O=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class q{constructor(e,t,r){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=r,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;y(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=$,e(this)}if(this.__pendingValue===$)return;const e=this.__pendingValue,t=this.value,r=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),n=null!=e&&(null==t||r);r&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=R(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=$}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const R=e=>e&&(O?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function L(e){let t=A.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},A.set(e.type,t));let r=t.stringsArray.get(e.strings);if(void 0!==r)return r;const n=e.strings.join(o);return r=t.keyString.get(n),void 0===r&&(r=new l(e,e.getTemplateElement()),t.keyString.set(n,r)),t.stringsArray.set(e.strings,r),r}const A=new Map,M=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const I=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(e,t,r,n){const i=t[0];if("."===i){return new z(e,t.slice(1),r).parts}if("@"===i)return[new q(e,t.slice(1),n.eventContext)];if("?"===i)return[new T(e,t.slice(1),r)];return new k(e,t,r).parts}handleTextExpression(e){return new E(e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const j=(e,...t)=>new x(e,t,"html",I),V=(e,t)=>`${e}--${t}`;let B=!0;void 0===window.ShadyCSS?B=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),B=!1);const D=e=>t=>{const r=V(t.type,e);let n=A.get(r);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},A.set(r,n));let i=n.stringsArray.get(t.strings);if(void 0!==i)return i;const s=t.strings.join(o);if(i=n.keyString.get(s),void 0===i){const r=t.getTemplateElement();B&&window.ShadyCSS.prepareTemplateDom(r,e),i=new l(t,r),n.keyString.set(s,i)}return n.stringsArray.set(t.strings,i),i},U=["html","svg"],W=new Set,H=(e,t,r)=>{W.add(e);const n=r?r.element:document.createElement("template"),i=t.querySelectorAll("style"),{length:o}=i;if(0===o)return void window.ShadyCSS.prepareTemplateStyles(n,e);const s=document.createElement("style");for(let e=0;e<o;e++){const t=i[e];t.parentNode.removeChild(t),s.textContent+=t.textContent}(e=>{U.forEach(t=>{const r=A.get(V(t,e));void 0!==r&&r.keyString.forEach(e=>{const{element:{content:t}}=e,r=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{r.add(e)}),h(e,r)})})})(e);const a=n.content;r?function(e,t,r=null){const{element:{content:n},parts:i}=e;if(null==r)return void n.appendChild(t);const o=document.createTreeWalker(n,133,null,!1);let s=g(i),a=0,l=-1;for(;o.nextNode();){l++;for(o.currentNode===r&&(a=_(t),r.parentNode.insertBefore(t,r));-1!==s&&i[s].index===l;){if(a>0){for(;-1!==s;)i[s].index+=a,s=g(i,s);return}s=g(i,s)}}}(r,s,a.firstChild):a.insertBefore(s,a.firstChild),window.ShadyCSS.prepareTemplateStyles(n,e);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)t.insertBefore(l.cloneNode(!0),t.firstChild);else if(r){a.insertBefore(s,a.firstChild);const e=new Set;e.add(s),h(r,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const F={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},Q=(e,t)=>t!==e&&(t==t||e==e),J={attribute:!0,type:String,converter:F,reflect:!1,hasChanged:Q};class X extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,r)=>{const n=this._attributeNameForProperty(r,t);void 0!==n&&(this._attributeToPropertyMap.set(n,r),e.push(n))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=J){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const r="symbol"==typeof e?Symbol():"__"+e,n=this.getPropertyDescriptor(e,r,t);void 0!==n&&Object.defineProperty(this.prototype,e,n)}static getPropertyDescriptor(e,t,r){return{get(){return this[t]},set(r){const n=this[e];this[t]=r,this._requestUpdate(e,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||J}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const r of t)this.createProperty(r,e[r])}}static _attributeNameForProperty(e,t){const r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,r=Q){return r(e,t)}static _propertyValueFromAttribute(e,t){const r=t.type,n=t.converter||F,i="function"==typeof n?n:n.fromAttribute;return i?i(e,r):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const r=t.type,n=t.converter;return(n&&n.toAttribute||F.toAttribute)(e,r)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,r){t!==r&&this._attributeToProperty(e,r)}_propertyToAttribute(e,t,r=J){const n=this.constructor,i=n._attributeNameForProperty(e,r);if(void 0!==i){const e=n._propertyValueToAttribute(t,r);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(i):this.setAttribute(i,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const r=this.constructor,n=r._attributeToPropertyMap.get(e);if(void 0!==n){const e=r.getPropertyOptions(n);this._updateState=16|this._updateState,this[n]=r._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}_requestUpdate(e,t){let r=!0;if(void 0!==e){const n=this.constructor,i=n.getPropertyOptions(e);n._valueHasChanged(this[e],t,i.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==i.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,i))):r=!1}!this._hasRequestedUpdate&&r&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}X.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const G=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:r,elements:n}=t;return{kind:r,elements:n,finisher(t){window.customElements.define(e,t)}}})(e,t),Y=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?Object.assign(Object.assign({},t),{finisher(r){r.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}};function K(e){return(t,r)=>void 0!==r?((e,t,r)=>{t.constructor.createProperty(r,e)})(e,t,r):Y(e,t)}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const Z="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ee=Symbol();class te{constructor(e,t){if(t!==ee)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(Z?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const re=(e,...t)=>{const r=t.reduce((t,r,n)=>t+(e=>{if(e instanceof te)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(r)+e[n+1],e[0]);return new te(r,ee)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const ne={};class ie extends X{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(void 0===e)this._styles=[];else if(Array.isArray(e)){const t=(e,r)=>e.reduceRight((e,r)=>Array.isArray(r)?t(r,e):(e.add(r),e),r),r=t(e,new Set),n=[];r.forEach(e=>n.unshift(e)),this._styles=n}else this._styles=[e]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Z?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==ne&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){return ne}}ie.finalized=!0,ie.render=(e,t,r)=>{if(!r||"object"!=typeof r||!r.scopeName)throw new Error("The `scopeName` option is required.");const n=r.scopeName,o=M.has(t),s=B&&11===t.nodeType&&!!t.host,a=s&&!W.has(n),l=a?document.createDocumentFragment():t;if(((e,t,r)=>{let n=M.get(t);void 0===n&&(i(t,t.firstChild),M.set(t,n=new E(Object.assign({templateFactory:L},r))),n.appendInto(t)),n.setValue(e),n.commit()})(e,l,Object.assign({templateFactory:D(n)},r)),a){const e=M.get(l);M.delete(l);const r=e.value instanceof w?e.value.template:void 0;H(n,l,r),i(t,t.firstChild),t.appendChild(l),M.set(t,e)}!o&&s&&window.ShadyCSS.styleElement(t.host)};var oe,se=[],ae="ResizeObserver loop completed with undelivered notifications.";!function(e){e.BORDER_BOX="border-box",e.CONTENT_BOX="content-box",e.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"}(oe||(oe={}));var le,ce=function(){function e(e,t,r,n){return this.x=e,this.y=t,this.width=r,this.height=n,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,Object.freeze(this)}return e.prototype.toJSON=function(){var e=this;return{x:e.x,y:e.y,top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.width,height:e.height}},e.fromRect=function(t){return new e(t.x,t.y,t.width,t.height)},e}(),pe=function(e){return e instanceof SVGElement&&"getBBox"in e},de=function(e){if(pe(e)){var t=e.getBBox(),r=t.width,n=t.height;return!r&&!n}var i=e,o=i.offsetWidth,s=i.offsetHeight;return!(o||s||e.getClientRects().length)},ue=function(e){var t,r,n=null===(r=null===(t=e)||void 0===t?void 0:t.ownerDocument)||void 0===r?void 0:r.defaultView;return!!(n&&e instanceof n.Element)},he="undefined"!=typeof window?window:{},_e=new WeakMap,ge=/auto|scroll/,me=/^tb|vertical/,fe=/msie|trident/i.test(he.navigator&&he.navigator.userAgent),ye=function(e){return parseFloat(e||"0")},$e=function(e,t,r){return void 0===e&&(e=0),void 0===t&&(t=0),void 0===r&&(r=!1),Object.freeze({inlineSize:(r?t:e)||0,blockSize:(r?e:t)||0})},be=Object.freeze({devicePixelContentBoxSize:$e(),borderBoxSize:$e(),contentBoxSize:$e(),contentRect:new ce(0,0,0,0)}),we=function(e,t){if(void 0===t&&(t=!1),_e.has(e)&&!t)return _e.get(e);if(de(e))return _e.set(e,be),be;var r=getComputedStyle(e),n=pe(e)&&e.ownerSVGElement&&e.getBBox(),i=!fe&&"border-box"===r.boxSizing,o=me.test(r.writingMode||""),s=!n&&ge.test(r.overflowY||""),a=!n&&ge.test(r.overflowX||""),l=n?0:ye(r.paddingTop),c=n?0:ye(r.paddingRight),p=n?0:ye(r.paddingBottom),d=n?0:ye(r.paddingLeft),u=n?0:ye(r.borderTopWidth),h=n?0:ye(r.borderRightWidth),_=n?0:ye(r.borderBottomWidth),g=d+c,m=l+p,f=(n?0:ye(r.borderLeftWidth))+h,y=u+_,$=a?e.offsetHeight-y-e.clientHeight:0,b=s?e.offsetWidth-f-e.clientWidth:0,w=i?g+f:0,v=i?m+y:0,x=n?n.width:ye(r.width)-w-b,S=n?n.height:ye(r.height)-v-$,C=x+g+b+f,k=S+m+$+y,P=Object.freeze({devicePixelContentBoxSize:$e(Math.round(x*devicePixelRatio),Math.round(S*devicePixelRatio),o),borderBoxSize:$e(C,k,o),contentBoxSize:$e(x,S,o),contentRect:new ce(d,l,x,S)});return _e.set(e,P),P},ve=function(e,t,r){var n=we(e,r),i=n.borderBoxSize,o=n.contentBoxSize,s=n.devicePixelContentBoxSize;switch(t){case oe.DEVICE_PIXEL_CONTENT_BOX:return s;case oe.BORDER_BOX:return i;default:return o}},xe=function(e){var t=we(e);this.target=e,this.contentRect=t.contentRect,this.borderBoxSize=[t.borderBoxSize],this.contentBoxSize=[t.contentBoxSize],this.devicePixelContentBoxSize=[t.devicePixelContentBoxSize]},Se=function(e){if(de(e))return 1/0;for(var t=0,r=e.parentNode;r;)t+=1,r=r.parentNode;return t},Ce=function(){var e=1/0,t=[];se.forEach((function(r){if(0!==r.activeTargets.length){var n=[];r.activeTargets.forEach((function(t){var r=new xe(t.target),i=Se(t.target);n.push(r),t.lastReportedSize=ve(t.target,t.observedBox),i<e&&(e=i)})),t.push((function(){r.callback.call(r.observer,n,r.observer)})),r.activeTargets.splice(0,r.activeTargets.length)}}));for(var r=0,n=t;r<n.length;r++){(0,n[r])()}return e},ke=function(e){se.forEach((function(t){t.activeTargets.splice(0,t.activeTargets.length),t.skippedTargets.splice(0,t.skippedTargets.length),t.observationTargets.forEach((function(r){r.isActive()&&(Se(r.target)>e?t.activeTargets.push(r):t.skippedTargets.push(r))}))}))},Pe=function(){var e,t=0;for(ke(t);se.some((function(e){return e.activeTargets.length>0}));)t=Ce(),ke(t);return se.some((function(e){return e.skippedTargets.length>0}))&&("function"==typeof ErrorEvent?e=new ErrorEvent("error",{message:ae}):((e=document.createEvent("Event")).initEvent("error",!1,!1),e.message=ae),window.dispatchEvent(e)),t>0},Ee=[],Te=function(e){if(!le){var t=0,r=document.createTextNode("");new MutationObserver((function(){return Ee.splice(0).forEach((function(e){return e()}))})).observe(r,{characterData:!0}),le=function(){r.textContent=""+(t?t--:t++)}}Ee.push(e),le()},ze=0,Ne={attributes:!0,characterData:!0,childList:!0,subtree:!0},Oe=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],qe=function(e){return void 0===e&&(e=0),Date.now()+e},Re=!1,Le=new(function(){function e(){var e=this;this.stopped=!0,this.listener=function(){return e.schedule()}}return e.prototype.run=function(e){var t=this;if(void 0===e&&(e=250),!Re){Re=!0;var r,n=qe(e);r=function(){var r=!1;try{r=Pe()}finally{if(Re=!1,e=n-qe(),!ze)return;r?t.run(1e3):e>0?t.run(e):t.start()}},Te((function(){requestAnimationFrame(r)}))}},e.prototype.schedule=function(){this.stop(),this.run()},e.prototype.observe=function(){var e=this,t=function(){return e.observer&&e.observer.observe(document.body,Ne)};document.body?t():he.addEventListener("DOMContentLoaded",t)},e.prototype.start=function(){var e=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),Oe.forEach((function(t){return he.addEventListener(t,e.listener,!0)})))},e.prototype.stop=function(){var e=this;this.stopped||(this.observer&&this.observer.disconnect(),Oe.forEach((function(t){return he.removeEventListener(t,e.listener,!0)})),this.stopped=!0)},e}()),Ae=function(e){!ze&&e>0&&Le.start(),!(ze+=e)&&Le.stop()},Me=function(){function e(e,t){this.target=e,this.observedBox=t||oe.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return e.prototype.isActive=function(){var e,t=ve(this.target,this.observedBox,!0);return e=this.target,pe(e)||function(e){switch(e.tagName){case"INPUT":if("image"!==e.type)break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1}(e)||"inline"!==getComputedStyle(e).display||(this.lastReportedSize=t),this.lastReportedSize.inlineSize!==t.inlineSize||this.lastReportedSize.blockSize!==t.blockSize},e}(),Ie=function(e,t){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=e,this.callback=t},je=new WeakMap,Ve=function(e,t){for(var r=0;r<e.length;r+=1)if(e[r].target===t)return r;return-1},Be=function(){function e(){}return e.connect=function(e,t){var r=new Ie(e,t);je.set(e,r)},e.observe=function(e,t,r){var n=je.get(e),i=0===n.observationTargets.length;Ve(n.observationTargets,t)<0&&(i&&se.push(n),n.observationTargets.push(new Me(t,r&&r.box)),Ae(1),Le.schedule())},e.unobserve=function(e,t){var r=je.get(e),n=Ve(r.observationTargets,t),i=1===r.observationTargets.length;n>=0&&(i&&se.splice(se.indexOf(r),1),r.observationTargets.splice(n,1),Ae(-1))},e.disconnect=function(e){var t=this,r=je.get(e);r.observationTargets.slice().forEach((function(r){return t.unobserve(e,r.target)})),r.activeTargets.splice(0,r.activeTargets.length)},e}(),De=function(){function e(e){if(0===arguments.length)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if("function"!=typeof e)throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");Be.connect(this,e)}return e.prototype.observe=function(e,t){if(0===arguments.length)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!ue(e))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");Be.observe(this,e,t)},e.prototype.unobserve=function(e){if(0===arguments.length)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!ue(e))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");Be.unobserve(this,e)},e.prototype.disconnect=function(){Be.disconnect(this)},e.toString=function(){return"function ResizeObserver () { [polyfill code] }"},e}();
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const Ue=new WeakMap,We=f(e=>t=>{if(!(t instanceof P)||t instanceof N||"style"!==t.committer.name||t.committer.parts.length>1)throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");const{committer:r}=t,{style:n}=r.element;let i=Ue.get(t);void 0===i&&(n.cssText=r.strings.join(" "),Ue.set(t,i=new Set)),i.forEach(t=>{t in e||(i.delete(t),-1===t.indexOf("-")?n[t]=null:n.removeProperty(t))});for(const t in e)i.add(t),-1===t.indexOf("-")?n[t]=e[t]:n.setProperty(t,e[t])});customElements.define("card-icon",class extends ie{constructor(){super(...arguments),this.iconLigature="",this.fillGradientTarget="top"}static get properties(){return{iconLigature:{type:String},fillColor:{type:String},fillGradient:{type:String},fillGradientTarget:{type:String}}}static get styles(){return re`
      :host {
        display: inline-flex;
      }

      .icon {
        margin: auto;
        font-family: 'cardi-cons';
        font-feature-settings: 'liga' 1;
        speak: none;
        font-style: normal;
        font-weight: normal;
        font-variant: normal;
        text-transform: none;
        vertical-align: middle;
        letter-spacing: 0;
        line-height: 1;

        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
    `}render(){return j`
      <i class="icon">${this.iconLigature}</i>
    `}});
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const He=new WeakMap,Fe=f(e=>t=>{if(!(t instanceof E))throw new Error("unsafeHTML can only be used in text bindings");const r=He.get(t);if(void 0!==r&&S(e)&&e===r.value&&t.value===r.fragment)return;const n=document.createElement("template");n.innerHTML=e;const i=document.importNode(n.content,!0);t.setValue(i),He.set(t,{value:e,fragment:i})}),Qe=re`
  font-family: 'Unchained', serif;
  line-height: 1.1;
`,Je=re`
  font-family: 'Open Sans', sans-serif;
`,Xe=re`white`,Ge=(re`black`,re`rgb(51, 51, 51)`),Ye=re`#f9f9f9`,Ke=(re`#f1f1f1`,re`
  ${Qe}
  font-weight: 700;
  line-height: 0.8;
  text-align: center;
  color: ${Xe};
`),Ze=()=>re`
  :host {
    display: flex;
  }

  .card__innerRatioConstrainer {
    margin: auto;
    display: flex;
    position: relative;
    padding-bottom: 140%;
    /* @NOTE: 140% === 717 / 512 = 1.400 * 100
        the aspect of these cards is locked to 1:1.40 */
    width: 100%;
  }

  img {
    display: block;
    width: 100%;
  }

  .card__loading {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
  }

  .card__loading::before {
    content: '';
    background: ${Ye};
    width: 60%;
    padding-bottom: 60%;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .card__loading__img {
    margin: auto;
    width: 55%;
    max-width: 120px;
    min-width: 50px;
    position: relative;
  }

  .card__artwork {
    position: absolute;
    width: 64%;
    padding-bottom: 64%;
    right: 15%;
    top: 12%;
    background: ${Ge};
  }

  .card__artwork__img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .card__baseLayer,
  .card__manaLayer,
  .card__rarityLayer,
  .card__wreathLayer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .card__baseLayer__img,
  .card__manaLayer__img,
  .card__wreathLayer__img,
  .card__rarityLayer__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: translate(4.3%, 0.2%);
  }

  .card__lockIconLayer {
    position: absolute;
    left: 54%;
    top: 2%;
    width: 18%;
    transform: translate(-50%, 15%);
  }

  .card__tribeBarLayer {
    position: absolute;
    bottom: 1%;
    left: 29.5%;
    width: 48.5%;
  }

  /* Text layers */

  .card__manaText {
    ${Ke}
    position: absolute;
  }

  .card__nameText {
    position: absolute;
    white-space: nowrap;
    display: flex;
    ${Ke}
  }

  .card__nameText__inner {
    margin: auto;
  }

  .card__attackText {
    position: absolute;
    ${Ke}
  }

  .card__healthText {
    position: absolute;
    ${Ke}
  }

  .card__tribeText {
    position: absolute;
    text-transform: capitalize;
    display: flex;
    ${Ke}
  }

  .card__tribeText__inner {
    margin: auto;
  }

  .card__setIcon {
    position: absolute;
    color: white;
  }
`;var et=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let tt=class extends ie{static get styles(){return re`
      :host {
        position: absolute;
        text-align: center;
        color: black;
        display: flex;
      }

      .centered {
        margin: auto;
        ${Je}
      }
    `}updated(e){}render(){const{text:e,ch:t,cw:r,tribe:n,type:i}=this,o=e.replace(/ ([^ ]*)$/,"&nbsp;$1"),s=e.split("").length;let a=3.8*t,l=1.25,c="normal";s>=150?(a=2.8*t,l=1.1,c="extraSquishy"):s>=90&&(a=3.4*t,l=1.1,c="squishy");return j`
      <style>
        :host {
          font-size: ${a}px;
          line-height: ${l};
          left: ${21*r}px;
          right: ${13*r}px;
          ${n?`\n          height: ${22.2*t}px;\n          bottom: ${8.6*t}px;\n        `:`\n          height: ${23.5*t}px;\n          bottom: ${6.8*t}px;\n        `}
        }
      </style>
      <div class="centered" data-text-mode=${c}>
        ${Fe(o)}
      </div>
    `}};et([K({type:String})],tt.prototype,"text",void 0),et([K({type:String})],tt.prototype,"tribe",void 0),et([K({type:String})],tt.prototype,"type",void 0),et([K({type:Number})],tt.prototype,"ch",void 0),et([K({type:Number})],tt.prototype,"cw",void 0),tt=et([G("autofit-description-text")],tt);const rt=250,nt=375,it=500,ot=720,st=1024,at=1280,lt=1440,ct=1920,pt=256,dt=512,ut=720,ht=1024,_t=1280,gt=1440,mt=1920,ft=256,yt=512;function $t(e){return"god power"===e?"power":e}const bt="https://images.godsunchained.com";r(4);var wt=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},vt=function(e,t,r,n){return new(r||(r=Promise))((function(i,o){function s(e){try{l(n.next(e))}catch(e){o(e)}}function a(e){try{l(n.throw(e))}catch(e){o(e)}}function l(e){e.done?i(e.value):new r((function(t){t(e.value)})).then(s,a)}l((n=n.apply(e,t||[])).next())}))};const xt=["plain","plain","bronze","iron","meteorite","shadow","gold","diamond"],St=["diamond","gold","shadow","meteorite","plain"],Ct=new De(e=>{e.forEach(e=>{e.target.handleResize(e)})});let kt=class extends ie{constructor(){super(),this.quality=5,this.useLegacyQualityMapping=!1,this.protoCardData={type:"",effect:"",name:"",rarity:"",god:"",set:"",mana:"",id:"",attack:null,health:null,tribe:"",art_id:""},this.loading=!0,this.quality=0,this.ch=.01*this.offsetHeight,this.cw=.01*this.offsetWidth}static get styles(){return Ze()}connectedCallback(){super.connectedCallback(),Ct.observe(this)}disconnectedCallback(){super.disconnectedCallback(),Ct.unobserve(this)}updated(e){e.forEach((e,t)=>{"protoId"===t?this.getProtoDataFromApi():"inputProtoData"===t&&this.getProtoDataFromInput()})}handleResize(e){const t=e.target.shadowRoot.children[0];this.ch=.01*t.offsetHeight,this.cw=.01*t.offsetWidth,this.requestUpdate()}fetchProtoData(){return vt(this,void 0,void 0,(function*(){return this.loading=!0,fetch("https://api.godsunchained.com/v0/proto/"+this.protoId).then(e=>e.json())}))}getProtoDataFromApi(){return vt(this,void 0,void 0,(function*(){return this.fetchProtoData().then(e=>{const{id:t,type:r,attack:n,health:i,effect:o,name:s,rarity:a,god:l,mana:c,set:p,tribe:d,art_id:u}=e;return this.protoCardData={id:t,type:r,attack:n.Int64,health:i.Int64,effect:o,name:s,rarity:a,god:l,mana:c,set:p,tribe:d.String,art_id:u},this.loading=!1,this.requestUpdate(),e})}))}getProtoDataFromInput(){this.protoCardData=Object.assign({},this.inputProtoData),this.loading=!1,this.requestUpdate()}render(){const e=this.useLegacyQualityMapping?xt[this.quality]:St[this.quality-1],t="mythic"===this.protoCardData.rarity;return j`
      <div class="card__innerRatioConstrainer">
        ${this.loading?j`
  <div class="card__loading">
    <img
      class="card__loading__img"
      src="${r(3)}"
      alt="immutable loading spinner"
    />
  </div>
`:j`
              ${(({id:e,responsiveSrcsetSizes:t=nt+"px"})=>j`
    <picture class="card__artwork">
      <source
        srcset="
          ${bt}/art2/${nt}/${e}.webp ${rt}w,
          ${bt}/art2/${it}/${e}.webp ${nt}w,
          ${bt}/art2/${ot}/${e}.webp ${it}w,
          ${bt}/art2/${st}/${e}.webp ${ot}w,
          ${bt}/art2/${at}/${e}.webp ${st}w,
          ${bt}/art2/${lt}/${e}.webp ${at}w,
          ${bt}/art2/${ct}/${e}.webp ${lt}w
        "
        sizes="${t}"
        type="image/webp"
      />
      <source
        srcset="
          ${bt}/art2/${nt}/${e}.jpg ${rt}w,
          ${bt}/art2/${it}/${e}.jpg ${nt}w,
          ${bt}/art2/${ot}/${e}.jpg ${it}w,
          ${bt}/art2/${st}/${e}.jpg ${ot}w,
          ${bt}/art2/${at}/${e}.jpg ${st}w,
          ${bt}/art2/${lt}/${e}.jpg ${at}w,
          ${bt}/art2/${ct}/${e}.jpg ${lt}w
        "
        sizes="${t}"
        type="image/jpg"
      />
      <img
        srcset="${bt}/art2/${rt}/${e}.jpg"
        class="card__artwork__img"
      />
    </picture>
  `)({id:this.protoCardData.id,responsiveSrcsetSizes:this.responsiveSrcsetSizes})}
              ${t?(({responsiveSrcsetSizes:e=dt+"px",art_id:t,type:r,god:n})=>j`
    <picture class="card__baseLayer">
      <source
        srcset="
          ${bt}/border-layers/types/${r}/${dt}/${r}_${t}.webp ${pt}w,
          ${bt}/border-layers/types/${r}/${ut}/${r}_${t}.webp ${dt}w,
          ${bt}/border-layers/types/${r}/${ht}/${r}_${t}.webp ${ut}w,
          ${bt}/border-layers/types/${r}/${_t}/${r}_${t}.webp ${ht}w,
          ${bt}/border-layers/types/${r}/${gt}/${r}_${t}.webp ${_t}w,
          ${bt}/border-layers/types/${r}/${mt}/${r}_${t}.webp ${gt}w
        "
        sizes="${e}"
        type="image/webp"
      />
      <source
        srcset="
          ${bt}/border-layers/types/${r}/${dt}/${r}_${t}.png ${pt}w,
          ${bt}/border-layers/types/${r}/${ut}/${r}_${t}.png ${dt}w,
          ${bt}/border-layers/types/${r}/${ht}/${r}_${t}.png ${ut}w,
          ${bt}/border-layers/types/${r}/${_t}/${r}_${t}.png ${ht}w,
          ${bt}/border-layers/types/${r}/${gt}/${r}_${t}.png ${_t}w,
          ${bt}/border-layers/types/${r}/${mt}/${r}_${t}.png ${gt}w
        "
        sizes="${e}"
        type="image/png"
      />

      <img
        srcset="
          ${bt}/border-layers/types/${r}/${pt}/${r}_${t}.png
        "
        class="card__baseLayer__img"
      />
    </picture>

    <picture class="card__manaLayer">
      <source
        srcset="
          ${bt}/border-layers/rosettes/mythics/${dt}/mythic_${t}.webp ${pt}w,
          ${bt}/border-layers/rosettes/mythics/${ut}/mythic_${t}.webp ${dt}w,
          ${bt}/border-layers/rosettes/mythics/${ht}/mythic_${t}.webp ${ut}w,
          ${bt}/border-layers/rosettes/mythics/${_t}/mythic_${t}.webp ${ht}w,
          ${bt}/border-layers/rosettes/mythics/${gt}/mythic_${t}.webp ${_t}w,
          ${bt}/border-layers/rosettes/mythics/${mt}/mythic_${t}.webp ${gt}w
        "
        sizes="${e}"
        type="image/webp"
      />
      <source
        srcset="
          ${bt}/border-layers/rosettes/mythics/${dt}/mythic_${t}.png ${pt}w,
          ${bt}/border-layers/rosettes/mythics/${ut}/mythic_${t}.png ${dt}w,
          ${bt}/border-layers/rosettes/mythics/${ht}/mythic_${t}.png ${ut}w,
          ${bt}/border-layers/rosettes/mythics/${_t}/mythic_${t}.png ${ht}w,
          ${bt}/border-layers/rosettes/mythics/${gt}/mythic_${t}.png ${_t}w,
          ${bt}/border-layers/rosettes/mythics/${mt}/mythic_${t}.png ${gt}w
        "
        sizes="${e}"
        type="image/png"
      />

      <img
        srcset="
          ${bt}/border-layers/rosettes/${n}/${dt}/mythic_${t}.png
        "
        class="card__manaLayer__img card__manaLayer__img--mythic"
      />
    </picture>
  `)(Object.assign({responsiveSrcsetSizes:this.responsiveSrcsetSizes},this.protoCardData)):(({responsiveSrcsetSizes:e=dt+"px",type:t,qualityName:r,rarity:n,god:i,set:o,tribe:s})=>(t=$t(t),j`
    <picture class="card__baseLayer">
      <source
        srcset="
          ${bt}/border-layers/types/${t}/${dt}/${t}_${r}.webp ${pt}w,
          ${bt}/border-layers/types/${t}/${ut}/${t}_${r}.webp ${dt}w,
          ${bt}/border-layers/types/${t}/${ht}/${t}_${r}.webp ${ut}w,
          ${bt}/border-layers/types/${t}/${_t}/${t}_${r}.webp ${ht}w,
          ${bt}/border-layers/types/${t}/${gt}/${t}_${r}.webp ${_t}w,
          ${bt}/border-layers/types/${t}/${mt}/${t}_${r}.webp ${gt}w
        "
        sizes="${e}"
        type="image/webp"
      />

      <source
        srcset="
          ${bt}/border-layers/types/${t}/${dt}/${t}_${r}.png ${pt}w,
          ${bt}/border-layers/types/${t}/${ut}/${t}_${r}.png ${dt}w,
          ${bt}/border-layers/types/${t}/${ht}/${t}_${r}.png ${ut}w,
          ${bt}/border-layers/types/${t}/${_t}/${t}_${r}.png ${ht}w,
          ${bt}/border-layers/types/${t}/${gt}/${t}_${r}.png ${_t}w,
          ${bt}/border-layers/types/${t}/${mt}/${t}_${r}.png ${gt}w
        "
        sizes="${e}"
        type="image/png"
      />
      <img
        srcset="
          ${bt}/border-layers/types/${t}/${pt}/${t}_${r}.png
        "
        class="card__baseLayer__img"
      />
    </picture>

    <picture class="card__manaLayer">
      <source
        srcset="
          ${bt}/border-layers/rosettes/${i}/${dt}/${i}_${r}.webp ${pt}w,
          ${bt}/border-layers/rosettes/${i}/${ut}/${i}_${r}.webp ${dt}w,
          ${bt}/border-layers/rosettes/${i}/${ht}/${i}_${r}.webp ${ut}w,
          ${bt}/border-layers/rosettes/${i}/${_t}/${i}_${r}.webp ${ht}w,
          ${bt}/border-layers/rosettes/${i}/${gt}/${i}_${r}.webp ${_t}w,
          ${bt}/border-layers/rosettes/${i}/${mt}/${i}_${r}.webp ${gt}w
        "
        sizes="${e}"
        type="image/webp"
      />
      <source
        srcset="
          ${bt}/border-layers/rosettes/${i}/${dt}/${i}_${r}.png ${pt}w,
          ${bt}/border-layers/rosettes/${i}/${ut}/${i}_${r}.png ${dt}w,
          ${bt}/border-layers/rosettes/${i}/${ht}/${i}_${r}.png ${ut}w,
          ${bt}/border-layers/rosettes/${i}/${_t}/${i}_${r}.png ${ht}w,
          ${bt}/border-layers/rosettes/${i}/${gt}/${i}_${r}.png ${_t}w,
          ${bt}/border-layers/rosettes/${i}/${mt}/${i}_${r}.png ${gt}w
        "
        sizes="${e}"
        type="image/png"
      />
      <img
        srcset="
          ${bt}/border-layers/rosettes/${i}/${pt}/${i}_${r}.png
        "
        class="card__manaLayer__img"
      />
    </picture>

    ${"common"!==n?j`
          <picture class="card__rarityLayer">
            <source
              srcset="
              ${bt}/border-layers/gems/${pt}/rarity_${n}.webp ${pt}w,
                ${bt}/border-layers/gems/${dt}/rarity_${n}.webp ${dt}w,
                ${bt}/border-layers/gems/${ut}/rarity_${n}.webp ${ut}w,
                ${bt}/border-layers/gems/${ht}/rarity_${n}.webp ${ht}w,
                ${bt}/border-layers/gems/${_t}/rarity_${n}.webp ${_t}w,
                ${bt}/border-layers/gems/${gt}/rarity_${n}.webp ${gt}w,
                ${bt}/border-layers/gems/${mt}/rarity_${n}.webp ${mt}w
              "
              sizes="${e}"
              type="image/webp"
            />
            <source
              srcset="
              ${bt}/border-layers/gems/${pt}/rarity_${n}.png ${pt}w,
                ${bt}/border-layers/gems/${dt}/rarity_${n}.png ${dt}w,
                ${bt}/border-layers/gems/${ut}/rarity_${n}.png ${ut}w,
                ${bt}/border-layers/gems/${ht}/rarity_${n}.png ${ht}w,
                ${bt}/border-layers/gems/${_t}/rarity_${n}.webp ${_t}w,
                ${bt}/border-layers/gems/${gt}/rarity_${n}.webp ${gt}w,
                ${bt}/border-layers/gems/${mt}/rarity_${n}.png ${mt}w
              "
              sizes="${e}"
              type="image/png"
            />
            <img
              srcset="
                ${bt}/border-layers/gems/${pt}/rarity_${n}.png
              "
              class="card__rarityLayer__img"
            />
          </picture>
        `:null}
    ${"legendary"===n?j`
          <picture class="card__wreathLayer">
            <source
              srcset="
                ${bt}/border-layers/wreaths/${pt}/wreath_${r}.webp ${pt}w,
                ${bt}/border-layers/wreaths/${dt}/wreath_${r}.webp ${dt}w,
                ${bt}/border-layers/wreaths/${ut}/wreath_${r}.webp ${ut}w,
                ${bt}/border-layers/wreaths/${ht}/wreath_${r}.webp ${ht}w,
                ${bt}/border-layers/wreaths/${_t}/wreath_${r}.webp ${_t}w,
                ${bt}/border-layers/wreaths/${gt}/wreath_${r}.webp ${gt}w,
                ${bt}/border-layers/wreaths/${mt}/wreath_${r}.webp ${mt}w
              "
              sizes="${e}"
              type="image/webp"
            />

            <source
              srcset="
              ${bt}/border-layers/wreaths/${pt}/wreath_${r}.png ${pt}w,
                ${bt}/border-layers/wreaths/${dt}/wreath_${r}.png ${dt}w,
                ${bt}/border-layers/wreaths/${ut}/wreath_${r}.png ${ut}w,
                ${bt}/border-layers/wreaths/${ht}/wreath_${r}.png ${ht}w,
                ${bt}/border-layers/wreaths/${_t}/wreath_${r}.png ${_t}w,
                ${bt}/border-layers/wreaths/${gt}/wreath_${r}.png ${gt}w,
                ${bt}/border-layers/wreaths/${mt}/wreath_${r}.png ${mt}w
              "
              sizes="${e}"
              type="image/png"
            />
            <img
              srcset="
                ${bt}/border-layers/wreaths/${pt}/wreath_${r}.png
              "
              class="card__wreathLayer__img"
            />
          </picture>
        `:null}
    ${"core"===o&&"plain"===r?j`
          <picture class="card__lockIconLayer">
            <source
              srcset="
                ${bt}/border-layers/locks/${ft}/lock_${r}.webp ${ft}w,
                ${bt}/border-layers/locks/${yt}/lock_${r}.webp ${yt}w,
              "
              type="image/webp"
            />

            <source
              srcset="
                ${bt}/border-layers/locks/${ft}/lock_${r}.png ${ft}w,
                ${bt}/border-layers/locks/${yt}/lock_${r}.png ${yt}w,
              "
              type="image/png"
            />

            <img
              srcset="
                ${bt}/border-layers/locks/lock_${r}.png
              "
              class="card__lockIconLayer__img"
            />
          </picture>
        `:null}
    ${s?j`
          <picture class="card__tribeBarLayer">
            <source
              srcset="
                ${bt}/border-layers/tribe_bars/${pt}/tribebar_${r}.webp ${pt}w,
                ${bt}/border-layers/tribe_bars/${dt}/tribebar_${r}.webp ${dt}w,
                ${bt}/border-layers/tribe_bars/${ut}/tribebar_${r}.webp ${ut}w,
                ${bt}/border-layers/tribe_bars/${ht}/tribebar_${r}.webp ${ht}w,
              "
              sizes="${e}"
              type="image/webp"
            />
            <source
              srcset="
                ${bt}/border-layers/tribe_bars/${pt}/tribebar_${r}.png ${pt}w,
                ${bt}/border-layers/tribe_bars/${dt}/tribebar_${r}.png ${dt}w,
                ${bt}/border-layers/tribe_bars/${ut}/tribebar_${r}.png ${ut}w,
                ${bt}/border-layers/tribe_bars/${ht}/tribebar_${r}.png ${ht}w,
              "
              sizes="${e}"
              type="image/png"
            />

            <img
              srcset="
                ${bt}/border-layers/tribe_bars/${mt}/tribebar_${n}.png
              "
              class="card__tribeBarLayer__img"
            />
          </picture>
        `:null}
  `))(Object.assign({qualityName:e,responsiveSrcsetSizes:this.responsiveSrcsetSizes},this.protoCardData))}
              ${(({type:e="",name:t="⃠",effect:r="⃠",mana:n="⃠",attack:i="⃠",health:o="⃠",tribe:s="",cardSet:a="",ch:l=0,cw:c=0})=>{e=$t(e);const p=RegExp(/creature|weapon/).test(e),d=t.split("").length>=20,u=Math.floor(.5*l),h=(0===u?1:u)+"px",_="rgba(0, 0, 0, 1)",g=`0 0 ${h} ${_}, 0 0 ${h} ${_}, 0 0 ${h} ${_}`,m=We({fontSize:10.5*l+"px",top:6.85*l+"px",left:9.5*c+"px",width:19*c+"px",textShadow:g}),f=We({fontSize:(d?3.9*l:4.93*l)+"px",bottom:32.85*l+"px",height:9*l+"px",left:13.25*c+"px",right:5.3*c+"px",textShadow:g}),y=We({fontSize:9.5*l+"px",bottom:4.5*l+"px",width:15*c+"px",left:10.5*c+"px",textShadow:g}),$=We({fontSize:9.5*l+"px",width:16*c+"px",bottom:4.6*l+"px",right:2.5*c+"px",textShadow:g}),b=We({fontSize:3.2*l+"px",bottom:3.1*l+"px",height:4.82*l+"px",left:30.5*c+"px",right:23*c+"px",textShadow:g}),w=We({fontSize:6*l+"px",top:10*l+"px",right:9*c+"px"});return j`
    <div class="card__manaText" style=${m}>
      ${n}
    </div>

    <div
      class="card__nameText ${d?"card__nameText--crammed":""}"
      style=${f}
    >
      <div class="card__nameText__inner">
        ${t}
      </div>
    </div>

    <autofit-description-text
      text=${r}
      ch=${l}
      cw=${c}
      type=${e}
      tribe=${s}
    ></autofit-description-text>

    ${p?j`
          <div class="card__attackText" style=${y}>
            ${i}
          </div>

          <div class="card__healthText" style=${$}>
            ${o}
          </div>
        `:null}
    ${s?j`
          <div class="card__tribeText" style=${b}>
            <div class="card__tribeText__inner">
              ${s}
            </div>
          </div>
        `:null}
    ${"mythic"!==a?j`
          <card-icon
            style=${w}
            class="card__setIcon"
            iconLigature=${"set_"+a}
          ></card-icon>
        `:null}
  `})(Object.assign({ch:this.ch,cw:this.cw},this.protoCardData,{cardSet:this.protoCardData.set}))}
            `}
      </div>
    `}};wt([K({type:Number})],kt.prototype,"protoId",void 0),wt([K({type:Number})],kt.prototype,"quality",void 0),wt([K({type:Object})],kt.prototype,"inputProtoData",void 0),wt([K({type:String})],kt.prototype,"responsiveSrcsetSizes",void 0),wt([K({type:Boolean})],kt.prototype,"useLegacyQualityMapping",void 0),kt=wt([G("composited-card")],kt);const Pt=re`
  font-family: 'Unchained', serif;
  line-height: 1.1;
`,Et=re`
  font-family: 'Open Sans', sans-serif;
  line-height: 1.5;
`,Tt=re`black`,zt=re`white`,Nt=re`#f9f9f9`,Ot=(re`#f1f1f1`,re`65px`),qt=re`100px`,Rt=re`#282828`,Lt=re`#333`,At=re`rgba(255,255,255,0.15)`,Mt=[re`#8295A2`,re`#8295A2`,re`#6A8B35`,re`#3D91B9`,re`#84343E`,re`#B461C5`,re`#E5D93C`,re`#94E6FB`,re`white`],It=re`#9f78dd`,jt=(e=0)=>re`
  width: 100%;
  cursor: pointer;
  background: ${Rt};
  border: 2px solid ${At};
  padding: 6px;
`,Vt=(e=0)=>re`
  height: 20px;
  width: 38px;
  border-radius: 28px;
  background: ${Mt[e]};
  cursor: pointer;
  -webkit-appearance: none;
`;var Bt=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Dt=class extends ie{constructor(){super(),this.currentProtoId=Math.floor(99*Math.random()+1),this.currentQuality=Math.floor(4*Math.random()+1),this.currentQualityInWords=St[this.currentQuality-1];const e=this.getUrlParams(),t=e.get("protoid"),r=e.get("quality");null!==t&&(this.currentProtoId=parseInt(t,10)),null!==r&&(this.currentQuality=parseInt(r,10),this.currentQualityInWords=St[this.currentQuality-1]),null!==t&&null!==r&&this.updatePageImageMetadata(),fetch("https://api.godsunchained.com/v0/proto?format=flat").then(e=>e.json()).then(e=>{this.protosCollection=e,this.currentProtoData=Object.assign({},e[this.currentProtoId],{id:this.currentProtoId}),this.updatePageMetadata()}).catch(e=>console.error(e))}static get styles(){return re`
  @keyframes floatCard {
    from {
      transform: translateY(2%);
    }
    to {
      transform: translateY(-2%);
    }
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  :host {
    display: block;
    position: relative;
    width: 100%;
    min-width: 640px;
    height: 100%;
    min-height: 760px;
    ${Et}
  }

  .appHeader {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: ${Ot};
    background: white;
    border-bottom: 2px solid ${Nt};
    text-align: center;
    line-height: calc(${Ot} - 3);
    display: flex;
    padding: 0 15px 0 5px;
  }

  .appHeader__link {
    width: 180px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  .appHeader__link__img {
    display: block;
    width: 100%;
  }

  .appHeader__title {
    ${Et}
    font-weight: 300;
    font-size: 22px;
    letter-spacing: -0.8px;
    line-height: 0.8;
    text-align: center;
    flex: 1;
  }

  .appHeader__title__sup {
    font-size: 9px;
    letter-spacing: 0;
    padding: 2px 3px;
    border-radius: 4px;
    border: 1px solid ${It};
    color: ${It};
    font-weight: 400;
    display: inline-block;
    vertical-align: top;
    margin-top: -5px;
    cursor: defualt;
  }

  .appHeader__title__sup:hover {
    background-color: ${It};
    color: ${zt};
  }

  .appContainer {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: ${Ot};
  }

  .appContainer::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50vh;
    background: ${Lt};
  }

  .appContainer__intro {
    width: 50%;
    text-align: center;
    color: #b8b8b8;
    flex-grow: 0;
    margin: 20px 15px 0;
  }

  .appContainer__intro a {
    color: ${Tt};
    text-decoration: none;
  }

  .appContainer__intro a:hover {
    text-decoration: underline;
  }

  .appContainer__controls__title {
    ${Pt}
    font-size: 18px;
    text-transform: uppercase;
    color: ${zt};
    position: absolute;
    left: 20px;
    top: 0px;
    transform: translateY(-150%);
    margin: 0;
    text-shadow: 0 1px 0 ${Lt}, 1px 0 0 ${Lt},
      1px 1px 0 ${Lt}, -1px 0 0 ${Lt},
      -1px -1px 0 ${Lt}, 0 -1px 0 ${Lt};
  }

  .appContainer__fab {
    position: fixed;
    bottom: ${qt};
    right: 25px;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: ${It};
    box-shadow: none;
    border: none;
    transform: translate(0, 50%);
    z-index: 2;
    display: flex;
  }

  .appContainer__fab:hover {
    background: #6ce4ff;
  }

  .appContainer__fab:active {
    background: ${zt};
  }

  .appContainer__fab:active .appContainer__fab__img {
    filter: brightness(0);
  }

  .appContainer__fab__img {
    display: block;
    width: 60%;
    margin: auto;
  }

  .appContainer__cardVisualisation {
    width: 54vmin;
    min-width: 360px;
    display: flex;
    flex: 1;
    position: relative;
    margin-bottom: calc(${qt} + 30px);
  }

  .appContainer__cardVisualisation__inner {
    margin: auto;
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  @media screen and (min-aspect-ratio: 1/1) {
    .appContainer__cardVisualisation {
      width: 50vmin;
    }
  }

  .appContainer__cardVisualisation__shadow {
    width: 120%;
    height: 40px;
    left: -5%;
    bottom: 0;
    position: absolute;
    display: flex;
  }

  .appContainer__cardVisualisation__shadow::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 50%;
    filter: blur(30px);
  }

  .appContainer__cardVisualisation__shadow::after {
    content: '';
    width: 80%;
    height: 30px;
    margin: auto;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 50%;
    filter: blur(7px);
  }

  .appContainer__cardVisualisation__card {
    animation: 3s floatCard infinite alternate ease-in-out;
    position: relative;
    z-index: 1;
  }

  .appContainer__dummyCardContainer {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    overflow: hidden;
    opacity: 0;
    pointer-events: none;
  }

  .appContainer__dummyCardContainer__dummyCard {
    width: 1000px;
    height: 1400px;
    padding: 0;
  }

  .appContainer__controls {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: ${qt};
    z-index: 2;
    background: ${Rt};
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 20px;
  }

  .appContainer__controls__panel {
    display: flex;
    flex-direction: column;
    color: rgba(255, 255, 255, 0.5);
  }

  .appContainer__controls__panel__input {
    background: transparent;
    border: 2px solid ${At};
    padding: 8px 10px;
    font-size: 12px;
    font-weight: 700;
    color: white;
    width: 15vw;
  }

  .appContainer__controls__panel--quality {
    margin-left: 20px;
    width: 30vw;
  }

  .appContainer__controls__panel__label {
    font-size: 14px;
    line-height: 1.1;
    margin-bottom: 8px;
  }

  .appContainer__controls__panel__label__quality {
    font-weight: 700;
  }

  .quality--plain {
    color: ${Mt[1]};
  }

  .quality--bronze {
    color: ${Mt[2]};
  }

  .quality--iron {
    color: ${Mt[3]};
  }

  .quality--meteorite {
    color: ${Mt[4]};
  }

  .quality--shadow {
    color: ${Mt[5]};
  }

  .quality--gold {
    color: ${Mt[6]};
  }

  .quality--diamond {
    color: ${Mt[7]};
  }

  .quality--mythic {
    color: ${Mt[8]};
  }

  .appContainer__controls__panel__rangeSlider {
    -webkit-appearance: none;
    width: 100%;
  }

  .appContainer__controls__panel__rangeSlider:focus {
    outline: none;
  }

  /* WEBKIT: */
  .appContainer__controls__panel__rangeSlider.quality--plain::-webkit-slider-runnable-track {
    ${jt(0)}
  }
  .appContainer__controls__panel__rangeSlider.quality--bronze::-webkit-slider-runnable-track {
    ${jt(2)}
  }
  .appContainer__controls__panel__rangeSlider.quality--iron::-webkit-slider-runnable-track {
    ${jt(3)}
  }
  .appContainer__controls__panel__rangeSlider.quality--meteorite::-webkit-slider-runnable-track {
    ${jt(4)}
  }
  .appContainer__controls__panel__rangeSlider.quality--shadow::-webkit-slider-runnable-track {
    ${jt(5)}
  }
  .appContainer__controls__panel__rangeSlider.quality--gold::-webkit-slider-runnable-track {
    ${jt(6)}
  }
  .appContainer__controls__panel__rangeSlider.quality--diamond::-webkit-slider-runnable-track {
    ${jt(7)}
  }
  .appContainer__controls__panel__rangeSlider.quality--mythic::-webkit-slider-runnable-track {
    ${jt(8)}
  }

  .appContainer__controls__panel__rangeSlider.quality--plain::-webkit-slider-thumb {
    ${Vt(0)}
  }
  .appContainer__controls__panel__rangeSlider.quality--bronze::-webkit-slider-thumb {
    ${Vt(2)}
  }
  .appContainer__controls__panel__rangeSlider.quality--iron::-webkit-slider-thumb {
    ${Vt(3)}
  }
  .appContainer__controls__panel__rangeSlider.quality--meteorite::-webkit-slider-thumb {
    ${Vt(4)}
  }
  .appContainer__controls__panel__rangeSlider.quality--shadow::-webkit-slider-thumb {
    ${Vt(5)}
  }
  .appContainer__controls__panel__rangeSlider.quality--gold::-webkit-slider-thumb {
    ${Vt(6)}
  }
  .appContainer__controls__panel__rangeSlider.quality--diamond::-webkit-slider-thumb {
    ${Vt(7)}
  }
  .appContainer__controls__panel__rangeSlider.quality--mythic::-webkit-slider-thumb {
    ${Vt(8)}
  }

  /* FIREFOX: */

  .appContainer__controls__panel__rangeSlider.quality--plain::-moz-range-track {
    ${jt(0)}
  }
  .appContainer__controls__panel__rangeSlider.quality--bronze::-moz-range-track {
    ${jt(2)}
  }
  .appContainer__controls__panel__rangeSlider.quality--iron::-moz-range-track {
    ${jt(3)}
  }
  .appContainer__controls__panel__rangeSlider.quality--meteorite::-moz-range-track {
    ${jt(4)}
  }
  .appContainer__controls__panel__rangeSlider.quality--shadow::-moz-range-track {
    ${jt(5)}
  }
  .appContainer__controls__panel__rangeSlider.quality--gold::-moz-range-track {
    ${jt(6)}
  }
  .appContainer__controls__panel__rangeSlider.quality--diamond::-moz-range-track {
    ${jt(7)}
  }
  .appContainer__controls__panel__rangeSlider.quality--mythic::-moz-range-track {
    ${jt(8)}
  }

  .appContainer__controls__panel__rangeSlider.quality--plain::-moz-range-thumb {
    ${Vt(0)}
  }
  .appContainer__controls__panel__rangeSlider.quality--bronze::-moz-range-thumb {
    ${Vt(2)}
  }
  .appContainer__controls__panel__rangeSlider.quality--iron::-moz-range-thumb {
    ${Vt(3)}
  }
  .appContainer__controls__panel__rangeSlider.quality--meteorite::-moz-range-thumb {
    ${Vt(4)}
  }
  .appContainer__controls__panel__rangeSlider.quality--shadow::-moz-range-thumb {
    ${Vt(5)}
  }
  .appContainer__controls__panel__rangeSlider.quality--gold::-moz-range-thumb {
    ${Vt(6)}
  }
  .appContainer__controls__panel__rangeSlider.quality--diamond::-moz-range-thumb {
    ${Vt(7)}
  }
  .appContainer__controls__panel__rangeSlider.quality--mythic::-moz-range-thumb {
    ${Vt(8)}
  }
`}updated(e){void 0===e.get("currentProtoId")&&void 0===e.get("currentQuality")||(this.updateUrlParams(),this.updatePageMetadata())}updatePageMetadata(){document.querySelector('meta[property="og:title"]').setAttribute("content",this.currentProtoData.name),document.querySelector('meta[property="og:description"]').setAttribute("content",this.currentProtoData.effect),document.querySelector('meta[property="og:url"]').setAttribute("content",location.href),this.updatePageImageMetadata()}get currentImageUrl(){return`https://card.godsunchained.com?id=${this.currentProtoId}&q=${this.currentQuality}&w=`}updatePageImageMetadata(){document.querySelector('meta[property="og:image"]').setAttribute("content",this.currentImageUrl+"256")}getUrlParams(){return new URLSearchParams(window.location.search)}updateUrlParams(){const e=this.getUrlParams();e.set("protoid",""+this.currentProtoId),e.set("quality",""+this.currentQuality),window.history.pushState({},"",decodeURIComponent(`${location.pathname}?${e}`))}getScreenShot(e){e.preventDefault(),window.open()}render(){return j`
      <header class="appHeader">
        <a href="https://immutable.com" class="appHeader__link" target="_blank">
          <img
            class="appHeader__link__img"
            src="${r(6)}"
            alt="imco logo"
          />
        </a>
        <h3 class="appHeader__title">
          Composited Card Demo
          <sup
            class="appHeader__title__sup"
            title="*UX and functionality in Safari/Edge might have some slight speed-bumps"
          >
            BETA
          </sup>
        </h3>
      </header>

      <main class="appContainer">
        <div class="appContainer__intro">
          A simple, framework agnostic
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/Web_Components"
            target="_blank"
          >
            web component
          </a>
          to facilitate the display of
          <a href="https://godsunchained.com" target="_blank">Gods Unchained</a>
          card&nbsp;element(s).
        </div>

        <footer class="appContainer__controls">
          <h3 class="appContainer__controls__title">
            Display Controls
          </h3>
          <div class="appContainer__controls__panel">
            <label for="#protoId" class="appContainer__controls__panel__label">
              Card ID
            </label>

            <input
              id="#protoId"
              type="number"
              class="appContainer__controls__panel__input"
              value=${this.currentProtoId}
              @keyup=${e=>{this.currentProtoId=e.target.value,this.currentProtoData=Object.assign({},this.protosCollection[this.currentProtoId],{id:this.currentProtoId})}}
            />
          </div>

          <div
            class="appContainer__controls__panel appContainer__controls__panel--quality"
          >
            <label for="#protoId" class="appContainer__controls__panel__label">
              Quality
              <span
                class="appContainer__controls__panel__label__quality quality--${this.currentQualityInWords}"
              >
                (${this.currentQualityInWords})
              </span>
            </label>
            <input
              type="range"
              min="1"
              max="5"
              class="appContainer__controls__panel__rangeSlider quality--${this.currentQualityInWords}"
              value=${this.currentQuality}
              @change=${e=>{this.currentQuality=e.target.value,this.currentQualityInWords=St[this.currentQuality-1]}}
            />
          </div>
        </footer>

        <a
          class="appContainer__fab"
          href=${this.currentImageUrl+"1024"}
          target="_blank"
        >
          <img
            class="appContainer__fab__img"
            src="${r(7)}"
          />
        </a>

        <div class="appContainer__cardVisualisation">
          <div class="appContainer__cardVisualisation__inner">
            <i class="appContainer__cardVisualisation__shadow"></i>
            ${this.currentProtoData?j`
                  <composited-card
                    inputProtoData=${JSON.stringify(this.currentProtoData)}
                    quality=${this.currentQuality}
                    responsiveSrcsetSizes="90vw"
                    class="appContainer__cardVisualisation__card"
                  ></composited-card>
                `:null}
          </div>
        </div>
      </main>
    `}};Bt([K()],Dt.prototype,"currentProtoId",void 0),Bt([K()],Dt.prototype,"currentQuality",void 0),Bt([K()],Dt.prototype,"currentQualityInWords",void 0),Bt([K()],Dt.prototype,"currentProtoData",void 0),Bt([K()],Dt.prototype,"protosCollection",void 0),Dt=Bt([G("demo-app")],Dt);r(8);const Ut=document.createElement("style");Ut.innerHTML=Ze().cssText.replace(":host",".compositedCardDomRender"),document.head.appendChild(Ut)}]);
//# sourceMappingURL=bundle.6f7c250857541a84e714.js.map