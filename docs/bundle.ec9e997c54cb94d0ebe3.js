!function(e){var t={};function r(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(i,o,function(t){return e[t]}.bind(null,o));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=10)}([function(e,t,r){"use strict";var i,o=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},n=function(){var e={};return function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[t]=r}return e[t]}}(),s=[];function a(e){for(var t=-1,r=0;r<s.length;r++)if(s[r].identifier===e){t=r;break}return t}function l(e,t){for(var r={},i=[],o=0;o<e.length;o++){var n=e[o],l=t.base?n[0]+t.base:n[0],p=r[l]||0,c="".concat(l," ").concat(p);r[l]=p+1;var d=a(c),u={css:n[1],media:n[2],sourceMap:n[3]};-1!==d?(s[d].references++,s[d].updater(u)):s.push({identifier:c,updater:g(u,t),references:1}),i.push(c)}return i}function p(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var o=r.nc;o&&(i.nonce=o)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var s=n(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}return t}var c,d=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function u(e,t,r,i){var o=r?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var n=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(n,s[t]):e.appendChild(n)}}function h(e,t,r){var i=r.css,o=r.media,n=r.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),n&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(n))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var $=null,_=0;function g(e,t){var r,i,o;if(t.singleton){var n=_++;r=$||($=p(t)),i=u.bind(null,r,n,!1),o=u.bind(null,r,n,!0)}else r=p(t),i=h.bind(null,r,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var r=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<r.length;i++){var o=a(r[i]);s[o].references--}for(var n=l(e,t),p=0;p<r.length;p++){var c=a(r[p]);0===s[c].references&&(s[c].updater(),s.splice(c,1))}r=n}}}},function(e,t,r){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=function(e,t){var r=e[1]||"",i=e[3];if(!i)return r;if(t&&"function"==typeof btoa){var o=(s=i,a=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(l," */")),n=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(e," */")}));return[r].concat(n).concat([o]).join("\n")}var s,a,l;return[r].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,i){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(i)for(var n=0;n<this.length;n++){var s=this[n][0];null!=s&&(o[s]=!0)}for(var a=0;a<e.length;a++){var l=[].concat(e[a]);i&&o[l[0]]||(r&&(l[2]?l[2]="".concat(r," and ").concat(l[2]):l[2]=r),t.push(l))}},t}},function(e,t){
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
!function(){"use strict";var e,t=!1,r=[],i=!1;function o(){window.WebComponents.ready=!0,document.dispatchEvent(new CustomEvent("WebComponentsReady",{bubbles:!0}))}function n(){window.customElements&&customElements.polyfillWrapFlushCallback&&customElements.polyfillWrapFlushCallback((function(t){e=t,i&&e()}))}function s(){window.HTMLTemplateElement&&HTMLTemplateElement.bootstrap&&HTMLTemplateElement.bootstrap(window.document),t=!0,a().then(o)}function a(){i=!1;var t=r.map((function(e){return e instanceof Function?e():e}));return r=[],Promise.all(t).then((function(){i=!0,e&&e()})).catch((function(e){console.error(e)}))}window.WebComponents=window.WebComponents||{},window.WebComponents.ready=window.WebComponents.ready||!1,window.WebComponents.waitFor=window.WebComponents.waitFor||function(e){e&&(r.push(e),t&&a())},window.WebComponents._batchCustomElements=n;var l="webcomponents-loader.js",p=[];(!("attachShadow"in Element.prototype)||!("getRootNode"in Element.prototype)||window.ShadyDOM&&window.ShadyDOM.force)&&p.push("sd"),window.customElements&&!window.customElements.forcePolyfill||p.push("ce");var c,d,u=function(){var e=document.createElement("template");if(!("content"in e))return!0;if(!(e.content.cloneNode()instanceof DocumentFragment))return!0;var t=document.createElement("template");t.content.appendChild(document.createElement("div")),e.content.appendChild(t);var r=e.cloneNode(!0);return 0===r.content.childNodes.length||0===r.content.firstChild.content.childNodes.length}();if(window.Promise&&Array.from&&window.URL&&window.Symbol&&!u||(p=["sd-ce-pf"]),p.length){var h,$=(d={createHTML:c=function(e){return e},createScript:c,createScriptURL:c},window.trustedTypes&&window.trustedTypes.createPolicy("webcomponents-loader",d)||d),_="bundles/webcomponents-"+p.join("-")+".js";if(window.WebComponents.root)h=window.WebComponents.root+_,window.trustedTypes&&window.trustedTypes.isScriptURL(window.WebComponents.root)&&(h=$.createScriptURL(h));else{var g=document.querySelector('script[src*="'+l+'"]');h=$.createScriptURL(g.src.replace(l,_))}var m=document.createElement("script");m.src=h,"loading"===document.readyState?(m.setAttribute("onload",$.createScript("window.WebComponents._batchCustomElements()")),document.write($.createHTML(m.outerHTML)),document.addEventListener("DOMContentLoaded",s)):(m.addEventListener("load",(function(){n(),s()})),m.addEventListener("error",(function(){throw new Error("Could not load polyfill bundle"+h)})),document.head.appendChild(m))}else"complete"===document.readyState?(t=!0,o()):(window.addEventListener("load",s),window.addEventListener("DOMContentLoaded",(function(){window.removeEventListener("load",s),s()})))}()},function(e,t,r){e.exports=r.p+"eb5c8c08d7563671b75abdd4782079cb.png"},function(e,t,r){var i=r(0),o=r(5);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var n={insert:"head",singleton:!1};i(o,n);e.exports=o.locals||{}},function(e,t,r){(t=r(1)(!1)).push([e.i,"@import url(https://images.godsunchained.com/fonts/css/card-fonts.css);"]),t.push([e.i,"",""]),e.exports=t},function(e,t,r){e.exports=r.p+"c2848aacde2d388cba47a89a95be606b.svg"},function(e,t,r){e.exports=r.p+"eddc5abb8686fffbc9f9fa841727baff.svg"},function(e,t,r){var i=r(0),o=r(9);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var n={insert:"head",singleton:!1};i(o,n);e.exports=o.locals||{}},function(e,t,r){(t=r(1)(!1)).push([e.i,"*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n}\n\n.githubButtonContainer {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  z-index: 2;\n}\n\n.tempRenderHolder {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  opacity: 0;\n}\n\n.tempRenderHolder canvas {\n  position: absolute;\n  top: 0;\n  left: 0;\n  user-select: none;\n  pointer-events: none;\n}\n\n.compositedCardDomRender {\n  display: flex;\n  position: relative;\n  font-family: 'Unchained', serif;\n  line-height: 1.1;\n  user-select: none;\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 1000px;\n  height: 1400px;\n}\n",""]),e.exports=t},function(e,t,r){"use strict";r.r(t);r(2);
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
 */const i="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,o=(e,t,r=null)=>{for(;t!==r;){const r=t.nextSibling;e.removeChild(t),t=r}},n=`{{lit-${String(Math.random()).slice(2)}}}`,s=`\x3c!--${n}--\x3e`,a=new RegExp(`${n}|${s}`);class l{constructor(e,t){this.parts=[],this.element=t;const r=[],i=[],o=document.createTreeWalker(t.content,133,null,!1);let s=0,l=-1,c=0;const{strings:h,values:{length:$}}=e;for(;c<$;){const e=o.nextNode();if(null!==e){if(l++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:r}=t;let i=0;for(let e=0;e<r;e++)p(t[e].name,"$lit$")&&i++;for(;i-- >0;){const t=h[c],r=u.exec(t)[2],i=r.toLowerCase()+"$lit$",o=e.getAttribute(i);e.removeAttribute(i);const n=o.split(a);this.parts.push({type:"attribute",index:l,name:r,strings:n}),c+=n.length-1}}"TEMPLATE"===e.tagName&&(i.push(e),o.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(n)>=0){const i=e.parentNode,o=t.split(a),n=o.length-1;for(let t=0;t<n;t++){let r,n=o[t];if(""===n)r=d();else{const e=u.exec(n);null!==e&&p(e[2],"$lit$")&&(n=n.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),r=document.createTextNode(n)}i.insertBefore(r,e),this.parts.push({type:"node",index:++l})}""===o[n]?(i.insertBefore(d(),e),r.push(e)):e.data=o[n],c+=n}}else if(8===e.nodeType)if(e.data===n){const t=e.parentNode;null!==e.previousSibling&&l!==s||(l++,t.insertBefore(d(),e)),s=l,this.parts.push({type:"node",index:l}),null===e.nextSibling?e.data="":(r.push(e),l--),c++}else{let t=-1;for(;-1!==(t=e.data.indexOf(n,t+1));)this.parts.push({type:"node",index:-1}),c++}}else o.currentNode=i.pop()}for(const e of r)e.parentNode.removeChild(e)}}const p=(e,t)=>{const r=e.length-t.length;return r>=0&&e.slice(r)===t},c=e=>-1!==e.index,d=()=>document.createComment(""),u=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function h(e,t){const{element:{content:r},parts:i}=e,o=document.createTreeWalker(r,133,null,!1);let n=_(i),s=i[n],a=-1,l=0;const p=[];let c=null;for(;o.nextNode();){a++;const e=o.currentNode;for(e.previousSibling===c&&(c=null),t.has(e)&&(p.push(e),null===c&&(c=e)),null!==c&&l++;void 0!==s&&s.index===a;)s.index=null!==c?-1:s.index-l,n=_(i,n),s=i[n]}p.forEach(e=>e.parentNode.removeChild(e))}const $=e=>{let t=11===e.nodeType?0:1;const r=document.createTreeWalker(e,133,null,!1);for(;r.nextNode();)t++;return t},_=(e,t=-1)=>{for(let r=t+1;r<e.length;r++){const t=e[r];if(c(t))return r}return-1};
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
const g=new WeakMap,m=e=>(...t)=>{const r=e(...t);return g.set(r,!0),r},b=e=>"function"==typeof e&&g.has(e),y={},w={};
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
class f{constructor(e,t,r){this.__parts=[],this.template=e,this.processor=t,this.options=r}update(e){let t=0;for(const r of this.__parts)void 0!==r&&r.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=i?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],r=this.template.parts,o=document.createTreeWalker(e,133,null,!1);let n,s=0,a=0,l=o.nextNode();for(;s<r.length;)if(n=r[s],c(n)){for(;a<n.index;)a++,"TEMPLATE"===l.nodeName&&(t.push(l),o.currentNode=l.content),null===(l=o.nextNode())&&(o.currentNode=t.pop(),l=o.nextNode());if("node"===n.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(l.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,n.name,n.strings,this.options));s++}else this.__parts.push(void 0),s++;return i&&(document.adoptNode(e),customElements.upgrade(e)),e}}
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
 */const v=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:e=>e}),x=` ${n} `;class S{constructor(e,t,r,i){this.strings=e,this.values=t,this.type=r,this.processor=i}getHTML(){const e=this.strings.length-1;let t="",r=!1;for(let i=0;i<e;i++){const e=this.strings[i],o=e.lastIndexOf("\x3c!--");r=(o>-1||r)&&-1===e.indexOf("--\x3e",o+1);const a=u.exec(e);t+=null===a?e+(r?x:s):e.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+n}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return void 0!==v&&(t=v.createHTML(t)),e.innerHTML=t,e}}
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
const C=e=>null===e||!("object"==typeof e||"function"==typeof e),k=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class z{constructor(e,t,r){this.dirty=!0,this.element=e,this.name=t,this.strings=r,this.parts=[];for(let e=0;e<r.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new P(this)}_getValue(){const e=this.strings,t=e.length-1,r=this.parts;if(1===t&&""===e[0]&&""===e[1]){const e=r[0].value;if("symbol"==typeof e)return String(e);if("string"==typeof e||!k(e))return e}let i="";for(let o=0;o<t;o++){i+=e[o];const t=r[o];if(void 0!==t){const e=t.value;if(C(e)||!k(e))i+="string"==typeof e?e:String(e);else for(const t of e)i+="string"==typeof t?t:String(t)}}return i+=e[t],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class P{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===y||C(e)&&e===this.value||(this.value=e,b(e)||(this.committer.dirty=!0))}commit(){for(;b(this.value);){const e=this.value;this.value=y,e(this)}this.value!==y&&this.committer.commit()}}class T{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(d()),this.endNode=e.appendChild(d())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=d()),e.__insert(this.endNode=d())}insertAfterPart(e){e.__insert(this.startNode=d()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;b(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=y,e(this)}const e=this.__pendingValue;e!==y&&(C(e)?e!==this.value&&this.__commitText(e):e instanceof S?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):k(e)?this.__commitIterable(e):e===w?(this.value=w,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,r="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=r:this.__commitNode(document.createTextNode(r)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof f&&this.value.template===t)this.value.update(e.values);else{const r=new f(t,e.processor,this.options),i=r._clone();r.update(e.values),this.__commitNode(i),this.value=r}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let r,i=0;for(const o of e)r=t[i],void 0===r&&(r=new T(this.options),t.push(r),0===i?r.appendIntoPart(this):r.insertAfterPart(t[i-1])),r.setValue(o),r.commit(),i++;i<t.length&&(t.length=i,this.clear(r&&r.endNode))}clear(e=this.startNode){o(this.startNode.parentNode,e.nextSibling,this.endNode)}}class E{constructor(e,t,r){if(this.value=void 0,this.__pendingValue=void 0,2!==r.length||""!==r[0]||""!==r[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=r}setValue(e){this.__pendingValue=e}commit(){for(;b(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=y,e(this)}if(this.__pendingValue===y)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=y}}class N extends z{constructor(e,t,r){super(e,t,r),this.single=2===r.length&&""===r[0]&&""===r[1]}_createPart(){return new L(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class L extends P{}let O=!1;(()=>{try{const e={get capture(){return O=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class j{constructor(e,t,r){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=r,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;b(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=y,e(this)}if(this.__pendingValue===y)return;const e=this.__pendingValue,t=this.value,r=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),i=null!=e&&(null==t||r);r&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=q(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=y}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const q=e=>e&&(O?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)
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
 */;function R(e){let t=M.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},M.set(e.type,t));let r=t.stringsArray.get(e.strings);if(void 0!==r)return r;const i=e.strings.join(n);return r=t.keyString.get(i),void 0===r&&(r=new l(e,e.getTemplateElement()),t.keyString.set(i,r)),t.stringsArray.set(e.strings,r),r}const M=new Map,D=new WeakMap;
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
 */const A=new
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
class{handleAttributeExpressions(e,t,r,i){const o=t[0];if("."===o){return new N(e,t.slice(1),r).parts}if("@"===o)return[new j(e,t.slice(1),i.eventContext)];if("?"===o)return[new E(e,t.slice(1),r)];return new z(e,t,r).parts}handleTextExpression(e){return new T(e)}};
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
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");const I=(e,...t)=>new S(e,t,"html",A),V=(e,t)=>`${e}--${t}`;let U=!0;void 0===window.ShadyCSS?U=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),U=!1);const B=e=>t=>{const r=V(t.type,e);let i=M.get(r);void 0===i&&(i={stringsArray:new WeakMap,keyString:new Map},M.set(r,i));let o=i.stringsArray.get(t.strings);if(void 0!==o)return o;const s=t.strings.join(n);if(o=i.keyString.get(s),void 0===o){const r=t.getTemplateElement();U&&window.ShadyCSS.prepareTemplateDom(r,e),o=new l(t,r),i.keyString.set(s,o)}return i.stringsArray.set(t.strings,o),o},W=["html","svg"],H=new Set,F=(e,t,r)=>{H.add(e);const i=r?r.element:document.createElement("template"),o=t.querySelectorAll("style"),{length:n}=o;if(0===n)return void window.ShadyCSS.prepareTemplateStyles(i,e);const s=document.createElement("style");for(let e=0;e<n;e++){const t=o[e];t.parentNode.removeChild(t),s.textContent+=t.textContent}(e=>{W.forEach(t=>{const r=M.get(V(t,e));void 0!==r&&r.keyString.forEach(e=>{const{element:{content:t}}=e,r=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{r.add(e)}),h(e,r)})})})(e);const a=i.content;r?function(e,t,r=null){const{element:{content:i},parts:o}=e;if(null==r)return void i.appendChild(t);const n=document.createTreeWalker(i,133,null,!1);let s=_(o),a=0,l=-1;for(;n.nextNode();){l++;for(n.currentNode===r&&(a=$(t),r.parentNode.insertBefore(t,r));-1!==s&&o[s].index===l;){if(a>0){for(;-1!==s;)o[s].index+=a,s=_(o,s);return}s=_(o,s)}}}(r,s,a.firstChild):a.insertBefore(s,a.firstChild),window.ShadyCSS.prepareTemplateStyles(i,e);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)t.insertBefore(l.cloneNode(!0),t.firstChild);else if(r){a.insertBefore(s,a.firstChild);const e=new Set;e.add(s),h(r,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const Q={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},J=(e,t)=>t!==e&&(t==t||e==e),X={attribute:!0,type:String,converter:Q,reflect:!1,hasChanged:J};class G extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,r)=>{const i=this._attributeNameForProperty(r,t);void 0!==i&&(this._attributeToPropertyMap.set(i,r),e.push(i))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=X){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const r="symbol"==typeof e?Symbol():"__"+e,i=this.getPropertyDescriptor(e,r,t);void 0!==i&&Object.defineProperty(this.prototype,e,i)}static getPropertyDescriptor(e,t,r){return{get(){return this[t]},set(r){const i=this[e];this[t]=r,this._requestUpdate(e,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||X}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const r of t)this.createProperty(r,e[r])}}static _attributeNameForProperty(e,t){const r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,r=J){return r(e,t)}static _propertyValueFromAttribute(e,t){const r=t.type,i=t.converter||Q,o="function"==typeof i?i:i.fromAttribute;return o?o(e,r):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const r=t.type,i=t.converter;return(i&&i.toAttribute||Q.toAttribute)(e,r)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,r){t!==r&&this._attributeToProperty(e,r)}_propertyToAttribute(e,t,r=X){const i=this.constructor,o=i._attributeNameForProperty(e,r);if(void 0!==o){const e=i._propertyValueToAttribute(t,r);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(o):this.setAttribute(o,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const r=this.constructor,i=r._attributeToPropertyMap.get(e);if(void 0!==i){const e=r.getPropertyOptions(i);this._updateState=16|this._updateState,this[i]=r._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}_requestUpdate(e,t){let r=!0;if(void 0!==e){const i=this.constructor,o=i.getPropertyOptions(e);i._valueHasChanged(this[e],t,o.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==o.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,o))):r=!1}!this._hasRequestedUpdate&&r&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}G.finalized=!0;
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
const Y=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:r,elements:i}=t;return{kind:r,elements:i,finisher(t){window.customElements.define(e,t)}}})(e,t),K=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?Object.assign(Object.assign({},t),{finisher(r){r.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}};function Z(e){return(t,r)=>void 0!==r?((e,t,r)=>{t.constructor.createProperty(r,e)})(e,t,r):K(e,t)}
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
const ee="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,te=Symbol();class re{constructor(e,t){if(t!==te)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(ee?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const ie=(e,...t)=>{const r=t.reduce((t,r,i)=>t+(e=>{if(e instanceof re)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(r)+e[i+1],e[0]);return new re(r,te)};
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const oe={};class ne extends G{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(void 0===e)this._styles=[];else if(Array.isArray(e)){const t=(e,r)=>e.reduceRight((e,r)=>Array.isArray(r)?t(r,e):(e.add(r),e),r),r=t(e,new Set),i=[];r.forEach(e=>i.unshift(e)),this._styles=i}else this._styles=[e]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?ee?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==oe&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){return oe}}ne.finalized=!0,ne.render=(e,t,r)=>{if(!r||"object"!=typeof r||!r.scopeName)throw new Error("The `scopeName` option is required.");const i=r.scopeName,n=D.has(t),s=U&&11===t.nodeType&&!!t.host,a=s&&!H.has(i),l=a?document.createDocumentFragment():t;if(((e,t,r)=>{let i=D.get(t);void 0===i&&(o(t,t.firstChild),D.set(t,i=new T(Object.assign({templateFactory:R},r))),i.appendInto(t)),i.setValue(e),i.commit()})(e,l,Object.assign({templateFactory:B(i)},r)),a){const e=D.get(l);D.delete(l);const r=e.value instanceof f?e.value.template:void 0;F(i,l,r),o(t,t.firstChild),t.appendChild(l),D.set(t,e)}!n&&s&&window.ShadyCSS.styleElement(t.host)};var se,ae=[],le="ResizeObserver loop completed with undelivered notifications.";!function(e){e.BORDER_BOX="border-box",e.CONTENT_BOX="content-box",e.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"}(se||(se={}));var pe,ce=function(e){return Object.freeze(e)},de=function(e,t){this.inlineSize=e,this.blockSize=t,ce(this)},ue=function(){function e(e,t,r,i){return this.x=e,this.y=t,this.width=r,this.height=i,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,ce(this)}return e.prototype.toJSON=function(){var e=this;return{x:e.x,y:e.y,top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.width,height:e.height}},e.fromRect=function(t){return new e(t.x,t.y,t.width,t.height)},e}(),he=function(e){return e instanceof SVGElement&&"getBBox"in e},$e=function(e){if(he(e)){var t=e.getBBox(),r=t.width,i=t.height;return!r&&!i}var o=e,n=o.offsetWidth,s=o.offsetHeight;return!(n||s||e.getClientRects().length)},_e=function(e){var t;if(e instanceof Element)return!0;var r=null===(t=null==e?void 0:e.ownerDocument)||void 0===t?void 0:t.defaultView;return!!(r&&e instanceof r.Element)},ge="undefined"!=typeof window?window:{},me=new WeakMap,be=/auto|scroll/,ye=/^tb|vertical/,we=/msie|trident/i.test(ge.navigator&&ge.navigator.userAgent),fe=function(e){return parseFloat(e||"0")},ve=function(e,t,r){return void 0===e&&(e=0),void 0===t&&(t=0),void 0===r&&(r=!1),new de((r?t:e)||0,(r?e:t)||0)},xe=ce({devicePixelContentBoxSize:ve(),borderBoxSize:ve(),contentBoxSize:ve(),contentRect:new ue(0,0,0,0)}),Se=function(e,t){if(void 0===t&&(t=!1),me.has(e)&&!t)return me.get(e);if($e(e))return me.set(e,xe),xe;var r=getComputedStyle(e),i=he(e)&&e.ownerSVGElement&&e.getBBox(),o=!we&&"border-box"===r.boxSizing,n=ye.test(r.writingMode||""),s=!i&&be.test(r.overflowY||""),a=!i&&be.test(r.overflowX||""),l=i?0:fe(r.paddingTop),p=i?0:fe(r.paddingRight),c=i?0:fe(r.paddingBottom),d=i?0:fe(r.paddingLeft),u=i?0:fe(r.borderTopWidth),h=i?0:fe(r.borderRightWidth),$=i?0:fe(r.borderBottomWidth),_=d+p,g=l+c,m=(i?0:fe(r.borderLeftWidth))+h,b=u+$,y=a?e.offsetHeight-b-e.clientHeight:0,w=s?e.offsetWidth-m-e.clientWidth:0,f=o?_+m:0,v=o?g+b:0,x=i?i.width:fe(r.width)-f-w,S=i?i.height:fe(r.height)-v-y,C=x+_+w+m,k=S+g+y+b,z=ce({devicePixelContentBoxSize:ve(Math.round(x*devicePixelRatio),Math.round(S*devicePixelRatio),n),borderBoxSize:ve(C,k,n),contentBoxSize:ve(x,S,n),contentRect:new ue(d,l,x,S)});return me.set(e,z),z},Ce=function(e,t,r){var i=Se(e,r),o=i.borderBoxSize,n=i.contentBoxSize,s=i.devicePixelContentBoxSize;switch(t){case se.DEVICE_PIXEL_CONTENT_BOX:return s;case se.BORDER_BOX:return o;default:return n}},ke=function(e){var t=Se(e);this.target=e,this.contentRect=t.contentRect,this.borderBoxSize=ce([t.borderBoxSize]),this.contentBoxSize=ce([t.contentBoxSize]),this.devicePixelContentBoxSize=ce([t.devicePixelContentBoxSize])},ze=function(e){if($e(e))return 1/0;for(var t=0,r=e.parentNode;r;)t+=1,r=r.parentNode;return t},Pe=function(){var e=1/0,t=[];ae.forEach((function(r){if(0!==r.activeTargets.length){var i=[];r.activeTargets.forEach((function(t){var r=new ke(t.target),o=ze(t.target);i.push(r),t.lastReportedSize=Ce(t.target,t.observedBox),o<e&&(e=o)})),t.push((function(){r.callback.call(r.observer,i,r.observer)})),r.activeTargets.splice(0,r.activeTargets.length)}}));for(var r=0,i=t;r<i.length;r++){(0,i[r])()}return e},Te=function(e){ae.forEach((function(t){t.activeTargets.splice(0,t.activeTargets.length),t.skippedTargets.splice(0,t.skippedTargets.length),t.observationTargets.forEach((function(r){r.isActive()&&(ze(r.target)>e?t.activeTargets.push(r):t.skippedTargets.push(r))}))}))},Ee=function(){var e,t=0;for(Te(t);ae.some((function(e){return e.activeTargets.length>0}));)t=Pe(),Te(t);return ae.some((function(e){return e.skippedTargets.length>0}))&&("function"==typeof ErrorEvent?e=new ErrorEvent("error",{message:le}):((e=document.createEvent("Event")).initEvent("error",!1,!1),e.message=le),window.dispatchEvent(e)),t>0},Ne=[],Le=function(e){if(!pe){var t=0,r=document.createTextNode("");new MutationObserver((function(){return Ne.splice(0).forEach((function(e){return e()}))})).observe(r,{characterData:!0}),pe=function(){r.textContent="".concat(t?t--:t++)}}Ne.push(e),pe()},Oe=0,je={attributes:!0,characterData:!0,childList:!0,subtree:!0},qe=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],Re=function(e){return void 0===e&&(e=0),Date.now()+e},Me=!1,De=new(function(){function e(){var e=this;this.stopped=!0,this.listener=function(){return e.schedule()}}return e.prototype.run=function(e){var t=this;if(void 0===e&&(e=250),!Me){Me=!0;var r,i=Re(e);r=function(){var r=!1;try{r=Ee()}finally{if(Me=!1,e=i-Re(),!Oe)return;r?t.run(1e3):e>0?t.run(e):t.start()}},Le((function(){requestAnimationFrame(r)}))}},e.prototype.schedule=function(){this.stop(),this.run()},e.prototype.observe=function(){var e=this,t=function(){return e.observer&&e.observer.observe(document.body,je)};document.body?t():ge.addEventListener("DOMContentLoaded",t)},e.prototype.start=function(){var e=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),qe.forEach((function(t){return ge.addEventListener(t,e.listener,!0)})))},e.prototype.stop=function(){var e=this;this.stopped||(this.observer&&this.observer.disconnect(),qe.forEach((function(t){return ge.removeEventListener(t,e.listener,!0)})),this.stopped=!0)},e}()),Ae=function(e){!Oe&&e>0&&De.start(),!(Oe+=e)&&De.stop()},Ie=function(){function e(e,t){this.target=e,this.observedBox=t||se.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return e.prototype.isActive=function(){var e,t=Ce(this.target,this.observedBox,!0);return e=this.target,he(e)||function(e){switch(e.tagName){case"INPUT":if("image"!==e.type)break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1}(e)||"inline"!==getComputedStyle(e).display||(this.lastReportedSize=t),this.lastReportedSize.inlineSize!==t.inlineSize||this.lastReportedSize.blockSize!==t.blockSize},e}(),Ve=function(e,t){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=e,this.callback=t},Ue=new WeakMap,Be=function(e,t){for(var r=0;r<e.length;r+=1)if(e[r].target===t)return r;return-1},We=function(){function e(){}return e.connect=function(e,t){var r=new Ve(e,t);Ue.set(e,r)},e.observe=function(e,t,r){var i=Ue.get(e),o=0===i.observationTargets.length;Be(i.observationTargets,t)<0&&(o&&ae.push(i),i.observationTargets.push(new Ie(t,r&&r.box)),Ae(1),De.schedule())},e.unobserve=function(e,t){var r=Ue.get(e),i=Be(r.observationTargets,t),o=1===r.observationTargets.length;i>=0&&(o&&ae.splice(ae.indexOf(r),1),r.observationTargets.splice(i,1),Ae(-1))},e.disconnect=function(e){var t=this,r=Ue.get(e);r.observationTargets.slice().forEach((function(r){return t.unobserve(e,r.target)})),r.activeTargets.splice(0,r.activeTargets.length)},e}(),He=function(){function e(e){if(0===arguments.length)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if("function"!=typeof e)throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");We.connect(this,e)}return e.prototype.observe=function(e,t){if(0===arguments.length)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!_e(e))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");We.observe(this,e,t)},e.prototype.unobserve=function(e){if(0===arguments.length)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!_e(e))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");We.unobserve(this,e)},e.prototype.disconnect=function(){We.disconnect(this)},e.toString=function(){return"function ResizeObserver () { [polyfill code] }"},e}();
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
const Fe=new WeakMap,Qe=m(e=>t=>{if(!(t instanceof P)||t instanceof L||"style"!==t.committer.name||t.committer.parts.length>1)throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");const{committer:r}=t,{style:i}=r.element;let o=Fe.get(t);void 0===o&&(i.cssText=r.strings.join(" "),Fe.set(t,o=new Set)),o.forEach(t=>{t in e||(o.delete(t),-1===t.indexOf("-")?i[t]=null:i.removeProperty(t))});for(const t in e)o.add(t),-1===t.indexOf("-")?i[t]=e[t]:i.setProperty(t,e[t])});customElements.define("card-icon",class extends ne{constructor(){super(...arguments),this.iconLigature="",this.fillGradientTarget="top"}static get properties(){return{iconLigature:{type:String},fillColor:{type:String},fillGradient:{type:String},fillGradientTarget:{type:String}}}static get styles(){return ie`
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
    `}render(){return I`
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
const Je=new WeakMap,Xe=m(e=>t=>{if(!(t instanceof T))throw new Error("unsafeHTML can only be used in text bindings");const r=Je.get(t);if(void 0!==r&&C(e)&&e===r.value&&t.value===r.fragment)return;const i=document.createElement("template");i.innerHTML=e;const o=document.importNode(i.content,!0);t.setValue(o),Je.set(t,{value:e,fragment:o})}),Ge=ie`
  font-family: 'Unchained', serif;
  line-height: 1.1;
`,Ye=ie`
  font-family: 'Open Sans', sans-serif;
`,Ke=ie`white`,Ze=(ie`black`,ie`rgb(51, 51, 51)`),et=ie`#f9f9f9`,tt=(ie`#f1f1f1`,ie`
  ${Ge}
  font-weight: 700;
  line-height: 0.8;
  text-align: center;
  color: ${Ke};
`),rt=()=>ie`
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
    background: ${et};
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
    background: ${Ze};
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
    ${tt}
    position: absolute;
  }

  .card__nameText {
    position: absolute;
    white-space: nowrap;
    display: flex;
    ${tt}
  }

  .card__nameText__inner {
    margin: auto;
  }

  .card__attackText {
    position: absolute;
    ${tt}
  }

  .card__healthText {
    position: absolute;
    ${tt}
  }

  .card__tribeText {
    position: absolute;
    text-transform: capitalize;
    display: flex;
    ${tt}
  }

  .card__tribeText__inner {
    margin: auto;
  }

  .card__setIcon {
    position: absolute;
    color: white;
  }

  .profile__ratioConstrainer {
    margin: auto;
    display: flex;
    position: relative;
    width: 100%;
    aspect-ratio: 1;
  }

  .profile__artwork {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: ${Ze};
  }

  .profile__artwork__img {
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }

  .profile__frame {
    position: absolute;
    width: 100%;
    height: 100%;
    right: 0;
    top: 0;
    background-color: clear;
  }

  .profile__frame__img {
    position: absolute;
    width: 100%;
    height: 100%;
    right: 0;
    top: 0;
    background-color: clear;
  }


`;var it=function(e,t,r,i){var o,n=arguments.length,s=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s};let ot=class extends ne{static get styles(){return ie`
      :host {
        position: absolute;
        text-align: center;
        color: black;
        display: flex;
      }

      .centered {
        margin: auto;
        ${Ye}
      }
    `}updated(e){}render(){const{text:e,ch:t,cw:r,tribe:i,type:o}=this,n=e.replace(/ ([^ ]*)$/,"&nbsp;$1"),s=e.split("").length;let a=3.8*t,l=1.25,p="normal";s>=150?(a=2.8*t,l=1.1,p="extraSquishy"):s>=130?(a=3*t,l=1.1,p="extraSquishy"):s>=90&&(a=3.4*t,l=1.1,p="squishy");return I`
      <style>
        :host {
          font-size: ${a}px;
          line-height: ${l};
          left: ${21*r}px;
          right: ${13*r}px;
          ${i?`\n          height: ${22.2*t}px;\n          bottom: ${8.6*t}px;\n        `:`\n          height: ${23.5*t}px;\n          bottom: ${6.8*t}px;\n        `}
        }
      </style>
      <div class="centered" data-text-mode=${p}>
        ${Xe(n)}
      </div>
    `}};it([Z({type:String})],ot.prototype,"text",void 0),it([Z({type:String})],ot.prototype,"tribe",void 0),it([Z({type:String})],ot.prototype,"type",void 0),it([Z({type:Number})],ot.prototype,"ch",void 0),it([Z({type:Number})],ot.prototype,"cw",void 0),ot=it([Y("autofit-description-text")],ot);const nt=250,st=375,at=500,lt=720,pt=1024,ct=1280,dt=1440,ut=1920,ht=256,$t=512,_t=720,gt=1024,mt=1280,bt=1440,yt=1920,wt=256,ft=512;function vt(e){return"god power"===e?"power":e}const xt=()=>I`
  <div class="card__loading">
    <img
      class="card__loading__img"
      src="${r(3)}"
      alt="immutable loading spinner"
    />
  </div>
`,St="https://images.godsunchained.com";r(4);var Ct=function(e,t,r,i){var o,n=arguments.length,s=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s},kt=function(e,t,r,i){return new(r||(r=Promise))((function(o,n){function s(e){try{l(i.next(e))}catch(e){n(e)}}function a(e){try{l(i.throw(e))}catch(e){n(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,a)}l((i=i.apply(e,t||[])).next())}))};const zt=["plain","plain","bronze","iron","meteorite","shadow","gold","diamond"],Pt=["diamond","gold","shadow","meteorite","plain"],Tt=new He(e=>{e.forEach(e=>{e.target.handleResize(e)})});let Et=class extends ne{constructor(){super(),this.quality=5,this.useLegacyQualityMapping=!1,this.compositionVersion=1,this.format="card",this.compositionCardData={type:"",effect:"",name:"",rarity:"",god:"",set:"",mana:"",id:"",attack:null,health:null,tribe:"",art_id:"",composition:{illustration:[],frame:[],rosette:[],gems:[],wreath:[],lock:[],tribe_bar:[],profile:[]}},this.loading=!0,this.quality=0,this.ch=.01*this.offsetHeight,this.cw=.01*this.offsetWidth}static get styles(){return rt()}connectedCallback(){super.connectedCallback(),Tt.observe(this)}disconnectedCallback(){super.disconnectedCallback(),Tt.unobserve(this)}updated(e){e.forEach((e,t)=>{"protoId"===t?this.getProtoDataFromApi():"inputProtoData"!==t&&"inputCompositionData"!==t||this.getProtoDataFromInput(t)})}handleResize(e){const t=e.target.shadowRoot.children[0];this.ch=.01*t.offsetHeight,this.cw=.01*t.offsetWidth,this.requestUpdate()}fetchProtoData(){return kt(this,void 0,void 0,(function*(){return this.loading=!0,fetch(`https://api.godsunchained.com/v0/composition?pairs=${this.protoId}@${this.quality}`).then(e=>e.json())}))}getProtoDataFromApi(){return kt(this,void 0,void 0,(function*(){return this.fetchProtoData().then(e=>{if(!e||e.error||1!=e.length)return null;const{id:t,type:r,attack:i,health:o,effect:n,name:s,rarity:a,god:l,mana:p,set:c,tribe:d,art_id:u,composition:h}=e[0];return this.compositionCardData={id:t,type:r,attack:i.Int64,health:o.Int64,effect:n,name:s,rarity:a,god:l,mana:p,set:c,tribe:d.String,art_id:u,composition:h},this.loading=!1,this.requestUpdate(),e})}))}getProtoDataFromInput(e){this.compositionCardData="inputProtoData"==e?Object.assign({},this.inputProtoData):Object.assign({},this.inputCompositionData),this.compositionCardData.composition||1==this.compositionVersion||(this.compositionVersion=1),this.loading=!1,this.requestUpdate()}render(){var e,t;if(2==this.compositionVersion){if("profile"==this.format)return this.renderProfile();if(this.filter&&this.filter.length>0){let e="-"+this.filter;null==this.compositionCardData.composition.illustration[0]||this.compositionCardData.composition.illustration[0].includes(e)||(this.compositionCardData.composition.illustration[0]+=e)}const t={illustration:this.compositionCardData.composition.illustration,responsiveSrcsetSizes:this.responsiveSrcsetSizes};return(null===(e=this.illustrationSource)||void 0===e?void 0:e.length)>0&&(t.imageSrc=this.illustrationSource),I`
        <div class="card__innerRatioConstrainer">
          ${this.loading?xt():I`
              ${(({illustration:e,responsiveSrcsetSizes:t=st+"px",imageSrc:r=St})=>I`
    <picture class="card__artwork">
      <source
        srcset="
          ${r}/art2/${st}/${e[0]}.webp ${nt}w,
          ${r}/art2/${at}/${e[0]}.webp ${st}w,
          ${r}/art2/${lt}/${e[0]}.webp ${at}w,
          ${r}/art2/${pt}/${e[0]}.webp ${lt}w,
          ${r}/art2/${ct}/${e[0]}.webp ${pt}w,
          ${r}/art2/${dt}/${e[0]}.webp ${ct}w,
          ${r}/art2/${ut}/${e[0]}.webp ${dt}w
        "
        sizes="${t}"
        type="image/webp"
      />
      <source
        srcset="
          ${r}/art2/${st}/${e[0]}.jpg ${nt}w,
          ${r}/art2/${at}/${e[0]}.jpg ${st}w,
          ${r}/art2/${lt}/${e[0]}.jpg ${at}w,
          ${r}/art2/${pt}/${e[0]}.jpg ${lt}w,
          ${r}/art2/${ct}/${e[0]}.jpg ${pt}w,
          ${r}/art2/${dt}/${e[0]}.jpg ${ct}w,
          ${r}/art2/${ut}/${e[0]}.jpg ${dt}w
        "
        sizes="${t}"
        type="image/jpg"
      />
      <img
        srcset="${r}/art2/${nt}/${e[0]}.jpg"
        class="card__artwork__img"
      />
    </picture>
  `)(t)}
              ${(({responsiveSrcsetSizes:e=$t+"px",frame:t,rosette:r,gems:i,wreath:o,lock:n,tribe:s,imageSrc:a=St})=>I`
    <picture class="card__baseLayer">
      <source
        srcset="
          ${a}/border-layers/types/${t[0]}/${$t}/${t[1]}.webp ${ht}w,
          ${a}/border-layers/types/${t[0]}/${_t}/${t[1]}.webp ${$t}w,
          ${a}/border-layers/types/${t[0]}/${gt}/${t[1]}.webp ${_t}w,
          ${a}/border-layers/types/${t[0]}/${mt}/${t[1]}.webp ${gt}w,
          ${a}/border-layers/types/${t[0]}/${bt}/${t[1]}.webp ${mt}w,
          ${a}/border-layers/types/${t[0]}/${yt}/${t[1]}.webp ${bt}w
        "
        sizes="${e}"
        type="image/webp"
      />

      <source
        srcset="
          ${a}/border-layers/types/${t[0]}/${$t}/${t[1]}.png ${ht}w,
          ${a}/border-layers/types/${t[0]}/${_t}/${t[1]}.png ${$t}w,
          ${a}/border-layers/types/${t[0]}/${gt}/${t[1]}.png ${_t}w,
          ${a}/border-layers/types/${t[0]}/${mt}/${t[1]}.png ${gt}w,
          ${a}/border-layers/types/${t[0]}/${bt}/${t[1]}.png ${mt}w,
          ${a}/border-layers/types/${t[0]}/${yt}/${t[1]}.png ${bt}w
        "
        sizes="${e}"
        type="image/png"
      />
      <img
        srcset="
          ${a}/border-layers/types/${t[0]}/${ht}/${t[1]}.png
        "
        class="card__baseLayer__img"
      />
    </picture>

    <picture class="card__manaLayer">
      <source
        srcset="
          ${a}/border-layers/rosettes/${r[0]}/${$t}/${r[1]}.webp ${ht}w,
          ${a}/border-layers/rosettes/${r[0]}/${_t}/${r[1]}.webp ${$t}w,
          ${a}/border-layers/rosettes/${r[0]}/${gt}/${r[1]}.webp ${_t}w,
          ${a}/border-layers/rosettes/${r[0]}/${mt}/${r[1]}.webp ${gt}w,
          ${a}/border-layers/rosettes/${r[0]}/${bt}/${r[1]}.webp ${mt}w,
          ${a}/border-layers/rosettes/${r[0]}/${yt}/${r[1]}.webp ${bt}w
        "
        sizes="${e}"
        type="image/webp"
      />
      <source
        srcset="
          ${a}/border-layers/rosettes/${r[0]}/${$t}/${r[1]}.png ${ht}w,
          ${a}/border-layers/rosettes/${r[0]}/${_t}/${r[1]}.png ${$t}w,
          ${a}/border-layers/rosettes/${r[0]}/${gt}/${r[1]}.png ${_t}w,
          ${a}/border-layers/rosettes/${r[0]}/${mt}/${r[1]}.png ${gt}w,
          ${a}/border-layers/rosettes/${r[0]}/${bt}/${r[1]}.png ${mt}w,
          ${a}/border-layers/rosettes/${r[0]}/${yt}/${r[1]}.png ${bt}w
        "
        sizes="${e}"
        type="image/png"
      />
      <img
        srcset="
          ${a}/border-layers/rosettes/${r[0]}/${ht}/${r[1]}.png
        "
        class="card__manaLayer__img"
      />
    </picture>

    ${i.length>0?I`
          <picture class="card__rarityLayer">
            <source
              srcset="
              ${a}/border-layers/gems/${ht}/${i[0]}.webp ${ht}w,
                ${a}/border-layers/gems/${$t}/${i[0]}.webp ${$t}w,
                ${a}/border-layers/gems/${_t}/${i[0]}.webp ${_t}w,
                ${a}/border-layers/gems/${gt}/${i[0]}.webp ${gt}w,
                ${a}/border-layers/gems/${mt}/${i[0]}.webp ${mt}w,
                ${a}/border-layers/gems/${bt}/${i[0]}.webp ${bt}w,
                ${a}/border-layers/gems/${yt}/${i[0]}.webp ${yt}w
              "
              sizes="${e}"
              type="image/webp"
            />
            <source
              srcset="
              ${a}/border-layers/gems/${ht}/${i[0]}.png ${ht}w,
                ${a}/border-layers/gems/${$t}/${i[0]}.png ${$t}w,
                ${a}/border-layers/gems/${_t}/${i[0]}.png ${_t}w,
                ${a}/border-layers/gems/${gt}/${i[0]}.png ${gt}w,
                ${a}/border-layers/gems/${mt}/${i[0]}.webp ${mt}w,
                ${a}/border-layers/gems/${bt}/${i[0]}.webp ${bt}w,
                ${a}/border-layers/gems/${yt}/${i[0]}.png ${yt}w
              "
              sizes="${e}"
              type="image/png"
            />
            <img
              srcset="
                ${a}/border-layers/gems/${ht}/${i[0]}.png
              "
              class="card__rarityLayer__img"
            />
          </picture>
        `:null}
    ${o.length>0?I`
          <picture class="card__wreathLayer">
            <source
              srcset="
                ${a}/border-layers/wreaths/${ht}/${o[0]}.webp ${ht}w,
                ${a}/border-layers/wreaths/${$t}/${o[0]}.webp ${$t}w,
                ${a}/border-layers/wreaths/${_t}/${o[0]}.webp ${_t}w,
                ${a}/border-layers/wreaths/${gt}/${o[0]}.webp ${gt}w,
                ${a}/border-layers/wreaths/${mt}/${o[0]}.webp ${mt}w,
                ${a}/border-layers/wreaths/${bt}/${o[0]}.webp ${bt}w,
                ${a}/border-layers/wreaths/${yt}/${o[0]}.webp ${yt}w
              "
              sizes="${e}"
              type="image/webp"
            />

            <source
              srcset="
              ${a}/border-layers/wreaths/${ht}/${o[0]}.png ${ht}w,
                ${a}/border-layers/wreaths/${$t}/${o[0]}.png ${$t}w,
                ${a}/border-layers/wreaths/${_t}/${o[0]}.png ${_t}w,
                ${a}/border-layers/wreaths/${gt}/${o[0]}.png ${gt}w,
                ${a}/border-layers/wreaths/${mt}/${o[0]}.png ${mt}w,
                ${a}/border-layers/wreaths/${bt}/${o[0]}.png ${bt}w,
                ${a}/border-layers/wreaths/${yt}/${o[0]}.png ${yt}w
              "
              sizes="${e}"
              type="image/png"
            />
            <img
              srcset="
                ${a}/border-layers/wreaths/${ht}/${o[0]}.png
              "
              class="card__wreathLayer__img"
            />
          </picture>
        `:null}
    ${n.length>0?I`
          <picture class="card__lockIconLayer">
            <source
              srcset="
                ${a}/border-layers/locks/${wt}/${n[0]}.webp ${wt}w,
                ${a}/border-layers/locks/${ft}/${n[0]}.webp ${ft}w,
              "
              type="image/webp"
            />

            <source
              srcset="
                ${a}/border-layers/locks/${wt}/${n[0]}.png ${wt}w,
                ${a}/border-layers/locks/${ft}/${n[0]}.png ${ft}w,
              "
              type="image/png"
            />

            <img
              srcset="
                ${a}/border-layers/locks/${n[0]}.png
              "
              class="card__lockIconLayer__img"
            />
          </picture>
        `:null}
    ${s.length>0?I`
          <picture class="card__tribeBarLayer">
            <source
              srcset="
                ${a}/border-layers/tribe_bars/${ht}/${s[0]}.webp ${ht}w,
                ${a}/border-layers/tribe_bars/${$t}/${s[0]}.webp ${$t}w,
                ${a}/border-layers/tribe_bars/${_t}/${s[0]}.webp ${_t}w,
                ${a}/border-layers/tribe_bars/${gt}/${s[0]}.webp ${gt}w,
              "
              sizes="${e}"
              type="image/webp"
            />
            <source
              srcset="
                ${a}/border-layers/tribe_bars/${ht}/${s[0]}.png ${ht}w,
                ${a}/border-layers/tribe_bars/${$t}/${s[0]}.png ${$t}w,
                ${a}/border-layers/tribe_bars/${_t}/${s[0]}.png ${_t}w,
                ${a}/border-layers/tribe_bars/${gt}/${s[0]}.png ${gt}w,
              "
              sizes="${e}"
              type="image/png"
            />

            <img
              srcset="
                ${a}/border-layers/tribe_bars/${yt}/${s[0]}.png
              "
              class="card__tribeBarLayer__img"
            />
          </picture>
        `:null}
  `)({frame:this.compositionCardData.composition.frame,rosette:this.compositionCardData.composition.rosette,gems:this.compositionCardData.composition.gems,wreath:this.compositionCardData.composition.wreath,lock:this.compositionCardData.composition.lock,tribe:this.compositionCardData.composition.tribe_bar,responsiveSrcsetSizes:this.responsiveSrcsetSizes})}
              ${(({type:e="",name:t="⃠",effect:r="⃠",mana:i="⃠",attack:o="⃠",health:n="⃠",tribe:s="",cardSet:a=[],ch:l=0,cw:p=0})=>{e=vt(e);const c=RegExp(/creature|weapon/).test(e),d=t.split("").length>=20,u=Math.floor(.5*l),h=(0===u?1:u)+"px",$="rgba(0, 0, 0, 1)",_=`0 0 ${h} ${$}, 0 0 ${h} ${$}, 0 0 ${h} ${$}`,g=Qe({fontSize:10.5*l+"px",top:6.85*l+"px",left:9.5*p+"px",width:19*p+"px",textShadow:_}),m=Qe({fontSize:(d?3.9*l:4.93*l)+"px",bottom:32.85*l+"px",height:9*l+"px",left:13.25*p+"px",right:5.3*p+"px",textShadow:_}),b=Qe({fontSize:9.5*l+"px",bottom:4.5*l+"px",width:15*p+"px",left:10.5*p+"px",textShadow:_}),y=Qe({fontSize:9.5*l+"px",width:16*p+"px",bottom:4.6*l+"px",right:2.5*p+"px",textShadow:_}),w=Qe({fontSize:3.2*l+"px",bottom:3.1*l+"px",height:4.82*l+"px",left:30.5*p+"px",right:23*p+"px",textShadow:_}),f=Qe({fontSize:6*l+"px",top:10*l+"px",right:9*p+"px"});return I`
    <div class="card__manaText" style=${g}>
      ${i}
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
      cw=${p}
      type=${e}
      tribe=${s}
    ></autofit-description-text>

    ${c?I`
          <div class="card__attackText" style=${b}>
            ${o}
          </div>

          <div class="card__healthText" style=${y}>
            ${n}
          </div>
        `:null}
    ${s?I`
          <div class="card__tribeText" style=${w}>
            <div class="card__tribeText__inner">
              ${s}
            </div>
          </div>
        `:null}
    ${a.length>0?I`
          <card-icon
            style=${f}
            class="card__setIcon"
            iconLigature=${"set_"+a[0]}
          ></card-icon>
        `:null}
  `})({ch:this.ch,cw:this.cw,...this.compositionCardData,cardSet:this.compositionCardData.composition.set})}
            `}
        </div>
      `}{const e=this.useLegacyQualityMapping?zt[this.quality]:Pt[this.quality-1],r="mythic"===this.compositionCardData.rarity,i={id:this.compositionCardData.id,responsiveSrcsetSizes:this.responsiveSrcsetSizes};return(null===(t=this.illustrationSource)||void 0===t?void 0:t.length)>0&&(i.imageSrc=this.illustrationSource),I`
        <div class="card__innerRatioConstrainer">
          ${this.loading?xt():I`
                ${(({id:e,responsiveSrcsetSizes:t=st+"px",imageSrc:r=St})=>I`
    <picture class="card__artwork">
      <source
        srcset="
          ${r}/art2/${st}/${e}.webp ${nt}w,
          ${r}/art2/${at}/${e}.webp ${st}w,
          ${r}/art2/${lt}/${e}.webp ${at}w,
          ${r}/art2/${pt}/${e}.webp ${lt}w,
          ${r}/art2/${ct}/${e}.webp ${pt}w,
          ${r}/art2/${dt}/${e}.webp ${ct}w,
          ${r}/art2/${ut}/${e}.webp ${dt}w
        "
        sizes="${t}"
        type="image/webp"
      />
      <source
        srcset="
          ${r}/art2/${st}/${e}.jpg ${nt}w,
          ${r}/art2/${at}/${e}.jpg ${st}w,
          ${r}/art2/${lt}/${e}.jpg ${at}w,
          ${r}/art2/${pt}/${e}.jpg ${lt}w,
          ${r}/art2/${ct}/${e}.jpg ${pt}w,
          ${r}/art2/${dt}/${e}.jpg ${ct}w,
          ${r}/art2/${ut}/${e}.jpg ${dt}w
        "
        sizes="${t}"
        type="image/jpg"
      />
      <img
        srcset="${r}/art2/${nt}/${e}.jpg"
        class="card__artwork__img"
      />
    </picture>
  `)(i)}
                ${r?(({responsiveSrcsetSizes:e=$t+"px",imageSrc:t=St,art_id:r,type:i,god:o})=>I`
    <picture class="card__baseLayer">
      <source
        srcset="
          ${t}/border-layers/types/${i}/${$t}/${i}_${r}.webp ${ht}w,
          ${t}/border-layers/types/${i}/${_t}/${i}_${r}.webp ${$t}w,
          ${t}/border-layers/types/${i}/${gt}/${i}_${r}.webp ${_t}w,
          ${t}/border-layers/types/${i}/${mt}/${i}_${r}.webp ${gt}w,
          ${t}/border-layers/types/${i}/${bt}/${i}_${r}.webp ${mt}w,
          ${t}/border-layers/types/${i}/${yt}/${i}_${r}.webp ${bt}w
        "
        sizes="${e}"
        type="image/webp"
      />
      <source
        srcset="
          ${t}/border-layers/types/${i}/${$t}/${i}_${r}.png ${ht}w,
          ${t}/border-layers/types/${i}/${_t}/${i}_${r}.png ${$t}w,
          ${t}/border-layers/types/${i}/${gt}/${i}_${r}.png ${_t}w,
          ${t}/border-layers/types/${i}/${mt}/${i}_${r}.png ${gt}w,
          ${t}/border-layers/types/${i}/${bt}/${i}_${r}.png ${mt}w,
          ${t}/border-layers/types/${i}/${yt}/${i}_${r}.png ${bt}w
        "
        sizes="${e}"
        type="image/png"
      />

      <img
        srcset="
          ${t}/border-layers/types/${i}/${ht}/${i}_${r}.png
        "
        class="card__baseLayer__img"
      />
    </picture>

    <picture class="card__manaLayer">
      <source
        srcset="
          ${t}/border-layers/rosettes/mythics/${$t}/mythic_${r}.webp ${ht}w,
          ${t}/border-layers/rosettes/mythics/${_t}/mythic_${r}.webp ${$t}w,
          ${t}/border-layers/rosettes/mythics/${gt}/mythic_${r}.webp ${_t}w,
          ${t}/border-layers/rosettes/mythics/${mt}/mythic_${r}.webp ${gt}w,
          ${t}/border-layers/rosettes/mythics/${bt}/mythic_${r}.webp ${mt}w,
          ${t}/border-layers/rosettes/mythics/${yt}/mythic_${r}.webp ${bt}w
        "
        sizes="${e}"
        type="image/webp"
      />
      <source
        srcset="
          ${t}/border-layers/rosettes/mythics/${$t}/mythic_${r}.png ${ht}w,
          ${t}/border-layers/rosettes/mythics/${_t}/mythic_${r}.png ${$t}w,
          ${t}/border-layers/rosettes/mythics/${gt}/mythic_${r}.png ${_t}w,
          ${t}/border-layers/rosettes/mythics/${mt}/mythic_${r}.png ${gt}w,
          ${t}/border-layers/rosettes/mythics/${bt}/mythic_${r}.png ${mt}w,
          ${t}/border-layers/rosettes/mythics/${yt}/mythic_${r}.png ${bt}w
        "
        sizes="${e}"
        type="image/png"
      />

      <img
        srcset="
          ${t}/border-layers/rosettes/${o}/${$t}/mythic_${r}.png
        "
        class="card__manaLayer__img card__manaLayer__img--mythic"
      />
    </picture>
  `)({responsiveSrcsetSizes:this.responsiveSrcsetSizes,...this.compositionCardData}):(({responsiveSrcsetSizes:e=$t+"px",imageSrc:t=St,type:r,qualityName:i,rarity:o,god:n,set:s,tribe:a})=>(r=vt(r),I`
    <picture class="card__baseLayer">
      <source
        srcset="
          ${t}/border-layers/types/${r}/${$t}/${r}_${i}.webp ${ht}w,
          ${t}/border-layers/types/${r}/${_t}/${r}_${i}.webp ${$t}w,
          ${t}/border-layers/types/${r}/${gt}/${r}_${i}.webp ${_t}w,
          ${t}/border-layers/types/${r}/${mt}/${r}_${i}.webp ${gt}w,
          ${t}/border-layers/types/${r}/${bt}/${r}_${i}.webp ${mt}w,
          ${t}/border-layers/types/${r}/${yt}/${r}_${i}.webp ${bt}w
        "
        sizes="${e}"
        type="image/webp"
      />

      <source
        srcset="
          ${t}/border-layers/types/${r}/${$t}/${r}_${i}.png ${ht}w,
          ${t}/border-layers/types/${r}/${_t}/${r}_${i}.png ${$t}w,
          ${t}/border-layers/types/${r}/${gt}/${r}_${i}.png ${_t}w,
          ${t}/border-layers/types/${r}/${mt}/${r}_${i}.png ${gt}w,
          ${t}/border-layers/types/${r}/${bt}/${r}_${i}.png ${mt}w,
          ${t}/border-layers/types/${r}/${yt}/${r}_${i}.png ${bt}w
        "
        sizes="${e}"
        type="image/png"
      />
      <img
        srcset="
          ${t}/border-layers/types/${r}/${ht}/${r}_${i}.png
        "
        class="card__baseLayer__img"
      />
    </picture>

    <picture class="card__manaLayer">
      <source
        srcset="
          ${t}/border-layers/rosettes/${n}/${$t}/${n}_${i}.webp ${ht}w,
          ${t}/border-layers/rosettes/${n}/${_t}/${n}_${i}.webp ${$t}w,
          ${t}/border-layers/rosettes/${n}/${gt}/${n}_${i}.webp ${_t}w,
          ${t}/border-layers/rosettes/${n}/${mt}/${n}_${i}.webp ${gt}w,
          ${t}/border-layers/rosettes/${n}/${bt}/${n}_${i}.webp ${mt}w,
          ${t}/border-layers/rosettes/${n}/${yt}/${n}_${i}.webp ${bt}w
        "
        sizes="${e}"
        type="image/webp"
      />
      <source
        srcset="
          ${t}/border-layers/rosettes/${n}/${$t}/${n}_${i}.png ${ht}w,
          ${t}/border-layers/rosettes/${n}/${_t}/${n}_${i}.png ${$t}w,
          ${t}/border-layers/rosettes/${n}/${gt}/${n}_${i}.png ${_t}w,
          ${t}/border-layers/rosettes/${n}/${mt}/${n}_${i}.png ${gt}w,
          ${t}/border-layers/rosettes/${n}/${bt}/${n}_${i}.png ${mt}w,
          ${t}/border-layers/rosettes/${n}/${yt}/${n}_${i}.png ${bt}w
        "
        sizes="${e}"
        type="image/png"
      />
      <img
        srcset="
          ${t}/border-layers/rosettes/${n}/${ht}/${n}_${i}.png
        "
        class="card__manaLayer__img"
      />
    </picture>

    ${"common"!==o?I`
          <picture class="card__rarityLayer">
            <source
              srcset="
              ${t}/border-layers/gems/${ht}/rarity_${o}.webp ${ht}w,
                ${t}/border-layers/gems/${$t}/rarity_${o}.webp ${$t}w,
                ${t}/border-layers/gems/${_t}/rarity_${o}.webp ${_t}w,
                ${t}/border-layers/gems/${gt}/rarity_${o}.webp ${gt}w,
                ${t}/border-layers/gems/${mt}/rarity_${o}.webp ${mt}w,
                ${t}/border-layers/gems/${bt}/rarity_${o}.webp ${bt}w,
                ${t}/border-layers/gems/${yt}/rarity_${o}.webp ${yt}w
              "
              sizes="${e}"
              type="image/webp"
            />
            <source
              srcset="
              ${t}/border-layers/gems/${ht}/rarity_${o}.png ${ht}w,
                ${t}/border-layers/gems/${$t}/rarity_${o}.png ${$t}w,
                ${t}/border-layers/gems/${_t}/rarity_${o}.png ${_t}w,
                ${t}/border-layers/gems/${gt}/rarity_${o}.png ${gt}w,
                ${t}/border-layers/gems/${mt}/rarity_${o}.webp ${mt}w,
                ${t}/border-layers/gems/${bt}/rarity_${o}.webp ${bt}w,
                ${t}/border-layers/gems/${yt}/rarity_${o}.png ${yt}w
              "
              sizes="${e}"
              type="image/png"
            />
            <img
              srcset="
                ${t}/border-layers/gems/${ht}/rarity_${o}.png
              "
              class="card__rarityLayer__img"
            />
          </picture>
        `:null}
    ${"legendary"===o?I`
          <picture class="card__wreathLayer">
            <source
              srcset="
                ${t}/border-layers/wreaths/${ht}/wreath_${i}.webp ${ht}w,
                ${t}/border-layers/wreaths/${$t}/wreath_${i}.webp ${$t}w,
                ${t}/border-layers/wreaths/${_t}/wreath_${i}.webp ${_t}w,
                ${t}/border-layers/wreaths/${gt}/wreath_${i}.webp ${gt}w,
                ${t}/border-layers/wreaths/${mt}/wreath_${i}.webp ${mt}w,
                ${t}/border-layers/wreaths/${bt}/wreath_${i}.webp ${bt}w,
                ${t}/border-layers/wreaths/${yt}/wreath_${i}.webp ${yt}w
              "
              sizes="${e}"
              type="image/webp"
            />

            <source
              srcset="
              ${t}/border-layers/wreaths/${ht}/wreath_${i}.png ${ht}w,
                ${t}/border-layers/wreaths/${$t}/wreath_${i}.png ${$t}w,
                ${t}/border-layers/wreaths/${_t}/wreath_${i}.png ${_t}w,
                ${t}/border-layers/wreaths/${gt}/wreath_${i}.png ${gt}w,
                ${t}/border-layers/wreaths/${mt}/wreath_${i}.png ${mt}w,
                ${t}/border-layers/wreaths/${bt}/wreath_${i}.png ${bt}w,
                ${t}/border-layers/wreaths/${yt}/wreath_${i}.png ${yt}w
              "
              sizes="${e}"
              type="image/png"
            />
            <img
              srcset="
                ${t}/border-layers/wreaths/${ht}/wreath_${i}.png
              "
              class="card__wreathLayer__img"
            />
          </picture>
        `:null}
    ${"core"===s&&"plain"===i?I`
          <picture class="card__lockIconLayer">
            <source
              srcset="
                ${t}/border-layers/locks/${wt}/lock_${i}.webp ${wt}w,
                ${t}/border-layers/locks/${ft}/lock_${i}.webp ${ft}w,
              "
              type="image/webp"
            />

            <source
              srcset="
                ${t}/border-layers/locks/${wt}/lock_${i}.png ${wt}w,
                ${t}/border-layers/locks/${ft}/lock_${i}.png ${ft}w,
              "
              type="image/png"
            />

            <img
              srcset="
                ${t}/border-layers/locks/lock_${i}.png
              "
              class="card__lockIconLayer__img"
            />
          </picture>
        `:null}
    ${a?I`
          <picture class="card__tribeBarLayer">
            <source
              srcset="
                ${t}/border-layers/tribe_bars/${ht}/tribebar_${i}.webp ${ht}w,
                ${t}/border-layers/tribe_bars/${$t}/tribebar_${i}.webp ${$t}w,
                ${t}/border-layers/tribe_bars/${_t}/tribebar_${i}.webp ${_t}w,
                ${t}/border-layers/tribe_bars/${gt}/tribebar_${i}.webp ${gt}w,
              "
              sizes="${e}"
              type="image/webp"
            />
            <source
              srcset="
                ${t}/border-layers/tribe_bars/${ht}/tribebar_${i}.png ${ht}w,
                ${t}/border-layers/tribe_bars/${$t}/tribebar_${i}.png ${$t}w,
                ${t}/border-layers/tribe_bars/${_t}/tribebar_${i}.png ${_t}w,
                ${t}/border-layers/tribe_bars/${gt}/tribebar_${i}.png ${gt}w,
              "
              sizes="${e}"
              type="image/png"
            />

            <img
              srcset="
                ${t}/border-layers/tribe_bars/${yt}/tribebar_${o}.png
              "
              class="card__tribeBarLayer__img"
            />
          </picture>
        `:null}
  `))({qualityName:e,responsiveSrcsetSizes:this.responsiveSrcsetSizes,...this.compositionCardData})}
                ${(({type:e="",name:t="⃠",effect:r="⃠",mana:i="⃠",attack:o="⃠",health:n="⃠",tribe:s="",cardSet:a="",ch:l=0,cw:p=0})=>{e=vt(e);const c=RegExp(/creature|weapon/).test(e),d=t.split("").length>=20,u=Math.floor(.5*l),h=(0===u?1:u)+"px",$="rgba(0, 0, 0, 1)",_=`0 0 ${h} ${$}, 0 0 ${h} ${$}, 0 0 ${h} ${$}`,g=Qe({fontSize:10.5*l+"px",top:6.85*l+"px",left:9.5*p+"px",width:19*p+"px",textShadow:_}),m=Qe({fontSize:(d?3.9*l:4.93*l)+"px",bottom:32.85*l+"px",height:9*l+"px",left:13.25*p+"px",right:5.3*p+"px",textShadow:_}),b=Qe({fontSize:9.5*l+"px",bottom:4.5*l+"px",width:15*p+"px",left:10.5*p+"px",textShadow:_}),y=Qe({fontSize:9.5*l+"px",width:16*p+"px",bottom:4.6*l+"px",right:2.5*p+"px",textShadow:_}),w=Qe({fontSize:3.2*l+"px",bottom:3.1*l+"px",height:4.82*l+"px",left:30.5*p+"px",right:23*p+"px",textShadow:_}),f=Qe({fontSize:6*l+"px",top:10*l+"px",right:9*p+"px"});return I`
    <div class="card__manaText" style=${g}>
      ${i}
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
      cw=${p}
      type=${e}
      tribe=${s}
    ></autofit-description-text>

    ${c?I`
          <div class="card__attackText" style=${b}>
            ${o}
          </div>

          <div class="card__healthText" style=${y}>
            ${n}
          </div>
        `:null}
    ${s?I`
          <div class="card__tribeText" style=${w}>
            <div class="card__tribeText__inner">
              ${s}
            </div>
          </div>
        `:null}
    ${"mythic"!==a?I`
          <card-icon
            style=${f}
            class="card__setIcon"
            iconLigature=${"set_"+a}
          ></card-icon>
        `:null}
  `})({ch:this.ch,cw:this.cw,...this.compositionCardData,cardSet:this.compositionCardData.set})}
              `}
        </div>
      `}}renderProfile(){var e;const t={illustration:this.compositionCardData.composition.illustration,profile:this.compositionCardData.composition.profile,responsiveSrcsetSizes:this.responsiveSrcsetSizes};return(null===(e=this.illustrationSource)||void 0===e?void 0:e.length)>0&&(t.imageSrc=this.illustrationSource),I`
        <div class="profile__ratioConstrainer">
          ${this.loading?xt():I`
              ${(({illustration:e,profile:t,responsiveSrcsetSizes:r=st+"px",imageSrc:i=St})=>I`
    <picture class="profile__artwork">
      <source
        srcset="
          ${i}/art2/${st}/${e[0]}.webp ${nt}w,
          ${i}/art2/${at}/${e[0]}.webp ${st}w,
          ${i}/art2/${lt}/${e[0]}.webp ${at}w,
          ${i}/art2/${pt}/${e[0]}.webp ${lt}w,
          ${i}/art2/${ct}/${e[0]}.webp ${pt}w,
          ${i}/art2/${dt}/${e[0]}.webp ${ct}w,
          ${i}/art2/${ut}/${e[0]}.webp ${dt}w
        "
        sizes="${r}"
        type="image/webp"
      />
      <source
        srcset="
          ${i}/art2/${st}/${e[0]}.jpg ${nt}w,
          ${i}/art2/${at}/${e[0]}.jpg ${st}w,
          ${i}/art2/${lt}/${e[0]}.jpg ${at}w,
          ${i}/art2/${pt}/${e[0]}.jpg ${lt}w,
          ${i}/art2/${ct}/${e[0]}.jpg ${pt}w,
          ${i}/art2/${dt}/${e[0]}.jpg ${ct}w,
          ${i}/art2/${ut}/${e[0]}.jpg ${dt}w
        "
        sizes="${r}"
        type="image/jpg"
      />
      <img
        srcset="${i}/art2/${nt}/${e[0]}.jpg"
        class="profile__artwork__img"
      />
    </picture>
    <picture class="profile__frame">
      <source
        srcset="
          ${i}/profiles/${st}/${t[0]}.webp ${nt}w,
          ${i}/profiles/${at}/${t[0]}.webp ${st}w,
          ${i}/profiles/${lt}/${t[0]}.webp ${at}w,
          ${i}/profiles/${pt}/${t[0]}.webp ${lt}w,
          ${i}/profiles/${ct}/${t[0]}.webp ${pt}w,
          ${i}/profiles/${dt}/${t[0]}.webp ${ct}w,
          ${i}/profiles/${ut}/${t[0]}.webp ${dt}w
        "
        sizes="${r}"
        type="image/webp"
      />
      <source
        srcset="
          ${i}/profiles/${st}/${t[0]}.jpg ${nt}w,
          ${i}/profiles/${at}/${t[0]}.jpg ${st}w,
          ${i}/profiles/${lt}/${t[0]}.jpg ${at}w,
          ${i}/profiles/${pt}/${t[0]}.jpg ${lt}w,
          ${i}/profiles/${ct}/${t[0]}.jpg ${pt}w,
          ${i}/profiles/${dt}/${t[0]}.jpg ${ct}w,
          ${i}/profiles/${ut}/${t[0]}.jpg ${dt}w
        "
        sizes="${r}"
        type="image/jpg"
      />
      <img
        srcset="${i}/profiles/${nt}/${t[0]}.jpg"
        class="profile__frame__img"
      />
    </picture>
  `)(t)}
            `}
        </div>
      `}};Ct([Z({type:Number})],Et.prototype,"protoId",void 0),Ct([Z({type:Number})],Et.prototype,"quality",void 0),Ct([Z({type:Object})],Et.prototype,"inputProtoData",void 0),Ct([Z({type:Object})],Et.prototype,"inputCompositionData",void 0),Ct([Z({type:String})],Et.prototype,"responsiveSrcsetSizes",void 0),Ct([Z({type:Boolean})],Et.prototype,"useLegacyQualityMapping",void 0),Ct([Z({type:Number})],Et.prototype,"compositionVersion",void 0),Ct([Z({type:String})],Et.prototype,"illustrationSource",void 0),Ct([Z({type:String})],Et.prototype,"format",void 0),Ct([Z({type:String})],Et.prototype,"filter",void 0),Et=Ct([Y("composited-card")],Et);const Nt=ie`
  font-family: 'Unchained', serif;
  line-height: 1.1;
`,Lt=ie`
  font-family: 'Open Sans', sans-serif;
  line-height: 1.5;
`,Ot=ie`black`,jt=ie`white`,qt=ie`#f9f9f9`,Rt=(ie`#f1f1f1`,ie`65px`),Mt=ie`100px`,Dt=ie`#282828`,At=ie`#333`,It=ie`rgba(255,255,255,0.15)`,Vt=[ie`#8295A2`,ie`#8295A2`,ie`#6A8B35`,ie`#3D91B9`,ie`#84343E`,ie`#B461C5`,ie`#E5D93C`,ie`#94E6FB`,ie`white`],Ut=ie`#9f78dd`,Bt=(e=0)=>ie`
  width: 100%;
  cursor: pointer;
  background: ${Dt};
  border: 2px solid ${It};
  padding: 6px;
`,Wt=(e=0)=>ie`
  height: 20px;
  width: 38px;
  border-radius: 28px;
  background: ${Vt[e]};
  cursor: pointer;
  -webkit-appearance: none;
`;var Ht=function(e,t,r,i){var o,n=arguments.length,s=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s};let Ft=class extends ne{constructor(){super(),this.currentProtoId=Math.floor(99*Math.random()+1),this.currentQuality=Math.floor(4*Math.random()+1),this.currentQualityInWords=Pt[this.currentQuality-1];const e=this.getUrlParams(),t=e.get("protoid"),r=e.get("quality");null!==t&&(this.currentProtoId=parseInt(t,10)),null!==r&&(this.currentQuality=parseInt(r,10),this.currentQualityInWords=Pt[this.currentQuality-1]),null!==t&&null!==r&&this.updatePageImageMetadata(),fetch("https://api.godsunchained.com/v0/proto?format=flat").then(e=>e.json()).then(e=>{this.protosCollection=e,this.currentProtoData=Object.assign(Object.assign({},e[this.currentProtoId]),{id:this.currentProtoId}),this.updatePageMetadata()}).catch(e=>console.error(e))}static get styles(){return ie`
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
    ${Lt}
  }

  .appHeader {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: ${Rt};
    background: white;
    border-bottom: 2px solid ${qt};
    text-align: center;
    line-height: calc(${Rt} - 3);
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
    ${Lt}
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
    border: 1px solid ${Ut};
    color: ${Ut};
    font-weight: 400;
    display: inline-block;
    vertical-align: top;
    margin-top: -5px;
    cursor: defualt;
  }

  .appHeader__title__sup:hover {
    background-color: ${Ut};
    color: ${jt};
  }

  .appContainer {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: ${Rt};
  }

  .appContainer::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50vh;
    background: ${At};
  }

  .appContainer__intro {
    width: 50%;
    text-align: center;
    color: #b8b8b8;
    flex-grow: 0;
    margin: 20px 15px 0;
  }

  .appContainer__intro a {
    color: ${Ot};
    text-decoration: none;
  }

  .appContainer__intro a:hover {
    text-decoration: underline;
  }

  .appContainer__controls__title {
    ${Nt}
    font-size: 18px;
    text-transform: uppercase;
    color: ${jt};
    position: absolute;
    left: 20px;
    top: 0px;
    transform: translateY(-150%);
    margin: 0;
    text-shadow: 0 1px 0 ${At}, 1px 0 0 ${At},
      1px 1px 0 ${At}, -1px 0 0 ${At},
      -1px -1px 0 ${At}, 0 -1px 0 ${At};
  }

  .appContainer__fab {
    position: fixed;
    bottom: ${Mt};
    right: 25px;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: ${Ut};
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
    background: ${jt};
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
    margin-bottom: calc(${Mt} + 30px);
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
    height: ${Mt};
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
    border: 2px solid ${It};
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
    color: ${Vt[1]};
  }

  .quality--bronze {
    color: ${Vt[2]};
  }

  .quality--iron {
    color: ${Vt[3]};
  }

  .quality--meteorite {
    color: ${Vt[4]};
  }

  .quality--shadow {
    color: ${Vt[5]};
  }

  .quality--gold {
    color: ${Vt[6]};
  }

  .quality--diamond {
    color: ${Vt[7]};
  }

  .quality--mythic {
    color: ${Vt[8]};
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
    ${Bt(0)}
  }
  .appContainer__controls__panel__rangeSlider.quality--bronze::-webkit-slider-runnable-track {
    ${Bt(2)}
  }
  .appContainer__controls__panel__rangeSlider.quality--iron::-webkit-slider-runnable-track {
    ${Bt(3)}
  }
  .appContainer__controls__panel__rangeSlider.quality--meteorite::-webkit-slider-runnable-track {
    ${Bt(4)}
  }
  .appContainer__controls__panel__rangeSlider.quality--shadow::-webkit-slider-runnable-track {
    ${Bt(5)}
  }
  .appContainer__controls__panel__rangeSlider.quality--gold::-webkit-slider-runnable-track {
    ${Bt(6)}
  }
  .appContainer__controls__panel__rangeSlider.quality--diamond::-webkit-slider-runnable-track {
    ${Bt(7)}
  }
  .appContainer__controls__panel__rangeSlider.quality--mythic::-webkit-slider-runnable-track {
    ${Bt(8)}
  }

  .appContainer__controls__panel__rangeSlider.quality--plain::-webkit-slider-thumb {
    ${Wt(0)}
  }
  .appContainer__controls__panel__rangeSlider.quality--bronze::-webkit-slider-thumb {
    ${Wt(2)}
  }
  .appContainer__controls__panel__rangeSlider.quality--iron::-webkit-slider-thumb {
    ${Wt(3)}
  }
  .appContainer__controls__panel__rangeSlider.quality--meteorite::-webkit-slider-thumb {
    ${Wt(4)}
  }
  .appContainer__controls__panel__rangeSlider.quality--shadow::-webkit-slider-thumb {
    ${Wt(5)}
  }
  .appContainer__controls__panel__rangeSlider.quality--gold::-webkit-slider-thumb {
    ${Wt(6)}
  }
  .appContainer__controls__panel__rangeSlider.quality--diamond::-webkit-slider-thumb {
    ${Wt(7)}
  }
  .appContainer__controls__panel__rangeSlider.quality--mythic::-webkit-slider-thumb {
    ${Wt(8)}
  }

  /* FIREFOX: */

  .appContainer__controls__panel__rangeSlider.quality--plain::-moz-range-track {
    ${Bt(0)}
  }
  .appContainer__controls__panel__rangeSlider.quality--bronze::-moz-range-track {
    ${Bt(2)}
  }
  .appContainer__controls__panel__rangeSlider.quality--iron::-moz-range-track {
    ${Bt(3)}
  }
  .appContainer__controls__panel__rangeSlider.quality--meteorite::-moz-range-track {
    ${Bt(4)}
  }
  .appContainer__controls__panel__rangeSlider.quality--shadow::-moz-range-track {
    ${Bt(5)}
  }
  .appContainer__controls__panel__rangeSlider.quality--gold::-moz-range-track {
    ${Bt(6)}
  }
  .appContainer__controls__panel__rangeSlider.quality--diamond::-moz-range-track {
    ${Bt(7)}
  }
  .appContainer__controls__panel__rangeSlider.quality--mythic::-moz-range-track {
    ${Bt(8)}
  }

  .appContainer__controls__panel__rangeSlider.quality--plain::-moz-range-thumb {
    ${Wt(0)}
  }
  .appContainer__controls__panel__rangeSlider.quality--bronze::-moz-range-thumb {
    ${Wt(2)}
  }
  .appContainer__controls__panel__rangeSlider.quality--iron::-moz-range-thumb {
    ${Wt(3)}
  }
  .appContainer__controls__panel__rangeSlider.quality--meteorite::-moz-range-thumb {
    ${Wt(4)}
  }
  .appContainer__controls__panel__rangeSlider.quality--shadow::-moz-range-thumb {
    ${Wt(5)}
  }
  .appContainer__controls__panel__rangeSlider.quality--gold::-moz-range-thumb {
    ${Wt(6)}
  }
  .appContainer__controls__panel__rangeSlider.quality--diamond::-moz-range-thumb {
    ${Wt(7)}
  }
  .appContainer__controls__panel__rangeSlider.quality--mythic::-moz-range-thumb {
    ${Wt(8)}
  }
`}updated(e){void 0===e.get("currentProtoId")&&void 0===e.get("currentQuality")||(this.updateUrlParams(),this.updatePageMetadata())}updatePageMetadata(){document.querySelector('meta[property="og:title"]').setAttribute("content",this.currentProtoData.name),document.querySelector('meta[property="og:description"]').setAttribute("content",this.currentProtoData.effect),document.querySelector('meta[property="og:url"]').setAttribute("content",location.href),this.updatePageImageMetadata()}get currentImageUrl(){return`https://card.godsunchained.com?id=${this.currentProtoId}&q=${this.currentQuality}&w=`}updatePageImageMetadata(){document.querySelector('meta[property="og:image"]').setAttribute("content",this.currentImageUrl+"256")}getUrlParams(){return new URLSearchParams(window.location.search)}updateUrlParams(){const e=this.getUrlParams();e.set("protoid",""+this.currentProtoId),e.set("quality",""+this.currentQuality),window.history.pushState({},"",decodeURIComponent(`${location.pathname}?${e}`))}getScreenShot(e){e.preventDefault(),window.open()}render(){return I`
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
              @keyup=${e=>{this.currentProtoId=e.target.value,this.currentProtoData={...this.protosCollection[this.currentProtoId],id:this.currentProtoId}}}
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
              @change=${e=>{this.currentQuality=e.target.value,this.currentQualityInWords=Pt[this.currentQuality-1]}}
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
            ${this.currentProtoData?I`
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
    `}};Ht([Z()],Ft.prototype,"currentProtoId",void 0),Ht([Z()],Ft.prototype,"currentQuality",void 0),Ht([Z()],Ft.prototype,"currentQualityInWords",void 0),Ht([Z()],Ft.prototype,"currentProtoData",void 0),Ht([Z()],Ft.prototype,"protosCollection",void 0),Ft=Ht([Y("demo-app")],Ft);r(8);const Qt=document.createElement("style");Qt.innerHTML=rt().cssText.replace(":host",".compositedCardDomRender"),document.head.appendChild(Qt)}]);
//# sourceMappingURL=bundle.ec9e997c54cb94d0ebe3.js.map