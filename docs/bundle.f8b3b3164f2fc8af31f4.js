!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=10)}([function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=(s=r,o=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),"/*# ".concat(c," */")),a=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot).concat(e," */")}));return[n].concat(a).concat([i]).join("\n")}var s,o,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2],"{").concat(n,"}"):n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var s=0;s<e.length;s++){var o=e[s];null!=o[0]&&r[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="(".concat(o[2],") and (").concat(n,")")),t.push(o))}},t}},function(e,t,n){"use strict";var r,i={},a=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},s=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}();function o(e,t){for(var n=[],r={},i=0;i<e.length;i++){var a=e[i],s=t.base?a[0]+t.base:a[0],o={css:a[1],media:a[2],sourceMap:a[3]};r[s]?r[s].parts.push(o):n.push(r[s]={id:s,parts:[o]})}return n}function c(e,t){for(var n=0;n<e.length;n++){var r=e[n],a=i[r.id],s=0;if(a){for(a.refs++;s<a.parts.length;s++)a.parts[s](r.parts[s]);for(;s<r.parts.length;s++)a.parts.push(g(r.parts[s],t))}else{for(var o=[];s<r.parts.length;s++)o.push(g(r.parts[s],t));i[r.id]={id:r.id,refs:1,parts:o}}}}function l(e){var t=document.createElement("style");if(void 0===e.attributes.nonce){var r=n.nc;r&&(e.attributes.nonce=r)}if(Object.keys(e.attributes).forEach((function(n){t.setAttribute(n,e.attributes[n])})),"function"==typeof e.insert)e.insert(t);else{var i=s(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var d,p=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function u(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=p(t,i);else{var a=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(a,s[t]):e.appendChild(a)}}function h(e,t,n){var r=n.css,i=n.media,a=n.sourceMap;if(i&&e.setAttribute("media",i),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var _=null,m=0;function g(e,t){var n,r,i;if(t.singleton){var a=m++;n=_||(_=l(t)),r=u.bind(null,n,a,!1),i=u.bind(null,n,a,!0)}else n=l(t),r=h.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).attributes="object"==typeof t.attributes?t.attributes:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a());var n=o(e,t);return c(n,t),function(e){for(var r=[],a=0;a<n.length;a++){var s=n[a],l=i[s.id];l&&(l.refs--,r.push(l))}e&&c(o(e,t),t);for(var d=0;d<r.length;d++){var p=r[d];if(0===p.refs){for(var u=0;u<p.parts.length;u++)p.parts[u]();delete i[p.id]}}}}},function(e,t){
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
!function(){"use strict";var e,t=!1,n=[],r=!1;function i(){window.WebComponents.ready=!0,document.dispatchEvent(new CustomEvent("WebComponentsReady",{bubbles:!0}))}function a(){window.customElements&&customElements.polyfillWrapFlushCallback&&customElements.polyfillWrapFlushCallback((function(t){e=t,r&&e()}))}function s(){window.HTMLTemplateElement&&HTMLTemplateElement.bootstrap&&HTMLTemplateElement.bootstrap(window.document),t=!0,o().then(i)}function o(){r=!1;var t=n.map((function(e){return e instanceof Function?e():e}));return n=[],Promise.all(t).then((function(){r=!0,e&&e()})).catch((function(e){console.error(e)}))}window.WebComponents=window.WebComponents||{},window.WebComponents.ready=window.WebComponents.ready||!1,window.WebComponents.waitFor=window.WebComponents.waitFor||function(e){e&&(n.push(e),t&&o())},window.WebComponents._batchCustomElements=a;var c="webcomponents-loader.js",l=[];(!("attachShadow"in Element.prototype&&"getRootNode"in Element.prototype)||window.ShadyDOM&&window.ShadyDOM.force)&&l.push("sd"),window.customElements&&!window.customElements.forcePolyfill||l.push("ce");var d=function(){var e=document.createElement("template");if(!("content"in e))return!0;if(!(e.content.cloneNode()instanceof DocumentFragment))return!0;var t=document.createElement("template");t.content.appendChild(document.createElement("div")),e.content.appendChild(t);var n=e.cloneNode(!0);return 0===n.content.childNodes.length||0===n.content.firstChild.content.childNodes.length}();if(window.Promise&&Array.from&&window.URL&&window.Symbol&&!d||(l=["sd-ce-pf"]),l.length){var p,u="bundles/webcomponents-"+l.join("-")+".js";if(window.WebComponents.root)p=window.WebComponents.root+u;else{var h=document.querySelector('script[src*="'+c+'"]');p=h.src.replace(c,u)}var _=document.createElement("script");_.src=p,"loading"===document.readyState?(_.setAttribute("onload","window.WebComponents._batchCustomElements()"),document.write(_.outerHTML),document.addEventListener("DOMContentLoaded",s)):(_.addEventListener("load",(function(){a(),s()})),_.addEventListener("error",(function(){throw new Error("Could not load polyfill bundle"+p)})),document.head.appendChild(_))}else"complete"===document.readyState?(t=!0,i()):(window.addEventListener("load",s),window.addEventListener("DOMContentLoaded",(function(){window.removeEventListener("load",s),s()})))}()},function(e,t,n){e.exports=n.p+"eb5c8c08d7563671b75abdd4782079cb.png"},function(e,t,n){var r=n(5);"string"==typeof r&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};n(1)(r,i);r.locals&&(e.exports=r.locals)},function(e,t,n){(t=e.exports=n(0)(!1)).push([e.i,"@import url(https://images.godsunchained.com/fonts/css/card-fonts.css);",""]),t.push([e.i,"",""])},function(e,t,n){e.exports=n.p+"c2848aacde2d388cba47a89a95be606b.svg"},function(e,t,n){e.exports=n.p+"eddc5abb8686fffbc9f9fa841727baff.svg"},function(e,t,n){var r=n(9);"string"==typeof r&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};n(1)(r,i);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,"*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n}\n\n.githubButtonContainer {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  z-index: 2;\n}\n\n.tempRenderHolder {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  opacity: 0;\n}\n\n.tempRenderHolder canvas {\n  position: absolute;\n  top: 0;\n  left: 0;\n  user-select: none;\n  pointer-events: none;\n}\n\n.compositedCardDomRender {\n  display: flex;\n  position: relative;\n  font-family: 'Unchained', serif;\n  line-height: 1.1;\n  user-select: none;\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 1000px;\n  height: 1400px;\n}\n",""])},function(e,t,n){"use strict";n.r(t);n(2);
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
 */const r=new WeakMap,i=e=>(...t)=>{const n=e(...t);return r.set(n,!0),n},a=e=>"function"==typeof e&&r.has(e),s=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,o=(e,t,n=null)=>{for(;t!==n;){const n=t.nextSibling;e.removeChild(t),t=n}},c={},l={},d=`{{lit-${String(Math.random()).slice(2)}}}`,p=`\x3c!--${d}--\x3e`,u=new RegExp(`${d}|${p}`),h="$lit$";class _{constructor(e,t){this.parts=[],this.element=t;const n=[],r=[],i=document.createTreeWalker(t.content,133,null,!1);let a=0,s=-1,o=0;const{strings:c,values:{length:l}}=e;for(;o<l;){const e=i.nextNode();if(null!==e){if(s++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:n}=t;let r=0;for(let e=0;e<n;e++)m(t[e].name,h)&&r++;for(;r-- >0;){const t=c[o],n=y.exec(t)[2],r=n.toLowerCase()+h,i=e.getAttribute(r);e.removeAttribute(r);const a=i.split(u);this.parts.push({type:"attribute",index:s,name:n,strings:a}),o+=a.length-1}}"TEMPLATE"===e.tagName&&(r.push(e),i.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(d)>=0){const r=e.parentNode,i=t.split(u),a=i.length-1;for(let t=0;t<a;t++){let n,a=i[t];if(""===a)n=f();else{const e=y.exec(a);null!==e&&m(e[2],h)&&(a=a.slice(0,e.index)+e[1]+e[2].slice(0,-h.length)+e[3]),n=document.createTextNode(a)}r.insertBefore(n,e),this.parts.push({type:"node",index:++s})}""===i[a]?(r.insertBefore(f(),e),n.push(e)):e.data=i[a],o+=a}}else if(8===e.nodeType)if(e.data===d){const t=e.parentNode;null!==e.previousSibling&&s!==a||(s++,t.insertBefore(f(),e)),a=s,this.parts.push({type:"node",index:s}),null===e.nextSibling?e.data="":(n.push(e),s--),o++}else{let t=-1;for(;-1!==(t=e.data.indexOf(d,t+1));)this.parts.push({type:"node",index:-1}),o++}}else i.currentNode=r.pop()}for(const e of n)e.parentNode.removeChild(e)}}const m=(e,t)=>{const n=e.length-t.length;return n>=0&&e.slice(n)===t},g=e=>-1!==e.index,f=()=>document.createComment(""),y=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
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
class b{constructor(e,t,n){this.__parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this.__parts)void 0!==n&&n.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=s?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],n=this.template.parts,r=document.createTreeWalker(e,133,null,!1);let i,a=0,o=0,c=r.nextNode();for(;a<n.length;)if(i=n[a],g(i)){for(;o<i.index;)o++,"TEMPLATE"===c.nodeName&&(t.push(c),r.currentNode=c.content),null===(c=r.nextNode())&&(r.currentNode=t.pop(),c=r.nextNode());if("node"===i.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(c.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(c,i.name,i.strings,this.options));a++}else this.__parts.push(void 0),a++;return s&&(document.adoptNode(e),customElements.upgrade(e)),e}}
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
 */const w=` ${d} `;class ${constructor(e,t,n,r){this.strings=e,this.values=t,this.type=n,this.processor=r}getHTML(){const e=this.strings.length-1;let t="",n=!1;for(let r=0;r<e;r++){const e=this.strings[r],i=e.lastIndexOf("\x3c!--");n=(i>-1||n)&&-1===e.indexOf("--\x3e",i+1);const a=y.exec(e);t+=null===a?e+(n?w:p):e.substr(0,a.index)+a[1]+a[2]+h+a[3]+d}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}
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
const v=e=>null===e||!("object"==typeof e||"function"==typeof e),x=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class S{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let e=0;e<n.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new C(this)}_getValue(){const e=this.strings,t=e.length-1;let n="";for(let r=0;r<t;r++){n+=e[r];const t=this.parts[r];if(void 0!==t){const e=t.value;if(v(e)||!x(e))n+="string"==typeof e?e:String(e);else for(const t of e)n+="string"==typeof t?t:String(t)}}return n+=e[t],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class C{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===c||v(e)&&e===this.value||(this.value=e,a(e)||(this.committer.dirty=!0))}commit(){for(;a(this.value);){const e=this.value;this.value=c,e(this)}this.value!==c&&this.committer.commit()}}class k{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(f()),this.endNode=e.appendChild(f())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=f()),e.__insert(this.endNode=f())}insertAfterPart(e){e.__insert(this.startNode=f()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){for(;a(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=c,e(this)}const e=this.__pendingValue;e!==c&&(v(e)?e!==this.value&&this.__commitText(e):e instanceof $?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):x(e)?this.__commitIterable(e):e===l?(this.value=l,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,n="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=n:this.__commitNode(document.createTextNode(n)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof b&&this.value.template===t)this.value.update(e.values);else{const n=new b(t,e.processor,this.options),r=n._clone();n.update(e.values),this.__commitNode(r),this.value=n}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,r=0;for(const i of e)n=t[r],void 0===n&&(n=new k(this.options),t.push(n),0===r?n.appendIntoPart(this):n.insertAfterPart(t[r-1])),n.setValue(i),n.commit(),r++;r<t.length&&(t.length=r,this.clear(n&&n.endNode))}clear(e=this.startNode){o(this.startNode.parentNode,e.nextSibling,this.endNode)}}class P{constructor(e,t,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this.__pendingValue=e}commit(){for(;a(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=c,e(this)}if(this.__pendingValue===c)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=c}}class E extends S{constructor(e,t,n){super(e,t,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new T(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class T extends C{}let z=!1;try{const e={get capture(){return z=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class N{constructor(e,t,n){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;a(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=c,e(this)}if(this.__pendingValue===c)return;const e=this.__pendingValue,t=this.value,n=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),r=null!=e&&(null==t||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),r&&(this.__options=q(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=c}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const q=e=>e&&(z?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);
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
 */const O=new class{handleAttributeExpressions(e,t,n,r){const i=t[0];if("."===i){return new E(e,t.slice(1),n).parts}return"@"===i?[new N(e,t.slice(1),r.eventContext)]:"?"===i?[new P(e,t.slice(1),n)]:new S(e,t,n).parts}handleTextExpression(e){return new k(e)}};
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
 */function A(e){let t=R.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},R.set(e.type,t));let n=t.stringsArray.get(e.strings);if(void 0!==n)return n;const r=e.strings.join(d);return n=t.keyString.get(r),void 0===n&&(n=new _(e,e.getTemplateElement()),t.keyString.set(r,n)),t.stringsArray.set(e.strings,n),n}const R=new Map,M=new WeakMap;
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
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const L=(e,...t)=>new $(e,t,"html",O),I=133;function j(e,t){const{element:{content:n},parts:r}=e,i=document.createTreeWalker(n,I,null,!1);let a=B(r),s=r[a],o=-1,c=0;const l=[];let d=null;for(;i.nextNode();){o++;const e=i.currentNode;for(e.previousSibling===d&&(d=null),t.has(e)&&(l.push(e),null===d&&(d=e)),null!==d&&c++;void 0!==s&&s.index===o;)s.index=null!==d?-1:s.index-c,a=B(r,a),s=r[a]}l.forEach(e=>e.parentNode.removeChild(e))}const V=e=>{let t=11===e.nodeType?0:1;const n=document.createTreeWalker(e,I,null,!1);for(;n.nextNode();)t++;return t},B=(e,t=-1)=>{for(let n=t+1;n<e.length;n++){const t=e[n];if(g(t))return n}return-1};
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
const D=(e,t)=>`${e}--${t}`;let U=!0;void 0===window.ShadyCSS?U=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),U=!1);const W=e=>t=>{const n=D(t.type,e);let r=R.get(n);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},R.set(n,r));let i=r.stringsArray.get(t.strings);if(void 0!==i)return i;const a=t.strings.join(d);if(i=r.keyString.get(a),void 0===i){const n=t.getTemplateElement();U&&window.ShadyCSS.prepareTemplateDom(n,e),i=new _(t,n),r.keyString.set(a,i)}return r.stringsArray.set(t.strings,i),i},F=["html","svg"],H=new Set,Q=(e,t,n)=>{H.add(e);const r=n?n.element:document.createElement("template"),i=t.querySelectorAll("style"),{length:a}=i;if(0===a)return void window.ShadyCSS.prepareTemplateStyles(r,e);const s=document.createElement("style");for(let e=0;e<a;e++){const t=i[e];t.parentNode.removeChild(t),s.textContent+=t.textContent}(e=>{F.forEach(t=>{const n=R.get(D(t,e));void 0!==n&&n.keyString.forEach(e=>{const{element:{content:t}}=e,n=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{n.add(e)}),j(e,n)})})})(e);const o=r.content;n?function(e,t,n=null){const{element:{content:r},parts:i}=e;if(null==n)return void r.appendChild(t);const a=document.createTreeWalker(r,I,null,!1);let s=B(i),o=0,c=-1;for(;a.nextNode();){for(c++,a.currentNode===n&&(o=V(t),n.parentNode.insertBefore(t,n));-1!==s&&i[s].index===c;){if(o>0){for(;-1!==s;)i[s].index+=o,s=B(i,s);return}s=B(i,s)}}}(n,s,o.firstChild):o.insertBefore(s,o.firstChild),window.ShadyCSS.prepareTemplateStyles(r,e);const c=o.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)t.insertBefore(c.cloneNode(!0),t.firstChild);else if(n){o.insertBefore(s,o.firstChild);const e=new Set;e.add(s),j(n,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const J={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},X=(e,t)=>t!==e&&(t==t||e==e),G={attribute:!0,type:String,converter:J,reflect:!1,hasChanged:X},Y=Promise.resolve(!0),K=1,Z=4,ee=8,te=16,ne=32,re="finalized";class ie extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=Y,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,n)=>{const r=this._attributeNameForProperty(n,t);void 0!==r&&(this._attributeToPropertyMap.set(r,n),e.push(r))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=G){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const n="symbol"==typeof e?Symbol():`__${e}`;Object.defineProperty(this.prototype,e,{get(){return this[n]},set(t){const r=this[e];this[n]=t,this._requestUpdate(e,r)},configurable:!0,enumerable:!0})}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty(re)||e.finalize(),this[re]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const n of t)this.createProperty(n,e[n])}}static _attributeNameForProperty(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,n=X){return n(e,t)}static _propertyValueFromAttribute(e,t){const n=t.type,r=t.converter||J,i="function"==typeof r?r:r.fromAttribute;return i?i(e,n):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const n=t.type,r=t.converter;return(r&&r.toAttribute||J.toAttribute)(e,n)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|ne,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,n){t!==n&&this._attributeToProperty(e,n)}_propertyToAttribute(e,t,n=G){const r=this.constructor,i=r._attributeNameForProperty(e,n);if(void 0!==i){const e=r._propertyValueToAttribute(t,n);if(void 0===e)return;this._updateState=this._updateState|ee,null==e?this.removeAttribute(i):this.setAttribute(i,e),this._updateState=this._updateState&~ee}}_attributeToProperty(e,t){if(this._updateState&ee)return;const n=this.constructor,r=n._attributeToPropertyMap.get(e);if(void 0!==r){const e=n._classProperties.get(r)||G;this._updateState=this._updateState|te,this[r]=n._propertyValueFromAttribute(t,e),this._updateState=this._updateState&~te}}_requestUpdate(e,t){let n=!0;if(void 0!==e){const r=this.constructor,i=r._classProperties.get(e)||G;r._valueHasChanged(this[e],t,i.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==i.reflect||this._updateState&te||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,i))):n=!1}!this._hasRequestedUpdate&&n&&this._enqueueUpdate()}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){let e,t;this._updateState=this._updateState|Z;const n=this._updatePromise;this._updatePromise=new Promise((n,r)=>{e=n,t=r});try{await n}catch(e){}this._hasConnected||await new Promise(e=>this._hasConnectedResolver=e);try{const e=this.performUpdate();null!=e&&await e}catch(e){t(e)}e(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&ne}get _hasRequestedUpdate(){return this._updateState&Z}get hasUpdated(){return this._updateState&K}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e&&this.update(t)}catch(t){throw e=!1,t}finally{this._markUpdated()}e&&(this._updateState&K||(this._updateState=this._updateState|K,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~Z}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0)}updated(e){}firstUpdated(e){}}ie[re]=!0;
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
const ae=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:n,elements:r}=t;return{kind:n,elements:r,finisher(t){window.customElements.define(e,t)}}})(e,t),se=(e,t)=>"method"!==t.kind||!t.descriptor||"value"in t.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(n){n.createProperty(t.key,e)}}:Object.assign({},t,{finisher(n){n.createProperty(t.key,e)}}),oe=(e,t,n)=>{t.constructor.createProperty(n,e)};function ce(e){return(t,n)=>void 0!==n?oe(e,t,n):se(e,t)}const le="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,de=Symbol();class pe{constructor(e,t){if(t!==de)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(le?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const ue=(e,...t)=>{const n=t.reduce((t,n,r)=>t+(e=>{if(e instanceof pe)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1],e[0]);return new pe(n,de)};
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.2.1");const he=e=>e.flat?e.flat(1/0):function e(t,n=[]){for(let r=0,i=t.length;r<i;r++){const i=t[r];Array.isArray(i)?e(i,n):n.push(i)}return n}(e);class _e extends ie{static finalize(){super.finalize.call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const e=this.styles,t=[];if(Array.isArray(e)){he(e).reduceRight((e,t)=>(e.add(t),e),new Set).forEach(e=>t.unshift(e))}else e&&t.push(e);return t}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?le?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){super.update(e);const t=this.render();t instanceof $&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){}}_e.finalized=!0,_e.render=(e,t,n)=>{if(!n||"object"!=typeof n||!n.scopeName)throw new Error("The `scopeName` option is required.");const r=n.scopeName,i=M.has(t),a=U&&11===t.nodeType&&!!t.host,s=a&&!H.has(r),c=s?document.createDocumentFragment():t;if(((e,t,n)=>{let r=M.get(t);void 0===r&&(o(t,t.firstChild),M.set(t,r=new k(Object.assign({templateFactory:A},n))),r.appendInto(t)),r.setValue(e),r.commit()})(e,c,Object.assign({templateFactory:W(r)},n)),s){const e=M.get(c);M.delete(c);const n=e.value instanceof b?e.value.template:void 0;Q(r,c,n),o(t,t.firstChild),t.appendChild(c),M.set(t,e)}!i&&a&&window.ShadyCSS.styleElement(t.host)};var me,ge,fe=function(e){return Object.defineProperty(e,"toString",{value:function(){return"function ResizeObserver () { [polyfill code] }"}}),e},ye="undefined"==typeof window?{}:window,be=ye.requestAnimationFrame,we={attributes:!0,characterData:!0,childList:!0,subtree:!0},$e=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],ve=new Map,xe=new Map,Se=function(){me||(me=!0,be((function(e){me=!1;var t=[],n=[];ve.forEach((function(e){return t.push(e)})),xe.forEach((function(e){return n.push(e)})),ve.clear(),xe.clear();try{for(var r=0,i=t;r<i.length;r++){(0,i[r])(e)}}finally{for(var a=0,s=n;a<s.length;a++){(0,s[a])(e)}}})))},Ce=new(function(){function e(){var e=this;this.stopped=!0,this.listener=function(){return e.schedule()}}return e.prototype.run=function(e){var t=this;xe.set(this,(function(){var n=!1;try{n=Ye()}finally{n?t.run(60):e?t.run(e-1):t.start()}})),Se()},e.prototype.schedule=function(){this.stop(),this.run(12)},e.prototype.observe=function(){var e=this,t=function(){return e.observer&&e.observer.observe(document.body,we)};document.body?t():ye.addEventListener("DOMContentLoaded",t)},e.prototype.start=function(){var e=this;this.stopped&&(this.stopped=!1,"MutationObserver"in ye&&(this.observer=new MutationObserver(this.listener),this.observe()),$e.forEach((function(t){return ye.addEventListener(t,e.listener,!0)})))},e.prototype.stop=function(){var e=this;this.stopped||(this.observer&&this.observer.disconnect(),$e.forEach((function(t){return ye.removeEventListener(t,e.listener,!0)})),this.stopped=!0)},e}()),ke=0;ye.requestAnimationFrame=function(e){if("function"!=typeof e)throw new Error("requestAnimationFrame expects 1 callback argument of type function.");var t=ke+=1;return ve.set(t,(function(t){return e(t)})),Se(),t},ye.cancelAnimationFrame=function(e){ve.delete(e)},fe(ye.requestAnimationFrame),fe(ye.cancelAnimationFrame),function(e){e.BORDER_BOX="border-box",e.CONTENT_BOX="content-box"}(ge||(ge={}));var Pe=function(){function e(e,t,n,r){return this.x=e,this.y=t,this.width=n,this.height=r,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,Object.freeze(this)}return e.fromRect=function(t){return new e(t.x,t.y,t.width,t.height)},e}(),Ee=function(e){return e instanceof SVGElement&&"getBBox"in e},Te=function(e){if(Ee(e)){var t=e.getBBox(),n=t.width,r=t.height;return!n&&!r}var i=e,a=i.offsetWidth,s=i.offsetHeight;return!(a||s||e.getClientRects().length)},ze=new Map,Ne=/auto|scroll/,qe=/^tb|vertical/,Oe=/msie|trident/i.test(ye.navigator&&ye.navigator.userAgent),Ae=function(e){return parseFloat(e||"0")},Re=function(e,t,n){return void 0===e&&(e=0),void 0===t&&(t=0),void 0===n&&(n=!1),Object.freeze({inlineSize:(n?t:e)||0,blockSize:(n?e:t)||0})},Me=Object.freeze({borderBoxSize:Re(),contentBoxSize:Re(),contentRect:new Pe(0,0,0,0)}),Le=function(e){if(ze.has(e))return ze.get(e);if(Te(e))return ze.set(e,Me),Me;var t=getComputedStyle(e),n=Ee(e)&&e.getBBox(),r=!Oe&&"border-box"===t.boxSizing,i=qe.test(t.writingMode||""),a=!n&&Ne.test(t.overflowY||""),s=!n&&Ne.test(t.overflowX||""),o=n?0:Ae(t.paddingTop),c=n?0:Ae(t.paddingRight),l=n?0:Ae(t.paddingBottom),d=n?0:Ae(t.paddingLeft),p=n?0:Ae(t.borderTopWidth),u=n?0:Ae(t.borderRightWidth),h=n?0:Ae(t.borderBottomWidth),_=d+c,m=o+l,g=(n?0:Ae(t.borderLeftWidth))+u,f=p+h,y=s?e.offsetHeight-f-e.clientHeight:0,b=a?e.offsetWidth-g-e.clientWidth:0,w=r?_+g:0,$=r?m+f:0,v=n?n.width:Ae(t.width)-w-b,x=n?n.height:Ae(t.height)-$-y,S=v+_+b+g,C=x+m+y+f,k=Object.freeze({borderBoxSize:Re(S,C,i),contentBoxSize:Re(v,x,i),contentRect:new Pe(d,o,v,x)});return ze.set(e,k),k},Ie=function(e,t){var n=Le(e),r=n.borderBoxSize,i=n.contentBoxSize;return t===ge.BORDER_BOX?r:i},je=function(){function e(e,t){this.target=e,this.observedBox=t||ge.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return e.prototype.isActive=function(){var e,t=Ie(this.target,this.observedBox);return e=this.target,Ee(e)||function(e){switch(e.tagName){case"INPUT":if("image"!==e.type)break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1}(e)||"inline"!==getComputedStyle(e).display||(this.lastReportedSize=t),this.lastReportedSize.inlineSize!==t.inlineSize||this.lastReportedSize.blockSize!==t.blockSize},e}(),Ve=function(e,t){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=e,this.callback=t},Be="ResizeObserver loop completed with undelivered notifications.",De=function(e){var t=Le(e);this.target=e,this.contentRect=t.contentRect,this.borderBoxSize=t.borderBoxSize,this.contentBoxSize=t.contentBoxSize},Ue=function(e){if(Te(e))return 1/0;for(var t=0,n=e.parentNode;n;)t+=1,n=n.parentNode;return t},We=function(){var e=1/0,t=[];He.forEach((function(n){if(0!==n.activeTargets.length){var r=[];n.activeTargets.forEach((function(t){var n=new De(t.target),i=Ue(t.target);r.push(n),t.lastReportedSize=Ie(t.target,t.observedBox),i<e&&(e=i)})),t.push((function(){n.callback.call(n.observer,r,n.observer)})),n.activeTargets.splice(0,n.activeTargets.length)}}));for(var n=0,r=t;n<r.length;n++){(0,r[n])()}return e},Fe=function(e){ze.clear(),He.forEach((function(t){t.activeTargets.splice(0,t.activeTargets.length),t.skippedTargets.splice(0,t.skippedTargets.length),t.observationTargets.forEach((function(n){n.isActive()&&(Ue(n.target)>e?t.activeTargets.push(n):t.skippedTargets.push(n))}))}))},He=[],Qe=new Map,Je=0,Xe=function(e){!Je&&e>0&&Ce.start(),!(Je+=e)&&Ce.stop()},Ge=function(e,t){for(var n=0;n<e.length;n+=1)if(e[n].target===t)return n;return-1},Ye=function(){var e,t=0;for(Fe(t);He.some((function(e){return e.activeTargets.length>0}));)t=We(),Fe(t);return He.some((function(e){return e.skippedTargets.length>0}))&&("function"==typeof ErrorEvent?e=new ErrorEvent("error",{message:Be}):((e=document.createEvent("Event")).initEvent("error",!1,!1),e.message=Be),window.dispatchEvent(e)),t>0},Ke=function(){function e(){}return e.connect=function(e,t){var n=new Ve(e,t);He.push(n),Qe.set(e,n)},e.observe=function(e,t,n){if(Qe.has(e)){var r=Qe.get(e);Ge(r.observationTargets,t)<0&&(r.observationTargets.push(new je(t,n&&n.box)),Xe(1),Ce.schedule())}},e.unobserve=function(e,t){if(Qe.has(e)){var n=Qe.get(e),r=Ge(n.observationTargets,t);r>=0&&(n.observationTargets.splice(r,1),Xe(-1))}},e.disconnect=function(e){if(Qe.has(e)){var t=Qe.get(e);He.splice(He.indexOf(t),1),Qe.delete(e),Xe(-t.observationTargets.length)}},e}(),Ze=function(){function e(e){if(0===arguments.length)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if("function"!=typeof e)throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");Ke.connect(this,e)}return e.prototype.observe=function(e,t){if(0===arguments.length)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(e instanceof Element==!1)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");Ke.observe(this,e,t)},e.prototype.unobserve=function(e){if(0===arguments.length)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(e instanceof Element==!1)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");Ke.unobserve(this,e)},e.prototype.disconnect=function(){Ke.disconnect(this)},e.toString=function(){return"function ResizeObserver () { [polyfill code] }"},e}();
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
const et=new WeakMap,tt=i(e=>t=>{if(!(t instanceof C)||t instanceof T||"style"!==t.committer.name||t.committer.parts.length>1)throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");const{committer:n}=t,{style:r}=n.element;et.has(t)||(r.cssText=n.strings.join(" "));const i=et.get(t);for(const t in i)t in e||(-1===t.indexOf("-")?r[t]=null:r.removeProperty(t));for(const t in e)-1===t.indexOf("-")?r[t]=e[t]:r.setProperty(t,e[t]);et.set(t,e)}),nt=new WeakMap,rt=i(e=>t=>{if(!(t instanceof k))throw new Error("unsafeHTML can only be used in text bindings");const n=nt.get(t);if(void 0!==n&&v(e)&&e===n.value&&t.value===n.fragment)return;const r=document.createElement("template");r.innerHTML=e;const i=document.importNode(r.content,!0);t.setValue(i),nt.set(t,{value:e,fragment:i})});customElements.define("card-icon",class extends _e{constructor(){super(...arguments),this.iconLigature="",this.fillGradientTarget="top"}static get properties(){return{iconLigature:{type:String},fillColor:{type:String},fillGradient:{type:String},fillGradientTarget:{type:String}}}static get styles(){return ue`
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
    `}render(){return L`
      <i class="icon">${this.iconLigature}</i>
    `}});const it=250,at=375,st=500,ot=720,ct=1024,lt=256,dt=512,pt=720,ut=1024,ht=256,_t=512;n(4);const mt=ue`
  font-family: 'Unchained', serif;
  line-height: 1.1;
`,gt=ue`
  font-family: 'Open Sans', sans-serif;
`,ft=ue`white`,yt=(ue`black`,ue`rgb(51, 51, 51)`),bt=ue`#f9f9f9`,wt=(ue`#f1f1f1`,ue`
  ${mt}
  font-weight: 700;
  line-height: 0.8;
  text-align: center;
  color: ${ft};
`),$t=()=>ue`
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
    background: ${bt};
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
    background: ${yt};
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
    ${wt}
    position: absolute;
  }

  .card__nameText {
    position: absolute;
    white-space: nowrap;
    display: flex;
    ${wt}
  }

  .card__nameText__inner {
    margin: auto;
  }

  .card__descriptionText {
    ${mt}
    position: absolute;
    text-align: center;
    color: black;
    display: flex;
  }

  .card__descriptionText__inner {
    ${gt}
    margin: auto;
  }

  .card__attackText {
    position: absolute;
    ${wt}
  }

  .card__healthText {
    position: absolute;
    ${wt}
  }

  .card__tribeText {
    position: absolute;
    text-transform: capitalize;
    display: flex;
    ${wt}
  }

  .card__tribeText__inner {
    margin: auto;
  }

  .card__setIcon {
    position: absolute;
    color: white;
  }
`;var vt=function(e,t,n,r){var i,a=arguments.length,s=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(s=(a<3?i(s):a>3?i(t,n,s):i(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s},xt=function(e,t,n,r){return new(n||(n=Promise))((function(i,a){function s(e){try{c(r.next(e))}catch(e){a(e)}}function o(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){e.done?i(e.value):new n((function(t){t(e.value)})).then(s,o)}c((r=r.apply(e,t||[])).next())}))};const St=["plain","plain","bronze","iron","meteorite","shadow","gold","diamond"],Ct=["diamond","gold","shadow","meteorite","plain"],kt=new Ze(e=>{e.forEach(e=>{e.target.handleResize(e)})});let Pt=class extends _e{constructor(){super(),this.quality=5,this.useLegacyQualityMapping=!1,this.protoCardData={type:"",effect:"",name:"",rarity:"",god:"",set:"",mana:null,id:null,attack:null,health:null,tribe:""},this.loading=!0,this.quality=0,this.ch=.01*this.offsetHeight,this.cw=.01*this.offsetWidth}static get styles(){return $t()}connectedCallback(){super.connectedCallback(),kt.observe(this)}disconnectedCallback(){super.disconnectedCallback(),kt.unobserve(this)}updated(e){e.forEach((e,t)=>{"protoId"===t?this.getProtoDataFromApi():"inputProtoData"===t&&this.getProtoDataFromInput()})}handleResize(e){const t=e.target.shadowRoot.children[0];this.ch=.01*t.offsetHeight,this.cw=.01*t.offsetWidth,this.requestUpdate()}fetchProtoData(){return xt(this,void 0,void 0,(function*(){return this.loading=!0,fetch(`https://api.godsunchained.com/v0/proto/${this.protoId}`).then(e=>e.json())}))}getProtoDataFromApi(){return xt(this,void 0,void 0,(function*(){return this.fetchProtoData().then(e=>{const{id:t,type:n,attack:r,health:i,effect:a,name:s,rarity:o,god:c,mana:l,set:d,tribe:p}=e;return this.protoCardData={id:t,type:n,attack:r.Int64,health:i.Int64,effect:a,name:s,rarity:o,god:c,mana:l,set:d,tribe:p.String},this.loading=!1,this.requestUpdate(),e})}))}getProtoDataFromInput(){this.protoCardData=Object.assign({},this.inputProtoData),this.loading=!1,this.requestUpdate()}render(){const e=this.useLegacyQualityMapping?St[this.quality]:Ct[this.quality-1],t="mythic"===this.protoCardData.rarity;return L`
      <div class="card__innerRatioConstrainer">
        ${this.loading?(()=>L`
  <div class="card__loading">
    <img
      class="card__loading__img"
      src="${n(3)}"
      alt="immutable loading spinner"
    />
  </div>
`)():L`
              ${(({id:e,responsiveSrcsetSizes:t=`${it}px`})=>L`
    <picture class="card__artwork">
      <source
        srcset="
          https://images.godsunchained.com/art2/${it}/${e}.webp ${it}w,
          https://images.godsunchained.com/art2/${at}/${e}.webp ${at}w,
          https://images.godsunchained.com/art2/${st}/${e}.webp ${st}w,
          https://images.godsunchained.com/art2/${ot}/${e}.webp ${ot}w,
          https://images.godsunchained.com/art2/${ct}/${e}.webp ${ct}w
        "
        sizes="${t}"
        type="image/webp"
      />
      <source
        srcset="
          https://images.godsunchained.com/art2/${it}/${e}.jpg ${it}w,
          https://images.godsunchained.com/art2/${at}/${e}.jpg ${at}w,
          https://images.godsunchained.com/art2/${st}/${e}.jpg ${st}w,
          https://images.godsunchained.com/art2/${ot}/${e}.jpg ${ot}w,
          https://images.godsunchained.com/art2/${ct}/${e}.jpg ${ct}w
        "
        sizes="${t}"
        type="image/jpg"
      />
      <img
        srcset="
          https://images.godsunchained.com/art2/${at}/${e}.jpg
        "
        class="card__artwork__img"
      />
    </picture>
  `)({id:this.protoCardData.id,responsiveSrcsetSizes:this.responsiveSrcsetSizes})}
              ${t?(({type:e,qualityName:t,responsiveSrcsetSizes:n=`${lt}px`})=>L`
    <picture class="card__baseLayer">
      <source
        srcset="
          https://images.godsunchained.com/card-layers2/layers/${lt}/creature_C408.webp ${lt}w,
          https://images.godsunchained.com/card-layers2/layers/${dt}/creature_C408.webp ${dt}w,
          https://images.godsunchained.com/card-layers2/layers/${pt}/creature_C408.webp ${pt}w,
          https://images.godsunchained.com/card-layers2/layers/${ut}/creature_C408.webp ${ut}w
        "
        sizes="${n}"
        type="image/webp"
      />
      <source
        srcset="
          https://images.godsunchained.com/card-layers2/layers/${lt}/creature_C408.png ${lt}w,
          https://images.godsunchained.com/card-layers2/layers/${dt}/creature_C408.png ${dt}w,
          https://images.godsunchained.com/card-layers2/layers/${pt}/creature_C408.png ${pt}w,
          https://images.godsunchained.com/card-layers2/layers/${ut}/creature_C408.png ${ut}w
        "
        sizes="${n}"
        type="image/png"
      />

      <img
        srcset="
          https://images.godsunchained.com/card-layers2/layers/${lt}/${e}_${t}.png
        "
        class="card__baseLayer__img"
      />
    </picture>

    <picture class="card__manaLayer">
      <source
        srcset="
          https://images.godsunchained.com/card-layers2/layers/${lt}/mythic_C408.webp ${lt}w,
          https://images.godsunchained.com/card-layers2/layers/${dt}/mythic_C408.webp ${dt}w,
          https://images.godsunchained.com/card-layers2/layers/${pt}/mythic_C408.webp ${pt}w,
          https://images.godsunchained.com/card-layers2/layers/${ut}/mythic_C408.webp ${ut}w
        "
        sizes="${n}"
        type="image/webp"
      />
      <source
        srcset="
          https://images.godsunchained.com/card-layers2/layers/${lt}/mythic_C408.png ${lt}w,
          https://images.godsunchained.com/card-layers2/layers/${dt}/mythic_C408.png ${dt}w,
          https://images.godsunchained.com/card-layers2/layers/${pt}/mythic_C408.png ${pt}w,
          https://images.godsunchained.com/card-layers2/layers/${ut}/mythic_C408.png ${ut}w
        "
        sizes="${n}"
        type="image/png"
      />

      <img
        srcset="
          https://images.godsunchained.com/card-layers2/layers/${lt}/mythic_C408.png
        "
        class="card__manaLayer__img"
      />
    </picture>
  `)({type:this.protoCardData.type,qualityName:e,responsiveSrcsetSizes:this.responsiveSrcsetSizes}):(({responsiveSrcsetSizes:e=`${lt}px`,type:t,qualityName:n,rarity:r,god:i,set:a,tribe:s})=>L`
    <picture class="card__baseLayer">
      <source
        srcset="
          https://images.godsunchained.com/card-layers2/layers/${lt}/${t}_${n}.webp ${lt}w,
          https://images.godsunchained.com/card-layers2/layers/${dt}/${t}_${n}.webp ${dt}w,
          https://images.godsunchained.com/card-layers2/layers/${pt}/${t}_${n}.webp ${pt}w,
          https://images.godsunchained.com/card-layers2/layers/${ut}/${t}_${n}.webp ${ut}w
        "
        sizes="${e}"
        type="image/webp"
      />

      <source
        srcset="
          https://images.godsunchained.com/card-layers2/layers/${lt}/${t}_${n}.png ${lt}w,
          https://images.godsunchained.com/card-layers2/layers/${dt}/${t}_${n}.png ${dt}w,
          https://images.godsunchained.com/card-layers2/layers/${pt}/${t}_${n}.png ${pt}w,
          https://images.godsunchained.com/card-layers2/layers/${ut}/${t}_${n}.png ${ut}w
        "
        sizes="${e}"
        type="image/png"
      />
      <img
        srcset="
          https://images.godsunchained.com/card-layers2/layers/${lt}/${t}_${n}.png
        "
        class="card__baseLayer__img"
      />
    </picture>

    <picture class="card__manaLayer">
      <source
        srcset="
          https://images.godsunchained.com/card-layers2/layers/${lt}/${i}_${n}.webp ${lt}w,
          https://images.godsunchained.com/card-layers2/layers/${dt}/${i}_${n}.webp ${dt}w,
          https://images.godsunchained.com/card-layers2/layers/${pt}/${i}_${n}.webp ${pt}w,
          https://images.godsunchained.com/card-layers2/layers/${ut}/${i}_${n}.webp ${ut}w
        "
        sizes="${e}"
        type="image/webp"
      />
      <source
        srcset="
          https://images.godsunchained.com/card-layers2/layers/${lt}/${i}_${n}.png ${lt}w,
          https://images.godsunchained.com/card-layers2/layers/${dt}/${i}_${n}.png ${dt}w,
          https://images.godsunchained.com/card-layers2/layers/${pt}/${i}_${n}.png ${pt}w,
          https://images.godsunchained.com/card-layers2/layers/${ut}/${i}_${n}.png ${ut}w
        "
        sizes="${e}"
        type="image/png"
      />
      <img
        srcset="
          https://images.godsunchained.com/card-layers2/layers/${lt}/${i}_${n}.png
        "
        class="card__manaLayer__img"
      />
    </picture>

    ${"common"!==r?L`
          <picture class="card__rarityLayer">
            <source
              srcset="
                https://images.godsunchained.com/card-layers2/layers/${lt}/rarity_${r}.webp ${lt}w,
                https://images.godsunchained.com/card-layers2/layers/${dt}/rarity_${r}.webp ${dt}w,
                https://images.godsunchained.com/card-layers2/layers/${pt}/rarity_${r}.webp ${pt}w,
                https://images.godsunchained.com/card-layers2/layers/${ut}/rarity_${r}.webp ${ut}w
              "
              sizes="${e}"
              type="image/webp"
            />
            <source
              srcset="
                https://images.godsunchained.com/card-layers2/layers/${lt}/rarity_${r}.png ${lt}w,
                https://images.godsunchained.com/card-layers2/layers/${dt}/rarity_${r}.png ${dt}w,
                https://images.godsunchained.com/card-layers2/layers/${pt}/rarity_${r}.png ${pt}w,
                https://images.godsunchained.com/card-layers2/layers/${ut}/rarity_${r}.png ${ut}w
              "
              sizes="${e}"
              type="image/png"
            />
            <img
              srcset="
                https://images.godsunchained.com/card-layers2/layers/${lt}/rarity_${r}.png
              "
              class="card__rarityLayer__img"
            />
          </picture>
        `:null}
    ${"legendary"===r?L`
          <picture class="card__wreathLayer">
            <source
              srcset="
                https://images.godsunchained.com/card-layers2/layers/${lt}/wreath_${n}.webp ${lt}w,
                https://images.godsunchained.com/card-layers2/layers/${dt}/wreath_${n}.webp ${dt}w,
                https://images.godsunchained.com/card-layers2/layers/${pt}/wreath_${n}.webp ${pt}w,
                https://images.godsunchained.com/card-layers2/layers/${ut}/wreath_${n}.webp ${ut}w
              "
              sizes="${e}"
              type="image/webp"
            />

            <source
              srcset="
                https://images.godsunchained.com/card-layers2/layers/${lt}/wreath_${n}.png ${lt}w,
                https://images.godsunchained.com/card-layers2/layers/${dt}/wreath_${n}.png ${dt}w,
                https://images.godsunchained.com/card-layers2/layers/${pt}/wreath_${n}.png ${pt}w,
                https://images.godsunchained.com/card-layers2/layers/${ut}/wreath_${n}.png ${ut}w
              "
              sizes="${e}"
              type="image/png"
            />
            <img
              srcset="
                https://images.godsunchained.com/card-layers2/layers/${lt}/wreath_${n}.png
              "
              class="card__wreathLayer__img"
            />
          </picture>
        `:null}
    ${"core"===a&&"plain"===n?L`
          <picture class="card__lockIconLayer">
            <source
              srcset="
                https://images.godsunchained.com/card-layers2/locks/${ht}/lock_${n}.webp ${ht}w,
                https://images.godsunchained.com/card-layers2/locks/${_t}/lock_${n}.webp ${_t}w,
              "
              type="image/webp"
            />

            <source
              srcset="
                https://images.godsunchained.com/card-layers2/locks/${ht}/lock_${n}.png ${ht}w,
                https://images.godsunchained.com/card-layers2/locks/${_t}/lock_${n}.png ${_t}w,
              "
              type="image/png"
            />

            <img
              srcset="
                https://images.godsunchained.com/card-layers2/locks/lock_${n}.png
              "
              class="card__lockIconLayer__img"
            />
          </picture>
        `:null}
    ${s?L`
          <picture class="card__tribeBarLayer">
            <source
              srcset="
                https://images.godsunchained.com/card-layers2/layers/${lt}/tribebar_${n}.webp ${lt}w,
                https://images.godsunchained.com/card-layers2/layers/${dt}/tribebar_${n}.webp ${dt}w,
                https://images.godsunchained.com/card-layers2/layers/${pt}/tribebar_${n}.webp ${pt}w,
                https://images.godsunchained.com/card-layers2/layers/${ut}/tribebar_${n}.webp ${ut}w
              "
              sizes="${e}"
              type="image/webp"
            />
            <source
              srcset="
                https://images.godsunchained.com/card-layers2/layers/${lt}/tribebar_${n}.png ${lt}w,
                https://images.godsunchained.com/card-layers2/layers/${dt}/tribebar_${n}.png ${dt}w,
                https://images.godsunchained.com/card-layers2/layers/${pt}/tribebar_${n}.png ${pt}w,
                https://images.godsunchained.com/card-layers2/layers/${ut}/tribebar_${n}.png ${ut}w
              "
              sizes="${e}"
              type="image/png"
            />

            <img
              srcset="
                https://images.godsunchained.com/card-layers2/layers/${ut}/tribebar_${r}.png
              "
              class="card__tribeBarLayer__img"
            />
          </picture>
        `:null}
  `)(Object.assign({qualityName:e,responsiveSrcsetSizes:this.responsiveSrcsetSizes},this.protoCardData))}
              ${(({type:e="",name:t="⃠",effect:n="⃠",mana:r="⃠",attack:i="⃠",health:a="⃠",tribe:s="",cardSet:o="",ch:c=0,cw:l=0})=>{const d=RegExp(/creature|weapon/).test(e),p=t.split("").length>=20,u=n.split("").length;let h=3.8*c,_=1.3,m="normal";u>=150?(h=3.1*c,_=1.05,m="extraSquishy"):u>=90&&(h=3.4*c,_=1.1,m="squishy");const g=Math.floor(.2*c),f=`${0===g?1:g}px`,y="rgba(0,0,0,0.35)",b=`-${f} -${f} ${f} ${y}, ${f} -${f} ${f} ${y}, -${f} ${f} ${f} ${y}, ${f} ${f} ${f} ${y}`,w=n.replace(/ ([^ ]*)$/,"&nbsp;$1"),$=tt({fontSize:`${10.5*c}px`,top:`${6.85*c}px`,left:`${9.5*l}px`,width:`${19*l}px`,textShadow:b}),v=tt({fontSize:`${p?3.9*c:4.93*c}px`,bottom:`${32.85*c}px`,height:`${9*c}px`,left:`${13.25*l}px`,right:`${5.3*l}px`,textShadow:b}),x=tt(s?{fontSize:`${h}px`,lineHeight:_,bottom:`${8.6*c}px`,height:`${22.2*c}px`,left:`${21*l}px`,right:`${13*l}px`}:{fontSize:`${h}px`,lineHeight:_,bottom:`${7.3*c}px`,height:`${23.4*c}px`,left:`${21*l}px`,right:`${13*l}px`}),S=tt({fontSize:`${9.5*c}px`,bottom:`${4.5*c}px`,width:`${15*l}px`,left:`${10.5*l}px`,textShadow:b}),C=tt({fontSize:`${9.5*c}px`,width:`${16*l}px`,bottom:`${4.6*c}px`,right:`${2.5*l}px`,textShadow:b}),k=tt({fontSize:`${3.2*c}px`,bottom:`${3.1*c}px`,height:`${4.82*c}px`,left:`${30.5*l}px`,right:`${23*l}px`,textShadow:b}),P=tt({fontSize:`${6*c}px`,top:`${10*c}px`,right:`${9*l}px`});return L`
    <div class="card__manaText" style=${$}>
      ${r}
    </div>

    <div
      class="card__nameText ${p?"card__nameText--crammed":""}"
      style=${v}
    >
      <div class="card__nameText__inner">
        ${t}
      </div>
    </div>

    <div
      class="card__descriptionText ${m}"
      style=${x}
    >
      <div class="card__descriptionText__inner">
        ${rt(w)}
      </div>
    </div>

    ${d?L`
          <div class="card__attackText" style=${S}>
            ${i}
          </div>

          <div class="card__healthText" style=${C}>
            ${a}
          </div>
        `:null}
    ${s?L`
          <div class="card__tribeText" style=${k}>
            <div class="card__tribeText__inner">
              ${s}
            </div>
          </div>
        `:null}
    <card-icon
      style=${P}
      class="card__setIcon"
      iconLigature=${`set_${o}`}
    ></card-icon>
  `})(Object.assign({ch:this.ch,cw:this.cw},this.protoCardData,{cardSet:this.protoCardData.set}))}
            `}
      </div>
    `}};vt([ce({type:Number})],Pt.prototype,"protoId",void 0),vt([ce({type:Number})],Pt.prototype,"quality",void 0),vt([ce({type:Object})],Pt.prototype,"inputProtoData",void 0),vt([ce({type:String})],Pt.prototype,"responsiveSrcsetSizes",void 0),vt([ce({type:Boolean})],Pt.prototype,"useLegacyQualityMapping",void 0),Pt=vt([ae("composited-card")],Pt);const Et=ue`
  font-family: 'Unchained', serif;
  line-height: 1.1;
`,Tt=ue`
  font-family: 'Open Sans', sans-serif;
  line-height: 1.5;
`,zt=ue`black`,Nt=ue`white`,qt=ue`#f9f9f9`,Ot=(ue`#f1f1f1`,ue`65px`),At=ue`100px`,Rt=ue`#282828`,Mt=ue`#333`,Lt=ue`rgba(255,255,255,0.15)`,It=[ue`#8295A2`,ue`#8295A2`,ue`#6A8B35`,ue`#3D91B9`,ue`#84343E`,ue`#B461C5`,ue`#E5D93C`,ue`#94E6FB`,ue`white`],jt=ue`#9f78dd`,Vt=(e=0)=>ue`
  width: 100%;
  cursor: pointer;
  background: ${Rt};
  border: 2px solid ${Lt};
  padding: 6px;
`,Bt=(e=0)=>ue`
  height: 20px;
  width: 38px;
  border-radius: 28px;
  background: ${It[e]};
  cursor: pointer;
  -webkit-appearance: none;
`;var Dt=function(e,t,n,r){var i,a=arguments.length,s=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(s=(a<3?i(s):a>3?i(t,n,s):i(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s};let Ut=class extends _e{constructor(){super(),this.currentProtoId=Math.floor(99*Math.random()+1),this.currentQuality=Math.floor(4*Math.random()+1),this.currentQualityInWords=Ct[this.currentQuality-1];const e=this.getUrlParams(),t=e.get("protoid"),n=e.get("quality");null!==t&&(this.currentProtoId=parseInt(t,10)),null!==n&&(this.currentQuality=parseInt(n,10),this.currentQualityInWords=Ct[this.currentQuality-1]),null!==t&&null!==n&&this.updatePageImageMetadata(),fetch("https://api.godsunchained.com/proto?format=flat").then(e=>e.json()).then(e=>{this.protosCollection=e,this.currentProtoData=Object.assign({},e[this.currentProtoId],{id:this.currentProtoId}),console.log("!!!!!!!!!!!!",e),this.updatePageMetadata()}).catch(e=>console.error(e))}static get styles(){return(()=>ue`
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
    ${Tt}
  }

  .appHeader {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: ${Ot};
    background: white;
    border-bottom: 2px solid ${qt};
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
    ${Tt}
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
    border: 1px solid ${jt};
    color: ${jt};
    font-weight: 400;
    display: inline-block;
    vertical-align: top;
    margin-top: -5px;
    cursor: defualt;
  }

  .appHeader__title__sup:hover {
    background-color: ${jt};
    color: ${Nt};
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
    background: ${Mt};
  }

  .appContainer__intro {
    width: 50%;
    text-align: center;
    color: #b8b8b8;
    flex-grow: 0;
    margin: 20px 15px 0;
  }

  .appContainer__intro a {
    color: ${zt};
    text-decoration: none;
  }

  .appContainer__intro a:hover {
    text-decoration: underline;
  }

  .appContainer__controls__title {
    ${Et}
    font-size: 18px;
    text-transform: uppercase;
    color: ${Nt};
    position: absolute;
    left: 20px;
    top: 0px;
    transform: translateY(-150%);
    margin: 0;
    text-shadow: 0 1px 0 ${Mt}, 1px 0 0 ${Mt},
      1px 1px 0 ${Mt}, -1px 0 0 ${Mt},
      -1px -1px 0 ${Mt}, 0 -1px 0 ${Mt};
  }

  .appContainer__fab {
    position: fixed;
    bottom: ${At};
    right: 25px;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: ${jt};
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
    background: ${Nt};
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
    margin-bottom: calc(${At} + 30px);
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
    height: ${At};
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
    border: 2px solid ${Lt};
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
    color: ${It[1]};
  }

  .quality--bronze {
    color: ${It[2]};
  }

  .quality--iron {
    color: ${It[3]};
  }

  .quality--meteorite {
    color: ${It[4]};
  }

  .quality--shadow {
    color: ${It[5]};
  }

  .quality--gold {
    color: ${It[6]};
  }

  .quality--diamond {
    color: ${It[7]};
  }

  .quality--mythic {
    color: ${It[8]};
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
    ${Vt(0)}
  }
  .appContainer__controls__panel__rangeSlider.quality--bronze::-webkit-slider-runnable-track {
    ${Vt(2)}
  }
  .appContainer__controls__panel__rangeSlider.quality--iron::-webkit-slider-runnable-track {
    ${Vt(3)}
  }
  .appContainer__controls__panel__rangeSlider.quality--meteorite::-webkit-slider-runnable-track {
    ${Vt(4)}
  }
  .appContainer__controls__panel__rangeSlider.quality--shadow::-webkit-slider-runnable-track {
    ${Vt(5)}
  }
  .appContainer__controls__panel__rangeSlider.quality--gold::-webkit-slider-runnable-track {
    ${Vt(6)}
  }
  .appContainer__controls__panel__rangeSlider.quality--diamond::-webkit-slider-runnable-track {
    ${Vt(7)}
  }
  .appContainer__controls__panel__rangeSlider.quality--mythic::-webkit-slider-runnable-track {
    ${Vt(8)}
  }

  .appContainer__controls__panel__rangeSlider.quality--plain::-webkit-slider-thumb {
    ${Bt(0)}
  }
  .appContainer__controls__panel__rangeSlider.quality--bronze::-webkit-slider-thumb {
    ${Bt(2)}
  }
  .appContainer__controls__panel__rangeSlider.quality--iron::-webkit-slider-thumb {
    ${Bt(3)}
  }
  .appContainer__controls__panel__rangeSlider.quality--meteorite::-webkit-slider-thumb {
    ${Bt(4)}
  }
  .appContainer__controls__panel__rangeSlider.quality--shadow::-webkit-slider-thumb {
    ${Bt(5)}
  }
  .appContainer__controls__panel__rangeSlider.quality--gold::-webkit-slider-thumb {
    ${Bt(6)}
  }
  .appContainer__controls__panel__rangeSlider.quality--diamond::-webkit-slider-thumb {
    ${Bt(7)}
  }
  .appContainer__controls__panel__rangeSlider.quality--mythic::-webkit-slider-thumb {
    ${Bt(8)}
  }

  /* FIREFOX: */

  .appContainer__controls__panel__rangeSlider.quality--plain::-moz-range-track {
    ${Vt(0)}
  }
  .appContainer__controls__panel__rangeSlider.quality--bronze::-moz-range-track {
    ${Vt(2)}
  }
  .appContainer__controls__panel__rangeSlider.quality--iron::-moz-range-track {
    ${Vt(3)}
  }
  .appContainer__controls__panel__rangeSlider.quality--meteorite::-moz-range-track {
    ${Vt(4)}
  }
  .appContainer__controls__panel__rangeSlider.quality--shadow::-moz-range-track {
    ${Vt(5)}
  }
  .appContainer__controls__panel__rangeSlider.quality--gold::-moz-range-track {
    ${Vt(6)}
  }
  .appContainer__controls__panel__rangeSlider.quality--diamond::-moz-range-track {
    ${Vt(7)}
  }
  .appContainer__controls__panel__rangeSlider.quality--mythic::-moz-range-track {
    ${Vt(8)}
  }

  .appContainer__controls__panel__rangeSlider.quality--plain::-moz-range-thumb {
    ${Bt(0)}
  }
  .appContainer__controls__panel__rangeSlider.quality--bronze::-moz-range-thumb {
    ${Bt(2)}
  }
  .appContainer__controls__panel__rangeSlider.quality--iron::-moz-range-thumb {
    ${Bt(3)}
  }
  .appContainer__controls__panel__rangeSlider.quality--meteorite::-moz-range-thumb {
    ${Bt(4)}
  }
  .appContainer__controls__panel__rangeSlider.quality--shadow::-moz-range-thumb {
    ${Bt(5)}
  }
  .appContainer__controls__panel__rangeSlider.quality--gold::-moz-range-thumb {
    ${Bt(6)}
  }
  .appContainer__controls__panel__rangeSlider.quality--diamond::-moz-range-thumb {
    ${Bt(7)}
  }
  .appContainer__controls__panel__rangeSlider.quality--mythic::-moz-range-thumb {
    ${Bt(8)}
  }
