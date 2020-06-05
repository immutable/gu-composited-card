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
 */const n=new WeakMap,i=e=>(...t)=>{const r=e(...t);return n.set(r,!0),r},o=e=>"function"==typeof e&&n.has(e),s=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,a=(e,t,r=null)=>{for(;t!==r;){const r=t.nextSibling;e.removeChild(t),t=r}},l={},c={},p=`{{lit-${String(Math.random()).slice(2)}}}`,d=`\x3c!--${p}--\x3e`,u=new RegExp(`${p}|${d}`),h="$lit$";class _{constructor(e,t){this.parts=[],this.element=t;const r=[],n=[],i=document.createTreeWalker(t.content,133,null,!1);let o=0,s=-1,a=0;const{strings:l,values:{length:c}}=e;for(;a<c;){const e=i.nextNode();if(null!==e){if(s++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:r}=t;let n=0;for(let e=0;e<r;e++)g(t[e].name,h)&&n++;for(;n-- >0;){const t=l[a],r=f.exec(t)[2],n=r.toLowerCase()+h,i=e.getAttribute(n);e.removeAttribute(n);const o=i.split(u);this.parts.push({type:"attribute",index:s,name:r,strings:o}),a+=o.length-1}}"TEMPLATE"===e.tagName&&(n.push(e),i.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(p)>=0){const n=e.parentNode,i=t.split(u),o=i.length-1;for(let t=0;t<o;t++){let r,o=i[t];if(""===o)r=$();else{const e=f.exec(o);null!==e&&g(e[2],h)&&(o=o.slice(0,e.index)+e[1]+e[2].slice(0,-h.length)+e[3]),r=document.createTextNode(o)}n.insertBefore(r,e),this.parts.push({type:"node",index:++s})}""===i[o]?(n.insertBefore($(),e),r.push(e)):e.data=i[o],a+=o}}else if(8===e.nodeType)if(e.data===p){const t=e.parentNode;null!==e.previousSibling&&s!==o||(s++,t.insertBefore($(),e)),o=s,this.parts.push({type:"node",index:s}),null===e.nextSibling?e.data="":(r.push(e),s--),a++}else{let t=-1;for(;-1!==(t=e.data.indexOf(p,t+1));)this.parts.push({type:"node",index:-1}),a++}}else i.currentNode=n.pop()}for(const e of r)e.parentNode.removeChild(e)}}const g=(e,t)=>{const r=e.length-t.length;return r>=0&&e.slice(r)===t},m=e=>-1!==e.index,$=()=>document.createComment(""),f=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
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
class y{constructor(e,t,r){this.__parts=[],this.template=e,this.processor=t,this.options=r}update(e){let t=0;for(const r of this.__parts)void 0!==r&&r.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=s?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],r=this.template.parts,n=document.createTreeWalker(e,133,null,!1);let i,o=0,a=0,l=n.nextNode();for(;o<r.length;)if(i=r[o],m(i)){for(;a<i.index;)a++,"TEMPLATE"===l.nodeName&&(t.push(l),n.currentNode=l.content),null===(l=n.nextNode())&&(n.currentNode=t.pop(),l=n.nextNode());if("node"===i.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(l.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,i.name,i.strings,this.options));o++}else this.__parts.push(void 0),o++;return s&&(document.adoptNode(e),customElements.upgrade(e)),e}}
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
 */const b=` ${p} `;class w{constructor(e,t,r,n){this.strings=e,this.values=t,this.type=r,this.processor=n}getHTML(){const e=this.strings.length-1;let t="",r=!1;for(let n=0;n<e;n++){const e=this.strings[n],i=e.lastIndexOf("\x3c!--");r=(i>-1||r)&&-1===e.indexOf("--\x3e",i+1);const o=f.exec(e);t+=null===o?e+(r?b:d):e.substr(0,o.index)+o[1]+o[2]+h+o[3]+p}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}
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
const v=e=>null===e||!("object"==typeof e||"function"==typeof e),x=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class S{constructor(e,t,r){this.dirty=!0,this.element=e,this.name=t,this.strings=r,this.parts=[];for(let e=0;e<r.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new C(this)}_getValue(){const e=this.strings,t=e.length-1;let r="";for(let n=0;n<t;n++){r+=e[n];const t=this.parts[n];if(void 0!==t){const e=t.value;if(v(e)||!x(e))r+="string"==typeof e?e:String(e);else for(const t of e)r+="string"==typeof t?t:String(t)}}return r+=e[t],r}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class C{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===l||v(e)&&e===this.value||(this.value=e,o(e)||(this.committer.dirty=!0))}commit(){for(;o(this.value);){const e=this.value;this.value=l,e(this)}this.value!==l&&this.committer.commit()}}class k{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild($()),this.endNode=e.appendChild($())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=$()),e.__insert(this.endNode=$())}insertAfterPart(e){e.__insert(this.startNode=$()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){for(;o(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=l,e(this)}const e=this.__pendingValue;e!==l&&(v(e)?e!==this.value&&this.__commitText(e):e instanceof w?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):x(e)?this.__commitIterable(e):e===c?(this.value=c,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,r="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=r:this.__commitNode(document.createTextNode(r)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof y&&this.value.template===t)this.value.update(e.values);else{const r=new y(t,e.processor,this.options),n=r._clone();r.update(e.values),this.__commitNode(n),this.value=r}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let r,n=0;for(const i of e)r=t[n],void 0===r&&(r=new k(this.options),t.push(r),0===n?r.appendIntoPart(this):r.insertAfterPart(t[n-1])),r.setValue(i),r.commit(),n++;n<t.length&&(t.length=n,this.clear(r&&r.endNode))}clear(e=this.startNode){a(this.startNode.parentNode,e.nextSibling,this.endNode)}}class P{constructor(e,t,r){if(this.value=void 0,this.__pendingValue=void 0,2!==r.length||""!==r[0]||""!==r[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=r}setValue(e){this.__pendingValue=e}commit(){for(;o(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=l,e(this)}if(this.__pendingValue===l)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=l}}class E extends S{constructor(e,t,r){super(e,t,r),this.single=2===r.length&&""===r[0]&&""===r[1]}_createPart(){return new T(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class T extends C{}let z=!1;try{const e={get capture(){return z=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class N{constructor(e,t,r){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=r,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;o(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=l,e(this)}if(this.__pendingValue===l)return;const e=this.__pendingValue,t=this.value,r=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),n=null!=e&&(null==t||r);r&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=O(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=l}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const O=e=>e&&(z?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);
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
 */const q=new class{handleAttributeExpressions(e,t,r,n){const i=t[0];if("."===i){return new E(e,t.slice(1),r).parts}return"@"===i?[new N(e,t.slice(1),n.eventContext)]:"?"===i?[new P(e,t.slice(1),r)]:new S(e,t,r).parts}handleTextExpression(e){return new k(e)}};
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
 */function R(e){let t=A.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},A.set(e.type,t));let r=t.stringsArray.get(e.strings);if(void 0!==r)return r;const n=e.strings.join(p);return r=t.keyString.get(n),void 0===r&&(r=new _(e,e.getTemplateElement()),t.keyString.set(n,r)),t.stringsArray.set(e.strings,r),r}const A=new Map,L=new WeakMap;
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
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const M=(e,...t)=>new w(e,t,"html",q),j=133;function I(e,t){const{element:{content:r},parts:n}=e,i=document.createTreeWalker(r,j,null,!1);let o=D(n),s=n[o],a=-1,l=0;const c=[];let p=null;for(;i.nextNode();){a++;const e=i.currentNode;for(e.previousSibling===p&&(p=null),t.has(e)&&(c.push(e),null===p&&(p=e)),null!==p&&l++;void 0!==s&&s.index===a;)s.index=null!==p?-1:s.index-l,o=D(n,o),s=n[o]}c.forEach(e=>e.parentNode.removeChild(e))}const V=e=>{let t=11===e.nodeType?0:1;const r=document.createTreeWalker(e,j,null,!1);for(;r.nextNode();)t++;return t},D=(e,t=-1)=>{for(let r=t+1;r<e.length;r++){const t=e[r];if(m(t))return r}return-1};
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
const B=(e,t)=>`${e}--${t}`;let U=!0;void 0===window.ShadyCSS?U=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),U=!1);const W=e=>t=>{const r=B(t.type,e);let n=A.get(r);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},A.set(r,n));let i=n.stringsArray.get(t.strings);if(void 0!==i)return i;const o=t.strings.join(p);if(i=n.keyString.get(o),void 0===i){const r=t.getTemplateElement();U&&window.ShadyCSS.prepareTemplateDom(r,e),i=new _(t,r),n.keyString.set(o,i)}return n.stringsArray.set(t.strings,i),i},F=["html","svg"],H=new Set,Q=(e,t,r)=>{H.add(e);const n=r?r.element:document.createElement("template"),i=t.querySelectorAll("style"),{length:o}=i;if(0===o)return void window.ShadyCSS.prepareTemplateStyles(n,e);const s=document.createElement("style");for(let e=0;e<o;e++){const t=i[e];t.parentNode.removeChild(t),s.textContent+=t.textContent}(e=>{F.forEach(t=>{const r=A.get(B(t,e));void 0!==r&&r.keyString.forEach(e=>{const{element:{content:t}}=e,r=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{r.add(e)}),I(e,r)})})})(e);const a=n.content;r?function(e,t,r=null){const{element:{content:n},parts:i}=e;if(null==r)return void n.appendChild(t);const o=document.createTreeWalker(n,j,null,!1);let s=D(i),a=0,l=-1;for(;o.nextNode();){for(l++,o.currentNode===r&&(a=V(t),r.parentNode.insertBefore(t,r));-1!==s&&i[s].index===l;){if(a>0){for(;-1!==s;)i[s].index+=a,s=D(i,s);return}s=D(i,s)}}}(r,s,a.firstChild):a.insertBefore(s,a.firstChild),window.ShadyCSS.prepareTemplateStyles(n,e);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)t.insertBefore(l.cloneNode(!0),t.firstChild);else if(r){a.insertBefore(s,a.firstChild);const e=new Set;e.add(s),I(r,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const J={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},X=(e,t)=>t!==e&&(t==t||e==e),G={attribute:!0,type:String,converter:J,reflect:!1,hasChanged:X},Y=Promise.resolve(!0),K=1,Z=4,ee=8,te=16,re=32,ne="finalized";class ie extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=Y,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,r)=>{const n=this._attributeNameForProperty(r,t);void 0!==n&&(this._attributeToPropertyMap.set(n,r),e.push(n))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=G){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const r="symbol"==typeof e?Symbol():`__${e}`;Object.defineProperty(this.prototype,e,{get(){return this[r]},set(t){const n=this[e];this[r]=t,this._requestUpdate(e,n)},configurable:!0,enumerable:!0})}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty(ne)||e.finalize(),this[ne]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const r of t)this.createProperty(r,e[r])}}static _attributeNameForProperty(e,t){const r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,r=X){return r(e,t)}static _propertyValueFromAttribute(e,t){const r=t.type,n=t.converter||J,i="function"==typeof n?n:n.fromAttribute;return i?i(e,r):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const r=t.type,n=t.converter;return(n&&n.toAttribute||J.toAttribute)(e,r)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|re,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,r){t!==r&&this._attributeToProperty(e,r)}_propertyToAttribute(e,t,r=G){const n=this.constructor,i=n._attributeNameForProperty(e,r);if(void 0!==i){const e=n._propertyValueToAttribute(t,r);if(void 0===e)return;this._updateState=this._updateState|ee,null==e?this.removeAttribute(i):this.setAttribute(i,e),this._updateState=this._updateState&~ee}}_attributeToProperty(e,t){if(this._updateState&ee)return;const r=this.constructor,n=r._attributeToPropertyMap.get(e);if(void 0!==n){const e=r._classProperties.get(n)||G;this._updateState=this._updateState|te,this[n]=r._propertyValueFromAttribute(t,e),this._updateState=this._updateState&~te}}_requestUpdate(e,t){let r=!0;if(void 0!==e){const n=this.constructor,i=n._classProperties.get(e)||G;n._valueHasChanged(this[e],t,i.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==i.reflect||this._updateState&te||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,i))):r=!1}!this._hasRequestedUpdate&&r&&this._enqueueUpdate()}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){let e,t;this._updateState=this._updateState|Z;const r=this._updatePromise;this._updatePromise=new Promise((r,n)=>{e=r,t=n});try{await r}catch(e){}this._hasConnected||await new Promise(e=>this._hasConnectedResolver=e);try{const e=this.performUpdate();null!=e&&await e}catch(e){t(e)}e(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&re}get _hasRequestedUpdate(){return this._updateState&Z}get hasUpdated(){return this._updateState&K}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e&&this.update(t)}catch(t){throw e=!1,t}finally{this._markUpdated()}e&&(this._updateState&K||(this._updateState=this._updateState|K,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~Z}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0)}updated(e){}firstUpdated(e){}}ie[ne]=!0;
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
const oe=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:r,elements:n}=t;return{kind:r,elements:n,finisher(t){window.customElements.define(e,t)}}})(e,t),se=(e,t)=>"method"!==t.kind||!t.descriptor||"value"in t.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}}:Object.assign({},t,{finisher(r){r.createProperty(t.key,e)}}),ae=(e,t,r)=>{t.constructor.createProperty(r,e)};function le(e){return(t,r)=>void 0!==r?ae(e,t,r):se(e,t)}const ce="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,pe=Symbol();class de{constructor(e,t){if(t!==pe)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(ce?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const ue=(e,...t)=>{const r=t.reduce((t,r,n)=>t+(e=>{if(e instanceof de)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(r)+e[n+1],e[0]);return new de(r,pe)};
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.2.1");const he=e=>e.flat?e.flat(1/0):function e(t,r=[]){for(let n=0,i=t.length;n<i;n++){const i=t[n];Array.isArray(i)?e(i,r):r.push(i)}return r}(e);class _e extends ie{static finalize(){super.finalize.call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const e=this.styles,t=[];if(Array.isArray(e)){he(e).reduceRight((e,t)=>(e.add(t),e),new Set).forEach(e=>t.unshift(e))}else e&&t.push(e);return t}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?ce?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){super.update(e);const t=this.render();t instanceof w&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){}}_e.finalized=!0,_e.render=(e,t,r)=>{if(!r||"object"!=typeof r||!r.scopeName)throw new Error("The `scopeName` option is required.");const n=r.scopeName,i=L.has(t),o=U&&11===t.nodeType&&!!t.host,s=o&&!H.has(n),l=s?document.createDocumentFragment():t;if(((e,t,r)=>{let n=L.get(t);void 0===n&&(a(t,t.firstChild),L.set(t,n=new k(Object.assign({templateFactory:R},r))),n.appendInto(t)),n.setValue(e),n.commit()})(e,l,Object.assign({templateFactory:W(n)},r)),s){const e=L.get(l);L.delete(l);const r=e.value instanceof y?e.value.template:void 0;Q(n,l,r),a(t,t.firstChild),t.appendChild(l),L.set(t,e)}!i&&o&&window.ShadyCSS.styleElement(t.host)};var ge,me,$e=function(e){return Object.defineProperty(e,"toString",{value:function(){return"function ResizeObserver () { [polyfill code] }"}}),e},fe="undefined"==typeof window?{}:window,ye=fe.requestAnimationFrame,be={attributes:!0,characterData:!0,childList:!0,subtree:!0},we=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],ve=new Map,xe=new Map,Se=function(){ge||(ge=!0,ye((function(e){ge=!1;var t=[],r=[];ve.forEach((function(e){return t.push(e)})),xe.forEach((function(e){return r.push(e)})),ve.clear(),xe.clear();try{for(var n=0,i=t;n<i.length;n++){(0,i[n])(e)}}finally{for(var o=0,s=r;o<s.length;o++){(0,s[o])(e)}}})))},Ce=new(function(){function e(){var e=this;this.stopped=!0,this.listener=function(){return e.schedule()}}return e.prototype.run=function(e){var t=this;xe.set(this,(function(){var r=!1;try{r=Ye()}finally{r?t.run(60):e?t.run(e-1):t.start()}})),Se()},e.prototype.schedule=function(){this.stop(),this.run(12)},e.prototype.observe=function(){var e=this,t=function(){return e.observer&&e.observer.observe(document.body,be)};document.body?t():fe.addEventListener("DOMContentLoaded",t)},e.prototype.start=function(){var e=this;this.stopped&&(this.stopped=!1,"MutationObserver"in fe&&(this.observer=new MutationObserver(this.listener),this.observe()),we.forEach((function(t){return fe.addEventListener(t,e.listener,!0)})))},e.prototype.stop=function(){var e=this;this.stopped||(this.observer&&this.observer.disconnect(),we.forEach((function(t){return fe.removeEventListener(t,e.listener,!0)})),this.stopped=!0)},e}()),ke=0;fe.requestAnimationFrame=function(e){if("function"!=typeof e)throw new Error("requestAnimationFrame expects 1 callback argument of type function.");var t=ke+=1;return ve.set(t,(function(t){return e(t)})),Se(),t},fe.cancelAnimationFrame=function(e){ve.delete(e)},$e(fe.requestAnimationFrame),$e(fe.cancelAnimationFrame),function(e){e.BORDER_BOX="border-box",e.CONTENT_BOX="content-box"}(me||(me={}));var Pe=function(){function e(e,t,r,n){return this.x=e,this.y=t,this.width=r,this.height=n,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,Object.freeze(this)}return e.fromRect=function(t){return new e(t.x,t.y,t.width,t.height)},e}(),Ee=function(e){return e instanceof SVGElement&&"getBBox"in e},Te=function(e){if(Ee(e)){var t=e.getBBox(),r=t.width,n=t.height;return!r&&!n}var i=e,o=i.offsetWidth,s=i.offsetHeight;return!(o||s||e.getClientRects().length)},ze=new Map,Ne=/auto|scroll/,Oe=/^tb|vertical/,qe=/msie|trident/i.test(fe.navigator&&fe.navigator.userAgent),Re=function(e){return parseFloat(e||"0")},Ae=function(e,t,r){return void 0===e&&(e=0),void 0===t&&(t=0),void 0===r&&(r=!1),Object.freeze({inlineSize:(r?t:e)||0,blockSize:(r?e:t)||0})},Le=Object.freeze({borderBoxSize:Ae(),contentBoxSize:Ae(),contentRect:new Pe(0,0,0,0)}),Me=function(e){if(ze.has(e))return ze.get(e);if(Te(e))return ze.set(e,Le),Le;var t=getComputedStyle(e),r=Ee(e)&&e.getBBox(),n=!qe&&"border-box"===t.boxSizing,i=Oe.test(t.writingMode||""),o=!r&&Ne.test(t.overflowY||""),s=!r&&Ne.test(t.overflowX||""),a=r?0:Re(t.paddingTop),l=r?0:Re(t.paddingRight),c=r?0:Re(t.paddingBottom),p=r?0:Re(t.paddingLeft),d=r?0:Re(t.borderTopWidth),u=r?0:Re(t.borderRightWidth),h=r?0:Re(t.borderBottomWidth),_=p+l,g=a+c,m=(r?0:Re(t.borderLeftWidth))+u,$=d+h,f=s?e.offsetHeight-$-e.clientHeight:0,y=o?e.offsetWidth-m-e.clientWidth:0,b=n?_+m:0,w=n?g+$:0,v=r?r.width:Re(t.width)-b-y,x=r?r.height:Re(t.height)-w-f,S=v+_+y+m,C=x+g+f+$,k=Object.freeze({borderBoxSize:Ae(S,C,i),contentBoxSize:Ae(v,x,i),contentRect:new Pe(p,a,v,x)});return ze.set(e,k),k},je=function(e,t){var r=Me(e),n=r.borderBoxSize,i=r.contentBoxSize;return t===me.BORDER_BOX?n:i},Ie=function(){function e(e,t){this.target=e,this.observedBox=t||me.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return e.prototype.isActive=function(){var e,t=je(this.target,this.observedBox);return e=this.target,Ee(e)||function(e){switch(e.tagName){case"INPUT":if("image"!==e.type)break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1}(e)||"inline"!==getComputedStyle(e).display||(this.lastReportedSize=t),this.lastReportedSize.inlineSize!==t.inlineSize||this.lastReportedSize.blockSize!==t.blockSize},e}(),Ve=function(e,t){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=e,this.callback=t},De="ResizeObserver loop completed with undelivered notifications.",Be=function(e){var t=Me(e);this.target=e,this.contentRect=t.contentRect,this.borderBoxSize=t.borderBoxSize,this.contentBoxSize=t.contentBoxSize},Ue=function(e){if(Te(e))return 1/0;for(var t=0,r=e.parentNode;r;)t+=1,r=r.parentNode;return t},We=function(){var e=1/0,t=[];He.forEach((function(r){if(0!==r.activeTargets.length){var n=[];r.activeTargets.forEach((function(t){var r=new Be(t.target),i=Ue(t.target);n.push(r),t.lastReportedSize=je(t.target,t.observedBox),i<e&&(e=i)})),t.push((function(){r.callback.call(r.observer,n,r.observer)})),r.activeTargets.splice(0,r.activeTargets.length)}}));for(var r=0,n=t;r<n.length;r++){(0,n[r])()}return e},Fe=function(e){ze.clear(),He.forEach((function(t){t.activeTargets.splice(0,t.activeTargets.length),t.skippedTargets.splice(0,t.skippedTargets.length),t.observationTargets.forEach((function(r){r.isActive()&&(Ue(r.target)>e?t.activeTargets.push(r):t.skippedTargets.push(r))}))}))},He=[],Qe=new Map,Je=0,Xe=function(e){!Je&&e>0&&Ce.start(),!(Je+=e)&&Ce.stop()},Ge=function(e,t){for(var r=0;r<e.length;r+=1)if(e[r].target===t)return r;return-1},Ye=function(){var e,t=0;for(Fe(t);He.some((function(e){return e.activeTargets.length>0}));)t=We(),Fe(t);return He.some((function(e){return e.skippedTargets.length>0}))&&("function"==typeof ErrorEvent?e=new ErrorEvent("error",{message:De}):((e=document.createEvent("Event")).initEvent("error",!1,!1),e.message=De),window.dispatchEvent(e)),t>0},Ke=function(){function e(){}return e.connect=function(e,t){var r=new Ve(e,t);He.push(r),Qe.set(e,r)},e.observe=function(e,t,r){if(Qe.has(e)){var n=Qe.get(e);Ge(n.observationTargets,t)<0&&(n.observationTargets.push(new Ie(t,r&&r.box)),Xe(1),Ce.schedule())}},e.unobserve=function(e,t){if(Qe.has(e)){var r=Qe.get(e),n=Ge(r.observationTargets,t);n>=0&&(r.observationTargets.splice(n,1),Xe(-1))}},e.disconnect=function(e){if(Qe.has(e)){var t=Qe.get(e);He.splice(He.indexOf(t),1),Qe.delete(e),Xe(-t.observationTargets.length)}},e}(),Ze=function(){function e(e){if(0===arguments.length)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if("function"!=typeof e)throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");Ke.connect(this,e)}return e.prototype.observe=function(e,t){if(0===arguments.length)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(e instanceof Element==!1)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");Ke.observe(this,e,t)},e.prototype.unobserve=function(e){if(0===arguments.length)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(e instanceof Element==!1)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");Ke.unobserve(this,e)},e.prototype.disconnect=function(){Ke.disconnect(this)},e.toString=function(){return"function ResizeObserver () { [polyfill code] }"},e}();
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
const et=new WeakMap,tt=i(e=>t=>{if(!(t instanceof C)||t instanceof T||"style"!==t.committer.name||t.committer.parts.length>1)throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");const{committer:r}=t,{style:n}=r.element;et.has(t)||(n.cssText=r.strings.join(" "));const i=et.get(t);for(const t in i)t in e||(-1===t.indexOf("-")?n[t]=null:n.removeProperty(t));for(const t in e)-1===t.indexOf("-")?n[t]=e[t]:n.setProperty(t,e[t]);et.set(t,e)});customElements.define("card-icon",class extends _e{constructor(){super(...arguments),this.iconLigature="",this.fillGradientTarget="top"}static get properties(){return{iconLigature:{type:String},fillColor:{type:String},fillGradient:{type:String},fillGradientTarget:{type:String}}}static get styles(){return ue`
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
    `}render(){return M`
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
const rt=new WeakMap,nt=i(e=>t=>{if(!(t instanceof k))throw new Error("unsafeHTML can only be used in text bindings");const r=rt.get(t);if(void 0!==r&&v(e)&&e===r.value&&t.value===r.fragment)return;const n=document.createElement("template");n.innerHTML=e;const i=document.importNode(n.content,!0);t.setValue(i),rt.set(t,{value:e,fragment:i})}),it=ue`
  font-family: 'Unchained', serif;
  line-height: 1.1;
`,ot=ue`
  font-family: 'Open Sans', sans-serif;
`,st=ue`white`,at=(ue`black`,ue`rgb(51, 51, 51)`),lt=ue`#f9f9f9`,ct=(ue`#f1f1f1`,ue`
  ${it}
  font-weight: 700;
  line-height: 0.8;
  text-align: center;
  color: ${st};
`),pt=()=>ue`
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
    background: ${lt};
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
    background: ${at};
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
    ${ct}
    position: absolute;
  }

  .card__nameText {
    position: absolute;
    white-space: nowrap;
    display: flex;
    ${ct}
  }

  .card__nameText__inner {
    margin: auto;
  }

  .card__attackText {
    position: absolute;
    ${ct}
  }

  .card__healthText {
    position: absolute;
    ${ct}
  }

  .card__tribeText {
    position: absolute;
    text-transform: capitalize;
    display: flex;
    ${ct}
  }

  .card__tribeText__inner {
    margin: auto;
  }

  .card__setIcon {
    position: absolute;
    color: white;
  }
`;var dt=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let ut=class extends _e{static get styles(){return ue`
      :host {
        position: absolute;
        text-align: center;
        color: black;
        display: flex;
      }

      .centered {
        margin: auto;
        ${ot}
      }
    `}updated(e){}render(){const{text:e,ch:t,cw:r,tribe:n,type:i}=this,o=e.replace(/ ([^ ]*)$/,"&nbsp;$1"),s=e.split("").length;let a=3.8*t,l=1.25,c="normal";return s>=150?(a=2.8*t,l=1.1,c="extraSquishy"):s>=90&&(a=3.4*t,l=1.1,c="squishy"),console.log(`\n      DESCRIPTION TEXT:\n      length: ${s},\n      mode: ${c},\n    `),M`
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
        ${nt(o)}
      </div>
    `}};dt([le({type:String})],ut.prototype,"text",void 0),dt([le({type:String})],ut.prototype,"tribe",void 0),dt([le({type:String})],ut.prototype,"type",void 0),dt([le({type:Number})],ut.prototype,"ch",void 0),dt([le({type:Number})],ut.prototype,"cw",void 0),ut=dt([oe("autofit-description-text")],ut);const ht=250,_t=375,gt=500,mt=720,$t=1024,ft=1280,yt=1440,bt=1920,wt=256,vt=512,xt=720,St=1024,Ct=1280,kt=1440,Pt=1920,Et=256,Tt=512;function zt(e){return"god power"===e?"power":e}const Nt="https://images.godsunchained.com";r(4);var Ot=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},qt=function(e,t,r,n){return new(r||(r=Promise))((function(i,o){function s(e){try{l(n.next(e))}catch(e){o(e)}}function a(e){try{l(n.throw(e))}catch(e){o(e)}}function l(e){e.done?i(e.value):new r((function(t){t(e.value)})).then(s,a)}l((n=n.apply(e,t||[])).next())}))};const Rt=["plain","plain","bronze","iron","meteorite","shadow","gold","diamond"],At=["diamond","gold","shadow","meteorite","plain"],Lt=new Ze(e=>{e.forEach(e=>{e.target.handleResize(e)})});let Mt=class extends _e{constructor(){super(),this.quality=5,this.useLegacyQualityMapping=!1,this.protoCardData={type:"",effect:"",name:"",rarity:"",god:"",set:"",mana:"",id:"",attack:null,health:null,tribe:"",art_id:""},this.loading=!0,this.quality=0,this.ch=.01*this.offsetHeight,this.cw=.01*this.offsetWidth}static get styles(){return pt()}connectedCallback(){super.connectedCallback(),Lt.observe(this)}disconnectedCallback(){super.disconnectedCallback(),Lt.unobserve(this)}updated(e){e.forEach((e,t)=>{"protoId"===t?this.getProtoDataFromApi():"inputProtoData"===t&&this.getProtoDataFromInput()})}handleResize(e){const t=e.target.shadowRoot.children[0];this.ch=.01*t.offsetHeight,this.cw=.01*t.offsetWidth,this.requestUpdate()}fetchProtoData(){return qt(this,void 0,void 0,(function*(){return this.loading=!0,fetch(`https://api.godsunchained.com/v0/proto/${this.protoId}`).then(e=>e.json())}))}getProtoDataFromApi(){return qt(this,void 0,void 0,(function*(){return this.fetchProtoData().then(e=>{const{id:t,type:r,attack:n,health:i,effect:o,name:s,rarity:a,god:l,mana:c,set:p,tribe:d,art_id:u}=e;return this.protoCardData={id:t,type:r,attack:n.Int64,health:i.Int64,effect:o,name:s,rarity:a,god:l,mana:c,set:p,tribe:d.String,art_id:u},this.loading=!1,this.requestUpdate(),e})}))}getProtoDataFromInput(){this.protoCardData=Object.assign({},this.inputProtoData),this.loading=!1,this.requestUpdate()}render(){const e=this.useLegacyQualityMapping?Rt[this.quality]:At[this.quality-1],t="mythic"===this.protoCardData.rarity;return M`
      <div class="card__innerRatioConstrainer">
        ${this.loading?(()=>M`
  <div class="card__loading">
    <img
      class="card__loading__img"
      src="${r(3)}"
      alt="immutable loading spinner"
    />
  </div>
`)():M`
              ${(({id:e,responsiveSrcsetSizes:t=`${_t}px`})=>M`
    <picture class="card__artwork">
      <source
        srcset="
          ${Nt}/art2/${_t}/${e}.webp ${ht}w,
          ${Nt}/art2/${gt}/${e}.webp ${_t}w,
          ${Nt}/art2/${mt}/${e}.webp ${gt}w,
          ${Nt}/art2/${$t}/${e}.webp ${mt}w,
          ${Nt}/art2/${ft}/${e}.webp ${$t}w,
          ${Nt}/art2/${yt}/${e}.webp ${ft}w,
          ${Nt}/art2/${bt}/${e}.webp ${yt}w
        "
        sizes="${t}"
        type="image/webp"
      />
      <source
        srcset="
          ${Nt}/art2/${_t}/${e}.jpg ${ht}w,
          ${Nt}/art2/${gt}/${e}.jpg ${_t}w,
          ${Nt}/art2/${mt}/${e}.jpg ${gt}w,
          ${Nt}/art2/${$t}/${e}.jpg ${mt}w,
          ${Nt}/art2/${ft}/${e}.jpg ${$t}w,
          ${Nt}/art2/${yt}/${e}.jpg ${ft}w,
          ${Nt}/art2/${bt}/${e}.jpg ${yt}w
        "
        sizes="${t}"
        type="image/jpg"
      />
      <img
        srcset="${Nt}/art2/${ht}/${e}.jpg"
        class="card__artwork__img"
      />
    </picture>
  `)({id:this.protoCardData.id,responsiveSrcsetSizes:this.responsiveSrcsetSizes})}
              ${t?(({responsiveSrcsetSizes:e=`${vt}px`,art_id:t,type:r,god:n})=>M`
    <picture class="card__baseLayer">
      <source
        srcset="
          ${Nt}/border-layers/types/${r}/${vt}/${r}_${t}.webp ${wt}w,
          ${Nt}/border-layers/types/${r}/${xt}/${r}_${t}.webp ${vt}w,
          ${Nt}/border-layers/types/${r}/${St}/${r}_${t}.webp ${xt}w,
          ${Nt}/border-layers/types/${r}/${Ct}/${r}_${t}.webp ${St}w,
          ${Nt}/border-layers/types/${r}/${kt}/${r}_${t}.webp ${Ct}w,
          ${Nt}/border-layers/types/${r}/${Pt}/${r}_${t}.webp ${kt}w
        "
        sizes="${e}"
        type="image/webp"
      />
      <source
        srcset="
          ${Nt}/border-layers/types/${r}/${vt}/${r}_${t}.png ${wt}w,
          ${Nt}/border-layers/types/${r}/${xt}/${r}_${t}.png ${vt}w,
          ${Nt}/border-layers/types/${r}/${St}/${r}_${t}.png ${xt}w,
          ${Nt}/border-layers/types/${r}/${Ct}/${r}_${t}.png ${St}w,
          ${Nt}/border-layers/types/${r}/${kt}/${r}_${t}.png ${Ct}w,
          ${Nt}/border-layers/types/${r}/${Pt}/${r}_${t}.png ${kt}w
        "
        sizes="${e}"
        type="image/png"
      />

      <img
        srcset="
          ${Nt}/border-layers/types/${r}/${wt}/${r}_${t}.png
        "
        class="card__baseLayer__img"
      />
    </picture>

    <picture class="card__manaLayer">
      <source
        srcset="
          ${Nt}/border-layers/rosettes/mythics/${vt}/mythic_${t}.webp ${wt}w,
          ${Nt}/border-layers/rosettes/mythics/${xt}/mythic_${t}.webp ${vt}w,
          ${Nt}/border-layers/rosettes/mythics/${St}/mythic_${t}.webp ${xt}w,
          ${Nt}/border-layers/rosettes/mythics/${Ct}/mythic_${t}.webp ${St}w,
          ${Nt}/border-layers/rosettes/mythics/${kt}/mythic_${t}.webp ${Ct}w,
          ${Nt}/border-layers/rosettes/mythics/${Pt}/mythic_${t}.webp ${kt}w
        "
        sizes="${e}"
        type="image/webp"
      />
      <source
        srcset="
          ${Nt}/border-layers/rosettes/mythics/${vt}/mythic_${t}.png ${wt}w,
          ${Nt}/border-layers/rosettes/mythics/${xt}/mythic_${t}.png ${vt}w,
          ${Nt}/border-layers/rosettes/mythics/${St}/mythic_${t}.png ${xt}w,
          ${Nt}/border-layers/rosettes/mythics/${Ct}/mythic_${t}.png ${St}w,
          ${Nt}/border-layers/rosettes/mythics/${kt}/mythic_${t}.png ${Ct}w,
          ${Nt}/border-layers/rosettes/mythics/${Pt}/mythic_${t}.png ${kt}w
        "
        sizes="${e}"
        type="image/png"
      />

      <img
        srcset="
          ${Nt}/border-layers/rosettes/${n}/${vt}/mythic_${t}.png
        "
        class="card__manaLayer__img card__manaLayer__img--mythic"
      />
    </picture>
  `)(Object.assign({responsiveSrcsetSizes:this.responsiveSrcsetSizes},this.protoCardData)):(({responsiveSrcsetSizes:e=`${vt}px`,type:t,qualityName:r,rarity:n,god:i,set:o,tribe:s})=>(t=zt(t),M`
    <picture class="card__baseLayer">
      <source
        srcset="
          ${Nt}/border-layers/types/${t}/${vt}/${t}_${r}.webp ${wt}w,
          ${Nt}/border-layers/types/${t}/${xt}/${t}_${r}.webp ${vt}w,
          ${Nt}/border-layers/types/${t}/${St}/${t}_${r}.webp ${xt}w,
          ${Nt}/border-layers/types/${t}/${Ct}/${t}_${r}.webp ${St}w,
          ${Nt}/border-layers/types/${t}/${kt}/${t}_${r}.webp ${Ct}w,
          ${Nt}/border-layers/types/${t}/${Pt}/${t}_${r}.webp ${kt}w
        "
        sizes="${e}"
        type="image/webp"
      />

      <source
        srcset="
          ${Nt}/border-layers/types/${t}/${vt}/${t}_${r}.png ${wt}w,
          ${Nt}/border-layers/types/${t}/${xt}/${t}_${r}.png ${vt}w,
          ${Nt}/border-layers/types/${t}/${St}/${t}_${r}.png ${xt}w,
          ${Nt}/border-layers/types/${t}/${Ct}/${t}_${r}.png ${St}w,
          ${Nt}/border-layers/types/${t}/${kt}/${t}_${r}.png ${Ct}w,
          ${Nt}/border-layers/types/${t}/${Pt}/${t}_${r}.png ${kt}w
        "
        sizes="${e}"
        type="image/png"
      />
      <img
        srcset="
          ${Nt}/border-layers/types/${t}/${wt}/${t}_${r}.png
        "
        class="card__baseLayer__img"
      />
    </picture>

    <picture class="card__manaLayer">
      <source
        srcset="
          ${Nt}/border-layers/rosettes/${i}/${vt}/${i}_${r}.webp ${wt}w,
          ${Nt}/border-layers/rosettes/${i}/${xt}/${i}_${r}.webp ${vt}w,
          ${Nt}/border-layers/rosettes/${i}/${St}/${i}_${r}.webp ${xt}w,
          ${Nt}/border-layers/rosettes/${i}/${Ct}/${i}_${r}.webp ${St}w,
          ${Nt}/border-layers/rosettes/${i}/${kt}/${i}_${r}.webp ${Ct}w,
          ${Nt}/border-layers/rosettes/${i}/${Pt}/${i}_${r}.webp ${kt}w
        "
        sizes="${e}"
        type="image/webp"
      />
      <source
        srcset="
          ${Nt}/border-layers/rosettes/${i}/${vt}/${i}_${r}.png ${wt}w,
          ${Nt}/border-layers/rosettes/${i}/${xt}/${i}_${r}.png ${vt}w,
          ${Nt}/border-layers/rosettes/${i}/${St}/${i}_${r}.png ${xt}w,
          ${Nt}/border-layers/rosettes/${i}/${Ct}/${i}_${r}.png ${St}w,
          ${Nt}/border-layers/rosettes/${i}/${kt}/${i}_${r}.png ${Ct}w,
          ${Nt}/border-layers/rosettes/${i}/${Pt}/${i}_${r}.png ${kt}w
        "
        sizes="${e}"
        type="image/png"
      />
      <img
        srcset="
          ${Nt}/border-layers/rosettes/${i}/${wt}/${i}_${r}.png
        "
        class="card__manaLayer__img"
      />
    </picture>

    ${"common"!==n?M`
          <picture class="card__rarityLayer">
            <source
              srcset="
                ${Nt}/border-layers/gems/${vt}/rarity_${n}.webp ${vt}w,
                ${Nt}/border-layers/gems/${xt}/rarity_${n}.webp ${xt}w,
                ${Nt}/border-layers/gems/${St}/rarity_${n}.webp ${St}w,
                ${Nt}/border-layers/gems/${Ct}/rarity_${n}.webp ${Ct}w,
                ${Nt}/border-layers/gems/${kt}/rarity_${n}.webp ${kt}w,
                ${Nt}/border-layers/gems/${Pt}/rarity_${n}.webp ${Pt}w
              "
              sizes="${e}"
              type="image/webp"
            />
            <source
              srcset="
                ${Nt}/border-layers/gems/${vt}/rarity_${n}.png ${vt}w,
                ${Nt}/border-layers/gems/${xt}/rarity_${n}.png ${xt}w,
                ${Nt}/border-layers/gems/${St}/rarity_${n}.png ${St}w,
                ${Nt}/border-layers/gems/${Ct}/rarity_${n}.webp ${Ct}w,
                ${Nt}/border-layers/gems/${kt}/rarity_${n}.webp ${kt}w,
                ${Nt}/border-layers/gems/${Pt}/rarity_${n}.png ${Pt}w
              "
              sizes="${e}"
              type="image/png"
            />
            <img
              srcset="
                ${Nt}/border-layers/gems/${wt}/rarity_${n}.png
              "
              class="card__rarityLayer__img"
            />
          </picture>
        `:null}
    ${"legendary"===n?M`
          <picture class="card__wreathLayer">
            <source
              srcset="
                ${Nt}/border-layers/wreaths/${vt}/wreath_${r}.webp ${vt}w,
                ${Nt}/border-layers/wreaths/${xt}/wreath_${r}.webp ${xt}w,
                ${Nt}/border-layers/wreaths/${St}/wreath_${r}.webp ${St}w,
                ${Nt}/border-layers/wreaths/${Ct}/wreath_${r}.webp ${Ct}w,
                ${Nt}/border-layers/wreaths/${kt}/wreath_${r}.webp ${kt}w,
                ${Nt}/border-layers/wreaths/${Pt}/wreath_${r}.webp ${Pt}w
              "
              sizes="${e}"
              type="image/webp"
            />

            <source
              srcset="
                ${Nt}/border-layers/wreaths/${vt}/wreath_${r}.png ${vt}w,
                ${Nt}/border-layers/wreaths/${xt}/wreath_${r}.png ${xt}w,
                ${Nt}/border-layers/wreaths/${St}/wreath_${r}.png ${St}w,
                ${Nt}/border-layers/wreaths/${Ct}/wreath_${r}.png ${Ct}w,
                ${Nt}/border-layers/wreaths/${kt}/wreath_${r}.png ${kt}w,
                ${Nt}/border-layers/wreaths/${Pt}/wreath_${r}.png ${Pt}w
              "
              sizes="${e}"
              type="image/png"
            />
            <img
              srcset="
                ${Nt}/border-layers/wreaths/${wt}/wreath_${r}.png
              "
              class="card__wreathLayer__img"
            />
          </picture>
        `:null}
    ${"core"===o&&"plain"===r?M`
          <picture class="card__lockIconLayer">
            <source
              srcset="
                ${Nt}/border-layers/locks/${Et}/lock_${r}.webp ${Et}w,
                ${Nt}/border-layers/locks/${Tt}/lock_${r}.webp ${Tt}w,
              "
              type="image/webp"
            />

            <source
              srcset="
                ${Nt}/border-layers/locks/${Et}/lock_${r}.png ${Et}w,
                ${Nt}/border-layers/locks/${Tt}/lock_${r}.png ${Tt}w,
              "
              type="image/png"
            />

            <img
              srcset="
                ${Nt}/border-layers/locks/lock_${r}.png
              "
              class="card__lockIconLayer__img"
            />
          </picture>
        `:null}
    ${s?M`
          <picture class="card__tribeBarLayer">
            <source
              srcset="
                ${Nt}/border-layers/tribe_bars/${vt}/tribebar_${r}.webp ${vt}w,
                ${Nt}/border-layers/tribe_bars/${xt}/tribebar_${r}.webp ${xt}w,
                ${Nt}/border-layers/tribe_bars/${St}/tribebar_${r}.webp ${St}w,
                ${Nt}/border-layers/tribe_bars/${Ct}/tribebar_${r}.webp ${Ct}w,
                ${Nt}/border-layers/tribe_bars/${kt}/tribebar_${r}.webp ${kt}w,
                ${Nt}/border-layers/tribe_bars/${Pt}/tribebar_${r}.webp ${Pt}w
              "
              sizes="${e}"
              type="image/webp"
            />
            <source
              srcset="
                ${Nt}/border-layers/tribe_bars/${vt}/tribebar_${r}.png ${vt}w,
                ${Nt}/border-layers/tribe_bars/${xt}/tribebar_${r}.png ${xt}w,
                ${Nt}/border-layers/tribe_bars/${St}/tribebar_${r}.png ${St}w,
                ${Nt}/border-layers/tribe_bars/${Ct}/tribebar_${r}.png ${Ct}w,
                ${Nt}/border-layers/tribe_bars/${kt}/tribebar_${r}.png ${kt}w,
                ${Nt}/border-layers/tribe_bars/${Pt}/tribebar_${r}.png ${Pt}w
              "
              sizes="${e}"
              type="image/png"
            />

            <img
              srcset="
                ${Nt}/border-layers/tribe_bars/${Pt}/tribebar_${n}.png
              "
              class="card__tribeBarLayer__img"
            />
          </picture>
        `:null}
  `))(Object.assign({qualityName:e,responsiveSrcsetSizes:this.responsiveSrcsetSizes},this.protoCardData))}
              ${(({type:e="",name:t="⃠",effect:r="⃠",mana:n="⃠",attack:i="⃠",health:o="⃠",tribe:s="",cardSet:a="",ch:l=0,cw:c=0})=>{e=zt(e);const p=RegExp(/creature|weapon/).test(e),d=t.split("").length>=20,u=Math.floor(.5*l),h=`${0===u?1:u}px`,_="rgba(0, 0, 0, 1)",g=`0 0 ${h} ${_}, 0 0 ${h} ${_}, 0 0 ${h} ${_}`,m=tt({fontSize:`${10.5*l}px`,top:`${6.85*l}px`,left:`${9.5*c}px`,width:`${19*c}px`,textShadow:g}),$=tt({fontSize:`${d?3.9*l:4.93*l}px`,bottom:`${32.85*l}px`,height:`${9*l}px`,left:`${13.25*c}px`,right:`${5.3*c}px`,textShadow:g}),f=tt({fontSize:`${9.5*l}px`,bottom:`${4.5*l}px`,width:`${15*c}px`,left:`${10.5*c}px`,textShadow:g}),y=tt({fontSize:`${9.5*l}px`,width:`${16*c}px`,bottom:`${4.6*l}px`,right:`${2.5*c}px`,textShadow:g}),b=tt({fontSize:`${3.2*l}px`,bottom:`${3.1*l}px`,height:`${4.82*l}px`,left:`${30.5*c}px`,right:`${23*c}px`,textShadow:g}),w=tt({fontSize:`${6*l}px`,top:`${10*l}px`,right:`${9*c}px`});return M`
    <div class="card__manaText" style=${m}>
      ${n}
    </div>

    <div
      class="card__nameText ${d?"card__nameText--crammed":""}"
      style=${$}
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

    ${p?M`
          <div class="card__attackText" style=${f}>
            ${i}
          </div>

          <div class="card__healthText" style=${y}>
            ${o}
          </div>
        `:null}
    ${s?M`
          <div class="card__tribeText" style=${b}>
            <div class="card__tribeText__inner">
              ${s}
            </div>
          </div>
        `:null}
    ${"mythic"!==a?M`
          <card-icon
            style=${w}
            class="card__setIcon"
            iconLigature=${`set_${a}`}
          ></card-icon>
        `:null}
  `})(Object.assign({ch:this.ch,cw:this.cw},this.protoCardData,{cardSet:this.protoCardData.set}))}
            `}
      </div>
    `}};Ot([le({type:Number})],Mt.prototype,"protoId",void 0),Ot([le({type:Number})],Mt.prototype,"quality",void 0),Ot([le({type:Object})],Mt.prototype,"inputProtoData",void 0),Ot([le({type:String})],Mt.prototype,"responsiveSrcsetSizes",void 0),Ot([le({type:Boolean})],Mt.prototype,"useLegacyQualityMapping",void 0),Mt=Ot([oe("composited-card")],Mt);const jt=ue`
  font-family: 'Unchained', serif;
  line-height: 1.1;
`,It=ue`
  font-family: 'Open Sans', sans-serif;
  line-height: 1.5;
`,Vt=ue`black`,Dt=ue`white`,Bt=ue`#f9f9f9`,Ut=(ue`#f1f1f1`,ue`65px`),Wt=ue`100px`,Ft=ue`#282828`,Ht=ue`#333`,Qt=ue`rgba(255,255,255,0.15)`,Jt=[ue`#8295A2`,ue`#8295A2`,ue`#6A8B35`,ue`#3D91B9`,ue`#84343E`,ue`#B461C5`,ue`#E5D93C`,ue`#94E6FB`,ue`white`],Xt=ue`#9f78dd`,Gt=(e=0)=>ue`
  width: 100%;
  cursor: pointer;
  background: ${Ft};
  border: 2px solid ${Qt};
  padding: 6px;
`,Yt=(e=0)=>ue`
  height: 20px;
  width: 38px;
  border-radius: 28px;
  background: ${Jt[e]};
  cursor: pointer;
  -webkit-appearance: none;
`;var Kt=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Zt=class extends _e{constructor(){super(),this.currentProtoId=Math.floor(99*Math.random()+1),this.currentQuality=Math.floor(4*Math.random()+1),this.currentQualityInWords=At[this.currentQuality-1];const e=this.getUrlParams(),t=e.get("protoid"),r=e.get("quality");null!==t&&(this.currentProtoId=parseInt(t,10)),null!==r&&(this.currentQuality=parseInt(r,10),this.currentQualityInWords=At[this.currentQuality-1]),null!==t&&null!==r&&this.updatePageImageMetadata(),fetch("https://dev.godsunchained.com/proto?format=flat").then(e=>e.json()).then(e=>{this.protosCollection=e,this.currentProtoData=Object.assign({},e[this.currentProtoId],{id:this.currentProtoId}),this.updatePageMetadata()}).catch(e=>console.error(e))}static get styles(){return(()=>ue`
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
    ${It}
  }

  .appHeader {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: ${Ut};
    background: white;
    border-bottom: 2px solid ${Bt};
    text-align: center;
    line-height: calc(${Ut} - 3);
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
    ${It}
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
    border: 1px solid ${Xt};
    color: ${Xt};
    font-weight: 400;
    display: inline-block;
    vertical-align: top;
    margin-top: -5px;
    cursor: defualt;
  }

  .appHeader__title__sup:hover {
    background-color: ${Xt};
    color: ${Dt};
  }

  .appContainer {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: ${Ut};
  }

  .appContainer::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50vh;
    background: ${Ht};
  }

  .appContainer__intro {
    width: 50%;
    text-align: center;
    color: #b8b8b8;
    flex-grow: 0;
    margin: 20px 15px 0;
  }

  .appContainer__intro a {
    color: ${Vt};
    text-decoration: none;
  }

  .appContainer__intro a:hover {
    text-decoration: underline;
  }

  .appContainer__controls__title {
    ${jt}
    font-size: 18px;
    text-transform: uppercase;
    color: ${Dt};
    position: absolute;
    left: 20px;
    top: 0px;
    transform: translateY(-150%);
    margin: 0;
    text-shadow: 0 1px 0 ${Ht}, 1px 0 0 ${Ht},
      1px 1px 0 ${Ht}, -1px 0 0 ${Ht},
      -1px -1px 0 ${Ht}, 0 -1px 0 ${Ht};
  }

  .appContainer__fab {
    position: fixed;
    bottom: ${Wt};
    right: 25px;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: ${Xt};
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
    background: ${Dt};
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
    margin-bottom: calc(${Wt} + 30px);
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
    height: ${Wt};
    z-index: 2;
    background: ${Ft};
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
    border: 2px solid ${Qt};
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
    color: ${Jt[1]};
  }

  .quality--bronze {
    color: ${Jt[2]};
  }

  .quality--iron {
    color: ${Jt[3]};
  }

  .quality--meteorite {
    color: ${Jt[4]};
  }

  .quality--shadow {
    color: ${Jt[5]};
  }

  .quality--gold {
    color: ${Jt[6]};
  }

  .quality--diamond {
    color: ${Jt[7]};
  }

  .quality--mythic {
    color: ${Jt[8]};
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
    ${Gt(0)}
  }
  .appContainer__controls__panel__rangeSlider.quality--bronze::-webkit-slider-runnable-track {
    ${Gt(2)}
  }
  .appContainer__controls__panel__rangeSlider.quality--iron::-webkit-slider-runnable-track {
    ${Gt(3)}
  }
  .appContainer__controls__panel__rangeSlider.quality--meteorite::-webkit-slider-runnable-track {
    ${Gt(4)}
  }
  .appContainer__controls__panel__rangeSlider.quality--shadow::-webkit-slider-runnable-track {
    ${Gt(5)}
  }
  .appContainer__controls__panel__rangeSlider.quality--gold::-webkit-slider-runnable-track {
    ${Gt(6)}
  }
  .appContainer__controls__panel__rangeSlider.quality--diamond::-webkit-slider-runnable-track {
    ${Gt(7)}
  }
  .appContainer__controls__panel__rangeSlider.quality--mythic::-webkit-slider-runnable-track {
    ${Gt(8)}
  }

  .appContainer__controls__panel__rangeSlider.quality--plain::-webkit-slider-thumb {
    ${Yt(0)}
  }
  .appContainer__controls__panel__rangeSlider.quality--bronze::-webkit-slider-thumb {
    ${Yt(2)}
  }
  .appContainer__controls__panel__rangeSlider.quality--iron::-webkit-slider-thumb {
    ${Yt(3)}
  }
  .appContainer__controls__panel__rangeSlider.quality--meteorite::-webkit-slider-thumb {
    ${Yt(4)}
  }
  .appContainer__controls__panel__rangeSlider.quality--shadow::-webkit-slider-thumb {
    ${Yt(5)}
  }
  .appContainer__controls__panel__rangeSlider.quality--gold::-webkit-slider-thumb {
    ${Yt(6)}
  }
  .appContainer__controls__panel__rangeSlider.quality--diamond::-webkit-slider-thumb {
    ${Yt(7)}
  }
  .appContainer__controls__panel__rangeSlider.quality--mythic::-webkit-slider-thumb {
    ${Yt(8)}
  }

  /* FIREFOX: */

  .appContainer__controls__panel__rangeSlider.quality--plain::-moz-range-track {
    ${Gt(0)}
  }
  .appContainer__controls__panel__rangeSlider.quality--bronze::-moz-range-track {
    ${Gt(2)}
  }
  .appContainer__controls__panel__rangeSlider.quality--iron::-moz-range-track {
    ${Gt(3)}
  }
  .appContainer__controls__panel__rangeSlider.quality--meteorite::-moz-range-track {
    ${Gt(4)}
  }
  .appContainer__controls__panel__rangeSlider.quality--shadow::-moz-range-track {
    ${Gt(5)}
  }
  .appContainer__controls__panel__rangeSlider.quality--gold::-moz-range-track {
    ${Gt(6)}
  }
  .appContainer__controls__panel__rangeSlider.quality--diamond::-moz-range-track {
    ${Gt(7)}
  }
  .appContainer__controls__panel__rangeSlider.quality--mythic::-moz-range-track {
    ${Gt(8)}
  }

  .appContainer__controls__panel__rangeSlider.quality--plain::-moz-range-thumb {
    ${Yt(0)}
  }
  .appContainer__controls__panel__rangeSlider.quality--bronze::-moz-range-thumb {
    ${Yt(2)}
  }
  .appContainer__controls__panel__rangeSlider.quality--iron::-moz-range-thumb {
    ${Yt(3)}
  }
  .appContainer__controls__panel__rangeSlider.quality--meteorite::-moz-range-thumb {
    ${Yt(4)}
  }
  .appContainer__controls__panel__rangeSlider.quality--shadow::-moz-range-thumb {
    ${Yt(5)}
  }
  .appContainer__controls__panel__rangeSlider.quality--gold::-moz-range-thumb {
    ${Yt(6)}
  }
  .appContainer__controls__panel__rangeSlider.quality--diamond::-moz-range-thumb {
    ${Yt(7)}
  }
  .appContainer__controls__panel__rangeSlider.quality--mythic::-moz-range-thumb {
    ${Yt(8)}
  }
`)()}updated(e){void 0===e.get("currentProtoId")&&void 0===e.get("currentQuality")||(this.updateUrlParams(),this.updatePageMetadata())}updatePageMetadata(){document.querySelector('meta[property="og:title"]').setAttribute("content",this.currentProtoData.name),document.querySelector('meta[property="og:description"]').setAttribute("content",this.currentProtoData.effect),document.querySelector('meta[property="og:url"]').setAttribute("content",location.href),this.updatePageImageMetadata()}get currentImageUrl(){return`https://card.godsunchained.com?id=${this.currentProtoId}&q=${this.currentQuality}&w=`}updatePageImageMetadata(){document.querySelector('meta[property="og:image"]').setAttribute("content",`${this.currentImageUrl}256`)}getUrlParams(){return new URLSearchParams(window.location.search)}updateUrlParams(){const e=this.getUrlParams();e.set("protoid",`${this.currentProtoId}`),e.set("quality",`${this.currentQuality}`),window.history.pushState({},"",decodeURIComponent(`${location.pathname}?${e}`))}getScreenShot(e){e.preventDefault(),window.open()}render(){return M`
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
              @change=${e=>{this.currentQuality=e.target.value,this.currentQualityInWords=At[this.currentQuality-1]}}
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
            ${this.currentProtoData?M`
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
    `}};Kt([le()],Zt.prototype,"currentProtoId",void 0),Kt([le()],Zt.prototype,"currentQuality",void 0),Kt([le()],Zt.prototype,"currentQualityInWords",void 0),Kt([le()],Zt.prototype,"currentProtoData",void 0),Kt([le()],Zt.prototype,"protosCollection",void 0),Zt=Kt([oe("demo-app")],Zt);r(8);const er=document.createElement("style");er.innerHTML=pt().cssText.replace(":host",".compositedCardDomRender"),document.head.appendChild(er)}]);
//# sourceMappingURL=bundle.23174aee9caeeb2767a4.js.map