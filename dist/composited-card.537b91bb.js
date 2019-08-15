parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"uWh2":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.isDirective=exports.directive=void 0;const e=new WeakMap,t=t=>(...s)=>{const i=t(...s);return e.set(i,!0),i};exports.directive=t;const s=t=>"function"==typeof t&&e.has(t);exports.isDirective=s;
},{}],"2ytx":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.removeNodes=exports.reparentNodes=exports.isCEPolyfill=void 0;const e=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback;exports.isCEPolyfill=e;const o=(e,o,s=null,l=null)=>{for(;o!==s;){const s=o.nextSibling;e.insertBefore(o,l),o=s}};exports.reparentNodes=o;const s=(e,o,s=null)=>{for(;o!==s;){const s=o.nextSibling;e.removeChild(o),o=s}};exports.removeNodes=s;
},{}],"pnLb":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.nothing=exports.noChange=void 0;const e={};exports.noChange=e;const o={};exports.nothing=o;
},{}],"Av0K":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.lastAttributeNameRegex=exports.createMarker=exports.isTemplatePartActive=exports.Template=exports.boundAttributeSuffix=exports.markerRegex=exports.nodeMarker=exports.marker=void 0;const e=`{{lit-${String(Math.random()).slice(2)}}}`;exports.marker=e;const t=`\x3c!--${e}--\x3e`;exports.nodeMarker=t;const r=new RegExp(`${e}|${t}`);exports.markerRegex=r;const s="$lit$";exports.boundAttributeSuffix=s;class o{constructor(t,o){this.parts=[],this.element=o;const i=[],l=[],p=document.createTreeWalker(o.content,133,null,!1);let c=0,d=-1,u=0;const{strings:f,values:{length:h}}=t;for(;u<h;){const t=p.nextNode();if(null!==t){if(d++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:o}=e;let i=0;for(let t=0;t<o;t++)n(e[t].name,s)&&i++;for(;i-- >0;){const e=f[u],o=x.exec(e)[2],n=o.toLowerCase()+s,i=t.getAttribute(n);t.removeAttribute(n);const a=i.split(r);this.parts.push({type:"attribute",index:d,name:o,strings:a}),u+=a.length-1}}"TEMPLATE"===t.tagName&&(l.push(t),p.currentNode=t.content)}else if(3===t.nodeType){const o=t.data;if(o.indexOf(e)>=0){const e=t.parentNode,l=o.split(r),p=l.length-1;for(let r=0;r<p;r++){let o,i=l[r];if(""===i)o=a();else{const e=x.exec(i);null!==e&&n(e[2],s)&&(i=i.slice(0,e.index)+e[1]+e[2].slice(0,-s.length)+e[3]),o=document.createTextNode(i)}e.insertBefore(o,t),this.parts.push({type:"node",index:++d})}""===l[p]?(e.insertBefore(a(),t),i.push(t)):t.data=l[p],u+=p}}else if(8===t.nodeType)if(t.data===e){const e=t.parentNode;null!==t.previousSibling&&d!==c||(d++,e.insertBefore(a(),t)),c=d,this.parts.push({type:"node",index:d}),null===t.nextSibling?t.data="":(i.push(t),d--),u++}else{let r=-1;for(;-1!==(r=t.data.indexOf(e,r+1));)this.parts.push({type:"node",index:-1}),u++}}else p.currentNode=l.pop()}for(const e of i)e.parentNode.removeChild(e)}}exports.Template=o;const n=(e,t)=>{const r=e.length-t.length;return r>=0&&e.slice(r)===t},i=e=>-1!==e.index;exports.isTemplatePartActive=i;const a=()=>document.createComment("");exports.createMarker=a;const x=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;exports.lastAttributeNameRegex=x;
},{}],"bn5t":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.TemplateInstance=void 0;var e=require("./dom.js"),t=require("./template.js");class s{constructor(e,t,s){this.__parts=[],this.template=e,this.processor=t,this.options=s}update(e){let t=0;for(const s of this.__parts)void 0!==s&&s.setValue(e[t]),t++;for(const s of this.__parts)void 0!==s&&s.commit()}_clone(){const s=e.isCEPolyfill?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),o=[],r=this.template.parts,n=document.createTreeWalker(s,133,null,!1);let i,p=0,l=0,a=n.nextNode();for(;p<r.length;)if(i=r[p],(0,t.isTemplatePartActive)(i)){for(;l<i.index;)l++,"TEMPLATE"===a.nodeName&&(o.push(a),n.currentNode=a.content),null===(a=n.nextNode())&&(n.currentNode=o.pop(),a=n.nextNode());if("node"===i.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(a.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,i.name,i.strings,this.options));p++}else this.__parts.push(void 0),p++;return e.isCEPolyfill&&(document.adoptNode(s),customElements.upgrade(s)),s}}exports.TemplateInstance=s;
},{"./dom.js":"2ytx","./template.js":"Av0K"}],"cVNN":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.SVGTemplateResult=exports.TemplateResult=void 0;var e=require("./dom.js"),t=require("./template.js");const s=` ${t.marker} `;class r{constructor(e,t,s,r){this.strings=e,this.values=t,this.type=s,this.processor=r}getHTML(){const e=this.strings.length-1;let r="",n=!1;for(let l=0;l<e;l++){const e=this.strings[l],i=e.lastIndexOf("\x3c!--");n=(i>-1||n)&&-1===e.indexOf("--\x3e",i+1);const o=t.lastAttributeNameRegex.exec(e);r+=null===o?e+(n?s:t.nodeMarker):e.substr(0,o.index)+o[1]+o[2]+t.boundAttributeSuffix+o[3]+t.marker}return r+=this.strings[e]}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}exports.TemplateResult=r;class n extends r{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const t=super.getTemplateElement(),s=t.content,r=s.firstChild;return s.removeChild(r),(0,e.reparentNodes)(s,r.firstChild),t}}exports.SVGTemplateResult=n;
},{"./dom.js":"2ytx","./template.js":"Av0K"}],"atl2":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.EventPart=exports.PropertyPart=exports.PropertyCommitter=exports.BooleanAttributePart=exports.NodePart=exports.AttributePart=exports.AttributeCommitter=exports.isIterable=exports.isPrimitive=void 0;var t=require("./directive.js"),e=require("./dom.js"),i=require("./part.js"),s=require("./template-instance.js"),n=require("./template-result.js"),r=require("./template.js");const o=t=>null===t||!("object"==typeof t||"function"==typeof t);exports.isPrimitive=o;const a=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);exports.isIterable=a;class h{constructor(t,e,i){this.dirty=!0,this.element=t,this.name=e,this.strings=i,this.parts=[];for(let s=0;s<i.length-1;s++)this.parts[s]=this._createPart()}_createPart(){return new l(this)}_getValue(){const t=this.strings,e=t.length-1;let i="";for(let s=0;s<e;s++){i+=t[s];const e=this.parts[s];if(void 0!==e){const t=e.value;if(o(t)||!a(t))i+="string"==typeof t?t:String(t);else for(const e of t)i+="string"==typeof e?e:String(e)}}return i+=t[e]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}exports.AttributeCommitter=h;class l{constructor(t){this.value=void 0,this.committer=t}setValue(e){e===i.noChange||o(e)&&e===this.value||(this.value=e,(0,t.isDirective)(e)||(this.committer.dirty=!0))}commit(){for(;(0,t.isDirective)(this.value);){const t=this.value;this.value=i.noChange,t(this)}this.value!==i.noChange&&this.committer.commit()}}exports.AttributePart=l;class u{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild((0,r.createMarker)()),this.endNode=t.appendChild((0,r.createMarker)())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=(0,r.createMarker)()),t.__insert(this.endNode=(0,r.createMarker)())}insertAfterPart(t){t.__insert(this.startNode=(0,r.createMarker)()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){for(;(0,t.isDirective)(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=i.noChange,t(this)}const e=this.__pendingValue;e!==i.noChange&&(o(e)?e!==this.value&&this.__commitText(e):e instanceof n.TemplateResult?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):a(e)?this.__commitIterable(e):e===i.nothing?(this.value=i.nothing,this.clear()):this.__commitText(e))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,i="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=i:this.__commitNode(document.createTextNode(i)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof s.TemplateInstance&&this.value.template===e)this.value.update(t.values);else{const i=new s.TemplateInstance(e,t.processor,this.options),n=i._clone();i.update(t.values),this.__commitNode(n),this.value=i}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let i,s=0;for(const n of t)void 0===(i=e[s])&&(i=new u(this.options),e.push(i),0===s?i.appendIntoPart(this):i.insertAfterPart(e[s-1])),i.setValue(n),i.commit(),s++;s<e.length&&(e.length=s,this.clear(i&&i.endNode))}clear(t=this.startNode){(0,e.removeNodes)(this.startNode.parentNode,t.nextSibling,this.endNode)}}exports.NodePart=u;class d{constructor(t,e,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=i}setValue(t){this.__pendingValue=t}commit(){for(;(0,t.isDirective)(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=i.noChange,t(this)}if(this.__pendingValue===i.noChange)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=i.noChange}}exports.BooleanAttributePart=d;class c extends h{constructor(t,e,i){super(t,e,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new p(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}exports.PropertyCommitter=c;class p extends l{}exports.PropertyPart=p;let _=!1;try{const t={get capture(){return _=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(g){}class m{constructor(t,e,i){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=i,this.__boundHandleEvent=(t=>this.handleEvent(t))}setValue(t){this.__pendingValue=t}commit(){for(;(0,t.isDirective)(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=i.noChange,t(this)}if(this.__pendingValue===i.noChange)return;const e=this.__pendingValue,s=this.value,n=null==e||null!=s&&(e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive),r=null!=e&&(null==s||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),r&&(this.__options=v(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=i.noChange}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}exports.EventPart=m;const v=t=>t&&(_?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);
},{"./directive.js":"uWh2","./dom.js":"2ytx","./part.js":"pnLb","./template-instance.js":"bn5t","./template-result.js":"cVNN","./template.js":"Av0K"}],"52LB":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.defaultTemplateProcessor=exports.DefaultTemplateProcessor=void 0;var e=require("./parts.js");class t{handleAttributeExpressions(t,r,s,o){const a=r[0];if("."===a){return new e.PropertyCommitter(t,r.slice(1),s).parts}return"@"===a?[new e.EventPart(t,r.slice(1),o.eventContext)]:"?"===a?[new e.BooleanAttributePart(t,r.slice(1),s)]:new e.AttributeCommitter(t,r,s).parts}handleTextExpression(t){return new e.NodePart(t)}}exports.DefaultTemplateProcessor=t;const r=new t;exports.defaultTemplateProcessor=r;
},{"./parts.js":"atl2"}],"gbKZ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.templateFactory=t,exports.templateCaches=void 0;var e=require("./template.js");function t(t){let s=r.get(t.type);void 0===s&&(s={stringsArray:new WeakMap,keyString:new Map},r.set(t.type,s));let n=s.stringsArray.get(t.strings);if(void 0!==n)return n;const a=t.strings.join(e.marker);return void 0===(n=s.keyString.get(a))&&(n=new e.Template(t,t.getTemplateElement()),s.keyString.set(a,n)),s.stringsArray.set(t.strings,n),n}const r=new Map;exports.templateCaches=r;
},{"./template.js":"Av0K"}],"Fhpq":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.render=exports.parts=void 0;var e=require("./dom.js"),t=require("./parts.js"),r=require("./template-factory.js");const s=new WeakMap;exports.parts=s;const o=(o,a,p)=>{let d=s.get(a);void 0===d&&((0,e.removeNodes)(a,a.firstChild),s.set(a,d=new t.NodePart(Object.assign({templateFactory:r.templateFactory},p))),d.appendInto(a)),d.setValue(o),d.commit()};exports.render=o;
},{"./dom.js":"2ytx","./parts.js":"atl2","./template-factory.js":"gbKZ"}],"SP/d":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"DefaultTemplateProcessor",{enumerable:!0,get:function(){return e.DefaultTemplateProcessor}}),Object.defineProperty(exports,"defaultTemplateProcessor",{enumerable:!0,get:function(){return e.defaultTemplateProcessor}}),Object.defineProperty(exports,"SVGTemplateResult",{enumerable:!0,get:function(){return t.SVGTemplateResult}}),Object.defineProperty(exports,"TemplateResult",{enumerable:!0,get:function(){return t.TemplateResult}}),Object.defineProperty(exports,"directive",{enumerable:!0,get:function(){return r.directive}}),Object.defineProperty(exports,"isDirective",{enumerable:!0,get:function(){return r.isDirective}}),Object.defineProperty(exports,"removeNodes",{enumerable:!0,get:function(){return n.removeNodes}}),Object.defineProperty(exports,"reparentNodes",{enumerable:!0,get:function(){return n.reparentNodes}}),Object.defineProperty(exports,"noChange",{enumerable:!0,get:function(){return o.noChange}}),Object.defineProperty(exports,"nothing",{enumerable:!0,get:function(){return o.nothing}}),Object.defineProperty(exports,"AttributeCommitter",{enumerable:!0,get:function(){return i.AttributeCommitter}}),Object.defineProperty(exports,"AttributePart",{enumerable:!0,get:function(){return i.AttributePart}}),Object.defineProperty(exports,"BooleanAttributePart",{enumerable:!0,get:function(){return i.BooleanAttributePart}}),Object.defineProperty(exports,"EventPart",{enumerable:!0,get:function(){return i.EventPart}}),Object.defineProperty(exports,"isIterable",{enumerable:!0,get:function(){return i.isIterable}}),Object.defineProperty(exports,"isPrimitive",{enumerable:!0,get:function(){return i.isPrimitive}}),Object.defineProperty(exports,"NodePart",{enumerable:!0,get:function(){return i.NodePart}}),Object.defineProperty(exports,"PropertyCommitter",{enumerable:!0,get:function(){return i.PropertyCommitter}}),Object.defineProperty(exports,"PropertyPart",{enumerable:!0,get:function(){return i.PropertyPart}}),Object.defineProperty(exports,"parts",{enumerable:!0,get:function(){return u.parts}}),Object.defineProperty(exports,"render",{enumerable:!0,get:function(){return u.render}}),Object.defineProperty(exports,"templateCaches",{enumerable:!0,get:function(){return a.templateCaches}}),Object.defineProperty(exports,"templateFactory",{enumerable:!0,get:function(){return a.templateFactory}}),Object.defineProperty(exports,"TemplateInstance",{enumerable:!0,get:function(){return p.TemplateInstance}}),Object.defineProperty(exports,"createMarker",{enumerable:!0,get:function(){return s.createMarker}}),Object.defineProperty(exports,"isTemplatePartActive",{enumerable:!0,get:function(){return s.isTemplatePartActive}}),Object.defineProperty(exports,"Template",{enumerable:!0,get:function(){return s.Template}}),exports.svg=exports.html=void 0;var e=require("./lib/default-template-processor.js"),t=require("./lib/template-result.js"),r=require("./lib/directive.js"),n=require("./lib/dom.js"),o=require("./lib/part.js"),i=require("./lib/parts.js"),u=require("./lib/render.js"),a=require("./lib/template-factory.js"),p=require("./lib/template-instance.js"),s=require("./lib/template.js");(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const l=(r,...n)=>new t.TemplateResult(r,n,"html",e.defaultTemplateProcessor);exports.html=l;const c=(r,...n)=>new t.SVGTemplateResult(r,n,"svg",e.defaultTemplateProcessor);exports.svg=c;
},{"./lib/default-template-processor.js":"52LB","./lib/template-result.js":"cVNN","./lib/directive.js":"uWh2","./lib/dom.js":"2ytx","./lib/part.js":"pnLb","./lib/parts.js":"atl2","./lib/render.js":"Fhpq","./lib/template-factory.js":"gbKZ","./lib/template-instance.js":"bn5t","./lib/template.js":"Av0K"}],"NXoq":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.removeNodesFromTemplate=n,exports.insertNodeIntoTemplate=l;var e=require("./template.js");const t=133;function n(e,n){const{element:{content:r},parts:l}=e,u=document.createTreeWalker(r,t,null,!1);let c=o(l),d=l[c],s=-1,i=0;const a=[];let p=null;for(;u.nextNode();){s++;const e=u.currentNode;for(e.previousSibling===p&&(p=null),n.has(e)&&(a.push(e),null===p&&(p=e)),null!==p&&i++;void 0!==d&&d.index===s;)d.index=null!==p?-1:d.index-i,d=l[c=o(l,c)]}a.forEach(e=>e.parentNode.removeChild(e))}const r=e=>{let n=11===e.nodeType?0:1;const r=document.createTreeWalker(e,t,null,!1);for(;r.nextNode();)n++;return n},o=(t,n=-1)=>{for(let r=n+1;r<t.length;r++){const n=t[r];if((0,e.isTemplatePartActive)(n))return r}return-1};function l(e,n,l=null){const{element:{content:u},parts:c}=e;if(null==l)return void u.appendChild(n);const d=document.createTreeWalker(u,t,null,!1);let s=o(c),i=0,a=-1;for(;d.nextNode();){for(a++,d.currentNode===l&&(i=r(n),l.parentNode.insertBefore(n,l));-1!==s&&c[s].index===a;){if(i>0){for(;-1!==s;)c[s].index+=i,s=o(c,s);return}s=o(c,s)}}}
},{"./template.js":"Av0K"}],"eBH8":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"html",{enumerable:!0,get:function(){return a.html}}),Object.defineProperty(exports,"svg",{enumerable:!0,get:function(){return a.svg}}),Object.defineProperty(exports,"TemplateResult",{enumerable:!0,get:function(){return a.TemplateResult}}),exports.render=void 0;var e=require("./dom.js"),t=require("./modify-template.js"),r=require("./render.js"),n=require("./template-factory.js"),o=require("./template-instance.js"),s=require("./template.js"),a=require("../lit-html.js");const l=(e,t)=>`${e}--${t}`;let i=!0;void 0===window.ShadyCSS?i=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),i=!1);const d=e=>t=>{const r=l(t.type,e);let o=n.templateCaches.get(r);void 0===o&&(o={stringsArray:new WeakMap,keyString:new Map},n.templateCaches.set(r,o));let a=o.stringsArray.get(t.strings);if(void 0!==a)return a;const d=t.strings.join(s.marker);if(void 0===(a=o.keyString.get(d))){const r=t.getTemplateElement();i&&window.ShadyCSS.prepareTemplateDom(r,e),a=new s.Template(t,r),o.keyString.set(d,a)}return o.stringsArray.set(t.strings,a),a},p=["html","svg"],c=e=>{p.forEach(r=>{const o=n.templateCaches.get(l(r,e));void 0!==o&&o.keyString.forEach(e=>{const{element:{content:r}}=e,n=new Set;Array.from(r.querySelectorAll("style")).forEach(e=>{n.add(e)}),(0,t.removeNodesFromTemplate)(e,n)})})},m=new Set,y=(e,r,n)=>{m.add(e);const o=n?n.element:document.createElement("template"),s=r.querySelectorAll("style"),{length:a}=s;if(0===a)return void window.ShadyCSS.prepareTemplateStyles(o,e);const l=document.createElement("style");for(let t=0;t<a;t++){const e=s[t];e.parentNode.removeChild(e),l.textContent+=e.textContent}c(e);const i=o.content;n?(0,t.insertNodeIntoTemplate)(n,l,i.firstChild):i.insertBefore(l,i.firstChild),window.ShadyCSS.prepareTemplateStyles(o,e);const d=i.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==d)r.insertBefore(d.cloneNode(!0),r.firstChild);else if(n){i.insertBefore(l,i.firstChild);const e=new Set;e.add(l),(0,t.removeNodesFromTemplate)(n,e)}},S=(t,n,s)=>{if(!s||"object"!=typeof s||!s.scopeName)throw new Error("The `scopeName` option is required.");const a=s.scopeName,l=r.parts.has(n),p=i&&11===n.nodeType&&!!n.host,c=p&&!m.has(a),S=c?document.createDocumentFragment():n;if((0,r.render)(t,S,Object.assign({templateFactory:d(a)},s)),c){const t=r.parts.get(S);r.parts.delete(S);const s=t.value instanceof o.TemplateInstance?t.value.template:void 0;y(a,S,s),(0,e.removeNodes)(n,n.firstChild),n.appendChild(S),r.parts.set(n,t)}!l&&p&&window.ShadyCSS.styleElement(n.host)};exports.render=S;
},{"./dom.js":"2ytx","./modify-template.js":"NXoq","./render.js":"Fhpq","./template-factory.js":"gbKZ","./template-instance.js":"bn5t","./template.js":"Av0K","../lit-html.js":"SP/d"}],"fKvB":[function(require,module,exports) {
"use strict";var t;Object.defineProperty(exports,"__esModule",{value:!0}),exports.UpdatingElement=exports.notEqual=exports.defaultConverter=void 0,window.JSCompiler_renameProperty=((t,e)=>t);const e={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}};exports.defaultConverter=e;const r=(t,e)=>e!==t&&(e==e||t==t);exports.notEqual=r;const s={attribute:!0,type:String,converter:e,reflect:!1,hasChanged:r},i=Promise.resolve(!0),a=1,o=4,n=8,p=16,h=32,c="finalized";class u extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=i,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,r)=>{const s=this._attributeNameForProperty(r,e);void 0!==s&&(this._attributeToPropertyMap.set(s,r),t.push(s))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=s){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const r="symbol"==typeof t?Symbol():`__${t}`;Object.defineProperty(this.prototype,t,{get(){return this[r]},set(e){const s=this[t];this[r]=e,this._requestUpdate(t,s)},configurable:!0,enumerable:!0})}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty(c)||t.finalize(),this[c]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const r of e)this.createProperty(r,t[r])}}static _attributeNameForProperty(t,e){const r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,s=r){return s(t,e)}static _propertyValueFromAttribute(t,r){const s=r.type,i=r.converter||e,a="function"==typeof i?i:i.fromAttribute;return a?a(t,s):t}static _propertyValueToAttribute(t,r){if(void 0===r.reflect)return;const s=r.type,i=r.converter;return(i&&i.toAttribute||e.toAttribute)(t,s)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|h,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,r){e!==r&&this._attributeToProperty(t,r)}_propertyToAttribute(t,e,r=s){const i=this.constructor,a=i._attributeNameForProperty(t,r);if(void 0!==a){const t=i._propertyValueToAttribute(e,r);if(void 0===t)return;this._updateState=this._updateState|n,null==t?this.removeAttribute(a):this.setAttribute(a,t),this._updateState=this._updateState&~n}}_attributeToProperty(t,e){if(this._updateState&n)return;const r=this.constructor,i=r._attributeToPropertyMap.get(t);if(void 0!==i){const t=r._classProperties.get(i)||s;this._updateState=this._updateState|p,this[i]=r._propertyValueFromAttribute(e,t),this._updateState=this._updateState&~p}}_requestUpdate(t,e){let r=!0;if(void 0!==t){const i=this.constructor,a=i._classProperties.get(t)||s;i._valueHasChanged(this[t],e,a.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==a.reflect||this._updateState&p||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,a))):r=!1}!this._hasRequestedUpdate&&r&&this._enqueueUpdate()}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){let t,e;this._updateState=this._updateState|o;const r=this._updatePromise;this._updatePromise=new Promise((r,s)=>{t=r,e=s});try{await r}catch(s){}this._hasConnected||await new Promise(t=>this._hasConnectedResolver=t);try{const t=this.performUpdate();null!=t&&await t}catch(s){e(s)}t(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&h}get _hasRequestedUpdate(){return this._updateState&o}get hasUpdated(){return this._updateState&a}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{(t=this.shouldUpdate(e))&&this.update(e)}catch(r){throw t=!1,r}finally{this._markUpdated()}t&&(this._updateState&a||(this._updateState=this._updateState|a,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~o}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0)}updated(t){}firstUpdated(t){}}exports.UpdatingElement=u,u[t=c]=!0;
},{}],"4Fzp":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.property=i,exports.query=s,exports.queryAll=c,exports.eventOptions=exports.customElement=void 0;const e=(e,t)=>(window.customElements.define(e,t),t),t=(e,t)=>{const{kind:r,elements:n}=t;return{kind:r,elements:n,finisher(t){window.customElements.define(e,t)}}},r=r=>n=>"function"==typeof n?e(r,n):t(r,n);exports.customElement=r;const n=(e,t)=>"method"!==t.kind||!t.descriptor||"value"in t.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}}:Object.assign({},t,{finisher(r){r.createProperty(t.key,e)}}),o=(e,t,r)=>{t.constructor.createProperty(r,e)};function i(e){return(t,r)=>void 0!==r?o(e,t,r):n(e,t)}function s(e){return(t,r)=>{const n={get(){return this.renderRoot.querySelector(e)},enumerable:!0,configurable:!0};return void 0!==r?u(n,t,r):p(n,t)}}function c(e){return(t,r)=>{const n={get(){return this.renderRoot.querySelectorAll(e)},enumerable:!0,configurable:!0};return void 0!==r?u(n,t,r):p(n,t)}}const u=(e,t,r)=>{Object.defineProperty(t,r,e)},p=(e,t)=>({kind:"method",placement:"prototype",key:t.key,descriptor:e}),l=(e,t)=>Object.assign({},t,{finisher(r){Object.assign(r.prototype[t.key],e)}}),d=(e,t,r)=>{Object.assign(t[r],e)},y=e=>(t,r)=>void 0!==r?d(e,t,r):l(e,t);exports.eventOptions=y;
},{}],"ZFCR":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.css=exports.unsafeCSS=exports.CSSResult=exports.supportsAdoptingStyleSheets=void 0;const e="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype;exports.supportsAdoptingStyleSheets=e;const t=Symbol();class s{constructor(e,s){if(s!==t)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(e?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}exports.CSSResult=s;const r=e=>new s(String(e),t);exports.unsafeCSS=r;const o=e=>{if(e instanceof s)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)},n=(e,...r)=>{const n=r.reduce((t,s,r)=>t+o(s)+e[r+1],e[0]);return new s(n,t)};exports.css=n;
},{}],"+bhx":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e={LitElement:!0,html:!0,svg:!0,TemplateResult:!0,SVGTemplateResult:!0};Object.defineProperty(exports,"html",{enumerable:!0,get:function(){return o.html}}),Object.defineProperty(exports,"svg",{enumerable:!0,get:function(){return o.svg}}),Object.defineProperty(exports,"TemplateResult",{enumerable:!0,get:function(){return o.TemplateResult}}),Object.defineProperty(exports,"SVGTemplateResult",{enumerable:!0,get:function(){return o.SVGTemplateResult}}),exports.LitElement=void 0;var t=require("lit-html"),r=require("lit-html/lib/shady-render.js"),s=require("./lib/updating-element.js");Object.keys(s).forEach(function(t){"default"!==t&&"__esModule"!==t&&(Object.prototype.hasOwnProperty.call(e,t)||Object.defineProperty(exports,t,{enumerable:!0,get:function(){return s[t]}}))});var n=require("./lib/decorators.js");Object.keys(n).forEach(function(t){"default"!==t&&"__esModule"!==t&&(Object.prototype.hasOwnProperty.call(e,t)||Object.defineProperty(exports,t,{enumerable:!0,get:function(){return n[t]}}))});var o=require("lit-html/lit-html.js"),i=require("./lib/css-tag.js");function l(e,t=[]){for(let r=0,s=e.length;r<s;r++){const s=e[r];Array.isArray(s)?l(s,t):t.push(s)}return t}Object.keys(i).forEach(function(t){"default"!==t&&"__esModule"!==t&&(Object.prototype.hasOwnProperty.call(e,t)||Object.defineProperty(exports,t,{enumerable:!0,get:function(){return i[t]}}))}),(window.litElementVersions||(window.litElementVersions=[])).push("2.2.1");const a=e=>e.flat?e.flat(1/0):l(e);class d extends s.UpdatingElement{static finalize(){super.finalize.call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const e=this.styles,t=[];if(Array.isArray(e)){a(e).reduceRight((e,t)=>(e.add(t),e),new Set).forEach(e=>t.unshift(e))}else e&&t.push(e);return t}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?i.supportsAdoptingStyleSheets?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){super.update(e);const r=this.render();r instanceof t.TemplateResult&&this.constructor.render(r,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){}}exports.LitElement=d,d.finalized=!0,d.render=r.render;
},{"lit-html":"SP/d","lit-html/lib/shady-render.js":"eBH8","./lib/updating-element.js":"fKvB","./lib/decorators.js":"4Fzp","lit-html/lit-html.js":"SP/d","./lib/css-tag.js":"ZFCR"}],"BK06":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.prettifyConsoleOutput=exports.POLYFILL_CONSOLE_OUTPUT=void 0;var e="function ResizeObserver () { [polyfill code] }";exports.POLYFILL_CONSOLE_OUTPUT=e;var t=function(t){return Object.defineProperty(t,"toString",{value:function(){return e}}),t};exports.prettifyConsoleOutput=t;
},{}],"/iuq":[function(require,module,exports) {

"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.global=void 0;var e="undefined"==typeof window?{}:window;exports.global=e;
},{}],"8/fh":[function(require,module,exports) {


"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.scheduler=void 0;var e,t=require("../ResizeObserverController"),r=require("./prettify"),n=require("./global"),o=12,i=n.global.requestAnimationFrame,s={attributes:!0,characterData:!0,childList:!0,subtree:!0},a=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],u=new Map,l=new Map,c=function(){e||(e=!0,i(function(t){e=!1;var r=[],n=[];u.forEach(function(e){return r.push(e)}),l.forEach(function(e){return n.push(e)}),u.clear(),l.clear();try{for(var o=0,i=r;o<i.length;o++)(0,i[o])(t)}finally{for(var s=0,a=n;s<a.length;s++)(0,a[s])(t)}}))},p=function(){function e(){var e=this;this.stopped=!0,this.listener=function(){return e.schedule()}}return e.prototype.run=function(e){var r=this;l.set(this,function(){var n=!1;try{n=(0,t.process)()}finally{n?r.run(60):e?r.run(e-1):r.start()}}),c()},e.prototype.schedule=function(){this.stop(),this.run(o)},e.prototype.observe=function(){var e=this,t=function(){return e.observer&&e.observer.observe(document.body,s)};document.body?t():n.global.addEventListener("DOMContentLoaded",t)},e.prototype.start=function(){var e=this;this.stopped&&(this.stopped=!1,"MutationObserver"in n.global&&(this.observer=new MutationObserver(this.listener),this.observe()),a.forEach(function(t){return n.global.addEventListener(t,e.listener,!0)}))},e.prototype.stop=function(){var e=this;this.stopped||(this.observer&&this.observer.disconnect(),a.forEach(function(t){return n.global.removeEventListener(t,e.listener,!0)}),this.stopped=!0)},e}(),f=new p;exports.scheduler=f;var h=0;n.global.requestAnimationFrame=function(e){if("function"!=typeof e)throw new Error("requestAnimationFrame expects 1 callback argument of type function.");var t=h+=1;return u.set(t,function(t){return e(t)}),c(),t},n.global.cancelAnimationFrame=function(e){u.delete(e)},(0,r.prettifyConsoleOutput)(n.global.requestAnimationFrame),(0,r.prettifyConsoleOutput)(n.global.cancelAnimationFrame);
},{"../ResizeObserverController":"wgBh","./prettify":"BK06","./global":"/iuq"}],"nNZE":[function(require,module,exports) {
"use strict";var e;Object.defineProperty(exports,"__esModule",{value:!0}),exports.ResizeObserverBoxOptions=void 0,exports.ResizeObserverBoxOptions=e,function(e){e.BORDER_BOX="border-box",e.CONTENT_BOX="content-box"}(e||(exports.ResizeObserverBoxOptions=e={}));
},{}],"lqq2":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.DOMRectReadOnly=void 0;var t=function(){function t(t,e,i,h){return this.x=t,this.y=e,this.width=i,this.height=h,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,Object.freeze(this)}return t.fromRect=function(e){return new t(e.x,e.y,e.width,e.height)},t}();exports.DOMRectReadOnly=t;
},{}],"uXj0":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.isReplacedElement=exports.isHidden=exports.isSVG=void 0;var e=function(e){return e instanceof SVGElement&&"getBBox"in e};exports.isSVG=e;var t=function(t){if(e(t)){var s=t.getBBox(),r=s.width,i=s.height;return!r&&!i}var n=t,a=n.offsetWidth,c=n.offsetHeight;return!(a||c||t.getClientRects().length)};exports.isHidden=t;var s=function(e){switch(e.tagName){case"INPUT":if("image"!==e.type)break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1};exports.isReplacedElement=s;
},{}],"YePP":[function(require,module,exports) {

"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.cache=exports.calculateBoxSizes=exports.calculateBoxSize=void 0;var e=require("../ResizeObserverBoxOptions"),t=require("../DOMRectReadOnly"),o=require("../utils/element"),i=require("../utils/global"),r=new Map;exports.cache=r;var n=/auto|scroll/,d=/^tb|vertical/,a=/msie|trident/i.test(i.global.navigator&&i.global.navigator.userAgent),c=function(e){return parseFloat(e||"0")},s=function(e,t,o){return void 0===e&&(e=0),void 0===t&&(t=0),void 0===o&&(o=!1),Object.freeze({inlineSize:(o?t:e)||0,blockSize:(o?e:t)||0})},l=Object.freeze({borderBoxSize:s(),contentBoxSize:s(),contentRect:new t.DOMRectReadOnly(0,0,0,0)}),u=function(e){if(r.has(e))return r.get(e);if((0,o.isHidden)(e))return r.set(e,l),l;var i=getComputedStyle(e),u=(0,o.isSVG)(e)&&e.getBBox(),x=!a&&"border-box"===i.boxSizing,b=d.test(i.writingMode||""),g=!u&&n.test(i.overflowY||""),h=!u&&n.test(i.overflowX||""),p=u?0:c(i.paddingTop),f=u?0:c(i.paddingRight),z=u?0:c(i.paddingBottom),B=u?0:c(i.paddingLeft),v=u?0:c(i.borderTopWidth),O=u?0:c(i.borderRightWidth),S=u?0:c(i.borderBottomWidth),R=B+f,w=p+z,M=(u?0:c(i.borderLeftWidth))+O,W=v+S,m=h?e.offsetHeight-W-e.clientHeight:0,y=g?e.offsetWidth-M-e.clientWidth:0,j=x?R+M:0,q=x?w+W:0,D=u?u.width:c(i.width)-j-y,H=u?u.height:c(i.height)-q-m,_=D+R+y+M,L=H+w+m+W,T=Object.freeze({borderBoxSize:s(_,L,b),contentBoxSize:s(D,H,b),contentRect:new t.DOMRectReadOnly(B,p,D,H)});return r.set(e,T),T};exports.calculateBoxSizes=u;var x=function(t,o){var i=u(t),r=i.borderBoxSize,n=i.contentBoxSize;return o===e.ResizeObserverBoxOptions.BORDER_BOX?r:n};exports.calculateBoxSize=x;
},{"../ResizeObserverBoxOptions":"nNZE","../DOMRectReadOnly":"lqq2","../utils/element":"uXj0","../utils/global":"/iuq"}],"F3cZ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ResizeObservation=void 0;var e=require("./ResizeObserverBoxOptions"),i=require("./algorithms/calculateBoxSize"),t=require("./utils/element"),r=function(e){return!(0,t.isSVG)(e)&&!(0,t.isReplacedElement)(e)&&"inline"===getComputedStyle(e).display},s=function(){function t(i,t){this.target=i,this.observedBox=t||e.ResizeObserverBoxOptions.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return t.prototype.isActive=function(){var e=(0,i.calculateBoxSize)(this.target,this.observedBox);return r(this.target)&&(this.lastReportedSize=e),this.lastReportedSize.inlineSize!==e.inlineSize||this.lastReportedSize.blockSize!==e.blockSize},t}();exports.ResizeObservation=s;
},{"./ResizeObserverBoxOptions":"nNZE","./algorithms/calculateBoxSize":"YePP","./utils/element":"uXj0"}],"8+pQ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ResizeObserverDetail=void 0;var e=function(){return function(e,t){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=e,this.callback=t}}();exports.ResizeObserverDetail=e;
},{}],"C8BQ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.hasActiveObservations=void 0;var e=require("../ResizeObserverController"),r=function(){return e.resizeObservers.some(function(e){return e.activeTargets.length>0})};exports.hasActiveObservations=r;
},{"../ResizeObserverController":"wgBh"}],"QL3s":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.hasSkippedObservations=void 0;var e=require("../ResizeObserverController"),r=function(){return e.resizeObservers.some(function(e){return e.skippedTargets.length>0})};exports.hasSkippedObservations=r;
},{"../ResizeObserverController":"wgBh"}],"+LIv":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.deliverResizeLoopError=void 0;var e="ResizeObserver loop completed with undelivered notifications.",r=function(){var r;"function"==typeof ErrorEvent?r=new ErrorEvent("error",{message:e}):((r=document.createEvent("Event")).initEvent("error",!1,!1),r.message=e),window.dispatchEvent(r)};exports.deliverResizeLoopError=r;
},{}],"GJe0":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ResizeObserverEntry=void 0;var e=require("./algorithms/calculateBoxSize"),t=function(){return function(t){var r=(0,e.calculateBoxSizes)(t);this.target=t,this.contentRect=r.contentRect,this.borderBoxSize=r.borderBoxSize,this.contentBoxSize=r.contentBoxSize}}();exports.ResizeObserverEntry=t;
},{"./algorithms/calculateBoxSize":"YePP"}],"ECs8":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.calculateDepthForNode=void 0;var e=require("../utils/element"),r=function(r){if((0,e.isHidden)(r))return 1/0;for(var t=0,o=r.parentNode;o;)t+=1,o=o.parentNode;return t};exports.calculateDepthForNode=r;
},{"../utils/element":"uXj0"}],"BTjM":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.broadcastActiveObservations=void 0;var e=require("../ResizeObserverController"),r=require("../ResizeObserverEntry"),t=require("./calculateDepthForNode"),a=require("./calculateBoxSize"),s=function(){var s=1/0,o=[];e.resizeObservers.forEach(function(e){if(0!==e.activeTargets.length){var c=[];e.activeTargets.forEach(function(e){var o=new r.ResizeObserverEntry(e.target),i=(0,t.calculateDepthForNode)(e.target);c.push(o),e.lastReportedSize=(0,a.calculateBoxSize)(e.target,e.observedBox),i<s&&(s=i)}),o.push(function(){e.callback.call(e.observer,c,e.observer)}),e.activeTargets.splice(0,e.activeTargets.length)}});for(var c=0,i=o;c<i.length;c++){(0,i[c])()}return s};exports.broadcastActiveObservations=s;
},{"../ResizeObserverController":"wgBh","../ResizeObserverEntry":"GJe0","./calculateDepthForNode":"ECs8","./calculateBoxSize":"YePP"}],"YBK5":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.gatherActiveObservationsAtDepth=void 0;var e=require("../ResizeObserverController"),t=require("./calculateDepthForNode"),r=require("./calculateBoxSize"),s=function(s){r.cache.clear(),e.resizeObservers.forEach(function(e){e.activeTargets.splice(0,e.activeTargets.length),e.skippedTargets.splice(0,e.skippedTargets.length),e.observationTargets.forEach(function(r){r.isActive()&&((0,t.calculateDepthForNode)(r.target)>s?e.activeTargets.push(r):e.skippedTargets.push(r))})})};exports.gatherActiveObservationsAtDepth=s;
},{"../ResizeObserverController":"wgBh","./calculateDepthForNode":"ECs8","./calculateBoxSize":"YePP"}],"wgBh":[function(require,module,exports) {

"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.process=exports.resizeObservers=exports.ResizeObserverController=void 0;var e=require("./utils/scheduler"),r=require("./ResizeObservation"),s=require("./ResizeObserverDetail"),t=require("./algorithms/hasActiveObservations"),i=require("./algorithms/hasSkippedObservations"),o=require("./algorithms/deliverResizeLoopError"),a=require("./algorithms/broadcastActiveObservations"),n=require("./algorithms/gatherActiveObservationsAtDepth"),v=[];exports.resizeObservers=v;var c=new Map,u=0,b=function(r){!u&&r>0&&e.scheduler.start(),!(u+=r)&&e.scheduler.stop()},h=function(e,r){for(var s=0;s<e.length;s+=1)if(e[s].target===r)return s;return-1},l=function(){var e=0;for((0,n.gatherActiveObservationsAtDepth)(e);(0,t.hasActiveObservations)();)e=(0,a.broadcastActiveObservations)(),(0,n.gatherActiveObservationsAtDepth)(e);return(0,i.hasSkippedObservations)()&&(0,o.deliverResizeLoopError)(),e>0};exports.process=l;var p=function(){function t(){}return t.connect=function(e,r){var t=new s.ResizeObserverDetail(e,r);v.push(t),c.set(e,t)},t.observe=function(s,t,i){if(c.has(s)){var o=c.get(s);h(o.observationTargets,t)<0&&(o.observationTargets.push(new r.ResizeObservation(t,i&&i.box)),b(1),e.scheduler.schedule())}},t.unobserve=function(e,r){if(c.has(e)){var s=c.get(e),t=h(s.observationTargets,r);t>=0&&(s.observationTargets.splice(t,1),b(-1))}},t.disconnect=function(e){if(c.has(e)){var r=c.get(e);v.splice(v.indexOf(r),1),c.delete(e),b(-r.observationTargets.length)}},t}();exports.ResizeObserverController=p;
},{"./utils/scheduler":"8/fh","./ResizeObservation":"F3cZ","./ResizeObserverDetail":"8+pQ","./algorithms/hasActiveObservations":"C8BQ","./algorithms/hasSkippedObservations":"QL3s","./algorithms/deliverResizeLoopError":"+LIv","./algorithms/broadcastActiveObservations":"BTjM","./algorithms/gatherActiveObservationsAtDepth":"YBK5"}],"LQJF":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ResizeObserver=exports.default=void 0;var e=require("./ResizeObserverController"),r=require("./utils/prettify"),t=function(){function t(r){if(0===arguments.length)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if("function"!=typeof r)throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");e.ResizeObserverController.connect(this,r)}return t.prototype.observe=function(r,t){if(0===arguments.length)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(r instanceof Element==!1)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");e.ResizeObserverController.observe(this,r,t)},t.prototype.unobserve=function(r){if(0===arguments.length)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(r instanceof Element==!1)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");e.ResizeObserverController.unobserve(this,r)},t.prototype.disconnect=function(){e.ResizeObserverController.disconnect(this)},t.toString=function(){return r.POLYFILL_CONSOLE_OUTPUT},t}();exports.ResizeObserver=t;var o=t;exports.default=o;
},{"./ResizeObserverController":"wgBh","./utils/prettify":"BK06"}],"3QXw":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.styleMap=void 0;var t=require("../lit-html.js");const e=new WeakMap,r=(0,t.directive)(r=>s=>{if(!(s instanceof t.AttributePart)||s instanceof t.PropertyPart||"style"!==s.committer.name||s.committer.parts.length>1)throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");const{committer:i}=s,{style:n}=i.element;e.has(s)||(n.cssText=i.strings.join(" "));const o=e.get(s);for(const t in o)t in r||(-1===t.indexOf("-")?n[t]=null:n.removeProperty(t));for(const t in r)-1===t.indexOf("-")?n[t]=r[t]:n.setProperty(t,r[t]);e.set(s,r)});exports.styleMap=r;
},{"../lit-html.js":"SP/d"}],"/jTP":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.unsafeHTML=void 0;var e=require("../lib/parts.js"),t=require("../lit-html.js");const n=new WeakMap,r=(0,t.directive)(r=>i=>{if(!(i instanceof t.NodePart))throw new Error("unsafeHTML can only be used in text bindings");const s=n.get(i);if(void 0!==s&&(0,e.isPrimitive)(r)&&r===s.value&&i.value===s.fragment)return;const o=document.createElement("template");o.innerHTML=r;const a=document.importNode(o.content,!0);i.setValue(a),n.set(i,{value:r,fragment:a})});exports.unsafeHTML=r;
},{"../lib/parts.js":"atl2","../lit-html.js":"SP/d"}],"iMSu":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.textLayersTemplate=exports.nonMythicImageLayersTemplate=exports.mythicImageLayersTemplate=exports.baseArtworkLayersTemplate=exports.loadingTemplate=void 0;var e=require("lit-element"),a=require("lit-html/directives/style-map"),i=require("lit-html/directives/unsafe-html");const t={normal:250,high:375,best:500},s={normal:256,high:512,best:1024},r=()=>e.html`
  loading ...
`;exports.loadingTemplate=r;const c=({resolutionSettings:a,useHiResAssets:i,protoId:t})=>e.html`
    <picture class="card__artwork">
      <source
        srcset="https://images.godsunchained.com/art/${i?"500":"375"}/${t}.webp"
        media="(-webkit-min-device-pixel-ratio: 2)"
        type="image/webp"
      />
      <source
        srcset="https://images.godsunchained.com/art/${i?"500":"375"}/${t}.jpg"
        media="(-webkit-min-device-pixel-ratio: 2)"
        type="image/jpg"
      />
      <source
        srcset="https://images.godsunchained.com/art/${i?"375":"250"}/${t}.webp"
        type="image/webp"
      />
      <source
        srcset="https://images.godsunchained.com/art/${i?"375":"250"}/${t}.jpg"
        type="image/jpg"
      />
      <img
        src="https://images.godsunchained.com/art/${i?"375":"250"}/${t}.jpg"
        class="card__artwork__img"
      />
    </picture>
  `;exports.baseArtworkLayersTemplate=c;const p=({type:a,resolutionSettings:i,qualityName:t})=>e.html`
    <picture class="card__baseLayer">
      <source
        srcset="https://images.godsunchained.com/card-layers/${i.highDpi}/creature_hyperion.webp"
        media="(-webkit-min-device-pixel-ratio: 2)"
        type="image/webp"
      />
      <source
        srcset="https://images.godsunchained.com/card-layers/${i.highDpi}/creature_hyperion.png"
        media="(-webkit-min-device-pixel-ratio: 2)"
        type="image/png"
      />
      <source
        srcset="https://images.godsunchained.com/card-layers/${i.lowDpi}/creature_hyperion.webp"
        type="image/webp"
      />
      <source
        srcset="https://images.godsunchained.com/card-layers/${i.lowDpi}/creature_hyperion.png"
        type="image/png"
      />
      <img
        src="https://images.godsunchained.com/card-layers/${i.lowDpi}/${a}_${t}.png"
        class="card__baseLayer__img"
      />
    </picture>

    <picture class="card__manaLayer">
      <source
        srcset="https://images.godsunchained.com/card-layers/${i.highDpi}/mythic_hyperion.webp"
        media="(-webkit-min-device-pixel-ratio: 2)"
        type="image/webp"
      />
      <source
        srcset="https://images.godsunchained.com/card-layers/${i.highDpi}/mythic_hyperion.png"
        media="(-webkit-min-device-pixel-ratio: 2)"
        type="image/png"
      />
      <source
        srcset="https://images.godsunchained.com/card-layers/${i.lowDpi}/mythic_hyperion.webp"
        type="image/webp"
      />
      <source
        srcset="https://images.godsunchained.com/card-layers/${i.lowDpi}/mythic_hyperion.png"
        type="image/png"
      />
      <img
        src="https://images.godsunchained.com/card-layers/${i.lowDpi}/mythic_hyperion.png"
        class="card__manaLayer__img"
      />
    </picture>
  `;exports.mythicImageLayersTemplate=p;const o=({type:a,resolutionSettings:i,qualityName:t,rarity:s,god:r,set:c})=>e.html`
    <picture class="card__baseLayer">
      <source
        srcset="https://images.godsunchained.com/card-layers/${i.highDpi}/${a}_${t}.webp"
        media="(-webkit-min-device-pixel-ratio: 2)"
        type="image/webp"
      />
      <source
        srcset="https://images.godsunchained.com/card-layers/${i.highDpi}/${a}_${t}.png"
        media="(-webkit-min-device-pixel-ratio: 2)"
        type="image/png"
      />
      <source
        srcset="https://images.godsunchained.com/card-layers/${i.lowDpi}/${a}_${t}.webp"
        type="image/webp"
      />
      <source
        srcset="https://images.godsunchained.com/card-layers/${i.lowDpi}/${a}_${t}.png"
        type="image/png"
      />
      <img
        src="https://images.godsunchained.com/card-layers/${i.lowDpi}/${a}_${t}.png"
        class="card__baseLayer__img"
      />
    </picture>

    <picture class="card__manaLayer">
      <source
        srcset="https://images.godsunchained.com/card-layers/${i.highDpi}/${r}_${t}.webp"
        media="(-webkit-min-device-pixel-ratio: 2)"
        type="image/webp"
      />
      <source
        srcset="https://images.godsunchained.com/card-layers/${i.highDpi}/${r}_${t}.png"
        media="(-webkit-min-device-pixel-ratio: 2)"
        type="image/png"
      />
      <source
        srcset="https://images.godsunchained.com/card-layers/${i.lowDpi}/${r}_${t}.webp"
        type="image/webp"
      />
      <source
        srcset="https://images.godsunchained.com/card-layers/${i.lowDpi}/${r}_${t}.png"
        type="image/png"
      />
      <img
        src="https://images.godsunchained.com/card-layers/${i.lowDpi}/${r}_${t}.png"
        class="card__manaLayer__img"
      />
    </picture>

    ${"common"!==s?e.html`
          <picture class="card__rarityLayer">
            <source
              srcset="https://images.godsunchained.com/card-layers/${i.highDpi}/rarity_${s}.webp"
              media="(-webkit-min-device-pixel-ratio: 2)"
              type="image/webp"
            />
            <source
              srcset="https://images.godsunchained.com/card-layers/${i.highDpi}/rarity_${s}.png"
              media="(-webkit-min-device-pixel-ratio: 2)"
              type="image/png"
            />
            <source
              srcset="https://images.godsunchained.com/card-layers/${i.lowDpi}/rarity_${s}.webp"
              type="image/webp"
            />
            <img
              src="https://images.godsunchained.com/card-layers/${i.lowDpi}/rarity_${s}.png"
              class="card__rarityLayer__img"
            />
          </picture>
        `:null}
    ${"legendary"===s?e.html`
          <picture class="card__wreathLayer">
            <source
              srcset="https://images.godsunchained.com/card-layers/${i.highDpi}/wreath_${t}.webp"
              media="(-webkit-min-device-pixel-ratio: 2)"
              type="image/webp"
            />
            <source
              srcset="https://images.godsunchained.com/card-layers/${i.highDpi}/wreath_${t}.png"
              media="(-webkit-min-device-pixel-ratio: 2)"
              type="image/png"
            />
            <source
              srcset="https://images.godsunchained.com/card-layers/${i.lowDpi}/wreath_${t}.webp"
              type="image/webp"
            />
            <img
              src="https://images.godsunchained.com/card-layers/${i.lowDpi}/rarity_wreath_${t}.png"
              class="card__wreathLayer__img"
            />
          </picture>
        `:null}
    ${"core"===c?e.html`
          <picture class="card__lockIconLayer" *ngIf="cardProtoData.">
            <source
              srcset="https://images.godsunchained.com/card-layers/lock_${t}.webp"
              type="image/webp"
            />
            <img
              src="https://images.godsunchained.com/card-layers/lock_${t}.png"
              class="card__lockIconLayer__img"
            />
          </picture>
        `:null}
  `;exports.nonMythicImageLayersTemplate=o;const m=({mana:t,name:s,effect:r,attack:c,health:p,type:o,ch:m,cw:d})=>{const g=RegExp(/creature|weapon/).test(o),n=r.split(" ").length>=14;return e.html`
    <div
      class="card__manaText"
      style=${(0,a.styleMap)({fontSize:`${10.5*m}px`,top:`${5.5*m}px`,left:`${9.5*d}px`,width:`${19*d}px`})}
    >
      ${t}
    </div>
    <div
      class="card__nameText"
      style=${(0,a.styleMap)({fontSize:`${4.93*m}px`,bottom:`${35*m}px`,left:`${12*d}px`,right:`${5*d}px`})}
    >
      ${s}
    </div>

    <div
      class="card__descriptionText"
      style=${(0,a.styleMap)({fontSize:`${n?3.8*m:4*m}px`,lineHeight:n?1.1:1.3,bottom:`${7.75*m}px`,height:`${22.5*m}px`,left:`${20*d}px`,right:`${12*d}px`})}
    >
      <div class="card__descriptionText__inner">
        ${(0,i.unsafeHTML)(r)}
      </div>
    </div>

    ${g?e.html`
          <div
            class="card__attackText"
            style=${(0,a.styleMap)({fontSize:`${9.5*m}px`,bottom:`${3.5*m}px`,width:`${15*d}px`,left:`${10.5*d}px`})}
          >
            ${c}
          </div>

          <div
            class="card__healthText"
            style=${(0,a.styleMap)({fontSize:`${9.5*m}px`,bottom:`${3*m}px`,width:`${15*d}px`,right:`${"weapon"===o?.8*d:4.5*d}px`})}
          >
            ${p}
          </div>
        `:null}
  `};exports.textLayersTemplate=m;
},{"lit-element":"+bhx","lit-html/directives/style-map":"3QXw","lit-html/directives/unsafe-html":"/jTP"}],"CrSg":[function(require,module,exports) {

},{"./Unchained.woff2":[["Unchained.92251087.woff2","ONta"],"ONta"]}],"XEZO":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getStyles=void 0;var t=require("lit-element");const e=t.css`
  font-family: 'Unchained', serif;
  line-height: 1.1;
`,a=t.css`
  font-family: 'Open Sans', sans-serif;
`,o=t.css`white`,i=t.css`black`,s=t.css`
  ${e}
  font-weight: 700;
  line-height: 1;
  text-align: center;
  color: ${o};
  text-shadow: -1px -1px 1px ${i}, 1px -1px 1px ${i},
    -1px 1px 1px ${i}, 1px 1px 1px ${i};
`,r=()=>t.css`
  :host {
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

  .card__artwork {
    position: absolute;
    width: 64%;
    right: 15%;
    top: 12%;
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
    left: 53%;
    top: 0%;
    width: 22%;
    transform: translate(-50%, 15%);
  }

  .card__manaText {
    ${s}
    position: absolute;
  }

  .card__nameText {
    position: absolute;
    white-space: nowrap;
    ${s}
  }

  .card__descriptionText {
    ${e}
    position: absolute;
    text-align: center;
    color: black;
    display: flex;
  }

  .card__descriptionText__inner {
    ${a}
    margin: auto;
  }

  .card__attackText {
    position: absolute;
    ${s}
  }

  .card__healthText {
    position: absolute;
    ${s}
  }
`;exports.getStyles=r;
},{"lit-element":"+bhx"}],"zNll":[function(require,module,exports) {
"use strict";var t=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(exports,"__esModule",{value:!0});const e=require("lit-element"),i=t(require("@juggle/resize-observer")),s=require("./templating");require("./assets/fonts.css");const o=require("./styles"),a=["plain","plain","bronze","iron","meteorite","shadow","gold","diamond","mythic"],r=new i.default(t=>{t.forEach(t=>t.target.handleResize(t))});class n extends e.LitElement{static get properties(){return{protoId:{type:Number},inputProtoData:{type:Object},useHiResAssets:{type:Boolean},resolutionSettings:{lowDpi:Number,highDpi:Number},quality:Number}}static get styles(){return o.getStyles()}constructor(){super(),this.resolutionSettings={lowDpi:"256",highDpi:"512"},this.ch=.01*this.offsetHeight,this.cw=.01*this.offsetWidth}connectedCallback(){super.connectedCallback(),r.observe(this),this.getViewProtoData()}disconnectedCallback(){super.disconnectedCallback(),r.unobserve(this)}fetchProtoData(){return this.loading=!0,fetch(`//api.godsunchained.com/v0/proto/${this.protoId}`).then(t=>t.json())}handleResize(t){this.ch=.01*t.borderBoxSize.blockSize,this.cw=.01*t.borderBoxSize.inlineSize,this.requestUpdate()}getViewProtoData(){this.useHiResAssets&&(this.resolutionSettings={lowDpi:"512",highDpi:"1024"}),this.qualityName=a[this.quality],this.protoId?this.getProtoDataFromApi():this.inputProtoData&&this.getProtoDataFromInput()}getProtoDataFromApi(){return this.fetchProtoData().then(t=>{const{id:e,type:i,attack:s,health:o,effect:a,name:r,rarity:n,god:h,mana:l}=t;return this.protoCardData={id:e,type:i,attack:s.Int64,health:o.Int64,effect:a,name:r,rarity:n,god:h,mana:l},this.loading=!1,this.requestUpdate(),t})}getProtoDataFromInput(){this.protoCardData=Object.assign({},this.inputProtoData),this.protoId=this.inputProtoData.id,this.loading=!1}render(){const t="mythic"===this.qualityName;return e.html`
      ${this.loading?s.loadingTemplate():e.html`
            ${s.baseArtworkLayersTemplate({useHiResAssets:this.useHiResAssets,resolutionSettings:this.resolutionSettings,protoId:this.protoId})}
            ${t?s.mythicImageLayersTemplate({type:this.protoCardData.type,resolutionSettings:this.resolutionSettings,qualityName:this.qualityName}):s.nonMythicImageLayersTemplate(Object.assign({resolutionSettings:this.resolutionSettings,qualityName:this.qualityName},this.protoCardData))}
            ${s.textLayersTemplate(Object.assign({ch:this.ch,cw:this.cw},this.protoCardData))}
          `}
    `}}customElements.define("composited-card",n);
},{"lit-element":"+bhx","@juggle/resize-observer":"LQJF","./templating":"iMSu","./assets/fonts.css":"CrSg","./styles":"XEZO"}]},{},["zNll"], null)
//# sourceMappingURL=/composited-card.537b91bb.js.map