`)()}updated(e){void 0===e.get("currentProtoId")&&void 0===e.get("currentQuality")||(this.updateUrlParams(),this.updatePageMetadata())}updatePageMetadata(){document.querySelector('meta[property="og:title"]').setAttribute("content",this.currentProtoData.name),document.querySelector('meta[property="og:description"]').setAttribute("content",this.currentProtoData.effect),document.querySelector('meta[property="og:url"]').setAttribute("content",location.href),this.updatePageImageMetadata()}get currentImageUrl(){return`https://card.godsunchained.com?id=${this.currentProtoId}&q=${this.currentQuality}&w=`}updatePageImageMetadata(){document.querySelector('meta[property="og:image"]').setAttribute("content",`${this.currentImageUrl}256`)}getUrlParams(){return new URLSearchParams(window.location.search)}updateUrlParams(){const e=this.getUrlParams();e.set("protoid",`${this.currentProtoId}`),e.set("quality",`${this.currentQuality}`),window.history.pushState({},"",decodeURIComponent(`${location.pathname}?${e}`))}getScreenShot(e){e.preventDefault(),window.open()}render(){return L`
      <header class="appHeader">
        <a href="https://immutable.com" class="appHeader__link" target="_blank">
          <img
            class="appHeader__link__img"
            src="${n(6)}"
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
              @change=${e=>{this.currentQuality=e.target.value,this.currentQualityInWords=Ct[this.currentQuality-1]}}
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
            src="${n(7)}"
          />
        </a>

        <div class="appContainer__cardVisualisation">
          <div class="appContainer__cardVisualisation__inner">
            <i class="appContainer__cardVisualisation__shadow"></i>
            ${this.currentProtoData?L`
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
    `}};Dt([ce()],Ut.prototype,"currentProtoId",void 0),Dt([ce()],Ut.prototype,"currentQuality",void 0),Dt([ce()],Ut.prototype,"currentQualityInWords",void 0),Dt([ce()],Ut.prototype,"currentProtoData",void 0),Dt([ce()],Ut.prototype,"protosCollection",void 0),Ut=Dt([ae("demo-app")],Ut);n(8);const Wt=document.createElement("style");Wt.innerHTML=$t().cssText.replace(":host",".compositedCardDomRender"),document.head.appendChild(Wt)}]);
//# sourceMappingURL=bundle.f8b3b3164f2fc8af31f4.js.map