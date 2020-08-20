!function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=10)}([function(e,t,r){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=function(e,t){var r=e[1]||"",n=e[3];if(!n)return r;if(t&&"function"==typeof btoa){var i=(s=n,a=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(l," */")),o=n.sources.map((function(e){return"/*# sourceURL=".concat(n.sourceRoot).concat(e," */")}));return[r].concat(o).concat([i]).join("\n")}var s,a,l;return[r].join("\n")}(t,e);return t[2]?"@media ".concat(t[2],"{").concat(r,"}"):r})).join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},i=0;i<this.length;i++){var o=this[i][0];null!=o&&(n[o]=!0)}for(var s=0;s<e.length;s++){var a=e[s];null!=a[0]&&n[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="(".concat(a[2],") and (").concat(r,")")),t.push(a))}},t}},function(e,t,r){"use strict";var n,i={},o=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},s=function(){var e={};return function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[t]=r}return e[t]}}();function a(e,t){for(var r=[],n={},i=0;i<e.length;i++){var o=e[i],s=t.base?o[0]+t.base:o[0],a={css:o[1],media:o[2],sourceMap:o[3]};n[s]?n[s].parts.push(a):r.push(n[s]={id:s,parts:[a]})}return r}function l(e,t){for(var r=0;r<e.length;r++){var n=e[r],o=i[n.id],s=0;if(o){for(o.refs++;s<o.parts.length;s++)o.parts[s](n.parts[s]);for(;s<n.parts.length;s++)o.parts.push($(n.parts[s],t))}else{for(var a=[];s<n.parts.length;s++)a.push($(n.parts[s],t));i[n.id]={id:n.id,refs:1,parts:a}}}}function c(e){var t=document.createElement("style");if(void 0===e.attributes.nonce){var n=r.nc;n&&(e.attributes.nonce=n)}if(Object.keys(e.attributes).forEach((function(r){t.setAttribute(r,e.attributes[r])})),"function"==typeof e.insert)e.insert(t);else{var i=s(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var p,d=(p=[],function(e,t){return p[e]=t,p.filter(Boolean).join("\n")});function u(e,t,r,n){var i=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=d(t,i);else{var o=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}function h(e,t,r){var n=r.css,i=r.media,o=r.sourceMap;if(i&&e.setAttribute("media",i),o&&btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var _=null,g=0;function $(e,t){var r,n,i;if(t.singleton){var o=g++;r=_||(_=c(t)),n=u.bind(null,r,o,!1),i=u.bind(null,r,o,!0)}else r=c(t),n=h.bind(null,r,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).attributes="object"==typeof t.attributes?t.attributes:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=o());var r=a(e,t);return l(r,t),function(e){for(var n=[],o=0;o<r.length;o++){var s=r[o],c=i[s.id];c&&(c.refs--,n.push(c))}e&&l(a(e,t),t);for(var p=0;p<n.length;p++){var d=n[p];if(0===d.refs){for(var u=0;u<d.parts.length;u++)d.parts[u]();delete i[d.id]}}}}},function(e,t){
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
!function(){"use strict";var e,t=!1,r=[],n=!1;function i(){window.WebComponents.ready=!0,document.dispatchEvent(new CustomEvent("WebComponentsReady",{bubbles:!0}))}function o(){window.customElements&&customElements.polyfillWrapFlushCallback&&customElements.polyfillWrapFlushCallback((function(t){e=t,n&&e()}))}function s(){window.HTMLTemplateElement&&HTMLTemplateElement.bootstrap&&HTMLTemplateElement.bootstrap(window.document),t=!0,a().then(i)}function a(){n=!1;var t=r.map((function(e){return e instanceof Function?e():e}));return r=[],Promise.all(t).then((function(){n=!0,e&&e()})).catch((function(e){console.error(e)}))}window.WebComponents=window.WebComponents||{},window.WebComponents.ready=window.WebComponents.ready||!1,window.WebComponents.waitFor=window.WebComponents.waitFor||function(e){e&&(r.push(e),t&&a())},window.WebComponents._batchCustomElements=o;var l="webcomponents-loader.js",c=[];(!("attachShadow"in Element.prototype&&"getRootNode"in Element.prototype)||window.ShadyDOM&&window.ShadyDOM.force)&&c.push("sd"),window.customElements&&!window.customElements.forcePolyfill||c.push("ce");var p=function(){var e=document.createElement("template");if(!("content"in e))return!0;if(!(e.content.cloneNode()instanceof DocumentFragment))return!0;var t=document.createElement("template");t.content.appendChild(document.createElement("div")),e.content.appendChild(t);var r=e.cloneNode(!0);return 0===r.content.childNodes.length||0===r.content.firstChild.content.childNodes.length}();if(window.Promise&&Array.from&&window.URL&&window.Symbol&&!p||(c=["sd-ce-pf"]),c.length){var d,u="bundles/webcomponents-"+c.join("-")+".js";if(window.WebComponents.root)d=window.WebComponents.root+u;else{var h=document.querySelector('script[src*="'+l+'"]');d=h.src.replace(l,u)}var _=document.createElement("script");_.src=d,"loading"===document.readyState?(_.setAttribute("onload","window.WebComponents._batchCustomElements()"),document.write(_.outerHTML),document.addEventListener("DOMContentLoaded",s)):(_.addEventListener("load",(function(){o(),s()})),_.addEventListener("error",(function(){throw new Error("Could not load polyfill bundle"+d)})),document.head.appendChild(_))}else"complete"===document.readyState?(t=!0,i()):(window.addEventListener("load",s),window.addEventListener("DOMContentLoaded",(function(){window.removeEventListener("load",s),s()})))}()},function(e,t,r){e.exports=r.p+"eb5c8c08d7563671b75abdd4782079cb.png"},function(e,t,r){var n=r(5);"string"==typeof n&&(n=[[e.i,n,""]]);var i={insert:"head",singleton:!1};r(1)(n,i);n.locals&&(e.exports=n.locals)},function(e,t,r){(t=e.exports=r(0)(!1)).push([e.i,"@import url(https://images.godsunchained.com/fonts/css/card-fonts.css);",""]),t.push([e.i,"",""])},function(e,t,r){e.exports=r.p+"c2848aacde2d388cba47a89a95be606b.svg"},function(e,t,r){e.exports=r.p+"eddc5abb8686fffbc9f9fa841727baff.svg"},function(e,t,r){var n=r(9);"string"==typeof n&&(n=[[e.i,n,""]]);var i={insert:"head",singleton:!1};r(1)(n,i);n.locals&&(e.exports=n.locals)},function(e,t,r){(e.exports=r(0)(!1)).push([e.i,"*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n}\n\n.githubButtonContainer {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  z-index: 2;\n}\n\n.tempRenderHolder {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  opacity: 0;\n}\n\n.tempRenderHolder canvas {\n  position: absolute;\n  top: 0;\n  left: 0;\n  user-select: none;\n  pointer-events: none;\n}\n\n.compositedCardDomRender {\n  display: flex;\n  position: relative;\n  font-family: 'Unchained', serif;\n  line-height: 1.1;\n  user-select: none;\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 1000px;\n  height: 1400px;\n}\n",""])},function(e,t,r){"use strict";r.r(t);r(2);
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
 */const n="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,i=(e,t,r=null)=>{for(;t!==r;){const r=t.nextSibling;e.removeChild(t),t=r}},o=`{{lit-${String(Math.random()).slice(2)}}}`,s=`\x3c!--${o}--\x3e`,a=new RegExp(`${o}|${s}`),l="$lit$";class c{constructor(e,t){this.parts=[],this.element=t;const r=[],n=[],i=document.createTreeWalker(t.content,133,null,!1);let s=0,c=-1,d=0;const{strings:_,values:{length:g}}=e;for(;d<g;){const e=i.nextNode();if(null!==e){if(c++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:r}=t;let n=0;for(let e=0;e<r;e++)p(t[e].name,l)&&n++;for(;n-- >0;){const t=_[d],r=h.exec(t)[2],n=r.toLowerCase()+l,i=e.getAttribute(n);e.removeAttribute(n);const o=i.split(a);this.parts.push({type:"attribute",index:c,name:r,strings:o}),d+=o.length-1}}"TEMPLATE"===e.tagName&&(n.push(e),i.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(o)>=0){const n=e.parentNode,i=t.split(a),o=i.length-1;for(let t=0;t<o;t++){let r,o=i[t];if(""===o)r=u();else{const e=h.exec(o);null!==e&&p(e[2],l)&&(o=o.slice(0,e.index)+e[1]+e[2].slice(0,-l.length)+e[3]),r=document.createTextNode(o)}n.insertBefore(r,e),this.parts.push({type:"node",index:++c})}""===i[o]?(n.insertBefore(u(),e),r.push(e)):e.data=i[o],d+=o}}else if(8===e.nodeType)if(e.data===o){const t=e.parentNode;null!==e.previousSibling&&c!==s||(c++,t.insertBefore(u(),e)),s=c,this.parts.push({type:"node",index:c}),null===e.nextSibling?e.data="":(r.push(e),c--),d++}else{let t=-1;for(;-1!==(t=e.data.indexOf(o,t+1));)this.parts.push({type:"node",index:-1}),d++}}else i.currentNode=n.pop()}for(const e of r)e.parentNode.removeChild(e)}}const p=(e,t)=>{const r=e.length-t.length;return r>=0&&e.slice(r)===t},d=e=>-1!==e.index,u=()=>document.createComment(""),h=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/,_=133;function g(e,t){const{element:{content:r},parts:n}=e,i=document.createTreeWalker(r,_,null,!1);let o=m(n),s=n[o],a=-1,l=0;const c=[];let p=null;for(;i.nextNode();){a++;const e=i.currentNode;for(e.previousSibling===p&&(p=null),t.has(e)&&(c.push(e),null===p&&(p=e)),null!==p&&l++;void 0!==s&&s.index===a;)s.index=null!==p?-1:s.index-l,o=m(n,o),s=n[o]}c.forEach(e=>e.parentNode.removeChild(e))}const $=e=>{let t=11===e.nodeType?0:1;const r=document.createTreeWalker(e,_,null,!1);for(;r.nextNode();)t++;return t},m=(e,t=-1)=>{for(let r=t+1;r<e.length;r++){const t=e[r];if(d(t))return r}return-1};
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
const f=new WeakMap,y=e=>(...t)=>{const r=e(...t);return f.set(r,!0),r},b=e=>"function"==typeof e&&f.has(e),w={},v={};
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
class x{constructor(e,t,r){this.__parts=[],this.template=e,this.processor=t,this.options=r}update(e){let t=0;for(const r of this.__parts)void 0!==r&&r.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=n?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],r=this.template.parts,i=document.createTreeWalker(e,133,null,!1);let o,s=0,a=0,l=i.nextNode();for(;s<r.length;)if(o=r[s],d(o)){for(;a<o.index;)a++,"TEMPLATE"===l.nodeName&&(t.push(l),i.currentNode=l.content),null===(l=i.nextNode())&&(i.currentNode=t.pop(),l=i.nextNode());if("node"===o.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(l.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,o.name,o.strings,this.options));s++}else this.__parts.push(void 0),s++;return n&&(document.adoptNode(e),customElements.upgrade(e)),e}}
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
 */const S=` ${o} `;class C{constructor(e,t,r,n){this.strings=e,this.values=t,this.type=r,this.processor=n}getHTML(){const e=this.strings.length-1;let t="",r=!1;for(let n=0;n<e;n++){const e=this.strings[n],i=e.lastIndexOf("\x3c!--");r=(i>-1||r)&&-1===e.indexOf("--\x3e",i+1);const a=h.exec(e);t+=null===a?e+(r?S:s):e.substr(0,a.index)+a[1]+a[2]+l+a[3]+o}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}
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
const k=e=>null===e||!("object"==typeof e||"function"==typeof e),P=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class E{constructor(e,t,r){this.dirty=!0,this.element=e,this.name=t,this.strings=r,this.parts=[];for(let e=0;e<r.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new T(this)}_getValue(){const e=this.strings,t=e.length-1;let r="";for(let n=0;n<t;n++){r+=e[n];const t=this.parts[n];if(void 0!==t){const e=t.value;if(k(e)||!P(e))r+="string"==typeof e?e:String(e);else for(const t of e)r+="string"==typeof t?t:String(t)}}return r+=e[t],r}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class T{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===w||k(e)&&e===this.value||(this.value=e,b(e)||(this.committer.dirty=!0))}commit(){for(;b(this.value);){const e=this.value;this.value=w,e(this)}this.value!==w&&this.committer.commit()}}class z{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(u()),this.endNode=e.appendChild(u())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=u()),e.__insert(this.endNode=u())}insertAfterPart(e){e.__insert(this.startNode=u()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;b(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=w,e(this)}const e=this.__pendingValue;e!==w&&(k(e)?e!==this.value&&this.__commitText(e):e instanceof C?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):P(e)?this.__commitIterable(e):e===v?(this.value=v,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,r="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=r:this.__commitNode(document.createTextNode(r)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof x&&this.value.template===t)this.value.update(e.values);else{const r=new x(t,e.processor,this.options),n=r._clone();r.update(e.values),this.__commitNode(n),this.value=r}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let r,n=0;for(const i of e)r=t[n],void 0===r&&(r=new z(this.options),t.push(r),0===n?r.appendIntoPart(this):r.insertAfterPart(t[n-1])),r.setValue(i),r.commit(),n++;n<t.length&&(t.length=n,this.clear(r&&r.endNode))}clear(e=this.startNode){i(this.startNode.parentNode,e.nextSibling,this.endNode)}}class N{constructor(e,t,r){if(this.value=void 0,this.__pendingValue=void 0,2!==r.length||""!==r[0]||""!==r[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=r}setValue(e){this.__pendingValue=e}commit(){for(;b(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=w,e(this)}if(this.__pendingValue===w)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=w}}class O extends E{constructor(e,t,r){super(e,t,r),this.single=2===r.length&&""===r[0]&&""===r[1]}_createPart(){return new q(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class q extends T{}let R=!1;(()=>{try{const e={get capture(){return R=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class L{constructor(e,t,r){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=r,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;b(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=w,e(this)}if(this.__pendingValue===w)return;const e=this.__pendingValue,t=this.value,r=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),n=null!=e&&(null==t||r);r&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=A(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=w}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const A=e=>e&&(R?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);
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
 */function M(e){let t=I.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},I.set(e.type,t));let r=t.stringsArray.get(e.strings);if(void 0!==r)return r;const n=e.strings.join(o);return r=t.keyString.get(n),void 0===r&&(r=new c(e,e.getTemplateElement()),t.keyString.set(n,r)),t.stringsArray.set(e.strings,r),r}const I=new Map,j=new WeakMap;
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
 */const V=new
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
class{handleAttributeExpressions(e,t,r,n){const i=t[0];if("."===i){return new O(e,t.slice(1),r).parts}return"@"===i?[new L(e,t.slice(1),n.eventContext)]:"?"===i?[new N(e,t.slice(1),r)]:new E(e,t,r).parts}handleTextExpression(e){return new z(e)}};
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
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const B=(e,...t)=>new C(e,t,"html",V),D=(e,t)=>`${e}--${t}`;let U=!0;void 0===window.ShadyCSS?U=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),U=!1);const W=e=>t=>{const r=D(t.type,e);let n=I.get(r);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},I.set(r,n));let i=n.stringsArray.get(t.strings);if(void 0!==i)return i;const s=t.strings.join(o);if(i=n.keyString.get(s),void 0===i){const r=t.getTemplateElement();U&&window.ShadyCSS.prepareTemplateDom(r,e),i=new c(t,r),n.keyString.set(s,i)}return n.stringsArray.set(t.strings,i),i},H=["html","svg"],F=new Set,Q=(e,t,r)=>{F.add(e);const n=r?r.element:document.createElement("template"),i=t.querySelectorAll("style"),{length:o}=i;if(0===o)return void window.ShadyCSS.prepareTemplateStyles(n,e);const s=document.createElement("style");for(let e=0;e<o;e++){const t=i[e];t.parentNode.removeChild(t),s.textContent+=t.textContent}(e=>{H.forEach(t=>{const r=I.get(D(t,e));void 0!==r&&r.keyString.forEach(e=>{const{element:{content:t}}=e,r=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{r.add(e)}),g(e,r)})})})(e);const a=n.content;r?function(e,t,r=null){const{element:{content:n},parts:i}=e;if(null==r)return void n.appendChild(t);const o=document.createTreeWalker(n,_,null,!1);let s=m(i),a=0,l=-1;for(;o.nextNode();){for(l++,o.currentNode===r&&(a=$(t),r.parentNode.insertBefore(t,r));-1!==s&&i[s].index===l;){if(a>0){for(;-1!==s;)i[s].index+=a,s=m(i,s);return}s=m(i,s)}}}(r,s,a.firstChild):a.insertBefore(s,a.firstChild),window.ShadyCSS.prepareTemplateStyles(n,e);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)t.insertBefore(l.cloneNode(!0),t.firstChild);else if(r){a.insertBefore(s,a.firstChild);const e=new Set;e.add(s),g(r,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const J={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},X=(e,t)=>t!==e&&(t==t||e==e),G={attribute:!0,type:String,converter:J,reflect:!1,hasChanged:X},Y=1,K=4,Z=8,ee=16,te="finalized";class re extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,r)=>{const n=this._attributeNameForProperty(r,t);void 0!==n&&(this._attributeToPropertyMap.set(n,r),e.push(n))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=G){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const r="symbol"==typeof e?Symbol():`__${e}`,n=this.getPropertyDescriptor(e,r,t);void 0!==n&&Object.defineProperty(this.prototype,e,n)}static getPropertyDescriptor(e,t,r){return{get(){return this[t]},set(r){const n=this[e];this[t]=r,this._requestUpdate(e,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||G}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty(te)||e.finalize(),this[te]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const r of t)this.createProperty(r,e[r])}}static _attributeNameForProperty(e,t){const r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,r=X){return r(e,t)}static _propertyValueFromAttribute(e,t){const r=t.type,n=t.converter||J,i="function"==typeof n?n:n.fromAttribute;return i?i(e,r):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const r=t.type,n=t.converter;return(n&&n.toAttribute||J.toAttribute)(e,r)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,r){t!==r&&this._attributeToProperty(e,r)}_propertyToAttribute(e,t,r=G){const n=this.constructor,i=n._attributeNameForProperty(e,r);if(void 0!==i){const e=n._propertyValueToAttribute(t,r);if(void 0===e)return;this._updateState=this._updateState|Z,null==e?this.removeAttribute(i):this.setAttribute(i,e),this._updateState=this._updateState&~Z}}_attributeToProperty(e,t){if(this._updateState&Z)return;const r=this.constructor,n=r._attributeToPropertyMap.get(e);if(void 0!==n){const e=r.getPropertyOptions(n);this._updateState=this._updateState|ee,this[n]=r._propertyValueFromAttribute(t,e),this._updateState=this._updateState&~ee}}_requestUpdate(e,t){let r=!0;if(void 0!==e){const n=this.constructor,i=n.getPropertyOptions(e);n._valueHasChanged(this[e],t,i.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==i.reflect||this._updateState&ee||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,i))):r=!1}!this._hasRequestedUpdate&&r&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=this._updateState|K;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return this._updateState&K}get hasUpdated(){return this._updateState&Y}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(this._updateState&Y||(this._updateState=this._updateState|Y,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~K}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}re[te]=!0;
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
const ne=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:r,elements:n}=t;return{kind:r,elements:n,finisher(t){window.customElements.define(e,t)}}})(e,t),ie=(e,t)=>"method"!==t.kind||!t.descriptor||"value"in t.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}}:Object.assign(Object.assign({},t),{finisher(r){r.createProperty(t.key,e)}}),oe=(e,t,r)=>{t.constructor.createProperty(r,e)};function se(e){return(t,r)=>void 0!==r?oe(e,t,r):ie(e,t)}
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
const ae="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,le=Symbol();class ce{constructor(e,t){if(t!==le)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(ae?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const pe=(e,...t)=>{const r=t.reduce((t,r,n)=>t+(e=>{if(e instanceof ce)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(r)+e[n+1],e[0]);return new ce(r,le)};
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const de={};class ue extends re{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(void 0===e)this._styles=[];else if(Array.isArray(e)){const t=(e,r)=>e.reduceRight((e,r)=>Array.isArray(r)?t(r,e):(e.add(r),e),r),r=t(e,new Set),n=[];r.forEach(e=>n.unshift(e)),this._styles=n}else this._styles=[e]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?ae?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==de&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){return de}}ue.finalized=!0,ue.render=(e,t,r)=>{if(!r||"object"!=typeof r||!r.scopeName)throw new Error("The `scopeName` option is required.");const n=r.scopeName,o=j.has(t),s=U&&11===t.nodeType&&!!t.host,a=s&&!F.has(n),l=a?document.createDocumentFragment():t;if(((e,t,r)=>{let n=j.get(t);void 0===n&&(i(t,t.firstChild),j.set(t,n=new z(Object.assign({templateFactory:M},r))),n.appendInto(t)),n.setValue(e),n.commit()})(e,l,Object.assign({templateFactory:W(n)},r)),a){const e=j.get(l);j.delete(l);const r=e.value instanceof x?e.value.template:void 0;Q(n,l,r),i(t,t.firstChild),t.appendChild(l),j.set(t,e)}!o&&s&&window.ShadyCSS.styleElement(t.host)};var he,_e=[],ge="ResizeObserver loop completed with undelivered notifications.";!function(e){e.BORDER_BOX="border-box",e.CONTENT_BOX="content-box",e.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"}(he||(he={}));var $e,me=function(){function e(e,t,r,n){return this.x=e,this.y=t,this.width=r,this.height=n,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,Object.freeze(this)}return e.prototype.toJSON=function(){var e=this;return{x:e.x,y:e.y,top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.width,height:e.height}},e.fromRect=function(t){return new e(t.x,t.y,t.width,t.height)},e}(),fe=function(e){return e instanceof SVGElement&&"getBBox"in e},ye=function(e){if(fe(e)){var t=e.getBBox(),r=t.width,n=t.height;return!r&&!n}var i=e,o=i.offsetWidth,s=i.offsetHeight;return!(o||s||e.getClientRects().length)},be=function(e){var t,r,n=null===(r=null===(t=e)||void 0===t?void 0:t.ownerDocument)||void 0===r?void 0:r.defaultView;return!!(n&&e instanceof n.Element)},we="undefined"!=typeof window?window:{},ve=new WeakMap,xe=/auto|scroll/,Se=/^tb|vertical/,Ce=/msie|trident/i.test(we.navigator&&we.navigator.userAgent),ke=function(e){return parseFloat(e||"0")},Pe=function(e,t,r){return void 0===e&&(e=0),void 0===t&&(t=0),void 0===r&&(r=!1),Object.freeze({inlineSize:(r?t:e)||0,blockSize:(r?e:t)||0})},Ee=Object.freeze({devicePixelContentBoxSize:Pe(),borderBoxSize:Pe(),contentBoxSize:Pe(),contentRect:new me(0,0,0,0)}),Te=function(e,t){if(void 0===t&&(t=!1),ve.has(e)&&!t)return ve.get(e);if(ye(e))return ve.set(e,Ee),Ee;var r=getComputedStyle(e),n=fe(e)&&e.ownerSVGElement&&e.getBBox(),i=!Ce&&"border-box"===r.boxSizing,o=Se.test(r.writingMode||""),s=!n&&xe.test(r.overflowY||""),a=!n&&xe.test(r.overflowX||""),l=n?0:ke(r.paddingTop),c=n?0:ke(r.paddingRight),p=n?0:ke(r.paddingBottom),d=n?0:ke(r.paddingLeft),u=n?0:ke(r.borderTopWidth),h=n?0:ke(r.borderRightWidth),_=n?0:ke(r.borderBottomWidth),g=d+c,$=l+p,m=(n?0:ke(r.borderLeftWidth))+h,f=u+_,y=a?e.offsetHeight-f-e.clientHeight:0,b=s?e.offsetWidth-m-e.clientWidth:0,w=i?g+m:0,v=i?$+f:0,x=n?n.width:ke(r.width)-w-b,S=n?n.height:ke(r.height)-v-y,C=x+g+b+m,k=S+$+y+f,P=Object.freeze({devicePixelContentBoxSize:Pe(Math.round(x*devicePixelRatio),Math.round(S*devicePixelRatio),o),borderBoxSize:Pe(C,k,o),contentBoxSize:Pe(x,S,o),contentRect:new me(d,l,x,S)});return ve.set(e,P),P},ze=function(e,t,r){var n=Te(e,r),i=n.borderBoxSize,o=n.contentBoxSize,s=n.devicePixelContentBoxSize;switch(t){case he.DEVICE_PIXEL_CONTENT_BOX:return s;case he.BORDER_BOX:return i;default:return o}},Ne=function(e){var t=Te(e);this.target=e,this.contentRect=t.contentRect,this.borderBoxSize=[t.borderBoxSize],this.contentBoxSize=[t.contentBoxSize],this.devicePixelContentBoxSize=[t.devicePixelContentBoxSize]},Oe=function(e){if(ye(e))return 1/0;for(var t=0,r=e.parentNode;r;)t+=1,r=r.parentNode;return t},qe=function(){var e=1/0,t=[];_e.forEach((function(r){if(0!==r.activeTargets.length){var n=[];r.activeTargets.forEach((function(t){var r=new Ne(t.target),i=Oe(t.target);n.push(r),t.lastReportedSize=ze(t.target,t.observedBox),i<e&&(e=i)})),t.push((function(){r.callback.call(r.observer,n,r.observer)})),r.activeTargets.splice(0,r.activeTargets.length)}}));for(var r=0,n=t;r<n.length;r++){(0,n[r])()}return e},Re=function(e){_e.forEach((function(t){t.activeTargets.splice(0,t.activeTargets.length),t.skippedTargets.splice(0,t.skippedTargets.length),t.observationTargets.forEach((function(r){r.isActive()&&(Oe(r.target)>e?t.activeTargets.push(r):t.skippedTargets.push(r))}))}))},Le=function(){var e,t=0;for(Re(t);_e.some((function(e){return e.activeTargets.length>0}));)t=qe(),Re(t);return _e.some((function(e){return e.skippedTargets.length>0}))&&("function"==typeof ErrorEvent?e=new ErrorEvent("error",{message:ge}):((e=document.createEvent("Event")).initEvent("error",!1,!1),e.message=ge),window.dispatchEvent(e)),t>0},Ae=[],Me=function(e){if(!$e){var t=0,r=document.createTextNode("");new MutationObserver((function(){return Ae.splice(0).forEach((function(e){return e()}))})).observe(r,{characterData:!0}),$e=function(){r.textContent=""+(t?t--:t++)}}Ae.push(e),$e()},Ie=0,je={attributes:!0,characterData:!0,childList:!0,subtree:!0},Ve=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],Be=function(e){return void 0===e&&(e=0),Date.now()+e},De=!1,Ue=new(function(){function e(){var e=this;this.stopped=!0,this.listener=function(){return e.schedule()}}return e.prototype.run=function(e){var t=this;if(void 0===e&&(e=250),!De){De=!0;var r,n=Be(e);r=function(){var r=!1;try{r=Le()}finally{if(De=!1,e=n-Be(),!Ie)return;r?t.run(1e3):e>0?t.run(e):t.start()}},Me((function(){requestAnimationFrame(r)}))}},e.prototype.schedule=function(){this.stop(),this.run()},e.prototype.observe=function(){var e=this,t=function(){return e.observer&&e.observer.observe(document.body,je)};document.body?t():we.addEventListener("DOMContentLoaded",t)},e.prototype.start=function(){var e=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),Ve.forEach((function(t){return we.addEventListener(t,e.listener,!0)})))},e.prototype.stop=function(){var e=this;this.stopped||(this.observer&&this.observer.disconnect(),Ve.forEach((function(t){return we.removeEventListener(t,e.listener,!0)})),this.stopped=!0)},e}()),We=function(e){!Ie&&e>0&&Ue.start(),!(Ie+=e)&&Ue.stop()},He=function(){function e(e,t){this.target=e,this.observedBox=t||he.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return e.prototype.isActive=function(){var e,t=ze(this.target,this.observedBox,!0);return e=this.target,fe(e)||function(e){switch(e.tagName){case"INPUT":if("image"!==e.type)break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1}(e)||"inline"!==getComputedStyle(e).display||(this.lastReportedSize=t),this.lastReportedSize.inlineSize!==t.inlineSize||this.lastReportedSize.blockSize!==t.blockSize},e}(),Fe=function(e,t){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=e,this.callback=t},Qe=new WeakMap,Je=function(e,t){for(var r=0;r<e.length;r+=1)if(e[r].target===t)return r;return-1},Xe=function(){function e(){}return e.connect=function(e,t){var r=new Fe(e,t);Qe.set(e,r)},e.observe=function(e,t,r){var n=Qe.get(e),i=0===n.observationTargets.length;Je(n.observationTargets,t)<0&&(i&&_e.push(n),n.observationTargets.push(new He(t,r&&r.box)),We(1),Ue.schedule())},e.unobserve=function(e,t){var r=Qe.get(e),n=Je(r.observationTargets,t),i=1===r.observationTargets.length;n>=0&&(i&&_e.splice(_e.indexOf(r),1),r.observationTargets.splice(n,1),We(-1))},e.disconnect=function(e){var t=this,r=Qe.get(e);r.observationTargets.slice().forEach((function(r){return t.unobserve(e,r.target)})),r.activeTargets.splice(0,r.activeTargets.length)},e}(),Ge=function(){function e(e){if(0===arguments.length)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if("function"!=typeof e)throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");Xe.connect(this,e)}return e.prototype.observe=function(e,t){if(0===arguments.length)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!be(e))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");Xe.observe(this,e,t)},e.prototype.unobserve=function(e){if(0===arguments.length)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!be(e))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");Xe.unobserve(this,e)},e.prototype.disconnect=function(){Xe.disconnect(this)},e.toString=function(){return"function ResizeObserver () { [polyfill code] }"},e}();
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
const Ye=new WeakMap,Ke=y(e=>t=>{if(!(t instanceof T)||t instanceof q||"style"!==t.committer.name||t.committer.parts.length>1)throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");const{committer:r}=t,{style:n}=r.element;let i=Ye.get(t);void 0===i&&(n.cssText=r.strings.join(" "),Ye.set(t,i=new Set)),i.forEach(t=>{t in e||(i.delete(t),-1===t.indexOf("-")?n[t]=null:n.removeProperty(t))});for(const t in e)i.add(t),-1===t.indexOf("-")?n[t]=e[t]:n.setProperty(t,e[t])});customElements.define("card-icon",class extends ue{constructor(){super(...arguments),this.iconLigature="",this.fillGradientTarget="top"}static get properties(){return{iconLigature:{type:String},fillColor:{type:String},fillGradient:{type:String},fillGradientTarget:{type:String}}}static get styles(){return pe`
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
    `}render(){return B`
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
const Ze=new WeakMap,et=y(e=>t=>{if(!(t instanceof z))throw new Error("unsafeHTML can only be used in text bindings");const r=Ze.get(t);if(void 0!==r&&k(e)&&e===r.value&&t.value===r.fragment)return;const n=document.createElement("template");n.innerHTML=e;const i=document.importNode(n.content,!0);t.setValue(i),Ze.set(t,{value:e,fragment:i})}),tt=pe`
  font-family: 'Unchained', serif;
  line-height: 1.1;
`,rt=pe`
  font-family: 'Open Sans', sans-serif;
`,nt=pe`white`,it=(pe`black`,pe`rgb(51, 51, 51)`),ot=pe`#f9f9f9`,st=(pe`#f1f1f1`,pe`
  ${tt}
  font-weight: 700;
  line-height: 0.8;
  text-align: center;
  color: ${nt};
`),at=()=>pe`
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
    background: ${ot};
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
    background: ${it};
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
    ${st}
    position: absolute;
  }

  .card__nameText {
    position: absolute;
    white-space: nowrap;
    display: flex;
    ${st}
  }

  .card__nameText__inner {
    margin: auto;
  }

  .card__attackText {
    position: absolute;
    ${st}
  }

  .card__healthText {
    position: absolute;
    ${st}
  }

  .card__tribeText {
    position: absolute;
    text-transform: capitalize;
    display: flex;
    ${st}
  }

  .card__tribeText__inner {
    margin: auto;
  }

  .card__setIcon {
    position: absolute;
    color: white;
  }
`;var lt=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let ct=class extends ue{static get styles(){return pe`
      :host {
        position: absolute;
        text-align: center;
        color: black;
        display: flex;
      }

      .centered {
        margin: auto;
        ${rt}
      }
    `}updated(e){}render(){const{text:e,ch:t,cw:r,tribe:n,type:i}=this,o=e.replace(/ ([^ ]*)$/,"&nbsp;$1"),s=e.split("").length;let a=3.8*t,l=1.25,c="normal";return s>=150?(a=2.8*t,l=1.1,c="extraSquishy"):s>=90&&(a=3.4*t,l=1.1,c="squishy"),B`
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
        ${et(o)}
      </div>
    `}};lt([se({type:String})],ct.prototype,"text",void 0),lt([se({type:String})],ct.prototype,"tribe",void 0),lt([se({type:String})],ct.prototype,"type",void 0),lt([se({type:Number})],ct.prototype,"ch",void 0),lt([se({type:Number})],ct.prototype,"cw",void 0),ct=lt([ne("autofit-description-text")],ct);const pt=250,dt=375,ut=500,ht=720,_t=1024,gt=1280,$t=1440,mt=1920,ft=256,yt=512,bt=720,wt=1024,vt=1280,xt=1440,St=1920,Ct=256,kt=512;function Pt(e){return"god power"===e?"power":e}const Et="https://images.godsunchained.com";r(4);var Tt=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},zt=function(e,t,r,n){return new(r||(r=Promise))((function(i,o){function s(e){try{l(n.next(e))}catch(e){o(e)}}function a(e){try{l(n.throw(e))}catch(e){o(e)}}function l(e){e.done?i(e.value):new r((function(t){t(e.value)})).then(s,a)}l((n=n.apply(e,t||[])).next())}))};const Nt=["plain","plain","bronze","iron","meteorite","shadow","gold","diamond"],Ot=["diamond","gold","shadow","meteorite","plain"],qt=new Ge(e=>{e.forEach(e=>{e.target.handleResize(e)})});let Rt=class extends ue{constructor(){super(),this.quality=5,this.useLegacyQualityMapping=!1,this.protoCardData={type:"",effect:"",name:"",rarity:"",god:"",set:"",mana:"",id:"",attack:null,health:null,tribe:"",art_id:""},this.loading=!0,this.quality=0,this.ch=.01*this.offsetHeight,this.cw=.01*this.offsetWidth}static get styles(){return at()}connectedCallback(){super.connectedCallback(),qt.observe(this)}disconnectedCallback(){super.disconnectedCallback(),qt.unobserve(this)}updated(e){e.forEach((e,t)=>{"protoId"===t?this.getProtoDataFromApi():"inputProtoData"===t&&this.getProtoDataFromInput()})}handleResize(e){const t=e.target.shadowRoot.children[0];this.ch=.01*t.offsetHeight,this.cw=.01*t.offsetWidth,this.requestUpdate()}fetchProtoData(){return zt(this,void 0,void 0,(function*(){return this.loading=!0,fetch(`https://api.godsunchained.com/v0/proto/${this.protoId}`).then(e=>e.json())}))}getProtoDataFromApi(){return zt(this,void 0,void 0,(function*(){return this.fetchProtoData().then(e=>{const{id:t,type:r,attack:n,health:i,effect:o,name:s,rarity:a,god:l,mana:c,set:p,tribe:d,art_id:u}=e;return this.protoCardData={id:t,type:r,attack:n.Int64,health:i.Int64,effect:o,name:s,rarity:a,god:l,mana:c,set:p,tribe:d.String,art_id:u},this.loading=!1,this.requestUpdate(),e})}))}getProtoDataFromInput(){this.protoCardData=Object.assign({},this.inputProtoData),this.loading=!1,this.requestUpdate()}render(){const e=this.useLegacyQualityMapping?Nt[this.quality]:Ot[this.quality-1],t="mythic"===this.protoCardData.rarity;return B`
      <div class="card__innerRatioConstrainer">
        ${this.loading?(()=>B`
  <div class="card__loading">
    <img
      class="card__loading__img"
      src="${r(3)}"
      alt="immutable loading spinner"
    />
  </div>
`)():B`
              ${(({id:e,responsiveSrcsetSizes:t=`${dt}px`})=>B`
    <picture class="card__artwork">
      <source
        srcset="
          ${Et}/art2/${dt}/${e}.webp ${pt}w,
          ${Et}/art2/${ut}/${e}.webp ${dt}w,
          ${Et}/art2/${ht}/${e}.webp ${ut}w,
          ${Et}/art2/${_t}/${e}.webp ${ht}w,
          ${Et}/art2/${gt}/${e}.webp ${_t}w,
          ${Et}/art2/${$t}/${e}.webp ${gt}w,
          ${Et}/art2/${mt}/${e}.webp ${$t}w
        "
        sizes="${t}"
        type="image/webp"
      />
      <source
        srcset="
          ${Et}/art2/${dt}/${e}.jpg ${pt}w,
          ${Et}/art2/${ut}/${e}.jpg ${dt}w,
          ${Et}/art2/${ht}/${e}.jpg ${ut}w,
          ${Et}/art2/${_t}/${e}.jpg ${ht}w,
          ${Et}/art2/${gt}/${e}.jpg ${_t}w,
          ${Et}/art2/${$t}/${e}.jpg ${gt}w,
          ${Et}/art2/${mt}/${e}.jpg ${$t}w
        "
        sizes="${t}"
        type="image/jpg"
      />
      <img
        srcset="${Et}/art2/${pt}/${e}.jpg"
        class="card__artwork__img"
      />
    </picture>
  `)({id:this.protoCardData.id,responsiveSrcsetSizes:this.responsiveSrcsetSizes})}
              ${t?(({responsiveSrcsetSizes:e=`${yt}px`,art_id:t,type:r,god:n})=>B`
    <picture class="card__baseLayer">
      <source
        srcset="
          ${Et}/border-layers/types/${r}/${yt}/${r}_${t}.webp ${ft}w,
          ${Et}/border-layers/types/${r}/${bt}/${r}_${t}.webp ${yt}w,
          ${Et}/border-layers/types/${r}/${wt}/${r}_${t}.webp ${bt}w,
          ${Et}/border-layers/types/${r}/${vt}/${r}_${t}.webp ${wt}w,
          ${Et}/border-layers/types/${r}/${xt}/${r}_${t}.webp ${vt}w,
          ${Et}/border-layers/types/${r}/${St}/${r}_${t}.webp ${xt}w
        "
        sizes="${e}"
        type="image/webp"
      />
      <source
        srcset="
          ${Et}/border-layers/types/${r}/${yt}/${r}_${t}.png ${ft}w,
          ${Et}/border-layers/types/${r}/${bt}/${r}_${t}.png ${yt}w,
          ${Et}/border-layers/types/${r}/${wt}/${r}_${t}.png ${bt}w,
          ${Et}/border-layers/types/${r}/${vt}/${r}_${t}.png ${wt}w,
          ${Et}/border-layers/types/${r}/${xt}/${r}_${t}.png ${vt}w,
          ${Et}/border-layers/types/${r}/${St}/${r}_${t}.png ${xt}w
        "
        sizes="${e}"
        type="image/png"
      />

      <img
        srcset="
          ${Et}/border-layers/types/${r}/${ft}/${r}_${t}.png
        "
        class="card__baseLayer__img"
      />
    </picture>

    <picture class="card__manaLayer">
      <source
        srcset="
          ${Et}/border-layers/rosettes/mythics/${yt}/mythic_${t}.webp ${ft}w,
          ${Et}/border-layers/rosettes/mythics/${bt}/mythic_${t}.webp ${yt}w,
          ${Et}/border-layers/rosettes/mythics/${wt}/mythic_${t}.webp ${bt}w,
          ${Et}/border-layers/rosettes/mythics/${vt}/mythic_${t}.webp ${wt}w,
          ${Et}/border-layers/rosettes/mythics/${xt}/mythic_${t}.webp ${vt}w,
          ${Et}/border-layers/rosettes/mythics/${St}/mythic_${t}.webp ${xt}w
        "
        sizes="${e}"
        type="image/webp"
      />
      <source
        srcset="
          ${Et}/border-layers/rosettes/mythics/${yt}/mythic_${t}.png ${ft}w,
          ${Et}/border-layers/rosettes/mythics/${bt}/mythic_${t}.png ${yt}w,
          ${Et}/border-layers/rosettes/mythics/${wt}/mythic_${t}.png ${bt}w,
          ${Et}/border-layers/rosettes/mythics/${vt}/mythic_${t}.png ${wt}w,
          ${Et}/border-layers/rosettes/mythics/${xt}/mythic_${t}.png ${vt}w,
          ${Et}/border-layers/rosettes/mythics/${St}/mythic_${t}.png ${xt}w
        "
        sizes="${e}"
        type="image/png"
      />

      <img
        srcset="
          ${Et}/border-layers/rosettes/${n}/${yt}/mythic_${t}.png
        "
        class="card__manaLayer__img card__manaLayer__img--mythic"
      />
    </picture>
  `)(Object.assign({responsiveSrcsetSizes:this.responsiveSrcsetSizes},this.protoCardData)):(({responsiveSrcsetSizes:e=`${yt}px`,type:t,qualityName:r,rarity:n,god:i,set:o,tribe:s})=>(t=Pt(t),B`
    <picture class="card__baseLayer">
      <source
        srcset="
          ${Et}/border-layers/types/${t}/${yt}/${t}_${r}.webp ${ft}w,
          ${Et}/border-layers/types/${t}/${bt}/${t}_${r}.webp ${yt}w,
          ${Et}/border-layers/types/${t}/${wt}/${t}_${r}.webp ${bt}w,
          ${Et}/border-layers/types/${t}/${vt}/${t}_${r}.webp ${wt}w,
          ${Et}/border-layers/types/${t}/${xt}/${t}_${r}.webp ${vt}w,
          ${Et}/border-layers/types/${t}/${St}/${t}_${r}.webp ${xt}w
        "
        sizes="${e}"
        type="image/webp"
      />

      <source
        srcset="
          ${Et}/border-layers/types/${t}/${yt}/${t}_${r}.png ${ft}w,
          ${Et}/border-layers/types/${t}/${bt}/${t}_${r}.png ${yt}w,
          ${Et}/border-layers/types/${t}/${wt}/${t}_${r}.png ${bt}w,
          ${Et}/border-layers/types/${t}/${vt}/${t}_${r}.png ${wt}w,
          ${Et}/border-layers/types/${t}/${xt}/${t}_${r}.png ${vt}w,
          ${Et}/border-layers/types/${t}/${St}/${t}_${r}.png ${xt}w
        "
        sizes="${e}"
        type="image/png"
      />
      <img
        srcset="
          ${Et}/border-layers/types/${t}/${ft}/${t}_${r}.png
        "
        class="card__baseLayer__img"
      />
    </picture>

    <picture class="card__manaLayer">
      <source
        srcset="
          ${Et}/border-layers/rosettes/${i}/${yt}/${i}_${r}.webp ${ft}w,
          ${Et}/border-layers/rosettes/${i}/${bt}/${i}_${r}.webp ${yt}w,
          ${Et}/border-layers/rosettes/${i}/${wt}/${i}_${r}.webp ${bt}w,
          ${Et}/border-layers/rosettes/${i}/${vt}/${i}_${r}.webp ${wt}w,
          ${Et}/border-layers/rosettes/${i}/${xt}/${i}_${r}.webp ${vt}w,
          ${Et}/border-layers/rosettes/${i}/${St}/${i}_${r}.webp ${xt}w
        "
        sizes="${e}"
        type="image/webp"
      />
      <source
        srcset="
          ${Et}/border-layers/rosettes/${i}/${yt}/${i}_${r}.png ${ft}w,
          ${Et}/border-layers/rosettes/${i}/${bt}/${i}_${r}.png ${yt}w,
          ${Et}/border-layers/rosettes/${i}/${wt}/${i}_${r}.png ${bt}w,
          ${Et}/border-layers/rosettes/${i}/${vt}/${i}_${r}.png ${wt}w,
          ${Et}/border-layers/rosettes/${i}/${xt}/${i}_${r}.png ${vt}w,
          ${Et}/border-layers/rosettes/${i}/${St}/${i}_${r}.png ${xt}w
        "
        sizes="${e}"
        type="image/png"
      />
      <img
        srcset="
          ${Et}/border-layers/rosettes/${i}/${ft}/${i}_${r}.png
        "
        class="card__manaLayer__img"
      />
    </picture>

    ${"common"!==n?B`
          <picture class="card__rarityLayer">
            <source
              srcset="
              ${Et}/border-layers/gems/${ft}/rarity_${n}.webp ${ft}w,
                ${Et}/border-layers/gems/${yt}/rarity_${n}.webp ${yt}w,
                ${Et}/border-layers/gems/${bt}/rarity_${n}.webp ${bt}w,
                ${Et}/border-layers/gems/${wt}/rarity_${n}.webp ${wt}w,
                ${Et}/border-layers/gems/${vt}/rarity_${n}.webp ${vt}w,
                ${Et}/border-layers/gems/${xt}/rarity_${n}.webp ${xt}w,
                ${Et}/border-layers/gems/${St}/rarity_${n}.webp ${St}w
              "
              sizes="${e}"
              type="image/webp"
            />
            <source
              srcset="
              ${Et}/border-layers/gems/${ft}/rarity_${n}.png ${ft}w,
                ${Et}/border-layers/gems/${yt}/rarity_${n}.png ${yt}w,
                ${Et}/border-layers/gems/${bt}/rarity_${n}.png ${bt}w,
                ${Et}/border-layers/gems/${wt}/rarity_${n}.png ${wt}w,
                ${Et}/border-layers/gems/${vt}/rarity_${n}.webp ${vt}w,
                ${Et}/border-layers/gems/${xt}/rarity_${n}.webp ${xt}w,
                ${Et}/border-layers/gems/${St}/rarity_${n}.png ${St}w
              "
              sizes="${e}"
              type="image/png"
            />
            <img
              srcset="
                ${Et}/border-layers/gems/${ft}/rarity_${n}.png
              "
              class="card__rarityLayer__img"
            />
          </picture>
        `:null}
    ${"legendary"===n?B`
          <picture class="card__wreathLayer">
            <source
              srcset="
                ${Et}/border-layers/wreaths/${ft}/wreath_${r}.webp ${ft}w,
                ${Et}/border-layers/wreaths/${yt}/wreath_${r}.webp ${yt}w,
                ${Et}/border-layers/wreaths/${bt}/wreath_${r}.webp ${bt}w,
                ${Et}/border-layers/wreaths/${wt}/wreath_${r}.webp ${wt}w,
                ${Et}/border-layers/wreaths/${vt}/wreath_${r}.webp ${vt}w,
                ${Et}/border-layers/wreaths/${xt}/wreath_${r}.webp ${xt}w,
                ${Et}/border-layers/wreaths/${St}/wreath_${r}.webp ${St}w
              "
              sizes="${e}"
              type="image/webp"
            />

            <source
              srcset="
              ${Et}/border-layers/wreaths/${ft}/wreath_${r}.png ${ft}w,
                ${Et}/border-layers/wreaths/${yt}/wreath_${r}.png ${yt}w,
                ${Et}/border-layers/wreaths/${bt}/wreath_${r}.png ${bt}w,
                ${Et}/border-layers/wreaths/${wt}/wreath_${r}.png ${wt}w,
                ${Et}/border-layers/wreaths/${vt}/wreath_${r}.png ${vt}w,
                ${Et}/border-layers/wreaths/${xt}/wreath_${r}.png ${xt}w,
                ${Et}/border-layers/wreaths/${St}/wreath_${r}.png ${St}w
              "
              sizes="${e}"
              type="image/png"
            />
            <img
              srcset="
                ${Et}/border-layers/wreaths/${ft}/wreath_${r}.png
              "
              class="card__wreathLayer__img"
            />
          </picture>
        `:null}
    ${"core"===o&&"plain"===r?B`
          <picture class="card__lockIconLayer">
            <source
              srcset="
                ${Et}/border-layers/locks/${Ct}/lock_${r}.webp ${Ct}w,
                ${Et}/border-layers/locks/${kt}/lock_${r}.webp ${kt}w,
              "
              type="image/webp"
            />

            <source
              srcset="
                ${Et}/border-layers/locks/${Ct}/lock_${r}.png ${Ct}w,
                ${Et}/border-layers/locks/${kt}/lock_${r}.png ${kt}w,
              "
              type="image/png"
            />

            <img
              srcset="
                ${Et}/border-layers/locks/lock_${r}.png
              "
              class="card__lockIconLayer__img"
            />
          </picture>
        `:null}
    ${s?B`
          <picture class="card__tribeBarLayer">
            <source
              srcset="
                ${Et}/border-layers/tribe_bars/${ft}/tribebar_${r}.webp ${ft}w,
                ${Et}/border-layers/tribe_bars/${yt}/tribebar_${r}.webp ${yt}w,
                ${Et}/border-layers/tribe_bars/${bt}/tribebar_${r}.webp ${bt}w,
                ${Et}/border-layers/tribe_bars/${wt}/tribebar_${r}.webp ${wt}w,
              "
              sizes="${e}"
              type="image/webp"
            />
            <source
              srcset="
                ${Et}/border-layers/tribe_bars/${ft}/tribebar_${r}.png ${ft}w,
                ${Et}/border-layers/tribe_bars/${yt}/tribebar_${r}.png ${yt}w,
                ${Et}/border-layers/tribe_bars/${bt}/tribebar_${r}.png ${bt}w,
                ${Et}/border-layers/tribe_bars/${wt}/tribebar_${r}.png ${wt}w,
              "
              sizes="${e}"
              type="image/png"
            />

            <img
              srcset="
                ${Et}/border-layers/tribe_bars/${St}/tribebar_${n}.png
              "
              class="card__tribeBarLayer__img"
            />
          </picture>
        `:null}
  `))(Object.assign({qualityName:e,responsiveSrcsetSizes:this.responsiveSrcsetSizes},this.protoCardData))}
              ${(({type:e="",name:t="⃠",effect:r="⃠",mana:n="⃠",attack:i="⃠",health:o="⃠",tribe:s="",cardSet:a="",ch:l=0,cw:c=0})=>{e=Pt(e);const p=RegExp(/creature|weapon/).test(e),d=t.split("").length>=20,u=Math.floor(.5*l),h=`${0===u?1:u}px`,_="rgba(0, 0, 0, 1)",g=`0 0 ${h} ${_}, 0 0 ${h} ${_}, 0 0 ${h} ${_}`,$=Ke({fontSize:`${10.5*l}px`,top:`${6.85*l}px`,left:`${9.5*c}px`,width:`${19*c}px`,textShadow:g}),m=Ke({fontSize:`${d?3.9*l:4.93*l}px`,bottom:`${32.85*l}px`,height:`${9*l}px`,left:`${13.25*c}px`,right:`${5.3*c}px`,textShadow:g}),f=Ke({fontSize:`${9.5*l}px`,bottom:`${4.5*l}px`,width:`${15*c}px`,left:`${10.5*c}px`,textShadow:g}),y=Ke({fontSize:`${9.5*l}px`,width:`${16*c}px`,bottom:`${4.6*l}px`,right:`${2.5*c}px`,textShadow:g}),b=Ke({fontSize:`${3.2*l}px`,bottom:`${3.1*l}px`,height:`${4.82*l}px`,left:`${30.5*c}px`,right:`${23*c}px`,textShadow:g}),w=Ke({fontSize:`${6*l}px`,top:`${10*l}px`,right:`${9*c}px`});return B`
    <div class="card__manaText" style=${$}>
      ${n}
    </div>

    <div
      class="card__nameText ${d?"card__nameText--crammed":""}"
      style=${m}
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

    ${p?B`
          <div class="card__attackText" style=${f}>
            ${i}
          </div>

          <div class="card__healthText" style=${y}>
            ${o}
          </div>
        `:null}
    ${s?B`
          <div class="card__tribeText" style=${b}>
            <div class="card__tribeText__inner">
              ${s}
            </div>
          </div>
        `:null}
    ${"mythic"!==a?B`
          <card-icon
            style=${w}
            class="card__setIcon"
            iconLigature=${`set_${a}`}
          ></card-icon>
        `:null}
  `})(Object.assign({ch:this.ch,cw:this.cw},this.protoCardData,{cardSet:this.protoCardData.set}))}
            `}
      </div>
    `}};Tt([se({type:Number})],Rt.prototype,"protoId",void 0),Tt([se({type:Number})],Rt.prototype,"quality",void 0),Tt([se({type:Object})],Rt.prototype,"inputProtoData",void 0),Tt([se({type:String})],Rt.prototype,"responsiveSrcsetSizes",void 0),Tt([se({type:Boolean})],Rt.prototype,"useLegacyQualityMapping",void 0),Rt=Tt([ne("composited-card")],Rt);const Lt=pe`
  font-family: 'Unchained', serif;
  line-height: 1.1;
`,At=pe`
  font-family: 'Open Sans', sans-serif;
  line-height: 1.5;
`,Mt=pe`black`,It=pe`white`,jt=pe`#f9f9f9`,Vt=(pe`#f1f1f1`,pe`65px`),Bt=pe`100px`,Dt=pe`#282828`,Ut=pe`#333`,Wt=pe`rgba(255,255,255,0.15)`,Ht=[pe`#8295A2`,pe`#8295A2`,pe`#6A8B35`,pe`#3D91B9`,pe`#84343E`,pe`#B461C5`,pe`#E5D93C`,pe`#94E6FB`,pe`white`],Ft=pe`#9f78dd`,Qt=(e=0)=>pe`
  width: 100%;
  cursor: pointer;
  background: ${Dt};
  border: 2px solid ${Wt};
  padding: 6px;
`,Jt=(e=0)=>pe`
  height: 20px;
  width: 38px;
  border-radius: 28px;
  background: ${Ht[e]};
  cursor: pointer;
  -webkit-appearance: none;
`;var Xt=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Gt=class extends ue{constructor(){super(),this.currentProtoId=Math.floor(99*Math.random()+1),this.currentQuality=Math.floor(4*Math.random()+1),this.currentQualityInWords=Ot[this.currentQuality-1];const e=this.getUrlParams(),t=e.get("protoid"),r=e.get("quality");null!==t&&(this.currentProtoId=parseInt(t,10)),null!==r&&(this.currentQuality=parseInt(r,10),this.currentQualityInWords=Ot[this.currentQuality-1]),null!==t&&null!==r&&this.updatePageImageMetadata(),fetch("https://dev.godsunchained.com/proto?format=flat").then(e=>e.json()).then(e=>{this.protosCollection=e,this.currentProtoData=Object.assign({},e[this.currentProtoId],{id:this.currentProtoId}),this.updatePageMetadata()}).catch(e=>console.error(e))}static get styles(){return(()=>pe`
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
    ${At}
  }

  .appHeader {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: ${Vt};
    background: white;
    border-bottom: 2px solid ${jt};
    text-align: center;
    line-height: calc(${Vt} - 3);
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
    ${At}
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
    border: 1px solid ${Ft};
    color: ${Ft};
    font-weight: 400;
    display: inline-block;
    vertical-align: top;
    margin-top: -5px;
    cursor: defualt;
  }

  .appHeader__title__sup:hover {
    background-color: ${Ft};
    color: ${It};
  }

  .appContainer {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: ${Vt};
  }

  .appContainer::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50vh;
    background: ${Ut};
  }

  .appContainer__intro {
    width: 50%;
    text-align: center;
    color: #b8b8b8;
    flex-grow: 0;
    margin: 20px 15px 0;
  }

  .appContainer__intro a {
    color: ${Mt};
    text-decoration: none;
  }

  .appContainer__intro a:hover {
    text-decoration: underline;
  }

  .appContainer__controls__title {
    ${Lt}
    font-size: 18px;
    text-transform: uppercase;
    color: ${It};
    position: absolute;
    left: 20px;
    top: 0px;
    transform: translateY(-150%);
    margin: 0;
    text-shadow: 0 1px 0 ${Ut}, 1px 0 0 ${Ut},
      1px 1px 0 ${Ut}, -1px 0 0 ${Ut},
      -1px -1px 0 ${Ut}, 0 -1px 0 ${Ut};
  }

  .appContainer__fab {
    position: fixed;
    bottom: ${Bt};
    right: 25px;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: ${Ft};
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
    background: ${It};
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
    margin-bottom: calc(${Bt} + 30px);
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
    height: ${Bt};
    z-index: 2;
    background: ${Dt};
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
    border: 2px solid ${Wt};
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
    color: ${Ht[1]};
  }

  .quality--bronze {
    color: ${Ht[2]};
  }

  .quality--iron {
    color: ${Ht[3]};
  }

  .quality--meteorite {
    color: ${Ht[4]};
  }

  .quality--shadow {
    color: ${Ht[5]};
  }

  .quality--gold {
    color: ${Ht[6]};
  }

  .quality--diamond {
    color: ${Ht[7]};
  }

  .quality--mythic {
    color: ${Ht[8]};
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
    ${Qt(0)}
  }
  .appContainer__controls__panel__rangeSlider.quality--bronze::-webkit-slider-runnable-track {
    ${Qt(2)}
  }
  .appContainer__controls__panel__rangeSlider.quality--iron::-webkit-slider-runnable-track {
    ${Qt(3)}
  }
  .appContainer__controls__panel__rangeSlider.quality--meteorite::-webkit-slider-runnable-track {
    ${Qt(4)}
  }
  .appContainer__controls__panel__rangeSlider.quality--shadow::-webkit-slider-runnable-track {
    ${Qt(5)}
  }
  .appContainer__controls__panel__rangeSlider.quality--gold::-webkit-slider-runnable-track {
    ${Qt(6)}
  }
  .appContainer__controls__panel__rangeSlider.quality--diamond::-webkit-slider-runnable-track {
    ${Qt(7)}
  }
  .appContainer__controls__panel__rangeSlider.quality--mythic::-webkit-slider-runnable-track {
    ${Qt(8)}
  }

  .appContainer__controls__panel__rangeSlider.quality--plain::-webkit-slider-thumb {
    ${Jt(0)}
  }
  .appContainer__controls__panel__rangeSlider.quality--bronze::-webkit-slider-thumb {
    ${Jt(2)}
  }
  .appContainer__controls__panel__rangeSlider.quality--iron::-webkit-slider-thumb {
    ${Jt(3)}
  }
  .appContainer__controls__panel__rangeSlider.quality--meteorite::-webkit-slider-thumb {
    ${Jt(4)}
  }
  .appContainer__controls__panel__rangeSlider.quality--shadow::-webkit-slider-thumb {
    ${Jt(5)}
  }
  .appContainer__controls__panel__rangeSlider.quality--gold::-webkit-slider-thumb {
    ${Jt(6)}
  }
  .appContainer__controls__panel__rangeSlider.quality--diamond::-webkit-slider-thumb {
    ${Jt(7)}
  }
  .appContainer__controls__panel__rangeSlider.quality--mythic::-webkit-slider-thumb {
    ${Jt(8)}
  }

  /* FIREFOX: */

  .appContainer__controls__panel__rangeSlider.quality--plain::-moz-range-track {
    ${Qt(0)}
  }
  .appContainer__controls__panel__rangeSlider.quality--bronze::-moz-range-track {
    ${Qt(2)}
  }
  .appContainer__controls__panel__rangeSlider.quality--iron::-moz-range-track {
    ${Qt(3)}
  }
  .appContainer__controls__panel__rangeSlider.quality--meteorite::-moz-range-track {
    ${Qt(4)}
  }
  .appContainer__controls__panel__rangeSlider.quality--shadow::-moz-range-track {
    ${Qt(5)}
  }
  .appContainer__controls__panel__rangeSlider.quality--gold::-moz-range-track {
    ${Qt(6)}
  }
  .appContainer__controls__panel__rangeSlider.quality--diamond::-moz-range-track {
    ${Qt(7)}
  }
  .appContainer__controls__panel__rangeSlider.quality--mythic::-moz-range-track {
    ${Qt(8)}
  }

  .appContainer__controls__panel__rangeSlider.quality--plain::-moz-range-thumb {
    ${Jt(0)}
  }
  .appContainer__controls__panel__rangeSlider.quality--bronze::-moz-range-thumb {
    ${Jt(2)}
  }
  .appContainer__controls__panel__rangeSlider.quality--iron::-moz-range-thumb {
    ${Jt(3)}
  }
  .appContainer__controls__panel__rangeSlider.quality--meteorite::-moz-range-thumb {
    ${Jt(4)}
  }
  .appContainer__controls__panel__rangeSlider.quality--shadow::-moz-range-thumb {
    ${Jt(5)}
  }
  .appContainer__controls__panel__rangeSlider.quality--gold::-moz-range-thumb {
    ${Jt(6)}
  }
  .appContainer__controls__panel__rangeSlider.quality--diamond::-moz-range-thumb {
    ${Jt(7)}
  }
  .appContainer__controls__panel__rangeSlider.quality--mythic::-moz-range-thumb {
    ${Jt(8)}
  }
`)()}updated(e){void 0===e.get("currentProtoId")&&void 0===e.get("currentQuality")||(this.updateUrlParams(),this.updatePageMetadata())}updatePageMetadata(){document.querySelector('meta[property="og:title"]').setAttribute("content",this.currentProtoData.name),document.querySelector('meta[property="og:description"]').setAttribute("content",this.currentProtoData.effect),document.querySelector('meta[property="og:url"]').setAttribute("content",location.href),this.updatePageImageMetadata()}get currentImageUrl(){return`https://card.godsunchained.com?id=${this.currentProtoId}&q=${this.currentQuality}&w=`}updatePageImageMetadata(){document.querySelector('meta[property="og:image"]').setAttribute("content",`${this.currentImageUrl}256`)}getUrlParams(){return new URLSearchParams(window.location.search)}updateUrlParams(){const e=this.getUrlParams();e.set("protoid",`${this.currentProtoId}`),e.set("quality",`${this.currentQuality}`),window.history.pushState({},"",decodeURIComponent(`${location.pathname}?${e}`))}getScreenShot(e){e.preventDefault(),window.open()}render(){return B`
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
              @change=${e=>{this.currentQuality=e.target.value,this.currentQualityInWords=Ot[this.currentQuality-1]}}
            />
          </div>
        </footer>

        <a
          class="appContainer__fab"
          href=${`${this.currentImageUrl}1024`}
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
            ${this.currentProtoData?B`
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
    `}};Xt([se()],Gt.prototype,"currentProtoId",void 0),Xt([se()],Gt.prototype,"currentQuality",void 0),Xt([se()],Gt.prototype,"currentQualityInWords",void 0),Xt([se()],Gt.prototype,"currentProtoData",void 0),Xt([se()],Gt.prototype,"protosCollection",void 0),Gt=Xt([ne("demo-app")],Gt);r(8);const Yt=document.createElement("style");Yt.innerHTML=at().cssText.replace(":host",".compositedCardDomRender"),document.head.appendChild(Yt)}]);
//# sourceMappingURL=bundle.b532baeb4cefe7dec281.js.map