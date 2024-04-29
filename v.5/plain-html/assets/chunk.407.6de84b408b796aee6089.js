/*! For license information please see chunk.407.6de84b408b796aee6089.js.LICENSE.txt */
(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[407],{65722:(e,t,n)=>{"use strict"
function r(e){return e&&e.isDescriptor?"descriptor":null===e?"null":typeof e}function a(e,t,n,a){var o={configurable:!0,enumerable:!0}
"undefined"!==r(a)?o.get=a:(o.writable=!1,o.value=n),Object.defineProperty(e,t,o)}function o(e,t){delete e.__parentTreeNode,t&&Object.defineProperty(e,"__parentTreeNode",{value:t,configurable:!0,enumerable:!1})}function i(e,t){this.blueprint=e,this.builders=t}n.d(t,{A:()=>s}),i.prototype={builderFor:function(e){return this.builders[r(e)]||this.builders.default},build:function(e){var t,n={}
return this.processNode({root:this.blueprint},n),o(t=n.root,e),t},processNode:function(e,t,n){var a=Object.keys(e),i=this
return a.forEach((function(n){var a,o,s,l=e[n]
a=i.builderFor(l),o=u[r(l)]||u.default,(s=a(t,n,l,o))&&i.processNode(s[1],s[0],t)})),o(t,n),t}}
const u={descriptor:function(e,t,n){"function"==typeof n.setup&&n.setup(e,t),n.value?a(e,t,n.value):a(e,t,void 0,(function(){return n.get.call(this,t)}))},object:function(e,t,n){var r,o,i={}
return a(e,t,i),r=i,o=t,Object.defineProperty(r,"__meta",{value:{key:o,type:"node"},configurable:!1,enumerable:!1}),[i,n]},default:function(e,t,n){a(e,t,n)}},s={defineProperty:a,create:function(e,t){var n=function(){for(var e,t=arguments[0],n=Array.prototype.slice.call(arguments,1),r=0;r<n.length;r++)if(e=n[r])for(var a in e)void 0!==e[a]&&(t[a]=e[a])
return t}({},u,(t=t||{}).builder)
return new i(e,n).build(t.parent)},parent:function(e){return function(e){if("object"==typeof e&&null!==e)return e.__parentTreeNode}(e)},meta:function(e){return function(e){if("object"==typeof e&&null!==e)return e.__meta}(e)}}},36800:function(e,t){!function t(n){var r=n,a=n.document
function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}var i=i||{}
function u(e){this.name="SupportError",this.cause=e.cause,this.message="`".concat(e.cause,"` - feature unsupported in your environment."),e.ruleId&&(this.ruleId=e.ruleId,this.message+=" Skipping ".concat(this.ruleId," rule.")),this.stack=(new Error).stack}i.version="4.9.0","function"==typeof define&&define.amd&&define("axe-core",[],(function(){return i})),"object"===(void 0===e?"undefined":o(e))&&e.exports&&"function"==typeof t.toString&&(i.source="("+t.toString()+')(typeof window === "object" ? window : this);',e.exports=i),"function"==typeof n.getComputedStyle&&(n.axe=i),u.prototype=Object.create(Error.prototype),u.prototype.constructor=u
var s=["node"],l=["relatedNodes"],c=["node"],d=["variant"],p=["matches"],f=["chromium"],h=["noImplicit"],m=["noPresentational"],D=["precision","format","inGamut"],g=["space"],v=["algorithm"],y=["method"],b=["maxDeltaE","deltaEMethod","steps","maxSteps"],F=["node"],w=["environmentData"],E=["environmentData"],C=["environmentData"],x=["environmentData"],A=["environmentData"]
function k(e,t,n){T(e,t),t.set(e,n)}function T(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function N(e,t,n){return function(e,t,n){if(t.set)t.set.call(e,n)
else{if(!t.writable)throw new TypeError("attempted to set read only private field")
t.value=n}}(e,B(t,e),n),n}function R(e,t){return function(e,t){return t.get?t.get.call(e):t.value}(e,B(t,e))}function B(e,t){return e.get(S(e,t))}function S(e,t,n){if("function"==typeof e?e===t:e.has(t))return arguments.length<3?t:n
throw new TypeError("Private element is not present on this object")}function _(e,t,n){return t=j(t),function(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return O(e)}(e,M()?Reflect.construct(t,n||[],j(e).constructor):t.apply(e,n))}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function M(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(M=function(){return!!e})()}function j(e){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},j(e)}function I(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&P(e,t)}function P(e,t){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},P(e,t)}function q(e,t){if(null==e)return{}
var n,r,a=function(e,t){if(null==e)return{}
var n,r,a={},o=Object.keys(e)
for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n])
return a}(e,t)
if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e)
for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function L(e){return function(e){if(Array.isArray(e))return Z(e)}(e)||H(e)||X(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function H(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function z(){return z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},z.apply(this,arguments)}function $(e,t){return U(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null!=n){var r,a,o,i,u=[],s=!0,l=!1
try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return
s=!1}else for(;!(s=(r=o.call(n)).done)&&(u.push(r.value),u.length!==t);s=!0);}catch(e){l=!0,a=e}finally{try{if(!s&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(l)throw a}}return u}}(e,t)||X(e,t)||V()}function V(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function U(e){if(Array.isArray(e))return e}function W(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function G(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Y(r.key),r)}}function K(e,t,n){return t&&G(e.prototype,t),n&&G(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Y(e){var t=function(e,t){if("object"!=o(e)||!e)return e
var n=e[Symbol.toPrimitive]
if(void 0!==n){var r=n.call(e,"string")
if("object"!=o(r))return r
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==o(t)?t:String(t)}function Q(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(!n){if(Array.isArray(e)||(n=X(e))||t&&e&&"number"==typeof e.length){n&&(e=n)
var r=0,a=function(){}
return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,u=!1
return{s:function(){n=n.call(e)},n:function(){var e=n.next()
return i=e.done,e},e:function(e){u=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(u)throw o}}}}function X(e,t){if(e){if("string"==typeof e)return Z(e,t)
var n=Object.prototype.toString.call(e).slice(8,-1)
return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Z(e,t):void 0}}function Z(e,t){(null==t||t>e.length)&&(t=e.length)
for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n]
return r}function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}!function(e,t,B,j,G,Z,J,ee){var te=Object.create,ne=Object.defineProperty,re=Object.getPrototypeOf,ae=Object.prototype.hasOwnProperty,oe=Object.getOwnPropertyNames,ie=Object.getOwnPropertyDescriptor,ue=function(e,t){return function(){return t||e((t={exports:{}}).exports,t),t.exports}},se=function(e,t){for(var n in t)ne(e,n,{get:t[n],enumerable:!0})},le=function(e){return function(e,t,n){if(t&&"object"===o(t)||"function"==typeof t){var r,a=Q(oe(t))
try{var i=function(){var a=r.value
ae.call(e,a)||"default"===a||ne(e,a,{get:function(){return t[a]},enumerable:!(n=ie(t,a))||n.enumerable})}
for(a.s();!(r=a.n()).done;)i()}catch(e){a.e(e)}finally{a.f()}}return e}((t=ne(null!=e?te(re(e)):{},"default",e&&e.__esModule&&"default"in e?{get:function(){return e.default},enumerable:!0}:{value:e,enumerable:!0}),ne(t,"__esModule",{value:!0})),e)
var t},ce=function(e,t,n){return function(e,t,n){t in e?ne(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n}(e,"symbol"!==o(t)?t+"":t,n),n},de=ue((function(e,t){"use strict"
t.exports=function(){}})),pe=ue((function(e,t){"use strict"
var n=de()()
t.exports=function(e){return e!==n&&null!==e}})),fe=ue((function(e,t){"use strict"
var n=pe(),r=Array.prototype.forEach,a=Object.create
t.exports=function(e){var t=a(null)
return r.call(arguments,(function(e){n(e)&&function(e,t){var n
for(n in e)t[n]=e[n]}(Object(e),t)})),t}})),he=ue((function(e,t){"use strict"
t.exports=function(){var e=Math.sign
return"function"==typeof e&&1===e(10)&&-1===e(-20)}})),me=ue((function(e,t){"use strict"
t.exports=function(e){return e=Number(e),isNaN(e)||0===e?e:e>0?1:-1}})),De=ue((function(e,t){"use strict"
t.exports=he()()?Math.sign:me()})),ge=ue((function(e,t){"use strict"
var n=De(),r=Math.abs,a=Math.floor
t.exports=function(e){return isNaN(e)?0:0!==(e=Number(e))&&isFinite(e)?n(e)*a(r(e)):e}})),ve=ue((function(e,t){"use strict"
var n=ge(),r=Math.max
t.exports=function(e){return r(0,n(e))}})),ye=ue((function(e,t){"use strict"
var n=ve()
t.exports=function(e,t,r){var a
return isNaN(e)?(a=t)>=0?r&&a?a-1:a:1:!1!==e&&n(e)}})),be=ue((function(e,t){"use strict"
t.exports=function(e){if("function"!=typeof e)throw new TypeError(e+" is not a function")
return e}})),Fe=ue((function(e,t){"use strict"
var n=pe()
t.exports=function(e){if(!n(e))throw new TypeError("Cannot use null or undefined")
return e}})),we=ue((function(e,t){"use strict"
var n=be(),r=Fe(),a=Function.prototype.bind,o=Function.prototype.call,i=Object.keys,u=Object.prototype.propertyIsEnumerable
t.exports=function(e,t){return function(s,l){var c,d=arguments[2],p=arguments[3]
return s=Object(r(s)),n(l),c=i(s),p&&c.sort("function"==typeof p?a.call(p,s):void 0),"function"!=typeof e&&(e=c[e]),o.call(e,c,(function(e,n){return u.call(s,e)?o.call(l,d,s[e],e,s,n):t}))}}})),Ee=ue((function(e,t){"use strict"
t.exports=we()("forEach")})),Ce=ue((function(){})),xe=ue((function(e,t){"use strict"
t.exports=function(){var e,t=Object.assign
return"function"==typeof t&&(t(e={foo:"raz"},{bar:"dwa"},{trzy:"trzy"}),e.foo+e.bar+e.trzy==="razdwatrzy")}})),Ae=ue((function(e,t){"use strict"
t.exports=function(){try{return Object.keys("primitive"),!0}catch(e){return!1}}})),ke=ue((function(e,t){"use strict"
var n=pe(),r=Object.keys
t.exports=function(e){return r(n(e)?Object(e):e)}})),Te=ue((function(e,t){"use strict"
t.exports=Ae()()?Object.keys:ke()})),Ne=ue((function(e,t){"use strict"
var n=Te(),r=Fe(),a=Math.max
t.exports=function(e,t){var o,i,u,s=a(arguments.length,2)
for(e=Object(r(e)),u=function(n){try{e[n]=t[n]}catch(e){o||(o=e)}},i=1;i<s;++i)n(t=arguments[i]).forEach(u)
if(void 0!==o)throw o
return e}})),Re=ue((function(e,t){"use strict"
t.exports=xe()()?Object.assign:Ne()})),Be=ue((function(e,t){"use strict"
var n=pe(),r={function:!0,object:!0}
t.exports=function(e){return n(e)&&r[o(e)]||!1}})),Se=ue((function(e,t){"use strict"
var n=Re(),r=Be(),a=pe(),o=Error.captureStackTrace
t.exports=function(e){var i=new Error(e),u=arguments[1],s=arguments[2]
return a(s)||r(u)&&(s=u,u=null),a(s)&&n(i,s),a(u)&&(i.code=u),o&&o(i,t.exports),i}})),_e=ue((function(e,t){"use strict"
var n=Fe(),r=Object.defineProperty,a=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,i=Object.getOwnPropertySymbols
t.exports=function(e,t){var u,s=Object(n(t))
if(e=Object(n(e)),o(s).forEach((function(n){try{r(e,n,a(t,n))}catch(e){u=e}})),"function"==typeof i&&i(s).forEach((function(n){try{r(e,n,a(t,n))}catch(e){u=e}})),void 0!==u)throw u
return e}})),Oe=ue((function(e,t){"use strict"
var n,r,a,o,i,u=ve(),s=function(e,t){return t}
try{Object.defineProperty(s,"length",{configurable:!0,writable:!1,enumerable:!1,value:1})}catch(e){}1===s.length?(n={configurable:!0,writable:!1,enumerable:!1},r=Object.defineProperty,t.exports=function(e,t){return t=u(t),e.length===t?e:(n.value=t,r(e,"length",n))}):(o=_e(),i=[],a=function(e){var t,n=0
if(i[e])return i[e]
for(t=[];e--;)t.push("a"+(++n).toString(36))
return new Function("fn","return function ("+t.join(", ")+") { return fn.apply(this, arguments); };")},t.exports=function(e,t){var n
if(t=u(t),e.length===t)return e
n=a(t)(e)
try{o(n,e)}catch(e){}return n})})),Me=ue((function(e,t){"use strict"
t.exports=function(e){return null!=e}})),je=ue((function(e,t){"use strict"
var n=Me(),r={object:!0,function:!0,undefined:!0}
t.exports=function(e){return!!n(e)&&hasOwnProperty.call(r,o(e))}})),Ie=ue((function(e,t){"use strict"
var n=je()
t.exports=function(e){if(!n(e))return!1
try{return!!e.constructor&&e.constructor.prototype===e}catch(e){return!1}}})),Pe=ue((function(e,t){"use strict"
var n=Ie()
t.exports=function(e){if("function"!=typeof e)return!1
if(!hasOwnProperty.call(e,"length"))return!1
try{if("number"!=typeof e.length)return!1
if("function"!=typeof e.call)return!1
if("function"!=typeof e.apply)return!1}catch(e){return!1}return!n(e)}})),qe=ue((function(e,t){"use strict"
var n=Pe(),r=/^\s*class[\s{/}]/,a=Function.prototype.toString
t.exports=function(e){return!!n(e)&&!r.test(a.call(e))}})),Le=ue((function(e,t){"use strict"
var n="razdwatrzy"
t.exports=function(){return"function"==typeof n.contains&&!0===n.contains("dwa")&&!1===n.contains("foo")}})),He=ue((function(e,t){"use strict"
var n=String.prototype.indexOf
t.exports=function(e){return n.call(this,e,arguments[1])>-1}})),ze=ue((function(e,t){"use strict"
t.exports=Le()()?String.prototype.contains:He()})),$e=ue((function(e,t){"use strict"
var n=Me(),r=qe(),a=Re(),o=fe(),i=ze(),u=t.exports=function(e,t){var r,u,s,l,c
return arguments.length<2||"string"!=typeof e?(l=t,t=e,e=null):l=arguments[2],n(e)?(r=i.call(e,"c"),u=i.call(e,"e"),s=i.call(e,"w")):(r=s=!0,u=!1),c={value:t,configurable:r,enumerable:u,writable:s},l?a(o(l),c):c}
u.gs=function(e,t,u){var s,l,c,d
return"string"!=typeof e?(c=u,u=t,t=e,e=null):c=arguments[3],n(t)?r(t)?n(u)?r(u)||(c=u,u=void 0):u=void 0:(c=t,t=u=void 0):t=void 0,n(e)?(s=i.call(e,"c"),l=i.call(e,"e")):(s=!0,l=!1),d={get:t,set:u,configurable:s,enumerable:l},c?a(o(c),d):d}})),Ve=ue((function(e,t){"use strict"
var n,r,a,i,u,s,l,c=$e(),d=be(),p=Function.prototype.apply,f=Function.prototype.call,h=Object.create,m=Object.defineProperty,D=Object.defineProperties,g=Object.prototype.hasOwnProperty,v={configurable:!0,enumerable:!1,writable:!0}
r=function(e,t){var r,o
return d(t),o=this,n.call(this,e,r=function(){a.call(o,e,r),p.call(t,this,arguments)}),r.__eeOnceListener__=t,this},a=function(e,t){var n,r,a,i
if(d(t),!g.call(this,"__ee__"))return this
if(!(n=this.__ee__)[e])return this
if(r=n[e],"object"===o(r))for(i=0;a=r[i];++i)a!==t&&a.__eeOnceListener__!==t||(2===r.length?n[e]=r[i?0:1]:r.splice(i,1))
else r!==t&&r.__eeOnceListener__!==t||delete n[e]
return this},i=function(e){var t,n,r,a,i
if(g.call(this,"__ee__")&&(a=this.__ee__[e]))if("object"===o(a)){for(n=arguments.length,i=new Array(n-1),t=1;t<n;++t)i[t-1]=arguments[t]
for(a=a.slice(),t=0;r=a[t];++t)p.call(r,this,i)}else switch(arguments.length){case 1:f.call(a,this)
break
case 2:f.call(a,this,arguments[1])
break
case 3:f.call(a,this,arguments[1],arguments[2])
break
default:for(n=arguments.length,i=new Array(n-1),t=1;t<n;++t)i[t-1]=arguments[t]
p.call(a,this,i)}},u={on:n=function(e,t){var n
return d(t),g.call(this,"__ee__")?n=this.__ee__:(n=v.value=h(null),m(this,"__ee__",v),v.value=null),n[e]?"object"===o(n[e])?n[e].push(t):n[e]=[n[e],t]:n[e]=t,this},once:r,off:a,emit:i},s={on:c(n),once:c(r),off:c(a),emit:c(i)},l=D({},s),t.exports=e=function(e){return null==e?h(l):D(Object(e),s)},e.methods=u})),Ue=ue((function(e,t){"use strict"
t.exports=function(){var e,t,n=Array.from
return"function"==typeof n&&(t=n(e=["raz","dwa"]),Boolean(t&&t!==e&&"dwa"===t[1]))}})),We=ue((function(e,t){"use strict"
t.exports=function(){return"object"===("undefined"==typeof globalThis?"undefined":o(globalThis))&&!!globalThis&&globalThis.Array===Array}})),Ge=ue((function(e,t){var r=function(){if("object"===("undefined"==typeof self?"undefined":o(self))&&self)return self
if("object"===(void 0===n?"undefined":o(n))&&n)return n
throw new Error("Unable to resolve global `this`")}
t.exports=function(){if(this)return this
try{Object.defineProperty(Object.prototype,"__global__",{get:function(){return this},configurable:!0})}catch(e){return r()}try{return __global__||r()}finally{delete Object.prototype.__global__}}()})),Ke=ue((function(e,t){"use strict"
t.exports=We()()?globalThis:Ge()})),Ye=ue((function(e,t){"use strict"
var n=Ke(),r={object:!0,symbol:!0}
t.exports=function(){var e,t=n.Symbol
if("function"!=typeof t)return!1
e=t("test symbol")
try{String(e)}catch(e){return!1}return!!r[o(t.iterator)]&&!!r[o(t.toPrimitive)]&&!!r[o(t.toStringTag)]}})),Qe=ue((function(e,t){"use strict"
t.exports=function(e){return!!e&&("symbol"===o(e)||!!e.constructor&&"Symbol"===e.constructor.name&&"Symbol"===e[e.constructor.toStringTag])}})),Xe=ue((function(e,t){"use strict"
var n=Qe()
t.exports=function(e){if(!n(e))throw new TypeError(e+" is not a symbol")
return e}})),Ze=ue((function(e,t){"use strict"
var n=$e(),r=Object.create,a=Object.defineProperty,o=Object.prototype,i=r(null)
t.exports=function(e){for(var t,r,u=0;i[e+(u||"")];)++u
return i[e+=u||""]=!0,a(o,t="@@"+e,n.gs(null,(function(e){r||(r=!0,a(this,t,n(e)),r=!1)}))),t}})),Je=ue((function(e,t){"use strict"
var n=$e(),r=Ke().Symbol
t.exports=function(e){return Object.defineProperties(e,{hasInstance:n("",r&&r.hasInstance||e("hasInstance")),isConcatSpreadable:n("",r&&r.isConcatSpreadable||e("isConcatSpreadable")),iterator:n("",r&&r.iterator||e("iterator")),match:n("",r&&r.match||e("match")),replace:n("",r&&r.replace||e("replace")),search:n("",r&&r.search||e("search")),species:n("",r&&r.species||e("species")),split:n("",r&&r.split||e("split")),toPrimitive:n("",r&&r.toPrimitive||e("toPrimitive")),toStringTag:n("",r&&r.toStringTag||e("toStringTag")),unscopables:n("",r&&r.unscopables||e("unscopables"))})}})),et=ue((function(e,t){"use strict"
var n=$e(),r=Xe(),a=Object.create(null)
t.exports=function(e){return Object.defineProperties(e,{for:n((function(t){return a[t]?a[t]:a[t]=e(String(t))})),keyFor:n((function(e){var t
for(t in r(e),a)if(a[t]===e)return t}))})}})),tt=ue((function(e,t){"use strict"
var n,r,a,i=$e(),u=Xe(),s=Ke().Symbol,l=Ze(),c=Je(),d=et(),p=Object.create,f=Object.defineProperties,h=Object.defineProperty
if("function"==typeof s)try{String(s()),a=!0}catch(e){}else s=null
r=function(e){if(this instanceof r)throw new TypeError("Symbol is not a constructor")
return n(e)},t.exports=n=function e(t){var n
if(this instanceof e)throw new TypeError("Symbol is not a constructor")
return a?s(t):(n=p(r.prototype),t=void 0===t?"":String(t),f(n,{__description__:i("",t),__name__:i("",l(t))}))},c(n),d(n),f(r.prototype,{constructor:i(n),toString:i("",(function(){return this.__name__}))}),f(n.prototype,{toString:i((function(){return"Symbol ("+u(this).__description__+")"})),valueOf:i((function(){return u(this)}))}),h(n.prototype,n.toPrimitive,i("",(function(){var e=u(this)
return"symbol"===o(e)?e:e.toString()}))),h(n.prototype,n.toStringTag,i("c","Symbol")),h(r.prototype,n.toStringTag,i("c",n.prototype[n.toStringTag])),h(r.prototype,n.toPrimitive,i("c",n.prototype[n.toPrimitive]))})),nt=ue((function(e,t){"use strict"
t.exports=Ye()()?Ke().Symbol:tt()})),rt=ue((function(e,t){"use strict"
var n=Object.prototype.toString,r=n.call(function(){return arguments}())
t.exports=function(e){return n.call(e)===r}})),at=ue((function(e,t){"use strict"
var n=Object.prototype.toString,r=RegExp.prototype.test.bind(/^[object [A-Za-z0-9]*Function]$/)
t.exports=function(e){return"function"==typeof e&&r(n.call(e))}})),ot=ue((function(e,t){"use strict"
var n=Object.prototype.toString,r=n.call("")
t.exports=function(e){return"string"==typeof e||e&&"object"===o(e)&&(e instanceof String||n.call(e)===r)||!1}})),it=ue((function(e,t){"use strict"
var n=nt().iterator,r=rt(),a=at(),o=ve(),i=be(),u=Fe(),s=pe(),l=ot(),c=Array.isArray,d=Function.prototype.call,p={configurable:!0,enumerable:!0,writable:!0,value:null},f=Object.defineProperty
t.exports=function(e){var t,h,m,D,g,v,y,b,F,w,E=arguments[1],C=arguments[2]
if(e=Object(u(e)),s(E)&&i(E),this&&this!==Array&&a(this))t=this
else{if(!E){if(r(e))return 1!==(g=e.length)?Array.apply(null,e):((D=new Array(1))[0]=e[0],D)
if(c(e)){for(D=new Array(g=e.length),h=0;h<g;++h)D[h]=e[h]
return D}}D=[]}if(!c(e))if(void 0!==(F=e[n])){for(y=i(F).call(e),t&&(D=new t),b=y.next(),h=0;!b.done;)w=E?d.call(E,C,b.value,h):b.value,t?(p.value=w,f(D,h,p)):D[h]=w,b=y.next(),++h
g=h}else if(l(e)){for(g=e.length,t&&(D=new t),h=0,m=0;h<g;++h)w=e[h],h+1<g&&(v=w.charCodeAt(0))>=55296&&v<=56319&&(w+=e[++h]),w=E?d.call(E,C,w,m):w,t?(p.value=w,f(D,m,p)):D[m]=w,++m
g=m}if(void 0===g)for(g=o(e.length),t&&(D=new t(g)),h=0;h<g;++h)w=E?d.call(E,C,e[h],h):e[h],t?(p.value=w,f(D,h,p)):D[h]=w
return t&&(p.value=null,D.length=g),D}})),ut=ue((function(e,t){"use strict"
t.exports=Ue()()?Array.from:it()})),st=ue((function(e,t){"use strict"
var n=ut(),r=Array.isArray
t.exports=function(e){return r(e)?e:n(e)}})),lt=ue((function(e,t){"use strict"
var n,r=st(),a=pe(),o=be(),i=Array.prototype.slice
n=function(e){return this.map((function(t,n){return t?t(e[n]):e[n]})).concat(i.call(e,this.length))},t.exports=function(e){return(e=r(e)).forEach((function(e){a(e)&&o(e)})),n.bind(e)}})),ct=ue((function(e,t){"use strict"
var n=be()
t.exports=function(e){var t
return"function"==typeof e?{set:e,get:e}:(t={get:n(e.get)},void 0!==e.set?(t.set=n(e.set),e.delete&&(t.delete=n(e.delete)),e.clear&&(t.clear=n(e.clear)),t):(t.set=t.get,t))}})),dt=ue((function(e,t){"use strict"
var n=Se(),r=Oe(),a=$e(),o=Ve().methods,i=lt(),u=ct(),s=Function.prototype.apply,l=Function.prototype.call,c=Object.create,d=Object.defineProperties,p=o.on,f=o.emit
t.exports=function(e,t,o){var h,m,D,g,v,y,b,F,w,E,C,x,A,k,T,N=c(null)
return m=!1!==t?t:isNaN(e.length)?1:e.length,o.normalizer&&(E=u(o.normalizer),D=E.get,g=E.set,v=E.delete,y=E.clear),null!=o.resolvers&&(T=i(o.resolvers)),k=D?r((function(t){var r,a,o=arguments
if(T&&(o=T(o)),null!==(r=D(o))&&hasOwnProperty.call(N,r))return C&&h.emit("get",r,o,this),N[r]
if(a=1===o.length?l.call(e,this,o[0]):s.call(e,this,o),null===r){if(null!==(r=D(o)))throw n("Circular invocation","CIRCULAR_INVOCATION")
r=g(o)}else if(hasOwnProperty.call(N,r))throw n("Circular invocation","CIRCULAR_INVOCATION")
return N[r]=a,x&&h.emit("set",r,null,a),a}),m):0===t?function(){var t
if(hasOwnProperty.call(N,"data"))return C&&h.emit("get","data",arguments,this),N.data
if(t=arguments.length?s.call(e,this,arguments):l.call(e,this),hasOwnProperty.call(N,"data"))throw n("Circular invocation","CIRCULAR_INVOCATION")
return N.data=t,x&&h.emit("set","data",null,t),t}:function(t){var r,a,o=arguments
if(T&&(o=T(arguments)),a=String(o[0]),hasOwnProperty.call(N,a))return C&&h.emit("get",a,o,this),N[a]
if(r=1===o.length?l.call(e,this,o[0]):s.call(e,this,o),hasOwnProperty.call(N,a))throw n("Circular invocation","CIRCULAR_INVOCATION")
return N[a]=r,x&&h.emit("set",a,null,r),r},h={original:e,memoized:k,profileName:o.profileName,get:function(e){return T&&(e=T(e)),D?D(e):String(e[0])},has:function(e){return hasOwnProperty.call(N,e)},delete:function(e){var t
hasOwnProperty.call(N,e)&&(v&&v(e),t=N[e],delete N[e],A&&h.emit("delete",e,t))},clear:function(){var e=N
y&&y(),N=c(null),h.emit("clear",e)},on:function(e,t){return"get"===e?C=!0:"set"===e?x=!0:"delete"===e&&(A=!0),p.call(this,e,t)},emit:f,updateEnv:function(){e=h.original}},b=D?r((function(e){var t,n=arguments
T&&(n=T(n)),null!==(t=D(n))&&h.delete(t)}),m):0===t?function(){return h.delete("data")}:function(e){return T&&(e=T(arguments)[0]),h.delete(e)},F=r((function(){var e,n=arguments
return 0===t?N.data:(T&&(n=T(n)),e=D?D(n):String(n[0]),N[e])})),w=r((function(){var e,n=arguments
return 0===t?h.has("data"):(T&&(n=T(n)),null!==(e=D?D(n):String(n[0]))&&h.has(e))})),d(k,{__memoized__:a(!0),delete:a(b),clear:a(h.clear),_get:a(F),_has:a(w)}),h}})),pt=ue((function(e,t){"use strict"
var n=be(),r=Ee(),a=Ce(),o=dt(),i=ye()
t.exports=function e(t){var u,s,l
if(n(t),(u=Object(arguments[1])).async&&u.promise)throw new Error("Options 'async' and 'promise' cannot be used together")
return hasOwnProperty.call(t,"__memoized__")&&!u.force?t:(s=i(u.length,t.length,u.async&&a.async),l=o(t,s,u),r(a,(function(e,t){u[t]&&e(u[t],l,u)})),e.__profiler__&&e.__profiler__(l),l.updateEnv(),l.memoized)}})),ft=ue((function(e,t){"use strict"
t.exports=function(e){var t,n,r=e.length
if(!r)return""
for(t=String(e[n=0]);--r;)t+=""+e[++n]
return t}})),ht=ue((function(e,t){"use strict"
t.exports=function(e){return e?function(t){for(var n=String(t[0]),r=0,a=e;--a;)n+=""+t[++r]
return n}:function(){return""}}})),mt=ue((function(e,t){"use strict"
t.exports=function(){var e=Number.isNaN
return"function"==typeof e&&!e({})&&e(NaN)&&!e(34)}})),Dt=ue((function(e,t){"use strict"
t.exports=function(e){return e!=e}})),gt=ue((function(e,t){"use strict"
t.exports=mt()()?Number.isNaN:Dt()})),vt=ue((function(e,t){"use strict"
var n=gt(),r=ve(),a=Fe(),o=Array.prototype.indexOf,i=Object.prototype.hasOwnProperty,u=Math.abs,s=Math.floor
t.exports=function(e){var t,l,c,d
if(!n(e))return o.apply(this,arguments)
for(l=r(a(this).length),c=arguments[1],t=c=isNaN(c)?0:c>=0?s(c):r(this.length)-s(u(c));t<l;++t)if(i.call(this,t)&&(d=this[t],n(d)))return t
return-1}})),yt=ue((function(e,t){"use strict"
var n=vt(),r=Object.create
t.exports=function(){var e=0,t=[],a=r(null)
return{get:function(e){var r,a=0,o=t,i=e.length
if(0===i)return o[i]||null
if(o=o[i]){for(;a<i-1;){if(-1===(r=n.call(o[0],e[a])))return null
o=o[1][r],++a}return-1===(r=n.call(o[0],e[a]))?null:o[1][r]||null}return null},set:function(r){var o,i=0,u=t,s=r.length
if(0===s)u[s]=++e
else{for(u[s]||(u[s]=[[],[]]),u=u[s];i<s-1;)-1===(o=n.call(u[0],r[i]))&&(o=u[0].push(r[i])-1,u[1].push([[],[]])),u=u[1][o],++i;-1===(o=n.call(u[0],r[i]))&&(o=u[0].push(r[i])-1),u[1][o]=++e}return a[e]=r,e},delete:function(e){var r,o=0,i=t,u=a[e],s=u.length,l=[]
if(0===s)delete i[s]
else if(i=i[s]){for(;o<s-1;){if(-1===(r=n.call(i[0],u[o])))return
l.push(i,r),i=i[1][r],++o}if(-1===(r=n.call(i[0],u[o])))return
for(e=i[1][r],i[0].splice(r,1),i[1].splice(r,1);!i[0].length&&l.length;)r=l.pop(),(i=l.pop())[0].splice(r,1),i[1].splice(r,1)}delete a[e]},clear:function(){t=[],a=r(null)}}}})),bt=ue((function(e,t){"use strict"
var n=vt()
t.exports=function(){var e=0,t=[],r=[]
return{get:function(e){var a=n.call(t,e[0])
return-1===a?null:r[a]},set:function(n){return t.push(n[0]),r.push(++e),e},delete:function(e){var a=n.call(r,e);-1!==a&&(t.splice(a,1),r.splice(a,1))},clear:function(){t=[],r=[]}}}})),Ft=ue((function(e,t){"use strict"
var n=vt(),r=Object.create
t.exports=function(e){var t=0,a=[[],[]],o=r(null)
return{get:function(t){for(var r,o=0,i=a;o<e-1;){if(-1===(r=n.call(i[0],t[o])))return null
i=i[1][r],++o}return-1===(r=n.call(i[0],t[o]))?null:i[1][r]||null},set:function(r){for(var i,u=0,s=a;u<e-1;)-1===(i=n.call(s[0],r[u]))&&(i=s[0].push(r[u])-1,s[1].push([[],[]])),s=s[1][i],++u
return-1===(i=n.call(s[0],r[u]))&&(i=s[0].push(r[u])-1),s[1][i]=++t,o[t]=r,t},delete:function(t){for(var r,i=0,u=a,s=[],l=o[t];i<e-1;){if(-1===(r=n.call(u[0],l[i])))return
s.push(u,r),u=u[1][r],++i}if(-1!==(r=n.call(u[0],l[i]))){for(t=u[1][r],u[0].splice(r,1),u[1].splice(r,1);!u[0].length&&s.length;)r=s.pop(),(u=s.pop())[0].splice(r,1),u[1].splice(r,1)
delete o[t]}},clear:function(){a=[[],[]],o=r(null)}}}})),wt=ue((function(e,t){"use strict"
var n=be(),r=Ee(),a=Function.prototype.call
t.exports=function(e,t){var o={},i=arguments[2]
return n(t),r(e,(function(e,n,r,u){o[n]=a.call(t,i,e,n,r,u)})),o}})),Et=ue((function(e,t){"use strict"
var n=function(e){if("function"!=typeof e)throw new TypeError(e+" is not a function")
return e},r=function(e){var t,r,o=a.createTextNode(""),i=0
return new e((function(){var e
if(t)r&&(t=r.concat(t))
else{if(!r)return
t=r}if(r=t,t=null,"function"==typeof r)return e=r,r=null,void e()
for(o.data=i=++i%2;r;)e=r.shift(),r.length||(r=null),e()})).observe(o,{characterData:!0}),function(e){n(e),t?"function"==typeof t?t=[t,e]:t.push(e):(t=e,o.data=i=++i%2)}}
t.exports=function(){if("object"===("undefined"==typeof process?"undefined":o(process))&&process&&"function"==typeof process.nextTick)return process.nextTick
if("function"==typeof queueMicrotask)return function(e){queueMicrotask(n(e))}
if("object"===(void 0===a?"undefined":o(a))&&a){if("function"==typeof MutationObserver)return r(MutationObserver)
if("function"==typeof WebKitMutationObserver)return r(WebKitMutationObserver)}return"function"==typeof setImmediate?function(e){setImmediate(n(e))}:"function"==typeof setTimeout||"object"===("undefined"==typeof setTimeout?"undefined":o(setTimeout))?function(e){setTimeout(n(e),0)}:null}()})),Ct=ue((function(){"use strict"
var e=ut(),t=wt(),n=_e(),r=Oe(),a=Et(),o=Array.prototype.slice,i=Function.prototype.apply,u=Object.create
Ce().async=function(s,l){var c,d,p,f=u(null),h=u(null),m=l.memoized,D=l.original
l.memoized=r((function(e){var t=arguments,n=t[t.length-1]
return"function"==typeof n&&(c=n,t=o.call(t,0,-1)),m.apply(d=this,p=t)}),m)
try{n(l.memoized,m)}catch(e){}l.on("get",(function(e){var t,n,r
if(c){if(f[e])return"function"==typeof f[e]?f[e]=[f[e],c]:f[e].push(c),void(c=null)
t=c,n=d,r=p,c=d=p=null,a((function(){var a
hasOwnProperty.call(h,e)?(a=h[e],l.emit("getasync",e,r,n),i.call(t,a.context,a.args)):(c=t,d=n,p=r,m.apply(n,r))}))}})),l.original=function(){var t,n,r,o
return c?(t=e(arguments),n=function t(n){var r,u,s=t.id
if(null!=s){if(delete t.id,r=f[s],delete f[s],r)return u=e(arguments),l.has(s)&&(n?l.delete(s):(h[s]={context:this,args:u},l.emit("setasync",s,"function"==typeof r?1:r.length))),"function"==typeof r?o=i.call(r,this,u):r.forEach((function(e){o=i.call(e,this,u)}),this),o}else a(i.bind(t,this,arguments))},r=c,c=d=p=null,t.push(n),o=i.call(D,this,t),n.cb=r,c=n,o):i.call(D,this,arguments)},l.on("set",(function(e){c?(f[e]?"function"==typeof f[e]?f[e]=[f[e],c.cb]:f[e].push(c.cb):f[e]=c.cb,delete c.cb,c.id=e,c=null):l.delete(e)})),l.on("delete",(function(e){var t
hasOwnProperty.call(f,e)||h[e]&&(t=h[e],delete h[e],l.emit("deleteasync",e,o.call(t.args,1)))})),l.on("clear",(function(){var e=h
h=u(null),l.emit("clearasync",t(e,(function(e){return o.call(e.args,1)})))}))}})),xt=ue((function(e,t){"use strict"
var n=Array.prototype.forEach,r=Object.create
t.exports=function(e){var t=r(null)
return n.call(arguments,(function(e){t[e]=!0})),t}})),At=ue((function(e,t){"use strict"
t.exports=function(e){return"function"==typeof e}})),kt=ue((function(e,t){"use strict"
var n=At()
t.exports=function(e){try{return e&&n(e.toString)?e.toString():String(e)}catch(e){throw new TypeError("Passed argument cannot be stringifed")}}})),Tt=ue((function(e,t){"use strict"
var n=Fe(),r=kt()
t.exports=function(e){return r(n(e))}})),Nt=ue((function(e,t){"use strict"
var n=At()
t.exports=function(e){try{return e&&n(e.toString)?e.toString():String(e)}catch(e){return"<Non-coercible to string value>"}}})),Rt=ue((function(e,t){"use strict"
var n=Nt(),r=/[\n\r\u2028\u2029]/g
t.exports=function(e){var t=n(e)
return t.length>100&&(t=t.slice(0,99)+"…"),t.replace(r,(function(e){return JSON.stringify(e).slice(1,-1)}))}})),Bt=ue((function(e,t){function n(e){return!!e&&("object"===o(e)||"function"==typeof e)&&"function"==typeof e.then}t.exports=n,t.exports.default=n})),St=ue((function(){"use strict"
var e=wt(),t=xt(),n=Tt(),r=Rt(),a=Bt(),o=Et(),i=Object.create,u=t("then","then:finally","done","done:finally")
Ce().promise=function(t,s){var l=i(null),c=i(null),d=i(null)
if(!0===t)t=null
else if(t=n(t),!u[t])throw new TypeError("'"+r(t)+"' is not valid promise mode")
s.on("set",(function(e,n,r){var i=!1
if(!a(r))return c[e]=r,void s.emit("setasync",e,1)
l[e]=1,d[e]=r
var u=function(t){var n=l[e]
if(i)throw new Error("Memoizee error: Detected unordered then|done & finally resolution, which in turn makes proper detection of success/failure impossible (when in 'done:finally' mode)\nConsider to rely on 'then' or 'done' mode instead.")
n&&(delete l[e],c[e]=t,s.emit("setasync",e,n))},p=function(){i=!0,l[e]&&(delete l[e],delete d[e],s.delete(e))},f=t
if(f||(f="then"),"then"===f){var h=function(){o(p)}
"function"==typeof(r=r.then((function(e){o(u.bind(this,e))}),h)).finally&&r.finally(h)}else if("done"===f){if("function"!=typeof r.done)throw new Error("Memoizee error: Retrieved promise does not implement 'done' in 'done' mode")
r.done(u,p)}else if("done:finally"===f){if("function"!=typeof r.done)throw new Error("Memoizee error: Retrieved promise does not implement 'done' in 'done:finally' mode")
if("function"!=typeof r.finally)throw new Error("Memoizee error: Retrieved promise does not implement 'finally' in 'done:finally' mode")
r.done(u),r.finally(p)}})),s.on("get",(function(e,t,n){var r
if(l[e])++l[e]
else{r=d[e]
var i=function(){s.emit("getasync",e,t,n)}
a(r)?"function"==typeof r.done?r.done(i):r.then((function(){o(i)})):i()}})),s.on("delete",(function(e){if(delete d[e],l[e])delete l[e]
else if(hasOwnProperty.call(c,e)){var t=c[e]
delete c[e],s.emit("deleteasync",e,[t])}})),s.on("clear",(function(){var t=c
c=i(null),l=i(null),d=i(null),s.emit("clearasync",e(t,(function(e){return[e]})))}))}})),_t=ue((function(){"use strict"
var e=be(),t=Ee(),n=Ce(),r=Function.prototype.apply
n.dispose=function(a,o,i){var u
if(e(a),i.async&&n.async||i.promise&&n.promise)return o.on("deleteasync",u=function(e,t){r.call(a,null,t)}),void o.on("clearasync",(function(e){t(e,(function(e,t){u(t,e)}))}))
o.on("delete",u=function(e,t){a(t)}),o.on("clear",(function(e){t(e,(function(e,t){u(t,e)}))}))}})),Ot=ue((function(e,t){"use strict"
t.exports=2147483647})),Mt=ue((function(e,t){"use strict"
var n=ve(),r=Ot()
t.exports=function(e){if((e=n(e))>r)throw new TypeError(e+" exceeds maximum possible timeout")
return e}})),jt=ue((function(){"use strict"
var e=ut(),t=Ee(),n=Et(),r=Bt(),a=Mt(),o=Ce(),i=Function.prototype,u=Math.max,s=Math.min,l=Object.create
o.maxAge=function(c,d,p){var f,h,m,D;(c=a(c))&&(f=l(null),h=p.async&&o.async||p.promise&&o.promise?"async":"",d.on("set"+h,(function(e){f[e]=setTimeout((function(){d.delete(e)}),c),"function"==typeof f[e].unref&&f[e].unref(),D&&(D[e]&&"nextTick"!==D[e]&&clearTimeout(D[e]),D[e]=setTimeout((function(){delete D[e]}),m),"function"==typeof D[e].unref&&D[e].unref())})),d.on("delete"+h,(function(e){clearTimeout(f[e]),delete f[e],D&&("nextTick"!==D[e]&&clearTimeout(D[e]),delete D[e])})),p.preFetch&&(m=!0===p.preFetch||isNaN(p.preFetch)?.333:u(s(Number(p.preFetch),1),0))&&(D={},m=(1-m)*c,d.on("get"+h,(function(t,a,o){D[t]||(D[t]="nextTick",n((function(){var n
"nextTick"===D[t]&&(delete D[t],d.delete(t),p.async&&(a=e(a)).push(i),n=d.memoized.apply(o,a),p.promise&&r(n)&&("function"==typeof n.done?n.done(i,i):n.then(i,i)))})))}))),d.on("clear"+h,(function(){t(f,(function(e){clearTimeout(e)})),f={},D&&(t(D,(function(e){"nextTick"!==e&&clearTimeout(e)})),D={})})))}})),It=ue((function(e,t){"use strict"
var n=ve(),r=Object.create,a=Object.prototype.hasOwnProperty
t.exports=function(e){var t,o=0,i=1,u=r(null),s=r(null),l=0
return e=n(e),{hit:function(n){var r=s[n],c=++l
if(u[c]=n,s[n]=c,!r){if(++o<=e)return
return n=u[i],t(n),n}if(delete u[r],i===r)for(;!a.call(u,++i););},delete:t=function(e){var t=s[e]
if(t&&(delete u[t],delete s[e],--o,i===t)){if(!o)return l=0,void(i=1)
for(;!a.call(u,++i););}},clear:function(){o=0,i=1,u=r(null),s=r(null),l=0}}}})),Pt=ue((function(){"use strict"
var e=ve(),t=It(),n=Ce()
n.max=function(r,a,o){var i,u,s;(r=e(r))&&(u=t(r),i=o.async&&n.async||o.promise&&n.promise?"async":"",a.on("set"+i,s=function(e){void 0!==(e=u.hit(e))&&a.delete(e)}),a.on("get"+i,s),a.on("delete"+i,u.delete),a.on("clear"+i,u.clear))}})),qt=ue((function(){"use strict"
var e=$e(),t=Ce(),n=Object.create,r=Object.defineProperties
t.refCounter=function(a,o,i){var u,s
u=n(null),s=i.async&&t.async||i.promise&&t.promise?"async":"",o.on("set"+s,(function(e,t){u[e]=t||1})),o.on("get"+s,(function(e){++u[e]})),o.on("delete"+s,(function(e){delete u[e]})),o.on("clear"+s,(function(){u={}})),r(o.memoized,{deleteRef:e((function(){var e=o.get(arguments)
return null===e?null:u[e]?!--u[e]&&(o.delete(e),!0):null})),getRefCount:e((function(){var e=o.get(arguments)
return null===e?0:u[e]?u[e]:0}))})}})),Lt=ue((function(e,t){"use strict"
var n=fe(),r=ye(),a=pt()
t.exports=function(e){var t,o=n(arguments[1])
return o.normalizer||0!==(t=o.length=r(o.length,e.length,o.async))&&(o.primitive?!1===t?o.normalizer=ft():t>1&&(o.normalizer=ht()(t)):o.normalizer=!1===t?yt()():1===t?bt()():Ft()(t)),o.async&&Ct(),o.promise&&St(),o.dispose&&_t(),o.maxAge&&jt(),o.max&&Pt(),o.refCounter&&qt(),a(e,o)}})),Ht=ue((function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.isIdentStart=function(e){return e>="a"&&e<="z"||e>="A"&&e<="Z"||"-"===e||"_"===e},e.isIdent=function(e){return e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||"-"===e||"_"===e},e.isHex=function(e){return e>="a"&&e<="f"||e>="A"&&e<="F"||e>="0"&&e<="9"},e.escapeIdentifier=function(t){for(var n=t.length,r="",a=0;a<n;){var o=t.charAt(a)
if(e.identSpecialChars[o])r+="\\"+o
else if("_"===o||"-"===o||o>="A"&&o<="Z"||o>="a"&&o<="z"||0!==a&&o>="0"&&o<="9")r+=o
else{var i=o.charCodeAt(0)
if(55296==(63488&i)){var u=t.charCodeAt(a++)
if(55296!=(64512&i)||56320!=(64512&u))throw Error("UCS-2(decode): illegal sequence")
i=((1023&i)<<10)+(1023&u)+65536}r+="\\"+i.toString(16)+" "}a++}return r},e.escapeStr=function(t){for(var n,r=t.length,a="",o=0;o<r;){var i=t.charAt(o)
'"'===i?i='\\"':"\\"===i?i="\\\\":void 0!==(n=e.strReplacementsRev[i])&&(i=n),a+=i,o++}return'"'+a+'"'},e.identSpecialChars={"!":!0,'"':!0,"#":!0,$:!0,"%":!0,"&":!0,"'":!0,"(":!0,")":!0,"*":!0,"+":!0,",":!0,".":!0,"/":!0,";":!0,"<":!0,"=":!0,">":!0,"?":!0,"@":!0,"[":!0,"\\":!0,"]":!0,"^":!0,"`":!0,"{":!0,"|":!0,"}":!0,"~":!0},e.strReplacementsRev={"\n":"\\n","\r":"\\r","\t":"\\t","\f":"\\f","\v":"\\v"},e.singleQuoteEscapeChars={n:"\n",r:"\r",t:"\t",f:"\f","\\":"\\","'":"'"},e.doubleQuotesEscapeChars={n:"\n",r:"\r",t:"\t",f:"\f","\\":"\\",'"':'"'}})),zt=ue((function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
var t=Ht()
e.parseCssSelector=function(e,n,r,a,o,i){var u=e.length,s=""
function l(r,a){var o=""
for(n++,s=e.charAt(n);n<u;){if(s===r)return n++,o
if("\\"===s){n++
var i=void 0
if((s=e.charAt(n))===r)o+=r
else if(void 0!==(i=a[s]))o+=i
else{if(t.isHex(s)){var l=s
for(n++,s=e.charAt(n);t.isHex(s);)l+=s,n++,s=e.charAt(n)
" "===s&&(n++,s=e.charAt(n)),o+=String.fromCharCode(parseInt(l,16))
continue}o+=s}}else o+=s
n++,s=e.charAt(n)}return o}function c(){var r=""
for(s=e.charAt(n);n<u;){if(t.isIdent(s))r+=s
else{if("\\"!==s)return r
if(++n>=u)throw Error("Expected symbol but end of file reached.")
if(s=e.charAt(n),t.identSpecialChars[s])r+=s
else{if(t.isHex(s)){var a=s
for(n++,s=e.charAt(n);t.isHex(s);)a+=s,n++,s=e.charAt(n)
" "===s&&(n++,s=e.charAt(n)),r+=String.fromCharCode(parseInt(a,16))
continue}r+=s}}n++,s=e.charAt(n)}return r}function d(){s=e.charAt(n)
for(var t=!1;" "===s||"\t"===s||"\n"===s||"\r"===s||"\f"===s;)t=!0,n++,s=e.charAt(n)
return t}function p(){var t=f()
if(!t)return null
var r=t
for(s=e.charAt(n);","===s;){if(n++,d(),"selectors"!==r.type&&(r={type:"selectors",selectors:[t]}),!(t=f()))throw Error('Rule expected after ",".')
r.selectors.push(t)}return r}function f(){d()
var t={type:"ruleSet"},r=h()
if(!r)return null
for(var a=t;r&&(r.type="rule",a.rule=r,a=r,d(),s=e.charAt(n),!(n>=u||","===s||")"===s));)if(o[s]){var i=s
if(n++,d(),!(r=h()))throw Error('Rule expected after "'+i+'".')
r.nestingOperator=i}else(r=h())&&(r.nestingOperator=null)
return t}function h(){for(var o=null;n<u;)if("*"===(s=e.charAt(n)))n++,(o=o||{}).tagName="*"
else if(t.isIdentStart(s)||"\\"===s)(o=o||{}).tagName=c()
else if("."===s)n++,((o=o||{}).classNames=o.classNames||[]).push(c())
else if("#"===s)n++,(o=o||{}).id=c()
else if("["===s){n++,d()
var f={name:c()}
if(d(),"]"===s)n++
else{var h=""
if(a[s]&&(h=s,n++,s=e.charAt(n)),n>=u)throw Error('Expected "=" but end of file reached.')
if("="!==s)throw Error('Expected "=" but "'+s+'" found.')
f.operator=h+"=",n++,d()
var m=""
if(f.valueType="string",'"'===s)m=l('"',t.doubleQuotesEscapeChars)
else if("'"===s)m=l("'",t.singleQuoteEscapeChars)
else if(i&&"$"===s)n++,m=c(),f.valueType="substitute"
else{for(;n<u&&"]"!==s;)m+=s,n++,s=e.charAt(n)
m=m.trim()}if(d(),n>=u)throw Error('Expected "]" but end of file reached.')
if("]"!==s)throw Error('Expected "]" but "'+s+'" found.')
n++,f.value=m}((o=o||{}).attrs=o.attrs||[]).push(f)}else{if(":"!==s)break
n++
var D=c(),g={name:D}
if("("===s){n++
var v=""
if(d(),"selector"===r[D])g.valueType="selector",v=p()
else{if(g.valueType=r[D]||"string",'"'===s)v=l('"',t.doubleQuotesEscapeChars)
else if("'"===s)v=l("'",t.singleQuoteEscapeChars)
else if(i&&"$"===s)n++,v=c(),g.valueType="substitute"
else{for(;n<u&&")"!==s;)v+=s,n++,s=e.charAt(n)
v=v.trim()}d()}if(n>=u)throw Error('Expected ")" but end of file reached.')
if(")"!==s)throw Error('Expected ")" but "'+s+'" found.')
n++,g.value=v}((o=o||{}).pseudos=o.pseudos||[]).push(g)}return o}return function(){var t=p()
if(n<u)throw Error('Rule expected but "'+e.charAt(n)+'" found.')
return t}()}})),$t=ue((function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
var t=Ht()
e.renderEntity=function e(n){var r=""
switch(n.type){case"ruleSet":for(var a=n.rule,o=[];a;)a.nestingOperator&&o.push(a.nestingOperator),o.push(e(a)),a=a.rule
r=o.join(" ")
break
case"selectors":r=n.selectors.map(e).join(", ")
break
case"rule":n.tagName&&(r="*"===n.tagName?"*":t.escapeIdentifier(n.tagName)),n.id&&(r+="#"+t.escapeIdentifier(n.id)),n.classNames&&(r+=n.classNames.map((function(e){return"."+t.escapeIdentifier(e)})).join("")),n.attrs&&(r+=n.attrs.map((function(e){return"operator"in e?"substitute"===e.valueType?"["+t.escapeIdentifier(e.name)+e.operator+"$"+e.value+"]":"["+t.escapeIdentifier(e.name)+e.operator+t.escapeStr(e.value)+"]":"["+t.escapeIdentifier(e.name)+"]"})).join("")),n.pseudos&&(r+=n.pseudos.map((function(n){return n.valueType?"selector"===n.valueType?":"+t.escapeIdentifier(n.name)+"("+e(n.value)+")":"substitute"===n.valueType?":"+t.escapeIdentifier(n.name)+"($"+n.value+")":"numeric"===n.valueType?":"+t.escapeIdentifier(n.name)+"("+n.value+")":":"+t.escapeIdentifier(n.name)+"("+t.escapeIdentifier(n.value)+")":":"+t.escapeIdentifier(n.name)})).join(""))
break
default:throw Error('Unknown entity type: "'+n.type+'".')}return r}})),Vt=ue((function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
var t=zt(),n=$t(),r=function(){function e(){this.pseudos={},this.attrEqualityMods={},this.ruleNestingOperators={},this.substitutesEnabled=!1}return e.prototype.registerSelectorPseudos=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
for(var n=0,r=e;n<r.length;n++){var a=r[n]
this.pseudos[a]="selector"}return this},e.prototype.unregisterSelectorPseudos=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
for(var n=0,r=e;n<r.length;n++){var a=r[n]
delete this.pseudos[a]}return this},e.prototype.registerNumericPseudos=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
for(var n=0,r=e;n<r.length;n++){var a=r[n]
this.pseudos[a]="numeric"}return this},e.prototype.unregisterNumericPseudos=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
for(var n=0,r=e;n<r.length;n++){var a=r[n]
delete this.pseudos[a]}return this},e.prototype.registerNestingOperators=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
for(var n=0,r=e;n<r.length;n++){var a=r[n]
this.ruleNestingOperators[a]=!0}return this},e.prototype.unregisterNestingOperators=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
for(var n=0,r=e;n<r.length;n++){var a=r[n]
delete this.ruleNestingOperators[a]}return this},e.prototype.registerAttrEqualityMods=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
for(var n=0,r=e;n<r.length;n++){var a=r[n]
this.attrEqualityMods[a]=!0}return this},e.prototype.unregisterAttrEqualityMods=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
for(var n=0,r=e;n<r.length;n++){var a=r[n]
delete this.attrEqualityMods[a]}return this},e.prototype.enableSubstitutes=function(){return this.substitutesEnabled=!0,this},e.prototype.disableSubstitutes=function(){return this.substitutesEnabled=!1,this},e.prototype.parse=function(e){return t.parseCssSelector(e,0,this.pseudos,this.attrEqualityMods,this.ruleNestingOperators,this.substitutesEnabled)},e.prototype.render=function(e){return n.renderEntity(e).trim()},e}()
e.CssSelectorParser=r})),Ut=ue((function(e,t){var i,u
i=e,u=function(){"use strict"
function e(e){return"function"==typeof e}var t=Array.isArray?Array.isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)},i=0,u=void 0,s=void 0,l=function(e,t){D[i]=e,D[i+1]=t,2===(i+=2)&&(s?s(g):w())},c=void 0!==n?n:void 0,d=c||{},p=d.MutationObserver||d.WebKitMutationObserver,f="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),h="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel
function m(){var e=setTimeout
return function(){return e(g,1)}}var D=new Array(1e3)
function g(){for(var e=0;e<i;e+=2)(0,D[e])(D[e+1]),D[e]=void 0,D[e+1]=void 0
i=0}var v,y,b,F,w=void 0
function E(e,t){var n=this,r=new this.constructor(A)
void 0===r[x]&&I(r)
var a=n._state
if(a){var o=arguments[a-1]
l((function(){return M(a,r,o,n._result)}))}else _(n,r,e,t)
return r}function C(e){if(e&&"object"===o(e)&&e.constructor===this)return e
var t=new this(A)
return N(t,e),t}f?w=function(){return process.nextTick(g)}:p?(y=0,b=new p(g),F=a.createTextNode(""),b.observe(F,{characterData:!0}),w=function(){F.data=y=++y%2}):h?((v=new MessageChannel).port1.onmessage=g,w=function(){return v.port2.postMessage(0)}):w=void 0===c?function(){try{var e=Function("return this")().require("vertx")
return void 0!==(u=e.runOnLoop||e.runOnContext)?function(){u(g)}:m()}catch(e){return m()}}():m()
var x=Math.random().toString(36).substring(2)
function A(){}var k=void 0
function T(t,n,r){n.constructor===t.constructor&&r===E&&n.constructor.resolve===C?function(e,t){1===t._state?B(e,t._result):2===t._state?S(e,t._result):_(t,void 0,(function(t){return N(e,t)}),(function(t){return S(e,t)}))}(t,n):void 0===r?B(t,n):e(r)?function(e,t,n){l((function(e){var r=!1,a=function(n,a,o,i){try{n.call(a,(function(n){r||(r=!0,t!==n?N(e,n):B(e,n))}),(function(t){r||(r=!0,S(e,t))}))}catch(e){return e}}(n,t,0,0,e._label)
!r&&a&&(r=!0,S(e,a))}),e)}(t,n,r):B(t,n)}function N(e,t){if(e===t)S(e,new TypeError("You cannot resolve a promise with itself"))
else if(a=o(r=t),null===r||"object"!==a&&"function"!==a)B(e,t)
else{var n=void 0
try{n=t.then}catch(t){return void S(e,t)}T(e,t,n)}var r,a}function R(e){e._onerror&&e._onerror(e._result),O(e)}function B(e,t){e._state===k&&(e._result=t,e._state=1,0!==e._subscribers.length&&l(O,e))}function S(e,t){e._state===k&&(e._state=2,e._result=t,l(R,e))}function _(e,t,n,r){var a=e._subscribers,o=a.length
e._onerror=null,a[o]=t,a[o+1]=n,a[o+2]=r,0===o&&e._state&&l(O,e)}function O(e){var t=e._subscribers,n=e._state
if(0!==t.length){for(var r=void 0,a=void 0,o=e._result,i=0;i<t.length;i+=3)r=t[i],a=t[i+n],r?M(n,r,a,o):a(o)
e._subscribers.length=0}}function M(t,n,r,a){var o=e(r),i=void 0,u=void 0,s=!0
if(o){try{i=r(a)}catch(e){s=!1,u=e}if(n===i)return void S(n,new TypeError("A promises callback cannot return that same promise."))}else i=a
n._state!==k||(o&&s?N(n,i):!1===s?S(n,u):1===t?B(n,i):2===t&&S(n,i))}var j=0
function I(e){e[x]=j++,e._state=void 0,e._result=void 0,e._subscribers=[]}var P=function(){function e(e,n){this._instanceConstructor=e,this.promise=new e(A),this.promise[x]||I(this.promise),t(n)?(this.length=n.length,this._remaining=n.length,this._result=new Array(this.length),0===this.length?B(this.promise,this._result):(this.length=this.length||0,this._enumerate(n),0===this._remaining&&B(this.promise,this._result))):S(this.promise,new Error("Array Methods must be provided an Array"))}return e.prototype._enumerate=function(e){for(var t=0;this._state===k&&t<e.length;t++)this._eachEntry(e[t],t)},e.prototype._eachEntry=function(e,t){var n=this._instanceConstructor,r=n.resolve
if(r===C){var a=void 0,o=void 0,i=!1
try{a=e.then}catch(e){i=!0,o=e}if(a===E&&e._state!==k)this._settledAt(e._state,t,e._result)
else if("function"!=typeof a)this._remaining--,this._result[t]=e
else if(n===q){var u=new n(A)
i?S(u,o):T(u,e,a),this._willSettleAt(u,t)}else this._willSettleAt(new n((function(t){return t(e)})),t)}else this._willSettleAt(r(e),t)},e.prototype._settledAt=function(e,t,n){var r=this.promise
r._state===k&&(this._remaining--,2===e?S(r,n):this._result[t]=n),0===this._remaining&&B(r,this._result)},e.prototype._willSettleAt=function(e,t){var n=this
_(e,void 0,(function(e){return n._settledAt(1,t,e)}),(function(e){return n._settledAt(2,t,e)}))},e}(),q=function(){function t(e){this[x]=j++,this._result=this._state=void 0,this._subscribers=[],A!==e&&("function"!=typeof e&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof t?function(e,t){try{t((function(t){N(e,t)}),(function(t){S(e,t)}))}catch(t){S(e,t)}}(this,e):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return t.prototype.catch=function(e){return this.then(null,e)},t.prototype.finally=function(t){var n=this,r=n.constructor
return e(t)?n.then((function(e){return r.resolve(t()).then((function(){return e}))}),(function(e){return r.resolve(t()).then((function(){throw e}))})):n.then(t,t)},t}()
return q.prototype.then=E,q.all=function(e){return new P(this,e).promise},q.race=function(e){var n=this
return t(e)?new n((function(t,r){for(var a=e.length,o=0;o<a;o++)n.resolve(e[o]).then(t,r)})):new n((function(e,t){return t(new TypeError("You must pass an array to race."))}))},q.resolve=C,q.reject=function(e){var t=new this(A)
return S(t,e),t},q._setScheduler=function(e){s=e},q._setAsap=function(e){l=e},q._asap=l,q.polyfill=function(){var e=void 0
if(void 0!==r)e=r
else if("undefined"!=typeof self)e=self
else try{e=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var t=e.Promise
if(t){var n=null
try{n=Object.prototype.toString.call(t.resolve())}catch(e){}if("[object Promise]"===n&&!t.cast)return}e.Promise=q},q.Promise=q,q},"object"===o(e)&&void 0!==t?t.exports=u():"function"==typeof define&&define.amd?define(u):i.ES6Promise=u()})),Wt=ue((function(e){var t,n,r=(t=Object.prototype.toString,n=Object.prototype.hasOwnProperty,{Class:function(e){return t.call(e).replace(/^\[object *|\]$/g,"")},HasProperty:function(e,t){return t in e},HasOwnProperty:function(e,t){return n.call(e,t)},IsCallable:function(e){return"function"==typeof e},ToInt32:function(e){return 0|e},ToUint32:function(e){return e>>>0}}),a=Math.LN2,i=Math.abs,u=Math.floor,s=Math.log,l=Math.min,c=Math.pow,d=Math.round
function p(e,t,n){return e<t?t:e>n?n:e}var f,h=Object.getOwnPropertyNames||function(e){if(e!==Object(e))throw new TypeError("Object.getOwnPropertyNames called on non-object")
var t,n=[]
for(t in e)r.HasOwnProperty(e,t)&&n.push(t)
return n}
function m(e){if(h&&f){var t,n=h(e)
for(t=0;t<n.length;t+=1)f(e,n[t],{value:e[n[t]],writable:!1,enumerable:!1,configurable:!1})}}function D(e,t){var n=32-t
return e<<n>>n}function g(e,t){var n=32-t
return e<<n>>>n}function v(e){return[255&e]}function y(e){return D(e[0],8)}function b(e){return[255&e]}function F(e){return g(e[0],8)}function w(e){return[(e=d(Number(e)))<0?0:e>255?255:255&e]}function E(e){return[e>>8&255,255&e]}function C(e){return D(e[0]<<8|e[1],16)}function x(e){return[e>>8&255,255&e]}function A(e){return g(e[0]<<8|e[1],16)}function k(e){return[e>>24&255,e>>16&255,e>>8&255,255&e]}function T(e){return D(e[0]<<24|e[1]<<16|e[2]<<8|e[3],32)}function N(e){return[e>>24&255,e>>16&255,e>>8&255,255&e]}function R(e){return g(e[0]<<24|e[1]<<16|e[2]<<8|e[3],32)}function B(e,t,n){var r,o,d,p,f,h,m,D=(1<<t-1)-1
function g(e){var t=u(e),n=e-t
return n<.5?t:n>.5||t%2?t+1:t}for(e!=e?(o=(1<<t)-1,d=c(2,n-1),r=0):e===1/0||e===-1/0?(o=(1<<t)-1,d=0,r=e<0?1:0):0===e?(o=0,d=0,r=1/e==-1/0?1:0):(r=e<0,(e=i(e))>=c(2,1-D)?(o=l(u(s(e)/a),1023),(d=g(e/c(2,o)*c(2,n)))/c(2,n)>=2&&(o+=1,d=1),o>D?(o=(1<<t)-1,d=0):(o+=D,d-=c(2,n))):(o=0,d=g(e/c(2,1-D-n)))),f=[],p=n;p;p-=1)f.push(d%2?1:0),d=u(d/2)
for(p=t;p;p-=1)f.push(o%2?1:0),o=u(o/2)
for(f.push(r?1:0),f.reverse(),h=f.join(""),m=[];h.length;)m.push(parseInt(h.substring(0,8),2)),h=h.substring(8)
return m}function S(e,t,n){var r,a,o,i,u,s,l,d,p=[]
for(r=e.length;r;r-=1)for(o=e[r-1],a=8;a;a-=1)p.push(o%2?1:0),o>>=1
return p.reverse(),i=p.join(""),u=(1<<t-1)-1,s=parseInt(i.substring(0,1),2)?-1:1,l=parseInt(i.substring(1,1+t),2),d=parseInt(i.substring(1+t),2),l===(1<<t)-1?0===d?s*(1/0):NaN:l>0?s*c(2,l-u)*(1+d/c(2,n)):0!==d?s*c(2,-(u-1))*(d/c(2,n)):s<0?-0:0}function _(e){return S(e,11,52)}function O(e){return B(e,11,52)}function M(e){return S(e,8,23)}function j(e){return B(e,8,23)}f=Object.defineProperty&&function(){try{return Object.defineProperty({},"x",{}),!0}catch(e){return!1}}()?Object.defineProperty:function(e,t,n){if(!e===Object(e))throw new TypeError("Object.defineProperty called on non-object")
return r.HasProperty(n,"get")&&Object.prototype.__defineGetter__&&Object.prototype.__defineGetter__.call(e,t,n.get),r.HasProperty(n,"set")&&Object.prototype.__defineSetter__&&Object.prototype.__defineSetter__.call(e,t,n.set),r.HasProperty(n,"value")&&(e[t]=n.value),e},function(){function t(e){if((e=r.ToInt32(e))<0)throw new RangeError("ArrayBuffer size is not a small enough positive integer")
var t
for(this.byteLength=e,this._bytes=[],this._bytes.length=e,t=0;t<this.byteLength;t+=1)this._bytes[t]=0
m(this)}function n(){}function a(e,a,i){var u
return u=function(e,n,a){var i,s,l,c
if(arguments.length&&"number"!=typeof arguments[0])if("object"===o(arguments[0])&&arguments[0].constructor===u)for(i=arguments[0],this.length=i.length,this.byteLength=this.length*this.BYTES_PER_ELEMENT,this.buffer=new t(this.byteLength),this.byteOffset=0,l=0;l<this.length;l+=1)this._setter(l,i._getter(l))
else if("object"!==o(arguments[0])||arguments[0]instanceof t||"ArrayBuffer"===r.Class(arguments[0])){if("object"!==o(arguments[0])||!(arguments[0]instanceof t||"ArrayBuffer"===r.Class(arguments[0])))throw new TypeError("Unexpected argument type(s)")
if(this.buffer=e,this.byteOffset=r.ToUint32(n),this.byteOffset>this.buffer.byteLength)throw new RangeError("byteOffset out of range")
if(this.byteOffset%this.BYTES_PER_ELEMENT)throw new RangeError("ArrayBuffer length minus the byteOffset is not a multiple of the element size.")
if(arguments.length<3){if(this.byteLength=this.buffer.byteLength-this.byteOffset,this.byteLength%this.BYTES_PER_ELEMENT)throw new RangeError("length of buffer minus byteOffset not a multiple of the element size")
this.length=this.byteLength/this.BYTES_PER_ELEMENT}else this.length=r.ToUint32(a),this.byteLength=this.length*this.BYTES_PER_ELEMENT
if(this.byteOffset+this.byteLength>this.buffer.byteLength)throw new RangeError("byteOffset and length reference an area beyond the end of the buffer")}else for(s=arguments[0],this.length=r.ToUint32(s.length),this.byteLength=this.length*this.BYTES_PER_ELEMENT,this.buffer=new t(this.byteLength),this.byteOffset=0,l=0;l<this.length;l+=1)c=s[l],this._setter(l,Number(c))
else{if(this.length=r.ToInt32(arguments[0]),a<0)throw new RangeError("ArrayBufferView size is not a small enough positive integer")
this.byteLength=this.length*this.BYTES_PER_ELEMENT,this.buffer=new t(this.byteLength),this.byteOffset=0}this.constructor=u,m(this),function(e){if(f){if(e.length>1e5)throw new RangeError("Array too large for polyfill")
var t
for(t=0;t<e.length;t+=1)n(t)}function n(t){f(e,t,{get:function(){return e._getter(t)},set:function(n){e._setter(t,n)},enumerable:!0,configurable:!1})}}(this)},u.prototype=new n,u.prototype.BYTES_PER_ELEMENT=e,u.prototype._pack=a,u.prototype._unpack=i,u.BYTES_PER_ELEMENT=e,u.prototype._getter=function(e){if(arguments.length<1)throw new SyntaxError("Not enough arguments")
if(!((e=r.ToUint32(e))>=this.length)){for(var t=[],n=0,a=this.byteOffset+e*this.BYTES_PER_ELEMENT;n<this.BYTES_PER_ELEMENT;n+=1,a+=1)t.push(this.buffer._bytes[a])
return this._unpack(t)}},u.prototype.get=u.prototype._getter,u.prototype._setter=function(e,t){if(arguments.length<2)throw new SyntaxError("Not enough arguments")
if((e=r.ToUint32(e))<this.length){var n,a,o=this._pack(t)
for(n=0,a=this.byteOffset+e*this.BYTES_PER_ELEMENT;n<this.BYTES_PER_ELEMENT;n+=1,a+=1)this.buffer._bytes[a]=o[n]}},u.prototype.set=function(e,t){if(arguments.length<1)throw new SyntaxError("Not enough arguments")
var n,a,i,u,s,l,c,d,p,f
if("object"===o(arguments[0])&&arguments[0].constructor===this.constructor){if(n=arguments[0],(i=r.ToUint32(arguments[1]))+n.length>this.length)throw new RangeError("Offset plus length of array is out of range")
if(d=this.byteOffset+i*this.BYTES_PER_ELEMENT,p=n.length*this.BYTES_PER_ELEMENT,n.buffer===this.buffer){for(f=[],s=0,l=n.byteOffset;s<p;s+=1,l+=1)f[s]=n.buffer._bytes[l]
for(s=0,c=d;s<p;s+=1,c+=1)this.buffer._bytes[c]=f[s]}else for(s=0,l=n.byteOffset,c=d;s<p;s+=1,l+=1,c+=1)this.buffer._bytes[c]=n.buffer._bytes[l]}else{if("object"!==o(arguments[0])||void 0===arguments[0].length)throw new TypeError("Unexpected argument type(s)")
if(a=arguments[0],u=r.ToUint32(a.length),(i=r.ToUint32(arguments[1]))+u>this.length)throw new RangeError("Offset plus length of array is out of range")
for(s=0;s<u;s+=1)l=a[s],this._setter(i+s,Number(l))}},u.prototype.subarray=function(e,t){e=r.ToInt32(e),t=r.ToInt32(t),arguments.length<1&&(e=0),arguments.length<2&&(t=this.length),e<0&&(e=this.length+e),t<0&&(t=this.length+t),e=p(e,0,this.length)
var n=(t=p(t,0,this.length))-e
return n<0&&(n=0),new this.constructor(this.buffer,this.byteOffset+e*this.BYTES_PER_ELEMENT,n)},u}e.ArrayBuffer=e.ArrayBuffer||t
var i=a(1,v,y),u=a(1,b,F),s=a(1,w,F),l=a(2,E,C),c=a(2,x,A),d=a(4,k,T),h=a(4,N,R),D=a(4,j,M),g=a(8,O,_)
e.Int8Array=e.Int8Array||i,e.Uint8Array=e.Uint8Array||u,e.Uint8ClampedArray=e.Uint8ClampedArray||s,e.Int16Array=e.Int16Array||l,e.Uint16Array=e.Uint16Array||c,e.Int32Array=e.Int32Array||d,e.Uint32Array=e.Uint32Array||h,e.Float32Array=e.Float32Array||D,e.Float64Array=e.Float64Array||g}(),function(){function t(e,t){return r.IsCallable(e.get)?e.get(t):e[t]}var n,a=(n=new e.Uint16Array([4660]),18===t(new e.Uint8Array(n.buffer),0))
function o(t,n,a){if(0===arguments.length)t=new e.ArrayBuffer(0)
else if(!(t instanceof e.ArrayBuffer||"ArrayBuffer"===r.Class(t)))throw new TypeError("TypeError")
if(this.buffer=t||new e.ArrayBuffer(0),this.byteOffset=r.ToUint32(n),this.byteOffset>this.buffer.byteLength)throw new RangeError("byteOffset out of range")
if(this.byteLength=arguments.length<3?this.buffer.byteLength-this.byteOffset:r.ToUint32(a),this.byteOffset+this.byteLength>this.buffer.byteLength)throw new RangeError("byteOffset and length reference an area beyond the end of the buffer")
m(this)}function i(n){return function(o,i){if((o=r.ToUint32(o))+n.BYTES_PER_ELEMENT>this.byteLength)throw new RangeError("Array index out of range")
o+=this.byteOffset
var u,s=new e.Uint8Array(this.buffer,o,n.BYTES_PER_ELEMENT),l=[]
for(u=0;u<n.BYTES_PER_ELEMENT;u+=1)l.push(t(s,u))
return Boolean(i)===Boolean(a)&&l.reverse(),t(new n(new e.Uint8Array(l).buffer),0)}}function u(n){return function(o,i,u){if((o=r.ToUint32(o))+n.BYTES_PER_ELEMENT>this.byteLength)throw new RangeError("Array index out of range")
var s,l=new n([i]),c=new e.Uint8Array(l.buffer),d=[]
for(s=0;s<n.BYTES_PER_ELEMENT;s+=1)d.push(t(c,s))
Boolean(u)===Boolean(a)&&d.reverse(),new e.Uint8Array(this.buffer,o,n.BYTES_PER_ELEMENT).set(d)}}o.prototype.getUint8=i(e.Uint8Array),o.prototype.getInt8=i(e.Int8Array),o.prototype.getUint16=i(e.Uint16Array),o.prototype.getInt16=i(e.Int16Array),o.prototype.getUint32=i(e.Uint32Array),o.prototype.getInt32=i(e.Int32Array),o.prototype.getFloat32=i(e.Float32Array),o.prototype.getFloat64=i(e.Float64Array),o.prototype.setUint8=u(e.Uint8Array),o.prototype.setInt8=u(e.Int8Array),o.prototype.setUint16=u(e.Uint16Array),o.prototype.setInt16=u(e.Int16Array),o.prototype.setUint32=u(e.Uint32Array),o.prototype.setInt32=u(e.Int32Array),o.prototype.setFloat32=u(e.Float32Array),o.prototype.setFloat64=u(e.Float64Array),e.DataView=e.DataView||o}()})),Gt=ue((function(e){!function(e){"use strict"
if(!e.WeakMap){var t=Object.prototype.hasOwnProperty,n=Object.defineProperty&&function(){try{return 1===Object.defineProperty({},"x",{value:1}).x}catch(e){}}(),r=function(e,t,r){n?Object.defineProperty(e,t,{configurable:!0,writable:!0,value:r}):e[t]=r}
e.WeakMap=function(){function e(){if(void 0===this)throw new TypeError("Constructor WeakMap requires 'new'")
if(r(this,"_id","_WeakMap_"+i()+"."+i()),arguments.length>0)throw new TypeError("WeakMap iterable is not supported")}function n(e,n){if(!a(e)||!t.call(e,"_id"))throw new TypeError(n+" method called on incompatible receiver "+o(e))}function i(){return Math.random().toString().substring(2)}return r(e.prototype,"delete",(function(e){if(n(this,"delete"),!a(e))return!1
var t=e[this._id]
return!(!t||t[0]!==e||(delete e[this._id],0))})),r(e.prototype,"get",(function(e){if(n(this,"get"),a(e)){var t=e[this._id]
return t&&t[0]===e?t[1]:void 0}})),r(e.prototype,"has",(function(e){if(n(this,"has"),!a(e))return!1
var t=e[this._id]
return!(!t||t[0]!==e)})),r(e.prototype,"set",(function(e,t){if(n(this,"set"),!a(e))throw new TypeError("Invalid value used as weak map key")
var o=e[this._id]
return o&&o[0]===e?(o[1]=t,this):(r(e,this._id,[e,t]),this)})),r(e,"_polyfill",!0),e}()}function a(e){return Object(e)===e}}("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:void 0!==n?n:void 0!==r?r:e)})),Kt=ue((function(e,t){"use strict"
var a=function(e){return e&&e.Math===Math&&e}
t.exports=a("object"==("undefined"==typeof globalThis?"undefined":o(globalThis))&&globalThis)||a("object"==(void 0===n?"undefined":o(n))&&n)||a("object"==("undefined"==typeof self?"undefined":o(self))&&self)||a("object"==(void 0===r?"undefined":o(r))&&r)||function(){return this}()||e||Function("return this")()})),Yt=ue((function(e,t){"use strict"
t.exports=function(e){try{return!!e()}catch(e){return!0}}})),Qt=ue((function(e,t){"use strict"
var n=Yt()
t.exports=!n((function(){var e=function(){}.bind()
return"function"!=typeof e||e.hasOwnProperty("prototype")}))})),Xt=ue((function(e,t){"use strict"
var n=Qt(),r=Function.prototype,a=r.apply,i=r.call
t.exports="object"==("undefined"==typeof Reflect?"undefined":o(Reflect))&&Reflect.apply||(n?i.bind(a):function(){return i.apply(a,arguments)})})),Zt=ue((function(e,t){"use strict"
var n=Qt(),r=Function.prototype,a=r.call,o=n&&r.bind.bind(a,a)
t.exports=n?o:function(e){return function(){return a.apply(e,arguments)}}})),Jt=ue((function(e,t){"use strict"
var n=Zt(),r=n({}.toString),a=n("".slice)
t.exports=function(e){return a(r(e),8,-1)}})),en=ue((function(e,t){"use strict"
var n=Jt(),r=Zt()
t.exports=function(e){if("Function"===n(e))return r(e)}})),tn=ue((function(e,t){"use strict"
var n="object"==(void 0===a?"undefined":o(a))&&a.all,r=void 0===n&&void 0!==n
t.exports={all:n,IS_HTMLDDA:r}})),nn=ue((function(e,t){"use strict"
var n=tn(),r=n.all
t.exports=n.IS_HTMLDDA?function(e){return"function"==typeof e||e===r}:function(e){return"function"==typeof e}})),rn=ue((function(e,t){"use strict"
var n=Yt()
t.exports=!n((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}))})),an=ue((function(e,t){"use strict"
var n=Qt(),r=Function.prototype.call
t.exports=n?r.bind(r):function(){return r.apply(r,arguments)}})),on=ue((function(e){"use strict"
var t={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,r=n&&!t.call({1:2},1)
e.f=r?function(e){var t=n(this,e)
return!!t&&t.enumerable}:t})),un=ue((function(e,t){"use strict"
t.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}})),sn=ue((function(e,t){"use strict"
var n=Zt(),r=Yt(),a=Jt(),o=Object,i=n("".split)
t.exports=r((function(){return!o("z").propertyIsEnumerable(0)}))?function(e){return"String"===a(e)?i(e,""):o(e)}:o})),ln=ue((function(e,t){"use strict"
t.exports=function(e){return null==e}})),cn=ue((function(e,t){"use strict"
var n=ln(),r=TypeError
t.exports=function(e){if(n(e))throw new r("Can't call method on "+e)
return e}})),dn=ue((function(e,t){"use strict"
var n=sn(),r=cn()
t.exports=function(e){return n(r(e))}})),pn=ue((function(e,t){"use strict"
var n=nn(),r=tn(),a=r.all
t.exports=r.IS_HTMLDDA?function(e){return"object"==o(e)?null!==e:n(e)||e===a}:function(e){return"object"==o(e)?null!==e:n(e)}})),fn=ue((function(e,t){"use strict"
t.exports={}})),hn=ue((function(e,t){"use strict"
var n=fn(),r=Kt(),a=nn(),o=function(e){return a(e)?e:void 0}
t.exports=function(e,t){return arguments.length<2?o(n[e])||o(r[e]):n[e]&&n[e][t]||r[e]&&r[e][t]}})),mn=ue((function(e,t){"use strict"
var n=Zt()
t.exports=n({}.isPrototypeOf)})),Dn=ue((function(e,t){"use strict"
t.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""})),gn=ue((function(e,t){"use strict"
var n,r,a=Kt(),o=Dn(),i=a.process,u=a.Deno,s=i&&i.versions||u&&u.version,l=s&&s.v8
l&&(r=(n=l.split("."))[0]>0&&n[0]<4?1:+(n[0]+n[1])),!r&&o&&(!(n=o.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=o.match(/Chrome\/(\d+)/))&&(r=+n[1]),t.exports=r})),vn=ue((function(e,t){"use strict"
var n=gn(),r=Yt(),a=Kt().String
t.exports=!!Object.getOwnPropertySymbols&&!r((function(){var e=Symbol("symbol detection")
return!a(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&n&&n<41}))})),yn=ue((function(e,t){"use strict"
var n=vn()
t.exports=n&&!Symbol.sham&&"symbol"==o(Symbol.iterator)})),bn=ue((function(e,t){"use strict"
var n=hn(),r=nn(),a=mn(),i=yn(),u=Object
t.exports=i?function(e){return"symbol"==o(e)}:function(e){var t=n("Symbol")
return r(t)&&a(t.prototype,u(e))}})),Fn=ue((function(e,t){"use strict"
var n=String
t.exports=function(e){try{return n(e)}catch(e){return"Object"}}})),wn=ue((function(e,t){"use strict"
var n=nn(),r=Fn(),a=TypeError
t.exports=function(e){if(n(e))return e
throw new a(r(e)+" is not a function")}})),En=ue((function(e,t){"use strict"
var n=wn(),r=ln()
t.exports=function(e,t){var a=e[t]
return r(a)?void 0:n(a)}})),Cn=ue((function(e,t){"use strict"
var n=an(),r=nn(),a=pn(),o=TypeError
t.exports=function(e,t){var i,u
if("string"===t&&r(i=e.toString)&&!a(u=n(i,e)))return u
if(r(i=e.valueOf)&&!a(u=n(i,e)))return u
if("string"!==t&&r(i=e.toString)&&!a(u=n(i,e)))return u
throw new o("Can't convert object to primitive value")}})),xn=ue((function(e,t){"use strict"
t.exports=!0})),An=ue((function(e,t){"use strict"
var n=Kt(),r=Object.defineProperty
t.exports=function(e,t){try{r(n,e,{value:t,configurable:!0,writable:!0})}catch(r){n[e]=t}return t}})),kn=ue((function(e,t){"use strict"
var n=Kt(),r=An(),a="__core-js_shared__",o=n[a]||r(a,{})
t.exports=o})),Tn=ue((function(e,t){"use strict"
var n=xn(),r=kn();(t.exports=function(e,t){return r[e]||(r[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.33.0",mode:n?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.33.0/LICENSE",source:"https://github.com/zloirock/core-js"})})),Nn=ue((function(e,t){"use strict"
var n=cn(),r=Object
t.exports=function(e){return r(n(e))}})),Rn=ue((function(e,t){"use strict"
var n=Zt(),r=Nn(),a=n({}.hasOwnProperty)
t.exports=Object.hasOwn||function(e,t){return a(r(e),t)}})),Bn=ue((function(e,t){"use strict"
var n=Zt(),r=0,a=Math.random(),o=n(1..toString)
t.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+o(++r+a,36)}})),Sn=ue((function(e,t){"use strict"
var n=Kt(),r=Tn(),a=Rn(),o=Bn(),i=vn(),u=yn(),s=n.Symbol,l=r("wks"),c=u?s.for||s:s&&s.withoutSetter||o
t.exports=function(e){return a(l,e)||(l[e]=i&&a(s,e)?s[e]:c("Symbol."+e)),l[e]}})),_n=ue((function(e,t){"use strict"
var n=an(),r=pn(),a=bn(),o=En(),i=Cn(),u=Sn(),s=TypeError,l=u("toPrimitive")
t.exports=function(e,t){if(!r(e)||a(e))return e
var u,c=o(e,l)
if(c){if(void 0===t&&(t="default"),u=n(c,e,t),!r(u)||a(u))return u
throw new s("Can't convert object to primitive value")}return void 0===t&&(t="number"),i(e,t)}})),On=ue((function(e,t){"use strict"
var n=_n(),r=bn()
t.exports=function(e){var t=n(e,"string")
return r(t)?t:t+""}})),Mn=ue((function(e,t){"use strict"
var n=Kt(),r=pn(),a=n.document,o=r(a)&&r(a.createElement)
t.exports=function(e){return o?a.createElement(e):{}}})),jn=ue((function(e,t){"use strict"
var n=rn(),r=Yt(),a=Mn()
t.exports=!n&&!r((function(){return 7!==Object.defineProperty(a("div"),"a",{get:function(){return 7}}).a}))})),In=ue((function(e){"use strict"
var t=rn(),n=an(),r=on(),a=un(),o=dn(),i=On(),u=Rn(),s=jn(),l=Object.getOwnPropertyDescriptor
e.f=t?l:function(e,t){if(e=o(e),t=i(t),s)try{return l(e,t)}catch(e){}if(u(e,t))return a(!n(r.f,e,t),e[t])}})),Pn=ue((function(e,t){"use strict"
var n=Yt(),r=nn(),a=/#|\.prototype\./,o=function(e,t){var a=u[i(e)]
return a===l||a!==s&&(r(t)?n(t):!!t)},i=o.normalize=function(e){return String(e).replace(a,".").toLowerCase()},u=o.data={},s=o.NATIVE="N",l=o.POLYFILL="P"
t.exports=o})),qn=ue((function(e,t){"use strict"
var n=en(),r=wn(),a=Qt(),o=n(n.bind)
t.exports=function(e,t){return r(e),void 0===t?e:a?o(e,t):function(){return e.apply(t,arguments)}}})),Ln=ue((function(e,t){"use strict"
var n=rn(),r=Yt()
t.exports=n&&r((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))})),Hn=ue((function(e,t){"use strict"
var n=pn(),r=String,a=TypeError
t.exports=function(e){if(n(e))return e
throw new a(r(e)+" is not an object")}})),zn=ue((function(e){"use strict"
var t=rn(),n=jn(),r=Ln(),a=Hn(),o=On(),i=TypeError,u=Object.defineProperty,s=Object.getOwnPropertyDescriptor,l="enumerable",c="configurable",d="writable"
e.f=t?r?function(e,t,n){if(a(e),t=o(t),a(n),"function"==typeof e&&"prototype"===t&&"value"in n&&d in n&&!n[d]){var r=s(e,t)
r&&r[d]&&(e[t]=n.value,n={configurable:c in n?n[c]:r[c],enumerable:l in n?n[l]:r[l],writable:!1})}return u(e,t,n)}:u:function(e,t,r){if(a(e),t=o(t),a(r),n)try{return u(e,t,r)}catch(e){}if("get"in r||"set"in r)throw new i("Accessors not supported")
return"value"in r&&(e[t]=r.value),e}})),$n=ue((function(e,t){"use strict"
var n=rn(),r=zn(),a=un()
t.exports=n?function(e,t,n){return r.f(e,t,a(1,n))}:function(e,t,n){return e[t]=n,e}})),Vn=ue((function(e,t){"use strict"
var n=Kt(),r=Xt(),a=en(),i=nn(),u=In().f,s=Pn(),l=fn(),c=qn(),d=$n(),p=Rn(),f=function(e){var t=function t(n,a,o){if(this instanceof t){switch(arguments.length){case 0:return new e
case 1:return new e(n)
case 2:return new e(n,a)}return new e(n,a,o)}return r(e,this,arguments)}
return t.prototype=e.prototype,t}
t.exports=function(e,t){var r,h,m,D,g,v,y,b,F,w=e.target,E=e.global,C=e.stat,x=e.proto,A=E?n:C?n[w]:(n[w]||{}).prototype,k=E?l:l[w]||d(l,w,{})[w],T=k.prototype
for(D in t)h=!(r=s(E?D:w+(C?".":"#")+D,e.forced))&&A&&p(A,D),v=k[D],h&&(y=e.dontCallGetSet?(F=u(A,D))&&F.value:A[D]),g=h&&y?y:t[D],h&&o(v)==o(g)||(b=e.bind&&h?c(g,n):e.wrap&&h?f(g):x&&i(g)?a(g):g,(e.sham||g&&g.sham||v&&v.sham)&&d(b,"sham",!0),d(k,D,b),x&&(p(l,m=w+"Prototype")||d(l,m,{}),d(l[m],D,g),e.real&&T&&(r||!T[D])&&d(T,D,g)))}})),Un=ue((function(){"use strict"
Vn()({target:"Object",stat:!0},{hasOwn:Rn()})})),Wn=ue((function(e,t){"use strict"
Un()
var n=fn()
t.exports=n.Object.hasOwn})),Gn=ue((function(e,t){"use strict"
var n=Wn()
t.exports=n})),Kn=ue((function(e,t){"use strict"
var n=Gn()
t.exports=n})),Yn=ue((function(e,t){"use strict"
var n=Tn(),r=Bn(),a=n("keys")
t.exports=function(e){return a[e]||(a[e]=r(e))}})),Qn=ue((function(e,t){"use strict"
var n=Yt()
t.exports=!n((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))})),Xn=ue((function(e,t){"use strict"
var n=Rn(),r=nn(),a=Nn(),o=Yn(),i=Qn(),u=o("IE_PROTO"),s=Object,l=s.prototype
t.exports=i?s.getPrototypeOf:function(e){var t=a(e)
if(n(t,u))return t[u]
var o=t.constructor
return r(o)&&t instanceof o?o.prototype:t instanceof s?l:null}})),Zn=ue((function(e,t){"use strict"
var n=Math.ceil,r=Math.floor
t.exports=Math.trunc||function(e){var t=+e
return(t>0?r:n)(t)}})),Jn=ue((function(e,t){"use strict"
var n=Zn()
t.exports=function(e){var t=+e
return t!=t||0===t?0:n(t)}})),er=ue((function(e,t){"use strict"
var n=Jn(),r=Math.max,a=Math.min
t.exports=function(e,t){var o=n(e)
return o<0?r(o+t,0):a(o,t)}})),tr=ue((function(e,t){"use strict"
var n=Jn(),r=Math.min
t.exports=function(e){return e>0?r(n(e),9007199254740991):0}})),nr=ue((function(e,t){"use strict"
var n=tr()
t.exports=function(e){return n(e.length)}})),rr=ue((function(e,t){"use strict"
var n=dn(),r=er(),a=nr(),o=function(e){return function(t,o,i){var u,s=n(t),l=a(s),c=r(i,l)
if(e&&o!=o){for(;l>c;)if((u=s[c++])!=u)return!0}else for(;l>c;c++)if((e||c in s)&&s[c]===o)return e||c||0
return!e&&-1}}
t.exports={includes:o(!0),indexOf:o(!1)}})),ar=ue((function(e,t){"use strict"
t.exports={}})),or=ue((function(e,t){"use strict"
var n=Zt(),r=Rn(),a=dn(),o=rr().indexOf,i=ar(),u=n([].push)
t.exports=function(e,t){var n,s=a(e),l=0,c=[]
for(n in s)!r(i,n)&&r(s,n)&&u(c,n)
for(;t.length>l;)r(s,n=t[l++])&&(~o(c,n)||u(c,n))
return c}})),ir=ue((function(e,t){"use strict"
t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]})),ur=ue((function(e,t){"use strict"
var n=or(),r=ir()
t.exports=Object.keys||function(e){return n(e,r)}})),sr=ue((function(e,t){"use strict"
var n=rn(),r=Yt(),a=Zt(),o=Xn(),i=ur(),u=dn(),s=a(on().f),l=a([].push),c=n&&r((function(){var e=Object.create(null)
return e[2]=2,!s(e,2)})),d=function(e){return function(t){for(var r,a=u(t),d=i(a),p=c&&null===o(a),f=d.length,h=0,m=[];f>h;)r=d[h++],n&&!(p?r in a:s(a,r))||l(m,e?[r,a[r]]:a[r])
return m}}
t.exports={entries:d(!0),values:d(!1)}})),lr=ue((function(){"use strict"
var e=Vn(),t=sr().values
e({target:"Object",stat:!0},{values:function(e){return t(e)}})})),cr=ue((function(e,t){"use strict"
lr()
var n=fn()
t.exports=n.Object.values})),dr=ue((function(e,t){"use strict"
var n=cr()
t.exports=n})),pr=ue((function(e,t){"use strict"
var n=dr()
t.exports=n})),fr=ue((function(e,t){!function(){"use strict"
var e={name:"doT",version:"1.1.1",templateSettings:{evaluate:/\{\{([\s\S]+?(\}?)+)\}\}/g,interpolate:/\{\{=([\s\S]+?)\}\}/g,encode:/\{\{!([\s\S]+?)\}\}/g,use:/\{\{#([\s\S]+?)\}\}/g,useParams:/(^|[^\w$])def(?:\.|\[[\'\"])([\w$\.]+)(?:[\'\"]\])?\s*\:\s*([\w$\.]+|\"[^\"]+\"|\'[^\']+\'|\{[^\}]+\})/g,define:/\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,defineParams:/^\s*([\w$]+):([\s\S]+)/,conditional:/\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,iterate:/\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,varname:"it",strip:!0,append:!0,selfcontained:!1,doNotSkipEncoded:!1},template:void 0,compile:void 0,log:!0}
!function(){if("object"!==("undefined"==typeof globalThis?"undefined":o(globalThis)))try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch(e){n.globalThis=function(){if("undefined"!=typeof self)return self
if(void 0!==n)return n
if(void 0!==r)return r
if(void 0!==this)return this
throw new Error("Unable to locate global `this`")}()}}(),e.encodeHTMLSource=function(e){var t={"&":"&#38;","<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","/":"&#47;"},n=e?/[&<>"'\/]/g:/&(?!#?\w+;)|<|>|"|'|\//g
return function(e){return e?e.toString().replace(n,(function(e){return t[e]||e})):""}},void 0!==t&&t.exports?t.exports=e:"function"==typeof define&&define.amd?define((function(){return e})):globalThis.doT=e
var a={append:{start:"'+(",end:")+'",startencode:"'+encodeHTML("},split:{start:"';out+=(",end:");out+='",startencode:"';out+=encodeHTML("}},i=/$^/
function u(e,t,n){return("string"==typeof t?t:t.toString()).replace(e.define||i,(function(t,r,a,o){return 0===r.indexOf("def.")&&(r=r.substring(4)),r in n||(":"===a?(e.defineParams&&o.replace(e.defineParams,(function(e,t,a){n[r]={arg:t,text:a}})),r in n||(n[r]=o)):new Function("def","def['"+r+"']="+o)(n)),""})).replace(e.use||i,(function(t,r){e.useParams&&(r=r.replace(e.useParams,(function(e,t,r,a){if(n[r]&&n[r].arg&&a){var o=(r+":"+a).replace(/'|\\/g,"_")
return n.__exp=n.__exp||{},n.__exp[o]=n[r].text.replace(new RegExp("(^|[^\\w$])"+n[r].arg+"([^\\w$])","g"),"$1"+a+"$2"),t+"def.__exp['"+o+"']"}})))
var a=new Function("def","return "+r)(n)
return a?u(e,a,n):a}))}function s(e){return e.replace(/\\('|\\)/g,"$1").replace(/[\r\t\n]/g," ")}e.template=function(t,n,r){var o,l,c=(n=n||e.templateSettings).append?a.append:a.split,d=0,p=n.use||n.define?u(n,t,r||{}):t
p=("var out='"+(n.strip?p.replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g," ").replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g,""):p).replace(/'|\\/g,"\\$&").replace(n.interpolate||i,(function(e,t){return c.start+s(t)+c.end})).replace(n.encode||i,(function(e,t){return o=!0,c.startencode+s(t)+c.end})).replace(n.conditional||i,(function(e,t,n){return t?n?"';}else if("+s(n)+"){out+='":"';}else{out+='":n?"';if("+s(n)+"){out+='":"';}out+='"})).replace(n.iterate||i,(function(e,t,n,r){return t?(d+=1,l=r||"i"+d,t=s(t),"';var arr"+d+"="+t+";if(arr"+d+"){var "+n+","+l+"=-1,l"+d+"=arr"+d+".length-1;while("+l+"<l"+d+"){"+n+"=arr"+d+"["+l+"+=1];out+='"):"';} } out+='"})).replace(n.evaluate||i,(function(e,t){return"';"+s(t)+"out+='"}))+"';return out;").replace(/\n/g,"\\n").replace(/\t/g,"\\t").replace(/\r/g,"\\r").replace(/(\s|;|\}|^|\{)out\+='';/g,"$1").replace(/\+''/g,""),o&&(n.selfcontained||!globalThis||globalThis._encodeHTML||(globalThis._encodeHTML=e.encodeHTMLSource(n.doNotSkipEncoded)),p="var encodeHTML = typeof _encodeHTML !== 'undefined' ? _encodeHTML : ("+e.encodeHTMLSource.toString()+"("+(n.doNotSkipEncoded||"")+"));"+p)
try{return new Function(n.varname,p)}catch(e){throw"undefined"!=typeof console&&console.log("Could not create a template function: "+p),e}},e.compile=function(t,n){return e.template(t,null,n)}}()})),hr={helpUrlBase:"https://dequeuniversity.com/rules/",gridSize:200,results:[],resultGroups:[],resultGroupMap:{},impact:Object.freeze(["minor","moderate","serious","critical"]),preload:Object.freeze({assets:["cssom","media"],timeout:1e4}),allOrigins:"<unsafe_all_origins>",sameOrigin:"<same_origin>"};[{name:"NA",value:"inapplicable",priority:0,group:"inapplicable"},{name:"PASS",value:"passed",priority:1,group:"passes"},{name:"CANTTELL",value:"cantTell",priority:2,group:"incomplete"},{name:"FAIL",value:"failed",priority:3,group:"violations"}].forEach((function(e){var t=e.name,n=e.value,r=e.priority,a=e.group
hr[t]=n,hr[t+"_PRIO"]=r,hr[t+"_GROUP"]=a,hr.results[r]=n,hr.resultGroups[r]=a,hr.resultGroupMap[n]=a})),Object.freeze(hr.results),Object.freeze(hr.resultGroups),Object.freeze(hr.resultGroupMap),Object.freeze(hr)
var mr=hr,Dr=function(){"object"===("undefined"==typeof console?"undefined":o(console))&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},gr=/[\t\r\n\f]/g,vr=function(){function e(){W(this,e),this.parent=void 0}return K(e,[{key:"props",get:function(){throw new Error('VirtualNode class must have a "props" object consisting of "nodeType" and "nodeName" properties')}},{key:"attrNames",get:function(){throw new Error('VirtualNode class must have an "attrNames" property')}},{key:"attr",value:function(){throw new Error('VirtualNode class must have an "attr" function')}},{key:"hasAttr",value:function(){throw new Error('VirtualNode class must have a "hasAttr" function')}},{key:"hasClass",value:function(e){var t=this.attr("class")
if(!t)return!1
var n=" "+e+" "
return(" "+t+" ").replace(gr," ").indexOf(n)>=0}}]),e}(),yr={}
se(yr,{DqElement:function(){return ma},aggregate:function(){return br},aggregateChecks:function(){return Ar},aggregateNodeResults:function(){return Tr},aggregateResult:function(){return Rr},areStylesSet:function(){return Br},assert:function(){return Sr},checkHelper:function(){return Da},clone:function(){return ga},closest:function(){return _a},collectResultsFromFrames:function(){return No},contains:function(){return Ro},convertSelector:function(){return Ra},cssParser:function(){return ba},deepMerge:function(){return Bo},escapeSelector:function(){return Or},extendMetaData:function(){return So},filterHtmlAttrs:function(){return Rm},finalizeRuleResult:function(){return kr},findBy:function(){return Ao},getAllChecks:function(){return xo},getAncestry:function(){return ia},getBaseLang:function(){return Dh},getCheckMessage:function(){return xh},getCheckOption:function(){return Ah},getEnvironmentData:function(){return kh},getFlattenedTree:function(){return fh},getFrameContexts:function(){return Uh},getFriendlyUriEnd:function(){return Pr},getNodeAttributes:function(){return qr},getNodeFromTree:function(){return pa},getPreloadConfig:function(){return Cm},getRootNode:function(){return jo},getRule:function(){return Wh},getScroll:function(){return Kh},getScrollState:function(){return Qh},getSelector:function(){return aa},getSelectorData:function(){return Zr},getShadowSelector:function(){return Vr},getStandards:function(){return Xh},getStyleSheetFactory:function(){return Jh},getXpath:function(){return sa},injectStyle:function(){return em},isHidden:function(){return tm},isHtmlElement:function(){return nm},isNodeInContext:function(){return rm},isShadowRoot:function(){return Oo},isValidLang:function(){return zm},isXHTML:function(){return $r},matchAncestry:function(){return om},matches:function(){return Fa},matchesExpression:function(){return Sa},matchesSelector:function(){return Lr},memoize:function(){return zr},mergeResults:function(){return To},nodeLookup:function(){return um},nodeSerializer:function(){return Co},nodeSorter:function(){return im},parseCrossOriginStylesheet:function(){return cm},parseSameOriginStylesheet:function(){return sm},parseStylesheet:function(){return lm},performanceTimer:function(){return pm},pollyfillElementsFromPoint:function(){return fm},preload:function(){return wm},preloadCssom:function(){return gm},preloadMedia:function(){return Fm},processMessage:function(){return Ch},publishMetaData:function(){return xm},querySelectorAll:function(){return km},querySelectorAllFilter:function(){return Dm},queue:function(){return La},respondable:function(){return go},ruleShouldRun:function(){return Nm},select:function(){return Sm},sendCommandToFrame:function(){return yo},setScrollState:function(){return Om},shadowSelect:function(){return Mm},shadowSelectAll:function(){return Im},shouldPreload:function(){return Em},toArray:function(){return _r},tokenList:function(){return ih},uniqueArray:function(){return hm},uuid:function(){return eo},validInputTypes:function(){return qm},validLangs:function(){return Hm}})
var br=function(e,t,n){t=t.slice(),n&&t.push(n)
var r=t.map((function(t){return e.indexOf(t)})).sort()
return e[r.pop()]},Fr=mr.CANTTELL_PRIO,wr=mr.FAIL_PRIO,Er=[]
Er[mr.PASS_PRIO]=!0,Er[mr.CANTTELL_PRIO]=null,Er[mr.FAIL_PRIO]=!1
var Cr=["any","all","none"]
function xr(e,t){return Cr.reduce((function(n,r){return n[r]=(e[r]||[]).map((function(e){return t(e,r)})),n}),{})}var Ar=function(e){var t=Object.assign({},e)
xr(t,(function(e,t){var n=void 0===e.result?-1:Er.indexOf(e.result)
e.priority=-1!==n?n:mr.CANTTELL_PRIO,"none"===t&&(e.priority===mr.PASS_PRIO?e.priority=mr.FAIL_PRIO:e.priority===mr.FAIL_PRIO&&(e.priority=mr.PASS_PRIO))}))
var n={all:t.all.reduce((function(e,t){return Math.max(e,t.priority)}),0),none:t.none.reduce((function(e,t){return Math.max(e,t.priority)}),0),any:t.any.reduce((function(e,t){return Math.min(e,t.priority)}),4)%4}
t.priority=Math.max(n.all,n.none,n.any)
var r=[]
return Cr.forEach((function(e){t[e]=t[e].filter((function(r){return r.priority===t.priority&&r.priority===n[e]})),t[e].forEach((function(e){return r.push(e.impact)}))})),[Fr,wr].includes(t.priority)?t.impact=br(mr.impact,r):t.impact=null,xr(t,(function(e){delete e.result,delete e.priority})),t.result=mr.results[t.priority],delete t.priority,t}
function kr(e){var t=i._audit.rules.find((function(t){return t.id===e.id}))
return t&&t.impact&&e.nodes.forEach((function(e){["any","all","none"].forEach((function(n){(e[n]||[]).forEach((function(e){e.impact=t.impact}))}))})),Object.assign(e,Tr(e.nodes)),delete e.nodes,e}var Tr=function(e){var t={}
if((e=e.map((function(e){if(e.any&&e.all&&e.none)return Ar(e)
if(Array.isArray(e.node))return kr(e)
throw new TypeError("Invalid Result type")})))&&e.length){var n=e.map((function(e){return e.result}))
t.result=br(mr.results,n,t.result)}else t.result="inapplicable"
mr.resultGroups.forEach((function(e){return t[e]=[]})),e.forEach((function(e){var n=mr.resultGroupMap[e.result]
t[n].push(e)}))
var r=mr.FAIL_GROUP
if(0===t[r].length&&(r=mr.CANTTELL_GROUP),t[r].length>0){var a=t[r].map((function(e){return e.impact}))
t.impact=br(mr.impact,a)||null}else t.impact=null
return t}
function Nr(e,t,n){var r=Object.assign({},t)
r.nodes=(r[n]||[]).concat(),mr.resultGroups.forEach((function(e){delete r[e]})),e[n].push(r)}var Rr=function(e){var t={}
return mr.resultGroups.forEach((function(e){return t[e]=[]})),e.forEach((function(e){e.error?Nr(t,e,mr.CANTTELL_GROUP):e.result===mr.NA?Nr(t,e,mr.NA_GROUP):mr.resultGroups.forEach((function(n){Array.isArray(e[n])&&e[n].length>0&&Nr(t,e,n)}))})),t},Br=function e(t,r,a){var o=n.getComputedStyle(t,null)
if(!o)return!1
for(var i=0;i<r.length;++i){var u=r[i]
if(o.getPropertyValue(u.property)===u.value)return!0}return!(!t.parentNode||t.nodeName.toUpperCase()===a.toUpperCase())&&e(t.parentNode,r,a)},Sr=function(e,t){if(!e)throw new Error(t)},_r=function(e){return Array.prototype.slice.call(e)},Or=function(e){for(var t,n=String(e),r=n.length,a=-1,o="",i=n.charCodeAt(0);++a<r;)0!=(t=n.charCodeAt(a))?o+=t>=1&&t<=31||127==t||0==a&&t>=48&&t<=57||1==a&&t>=48&&t<=57&&45==i?"\\"+t.toString(16)+" ":0==a&&1==r&&45==t||!(t>=128||45==t||95==t||t>=48&&t<=57||t>=65&&t<=90||t>=97&&t<=122)?"\\"+n.charAt(a):n.charAt(a):o+="�"
return o}
function Mr(e,t){return[e.substring(0,t),e.substring(t)]}function jr(e){return e.replace(/\s+$/,"")}var Ir,Pr=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
if(!(e.length<=1||"data:"===e.substr(0,5)||"javascript:"===e.substr(0,11)||e.includes("?"))){var n=t.currentDomain,r=t.maxLength,a=void 0===r?25:r,o=function(e){var t=e,n="",r="",a="",o="",i=""
if(e.includes("#")){var u=$(Mr(e,e.indexOf("#")),2)
e=u[0],i=u[1]}if(e.includes("?")){var s=$(Mr(e,e.indexOf("?")),2)
e=s[0],o=s[1]}if(e.includes("://")){var l=$(e.split("://"),2)
n=l[0]
var c=$(Mr(e=l[1],e.indexOf("/")),2)
r=c[0],e=c[1]}else if("//"===e.substr(0,2)){var d=$(Mr(e=e.substr(2),e.indexOf("/")),2)
r=d[0],e=d[1]}if("www."===r.substr(0,4)&&(r=r.substr(4)),r&&r.includes(":")){var p=$(Mr(r,r.indexOf(":")),2)
r=p[0],a=p[1]}return{original:t,protocol:n,domain:r,port:a,path:e,query:o,hash:i}}(e),i=o.path,u=o.domain,s=o.hash,l=i.substr(i.substr(0,i.length-2).lastIndexOf("/")+1)
if(s)return l&&(l+s).length<=a?jr(l+s):l.length<2&&s.length>2&&s.length<=a?jr(s):void 0
if(u&&u.length<a&&i.length<=1)return jr(u+i)
if(i==="/"+l&&u&&n&&u!==n&&(u+i).length<=a)return jr(u+i)
var c=l.lastIndexOf(".")
return(-1===c||c>1)&&(-1!==c||l.length>2)&&l.length<=a&&!l.match(/index(\.[a-zA-Z]{2-4})?/)&&!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:""
return 0!==e.length&&(e.match(/[0-9]/g)||"").length>=e.length/2}(l)?jr(l):void 0}},qr=function(e){return e.attributes instanceof n.NamedNodeMap?e.attributes:e.cloneNode(!1).attributes},Lr=function(e,t){return Ir&&e[Ir]||(Ir=function(e){var t,n,r=["matches","matchesSelector","mozMatchesSelector","webkitMatchesSelector","msMatchesSelector"],a=r.length
for(t=0;t<a;t++)if(e[n=r[t]])return n}(e)),!!e[Ir]&&e[Ir](t)},Hr=le(Lt())
i._memoizedFns=[]
var zr=function(e){var t=(0,Hr.default)(e)
return i._memoizedFns.push(t),t},$r=zr((function(e){return!(null==e||!e.createElement)&&"A"===e.createElement("A").localName}))
function Vr(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
if(!t)return""
var r=t.getRootNode&&t.getRootNode()||a
if(11!==r.nodeType)return e(t,n,r)
for(var o=[];11===r.nodeType;){if(!r.host)return""
o.unshift({elm:t,doc:r}),r=(t=r.host).getRootNode()}return o.unshift({elm:t,doc:r}),o.map((function(t){return e(t.elm,n,t.doc)}))}var Ur=["class","style","id","selected","checked","disabled","tabindex","aria-checked","aria-selected","aria-invalid","aria-activedescendant","aria-busy","aria-disabled","aria-expanded","aria-grabbed","aria-pressed","aria-valuenow","xmlns"],Wr=/([\\"])/g,Gr=/(\r\n|\r|\n)/g
function Kr(e){return e.replace(Wr,"\\$1").replace(Gr,"\\a ")}function Yr(e,t){var n,r=t.name
if(-1!==r.indexOf("href")||-1!==r.indexOf("src")){var a=Pr(e.getAttribute(r))
n=a?Or(t.name)+'$="'+Kr(a)+'"':Or(t.name)+'="'+Kr(e.getAttribute(r))+'"'}else n=Or(r)+'="'+Kr(t.value)+'"'
return n}function Qr(e,t){return e.count<t.count?-1:e.count===t.count?0:1}function Xr(e){return!Ur.includes(e.name)&&-1===e.name.indexOf(":")&&(!e.value||e.value.length<31)}function Zr(e){for(var t={classes:{},tags:{},attributes:{}},n=(e=Array.isArray(e)?e:[e]).slice(),r=[],a=function(){var e=n.pop(),a=e.actualNode
if(a.querySelectorAll){var o=a.nodeName
t.tags[o]?t.tags[o]++:t.tags[o]=1,a.classList&&Array.from(a.classList).forEach((function(e){var n=Or(e)
t.classes[n]?t.classes[n]++:t.classes[n]=1})),a.hasAttributes()&&Array.from(qr(a)).filter(Xr).forEach((function(e){var n=Yr(a,e)
n&&(t.attributes[n]?t.attributes[n]++:t.attributes[n]=1)}))}for(e.children.length&&(r.push(n),n=e.children.slice());!n.length&&r.length;)n=r.pop()};n.length;)a()
return t}function Jr(e,t){var n=e.parentNode&&Array.from(e.parentNode.children||"")||[]
return n.find((function(n){return n!==e&&Lr(n,t)}))?":nth-child("+(1+n.indexOf(e))+")":""}function ea(e){if(e.getAttribute("id")){var t=e.getRootNode&&e.getRootNode()||a,n="#"+Or(e.getAttribute("id")||"")
return n.match(/player_uid_/)||1!==t.querySelectorAll(n).length?void 0:n}}function ta(e){var t=$r(a)
return Or(t?e.localName:e.nodeName.toLowerCase())}function na(e,t){var n,r="",a=function(e,t){var n=[],r=t.classes,a=t.tags
return e.classList&&Array.from(e.classList).forEach((function(t){var o=Or(t)
r[o]<a[e.nodeName]&&n.push({name:o,count:r[o],species:"class"})})),n.sort(Qr)}(e,t),o=function(e,t){var n=[],r=t.attributes,a=t.tags
return e.hasAttributes()&&Array.from(qr(e)).filter(Xr).forEach((function(t){var o=Yr(e,t)
o&&r[o]<a[e.nodeName]&&n.push({name:o,count:r[o],species:"attribute"})})),n.sort(Qr)}(e,t)
return a.length&&1===a[0].count?n=[a[0]]:o.length&&1===o[0].count?(n=[o[0]],r=ta(e)):((n=a.concat(o)).sort(Qr),(n=n.slice(0,3)).some((function(e){return"class"===e.species}))?n.sort((function(e,t){return e.species!==t.species&&"class"===e.species?-1:e.species===t.species?0:1})):r=ta(e)),r+n.reduce((function(e,t){switch(t.species){case"class":return e+"."+t.name
case"attribute":return e+"["+t.name+"]"}return e}),"")}function ra(e,t,n){if(!i._selectorData)throw new Error("Expect axe._selectorData to be set up")
var r,a,o=t.toRoot,u=void 0!==o&&o
do{var s=ea(e)
s||(s=na(e,i._selectorData),s+=Jr(e,s)),r=r?s+" > "+r:s,a=a?a.filter((function(e){return Lr(e,r)})):Array.from(n.querySelectorAll(r)),e=e.parentElement}while((a.length>1||u)&&e&&11!==e.nodeType)
return 1===a.length?r:-1!==r.indexOf(" > ")?":root"+r.substring(r.indexOf(" > ")):":root"}function aa(e,t){return Vr(ra,e,t)}function oa(e){var t=e.nodeName.toLowerCase(),n=e.parentElement
if(!n)return t
var r=""
if("head"!==t&&"body"!==t&&n.children.length>1){var a=Array.prototype.indexOf.call(n.children,e)+1
r=":nth-child(".concat(a,")")}return oa(n)+" > "+t+r}function ia(e,t){return Vr(oa,e,t)}function ua(e,t){var n,r
if(!e)return[]
if(!t&&9===e.nodeType)return[{str:"html"}]
if(t=t||[],e.parentNode&&e.parentNode!==e&&(t=ua(e.parentNode,t)),e.previousSibling){r=1,n=e.previousSibling
do{1===n.nodeType&&n.nodeName===e.nodeName&&r++,n=n.previousSibling}while(n)
1===r&&(r=null)}else if(e.nextSibling){n=e.nextSibling
do{1===n.nodeType&&n.nodeName===e.nodeName?(r=1,n=null):(r=null,n=n.previousSibling)}while(n)}if(1===e.nodeType){var a={}
a.str=e.nodeName.toLowerCase()
var o=e.getAttribute&&Or(e.getAttribute("id"))
o&&1===e.ownerDocument.querySelectorAll("#"+o).length&&(a.id=e.getAttribute("id")),r>1&&(a.count=r),t.push(a)}return t}var sa=function(e){return ua(e).reduce((function(e,t){return t.id?"/".concat(t.str,"[@id='").concat(t.id,"']"):e+"/".concat(t.str)+(t.count>0?"[".concat(t.count,"]"):"")}),"")},la={},ca={set:function(e,t){!function(e){Sr("string"==typeof e,"key must be a string, "+o(e)+" given"),Sr(""!==e,"key must not be empty")}(e),la[e]=t},get:function(e,t){if(function(e){Sr("function"==typeof e||void 0===e,"creator must be a function or undefined, "+o(e)+" given")}(t),e in la)return la[e]
if("function"==typeof t){var n=t()
return Sr(void 0!==n,"Cache creator function should not return undefined"),this.set(e,n),la[e]}},clear:function(){la={}}},da=ca,pa=function(e,t){var n=t||e
return da.get("nodeMap")?da.get("nodeMap").get(n):null},fa="DqElm.RunOptions"
function ha(e){var t,r,a,o,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
u||(u=null!==(a=da.get(fa))&&void 0!==a?a:{}),this.spec=s,e instanceof vr?(this._virtualNode=e,this._element=e.actualNode):(this._element=e,this._virtualNode=pa(e)),this.fromFrame=(null===(t=this.spec.selector)||void 0===t?void 0:t.length)>1,this._includeElementInJson=u.elementRef,u.absolutePaths&&(this._options={toRoot:!0}),this.nodeIndexes=[],Array.isArray(this.spec.nodeIndexes)?this.nodeIndexes=this.spec.nodeIndexes:"number"==typeof(null===(r=this._virtualNode)||void 0===r?void 0:r.nodeIndex)&&(this.nodeIndexes=[this._virtualNode.nodeIndex]),this.source=null,i._audit.noHtml||(this.source=null!==(o=this.spec.source)&&void 0!==o?o:function(e){if(null==e||!e.outerHTML)return""
var t=e.outerHTML
return t||"function"!=typeof n.XMLSerializer||(t=(new n.XMLSerializer).serializeToString(e)),function(e,t){if(t=t||300,e.length>t){var n=e.indexOf(">")
e=e.substring(0,n+1)}return e}(t||"")}(this._element))}ha.prototype={get selector(){return this.spec.selector||[aa(this.element,this._options)]},get ancestry(){return this.spec.ancestry||[ia(this.element)]},get xpath(){return this.spec.xpath||[sa(this.element)]},get element(){return this._element},toJSON:function(){var e={selector:this.selector,source:this.source,xpath:this.xpath,ancestry:this.ancestry,nodeIndexes:this.nodeIndexes,fromFrame:this.fromFrame}
return this._includeElementInJson&&(e.element=this._element),e}},ha.fromFrame=function(e,t,n){var r=ha.mergeSpecs(e,n)
return new ha(n.element,t,r)},ha.mergeSpecs=function(e,t){return z({},e,{selector:[].concat(L(t.selector),L(e.selector)),ancestry:[].concat(L(t.ancestry),L(e.ancestry)),xpath:[].concat(L(t.xpath),L(e.xpath)),nodeIndexes:[].concat(L(t.nodeIndexes),L(e.nodeIndexes)),fromFrame:!0})},ha.setRunOptions=function(e){var t=e.elementRef,n=e.absolutePaths
da.set(fa,{elementRef:t,absolutePaths:n})}
var ma=ha,Da=function(e,t,r,a){return{isAsync:!1,async:function(){return this.isAsync=!0,function(t){t instanceof Error==0?(e.result=t,r(e)):a(t)}},data:function(t){e.data=t},relatedNodes:function(t){n.Node&&(t=t instanceof n.Node||t instanceof vr?[t]:_r(t),e.relatedNodes=[],t.forEach((function(t){if(t instanceof vr&&(t=t.actualNode),t instanceof n.Node){var r=new ma(t)
e.relatedNodes.push(r)}})))}}}
function ga(e){return va(e,new Map)}function va(e,t){var r,a
if(null===e||"object"!==o(e))return e
if(null!==(r=n)&&void 0!==r&&r.Node&&e instanceof n.Node||null!==(a=n)&&void 0!==a&&a.HTMLCollection&&e instanceof n.HTMLCollection||"nodeName"in e&&"nodeType"in e&&"ownerDocument"in e)return e
if(t.has(e))return t.get(e)
if(Array.isArray(e)){var i=[]
return t.set(e,i),e.forEach((function(e){i.push(va(e,t))})),i}var u={}
for(var s in t.set(e,u),e)u[s]=va(e[s],t)
return u}var ya=new(le(Vt()).CssSelectorParser)
ya.registerSelectorPseudos("not"),ya.registerSelectorPseudos("is"),ya.registerNestingOperators(">"),ya.registerAttrEqualityMods("^","$","*","~")
var ba=ya
function Fa(e,t){return Ra(t).some((function(t){return Sa(e,t)}))}function wa(e,t){return function(e,t){return 1===e.props.nodeType&&("*"===t.tag||e.props.nodeName===t.tag)}(e,t)&&function(e,t){return!t.classes||t.classes.every((function(t){return e.hasClass(t.value)}))}(e,t)&&function(e,t){return!t.attributes||t.attributes.every((function(t){var n=e.attr(t.key)
return null!==n&&t.test(n)}))}(e,t)&&function(e,t){return!t.id||e.props.id===t.id}(e,t)&&(n=e,!((r=t).pseudos&&!r.pseudos.every((function(e){if("not"===e.name)return!e.expressions.some((function(e){return Sa(n,e)}))
if("is"===e.name)return e.expressions.some((function(e){return Sa(n,e)}))
throw new Error("the pseudo selector "+e.name+" has not yet been implemented")}))))
var n,r}var Ea,Ca=(Ea=/(?=[\-\[\]{}()*+?.\\\^$|,#\s])/g,function(e){return e.replace(Ea,"\\")}),xa=/\\/g
function Aa(e){if(e)return e.map((function(e){var t,n,r=e.name.replace(xa,""),a=(e.value||"").replace(xa,"")
switch(e.operator){case"^=":n=new RegExp("^"+Ca(a))
break
case"$=":n=new RegExp(Ca(a)+"$")
break
case"~=":n=new RegExp("(^|\\s)"+Ca(a)+"(\\s|$)")
break
case"|=":n=new RegExp("^"+Ca(a)+"(-|$)")
break
case"=":t=function(e){return a===e}
break
case"*=":t=function(e){return e&&e.includes(a)}
break
case"!=":t=function(e){return a!==e}
break
default:t=function(e){return null!==e}}return""===a&&/^[*$^]=$/.test(e.operator)&&(t=function(){return!1}),t||(t=function(e){return e&&n.test(e)}),{key:r,value:a,type:void 0===e.value?"attrExist":"attrValue",test:t}}))}function ka(e){if(e)return e.map((function(e){return{value:e=e.replace(xa,""),regexp:new RegExp("(^|\\s)"+Ca(e)+"(\\s|$)")}}))}function Ta(e){if(e)return e.map((function(e){var t
return["is","not"].includes(e.name)&&(t=Na(t=(t=e.value).selectors?t.selectors:[t])),{name:e.name,expressions:t,value:e.value}}))}function Na(e){return e.map((function(e){for(var t=[],n=e.rule;n;)t.push({tag:n.tagName?n.tagName.toLowerCase():"*",combinator:n.nestingOperator?n.nestingOperator:" ",id:n.id,attributes:Aa(n.attrs),classes:ka(n.classNames),pseudos:Ta(n.pseudos)}),n=n.rule
return t}))}function Ra(e){var t=ba.parse(e)
return Na(t=t.selectors?t.selectors:[t])}function Ba(e,t,n,r){if(!e)return!1
for(var a=Array.isArray(t)?t[n]:t,o=wa(e,a);!o&&r&&e.parent;)o=wa(e=e.parent,a)
if(n>0){if(!1===[" ",">"].includes(a.combinator))throw new Error("axe.utils.matchesExpression does not support the combinator: "+a.combinator)
o=o&&Ba(e.parent,t,n-1," "===a.combinator)}return o}function Sa(e,t,n){return Ba(e,t,t.length-1,n)}var _a=function(e,t){for(;e;){if(Fa(e,t))return e
if(void 0===e.parent)throw new TypeError("Cannot resolve parent for non-DOM nodes")
e=e.parent}return null}
function Oa(){}function Ma(e){if("function"!=typeof e)throw new TypeError("Queue methods require functions as arguments")}var ja,Ia,Pa,qa,La=function(){var e,t=[],n=0,r=0,a=Oa,i=!1,u=function(t){e=t,setTimeout((function(){null!=e&&Dr("Uncaught error (of queue)",e)}),1)},s=u
function l(e){return function(n){t[e]=n,(r-=1)||a===Oa||(i=!0,a(t))}}function c(e){return a=Oa,s(e),t}var d={defer:function(a){if("object"===o(a)&&a.then&&a.catch){var u=a
a=function(e,t){u.then(e).catch(t)}}if(Ma(a),void 0===e){if(i)throw new Error("Queue already completed")
return t.push(a),++r,function(){for(var e=t.length;n<e;n++){var r=t[n]
try{r.call(null,l(n),c)}catch(e){c(e)}}}(),d}},then:function(n){if(Ma(n),a!==Oa)throw new Error("queue `then` already set")
return e||(a=n,r||(i=!0,a(t))),d},catch:function(t){if(Ma(t),s!==u)throw new Error("queue `catch` already set")
return e?(t(e),e=null):s=t,d},abort:c}
return d},Ha=n.crypto||n.msCrypto
!Ia&&Ha&&Ha.getRandomValues&&(Pa=new Uint8Array(16),Ia=function(){return Ha.getRandomValues(Pa),Pa}),Ia||(qa=new Array(16),Ia=function(){for(var e,t=0;t<16;t++)3&t||(e=4294967296*Math.random()),qa[t]=e>>>((3&t)<<3)&255
return qa})
for(var za="function"==typeof n.Buffer?n.Buffer:Array,$a=[],Va={},Ua=0;Ua<256;Ua++)$a[Ua]=(Ua+256).toString(16).substr(1),Va[$a[Ua]]=Ua
function Wa(e,t){var n=t||0,r=$a
return r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]}var Ga=Ia(),Ka=[1|Ga[0],Ga[1],Ga[2],Ga[3],Ga[4],Ga[5]],Ya=16383&(Ga[6]<<8|Ga[7]),Qa=0,Xa=0
function Za(e,t,n){var r=t&&n||0,a=t||[],o=null!=(e=e||{}).clockseq?e.clockseq:Ya,i=null!=e.msecs?e.msecs:(new Date).getTime(),u=null!=e.nsecs?e.nsecs:Xa+1,s=i-Qa+(u-Xa)/1e4
if(s<0&&null==e.clockseq&&(o=o+1&16383),(s<0||i>Qa)&&null==e.nsecs&&(u=0),u>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec")
Qa=i,Xa=u,Ya=o
var l=(1e4*(268435455&(i+=122192928e5))+u)%4294967296
a[r++]=l>>>24&255,a[r++]=l>>>16&255,a[r++]=l>>>8&255,a[r++]=255&l
var c=i/4294967296*1e4&268435455
a[r++]=c>>>8&255,a[r++]=255&c,a[r++]=c>>>24&15|16,a[r++]=c>>>16&255,a[r++]=o>>>8|128,a[r++]=255&o
for(var d=e.node||Ka,p=0;p<6;p++)a[r+p]=d[p]
return t||Wa(a)}function Ja(e,t,n){var r=t&&n||0
"string"==typeof e&&(t="binary"==e?new za(16):null,e=null)
var a=(e=e||{}).random||(e.rng||Ia)()
if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,t)for(var o=0;o<16;o++)t[r+o]=a[o]
return t||Wa(a)}(ja=Ja).v1=Za,ja.v4=Ja,ja.parse=function(e,t,n){var r=t&&n||0,a=0
for(t=t||[],e.toLowerCase().replace(/[0-9a-f]{2}/g,(function(e){a<16&&(t[r+a++]=Va[e])}));a<16;)t[r+a++]=0
return t},ja.unparse=Wa,ja.BufferClass=za,i._uuid=Za()
var eo=Ja,to=Object.freeze(["EvalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"])
function no(){var e="axeAPI",t=""
return void 0!==i&&i._audit&&i._audit.application&&(e=i._audit.application),void 0!==i&&(t=i.version),e+"."+t}function ro(e){oo(e),Sr(n.parent===e,"Source of the response must be the parent window.")}function ao(e){oo(e),Sr(e.parent===n,"Respondable target must be a frame in the current window")}function oo(e){Sr(n!==e,"Messages can not be sent to the same window.")}var io={},uo=[]
function so(){var e="".concat(Ja(),":").concat(Ja())
return uo.includes(e)?so():(uo.push(e),e)}function lo(e,t,n,r){if(n?ro(e):ao(e),t.message instanceof Error&&!n)return i.log(t.message),!1
var a=function(e){var t=e.topic,n=e.channelId,r=e.message,a={channelId:n,topic:t,messageId:e.messageId,keepalive:!!e.keepalive,source:no()}
return r instanceof Error?a.error={name:r.name,message:r.message,stack:r.stack}:a.payload=r,JSON.stringify(a)}(z({messageId:so()},t)),o=i._audit.allowedOrigins
return!(!o||!o.length||("function"==typeof r&&function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2]
Sr(!io[e],"A replyHandler already exists for this message channel."),io[e]={replyHandler:t,sendToParent:n}}(t.channelId,r,n),o.forEach((function(t){try{e.postMessage(a,t)}catch(n){if(n instanceof e.DOMException)throw new Error('allowedOrigins value "'.concat(t,'" is not a valid origin'))
throw n}})),0))}function co(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2]
return function(r,a,o){lo(e,{channelId:t,message:r,keepalive:a},n,o)}}var po,fo,ho={open:function(e){if("function"==typeof n.addEventListener){var t=function(t){(function(e,t){var r,a=e.origin,u=e.data,s=e.source
try{var l=function(e){var t,r,a,i,u
try{t=JSON.parse(e)}catch(e){return}if(null!==(s=t)&&"object"===o(s)&&"string"==typeof s.channelId&&s.source===no()){var s,l=t,c=l.topic,d=l.channelId,p=l.messageId,f=l.keepalive
return{topic:c,message:"object"===o(t.error)?(r=t.error,a=r.message||"Unknown error occurred",i=to.includes(r.name)?r.name:"Error",u=n[i]||Error,r.stack&&(a+="\n"+r.stack.replace(r.message,"")),new u(a)):t.payload,messageId:p,channelId:d,keepalive:!!f}}}(u)||{},c=l.channelId,d=l.message,p=l.messageId
if(!function(e){var t=i._audit.allowedOrigins
return t&&t.includes("*")||t.includes(e)}(a)||(r=p,uo.includes(r)||(uo.push(r),0)))return
if(d instanceof Error&&s.parent!==n)return i.log(d),!1
try{if(l.topic){var f=co(s,c)
ro(s),t(l,f)}else!function(e,t){var n=t.channelId,r=t.message,a=t.keepalive,o=function(e){return io[e]}(n)||{},u=o.replyHandler,s=o.sendToParent
if(u){s?ro(e):ao(e)
var l=co(e,n,s)
!a&&n&&function(e){delete io[e]}(n)
try{u(r,a,l)}catch(e){i.log(e),l(e,a)}}}(s,l)}catch(e){!function(e,t,r){if(!e.parent!==n)return i.log(t)
try{lo(e,{topic:null,channelId:r,message:t,messageId:so(),keepalive:!0},!0)}catch(e){return i.log(e)}}(s,e,c)}}catch(e){return i.log(e),!1}})(t,e)}
return n.addEventListener("message",t,!1),function(){n.removeEventListener("message",t,!1)}}},post:function(e,t,r){return"function"==typeof n.addEventListener&&lo(e,t,!1,r)}}
function mo(e){e.updateMessenger(ho)}var Do={}
function go(e,t,n,r,a){var o={topic:t,message:n,channelId:"".concat(Ja(),":").concat(Ja()),keepalive:r}
return fo(e,o,a)}function vo(e,t){var n=e.topic,r=e.message,a=e.keepalive,o=Do[n]
if(o)try{o(r,a,t)}catch(e){i.log(e),t(e,a)}}function yo(e,t,n,r){var a,o,i=e.contentWindow,u=null!==(a=null===(o=t.options)||void 0===o?void 0:o.pingWaitTime)&&void 0!==a?a:500
if(!i)return Dr("Frame does not have a content window",e),void n(null)
if(0!==u){var s=setTimeout((function(){s=setTimeout((function(){t.debug?r(Fo("No response from frame",e)):n(null)}),0)}),u)
go(i,"axe.ping",null,void 0,(function(){clearTimeout(s),bo(e,t,n,r)}))}else bo(e,t,n,r)}function bo(e,t,n,r){var a,o,i=null!==(a=null===(o=t.options)||void 0===o?void 0:o.frameWaitTime)&&void 0!==a?a:6e4,u=e.contentWindow,s=setTimeout((function(){r(Fo("Axe in frame timed out",e))}),i)
go(u,"axe.start",t,void 0,(function(e){clearTimeout(s),e instanceof Error==0?n(e):r(e)}))}function Fo(e,t){var n
return i._tree&&(n=aa(t)),new Error(e+": "+(n||t))}go.updateMessenger=function(e){var t=e.open,n=e.post
Sr("function"==typeof t,"open callback must be a function"),Sr("function"==typeof n,"post callback must be a function"),po&&po()
var r=t(vo)
r?(Sr("function"==typeof r,"open callback must return a cleanup function"),po=r):po=null,fo=n},go.subscribe=function(e,t){Sr("function"==typeof t,"Subscriber callback must be a function"),Sr(!Do[e],"Topic ".concat(e," is already registered to.")),Do[e]=t},go.isInFrame=function(){return!!(arguments.length>0&&void 0!==arguments[0]?arguments[0]:n).frameElement},mo(go)
var wo=null,Eo={update:function(e){Sr("object"===o(e),"serializer must be an object"),wo=e},toSpec:function(e){return Eo.dqElmToSpec(new ma(e))},dqElmToSpec:function(e,t){var n
return e instanceof ma==0?e:(t&&(e=function(e,t){var n=e.fromFrame,r=t.ancestry,a=t.xpath,o=!1!==t.selectors||n
return(e=new ma(e.element,t,{source:e.source,nodeIndexes:e.nodeIndexes,selector:o?e.selector:[":root"],ancestry:r?e.ancestry:[":root"],xpath:a?e.xpath:"/"})).fromFrame=n,e}(e,t)),"function"==typeof(null===(n=wo)||void 0===n?void 0:n.toSpec)?wo.toSpec(e):e.toJSON())},mergeSpecs:function(e,t){var n
return"function"==typeof(null===(n=wo)||void 0===n?void 0:n.mergeSpecs)?wo.mergeSpecs(e,t):ma.mergeSpecs(e,t)},mapRawResults:function(e){return e.map((function(e){return z({},e,{nodes:Eo.mapRawNodeResults(e.nodes)})}))},mapRawNodeResults:function(e){return null==e?void 0:e.map((function(e){var t=e.node,n=q(e,s)
n.node=Eo.dqElmToSpec(t)
for(var r=0,a=["any","all","none"];r<a.length;r++){var o=a[r]
n[o]=n[o].map((function(e){var t=e.relatedNodes,n=q(e,l)
return n.relatedNodes=t.map(Eo.dqElmToSpec),n}))}return n}))}},Co=Eo,xo=function(e){return[].concat(e.any||[]).concat(e.all||[]).concat(e.none||[])},Ao=function(e,t,n){if(Array.isArray(e))return e.find((function(e){return null!==e&&"object"===o(e)&&Object.hasOwn(e,t)&&e[t]===n}))}
function ko(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=Math.max(null==e?void 0:e.length,null==t?void 0:t.length),r=0;r<n;r++){var a=null==e?void 0:e[r],o=null==t?void 0:t[r]
if("number"!=typeof a||isNaN(a))return 0===r?1:-1
if("number"!=typeof o||isNaN(o))return 0===r?-1:1
if(a!==o)return a-o}return 0}var To=function(e,t){var n=[]
return e.forEach((function(e){var t,r=(t=e)&&t.results?Array.isArray(t.results)?t.results.length?t.results:null:[t.results]:null
if(r&&r.length){var a=function(e){return e.frameElement?Co.toSpec(e.frameElement):e.frameSpec?e.frameSpec:null}(e)
r.forEach((function(e){e.nodes&&a&&function(e,t,n){e.forEach((function(e){e.node=Co.mergeSpecs(e.node,n),xo(e).forEach((function(e){e.relatedNodes=e.relatedNodes.map((function(e){return Co.mergeSpecs(e,n)}))}))}))}(e.nodes,0,a)
var t=Ao(n,"id",e.id)
t?e.nodes.length&&function(e,t){for(var n=t[0].node,r=0;r<e.length;r++){var a=e[r].node,o=ko(a.nodeIndexes,n.nodeIndexes)
if(o>0||0===o&&n.selector.length<a.selector.length)return void e.splice.apply(e,[r,0].concat(L(t)))}e.push.apply(e,L(t))}(t.nodes,e.nodes):n.push(e)}))}})),n.forEach((function(e){e.nodes&&e.nodes.sort((function(e,t){return ko(e.node.nodeIndexes,t.node.nodeIndexes)}))})),n}
function No(e,t,n,r,a,o){t=z({},t,{elementRef:!1})
var i=La()
e.frames.forEach((function(e){var a=e.node,o=q(e,c)
i.defer((function(e,i){yo(a,{options:t,command:n,parameter:r,context:o},(function(t){return e(t?{results:t,frameElement:a}:null)}),i)}))})),i.then((function(e){a(To(e,t))})).catch(o)}function Ro(e,t){if(!e.shadowId&&!t.shadowId&&e.actualNode&&"function"==typeof e.actualNode.contains)return e.actualNode.contains(t.actualNode)
do{if(e===t)return!0
if(t.nodeIndex<e.nodeIndex)return!1
t=t.parent}while(t)
return!1}var Bo=function e(){for(var t={},n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a]
return r.forEach((function(n){if(n&&"object"===o(n)&&!Array.isArray(n))for(var r=0,a=Object.keys(n);r<a.length;r++){var i=a[r]
!t.hasOwnProperty(i)||"object"!==o(n[i])||Array.isArray(t[i])?t[i]=n[i]:t[i]=e(t[i],n[i])}})),t},So=function(e,t){Object.assign(e,t),Object.keys(t).filter((function(e){return"function"==typeof t[e]})).forEach((function(n){e[n]=null
try{e[n]=t[n](e)}catch(e){}}))},_o=["article","aside","blockquote","body","div","footer","h1","h2","h3","h4","h5","h6","header","main","nav","p","section","span"],Oo=function(e){if(e.shadowRoot){var t=e.nodeName.toLowerCase()
if(_o.includes(t)||/^[a-z][a-z0-9_.-]*-[a-z0-9_.-]*$/.test(t))return!0}return!1},Mo={}
se(Mo,{createGrid:function(){return Si},findElmsInContext:function(){return Po},findNearbyElms:function(){return Hi},findUp:function(){return Lo},findUpVirtual:function(){return qo},focusDisabled:function(){return Ki},getComposedParent:function(){return ui},getElementByReference:function(){return Zi},getElementCoordinates:function(){return li},getElementStack:function(){return ru},getModalDialog:function(){return $i},getOverflowHiddenAncestors:function(){return $o},getRootNode:function(){return Io},getScrollOffset:function(){return si},getTabbableElements:function(){return au},getTargetRects:function(){return su},getTargetSize:function(){return lu},getTextElementStack:function(){return Ws},getViewportSize:function(){return ci},getVisibleChildTextRects:function(){return Vs},hasContent:function(){return Zs},hasContentVirtual:function(){return Xs},hasLangText:function(){return Js},idrefs:function(){return du},insertedIntoFocusOrder:function(){return el},isCurrentPageLink:function(){return Xi},isFocusable:function(){return iu},isHTML5:function(){return al},isHiddenForEveryone:function(){return ai},isHiddenWithCSS:function(){return rl},isInTabOrder:function(){return uu},isInTextBlock:function(){return ll},isInert:function(){return Vi},isModalOpen:function(){return cl},isMultiline:function(){return dl},isNativelyFocusable:function(){return ou},isNode:function(){return pl},isOffscreen:function(){return di},isOpaque:function(){return Hf},isSkipLink:function(){return zf},isVisible:function(){return Wf},isVisibleOnScreen:function(){return fi},isVisibleToScreenReaders:function(){return is},isVisualContent:function(){return Ks},reduceToElementsBelowFloating:function(){return Gf},shadowElementsFromPoint:function(){return Xf},urlPropsFromAttribute:function(){return th},visuallyContains:function(){return Kf},visuallyOverlaps:function(){return nh},visuallySort:function(){return Ji}})
var jo=function(e){var t=e.getRootNode&&e.getRootNode()||a
return t===e&&(t=a),t},Io=jo,Po=function(e){var t,n=e.context,r=e.value,a=e.attr,o=e.elm,i=void 0===o?"":o,u=Or(r)
return t=9===n.nodeType||11===n.nodeType?n:Io(n),Array.from(t.querySelectorAll(i+"["+a+"="+u+"]"))},qo=function(e,t){var n
if(n=e.actualNode,!e.shadowId&&"function"==typeof e.actualNode.closest)return e.actualNode.closest(t)||null
do{(n=n.assignedSlot?n.assignedSlot:n.parentNode)&&11===n.nodeType&&(n=n.host)}while(n&&!Lr(n,t)&&n!==a.documentElement)
return n&&Lr(n,t)?n:null},Lo=function(e,t){return qo(pa(e),t)}
function Ho(e,t){return(0|e.left)<(0|t.right)&&(0|e.right)>(0|t.left)&&(0|e.top)<(0|t.bottom)&&(0|e.bottom)>(0|t.top)}var zo=zr((function(e){var t=[]
return e?("hidden"===e.getComputedStylePropertyValue("overflow")&&t.push(e),t.concat(zo(e.parent))):t})),$o=zo,Vo=/rect\s*\(([0-9]+)px,?\s*([0-9]+)px,?\s*([0-9]+)px,?\s*([0-9]+)px\s*\)/,Uo=/(\w+)\((\d+)/
function Wo(e){return["style","script","noscript","template"].includes(e.props.nodeName)}function Go(e){return"area"!==e.props.nodeName&&"none"===e.getComputedStylePropertyValue("display")}function Ko(e){return!(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).isAncestor&&["hidden","collapse"].includes(e.getComputedStylePropertyValue("visibility"))}function Yo(e){return!!(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).isAncestor&&"hidden"===e.getComputedStylePropertyValue("content-visibility")}function Qo(e){return"true"===e.attr("aria-hidden")}function Xo(e){return"0"===e.getComputedStylePropertyValue("opacity")}function Zo(e){var t=Kh(e.actualNode),n=parseInt(e.getComputedStylePropertyValue("height")),r=parseInt(e.getComputedStylePropertyValue("width"))
return!!t&&(0===n||0===r)}function Jo(e){if((arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).isAncestor)return!1
var t=e.boundingClientRect,n=$o(e)
return!!n.length&&n.some((function(e){var n=e.boundingClientRect
return n.width<2||n.height<2||!Ho(t,n)}))}function ei(e){var t=e.getComputedStylePropertyValue("clip").match(Vo),n=e.getComputedStylePropertyValue("clip-path").match(Uo)
if(t&&5===t.length){var r=e.getComputedStylePropertyValue("position")
if(["fixed","absolute"].includes(r))return t[3]-t[1]<=0&&t[2]-t[4]<=0}if(n){var a=n[1],o=parseInt(n[2],10)
switch(a){case"inset":return o>=50
case"circle":return 0===o}}return!1}function ti(e,t){var n=_a(e,"map")
if(!n)return!0
var r=n.attr("name")
if(!r)return!0
var a=jo(e.actualNode)
if(!a||9!==a.nodeType)return!0
var o=km(i._tree,'img[usemap="#'.concat(Or(r),'"]'))
return!o||!o.length||o.some((function(e){return!t(e)}))}function ni(e){var t
return"details"===(null===(t=e.parent)||void 0===t?void 0:t.props.nodeName)&&("summary"!==e.props.nodeName||e.parent.children.find((function(e){return"summary"===e.props.nodeName}))!==e)&&!e.parent.hasAttr("open")}var ri=[Go,Ko,Yo,ni]
function ai(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.skipAncestors,r=t.isAncestor,a=void 0!==r&&r
return e=um(e).vNode,n?oi(e,a):ii(e,a)}var oi=zr((function(e,t){return!(!Wo(e)&&(!e.actualNode||!ri.some((function(n){return n(e,{isAncestor:t})}))&&e.actualNode.isConnected))})),ii=zr((function(e,t){return!!oi(e,t)||!!e.parent&&ii(e.parent,!0)})),ui=function e(t){if(t.assignedSlot)return e(t.assignedSlot)
if(t.parentNode){var n=t.parentNode
if(1===n.nodeType)return n
if(n.host)return n.host}return null},si=function(e){if(!e.nodeType&&e.document&&(e=e.document),9===e.nodeType){var t=e.documentElement,n=e.body
return{left:t&&t.scrollLeft||n&&n.scrollLeft||0,top:t&&t.scrollTop||n&&n.scrollTop||0}}return{left:e.scrollLeft,top:e.scrollTop}},li=function(e){var t=si(a),n=t.left,r=t.top,o=e.getBoundingClientRect()
return{top:o.top+r,right:o.right+n,bottom:o.bottom+r,left:o.left+n,width:o.right-o.left,height:o.bottom-o.top}},ci=function(e){var t=e.document,n=t.documentElement
if(e.innerWidth)return{width:e.innerWidth,height:e.innerHeight}
if(n)return{width:n.clientWidth,height:n.clientHeight}
var r=t.body
return{width:r.clientWidth,height:r.clientHeight}},di=function(e){if((arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).isAncestor)return!1
var t=um(e).domNode
if(t){var r,o=a.documentElement,i=n.getComputedStyle(t),u=n.getComputedStyle(a.body||o).getPropertyValue("direction"),s=li(t)
if(s.bottom<0&&(function(e,t){for(e=ui(e);e&&"html"!==e.nodeName.toLowerCase();){if(e.scrollTop&&(t+=e.scrollTop)>=0)return!1
e=ui(e)}return!0}(t,s.bottom)||"absolute"===i.position))return!0
if(0===s.left&&0===s.right)return!1
if("ltr"===u){if(s.right<=0)return!0}else if(r=Math.max(o.scrollWidth,ci(n).width),s.left>=r)return!0
return!1}},pi=[Xo,Zo,Jo,ei,di]
function fi(e){return e=um(e).vNode,hi(e)}var hi=zr((function(e,t){return e.actualNode&&"area"===e.props.nodeName?!ti(e,hi):!ai(e,{skipAncestors:!0,isAncestor:t})&&(!e.actualNode||!pi.some((function(n){return n(e,{isAncestor:t})})))&&(!e.parent||hi(e.parent,!0))}))
function mi(e,t){var r=Math.min(e.top,t.top),a=Math.max(e.right,t.right),o=Math.max(e.bottom,t.bottom),i=Math.min(e.left,t.left)
return new n.DOMRect(i,r,a-i,o-r)}function Di(e,t){var n=e.x,r=e.y,a=t.top,o=t.right,i=t.bottom,u=t.left
return r>=a&&n<=o&&r<=i&&n>=u}var gi={}
function vi(e,t){var r=Math.max(e.left,t.left),a=Math.min(e.right,t.right),o=Math.max(e.top,t.top),i=Math.min(e.bottom,t.bottom)
return r>=a||o>=i?null:new n.DOMRect(r,o,a-r,i-o)}function yi(e){var t=e.left,r=e.top,a=e.width,o=e.height
return new n.DOMPoint(t+a/2,r+o/2)}se(gi,{getBoundingRect:function(){return mi},getIntersectionRect:function(){return vi},getOffset:function(){return Fi},getRectCenter:function(){return yi},hasVisualOverlap:function(){return Ci},isPointInRect:function(){return Di},rectHasMinimumSize:function(){return bi},rectsOverlap:function(){return Ho},splitRects:function(){return xi}})
function bi(e,t){var n=t.width,r=t.height
return n+.05>=e&&r+.05>=e}function Fi(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:12,r=su(e),a=su(t)
if(!r.length||!a.length)return 0
var o,i=yi(r.reduce(mi)),u=1/0,s=Q(a)
try{for(s.s();!(o=s.n()).done;){var l=o.value
if(Di(i,l))return 0
var c=Ei(i,wi(i,l))
u=Math.min(u,c)}}catch(e){s.e(e)}finally{s.f()}if(bi(2*n,lu(t)))return u
var d=Ei(i,yi(a.reduce(mi)))-n
return Math.max(0,Math.min(u,d))}function wi(e,t){return{x:e.x<t.left?t.left:e.x>t.right?t.right:e.x,y:e.y<t.top?t.top:e.y>t.bottom?t.bottom:e.y}}function Ei(e,t){return Math.hypot(e.x-t.x,e.y-t.y)}function Ci(e,t){var n=e.boundingClientRect,r=t.boundingClientRect
return!(n.left>=r.right||n.right<=r.left||n.top>=r.bottom||n.bottom<=r.top)&&Ji(e,t)>0}function xi(e,t){var n,r=[e],a=Q(t)
try{var o,i=function(){var e=n.value
if((r=r.reduce((function(t,n){return t.concat(function(e,t){var n,r,a=e.top,o=e.left,i=e.bottom,u=e.right,s=a<t.bottom&&i>t.top,l=o<t.right&&u>t.left,c=[]
if(Ai(t.top,a,i)&&l&&c.push({top:a,left:o,bottom:t.top,right:u}),Ai(t.right,o,u)&&s&&c.push({top:a,left:t.right,bottom:i,right:u}),Ai(t.bottom,a,i)&&l&&c.push({top:t.bottom,right:u,bottom:i,left:o}),Ai(t.left,o,u)&&s&&c.push({top:a,left:o,bottom:i,right:t.left}),0===c.length){if(r=t,(n=e).top>=r.top&&n.left>=r.left&&n.bottom<=r.bottom&&n.right<=r.right)return[]
c.push(e)}return c.map(ki)}(n,e))}),[])).length>4e3)return{v:[]}}
for(a.s();!(n=a.n()).done;)if(o=i())return o.v}catch(e){a.e(e)}finally{a.f()}return r}var Ai=function(e,t,n){return e>t&&e<n}
function ki(e){return new n.DOMRect(e.left,e.top,e.right-e.left,e.bottom-e.top)}var Ti=0,Ni=.2,Ri=.3,Bi=0
function Si(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.body,t=arguments.length>1?arguments[1]:void 0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null
if(da.get("gridCreated")&&!r)return mr.gridSize
if(da.set("gridCreated",!0),!r){var o,u=pa(a.documentElement)
if(u||(u=new oh(a.documentElement)),Bi=0,u._stackingOrder=[ji(Ti,Bi++,null)],null!==(o=t)&&void 0!==o||(t=new qi),Pi(t,u),Kh(u.actualNode)){var s=new qi(u)
u._subGrid=s}}for(var l=a.createTreeWalker(e,n.NodeFilter.SHOW_ELEMENT,null,!1),c=r?l.nextNode():l.currentNode;c;){var d=pa(c)
d&&d.parent?r=d.parent:c.assignedSlot?r=pa(c.assignedSlot):c.parentElement?r=pa(c.parentElement):c.parentNode&&pa(c.parentNode)&&(r=pa(c.parentNode)),d||(d=new i.VirtualNode(c,r)),d._stackingOrder=Mi(d,r,Bi++)
var p=Ii(d,r),f=p?p._subGrid:t
if(Kh(d.actualNode)){var h=new qi(d)
d._subGrid=h}var m=d.boundingClientRect
0!==m.width&&0!==m.height&&fi(c)&&Pi(f,d),Oo(c)&&Si(c.shadowRoot,f,d),c=l.nextNode()}return mr.gridSize}function _i(e,t){var n=e.getComputedStylePropertyValue("position"),r=e.getComputedStylePropertyValue("z-index")
if("fixed"===n||"sticky"===n)return!0
if("auto"!==r&&"static"!==n)return!0
if("1"!==e.getComputedStylePropertyValue("opacity"))return!0
if("none"!==(e.getComputedStylePropertyValue("-webkit-transform")||e.getComputedStylePropertyValue("-ms-transform")||e.getComputedStylePropertyValue("transform")||"none"))return!0
var a=e.getComputedStylePropertyValue("mix-blend-mode")
if(a&&"normal"!==a)return!0
var o=e.getComputedStylePropertyValue("filter")
if(o&&"none"!==o)return!0
var i=e.getComputedStylePropertyValue("perspective")
if(i&&"none"!==i)return!0
var u=e.getComputedStylePropertyValue("clip-path")
if(u&&"none"!==u)return!0
if("none"!==(e.getComputedStylePropertyValue("-webkit-mask")||e.getComputedStylePropertyValue("mask")||"none"))return!0
if("none"!==(e.getComputedStylePropertyValue("-webkit-mask-image")||e.getComputedStylePropertyValue("mask-image")||"none"))return!0
if("none"!==(e.getComputedStylePropertyValue("-webkit-mask-border")||e.getComputedStylePropertyValue("mask-border")||"none"))return!0
if("isolate"===e.getComputedStylePropertyValue("isolation"))return!0
var s=e.getComputedStylePropertyValue("will-change")
if("transform"===s||"opacity"===s)return!0
if("touch"===e.getComputedStylePropertyValue("-webkit-overflow-scrolling"))return!0
var l=e.getComputedStylePropertyValue("contain")
return!!["layout","paint","strict","content"].includes(l)||!("auto"===r||!Oi(t))}function Oi(e){if(!e)return!1
var t=e.getComputedStylePropertyValue("display")
return["flex","inline-flex","grid","inline-grid"].includes(t)}function Mi(e,t,n){var r=t._stackingOrder.slice()
if(_i(e,t)){var a=r.findIndex((function(e){var t=e.stackLevel
return[Ti,Ni,Ri].includes(t)}));-1!==a&&r.splice(a,r.length-a)}var o=function(e,t){var n=function(e,t){return"static"!==e.getComputedStylePropertyValue("position")||Oi(t)?e.getComputedStylePropertyValue("z-index"):"auto"}(e,t)
return["auto","0"].includes(n)?"static"!==e.getComputedStylePropertyValue("position")?Ri:"none"!==e.getComputedStylePropertyValue("float")?Ni:_i(e,t)?.1:null:parseInt(n)}(e,t)
return null!==o&&r.push(ji(o,n,e)),r}function ji(e,t,n){return{stackLevel:e,treeOrder:t,vNode:n}}function Ii(e,t){for(var n=null,r=[e];t;){if(Kh(t.actualNode)){n=t
break}if(t._scrollRegionParent){n=t._scrollRegionParent
break}r.push(t),t=pa(t.actualNode.parentElement||t.actualNode.parentNode)}return r.forEach((function(e){return e._scrollRegionParent=n})),n}function Pi(e,t){var n=$o(t)
t.clientRects.forEach((function(r){var a,o=n.reduce((function(e,t){return e&&vi(e,t.boundingClientRect)}),r)
if(o){null!==(a=t._grid)&&void 0!==a||(t._grid=e)
var i=e.getGridPositionOfRect(o)
e.loopGridPosition(i,(function(e){e.includes(t)||e.push(t)}))}}))}var qi=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null
W(this,e),this.container=t,this.cells=[]}return K(e,[{key:"toGridIndex",value:function(e){return Math.floor(e/mr.gridSize)}},{key:"getCellFromPoint",value:function(e){var t,n,r=e.x,a=e.y
Sr(this.boundaries,"Grid does not have cells added")
var o=this.toGridIndex(a),i=this.toGridIndex(r)
Sr(Di({y:o,x:i},this.boundaries),"Element midpoint exceeds the grid bounds")
var u=null!==(t=this.cells[o-this.cells._negativeIndex])&&void 0!==t?t:[]
return null!==(n=u[i-u._negativeIndex])&&void 0!==n?n:[]}},{key:"loopGridPosition",value:function(e,t){var n=e,r=n.left,a=n.right,o=n.top,i=n.bottom
this.boundaries&&(e=mi(this.boundaries,e)),this.boundaries=e,Li(this.cells,o,i,(function(e,n){Li(e,r,a,(function(e,r){t(e,{row:n,col:r})}))}))}},{key:"getGridPositionOfRect",value:function(e){var t=e.top,r=e.right,a=e.bottom,o=e.left,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0
return t=this.toGridIndex(t-i),r=this.toGridIndex(r+i-1),a=this.toGridIndex(a+i-1),o=this.toGridIndex(o-i),new n.DOMRect(o,t,r-o,a-t)}}]),e}()
function Li(e,t,n,r){var a
if(null!==(a=e._negativeIndex)&&void 0!==a||(e._negativeIndex=0),t<e._negativeIndex){for(var o=0;o<e._negativeIndex-t;o++)e.splice(0,0,[])
e._negativeIndex=t}for(var i=t-e._negativeIndex,u=n-e._negativeIndex,s=i;s<=u;s++){var l,c
null!==(c=e[l=s])&&void 0!==c||(e[l]=[]),r(e[s],s+e._negativeIndex)}}function Hi(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0
if(Si(),null===(t=e._grid)||void 0===t||null===(t=t.cells)||void 0===t||!t.length)return[]
var r=e.boundingClientRect,a=e._grid,o=zi(e),i=a.getGridPositionOfRect(r,n),u=[]
return a.loopGridPosition(i,(function(t){var n,r=Q(t)
try{for(r.s();!(n=r.n()).done;){var a=n.value
a&&a!==e&&!u.includes(a)&&o===zi(a)&&u.push(a)}}catch(e){r.e(e)}finally{r.f()}})),u}var zi=zr((function(e){return!!e&&("fixed"===e.getComputedStylePropertyValue("position")||zi(e.parent))})),$i=zr((function(){var e
if(!i._tree)return null
var t=Dm(i._tree[0],"dialog[open]",(function(e){var t=e.boundingClientRect
return a.elementsFromPoint(t.left+1,t.top+1).includes(e.actualNode)&&fi(e)}))
return t.length?t.find((function(e){var t=e.boundingClientRect
return a.elementsFromPoint(t.left-10,t.top-10).includes(e.actualNode)}))||(null!==(e=t.find((function(e){var t,r=null!==(t=function(e){Si()
var t=i._tree[0]._grid,r=new n.DOMRect(0,0,n.innerWidth,n.innerHeight)
if(t)for(var a=0;a<t.cells.length;a++){var o=t.cells[a]
if(o)for(var u=0;u<o.length;u++){var s=o[u]
if(s)for(var l=0;l<s.length;l++){var c=s[l],d=vi(c.boundingClientRect,r)
if("html"!==c.props.nodeName&&c!==e&&"none"!==c.getComputedStylePropertyValue("pointer-events")&&d)return{vNode:c,rect:d}}}}}(e))&&void 0!==t?t:{},o=r.vNode,u=r.rect
return!!o&&!a.elementsFromPoint(u.left+1,u.top+1).includes(o.actualNode)})))&&void 0!==e?e:null):null}))
function Vi(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.skipAncestors,r=t.isAncestor
return n?Ui(e,r):Wi(e,r)}var Ui=zr((function(e,t){if(e.hasAttr("inert"))return!0
if(!t&&e.actualNode){var n=$i()
if(n&&!Ro(n,e))return!0}return!1})),Wi=zr((function(e,t){return!!Ui(e,t)||!!e.parent&&Wi(e.parent,!0)})),Gi=["button","command","fieldset","keygen","optgroup","option","select","textarea","input"],Ki=function(e){var t,n=um(e).vNode
if(t=n.props.nodeName,Gi.includes(t)&&n.hasAttr("disabled")||Vi(n))return!0
for(var r=n.parent,a=[],o=!1;r&&r.shadowId===n.shadowId&&!o&&(a.push(r),"legend"!==r.props.nodeName);){if(void 0!==r._inDisabledFieldset){o=r._inDisabledFieldset
break}"fieldset"===r.props.nodeName&&r.hasAttr("disabled")&&(o=!0),r=r.parent}return a.forEach((function(e){return e._inDisabledFieldset=o})),!!o||"area"!==n.props.nodeName&&!!n.actualNode&&ai(n)},Yi=/^\/\#/,Qi=/^#[!/]/
function Xi(e){var t,r=e.getAttribute("href")
if(!r||"#"===r)return!1
if(Yi.test(r))return!0
var a=e.hash,o=e.protocol,i=e.hostname,u=e.port,s=e.pathname
if(Qi.test(a))return!1
if("#"===r.charAt(0))return!0
if("string"!=typeof(null===(t=n.location)||void 0===t?void 0:t.origin)||-1===n.location.origin.indexOf("://"))return null
var l,c=n.location.origin+n.location.pathname
return l=i?"".concat(o,"//").concat(i).concat(u?":".concat(u):""):n.location.origin,(l+=s?("/"!==s[0]?"/":"")+s:n.location.pathname)===c}var Zi=function(e,t){var n=e.getAttribute(t)
if(!n)return null
if("href"===t&&!Xi(e))return null;-1!==n.indexOf("#")&&(n=decodeURIComponent(n.substr(n.indexOf("#")+1)))
var r=a.getElementById(n)
return r||((r=a.getElementsByName(n)).length?r[0]:null)}
function Ji(e,t){Si()
for(var r=Math.max(e._stackingOrder.length,t._stackingOrder.length),a=0;a<r;a++){if(void 0===t._stackingOrder[a])return-1
if(void 0===e._stackingOrder[a])return 1
if(t._stackingOrder[a].stackLevel>e._stackingOrder[a].stackLevel)return 1
if(t._stackingOrder[a].stackLevel<e._stackingOrder[a].stackLevel)return-1
if(t._stackingOrder[a].treeOrder!==e._stackingOrder[a].treeOrder)return t._stackingOrder[a].treeOrder-e._stackingOrder[a].treeOrder}var o=e.actualNode,i=t.actualNode
if(o.getRootNode&&o.getRootNode()!==i.getRootNode()){for(var u=[];o;)u.push({root:o.getRootNode(),node:o}),o=o.getRootNode().host
for(;i&&!u.find((function(e){return e.root===i.getRootNode()}));)i=i.getRootNode().host
if((o=u.find((function(e){return e.root===i.getRootNode()})).node)===i)return e.actualNode.getRootNode()!==o.getRootNode()?-1:1}var s=n.Node,l=s.DOCUMENT_POSITION_FOLLOWING,c=s.DOCUMENT_POSITION_CONTAINS,d=s.DOCUMENT_POSITION_CONTAINED_BY,p=o.compareDocumentPosition(i),f=p&l?1:-1,h=p&c||p&d,m=eu(e),D=eu(t)
return m===D||h?f:D-m}function eu(e){return-1!==e.getComputedStylePropertyValue("display").indexOf("inline")?2:tu(e)?1:0}function tu(e){if(!e)return!1
if(void 0!==e._isFloated)return e._isFloated
if("none"!==e.getComputedStylePropertyValue("float"))return e._isFloated=!0,!0
var t=tu(e.parent)
return e._isFloated=t,t}function nu(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=yi(t),o=e.getCellFromPoint(r)||[],i=Math.floor(r.x),u=Math.floor(r.y),s=o.filter((function(e){return e.clientRects.some((function(e){var t=e.left,n=e.top
return i<Math.floor(t+e.width)&&i>=Math.floor(t)&&u<Math.floor(n+e.height)&&u>=Math.floor(n)}))})),l=e.container
return l&&(s=nu(l._grid,l.boundingClientRect,!0).concat(s)),n||(s=s.sort(Ji).map((function(e){return e.actualNode})).concat(a.documentElement).filter((function(e,t,n){return n.indexOf(e)===t}))),s}var ru=function(e){Si()
var t=pa(e),n=t._grid
return n?nu(n,t.boundingClientRect):[]},au=function(e){return km(e,"*").filter((function(e){var t=e.isFocusable,n=e.actualNode.getAttribute("tabindex")
return(n=n&&!isNaN(parseInt(n,10))?parseInt(n):null)?t&&n>=0:t}))},ou=function(e){var t=um(e).vNode
if(!t||Ki(t))return!1
switch(t.props.nodeName){case"a":case"area":if(t.hasAttr("href"))return!0
break
case"input":return"hidden"!==t.props.type
case"textarea":case"select":case"summary":case"button":return!0
case"details":return!km(t,"summary").length}return!1}
function iu(e){var t=um(e).vNode
if(1!==t.props.nodeType)return!1
if(Ki(t))return!1
if(ou(t))return!0
var n=t.attr("tabindex")
return!(!n||isNaN(parseInt(n,10)))}function uu(e){var t=um(e).vNode
return 1===t.props.nodeType&&!(parseInt(t.attr("tabindex",10))<=-1)&&iu(t)}var su=zr((function(e){var t=e.boundingClientRect,n=Hi(e).filter((function(t){return Ci(e,t)&&"none"!==t.getComputedStylePropertyValue("pointer-events")&&!function(e,t){return e.actualNode.contains(t.actualNode)&&!uu(t)}(e,t)}))
return n.length?xi(t,n.map((function(e){return e.boundingClientRect}))):[t]})),lu=zr((function(e,t){return function(e,t){return e.reduce((function(e,n){var r=bi(t,e)
return r!==bi(t,n)?r?e:n:e.width*e.height>n.width*n.height?e:n}))}(su(e),t)})),cu={}
se(cu,{accessibleText:function(){return pu},accessibleTextVirtual:function(){return Ss},autocomplete:function(){return js},formControlValue:function(){return bs},formControlValueMethods:function(){return vs},hasUnicode:function(){return Rs},isHumanInterpretable:function(){return Ms},isIconLigature:function(){return Bs},isValidAutocomplete:function(){return Is},label:function(){return Hs},labelText:function(){return Es},labelVirtual:function(){return Ls},nativeElementType:function(){return zs},nativeTextAlternative:function(){return Ts},nativeTextMethods:function(){return ks},removeUnicode:function(){return Os},sanitize:function(){return Ru},subtreeText:function(){return ws},titleText:function(){return ns},unsupported:function(){return os},visible:function(){return qs},visibleTextNodes:function(){return $s},visibleVirtual:function(){return ss}})
var du=function(e,t){e=e.actualNode||e
try{var n=Io(e),r=[],a=e.getAttribute(t)
if(a){a=ih(a)
for(var o=0;o<a.length;o++)r.push(n.getElementById(a[o]))}return r}catch(e){throw new TypeError("Cannot resolve id references for non-DOM nodes")}},pu=function(e,t){return Ss(pa(e),t)},fu=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=um(e).vNode
return 1!==(null==n?void 0:n.props.nodeType)||1!==n.props.nodeType||t.inLabelledByContext||t.inControlContext||!n.attr("aria-labelledby")?"":du(n,"aria-labelledby").filter((function(e){return e})).reduce((function(e,r){var a=pu(r,z({inLabelledByContext:!0,startNode:t.startNode||n},t))
return e?"".concat(e," ").concat(a):a}),"")}
function hu(e){var t=um(e).vNode
return 1!==(null==t?void 0:t.props.nodeType)?"":t.attr("aria-label")||""}var mu={"aria-activedescendant":{type:"idref",allowEmpty:!0},"aria-atomic":{type:"boolean",global:!0},"aria-autocomplete":{type:"nmtoken",values:["inline","list","both","none"]},"aria-braillelabel":{type:"string",allowEmpty:!0,global:!0},"aria-brailleroledescription":{type:"string",allowEmpty:!0,global:!0},"aria-busy":{type:"boolean",global:!0},"aria-checked":{type:"nmtoken",values:["false","mixed","true","undefined"]},"aria-colcount":{type:"int",minValue:-1},"aria-colindex":{type:"int",minValue:1},"aria-colspan":{type:"int",minValue:1},"aria-controls":{type:"idrefs",allowEmpty:!0,global:!0},"aria-current":{type:"nmtoken",allowEmpty:!0,values:["page","step","location","date","time","true","false"],global:!0},"aria-describedby":{type:"idrefs",allowEmpty:!0,global:!0},"aria-description":{type:"string",allowEmpty:!0,global:!0},"aria-details":{type:"idref",allowEmpty:!0,global:!0},"aria-disabled":{type:"boolean",global:!0},"aria-dropeffect":{type:"nmtokens",values:["copy","execute","link","move","none","popup"],global:!0},"aria-errormessage":{type:"idref",allowEmpty:!0,global:!0},"aria-expanded":{type:"nmtoken",values:["true","false","undefined"]},"aria-flowto":{type:"idrefs",allowEmpty:!0,global:!0},"aria-grabbed":{type:"nmtoken",values:["true","false","undefined"],global:!0},"aria-haspopup":{type:"nmtoken",allowEmpty:!0,values:["true","false","menu","listbox","tree","grid","dialog"],global:!0},"aria-hidden":{type:"nmtoken",values:["true","false","undefined"],global:!0},"aria-invalid":{type:"nmtoken",values:["grammar","false","spelling","true"],global:!0},"aria-keyshortcuts":{type:"string",allowEmpty:!0,global:!0},"aria-label":{type:"string",allowEmpty:!0,global:!0},"aria-labelledby":{type:"idrefs",allowEmpty:!0,global:!0},"aria-level":{type:"int",minValue:1},"aria-live":{type:"nmtoken",values:["assertive","off","polite"],global:!0},"aria-modal":{type:"boolean"},"aria-multiline":{type:"boolean"},"aria-multiselectable":{type:"boolean"},"aria-orientation":{type:"nmtoken",values:["horizontal","undefined","vertical"]},"aria-owns":{type:"idrefs",allowEmpty:!0,global:!0},"aria-placeholder":{type:"string",allowEmpty:!0},"aria-posinset":{type:"int",minValue:1},"aria-pressed":{type:"nmtoken",values:["false","mixed","true","undefined"]},"aria-readonly":{type:"boolean"},"aria-relevant":{type:"nmtokens",values:["additions","all","removals","text"],global:!0},"aria-required":{type:"boolean"},"aria-roledescription":{type:"string",allowEmpty:!0,global:!0},"aria-rowcount":{type:"int",minValue:-1},"aria-rowindex":{type:"int",minValue:1},"aria-rowspan":{type:"int",minValue:0},"aria-selected":{type:"nmtoken",values:["false","true","undefined"]},"aria-setsize":{type:"int",minValue:-1},"aria-sort":{type:"nmtoken",values:["ascending","descending","none","other"]},"aria-valuemax":{type:"decimal"},"aria-valuemin":{type:"decimal"},"aria-valuenow":{type:"decimal"},"aria-valuetext":{type:"string",allowEmpty:!0}},Du={alert:{type:"widget",allowedAttrs:["aria-expanded"],superclassRole:["section"]},alertdialog:{type:"widget",allowedAttrs:["aria-expanded","aria-modal"],superclassRole:["alert","dialog"],accessibleNameRequired:!0},application:{type:"landmark",allowedAttrs:["aria-activedescendant","aria-expanded"],superclassRole:["structure"],accessibleNameRequired:!0},article:{type:"structure",allowedAttrs:["aria-posinset","aria-setsize","aria-expanded"],superclassRole:["document"]},banner:{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},blockquote:{type:"structure",superclassRole:["section"]},button:{type:"widget",allowedAttrs:["aria-expanded","aria-pressed"],superclassRole:["command"],accessibleNameRequired:!0,nameFromContent:!0,childrenPresentational:!0},caption:{type:"structure",requiredContext:["figure","table","grid","treegrid"],superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},cell:{type:"structure",requiredContext:["row"],allowedAttrs:["aria-colindex","aria-colspan","aria-rowindex","aria-rowspan","aria-expanded"],superclassRole:["section"],nameFromContent:!0},checkbox:{type:"widget",requiredAttrs:["aria-checked"],allowedAttrs:["aria-readonly","aria-expanded","aria-required"],superclassRole:["input"],accessibleNameRequired:!0,nameFromContent:!0,childrenPresentational:!0},code:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},columnheader:{type:"structure",requiredContext:["row"],allowedAttrs:["aria-sort","aria-colindex","aria-colspan","aria-expanded","aria-readonly","aria-required","aria-rowindex","aria-rowspan","aria-selected"],superclassRole:["cell","gridcell","sectionhead"],accessibleNameRequired:!1,nameFromContent:!0},combobox:{type:"widget",requiredAttrs:["aria-expanded","aria-controls"],allowedAttrs:["aria-owns","aria-autocomplete","aria-readonly","aria-required","aria-activedescendant","aria-orientation"],superclassRole:["select"],accessibleNameRequired:!0},command:{type:"abstract",superclassRole:["widget"]},complementary:{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},composite:{type:"abstract",superclassRole:["widget"]},contentinfo:{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},comment:{type:"structure",allowedAttrs:["aria-level","aria-posinset","aria-setsize"],superclassRole:["article"]},definition:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"]},deletion:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},dialog:{type:"widget",allowedAttrs:["aria-expanded","aria-modal"],superclassRole:["window"],accessibleNameRequired:!0},directory:{type:"structure",deprecated:!0,allowedAttrs:["aria-expanded"],superclassRole:["list"],nameFromContent:!0},document:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["structure"]},emphasis:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},feed:{type:"structure",requiredOwned:["article"],allowedAttrs:["aria-expanded"],superclassRole:["list"]},figure:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"],nameFromContent:!0},form:{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},grid:{type:"composite",requiredOwned:["rowgroup","row"],allowedAttrs:["aria-level","aria-multiselectable","aria-readonly","aria-activedescendant","aria-colcount","aria-expanded","aria-rowcount"],superclassRole:["composite","table"],accessibleNameRequired:!1},gridcell:{type:"widget",requiredContext:["row"],allowedAttrs:["aria-readonly","aria-required","aria-selected","aria-colindex","aria-colspan","aria-expanded","aria-rowindex","aria-rowspan"],superclassRole:["cell","widget"],nameFromContent:!0},group:{type:"structure",allowedAttrs:["aria-activedescendant","aria-expanded"],superclassRole:["section"]},heading:{type:"structure",requiredAttrs:["aria-level"],allowedAttrs:["aria-expanded"],superclassRole:["sectionhead"],accessibleNameRequired:!1,nameFromContent:!0},img:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"],accessibleNameRequired:!0,childrenPresentational:!0},input:{type:"abstract",superclassRole:["widget"]},insertion:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},landmark:{type:"abstract",superclassRole:["section"]},link:{type:"widget",allowedAttrs:["aria-expanded"],superclassRole:["command"],accessibleNameRequired:!0,nameFromContent:!0},list:{type:"structure",requiredOwned:["listitem"],allowedAttrs:["aria-expanded"],superclassRole:["section"]},listbox:{type:"widget",requiredOwned:["group","option"],allowedAttrs:["aria-multiselectable","aria-readonly","aria-required","aria-activedescendant","aria-expanded","aria-orientation"],superclassRole:["select"],accessibleNameRequired:!0},listitem:{type:"structure",requiredContext:["list"],allowedAttrs:["aria-level","aria-posinset","aria-setsize","aria-expanded"],superclassRole:["section"],nameFromContent:!0},log:{type:"widget",allowedAttrs:["aria-expanded"],superclassRole:["section"]},main:{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},marquee:{type:"widget",allowedAttrs:["aria-expanded"],superclassRole:["section"]},math:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"],childrenPresentational:!0},menu:{type:"composite",requiredOwned:["group","menuitemradio","menuitem","menuitemcheckbox","menu","separator"],allowedAttrs:["aria-activedescendant","aria-expanded","aria-orientation"],superclassRole:["select"]},menubar:{type:"composite",requiredOwned:["group","menuitemradio","menuitem","menuitemcheckbox","menu","separator"],allowedAttrs:["aria-activedescendant","aria-expanded","aria-orientation"],superclassRole:["menu"]},menuitem:{type:"widget",requiredContext:["menu","menubar","group"],allowedAttrs:["aria-posinset","aria-setsize","aria-expanded"],superclassRole:["command"],accessibleNameRequired:!0,nameFromContent:!0},menuitemcheckbox:{type:"widget",requiredContext:["menu","menubar","group"],requiredAttrs:["aria-checked"],allowedAttrs:["aria-expanded","aria-posinset","aria-readonly","aria-setsize"],superclassRole:["checkbox","menuitem"],accessibleNameRequired:!0,nameFromContent:!0,childrenPresentational:!0},menuitemradio:{type:"widget",requiredContext:["menu","menubar","group"],requiredAttrs:["aria-checked"],allowedAttrs:["aria-expanded","aria-posinset","aria-readonly","aria-setsize"],superclassRole:["menuitemcheckbox","radio"],accessibleNameRequired:!0,nameFromContent:!0,childrenPresentational:!0},meter:{type:"structure",requiredAttrs:["aria-valuenow"],allowedAttrs:["aria-valuemax","aria-valuemin","aria-valuetext"],superclassRole:["range"],accessibleNameRequired:!0,childrenPresentational:!0},mark:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},navigation:{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},none:{type:"structure",superclassRole:["structure"],prohibitedAttrs:["aria-label","aria-labelledby"]},note:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"]},option:{type:"widget",requiredContext:["group","listbox"],allowedAttrs:["aria-selected","aria-checked","aria-posinset","aria-setsize"],superclassRole:["input"],accessibleNameRequired:!0,nameFromContent:!0,childrenPresentational:!0},paragraph:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},presentation:{type:"structure",superclassRole:["structure"],prohibitedAttrs:["aria-label","aria-labelledby"]},progressbar:{type:"widget",allowedAttrs:["aria-expanded","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext"],superclassRole:["range"],accessibleNameRequired:!0,childrenPresentational:!0},radio:{type:"widget",requiredAttrs:["aria-checked"],allowedAttrs:["aria-posinset","aria-setsize","aria-required"],superclassRole:["input"],accessibleNameRequired:!0,nameFromContent:!0,childrenPresentational:!0},radiogroup:{type:"composite",allowedAttrs:["aria-readonly","aria-required","aria-activedescendant","aria-expanded","aria-orientation"],superclassRole:["select"],accessibleNameRequired:!1},range:{type:"abstract",superclassRole:["widget"]},region:{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"],accessibleNameRequired:!1},roletype:{type:"abstract",superclassRole:[]},row:{type:"structure",requiredContext:["grid","rowgroup","table","treegrid"],requiredOwned:["cell","columnheader","gridcell","rowheader"],allowedAttrs:["aria-colindex","aria-level","aria-rowindex","aria-selected","aria-activedescendant","aria-expanded","aria-posinset","aria-setsize"],superclassRole:["group","widget"],nameFromContent:!0},rowgroup:{type:"structure",requiredContext:["grid","table","treegrid"],requiredOwned:["row"],superclassRole:["structure"],nameFromContent:!0},rowheader:{type:"structure",requiredContext:["row"],allowedAttrs:["aria-sort","aria-colindex","aria-colspan","aria-expanded","aria-readonly","aria-required","aria-rowindex","aria-rowspan","aria-selected"],superclassRole:["cell","gridcell","sectionhead"],accessibleNameRequired:!1,nameFromContent:!0},scrollbar:{type:"widget",requiredAttrs:["aria-valuenow"],allowedAttrs:["aria-controls","aria-orientation","aria-valuemax","aria-valuemin","aria-valuetext"],superclassRole:["range"],childrenPresentational:!0},search:{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},searchbox:{type:"widget",allowedAttrs:["aria-activedescendant","aria-autocomplete","aria-multiline","aria-placeholder","aria-readonly","aria-required"],superclassRole:["textbox"],accessibleNameRequired:!0},section:{type:"abstract",superclassRole:["structure"],nameFromContent:!0},sectionhead:{type:"abstract",superclassRole:["structure"],nameFromContent:!0},select:{type:"abstract",superclassRole:["composite","group"]},separator:{type:"structure",requiredAttrs:["aria-valuenow"],allowedAttrs:["aria-valuemax","aria-valuemin","aria-orientation","aria-valuetext"],superclassRole:["structure","widget"],childrenPresentational:!0},slider:{type:"widget",requiredAttrs:["aria-valuenow"],allowedAttrs:["aria-valuemax","aria-valuemin","aria-orientation","aria-readonly","aria-required","aria-valuetext"],superclassRole:["input","range"],accessibleNameRequired:!0,childrenPresentational:!0},spinbutton:{type:"widget",allowedAttrs:["aria-valuemax","aria-valuemin","aria-readonly","aria-required","aria-activedescendant","aria-valuetext","aria-valuenow"],superclassRole:["composite","input","range"],accessibleNameRequired:!0},status:{type:"widget",allowedAttrs:["aria-expanded"],superclassRole:["section"]},strong:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},structure:{type:"abstract",superclassRole:["roletype"]},subscript:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},superscript:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},switch:{type:"widget",requiredAttrs:["aria-checked"],allowedAttrs:["aria-expanded","aria-readonly","aria-required"],superclassRole:["checkbox"],accessibleNameRequired:!0,nameFromContent:!0,childrenPresentational:!0},suggestion:{type:"structure",requiredOwned:["insertion","deletion"],superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},tab:{type:"widget",requiredContext:["tablist"],allowedAttrs:["aria-posinset","aria-selected","aria-setsize","aria-expanded"],superclassRole:["sectionhead","widget"],nameFromContent:!0,childrenPresentational:!0},table:{type:"structure",requiredOwned:["rowgroup","row"],allowedAttrs:["aria-colcount","aria-rowcount","aria-expanded"],superclassRole:["section"],accessibleNameRequired:!1,nameFromContent:!0},tablist:{type:"composite",requiredOwned:["tab"],allowedAttrs:["aria-level","aria-multiselectable","aria-orientation","aria-activedescendant","aria-expanded"],superclassRole:["composite"]},tabpanel:{type:"widget",allowedAttrs:["aria-expanded"],superclassRole:["section"],accessibleNameRequired:!1},term:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"],nameFromContent:!0},text:{type:"structure",superclassRole:["section"],nameFromContent:!0},textbox:{type:"widget",allowedAttrs:["aria-activedescendant","aria-autocomplete","aria-multiline","aria-placeholder","aria-readonly","aria-required"],superclassRole:["input"],accessibleNameRequired:!0},time:{type:"structure",superclassRole:["section"]},timer:{type:"widget",allowedAttrs:["aria-expanded"],superclassRole:["status"]},toolbar:{type:"structure",allowedAttrs:["aria-orientation","aria-activedescendant","aria-expanded"],superclassRole:["group"],accessibleNameRequired:!0},tooltip:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"],nameFromContent:!0},tree:{type:"composite",requiredOwned:["group","treeitem"],allowedAttrs:["aria-multiselectable","aria-required","aria-activedescendant","aria-expanded","aria-orientation"],superclassRole:["select"],accessibleNameRequired:!1},treegrid:{type:"composite",requiredOwned:["rowgroup","row"],allowedAttrs:["aria-activedescendant","aria-colcount","aria-expanded","aria-level","aria-multiselectable","aria-orientation","aria-readonly","aria-required","aria-rowcount"],superclassRole:["grid","tree"],accessibleNameRequired:!1},treeitem:{type:"widget",requiredContext:["group","tree"],allowedAttrs:["aria-checked","aria-expanded","aria-level","aria-posinset","aria-selected","aria-setsize"],superclassRole:["listitem","option"],accessibleNameRequired:!0,nameFromContent:!0},widget:{type:"abstract",superclassRole:["roletype"]},window:{type:"abstract",superclassRole:["roletype"]}},gu={ariaAttrs:mu,ariaRoles:z({},Du,{"doc-abstract":{type:"section",allowedAttrs:["aria-expanded"],superclassRole:["section"]},"doc-acknowledgments":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-afterword":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-appendix":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-backlink":{type:"link",allowedAttrs:["aria-expanded"],nameFromContent:!0,superclassRole:["link"]},"doc-biblioentry":{type:"listitem",allowedAttrs:["aria-expanded","aria-level","aria-posinset","aria-setsize"],superclassRole:["listitem"],deprecated:!0},"doc-bibliography":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-biblioref":{type:"link",allowedAttrs:["aria-expanded"],nameFromContent:!0,superclassRole:["link"]},"doc-chapter":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-colophon":{type:"section",allowedAttrs:["aria-expanded"],superclassRole:["section"]},"doc-conclusion":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-cover":{type:"img",allowedAttrs:["aria-expanded"],superclassRole:["img"]},"doc-credit":{type:"section",allowedAttrs:["aria-expanded"],superclassRole:["section"]},"doc-credits":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-dedication":{type:"section",allowedAttrs:["aria-expanded"],superclassRole:["section"]},"doc-endnote":{type:"listitem",allowedAttrs:["aria-expanded","aria-level","aria-posinset","aria-setsize"],superclassRole:["listitem"],deprecated:!0},"doc-endnotes":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-epigraph":{type:"section",allowedAttrs:["aria-expanded"],superclassRole:["section"]},"doc-epilogue":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-errata":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-example":{type:"section",allowedAttrs:["aria-expanded"],superclassRole:["section"]},"doc-footnote":{type:"section",allowedAttrs:["aria-expanded"],superclassRole:["section"]},"doc-foreword":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-glossary":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-glossref":{type:"link",allowedAttrs:["aria-expanded"],nameFromContent:!0,superclassRole:["link"]},"doc-index":{type:"navigation",allowedAttrs:["aria-expanded"],superclassRole:["navigation"]},"doc-introduction":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-noteref":{type:"link",allowedAttrs:["aria-expanded"],nameFromContent:!0,superclassRole:["link"]},"doc-notice":{type:"note",allowedAttrs:["aria-expanded"],superclassRole:["note"]},"doc-pagebreak":{type:"separator",allowedAttrs:["aria-expanded","aria-orientation"],superclassRole:["separator"],childrenPresentational:!0},"doc-pagelist":{type:"navigation",allowedAttrs:["aria-expanded"],superclassRole:["navigation"]},"doc-part":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-preface":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-prologue":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-pullquote":{type:"none",superclassRole:["none"]},"doc-qna":{type:"section",allowedAttrs:["aria-expanded"],superclassRole:["section"]},"doc-subtitle":{type:"sectionhead",allowedAttrs:["aria-expanded"],superclassRole:["sectionhead"]},"doc-tip":{type:"note",allowedAttrs:["aria-expanded"],superclassRole:["note"]},"doc-toc":{type:"navigation",allowedAttrs:["aria-expanded"],superclassRole:["navigation"]}},{"graphics-document":{type:"structure",superclassRole:["document"],accessibleNameRequired:!0},"graphics-object":{type:"structure",superclassRole:["group"],nameFromContent:!0},"graphics-symbol":{type:"structure",superclassRole:["img"],accessibleNameRequired:!0,childrenPresentational:!0}}),htmlElms:{a:{variant:{href:{matches:"[href]",contentTypes:["interactive","phrasing","flow"],allowedRoles:["button","checkbox","menuitem","menuitemcheckbox","menuitemradio","option","radio","switch","tab","treeitem","doc-backlink","doc-biblioref","doc-glossref","doc-noteref"],namingMethods:["subtreeText"]},default:{contentTypes:["phrasing","flow"],allowedRoles:!0}}},abbr:{contentTypes:["phrasing","flow"],allowedRoles:!0},address:{contentTypes:["flow"],allowedRoles:!0},area:{variant:{href:{matches:"[href]",allowedRoles:!1},default:{allowedRoles:["button","link"]}},contentTypes:["phrasing","flow"],namingMethods:["altText"]},article:{contentTypes:["sectioning","flow"],allowedRoles:["feed","presentation","none","document","application","main","region"],shadowRoot:!0},aside:{contentTypes:["sectioning","flow"],allowedRoles:["feed","note","presentation","none","region","search","doc-dedication","doc-example","doc-footnote","doc-glossary","doc-pullquote","doc-tip"]},audio:{variant:{controls:{matches:"[controls]",contentTypes:["interactive","embedded","phrasing","flow"]},default:{contentTypes:["embedded","phrasing","flow"]}},allowedRoles:["application"],chromiumRole:"Audio"},b:{contentTypes:["phrasing","flow"],allowedRoles:!0},base:{allowedRoles:!1,noAriaAttrs:!0},bdi:{contentTypes:["phrasing","flow"],allowedRoles:!0},bdo:{contentTypes:["phrasing","flow"],allowedRoles:!0},blockquote:{contentTypes:["flow"],allowedRoles:!0,shadowRoot:!0},body:{allowedRoles:!1,shadowRoot:!0},br:{contentTypes:["phrasing","flow"],allowedRoles:["presentation","none"],namingMethods:["titleText","singleSpace"]},button:{contentTypes:["interactive","phrasing","flow"],allowedRoles:["checkbox","combobox","link","menuitem","menuitemcheckbox","menuitemradio","option","radio","switch","tab"],namingMethods:["subtreeText"]},canvas:{allowedRoles:!0,contentTypes:["embedded","phrasing","flow"],chromiumRole:"Canvas"},caption:{allowedRoles:!1},cite:{contentTypes:["phrasing","flow"],allowedRoles:!0},code:{contentTypes:["phrasing","flow"],allowedRoles:!0},col:{allowedRoles:!1,noAriaAttrs:!0},colgroup:{allowedRoles:!1,noAriaAttrs:!0},data:{contentTypes:["phrasing","flow"],allowedRoles:!0},datalist:{contentTypes:["phrasing","flow"],allowedRoles:!1,noAriaAttrs:!0,implicitAttrs:{"aria-multiselectable":"false"}},dd:{allowedRoles:!1},del:{contentTypes:["phrasing","flow"],allowedRoles:!0},dfn:{contentTypes:["phrasing","flow"],allowedRoles:!0},details:{contentTypes:["interactive","flow"],allowedRoles:!1},dialog:{contentTypes:["flow"],allowedRoles:["alertdialog"]},div:{contentTypes:["flow"],allowedRoles:!0,shadowRoot:!0},dl:{contentTypes:["flow"],allowedRoles:["group","list","presentation","none"],chromiumRole:"DescriptionList"},dt:{allowedRoles:["listitem"]},em:{contentTypes:["phrasing","flow"],allowedRoles:!0},embed:{contentTypes:["interactive","embedded","phrasing","flow"],allowedRoles:["application","document","img","presentation","none"],chromiumRole:"EmbeddedObject"},fieldset:{contentTypes:["flow"],allowedRoles:["none","presentation","radiogroup"],namingMethods:["fieldsetLegendText"]},figcaption:{allowedRoles:["group","none","presentation"]},figure:{contentTypes:["flow"],allowedRoles:!0,namingMethods:["figureText","titleText"]},footer:{contentTypes:["flow"],allowedRoles:["group","none","presentation","doc-footnote"],shadowRoot:!0},form:{contentTypes:["flow"],allowedRoles:["search","none","presentation"]},h1:{contentTypes:["heading","flow"],allowedRoles:["none","presentation","tab","doc-subtitle"],shadowRoot:!0,implicitAttrs:{"aria-level":"1"}},h2:{contentTypes:["heading","flow"],allowedRoles:["none","presentation","tab","doc-subtitle"],shadowRoot:!0,implicitAttrs:{"aria-level":"2"}},h3:{contentTypes:["heading","flow"],allowedRoles:["none","presentation","tab","doc-subtitle"],shadowRoot:!0,implicitAttrs:{"aria-level":"3"}},h4:{contentTypes:["heading","flow"],allowedRoles:["none","presentation","tab","doc-subtitle"],shadowRoot:!0,implicitAttrs:{"aria-level":"4"}},h5:{contentTypes:["heading","flow"],allowedRoles:["none","presentation","tab","doc-subtitle"],shadowRoot:!0,implicitAttrs:{"aria-level":"5"}},h6:{contentTypes:["heading","flow"],allowedRoles:["none","presentation","tab","doc-subtitle"],shadowRoot:!0,implicitAttrs:{"aria-level":"6"}},head:{allowedRoles:!1,noAriaAttrs:!0},header:{contentTypes:["flow"],allowedRoles:["group","none","presentation","doc-footnote"],shadowRoot:!0},hgroup:{contentTypes:["heading","flow"],allowedRoles:!0},hr:{contentTypes:["flow"],allowedRoles:["none","presentation","doc-pagebreak"],namingMethods:["titleText","singleSpace"]},html:{allowedRoles:!1,noAriaAttrs:!0},i:{contentTypes:["phrasing","flow"],allowedRoles:!0},iframe:{contentTypes:["interactive","embedded","phrasing","flow"],allowedRoles:["application","document","img","none","presentation"],chromiumRole:"Iframe"},img:{variant:{nonEmptyAlt:{matches:[{attributes:{alt:"/.+/"}},{hasAccessibleName:!0}],allowedRoles:["button","checkbox","link","menuitem","menuitemcheckbox","menuitemradio","meter","option","progressbar","radio","scrollbar","separator","slider","switch","tab","treeitem","doc-cover"]},usemap:{matches:"[usemap]",contentTypes:["interactive","embedded","flow"]},default:{allowedRoles:["presentation","none"],contentTypes:["embedded","flow"]}},namingMethods:["altText"]},input:{variant:{button:{matches:{properties:{type:"button"}},allowedRoles:["checkbox","combobox","link","menuitem","menuitemcheckbox","menuitemradio","option","radio","switch","tab"]},buttonType:{matches:{properties:{type:["button","submit","reset"]}},namingMethods:["valueText","titleText","buttonDefaultText"]},checkboxPressed:{matches:{properties:{type:"checkbox"},attributes:{"aria-pressed":"/.*/"}},allowedRoles:["button","menuitemcheckbox","option","switch"],implicitAttrs:{"aria-checked":"false"}},checkbox:{matches:{properties:{type:"checkbox"},attributes:{"aria-pressed":null}},allowedRoles:["menuitemcheckbox","option","switch"],implicitAttrs:{"aria-checked":"false"}},noRoles:{matches:{properties:{type:["color","date","datetime-local","file","month","number","password","range","reset","submit","time","week"]}},allowedRoles:!1},hidden:{matches:{properties:{type:"hidden"}},contentTypes:["flow"],allowedRoles:!1,noAriaAttrs:!0},image:{matches:{properties:{type:"image"}},allowedRoles:["link","menuitem","menuitemcheckbox","menuitemradio","radio","switch"],namingMethods:["altText","valueText","labelText","titleText","buttonDefaultText"]},radio:{matches:{properties:{type:"radio"}},allowedRoles:["menuitemradio"],implicitAttrs:{"aria-checked":"false"}},textWithList:{matches:{properties:{type:"text"},attributes:{list:"/.*/"}},allowedRoles:!1},default:{contentTypes:["interactive","flow"],allowedRoles:["combobox","searchbox","spinbutton"],implicitAttrs:{"aria-valuenow":""},namingMethods:["labelText","placeholderText"]}}},ins:{contentTypes:["phrasing","flow"],allowedRoles:!0},kbd:{contentTypes:["phrasing","flow"],allowedRoles:!0},label:{contentTypes:["interactive","phrasing","flow"],allowedRoles:!1,chromiumRole:"Label"},legend:{allowedRoles:!1},li:{allowedRoles:["menuitem","menuitemcheckbox","menuitemradio","option","none","presentation","radio","separator","tab","treeitem","doc-biblioentry","doc-endnote"],implicitAttrs:{"aria-setsize":"1","aria-posinset":"1"}},link:{contentTypes:["phrasing","flow"],allowedRoles:!1,noAriaAttrs:!0},main:{contentTypes:["flow"],allowedRoles:!1,shadowRoot:!0},map:{contentTypes:["phrasing","flow"],allowedRoles:!1,noAriaAttrs:!0},math:{contentTypes:["embedded","phrasing","flow"],allowedRoles:!1},mark:{contentTypes:["phrasing","flow"],allowedRoles:!0},menu:{contentTypes:["flow"],allowedRoles:["directory","group","listbox","menu","menubar","none","presentation","radiogroup","tablist","toolbar","tree"]},meta:{variant:{itemprop:{matches:"[itemprop]",contentTypes:["phrasing","flow"]}},allowedRoles:!1,noAriaAttrs:!0},meter:{contentTypes:["phrasing","flow"],allowedRoles:!1,chromiumRole:"progressbar"},nav:{contentTypes:["sectioning","flow"],allowedRoles:["doc-index","doc-pagelist","doc-toc","menu","menubar","none","presentation","tablist"],shadowRoot:!0},noscript:{contentTypes:["phrasing","flow"],allowedRoles:!1,noAriaAttrs:!0},object:{variant:{usemap:{matches:"[usemap]",contentTypes:["interactive","embedded","phrasing","flow"]},default:{contentTypes:["embedded","phrasing","flow"]}},allowedRoles:["application","document","img"],chromiumRole:"PluginObject"},ol:{contentTypes:["flow"],allowedRoles:["directory","group","listbox","menu","menubar","none","presentation","radiogroup","tablist","toolbar","tree"]},optgroup:{allowedRoles:!1},option:{allowedRoles:!1,implicitAttrs:{"aria-selected":"false"}},output:{contentTypes:["phrasing","flow"],allowedRoles:!0,namingMethods:["subtreeText"]},p:{contentTypes:["flow"],allowedRoles:!0,shadowRoot:!0},param:{allowedRoles:!1,noAriaAttrs:!0},picture:{contentTypes:["phrasing","flow"],allowedRoles:!1,noAriaAttrs:!0},pre:{contentTypes:["flow"],allowedRoles:!0},progress:{contentTypes:["phrasing","flow"],allowedRoles:!1,implicitAttrs:{"aria-valuemax":"100","aria-valuemin":"0","aria-valuenow":"0"}},q:{contentTypes:["phrasing","flow"],allowedRoles:!0},rp:{allowedRoles:!0},rt:{allowedRoles:!0},ruby:{contentTypes:["phrasing","flow"],allowedRoles:!0},s:{contentTypes:["phrasing","flow"],allowedRoles:!0},samp:{contentTypes:["phrasing","flow"],allowedRoles:!0},script:{contentTypes:["phrasing","flow"],allowedRoles:!1,noAriaAttrs:!0},search:{contentTypes:["flow"],allowedRoles:["form","group","none","presentation","region","search"]},section:{contentTypes:["sectioning","flow"],allowedRoles:["alert","alertdialog","application","banner","complementary","contentinfo","dialog","document","feed","group","log","main","marquee","navigation","none","note","presentation","search","status","tabpanel","doc-abstract","doc-acknowledgments","doc-afterword","doc-appendix","doc-bibliography","doc-chapter","doc-colophon","doc-conclusion","doc-credit","doc-credits","doc-dedication","doc-endnotes","doc-epigraph","doc-epilogue","doc-errata","doc-example","doc-foreword","doc-glossary","doc-index","doc-introduction","doc-notice","doc-pagelist","doc-part","doc-preface","doc-prologue","doc-pullquote","doc-qna","doc-toc"],shadowRoot:!0},select:{variant:{combobox:{matches:{attributes:{multiple:null,size:[null,"1"]}},allowedRoles:["menu"]},default:{allowedRoles:!1}},contentTypes:["interactive","phrasing","flow"],implicitAttrs:{"aria-valuenow":""},namingMethods:["labelText"]},slot:{contentTypes:["phrasing","flow"],allowedRoles:!1,noAriaAttrs:!0},small:{contentTypes:["phrasing","flow"],allowedRoles:!0},source:{allowedRoles:!1,noAriaAttrs:!0},span:{contentTypes:["phrasing","flow"],allowedRoles:!0,shadowRoot:!0},strong:{contentTypes:["phrasing","flow"],allowedRoles:!0},style:{allowedRoles:!1,noAriaAttrs:!0},svg:{contentTypes:["embedded","phrasing","flow"],allowedRoles:!0,chromiumRole:"SVGRoot",namingMethods:["svgTitleText"]},sub:{contentTypes:["phrasing","flow"],allowedRoles:!0},summary:{allowedRoles:!1,namingMethods:["subtreeText"]},sup:{contentTypes:["phrasing","flow"],allowedRoles:!0},table:{contentTypes:["flow"],allowedRoles:!0,namingMethods:["tableCaptionText","tableSummaryText"]},tbody:{allowedRoles:!0},template:{contentTypes:["phrasing","flow"],allowedRoles:!1,noAriaAttrs:!0},textarea:{contentTypes:["interactive","phrasing","flow"],allowedRoles:!1,implicitAttrs:{"aria-valuenow":"","aria-multiline":"true"},namingMethods:["labelText","placeholderText"]},tfoot:{allowedRoles:!0},thead:{allowedRoles:!0},time:{contentTypes:["phrasing","flow"],allowedRoles:!0},title:{allowedRoles:!1,noAriaAttrs:!0},td:{allowedRoles:!0},th:{allowedRoles:!0},tr:{allowedRoles:!0},track:{allowedRoles:!1,noAriaAttrs:!0},u:{contentTypes:["phrasing","flow"],allowedRoles:!0},ul:{contentTypes:["flow"],allowedRoles:["directory","group","listbox","menu","menubar","none","presentation","radiogroup","tablist","toolbar","tree"]},var:{contentTypes:["phrasing","flow"],allowedRoles:!0},video:{variant:{controls:{matches:"[controls]",contentTypes:["interactive","embedded","phrasing","flow"]},default:{contentTypes:["embedded","phrasing","flow"]}},allowedRoles:["application"],chromiumRole:"video"},wbr:{contentTypes:["phrasing","flow"],allowedRoles:["presentation","none"]}},cssColors:{aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},vu=z({},gu),yu=vu,bu=function(e){var t=yu.ariaRoles[e]
return!!t&&!!t.unsupported},Fu=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.allowAbstract,r=t.flagUnsupported,a=void 0!==r&&r,o=yu.ariaRoles[e],i=bu(e)
return!(!o||a&&i||!n&&"abstract"===o.type)},wu=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.fallback,r=t.abstracts,a=t.dpub
if(1!==(e=e instanceof vr?e:pa(e)).props.nodeType)return null
var o=(e.attr("role")||"").trim().toLowerCase()
return(n?ih(o):[o]).find((function(e){return!(!a&&"doc-"===e.substr(0,4))&&Fu(e,{allowAbstract:r})}))||null},Eu=function(e){return Object.keys(yu.htmlElms).filter((function(t){var n=yu.htmlElms[t]
return n.contentTypes?n.contentTypes.includes(e):!!n.variant&&!(!n.variant.default||!n.variant.default.contentTypes)&&n.variant.default.contentTypes.includes(e)}))},Cu=function(){return da.get("globalAriaAttrs",(function(){return Object.keys(yu.ariaAttrs).filter((function(e){return yu.ariaAttrs[e].global}))}))},xu=zr((function(e){for(var t=[],n=e.rows,r=0,a=n.length;r<a;r++){var o=n[r].cells
t[r]=t[r]||[]
for(var i=0,u=0,s=o.length;u<s;u++)for(var l=0;l<o[u].colSpan;l++){for(var c=o[u].getAttribute("rowspan"),d=0===parseInt(c)||0===o[u].rowspan?n.length:o[u].rowSpan,p=0;p<d;p++){for(t[r+p]=t[r+p]||[];t[r+p][i];)i++
t[r+p][i]=o[u]}i++}}return t})),Au=zr((function(e,t){var n,r
for(t||(t=xu(Lo(e,"table"))),n=0;n<t.length;n++)if(t[n]&&-1!==(r=t[n].indexOf(e)))return{x:r,y:n}}))
function ku(e){var t=um(e),n=t.vNode,r=t.domNode,a=n.attr("scope"),o=n.attr("role")
if(!["td","th"].includes(n.props.nodeName))throw new TypeError("Expected TD or TH element")
if("columnheader"===o)return"col"
if("rowheader"===o)return"row"
if("col"===a||"row"===a)return a
if("th"!==n.props.nodeName)return!1
if(!n.actualNode)return"auto"
var i=xu(Lo(r,"table")),u=Au(r,i)
return i[u.y].every((function(e){return"TH"===e.nodeName.toUpperCase()}))?"col":i.map((function(e){return e[u.x]})).every((function(e){return e&&"TH"===e.nodeName.toUpperCase()}))?"row":"auto"}var Tu=function(e){return-1!==["col","auto"].indexOf(ku(e))},Nu=function(e){return["row","auto"].includes(ku(e))},Ru=function(e){return e?e.replace(/\r\n/g,"\n").replace(/\u00A0/g," ").replace(/[\s]{2,}/g," ").trim():""},Bu=function(){return da.get("sectioningElementSelector",(function(){return Eu("sectioning").map((function(e){return"".concat(e,":not([role])")})).join(", ")+" , main:not([role]), [role=article], [role=complementary], [role=main], [role=navigation], [role=region]"}))}
function Su(e){var t=Ru(fu(e)),n=Ru(hu(e))
return!(!t&&!n)}var _u={a:function(e){return e.hasAttr("href")?"link":null},area:function(e){return e.hasAttr("href")?"link":null},article:"article",aside:"complementary",body:"document",button:"button",datalist:"listbox",dd:"definition",dfn:"term",details:"group",dialog:"dialog",dt:"term",fieldset:"group",figure:"figure",footer:function(e){return _a(e,Bu())?null:"contentinfo"},form:function(e){return Su(e)?"form":null},h1:"heading",h2:"heading",h3:"heading",h4:"heading",h5:"heading",h6:"heading",header:function(e){return _a(e,Bu())?null:"banner"},hr:"separator",img:function(e){var t=e.hasAttr("alt")&&!e.attr("alt"),n=Cu().find((function(t){return e.hasAttr(t)}))
return!t||n||iu(e)?"img":"presentation"},input:function(e){var t
if(e.hasAttr("list")){var n=du(e.actualNode,"list").filter((function(e){return!!e}))[0]
t=n&&"datalist"===n.nodeName.toLowerCase()}switch(e.props.type){case"checkbox":return"checkbox"
case"number":return"spinbutton"
case"radio":return"radio"
case"range":return"slider"
case"search":return t?"combobox":"searchbox"
case"button":case"image":case"reset":case"submit":return"button"
case"text":case"tel":case"url":case"email":case"":return t?"combobox":"textbox"
default:return"textbox"}},li:"listitem",main:"main",math:"math",menu:"list",nav:"navigation",ol:"list",optgroup:"group",option:"option",output:"status",progress:"progressbar",search:"search",section:function(e){return Su(e)?"region":null},select:function(e){return e.hasAttr("multiple")||parseInt(e.attr("size"))>1?"listbox":"combobox"},summary:"button",table:"table",tbody:"rowgroup",td:function(e){var t=_a(e,"table"),n=wu(t)
return["grid","treegrid"].includes(n)?"gridcell":"cell"},textarea:"textbox",tfoot:"rowgroup",th:function(e){return Tu(e)?"columnheader":Nu(e)?"rowheader":void 0},thead:"rowgroup",tr:"row",ul:"list"},Ou=function(e,t){var n=o(t)
if(Array.isArray(t)&&void 0!==e)return t.includes(e)
if("function"===n)return!!t(e)
if(null!=e){if(t instanceof RegExp)return t.test(e)
if(/^\/.*\/$/.test(t)){var r=t.substring(1,t.length-1)
return new RegExp(r).test(e)}}return t===e},Mu=function(e,t){return Ou(!!Ss(e),t)},ju=function(e,t){if("object"!==o(t)||Array.isArray(t)||t instanceof RegExp)throw new Error("Expect matcher to be an object")
return Object.keys(t).every((function(n){return Ou(e(n),t[n])}))},Iu=function(e,t){return e=um(e).vNode,ju((function(t){return e.attr(t)}),t)}
function Pu(e,t){return!!t(e)}var qu=function(e,t){return Ou(wu(e),t)},Lu=function(e,t){return Ou(Yu(e),t)},Hu=function(e,t){return e=um(e).vNode,Ou(e.props.nodeName,t)},zu=function(e,t){return e=um(e).vNode,ju((function(t){return e.props[t]}),t)},$u=function(e,t){return Ou(es(e),t)},Vu={hasAccessibleName:Mu,attributes:Iu,condition:Pu,explicitRole:qu,implicitRole:Lu,nodeName:Hu,properties:zu,semanticRole:$u},Uu=function e(t,n){return t=um(t).vNode,Array.isArray(n)?n.some((function(n){return e(t,n)})):"string"==typeof n?Fa(t,n):Object.keys(n).every((function(e){if(!Vu[e])throw new Error('Unknown matcher type "'.concat(e,'"'))
var r=Vu[e],a=n[e]
return r(t,a)}))},Wu=function(e,t){return Uu(e,t)}
Wu.hasAccessibleName=Mu,Wu.attributes=Iu,Wu.condition=Pu,Wu.explicitRole=qu,Wu.fromDefinition=Uu,Wu.fromFunction=ju,Wu.fromPrimative=Ou,Wu.implicitRole=Lu,Wu.nodeName=Hu,Wu.properties=zu,Wu.semanticRole=$u
var Gu=Wu,Ku=function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).noMatchAccessibleName,n=void 0!==t&&t,r=yu.htmlElms[e.props.nodeName]
if(!r)return{}
if(!r.variant)return r
var a=r.variant,o=q(r,d)
for(var i in a)if(a.hasOwnProperty(i)&&"default"!==i){for(var u=a[i],s=u.matches,l=q(u,p),c=Array.isArray(s)?s:[s],f=0;f<c.length&&n;f++)if(c[f].hasOwnProperty("hasAccessibleName"))return r
if(Gu(e,s))for(var h in l)l.hasOwnProperty(h)&&(o[h]=l[h])}for(var m in a.default)a.default.hasOwnProperty(m)&&void 0===o[m]&&(o[m]=a.default[m])
return o},Yu=function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).chromium,n=e instanceof vr?e:pa(e)
if(e=n.actualNode,!n)throw new ReferenceError("Cannot get implicit role of a node outside the current scope.")
var r=n.props.nodeName,a=_u[r]
return!a&&t?Ku(n).chromiumRole||null:"function"==typeof a?a(n):a||null},Qu={td:["tr"],th:["tr"],tr:["thead","tbody","tfoot","table"],thead:["table"],tbody:["table"],tfoot:["table"],li:["ol","ul"],dt:["dl","div"],dd:["dl","div"],div:["dl"]}
function Xu(e,t){var n=Qu[e.props.nodeName]
if(!n)return null
if(!e.parent){if(!e.actualNode)return null
throw new ReferenceError("Cannot determine role presentational inheritance of a required parent outside the current scope.")}if(!n.includes(e.parent.props.nodeName))return null
var r=wu(e.parent,t)
return["none","presentation"].includes(r)&&!Ju(e.parent)?r:r?null:Xu(e.parent,t)}function Zu(e,t){var n=t.chromium,r=q(t,f),a=Yu(e,{chromium:n})
return a?Xu(e,r)||a:null}function Ju(e){return Cu().some((function(t){return e.hasAttr(t)}))||iu(e)}var es=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.noPresentational,r=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.noImplicit,r=q(t,h),a=um(e).vNode
if(1!==a.props.nodeType)return null
var o=wu(a,r)
return o?["presentation","none"].includes(o)&&Ju(a)?n?null:Zu(a,r):o:n?null:Zu(a,r)}(e,q(t,m))
return n&&["presentation","none"].includes(r)?null:r},ts=["iframe"],ns=function(e){var t=um(e).vNode
return 1===t.props.nodeType&&e.hasAttr("title")?!Wu(t,ts)&&["none","presentation"].includes(es(t))?"":t.attr("title"):""},rs=function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).strict
if(1!==(e=e instanceof vr?e:pa(e)).props.nodeType)return!1
var n=es(e),r=yu.ariaRoles[n]
return!(!r||!r.nameFromContent)||!t&&(!r||["presentation","none"].includes(n))},as=function(e){var t=e.actualNode,n=e.children
if(!n)throw new Error("getOwnedVirtual requires a virtual node")
if(e.hasAttr("aria-owns")){var r=du(t,"aria-owns").filter((function(e){return!!e})).map((function(e){return i.utils.getNodeFromTree(e)}))
return[].concat(L(n),L(r))}return L(n)},os={accessibleNameFromFieldValue:["progressbar"]}
function is(e){return e=um(e).vNode,us(e)}var us=zr((function(e,t){return!Qo(e)&&!Vi(e,{skipAncestors:!0,isAncestor:t})&&(e.actualNode&&"area"===e.props.nodeName?!ti(e,us):!ai(e,{skipAncestors:!0,isAncestor:t})&&(!e.parent||us(e.parent,!0)))})),ss=function e(t,n,r){var a=um(t).vNode,o=n?is:fi,i=!t.actualNode||t.actualNode&&o(t),u=a.children.map((function(t){var a=t.props,o=a.nodeType,u=a.nodeValue
if(3===o){if(u&&i)return u}else if(!r)return e(t,n)})).join("")
return Ru(u)},ls=["button","checkbox","color","file","hidden","image","password","radio","reset","submit"],cs=function(e){var t=(e=e instanceof vr?e:pa(e)).props.nodeName
return"textarea"===t||"input"===t&&!ls.includes((e.attr("type")||"").toLowerCase())},ds=function(e){return"select"===(e=e instanceof vr?e:pa(e)).props.nodeName},ps=function(e){return"textbox"===wu(e)},fs=function(e){return"listbox"===wu(e)},hs=function(e){return"combobox"===wu(e)},ms=["progressbar","scrollbar","slider","spinbutton"],Ds=function(e){var t=wu(e)
return ms.includes(t)},gs=["textbox","progressbar","scrollbar","slider","spinbutton","combobox","listbox"],vs={nativeTextboxValue:function(e){var t=um(e).vNode
return cs(t)&&t.props.value||""},nativeSelectValue:function(e){var t=um(e).vNode
if(!ds(t))return""
var n=km(t,"option"),r=n.filter((function(e){return e.props.selected}))
return r.length||r.push(n[0]),r.map((function(e){return ss(e)})).join(" ")||""},ariaTextboxValue:function(e){var t=um(e),n=t.vNode,r=t.domNode
return ps(n)?!r||r&&!ai(r)?ss(n,!0):r.textContent:""},ariaListboxValue:ys,ariaComboboxValue:function(e,t){var n=um(e).vNode
if(!hs(n))return""
var r=as(n).filter((function(e){return"listbox"===es(e)}))[0]
return r?ys(r,t):""},ariaRangeValue:function(e){var t=um(e).vNode
if(!Ds(t)||!t.hasAttr("aria-valuenow"))return""
var n=+t.attr("aria-valuenow")
return isNaN(n)?"0":String(n)}}
function ys(e,t){var n=um(e).vNode
if(!fs(n))return""
var r=as(n).filter((function(e){return"option"===es(e)&&"true"===e.attr("aria-selected")}))
return 0===r.length?"":Ss(r[0],t)}var bs=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.actualNode,r=os.accessibleNameFromFieldValue||[],a=es(e)
if(t.startNode===e||!gs.includes(a)||r.includes(a))return""
var o=Object.keys(vs).map((function(e){return vs[e]})).reduce((function(n,r){return n||r(e,t)}),"")
return t.debug&&Dr(o||"{empty-value}",n,t),o},Fs=Eu("phrasing").concat(["#text"]),ws=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Ss.alreadyProcessed
t.startNode=t.startNode||e
var r=t,a=r.strict,o=r.inControlContext,i=r.inLabelledByContext,u=es(e),s=Ku(e,{noMatchAccessibleName:!0}).contentTypes
return n(e,t)||1!==e.props.nodeType||null!=s&&s.includes("embedded")||gs.includes(u)?"":t.subtreeDescendant||t.inLabelledByContext||rs(e,{strict:a})?(a||(t=z({subtreeDescendant:!o&&!i},t)),as(e).reduce((function(e,n){return function(e,t,n){var r=t.props.nodeName,a=Ss(t,n)
return a?(Fs.includes(r)||(" "!==a[0]&&(a+=" "),e&&" "!==e[e.length-1]&&(a=" "+a)),e+a):e}(e,n,t)}),"")):""},Es=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Ss.alreadyProcessed
if(t.inControlContext||t.inLabelledByContext||n(e,t))return""
t.startNode||(t.startNode=e)
var r,a=z({inControlContext:!0},t),o=function(e){if(!e.attr("id"))return[]
if(!e.actualNode)throw new TypeError("Cannot resolve explicit label reference for non-DOM nodes")
return Po({elm:"label",attr:"for",value:e.attr("id"),context:e.actualNode})}(e),i=_a(e,"label")
return i?(r=[].concat(L(o),[i.actualNode])).sort(im):r=o,r.map((function(e){return pu(e,a)})).filter((function(e){return""!==e})).join(" ")},Cs={submit:"Submit",image:"Submit",reset:"Reset",button:""}
function xs(e,t){return t.attr(e)||""}function As(e,t,n){var r=t.actualNode,a=[e=e.toLowerCase(),r.nodeName.toLowerCase()].join(","),o=r.querySelector(a)
return o&&o.nodeName.toLowerCase()===e?pu(o,n):""}var ks={valueText:function(e){return e.actualNode.value||""},buttonDefaultText:function(e){var t=e.actualNode
return Cs[t.type]||""},tableCaptionText:As.bind(null,"caption"),figureText:As.bind(null,"figcaption"),svgTitleText:As.bind(null,"title"),fieldsetLegendText:As.bind(null,"legend"),altText:xs.bind(null,"alt"),tableSummaryText:xs.bind(null,"summary"),titleText:ns,subtreeText:ws,labelText:Es,singleSpace:function(){return" "},placeholderText:xs.bind(null,"placeholder")}
function Ts(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.actualNode
if(1!==e.props.nodeType||["presentation","none"].includes(es(e)))return""
var r=function(e){return(Ku(e,{noMatchAccessibleName:!0}).namingMethods||[]).map((function(e){return ks[e]}))}(e),a=r.reduce((function(n,r){return n||r(e,t)}),"")
return t.debug&&i.log(a||"{empty-value}",n,t),a}var Ns=function(){return/[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC2\uDECE-\uDEDB\uDEE0-\uDEE8]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g},Rs=function(e,t){var n=t.emoji,r=t.nonBmp,a=t.punctuations,o=!1
return n&&(o||(o=/[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC2\uDECE-\uDEDB\uDEE0-\uDEE8]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g.test(e))),r&&(o||(o=/[\u1D00-\u1D7F\u1D80-\u1DBF\u1DC0-\u1DFF\u20A0-\u20CF\u20D0-\u20FF\u2100-\u214F\u2150-\u218F\u2190-\u21FF\u2200-\u22FF\u2300-\u23FF\u2400-\u243F\u2440-\u245F\u2460-\u24FF\u2500-\u257F\u2580-\u259F\u25A0-\u25FF\u2600-\u26FF\u2700-\u27BF\uE000-\uF8FF]/g.test(e)||/[\uDB80-\uDBBF][\uDC00-\uDFFF]/g.test(e)||/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC38]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/g.test(e))),a&&(o||(o=/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&\xa3\xa2\xa5\xa7\u20ac()*+,\-.\/:;<=>?@\[\]^_`{|}~\xb1]/g.test(e))),o}
function Bs(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.15,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,o=e.actualNode.nodeValue.trim()
if(!Ru(o)||Rs(o,{emoji:!0,nonBmp:!0}))return!1
var i=da.get("canvasContext",(function(){return a.createElement("canvas").getContext("2d",{willReadFrequently:!0})})),u=i.canvas,s=da.get("fonts",(function(){return{}})),l=n.getComputedStyle(e.parent.actualNode).getPropertyValue("font-family")
s[l]||(s[l]={occurrences:0,numLigatures:0})
var c=s[l]
if(c.occurrences>=r){if(c.numLigatures/c.occurrences==1)return!0
if(0===c.numLigatures)return!1}c.occurrences++
var d=30,p="".concat(d,"px ").concat(l)
i.font=p
var f=o.charAt(0),h=i.measureText(f).width
if(0===h)return c.numLigatures++,!0
if(h<30){var m=30/h
h*=m,p="".concat(d*=m,"px ").concat(l)}u.width=h,u.height=d,i.font=p,i.textAlign="left",i.textBaseline="top",i.fillText(f,0,0)
var D=new Uint32Array(i.getImageData(0,0,h,d).data.buffer)
if(!D.some((function(e){return e})))return c.numLigatures++,!0
i.clearRect(0,0,h,d),i.fillText(o,0,0)
var g=new Uint32Array(i.getImageData(0,0,h,d).data.buffer),v=D.reduce((function(e,t,n){return 0===t&&0===g[n]||0!==t&&0!==g[n]?e:++e}),0),y=o.split("").reduce((function(e,t){return e+i.measureText(t).width}),0),b=i.measureText(o).width
return v/D.length>=t&&1-b/y>=t&&(c.numLigatures++,!0)}function Ss(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
if(t=function(e,t){return t.startNode||(t=z({startNode:e},t)),1===e.props.nodeType&&t.inLabelledByContext&&void 0===t.includeHidden&&(t=z({includeHidden:!is(e)},t)),t}(e,t),function(e,t){return!!e&&1===e.props.nodeType&&!t.includeHidden&&!is(e)}(e,t))return""
if(function(e,t){var n,r=t.ignoreIconLigature,a=t.pixelThreshold,o=null!==(n=t.occurrenceThreshold)&&void 0!==n?n:t.occuranceThreshold
return!(3!==e.props.nodeType||!r)&&Bs(e,a,o)}(e,t))return""
var n=[fu,hu,Ts,bs,ws,_s,ns].reduce((function(n,r){return t.startNode===e&&(n=Ru(n)),""!==n?n:r(e,t)}),"")
return t.debug&&i.log(n||"{empty-value}",e.actualNode,t),n}function _s(e){return 3!==e.props.nodeType?"":e.props.nodeValue}Ss.alreadyProcessed=function(e,t){return t.processed=t.processed||[],!!t.processed.includes(e)||(t.processed.push(e),!1)}
var Os=function(e,t){var n=t.emoji,r=t.nonBmp,a=t.punctuations
return n&&(e=e.replace(/[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC2\uDECE-\uDEDB\uDEE0-\uDEE8]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g,"")),r&&(e=e.replace(/[\u1D00-\u1D7F\u1D80-\u1DBF\u1DC0-\u1DFF\u20A0-\u20CF\u20D0-\u20FF\u2100-\u214F\u2150-\u218F\u2190-\u21FF\u2200-\u22FF\u2300-\u23FF\u2400-\u243F\u2440-\u245F\u2460-\u24FF\u2500-\u257F\u2580-\u259F\u25A0-\u25FF\u2600-\u26FF\u2700-\u27BF\uE000-\uF8FF]/g,"").replace(/[\uDB80-\uDBBF][\uDC00-\uDFFF]/g,"").replace(/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC38]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/g,"")),a&&(e=e.replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&\xa3\xa2\xa5\xa7\u20ac()*+,\-.\/:;<=>?@\[\]^_`{|}~\xb1]/g,"")),e},Ms=function(e){if(!e.length)return 0
if(["x","i"].includes(e))return 0
var t=Os(e,{emoji:!0,nonBmp:!0,punctuations:!0})
return Ru(t)?1:0},js={stateTerms:["on","off"],standaloneTerms:["name","honorific-prefix","given-name","additional-name","family-name","honorific-suffix","nickname","username","new-password","current-password","organization-title","organization","street-address","address-line1","address-line2","address-line3","address-level4","address-level3","address-level2","address-level1","country","country-name","postal-code","cc-name","cc-given-name","cc-additional-name","cc-family-name","cc-number","cc-exp","cc-exp-month","cc-exp-year","cc-csc","cc-type","transaction-currency","transaction-amount","language","bday","bday-day","bday-month","bday-year","sex","url","photo","one-time-code"],qualifiers:["home","work","mobile","fax","pager"],qualifiedTerms:["tel","tel-country-code","tel-national","tel-area-code","tel-local","tel-local-prefix","tel-local-suffix","tel-extension","email","impp"],locations:["billing","shipping"]},Is=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.looseTyped,r=void 0!==n&&n,a=t.stateTerms,o=void 0===a?[]:a,i=t.locations,u=void 0===i?[]:i,s=t.qualifiers,l=void 0===s?[]:s,c=t.standaloneTerms,d=void 0===c?[]:c,p=t.qualifiedTerms,f=void 0===p?[]:p
if(e=e.toLowerCase().trim(),(o=o.concat(js.stateTerms)).includes(e)||""===e)return!0
l=l.concat(js.qualifiers),u=u.concat(js.locations),d=d.concat(js.standaloneTerms),f=f.concat(js.qualifiedTerms)
var h=e.split(/\s+/g)
if("webauthn"===h[h.length-1]&&(h.pop(),0===h.length))return!1
if(!r&&(h[0].length>8&&"section-"===h[0].substr(0,8)&&h.shift(),u.includes(h[0])&&h.shift(),l.includes(h[0])&&(h.shift(),d=[]),1!==h.length))return!1
var m=h[h.length-1]
return d.includes(m)||f.includes(m)},Ps=function(e){var t
return e.attr("aria-labelledby")&&(t=du(e.actualNode,"aria-labelledby").map((function(e){var t=pa(e)
return t?ss(t):""})).join(" ").trim())||(t=e.attr("aria-label"))&&(t=Ru(t))?t:null},qs=function(e,t,n){return e=pa(e),ss(e,t,n)},Ls=function(e){var t,n
if(n=Ps(e))return n
if(e.attr("id")){if(!e.actualNode)throw new TypeError("Cannot resolve explicit label reference for non-DOM nodes")
var r=Or(e.attr("id"))
if(n=(t=Io(e.actualNode).querySelector('label[for="'+r+'"]'))&&qs(t,!0))return n}return(n=(t=_a(e,"label"))&&ss(t,!0))||null},Hs=function(e){return e=pa(e),Ls(e)},zs=[{matches:[{nodeName:"textarea"},{nodeName:"input",properties:{type:["text","password","search","tel","email","url"]}}],namingMethods:"labelText"},{matches:{nodeName:"input",properties:{type:["button","submit","reset"]}},namingMethods:["valueText","titleText","buttonDefaultText"]},{matches:{nodeName:"input",properties:{type:"image"}},namingMethods:["altText","valueText","labelText","titleText","buttonDefaultText"]},{matches:"button",namingMethods:"subtreeText"},{matches:"fieldset",namingMethods:"fieldsetLegendText"},{matches:"OUTPUT",namingMethods:"subtreeText"},{matches:[{nodeName:"select"},{nodeName:"input",properties:{type:/^(?!text|password|search|tel|email|url|button|submit|reset)/}}],namingMethods:"labelText"},{matches:"summary",namingMethods:"subtreeText"},{matches:"figure",namingMethods:["figureText","titleText"]},{matches:"img",namingMethods:"altText"},{matches:"table",namingMethods:["tableCaptionText","tableSummaryText"]},{matches:["hr","br"],namingMethods:["titleText","singleSpace"]}],$s=function e(t){var n=fi(t),r=[]
return t.children.forEach((function(t){3===t.actualNode.nodeType?n&&r.push(t):r=r.concat(e(t))})),r},Vs=zr((function(e){var t=pa(e),n=t.boundingClientRect,r=[],o=$o(t)
return e.childNodes.forEach((function(e){if(3===e.nodeType&&""!==Ru(e.nodeValue)){var t=function(e){var t=a.createRange()
return t.selectNodeContents(e),Array.from(t.getClientRects())}(e);(function(e,t){return e.some((function(e){return!Di(yi(e),t)}))})(t,n)||r.push.apply(r,L(Us(t,o)))}})),r.length?r:Us([n],o)}))
function Us(e,t){var n=[]
return e.forEach((function(e){if(!(e.width<1||e.height<1)){var r=t.reduce((function(e,t){return e&&vi(e,t.boundingClientRect)}),e)
r&&n.push(r)}})),n}var Ws=function(e){Si()
var t=pa(e)._grid
return t?Vs(e).map((function(e){return nu(t,e)})):[]},Gs=["checkbox","img","meter","progressbar","scrollbar","radio","slider","spinbutton","textbox"],Ks=function(e){var t=um(e).vNode,n=i.commons.aria.getExplicitRole(t)
if(n)return-1!==Gs.indexOf(n)
switch(t.props.nodeName){case"img":case"iframe":case"object":case"video":case"audio":case"canvas":case"svg":case"math":case"button":case"select":case"textarea":case"keygen":case"progress":case"meter":return!0
case"input":return"hidden"!==t.props.type
default:return!1}},Ys=["head","title","template","script","style","iframe","object","video","audio","noscript"]
function Qs(e){return!Ys.includes(e.props.nodeName)&&e.children.some((function(e){var t=e.props
return 3===t.nodeType&&t.nodeValue.trim()}))}var Xs=function e(t,n,r){return Qs(t)||Ks(t.actualNode)||!r&&!!Ps(t)||!n&&t.children.some((function(t){return 1===t.actualNode.nodeType&&e(t)}))},Zs=function(e,t,n){return e=pa(e),Xs(e,t,n)}
function Js(e){return!(void 0!==e.children&&!Qs(e))||(1===e.props.nodeType&&Ks(e)?!!i.commons.text.accessibleTextVirtual(e):e.children.some((function(e){return!e.attr("lang")&&Js(e)&&!ai(e)})))}var el=function(e){return parseInt(e.getAttribute("tabindex"),10)>-1&&iu(e)&&!ou(e)}
function tl(e,t){var n=um(e),r=n.vNode,a=n.domNode
return r?(void 0===r._isHiddenWithCSS&&(r._isHiddenWithCSS=nl(a,t)),r._isHiddenWithCSS):nl(a,t)}function nl(e,t){if(9===e.nodeType)return!1
if(11===e.nodeType&&(e=e.host),["STYLE","SCRIPT"].includes(e.nodeName.toUpperCase()))return!1
var r=n.getComputedStyle(e,null)
if(!r)throw new Error("Style does not exist for the given element.")
if("none"===r.getPropertyValue("display"))return!0
var a=["hidden","collapse"],o=r.getPropertyValue("visibility")
if(a.includes(o)&&!t)return!0
if(a.includes(o)&&t&&a.includes(t))return!0
var i=ui(e)
return!(!i||a.includes(o))&&tl(i,o)}var rl=tl,al=function(e){var t=e.doctype
return null!==t&&"html"===t.name&&!t.publicId&&!t.systemId},ol=function(e){var t;(e instanceof vr||null!==(t=n)&&void 0!==t&&t.Node&&e instanceof n.Node)&&(e=i.commons.aria.getRole(e))
var r=yu.ariaRoles[e]
return(null==r?void 0:r.type)||null}
function il(e,t){!1!==t(e.actualNode)&&e.children.forEach((function(e){return il(e,t)}))}var ul=["block","list-item","table","flex","grid","inline-block"]
function sl(e){var t=n.getComputedStyle(e).getPropertyValue("display")
return ul.includes(t)||"table-"===t.substr(0,6)}var ll=function(e,t){if(sl(e))return!1
var n=function(e){for(var t=ui(e);t&&!sl(t);)t=ui(t)
return pa(t)}(e),r="",a="",o=0
return il(n,(function(t){if(2===o)return!1
if(3===t.nodeType&&(r+=t.nodeValue),1===t.nodeType){var n=(t.nodeName||"").toUpperCase()
if(t===e&&(o=1),["BR","HR"].includes(n))0===o?(r="",a=""):o=2
else{if("none"===t.style.display||"hidden"===t.style.overflow||!["",null,"none"].includes(t.style.float)||!["",null,"relative"].includes(t.style.position))return!1
if("widget"===ol(t))return a+=t.textContent,!1}}})),r=Ru(r),null!=t&&t.noLengthCompare?0!==r.length:(a=Ru(a),r.length>a.length)},cl=function(e){var t=(e=e||{}).modalPercent||.75
if(da.get("isModalOpen"))return da.get("isModalOpen")
if(Dm(i._tree[0],"dialog, [role=dialog], [aria-modal=true]",fi).length)return da.set("isModalOpen",!0),!0
for(var r,o=ci(n),u=o.width*t,s=o.height*t,l=(o.width-u)/2,c=(o.height-s)/2,d=[{x:l,y:c},{x:o.width-l,y:c},{x:o.width/2,y:o.height/2},{x:l,y:o.height-c},{x:o.width-l,y:o.height-c}].map((function(e){return Array.from(a.elementsFromPoint(e.x,e.y))})),p=function(){var e=d[f].find((function(e){var t=n.getComputedStyle(e)
return parseInt(t.width,10)>=u&&parseInt(t.height,10)>=s&&"none"!==t.getPropertyValue("pointer-events")&&("absolute"===t.position||"fixed"===t.position)}))
if(e&&d.every((function(t){return t.includes(e)})))return da.set("isModalOpen",!0),{v:!0}},f=0;f<d.length;f++)if(r=p())return r.v
da.set("isModalOpen",void 0)}
function dl(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=e.ownerDocument.createRange()
n.setStart(e,0),n.setEnd(e,e.childNodes.length)
var r,a=0,o=0,i=Q(n.getClientRects())
try{for(i.s();!(r=i.n()).done;){var u=r.value
if(!(u.height<=t))if(a>u.top+t)a=Math.max(a,u.bottom)
else{if(0!==o)return!0
a=u.bottom,o++}}}catch(e){i.e(e)}finally{i.f()}return!1}var pl=function(e){return e instanceof n.Node},fl="color.incompleteData",hl={set:function(e,t){if("string"!=typeof e)throw new Error("Incomplete data: key must be a string")
var n=da.get(fl,(function(){return{}}))
return t&&(n[e]=t),n[e]},get:function(e){var t=da.get(fl)
return null==t?void 0:t[e]},clear:function(){da.set(fl,{})}},ml=hl,Dl=function(e,t){var r=e.nodeName.toUpperCase()
if(["IMG","CANVAS","OBJECT","IFRAME","VIDEO","SVG"].includes(r))return ml.set("bgColor","imgNode"),!0
var a=(t=t||n.getComputedStyle(e)).getPropertyValue("background-image"),o="none"!==a
if(o){var i=/gradient/.test(a)
ml.set("bgColor",i?"bgGradient":"bgImage")}return o},gl={}
se(gl,{Colorjs:function(){return Nf},CssSelectorParser:function(){return Al.CssSelectorParser},doT:function(){return kl.default},emojiRegexText:function(){return Ns},memoize:function(){return Tl.default}})
var vl,yl,bl,Fl,wl=le(Ut()),El=le(Wt()),Cl=(le(Gt()),le(Kn())),xl=le(pr())
"hasOwn"in Object||(Object.hasOwn=Cl.default),"values"in Object||(Object.values=xl.default),"Promise"in n||wl.default.polyfill(),"Uint32Array"in n||(n.Uint32Array=El.Uint32Array),n.Uint32Array&&("some"in n.Uint32Array.prototype||Object.defineProperty(n.Uint32Array.prototype,"some",{value:Array.prototype.some}),"reduce"in n.Uint32Array.prototype||Object.defineProperty(n.Uint32Array.prototype,"reduce",{value:Array.prototype.reduce})),"function"!=typeof Object.assign&&(Object.assign=function(e){if(null==e)throw new TypeError("Cannot convert undefined or null to object")
for(var t=Object(e),n=1;n<arguments.length;n++){var r=arguments[n]
if(null!=r)for(var a in r)r.hasOwnProperty(a)&&(t[a]=r[a])}return t}),Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(e){if(null===this)throw new TypeError("Array.prototype.find called on null or undefined")
if("function"!=typeof e)throw new TypeError("predicate must be a function")
for(var t,n=Object(this),r=n.length>>>0,a=arguments[1],o=0;o<r;o++)if(t=n[o],e.call(a,t,o,n))return t}}),Array.prototype.findIndex||Object.defineProperty(Array.prototype,"findIndex",{value:function(e,t){if(null===this)throw new TypeError("Array.prototype.find called on null or undefined")
if("function"!=typeof e)throw new TypeError("predicate must be a function")
for(var n,r=Object(this),a=r.length>>>0,o=0;o<a;o++)if(n=r[o],e.call(t,n,o,r))return o
return-1}}),Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(e){var t=Object(this),n=parseInt(t.length,10)||0
if(0===n)return!1
var r,a,o=parseInt(arguments[1],10)||0
for(o>=0?r=o:(r=n+o)<0&&(r=0);r<n;){if(e===(a=t[r])||e!=e&&a!=a)return!0
r++}return!1}}),Array.prototype.some||Object.defineProperty(Array.prototype,"some",{value:function(e){if(null==this)throw new TypeError("Array.prototype.some called on null or undefined")
if("function"!=typeof e)throw new TypeError
for(var t=Object(this),n=t.length>>>0,r=arguments.length>=2?arguments[1]:void 0,a=0;a<n;a++)if(a in t&&e.call(r,t[a],a,t))return!0
return!1}}),Array.from||Object.defineProperty(Array,"from",{value:(vl=Object.prototype.toString,yl=function(e){return"function"==typeof e||"[object Function]"===vl.call(e)},bl=Math.pow(2,53)-1,Fl=function(e){var t=function(e){var t=Number(e)
return isNaN(t)?0:0!==t&&isFinite(t)?(t>0?1:-1)*Math.floor(Math.abs(t)):t}(e)
return Math.min(Math.max(t,0),bl)},function(e){var t=Object(e)
if(null==e)throw new TypeError("Array.from requires an array-like object - not null or undefined")
var n,r=arguments.length>1?arguments[1]:void 0
if(void 0!==r){if(!yl(r))throw new TypeError("Array.from: when provided, the second argument must be a function")
arguments.length>2&&(n=arguments[2])}for(var a,o=Fl(t.length),i=yl(this)?Object(new this(o)):new Array(o),u=0;u<o;)a=t[u],i[u]=r?void 0===n?r(a,u):r.call(n,a,u):a,u+=1
return i.length=o,i})}),String.prototype.includes||(String.prototype.includes=function(e,t){return"number"!=typeof t&&(t=0),!(t+e.length>this.length)&&-1!==this.indexOf(e,t)}),Array.prototype.flat||Object.defineProperty(Array.prototype,"flat",{configurable:!0,value:function e(){var t=isNaN(arguments[0])?1:Number(arguments[0])
return t?Array.prototype.reduce.call(this,(function(n,r){return Array.isArray(r)?n.push.apply(n,e.call(r,t-1)):n.push(r),n}),[]):Array.prototype.slice.call(this)},writable:!0}),n.Node&&!("isConnected"in n.Node.prototype)&&Object.defineProperty(n.Node.prototype,"isConnected",{get:function(){return!(this.ownerDocument&&this.ownerDocument.compareDocumentPosition(this)&this.DOCUMENT_POSITION_DISCONNECTED)}})
var Al=le(Vt()),kl=le(fr()),Tl=le(Lt())
function Nl(e,t){var n=e.length
Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map((function(e){return[e]})))
var r=t[0].length,a=t[0].map((function(e,n){return t.map((function(e){return e[n]}))})),o=e.map((function(e){return a.map((function(t){var n=0
if(!Array.isArray(e)){var r,a=Q(t)
try{for(a.s();!(r=a.n()).done;){var o=r.value
n+=e*o}}catch(e){a.e(e)}finally{a.f()}return n}for(var i=0;i<e.length;i++)n+=e[i]*(t[i]||0)
return n}))}))
return 1===n&&(o=o[0]),1===r?o.map((function(e){return e[0]})):o}function Rl(e){return"string"===Bl(e)}function Bl(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function Sl(e,t){var n=t.precision,r=t.unit
return _l(e)?"none":Ml(e,n)+(null!=r?r:"")}function _l(e){return Number.isNaN(e)||e instanceof Number&&(null==e?void 0:e.none)}function Ol(e){return _l(e)?0:e}function Ml(e,t){if(0===e)return 0
var n=~~e,r=0
n&&t&&(r=1+~~Math.log10(Math.abs(n)))
var a=Math.pow(10,t-r)
return Math.floor(e*a+.5)/a}var jl={deg:1,grad:.9,rad:180/Math.PI,turn:360}
function Il(e){if(e){e=e.trim()
var t=/^-?[\d.]+$/,n=/%|deg|g?rad|turn$/,r=e.match(/^([a-z]+)\((.+?)\)$/i)
if(r){var a=[]
return r[2].replace(/\/?\s*(none|[-\w.]+(?:%|deg|g?rad|turn)?)/g,(function(e,r){var i=r.match(n),u=r
if(i){var s=i[0],l=u.slice(0,-s.length)
"%"===s?(u=new Number(l/100)).type="<percentage>":((u=new Number(l*jl[s])).type="<angle>",u.unit=s)}else t.test(u)?(u=new Number(u)).type="<number>":"none"===u&&((u=new Number(NaN)).none=!0)
e.startsWith("/")&&((u=u instanceof Number?u:new Number(u)).alpha=!0),"object"===o(u)&&u instanceof Number&&(u.raw=r),a.push(u)})),{name:r[1].toLowerCase(),rawName:r[1],rawArgs:r[2],args:a}}}}function Pl(e){return e[e.length-1]}function ql(e,t,n){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*n}function Ll(e,t,n){return(n-e)/(t-e)}function Hl(e,t,n){return ql(t[0],t[1],Ll(e[0],e[1],n))}function zl(e){return e.map((function(e){return e.split("|").map((function(e){var t=(e=e.trim()).match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/)
if(t){var n=new String(t[1])
return n.range=[+t[2],+t[3]],n}return e}))}))}function $l(e,t,n){return Math.max(Math.min(n,t),e)}function Vl(e,t){return Math.sign(e)===Math.sign(t)?e:-e}function Ul(e,t){return Vl(Math.pow(Math.abs(e),t),e)}function Wl(e,t){return 0===t?0:e/t}function Gl(e,t){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e.length;n<r;){var a=n+r>>1
e[a]<t?n=a+1:r=a}return n}var Kl=Object.freeze({__proto__:null,bisectLeft:Gl,clamp:$l,copySign:Vl,interpolate:ql,interpolateInv:Ll,isNone:_l,isString:Rl,last:Pl,mapRange:Hl,multiplyMatrices:Nl,parseCoordGrammar:zl,parseFunction:Il,serializeNumber:Sl,skipNone:Ol,spow:Ul,toPrecision:Ml,type:Bl,zdiv:Wl}),Yl=function(){function e(){W(this,e)}return K(e,[{key:"add",value:function(e,t,n){if("string"==typeof arguments[0])(Array.isArray(e)?e:[e]).forEach((function(e){this[e]=this[e]||[],t&&this[e][n?"unshift":"push"](t)}),this)
else for(var e in arguments[0])this.add(e,arguments[0][e],arguments[1])}},{key:"run",value:function(e,t){this[e]=this[e]||[],this[e].forEach((function(e){e.call(t&&t.context?t.context:t,t)}))}}]),e}(),Ql=new Yl,Xl={gamut_mapping:"css",precision:5,deltaE:"76",verbose:"test"!==(null===globalThis||void 0===globalThis||null===(e=globalThis.process)||void 0===e||null===(e=e.env)||void 0===e||null===(e=e.NODE_ENV)||void 0===e?void 0:e.toLowerCase()),warn:function(e){var t,n
this.verbose&&(null===globalThis||void 0===globalThis||null===(t=globalThis.console)||void 0===t||null===(n=t.warn)||void 0===n||n.call(t,e))}},Zl={D50:[.3457/.3585,1,.2958/.3585],D65:[.3127/.329,1,.3583/.329]}
function Jl(e){return Array.isArray(e)?e:Zl[e]}function ec(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}
if(e=Jl(e),t=Jl(t),!e||!t)throw new TypeError("Missing white point to convert ".concat(e?"":"from").concat(e||t?"":"/").concat(t?"":"to"))
if(e===t)return n
var a={W1:e,W2:t,XYZ:n,options:r}
if(Ql.run("chromatic-adaptation-start",a),a.M||(a.W1===Zl.D65&&a.W2===Zl.D50?a.M=[[1.0479297925449969,.022946870601609652,-.05019226628920524],[.02962780877005599,.9904344267538799,-.017073799063418826],[-.009243040646204504,.015055191490298152,.7518742814281371]]:a.W1===Zl.D50&&a.W2===Zl.D65&&(a.M=[[.955473421488075,-.02309845494876471,.06325924320057072],[-.0283697093338637,1.0099953980813041,.021041441191917323],[.012314014864481998,-.020507649298898964,1.330365926242124]])),Ql.run("chromatic-adaptation-end",a),a.M)return Nl(a.M,a.XYZ)
throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}var tc=new Set(["<number>","<percentage>","<angle>"])
function nc(e,t,n,r){var a=Object.entries(e.coords).map((function(e,a){var o,i=$(e,2),u=i[0],s=i[1],l=t.coordGrammar[a],c=r[a],d=null==c?void 0:c.type
if(!(o=c.none?l.find((function(e){return tc.has(e)})):l.find((function(e){return e==d})))){var p=s.name||u
throw new TypeError("".concat(null!=d?d:c.raw," not allowed for ").concat(p," in ").concat(n,"()"))}var f=o.range
"<percentage>"===d&&(f||(f=[0,1]))
var h=s.range||s.refRange
return f&&h&&(r[a]=Hl(f,h,r[a])),o}))
return a}function rc(e){var t,n=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).meta,r={str:null===(t=String(e))||void 0===t?void 0:t.trim()}
if(Ql.run("parse-start",r),r.color)return r.color
if(r.parsed=Il(r.str),r.parsed){var a=r.parsed.name
if("color"===a){var o,i=r.parsed.args.shift(),u=i.startsWith("--")?i.substring(2):"--".concat(i),s=[i,u],l=r.parsed.rawArgs.indexOf("/")>0?r.parsed.args.pop():1,c=Q(ic.all)
try{for(c.s();!(o=c.n()).done;){var d,p=o.value,f=p.getFormat("color")
if(f&&(s.includes(f.id)||null!==(d=f.ids)&&void 0!==d&&d.filter((function(e){return s.includes(e)})).length)){var h=Object.keys(p.coords).map((function(e,t){return r.parsed.args[t]||0})),m=void 0
return f.coordGrammar&&(m=nc(p,f,"color",h)),n&&Object.assign(n,{formatId:"color",types:m}),f.id.startsWith("--")&&!i.startsWith("--")&&Xl.warn("".concat(p.name," is a non-standard space and not currently supported in the CSS spec. Use prefixed color(").concat(f.id,") instead of color(").concat(i,").")),i.startsWith("--")&&!f.id.startsWith("--")&&Xl.warn("".concat(p.name," is a standard space and supported in the CSS spec. Use color(").concat(f.id,") instead of prefixed color(").concat(i,").")),{spaceId:p.id,coords:h,alpha:l}}}}catch(e){c.e(e)}finally{c.f()}var D="",g=i in ic.registry?i:u
if(g in ic.registry){var v,y=null===(v=ic.registry[g].formats)||void 0===v||null===(v=v.color)||void 0===v?void 0:v.id
y&&(D="Did you mean color(".concat(y,")?"))}throw new TypeError("Cannot parse color(".concat(i,"). ")+(D||"Missing a plugin?"))}var b,F=Q(ic.all)
try{for(F.s();!(b=F.n()).done;){var w=b.value,E=w.getFormat(a)
if(E&&"function"===E.type){var C=1;(E.lastAlpha||Pl(r.parsed.args).alpha)&&(C=r.parsed.args.pop())
var x=r.parsed.args,A=void 0
return E.coordGrammar&&(A=nc(w,E,a,x)),n&&Object.assign(n,{formatId:E.name,types:A}),{spaceId:w.id,coords:x,alpha:C}}}}catch(e){F.e(e)}finally{F.f()}}else{var k,T=Q(ic.all)
try{for(T.s();!(k=T.n()).done;){var N=k.value
for(var R in N.formats){var B=N.formats[R]
if("custom"===B.type&&(!B.test||B.test(r.str))){var S,_=B.parse(r.str)
if(_)return null!==(S=_.alpha)&&void 0!==S||(_.alpha=1),n&&(n.formatId=R),_}}}}catch(e){T.e(e)}finally{T.f()}}throw new TypeError("Could not parse ".concat(e," as a color. Missing a plugin?"))}function ac(e){if(Array.isArray(e))return e.map(ac)
if(!e)throw new TypeError("Empty color reference")
Rl(e)&&(e=rc(e))
var t=e.space||e.spaceId
return t instanceof ic||(e.space=ic.get(t)),void 0===e.alpha&&(e.alpha=1),e}var oc=function(){function e(t){var n,r,a,o,i
W(this,e),this.id=t.id,this.name=t.name,this.base=t.base?e.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase)
var u=null!==(n=t.coords)&&void 0!==n?n:this.base.coords
for(var s in u)"name"in u[s]||(u[s].name=s)
this.coords=u
var l,c=null!==(r=null!==(a=t.white)&&void 0!==a?a:this.base.white)&&void 0!==r?r:"D65"
for(var d in this.white=Jl(c),this.formats=null!==(o=t.formats)&&void 0!==o?o:{},this.formats){var p=this.formats[d]
p.type||(p.type="function"),p.name||(p.name=d)}null!==(i=this.formats.color)&&void 0!==i&&i.id||(this.formats.color=z({},null!==(l=this.formats.color)&&void 0!==l?l:{},{id:t.cssId||this.id})),t.gamutSpace?this.gamutSpace="self"===t.gamutSpace?this:e.get(t.gamutSpace):this.isPolar?this.gamutSpace=this.base:this.gamutSpace=this,this.gamutSpace.isUnbounded&&(this.inGamut=function(e,t){return!0}),this.referred=t.referred,Object.defineProperty(this,"path",{value:uc(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),Ql.run("colorspace-init-end",this)}return K(e,[{key:"inGamut",value:function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).epsilon,n=void 0===t?75e-6:t
if(!this.equals(this.gamutSpace))return e=this.to(this.gamutSpace,e),this.gamutSpace.inGamut(e,{epsilon:n})
var r=Object.values(this.coords)
return e.every((function(e,t){var a=r[t]
if("angle"!==a.type&&a.range){if(Number.isNaN(e))return!0
var o=$(a.range,2),i=o[0],u=o[1]
return(void 0===i||e>=i-n)&&(void 0===u||e<=u+n)}return!0}))}},{key:"isUnbounded",get:function(){return Object.values(this.coords).every((function(e){return!("range"in e)}))}},{key:"cssId",get:function(){var e
return(null===(e=this.formats)||void 0===e||null===(e=e.color)||void 0===e?void 0:e.id)||this.id}},{key:"isPolar",get:function(){for(var e in this.coords)if("angle"===this.coords[e].type)return!0
return!1}},{key:"getFormat",value:function(e){return"object"===o(e)?e=sc(e,this):(t="default"===e?Object.values(this.formats)[0]:this.formats[e])?t=sc(t,this):null
var t}},{key:"equals",value:function(e){return!!e&&(this===e||this.id===e||this.id===e.id)}},{key:"to",value:function(t,n){if(1===arguments.length){var r=ac(t),a=[r.space,r.coords]
t=a[0],n=a[1]}if(t=e.get(t),this.equals(t))return n
n=n.map((function(e){return Number.isNaN(e)?0:e}))
for(var o,i,u=this.path,s=t.path,l=0;l<u.length&&u[l].equals(s[l]);l++)o=u[l],i=l
if(!o)throw new Error("Cannot convert between color spaces ".concat(this," and ").concat(t,": no connection space was found"))
for(var c=u.length-1;c>i;c--)n=u[c].toBase(n)
for(var d=i+1;d<s.length;d++)n=s[d].fromBase(n)
return n}},{key:"from",value:function(t,n){if(1===arguments.length){var r=ac(t),a=[r.space,r.coords]
t=a[0],n=a[1]}return(t=e.get(t)).to(this,n)}},{key:"toString",value:function(){return"".concat(this.name," (").concat(this.id,")")}},{key:"getMinCoords",value:function(){var e=[]
for(var t in this.coords){var n,r=this.coords[t],a=r.range||r.refRange
e.push(null!==(n=null==a?void 0:a.min)&&void 0!==n?n:0)}return e}}],[{key:"all",get:function(){return L(new Set(Object.values(e.registry)))}},{key:"register",value:function(e,t){if(1===arguments.length&&(e=(t=arguments[0]).id),t=this.get(t),this.registry[e]&&this.registry[e]!==t)throw new Error("Duplicate color space registration: '".concat(e,"'"))
if(this.registry[e]=t,1===arguments.length&&t.aliases){var n,r=Q(t.aliases)
try{for(r.s();!(n=r.n()).done;){var a=n.value
this.register(a,t)}}catch(e){r.e(e)}finally{r.f()}}return t}},{key:"get",value:function(t){if(!t||t instanceof e)return t
if("string"===Bl(t)){var n=e.registry[t.toLowerCase()]
if(!n)throw new TypeError('No color space found with id = "'.concat(t,'"'))
return n}for(var r=arguments.length,a=new Array(r>1?r-1:0),o=1;o<r;o++)a[o-1]=arguments[o]
if(a.length)return e.get.apply(e,a)
throw new TypeError("".concat(t," is not a valid color space"))}},{key:"resolveCoord",value:function(t,n){var r,a,o=Bl(t)
if("string"===o)if(t.includes(".")){var i=$(t.split("."),2)
r=i[0],a=i[1]}else r=void 0,a=t
else if(Array.isArray(t)){var u=$(t,2)
r=u[0],a=u[1]}else r=t.space,a=t.coordId
if((r=e.get(r))||(r=n),!r)throw new TypeError("Cannot resolve coordinate reference ".concat(t,": No color space specified and relative references are not allowed here"))
if("number"===(o=Bl(a))||"string"===o&&a>=0){var s=Object.entries(r.coords)[a]
if(s)return z({space:r,id:s[0],index:a},s[1])}r=e.get(r)
var l=a.toLowerCase(),c=0
for(var d in r.coords){var p,f=r.coords[d]
if(d.toLowerCase()===l||(null===(p=f.name)||void 0===p?void 0:p.toLowerCase())===l)return z({space:r,id:d,index:c},f)
c++}throw new TypeError('No "'.concat(a,'" coordinate found in ').concat(r.name,". Its coordinates are: ").concat(Object.keys(r.coords).join(", ")))}}]),e}(),ic=oc
function uc(e){for(var t=[e],n=e;n=n.base;)t.push(n)
return t}function sc(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).coords
if(e.coords&&!e.coordGrammar){e.type||(e.type="function"),e.name||(e.name="color"),e.coordGrammar=zl(e.coords)
var n=Object.entries(t).map((function(t,n){var r=$(t,2),a=(r[0],r[1]),o=e.coordGrammar[n][0],i=a.range||a.refRange,u=o.range,s=""
return"<percentage>"==o?(u=[0,100],s="%"):"<angle>"==o&&(s="deg"),{fromRange:i,toRange:u,suffix:s}}))
e.serializeCoords=function(e,t){return e.map((function(e,r){var a=n[r],o=a.fromRange,i=a.toRange,u=a.suffix
return o&&i&&(e=Hl(o,i,e)),Sl(e,{precision:t,unit:u})}))}}return e}ce(ic,"registry",{}),ce(ic,"DEFAULT_FORMAT",{type:"functions",name:"color"})
var lc=new ic({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]}),cc=function(e){function t(e){var n,r,a,o
return W(this,t),e.coords||(e.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),e.base||(e.base=lc),e.toXYZ_M&&e.fromXYZ_M&&(null!==(a=e.toBase)&&void 0!==a||(e.toBase=function(t){var n=Nl(e.toXYZ_M,t)
return r.white!==r.base.white&&(n=ec(r.white,r.base.white,n)),n}),null!==(o=e.fromBase)&&void 0!==o||(e.fromBase=function(t){return t=ec(r.base.white,r.white,t),Nl(e.fromXYZ_M,t)})),null!==(n=e.referred)&&void 0!==n||(e.referred="display"),r=_(this,t,[e])}return I(t,e),K(t)}(ic)
function dc(e,t){return e=ac(e),!t||e.space.equals(t)?e.coords.slice():(t=ic.get(t)).from(e)}function pc(e,t){e=ac(e)
var n=ic.resolveCoord(t,e.space),r=n.space,a=n.index
return dc(e,r)[a]}function fc(e,t,n){return e=ac(e),t=ic.get(t),e.coords=t.to(e.space,n),e}function hc(e,t,n){if(e=ac(e),2===arguments.length&&"object"===Bl(arguments[1])){var r=arguments[1]
for(var a in r)hc(e,a,r[a])}else{"function"==typeof n&&(n=n(pc(e,t)))
var o=ic.resolveCoord(t,e.space),i=o.space,u=o.index,s=dc(e,i)
s[u]=n,fc(e,i,s)}return e}fc.returns="color",hc.returns="color"
var mc=new ic({id:"xyz-d50",name:"XYZ D50",white:"D50",base:lc,fromBase:function(e){return ec(lc.white,"D50",e)},toBase:function(e){return ec("D50",lc.white,e)}}),Dc=24/116,gc=24389/27,vc=Zl.D50,yc=new ic({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:vc,base:mc,fromBase:function(e){var t=e.map((function(e,t){return e/vc[t]})).map((function(e){return e>.008856451679035631?Math.cbrt(e):(gc*e+16)/116}))
return[116*t[1]-16,500*(t[0]-t[1]),200*(t[1]-t[2])]},toBase:function(e){var t=[]
return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>Dc?Math.pow(t[0],3):(116*t[0]-16)/gc,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/gc,t[2]>Dc?Math.pow(t[2],3):(116*t[2]-16)/gc].map((function(e,t){return e*vc[t]}))},formats:{lab:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}})
function bc(e){return(e%360+360)%360}var Fc=new ic({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:yc,fromBase:function(e){var t,n=$(e,3),r=n[0],a=n[1],o=n[2]
return t=Math.abs(a)<.02&&Math.abs(o)<.02?NaN:180*Math.atan2(o,a)/Math.PI,[r,Math.sqrt(Math.pow(a,2)+Math.pow(o,2)),bc(t)]},toBase:function(e){var t=$(e,3),n=t[0],r=t[1],a=t[2]
return r<0&&(r=0),isNaN(a)&&(a=0),[n,r*Math.cos(a*Math.PI/180),r*Math.sin(a*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}}),wc=Math.pow(25,7),Ec=Math.PI,Cc=180/Ec,xc=Ec/180
function Ac(e){var t=e*e
return t*t*t*e}function kc(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.kL,a=void 0===r?1:r,o=n.kC,i=void 0===o?1:o,u=n.kH,s=void 0===u?1:u,l=$(ac([e,t]),2)
e=l[0],t=l[1]
var c=$(yc.from(e),3),d=c[0],p=c[1],f=c[2],h=Fc.from(yc,[d,p,f])[1],m=$(yc.from(t),3),D=m[0],g=m[1],v=m[2],y=Fc.from(yc,[D,g,v])[1]
h<0&&(h=0),y<0&&(y=0)
var b=Ac((h+y)/2),F=.5*(1-Math.sqrt(b/(b+wc))),w=(1+F)*p,E=(1+F)*g,C=Math.sqrt(Math.pow(w,2)+Math.pow(f,2)),x=Math.sqrt(Math.pow(E,2)+Math.pow(v,2)),A=0===w&&0===f?0:Math.atan2(f,w),k=0===E&&0===v?0:Math.atan2(v,E)
A<0&&(A+=2*Ec),k<0&&(k+=2*Ec)
var T,N=D-d,R=x-C,B=(k*=Cc)-(A*=Cc),S=A+k,_=Math.abs(B)
C*x==0?T=0:_<=180?T=B:B>180?T=B-360:B<-180?T=B+360:Xl.warn("the unthinkable has happened")
var O,M=2*Math.sqrt(x*C)*Math.sin(T*xc/2),j=(d+D)/2,I=(C+x)/2,P=Ac(I)
O=C*x==0?S:_<=180?S/2:S<360?(S+360)/2:(S-360)/2
var q=Math.pow(j-50,2),L=1+.015*q/Math.sqrt(20+q),H=1+.045*I,z=1
z-=.17*Math.cos((O-30)*xc),z+=.24*Math.cos(2*O*xc),z+=.32*Math.cos((3*O+6)*xc)
var V=1+.015*I*(z-=.2*Math.cos((4*O-63)*xc)),U=30*Math.exp(-1*Math.pow((O-275)/25,2)),W=2*Math.sqrt(P/(P+wc)),G=-1*Math.sin(2*U*xc)*W,K=Math.pow(N/(a*L),2)
return K+=Math.pow(R/(i*H),2),K+=Math.pow(M/(s*V),2),K+=G*(R/(i*H))*(M/(s*V)),Math.sqrt(K)}var Tc=[[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],Nc=[[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],Rc=[[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],Bc=[[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]],Sc=new ic({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:lc,fromBase:function(e){var t=Nl(Tc,e).map((function(e){return Math.cbrt(e)}))
return Nl(Rc,t)},toBase:function(e){var t=Nl(Bc,e).map((function(e){return Math.pow(e,3)}))
return Nl(Nc,t)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}})
function _c(e,t){var n=$(ac([e,t]),2)
e=n[0],t=n[1]
var r=$(Sc.from(e),3),a=r[0],o=r[1],i=r[2],u=$(Sc.from(t),3),s=a-u[0],l=o-u[1],c=i-u[2]
return Math.sqrt(Math.pow(s,2)+Math.pow(l,2)+Math.pow(c,2))}var Oc=75e-6
function Mc(e,t){var n=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).epsilon,r=void 0===n?Oc:n
e=ac(e),t||(t=e.space),t=ic.get(t)
var a=e.coords
return t!==e.space&&(a=t.from(e)),t.inGamut(a,{epsilon:r})}function jc(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function Ic(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"lab",r=(n=ic.get(n)).from(e),a=n.from(t)
return Math.sqrt(r.reduce((function(e,t,n){var r=a[n]
return isNaN(t)||isNaN(r)?e:e+Math.pow(r-t,2)}),0))}var Pc=Math.PI/180,qc=new ic({id:"xyz-abs-d65",cssId:"--xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:lc,fromBase:function(e){return e.map((function(e){return Math.max(203*e,0)}))},toBase:function(e){return e.map((function(e){return Math.max(e/203,0)}))}}),Lc=1.15,Hc=.66,zc=2610/Math.pow(2,14),$c=Math.pow(2,14)/2610,Vc=3424/Math.pow(2,12),Uc=2413/Math.pow(2,7),Wc=2392/Math.pow(2,7),Gc=1.7*2523/Math.pow(2,5),Kc=Math.pow(2,5)/(1.7*2523),Yc=-.56,Qc=16295499532821565e-27,Xc=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],Zc=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],Jc=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],ed=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]],td=new ic({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:qc,fromBase:function(e){var t=$(e,3),n=t[0],r=t[1],a=t[2],o=Nl(Xc,[Lc*n-(Lc-1)*a,Hc*r-(Hc-1)*n,a]).map((function(e){var t=Vc+Uc*Math.pow(e/1e4,zc),n=1+Wc*Math.pow(e/1e4,zc)
return Math.pow(t/n,Gc)})),i=$(Nl(Jc,o),3),u=i[0],s=i[1],l=i[2]
return[(1+Yc)*u/(1+Yc*u)-Qc,s,l]},toBase:function(e){var t=$(e,3),n=t[0],r=t[1],a=t[2],o=Nl(ed,[(n+Qc)/(1+Yc-Yc*(n+Qc)),r,a]).map((function(e){var t=Vc-Math.pow(e,Kc),n=Wc*Math.pow(e,Kc)-Uc
return 1e4*Math.pow(t/n,$c)})),i=$(Nl(Zc,o),3),u=i[0],s=i[1],l=i[2],c=(u+(Lc-1)*l)/Lc
return[c,(s+(Hc-1)*c)/Hc,l]},formats:{color:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),nd=new ic({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:td,fromBase:function(e){var t,n=$(e,3),r=n[0],a=n[1],o=n[2],i=2e-4
return t=Math.abs(a)<i&&Math.abs(o)<i?NaN:180*Math.atan2(o,a)/Math.PI,[r,Math.sqrt(Math.pow(a,2)+Math.pow(o,2)),bc(t)]},toBase:function(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]}}),rd=.8359375,ad=2413/128,od=18.6875,id=2610/16384,ud=32/2523,sd=[[.3592832590121217,.6976051147779502,-.035891593232029],[-.1920808463704993,1.100476797037432,.0753748658519118],[.0070797844607479,.0748396662186362,.8433265453898765]],ld=[[.5,.5,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],cd=[[.9999999999999998,.0086090370379328,.111029625003026],[.9999999999999998,-.0086090370379328,-.1110296250030259],[.9999999999999998,.5600313357106791,-.3206271749873188]],dd=[[2.0701522183894223,-1.3263473389671563,.2066510476294053],[.3647385209748072,.6805660249472273,-.0453045459220347],[-.0497472075358123,-.0492609666966131,1.1880659249923042]],pd=new ic({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:qc,fromBase:function(e){return t=Nl(sd,e).map((function(e){var t=rd+ad*Math.pow(e/1e4,id),n=1+od*Math.pow(e/1e4,id)
return Math.pow(t/n,78.84375)})),Nl(ld,t)
var t},toBase:function(e){var t=function(e){return Nl(cd,e).map((function(e){var t=Math.max(Math.pow(e,ud)-rd,0),n=ad-od*Math.pow(e,ud)
return 1e4*Math.pow(t/n,6.277394636015326)}))}(e)
return Nl(dd,t)}}),fd=Zl.D65,hd=1/.42,md=2*Math.PI,Dd=[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],gd=[[1.8620678550872327,-1.0112546305316843,.14918677544445175],[.38752654323613717,.6214474419314753,-.008973985167612518],[-.015841498849333856,-.03412293802851557,1.0499644368778496]],vd=[[460,451,288],[460,-891,-261],[460,-220,-6300]],yd={dark:[.8,.525,.8],dim:[.9,.59,.9],average:[1,.69,1]},bd={h:[20.14,90,164.25,237.53,380.14],e:[.8,.7,1,1.2,.8],H:[0,100,200,300,400]},Fd=180/Math.PI,wd=Math.PI/180
function Ed(e,t){return e.map((function(e){var n=Ul(t*Math.abs(e)*.01,.42)
return 400*Vl(n,e)/(n+27.13)}))}function Cd(e,t,n,r,a){var o={}
o.discounting=a,o.refWhite=e,o.surround=r
var i=e.map((function(e){return 100*e}))
o.la=t,o.yb=n
var u=i[1],s=Nl(Dd,i),l=(r=yd[o.surround])[0]
o.c=r[1],o.nc=r[2]
var c=1/(5*o.la+1),d=Math.pow(c,4)
o.fl=d*o.la+.1*(1-d)*(1-d)*Math.cbrt(5*o.la),o.flRoot=Math.pow(o.fl,.25),o.n=o.yb/u,o.z=1.48+Math.sqrt(o.n),o.nbb=.725*Math.pow(o.n,-.2),o.ncb=o.nbb
var p=a?1:Math.max(Math.min(l*(1-1/3.6*Math.exp((-o.la-42)/92)),1),0)
o.dRgb=s.map((function(e){return ql(1,u/e,p)})),o.dRgbInv=o.dRgb.map((function(e){return 1/e}))
var f=s.map((function(e,t){return e*o.dRgb[t]})),h=Ed(f,o.fl)
return o.aW=o.nbb*(2*h[0]+h[1]+.05*h[2]),o}var xd=Cd(fd,64/Math.PI*.2,20,"average",!1)
function Ad(e,t){if(!(void 0!==e.J^void 0!==e.Q))throw new Error("Conversion requires one and only one: 'J' or 'Q'")
if(!(void 0!==e.C^void 0!==e.M^void 0!==e.s))throw new Error("Conversion requires one and only one: 'C', 'M' or 's'")
if(!(void 0!==e.h^void 0!==e.H))throw new Error("Conversion requires one and only one: 'h' or 'H'")
if(0===e.J||0===e.Q)return[0,0,0]
var n
n=void 0!==e.h?bc(e.h)*wd:function(e){var t=(e%400+400)%400,n=Math.floor(.01*t)
t%=100
var r=$(bd.h.slice(n,n+2),2),a=r[0],o=r[1],i=$(bd.e.slice(n,n+2),2),u=i[0],s=i[1]
return bc((t*(s*a-u*o)-100*a*s)/(t*(s-u)-100*s))}(e.H)*wd
var r=Math.cos(n),a=Math.sin(n),o=0
void 0!==e.J?o=.1*Ul(e.J,.5):void 0!==e.Q&&(o=.25*t.c*e.Q/((t.aW+4)*t.flRoot))
var i=0
void 0!==e.C?i=e.C/o:void 0!==e.M?i=e.M/t.flRoot/o:void 0!==e.s&&(i=4e-4*Math.pow(e.s,2)*(t.aW+4)/t.c)
var u,s,l,c=Ul(i*Math.pow(1.64-Math.pow(.29,t.n),-.73),10/9),d=.25*(Math.cos(n+2)+3.8),p=t.aW*Ul(o,2/t.c/t.z),f=5e4/13*t.nc*t.ncb*d,h=p/t.nbb,m=23*(h+.305)*Wl(c,23*f+c*(11*r+108*a)),D=(u=Nl(vd,[h,m*r,m*a]).map((function(e){return 1*e/1403})),s=t.fl,l=100/s*Math.pow(27.13,hd),u.map((function(e){var t=Math.abs(e)
return Vl(l*Ul(t/(400-t),hd),e)})))
return Nl(gd,D.map((function(e,n){return e*t.dRgbInv[n]}))).map((function(e){return e/100}))}function kd(e,t){var n=e.map((function(e){return 100*e})),r=Ed(Nl(Dd,n).map((function(e,n){return e*t.dRgb[n]})),t.fl),a=r[0]+(-12*r[1]+r[2])/11,o=(r[0]+r[1]-2*r[2])/9,i=(Math.atan2(o,a)%md+md)%md,u=.25*(Math.cos(i+2)+3.8),s=Ul(5e4/13*t.nc*t.ncb*Wl(u*Math.sqrt(Math.pow(a,2)+Math.pow(o,2)),r[0]+r[1]+1.05*r[2]+.305),.9)*Math.pow(1.64-Math.pow(.29,t.n),.73),l=Ul(t.nbb*(2*r[0]+r[1]+.05*r[2])/t.aW,.5*t.c*t.z),c=100*Ul(l,2),d=4/t.c*l*(t.aW+4)*t.flRoot,p=s*l,f=p*t.flRoot,h=bc(i*Fd),m=function(e){var t=bc(e)
t<=bd.h[0]&&(t+=360)
var n=Gl(bd.h,t)-1,r=$(bd.h.slice(n,n+2),2),a=r[0],o=r[1],i=$(bd.e.slice(n,n+2),2),u=i[0],s=i[1],l=(t-a)/u
return bd.H[n]+100*l/(l+(o-t)/s)}(h)
return{J:c,C:p,h:h,s:50*Ul(t.c*s/(t.aW+4),.5),Q:d,M:f,H:m}}var Td=new ic({id:"cam16-jmh",cssId:"--cam16-jmh",name:"CAM16-JMh",coords:{j:{refRange:[0,100],name:"J"},m:{refRange:[0,105],name:"Colorfulness"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:lc,fromBase:function(e){var t=kd(e,xd)
return[t.J,t.M,t.h]},toBase:function(e){return Ad({J:e[0],M:e[1],h:e[2]},xd)}}),Nd=Zl.D65,Rd=24389/27
function Bd(e){return e>8?Math.pow((e+16)/116,3):e/Rd}var Sd=Cd(Nd,200/Math.PI*Bd(50),100*Bd(50),"average",!1),_d=new ic({id:"hct",name:"HCT",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},c:{refRange:[0,145],name:"Colorfulness"},t:{refRange:[0,100],name:"Tone"}},base:lc,fromBase:function(e){return function(e,t){var n,r=116*((n=e[1])>.008856451679035631?Math.cbrt(n):(Rd*n+16)/116)-16
if(0===r)return[0,0,0]
var a=kd(e,Sd)
return[bc(a.h),a.C,r]}(e)},toBase:function(e){return function(e,t){var n=$(e,3),r=n[0],a=n[1],o=n[2],i=[],u=0
if(0===o)return[0,0,0]
var s=Bd(o)
u=o>0?.00379058511492914*Math.pow(o,2)+.608983189401032*o+.9155088574762233:9514440756550361e-21*Math.pow(o,2)+.08693057439788597*o-21.928975842194614
for(var l=0,c=1/0;l<=15;){i=Ad({J:u,C:a,h:r},t)
var d=Math.abs(i[1]-s)
if(d<c){if(d<=2e-12)return i
c=d}u-=(i[1]-s)*u/(2*i[1]),l+=1}return Ad({J:u,C:a,h:r},t)}(e,Sd)},formats:{color:{id:"--hct",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),Od=Math.PI/180,Md=[1,.007,.0228]
function jd(e){e[1]<0&&(e=_d.fromBase(_d.toBase(e)))
var t=Math.log(Math.max(1+Md[2]*e[1]*Sd.flRoot,1))/Md[2],n=e[0]*Od,r=t*Math.cos(n),a=t*Math.sin(n)
return[e[2],r,a]}var Id={deltaE76:function(e,t){return Ic(e,t,"lab")},deltaECMC:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.l,a=void 0===r?2:r,o=n.c,i=void 0===o?1:o,u=$(ac([e,t]),2)
e=u[0],t=u[1]
var s=$(yc.from(e),3),l=s[0],c=s[1],d=s[2],p=$(Fc.from(yc,[l,c,d]),3),f=p[1],h=p[2],m=$(yc.from(t),3),D=m[0],g=m[1],v=m[2],y=Fc.from(yc,[D,g,v])[1]
f<0&&(f=0),y<0&&(y=0)
var b=l-D,F=f-y,w=c-g,E=d-v,C=Math.pow(w,2)+Math.pow(E,2)-Math.pow(F,2),x=.511
l>=16&&(x=.040975*l/(1+.01765*l))
var A,k=.0638*f/(1+.0131*f)+.638
Number.isNaN(h)&&(h=0),A=h>=164&&h<=345?.56+Math.abs(.2*Math.cos((h+168)*Pc)):.36+Math.abs(.4*Math.cos((h+35)*Pc))
var T=Math.pow(f,4),N=Math.sqrt(T/(T+1900)),R=k*(N*A+1-N),B=Math.pow(b/(a*x),2)
return B+=Math.pow(F/(i*k),2),B+=C/Math.pow(R,2),Math.sqrt(B)},deltaE2000:kc,deltaEJz:function(e,t){var n=$(ac([e,t]),2)
e=n[0],t=n[1]
var r=$(nd.from(e),3),a=r[0],o=r[1],i=r[2],u=$(nd.from(t),3),s=u[0],l=u[1],c=u[2],d=a-s,p=o-l
Number.isNaN(i)&&Number.isNaN(c)?(i=0,c=0):Number.isNaN(i)?i=c:Number.isNaN(c)&&(c=i)
var f=i-c,h=2*Math.sqrt(o*l)*Math.sin(f/2*(Math.PI/180))
return Math.sqrt(Math.pow(d,2)+Math.pow(p,2)+Math.pow(h,2))},deltaEITP:function(e,t){var n=$(ac([e,t]),2)
e=n[0],t=n[1]
var r=$(pd.from(e),3),a=r[0],o=r[1],i=r[2],u=$(pd.from(t),3),s=u[0],l=u[1],c=u[2]
return 720*Math.sqrt(Math.pow(a-s,2)+.25*Math.pow(o-l,2)+Math.pow(i-c,2))},deltaEOK:_c,deltaEHCT:function(e,t){var n=$(ac([e,t]),2)
e=n[0],t=n[1]
var r=$(jd(_d.from(e)),3),a=r[0],o=r[1],i=r[2],u=$(jd(_d.from(t)),3),s=u[0],l=u[1],c=u[2]
return Math.sqrt(Math.pow(a-s,2)+Math.pow(o-l,2)+Math.pow(i-c,2))}},Pd={hct:{method:"hct.c",jnd:2,deltaEMethod:"hct",blackWhiteClamp:{}},"hct-tonal":{method:"hct.c",jnd:0,deltaEMethod:"hct",blackWhiteClamp:{channel:"hct.t",min:0,max:100}}}
function qd(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.method,a=void 0===r?Xl.gamut_mapping:r,o=n.space,i=void 0===o?void 0:o,u=n.deltaEMethod,s=void 0===u?"":u,l=n.jnd,c=void 0===l?2:l,d=n.blackWhiteClamp,p=void 0===d?{}:d
if(e=ac(e),Rl(arguments[1])?i=arguments[1]:i||(i=e.space),Mc(e,i=ic.get(i),{epsilon:0}))return e
if("css"===a)t=function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).space,n=.02,r=1e-4
e=ac(e),t||(t=e.space),t=ic.get(t)
var a=ic.get("oklch")
if(t.isUnbounded)return Hd(e,t)
var o=Hd(e,a),i=o.coords[0]
if(i>=1){var u=Hd(Ld.WHITE,t)
return u.alpha=e.alpha,Hd(u,t)}if(i<=0){var s=Hd(Ld.BLACK,t)
return s.alpha=e.alpha,Hd(s,t)}if(Mc(o,t,{epsilon:0}))return Hd(o,t)
function l(e){var n=Hd(e,t),r=Object.values(t.coords)
return n.coords=n.coords.map((function(e,t){if("range"in r[t]){var n=$(r[t].range,2)
return $l(n[0],e,n[1])}return e})),n}var c=0,d=o.coords[1],p=!0,f=jc(o),h=l(f),m=_c(h,f)
if(m<n)return h
for(;d-c>r;){var D=(c+d)/2
if(f.coords[1]=D,p&&Mc(f,t,{epsilon:0}))c=D
else if((m=_c(h=l(f),f))<n){if(n-m<r)break
p=!1,c=D}else d=D}return h}(e,{space:i})
else{if("clip"===a||Mc(e,i))t=Hd(e,i)
else{if(Object.prototype.hasOwnProperty.call(Pd,a)){var f=Pd[a]
a=f.method,c=f.jnd,s=f.deltaEMethod,p=f.blackWhiteClamp}var h=kc
if(""!==s)for(var m in Id)if("deltae"+s.toLowerCase()===m.toLowerCase()){h=Id[m]
break}var D=qd(Hd(e,i),{method:"clip",space:i})
if(h(e,D)>c){if(3===Object.keys(p).length){var g=ic.resolveCoord(p.channel),v=pc(Hd(e,g.space),g.id)
if(_l(v)&&(v=0),v>=p.max)return Hd({space:"xyz-d65",coords:Zl.D65},e.space)
if(v<=p.min)return Hd({space:"xyz-d65",coords:[0,0,0]},e.space)}var y=ic.resolveCoord(a),b=y.space,F=y.id,w=Hd(e,b)
w.coords.forEach((function(e,t){_l(e)&&(w.coords[t]=0)}))
for(var E=(y.range||y.refRange)[0],C=function(e){var t=e?Math.floor(Math.log10(Math.abs(e))):0
return Math.max(parseFloat("1e".concat(t-2)),1e-6)}(c),x=E,A=pc(w,F);A-x>C;){var k=jc(w)
k=qd(k,{space:i,method:"clip"}),h(w,k)-c<C?x=pc(w,F):A=pc(w,F),hc(w,F,(x+A)/2)}t=Hd(w,i)}else t=D}if("clip"===a||!Mc(t,i,{epsilon:0})){var T=Object.values(i.coords).map((function(e){return e.range||[]}))
t.coords=t.coords.map((function(e,t){var n=$(T[t],2),r=n[0],a=n[1]
return void 0!==r&&(e=Math.max(r,e)),void 0!==a&&(e=Math.min(e,a)),e}))}}return i!==e.space&&(t=Hd(t,e.space)),e.coords=t.coords,e}qd.returns="color"
var Ld={WHITE:{space:Sc,coords:[1,0,0]},BLACK:{space:Sc,coords:[0,0,0]}}
function Hd(e,t){var n=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).inGamut
e=ac(e)
var r=(t=ic.get(t)).from(e),a={space:t,coords:r,alpha:e.alpha}
return n&&(a=qd(a,!0===n?void 0:n)),a}function zd(e){var t,n,r,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=a.precision,i=void 0===o?Xl.precision:o,u=a.format,s=void 0===u?"default":u,l=a.inGamut,c=void 0===l||l,d=q(a,D),p=s
s=null!==(t=null!==(n=(e=ac(e)).space.getFormat(s))&&void 0!==n?n:e.space.getFormat("default"))&&void 0!==t?t:ic.DEFAULT_FORMAT
var f=e.coords.slice()
if(c||(c=s.toGamut),c&&!Mc(e)&&(f=qd(jc(e),!0===c?void 0:c).coords),"custom"===s.type){if(d.precision=i,!s.serialize)throw new TypeError("format ".concat(p," can only be used to parse colors, not for serialization"))
r=s.serialize(f,e.alpha,d)}else{var h=s.name||"color"
s.serializeCoords?f=s.serializeCoords(f,i):null!==i&&(f=f.map((function(e){return Sl(e,{precision:i})})))
var m=L(f)
if("color"===h){var g,v=s.id||(null===(g=s.ids)||void 0===g?void 0:g[0])||e.space.id
m.unshift(v)}var y=e.alpha
null!==i&&(y=Sl(y,{precision:i}))
var b=e.alpha>=1||s.noAlpha?"":"".concat(s.commas?",":" /"," ").concat(y)
r="".concat(h,"(").concat(m.join(s.commas?", ":" ")).concat(b,")")}return r}Hd.returns="color"
var $d,Vd=new cc({id:"rec2020-linear",cssId:"--rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],fromXYZ_M:[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]]}),Ud=1.09929682680944,Wd=.018053968510807,Gd=new cc({id:"rec2020",name:"REC.2020",base:Vd,toBase:function(e){return e.map((function(e){return e<4.5*Wd?e/4.5:Math.pow((e+Ud-1)/Ud,1/.45)}))},fromBase:function(e){return e.map((function(e){return e>=Wd?Ud*Math.pow(e,.45)-(Ud-1):4.5*e}))}}),Kd=new cc({id:"p3-linear",cssId:"--display-p3-linear",name:"Linear P3",white:"D65",toXYZ_M:[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],fromXYZ_M:[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]]}),Yd=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]],Qd=new cc({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],fromXYZ_M:Yd}),Xd={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[.6,50/255,.8],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,.6],lightslategrey:[119/255,136/255,.6],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[.4,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,.8],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[.4,.2,.6],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]},Zd=Array(3).fill("<percentage> | <number>[0, 255]"),Jd=Array(3).fill("<number>[0, 255]"),ep=new cc({id:"srgb",name:"sRGB",base:Qd,fromBase:function(e){return e.map((function(e){var t=e<0?-1:1,n=e*t
return n>.0031308?t*(1.055*Math.pow(n,1/2.4)-.055):12.92*e}))},toBase:function(e){return e.map((function(e){var t=e<0?-1:1,n=e*t
return n<=.04045?e/12.92:t*Math.pow((n+.055)/1.055,2.4)}))},formats:{rgb:{coords:Zd},rgb_number:{name:"rgb",commas:!0,coords:Jd,noAlpha:!0},color:{},rgba:{coords:Zd,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:Jd},hex:{type:"custom",toGamut:!0,test:function(e){return/^#([a-f0-9]{3,4}){1,2}$/i.test(e)},parse:function(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"))
var t=[]
return e.replace(/[a-f0-9]{2}/gi,(function(e){t.push(parseInt(e,16)/255)})),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:function(e,t){var n=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).collapse,r=void 0===n||n
t<1&&e.push(t),e=e.map((function(e){return Math.round(255*e)}))
var a=r&&e.every((function(e){return e%17==0}))
return"#"+e.map((function(e){return a?(e/17).toString(16):e.toString(16).padStart(2,"0")})).join("")}},keyword:{type:"custom",test:function(e){return/^[a-z]+$/i.test(e)},parse:function(e){var t={spaceId:"srgb",coords:null,alpha:1}
if("transparent"===(e=e.toLowerCase())?(t.coords=Xd.black,t.alpha=0):t.coords=Xd[e],t.coords)return t}}}}),tp=new cc({id:"p3",cssId:"display-p3",name:"P3",base:Kd,fromBase:ep.fromBase,toBase:ep.toBase})
if(Xl.display_space=ep,"undefined"!=typeof CSS&&CSS.supports)for(var np=0,rp=[yc,Gd,tp];np<rp.length;np++){var ap=rp[np],op=ap.getMinCoords(),ip=zd({space:ap,coords:op,alpha:1})
if(CSS.supports("color",ip)){Xl.display_space=ap
break}}function up(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.space,r=void 0===n?Xl.display_space:n,a=q(t,g),o=zd(e,a)
if("undefined"==typeof CSS||CSS.supports("color",o)||!Xl.display_space)(o=new String(o)).color=e
else{var i,u=e
if((e.coords.some(_l)||_l(e.alpha))&&!(null!==(i=$d)&&void 0!==i?i:$d=CSS.supports("color","hsl(none 50% 50%)"))&&((u=jc(e)).coords=u.coords.map(Ol),u.alpha=Ol(u.alpha),o=zd(u,a),CSS.supports("color",o)))return(o=new String(o)).color=u,o
u=Hd(u,r),(o=new String(zd(u,a))).color=u}return o}function sp(e){return pc(e,[lc,"y"])}function lp(e,t){hc(e,[lc,"y"],t)}var cp=Object.freeze({__proto__:null,getLuminance:sp,register:function(e){Object.defineProperty(e.prototype,"luminance",{get:function(){return sp(this)},set:function(e){lp(this,e)}})},setLuminance:lp})
function dp(e){return e>=.022?e:e+Math.pow(.022-e,1.414)}function pp(e){var t=e<0?-1:1,n=Math.abs(e)
return t*Math.pow(n,2.4)}var fp=24/116,hp=24389/27,mp=Zl.D65,Dp=new ic({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:mp,base:lc,fromBase:function(e){var t=e.map((function(e,t){return e/mp[t]})).map((function(e){return e>.008856451679035631?Math.cbrt(e):(hp*e+16)/116}))
return[116*t[1]-16,500*(t[0]-t[1]),200*(t[1]-t[2])]},toBase:function(e){var t=[]
return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>fp?Math.pow(t[0],3):(116*t[0]-16)/hp,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/hp,t[2]>fp?Math.pow(t[2],3):(116*t[2]-16)/hp].map((function(e,t){return e*mp[t]}))},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),gp=.5*Math.pow(5,.5)+.5,vp=Object.freeze({__proto__:null,contrastAPCA:function(e,t){var n,r,a,o
t=ac(t),e=ac(e)
var i=$((t=Hd(t,"srgb")).coords,3)
r=i[0],a=i[1],o=i[2]
var u=.2126729*pp(r)+.7151522*pp(a)+.072175*pp(o),s=$((e=Hd(e,"srgb")).coords,3)
r=s[0],a=s[1],o=s[2]
var l=.2126729*pp(r)+.7151522*pp(a)+.072175*pp(o),c=dp(u),d=dp(l),p=d>c
return n=Math.abs(d-c)<5e-4?0:p?1.14*(Math.pow(d,.56)-Math.pow(c,.57)):1.14*(Math.pow(d,.65)-Math.pow(c,.62)),100*(Math.abs(n)<.1?0:n>0?n-.027:n+.027)},contrastDeltaPhi:function(e,t){e=ac(e),t=ac(t)
var n=pc(e,[Dp,"l"]),r=pc(t,[Dp,"l"]),a=Math.abs(Math.pow(n,gp)-Math.pow(r,gp)),o=Math.pow(a,1/gp)*Math.SQRT2-40
return o<7.5?0:o},contrastLstar:function(e,t){e=ac(e),t=ac(t)
var n=pc(e,[yc,"l"]),r=pc(t,[yc,"l"])
return Math.abs(n-r)},contrastMichelson:function(e,t){e=ac(e),t=ac(t)
var n=Math.max(sp(e),0),r=Math.max(sp(t),0)
if(r>n){var a=[r,n]
n=a[0],r=a[1]}var o=n+r
return 0===o?0:(n-r)/o},contrastWCAG21:function(e,t){e=ac(e),t=ac(t)
var n=Math.max(sp(e),0),r=Math.max(sp(t),0)
if(r>n){var a=[r,n]
n=a[0],r=a[1]}return(n+.05)/(r+.05)},contrastWeber:function(e,t){e=ac(e),t=ac(t)
var n=Math.max(sp(e),0),r=Math.max(sp(t),0)
if(r>n){var a=[r,n]
n=a[0],r=a[1]}return 0===r?5e4:(n-r)/r}})
function yp(e){var t=$(dc(e,lc),3),n=t[0],r=t[1],a=n+15*r+3*t[2]
return[4*n/a,9*r/a]}function bp(e){var t=$(dc(e,lc),3),n=t[0],r=t[1],a=n+r+t[2]
return[n/a,r/a]}var Fp=Object.freeze({__proto__:null,register:function(e){Object.defineProperty(e.prototype,"uv",{get:function(){return yp(this)}}),Object.defineProperty(e.prototype,"xy",{get:function(){return bp(this)}})},uv:yp,xy:bp})
function wp(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
Rl(n)&&(n={method:n})
var r=n,a=r.method,o=void 0===a?Xl.deltaE:a,i=q(r,y)
for(var u in Id)if("deltae"+o.toLowerCase()===u.toLowerCase())return Id[u](e,t,i)
throw new TypeError("Unknown deltaE method: ".concat(o))}var Ep=Object.freeze({__proto__:null,darken:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.25
return hc(e,[ic.get("oklch","lch"),"l"],(function(e){return e*(1-t)}))},lighten:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.25
return hc(e,[ic.get("oklch","lch"),"l"],(function(e){return e*(1+t)}))}})
function Cp(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.5,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=[ac(e),ac(t)]
if(e=a[0],t=a[1],"object"===Bl(n)){var o=[.5,n]
n=o[0],r=o[1]}return Ap(e,t,r)(n)}function xp(e,t){var n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
if(kp(e)){r=t
var a=$((n=e).rangeArgs.colors,2)
e=a[0],t=a[1]}var o=r,i=o.maxDeltaE,u=o.deltaEMethod,s=o.steps,l=void 0===s?2:s,c=o.maxSteps,d=void 0===c?1e3:c,p=q(o,b)
if(!n){var f=[ac(e),ac(t)]
n=Ap(e=f[0],t=f[1],p)}var h=wp(e,t),m=i>0?Math.max(l,Math.ceil(h/i)+1):l,D=[]
if(void 0!==d&&(m=Math.min(m,d)),1===m)D=[{p:.5,color:n(.5)}]
else{var g=1/(m-1)
D=Array.from({length:m},(function(e,t){var r=t*g
return{p:r,color:n(r)}}))}if(i>0)for(var v=D.reduce((function(e,t,n){if(0===n)return 0
var r=wp(t.color,D[n-1].color,u)
return Math.max(e,r)}),0);v>i;){v=0
for(var y=1;y<D.length&&D.length<d;y++){var F=D[y-1],w=D[y],E=(w.p+F.p)/2,C=n(E)
v=Math.max(v,wp(C,F.color),wp(C,w.color)),D.splice(y,0,{p:E,color:n(E)}),y++}}return D=D.map((function(e){return e.color}))}function Ap(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
if(kp(e)){var r=e,a=t
return Ap.apply(void 0,L(r.rangeArgs.colors).concat([z({},r.rangeArgs.options,a)]))}var o=n.space,i=n.outputSpace,u=n.progression,s=n.premultiplied
e=ac(e),t=ac(t),e=jc(e),t=jc(t)
var l={colors:[e,t],options:n}
if(o=o?ic.get(o):ic.registry[Xl.interpolationSpace]||e.space,i=i?ic.get(i):o,e=Hd(e,o),t=Hd(t,o),e=qd(e),t=qd(t),o.coords.h&&"angle"===o.coords.h.type){var c=n.hue=n.hue||"shorter",d=[o,"h"],p=[pc(e,d),pc(t,d)],f=p[0],h=p[1]
isNaN(f)&&!isNaN(h)?f=h:isNaN(h)&&!isNaN(f)&&(h=f)
var m=function(e,t){if("raw"===e)return t
var n=$(t.map(bc),2),r=n[0],a=n[1],o=a-r
return"increasing"===e?o<0&&(a+=360):"decreasing"===e?o>0&&(r+=360):"longer"===e?-180<o&&o<180&&(o>0?r+=360:a+=360):"shorter"===e&&(o>180?r+=360:o<-180&&(a+=360)),[r,a]}(c,[f,h]),D=$(m,2)
f=D[0],h=D[1],hc(e,d,f),hc(t,d,h)}return s&&(e.coords=e.coords.map((function(t){return t*e.alpha})),t.coords=t.coords.map((function(e){return e*t.alpha}))),Object.assign((function(n){n=u?u(n):n
var r=e.coords.map((function(e,r){return ql(e,t.coords[r],n)})),a=ql(e.alpha,t.alpha,n),l={space:o,coords:r,alpha:a}
return s&&(l.coords=l.coords.map((function(e){return e/a}))),i!==o&&(l=Hd(l,i)),l}),{rangeArgs:l})}function kp(e){return"function"===Bl(e)&&!!e.rangeArgs}Xl.interpolationSpace="lab"
var Tp=Object.freeze({__proto__:null,isRange:kp,mix:Cp,range:Ap,register:function(e){e.defineFunction("mix",Cp,{returns:"color"}),e.defineFunction("range",Ap,{returns:"function<color>"}),e.defineFunction("steps",xp,{returns:"array<color>"})},steps:xp}),Np=new ic({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:ep,fromBase:function(e){var t=Math.max.apply(Math,L(e)),n=Math.min.apply(Math,L(e)),r=$(e,3),a=r[0],o=r[1],i=r[2],u=NaN,s=0,l=(n+t)/2,c=t-n
if(0!==c){switch(s=0===l||1===l?0:(t-l)/Math.min(l,1-l),t){case a:u=(o-i)/c+(o<i?6:0)
break
case o:u=(i-a)/c+2
break
case i:u=(a-o)/c+4}u*=60}return s<0&&(u+=180,s=Math.abs(s)),u>=360&&(u-=360),[u,100*s,100*l]},toBase:function(e){var t=$(e,3),n=t[0],r=t[1],a=t[2]
function o(e){var t=(e+n/30)%12,o=r*Math.min(a,1-a)
return a-o*Math.max(-1,Math.min(t-3,9-t,1))}return(n%=360)<0&&(n+=360),r/=100,a/=100,[o(0),o(8),o(4)]},formats:{hsl:{coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),Rp=new ic({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:Np,fromBase:function(e){var t=$(e,3),n=t[0],r=t[1],a=t[2],o=(a/=100)+(r/=100)*Math.min(a,1-a)
return[n,0===o?0:200*(1-a/o),100*o]},toBase:function(e){var t=$(e,3),n=t[0],r=t[1],a=t[2],o=(a/=100)*(1-(r/=100)/2)
return[n,0===o||1===o?0:(a-o)/Math.min(o,1-o)*100,100*o]},formats:{color:{id:"--hsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),Bp=new ic({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:Rp,fromBase:function(e){var t=$(e,3),n=t[0],r=t[1],a=t[2]
return[n,a*(100-r)/100,100-a]},toBase:function(e){var t=$(e,3),n=t[0],r=t[1],a=t[2],o=(r/=100)+(a/=100)
if(o>=1)return[n,0,r/o*100]
var i=1-a
return[n,100*(0===i?0:1-r/i),100*i]},formats:{hwb:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),Sp=new cc({id:"a98rgb-linear",cssId:"--a98-rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],fromXYZ_M:[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]]}),_p=new cc({id:"a98rgb",cssId:"a98-rgb",name:"Adobe® 98 RGB compatible",base:Sp,toBase:function(e){return e.map((function(e){return Math.pow(Math.abs(e),563/256)*Math.sign(e)}))},fromBase:function(e){return e.map((function(e){return Math.pow(Math.abs(e),256/563)*Math.sign(e)}))}}),Op=new cc({id:"prophoto-linear",cssId:"--prophoto-rgb-linear",name:"Linear ProPhoto",white:"D50",base:mc,toXYZ_M:[[.7977666449006423,.13518129740053308,.0313477341283922],[.2880748288194013,.711835234241873,8993693872564e-17],[0,0,.8251046025104602]],fromXYZ_M:[[1.3457868816471583,-.25557208737979464,-.05110186497554526],[-.5446307051249019,1.5082477428451468,.02052744743642139],[0,0,1.2119675456389452]]}),Mp=new cc({id:"prophoto",cssId:"prophoto-rgb",name:"ProPhoto",base:Op,toBase:function(e){return e.map((function(e){return e<.03125?e/16:Math.pow(e,1.8)}))},fromBase:function(e){return e.map((function(e){return e>=.001953125?Math.pow(e,1/1.8):16*e}))}}),jp=new ic({id:"oklch",name:"Oklch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:Sc,fromBase:function(e){var t,n=$(e,3),r=n[0],a=n[1],o=n[2],i=2e-4
return t=Math.abs(a)<i&&Math.abs(o)<i?NaN:180*Math.atan2(o,a)/Math.PI,[r,Math.sqrt(Math.pow(a,2)+Math.pow(o,2)),bc(t)]},toBase:function(e){var t,n,r=$(e,3),a=r[0],o=r[1],i=r[2]
return isNaN(i)?(t=0,n=0):(t=o*Math.cos(i*Math.PI/180),n=o*Math.sin(i*Math.PI/180)),[a,t,n]},formats:{oklch:{coords:["<percentage> | <number>","<number> | <percentage>[0,1]","<number> | <angle>"]}}}),Ip=Zl.D65,Pp=24389/27,qp=$(yp({space:lc,coords:Ip}),2),Lp=qp[0],Hp=qp[1],zp=new ic({id:"luv",name:"Luv",coords:{l:{refRange:[0,100],name:"Lightness"},u:{refRange:[-215,215]},v:{refRange:[-215,215]}},white:Ip,base:lc,fromBase:function(e){var t=[Ol(e[0]),Ol(e[1]),Ol(e[2])],n=t[1],r=$(yp({space:lc,coords:t}),2),a=r[0],o=r[1]
if(!Number.isFinite(a)||!Number.isFinite(o))return[0,0,0]
var i=n<=.008856451679035631?Pp*n:116*Math.cbrt(n)-16
return[i,13*i*(a-Lp),13*i*(o-Hp)]},toBase:function(e){var t=$(e,3),n=t[0],r=t[1],a=t[2]
if(0===n||_l(n))return[0,0,0]
r=Ol(r),a=Ol(a)
var o=r/(13*n)+Lp,i=a/(13*n)+Hp,u=n<=8?n/Pp:Math.pow((n+16)/116,3)
return[u*(9*o/(4*i)),u,u*((12-3*o-20*i)/(4*i))]},formats:{color:{id:"--luv",coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),$p=new ic({id:"lchuv",name:"LChuv",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,220],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:zp,fromBase:function(e){var t,n=$(e,3),r=n[0],a=n[1],o=n[2]
return t=Math.abs(a)<.02&&Math.abs(o)<.02?NaN:180*Math.atan2(o,a)/Math.PI,[r,Math.sqrt(Math.pow(a,2)+Math.pow(o,2)),bc(t)]},toBase:function(e){var t=$(e,3),n=t[0],r=t[1],a=t[2]
return r<0&&(r=0),isNaN(a)&&(a=0),[n,r*Math.cos(a*Math.PI/180),r*Math.sin(a*Math.PI/180)]},formats:{color:{id:"--lchuv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}}),Vp=Yd[0][0],Up=Yd[0][1],Wp=Yd[0][2],Gp=Yd[1][0],Kp=Yd[1][1],Yp=Yd[1][2],Qp=Yd[2][0],Xp=Yd[2][1],Zp=Yd[2][2]
function Jp(e,t,n){var r=t/(Math.sin(n)-e*Math.cos(n))
return r<0?1/0:r}function ef(e){var t=Math.pow(e+16,3)/1560896,n=t>.008856451679035631?t:e/903.2962962962963,r=n*(284517*Vp-94839*Wp),a=n*(838422*Wp+769860*Up+731718*Vp),o=n*(632260*Wp-126452*Up),i=n*(284517*Gp-94839*Yp),u=n*(838422*Yp+769860*Kp+731718*Gp),s=n*(632260*Yp-126452*Kp),l=n*(284517*Qp-94839*Zp),c=n*(838422*Zp+769860*Xp+731718*Qp),d=n*(632260*Zp-126452*Xp)
return{r0s:r/o,r0i:a*e/o,r1s:r/(o+126452),r1i:(a-769860)*e/(o+126452),g0s:i/s,g0i:u*e/s,g1s:i/(s+126452),g1i:(u-769860)*e/(s+126452),b0s:l/d,b0i:c*e/d,b1s:l/(d+126452),b1i:(c-769860)*e/(d+126452)}}function tf(e,t){var n=t/360*Math.PI*2,r=Jp(e.r0s,e.r0i,n),a=Jp(e.r1s,e.r1i,n),o=Jp(e.g0s,e.g0i,n),i=Jp(e.g1s,e.g1i,n),u=Jp(e.b0s,e.b0i,n),s=Jp(e.b1s,e.b1i,n)
return Math.min(r,a,o,i,u,s)}var nf=new ic({id:"hsluv",name:"HSLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:$p,gamutSpace:ep,fromBase:function(e){var t,n=[Ol(e[0]),Ol(e[1]),Ol(e[2])],r=n[0],a=n[2]
return r>99.9999999?(t=0,r=100):r<1e-8?(t=0,r=0):t=n[1]/tf(ef(r),a)*100,[a,t,r]},toBase:function(e){var t,n=[Ol(e[0]),Ol(e[1]),Ol(e[2])],r=n[0],a=n[1],o=n[2]
return o>99.9999999?(o=100,t=0):o<1e-8?(o=0,t=0):t=tf(ef(o),r)/100*a,[o,t,r]},formats:{color:{id:"--hsluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}})
function rf(e,t){return Math.abs(t)/Math.sqrt(Math.pow(e,2)+1)}function af(e){var t=rf(e.r0s,e.r0i),n=rf(e.r1s,e.r1i),r=rf(e.g0s,e.g0i),a=rf(e.g1s,e.g1i),o=rf(e.b0s,e.b0i),i=rf(e.b1s,e.b1i)
return Math.min(t,n,r,a,o,i)}Yd[0][0],Yd[0][1],Yd[0][2],Yd[1][0],Yd[1][1],Yd[1][2],Yd[2][0],Yd[2][1],Yd[2][2]
var of=new ic({id:"hpluv",name:"HPLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:$p,gamutSpace:"self",fromBase:function(e){var t,n=[Ol(e[0]),Ol(e[1]),Ol(e[2])],r=n[0],a=n[2]
return r>99.9999999?(t=0,r=100):r<1e-8?(t=0,r=0):t=n[1]/af(ef(r))*100,[a,t,r]},toBase:function(e){var t,n=[Ol(e[0]),Ol(e[1]),Ol(e[2])],r=n[0],a=n[1],o=n[2]
return o>99.9999999?(o=100,t=0):o<1e-8?(o=0,t=0):t=af(ef(o))/100*a,[o,t,r]},formats:{color:{id:"--hpluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),uf=2610/Math.pow(2,14),sf=Math.pow(2,14)/2610,lf=2523/Math.pow(2,5),cf=Math.pow(2,5)/2523,df=3424/Math.pow(2,12),pf=2413/Math.pow(2,7),ff=2392/Math.pow(2,7),hf=new cc({id:"rec2100pq",cssId:"rec2100-pq",name:"REC.2100-PQ",base:Vd,toBase:function(e){return e.map((function(e){return 1e4*Math.pow(Math.max(Math.pow(e,cf)-df,0)/(pf-ff*Math.pow(e,cf)),sf)/203}))},fromBase:function(e){return e.map((function(e){var t=Math.max(203*e/1e4,0),n=df+pf*Math.pow(t,uf),r=1+ff*Math.pow(t,uf)
return Math.pow(n/r,lf)}))}}),mf=.17883277,Df=.28466892,gf=.55991073,vf=3.7743,yf=new cc({id:"rec2100hlg",cssId:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:Vd,toBase:function(e){return e.map((function(e){return e<=.5?Math.pow(e,2)/3*vf:(Math.exp((e-gf)/mf)+Df)/12*vf}))},fromBase:function(e){return e.map((function(e){return(e/=vf)<=1/12?Math.sqrt(3*e):mf*Math.log(12*e-Df)+gf}))}}),bf={}
function Ff(e){var t=e.id
e.toCone_M,e.fromCone_M,bf[t]=arguments[0]}function wf(e,t){var n=bf[arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Bradford"],r=$(Nl(n.toCone_M,e),3),a=r[0],o=r[1],i=r[2],u=$(Nl(n.toCone_M,t),3),s=Nl([[u[0]/a,0,0],[0,u[1]/o,0],[0,0,u[2]/i]],n.toCone_M)
return Nl(n.fromCone_M,s)}Ql.add("chromatic-adaptation-start",(function(e){e.options.method&&(e.M=wf(e.W1,e.W2,e.options.method))})),Ql.add("chromatic-adaptation-end",(function(e){e.M||(e.M=wf(e.W1,e.W2,e.options.method))})),Ff({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599363874558397,-1.1293816185800916,.21989740959619328],[.3611914362417676,.6388124632850422,-6370596838649899e-21],[0,0,1.0890636230968613]]}),Ff({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929054667121,-.14705425642099013,.15996265166373122],[.4323052697233945,.5183602715367774,.049291228212855594],[-.00852866457517732,.04004282165408486,.96848669578755]]}),Ff({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238208355142,-.27886900021828726,.18274517938277307],[.4543690419753592,.4735331543074117,.07209780371722911],[-.009627608738429355,-.00569803121611342,1.0153256399545427]]}),Ff({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.0112546305316845,.14918677544445172],[.3875265432361372,.6214474419314753,-.008973985167612521],[-.01584149884933386,-.03412293802851557,1.0499644368778496]]}),Object.assign(Zl,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]}),Zl.ACES=[.32168/.33767,1,.34065/.33767]
var Ef=new cc({id:"acescg",cssId:"--acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:Zl.ACES,toXYZ_M:[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],fromXYZ_M:[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]]}),Cf=Math.pow(2,-16),xf=-.35828683,Af=(Math.log2(65504)+9.72)/17.52,kf=new cc({id:"acescc",cssId:"--acescc",name:"ACEScc",coords:{r:{range:[xf,Af],name:"Red"},g:{range:[xf,Af],name:"Green"},b:{range:[xf,Af],name:"Blue"}},referred:"scene",base:Ef,toBase:function(e){return e.map((function(e){return e<=-.3013698630136986?2*(Math.pow(2,17.52*e-9.72)-Cf):e<Af?Math.pow(2,17.52*e-9.72):65504}))},fromBase:function(e){return e.map((function(e){return e<=0?(Math.log2(Cf)+9.72)/17.52:e<Cf?(Math.log2(Cf+.5*e)+9.72)/17.52:(Math.log2(e)+9.72)/17.52}))}}),Tf=Object.freeze({__proto__:null,A98RGB:_p,A98RGB_Linear:Sp,ACEScc:kf,ACEScg:Ef,CAM16_JMh:Td,HCT:_d,HPLuv:of,HSL:Np,HSLuv:nf,HSV:Rp,HWB:Bp,ICTCP:pd,JzCzHz:nd,Jzazbz:td,LCH:Fc,LCHuv:$p,Lab:yc,Lab_D65:Dp,Luv:zp,OKLCH:jp,OKLab:Sc,P3:tp,P3_Linear:Kd,ProPhoto:Mp,ProPhoto_Linear:Op,REC_2020:Gd,REC_2020_Linear:Vd,REC_2100_HLG:yf,REC_2100_PQ:hf,XYZ_ABS_D65:qc,XYZ_D50:mc,XYZ_D65:lc,sRGB:ep,sRGB_Linear:Qd}),Nf=function(){function e(){var t,n,r,a,o=this
W(this,e)
for(var i=arguments.length,u=new Array(i),s=0;s<i;s++)u[s]=arguments[s]
1===u.length&&(t=ac(u[0])),t?(n=t.space||t.spaceId,r=t.coords,a=t.alpha):(n=u[0],r=u[1],a=u[2]),Object.defineProperty(this,"space",{value:ic.get(n),writable:!1,enumerable:!0,configurable:!0}),this.coords=r?r.slice():[0,0,0],this.alpha=a>1||void 0===a?1:a<0?0:a
for(var l=0;l<this.coords.length;l++)"NaN"===this.coords[l]&&(this.coords[l]=NaN)
var c=function(e){Object.defineProperty(o,e,{get:function(){return o.get(e)},set:function(t){return o.set(e,t)}})}
for(var d in this.space.coords)c(d)}return K(e,[{key:"spaceId",get:function(){return this.space.id}},{key:"clone",value:function(){return new e(this.space,this.coords,this.alpha)}},{key:"toJSON",value:function(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}},{key:"display",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
var a=up.apply(void 0,[this].concat(n))
return a.color=new e(a.color),a}}],[{key:"get",value:function(t){if(t instanceof e)return t
for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a]
return function(e,t,n){if(M())return Reflect.construct.apply(null,arguments)
var r=[null]
r.push.apply(r,t)
var a=new(e.bind.apply(e,r))
return n&&P(a,n.prototype),a}(e,[t].concat(r))}},{key:"defineFunction",value:function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n,a=r.instance,o=void 0===a||a,i=r.returns,u=function(){var t=n.apply(void 0,arguments)
if("color"===i)t=e.get(t)
else if("function<color>"===i){var r=t
t=function(){var t=r.apply(void 0,arguments)
return e.get(t)},Object.assign(t,r)}else"array<color>"===i&&(t=t.map((function(t){return e.get(t)})))
return t}
t in e||(e[t]=u),o&&(e.prototype[t]=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return u.apply(void 0,[this].concat(t))})}},{key:"defineFunctions",value:function(t){for(var n in t)e.defineFunction(n,t[n],t[n])}},{key:"extend",value:function(t){if(t.register)t.register(e)
else for(var n in t)e.defineFunction(n,t[n])}}]),e}()
Nf.defineFunctions({get:pc,getAll:dc,set:hc,setAll:fc,to:Hd,equals:function(e,t){return e=ac(e),t=ac(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((function(e,n){return e===t.coords[n]}))},inGamut:Mc,toGamut:qd,distance:Ic,toString:zd}),Object.assign(Nf,{util:Kl,hooks:Ql,WHITES:Zl,Space:ic,spaces:ic.registry,parse:rc,defaults:Xl})
for(var Rf=0,Bf=Object.keys(Tf);Rf<Bf.length;Rf++){var Sf=Bf[Rf]
ic.register(Tf[Sf])}for(var _f in ic.registry)Of(_f,ic.registry[_f])
function Of(e,t){var n=e.replace(/-/g,"_")
Object.defineProperty(Nf.prototype,n,{get:function(){var n=this,r=this.getAll(e)
return"undefined"==typeof Proxy?r:new Proxy(r,{has:function(e,n){try{return ic.resolveCoord([t,n]),!0}catch(e){}return Reflect.has(e,n)},get:function(e,n,r){if(n&&"symbol"!==o(n)&&!(n in e)){var a=ic.resolveCoord([t,n]).index
if(a>=0)return e[a]}return Reflect.get(e,n,r)},set:function(r,a,i,u){if(a&&"symbol"!==o(a)&&!(a in r)||a>=0){var s=ic.resolveCoord([t,a]).index
if(s>=0)return r[s]=i,n.setAll(e,r),!0}return Reflect.set(r,a,i,u)}})},set:function(t){this.setAll(e,t)},configurable:!0,enumerable:!0})}Ql.add("colorspace-init-end",(function(e){var t
Of(e.id,e),null===(t=e.aliases)||void 0===t||t.forEach((function(t){Of(t,e)}))})),Nf.extend(Id),Nf.extend({deltaE:wp}),Object.assign(Nf,{deltaEMethods:Id}),Nf.extend(Ep),Nf.extend({contrast:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
Rl(n)&&(n={algorithm:n})
var r=n,a=r.algorithm,o=q(r,v)
if(!a){var i=Object.keys(vp).map((function(e){return e.replace(/^contrast/,"")})).join(", ")
throw new TypeError("contrast() function needs a contrast algorithm. Please specify one of: ".concat(i))}for(var u in e=ac(e),t=ac(t),vp)if("contrast"+a.toLowerCase()===u.toLowerCase())return vp[u](e,t,o)
throw new TypeError("Unknown contrast algorithm: ".concat(a))}}),Nf.extend(Fp),Nf.extend(cp),Nf.extend(Tp),Nf.extend(vp),kl.default.templateSettings.strip=!1
var Mf=/^#[0-9a-f]{3,8}$/i,jf=(t=new WeakMap,B=new WeakMap,j=new WeakMap,G=new WeakMap,Z=new WeakMap,J=new WeakMap,ee=new WeakSet,function(){function e(n,r,a){var o,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1
if(W(this,e),T(this,o=ee),o.add(this),k(this,t,{writable:!0,value:void 0}),k(this,B,{writable:!0,value:void 0}),k(this,j,{writable:!0,value:void 0}),k(this,G,{writable:!0,value:void 0}),k(this,Z,{writable:!0,value:void 0}),k(this,J,{writable:!0,value:void 0}),n instanceof e){var u=n.r,s=n.g,l=n.b
return this.r=u,this.g=s,this.b=l,void(this.alpha=n.alpha)}this.red=n,this.green=r,this.blue=a,this.alpha=i}return K(e,[{key:"r",get:function(){return R(this,t)},set:function(e){N(this,t,e),N(this,G,Math.round(255*qf(e,0,1)))}},{key:"g",get:function(){return R(this,B)},set:function(e){N(this,B,e),N(this,Z,Math.round(255*qf(e,0,1)))}},{key:"b",get:function(){return R(this,j)},set:function(e){N(this,j,e),N(this,J,Math.round(255*qf(e,0,1)))}},{key:"red",get:function(){return R(this,G)},set:function(e){N(this,t,e/255),N(this,G,qf(e,0,255))}},{key:"green",get:function(){return R(this,Z)},set:function(e){N(this,B,e/255),N(this,Z,qf(e,0,255))}},{key:"blue",get:function(){return R(this,J)},set:function(e){N(this,j,e/255),N(this,J,qf(e,0,255))}},{key:"toHexString",value:function(){var e=Math.round(this.red).toString(16),t=Math.round(this.green).toString(16),n=Math.round(this.blue).toString(16)
return"#"+(this.red>15.5?e:"0"+e)+(this.green>15.5?t:"0"+t)+(this.blue>15.5?n:"0"+n)}},{key:"toJSON",value:function(){return{red:this.red,green:this.green,blue:this.blue,alpha:this.alpha}}},{key:"parseString",value:function(e){try{var t=new Nf(e).to("srgb")
this.r=t.r,this.g=t.g,this.b=t.b,this.alpha=+t.alpha}catch(t){throw new Error('Unable to parse color "'.concat(e,'"'))}return this}},{key:"parseRgbString",value:function(e){this.parseString(e)}},{key:"parseHexString",value:function(e){e.match(Mf)&&![6,8].includes(e.length)&&this.parseString(e)}},{key:"parseColorFnString",value:function(e){this.parseString(e)}},{key:"getRelativeLuminance",value:function(){var e=this.r,t=this.g,n=this.b
return.2126*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.7152*(t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))+.0722*(n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4))}},{key:"getLuminosity",value:function(){return.3*this.r+.59*this.g+.11*this.b}},{key:"setLuminosity",value:function(e){var t,n,r=e-this.getLuminosity()
return(t=ee,n=If,S(t,this),n).call(this,r).clip()}},{key:"getSaturation",value:function(){return Math.max(this.r,this.g,this.b)-Math.min(this.r,this.g,this.b)}},{key:"setSaturation",value:function(t){var n=new e(this),r=$([{name:"r",value:n.r},{name:"g",value:n.g},{name:"b",value:n.b}].sort((function(e,t){return e.value-t.value})),3),a=r[0],o=r[1],i=r[2]
return i.value>a.value?(o.value=(o.value-a.value)*t/(i.value-a.value),i.value=t):o.value=i.value=0,a.value=0,n[i.name]=i.value,n[a.name]=a.value,n[o.name]=o.value,n}},{key:"clip",value:function(){var t=new e(this),n=t.getLuminosity(),r=Math.min(t.r,t.g,t.b),a=Math.max(t.r,t.g,t.b)
return r<0&&(t.r=n+(t.r-n)*n/(n-r),t.g=n+(t.g-n)*n/(n-r),t.b=n+(t.b-n)*n/(n-r)),a>1&&(t.r=n+(t.r-n)*(1-n)/(a-n),t.g=n+(t.g-n)*(1-n)/(a-n),t.b=n+(t.b-n)*(1-n)/(a-n)),t}}]),e}())
function If(e){var t=new jf(this)
return t.r+=e,t.g+=e,t.b+=e,t}var Pf=jf
function qf(e,t,n){return Math.min(Math.max(t,e),n)}var Lf=function(e){var t=new Pf
if(t.parseString(e.getPropertyValue("background-color")),0!==t.alpha){var n=e.getPropertyValue("opacity")
t.alpha=t.alpha*n}return t},Hf=function(e){var t=n.getComputedStyle(e)
return Dl(e,t)||1===Lf(t).alpha}
function zf(e){if(!e.href)return!1
var t=da.get("firstPageLink",$f)
return!t||e.compareDocumentPosition(t.actualNode)===e.DOCUMENT_POSITION_FOLLOWING}function $f(){return(n.location.origin?km(i._tree,'a[href]:not([href^="javascript:"])').find((function(e){return!Xi(e.actualNode)})):km(i._tree,'a:not([href^="#"]):not([href^="/#"]):not([href^="javascript:"])')[0])||null}var Vf=/rect\s*\(([0-9]+)px,?\s*([0-9]+)px,?\s*([0-9]+)px,?\s*([0-9]+)px\s*\)/,Uf=/(\w+)\((\d+)/,Wf=function e(t,r,a){var o
if(!t)throw new TypeError("Cannot determine if element is visible for non-DOM nodes")
var u=t instanceof vr?t:pa(t)
t=u?u.actualNode:t
var s="_isVisible"+(r?"ScreenReader":""),l=null!==(o=n.Node)&&void 0!==o?o:{},c=l.DOCUMENT_NODE,d=l.DOCUMENT_FRAGMENT_NODE,p=u?u.props.nodeType:t.nodeType,f=u?u.props.nodeName:t.nodeName.toLowerCase()
if(u&&void 0!==u[s])return u[s]
if(p===c)return!0
if(["style","script","noscript","template"].includes(f))return!1
if(t&&p===d&&(t=t.host),r&&"true"===(u?u.attr("aria-hidden"):t.getAttribute("aria-hidden")))return!1
if(!t){var h=u.parent,m=!0
return h&&(m=e(h,r,!0)),u&&(u[s]=m),m}var D=n.getComputedStyle(t,null)
if(null===D)return!1
if("area"===f)return function(t,n,r){var a=Lo(t,"map")
if(!a)return!1
var o=a.getAttribute("name")
if(!o)return!1
var u=Io(t)
if(!u||9!==u.nodeType)return!1
var s=km(i._tree,'img[usemap="#'.concat(Or(o),'"]'))
return!(!s||!s.length)&&s.some((function(t){return e(t.actualNode,n,r)}))}(t,r,a)
if("none"===D.getPropertyValue("display"))return!1
var g=parseInt(D.getPropertyValue("height")),v=parseInt(D.getPropertyValue("width")),y=Kh(t),b=y&&0===g,F=y&&0===v,w="absolute"===D.getPropertyValue("position")&&(g<2||v<2)&&"hidden"===D.getPropertyValue("overflow")
if(!r&&(function(e){var t=e.getPropertyValue("clip").match(Vf),n=e.getPropertyValue("clip-path").match(Uf)
if(t&&5===t.length){var r=e.getPropertyValue("position")
if(["fixed","absolute"].includes(r))return t[3]-t[1]<=0&&t[2]-t[4]<=0}if(n){var a=n[1],o=parseInt(n[2],10)
switch(a){case"inset":return o>=50
case"circle":return 0===o}}return!1}(D)||"0"===D.getPropertyValue("opacity")||b||F||w))return!1
if(!a&&("hidden"===D.getPropertyValue("visibility")||!r&&di(t)))return!1
var E=t.assignedSlot?t.assignedSlot:t.parentNode,C=!1
return E&&(C=e(E,r,!0)),u&&(u[s]=C),C},Gf=function(e,t){for(var r=["fixed","sticky"],a=[],o=!1,i=0;i<e.length;++i){var u=e[i]
u===t&&(o=!0)
var s=n.getComputedStyle(u)
o||-1===r.indexOf(s.position)?a.push(u):a=[]}return a}
function Kf(e,t){var n=Yf(t)
do{var r=Yf(e)
if(r===n||r===t)return Qf(e,t)
e=r}while(e)
return!1}function Yf(e){for(var t=pa(e).parent;t;){if(Kh(t.actualNode))return t.actualNode
t=t.parent}}function Qf(e,t){var r=n.getComputedStyle(t),a=r.getPropertyValue("overflow")
if("inline"===r.getPropertyValue("display"))return!0
var o=Array.from(e.getClientRects()),i=t.getBoundingClientRect(),u={left:i.left,top:i.top,width:i.width,height:i.height}
return(["scroll","auto"].includes(a)||t instanceof n.HTMLHtmlElement)&&(u.width=t.scrollWidth,u.height=t.scrollHeight),1===o.length&&"hidden"===a&&"nowrap"===r.getPropertyValue("white-space")&&(o[0]=u),o.some((function(e){return!(Math.ceil(e.left)<Math.floor(u.left)||Math.ceil(e.top)<Math.floor(u.top)||Math.floor(e.left+e.width)>Math.ceil(u.left+u.width)||Math.floor(e.top+e.height)>Math.ceil(u.top+u.height))}))}var Xf=function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0
if(o>999)throw new Error("Infinite loop detected")
return Array.from(r.elementsFromPoint(t,n)||[]).filter((function(e){return Io(e)===r})).reduce((function(r,a){if(Oo(a)){var i=e(t,n,a.shadowRoot,o+1);(r=r.concat(i)).length&&Kf(r[0],a)&&r.push(a)}else r.push(a)
return r}),[])}
function Zf(e){var t={}
if(!e||!e.length)return t
var n=e.substring(1).split("&")
if(!n||!n.length)return t
for(var r=0;r<n.length;r++){var a=$(n[r].split("="),2),o=a[0],i=a[1],u=void 0===i?"":i
t[decodeURIComponent(o)]=decodeURIComponent(u)}return t}function Jf(e){if(!e)return""
var t=e.match(/#!?\/?/g)
return t?"#"===$(t,1)[0]?"":e:""}var eh,th=function(e,t){if(e.hasAttribute(t)){var n=e.nodeName.toUpperCase(),r=e;["A","AREA"].includes(n)&&!e.ownerSVGElement||((r=a.createElement("a")).href=e.getAttribute(t))
var o,i=["https:","ftps:"].includes(r.protocol)?r.protocol.replace(/s:$/,":"):r.protocol,u=function(e){var t=e.split("/").pop()
return t&&-1!==t.indexOf(".")?{pathname:e.replace(t,""),filename:/index./.test(t)?"":t}:{pathname:e,filename:""}}(/^\//.test(r.pathname)?r.pathname:"/".concat(r.pathname)),s=u.pathname,l=u.filename
return{protocol:i,hostname:r.hostname,port:(o=r.port,["443","80"].includes(o)?"":o),pathname:/\/$/.test(s)?s:"".concat(s,"/"),search:Zf(r.search),hash:Jf(r.hash),filename:l}}},nh=function(e,t){var r=t.getBoundingClientRect(),a=r.top,o=r.left,i=a-t.scrollTop,u=a-t.scrollTop+t.scrollHeight,s=o-t.scrollLeft,l=o-t.scrollLeft+t.scrollWidth
if(e.left>l&&e.left>r.right||e.top>u&&e.top>r.bottom||e.right<s&&e.right<r.left||e.bottom<i&&e.bottom<r.top)return!1
var c=n.getComputedStyle(t)
return!(e.left>r.right||e.top>r.bottom)||"scroll"===c.overflow||"auto"===c.overflow||t instanceof n.HTMLBodyElement||t instanceof n.HTMLHtmlElement},rh=0,ah=function(e){function t(e,n,r){var a
if(W(this,t),(a=_(this,t)).shadowId=r,a.children=[],a.actualNode=e,a.parent=n,n||(rh=0),a.nodeIndex=rh++,a._isHidden=null,a._cache={},a._isXHTML=$r(e.ownerDocument),"input"===e.nodeName.toLowerCase()){var o=e.getAttribute("type")
o=a._isXHTML?o:(o||"").toLowerCase(),qm().includes(o)||(o="text"),a._type=o}return da.get("nodeMap")&&da.get("nodeMap").set(e,O(a)),a}return I(t,e),K(t,[{key:"props",get:function(){if(!this._cache.hasOwnProperty("props")){var e=this.actualNode,t=e.nodeType,n=e.nodeName,r=e.id,a=e.nodeValue
this._cache.props={nodeType:t,nodeName:this._isXHTML?n:n.toLowerCase(),id:r,type:this._type,nodeValue:a},1===t&&(this._cache.props.multiple=this.actualNode.multiple,this._cache.props.value=this.actualNode.value,this._cache.props.selected=this.actualNode.selected,this._cache.props.checked=this.actualNode.checked,this._cache.props.indeterminate=this.actualNode.indeterminate)}return this._cache.props}},{key:"attr",value:function(e){return"function"!=typeof this.actualNode.getAttribute?null:this.actualNode.getAttribute(e)}},{key:"hasAttr",value:function(e){return"function"==typeof this.actualNode.hasAttribute&&this.actualNode.hasAttribute(e)}},{key:"attrNames",get:function(){var e
return this._cache.hasOwnProperty("attrNames")||(e=this.actualNode.attributes instanceof n.NamedNodeMap?this.actualNode.attributes:this.actualNode.cloneNode(!1).attributes,this._cache.attrNames=Array.from(e).map((function(e){return e.name}))),this._cache.attrNames}},{key:"getComputedStylePropertyValue",value:function(e){var t="computedStyle_"+e
return this._cache.hasOwnProperty(t)||(this._cache.hasOwnProperty("computedStyle")||(this._cache.computedStyle=n.getComputedStyle(this.actualNode)),this._cache[t]=this._cache.computedStyle.getPropertyValue(e)),this._cache[t]}},{key:"isFocusable",get:function(){return this._cache.hasOwnProperty("isFocusable")||(this._cache.isFocusable=iu(this.actualNode)),this._cache.isFocusable}},{key:"tabbableElements",get:function(){return this._cache.hasOwnProperty("tabbableElements")||(this._cache.tabbableElements=au(this)),this._cache.tabbableElements}},{key:"clientRects",get:function(){return this._cache.hasOwnProperty("clientRects")||(this._cache.clientRects=Array.from(this.actualNode.getClientRects()).filter((function(e){return e.width>0}))),this._cache.clientRects}},{key:"boundingClientRect",get:function(){return this._cache.hasOwnProperty("boundingClientRect")||(this._cache.boundingClientRect=this.actualNode.getBoundingClientRect()),this._cache.boundingClientRect}}]),t}(vr),oh=ah,ih=function(e){return(e||"").trim().replace(/\s{2,}/g," ").split(" ")},uh=" [idsMap]"
function sh(e,t,n){var r=e[0]._selectorMap
if(r){for(var a=e[0].shadowId,o=0;o<t.length;o++)if(t[o].length>1&&t[o].some((function(e){return lh(e)})))return
var i=new Set
t.forEach((function(e){var t,n=function(e,t,n){var r=e[e.length-1],a=null,o=e.length>1||!!r.pseudos||!!r.classes
if(lh(r))a=t["*"]
else{if(r.id){var i
if(!t[uh]||!Object.hasOwn(t[uh],r.id)||null===(i=t[uh][r.id])||void 0===i||!i.length)return
a=t[uh][r.id].filter((function(e){return e.shadowId===n}))}if(r.tag&&"*"!==r.tag){var u
if(null===(u=t[r.tag])||void 0===u||!u.length)return
var s=t[r.tag]
a=a?ch(s,a):s}if(r.classes){var l
if(null===(l=t["[class]"])||void 0===l||!l.length)return
var c=t["[class]"]
a=a?ch(c,a):c}if(r.attributes)for(var d=0;d<r.attributes.length;d++){var p,f=r.attributes[d]
if("attrValue"===f.type&&(o=!0),null===(p=t["[".concat(f.key,"]")])||void 0===p||!p.length)return
var h=t["[".concat(f.key,"]")]
a=a?ch(h,a):h}}return{nodes:a,isComplexSelector:o}}(e,r,a)
null==n||null===(t=n.nodes)||void 0===t||t.forEach((function(t){n.isComplexSelector&&!Sa(t,e)||i.add(t)}))}))
var u=[]
return i.forEach((function(e){return u.push(e)})),n&&(u=u.filter(n)),u.sort((function(e,t){return e.nodeIndex-t.nodeIndex}))}}function lh(e){return"*"===e.tag&&!e.attributes&&!e.id&&!e.classes}function ch(e,t){return e.filter((function(e){return t.includes(e)}))}function dh(e,t,n){Object.hasOwn(n,e)||(n[e]=[]),n[e].push(t)}function ph(e,t){1===e.props.nodeType&&(dh(e.props.nodeName,e,t),dh("*",e,t),e.attrNames.forEach((function(n){"id"===n&&(t[uh]=t[uh]||{},ih(e.attr(n)).forEach((function(n){dh(n,e,t[uh])}))),dh("[".concat(n,"]"),e,t)})))}function fh(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.documentElement,t=arguments.length>1?arguments[1]:void 0
eh=!1
var n={}
da.set("nodeMap",new WeakMap),da.set("selectorMap",n)
var r=mh(e,t,null)
return r[0]._selectorMap=n,r[0]._hasShadowRoot=eh,r}function hh(e,t,n){var r=new oh(e,t,n)
return ph(r,da.get("selectorMap")),r}function mh(e,t,r){var a,o,i
function u(e,n,r){var a=mh(n,t,r)
return a&&(e=e.concat(a)),e}return e.documentElement&&(e=e.documentElement),i=e.nodeName.toLowerCase(),Oo(e)?(eh=!0,a=hh(e,r,t),t="a"+Math.random().toString().substring(2),o=Array.from(e.shadowRoot.childNodes),a.children=o.reduce((function(e,t){return u(e,t,a)}),[]),[a]):"content"===i&&"function"==typeof e.getDistributedNodes?(o=Array.from(e.getDistributedNodes())).reduce((function(e,t){return u(e,t,r)}),[]):"slot"===i&&"function"==typeof e.assignedNodes?((o=Array.from(e.assignedNodes())).length||(o=function(e){var t=[]
for(e=e.firstChild;e;)t.push(e),e=e.nextSibling
return t}(e)),n.getComputedStyle(e),o.reduce((function(e,t){return u(e,t,r)}),[])):1===e.nodeType?(a=hh(e,r,t),o=Array.from(e.childNodes),a.children=o.reduce((function(e,t){return u(e,t,a)}),[]),[a]):3===e.nodeType?[hh(e,r)]:void 0}var Dh=function(e){return e?e.trim().split("-")[0].toLowerCase():""},gh=function(e){var t={}
return t.none=e.none.concat(e.all),t.any=e.any,Object.keys(t).map((function(e){if(t[e].length){var n=i._audit.data.failureSummaries[e]
return n&&"function"==typeof n.failureMessage?n.failureMessage(t[e].map((function(e){return e.message||""}))):void 0}})).filter((function(e){return void 0!==e})).join("\n\n")}
function vh(){var e=i._audit.data.incompleteFallbackMessage
return"function"==typeof e&&(e=e()),"string"!=typeof e?"":e}var yh=mr.resultGroups
function bh(e,t){var n=i.utils.aggregateResult(e)
return yh.forEach((function(e){t.resultTypes&&!t.resultTypes.includes(e)&&(n[e]||[]).forEach((function(e){Array.isArray(e.nodes)&&e.nodes.length>0&&(e.nodes=[e.nodes[0]])})),n[e]=(n[e]||[]).map((function(e){return e=Object.assign({},e),Array.isArray(e.nodes)&&e.nodes.length>0&&(e.nodes=e.nodes.map((function(e){if("object"===o(e.node)){var n=Fh(e.node,t)
Object.assign(e,n)}return delete e.result,delete e.node,function(e,t){["any","all","none"].forEach((function(n){Array.isArray(e[n])&&e[n].filter((function(e){return Array.isArray(e.relatedNodes)})).forEach((function(e){e.relatedNodes=e.relatedNodes.map((function(e){return Fh(e,t)}))}))}))}(e,t),e}))),yh.forEach((function(t){return delete e[t]})),delete e.pageLevel,delete e.result,e}))})),n}function Fh(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0
e=Co.dqElmToSpec(e,t)
var n,r,a,o,u,s={}
return i._audit.noHtml?s.html=null:s.html=null!==(n=e.source)&&void 0!==n?n:"Undefined",t.elementRef&&!e.fromFrame&&(s.element=null!==(r=e.element)&&void 0!==r?r:null),(!1!==t.selectors||e.fromFrame)&&(s.target=null!==(a=e.selector)&&void 0!==a?a:[":root"]),t.ancestry&&(s.ancestry=null!==(o=e.ancestry)&&void 0!==o?o:[":root"]),t.xpath&&(s.xpath=null!==(u=e.xpath)&&void 0!==u?u:["/"]),s}var wh=/\$\{\s?data\s?\}/g
function Eh(e,t){if("string"==typeof t)return e.replace(wh,t)
for(var n in t)if(t.hasOwnProperty(n)){var r=new RegExp("\\${\\s?data\\."+n+"\\s?}","g"),a=void 0===t[n]?"":String(t[n])
e=e.replace(r,a)}return e}var Ch=function e(t,n){if(t){if(Array.isArray(n))return n.values=n.join(", "),"string"==typeof t.singular&&"string"==typeof t.plural?Eh(1===n.length?t.singular:t.plural,n):Eh(t,n)
if("string"==typeof t)return Eh(t,n)
if("string"==typeof n)return Eh(t[n],n)
var r=t.default||vh()
return n&&n.messageKey&&t[n.messageKey]&&(r=t[n.messageKey]),e(r,n)}},xh=function(e,t,n){var r=i._audit.data.checks[e]
if(!r)throw new Error("Cannot get message for unknown check: ".concat(e,"."))
if(!r.messages[t])throw new Error('Check "'.concat(e,'"" does not have a "').concat(t,'" message.'))
return Ch(r.messages[t],n)},Ah=function(e,t,n){var r=((n.rules&&n.rules[t]||{}).checks||{})[e.id],a=(n.checks||{})[e.id],o=e.enabled,i=e.options
return a&&(a.hasOwnProperty("enabled")&&(o=a.enabled),a.hasOwnProperty("options")&&(i=a.options)),r&&(r.hasOwnProperty("enabled")&&(o=r.enabled),r.hasOwnProperty("options")&&(i=r.options)),{enabled:o,options:i,absolutePaths:n.absolutePaths}}
function kh(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n
return t&&"object"===o(t)?t:"object"!==o(r)?{}:{testEngine:{name:"axe-core",version:i.version},testRunner:{name:i._audit.brand},testEnvironment:Th(r),timestamp:(new Date).toISOString(),url:null===(e=r.location)||void 0===e?void 0:e.href}}function Th(e){if(!e.navigator||"object"!==o(e.navigator))return{}
var t,n=e.navigator,r=e.innerHeight,a=e.innerWidth,i=(t=e.screen).orientation||t.msOrientation||t.mozOrientation||{},u=i.angle,s=i.type
return{userAgent:n.userAgent,windowWidth:a,windowHeight:r,orientationAngle:u,orientationType:s}}function Nh(e,t){var n=t.focusable,r=t.page
return{node:e,include:[],exclude:[],initiator:!1,focusable:n&&Rh(e),size:Bh(e),page:r}}function Rh(e){var t=e.getAttribute("tabindex")
if(!t)return!0
var n=parseInt(t,10)
return isNaN(n)||n>=0}function Bh(e){var t=parseInt(e.getAttribute("width"),10),n=parseInt(e.getAttribute("height"),10)
if(isNaN(t)||isNaN(n)){var r=e.getBoundingClientRect()
t=isNaN(t)?r.width:t,n=isNaN(n)?r.height:n}return{width:t,height:n}}function Sh(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=[]
qh(t)||(t=[t])
for(var a=0;a<t.length;a++){var o=(e=t[a])instanceof n.Node?e:"string"==typeof e?[e]:(Mh(e)?(function(e){Lh(Array.isArray(e.fromFrames),"fromFrames property must be an array"),Lh(e.fromFrames.every((function(e){return!Hh(e,"fromFrames")})),"Invalid context; fromFrames selector must be appended, rather than nested"),Lh(!Hh(e,"fromShadowDom"),"fromFrames and fromShadowDom cannot be used on the same object")}(e),e=e.fromFrames):jh(e)&&(e=[e]),function(e){if(Array.isArray(e)){var t,n=[],r=Q(e)
try{for(r.s();!(t=r.n()).done;){var a=t.value
if(jh(a)&&(Ih(a),a=a.fromShadowDom),"string"!=typeof a&&!Ph(a))return
n.push(a)}}catch(e){r.e(e)}finally{r.f()}return n}}(e))
o&&r.push(o)}return r}function _h(e){return["include","exclude"].some((function(t){return Hh(e,t)&&Oh(e[t])}))}function Oh(e){return"string"==typeof e||e instanceof n.Node||Mh(e)||jh(e)||qh(e)}function Mh(e){return Hh(e,"fromFrames")}function jh(e){return Hh(e,"fromShadowDom")}function Ih(e){Lh(Array.isArray(e.fromShadowDom),"fromShadowDom property must be an array"),Lh(e.fromShadowDom.every((function(e){return!Hh(e,"fromFrames")})),"shadow selector must be inside fromFrame instead"),Lh(e.fromShadowDom.every((function(e){return!Hh(e,"fromShadowDom")})),"fromShadowDom selector must be appended, rather than nested")}function Ph(e){return Array.isArray(e)&&e.every((function(e){return"string"==typeof e}))}function qh(e){return e&&"object"===o(e)&&"number"==typeof e.length&&e instanceof n.Node==0}function Lh(e,t){Sr(e,"Invalid context; ".concat(t,"\nSee: https://github.com/dequelabs/axe-core/blob/master/doc/context.md"))}function Hh(e,t){return!(!e||"object"!==o(e))&&Object.prototype.hasOwnProperty.call(e,t)}function zh(e,t){for(var r=[],a=0,o=e[t].length;a<o;a++){var i=e[t][a]
if(i instanceof n.Node)i.documentElement instanceof n.Node?r.push(e.flatTree[0]):r.push(pa(i))
else if(i&&i.length)if(i.length>1)$h(e,t,i)
else{var u=Im(i[0])
r.push.apply(r,L(u.map((function(e){return pa(e)}))))}}return r.filter((function(e){return e}))}function $h(e,t,n){e.frames=e.frames||[],Im(n.shift()).forEach((function(r){var a=e.frames.find((function(e){return e.node===r}))
a||(a=Nh(r,e),e.frames.push(a)),a[t].push(n)}))}function Vh(e,t){var r,i,u,s,l,c=this
e=ga(e),this.frames=[],this.page="boolean"==typeof(null===(r=e)||void 0===r?void 0:r.page)?e.page:void 0,this.initiator="boolean"!=typeof(null===(i=e)||void 0===i?void 0:i.initiator)||e.initiator,this.focusable="boolean"!=typeof(null===(u=e)||void 0===u?void 0:u.focusable)||e.focusable,this.size="object"===o(null===(s=e)||void 0===s?void 0:s.size)?e.size:{},e=function(e){if(_h(e)){var t=" must be used inside include or exclude. It should not be on the same object."
Lh(!Hh(e,"fromFrames"),"fromFrames"+t),Lh(!Hh(e,"fromShadowDom"),"fromShadowDom"+t)}else{if(!Oh(e))return{include:[a],exclude:[]}
e={include:e,exclude:[]}}var n=Sh(e.include)
return 0===n.length&&n.push(a),{include:n,exclude:Sh(e.exclude)}}(e),this.flatTree=null!=t?t:fh(function(e){for(var t=e.include,r=e.exclude,o=Array.from(t).concat(Array.from(r)),i=0;i<o.length;i++){var u=o[i]
if(u instanceof n.Element)return u.ownerDocument.documentElement
if(u instanceof n.Document)return u.documentElement}return a.documentElement}(e)),this.exclude=e.exclude,this.include=e.include,this.include=zh(this,"include"),this.exclude=zh(this,"exclude"),Sm("frame, iframe",this).forEach((function(e){rm(e,c)&&function(e,t){is(t)&&!Ao(e.frames,"node",t)&&e.frames.push(Nh(t,e))}(c,e.actualNode)})),void 0===this.page&&(this.page=1===(l=this.include).length&&l[0].actualNode===a.documentElement,this.frames.forEach((function(e){e.page=c.page}))),function(e){if(0===e.include.length&&0===e.frames.length){var t=go.isInFrame()?"frame":"page"
throw new Error("No elements found for include in "+t+" Context")}}(this),Array.isArray(this.include)||(this.include=Array.from(this.include)),this.include.sort(im)}function Uh(e){return!1===(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).iframes?[]:new Vh(e).frames.map((function(e){var t=e.node,n=q(e,F)
return n.initiator=!1,{frameSelector:ia(t),frameContext:n}}))}function Wh(e){var t=i._audit.rules.find((function(t){return t.id===e}))
if(!t)throw new Error("Cannot find rule by id: ".concat(e))
return t}function Gh(e,t){var n=e.getPropertyValue(t)
return["scroll","auto"].includes(n)}var Kh=zr((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=e.scrollWidth>e.clientWidth+t,a=e.scrollHeight>e.clientHeight+t
if(r||a){var o=n.getComputedStyle(e),i=Gh(o,"overflow-x"),u=Gh(o,"overflow-y")
return r&&i||a&&u?{elm:e,top:e.scrollTop,left:e.scrollLeft}:void 0}}))
function Yh(e){return Array.from(e.children||e.childNodes||[]).reduce((function(e,t){var n=Kh(t)
return n&&e.push(n),e.concat(Yh(t))}),[])}var Qh=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n,t=e.document.documentElement
return[void 0!==e.pageXOffset?{elm:e,top:e.pageYOffset,left:e.pageXOffset}:{elm:t,top:t.scrollTop,left:t.scrollLeft}].concat(Yh(a.body))}
function Xh(){return ga(yu)}var Zh,Jh=function(e){if(!e)throw new Error("axe.utils.getStyleSheetFactory should be invoked with an argument")
return function(t){var n=t.data,r=t.isCrossOrigin,a=void 0!==r&&r,o=t.shadowId,i=t.root,u=t.priority,s=t.isLink,l=void 0!==s&&s,c=e.createElement("style")
if(l){var d=e.createTextNode('@import "'.concat(n.href,'"'))
c.appendChild(d)}else c.appendChild(e.createTextNode(n))
return e.head.appendChild(c),{sheet:c.sheet,isCrossOrigin:a,shadowId:o,root:i,priority:u}}},em=function(e){if(Zh&&Zh.parentNode)return void 0===Zh.styleSheet?Zh.appendChild(a.createTextNode(e)):Zh.styleSheet.cssText+=e,Zh
if(e){var t=a.head||a.getElementsByTagName("head")[0]
return(Zh=a.createElement("style")).type="text/css",void 0===Zh.styleSheet?Zh.appendChild(a.createTextNode(e)):Zh.styleSheet.cssText=e,t.appendChild(Zh),Zh}},tm=function e(t,r){var a=pa(t)
if(9===t.nodeType)return!1
if(11===t.nodeType&&(t=t.host),a&&null!==a._isHidden)return a._isHidden
var o=n.getComputedStyle(t,null)
if(!o||!t.parentNode||"none"===o.getPropertyValue("display")||!r&&"hidden"===o.getPropertyValue("visibility")||"true"===t.getAttribute("aria-hidden"))return!0
var i=e(t.assignedSlot?t.assignedSlot:t.parentNode,!0)
return a&&(a._isHidden=i),i},nm=function(e){var t,n,r=null!==(t=null===(n=e.props)||void 0===n?void 0:n.nodeName)&&void 0!==t?t:e.nodeName.toLowerCase()
return"http://www.w3.org/2000/svg"!==e.namespaceURI&&!!yu.htmlElms[r]}
function rm(e,t){var n=t.include,r=void 0===n?[]:n,a=t.exclude,o=void 0===a?[]:a,i=r.filter((function(t){return Ro(t,e)}))
if(0===i.length)return!1
var u=o.filter((function(t){return Ro(t,e)}))
if(0===u.length)return!0
var s=am(i)
return Ro(am(u),s)}function am(e){var t,n,r=Q(e)
try{for(r.s();!(n=r.n()).done;){var a=n.value
t&&Ro(a,t)||(t=a)}}catch(e){r.e(e)}finally{r.f()}return t}function om(e,t){return e.length===t.length&&e.every((function(e,n){var r=t[n]
return Array.isArray(e)?e.length===r.length&&e.every((function(e,t){return r[t]===e})):e===r}))}var im=function(e,t){return(e=e.actualNode||e)===(t=t.actualNode||t)?0:4&e.compareDocumentPosition(t)?-1:1}
function um(e){return e instanceof vr?{vNode:e,domNode:e.actualNode}:{vNode:pa(e),domNode:e}}var sm=function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=Array.from(e.cssRules)
if(!o)return Promise.resolve()
var i=o.filter((function(e){return 3===e.type}))
if(!i.length)return Promise.resolve({isCrossOrigin:a,priority:n,root:t.rootNode,shadowId:t.shadowId,sheet:e})
var u=i.filter((function(e){return e.href})).map((function(e){return e.href})).filter((function(e){return!r.includes(e)})).map((function(e,a){var o=[].concat(L(n),[a]),i=/^https?:\/\/|^\/\//i.test(e)
return cm(e,t,o,r,i)})),s=o.filter((function(e){return 3!==e.type}))
return s.length?(u.push(Promise.resolve(t.convertDataToStylesheet({data:s.map((function(e){return e.cssText})).join(),isCrossOrigin:a,priority:n,root:t.rootNode,shadowId:t.shadowId}))),Promise.all(u)):Promise.all(u)},lm=function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4]
return function(e){try{return!(!e.cssRules&&e.href)}catch(e){return!1}}(e)?sm(e,t,n,r,a):cm(e.href,t,n,r,!0)},cm=function(e,t,r,a,o){return a.push(e),new Promise((function(t,r){var a=new n.XMLHttpRequest
a.open("GET",e),a.timeout=mr.preload.timeout,a.addEventListener("error",r),a.addEventListener("timeout",r),a.addEventListener("loadend",(function(e){if(e.loaded&&a.responseText)return t(a.responseText)
r(a.responseText)})),a.send()})).then((function(e){var n=t.convertDataToStylesheet({data:e,isCrossOrigin:o,priority:r,root:t.rootNode,shadowId:t.shadowId})
return lm(n.sheet,t,r,a,n.isCrossOrigin)}))},dm=function(){function e(){if(n.performance&&n.performance)return n.performance.now()}var t=null,r=e()
return{start:function(){this.mark("mark_axe_start")},end:function(){this.mark("mark_axe_end"),this.measure("axe","mark_axe_start","mark_axe_end"),this.logMeasures("axe")},auditStart:function(){this.mark("mark_audit_start")},auditEnd:function(){this.mark("mark_audit_end"),this.measure("audit_start_to_end","mark_audit_start","mark_audit_end"),this.logMeasures()},mark:function(e){n.performance&&void 0!==n.performance.mark&&n.performance.mark(e)},measure:function(e,t,r){n.performance&&void 0!==n.performance.measure&&n.performance.measure(e,t,r)},logMeasures:function(e){function t(e){Dr("Measure "+e.name+" took "+e.duration+"ms")}if(n.performance&&void 0!==n.performance.getEntriesByType)for(var r=n.performance.getEntriesByName("mark_axe_start")[0],a=n.performance.getEntriesByType("measure").filter((function(e){return e.startTime>=r.startTime})),o=0;o<a.length;++o){var i=a[o]
if(i.name===e)return void t(i)
t(i)}},timeElapsed:function(){return e()-r},reset:function(){t||(t=e()),r=e()}}}(),pm=dm
function fm(){if(a.elementsFromPoint)return a.elementsFromPoint
if(a.msElementsFromPoint)return a.msElementsFromPoint
var e,t=((e=a.createElement("x")).style.cssText="pointer-events:auto","auto"===e.style.pointerEvents),n=t?"pointer-events":"visibility",r=t?"none":"hidden",o=a.createElement("style")
return o.innerHTML=t?"* { pointer-events: all }":"* { visibility: visible }",function(e,t){var i,u,s,l=[],c=[]
for(a.head.appendChild(o);(i=a.elementFromPoint(e,t))&&-1===l.indexOf(i);)l.push(i),c.push({value:i.style.getPropertyValue(n),priority:i.style.getPropertyPriority(n)}),i.style.setProperty(n,r,"important")
for(l.indexOf(a.documentElement)<l.length-1&&(l.splice(l.indexOf(a.documentElement),1),l.push(a.documentElement)),u=c.length;s=c[--u];)l[u].style.setProperty(n,s.value?s.value:"",s.priority)
return a.head.removeChild(o),l}}"function"==typeof n.addEventListener&&(a.elementsFromPoint=fm())
var hm=function(e,t){return e.concat(t).filter((function(e,t,n){return n.indexOf(e)===t}))}
function mm(e,t,n,r,a){var o=a||{}
return o.vNodes=e,o.vNodesIndex=0,o.anyLevel=t,o.thisLevel=n,o.parentShadowId=r,o}var Dm=function(e,t,n){e=Array.isArray(e)?e:[e]
var r=Ra(t)
return sh(e,r,n)||function(e,t,n){for(var r=da.get("qsa.recycledLocalVariables",(function(){return[]})),a=[],o=mm(Array.isArray(e)?e:[e],t,null,e[0].shadowId,r.pop()),i=[];o.vNodesIndex<o.vNodes.length;){for(var u,s,l=o.vNodes[o.vNodesIndex++],c=null,d=null,p=((null===(u=o.anyLevel)||void 0===u?void 0:u.length)||0)+((null===(s=o.thisLevel)||void 0===s?void 0:s.length)||0),f=!1,h=0;h<p;h++){var m,D,g,v=h<((null===(m=o.anyLevel)||void 0===m?void 0:m.length)||0)?o.anyLevel[h]:o.thisLevel[h-((null===(D=o.anyLevel)||void 0===D?void 0:D.length)||0)]
if((!v[0].id||l.shadowId===o.parentShadowId)&&Sa(l,v[0]))if(1===v.length)f||n&&!n(l)||(i.push(l),f=!0)
else{var y=v.slice(1)
if(!1===[" ",">"].includes(y[0].combinator))throw new Error("axe.utils.querySelectorAll does not support the combinator: "+v[1].combinator)
">"===y[0].combinator?(c=c||[]).push(y):(d=d||[]).push(y)}v[0].id&&l.shadowId!==o.parentShadowId||null===(g=o.anyLevel)||void 0===g||!g.includes(v)||(d=d||[]).push(v)}for(l.children&&l.children.length&&(a.push(o),o=mm(l.children,d,c,l.shadowId,r.pop()));o.vNodesIndex===o.vNodes.length&&a.length;)r.push(o),o=a.pop()}return i}(e,r,n)},gm=function(e){var t=e.treeRoot,n=function(e){var t=[],n=Dm(e,"*",(function(e){return!t.includes(e.shadowId)&&(t.push(e.shadowId),!0)})).map((function(e){return{shadowId:e.shadowId,rootNode:jo(e.actualNode)}}))
return hm(n,[])}(void 0===t?i._tree[0]:t)
if(!n.length)return Promise.resolve()
var r=a.implementation.createHTMLDocument("Dynamic document for loading cssom")
return function(e,t){var n=[]
return e.forEach((function(e,r){var a=e.rootNode,o=e.shadowId,i=function(e,t,n){var r
return r=11===e.nodeType&&t?function(e,t){return Array.from(e.children).filter(ym).reduce((function(n,r){var a=r.nodeName.toUpperCase(),o="STYLE"===a?r.textContent:r,i=t({data:o,isLink:"LINK"===a,root:e})
return i.sheet&&n.push(i.sheet),n}),[])}(e,n):function(e){return Array.from(e.styleSheets).filter((function(e){return!!e.media&&bm(e.media.mediaText)}))}(e),function(e){var t=[]
return e.filter((function(e){return!e.href||!t.includes(e.href)&&(t.push(e.href),!0)}))}(r)}(a,o,t)
if(!i)return Promise.all(n)
var u=r+1,s={rootNode:a,shadowId:o,convertDataToStylesheet:t,rootIndex:u},l=[],c=Promise.all(i.map((function(e,t){return lm(e,s,[u,t],l)})))
n.push(c)})),Promise.all(n)}(n,Jh(r)).then((function(e){return vm(e)}))}
function vm(e){return e.reduce((function(e,t){return Array.isArray(t)?e.concat(vm(t)):e.concat(t)}),[])}function ym(e){var t=e.nodeName.toUpperCase(),n=e.getAttribute("href"),r=e.getAttribute("rel"),a="LINK"===t&&n&&r&&e.rel.toUpperCase().includes("STYLESHEET")
return"STYLE"===t||a&&bm(e.media)}function bm(e){return!e||!e.toUpperCase().includes("PRINT")}var Fm=function(e){var t=e.treeRoot,n=void 0===t?i._tree[0]:t,r=Dm(n,"video, audio",(function(e){var t=e.actualNode
return t.hasAttribute("src")?!!t.getAttribute("src"):!(Array.from(t.getElementsByTagName("source")).filter((function(e){return!!e.getAttribute("src")})).length<=0)}))
return Promise.all(r.map((function(e){var t,n=e.actualNode
return t=n,new Promise((function(e){t.readyState>0&&e(t),t.addEventListener("loadedmetadata",(function n(){t.removeEventListener("loadedmetadata",n),e(t)}))}))})))}
function wm(e){var t={cssom:gm,media:Fm}
return Em(e)?new Promise((function(n,r){var a=Cm(e),o=a.assets,i=a.timeout,u=setTimeout((function(){return r(new Error("Preload assets timed out."))}),i)
Promise.all(o.map((function(n){return t[n](e).then((function(e){return function(e,t,n){return(t=Y(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},n,e)}))}))).then((function(e){var t=e.reduce((function(e,t){return z({},e,t)}),{})
clearTimeout(u),n(t)})).catch((function(e){clearTimeout(u),r(e)}))})):Promise.resolve()}function Em(e){return!e||void 0===e.preload||null===e.preload||("boolean"==typeof e.preload?e.preload:(t=e.preload,"object"===o(t)&&Array.isArray(t.assets)))
var t}function Cm(e){var t=mr.preload,n=t.assets,r=t.timeout,a={assets:n,timeout:r}
if(!e.preload)return a
if("boolean"==typeof e.preload)return a
if(!e.preload.assets.every((function(e){return n.includes(e.toLowerCase())})))throw new Error("Requested assets, not supported. Supported assets are: ".concat(n.join(", "),"."))
return a.assets=hm(e.preload.assets.map((function(e){return e.toLowerCase()})),[]),e.preload.timeout&&"number"==typeof e.preload.timeout&&!isNaN(e.preload.timeout)&&(a.timeout=e.preload.timeout),a}function xm(e){var t=i._audit.data.checks||{},n=i._audit.data.rules||{},r=Ao(i._audit.rules,"id",e.id)||{}
e.tags=ga(r.tags||[])
var a=Am(t,!0,r),o=Am(t,!1,r)
e.nodes.forEach((function(e){e.any.forEach(a),e.all.forEach(a),e.none.forEach(o)})),So(e,ga(n[e.id]||{}))}function Am(e,t,n){return function(r){var a=e[r.id]||{},i=a.messages||{},u=Object.assign({},a)
delete u.messages,n.reviewOnFail||void 0!==r.result?u.message=r.result===t?i.pass:i.fail:("object"!==o(i.incomplete)||Array.isArray(r.data)||(u.message=function(e,t){function n(e){return e.incomplete&&e.incomplete.default?e.incomplete.default:vh()}if(!e||!e.missingData)return e&&e.messageKey?t.incomplete[e.messageKey]:n(t)
try{var r=t.incomplete[e.missingData[0].reason]
if(!r)throw new Error
return r}catch(r){return"string"==typeof e.missingData?t.incomplete[e.missingData]:n(t)}}(r.data,i)),u.message||(u.message=i.incomplete)),"function"!=typeof u.message&&(u.message=Ch(u.message,r.data)),So(r,u)}}var km=function(e,t){return Dm(e,t)}
function Tm(e,t){var n,r,a=i._audit&&i._audit.tagExclude?i._audit.tagExclude:[]
return t.hasOwnProperty("include")||t.hasOwnProperty("exclude")?(n=t.include||[],n=Array.isArray(n)?n:[n],r=t.exclude||[],r=(r=Array.isArray(r)?r:[r]).concat(a.filter((function(e){return-1===n.indexOf(e)})))):(n=Array.isArray(t)?t:[t],r=a.filter((function(e){return-1===n.indexOf(e)}))),!!(n.some((function(t){return-1!==e.tags.indexOf(t)}))||0===n.length&&!1!==e.enabled)&&r.every((function(t){return-1===e.tags.indexOf(t)}))}var Nm=function(e,t,n){var r=n.runOnly||{},a=(n.rules||{})[e.id]
return!(e.pageLevel&&!t.page)&&("rule"===r.type?-1!==r.values.indexOf(e.id):a&&"boolean"==typeof a.enabled?a.enabled:"tag"===r.type&&r.values?Tm(e,r.values):Tm(e,[]))}
function Rm(e,t){if(!t)return e
var n=e.cloneNode(!1),r=qr(n)
if(1===n.nodeType){var a=n.outerHTML
n=da.get(a,(function(){return Bm(n,r,e,t)}))}else n=Bm(n,r,e,t)
return Array.from(e.childNodes).forEach((function(e){n.appendChild(Rm(e,t))})),n}function Bm(e,t,n,r){return t?(e=a.createElement(e.nodeName),Array.from(t).forEach((function(t){(function(e,t,n){return void 0!==n[t]&&(!0===n[t]||Lr(e,n[t]))})(n,t.name,r)||e.setAttribute(t.name,t.value)})),e):e}function Sm(e,t){var n,r=[]
if(i._selectCache)for(var a=0,o=i._selectCache.length;a<o;a++){var u=i._selectCache[a]
if(u.selector===e)return u.result}for(var s=t.include.reduce((function(e,t){return e.length&&Ro(e[e.length-1],t)||e.push(t),e}),[]),l=function(e){return e.exclude&&0!==e.exclude.length?function(t){return rm(t,e)}:null}(t),c=0;c<s.length;c++)n=s[c],r=_m(r,Dm(n,e,l))
return i._selectCache&&i._selectCache.push({selector:e,result:r}),r}function _m(e,t){if(0===e.length)return t
if(e.length<t.length){var n=e
e=t,t=n}for(var r=0,a=t.length;r<a;r++)e.includes(t[r])||e.push(t[r])
return e}var Om=function(e){e.forEach((function(e){return function(e,t,r){if(e===n)return e.scroll(r,t)
e.scrollTop=t,e.scrollLeft=r}(e.elm,e.top,e.left)}))}
function Mm(e){return jm(Array.isArray(e)?L(e):[e],a)}function jm(e,t){var n=e.shift(),r=n?t.querySelector(n):null
return 0===e.length?r:null!=r&&r.shadowRoot?jm(e,r.shadowRoot):null}function Im(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a,n=Array.isArray(e)?L(e):[e]
return 0===e.length?[]:Pm(n,t)}function Pm(e,t){var n,r=U(n=e)||H(n)||X(n)||V(),a=r[0],o=r.slice(1),i=t.querySelectorAll(a)
if(0===o.length)return Array.from(i)
var u,s=[],l=Q(i)
try{for(l.s();!(u=l.n()).done;){var c=u.value
null!=c&&c.shadowRoot&&s.push.apply(s,L(Pm(o,c.shadowRoot)))}}catch(e){l.e(e)}finally{l.f()}return s}var qm=function(){return["hidden","text","search","tel","url","email","password","date","month","week","time","datetime-local","number","range","color","checkbox","radio","file","submit","image","reset","button"]},Lm=[,[,[1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,,1,1,1,1,1,1,,1],[1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,1,1,1,,1,1,,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,1,1,1,1,1,1,1,,1,,1,1,1,1,1,1,1,1,,1,1,1,1],[1,1,1,1,1,1,,,,,,1,1,1,1,,,1,1,1,,1,,1,,1,1],[1,1,1,,1,1,,1,1,1,,1,,,1,1,1,,,1,1,1,,,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,,,,1,1,1,,1,1,1,1,1,1,,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,1,1],[,1,,,,,,1,,1,,,,,1,,1,,,,1,1,,1,,,1],[1,,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,,,1,1,1,1,,,1,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,1,1,,,1,,,,,1,1,1,,1,,1,,1,,,,,,1],[1,,1,1,1,1,,,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[1,,1,,1,,,,,1,,1,1,1,1,1,,,,1,1,1,1],[,1,1,1,1,1,,1,1,1,,1,,1,1,1,,,1,1,1,1,1,1,1,1],[,,1,,,1,,1,,,,1,1,1,,,,,,,,,,,1],[1,1,1,1,1,1,,1,1,1,,1,1,,1,1,1,1,1,1,1,1,,,1,1,1],[1,1,1,1,1,,,1,,,1,,,1,1,1,,,,,1,,,,,,1]],[,[1,1,1,1,1,1,1,1,1,1,1,,1,,1,1,1,,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,,,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1],[,1,1,,1,,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1],[,1,1,1,1,1,,1,1,1,1,1,1,,1,1,,1,1,1,1,1,1,1,,1],[,1,,1,1,1,,1,1,,1,,1,1,1,1,1,1,1,1],[,1,,1,1,1,1,1,1,1,1,,,1,1,1,,,1,1,,,,,,1,1],[1,1,1,,,,,1,,,,1,1,,1,,,,,,1,,,,,1],[,1,,,1,,,1,,,,,,1],[,1,,1,,,,1,,,,1],[1,,1,1,1,,1,1,1,,1,1,1,1,1,1,1,1,1,,1,,,1,1,1,1],[,1,1,1,1,1,,,1,,,1,,1,1,,1,,1,,,,,1,,1],[,1,,,,1,,,1,1,,1,,1,1,1,1,,1,1,,,1,,,1],[,1,1,,,,,,1,,,,1,1,1,1,,1,1,1,1,1,1,,1,1,1],[,1,,1,1,1,,,1,1,1,1,1,1,,1,,,,,1,1,,1,,1],[,1,,1,,1,,1,,1,,1,1,1,1,1,,,1,1,1],[,1,1,1,,,,1,1,1,,1,1,,,1,1,,1,1,1,1,,1,1],[1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,,,1,1,1,1,1,1,1],[,1,1,1,,1,1,1,,1,,,,,1,1,1,,,1,,1,,,1,1],[,,,,1,,,,,,,,,,,,,,,,,1],[1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[,1,,1,1,1,,1,1,,,,1,1,1,1,1,,,1,1,1,,,,,1],[1,1,1,1,,,,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[1,,,,,,,1,,,,,,,1],[,1,1,,1,1,,1,,,,,,,,,,,,,1],,[1,1,1,,,,,,,,,,,,,1],[,,,,,,,,1,,,1,,,1,1,,,,,1]],[,[1,1,,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,,1,1,1,1,1,1],[,1,1,,1,1,1,1,,1,1,,1,1,1,1,1,1,1,,1,1,1,1,,1],[,,,1,,,,,,,,,,,,,,,1],[,1,,,1,1,,1,,1,1,,,,1,1,,,1,1,,,,1],[1,,,1,1,1,1,1,1,1,,1,1,1,1,,1,1,1,1,,,1,,,,1],,[,1,1,1,1,1,,1,1,1,,1,1,,1,1,,,1,1,1,1,,1,1,,1],[,1,,,1,,,1,,1,,,1,1,1,1,,,1,1,,1,1,1,1],[,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[,1,1,1,1,1,1,,,1,1,1,1,1,1,1,,,1,,,1,,1],[,1,,,,,,,,,,1,1,,,,,,1,1,,,,,1],[,,,,,,,1,,,,1,,1,1],[,1,1,1,1,1,1,1,,,,1,1,1,1,1,,,1,1,,1,1,1,1,1],[,1,,,1,1,,1,,1,1,1,,,1,1,,,1,,1,1,1,1,,1],[,1,1,1,,1,1,,1,1,,1,1,,1,1,1,1,1,1,1,,1,1,1,1,1],[,,,,,,,,,,,,,,,,1],,[,1,1,1,1,1,,1,1,1,,,1,,1,1,,1,1,1,1,1,,1,,1],[,,1,,,1,,,1,1,,,1,,1,1,,1],[,1,1,,1,,,,1,1,,1,,1,1,1,1,,1,1,1,1,,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1],[1,1],[,1,,,,,,,,,,1,1,,,,,,1,1,,1,,1,,1,1],,[,1,1,,1,,,1,,1,,,,1,1,1,,,,,,1,,,,1],[1,1,,,1,1,,1,,,,,1,,1]],[,[,1],[,,,1,,,,1,,,,1,,,,1,,,1,,,1],[,,,,,,,,,,,,,,,,,,1,1,,,,,,1],,[1,,,,,1],[,1,,,,1,,,,1],[,1,,,,,,,,,,,1,,,1,,,,,,,,,1,1],[,,,,,,,,,,,,,,,,,,,,,1],[,,,,,,,,,,,,,,,,1,,,,1,,1],[,1],[,1,,1,,1,,1,,1,,1,1,1,,1,1,,1,,,,,,,1],[1,,,,,1,,,1,1,,1,,1,,1,1,,,,,1,,,1],[,1,1,,,1,,1,,1,,1,,1,1,1,1,,,1,,1,,1,1,1],[1,1,1,1,1,,1,,1,,,,1,1,1,1,,1,1,,,1,1,1,1],[1,,,,,,,,,,,,,,,,,,,,1],[,,,,,,,,,1],,[,1,,,,,,1,1,1,,1,,,,1,,,1,1,1,,,1],[1,,,,,1,,1,1,1,,1,1,1,1,1,,1,,1,,1,,,1,1],[1,,1,1,,,,,1,,,,,,1,1,,,1,1,1,1,,,1,,1],[1,,,,,,,,,,,,,,,,,1],[,,,,,1,,,1,,,,,,1],[,,,,,,,,,,,,,,,1],[,,,,,,,,,,,,,,,,,,,,1],[,1,,,,,,,,,,,,,,1],[,1,,,,1]],[,[1,1,1,,1,,1,1,1,1,1,1,1,1,1,,1,,1,,1,1,,,1,1,1],[,,,,,,,,,,,,1],[,,,,,,,,,,,,,,,,,,,1],,[,,,,,,,,,,,,,,,,,,1],[1,,,,,,,,,1,,,,1],[,,,,,,,,,,,,,,,,,,1],,[1,1,,,,1,1,,,,,,1,,,,1,,1,,1,1,,1],[1],[,,,,,,,,,,,1,,,,,,,,,,,1],[,1,,,,,,,1,1,,,1,,1,,,,1,,,,,,,1],[,,,,,,,,,,,,,,,,1,,,,,1],[,,1,,,,,1,,1],[1,,,,1,,,,,1,,,,1,1,,,,1,1,,,,,1],[,,,,,1],[,,,,,,,,,,,,,,,,,,,1],[1,,,1,1,,,,,,,1,,1,,1,1,1,1,1,1],[,,,,,1,,,,,,,1,,,,,,,1],,[,,1,1,1,1,1,,1,1,1,,,1,1,,,1,1,,1,1,1,,,1],[,,,,,,,,,,,,,,,,,,1],[,1,,,,1],,[1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1],[,,,1,1,1,1,,,,,,1,,1,,,,1,,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,,,1],[,1,1,1,1,,1,1,1,1,1,1,1,1,,,,1,,1,,,1,1,1,1,1],[,,,,,,,,,,,1,,,,,,,,,1,,,,1],[,1,1,,1,1,,1,,,,1,1,,1,1,,,1,,1,1,,1],[,1,,1,,1,,,1,,,1,1,,1,1,,,1,1,1],[,1,1,1,1,1,,1,1,,,,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[,,,,,,,,,1,,1,,1,1,,,,1,,,1],[,1,,,1,1,,,,,,,,,1,1,1,,,,,1],[1,,,1,1,,,,1,1,1,1,1,,,1,,,1,,,1,,1,,1],[,1,1,,1,1,,1,1,,,,1,1,1,,,1,1,,,1,1,1,1,1,1],[1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,,1,1,,1,1,,1,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[,1,,,,1,,,,,,,,,1],[,1,,,,,,,,1,,,,,1,,,,1,,,1],[,1,1,1,1,,,1,1,1,1,1,,1,,1,,1,1,1,1,1,1,1,1,1,1],[,,,,,1,,1,,,,,1,1,1,1,1,,,1,,,,1],[,1,,,,,,,,1,,,,,,,,,,,,1],[1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1],[1,1,,1,,1,1,,,,1,,1,1,1,1,1,,1,1,,,,,,1],[,1,1,1,1,1,1,1,,1,1,,,1,1,,,,1,,1,1,,1,1],[,,,,,,,,,,,,,,,,,,,,,,,,1],[,1,1,,1,1,1,1,,1,,,1,1,1,1,,,1,,,,,,,1],[,1,,,,,,,,1,,,,,1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,1,1,1,1],[,1,1,,,,,,,,,,,,1,1,,,,,,1],[,1,,,,,,,1],[,,,,,,,,,,,,,,1,,,,,1,,,,,,1],[1,1,,,1,,,1,1,1,,,,1],,[,,,,,,,,,,,,,1,,,,,,,,,,1],[,,,,,,,,,1,,,,,,,,,1,,,,,,,1],[1,1,1,,1,,1,1,1,1,1,1,1,1,,1,,,1,,1,,,1,1],[,,,,,,,,,1],[,1,,,,1,,,,,,1,,,1,,,,,1],[,1,1,,1,1,,,,,,,,,,,,,,,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[,1,,,1,1,,1,1,1,1,,,,1,1,,,,1,,1],[1,1,1,1,1,1,,,1,1,1,1,1,1,,1,1,,1,1,1,,1,1,,1,1],[,,,,,,,,,,,,,,,1,,,,1],,[1,1,,1,,1,,,,,,1,,1,,1,1,,1,,1,1,,1,1,,1],[,,1,,,,,,1,,,,1,,1,,,,,1],[1,,,,,,,,,1,,,,,,1,,,,1,,1,,,1],[1,,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,,,1,,1,,,,,,1,,,1,,,,,,,,1],[,1,,1,,,,,,,,,,,,1],,[1,1,,,,,,,,,,,,,,,,,,,,,,1,1],[1]],[,[1,,,,,,,,,1,,,,,1,,1,,1],[,1,1,,1,1,,1,1,1,,,1,1,1,,,,1,,,1,,,,1],[,1,,,,,,,1,,,,1,,,,,,1],[1,1,1,1,1,1,,,,1,,,,,,,,,1,1,1,1],[1],[,1,1,,,1,1,,,,,1,,1,,,,,,,,1,,,,1],[1,,1,,,1,,1,,,,,1,1,1,1,,,,1,,,,1],[,,1,,,,,,,1,,,,,,,1,,,,,,,1],[1,,,,,,,,,,,,,,1,,,,1],[,,,1,,1,,,,,1,,,,1,1,,,,1],[1,,,,,1,,,,1,,1,1,,,1,1,,1,1,1,,1,1,1,,1],[,1,1,,,,,1,,1,,1,1,1,,1,1,,,1,,1,1,1],[,1,,,,1,,,,1,,,1,,1,1,,,1,1,,,,,,1],[1,,1,1,,1,,1,1,,1,,1,1,1,1,1,,,1,1,,,,,,1],[1,,,,,,,,,,,,,,,,,,1,,,1,,1],[,,,,,,,,,1,,,,,,1],[,,,,,,,,,,,,,,,,,,,,,1,,1],[,1,,,,1,,,1,1,,1,,,1,1,,,1,,,1,,,1,1],[1,1,,1,1,1,,1,1,1,,1,,1,1,1,,,1,,1,1],[1,,1,1,1,1,,,,1,,1,1,1,,1,,,1,1,1,,1,1,1,1,1],[1,,,,,,,,,,,,,1],[,,1,,,,,,,,,,,,,,,,,,,,1],[1,,,,,,,,,,,1,,1,,1,,,,1],[,,,1,,,,,,,,,1],[,1,,,,,,,,,,,,,,1,,,,,,,,,1],[,,,,,,,,1,1,,,,,,,,,1,,,,,,,,1]],[,[1,1,1,1,1,1,1,,1,,1,1,1,1,1,1,,1,1,1,1,1,,,1,1,1],[,,,,,1,,,,1,1,1,,,1,1,,,1,,1,1,,1],[,,,,,,,,,,,,,,,,,,,1,1],[,1,,,,,,1,,,,,,,,,,,,,1],[,,1,,,1,,1,1,1,,1,1,,1,,,,1,,1,1],,[,,1,,,1,,,,,,1,,,,1],[,,,,,,,,,1,,,,,,,,,,1],[1,1,1,1,1,1,,1,1,1,,,1,1,,1,,1,,,1,1,1,,,1],[,,,,,1,,,,,,,,,,,,,1],[,1,,,,,,,,,,,,1,,1,1,,1,,,1],[,,,,,1,,,,,,,,,,,,,,1],[,1,1,1,1,,,,,1,,,1,,1,,,,1,1,,,,1,1],[,1,,,1,,,1,,1,1,,1,,,,,,,1],[,,1,,1,,,1,,,,,,,,,,,1,1,,,,1],[,1,,,,,,,,,,,,,,,,,1,,,,,,1],[,,,,,,,,,,,,,,,,,,1],[,1,1,,,,,,,,,,,,,,,,1,,1,1],[,,,,,,,,,,,,1],,[,1,1,1,1,,,,1,1,,1,1,1,1,1,1,,1,1,1,1,,1,,1],[1,,,,1,,,,,,,,,,1],[1,,,,,,,,,1],,[,1,,,,1,,,,,,,,,,,,,,,,,,,,1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,,1,,1,1,1,1,,,,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,,1,1,,1,1,1,,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,,1,1,1,1,1,1,1,1,1,1,,,1,1,1,,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,,1,,1,1,1,1],[1,1,1,1,,1,1,1,,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1],[,,,1,1,1,1,,1,,,,1,1,,,1,1,,1],[,1,1,,1,,,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,,,,,,,,,,,,1],[1,1,1,,,,,1,1,1,,1,1,1,1,,,1,1,,1,1,,,,,1],[,1,,,,,,,1,1,,,1,1,1,,1,,,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,1,1,1,1,,1,1,1,1,1,1],[,1,,,,1,,,,1,,,1,,,,1,,,,,,,1,1],[,1,1,1,1,1,,,1,1,1,,1,1,1,1,,,1,1,1,1,,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,,1,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,1,1,1,1,1],[1,1,1,,1,,,1,1,1,1,,1,1,1,1,,,,1,,1,,1,,,1],[1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,,,1,,,,,,,,,1,1,,,,,,,,,1],,[,1,,1,,1,,1,,1,,1,1,1,1,1,,,1,,1,,1,,,,1],[,1,,,1,1,,1,1,1,,,1,1,1,1,1,,1,1,1,,1,,,1],[1,,,1,,,,1,1,1,,,,,1,1,,,,1,,1],[1,1,,1,1,1,1,,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[1,1,,,,,,,,1,,1,,,,,,,,1,,1],[,1,,,,1,,1,1,,,,1,1,,1,,,,1,1,1,,1],,[,1,,,,,,1,,,,,,,1],[,,,,,,,,1,,,,1,,1,,,,,,,,,,,,1]],[,[,1,1,,1,1,1,1,,1,1,1,,1,1,,1,1,,1,1,1,1,1,1,,1],[,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,,1,1,1,1,1,1,1,1,1,,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1],[,1,1,,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,,1],[1,1,1,1,1,,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,,1,1,1,1,1,1,1,1,1,1],[,1,,,1,,,,,,,,1,,,,,,1,,,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,,1,,1,1,1,1,1,1,,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1],[,1,1,,1,,,,1,1,1,,1,1,1,1,,,1,1,1,1,,,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,,1],[1,1,,1,,1,,1,,1,1,1,1,1,1,1,,1,1,,,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,,1,1],[,1,1,,,,,1,1,1,,,1,,1,1,,,,1,,1,,,1,1],[,,,,,,,1,,,,1,1,1,1,1,,1,,,,,,,,1],[1,1,1,1,,1,1,1,,1,,1,1,1,1,,1,,1,,1,1,,,1,,1],[,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,,,,1,1,,1,,1,1,1,,1,,1,1,,1,1,,1,,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,,,,,,,,1,,,,,1,,1],[,1,1,1,,1,,1,,1,,,,1,,1,,,1,,,,,,1,1],[,1,,,1,1,,1,,1,,1,1,1,1,1,,1,1,,,1,,,1],[1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,1,,,,,1,,1,,1,,,,,,1,,1,,,,1,1]],[,[,1,,1,,,,,,,,,,,,,,,1,,,,1],[,,,,,,,,,1,,1,1,1,,1,,,1,,1,1],[1,1,,,,,,,1,,,,,,,1,,,,,,1],[,1,,,,,,,,,,1,,,,,,,,,1,1],,[,,,,,,,,,,,,,,,1,,,,1,,1],[,,1,1,,1,,1,,,,,,,,1,,,,,,1],[,,,,,,,,,,,,,,,,,,,,1,1],[,1,,,,,,,,,,,,,1],[1,,1,1,,,,1,,,,,,,,,1,,,1,,,1,1],[,1,1,,1,1,,1,1,1,1,1,1,1,1,1,,,1,1,,1,1,,1],[,1,,,1,1,,,,,,1,,1,,1,,,1,,1,1],[1,1,1,1,,1,,1,,1,,1,1,,1,1,1,1,1,,1,1,1,1,1],[,1,1,,,1,,1,,1,1,1,,,1,1,1,,1,1,1,1,,1,1],[,,,,1,,,1,,,,,,,1,,,,1,1],[,1,,,,,,,,,,1,,1,,1,,,,,1,,,,,1],,[1,1,,1,,1,,1,1,,,,,,1,1,,,1,1,1,1,1,1,1,1,1],[1,1,,1,,,,,,1,,,,,,1,1,,,,1,1,,,1],[,1,1,,1,1,,,,1,,1,1,1,1,1,,1,1,1,1,1,,1,1,1,1],[,1,1,,,1,,,,1,,,,1,1],[,,,,1],[,,,,,,,,,1,,,1],,[,,1,,1,,,,,,,,,1,,,,,,,,,,,,1],[,,,,,,,,,,,,,1]],[,[1,1,1,1,1,1,1,1,1,1,,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,,1,1,,1,1,1,1,1,,,1,1,1,1,1,,1,1,1,1,1,,,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,,1,,,,,1],[,1,,1,,,,,,1,,,,,1,1,,,,,1,1],[,1,1,,1,1,1,1,1,1,1,1,1,1,,1,1,1,,1,,,1,,1,1,1],[,1,,,,1,,,,,,,1],[,1,,,1,,,1,,1,,1,1,,1,,,,,1,,1,,,,1,1],[,1,,,1,,,1,1,1,,1,1,1,1,1,,1,1,,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,,1,1,1,1,1,1,1,1,1],[,,,,,,,,,,,,,,,,,,,,1],[,1,1,1,,,,1,1,,,,,,1,1,1,,1,1,1,1],[1,1,1,1,1,1,1,1,1,,1,1,1,,1,1,1,1,1,1,1,1,1,1,,1,1],[,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,,1,1,1,1,1,,1,1,1,1],[,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,,,1,1,1,1,1,1,1,,1,,1,1,1,1,1,,1,1,,1,1,1,1,1],[,1,,,,1,,,,1,,1,1,1,1,1,1,1,1,1,1,1],[,1,,,,1,,,,,,,,1,,,,,,,,,,1],[,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[1,1,,1,1,1,,1,1,1,,,1,1,1,1,1,1,1,1,1,1,,1,,1],[1,1,,,,,,,1,1,,,,,1,1,1,1,1,,1,1,1,1,,1],[,1,1,1,1,1,1,1,,1,1,1,,1,,1,1,1,1,,1,1,,1,1,1,1],,[,1,1,,,,,1,,1,,,,1,1,1,,,1,,,,,1],[,,,,,,,,,,,,,1],[,,,,,1,,,,,,,,1,1,,,,,1,,1,,,1,1],[,,,,,,,,,,,,,,1]],[,[,1],,,,,,,,,,,,,,,,,,,,[1,1,1,1,1,,1,1,1,1,,1,1,1,1,,1,1,1,1,,,1,1,1,1,1],[,1,,1,,1,,,1,1,1,,1,1,1,1,1,,,1,,,,1,,1,1],[,1,,1,,1,,,1,,,,,1,,,,,,1,1],[,1,,1,,,,,1,,,,1,,1,1,1,1,1,1,1,1,,1],[,1,,,,,,,,,,,,,,,1]],[,[,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,,1,,,,,,,,,1,1,,,,1],[,,,,,,1],[,,1],[,1,1,,,1,,1,,1,1,,1,1,1,,,,1,1,1,,,,,1],,[,1,,,,1,,,,,,1,,,1,,,,1,1,,1],[,,,,,,,1,,,,,,,,,1],[,1,,,,1,1,,,,,,1,1,1,,,,1,,1,1],[,,,,,,,1,,1,,,,,,,,,,1],[,1,1,,,,,,1,1,,,,1,,,,,,,1,,,1],,[1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,,,1,,,1,,,,,1,,1,,1,,1,,,,,1],[1,1,1,1,1,1,1,1,,,,,1,1,,1,1,,1,,,1,,1],[,,,,,,,,,,,,,,1,,,,,,1],,[,,,,,,,,,1,,,,,,1,,,,,1],[,,1,,,,,,,1,,,1,1],[,,,1,,,,,1,,,,,1,,,,,,1,,,,1],[1,,1,1,,1,1,1,1,1,,1,,,,1,1,1,,,1,1,,,,1,1],,[1,1,,,,,,,,,,1,,1,,1,,,1],[,,,,1,,,,,,,,,,,,,,,,,,,1],[,,,,,,,,,,,,,,1,,,,,1,,1],[,,,,,,,,1]],[,[1,1,1,1,1,1,1,,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,,,1,1,1,1,1,,1,1,,1,1,1,1,,1,1,1,1,1,1],[1,1,1,1,,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[,,1,,,1,,,,,,,,1,,,,,,1,,,,1],[1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,,1,1,1,1],[1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,1,1,,1,,,,1,1,1,1,1,1,,1,1,1,1,,1],[1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,,1,1,1,1,1,1,1,1,,1,1,1,,1,1,1,1,1,1,,1,1,1,1],[1,1,1,1,1,,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[1,,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1],[1,1,1,1,1,1,,1,1,1,1,1,1,,1,1,1,1,1,1,,1,1,1,1,1,1],[,,1,1,1,1,,1,,1,,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[1,1,,,,,,,1,,1,1,,1,1,1,,1,1,1,1,1],[1,1,1,1,,1,1,1,1,1,,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1],[1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1],[1,1,1,1,,1,,1,,1,1,1,1,1,,,,1,1,1,1,,1,1,1,1,1],[1,1,1,1,,1,,,,,,1,,1,,,,,1,1,,,,,1],[1,,1,1,,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,,1,1,,1,,1,,,,1,1,1,1,1,,,1,1,,1,,1],[,1,1,1,1,,,,,1,,1,1,1,1,1,,,1,1,,,,1,1,1],[,1,1,1,1,1,,1,,,,,1,,1,,1,,,1,,,1,1,,1]],[,[1,1,1,1,1,1,1,1,,1,1,1,1,,1,1,1,1,1,1,,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,,1,1,1,,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,,1,1],[1,1,1,1,1,1,1,1,1,1,,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,,,,,,,,,1,,,,,1,1,,,1,,1],[1,1,1,1,1,1,1,1,1,1,1,,,,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,,,1,1,1,1,,1,1,,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1],[,1,,,,,,1,,1,1,,1,1,1,1,1,,,1,,1,,1],[1,1,1,,1,1,1,1,,,,1,1,1,1,,1,1,1,1,1,1,1,1,1,,1],[1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,,1,1,1,1,1,1,1,1,1,,1,1,,1,1,1,1,1,,1,1,1,1,1,1],[,1,,1,,1,1,1,,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1],[,,1,,,,,,,,,,1,1,1,1,1,1,1,,1,1,,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,,1,1,1,1,1,1,1,1],[,1,,,1,1,,,,,,1,1,1,1,1,,,,1,1,1,,1,1,1],[1,1,1,1,1,1,1,1,1,,,,1,1,1,1,1,1,1,,1,1,,1,1,1],[,1,1,1,,1,,1,1,1,1,,,1,1,1,,1,1,1,1,1,,,1,1],[1,1,,,,1,,,1,1,1,,1,,1,,1,,1,1,1,1,1,,1,,1],[,1,,,,,,,1,,1,,1,1,1,1,,,,,,,,,1]],[,[,,,,,,,,,,,,,1,1,,,,1],[,1,,,,,,,,1,,,1,,,,,,1,,,1,,,,1],,[,1,,,,1,,1,,1,1,,1,1,,,,,,,,1],[,,,,,,,,,,,,,,,,,,,1],[,,,,,,,,,1],[1,1,1,,,1,,,,,,,,,1,1,,,,,,,,,,1],[,1,,,,,,,,,,,,,1],[,,,,,,,,,,,,,,,,,,,1,,,1],[,,,,,,,,,1],[1,1,,,,,,1,1,1,,1,1,,,,1,1,,1,,1,1,1,,1],[,1,1,1,,1,1,,,1,,1,1,1,1,,,,,,,1,,1],[,1,1,1,1,,,1,,1,,,,1,1,1,1,,1,1,,1],[,1,,,1,1,,1,,,,1,,1,1,,1,,1,,,1,,,1,,1],[,,,,,,,,,,,1],[,,,,,,,,,1,,,,,,,,,,,,,1],,[1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,,1,,1,1,1,1,1,1,1],[,1,,,,,,,1,1,,1,,,,,1,,,1,,1],[,1,,,,1,,,1,,,,,,,,1,,1,,,1],[,,,,,,,,,,,,,1,1,,,,1,,,1],[,,,,,1,,,1,,,,1],[,1],,[,1],[1,,,,,,,,,,,,,,1,,,,,1]],[,[,1,,,,1,1,1,1,1,1,,1,1,1,1,1,,1,1,,1,1,,,1],[,,1,,,,,,,,,1],,,[1,,,1,1,,,,,,,,1,1,,1,1,,1],,[,,,,,,,,,,,,,,,,,,1,,1],,[1,,,1,1,,1,1,,,,,1,,1,,,,,1,1,,1],,[,1,,,,,,,,1,1,1,1,1,,1,1,,,,1,1],[,,,,,,,,,,,,,,,,1,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,1,1,1,,1,1,1,1,1,1],[,,,,,,,,,,,1,,1,,,1],[1,,,,,,,,,,,,,,,,,,1,,1],,,[,1,,,,,,,,,,,,,,1,,,,1,1],[,,,,,,,,,1,,,1,,,,,,,,,,1],[,,,,,,,,,,,,,,,1],[,,,,,,,,,,,,,1,1,,,,,,1],,[,1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,,1,1,,1,1,1,1,1,1,,,1,1,1,1,1,,1,1],[,1,,,,,,,,1],[,,,,1,,,1,,,1,1,,,,,,,,,,1,,,,1],[,1,,1,1,,,1,1,1,,,,1,1,1,1,,1,1,1,1,,1],[,,,,,,,1],[,1,1,,,,,1,,1,,,,,,1,,,,,,1,,1,,1],[,1,,,,,,1,,,,1,,,,,,,,,,1],[,,1,1,,1,1,1,1,1,1,1,1,1,1,,,,1,,1,1,1,1,,1],[,1,,,,,,,,1],[,1,1,,1,,,,,,,,1,,,,,,1,,,1,,1,,1],[,1,,1,,1,,1,1,1,,1,1,1,,1,,,1,1,,1,1,1,1,1],[,1,1,1,1,1,,,1,1,,,,1,1,1,,,,1,1,,,1,1],[,,1,1,1,1,,1,,1,,1,,1,1,1,1,,,,,1,,1,,1],[1,1,1,1,1,1,1,1,,1,,1,,1,1,1,,,1,1,,,,1,,1],[,,,1],,[,1,1,,1,,,1,1,1,,1,1,1,1,1,1,,1,1,,1,1,1,1,1,1],[,1,,,,,,1,,1,,1,,,,,,,1,1,,1,1],[,,,,,,1,,1,1,,1,,1,,,,,,,,,,1],[,1,1,,1,,,,1,,,,1,1,1,,,,1,,1,1,1,,1,1],,[,1,1,,,,,,,,,,,,,1,,,1,,,,,1],[,1,,,,,,,,,,,,,,,,,,,,,,1],[,1,1,,,,,,,1,,,,1,,,,,1,,,,,,,1]],[,[,1,1,1,1,1,,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1],[,1,1,1,1,1,,1,,1,1,,,1,1,1,1,,1,,,,,1,1,1],[,,1,1,,1,,1,1,,,,1,1,1,1,,,1,,1,1,1,1,,1],[,1,,1,,,,,,,,1,,1,,1,,,,,,,,,,1],[,,1,,1,,,1,,,,,1,1,,,1,,1,1,1,1],[,1],[,1,1,,1,,1,1,,1,,,1,1,1,,,,1,,,1,,1],[1,1,,1,1,1,,,,,,,,,,,,,1,,1,1,1],[,1,1,,,,,,,1,,,1,,1,,1,,1,1,,,1,,,1],[,,1,,,,,,,,,,,,,,,,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,,1,,1,,,,,1,1,1,,,1,,1,,,,1],[,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,1,,,1,1,1,,1,,1,1,1,,,1,1,1,1,,,,1,1],[,,,1,1,,,1,,1,,1,,1,1,1,1,,1,,,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,,,,,,,,,,,,,,,,,,1],[,1,1,,1,1,,1,,1,,,,1,1,,,1,1,,1,1,,1],[,1,1,1,1,1,,,1,1,1,,1,1,1,1,1,1,1,1,,1,1,,,1],[,1,1,1,1,1,,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[,1,1,,1,,,1,,,1,,1,1,1,1,1,,1,,1,1],[,,,,,1,,,,1,,,,,1,1,,,,1],[,1,,1,1,1,,1,,,1,1,1,,,1,,,1,,1,,,1],[,,1,,,,,,,,,1,,1,,,,,1,,1],[,1,1,,,,,,,,1,1,1,,,,,,,,1,,,,,1],[,,,,,,,,1,,,,,1,,,1]],[,[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,1,1,,,1,1,1,1,1,1,1,1,,,,,,,,,1,1],[,,,,,,,,1,,,,1,,1,,1],[,1,,,1,1,,1,,,,1,,,,,,,,1],[,1,,1,,1,,,,1,1,,1,,1,,,,1,1,1,1,1,,,1],,[,1,,,,,,,,1,,,1,1,,,1,,1,1,,1,,1],[,1,,,1,,,,,,,,1,,,,,,,1],[1,1,,,,,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,,1,1,1],,[,1,,,,,,1,,1,,1,1,1,1,1,,,1,,1,1,,,,1],[,1,1,,,1,,1,,1,,,1,1,1,1,,,1,,,1,,,,1],[,1,1,1,1,1,,1,1,1,,1,1,1,1,1,1,1,1,1,1,,,,1,,1],[,1,,,1,1,,1,1,,,1,1,,1,1,,1,,1,,1],[1,,1,,,,,1,,1,,1,1,1,1,,,,,1,1,,,,1,1],[,1,1,,,,,1,1,,,1,,1,1,1,1,,,,,,,,,,1],,[,1,1,,,1,,,,1,,1,1,1,1,1,,,,1,,,,1,,1],[,,,1,1,,,1,,,,,1,,1,1,1,,1,1,,,,,,1],[,1,,,,,,,,,,,1,,,,1,,,,,,,1,,1],[,1,1,1,1,1,1,1,,1,1,1,1,1,1,,1,1,1,,1,1,,1,1,1,1],[,1,,,,,,,,,,,,,,,,,,,1],[,1,,,,,,1,,,,,1,,1,,,1,1,,1,1,,1],[,1,,,,,,1,,,,,1,1,,,,,,,,1,,,,1],[,,,,,,,,,,,,,,,,,,1,,,1,,,,,1],[,,,,,,,1,,,,1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,1,,1,,,,,,,1,,,,,,,,1,,,1],[,1,,,,,,,1],[,,,,,,,,,,1],[,1,,,,,,1,1,,,,,,1],,[,1,1,,,,,,1,,,,,1,1,,,,1],[1,,1,,1,,,,,1,,,,,1,,,,,,,,,1,1],[,1,1,,,,,,,,,1,1,1,1,,,,1,,,,,1,,,1],,[,1,1,,1,,,1,1,,,1,,,1,1,1,,1,,1,1,1,,,,1],[,,,,,1,,,,,1,,,1,1,,,1,,1,,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,,1,1,,1,,,,1,,,,,,,,1],[,,,1,,,,,1,,,,,1,,1,,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,,,,,1],[,1,,,,,,1,,,,,,,1,1,1,,,1],[,1,,,,,,,,,,1,1,1,,,,,1,,,1],[,,,,,1,,1,,,,,1,1,1,,1,1,,1,1,1,,,1,1],[1,1,,,,,,,1,,,,,1,1,,,,,,,,,,,1],,[,1],[,,,,,,,,,,,,,,,,,,,,,,,,1],[,,1,,,,,1,,,1,,,,1,,1],[,1,,,,,,,,,1]]]
function Hm(e){e=Array.isArray(e)?e:Lm
var t=[]
return e.forEach((function(e,n){var r=String.fromCharCode(n+96).replace("`","")
Array.isArray(e)?t=t.concat(Hm(e).map((function(e){return r+e}))):t.push(r)})),t}var zm=function(e){for(var t=Lm;e.length<3;)e+="`"
for(var n=0;n<=e.length-1;n++)if(!(t=t[e.charCodeAt(n)-96]))return!1
return!0},$m=function(e){function t(e){var n,r,a,i
return W(this,t),(n=_(this,t))._props=function(e){var t,n,r,a=null!==(t=e.nodeName)&&void 0!==t?t:Um[e.nodeType],o=null!==(n=null!==(r=e.nodeType)&&void 0!==r?r:Vm[e.nodeName])&&void 0!==n?n:1
Sr("number"==typeof o,"nodeType has to be a number, got '".concat(o,"'")),Sr("string"==typeof a,"nodeName has to be a string, got '".concat(a,"'"))
var i=null
"input"===(a=a.toLowerCase())&&(i=(e.type||e.attributes&&e.attributes.type||"").toLowerCase(),qm().includes(i)||(i="text"))
var u=z({},e,{nodeType:o,nodeName:a})
return i&&(u.type=i),delete u.attributes,Object.freeze(u)}(e),n._attrs=(r=e.attributes,a=void 0===r?{}:r,i={htmlFor:"for",className:"class"},Object.keys(a).reduce((function(e,t){var n=a[t]
return Sr("object"!==o(n)||null===n,"expects attributes not to be an object, '".concat(t,"' was")),void 0!==n&&(e[i[t]||t]=null!==n?String(n):null),e}),{})),n}return I(t,e),K(t,[{key:"props",get:function(){return this._props}},{key:"attr",value:function(e){var t
return null!==(t=this._attrs[e])&&void 0!==t?t:null}},{key:"hasAttr",value:function(e){return void 0!==this._attrs[e]}},{key:"attrNames",get:function(){return Object.keys(this._attrs)}}]),t}(vr),Vm={"#cdata-section":2,"#text":3,"#comment":8,"#document":9,"#document-fragment":11},Um={}
Object.keys(Vm).forEach((function(e){Um[Vm[e]]=e}))
var Wm,Gm=$m,Km=function(e,t){if(e=e||function(){},t=t||i.log,!i._audit)throw new Error("No audit configured")
var n=i.utils.queue(),r=[]
Object.keys(i.plugins).forEach((function(e){n.defer((function(t){var n=function(e){r.push(e),t()}
try{i.plugins[e].cleanup(t,n)}catch(e){n(e)}}))}))
var o=i.utils.getFlattenedTree(a.body)
i.utils.querySelectorAll(o,"iframe, frame").forEach((function(e){n.defer((function(t,n){return i.utils.sendCommandToFrame(e.actualNode,{command:"cleanup-plugin"},t,n)}))})),n.then((function(n){0===r.length?e(n):t(r)})).catch(t)},Ym={}
function Qm(e){return Ym.hasOwnProperty(e)}function Xm(e){return"string"==typeof e&&Ym[e]?Ym[e]:"function"==typeof e?e:Wm}var Zm={}
se(Zm,{getAllCells:function(){return Jm},getCellPosition:function(){return Au},getHeaders:function(){return tD},getScope:function(){return ku},isColumnHeader:function(){return Tu},isDataCell:function(){return nD},isDataTable:function(){return rD},isHeader:function(){return aD},isRowHeader:function(){return Nu},toArray:function(){return xu},toGrid:function(){return xu},traverse:function(){return iD}})
var Jm=function(e){var t,n,r,a,o=[]
for(t=0,r=e.rows.length;t<r;t++)for(n=0,a=e.rows[t].cells.length;n<a;n++)o.push(e.rows[t].cells[n])
return o}
function eD(e,t,n){for(var r,a="row"===e?"_rowHeaders":"_colHeaders",o="row"===e?Nu:Tu,u=n[t.y][t.x],s=u.colSpan-1,l=u.getAttribute("rowspan"),c=(0===parseInt(l)||0===u.rowspan?n.length:u.rowSpan)-1,d=t.y+c,p=t.x+s,f="row"===e?t.y:0,h="row"===e?0:t.x,m=[],D=d;D>=f&&!r;D--)for(var g=p;g>=h;g--){var v=n[D]?n[D][g]:void 0
if(v){var y=i.utils.getNodeFromTree(v)
if(y[a]){r=y[a]
break}m.push(v)}}return r=(r||[]).concat(m.filter(o)),m.forEach((function(e){i.utils.getNodeFromTree(e)[a]=r})),r}var tD=function(e,t){if(e.getAttribute("headers")){var n=du(e,"headers")
if(n.filter((function(e){return e})).length)return n}t||(t=xu(Lo(e,"table")))
var r=Au(e,t),a=eD("row",r,t),o=eD("col",r,t)
return[].concat(a,o).reverse()},nD=function(e){if(!e.children.length&&!e.textContent.trim())return!1
var t=e.getAttribute("role")
return Fu(t)?["cell","gridcell"].includes(t):"TD"===e.nodeName.toUpperCase()},rD=function(e){var t=(e.getAttribute("role")||"").toLowerCase()
if(("presentation"===t||"none"===t)&&!iu(e))return!1
if("true"===e.getAttribute("contenteditable")||Lo(e,'[contenteditable="true"]'))return!0
if("grid"===t||"treegrid"===t||"table"===t)return!0
if("landmark"===ol(t))return!0
if("0"===e.getAttribute("datatable"))return!1
if(e.getAttribute("summary"))return!0
if(e.tHead||e.tFoot||e.caption)return!0
for(var r=0,a=e.children.length;r<a;r++)if("COLGROUP"===e.children[r].nodeName.toUpperCase())return!0
for(var o,i,u=0,s=e.rows.length,l=!1,c=0;c<s;c++)for(var d=0,p=(o=e.rows[c]).cells.length;d<p;d++){if("TH"===(i=o.cells[d]).nodeName.toUpperCase())return!0
if(l||i.offsetWidth===i.clientWidth&&i.offsetHeight===i.clientHeight||(l=!0),i.getAttribute("scope")||i.getAttribute("headers")||i.getAttribute("abbr"))return!0
if(["columnheader","rowheader"].includes((i.getAttribute("role")||"").toLowerCase()))return!0
if(1===i.children.length&&"ABBR"===i.children[0].nodeName.toUpperCase())return!0
u++}if(e.getElementsByTagName("table").length)return!1
if(s<2)return!1
var f,h,m=e.rows[Math.ceil(s/2)]
if(1===m.cells.length&&1===m.cells[0].colSpan)return!1
if(m.cells.length>=5)return!0
if(l)return!0
for(c=0;c<s;c++){if(o=e.rows[c],f&&f!==n.getComputedStyle(o).getPropertyValue("background-color"))return!0
if(f=n.getComputedStyle(o).getPropertyValue("background-color"),h&&h!==n.getComputedStyle(o).getPropertyValue("background-image"))return!0
h=n.getComputedStyle(o).getPropertyValue("background-image")}return s>=20||!(li(e).width>.95*ci(n).width)&&!(u<10)&&!e.querySelector("object, embed, iframe, applet")},aD=function(e){if(Tu(e)||Nu(e))return!0
if(e.getAttribute("id")){var t=Or(e.getAttribute("id"))
return!!a.querySelector('[headers~="'.concat(t,'"]'))}return!1}
function oD(e,t,n,r){var a,o=n[t.y]?n[t.y][t.x]:void 0
return o?"function"==typeof r&&!0===(a=r(o,t,n))?[o]:((a=oD(e,{x:t.x+e.x,y:t.y+e.y},n,r)).unshift(o),a):[]}var iD=function(e,t,n,r){if(Array.isArray(t)&&(r=n,n=t,t={x:0,y:0}),"string"==typeof e)switch(e){case"left":e={x:-1,y:0}
break
case"up":e={x:0,y:-1}
break
case"right":e={x:1,y:0}
break
case"down":e={x:0,y:1}}return oD(e,{x:t.x+e.x,y:t.y+e.y},n,r)},uD={}
se(uD,{allowedAttr:function(){return sD},arialabelText:function(){return hu},arialabelledbyText:function(){return fu},getAccessibleRefs:function(){return dD},getElementUnallowedRoles:function(){return mD},getExplicitRole:function(){return wu},getImplicitRole:function(){return Yu},getOwnedVirtual:function(){return as},getRole:function(){return es},getRoleType:function(){return ol},getRolesByType:function(){return gD},getRolesWithNameFromContents:function(){return yD},implicitNodes:function(){return CD},implicitRole:function(){return Yu},isAccessibleRef:function(){return xD},isAriaRoleAllowedOnElement:function(){return pD},isComboboxPopup:function(){return AD},isUnsupportedRole:function(){return bu},isValidRole:function(){return Fu},label:function(){return TD},labelVirtual:function(){return Ps},lookupTable:function(){return ED},namedFromContents:function(){return rs},requiredAttr:function(){return ND},requiredContext:function(){return RD},requiredOwned:function(){return BD},validateAttr:function(){return _D},validateAttrValue:function(){return SD}})
var sD=function(e){var t=yu.ariaRoles[e],n=L(Cu())
return t?(t.allowedAttrs&&n.push.apply(n,L(t.allowedAttrs)),t.requiredAttrs&&n.push.apply(n,L(t.requiredAttrs)),n):n},lD=/^idrefs?$/
function cD(e,t,n){if(e.hasAttribute){if("LABEL"===e.nodeName.toUpperCase()&&e.hasAttribute("for")){var r=e.getAttribute("for")
t.has(r)?t.get(r).push(e):t.set(r,[e])}for(var a=0;a<n.length;++a){var o=n[a],i=Ru(e.getAttribute(o)||"")
if(i){var u,s=Q(ih(i))
try{for(s.s();!(u=s.n()).done;){var l=u.value
t.has(l)?t.get(l).push(e):t.set(l,[e])}}catch(e){s.e(e)}finally{s.f()}}}}for(var c=0;c<e.childNodes.length;c++)1===e.childNodes[c].nodeType&&cD(e.childNodes[c],t,n)}var dD=function(e){var t
e=e.actualNode||e
var n=Io(e)
n=n.documentElement||n
var r=da.get("idRefsByRoot",(function(){return new Map})),a=r.get(n)
return a||(a=new Map,r.set(n,a),cD(n,a,Object.keys(yu.ariaAttrs).filter((function(e){var t=yu.ariaAttrs[e].type
return lD.test(t)})))),null!==(t=a.get(e.id))&&void 0!==t?t:[]},pD=function(e,t){var n=e instanceof vr?e:pa(e),r=Yu(n),a=Ku(n)
return Array.isArray(a.allowedRoles)?a.allowedRoles.includes(t):t!==r&&!!a.allowedRoles},fD=["doc-backlink","doc-biblioentry","doc-biblioref","doc-cover","doc-endnote","doc-glossref","doc-noteref"],hD={header:"banner",footer:"contentinfo"},mD=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=um(e).vNode
if(!nm(n))return[]
var r=n.props.nodeName,a=Yu(n)||hD[r]
return function(e){var t=[]
if(!e)return t
if(e.hasAttr("role")){var n=ih(e.attr("role").toLowerCase())
t=t.concat(n)}return t.filter((function(e){return Fu(e)}))}(n).filter((function(e){return!function(e,t,n,r){return!(!n||e!==r)||(!fD.includes(e)||ol(e)===r)&&pD(t,e)}(e,n,t,a)}))},DD=function(e){return Object.keys(yu.ariaRoles).filter((function(t){return yu.ariaRoles[t].type===e}))},gD=function(e){return DD(e)},vD=function(){return da.get("ariaRolesNameFromContent",(function(){return Object.keys(yu.ariaRoles).filter((function(e){return yu.ariaRoles[e].nameFromContent}))}))},yD=function(){return vD()},bD=function(e){return null===e},FD=function(e){return null!==e},wD={attributes:{"aria-activedescendant":{type:"idref",allowEmpty:!0,unsupported:!1},"aria-atomic":{type:"boolean",values:["true","false"],unsupported:!1},"aria-autocomplete":{type:"nmtoken",values:["inline","list","both","none"],unsupported:!1},"aria-busy":{type:"boolean",values:["true","false"],unsupported:!1},"aria-checked":{type:"nmtoken",values:["true","false","mixed","undefined"],unsupported:!1},"aria-colcount":{type:"int",unsupported:!1},"aria-colindex":{type:"int",unsupported:!1},"aria-colspan":{type:"int",unsupported:!1},"aria-controls":{type:"idrefs",allowEmpty:!0,unsupported:!1},"aria-current":{type:"nmtoken",allowEmpty:!0,values:["page","step","location","date","time","true","false"],unsupported:!1},"aria-describedby":{type:"idrefs",allowEmpty:!0,unsupported:!1},"aria-describedat":{unsupported:!0,unstandardized:!0},"aria-details":{type:"idref",allowEmpty:!0,unsupported:!1},"aria-disabled":{type:"boolean",values:["true","false"],unsupported:!1},"aria-dropeffect":{type:"nmtokens",values:["copy","move","reference","execute","popup","none"],unsupported:!1},"aria-errormessage":{type:"idref",allowEmpty:!0,unsupported:!1},"aria-expanded":{type:"nmtoken",values:["true","false","undefined"],unsupported:!1},"aria-flowto":{type:"idrefs",allowEmpty:!0,unsupported:!1},"aria-grabbed":{type:"nmtoken",values:["true","false","undefined"],unsupported:!1},"aria-haspopup":{type:"nmtoken",allowEmpty:!0,values:["true","false","menu","listbox","tree","grid","dialog"],unsupported:!1},"aria-hidden":{type:"boolean",values:["true","false"],unsupported:!1},"aria-invalid":{type:"nmtoken",allowEmpty:!0,values:["true","false","spelling","grammar"],unsupported:!1},"aria-keyshortcuts":{type:"string",allowEmpty:!0,unsupported:!1},"aria-label":{type:"string",allowEmpty:!0,unsupported:!1},"aria-labelledby":{type:"idrefs",allowEmpty:!0,unsupported:!1},"aria-level":{type:"int",unsupported:!1},"aria-live":{type:"nmtoken",values:["off","polite","assertive"],unsupported:!1},"aria-modal":{type:"boolean",values:["true","false"],unsupported:!1},"aria-multiline":{type:"boolean",values:["true","false"],unsupported:!1},"aria-multiselectable":{type:"boolean",values:["true","false"],unsupported:!1},"aria-orientation":{type:"nmtoken",values:["horizontal","vertical"],unsupported:!1},"aria-owns":{type:"idrefs",allowEmpty:!0,unsupported:!1},"aria-placeholder":{type:"string",allowEmpty:!0,unsupported:!1},"aria-posinset":{type:"int",unsupported:!1},"aria-pressed":{type:"nmtoken",values:["true","false","mixed","undefined"],unsupported:!1},"aria-readonly":{type:"boolean",values:["true","false"],unsupported:!1},"aria-relevant":{type:"nmtokens",values:["additions","removals","text","all"],unsupported:!1},"aria-required":{type:"boolean",values:["true","false"],unsupported:!1},"aria-roledescription":{type:"string",allowEmpty:!0,unsupported:!1},"aria-rowcount":{type:"int",unsupported:!1},"aria-rowindex":{type:"int",unsupported:!1},"aria-rowspan":{type:"int",unsupported:!1},"aria-selected":{type:"nmtoken",values:["true","false","undefined"],unsupported:!1},"aria-setsize":{type:"int",unsupported:!1},"aria-sort":{type:"nmtoken",values:["ascending","descending","other","none"],unsupported:!1},"aria-valuemax":{type:"decimal",unsupported:!1},"aria-valuemin":{type:"decimal",unsupported:!1},"aria-valuenow":{type:"decimal",unsupported:!1},"aria-valuetext":{type:"string",unsupported:!1}},globalAttributes:["aria-atomic","aria-busy","aria-controls","aria-current","aria-describedby","aria-details","aria-disabled","aria-dropeffect","aria-flowto","aria-grabbed","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-live","aria-owns","aria-relevant","aria-roledescription"]}
wD.role={alert:{type:"widget",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},alertdialog:{type:"widget",attributes:{allowed:["aria-expanded","aria-modal","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["dialog","section"]},application:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage","aria-activedescendant"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["article","audio","embed","iframe","object","section","svg","video"]},article:{type:"structure",attributes:{allowed:["aria-expanded","aria-posinset","aria-setsize","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["article"],unsupported:!1},banner:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["header"],unsupported:!1,allowedElements:["section"]},button:{type:"widget",attributes:{allowed:["aria-expanded","aria-pressed","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,implicit:["button",'input[type="button"]','input[type="image"]','input[type="reset"]','input[type="submit"]',"summary"],unsupported:!1,allowedElements:[{nodeName:"a",attributes:{href:FD}}]},cell:{type:"structure",attributes:{allowed:["aria-colindex","aria-colspan","aria-rowindex","aria-rowspan","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["row"],implicit:["td","th"],unsupported:!1},checkbox:{type:"widget",attributes:{allowed:["aria-checked","aria-required","aria-readonly","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,implicit:['input[type="checkbox"]'],unsupported:!1,allowedElements:["button"]},columnheader:{type:"structure",attributes:{allowed:["aria-colindex","aria-colspan","aria-expanded","aria-rowindex","aria-rowspan","aria-required","aria-readonly","aria-selected","aria-sort","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["row"],implicit:["th"],unsupported:!1},combobox:{type:"composite",attributes:{allowed:["aria-autocomplete","aria-required","aria-activedescendant","aria-orientation","aria-errormessage"],required:["aria-expanded"]},owned:{all:["listbox","tree","grid","dialog","textbox"]},nameFrom:["author"],context:null,unsupported:!1,allowedElements:[{nodeName:"input",properties:{type:["text","search","tel","url","email"]}}]},command:{nameFrom:["author"],type:"abstract",unsupported:!1},complementary:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["aside"],unsupported:!1,allowedElements:["section"]},composite:{nameFrom:["author"],type:"abstract",unsupported:!1},contentinfo:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["footer"],unsupported:!1,allowedElements:["section"]},definition:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["dd","dfn"],unsupported:!1},dialog:{type:"widget",attributes:{allowed:["aria-expanded","aria-modal","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["dialog"],unsupported:!1,allowedElements:["section"]},directory:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,unsupported:!1,allowedElements:["ol","ul"]},document:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["body"],unsupported:!1,allowedElements:["article","embed","iframe","object","section","svg"]},"doc-abstract":{type:"section",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-acknowledgments":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-afterword":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-appendix":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-backlink":{type:"link",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,unsupported:!1,allowedElements:[{nodeName:"a",attributes:{href:FD}}]},"doc-biblioentry":{type:"listitem",attributes:{allowed:["aria-expanded","aria-level","aria-posinset","aria-setsize","aria-errormessage"]},owned:null,nameFrom:["author"],context:["doc-bibliography"],unsupported:!1,allowedElements:["li"]},"doc-bibliography":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:{one:["doc-biblioentry"]},nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-biblioref":{type:"link",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,unsupported:!1,allowedElements:[{nodeName:"a",attributes:{href:FD}}]},"doc-chapter":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-colophon":{type:"section",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-conclusion":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-cover":{type:"img",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1},"doc-credit":{type:"section",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-credits":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-dedication":{type:"section",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-endnote":{type:"listitem",attributes:{allowed:["aria-expanded","aria-level","aria-posinset","aria-setsize","aria-errormessage"]},owned:null,namefrom:["author"],context:["doc-endnotes"],unsupported:!1,allowedElements:["li"]},"doc-endnotes":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:{one:["doc-endnote"]},namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-epigraph":{type:"section",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1},"doc-epilogue":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-errata":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-example":{type:"section",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["aside","section"]},"doc-footnote":{type:"section",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["aside","footer","header"]},"doc-foreword":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-glossary":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:["term","definition"],namefrom:["author"],context:null,unsupported:!1,allowedElements:["dl"]},"doc-glossref":{type:"link",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author","contents"],context:null,unsupported:!1,allowedElements:[{nodeName:"a",attributes:{href:FD}}]},"doc-index":{type:"navigation",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["nav","section"]},"doc-introduction":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-noteref":{type:"link",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author","contents"],context:null,unsupported:!1,allowedElements:[{nodeName:"a",attributes:{href:FD}}]},"doc-notice":{type:"note",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-pagebreak":{type:"separator",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["hr"]},"doc-pagelist":{type:"navigation",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["nav","section"]},"doc-part":{type:"landmark",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-preface":{type:"landmark",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-prologue":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-pullquote":{type:"none",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["aside","section"]},"doc-qna":{type:"section",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-subtitle":{type:"sectionhead",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:{nodeName:["h1","h2","h3","h4","h5","h6"]}},"doc-tip":{type:"note",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["aside"]},"doc-toc":{type:"navigation",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["nav","section"]},feed:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:{one:["article"]},nameFrom:["author"],context:null,unsupported:!1,allowedElements:["article","aside","section"]},figure:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,implicit:["figure"],unsupported:!1},form:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["form"],unsupported:!1},grid:{type:"composite",attributes:{allowed:["aria-activedescendant","aria-expanded","aria-colcount","aria-level","aria-multiselectable","aria-readonly","aria-rowcount","aria-errormessage"]},owned:{one:["rowgroup","row"]},nameFrom:["author"],context:null,implicit:["table"],unsupported:!1},gridcell:{type:"widget",attributes:{allowed:["aria-colindex","aria-colspan","aria-expanded","aria-rowindex","aria-rowspan","aria-selected","aria-readonly","aria-required","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["row"],implicit:["td","th"],unsupported:!1},group:{type:"structure",attributes:{allowed:["aria-activedescendant","aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["details","optgroup"],unsupported:!1,allowedElements:["dl","figcaption","fieldset","figure","footer","header","ol","ul"]},heading:{type:"structure",attributes:{required:["aria-level"],allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,implicit:["h1","h2","h3","h4","h5","h6"],unsupported:!1},img:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["img"],unsupported:!1,allowedElements:["embed","iframe","object","svg"]},input:{nameFrom:["author"],type:"abstract",unsupported:!1},landmark:{nameFrom:["author"],type:"abstract",unsupported:!1},link:{type:"widget",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,implicit:["a[href]","area[href]"],unsupported:!1,allowedElements:["button",{nodeName:"input",properties:{type:["image","button"]}}]},list:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:{all:["listitem"]},nameFrom:["author"],context:null,implicit:["ol","ul","dl"],unsupported:!1},listbox:{type:"composite",attributes:{allowed:["aria-activedescendant","aria-multiselectable","aria-readonly","aria-required","aria-expanded","aria-orientation","aria-errormessage"]},owned:{all:["option"]},nameFrom:["author"],context:null,implicit:["select"],unsupported:!1,allowedElements:["ol","ul"]},listitem:{type:"structure",attributes:{allowed:["aria-level","aria-posinset","aria-setsize","aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["list"],implicit:["li","dt"],unsupported:!1},log:{type:"widget",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},main:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["main"],unsupported:!1,allowedElements:["article","section"]},marquee:{type:"widget",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},math:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["math"],unsupported:!1},menu:{type:"composite",attributes:{allowed:["aria-activedescendant","aria-expanded","aria-orientation","aria-errormessage"]},owned:{one:["menuitem","menuitemradio","menuitemcheckbox"]},nameFrom:["author"],context:null,implicit:['menu[type="context"]'],unsupported:!1,allowedElements:["ol","ul"]},menubar:{type:"composite",attributes:{allowed:["aria-activedescendant","aria-expanded","aria-orientation","aria-errormessage"]},owned:{one:["menuitem","menuitemradio","menuitemcheckbox"]},nameFrom:["author"],context:null,unsupported:!1,allowedElements:["ol","ul"]},menuitem:{type:"widget",attributes:{allowed:["aria-posinset","aria-setsize","aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["menu","menubar"],implicit:['menuitem[type="command"]'],unsupported:!1,allowedElements:["button","li",{nodeName:"iput",properties:{type:["image","button"]}},{nodeName:"a",attributes:{href:FD}}]},menuitemcheckbox:{type:"widget",attributes:{allowed:["aria-checked","aria-posinset","aria-setsize","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["menu","menubar"],implicit:['menuitem[type="checkbox"]'],unsupported:!1,allowedElements:[{nodeName:["button","li"]},{nodeName:"input",properties:{type:["checkbox","image","button"]}},{nodeName:"a",attributes:{href:FD}}]},menuitemradio:{type:"widget",attributes:{allowed:["aria-checked","aria-selected","aria-posinset","aria-setsize","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["menu","menubar"],implicit:['menuitem[type="radio"]'],unsupported:!1,allowedElements:[{nodeName:["button","li"]},{nodeName:"input",properties:{type:["image","button","radio"]}},{nodeName:"a",attributes:{href:FD}}]},navigation:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["nav"],unsupported:!1,allowedElements:["section"]},none:{type:"structure",attributes:null,owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:[{nodeName:["article","aside","dl","embed","figcaption","fieldset","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hr","iframe","li","ol","section","ul"]},{nodeName:"img",attributes:{alt:FD}}]},note:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["aside"]},option:{type:"widget",attributes:{allowed:["aria-selected","aria-posinset","aria-setsize","aria-checked","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["listbox"],implicit:["option"],unsupported:!1,allowedElements:[{nodeName:["button","li"]},{nodeName:"input",properties:{type:["checkbox","button"]}},{nodeName:"a",attributes:{href:FD}}]},presentation:{type:"structure",attributes:null,owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:[{nodeName:["article","aside","dl","embed","figcaption","fieldset","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hr","iframe","li","ol","section","ul"]},{nodeName:"img",attributes:{alt:FD}}]},progressbar:{type:"widget",attributes:{allowed:["aria-valuetext","aria-valuenow","aria-valuemax","aria-valuemin","aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["progress"],unsupported:!1},radio:{type:"widget",attributes:{allowed:["aria-selected","aria-posinset","aria-setsize","aria-required","aria-errormessage","aria-checked"]},owned:null,nameFrom:["author","contents"],context:null,implicit:['input[type="radio"]'],unsupported:!1,allowedElements:[{nodeName:["button","li"]},{nodeName:"input",properties:{type:["image","button"]}}]},radiogroup:{type:"composite",attributes:{allowed:["aria-activedescendant","aria-required","aria-expanded","aria-readonly","aria-errormessage","aria-orientation"]},owned:{all:["radio"]},nameFrom:["author"],context:null,unsupported:!1,allowedElements:{nodeName:["ol","ul","fieldset"]}},range:{nameFrom:["author"],type:"abstract",unsupported:!1},region:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["section[aria-label]","section[aria-labelledby]","section[title]"],unsupported:!1,allowedElements:{nodeName:["article","aside"]}},roletype:{type:"abstract",unsupported:!1},row:{type:"structure",attributes:{allowed:["aria-activedescendant","aria-colindex","aria-expanded","aria-level","aria-selected","aria-rowindex","aria-errormessage"]},owned:{one:["cell","columnheader","rowheader","gridcell"]},nameFrom:["author","contents"],context:["rowgroup","grid","treegrid","table"],implicit:["tr"],unsupported:!1},rowgroup:{type:"structure",attributes:{allowed:["aria-activedescendant","aria-expanded","aria-errormessage"]},owned:{all:["row"]},nameFrom:["author","contents"],context:["grid","table","treegrid"],implicit:["tbody","thead","tfoot"],unsupported:!1},rowheader:{type:"structure",attributes:{allowed:["aria-colindex","aria-colspan","aria-expanded","aria-rowindex","aria-rowspan","aria-required","aria-readonly","aria-selected","aria-sort","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["row"],implicit:["th"],unsupported:!1},scrollbar:{type:"widget",attributes:{required:["aria-controls","aria-valuenow"],allowed:["aria-valuetext","aria-orientation","aria-errormessage","aria-valuemax","aria-valuemin"]},owned:null,nameFrom:["author"],context:null,unsupported:!1},search:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:{nodeName:["aside","form","section"]}},searchbox:{type:"widget",attributes:{allowed:["aria-activedescendant","aria-autocomplete","aria-multiline","aria-readonly","aria-required","aria-placeholder","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:['input[type="search"]'],unsupported:!1,allowedElements:{nodeName:"input",properties:{type:"text"}}},section:{nameFrom:["author","contents"],type:"abstract",unsupported:!1},sectionhead:{nameFrom:["author","contents"],type:"abstract",unsupported:!1},select:{nameFrom:["author"],type:"abstract",unsupported:!1},separator:{type:"structure",attributes:{allowed:["aria-expanded","aria-orientation","aria-valuenow","aria-valuemax","aria-valuemin","aria-valuetext","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["hr"],unsupported:!1,allowedElements:["li"]},slider:{type:"widget",attributes:{allowed:["aria-valuetext","aria-orientation","aria-readonly","aria-errormessage","aria-valuemax","aria-valuemin"],required:["aria-valuenow"]},owned:null,nameFrom:["author"],context:null,implicit:['input[type="range"]'],unsupported:!1},spinbutton:{type:"widget",attributes:{allowed:["aria-valuetext","aria-required","aria-readonly","aria-errormessage","aria-valuemax","aria-valuemin"],required:["aria-valuenow"]},owned:null,nameFrom:["author"],context:null,implicit:['input[type="number"]'],unsupported:!1,allowedElements:{nodeName:"input",properties:{type:["text","tel"]}}},status:{type:"widget",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["output"],unsupported:!1,allowedElements:["section"]},structure:{type:"abstract",unsupported:!1},switch:{type:"widget",attributes:{allowed:["aria-errormessage"],required:["aria-checked"]},owned:null,nameFrom:["author","contents"],context:null,unsupported:!1,allowedElements:["button",{nodeName:"input",properties:{type:["checkbox","image","button"]}},{nodeName:"a",attributes:{href:FD}}]},tab:{type:"widget",attributes:{allowed:["aria-selected","aria-expanded","aria-setsize","aria-posinset","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["tablist"],unsupported:!1,allowedElements:[{nodeName:["button","h1","h2","h3","h4","h5","h6","li"]},{nodeName:"input",properties:{type:"button"}},{nodeName:"a",attributes:{href:FD}}]},table:{type:"structure",attributes:{allowed:["aria-colcount","aria-rowcount","aria-errormessage"]},owned:{one:["rowgroup","row"]},nameFrom:["author","contents"],context:null,implicit:["table"],unsupported:!1},tablist:{type:"composite",attributes:{allowed:["aria-activedescendant","aria-expanded","aria-level","aria-multiselectable","aria-orientation","aria-errormessage"]},owned:{all:["tab"]},nameFrom:["author"],context:null,unsupported:!1,allowedElements:["ol","ul"]},tabpanel:{type:"widget",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},term:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,implicit:["dt"],unsupported:!1},textbox:{type:"widget",attributes:{allowed:["aria-activedescendant","aria-autocomplete","aria-multiline","aria-readonly","aria-required","aria-placeholder","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:['input[type="text"]','input[type="email"]','input[type="password"]','input[type="tel"]','input[type="url"]',"input:not([type])","textarea"],unsupported:!1},timer:{type:"widget",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1},toolbar:{type:"structure",attributes:{allowed:["aria-activedescendant","aria-expanded","aria-orientation","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:['menu[type="toolbar"]'],unsupported:!1,allowedElements:["ol","ul"]},tooltip:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,unsupported:!1},tree:{type:"composite",attributes:{allowed:["aria-activedescendant","aria-multiselectable","aria-required","aria-expanded","aria-orientation","aria-errormessage"]},owned:{all:["treeitem"]},nameFrom:["author"],context:null,unsupported:!1,allowedElements:["ol","ul"]},treegrid:{type:"composite",attributes:{allowed:["aria-activedescendant","aria-colcount","aria-expanded","aria-level","aria-multiselectable","aria-readonly","aria-required","aria-rowcount","aria-orientation","aria-errormessage"]},owned:{one:["rowgroup","row"]},nameFrom:["author"],context:null,unsupported:!1},treeitem:{type:"widget",attributes:{allowed:["aria-checked","aria-selected","aria-expanded","aria-level","aria-posinset","aria-setsize","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["group","tree"],unsupported:!1,allowedElements:["li",{nodeName:"a",attributes:{href:FD}}]},widget:{type:"abstract",unsupported:!1},window:{nameFrom:["author"],type:"abstract",unsupported:!1}},wD.implicitHtmlRole=_u,wD.elementsAllowedNoRole=[{nodeName:["base","body","caption","col","colgroup","datalist","dd","details","dt","head","html","keygen","label","legend","main","map","math","meta","meter","noscript","optgroup","param","picture","progress","script","source","style","template","textarea","title","track"]},{nodeName:"area",attributes:{href:FD}},{nodeName:"input",properties:{type:["color","data","datatime","file","hidden","month","number","password","range","reset","submit","time","week"]}},{nodeName:"link",attributes:{href:FD}},{nodeName:"menu",attributes:{type:"context"}},{nodeName:"menuitem",attributes:{type:["command","checkbox","radio"]}},{nodeName:"select",condition:function(e){return e instanceof i.AbstractVirtualNode||(e=i.utils.getNodeFromTree(e)),Number(e.attr("size"))>1},properties:{multiple:!0}},{nodeName:["clippath","cursor","defs","desc","feblend","fecolormatrix","fecomponenttransfer","fecomposite","feconvolvematrix","fediffuselighting","fedisplacementmap","fedistantlight","fedropshadow","feflood","fefunca","fefuncb","fefuncg","fefuncr","fegaussianblur","feimage","femerge","femergenode","femorphology","feoffset","fepointlight","fespecularlighting","fespotlight","fetile","feturbulence","filter","hatch","hatchpath","lineargradient","marker","mask","meshgradient","meshpatch","meshrow","metadata","mpath","pattern","radialgradient","solidcolor","stop","switch","view"]}],wD.elementsAllowedAnyRole=[{nodeName:"a",attributes:{href:bD}},{nodeName:"img",attributes:{alt:bD}},{nodeName:["abbr","address","canvas","div","p","pre","blockquote","ins","del","output","span","table","tbody","thead","tfoot","td","em","strong","small","s","cite","q","dfn","abbr","time","code","var","samp","kbd","sub","sup","i","b","u","mark","ruby","rt","rp","bdi","bdo","br","wbr","th","tr"]}],wD.evaluateRoleForElement={A:function(e){var t=e.node,n=e.out
return"http://www.w3.org/2000/svg"===t.namespaceURI||!t.href.length||n},AREA:function(e){return!e.node.href},BUTTON:function(e){var t=e.node,n=e.role,r=e.out
return"menu"===t.getAttribute("type")?"menuitem"===n:r},IMG:function(e){var t=e.node,n=e.role,r=e.out
switch(t.alt){case null:return r
case"":return"presentation"===n||"none"===n
default:return"presentation"!==n&&"none"!==n}},INPUT:function(e){var t=e.node,n=e.role,r=e.out
switch(t.type){case"button":case"image":return r
case"checkbox":return!("button"!==n||!t.hasAttribute("aria-pressed"))||r
case"radio":return"menuitemradio"===n
case"text":return"combobox"===n||"searchbox"===n||"spinbutton"===n
case"tel":return"combobox"===n||"spinbutton"===n
case"url":case"search":case"email":return"combobox"===n
default:return!1}},LI:function(e){var t=e.node,n=e.out
return!i.utils.matchesSelector(t,"ol li, ul li")||n},MENU:function(e){return"context"!==e.node.getAttribute("type")},OPTION:function(e){var t=e.node
return!i.utils.matchesSelector(t,"select > option, datalist > option, optgroup > option")},SELECT:function(e){var t=e.node,n=e.role
return!t.multiple&&t.size<=1&&"menu"===n},SVG:function(e){var t=e.node,n=e.out
return!(!t.parentNode||"http://www.w3.org/2000/svg"!==t.parentNode.namespaceURI)||n}},wD.rolesOfType={widget:["button","checkbox","dialog","gridcell","link","log","marquee","menuitem","menuitemcheckbox","menuitemradio","option","progressbar","radio","scrollbar","searchbox","slider","spinbutton","status","switch","tab","tabpanel","textbox","timer","tooltip","tree","treeitem"]}
var ED=wD,CD=function(e){var t=null,n=ED.role[e]
return n&&n.implicit&&(t=ga(n.implicit)),t},xD=function(e){return!!dD(e).length}
function AD(e){var t,n=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).popupRoles,r=es(e)
if(null!==(t=n)&&void 0!==t||(n=mu["aria-haspopup"].values),!n.includes(r))return!1
var a=function(e){for(;e=e.parent;)if(null!==es(e,{noPresentational:!0}))return e
return null}(e)
if(kD(a))return!0
var o=e.props.id
if(!o)return!1
if(!e.actualNode)throw new Error("Unable to determine combobox popup without an actualNode")
var i=jo(e.actualNode).querySelectorAll('[aria-owns~="'.concat(o,'"][role~="combobox"]:not(select),\n     [aria-controls~="').concat(o,'"][role~="combobox"]:not(select)'))
return Array.from(i).some(kD)}var kD=function(e){return e&&"combobox"===es(e)},TD=function(e){return e=pa(e),Ps(e)},ND=function(e){var t=yu.ariaRoles[e]
return t&&Array.isArray(t.requiredAttrs)?L(t.requiredAttrs):[]},RD=function(e){var t=yu.ariaRoles[e]
return t&&Array.isArray(t.requiredContext)?L(t.requiredContext):null},BD=function(e){var t=yu.ariaRoles[e]
return t&&Array.isArray(t.requiredOwned)?L(t.requiredOwned):null},SD=function(e,t){var n,r,a=(e=e instanceof vr?e:pa(e)).attr(t),o=yu.ariaAttrs[t]
if(!o)return!0
if(o.allowEmpty&&(!a||""===a.trim()))return!0
switch(o.type){case"boolean":return["true","false"].includes(a.toLowerCase())
case"nmtoken":return"string"==typeof a&&o.values.includes(a.toLowerCase())
case"nmtokens":return(r=ih(a)).reduce((function(e,t){return e&&o.values.includes(t)}),0!==r.length)
case"idref":try{var i=Io(e.actualNode)
return!(!a||!i.getElementById(a))}catch(e){throw new TypeError("Cannot resolve id references for partial DOM")}case"idrefs":return du(e,t).some((function(e){return!!e}))
case"string":return""!==a.trim()
case"decimal":return!(!(n=a.match(/^[-+]?([0-9]*)\.?([0-9]*)$/))||!n[1]&&!n[2])
case"int":var u=void 0!==o.minValue?o.minValue:-1/0
return/^[-+]?[0-9]+$/.test(a)&&parseInt(a)>=u}},_D=function(e){return!!yu.ariaAttrs[e]}
function OD(e){return"caption"===e.props.nodeName}var MD={}
se(MD,{getAriaRolesByType:function(){return DD},getAriaRolesSupportingNameFromContent:function(){return vD},getElementSpec:function(){return Ku},getElementsByContentType:function(){return Eu},getGlobalAriaAttrs:function(){return Cu},implicitHtmlRoles:function(){return _u}})
var jD=["alert","log","status"]
function ID(e,t){var n=e.actualNode
if("button"===es(e)||function(e,t){var n=e.actualNode,r=es(e),a=(n.getAttribute("aria-live")||"").toLowerCase().trim(),o=DD("landmark")
return!!(["assertive","polite"].includes(a)||jD.includes(r)||o.includes(r)||t.regionMatcher&&Gu(e,t.regionMatcher))}(e,t)||["iframe","frame"].includes(e.props.nodeName)||zf(e.actualNode)&&Zi(e.actualNode,"href")||!is(n)){for(var r=e;r;)r._hasRegionDescendant=!0,r=r.parent
return["iframe","frame"].includes(e.props.nodeName)?[e]:[]}return n!==a.body&&Zs(n,!0)?[e]:e.children.filter((function(e){return 1===e.actualNode.nodeType})).map((function(e){return ID(e,t)})).reduce((function(e,t){return e.concat(t)}),[])}function PD(e){switch(e){case"lighter":return 100
case"normal":return 400
case"bold":return 700
case"bolder":return 900}return e=parseInt(e),isNaN(e)?400:e}function qD(e){var t=n.getComputedStyle(function(e){for(var t=e,n=e.textContent.trim(),r=n;r===n&&void 0!==t;){var a=-1
if(0===(e=t).children.length)return e
do{a++,r=e.children[a].textContent.trim()}while(""===r&&a+1<e.children.length)
t=e.children[a]}return e}(e))
return{fontWeight:PD(t.getPropertyValue("font-weight")),fontSize:parseInt(t.getPropertyValue("font-size")),isItalic:"italic"===t.getPropertyValue("font-style")}}function LD(e,t,n){return n.reduce((function(n,r){return n||(!r.size||e.fontSize/r.size>t.fontSize)&&(!r.weight||e.fontWeight-r.weight>t.fontWeight)&&(!r.italic||e.isItalic&&!t.isItalic)}),!1)}var HD=/[;,\s]/,zD=/^[0-9.]+$/,$D={}
se($D,{aria:function(){return uD},color:function(){return VD},dom:function(){return Mo},forms:function(){return wg},matches:function(){return Gu},math:function(){return gi},standards:function(){return MD},table:function(){return Zm},text:function(){return cu},utils:function(){return yr}})
var VD={}
se(VD,{Color:function(){return Pf},centerPointOfRect:function(){return UD},elementHasImage:function(){return Dl},elementIsDistinct:function(){return GD},filteredRectStack:function(){return YD},flattenColors:function(){return ZD},flattenShadowColors:function(){return eg},getBackgroundColor:function(){return mg},getBackgroundStack:function(){return tg},getContrast:function(){return vg},getForegroundColor:function(){return yg},getOwnBackgroundColor:function(){return Lf},getRectStack:function(){return KD},getStackingContext:function(){return cg},getStrokeColorsFromShadows:function(){return og},getTextShadowColors:function(){return sg},hasValidContrastRatio:function(){return Fg},incompleteData:function(){return ml},parseTextShadows:function(){return ug},stackingContextToColor:function(){return dg}})
var UD=function(e){if(!(e.left>n.innerWidth||e.top>n.innerHeight))return{x:Math.min(Math.ceil(e.left+e.width/2),n.innerWidth-1),y:Math.min(Math.ceil(e.top+e.height/2),n.innerHeight-1)}}
function WD(e){return e.getPropertyValue("font-family").split(/[,;]/g).map((function(e){return e.trim().toLowerCase()}))}var GD=function(e,t){var r=n.getComputedStyle(e)
if("none"!==r.getPropertyValue("background-image"))return!0
if(["border-bottom","border-top","outline"].reduce((function(e,t){var n=new Pf
return n.parseString(r.getPropertyValue(t+"-color")),e||"none"!==r.getPropertyValue(t+"-style")&&parseFloat(r.getPropertyValue(t+"-width"))>0&&0!==n.alpha}),!1))return!0
var a=n.getComputedStyle(t)
if(WD(r)[0]!==WD(a)[0])return!0
var o=["text-decoration-line","text-decoration-style","font-weight","font-style","font-size"].reduce((function(e,t){return e||r.getPropertyValue(t)!==a.getPropertyValue(t)}),!1),i=r.getPropertyValue("text-decoration")
return i.split(" ").length<3&&(o=o||i!==a.getPropertyValue("text-decoration")),o},KD=function(e){var t=ru(e),n=Ws(e)
return!n||n.length<=1?[t]:n.some((function(e){return void 0===e}))?null:(n.splice(0,0,t),n)},YD=function(e){var t=KD(e)
if(t&&1===t.length)return t[0]
if(t&&t.length>1){var n,r=t.shift()
return t.forEach((function(a,o){if(0!==o){var i=t[o-1],u=t[o]
n=i.every((function(e,t){return e===u[t]}))||r.includes(e)}})),n?t[0]:(ml.set("bgColor","elmPartiallyObscuring"),null)}return ml.set("bgColor","outsideViewport"),null},QD=["hue","saturation","color","luminosity"],XD={normal:function(e,t){return t},multiply:function(e,t){return t*e},screen:function(e,t){return e+t-e*t},overlay:function(e,t){return this["hard-light"](t,e)},darken:function(e,t){return Math.min(e,t)},lighten:function(e,t){return Math.max(e,t)},"color-dodge":function(e,t){return 0===e?0:1===t?1:Math.min(1,e/(1-t))},"color-burn":function(e,t){return 1===e?1:0===t?0:1-Math.min(1,(1-e)/t)},"hard-light":function(e,t){return t<=.5?this.multiply(e,2*t):this.screen(e,2*t-1)},"soft-light":function(e,t){return t<=.5?e-(1-2*t)*e*(1-e):e+(2*t-1)*((e<=.25?((16*e-12)*e+4)*e:Math.sqrt(e))-e)},difference:function(e,t){return Math.abs(e-t)},exclusion:function(e,t){return e+t-2*e*t},hue:function(e,t){return t.setSaturation(e.getSaturation()).setLuminosity(e.getLuminosity())},saturation:function(e,t){return e.setSaturation(t.getSaturation()).setLuminosity(e.getLuminosity())},color:function(e,t){return t.setLuminosity(e.getLuminosity())},luminosity:function(e,t){return e.setLuminosity(t.getLuminosity())}}
function ZD(e,t){var n,r=function(e,t,n){if(QD.includes(n))return XD[n](e,t)
var r=new Pf
return["r","g","b"].forEach((function(a){r[a]=XD[n](e[a],t[a])})),r}(t,e,arguments.length>2&&void 0!==arguments[2]?arguments[2]:"normal"),a=JD(e.red,e.alpha,t.red,t.alpha,255*r.r),o=JD(e.green,e.alpha,t.green,t.alpha,255*r.g),i=JD(e.blue,e.alpha,t.blue,t.alpha,255*r.b),u=(n=e.alpha+t.alpha*(1-e.alpha),Math.min(Math.max(0,n),1))
if(0===u)return new Pf(a,o,i,u)
var s=Math.round(a/u),l=Math.round(o/u),c=Math.round(i/u)
return new Pf(s,l,c,u)}function JD(e,t,n,r,a){return t*(1-r)*e+t*r*a+(1-t)*r*n}function eg(e,t){var n=e.alpha,r=(1-n)*t.red+n*e.red,a=(1-n)*t.green+n*e.green,o=(1-n)*t.blue+n*e.blue,i=e.alpha+t.alpha*(1-e.alpha)
return new Pf(r,a,o,i)}function tg(e){for(var t=Ws(e).map((function(t){return function(e){var t=e.indexOf(a.body),r=e,o=Lf(n.getComputedStyle(a.documentElement))
if(t>1&&0===o.alpha&&!Dl(a.documentElement)){t>1&&(r.splice(t,1),r.push(a.body))
var i=r.indexOf(a.documentElement)
i>0&&(r.splice(i,1),r.push(a.documentElement))}return r}(t=Gf(t,e))})),r=0;r<t.length;r++){var o=t[r]
if(o[0]!==e)return ml.set("bgColor","bgOverlap"),null
if(0!==r&&!ng(o,t[0]))return ml.set("bgColor","elmPartiallyObscuring"),null}return t[0]||null}function ng(e,t){if(e===t)return!0
if(null===e||null===t)return!1
if(e.length!==t.length)return!1
for(var n=0;n<e.length;++n)if(e[n]!==t[n])return!1
return!0}var rg=.5,ag=["top","right","bottom","left"]
function og(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).ignoreEdgeCount,n=void 0!==t&&t,r=function(e){var t,n={},r=Q(e)
try{for(r.s();!(t=r.n()).done;){var a,o=t.value,i=o.colorStr,u=o.pixels
null!==(a=n[i])&&void 0!==a||(n[i]={top:[],right:[],bottom:[],left:[]})
var s=n[i],l=$(u,2),c=l[0],d=l[1]
c>rg?s.right.push(c):-c>rg&&s.left.push(-c),d>rg?s.bottom.push(d):-d>rg&&s.top.push(-d)}}catch(e){r.e(e)}finally{r.f()}return n}(e),a=Object.entries(r).map((function(e){var t=$(e,2),n=t[0],r=t[1],a=ag.filter((function(e){return 0!==r[e].length})).length
return{colorStr:n,sides:r,edgeCount:a}}))
return!n&&a.some((function(e){var t=e.edgeCount
return t>1&&t<4}))?null:a.map(ig).filter((function(e){return null!==e}))}function ig(e){var t=e.colorStr,n=e.sides
if(4!==e.edgeCount)return null
var r=new Pf
r.parseString(t)
var a=0,o=!0
return ag.forEach((function(e){a+=n[e].length/4,o&&(o=n[e].every((function(e){return e>1.5})))})),o||(r.alpha=1-Math.pow(.54,a)),r}function ug(e){var t={pixels:[]},n=e.trim(),r=[t]
if(!n)return[]
for(;n;){var a=n.match(/^[a-z]+(\([^)]+\))?/i)||n.match(/^#[0-9a-f]+/i),o=n.match(/^([0-9.-]+)px/i)||n.match(/^(0)/)
if(a)Sr(!t.colorStr,"Multiple colors identified in text-shadow: ".concat(e)),n=n.replace(a[0],"").trim(),t.colorStr=a[0]
else if(o){Sr(t.pixels.length<3,"Too many pixel units in text-shadow: ".concat(e)),n=n.replace(o[0],"").trim()
var i=parseFloat(("."===o[1][0]?"0":"")+o[1])
t.pixels.push(i)}else{if(","!==n[0])throw new Error("Unable to process text-shadows: ".concat(n))
Sr(t.pixels.length>=2,"Missing pixel value in text-shadow: ".concat(e)),t={pixels:[]},r.push(t),n=n.substr(1).trim()}}return r.forEach((function(e){var t=e.pixels
2===t.length&&t.push(0)})),r}function sg(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.minRatio,a=t.maxRatio,o=t.ignoreEdgeCount,i=[],u=n.getComputedStyle(e),s=u.getPropertyValue("text-shadow")
if("none"===s)return i
var l=u.getPropertyValue("font-size"),c=parseInt(l)
Sr(!1===isNaN(c),"Unable to determine font-size value ".concat(l))
var d,p=[],f=Q(ug(s))
try{for(f.s();!(d=f.n()).done;){var h=d.value,m=h.colorStr||u.getPropertyValue("color"),D=$(h.pixels,3),g=D[0],v=D[1],y=D[2],b=void 0===y?0:y
if(!(a&&b>=c*a))if(r&&b<c*r)p.push({colorStr:m,pixels:h.pixels})
else{if(p.length>0){var F=og(p,{ignoreEdgeCount:o})
if(null===F)return null
i.push.apply(i,L(F)),p.splice(0,p.length)}var w=lg({colorStr:m,offsetX:g,offsetY:v,blurRadius:b,fontSize:c})
i.push(w)}}}catch(e){f.e(e)}finally{f.f()}if(p.length>0){var E=og(p,{ignoreEdgeCount:o})
if(null===E)return null
i.push.apply(i,L(E))}return i}function lg(e){var t=e.colorStr,n=e.offsetX,r=e.offsetY,a=e.blurRadius,o=e.fontSize
if(n>a||r>a)return new Pf(0,0,0,0)
var i=new Pf
return i.parseString(t),i.alpha*=function(e,t){return 0===e?1:.185/(e/t+.4)}(a,o),i}function cg(e,t){var n,r=pa(e)
if(r._stackingContext)return r._stackingContext
var a=[],o=new Map
return(t=null!==(n=t)&&void 0!==n?n:tg(e)).forEach((function(e){var t,n=pa(e),r=function(e){var t=new Pf
return t.parseString(e.getComputedStylePropertyValue("background-color")),t}(n),i=n._stackingOrder.filter((function(e){return!!e.vNode}))
i.forEach((function(e,t){var n,r=e.vNode,u=null===(n=i[t-1])||void 0===n?void 0:n.vNode,s=hg(o,r,u)
0!==t||o.get(r)||a.unshift(s),o.set(r,s)}))
var u=null===(t=i[i.length-1])||void 0===t?void 0:t.vNode,s=hg(o,n,u)
i.length||a.unshift(s),s.bgColor=r})),r._stackingContext=a,a}function dg(e){var t
if(null===(t=e.descendants)||void 0===t||!t.length){var n=e.bgColor
return n.alpha*=e.opacity,{color:n,blendMode:e.blendMode}}var r=ZD(e.descendants.reduce(pg,fg()),e.bgColor,e.descendants[0].blendMode)
return r.alpha*=e.opacity,{color:r,blendMode:e.blendMode}}function pg(e,t){var n
return n=e instanceof Pf?e:dg(e).color,ZD(dg(t).color,n,t.blendMode)}function fg(e,t){var n,r
return{vNode:e,ancestor:t,opacity:parseFloat(null!==(n=null==e?void 0:e.getComputedStylePropertyValue("opacity"))&&void 0!==n?n:1),bgColor:new Pf(0,0,0,0),blendMode:(r=null==e?void 0:e.getComputedStylePropertyValue("mix-blend-mode"),r||void 0),descendants:[]}}function hg(e,t,n){var r,a=e.get(n),o=null!==(r=e.get(t))&&void 0!==r?r:fg(t,a)
return a&&n!==t&&!a.descendants.includes(o)&&a.descendants.unshift(o),o}function mg(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.1,o=pa(e),i=o._cache.getBackgroundColor
if(i)return t.push.apply(t,L(i.bgElms)),ml.set("bgColor",i.incompleteData),i.bgColor
var u=function(e,t,r){var o,i,u=tg(e)
if(!u)return null
var s=Vs(e),l=null!==(o=sg(e,{minRatio:r,ignoreEdgeCount:!0}))&&void 0!==o?o:[]
l.length&&(l=[{color:l.reduce(eg)}])
for(var c=0;c<u.length;c++){var d=u[c],p=n.getComputedStyle(d)
if(Dl(d,p))return t.push(d),null
var f=Lf(p)
if(0!==f.alpha){if("inline"!==p.getPropertyValue("display")&&!Dg(d,s))return t.push(d),ml.set("bgColor","elmPartiallyObscured"),null
if(t.push(d),1===f.alpha)break}}l=cg(e,u).map(dg).concat(l)
var h=function(e,t){var r=[]
if(!t){var o=a.documentElement,i=a.body,u=n.getComputedStyle(o),s=n.getComputedStyle(i),l=Lf(u),c=Lf(s),d=0!==c.alpha&&Dg(i,e.getBoundingClientRect());(0!==c.alpha&&0===l.alpha||d&&1!==c.alpha)&&r.unshift({color:c,blendMode:gg(s.getPropertyValue("mix-blend-mode"))}),0!==l.alpha&&(!d||d&&1!==c.alpha)&&r.unshift({color:l,blendMode:gg(u.getPropertyValue("mix-blend-mode"))})}return r}(e,u.includes(a.body))
if((i=l).unshift.apply(i,L(h)),0===l.length)return new Pf(255,255,255,1)
var m=l.reduce((function(e,t){return ZD(t.color,e.color instanceof Pf?e.color:e,t.blendMode)}))
return ZD(m.color instanceof Pf?m.color:m,new Pf(255,255,255,1))}(e,t,r)
return o._cache.getBackgroundColor={bgColor:u,bgElms:t,incompleteData:ml.get("bgColor")},u}function Dg(e,t){t=Array.isArray(t)?t:[t]
var r=e.getBoundingClientRect(),a=r.right,o=r.bottom,i=n.getComputedStyle(e).getPropertyValue("overflow")
return(["scroll","auto"].includes(i)||e instanceof n.HTMLHtmlElement)&&(a=r.left+e.scrollWidth,o=r.top+e.scrollHeight),t.every((function(e){return e.top>=r.top&&e.bottom<=o&&e.left>=r.left&&e.right<=a}))}function gg(e){return e||void 0}var vg=function(e,t){if(!t||!e)return null
t.alpha<1&&(t=ZD(t,e))
var n=e.getRelativeLuminance(),r=t.getRelativeLuminance()
return(Math.max(r,n)+.05)/(Math.min(r,n)+.05)}
function yg(e,t,r){for(var a,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=n.getComputedStyle(e),u=[function(){return function(e,t){var n=t.textStrokeEmMin,r=void 0===n?0:n,a=parseFloat(e.getPropertyValue("-webkit-text-stroke-width"))
if(0===a)return null
var o=e.getPropertyValue("font-size"),i=a/parseFloat(o)
if(isNaN(i)||i<r)return null
var u=e.getPropertyValue("-webkit-text-stroke-color")
return(new Pf).parseString(u)}(i,o)},function(){return function(e){return(new Pf).parseString(e.getPropertyValue("-webkit-text-fill-color")||e.getPropertyValue("color"))}(i)},function(){return sg(e,{minRatio:0})}],s=[],l=0,c=u;l<c.length;l++){var d=(0,c[l])()
if(d&&(s=s.concat(d),1===d.alpha))break}var p=s.reduce((function(e,t){return ZD(e,t)}))
if(null!==(a=r)&&void 0!==a||(r=mg(e,[])),null===r){var f=ml.get("bgColor")
return ml.set("fgColor",f),null}var h=cg(e)
return ZD(function(e,t,n){for(;t;){var r
if(1===t.opacity&&t.ancestor)t=t.ancestor
else{e.alpha*=t.opacity
var a=(null===(r=t.ancestor)||void 0===r?void 0:r.descendants)||n
1!==t.opacity&&(a=a.slice(0,a.indexOf(t)))
var o=a.map(dg)
if(o.length){var i=o.reduce((function(e,t){return ZD(t.color,e.color instanceof Pf?e.color:e)}),{color:new Pf(0,0,0,0),blendMode:"normal"})
e=ZD(e,i),t=t.ancestor}else t=t.ancestor}}return e}(p,bg(h,e),h),new Pf(255,255,255,1))}function bg(e,t){var n,r=Q(e)
try{for(r.s();!(n=r.n()).done;){var a,o=n.value
if((null===(a=o.vNode)||void 0===a?void 0:a.actualNode)===t)return o
var i=bg(o.descendants,t)
if(i)return i}}catch(e){r.e(e)}finally{r.f()}}var Fg=function(e,t,n,r){var a=vg(e,t),o=r&&Math.ceil(72*n)/96<14||!r&&Math.ceil(72*n)/96<18?4.5:3
return{isValid:a>o,contrastRatio:a,expectedContrastRatio:o}},wg={}
se(wg,{isAriaCombobox:function(){return hs},isAriaListbox:function(){return fs},isAriaRange:function(){return Ds},isAriaTextbox:function(){return ps},isDisabled:function(){return Cg},isNativeSelect:function(){return ds},isNativeTextbox:function(){return cs}})
var Eg=["fieldset","button","select","input","textarea"],Cg=function e(t){var n=t._isDisabled
if("boolean"==typeof n)return n
var r=t.props.nodeName,a=t.attr("aria-disabled")
return n=!(!Eg.includes(r)||!t.hasAttr("disabled"))||(a?"true"===a.toLowerCase():!!t.parent&&e(t.parent)),t._isDisabled=n,n}
function xg(e,t){if(!e||!t)return!1
var n=Object.getOwnPropertyNames(e),r=Object.getOwnPropertyNames(t)
return n.length===r.length&&n.every((function(n){var r=e[n],a=t[n]
return o(r)===o(a)&&("object"===o(r)||"object"===o(a)?xg(r,a):r===a)}))}function Ag(e){var t=es(e),n=t&&t.includes("heading"),r=e.attr("aria-level"),a=parseInt(r,10),o=$(e.props.nodeName.match(/h(\d)/)||[],2)[1]
return n?o&&!r?parseInt(o,10):isNaN(a)||a<1?o?parseInt(o,10):2:a||-1:-1}function kg(e,t){var n,r=null===(n=t.data)||void 0===n?void 0:n.headingOrder,a=Ng(t.node.ancestry,1)
if(!r)return e
var o=r.map((function(e){return function(e,t){return z({},e,{ancestry:t.concat(e.ancestry)})}(e,a)})),i=function(e,t){for(;t.length;){var n=Tg(e,t)
if(-1!==n)return n
t=Ng(t,1)}return-1}(e,a)
return-1===i?e.push.apply(e,L(o)):e.splice.apply(e,[i,0].concat(L(o))),e}function Tg(e,t){return e.findIndex((function(e){return om(e.ancestry,t)}))}function Ng(e,t){return e.slice(0,e.length-t)}function Rg(e,t){var n=e.boundingClientRect,r=t.boundingClientRect
return n.top>=r.top&&n.left>=r.left&&n.bottom<=r.bottom&&n.right<=r.right}function Bg(e){return e.getComputedStylePropertyValue("pointer-events")}function Sg(e){return{width:Math.round(10*e.width)/10,height:Math.round(10*e.height)/10}}function _g(e,t){return e.actualNode.contains(t.actualNode)&&!uu(t)}function Og(e){return e.map((function(e){return e.actualNode}))}function Mg(e,t,n){var r=n.validRoles,a=void 0===r?[]:r,o=n.validNodeNames,i=void 0===o?[]:o,u=e.props,s=u.nodeName,l=u.nodeType,c=u.nodeValue,d=t?"div > ":""
if(3===l&&""!==c.trim())return d+"#text"
if(1!==l||!is(e))return!1
var p=wu(e)
return p?!a.includes(p)&&d+"[role=".concat(p,"]"):!i.includes(s)&&d+s}function jg(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
return e.map((function(e){return{vChild:e,nested:t}}))}function Ig(e){return""!==(e||"").trim()}function Pg(e,t){var n=qg(t),r=qg(e)
return!(!n||!r)&&n.includes(r)}function qg(e){var t=Os(e,{emoji:!0,nonBmp:!0,punctuations:!0})
return Ru(t)}function Lg(e){if(!e.children){if(1===e.props.nodeType)throw new Error("Cannot determine children")
return[]}var t=[]
return e.children.forEach((function(e){"widget"===ol(e)&&iu(e)?t.push(e):t.push.apply(t,L(Lg(e)))})),t}function Hg(e){var t=parseInt(e.attr("tabindex"),10)
return!isNaN(t)&&t<0}function zg(e){if(uu(e))return!0
if(!e.children){if(1===e.props.nodeType)throw new Error("Cannot determine children")
return!1}return e.children.some((function(e){return zg(e)}))}var $g=["block","list-item","table","flex","grid","inline-block"]
function Vg(e){var t=n.getComputedStyle(e).getPropertyValue("display")
return-1!==$g.indexOf(t)||"table-"===t.substr(0,6)}function Ug(e,t){var n=e.getRelativeLuminance(),r=t.getRelativeLuminance()
return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}var Wg=["block","list-item","table","flex","grid","inline-block"]
function Gg(e){var t=n.getComputedStyle(e).getPropertyValue("display")
return-1!==Wg.indexOf(t)||"table-"===t.substr(0,6)}var Kg=zr((function(e,t){var r=n.getComputedStyle(e,t),a=function(e,t){return r.getPropertyValue(e)===t}
if(a("content","none")||a("display","none")||a("visibility","hidden")||!1===a("position","absolute"))return 0
if(0===Lf(r).alpha&&a("background-image","none"))return 0
var o=Yg(r.getPropertyValue("width")),i=Yg(r.getPropertyValue("height"))
return"px"!==o.unit||"px"!==i.unit?0===o.value||0===i.value?0:1/0:o.value*i.value}))
function Yg(e){var t=$(e.match(/^([0-9.]+)([a-z]+)$/i)||[],3),n=t[1],r=void 0===n?"":n,a=t[2],o=void 0===a?"":a
return{value:parseFloat(r),unit:o.toLowerCase()}}var Qg={ARTICLE:!0,ASIDE:!0,NAV:!0,SECTION:!0},Xg={application:!0,article:!0,banner:!1,complementary:!0,contentinfo:!0,form:!0,main:!0,navigation:!0,region:!0,search:!1}
function Zg(e,t,n,r){var a=wu(e)
if(n||(n=RD(a)),!n)return null
for(var o=n.includes("group"),i=r?e:e.parent;i;){var u=es(i,{noPresentational:!0})
if(u){if("group"!==u||!o)return n.includes(u)?null:n
t.includes(a)&&n.push(a),n=n.filter((function(e){return"group"!==e})),i=i.parent}else i=i.parent}return n}function Jg(e){var t=e.vNode
return 3===t.props.nodeType?t.props.nodeValue.trim().length>0:Xs(t,!1,!0)}function ev(e){var t,n,r=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).invalidTableRowAttrs,a=arguments.length>2?arguments[2]:void 0,o=null!==(t=null==r||null===(n=r.filter)||void 0===n?void 0:n.call(r,(function(e){return a.hasAttr(e)})))&&void 0!==t?t:[]
if(0===o.length)return!0
var i=function(e){if(e.parent)return _a(e,'table:not([role]), [role~="treegrid"], [role~="table"], [role~="grid"]')}(a),u=i&&es(i)
if(!u||"treegrid"===u)return!0
var s="row".concat(o.length>1?"Plural":"Singular")
return this.data({messageKey:s,invalidAttrs:o,ownerRole:u}),!1}function tv(e,t,n){var r,a=n.props,o=a.nodeName,i=a.type,u=(r=n.attr("aria-checked"))?(r=r.toLowerCase(),["mixed","true"].includes(r)?r:"false"):""
if("input"!==o||"checkbox"!==i||!u)return!0
var s,l=(s=n).props.indeterminate?"mixed":s.props.checked?"true":"false"
return u===l||(this.data({messageKey:"checkbox",checkState:l}),!1)}var nv={row:ev,checkbox:tv},rv=function(e,t){try{return"svg"===t.props.nodeName||!!_a(t,"svg")}catch(e){return!1}},av=[function(e,t){return ov(t)},function(e,t){return function(e){return"area"!==e.props.nodeName}(t)},function(e,t){return!rv(0,t)},function(e,t){return iu(t)},function(e,t){return uu(t)||!iv(t)},function(e){return!ll(e,{noLengthCompare:!0})}]
function ov(e){return"widget"===ol(e)}var iv=zr((function e(t){return!(null==t||!t.parent)&&(!(!ov(t.parent)||!uu(t.parent))||e(t.parent))})),uv=function(e,t){var n=wu(t)
return!(n&&!["none","presentation"].includes(n)&&!(Du[n]||{}).accessibleNameRequired&&!iu(t))}
function sv(e){var t
if(null==e||null===(t=e.ownerDocument)||void 0===t||!t.createRange)return!0
var n=e.ownerDocument.createRange()
return n.setStart(e,0),n.setEnd(e,e.childNodes.length),0===n.getClientRects().length}var lv=["article","aside","main","nav","section"].join(","),cv=function(e,t,n){return n.initiator},dv={emoji:!0,nonBmp:!1,punctuations:!0}
function pv(e){return!e||"true"!==e.getAttribute("aria-hidden")&&pv(ui(e))}var fv={"abstractrole-evaluate":function(e,t,n){var r=ih(n.attr("role")).filter((function(e){return"abstract"===ol(e)}))
return r.length>0&&(this.data(r),!0)},"accesskeys-after":function(e){var t={}
return e.filter((function(e){if(!e.data)return!1
var n=e.data.toUpperCase()
return t[n]?(t[n].relatedNodes.push(e.relatedNodes[0]),!1):(t[n]=e,e.relatedNodes=[],!0)})).map((function(e){return e.result=!!e.relatedNodes.length,e}))},"accesskeys-evaluate":function(e,t,n){return ai(n)||(this.data(n.attr("accesskey")),this.relatedNodes([e])),!0},"alt-space-value-evaluate":function(e,t,n){var r=n.attr("alt")
return"string"==typeof r&&/^\s+$/.test(r)},"aria-allowed-attr-evaluate":function(e,t,n){var r=[],a=es(n),o=sD(a)
Array.isArray(t[a])&&(o=hm(t[a].concat(o)))
var i,u=Q(n.attrNames)
try{for(u.s();!(i=u.n()).done;){var s=i.value
_D(s)&&!o.includes(s)&&r.push(s)}}catch(e){u.e(e)}finally{u.f()}return!r.length||(this.data(r.map((function(e){return e+'="'+n.attr(e)+'"'}))),!(a||nm(n)||iu(n))&&void 0)},"aria-allowed-attr-matches":function(e,t){var n=/^aria-/,r=t.attrNames
if(r.length)for(var a=0,o=r.length;a<o;a++)if(n.test(r[a]))return!0
return!1},"aria-allowed-role-evaluate":function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=t.allowImplicit,a=void 0===r||r,o=t.ignoredTags,i=void 0===o?[]:o,u=n.props.nodeName
if(i.map((function(e){return e.toLowerCase()})).includes(u))return!0
var s=mD(n,a)
if(s.length){if(this.data(s),!is(n))return
return!1}return!0},"aria-allowed-role-matches":function(e,t){return null!==wu(t,{dpub:!0,fallback:!0})},"aria-busy-evaluate":function(e,t,n){return"true"===n.attr("aria-busy")},"aria-conditional-attr-evaluate":function(e,t,n){var r=es(n)
return!nv[r]||nv[r].call(this,e,t,n)},"aria-conditional-checkbox-attr-evaluate":tv,"aria-conditional-row-attr-evaluate":ev,"aria-errormessage-evaluate":function(e,t,n){t=Array.isArray(t)?t:[]
var r=n.attr("aria-errormessage"),a=n.hasAttr("aria-errormessage"),o=n.attr("aria-invalid")
return!n.hasAttr("aria-invalid")||"false"===o||-1!==t.indexOf(r)||!a||(this.data(ih(r)),function(e){if(""===e.trim())return yu.ariaAttrs["aria-errormessage"].allowEmpty
var t
try{t=e&&du(n,"aria-errormessage")[0]}catch(t){return void this.data({messageKey:"idrefs",values:ih(e)})}return t?is(t)?"alert"===t.getAttribute("role")||"assertive"===t.getAttribute("aria-live")||"polite"===t.getAttribute("aria-live")||ih(n.attr("aria-describedby")).indexOf(e)>-1:(this.data({messageKey:"hidden",values:ih(e)}),!1):void 0}.call(this,r))},"aria-has-attr-matches":function(e,t){var n=/^aria-/
return t.attrNames.some((function(e){return n.test(e)}))},"aria-hidden-body-evaluate":function(e,t,n){return"true"!==n.attr("aria-hidden")},"aria-hidden-focus-matches":function(e){return pv(ui(e))},"aria-label-evaluate":function(e,t,n){return!!Ru(hu(n))},"aria-labelledby-evaluate":function(e,t,n){try{return!!Ru(fu(n))}catch(e){return}},"aria-level-evaluate":function(e,t,n){var r=n.attr("aria-level")
if(!(parseInt(r,10)>6))return!0},"aria-prohibited-attr-evaluate":function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=(null==t?void 0:t.elementsAllowedAriaLabel)||[],a=n.props.nodeName,o=es(n,{chromium:!0}),i=function(e,t,n){var r=yu.ariaRoles[e]
return r?r.prohibitedAttrs||[]:e||n.includes(t)?[]:["aria-label","aria-labelledby"]}(o,a,r).filter((function(e){return!!n.attrNames.includes(e)&&""!==Ru(n.attr(e))}))
if(0===i.length)return!1
var u=n.hasAttr("role")?"hasRole":"noRole"
u+=i.length>1?"Plural":"Singular",this.data({role:o,nodeName:a,messageKey:u,prohibited:i})
var s=ws(n,{subtreeDescendant:!0})
return""===Ru(s)||void 0},"aria-required-attr-evaluate":function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=wu(n),a=n.attrNames,o=ND(r)
if(Array.isArray(t[r])&&(o=hm(t[r],o)),!r||!a.length||!o.length)return!0
if(function(e,t){return"separator"===t&&!iu(e)}(n,r)||function(e,t){return"combobox"===t&&"false"===e.attr("aria-expanded")}(n,r))return!0
var i=Ku(n),u=o.filter((function(e){return!n.attr(e)&&!function(e,t){var n
return void 0!==(null===(n=e.implicitAttrs)||void 0===n?void 0:n[t])}(i,e)}))
return!u.length||(this.data(u),!1)},"aria-required-children-evaluate":function(e,t,n){var r=t&&Array.isArray(t.reviewEmpty)?t.reviewEmpty:[],a=wu(n,{dpub:!0}),o=BD(a)
if(null===o)return!0
var i=function(e,t){for(var n,r=[],a=as(e),o=function(){if(3===n.props.nodeType&&r.push({vNode:n,role:null}),1!==n.props.nodeType||!is(n))return 1
var e=es(n,{noPresentational:!0}),o=function(e){return Cu().find((function(t){return e.hasAttr(t)}))}(n),i=!!o||iu(n)
if(!e&&!i||["group","rowgroup"].includes(e)&&t.some((function(t){return t===e})))a.push.apply(a,L(n.children))
else if(e||i){var u=o||"tabindex"
r.push({role:e,attr:u,vNode:n})}};n=a.shift();)o()
return r}(n,o),u=i.filter((function(e){var t=e.role
return 1===e.vNode.props.nodeType&&!o.includes(t)}))
return u.length?(this.relatedNodes(u.map((function(e){return e.vNode}))),this.data({messageKey:"unallowed",values:u.map((function(e){return function(e,t){var n=e.props,r=n.nodeName
if(3===n.nodeType)return"#text"
var a=wu(e,{dpub:!0})
return a?"[role=".concat(a,"]"):t?r+"[".concat(t,"]"):r}(e.vNode,e.attr)})).filter((function(e,t,n){return n.indexOf(e)===t})).join(", ")}),!1):!!function(e,t){return t.some((function(t){var n=t.role
return n&&e.includes(n)}))}(o,i)||("true"===n.attr("aria-busy")?(this.data({messageKey:"aria-busy"}),!0):(this.data(o),!(!r.includes(a)||i.some(Jg))&&void 0))},"aria-required-children-matches":function(e,t){var n=wu(t,{dpub:!0})
return!!BD(n)},"aria-required-parent-evaluate":function(e,t,n){var r=t&&Array.isArray(t.ownGroupRoles)?t.ownGroupRoles:[],a=Zg(n,r)
if(!a)return!0
var o=function(e){for(var t=[],n=null;e;){if(e.getAttribute("id")){var r=Or(e.getAttribute("id"));(n=Io(e).querySelector("[aria-owns~=".concat(r,"]")))&&t.push(n)}e=e.parentElement}return t.length?t:null}(e)
if(o)for(var i=0,u=o.length;i<u;i++)if(!(a=Zg(pa(o[i]),r,a,!0)))return!0
return this.data(a),!1},"aria-required-parent-matches":function(e,t){var n=wu(t)
return!!RD(n)},"aria-roledescription-evaluate":function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=es(arguments.length>2?arguments[2]:void 0)
return!!(t.supportedRoles||[]).includes(n)||!(!n||"presentation"===n||"none"===n)&&void 0},"aria-unsupported-attr-evaluate":function(e,t,n){var r=n.attrNames.filter((function(t){var n=yu.ariaAttrs[t]
if(!_D(t))return!1
var r=n.unsupported
return"object"!==o(r)?!!r:!Gu(e,r.exceptions)}))
return!!r.length&&(this.data(r),!0)},"aria-valid-attr-evaluate":function(e,t,n){t=Array.isArray(t.value)?t.value:[]
var r=[],a=/^aria-/
return n.attrNames.forEach((function(e){-1===t.indexOf(e)&&a.test(e)&&!_D(e)&&r.push(e)})),!r.length||(this.data(r),!1)},"aria-valid-attr-value-evaluate":function(e,t,n){t=Array.isArray(t.value)?t.value:[]
var r="",a="",o=[],u=/^aria-/,s=["aria-errormessage"],l={"aria-controls":function(){return"false"!==n.attr("aria-expanded")&&"false"!==n.attr("aria-selected")},"aria-current":function(e){e||(r='aria-current="'.concat(n.attr("aria-current"),'"'),a="ariaCurrent")},"aria-owns":function(){return"false"!==n.attr("aria-expanded")},"aria-describedby":function(e){e||(r='aria-describedby="'.concat(n.attr("aria-describedby"),'"'),a=i._tree&&i._tree[0]._hasShadowRoot?"noIdShadow":"noId")},"aria-labelledby":function(e){e||(r='aria-labelledby="'.concat(n.attr("aria-labelledby"),'"'),a=i._tree&&i._tree[0]._hasShadowRoot?"noIdShadow":"noId")}}
return n.attrNames.forEach((function(e){if(!s.includes(e)&&!t.includes(e)&&u.test(e)){var i,c=n.attr(e)
try{i=SD(n,e)}catch(t){return r="".concat(e,'="').concat(c,'"'),void(a="idrefs")}l[e]&&!l[e](i)||i||(""!==c||function(e){var t
return"string"===(null===(t=yu.ariaAttrs[e])||void 0===t?void 0:t.type)}(e)?o.push("".concat(e,'="').concat(c,'"')):(r=e,a="empty"))}})),o.length?(this.data(o),!1):!r||void this.data({messageKey:a,needsReview:r})},"attr-non-space-content-evaluate":function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0
if(!t.attribute||"string"!=typeof t.attribute)throw new TypeError("attr-non-space-content requires options.attribute to be a string")
if(!n.hasAttr(t.attribute))return this.data({messageKey:"noAttr"}),!1
var r=n.attr(t.attribute)
return!!Ru(r)||(this.data({messageKey:"emptyAttr"}),!1)},"autocomplete-appropriate-evaluate":function(e,t,n){if("input"!==n.props.nodeName)return!0
var r=["text","search","number","tel"],a=["text","search","url"],i={bday:["text","search","date"],email:["text","search","email"],username:["text","search","email"],"street-address":["text"],tel:["text","search","tel"],"tel-country-code":["text","search","tel"],"tel-national":["text","search","tel"],"tel-area-code":["text","search","tel"],"tel-local":["text","search","tel"],"tel-local-prefix":["text","search","tel"],"tel-local-suffix":["text","search","tel"],"tel-extension":["text","search","tel"],"cc-number":r,"cc-exp":["text","search","month","tel"],"cc-exp-month":r,"cc-exp-year":r,"cc-csc":r,"transaction-amount":r,"bday-day":r,"bday-month":r,"bday-year":r,"new-password":["text","search","password"],"current-password":["text","search","password"],url:a,photo:a,impp:a}
"object"===o(t)&&Object.keys(t).forEach((function(e){i[e]||(i[e]=[]),i[e]=i[e].concat(t[e])}))
var u=n.attr("autocomplete").split(/\s+/g).map((function(e){return e.toLowerCase()})),s=u[u.length-1]
if(js.stateTerms.includes(s))return!0
var l=i[s],c=n.hasAttr("type")?Ru(n.attr("type")).toLowerCase():"text"
return c=qm().includes(c)?c:"text",void 0===l?"text"===c:l.includes(c)},"autocomplete-matches":function(e,t){var n=t.attr("autocomplete")
if(!n||""===Ru(n))return!1
var r=t.props.nodeName
if(!1===["textarea","input","select"].includes(r))return!1
if("input"===r&&["submit","reset","button","hidden"].includes(t.props.type))return!1
var a=t.attr("aria-disabled")||"false"
if(t.hasAttr("disabled")||"true"===a.toLowerCase())return!1
var o=t.attr("role"),i=t.attr("tabindex")
if("-1"===i&&o){var u=yu.ariaRoles[o]
if(void 0===u||"widget"!==u.type)return!1}return!("-1"===i&&t.actualNode&&!fi(t)&&!is(t))},"autocomplete-valid-evaluate":function(e,t,n){var r=n.attr("autocomplete")||""
return Is(r,t)},"avoid-inline-spacing-evaluate":function(e,t){var n=t.cssProperties.filter((function(t){if("important"===e.style.getPropertyPriority(t))return t}))
return!(n.length>0&&(this.data(n),1))},"braille-label-equivalent-evaluate":function(e,t,n){var r
if(!(null!==(r=n.attr("aria-braillelabel"))&&void 0!==r?r:"").trim())return!0
try{return""!==Ru(Ss(n))}catch(e){return}},"braille-roledescription-equivalent-evaluate":function(e,t,n){var r,a=null!==(r=n.attr("aria-brailleroledescription"))&&void 0!==r?r:""
if(""===Ru(a))return!0
var o=n.attr("aria-roledescription")
return"string"!=typeof o?(this.data({messageKey:"noRoleDescription"}),!1):""!==Ru(o)||(this.data({messageKey:"emptyRoleDescription"}),!1)},"bypass-matches":function(e,t,n){return!cv(0,0,n)||!!e.querySelector("a[href]")},"caption-evaluate":function(e,t,n){return!km(n,"track").some((function(e){return"captions"===(e.attr("kind")||"").toLowerCase()}))&&void 0},"caption-faked-evaluate":function(e){var t=xu(e),n=t[0]
return t.length<=1||n.length<=1||e.rows.length<=1||n.reduce((function(e,t,r){return e||t!==n[r+1]&&void 0!==n[r+1]}),!1)},"color-contrast-evaluate":function(e,t,r){var a=t.ignoreUnicode,o=t.ignoreLength,i=t.ignorePseudo,u=t.boldValue,s=t.boldTextPt,l=t.largeTextPt,c=t.contrastRatio,d=t.shadowOutlineEmMax,p=t.pseudoSizeThreshold
if(!fi(e))return this.data({messageKey:"hidden"}),!0
var f=ss(r,!1,!0)
if(a&&function(e){var t={nonBmp:!0},n=Rs(e,t),r=""===Ru(Os(e,t))
return n&&r}(f))this.data({messageKey:"nonBmp"})
else{var h=n.getComputedStyle(e),m=parseFloat(h.getPropertyValue("font-size")),D=h.getPropertyValue("font-weight"),g=parseFloat(D)>=u||"bold"===D,v=Math.ceil(72*m)/96,y=g&&v<s||!g&&v<l?c.normal:c.large,b=y.expected,F=y.minThreshold,w=y.maxThreshold,E=function(e,t){var n=t.pseudoSizeThreshold,r=void 0===n?.25:n,a=t.ignorePseudo
if(void 0===a||!a){var o=e.boundingClientRect,i=o.width*o.height*r
do{if(Kg(e.actualNode,":before")+Kg(e.actualNode,":after")>i)return e}while(e=e.parent)}}(r,{ignorePseudo:i,pseudoSizeThreshold:p})
if(E)return this.data({fontSize:"".concat((72*m/96).toFixed(1),"pt (").concat(m,"px)"),fontWeight:g?"bold":"normal",messageKey:"pseudoContent",expectedContrastRatio:b+":1"}),void this.relatedNodes(E.actualNode)
var C=sg(e,{minRatio:.001,maxRatio:d})
if(null!==C){var x=[],A=mg(e,x,d),k=yg(e,!1,A,t),T=null,N=null,R=null
if(0===C.length)T=vg(A,k)
else if(k&&A){R=[].concat(L(C),[A]).reduce(eg)
var B=vg(A,k),S=vg(A,R),_=vg(R,k);(T=Math.max(B,S,_))!==B&&(N=S>_?"shadowOnBgColor":"fgOnShadowColor")}var O=T>b
if("number"==typeof F&&("number"!=typeof T||T<F)||"number"==typeof w&&("number"!=typeof T||T>w))return this.data({contrastRatio:T}),!0
var M,j=Math.floor(100*T)/100
null===A?M=ml.get("bgColor"):O||(M=N)
var I=1===j,P=1===f.length
return I?M=ml.set("bgColor","equalRatio"):O||!P||o||(M="shortTextContent"),this.data({fgColor:k?k.toHexString():void 0,bgColor:A?A.toHexString():void 0,contrastRatio:j,fontSize:"".concat((72*m/96).toFixed(1),"pt (").concat(m,"px)"),fontWeight:g?"bold":"normal",messageKey:M,expectedContrastRatio:b+":1",shadowColor:R?R.toHexString():void 0}),null===k||null===A||I||P&&!o&&!O?(M=null,ml.clear(),void this.relatedNodes(x)):(O||this.relatedNodes(x),O)}this.data({messageKey:"complexTextShadows"})}},"color-contrast-matches":function(e,t){var r=t.props,o=r.nodeName,i=r.type
if("option"===o)return!1
if("select"===o&&!e.options.length)return!1
if("input"===o&&["hidden","range","color","checkbox","radio","image"].includes(i))return!1
if(Cg(t)||Vi(t))return!1
if(["input","select","textarea"].includes(o)){var u=n.getComputedStyle(e),s=parseInt(u.getPropertyValue("text-indent"),10)
if(s){var l=e.getBoundingClientRect()
if(l={top:l.top,bottom:l.bottom,left:l.left+s,right:l.right+s},!nh(l,e))return!1}return!0}var c=qo(t,"label")
if("label"===o||c){var d=c||e,p=c?pa(c):t
if(d.htmlFor){var f=Io(d).getElementById(d.htmlFor),h=f&&pa(f)
if(h&&Cg(h))return!1}var m=km(p,'input:not([type="hidden"],[type="image"],[type="button"],[type="submit"],[type="reset"]), select, textarea')[0]
if(m&&Cg(m))return!1}for(var D=[],g=t;g;){if(g.props.id){var v=dD(g).filter((function(e){return ih(e.getAttribute("aria-labelledby")||"").includes(g.props.id)})).map((function(e){return pa(e)}))
D.push.apply(D,L(v))}g=g.parent}if(D.length>0&&D.every(Cg))return!1
if(!function(e){var t=ss(e,!1,!0)
return""!==t&&""!==Os(t,dv)&&e.children.some((function(e){return"#text"===e.props.nodeName&&!Bs(e)}))}(t))return!1
for(var y=a.createRange(),b=t.children,F=0;F<b.length;F++){var w=b[F]
3===w.actualNode.nodeType&&""!==Ru(w.actualNode.nodeValue)&&y.selectNodeContents(w.actualNode)}var E=Array.from(y.getClientRects()),C=$o(t)
return E.some((function(t){var n=nh(t,e)
if(!C.length)return n
var r=C.some((function(e){return Ho(t,e.boundingClientRect)}))
return n&&r}))},"css-orientation-lock-evaluate":function(e,t,n,r){var a=(r||{}).cssom,o=void 0===a?void 0:a,i=(t||{}).degreeThreshold,u=void 0===i?0:i
if(o&&o.length){for(var s=!1,l=[],c=o.reduce((function(e,t){var n=t.sheet,r=t.root,a=t.shadowId||"topDocument"
if(e[a]||(e[a]={root:r,rules:[]}),!n||!n.cssRules)return e
var o=Array.from(n.cssRules)
return e[a].rules=e[a].rules.concat(o),e}),{}),d=function(){var e=f[p],t=c[e],n=t.root,r=t.rules.filter(h)
if(!r.length)return 1
r.forEach((function(e){var t=e.cssRules
Array.from(t).forEach((function(e){var t=function(e){var t=e.selectorText,n=e.style
if(!t||n.length<=0)return!1
var r=n.transform||n.webkitTransform||n.msTransform||!1
if(!r&&!n.rotate)return!1
var a=function(e){if(!e)return 0
var t=e.match(/(rotate|rotateZ|rotate3d|matrix|matrix3d)\(([^)]+)\)(?!.*(rotate|rotateZ|rotate3d|matrix|matrix3d))/)
if(!t)return 0
var n=$(t,3)
return m(n[1],n[2])}(r),o=a+m("rotate",n.rotate)
return!!o&&(o=Math.abs(o),!(Math.abs(o-180)%180<=u)&&Math.abs(o-90)%90<=u)}(e)
if(t&&"HTML"!==e.selectorText.toUpperCase()){var r=Array.from(n.querySelectorAll(e.selectorText))||[]
l=l.concat(r)}s=s||t}))}))},p=0,f=Object.keys(c);p<f.length;p++)d()
return!s||(l.length&&this.relatedNodes(l),!1)}function h(e){var t=e.type,n=e.cssText
return 4===t&&(/orientation:\s*landscape/i.test(n)||/orientation:\s*portrait/i.test(n))}function m(e,t){switch(e){case"rotate":case"rotateZ":return D(t)
case"rotate3d":var n=$(t.split(",").map((function(e){return e.trim()})),4),r=n[2],a=n[3]
if(0===parseInt(r))return
return D(a)
case"matrix":case"matrix3d":return function(e){var t=e.split(",")
if(t.length<=6){var n=$(t,2),r=n[0],a=n[1]
return g(Math.atan2(parseFloat(a),parseFloat(r)))}var o=parseFloat(t[8]),i=Math.asin(o),u=Math.cos(i)
return g(Math.acos(parseFloat(t[0])/u))}(t)
default:return 0}}function D(e){var t=$(e.match(/(deg|grad|rad|turn)/)||[],1)[0]
if(!t)return 0
var n,r,a=parseFloat(e.replace(t,""))
switch(t){case"rad":return g(a)
case"grad":return r=a,(r%=400)<0&&(r+=400),Math.round(r/400*360)
case"turn":return n=a,Math.round(360/(1/n))
default:return parseInt(a)}}function g(e){return Math.round(e*(180/Math.PI))}},"data-table-large-matches":function(e){if(rD(e)){var t=xu(e)
return t.length>=3&&t[0].length>=3&&t[1].length>=3&&t[2].length>=3}return!1},"data-table-matches":function(e){return rD(e)},"deprecatedrole-evaluate":function(e,t,n){var r=es(n,{dpub:!0,fallback:!0}),a=yu.ariaRoles[r]
return!(null==a||!a.deprecated||(this.data(r),0))},"dlitem-evaluate":function(e){var t=ui(e),n=t.nodeName.toUpperCase(),r=wu(t)
return"DIV"===n&&["presentation","none",null].includes(r)&&(n=(t=ui(t)).nodeName.toUpperCase(),r=wu(t)),"DL"===n&&!(r&&!["presentation","none","list"].includes(r))},"doc-has-title-evaluate":function(){var e=a.title
return!!Ru(e)},"duplicate-id-active-matches":function(e){var t=e.getAttribute("id").trim(),n='*[id="'.concat(Or(t),'"]'),r=Array.from(Io(e).querySelectorAll(n))
return!xD(e)&&r.some(iu)},"duplicate-id-after":function(e){var t=[]
return e.filter((function(e){return-1===t.indexOf(e.data)&&(t.push(e.data),!0)}))},"duplicate-id-aria-matches":function(e){return xD(e)},"duplicate-id-evaluate":function(e){var t=e.getAttribute("id").trim()
if(!t)return!0
var n=Io(e),r=Array.from(n.querySelectorAll('[id="'.concat(Or(t),'"]'))).filter((function(t){return t!==e}))
return r.length&&this.relatedNodes(r),this.data(t),0===r.length},"duplicate-id-misc-matches":function(e){var t=e.getAttribute("id").trim(),n='*[id="'.concat(Or(t),'"]'),r=Array.from(Io(e).querySelectorAll(n))
return!xD(e)&&r.every((function(e){return!iu(e)}))},"duplicate-img-label-evaluate":function(e,t,n){if(["none","presentation"].includes(es(n)))return!1
var r=_a(n,t.parentSelector)
if(!r)return!1
var a=ss(r,!0).toLowerCase()
return""!==a&&a===Ss(n).toLowerCase()},"exists-evaluate":function(){},"explicit-evaluate":function(e,t,n){var r=this
if(!n.attr("id"))return!1
if(n.actualNode){var a=Io(n.actualNode),o=Or(n.attr("id")),i=Array.from(a.querySelectorAll('label[for="'.concat(o,'"]')))
if(this.relatedNodes(i),!i.length)return!1
try{return i.some((function(e){if(fi(e)){var t=Ru(pu(e,{inControlContext:!0,startNode:n}))
return r.data({explicitLabel:t}),!!t}return!0}))}catch(e){return}}},"fallbackrole-evaluate":function(e,t,n){var r=ih(n.attr("role"))
return!(r.length<=1)&&(!function(e,t){return!Yu(e)&&2===t.length&&t.includes("none")&&t.includes("presentation")}(n,r)||void 0)},"focusable-content-evaluate":function(e,t,n){var r=n.tabbableElements
return!!r&&r.filter((function(e){return e!==n})).length>0},"focusable-disabled-evaluate":function(e,t,n){var r=["button","fieldset","input","select","textarea"],a=n.tabbableElements
if(!a||!a.length)return!0
var o=a.filter((function(e){return r.includes(e.props.nodeName)}))
return this.relatedNodes(o.map((function(e){return e.actualNode}))),!(0!==o.length&&!cl())||!!o.every((function(e){var t=e.getComputedStylePropertyValue("pointer-events"),n=parseInt(e.getComputedStylePropertyValue("width")),r=parseInt(e.getComputedStylePropertyValue("height"))
return e.actualNode.onfocus||(0===n||0===r)&&"none"===t}))&&void 0},"focusable-element-evaluate":function(e,t,n){return!(!n.hasAttr("contenteditable")||!function e(t){var r=t.attr("contenteditable")
if("true"===r||""===r)return!0
if("false"===r)return!1
var a=_a(n.parent,"[contenteditable]")
return!!a&&e(a)}(n))||uu(n)},"focusable-modal-open-evaluate":function(e,t,n){var r=n.tabbableElements.map((function(e){return e.actualNode}))
return!r||!r.length||!cl()||void this.relatedNodes(r)},"focusable-no-name-evaluate":function(e,t,n){var r=n.attr("tabindex")
if(!(iu(n)&&r>-1))return!1
try{return!Ss(n)}catch(e){return}},"focusable-not-tabbable-evaluate":function(e,t,n){var r=["button","fieldset","input","select","textarea"],a=n.tabbableElements
if(!a||!a.length)return!0
var o=a.filter((function(e){return!r.includes(e.props.nodeName)}))
return this.relatedNodes(o.map((function(e){return e.actualNode}))),!(0!==o.length&&!cl())||!!o.every((function(e){var t=e.getComputedStylePropertyValue("pointer-events"),n=parseInt(e.getComputedStylePropertyValue("width")),r=parseInt(e.getComputedStylePropertyValue("height"))
return e.actualNode.onfocus||(0===n||0===r)&&"none"===t}))&&void 0},"frame-focusable-content-evaluate":function(e,t,n){if(n.children)try{return!n.children.some((function(e){return zg(e)}))}catch(e){return}},"frame-focusable-content-matches":function(e,t,n){var r,a
return!n.initiator&&!n.focusable&&(null===(r=n.size)||void 0===r?void 0:r.width)*(null===(a=n.size)||void 0===a?void 0:a.height)>1},"frame-tested-after":function(e){var t={}
return e.filter((function(e){if("html"!==e.node.ancestry[e.node.ancestry.length-1]){var n=e.node.ancestry.flat(1/0).join(" > ")
return t[n]=e,!0}var r=e.node.ancestry.slice(0,e.node.ancestry.length-1).flat(1/0).join(" > ")
return t[r]&&(t[r].result=!0),!1}))},"frame-tested-evaluate":function(e,t){return!t.isViolation&&void 0},"frame-title-has-text-matches":function(e){var t=e.getAttribute("title")
return!!Ru(t)},"has-alt-evaluate":function(e,t,n){var r=n.props.nodeName
return!!["img","input","area"].includes(r)&&n.hasAttr("alt")},"has-descendant-after":function(e){return e.some((function(e){return!0===e.result}))&&e.forEach((function(e){e.result=!0})),e},"has-descendant-evaluate":function(e,t,n){if(!t||!t.selector||"string"!=typeof t.selector)throw new TypeError("has-descendant requires options.selector to be a string")
if(t.passForModal&&cl())return!0
var r=Dm(n,t.selector,(function(e){return is(e)}))
return this.relatedNodes(r.map((function(e){return e.actualNode}))),r.length>0},"has-global-aria-attribute-evaluate":function(e,t,n){var r=Cu().filter((function(e){return n.hasAttr(e)}))
return this.data(r),r.length>0},"has-implicit-chromium-role-matches":function(e,t){return null!==Yu(t,{chromium:!0})},"has-lang-evaluate":function(e,t,n){var r=void 0!==a&&$r(a)
return t.attributes.includes("xml:lang")&&t.attributes.includes("lang")&&Ig(n.attr("xml:lang"))&&!Ig(n.attr("lang"))&&!r?(this.data({messageKey:"noXHTML"}),!1):!!t.attributes.some((function(e){return Ig(n.attr(e))}))||(this.data({messageKey:"noLang"}),!1)},"has-text-content-evaluate":function(e,t,n){try{return""!==Ru(ws(n))}catch(e){return}},"has-widget-role-evaluate":function(e){var t=e.getAttribute("role")
if(null===t)return!1
var n=ol(t)
return"widget"===n||"composite"===n},"heading-matches":function(e,t){return"heading"===es(t)},"heading-order-after":function(e){var t=function(e){return(e=L(e)).sort((function(e,t){var n=e.node,r=t.node
return n.ancestry.length-r.ancestry.length})),e.reduce(kg,[]).filter((function(e){return-1!==e.level}))}(e)
return e.forEach((function(e){e.result=function(e,t){var n,r,a,o,i=Tg(t,e.node.ancestry),u=null!==(n=null===(r=t[i])||void 0===r?void 0:r.level)&&void 0!==n?n:-1,s=null!==(a=null===(o=t[i-1])||void 0===o?void 0:o.level)&&void 0!==a?a:-1
return 0===i||(-1!==u?u-s<=1:void 0)}(e,t)})),e},"heading-order-evaluate":function(){var e=da.get("headingOrder")
if(e)return!0
var t=Dm(i._tree[0],"h1, h2, h3, h4, h5, h6, [role=heading], iframe, frame",is)
return e=t.map((function(e){return{ancestry:[ia(e.actualNode)],level:Ag(e)}})),this.data({headingOrder:e}),da.set("headingOrder",t),!0},"help-same-as-label-evaluate":function(e,t,n){var r=Ls(n),a=e.getAttribute("title")
return!!r&&(a||(a="",e.getAttribute("aria-describedby")&&(a=du(e,"aria-describedby").map((function(e){return e?pu(e):""})).join(""))),Ru(a)===Ru(r))},"hidden-content-evaluate":function(e,t,r){if(!["SCRIPT","HEAD","TITLE","NOSCRIPT","STYLE","TEMPLATE"].includes(e.nodeName.toUpperCase())&&Xs(r)){var a=n.getComputedStyle(e)
if("none"===a.getPropertyValue("display"))return
if("hidden"===a.getPropertyValue("visibility")){var o=ui(e),i=o&&n.getComputedStyle(o)
if(!i||"hidden"!==i.getPropertyValue("visibility"))return}}return!0},"hidden-explicit-label-evaluate":function(e,t,n){if(n.hasAttr("id")){if(!n.actualNode)return
var r=Io(e),a=Or(e.getAttribute("id")),o=r.querySelector('label[for="'.concat(a,'"]'))
if(o&&!is(o)){var i
try{i=Ss(n).trim()}catch(e){return}return""===i}}return!1},"html-namespace-matches":function(e,t){return!rv(0,t)},"html5-scope-evaluate":function(e){return!al(a)||"TH"===e.nodeName.toUpperCase()},"identical-links-same-purpose-after":function(e){if(e.length<2)return e
for(var t=e.filter((function(e){return void 0!==e.result})),n=[],r={},a=function(e){var a,o=t[e],i=o.data,u=i.name,s=i.urlProps
if(r[u])return 1
var l=t.filter((function(t,n){return t.data.name===u&&n!==e})),c=l.every((function(e){return xg(e.data.urlProps,s)}))
l.length&&!c&&(o.result=void 0),o.relatedNodes=[],(a=o.relatedNodes).push.apply(a,L(l.map((function(e){return e.relatedNodes[0]})))),r[u]=l,n.push(o)},o=0;o<t.length;o++)a(o)
return n},"identical-links-same-purpose-evaluate":function(e,t,n){var r=cu.accessibleTextVirtual(n),a=cu.sanitize(cu.removeUnicode(r,{emoji:!0,nonBmp:!0,punctuations:!0})).toLowerCase()
if(a){var o={name:a,urlProps:Mo.urlPropsFromAttribute(e,"href")}
return this.data(o),this.relatedNodes([e]),!0}},"identical-links-same-purpose-matches":function(e,t){if(!Ss(t))return!1
var n=es(e)
return!n||"link"===n},"implicit-evaluate":function(e,t,n){try{var r=_a(n,"label")
if(r){var a=Ru(Ss(r,{inControlContext:!0,startNode:n}))
return r.actualNode&&this.relatedNodes([r.actualNode]),this.data({implicitLabel:a}),!!a}return!1}catch(e){return}},"inline-style-property-evaluate":function(e,t){var r=t.cssProperty,a=t.absoluteValues,o=t.minValue,i=t.maxValue,u=t.normalValue,s=void 0===u?0:u,l=t.noImportant,c=t.multiLineOnly
if(!l&&"important"!==e.style.getPropertyPriority(r)||c&&!dl(e))return!0
var d={}
"number"==typeof o&&(d.minValue=o),"number"==typeof i&&(d.maxValue=i)
var p=e.style.getPropertyValue(r)
if(["inherit","unset","revert","revert-layer"].includes(p))return this.data(z({value:p},d)),!0
var f=function(e,t){var r=t.cssProperty,a=t.absoluteValues,o=t.normalValue,i=n.getComputedStyle(e),u=i.getPropertyValue(r)
if("normal"===u)return o
var s=parseFloat(u)
if(a)return s
var l=parseFloat(i.getPropertyValue("font-size")),c=Math.round(s/l*100)/100
return isNaN(c)?u:c}(e,{absoluteValues:a,cssProperty:r,normalValue:s})
return this.data(z({value:f},d)),"number"==typeof f?("number"!=typeof o||f>=o)&&("number"!=typeof i||f<=i):void 0},"inserted-into-focus-order-matches":function(e){return el(e)},"internal-link-present-evaluate":function(e,t,n){return km(n,"a[href]").some((function(e){return/^#[^/!]/.test(e.attr("href"))}))},"invalid-children-evaluate":function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=[],a=[]
if(n.children){for(var o,i=jg(n.children);i.length;){var u,s=i.shift(),l=s.vChild,c=s.nested
if(!t.divGroups||c||"div"!==(o=l).props.nodeName||null!==wu(o)){var d=Mg(l,c,t)
d&&(a.includes(d)||a.push(d),1===(null==l||null===(u=l.actualNode)||void 0===u?void 0:u.nodeType)&&r.push(l.actualNode))}else{if(!l.children)return
var p=jg(l.children,!0)
i.push.apply(i,L(p))}}return 0!==a.length&&(this.data({values:a.join(", ")}),this.relatedNodes(r),!0)}},"invalidrole-evaluate":function(e,t,n){var r=ih(n.attr("role"))
return!!r.every((function(e){return!Fu(e,{allowAbstract:!0})}))&&(this.data(r),!0)},"is-element-focusable-evaluate":function(e,t,n){return iu(n)},"is-initiator-matches":cv,"is-on-screen-evaluate":function(e){return fi(e)},"is-visible-matches":function(e){return fi(e)},"is-visible-on-screen-matches":function(e,t){return fi(t)},"label-content-name-mismatch-evaluate":function(e,t,n){var r,a=null==t?void 0:t.pixelThreshold,o=null!==(r=null==t?void 0:t.occurrenceThreshold)&&void 0!==r?r:null==t?void 0:t.occuranceThreshold,i=pu(e).toLowerCase()
if(!(Ms(i)<1)){var u=Ru(ws(n,{subtreeDescendant:!0,ignoreIconLigature:!0,pixelThreshold:a,occurrenceThreshold:o})).toLowerCase()
return!u||(Ms(u)<1?!!Pg(u,i)||void 0:Pg(u,i))}},"label-content-name-mismatch-matches":function(e,t){var n=es(e)
return!!(n&&DD("widget").includes(n)&&vD().includes(n)&&(Ru(hu(t))||Ru(fu(e)))&&Ru(ss(t)))},"label-matches":function(e,t){if("input"!==t.props.nodeName||!1===t.hasAttr("type"))return!0
var n=t.attr("type").toLowerCase()
return!1===["hidden","image","button","submit","reset"].includes(n)},"landmark-has-body-context-matches":function(e,t){return e.hasAttribute("role")||!qo(t,"article, aside, main, nav, section")},"landmark-is-top-level-evaluate":function(e){var t=DD("landmark"),n=ui(e),r=es(e)
for(this.data({role:r});n;){var a=n.getAttribute("role")
if(a||"FORM"===n.nodeName.toUpperCase()||(a=Yu(n)),a&&t.includes(a)&&("main"!==a||"complementary"!==r))return!1
n=ui(n)}return!0},"landmark-is-unique-after":function(e){var t=[]
return e.filter((function(e){var n=t.find((function(t){return e.data.role===t.data.role&&e.data.accessibleText===t.data.accessibleText}))
return n?(n.result=!1,n.relatedNodes.push(e.relatedNodes[0]),!1):(t.push(e),e.relatedNodes=[],!0)}))},"landmark-is-unique-evaluate":function(e,t,n){var r=es(e),a=Ss(n)
return a=a?a.toLowerCase():null,this.data({role:r,accessibleText:a}),this.relatedNodes([e]),!0},"landmark-unique-matches":function(e,t){return function(e){var t=DD("landmark"),n=es(e)
if(!n)return!1
var r=e.props.nodeName
return"header"===r||"footer"===r?!_a(e,lv):"section"===r||"form"===r?!!Ss(e):t.indexOf(n)>=0||"region"===n}(t)&&is(t)},"layout-table-matches":function(e){return!rD(e)&&!iu(e)},"link-in-text-block-evaluate":function(e,t){var n=t.requiredContrastRatio,r=t.allowSameColor
if(Gg(e))return!1
for(var a=ui(e);a&&1===a.nodeType&&!Gg(a);)a=ui(a)
if(a){this.relatedNodes([a])
var o=yg(e),i=yg(a),u=mg(e),s=mg(a),l=o&&i?Ug(o,i):void 0
if(l&&(l=Math.floor(100*l)/100),l&&l>=n)return!0
var c=u&&s?Ug(u,s):void 0
if(c&&(c=Math.floor(100*c)/100),c&&c>=n)return!0
if(!c){var d,p=null!==(d=ml.get("bgColor"))&&void 0!==d?d:"bgContrast"
return this.data({messageKey:p}),void ml.clear()}if(l)return!(!r||1!==l||1!==c)||(1===l&&c>1?(this.data({messageKey:"bgContrast",contrastRatio:c,requiredContrastRatio:n,nodeBackgroundColor:u?u.toHexString():void 0,parentBackgroundColor:s?s.toHexString():void 0}),!1):(this.data({messageKey:"fgContrast",contrastRatio:l,requiredContrastRatio:n,nodeColor:o?o.toHexString():void 0,parentColor:i?i.toHexString():void 0}),!1))}},"link-in-text-block-matches":function(e){var t=Ru(e.innerText),n=e.getAttribute("role")
return(!n||"link"===n)&&!!t&&!!fi(e)&&ll(e)},"link-in-text-block-style-evaluate":function(e){if(Vg(e))return!1
for(var t=ui(e);t&&1===t.nodeType&&!Vg(t);)t=ui(t)
if(t){if(this.relatedNodes([t]),GD(e,t))return!0
if(!function(e){for(var t=0,r=["before","after"];t<r.length;t++){var a=r[t]
if("none"!==n.getComputedStyle(e,":".concat(a)).getPropertyValue("content"))return!0}return!1}(e))return!1
this.data({messageKey:"pseudoContent"})}},"listitem-evaluate":function(e,t,n){var r=n.parent
if(r){var a=r.props.nodeName,o=wu(r)
return!!["presentation","none","list"].includes(o)||(o&&Fu(o)?(this.data({messageKey:"roleNotValid"}),!1):["ul","ol","menu"].includes(a))}},"matches-definition-evaluate":function(e,t,n){return Gu(n,t.matcher)},"meta-refresh-evaluate":function(e,t,n){var r=t||{},a=r.minDelay,o=r.maxDelay,i=$((n.attr("content")||"").trim().split(HD),1)[0]
if(!i.match(zD))return!0
var u=parseFloat(i)
return this.data({redirectDelay:u}),"number"==typeof a&&u<=t.minDelay||"number"==typeof o&&u>t.maxDelay},"meta-viewport-scale-evaluate":function(e,t,n){var r=t||{},a=r.scaleMinimum,o=void 0===a?2:a,i=r.lowerBound,u=void 0!==i&&i,s=n.attr("content")||""
if(!s)return!0
var l=s.split(/[;,]/).reduce((function(e,t){var n=t.trim()
if(!n)return e
var r=$(n.split("="),2),a=r[0],o=r[1]
if(!a||!o)return e
var i=a.toLowerCase().trim(),u=o.toLowerCase().trim()
return"maximum-scale"===i&&"yes"===u&&(u=1),"maximum-scale"===i&&parseFloat(u)<0||(e[i]=u),e}),{})
if(u&&l["maximum-scale"]&&parseFloat(l["maximum-scale"])<u)return!0
if(!u&&"no"===l["user-scalable"])return this.data("user-scalable=no"),!1
var c=parseFloat(l["user-scalable"])
return!u&&l["user-scalable"]&&(c||0===c)&&c>-1&&c<1?(this.data("user-scalable"),!1):!(l["maximum-scale"]&&parseFloat(l["maximum-scale"])<o&&(this.data("maximum-scale"),1))},"multiple-label-evaluate":function(e){var t=Or(e.getAttribute("id")),n=e.parentNode,r=Io(e)
r=r.documentElement||r
var a=Array.from(r.querySelectorAll('label[for="'.concat(t,'"]')))
for(a.length&&(a=a.filter((function(e){return!ai(e)})));n;)"LABEL"===n.nodeName.toUpperCase()&&-1===a.indexOf(n)&&a.push(n),n=n.parentNode
if(this.relatedNodes(a),a.length>1){var o=a.filter((function(e){return is(e)}))
if(o.length>1)return
return!du(e,"aria-labelledby").includes(o[0])&&void 0}return!1},"nested-interactive-matches":function(e,t){var n=es(t)
return!!n&&!!yu.ariaRoles[n].childrenPresentational},"no-autoplay-audio-evaluate":function(e,t){if(e.duration){var n=t.allowedDuration,r=void 0===n?3:n
return function(e){if(!e.currentSrc)return 0
var t=function(e){var t=e.match(/#t=(.*)/)
if(t)return $(t,2)[1].split(",").map((function(e){return/:/.test(e)?function(e){for(var t=e.split(":"),n=0,r=1;t.length>0;)n+=r*parseInt(t.pop(),10),r*=60
return parseFloat(n)}(e):parseFloat(e)}))}(e.currentSrc)
return t?1===t.length?Math.abs(e.duration-t[0]):Math.abs(t[1]-t[0]):Math.abs(e.duration-(e.currentTime||0))}(e)<=r&&!e.hasAttribute("loop")||!!e.hasAttribute("controls")}console.warn("axe.utils.preloadMedia did not load metadata")},"no-autoplay-audio-matches":function(e){return!!e.currentSrc&&!e.hasAttribute("paused")&&!e.hasAttribute("muted")},"no-empty-role-matches":function(e,t){return!!t.hasAttr("role")&&!!t.attr("role").trim()},"no-explicit-name-required-matches":uv,"no-focusable-content-evaluate":function(e,t,n){if(n.children)try{var r=Lg(n)
if(!r.length)return!0
var a=r.filter(Hg)
return a.length>0?(this.data({messageKey:"notHidden"}),this.relatedNodes(a)):this.relatedNodes(r),!1}catch(e){return}},"no-implicit-explicit-label-evaluate":function(e,t,n){var r,a,o=es(n,{noImplicit:!0})
this.data(o)
try{r=Ru(Es(n)).toLowerCase(),a=Ru(Ss(n)).toLowerCase()}catch(e){return}return!(!a&&!r)&&!((a||!r)&&a.includes(r))&&void 0},"no-naming-method-matches":function(e,t){var n=Ku(t).namingMethods
return!(n&&0!==n.length||"combobox"===wu(t)&&km(t,'input:not([type="hidden"])').length||AD(t,{popupRoles:["listbox"]}))},"no-negative-tabindex-matches":function(e,t){var n=parseInt(t.attr("tabindex"),10)
return isNaN(n)||n>=0},"no-role-matches":function(e,t){return!t.attr("role")},"non-empty-if-present-evaluate":function(e,t,n){var r=n.props.nodeName,a=(n.attr("type")||"").toLowerCase(),o=n.attr("value")
return o&&this.data({messageKey:"has-label"}),!("input"!==r||!["submit","reset"].includes(a))&&null===o},"not-html-matches":function(e,t){return"html"!==t.props.nodeName},"object-is-loaded-matches":function(e,t){return[uv,sv].every((function(n){return n(e,t)}))},"only-dlitems-evaluate":function(e,t,n){var r=["definition","term","list"],a=n.children.reduce((function(e,t){var n=t.actualNode
return"DIV"===n.nodeName.toUpperCase()&&null===es(n)?e.concat(t.children):e.concat(t)}),[]).reduce((function(e,t){var n=t.actualNode,a=n.nodeName.toUpperCase()
if(1===n.nodeType&&is(n)){var o=wu(n);("DT"!==a&&"DD"!==a||o)&&(r.includes(o)||e.badNodes.push(n))}else 3===n.nodeType&&""!==n.nodeValue.trim()&&(e.hasNonEmptyTextNode=!0)
return e}),{badNodes:[],hasNonEmptyTextNode:!1})
return a.badNodes.length&&this.relatedNodes(a.badNodes),!!a.badNodes.length||a.hasNonEmptyTextNode},"only-listitems-evaluate":function(e,t,n){var r=!1,a=!1,o=!0,i=[],u=[],s=[]
return n.children.forEach((function(e){var t=e.actualNode
if(3!==t.nodeType||""===t.nodeValue.trim()){if(1===t.nodeType&&is(t)){o=!1
var n="LI"===t.nodeName.toUpperCase(),l=es(e),c="listitem"===l
n||c||i.push(t),n&&!c&&(u.push(t),s.includes(l)||s.push(l)),c&&(a=!0)}}else r=!0})),r||i.length?(this.relatedNodes(i),!0):!o&&!a&&(this.relatedNodes(u),this.data({messageKey:"roleNotValid",roles:s.join(", ")}),!0)},"p-as-heading-evaluate":function(e,t,n){var r=Array.from(e.parentNode.children),a=r.indexOf(e),o=(t=t||{}).margins||[],i=r.slice(a+1).find((function(e){return"P"===e.nodeName.toUpperCase()})),u=r.slice(0,a).reverse().find((function(e){return"P"===e.nodeName.toUpperCase()})),s=qD(e),l=i?qD(i):null,c=u?qD(u):null,d=t.passLength,p=t.failLength,f=e.textContent.trim().length,h=null==i?void 0:i.textContent.trim().length
if(f>h*d)return!0
if(!l||!LD(s,l,o))return!0
var m=qo(n,"blockquote")
return!!(m&&"BLOCKQUOTE"===m.nodeName.toUpperCase()||c&&!LD(s,c,o)||f>h*p)&&void 0},"p-as-heading-matches":function(e){var t=Array.from(e.parentNode.childNodes),n=e.textContent.trim()
return!(0===n.length||(n.match(/[.!?:;](?![.!?:;])/g)||[]).length>=2)&&0!==t.slice(t.indexOf(e)+1).filter((function(e){return"P"===e.nodeName.toUpperCase()&&""!==e.textContent.trim()})).length},"page-no-duplicate-after":function(e){return e.filter((function(e){return"ignored"!==e.data}))},"page-no-duplicate-evaluate":function(e,t,n){if(!t||!t.selector||"string"!=typeof t.selector)throw new TypeError("page-no-duplicate requires options.selector to be a string")
var r="page-no-duplicate;"+t.selector
if(!da.get(r)){da.set(r,!0)
var a=Dm(i._tree[0],t.selector,(function(e){return is(e)}))
return"string"==typeof t.nativeScopeFilter&&(a=a.filter((function(e){return e.actualNode.hasAttribute("role")||!qo(e,t.nativeScopeFilter)}))),"string"==typeof t.role&&(a=a.filter((function(e){return es(e)===t.role}))),this.relatedNodes(a.filter((function(e){return e!==n})).map((function(e){return e.actualNode}))),a.length<=1}this.data("ignored")},"presentation-role-conflict-matches":function(e,t){return null!==Yu(t,{chromiumRoles:!0})},"presentational-role-evaluate":function(e,t,n){var r=wu(n)
if(["presentation","none"].includes(r)&&["iframe","frame"].includes(n.props.nodeName)&&n.hasAttr("title"))return this.data({messageKey:"iframe",nodeName:n.props.nodeName}),!1
var a=es(n)
if(["presentation","none"].includes(a))return this.data({role:a}),!0
if(!["presentation","none"].includes(r))return!1
var o,i=Cu().some((function(e){return n.hasAttr(e)})),u=iu(n)
return o=i&&!u?"globalAria":!i&&u?"focusable":"both",this.data({messageKey:o,role:a}),!1},"region-after":function(e){var t=e.filter((function(e){return e.data.isIframe}))
return e.forEach((function(e){if(!e.result&&1!==e.node.ancestry.length){var n,r=e.node.ancestry.slice(0,-1),a=Q(t)
try{for(a.s();!(n=a.n()).done;){var o=n.value
if(om(r,o.node.ancestry)){e.result=o.result
break}}}catch(e){a.e(e)}finally{a.f()}}})),t.forEach((function(e){e.result||(e.result=!0)})),e},"region-evaluate":function(e,t,n){return this.data({isIframe:["iframe","frame"].includes(n.props.nodeName)}),!da.get("regionlessNodes",(function(){return function(e){return ID(i._tree[0],e).map((function(e){for(;e.parent&&!e.parent._hasRegionDescendant&&e.parent.actualNode!==a.body;)e=e.parent
return e})).filter((function(e,t,n){return n.indexOf(e)===t}))}(t)})).includes(n)},"same-caption-summary-evaluate":function(e,t,n){if(void 0!==n.children){var r=n.attr("summary"),a=n.children.find(OD),o=!!a&&Ru(ws(a))
return!(!o||!r)&&Ru(r).toLowerCase()===Ru(o).toLowerCase()}},"scope-value-evaluate":function(e,t){var n=e.getAttribute("scope").toLowerCase()
return-1!==t.values.indexOf(n)},"scrollable-region-focusable-matches":function(e,t){return void 0!==Kh(e,13)&&!1===AD(t)&&km(t,"*").some((function(e){return Xs(e,!0,!0)}))},"skip-link-evaluate":function(e){var t=Zi(e,"href")
return!!t&&(is(t)||void 0)},"skip-link-matches":function(e){return zf(e)&&di(e)},"structured-dlitems-evaluate":function(e,t,n){var r=n.children
if(!r||!r.length)return!1
for(var a,o=!1,i=!1,u=0;u<r.length;u++){if("DT"===(a=r[u].props.nodeName.toUpperCase())&&(o=!0),o&&"DD"===a)return!1
"DD"===a&&(i=!0)}return o||i},"svg-namespace-matches":rv,"svg-non-empty-title-evaluate":function(e,t,n){if(n.children){var r=n.children.find((function(e){return"title"===e.props.nodeName}))
if(!r)return this.data({messageKey:"noTitle"}),!1
try{if(""===ws(r,{includeHidden:!0}).trim())return this.data({messageKey:"emptyTitle"}),!1}catch(e){return}return!0}},"tabindex-evaluate":function(e,t,n){var r=parseInt(n.attr("tabindex"),10)
return!!isNaN(r)||r<=0},"table-or-grid-role-matches":function(e,t){var n=es(t)
return["treegrid","grid","table"].includes(n)},"target-offset-evaluate":function(e,t,n){var r=(null==t?void 0:t.minOffset)||24
if(bi(10*r,n.boundingClientRect))return this.data({messageKey:"large",minOffset:r}),!0
var a,o,i=[],u=r,s=Q(Hi(n,r))
try{for(s.s();!(a=s.n()).done;){var l=a.value
if("widget"===ol(l)&&iu(l)){var c=2*(o=Fi(n,l,r/2),Math.round(10*o)/10)
c+.05>=r||(u=Math.min(u,c),i.push(l))}}}catch(e){s.e(e)}finally{s.f()}return 0===i.length?(this.data({closestOffset:u,minOffset:r}),!0):(this.relatedNodes(i.map((function(e){return e.actualNode}))),i.some(uu)?(this.data({closestOffset:u,minOffset:r}),!uu(n)&&void 0):void this.data({messageKey:"nonTabbableNeighbor",closestOffset:u,minOffset:r}))},"target-size-evaluate":function(e,t,n){var r=(null==t?void 0:t.minSize)||24,a=n.boundingClientRect
if(bi(10*r,a))return this.data({messageKey:"large",minSize:r}),!0
var o=bi.bind(null,r),i=Hi(n),u=function(e,t){return t.filter((function(t){return!Rg(t,e)&&_g(e,t)}))}(n,i),s=function(e,t){var n,r=[],a=[],o=Q(t)
try{for(o.s();!(n=o.n()).done;){var i=n.value
!_g(e,i)&&Ci(e,i)&&"none"!==Bg(i)&&(Rg(e,i)?r.push(i):a.push(i))}}catch(e){o.e(e)}finally{o.f()}return{fullyObscuringElms:r,partialObscuringElms:a}}(n,i),l=s.fullyObscuringElms,c=s.partialObscuringElms
if(u.length&&(l.length||!o(a)))return this.data({minSize:r,messageKey:"contentOverflow"}),void this.relatedNodes(Og(u))
if(l.length)return this.relatedNodes(Og(l)),this.data({messageKey:"obscured"}),!0
var d=!uu(n)&&void 0
if(!o(a))return this.data(z({minSize:r},Sg(a))),d
var p=c.filter((function(e){return"widget"===ol(e)&&iu(e)}))
if(!p.length)return this.data(z({minSize:r},Sg(a))),!0
var f=function(e,t){var n=xi(e.boundingClientRect,t.map((function(e){return e.boundingClientRect})))
return 0===n.length?null:function(e,t){return e.reduce((function(e,n){var r=bi(t,e)
return r!==bi(t,n)?r?e:n:e.width*e.height>n.width*n.height?e:n}))}(n)}(n,p)
if(f){if(!o(f)){if(u.length)return this.data({minSize:r,messageKey:"contentOverflow"}),void this.relatedNodes(Og(u))
var h=p.every(uu),m="partiallyObscured".concat(h?"":"NonTabbable")
return this.data(z({messageKey:m,minSize:r},Sg(f))),this.relatedNodes(Og(p)),h?d:void 0}return this.data(z({minSize:r},Sg(f||a))),this.relatedNodes(Og(p)),!0}this.data({minSize:r,messageKey:"tooManyRects"})},"td-has-header-evaluate":function(e){var t=[],n=Jm(e),r=xu(e)
return n.forEach((function(e){Zs(e)&&nD(e)&&!TD(e)&&(tD(e,r).some((function(e){return null!==e&&!!Zs(e)}))||t.push(e))})),!t.length||(this.relatedNodes(t),!1)},"td-headers-attr-evaluate":function(e){for(var t=[],n=[],r=[],a=0;a<e.rows.length;a++)for(var o=e.rows[a],i=0;i<o.cells.length;i++)t.push(o.cells[i])
var u=t.filter((function(e){return e.getAttribute("id")})).map((function(e){return e.getAttribute("id")}))
return t.forEach((function(e){var t=!1,a=!1
if(e.hasAttribute("headers")&&is(e)){var o=e.getAttribute("headers").trim()
if(!o)return n.push(e)
var i=ih(o)
0!==i.length&&(e.getAttribute("id")&&(t=-1!==i.indexOf(e.getAttribute("id").trim())),a=i.some((function(e){return!u.includes(e)})),(t||a)&&r.push(e))}})),r.length>0?(this.relatedNodes(r),!1):!n.length||void this.relatedNodes(n)},"th-has-data-cells-evaluate":function(e){var t=Jm(e),n=this,r=[]
t.forEach((function(e){var t=e.getAttribute("headers")
t&&(r=r.concat(t.split(/\s+/)))
var n=e.getAttribute("aria-labelledby")
n&&(r=r.concat(n.split(/\s+/)))}))
var a=t.filter((function(e){return""!==Ru(e.textContent)&&("TH"===e.nodeName.toUpperCase()||-1!==["rowheader","columnheader"].indexOf(e.getAttribute("role")))})),o=xu(e),i=!0
return a.forEach((function(e){if(!e.getAttribute("id")||!r.includes(e.getAttribute("id"))){var t=Au(e,o),a=!1
Tu(e)&&(a=iD("down",t,o).find((function(t){return!Tu(t)&&tD(t,o).includes(e)}))),!a&&Nu(e)&&(a=iD("right",t,o).find((function(t){return!Nu(t)&&tD(t,o).includes(e)}))),a||n.relatedNodes(e),i=i&&a}})),!!i||void 0},"title-only-evaluate":function(e,t,n){var r=Ls(n),a=ns(n),o=n.attr("aria-describedby")
return!(r||!a&&!o)},"unique-frame-title-after":function(e){var t={}
return e.forEach((function(e){t[e.data]=void 0!==t[e.data]?++t[e.data]:0})),e.forEach((function(e){e.result=!!t[e.data]})),e},"unique-frame-title-evaluate":function(e,t,n){var r=Ru(n.attr("title")).toLowerCase()
return this.data(r),!0},"unsupportedrole-evaluate":function(e,t,n){var r=es(n,{dpub:!0,fallback:!0}),a=bu(r)
return a&&this.data(r),a},"valid-lang-evaluate":function(e,t,n){var r=[]
return t.attributes.forEach((function(e){var a=n.attr(e)
if("string"==typeof a){var o=Dh(a),i=t.value?!t.value.map(Dh).includes(o):!zm(o);(""!==o&&i||""!==a&&!Ru(a))&&r.push(e+'="'+n.attr(e)+'"')}})),!(!r.length||"html"!==n.props.nodeName&&!Js(n)||(this.data(r),0))},"valid-scrollable-semantics-evaluate":function(e,t){return function(e,t){var n=wu(e)
return n&&(Xg[n]||t.roles.includes(n))||!1}(e,t)||function(e){var t=e.nodeName.toUpperCase()
return Qg[t]||!1}(e)},"widget-not-inline-matches":function(e,t){return av.every((function(n){return n(e,t)}))},"window-is-top-matches":function(e){return e.ownerDocument.defaultView.self===e.ownerDocument.defaultView.top},"xml-lang-mismatch-evaluate":function(e,t,n){return Dh(n.attr("lang"))===Dh(n.attr("xml:lang"))},"xml-lang-mismatch-matches":function(e){var t=Dh(e.getAttribute("lang")),n=Dh(e.getAttribute("xml:lang"))
return zm(t)&&zm(n)}},hv=fv,mv=function(e){this.id=e.id,this.data=null,this.relatedNodes=[],this.result=null}
function Dv(e){if("string"==typeof e){if(hv[e])return hv[e]
if(/^\s*function[\s\w]*\(/.test(e))return new Function("return "+e+";")()
throw new ReferenceError("Function ID does not exist in the metadata-function-map: ".concat(e))}return e}function gv(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return(Array.isArray(e)||"object"!==o(e))&&(e={value:e}),e}function vv(e){e&&(this.id=e.id,this.configure(e))}vv.prototype.enabled=!0,vv.prototype.run=function(e,t,n,r,a){var o=(t=t||{}).hasOwnProperty("enabled")?t.enabled:this.enabled,i=this.getOptions(t.options)
if(o){var u,s=new mv(this),l=Da(s,t,r,a)
try{u=this.evaluate.call(l,e.actualNode,i,e,n)}catch(t){return e&&e.actualNode&&(t.errorNode=Co.toSpec(e)),void a(t)}l.isAsync||(s.result=u,r(s))}else r(null)},vv.prototype.runSync=function(e,t,n){var r=(t=t||{}).enabled
if(!(void 0===r?this.enabled:r))return null
var a,o=this.getOptions(t.options),i=new mv(this),u=Da(i,t)
u.async=function(){throw new Error("Cannot run async check while in a synchronous run")}
try{a=this.evaluate.call(u,e.actualNode,o,e,n)}catch(t){throw e&&e.actualNode&&(t.errorNode=Co.toSpec(e)),t}return i.result=a,i},vv.prototype.configure=function(e){var t=this
e.evaluate&&!hv[e.evaluate]||(this._internalCheck=!0),e.hasOwnProperty("enabled")&&(this.enabled=e.enabled),e.hasOwnProperty("options")&&(this._internalCheck?this.options=gv(e.options):this.options=e.options),["evaluate","after"].filter((function(t){return e.hasOwnProperty(t)})).forEach((function(n){return t[n]=Dv(e[n])}))},vv.prototype.getOptions=function(e){return this._internalCheck?Bo(this.options,gv(e||{})):e||this.options}
var yv=vv,bv=function(e){this.id=e.id,this.result=mr.NA,this.pageLevel=e.pageLevel,this.impact=null,this.nodes=[]}
function Fv(e,t){this._audit=t,this.id=e.id,this.selector=e.selector||"*",e.impact&&(Sr(mr.impact.includes(e.impact),"Impact ".concat(e.impact," is not a valid impact")),this.impact=e.impact),this.excludeHidden="boolean"!=typeof e.excludeHidden||e.excludeHidden,this.enabled="boolean"!=typeof e.enabled||e.enabled,this.pageLevel="boolean"==typeof e.pageLevel&&e.pageLevel,this.reviewOnFail="boolean"==typeof e.reviewOnFail&&e.reviewOnFail,this.any=e.any||[],this.all=e.all||[],this.none=e.none||[],this.tags=e.tags||[],this.preload=!!e.preload,this.actIds=e.actIds,e.matches&&(this.matches=Dv(e.matches))}function wv(e){if(e.length){var t=!1,n={}
return e.forEach((function(e){var r=e.results.filter((function(e){return e}))
n[e.type]=r,r.length&&(t=!0)})),t?n:null}}Fv.prototype.matches=function(){return!0},Fv.prototype.gather=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n="mark_gather_start_"+this.id,r="mark_gather_end_"+this.id,a="mark_isVisibleToScreenReaders_start_"+this.id,o="mark_isVisibleToScreenReaders_end_"+this.id
t.performanceTimer&&pm.mark(n)
var i=Sm(this.selector,e)
return this.excludeHidden&&(t.performanceTimer&&pm.mark(a),i=i.filter((function(e){return is(e)})),t.performanceTimer&&(pm.mark(o),pm.measure("rule_"+this.id+"#gather_axe.utils.isVisibleToScreenReaders",a,o))),t.performanceTimer&&(pm.mark(r),pm.measure("rule_"+this.id+"#gather",n,r)),i},Fv.prototype.runChecks=function(e,t,n,r,a,o){var i=this,u=La()
this[e].forEach((function(e){var a=i._audit.checks[e.id||e],o=Ah(a,i.id,n)
u.defer((function(e,n){a.run(t,o,r,e,n)}))})),u.then((function(t){t=t.filter((function(e){return e})),a({type:e,results:t})})).catch(o)},Fv.prototype.runChecksSync=function(e,t,n,r){var a=this,o=[]
return this[e].forEach((function(e){var i=a._audit.checks[e.id||e],u=Ah(i,a.id,n)
o.push(i.runSync(t,u,r))})),{type:e,results:o=o.filter((function(e){return e}))}},Fv.prototype.run=function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0
n.performanceTimer&&this._trackPerformance()
var o,i=La(),s=new bv(this)
try{o=this.gatherAndMatchNodes(e,n)}catch(e){return void a(new u({cause:e,ruleId:this.id}))}n.performanceTimer&&this._logGatherPerformance(o),o.forEach((function(r){i.defer((function(a,o){var i=La();["any","all","none"].forEach((function(a){i.defer((function(o,i){t.runChecks(a,r,n,e,o,i)}))})),i.then((function(e){var n=wv(e)
n&&(n.node=new ma(r),s.nodes.push(n),t.reviewOnFail&&(["any","all"].forEach((function(e){n[e].forEach((function(e){!1===e.result&&(e.result=void 0)}))})),n.none.forEach((function(e){!0===e.result&&(e.result=void 0)})))),a()})).catch((function(e){return o(e)}))}))})),i.defer((function(e){return setTimeout(e,0)})),n.performanceTimer&&this._logRulePerformance(),i.then((function(){return r(s)})).catch((function(e){return a(e)}))},Fv.prototype.runSync=function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
n.performanceTimer&&this._trackPerformance()
var r,a=new bv(this)
try{r=this.gatherAndMatchNodes(e,n)}catch(e){throw new u({cause:e,ruleId:this.id})}return n.performanceTimer&&this._logGatherPerformance(r),r.forEach((function(r){var o=[];["any","all","none"].forEach((function(a){o.push(t.runChecksSync(a,r,n,e))}))
var i=wv(o)
i&&(i.node=r.actualNode?new ma(r):null,a.nodes.push(i),t.reviewOnFail&&(["any","all"].forEach((function(e){i[e].forEach((function(e){!1===e.result&&(e.result=void 0)}))})),i.none.forEach((function(e){!0===e.result&&(e.result=void 0)}))))})),n.performanceTimer&&this._logRulePerformance(),a},Fv.prototype._trackPerformance=function(){this._markStart="mark_rule_start_"+this.id,this._markEnd="mark_rule_end_"+this.id,this._markChecksStart="mark_runchecks_start_"+this.id,this._markChecksEnd="mark_runchecks_end_"+this.id},Fv.prototype._logGatherPerformance=function(e){Dr("gather (",e.length,"):",pm.timeElapsed()+"ms"),pm.mark(this._markChecksStart)},Fv.prototype._logRulePerformance=function(){pm.mark(this._markChecksEnd),pm.mark(this._markEnd),pm.measure("runchecks_"+this.id,this._markChecksStart,this._markChecksEnd),pm.measure("rule_"+this.id,this._markStart,this._markEnd)},Fv.prototype.gatherAndMatchNodes=function(e,t){var n=this,r="mark_matches_start_"+this.id,a="mark_matches_end_"+this.id,o=this.gather(e,t)
return t.performanceTimer&&pm.mark(r),o=o.filter((function(t){return n.matches(t.actualNode,t,e)})),t.performanceTimer&&(pm.mark(a),pm.measure("rule_"+this.id+"#matches",r,a)),o},Fv.prototype.after=function(e,t){var n,r=this,a=xo(n=this).map((function(e){var t=n._audit.checks[e.id||e]
return t&&"function"==typeof t.after?t:null})).filter(Boolean),o=this.id
return a.forEach((function(n){var a,i,u,s=(a=e.nodes,i=n.id,u=[],a.forEach((function(e){xo(e).forEach((function(t){t.id===i&&(t.node=e.node,u.push(t))}))})),u),l=Ah(n,o,t),c=n.after(s,l.options)
r.reviewOnFail&&c.forEach((function(e){var t=(r.any.includes(e.id)||r.all.includes(e.id))&&!1===e.result,n=r.none.includes(e.id)&&!0===e.result;(t||n)&&(e.result=void 0)})),s.forEach((function(e){delete e.node,-1===c.indexOf(e)&&(e.filtered=!0)}))})),e.nodes=function(e){var t=["any","all","none"],n=e.nodes.filter((function(e){var n=0
return t.forEach((function(t){e[t]=e[t].filter((function(e){return!0!==e.filtered})),n+=e[t].length})),n>0}))
return e.pageLevel&&n.length&&(n=[n.reduce((function(e,n){if(e)return t.forEach((function(t){e[t].push.apply(e[t],n[t])})),e}))]),n}(e),e},Fv.prototype.configure=function(e){e.hasOwnProperty("selector")&&(this.selector=e.selector),e.hasOwnProperty("excludeHidden")&&(this.excludeHidden="boolean"!=typeof e.excludeHidden||e.excludeHidden),e.hasOwnProperty("enabled")&&(this.enabled="boolean"!=typeof e.enabled||e.enabled),e.hasOwnProperty("pageLevel")&&(this.pageLevel="boolean"==typeof e.pageLevel&&e.pageLevel),e.hasOwnProperty("reviewOnFail")&&(this.reviewOnFail="boolean"==typeof e.reviewOnFail&&e.reviewOnFail),e.hasOwnProperty("any")&&(this.any=e.any),e.hasOwnProperty("all")&&(this.all=e.all),e.hasOwnProperty("none")&&(this.none=e.none),e.hasOwnProperty("tags")&&(this.tags=e.tags),e.hasOwnProperty("actIds")&&(this.actIds=e.actIds),e.hasOwnProperty("matches")&&(this.matches=Dv(e.matches)),e.impact&&(Sr(mr.impact.includes(e.impact),"Impact ".concat(e.impact," is not a valid impact")),this.impact=e.impact)}
var Ev=le(fr()),Cv=/\{\{.+?\}\}/g,xv=function(){function e(t){W(this,e),this.lang="en",this.defaultConfig=t,this.standards=yu,this._init(),this._defaultLocale=null}return K(e,[{key:"_setDefaultLocale",value:function(){if(!this._defaultLocale){for(var e={checks:{},rules:{},failureSummaries:{},incompleteFallbackMessage:"",lang:this.lang},t=Object.keys(this.data.checks),n=0;n<t.length;n++){var r=t[n],a=this.data.checks[r].messages,o=a.pass,i=a.fail,u=a.incomplete
e.checks[r]={pass:o,fail:i,incomplete:u}}for(var s=Object.keys(this.data.rules),l=0;l<s.length;l++){var c=s[l],d=this.data.rules[c],p=d.description,f=d.help
e.rules[c]={description:p,help:f}}for(var h=Object.keys(this.data.failureSummaries),m=0;m<h.length;m++){var D=h[m],g=this.data.failureSummaries[D].failureMessage
e.failureSummaries[D]={failureMessage:g}}e.incompleteFallbackMessage=this.data.incompleteFallbackMessage,this._defaultLocale=e}}},{key:"_resetLocale",value:function(){var e=this._defaultLocale
e&&this.applyLocale(e)}},{key:"_applyCheckLocale",value:function(e){for(var t=Object.keys(e),n=0;n<t.length;n++){var r=t[n]
if(!this.data.checks[r])throw new Error('Locale provided for unknown check: "'.concat(r,'"'))
this.data.checks[r]=Nv(this.data.checks[r],e[r])}}},{key:"_applyRuleLocale",value:function(e){for(var t=Object.keys(e),n=0;n<t.length;n++){var r=t[n]
if(!this.data.rules[r])throw new Error('Locale provided for unknown rule: "'.concat(r,'"'))
this.data.rules[r]=Rv(this.data.rules[r],e[r])}}},{key:"_applyFailureSummaries",value:function(e){for(var t=Object.keys(e),n=0;n<t.length;n++){var r=t[n]
if(!this.data.failureSummaries[r])throw new Error('Locale provided for unknown failureMessage: "'.concat(r,'"'))
this.data.failureSummaries[r]=Bv(this.data.failureSummaries[r],e[r])}}},{key:"applyLocale",value:function(e){this._setDefaultLocale(),e.checks&&this._applyCheckLocale(e.checks),e.rules&&this._applyRuleLocale(e.rules),e.failureSummaries&&this._applyFailureSummaries(e.failureSummaries,"failureSummaries"),e.incompleteFallbackMessage&&(this.data.incompleteFallbackMessage=Sv(this.data.incompleteFallbackMessage,e.incompleteFallbackMessage)),e.lang&&(this.lang=e.lang)}},{key:"setAllowedOrigins",value:function(e){var t=kv()
this.allowedOrigins=[]
var n,r=Q(e)
try{for(r.s();!(n=r.n()).done;){var a=n.value
if(a===mr.allOrigins)return void(this.allowedOrigins=["*"])
a!==mr.sameOrigin?this.allowedOrigins.push(a):t&&this.allowedOrigins.push(t)}}catch(e){r.e(e)}finally{r.f()}}},{key:"_init",value:function(){var e=function(e){var t
if(e?(t=ga(e)).commons=e.commons:t={},t.reporter=t.reporter||null,t.noHtml=t.noHtml||!1,!t.allowedOrigins){var n=kv()
t.allowedOrigins=n?[n]:[]}return t.rules=t.rules||[],t.checks=t.checks||[],t.data=z({checks:{},rules:{}},t.data),t}(this.defaultConfig)
this.lang=e.lang||"en",this.reporter=e.reporter,this.commands={},this.rules=[],this.checks={},this.brand="axe",this.application="axeAPI",this.tagExclude=["experimental"],this.noHtml=e.noHtml,this.allowedOrigins=e.allowedOrigins,Tv(e.rules,this,"addRule"),Tv(e.checks,this,"addCheck"),this.data={},this.data.checks=e.data&&e.data.checks||{},this.data.rules=e.data&&e.data.rules||{},this.data.failureSummaries=e.data&&e.data.failureSummaries||{},this.data.incompleteFallbackMessage=e.data&&e.data.incompleteFallbackMessage||"",this._constructHelpUrls()}},{key:"registerCommand",value:function(e){this.commands[e.id]=e.callback}},{key:"addRule",value:function(e){e.metadata&&(this.data.rules[e.id]=e.metadata)
var t=this.getRule(e.id)
t?t.configure(e):this.rules.push(new Fv(e,this))}},{key:"addCheck",value:function(e){var t=e.metadata
"object"===o(t)&&(this.data.checks[e.id]=t,"object"===o(t.messages)&&Object.keys(t.messages).filter((function(e){return t.messages.hasOwnProperty(e)&&"string"==typeof t.messages[e]})).forEach((function(e){0===t.messages[e].indexOf("function")&&(t.messages[e]=new Function("return "+t.messages[e]+";")())}))),this.checks[e.id]?this.checks[e.id].configure(e):this.checks[e.id]=new yv(e)}},{key:"run",value:function(e,t,n,r){this.normalizeOptions(t),ma.setRunOptions(t),i._selectCache=[]
var a=function(e,t,n){return e.reduce((function(e,r){return Nm(r,t,n)?r.preload?(e.later.push(r),e):(e.now.push(r),e):e}),{now:[],later:[]})}(this.rules,e,t),o=a.now,u=a.later,s=La()
o.forEach((function(n){s.defer(_v(n,e,t))}))
var l=La()
u.length&&l.defer((function(e){wm(t).then((function(t){return e(t)})).catch((function(t){console.warn("Couldn't load preload assets: ",t),e(void 0)}))}))
var c=La()
c.defer(s),c.defer(l),c.then((function(a){var o=a.pop()
if(o&&o.length){var s=o[0]
s&&(e=z({},e,s))}var l=a[0]
if(!u.length)return i._selectCache=void 0,void n(l.filter((function(e){return!!e})))
var c=La()
u.forEach((function(n){var r=_v(n,e,t)
c.defer(r)})),c.then((function(e){i._selectCache=void 0,n(l.concat(e).filter((function(e){return!!e})))})).catch(r)})).catch(r)}},{key:"after",value:function(e,t){var n=this.rules
return e.map((function(e){var r=Ao(n,"id",e.id)
if(!r)throw new Error("Result for unknown rule. You may be running mismatch axe-core versions")
return r.after(e,t)}))}},{key:"getRule",value:function(e){return this.rules.find((function(t){return t.id===e}))}},{key:"normalizeOptions",value:function(e){var t=[],n=[]
if(this.rules.forEach((function(e){n.push(e.id),e.tags.forEach((function(e){t.includes(e)||t.push(e)}))})),["object","string"].includes(o(e.runOnly))){if("string"==typeof e.runOnly&&(e.runOnly=[e.runOnly]),Array.isArray(e.runOnly)){var r=e.runOnly.find((function(e){return t.includes(e)})),a=e.runOnly.find((function(e){return n.includes(e)}))
if(r&&a)throw new Error("runOnly cannot be both rules and tags")
e.runOnly=a?{type:"rule",values:e.runOnly}:{type:"tag",values:e.runOnly}}var u=e.runOnly
if(u.value&&!u.values&&(u.values=u.value,delete u.value),!Array.isArray(u.values)||0===u.values.length)throw new Error("runOnly.values must be a non-empty array")
if(["rule","rules"].includes(u.type))u.type="rule",u.values.forEach((function(e){if(!n.includes(e))throw new Error("unknown rule `"+e+"` in options.runOnly")}))
else{if(!["tag","tags",void 0].includes(u.type))throw new Error("Unknown runOnly type '".concat(u.type,"'"))
u.type="tag"
var s=u.values.filter((function(e){return!t.includes(e)&&!/wcag2[1-3]a{1,3}/.test(e)}))
0!==s.length&&i.log("Could not find tags `"+s.join("`, `")+"`")}}return"object"===o(e.rules)&&Object.keys(e.rules).forEach((function(e){if(!n.includes(e))throw new Error("unknown rule `"+e+"` in options.rules")})),e}},{key:"setBranding",value:function(e){var t={brand:this.brand,application:this.application}
"string"==typeof e&&(this.application=e),e&&e.hasOwnProperty("brand")&&e.brand&&"string"==typeof e.brand&&(this.brand=e.brand),e&&e.hasOwnProperty("application")&&e.application&&"string"==typeof e.application&&(this.application=e.application),this._constructHelpUrls(t)}},{key:"_constructHelpUrls",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=(i.version.match(/^[1-9][0-9]*\.[0-9]+/)||["x.y"])[0]
this.rules.forEach((function(r){e.data.rules[r.id]||(e.data.rules[r.id]={})
var a=e.data.rules[r.id];("string"!=typeof a.helpUrl||t&&a.helpUrl===Ov(t,r.id,n))&&(a.helpUrl=Ov(e,r.id,n))}))}},{key:"resetRulesAndChecks",value:function(){this._init(),this._resetLocale()}}]),e}(),Av=xv
function kv(){return n.origin&&"null"!==n.origin?n.origin:n.location&&n.location.origin&&"null"!==n.location.origin?n.location.origin:void 0}function Tv(e,t,n){var r,a
for(r=0,a=e.length;r<a;r++)t[n](e[r])}var Nv=function(e,t){var n=t.pass,r=t.fail
return"string"==typeof n&&Cv.test(n)&&(n=Ev.default.compile(n)),"string"==typeof r&&Cv.test(r)&&(r=Ev.default.compile(r)),z({},e,{messages:{pass:n||e.messages.pass,fail:r||e.messages.fail,incomplete:"object"===o(e.messages.incomplete)?z({},e.messages.incomplete,t.incomplete):t.incomplete}})},Rv=function(e,t){var n=t.help,r=t.description
return"string"==typeof n&&Cv.test(n)&&(n=Ev.default.compile(n)),"string"==typeof r&&Cv.test(r)&&(r=Ev.default.compile(r)),z({},e,{help:n||e.help,description:r||e.description})},Bv=function(e,t){var n=t.failureMessage
return"string"==typeof n&&Cv.test(n)&&(n=Ev.default.compile(n)),z({},e,{failureMessage:n||e.failureMessage})},Sv=function(e,t){return"string"==typeof t&&Cv.test(t)&&(t=Ev.default.compile(t)),t||e}
function _v(e,t,n){return n.performanceTimer&&pm.mark("mark_rule_start_"+e.id),function(r,a){e.run(t,n,(function(e){r(e)}),(function(t){if(n.debug)a(t)
else{var o=Object.assign(new bv(e),{result:mr.CANTTELL,description:"An error occured while running this rule",message:t.message,stack:t.stack,error:t,errorNode:t.errorNode})
r(o)}}))}}function Ov(e,t,n){var r=e.brand,a=e.application,o=e.lang
return mr.helpUrlBase+r+"/"+(n||i.version.substring(0,i.version.lastIndexOf(".")))+"/"+t+"?application="+encodeURIComponent(a)+(o&&"en"!==o?"&lang="+encodeURIComponent(o):"")}function Mv(e){var t=n&&"Node"in n&&"NodeList"in n,r=!!a
if(!t||!r){if(!e||!e.ownerDocument)throw new Error('Required "window" or "document" globals not defined and cannot be deduced from the context. Either set the globals before running or pass in a valid Element.')
r||(da.set("globalDocumentSet",!0),a=e.ownerDocument),t||(da.set("globalWindowSet",!0),n=a.defaultView)}}var jv=function(){da.get("globalDocumentSet")&&(da.set("globalDocumentSet",!1),a=null),da.get("globalWindowSet")&&(da.set("globalWindowSet",!1),n=null),i._memoizedFns.forEach((function(e){return e.clear()})),da.clear(),i._tree=void 0,i._selectorData=void 0,i._selectCache=void 0}
function Iv(e,t,n,r){try{e=new Vh(e),i._tree=e.flatTree,i._selectorData=Zr(e.flatTree)}catch(e){return jv(),r(e)}var a=La(),o=i._audit
t.performanceTimer&&pm.auditStart(),e.frames.length&&!1!==t.iframes&&a.defer((function(n,r){No(e,t,"rules",null,n,r)})),a.defer((function(n,r){o.run(e,t,n,r)})),a.then((function(a){try{t.performanceTimer&&pm.auditEnd()
var i=To(a.map((function(e){return{results:e}})))
e.initiator&&((i=o.after(i,t)).forEach(xm),i=i.map(kr))
try{n(i,jv)}catch(e){jv(),Dr(e)}}catch(e){jv(),r(e)}})).catch((function(e){jv(),r(e)}))}function Pv(e){this._run=e.run,this._collect=e.collect,this._registry={},e.commands.forEach((function(e){i._audit.registerCommand(e)}))}function qv(e){var t,n,r,u,s=$(e,3),l=s[0],c=s[1],d=s[2],p=new TypeError("axe.run arguments are invalid")
if(!_h(u=l)&&!Oh(u)){if(void 0!==d)throw p
d=c,c=l,l=a}if("object"!==o(c)){if(void 0!==d)throw p
d=c,c={}}if("function"!=typeof d&&void 0!==d)throw p
return(c=ga(c)).reporter=null!==(t=null!==(n=c.reporter)&&void 0!==n?n:null===(r=i._audit)||void 0===r?void 0:r.reporter)&&void 0!==t?t:"v1",{context:l,options:c,callback:d}}n.top!==n&&(go.subscribe("axe.start",(function(e,t,n){var r=n,o=function(e){e instanceof Error==0&&(e=new Error(e)),n(e)},u=e&&e.context||{}
u.hasOwnProperty("include")&&!u.include.length&&(u.include=[a])
var s=e&&e.options||{}
switch(e.command){case"rules":return Iv(u,s,(function(e,t){e=Co.mapRawResults(e),r(e),t()}),o)
case"cleanup-plugin":return Km(r,o)
default:if(i._audit&&i._audit.commands&&i._audit.commands[e.command])return i._audit.commands[e.command](e,n)}})),go.subscribe("axe.ping",(function(e,t,n){n({axe:!0})}))),Pv.prototype.run=function(){return this._run.apply(this,arguments)},Pv.prototype.collect=function(){return this._collect.apply(this,arguments)},Pv.prototype.cleanup=function(e){var t=i.utils.queue(),n=this
Object.keys(this._registry).forEach((function(e){t.defer((function(t){n._registry[e].cleanup(t)}))})),t.then(e)},Pv.prototype.add=function(e){this._registry[e.id]=e}
var Lv=function(){}
function Hv(e){var t=e.frames,n=e.frameSpec
return n?t.map((function(e){return Co.mergeSpecs(e,n)})):t}var zv=function(e,t,n){if("function"==typeof t&&(n=t,t={}),!e||!Array.isArray(e))return n(e)
n(e.map((function(e){for(var t=z({},e),n=0,r=["passes","violations","incomplete","inapplicable"];n<r.length;n++){var a=r[n]
t[a]=Co.mapRawNodeResults(t[a])}return t})))},$v={base:{Audit:Av,CheckResult:mv,Check:yv,Context:Vh,RuleResult:bv,Rule:Fv,metadataFunctionMap:hv},public:{reporters:Ym},helpers:{failureSummary:gh,incompleteFallbackMessage:vh,processAggregate:bh},utils:{setDefaultFrameMessenger:mo,cacheNodeSelectors:ph,getNodesMatchingExpression:sh,convertSelector:Ra},commons:{dom:{nativelyHidden:Wo,displayHidden:Go,visibilityHidden:Ko,contentVisibiltyHidden:Yo,ariaHidden:Qo,opacityHidden:Xo,scrollHidden:Zo,overflowHidden:Jo,clipHidden:ei,areaHidden:ti,detailsHidden:ni}}}
i._thisWillBeDeletedDoNotUse=$v,i.constants=mr,i.log=Dr,i.AbstractVirtualNode=vr,i.SerialVirtualNode=Gm,i.VirtualNode=oh,i._cache=da,i.imports=gl,i.cleanup=Km,i.configure=function(e){var t
if(!(t=i._audit))throw new Error("No audit configured")
if(e.axeVersion||e.ver){var n=e.axeVersion||e.ver
if(!/^\d+\.\d+\.\d+(-canary)?/.test(n))throw new Error("Invalid configured version ".concat(n))
var r=$(n.split("-"),2),a=r[0],o=r[1],u=$(a.split(".").map(Number),3),s=u[0],l=u[1],c=u[2],d=$(i.version.split("-"),2),p=d[0],f=d[1],h=$(p.split(".").map(Number),3),m=h[0],D=h[1],g=h[2]
if(s!==m||D<l||D===l&&g<c||s===m&&l===D&&c===g&&o&&o!==f)throw new Error("Configured version ".concat(n," is not compatible with current axe version ").concat(i.version))}if(e.reporter&&("function"==typeof e.reporter||Qm(e.reporter))&&(t.reporter=e.reporter),e.checks){if(!Array.isArray(e.checks))throw new TypeError("Checks property must be an array")
e.checks.forEach((function(e){if(!e.id)throw new TypeError("Configured check ".concat(JSON.stringify(e)," is invalid. Checks must be an object with at least an id property"))
t.addCheck(e)}))}var v,y=[]
if(e.rules){if(!Array.isArray(e.rules))throw new TypeError("Rules property must be an array")
e.rules.forEach((function(e){if(!e.id)throw new TypeError("Configured rule ".concat(JSON.stringify(e)," is invalid. Rules must be an object with at least an id property"))
y.push(e.id),t.addRule(e)}))}if(e.disableOtherRules&&t.rules.forEach((function(e){!1===y.includes(e.id)&&(e.enabled=!1)})),void 0!==e.branding?t.setBranding(e.branding):t._constructHelpUrls(),e.tagExclude&&(t.tagExclude=e.tagExclude),e.locale&&t.applyLocale(e.locale),e.standards&&(v=e.standards,Object.keys(vu).forEach((function(e){v[e]&&(vu[e]=Bo(vu[e],v[e]))}))),e.noHtml&&(t.noHtml=!0),e.allowedOrigins){if(!Array.isArray(e.allowedOrigins))throw new TypeError("Allowed origins property must be an array")
if(e.allowedOrigins.includes("*"))throw new Error('"*" is not allowed. Use "'.concat(mr.allOrigins,'" instead'))
t.setAllowedOrigins(e.allowedOrigins)}},i.frameMessenger=function(e){go.updateMessenger(e)},i.getRules=function(e){var t=(e=e||[]).length?i._audit.rules.filter((function(t){return!!e.filter((function(e){return-1!==t.tags.indexOf(e)})).length})):i._audit.rules,n=i._audit.data.rules||{}
return t.map((function(e){var t=n[e.id]||{}
return{ruleId:e.id,description:t.description,help:t.help,helpUrl:t.helpUrl,tags:e.tags,actIds:e.actIds}}))},i._load=function(e){i._audit=new Av(e)},i.plugins={},i.registerPlugin=function(e){i.plugins[e.id]=new Pv(e)},i.hasReporter=Qm,i.getReporter=Xm,i.addReporter=function(e,t,n){Ym[e]=t,n&&(Wm=t)},i.reset=function(){var e=i._audit
if(!e)throw new Error("No audit configured")
e.resetRulesAndChecks(),Object.keys(vu).forEach((function(e){vu[e]=gu[e]}))},i._runRules=Iv,i.runVirtualRule=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
n.reporter=n.reporter||i._audit.reporter||"v1",i._selectorData={},t instanceof vr||(t=new Gm(t))
var r=Wh(e)
if(!r)throw new Error("unknown rule `"+e+"`")
var a={initiator:!0,include:[t],exclude:[],frames:[],page:!1,focusable:!0,size:{},flatTree:[]},o=(r=Object.create(r,{excludeHidden:{value:!1}})).runSync(a,n)
xm(o),kr(o)
var u=Rr([o])
return u.violations.forEach((function(e){return e.nodes.forEach((function(e){e.failureSummary=gh(e)}))})),z({},kh(),u,{toolOptions:n})},i.run=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
Mv(t[0])
var r=qv(t),a=r.context,o=r.options,u=r.callback,s=void 0===u?Lv:u,l=function(e){var t,n,r
return"function"==typeof Promise&&e===Lv?t=new Promise((function(e,t){n=t,r=e})):(r=function(t){return e(null,t)},n=function(t){return e(t)}),{thenable:t,reject:n,resolve:r}}(s),c=l.thenable,d=l.resolve,p=l.reject
try{Sr(i._audit,"No audit configured"),Sr(!i._running,"Axe is already running. Use `await axe.run()` to wait for the previous run to finish before starting a new run.")}catch(e){return function(e,t){if("function"!=typeof t||t===Lv)throw e
t(e.message)}(e,s)}return i._running=!0,o.performanceTimer&&i.utils.performanceTimer.start(),i._runRules(a,o,(function(e,t){var n=function(e){i._running=!1,t()
try{p(e)}catch(e){i.log(e)}}
o.performanceTimer&&i.utils.performanceTimer.end()
try{!function(e,t,n,r){var a=Xm(t.reporter)(e,t,n,r)
void 0!==a&&n(a)}(e,o,(function(e){i._running=!1,t()
try{d(e)}catch(e){i.log(e)}}),n)}catch(e){n(e)}}),(function(e){o.performanceTimer&&i.utils.performanceTimer.end(),i._running=!1,s(e),p(e)})),c},i.setup=function(e){if(i._tree)throw new Error("Axe is already setup. Call `axe.teardown()` before calling `axe.setup` again.")
return e&&"object"===o(e.documentElement)&&"object"===o(e.defaultView)&&(e=e.documentElement),Mv(e),i._tree=fh(e),i._selectorData=Zr(i._tree),i._tree[0]},i.teardown=jv,i.runPartial=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
var r=qv(t),a=r.options,o=r.context
Sr(i._audit,"Axe is not configured. Audit is missing."),Sr(!i._running,"Axe is already running. Use `await axe.run()` to wait for the previous run to finish before starting a new run.")
var u=new Vh(o,i._tree)
return i._tree=u.flatTree,i._selectorData=Zr(u.flatTree),i._running=!0,a.elementRef=!1,new Promise((function(e,t){i._audit.run(u,a,e,t)})).then((function(e){e=Co.mapRawResults(e)
var t,n=u.frames.map((function(e){var t=e.node
return Co.toSpec(t)}))
return u.initiator&&(t=kh()),i._running=!1,jv(),{results:e,frames:n,environmentData:t}})).catch((function(e){return i._running=!1,jv(),Promise.reject(e)}))},i.finishRun=function(e){var t,n,r,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
a=ga(a)
var o=(e.find((function(e){return e.environmentData}))||{}).environmentData
i._audit.normalizeOptions(a),a.reporter=null!==(t=null!==(n=a.reporter)&&void 0!==n?n:null===(r=i._audit)||void 0===r?void 0:r.reporter)&&void 0!==t?t:"v1",function(e){var t,n=[],r=Q(e)
try{for(r.s();!(t=r.n()).done;){var a=t.value,o=n.shift()
if(a){a.frameSpec=null!=o?o:null
var i=Hv(a)
n.unshift.apply(n,L(i))}}}catch(e){r.e(e)}finally{r.f()}}(e)
var u=To(e)
return(u=i._audit.after(u,a)).forEach(xm),function(e,t){return new Promise((function(n,r){Xm(t.reporter)(e,t,n,r)}))}(u=u.map(kr),z({environmentData:o},a))},i.commons=$D,i.utils=yr,i.addReporter("na",(function(e,t,n){console.warn('"na" reporter will be deprecated in axe v4.0. Use the "v2" reporter instead.'),"function"==typeof t&&(n=t,t={})
var r=t,a=r.environmentData,o=q(r,w)
n(z({},kh(a),{toolOptions:o},bh(e,t)))})),i.addReporter("no-passes",(function(e,t,n){"function"==typeof t&&(n=t,t={})
var r=t,a=r.environmentData,o=q(r,E)
t.resultTypes=["violations"]
var i=bh(e,t).violations
n(z({},kh(a),{toolOptions:o,violations:i}))})),i.addReporter("rawEnv",(function(e,t,n){"function"==typeof t&&(n=t,t={})
var r=t,a=r.environmentData,o=q(r,C)
zv(e,o,(function(e){var t=kh(a)
n({raw:e,env:t})}))})),i.addReporter("raw",zv),i.addReporter("v1",(function(e,t,n){"function"==typeof t&&(n=t,t={})
var r=t,a=r.environmentData,o=q(r,x),i=bh(e,t),u=function(e){e.nodes.forEach((function(e){e.failureSummary=gh(e)}))}
i.incomplete.forEach(u),i.violations.forEach(u),n(z({},kh(a),{toolOptions:o},i))})),i.addReporter("v2",(function(e,t,n){"function"==typeof t&&(n=t,t={})
var r=t,a=r.environmentData,o=q(r,A),i=bh(e,t)
n(z({},kh(a),{toolOptions:o},i))}),!0)}(),i._load({lang:"en",data:{rules:{accesskeys:{description:"Ensures every accesskey attribute value is unique",help:"accesskey attribute value should be unique"},"area-alt":{description:"Ensures <area> elements of image maps have alternate text",help:"Active <area> elements must have alternate text"},"aria-allowed-attr":{description:"Ensures an element's role supports its ARIA attributes",help:"Elements must only use supported ARIA attributes"},"aria-allowed-role":{description:"Ensures role attribute has an appropriate value for the element",help:"ARIA role should be appropriate for the element"},"aria-braille-equivalent":{description:"Ensure aria-braillelabel and aria-brailleroledescription have a non-braille equivalent",help:"aria-braille attributes must have a non-braille equivalent"},"aria-command-name":{description:"Ensures every ARIA button, link and menuitem has an accessible name",help:"ARIA commands must have an accessible name"},"aria-conditional-attr":{description:"Ensures ARIA attributes are used as described in the specification of the element's role",help:"ARIA attributes must be used as specified for the element's role"},"aria-deprecated-role":{description:"Ensures elements do not use deprecated roles",help:"Deprecated ARIA roles must not be used"},"aria-dialog-name":{description:"Ensures every ARIA dialog and alertdialog node has an accessible name",help:"ARIA dialog and alertdialog nodes should have an accessible name"},"aria-hidden-body":{description:'Ensures aria-hidden="true" is not present on the document body.',help:'aria-hidden="true" must not be present on the document body'},"aria-hidden-focus":{description:"Ensures aria-hidden elements are not focusable nor contain focusable elements",help:"ARIA hidden element must not be focusable or contain focusable elements"},"aria-input-field-name":{description:"Ensures every ARIA input field has an accessible name",help:"ARIA input fields must have an accessible name"},"aria-meter-name":{description:"Ensures every ARIA meter node has an accessible name",help:"ARIA meter nodes must have an accessible name"},"aria-progressbar-name":{description:"Ensures every ARIA progressbar node has an accessible name",help:"ARIA progressbar nodes must have an accessible name"},"aria-prohibited-attr":{description:"Ensures ARIA attributes are not prohibited for an element's role",help:"Elements must only use permitted ARIA attributes"},"aria-required-attr":{description:"Ensures elements with ARIA roles have all required ARIA attributes",help:"Required ARIA attributes must be provided"},"aria-required-children":{description:"Ensures elements with an ARIA role that require child roles contain them",help:"Certain ARIA roles must contain particular children"},"aria-required-parent":{description:"Ensures elements with an ARIA role that require parent roles are contained by them",help:"Certain ARIA roles must be contained by particular parents"},"aria-roledescription":{description:"Ensure aria-roledescription is only used on elements with an implicit or explicit role",help:"aria-roledescription must be on elements with a semantic role"},"aria-roles":{description:"Ensures all elements with a role attribute use a valid value",help:"ARIA roles used must conform to valid values"},"aria-text":{description:'Ensures role="text" is used on elements with no focusable descendants',help:'"role=text" should have no focusable descendants'},"aria-toggle-field-name":{description:"Ensures every ARIA toggle field has an accessible name",help:"ARIA toggle fields must have an accessible name"},"aria-tooltip-name":{description:"Ensures every ARIA tooltip node has an accessible name",help:"ARIA tooltip nodes must have an accessible name"},"aria-treeitem-name":{description:"Ensures every ARIA treeitem node has an accessible name",help:"ARIA treeitem nodes should have an accessible name"},"aria-valid-attr-value":{description:"Ensures all ARIA attributes have valid values",help:"ARIA attributes must conform to valid values"},"aria-valid-attr":{description:"Ensures attributes that begin with aria- are valid ARIA attributes",help:"ARIA attributes must conform to valid names"},"audio-caption":{description:"Ensures <audio> elements have captions",help:"<audio> elements must have a captions track"},"autocomplete-valid":{description:"Ensure the autocomplete attribute is correct and suitable for the form field",help:"autocomplete attribute must be used correctly"},"avoid-inline-spacing":{description:"Ensure that text spacing set through style attributes can be adjusted with custom stylesheets",help:"Inline text spacing must be adjustable with custom stylesheets"},blink:{description:"Ensures <blink> elements are not used",help:"<blink> elements are deprecated and must not be used"},"button-name":{description:"Ensures buttons have discernible text",help:"Buttons must have discernible text"},bypass:{description:"Ensures each page has at least one mechanism for a user to bypass navigation and jump straight to the content",help:"Page must have means to bypass repeated blocks"},"color-contrast-enhanced":{description:"Ensures the contrast between foreground and background colors meets WCAG 2 AAA enhanced contrast ratio thresholds",help:"Elements must meet enhanced color contrast ratio thresholds"},"color-contrast":{description:"Ensures the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds",help:"Elements must meet minimum color contrast ratio thresholds"},"css-orientation-lock":{description:"Ensures content is not locked to any specific display orientation, and the content is operable in all display orientations",help:"CSS Media queries must not lock display orientation"},"definition-list":{description:"Ensures <dl> elements are structured correctly",help:"<dl> elements must only directly contain properly-ordered <dt> and <dd> groups, <script>, <template> or <div> elements"},dlitem:{description:"Ensures <dt> and <dd> elements are contained by a <dl>",help:"<dt> and <dd> elements must be contained by a <dl>"},"document-title":{description:"Ensures each HTML document contains a non-empty <title> element",help:"Documents must have <title> element to aid in navigation"},"duplicate-id-active":{description:"Ensures every id attribute value of active elements is unique",help:"IDs of active elements must be unique"},"duplicate-id-aria":{description:"Ensures every id attribute value used in ARIA and in labels is unique",help:"IDs used in ARIA and labels must be unique"},"duplicate-id":{description:"Ensures every id attribute value is unique",help:"id attribute value must be unique"},"empty-heading":{description:"Ensures headings have discernible text",help:"Headings should not be empty"},"empty-table-header":{description:"Ensures table headers have discernible text",help:"Table header text should not be empty"},"focus-order-semantics":{description:"Ensures elements in the focus order have a role appropriate for interactive content",help:"Elements in the focus order should have an appropriate role"},"form-field-multiple-labels":{description:"Ensures form field does not have multiple label elements",help:"Form field must not have multiple label elements"},"frame-focusable-content":{description:"Ensures <frame> and <iframe> elements with focusable content do not have tabindex=-1",help:"Frames with focusable content must not have tabindex=-1"},"frame-tested":{description:"Ensures <iframe> and <frame> elements contain the axe-core script",help:"Frames should be tested with axe-core"},"frame-title-unique":{description:"Ensures <iframe> and <frame> elements contain a unique title attribute",help:"Frames must have a unique title attribute"},"frame-title":{description:"Ensures <iframe> and <frame> elements have an accessible name",help:"Frames must have an accessible name"},"heading-order":{description:"Ensures the order of headings is semantically correct",help:"Heading levels should only increase by one"},"hidden-content":{description:"Informs users about hidden content.",help:"Hidden content on the page should be analyzed"},"html-has-lang":{description:"Ensures every HTML document has a lang attribute",help:"<html> element must have a lang attribute"},"html-lang-valid":{description:"Ensures the lang attribute of the <html> element has a valid value",help:"<html> element must have a valid value for the lang attribute"},"html-xml-lang-mismatch":{description:"Ensure that HTML elements with both valid lang and xml:lang attributes agree on the base language of the page",help:"HTML elements with lang and xml:lang must have the same base language"},"identical-links-same-purpose":{description:"Ensure that links with the same accessible name serve a similar purpose",help:"Links with the same name must have a similar purpose"},"image-alt":{description:"Ensures <img> elements have alternate text or a role of none or presentation",help:"Images must have alternate text"},"image-redundant-alt":{description:"Ensure image alternative is not repeated as text",help:"Alternative text of images should not be repeated as text"},"input-button-name":{description:"Ensures input buttons have discernible text",help:"Input buttons must have discernible text"},"input-image-alt":{description:'Ensures <input type="image"> elements have alternate text',help:"Image buttons must have alternate text"},"label-content-name-mismatch":{description:"Ensures that elements labelled through their content must have their visible text as part of their accessible name",help:"Elements must have their visible text as part of their accessible name"},"label-title-only":{description:"Ensures that every form element has a visible label and is not solely labeled using hidden labels, or the title or aria-describedby attributes",help:"Form elements should have a visible label"},label:{description:"Ensures every form element has a label",help:"Form elements must have labels"},"landmark-banner-is-top-level":{description:"Ensures the banner landmark is at top level",help:"Banner landmark should not be contained in another landmark"},"landmark-complementary-is-top-level":{description:"Ensures the complementary landmark or aside is at top level",help:"Aside should not be contained in another landmark"},"landmark-contentinfo-is-top-level":{description:"Ensures the contentinfo landmark is at top level",help:"Contentinfo landmark should not be contained in another landmark"},"landmark-main-is-top-level":{description:"Ensures the main landmark is at top level",help:"Main landmark should not be contained in another landmark"},"landmark-no-duplicate-banner":{description:"Ensures the document has at most one banner landmark",help:"Document should not have more than one banner landmark"},"landmark-no-duplicate-contentinfo":{description:"Ensures the document has at most one contentinfo landmark",help:"Document should not have more than one contentinfo landmark"},"landmark-no-duplicate-main":{description:"Ensures the document has at most one main landmark",help:"Document should not have more than one main landmark"},"landmark-one-main":{description:"Ensures the document has a main landmark",help:"Document should have one main landmark"},"landmark-unique":{help:"Ensures landmarks are unique",description:"Landmarks should have a unique role or role/label/title (i.e. accessible name) combination"},"link-in-text-block":{description:"Ensure links are distinguished from surrounding text in a way that does not rely on color",help:"Links must be distinguishable without relying on color"},"link-name":{description:"Ensures links have discernible text",help:"Links must have discernible text"},list:{description:"Ensures that lists are structured correctly",help:"<ul> and <ol> must only directly contain <li>, <script> or <template> elements"},listitem:{description:"Ensures <li> elements are used semantically",help:"<li> elements must be contained in a <ul> or <ol>"},marquee:{description:"Ensures <marquee> elements are not used",help:"<marquee> elements are deprecated and must not be used"},"meta-refresh-no-exceptions":{description:'Ensures <meta http-equiv="refresh"> is not used for delayed refresh',help:"Delayed refresh must not be used"},"meta-refresh":{description:'Ensures <meta http-equiv="refresh"> is not used for delayed refresh',help:"Delayed refresh under 20 hours must not be used"},"meta-viewport-large":{description:'Ensures <meta name="viewport"> can scale a significant amount',help:"Users should be able to zoom and scale the text up to 500%"},"meta-viewport":{description:'Ensures <meta name="viewport"> does not disable text scaling and zooming',help:"Zooming and scaling must not be disabled"},"nested-interactive":{description:"Ensures interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies",help:"Interactive controls must not be nested"},"no-autoplay-audio":{description:"Ensures <video> or <audio> elements do not autoplay audio for more than 3 seconds without a control mechanism to stop or mute the audio",help:"<video> or <audio> elements must not play automatically"},"object-alt":{description:"Ensures <object> elements have alternate text",help:"<object> elements must have alternate text"},"p-as-heading":{description:"Ensure bold, italic text and font-size is not used to style <p> elements as a heading",help:"Styled <p> elements must not be used as headings"},"page-has-heading-one":{description:"Ensure that the page, or at least one of its frames contains a level-one heading",help:"Page should contain a level-one heading"},"presentation-role-conflict":{description:"Elements marked as presentational should not have global ARIA or tabindex to ensure all screen readers ignore them",help:"Ensure elements marked as presentational are consistently ignored"},region:{description:"Ensures all page content is contained by landmarks",help:"All page content should be contained by landmarks"},"role-img-alt":{description:'Ensures [role="img"] elements have alternate text',help:'[role="img"] elements must have an alternative text'},"scope-attr-valid":{description:"Ensures the scope attribute is used correctly on tables",help:"scope attribute should be used correctly"},"scrollable-region-focusable":{description:"Ensure elements that have scrollable content are accessible by keyboard",help:"Scrollable region must have keyboard access"},"select-name":{description:"Ensures select element has an accessible name",help:"Select element must have an accessible name"},"server-side-image-map":{description:"Ensures that server-side image maps are not used",help:"Server-side image maps must not be used"},"skip-link":{description:"Ensure all skip links have a focusable target",help:"The skip-link target should exist and be focusable"},"svg-img-alt":{description:"Ensures <svg> elements with an img, graphics-document or graphics-symbol role have an accessible text",help:"<svg> elements with an img role must have an alternative text"},tabindex:{description:"Ensures tabindex attribute values are not greater than 0",help:"Elements should not have tabindex greater than zero"},"table-duplicate-name":{description:"Ensure the <caption> element does not contain the same text as the summary attribute",help:"tables should not have the same summary and caption"},"table-fake-caption":{description:"Ensure that tables with a caption use the <caption> element.",help:"Data or header cells must not be used to give caption to a data table."},"target-size":{description:"Ensure touch target have sufficient size and space",help:"All touch targets must be 24px large, or leave sufficient space"},"td-has-header":{description:"Ensure that each non-empty data cell in a <table> larger than 3 by 3  has one or more table headers",help:"Non-empty <td> elements in larger <table> must have an associated table header"},"td-headers-attr":{description:"Ensure that each cell in a table that uses the headers attribute refers only to other cells in that table",help:"Table cells that use the headers attribute must only refer to cells in the same table"},"th-has-data-cells":{description:"Ensure that <th> elements and elements with role=columnheader/rowheader have data cells they describe",help:"Table headers in a data table must refer to data cells"},"valid-lang":{description:"Ensures lang attributes have valid values",help:"lang attribute must have a valid value"},"video-caption":{description:"Ensures <video> elements have captions",help:"<video> elements must have captions"}},checks:{abstractrole:{impact:"serious",messages:{pass:"Abstract roles are not used",fail:{singular:"Abstract role cannot be directly used: ${data.values}",plural:"Abstract roles cannot be directly used: ${data.values}"}}},"aria-allowed-attr":{impact:"critical",messages:{pass:"ARIA attributes are used correctly for the defined role",fail:{singular:"ARIA attribute is not allowed: ${data.values}",plural:"ARIA attributes are not allowed: ${data.values}"},incomplete:"Check that there is no problem if the ARIA attribute is ignored on this element: ${data.values}"}},"aria-allowed-role":{impact:"minor",messages:{pass:"ARIA role is allowed for given element",fail:{singular:"ARIA role ${data.values} is not allowed for given element",plural:"ARIA roles ${data.values} are not allowed for given element"},incomplete:{singular:"ARIA role ${data.values} must be removed when the element is made visible, as it is not allowed for the element",plural:"ARIA roles ${data.values} must be removed when the element is made visible, as they are not allowed for the element"}}},"aria-busy":{impact:"serious",messages:{pass:"Element has an aria-busy attribute",fail:'Element uses aria-busy="true" while showing a loader'}},"aria-conditional-attr":{impact:"serious",messages:{pass:"ARIA attribute is allowed",fail:{checkbox:'Remove aria-checked, or set it to "${data.checkState}" to match the real checkbox state',rowSingular:"This attribute is supported with treegrid rows, but not ${data.ownerRole}: ${data.invalidAttrs}",rowPlural:"These attributes are supported with treegrid rows, but not ${data.ownerRole}: ${data.invalidAttrs}"}}},"aria-errormessage":{impact:"critical",messages:{pass:"aria-errormessage exists and references elements visible to screen readers that use a supported aria-errormessage technique",fail:{singular:"aria-errormessage value `${data.values}` must use a technique to announce the message (e.g., aria-live, aria-describedby, role=alert, etc.)",plural:"aria-errormessage values `${data.values}` must use a technique to announce the message (e.g., aria-live, aria-describedby, role=alert, etc.)",hidden:"aria-errormessage value `${data.values}` cannot reference a hidden element"},incomplete:{singular:"ensure aria-errormessage value `${data.values}` references an existing element",plural:"ensure aria-errormessage values `${data.values}` reference existing elements",idrefs:"unable to determine if aria-errormessage element exists on the page: ${data.values}"}}},"aria-hidden-body":{impact:"critical",messages:{pass:"No aria-hidden attribute is present on document body",fail:"aria-hidden=true should not be present on the document body"}},"aria-level":{impact:"serious",messages:{pass:"aria-level values are valid",incomplete:"aria-level values greater than 6 are not supported in all screenreader and browser combinations"}},"aria-prohibited-attr":{impact:"serious",messages:{pass:"ARIA attribute is allowed",fail:{hasRolePlural:'${data.prohibited} attributes cannot be used with role "${data.role}".',hasRoleSingular:'${data.prohibited} attribute cannot be used with role "${data.role}".',noRolePlural:"${data.prohibited} attributes cannot be used on a ${data.nodeName} with no valid role attribute.",noRoleSingular:"${data.prohibited} attribute cannot be used on a ${data.nodeName} with no valid role attribute."},incomplete:{hasRoleSingular:'${data.prohibited} attribute is not well supported with role "${data.role}".',hasRolePlural:'${data.prohibited} attributes are not well supported with role "${data.role}".',noRoleSingular:"${data.prohibited} attribute is not well supported on a ${data.nodeName} with no valid role attribute.",noRolePlural:"${data.prohibited} attributes are not well supported on a ${data.nodeName} with no valid role attribute."}}},"aria-required-attr":{impact:"critical",messages:{pass:"All required ARIA attributes are present",fail:{singular:"Required ARIA attribute not present: ${data.values}",plural:"Required ARIA attributes not present: ${data.values}"}}},"aria-required-children":{impact:"critical",messages:{pass:{default:"Required ARIA children are present","aria-busy":"Element has an aria-busy attribute, so it is allowed to omit required children"},fail:{singular:"Required ARIA child role not present: ${data.values}",plural:"Required ARIA children role not present: ${data.values}",unallowed:"Element has children which are not allowed: ${data.values}"},incomplete:{singular:"Expecting ARIA child role to be added: ${data.values}",plural:"Expecting ARIA children role to be added: ${data.values}"}}},"aria-required-parent":{impact:"critical",messages:{pass:"Required ARIA parent role present",fail:{singular:"Required ARIA parent role not present: ${data.values}",plural:"Required ARIA parents role not present: ${data.values}"}}},"aria-roledescription":{impact:"serious",messages:{pass:"aria-roledescription used on a supported semantic role",incomplete:"Check that the aria-roledescription is announced by supported screen readers",fail:"Give the element a role that supports aria-roledescription"}},"aria-unsupported-attr":{impact:"critical",messages:{pass:"ARIA attribute is supported",fail:"ARIA attribute is not widely supported in screen readers and assistive technologies: ${data.values}"}},"aria-valid-attr-value":{impact:"critical",messages:{pass:"ARIA attribute values are valid",fail:{singular:"Invalid ARIA attribute value: ${data.values}",plural:"Invalid ARIA attribute values: ${data.values}"},incomplete:{noId:"ARIA attribute element ID does not exist on the page: ${data.needsReview}",noIdShadow:"ARIA attribute element ID does not exist on the page or is a descendant of a different shadow DOM tree: ${data.needsReview}",ariaCurrent:'ARIA attribute value is invalid and will be treated as "aria-current=true": ${data.needsReview}',idrefs:"Unable to determine if ARIA attribute element ID exists on the page: ${data.needsReview}",empty:"ARIA attribute value is ignored while empty: ${data.needsReview}"}}},"aria-valid-attr":{impact:"critical",messages:{pass:"ARIA attribute name is valid",fail:{singular:"Invalid ARIA attribute name: ${data.values}",plural:"Invalid ARIA attribute names: ${data.values}"}}},"braille-label-equivalent":{impact:"serious",messages:{pass:"aria-braillelabel is used on an element with accessible text",fail:"aria-braillelabel is used on an element with no accessible text",incomplete:"Unable to compute accessible text"}},"braille-roledescription-equivalent":{impact:"serious",messages:{pass:"aria-brailleroledescription is used on an element with aria-roledescription",fail:{noRoleDescription:"aria-brailleroledescription is used on an element with no aria-roledescription",emptyRoleDescription:"aria-brailleroledescription is used on an element with an empty aria-roledescription"}}},deprecatedrole:{impact:"minor",messages:{pass:"ARIA role is not deprecated",fail:"The role used is deprecated: ${data}"}},fallbackrole:{impact:"serious",messages:{pass:"Only one role value used",fail:"Use only one role value, since fallback roles are not supported in older browsers",incomplete:"Use only role 'presentation' or 'none' since they are synonymous."}},"has-global-aria-attribute":{impact:"minor",messages:{pass:{singular:"Element has global ARIA attribute: ${data.values}",plural:"Element has global ARIA attributes: ${data.values}"},fail:"Element does not have global ARIA attribute"}},"has-widget-role":{impact:"minor",messages:{pass:"Element has a widget role.",fail:"Element does not have a widget role."}},invalidrole:{impact:"critical",messages:{pass:"ARIA role is valid",fail:{singular:"Role must be one of the valid ARIA roles: ${data.values}",plural:"Roles must be one of the valid ARIA roles: ${data.values}"}}},"is-element-focusable":{impact:"minor",messages:{pass:"Element is focusable.",fail:"Element is not focusable."}},"no-implicit-explicit-label":{impact:"serious",messages:{pass:"There is no mismatch between a <label> and accessible name",incomplete:"Check that the <label> does not need be part of the ARIA ${data} field's name"}},unsupportedrole:{impact:"critical",messages:{pass:"ARIA role is supported",fail:"The role used is not widely supported in screen readers and assistive technologies: ${data}"}},"valid-scrollable-semantics":{impact:"minor",messages:{pass:"Element has valid semantics for an element in the focus order.",fail:"Element has invalid semantics for an element in the focus order."}},"color-contrast-enhanced":{impact:"serious",messages:{pass:"Element has sufficient color contrast of ${data.contrastRatio}",fail:{default:"Element has insufficient color contrast of ${data.contrastRatio} (foreground color: ${data.fgColor}, background color: ${data.bgColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}",fgOnShadowColor:"Element has insufficient color contrast of ${data.contrastRatio} between the foreground and shadow color (foreground color: ${data.fgColor}, text-shadow color: ${data.shadowColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}",shadowOnBgColor:"Element has insufficient color contrast of ${data.contrastRatio} between the shadow color and background color (text-shadow color: ${data.shadowColor}, background color: ${data.bgColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}"},incomplete:{default:"Unable to determine contrast ratio",bgImage:"Element's background color could not be determined due to a background image",bgGradient:"Element's background color could not be determined due to a background gradient",imgNode:"Element's background color could not be determined because element contains an image node",bgOverlap:"Element's background color could not be determined because it is overlapped by another element",fgAlpha:"Element's foreground color could not be determined because of alpha transparency",elmPartiallyObscured:"Element's background color could not be determined because it's partially obscured by another element",elmPartiallyObscuring:"Element's background color could not be determined because it partially overlaps other elements",outsideViewport:"Element's background color could not be determined because it's outside the viewport",equalRatio:"Element has a 1:1 contrast ratio with the background",shortTextContent:"Element content is too short to determine if it is actual text content",nonBmp:"Element content contains only non-text characters",pseudoContent:"Element's background color could not be determined due to a pseudo element"}}},"color-contrast":{impact:"serious",messages:{pass:{default:"Element has sufficient color contrast of ${data.contrastRatio}",hidden:"Element is hidden"},fail:{default:"Element has insufficient color contrast of ${data.contrastRatio} (foreground color: ${data.fgColor}, background color: ${data.bgColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}",fgOnShadowColor:"Element has insufficient color contrast of ${data.contrastRatio} between the foreground and shadow color (foreground color: ${data.fgColor}, text-shadow color: ${data.shadowColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}",shadowOnBgColor:"Element has insufficient color contrast of ${data.contrastRatio} between the shadow color and background color (text-shadow color: ${data.shadowColor}, background color: ${data.bgColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}"},incomplete:{default:"Unable to determine contrast ratio",bgImage:"Element's background color could not be determined due to a background image",bgGradient:"Element's background color could not be determined due to a background gradient",imgNode:"Element's background color could not be determined because element contains an image node",bgOverlap:"Element's background color could not be determined because it is overlapped by another element",complexTextShadows:"Element's contrast could not be determined because it uses complex text shadows",fgAlpha:"Element's foreground color could not be determined because of alpha transparency",elmPartiallyObscured:"Element's background color could not be determined because it's partially obscured by another element",elmPartiallyObscuring:"Element's background color could not be determined because it partially overlaps other elements",outsideViewport:"Element's background color could not be determined because it's outside the viewport",equalRatio:"Element has a 1:1 contrast ratio with the background",shortTextContent:"Element content is too short to determine if it is actual text content",nonBmp:"Element content contains only non-text characters",pseudoContent:"Element's background color could not be determined due to a pseudo element"}}},"link-in-text-block-style":{impact:"serious",messages:{pass:"Links can be distinguished from surrounding text by visual styling",incomplete:{default:"Check if the link needs styling to distinguish it from nearby text",pseudoContent:"Check if the link's pseudo style is sufficient to distinguish it from the surrounding text"},fail:"The link has no styling (such as underline) to distinguish it from the surrounding text"}},"link-in-text-block":{impact:"serious",messages:{pass:"Links can be distinguished from surrounding text in some way other than by color",fail:{fgContrast:"The link has insufficient color contrast of ${data.contrastRatio}:1 with the surrounding text. (Minimum contrast is ${data.requiredContrastRatio}:1, link text: ${data.nodeColor}, surrounding text: ${data.parentColor})",bgContrast:"The link background has insufficient color contrast of ${data.contrastRatio} (Minimum contrast is ${data.requiredContrastRatio}:1, link background color: ${data.nodeBackgroundColor}, surrounding background color: ${data.parentBackgroundColor})"},incomplete:{default:"Element's foreground contrast ratio could not be determined",bgContrast:"Element's background contrast ratio could not be determined",bgImage:"Element's contrast ratio could not be determined due to a background image",bgGradient:"Element's contrast ratio could not be determined due to a background gradient",imgNode:"Element's contrast ratio could not be determined because element contains an image node",bgOverlap:"Element's contrast ratio could not be determined because of element overlap"}}},"autocomplete-appropriate":{impact:"serious",messages:{pass:"the autocomplete value is on an appropriate element",fail:"the autocomplete value is inappropriate for this type of input"}},"autocomplete-valid":{impact:"serious",messages:{pass:"the autocomplete attribute is correctly formatted",fail:"the autocomplete attribute is incorrectly formatted"}},accesskeys:{impact:"serious",messages:{pass:"Accesskey attribute value is unique",fail:"Document has multiple elements with the same accesskey"}},"focusable-content":{impact:"serious",messages:{pass:"Element contains focusable elements",fail:"Element should have focusable content"}},"focusable-disabled":{impact:"serious",messages:{pass:"No focusable elements contained within element",incomplete:"Check if the focusable elements immediately move the focus indicator",fail:"Focusable content should be disabled or be removed from the DOM"}},"focusable-element":{impact:"serious",messages:{pass:"Element is focusable",fail:"Element should be focusable"}},"focusable-modal-open":{impact:"serious",messages:{pass:"No focusable elements while a modal is open",incomplete:"Check that focusable elements are not tabbable in the current state"}},"focusable-no-name":{impact:"serious",messages:{pass:"Element is not in tab order or has accessible text",fail:"Element is in tab order and does not have accessible text",incomplete:"Unable to determine if element has an accessible name"}},"focusable-not-tabbable":{impact:"serious",messages:{pass:"No focusable elements contained within element",incomplete:"Check if the focusable elements immediately move the focus indicator",fail:'Focusable content should have tabindex="-1" or be removed from the DOM'}},"frame-focusable-content":{impact:"serious",messages:{pass:"Element does not have focusable descendants",fail:"Element has focusable descendants",incomplete:"Could not determine if element has descendants"}},"landmark-is-top-level":{impact:"moderate",messages:{pass:"The ${data.role} landmark is at the top level.",fail:"The ${data.role} landmark is contained in another landmark."}},"no-focusable-content":{impact:"serious",messages:{pass:"Element does not have focusable descendants",fail:{default:"Element has focusable descendants",notHidden:'Using a negative tabindex on an element inside an interactive control does not prevent assistive technologies from focusing the element (even with aria-hidden="true")'},incomplete:"Could not determine if element has descendants"}},"page-has-heading-one":{impact:"moderate",messages:{pass:"Page has at least one level-one heading",fail:"Page must have a level-one heading"}},"page-has-main":{impact:"moderate",messages:{pass:"Document has at least one main landmark",fail:"Document does not have a main landmark"}},"page-no-duplicate-banner":{impact:"moderate",messages:{pass:"Document does not have more than one banner landmark",fail:"Document has more than one banner landmark"}},"page-no-duplicate-contentinfo":{impact:"moderate",messages:{pass:"Document does not have more than one contentinfo landmark",fail:"Document has more than one contentinfo landmark"}},"page-no-duplicate-main":{impact:"moderate",messages:{pass:"Document does not have more than one main landmark",fail:"Document has more than one main landmark"}},tabindex:{impact:"serious",messages:{pass:"Element does not have a tabindex greater than 0",fail:"Element has a tabindex greater than 0"}},"alt-space-value":{impact:"critical",messages:{pass:"Element has a valid alt attribute value",fail:"Element has an alt attribute containing only a space character, which is not ignored by all screen readers"}},"duplicate-img-label":{impact:"minor",messages:{pass:"Element does not duplicate existing text in <img> alt text",fail:"Element contains <img> element with alt text that duplicates existing text"}},"explicit-label":{impact:"critical",messages:{pass:"Form element has an explicit <label>",fail:"Form element does not have an explicit <label>",incomplete:"Unable to determine if form element has an explicit <label>"}},"help-same-as-label":{impact:"minor",messages:{pass:"Help text (title or aria-describedby) does not duplicate label text",fail:"Help text (title or aria-describedby) text is the same as the label text"}},"hidden-explicit-label":{impact:"critical",messages:{pass:"Form element has a visible explicit <label>",fail:"Form element has explicit <label> that is hidden",incomplete:"Unable to determine if form element has explicit <label> that is hidden"}},"implicit-label":{impact:"critical",messages:{pass:"Form element has an implicit (wrapped) <label>",fail:"Form element does not have an implicit (wrapped) <label>",incomplete:"Unable to determine if form element has an implicit (wrapped} <label>"}},"label-content-name-mismatch":{impact:"serious",messages:{pass:"Element contains visible text as part of it's accessible name",fail:"Text inside the element is not included in the accessible name"}},"multiple-label":{impact:"moderate",messages:{pass:"Form field does not have multiple label elements",incomplete:"Multiple label elements is not widely supported in assistive technologies. Ensure the first label contains all necessary information."}},"title-only":{impact:"serious",messages:{pass:"Form element does not solely use title attribute for its label",fail:"Only title used to generate label for form element"}},"landmark-is-unique":{impact:"moderate",messages:{pass:"Landmarks must have a unique role or role/label/title (i.e. accessible name) combination",fail:"The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable"}},"has-lang":{impact:"serious",messages:{pass:"The <html> element has a lang attribute",fail:{noXHTML:"The xml:lang attribute is not valid on HTML pages, use the lang attribute.",noLang:"The <html> element does not have a lang attribute"}}},"valid-lang":{impact:"serious",messages:{pass:"Value of lang attribute is included in the list of valid languages",fail:"Value of lang attribute not included in the list of valid languages"}},"xml-lang-mismatch":{impact:"moderate",messages:{pass:"Lang and xml:lang attributes have the same base language",fail:"Lang and xml:lang attributes do not have the same base language"}},dlitem:{impact:"serious",messages:{pass:"Description list item has a <dl> parent element",fail:"Description list item does not have a <dl> parent element"}},listitem:{impact:"serious",messages:{pass:'List item has a <ul>, <ol> or role="list" parent element',fail:{default:"List item does not have a <ul>, <ol> parent element",roleNotValid:'List item parent element has a role that is not role="list"'}}},"only-dlitems":{impact:"serious",messages:{pass:"dl element only has direct children that are allowed inside; <dt>, <dd>, or <div> elements",fail:"dl element has direct children that are not allowed: ${data.values}"}},"only-listitems":{impact:"serious",messages:{pass:"List element only has direct children that are allowed inside <li> elements",fail:"List element has direct children that are not allowed: ${data.values}"}},"structured-dlitems":{impact:"serious",messages:{pass:"When not empty, element has both <dt> and <dd> elements",fail:"When not empty, element does not have at least one <dt> element followed by at least one <dd> element"}},caption:{impact:"critical",messages:{pass:"The multimedia element has a captions track",incomplete:"Check that captions is available for the element"}},"frame-tested":{impact:"critical",messages:{pass:"The iframe was tested with axe-core",fail:"The iframe could not be tested with axe-core",incomplete:"The iframe still has to be tested with axe-core"}},"no-autoplay-audio":{impact:"moderate",messages:{pass:"<video> or <audio> does not output audio for more than allowed duration or has controls mechanism",fail:"<video> or <audio> outputs audio for more than allowed duration and does not have a controls mechanism",incomplete:"Check that the <video> or <audio> does not output audio for more than allowed duration or provides a controls mechanism"}},"css-orientation-lock":{impact:"serious",messages:{pass:"Display is operable, and orientation lock does not exist",fail:"CSS Orientation lock is applied, and makes display inoperable",incomplete:"CSS Orientation lock cannot be determined"}},"meta-viewport-large":{impact:"minor",messages:{pass:"<meta> tag does not prevent significant zooming on mobile devices",fail:"<meta> tag limits zooming on mobile devices"}},"meta-viewport":{impact:"critical",messages:{pass:"<meta> tag does not disable zooming on mobile devices",fail:"${data} on <meta> tag disables zooming on mobile devices"}},"target-offset":{impact:"serious",messages:{pass:{default:"Target has sufficient space from its closest neighbors. Safe clickable space has a diameter of ${data.closestOffset}px which is at least ${data.minOffset}px.",large:"Target far exceeds the minimum size of ${data.minOffset}px."},fail:"Target has insufficient space to its closest neighbors. Safe clickable space has a diameter of ${data.closestOffset}px instead of at least ${data.minOffset}px.",incomplete:{default:"Element with negative tabindex has insufficient space to its closest neighbors. Safe clickable space has a diameter of ${data.closestOffset}px instead of at least ${data.minOffset}px. Is this a target?",nonTabbableNeighbor:"Target has insufficient space to its closest neighbors. Safe clickable space has a diameter of ${data.closestOffset}px instead of at least ${data.minOffset}px. Is the neighbor a target?"}}},"target-size":{impact:"serious",messages:{pass:{default:"Control has sufficient size (${data.width}px by ${data.height}px, should be at least ${data.minSize}px by ${data.minSize}px)",obscured:"Control is ignored because it is fully obscured and thus not clickable",large:"Target far exceeds the minimum size of ${data.minSize}px."},fail:{default:"Target has insufficient size (${data.width}px by ${data.height}px, should be at least ${data.minSize}px by ${data.minSize}px)",partiallyObscured:"Target has insufficient size because it is partially obscured (smallest space is ${data.width}px by ${data.height}px, should be at least ${data.minSize}px by ${data.minSize}px)"},incomplete:{default:"Element with negative tabindex has insufficient size (${data.width}px by ${data.height}px, should be at least ${data.minSize}px by ${data.minSize}px). Is this a target?",contentOverflow:"Element size could not be accurately determined due to overflow content",partiallyObscured:"Element with negative tabindex has insufficient size because it is partially obscured (smallest space is ${data.width}px by ${data.height}px, should be at least ${data.minSize}px by ${data.minSize}px). Is this a target?",partiallyObscuredNonTabbable:"Target has insufficient size because it is partially obscured by a neighbor with negative tabindex (smallest space is ${data.width}px by ${data.height}px, should be at least ${data.minSize}px by ${data.minSize}px). Is the neighbor a target?",tooManyRects:"Could not get the target size because there are too many overlapping elements"}}},"header-present":{impact:"serious",messages:{pass:"Page has a heading",fail:"Page does not have a heading"}},"heading-order":{impact:"moderate",messages:{pass:"Heading order valid",fail:"Heading order invalid",incomplete:"Unable to determine previous heading"}},"identical-links-same-purpose":{impact:"minor",messages:{pass:"There are no other links with the same name, that go to a different URL",incomplete:"Check that links have the same purpose, or are intentionally ambiguous."}},"internal-link-present":{impact:"serious",messages:{pass:"Valid skip link found",fail:"No valid skip link found"}},landmark:{impact:"serious",messages:{pass:"Page has a landmark region",fail:"Page does not have a landmark region"}},"meta-refresh-no-exceptions":{impact:"minor",messages:{pass:"<meta> tag does not immediately refresh the page",fail:"<meta> tag forces timed refresh of page"}},"meta-refresh":{impact:"critical",messages:{pass:"<meta> tag does not immediately refresh the page",fail:"<meta> tag forces timed refresh of page (less than 20 hours)"}},"p-as-heading":{impact:"serious",messages:{pass:"<p> elements are not styled as headings",fail:"Heading elements should be used instead of styled <p> elements",incomplete:"Unable to determine if <p> elements are styled as headings"}},region:{impact:"moderate",messages:{pass:"All page content is contained by landmarks",fail:"Some page content is not contained by landmarks"}},"skip-link":{impact:"moderate",messages:{pass:"Skip link target exists",incomplete:"Skip link target should become visible on activation",fail:"No skip link target"}},"unique-frame-title":{impact:"serious",messages:{pass:"Element's title attribute is unique",fail:"Element's title attribute is not unique"}},"duplicate-id-active":{impact:"serious",messages:{pass:"Document has no active elements that share the same id attribute",fail:"Document has active elements with the same id attribute: ${data}"}},"duplicate-id-aria":{impact:"critical",messages:{pass:"Document has no elements referenced with ARIA or labels that share the same id attribute",fail:"Document has multiple elements referenced with ARIA with the same id attribute: ${data}"}},"duplicate-id":{impact:"minor",messages:{pass:"Document has no static elements that share the same id attribute",fail:"Document has multiple static elements with the same id attribute: ${data}"}},"aria-label":{impact:"serious",messages:{pass:"aria-label attribute exists and is not empty",fail:"aria-label attribute does not exist or is empty"}},"aria-labelledby":{impact:"serious",messages:{pass:"aria-labelledby attribute exists and references elements that are visible to screen readers",fail:"aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty",incomplete:"ensure aria-labelledby references an existing element"}},"avoid-inline-spacing":{impact:"serious",messages:{pass:"No inline styles with '!important' that affect text spacing has been specified",fail:{singular:"Remove '!important' from inline style ${data.values}, as overriding this is not supported by most browsers",plural:"Remove '!important' from inline styles ${data.values}, as overriding this is not supported by most browsers"}}},"button-has-visible-text":{impact:"critical",messages:{pass:"Element has inner text that is visible to screen readers",fail:"Element does not have inner text that is visible to screen readers",incomplete:"Unable to determine if element has children"}},"doc-has-title":{impact:"serious",messages:{pass:"Document has a non-empty <title> element",fail:"Document does not have a non-empty <title> element"}},exists:{impact:"minor",messages:{pass:"Element does not exist",incomplete:"Element exists"}},"has-alt":{impact:"critical",messages:{pass:"Element has an alt attribute",fail:"Element does not have an alt attribute"}},"has-visible-text":{impact:"minor",messages:{pass:"Element has text that is visible to screen readers",fail:"Element does not have text that is visible to screen readers",incomplete:"Unable to determine if element has children"}},"important-letter-spacing":{impact:"serious",messages:{pass:"Letter-spacing in the style attribute is not set to !important, or meets the minimum",fail:"letter-spacing in the style attribute must not use !important, or be at ${data.minValue}em (current ${data.value}em)"}},"important-line-height":{impact:"serious",messages:{pass:"line-height in the style attribute is not set to !important, or meets the minimum",fail:"line-height in the style attribute must not use !important, or be at ${data.minValue}em (current ${data.value}em)"}},"important-word-spacing":{impact:"serious",messages:{pass:"word-spacing in the style attribute is not set to !important, or meets the minimum",fail:"word-spacing in the style attribute must not use !important, or be at ${data.minValue}em (current ${data.value}em)"}},"is-on-screen":{impact:"serious",messages:{pass:"Element is not visible",fail:"Element is visible"}},"non-empty-alt":{impact:"critical",messages:{pass:"Element has a non-empty alt attribute",fail:{noAttr:"Element has no alt attribute",emptyAttr:"Element has an empty alt attribute"}}},"non-empty-if-present":{impact:"critical",messages:{pass:{default:"Element does not have a value attribute","has-label":"Element has a non-empty value attribute"},fail:"Element has a value attribute and the value attribute is empty"}},"non-empty-placeholder":{impact:"serious",messages:{pass:"Element has a placeholder attribute",fail:{noAttr:"Element has no placeholder attribute",emptyAttr:"Element has an empty placeholder attribute"}}},"non-empty-title":{impact:"serious",messages:{pass:"Element has a title attribute",fail:{noAttr:"Element has no title attribute",emptyAttr:"Element has an empty title attribute"}}},"non-empty-value":{impact:"critical",messages:{pass:"Element has a non-empty value attribute",fail:{noAttr:"Element has no value attribute",emptyAttr:"Element has an empty value attribute"}}},"presentational-role":{impact:"minor",messages:{pass:'Element\'s default semantics were overriden with role="${data.role}"',fail:{default:'Element\'s default semantics were not overridden with role="none" or role="presentation"',globalAria:"Element's role is not presentational because it has a global ARIA attribute",focusable:"Element's role is not presentational because it is focusable",both:"Element's role is not presentational because it has a global ARIA attribute and is focusable",iframe:'Using the "title" attribute on an ${data.nodeName} element with a presentational role behaves inconsistently between screen readers'}}},"role-none":{impact:"minor",messages:{pass:'Element\'s default semantics were overriden with role="none"',fail:'Element\'s default semantics were not overridden with role="none"'}},"role-presentation":{impact:"minor",messages:{pass:'Element\'s default semantics were overriden with role="presentation"',fail:'Element\'s default semantics were not overridden with role="presentation"'}},"svg-non-empty-title":{impact:"serious",messages:{pass:"Element has a child that is a title",fail:{noTitle:"Element has no child that is a title",emptyTitle:"Element child title is empty"},incomplete:"Unable to determine element has a child that is a title"}},"caption-faked":{impact:"serious",messages:{pass:"The first row of a table is not used as a caption",fail:"The first child of the table should be a caption instead of a table cell"}},"html5-scope":{impact:"moderate",messages:{pass:"Scope attribute is only used on table header elements (<th>)",fail:"In HTML 5, scope attributes may only be used on table header elements (<th>)"}},"same-caption-summary":{impact:"minor",messages:{pass:"Content of summary attribute and <caption> are not duplicated",fail:"Content of summary attribute and <caption> element are identical",incomplete:"Unable to determine if <table> element has a caption"}},"scope-value":{impact:"critical",messages:{pass:"Scope attribute is used correctly",fail:"The value of the scope attribute may only be 'row' or 'col'"}},"td-has-header":{impact:"critical",messages:{pass:"All non-empty data cells have table headers",fail:"Some non-empty data cells do not have table headers"}},"td-headers-attr":{impact:"serious",messages:{pass:"The headers attribute is exclusively used to refer to other cells in the table",incomplete:"The headers attribute is empty",fail:"The headers attribute is not exclusively used to refer to other cells in the table"}},"th-has-data-cells":{impact:"serious",messages:{pass:"All table header cells refer to data cells",fail:"Not all table header cells refer to data cells",incomplete:"Table data cells are missing or empty"}},"hidden-content":{impact:"minor",messages:{pass:"All content on the page has been analyzed.",fail:"There were problems analyzing the content on this page.",incomplete:"There is hidden content on the page that was not analyzed. You will need to trigger the display of this content in order to analyze it."}}},failureSummaries:{any:{failureMessage:function(e){var t="Fix any of the following:",n=e
if(n)for(var r=-1,a=n.length-1;r<a;)t+="\n  "+n[r+=1].split("\n").join("\n  ")
return t}},none:{failureMessage:function(e){var t="Fix all of the following:",n=e
if(n)for(var r=-1,a=n.length-1;r<a;)t+="\n  "+n[r+=1].split("\n").join("\n  ")
return t}}},incompleteFallbackMessage:"axe couldn't tell the reason. Time to break out the element inspector!"},rules:[{id:"accesskeys",impact:"serious",selector:"[accesskey]",excludeHidden:!1,tags:["cat.keyboard","best-practice"],all:[],any:[],none:["accesskeys"]},{id:"area-alt",impact:"critical",selector:"map area[href]",excludeHidden:!1,tags:["cat.text-alternatives","wcag2a","wcag244","wcag412","section508","section508.22.a","TTv5","TT6.a","EN-301-549","EN-9.2.4.4","EN-9.4.1.2","ACT"],actIds:["c487ae"],all:[],any:[{options:{attribute:"alt"},id:"non-empty-alt"},"aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"aria-allowed-attr",impact:"critical",matches:"aria-allowed-attr-matches",tags:["cat.aria","wcag2a","wcag412","EN-301-549","EN-9.4.1.2"],actIds:["5c01ea"],all:[{options:{validTreeRowAttrs:["aria-posinset","aria-setsize","aria-expanded","aria-level"]},id:"aria-allowed-attr"}],any:[],none:["aria-unsupported-attr"]},{id:"aria-allowed-role",impact:"minor",excludeHidden:!1,selector:"[role]",matches:"aria-allowed-role-matches",tags:["cat.aria","best-practice"],all:[],any:[{options:{allowImplicit:!0,ignoredTags:[]},id:"aria-allowed-role"}],none:[]},{id:"aria-braille-equivalent",reviewOnFail:!0,impact:"serious",selector:"[aria-brailleroledescription], [aria-braillelabel]",tags:["cat.aria","wcag2a","wcag412","EN-301-549","EN-9.4.1.2"],all:["braille-roledescription-equivalent","braille-label-equivalent"],any:[],none:[]},{id:"aria-command-name",impact:"serious",selector:'[role="link"], [role="button"], [role="menuitem"]',matches:"no-naming-method-matches",tags:["cat.aria","wcag2a","wcag412","TTv5","TT6.a","EN-301-549","EN-9.4.1.2","ACT"],actIds:["97a4e1"],all:[],any:["has-visible-text","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"aria-conditional-attr",impact:"serious",matches:"aria-allowed-attr-matches",tags:["cat.aria","wcag2a","wcag412","EN-301-549","EN-9.4.1.2"],actIds:["5c01ea"],all:[{options:{invalidTableRowAttrs:["aria-posinset","aria-setsize","aria-expanded","aria-level"]},id:"aria-conditional-attr"}],any:[],none:[]},{id:"aria-deprecated-role",impact:"minor",selector:"[role]",matches:"no-empty-role-matches",tags:["cat.aria","wcag2a","wcag412","EN-301-549","EN-9.4.1.2"],actIds:["674b10"],all:[],any:[],none:["deprecatedrole"]},{id:"aria-dialog-name",impact:"serious",selector:'[role="dialog"], [role="alertdialog"]',matches:"no-naming-method-matches",tags:["cat.aria","best-practice"],all:[],any:["aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"aria-hidden-body",impact:"critical",selector:"body",excludeHidden:!1,matches:"is-initiator-matches",tags:["cat.aria","wcag2a","wcag131","wcag412","EN-301-549","EN-9.1.3.1","EN-9.4.1.2"],all:[],any:["aria-hidden-body"],none:[]},{id:"aria-hidden-focus",impact:"serious",selector:'[aria-hidden="true"]',matches:"aria-hidden-focus-matches",excludeHidden:!1,tags:["cat.name-role-value","wcag2a","wcag412","TTv5","TT6.a","EN-301-549","EN-9.4.1.2"],actIds:["6cfa84"],all:["focusable-modal-open","focusable-disabled","focusable-not-tabbable"],any:[],none:[]},{id:"aria-input-field-name",impact:"serious",selector:'[role="combobox"], [role="listbox"], [role="searchbox"], [role="slider"], [role="spinbutton"], [role="textbox"]',matches:"no-naming-method-matches",tags:["cat.aria","wcag2a","wcag412","TTv5","TT5.c","EN-301-549","EN-9.4.1.2","ACT"],actIds:["e086e5"],all:[],any:["aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:["no-implicit-explicit-label"]},{id:"aria-meter-name",impact:"serious",selector:'[role="meter"]',matches:"no-naming-method-matches",tags:["cat.aria","wcag2a","wcag111","EN-301-549","EN-9.1.1.1"],all:[],any:["aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"aria-progressbar-name",impact:"serious",selector:'[role="progressbar"]',matches:"no-naming-method-matches",tags:["cat.aria","wcag2a","wcag111","EN-301-549","EN-9.1.1.1"],all:[],any:["aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"aria-prohibited-attr",impact:"serious",matches:"aria-allowed-attr-matches",tags:["cat.aria","wcag2a","wcag412","EN-301-549","EN-9.4.1.2"],actIds:["5c01ea"],all:[],any:[],none:[{options:{elementsAllowedAriaLabel:["applet","input"]},id:"aria-prohibited-attr"}]},{id:"aria-required-attr",impact:"critical",selector:"[role]",tags:["cat.aria","wcag2a","wcag412","EN-301-549","EN-9.4.1.2"],actIds:["4e8ab6"],all:[],any:["aria-required-attr"],none:[]},{id:"aria-required-children",impact:"critical",selector:"[role]",matches:"aria-required-children-matches",tags:["cat.aria","wcag2a","wcag131","EN-301-549","EN-9.1.3.1"],actIds:["bc4a75","ff89c9"],all:[],any:[{options:{reviewEmpty:["doc-bibliography","doc-endnotes","grid","list","listbox","menu","menubar","table","tablist","tree","treegrid","rowgroup"]},id:"aria-required-children"}],none:[]},{id:"aria-required-parent",impact:"critical",selector:"[role]",matches:"aria-required-parent-matches",tags:["cat.aria","wcag2a","wcag131","EN-301-549","EN-9.1.3.1"],actIds:["ff89c9"],all:[],any:[{options:{ownGroupRoles:["listitem","treeitem"]},id:"aria-required-parent"}],none:[]},{id:"aria-roledescription",impact:"serious",selector:"[aria-roledescription]",tags:["cat.aria","wcag2a","wcag412","EN-301-549","EN-9.4.1.2","deprecated"],enabled:!1,all:[],any:[{options:{supportedRoles:["button","img","checkbox","radio","combobox","menuitemcheckbox","menuitemradio"]},id:"aria-roledescription"}],none:[]},{id:"aria-roles",impact:"critical",selector:"[role]",matches:"no-empty-role-matches",tags:["cat.aria","wcag2a","wcag412","EN-301-549","EN-9.4.1.2"],actIds:["674b10"],all:[],any:[],none:["invalidrole","abstractrole","unsupportedrole"]},{id:"aria-text",impact:"serious",selector:"[role=text]",tags:["cat.aria","best-practice"],all:[],any:["no-focusable-content"],none:[]},{id:"aria-toggle-field-name",impact:"serious",selector:'[role="checkbox"], [role="menuitemcheckbox"], [role="menuitemradio"], [role="radio"], [role="switch"], [role="option"]',matches:"no-naming-method-matches",tags:["cat.aria","wcag2a","wcag412","TTv5","TT5.c","EN-301-549","EN-9.4.1.2","ACT"],actIds:["e086e5"],all:[],any:["has-visible-text","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:["no-implicit-explicit-label"]},{id:"aria-tooltip-name",impact:"serious",selector:'[role="tooltip"]',matches:"no-naming-method-matches",tags:["cat.aria","wcag2a","wcag412","EN-301-549","EN-9.4.1.2"],all:[],any:["has-visible-text","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"aria-treeitem-name",impact:"serious",selector:'[role="treeitem"]',matches:"no-naming-method-matches",tags:["cat.aria","best-practice"],all:[],any:["has-visible-text","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"aria-valid-attr-value",impact:"critical",matches:"aria-has-attr-matches",tags:["cat.aria","wcag2a","wcag412","EN-301-549","EN-9.4.1.2"],actIds:["6a7281"],all:[{options:[],id:"aria-valid-attr-value"},"aria-errormessage","aria-level"],any:[],none:[]},{id:"aria-valid-attr",impact:"critical",matches:"aria-has-attr-matches",tags:["cat.aria","wcag2a","wcag412","EN-301-549","EN-9.4.1.2"],actIds:["5f99a7"],all:[],any:[{options:[],id:"aria-valid-attr"}],none:[]},{id:"audio-caption",impact:"critical",selector:"audio",enabled:!1,excludeHidden:!1,tags:["cat.time-and-media","wcag2a","wcag121","EN-301-549","EN-9.1.2.1","section508","section508.22.a","deprecated"],actIds:["2eb176","afb423"],all:[],any:[],none:["caption"]},{id:"autocomplete-valid",impact:"serious",matches:"autocomplete-matches",tags:["cat.forms","wcag21aa","wcag135","EN-301-549","EN-9.1.3.5","ACT"],actIds:["73f2c2"],all:[{options:{stateTerms:["none","false","true","disabled","enabled","undefined","null"]},id:"autocomplete-valid"}],any:[],none:[]},{id:"avoid-inline-spacing",impact:"serious",selector:"[style]",matches:"is-visible-on-screen-matches",tags:["cat.structure","wcag21aa","wcag1412","EN-301-549","EN-9.1.4.12","ACT"],actIds:["24afc2","9e45ec","78fd32"],all:[{options:{cssProperty:"letter-spacing",minValue:.12},id:"important-letter-spacing"},{options:{cssProperty:"word-spacing",minValue:.16},id:"important-word-spacing"},{options:{multiLineOnly:!0,cssProperty:"line-height",minValue:1.5,normalValue:1},id:"important-line-height"}],any:[],none:[]},{id:"blink",impact:"serious",selector:"blink",excludeHidden:!1,tags:["cat.time-and-media","wcag2a","wcag222","section508","section508.22.j","TTv5","TT2.b","EN-301-549","EN-9.2.2.2"],all:[],any:[],none:["is-on-screen"]},{id:"button-name",impact:"critical",selector:"button",matches:"no-explicit-name-required-matches",tags:["cat.name-role-value","wcag2a","wcag412","section508","section508.22.a","TTv5","TT6.a","EN-301-549","EN-9.4.1.2","ACT"],actIds:["97a4e1","m6b1q3"],all:[],any:["button-has-visible-text","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"},"presentational-role"],none:[]},{id:"bypass",impact:"serious",selector:"html",pageLevel:!0,matches:"bypass-matches",reviewOnFail:!0,tags:["cat.keyboard","wcag2a","wcag241","section508","section508.22.o","TTv5","TT9.a","EN-301-549","EN-9.2.4.1"],actIds:["cf77f2","047fe0","b40fd1","3e12e1","ye5d6e"],all:[],any:["internal-link-present",{options:{selector:":is(h1, h2, h3, h4, h5, h6):not([role]), [role=heading]"},id:"header-present"},{options:{selector:"main, [role=main]"},id:"landmark"}],none:[]},{id:"color-contrast-enhanced",impact:"serious",matches:"color-contrast-matches",excludeHidden:!1,enabled:!1,tags:["cat.color","wcag2aaa","wcag146","ACT"],actIds:["09o5cg"],all:[],any:[{options:{ignoreUnicode:!0,ignoreLength:!1,ignorePseudo:!1,boldValue:700,boldTextPt:14,largeTextPt:18,contrastRatio:{normal:{expected:7,minThreshold:4.5},large:{expected:4.5,minThreshold:3}},pseudoSizeThreshold:.25,shadowOutlineEmMax:.1,textStrokeEmMin:.03},id:"color-contrast-enhanced"}],none:[]},{id:"color-contrast",impact:"serious",matches:"color-contrast-matches",excludeHidden:!1,tags:["cat.color","wcag2aa","wcag143","TTv5","TT13.c","EN-301-549","EN-9.1.4.3","ACT"],actIds:["afw4f7","09o5cg"],all:[],any:[{options:{ignoreUnicode:!0,ignoreLength:!1,ignorePseudo:!1,boldValue:700,boldTextPt:14,largeTextPt:18,contrastRatio:{normal:{expected:4.5},large:{expected:3}},pseudoSizeThreshold:.25,shadowOutlineEmMax:.2,textStrokeEmMin:.03},id:"color-contrast"}],none:[]},{id:"css-orientation-lock",impact:"serious",selector:"html",tags:["cat.structure","wcag134","wcag21aa","EN-301-549","EN-9.1.3.4","experimental"],actIds:["b33eff"],all:[{options:{degreeThreshold:2},id:"css-orientation-lock"}],any:[],none:[],preload:!0},{id:"definition-list",impact:"serious",selector:"dl",matches:"no-role-matches",tags:["cat.structure","wcag2a","wcag131","EN-301-549","EN-9.1.3.1"],all:[],any:[],none:["structured-dlitems",{options:{validRoles:["definition","term","listitem"],validNodeNames:["dt","dd"],divGroups:!0},id:"only-dlitems"}]},{id:"dlitem",impact:"serious",selector:"dd, dt",matches:"no-role-matches",tags:["cat.structure","wcag2a","wcag131","EN-301-549","EN-9.1.3.1"],all:[],any:["dlitem"],none:[]},{id:"document-title",impact:"serious",selector:"html",matches:"is-initiator-matches",tags:["cat.text-alternatives","wcag2a","wcag242","TTv5","TT12.a","EN-301-549","EN-9.2.4.2","ACT"],actIds:["2779a5"],all:[],any:["doc-has-title"],none:[]},{id:"duplicate-id-active",impact:"serious",selector:"[id]",matches:"duplicate-id-active-matches",excludeHidden:!1,tags:["cat.parsing","wcag2a-obsolete","wcag411","deprecated"],enabled:!1,actIds:["3ea0c8"],all:[],any:["duplicate-id-active"],none:[]},{id:"duplicate-id-aria",impact:"critical",selector:"[id]",matches:"duplicate-id-aria-matches",excludeHidden:!1,tags:["cat.parsing","wcag2a","wcag412","EN-301-549","EN-9.4.1.2"],reviewOnFail:!0,actIds:["3ea0c8"],all:[],any:["duplicate-id-aria"],none:[]},{id:"duplicate-id",impact:"minor",selector:"[id]",matches:"duplicate-id-misc-matches",excludeHidden:!1,tags:["cat.parsing","wcag2a-obsolete","wcag411","deprecated"],enabled:!1,actIds:["3ea0c8"],all:[],any:["duplicate-id"],none:[]},{id:"empty-heading",impact:"minor",selector:'h1, h2, h3, h4, h5, h6, [role="heading"]',matches:"heading-matches",tags:["cat.name-role-value","best-practice"],actIds:["ffd0e9"],all:[],any:["has-visible-text","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"empty-table-header",impact:"minor",selector:'th:not([role]), [role="rowheader"], [role="columnheader"]',tags:["cat.name-role-value","best-practice"],all:[],any:["has-visible-text"],none:[]},{id:"focus-order-semantics",impact:"minor",selector:"div, h1, h2, h3, h4, h5, h6, [role=heading], p, span",matches:"inserted-into-focus-order-matches",tags:["cat.keyboard","best-practice","experimental"],all:[],any:[{options:[],id:"has-widget-role"},{options:{roles:["tooltip"]},id:"valid-scrollable-semantics"}],none:[]},{id:"form-field-multiple-labels",impact:"moderate",selector:"input, select, textarea",matches:"label-matches",tags:["cat.forms","wcag2a","wcag332","TTv5","TT5.c","EN-301-549","EN-9.3.3.2"],all:[],any:[],none:["multiple-label"]},{id:"frame-focusable-content",impact:"serious",selector:"html",matches:"frame-focusable-content-matches",tags:["cat.keyboard","wcag2a","wcag211","TTv5","TT4.a","EN-301-549","EN-9.2.1.1"],actIds:["akn7bn"],all:[],any:["frame-focusable-content"],none:[]},{id:"frame-tested",impact:"critical",selector:"html, frame, iframe",tags:["cat.structure","best-practice","review-item"],all:[{options:{isViolation:!1},id:"frame-tested"}],any:[],none:[]},{id:"frame-title-unique",impact:"serious",selector:"frame[title], iframe[title]",matches:"frame-title-has-text-matches",tags:["cat.text-alternatives","wcag2a","wcag412","TTv5","TT12.d","EN-301-549","EN-9.4.1.2"],actIds:["4b1c6c"],all:[],any:[],none:["unique-frame-title"],reviewOnFail:!0},{id:"frame-title",impact:"serious",selector:"frame, iframe",matches:"no-negative-tabindex-matches",tags:["cat.text-alternatives","wcag2a","wcag412","section508","section508.22.i","TTv5","TT12.d","EN-301-549","EN-9.4.1.2"],actIds:["cae760"],all:[],any:[{options:{attribute:"title"},id:"non-empty-title"},"aria-label","aria-labelledby","presentational-role"],none:[]},{id:"heading-order",impact:"moderate",selector:"h1, h2, h3, h4, h5, h6, [role=heading]",matches:"heading-matches",tags:["cat.semantics","best-practice"],all:[],any:["heading-order"],none:[]},{id:"hidden-content",impact:"minor",selector:"*",excludeHidden:!1,tags:["cat.structure","best-practice","experimental","review-item"],all:[],any:["hidden-content"],none:[]},{id:"html-has-lang",impact:"serious",selector:"html",matches:"is-initiator-matches",tags:["cat.language","wcag2a","wcag311","TTv5","TT11.a","EN-301-549","EN-9.3.1.1","ACT"],actIds:["b5c3f8"],all:[],any:[{options:{attributes:["lang","xml:lang"]},id:"has-lang"}],none:[]},{id:"html-lang-valid",impact:"serious",selector:'html[lang]:not([lang=""]), html[xml\\:lang]:not([xml\\:lang=""])',tags:["cat.language","wcag2a","wcag311","TTv5","TT11.a","EN-301-549","EN-9.3.1.1","ACT"],actIds:["bf051a"],all:[],any:[],none:[{options:{attributes:["lang","xml:lang"]},id:"valid-lang"}]},{id:"html-xml-lang-mismatch",impact:"moderate",selector:"html[lang][xml\\:lang]",matches:"xml-lang-mismatch-matches",tags:["cat.language","wcag2a","wcag311","EN-301-549","EN-9.3.1.1","ACT"],actIds:["5b7ae0"],all:["xml-lang-mismatch"],any:[],none:[]},{id:"identical-links-same-purpose",impact:"minor",selector:'a[href], area[href], [role="link"]',excludeHidden:!1,enabled:!1,matches:"identical-links-same-purpose-matches",tags:["cat.semantics","wcag2aaa","wcag249"],actIds:["b20e66"],all:["identical-links-same-purpose"],any:[],none:[]},{id:"image-alt",impact:"critical",selector:"img",matches:"no-explicit-name-required-matches",tags:["cat.text-alternatives","wcag2a","wcag111","section508","section508.22.a","TTv5","TT7.a","TT7.b","EN-301-549","EN-9.1.1.1","ACT"],actIds:["23a2a8"],all:[],any:["has-alt","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"},"presentational-role"],none:["alt-space-value"]},{id:"image-redundant-alt",impact:"minor",selector:"img",tags:["cat.text-alternatives","best-practice"],all:[],any:[],none:[{options:{parentSelector:"button, [role=button], a[href], p, li, td, th"},id:"duplicate-img-label"}]},{id:"input-button-name",impact:"critical",selector:'input[type="button"], input[type="submit"], input[type="reset"]',matches:"no-explicit-name-required-matches",tags:["cat.name-role-value","wcag2a","wcag412","section508","section508.22.a","TTv5","TT5.c","EN-301-549","EN-9.4.1.2","ACT"],actIds:["97a4e1"],all:[],any:["non-empty-if-present",{options:{attribute:"value"},id:"non-empty-value"},"aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"},"presentational-role"],none:[]},{id:"input-image-alt",impact:"critical",selector:'input[type="image"]',matches:"no-explicit-name-required-matches",tags:["cat.text-alternatives","wcag2a","wcag111","wcag412","section508","section508.22.a","TTv5","TT7.a","EN-301-549","EN-9.1.1.1","EN-9.4.1.2","ACT"],actIds:["59796f"],all:[],any:[{options:{attribute:"alt"},id:"non-empty-alt"},"aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"label-content-name-mismatch",impact:"serious",matches:"label-content-name-mismatch-matches",tags:["cat.semantics","wcag21a","wcag253","EN-301-549","EN-9.2.5.3","experimental"],actIds:["2ee8b8"],all:[],any:[{options:{pixelThreshold:.1,occurrenceThreshold:3},id:"label-content-name-mismatch"}],none:[]},{id:"label-title-only",impact:"serious",selector:"input, select, textarea",matches:"label-matches",tags:["cat.forms","best-practice"],all:[],any:[],none:["title-only"]},{id:"label",impact:"critical",selector:"input, textarea",matches:"label-matches",tags:["cat.forms","wcag2a","wcag412","section508","section508.22.n","TTv5","TT5.c","EN-301-549","EN-9.4.1.2","ACT"],actIds:["e086e5"],all:[],any:["implicit-label","explicit-label","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"},{options:{attribute:"placeholder"},id:"non-empty-placeholder"},"presentational-role"],none:["hidden-explicit-label"]},{id:"landmark-banner-is-top-level",impact:"moderate",selector:"header:not([role]), [role=banner]",matches:"landmark-has-body-context-matches",tags:["cat.semantics","best-practice"],all:[],any:["landmark-is-top-level"],none:[]},{id:"landmark-complementary-is-top-level",impact:"moderate",selector:"aside:not([role]), [role=complementary]",tags:["cat.semantics","best-practice"],all:[],any:["landmark-is-top-level"],none:[]},{id:"landmark-contentinfo-is-top-level",impact:"moderate",selector:"footer:not([role]), [role=contentinfo]",matches:"landmark-has-body-context-matches",tags:["cat.semantics","best-practice"],all:[],any:["landmark-is-top-level"],none:[]},{id:"landmark-main-is-top-level",impact:"moderate",selector:"main:not([role]), [role=main]",tags:["cat.semantics","best-practice"],all:[],any:["landmark-is-top-level"],none:[]},{id:"landmark-no-duplicate-banner",impact:"moderate",selector:"header:not([role]), [role=banner]",tags:["cat.semantics","best-practice"],all:[],any:[{options:{selector:"header:not([role]), [role=banner]",role:"banner"},id:"page-no-duplicate-banner"}],none:[]},{id:"landmark-no-duplicate-contentinfo",impact:"moderate",selector:"footer:not([role]), [role=contentinfo]",tags:["cat.semantics","best-practice"],all:[],any:[{options:{selector:"footer:not([role]), [role=contentinfo]",role:"contentinfo"},id:"page-no-duplicate-contentinfo"}],none:[]},{id:"landmark-no-duplicate-main",impact:"moderate",selector:"main:not([role]), [role=main]",tags:["cat.semantics","best-practice"],all:[],any:[{options:{selector:"main:not([role]), [role='main']"},id:"page-no-duplicate-main"}],none:[]},{id:"landmark-one-main",impact:"moderate",selector:"html",tags:["cat.semantics","best-practice"],all:[{options:{selector:"main:not([role]), [role='main']",passForModal:!0},id:"page-has-main"}],any:[],none:[]},{id:"landmark-unique",impact:"moderate",selector:"[role=banner], [role=complementary], [role=contentinfo], [role=main], [role=navigation], [role=region], [role=search], [role=form], form, footer, header, aside, main, nav, section",tags:["cat.semantics","best-practice"],matches:"landmark-unique-matches",all:[],any:["landmark-is-unique"],none:[]},{id:"link-in-text-block",impact:"serious",selector:"a[href], [role=link]",matches:"link-in-text-block-matches",excludeHidden:!1,tags:["cat.color","wcag2a","wcag141","TTv5","TT13.a","EN-301-549","EN-9.1.4.1"],all:[],any:[{options:{requiredContrastRatio:3,allowSameColor:!0},id:"link-in-text-block"},"link-in-text-block-style"],none:[]},{id:"link-name",impact:"serious",selector:"a[href]",tags:["cat.name-role-value","wcag2a","wcag244","wcag412","section508","section508.22.a","TTv5","TT6.a","EN-301-549","EN-9.2.4.4","EN-9.4.1.2","ACT"],actIds:["c487ae"],all:[],any:["has-visible-text","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:["focusable-no-name"]},{id:"list",impact:"serious",selector:"ul, ol",matches:"no-role-matches",tags:["cat.structure","wcag2a","wcag131","EN-301-549","EN-9.1.3.1"],all:[],any:[],none:[{options:{validRoles:["listitem"],validNodeNames:["li"]},id:"only-listitems"}]},{id:"listitem",impact:"serious",selector:"li",matches:"no-role-matches",tags:["cat.structure","wcag2a","wcag131","EN-301-549","EN-9.1.3.1"],all:[],any:["listitem"],none:[]},{id:"marquee",impact:"serious",selector:"marquee",excludeHidden:!1,tags:["cat.parsing","wcag2a","wcag222","TTv5","TT2.b","EN-301-549","EN-9.2.2.2"],all:[],any:[],none:["is-on-screen"]},{id:"meta-refresh-no-exceptions",impact:"minor",selector:'meta[http-equiv="refresh"][content]',excludeHidden:!1,enabled:!1,tags:["cat.time-and-media","wcag2aaa","wcag224","wcag325"],actIds:["bisz58"],all:[],any:[{options:{minDelay:72e3,maxDelay:!1},id:"meta-refresh-no-exceptions"}],none:[]},{id:"meta-refresh",impact:"critical",selector:'meta[http-equiv="refresh"][content]',excludeHidden:!1,tags:["cat.time-and-media","wcag2a","wcag221","TTv5","TT8.a","EN-301-549","EN-9.2.2.1"],actIds:["bc659a","bisz58"],all:[],any:[{options:{minDelay:0,maxDelay:72e3},id:"meta-refresh"}],none:[]},{id:"meta-viewport-large",impact:"minor",selector:'meta[name="viewport"]',matches:"is-initiator-matches",excludeHidden:!1,tags:["cat.sensory-and-visual-cues","best-practice"],all:[],any:[{options:{scaleMinimum:5,lowerBound:2},id:"meta-viewport-large"}],none:[]},{id:"meta-viewport",impact:"critical",selector:'meta[name="viewport"]',matches:"is-initiator-matches",excludeHidden:!1,tags:["cat.sensory-and-visual-cues","wcag2aa","wcag144","EN-301-549","EN-9.1.4.4","ACT"],actIds:["b4f0c3"],all:[],any:[{options:{scaleMinimum:2},id:"meta-viewport"}],none:[]},{id:"nested-interactive",impact:"serious",matches:"nested-interactive-matches",tags:["cat.keyboard","wcag2a","wcag412","TTv5","TT6.a","EN-301-549","EN-9.4.1.2"],actIds:["307n5z"],all:[],any:["no-focusable-content"],none:[]},{id:"no-autoplay-audio",impact:"moderate",excludeHidden:!1,selector:"audio[autoplay], video[autoplay]",matches:"no-autoplay-audio-matches",reviewOnFail:!0,tags:["cat.time-and-media","wcag2a","wcag142","TTv5","TT2.a","EN-301-549","EN-9.1.4.2","ACT"],actIds:["80f0bf"],preload:!0,all:[{options:{allowedDuration:3},id:"no-autoplay-audio"}],any:[],none:[]},{id:"object-alt",impact:"serious",selector:"object[data]",matches:"object-is-loaded-matches",tags:["cat.text-alternatives","wcag2a","wcag111","section508","section508.22.a","EN-301-549","EN-9.1.1.1"],actIds:["8fc3b6"],all:[],any:["aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"},"presentational-role"],none:[]},{id:"p-as-heading",impact:"serious",selector:"p",matches:"p-as-heading-matches",tags:["cat.semantics","wcag2a","wcag131","EN-301-549","EN-9.1.3.1","experimental"],all:[{options:{margins:[{weight:150,italic:!0},{weight:150,size:1.15},{italic:!0,size:1.15},{size:1.4}],passLength:1,failLength:.5},id:"p-as-heading"}],any:[],none:[]},{id:"page-has-heading-one",impact:"moderate",selector:"html",tags:["cat.semantics","best-practice"],all:[{options:{selector:"h1:not([role], [aria-level]), :is(h1, h2, h3, h4, h5, h6):not([role])[aria-level=1], [role=heading][aria-level=1]",passForModal:!0},id:"page-has-heading-one"}],any:[],none:[]},{id:"presentation-role-conflict",impact:"minor",selector:'img[alt=\'\'], [role="none"], [role="presentation"]',matches:"has-implicit-chromium-role-matches",tags:["cat.aria","best-practice","ACT"],actIds:["46ca7f"],all:[],any:[],none:["is-element-focusable","has-global-aria-attribute"]},{id:"region",impact:"moderate",selector:"body *",tags:["cat.keyboard","best-practice"],all:[],any:[{options:{regionMatcher:"dialog, [role=dialog], [role=alertdialog], svg"},id:"region"}],none:[]},{id:"role-img-alt",impact:"serious",selector:"[role='img']:not(img, area, input, object)",matches:"html-namespace-matches",tags:["cat.text-alternatives","wcag2a","wcag111","section508","section508.22.a","TTv5","TT7.a","EN-301-549","EN-9.1.1.1","ACT"],actIds:["23a2a8"],all:[],any:["aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"scope-attr-valid",impact:"moderate",selector:"td[scope], th[scope]",tags:["cat.tables","best-practice"],all:["html5-scope",{options:{values:["row","col","rowgroup","colgroup"]},id:"scope-value"}],any:[],none:[]},{id:"scrollable-region-focusable",impact:"serious",selector:"*:not(select,textarea)",matches:"scrollable-region-focusable-matches",tags:["cat.keyboard","wcag2a","wcag211","wcag213","TTv5","TT4.a","EN-301-549","EN-9.2.1.1","EN-9.2.1.3"],actIds:["0ssw9k"],all:[],any:["focusable-content","focusable-element"],none:[]},{id:"select-name",impact:"critical",selector:"select",tags:["cat.forms","wcag2a","wcag412","section508","section508.22.n","TTv5","TT5.c","EN-301-549","EN-9.4.1.2","ACT"],actIds:["e086e5"],all:[],any:["implicit-label","explicit-label","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"},"presentational-role"],none:["hidden-explicit-label"]},{id:"server-side-image-map",impact:"minor",selector:"img[ismap]",tags:["cat.text-alternatives","wcag2a","wcag211","section508","section508.22.f","TTv5","TT4.a","EN-301-549","EN-9.2.1.1"],all:[],any:[],none:["exists"]},{id:"skip-link",impact:"moderate",selector:'a[href^="#"], a[href^="/#"]',matches:"skip-link-matches",tags:["cat.keyboard","best-practice"],all:[],any:["skip-link"],none:[]},{id:"svg-img-alt",impact:"serious",selector:'[role="img"], [role="graphics-symbol"], svg[role="graphics-document"]',matches:"svg-namespace-matches",tags:["cat.text-alternatives","wcag2a","wcag111","section508","section508.22.a","TTv5","TT7.a","EN-301-549","EN-9.1.1.1","ACT"],actIds:["7d6734"],all:[],any:["svg-non-empty-title","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"tabindex",impact:"serious",selector:"[tabindex]",tags:["cat.keyboard","best-practice"],all:[],any:["tabindex"],none:[]},{id:"table-duplicate-name",impact:"minor",selector:"table",tags:["cat.tables","best-practice"],all:[],any:[],none:["same-caption-summary"]},{id:"table-fake-caption",impact:"serious",selector:"table",matches:"data-table-matches",tags:["cat.tables","experimental","wcag2a","wcag131","section508","section508.22.g","EN-301-549","EN-9.1.3.1"],all:["caption-faked"],any:[],none:[]},{id:"target-size",impact:"serious",selector:"*",enabled:!1,matches:"widget-not-inline-matches",tags:["cat.sensory-and-visual-cues","wcag22aa","wcag258"],all:[],any:[{options:{minSize:24},id:"target-size"},{options:{minOffset:24},id:"target-offset"}],none:[]},{id:"td-has-header",impact:"critical",selector:"table",matches:"data-table-large-matches",tags:["cat.tables","experimental","wcag2a","wcag131","section508","section508.22.g","TTv5","TT14.b","EN-301-549","EN-9.1.3.1"],all:["td-has-header"],any:[],none:[]},{id:"td-headers-attr",impact:"serious",selector:"table",matches:"table-or-grid-role-matches",tags:["cat.tables","wcag2a","wcag131","section508","section508.22.g","TTv5","TT14.b","EN-301-549","EN-9.1.3.1"],actIds:["a25f45"],all:["td-headers-attr"],any:[],none:[]},{id:"th-has-data-cells",impact:"serious",selector:"table",matches:"data-table-matches",tags:["cat.tables","wcag2a","wcag131","section508","section508.22.g","TTv5","TT14.b","EN-301-549","EN-9.1.3.1"],actIds:["d0f69e"],all:["th-has-data-cells"],any:[],none:[]},{id:"valid-lang",impact:"serious",selector:"[lang]:not(html), [xml\\:lang]:not(html)",tags:["cat.language","wcag2aa","wcag312","TTv5","TT11.b","EN-301-549","EN-9.3.1.2","ACT"],actIds:["de46e4"],all:[],any:[],none:[{options:{attributes:["lang","xml:lang"]},id:"valid-lang"}]},{id:"video-caption",impact:"critical",selector:"video",tags:["cat.text-alternatives","wcag2a","wcag122","section508","section508.22.a","TTv5","TT17.a","EN-301-549","EN-9.1.2.2"],actIds:["eac66b"],all:[],any:[],none:["caption"]}],checks:[{id:"abstractrole",evaluate:"abstractrole-evaluate"},{id:"aria-allowed-attr",evaluate:"aria-allowed-attr-evaluate",options:{validTreeRowAttrs:["aria-posinset","aria-setsize","aria-expanded","aria-level"]}},{id:"aria-allowed-role",evaluate:"aria-allowed-role-evaluate",options:{allowImplicit:!0,ignoredTags:[]}},{id:"aria-busy",evaluate:"aria-busy-evaluate",deprecated:!0},{id:"aria-conditional-attr",evaluate:"aria-conditional-attr-evaluate",options:{invalidTableRowAttrs:["aria-posinset","aria-setsize","aria-expanded","aria-level"]}},{id:"aria-errormessage",evaluate:"aria-errormessage-evaluate"},{id:"aria-hidden-body",evaluate:"aria-hidden-body-evaluate"},{id:"aria-level",evaluate:"aria-level-evaluate"},{id:"aria-prohibited-attr",evaluate:"aria-prohibited-attr-evaluate",options:{elementsAllowedAriaLabel:["applet","input"]}},{id:"aria-required-attr",evaluate:"aria-required-attr-evaluate"},{id:"aria-required-children",evaluate:"aria-required-children-evaluate",options:{reviewEmpty:["doc-bibliography","doc-endnotes","grid","list","listbox","menu","menubar","table","tablist","tree","treegrid","rowgroup"]}},{id:"aria-required-parent",evaluate:"aria-required-parent-evaluate",options:{ownGroupRoles:["listitem","treeitem"]}},{id:"aria-roledescription",evaluate:"aria-roledescription-evaluate",options:{supportedRoles:["button","img","checkbox","radio","combobox","menuitemcheckbox","menuitemradio"]}},{id:"aria-unsupported-attr",evaluate:"aria-unsupported-attr-evaluate"},{id:"aria-valid-attr-value",evaluate:"aria-valid-attr-value-evaluate",options:[]},{id:"aria-valid-attr",evaluate:"aria-valid-attr-evaluate",options:[]},{id:"braille-label-equivalent",evaluate:"braille-label-equivalent-evaluate"},{id:"braille-roledescription-equivalent",evaluate:"braille-roledescription-equivalent-evaluate"},{id:"deprecatedrole",evaluate:"deprecatedrole-evaluate"},{id:"fallbackrole",evaluate:"fallbackrole-evaluate"},{id:"has-global-aria-attribute",evaluate:"has-global-aria-attribute-evaluate"},{id:"has-widget-role",evaluate:"has-widget-role-evaluate",options:[]},{id:"invalidrole",evaluate:"invalidrole-evaluate"},{id:"is-element-focusable",evaluate:"is-element-focusable-evaluate"},{id:"no-implicit-explicit-label",evaluate:"no-implicit-explicit-label-evaluate"},{id:"unsupportedrole",evaluate:"unsupportedrole-evaluate"},{id:"valid-scrollable-semantics",evaluate:"valid-scrollable-semantics-evaluate",options:{roles:["tooltip"]}},{id:"color-contrast-enhanced",evaluate:"color-contrast-evaluate",options:{ignoreUnicode:!0,ignoreLength:!1,ignorePseudo:!1,boldValue:700,boldTextPt:14,largeTextPt:18,contrastRatio:{normal:{expected:7,minThreshold:4.5},large:{expected:4.5,minThreshold:3}},pseudoSizeThreshold:.25,shadowOutlineEmMax:.1,textStrokeEmMin:.03}},{id:"color-contrast",evaluate:"color-contrast-evaluate",options:{ignoreUnicode:!0,ignoreLength:!1,ignorePseudo:!1,boldValue:700,boldTextPt:14,largeTextPt:18,contrastRatio:{normal:{expected:4.5},large:{expected:3}},pseudoSizeThreshold:.25,shadowOutlineEmMax:.2,textStrokeEmMin:.03}},{id:"link-in-text-block-style",evaluate:"link-in-text-block-style-evaluate"},{id:"link-in-text-block",evaluate:"link-in-text-block-evaluate",options:{requiredContrastRatio:3,allowSameColor:!0}},{id:"autocomplete-appropriate",evaluate:"autocomplete-appropriate-evaluate",deprecated:!0},{id:"autocomplete-valid",evaluate:"autocomplete-valid-evaluate",options:{stateTerms:["none","false","true","disabled","enabled","undefined","null"]}},{id:"accesskeys",evaluate:"accesskeys-evaluate",after:"accesskeys-after"},{id:"focusable-content",evaluate:"focusable-content-evaluate"},{id:"focusable-disabled",evaluate:"focusable-disabled-evaluate"},{id:"focusable-element",evaluate:"focusable-element-evaluate"},{id:"focusable-modal-open",evaluate:"focusable-modal-open-evaluate"},{id:"focusable-no-name",evaluate:"focusable-no-name-evaluate"},{id:"focusable-not-tabbable",evaluate:"focusable-not-tabbable-evaluate"},{id:"frame-focusable-content",evaluate:"frame-focusable-content-evaluate"},{id:"landmark-is-top-level",evaluate:"landmark-is-top-level-evaluate"},{id:"no-focusable-content",evaluate:"no-focusable-content-evaluate"},{id:"page-has-heading-one",evaluate:"has-descendant-evaluate",after:"has-descendant-after",options:{selector:"h1:not([role], [aria-level]), :is(h1, h2, h3, h4, h5, h6):not([role])[aria-level=1], [role=heading][aria-level=1]",passForModal:!0}},{id:"page-has-main",evaluate:"has-descendant-evaluate",after:"has-descendant-after",options:{selector:"main:not([role]), [role='main']",passForModal:!0}},{id:"page-no-duplicate-banner",evaluate:"page-no-duplicate-evaluate",after:"page-no-duplicate-after",options:{selector:"header:not([role]), [role=banner]",role:"banner"}},{id:"page-no-duplicate-contentinfo",evaluate:"page-no-duplicate-evaluate",after:"page-no-duplicate-after",options:{selector:"footer:not([role]), [role=contentinfo]",role:"contentinfo"}},{id:"page-no-duplicate-main",evaluate:"page-no-duplicate-evaluate",after:"page-no-duplicate-after",options:{selector:"main:not([role]), [role='main']"}},{id:"tabindex",evaluate:"tabindex-evaluate"},{id:"alt-space-value",evaluate:"alt-space-value-evaluate"},{id:"duplicate-img-label",evaluate:"duplicate-img-label-evaluate",options:{parentSelector:"button, [role=button], a[href], p, li, td, th"}},{id:"explicit-label",evaluate:"explicit-evaluate"},{id:"help-same-as-label",evaluate:"help-same-as-label-evaluate"},{id:"hidden-explicit-label",evaluate:"hidden-explicit-label-evaluate"},{id:"implicit-label",evaluate:"implicit-evaluate"},{id:"label-content-name-mismatch",evaluate:"label-content-name-mismatch-evaluate",options:{pixelThreshold:.1,occurrenceThreshold:3}},{id:"multiple-label",evaluate:"multiple-label-evaluate"},{id:"title-only",evaluate:"title-only-evaluate"},{id:"landmark-is-unique",evaluate:"landmark-is-unique-evaluate",after:"landmark-is-unique-after"},{id:"has-lang",evaluate:"has-lang-evaluate",options:{attributes:["lang","xml:lang"]}},{id:"valid-lang",evaluate:"valid-lang-evaluate",options:{attributes:["lang","xml:lang"]}},{id:"xml-lang-mismatch",evaluate:"xml-lang-mismatch-evaluate"},{id:"dlitem",evaluate:"dlitem-evaluate"},{id:"listitem",evaluate:"listitem-evaluate"},{id:"only-dlitems",evaluate:"invalid-children-evaluate",options:{validRoles:["definition","term","listitem"],validNodeNames:["dt","dd"],divGroups:!0}},{id:"only-listitems",evaluate:"invalid-children-evaluate",options:{validRoles:["listitem"],validNodeNames:["li"]}},{id:"structured-dlitems",evaluate:"structured-dlitems-evaluate"},{id:"caption",evaluate:"caption-evaluate"},{id:"frame-tested",evaluate:"frame-tested-evaluate",after:"frame-tested-after",options:{isViolation:!1}},{id:"no-autoplay-audio",evaluate:"no-autoplay-audio-evaluate",options:{allowedDuration:3}},{id:"css-orientation-lock",evaluate:"css-orientation-lock-evaluate",options:{degreeThreshold:2}},{id:"meta-viewport-large",evaluate:"meta-viewport-scale-evaluate",options:{scaleMinimum:5,lowerBound:2}},{id:"meta-viewport",evaluate:"meta-viewport-scale-evaluate",options:{scaleMinimum:2}},{id:"target-offset",evaluate:"target-offset-evaluate",options:{minOffset:24}},{id:"target-size",evaluate:"target-size-evaluate",options:{minSize:24}},{id:"header-present",evaluate:"has-descendant-evaluate",after:"has-descendant-after",options:{selector:":is(h1, h2, h3, h4, h5, h6):not([role]), [role=heading]"}},{id:"heading-order",evaluate:"heading-order-evaluate",after:"heading-order-after"},{id:"identical-links-same-purpose",evaluate:"identical-links-same-purpose-evaluate",after:"identical-links-same-purpose-after"},{id:"internal-link-present",evaluate:"internal-link-present-evaluate"},{id:"landmark",evaluate:"has-descendant-evaluate",options:{selector:"main, [role=main]"}},{id:"meta-refresh-no-exceptions",evaluate:"meta-refresh-evaluate",options:{minDelay:72e3,maxDelay:!1}},{id:"meta-refresh",evaluate:"meta-refresh-evaluate",options:{minDelay:0,maxDelay:72e3}},{id:"p-as-heading",evaluate:"p-as-heading-evaluate",options:{margins:[{weight:150,italic:!0},{weight:150,size:1.15},{italic:!0,size:1.15},{size:1.4}],passLength:1,failLength:.5}},{id:"region",evaluate:"region-evaluate",after:"region-after",options:{regionMatcher:"dialog, [role=dialog], [role=alertdialog], svg"}},{id:"skip-link",evaluate:"skip-link-evaluate"},{id:"unique-frame-title",evaluate:"unique-frame-title-evaluate",after:"unique-frame-title-after"},{id:"duplicate-id-active",evaluate:"duplicate-id-evaluate",after:"duplicate-id-after"},{id:"duplicate-id-aria",evaluate:"duplicate-id-evaluate",after:"duplicate-id-after"},{id:"duplicate-id",evaluate:"duplicate-id-evaluate",after:"duplicate-id-after"},{id:"aria-label",evaluate:"aria-label-evaluate"},{id:"aria-labelledby",evaluate:"aria-labelledby-evaluate"},{id:"avoid-inline-spacing",evaluate:"avoid-inline-spacing-evaluate",options:{cssProperties:["line-height","letter-spacing","word-spacing"]}},{id:"button-has-visible-text",evaluate:"has-text-content-evaluate"},{id:"doc-has-title",evaluate:"doc-has-title-evaluate"},{id:"exists",evaluate:"exists-evaluate"},{id:"has-alt",evaluate:"has-alt-evaluate"},{id:"has-visible-text",evaluate:"has-text-content-evaluate"},{id:"important-letter-spacing",evaluate:"inline-style-property-evaluate",options:{cssProperty:"letter-spacing",minValue:.12}},{id:"important-line-height",evaluate:"inline-style-property-evaluate",options:{multiLineOnly:!0,cssProperty:"line-height",minValue:1.5,normalValue:1}},{id:"important-word-spacing",evaluate:"inline-style-property-evaluate",options:{cssProperty:"word-spacing",minValue:.16}},{id:"is-on-screen",evaluate:"is-on-screen-evaluate"},{id:"non-empty-alt",evaluate:"attr-non-space-content-evaluate",options:{attribute:"alt"}},{id:"non-empty-if-present",evaluate:"non-empty-if-present-evaluate"},{id:"non-empty-placeholder",evaluate:"attr-non-space-content-evaluate",options:{attribute:"placeholder"}},{id:"non-empty-title",evaluate:"attr-non-space-content-evaluate",options:{attribute:"title"}},{id:"non-empty-value",evaluate:"attr-non-space-content-evaluate",options:{attribute:"value"}},{id:"presentational-role",evaluate:"presentational-role-evaluate"},{id:"role-none",evaluate:"matches-definition-evaluate",deprecated:!0,options:{matcher:{attributes:{role:"none"}}}},{id:"role-presentation",evaluate:"matches-definition-evaluate",deprecated:!0,options:{matcher:{attributes:{role:"presentation"}}}},{id:"svg-non-empty-title",evaluate:"svg-non-empty-title-evaluate"},{id:"caption-faked",evaluate:"caption-faked-evaluate"},{id:"html5-scope",evaluate:"html5-scope-evaluate"},{id:"same-caption-summary",evaluate:"same-caption-summary-evaluate"},{id:"scope-value",evaluate:"scope-value-evaluate",options:{values:["row","col","rowgroup","colgroup"]}},{id:"td-has-header",evaluate:"td-has-header-evaluate"},{id:"td-headers-attr",evaluate:"td-headers-attr-evaluate"},{id:"th-has-data-cells",evaluate:"th-has-data-cells-evaluate"},{id:"hidden-content",evaluate:"hidden-content-evaluate"}]})}("object"==typeof window?window:this)},25402:(e,t,n)=>{"use strict"
n.d(t,{Or:()=>i,hm:()=>u,q3:()=>o,r7:()=>s})
var r=n(65722),a=n(17861)
const o="Element not found."
function i(e,t,n){const r=(0,a.y1)(e,t.selector,t)
u(e,t.pageObjectKey,n,{selector:r})}function u(e,t,n){let{selector:r}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=n instanceof Error?n.message:n.toString()
const o=new s(a,{cause:{message:a,error:n.cause,key:t,node:e,selector:r}})
throw n instanceof Error&&"stack"in n&&(o.stack=n.stack),console.error(o.toString()),o}class s extends Error{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const{cause:n}=t,{node:a,key:o,selector:i}=n||{},u=function(e,t,n){const a=[],o=function(e){let t,n=[]
for(t=e;t;t=r.A.parent(t))n.unshift(r.A.meta(t).key)
return n[0]="page",n}(e)
return t&&o.push(t),a.push(`\nPageObject: '${o.join(".")}'`),"string"==typeof n&&n.trim().length>0&&a.push(`  Selector: '${n}'`),a.join("\n")}(a,o,i)
for(var s=arguments.length,l=new Array(s>2?s-2:0),c=2;c<s;c++)l[c-2]=arguments[c]
super([e,u].filter(Boolean).join("\n"),t,...l)}}},43493:(e,t,n)=>{"use strict"
n.d(t,{F:()=>o,I:()=>i})
var r=n(65722),a=n(17861)
function o(e){return!(0,a.Zn)(e)._chainedTree}function i(e){if(o(e))return e
let t,n=[]
for(t=e;t;t=r.A.parent(t))n.unshift(r.A.meta(t).key)
return n.shift(),t=(0,a.Zn)(e)._chainedTree,n.forEach((e=>{t=function(e,t){let n
if(n=/\[(\d+)\]$/.exec(t)){let[r,a]=n
return e[t.slice(0,-r.length)].objectAt(parseInt(a,10))}return e[t]}(t,e)})),t}},63485:(e,t,n)=>{"use strict"
n.d(t,{Kt:()=>d,M5:()=>c,nV:()=>l,sM:()=>s})
var r=n(17861),a=n(99006),o=n(65356),i=n(25402)
function u(e,t){return t.testContainer||(0,r.sS)(e,"testContainer")||(0,a.c)().testContainer}function s(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
const a=(0,r.y1)(e,t,n),s=u(e,n),l=(0,o.$)(a,s).toArray()
return(0,r.Oz)(l,a),0===l.length&&(0,i.hm)(e,n.pageObjectKey,i.q3,{selector:a}),l[0]}function l(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
const a=(0,r.y1)(e,t,n),i=u(e,n)
return(0,o.$)(a,i).toArray()}function c(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
const a=(0,r.y1)(e,t,n),s=u(e,n)
let l=(0,o.$)(a,s)
return(0,r.Oz)(l,a,n.multiple),0===l.length&&(0,i.hm)(e,n.pageObjectKey,i.q3,{selector:a}),l}function d(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
const a=(0,r.y1)(e,t,n),i=u(e,n)
let s=(0,o.$)(a,i)
return(0,r.Oz)(s,a,n.multiple),s}n(65722),n(32076),n(98260)},17861:(e,t,n)=>{"use strict"
n.d(t,{Oz:()=>i,QL:()=>l,Zn:()=>s,iz:()=>d,sS:()=>c,y1:()=>u})
var r=n(65722)
function a(e){return void 0!==e}class o{constructor(e,t,n,r){this.targetNode=e,this.targetScope=t||"",this.targetSelector=n||"",this.targetFilters=r}toString(){let e,t
if(e=this.targetFilters.resetScope?this.targetScope:this.calculateScope(this.targetNode,this.targetScope),`${e} ${this.targetSelector}`.indexOf(",")>-1)throw new Error("Usage of comma separated selectors is not supported. Please make sure your selector targets a single selector.")
t=this.calculateFilters(this.targetFilters)
let n=`${e} ${this.targetSelector}${t}`.trim()
return n.length||(n=":first"),n}calculateFilters(){let e=[]
return this.targetFilters.visible&&e.push(":visible"),this.targetFilters.contains&&e.push(`:contains("${this.targetFilters.contains}")`),"number"==typeof this.targetFilters.at?e.push(`:eq(${this.targetFilters.at})`):this.targetFilters.last&&e.push(":last"),e.join("")}calculateScope(e,t){let n=this.getScopes(e)
return n.reverse(),n.push(t),n.join(" ").trim()}getScopes(e){let t=[]
return e.scope&&t.push(e.scope),!e.resetScope&&r.A.parent(e)&&(t=t.concat(this.calculateScope(r.A.parent(e)))),t}}function i(e,t,n){if(e.length>1&&!n)throw new Error(`"${t}" matched more than one element. If you want to select many elements, use collections instead.`)}function u(e,t,n){return new o(e,n.scope,t,n).toString()}function s(e){let t=r.A.parent(e),n=e
for(;t;)n=t,t=r.A.parent(t)
return n}function l(e){let t=function(e,t){let n=e,o=[]
for(;a(n);)a(n[t])&&o.push(n[t]),n=r.A.parent(n)
return o}(e,"scope")
return t.reverse().join(" ")}function c(e,t){if(a(e[t]))return e[t]
let n=r.A.parent(e)
return a(n)?c(n,t):void 0}function d(e,t){return Object.getOwnPropertyNames(t).forEach((n=>{const r=Object.getOwnPropertyDescriptor(t,n)
Object.defineProperty(e,n,r)})),e}},65356:(e,t,n)=>{"use strict"
let r
if(n.d(t,{$:()=>r}),window.jQuery)r=window.jQuery
else{const e=(a=n(33709))?.__esModule?a:{default:a}
r=e.default}var a},99006:(e,t,n)=>{"use strict"
n.d(t,{c:()=>a})
var r=n(32076)
function a(){return new r.A}n(98260)},32076:(e,t,n)=>{"use strict"
n.d(t,{A:()=>o})
var r=n(98260)
class a{get testContainer(){throw new Error("`testContainer` is not implemented for the adapter")}visit(){throw new Error("`visit` is not implemented for the adapter")}click(){throw new Error("`click` is not implemented for the adapter")}fillIn(){throw new Error("`fillIn` is not implemented for the adapter")}triggerEvent(){throw new Error("`triggerEvent` is not implemented for the adapter")}focus(){throw new Error("`focus` is not implemented for the adapter")}blur(){throw new Error("`blur` is not implemented for the adapter")}}class o extends a{get testContainer(){return(0,r.getRootElement)()}visit(e){return(0,r.visit)(e)}click(e){return(0,r.click)(e)}fillIn(e,t){return(0,r.fillIn)(e,t)}triggerEvent(e,t,n){if(void 0!==n.key||void 0!==n.keyCode){const a=n.key||n.keyCode
return(0,r.triggerKeyEvent)(e,t,a,n)}return(0,r.triggerEvent)(e,t,n)}focus(e){return(0,r.focus)(e)}blur(e){return(0,r.blur)(e)}}},48886:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{buildSelector:()=>a.y1,findElement:()=>r.Kt,findElementWithAssert:()=>r.M5,findMany:()=>r.nV,findOne:()=>r.sM,fullScope:()=>a.QL})
var r=n(63485),a=n(17861)
n(99006),n(32076),n(98260),n(65356),n(25402),n(65722)},25317:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{attribute:()=>ke,blurrable:()=>ce,buildSelector:()=>re.y1,clickOnText:()=>pe,clickable:()=>de,collection:()=>Re,contains:()=>fe,count:()=>Ne,create:()=>Ae,default:()=>He,fillable:()=>he,findElement:()=>ie.Kt,findElementWithAssert:()=>ie.M5,focusable:()=>me,hasClass:()=>Se,isHidden:()=>De,isPresent:()=>ge,isVisible:()=>ve,notHasClass:()=>_e,property:()=>Oe,selectable:()=>Le,text:()=>be,triggerable:()=>je,value:()=>we,visitable:()=>qe})
var r=n(65722)
function a(e){if(e&&"object"==typeof e){let t=r.A.meta(e)
return Boolean(t&&t.__poDef__)}return!1}function o(e){if(a(e))return r.A.meta(e).__poDef__
throw new Error("cannot get the page object definition from a node that is not a page object")}var i=n(16584),u=n(25402)
function s(e){var t=e._promiseCallbacks
return t||(t=e._promiseCallbacks={}),t}var l={mixin:function(e){return e.on=this.on,e.off=this.off,e.trigger=this.trigger,e._promiseCallbacks=void 0,e},on:function(e,t){if("function"!=typeof t)throw new TypeError("Callback must be a function")
var n=s(this),r=n[e]
r||(r=n[e]=[]),-1===r.indexOf(t)&&r.push(t)},off:function(e,t){var n=s(this)
if(t){var r=n[e],a=r.indexOf(t);-1!==a&&r.splice(a,1)}else n[e]=[]},trigger:function(e,t,n){var r=s(this)[e]
if(r)for(var a=0;a<r.length;a++)(0,r[a])(t,n)}},c={instrument:!1}
l.mixin(c)
var d=[]
function p(e,t,n){1===d.push({name:e,payload:{key:t._guidKey,id:t._id,eventName:e,detail:t._result,childId:n&&n._id,label:t._label,timeStamp:Date.now(),error:c["instrument-with-stack"]?new Error(t._label):null}})&&setTimeout((function(){for(var e=0;e<d.length;e++){var t=d[e],n=t.payload
n.guid=n.key+n.id,n.childGuid=n.key+n.childId,n.error&&(n.stack=n.error.stack),c.trigger(t.name,t.payload)}d.length=0}),50)}function f(e,t){if(e&&"object"==typeof e&&e.constructor===this)return e
var n=new this(h,t)
return w(n,e),n}function h(){}var m=void 0,D={error:null}
function g(e){try{return e.then}catch(e){return D.error=e,D}}var v=void 0
function y(){try{var e=v
return v=null,e.apply(this,arguments)}catch(e){return D.error=e,D}}function b(e){return v=e,y}function F(e,t,n){if(t.constructor===e.constructor&&n===N&&e.constructor.resolve===f)!function(e,t){1===t._state?C(e,t._result):2===t._state?(t._onError=null,x(e,t._result)):A(t,void 0,(function(n){t===n?C(e,n):w(e,n)}),(function(t){return x(e,t)}))}(e,t)
else if(n===D){var r=D.error
D.error=null,x(e,r)}else"function"==typeof n?function(e,t,n){c.async((function(e){var r=!1,a=b(n).call(t,(function(n){r||(r=!0,t===n?C(e,n):w(e,n))}),(function(t){r||(r=!0,x(e,t))}),"Settle: "+(e._label||" unknown promise"))
if(!r&&a===D){r=!0
var o=D.error
D.error=null,x(e,o)}}),e)}(e,t,n):C(e,t)}function w(e,t){var n,r
e===t?C(e,t):(r=typeof(n=t),null===n||"object"!==r&&"function"!==r?C(e,t):F(e,t,g(t)))}function E(e){e._onError&&e._onError(e._result),k(e)}function C(e,t){e._state===m&&(e._result=t,e._state=1,0===e._subscribers.length?c.instrument&&p("fulfilled",e):c.async(k,e))}function x(e,t){e._state===m&&(e._state=2,e._result=t,c.async(E,e))}function A(e,t,n,r){var a=e._subscribers,o=a.length
e._onError=null,a[o]=t,a[o+1]=n,a[o+2]=r,0===o&&e._state&&c.async(k,e)}function k(e){var t=e._subscribers,n=e._state
if(c.instrument&&p(1===n?"fulfilled":"rejected",e),0!==t.length){for(var r=void 0,a=void 0,o=e._result,i=0;i<t.length;i+=3)r=t[i],a=t[i+n],r?T(n,r,a,o):a(o)
e._subscribers.length=0}}function T(e,t,n,r){var a,o="function"==typeof n
if(a=o?b(n)(r):r,t._state!==m);else if(a===t)x(t,new TypeError("A promises callback cannot return that same promise."))
else if(a===D){var i=D.error
D.error=null,x(t,i)}else o?w(t,a):1===e?C(t,a):2===e&&x(t,a)}function N(e,t,n){var r=this,a=r._state
if(1===a&&!e||2===a&&!t)return c.instrument&&p("chained",r,r),r
r._onError=null
var o=new r.constructor(h,n),i=r._result
if(c.instrument&&p("chained",r,o),a===m)A(r,o,e,t)
else{var u=1===a?e:t
c.async((function(){return T(a,o,u,i)}))}return o}var R=function(){function e(e,t,n,r){this._instanceConstructor=e,this.promise=new e(h,r),this._abortOnReject=n,this._isUsingOwnPromise=e===O,this._isUsingOwnResolve=e.resolve===f,this._init.apply(this,arguments)}return e.prototype._init=function(e,t){var n=t.length||0
this.length=n,this._remaining=n,this._result=new Array(n),this._enumerate(t)},e.prototype._enumerate=function(e){for(var t=this.length,n=this.promise,r=0;n._state===m&&r<t;r++)this._eachEntry(e[r],r,!0)
this._checkFullfillment()},e.prototype._checkFullfillment=function(){if(0===this._remaining){var e=this._result
C(this.promise,e),this._result=null}},e.prototype._settleMaybeThenable=function(e,t,n){var r=this._instanceConstructor
if(this._isUsingOwnResolve){var a=g(e)
if(a===N&&e._state!==m)e._onError=null,this._settledAt(e._state,t,e._result,n)
else if("function"!=typeof a)this._settledAt(1,t,e,n)
else if(this._isUsingOwnPromise){var o=new r(h)
F(o,e,a),this._willSettleAt(o,t,n)}else this._willSettleAt(new r((function(t){return t(e)})),t,n)}else this._willSettleAt(r.resolve(e),t,n)},e.prototype._eachEntry=function(e,t,n){null!==e&&"object"==typeof e?this._settleMaybeThenable(e,t,n):this._setResultAt(1,t,e,n)},e.prototype._settledAt=function(e,t,n,r){var a=this.promise
a._state===m&&(this._abortOnReject&&2===e?x(a,n):(this._setResultAt(e,t,n,r),this._checkFullfillment()))},e.prototype._setResultAt=function(e,t,n,r){this._remaining--,this._result[t]=n},e.prototype._willSettleAt=function(e,t,n){var r=this
A(e,void 0,(function(e){return r._settledAt(1,t,e,n)}),(function(e){return r._settledAt(2,t,e,n)}))},e}()
function B(e,t,n){this._remaining--,this._result[t]=1===e?{state:"fulfilled",value:n}:{state:"rejected",reason:n}}var S="rsvp_"+Date.now()+"-",_=0,O=function(){function e(t,n){this._id=_++,this._label=n,this._state=void 0,this._result=void 0,this._subscribers=[],c.instrument&&p("created",this),h!==t&&("function"!=typeof t&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof e?function(e,t){var n=!1
try{t((function(t){n||(n=!0,w(e,t))}),(function(t){n||(n=!0,x(e,t))}))}catch(t){x(e,t)}}(this,t):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return e.prototype._onError=function(e){var t=this
c.after((function(){t._onError&&c.trigger("error",e,t._label)}))},e.prototype.catch=function(e,t){return this.then(void 0,e,t)},e.prototype.finally=function(e,t){var n=this,r=n.constructor
return"function"==typeof e?n.then((function(t){return r.resolve(e()).then((function(){return t}))}),(function(t){return r.resolve(e()).then((function(){throw t}))})):n.then(e,e)},e}()
O.cast=f,O.all=function(e,t){return Array.isArray(e)?new R(this,e,!0,t).promise:this.reject(new TypeError("Promise.all must be called with an array"),t)},O.race=function(e,t){var n=new this(h,t)
if(!Array.isArray(e))return x(n,new TypeError("Promise.race must be called with an array")),n
for(var r=0;n._state===m&&r<e.length;r++)A(this.resolve(e[r]),void 0,(function(e){return w(n,e)}),(function(e){return x(n,e)}))
return n},O.resolve=f,O.reject=function(e,t){var n=new this(h,t)
return x(n,e),n},O.prototype._guidKey=S,O.prototype.then=N,function(e){function t(t,n,r){return function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,t,n,!1,r))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t}(R).prototype._setResultAt=B,function(e){function t(t,n,r){return function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,t,n,!1,r))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t}(function(e){function t(t,n){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=arguments[3]
return function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,t,n,r,a))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype._init=function(e,t){this._result={},this._enumerate(t)},t.prototype._enumerate=function(e){var t=Object.keys(e),n=t.length,r=this.promise
this._remaining=n
for(var a=void 0,o=void 0,i=0;r._state===m&&i<n;i++)o=e[a=t[i]],this._eachEntry(o,a,!0)
this._checkFullfillment()},t}(R)).prototype._setResultAt=B
var M=function(e){function t(t,n,r,a){return function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,t,n,!0,a,r))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype._init=function(e,t,n,r,a){var o=t.length||0
this.length=o,this._remaining=o,this._result=new Array(o),this._mapFn=a,this._enumerate(t)},t.prototype._setResultAt=function(e,t,n,r){if(r){var a=b(this._mapFn)(n,t)
a===D?this._settledAt(2,t,a.error,!1):this._eachEntry(a,t,!1)}else this._remaining--,this._result[t]=n},t}(R),j={}
!function(e){function t(){return function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)})(t,e),t.prototype._checkFullfillment=function(){if(0===this._remaining&&null!==this._result){var e=this._result.filter((function(e){return e!==j}))
C(this.promise,e),this._result=null}},t.prototype._setResultAt=function(e,t,n,r){if(r){this._result[t]=n
var a=b(this._mapFn)(n,t)
a===D?this._settledAt(2,t,a.error,!1):this._eachEntry(a,t,!1)}else this._remaining--,n||(this._result[t]=j)}}(M)
var I=0,P=void 0,q="undefined"!=typeof window?window:void 0,L=q||{},H=L.MutationObserver||L.WebKitMutationObserver,z="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),$="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel
function V(){return function(){return setTimeout(W,1)}}var U=new Array(1e3)
function W(){for(var e=0;e<I;e+=2)(0,U[e])(U[e+1]),U[e]=void 0,U[e+1]=void 0
I=0}var G,K,Y,Q,X,Z,J=void 0
function ee(){c.on.apply(c,arguments)}if(z?(X=process.nextTick,Z=process.versions.node.match(/^(?:(\d+)\.)?(?:(\d+)\.)?(\*|\d+)$/),Array.isArray(Z)&&"0"===Z[1]&&"10"===Z[2]&&(X=setImmediate),J=function(){return X(W)}):H?(K=0,Y=new H(W),Q=document.createTextNode(""),Y.observe(Q,{characterData:!0}),J=function(){return Q.data=K=++K%2}):$?((G=new MessageChannel).port1.onmessage=W,J=function(){return G.port2.postMessage(0)}):J=void 0===q?function(){try{var e=Function("return this")().require("vertx")
return void 0!==(P=e.runOnLoop||e.runOnContext)?function(){P(W)}:V()}catch(e){return V()}}():V(),c.async=function(e,t){U[I]=e,U[I+1]=t,2===(I+=2)&&J()},c.after=function(e){return setTimeout(e,0)},"undefined"!=typeof window&&"object"==typeof window.__PROMISE_INSTRUMENTATION__){var te=window.__PROMISE_INSTRUMENTATION__
for(var ne in function(e,t){if(2!==arguments.length)return c[e]
c[e]=t}("instrument",!0),te)te.hasOwnProperty(ne)&&ee(ne,te[ne])}var re=n(17861),ae=n(43493)
function oe(e,t){if([t,e]=function(e,t){return t?[t,{...e}]:[e,{}]}(e,t),"function"!=typeof t)throw new Error("`action()` expects a function argument.")
return(0,i.o)((function(n){return function(){for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o]
return e.pageObjectKey=function(e,t){return`${e}(${t.length?`"${t.map((e=>String(e))).join('", "')}"`:""})`}(n,a),function(e,t){const n=(0,re.Zn)(e)
return(0,ae.F)(e)?(n._promise=function(e,t){return O.resolve(e,void 0)}(n._promise).then((()=>t())),e):(n._chainedTree._promise=t(),(0,ae.I)(e))}(this,(()=>{try{const n=t.bind(this)(...a)
return Promise.resolve(n).catch((t=>{(0,u.Or)(this,e,t)}))}catch(t){(0,u.Or)(this,e,t)}}))}}))}var ie=n(63485),ue=n(99006)
function se(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)}function le(e){return e.textContent}function ce(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return oe({...t,selector:e},(function(){const n=(0,ie.sM)(this,e,t)
return(0,ue.c)().blur(n)}))}function de(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return oe({...t,selector:e},(function(){const n=(0,ie.sM)(this,e,t)
return(0,ue.c)().click(n)}))}function pe(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return oe({...t,selector:e},(function(n){const r={...t,contains:n,last:!0},a=`${e||""} *`,o=(0,ie.nV)(this,a,r).length?a:e,i=(0,ie.sM)(this,o,r)
return(0,ue.c)().click(i)}))}function fe(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return(0,i.o)((function(n){return function(r){let a={pageObjectKey:`${n}("${r}")`,...t}
return o=r,le((0,ie.sM)(this,e,a)).indexOf(o)>-1
var o}}))}function he(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return oe({...t,selector:e},(function(n,r){let a
void 0===r?r=n:a=n
let o=e
if(a&&(o=function(e,t,n,r){return["input","textarea","select","[contenteditable]"].map((e=>[`${e}[data-test="${r}"]`,`${e}[aria-label="${r}"]`,`${e}[placeholder="${r}"]`,`${e}[name="${r}"]`,`${e}#${r}`])).reduce(((e,t)=>e.concat(t)),[]).find((r=>(0,ie.nV)(e,`${t} ${r}`,n)[0]))}(this,e,t,a),!o))throw new Error(`Can not find element by clue: "${a}".`)
const i=(0,ie.sM)(this,o,t)
return(0,ue.c)().fillIn(i,r)}))}function me(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:""
const t={...arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},selector:e}
return oe(t,(function(){const n=(0,ie.sM)(this,e,t)
return(0,ue.c)().focus(n)}))}function De(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return(0,i.o)((function(n){let r={pageObjectKey:n,...t},a=(0,ie.nV)(this,e,r)
return(0,re.Oz)(a,e),0===a.length||!se(a[0])}))}function ge(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return(0,i.o)((function(n){let r={pageObjectKey:n,...t},a=(0,ie.nV)(this,e,r)
return(0,re.Oz)(a,e),1===a.length}))}function ve(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return(0,i.o)((function(n){let r={pageObjectKey:n,...t},a=(0,ie.nV)(this,e,r,r.multiple)
return(0,re.Oz)(a,e),1===a.length&&se(a[0])}))}function ye(e){return e}function be(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return(0,i.o)((function(n){let r={pageObjectKey:n,...t}
return(!1===r.normalize?ye:Fe)(le((0,ie.sM)(this,e,r)))}))}function Fe(e){return e.trim().replace(/\n/g," ").replace(/\s\s*/g," ")}function we(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return(0,i.o)((function(n){let r={pageObjectKey:n,...t}
const a=(0,ie.sM)(this,e,r)
return a.hasAttribute("contenteditable")?a.innerHTML:function(e){const{value:t}=e
return void 0!==t&&"select"===e.tagName.toLowerCase()?function(e){const t=Array.from(e.selectedOptions).filter((e=>!(e.disabled||"optgroup"===e.parentNode.tagName.toLowerCase()&&e.parentNode.disabled)))
return e.multiple?t.map((e=>e.value)):0===t.length?null:e.value}(e):e.value}(a)}))}const Ee={isDescriptor:!0,value(){const e=(0,re.Zn)(this)
return(e._chainedTree||e)._promise.then(...arguments)}},Ce={as:function(e){return e(this),this},blur:ce(),click:de(),clickOn:pe(),contains:fe(),fillIn:he(),focus:me(),isHidden:De(),isPresent:ge(),isVisible:ve(),select:he(),text:be(),then:Ee,value:we()}
function xe(e,t,n,u){let s
if(Array.isArray(n))return void(e[t]=n)
a(n)?s=o(n):(Object.getOwnPropertyNames(n).forEach((e=>{const{get:t,value:r}=Object.getOwnPropertyDescriptor(n,e)
if("function"==typeof t)Object.defineProperty(n,e,{value:(0,i.o)(t)})
else if("string"==typeof r&&!["scope","testContainer"].includes(e))throw new Error(`string values are not supported in page object definitions\n\nKey: "${e}"`)})),s=n)
let l={...s}
l._chainedTree&&delete l._chainedTree,n={...Ce,...s}
const[c,d]=u(e,t,n,u)
return function(e,t){r.A.meta(e).__poDef__=t}(c,l),[c,d]}function Ae(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
if("string"==typeof e)throw new Error("Definition can not be a string")
if(e=a(e)?{...o(e)}:(0,re.iz)({},e),e.context)throw new Error('"context" key is not allowed to be passed at definition root.')
let n={object:xe},u=r.A.create(e,{builder:n,...t})
e._chainedTree=(0,i.o)((function(){return u}))
let s={object:xe}
return r.A.create(e,{builder:s,...t})}function ke(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
return(0,i.o)((function(r){return function(e,t){const n=e.getAttribute(t)
if(n)return null==n?void 0:n
const r=e.getAttributeNode(t)
if(r){const{specified:e,value:n}=r
if(e&&null!==n){const e=t.toLowerCase()
return Te.includes(e)?e:n}}}((0,ie.sM)(this,t,{pageObjectKey:r,...n}),e)}))}n(32076),n(98260),n(65356)
const Te=["checked","selected","async","autofocus","autoplay","controls","defer","disabled","hidden","ismap","loop","multiple","open","readonly","required","scoped"]
function Ne(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return(0,i.o)((function(n){let r={pageObjectKey:n,...t}
return(0,ie.nV)(this,e,r).length}))}function Re(e,t){if("string"!=typeof e)throw new Error("collection requires `scope` as the first argument")
a(t)&&(t=o(t))
let n={isDescriptor:!0,setup(r,a){var o
n.value=(o=new Be(e,t,r,a),window.Proxy?new window.Proxy(o,{get:function(e,t){if("number"==typeof t||"string"==typeof t){let n=parseInt(t,10)
if(!isNaN(n))return e.objectAt(n)}return e[t]}}):o)}}
return n}class Be{constructor(e,t,n,r){this.scope=e,this.definition=t||{},this.parent=n,this.key=r,this._itemCounter=Ae({count:Ne(e,{resetScope:this.definition.resetScope,testContainer:this.definition.testContainer})},{parent:n}),this._items=[]}get length(){return this._itemCounter.count}objectAt(e){let{key:t}=this
if(void 0===this._items[e]){let{scope:n,definition:a,parent:o}=this,i=(0,re.y1)({},n,{at:e}),u=(0,re.iz)({},a)
u.scope=i
let s=Ae(u,{parent:o})
r.A.meta(s).key=`${t}[${e}]`,this._items[e]=s}return this._items[e]}filter(){return this.toArray().filter(...arguments)}filterBy(e,t){return this.toArray().filter((n=>void 0!==t?n[e]===t:Boolean(n[e])))}forEach(){return this.toArray().forEach(...arguments)}map(){return this.toArray().map(...arguments)}mapBy(e){return this.toArray().map((t=>t[e]))}findOneBy(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
const r=this.filterBy(...t)
return this._assertFoundElements(r,...t),r[0]}findOne(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
const r=this.filter(...t)
return this._assertFoundElements(r,...t),r[0]}_assertFoundElements(e){const t=1==(arguments.length<=1?0:arguments.length-1)?"condition":`${arguments.length<=1?void 0:arguments[1]}: "${arguments.length<=2?void 0:arguments[2]}"`
e.length>1&&(0,u.hm)(this.parent,this.key,`${e.length} elements found by ${t}, but expected 1`),0===e.length&&(0,u.hm)(this.parent,this.key,`cannot find element by ${t}`)}toArray(){let{length:e}=this,t=[]
for(let n=0;n<e;n++)t.push(this.objectAt(n))
return t}}function Se(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
return(0,i.o)((function(r){let a={pageObjectKey:r,...n}
return(0,ie.sM)(this,t,a).classList.contains(e)}))}function _e(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
return(0,i.o)((function(r){let a={pageObjectKey:r,...n}
return!(0,ie.sM)(this,t,a).classList.contains(e)}))}function Oe(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
return(0,i.o)((function(r){let a={pageObjectKey:r,...n}
const o=(0,ie.sM)(this,t,a),i=function(e){return Me[e]??e}(e)
return o[i]}))}"undefined"!=typeof Symbol&&Symbol.iterator&&(Be.prototype[Symbol.iterator]=function(){let e=0,t=this.toArray()
return{next:()=>({done:e>=t.length,value:t[e++]})}})
const Me={tabindex:"tabIndex",readonly:"readOnly",maxlength:"maxLength",contenteditable:"contentEditable"}
function je(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
const{eventProperties:r}=n
return oe({...n,selector:t},(function(){const a={...r,...arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}},o=(0,ie.sM)(this,t,n)
return(0,ue.c)().triggerEvent(o,e,a)}))}function Ie(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=r?`${r}[${t}]`:t
return Array.isArray(n)?n.forEach((n=>Ie(e,t,n,r,!0))):"object"==typeof n&&null!==n?Object.keys(n).forEach((t=>Ie(e,t,n[t],o))):a?e.append(`${o}[]`,n):e.append(o,n),e}function Pe(e,t){let n=Object.keys(t)
return n.length&&(e+=`?${n.reduce(((e,n)=>Ie(e,n,t[n])),new URLSearchParams)}`),e}function qe(e){return oe((function(){let t={...arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}},n=function(e,t){return e.split("/").map((function(e){let n=e.match(/^:(.+)$/)
if(n){let[,e]=n,r=t[e]
if(void 0===r)throw new Error(`Missing parameter for '${e}'`)
return delete t[e],encodeURIComponent(r)}return e})).join("/")}(e,t)
return n=Pe(n,t),(0,ue.c)().visit(n).catch((e=>{throw new Error(`Failed to visit URL '${n}': ${e.toString()}`,{cause:e})}))}))}const Le=he
var He={attribute:ke,blurrable:ce,clickOnText:pe,clickable:de,collection:Re,contains:fe,count:Ne,create:Ae,fillable:he,focusable:me,hasClass:Se,isHidden:De,isPresent:ge,isVisible:ve,notHasClass:_e,property:Oe,selectable:he,text:be,value:we,visitable:qe,triggerable:je}},16584:(e,t,n)=>{"use strict"
n.d(t,{o:()=>a})
var r=n(25402)
function a(e){if("function"!=typeof e)throw new Error("Argument passed to `getter` must be a function.")
return{isDescriptor:!0,get(t){try{return e.call(this,t)}catch(e){if(e instanceof r.r7){if(!e.cause.key){const a=new r.r7(e.cause.message,{cause:{...e.cause,key:t}})
throw a.stack=e.stack,a}throw e}(0,r.hm)(this,t,e)}}}}n(65722),n(17861)},81018:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{alias:()=>u,getter:()=>r.o})
var r=n(16584),a=n(25402),o=n(43493)
n(65722),n(17861)
const i="PageObject does not contain aliased property"
function u(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return(0,r.o)((function(n){try{const n=function(e,t){const n=t.split(".")
let r,a=e
for(;n.length>0;){const e=n.shift()
if(null===a||"object"!=typeof a||!Object.prototype.hasOwnProperty.call(a,e))throw new Error(`${i} \`${t}\`.`)
n.length?a=a[e]:r=a[e]}return"function"==typeof r?r.bind(a):r}(this,e)
return"function"==typeof n&&t.chainable?function(){return n(...arguments),(0,o.I)(this)}:n}catch(e){(0,a.hm)(this,n,e)}}))}},33709:function(e,t){var n
!function(t,n){"use strict"
"object"==typeof e.exports?e.exports=t.document?n(t,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document")
return n(e)}:n(t)}("undefined"!=typeof window?window:this,(function(r,a){"use strict"
var o=[],i=Object.getPrototypeOf,u=o.slice,s=o.flat?function(e){return o.flat.call(e)}:function(e){return o.concat.apply([],e)},l=o.push,c=o.indexOf,d={},p=d.toString,f=d.hasOwnProperty,h=f.toString,m=h.call(Object),D={},g=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},v=function(e){return null!=e&&e===e.window},y=r.document,b={type:!0,src:!0,nonce:!0,noModule:!0}
function F(e,t,n){var r,a,o=(n=n||y).createElement("script")
if(o.text=e,t)for(r in b)(a=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,a)
n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?d[p.call(e)]||"object":typeof e}var E="3.7.1",C=/HTML$/i,x=function(e,t){return new x.fn.init(e,t)}
function A(e){var t=!!e&&"length"in e&&e.length,n=w(e)
return!g(e)&&!v(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}function k(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}x.fn=x.prototype={jquery:E,constructor:x,length:0,toArray:function(){return u.call(this)},get:function(e){return null==e?u.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e)
return t.prevObject=this,t},each:function(e){return x.each(this,e)},map:function(e){return this.pushStack(x.map(this,(function(t,n){return e.call(t,n,t)})))},slice:function(){return this.pushStack(u.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(x.grep(this,(function(e,t){return(t+1)%2})))},odd:function(){return this.pushStack(x.grep(this,(function(e,t){return t%2})))},eq:function(e){var t=this.length,n=+e+(e<0?t:0)
return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:l,sort:o.sort,splice:o.splice},x.extend=x.fn.extend=function(){var e,t,n,r,a,o,i=arguments[0]||{},u=1,s=arguments.length,l=!1
for("boolean"==typeof i&&(l=i,i=arguments[u]||{},u++),"object"==typeof i||g(i)||(i={}),u===s&&(i=this,u--);u<s;u++)if(null!=(e=arguments[u]))for(t in e)r=e[t],"__proto__"!==t&&i!==r&&(l&&r&&(x.isPlainObject(r)||(a=Array.isArray(r)))?(n=i[t],o=a&&!Array.isArray(n)?[]:a||x.isPlainObject(n)?n:{},a=!1,i[t]=x.extend(l,o,r)):void 0!==r&&(i[t]=r))
return i},x.extend({expando:"jQuery"+(E+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n
return!(!e||"[object Object]"!==p.call(e)||(t=i(e))&&("function"!=typeof(n=f.call(t,"constructor")&&t.constructor)||h.call(n)!==m))},isEmptyObject:function(e){var t
for(t in e)return!1
return!0},globalEval:function(e,t,n){F(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0
if(A(e))for(n=e.length;r<n&&!1!==t.call(e[r],r,e[r]);r++);else for(r in e)if(!1===t.call(e[r],r,e[r]))break
return e},text:function(e){var t,n="",r=0,a=e.nodeType
if(!a)for(;t=e[r++];)n+=x.text(t)
return 1===a||11===a?e.textContent:9===a?e.documentElement.textContent:3===a||4===a?e.nodeValue:n},makeArray:function(e,t){var n=t||[]
return null!=e&&(A(Object(e))?x.merge(n,"string"==typeof e?[e]:e):l.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:c.call(t,e,n)},isXMLDoc:function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement
return!C.test(t||n&&n.nodeName||"HTML")},merge:function(e,t){for(var n=+t.length,r=0,a=e.length;r<n;r++)e[a++]=t[r]
return e.length=a,e},grep:function(e,t,n){for(var r=[],a=0,o=e.length,i=!n;a<o;a++)!t(e[a],a)!==i&&r.push(e[a])
return r},map:function(e,t,n){var r,a,o=0,i=[]
if(A(e))for(r=e.length;o<r;o++)null!=(a=t(e[o],o,n))&&i.push(a)
else for(o in e)null!=(a=t(e[o],o,n))&&i.push(a)
return s(i)},guid:1,support:D}),"function"==typeof Symbol&&(x.fn[Symbol.iterator]=o[Symbol.iterator]),x.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),(function(e,t){d["[object "+t+"]"]=t.toLowerCase()}))
var T=o.pop,N=o.sort,R=o.splice,B="[\\x20\\t\\r\\n\\f]",S=new RegExp("^"+B+"+|((?:^|[^\\\\])(?:\\\\.)*)"+B+"+$","g")
x.contains=function(e,t){var n=t&&t.parentNode
return e===n||!(!n||1!==n.nodeType||!(e.contains?e.contains(n):e.compareDocumentPosition&&16&e.compareDocumentPosition(n)))}
var _=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g
function O(e,t){return t?"\0"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e}x.escapeSelector=function(e){return(e+"").replace(_,O)}
var M=y,j=l
!function(){var e,t,n,a,i,s,l,d,p,h,m=j,g=x.expando,v=0,y=0,b=ee(),F=ee(),w=ee(),E=ee(),C=function(e,t){return e===t&&(i=!0),0},A="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",_="(?:\\\\[\\da-fA-F]{1,6}"+B+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",O="\\["+B+"*("+_+")(?:"+B+"*([*^$|!~]?=)"+B+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+_+"))|)"+B+"*\\]",I=":("+_+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",P=new RegExp(B+"+","g"),q=new RegExp("^"+B+"*,"+B+"*"),L=new RegExp("^"+B+"*([>+~]|"+B+")"+B+"*"),H=new RegExp(B+"|>"),z=new RegExp(I),$=new RegExp("^"+_+"$"),V={ID:new RegExp("^#("+_+")"),CLASS:new RegExp("^\\.("+_+")"),TAG:new RegExp("^("+_+"|[*])"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+I),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+B+"*(even|odd|(([+-]|)(\\d*)n|)"+B+"*(?:([+-]|)"+B+"*(\\d+)|))"+B+"*\\)|)","i"),bool:new RegExp("^(?:"+A+")$","i"),needsContext:new RegExp("^"+B+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+B+"*((?:-\\d)?\\d*)"+B+"*\\)|)(?=[^-]|$)","i")},U=/^(?:input|select|textarea|button)$/i,W=/^h\d$/i,G=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/[+~]/,Y=new RegExp("\\\\[\\da-fA-F]{1,6}"+B+"?|\\\\([^\\r\\n\\f])","g"),Q=function(e,t){var n="0x"+e.slice(1)-65536
return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},X=function(){se()},Z=pe((function(e){return!0===e.disabled&&k(e,"fieldset")}),{dir:"parentNode",next:"legend"})
try{m.apply(o=u.call(M.childNodes),M.childNodes),o[M.childNodes.length].nodeType}catch(e){m={apply:function(e,t){j.apply(e,u.call(t))},call:function(e){j.apply(e,u.call(arguments,1))}}}function J(e,t,n,r){var a,o,i,u,l,c,f,h=t&&t.ownerDocument,v=t?t.nodeType:9
if(n=n||[],"string"!=typeof e||!e||1!==v&&9!==v&&11!==v)return n
if(!r&&(se(t),t=t||s,d)){if(11!==v&&(l=G.exec(e)))if(a=l[1]){if(9===v){if(!(i=t.getElementById(a)))return n
if(i.id===a)return m.call(n,i),n}else if(h&&(i=h.getElementById(a))&&J.contains(t,i)&&i.id===a)return m.call(n,i),n}else{if(l[2])return m.apply(n,t.getElementsByTagName(e)),n
if((a=l[3])&&t.getElementsByClassName)return m.apply(n,t.getElementsByClassName(a)),n}if(!(E[e+" "]||p&&p.test(e))){if(f=e,h=t,1===v&&(H.test(e)||L.test(e))){for((h=K.test(e)&&ue(t.parentNode)||t)==t&&D.scope||((u=t.getAttribute("id"))?u=x.escapeSelector(u):t.setAttribute("id",u=g)),o=(c=ce(e)).length;o--;)c[o]=(u?"#"+u:":scope")+" "+de(c[o])
f=c.join(",")}try{return m.apply(n,h.querySelectorAll(f)),n}catch(t){E(e,!0)}finally{u===g&&t.removeAttribute("id")}}}return ve(e.replace(S,"$1"),t,n,r)}function ee(){var e=[]
return function n(r,a){return e.push(r+" ")>t.cacheLength&&delete n[e.shift()],n[r+" "]=a}}function te(e){return e[g]=!0,e}function ne(e){var t=s.createElement("fieldset")
try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function re(e){return function(t){return k(t,"input")&&t.type===e}}function ae(e){return function(t){return(k(t,"input")||k(t,"button"))&&t.type===e}}function oe(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&Z(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function ie(e){return te((function(t){return t=+t,te((function(n,r){for(var a,o=e([],n.length,t),i=o.length;i--;)n[a=o[i]]&&(n[a]=!(r[a]=n[a]))}))}))}function ue(e){return e&&void 0!==e.getElementsByTagName&&e}function se(e){var n,r=e?e.ownerDocument||e:M
return r!=s&&9===r.nodeType&&r.documentElement?(l=(s=r).documentElement,d=!x.isXMLDoc(s),h=l.matches||l.webkitMatchesSelector||l.msMatchesSelector,l.msMatchesSelector&&M!=s&&(n=s.defaultView)&&n.top!==n&&n.addEventListener("unload",X),D.getById=ne((function(e){return l.appendChild(e).id=x.expando,!s.getElementsByName||!s.getElementsByName(x.expando).length})),D.disconnectedMatch=ne((function(e){return h.call(e,"*")})),D.scope=ne((function(){return s.querySelectorAll(":scope")})),D.cssHas=ne((function(){try{return s.querySelector(":has(*,:jqfake)"),!1}catch(e){return!0}})),D.getById?(t.filter.ID=function(e){var t=e.replace(Y,Q)
return function(e){return e.getAttribute("id")===t}},t.find.ID=function(e,t){if(void 0!==t.getElementById&&d){var n=t.getElementById(e)
return n?[n]:[]}}):(t.filter.ID=function(e){var t=e.replace(Y,Q)
return function(e){var n=void 0!==e.getAttributeNode&&e.getAttributeNode("id")
return n&&n.value===t}},t.find.ID=function(e,t){if(void 0!==t.getElementById&&d){var n,r,a,o=t.getElementById(e)
if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o]
for(a=t.getElementsByName(e),r=0;o=a[r++];)if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),t.find.TAG=function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):t.querySelectorAll(e)},t.find.CLASS=function(e,t){if(void 0!==t.getElementsByClassName&&d)return t.getElementsByClassName(e)},p=[],ne((function(e){var t
l.appendChild(e).innerHTML="<a id='"+g+"' href='' disabled='disabled'></a><select id='"+g+"-\r\\' disabled='disabled'><option selected=''></option></select>",e.querySelectorAll("[selected]").length||p.push("\\["+B+"*(?:value|"+A+")"),e.querySelectorAll("[id~="+g+"-]").length||p.push("~="),e.querySelectorAll("a#"+g+"+*").length||p.push(".#.+[+~]"),e.querySelectorAll(":checked").length||p.push(":checked"),(t=s.createElement("input")).setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),l.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&p.push(":enabled",":disabled"),(t=s.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||p.push("\\["+B+"*name"+B+"*="+B+"*(?:''|\"\")")})),D.cssHas||p.push(":has"),p=p.length&&new RegExp(p.join("|")),C=function(e,t){if(e===t)return i=!0,0
var n=!e.compareDocumentPosition-!t.compareDocumentPosition
return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!D.sortDetached&&t.compareDocumentPosition(e)===n?e===s||e.ownerDocument==M&&J.contains(M,e)?-1:t===s||t.ownerDocument==M&&J.contains(M,t)?1:a?c.call(a,e)-c.call(a,t):0:4&n?-1:1)},s):s}for(e in J.matches=function(e,t){return J(e,null,null,t)},J.matchesSelector=function(e,t){if(se(e),d&&!E[t+" "]&&(!p||!p.test(t)))try{var n=h.call(e,t)
if(n||D.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){E(t,!0)}return J(t,s,null,[e]).length>0},J.contains=function(e,t){return(e.ownerDocument||e)!=s&&se(e),x.contains(e,t)},J.attr=function(e,n){(e.ownerDocument||e)!=s&&se(e)
var r=t.attrHandle[n.toLowerCase()],a=r&&f.call(t.attrHandle,n.toLowerCase())?r(e,n,!d):void 0
return void 0!==a?a:e.getAttribute(n)},J.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},x.uniqueSort=function(e){var t,n=[],r=0,o=0
if(i=!D.sortStable,a=!D.sortStable&&u.call(e,0),N.call(e,C),i){for(;t=e[o++];)t===e[o]&&(r=n.push(o))
for(;r--;)R.call(e,n[r],1)}return a=null,e},x.fn.uniqueSort=function(){return this.pushStack(x.uniqueSort(u.apply(this)))},t=x.expr={cacheLength:50,createPseudo:te,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Y,Q),e[3]=(e[3]||e[4]||e[5]||"").replace(Y,Q),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||J.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&J.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2]
return V.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&z.test(n)&&(t=ce(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Y,Q).toLowerCase()
return"*"===e?function(){return!0}:function(e){return k(e,t)}},CLASS:function(e){var t=b[e+" "]
return t||(t=new RegExp("(^|"+B+")"+e+"("+B+"|$)"))&&b(e,(function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")}))},ATTR:function(e,t,n){return function(r){var a=J.attr(r,e)
return null==a?"!="===t:!t||(a+="","="===t?a===n:"!="===t?a!==n:"^="===t?n&&0===a.indexOf(n):"*="===t?n&&a.indexOf(n)>-1:"$="===t?n&&a.slice(-n.length)===n:"~="===t?(" "+a.replace(P," ")+" ").indexOf(n)>-1:"|="===t&&(a===n||a.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,a){var o="nth"!==e.slice(0,3),i="last"!==e.slice(-4),u="of-type"===t
return 1===r&&0===a?function(e){return!!e.parentNode}:function(t,n,s){var l,c,d,p,f,h=o!==i?"nextSibling":"previousSibling",m=t.parentNode,D=u&&t.nodeName.toLowerCase(),y=!s&&!u,b=!1
if(m){if(o){for(;h;){for(d=t;d=d[h];)if(u?k(d,D):1===d.nodeType)return!1
f=h="only"===e&&!f&&"nextSibling"}return!0}if(f=[i?m.firstChild:m.lastChild],i&&y){for(b=(p=(l=(c=m[g]||(m[g]={}))[e]||[])[0]===v&&l[1])&&l[2],d=p&&m.childNodes[p];d=++p&&d&&d[h]||(b=p=0)||f.pop();)if(1===d.nodeType&&++b&&d===t){c[e]=[v,p,b]
break}}else if(y&&(b=p=(l=(c=t[g]||(t[g]={}))[e]||[])[0]===v&&l[1]),!1===b)for(;(d=++p&&d&&d[h]||(b=p=0)||f.pop())&&(!(u?k(d,D):1===d.nodeType)||!++b||(y&&((c=d[g]||(d[g]={}))[e]=[v,b]),d!==t)););return(b-=a)===r||b%r==0&&b/r>=0}}},PSEUDO:function(e,n){var r,a=t.pseudos[e]||t.setFilters[e.toLowerCase()]||J.error("unsupported pseudo: "+e)
return a[g]?a(n):a.length>1?(r=[e,e,"",n],t.setFilters.hasOwnProperty(e.toLowerCase())?te((function(e,t){for(var r,o=a(e,n),i=o.length;i--;)e[r=c.call(e,o[i])]=!(t[r]=o[i])})):function(e){return a(e,0,r)}):a}},pseudos:{not:te((function(e){var t=[],n=[],r=ge(e.replace(S,"$1"))
return r[g]?te((function(e,t,n,a){for(var o,i=r(e,null,a,[]),u=e.length;u--;)(o=i[u])&&(e[u]=!(t[u]=o))})):function(e,a,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}})),has:te((function(e){return function(t){return J(e,t).length>0}})),contains:te((function(e){return e=e.replace(Y,Q),function(t){return(t.textContent||x.text(t)).indexOf(e)>-1}})),lang:te((function(e){return $.test(e||"")||J.error("unsupported lang: "+e),e=e.replace(Y,Q).toLowerCase(),function(t){var n
do{if(n=d?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType)
return!1}})),target:function(e){var t=r.location&&r.location.hash
return t&&t.slice(1)===e.id},root:function(e){return e===l},focus:function(e){return e===function(){try{return s.activeElement}catch(e){}}()&&s.hasFocus()&&!!(e.type||e.href||~e.tabIndex)},enabled:oe(!1),disabled:oe(!0),checked:function(e){return k(e,"input")&&!!e.checked||k(e,"option")&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1
return!0},parent:function(e){return!t.pseudos.empty(e)},header:function(e){return W.test(e.nodeName)},input:function(e){return U.test(e.nodeName)},button:function(e){return k(e,"input")&&"button"===e.type||k(e,"button")},text:function(e){var t
return k(e,"input")&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ie((function(){return[0]})),last:ie((function(e,t){return[t-1]})),eq:ie((function(e,t,n){return[n<0?n+t:n]})),even:ie((function(e,t){for(var n=0;n<t;n+=2)e.push(n)
return e})),odd:ie((function(e,t){for(var n=1;n<t;n+=2)e.push(n)
return e})),lt:ie((function(e,t,n){var r
for(r=n<0?n+t:n>t?t:n;--r>=0;)e.push(r)
return e})),gt:ie((function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r)
return e}))}},t.pseudos.nth=t.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})t.pseudos[e]=re(e)
for(e in{submit:!0,reset:!0})t.pseudos[e]=ae(e)
function le(){}function ce(e,n){var r,a,o,i,u,s,l,c=F[e+" "]
if(c)return n?0:c.slice(0)
for(u=e,s=[],l=t.preFilter;u;){for(i in r&&!(a=q.exec(u))||(a&&(u=u.slice(a[0].length)||u),s.push(o=[])),r=!1,(a=L.exec(u))&&(r=a.shift(),o.push({value:r,type:a[0].replace(S," ")}),u=u.slice(r.length)),t.filter)!(a=V[i].exec(u))||l[i]&&!(a=l[i](a))||(r=a.shift(),o.push({value:r,type:i,matches:a}),u=u.slice(r.length))
if(!r)break}return n?u.length:u?J.error(e):F(e,s).slice(0)}function de(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value
return r}function pe(e,t,n){var r=t.dir,a=t.next,o=a||r,i=n&&"parentNode"===o,u=y++
return t.first?function(t,n,a){for(;t=t[r];)if(1===t.nodeType||i)return e(t,n,a)
return!1}:function(t,n,s){var l,c,d=[v,u]
if(s){for(;t=t[r];)if((1===t.nodeType||i)&&e(t,n,s))return!0}else for(;t=t[r];)if(1===t.nodeType||i)if(c=t[g]||(t[g]={}),a&&k(t,a))t=t[r]||t
else{if((l=c[o])&&l[0]===v&&l[1]===u)return d[2]=l[2]
if(c[o]=d,d[2]=e(t,n,s))return!0}return!1}}function fe(e){return e.length>1?function(t,n,r){for(var a=e.length;a--;)if(!e[a](t,n,r))return!1
return!0}:e[0]}function he(e,t,n,r,a){for(var o,i=[],u=0,s=e.length,l=null!=t;u<s;u++)(o=e[u])&&(n&&!n(o,r,a)||(i.push(o),l&&t.push(u)))
return i}function me(e,t,n,r,a,o){return r&&!r[g]&&(r=me(r)),a&&!a[g]&&(a=me(a,o)),te((function(o,i,u,s){var l,d,p,f,h=[],D=[],g=i.length,v=o||function(e,t,n){for(var r=0,a=t.length;r<a;r++)J(e,t[r],n)
return n}(t||"*",u.nodeType?[u]:u,[]),y=!e||!o&&t?v:he(v,h,e,u,s)
if(n?n(y,f=a||(o?e:g||r)?[]:i,u,s):f=y,r)for(l=he(f,D),r(l,[],u,s),d=l.length;d--;)(p=l[d])&&(f[D[d]]=!(y[D[d]]=p))
if(o){if(a||e){if(a){for(l=[],d=f.length;d--;)(p=f[d])&&l.push(y[d]=p)
a(null,f=[],l,s)}for(d=f.length;d--;)(p=f[d])&&(l=a?c.call(o,p):h[d])>-1&&(o[l]=!(i[l]=p))}}else f=he(f===i?f.splice(g,f.length):f),a?a(null,i,f,s):m.apply(i,f)}))}function De(e){for(var r,a,o,i=e.length,u=t.relative[e[0].type],s=u||t.relative[" "],l=u?1:0,d=pe((function(e){return e===r}),s,!0),p=pe((function(e){return c.call(r,e)>-1}),s,!0),f=[function(e,t,a){var o=!u&&(a||t!=n)||((r=t).nodeType?d(e,t,a):p(e,t,a))
return r=null,o}];l<i;l++)if(a=t.relative[e[l].type])f=[pe(fe(f),a)]
else{if((a=t.filter[e[l].type].apply(null,e[l].matches))[g]){for(o=++l;o<i&&!t.relative[e[o].type];o++);return me(l>1&&fe(f),l>1&&de(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(S,"$1"),a,l<o&&De(e.slice(l,o)),o<i&&De(e=e.slice(o)),o<i&&de(e))}f.push(a)}return fe(f)}function ge(e,r){var a,o=[],i=[],u=w[e+" "]
if(!u){for(r||(r=ce(e)),a=r.length;a--;)(u=De(r[a]))[g]?o.push(u):i.push(u)
u=w(e,function(e,r){var a=r.length>0,o=e.length>0,i=function(i,u,l,c,p){var f,h,D,g=0,y="0",b=i&&[],F=[],w=n,E=i||o&&t.find.TAG("*",p),C=v+=null==w?1:Math.random()||.1,A=E.length
for(p&&(n=u==s||u||p);y!==A&&null!=(f=E[y]);y++){if(o&&f){for(h=0,u||f.ownerDocument==s||(se(f),l=!d);D=e[h++];)if(D(f,u||s,l)){m.call(c,f)
break}p&&(v=C)}a&&((f=!D&&f)&&g--,i&&b.push(f))}if(g+=y,a&&y!==g){for(h=0;D=r[h++];)D(b,F,u,l)
if(i){if(g>0)for(;y--;)b[y]||F[y]||(F[y]=T.call(c))
F=he(F)}m.apply(c,F),p&&!i&&F.length>0&&g+r.length>1&&x.uniqueSort(c)}return p&&(v=C,n=w),b}
return a?te(i):i}(i,o)),u.selector=e}return u}function ve(e,n,r,a){var o,i,u,s,l,c="function"==typeof e&&e,p=!a&&ce(e=c.selector||e)
if(r=r||[],1===p.length){if((i=p[0]=p[0].slice(0)).length>2&&"ID"===(u=i[0]).type&&9===n.nodeType&&d&&t.relative[i[1].type]){if(!(n=(t.find.ID(u.matches[0].replace(Y,Q),n)||[])[0]))return r
c&&(n=n.parentNode),e=e.slice(i.shift().value.length)}for(o=V.needsContext.test(e)?0:i.length;o--&&(u=i[o],!t.relative[s=u.type]);)if((l=t.find[s])&&(a=l(u.matches[0].replace(Y,Q),K.test(i[0].type)&&ue(n.parentNode)||n))){if(i.splice(o,1),!(e=a.length&&de(i)))return m.apply(r,a),r
break}}return(c||ge(e,p))(a,n,!d,r,!n||K.test(e)&&ue(n.parentNode)||n),r}le.prototype=t.filters=t.pseudos,t.setFilters=new le,D.sortStable=g.split("").sort(C).join("")===g,se(),D.sortDetached=ne((function(e){return 1&e.compareDocumentPosition(s.createElement("fieldset"))})),x.find=J,x.expr[":"]=x.expr.pseudos,x.unique=x.uniqueSort,J.compile=ge,J.select=ve,J.setDocument=se,J.tokenize=ce,J.escape=x.escapeSelector,J.getText=x.text,J.isXML=x.isXMLDoc,J.selectors=x.expr,J.support=x.support,J.uniqueSort=x.uniqueSort}()
var I=function(e,t,n){for(var r=[],a=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(a&&x(e).is(n))break
r.push(e)}return r},P=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e)
return n},q=x.expr.match.needsContext,L=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i
function H(e,t,n){return g(t)?x.grep(e,(function(e,r){return!!t.call(e,r,e)!==n})):t.nodeType?x.grep(e,(function(e){return e===t!==n})):"string"!=typeof t?x.grep(e,(function(e){return c.call(t,e)>-1!==n})):x.filter(t,e,n)}x.filter=function(e,t,n){var r=t[0]
return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,(function(e){return 1===e.nodeType})))},x.fn.extend({find:function(e){var t,n,r=this.length,a=this
if("string"!=typeof e)return this.pushStack(x(e).filter((function(){for(t=0;t<r;t++)if(x.contains(a[t],this))return!0})))
for(n=this.pushStack([]),t=0;t<r;t++)x.find(e,a[t],n)
return r>1?x.uniqueSort(n):n},filter:function(e){return this.pushStack(H(this,e||[],!1))},not:function(e){return this.pushStack(H(this,e||[],!0))},is:function(e){return!!H(this,"string"==typeof e&&q.test(e)?x(e):e||[],!1).length}})
var z,$=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(x.fn.init=function(e,t,n){var r,a
if(!e)return this
if(n=n||z,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:$.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e)
if(r[1]){if(t=t instanceof x?t[0]:t,x.merge(this,x.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:y,!0)),L.test(r[1])&&x.isPlainObject(t))for(r in t)g(this[r])?this[r](t[r]):this.attr(r,t[r])
return this}return(a=y.getElementById(r[2]))&&(this[0]=a,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(x):x.makeArray(e,this)}).prototype=x.fn,z=x(y)
var V=/^(?:parents|prev(?:Until|All))/,U={children:!0,contents:!0,next:!0,prev:!0}
function W(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}x.fn.extend({has:function(e){var t=x(e,this),n=t.length
return this.filter((function(){for(var e=0;e<n;e++)if(x.contains(this,t[e]))return!0}))},closest:function(e,t){var n,r=0,a=this.length,o=[],i="string"!=typeof e&&x(e)
if(!q.test(e))for(;r<a;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(i?i.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){o.push(n)
break}return this.pushStack(o.length>1?x.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?c.call(x(e),this[0]):c.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(x.uniqueSort(x.merge(this.get(),x(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),x.each({parent:function(e){var t=e.parentNode
return t&&11!==t.nodeType?t:null},parents:function(e){return I(e,"parentNode")},parentsUntil:function(e,t,n){return I(e,"parentNode",n)},next:function(e){return W(e,"nextSibling")},prev:function(e){return W(e,"previousSibling")},nextAll:function(e){return I(e,"nextSibling")},prevAll:function(e){return I(e,"previousSibling")},nextUntil:function(e,t,n){return I(e,"nextSibling",n)},prevUntil:function(e,t,n){return I(e,"previousSibling",n)},siblings:function(e){return P((e.parentNode||{}).firstChild,e)},children:function(e){return P(e.firstChild)},contents:function(e){return null!=e.contentDocument&&i(e.contentDocument)?e.contentDocument:(k(e,"template")&&(e=e.content||e),x.merge([],e.childNodes))}},(function(e,t){x.fn[e]=function(n,r){var a=x.map(this,t,n)
return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(a=x.filter(r,a)),this.length>1&&(U[e]||x.uniqueSort(a),V.test(e)&&a.reverse()),this.pushStack(a)}}))
var G=/[^\x20\t\r\n\f]+/g
function K(e){return e}function Y(e){throw e}function Q(e,t,n,r){var a
try{e&&g(a=e.promise)?a.call(e).done(t).fail(n):e&&g(a=e.then)?a.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}x.Callbacks=function(e){e="string"==typeof e?function(e){var t={}
return x.each(e.match(G)||[],(function(e,n){t[n]=!0})),t}(e):x.extend({},e)
var t,n,r,a,o=[],i=[],u=-1,s=function(){for(a=a||e.once,r=t=!0;i.length;u=-1)for(n=i.shift();++u<o.length;)!1===o[u].apply(n[0],n[1])&&e.stopOnFalse&&(u=o.length,n=!1)
e.memory||(n=!1),t=!1,a&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(u=o.length-1,i.push(n)),function t(n){x.each(n,(function(n,r){g(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==w(r)&&t(r)}))}(arguments),n&&!t&&s()),this},remove:function(){return x.each(arguments,(function(e,t){for(var n;(n=x.inArray(t,o,n))>-1;)o.splice(n,1),n<=u&&u--})),this},has:function(e){return e?x.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return a=i=[],o=n="",this},disabled:function(){return!o},lock:function(){return a=i=[],n||t||(o=n=""),this},locked:function(){return!!a},fireWith:function(e,n){return a||(n=[e,(n=n||[]).slice?n.slice():n],i.push(n),t||s()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}}
return l},x.extend({Deferred:function(e){var t=[["notify","progress",x.Callbacks("memory"),x.Callbacks("memory"),2],["resolve","done",x.Callbacks("once memory"),x.Callbacks("once memory"),0,"resolved"],["reject","fail",x.Callbacks("once memory"),x.Callbacks("once memory"),1,"rejected"]],n="pending",a={state:function(){return n},always:function(){return o.done(arguments).fail(arguments),this},catch:function(e){return a.then(null,e)},pipe:function(){var e=arguments
return x.Deferred((function(n){x.each(t,(function(t,r){var a=g(e[r[4]])&&e[r[4]]
o[r[1]]((function(){var e=a&&a.apply(this,arguments)
e&&g(e.promise)?e.promise().progress(n.notify).done(n.resolve).fail(n.reject):n[r[0]+"With"](this,a?[e]:arguments)}))})),e=null})).promise()},then:function(e,n,a){var o=0
function i(e,t,n,a){return function(){var u=this,s=arguments,l=function(){var r,l
if(!(e<o)){if((r=n.apply(u,s))===t.promise())throw new TypeError("Thenable self-resolution")
l=r&&("object"==typeof r||"function"==typeof r)&&r.then,g(l)?a?l.call(r,i(o,t,K,a),i(o,t,Y,a)):(o++,l.call(r,i(o,t,K,a),i(o,t,Y,a),i(o,t,K,t.notifyWith))):(n!==K&&(u=void 0,s=[r]),(a||t.resolveWith)(u,s))}},c=a?l:function(){try{l()}catch(r){x.Deferred.exceptionHook&&x.Deferred.exceptionHook(r,c.error),e+1>=o&&(n!==Y&&(u=void 0,s=[r]),t.rejectWith(u,s))}}
e?c():(x.Deferred.getErrorHook?c.error=x.Deferred.getErrorHook():x.Deferred.getStackHook&&(c.error=x.Deferred.getStackHook()),r.setTimeout(c))}}return x.Deferred((function(r){t[0][3].add(i(0,r,g(a)?a:K,r.notifyWith)),t[1][3].add(i(0,r,g(e)?e:K)),t[2][3].add(i(0,r,g(n)?n:Y))})).promise()},promise:function(e){return null!=e?x.extend(e,a):a}},o={}
return x.each(t,(function(e,r){var i=r[2],u=r[5]
a[r[1]]=i.add,u&&i.add((function(){n=u}),t[3-e][2].disable,t[3-e][3].disable,t[0][2].lock,t[0][3].lock),i.add(r[3].fire),o[r[0]]=function(){return o[r[0]+"With"](this===o?void 0:this,arguments),this},o[r[0]+"With"]=i.fireWith})),a.promise(o),e&&e.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),a=u.call(arguments),o=x.Deferred(),i=function(e){return function(n){r[e]=this,a[e]=arguments.length>1?u.call(arguments):n,--t||o.resolveWith(r,a)}}
if(t<=1&&(Q(e,o.done(i(n)).resolve,o.reject,!t),"pending"===o.state()||g(a[n]&&a[n].then)))return o.then()
for(;n--;)Q(a[n],i(n),o.reject)
return o.promise()}})
var X=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/
x.Deferred.exceptionHook=function(e,t){r.console&&r.console.warn&&e&&X.test(e.name)&&r.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},x.readyException=function(e){r.setTimeout((function(){throw e}))}
var Z=x.Deferred()
function J(){y.removeEventListener("DOMContentLoaded",J),r.removeEventListener("load",J),x.ready()}x.fn.ready=function(e){return Z.then(e).catch((function(e){x.readyException(e)})),this},x.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--x.readyWait:x.isReady)||(x.isReady=!0,!0!==e&&--x.readyWait>0||Z.resolveWith(y,[x]))}}),x.ready.then=Z.then,"complete"===y.readyState||"loading"!==y.readyState&&!y.documentElement.doScroll?r.setTimeout(x.ready):(y.addEventListener("DOMContentLoaded",J),r.addEventListener("load",J))
var ee=function(e,t,n,r,a,o,i){var u=0,s=e.length,l=null==n
if("object"===w(n))for(u in a=!0,n)ee(e,t,u,n[u],!0,o,i)
else if(void 0!==r&&(a=!0,g(r)||(i=!0),l&&(i?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(x(e),n)})),t))for(;u<s;u++)t(e[u],n,i?r:r.call(e[u],u,t(e[u],n)))
return a?e:l?t.call(e):s?t(e[0],n):o},te=/^-ms-/,ne=/-([a-z])/g
function re(e,t){return t.toUpperCase()}function ae(e){return e.replace(te,"ms-").replace(ne,re)}var oe=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType}
function ie(){this.expando=x.expando+ie.uid++}ie.uid=1,ie.prototype={cache:function(e){var t=e[this.expando]
return t||(t={},oe(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,a=this.cache(e)
if("string"==typeof t)a[ae(t)]=n
else for(r in t)a[ae(r)]=t[r]
return a},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][ae(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando]
if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(ae):(t=ae(t))in r?[t]:t.match(G)||[]).length
for(;n--;)delete r[t[n]]}(void 0===t||x.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando]
return void 0!==t&&!x.isEmptyObject(t)}}
var ue=new ie,se=new ie,le=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ce=/[A-Z]/g
function de(e,t,n){var r
if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ce,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=function(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:le.test(e)?JSON.parse(e):e)}(n)}catch(e){}se.set(e,t,n)}else n=void 0
return n}x.extend({hasData:function(e){return se.hasData(e)||ue.hasData(e)},data:function(e,t,n){return se.access(e,t,n)},removeData:function(e,t){se.remove(e,t)},_data:function(e,t,n){return ue.access(e,t,n)},_removeData:function(e,t){ue.remove(e,t)}}),x.fn.extend({data:function(e,t){var n,r,a,o=this[0],i=o&&o.attributes
if(void 0===e){if(this.length&&(a=se.get(o),1===o.nodeType&&!ue.get(o,"hasDataAttrs"))){for(n=i.length;n--;)i[n]&&0===(r=i[n].name).indexOf("data-")&&(r=ae(r.slice(5)),de(o,r,a[r]))
ue.set(o,"hasDataAttrs",!0)}return a}return"object"==typeof e?this.each((function(){se.set(this,e)})):ee(this,(function(t){var n
if(o&&void 0===t)return void 0!==(n=se.get(o,e))||void 0!==(n=de(o,e))?n:void 0
this.each((function(){se.set(this,e,t)}))}),null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each((function(){se.remove(this,e)}))}}),x.extend({queue:function(e,t,n){var r
if(e)return t=(t||"fx")+"queue",r=ue.get(e,t),n&&(!r||Array.isArray(n)?r=ue.access(e,t,x.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx"
var n=x.queue(e,t),r=n.length,a=n.shift(),o=x._queueHooks(e,t)
"inprogress"===a&&(a=n.shift(),r--),a&&("fx"===t&&n.unshift("inprogress"),delete o.stop,a.call(e,(function(){x.dequeue(e,t)}),o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks"
return ue.get(e,n)||ue.access(e,n,{empty:x.Callbacks("once memory").add((function(){ue.remove(e,[t+"queue",n])}))})}}),x.fn.extend({queue:function(e,t){var n=2
return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?x.queue(this[0],e):void 0===t?this:this.each((function(){var n=x.queue(this,e,t)
x._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&x.dequeue(this,e)}))},dequeue:function(e){return this.each((function(){x.dequeue(this,e)}))},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,a=x.Deferred(),o=this,i=this.length,u=function(){--r||a.resolveWith(o,[o])}
for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";i--;)(n=ue.get(o[i],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(u))
return u(),a.promise(t)}})
var pe=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,fe=new RegExp("^(?:([+-])=|)("+pe+")([a-z%]*)$","i"),he=["Top","Right","Bottom","Left"],me=y.documentElement,De=function(e){return x.contains(e.ownerDocument,e)},ge={composed:!0}
me.getRootNode&&(De=function(e){return x.contains(e.ownerDocument,e)||e.getRootNode(ge)===e.ownerDocument})
var ve=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&De(e)&&"none"===x.css(e,"display")}
function ye(e,t,n,r){var a,o,i=20,u=r?function(){return r.cur()}:function(){return x.css(e,t,"")},s=u(),l=n&&n[3]||(x.cssNumber[t]?"":"px"),c=e.nodeType&&(x.cssNumber[t]||"px"!==l&&+s)&&fe.exec(x.css(e,t))
if(c&&c[3]!==l){for(s/=2,l=l||c[3],c=+s||1;i--;)x.style(e,t,c+l),(1-o)*(1-(o=u()/s||.5))<=0&&(i=0),c/=o
c*=2,x.style(e,t,c+l),n=n||[]}return n&&(c=+c||+s||0,a=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=a)),a}var be={}
function Fe(e){var t,n=e.ownerDocument,r=e.nodeName,a=be[r]
return a||(t=n.body.appendChild(n.createElement(r)),a=x.css(t,"display"),t.parentNode.removeChild(t),"none"===a&&(a="block"),be[r]=a,a)}function we(e,t){for(var n,r,a=[],o=0,i=e.length;o<i;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(a[o]=ue.get(r,"display")||null,a[o]||(r.style.display="")),""===r.style.display&&ve(r)&&(a[o]=Fe(r))):"none"!==n&&(a[o]="none",ue.set(r,"display",n)))
for(o=0;o<i;o++)null!=a[o]&&(e[o].style.display=a[o])
return e}x.fn.extend({show:function(){return we(this,!0)},hide:function(){return we(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each((function(){ve(this)?x(this).show():x(this).hide()}))}})
var Ee,Ce,xe=/^(?:checkbox|radio)$/i,Ae=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,ke=/^$|^module$|\/(?:java|ecma)script/i
Ee=y.createDocumentFragment().appendChild(y.createElement("div")),(Ce=y.createElement("input")).setAttribute("type","radio"),Ce.setAttribute("checked","checked"),Ce.setAttribute("name","t"),Ee.appendChild(Ce),D.checkClone=Ee.cloneNode(!0).cloneNode(!0).lastChild.checked,Ee.innerHTML="<textarea>x</textarea>",D.noCloneChecked=!!Ee.cloneNode(!0).lastChild.defaultValue,Ee.innerHTML="<option></option>",D.option=!!Ee.lastChild
var Te={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]}
function Ne(e,t){var n
return n=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&k(e,t)?x.merge([e],n):n}function Re(e,t){for(var n=0,r=e.length;n<r;n++)ue.set(e[n],"globalEval",!t||ue.get(t[n],"globalEval"))}Te.tbody=Te.tfoot=Te.colgroup=Te.caption=Te.thead,Te.th=Te.td,D.option||(Te.optgroup=Te.option=[1,"<select multiple='multiple'>","</select>"])
var Be=/<|&#?\w+;/
function Se(e,t,n,r,a){for(var o,i,u,s,l,c,d=t.createDocumentFragment(),p=[],f=0,h=e.length;f<h;f++)if((o=e[f])||0===o)if("object"===w(o))x.merge(p,o.nodeType?[o]:o)
else if(Be.test(o)){for(i=i||d.appendChild(t.createElement("div")),u=(Ae.exec(o)||["",""])[1].toLowerCase(),s=Te[u]||Te._default,i.innerHTML=s[1]+x.htmlPrefilter(o)+s[2],c=s[0];c--;)i=i.lastChild
x.merge(p,i.childNodes),(i=d.firstChild).textContent=""}else p.push(t.createTextNode(o))
for(d.textContent="",f=0;o=p[f++];)if(r&&x.inArray(o,r)>-1)a&&a.push(o)
else if(l=De(o),i=Ne(d.appendChild(o),"script"),l&&Re(i),n)for(c=0;o=i[c++];)ke.test(o.type||"")&&n.push(o)
return d}var _e=/^([^.]*)(?:\.(.+)|)/
function Oe(){return!0}function Me(){return!1}function je(e,t,n,r,a,o){var i,u
if("object"==typeof t){for(u in"string"!=typeof n&&(r=r||n,n=void 0),t)je(e,u,n,r,t[u],o)
return e}if(null==r&&null==a?(a=n,r=n=void 0):null==a&&("string"==typeof n?(a=r,r=void 0):(a=r,r=n,n=void 0)),!1===a)a=Me
else if(!a)return e
return 1===o&&(i=a,a=function(e){return x().off(e),i.apply(this,arguments)},a.guid=i.guid||(i.guid=x.guid++)),e.each((function(){x.event.add(this,t,a,r,n)}))}function Ie(e,t,n){n?(ue.set(e,t,!1),x.event.add(e,t,{namespace:!1,handler:function(e){var n,r=ue.get(this,t)
if(1&e.isTrigger&&this[t]){if(r)(x.event.special[t]||{}).delegateType&&e.stopPropagation()
else if(r=u.call(arguments),ue.set(this,t,r),this[t](),n=ue.get(this,t),ue.set(this,t,!1),r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n}else r&&(ue.set(this,t,x.event.trigger(r[0],r.slice(1),this)),e.stopPropagation(),e.isImmediatePropagationStopped=Oe)}})):void 0===ue.get(e,t)&&x.event.add(e,t,Oe)}x.event={global:{},add:function(e,t,n,r,a){var o,i,u,s,l,c,d,p,f,h,m,D=ue.get(e)
if(oe(e))for(n.handler&&(n=(o=n).handler,a=o.selector),a&&x.find.matchesSelector(me,a),n.guid||(n.guid=x.guid++),(s=D.events)||(s=D.events=Object.create(null)),(i=D.handle)||(i=D.handle=function(t){return void 0!==x&&x.event.triggered!==t.type?x.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(G)||[""]).length;l--;)f=m=(u=_e.exec(t[l])||[])[1],h=(u[2]||"").split(".").sort(),f&&(d=x.event.special[f]||{},f=(a?d.delegateType:d.bindType)||f,d=x.event.special[f]||{},c=x.extend({type:f,origType:m,data:r,handler:n,guid:n.guid,selector:a,needsContext:a&&x.expr.match.needsContext.test(a),namespace:h.join(".")},o),(p=s[f])||((p=s[f]=[]).delegateCount=0,d.setup&&!1!==d.setup.call(e,r,h,i)||e.addEventListener&&e.addEventListener(f,i)),d.add&&(d.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),a?p.splice(p.delegateCount++,0,c):p.push(c),x.event.global[f]=!0)},remove:function(e,t,n,r,a){var o,i,u,s,l,c,d,p,f,h,m,D=ue.hasData(e)&&ue.get(e)
if(D&&(s=D.events)){for(l=(t=(t||"").match(G)||[""]).length;l--;)if(f=m=(u=_e.exec(t[l])||[])[1],h=(u[2]||"").split(".").sort(),f){for(d=x.event.special[f]||{},p=s[f=(r?d.delegateType:d.bindType)||f]||[],u=u[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=o=p.length;o--;)c=p[o],!a&&m!==c.origType||n&&n.guid!==c.guid||u&&!u.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,d.remove&&d.remove.call(e,c))
i&&!p.length&&(d.teardown&&!1!==d.teardown.call(e,h,D.handle)||x.removeEvent(e,f,D.handle),delete s[f])}else for(f in s)x.event.remove(e,f+t[l],n,r,!0)
x.isEmptyObject(s)&&ue.remove(e,"handle events")}},dispatch:function(e){var t,n,r,a,o,i,u=new Array(arguments.length),s=x.event.fix(e),l=(ue.get(this,"events")||Object.create(null))[s.type]||[],c=x.event.special[s.type]||{}
for(u[0]=s,t=1;t<arguments.length;t++)u[t]=arguments[t]
if(s.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,s)){for(i=x.event.handlers.call(this,s,l),t=0;(a=i[t++])&&!s.isPropagationStopped();)for(s.currentTarget=a.elem,n=0;(o=a.handlers[n++])&&!s.isImmediatePropagationStopped();)s.rnamespace&&!1!==o.namespace&&!s.rnamespace.test(o.namespace)||(s.handleObj=o,s.data=o.data,void 0!==(r=((x.event.special[o.origType]||{}).handle||o.handler).apply(a.elem,u))&&!1===(s.result=r)&&(s.preventDefault(),s.stopPropagation()))
return c.postDispatch&&c.postDispatch.call(this,s),s.result}},handlers:function(e,t){var n,r,a,o,i,u=[],s=t.delegateCount,l=e.target
if(s&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],i={},n=0;n<s;n++)void 0===i[a=(r=t[n]).selector+" "]&&(i[a]=r.needsContext?x(a,this).index(l)>-1:x.find(a,this,null,[l]).length),i[a]&&o.push(r)
o.length&&u.push({elem:l,handlers:o})}return l=this,s<t.length&&u.push({elem:l,handlers:t.slice(s)}),u},addProp:function(e,t){Object.defineProperty(x.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[x.expando]?e:new x.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e
return xe.test(t.type)&&t.click&&k(t,"input")&&Ie(t,"click",!0),!1},trigger:function(e){var t=this||e
return xe.test(t.type)&&t.click&&k(t,"input")&&Ie(t,"click"),!0},_default:function(e){var t=e.target
return xe.test(t.type)&&t.click&&k(t,"input")&&ue.get(t,"click")||k(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},x.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},x.Event=function(e,t){if(!(this instanceof x.Event))return new x.Event(e,t)
e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Oe:Me,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&x.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[x.expando]=!0},x.Event.prototype={constructor:x.Event,isDefaultPrevented:Me,isPropagationStopped:Me,isImmediatePropagationStopped:Me,isSimulated:!1,preventDefault:function(){var e=this.originalEvent
this.isDefaultPrevented=Oe,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent
this.isPropagationStopped=Oe,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent
this.isImmediatePropagationStopped=Oe,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},x.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},x.event.addProp),x.each({focus:"focusin",blur:"focusout"},(function(e,t){function n(e){if(y.documentMode){var n=ue.get(this,"handle"),r=x.event.fix(e)
r.type="focusin"===e.type?"focus":"blur",r.isSimulated=!0,n(e),r.target===r.currentTarget&&n(r)}else x.event.simulate(t,e.target,x.event.fix(e))}x.event.special[e]={setup:function(){var r
if(Ie(this,e,!0),!y.documentMode)return!1;(r=ue.get(this,t))||this.addEventListener(t,n),ue.set(this,t,(r||0)+1)},trigger:function(){return Ie(this,e),!0},teardown:function(){var e
if(!y.documentMode)return!1;(e=ue.get(this,t)-1)?ue.set(this,t,e):(this.removeEventListener(t,n),ue.remove(this,t))},_default:function(t){return ue.get(t.target,e)},delegateType:t},x.event.special[t]={setup:function(){var r=this.ownerDocument||this.document||this,a=y.documentMode?this:r,o=ue.get(a,t)
o||(y.documentMode?this.addEventListener(t,n):r.addEventListener(e,n,!0)),ue.set(a,t,(o||0)+1)},teardown:function(){var r=this.ownerDocument||this.document||this,a=y.documentMode?this:r,o=ue.get(a,t)-1
o?ue.set(a,t,o):(y.documentMode?this.removeEventListener(t,n):r.removeEventListener(e,n,!0),ue.remove(a,t))}}})),x.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},(function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=e.relatedTarget,a=e.handleObj
return r&&(r===this||x.contains(this,r))||(e.type=a.origType,n=a.handler.apply(this,arguments),e.type=t),n}}})),x.fn.extend({on:function(e,t,n,r){return je(this,e,t,n,r)},one:function(e,t,n,r){return je(this,e,t,n,r,1)},off:function(e,t,n){var r,a
if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,x(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this
if("object"==typeof e){for(a in e)this.off(a,t,e[a])
return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Me),this.each((function(){x.event.remove(this,e,n,t)}))}})
var Pe=/<script|<style|<link/i,qe=/checked\s*(?:[^=]|=\s*.checked.)/i,Le=/^\s*<!\[CDATA\[|\]\]>\s*$/g
function He(e,t){return k(e,"table")&&k(11!==t.nodeType?t:t.firstChild,"tr")&&x(e).children("tbody")[0]||e}function ze(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function $e(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Ve(e,t){var n,r,a,o,i,u
if(1===t.nodeType){if(ue.hasData(e)&&(u=ue.get(e).events))for(a in ue.remove(t,"handle events"),u)for(n=0,r=u[a].length;n<r;n++)x.event.add(t,a,u[a][n])
se.hasData(e)&&(o=se.access(e),i=x.extend({},o),se.set(t,i))}}function Ue(e,t){var n=t.nodeName.toLowerCase()
"input"===n&&xe.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function We(e,t,n,r){t=s(t)
var a,o,i,u,l,c,d=0,p=e.length,f=p-1,h=t[0],m=g(h)
if(m||p>1&&"string"==typeof h&&!D.checkClone&&qe.test(h))return e.each((function(a){var o=e.eq(a)
m&&(t[0]=h.call(this,a,o.html())),We(o,t,n,r)}))
if(p&&(o=(a=Se(t,e[0].ownerDocument,!1,e,r)).firstChild,1===a.childNodes.length&&(a=o),o||r)){for(u=(i=x.map(Ne(a,"script"),ze)).length;d<p;d++)l=a,d!==f&&(l=x.clone(l,!0,!0),u&&x.merge(i,Ne(l,"script"))),n.call(e[d],l,d)
if(u)for(c=i[i.length-1].ownerDocument,x.map(i,$e),d=0;d<u;d++)l=i[d],ke.test(l.type||"")&&!ue.access(l,"globalEval")&&x.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?x._evalUrl&&!l.noModule&&x._evalUrl(l.src,{nonce:l.nonce||l.getAttribute("nonce")},c):F(l.textContent.replace(Le,""),l,c))}return e}function Ge(e,t,n){for(var r,a=t?x.filter(t,e):e,o=0;null!=(r=a[o]);o++)n||1!==r.nodeType||x.cleanData(Ne(r)),r.parentNode&&(n&&De(r)&&Re(Ne(r,"script")),r.parentNode.removeChild(r))
return e}x.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,a,o,i,u=e.cloneNode(!0),s=De(e)
if(!(D.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(i=Ne(u),r=0,a=(o=Ne(e)).length;r<a;r++)Ue(o[r],i[r])
if(t)if(n)for(o=o||Ne(e),i=i||Ne(u),r=0,a=o.length;r<a;r++)Ve(o[r],i[r])
else Ve(e,u)
return(i=Ne(u,"script")).length>0&&Re(i,!s&&Ne(e,"script")),u},cleanData:function(e){for(var t,n,r,a=x.event.special,o=0;void 0!==(n=e[o]);o++)if(oe(n)){if(t=n[ue.expando]){if(t.events)for(r in t.events)a[r]?x.event.remove(n,r):x.removeEvent(n,r,t.handle)
n[ue.expando]=void 0}n[se.expando]&&(n[se.expando]=void 0)}}}),x.fn.extend({detach:function(e){return Ge(this,e,!0)},remove:function(e){return Ge(this,e)},text:function(e){return ee(this,(function(e){return void 0===e?x.text(this):this.empty().each((function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)}))}),null,e,arguments.length)},append:function(){return We(this,arguments,(function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||He(this,e).appendChild(e)}))},prepend:function(){return We(this,arguments,(function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=He(this,e)
t.insertBefore(e,t.firstChild)}}))},before:function(){return We(this,arguments,(function(e){this.parentNode&&this.parentNode.insertBefore(e,this)}))},after:function(){return We(this,arguments,(function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)}))},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(x.cleanData(Ne(e,!1)),e.textContent="")
return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map((function(){return x.clone(this,e,t)}))},html:function(e){return ee(this,(function(e){var t=this[0]||{},n=0,r=this.length
if(void 0===e&&1===t.nodeType)return t.innerHTML
if("string"==typeof e&&!Pe.test(e)&&!Te[(Ae.exec(e)||["",""])[1].toLowerCase()]){e=x.htmlPrefilter(e)
try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(x.cleanData(Ne(t,!1)),t.innerHTML=e)
t=0}catch(e){}}t&&this.empty().append(e)}),null,e,arguments.length)},replaceWith:function(){var e=[]
return We(this,arguments,(function(t){var n=this.parentNode
x.inArray(this,e)<0&&(x.cleanData(Ne(this)),n&&n.replaceChild(t,this))}),e)}}),x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},(function(e,t){x.fn[e]=function(e){for(var n,r=[],a=x(e),o=a.length-1,i=0;i<=o;i++)n=i===o?this:this.clone(!0),x(a[i])[t](n),l.apply(r,n.get())
return this.pushStack(r)}}))
var Ke=new RegExp("^("+pe+")(?!px)[a-z%]+$","i"),Ye=/^--/,Qe=function(e){var t=e.ownerDocument.defaultView
return t&&t.opener||(t=r),t.getComputedStyle(e)},Xe=function(e,t,n){var r,a,o={}
for(a in t)o[a]=e.style[a],e.style[a]=t[a]
for(a in r=n.call(e),t)e.style[a]=o[a]
return r},Ze=new RegExp(he.join("|"),"i")
function Je(e,t,n){var r,a,o,i,u=Ye.test(t),s=e.style
return(n=n||Qe(e))&&(i=n.getPropertyValue(t)||n[t],u&&i&&(i=i.replace(S,"$1")||void 0),""!==i||De(e)||(i=x.style(e,t)),!D.pixelBoxStyles()&&Ke.test(i)&&Ze.test(t)&&(r=s.width,a=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=i,i=n.width,s.width=r,s.minWidth=a,s.maxWidth=o)),void 0!==i?i+"":i}function et(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments)
delete this.get}}}!function(){function e(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",me.appendChild(l).appendChild(c)
var e=r.getComputedStyle(c)
n="1%"!==e.top,s=12===t(e.marginLeft),c.style.right="60%",i=36===t(e.right),a=36===t(e.width),c.style.position="absolute",o=12===t(c.offsetWidth/3),me.removeChild(l),c=null}}function t(e){return Math.round(parseFloat(e))}var n,a,o,i,u,s,l=y.createElement("div"),c=y.createElement("div")
c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",D.clearCloneStyle="content-box"===c.style.backgroundClip,x.extend(D,{boxSizingReliable:function(){return e(),a},pixelBoxStyles:function(){return e(),i},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),o},reliableTrDimensions:function(){var e,t,n,a
return null==u&&(e=y.createElement("table"),t=y.createElement("tr"),n=y.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="box-sizing:content-box;border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",me.appendChild(e).appendChild(t).appendChild(n),a=r.getComputedStyle(t),u=parseInt(a.height,10)+parseInt(a.borderTopWidth,10)+parseInt(a.borderBottomWidth,10)===t.offsetHeight,me.removeChild(e)),u}}))}()
var tt=["Webkit","Moz","ms"],nt=y.createElement("div").style,rt={}
function at(e){return x.cssProps[e]||rt[e]||(e in nt?e:rt[e]=function(e){for(var t=e[0].toUpperCase()+e.slice(1),n=tt.length;n--;)if((e=tt[n]+t)in nt)return e}(e)||e)}var ot=/^(none|table(?!-c[ea]).+)/,it={position:"absolute",visibility:"hidden",display:"block"},ut={letterSpacing:"0",fontWeight:"400"}
function st(e,t,n){var r=fe.exec(t)
return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function lt(e,t,n,r,a,o){var i="width"===t?1:0,u=0,s=0,l=0
if(n===(r?"border":"content"))return 0
for(;i<4;i+=2)"margin"===n&&(l+=x.css(e,n+he[i],!0,a)),r?("content"===n&&(s-=x.css(e,"padding"+he[i],!0,a)),"margin"!==n&&(s-=x.css(e,"border"+he[i]+"Width",!0,a))):(s+=x.css(e,"padding"+he[i],!0,a),"padding"!==n?s+=x.css(e,"border"+he[i]+"Width",!0,a):u+=x.css(e,"border"+he[i]+"Width",!0,a))
return!r&&o>=0&&(s+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-s-u-.5))||0),s+l}function ct(e,t,n){var r=Qe(e),a=(!D.boxSizingReliable()||n)&&"border-box"===x.css(e,"boxSizing",!1,r),o=a,i=Je(e,t,r),u="offset"+t[0].toUpperCase()+t.slice(1)
if(Ke.test(i)){if(!n)return i
i="auto"}return(!D.boxSizingReliable()&&a||!D.reliableTrDimensions()&&k(e,"tr")||"auto"===i||!parseFloat(i)&&"inline"===x.css(e,"display",!1,r))&&e.getClientRects().length&&(a="border-box"===x.css(e,"boxSizing",!1,r),(o=u in e)&&(i=e[u])),(i=parseFloat(i)||0)+lt(e,t,n||(a?"border":"content"),o,r,i)+"px"}function dt(e,t,n,r,a){return new dt.prototype.init(e,t,n,r,a)}x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Je(e,"opacity")
return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var a,o,i,u=ae(t),s=Ye.test(t),l=e.style
if(s||(t=at(u)),i=x.cssHooks[t]||x.cssHooks[u],void 0===n)return i&&"get"in i&&void 0!==(a=i.get(e,!1,r))?a:l[t]
"string"==(o=typeof n)&&(a=fe.exec(n))&&a[1]&&(n=ye(e,t,a),o="number"),null!=n&&n==n&&("number"!==o||s||(n+=a&&a[3]||(x.cssNumber[u]?"":"px")),D.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),i&&"set"in i&&void 0===(n=i.set(e,n,r))||(s?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var a,o,i,u=ae(t)
return Ye.test(t)||(t=at(u)),(i=x.cssHooks[t]||x.cssHooks[u])&&"get"in i&&(a=i.get(e,!0,n)),void 0===a&&(a=Je(e,t,r)),"normal"===a&&t in ut&&(a=ut[t]),""===n||n?(o=parseFloat(a),!0===n||isFinite(o)?o||0:a):a}}),x.each(["height","width"],(function(e,t){x.cssHooks[t]={get:function(e,n,r){if(n)return!ot.test(x.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?ct(e,t,r):Xe(e,it,(function(){return ct(e,t,r)}))},set:function(e,n,r){var a,o=Qe(e),i=!D.scrollboxSize()&&"absolute"===o.position,u=(i||r)&&"border-box"===x.css(e,"boxSizing",!1,o),s=r?lt(e,t,r,u,o):0
return u&&i&&(s-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-lt(e,t,"border",!1,o)-.5)),s&&(a=fe.exec(n))&&"px"!==(a[3]||"px")&&(e.style[t]=n,n=x.css(e,t)),st(0,n,s)}}})),x.cssHooks.marginLeft=et(D.reliableMarginLeft,(function(e,t){if(t)return(parseFloat(Je(e,"marginLeft"))||e.getBoundingClientRect().left-Xe(e,{marginLeft:0},(function(){return e.getBoundingClientRect().left})))+"px"})),x.each({margin:"",padding:"",border:"Width"},(function(e,t){x.cssHooks[e+t]={expand:function(n){for(var r=0,a={},o="string"==typeof n?n.split(" "):[n];r<4;r++)a[e+he[r]+t]=o[r]||o[r-2]||o[0]
return a}},"margin"!==e&&(x.cssHooks[e+t].set=st)})),x.fn.extend({css:function(e,t){return ee(this,(function(e,t,n){var r,a,o={},i=0
if(Array.isArray(t)){for(r=Qe(e),a=t.length;i<a;i++)o[t[i]]=x.css(e,t[i],!1,r)
return o}return void 0!==n?x.style(e,t,n):x.css(e,t)}),e,t,arguments.length>1)}}),x.Tween=dt,dt.prototype={constructor:dt,init:function(e,t,n,r,a,o){this.elem=e,this.prop=n,this.easing=a||x.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=dt.propHooks[this.prop]
return e&&e.get?e.get(this):dt.propHooks._default.get(this)},run:function(e){var t,n=dt.propHooks[this.prop]
return this.options.duration?this.pos=t=x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):dt.propHooks._default.set(this),this}},dt.prototype.init.prototype=dt.prototype,dt.propHooks={_default:{get:function(e){var t
return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=x.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):1!==e.elem.nodeType||!x.cssHooks[e.prop]&&null==e.elem.style[at(e.prop)]?e.elem[e.prop]=e.now:x.style(e.elem,e.prop,e.now+e.unit)}}},dt.propHooks.scrollTop=dt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},x.fx=dt.prototype.init,x.fx.step={}
var pt,ft,ht=/^(?:toggle|show|hide)$/,mt=/queueHooks$/
function Dt(){ft&&(!1===y.hidden&&r.requestAnimationFrame?r.requestAnimationFrame(Dt):r.setTimeout(Dt,x.fx.interval),x.fx.tick())}function gt(){return r.setTimeout((function(){pt=void 0})),pt=Date.now()}function vt(e,t){var n,r=0,a={height:e}
for(t=t?1:0;r<4;r+=2-t)a["margin"+(n=he[r])]=a["padding"+n]=e
return t&&(a.opacity=a.width=e),a}function yt(e,t,n){for(var r,a=(bt.tweeners[t]||[]).concat(bt.tweeners["*"]),o=0,i=a.length;o<i;o++)if(r=a[o].call(n,t,e))return r}function bt(e,t,n){var r,a,o=0,i=bt.prefilters.length,u=x.Deferred().always((function(){delete s.elem})),s=function(){if(a)return!1
for(var t=pt||gt(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,i=l.tweens.length;o<i;o++)l.tweens[o].run(r)
return u.notifyWith(e,[l,r,n]),r<1&&i?n:(i||u.notifyWith(e,[l,1,0]),u.resolveWith(e,[l]),!1)},l=u.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{},easing:x.easing._default},n),originalProperties:t,originalOptions:n,startTime:pt||gt(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing)
return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0
if(a)return this
for(a=!0;n<r;n++)l.tweens[n].run(1)
return t?(u.notifyWith(e,[l,1,0]),u.resolveWith(e,[l,t])):u.rejectWith(e,[l,t]),this}}),c=l.props
for(function(e,t){var n,r,a,o,i
for(n in e)if(a=t[r=ae(n)],o=e[n],Array.isArray(o)&&(a=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(i=x.cssHooks[r])&&"expand"in i)for(n in o=i.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=a)
else t[r]=a}(c,l.opts.specialEasing);o<i;o++)if(r=bt.prefilters[o].call(l,e,c,l.opts))return g(r.stop)&&(x._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r
return x.map(c,yt,l),g(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),x.fx.timer(x.extend(s,{elem:e,anim:l,queue:l.opts.queue})),l}x.Animation=x.extend(bt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t)
return ye(n.elem,e,fe.exec(t),n),n}]},tweener:function(e,t){g(e)?(t=e,e=["*"]):e=e.match(G)
for(var n,r=0,a=e.length;r<a;r++)n=e[r],bt.tweeners[n]=bt.tweeners[n]||[],bt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,a,o,i,u,s,l,c,d="width"in t||"height"in t,p=this,f={},h=e.style,m=e.nodeType&&ve(e),D=ue.get(e,"fxshow")
for(r in n.queue||(null==(i=x._queueHooks(e,"fx")).unqueued&&(i.unqueued=0,u=i.empty.fire,i.empty.fire=function(){i.unqueued||u()}),i.unqueued++,p.always((function(){p.always((function(){i.unqueued--,x.queue(e,"fx").length||i.empty.fire()}))}))),t)if(a=t[r],ht.test(a)){if(delete t[r],o=o||"toggle"===a,a===(m?"hide":"show")){if("show"!==a||!D||void 0===D[r])continue
m=!0}f[r]=D&&D[r]||x.style(e,r)}if((s=!x.isEmptyObject(t))||!x.isEmptyObject(f))for(r in d&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=D&&D.display)&&(l=ue.get(e,"display")),"none"===(c=x.css(e,"display"))&&(l?c=l:(we([e],!0),l=e.style.display||l,c=x.css(e,"display"),we([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===x.css(e,"float")&&(s||(p.done((function(){h.display=l})),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always((function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]}))),s=!1,f)s||(D?"hidden"in D&&(m=D.hidden):D=ue.access(e,"fxshow",{display:l}),o&&(D.hidden=!m),m&&we([e],!0),p.done((function(){for(r in m||we([e]),ue.remove(e,"fxshow"),f)x.style(e,r,f[r])}))),s=yt(m?D[r]:0,r,p),r in D||(D[r]=s.start,m&&(s.end=s.start,s.start=0))}],prefilter:function(e,t){t?bt.prefilters.unshift(e):bt.prefilters.push(e)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||g(e)&&e,duration:e,easing:n&&t||t&&!g(t)&&t}
return x.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in x.fx.speeds?r.duration=x.fx.speeds[r.duration]:r.duration=x.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){g(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ve).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var a=x.isEmptyObject(e),o=x.speed(t,n,r),i=function(){var t=bt(this,x.extend({},e),o);(a||ue.get(this,"finish"))&&t.stop(!0)}
return i.finish=i,a||!1===o.queue?this.each(i):this.queue(o.queue,i)},stop:function(e,t,n){var r=function(e){var t=e.stop
delete e.stop,t(n)}
return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&this.queue(e||"fx",[]),this.each((function(){var t=!0,a=null!=e&&e+"queueHooks",o=x.timers,i=ue.get(this)
if(a)i[a]&&i[a].stop&&r(i[a])
else for(a in i)i[a]&&i[a].stop&&mt.test(a)&&r(i[a])
for(a=o.length;a--;)o[a].elem!==this||null!=e&&o[a].queue!==e||(o[a].anim.stop(n),t=!1,o.splice(a,1))
!t&&n||x.dequeue(this,e)}))},finish:function(e){return!1!==e&&(e=e||"fx"),this.each((function(){var t,n=ue.get(this),r=n[e+"queue"],a=n[e+"queueHooks"],o=x.timers,i=r?r.length:0
for(n.finish=!0,x.queue(this,e,[]),a&&a.stop&&a.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1))
for(t=0;t<i;t++)r[t]&&r[t].finish&&r[t].finish.call(this)
delete n.finish}))}}),x.each(["toggle","show","hide"],(function(e,t){var n=x.fn[t]
x.fn[t]=function(e,r,a){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(vt(t,!0),e,r,a)}})),x.each({slideDown:vt("show"),slideUp:vt("hide"),slideToggle:vt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},(function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}})),x.timers=[],x.fx.tick=function(){var e,t=0,n=x.timers
for(pt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1)
n.length||x.fx.stop(),pt=void 0},x.fx.timer=function(e){x.timers.push(e),x.fx.start()},x.fx.interval=13,x.fx.start=function(){ft||(ft=!0,Dt())},x.fx.stop=function(){ft=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fn.delay=function(e,t){return e=x.fx&&x.fx.speeds[e]||e,t=t||"fx",this.queue(t,(function(t,n){var a=r.setTimeout(t,e)
n.stop=function(){r.clearTimeout(a)}}))},function(){var e=y.createElement("input"),t=y.createElement("select").appendChild(y.createElement("option"))
e.type="checkbox",D.checkOn=""!==e.value,D.optSelected=t.selected,(e=y.createElement("input")).value="t",e.type="radio",D.radioValue="t"===e.value}()
var Ft,wt=x.expr.attrHandle
x.fn.extend({attr:function(e,t){return ee(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each((function(){x.removeAttr(this,e)}))}}),x.extend({attr:function(e,t,n){var r,a,o=e.nodeType
if(3!==o&&8!==o&&2!==o)return void 0===e.getAttribute?x.prop(e,t,n):(1===o&&x.isXMLDoc(e)||(a=x.attrHooks[t.toLowerCase()]||(x.expr.match.bool.test(t)?Ft:void 0)),void 0!==n?null===n?void x.removeAttr(e,t):a&&"set"in a&&void 0!==(r=a.set(e,n,t))?r:(e.setAttribute(t,n+""),n):a&&"get"in a&&null!==(r=a.get(e,t))?r:null==(r=x.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!D.radioValue&&"radio"===t&&k(e,"input")){var n=e.value
return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,a=t&&t.match(G)
if(a&&1===e.nodeType)for(;n=a[r++];)e.removeAttribute(n)}}),Ft={set:function(e,t,n){return!1===t?x.removeAttr(e,n):e.setAttribute(n,n),n}},x.each(x.expr.match.bool.source.match(/\w+/g),(function(e,t){var n=wt[t]||x.find.attr
wt[t]=function(e,t,r){var a,o,i=t.toLowerCase()
return r||(o=wt[i],wt[i]=a,a=null!=n(e,t,r)?i:null,wt[i]=o),a}}))
var Et=/^(?:input|select|textarea|button)$/i,Ct=/^(?:a|area)$/i
function xt(e){return(e.match(G)||[]).join(" ")}function At(e){return e.getAttribute&&e.getAttribute("class")||""}function kt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(G)||[]}x.fn.extend({prop:function(e,t){return ee(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each((function(){delete this[x.propFix[e]||e]}))}}),x.extend({prop:function(e,t,n){var r,a,o=e.nodeType
if(3!==o&&8!==o&&2!==o)return 1===o&&x.isXMLDoc(e)||(t=x.propFix[t]||t,a=x.propHooks[t]),void 0!==n?a&&"set"in a&&void 0!==(r=a.set(e,n,t))?r:e[t]=n:a&&"get"in a&&null!==(r=a.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=x.find.attr(e,"tabindex")
return t?parseInt(t,10):Et.test(e.nodeName)||Ct.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),D.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode
return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode
t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],(function(){x.propFix[this.toLowerCase()]=this})),x.fn.extend({addClass:function(e){var t,n,r,a,o,i
return g(e)?this.each((function(t){x(this).addClass(e.call(this,t,At(this)))})):(t=kt(e)).length?this.each((function(){if(r=At(this),n=1===this.nodeType&&" "+xt(r)+" "){for(o=0;o<t.length;o++)a=t[o],n.indexOf(" "+a+" ")<0&&(n+=a+" ")
i=xt(n),r!==i&&this.setAttribute("class",i)}})):this},removeClass:function(e){var t,n,r,a,o,i
return g(e)?this.each((function(t){x(this).removeClass(e.call(this,t,At(this)))})):arguments.length?(t=kt(e)).length?this.each((function(){if(r=At(this),n=1===this.nodeType&&" "+xt(r)+" "){for(o=0;o<t.length;o++)for(a=t[o];n.indexOf(" "+a+" ")>-1;)n=n.replace(" "+a+" "," ")
i=xt(n),r!==i&&this.setAttribute("class",i)}})):this:this.attr("class","")},toggleClass:function(e,t){var n,r,a,o,i=typeof e,u="string"===i||Array.isArray(e)
return g(e)?this.each((function(n){x(this).toggleClass(e.call(this,n,At(this),t),t)})):"boolean"==typeof t&&u?t?this.addClass(e):this.removeClass(e):(n=kt(e),this.each((function(){if(u)for(o=x(this),a=0;a<n.length;a++)r=n[a],o.hasClass(r)?o.removeClass(r):o.addClass(r)
else void 0!==e&&"boolean"!==i||((r=At(this))&&ue.set(this,"__className__",r),this.setAttribute&&this.setAttribute("class",r||!1===e?"":ue.get(this,"__className__")||""))})))},hasClass:function(e){var t,n,r=0
for(t=" "+e+" ";n=this[r++];)if(1===n.nodeType&&(" "+xt(At(n))+" ").indexOf(t)>-1)return!0
return!1}})
var Tt=/\r/g
x.fn.extend({val:function(e){var t,n,r,a=this[0]
return arguments.length?(r=g(e),this.each((function(n){var a
1===this.nodeType&&(null==(a=r?e.call(this,n,x(this).val()):e)?a="":"number"==typeof a?a+="":Array.isArray(a)&&(a=x.map(a,(function(e){return null==e?"":e+""}))),(t=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,a,"value")||(this.value=a))}))):a?(t=x.valHooks[a.type]||x.valHooks[a.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(a,"value"))?n:"string"==typeof(n=a.value)?n.replace(Tt,""):null==n?"":n:void 0}}),x.extend({valHooks:{option:{get:function(e){var t=x.find.attr(e,"value")
return null!=t?t:xt(x.text(e))}},select:{get:function(e){var t,n,r,a=e.options,o=e.selectedIndex,i="select-one"===e.type,u=i?null:[],s=i?o+1:a.length
for(r=o<0?s:i?o:0;r<s;r++)if(((n=a[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!k(n.parentNode,"optgroup"))){if(t=x(n).val(),i)return t
u.push(t)}return u},set:function(e,t){for(var n,r,a=e.options,o=x.makeArray(t),i=a.length;i--;)((r=a[i]).selected=x.inArray(x.valHooks.option.get(r),o)>-1)&&(n=!0)
return n||(e.selectedIndex=-1),o}}}}),x.each(["radio","checkbox"],(function(){x.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=x.inArray(x(e).val(),t)>-1}},D.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}))
var Nt=r.location,Rt={guid:Date.now()},Bt=/\?/
x.parseXML=function(e){var t,n
if(!e||"string"!=typeof e)return null
try{t=(new r.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||x.error("Invalid XML: "+(n?x.map(n.childNodes,(function(e){return e.textContent})).join("\n"):e)),t}
var St=/^(?:focusinfocus|focusoutblur)$/,_t=function(e){e.stopPropagation()}
x.extend(x.event,{trigger:function(e,t,n,a){var o,i,u,s,l,c,d,p,h=[n||y],m=f.call(e,"type")?e.type:e,D=f.call(e,"namespace")?e.namespace.split("."):[]
if(i=p=u=n=n||y,3!==n.nodeType&&8!==n.nodeType&&!St.test(m+x.event.triggered)&&(m.indexOf(".")>-1&&(D=m.split("."),m=D.shift(),D.sort()),l=m.indexOf(":")<0&&"on"+m,(e=e[x.expando]?e:new x.Event(m,"object"==typeof e&&e)).isTrigger=a?2:3,e.namespace=D.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+D.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:x.makeArray(t,[e]),d=x.event.special[m]||{},a||!d.trigger||!1!==d.trigger.apply(n,t))){if(!a&&!d.noBubble&&!v(n)){for(s=d.delegateType||m,St.test(s+m)||(i=i.parentNode);i;i=i.parentNode)h.push(i),u=i
u===(n.ownerDocument||y)&&h.push(u.defaultView||u.parentWindow||r)}for(o=0;(i=h[o++])&&!e.isPropagationStopped();)p=i,e.type=o>1?s:d.bindType||m,(c=(ue.get(i,"events")||Object.create(null))[e.type]&&ue.get(i,"handle"))&&c.apply(i,t),(c=l&&i[l])&&c.apply&&oe(i)&&(e.result=c.apply(i,t),!1===e.result&&e.preventDefault())
return e.type=m,a||e.isDefaultPrevented()||d._default&&!1!==d._default.apply(h.pop(),t)||!oe(n)||l&&g(n[m])&&!v(n)&&((u=n[l])&&(n[l]=null),x.event.triggered=m,e.isPropagationStopped()&&p.addEventListener(m,_t),n[m](),e.isPropagationStopped()&&p.removeEventListener(m,_t),x.event.triggered=void 0,u&&(n[l]=u)),e.result}},simulate:function(e,t,n){var r=x.extend(new x.Event,n,{type:e,isSimulated:!0})
x.event.trigger(r,null,t)}}),x.fn.extend({trigger:function(e,t){return this.each((function(){x.event.trigger(e,t,this)}))},triggerHandler:function(e,t){var n=this[0]
if(n)return x.event.trigger(e,t,n,!0)}})
var Ot=/\[\]$/,Mt=/\r?\n/g,jt=/^(?:submit|button|image|reset|file)$/i,It=/^(?:input|select|textarea|keygen)/i
function Pt(e,t,n,r){var a
if(Array.isArray(t))x.each(t,(function(t,a){n||Ot.test(e)?r(e,a):Pt(e+"["+("object"==typeof a&&null!=a?t:"")+"]",a,n,r)}))
else if(n||"object"!==w(t))r(e,t)
else for(a in t)Pt(e+"["+a+"]",t[a],n,r)}x.param=function(e,t){var n,r=[],a=function(e,t){var n=g(t)?t():t
r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)}
if(null==e)return""
if(Array.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,(function(){a(this.name,this.value)}))
else for(n in e)Pt(n,e[n],t,a)
return r.join("&")},x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map((function(){var e=x.prop(this,"elements")
return e?x.makeArray(e):this})).filter((function(){var e=this.type
return this.name&&!x(this).is(":disabled")&&It.test(this.nodeName)&&!jt.test(e)&&(this.checked||!xe.test(e))})).map((function(e,t){var n=x(this).val()
return null==n?null:Array.isArray(n)?x.map(n,(function(e){return{name:t.name,value:e.replace(Mt,"\r\n")}})):{name:t.name,value:n.replace(Mt,"\r\n")}})).get()}})
var qt=/%20/g,Lt=/#.*$/,Ht=/([?&])_=[^&]*/,zt=/^(.*?):[ \t]*([^\r\n]*)$/gm,$t=/^(?:GET|HEAD)$/,Vt=/^\/\//,Ut={},Wt={},Gt="*/".concat("*"),Kt=y.createElement("a")
function Yt(e){return function(t,n){"string"!=typeof t&&(n=t,t="*")
var r,a=0,o=t.toLowerCase().match(G)||[]
if(g(n))for(;r=o[a++];)"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function Qt(e,t,n,r){var a={},o=e===Wt
function i(u){var s
return a[u]=!0,x.each(e[u]||[],(function(e,u){var l=u(t,n,r)
return"string"!=typeof l||o||a[l]?o?!(s=l):void 0:(t.dataTypes.unshift(l),i(l),!1)})),s}return i(t.dataTypes[0])||!a["*"]&&i("*")}function Xt(e,t){var n,r,a=x.ajaxSettings.flatOptions||{}
for(n in t)void 0!==t[n]&&((a[n]?e:r||(r={}))[n]=t[n])
return r&&x.extend(!0,e,r),e}Kt.href=Nt.href,x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Nt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Nt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Gt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Xt(Xt(e,x.ajaxSettings),t):Xt(x.ajaxSettings,e)},ajaxPrefilter:Yt(Ut),ajaxTransport:Yt(Wt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{}
var n,a,o,i,u,s,l,c,d,p,f=x.ajaxSetup({},t),h=f.context||f,m=f.context&&(h.nodeType||h.jquery)?x(h):x.event,D=x.Deferred(),g=x.Callbacks("once memory"),v=f.statusCode||{},b={},F={},w="canceled",E={readyState:0,getResponseHeader:function(e){var t
if(l){if(!i)for(i={};t=zt.exec(o);)i[t[1].toLowerCase()+" "]=(i[t[1].toLowerCase()+" "]||[]).concat(t[2])
t=i[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return l?o:null},setRequestHeader:function(e,t){return null==l&&(e=F[e.toLowerCase()]=F[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==l&&(f.mimeType=e),this},statusCode:function(e){var t
if(e)if(l)E.always(e[E.status])
else for(t in e)v[t]=[v[t],e[t]]
return this},abort:function(e){var t=e||w
return n&&n.abort(t),C(0,t),this}}
if(D.promise(E),f.url=((e||f.url||Nt.href)+"").replace(Vt,Nt.protocol+"//"),f.type=t.method||t.type||f.method||f.type,f.dataTypes=(f.dataType||"*").toLowerCase().match(G)||[""],null==f.crossDomain){s=y.createElement("a")
try{s.href=f.url,s.href=s.href,f.crossDomain=Kt.protocol+"//"+Kt.host!=s.protocol+"//"+s.host}catch(e){f.crossDomain=!0}}if(f.data&&f.processData&&"string"!=typeof f.data&&(f.data=x.param(f.data,f.traditional)),Qt(Ut,f,t,E),l)return E
for(d in(c=x.event&&f.global)&&0==x.active++&&x.event.trigger("ajaxStart"),f.type=f.type.toUpperCase(),f.hasContent=!$t.test(f.type),a=f.url.replace(Lt,""),f.hasContent?f.data&&f.processData&&0===(f.contentType||"").indexOf("application/x-www-form-urlencoded")&&(f.data=f.data.replace(qt,"+")):(p=f.url.slice(a.length),f.data&&(f.processData||"string"==typeof f.data)&&(a+=(Bt.test(a)?"&":"?")+f.data,delete f.data),!1===f.cache&&(a=a.replace(Ht,"$1"),p=(Bt.test(a)?"&":"?")+"_="+Rt.guid+++p),f.url=a+p),f.ifModified&&(x.lastModified[a]&&E.setRequestHeader("If-Modified-Since",x.lastModified[a]),x.etag[a]&&E.setRequestHeader("If-None-Match",x.etag[a])),(f.data&&f.hasContent&&!1!==f.contentType||t.contentType)&&E.setRequestHeader("Content-Type",f.contentType),E.setRequestHeader("Accept",f.dataTypes[0]&&f.accepts[f.dataTypes[0]]?f.accepts[f.dataTypes[0]]+("*"!==f.dataTypes[0]?", "+Gt+"; q=0.01":""):f.accepts["*"]),f.headers)E.setRequestHeader(d,f.headers[d])
if(f.beforeSend&&(!1===f.beforeSend.call(h,E,f)||l))return E.abort()
if(w="abort",g.add(f.complete),E.done(f.success),E.fail(f.error),n=Qt(Wt,f,t,E)){if(E.readyState=1,c&&m.trigger("ajaxSend",[E,f]),l)return E
f.async&&f.timeout>0&&(u=r.setTimeout((function(){E.abort("timeout")}),f.timeout))
try{l=!1,n.send(b,C)}catch(e){if(l)throw e
C(-1,e)}}else C(-1,"No Transport")
function C(e,t,i,s){var d,p,y,b,F,w=t
l||(l=!0,u&&r.clearTimeout(u),n=void 0,o=s||"",E.readyState=e>0?4:0,d=e>=200&&e<300||304===e,i&&(b=function(e,t,n){for(var r,a,o,i,u=e.contents,s=e.dataTypes;"*"===s[0];)s.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"))
if(r)for(a in u)if(u[a]&&u[a].test(r)){s.unshift(a)
break}if(s[0]in n)o=s[0]
else{for(a in n){if(!s[0]||e.converters[a+" "+s[0]]){o=a
break}i||(i=a)}o=o||i}if(o)return o!==s[0]&&s.unshift(o),n[o]}(f,E,i)),!d&&x.inArray("script",f.dataTypes)>-1&&x.inArray("json",f.dataTypes)<0&&(f.converters["text script"]=function(){}),b=function(e,t,n,r){var a,o,i,u,s,l={},c=e.dataTypes.slice()
if(c[1])for(i in e.converters)l[i.toLowerCase()]=e.converters[i]
for(o=c.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!s&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),s=o,o=c.shift())if("*"===o)o=s
else if("*"!==s&&s!==o){if(!(i=l[s+" "+o]||l["* "+o]))for(a in l)if((u=a.split(" "))[1]===o&&(i=l[s+" "+u[0]]||l["* "+u[0]])){!0===i?i=l[a]:!0!==l[a]&&(o=u[0],c.unshift(u[1]))
break}if(!0!==i)if(i&&e.throws)t=i(t)
else try{t=i(t)}catch(e){return{state:"parsererror",error:i?e:"No conversion from "+s+" to "+o}}}return{state:"success",data:t}}(f,b,E,d),d?(f.ifModified&&((F=E.getResponseHeader("Last-Modified"))&&(x.lastModified[a]=F),(F=E.getResponseHeader("etag"))&&(x.etag[a]=F)),204===e||"HEAD"===f.type?w="nocontent":304===e?w="notmodified":(w=b.state,p=b.data,d=!(y=b.error))):(y=w,!e&&w||(w="error",e<0&&(e=0))),E.status=e,E.statusText=(t||w)+"",d?D.resolveWith(h,[p,w,E]):D.rejectWith(h,[E,w,y]),E.statusCode(v),v=void 0,c&&m.trigger(d?"ajaxSuccess":"ajaxError",[E,f,d?p:y]),g.fireWith(h,[E,w]),c&&(m.trigger("ajaxComplete",[E,f]),--x.active||x.event.trigger("ajaxStop")))}return E},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,t){return x.get(e,void 0,t,"script")}}),x.each(["get","post"],(function(e,t){x[t]=function(e,n,r,a){return g(n)&&(a=a||r,r=n,n=void 0),x.ajax(x.extend({url:e,type:t,dataType:a,data:n,success:r},x.isPlainObject(e)&&e))}})),x.ajaxPrefilter((function(e){var t
for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")})),x._evalUrl=function(e,t,n){return x.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){x.globalEval(e,t,n)}})},x.fn.extend({wrapAll:function(e){var t
return this[0]&&(g(e)&&(e=e.call(this[0])),t=x(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map((function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild
return e})).append(this)),this},wrapInner:function(e){return g(e)?this.each((function(t){x(this).wrapInner(e.call(this,t))})):this.each((function(){var t=x(this),n=t.contents()
n.length?n.wrapAll(e):t.append(e)}))},wrap:function(e){var t=g(e)
return this.each((function(n){x(this).wrapAll(t?e.call(this,n):e)}))},unwrap:function(e){return this.parent(e).not("body").each((function(){x(this).replaceWith(this.childNodes)})),this}}),x.expr.pseudos.hidden=function(e){return!x.expr.pseudos.visible(e)},x.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},x.ajaxSettings.xhr=function(){try{return new r.XMLHttpRequest}catch(e){}}
var Zt={0:200,1223:204},Jt=x.ajaxSettings.xhr()
D.cors=!!Jt&&"withCredentials"in Jt,D.ajax=Jt=!!Jt,x.ajaxTransport((function(e){var t,n
if(D.cors||Jt&&!e.crossDomain)return{send:function(a,o){var i,u=e.xhr()
if(u.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(i in e.xhrFields)u[i]=e.xhrFields[i]
for(i in e.mimeType&&u.overrideMimeType&&u.overrideMimeType(e.mimeType),e.crossDomain||a["X-Requested-With"]||(a["X-Requested-With"]="XMLHttpRequest"),a)u.setRequestHeader(i,a[i])
t=function(e){return function(){t&&(t=n=u.onload=u.onerror=u.onabort=u.ontimeout=u.onreadystatechange=null,"abort"===e?u.abort():"error"===e?"number"!=typeof u.status?o(0,"error"):o(u.status,u.statusText):o(Zt[u.status]||u.status,u.statusText,"text"!==(u.responseType||"text")||"string"!=typeof u.responseText?{binary:u.response}:{text:u.responseText},u.getAllResponseHeaders()))}},u.onload=t(),n=u.onerror=u.ontimeout=t("error"),void 0!==u.onabort?u.onabort=n:u.onreadystatechange=function(){4===u.readyState&&r.setTimeout((function(){t&&n()}))},t=t("abort")
try{u.send(e.hasContent&&e.data||null)}catch(e){if(t)throw e}},abort:function(){t&&t()}}})),x.ajaxPrefilter((function(e){e.crossDomain&&(e.contents.script=!1)})),x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",(function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")})),x.ajaxTransport("script",(function(e){var t,n
if(e.crossDomain||e.scriptAttrs)return{send:function(r,a){t=x("<script>").attr(e.scriptAttrs||{}).prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&a("error"===e.type?404:200,e.type)}),y.head.appendChild(t[0])},abort:function(){n&&n()}}}))
var en,tn=[],nn=/(=)\?(?=&|$)|\?\?/
x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=tn.pop()||x.expando+"_"+Rt.guid++
return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",(function(e,t,n){var a,o,i,u=!1!==e.jsonp&&(nn.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&nn.test(e.data)&&"data")
if(u||"jsonp"===e.dataTypes[0])return a=e.jsonpCallback=g(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,u?e[u]=e[u].replace(nn,"$1"+a):!1!==e.jsonp&&(e.url+=(Bt.test(e.url)?"&":"?")+e.jsonp+"="+a),e.converters["script json"]=function(){return i||x.error(a+" was not called"),i[0]},e.dataTypes[0]="json",o=r[a],r[a]=function(){i=arguments},n.always((function(){void 0===o?x(r).removeProp(a):r[a]=o,e[a]&&(e.jsonpCallback=t.jsonpCallback,tn.push(a)),i&&g(o)&&o(i[0]),i=o=void 0})),"script"})),D.createHTMLDocument=((en=y.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===en.childNodes.length),x.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(D.createHTMLDocument?((r=(t=y.implementation.createHTMLDocument("")).createElement("base")).href=y.location.href,t.head.appendChild(r)):t=y),o=!n&&[],(a=L.exec(e))?[t.createElement(a[1])]:(a=Se([e],t,o),o&&o.length&&x(o).remove(),x.merge([],a.childNodes)))
var r,a,o},x.fn.load=function(e,t,n){var r,a,o,i=this,u=e.indexOf(" ")
return u>-1&&(r=xt(e.slice(u)),e=e.slice(0,u)),g(t)?(n=t,t=void 0):t&&"object"==typeof t&&(a="POST"),i.length>0&&x.ajax({url:e,type:a||"GET",dataType:"html",data:t}).done((function(e){o=arguments,i.html(r?x("<div>").append(x.parseHTML(e)).find(r):e)})).always(n&&function(e,t){i.each((function(){n.apply(this,o||[e.responseText,t,e])}))}),this},x.expr.pseudos.animated=function(e){return x.grep(x.timers,(function(t){return e===t.elem})).length},x.offset={setOffset:function(e,t,n){var r,a,o,i,u,s,l=x.css(e,"position"),c=x(e),d={}
"static"===l&&(e.style.position="relative"),u=c.offset(),o=x.css(e,"top"),s=x.css(e,"left"),("absolute"===l||"fixed"===l)&&(o+s).indexOf("auto")>-1?(i=(r=c.position()).top,a=r.left):(i=parseFloat(o)||0,a=parseFloat(s)||0),g(t)&&(t=t.call(e,n,x.extend({},u))),null!=t.top&&(d.top=t.top-u.top+i),null!=t.left&&(d.left=t.left-u.left+a),"using"in t?t.using.call(e,d):c.css(d)}},x.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each((function(t){x.offset.setOffset(this,e,t)}))
var t,n,r=this[0]
return r?r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],a={top:0,left:0}
if("fixed"===x.css(r,"position"))t=r.getBoundingClientRect()
else{for(t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;e&&(e===n.body||e===n.documentElement)&&"static"===x.css(e,"position");)e=e.parentNode
e&&e!==r&&1===e.nodeType&&((a=x(e).offset()).top+=x.css(e,"borderTopWidth",!0),a.left+=x.css(e,"borderLeftWidth",!0))}return{top:t.top-a.top-x.css(r,"marginTop",!0),left:t.left-a.left-x.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map((function(){for(var e=this.offsetParent;e&&"static"===x.css(e,"position");)e=e.offsetParent
return e||me}))}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},(function(e,t){var n="pageYOffset"===t
x.fn[e]=function(r){return ee(this,(function(e,r,a){var o
if(v(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===a)return o?o[t]:e[r]
o?o.scrollTo(n?o.pageXOffset:a,n?a:o.pageYOffset):e[r]=a}),e,r,arguments.length)}})),x.each(["top","left"],(function(e,t){x.cssHooks[t]=et(D.pixelPosition,(function(e,n){if(n)return n=Je(e,t),Ke.test(n)?x(e).position()[t]+"px":n}))})),x.each({Height:"height",Width:"width"},(function(e,t){x.each({padding:"inner"+e,content:t,"":"outer"+e},(function(n,r){x.fn[r]=function(a,o){var i=arguments.length&&(n||"boolean"!=typeof a),u=n||(!0===a||!0===o?"margin":"border")
return ee(this,(function(t,n,a){var o
return v(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===a?x.css(t,n,u):x.style(t,n,a,u)}),t,i?a:void 0,i)}}))})),x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],(function(e,t){x.fn[t]=function(e){return this.on(t,e)}})),x.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.on("mouseenter",e).on("mouseleave",t||e)}}),x.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),(function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}))
var rn=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g
x.proxy=function(e,t){var n,r,a
if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return r=u.call(arguments,2),a=function(){return e.apply(t||this,r.concat(u.call(arguments)))},a.guid=e.guid=e.guid||x.guid++,a},x.holdReady=function(e){e?x.readyWait++:x.ready(!0)},x.isArray=Array.isArray,x.parseJSON=JSON.parse,x.nodeName=k,x.isFunction=g,x.isWindow=v,x.camelCase=ae,x.type=w,x.now=Date.now,x.isNumeric=function(e){var t=x.type(e)
return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},x.trim=function(e){return null==e?"":(e+"").replace(rn,"$1")},void 0===(n=function(){return x}.apply(t,[]))||(e.exports=n)
var an=r.jQuery,on=r.$
return x.noConflict=function(e){return r.$===x&&(r.$=on),e&&r.jQuery===x&&(r.jQuery=an),x},void 0===a&&(r.jQuery=r.$=x),x}))},27358:(e,t,n)=>{var r
e=n.nmd(e),function(){"use strict"
function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null!=n){var r,a,o=[],i=!0,u=!1
try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(e){u=!0,a=e}finally{try{i||null==n.return||n.return()}finally{if(u)throw a}}return o}}(e,t)||c(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||c(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){if(e){if("string"==typeof e)return d(e,t)
var n=Object.prototype.toString.call(e).slice(8,-1)
return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length)
for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n]
return r}var p=function(){if("undefined"!=typeof globalThis)return globalThis
if("undefined"!=typeof self)return self
if(void 0!==f)return f
if("undefined"!=typeof global)return global
throw new Error("Unable to locate global object")}(),f=p.window,h=p.console,m=p.setTimeout,D=p.clearTimeout,g=f&&f.document,v=f&&f.navigator,y=function(){var e="qunit-test-string"
try{return p.sessionStorage.setItem(e,e),p.sessionStorage.removeItem(e),p.sessionStorage}catch(e){return}}(),b="function"==typeof p.Map&&"function"==typeof p.Map.prototype.keys&&"function"==typeof p.Symbol&&"symbol"===a(p.Symbol.iterator)?p.Map:function(e){var t=this,n=Object.create(null),r=Object.prototype.hasOwnProperty
this.has=function(e){return r.call(n,e)},this.get=function(e){return n[e]},this.set=function(e,t){return r.call(n,e)||this.size++,n[e]=t,this},this.delete=function(e){r.call(n,e)&&(delete n[e],this.size--)},this.forEach=function(e){for(var t in n)e(n[t],t)},this.keys=function(){return Object.keys(n)},this.clear=function(){n=Object.create(null),this.size=0},this.size=0,e&&e.forEach((function(e,n){t.set(n,e)}))},F="function"==typeof p.Set&&"function"==typeof p.Set.prototype.values?p.Set:function(e){var t=Object.create(null)
return Array.isArray(e)&&e.forEach((function(e){t[e]=!0})),{add:function(e){t[e]=!0},has:function(e){return e in t},get size(){return Object.keys(t).length}}},w=Object.prototype.toString,E=Object.prototype.hasOwnProperty,C={now:f&&f.performance&&f.performance.now?f.performance.now.bind(f.performance):Date.now}
function x(e,t){return e.filter((function(e){return-1===t.indexOf(e)}))}var A=Array.prototype.includes?function(e,t){return t.includes(e)}:function(e,t){return-1!==t.indexOf(e)}
function k(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=t&&B("array",e)?[]:{}
for(var r in e)if(E.call(e,r)){var a=e[r]
n[r]=a===Object(a)?k(a,t):a}return n}function T(e,t){if(e!==Object(e))return e
var n={}
for(var r in t)E.call(t,r)&&E.call(e,r)&&(n[r]=T(e[r],t[r]))
return n}function N(e,t,n){for(var r in t)E.call(t,r)&&(void 0===t[r]?delete e[r]:n&&void 0!==e[r]||(e[r]=t[r]))
return e}function R(e){if(void 0===e)return"undefined"
if(null===e)return"null"
var t=w.call(e).match(/^\[object\s(.*)\]$/),n=t&&t[1]
switch(n){case"Number":return isNaN(e)?"nan":"number"
case"String":case"Boolean":case"Array":case"Set":case"Map":case"Date":case"RegExp":case"Function":case"Symbol":return n.toLowerCase()
default:return a(e)}}function B(e,t){return R(t)===e}function S(e,t){for(var n=e+""+t,r=0,a=0;a<n.length;a++)r=(r<<5)-r+n.charCodeAt(a),r|=0
var o=(4294967296+r).toString(16)
return o.length<8&&(o="0000000"+o),o.slice(-8)}function _(e){var t=String(e)
return"[object"===t.slice(0,7)?(e.name||"Error")+(e.message?": ".concat(e.message):""):t}function O(e){return e?(""+e).replace(/['"<>&]/g,(function(e){switch(e){case"'":return"&#039;"
case'"':return"&quot;"
case"<":return"&lt;"
case">":return"&gt;"
case"&":return"&amp;"}})):""}var M=new F(["boolean","number","string"]),j=[]
function I(e,t){return e===t}function P(e,t){return e===t||e.valueOf()===t.valueOf()}function q(e){var t=Object.getPrototypeOf(e)
return t&&null!==t.constructor?e.constructor:Object}function L(e){return"flags"in e?e.flags:e.toString().match(/[gimuy]*$/)[0]}var H={undefined:I,null:I,boolean:P,number:function(e,t){return e===t||e.valueOf()===t.valueOf()||isNaN(e.valueOf())&&isNaN(t.valueOf())},string:P,symbol:I,date:P,nan:function(){return!0},regexp:function(e,t){return e.source===t.source&&L(e)===L(t)},function:I,array:function(e,t){if(e.length!==t.length)return!1
for(var n=0;n<e.length;n++)if(!$(e[n],t[n]))return!1
return!0},set:function(e,t){if(e.size!==t.size)return!1
var n=!0
return e.forEach((function(e){if(n){var r=!1
t.forEach((function(t){if(!r){var n=j
j=[],$(t,e)&&(r=!0),j=n}})),r||(n=!1)}})),n},map:function(e,t){if(e.size!==t.size)return!1
var n=!0
return e.forEach((function(e,r){if(n){var a=!1
t.forEach((function(t,n){if(!a){var o=j
j=[],H.array([t,n],[e,r])&&(a=!0),j=o}})),a||(n=!1)}})),n}},z={undefined:I,null:I,boolean:I,number:function(e,t){return e===t||isNaN(e)&&isNaN(t)},string:I,symbol:I,function:I,object:function(e,t){if(j.some((function(n){return n.a===e&&n.b===t})))return!0
j.push({a:e,b:t})
var n=R(e),r=R(t)
if("object"!==n||"object"!==r)return n===r&&H[n](e,t)
if(!1===function(e,t){return q(e)===q(t)}(e,t))return!1
var a=[],o=[]
for(var i in e)if(a.push(i),(e.constructor===Object||void 0===e.constructor||"function"!=typeof e[i]||"function"!=typeof t[i]||e[i].toString()!==t[i].toString())&&!$(e[i],t[i]))return!1
for(var u in t)o.push(u)
return H.array(a.sort(),o.sort())}}
function $(e,t){if(e===t)return!0
var n=a(e),r=a(t)
return n!==r?("object"===n&&M.has(R(e))?e.valueOf():e)===("object"===r&&M.has(R(t))?t.valueOf():t):z[n](e,t)}function V(e,t){var n=$(e,t)
return j=[],n}function U(e,t){if(2===arguments.length)return e===t||V(e,t)
for(var n=arguments.length-1;n>0;){if(!V(arguments[n-1],arguments[n]))return!1
n--}return!0}var W={altertitle:!0,collapse:!0,failOnZeroTests:!0,filter:void 0,maxDepth:5,module:void 0,moduleId:void 0,reorder:!0,requireExpects:!1,scrolltop:!0,storage:y,testId:void 0,urlConfig:[],currentModule:{name:"",tests:[],childModules:[],testsRun:0,testsIgnored:0,hooks:{before:[],beforeEach:[],afterEach:[],after:[]}},globalHooks:{},pq:null,blocking:!0,callbacks:{},modules:[],queue:[],stats:{all:0,bad:0,testCount:0}},G=p&&p.QUnit&&!p.QUnit.version&&p.QUnit.config
G&&N(W,G),W.modules.push(W.currentModule)
var K=function(){function e(e){return'"'+e.toString().replace(/\\/g,"\\\\").replace(/"/g,'\\"')+'"'}function t(e){return e+""}function n(e,t,n){var r=i.separator(),a=i.indent(1)
return t.join&&(t=t.join(","+r+a)),t?[e,a+t,i.indent()+n].join(r):e+n}function r(e,t){if(i.maxDepth&&i.depth>i.maxDepth)return"[object Array]"
this.up()
for(var r=e.length,a=new Array(r);r--;)a[r]=this.parse(e[r],void 0,t)
return this.down(),n("[",a,"]")}var o=/^function (\w+)/,i={parse:function(e,t,n){var r=(n=n||[]).indexOf(e)
if(-1!==r)return"recursion(".concat(r-n.length,")")
t=t||this.typeOf(e)
var o=this.parsers[t],i=a(o)
if("function"===i){n.push(e)
var u=o.call(this,e,n)
return n.pop(),u}return"string"===i?o:"[ERROR: Missing QUnit.dump formatter for type "+t+"]"},typeOf:function(e){var t
return t=null===e?"null":void 0===e?"undefined":B("regexp",e)?"regexp":B("date",e)?"date":B("function",e)?"function":void 0!==e.setInterval&&void 0!==e.document&&void 0===e.nodeType?"window":9===e.nodeType?"document":e.nodeType?"node":function(e){return"[object Array]"===w.call(e)||"number"==typeof e.length&&void 0!==e.item&&(e.length?e.item(0)===e[0]:null===e.item(0)&&void 0===e[0])}(e)?"array":e.constructor===Error.prototype.constructor?"error":a(e),t},separator:function(){return this.multiline?this.HTML?"<br />":"\n":this.HTML?"&#160;":" "},indent:function(e){if(!this.multiline)return""
var t=this.indentChar
return this.HTML&&(t=t.replace(/\t/g,"   ").replace(/ /g,"&#160;")),new Array(this.depth+(e||0)).join(t)},up:function(e){this.depth+=e||1},down:function(e){this.depth-=e||1},setParser:function(e,t){this.parsers[e]=t},quote:e,literal:t,join:n,depth:1,maxDepth:W.maxDepth,parsers:{window:"[Window]",document:"[Document]",error:function(e){return'Error("'+e.message+'")'},unknown:"[Unknown]",null:"null",undefined:"undefined",function:function(e){var t="function",r="name"in e?e.name:(o.exec(e)||[])[1]
return r&&(t+=" "+r),n(t=[t+="(",i.parse(e,"functionArgs"),"){"].join(""),i.parse(e,"functionCode"),"}")},array:r,nodelist:r,arguments:r,object:function(e,t){var r=[]
if(i.maxDepth&&i.depth>i.maxDepth)return"[object Object]"
i.up()
var a=[]
for(var o in e)a.push(o)
var u=["message","name"]
for(var s in u){var l=u[s]
l in e&&!A(l,a)&&a.push(l)}a.sort()
for(var c=0;c<a.length;c++){var d=a[c],p=e[d]
r.push(i.parse(d,"key")+": "+i.parse(p,void 0,t))}return i.down(),n("{",r,"}")},node:function(e){var t=i.HTML?"&lt;":"<",n=i.HTML?"&gt;":">",r=e.nodeName.toLowerCase(),a=t+r,o=e.attributes
if(o)for(var u=0;u<o.length;u++){var s=o[u].nodeValue
s&&"inherit"!==s&&(a+=" "+o[u].nodeName+"="+i.parse(s,"attribute"))}return a+=n,3!==e.nodeType&&4!==e.nodeType||(a+=e.nodeValue),a+t+"/"+r+n},functionArgs:function(e){var t=e.length
if(!t)return""
for(var n=new Array(t);t--;)n[t]=String.fromCharCode(97+t)
return" "+n.join(", ")+" "},key:e,functionCode:"[code]",attribute:e,string:e,date:e,regexp:t,number:t,boolean:t,symbol:function(e){return e.toString()}},HTML:!1,indentChar:"  ",multiline:!0}
return i}(),Y={warn:h?Function.prototype.bind.call(h.warn||h.log,h):function(){}},Q=function(){function e(t,n){o(this,e),this.name=t,this.fullName=n?n.fullName.concat(t):[],this.globalFailureCount=0,this.tests=[],this.childSuites=[],n&&n.pushChildSuite(this)}return u(e,[{key:"start",value:function(e){return e&&(this._startTime=C.now()),{name:this.name,fullName:this.fullName.slice(),tests:this.tests.map((function(e){return e.start()})),childSuites:this.childSuites.map((function(e){return e.start()})),testCounts:{total:this.getTestCounts().total}}}},{key:"end",value:function(e){return e&&(this._endTime=C.now()),{name:this.name,fullName:this.fullName.slice(),tests:this.tests.map((function(e){return e.end()})),childSuites:this.childSuites.map((function(e){return e.end()})),testCounts:this.getTestCounts(),runtime:this.getRuntime(),status:this.getStatus()}}},{key:"pushChildSuite",value:function(e){this.childSuites.push(e)}},{key:"pushTest",value:function(e){this.tests.push(e)}},{key:"getRuntime",value:function(){return Math.round(this._endTime-this._startTime)}},{key:"getTestCounts",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{passed:0,failed:0,skipped:0,todo:0,total:0}
return e.failed+=this.globalFailureCount,e.total+=this.globalFailureCount,e=this.tests.reduce((function(e,t){return t.valid&&(e[t.getStatus()]++,e.total++),e}),e),this.childSuites.reduce((function(e,t){return t.getTestCounts(e)}),e)}},{key:"getStatus",value:function(){var e=this.getTestCounts(),t=e.total,n=e.failed,r=e.skipped,a=e.todo
return n?"failed":r===t?"skipped":a===t?"todo":"passed"}}]),e}(),X=[],Z=new Q
function J(e,t,n){var r=t[n]
"function"==typeof r&&e[n].push(r),delete t[n]}function ee(e,t){return function(n){W.currentModule!==e&&Y.warn("The `"+t+"` hook was called inside the wrong module (`"+W.currentModule.name+"`). Instead, use hooks provided by the callback to the containing module (`"+e.name+"`). This will become an error in QUnit 3.0."),e.hooks[t].push(n)}}function te(e,t,n){"function"==typeof t&&(n=t,t=void 0)
var r=function(e,t,n){var r=X.length?X.slice(-1)[0]:null,a=null!==r?[r.name,e].join(" > "):e,o=r?r.suiteReport:Z,i=null!==r&&r.skip||n.skip,u=null!==r&&r.todo||n.todo,s={}
r&&N(s,r.testEnvironment),N(s,t)
var l={name:a,parentModule:r,hooks:{before:[],beforeEach:[],afterEach:[],after:[]},testEnvironment:s,tests:[],moduleId:S(a),testsRun:0,testsIgnored:0,childModules:[],suiteReport:new Q(e,o),stats:null,skip:i,todo:!i&&u,ignored:n.ignored||!1}
return r&&r.childModules.push(l),W.modules.push(l),l}(e,t,arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}),a=r.testEnvironment,o=r.hooks
J(o,a,"before"),J(o,a,"beforeEach"),J(o,a,"afterEach"),J(o,a,"after")
var i={before:ee(r,"before"),beforeEach:ee(r,"beforeEach"),afterEach:ee(r,"afterEach"),after:ee(r,"after")},u=W.currentModule
if(W.currentModule=r,"function"==typeof n){X.push(r)
try{var s=n.call(r.testEnvironment,i)
s&&"function"==typeof s.then&&Y.warn("Returning a promise from a module callback is not supported. Instead, use hooks for async behavior. This will become an error in QUnit 3.0.")}finally{X.pop(),W.currentModule=r.parentModule||u}}}var ne=!1
function re(e,t,n){var r,a=ne&&(r=W.modules.filter((function(e){return!e.ignored})).map((function(e){return e.moduleId})),!X.some((function(e){return r.includes(e.moduleId)})))
te(e,t,n,{ignored:a})}re.only=function(){ne||(W.modules.length=0,W.queue.length=0,W.currentModule.ignored=!0),ne=!0,te.apply(void 0,arguments)},re.skip=function(e,t,n){ne||te(e,t,n,{skip:!0})},re.todo=function(e,t,n){ne||te(e,t,n,{todo:!0})}
var ae=(ie(0)||"").replace(/(:\d+)+\)?/,"").replace(/.+[/\\]/,"")
function oe(e,t){if(t=void 0===t?4:t,e&&e.stack){var n=e.stack.split("\n")
if(/^error$/i.test(n[0])&&n.shift(),ae){for(var r=[],a=t;a<n.length&&-1===n[a].indexOf(ae);a++)r.push(n[a])
if(r.length)return r.join("\n")}return n[t]}}function ie(e){var t=new Error
if(!t.stack)try{throw t}catch(e){t=e}return oe(t,e)}var ue=function(){function e(t){o(this,e),this.test=t}return u(e,[{key:"timeout",value:function(e){if("number"!=typeof e)throw new Error("You must pass a number as the duration to assert.timeout")
this.test.timeout=e,W.timeout&&(D(W.timeout),W.timeout=null,W.timeoutHandler&&this.test.timeout>0&&this.test.internalResetTimeout(this.test.timeout))}},{key:"step",value:function(e){var t=e,n=!!e
this.test.steps.push(e),void 0===e||""===e?t="You must provide a message to assert.step":"string"!=typeof e&&(t="You must provide a string value to assert.step",n=!1),this.pushResult({result:n,message:t})}},{key:"verifySteps",value:function(e,t){var n=this.test.steps.slice()
this.deepEqual(n,e,t),this.test.steps.length=0}},{key:"expect",value:function(e){if(1!==arguments.length)return this.test.expected
this.test.expected=e}},{key:"async",value:function(e){if(void 0===e)e=1
else if("number"!=typeof e)throw new TypeError("async takes number as an input")
var t=e
return this.test.internalStop(t)}},{key:"push",value:function(t,n,r,a,o){return Y.warn("assert.push is deprecated and will be removed in QUnit 3.0. Please use assert.pushResult instead (https://api.qunitjs.com/assert/pushResult)."),(this instanceof e?this:W.current.assert).pushResult({result:t,actual:n,expected:r,message:a,negative:o})}},{key:"pushResult",value:function(t){var n=this,r=n instanceof e&&n.test||W.current
if(!r)throw new Error("assertion outside test context, in "+ie(2))
return n instanceof e||(n=r.assert),n.test.pushResult(t)}},{key:"ok",value:function(e,t){t||(t=e?"okay":"failed, expected argument to be truthy, was: ".concat(K.parse(e))),this.pushResult({result:!!e,actual:e,expected:!0,message:t})}},{key:"notOk",value:function(e,t){t||(t=e?"failed, expected argument to be falsy, was: ".concat(K.parse(e)):"okay"),this.pushResult({result:!e,actual:e,expected:!1,message:t})}},{key:"true",value:function(e,t){this.pushResult({result:!0===e,actual:e,expected:!0,message:t})}},{key:"false",value:function(e,t){this.pushResult({result:!1===e,actual:e,expected:!1,message:t})}},{key:"equal",value:function(e,t,n){this.pushResult({result:t==e,actual:e,expected:t,message:n})}},{key:"notEqual",value:function(e,t,n){this.pushResult({result:t!=e,actual:e,expected:t,message:n,negative:!0})}},{key:"propEqual",value:function(e,t,n){e=k(e),t=k(t),this.pushResult({result:U(e,t),actual:e,expected:t,message:n})}},{key:"notPropEqual",value:function(e,t,n){e=k(e),t=k(t),this.pushResult({result:!U(e,t),actual:e,expected:t,message:n,negative:!0})}},{key:"propContains",value:function(e,t,n){e=T(e,t),t=k(t,!1),this.pushResult({result:U(e,t),actual:e,expected:t,message:n})}},{key:"notPropContains",value:function(e,t,n){e=T(e,t),t=k(t),this.pushResult({result:!U(e,t),actual:e,expected:t,message:n,negative:!0})}},{key:"deepEqual",value:function(e,t,n){this.pushResult({result:U(e,t),actual:e,expected:t,message:n})}},{key:"notDeepEqual",value:function(e,t,n){this.pushResult({result:!U(e,t),actual:e,expected:t,message:n,negative:!0})}},{key:"strictEqual",value:function(e,t,n){this.pushResult({result:t===e,actual:e,expected:t,message:n})}},{key:"notStrictEqual",value:function(e,t,n){this.pushResult({result:t!==e,actual:e,expected:t,message:n,negative:!0})}},{key:"throws",value:function(t,n,r){var a=s(se(n,r,"throws"),2)
n=a[0],r=a[1]
var o=this instanceof e&&this.test||W.current
if("function"==typeof t){var i,u=!1
o.ignoreGlobalErrors=!0
try{t.call(o.testEnvironment)}catch(e){i=e}if(o.ignoreGlobalErrors=!1,i){var l=s(le(i,n,r),3)
u=l[0],n=l[1],r=l[2]}o.assert.pushResult({result:u,actual:i&&_(i),expected:n,message:r})}else o.assert.pushResult({result:!1,actual:t,message:'The value provided to `assert.throws` in "'+o.testName+'" was not a function.'})}},{key:"rejects",value:function(t,n,r){var a=s(se(n,r,"rejects"),2)
n=a[0],r=a[1]
var o=this instanceof e&&this.test||W.current,i=t&&t.then
if("function"==typeof i){var u=this.async()
return i.call(t,(function(){o.assert.pushResult({result:!1,message:'The promise returned by the `assert.rejects` callback in "'+o.testName+'" did not reject.',actual:t}),u()}),(function(e){var t,a=s(le(e,n,r),3)
t=a[0],n=a[1],r=a[2],o.assert.pushResult({result:t,actual:e&&_(e),expected:n,message:r}),u()}))}o.assert.pushResult({result:!1,message:'The value provided to `assert.rejects` in "'+o.testName+'" was not a promise.',actual:t})}}]),e}()
function se(e,t,n){var r=R(e)
if("string"===r){if(void 0===t)return t=e,[e=void 0,t]
throw new Error("assert."+n+" does not accept a string value for the expected argument.\nUse a non-string object value (e.g. RegExp or validator function) instead if necessary.")}if(e&&"regexp"!==r&&"function"!==r&&"object"!==r)throw new Error("Invalid expected value type ("+r+") provided to assert."+n+".")
return[e,t]}function le(e,t,n){var r=!1,a=R(t)
if(t){if("regexp"===a)r=t.test(_(e)),t=String(t)
else if("function"===a&&void 0!==t.prototype&&e instanceof t)r=!0
else if("object"===a)r=e instanceof t.constructor&&e.name===t.name&&e.message===t.message,t=_(t)
else if("function"===a)try{r=!0===t.call({},e),t=null}catch(e){t=_(e)}}else r=!0
return[r,t,n]}ue.prototype.raises=ue.prototype.throws
var ce=Object.create(null),de=["error","runStart","suiteStart","testStart","assertion","testEnd","suiteEnd","runEnd"]
function pe(e,t){if("string"!=typeof e)throw new TypeError("eventName must be a string when emitting an event")
for(var n=ce[e],r=n?l(n):[],a=0;a<r.length;a++)r[a](t)}var fe="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}
function he(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var me={exports:{}}
!function(){var e=function(){if("undefined"!=typeof globalThis)return globalThis
if("undefined"!=typeof self)return self
if("undefined"!=typeof window)return window
if(void 0!==fe)return fe
throw new Error("unable to locate global object")}()
if("function"!=typeof e.Promise){var t=setTimeout
if(i.prototype.catch=function(e){return this.then(null,e)},i.prototype.then=function(e,t){var n=new this.constructor(o)
return u(this,new d(e,t,n)),n},i.prototype.finally=function(e){var t=this.constructor
return this.then((function(n){return t.resolve(e()).then((function(){return n}))}),(function(n){return t.resolve(e()).then((function(){return t.reject(n)}))}))},i.all=function(e){return new i((function(t,n){if(!r(e))return n(new TypeError("Promise.all accepts an array"))
var o=Array.prototype.slice.call(e)
if(0===o.length)return t([])
var i=o.length
function u(e,r){try{if(r&&("object"===a(r)||"function"==typeof r)){var s=r.then
if("function"==typeof s)return void s.call(r,(function(t){u(e,t)}),n)}o[e]=r,0==--i&&t(o)}catch(e){n(e)}}for(var s=0;s<o.length;s++)u(s,o[s])}))},i.allSettled=function(e){return new this((function(t,n){if(!e||void 0===e.length)return n(new TypeError(a(e)+" "+e+" is not iterable(cannot read property Symbol(Symbol.iterator))"))
var r=Array.prototype.slice.call(e)
if(0===r.length)return t([])
var o=r.length
function i(e,n){if(n&&("object"===a(n)||"function"==typeof n)){var u=n.then
if("function"==typeof u)return void u.call(n,(function(t){i(e,t)}),(function(n){r[e]={status:"rejected",reason:n},0==--o&&t(r)}))}r[e]={status:"fulfilled",value:n},0==--o&&t(r)}for(var u=0;u<r.length;u++)i(u,r[u])}))},i.resolve=function(e){return e&&"object"===a(e)&&e.constructor===i?e:new i((function(t){t(e)}))},i.reject=function(e){return new i((function(t,n){n(e)}))},i.race=function(e){return new i((function(t,n){if(!r(e))return n(new TypeError("Promise.race accepts an array"))
for(var a=0,o=e.length;a<o;a++)i.resolve(e[a]).then(t,n)}))},"function"==typeof setImmediate){var n=setImmediate
i._immediateFn=function(e){n(e)}}else i._immediateFn=function(e){t(e,0)}
i._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},me.exports=i}else me.exports=e.Promise
function r(e){return Boolean(e&&void 0!==e.length)}function o(){}function i(e){if(!(this instanceof i))throw new TypeError("Promises must be constructed via new")
if("function"!=typeof e)throw new TypeError("not a function")
this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],p(e,this)}function u(e,t){for(;3===e._state;)e=e._value
0!==e._state?(e._handled=!0,i._immediateFn((function(){var n=1===e._state?t.onFulfilled:t.onRejected
if(null!==n){var r
try{r=n(e._value)}catch(e){return void l(t.promise,e)}s(t.promise,r)}else(1===e._state?s:l)(t.promise,e._value)}))):e._deferreds.push(t)}function s(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.")
if(t&&("object"===a(t)||"function"==typeof t)){var n=t.then
if(t instanceof i)return e._state=3,e._value=t,void c(e)
if("function"==typeof n)return void p((r=n,o=t,function(){r.apply(o,arguments)}),e)}e._state=1,e._value=t,c(e)}catch(t){l(e,t)}var r,o}function l(e,t){e._state=2,e._value=t,c(e)}function c(e){2===e._state&&0===e._deferreds.length&&i._immediateFn((function(){e._handled||i._unhandledRejectionFn(e._value)}))
for(var t=0,n=e._deferreds.length;t<n;t++)u(e,e._deferreds[t])
e._deferreds=null}function d(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function p(e,t){var n=!1
try{e((function(e){n||(n=!0,s(t,e))}),(function(e){n||(n=!0,l(t,e))}))}catch(e){if(n)return
n=!0,l(t,e)}}}()
var De=me.exports
function ge(e,t){var n=W.callbacks[e]
if("log"!==e){var r=De.resolve()
return n.forEach((function(e){r=r.then((function(){return De.resolve(e(t))}))})),r}n.map((function(e){return e(t)}))}var ve=function(){function e(t,n,r){o(this,e),this.name=t,this.suiteName=n.name,this.fullName=n.fullName.concat(t),this.runtime=0,this.assertions=[],this.skipped=!!r.skip,this.todo=!!r.todo,this.valid=r.valid,this._startTime=0,this._endTime=0,n.pushTest(this)}return u(e,[{key:"start",value:function(e){return e&&(this._startTime=C.now()),{name:this.name,suiteName:this.suiteName,fullName:this.fullName.slice()}}},{key:"end",value:function(e){return e&&(this._endTime=C.now()),N(this.start(),{runtime:this.getRuntime(),status:this.getStatus(),errors:this.getFailedAssertions(),assertions:this.getAssertions()})}},{key:"pushAssertion",value:function(e){this.assertions.push(e)}},{key:"getRuntime",value:function(){return Math.round(this._endTime-this._startTime)}},{key:"getStatus",value:function(){return this.skipped?"skipped":(this.getFailedAssertions().length>0?this.todo:!this.todo)?this.todo?"todo":"passed":"failed"}},{key:"getFailedAssertions",value:function(){return this.assertions.filter((function(e){return!e.passed}))}},{key:"getAssertions",value:function(){return this.assertions.slice()}},{key:"slimAssertions",value:function(){this.assertions=this.assertions.map((function(e){return delete e.actual,delete e.expected,e}))}}]),e}()
function ye(e){if(this.expected=null,this.assertions=[],this.module=W.currentModule,this.steps=[],this.timeout=void 0,this.data=void 0,this.withData=!1,this.pauses=new b,this.nextPauseId=1,this.stackOffset=3,N(this,e),this.module.skip?(this.skip=!0,this.todo=!1):this.module.todo&&!this.skip&&(this.todo=!0),W.pq.finished)Y.warn("Unexpected test after runEnd. This is unstable and will fail in QUnit 3.0.")
else{if(!this.skip&&"function"!=typeof this.callback){var t=this.todo?"QUnit.todo":"QUnit.test"
throw new TypeError("You must provide a callback to ".concat(t,'("').concat(this.testName,'")'))}for(var n=0,r=this.module.tests;n<r.length;n++)this.module.tests[n].name===this.testName&&(this.testName+=" ")
this.testId=S(this.module.name,this.testName),++ye.count,this.errorForStack=new Error,this.callback&&this.callback.validTest&&(this.errorForStack.stack=void 0),this.testReport=new ve(this.testName,this.module.suiteReport,{todo:this.todo,skip:this.skip,valid:this.valid()}),this.module.tests.push({name:this.testName,testId:this.testId,skip:!!this.skip}),this.skip?(this.callback=function(){},this.async=!1,this.expected=0):this.assert=new ue(this)}}function be(){if(!W.current)throw new Error("pushFailure() assertion outside test context, in "+ie(2))
var e=W.current
return e.pushFailure.apply(e,arguments)}function Fe(){if(W.pollution=[],W.noglobals)for(var e in p)if(E.call(p,e)){if(/^qunit-test-output/.test(e))continue
W.pollution.push(e)}}ye.count=0,ye.prototype={get stack(){return oe(this.errorForStack,this.stackOffset)},before:function(){var e=this,t=this.module,n=function(e){for(var t=e,n=[];t&&0===t.testsRun;)n.push(t),t=t.parentModule
return n.reverse()}(t),r=De.resolve()
return n.forEach((function(e){r=r.then((function(){return e.stats={all:0,bad:0,started:C.now()},pe("suiteStart",e.suiteReport.start(!0)),ge("moduleStart",{name:e.name,tests:e.tests})}))})),r.then((function(){return W.current=e,e.testEnvironment=N({},t.testEnvironment),e.started=C.now(),pe("testStart",e.testReport.start(!0)),ge("testStart",{name:e.testName,module:t.name,testId:e.testId,previousFailure:e.previousFailure}).then((function(){W.pollution||Fe()}))}))},run:function(){if(W.current=this,W.notrycatch)e(this)
else try{e(this)}catch(e){this.pushFailure("Died on test #"+(this.assertions.length+1)+": "+(e.message||e)+"\n"+this.stack,oe(e,0)),Fe(),W.blocking&&Te(this)}function e(e){var t
t=e.withData?e.callback.call(e.testEnvironment,e.assert,e.data):e.callback.call(e.testEnvironment,e.assert),e.resolvePromise(t),0===e.timeout&&e.pauses.size>0&&be("Test did not finish synchronously even though assert.timeout( 0 ) was used.",ie(2))}},after:function(){!function(){var e=W.pollution
Fe()
var t=x(W.pollution,e)
t.length>0&&be("Introduced global variable(s): "+t.join(", "))
var n=x(e,W.pollution)
n.length>0&&be("Deleted global variable(s): "+n.join(", "))}()},queueGlobalHook:function(e,t){var n=this
return function(){var r
if(W.current=n,W.notrycatch)r=e.call(n.testEnvironment,n.assert)
else try{r=e.call(n.testEnvironment,n.assert)}catch(e){return void n.pushFailure("Global "+t+" failed on "+n.testName+": "+_(e),oe(e,0))}n.resolvePromise(r,t)}},queueHook:function(e,t,n){var r=this,a=function(){var n=e.call(r.testEnvironment,r.assert)
r.resolvePromise(n,t)}
return function(){if("before"===t){if(0!==n.testsRun)return
r.preserveEnvironment=!0}if("after"!==t||function(e){return e.testsRun===Re(e).filter((function(e){return!e.skip})).length-1}(n)||!(W.queue.length>0||W.pq.taskCount()>2))if(W.current=r,W.notrycatch)a()
else try{a()}catch(e){r.pushFailure(t+" failed on "+r.testName+": "+(e.message||e),oe(e,0))}}},hooks:function(e){var t=[]
return this.skip||(function(n){if(("beforeEach"===e||"afterEach"===e)&&W.globalHooks[e])for(var r=0;r<W.globalHooks[e].length;r++)t.push(n.queueGlobalHook(W.globalHooks[e][r],e))}(this),function n(r,a){if(a.parentModule&&n(r,a.parentModule),a.hooks[e].length)for(var o=0;o<a.hooks[e].length;o++)t.push(r.queueHook(a.hooks[e][o],e,a))}(this,this.module)),t},finish:function(){if(W.current=this,m&&(D(this.timeout),W.timeoutHandler=null),this.callback=void 0,this.steps.length){var e=this.steps.join(", ")
this.pushFailure("Expected assert.verifySteps() to be called before end of test "+"after using assert.step(). Unverified steps: ".concat(e),this.stack)}W.requireExpects&&null===this.expected?this.pushFailure("Expected number of assertions to be defined, but expect() was not called.",this.stack):null!==this.expected&&this.expected!==this.assertions.length?this.pushFailure("Expected "+this.expected+" assertions, but "+this.assertions.length+" were run",this.stack):null!==this.expected||this.assertions.length||this.pushFailure("Expected at least one assertion, but none were run - call expect(0) to accept zero assertions.",this.stack)
var t=this.module,n=t.name,r=this.testName,a=!!this.skip,o=!!this.todo,i=0,u=W.storage
this.runtime=Math.round(C.now()-this.started),W.stats.all+=this.assertions.length,W.stats.testCount+=1,t.stats.all+=this.assertions.length
for(var s=0;s<this.assertions.length;s++)this.assertions[s].result||(i++,W.stats.bad++,t.stats.bad++)
a?Se(t):function(e){for(e.testsRun++;e=e.parentModule;)e.testsRun++}(t),u&&(i?u.setItem("qunit-test-"+n+"-"+r,i):u.removeItem("qunit-test-"+n+"-"+r)),pe("testEnd",this.testReport.end(!0)),this.testReport.slimAssertions()
var c=this
return ge("testDone",{name:r,module:n,skipped:a,todo:o,failed:i,passed:this.assertions.length-i,total:this.assertions.length,runtime:a?0:this.runtime,assertions:this.assertions,testId:this.testId,get source(){return c.stack}}).then((function(){if(Be(t)){for(var e=[t],n=t.parentModule;n&&Be(n);)e.push(n),n=n.parentModule
var r=De.resolve()
return e.forEach((function(e){r=r.then((function(){return function(e){for(var t=[e];t.length;){var n=t.shift()
n.hooks={},t.push.apply(t,l(n.childModules))}return pe("suiteEnd",e.suiteReport.end(!0)),ge("moduleDone",{name:e.name,tests:e.tests,failed:e.stats.bad,passed:e.stats.all-e.stats.bad,total:e.stats.all,runtime:Math.round(C.now()-e.stats.started)})}(e)}))})),r}})).then((function(){W.current=void 0}))},preserveTestEnvironment:function(){this.preserveEnvironment&&(this.module.testEnvironment=this.testEnvironment,this.testEnvironment=N({},this.module.testEnvironment))},queue:function(){var e=this
if(this.valid()){var t=W.storage&&+W.storage.getItem("qunit-test-"+this.module.name+"-"+this.testName),n=W.reorder&&!!t
this.previousFailure=!!t,W.pq.add((function(){return[function(){return e.before()}].concat(l(e.hooks("before")),[function(){e.preserveTestEnvironment()}],l(e.hooks("beforeEach")),[function(){e.run()}],l(e.hooks("afterEach").reverse()),l(e.hooks("after").reverse()),[function(){e.after()},function(){return e.finish()}])}),n)}else Se(this.module)},pushResult:function(e){if(this!==W.current){var t=e&&e.message||"",n=this&&this.testName||""
throw new Error("Assertion occurred after test finished.\n> Test: "+n+"\n> Message: "+t+"\n")}var r={module:this.module.name,name:this.testName,result:e.result,message:e.message,actual:e.actual,testId:this.testId,negative:e.negative||!1,runtime:Math.round(C.now()-this.started),todo:!!this.todo}
if(E.call(e,"expected")&&(r.expected=e.expected),!e.result){var a=e.source||ie()
a&&(r.source=a)}this.logAssertion(r),this.assertions.push({result:!!e.result,message:e.message})},pushFailure:function(e,t,n){if(!(this instanceof ye))throw new Error("pushFailure() assertion outside test context, was "+ie(2))
this.pushResult({result:!1,message:e||"error",actual:n||null,source:t})},logAssertion:function(e){ge("log",e)
var t={passed:e.result,actual:e.actual,expected:e.expected,message:e.message,stack:e.source,todo:e.todo}
this.testReport.pushAssertion(t),pe("assertion",t)},internalResetTimeout:function(e){D(W.timeout),W.timeout=m(W.timeoutHandler(e),e)},internalStop:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1
W.blocking=!0
var t,n=this,r=this.nextPauseId++,a={cancelled:!1,remaining:e}
return n.pauses.set(r,a),m&&("number"==typeof n.timeout?t=n.timeout:"number"==typeof W.testTimeout&&(t=W.testTimeout),"number"==typeof t&&t>0&&(W.timeoutHandler=function(e){return function(){W.timeout=null,a.cancelled=!0,n.pauses.delete(r),n.pushFailure("Test took longer than ".concat(e,"ms; test timed out."),ie(2)),Te(n)}},D(W.timeout),W.timeout=m(W.timeoutHandler(t),t))),function(){if(!a.cancelled){if(void 0===W.current)throw new Error("Unexpected release of async pause after tests finished.\n"+"> Test: ".concat(n.testName," [async #").concat(r,"]"))
if(W.current!==n)throw new Error("Unexpected release of async pause during a different test.\n"+"> Test: ".concat(n.testName," [async #").concat(r,"]"))
if(a.remaining<=0)throw new Error("Tried to release async pause that was already released.\n"+"> Test: ".concat(n.testName," [async #").concat(r,"]"))
a.remaining--,0===a.remaining&&n.pauses.delete(r),Ne(n)}}},resolvePromise:function(e,t){if(null!=e){var n=this,r=e.then
if("function"==typeof r){var a=n.internalStop(),o=function(){a()}
W.notrycatch?r.call(e,o):r.call(e,o,(function(e){var r="Promise rejected "+(t?t.replace(/Each$/,""):"during")+' "'+n.testName+'": '+(e&&e.message||e)
n.pushFailure(r,oe(e,0)),Fe(),Te(n)}))}}},valid:function(){if(this.callback&&this.callback.validTest)return!0
if(!function e(t,n){return!n||!n.length||A(t.moduleId,n)||t.parentModule&&e(t.parentModule,n)}(this.module,W.moduleId))return!1
if(W.testId&&W.testId.length&&!A(this.testId,W.testId))return!1
var e=W.module&&W.module.toLowerCase()
if(!function e(t,n){return!n||(t.name?t.name.toLowerCase():null)===n||!!t.parentModule&&e(t.parentModule,n)}(this.module,e))return!1
var t=W.filter
if(!t)return!0
var n=/^(!?)\/([\w\W]*)\/(i?$)/.exec(t),r=this.module.name+": "+this.testName
return n?this.regexFilter(!!n[1],n[2],n[3],r):this.stringFilter(t,r)},regexFilter:function(e,t,n,r){return new RegExp(t,n).test(r)!==e},stringFilter:function(e,t){e=e.toLowerCase(),t=t.toLowerCase()
var n="!"!==e.charAt(0)
return n||(e=e.slice(1)),-1!==t.indexOf(e)?n:!n}}
var we=!1
function Ee(e){we||W.currentModule.ignored||new ye(e).queue()}function Ce(e){W.currentModule.ignored||(we||(W.queue.length=0,we=!0),new ye(e).queue())}function xe(e,t){Ee({testName:e,callback:t})}function Ae(e,t){return"".concat(e," [").concat(t,"]")}function ke(e,t){if(Array.isArray(e))for(var n=0;n<e.length;n++)t(e[n],n)
else{if("object"!==a(e)||null===e)throw new Error("test.each() expects an array or object as input, but\nfound ".concat(a(e)," instead."))
for(var r in e)t(e[r],r)}}function Te(e){e.pauses.forEach((function(e){e.cancelled=!0})),e.pauses.clear(),Ne(e)}function Ne(e){e.pauses.size>0||(m?(D(W.timeout),W.timeout=m((function(){e.pauses.size>0||(D(W.timeout),W.timeout=null,W.blocking=!1,W.pq.advance())}))):(W.blocking=!1,W.pq.advance()))}function Re(e){for(var t=[].concat(e.tests),n=l(e.childModules);n.length;){var r=n.shift()
t.push.apply(t,r.tests),n.push.apply(n,l(r.childModules))}return t}function Be(e){return e.testsRun+e.testsIgnored===Re(e).length}function Se(e){for(e.testsIgnored++;e=e.parentModule;)e.testsIgnored++}N(xe,{todo:function(e,t){Ee({testName:e,callback:t,todo:!0})},skip:function(e){Ee({testName:e,skip:!0})},only:function(e,t){Ce({testName:e,callback:t})},each:function(e,t,n){ke(t,(function(t,r){Ee({testName:Ae(e,r),callback:n,withData:!0,stackOffset:5,data:t})}))}}),xe.todo.each=function(e,t,n){ke(t,(function(t,r){Ee({testName:Ae(e,r),callback:n,todo:!0,withData:!0,stackOffset:5,data:t})}))},xe.skip.each=function(e,t){ke(t,(function(t,n){Ee({testName:Ae(e,n),stackOffset:5,skip:!0})}))},xe.only.each=function(e,t,n){ke(t,(function(t,r){Ce({testName:Ae(e,r),callback:n,withData:!0,stackOffset:5,data:t})}))}
var _e,Oe,Me,je,Ie=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
o(this,e),this.log=n.log||Function.prototype.bind.call(h.log,h),t.on("error",this.onError.bind(this)),t.on("runStart",this.onRunStart.bind(this)),t.on("testStart",this.onTestStart.bind(this)),t.on("testEnd",this.onTestEnd.bind(this)),t.on("runEnd",this.onRunEnd.bind(this))}return u(e,[{key:"onError",value:function(e){this.log("error",e)}},{key:"onRunStart",value:function(e){this.log("runStart",e)}},{key:"onTestStart",value:function(e){this.log("testStart",e)}},{key:"onTestEnd",value:function(e){this.log("testEnd",e)}},{key:"onRunEnd",value:function(e){this.log("runEnd",e)}}],[{key:"init",value:function(t,n){return new e(t,n)}}]),e}(),Pe=f&&void 0!==f.performance&&"function"==typeof f.performance.mark&&"function"==typeof f.performance.measure?f.performance:void 0,qe={measure:Pe?function(e,t,n){try{Pe.measure(e,t,n)}catch(e){Y.warn("performance.measure could not be executed because of ",e.message)}}:function(){},mark:Pe?Pe.mark.bind(Pe):function(){}},Le=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
o(this,e),this.perf=n.perf||qe,t.on("runStart",this.onRunStart.bind(this)),t.on("runEnd",this.onRunEnd.bind(this)),t.on("suiteStart",this.onSuiteStart.bind(this)),t.on("suiteEnd",this.onSuiteEnd.bind(this)),t.on("testStart",this.onTestStart.bind(this)),t.on("testEnd",this.onTestEnd.bind(this))}return u(e,[{key:"onRunStart",value:function(){this.perf.mark("qunit_suite_0_start")}},{key:"onSuiteStart",value:function(e){var t=e.fullName.length
this.perf.mark("qunit_suite_".concat(t,"_start"))}},{key:"onSuiteEnd",value:function(e){var t=e.fullName.length,n=e.fullName.join(" – ")
this.perf.mark("qunit_suite_".concat(t,"_end")),this.perf.measure("QUnit Test Suite: ".concat(n),"qunit_suite_".concat(t,"_start"),"qunit_suite_".concat(t,"_end"))}},{key:"onTestStart",value:function(){this.perf.mark("qunit_test_start")}},{key:"onTestEnd",value:function(e){this.perf.mark("qunit_test_end")
var t=e.fullName.join(" – ")
this.perf.measure("QUnit Test: ".concat(t),"qunit_test_start","qunit_test_end")}},{key:"onRunEnd",value:function(){this.perf.mark("qunit_suite_0_end"),this.perf.measure("QUnit Test Run","qunit_suite_0_start","qunit_suite_0_end")}}],[{key:"init",value:function(t,n){return new e(t,n)}}]),e}(),He=!0
if("undefined"!=typeof process){var ze=process.env||{}
_e=ze.FORCE_COLOR,Oe=ze.NODE_DISABLE_COLORS,Me=ze.NO_COLOR,je=ze.TERM,He=process.stdout&&process.stdout.isTTY}var $e={enabled:!Oe&&null==Me&&"dumb"!==je&&(null!=_e&&"0"!==_e||He),reset:Ue(0,0),bold:Ue(1,22),dim:Ue(2,22),italic:Ue(3,23),underline:Ue(4,24),inverse:Ue(7,27),hidden:Ue(8,28),strikethrough:Ue(9,29),black:Ue(30,39),red:Ue(31,39),green:Ue(32,39),yellow:Ue(33,39),blue:Ue(34,39),magenta:Ue(35,39),cyan:Ue(36,39),white:Ue(37,39),gray:Ue(90,39),grey:Ue(90,39),bgBlack:Ue(40,49),bgRed:Ue(41,49),bgGreen:Ue(42,49),bgYellow:Ue(43,49),bgBlue:Ue(44,49),bgMagenta:Ue(45,49),bgCyan:Ue(46,49),bgWhite:Ue(47,49)}
function Ve(e,t){for(var n,r=0,a="",o="";r<e.length;r++)a+=(n=e[r]).open,o+=n.close,~t.indexOf(n.close)&&(t=t.replace(n.rgx,n.close+n.open))
return a+t+o}function Ue(e,t){var n={open:"[".concat(e,"m"),close:"[".concat(t,"m"),rgx:new RegExp("\\x1b\\[".concat(t,"m"),"g")}
return function(t){return void 0!==this&&void 0!==this.has?(~this.has.indexOf(e)||(this.has.push(e),this.keys.push(n)),void 0===t?this:$e.enabled?Ve(this.keys,t+""):t+""):void 0===t?((r={has:[e],keys:[n]}).reset=$e.reset.bind(r),r.bold=$e.bold.bind(r),r.dim=$e.dim.bind(r),r.italic=$e.italic.bind(r),r.underline=$e.underline.bind(r),r.inverse=$e.inverse.bind(r),r.hidden=$e.hidden.bind(r),r.strikethrough=$e.strikethrough.bind(r),r.black=$e.black.bind(r),r.red=$e.red.bind(r),r.green=$e.green.bind(r),r.yellow=$e.yellow.bind(r),r.blue=$e.blue.bind(r),r.magenta=$e.magenta.bind(r),r.cyan=$e.cyan.bind(r),r.white=$e.white.bind(r),r.gray=$e.gray.bind(r),r.grey=$e.grey.bind(r),r.bgBlack=$e.bgBlack.bind(r),r.bgRed=$e.bgRed.bind(r),r.bgGreen=$e.bgGreen.bind(r),r.bgYellow=$e.bgYellow.bind(r),r.bgBlue=$e.bgBlue.bind(r),r.bgMagenta=$e.bgMagenta.bind(r),r.bgCyan=$e.bgCyan.bind(r),r.bgWhite=$e.bgWhite.bind(r),r):$e.enabled?Ve([n],t+""):t+""
var r}}var We=Object.prototype.hasOwnProperty
function Ge(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4
if(void 0===e&&(e=String(e)),"number"!=typeof e||isFinite(e)||(e=String(e)),"number"==typeof e)return JSON.stringify(e)
if("string"==typeof e){if(""===e||/['"\\/[{}\]\r\n]/.test(e)||/[-?:,[\]{}#&*!|=>'"%@`]/.test(e[0])||/(^\s|\s$)/.test(e)||/^[\d._-]+$/.test(e)||/^(true|false|y|n|yes|no|on|off)$/i.test(e)){if(!/\n/.test(e))return JSON.stringify(e)
var n=new Array(t+1).join(" "),r=e.match(/\n+$/)
return 1===(r?r[0].length:0)?"|\n"+e.replace(/\n$/,"").split("\n").map((function(e){return n+e})).join("\n"):"|+\n"+e.split("\n").map((function(e){return n+e})).join("\n")}return e}return JSON.stringify(Ke(e),null,2)}function Ke(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]
if(-1!==n.indexOf(e))return"[Circular]"
switch(Object.prototype.toString.call(e).replace(/^\[.+\s(.+?)]$/,"$1").toLowerCase()){case"array":n.push(e),t=e.map((function(e){return Ke(e,n)})),n.pop()
break
case"object":n.push(e),t={},Object.keys(e).forEach((function(r){t[r]=Ke(e[r],n)})),n.pop()
break
default:t=e}return t}var Ye=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
o(this,e),this.log=n.log||Function.prototype.bind.call(h.log,h),this.testCount=0,this.ended=!1,this.bailed=!1,t.on("error",this.onError.bind(this)),t.on("runStart",this.onRunStart.bind(this)),t.on("testEnd",this.onTestEnd.bind(this)),t.on("runEnd",this.onRunEnd.bind(this))}return u(e,[{key:"onRunStart",value:function(e){this.log("TAP version 13")}},{key:"onError",value:function(e){this.bailed||(this.bailed=!0,this.ended||(this.testCount=this.testCount+1,this.log($e.red("not ok ".concat(this.testCount," global failure"))),this.logError(e)),this.log("Bail out! "+_(e).split("\n")[0]),this.ended&&this.logError(e))}},{key:"onTestEnd",value:function(e){var t=this
this.testCount=this.testCount+1,"passed"===e.status?this.log("ok ".concat(this.testCount," ").concat(e.fullName.join(" > "))):"skipped"===e.status?this.log($e.yellow("ok ".concat(this.testCount," # SKIP ").concat(e.fullName.join(" > ")))):"todo"===e.status?(this.log($e.cyan("not ok ".concat(this.testCount," # TODO ").concat(e.fullName.join(" > ")))),e.errors.forEach((function(e){return t.logAssertion(e,"todo")}))):(this.log($e.red("not ok ".concat(this.testCount," ").concat(e.fullName.join(" > ")))),e.errors.forEach((function(e){return t.logAssertion(e)})))}},{key:"onRunEnd",value:function(e){this.ended=!0,this.log("1..".concat(e.testCounts.total)),this.log("# pass ".concat(e.testCounts.passed)),this.log($e.yellow("# skip ".concat(e.testCounts.skipped))),this.log($e.cyan("# todo ".concat(e.testCounts.todo))),this.log($e.red("# fail ".concat(e.testCounts.failed)))}},{key:"logAssertion",value:function(e,t){var n="  ---"
n+="\n  message: ".concat(Ge(e.message||"failed")),n+="\n  severity: ".concat(Ge(t||"failed")),We.call(e,"actual")&&(n+="\n  actual  : ".concat(Ge(e.actual))),We.call(e,"expected")&&(n+="\n  expected: ".concat(Ge(e.expected))),e.stack&&(n+="\n  stack: ".concat(Ge(e.stack+"\n"))),n+="\n  ...",this.log(n)}},{key:"logError",value:function(e){var t="  ---"
t+="\n  message: ".concat(Ge(_(e))),t+="\n  severity: ".concat(Ge("failed")),e&&e.stack&&(t+="\n  stack: ".concat(Ge(e.stack+"\n"))),t+="\n  ...",this.log(t)}}],[{key:"init",value:function(t,n){return new e(t,n)}}]),e}(),Qe={console:Ie,perf:Le,tap:Ye}
function Xe(e){return function(t){W.globalHooks[e]||(W.globalHooks[e]=[]),W.globalHooks[e].push(t)}}var Ze={beforeEach:Xe("beforeEach"),afterEach:Xe("afterEach")},Je=function(){function e(t){o(this,e),this.test=t,this.priorityCount=0,this.unitSampler=null,this.taskQueue=[],this.finished=!1}return u(e,[{key:"advance",value:function(){this.advanceTaskQueue(),this.taskQueue.length||W.blocking||W.current||this.advanceTestQueue()}},{key:"advanceTaskQueue",value:function(){var e=C.now()
W.depth=(W.depth||0)+1,this.processTaskQueue(e),W.depth--}},{key:"processTaskQueue",value:function(e){var t=this
if(this.taskQueue.length&&!W.blocking){var n=C.now()-e
if(!m||W.updateRate<=0||n<W.updateRate){var r=this.taskQueue.shift()
De.resolve(r()).then((function(){t.taskQueue.length?t.processTaskQueue(e):t.advance()}))}else m((function(){t.advance()}))}}},{key:"advanceTestQueue",value:function(){if(W.blocking||W.queue.length||0!==W.depth){var e=W.queue.shift()
this.addToTaskQueue(e()),this.priorityCount>0&&this.priorityCount--,this.advance()}else this.done()}},{key:"addToTaskQueue",value:function(e){var t;(t=this.taskQueue).push.apply(t,l(e))}},{key:"taskCount",value:function(){return this.taskQueue.length}},{key:"add",value:function(e,t){if(t)W.queue.splice(this.priorityCount++,0,e)
else if(W.seed){this.unitSampler||(this.unitSampler=(r=W.seed,a=parseInt(S(r),16)||-1,function(){return a^=a<<13,a^=a>>>17,(a^=a<<5)<0&&(a+=4294967296),a/4294967296}))
var n=Math.floor(this.unitSampler()*(W.queue.length-this.priorityCount+1))
W.queue.splice(this.priorityCount+n,0,e)}else W.queue.push(e)
var r,a}},{key:"done",value:function(){var e
if(0===W.stats.testCount&&!0===W.failOnZeroTests)return e=W.filter&&W.filter.length?new Error('No tests matched the filter "'.concat(W.filter,'".')):W.module&&W.module.length?new Error('No tests matched the module "'.concat(W.module,'".')):W.moduleId&&W.moduleId.length?new Error('No tests matched the moduleId "'.concat(W.moduleId,'".')):W.testId&&W.testId.length?new Error('No tests matched the testId "'.concat(W.testId,'".')):new Error("No tests were run."),this.test("global failure",N((function(t){t.pushResult({result:!1,message:e.message,source:e.stack})}),{validTest:!0})),void this.advance()
var t=W.storage,n=Math.round(C.now()-W.started),r=W.stats.all-W.stats.bad
this.finished=!0,pe("runEnd",Z.end(!0)),ge("done",{passed:r,failed:W.stats.bad,total:W.stats.all,runtime:n}).then((function(){if(t&&0===W.stats.bad)for(var e=t.length-1;e>=0;e--){var n=t.key(e)
0===n.indexOf("qunit-test-")&&t.removeItem(n)}}))}}]),e}()
function et(e){W.current?W.current.assert.pushResult({result:!1,message:"global failure: ".concat(_(e)),source:e&&e.stack||ie(2)}):(Z.globalFailureCount++,W.stats.bad++,W.stats.all++,pe("error",e))}function tt(){}var nt=-1,rt=Object.prototype.hasOwnProperty
tt.prototype.DiffMain=function(e,t,n){var r=Date.now()+1e3
if(null===e||null===t)throw new Error("Cannot diff null input.")
if(e===t)return e?[[0,e]]:[]
void 0===n&&(n=!0)
var a=this.diffCommonPrefix(e,t),o=e.substring(0,a)
e=e.substring(a),t=t.substring(a),a=this.diffCommonSuffix(e,t)
var i=e.substring(e.length-a)
e=e.substring(0,e.length-a),t=t.substring(0,t.length-a)
var u=this.diffCompute(e,t,n,r)
return o&&u.unshift([0,o]),i&&u.push([0,i]),this.diffCleanupMerge(u),u},tt.prototype.diffCleanupEfficiency=function(e){var t,n,r,a,o,i,u,s,l
for(t=!1,n=[],r=0,a=null,o=0,i=!1,u=!1,s=!1,l=!1;o<e.length;)0===e[o][0]?(e[o][1].length<4&&(s||l)?(n[r++]=o,i=s,u=l,a=e[o][1]):(r=0,a=null),s=l=!1):(e[o][0]===nt?l=!0:s=!0,a&&(i&&u&&s&&l||a.length<2&&i+u+s+l===3)&&(e.splice(n[r-1],0,[nt,a]),e[n[r-1]+1][0]=1,r--,a=null,i&&u?(s=l=!0,r=0):(o=--r>0?n[r-1]:-1,s=l=!1),t=!0)),o++
t&&this.diffCleanupMerge(e)},tt.prototype.diffPrettyHtml=function(e){for(var t=[],n=0;n<e.length;n++){var r=e[n][0],a=e[n][1]
switch(r){case 1:t[n]="<ins>"+O(a)+"</ins>"
break
case nt:t[n]="<del>"+O(a)+"</del>"
break
case 0:t[n]="<span>"+O(a)+"</span>"}}return t.join("")},tt.prototype.diffCommonPrefix=function(e,t){var n,r,a,o
if(!e||!t||e.charAt(0)!==t.charAt(0))return 0
for(a=0,n=r=Math.min(e.length,t.length),o=0;a<n;)e.substring(o,n)===t.substring(o,n)?o=a=n:r=n,n=Math.floor((r-a)/2+a)
return n},tt.prototype.diffCommonSuffix=function(e,t){var n,r,a,o
if(!e||!t||e.charAt(e.length-1)!==t.charAt(t.length-1))return 0
for(a=0,n=r=Math.min(e.length,t.length),o=0;a<n;)e.substring(e.length-n,e.length-o)===t.substring(t.length-n,t.length-o)?o=a=n:r=n,n=Math.floor((r-a)/2+a)
return n},tt.prototype.diffCompute=function(e,t,n,r){var a,o,i,u,s,l,c,d,p,f,h,m
return e?t?(o=e.length>t.length?e:t,i=e.length>t.length?t:e,-1!==(u=o.indexOf(i))?(a=[[1,o.substring(0,u)],[0,i],[1,o.substring(u+i.length)]],e.length>t.length&&(a[0][0]=a[2][0]=nt),a):1===i.length?[[nt,e],[1,t]]:(s=this.diffHalfMatch(e,t))?(l=s[0],d=s[1],c=s[2],p=s[3],f=s[4],h=this.DiffMain(l,c,n,r),m=this.DiffMain(d,p,n,r),h.concat([[0,f]],m)):n&&e.length>100&&t.length>100?this.diffLineMode(e,t,r):this.diffBisect(e,t,r)):[[nt,e]]:[[1,t]]},tt.prototype.diffHalfMatch=function(e,t){var n,r,a,o,i,u,s,l,c,d
if(n=e.length>t.length?e:t,r=e.length>t.length?t:e,n.length<4||2*r.length<n.length)return null
function p(e,t,n){var r,o,i,u,s,l,c,d,p
for(r=e.substring(n,n+Math.floor(e.length/4)),o=-1,i="";-1!==(o=t.indexOf(r,o+1));)u=a.diffCommonPrefix(e.substring(n),t.substring(o)),s=a.diffCommonSuffix(e.substring(0,n),t.substring(0,o)),i.length<s+u&&(i=t.substring(o-s,o)+t.substring(o,o+u),l=e.substring(0,n-s),c=e.substring(n+u),d=t.substring(0,o-s),p=t.substring(o+u))
return 2*i.length>=e.length?[l,c,d,p,i]:null}return a=this,l=p(n,r,Math.ceil(n.length/4)),c=p(n,r,Math.ceil(n.length/2)),l||c?(d=c?l&&l[4].length>c[4].length?l:c:l,e.length>t.length?(o=d[0],s=d[1],u=d[2],i=d[3]):(u=d[0],i=d[1],o=d[2],s=d[3]),[o,s,u,i,d[4]]):null},tt.prototype.diffLineMode=function(e,t,n){var r,a,o,i,u,s,l,c,d
for(e=(r=this.diffLinesToChars(e,t)).chars1,t=r.chars2,o=r.lineArray,a=this.DiffMain(e,t,!1,n),this.diffCharsToLines(a,o),this.diffCleanupSemantic(a),a.push([0,""]),i=0,s=0,u=0,c="",l="";i<a.length;){switch(a[i][0]){case 1:u++,l+=a[i][1]
break
case nt:s++,c+=a[i][1]
break
case 0:if(s>=1&&u>=1){for(a.splice(i-s-u,s+u),i=i-s-u,d=(r=this.DiffMain(c,l,!1,n)).length-1;d>=0;d--)a.splice(i,0,r[d])
i+=r.length}u=0,s=0,c="",l=""}i++}return a.pop(),a},tt.prototype.diffBisect=function(e,t,n){var r,a,o,i,u,s,l,c,d,p,f,h,m,D,g,v,y,b,F,w,E,C,x
for(r=e.length,a=t.length,i=o=Math.ceil((r+a)/2),u=2*o,s=new Array(u),l=new Array(u),c=0;c<u;c++)s[c]=-1,l[c]=-1
for(s[i+1]=0,l[i+1]=0,p=(d=r-a)%2!=0,f=0,h=0,m=0,D=0,E=0;E<o&&!(Date.now()>n);E++){for(C=-E+f;C<=E-h;C+=2){for(v=i+C,F=(y=C===-E||C!==E&&s[v-1]<s[v+1]?s[v+1]:s[v-1]+1)-C;y<r&&F<a&&e.charAt(y)===t.charAt(F);)y++,F++
if(s[v]=y,y>r)h+=2
else if(F>a)f+=2
else if(p&&(g=i+d-C)>=0&&g<u&&-1!==l[g]&&y>=(b=r-l[g]))return this.diffBisectSplit(e,t,y,F,n)}for(x=-E+m;x<=E-D;x+=2){for(g=i+x,w=(b=x===-E||x!==E&&l[g-1]<l[g+1]?l[g+1]:l[g-1]+1)-x;b<r&&w<a&&e.charAt(r-b-1)===t.charAt(a-w-1);)b++,w++
if(l[g]=b,b>r)D+=2
else if(w>a)m+=2
else if(!p&&(v=i+d-x)>=0&&v<u&&-1!==s[v]&&(F=i+(y=s[v])-v,y>=(b=r-b)))return this.diffBisectSplit(e,t,y,F,n)}}return[[nt,e],[1,t]]},tt.prototype.diffBisectSplit=function(e,t,n,r,a){var o,i,u,s,l,c
return o=e.substring(0,n),u=t.substring(0,r),i=e.substring(n),s=t.substring(r),l=this.DiffMain(o,u,!1,a),c=this.DiffMain(i,s,!1,a),l.concat(c)},tt.prototype.diffCleanupSemantic=function(e){for(var t,n,r,a,o=!1,i=[],u=0,s=null,l=0,c=0,d=0,p=0,f=0;l<e.length;)0===e[l][0]?(i[u++]=l,c=p,d=f,p=0,f=0,s=e[l][1]):(1===e[l][0]?p+=e[l][1].length:f+=e[l][1].length,s&&s.length<=Math.max(c,d)&&s.length<=Math.max(p,f)&&(e.splice(i[u-1],0,[nt,s]),e[i[u-1]+1][0]=1,u--,l=--u>0?i[u-1]:-1,c=0,d=0,p=0,f=0,s=null,o=!0)),l++
for(o&&this.diffCleanupMerge(e),l=1;l<e.length;)e[l-1][0]===nt&&1===e[l][0]&&(t=e[l-1][1],n=e[l][1],(r=this.diffCommonOverlap(t,n))>=(a=this.diffCommonOverlap(n,t))?(r>=t.length/2||r>=n.length/2)&&(e.splice(l,0,[0,n.substring(0,r)]),e[l-1][1]=t.substring(0,t.length-r),e[l+1][1]=n.substring(r),l++):(a>=t.length/2||a>=n.length/2)&&(e.splice(l,0,[0,t.substring(0,a)]),e[l-1][0]=1,e[l-1][1]=n.substring(0,n.length-a),e[l+1][0]=nt,e[l+1][1]=t.substring(a),l++),l++),l++},tt.prototype.diffCommonOverlap=function(e,t){var n=e.length,r=t.length
if(0===n||0===r)return 0
n>r?e=e.substring(n-r):n<r&&(t=t.substring(0,n))
var a=Math.min(n,r)
if(e===t)return a
for(var o=0,i=1;;){var u=e.substring(a-i),s=t.indexOf(u)
if(-1===s)return o
i+=s,0!==s&&e.substring(a-i)!==t.substring(0,i)||(o=i,i++)}},tt.prototype.diffLinesToChars=function(e,t){var n=[],r={}
function a(e){for(var t="",a=0,o=-1,i=n.length;o<e.length-1;){-1===(o=e.indexOf("\n",a))&&(o=e.length-1)
var u=e.substring(a,o+1)
a=o+1,rt.call(r,u)?t+=String.fromCharCode(r[u]):(t+=String.fromCharCode(i),r[u]=i,n[i++]=u)}return t}return n[0]="",{chars1:a(e),chars2:a(t),lineArray:n}},tt.prototype.diffCharsToLines=function(e,t){for(var n=0;n<e.length;n++){for(var r=e[n][1],a=[],o=0;o<r.length;o++)a[o]=t[r.charCodeAt(o)]
e[n][1]=a.join("")}},tt.prototype.diffCleanupMerge=function(e){e.push([0,""])
for(var t=0,n=0,r=0,a="",o="";t<e.length;)switch(e[t][0]){case 1:r++,o+=e[t][1],t++
break
case nt:n++,a+=e[t][1],t++
break
case 0:if(n+r>1){if(0!==n&&0!==r){var i=this.diffCommonPrefix(o,a)
0!==i&&(t-n-r>0&&0===e[t-n-r-1][0]?e[t-n-r-1][1]+=o.substring(0,i):(e.splice(0,0,[0,o.substring(0,i)]),t++),o=o.substring(i),a=a.substring(i)),0!==(i=this.diffCommonSuffix(o,a))&&(e[t][1]=o.substring(o.length-i)+e[t][1],o=o.substring(0,o.length-i),a=a.substring(0,a.length-i))}0===n?e.splice(t-r,n+r,[1,o]):0===r?e.splice(t-n,n+r,[nt,a]):e.splice(t-n-r,n+r,[nt,a],[1,o]),t=t-n-r+(n?1:0)+(r?1:0)+1}else 0!==t&&0===e[t-1][0]?(e[t-1][1]+=e[t][1],e.splice(t,1)):t++
r=0,n=0,a="",o=""}""===e[e.length-1][1]&&e.pop()
var u=!1
for(t=1;t<e.length-1;){if(0===e[t-1][0]&&0===e[t+1][0]){var s=e[t][1]
s.substring(s.length-e[t-1][1].length)===e[t-1][1]?(e[t][1]=e[t-1][1]+e[t][1].substring(0,e[t][1].length-e[t-1][1].length),e[t+1][1]=e[t-1][1]+e[t+1][1],e.splice(t-1,1),u=!0):s.substring(0,e[t+1][1].length)===e[t+1][1]&&(e[t-1][1]+=e[t+1][1],e[t][1]=e[t][1].substring(e[t+1][1].length)+e[t+1][1],e.splice(t+1,1),u=!0)}t++}u&&this.diffCleanupMerge(e)}
var at={}
W.currentModule.suiteReport=Z,W.pq=new Je(xe)
var ot=!1,it=!1
function ut(){it=!0,m?m((function(){lt()})):lt()}function st(){W.blocking=!1,W.pq.advance()}function lt(){if(W.started)st()
else{W.started=C.now(),""===W.modules[0].name&&0===W.modules[0].tests.length&&W.modules.shift()
for(var e=[],t=0;t<W.modules.length;t++)""!==W.modules[t].name&&e.push({name:W.modules[t].name,moduleId:W.modules[t].moduleId,tests:W.modules[t].tests})
pe("runStart",Z.start(!0)),ge("begin",{totalTests:ye.count,modules:e}).then(st)}}at.isLocal=f&&f.location&&"file:"===f.location.protocol,at.version="2.20.1",N(at,{config:W,diff:function(e,t){var n,r
return r=(n=new tt).DiffMain(e,t),n.diffCleanupEfficiency(r),n.diffPrettyHtml(r)},dump:K,equiv:U,reporters:Qe,hooks:Ze,is:B,objectType:R,on:function(e,t){if("string"!=typeof e)throw new TypeError("eventName must be a string when registering a listener")
if(!A(e,de)){var n=de.join(", ")
throw new Error('"'.concat(e,'" is not a valid event; must be one of: ').concat(n,"."))}if("function"!=typeof t)throw new TypeError("callback must be a function when registering a listener")
ce[e]||(ce[e]=[]),A(t,ce[e])||ce[e].push(t)},onError:function(e){if(Y.warn("QUnit.onError is deprecated and will be removed in QUnit 3.0. Please use QUnit.onUncaughtException instead."),W.current&&W.current.ignoreGlobalErrors)return!0
var t=new Error(e.message)
return t.stack=e.stacktrace||e.fileName+":"+e.lineNumber,et(t),!1},onUncaughtException:et,pushFailure:be,assert:ue.prototype,module:re,test:xe,todo:xe.todo,skip:xe.skip,only:xe.only,start:function(e){if(W.current)throw new Error("QUnit.start cannot be called inside a test context.")
var t=ot
if(ot=!0,it)throw new Error("Called start() while test already started running")
if(t||e>1)throw new Error("Called start() outside of a test context too many times")
if(W.autostart)throw new Error("Called start() outside of a test context when QUnit.config.autostart was true")
if(!W.pageLoaded)return W.autostart=!0,void(g||at.load())
ut()},onUnhandledRejection:function(e){Y.warn("QUnit.onUnhandledRejection is deprecated and will be removed in QUnit 3.0. Please use QUnit.onUncaughtException instead."),et(e)},extend:function(){Y.warn("QUnit.extend is deprecated and will be removed in QUnit 3.0. Please use Object.assign instead.")
for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return N.apply(this,t)},load:function(){W.pageLoaded=!0,N(W,{started:0,updateRate:1e3,autostart:!0,filter:""},!0),it||(W.blocking=!1,W.autostart&&ut())},stack:function(e){return ie(e=(e||0)+2)}}),function(e){var t=["begin","done","log","testStart","testDone","moduleStart","moduleDone"]
function n(e){return function(t){if("function"!=typeof t)throw new Error("Callback parameter must be a function")
W.callbacks[e].push(t)}}for(var r=0;r<t.length;r++){var a=t[r]
void 0===W.callbacks[a]&&(W.callbacks[a]=[]),e[a]=n(a)}}(at),function(a){if(f&&g){if(f.QUnit&&f.QUnit.version)throw new Error("QUnit has already been defined.")
f.QUnit=a}e&&e.exports&&(e.exports=a,e.exports.QUnit=a),t&&(t.QUnit=a),void 0===(r=function(){return a}.call(t,n,t,e))||(e.exports=r),a.config.autostart=!1}(at),function(){if(f&&g){var e=at.config,t=Object.prototype.hasOwnProperty
at.begin((function(){if(!t.call(e,"fixture")){var n=g.getElementById("qunit-fixture")
n&&(e.fixture=n.cloneNode(!0))}})),at.testStart((function(){if(null!=e.fixture){var t=g.getElementById("qunit-fixture")
if("string"===a(e.fixture)){var n=g.createElement("div")
n.setAttribute("id","qunit-fixture"),n.innerHTML=e.fixture,t.parentNode.replaceChild(n,t)}else{var r=e.fixture.cloneNode(!0)
t.parentNode.replaceChild(r,t)}}}))}}(),function(){var e=void 0!==f&&f.location
if(e){var t=function(){for(var t=Object.create(null),r=e.search.slice(1).split("&"),a=r.length,o=0;o<a;o++)if(r[o]){var i=r[o].split("="),u=n(i[0]),s=1===i.length||n(i.slice(1).join("="))
t[u]=u in t?[].concat(t[u],s):s}return t}()
at.urlParams=t,at.config.filter=t.filter,at.config.module=t.module,at.config.moduleId=[].concat(t.moduleId||[]),at.config.testId=[].concat(t.testId||[]),!0===t.seed?at.config.seed=Math.random().toString(36).slice(2):t.seed&&(at.config.seed=t.seed),at.config.urlConfig.push({id:"hidepassed",label:"Hide passed tests",tooltip:"Only show tests and assertions that fail. Stored as query-strings."},{id:"noglobals",label:"Check for Globals",tooltip:"Enabling this will test if any test introduces new properties on the global object (`window` in Browsers). Stored as query-strings."},{id:"notrycatch",label:"No try-catch",tooltip:"Enabling this will run tests outside of a try-catch block. Makes debugging exceptions in IE reasonable. Stored as query-strings."}),at.begin((function(){for(var e=at.config.urlConfig,n=0;n<e.length;n++){var r=at.config.urlConfig[n]
"string"!=typeof r&&(r=r.id),void 0===at.config[r]&&(at.config[r]=t[r])}}))}function n(e){return decodeURIComponent(e.replace(/\+/g,"%20"))}}()
var ct={exports:{}}
!function(e){var t,n
t=fe,n=function(){var e=void 0!==he&&"undefined"==typeof window,t="function"==typeof Map?Map:function(){var e=Object.create(null)
this.get=function(t){return e[t]},this.set=function(t,n){return e[t]=n,this},this.clear=function(){e=Object.create(null)}},n=new t,r=new t,o=[]
o.total=0
var i=[],u=[]
function s(){n.clear(),r.clear(),i=[],u=[]}function l(e){for(var t=-9007199254740991,n=e.length-1;n>=0;--n){var r=e[n]
if(null!==r){var a=r.score
a>t&&(t=a)}}return-9007199254740991===t?null:t}function c(e,t){var n=e[t]
if(void 0!==n)return n
var r=t
Array.isArray(t)||(r=t.split("."))
for(var a=r.length,o=-1;e&&++o<a;)e=e[r[o]]
return e}function d(e){return"object"===a(e)}var p=function(){var e=[],t=0,n={}
function r(){for(var n=0,r=e[n],a=1;a<t;){var o=a+1
n=a,o<t&&e[o].score<e[a].score&&(n=o),e[n-1>>1]=e[n],a=1+(n<<1)}for(var i=n-1>>1;n>0&&r.score<e[i].score;i=(n=i)-1>>1)e[n]=e[i]
e[n]=r}return n.add=function(n){var r=t
e[t++]=n
for(var a=r-1>>1;r>0&&n.score<e[a].score;a=(r=a)-1>>1)e[r]=e[a]
e[r]=n},n.poll=function(){if(0!==t){var n=e[0]
return e[0]=e[--t],r(),n}},n.peek=function(n){if(0!==t)return e[0]},n.replaceTop=function(t){e[0]=t,r()},n},f=p()
return function t(a){var h={single:function(e,t,n){return"farzher"==e?{target:"farzher was here (^-^*)/",score:0,indexes:[0,1,2,3,4,5,6]}:e?(d(e)||(e=h.getPreparedSearch(e)),t?(d(t)||(t=h.getPrepared(t)),((n&&void 0!==n.allowTypo?n.allowTypo:!a||void 0===a.allowTypo||a.allowTypo)?h.algorithm:h.algorithmNoTypo)(e,t,e[0])):null):null},go:function(e,t,n){if("farzher"==e)return[{target:"farzher was here (^-^*)/",score:0,indexes:[0,1,2,3,4,5,6],obj:t?t[0]:null}]
if(!e)return o
var r=(e=h.prepareSearch(e))[0],i=n&&n.threshold||a&&a.threshold||-9007199254740991,u=n&&n.limit||a&&a.limit||9007199254740991,s=(n&&void 0!==n.allowTypo?n.allowTypo:!a||void 0===a.allowTypo||a.allowTypo)?h.algorithm:h.algorithmNoTypo,p=0,m=0,D=t.length
if(n&&n.keys)for(var g=n.scoreFn||l,v=n.keys,y=v.length,b=D-1;b>=0;--b){for(var F=t[b],w=new Array(y),E=y-1;E>=0;--E)(A=c(F,x=v[E]))?(d(A)||(A=h.getPrepared(A)),w[E]=s(e,A,r)):w[E]=null
w.obj=F
var C=g(w)
null!==C&&(C<i||(w.score=C,p<u?(f.add(w),++p):(++m,C>f.peek().score&&f.replaceTop(w))))}else if(n&&n.key){var x=n.key
for(b=D-1;b>=0;--b)(A=c(F=t[b],x))&&(d(A)||(A=h.getPrepared(A)),null!==(k=s(e,A,r))&&(k.score<i||(k={target:k.target,_targetLowerCodes:null,_nextBeginningIndexes:null,score:k.score,indexes:k.indexes,obj:F},p<u?(f.add(k),++p):(++m,k.score>f.peek().score&&f.replaceTop(k)))))}else for(b=D-1;b>=0;--b){var A,k;(A=t[b])&&(d(A)||(A=h.getPrepared(A)),null!==(k=s(e,A,r))&&(k.score<i||(p<u?(f.add(k),++p):(++m,k.score>f.peek().score&&f.replaceTop(k)))))}if(0===p)return o
var T=new Array(p)
for(b=p-1;b>=0;--b)T[b]=f.poll()
return T.total=p+m,T},goAsync:function(t,n,r){var i=!1,u=new Promise((function(u,s){if("farzher"==t)return u([{target:"farzher was here (^-^*)/",score:0,indexes:[0,1,2,3,4,5,6],obj:n?n[0]:null}])
if(!t)return u(o)
var f=(t=h.prepareSearch(t))[0],m=p(),D=n.length-1,g=r&&r.threshold||a&&a.threshold||-9007199254740991,v=r&&r.limit||a&&a.limit||9007199254740991,y=(r&&void 0!==r.allowTypo?r.allowTypo:!a||void 0===a.allowTypo||a.allowTypo)?h.algorithm:h.algorithmNoTypo,b=0,F=0
function w(){if(i)return s("canceled")
var a=Date.now()
if(r&&r.keys)for(var p=r.scoreFn||l,E=r.keys,C=E.length;D>=0;--D){if(D%1e3==0&&Date.now()-a>=10)return void(e?setImmediate(w):setTimeout(w))
for(var x=n[D],A=new Array(C),k=C-1;k>=0;--k)(R=c(x,N=E[k]))?(d(R)||(R=h.getPrepared(R)),A[k]=y(t,R,f)):A[k]=null
A.obj=x
var T=p(A)
null!==T&&(T<g||(A.score=T,b<v?(m.add(A),++b):(++F,T>m.peek().score&&m.replaceTop(A))))}else if(r&&r.key)for(var N=r.key;D>=0;--D){if(D%1e3==0&&Date.now()-a>=10)return void(e?setImmediate(w):setTimeout(w));(R=c(x=n[D],N))&&(d(R)||(R=h.getPrepared(R)),null!==(B=y(t,R,f))&&(B.score<g||(B={target:B.target,_targetLowerCodes:null,_nextBeginningIndexes:null,score:B.score,indexes:B.indexes,obj:x},b<v?(m.add(B),++b):(++F,B.score>m.peek().score&&m.replaceTop(B)))))}else for(;D>=0;--D){if(D%1e3==0&&Date.now()-a>=10)return void(e?setImmediate(w):setTimeout(w))
var R,B;(R=n[D])&&(d(R)||(R=h.getPrepared(R)),null!==(B=y(t,R,f))&&(B.score<g||(b<v?(m.add(B),++b):(++F,B.score>m.peek().score&&m.replaceTop(B)))))}if(0===b)return u(o)
for(var S=new Array(b),_=b-1;_>=0;--_)S[_]=m.poll()
S.total=b+F,u(S)}e?setImmediate(w):w()}))
return u.cancel=function(){i=!0},u},highlight:function(e,t,n){if("function"==typeof t)return h.highlightCallback(e,t)
if(null===e)return null
void 0===t&&(t="<b>"),void 0===n&&(n="</b>")
for(var r="",a=0,o=!1,i=e.target,u=i.length,s=e.indexes,l=0;l<u;++l){var c=i[l]
if(s[a]===l){if(o||(o=!0,r+=t),++a===s.length){r+=c+n+i.substr(l+1)
break}}else o&&(o=!1,r+=n)
r+=c}return r},highlightCallback:function(e,t){if(null===e)return null
for(var n=e.target,r=n.length,a=e.indexes,o="",i=0,u=0,s=!1,l=(e=[],0);l<r;++l){var c=n[l]
if(a[u]===l){if(++u,s||(s=!0,e.push(o),o=""),u===a.length){o+=c,e.push(t(o,i++)),o="",e.push(n.substr(l+1))
break}}else s&&(s=!1,e.push(t(o,i++)),o="")
o+=c}return e},prepare:function(e){return e?{target:e,_targetLowerCodes:h.prepareLowerCodes(e),_nextBeginningIndexes:null,score:null,indexes:null,obj:null}:{target:"",_targetLowerCodes:[0],_nextBeginningIndexes:null,score:null,indexes:null,obj:null}},prepareSlow:function(e){return e?{target:e,_targetLowerCodes:h.prepareLowerCodes(e),_nextBeginningIndexes:h.prepareNextBeginningIndexes(e),score:null,indexes:null,obj:null}:{target:"",_targetLowerCodes:[0],_nextBeginningIndexes:null,score:null,indexes:null,obj:null}},prepareSearch:function(e){return e||(e=""),h.prepareLowerCodes(e)},getPrepared:function(e){if(e.length>999)return h.prepare(e)
var t=n.get(e)
return void 0!==t||(t=h.prepare(e),n.set(e,t)),t},getPreparedSearch:function(e){if(e.length>999)return h.prepareSearch(e)
var t=r.get(e)
return void 0!==t||(t=h.prepareSearch(e),r.set(e,t)),t},algorithm:function(e,t,n){for(var r=t._targetLowerCodes,a=e.length,o=r.length,s=0,l=0,c=0,d=0;;){if(n===r[l]){if(i[d++]=l,++s===a)break
n=e[0===c?s:c===s?s+1:c===s-1?s-1:s]}if(++l>=o)for(;;){if(s<=1)return null
if(0===c){if(n===e[--s])continue
c=s}else{if(1===c)return null
if((n=e[1+(s=--c)])===e[s])continue}l=i[(d=s)-1]+1
break}}s=0
var p=0,f=!1,m=0,D=t._nextBeginningIndexes
null===D&&(D=t._nextBeginningIndexes=h.prepareNextBeginningIndexes(t.target))
var g=l=0===i[0]?0:D[i[0]-1]
if(l!==o)for(;;)if(l>=o){if(s<=0){if(++p>a-2)break
if(e[p]===e[p+1])continue
l=g
continue}--s,l=D[u[--m]]}else if(e[0===p?s:p===s?s+1:p===s-1?s-1:s]===r[l]){if(u[m++]=l,++s===a){f=!0
break}++l}else l=D[l]
if(f)var v=u,y=m
else v=i,y=d
for(var b=0,F=-1,w=0;w<a;++w)F!==(l=v[w])-1&&(b-=l),F=l
for(f?0!==p&&(b+=-20):(b*=1e3,0!==c&&(b+=-20)),b-=o-a,t.score=b,t.indexes=new Array(y),w=y-1;w>=0;--w)t.indexes[w]=v[w]
return t},algorithmNoTypo:function(e,t,n){for(var r=t._targetLowerCodes,a=e.length,o=r.length,s=0,l=0,c=0;;){if(n===r[l]){if(i[c++]=l,++s===a)break
n=e[s]}if(++l>=o)return null}s=0
var d=!1,p=0,f=t._nextBeginningIndexes
if(null===f&&(f=t._nextBeginningIndexes=h.prepareNextBeginningIndexes(t.target)),(l=0===i[0]?0:f[i[0]-1])!==o)for(;;)if(l>=o){if(s<=0)break;--s,l=f[u[--p]]}else if(e[s]===r[l]){if(u[p++]=l,++s===a){d=!0
break}++l}else l=f[l]
if(d)var m=u,D=p
else m=i,D=c
for(var g=0,v=-1,y=0;y<a;++y)v!==(l=m[y])-1&&(g-=l),v=l
for(d||(g*=1e3),g-=o-a,t.score=g,t.indexes=new Array(D),y=D-1;y>=0;--y)t.indexes[y]=m[y]
return t},prepareLowerCodes:function(e){for(var t=e.length,n=[],r=e.toLowerCase(),a=0;a<t;++a)n[a]=r.charCodeAt(a)
return n},prepareBeginningIndexes:function(e){for(var t=e.length,n=[],r=0,a=!1,o=!1,i=0;i<t;++i){var u=e.charCodeAt(i),s=u>=65&&u<=90,l=s||u>=97&&u<=122||u>=48&&u<=57,c=s&&!a||!o||!l
a=s,o=l,c&&(n[r++]=i)}return n},prepareNextBeginningIndexes:function(e){for(var t=e.length,n=h.prepareBeginningIndexes(e),r=[],a=n[0],o=0,i=0;i<t;++i)a>i?r[i]=a:(a=n[++o],r[i]=void 0===a?t:a)
return r},cleanup:s,new:t}
return h}()},e.exports?e.exports=n():t.fuzzysort=n()}(ct)
var dt=ct.exports,pt={failedTests:[],defined:0,completed:0}
!function(){if(f&&g){at.reporters.perf.init(at)
var e=at.config,t=[],n=!1,r=Object.prototype.hasOwnProperty,a=T({filter:void 0,module:void 0,moduleId:void 0,testId:void 0}),o=null
at.on("runStart",(function(e){pt.defined=e.testCounts.total})),at.begin((function(t){!function(t){var n,i,u,s,c,d,h,y,E=C("qunit")
E&&(E.setAttribute("role","main"),E.innerHTML="<h1 id='qunit-header'>"+O(g.title)+"</h1><h2 id='qunit-banner'></h2><div id='qunit-testrunner-toolbar' role='navigation'></div>"+(!(n=at.config.testId)||n.length<=0?"":"<div id='qunit-filteredTest'>Rerunning selected tests: "+O(n.join(", "))+" <a id='qunit-clearFilter' href='"+O(a)+"'>Run all tests</a></div>")+"<h2 id='qunit-userAgent'></h2><ol id='qunit-tests'></ol>"),(i=C("qunit-header"))&&(i.innerHTML="<a href='"+O(a)+"'>"+i.innerHTML+"</a> "),(u=C("qunit-banner"))&&(u.className=""),h=C("qunit-tests"),(y=C("qunit-testresult"))&&y.parentNode.removeChild(y),h&&(h.innerHTML="",(y=g.createElement("p")).id="qunit-testresult",y.className="result",h.parentNode.insertBefore(y,h),y.innerHTML='<div id="qunit-testresult-display">Running...<br />&#160;</div><div id="qunit-testresult-controls"></div><div class="clearfix"></div>',c=C("qunit-testresult-controls")),c&&c.appendChild(((d=g.createElement("button")).id="qunit-abort-tests-button",d.innerHTML="Abort",p(d,"click",x),d)),(s=C("qunit-userAgent"))&&(s.innerHTML="",s.appendChild(g.createTextNode("QUnit "+at.version+"; "+v.userAgent))),function(t){var n,a,i,u,s,c=C("qunit-testrunner-toolbar")
if(c){c.appendChild(((s=g.createElement("span")).innerHTML=function(){for(var t=!1,n=e.urlConfig,a="",o=0;o<n.length;o++){var i=e.urlConfig[o]
"string"==typeof i&&(i={id:i,label:i})
var u=O(i.id),s=O(i.tooltip)
if(i.value&&"string"!=typeof i.value){if(a+="<label for='qunit-urlconfig-"+u+"' title='"+s+"'>"+i.label+": </label><select id='qunit-urlconfig-"+u+"' name='"+u+"' title='"+s+"'><option></option>",Array.isArray(i.value))for(var l=0;l<i.value.length;l++)a+="<option value='"+(u=O(i.value[l]))+"'"+(e[i.id]===i.value[l]?(t=!0)&&" selected='selected'":"")+">"+u+"</option>"
else for(var c in i.value)r.call(i.value,c)&&(a+="<option value='"+O(c)+"'"+(e[i.id]===c?(t=!0)&&" selected='selected'":"")+">"+O(i.value[c])+"</option>")
e[i.id]&&!t&&(a+="<option value='"+(u=O(e[i.id]))+"' selected='selected' disabled='disabled'>"+u+"</option>"),a+="</select>"}else a+="<label for='qunit-urlconfig-"+u+"' title='"+s+"'><input id='qunit-urlconfig-"+u+"' name='"+u+"' type='checkbox'"+(i.value?" value='"+O(i.value)+"'":"")+(e[i.id]?" checked='checked'":"")+" title='"+s+"' />"+O(i.label)+"</label>"}return a}(),F(s,"qunit-url-config"),D(s.getElementsByTagName("input"),"change",k),D(s.getElementsByTagName("select"),"change",k),s))
var d=g.createElement("span")
d.id="qunit-toolbar-filters",d.appendChild((n=g.createElement("form"),a=g.createElement("label"),i=g.createElement("input"),u=g.createElement("button"),F(n,"qunit-filter"),a.innerHTML="Filter: ",i.type="text",i.value=e.filter||"",i.name="filter",i.id="qunit-filter-input",u.innerHTML="Go",a.appendChild(i),n.appendChild(a),n.appendChild(g.createTextNode(" ")),n.appendChild(u),p(n,"submit",A),n)),d.appendChild(function(t){var n=null
if(o={options:t.modules.slice(),selectedMap:new b,isDirty:function(){return l(o.selectedMap.keys()).sort().join(",")!==l(n.keys()).sort().join(",")}},e.moduleId.length)for(var r=0;r<t.modules.length;r++){var a=t.modules[r];-1!==e.moduleId.indexOf(a.moduleId)&&o.selectedMap.set(a.moduleId,a.name)}n=new b(o.selectedMap)
var i=g.createElement("input")
i.id="qunit-modulefilter-search",i.autocomplete="off",p(i,"input",x),p(i,"input",C),p(i,"focus",C),p(i,"click",C)
var u=g.createElement("label")
u.htmlFor="qunit-modulefilter-search",u.textContent="Module:"
var s=g.createElement("span")
s.id="qunit-modulefilter-search-container",s.appendChild(i)
var c=g.createElement("button")
c.textContent="Apply",c.title="Re-run the selected test modules",p(c,"click",R)
var d=g.createElement("button")
d.textContent="Reset",d.type="reset",d.title="Restore the previous module selection"
var h=g.createElement("button")
h.textContent="Select none",h.type="button",h.title="Clear the current module selection",p(h,"click",(function(){o.selectedMap.clear(),k(),x()}))
var D=g.createElement("span")
D.id="qunit-modulefilter-actions",D.appendChild(c),D.appendChild(d),n.size&&D.appendChild(h)
var v=g.createElement("ul")
v.id="qunit-modulefilter-dropdown-list"
var y=g.createElement("div")
y.id="qunit-modulefilter-dropdown",y.style.display="none",y.appendChild(D),y.appendChild(v),p(y,"change",k),s.appendChild(y),k()
var F,E=g.createElement("form")
function C(){function e(t){var n=E.contains(t.target)
27!==t.keyCode&&n||(27===t.keyCode&&n&&i.focus(),y.style.display="none",m(g,"click",e),m(g,"keydown",e),i.value="",x())}"none"===y.style.display&&(x(),y.style.display="block",p(g,"click",e),p(g,"keydown",e))}function x(){f.clearTimeout(F),F=f.setTimeout((function(){v.innerHTML=function(e){return function(e){var t=""
o.selectedMap.forEach((function(e,n){t+=B(n,e,!0)}))
for(var n=0;n<e.length;n++){var r=e[n].obj
o.selectedMap.has(r.moduleId)||(t+=B(r.moduleId,r.name,!1))}return t}(""===e?o.options.slice(0,20).map((function(e){return{obj:e}})):dt.go(e,o.options,{limit:20,key:"name",allowTypo:!0}))}(i.value)}))}function k(e){var t=e&&e.target||null
t&&(t.checked?o.selectedMap.set(t.value,t.parentNode.textContent):o.selectedMap.delete(t.value),w(t.parentNode,"checked",t.checked))
var n=o.selectedMap.size?o.selectedMap.size+" "+(1===o.selectedMap.size?"module":"modules"):"All modules"
i.placeholder=n,i.title="Type to search through and reduce the list.",d.disabled=!o.isDirty(),h.style.display=o.selectedMap.size?"":"none"}return E.id="qunit-modulefilter",E.appendChild(u),E.appendChild(g.createTextNode(" ")),E.appendChild(s),p(E,"submit",A),p(E,"reset",(function(){o.selectedMap=new b(n),k(),x()})),E}(t))
var h=g.createElement("div")
h.className="clearfix",c.appendChild(d),c.appendChild(h)}}(t)}(t)})),at.on("runEnd",(function(t){var n,r,a,o=C("qunit-banner"),i=C("qunit-tests"),u=C("qunit-abort-tests-button"),s=e.stats.all-e.stats.bad,l=[t.testCounts.total," tests completed in ",t.runtime," milliseconds, with ",t.testCounts.failed," failed, ",t.testCounts.skipped," skipped, and ",t.testCounts.todo," todo.<br />","<span class='passed'>",s,"</span> assertions of <span class='total'>",e.stats.all,"</span> passed, <span class='failed'>",e.stats.bad,"</span> failed.",M(pt.failedTests)].join("")
if(u&&u.disabled){l="Tests aborted after "+t.runtime+" milliseconds."
for(var c=0;c<i.children.length;c++)""!==(n=i.children[c]).className&&"running"!==n.className||(n.className="aborted",a=n.getElementsByTagName("ol")[0],(r=g.createElement("li")).className="fail",r.innerHTML="Test aborted.",a.appendChild(r))}!o||u&&!1!==u.disabled||(o.className="failed"===t.status?"qunit-fail":"qunit-pass"),u&&u.parentNode.removeChild(u),i&&(C("qunit-testresult-display").innerHTML=l),e.altertitle&&g.title&&(g.title=["failed"===t.status?"✖":"✔",g.title.replace(/^[\u2714\u2716] /i,"")].join(" ")),e.scrolltop&&f.scrollTo&&f.scrollTo(0,0)})),at.testStart((function(e){var t,n
S(e.name,e.testId,e.module),(t=C("qunit-testresult-display"))&&(F(t,"running"),n=at.config.reorder&&e.previousFailure,t.innerHTML=[I(pt),n?"Rerunning previously failed test: <br />":"Running: ",j(e.name,e.module),M(pt.failedTests)].join(""))})),at.log((function(e){var t=C("qunit-test-output-"+e.testId)
if(t){var n,a,o,i=O(e.message)||(e.result?"okay":"failed")
i="<span class='test-message'>"+i+"</span>",i+="<span class='runtime'>@ "+e.runtime+" ms</span>"
var u=!1
!e.result&&r.call(e,"expected")?(n=e.negative?"NOT "+at.dump.parse(e.expected):at.dump.parse(e.expected),a=at.dump.parse(e.actual),i+="<table><tr class='test-expected'><th>Expected: </th><td><pre>"+O(n)+"</pre></td></tr>",a!==n?(i+="<tr class='test-actual'><th>Result: </th><td><pre>"+O(a)+"</pre></td></tr>","number"==typeof e.actual&&"number"==typeof e.expected?isNaN(e.actual)||isNaN(e.expected)||(u=!0,o=((o=e.actual-e.expected)>0?"+":"")+o):"boolean"!=typeof e.actual&&"boolean"!=typeof e.expected&&(u=P(o=at.diff(n,a)).length!==P(n).length+P(a).length),u&&(i+="<tr class='test-diff'><th>Diff: </th><td><pre>"+o+"</pre></td></tr>")):-1!==n.indexOf("[object Array]")||-1!==n.indexOf("[object Object]")?i+="<tr class='test-message'><th>Message: </th><td>Diff suppressed as the depth of object is more than current max depth ("+at.config.maxDepth+").<p>Hint: Use <code>QUnit.dump.maxDepth</code> to  run with a higher max depth or <a href='"+O(T({maxDepth:-1}))+"'>Rerun</a> without max depth.</p></td></tr>":i+="<tr class='test-message'><th>Message: </th><td>Diff suppressed as the expected and actual results have an equivalent serialization</td></tr>",e.source&&(i+="<tr class='test-source'><th>Source: </th><td><pre>"+O(e.source)+"</pre></td></tr>"),i+="</table>"):!e.result&&e.source&&(i+="<table><tr class='test-source'><th>Source: </th><td><pre>"+O(e.source)+"</pre></td></tr></table>")
var s=t.getElementsByTagName("ol")[0],l=g.createElement("li")
l.className=e.result?"pass":"fail",l.innerHTML=i,s.appendChild(l)}})),at.testDone((function(r){var a=C("qunit-tests"),o=C("qunit-test-output-"+r.testId)
if(a&&o){var i
E(o,"running"),i=r.failed>0?"failed":r.todo?"todo":r.skipped?"skipped":"passed"
var u=o.getElementsByTagName("ol")[0],s=r.passed,l=r.failed,c=r.failed>0?r.todo:!r.todo
c?F(u,"qunit-collapsed"):(pt.failedTests.push(r.testId),e.collapse&&(n?F(u,"qunit-collapsed"):n=!0))
var d=o.firstChild,f=l?"<b class='failed'>"+l+"</b>, <b class='passed'>"+s+"</b>, ":""
if(d.innerHTML+=" <b class='counts'>("+f+r.assertions.length+")</b>",pt.completed++,r.skipped){o.className="skipped"
var h=g.createElement("em")
h.className="qunit-skipped-label",h.innerHTML="skipped",o.insertBefore(h,d)}else{if(p(d,"click",(function(){w(u,"qunit-collapsed")})),o.className=c?"pass":"fail",r.todo){var m=g.createElement("em")
m.className="qunit-todo-label",m.innerHTML="todo",o.className+=" todo",o.insertBefore(m,d)}var D=g.createElement("span")
D.className="runtime",D.innerHTML=r.runtime+" ms",o.insertBefore(D,u)}if(r.source){var v=g.createElement("p")
v.innerHTML="<strong>Source: </strong>"+O(r.source),F(v,"qunit-source"),c&&F(v,"qunit-collapsed"),p(d,"click",(function(){w(v,"qunit-collapsed")})),o.appendChild(v)}e.hidepassed&&("passed"===i||r.skipped)&&(t.push(o),a.removeChild(o))}})),at.on("error",(function(e){var t=S("global failure")
if(t){var n=O(_(e))
n="<span class='test-message'>"+n+"</span>",e&&e.stack&&(n+="<table><tr class='test-source'><th>Source: </th><td><pre>"+O(e.stack)+"</pre></td></tr></table>")
var r=t.getElementsByTagName("ol")[0],a=g.createElement("li")
a.className="fail",a.innerHTML=n,r.appendChild(a),t.className="fail"}}))
var i,u=(i=f.phantom)&&i.version&&i.version.major>0
u&&h.warn("Support for PhantomJS is deprecated and will be removed in QUnit 3.0."),u||"complete"!==g.readyState?p(f,"load",at.load):at.load()
var s=f.onerror
f.onerror=function(t,n,r,a,o){var i=!1
if(s){for(var u=arguments.length,l=new Array(u>5?u-5:0),c=5;c<u;c++)l[c-5]=arguments[c]
i=s.call.apply(s,[this,t,n,r,a,o].concat(l))}if(!0!==i){if(e.current&&e.current.ignoreGlobalErrors)return!0
var d=o||new Error(t)
!d.stack&&n&&r&&(d.stack="".concat(n,":").concat(r)),at.onUncaughtException(d)}return i},f.addEventListener("unhandledrejection",(function(e){at.onUncaughtException(e.reason)}))}function d(e){return"function"==typeof e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function p(e,t,n){e.addEventListener(t,n,!1)}function m(e,t,n){e.removeEventListener(t,n,!1)}function D(e,t,n){for(var r=e.length;r--;)p(e[r],t,n)}function y(e,t){return(" "+e.className+" ").indexOf(" "+t+" ")>=0}function F(e,t){y(e,t)||(e.className+=(e.className?" ":"")+t)}function w(e,t,n){n||void 0===n&&!y(e,t)?F(e,t):E(e,t)}function E(e,t){for(var n=" "+e.className+" ";n.indexOf(" "+t+" ")>=0;)n=n.replace(" "+t+" "," ")
e.className=d(n)}function C(e){return g.getElementById&&g.getElementById(e)}function x(){var e=C("qunit-abort-tests-button")
return e&&(e.disabled=!0,e.innerHTML="Aborting..."),at.config.queue.length=0,!1}function A(e){var t=C("qunit-filter-input")
return t.value=d(t.value),R(),e&&e.preventDefault&&e.preventDefault(),!1}function k(){var n,r=this,a={}
n="selectedIndex"in r?r.options[r.selectedIndex].value||void 0:r.checked?r.defaultValue||!0:void 0,a[r.name]=n
var o=T(a)
if("hidepassed"===r.name&&"replaceState"in f.history){at.urlParams[r.name]=n,e[r.name]=n||!1
var i=C("qunit-tests")
if(i){var u=i.children.length,s=i.children
if(r.checked){for(var l=0;l<u;l++){var d=s[l],p=d?d.className:"",h=p.indexOf("pass")>-1,m=p.indexOf("skipped")>-1;(h||m)&&t.push(d)}var D,g=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(!n){if(Array.isArray(e)||(n=c(e))){n&&(e=n)
var r=0,a=function(){}
return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,u=!1
return{s:function(){n=n.call(e)},n:function(){var e=n.next()
return i=e.done,e},e:function(e){u=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(u)throw o}}}}(t)
try{for(g.s();!(D=g.n()).done;){var v=D.value
i.removeChild(v)}}catch(e){g.e(e)}finally{g.f()}}else for(var y;null!=(y=t.pop());)i.appendChild(y)}f.history.replaceState(null,"",o)}else f.location=o}function T(e){var t="?",n=f.location
for(var a in e=N(N({},at.urlParams),e))if(r.call(e,a)&&void 0!==e[a])for(var o=[].concat(e[a]),i=0;i<o.length;i++)t+=encodeURIComponent(a),!0!==o[i]&&(t+="="+encodeURIComponent(o[i])),t+="&"
return n.protocol+"//"+n.host+n.pathname+t.slice(0,-1)}function R(){var e=C("qunit-filter-input").value
f.location=T({filter:""===e?void 0:e,moduleId:l(o.selectedMap.keys()),module:void 0,testId:void 0})}function B(e,t,n){return'<li><label class="clickable'+(n?" checked":"")+'"><input type="checkbox" value="'+O(e)+'"'+(n?' checked="checked"':"")+" />"+O(t)+"</label></li>"}function S(e,t,n){var r=C("qunit-tests")
if(r){var a=g.createElement("strong")
a.innerHTML=j(e,n)
var o=g.createElement("li")
if(o.appendChild(a),void 0!==t){var i=g.createElement("a")
i.innerHTML="Rerun",i.href=T({testId:t}),o.id="qunit-test-output-"+t,o.appendChild(i)}var u=g.createElement("ol")
return u.className="qunit-assert-list",o.appendChild(u),r.appendChild(o),o}}function M(e){return 0===e.length?"":["<br /><a href='"+O(T({testId:e}))+"'>",1===e.length?"Rerun 1 failed test":"Rerun "+e.length+" failed tests","</a>"].join("")}function j(e,t){var n=""
return t&&(n="<span class='module-name'>"+O(t)+"</span>: "),n+"<span class='test-name'>"+O(e)+"</span>"}function I(e){return[e.completed," / ",e.defined," tests completed.<br />"].join("")}function P(e){return e.replace(/<\/?[^>]+(>|$)/g,"").replace(/&quot;/g,"").replace(/\s+/g,"")}}()}()},85629:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{IS_DESCRIPTOR:()=>r,createDescriptor:()=>d,isDescriptor:()=>a,lookupDescriptorData:()=>u,registerDescriptorData:()=>i,resolveDOMElement:()=>s,resolveDOMElements:()=>l,resolveDescription:()=>c})
const r="__dom_element_descriptor_is_descriptor__"
function a(e){return"object"==typeof e&&e&&r in e}function o(){const e=window
return e.domElementDescriptorsRegistry=e.domElementDescriptorsRegistry||new WeakMap,e.domElementDescriptorsRegistry}function i(e,t){t?o().set(e,t):o().delete(e)}function u(e){return o().get(e)||null}function s(e){let t=a(e)?u(e):e
if(!t)return null
if(void 0!==t.element)return t.element
for(let n of t.elements||[])return n
return null}function l(e){let t=a(e)?u(e):e
if(!t)return[]
if(t.elements)return Array.from(t.elements)
{let e=t.element
return e?[e]:[]}}function c(e){return(a(e)?u(e):e)?.description}function d(e){let t={[r]:!0}
return i(t,e),t}}}])

//# sourceMappingURL=chunk.407.6de84b408b796aee6089.map