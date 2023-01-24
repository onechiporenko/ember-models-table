/*! For license information please see chunk.535.af3e8845fc3a0a466ddd.js.LICENSE.txt */
(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[535],{348:(e,t,n)=>{"use strict"
function r(e){return e&&e.isDescriptor?"descriptor":null===e?"null":typeof e}function a(e,t,n,a){var o={configurable:!0,enumerable:!0}
"undefined"!==r(a)?o.get=a:(o.writable=!1,o.value=n),Object.defineProperty(e,t,o)}function o(e,t){delete e.__parentTreeNode,t&&Object.defineProperty(e,"__parentTreeNode",{value:t,configurable:!0,enumerable:!1})}function i(e,t){this.blueprint=e,this.builders=t}n.r(t),n.d(t,{default:()=>s}),i.prototype={builderFor:function(e){return this.builders[r(e)]||this.builders.default},build:function(e){var t,n={}
return this.processNode({root:this.blueprint},n),o(t=n.root,e),t},processNode:function(e,t,n){var a=Object.keys(e),i=this
return a.forEach((function(n){var a,o,s,l=e[n]
a=i.builderFor(l),o=u[r(l)]||u.default,(s=a(t,n,l,o))&&i.processNode(s[1],s[0],t)})),o(t,n),t}}
const u={descriptor:function(e,t,n){"function"==typeof n.setup&&n.setup(e,t),n.value?a(e,t,n.value):a(e,t,void 0,(function(){return n.get.call(this,t)}))},object:function(e,t,n){var r,o,i={}
return a(e,t,i),r=i,o=t,Object.defineProperty(r,"__meta",{value:{key:o,type:"node"},configurable:!1,enumerable:!1}),[i,n]},default:function(e,t,n){a(e,t,n)}},s={defineProperty:a,create:function(e,t){var n=function(){for(var e,t=arguments[0],n=Array.prototype.slice.call(arguments,1),r=0;r<n.length;r++)if(e=n[r])for(var a in e)void 0!==e[a]&&(t[a]=e[a])
return t}({},u,(t=t||{}).builder)
return new i(e,n).build(t.parent)},parent:function(e){return function(e){if("object"==typeof e&&null!==e)return e.__parentTreeNode}(e)},meta:function(e){return function(e){if("object"==typeof e&&null!==e)return e.__meta}(e)}}},126:function(e,t){!function t(n){var r=n,a=n.document
function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}var i=i||{}
function u(e){this.name="SupportError",this.cause=e.cause,this.message="`".concat(e.cause,"` - feature unsupported in your environment."),e.ruleId&&(this.ruleId=e.ruleId,this.message+=" Skipping ".concat(this.ruleId," rule.")),this.stack=(new Error).stack}i.version="4.6.3","function"==typeof define&&define.amd&&define("axe-core",[],(function(){return i})),"object"===(void 0===e?"undefined":o(e))&&e.exports&&"function"==typeof t.toString&&(i.source="("+t.toString()+')(typeof window === "object" ? window : this);',e.exports=i),"function"==typeof n.getComputedStyle&&(n.axe=i),u.prototype=Object.create(Error.prototype),u.prototype.constructor=u
var s=["node"],l=["variant"],c=["matches"],d=["chromium"],p=["noImplicit"],f=["noPresentational"],h=["node"],m=["nodes"],D=["node"],g=["relatedNodes"],v=["environmentData"],y=["environmentData"],b=["node"],F=["environmentData"],w=["environmentData"],E=["environmentData"]
function C(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&x(e,t)}function x(e,t){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},x(e,t)}function A(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=N(e)
if(t){var a=N(this).constructor
n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments)
return k(this,n)}}function k(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return T(e)}function T(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function N(e){return N=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},N(e)}function R(e,t){if(null==e)return{}
var n,r,a=function(e,t){if(null==e)return{}
var n,r,a={},o=Object.keys(e)
for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n])
return a}(e,t)
if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e)
for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function B(e){return function(e){if(Array.isArray(e))return V(e)}(e)||S(e)||$(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function O(){return O=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},O.apply(this,arguments)}function _(e,t){return P(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null!=n){var r,a,o,i,u=[],s=!0,l=!1
try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return
s=!1}else for(;!(s=(r=o.call(n)).done)&&(u.push(r.value),u.length!==t);s=!0);}catch(e){l=!0,a=e}finally{try{if(!s&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(l)throw a}}return u}}(e,t)||$(e,t)||I()}function I(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function P(e){if(Array.isArray(e))return e}function j(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function M(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,L(r.key),r)}}function q(e,t,n){return t&&M(e.prototype,t),n&&M(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function L(e){var t=function(e,t){if("object"!==o(e)||null===e)return e
var n=e[Symbol.toPrimitive]
if(void 0!==n){var r=n.call(e,"string")
if("object"!==o(r))return r
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"===o(t)?t:String(t)}function H(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(!n){if(Array.isArray(e)||(n=$(e))||t&&e&&"number"==typeof e.length){n&&(e=n)
var r=0,a=function(){}
return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,u=!1
return{s:function(){n=n.call(e)},n:function(){var e=n.next()
return i=e.done,e},e:function(e){u=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(u)throw o}}}}function $(e,t){if(e){if("string"==typeof e)return V(e,t)
var n=Object.prototype.toString.call(e).slice(8,-1)
return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?V(e,t):void 0}}function V(e,t){(null==t||t>e.length)&&(t=e.length)
for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n]
return r}function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}!function(){var e=Object.create,t=Object.defineProperty,x=Object.getPrototypeOf,k=Object.prototype.hasOwnProperty,N=Object.getOwnPropertyNames,M=Object.getOwnPropertyDescriptor,V=function(e,t){return function(){return t||e((t={exports:{}}).exports,t),t.exports}},z=function(e,n){for(var r in n)t(e,r,{get:n[r],enumerable:!0})},U=function(n){return function(e,n,r){if(n&&"object"===o(n)||"function"==typeof n){var a,i=H(N(n))
try{var u=function(){var o=a.value
k.call(e,o)||"default"===o||t(e,o,{get:function(){return n[o]},enumerable:!(r=M(n,o))||r.enumerable})}
for(i.s();!(a=i.n()).done;)u()}catch(e){i.e(e)}finally{i.f()}}return e}((r=t(null!=n?e(x(n)):{},"default",n&&n.__esModule&&"default"in n?{get:function(){return n.default},enumerable:!0}:{value:n,enumerable:!0}),t(r,"__esModule",{value:!0})),n)
var r},W=V((function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.isIdentStart=function(e){return e>="a"&&e<="z"||e>="A"&&e<="Z"||"-"===e||"_"===e},e.isIdent=function(e){return e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||"-"===e||"_"===e},e.isHex=function(e){return e>="a"&&e<="f"||e>="A"&&e<="F"||e>="0"&&e<="9"},e.escapeIdentifier=function(t){for(var n=t.length,r="",a=0;a<n;){var o=t.charAt(a)
if(e.identSpecialChars[o])r+="\\"+o
else if("_"===o||"-"===o||o>="A"&&o<="Z"||o>="a"&&o<="z"||0!==a&&o>="0"&&o<="9")r+=o
else{var i=o.charCodeAt(0)
if(55296==(63488&i)){var u=t.charCodeAt(a++)
if(55296!=(64512&i)||56320!=(64512&u))throw Error("UCS-2(decode): illegal sequence")
i=((1023&i)<<10)+(1023&u)+65536}r+="\\"+i.toString(16)+" "}a++}return r},e.escapeStr=function(t){for(var n,r=t.length,a="",o=0;o<r;){var i=t.charAt(o)
'"'===i?i='\\"':"\\"===i?i="\\\\":void 0!==(n=e.strReplacementsRev[i])&&(i=n),a+=i,o++}return'"'+a+'"'},e.identSpecialChars={"!":!0,'"':!0,"#":!0,$:!0,"%":!0,"&":!0,"'":!0,"(":!0,")":!0,"*":!0,"+":!0,",":!0,".":!0,"/":!0,";":!0,"<":!0,"=":!0,">":!0,"?":!0,"@":!0,"[":!0,"\\":!0,"]":!0,"^":!0,"`":!0,"{":!0,"|":!0,"}":!0,"~":!0},e.strReplacementsRev={"\n":"\\n","\r":"\\r","\t":"\\t","\f":"\\f","\v":"\\v"},e.singleQuoteEscapeChars={n:"\n",r:"\r",t:"\t",f:"\f","\\":"\\","'":"'"},e.doubleQuotesEscapeChars={n:"\n",r:"\r",t:"\t",f:"\f","\\":"\\",'"':'"'}})),G=V((function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
var t=W()
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
return t}()}})),Y=V((function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
var t=W()
e.renderEntity=function e(n){var r=""
switch(n.type){case"ruleSet":for(var a=n.rule,o=[];a;)a.nestingOperator&&o.push(a.nestingOperator),o.push(e(a)),a=a.rule
r=o.join(" ")
break
case"selectors":r=n.selectors.map(e).join(", ")
break
case"rule":n.tagName&&(r="*"===n.tagName?"*":t.escapeIdentifier(n.tagName)),n.id&&(r+="#"+t.escapeIdentifier(n.id)),n.classNames&&(r+=n.classNames.map((function(e){return"."+t.escapeIdentifier(e)})).join("")),n.attrs&&(r+=n.attrs.map((function(e){return"operator"in e?"substitute"===e.valueType?"["+t.escapeIdentifier(e.name)+e.operator+"$"+e.value+"]":"["+t.escapeIdentifier(e.name)+e.operator+t.escapeStr(e.value)+"]":"["+t.escapeIdentifier(e.name)+"]"})).join("")),n.pseudos&&(r+=n.pseudos.map((function(n){return n.valueType?"selector"===n.valueType?":"+t.escapeIdentifier(n.name)+"("+e(n.value)+")":"substitute"===n.valueType?":"+t.escapeIdentifier(n.name)+"($"+n.value+")":"numeric"===n.valueType?":"+t.escapeIdentifier(n.name)+"("+n.value+")":":"+t.escapeIdentifier(n.name)+"("+t.escapeIdentifier(n.value)+")":":"+t.escapeIdentifier(n.name)})).join(""))
break
default:throw Error('Unknown entity type: "'+n.type+'".')}return r}})),Q=V((function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
var t=G(),n=Y(),r=function(){function e(){this.pseudos={},this.attrEqualityMods={},this.ruleNestingOperators={},this.substitutesEnabled=!1}return e.prototype.registerSelectorPseudos=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
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
e.CssSelectorParser=r})),K=V((function(e,t){"use strict"
t.exports=function(){}})),X=V((function(e,t){"use strict"
var n=K()()
t.exports=function(e){return e!==n&&null!==e}})),J=V((function(e,t){"use strict"
var n=X(),r=Array.prototype.forEach,a=Object.create,o=function(e,t){var n
for(n in e)t[n]=e[n]}
t.exports=function(e){var t=a(null)
return r.call(arguments,(function(e){n(e)&&o(Object(e),t)})),t}})),Z=V((function(e,t){"use strict"
t.exports=function(){var e=Math.sign
return"function"==typeof e&&1===e(10)&&-1===e(-20)}})),ee=V((function(e,t){"use strict"
t.exports=function(e){return e=Number(e),isNaN(e)||0===e?e:e>0?1:-1}})),te=V((function(e,t){"use strict"
t.exports=Z()()?Math.sign:ee()})),ne=V((function(e,t){"use strict"
var n=te(),r=Math.abs,a=Math.floor
t.exports=function(e){return isNaN(e)?0:0!==(e=Number(e))&&isFinite(e)?n(e)*a(r(e)):e}})),re=V((function(e,t){"use strict"
var n=ne(),r=Math.max
t.exports=function(e){return r(0,n(e))}})),ae=V((function(e,t){"use strict"
var n=re()
t.exports=function(e,t,r){var a
return isNaN(e)?(a=t)>=0?r&&a?a-1:a:1:!1!==e&&n(e)}})),oe=V((function(e,t){"use strict"
t.exports=function(e){if("function"!=typeof e)throw new TypeError(e+" is not a function")
return e}})),ie=V((function(e,t){"use strict"
var n=X()
t.exports=function(e){if(!n(e))throw new TypeError("Cannot use null or undefined")
return e}})),ue=V((function(e,t){"use strict"
var n=oe(),r=ie(),a=Function.prototype.bind,o=Function.prototype.call,i=Object.keys,u=Object.prototype.propertyIsEnumerable
t.exports=function(e,t){return function(s,l){var c,d=arguments[2],p=arguments[3]
return s=Object(r(s)),n(l),c=i(s),p&&c.sort("function"==typeof p?a.call(p,s):void 0),"function"!=typeof e&&(e=c[e]),o.call(e,c,(function(e,n){return u.call(s,e)?o.call(l,d,s[e],e,s,n):t}))}}})),se=V((function(e,t){"use strict"
t.exports=ue()("forEach")})),le=V((function(){})),ce=V((function(e,t){"use strict"
t.exports=function(){var e,t=Object.assign
return"function"==typeof t&&(t(e={foo:"raz"},{bar:"dwa"},{trzy:"trzy"}),e.foo+e.bar+e.trzy==="razdwatrzy")}})),de=V((function(e,t){"use strict"
t.exports=function(){try{return Object.keys("primitive"),!0}catch(e){return!1}}})),pe=V((function(e,t){"use strict"
var n=X(),r=Object.keys
t.exports=function(e){return r(n(e)?Object(e):e)}})),fe=V((function(e,t){"use strict"
t.exports=de()()?Object.keys:pe()})),he=V((function(e,t){"use strict"
var n=fe(),r=ie(),a=Math.max
t.exports=function(e,t){var o,i,u,s=a(arguments.length,2)
for(e=Object(r(e)),u=function(n){try{e[n]=t[n]}catch(e){o||(o=e)}},i=1;i<s;++i)n(t=arguments[i]).forEach(u)
if(void 0!==o)throw o
return e}})),me=V((function(e,t){"use strict"
t.exports=ce()()?Object.assign:he()})),De=V((function(e,t){"use strict"
var n=X(),r={function:!0,object:!0}
t.exports=function(e){return n(e)&&r[o(e)]||!1}})),ge=V((function(e,t){"use strict"
var n=me(),r=De(),a=X(),o=Error.captureStackTrace
t.exports=function(e){var i=new Error(e),u=arguments[1],s=arguments[2]
return a(s)||r(u)&&(s=u,u=null),a(s)&&n(i,s),a(u)&&(i.code=u),o&&o(i,t.exports),i}})),ve=V((function(e,t){"use strict"
var n=ie(),r=Object.defineProperty,a=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,i=Object.getOwnPropertySymbols
t.exports=function(e,t){var u,s=Object(n(t))
if(e=Object(n(e)),o(s).forEach((function(n){try{r(e,n,a(t,n))}catch(e){u=e}})),"function"==typeof i&&i(s).forEach((function(n){try{r(e,n,a(t,n))}catch(e){u=e}})),void 0!==u)throw u
return e}})),ye=V((function(e,t){"use strict"
var n,r,a,o,i,u=re(),s=function(e,t){return t}
try{Object.defineProperty(s,"length",{configurable:!0,writable:!1,enumerable:!1,value:1})}catch(e){}1===s.length?(n={configurable:!0,writable:!1,enumerable:!1},r=Object.defineProperty,t.exports=function(e,t){return t=u(t),e.length===t?e:(n.value=t,r(e,"length",n))}):(o=ve(),i=[],a=function(e){var t,n=0
if(i[e])return i[e]
for(t=[];e--;)t.push("a"+(++n).toString(36))
return new Function("fn","return function ("+t.join(", ")+") { return fn.apply(this, arguments); };")},t.exports=function(e,t){var n
if(t=u(t),e.length===t)return e
n=a(t)(e)
try{o(n,e)}catch(e){}return n})})),be=V((function(e,t){"use strict"
t.exports=function(e){return null!=e}})),Fe=V((function(e,t){"use strict"
var n=be(),r={object:!0,function:!0,undefined:!0}
t.exports=function(e){return!!n(e)&&hasOwnProperty.call(r,o(e))}})),we=V((function(e,t){"use strict"
var n=Fe()
t.exports=function(e){if(!n(e))return!1
try{return!!e.constructor&&e.constructor.prototype===e}catch(e){return!1}}})),Ee=V((function(e,t){"use strict"
var n=we()
t.exports=function(e){if("function"!=typeof e)return!1
if(!hasOwnProperty.call(e,"length"))return!1
try{if("number"!=typeof e.length)return!1
if("function"!=typeof e.call)return!1
if("function"!=typeof e.apply)return!1}catch(e){return!1}return!n(e)}})),Ce=V((function(e,t){"use strict"
var n=Ee(),r=/^\s*class[\s{/}]/,a=Function.prototype.toString
t.exports=function(e){return!!n(e)&&!r.test(a.call(e))}})),xe=V((function(e,t){"use strict"
var n="razdwatrzy"
t.exports=function(){return"function"==typeof n.contains&&!0===n.contains("dwa")&&!1===n.contains("foo")}})),Ae=V((function(e,t){"use strict"
var n=String.prototype.indexOf
t.exports=function(e){return n.call(this,e,arguments[1])>-1}})),ke=V((function(e,t){"use strict"
t.exports=xe()()?String.prototype.contains:Ae()})),Te=V((function(e,t){"use strict"
var n=be(),r=Ce(),a=me(),o=J(),i=ke(),u=t.exports=function(e,t){var r,u,s,l,c
return arguments.length<2||"string"!=typeof e?(l=t,t=e,e=null):l=arguments[2],n(e)?(r=i.call(e,"c"),u=i.call(e,"e"),s=i.call(e,"w")):(r=s=!0,u=!1),c={value:t,configurable:r,enumerable:u,writable:s},l?a(o(l),c):c}
u.gs=function(e,t,u){var s,l,c,d
return"string"!=typeof e?(c=u,u=t,t=e,e=null):c=arguments[3],n(t)?r(t)?n(u)?r(u)||(c=u,u=void 0):u=void 0:(c=t,t=u=void 0):t=void 0,n(e)?(s=i.call(e,"c"),l=i.call(e,"e")):(s=!0,l=!1),d={get:t,set:u,configurable:s,enumerable:l},c?a(o(c),d):d}})),Ne=V((function(e,t){"use strict"
var n,r,a,i,u,s,l,c=Te(),d=oe(),p=Function.prototype.apply,f=Function.prototype.call,h=Object.create,m=Object.defineProperty,D=Object.defineProperties,g=Object.prototype.hasOwnProperty,v={configurable:!0,enumerable:!1,writable:!0}
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
return d(t),g.call(this,"__ee__")?n=this.__ee__:(n=v.value=h(null),m(this,"__ee__",v),v.value=null),n[e]?"object"===o(n[e])?n[e].push(t):n[e]=[n[e],t]:n[e]=t,this},once:r,off:a,emit:i},s={on:c(n),once:c(r),off:c(a),emit:c(i)},l=D({},s),t.exports=e=function(e){return null==e?h(l):D(Object(e),s)},e.methods=u})),Re=V((function(e,t){"use strict"
t.exports=function(){var e,t,n=Array.from
return"function"==typeof n&&(t=n(e=["raz","dwa"]),Boolean(t&&t!==e&&"dwa"===t[1]))}})),Be=V((function(e,t){"use strict"
t.exports=function(){return"object"===("undefined"==typeof globalThis?"undefined":o(globalThis))&&!!globalThis&&globalThis.Array===Array}})),Se=V((function(e,t){var r=function(){if("object"===("undefined"==typeof self?"undefined":o(self))&&self)return self
if("object"===(void 0===n?"undefined":o(n))&&n)return n
throw new Error("Unable to resolve global `this`")}
t.exports=function(){if(this)return this
try{Object.defineProperty(Object.prototype,"__global__",{get:function(){return this},configurable:!0})}catch(e){return r()}try{return __global__||r()}finally{delete Object.prototype.__global__}}()})),Oe=V((function(e,t){"use strict"
t.exports=Be()()?globalThis:Se()})),_e=V((function(e,t){"use strict"
var n=Oe(),r={object:!0,symbol:!0}
t.exports=function(){var e,t=n.Symbol
if("function"!=typeof t)return!1
e=t("test symbol")
try{String(e)}catch(e){return!1}return!!r[o(t.iterator)]&&!!r[o(t.toPrimitive)]&&!!r[o(t.toStringTag)]}})),Ie=V((function(e,t){"use strict"
t.exports=function(e){return!!e&&("symbol"===o(e)||!!e.constructor&&"Symbol"===e.constructor.name&&"Symbol"===e[e.constructor.toStringTag])}})),Pe=V((function(e,t){"use strict"
var n=Ie()
t.exports=function(e){if(!n(e))throw new TypeError(e+" is not a symbol")
return e}})),je=V((function(e,t){"use strict"
var n=Te(),r=Object.create,a=Object.defineProperty,o=Object.prototype,i=r(null)
t.exports=function(e){for(var t,r,u=0;i[e+(u||"")];)++u
return i[e+=u||""]=!0,a(o,t="@@"+e,n.gs(null,(function(e){r||(r=!0,a(this,t,n(e)),r=!1)}))),t}})),Me=V((function(e,t){"use strict"
var n=Te(),r=Oe().Symbol
t.exports=function(e){return Object.defineProperties(e,{hasInstance:n("",r&&r.hasInstance||e("hasInstance")),isConcatSpreadable:n("",r&&r.isConcatSpreadable||e("isConcatSpreadable")),iterator:n("",r&&r.iterator||e("iterator")),match:n("",r&&r.match||e("match")),replace:n("",r&&r.replace||e("replace")),search:n("",r&&r.search||e("search")),species:n("",r&&r.species||e("species")),split:n("",r&&r.split||e("split")),toPrimitive:n("",r&&r.toPrimitive||e("toPrimitive")),toStringTag:n("",r&&r.toStringTag||e("toStringTag")),unscopables:n("",r&&r.unscopables||e("unscopables"))})}})),qe=V((function(e,t){"use strict"
var n=Te(),r=Pe(),a=Object.create(null)
t.exports=function(e){return Object.defineProperties(e,{for:n((function(t){return a[t]?a[t]:a[t]=e(String(t))})),keyFor:n((function(e){var t
for(t in r(e),a)if(a[t]===e)return t}))})}})),Le=V((function(e,t){"use strict"
var n,r,a,i=Te(),u=Pe(),s=Oe().Symbol,l=je(),c=Me(),d=qe(),p=Object.create,f=Object.defineProperties,h=Object.defineProperty
if("function"==typeof s)try{String(s()),a=!0}catch(e){}else s=null
r=function(e){if(this instanceof r)throw new TypeError("Symbol is not a constructor")
return n(e)},t.exports=n=function e(t){var n
if(this instanceof e)throw new TypeError("Symbol is not a constructor")
return a?s(t):(n=p(r.prototype),t=void 0===t?"":String(t),f(n,{__description__:i("",t),__name__:i("",l(t))}))},c(n),d(n),f(r.prototype,{constructor:i(n),toString:i("",(function(){return this.__name__}))}),f(n.prototype,{toString:i((function(){return"Symbol ("+u(this).__description__+")"})),valueOf:i((function(){return u(this)}))}),h(n.prototype,n.toPrimitive,i("",(function(){var e=u(this)
return"symbol"===o(e)?e:e.toString()}))),h(n.prototype,n.toStringTag,i("c","Symbol")),h(r.prototype,n.toStringTag,i("c",n.prototype[n.toStringTag])),h(r.prototype,n.toPrimitive,i("c",n.prototype[n.toPrimitive]))})),He=V((function(e,t){"use strict"
t.exports=_e()()?Oe().Symbol:Le()})),$e=V((function(e,t){"use strict"
var n=Object.prototype.toString,r=n.call(function(){return arguments}())
t.exports=function(e){return n.call(e)===r}})),Ve=V((function(e,t){"use strict"
var n=Object.prototype.toString,r=RegExp.prototype.test.bind(/^[object [A-Za-z0-9]*Function]$/)
t.exports=function(e){return"function"==typeof e&&r(n.call(e))}})),ze=V((function(e,t){"use strict"
var n=Object.prototype.toString,r=n.call("")
t.exports=function(e){return"string"==typeof e||e&&"object"===o(e)&&(e instanceof String||n.call(e)===r)||!1}})),Ue=V((function(e,t){"use strict"
var n=He().iterator,r=$e(),a=Ve(),o=re(),i=oe(),u=ie(),s=X(),l=ze(),c=Array.isArray,d=Function.prototype.call,p={configurable:!0,enumerable:!0,writable:!0,value:null},f=Object.defineProperty
t.exports=function(e){var t,h,m,D,g,v,y,b,F,w,E=arguments[1],C=arguments[2]
if(e=Object(u(e)),s(E)&&i(E),this&&this!==Array&&a(this))t=this
else{if(!E){if(r(e))return 1!==(g=e.length)?Array.apply(null,e):((D=new Array(1))[0]=e[0],D)
if(c(e)){for(D=new Array(g=e.length),h=0;h<g;++h)D[h]=e[h]
return D}}D=[]}if(!c(e))if(void 0!==(F=e[n])){for(y=i(F).call(e),t&&(D=new t),b=y.next(),h=0;!b.done;)w=E?d.call(E,C,b.value,h):b.value,t?(p.value=w,f(D,h,p)):D[h]=w,b=y.next(),++h
g=h}else if(l(e)){for(g=e.length,t&&(D=new t),h=0,m=0;h<g;++h)w=e[h],h+1<g&&(v=w.charCodeAt(0))>=55296&&v<=56319&&(w+=e[++h]),w=E?d.call(E,C,w,m):w,t?(p.value=w,f(D,m,p)):D[m]=w,++m
g=m}if(void 0===g)for(g=o(e.length),t&&(D=new t(g)),h=0;h<g;++h)w=E?d.call(E,C,e[h],h):e[h],t?(p.value=w,f(D,h,p)):D[h]=w
return t&&(p.value=null,D.length=g),D}})),We=V((function(e,t){"use strict"
t.exports=Re()()?Array.from:Ue()})),Ge=V((function(e,t){"use strict"
var n=We(),r=Array.isArray
t.exports=function(e){return r(e)?e:n(e)}})),Ye=V((function(e,t){"use strict"
var n,r=Ge(),a=X(),o=oe(),i=Array.prototype.slice
n=function(e){return this.map((function(t,n){return t?t(e[n]):e[n]})).concat(i.call(e,this.length))},t.exports=function(e){return(e=r(e)).forEach((function(e){a(e)&&o(e)})),n.bind(e)}})),Qe=V((function(e,t){"use strict"
var n=oe()
t.exports=function(e){var t
return"function"==typeof e?{set:e,get:e}:(t={get:n(e.get)},void 0!==e.set?(t.set=n(e.set),e.delete&&(t.delete=n(e.delete)),e.clear&&(t.clear=n(e.clear)),t):(t.set=t.get,t))}})),Ke=V((function(e,t){"use strict"
var n=ge(),r=ye(),a=Te(),o=Ne().methods,i=Ye(),u=Qe(),s=Function.prototype.apply,l=Function.prototype.call,c=Object.create,d=Object.defineProperties,p=o.on,f=o.emit
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
return 0===t?h.has("data"):(T&&(n=T(n)),null!==(e=D?D(n):String(n[0]))&&h.has(e))})),d(k,{__memoized__:a(!0),delete:a(b),clear:a(h.clear),_get:a(F),_has:a(w)}),h}})),Xe=V((function(e,t){"use strict"
var n=oe(),r=se(),a=le(),o=Ke(),i=ae()
t.exports=function e(t){var u,s,l
if(n(t),(u=Object(arguments[1])).async&&u.promise)throw new Error("Options 'async' and 'promise' cannot be used together")
return hasOwnProperty.call(t,"__memoized__")&&!u.force?t:(s=i(u.length,t.length,u.async&&a.async),l=o(t,s,u),r(a,(function(e,t){u[t]&&e(u[t],l,u)})),e.__profiler__&&e.__profiler__(l),l.updateEnv(),l.memoized)}})),Je=V((function(e,t){"use strict"
t.exports=function(e){var t,n,r=e.length
if(!r)return""
for(t=String(e[n=0]);--r;)t+=""+e[++n]
return t}})),Ze=V((function(e,t){"use strict"
t.exports=function(e){return e?function(t){for(var n=String(t[0]),r=0,a=e;--a;)n+=""+t[++r]
return n}:function(){return""}}})),et=V((function(e,t){"use strict"
t.exports=function(){var e=Number.isNaN
return"function"==typeof e&&!e({})&&e(NaN)&&!e(34)}})),tt=V((function(e,t){"use strict"
t.exports=function(e){return e!=e}})),nt=V((function(e,t){"use strict"
t.exports=et()()?Number.isNaN:tt()})),rt=V((function(e,t){"use strict"
var n=nt(),r=re(),a=ie(),o=Array.prototype.indexOf,i=Object.prototype.hasOwnProperty,u=Math.abs,s=Math.floor
t.exports=function(e){var t,l,c,d
if(!n(e))return o.apply(this,arguments)
for(l=r(a(this).length),c=arguments[1],t=c=isNaN(c)?0:c>=0?s(c):r(this.length)-s(u(c));t<l;++t)if(i.call(this,t)&&(d=this[t],n(d)))return t
return-1}})),at=V((function(e,t){"use strict"
var n=rt(),r=Object.create
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
for(e=i[1][r],i[0].splice(r,1),i[1].splice(r,1);!i[0].length&&l.length;)r=l.pop(),(i=l.pop())[0].splice(r,1),i[1].splice(r,1)}delete a[e]},clear:function(){t=[],a=r(null)}}}})),ot=V((function(e,t){"use strict"
var n=rt()
t.exports=function(){var e=0,t=[],r=[]
return{get:function(e){var a=n.call(t,e[0])
return-1===a?null:r[a]},set:function(n){return t.push(n[0]),r.push(++e),e},delete:function(e){var a=n.call(r,e);-1!==a&&(t.splice(a,1),r.splice(a,1))},clear:function(){t=[],r=[]}}}})),it=V((function(e,t){"use strict"
var n=rt(),r=Object.create
t.exports=function(e){var t=0,a=[[],[]],o=r(null)
return{get:function(t){for(var r,o=0,i=a;o<e-1;){if(-1===(r=n.call(i[0],t[o])))return null
i=i[1][r],++o}return-1===(r=n.call(i[0],t[o]))?null:i[1][r]||null},set:function(r){for(var i,u=0,s=a;u<e-1;)-1===(i=n.call(s[0],r[u]))&&(i=s[0].push(r[u])-1,s[1].push([[],[]])),s=s[1][i],++u
return-1===(i=n.call(s[0],r[u]))&&(i=s[0].push(r[u])-1),s[1][i]=++t,o[t]=r,t},delete:function(t){for(var r,i=0,u=a,s=[],l=o[t];i<e-1;){if(-1===(r=n.call(u[0],l[i])))return
s.push(u,r),u=u[1][r],++i}if(-1!==(r=n.call(u[0],l[i]))){for(t=u[1][r],u[0].splice(r,1),u[1].splice(r,1);!u[0].length&&s.length;)r=s.pop(),(u=s.pop())[0].splice(r,1),u[1].splice(r,1)
delete o[t]}},clear:function(){a=[[],[]],o=r(null)}}}})),ut=V((function(e,t){"use strict"
var n=oe(),r=se(),a=Function.prototype.call
t.exports=function(e,t){var o={},i=arguments[2]
return n(t),r(e,(function(e,n,r,u){o[n]=a.call(t,i,e,n,r,u)})),o}})),st=V((function(e,t){"use strict"
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
if("function"==typeof WebKitMutationObserver)return r(WebKitMutationObserver)}return"function"==typeof setImmediate?function(e){setImmediate(n(e))}:"function"==typeof setTimeout||"object"===("undefined"==typeof setTimeout?"undefined":o(setTimeout))?function(e){setTimeout(n(e),0)}:null}()})),lt=V((function(){"use strict"
var e=We(),t=ut(),n=ve(),r=ye(),a=st(),o=Array.prototype.slice,i=Function.prototype.apply,u=Object.create
le().async=function(s,l){var c,d,p,f=u(null),h=u(null),m=l.memoized,D=l.original
l.memoized=r((function(e){var t=arguments,n=t[t.length-1]
return"function"==typeof n&&(c=n,t=o.call(t,0,-1)),m.apply(d=this,p=t)}),m)
try{n(l.memoized,m)}catch(e){}l.on("get",(function(e){var t,n,r
if(c){if(f[e])return"function"==typeof f[e]?f[e]=[f[e],c]:f[e].push(c),void(c=null)
t=c,n=d,r=p,c=d=p=null,a((function(){var a
hasOwnProperty.call(h,e)?(a=h[e],l.emit("getasync",e,r,n),i.call(t,a.context,a.args)):(c=t,d=n,p=r,m.apply(n,r))}))}})),l.original=function(){var t,n,r,o
return c?(t=e(arguments),n=function t(n){var r,u,s=t.id
if(null!=s){if(delete t.id,r=f[s],delete f[s],r)return u=e(arguments),l.has(s)&&(n?l.delete(s):(h[s]={context:this,args:u},l.emit("setasync",s,"function"==typeof r?1:r.length))),"function"==typeof r?o=i.call(r,this,u):r.forEach((function(e){o=i.call(e,this,u)}),this),o}else a(i.bind(t,this,arguments))},r=c,c=d=p=null,t.push(n),o=i.call(D,this,t),n.cb=r,c=n,o):i.call(D,this,arguments)},l.on("set",(function(e){c?(f[e]?"function"==typeof f[e]?f[e]=[f[e],c.cb]:f[e].push(c.cb):f[e]=c.cb,delete c.cb,c.id=e,c=null):l.delete(e)})),l.on("delete",(function(e){var t
hasOwnProperty.call(f,e)||h[e]&&(t=h[e],delete h[e],l.emit("deleteasync",e,o.call(t.args,1)))})),l.on("clear",(function(){var e=h
h=u(null),l.emit("clearasync",t(e,(function(e){return o.call(e.args,1)})))}))}})),ct=V((function(e,t){"use strict"
var n=Array.prototype.forEach,r=Object.create
t.exports=function(e){var t=r(null)
return n.call(arguments,(function(e){t[e]=!0})),t}})),dt=V((function(e,t){"use strict"
t.exports=function(e){return"function"==typeof e}})),pt=V((function(e,t){"use strict"
var n=dt()
t.exports=function(e){try{return e&&n(e.toString)?e.toString():String(e)}catch(e){throw new TypeError("Passed argument cannot be stringifed")}}})),ft=V((function(e,t){"use strict"
var n=ie(),r=pt()
t.exports=function(e){return r(n(e))}})),ht=V((function(e,t){"use strict"
var n=dt()
t.exports=function(e){try{return e&&n(e.toString)?e.toString():String(e)}catch(e){return"<Non-coercible to string value>"}}})),mt=V((function(e,t){"use strict"
var n=ht(),r=/[\n\r\u2028\u2029]/g
t.exports=function(e){var t=n(e)
return t.length>100&&(t=t.slice(0,99)+"…"),t.replace(r,(function(e){return JSON.stringify(e).slice(1,-1)}))}})),Dt=V((function(e,t){function n(e){return!!e&&("object"===o(e)||"function"==typeof e)&&"function"==typeof e.then}t.exports=n,t.exports.default=n})),gt=V((function(){"use strict"
var e=ut(),t=ct(),n=ft(),r=mt(),a=Dt(),o=st(),i=Object.create,u=t("then","then:finally","done","done:finally")
le().promise=function(t,s){var l=i(null),c=i(null),d=i(null)
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
c=i(null),l=i(null),d=i(null),s.emit("clearasync",e(t,(function(e){return[e]})))}))}})),vt=V((function(){"use strict"
var e=oe(),t=se(),n=le(),r=Function.prototype.apply
n.dispose=function(a,o,i){var u
if(e(a),i.async&&n.async||i.promise&&n.promise)return o.on("deleteasync",u=function(e,t){r.call(a,null,t)}),void o.on("clearasync",(function(e){t(e,(function(e,t){u(t,e)}))}))
o.on("delete",u=function(e,t){a(t)}),o.on("clear",(function(e){t(e,(function(e,t){u(t,e)}))}))}})),yt=V((function(e,t){"use strict"
t.exports=2147483647})),bt=V((function(e,t){"use strict"
var n=re(),r=yt()
t.exports=function(e){if((e=n(e))>r)throw new TypeError(e+" exceeds maximum possible timeout")
return e}})),Ft=V((function(){"use strict"
var e=We(),t=se(),n=st(),r=Dt(),a=bt(),o=le(),i=Function.prototype,u=Math.max,s=Math.min,l=Object.create
o.maxAge=function(c,d,p){var f,h,m,D;(c=a(c))&&(f=l(null),h=p.async&&o.async||p.promise&&o.promise?"async":"",d.on("set"+h,(function(e){f[e]=setTimeout((function(){d.delete(e)}),c),"function"==typeof f[e].unref&&f[e].unref(),D&&(D[e]&&"nextTick"!==D[e]&&clearTimeout(D[e]),D[e]=setTimeout((function(){delete D[e]}),m),"function"==typeof D[e].unref&&D[e].unref())})),d.on("delete"+h,(function(e){clearTimeout(f[e]),delete f[e],D&&("nextTick"!==D[e]&&clearTimeout(D[e]),delete D[e])})),p.preFetch&&(m=!0===p.preFetch||isNaN(p.preFetch)?.333:u(s(Number(p.preFetch),1),0))&&(D={},m=(1-m)*c,d.on("get"+h,(function(t,a,o){D[t]||(D[t]="nextTick",n((function(){var n
"nextTick"===D[t]&&(delete D[t],d.delete(t),p.async&&(a=e(a)).push(i),n=d.memoized.apply(o,a),p.promise&&r(n)&&("function"==typeof n.done?n.done(i,i):n.then(i,i)))})))}))),d.on("clear"+h,(function(){t(f,(function(e){clearTimeout(e)})),f={},D&&(t(D,(function(e){"nextTick"!==e&&clearTimeout(e)})),D={})})))}})),wt=V((function(e,t){"use strict"
var n=re(),r=Object.create,a=Object.prototype.hasOwnProperty
t.exports=function(e){var t,o=0,i=1,u=r(null),s=r(null),l=0
return e=n(e),{hit:function(n){var r=s[n],c=++l
if(u[c]=n,s[n]=c,!r){if(++o<=e)return
return n=u[i],t(n),n}if(delete u[r],i===r)for(;!a.call(u,++i););},delete:t=function(e){var t=s[e]
if(t&&(delete u[t],delete s[e],--o,i===t)){if(!o)return l=0,void(i=1)
for(;!a.call(u,++i););}},clear:function(){o=0,i=1,u=r(null),s=r(null),l=0}}}})),Et=V((function(){"use strict"
var e=re(),t=wt(),n=le()
n.max=function(r,a,o){var i,u,s;(r=e(r))&&(u=t(r),i=o.async&&n.async||o.promise&&n.promise?"async":"",a.on("set"+i,s=function(e){void 0!==(e=u.hit(e))&&a.delete(e)}),a.on("get"+i,s),a.on("delete"+i,u.delete),a.on("clear"+i,u.clear))}})),Ct=V((function(){"use strict"
var e=Te(),t=le(),n=Object.create,r=Object.defineProperties
t.refCounter=function(a,o,i){var u,s
u=n(null),s=i.async&&t.async||i.promise&&t.promise?"async":"",o.on("set"+s,(function(e,t){u[e]=t||1})),o.on("get"+s,(function(e){++u[e]})),o.on("delete"+s,(function(e){delete u[e]})),o.on("clear"+s,(function(){u={}})),r(o.memoized,{deleteRef:e((function(){var e=o.get(arguments)
return null===e?null:u[e]?!--u[e]&&(o.delete(e),!0):null})),getRefCount:e((function(){var e=o.get(arguments)
return null===e?0:u[e]?u[e]:0}))})}})),xt=V((function(e,t){"use strict"
var n=J(),r=ae(),a=Xe()
t.exports=function(e){var t,o=n(arguments[1])
return o.normalizer||0!==(t=o.length=r(o.length,e.length,o.async))&&(o.primitive?!1===t?o.normalizer=Je():t>1&&(o.normalizer=Ze()(t)):o.normalizer=!1===t?at()():1===t?ot()():it()(t)),o.async&&lt(),o.promise&&gt(),o.dispose&&vt(),o.maxAge&&Ft(),o.max&&Et(),o.refCounter&&Ct(),a(e,o)}})),At=V((function(e,t){!function(){"use strict"
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
try{return new Function(n.varname,p)}catch(e){throw"undefined"!=typeof console&&console.log("Could not create a template function: "+p),e}},e.compile=function(t,n){return e.template(t,null,n)}}()})),kt=V((function(e,t){var i,u
i=e,u=function(){"use strict"
function e(e){return"function"==typeof e}var t=Array.isArray?Array.isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)},i=0,u=void 0,s=void 0,l=function(e,t){D[i]=e,D[i+1]=t,2===(i+=2)&&(s?s(g):w())},c=void 0!==n?n:void 0,d=c||{},p=d.MutationObserver||d.WebKitMutationObserver,f="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),h="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel
function m(){var e=setTimeout
return function(){return e(g,1)}}var D=new Array(1e3)
function g(){for(var e=0;e<i;e+=2)(0,D[e])(D[e+1]),D[e]=void 0,D[e+1]=void 0
i=0}var v,y,b,F,w=void 0
function E(e,t){var n=this,r=new this.constructor(A)
void 0===r[x]&&j(r)
var a=n._state
if(a){var o=arguments[a-1]
l((function(){return I(a,r,o,n._result)}))}else O(n,r,e,t)
return r}function C(e){if(e&&"object"===o(e)&&e.constructor===this)return e
var t=new this(A)
return N(t,e),t}f?w=function(){return process.nextTick(g)}:p?(y=0,b=new p(g),F=a.createTextNode(""),b.observe(F,{characterData:!0}),w=function(){F.data=y=++y%2}):h?((v=new MessageChannel).port1.onmessage=g,w=function(){return v.port2.postMessage(0)}):w=void 0===c?function(){try{var e=Function("return this")().require("vertx")
return void 0!==(u=e.runOnLoop||e.runOnContext)?function(){u(g)}:m()}catch(e){return m()}}():m()
var x=Math.random().toString(36).substring(2)
function A(){}var k=void 0
function T(t,n,r){n.constructor===t.constructor&&r===E&&n.constructor.resolve===C?function(e,t){1===t._state?B(e,t._result):2===t._state?S(e,t._result):O(t,void 0,(function(t){return N(e,t)}),(function(t){return S(e,t)}))}(t,n):void 0===r?B(t,n):e(r)?function(e,t,n){l((function(e){var r=!1,a=function(n,a,o,i){try{n.call(a,(function(n){r||(r=!0,t!==n?N(e,n):B(e,n))}),(function(t){r||(r=!0,S(e,t))}))}catch(e){return e}}(n,t,0,0,e._label)
!r&&a&&(r=!0,S(e,a))}),e)}(t,n,r):B(t,n)}function N(e,t){if(e===t)S(e,new TypeError("You cannot resolve a promise with itself"))
else if(a=o(r=t),null===r||"object"!==a&&"function"!==a)B(e,t)
else{var n=void 0
try{n=t.then}catch(t){return void S(e,t)}T(e,t,n)}var r,a}function R(e){e._onerror&&e._onerror(e._result),_(e)}function B(e,t){e._state===k&&(e._result=t,e._state=1,0!==e._subscribers.length&&l(_,e))}function S(e,t){e._state===k&&(e._state=2,e._result=t,l(R,e))}function O(e,t,n,r){var a=e._subscribers,o=a.length
e._onerror=null,a[o]=t,a[o+1]=n,a[o+2]=r,0===o&&e._state&&l(_,e)}function _(e){var t=e._subscribers,n=e._state
if(0!==t.length){for(var r=void 0,a=void 0,o=e._result,i=0;i<t.length;i+=3)r=t[i],a=t[i+n],r?I(n,r,a,o):a(o)
e._subscribers.length=0}}function I(t,n,r,a){var o=e(r),i=void 0,u=void 0,s=!0
if(o){try{i=r(a)}catch(e){s=!1,u=e}if(n===i)return void S(n,new TypeError("A promises callback cannot return that same promise."))}else i=a
n._state!==k||(o&&s?N(n,i):!1===s?S(n,u):1===t?B(n,i):2===t&&S(n,i))}var P=0
function j(e){e[x]=P++,e._state=void 0,e._result=void 0,e._subscribers=[]}var M=function(){function e(e,n){this._instanceConstructor=e,this.promise=new e(A),this.promise[x]||j(this.promise),t(n)?(this.length=n.length,this._remaining=n.length,this._result=new Array(this.length),0===this.length?B(this.promise,this._result):(this.length=this.length||0,this._enumerate(n),0===this._remaining&&B(this.promise,this._result))):S(this.promise,new Error("Array Methods must be provided an Array"))}return e.prototype._enumerate=function(e){for(var t=0;this._state===k&&t<e.length;t++)this._eachEntry(e[t],t)},e.prototype._eachEntry=function(e,t){var n=this._instanceConstructor,r=n.resolve
if(r===C){var a=void 0,o=void 0,i=!1
try{a=e.then}catch(e){i=!0,o=e}if(a===E&&e._state!==k)this._settledAt(e._state,t,e._result)
else if("function"!=typeof a)this._remaining--,this._result[t]=e
else if(n===q){var u=new n(A)
i?S(u,o):T(u,e,a),this._willSettleAt(u,t)}else this._willSettleAt(new n((function(t){return t(e)})),t)}else this._willSettleAt(r(e),t)},e.prototype._settledAt=function(e,t,n){var r=this.promise
r._state===k&&(this._remaining--,2===e?S(r,n):this._result[t]=n),0===this._remaining&&B(r,this._result)},e.prototype._willSettleAt=function(e,t){var n=this
O(e,void 0,(function(e){return n._settledAt(1,t,e)}),(function(e){return n._settledAt(2,t,e)}))},e}(),q=function(){function t(e){this[x]=P++,this._result=this._state=void 0,this._subscribers=[],A!==e&&("function"!=typeof e&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof t?function(e,t){try{t((function(t){N(e,t)}),(function(t){S(e,t)}))}catch(t){S(e,t)}}(this,e):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return t.prototype.catch=function(e){return this.then(null,e)},t.prototype.finally=function(t){var n=this,r=n.constructor
return e(t)?n.then((function(e){return r.resolve(t()).then((function(){return e}))}),(function(e){return r.resolve(t()).then((function(){throw e}))})):n.then(t,t)},t}()
return q.prototype.then=E,q.all=function(e){return new M(this,e).promise},q.race=function(e){var n=this
return t(e)?new n((function(t,r){for(var a=e.length,o=0;o<a;o++)n.resolve(e[o]).then(t,r)})):new n((function(e,t){return t(new TypeError("You must pass an array to race."))}))},q.resolve=C,q.reject=function(e){var t=new this(A)
return S(t,e),t},q._setScheduler=function(e){s=e},q._setAsap=function(e){l=e},q._asap=l,q.polyfill=function(){var e=void 0
if(void 0!==r)e=r
else if("undefined"!=typeof self)e=self
else try{e=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var t=e.Promise
if(t){var n=null
try{n=Object.prototype.toString.call(t.resolve())}catch(e){}if("[object Promise]"===n&&!t.cast)return}e.Promise=q},q.Promise=q,q},"object"===o(e)&&void 0!==t?t.exports=u():"function"==typeof define&&define.amd?define(u):i.ES6Promise=u()})),Tt=V((function(e){var t,n,r=(t=Object.prototype.toString,n=Object.prototype.hasOwnProperty,{Class:function(e){return t.call(e).replace(/^\[object *|\]$/g,"")},HasProperty:function(e,t){return t in e},HasOwnProperty:function(e,t){return n.call(e,t)},IsCallable:function(e){return"function"==typeof e},ToInt32:function(e){return e>>0},ToUint32:function(e){return e>>>0}}),a=Math.LN2,i=Math.abs,u=Math.floor,s=Math.log,l=Math.min,c=Math.pow,d=Math.round
function p(e,t,n){return e<t?t:e>n?n:e}var f,h=Object.getOwnPropertyNames||function(e){if(e!==Object(e))throw new TypeError("Object.getOwnPropertyNames called on non-object")
var t,n=[]
for(t in e)r.HasOwnProperty(e,t)&&n.push(t)
return n}
function m(e){if(h&&f){var t,n=h(e)
for(t=0;t<n.length;t+=1)f(e,n[t],{value:e[n[t]],writable:!1,enumerable:!1,configurable:!1})}}function D(e){if(f){if(e.length>1e5)throw new RangeError("Array too large for polyfill")
var t
for(t=0;t<e.length;t+=1)n(t)}function n(t){f(e,t,{get:function(){return e._getter(t)},set:function(n){e._setter(t,n)},enumerable:!0,configurable:!1})}}function g(e,t){var n=32-t
return e<<n>>n}function v(e,t){var n=32-t
return e<<n>>>n}function y(e){return[255&e]}function b(e){return g(e[0],8)}function F(e){return[255&e]}function w(e){return v(e[0],8)}function E(e){return[(e=d(Number(e)))<0?0:e>255?255:255&e]}function C(e){return[e>>8&255,255&e]}function x(e){return g(e[0]<<8|e[1],16)}function A(e){return[e>>8&255,255&e]}function k(e){return v(e[0]<<8|e[1],16)}function T(e){return[e>>24&255,e>>16&255,e>>8&255,255&e]}function N(e){return g(e[0]<<24|e[1]<<16|e[2]<<8|e[3],32)}function R(e){return[e>>24&255,e>>16&255,e>>8&255,255&e]}function B(e){return v(e[0]<<24|e[1]<<16|e[2]<<8|e[3],32)}function S(e,t,n){var r,o,d,p,f,h,m,D=(1<<t-1)-1
function g(e){var t=u(e),n=e-t
return n<.5?t:n>.5||t%2?t+1:t}for(e!=e?(o=(1<<t)-1,d=c(2,n-1),r=0):e===1/0||e===-1/0?(o=(1<<t)-1,d=0,r=e<0?1:0):0===e?(o=0,d=0,r=1/e==-1/0?1:0):(r=e<0,(e=i(e))>=c(2,1-D)?(o=l(u(s(e)/a),1023),(d=g(e/c(2,o)*c(2,n)))/c(2,n)>=2&&(o+=1,d=1),o>D?(o=(1<<t)-1,d=0):(o+=D,d-=c(2,n))):(o=0,d=g(e/c(2,1-D-n)))),f=[],p=n;p;p-=1)f.push(d%2?1:0),d=u(d/2)
for(p=t;p;p-=1)f.push(o%2?1:0),o=u(o/2)
for(f.push(r?1:0),f.reverse(),h=f.join(""),m=[];h.length;)m.push(parseInt(h.substring(0,8),2)),h=h.substring(8)
return m}function O(e,t,n){var r,a,o,i,u,s,l,d,p=[]
for(r=e.length;r;r-=1)for(o=e[r-1],a=8;a;a-=1)p.push(o%2?1:0),o>>=1
return p.reverse(),i=p.join(""),u=(1<<t-1)-1,s=parseInt(i.substring(0,1),2)?-1:1,l=parseInt(i.substring(1,1+t),2),d=parseInt(i.substring(1+t),2),l===(1<<t)-1?0===d?s*(1/0):NaN:l>0?s*c(2,l-u)*(1+d/c(2,n)):0!==d?s*c(2,-(u-1))*(d/c(2,n)):s<0?-0:0}function _(e){return O(e,11,52)}function I(e){return S(e,11,52)}function P(e){return O(e,8,23)}function j(e){return S(e,8,23)}f=Object.defineProperty&&function(){try{return Object.defineProperty({},"x",{}),!0}catch(e){return!1}}()?Object.defineProperty:function(e,t,n){if(!e===Object(e))throw new TypeError("Object.defineProperty called on non-object")
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
this.byteLength=this.length*this.BYTES_PER_ELEMENT,this.buffer=new t(this.byteLength),this.byteOffset=0}this.constructor=u,m(this),D(this)},u.prototype=new n,u.prototype.BYTES_PER_ELEMENT=e,u.prototype._pack=a,u.prototype._unpack=i,u.BYTES_PER_ELEMENT=e,u.prototype._getter=function(e){if(arguments.length<1)throw new SyntaxError("Not enough arguments")
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
var i=a(1,y,b),u=a(1,F,w),s=a(1,E,w),l=a(2,C,x),c=a(2,A,k),d=a(4,T,N),f=a(4,R,B),h=a(4,j,P),g=a(8,I,_)
e.Int8Array=e.Int8Array||i,e.Uint8Array=e.Uint8Array||u,e.Uint8ClampedArray=e.Uint8ClampedArray||s,e.Int16Array=e.Int16Array||l,e.Uint16Array=e.Uint16Array||c,e.Int32Array=e.Int32Array||d,e.Uint32Array=e.Uint32Array||f,e.Float32Array=e.Float32Array||h,e.Float64Array=e.Float64Array||g}(),function(){function t(e,t){return r.IsCallable(e.get)?e.get(t):e[t]}var n,a=(n=new e.Uint16Array([4660]),18===t(new e.Uint8Array(n.buffer),0))
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
Boolean(u)===Boolean(a)&&d.reverse(),new e.Uint8Array(this.buffer,o,n.BYTES_PER_ELEMENT).set(d)}}o.prototype.getUint8=i(e.Uint8Array),o.prototype.getInt8=i(e.Int8Array),o.prototype.getUint16=i(e.Uint16Array),o.prototype.getInt16=i(e.Int16Array),o.prototype.getUint32=i(e.Uint32Array),o.prototype.getInt32=i(e.Int32Array),o.prototype.getFloat32=i(e.Float32Array),o.prototype.getFloat64=i(e.Float64Array),o.prototype.setUint8=u(e.Uint8Array),o.prototype.setInt8=u(e.Int8Array),o.prototype.setUint16=u(e.Uint16Array),o.prototype.setInt16=u(e.Int16Array),o.prototype.setUint32=u(e.Uint32Array),o.prototype.setInt32=u(e.Int32Array),o.prototype.setFloat32=u(e.Float32Array),o.prototype.setFloat64=u(e.Float64Array),e.DataView=e.DataView||o}()})),Nt=V((function(e){!function(e){"use strict"
if(!e.WeakMap){var t=Object.prototype.hasOwnProperty,n=Object.defineProperty&&function(){try{return 1===Object.defineProperty({},"x",{value:1}).x}catch(e){}}(),r=function(e,t,r){n?Object.defineProperty(e,t,{configurable:!0,writable:!0,value:r}):e[t]=r}
e.WeakMap=function(){function e(){if(void 0===this)throw new TypeError("Constructor WeakMap requires 'new'")
if(r(this,"_id",i("_WeakMap")),arguments.length>0)throw new TypeError("WeakMap iterable is not supported")}function n(e,n){if(!a(e)||!t.call(e,"_id"))throw new TypeError(n+" method called on incompatible receiver "+o(e))}function i(e){return e+"_"+u()+"."+u()}function u(){return Math.random().toString().substring(2)}return r(e.prototype,"delete",(function(e){if(n(this,"delete"),!a(e))return!1
var t=e[this._id]
return!(!t||t[0]!==e||(delete e[this._id],0))})),r(e.prototype,"get",(function(e){if(n(this,"get"),a(e)){var t=e[this._id]
return t&&t[0]===e?t[1]:void 0}})),r(e.prototype,"has",(function(e){if(n(this,"has"),!a(e))return!1
var t=e[this._id]
return!(!t||t[0]!==e)})),r(e.prototype,"set",(function(e,t){if(n(this,"set"),!a(e))throw new TypeError("Invalid value used as weak map key")
var o=e[this._id]
return o&&o[0]===e?(o[1]=t,this):(r(e,this._id,[e,t]),this)})),r(e,"_polyfill",!0),e}()}function a(e){return Object(e)===e}}("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:void 0!==n?n:void 0!==r?r:e)})),Rt={helpUrlBase:"https://dequeuniversity.com/rules/",gridSize:200,results:[],resultGroups:[],resultGroupMap:{},impact:Object.freeze(["minor","moderate","serious","critical"]),preload:Object.freeze({assets:["cssom","media"],timeout:1e4}),allOrigins:"<unsafe_all_origins>",sameOrigin:"<same_origin>"};[{name:"NA",value:"inapplicable",priority:0,group:"inapplicable"},{name:"PASS",value:"passed",priority:1,group:"passes"},{name:"CANTTELL",value:"cantTell",priority:2,group:"incomplete"},{name:"FAIL",value:"failed",priority:3,group:"violations"}].forEach((function(e){var t=e.name,n=e.value,r=e.priority,a=e.group
Rt[t]=n,Rt[t+"_PRIO"]=r,Rt[t+"_GROUP"]=a,Rt.results[r]=n,Rt.resultGroups[r]=a,Rt.resultGroupMap[n]=a})),Object.freeze(Rt.results),Object.freeze(Rt.resultGroups),Object.freeze(Rt.resultGroupMap),Object.freeze(Rt)
var Bt=Rt,St=function(){"object"===("undefined"==typeof console?"undefined":o(console))&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},Ot=/[\t\r\n\f]/g,_t=function(){function e(){j(this,e),this.parent=void 0}return q(e,[{key:"props",get:function(){throw new Error('VirtualNode class must have a "props" object consisting of "nodeType" and "nodeName" properties')}},{key:"attrNames",get:function(){throw new Error('VirtualNode class must have an "attrNames" property')}},{key:"attr",value:function(){throw new Error('VirtualNode class must have an "attr" function')}},{key:"hasAttr",value:function(){throw new Error('VirtualNode class must have a "hasAttr" function')}},{key:"hasClass",value:function(e){var t=this.attr("class")
if(!t)return!1
var n=" "+e+" "
return(" "+t+" ").replace(Ot," ").indexOf(n)>=0}}]),e}(),It={}
z(It,{DqElement:function(){return Sn},aggregate:function(){return Pt},aggregateChecks:function(){return $t},aggregateNodeResults:function(){return zt},aggregateResult:function(){return Wt},areStylesSet:function(){return Gt},assert:function(){return Yt},checkHelper:function(){return On},clone:function(){return _n},closest:function(){return Qn},collectResultsFromFrames:function(){return Hr},contains:function(){return $r},convertSelector:function(){return Un},cssParser:function(){return Pn},deepMerge:function(){return Vr},escapeSelector:function(){return Kt},extendMetaData:function(){return zr},filterHtmlAttrs:function(){return Fl},finalizeRuleResult:function(){return Vt},findBy:function(){return Mr},getAllChecks:function(){return jr},getAncestry:function(){return Cn},getBaseLang:function(){return ns},getCheckMessage:function(){return cs},getCheckOption:function(){return ds},getEnvironmentData:function(){return ps},getFlattenedTree:function(){return ts},getFrameContexts:function(){return Bs},getFriendlyUriEnd:function(){return rn},getNodeAttributes:function(){return an},getNodeFromTree:function(){return Nn},getPreloadConfig:function(){return hl},getRootNode:function(){return Yr},getRule:function(){return Ss},getScroll:function(){return Os},getScrollState:function(){return Ps},getSelector:function(){return wn},getSelectorData:function(){return Dn},getShadowSelector:function(){return sn},getStandards:function(){return js},getStyleSheetFactory:function(){return qs},getXpath:function(){return An},injectStyle:function(){return Ls},isHidden:function(){return Hs},isHtmlElement:function(){return $s},isNodeInContext:function(){return Vs},isShadowRoot:function(){return Wr},isValidLang:function(){return Ol},isXHTML:function(){return un},matchAncestry:function(){return Us},matches:function(){return Yn},matchesExpression:function(){return Gn},matchesSelector:function(){return on},memoize:function(){return ea},mergeResults:function(){return Lr},nodeSorter:function(){return Ws},parseCrossOriginStylesheet:function(){return el},parseSameOriginStylesheet:function(){return Gs},parseStylesheet:function(){return Zs},performanceTimer:function(){return nl},pollyfillElementsFromPoint:function(){return rl},preload:function(){return ml},preloadCssom:function(){return sl},preloadMedia:function(){return pl},processMessage:function(){return ls},publishMetaData:function(){return gl},querySelectorAll:function(){return vl},querySelectorAllFilter:function(){return ul},queue:function(){return nr},respondable:function(){return Sr},ruleShouldRun:function(){return bl},select:function(){return El},sendCommandToFrame:function(){return _r},setScrollState:function(){return xl},shadowSelect:function(){return Al},shadowSelectAll:function(){return Tl},shouldPreload:function(){return fl},toArray:function(){return Qt},tokenList:function(){return Wu},uniqueArray:function(){return al},uuid:function(){return Dr},validInputTypes:function(){return Rl},validLangs:function(){return Sl}})
var Pt=function(e,t,n){t=t.slice(),n&&t.push(n)
var r=t.map((function(t){return e.indexOf(t)})).sort()
return e[r.pop()]},jt=Bt.CANTTELL_PRIO,Mt=Bt.FAIL_PRIO,qt=[]
qt[Bt.PASS_PRIO]=!0,qt[Bt.CANTTELL_PRIO]=null,qt[Bt.FAIL_PRIO]=!1
var Lt=["any","all","none"]
function Ht(e,t){return Lt.reduce((function(n,r){return n[r]=(e[r]||[]).map((function(e){return t(e,r)})),n}),{})}var $t=function(e){var t=Object.assign({},e)
Ht(t,(function(e,t){var n=void 0===e.result?-1:qt.indexOf(e.result)
e.priority=-1!==n?n:Bt.CANTTELL_PRIO,"none"===t&&(e.priority===Bt.PASS_PRIO?e.priority=Bt.FAIL_PRIO:e.priority===Bt.FAIL_PRIO&&(e.priority=Bt.PASS_PRIO))}))
var n={all:t.all.reduce((function(e,t){return Math.max(e,t.priority)}),0),none:t.none.reduce((function(e,t){return Math.max(e,t.priority)}),0),any:t.any.reduce((function(e,t){return Math.min(e,t.priority)}),4)%4}
t.priority=Math.max(n.all,n.none,n.any)
var r=[]
return Lt.forEach((function(e){t[e]=t[e].filter((function(r){return r.priority===t.priority&&r.priority===n[e]})),t[e].forEach((function(e){return r.push(e.impact)}))})),[jt,Mt].includes(t.priority)?t.impact=Pt(Bt.impact,r):t.impact=null,Ht(t,(function(e){delete e.result,delete e.priority})),t.result=Bt.results[t.priority],delete t.priority,t},Vt=function(e){var t=i._audit.rules.find((function(t){return t.id===e.id}))
return t&&t.impact&&e.nodes.forEach((function(e){["any","all","none"].forEach((function(n){(e[n]||[]).forEach((function(e){e.impact=t.impact}))}))})),Object.assign(e,zt(e.nodes)),delete e.nodes,e},zt=function(e){var t={}
if((e=e.map((function(e){if(e.any&&e.all&&e.none)return $t(e)
if(Array.isArray(e.node))return Vt(e)
throw new TypeError("Invalid Result type")})))&&e.length){var n=e.map((function(e){return e.result}))
t.result=Pt(Bt.results,n,t.result)}else t.result="inapplicable"
Bt.resultGroups.forEach((function(e){return t[e]=[]})),e.forEach((function(e){var n=Bt.resultGroupMap[e.result]
t[n].push(e)}))
var r=Bt.FAIL_GROUP
if(0===t[r].length&&(r=Bt.CANTTELL_GROUP),t[r].length>0){var a=t[r].map((function(e){return e.impact}))
t.impact=Pt(Bt.impact,a)||null}else t.impact=null
return t}
function Ut(e,t,n){var r=Object.assign({},t)
r.nodes=(r[n]||[]).concat(),Bt.resultGroups.forEach((function(e){delete r[e]})),e[n].push(r)}var Wt=function(e){var t={}
return Bt.resultGroups.forEach((function(e){return t[e]=[]})),e.forEach((function(e){e.error?Ut(t,e,Bt.CANTTELL_GROUP):e.result===Bt.NA?Ut(t,e,Bt.NA_GROUP):Bt.resultGroups.forEach((function(n){Array.isArray(e[n])&&e[n].length>0&&Ut(t,e,n)}))})),t},Gt=function e(t,r,a){var o=n.getComputedStyle(t,null)
if(!o)return!1
for(var i=0;i<r.length;++i){var u=r[i]
if(o.getPropertyValue(u.property)===u.value)return!0}return!(!t.parentNode||t.nodeName.toUpperCase()===a.toUpperCase())&&e(t.parentNode,r,a)},Yt=function(e,t){if(!e)throw new Error(t)},Qt=function(e){return Array.prototype.slice.call(e)},Kt=function(e){for(var t,n=String(e),r=n.length,a=-1,o="",i=n.charCodeAt(0);++a<r;)0!=(t=n.charCodeAt(a))?o+=t>=1&&t<=31||127==t||0==a&&t>=48&&t<=57||1==a&&t>=48&&t<=57&&45==i?"\\"+t.toString(16)+" ":0==a&&1==r&&45==t||!(t>=128||45==t||95==t||t>=48&&t<=57||t>=65&&t<=90||t>=97&&t<=122)?"\\"+n.charAt(a):n.charAt(a):o+="�"
return o}
function Xt(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:""
return 0!==e.length&&(e.match(/[0-9]/g)||"").length>=e.length/2}function Jt(e,t){return[e.substring(0,t),e.substring(t)]}function Zt(e){return e.replace(/\s+$/,"")}function en(e){var t=e,n="",r="",a="",o="",i=""
if(e.includes("#")){var u=_(Jt(e,e.indexOf("#")),2)
e=u[0],i=u[1]}if(e.includes("?")){var s=_(Jt(e,e.indexOf("?")),2)
e=s[0],o=s[1]}if(e.includes("://")){var l=_(e.split("://"),2)
n=l[0]
var c=_(Jt(e=l[1],e.indexOf("/")),2)
r=c[0],e=c[1]}else if("//"===e.substr(0,2)){var d=_(Jt(e=e.substr(2),e.indexOf("/")),2)
r=d[0],e=d[1]}if("www."===r.substr(0,4)&&(r=r.substr(4)),r&&r.includes(":")){var p=_(Jt(r,r.indexOf(":")),2)
r=p[0],a=p[1]}return{original:t,protocol:n,domain:r,port:a,path:e,query:o,hash:i}}var tn,nn,rn=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
if(!(e.length<=1||"data:"===e.substr(0,5)||"javascript:"===e.substr(0,11)||e.includes("?"))){var n=t.currentDomain,r=t.maxLength,a=void 0===r?25:r,o=en(e),i=o.path,u=o.domain,s=o.hash,l=i.substr(i.substr(0,i.length-2).lastIndexOf("/")+1)
if(s)return l&&(l+s).length<=a?Zt(l+s):l.length<2&&s.length>2&&s.length<=a?Zt(s):void 0
if(u&&u.length<a&&i.length<=1)return Zt(u+i)
if(i==="/"+l&&u&&n&&u!==n&&(u+i).length<=a)return Zt(u+i)
var c=l.lastIndexOf(".")
return(-1===c||c>1)&&(-1!==c||l.length>2)&&l.length<=a&&!l.match(/index(\.[a-zA-Z]{2-4})?/)&&!Xt(l)?Zt(l):void 0}},an=function(e){return e.attributes instanceof n.NamedNodeMap?e.attributes:e.cloneNode(!1).attributes},on=function(e,t){return tn&&e[tn]||(tn=function(e){var t,n,r=["matches","matchesSelector","mozMatchesSelector","webkitMatchesSelector","msMatchesSelector"],a=r.length
for(t=0;t<a;t++)if(e[n=r[t]])return n}(e)),!!e[tn]&&e[tn](t)},un=function(e){return!!e.createElement&&"A"===e.createElement("A").localName},sn=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
if(!t)return""
var r=t.getRootNode&&t.getRootNode()||a
if(11!==r.nodeType)return e(t,n,r)
for(var o=[];11===r.nodeType;){if(!r.host)return""
o.unshift({elm:t,doc:r}),r=(t=r.host).getRootNode()}return o.unshift({elm:t,doc:r}),o.map((function(t){var r=t.elm,a=t.doc
return e(r,n,a)}))},ln=["class","style","id","selected","checked","disabled","tabindex","aria-checked","aria-selected","aria-invalid","aria-activedescendant","aria-busy","aria-disabled","aria-expanded","aria-grabbed","aria-pressed","aria-valuenow"],cn=/([\\"])/g,dn=/(\r\n|\r|\n)/g
function pn(e){return e.replace(cn,"\\$1").replace(dn,"\\a ")}function fn(e,t){var n,r=t.name
if(-1!==r.indexOf("href")||-1!==r.indexOf("src")){var a=rn(e.getAttribute(r))
n=a?Kt(t.name)+'$="'+pn(a)+'"':Kt(t.name)+'="'+pn(e.getAttribute(r))+'"'}else n=Kt(r)+'="'+pn(t.value)+'"'
return n}function hn(e,t){return e.count<t.count?-1:e.count===t.count?0:1}function mn(e){return!ln.includes(e.name)&&-1===e.name.indexOf(":")&&(!e.value||e.value.length<31)}function Dn(e){for(var t={classes:{},tags:{},attributes:{}},n=(e=Array.isArray(e)?e:[e]).slice(),r=[],a=function(){var e=n.pop(),a=e.actualNode
if(a.querySelectorAll){var o=a.nodeName
t.tags[o]?t.tags[o]++:t.tags[o]=1,a.classList&&Array.from(a.classList).forEach((function(e){var n=Kt(e)
t.classes[n]?t.classes[n]++:t.classes[n]=1})),a.hasAttributes()&&Array.from(an(a)).filter(mn).forEach((function(e){var n=fn(a,e)
n&&(t.attributes[n]?t.attributes[n]++:t.attributes[n]=1)}))}for(e.children.length&&(r.push(n),n=e.children.slice());!n.length&&r.length;)n=r.pop()};n.length;)a()
return t}function gn(e,t){var n=e.parentNode&&Array.from(e.parentNode.children||"")||[]
return n.find((function(n){return n!==e&&on(n,t)}))?":nth-child("+(1+n.indexOf(e))+")":""}function vn(e){if(e.getAttribute("id")){var t=e.getRootNode&&e.getRootNode()||a,n="#"+Kt(e.getAttribute("id")||"")
return n.match(/player_uid_/)||1!==t.querySelectorAll(n).length?void 0:n}}function yn(e){return void 0===nn&&(nn=un(a)),Kt(nn?e.localName:e.nodeName.toLowerCase())}function bn(e,t){var n,r="",a=function(e,t){var n=[],r=t.classes,a=t.tags
return e.classList&&Array.from(e.classList).forEach((function(t){var o=Kt(t)
r[o]<a[e.nodeName]&&n.push({name:o,count:r[o],species:"class"})})),n.sort(hn)}(e,t),o=function(e,t){var n=[],r=t.attributes,a=t.tags
return e.hasAttributes()&&Array.from(an(e)).filter(mn).forEach((function(t){var o=fn(e,t)
o&&r[o]<a[e.nodeName]&&n.push({name:o,count:r[o],species:"attribute"})})),n.sort(hn)}(e,t)
return a.length&&1===a[0].count?n=[a[0]]:o.length&&1===o[0].count?(n=[o[0]],r=yn(e)):((n=a.concat(o)).sort(hn),(n=n.slice(0,3)).some((function(e){return"class"===e.species}))?n.sort((function(e,t){return e.species!==t.species&&"class"===e.species?-1:e.species===t.species?0:1})):r=yn(e)),r+n.reduce((function(e,t){switch(t.species){case"class":return e+"."+t.name
case"attribute":return e+"["+t.name+"]"}return e}),"")}function Fn(e,t,n){if(!i._selectorData)throw new Error("Expect axe._selectorData to be set up")
var r,a,o=t.toRoot,u=void 0!==o&&o
do{var s=vn(e)
s||(s=bn(e,i._selectorData),s+=gn(e,s)),r=r?s+" > "+r:s,a=a?a.filter((function(e){return on(e,r)})):Array.from(n.querySelectorAll(r)),e=e.parentElement}while((a.length>1||u)&&e&&11!==e.nodeType)
return 1===a.length?r:-1!==r.indexOf(" > ")?":root"+r.substring(r.indexOf(" > ")):":root"}function wn(e,t){return sn(Fn,e,t)}function En(e){var t=e.nodeName.toLowerCase(),n=e.parentElement
if(!n)return t
var r=""
if("head"!==t&&"body"!==t&&n.children.length>1){var a=Array.prototype.indexOf.call(n.children,e)+1
r=":nth-child(".concat(a,")")}return En(n)+" > "+t+r}function Cn(e,t){return sn(En,e,t)}function xn(e,t){var n,r
if(!e)return[]
if(!t&&9===e.nodeType)return[{str:"html"}]
if(t=t||[],e.parentNode&&e.parentNode!==e&&(t=xn(e.parentNode,t)),e.previousSibling){r=1,n=e.previousSibling
do{1===n.nodeType&&n.nodeName===e.nodeName&&r++,n=n.previousSibling}while(n)
1===r&&(r=null)}else if(e.nextSibling){n=e.nextSibling
do{1===n.nodeType&&n.nodeName===e.nodeName?(r=1,n=null):(r=null,n=n.previousSibling)}while(n)}if(1===e.nodeType){var a={}
a.str=e.nodeName.toLowerCase()
var o=e.getAttribute&&Kt(e.getAttribute("id"))
o&&1===e.ownerDocument.querySelectorAll("#"+o).length&&(a.id=e.getAttribute("id")),r>1&&(a.count=r),t.push(a)}return t}var An=function(e){return xn(e).reduce((function(e,t){return t.id?"/".concat(t.str,"[@id='").concat(t.id,"']"):e+"/".concat(t.str)+(t.count>0?"[".concat(t.count,"]"):"")}),"")},kn={},Tn={set:function(e,t){!function(e){Yt("string"==typeof e,"key must be a string, "+o(e)+" given"),Yt(""!==e,"key must not be empty")}(e),kn[e]=t},get:function(e,t){if(function(e){Yt("function"==typeof e||void 0===e,"creator must be a function or undefined, "+o(e)+" given")}(t),e in kn)return kn[e]
if("function"==typeof t){var n=t()
return Yt(void 0!==n,"Cache creator function should not return undefined"),this.set(e,n),kn[e]}},clear:function(){kn={}}},Nn=function(e,t){var n=t||e
return Tn.get("nodeMap")?Tn.get("nodeMap").get(n):null}
function Rn(e){if(null==e||!e.outerHTML)return""
var t=e.outerHTML
return t||"function"!=typeof n.XMLSerializer||(t=(new n.XMLSerializer).serializeToString(e)),function(e,t){if(t=t||300,e.length>t){var n=e.indexOf(">")
e=e.substring(0,n+1)}return e}(t||"")}function Bn(e){var t,n,r,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
this.spec=o,e instanceof _t?(this._virtualNode=e,this._element=e.actualNode):(this._element=e,this._virtualNode=Nn(e)),this.fromFrame=(null===(t=this.spec.selector)||void 0===t?void 0:t.length)>1,a.absolutePaths&&(this._options={toRoot:!0}),this.nodeIndexes=[],Array.isArray(this.spec.nodeIndexes)?this.nodeIndexes=this.spec.nodeIndexes:"number"==typeof(null===(n=this._virtualNode)||void 0===n?void 0:n.nodeIndex)&&(this.nodeIndexes=[this._virtualNode.nodeIndex]),this.source=null,i._audit.noHtml||(this.source=null!==(r=this.spec.source)&&void 0!==r?r:Rn(this._element))}Bn.prototype={get selector(){return this.spec.selector||[wn(this.element,this._options)]},get ancestry(){return this.spec.ancestry||[Cn(this.element)]},get xpath(){return this.spec.xpath||[An(this.element)]},get element(){return this._element},toJSON:function(){return{selector:this.selector,source:this.source,xpath:this.xpath,ancestry:this.ancestry,nodeIndexes:this.nodeIndexes}}},Bn.fromFrame=function(e,t,n){var r=Bn.mergeSpecs(e,n)
return new Bn(n.element,t,r)},Bn.mergeSpecs=function(e,t){return O({},e,{selector:[].concat(B(t.selector),B(e.selector)),ancestry:[].concat(B(t.ancestry),B(e.ancestry)),xpath:[].concat(B(t.xpath),B(e.xpath)),nodeIndexes:[].concat(B(t.nodeIndexes),B(e.nodeIndexes))})}
var Sn=Bn,On=function(e,t,r,a){return{isAsync:!1,async:function(){return this.isAsync=!0,function(t){t instanceof Error==0?(e.result=t,r(e)):a(t)}},data:function(t){e.data=t},relatedNodes:function(r){n.Node&&(r=r instanceof n.Node?[r]:Qt(r)).every((function(e){return e instanceof n.Node||e.actualNode}))&&(e.relatedNodes=r.map((function(e){return new Sn(e,t)})))}}},_n=function e(t){var r,a,i,u,s=t
if(null!==(r=n)&&void 0!==r&&r.Node&&t instanceof n.Node||null!==(a=n)&&void 0!==a&&a.HTMLCollection&&t instanceof n.HTMLCollection)return t
if(null!==t&&"object"===o(t))if(Array.isArray(t))for(s=[],i=0,u=t.length;i<u;i++)s[i]=e(t[i])
else for(i in s={},t)s[i]=e(t[i])
return s},In=new(U(Q()).CssSelectorParser)
In.registerSelectorPseudos("not"),In.registerSelectorPseudos("is"),In.registerNestingOperators(">"),In.registerAttrEqualityMods("^","$","*","~")
var Pn=In
function jn(e,t){return function(e,t){return 1===e.props.nodeType&&("*"===t.tag||e.props.nodeName===t.tag)}(e,t)&&function(e,t){return!t.classes||t.classes.every((function(t){return e.hasClass(t.value)}))}(e,t)&&function(e,t){return!t.attributes||t.attributes.every((function(t){var n=e.attr(t.key)
return null!==n&&t.test(n)}))}(e,t)&&function(e,t){return!t.id||e.props.id===t.id}(e,t)&&(n=e,!((r=t).pseudos&&!r.pseudos.every((function(e){if("not"===e.name)return!e.expressions.some((function(e){return Gn(n,e)}))
if("is"===e.name)return e.expressions.some((function(e){return Gn(n,e)}))
throw new Error("the pseudo selector "+e.name+" has not yet been implemented")}))))
var n,r}var Mn,qn=(Mn=/(?=[\-\[\]{}()*+?.\\\^$|,#\s])/g,function(e){return e.replace(Mn,"\\")}),Ln=/\\/g
function Hn(e){if(e)return e.map((function(e){var t,n,r=e.name.replace(Ln,""),a=(e.value||"").replace(Ln,"")
switch(e.operator){case"^=":n=new RegExp("^"+qn(a))
break
case"$=":n=new RegExp(qn(a)+"$")
break
case"~=":n=new RegExp("(^|\\s)"+qn(a)+"(\\s|$)")
break
case"|=":n=new RegExp("^"+qn(a)+"(-|$)")
break
case"=":t=function(e){return a===e}
break
case"*=":t=function(e){return e&&e.includes(a)}
break
case"!=":t=function(e){return a!==e}
break
default:t=function(e){return null!==e}}return""===a&&/^[*$^]=$/.test(e.operator)&&(t=function(){return!1}),t||(t=function(e){return e&&n.test(e)}),{key:r,value:a,type:void 0===e.value?"attrExist":"attrValue",test:t}}))}function $n(e){if(e)return e.map((function(e){return{value:e=e.replace(Ln,""),regexp:new RegExp("(^|\\s)"+qn(e)+"(\\s|$)")}}))}function Vn(e){if(e)return e.map((function(e){var t
return["is","not"].includes(e.name)&&(t=zn(t=(t=e.value).selectors?t.selectors:[t])),{name:e.name,expressions:t,value:e.value}}))}function zn(e){return e.map((function(e){for(var t=[],n=e.rule;n;)t.push({tag:n.tagName?n.tagName.toLowerCase():"*",combinator:n.nestingOperator?n.nestingOperator:" ",id:n.id,attributes:Hn(n.attrs),classes:$n(n.classNames),pseudos:Vn(n.pseudos)}),n=n.rule
return t}))}function Un(e){var t=Pn.parse(e)
return zn(t=t.selectors?t.selectors:[t])}function Wn(e,t,n,r){if(!e)return!1
for(var a=Array.isArray(t)?t[n]:t,o=jn(e,a);!o&&r&&e.parent;)o=jn(e=e.parent,a)
if(n>0){if(!1===[" ",">"].includes(a.combinator))throw new Error("axe.utils.matchesExpression does not support the combinator: "+a.combinator)
o=o&&Wn(e.parent,t,n-1," "===a.combinator)}return o}function Gn(e,t,n){return Wn(e,t,t.length-1,n)}var Yn=function(e,t){return Un(t).some((function(t){return Gn(e,t)}))},Qn=function(e,t){for(;e;){if(Yn(e,t))return e
if(void 0===e.parent)throw new TypeError("Cannot resolve parent for non-DOM nodes")
e=e.parent}return null}
function Kn(){}function Xn(e){if("function"!=typeof e)throw new TypeError("Queue methods require functions as arguments")}var Jn,Zn,er,tr,nr=function(){var e,t=[],n=0,r=0,a=Kn,i=!1,u=function(t){e=t,setTimeout((function(){null!=e&&St("Uncaught error (of queue)",e)}),1)},s=u
function l(e){return function(n){t[e]=n,(r-=1)||a===Kn||(i=!0,a(t))}}function c(e){return a=Kn,s(e),t}var d={defer:function(a){if("object"===o(a)&&a.then&&a.catch){var u=a
a=function(e,t){u.then(e).catch(t)}}if(Xn(a),void 0===e){if(i)throw new Error("Queue already completed")
return t.push(a),++r,function(){for(var e=t.length;n<e;n++){var r=t[n]
try{r.call(null,l(n),c)}catch(e){c(e)}}}(),d}},then:function(n){if(Xn(n),a!==Kn)throw new Error("queue `then` already set")
return e||(a=n,r||(i=!0,a(t))),d},catch:function(t){if(Xn(t),s!==u)throw new Error("queue `catch` already set")
return e?(t(e),e=null):s=t,d},abort:c}
return d},rr=n.crypto||n.msCrypto
!Zn&&rr&&rr.getRandomValues&&(er=new Uint8Array(16),Zn=function(){return rr.getRandomValues(er),er}),Zn||(tr=new Array(16),Zn=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),tr[t]=e>>>((3&t)<<3)&255
return tr})
for(var ar="function"==typeof n.Buffer?n.Buffer:Array,or=[],ir={},ur=0;ur<256;ur++)or[ur]=(ur+256).toString(16).substr(1),ir[or[ur]]=ur
function sr(e,t){var n=t||0,r=or
return r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]}var lr=Zn(),cr=[1|lr[0],lr[1],lr[2],lr[3],lr[4],lr[5]],dr=16383&(lr[6]<<8|lr[7]),pr=0,fr=0
function hr(e,t,n){var r=t&&n||0,a=t||[],o=null!=(e=e||{}).clockseq?e.clockseq:dr,i=null!=e.msecs?e.msecs:(new Date).getTime(),u=null!=e.nsecs?e.nsecs:fr+1,s=i-pr+(u-fr)/1e4
if(s<0&&null==e.clockseq&&(o=o+1&16383),(s<0||i>pr)&&null==e.nsecs&&(u=0),u>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec")
pr=i,fr=u,dr=o
var l=(1e4*(268435455&(i+=122192928e5))+u)%4294967296
a[r++]=l>>>24&255,a[r++]=l>>>16&255,a[r++]=l>>>8&255,a[r++]=255&l
var c=i/4294967296*1e4&268435455
a[r++]=c>>>8&255,a[r++]=255&c,a[r++]=c>>>24&15|16,a[r++]=c>>>16&255,a[r++]=o>>>8|128,a[r++]=255&o
for(var d=e.node||cr,p=0;p<6;p++)a[r+p]=d[p]
return t||sr(a)}function mr(e,t,n){var r=t&&n||0
"string"==typeof e&&(t="binary"==e?new ar(16):null,e=null)
var a=(e=e||{}).random||(e.rng||Zn)()
if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,t)for(var o=0;o<16;o++)t[r+o]=a[o]
return t||sr(a)}(Jn=mr).v1=hr,Jn.v4=mr,Jn.parse=function(e,t,n){var r=t&&n||0,a=0
for(t=t||[],e.toLowerCase().replace(/[0-9a-f]{2}/g,(function(e){a<16&&(t[r+a++]=ir[e])}));a<16;)t[r+a++]=0
return t},Jn.unparse=sr,Jn.BufferClass=ar,i._uuid=hr()
var Dr=mr,gr=Object.freeze(["EvalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"])
function vr(){var e="axeAPI",t=""
return void 0!==i&&i._audit&&i._audit.application&&(e=i._audit.application),void 0!==i&&(t=i.version),e+"."+t}function yr(e){Fr(e),Yt(n.parent===e,"Source of the response must be the parent window.")}function br(e){Fr(e),Yt(e.parent===n,"Respondable target must be a frame in the current window")}function Fr(e){Yt(n!==e,"Messages can not be sent to the same window.")}var wr={},Er=[]
function Cr(){var e="".concat(mr(),":").concat(mr())
return Er.includes(e)?Cr():(Er.push(e),e)}function xr(e,t,n,r){if("function"==typeof r&&function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2]
Yt(!wr[e],"A replyHandler already exists for this message channel."),wr[e]={replyHandler:t,sendToParent:n}}(t.channelId,r,n),n?yr(e):br(e),t.message instanceof Error&&!n)return i.log(t.message),!1
var a=function(e){var t=e.topic,n=e.channelId,r=e.message,a={channelId:n,topic:t,messageId:e.messageId,keepalive:!!e.keepalive,source:vr()}
return r instanceof Error?a.error={name:r.name,message:r.message,stack:r.stack}:a.payload=r,JSON.stringify(a)}(O({messageId:Cr()},t)),o=i._audit.allowedOrigins
return!(!o||!o.length||(o.forEach((function(t){try{e.postMessage(a,t)}catch(n){if(n instanceof e.DOMException)throw new Error('allowedOrigins value "'.concat(t,'" is not a valid origin'))
throw n}})),0))}function Ar(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2]
return function(r,a,o){xr(e,{channelId:t,message:r,keepalive:a},n,o)}}var kr,Tr,Nr={open:function(e){if("function"==typeof n.addEventListener){var t=function(t){(function(e,t){var r,a=e.origin,u=e.data,s=e.source
try{var l=function(e){var t,r,a,i,u
try{t=JSON.parse(e)}catch(e){return}if(null!==(s=t)&&"object"===o(s)&&"string"==typeof s.channelId&&s.source===vr()){var s,l=t,c=l.topic,d=l.channelId,p=l.messageId,f=l.keepalive
return{topic:c,message:"object"===o(t.error)?(r=t.error,a=r.message||"Unknown error occurred",i=gr.includes(r.name)?r.name:"Error",u=n[i]||Error,r.stack&&(a+="\n"+r.stack.replace(r.message,"")),new u(a)):t.payload,messageId:p,channelId:d,keepalive:!!f}}}(u)||{},c=l.channelId,d=l.message,p=l.messageId
if(!function(e){var t=i._audit.allowedOrigins
return t&&t.includes("*")||t.includes(e)}(a)||(r=p,Er.includes(r)||(Er.push(r),0)))return
if(d instanceof Error&&s.parent!==n)return i.log(d),!1
try{if(l.topic){var f=Ar(s,c)
yr(s),t(l,f)}else!function(e,t){var n=t.channelId,r=t.message,a=t.keepalive,o=function(e){return wr[e]}(n)||{},u=o.replyHandler,s=o.sendToParent
if(u){s?yr(e):br(e)
var l=Ar(e,n,s)
!a&&n&&function(e){delete wr[e]}(n)
try{u(r,a,l)}catch(e){i.log(e),l(e,a)}}}(s,l)}catch(e){!function(e,t,r){if(!e.parent!==n)return i.log(t)
try{xr(e,{topic:null,channelId:r,message:t,messageId:Cr(),keepalive:!0},!0)}catch(e){return i.log(e)}}(s,e,c)}}catch(e){return i.log(e),!1}})(t,e)}
return n.addEventListener("message",t,!1),function(){n.removeEventListener("message",t,!1)}}},post:function(e,t,r){return"function"==typeof n.addEventListener&&xr(e,t,!1,r)}}
function Rr(e){e.updateMessenger(Nr)}var Br={}
function Sr(e,t,n,r,a){var o={topic:t,message:n,channelId:"".concat(mr(),":").concat(mr()),keepalive:r}
return Tr(e,o,a)}function Or(e,t){var n=e.topic,r=e.message,a=e.keepalive,o=Br[n]
if(o)try{o(r,a,t)}catch(e){i.log(e),t(e,a)}}function _r(e,t,n,r){var a,o,i=e.contentWindow,u=null!==(a=null===(o=t.options)||void 0===o?void 0:o.pingWaitTime)&&void 0!==a?a:500
if(!i)return St("Frame does not have a content window",e),void n(null)
if(0!==u){var s=setTimeout((function(){s=setTimeout((function(){t.debug?r(Pr("No response from frame",e)):n(null)}),0)}),u)
Sr(i,"axe.ping",null,void 0,(function(){clearTimeout(s),Ir(e,t,n,r)}))}else Ir(e,t,n,r)}function Ir(e,t,n,r){var a,o,i=null!==(a=null===(o=t.options)||void 0===o?void 0:o.frameWaitTime)&&void 0!==a?a:6e4,u=e.contentWindow,s=setTimeout((function(){r(Pr("Axe in frame timed out",e))}),i)
Sr(u,"axe.start",t,void 0,(function(e){clearTimeout(s),e instanceof Error==0?n(e):r(e)}))}function Pr(e,t){var n
return i._tree&&(n=wn(t)),new Error(e+": "+(n||t))}Sr.updateMessenger=function(e){var t=e.open,n=e.post
Yt("function"==typeof t,"open callback must be a function"),Yt("function"==typeof n,"post callback must be a function"),kr&&kr()
var r=t(Or)
r?(Yt("function"==typeof r,"open callback must return a cleanup function"),kr=r):kr=null,Tr=n},Sr.subscribe=function(e,t){Yt("function"==typeof t,"Subscriber callback must be a function"),Yt(!Br[e],"Topic ".concat(e," is already registered to.")),Br[e]=t},Sr.isInFrame=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n
return!!e.frameElement},Rr(Sr)
var jr=function(e){return[].concat(e.any||[]).concat(e.all||[]).concat(e.none||[])},Mr=function(e,t,n){if(Array.isArray(e))return e.find((function(e){return"object"===o(e)&&e[t]===n}))}
function qr(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=Math.max(null==e?void 0:e.length,null==t?void 0:t.length),r=0;r<n;r++){var a=null==e?void 0:e[r],o=null==t?void 0:t[r]
if("number"!=typeof a||isNaN(a))return 0===r?1:-1
if("number"!=typeof o||isNaN(o))return 0===r?-1:1
if(a!==o)return a-o}return 0}var Lr=function(e,t){var n=[]
return e.forEach((function(e){var r,a=(r=e)&&r.results?Array.isArray(r.results)?r.results.length?r.results:null:[r.results]:null
if(a&&a.length){var o=function(e,t){return e.frameElement?new Sn(e.frameElement,t):e.frameSpec?e.frameSpec:null}(e,t)
a.forEach((function(e){e.nodes&&o&&function(e,t,n){e.forEach((function(e){e.node=Sn.fromFrame(e.node,t,n),jr(e).forEach((function(e){e.relatedNodes=e.relatedNodes.map((function(e){return Sn.fromFrame(e,t,n)}))}))}))}(e.nodes,t,o)
var r=Mr(n,"id",e.id)
r?e.nodes.length&&function(e,t){for(var n=t[0].node,r=0;r<e.length;r++){var a=e[r].node,o=qr(a.nodeIndexes,n.nodeIndexes)
if(o>0||0===o&&n.selector.length<a.selector.length)return void e.splice.apply(e,[r,0].concat(B(t)))}e.push.apply(e,B(t))}(r.nodes,e.nodes):n.push(e)}))}})),n.forEach((function(e){e.nodes&&e.nodes.sort((function(e,t){return qr(e.node.nodeIndexes,t.node.nodeIndexes)}))})),n}
function Hr(e,t,n,r,a,o){var i=nr()
e.frames.forEach((function(e){var a=e.node,o=R(e,s)
i.defer((function(e,i){_r(a,{options:t,command:n,parameter:r,context:o},(function(t){return e(t?{results:t,frameElement:a}:null)}),i)}))})),i.then((function(e){a(Lr(e,t))})).catch(o)}function $r(e,t){if(!e.shadowId&&!t.shadowId&&e.actualNode&&"function"==typeof e.actualNode.contains)return e.actualNode.contains(t.actualNode)
do{if(e===t)return!0
if(t.nodeIndex<e.nodeIndex)return!1
t=t.parent}while(t)
return!1}var Vr=function e(){for(var t={},n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a]
return r.forEach((function(n){if(n&&"object"===o(n)&&!Array.isArray(n))for(var r=0,a=Object.keys(n);r<a.length;r++){var i=a[r]
!t.hasOwnProperty(i)||"object"!==o(n[i])||Array.isArray(t[i])?t[i]=n[i]:t[i]=e(t[i],n[i])}})),t},zr=function(e,t){Object.assign(e,t),Object.keys(t).filter((function(e){return"function"==typeof t[e]})).forEach((function(n){e[n]=null
try{e[n]=t[n](e)}catch(e){}}))},Ur=["article","aside","blockquote","body","div","footer","h1","h2","h3","h4","h5","h6","header","main","nav","p","section","span"],Wr=function(e){if(e.shadowRoot){var t=e.nodeName.toLowerCase()
if(Ur.includes(t)||/^[a-z][a-z0-9_.-]*-[a-z0-9_.-]*$/.test(t))return!0}return!1},Gr={}
z(Gr,{createGrid:function(){return Sa},findElmsInContext:function(){return Kr},findNearbyElms:function(){return Ma},findUp:function(){return Jr},findUpVirtual:function(){return Xr},focusDisabled:function(){return Ha},getComposedParent:function(){return Fa},getElementByReference:function(){return Ua},getElementCoordinates:function(){return Ea},getElementStack:function(){return ao},getOverflowHiddenAncestors:function(){return ra},getRootNode:function(){return Qr},getScrollOffset:function(){return wa},getTabbableElements:function(){return oo},getTextElementStack:function(){return Ji},getViewportSize:function(){return Ca},getVisibleChildTextRects:function(){return Xi},hasContent:function(){return au},hasContentVirtual:function(){return ru},hasLangText:function(){return ou},idrefs:function(){return uo},insertedIntoFocusOrder:function(){return iu},isCurrentPageLink:function(){return za},isFocusable:function(){return No},isHTML5:function(){return cu},isHiddenForEveryone:function(){return va},isHiddenWithCSS:function(){return lu},isInTabOrder:function(){return du},isInTextBlock:function(){return Du},isModalOpen:function(){return gu},isMultiline:function(){return vu},isNativelyFocusable:function(){return To},isNode:function(){return yu},isOffscreen:function(){return Aa},isOpaque:function(){return ku},isSkipLink:function(){return Tu},isVisible:function(){return Su},isVisibleOnScreen:function(){return Ta},isVisibleToScreenReaders:function(){return gi},isVisualContent:function(){return eu},reduceToElementsBelowFloating:function(){return Ou},shadowElementsFromPoint:function(){return ju},urlPropsFromAttribute:function(){return $u},visuallyContains:function(){return _u},visuallyOverlaps:function(){return Vu},visuallySort:function(){return Wa}})
var Yr=function(e){var t=e.getRootNode&&e.getRootNode()||a
return t===e&&(t=a),t},Qr=Yr,Kr=function(e){var t,n=e.context,r=e.value,a=e.attr,o=e.elm,i=void 0===o?"":o,u=Kt(r)
return t=9===n.nodeType||11===n.nodeType?n:Qr(n),Array.from(t.querySelectorAll(i+"["+a+"="+u+"]"))},Xr=function(e,t){var n
if(n=e.actualNode,!e.shadowId&&"function"==typeof e.actualNode.closest)return e.actualNode.closest(t)||null
do{(n=n.assignedSlot?n.assignedSlot:n.parentNode)&&11===n.nodeType&&(n=n.host)}while(n&&!on(n,t)&&n!==a.documentElement)
return n&&on(n,t)?n:null},Jr=function(e,t){return Xr(Nn(e),t)},Zr=U(xt())
i._memoizedFns=[]
var ea=function(e){var t=(0,Zr.default)(e)
return i._memoizedFns.push(t),t}
function ta(e,t){return(0|e.left)<(0|t.right)&&(0|e.right)>(0|t.left)&&(0|e.top)<(0|t.bottom)&&(0|e.bottom)>(0|t.top)}var na=ea((function(e){var t=[]
return e?("hidden"===e.getComputedStylePropertyValue("overflow")&&t.push(e),t.concat(na(e.parent))):t})),ra=na,aa=/rect\s*\(([0-9]+)px,?\s*([0-9]+)px,?\s*([0-9]+)px,?\s*([0-9]+)px\s*\)/,oa=/(\w+)\((\d+)/
function ia(e){return["style","script","noscript","template"].includes(e.props.nodeName)}function ua(e){return"area"!==e.props.nodeName&&"none"===e.getComputedStylePropertyValue("display")}function sa(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.isAncestor
return!n&&["hidden","collapse"].includes(e.getComputedStylePropertyValue("visibility"))}function la(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.isAncestor
return!!n&&"hidden"===e.getComputedStylePropertyValue("content-visibility")}function ca(e){return"true"===e.attr("aria-hidden")}function da(e){return"0"===e.getComputedStylePropertyValue("opacity")}function pa(e){var t=Os(e.actualNode),n=parseInt(e.getComputedStylePropertyValue("height")),r=parseInt(e.getComputedStylePropertyValue("width"))
return!!t&&(0===n||0===r)}function fa(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.isAncestor
if(n)return!1
var r=e.boundingClientRect,a=ra(e)
return!!a.length&&a.some((function(e){var t=e.boundingClientRect
return t.width<2||t.height<2||!ta(r,t)}))}function ha(e){var t=e.getComputedStylePropertyValue("clip").match(aa),n=e.getComputedStylePropertyValue("clip-path").match(oa)
if(t&&5===t.length){var r=e.getComputedStylePropertyValue("position")
if(["fixed","absolute"].includes(r))return t[3]-t[1]<=0&&t[2]-t[4]<=0}if(n){var a=n[1],o=parseInt(n[2],10)
switch(a){case"inset":return o>=50
case"circle":return 0===o}}return!1}function ma(e,t){var n=Qn(e,"map")
if(!n)return!0
var r=n.attr("name")
if(!r)return!0
var a=Yr(e.actualNode)
if(!a||9!==a.nodeType)return!0
var o=vl(i._tree,'img[usemap="#'.concat(Kt(r),'"]'))
return!o||!o.length||o.some((function(e){return!t(e)}))}function Da(e){var t
return"details"===(null===(t=e.parent)||void 0===t?void 0:t.props.nodeName)&&("summary"!==e.props.nodeName||e.parent.children.find((function(e){return"summary"===e.props.nodeName}))!==e)&&!e.parent.hasAttr("open")}var ga=[ua,sa,la,Da]
function va(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.skipAncestors,r=t.isAncestor,a=void 0!==r&&r
return e=e instanceof _t?e:Nn(e),n?ya(e,a):ba(e,a)}var ya=ea((function(e,t){return!(!ia(e)&&(!e.actualNode||!ga.some((function(n){return n(e,{isAncestor:t})}))&&e.actualNode.isConnected))})),ba=ea((function(e,t){return!!ya(e,t)||!!e.parent&&ba(e.parent,!0)})),Fa=function e(t){if(t.assignedSlot)return e(t.assignedSlot)
if(t.parentNode){var n=t.parentNode
if(1===n.nodeType)return n
if(n.host)return n.host}return null},wa=function(e){if(!e.nodeType&&e.document&&(e=e.document),9===e.nodeType){var t=e.documentElement,n=e.body
return{left:t&&t.scrollLeft||n&&n.scrollLeft||0,top:t&&t.scrollTop||n&&n.scrollTop||0}}return{left:e.scrollLeft,top:e.scrollTop}},Ea=function(e){var t=wa(a),n=t.left,r=t.top,o=e.getBoundingClientRect()
return{top:o.top+r,right:o.right+n,bottom:o.bottom+r,left:o.left+n,width:o.right-o.left,height:o.bottom-o.top}},Ca=function(e){var t=e.document,n=t.documentElement
if(e.innerWidth)return{width:e.innerWidth,height:e.innerHeight}
if(n)return{width:n.clientWidth,height:n.clientHeight}
var r=t.body
return{width:r.clientWidth,height:r.clientHeight}}
function xa(e,t){for(e=Fa(e);e&&"html"!==e.nodeName.toLowerCase();){if(e.scrollTop&&(t+=e.scrollTop)>=0)return!1
e=Fa(e)}return!0}var Aa=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.isAncestor
if(r)return!1
if(e=e instanceof _t?e.actualNode:e){var o,i=a.documentElement,u=n.getComputedStyle(e),s=n.getComputedStyle(a.body||i).getPropertyValue("direction"),l=Ea(e)
if(l.bottom<0&&(xa(e,l.bottom)||"absolute"===u.position))return!0
if(0===l.left&&0===l.right)return!1
if("ltr"===s){if(l.right<=0)return!0}else if(o=Math.max(i.scrollWidth,Ca(n).width),l.left>=o)return!0
return!1}},ka=[da,pa,fa,ha,Aa]
function Ta(e){return e=e instanceof _t?e:Nn(e),Na(e)}var Na=ea((function(e,t){return e.actualNode&&"area"===e.props.nodeName?!ma(e,Na):!va(e,{skipAncestors:!0,isAncestor:t})&&(!e.actualNode||!ka.some((function(n){return n(e,{isAncestor:t})})))&&(!e.parent||Na(e.parent,!0))}))
function Ra(e,t){var r=Math.min(e.top,t.top),a=Math.max(e.right,t.right),o=Math.max(e.bottom,t.bottom),i=Math.min(e.left,t.left)
return new n.DOMRect(i,r,a-i,o-r)}function Ba(e,t){var n=e.x,r=e.y,a=t.top,o=t.right,i=t.bottom,u=t.left
return r>=a&&n<=o&&r<=i&&n>=u}function Sa(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.body,t=arguments.length>1?arguments[1]:void 0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null
if(Tn.get("gridCreated")&&!r)return Bt.gridSize
if(Tn.set("gridCreated",!0),!r){var o,u=Nn(a.documentElement)
if(u||(u=new Uu(a.documentElement)),u._stackingOrder=[0],null!==(o=t)&&void 0!==o||(t=new Pa),Ia(t,u),Os(u.actualNode)){var s=new Pa(u)
u._subGrid=s}}for(var l=a.createTreeWalker(e,n.NodeFilter.SHOW_ELEMENT,null,!1),c=r?l.nextNode():l.currentNode;c;){var d=Nn(c)
d&&d.parent?r=d.parent:c.assignedSlot?r=Nn(c.assignedSlot):c.parentElement?r=Nn(c.parentElement):c.parentNode&&Nn(c.parentNode)&&(r=Nn(c.parentNode)),d||(d=new i.VirtualNode(c,r)),d._stackingOrder=Oa(d,r)
var p=_a(d,r),f=p?p._subGrid:t
if(Os(d.actualNode)){var h=new Pa(d)
d._subGrid=h}var m=d.boundingClientRect
0!==m.width&&0!==m.height&&Ta(c)&&Ia(f,d),Wr(c)&&Sa(c.shadowRoot,f,d),c=l.nextNode()}return Bt.gridSize}function Oa(e,t){var n=t._stackingOrder.slice(),r=e.getComputedStylePropertyValue("z-index"),a="static"!==e.getComputedStylePropertyValue("position"),o="none"!==e.getComputedStylePropertyValue("float")
if(a&&!["auto","0"].includes(r)){for(;n.find((function(e){return e%1!=0}));){var i=n.findIndex((function(e){return e%1!=0}))
n.splice(i,1)}n[n.length-1]=parseInt(r)}return function(e,t){var n=e.getComputedStylePropertyValue("position"),r=e.getComputedStylePropertyValue("z-index")
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
if(["layout","paint","strict","content"].includes(l))return!0
if("auto"!==r&&t){var c=t.getComputedStylePropertyValue("display")
if(["flex","inline-flex","inline flex","grid","inline-grid","inline grid"].includes(c))return!0}return!1}(e,t)?n.push(0):a?n.push(.5):o&&n.push(.25),n}function _a(e,t){for(var n=null,r=[e];t;){if(Os(t.actualNode)){n=t
break}if(t._scrollRegionParent){n=t._scrollRegionParent
break}r.push(t),t=Nn(t.actualNode.parentElement||t.actualNode.parentNode)}return r.forEach((function(e){return e._scrollRegionParent=n})),n}function Ia(e,t){t.clientRects.forEach((function(n){var r
null!==(r=t._grid)&&void 0!==r||(t._grid=e)
var a=e.getGridPositionOfRect(n)
e.loopGridPosition(a,(function(e){e.includes(t)||e.push(t)}))}))}var Pa=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null
j(this,e),this.container=t,this.cells=[]}return q(e,[{key:"toGridIndex",value:function(e){return Math.floor(e/Bt.gridSize)}},{key:"getCellFromPoint",value:function(e){var t,n,r=e.x,a=e.y
Yt(this.boundaries,"Grid does not have cells added")
var o=this.toGridIndex(a),i=this.toGridIndex(r)
Yt(Ba({y:o,x:i},this.boundaries),"Element midpoint exceeds the grid bounds")
var u=null!==(t=this.cells[o-this.cells._negativeIndex])&&void 0!==t?t:[]
return null!==(n=u[i-u._negativeIndex])&&void 0!==n?n:[]}},{key:"loopGridPosition",value:function(e,t){var n=e,r=n.left,a=n.right,o=n.top,i=n.bottom
this.boundaries&&(e=Ra(this.boundaries,e)),this.boundaries=e,ja(this.cells,o,i,(function(e,n){ja(e,r,a,(function(e,r){t(e,{row:n,col:r})}))}))}},{key:"getGridPositionOfRect",value:function(e){var t=e.top,r=e.right,a=e.bottom,o=e.left,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0
return t=this.toGridIndex(t-i),r=this.toGridIndex(r+i-1),a=this.toGridIndex(a+i-1),o=this.toGridIndex(o-i),new n.DOMRect(o,t,r-o,a-t)}}]),e}()
function ja(e,t,n,r){var a
if(null!==(a=e._negativeIndex)&&void 0!==a||(e._negativeIndex=0),t<e._negativeIndex){for(var o=0;o<e._negativeIndex-t;o++)e.splice(0,0,[])
e._negativeIndex=t}for(var i=t-e._negativeIndex,u=n-e._negativeIndex,s=i;s<=u;s++){var l,c
null!==(c=e[l=s])&&void 0!==c||(e[l]=[]),r(e[s],s+e._negativeIndex)}}function Ma(e){var t,n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0
if(Sa(),null===(t=e._grid)||void 0===t||null===(n=t.cells)||void 0===n||!n.length)return[]
var a=e.boundingClientRect,o=e._grid,i=qa(e),u=o.getGridPositionOfRect(a,r),s=[]
return o.loopGridPosition(u,(function(t){var n,r=H(t)
try{for(r.s();!(n=r.n()).done;){var a=n.value
a&&a!==e&&!s.includes(a)&&i===qa(a)&&s.push(a)}}catch(e){r.e(e)}finally{r.f()}})),s}var qa=ea((function(e){return!!e&&("fixed"===e.getComputedStylePropertyValue("position")||qa(e.parent))})),La=["button","command","fieldset","keygen","optgroup","option","select","textarea","input"],Ha=function(e){var t,n=e instanceof _t?e:Nn(e)
if(t=n.props.nodeName,La.includes(t)&&n.hasAttr("disabled"))return!0
for(var r=n.parent,a=[],o=!1;r&&r.shadowId===n.shadowId&&!o&&(a.push(r),"legend"!==r.props.nodeName);){if(void 0!==r._inDisabledFieldset){o=r._inDisabledFieldset
break}"fieldset"===r.props.nodeName&&r.hasAttr("disabled")&&(o=!0),r=r.parent}return a.forEach((function(e){return e._inDisabledFieldset=o})),!!o||"area"!==n.props.nodeName&&!!n.actualNode&&va(n)},$a=/^\/\#/,Va=/^#[!/]/
function za(e){var t,r=e.getAttribute("href")
if(!r||"#"===r)return!1
if($a.test(r))return!0
var a=e.hash,o=e.protocol,i=e.hostname,u=e.port,s=e.pathname
if(Va.test(a))return!1
if("#"===r.charAt(0))return!0
if("string"!=typeof(null===(t=n.location)||void 0===t?void 0:t.origin)||-1===n.location.origin.indexOf("://"))return null
var l,c=n.location.origin+n.location.pathname
return l=i?"".concat(o,"//").concat(i).concat(u?":".concat(u):""):n.location.origin,(l+=s?("/"!==s[0]?"/":"")+s:n.location.pathname)===c}var Ua=function(e,t){var n=e.getAttribute(t)
if(!n)return null
if("href"===t&&!za(e))return null;-1!==n.indexOf("#")&&(n=decodeURIComponent(n.substr(n.indexOf("#")+1)))
var r=a.getElementById(n)
return r||((r=a.getElementsByName(n)).length?r[0]:null)}
function Wa(e,t){Sa()
for(var r=Math.max(e._stackingOrder.length,t._stackingOrder.length),a=0;a<r;a++){if(void 0===t._stackingOrder[a])return-1
if(void 0===e._stackingOrder[a])return 1
if(t._stackingOrder[a]>e._stackingOrder[a])return 1
if(t._stackingOrder[a]<e._stackingOrder[a])return-1}var o=e.actualNode,i=t.actualNode
if(o.getRootNode&&o.getRootNode()!==i.getRootNode()){for(var u=[];o;)u.push({root:o.getRootNode(),node:o}),o=o.getRootNode().host
for(;i&&!u.find((function(e){return e.root===i.getRootNode()}));)i=i.getRootNode().host
if((o=u.find((function(e){return e.root===i.getRootNode()})).node)===i)return e.actualNode.getRootNode()!==o.getRootNode()?-1:1}var s=n.Node,l=s.DOCUMENT_POSITION_FOLLOWING,c=s.DOCUMENT_POSITION_CONTAINS,d=s.DOCUMENT_POSITION_CONTAINED_BY,p=o.compareDocumentPosition(i),f=p&l?1:-1,h=p&c||p&d,m=Ga(e),D=Ga(t)
return m===D||h?f:D-m}function Ga(e){return-1!==e.getComputedStylePropertyValue("display").indexOf("inline")?2:Ya(e)?1:0}function Ya(e){if(!e)return!1
if(void 0!==e._isFloated)return e._isFloated
if("none"!==e.getComputedStylePropertyValue("float"))return e._isFloated=!0,!0
var t=Ya(e.parent)
return e._isFloated=t,t}var Qa={}
function Ka(e,t){var r=Math.max(e.left,t.left),a=Math.min(e.right,t.right),o=Math.max(e.top,t.top),i=Math.min(e.bottom,t.bottom)
return r>=a||o>=i?null:new n.DOMRect(r,o,a-r,i-o)}function Xa(e,t){var n=e.boundingClientRect,r=t.boundingClientRect,a=function(e,t){var n={}
return[["x","left","right","width"],["y","top","bottom","height"]].forEach((function(r){var a=_(r,4),o=a[0],i=a[1],u=a[2],s=a[3]
if(t[i]<e[i]&&t[u]>e[u])n[o]=e[i]+e[s]/2
else{var l=t[i]+t[s]/2,c=Math.abs(l-e[i]),d=Math.abs(l-e[u])
n[o]=c>=d?e[i]:e[u]}})),n}(n,r)
return function(e,t){var n=Math.abs(e.x-t.x),r=Math.abs(e.y-t.y)
return n&&r?Math.sqrt(Math.pow(n,2)+Math.pow(r,2)):n||r}(a,function(e,t,n){var r=e.x,a=e.y
if(function(e,t){var n=e.x,r=e.y
return r>=t.top&&n<=t.right&&r<=t.bottom&&n>=t.left}({x:r,y:a},n)){var o=function(e,t,n){var r,a,o=e.x,i=e.y
return o===t.left&&t.right<n.right?r=t.right:o===t.right&&t.left>n.left&&(r=t.left),i===t.top&&t.bottom<n.bottom?a=t.bottom:i===t.bottom&&t.top>n.top&&(a=t.top),r||a?a?r&&Math.abs(o-r)<Math.abs(i-a)?{x:r,y:i}:{x:o,y:a}:{x:r,y:i}:null}({x:r,y:a},t,n)
if(null!==o)return o
n=t}var i=n,u=i.top,s=i.right,l=i.bottom,c=i.left,d=r>=c&&r<=s,p=a>=u&&a<=l,f=Math.abs(c-r)<Math.abs(s-r)?c:s,h=Math.abs(u-a)<Math.abs(l-a)?u:l
return!d&&p?{x:f,y:a}:d&&!p?{x:r,y:h}:d||p?Math.abs(r-f)<Math.abs(a-h)?{x:f,y:a}:{x:r,y:h}:{x:f,y:h}}(a,n,r))}function Ja(e){var t=e.left,r=e.top,a=e.width,o=e.height
return new n.DOMPoint(t+a/2,r+o/2)}function Za(e,t){var n=e.boundingClientRect,r=t.boundingClientRect
return!(n.left>=r.right||n.right<=r.left||n.top>=r.bottom||n.bottom<=r.top)&&Wa(e,t)>0}function eo(e,t){var n,r=[e],a=H(t)
try{var o=function(){var e=n.value
r=r.reduce((function(t,n){return t.concat(function(e,t){var n=e.top,r=e.left,a=e.bottom,o=e.right,i=n<t.bottom&&a>t.top,u=r<t.right&&o>t.left,s=[]
return to(t.top,n,a)&&u&&s.push({top:n,left:r,bottom:t.top,right:o}),to(t.right,r,o)&&i&&s.push({top:n,left:t.right,bottom:a,right:o}),to(t.bottom,n,a)&&u&&s.push({top:t.bottom,right:o,bottom:a,left:r}),to(t.left,r,o)&&i&&s.push({top:n,left:r,bottom:a,right:t.left}),0===s.length&&s.push(e),s.map(no)}(n,e))}),[])}
for(a.s();!(n=a.n()).done;)o()}catch(e){a.e(e)}finally{a.f()}return r}z(Qa,{getBoundingRect:function(){return Ra},getIntersectionRect:function(){return Ka},getOffset:function(){return Xa},getRectCenter:function(){return Ja},hasVisualOverlap:function(){return Za},isPointInRect:function(){return Ba},rectsOverlap:function(){return ta},splitRects:function(){return eo}})
var to=function(e,t,n){return e>t&&e<n}
function no(e){return O({},e,{x:e.left,y:e.top,height:e.bottom-e.top,width:e.right-e.left})}function ro(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=Ja(t),o=e.getCellFromPoint(r)||[],i=Math.floor(r.x),u=Math.floor(r.y),s=o.filter((function(e){return e.clientRects.some((function(e){var t=e.left,n=e.top
return i<Math.floor(t+e.width)&&i>=Math.floor(t)&&u<Math.floor(n+e.height)&&u>=Math.floor(n)}))})),l=e.container
return l&&(s=ro(l._grid,l.boundingClientRect,!0).concat(s)),n||(s=s.sort(Wa).map((function(e){return e.actualNode})).concat(a.documentElement).filter((function(e,t,n){return n.indexOf(e)===t}))),s}var ao=function(e){Sa()
var t=Nn(e),n=t._grid
return n?ro(n,t.boundingClientRect):[]},oo=function(e){return vl(e,"*").filter((function(e){var t=e.isFocusable,n=e.actualNode.getAttribute("tabindex")
return(n=n&&!isNaN(parseInt(n,10))?parseInt(n):null)?t&&n>=0:t}))},io={}
z(io,{accessibleText:function(){return so},accessibleTextVirtual:function(){return Li},autocomplete:function(){return Vi},formControlValue:function(){return Bi},formControlValueMethods:function(){return Ni},hasUnicode:function(){return Oi},isHumanInterpretable:function(){return $i},isIconLigature:function(){return _i},isValidAutocomplete:function(){return zi},label:function(){return Yi},labelText:function(){return li},labelVirtual:function(){return Gi},nativeElementType:function(){return Qi},nativeTextAlternative:function(){return mi},nativeTextMethods:function(){return fi},removeUnicode:function(){return Hi},sanitize:function(){return ko},subtreeText:function(){return ui},titleText:function(){return ni},unsupported:function(){return Di},visible:function(){return Wi},visibleTextNodes:function(){return Ki},visibleVirtual:function(){return yi}})
var uo=function(e,t){e=e.actualNode||e
try{var n=Qr(e),r=[],a=e.getAttribute(t)
if(a){a=Wu(a)
for(var o=0;o<a.length;o++)r.push(n.getElementById(a[o]))}return r}catch(e){throw new TypeError("Cannot resolve id references for non-DOM nodes")}},so=function(e,t){var n=Nn(e)
return Li(n,t)},lo=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
if(!(e instanceof _t)){if(1!==e.nodeType)return""
e=Nn(e)}if(1!==e.props.nodeType||t.inLabelledByContext||t.inControlContext||!e.attr("aria-labelledby"))return""
var n=uo(e,"aria-labelledby").filter((function(e){return e}))
return n.reduce((function(n,r){var a=so(r,O({inLabelledByContext:!0,startNode:t.startNode||e},t))
return n?"".concat(n," ").concat(a):a}),"")},co=function(e){if(!(e instanceof _t)){if(1!==e.nodeType)return""
e=Nn(e)}return e.attr("aria-label")||""},po={"aria-activedescendant":{type:"idref",allowEmpty:!0},"aria-atomic":{type:"boolean",global:!0},"aria-autocomplete":{type:"nmtoken",values:["inline","list","both","none"]},"aria-busy":{type:"boolean",global:!0},"aria-checked":{type:"nmtoken",values:["false","mixed","true","undefined"]},"aria-colcount":{type:"int",minValue:-1},"aria-colindex":{type:"int",minValue:1},"aria-colspan":{type:"int",minValue:1},"aria-controls":{type:"idrefs",allowEmpty:!0,global:!0},"aria-current":{type:"nmtoken",allowEmpty:!0,values:["page","step","location","date","time","true","false"],global:!0},"aria-describedby":{type:"idrefs",allowEmpty:!0,global:!0},"aria-details":{type:"idref",allowEmpty:!0,global:!0},"aria-disabled":{type:"boolean",global:!0},"aria-dropeffect":{type:"nmtokens",values:["copy","execute","link","move","none","popup"],global:!0},"aria-errormessage":{type:"idref",allowEmpty:!0,global:!0},"aria-expanded":{type:"nmtoken",values:["true","false","undefined"]},"aria-flowto":{type:"idrefs",allowEmpty:!0,global:!0},"aria-grabbed":{type:"nmtoken",values:["true","false","undefined"],global:!0},"aria-haspopup":{type:"nmtoken",allowEmpty:!0,values:["true","false","menu","listbox","tree","grid","dialog"],global:!0},"aria-hidden":{type:"nmtoken",values:["true","false","undefined"],global:!0},"aria-invalid":{type:"nmtoken",values:["grammar","false","spelling","true"],global:!0},"aria-keyshortcuts":{type:"string",allowEmpty:!0,global:!0},"aria-label":{type:"string",allowEmpty:!0,global:!0},"aria-labelledby":{type:"idrefs",allowEmpty:!0,global:!0},"aria-level":{type:"int",minValue:1},"aria-live":{type:"nmtoken",values:["assertive","off","polite"],global:!0},"aria-modal":{type:"boolean"},"aria-multiline":{type:"boolean"},"aria-multiselectable":{type:"boolean"},"aria-orientation":{type:"nmtoken",values:["horizontal","undefined","vertical"]},"aria-owns":{type:"idrefs",allowEmpty:!0,global:!0},"aria-placeholder":{type:"string",allowEmpty:!0},"aria-posinset":{type:"int",minValue:1},"aria-pressed":{type:"nmtoken",values:["false","mixed","true","undefined"]},"aria-readonly":{type:"boolean"},"aria-relevant":{type:"nmtokens",values:["additions","all","removals","text"],global:!0},"aria-required":{type:"boolean"},"aria-roledescription":{type:"string",allowEmpty:!0,global:!0},"aria-rowcount":{type:"int",minValue:-1},"aria-rowindex":{type:"int",minValue:1},"aria-rowspan":{type:"int",minValue:0},"aria-selected":{type:"nmtoken",values:["false","true","undefined"]},"aria-setsize":{type:"int",minValue:-1},"aria-sort":{type:"nmtoken",values:["ascending","descending","none","other"]},"aria-valuemax":{type:"decimal"},"aria-valuemin":{type:"decimal"},"aria-valuenow":{type:"decimal"},"aria-valuetext":{type:"string"}},fo={alert:{type:"widget",allowedAttrs:["aria-expanded"],superclassRole:["section"]},alertdialog:{type:"widget",allowedAttrs:["aria-expanded","aria-modal"],superclassRole:["alert","dialog"],accessibleNameRequired:!0},application:{type:"landmark",allowedAttrs:["aria-activedescendant","aria-expanded"],superclassRole:["structure"],accessibleNameRequired:!0},article:{type:"structure",allowedAttrs:["aria-posinset","aria-setsize","aria-expanded"],superclassRole:["document"]},banner:{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},blockquote:{type:"structure",superclassRole:["section"]},button:{type:"widget",allowedAttrs:["aria-expanded","aria-pressed"],superclassRole:["command"],accessibleNameRequired:!0,nameFromContent:!0,childrenPresentational:!0},caption:{type:"structure",requiredContext:["figure","table","grid","treegrid"],superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},cell:{type:"structure",requiredContext:["row"],allowedAttrs:["aria-colindex","aria-colspan","aria-rowindex","aria-rowspan","aria-expanded"],superclassRole:["section"],nameFromContent:!0},checkbox:{type:"widget",requiredAttrs:["aria-checked"],allowedAttrs:["aria-readonly","aria-required"],superclassRole:["input"],accessibleNameRequired:!0,nameFromContent:!0,childrenPresentational:!0},code:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},columnheader:{type:"structure",requiredContext:["row"],allowedAttrs:["aria-sort","aria-colindex","aria-colspan","aria-expanded","aria-readonly","aria-required","aria-rowindex","aria-rowspan","aria-selected"],superclassRole:["cell","gridcell","sectionhead"],accessibleNameRequired:!1,nameFromContent:!0},combobox:{type:"widget",requiredAttrs:["aria-expanded","aria-controls"],allowedAttrs:["aria-owns","aria-autocomplete","aria-readonly","aria-required","aria-activedescendant","aria-orientation"],superclassRole:["select"],accessibleNameRequired:!0},command:{type:"abstract",superclassRole:["widget"]},complementary:{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},composite:{type:"abstract",superclassRole:["widget"]},contentinfo:{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},comment:{type:"structure",allowedAttrs:["aria-level","aria-posinset","aria-setsize"],superclassRole:["article"]},definition:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"]},deletion:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},dialog:{type:"widget",allowedAttrs:["aria-expanded","aria-modal"],superclassRole:["window"],accessibleNameRequired:!0},directory:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["list"],nameFromContent:!0},document:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["structure"]},emphasis:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},feed:{type:"structure",requiredOwned:["article"],allowedAttrs:["aria-expanded"],superclassRole:["list"]},figure:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"],nameFromContent:!0},form:{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},grid:{type:"composite",requiredOwned:["rowgroup","row"],allowedAttrs:["aria-level","aria-multiselectable","aria-readonly","aria-activedescendant","aria-colcount","aria-expanded","aria-rowcount"],superclassRole:["composite","table"],accessibleNameRequired:!1},gridcell:{type:"widget",requiredContext:["row"],allowedAttrs:["aria-readonly","aria-required","aria-selected","aria-colindex","aria-colspan","aria-expanded","aria-rowindex","aria-rowspan"],superclassRole:["cell","widget"],nameFromContent:!0},group:{type:"structure",allowedAttrs:["aria-activedescendant","aria-expanded"],superclassRole:["section"]},heading:{type:"structure",requiredAttrs:["aria-level"],allowedAttrs:["aria-expanded"],superclassRole:["sectionhead"],accessibleNameRequired:!1,nameFromContent:!0},img:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"],accessibleNameRequired:!0,childrenPresentational:!0},input:{type:"abstract",superclassRole:["widget"]},insertion:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},landmark:{type:"abstract",superclassRole:["section"]},link:{type:"widget",allowedAttrs:["aria-expanded"],superclassRole:["command"],accessibleNameRequired:!0,nameFromContent:!0},list:{type:"structure",requiredOwned:["listitem"],allowedAttrs:["aria-expanded"],superclassRole:["section"]},listbox:{type:"widget",requiredOwned:["group","option"],allowedAttrs:["aria-multiselectable","aria-readonly","aria-required","aria-activedescendant","aria-expanded","aria-orientation"],superclassRole:["select"],accessibleNameRequired:!0},listitem:{type:"structure",requiredContext:["list"],allowedAttrs:["aria-level","aria-posinset","aria-setsize","aria-expanded"],superclassRole:["section"],nameFromContent:!0},log:{type:"widget",allowedAttrs:["aria-expanded"],superclassRole:["section"]},main:{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},marquee:{type:"widget",allowedAttrs:["aria-expanded"],superclassRole:["section"]},math:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"],childrenPresentational:!0},menu:{type:"composite",requiredOwned:["group","menuitemradio","menuitem","menuitemcheckbox","menu","separator"],allowedAttrs:["aria-activedescendant","aria-expanded","aria-orientation"],superclassRole:["select"]},menubar:{type:"composite",requiredOwned:["group","menuitemradio","menuitem","menuitemcheckbox","menu","separator"],allowedAttrs:["aria-activedescendant","aria-expanded","aria-orientation"],superclassRole:["menu"]},menuitem:{type:"widget",requiredContext:["menu","menubar","group"],allowedAttrs:["aria-posinset","aria-setsize","aria-expanded"],superclassRole:["command"],accessibleNameRequired:!0,nameFromContent:!0},menuitemcheckbox:{type:"widget",requiredContext:["menu","menubar","group"],requiredAttrs:["aria-checked"],allowedAttrs:["aria-posinset","aria-readonly","aria-setsize"],superclassRole:["checkbox","menuitem"],accessibleNameRequired:!0,nameFromContent:!0,childrenPresentational:!0},menuitemradio:{type:"widget",requiredContext:["menu","menubar","group"],requiredAttrs:["aria-checked"],allowedAttrs:["aria-posinset","aria-readonly","aria-setsize"],superclassRole:["menuitemcheckbox","radio"],accessibleNameRequired:!0,nameFromContent:!0,childrenPresentational:!0},meter:{type:"structure",requiredAttrs:["aria-valuenow"],allowedAttrs:["aria-valuemax","aria-valuemin","aria-valuetext"],superclassRole:["range"],accessibleNameRequired:!0,childrenPresentational:!0},mark:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},navigation:{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},none:{type:"structure",superclassRole:["structure"],prohibitedAttrs:["aria-label","aria-labelledby"]},note:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"]},option:{type:"widget",requiredContext:["group","listbox"],allowedAttrs:["aria-selected","aria-checked","aria-posinset","aria-setsize"],superclassRole:["input"],accessibleNameRequired:!0,nameFromContent:!0,childrenPresentational:!0},paragraph:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},presentation:{type:"structure",superclassRole:["structure"],prohibitedAttrs:["aria-label","aria-labelledby"]},progressbar:{type:"widget",allowedAttrs:["aria-expanded","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext"],superclassRole:["range"],accessibleNameRequired:!0,childrenPresentational:!0},radio:{type:"widget",requiredAttrs:["aria-checked"],allowedAttrs:["aria-posinset","aria-setsize","aria-required"],superclassRole:["input"],accessibleNameRequired:!0,nameFromContent:!0,childrenPresentational:!0},radiogroup:{type:"composite",allowedAttrs:["aria-readonly","aria-required","aria-activedescendant","aria-expanded","aria-orientation"],superclassRole:["select"],accessibleNameRequired:!1},range:{type:"abstract",superclassRole:["widget"]},region:{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"],accessibleNameRequired:!1},roletype:{type:"abstract",superclassRole:[]},row:{type:"structure",requiredContext:["grid","rowgroup","table","treegrid"],requiredOwned:["cell","columnheader","gridcell","rowheader"],allowedAttrs:["aria-colindex","aria-level","aria-rowindex","aria-selected","aria-activedescendant","aria-expanded","aria-posinset","aria-setsize"],superclassRole:["group","widget"],nameFromContent:!0},rowgroup:{type:"structure",requiredContext:["grid","table","treegrid"],requiredOwned:["row"],superclassRole:["structure"],nameFromContent:!0},rowheader:{type:"structure",requiredContext:["row"],allowedAttrs:["aria-sort","aria-colindex","aria-colspan","aria-expanded","aria-readonly","aria-required","aria-rowindex","aria-rowspan","aria-selected"],superclassRole:["cell","gridcell","sectionhead"],accessibleNameRequired:!1,nameFromContent:!0},scrollbar:{type:"widget",requiredAttrs:["aria-valuenow"],allowedAttrs:["aria-controls","aria-orientation","aria-valuemax","aria-valuemin","aria-valuetext"],superclassRole:["range"],childrenPresentational:!0},search:{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},searchbox:{type:"widget",allowedAttrs:["aria-activedescendant","aria-autocomplete","aria-multiline","aria-placeholder","aria-readonly","aria-required"],superclassRole:["textbox"],accessibleNameRequired:!0},section:{type:"abstract",superclassRole:["structure"],nameFromContent:!0},sectionhead:{type:"abstract",superclassRole:["structure"],nameFromContent:!0},select:{type:"abstract",superclassRole:["composite","group"]},separator:{type:"structure",requiredAttrs:["aria-valuenow"],allowedAttrs:["aria-valuemax","aria-valuemin","aria-orientation","aria-valuetext"],superclassRole:["structure","widget"],childrenPresentational:!0},slider:{type:"widget",requiredAttrs:["aria-valuenow"],allowedAttrs:["aria-valuemax","aria-valuemin","aria-orientation","aria-readonly","aria-valuetext"],superclassRole:["input","range"],accessibleNameRequired:!0,childrenPresentational:!0},spinbutton:{type:"widget",allowedAttrs:["aria-valuemax","aria-valuemin","aria-readonly","aria-required","aria-activedescendant","aria-valuetext","aria-valuenow"],superclassRole:["composite","input","range"],accessibleNameRequired:!0},status:{type:"widget",allowedAttrs:["aria-expanded"],superclassRole:["section"]},strong:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},structure:{type:"abstract",superclassRole:["roletype"]},subscript:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},superscript:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},switch:{type:"widget",requiredAttrs:["aria-checked"],allowedAttrs:["aria-readonly"],superclassRole:["checkbox"],accessibleNameRequired:!0,nameFromContent:!0,childrenPresentational:!0},suggestion:{type:"structure",requiredOwned:["insertion","deletion"],superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},tab:{type:"widget",requiredContext:["tablist"],allowedAttrs:["aria-posinset","aria-selected","aria-setsize","aria-expanded"],superclassRole:["sectionhead","widget"],nameFromContent:!0,childrenPresentational:!0},table:{type:"structure",requiredOwned:["rowgroup","row"],allowedAttrs:["aria-colcount","aria-rowcount","aria-expanded"],superclassRole:["section"],accessibleNameRequired:!1,nameFromContent:!0},tablist:{type:"composite",requiredOwned:["tab"],allowedAttrs:["aria-level","aria-multiselectable","aria-orientation","aria-activedescendant","aria-expanded"],superclassRole:["composite"]},tabpanel:{type:"widget",allowedAttrs:["aria-expanded"],superclassRole:["section"],accessibleNameRequired:!1},term:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"],nameFromContent:!0},text:{type:"structure",superclassRole:["section"],nameFromContent:!0},textbox:{type:"widget",allowedAttrs:["aria-activedescendant","aria-autocomplete","aria-multiline","aria-placeholder","aria-readonly","aria-required"],superclassRole:["input"],accessibleNameRequired:!0},time:{type:"structure",superclassRole:["section"]},timer:{type:"widget",allowedAttrs:["aria-expanded"],superclassRole:["status"]},toolbar:{type:"structure",allowedAttrs:["aria-orientation","aria-activedescendant","aria-expanded"],superclassRole:["group"],accessibleNameRequired:!0},tooltip:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"],nameFromContent:!0},tree:{type:"composite",requiredOwned:["group","treeitem"],allowedAttrs:["aria-multiselectable","aria-required","aria-activedescendant","aria-expanded","aria-orientation"],superclassRole:["select"],accessibleNameRequired:!1},treegrid:{type:"composite",requiredOwned:["rowgroup","row"],allowedAttrs:["aria-activedescendant","aria-colcount","aria-expanded","aria-level","aria-multiselectable","aria-orientation","aria-readonly","aria-required","aria-rowcount"],superclassRole:["grid","tree"],accessibleNameRequired:!1},treeitem:{type:"widget",requiredContext:["group","tree"],allowedAttrs:["aria-checked","aria-expanded","aria-level","aria-posinset","aria-selected","aria-setsize"],superclassRole:["listitem","option"],accessibleNameRequired:!0,nameFromContent:!0},widget:{type:"abstract",superclassRole:["roletype"]},window:{type:"abstract",superclassRole:["roletype"]}},ho={ariaAttrs:po,ariaRoles:O({},fo,{"doc-abstract":{type:"section",allowedAttrs:["aria-expanded"],superclassRole:["section"]},"doc-acknowledgments":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-afterword":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-appendix":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-backlink":{type:"link",allowedAttrs:["aria-expanded"],nameFromContent:!0,superclassRole:["link"]},"doc-biblioentry":{type:"listitem",allowedAttrs:["aria-expanded","aria-level","aria-posinset","aria-setsize"],superclassRole:["listitem"],deprecated:!0},"doc-bibliography":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-biblioref":{type:"link",allowedAttrs:["aria-expanded"],nameFromContent:!0,superclassRole:["link"]},"doc-chapter":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-colophon":{type:"section",allowedAttrs:["aria-expanded"],superclassRole:["section"]},"doc-conclusion":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-cover":{type:"img",allowedAttrs:["aria-expanded"],superclassRole:["img"]},"doc-credit":{type:"section",allowedAttrs:["aria-expanded"],superclassRole:["section"]},"doc-credits":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-dedication":{type:"section",allowedAttrs:["aria-expanded"],superclassRole:["section"]},"doc-endnote":{type:"listitem",allowedAttrs:["aria-expanded","aria-level","aria-posinset","aria-setsize"],superclassRole:["listitem"],deprecated:!0},"doc-endnotes":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-epigraph":{type:"section",allowedAttrs:["aria-expanded"],superclassRole:["section"]},"doc-epilogue":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-errata":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-example":{type:"section",allowedAttrs:["aria-expanded"],superclassRole:["section"]},"doc-footnote":{type:"section",allowedAttrs:["aria-expanded"],superclassRole:["section"]},"doc-foreword":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-glossary":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-glossref":{type:"link",allowedAttrs:["aria-expanded"],nameFromContent:!0,superclassRole:["link"]},"doc-index":{type:"navigation",allowedAttrs:["aria-expanded"],superclassRole:["navigation"]},"doc-introduction":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-noteref":{type:"link",allowedAttrs:["aria-expanded"],nameFromContent:!0,superclassRole:["link"]},"doc-notice":{type:"note",allowedAttrs:["aria-expanded"],superclassRole:["note"]},"doc-pagebreak":{type:"separator",allowedAttrs:["aria-expanded","aria-orientation"],superclassRole:["separator"],childrenPresentational:!0},"doc-pagelist":{type:"navigation",allowedAttrs:["aria-expanded"],superclassRole:["navigation"]},"doc-part":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-preface":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-prologue":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-pullquote":{type:"none",superclassRole:["none"]},"doc-qna":{type:"section",allowedAttrs:["aria-expanded"],superclassRole:["section"]},"doc-subtitle":{type:"sectionhead",allowedAttrs:["aria-expanded"],superclassRole:["sectionhead"]},"doc-tip":{type:"note",allowedAttrs:["aria-expanded"],superclassRole:["note"]},"doc-toc":{type:"navigation",allowedAttrs:["aria-expanded"],superclassRole:["navigation"]}},{"graphics-document":{type:"structure",superclassRole:["document"],accessibleNameRequired:!0},"graphics-object":{type:"structure",superclassRole:["group"],nameFromContent:!0},"graphics-symbol":{type:"structure",superclassRole:["img"],accessibleNameRequired:!0,childrenPresentational:!0}}),htmlElms:{a:{variant:{href:{matches:"[href]",contentTypes:["interactive","phrasing","flow"],allowedRoles:["button","checkbox","menuitem","menuitemcheckbox","menuitemradio","option","radio","switch","tab","treeitem","doc-backlink","doc-biblioref","doc-glossref","doc-noteref"],namingMethods:["subtreeText"]},default:{contentTypes:["phrasing","flow"],allowedRoles:!0}}},abbr:{contentTypes:["phrasing","flow"],allowedRoles:!0},address:{contentTypes:["flow"],allowedRoles:!0},area:{variant:{href:{matches:"[href]",allowedRoles:!1},default:{allowedRoles:["button","link"]}},contentTypes:["phrasing","flow"],namingMethods:["altText"]},article:{contentTypes:["sectioning","flow"],allowedRoles:["feed","presentation","none","document","application","main","region"],shadowRoot:!0},aside:{contentTypes:["sectioning","flow"],allowedRoles:["feed","note","presentation","none","region","search","doc-dedication","doc-example","doc-footnote","doc-pullquote","doc-tip"]},audio:{variant:{controls:{matches:"[controls]",contentTypes:["interactive","embedded","phrasing","flow"]},default:{contentTypes:["embedded","phrasing","flow"]}},allowedRoles:["application"],chromiumRole:"Audio"},b:{contentTypes:["phrasing","flow"],allowedRoles:!0},base:{allowedRoles:!1,noAriaAttrs:!0},bdi:{contentTypes:["phrasing","flow"],allowedRoles:!0},bdo:{contentTypes:["phrasing","flow"],allowedRoles:!0},blockquote:{contentTypes:["flow"],allowedRoles:!0,shadowRoot:!0},body:{allowedRoles:!1,shadowRoot:!0},br:{contentTypes:["phrasing","flow"],allowedRoles:["presentation","none"],namingMethods:["titleText","singleSpace"]},button:{contentTypes:["interactive","phrasing","flow"],allowedRoles:["checkbox","combobox","link","menuitem","menuitemcheckbox","menuitemradio","option","radio","switch","tab"],namingMethods:["subtreeText"]},canvas:{allowedRoles:!0,contentTypes:["embedded","phrasing","flow"],chromiumRole:"Canvas"},caption:{allowedRoles:!1},cite:{contentTypes:["phrasing","flow"],allowedRoles:!0},code:{contentTypes:["phrasing","flow"],allowedRoles:!0},col:{allowedRoles:!1,noAriaAttrs:!0},colgroup:{allowedRoles:!1,noAriaAttrs:!0},data:{contentTypes:["phrasing","flow"],allowedRoles:!0},datalist:{contentTypes:["phrasing","flow"],allowedRoles:!1,implicitAttrs:{"aria-multiselectable":"false"}},dd:{allowedRoles:!1},del:{contentTypes:["phrasing","flow"],allowedRoles:!0},dfn:{contentTypes:["phrasing","flow"],allowedRoles:!0},details:{contentTypes:["interactive","flow"],allowedRoles:!1},dialog:{contentTypes:["flow"],allowedRoles:["alertdialog"]},div:{contentTypes:["flow"],allowedRoles:!0,shadowRoot:!0},dl:{contentTypes:["flow"],allowedRoles:["group","list","presentation","none"],chromiumRole:"DescriptionList"},dt:{allowedRoles:["listitem"]},em:{contentTypes:["phrasing","flow"],allowedRoles:!0},embed:{contentTypes:["interactive","embedded","phrasing","flow"],allowedRoles:["application","document","img","presentation","none"],chromiumRole:"EmbeddedObject"},fieldset:{contentTypes:["flow"],allowedRoles:["none","presentation","radiogroup"],namingMethods:["fieldsetLegendText"]},figcaption:{allowedRoles:["group","none","presentation"]},figure:{contentTypes:["flow"],allowedRoles:!0,namingMethods:["figureText","titleText"]},footer:{contentTypes:["flow"],allowedRoles:["group","none","presentation","doc-footnote"],shadowRoot:!0},form:{contentTypes:["flow"],allowedRoles:["search","none","presentation"]},h1:{contentTypes:["heading","flow"],allowedRoles:["none","presentation","tab","doc-subtitle"],shadowRoot:!0,implicitAttrs:{"aria-level":"1"}},h2:{contentTypes:["heading","flow"],allowedRoles:["none","presentation","tab","doc-subtitle"],shadowRoot:!0,implicitAttrs:{"aria-level":"2"}},h3:{contentTypes:["heading","flow"],allowedRoles:["none","presentation","tab","doc-subtitle"],shadowRoot:!0,implicitAttrs:{"aria-level":"3"}},h4:{contentTypes:["heading","flow"],allowedRoles:["none","presentation","tab","doc-subtitle"],shadowRoot:!0,implicitAttrs:{"aria-level":"4"}},h5:{contentTypes:["heading","flow"],allowedRoles:["none","presentation","tab","doc-subtitle"],shadowRoot:!0,implicitAttrs:{"aria-level":"5"}},h6:{contentTypes:["heading","flow"],allowedRoles:["none","presentation","tab","doc-subtitle"],shadowRoot:!0,implicitAttrs:{"aria-level":"6"}},head:{allowedRoles:!1,noAriaAttrs:!0},header:{contentTypes:["flow"],allowedRoles:["group","none","presentation","doc-footnote"],shadowRoot:!0},hgroup:{contentTypes:["heading","flow"],allowedRoles:!0},hr:{contentTypes:["flow"],allowedRoles:["none","presentation","doc-pagebreak"],namingMethods:["titleText","singleSpace"]},html:{allowedRoles:!1,noAriaAttrs:!0},i:{contentTypes:["phrasing","flow"],allowedRoles:!0},iframe:{contentTypes:["interactive","embedded","phrasing","flow"],allowedRoles:["application","document","img","none","presentation"],chromiumRole:"Iframe"},img:{variant:{nonEmptyAlt:{matches:[{attributes:{alt:"/.+/"}},{hasAccessibleName:!0}],allowedRoles:["button","checkbox","link","menuitem","menuitemcheckbox","menuitemradio","option","progressbar","radio","scrollbar","separator","slider","switch","tab","treeitem","doc-cover"]},usemap:{matches:"[usemap]",contentTypes:["interactive","embedded","flow"]},default:{allowedRoles:["presentation","none"],contentTypes:["embedded","flow"]}},namingMethods:["altText"]},input:{variant:{button:{matches:{properties:{type:"button"}},allowedRoles:["checkbox","combobox","link","menuitem","menuitemcheckbox","menuitemradio","option","radio","switch","tab"]},buttonType:{matches:{properties:{type:["button","submit","reset"]}},namingMethods:["valueText","titleText","buttonDefaultText"]},checkboxPressed:{matches:{properties:{type:"checkbox"},attributes:{"aria-pressed":"/.*/"}},allowedRoles:["button","menuitemcheckbox","option","switch"],implicitAttrs:{"aria-checked":"false"}},checkbox:{matches:{properties:{type:"checkbox"},attributes:{"aria-pressed":null}},allowedRoles:["menuitemcheckbox","option","switch"],implicitAttrs:{"aria-checked":"false"}},noRoles:{matches:{properties:{type:["color","date","datetime-local","file","month","number","password","range","reset","submit","time","week"]}},allowedRoles:!1},hidden:{matches:{properties:{type:"hidden"}},contentTypes:["flow"],allowedRoles:!1,noAriaAttrs:!0},image:{matches:{properties:{type:"image"}},allowedRoles:["link","menuitem","menuitemcheckbox","menuitemradio","radio","switch"],namingMethods:["altText","valueText","labelText","titleText","buttonDefaultText"]},radio:{matches:{properties:{type:"radio"}},allowedRoles:["menuitemradio"],implicitAttrs:{"aria-checked":"false"}},textWithList:{matches:{properties:{type:"text"},attributes:{list:"/.*/"}},allowedRoles:!1},default:{contentTypes:["interactive","flow"],allowedRoles:["combobox","searchbox","spinbutton"],implicitAttrs:{"aria-valuenow":""},namingMethods:["labelText","placeholderText"]}}},ins:{contentTypes:["phrasing","flow"],allowedRoles:!0},kbd:{contentTypes:["phrasing","flow"],allowedRoles:!0},label:{contentTypes:["interactive","phrasing","flow"],allowedRoles:!1,chromiumRole:"Label"},legend:{allowedRoles:!1},li:{allowedRoles:["menuitem","menuitemcheckbox","menuitemradio","option","none","presentation","radio","separator","tab","treeitem","doc-biblioentry","doc-endnote"],implicitAttrs:{"aria-setsize":"1","aria-posinset":"1"}},link:{contentTypes:["phrasing","flow"],allowedRoles:!1,noAriaAttrs:!0},main:{contentTypes:["flow"],allowedRoles:!1,shadowRoot:!0},map:{contentTypes:["phrasing","flow"],allowedRoles:!1,noAriaAttrs:!0},math:{contentTypes:["embedded","phrasing","flow"],allowedRoles:!1},mark:{contentTypes:["phrasing","flow"],allowedRoles:!0},menu:{contentTypes:["flow"],allowedRoles:["directory","group","listbox","menu","menubar","none","presentation","radiogroup","tablist","toolbar","tree"]},meta:{variant:{itemprop:{matches:"[itemprop]",contentTypes:["phrasing","flow"]}},allowedRoles:!1,noAriaAttrs:!0},meter:{contentTypes:["phrasing","flow"],allowedRoles:!1,chromiumRole:"progressbar"},nav:{contentTypes:["sectioning","flow"],allowedRoles:["doc-index","doc-pagelist","doc-toc","menu","menubar","none","presentation","tablist"],shadowRoot:!0},noscript:{contentTypes:["phrasing","flow"],allowedRoles:!1,noAriaAttrs:!0},object:{variant:{usemap:{matches:"[usemap]",contentTypes:["interactive","embedded","phrasing","flow"]},default:{contentTypes:["embedded","phrasing","flow"]}},allowedRoles:["application","document","img"],chromiumRole:"PluginObject"},ol:{contentTypes:["flow"],allowedRoles:["directory","group","listbox","menu","menubar","none","presentation","radiogroup","tablist","toolbar","tree"]},optgroup:{allowedRoles:!1},option:{allowedRoles:!1,implicitAttrs:{"aria-selected":"false"}},output:{contentTypes:["phrasing","flow"],allowedRoles:!0,namingMethods:["subtreeText"]},p:{contentTypes:["flow"],allowedRoles:!0,shadowRoot:!0},param:{allowedRoles:!1,noAriaAttrs:!0},picture:{contentTypes:["phrasing","flow"],allowedRoles:!1,noAriaAttrs:!0},pre:{contentTypes:["flow"],allowedRoles:!0},progress:{contentTypes:["phrasing","flow"],allowedRoles:!1,implicitAttrs:{"aria-valuemax":"100","aria-valuemin":"0","aria-valuenow":"0"}},q:{contentTypes:["phrasing","flow"],allowedRoles:!0},rp:{allowedRoles:!0},rt:{allowedRoles:!0},ruby:{contentTypes:["phrasing","flow"],allowedRoles:!0},s:{contentTypes:["phrasing","flow"],allowedRoles:!0},samp:{contentTypes:["phrasing","flow"],allowedRoles:!0},script:{contentTypes:["phrasing","flow"],allowedRoles:!1,noAriaAttrs:!0},section:{contentTypes:["sectioning","flow"],allowedRoles:["alert","alertdialog","application","banner","complementary","contentinfo","dialog","document","feed","group","log","main","marquee","navigation","none","note","presentation","search","status","tabpanel","doc-abstract","doc-acknowledgments","doc-afterword","doc-appendix","doc-bibliography","doc-chapter","doc-colophon","doc-conclusion","doc-credit","doc-credits","doc-dedication","doc-endnotes","doc-epigraph","doc-epilogue","doc-errata","doc-example","doc-foreword","doc-glossary","doc-index","doc-introduction","doc-notice","doc-pagelist","doc-part","doc-preface","doc-prologue","doc-pullquote","doc-qna","doc-toc"],shadowRoot:!0},select:{variant:{combobox:{matches:{attributes:{multiple:null,size:[null,"1"]}},allowedRoles:["menu"]},default:{allowedRoles:!1}},contentTypes:["interactive","phrasing","flow"],implicitAttrs:{"aria-valuenow":""},namingMethods:["labelText"]},slot:{contentTypes:["phrasing","flow"],allowedRoles:!1,noAriaAttrs:!0},small:{contentTypes:["phrasing","flow"],allowedRoles:!0},source:{allowedRoles:!1,noAriaAttrs:!0},span:{contentTypes:["phrasing","flow"],allowedRoles:!0,shadowRoot:!0},strong:{contentTypes:["phrasing","flow"],allowedRoles:!0},style:{allowedRoles:!1,noAriaAttrs:!0},svg:{contentTypes:["embedded","phrasing","flow"],allowedRoles:!0,chromiumRole:"SVGRoot",namingMethods:["svgTitleText"]},sub:{contentTypes:["phrasing","flow"],allowedRoles:!0},summary:{allowedRoles:!1,namingMethods:["subtreeText"]},sup:{contentTypes:["phrasing","flow"],allowedRoles:!0},table:{contentTypes:["flow"],allowedRoles:!0,namingMethods:["tableCaptionText","tableSummaryText"]},tbody:{allowedRoles:!0},template:{contentTypes:["phrasing","flow"],allowedRoles:!1,noAriaAttrs:!0},textarea:{contentTypes:["interactive","phrasing","flow"],allowedRoles:!1,implicitAttrs:{"aria-valuenow":"","aria-multiline":"true"},namingMethods:["labelText","placeholderText"]},tfoot:{allowedRoles:!0},thead:{allowedRoles:!0},time:{contentTypes:["phrasing","flow"],allowedRoles:!0},title:{allowedRoles:!1,noAriaAttrs:!0},td:{allowedRoles:!0},th:{allowedRoles:!0},tr:{allowedRoles:!0},track:{allowedRoles:!1,noAriaAttrs:!0},u:{contentTypes:["phrasing","flow"],allowedRoles:!0},ul:{contentTypes:["flow"],allowedRoles:["directory","group","listbox","menu","menubar","none","presentation","radiogroup","tablist","toolbar","tree"]},var:{contentTypes:["phrasing","flow"],allowedRoles:!0},video:{variant:{controls:{matches:"[controls]",contentTypes:["interactive","embedded","phrasing","flow"]},default:{contentTypes:["embedded","phrasing","flow"]}},allowedRoles:["application"],chromiumRole:"video"},wbr:{contentTypes:["phrasing","flow"],allowedRoles:["presentation","none"]}},cssColors:{aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},mo=O({},ho),Do=mo,go=function(e){var t=Do.ariaRoles[e]
return!!t&&!!t.unsupported},vo=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.allowAbstract,r=t.flagUnsupported,a=void 0!==r&&r,o=Do.ariaRoles[e],i=go(e)
return!(!o||a&&i||!n&&"abstract"===o.type)},yo=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.fallback,r=t.abstracts,a=t.dpub
if(1!==(e=e instanceof _t?e:Nn(e)).props.nodeType)return null
var o=(e.attr("role")||"").trim().toLowerCase(),i=n?Wu(o):[o],u=i.find((function(e){return!(!a&&"doc-"===e.substr(0,4))&&vo(e,{allowAbstract:r})}))
return u||null},bo=function(e){return Object.keys(Do.htmlElms).filter((function(t){var n=Do.htmlElms[t]
return n.contentTypes?n.contentTypes.includes(e):!!n.variant&&!(!n.variant.default||!n.variant.default.contentTypes)&&n.variant.default.contentTypes.includes(e)}))},Fo=function(){return Tn.get("globalAriaAttrs",(function(){return Object.keys(Do.ariaAttrs).filter((function(e){return Do.ariaAttrs[e].global}))}))},wo=ea((function(e){for(var t=[],n=e.rows,r=0,a=n.length;r<a;r++){var o=n[r].cells
t[r]=t[r]||[]
for(var i=0,u=0,s=o.length;u<s;u++)for(var l=0;l<o[u].colSpan;l++){for(var c=o[u].getAttribute("rowspan"),d=0===parseInt(c)||0===o[u].rowspan?n.length:o[u].rowSpan,p=0;p<d;p++){for(t[r+p]=t[r+p]||[];t[r+p][i];)i++
t[r+p][i]=o[u]}i++}}return t})),Eo=ea((function(e,t){var n,r
for(t||(t=wo(Jr(e,"table"))),n=0;n<t.length;n++)if(t[n]&&-1!==(r=t[n].indexOf(e)))return{x:r,y:n}})),Co=function(e){var t=e instanceof _t?e:Nn(e)
e=t.actualNode
var n=t.attr("scope"),r=t.attr("role")
if(!["td","th"].includes(t.props.nodeName))throw new TypeError("Expected TD or TH element")
if("columnheader"===r)return"col"
if("rowheader"===r)return"row"
if("col"===n||"row"===n)return n
if("th"!==t.props.nodeName)return!1
if(!t.actualNode)return"auto"
var a=wo(Jr(e,"table")),o=Eo(e,a)
return a[o.y].reduce((function(e,t){return e&&"TH"===t.nodeName.toUpperCase()}),!0)?"col":a.map((function(e){return e[o.x]})).reduce((function(e,t){return e&&t&&"TH"===t.nodeName.toUpperCase()}),!0)?"row":"auto"},xo=function(e){return-1!==["col","auto"].indexOf(Co(e))},Ao=function(e){return["row","auto"].includes(Co(e))},ko=function(e){return e?e.replace(/\r\n/g,"\n").replace(/\u00A0/g," ").replace(/[\s]{2,}/g," ").trim():""},To=function(e){var t=e instanceof _t?e:Nn(e)
if(!t||Ha(t))return!1
switch(t.props.nodeName){case"a":case"area":if(t.hasAttr("href"))return!0
break
case"input":return"hidden"!==t.props.type
case"textarea":case"select":case"summary":case"button":return!0
case"details":return!vl(t,"summary").length}return!1}
function No(e){var t=e instanceof _t?e:Nn(e)
if(1!==t.props.nodeType)return!1
if(Ha(t))return!1
if(To(t))return!0
var n=t.attr("tabindex")
return!(!n||isNaN(parseInt(n,10)))}var Ro=bo("sectioning").map((function(e){return"".concat(e,":not([role])")})).join(", ")+" , main:not([role]), [role=article], [role=complementary], [role=main], [role=navigation], [role=region]"
function Bo(e){var t=ko(lo(e)),n=ko(co(e))
return!(!t&&!n)}var So={a:function(e){return e.hasAttr("href")?"link":null},area:function(e){return e.hasAttr("href")?"link":null},article:"article",aside:"complementary",body:"document",button:"button",datalist:"listbox",dd:"definition",dfn:"term",details:"group",dialog:"dialog",dt:"term",fieldset:"group",figure:"figure",footer:function(e){return Qn(e,Ro)?null:"contentinfo"},form:function(e){return Bo(e)?"form":null},h1:"heading",h2:"heading",h3:"heading",h4:"heading",h5:"heading",h6:"heading",header:function(e){return Qn(e,Ro)?null:"banner"},hr:"separator",img:function(e){var t=e.hasAttr("alt")&&!e.attr("alt"),n=Fo().find((function(t){return e.hasAttr(t)}))
return!t||n||No(e)?"img":"presentation"},input:function(e){var t
if(e.hasAttr("list")){var n=uo(e.actualNode,"list").filter((function(e){return!!e}))[0]
t=n&&"datalist"===n.nodeName.toLowerCase()}switch(e.props.type){case"checkbox":return"checkbox"
case"number":return"spinbutton"
case"radio":return"radio"
case"range":return"slider"
case"search":return t?"combobox":"searchbox"
case"button":case"image":case"reset":case"submit":return"button"
case"text":case"tel":case"url":case"email":case"":return t?"combobox":"textbox"
default:return"textbox"}},li:"listitem",main:"main",math:"math",menu:"list",nav:"navigation",ol:"list",optgroup:"group",option:"option",output:"status",progress:"progressbar",section:function(e){return Bo(e)?"region":null},select:function(e){return e.hasAttr("multiple")||parseInt(e.attr("size"))>1?"listbox":"combobox"},summary:"button",table:"table",tbody:"rowgroup",td:function(e){var t=Qn(e,"table"),n=yo(t)
return["grid","treegrid"].includes(n)?"gridcell":"cell"},textarea:"textbox",tfoot:"rowgroup",th:function(e){return xo(e)?"columnheader":Ao(e)?"rowheader":void 0},thead:"rowgroup",tr:"row",ul:"list"},Oo=function(e,t){var n=o(t)
if(Array.isArray(t)&&void 0!==e)return t.includes(e)
if("function"===n)return!!t(e)
if(null!=e){if(t instanceof RegExp)return t.test(e)
if(/^\/.*\/$/.test(t)){var r=t.substring(1,t.length-1)
return new RegExp(r).test(e)}}return t===e},_o=function(e,t){return Oo(!!Li(e),t)},Io=function(e,t){if("object"!==o(t)||Array.isArray(t)||t instanceof RegExp)throw new Error("Expect matcher to be an object")
return Object.keys(t).every((function(n){return Oo(e(n),t[n])}))},Po=function(e,t){return e instanceof _t||(e=Nn(e)),Io((function(t){return e.attr(t)}),t)},jo=function(e,t){return!!t(e)},Mo=function(e,t){return Oo(yo(e),t)},qo=function(e,t){return Oo(Yo(e),t)},Lo=function(e,t){return e instanceof _t||(e=Nn(e)),Oo(e.props.nodeName,t)},Ho=function(e,t){return e instanceof _t||(e=Nn(e)),Io((function(t){return e.props[t]}),t)},$o=function(e,t){return Oo(ei(e),t)},Vo={hasAccessibleName:_o,attributes:Po,condition:jo,explicitRole:Mo,implicitRole:qo,nodeName:Lo,properties:Ho,semanticRole:$o},zo=function e(t,n){return t instanceof _t||(t=Nn(t)),Array.isArray(n)?n.some((function(n){return e(t,n)})):"string"==typeof n?Yn(t,n):Object.keys(n).every((function(e){if(!Vo[e])throw new Error('Unknown matcher type "'.concat(e,'"'))
var r=Vo[e],a=n[e]
return r(t,a)}))},Uo=function(e,t){return zo(e,t)}
Uo.hasAccessibleName=_o,Uo.attributes=Po,Uo.condition=jo,Uo.explicitRole=Mo,Uo.fromDefinition=zo,Uo.fromFunction=Io,Uo.fromPrimative=Oo,Uo.implicitRole=qo,Uo.nodeName=Lo,Uo.properties=Ho,Uo.semanticRole=$o
var Wo=Uo,Go=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.noMatchAccessibleName,r=void 0!==n&&n,a=Do.htmlElms[e.props.nodeName]
if(!a)return{}
if(!a.variant)return a
var o=a.variant,i=R(a,l)
for(var u in o)if(o.hasOwnProperty(u)&&"default"!==u){for(var s=o[u],d=s.matches,p=R(s,c),f=Array.isArray(d)?d:[d],h=0;h<f.length&&r;h++)if(f[h].hasOwnProperty("hasAccessibleName"))return a
if(Wo(e,d))for(var m in p)p.hasOwnProperty(m)&&(i[m]=p[m])}for(var D in o.default)o.default.hasOwnProperty(D)&&void 0===i[D]&&(i[D]=o.default[D])
return i},Yo=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.chromium,r=e instanceof _t?e:Nn(e)
if(e=r.actualNode,!r)throw new ReferenceError("Cannot get implicit role of a node outside the current scope.")
var a=r.props.nodeName,o=So[a]
if(!o&&n){var i=Go(r),u=i.chromiumRole
return u||null}return"function"==typeof o?o(r):o||null},Qo={td:["tr"],th:["tr"],tr:["thead","tbody","tfoot","table"],thead:["table"],tbody:["table"],tfoot:["table"],li:["ol","ul"],dt:["dl","div"],dd:["dl","div"],div:["dl"]}
function Ko(e,t){var n=Qo[e.props.nodeName]
if(!n)return null
if(!e.parent){if(!e.actualNode)return null
throw new ReferenceError("Cannot determine role presentational inheritance of a required parent outside the current scope.")}if(!n.includes(e.parent.props.nodeName))return null
var r=yo(e.parent,t)
return["none","presentation"].includes(r)&&!Jo(e.parent)?r:r?null:Ko(e.parent,t)}function Xo(e,t){var n=t.chromium,r=R(t,d),a=Yo(e,{chromium:n})
return a?Ko(e,r)||a:null}function Jo(e){return Fo().some((function(t){return e.hasAttr(t)}))||No(e)}function Zo(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.noImplicit,r=R(t,p),a=e instanceof _t?e:Nn(e)
if(1!==a.props.nodeType)return null
var o=yo(a,r)
return o?["presentation","none"].includes(o)&&Jo(a)?n?null:Xo(a,r):o:n?null:Xo(a,r)}var ei=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.noPresentational,r=R(t,f),a=Zo(e,r)
return n&&["presentation","none"].includes(a)?null:a},ti=["iframe"],ni=function(e){var t=e instanceof _t?e:Nn(e)
return 1===t.props.nodeType&&e.hasAttr("title")?!Uo(t,ti)&&["none","presentation"].includes(ei(t))?"":t.attr("title"):""},ri=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.strict
if(1!==(e=e instanceof _t?e:Nn(e)).props.nodeType)return!1
var r=ei(e),a=Do.ariaRoles[r]
return!(!a||!a.nameFromContent)||!n&&(!a||["presentation","none"].includes(r))},ai=function(e){var t=e.actualNode,n=e.children
if(!n)throw new Error("getOwnedVirtual requires a virtual node")
if(e.hasAttr("aria-owns")){var r=uo(t,"aria-owns").filter((function(e){return!!e})).map((function(e){return i.utils.getNodeFromTree(e)}))
return[].concat(B(n),B(r))}return B(n)},oi=bo("phrasing").concat(["#text"])
function ii(e,t,n){var r=t.props.nodeName,a=Li(t,n)
return a?(oi.includes(r)||(" "!==a[0]&&(a+=" "),e&&" "!==e[e.length-1]&&(a=" "+a)),e+a):e}var ui=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Li.alreadyProcessed
t.startNode=t.startNode||e
var r=t,a=r.strict,o=r.inControlContext,i=r.inLabelledByContext,u=Go(e,{noMatchAccessibleName:!0}),s=u.contentTypes
if(n(e,t)||1!==e.props.nodeType||null!=s&&s.includes("embedded"))return""
if(!ri(e,{strict:a})&&!t.subtreeDescendant)return""
if(!a){var l=!o&&!i
t=O({subtreeDescendant:l},t)}return ai(e).reduce((function(e,n){return ii(e,n,t)}),"")}
function si(e){if(!e.attr("id"))return[]
if(!e.actualNode)throw new TypeError("Cannot resolve explicit label reference for non-DOM nodes")
return Kr({elm:"label",attr:"for",value:e.attr("id"),context:e.actualNode})}var li=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Li.alreadyProcessed
if(t.inControlContext||t.inLabelledByContext||n(e,t))return""
t.startNode||(t.startNode=e)
var r,a=O({inControlContext:!0},t),o=si(e),i=Qn(e,"label")
return i?(r=[].concat(B(o),[i.actualNode])).sort(Ws):r=o,r.map((function(e){return so(e,a)})).filter((function(e){return""!==e})).join(" ")},ci={submit:"Submit",image:"Submit",reset:"Reset",button:""}
function di(e,t){return t.attr(e)||""}function pi(e,t,n){var r=t.actualNode,a=[e=e.toLowerCase(),r.nodeName.toLowerCase()].join(","),o=r.querySelector(a)
return o&&o.nodeName.toLowerCase()===e?so(o,n):""}var fi={valueText:function(e){return e.actualNode.value||""},buttonDefaultText:function(e){var t=e.actualNode
return ci[t.type]||""},tableCaptionText:pi.bind(null,"caption"),figureText:pi.bind(null,"figcaption"),svgTitleText:pi.bind(null,"title"),fieldsetLegendText:pi.bind(null,"legend"),altText:di.bind(null,"alt"),tableSummaryText:di.bind(null,"summary"),titleText:ni,subtreeText:ui,labelText:li,singleSpace:function(){return" "},placeholderText:di.bind(null,"placeholder")}
function hi(e){return(Go(e,{noMatchAccessibleName:!0}).namingMethods||[]).map((function(e){return fi[e]}))}var mi=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.actualNode
if(1!==e.props.nodeType||["presentation","none"].includes(ei(e)))return""
var r=hi(e),a=r.reduce((function(n,r){return n||r(e,t)}),"")
return t.debug&&i.log(a||"{empty-value}",n,t),a},Di={accessibleNameFromFieldValue:["combobox","listbox","progressbar"]}
function gi(e){return e=e instanceof _t?e:Nn(e),vi(e)}var vi=ea((function(e,t){return!ca(e)&&(e.actualNode&&"area"===e.props.nodeName?!ma(e,vi):!va(e,{skipAncestors:!0,isAncestor:t})&&(!e.parent||vi(e.parent,!0)))})),yi=function e(t,n,r){var a=t instanceof _t?t:Nn(t),o=n?gi:Ta,i=!t.actualNode||t.actualNode&&o(t),u=a.children.map((function(t){var a=t.props,o=a.nodeType,u=a.nodeValue
if(3===o){if(u&&i)return u}else if(!r)return e(t,n)})).join("")
return ko(u)},bi=["button","checkbox","color","file","hidden","image","password","radio","reset","submit"],Fi=function(e){var t=(e=e instanceof _t?e:Nn(e)).props.nodeName
return"textarea"===t||"input"===t&&!bi.includes((e.attr("type")||"").toLowerCase())},wi=function(e){return"select"===(e=e instanceof _t?e:Nn(e)).props.nodeName},Ei=function(e){return"textbox"===yo(e)},Ci=function(e){return"listbox"===yo(e)},xi=function(e){return"combobox"===yo(e)},Ai=["progressbar","scrollbar","slider","spinbutton"],ki=function(e){var t=yo(e)
return Ai.includes(t)},Ti=["textbox","progressbar","scrollbar","slider","spinbutton","combobox","listbox"],Ni={nativeTextboxValue:function(e){var t=e instanceof _t?e:Nn(e)
return Fi(t)&&t.props.value||""},nativeSelectValue:function(e){var t=e instanceof _t?e:Nn(e)
if(!wi(t))return""
var n=vl(t,"option"),r=n.filter((function(e){return e.props.selected}))
return r.length||r.push(n[0]),r.map((function(e){return yi(e)})).join(" ")||""},ariaTextboxValue:function(e){var t=e instanceof _t?e:Nn(e),n=t.actualNode
return Ei(t)?!n||n&&!va(n)?yi(t,!0):n.textContent:""},ariaListboxValue:Ri,ariaComboboxValue:function(e,t){var n=e instanceof _t?e:Nn(e)
if(!xi(n))return""
var r=ai(n).filter((function(e){return"listbox"===ei(e)}))[0]
return r?Ri(r,t):""},ariaRangeValue:function(e){var t=e instanceof _t?e:Nn(e)
if(!ki(t)||!t.hasAttr("aria-valuenow"))return""
var n=+t.attr("aria-valuenow")
return isNaN(n)?"0":String(n)}}
function Ri(e,t){var n=e instanceof _t?e:Nn(e)
if(!Ci(n))return""
var r=ai(n).filter((function(e){return"option"===ei(e)&&"true"===e.attr("aria-selected")}))
return 0===r.length?"":Li(r[0],t)}var Bi=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.actualNode,r=Di.accessibleNameFromFieldValue||[],a=ei(e)
if(t.startNode===e||!Ti.includes(a)||r.includes(a))return""
var o=Object.keys(Ni).map((function(e){return Ni[e]})),i=o.reduce((function(n,r){return n||r(e,t)}),"")
return t.debug&&St(i||"{empty-value}",n,t),i},Si=function(){return/[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26F9(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC3\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC08\uDC26](?:\u200D\u2B1B)?|[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC2\uDECE-\uDEDB\uDEE0-\uDEE8]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g},Oi=function(e,t){var n=t.emoji,r=t.nonBmp,a=t.punctuations
return n?/[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26F9(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC3\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC08\uDC26](?:\u200D\u2B1B)?|[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC2\uDECE-\uDEDB\uDEE0-\uDEE8]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g.test(e):r?/[\u1D00-\u1D7F\u1D80-\u1DBF\u1DC0-\u1DFF\u20A0-\u20CF\u20D0-\u20FF\u2100-\u214F\u2150-\u218F\u2190-\u21FF\u2200-\u22FF\u2300-\u23FF\u2400-\u243F\u2440-\u245F\u2460-\u24FF\u2500-\u257F\u2580-\u259F\u25A0-\u25FF\u2600-\u26FF\u2700-\u27BF\uE000-\uF8FF]/g.test(e)||/[\uDB80-\uDBBF][\uDC00-\uDFFF]/g.test(e):!!a&&/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&\xa3\xa2\xa5\xa7\u20ac()*+,\-.\/:;<=>?@\[\]^_`{|}~\xb1]/g.test(e)},_i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.15,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,o=e.actualNode.nodeValue.trim()
if(!ko(o)||Oi(o,{emoji:!0,nonBmp:!0}))return!1
var i=Tn.get("canvasContext",(function(){return a.createElement("canvas").getContext("2d")})),u=i.canvas
Tn.get("fonts")||Tn.set("fonts",{})
var s=Tn.get("fonts"),l=n.getComputedStyle(e.parent.actualNode),c=l.getPropertyValue("font-family")
s[c]||(s[c]={occurrences:0,numLigatures:0})
var d=s[c]
if(d.occurrences>=r){if(d.numLigatures/d.occurrences==1)return!0
if(0===d.numLigatures)return!1}d.occurrences++
var p=30,f="".concat(p,"px ").concat(c)
i.font=f
var h=o.charAt(0),m=i.measureText(h).width
if(m<30){var D=30/m
m*=D,f="".concat(p*=D,"px ").concat(c)}u.width=m,u.height=p,i.font=f,i.textAlign="left",i.textBaseline="top",i.fillText(h,0,0)
var g=new Uint32Array(i.getImageData(0,0,m,p).data.buffer)
if(!g.some((function(e){return e})))return d.numLigatures++,!0
i.clearRect(0,0,m,p),i.fillText(o,0,0)
var v=new Uint32Array(i.getImageData(0,0,m,p).data.buffer),y=g.reduce((function(e,t,n){return 0===t&&0===v[n]||0!==t&&0!==v[n]?e:++e}),0),b=o.split("").reduce((function(e,t){return e+i.measureText(t).width}),0),F=i.measureText(o).width,w=y/g.length,E=1-F/b
return w>=t&&E>=t&&(d.numLigatures++,!0)}
function Ii(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
if(t=qi(e,t),ji(e,t))return""
if(Mi(e,t))return""
var n=[lo,co,mi,Bi,ui,Pi,ni],r=n.reduce((function(n,r){return t.startNode===e&&(n=ko(n)),""!==n?n:r(e,t)}),"")
return t.debug&&i.log(r||"{empty-value}",e.actualNode,t),r}function Pi(e){return 3!==e.props.nodeType?"":e.props.nodeValue}function ji(e,t){return!!e&&1===e.props.nodeType&&!t.includeHidden&&!gi(e)}function Mi(e,t){var n,r=t.ignoreIconLigature,a=t.pixelThreshold,o=null!==(n=t.occurrenceThreshold)&&void 0!==n?n:t.occuranceThreshold
return!(3!==e.props.nodeType||!r)&&_i(e,a,o)}function qi(e,t){return t.startNode||(t=O({startNode:e},t)),1===e.props.nodeType&&t.inLabelledByContext&&void 0===t.includeHidden&&(t=O({includeHidden:!gi(e)},t)),t}Ii.alreadyProcessed=function(e,t){return t.processed=t.processed||[],!!t.processed.includes(e)||(t.processed.push(e),!1)}
var Li=Ii,Hi=function(e,t){var n=t.emoji,r=t.nonBmp,a=t.punctuations
return n&&(e=e.replace(/[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26F9(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC3\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC08\uDC26](?:\u200D\u2B1B)?|[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC2\uDECE-\uDEDB\uDEE0-\uDEE8]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g,"")),r&&(e=(e=e.replace(/[\u1D00-\u1D7F\u1D80-\u1DBF\u1DC0-\u1DFF\u20A0-\u20CF\u20D0-\u20FF\u2100-\u214F\u2150-\u218F\u2190-\u21FF\u2200-\u22FF\u2300-\u23FF\u2400-\u243F\u2440-\u245F\u2460-\u24FF\u2500-\u257F\u2580-\u259F\u25A0-\u25FF\u2600-\u26FF\u2700-\u27BF\uE000-\uF8FF]/g,"")).replace(/[\uDB80-\uDBBF][\uDC00-\uDFFF]/g,"")),a&&(e=e.replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&\xa3\xa2\xa5\xa7\u20ac()*+,\-.\/:;<=>?@\[\]^_`{|}~\xb1]/g,"")),e},$i=function(e){if(!e.length)return 0
if(["x","i"].includes(e))return 0
var t=Hi(e,{emoji:!0,nonBmp:!0,punctuations:!0})
return ko(t)?1:0},Vi={stateTerms:["on","off"],standaloneTerms:["name","honorific-prefix","given-name","additional-name","family-name","honorific-suffix","nickname","username","new-password","current-password","organization-title","organization","street-address","address-line1","address-line2","address-line3","address-level4","address-level3","address-level2","address-level1","country","country-name","postal-code","cc-name","cc-given-name","cc-additional-name","cc-family-name","cc-number","cc-exp","cc-exp-month","cc-exp-year","cc-csc","cc-type","transaction-currency","transaction-amount","language","bday","bday-day","bday-month","bday-year","sex","url","photo","one-time-code"],qualifiers:["home","work","mobile","fax","pager"],qualifiedTerms:["tel","tel-country-code","tel-national","tel-area-code","tel-local","tel-local-prefix","tel-local-suffix","tel-extension","email","impp"],locations:["billing","shipping"]},zi=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.looseTyped,r=void 0!==n&&n,a=t.stateTerms,o=void 0===a?[]:a,i=t.locations,u=void 0===i?[]:i,s=t.qualifiers,l=void 0===s?[]:s,c=t.standaloneTerms,d=void 0===c?[]:c,p=t.qualifiedTerms,f=void 0===p?[]:p
if(e=e.toLowerCase().trim(),(o=o.concat(Vi.stateTerms)).includes(e)||""===e)return!0
l=l.concat(Vi.qualifiers),u=u.concat(Vi.locations),d=d.concat(Vi.standaloneTerms),f=f.concat(Vi.qualifiedTerms)
var h=e.split(/\s+/g)
if("webauthn"===h[h.length-1]&&(h.pop(),0===h.length))return!1
if(!r&&(h[0].length>8&&"section-"===h[0].substr(0,8)&&h.shift(),u.includes(h[0])&&h.shift(),l.includes(h[0])&&(h.shift(),d=[]),1!==h.length))return!1
var m=h[h.length-1]
return d.includes(m)||f.includes(m)},Ui=function(e){var t
return e.attr("aria-labelledby")&&(t=uo(e.actualNode,"aria-labelledby").map((function(e){var t=Nn(e)
return t?yi(t):""})).join(" ").trim())||(t=e.attr("aria-label"))&&(t=ko(t))?t:null},Wi=function(e,t,n){return e=Nn(e),yi(e,t,n)},Gi=function(e){var t,n
if(n=Ui(e))return n
if(e.attr("id")){if(!e.actualNode)throw new TypeError("Cannot resolve explicit label reference for non-DOM nodes")
var r=Kt(e.attr("id"))
if(n=(t=Qr(e.actualNode).querySelector('label[for="'+r+'"]'))&&Wi(t,!0))return n}return(n=(t=Qn(e,"label"))&&yi(t,!0))||null},Yi=function(e){return e=Nn(e),Gi(e)},Qi=[{matches:[{nodeName:"textarea"},{nodeName:"input",properties:{type:["text","password","search","tel","email","url"]}}],namingMethods:"labelText"},{matches:{nodeName:"input",properties:{type:["button","submit","reset"]}},namingMethods:["valueText","titleText","buttonDefaultText"]},{matches:{nodeName:"input",properties:{type:"image"}},namingMethods:["altText","valueText","labelText","titleText","buttonDefaultText"]},{matches:"button",namingMethods:"subtreeText"},{matches:"fieldset",namingMethods:"fieldsetLegendText"},{matches:"OUTPUT",namingMethods:"subtreeText"},{matches:[{nodeName:"select"},{nodeName:"input",properties:{type:/^(?!text|password|search|tel|email|url|button|submit|reset)/}}],namingMethods:"labelText"},{matches:"summary",namingMethods:"subtreeText"},{matches:"figure",namingMethods:["figureText","titleText"]},{matches:"img",namingMethods:"altText"},{matches:"table",namingMethods:["tableCaptionText","tableSummaryText"]},{matches:["hr","br"],namingMethods:["titleText","singleSpace"]}],Ki=function e(t){var n=Ta(t),r=[]
return t.children.forEach((function(t){3===t.actualNode.nodeType?n&&r.push(t):r=r.concat(e(t))})),r},Xi=ea((function(e){var t=Nn(e),n=t.boundingClientRect,r=[],o=ra(t)
return e.childNodes.forEach((function(e){if(3===e.nodeType&&""!==ko(e.nodeValue)){var t=function(e){var t=a.createRange()
return t.selectNodeContents(e),Array.from(t.getClientRects())}(e);(function(e,t){return e.some((function(e){return!Ba(Ja(e),t)}))})(t,n)||r.push.apply(r,B(function(e,t){var n=[]
return e.forEach((function(e){if(!(e.width<1||e.height<1)){var r=t.reduce((function(e,t){return e&&Ka(e,t.boundingClientRect)}),e)
r&&n.push(r)}})),n}(t,o)))}})),r.length?r:[n]})),Ji=function(e){Sa()
var t=Nn(e)._grid
return t?Xi(e).map((function(e){return ro(t,e)})):[]},Zi=["checkbox","img","meter","progressbar","scrollbar","radio","slider","spinbutton","textbox"],eu=function(e){var t=e instanceof _t?e:Nn(e),n=i.commons.aria.getExplicitRole(t)
if(n)return-1!==Zi.indexOf(n)
switch(t.props.nodeName){case"img":case"iframe":case"object":case"video":case"audio":case"canvas":case"svg":case"math":case"button":case"select":case"textarea":case"keygen":case"progress":case"meter":return!0
case"input":return"hidden"!==t.props.type
default:return!1}},tu=["head","title","template","script","style","iframe","object","video","audio","noscript"]
function nu(e){return!tu.includes(e.props.nodeName)&&e.children.some((function(e){var t=e.props
return 3===t.nodeType&&t.nodeValue.trim()}))}var ru=function e(t,n,r){return nu(t)||eu(t.actualNode)||!r&&!!Ui(t)||!n&&t.children.some((function(t){return 1===t.actualNode.nodeType&&e(t)}))},au=function(e,t,n){return e=Nn(e),ru(e,t,n)}
function ou(e){return!(void 0!==e.children&&!nu(e))||(1===e.props.nodeType&&eu(e)?!!i.commons.text.accessibleTextVirtual(e):e.children.some((function(e){return!e.attr("lang")&&ou(e)&&!va(e)})))}var iu=function(e){return parseInt(e.getAttribute("tabindex"),10)>-1&&No(e)&&!To(e)}
function uu(e,t){var r=e instanceof _t?e:Nn(e),a=e instanceof n.Node?e:null==r?void 0:r.actualNode
return r?(void 0===r._isHiddenWithCSS&&(r._isHiddenWithCSS=su(a,t)),r._isHiddenWithCSS):su(a,t)}function su(e,t){if(9===e.nodeType)return!1
if(11===e.nodeType&&(e=e.host),["STYLE","SCRIPT"].includes(e.nodeName.toUpperCase()))return!1
var r=n.getComputedStyle(e,null)
if(!r)throw new Error("Style does not exist for the given element.")
if("none"===r.getPropertyValue("display"))return!0
var a=["hidden","collapse"],o=r.getPropertyValue("visibility")
if(a.includes(o)&&!t)return!0
if(a.includes(o)&&t&&a.includes(t))return!0
var i=Fa(e)
return!(!i||a.includes(o))&&uu(i,o)}var lu=uu,cu=function(e){var t=e.doctype
return null!==t&&"html"===t.name&&!t.publicId&&!t.systemId}
function du(e){var t=e instanceof _t?e:Nn(e)
return 1===t.props.nodeType&&!(parseInt(t.attr("tabindex",10))<=-1)&&No(t)}var pu=function(e){var t;(e instanceof _t||null!==(t=n)&&void 0!==t&&t.Node&&e instanceof n.Node)&&(e=i.commons.aria.getRole(e))
var r=Do.ariaRoles[e]
return(null==r?void 0:r.type)||null}
function fu(e,t){!1!==t(e.actualNode)&&e.children.forEach((function(e){return fu(e,t)}))}var hu=["block","list-item","table","flex","grid","inline-block"]
function mu(e){var t=n.getComputedStyle(e).getPropertyValue("display")
return hu.includes(t)||"table-"===t.substr(0,6)}var Du=function(e,t){if(mu(e))return!1
var n=function(e){for(var t=Fa(e);t&&!mu(t);)t=Fa(t)
return Nn(t)}(e),r="",a="",o=0
return fu(n,(function(t){if(2===o)return!1
if(3===t.nodeType&&(r+=t.nodeValue),1===t.nodeType){var n=(t.nodeName||"").toUpperCase()
if(t===e&&(o=1),["BR","HR"].includes(n))0===o?(r="",a=""):o=2
else{if("none"===t.style.display||"hidden"===t.style.overflow||!["",null,"none"].includes(t.style.float)||!["",null,"relative"].includes(t.style.position))return!1
if("widget"===pu(t))return a+=t.textContent,!1}}})),r=ko(r),null!=t&&t.noLengthCompare?0!==r.length:(a=ko(a),r.length>a.length)},gu=function(e){var t=(e=e||{}).modalPercent||.75
if(Tn.get("isModalOpen"))return Tn.get("isModalOpen")
if(ul(i._tree[0],"dialog, [role=dialog], [aria-modal=true]",Ta).length)return Tn.set("isModalOpen",!0),!0
for(var r=Ca(n),u=r.width*t,s=r.height*t,l=(r.width-u)/2,c=(r.height-s)/2,d=[{x:l,y:c},{x:r.width-l,y:c},{x:r.width/2,y:r.height/2},{x:l,y:r.height-c},{x:r.width-l,y:r.height-c}].map((function(e){return Array.from(a.elementsFromPoint(e.x,e.y))})),p=function(e){var t=d[e].find((function(e){var t=n.getComputedStyle(e)
return parseInt(t.width,10)>=u&&parseInt(t.height,10)>=s&&"none"!==t.getPropertyValue("pointer-events")&&("absolute"===t.position||"fixed"===t.position)}))
if(t&&d.every((function(e){return e.includes(t)})))return Tn.set("isModalOpen",!0),{v:!0}},f=0;f<d.length;f++){var h=p(f)
if("object"===o(h))return h.v}Tn.set("isModalOpen",void 0)}
function vu(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=e.ownerDocument.createRange()
n.setStart(e,0),n.setEnd(e,e.childNodes.length)
var r,a=0,o=0,i=H(n.getClientRects())
try{for(i.s();!(r=i.n()).done;){var u=r.value
if(!(u.height<=t))if(a>u.top+t)a=Math.max(a,u.bottom)
else{if(0!==o)return!0
a=u.bottom,o++}}}catch(e){i.e(e)}finally{i.f()}return!1}var yu=function(e){return e instanceof n.Node},bu={},Fu={set:function(e,t){if("string"!=typeof e)throw new Error("Incomplete data: key must be a string")
return t&&(bu[e]=t),bu[e]},get:function(e){return bu[e]},clear:function(){bu={}}},wu=function(e,t){var r=e.nodeName.toUpperCase()
if(["IMG","CANVAS","OBJECT","IFRAME","VIDEO","SVG"].includes(r))return Fu.set("bgColor","imgNode"),!0
var a=(t=t||n.getComputedStyle(e)).getPropertyValue("background-image"),o="none"!==a
if(o){var i=/gradient/.test(a)
Fu.set("bgColor",i?"bgGradient":"bgImage")}return o}
function Eu(e,t,n){if(/%$/.test(t))return 3===n?parseFloat(t)/100:255*parseFloat(t)/100
if("h"===e[n]){if(/turn$/.test(t))return 360*parseFloat(t)
if(/rad$/.test(t))return 57.3*parseFloat(t)}return parseFloat(t)}function Cu(e){var t=_(e,4),n=t[0],r=t[1],a=t[2],o=t[3]
r/=255,a/=255
var i=(1-Math.abs(2*a-1))*r,u=i*(1-Math.abs(n/60%2-1)),s=a-i/2
return(n<60?[i,u,0]:n<120?[u,i,0]:n<180?[0,i,u]:n<240?[0,u,i]:n<300?[u,0,i]:[i,0,u]).map((function(e){return Math.round(255*(e+s))})).concat(o)}var xu=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1
this.red=e,this.green=t,this.blue=n,this.alpha=r,this.toHexString=function(){var e=Math.round(this.red).toString(16),t=Math.round(this.green).toString(16),n=Math.round(this.blue).toString(16)
return"#"+(this.red>15.5?e:"0"+e)+(this.green>15.5?t:"0"+t)+(this.blue>15.5?n:"0"+n)},this.toJSON=function(){return{red:this.red,green:this.green,blue:this.blue,alpha:this.alpha}}
var a=/^#[0-9a-f]{3,8}$/i,o=/^((?:rgb|hsl)a?)\s*\(([^\)]*)\)/i
this.parseString=function(e){if(Do.cssColors[e]||"transparent"===e){var t=_(Do.cssColors[e]||[0,0,0],3),n=t[0],r=t[1],i=t[2]
return this.red=n,this.green=r,this.blue=i,this.alpha="transparent"===e?0:1,this}if(e.match(o))return this.parseColorFnString(e),this
if(e.match(a))return this.parseHexString(e),this
throw new Error('Unable to parse color "'.concat(e,'"'))},this.parseRgbString=function(e){if("transparent"===e)return this.red=0,this.green=0,this.blue=0,void(this.alpha=0)
this.parseColorFnString(e)},this.parseHexString=function(e){if(e.match(a)&&![6,8].includes(e.length)){if((e=e.replace("#","")).length<6){var t=_(e,4),n=t[0],r=t[1],o=t[2],i=t[3]
e=n+n+r+r+o+o,i&&(e+=i+i)}var u=e.match(/.{1,2}/g)
this.red=parseInt(u[0],16),this.green=parseInt(u[1],16),this.blue=parseInt(u[2],16),u[3]?this.alpha=parseInt(u[3],16)/255:this.alpha=1}},this.parseColorFnString=function(e){var t=_(e.match(o)||[],3),n=t[1],r=t[2]
if(n&&r){var a=r.split(/\s*[,\/\s]\s*/).map((function(e){return e.replace(",","").trim()})).filter((function(e){return""!==e})).map((function(e,t){return Eu(n,e,t)}))
"hsl"===n.substr(0,3)&&(a=Cu(a)),this.red=a[0],this.green=a[1],this.blue=a[2],this.alpha="number"==typeof a[3]?a[3]:1}},this.getRelativeLuminance=function(){var e=this.red/255,t=this.green/255,n=this.blue/255
return.2126*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.7152*(t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))+.0722*(n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4))}},Au=function(e){var t=new xu
if(t.parseString(e.getPropertyValue("background-color")),0!==t.alpha){var n=e.getPropertyValue("opacity")
t.alpha=t.alpha*n}return t},ku=function(e){var t=n.getComputedStyle(e)
return wu(e,t)||1===Au(t).alpha}
function Tu(e){if(!e.href)return!1
var t=Tn.get("firstPageLink",Nu)
return!t||e.compareDocumentPosition(t.actualNode)===e.DOCUMENT_POSITION_FOLLOWING}function Nu(){return(n.location.origin?vl(i._tree,'a[href]:not([href^="javascript:"])').find((function(e){return!za(e.actualNode)})):vl(i._tree,'a:not([href^="#"]):not([href^="/#"]):not([href^="javascript:"])')[0])||null}var Ru=/rect\s*\(([0-9]+)px,?\s*([0-9]+)px,?\s*([0-9]+)px,?\s*([0-9]+)px\s*\)/,Bu=/(\w+)\((\d+)/,Su=function e(t,r,a){var o
if(!t)throw new TypeError("Cannot determine if element is visible for non-DOM nodes")
var u=t instanceof _t?t:Nn(t)
t=u?u.actualNode:t
var s="_isVisible"+(r?"ScreenReader":""),l=null!==(o=n.Node)&&void 0!==o?o:{},c=l.DOCUMENT_NODE,d=l.DOCUMENT_FRAGMENT_NODE,p=u?u.props.nodeType:t.nodeType,f=u?u.props.nodeName:t.nodeName.toLowerCase()
if(u&&void 0!==u[s])return u[s]
if(p===c)return!0
if(["style","script","noscript","template"].includes(f))return!1
if(t&&p===d&&(t=t.host),r&&"true"===(u?u.attr("aria-hidden"):t.getAttribute("aria-hidden")))return!1
if(!t){var h=u.parent,m=!0
return h&&(m=e(h,r,!0)),u&&(u[s]=m),m}var D=n.getComputedStyle(t,null)
if(null===D)return!1
if("area"===f)return function(t,n,r){var a=Jr(t,"map")
if(!a)return!1
var o=a.getAttribute("name")
if(!o)return!1
var u=Qr(t)
if(!u||9!==u.nodeType)return!1
var s=vl(i._tree,'img[usemap="#'.concat(Kt(o),'"]'))
return!(!s||!s.length)&&s.some((function(t){return e(t.actualNode,n,r)}))}(t,r,a)
if("none"===D.getPropertyValue("display"))return!1
var g=parseInt(D.getPropertyValue("height")),v=parseInt(D.getPropertyValue("width")),y=Os(t),b=y&&0===g,F=y&&0===v,w="absolute"===D.getPropertyValue("position")&&(g<2||v<2)&&"hidden"===D.getPropertyValue("overflow")
if(!r&&(function(e){var t=e.getPropertyValue("clip").match(Ru),n=e.getPropertyValue("clip-path").match(Bu)
if(t&&5===t.length){var r=e.getPropertyValue("position")
if(["fixed","absolute"].includes(r))return t[3]-t[1]<=0&&t[2]-t[4]<=0}if(n){var a=n[1],o=parseInt(n[2],10)
switch(a){case"inset":return o>=50
case"circle":return 0===o}}return!1}(D)||"0"===D.getPropertyValue("opacity")||b||F||w))return!1
if(!a&&("hidden"===D.getPropertyValue("visibility")||!r&&Aa(t)))return!1
var E=t.assignedSlot?t.assignedSlot:t.parentNode,C=!1
return E&&(C=e(E,r,!0)),u&&(u[s]=C),C},Ou=function(e,t){for(var r=["fixed","sticky"],a=[],o=!1,i=0;i<e.length;++i){var u=e[i]
u===t&&(o=!0)
var s=n.getComputedStyle(u)
o||-1===r.indexOf(s.position)?a.push(u):a=[]}return a}
function _u(e,t){var n=Iu(t)
do{var r=Iu(e)
if(r===n||r===t)return Pu(e,t)
e=r}while(e)
return!1}function Iu(e){for(var t=Nn(e).parent;t;){if(Os(t.actualNode))return t.actualNode
t=t.parent}}function Pu(e,t){var r=n.getComputedStyle(t),a=r.getPropertyValue("overflow")
if("inline"===r.getPropertyValue("display"))return!0
var o=Array.from(e.getClientRects()),i=t.getBoundingClientRect(),u={left:i.left,top:i.top,width:i.width,height:i.height}
return(["scroll","auto"].includes(a)||t instanceof n.HTMLHtmlElement)&&(u.width=t.scrollWidth,u.height=t.scrollHeight),1===o.length&&"hidden"===a&&"nowrap"===r.getPropertyValue("white-space")&&(o[0]=u),o.some((function(e){return!(Math.ceil(e.left)<Math.floor(u.left)||Math.ceil(e.top)<Math.floor(u.top)||Math.floor(e.left+e.width)>Math.ceil(u.left+u.width)||Math.floor(e.top+e.height)>Math.ceil(u.top+u.height))}))}var ju=function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0
if(o>999)throw new Error("Infinite loop detected")
return Array.from(r.elementsFromPoint(t,n)||[]).filter((function(e){return Qr(e)===r})).reduce((function(r,a){if(Wr(a)){var i=e(t,n,a.shadowRoot,o+1);(r=r.concat(i)).length&&_u(r[0],a)&&r.push(a)}else r.push(a)
return r}),[])}
function Mu(e){var t={}
if(!e||!e.length)return t
var n=e.substring(1).split("&")
if(!n||!n.length)return t
for(var r=0;r<n.length;r++){var a=_(n[r].split("="),2),o=a[0],i=a[1],u=void 0===i?"":i
t[decodeURIComponent(o)]=decodeURIComponent(u)}return t}function qu(e){if(!e)return""
var t=e.match(/#!?\/?/g)
return t?"#"===_(t,1)[0]?"":e:""}var Lu,Hu,$u=function(e,t){if(e.hasAttribute(t)){var n=e.nodeName.toUpperCase(),r=e;["A","AREA"].includes(n)&&!e.ownerSVGElement||((r=a.createElement("a")).href=e.getAttribute(t))
var o,i=["https:","ftps:"].includes(r.protocol)?r.protocol.replace(/s:$/,":"):r.protocol,u=function(e){var t=e.split("/").pop()
return t&&-1!==t.indexOf(".")?{pathname:e.replace(t,""),filename:/index./.test(t)?"":t}:{pathname:e,filename:""}}(/^\//.test(r.pathname)?r.pathname:"/".concat(r.pathname)),s=u.pathname,l=u.filename
return{protocol:i,hostname:r.hostname,port:(o=r.port,["443","80"].includes(o)?"":o),pathname:/\/$/.test(s)?s:"".concat(s,"/"),search:Mu(r.search),hash:qu(r.hash),filename:l}}},Vu=function(e,t){var r=t.getBoundingClientRect(),a=r.top,o=r.left,i=a-t.scrollTop,u=a-t.scrollTop+t.scrollHeight,s=o-t.scrollLeft,l=o-t.scrollLeft+t.scrollWidth
if(e.left>l&&e.left>r.right||e.top>u&&e.top>r.bottom||e.right<s&&e.right<r.left||e.bottom<i&&e.bottom<r.top)return!1
var c=n.getComputedStyle(t)
return!(e.left>r.right||e.top>r.bottom)||"scroll"===c.overflow||"auto"===c.overflow||t instanceof n.HTMLBodyElement||t instanceof n.HTMLHtmlElement},zu=0,Uu=function(e){C(r,e)
var t=A(r)
function r(e,n,a){var o
if(j(this,r),(o=t.call(this)).shadowId=a,o.children=[],o.actualNode=e,o.parent=n,n||(zu=0),o.nodeIndex=zu++,o._isHidden=null,o._cache={},void 0===Lu&&(Lu=un(e.ownerDocument)),o._isXHTML=Lu,"input"===e.nodeName.toLowerCase()){var i=e.getAttribute("type")
i=o._isXHTML?i:(i||"").toLowerCase(),Rl().includes(i)||(i="text"),o._type=i}return Tn.get("nodeMap")&&Tn.get("nodeMap").set(e,T(o)),o}return q(r,[{key:"props",get:function(){if(!this._cache.hasOwnProperty("props")){var e=this.actualNode,t=e.nodeType,n=e.nodeName,r=e.id,a=e.multiple,o=e.nodeValue,i=e.value,u=e.selected
this._cache.props={nodeType:t,nodeName:this._isXHTML?n:n.toLowerCase(),id:r,type:this._type,multiple:a,nodeValue:o,value:i,selected:u}}return this._cache.props}},{key:"attr",value:function(e){return"function"!=typeof this.actualNode.getAttribute?null:this.actualNode.getAttribute(e)}},{key:"hasAttr",value:function(e){return"function"==typeof this.actualNode.hasAttribute&&this.actualNode.hasAttribute(e)}},{key:"attrNames",get:function(){var e
return this._cache.hasOwnProperty("attrNames")||(e=this.actualNode.attributes instanceof n.NamedNodeMap?this.actualNode.attributes:this.actualNode.cloneNode(!1).attributes,this._cache.attrNames=Array.from(e).map((function(e){return e.name}))),this._cache.attrNames}},{key:"getComputedStylePropertyValue",value:function(e){var t="computedStyle_"+e
return this._cache.hasOwnProperty(t)||(this._cache.hasOwnProperty("computedStyle")||(this._cache.computedStyle=n.getComputedStyle(this.actualNode)),this._cache[t]=this._cache.computedStyle.getPropertyValue(e)),this._cache[t]}},{key:"isFocusable",get:function(){return this._cache.hasOwnProperty("isFocusable")||(this._cache.isFocusable=No(this.actualNode)),this._cache.isFocusable}},{key:"tabbableElements",get:function(){return this._cache.hasOwnProperty("tabbableElements")||(this._cache.tabbableElements=oo(this)),this._cache.tabbableElements}},{key:"clientRects",get:function(){return this._cache.hasOwnProperty("clientRects")||(this._cache.clientRects=Array.from(this.actualNode.getClientRects()).filter((function(e){return e.width>0}))),this._cache.clientRects}},{key:"boundingClientRect",get:function(){return this._cache.hasOwnProperty("boundingClientRect")||(this._cache.boundingClientRect=this.actualNode.getBoundingClientRect()),this._cache.boundingClientRect}}]),r}(_t),Wu=function(e){return(e||"").trim().replace(/\s{2,}/g," ").split(" ")},Gu=" [idsMap]"
function Yu(e,t,n){var r=e[0]._selectorMap
if(r){for(var a=e[0].shadowId,o=0;o<t.length;o++)if(t[o].length>1&&t[o].some((function(e){return Qu(e)})))return
var i=new Set
t.forEach((function(e){var t,n=function(e,t,n){var r=e[e.length-1],a=null,o=e.length>1||!!r.pseudos||!!r.classes
if(Qu(r))a=t["*"]
else{if(r.id){var i
if(!t[Gu]||null===(i=t[Gu][r.id])||void 0===i||!i.length)return
a=t[Gu][r.id].filter((function(e){return e.shadowId===n}))}if(r.tag&&"*"!==r.tag){var u
if(null===(u=t[r.tag])||void 0===u||!u.length)return
var s=t[r.tag]
a=a?Ku(s,a):s}if(r.classes){var l
if(null===(l=t["[class]"])||void 0===l||!l.length)return
var c=t["[class]"]
a=a?Ku(c,a):c}if(r.attributes)for(var d=0;d<r.attributes.length;d++){var p,f=r.attributes[d]
if("attrValue"===f.type&&(o=!0),null===(p=t["[".concat(f.key,"]")])||void 0===p||!p.length)return
var h=t["[".concat(f.key,"]")]
a=a?Ku(h,a):h}}return{nodes:a,isComplexSelector:o}}(e,r,a)
null==n||null===(t=n.nodes)||void 0===t||t.forEach((function(t){n.isComplexSelector&&!Gn(t,e)||i.add(t)}))}))
var u=[]
return i.forEach((function(e){return u.push(e)})),n&&(u=u.filter(n)),u.sort((function(e,t){return e.nodeIndex-t.nodeIndex}))}}function Qu(e){return"*"===e.tag&&!e.attributes&&!e.id&&!e.classes}function Ku(e,t){return e.filter((function(e){return t.includes(e)}))}function Xu(e,t,n){n[e]=n[e]||[],n[e].push(t)}function Ju(e,t){1===e.props.nodeType&&(Xu(e.props.nodeName,e,t),Xu("*",e,t),e.attrNames.forEach((function(n){"id"===n&&(t[Gu]=t[Gu]||{},Wu(e.attr(n)).forEach((function(n){Xu(n,e,t[Gu])}))),Xu("[".concat(n,"]"),e,t)})))}function Zu(e,t,n){var r=new Uu(e,t,n)
return Ju(r,Tn.get("selectorMap")),r}function es(e,t,r){var a,o,i
function u(e,n,r){var a=es(n,t,r)
return a&&(e=e.concat(a)),e}return e.documentElement&&(e=e.documentElement),i=e.nodeName.toLowerCase(),Wr(e)?(Hu=!0,a=Zu(e,r,t),t="a"+Math.random().toString().substring(2),o=Array.from(e.shadowRoot.childNodes),a.children=o.reduce((function(e,t){return u(e,t,a)}),[]),[a]):"content"===i&&"function"==typeof e.getDistributedNodes?(o=Array.from(e.getDistributedNodes())).reduce((function(e,t){return u(e,t,r)}),[]):"slot"===i&&"function"==typeof e.assignedNodes?((o=Array.from(e.assignedNodes())).length||(o=function(e){var t=[]
for(e=e.firstChild;e;)t.push(e),e=e.nextSibling
return t}(e)),n.getComputedStyle(e),o.reduce((function(e,t){return u(e,t,r)}),[])):1===e.nodeType?(a=Zu(e,r,t),o=Array.from(e.childNodes),a.children=o.reduce((function(e,t){return u(e,t,a)}),[]),[a]):3===e.nodeType?[Zu(e,r)]:void 0}var ts=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.documentElement,t=arguments.length>1?arguments[1]:void 0
Hu=!1
var n={}
Tn.set("nodeMap",new WeakMap),Tn.set("selectorMap",n)
var r=es(e,t,null)
return r[0]._selectorMap=n,r[0]._hasShadowRoot=Hu,r},ns=function(e){return e?e.trim().split("-")[0].toLowerCase():""},rs=function(e){var t={}
return t.none=e.none.concat(e.all),t.any=e.any,Object.keys(t).map((function(e){if(t[e].length){var n=i._audit.data.failureSummaries[e]
return n&&"function"==typeof n.failureMessage?n.failureMessage(t[e].map((function(e){return e.message||""}))):void 0}})).filter((function(e){return void 0!==e})).join("\n\n")}
function as(){var e=i._audit.data.incompleteFallbackMessage
return"function"==typeof e&&(e=e()),"string"!=typeof e?"":e}var os=Bt.resultGroups,is=function(e,t){var n=i.utils.aggregateResult(e)
return os.forEach((function(e){t.resultTypes&&!t.resultTypes.includes(e)&&(n[e]||[]).forEach((function(e){Array.isArray(e.nodes)&&e.nodes.length>0&&(e.nodes=[e.nodes[0]])})),n[e]=(n[e]||[]).map((function(e){return e=Object.assign({},e),Array.isArray(e.nodes)&&e.nodes.length>0&&(e.nodes=e.nodes.map((function(e){return"object"===o(e.node)&&(e.html=e.node.source,t.elementRef&&!e.node.fromFrame&&(e.element=e.node.element),(!1!==t.selectors||e.node.fromFrame)&&(e.target=e.node.selector),t.ancestry&&(e.ancestry=e.node.ancestry),t.xpath&&(e.xpath=e.node.xpath)),delete e.result,delete e.node,function(e,t){["any","all","none"].forEach((function(n){Array.isArray(e[n])&&e[n].filter((function(e){return Array.isArray(e.relatedNodes)})).forEach((function(e){e.relatedNodes=e.relatedNodes.map((function(e){var n,r,a,o,i,u={html:null!==(n=null==e?void 0:e.source)&&void 0!==n?n:"Undefined"}
return!t.elementRef||null!=e&&e.fromFrame||(u.element=null!==(r=null==e?void 0:e.element)&&void 0!==r?r:null),(!1!==t.selectors||null!=e&&e.fromFrame)&&(u.target=null!==(a=null==e?void 0:e.selector)&&void 0!==a?a:[":root"]),t.ancestry&&(u.ancestry=null!==(o=null==e?void 0:e.ancestry)&&void 0!==o?o:[":root"]),t.xpath&&(u.xpath=null!==(i=null==e?void 0:e.xpath)&&void 0!==i?i:["/"]),u}))}))}))}(e,t),e}))),os.forEach((function(t){return delete e[t]})),delete e.pageLevel,delete e.result,e}))})),n},us=/\$\{\s?data\s?\}/g
function ss(e,t){if("string"==typeof t)return e.replace(us,t)
for(var n in t)if(t.hasOwnProperty(n)){var r=new RegExp("\\${\\s?data\\."+n+"\\s?}","g"),a=void 0===t[n]?"":String(t[n])
e=e.replace(r,a)}return e}var ls=function e(t,n){if(t){if(Array.isArray(n))return n.values=n.join(", "),"string"==typeof t.singular&&"string"==typeof t.plural?ss(1===n.length?t.singular:t.plural,n):ss(t,n)
if("string"==typeof t)return ss(t,n)
if("string"==typeof n)return ss(t[n],n)
var r=t.default||as()
return n&&n.messageKey&&t[n.messageKey]&&(r=t[n.messageKey]),e(r,n)}},cs=function(e,t,n){var r=i._audit.data.checks[e]
if(!r)throw new Error("Cannot get message for unknown check: ".concat(e,"."))
if(!r.messages[t])throw new Error('Check "'.concat(e,'"" does not have a "').concat(t,'" message.'))
return ls(r.messages[t],n)},ds=function(e,t,n){var r=((n.rules&&n.rules[t]||{}).checks||{})[e.id],a=(n.checks||{})[e.id],o=e.enabled,i=e.options
return a&&(a.hasOwnProperty("enabled")&&(o=a.enabled),a.hasOwnProperty("options")&&(i=a.options)),r&&(r.hasOwnProperty("enabled")&&(o=r.enabled),r.hasOwnProperty("options")&&(i=r.options)),{enabled:o,options:i,absolutePaths:n.absolutePaths}}
function ps(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n
return t&&"object"===o(t)?t:"object"!==o(r)?{}:{testEngine:{name:"axe-core",version:i.version},testRunner:{name:i._audit.brand},testEnvironment:fs(r),timestamp:(new Date).toISOString(),url:null===(e=r.location)||void 0===e?void 0:e.href}}function fs(e){if(!e.navigator||"object"!==o(e.navigator))return{}
var t,n=e.navigator,r=e.innerHeight,a=e.innerWidth,i=(t=e.screen).orientation||t.msOrientation||t.mozOrientation||{},u=i.angle,s=i.type
return{userAgent:n.userAgent,windowWidth:a,windowHeight:r,orientationAngle:u,orientationType:s}}function hs(e,t){var n=t.focusable,r=t.page
return{node:e,include:[],exclude:[],initiator:!1,focusable:n&&ms(e),size:Ds(e),page:r}}function ms(e){var t=e.getAttribute("tabindex")
if(!t)return!0
var n=parseInt(t,10)
return isNaN(n)||n>=0}function Ds(e){var t=parseInt(e.getAttribute("width"),10),n=parseInt(e.getAttribute("height"),10)
if(isNaN(t)||isNaN(n)){var r=e.getBoundingClientRect()
t=isNaN(t)?r.width:t,n=isNaN(n)?r.height:n}return{width:t,height:n}}function gs(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=[]
xs(e)||(e=[e])
for(var n=0;n<e.length;n++){var r=vs(e[n])
r&&t.push(r)}return t}function vs(e){return e instanceof n.Node?e:"string"==typeof e?[e]:(Fs(e)?(function(e){As(Array.isArray(e.fromFrames),"fromFrames property must be an array"),As(e.fromFrames.every((function(e){return!ks(e,"fromFrames")})),"Invalid context; fromFrames selector must be appended, rather than nested"),As(!ks(e,"fromShadowDom"),"fromFrames and fromShadowDom cannot be used on the same object")}(e),e=e.fromFrames):ws(e)&&(e=[e]),function(e){if(Array.isArray(e)){var t,n=[],r=H(e)
try{for(r.s();!(t=r.n()).done;){var a=t.value
if(ws(a)&&(Es(a),a=a.fromShadowDom),"string"!=typeof a&&!Cs(a))return
n.push(a)}}catch(e){r.e(e)}finally{r.f()}return n}}(e))}function ys(e){return["include","exclude"].some((function(t){return ks(e,t)&&bs(e[t])}))}function bs(e){return"string"==typeof e||e instanceof n.Node||Fs(e)||ws(e)||xs(e)}function Fs(e){return ks(e,"fromFrames")}function ws(e){return ks(e,"fromShadowDom")}function Es(e){As(Array.isArray(e.fromShadowDom),"fromShadowDom property must be an array"),As(e.fromShadowDom.every((function(e){return!ks(e,"fromFrames")})),"shadow selector must be inside fromFrame instead"),As(e.fromShadowDom.every((function(e){return!ks(e,"fromShadowDom")})),"fromShadowDom selector must be appended, rather than nested")}function Cs(e){return Array.isArray(e)&&e.every((function(e){return"string"==typeof e}))}function xs(e){return e&&"object"===o(e)&&"number"==typeof e.length&&e instanceof n.Node==0}function As(e,t){Yt(e,"Invalid context; ".concat(t,"\nSee: https://github.com/dequelabs/axe-core/blob/master/doc/context.md"))}function ks(e,t){return!(!e||"object"!==o(e))&&Object.prototype.hasOwnProperty.call(e,t)}function Ts(e,t){for(var r=[],a=0,o=e[t].length;a<o;a++){var i=e[t][a]
if(i instanceof n.Node)i.documentElement instanceof n.Node?r.push(e.flatTree[0]):r.push(Nn(i))
else if(i&&i.length)if(i.length>1)Ns(e,t,i)
else{var u=Tl(i[0])
r.push.apply(r,B(u.map((function(e){return Nn(e)}))))}}return r.filter((function(e){return e}))}function Ns(e,t,n){e.frames=e.frames||[],Tl(n.shift()).forEach((function(r){var a=e.frames.find((function(e){return e.node===r}))
a||(a=hs(r,e),e.frames.push(a)),a[t].push(n)}))}function Rs(e,t){var r,i,u,s,l,c=this
e=_n(e),this.frames=[],this.page="boolean"==typeof(null===(r=e)||void 0===r?void 0:r.page)?e.page:void 0,this.initiator="boolean"!=typeof(null===(i=e)||void 0===i?void 0:i.initiator)||e.initiator,this.focusable="boolean"!=typeof(null===(u=e)||void 0===u?void 0:u.focusable)||e.focusable,this.size="object"===o(null===(s=e)||void 0===s?void 0:s.size)?e.size:{},e=function(e){if(ys(e)){var t=" must be used inside include or exclude. It should not be on the same object."
As(!ks(e,"fromFrames"),"fromFrames"+t),As(!ks(e,"fromShadowDom"),"fromShadowDom"+t)}else{if(!bs(e))return{include:[a],exclude:[]}
e={include:e,exclude:[]}}var n=gs(e.include)
return 0===n.length&&n.push(a),{include:n,exclude:gs(e.exclude)}}(e),this.flatTree=null!=t?t:ts(function(e){for(var t=e.include,r=e.exclude,o=Array.from(t).concat(Array.from(r)),i=0;i<o.length;i++){var u=o[i]
if(u instanceof n.Element)return u.ownerDocument.documentElement
if(u instanceof n.Document)return u.documentElement}return a.documentElement}(e)),this.exclude=e.exclude,this.include=e.include,this.include=Ts(this,"include"),this.exclude=Ts(this,"exclude"),El("frame, iframe",this).forEach((function(e){Vs(e,c)&&function(e,t){gi(t)&&!Mr(e.frames,"node",t)&&e.frames.push(hs(t,e))}(c,e.actualNode)})),void 0===this.page&&(this.page=1===(l=this.include).length&&l[0].actualNode===a.documentElement,this.frames.forEach((function(e){e.page=c.page}))),function(e){if(0===e.include.length&&0===e.frames.length){var t=Sr.isInFrame()?"frame":"page"
throw new Error("No elements found for include in "+t+" Context")}}(this),Array.isArray(this.include)||(this.include=Array.from(this.include)),this.include.sort(Ws)}function Bs(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
if(!1===t.iframes)return[]
var n=new Rs(e),r=n.frames
return r.map((function(e){var t=e.node,n=R(e,h)
return n.initiator=!1,{frameSelector:Cn(t),frameContext:n}}))}var Ss=function(e){var t=i._audit.rules.find((function(t){return t.id===e}))
if(!t)throw new Error("Cannot find rule by id: ".concat(e))
return t}
function Os(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=e.scrollWidth>e.clientWidth+t,a=e.scrollHeight>e.clientHeight+t
if(r||a){var o=n.getComputedStyle(e),i=_s(o,"overflow-x"),u=_s(o,"overflow-y")
return r&&i||a&&u?{elm:e,top:e.scrollTop,left:e.scrollLeft}:void 0}}function _s(e,t){var n=e.getPropertyValue(t)
return["scroll","auto"].includes(n)}function Is(e){return Array.from(e.children||e.childNodes||[]).reduce((function(e,t){var n=Os(t)
return n&&e.push(n),e.concat(Is(t))}),[])}var Ps=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n,t=e.document.documentElement,r=[void 0!==e.pageXOffset?{elm:e,top:e.pageYOffset,left:e.pageXOffset}:{elm:t,top:t.scrollTop,left:t.scrollLeft}]
return r.concat(Is(a.body))}
function js(){return _n(Do)}var Ms,qs=function(e){if(!e)throw new Error("axe.utils.getStyleSheetFactory should be invoked with an argument")
return function(t){var n=t.data,r=t.isCrossOrigin,a=void 0!==r&&r,o=t.shadowId,i=t.root,u=t.priority,s=t.isLink,l=void 0!==s&&s,c=e.createElement("style")
if(l){var d=e.createTextNode('@import "'.concat(n.href,'"'))
c.appendChild(d)}else c.appendChild(e.createTextNode(n))
return e.head.appendChild(c),{sheet:c.sheet,isCrossOrigin:a,shadowId:o,root:i,priority:u}}},Ls=function(e){if(Ms&&Ms.parentNode)return void 0===Ms.styleSheet?Ms.appendChild(a.createTextNode(e)):Ms.styleSheet.cssText+=e,Ms
if(e){var t=a.head||a.getElementsByTagName("head")[0]
return(Ms=a.createElement("style")).type="text/css",void 0===Ms.styleSheet?Ms.appendChild(a.createTextNode(e)):Ms.styleSheet.cssText=e,t.appendChild(Ms),Ms}},Hs=function e(t,r){var a=Nn(t)
if(9===t.nodeType)return!1
if(11===t.nodeType&&(t=t.host),a&&null!==a._isHidden)return a._isHidden
var o=n.getComputedStyle(t,null)
if(!o||!t.parentNode||"none"===o.getPropertyValue("display")||!r&&"hidden"===o.getPropertyValue("visibility")||"true"===t.getAttribute("aria-hidden"))return!0
var i=e(t.assignedSlot?t.assignedSlot:t.parentNode,!0)
return a&&(a._isHidden=i),i},$s=function(e){var t,n,r=null!==(t=null===(n=e.props)||void 0===n?void 0:n.nodeName)&&void 0!==t?t:e.nodeName.toLowerCase()
return"http://www.w3.org/2000/svg"!==e.namespaceURI&&!!Do.htmlElms[r]}
function Vs(e,t){var n=t.include,r=void 0===n?[]:n,a=t.exclude,o=void 0===a?[]:a,i=r.filter((function(t){return $r(t,e)}))
if(0===i.length)return!1
var u=o.filter((function(t){return $r(t,e)}))
if(0===u.length)return!0
var s=zs(i)
return $r(zs(u),s)}function zs(e){var t,n,r=H(e)
try{for(r.s();!(n=r.n()).done;){var a=n.value
t&&$r(a,t)||(t=a)}}catch(e){r.e(e)}finally{r.f()}return t}var Us=function(e,t){return e.length===t.length&&e.every((function(e,n){var r=t[n]
return Array.isArray(e)?e.length===r.length&&e.every((function(e,t){return r[t]===e})):e===r}))},Ws=function(e,t){return(e=e.actualNode||e)===(t=t.actualNode||t)?0:4&e.compareDocumentPosition(t)?-1:1},Gs=function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=Array.from(e.cssRules)
if(!o)return Promise.resolve()
var i=o.filter((function(e){return 3===e.type}))
if(!i.length)return Promise.resolve({isCrossOrigin:a,priority:n,root:t.rootNode,shadowId:t.shadowId,sheet:e})
var u=i.filter((function(e){return e.href})).map((function(e){return e.href})).filter((function(e){return!r.includes(e)})),s=u.map((function(e,a){var o=[].concat(B(n),[a]),i=/^https?:\/\/|^\/\//i.test(e)
return el(e,t,o,r,i)})),l=o.filter((function(e){return 3!==e.type}))
return l.length?(s.push(Promise.resolve(t.convertDataToStylesheet({data:l.map((function(e){return e.cssText})).join(),isCrossOrigin:a,priority:n,root:t.rootNode,shadowId:t.shadowId}))),Promise.all(s)):Promise.all(s)}
function Ys(e){try{return!(!e.cssRules&&e.href)}catch(e){return!1}}var Qs,Ks,Xs,Js,Zs=function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=Ys(e)
return o?Gs(e,t,n,r,a):el(e.href,t,n,r,!0)},el=function(e,t,r,a,o){return a.push(e),new Promise((function(t,r){var a=new n.XMLHttpRequest
a.open("GET",e),a.timeout=Bt.preload.timeout,a.addEventListener("error",r),a.addEventListener("timeout",r),a.addEventListener("loadend",(function(e){if(e.loaded&&a.responseText)return t(a.responseText)
r(a.responseText)})),a.send()})).then((function(e){var n=t.convertDataToStylesheet({data:e,isCrossOrigin:o,priority:r,root:t.rootNode,shadowId:t.shadowId})
return Zs(n.sheet,t,r,a,n.isCrossOrigin)}))},tl=function(){function e(){if(n.performance&&n.performance)return n.performance.now()}var t=null,r=e()
return{start:function(){this.mark("mark_axe_start")},end:function(){this.mark("mark_axe_end"),this.measure("axe","mark_axe_start","mark_axe_end"),this.logMeasures("axe")},auditStart:function(){this.mark("mark_audit_start")},auditEnd:function(){this.mark("mark_audit_end"),this.measure("audit_start_to_end","mark_audit_start","mark_audit_end"),this.logMeasures()},mark:function(e){n.performance&&void 0!==n.performance.mark&&n.performance.mark(e)},measure:function(e,t,r){n.performance&&void 0!==n.performance.measure&&n.performance.measure(e,t,r)},logMeasures:function(e){function t(e){St("Measure "+e.name+" took "+e.duration+"ms")}if(n.performance&&void 0!==n.performance.getEntriesByType)for(var r=n.performance.getEntriesByName("mark_axe_start")[0],a=n.performance.getEntriesByType("measure").filter((function(e){return e.startTime>=r.startTime})),o=0;o<a.length;++o){var i=a[o]
if(i.name===e)return void t(i)
t(i)}},timeElapsed:function(){return e()-r},reset:function(){t||(t=e()),r=e()}}}(),nl=tl
function rl(){if(a.elementsFromPoint)return a.elementsFromPoint
if(a.msElementsFromPoint)return a.msElementsFromPoint
var e,t=((e=a.createElement("x")).style.cssText="pointer-events:auto","auto"===e.style.pointerEvents),n=t?"pointer-events":"visibility",r=t?"none":"hidden",o=a.createElement("style")
return o.innerHTML=t?"* { pointer-events: all }":"* { visibility: visible }",function(e,t){var i,u,s,l=[],c=[]
for(a.head.appendChild(o);(i=a.elementFromPoint(e,t))&&-1===l.indexOf(i);)l.push(i),c.push({value:i.style.getPropertyValue(n),priority:i.style.getPropertyPriority(n)}),i.style.setProperty(n,r,"important")
for(l.indexOf(a.documentElement)<l.length-1&&(l.splice(l.indexOf(a.documentElement),1),l.push(a.documentElement)),u=c.length;s=c[--u];)l[u].style.setProperty(n,s.value?s.value:"",s.priority)
return a.head.removeChild(o),l}}"function"!=typeof Object.assign&&(Object.assign=function(e){if(null==e)throw new TypeError("Cannot convert undefined or null to object")
for(var t=Object(e),n=1;n<arguments.length;n++){var r=arguments[n]
if(null!=r)for(var a in r)r.hasOwnProperty(a)&&(t[a]=r[a])}return t}),Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(e){if(null===this)throw new TypeError("Array.prototype.find called on null or undefined")
if("function"!=typeof e)throw new TypeError("predicate must be a function")
for(var t,n=Object(this),r=n.length>>>0,a=arguments[1],o=0;o<r;o++)if(t=n[o],e.call(a,t,o,n))return t}}),Array.prototype.findIndex||Object.defineProperty(Array.prototype,"findIndex",{value:function(e,t){if(null===this)throw new TypeError("Array.prototype.find called on null or undefined")
if("function"!=typeof e)throw new TypeError("predicate must be a function")
for(var n,r=Object(this),a=r.length>>>0,o=0;o<a;o++)if(n=r[o],e.call(t,n,o,r))return o
return-1}}),"function"==typeof n.addEventListener&&(a.elementsFromPoint=rl()),Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(e){var t=Object(this),n=parseInt(t.length,10)||0
if(0===n)return!1
var r,a,o=parseInt(arguments[1],10)||0
for(o>=0?r=o:(r=n+o)<0&&(r=0);r<n;){if(e===(a=t[r])||e!=e&&a!=a)return!0
r++}return!1}}),Array.prototype.some||Object.defineProperty(Array.prototype,"some",{value:function(e){if(null==this)throw new TypeError("Array.prototype.some called on null or undefined")
if("function"!=typeof e)throw new TypeError
for(var t=Object(this),n=t.length>>>0,r=arguments.length>=2?arguments[1]:void 0,a=0;a<n;a++)if(a in t&&e.call(r,t[a],a,t))return!0
return!1}}),Array.from||Object.defineProperty(Array,"from",{value:(Qs=Object.prototype.toString,Ks=function(e){return"function"==typeof e||"[object Function]"===Qs.call(e)},Xs=Math.pow(2,53)-1,Js=function(e){var t=function(e){var t=Number(e)
return isNaN(t)?0:0!==t&&isFinite(t)?(t>0?1:-1)*Math.floor(Math.abs(t)):t}(e)
return Math.min(Math.max(t,0),Xs)},function(e){var t=this,n=Object(e)
if(null==e)throw new TypeError("Array.from requires an array-like object - not null or undefined")
var r,a=arguments.length>1?arguments[1]:void 0
if(void 0!==a){if(!Ks(a))throw new TypeError("Array.from: when provided, the second argument must be a function")
arguments.length>2&&(r=arguments[2])}for(var o,i=Js(n.length),u=Ks(t)?Object(new t(i)):new Array(i),s=0;s<i;)o=n[s],u[s]=a?void 0===r?a(o,s):a.call(r,o,s):o,s+=1
return u.length=i,u})}),String.prototype.includes||(String.prototype.includes=function(e,t){return"number"!=typeof t&&(t=0),!(t+e.length>this.length)&&-1!==this.indexOf(e,t)}),Array.prototype.flat||Object.defineProperty(Array.prototype,"flat",{configurable:!0,value:function e(){var t=isNaN(arguments[0])?1:Number(arguments[0])
return t?Array.prototype.reduce.call(this,(function(n,r){return Array.isArray(r)?n.push.apply(n,e.call(r,t-1)):n.push(r),n}),[]):Array.prototype.slice.call(this)},writable:!0}),n.Node&&!("isConnected"in n.Node.prototype)&&Object.defineProperty(n.Node.prototype,"isConnected",{get:function(){return!(this.ownerDocument&&this.ownerDocument.compareDocumentPosition(this)&this.DOCUMENT_POSITION_DISCONNECTED)}})
var al=function(e,t){return e.concat(t).filter((function(e,t,n){return n.indexOf(e)===t}))}
function ol(e,t,n,r,a){var o=a||{}
return o.vNodes=e,o.vNodesIndex=0,o.anyLevel=t,o.thisLevel=n,o.parentShadowId=r,o}var il=[],ul=function(e,t,n){e=Array.isArray(e)?e:[e]
var r=Un(t)
return Yu(e,r,n)||function(e,t,n){for(var r=[],a=ol(Array.isArray(e)?e:[e],t,null,e[0].shadowId,il.pop()),o=[];a.vNodesIndex<a.vNodes.length;){for(var i,u,s=a.vNodes[a.vNodesIndex++],l=null,c=null,d=((null===(i=a.anyLevel)||void 0===i?void 0:i.length)||0)+((null===(u=a.thisLevel)||void 0===u?void 0:u.length)||0),p=!1,f=0;f<d;f++){var h,m,D,g=f<((null===(h=a.anyLevel)||void 0===h?void 0:h.length)||0)?a.anyLevel[f]:a.thisLevel[f-((null===(m=a.anyLevel)||void 0===m?void 0:m.length)||0)]
if((!g[0].id||s.shadowId===a.parentShadowId)&&Gn(s,g[0]))if(1===g.length)p||n&&!n(s)||(o.push(s),p=!0)
else{var v=g.slice(1)
if(!1===[" ",">"].includes(v[0].combinator))throw new Error("axe.utils.querySelectorAll does not support the combinator: "+g[1].combinator)
">"===v[0].combinator?(l=l||[]).push(v):(c=c||[]).push(v)}g[0].id&&s.shadowId!==a.parentShadowId||null===(D=a.anyLevel)||void 0===D||!D.includes(g)||(c=c||[]).push(g)}for(s.children&&s.children.length&&(r.push(a),a=ol(s.children,c,l,s.shadowId,il.pop()));a.vNodesIndex===a.vNodes.length&&r.length;)il.push(a),a=r.pop()}return o}(e,r,n)},sl=function(e){var t=e.treeRoot,n=function(e){var t=[],n=ul(e,"*",(function(e){return!t.includes(e.shadowId)&&(t.push(e.shadowId),!0)})).map((function(e){return{shadowId:e.shadowId,rootNode:Yr(e.actualNode)}}))
return al(n,[])}(void 0===t?i._tree[0]:t)
if(!n.length)return Promise.resolve()
var r=a.implementation.createHTMLDocument("Dynamic document for loading cssom")
return function(e,t){var n=[]
return e.forEach((function(e,r){var a=e.rootNode,o=e.shadowId,i=function(e,t,n){var r
return r=11===e.nodeType&&t?function(e,t){return Array.from(e.children).filter(cl).reduce((function(n,r){var a=r.nodeName.toUpperCase(),o="STYLE"===a?r.textContent:r,i=t({data:o,isLink:"LINK"===a,root:e})
return n.push(i.sheet),n}),[])}(e,n):function(e){return Array.from(e.styleSheets).filter((function(e){return!!e.media&&dl(e.media.mediaText)}))}(e),function(e){var t=[]
return e.filter((function(e){return!e.href||!t.includes(e.href)&&(t.push(e.href),!0)}))}(r)}(a,o,t)
if(!i)return Promise.all(n)
var u=r+1,s={rootNode:a,shadowId:o,convertDataToStylesheet:t,rootIndex:u},l=[],c=Promise.all(i.map((function(e,t){return Zs(e,s,[u,t],l)})))
n.push(c)})),Promise.all(n)}(n,qs(r)).then((function(e){return ll(e)}))}
function ll(e){return e.reduce((function(e,t){return Array.isArray(t)?e.concat(ll(t)):e.concat(t)}),[])}function cl(e){var t=e.nodeName.toUpperCase(),n=e.getAttribute("href"),r=e.getAttribute("rel"),a="LINK"===t&&n&&r&&e.rel.toUpperCase().includes("STYLESHEET")
return"STYLE"===t||a&&dl(e.media)}function dl(e){return!e||!e.toUpperCase().includes("PRINT")}var pl=function(e){var t=e.treeRoot,n=void 0===t?i._tree[0]:t,r=ul(n,"video, audio",(function(e){var t=e.actualNode
return t.hasAttribute("src")?!!t.getAttribute("src"):!(Array.from(t.getElementsByTagName("source")).filter((function(e){return!!e.getAttribute("src")})).length<=0)}))
return Promise.all(r.map((function(e){var t,n=e.actualNode
return t=n,new Promise((function(e){t.readyState>0&&e(t),t.addEventListener("loadedmetadata",(function n(){t.removeEventListener("loadedmetadata",n),e(t)}))}))})))}
function fl(e){return!e||void 0===e.preload||null===e.preload||("boolean"==typeof e.preload?e.preload:(t=e.preload,"object"===o(t)&&Array.isArray(t.assets)))
var t}function hl(e){var t=Bt.preload,n=t.assets,r=t.timeout,a={assets:n,timeout:r}
if(!e.preload)return a
if("boolean"==typeof e.preload)return a
if(!e.preload.assets.every((function(e){return n.includes(e.toLowerCase())})))throw new Error("Requested assets, not supported. Supported assets are: ".concat(n.join(", "),"."))
return a.assets=al(e.preload.assets.map((function(e){return e.toLowerCase()})),[]),e.preload.timeout&&"number"==typeof e.preload.timeout&&!isNaN(e.preload.timeout)&&(a.timeout=e.preload.timeout),a}var ml=function(e){var t={cssom:sl,media:pl}
return fl(e)?new Promise((function(n,r){var a=hl(e),o=a.assets,i=a.timeout,u=setTimeout((function(){return r(new Error("Preload assets timed out."))}),i)
Promise.all(o.map((function(n){return t[n](e).then((function(e){return t={},a=e,(r=L(r=n))in t?Object.defineProperty(t,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[r]=a,t
var t,r,a}))}))).then((function(e){var t=e.reduce((function(e,t){return O({},e,t)}),{})
clearTimeout(u),n(t)})).catch((function(e){clearTimeout(u),r(e)}))})):Promise.resolve()}
function Dl(e,t,n){return function(r){var a=e[r.id]||{},i=a.messages||{},u=Object.assign({},a)
delete u.messages,n.reviewOnFail||void 0!==r.result?u.message=r.result===t?i.pass:i.fail:("object"!==o(i.incomplete)||Array.isArray(r.data)||(u.message=function(e,t){function n(e){return e.incomplete&&e.incomplete.default?e.incomplete.default:as()}if(!e||!e.missingData)return e&&e.messageKey?t.incomplete[e.messageKey]:n(t)
try{var r=t.incomplete[e.missingData[0].reason]
if(!r)throw new Error
return r}catch(r){return"string"==typeof e.missingData?t.incomplete[e.missingData]:n(t)}}(r.data,i)),u.message||(u.message=i.incomplete)),"function"!=typeof u.message&&(u.message=ls(u.message,r.data)),zr(r,u)}}var gl=function(e){var t=i._audit.data.checks||{},n=i._audit.data.rules||{},r=Mr(i._audit.rules,"id",e.id)||{}
e.tags=_n(r.tags||[])
var a=Dl(t,!0,r),o=Dl(t,!1,r)
e.nodes.forEach((function(e){e.any.forEach(a),e.all.forEach(a),e.none.forEach(o)})),zr(e,_n(n[e.id]||{}))},vl=function(e,t){return ul(e,t)}
function yl(e,t){var n,r,a=i._audit&&i._audit.tagExclude?i._audit.tagExclude:[]
return t.hasOwnProperty("include")||t.hasOwnProperty("exclude")?(n=t.include||[],n=Array.isArray(n)?n:[n],r=t.exclude||[],r=(r=Array.isArray(r)?r:[r]).concat(a.filter((function(e){return-1===n.indexOf(e)})))):(n=Array.isArray(t)?t:[t],r=a.filter((function(e){return-1===n.indexOf(e)}))),!!(n.some((function(t){return-1!==e.tags.indexOf(t)}))||0===n.length&&!1!==e.enabled)&&r.every((function(t){return-1===e.tags.indexOf(t)}))}var bl=function(e,t,n){var r=n.runOnly||{},a=(n.rules||{})[e.id]
return!(e.pageLevel&&!t.page)&&("rule"===r.type?-1!==r.values.indexOf(e.id):a&&"boolean"==typeof a.enabled?a.enabled:"tag"===r.type&&r.values?yl(e,r.values):yl(e,[]))}
function Fl(e,t){if(!t)return e
var n=e.cloneNode(!1),r=an(n)
if(1===n.nodeType){var a=n.outerHTML
n=Tn.get(a,(function(){return wl(n,r,e,t)}))}else n=wl(n,r,e,t)
return Array.from(e.childNodes).forEach((function(e){n.appendChild(Fl(e,t))})),n}function wl(e,t,n,r){return t?(e=a.createElement(e.nodeName),Array.from(t).forEach((function(t){(function(e,t,n){return void 0!==n[t]&&(!0===n[t]||on(e,n[t]))})(n,t.name,r)||e.setAttribute(t.name,t.value)})),e):e}function El(e,t){var n,r=[]
if(i._selectCache)for(var a=0,o=i._selectCache.length;a<o;a++){var u=i._selectCache[a]
if(u.selector===e)return u.result}for(var s=t.include.reduce((function(e,t){return e.length&&$r(e[e.length-1],t)||e.push(t),e}),[]),l=function(e){return e.exclude&&0!==e.exclude.length?function(t){return Vs(t,e)}:null}(t),c=0;c<s.length;c++)n=s[c],r=Cl(r,ul(n,e,l))
return i._selectCache&&i._selectCache.push({selector:e,result:r}),r}function Cl(e,t){if(0===e.length)return t
if(e.length<t.length){var n=e
e=t,t=n}for(var r=0,a=t.length;r<a;r++)e.includes(t[r])||e.push(t[r])
return e}var xl=function(e){e.forEach((function(e){return function(e,t,r){if(e===n)return e.scroll(r,t)
e.scrollTop=t,e.scrollLeft=r}(e.elm,e.top,e.left)}))}
function Al(e){return kl(Array.isArray(e)?B(e):[e],a)}function kl(e,t){var n=e.shift(),r=n?t.querySelector(n):null
return 0===e.length?r:null!=r&&r.shadowRoot?kl(e,r.shadowRoot):null}function Tl(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a,n=Array.isArray(e)?B(e):[e]
return 0===e.length?[]:Nl(n,t)}function Nl(e,t){var n,r=P(n=e)||S(n)||$(n)||I(),a=r[0],o=r.slice(1),i=t.querySelectorAll(a)
if(0===o.length)return Array.from(i)
var u,s=[],l=H(i)
try{for(l.s();!(u=l.n()).done;){var c=u.value
null!=c&&c.shadowRoot&&s.push.apply(s,B(Nl(o,c.shadowRoot)))}}catch(e){l.e(e)}finally{l.f()}return s}var Rl=function(){return["hidden","text","search","tel","url","email","password","date","month","week","time","datetime-local","number","range","color","checkbox","radio","file","submit","image","reset","button"]},Bl=[,[,[1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,,1,1,1,1,1,1,,1],[1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,1,1,1,,1,1,,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,1,1,1,1,1,1,1,,1,,1,1,1,1,1,1,1,1,,1,1,1,1],[1,1,1,1,1,1,,,,,,1,1,1,1,,,1,1,1,,1,,1,,1,1],[1,1,1,,1,1,,1,1,1,,1,,,1,1,1,,,1,1,1,,,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,,,,1,1,1,,1,1,1,1,1,1,,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,1,1],[,1,,,,,,1,,1,,,,,1,,1,,,,1,1,,1,,,1],[1,,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,,,1,1,1,1,,,1,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,1,1,,,1,,,,,1,1,1,,1,,1,,1,,,,,,1],[1,,1,1,1,1,,,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[1,,1,,1,,,,,1,,1,1,1,1,1,,,,1,1,1,1],[,1,1,1,1,1,,1,1,1,,1,,1,1,1,,,1,1,1,1,1,1,1,1],[,,1,,,1,,1,,,,1,1,1,,,,,,,,,,,1],[1,1,1,1,1,1,,1,1,1,,1,1,,1,1,1,1,1,1,1,1,,,1,1,1],[1,1,1,1,1,,,1,,,1,,,1,1,1,,,,,1,,,,,,1]],[,[1,1,1,1,1,1,1,1,1,1,1,,1,,1,1,1,,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,,,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1],[,1,1,,1,,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1],[,1,1,1,1,1,,1,1,1,1,1,1,,1,1,,1,1,1,1,1,1,1,,1],[,1,,1,1,1,,1,1,,1,,1,1,1,1,1,1,1,1],[,1,,1,1,1,1,1,1,1,1,,,1,1,1,,,1,1,,,,,,1,1],[1,1,1,,,,,1,,,,1,1,,1,,,,,,1,,,,,1],[,1,,,1,,,1,,,,,,1],[,1,,1,,,,1,,,,1],[1,,1,1,1,,1,1,1,,1,1,1,1,1,1,1,1,1,,1,,,1,1,1,1],[,1,1,1,1,1,,,1,,,1,,1,1,,1,,1,,,,,1,,1],[,1,,,,1,,,1,1,,1,,1,1,1,1,,1,1,,,1,,,1],[,1,1,,,,,,1,,,,1,1,1,1,,1,1,1,1,1,1,,1,1,1],[,1,,1,1,1,,,1,1,1,1,1,1,,1,,,,,1,1,,1,,1],[,1,,1,,1,,1,,1,,1,1,1,1,1,,,1,1,1],[,1,1,1,,,,1,1,1,,1,1,,,1,1,,1,1,1,1,,1,1],[1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,,,1,1,1,1,1,1,1],[,1,1,1,,1,1,1,,1,,,,,1,1,1,,,1,,1,,,1,1],[,,,,1,,,,,,,,,,,,,,,,,1],[1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[,1,,1,1,1,,1,1,,,,1,1,1,1,1,,,1,1,1,,,,,1],[1,1,1,1,,,,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[1,,,,,,,1,,,,,,,1],[,1,1,,1,1,,1,,,,,,,,,,,,,1],,[1,1,1,,,,,,,,,,,,,1],[,,,,,,,,1,,,1,,,1,1,,,,,1]],[,[1,1,,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,,1,1,1,1,1,1],[,1,1,,1,1,1,1,,1,1,,1,1,1,1,1,1,1,,1,1,1,1,,1],[,,,1,,,,,,,,,,,,,,,1],[,1,,,1,1,,1,,1,1,,,,1,1,,,1,1,,,,1],[1,,,1,1,1,1,1,1,1,,1,1,1,1,,1,1,1,1,,,1,,,,1],,[,1,1,1,1,1,,1,1,1,,1,1,,1,1,,,1,1,1,1,,1,1,,1],[,1,,,1,,,1,,1,,,1,1,1,1,,,1,1,,1,1,1,1],[,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[,1,1,1,1,1,1,,,1,1,1,1,1,1,1,,,1,,,1,,1],[,1,,,,,,,,,,1,1,,,,,,1,1,,,,,1],[,,,,,,,1,,,,1,,1,1],[,1,1,1,1,1,1,1,,,,1,1,1,1,1,,,1,1,,1,1,1,1,1],[,1,,,1,1,,1,,1,1,1,,,1,1,,,1,,1,1,1,1,,1],[,1,1,1,,1,1,,1,1,,1,1,,1,1,1,1,1,1,1,,1,1,1,1,1],[,,,,,,,,,,,,,,,,1],,[,1,1,1,1,1,,1,1,1,,,1,,1,1,,1,1,1,1,1,,1,,1],[,,1,,,1,,,1,1,,,1,,1,1,,1],[,1,1,,1,,,,1,1,,1,,1,1,1,1,,1,1,1,1,,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1],[1,1],[,1,,,,,,,,,,1,1,,,,,,1,1,,1,,1,,1,1],,[,1,1,,1,,,1,,1,,,,1,1,1,,,,,,1,,,,1],[1,1,,,1,1,,1,,,,,1,,1]],[,[,1],[,,,1,,,,1,,,,1,,,,1,,,1,,,1],[,,,,,,,,,,,,,,,,,,1,1,,,,,,1],,[1,,,,,1],[,1,,,,1,,,,1],[,1,,,,,,,,,,,1,,,1,,,,,,,,,1,1],[,,,,,,,,,,,,,,,,,,,,,1],[,,,,,,,,,,,,,,,,1,,,,1,,1],[,1],[,1,,1,,1,,1,,1,,1,1,1,,1,1,,1,,,,,,,1],[1,,,,,1,,,1,1,,1,,1,,1,1,,,,,1,,,1],[,1,1,,,1,,1,,1,,1,,1,1,1,1,,,1,,1,,1,1,1],[1,1,1,1,1,,1,,1,,,,1,1,1,1,,1,1,,,1,1,1,1],[1,,,,,,,,,,,,,,,,,,,,1],[,,,,,,,,,1],,[,1,,,,,,1,1,1,,1,,,,1,,,1,1,1,,,1],[1,,,,,1,,1,1,1,,1,1,1,1,1,,1,,1,,1,,,1,1],[1,,1,1,,,,,1,,,,,,1,1,,,1,1,1,1,,,1,,1],[1,,,,,,,,,,,,,,,,,1],[,,,,,1,,,1,,,,,,1],[,,,,,,,,,,,,,,,1],[,,,,,,,,,,,,,,,,,,,,1],[,1,,,,,,,,,,,,,,1],[,1,,,,1]],[,[1,1,1,,1,,1,1,1,1,1,1,1,1,1,,1,,1,,1,1,,,1,1,1],[,,,,,,,,,,,,1],[,,,,,,,,,,,,,,,,,,,1],,[,,,,,,,,,,,,,,,,,,1],[1,,,,,,,,,1,,,,1],[,,,,,,,,,,,,,,,,,,1],,[1,1,,,,1,1,,,,,,1,,,,1,,1,,1,1,,1],[1],[,,,,,,,,,,,1,,,,,,,,,,,1],[,1,,,,,,,1,1,,,1,,1,,,,1,,,,,,,1],[,,,,,,,,,,,,,,,,1,,,,,1],[,,1,,,,,1,,1],[1,,,,1,,,,,1,,,,1,1,,,,1,1,,,,,1],[,,,,,1],[,,,,,,,,,,,,,,,,,,,1],[1,,,1,1,,,,,,,1,,1,,1,1,1,1,1,1],[,,,,,1,,,,,,,1,,,,,,,1],,[,,1,1,1,1,1,,1,1,1,,,1,1,,,1,1,,1,1,1,,,1],[,,,,,,,,,,,,,,,,,,1],[,1,,,,1],,[1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1],[,,,1,1,1,1,,,,,,1,,1,,,,1,,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,,,1],[,1,1,1,1,,1,1,1,1,1,1,1,1,,,,1,,1,,,1,1,1,1,1],[,,,,,,,,,,,1,,,,,,,,,1,,,,1],[,1,1,,1,1,,1,,,,1,1,,1,1,,,1,,1,1,,1],[,1,,1,,1,,,1,,,1,1,,1,1,,,1,1,1],[,1,1,1,1,1,,1,1,,,,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[,,,,,,,,,1,,1,,1,1,,,,1,,,1],[,1,,,1,1,,,,,,,,,1,1,1,,,,,1],[1,,,1,1,,,,1,1,1,1,1,,,1,,,1,,,1,,1,,1],[,1,1,,1,1,,1,1,,,,1,1,1,,,1,1,,,1,1,1,1,1,1],[1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,,1,1,,1,1,,1,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[,1,,,,1,,,,,,,,,1],[,1,,,,,,,,1,,,,,1,,,,1,,,1],[,1,1,1,1,,,1,1,1,1,1,,1,,1,,1,1,1,1,1,1,1,1,1,1],[,,,,,1,,1,,,,,1,1,1,1,1,,,1,,,,1],[,1,,,,,,,,1,,,,,,,,,,,,1],[1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1],[1,1,,1,,1,1,,,,1,,1,1,1,1,1,,1,1,,,,,,1],[,1,1,1,1,1,1,1,,1,1,,,1,1,,,,1,,1,1,,1,1],[,,,,,,,,,,,,,,,,,,,,,,,,1],[,1,1,,1,1,1,1,,1,,,1,1,1,1,,,1,,,,,,,1],[,1,,,,,,,,1,,,,,1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,1,1,1,1],[,1,1,,,,,,,,,,,,1,1,,,,,,1],[,1,,,,,,,1],[,,,,,,,,,,,,,,1,,,,,1,,,,,,1],[1,1,,,1,,,1,1,1,,,,1],,[,,,,,,,,,,,,,1,,,,,,,,,,1],[,,,,,,,,,1,,,,,,,,,1,,,,,,,1],[1,1,1,,1,,1,1,1,1,1,1,1,1,,1,,,1,,1,,,1,1],[,,,,,,,,,1],[,1,,,,1,,,,,,1,,,1,,,,,1],[,1,1,,1,1,,,,,,,,,,,,,,,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[,1,,,1,1,,1,1,1,1,,,,1,1,,,,1,,1],[1,1,1,1,1,1,,,1,1,1,1,1,1,,1,1,,1,1,1,,1,1,,1,1],[,,,,,,,,,,,,,,,1,,,,1],,[1,1,,1,,1,,,,,,1,,1,,1,1,,1,,1,1,,1,1,,1],[,,1,,,,,,1,,,,1,,1,,,,,1],[1,,,,,,,,,1,,,,,,1,,,,1,,1,,,1],[1,,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,,,1,,1,,,,,,1,,,1,,,,,,,,1],[,1,,1,,,,,,,,,,,,1],,[1,1,,,,,,,,,,,,,,,,,,,,,,1,1],[1]],[,[1,,,,,,,,,1,,,,,1,,1,,1],[,1,1,,1,1,,1,1,1,,,1,1,1,,,,1,,,1,,,,1],[,1,,,,,,,1,,,,1,,,,,,1],[1,1,1,1,1,1,,,,1,,,,,,,,,1,1,1,1],[1],[,1,1,,,1,1,,,,,1,,1,,,,,,,,1,,,,1],[1,,1,,,1,,1,,,,,1,1,1,1,,,,1,,,,1],[,,1,,,,,,,1,,,,,,,1,,,,,,,1],[1,,,,,,,,,,,,,,1,,,,1],[,,,1,,1,,,,,1,,,,1,1,,,,1],[1,,,,,1,,,,1,,1,1,,,1,1,,1,1,1,,1,1,1,,1],[,1,1,,,,,1,,1,,1,1,1,,1,1,,,1,,1,1,1],[,1,,,,1,,,,1,,,1,,1,1,,,1,1,,,,,,1],[1,,1,1,,1,,1,1,,1,,1,1,1,1,1,,,1,1,,,,,,1],[1,,,,,,,,,,,,,,,,,,1,,,1,,1],[,,,,,,,,,1,,,,,,1],[,,,,,,,,,,,,,,,,,,,,,1,,1],[,1,,,,1,,,1,1,,1,,,1,1,,,1,,,1,,,1,1],[1,1,,1,1,1,,1,1,1,,1,,1,1,1,,,1,,1,1],[1,,1,1,1,1,,,,1,,1,1,1,,1,,,1,1,1,,1,1,1,1,1],[1,,,,,,,,,,,,,1],[,,1,,,,,,,,,,,,,,,,,,,,1],[1,,,,,,,,,,,1,,1,,1,,,,1],[,,,1,,,,,,,,,1],[,1,,,,,,,,,,,,,,1,,,,,,,,,1],[,,,,,,,,1,1,,,,,,,,,1,,,,,,,,1]],[,[1,1,1,1,1,1,1,,1,,1,1,1,1,1,1,,1,1,1,1,1,,,1,1,1],[,,,,,1,,,,1,1,1,,,1,1,,,1,,1,1,,1],[,,,,,,,,,,,,,,,,,,,1,1],[,1,,,,,,1,,,,,,,,,,,,,1],[,,1,,,1,,1,1,1,,1,1,,1,,,,1,,1,1],,[,,1,,,1,,,,,,1,,,,1],[,,,,,,,,,1,,,,,,,,,,1],[1,1,1,1,1,1,,1,1,1,,,1,1,,1,,1,,,1,1,1,,,1],[,,,,,1,,,,,,,,,,,,,1],[,1,,,,,,,,,,,,1,,1,1,,1,,,1],[,,,,,1,,,,,,,,,,,,,,1],[,1,1,1,1,,,,,1,,,1,,1,,,,1,1,,,,1,1],[,1,,,1,,,1,,1,1,,1,,,,,,,1],[,,1,,1,,,1,,,,,,,,,,,1,1,,,,1],[,1,,,,,,,,,,,,,,,,,1,,,,,,1],[,,,,,,,,,,,,,,,,,,1],[,1,1,,,,,,,,,,,,,,,,1,,1,1],[,,,,,,,,,,,,1],,[,1,1,1,1,,,,1,1,,1,1,1,1,1,1,,1,1,1,1,,1,,1],[1,,,,1,,,,,,,,,,1],[1,,,,,,,,,1],,[,1,,,,1,,,,,,,,,,,,,,,,,,,,1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,,1,,1,1,1,1,,,,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,,1,1,,1,1,1,,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,,1,1,1,1,1,1,1,1,1,1,,,1,1,1,,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,,1,,1,1,1,1],[1,1,1,1,,1,1,1,,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1],[,,,1,1,1,1,,1,,,,1,1,,,1,1,,1],[,1,1,,1,,,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,,,,,,,,,,,,1],[1,1,1,,,,,1,1,1,,1,1,1,1,,,1,1,,1,1,,,,,1],[,1,,,,,,,1,1,,,1,1,1,,1,,,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,1,1,1,1,,1,1,1,1,1,1],[,1,,,,1,,,,1,,,1,,,,1,,,,,,,1,1],[,1,1,1,1,1,,,1,1,1,,1,1,1,1,,,1,1,1,1,,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,,1,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,1,1,1,1,1],[1,1,1,,1,,,1,1,1,1,,1,1,1,1,,,,1,,1,,1,,,1],[1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,,,1,,,,,,,,,1,1,,,,,,,,,1],,[,1,,1,,1,,1,,1,,1,1,1,1,1,,,1,,1,,1,,,,1],[,1,,,1,1,,1,1,1,,,1,1,1,1,1,,1,1,1,,1,,,1],[1,,,1,,,,1,1,1,,,,,1,1,,,,1,,1],[1,1,,1,1,1,1,,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[1,1,,,,,,,,1,,1,,,,,,,,1,,1],[,1,,,,1,,1,1,,,,1,1,,1,,,,1,1,1,,1],,[,1,,,,,,1,,,,,,,1],[,,,,,,,,1,,,,1,,1,,,,,,,,,,,,1]],[,[,1,1,,1,1,1,1,,1,1,1,,1,1,,1,1,,1,1,1,1,1,1,,1],[,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,,1,1,1,1,1,1,1,1,1,,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1],[,1,1,,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,,1],[1,1,1,1,1,,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,,1,1,1,1,1,1,1,1,1,1],[,1,,,1,,,,,,,,1,,,,,,1,,,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,,1,,1,1,1,1,1,1,,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1],[,1,1,,1,,,,1,1,1,,1,1,1,1,,,1,1,1,1,,,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,,1],[1,1,,1,,1,,1,,1,1,1,1,1,1,1,,1,1,,,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,,1,1],[,1,1,,,,,1,1,1,,,1,,1,1,,,,1,,1,,,1,1],[,,,,,,,1,,,,1,1,1,1,1,,1,,,,,,,,1],[1,1,1,1,,1,1,1,,1,,1,1,1,1,,1,,1,,1,1,,,1,,1],[,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,,,,1,1,,1,,1,1,1,,1,,1,1,,1,1,,1,,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,,,,,,,,1,,,,,1,,1],[,1,1,1,,1,,1,,1,,,,1,,1,,,1,,,,,,1,1],[,1,,,1,1,,1,,1,,1,1,1,1,1,,1,1,,,1,,,1],[1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,1,,,,,1,,1,,1,,,,,,1,,1,,,,1,1]],[,[,1,,1,,,,,,,,,,,,,,,1,,,,1],[,,,,,,,,,1,,1,1,1,,1,,,1,,1,1],[1,1,,,,,,,1,,,,,,,1,,,,,,1],[,1,,,,,,,,,,1,,,,,,,,,1,1],,[,,,,,,,,,,,,,,,1,,,,1,,1],[,,1,1,,1,,1,,,,,,,,1,,,,,,1],[,,,,,,,,,,,,,,,,,,,,1,1],[,1,,,,,,,,,,,,,1],[1,,1,1,,,,1,,,,,,,,,1,,,1,,,1,1],[,1,1,,1,1,,1,1,1,1,1,1,1,1,1,,,1,1,,1,1,,1],[,1,,,1,1,,,,,,1,,1,,1,,,1,,1,1],[1,1,1,1,,1,,1,,1,,1,1,,1,1,1,1,1,,1,1,1,1,1],[,1,1,,,1,,1,,1,1,1,,,1,1,1,,1,1,1,1,,1,1],[,,,,1,,,1,,,,,,,1,,,,1,1],[,1,,,,,,,,,,1,,1,,1,,,,,1,,,,,1],,[1,1,,1,,1,,1,1,,,,,,1,1,,,1,1,1,1,1,1,1,1,1],[1,1,,1,,,,,,1,,,,,,1,1,,,,1,1,,,1],[,1,1,,1,1,,,,1,,1,1,1,1,1,,1,1,1,1,1,,1,1,1,1],[,1,1,,,1,,,,1,,,,1,1],[,,,,1],[,,,,,,,,,1,,,1],,[,,1,,1,,,,,,,,,1,,,,,,,,,,,,1],[,,,,,,,,,,,,,1]],[,[1,1,1,1,1,1,1,1,1,1,,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,,1,1,,1,1,1,1,1,,,1,1,1,1,1,,1,1,1,1,1,,,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,,1,,,,,1],[,1,,1,,,,,,1,,,,,1,1,,,,,1,1],[,1,1,,1,1,1,1,1,1,1,1,1,1,,1,1,1,,1,,,1,,1,1,1],[,1,,,,1,,,,,,,1],[,1,,,1,,,1,,1,,1,1,,1,,,,,1,,1,,,,1,1],[,1,,,1,,,1,1,1,,1,1,1,1,1,,1,1,,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,,1,1,1,1,1,1,1,1,1],[,,,,,,,,,,,,,,,,,,,,1],[,1,1,1,,,,1,1,,,,,,1,1,1,,1,1,1,1],[1,1,1,1,1,1,1,1,1,,1,1,1,,1,1,1,1,1,1,1,1,1,1,,1,1],[,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,,1,1,1,1,1,,1,1,1,1],[,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,,,1,1,1,1,1,1,1,,1,,1,1,1,1,1,,1,1,,1,1,1,1,1],[,1,,,,1,,,,1,,1,1,1,1,1,1,1,1,1,1,1],[,1,,,,1,,,,,,,,1,,,,,,,,,,1],[,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[1,1,,1,1,1,,1,1,1,,,1,1,1,1,1,1,1,1,1,1,,1,,1],[1,1,,,,,,,1,1,,,,,1,1,1,1,1,,1,1,1,1,,1],[,1,1,1,1,1,1,1,,1,1,1,,1,,1,1,1,1,,1,1,,1,1,1,1],,[,1,1,,,,,1,,1,,,,1,1,1,,,1,,,,,1],[,,,,,,,,,,,,,1],[,,,,,1,,,,,,,,1,1,,,,,1,,1,,,1,1],[,,,,,,,,,,,,,,1]],[,[,1],,,,,,,,,,,,,,,,,,,,[1,1,1,1,1,,1,1,1,1,,1,1,1,1,,1,1,1,1,,,1,1,1,1,1],[,1,,1,,1,,,1,1,1,,1,1,1,1,1,,,1,,,,1,,1,1],[,1,,1,,1,,,1,,,,,1,,,,,,1,1],[,1,,1,,,,,1,,,,1,,1,1,1,1,1,1,1,1,,1],[,1,,,,,,,,,,,,,,,1]],[,[,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,,1,,,,,,,,,1,1,,,,1],[,,,,,,1],[,,1],[,1,1,,,1,,1,,1,1,,1,1,1,,,,1,1,1,,,,,1],,[,1,,,,1,,,,,,1,,,1,,,,1,1,,1],[,,,,,,,1,,,,,,,,,1],[,1,,,,1,1,,,,,,1,1,1,,,,1,,1,1],[,,,,,,,1,,1,,,,,,,,,,1],[,1,1,,,,,,1,1,,,,1,,,,,,,1,,,1],,[1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,,,1,,,1,,,,,1,,1,,1,,1,,,,,1],[1,1,1,1,1,1,1,1,,,,,1,1,,1,1,,1,,,1,,1],[,,,,,,,,,,,,,,1,,,,,,1],,[,,,,,,,,,1,,,,,,1,,,,,1],[,,1,,,,,,,1,,,1,1],[,,,1,,,,,1,,,,,1,,,,,,1,,,,1],[1,,1,1,,1,1,1,1,1,,1,,,,1,1,1,,,1,1,,,,1,1],,[1,1,,,,,,,,,,1,,1,,1,,,1],[,,,,1,,,,,,,,,,,,,,,,,,,1],[,,,,,,,,,,,,,,1,,,,,1,,1],[,,,,,,,,1]],[,[1,1,1,1,1,1,1,,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,,,1,1,1,1,1,,1,1,,1,1,1,1,,1,1,1,1,1,1],[1,1,1,1,,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[,,1,,,1,,,,,,,,1,,,,,,1,,,,1],[1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,,1,1,1,1],[1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,1,1,,1,,,,1,1,1,1,1,1,,1,1,1,1,,1],[1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,,1,1,1,1,1,1,1,1,,1,1,1,,1,1,1,1,1,1,,1,1,1,1],[1,1,1,1,1,,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[1,,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1],[1,1,1,1,1,1,,1,1,1,1,1,1,,1,1,1,1,1,1,,1,1,1,1,1,1],[,,1,1,1,1,,1,,1,,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[1,1,,,,,,,1,,1,1,,1,1,1,,1,1,1,1,1],[1,1,1,1,,1,1,1,1,1,,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1],[1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1],[1,1,1,1,,1,,1,,1,1,1,1,1,,,,1,1,1,1,,1,1,1,1,1],[1,1,1,1,,1,,,,,,1,,1,,,,,1,1,,,,,1],[1,,1,1,,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,,1,1,,1,,1,,,,1,1,1,1,1,,,1,1,,1,,1],[,1,1,1,1,,,,,1,,1,1,1,1,1,,,1,1,,,,1,1,1],[,1,1,1,1,1,,1,,,,,1,,1,,1,,,1,,,1,1,,1]],[,[1,1,1,1,1,1,1,1,,1,1,1,1,,1,1,1,1,1,1,,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,,1,1,1,,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,,1,1],[1,1,1,1,1,1,1,1,1,1,,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,,,,,,,,,1,,,,,1,1,,,1,,1],[1,1,1,1,1,1,1,1,1,1,1,,,,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,,,1,1,1,1,,1,1,,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1],[,1,,,,,,1,,1,1,,1,1,1,1,1,,,1,,1,,1],[1,1,1,,1,1,1,1,,,,1,1,1,1,,1,1,1,1,1,1,1,1,1,,1],[1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,,1,1,1,1,1,1,1,1,1,,1,1,,1,1,1,1,1,,1,1,1,1,1,1],[,1,,1,,1,1,1,,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1],[,,1,,,,,,,,,,1,1,1,1,1,1,1,,1,1,,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,,1,1,1,1,1,1,1,1],[,1,,,1,1,,,,,,1,1,1,1,1,,,,1,1,1,,1,1,1],[1,1,1,1,1,1,1,1,1,,,,1,1,1,1,1,1,1,,1,1,,1,1,1],[,1,1,1,,1,,1,1,1,1,,,1,1,1,,1,1,1,1,1,,,1,1],[1,1,,,,1,,,1,1,1,,1,,1,,1,,1,1,1,1,1,,1,,1],[,1,,,,,,,1,,1,,1,1,1,1,,,,,,,,,1]],[,[,,,,,,,,,,,,,1,1,,,,1],[,1,,,,,,,,1,,,1,,,,,,1,,,1,,,,1],,[,1,,,,1,,1,,1,1,,1,1,,,,,,,,1],[,,,,,,,,,,,,,,,,,,,1],[,,,,,,,,,1],[1,1,1,,,1,,,,,,,,,1,1,,,,,,,,,,1],[,1,,,,,,,,,,,,,1],[,,,,,,,,,,,,,,,,,,,1,,,1],[,,,,,,,,,1],[1,1,,,,,,1,1,1,,1,1,,,,1,1,,1,,1,1,1,,1],[,1,1,1,,1,1,,,1,,1,1,1,1,,,,,,,1,,1],[,1,1,1,1,,,1,,1,,,,1,1,1,1,,1,1,,1],[,1,,,1,1,,1,,,,1,,1,1,,1,,1,,,1,,,1,,1],[,,,,,,,,,,,1],[,,,,,,,,,1,,,,,,,,,,,,,1],,[1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,,1,,1,1,1,1,1,1,1],[,1,,,,,,,1,1,,1,,,,,1,,,1,,1],[,1,,,,1,,,1,,,,,,,,1,,1,,,1],[,,,,,,,,,,,,,1,1,,,,1,,,1],[,,,,,1,,,1,,,,1],[,1],,[,1],[1,,,,,,,,,,,,,,1,,,,,1]],[,[,1,,,,1,1,1,1,1,1,,1,1,1,1,1,,1,1,,1,1,,,1],[,,1,,,,,,,,,1],,,[1,,,1,1,,,,,,,,1,1,,1,1,,1],,[,,,,,,,,,,,,,,,,,,1,,1],,[1,,,1,1,,1,1,,,,,1,,1,,,,,1,1,,1],,[,1,,,,,,,,1,1,1,1,1,,1,1,,,,1,1],[,,,,,,,,,,,,,,,,1,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,1,1,1,,1,1,1,1,1,1],[,,,,,,,,,,,1,,1,,,1],[1,,,,,,,,,,,,,,,,,,1,,1],,,[,1,,,,,,,,,,,,,,1,,,,1,1],[,,,,,,,,,1,,,1,,,,,,,,,,1],[,,,,,,,,,,,,,,,1],[,,,,,,,,,,,,,1,1,,,,,,1],,[,1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,,1,1,,1,1,1,1,1,1,,,1,1,1,1,1,,1,1],[,1,,,,,,,,1],[,,,,1,,,1,,,1,1,,,,,,,,,,1,,,,1],[,1,,1,1,,,1,1,1,,,,1,1,1,1,,1,1,1,1,,1],[,,,,,,,1],[,1,1,,,,,1,,1,,,,,,1,,,,,,1,,1,,1],[,1,,,,,,1,,,,1,,,,,,,,,,1],[,,1,1,,1,1,1,1,1,1,1,1,1,1,,,,1,,1,1,1,1,,1],[,1,,,,,,,,1],[,1,1,,1,,,,,,,,1,,,,,,1,,,1,,1,,1],[,1,,1,,1,,1,1,1,,1,1,1,,1,,,1,1,,1,1,1,1,1],[,1,1,1,1,1,,,1,1,,,,1,1,1,,,,1,1,,,1,1],[,,1,1,1,1,,1,,1,,1,,1,1,1,1,,,,,1,,1,,1],[1,1,1,1,1,1,1,1,,1,,1,,1,1,1,,,1,1,,,,1,,1],[,,,1],,[,1,1,,1,,,1,1,1,,1,1,1,1,1,1,,1,1,,1,1,1,1,1,1],[,1,,,,,,1,,1,,1,,,,,,,1,1,,1,1],[,,,,,,1,,1,1,,1,,1,,,,,,,,,,1],[,1,1,,1,,,,1,,,,1,1,1,,,,1,,1,1,1,,1,1],,[,1,1,,,,,,,,,,,,,1,,,1,,,,,1],[,1,,,,,,,,,,,,,,,,,,,,,,1],[,1,1,,,,,,,1,,,,1,,,,,1,,,,,,,1]],[,[,1,1,1,1,1,,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1],[,1,1,1,1,1,,1,,1,1,,,1,1,1,1,,1,,,,,1,1,1],[,,1,1,,1,,1,1,,,,1,1,1,1,,,1,,1,1,1,1,,1],[,1,,1,,,,,,,,1,,1,,1,,,,,,,,,,1],[,,1,,1,,,1,,,,,1,1,,,1,,1,1,1,1],[,1],[,1,1,,1,,1,1,,1,,,1,1,1,,,,1,,,1,,1],[1,1,,1,1,1,,,,,,,,,,,,,1,,1,1,1],[,1,1,,,,,,,1,,,1,,1,,1,,1,1,,,1,,,1],[,,1,,,,,,,,,,,,,,,,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,,1,,1,,,,,1,1,1,,,1,,1,,,,1],[,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,1,,,1,1,1,,1,,1,1,1,,,1,1,1,1,,,,1,1],[,,,1,1,,,1,,1,,1,,1,1,1,1,,1,,,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,,,,,,,,,,,,,,,,,,1],[,1,1,,1,1,,1,,1,,,,1,1,,,1,1,,1,1,,1],[,1,1,1,1,1,,,1,1,1,,1,1,1,1,1,1,1,1,,1,1,,,1],[,1,1,1,1,1,,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[,1,1,,1,,,1,,,1,,1,1,1,1,1,,1,,1,1],[,,,,,1,,,,1,,,,,1,1,,,,1],[,1,,1,1,1,,1,,,1,1,1,,,1,,,1,,1,,,1],[,,1,,,,,,,,,1,,1,,,,,1,,1],[,1,1,,,,,,,,1,1,1,,,,,,,,1,,,,,1],[,,,,,,,,1,,,,,1,,,1]],[,[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,1,1,,,1,1,1,1,1,1,1,1,,,,,,,,,1,1],[,,,,,,,,1,,,,1,,1,,1],[,1,,,1,1,,1,,,,1,,,,,,,,1],[,1,,1,,1,,,,1,1,,1,,1,,,,1,1,1,1,1,,,1],,[,1,,,,,,,,1,,,1,1,,,1,,1,1,,1,,1],[,1,,,1,,,,,,,,1,,,,,,,1],[1,1,,,,,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,,1,1,1],,[,1,,,,,,1,,1,,1,1,1,1,1,,,1,,1,1,,,,1],[,1,1,,,1,,1,,1,,,1,1,1,1,,,1,,,1,,,,1],[,1,1,1,1,1,,1,1,1,,1,1,1,1,1,1,1,1,1,1,,,,1,,1],[,1,,,1,1,,1,1,,,1,1,,1,1,,1,,1,,1],[1,,1,,,,,1,,1,,1,1,1,1,,,,,1,1,,,,1,1],[,1,1,,,,,1,1,,,1,,1,1,1,1,,,,,,,,,,1],,[,1,1,,,1,,,,1,,1,1,1,1,1,,,,1,,,,1,,1],[,,,1,1,,,1,,,,,1,,1,1,1,,1,1,,,,,,1],[,1,,,,,,,,,,,1,,,,1,,,,,,,1,,1],[,1,1,1,1,1,1,1,,1,1,1,1,1,1,,1,1,1,,1,1,,1,1,1,1],[,1,,,,,,,,,,,,,,,,,,,1],[,1,,,,,,1,,,,,1,,1,,,1,1,,1,1,,1],[,1,,,,,,1,,,,,1,1,,,,,,,,1,,,,1],[,,,,,,,,,,,,,,,,,,1,,,1,,,,,1],[,,,,,,,1,,,,1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,1,,1,,,,,,,1,,,,,,,,1,,,1],[,1,,,,,,,1],[,,,,,,,,,,1],[,1,,,,,,1,1,,,,,,1],,[,1,1,,,,,,1,,,,,1,1,,,,1],[1,,1,,1,,,,,1,,,,,1,,,,,,,,,1,1],[,1,1,,,,,,,,,1,1,1,1,,,,1,,,,,1,,,1],,[,1,1,,1,,,1,1,,,1,,,1,1,1,,1,,1,1,1,,,,1],[,,,,,1,,,,,1,,,1,1,,,1,,1,,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,,1,1,,1,,,,1,,,,,,,,1],[,,,1,,,,,1,,,,,1,,1,,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,,,,,1],[,1,,,,,,1,,,,,,,1,1,1,,,1],[,1,,,,,,,,,,1,1,1,,,,,1,,,1],[,,,,,1,,1,,,,,1,1,1,,1,1,,1,1,1,,,1,1],[1,1,,,,,,,1,,,,,1,1,,,,,,,,,,,1],,[,1],[,,,,,,,,,,,,,,,,,,,,,,,,1],[,,1,,,,,1,,,1,,,,1,,1],[,1,,,,,,,,,1]]]
function Sl(e){e=Array.isArray(e)?e:Bl
var t=[]
return e.forEach((function(e,n){var r=String.fromCharCode(n+96).replace("`","")
Array.isArray(e)?t=t.concat(Sl(e).map((function(e){return r+e}))):t.push(r)})),t}var Ol=function(e){for(var t=Bl;e.length<3;)e+="`"
for(var n=0;n<=e.length-1;n++)if(!(t=t[e.charCodeAt(n)-96]))return!1
return!0},_l=function(e){C(n,e)
var t=A(n)
function n(e){var r,a,i,u
return j(this,n),(r=t.call(this))._props=function(e){var t,n,r,a=null!==(t=e.nodeName)&&void 0!==t?t:Pl[e.nodeType],o=null!==(n=null!==(r=e.nodeType)&&void 0!==r?r:Il[e.nodeName])&&void 0!==n?n:1
Yt("number"==typeof o,"nodeType has to be a number, got '".concat(o,"'")),Yt("string"==typeof a,"nodeName has to be a string, got '".concat(a,"'"))
var i=null
"input"===(a=a.toLowerCase())&&(i=(e.type||e.attributes&&e.attributes.type||"").toLowerCase(),Rl().includes(i)||(i="text"))
var u=O({},e,{nodeType:o,nodeName:a})
return i&&(u.type=i),delete u.attributes,Object.freeze(u)}(e),r._attrs=(a=e.attributes,i=void 0===a?{}:a,u={htmlFor:"for",className:"class"},Object.keys(i).reduce((function(e,t){var n=i[t]
return Yt("object"!==o(n)||null===n,"expects attributes not to be an object, '".concat(t,"' was")),void 0!==n&&(e[u[t]||t]=null!==n?String(n):null),e}),{})),r}return q(n,[{key:"props",get:function(){return this._props}},{key:"attr",value:function(e){var t
return null!==(t=this._attrs[e])&&void 0!==t?t:null}},{key:"hasAttr",value:function(e){return void 0!==this._attrs[e]}},{key:"attrNames",get:function(){return Object.keys(this._attrs)}}]),n}(_t),Il={"#cdata-section":2,"#text":3,"#comment":8,"#document":9,"#document-fragment":11},Pl={}
Object.keys(Il).forEach((function(e){Pl[Il[e]]=e}))
var jl=_l,Ml={}
z(Ml,{CssSelectorParser:function(){return ql.CssSelectorParser},doT:function(){return Ll.default},emojiRegexText:function(){return Si},memoize:function(){return Hl.default}})
var ql=U(Q()),Ll=U(At()),Hl=U(xt()),$l=U(kt()),Vl=U(Tt())
U(Nt()),Ll.default.templateSettings.strip=!1,"Promise"in n||$l.default.polyfill(),"Uint32Array"in n||(n.Uint32Array=Vl.Uint32Array),n.Uint32Array&&("some"in n.Uint32Array.prototype||Object.defineProperty(n.Uint32Array.prototype,"some",{value:Array.prototype.some}),"reduce"in n.Uint32Array.prototype||Object.defineProperty(n.Uint32Array.prototype,"reduce",{value:Array.prototype.reduce}))
var zl,Ul=function(e,t){if(e=e||function(){},t=t||i.log,!i._audit)throw new Error("No audit configured")
var n=i.utils.queue(),r=[]
Object.keys(i.plugins).forEach((function(e){n.defer((function(t){var n=function(e){r.push(e),t()}
try{i.plugins[e].cleanup(t,n)}catch(e){n(e)}}))}))
var o=i.utils.getFlattenedTree(a.body)
i.utils.querySelectorAll(o,"iframe, frame").forEach((function(e){n.defer((function(t,n){return i.utils.sendCommandToFrame(e.actualNode,{command:"cleanup-plugin"},t,n)}))})),n.then((function(n){0===r.length?e(n):t(r)})).catch(t)},Wl={}
function Gl(e){return Wl.hasOwnProperty(e)}function Yl(e){return"string"==typeof e&&Wl[e]?Wl[e]:"function"==typeof e?e:zl}var Ql={}
z(Ql,{allowedAttr:function(){return Kl},arialabelText:function(){return co},arialabelledbyText:function(){return lo},getAccessibleRefs:function(){return Zl},getElementUnallowedRoles:function(){return oc},getExplicitRole:function(){return yo},getImplicitRole:function(){return Yo},getOwnedVirtual:function(){return ai},getRole:function(){return ei},getRoleType:function(){return pu},getRolesByType:function(){return uc},getRolesWithNameFromContents:function(){return lc},implicitNodes:function(){return hc},implicitRole:function(){return Yo},isAccessibleRef:function(){return mc},isAriaRoleAllowedOnElement:function(){return ec},isUnsupportedRole:function(){return go},isValidRole:function(){return vo},label:function(){return Dc},labelVirtual:function(){return Ui},lookupTable:function(){return fc},namedFromContents:function(){return ri},requiredAttr:function(){return gc},requiredContext:function(){return vc},requiredOwned:function(){return yc},validateAttr:function(){return Fc},validateAttrValue:function(){return bc}})
var Kl=function(e){var t=Do.ariaRoles[e],n=B(Fo())
return t?(t.allowedAttrs&&n.push.apply(n,B(t.allowedAttrs)),t.requiredAttrs&&n.push.apply(n,B(t.requiredAttrs)),n):n},Xl=/^idrefs?$/
function Jl(e,t,n){if(e.hasAttribute){if("LABEL"===e.nodeName.toUpperCase()&&e.hasAttribute("for")){var r=e.getAttribute("for")
t[r]=t[r]||[],t[r].push(e)}for(var a=0;a<n.length;++a){var o=n[a],i=ko(e.getAttribute(o)||"")
if(i)for(var u=Wu(i),s=0;s<u.length;++s)t[u[s]]=t[u[s]]||[],t[u[s]].push(e)}}for(var l=0;l<e.childNodes.length;l++)1===e.childNodes[l].nodeType&&Jl(e.childNodes[l],t,n)}var Zl=function(e){e=e.actualNode||e
var t=Qr(e)
t=t.documentElement||t
var n=Tn.get("idRefsByRoot",(function(){return new WeakMap})),r=n.get(t)
return r||(r={},n.set(t,r),Jl(t,r,Object.keys(Do.ariaAttrs).filter((function(e){var t=Do.ariaAttrs[e].type
return Xl.test(t)})))),r[e.id]||[]},ec=function(e,t){var n=e instanceof _t?e:Nn(e),r=Yo(n),a=Go(n)
return Array.isArray(a.allowedRoles)?a.allowedRoles.includes(t):t!==r&&!!a.allowedRoles},tc=["doc-backlink","doc-biblioentry","doc-biblioref","doc-cover","doc-endnote","doc-glossref","doc-noteref"],nc={header:"banner",footer:"contentinfo"}
function rc(e){var t=[]
if(!e)return t
if(e.hasAttr("role")){var n=Wu(e.attr("role").toLowerCase())
t=t.concat(n)}return t.filter((function(e){return vo(e)}))}function ac(e,t,n,r){return!(!n||e!==r)||(!tc.includes(e)||pu(e)===r)&&ec(t,e)}var oc=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=e instanceof _t?e:Nn(e)
if(!$s(n))return[]
var r=n.props.nodeName,a=Yo(n)||nc[r],o=rc(n)
return o.filter((function(e){return!ac(e,n,t,a)}))},ic=function(e){return Object.keys(Do.ariaRoles).filter((function(t){return Do.ariaRoles[t].type===e}))},uc=function(e){return ic(e)},sc=function(){return Tn.get("ariaRolesNameFromContent",(function(){return Object.keys(Do.ariaRoles).filter((function(e){return Do.ariaRoles[e].nameFromContent}))}))},lc=function(){return sc()},cc=function(e){return null===e},dc=function(e){return null!==e},pc={attributes:{"aria-activedescendant":{type:"idref",allowEmpty:!0,unsupported:!1},"aria-atomic":{type:"boolean",values:["true","false"],unsupported:!1},"aria-autocomplete":{type:"nmtoken",values:["inline","list","both","none"],unsupported:!1},"aria-busy":{type:"boolean",values:["true","false"],unsupported:!1},"aria-checked":{type:"nmtoken",values:["true","false","mixed","undefined"],unsupported:!1},"aria-colcount":{type:"int",unsupported:!1},"aria-colindex":{type:"int",unsupported:!1},"aria-colspan":{type:"int",unsupported:!1},"aria-controls":{type:"idrefs",allowEmpty:!0,unsupported:!1},"aria-current":{type:"nmtoken",allowEmpty:!0,values:["page","step","location","date","time","true","false"],unsupported:!1},"aria-describedby":{type:"idrefs",allowEmpty:!0,unsupported:!1},"aria-describedat":{unsupported:!0,unstandardized:!0},"aria-details":{type:"idref",allowEmpty:!0,unsupported:!1},"aria-disabled":{type:"boolean",values:["true","false"],unsupported:!1},"aria-dropeffect":{type:"nmtokens",values:["copy","move","reference","execute","popup","none"],unsupported:!1},"aria-errormessage":{type:"idref",allowEmpty:!0,unsupported:!1},"aria-expanded":{type:"nmtoken",values:["true","false","undefined"],unsupported:!1},"aria-flowto":{type:"idrefs",allowEmpty:!0,unsupported:!1},"aria-grabbed":{type:"nmtoken",values:["true","false","undefined"],unsupported:!1},"aria-haspopup":{type:"nmtoken",allowEmpty:!0,values:["true","false","menu","listbox","tree","grid","dialog"],unsupported:!1},"aria-hidden":{type:"boolean",values:["true","false"],unsupported:!1},"aria-invalid":{type:"nmtoken",allowEmpty:!0,values:["true","false","spelling","grammar"],unsupported:!1},"aria-keyshortcuts":{type:"string",allowEmpty:!0,unsupported:!1},"aria-label":{type:"string",allowEmpty:!0,unsupported:!1},"aria-labelledby":{type:"idrefs",allowEmpty:!0,unsupported:!1},"aria-level":{type:"int",unsupported:!1},"aria-live":{type:"nmtoken",values:["off","polite","assertive"],unsupported:!1},"aria-modal":{type:"boolean",values:["true","false"],unsupported:!1},"aria-multiline":{type:"boolean",values:["true","false"],unsupported:!1},"aria-multiselectable":{type:"boolean",values:["true","false"],unsupported:!1},"aria-orientation":{type:"nmtoken",values:["horizontal","vertical"],unsupported:!1},"aria-owns":{type:"idrefs",allowEmpty:!0,unsupported:!1},"aria-placeholder":{type:"string",allowEmpty:!0,unsupported:!1},"aria-posinset":{type:"int",unsupported:!1},"aria-pressed":{type:"nmtoken",values:["true","false","mixed","undefined"],unsupported:!1},"aria-readonly":{type:"boolean",values:["true","false"],unsupported:!1},"aria-relevant":{type:"nmtokens",values:["additions","removals","text","all"],unsupported:!1},"aria-required":{type:"boolean",values:["true","false"],unsupported:!1},"aria-roledescription":{type:"string",allowEmpty:!0,unsupported:!1},"aria-rowcount":{type:"int",unsupported:!1},"aria-rowindex":{type:"int",unsupported:!1},"aria-rowspan":{type:"int",unsupported:!1},"aria-selected":{type:"nmtoken",values:["true","false","undefined"],unsupported:!1},"aria-setsize":{type:"int",unsupported:!1},"aria-sort":{type:"nmtoken",values:["ascending","descending","other","none"],unsupported:!1},"aria-valuemax":{type:"decimal",unsupported:!1},"aria-valuemin":{type:"decimal",unsupported:!1},"aria-valuenow":{type:"decimal",unsupported:!1},"aria-valuetext":{type:"string",unsupported:!1}},globalAttributes:["aria-atomic","aria-busy","aria-controls","aria-current","aria-describedby","aria-details","aria-disabled","aria-dropeffect","aria-flowto","aria-grabbed","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-live","aria-owns","aria-relevant","aria-roledescription"]}
pc.role={alert:{type:"widget",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},alertdialog:{type:"widget",attributes:{allowed:["aria-expanded","aria-modal","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["dialog","section"]},application:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage","aria-activedescendant"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["article","audio","embed","iframe","object","section","svg","video"]},article:{type:"structure",attributes:{allowed:["aria-expanded","aria-posinset","aria-setsize","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["article"],unsupported:!1},banner:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["header"],unsupported:!1,allowedElements:["section"]},button:{type:"widget",attributes:{allowed:["aria-expanded","aria-pressed","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,implicit:["button",'input[type="button"]','input[type="image"]','input[type="reset"]','input[type="submit"]',"summary"],unsupported:!1,allowedElements:[{nodeName:"a",attributes:{href:dc}}]},cell:{type:"structure",attributes:{allowed:["aria-colindex","aria-colspan","aria-rowindex","aria-rowspan","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["row"],implicit:["td","th"],unsupported:!1},checkbox:{type:"widget",attributes:{allowed:["aria-checked","aria-required","aria-readonly","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,implicit:['input[type="checkbox"]'],unsupported:!1,allowedElements:["button"]},columnheader:{type:"structure",attributes:{allowed:["aria-colindex","aria-colspan","aria-expanded","aria-rowindex","aria-rowspan","aria-required","aria-readonly","aria-selected","aria-sort","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["row"],implicit:["th"],unsupported:!1},combobox:{type:"composite",attributes:{allowed:["aria-autocomplete","aria-required","aria-activedescendant","aria-orientation","aria-errormessage"],required:["aria-expanded"]},owned:{all:["listbox","tree","grid","dialog","textbox"]},nameFrom:["author"],context:null,unsupported:!1,allowedElements:[{nodeName:"input",properties:{type:["text","search","tel","url","email"]}}]},command:{nameFrom:["author"],type:"abstract",unsupported:!1},complementary:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["aside"],unsupported:!1,allowedElements:["section"]},composite:{nameFrom:["author"],type:"abstract",unsupported:!1},contentinfo:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["footer"],unsupported:!1,allowedElements:["section"]},definition:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["dd","dfn"],unsupported:!1},dialog:{type:"widget",attributes:{allowed:["aria-expanded","aria-modal","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["dialog"],unsupported:!1,allowedElements:["section"]},directory:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,unsupported:!1,allowedElements:["ol","ul"]},document:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["body"],unsupported:!1,allowedElements:["article","embed","iframe","object","section","svg"]},"doc-abstract":{type:"section",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-acknowledgments":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-afterword":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-appendix":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-backlink":{type:"link",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,unsupported:!1,allowedElements:[{nodeName:"a",attributes:{href:dc}}]},"doc-biblioentry":{type:"listitem",attributes:{allowed:["aria-expanded","aria-level","aria-posinset","aria-setsize","aria-errormessage"]},owned:null,nameFrom:["author"],context:["doc-bibliography"],unsupported:!1,allowedElements:["li"]},"doc-bibliography":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:{one:["doc-biblioentry"]},nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-biblioref":{type:"link",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,unsupported:!1,allowedElements:[{nodeName:"a",attributes:{href:dc}}]},"doc-chapter":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-colophon":{type:"section",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-conclusion":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-cover":{type:"img",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1},"doc-credit":{type:"section",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-credits":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-dedication":{type:"section",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-endnote":{type:"listitem",attributes:{allowed:["aria-expanded","aria-level","aria-posinset","aria-setsize","aria-errormessage"]},owned:null,namefrom:["author"],context:["doc-endnotes"],unsupported:!1,allowedElements:["li"]},"doc-endnotes":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:{one:["doc-endnote"]},namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-epigraph":{type:"section",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1},"doc-epilogue":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-errata":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-example":{type:"section",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["aside","section"]},"doc-footnote":{type:"section",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["aside","footer","header"]},"doc-foreword":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-glossary":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:["term","definition"],namefrom:["author"],context:null,unsupported:!1,allowedElements:["dl"]},"doc-glossref":{type:"link",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author","contents"],context:null,unsupported:!1,allowedElements:[{nodeName:"a",attributes:{href:dc}}]},"doc-index":{type:"navigation",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["nav","section"]},"doc-introduction":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-noteref":{type:"link",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author","contents"],context:null,unsupported:!1,allowedElements:[{nodeName:"a",attributes:{href:dc}}]},"doc-notice":{type:"note",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-pagebreak":{type:"separator",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["hr"]},"doc-pagelist":{type:"navigation",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["nav","section"]},"doc-part":{type:"landmark",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-preface":{type:"landmark",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-prologue":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-pullquote":{type:"none",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["aside","section"]},"doc-qna":{type:"section",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-subtitle":{type:"sectionhead",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:{nodeName:["h1","h2","h3","h4","h5","h6"]}},"doc-tip":{type:"note",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["aside"]},"doc-toc":{type:"navigation",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["nav","section"]},feed:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:{one:["article"]},nameFrom:["author"],context:null,unsupported:!1,allowedElements:["article","aside","section"]},figure:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,implicit:["figure"],unsupported:!1},form:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["form"],unsupported:!1},grid:{type:"composite",attributes:{allowed:["aria-activedescendant","aria-expanded","aria-colcount","aria-level","aria-multiselectable","aria-readonly","aria-rowcount","aria-errormessage"]},owned:{one:["rowgroup","row"]},nameFrom:["author"],context:null,implicit:["table"],unsupported:!1},gridcell:{type:"widget",attributes:{allowed:["aria-colindex","aria-colspan","aria-expanded","aria-rowindex","aria-rowspan","aria-selected","aria-readonly","aria-required","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["row"],implicit:["td","th"],unsupported:!1},group:{type:"structure",attributes:{allowed:["aria-activedescendant","aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["details","optgroup"],unsupported:!1,allowedElements:["dl","figcaption","fieldset","figure","footer","header","ol","ul"]},heading:{type:"structure",attributes:{required:["aria-level"],allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,implicit:["h1","h2","h3","h4","h5","h6"],unsupported:!1},img:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["img"],unsupported:!1,allowedElements:["embed","iframe","object","svg"]},input:{nameFrom:["author"],type:"abstract",unsupported:!1},landmark:{nameFrom:["author"],type:"abstract",unsupported:!1},link:{type:"widget",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,implicit:["a[href]","area[href]"],unsupported:!1,allowedElements:["button",{nodeName:"input",properties:{type:["image","button"]}}]},list:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:{all:["listitem"]},nameFrom:["author"],context:null,implicit:["ol","ul","dl"],unsupported:!1},listbox:{type:"composite",attributes:{allowed:["aria-activedescendant","aria-multiselectable","aria-readonly","aria-required","aria-expanded","aria-orientation","aria-errormessage"]},owned:{all:["option"]},nameFrom:["author"],context:null,implicit:["select"],unsupported:!1,allowedElements:["ol","ul"]},listitem:{type:"structure",attributes:{allowed:["aria-level","aria-posinset","aria-setsize","aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["list"],implicit:["li","dt"],unsupported:!1},log:{type:"widget",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},main:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["main"],unsupported:!1,allowedElements:["article","section"]},marquee:{type:"widget",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},math:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["math"],unsupported:!1},menu:{type:"composite",attributes:{allowed:["aria-activedescendant","aria-expanded","aria-orientation","aria-errormessage"]},owned:{one:["menuitem","menuitemradio","menuitemcheckbox"]},nameFrom:["author"],context:null,implicit:['menu[type="context"]'],unsupported:!1,allowedElements:["ol","ul"]},menubar:{type:"composite",attributes:{allowed:["aria-activedescendant","aria-expanded","aria-orientation","aria-errormessage"]},owned:{one:["menuitem","menuitemradio","menuitemcheckbox"]},nameFrom:["author"],context:null,unsupported:!1,allowedElements:["ol","ul"]},menuitem:{type:"widget",attributes:{allowed:["aria-posinset","aria-setsize","aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["menu","menubar"],implicit:['menuitem[type="command"]'],unsupported:!1,allowedElements:["button","li",{nodeName:"iput",properties:{type:["image","button"]}},{nodeName:"a",attributes:{href:dc}}]},menuitemcheckbox:{type:"widget",attributes:{allowed:["aria-checked","aria-posinset","aria-setsize","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["menu","menubar"],implicit:['menuitem[type="checkbox"]'],unsupported:!1,allowedElements:[{nodeName:["button","li"]},{nodeName:"input",properties:{type:["checkbox","image","button"]}},{nodeName:"a",attributes:{href:dc}}]},menuitemradio:{type:"widget",attributes:{allowed:["aria-checked","aria-selected","aria-posinset","aria-setsize","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["menu","menubar"],implicit:['menuitem[type="radio"]'],unsupported:!1,allowedElements:[{nodeName:["button","li"]},{nodeName:"input",properties:{type:["image","button","radio"]}},{nodeName:"a",attributes:{href:dc}}]},navigation:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["nav"],unsupported:!1,allowedElements:["section"]},none:{type:"structure",attributes:null,owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:[{nodeName:["article","aside","dl","embed","figcaption","fieldset","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hr","iframe","li","ol","section","ul"]},{nodeName:"img",attributes:{alt:dc}}]},note:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["aside"]},option:{type:"widget",attributes:{allowed:["aria-selected","aria-posinset","aria-setsize","aria-checked","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["listbox"],implicit:["option"],unsupported:!1,allowedElements:[{nodeName:["button","li"]},{nodeName:"input",properties:{type:["checkbox","button"]}},{nodeName:"a",attributes:{href:dc}}]},presentation:{type:"structure",attributes:null,owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:[{nodeName:["article","aside","dl","embed","figcaption","fieldset","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hr","iframe","li","ol","section","ul"]},{nodeName:"img",attributes:{alt:dc}}]},progressbar:{type:"widget",attributes:{allowed:["aria-valuetext","aria-valuenow","aria-valuemax","aria-valuemin","aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["progress"],unsupported:!1},radio:{type:"widget",attributes:{allowed:["aria-selected","aria-posinset","aria-setsize","aria-required","aria-errormessage","aria-checked"]},owned:null,nameFrom:["author","contents"],context:null,implicit:['input[type="radio"]'],unsupported:!1,allowedElements:[{nodeName:["button","li"]},{nodeName:"input",properties:{type:["image","button"]}}]},radiogroup:{type:"composite",attributes:{allowed:["aria-activedescendant","aria-required","aria-expanded","aria-readonly","aria-errormessage","aria-orientation"]},owned:{all:["radio"]},nameFrom:["author"],context:null,unsupported:!1,allowedElements:{nodeName:["ol","ul","fieldset"]}},range:{nameFrom:["author"],type:"abstract",unsupported:!1},region:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["section[aria-label]","section[aria-labelledby]","section[title]"],unsupported:!1,allowedElements:{nodeName:["article","aside"]}},roletype:{type:"abstract",unsupported:!1},row:{type:"structure",attributes:{allowed:["aria-activedescendant","aria-colindex","aria-expanded","aria-level","aria-selected","aria-rowindex","aria-errormessage"]},owned:{one:["cell","columnheader","rowheader","gridcell"]},nameFrom:["author","contents"],context:["rowgroup","grid","treegrid","table"],implicit:["tr"],unsupported:!1},rowgroup:{type:"structure",attributes:{allowed:["aria-activedescendant","aria-expanded","aria-errormessage"]},owned:{all:["row"]},nameFrom:["author","contents"],context:["grid","table","treegrid"],implicit:["tbody","thead","tfoot"],unsupported:!1},rowheader:{type:"structure",attributes:{allowed:["aria-colindex","aria-colspan","aria-expanded","aria-rowindex","aria-rowspan","aria-required","aria-readonly","aria-selected","aria-sort","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["row"],implicit:["th"],unsupported:!1},scrollbar:{type:"widget",attributes:{required:["aria-controls","aria-valuenow"],allowed:["aria-valuetext","aria-orientation","aria-errormessage","aria-valuemax","aria-valuemin"]},owned:null,nameFrom:["author"],context:null,unsupported:!1},search:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:{nodeName:["aside","form","section"]}},searchbox:{type:"widget",attributes:{allowed:["aria-activedescendant","aria-autocomplete","aria-multiline","aria-readonly","aria-required","aria-placeholder","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:['input[type="search"]'],unsupported:!1,allowedElements:{nodeName:"input",properties:{type:"text"}}},section:{nameFrom:["author","contents"],type:"abstract",unsupported:!1},sectionhead:{nameFrom:["author","contents"],type:"abstract",unsupported:!1},select:{nameFrom:["author"],type:"abstract",unsupported:!1},separator:{type:"structure",attributes:{allowed:["aria-expanded","aria-orientation","aria-valuenow","aria-valuemax","aria-valuemin","aria-valuetext","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["hr"],unsupported:!1,allowedElements:["li"]},slider:{type:"widget",attributes:{allowed:["aria-valuetext","aria-orientation","aria-readonly","aria-errormessage","aria-valuemax","aria-valuemin"],required:["aria-valuenow"]},owned:null,nameFrom:["author"],context:null,implicit:['input[type="range"]'],unsupported:!1},spinbutton:{type:"widget",attributes:{allowed:["aria-valuetext","aria-required","aria-readonly","aria-errormessage","aria-valuemax","aria-valuemin"],required:["aria-valuenow"]},owned:null,nameFrom:["author"],context:null,implicit:['input[type="number"]'],unsupported:!1,allowedElements:{nodeName:"input",properties:{type:["text","tel"]}}},status:{type:"widget",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["output"],unsupported:!1,allowedElements:["section"]},structure:{type:"abstract",unsupported:!1},switch:{type:"widget",attributes:{allowed:["aria-errormessage"],required:["aria-checked"]},owned:null,nameFrom:["author","contents"],context:null,unsupported:!1,allowedElements:["button",{nodeName:"input",properties:{type:["checkbox","image","button"]}},{nodeName:"a",attributes:{href:dc}}]},tab:{type:"widget",attributes:{allowed:["aria-selected","aria-expanded","aria-setsize","aria-posinset","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["tablist"],unsupported:!1,allowedElements:[{nodeName:["button","h1","h2","h3","h4","h5","h6","li"]},{nodeName:"input",properties:{type:"button"}},{nodeName:"a",attributes:{href:dc}}]},table:{type:"structure",attributes:{allowed:["aria-colcount","aria-rowcount","aria-errormessage"]},owned:{one:["rowgroup","row"]},nameFrom:["author","contents"],context:null,implicit:["table"],unsupported:!1},tablist:{type:"composite",attributes:{allowed:["aria-activedescendant","aria-expanded","aria-level","aria-multiselectable","aria-orientation","aria-errormessage"]},owned:{all:["tab"]},nameFrom:["author"],context:null,unsupported:!1,allowedElements:["ol","ul"]},tabpanel:{type:"widget",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},term:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,implicit:["dt"],unsupported:!1},textbox:{type:"widget",attributes:{allowed:["aria-activedescendant","aria-autocomplete","aria-multiline","aria-readonly","aria-required","aria-placeholder","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:['input[type="text"]','input[type="email"]','input[type="password"]','input[type="tel"]','input[type="url"]',"input:not([type])","textarea"],unsupported:!1},timer:{type:"widget",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1},toolbar:{type:"structure",attributes:{allowed:["aria-activedescendant","aria-expanded","aria-orientation","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:['menu[type="toolbar"]'],unsupported:!1,allowedElements:["ol","ul"]},tooltip:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,unsupported:!1},tree:{type:"composite",attributes:{allowed:["aria-activedescendant","aria-multiselectable","aria-required","aria-expanded","aria-orientation","aria-errormessage"]},owned:{all:["treeitem"]},nameFrom:["author"],context:null,unsupported:!1,allowedElements:["ol","ul"]},treegrid:{type:"composite",attributes:{allowed:["aria-activedescendant","aria-colcount","aria-expanded","aria-level","aria-multiselectable","aria-readonly","aria-required","aria-rowcount","aria-orientation","aria-errormessage"]},owned:{one:["rowgroup","row"]},nameFrom:["author"],context:null,unsupported:!1},treeitem:{type:"widget",attributes:{allowed:["aria-checked","aria-selected","aria-expanded","aria-level","aria-posinset","aria-setsize","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["group","tree"],unsupported:!1,allowedElements:["li",{nodeName:"a",attributes:{href:dc}}]},widget:{type:"abstract",unsupported:!1},window:{nameFrom:["author"],type:"abstract",unsupported:!1}},pc.implicitHtmlRole=So,pc.elementsAllowedNoRole=[{nodeName:["base","body","caption","col","colgroup","datalist","dd","details","dt","head","html","keygen","label","legend","main","map","math","meta","meter","noscript","optgroup","param","picture","progress","script","source","style","template","textarea","title","track"]},{nodeName:"area",attributes:{href:dc}},{nodeName:"input",properties:{type:["color","data","datatime","file","hidden","month","number","password","range","reset","submit","time","week"]}},{nodeName:"link",attributes:{href:dc}},{nodeName:"menu",attributes:{type:"context"}},{nodeName:"menuitem",attributes:{type:["command","checkbox","radio"]}},{nodeName:"select",condition:function(e){return e instanceof i.AbstractVirtualNode||(e=i.utils.getNodeFromTree(e)),Number(e.attr("size"))>1},properties:{multiple:!0}},{nodeName:["clippath","cursor","defs","desc","feblend","fecolormatrix","fecomponenttransfer","fecomposite","feconvolvematrix","fediffuselighting","fedisplacementmap","fedistantlight","fedropshadow","feflood","fefunca","fefuncb","fefuncg","fefuncr","fegaussianblur","feimage","femerge","femergenode","femorphology","feoffset","fepointlight","fespecularlighting","fespotlight","fetile","feturbulence","filter","hatch","hatchpath","lineargradient","marker","mask","meshgradient","meshpatch","meshrow","metadata","mpath","pattern","radialgradient","solidcolor","stop","switch","view"]}],pc.elementsAllowedAnyRole=[{nodeName:"a",attributes:{href:cc}},{nodeName:"img",attributes:{alt:cc}},{nodeName:["abbr","address","canvas","div","p","pre","blockquote","ins","del","output","span","table","tbody","thead","tfoot","td","em","strong","small","s","cite","q","dfn","abbr","time","code","var","samp","kbd","sub","sup","i","b","u","mark","ruby","rt","rp","bdi","bdo","br","wbr","th","tr"]}],pc.evaluateRoleForElement={A:function(e){var t=e.node,n=e.out
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
return!(!t.parentNode||"http://www.w3.org/2000/svg"!==t.parentNode.namespaceURI)||n}},pc.rolesOfType={widget:["button","checkbox","dialog","gridcell","link","log","marquee","menuitem","menuitemcheckbox","menuitemradio","option","progressbar","radio","scrollbar","searchbox","slider","spinbutton","status","switch","tab","tabpanel","textbox","timer","tooltip","tree","treeitem"]}
var fc=pc,hc=function(e){var t=null,n=fc.role[e]
return n&&n.implicit&&(t=_n(n.implicit)),t},mc=function(e){return!!Zl(e).length},Dc=function(e){return e=Nn(e),Ui(e)},gc=function(e){var t=Do.ariaRoles[e]
return t&&Array.isArray(t.requiredAttrs)?B(t.requiredAttrs):[]},vc=function(e){var t=Do.ariaRoles[e]
return t&&Array.isArray(t.requiredContext)?B(t.requiredContext):null},yc=function(e){var t=Do.ariaRoles[e]
return t&&Array.isArray(t.requiredOwned)?B(t.requiredOwned):null},bc=function(e,t){var n,r,a=(e=e instanceof _t?e:Nn(e)).attr(t),o=Do.ariaAttrs[t]
if(!o)return!0
if(o.allowEmpty&&(!a||""===a.trim()))return!0
switch(o.type){case"boolean":return["true","false"].includes(a.toLowerCase())
case"nmtoken":return"string"==typeof a&&o.values.includes(a.toLowerCase())
case"nmtokens":return(r=Wu(a)).reduce((function(e,t){return e&&o.values.includes(t)}),0!==r.length)
case"idref":try{var i=Qr(e.actualNode)
return!(!a||!i.getElementById(a))}catch(e){throw new TypeError("Cannot resolve id references for partial DOM")}case"idrefs":return uo(e,t).some((function(e){return!!e}))
case"string":return""!==a.trim()
case"decimal":return!(!(n=a.match(/^[-+]?([0-9]*)\.?([0-9]*)$/))||!n[1]&&!n[2])
case"int":var u=void 0!==o.minValue?o.minValue:-1/0
return/^[-+]?[0-9]+$/.test(a)&&parseInt(a)>=u}},Fc=function(e){return!!Do.ariaAttrs[e]}
function wc(e,t,n){var r=Do.ariaRoles[e]
return r?r.prohibitedAttrs||[]:e||n.includes(t)?[]:["aria-label","aria-labelledby"]}var Ec={}
function Cc(e,t){return"separator"===t&&!No(e)}function xc(e,t){var n
return void 0!==(null===(n=e.implicitAttrs)||void 0===n?void 0:n[t])}function Ac(e,t){return"combobox"===t&&"false"===e.attr("aria-expanded")}function kc(e,t,n,r){var a=yo(e)
if(n||(n=vc(a)),!n)return null
for(var o=n.includes("group"),i=r?e:e.parent;i;){var u=ei(i,{noPresentational:!0})
if(u){if("group"!==u||!o)return n.includes(u)?null:n
t.includes(a)&&n.push(a),n=n.filter((function(e){return"group"!==e})),i=i.parent}else i=i.parent}return n}z(Ec,{getAriaRolesByType:function(){return ic},getAriaRolesSupportingNameFromContent:function(){return sc},getElementSpec:function(){return Go},getElementsByContentType:function(){return bo},getGlobalAriaAttrs:function(){return Fo},implicitHtmlRoles:function(){return So}})
var Tc={ARTICLE:!0,ASIDE:!0,NAV:!0,SECTION:!0},Nc={application:!0,banner:!1,complementary:!0,contentinfo:!0,form:!0,main:!0,navigation:!0,region:!0,search:!1},Rc={}
z(Rc,{Color:function(){return xu},centerPointOfRect:function(){return Bc},elementHasImage:function(){return wu},elementIsDistinct:function(){return Oc},filteredRectStack:function(){return Ic},flattenColors:function(){return qc},flattenShadowColors:function(){return Lc},getBackgroundColor:function(){return Wc},getBackgroundStack:function(){return Hc},getContrast:function(){return Kc},getForegroundColor:function(){return Xc},getOwnBackgroundColor:function(){return Au},getRectStack:function(){return _c},getTextShadowColors:function(){return Uc},hasValidContrastRatio:function(){return td},incompleteData:function(){return Fu}})
var Bc=function(e){if(!(e.left>n.innerWidth||e.top>n.innerHeight))return{x:Math.min(Math.ceil(e.left+e.width/2),n.innerWidth-1),y:Math.min(Math.ceil(e.top+e.height/2),n.innerHeight-1)}}
function Sc(e){return e.getPropertyValue("font-family").split(/[,;]/g).map((function(e){return e.trim().toLowerCase()}))}var Oc=function(e,t){var r=n.getComputedStyle(e)
if("none"!==r.getPropertyValue("background-image"))return!0
if(["border-bottom","border-top","outline"].reduce((function(e,t){var n=new xu
return n.parseString(r.getPropertyValue(t+"-color")),e||"none"!==r.getPropertyValue(t+"-style")&&parseFloat(r.getPropertyValue(t+"-width"))>0&&0!==n.alpha}),!1))return!0
var a=n.getComputedStyle(t)
if(Sc(r)[0]!==Sc(a)[0])return!0
var o=["text-decoration-line","text-decoration-style","font-weight","font-style","font-size"].reduce((function(e,t){return e||r.getPropertyValue(t)!==a.getPropertyValue(t)}),!1),i=r.getPropertyValue("text-decoration")
return i.split(" ").length<3&&(o=o||i!==a.getPropertyValue("text-decoration")),o},_c=function(e){var t=ao(e),n=Ji(e)
return!n||n.length<=1?[t]:n.some((function(e){return void 0===e}))?null:(n.splice(0,0,t),n)},Ic=function(e){var t=_c(e)
if(t&&1===t.length)return t[0]
if(t&&t.length>1){var n,r=t.shift()
return t.forEach((function(a,o){if(0!==o){var i=t[o-1],u=t[o]
n=i.every((function(e,t){return e===u[t]}))||r.includes(e)}})),n?t[0]:(Fu.set("bgColor","elmPartiallyObscuring"),null)}return Fu.set("bgColor","outsideViewport"),null}
function Pc(e,t,n){return Math.min(Math.max(t,e),n)}var jc={normal:function(e,t){return t},multiply:function(e,t){return t*e},screen:function(e,t){return e+t-e*t},overlay:function(e,t){return this["hard-light"](t,e)},darken:function(e,t){return Math.min(e,t)},lighten:function(e,t){return Math.max(e,t)},"color-dodge":function(e,t){return 0===e?0:1===t?1:Math.min(1,e/(1-t))},"color-burn":function(e,t){return 1===e?1:0===t?0:1-Math.min(1,(1-e)/t)},"hard-light":function(e,t){return t<=.5?this.multiply(e,2*t):this.screen(e,2*t-1)},"soft-light":function(e,t){return t<=.5?e-(1-2*t)*e*(1-e):e+(2*t-1)*((e<=.25?((16*e-12)*e+4)*e:Math.sqrt(e))-e)},difference:function(e,t){return Math.abs(e-t)},exclusion:function(e,t){return e+t-2*e*t}}
function Mc(e,t,n,r,a){return t*(1-r)*e+t*r*jc[a](n/255,e/255)*255+(1-t)*r*n}var qc=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"normal",r=Mc(e.red,e.alpha,t.red,t.alpha,n),a=Mc(e.green,e.alpha,t.green,t.alpha,n),o=Mc(e.blue,e.alpha,t.blue,t.alpha,n),i=Pc(e.alpha+t.alpha*(1-e.alpha),0,1)
if(0===i)return new xu(r,a,o,i)
var u=Math.round(r/i),s=Math.round(a/i),l=Math.round(o/i)
return new xu(u,s,l,i)}
function Lc(e,t){var n=e.alpha,r=(1-n)*t.red+n*e.red,a=(1-n)*t.green+n*e.green,o=(1-n)*t.blue+n*e.blue,i=e.alpha+t.alpha*(1-e.alpha)
return new xu(r,a,o,i)}function Hc(e){for(var t=Ji(e).map((function(t){return function(e){var t=e.indexOf(a.body),r=e,o=Au(n.getComputedStyle(a.documentElement))
if(t>1&&0===o.alpha&&!wu(a.documentElement)){t>1&&(r.splice(t,1),r.push(a.body))
var i=r.indexOf(a.documentElement)
i>0&&(r.splice(i,1),r.push(a.documentElement))}return r}(t=Ou(t,e))})),r=0;r<t.length;r++){var o=t[r]
if(o[0]!==e)return Fu.set("bgColor","bgOverlap"),null
if(0!==r&&!$c(o,t[0]))return Fu.set("bgColor","elmPartiallyObscuring"),null}return t[0]||null}function $c(e,t){if(e===t)return!0
if(null===e||null===t)return!1
if(e.length!==t.length)return!1
for(var n=0;n<e.length;++n)if(e[n]!==t[n])return!1
return!0}function Vc(e){var t={pixels:[]},n=e.trim(),r=[t]
if(!n)return[]
for(;n;){var a=n.match(/^rgba?\([0-9,.\s]+\)/i)||n.match(/^[a-z]+/i)||n.match(/^#[0-9a-f]+/i),o=n.match(/^([0-9.-]+)px/i)||n.match(/^(0)/)
if(a)Yt(!t.colorStr,"Multiple colors identified in text-shadow: ".concat(e)),n=n.replace(a[0],"").trim(),t.colorStr=a[0]
else if(o){Yt(t.pixels.length<3,"Too many pixel units in text-shadow: ".concat(e)),n=n.replace(o[0],"").trim()
var i=parseFloat(("."===o[1][0]?"0":"")+o[1])
t.pixels.push(i)}else{if(","!==n[0])throw new Error("Unable to process text-shadows: ".concat(e))
Yt(t.pixels.length>=2,"Missing pixel value in text-shadow: ".concat(e)),t={pixels:[]},r.push(t),n=n.substr(1).trim()}}return r}function zc(e){var t=e.colorStr,n=e.offsetX,r=e.offsetY,a=e.blurRadius,o=e.fontSize
if(n>a||r>a)return new xu(0,0,0,0)
var i=new xu
return i.parseString(t),i.alpha*=function(e,t){return 0===e?1:.185/(e/t+.4)}(a,o),i}var Uc=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.minRatio,a=t.maxRatio,o=n.getComputedStyle(e),i=o.getPropertyValue("text-shadow")
if("none"===i)return[]
var u=o.getPropertyValue("font-size"),s=parseInt(u)
Yt(!1===isNaN(s),"Unable to determine font-size value ".concat(u))
var l=[],c=Vc(i)
return c.forEach((function(e){var t=e.colorStr,n=e.pixels
t=t||o.getPropertyValue("color")
var i=_(n,3),u=i[0],c=i[1],d=i[2],p=void 0===d?0:d
if((!r||p>=s*r)&&(!a||p<s*a)){var f=zc({colorStr:t,offsetY:u,offsetX:c,blurRadius:p,fontSize:s})
l.push(f)}})),l}
function Wc(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.1,r=Nn(e),a=r._cache.getBackgroundColor
if(a)return t.push.apply(t,B(a.bgElms)),Fu.set("bgColor",a.incompleteData),a.bgColor
var o=Gc(e,t,n)
return r._cache.getBackgroundColor={bgColor:o,bgElms:t,incompleteData:Fu.get("bgColor")},o}function Gc(e,t,r){var o,i=Uc(e,{minRatio:r})
i.length&&(i=[{color:i.reduce(Lc)}])
var u=Hc(e),s=Xi(e)
if((u||[]).some((function(e){var r=n.getComputedStyle(e)
if(wu(e,r))return i=null,t.push(e),!0
var a=Au(r)
if(0===a.alpha)return!1
if("inline"!==r.getPropertyValue("display")&&!Yc(e,s))return i=null,t.push(e),Fu.set("bgColor","elmPartiallyObscured"),!0
t.push(e)
var o=r.getPropertyValue("mix-blend-mode")
return i.unshift({color:a,blendMode:Qc(o)}),1===a.alpha})),null===i||null===u)return null
var l=function(e,t){var r=[]
if(!t){var o=a.documentElement,i=a.body,u=n.getComputedStyle(o),s=n.getComputedStyle(i),l=Au(u),c=Au(s),d=0!==c.alpha&&Yc(i,e.getBoundingClientRect());(0!==c.alpha&&0===l.alpha||d&&1!==c.alpha)&&r.unshift({color:c,blendMode:Qc(s.getPropertyValue("mix-blend-mode"))}),0!==l.alpha&&(!d||d&&1!==c.alpha)&&r.unshift({color:l,blendMode:Qc(u.getPropertyValue("mix-blend-mode"))})}return r}(e,u.includes(a.body))
if((o=i).unshift.apply(o,B(l)),0===i.length)return new xu(255,255,255,1)
var c=i.reduce((function(e,t){return qc(t.color,e.color instanceof xu?e.color:e,t.blendMode)}))
return qc(c.color instanceof xu?c.color:c,new xu(255,255,255,1))}function Yc(e,t){t=Array.isArray(t)?t:[t]
var r=e.getBoundingClientRect(),a=r.right,o=r.bottom,i=n.getComputedStyle(e).getPropertyValue("overflow")
return(["scroll","auto"].includes(i)||e instanceof n.HTMLHtmlElement)&&(a=r.left+e.scrollWidth,o=r.top+e.scrollHeight),t.every((function(e){return e.top>=r.top&&e.bottom<=o&&e.left>=r.left&&e.right<=a}))}function Qc(e){return e||void 0}var Kc=function(e,t){if(!t||!e)return null
t.alpha<1&&(t=qc(t,e))
var n=e.getRelativeLuminance(),r=t.getRelativeLuminance()
return(Math.max(r,n)+.05)/(Math.min(r,n)+.05)}
function Xc(e,t,r){var a,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=n.getComputedStyle(e),u=ed(e,i),s=Zc(i,o)
if(s&&s.alpha*u==1)return s.alpha=1,s
var l=Jc(i),c=s?qc(s,l):l
if(c.alpha*u==1)return c.alpha=1,c
var d=Uc(e,{minRatio:0})
if((c=d.reduce((function(e,t){return qc(e,t)}),c)).alpha*u==1)return c.alpha=1,c
if(null!==(a=r)&&void 0!==a||(r=Wc(e,[])),null===r){var p=Fu.get("bgColor")
return Fu.set("fgColor",p),null}return c.alpha=c.alpha*u,qc(c,r)}function Jc(e){return(new xu).parseString(e.getPropertyValue("-webkit-text-fill-color")||e.getPropertyValue("color"))}function Zc(e,t){var n=t.textStrokeEmMin,r=void 0===n?0:n,a=parseFloat(e.getPropertyValue("-webkit-text-stroke-width"))
if(0===a)return null
var o=e.getPropertyValue("font-size"),i=a/parseFloat(o)
if(isNaN(i)||i<r)return null
var u=e.getPropertyValue("-webkit-text-stroke-color")
return(new xu).parseString(u)}function ed(e,t){var r
if(!e)return 1
var a=Nn(e)
if(a&&void 0!==a._opacity&&null!==a._opacity)return a._opacity
null!==(r=t)&&void 0!==r||(t=n.getComputedStyle(e))
var o=t.getPropertyValue("opacity")*ed(e.parentElement)
return a&&(a._opacity=o),o}var td=function(e,t,n,r){var a=Kc(e,t),o=r&&Math.ceil(72*n)/96<14||!r&&Math.ceil(72*n)/96<18?4.5:3
return{isValid:a>o,contrastRatio:a,expectedContrastRatio:o}},nd=ea((function(e,t){var r=n.getComputedStyle(e,t),a=function(e,t){return r.getPropertyValue(e)===t}
if(a("content","none")||a("display","none")||a("visibility","hidden")||!1===a("position","absolute"))return 0
if(0===Au(r).alpha&&a("background-image","none"))return 0
var o=rd(r.getPropertyValue("width")),i=rd(r.getPropertyValue("height"))
return"px"!==o.unit||"px"!==i.unit?0===o.value||0===i.value?0:1/0:o.value*i.value}))
function rd(e){var t=_(e.match(/^([0-9.]+)([a-z]+)$/i)||[],3),n=t[1],r=void 0===n?"":n,a=t[2],o=void 0===a?"":a
return{value:parseFloat(r),unit:o.toLowerCase()}}function ad(e,t){var n=e.getRelativeLuminance(),r=t.getRelativeLuminance()
return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}var od=["block","list-item","table","flex","grid","inline-block"]
function id(e){var t=n.getComputedStyle(e).getPropertyValue("display")
return-1!==od.indexOf(t)||"table-"===t.substr(0,6)}var ud=["block","list-item","table","flex","grid","inline-block"]
function sd(e){var t=n.getComputedStyle(e).getPropertyValue("display")
return-1!==ud.indexOf(t)||"table-"===t.substr(0,6)}function ld(e){if(du(e))return!0
if(!e.children){if(1===e.props.nodeType)throw new Error("Cannot determine children")
return!1}return e.children.some((function(e){return ld(e)}))}function cd(e){if(!e.children){if(1===e.props.nodeType)throw new Error("Cannot determine children")
return[]}var t=[]
return e.children.forEach((function(e){"widget"===pu(e)&&No(e)?t.push(e):t.push.apply(t,B(cd(e)))})),t}function dd(e){var t=parseInt(e.attr("tabindex"),10)
return!isNaN(t)&&t<0}function pd(e,t){var n=fd(t),r=fd(e)
return!(!n||!r)&&n.includes(r)}function fd(e){var t=Hi(e,{emoji:!0,nonBmp:!0,punctuations:!0})
return ko(t)}function hd(e){return""!==(e||"").trim()}function md(e,t,n){var r=n.validRoles,a=void 0===r?[]:r,o=n.validNodeNames,i=void 0===o?[]:o,u=e.props,s=u.nodeName,l=u.nodeType,c=u.nodeValue,d=t?"div > ":""
if(3===l&&""!==c.trim())return d+"#text"
if(1!==l||!gi(e))return!1
var p=yo(e)
return p?!a.includes(p)&&d+"[role=".concat(p,"]"):!i.includes(s)&&d+s}function Dd(e){return"div"===e.props.nodeName&&null===yo(e)}function gd(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
return e.map((function(e){return{vChild:e,nested:t}}))}function vd(e,t){var n=e.boundingClientRect,r=t.boundingClientRect
return n.top>=r.top&&n.left>=r.left&&n.bottom<=r.bottom&&n.right<=r.right}function yd(e){return e.getComputedStylePropertyValue("pointer-events")}function bd(e){return{width:Math.round(10*e.width)/10,height:Math.round(10*e.height)/10}}function Fd(e,t){return e.actualNode.contains(t.actualNode)&&!du(t)}function wd(e,t){var n=t.width,r=t.height
return n+.05>=e&&r+.05>=e}function Ed(e){return e.map((function(e){return e.actualNode}))}function Cd(e,t){var n,r=null===(n=t.data)||void 0===n?void 0:n.headingOrder,a=Ad(t.node.ancestry,1)
if(!r)return e
var o=r.map((function(e){return function(e,t){return O({},e,{ancestry:t.concat(e.ancestry)})}(e,a)})),i=function(e,t){for(;t.length;){var n=xd(e,t)
if(-1!==n)return n
t=Ad(t,1)}return-1}(e,a)
return-1===i?e.push.apply(e,B(o)):e.splice.apply(e,[i,0].concat(B(o))),e}function xd(e,t){return e.findIndex((function(e){return Us(e.ancestry,t)}))}function Ad(e,t){return e.slice(0,e.length-t)}function kd(e){var t=ei(e),n=t&&t.includes("heading"),r=e.attr("aria-level"),a=parseInt(r,10),o=_(e.props.nodeName.match(/h(\d)/)||[],2)[1]
return n?o&&!r?parseInt(o,10):isNaN(a)||a<1?o?parseInt(o,10):2:a||-1:-1}function Td(e,t){if(!e||!t)return!1
var n=Object.getOwnPropertyNames(e),r=Object.getOwnPropertyNames(t)
return n.length===r.length&&n.every((function(n){var r=e[n],a=t[n]
return o(r)===o(a)&&("object"===o(r)||"object"===o(a)?Td(r,a):r===a)}))}var Nd={}
z(Nd,{aria:function(){return Ql},color:function(){return Rc},dom:function(){return Gr},forms:function(){return Rd},matches:function(){return Wo},math:function(){return Qa},standards:function(){return Ec},table:function(){return Od},text:function(){return io},utils:function(){return It}})
var Rd={}
z(Rd,{isAriaCombobox:function(){return xi},isAriaListbox:function(){return Ci},isAriaRange:function(){return ki},isAriaTextbox:function(){return Ei},isDisabled:function(){return Sd},isNativeSelect:function(){return wi},isNativeTextbox:function(){return Fi}})
var Bd=["fieldset","button","select","input","textarea"],Sd=function e(t){var n=t._isDisabled
if("boolean"==typeof n)return n
var r=t.props.nodeName,a=t.attr("aria-disabled")
return n=!(!Bd.includes(r)||!t.hasAttr("disabled"))||(a?"true"===a.toLowerCase():!!t.parent&&e(t.parent)),t._isDisabled=n,n},Od={}
z(Od,{getAllCells:function(){return _d},getCellPosition:function(){return Eo},getHeaders:function(){return Pd},getScope:function(){return Co},isColumnHeader:function(){return xo},isDataCell:function(){return jd},isDataTable:function(){return Md},isHeader:function(){return qd},isRowHeader:function(){return Ao},toArray:function(){return wo},toGrid:function(){return wo},traverse:function(){return Hd}})
var _d=function(e){var t,n,r,a,o=[]
for(t=0,r=e.rows.length;t<r;t++)for(n=0,a=e.rows[t].cells.length;n<a;n++)o.push(e.rows[t].cells[n])
return o}
function Id(e,t,n){for(var r,a="row"===e?"_rowHeaders":"_colHeaders",o="row"===e?Ao:xo,u=n[t.y][t.x],s=u.colSpan-1,l=u.getAttribute("rowspan"),c=(0===parseInt(l)||0===u.rowspan?n.length:u.rowSpan)-1,d=t.y+c,p=t.x+s,f="row"===e?t.y:0,h="row"===e?0:t.x,m=[],D=d;D>=f&&!r;D--)for(var g=p;g>=h;g--){var v=n[D]?n[D][g]:void 0
if(v){var y=i.utils.getNodeFromTree(v)
if(y[a]){r=y[a]
break}m.push(v)}}return r=(r||[]).concat(m.filter(o)),m.forEach((function(e){i.utils.getNodeFromTree(e)[a]=r})),r}var Pd=function(e,t){if(e.getAttribute("headers")){var n=uo(e,"headers")
if(n.filter((function(e){return e})).length)return n}t||(t=wo(Jr(e,"table")))
var r=Eo(e,t),a=Id("row",r,t),o=Id("col",r,t)
return[].concat(a,o).reverse()},jd=function(e){if(!e.children.length&&!e.textContent.trim())return!1
var t=e.getAttribute("role")
return vo(t)?["cell","gridcell"].includes(t):"TD"===e.nodeName.toUpperCase()},Md=function(e){var t=(e.getAttribute("role")||"").toLowerCase()
if(("presentation"===t||"none"===t)&&!No(e))return!1
if("true"===e.getAttribute("contenteditable")||Jr(e,'[contenteditable="true"]'))return!0
if("grid"===t||"treegrid"===t||"table"===t)return!0
if("landmark"===pu(t))return!0
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
h=n.getComputedStyle(o).getPropertyValue("background-image")}return s>=20||!(Ea(e).width>.95*Ca(n).width)&&!(u<10)&&!e.querySelector("object, embed, iframe, applet")},qd=function(e){if(xo(e)||Ao(e))return!0
if(e.getAttribute("id")){var t=Kt(e.getAttribute("id"))
return!!a.querySelector('[headers~="'.concat(t,'"]'))}return!1}
function Ld(e,t,n,r){var a,o=n[t.y]?n[t.y][t.x]:void 0
return o?"function"==typeof r&&!0===(a=r(o,t,n))?[o]:((a=Ld(e,{x:t.x+e.x,y:t.y+e.y},n,r)).unshift(o),a):[]}var Hd=function(e,t,n,r){if(Array.isArray(t)&&(r=n,n=t,t={x:0,y:0}),"string"==typeof e)switch(e){case"left":e={x:-1,y:0}
break
case"up":e={x:0,y:-1}
break
case"right":e={x:1,y:0}
break
case"down":e={x:0,y:1}}return Ld(e,{x:t.x+e.x,y:t.y+e.y},n,r)},$d=/[;,\s]/,Vd=/^[0-9.]+$/
function zd(e){switch(e){case"lighter":return 100
case"normal":return 400
case"bold":return 700
case"bolder":return 900}return e=parseInt(e),isNaN(e)?400:e}function Ud(e){var t=n.getComputedStyle(function(e){for(var t=e,n=e.textContent.trim(),r=n;r===n&&void 0!==t;){var a=-1
if(0===(e=t).children.length)return e
do{a++,r=e.children[a].textContent.trim()}while(""===r&&a+1<e.children.length)
t=e.children[a]}return e}(e))
return{fontWeight:zd(t.getPropertyValue("font-weight")),fontSize:parseInt(t.getPropertyValue("font-size")),isItalic:"italic"===t.getPropertyValue("font-style")}}function Wd(e,t,n){return n.reduce((function(n,r){return n||(!r.size||e.fontSize/r.size>t.fontSize)&&(!r.weight||e.fontWeight-r.weight>t.fontWeight)&&(!r.italic||e.isItalic&&!t.isItalic)}),!1)}var Gd=ic("landmark"),Yd=["alert","log","status"]
function Qd(e,t){var n=e.actualNode
if("button"===ei(e)||function(e,t){var n=e.actualNode,r=ei(e),a=(n.getAttribute("aria-live")||"").toLowerCase().trim()
return!!(["assertive","polite"].includes(a)||Yd.includes(r)||Gd.includes(r)||t.regionMatcher&&Wo(e,t.regionMatcher))}(e,t)||["iframe","frame"].includes(e.props.nodeName)||Tu(e.actualNode)&&Ua(e.actualNode,"href")||!gi(n)){for(var r=e;r;)r._hasRegionDescendant=!0,r=r.parent
return["iframe","frame"].includes(e.props.nodeName)?[e]:[]}return n!==a.body&&au(n,!0)?[e]:e.children.filter((function(e){return 1===e.actualNode.nodeType})).map((function(e){return Qd(e,t)})).reduce((function(e,t){return e.concat(t)}),[])}function Kd(e){return"caption"===e.props.nodeName}function Xd(e){return!e||"true"!==e.getAttribute("aria-hidden")&&Xd(Fa(e))}var Jd=function(e,t,n){return n.initiator},Zd={emoji:!0,nonBmp:!1,punctuations:!0},ep=function(e,t){try{return"svg"===t.props.nodeName||!!Qn(t,"svg")}catch(e){return!1}},tp=function(e,t){var n=yo(t)
return!(n&&!["none","presentation"].includes(n)&&!(fo[n]||{}).accessibleNameRequired&&!No(t))}
function np(e){var t
if(null==e||null===(t=e.ownerDocument)||void 0===t||!t.createRange)return!0
var n=e.ownerDocument.createRange()
return n.setStart(e,0),n.setEnd(e,e.childNodes.length),0===n.getClientRects().length}var rp=[function(e,t){return ap(t)},function(e,t){return function(e){return"area"!==e.props.nodeName}(t)},function(e,t){return!ep(0,t)},function(e,t){return No(t)},function(e,t){return du(t)||!op(t)},function(e){return!Du(e,{noLengthCompare:!0})}]
function ap(e){return"widget"===pu(e)}var op=ea((function e(t){return!(null==t||!t.parent)&&(!(!ap(t.parent)||!du(t.parent))||e(t.parent))})),ip={"abstractrole-evaluate":function(e,t,n){var r=Wu(n.attr("role")).filter((function(e){return"abstract"===pu(e)}))
return r.length>0&&(this.data(r),!0)},"accesskeys-after":function(e){var t={}
return e.filter((function(e){if(!e.data)return!1
var n=e.data.toUpperCase()
return t[n]?(t[n].relatedNodes.push(e.relatedNodes[0]),!1):(t[n]=e,e.relatedNodes=[],!0)})).map((function(e){return e.result=!!e.relatedNodes.length,e}))},"accesskeys-evaluate":function(e,t,n){return va(n)||(this.data(n.attr("accesskey")),this.relatedNodes([e])),!0},"alt-space-value-evaluate":function(e,t,n){var r=n.attr("alt")
return"string"==typeof r&&/^\s+$/.test(r)},"aria-allowed-attr-evaluate":function(e,t,n){var r=[],a=ei(n),o=n.attrNames,i=Kl(a)
Array.isArray(t[a])&&(i=al(t[a].concat(i)))
var u=Tn.get("aria-allowed-attr-table",(function(){return new WeakMap}))
function s(){if(n.parent&&"row"===a){var e=Qn(n,'table, [role="treegrid"], [role="table"], [role="grid"]'),t=u.get(e)
if(e&&!t&&(t=ei(e),u.set(e,t)),["table","grid"].includes(t)&&"row"===a)return!0}}var l=Array.isArray(t.validTreeRowAttrs)?t.validTreeRowAttrs:[],c={}
if(l.forEach((function(e){c[e]=s})),i)for(var d=0;d<o.length;d++){var p,f=o[d];(Fc(f)&&null!==(p=c[f])&&void 0!==p&&p.call(c)||Fc(f)&&!i.includes(f))&&r.push(f+'="'+n.attr(f)+'"')}if(r.length){if(this.data(r),!$s(n)&&!a&&!No(n))return
return!1}return!0},"aria-allowed-attr-matches":function(e,t){var n=/^aria-/,r=t.attrNames
if(r.length)for(var a=0,o=r.length;a<o;a++)if(n.test(r[a]))return!0
return!1},"aria-allowed-role-evaluate":function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=t.allowImplicit,a=void 0===r||r,o=t.ignoredTags,i=void 0===o?[]:o,u=n.props.nodeName
if(i.map((function(e){return e.toLowerCase()})).includes(u))return!0
var s=oc(n,a)
if(s.length){if(this.data(s),!gi(n))return
return!1}return!0},"aria-allowed-role-matches":function(e,t){return null!==yo(t,{dpub:!0,fallback:!0})},"aria-busy-evaluate":function(e,t,n){return"true"===n.attr("aria-busy")},"aria-errormessage-evaluate":function(e,t,n){t=Array.isArray(t)?t:[]
var r=n.attr("aria-errormessage"),a=n.hasAttr("aria-errormessage"),o=n.attr("aria-invalid")
return!n.hasAttr("aria-invalid")||"false"===o||-1!==t.indexOf(r)||!a||(this.data(Wu(r)),function(e){if(""===e.trim())return Do.ariaAttrs["aria-errormessage"].allowEmpty
var t
try{t=e&&uo(n,"aria-errormessage")[0]}catch(t){return void this.data({messageKey:"idrefs",values:Wu(e)})}return t?gi(t)?"alert"===t.getAttribute("role")||"assertive"===t.getAttribute("aria-live")||"polite"===t.getAttribute("aria-live")||Wu(n.attr("aria-describedby")).indexOf(e)>-1:(this.data({messageKey:"hidden",values:Wu(e)}),!1):void 0}.call(this,r))},"aria-has-attr-matches":function(e,t){var n=/^aria-/
return t.attrNames.some((function(e){return n.test(e)}))},"aria-hidden-body-evaluate":function(e,t,n){return"true"!==n.attr("aria-hidden")},"aria-hidden-focus-matches":function(e){return Xd(Fa(e))},"aria-label-evaluate":function(e,t,n){return!!ko(co(n))},"aria-labelledby-evaluate":function(e,t,n){try{return!!ko(lo(n))}catch(e){return}},"aria-level-evaluate":function(e,t,n){var r=n.attr("aria-level")
if(!(parseInt(r,10)>6))return!0},"aria-prohibited-attr-evaluate":function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=(null==t?void 0:t.elementsAllowedAriaLabel)||[],a=n.props.nodeName,o=ei(n,{chromium:!0}),i=wc(o,a,r),u=i.filter((function(e){return!!n.attrNames.includes(e)&&""!==ko(n.attr(e))}))
if(0===u.length)return!1
var s=n.hasAttr("role")?"hasRole":"noRole"
s+=u.length>1?"Plural":"Singular",this.data({role:o,nodeName:a,messageKey:s,prohibited:u})
var l=ui(n,{subtreeDescendant:!0})
return""===ko(l)||void 0},"aria-required-attr-evaluate":function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=yo(n),a=n.attrNames,o=gc(r)
if(Array.isArray(t[r])&&(o=al(t[r],o)),!r||!a.length||!o.length)return!0
if(Cc(n,r)||Ac(n,r))return!0
var i=Go(n),u=o.filter((function(e){return!n.attr(e)&&!xc(i,e)}))
return!u.length||(this.data(u),!1)},"aria-required-children-evaluate":function(e,t,n){var r=t&&Array.isArray(t.reviewEmpty)?t.reviewEmpty:[],a=yo(n,{dpub:!0}),i=yc(a)
if(null===i)return!0
var u=function(e,t){for(var n=[],r=ai(e),a=function(e){var a=r[e],o=ei(a,{noPresentational:!0}),i=Fo().some((function(e){return a.hasAttr(e)}))||No(a)
!o&&!i||["group","rowgroup"].includes(o)&&t.some((function(e){return e===o}))?r.push.apply(r,B(a.children)):(o||i)&&n.push({role:o,ownedElement:a})},o=0;o<r.length;o++)a(o)
return n}(n,i),s=u.filter((function(e){var t=e.role
return!i.includes(t)}))
if(s.length)return this.relatedNodes(s.map((function(e){return e.ownedElement}))),this.data({messageKey:"unallowed"}),!1
var l=function(e,t,n,r){for(var a=function(e){var t=r[e].role
if(n.includes(t))return n=n.filter((function(e){return e!==t})),{v:null}},i=0;i<r.length;i++){var u=a(i)
if("object"===o(u))return u.v}return n.length?n:null}(0,0,i,u)
return!l||(this.data(l),!(!r.includes(a)||ru(n,!1,!0)||u.length||n.hasAttr("aria-owns")&&uo(e,"aria-owns").length)&&void 0)},"aria-required-children-matches":function(e,t){var n=yo(t,{dpub:!0})
return!!yc(n)},"aria-required-parent-evaluate":function(e,t,n){var r=t&&Array.isArray(t.ownGroupRoles)?t.ownGroupRoles:[],a=kc(n,r)
if(!a)return!0
var o=function(e){for(var t=[],n=null;e;){if(e.getAttribute("id")){var r=Kt(e.getAttribute("id"));(n=Qr(e).querySelector("[aria-owns~=".concat(r,"]")))&&t.push(n)}e=e.parentElement}return t.length?t:null}(e)
if(o)for(var i=0,u=o.length;i<u;i++)if(!(a=kc(Nn(o[i]),r,a,!0)))return!0
return this.data(a),!1},"aria-required-parent-matches":function(e,t){var n=yo(t)
return!!vc(n)},"aria-roledescription-evaluate":function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=ei(n),a=t.supportedRoles||[]
return!!a.includes(r)||!(!r||"presentation"===r||"none"===r)&&void 0},"aria-unsupported-attr-evaluate":function(e,t,n){var r=n.attrNames.filter((function(t){var n=Do.ariaAttrs[t]
if(!Fc(t))return!1
var r=n.unsupported
return"object"!==o(r)?!!r:!Wo(e,r.exceptions)}))
return!!r.length&&(this.data(r),!0)},"aria-valid-attr-evaluate":function(e,t,n){t=Array.isArray(t.value)?t.value:[]
var r=[],a=/^aria-/
return n.attrNames.forEach((function(e){-1===t.indexOf(e)&&a.test(e)&&!Fc(e)&&r.push(e)})),!r.length||(this.data(r),!1)},"aria-valid-attr-value-evaluate":function(e,t,n){t=Array.isArray(t.value)?t.value:[]
var r="",a="",o=[],u=/^aria-/,s=["aria-errormessage"],l={"aria-controls":function(){return"false"!==n.attr("aria-expanded")&&"false"!==n.attr("aria-selected")},"aria-current":function(e){e||(r='aria-current="'.concat(n.attr("aria-current"),'"'),a="ariaCurrent")},"aria-owns":function(){return"false"!==n.attr("aria-expanded")},"aria-describedby":function(e){e||(r='aria-describedby="'.concat(n.attr("aria-describedby"),'"'),a=i._tree&&i._tree[0]._hasShadowRoot?"noIdShadow":"noId")},"aria-labelledby":function(e){e||(r='aria-labelledby="'.concat(n.attr("aria-labelledby"),'"'),a=i._tree&&i._tree[0]._hasShadowRoot?"noIdShadow":"noId")}}
return n.attrNames.forEach((function(e){if(!s.includes(e)&&!t.includes(e)&&u.test(e)){var i,c=n.attr(e)
try{i=bc(n,e)}catch(t){return r="".concat(e,'="').concat(c,'"'),void(a="idrefs")}l[e]&&!l[e](i)||i||(""!==c||function(e){var t
return"string"===(null===(t=Do.ariaAttrs[e])||void 0===t?void 0:t.type)}(e)?o.push("".concat(e,'="').concat(c,'"')):(r=e,a="empty"))}})),o.length?(this.data(o),!1):!r||void this.data({messageKey:a,needsReview:r})},"attr-non-space-content-evaluate":function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0
if(!t.attribute||"string"!=typeof t.attribute)throw new TypeError("attr-non-space-content requires options.attribute to be a string")
if(!n.hasAttr(t.attribute))return this.data({messageKey:"noAttr"}),!1
var r=n.attr(t.attribute),a=!ko(r)
return!a||(this.data({messageKey:"emptyAttr"}),!1)},"autocomplete-appropriate-evaluate":function(e,t,n){if("input"!==n.props.nodeName)return!0
var r=["text","search","number","tel"],a=["text","search","url"],i={bday:["text","search","date"],email:["text","search","email"],username:["text","search","email"],"street-address":["text"],tel:["text","search","tel"],"tel-country-code":["text","search","tel"],"tel-national":["text","search","tel"],"tel-area-code":["text","search","tel"],"tel-local":["text","search","tel"],"tel-local-prefix":["text","search","tel"],"tel-local-suffix":["text","search","tel"],"tel-extension":["text","search","tel"],"cc-number":r,"cc-exp":["text","search","month","tel"],"cc-exp-month":r,"cc-exp-year":r,"cc-csc":r,"transaction-amount":r,"bday-day":r,"bday-month":r,"bday-year":r,"new-password":["text","search","password"],"current-password":["text","search","password"],url:a,photo:a,impp:a}
"object"===o(t)&&Object.keys(t).forEach((function(e){i[e]||(i[e]=[]),i[e]=i[e].concat(t[e])}))
var u=n.attr("autocomplete").split(/\s+/g).map((function(e){return e.toLowerCase()})),s=u[u.length-1]
if(Vi.stateTerms.includes(s))return!0
var l=i[s],c=n.hasAttr("type")?ko(n.attr("type")).toLowerCase():"text"
return c=Rl().includes(c)?c:"text",void 0===l?"text"===c:l.includes(c)},"autocomplete-matches":function(e,t){var n=t.attr("autocomplete")
if(!n||""===ko(n))return!1
var r=t.props.nodeName
if(!1===["textarea","input","select"].includes(r))return!1
if("input"===r&&["submit","reset","button","hidden"].includes(t.props.type))return!1
var a=t.attr("aria-disabled")||"false"
if(t.hasAttr("disabled")||"true"===a.toLowerCase())return!1
var o=t.attr("role"),i=t.attr("tabindex")
if("-1"===i&&o){var u=Do.ariaRoles[o]
if(void 0===u||"widget"!==u.type)return!1}return!("-1"===i&&t.actualNode&&!Ta(t)&&!gi(t))},"autocomplete-valid-evaluate":function(e,t,n){var r=n.attr("autocomplete")||""
return zi(r,t)},"avoid-inline-spacing-evaluate":function(e,t){var n=t.cssProperties.filter((function(t){if("important"===e.style.getPropertyPriority(t))return t}))
return!(n.length>0&&(this.data(n),1))},"bypass-matches":function(e,t,n){return!Jd(0,0,n)||!!e.querySelector("a[href]")},"caption-evaluate":function(e,t,n){return!vl(n,"track").some((function(e){return"captions"===(e.attr("kind")||"").toLowerCase()}))&&void 0},"caption-faked-evaluate":function(e){var t=wo(e),n=t[0]
return t.length<=1||n.length<=1||e.rows.length<=1||n.reduce((function(e,t,r){return e||t!==n[r+1]&&void 0!==n[r+1]}),!1)},"color-contrast-evaluate":function(e,t,r){var a=t.ignoreUnicode,o=t.ignoreLength,i=t.ignorePseudo,u=t.boldValue,s=t.boldTextPt,l=t.largeTextPt,c=t.contrastRatio,d=t.shadowOutlineEmMax,p=t.pseudoSizeThreshold
if(!Ta(e))return this.data({messageKey:"hidden"}),!0
var f=yi(r,!1,!0)
if(!a||!function(e){var t={nonBmp:!0},n=Oi(e,t),r=""===ko(Hi(e,t))
return n&&r}(f)){var h=n.getComputedStyle(e),m=parseFloat(h.getPropertyValue("font-size")),D=h.getPropertyValue("font-weight"),g=parseFloat(D)>=u||"bold"===D,v=Math.ceil(72*m)/96,y=g&&v<s||!g&&v<l?c.normal:c.large,b=y.expected,F=y.minThreshold,w=y.maxThreshold,E=function(e,t){var n=t.pseudoSizeThreshold,r=void 0===n?.25:n,a=t.ignorePseudo
if(void 0===a||!a){var o=e.boundingClientRect,i=o.width*o.height*r
do{if(nd(e.actualNode,":before")+nd(e.actualNode,":after")>i)return e}while(e=e.parent)}}(r,{ignorePseudo:i,pseudoSizeThreshold:p})
if(E)return this.data({fontSize:"".concat((72*m/96).toFixed(1),"pt (").concat(m,"px)"),fontWeight:g?"bold":"normal",messageKey:"pseudoContent",expectedContrastRatio:b+":1"}),void this.relatedNodes(E.actualNode)
var C=[],x=Wc(e,C,d),A=Xc(e,!1,x,t),k=Uc(e,{minRatio:.001,maxRatio:d}),T=null,N=null,R=null
if(0===k.length)T=Kc(x,A)
else if(A&&x){R=[].concat(B(k),[x]).reduce(Lc)
var S=Kc(x,A),O=Kc(x,R),_=Kc(R,A);(T=Math.max(S,O,_))!==S&&(N=O>_?"shadowOnBgColor":"fgOnShadowColor")}var I=T>b
if("number"==typeof F&&("number"!=typeof T||T<F)||"number"==typeof w&&("number"!=typeof T||T>w))return this.data({contrastRatio:T}),!0
var P,j=Math.floor(100*T)/100
null===x?P=Fu.get("bgColor"):I||(P=N)
var M=1===j,q=1===f.length
return M?P=Fu.set("bgColor","equalRatio"):I||!q||o||(P="shortTextContent"),this.data({fgColor:A?A.toHexString():void 0,bgColor:x?x.toHexString():void 0,contrastRatio:j,fontSize:"".concat((72*m/96).toFixed(1),"pt (").concat(m,"px)"),fontWeight:g?"bold":"normal",messageKey:P,expectedContrastRatio:b+":1",shadowColor:R?R.toHexString():void 0}),null===A||null===x||M||q&&!o&&!I?(P=null,Fu.clear(),void this.relatedNodes(C)):(I||this.relatedNodes(C),I)}this.data({messageKey:"nonBmp"})},"color-contrast-matches":function(e,t){var r=t.props,o=r.nodeName,i=r.type
if("option"===o)return!1
if("select"===o&&!e.options.length)return!1
if("input"===o&&["hidden","range","color","checkbox","radio","image"].includes(i))return!1
if(Sd(t))return!1
if(["input","select","textarea"].includes(o)){var u=n.getComputedStyle(e),s=parseInt(u.getPropertyValue("text-indent"),10)
if(s){var l=e.getBoundingClientRect()
if(l={top:l.top,bottom:l.bottom,left:l.left+s,right:l.right+s},!Vu(l,e))return!1}return!0}var c=Xr(t,"label")
if("label"===o||c){var d=c||e,p=c?Nn(c):t
if(d.htmlFor){var f=Qr(d).getElementById(d.htmlFor),h=f&&Nn(f)
if(h&&Sd(h))return!1}var m=vl(p,'input:not([type="hidden"],[type="image"],[type="button"],[type="submit"],[type="reset"]), select, textarea')[0]
if(m&&Sd(m))return!1}for(var D=[],g=t;g;){if(g.props.id){var v=Zl(g).filter((function(e){return Wu(e.getAttribute("aria-labelledby")||"").includes(g.props.id)})).map((function(e){return Nn(e)}))
D.push.apply(D,B(v))}g=g.parent}if(D.length>0&&D.every(Sd))return!1
if(!function(e){var t=yi(e,!1,!0)
return""!==t&&""!==Hi(t,Zd)&&e.children.some((function(e){return"#text"===e.props.nodeName&&!_i(e)}))}(t))return!1
for(var y=a.createRange(),b=t.children,F=0;F<b.length;F++){var w=b[F]
3===w.actualNode.nodeType&&""!==ko(w.actualNode.nodeValue)&&y.selectNodeContents(w.actualNode)}for(var E=y.getClientRects(),C=0;C<E.length;C++)if(Vu(E[C],e))return!0
return!1},"css-orientation-lock-evaluate":function(e,t,n,r){var a=(r||{}).cssom,o=void 0===a?void 0:a,i=(t||{}).degreeThreshold,u=void 0===i?0:i
if(o&&o.length){for(var s=!1,l=[],c=o.reduce((function(e,t){var n=t.sheet,r=t.root,a=t.shadowId||"topDocument"
if(e[a]||(e[a]={root:r,rules:[]}),!n||!n.cssRules)return e
var o=Array.from(n.cssRules)
return e[a].rules=e[a].rules.concat(o),e}),{}),d=function(){var e=f[p],t=c[e],n=t.root,r=t.rules.filter(h)
if(!r.length)return"continue"
r.forEach((function(e){var t=e.cssRules
Array.from(t).forEach((function(e){var t=function(e){var t=e.selectorText,n=e.style
if(!t||n.length<=0)return!1
var r=n.transform||n.webkitTransform||n.msTransform||!1
if(!r)return!1
var a=r.match(/(rotate|rotateZ|rotate3d|matrix|matrix3d)\(([^)]+)\)(?!.*(rotate|rotateZ|rotate3d|matrix|matrix3d))/)
if(!a)return!1
var o=_(a,3),i=function(e,t){switch(e){case"rotate":case"rotateZ":return m(t)
case"rotate3d":var n=_(t.split(",").map((function(e){return e.trim()})),4),r=n[2],a=n[3]
if(0===parseInt(r))return
return m(a)
case"matrix":case"matrix3d":return function(e){var t=e.split(",")
if(t.length<=6){var n=_(t,2),r=n[0],a=n[1]
return D(Math.atan2(parseFloat(a),parseFloat(r)))}var o=parseFloat(t[8]),i=Math.asin(o),u=Math.cos(i)
return D(Math.acos(parseFloat(t[0])/u))}(t)
default:return}}(o[1],o[2])
return!!i&&(i=Math.abs(i),!(Math.abs(i-180)%180<=u)&&Math.abs(i-90)%90<=u)}(e)
if(t&&"HTML"!==e.selectorText.toUpperCase()){var r=Array.from(n.querySelectorAll(e.selectorText))||[]
l=l.concat(r)}s=s||t}))}))},p=0,f=Object.keys(c);p<f.length;p++)d()
return!s||(l.length&&this.relatedNodes(l),!1)}function h(e){var t=e.type,n=e.cssText
return 4===t&&(/orientation:\s*landscape/i.test(n)||/orientation:\s*portrait/i.test(n))}function m(e){var t,n=_(e.match(/(deg|grad|rad|turn)/)||[],1)[0]
if(n){var r,a=parseFloat(e.replace(n,""))
switch(n){case"rad":return D(a)
case"grad":return t=a,(t%=400)<0&&(t+=400),Math.round(t/400*360)
case"turn":return r=a,Math.round(360/(1/r))
default:return parseInt(a)}}}function D(e){return Math.round(e*(180/Math.PI))}},"data-table-large-matches":function(e){if(Md(e)){var t=wo(e)
return t.length>=3&&t[0].length>=3&&t[1].length>=3&&t[2].length>=3}return!1},"data-table-matches":function(e){return Md(e)},"deprecatedrole-evaluate":function(e,t,n){var r=ei(n,{dpub:!0,fallback:!0}),a=Do.ariaRoles[r]
return!(null==a||!a.deprecated||(this.data(r),0))},"dlitem-evaluate":function(e){var t=Fa(e),n=t.nodeName.toUpperCase(),r=yo(t)
return"DIV"===n&&["presentation","none",null].includes(r)&&(n=(t=Fa(t)).nodeName.toUpperCase(),r=yo(t)),"DL"===n&&!(r&&!["presentation","none","list"].includes(r))},"doc-has-title-evaluate":function(){var e=a.title
return!!ko(e)},"duplicate-id-active-matches":function(e){var t=e.getAttribute("id").trim(),n='*[id="'.concat(Kt(t),'"]'),r=Array.from(Qr(e).querySelectorAll(n))
return!mc(e)&&r.some(No)},"duplicate-id-after":function(e){var t=[]
return e.filter((function(e){return-1===t.indexOf(e.data)&&(t.push(e.data),!0)}))},"duplicate-id-aria-matches":function(e){return mc(e)},"duplicate-id-evaluate":function(e){var t=e.getAttribute("id").trim()
if(!t)return!0
var n=Qr(e),r=Array.from(n.querySelectorAll('[id="'.concat(Kt(t),'"]'))).filter((function(t){return t!==e}))
return r.length&&this.relatedNodes(r),this.data(t),0===r.length},"duplicate-id-misc-matches":function(e){var t=e.getAttribute("id").trim(),n='*[id="'.concat(Kt(t),'"]'),r=Array.from(Qr(e).querySelectorAll(n))
return!mc(e)&&r.every((function(e){return!No(e)}))},"duplicate-img-label-evaluate":function(e,t,n){if(["none","presentation"].includes(ei(n)))return!1
var r=Qn(n,t.parentSelector)
if(!r)return!1
var a=yi(r,!0).toLowerCase()
return""!==a&&a===Li(n).toLowerCase()},"exists-evaluate":function(){},"explicit-evaluate":function(e,t,n){var r=this
if(!n.attr("id"))return!1
if(n.actualNode){var a=Qr(n.actualNode),o=Kt(n.attr("id")),i=Array.from(a.querySelectorAll('label[for="'.concat(o,'"]')))
if(this.relatedNodes(i),!i.length)return!1
try{return i.some((function(e){if(Ta(e)){var t=ko(so(e,{inControlContext:!0,startNode:n}))
return r.data({explicitLabel:t}),!!t}return!0}))}catch(e){return}}},"fallbackrole-evaluate":function(e,t,n){var r=Wu(n.attr("role"))
return!(r.length<=1)&&(!function(e,t){return!Yo(e)&&2===t.length&&t.includes("none")&&t.includes("presentation")}(n,r)||void 0)},"focusable-content-evaluate":function(e,t,n){var r=n.tabbableElements
return!!r&&r.filter((function(e){return e!==n})).length>0},"focusable-disabled-evaluate":function(e,t,n){var r=["button","fieldset","input","select","textarea"],a=n.tabbableElements
if(!a||!a.length)return!0
var o=a.filter((function(e){return r.includes(e.props.nodeName)}))
return this.relatedNodes(o.map((function(e){return e.actualNode}))),!(0!==o.length&&!gu())||!!o.every((function(e){var t=e.getComputedStylePropertyValue("pointer-events"),n=parseInt(e.getComputedStylePropertyValue("width")),r=parseInt(e.getComputedStylePropertyValue("height"))
return e.actualNode.onfocus||(0===n||0===r)&&"none"===t}))&&void 0},"focusable-element-evaluate":function(e,t,n){return!(!n.hasAttr("contenteditable")||!function e(t){var r=t.attr("contenteditable")
if("true"===r||""===r)return!0
if("false"===r)return!1
var a=Qn(n.parent,"[contenteditable]")
return!!a&&e(a)}(n))||du(n)},"focusable-modal-open-evaluate":function(e,t,n){var r=n.tabbableElements.map((function(e){return e.actualNode}))
return!r||!r.length||!gu()||void this.relatedNodes(r)},"focusable-no-name-evaluate":function(e,t,n){var r=n.attr("tabindex")
if(!(No(n)&&r>-1))return!1
try{return!Li(n)}catch(e){return}},"focusable-not-tabbable-evaluate":function(e,t,n){var r=["button","fieldset","input","select","textarea"],a=n.tabbableElements
if(!a||!a.length)return!0
var o=a.filter((function(e){return!r.includes(e.props.nodeName)}))
return this.relatedNodes(o.map((function(e){return e.actualNode}))),!(0!==o.length&&!gu())||!!o.every((function(e){var t=e.getComputedStylePropertyValue("pointer-events"),n=parseInt(e.getComputedStylePropertyValue("width")),r=parseInt(e.getComputedStylePropertyValue("height"))
return e.actualNode.onfocus||(0===n||0===r)&&"none"===t}))&&void 0},"frame-focusable-content-evaluate":function(e,t,n){if(n.children)try{return!n.children.some((function(e){return ld(e)}))}catch(e){return}},"frame-focusable-content-matches":function(e,t,n){var r,a
return!n.initiator&&!n.focusable&&(null===(r=n.size)||void 0===r?void 0:r.width)*(null===(a=n.size)||void 0===a?void 0:a.height)>1},"frame-tested-after":function(e){var t={}
return e.filter((function(e){if("html"!==e.node.ancestry[e.node.ancestry.length-1]){var n=e.node.ancestry.flat(1/0).join(" > ")
return t[n]=e,!0}var r=e.node.ancestry.slice(0,e.node.ancestry.length-1).flat(1/0).join(" > ")
return t[r]&&(t[r].result=!0),!1}))},"frame-tested-evaluate":function(e,t){return!t.isViolation&&void 0},"frame-title-has-text-matches":function(e){var t=e.getAttribute("title")
return!!ko(t)},"has-alt-evaluate":function(e,t,n){var r=n.props.nodeName
return!!["img","input","area"].includes(r)&&n.hasAttr("alt")},"has-descendant-after":function(e){return e.some((function(e){return!0===e.result}))&&e.forEach((function(e){e.result=!0})),e},"has-descendant-evaluate":function(e,t,n){if(!t||!t.selector||"string"!=typeof t.selector)throw new TypeError("has-descendant requires options.selector to be a string")
if(t.passForModal&&gu())return!0
var r=ul(n,t.selector,(function(e){return gi(e)}))
return this.relatedNodes(r.map((function(e){return e.actualNode}))),r.length>0},"has-global-aria-attribute-evaluate":function(e,t,n){var r=Fo().filter((function(e){return n.hasAttr(e)}))
return this.data(r),r.length>0},"has-implicit-chromium-role-matches":function(e,t){return null!==Yo(t,{chromium:!0})},"has-lang-evaluate":function(e,t,n){var r=void 0!==a&&un(a)
return t.attributes.includes("xml:lang")&&t.attributes.includes("lang")&&hd(n.attr("xml:lang"))&&!hd(n.attr("lang"))&&!r?(this.data({messageKey:"noXHTML"}),!1):!!t.attributes.some((function(e){return hd(n.attr(e))}))||(this.data({messageKey:"noLang"}),!1)},"has-text-content-evaluate":function(e,t,n){try{return""!==ko(ui(n))}catch(e){return}},"has-widget-role-evaluate":function(e){var t=e.getAttribute("role")
if(null===t)return!1
var n=pu(t)
return"widget"===n||"composite"===n},"heading-matches":function(e,t){return"heading"===ei(t)},"heading-order-after":function(e){var t=function(e){return(e=B(e)).sort((function(e,t){var n=e.node,r=t.node
return n.ancestry.length-r.ancestry.length})),e.reduce(Cd,[]).filter((function(e){return-1!==e.level}))}(e)
return e.forEach((function(e){e.result=function(e,t){var n,r,a,o,i=xd(t,e.node.ancestry),u=null!==(n=null===(r=t[i])||void 0===r?void 0:r.level)&&void 0!==n?n:-1,s=null!==(a=null===(o=t[i-1])||void 0===o?void 0:o.level)&&void 0!==a?a:-1
return 0===i||(-1!==u?u-s<=1:void 0)}(e,t)})),e},"heading-order-evaluate":function(){var e=Tn.get("headingOrder")
if(e)return!0
var t=ul(i._tree[0],"h1, h2, h3, h4, h5, h6, [role=heading], iframe, frame",gi)
return e=t.map((function(e){return{ancestry:[Cn(e.actualNode)],level:kd(e)}})),this.data({headingOrder:e}),Tn.set("headingOrder",t),!0},"help-same-as-label-evaluate":function(e,t,n){var r=Gi(n),a=e.getAttribute("title")
return!!r&&(a||(a="",e.getAttribute("aria-describedby")&&(a=uo(e,"aria-describedby").map((function(e){return e?so(e):""})).join(""))),ko(a)===ko(r))},"hidden-content-evaluate":function(e,t,r){if(!["SCRIPT","HEAD","TITLE","NOSCRIPT","STYLE","TEMPLATE"].includes(e.nodeName.toUpperCase())&&ru(r)){var a=n.getComputedStyle(e)
if("none"===a.getPropertyValue("display"))return
if("hidden"===a.getPropertyValue("visibility")){var o=Fa(e),i=o&&n.getComputedStyle(o)
if(!i||"hidden"!==i.getPropertyValue("visibility"))return}}return!0},"hidden-explicit-label-evaluate":function(e,t,n){if(n.hasAttr("id")){if(!n.actualNode)return
var r=Qr(e),a=Kt(e.getAttribute("id")),o=r.querySelector('label[for="'.concat(a,'"]'))
if(o&&!gi(o)){var i
try{i=Li(n).trim()}catch(e){return}return""===i}}return!1},"html-namespace-matches":function(e,t){return!ep(0,t)},"html5-scope-evaluate":function(e){return!cu(a)||"TH"===e.nodeName.toUpperCase()},"identical-links-same-purpose-after":function(e){if(e.length<2)return e
for(var t=e.filter((function(e){return void 0!==e.result})),n=[],r={},a=function(e){var a,o=t[e],i=o.data,u=i.name,s=i.urlProps
if(r[u])return"continue"
var l=t.filter((function(t,n){return t.data.name===u&&n!==e})),c=l.every((function(e){return Td(e.data.urlProps,s)}))
l.length&&!c&&(o.result=void 0),o.relatedNodes=[],(a=o.relatedNodes).push.apply(a,B(l.map((function(e){return e.relatedNodes[0]})))),r[u]=l,n.push(o)},o=0;o<t.length;o++)a(o)
return n},"identical-links-same-purpose-evaluate":function(e,t,n){var r=io.accessibleTextVirtual(n),a=io.sanitize(io.removeUnicode(r,{emoji:!0,nonBmp:!0,punctuations:!0})).toLowerCase()
if(a){var o={name:a,urlProps:Gr.urlPropsFromAttribute(e,"href")}
return this.data(o),this.relatedNodes([e]),!0}},"identical-links-same-purpose-matches":function(e,t){if(!Li(t))return!1
var n=ei(e)
return!n||"link"===n},"implicit-evaluate":function(e,t,n){try{var r=Qn(n,"label")
if(r){var a=ko(Li(r,{inControlContext:!0,startNode:n}))
return r.actualNode&&this.relatedNodes([r.actualNode]),this.data({implicitLabel:a}),!!a}return!1}catch(e){return}},"inline-style-property-evaluate":function(e,t){var r=t.cssProperty,a=t.absoluteValues,o=t.minValue,i=t.maxValue,u=t.normalValue,s=void 0===u?0:u,l=t.noImportant,c=t.multiLineOnly
if(!l&&"important"!==e.style.getPropertyPriority(r)||c&&!vu(e))return!0
var d={}
"number"==typeof o&&(d.minValue=o),"number"==typeof i&&(d.maxValue=i)
var p=e.style.getPropertyValue(r)
if(["inherit","unset","revert","revert-layer"].includes(p))return this.data(O({value:p},d)),!0
var f=function(e,t){var r=t.cssProperty,a=t.absoluteValues,o=t.normalValue,i=n.getComputedStyle(e),u=i.getPropertyValue(r)
if("normal"===u)return o
var s=parseFloat(u)
if(a)return s
var l=parseFloat(i.getPropertyValue("font-size")),c=Math.round(s/l*100)/100
return isNaN(c)?u:c}(e,{absoluteValues:a,cssProperty:r,normalValue:s})
return this.data(O({value:f},d)),"number"==typeof f?("number"!=typeof o||f>=o)&&("number"!=typeof i||f<=i):void 0},"inserted-into-focus-order-matches":function(e){return iu(e)},"internal-link-present-evaluate":function(e,t,n){return vl(n,"a[href]").some((function(e){return/^#[^/!]/.test(e.attr("href"))}))},"invalid-children-evaluate":function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=[],a=[]
if(n.children){for(var o=gd(n.children);o.length;){var i,u=o.shift(),s=u.vChild,l=u.nested
if(t.divGroups&&!l&&Dd(s)){if(!s.children)return
var c=gd(s.children,!0)
o.push.apply(o,B(c))}else{var d=md(s,l,t)
d&&(a.includes(d)||a.push(d),1===(null==s||null===(i=s.actualNode)||void 0===i?void 0:i.nodeType)&&r.push(s.actualNode))}}return 0!==a.length&&(this.data({values:a.join(", ")}),this.relatedNodes(r),!0)}},"invalidrole-evaluate":function(e,t,n){var r=Wu(n.attr("role"))
return!!r.every((function(e){return!vo(e,{allowAbstract:!0})}))&&(this.data(r),!0)},"is-element-focusable-evaluate":function(e,t,n){return No(n)},"is-initiator-matches":Jd,"is-on-screen-evaluate":function(e){return Ta(e)},"is-visible-matches":function(e){return Ta(e)},"is-visible-on-screen-matches":function(e,t){return Ta(t)},"label-content-name-mismatch-evaluate":function(e,t,n){var r,a=null==t?void 0:t.pixelThreshold,o=null!==(r=null==t?void 0:t.occurrenceThreshold)&&void 0!==r?r:null==t?void 0:t.occuranceThreshold,i=so(e).toLowerCase()
if(!($i(i)<1)){var u=ko(ui(n,{subtreeDescendant:!0,ignoreIconLigature:!0,pixelThreshold:a,occurrenceThreshold:o})).toLowerCase()
return!u||($i(u)<1?!!pd(u,i)||void 0:pd(u,i))}},"label-content-name-mismatch-matches":function(e,t){var n=ei(e)
return!!(n&&ic("widget").includes(n)&&sc().includes(n)&&(ko(co(t))||ko(lo(e)))&&ko(yi(t)))},"label-matches":function(e,t){if("input"!==t.props.nodeName||!1===t.hasAttr("type"))return!0
var n=t.attr("type").toLowerCase()
return!1===["hidden","image","button","submit","reset"].includes(n)},"landmark-has-body-context-matches":function(e,t){return e.hasAttribute("role")||!Xr(t,"article, aside, main, nav, section")},"landmark-is-top-level-evaluate":function(e){var t=ic("landmark"),n=Fa(e),r=ei(e)
for(this.data({role:r});n;){var a=n.getAttribute("role")
if(a||"FORM"===n.nodeName.toUpperCase()||(a=Yo(n)),a&&t.includes(a)&&("main"!==a||"complementary"!==r))return!1
n=Fa(n)}return!0},"landmark-is-unique-after":function(e){var t=[]
return e.filter((function(e){var n=t.find((function(t){return e.data.role===t.data.role&&e.data.accessibleText===t.data.accessibleText}))
return n?(n.result=!1,n.relatedNodes.push(e.relatedNodes[0]),!1):(t.push(e),e.relatedNodes=[],!0)}))},"landmark-is-unique-evaluate":function(e,t,n){var r=ei(e),a=Li(n)
return a=a?a.toLowerCase():null,this.data({role:r,accessibleText:a}),this.relatedNodes([e]),!0},"landmark-unique-matches":function(e,t){var n=["article","aside","main","nav","section"].join(",")
return function(e){var t=e.actualNode,r=ic("landmark"),a=ei(t)
if(!a)return!1
var o=t.nodeName.toUpperCase()
return"HEADER"===o||"FOOTER"===o?!Qn(e,n):"SECTION"===o||"FORM"===o?!!Li(e):r.indexOf(a)>=0||"region"===a}(t)&&gi(e)},"layout-table-matches":function(e){return!Md(e)&&!No(e)},"link-in-text-block-evaluate":function(e,t){var n=t.requiredContrastRatio,r=t.allowSameColor
if(id(e))return!1
for(var a=Fa(e);a&&1===a.nodeType&&!id(a);)a=Fa(a)
if(a){this.relatedNodes([a])
var o=Xc(e),i=Xc(a),u=Wc(e),s=Wc(a),l=o&&i?ad(o,i):void 0
if(l&&(l=Math.floor(100*l)/100),l&&l>=n)return!0
var c=u&&s?ad(u,s):void 0
if(c&&(c=Math.floor(100*c)/100),c&&c>=n)return!0
if(!c){var d,p=null!==(d=Fu.get("bgColor"))&&void 0!==d?d:"bgContrast"
return this.data({messageKey:p}),void Fu.clear()}if(l)return!(!r||1!==l||1!==c)||(1===l&&c>1?(this.data({messageKey:"bgContrast",contrastRatio:c,requiredContrastRatio:n,nodeBackgroundColor:u?u.toHexString():void 0,parentBackgroundColor:s?s.toHexString():void 0}),!1):(this.data({messageKey:"fgContrast",contrastRatio:l,requiredContrastRatio:n,nodeColor:o?o.toHexString():void 0,parentColor:i?i.toHexString():void 0}),!1))}},"link-in-text-block-matches":function(e){var t=ko(e.innerText),n=e.getAttribute("role")
return(!n||"link"===n)&&!!t&&!!Ta(e)&&Du(e)},"link-in-text-block-style-evaluate":function(e){if(sd(e))return!1
for(var t=Fa(e);t&&1===t.nodeType&&!sd(t);)t=Fa(t)
return t?(this.relatedNodes([t]),Oc(e,t)):void 0},"listitem-evaluate":function(e,t,n){var r=n.parent
if(r){var a=r.props.nodeName,o=yo(r)
return!!["presentation","none","list"].includes(o)||(o&&vo(o)?(this.data({messageKey:"roleNotValid"}),!1):["ul","ol","menu"].includes(a))}},"matches-definition-evaluate":function(e,t,n){return Wo(n,t.matcher)},"meta-refresh-evaluate":function(e,t,n){var r=t||{},a=r.minDelay,o=r.maxDelay,i=_((n.attr("content")||"").trim().split($d),1)[0]
if(!i.match(Vd))return!0
var u=parseFloat(i)
return this.data({redirectDelay:u}),"number"==typeof a&&u<=t.minDelay||"number"==typeof o&&u>t.maxDelay},"meta-viewport-scale-evaluate":function(e,t,n){var r=t||{},a=r.scaleMinimum,o=void 0===a?2:a,i=r.lowerBound,u=void 0!==i&&i,s=n.attr("content")||""
if(!s)return!0
var l=s.split(/[;,]/).reduce((function(e,t){var n=t.trim()
if(!n)return e
var r=_(n.split("="),2),a=r[0],o=r[1]
if(!a||!o)return e
var i=a.toLowerCase().trim(),u=o.toLowerCase().trim()
return"maximum-scale"===i&&"yes"===u&&(u=1),"maximum-scale"===i&&parseFloat(u)<0||(e[i]=u),e}),{})
if(u&&l["maximum-scale"]&&parseFloat(l["maximum-scale"])<u)return!0
if(!u&&"no"===l["user-scalable"])return this.data("user-scalable=no"),!1
var c=parseFloat(l["user-scalable"])
return!u&&l["user-scalable"]&&(c||0===c)&&c>-1&&c<1?(this.data("user-scalable"),!1):!(l["maximum-scale"]&&parseFloat(l["maximum-scale"])<o&&(this.data("maximum-scale"),1))},"multiple-label-evaluate":function(e){var t=Kt(e.getAttribute("id")),n=e.parentNode,r=Qr(e)
r=r.documentElement||r
var a=Array.from(r.querySelectorAll('label[for="'.concat(t,'"]')))
for(a.length&&(a=a.filter((function(e){return!va(e)})));n;)"LABEL"===n.nodeName.toUpperCase()&&-1===a.indexOf(n)&&a.push(n),n=n.parentNode
if(this.relatedNodes(a),a.length>1){var o=a.filter((function(e){return gi(e)}))
if(o.length>1)return
return!uo(e,"aria-labelledby").includes(o[0])&&void 0}return!1},"nested-interactive-matches":function(e,t){var n=ei(t)
return!!n&&!!Do.ariaRoles[n].childrenPresentational},"no-autoplay-audio-evaluate":function(e,t){if(e.duration){var n=t.allowedDuration,r=void 0===n?3:n
return function(e){if(!e.currentSrc)return 0
var t=function(e){var t=e.match(/#t=(.*)/)
if(t)return _(t,2)[1].split(",").map((function(e){return/:/.test(e)?function(e){for(var t=e.split(":"),n=0,r=1;t.length>0;)n+=r*parseInt(t.pop(),10),r*=60
return parseFloat(n)}(e):parseFloat(e)}))}(e.currentSrc)
return t?1===t.length?Math.abs(e.duration-t[0]):Math.abs(t[1]-t[0]):Math.abs(e.duration-(e.currentTime||0))}(e)<=r&&!e.hasAttribute("loop")||!!e.hasAttribute("controls")}console.warn("axe.utils.preloadMedia did not load metadata")},"no-autoplay-audio-matches":function(e){return!!e.currentSrc&&!e.hasAttribute("paused")&&!e.hasAttribute("muted")},"no-empty-role-matches":function(e,t){return!!t.hasAttr("role")&&!!t.attr("role").trim()},"no-explicit-name-required-matches":tp,"no-focusable-content-evaluate":function(e,t,n){if(n.children)try{var r=cd(n)
if(!r.length)return!0
var a=r.filter(dd)
return a.length>0?(this.data({messageKey:"notHidden"}),this.relatedNodes(a)):this.relatedNodes(r),!1}catch(e){return}},"no-implicit-explicit-label-evaluate":function(e,t,n){var r,a,o=ei(n,{noImplicit:!0})
this.data(o)
try{r=ko(li(n)).toLowerCase(),a=ko(Li(n)).toLowerCase()}catch(e){return}return!(!a&&!r)&&!((a||!r)&&a.includes(r))&&void 0},"no-naming-method-matches":function(e,t){var n=Go(t).namingMethods
return!(n&&0!==n.length||"combobox"===yo(t)&&vl(t,'input:not([type="hidden"])').length)},"no-negative-tabindex-matches":function(e,t){var n=parseInt(t.attr("tabindex"),10)
return isNaN(n)||n>=0},"no-role-matches":function(e,t){return!t.attr("role")},"non-empty-if-present-evaluate":function(e,t,n){var r=n.props.nodeName,a=(n.attr("type")||"").toLowerCase(),o=n.attr("value")
return o&&this.data({messageKey:"has-label"}),!("input"!==r||!["submit","reset"].includes(a))&&null===o},"not-html-matches":function(e,t){return"html"!==t.props.nodeName},"object-is-loaded-matches":function(e,t){return[tp,np].every((function(n){return n(e,t)}))},"only-dlitems-evaluate":function(e,t,n){var r=["definition","term","list"],a=n.children.reduce((function(e,t){var n=t.actualNode
return"DIV"===n.nodeName.toUpperCase()&&null===ei(n)?e.concat(t.children):e.concat(t)}),[]).reduce((function(e,t){var n=t.actualNode,a=n.nodeName.toUpperCase()
if(1===n.nodeType&&gi(n)){var o=yo(n);("DT"!==a&&"DD"!==a||o)&&(r.includes(o)||e.badNodes.push(n))}else 3===n.nodeType&&""!==n.nodeValue.trim()&&(e.hasNonEmptyTextNode=!0)
return e}),{badNodes:[],hasNonEmptyTextNode:!1})
return a.badNodes.length&&this.relatedNodes(a.badNodes),!!a.badNodes.length||a.hasNonEmptyTextNode},"only-listitems-evaluate":function(e,t,n){var r=!1,a=!1,o=!0,i=[],u=[],s=[]
return n.children.forEach((function(e){var t=e.actualNode
if(3!==t.nodeType||""===t.nodeValue.trim()){if(1===t.nodeType&&gi(t)){o=!1
var n="LI"===t.nodeName.toUpperCase(),l=ei(e),c="listitem"===l
n||c||i.push(t),n&&!c&&(u.push(t),s.includes(l)||s.push(l)),c&&(a=!0)}}else r=!0})),r||i.length?(this.relatedNodes(i),!0):!o&&!a&&(this.relatedNodes(u),this.data({messageKey:"roleNotValid",roles:s.join(", ")}),!0)},"p-as-heading-evaluate":function(e,t,n){var r=Array.from(e.parentNode.children),a=r.indexOf(e),o=(t=t||{}).margins||[],i=r.slice(a+1).find((function(e){return"P"===e.nodeName.toUpperCase()})),u=r.slice(0,a).reverse().find((function(e){return"P"===e.nodeName.toUpperCase()})),s=Ud(e),l=i?Ud(i):null,c=u?Ud(u):null,d=t.passLength,p=t.failLength,f=e.textContent.trim().length,h=null==i?void 0:i.textContent.trim().length
if(f>h*d)return!0
if(!l||!Wd(s,l,o))return!0
var m=Xr(n,"blockquote")
return!!(m&&"BLOCKQUOTE"===m.nodeName.toUpperCase()||c&&!Wd(s,c,o)||f>h*p)&&void 0},"p-as-heading-matches":function(e){var t=Array.from(e.parentNode.childNodes),n=e.textContent.trim()
return!(0===n.length||(n.match(/[.!?:;](?![.!?:;])/g)||[]).length>=2)&&0!==t.slice(t.indexOf(e)+1).filter((function(e){return"P"===e.nodeName.toUpperCase()&&""!==e.textContent.trim()})).length},"page-no-duplicate-after":function(e){return e.filter((function(e){return"ignored"!==e.data}))},"page-no-duplicate-evaluate":function(e,t,n){if(!t||!t.selector||"string"!=typeof t.selector)throw new TypeError("page-no-duplicate requires options.selector to be a string")
var r="page-no-duplicate;"+t.selector
if(!Tn.get(r)){Tn.set(r,!0)
var a=ul(i._tree[0],t.selector,(function(e){return gi(e)}))
return"string"==typeof t.nativeScopeFilter&&(a=a.filter((function(e){return e.actualNode.hasAttribute("role")||!Xr(e,t.nativeScopeFilter)}))),this.relatedNodes(a.filter((function(e){return e!==n})).map((function(e){return e.actualNode}))),a.length<=1}this.data("ignored")},"presentation-role-conflict-matches":function(e,t){return null!==Yo(t,{chromiumRoles:!0})},"presentational-role-evaluate":function(e,t,n){var r=yo(n)
if(["presentation","none"].includes(r)&&["iframe","frame"].includes(n.props.nodeName)&&n.hasAttr("title"))return this.data({messageKey:"iframe",nodeName:n.props.nodeName}),!1
var a=ei(n)
if(["presentation","none"].includes(a))return this.data({role:a}),!0
if(!["presentation","none"].includes(r))return!1
var o,i=Fo().some((function(e){return n.hasAttr(e)})),u=No(n)
return o=i&&!u?"globalAria":!i&&u?"focusable":"both",this.data({messageKey:o,role:a}),!1},"region-after":function(e){var t=e.filter((function(e){return e.data.isIframe}))
return e.forEach((function(e){if(!e.result&&1!==e.node.ancestry.length){var n,r=e.node.ancestry.slice(0,-1),a=H(t)
try{for(a.s();!(n=a.n()).done;){var o=n.value
if(Us(r,o.node.ancestry)){e.result=o.result
break}}}catch(e){a.e(e)}finally{a.f()}}})),t.forEach((function(e){e.result||(e.result=!0)})),e},"region-evaluate":function(e,t,n){return this.data({isIframe:["iframe","frame"].includes(n.props.nodeName)}),!Tn.get("regionlessNodes",(function(){return function(e){return Qd(i._tree[0],e).map((function(e){for(;e.parent&&!e.parent._hasRegionDescendant&&e.parent.actualNode!==a.body;)e=e.parent
return e})).filter((function(e,t,n){return n.indexOf(e)===t}))}(t)})).includes(n)},"same-caption-summary-evaluate":function(e,t,n){if(void 0!==n.children){var r=n.attr("summary"),a=n.children.find(Kd),o=!!a&&ko(ui(a))
return!(!o||!r)&&ko(r).toLowerCase()===ko(o).toLowerCase()}},"scope-value-evaluate":function(e,t){var n=e.getAttribute("scope").toLowerCase()
return-1!==t.values.indexOf(n)},"scrollable-region-focusable-matches":function(e,t){if(0==!!Os(e,13))return!1
var n=yo(t)
if(po["aria-haspopup"].values.includes(n)){if(Qn(t,'[role~="combobox"]'))return!1
var r=t.attr("id")
if(r){var a=Yr(e)
if(Array.from(a.querySelectorAll('[aria-owns~="'.concat(r,'"], [aria-controls~="').concat(r,'"]'))).some((function(e){return Wu(e.getAttribute("role")).includes("combobox")})))return!1}}return!!vl(t,"*").some((function(e){return ru(e,!0,!0)}))},"skip-link-evaluate":function(e){var t=Ua(e,"href")
return!!t&&(gi(t)||void 0)},"skip-link-matches":function(e){return Tu(e)&&Aa(e)},"structured-dlitems-evaluate":function(e,t,n){var r=n.children
if(!r||!r.length)return!1
for(var a,o=!1,i=!1,u=0;u<r.length;u++){if("DT"===(a=r[u].props.nodeName.toUpperCase())&&(o=!0),o&&"DD"===a)return!1
"DD"===a&&(i=!0)}return o||i},"svg-namespace-matches":ep,"svg-non-empty-title-evaluate":function(e,t,n){if(n.children){var r=n.children.find((function(e){return"title"===e.props.nodeName}))
if(!r)return this.data({messageKey:"noTitle"}),!1
try{if(""===ui(r,{includeHidden:!0}).trim())return this.data({messageKey:"emptyTitle"}),!1}catch(e){return}return!0}},"tabindex-evaluate":function(e,t,n){var r=parseInt(n.attr("tabindex"),10)
return!!isNaN(r)||r<=0},"table-or-grid-role-matches":function(e,t){var n=ei(t)
return["treegrid","grid","table"].includes(n)},"target-offset-evaluate":function(e,t,n){var r,a,o=(null==t?void 0:t.minOffset)||24,i=[],u=o,s=H(Ma(n,o))
try{for(s.s();!(r=s.n()).done;){var l=r.value
if("widget"===pu(l)&&No(l)){var c=(a=Xa(n,l),Math.round(10*a)/10)
c+.05>=o||(u=Math.min(u,c),i.push(l))}}}catch(e){s.e(e)}finally{s.f()}return 0===i.length?(this.data({closestOffset:u,minOffset:o}),!0):(this.relatedNodes(i.map((function(e){return e.actualNode}))),i.some(du)?(this.data({closestOffset:u,minOffset:o}),!du(n)&&void 0):void this.data({messageKey:"nonTabbableNeighbor",closestOffset:u,minOffset:o}))},"target-size-evaluate":function(e,t,n){var r=(null==t?void 0:t.minSize)||24,a=n.boundingClientRect,o=wd.bind(null,r),i=Ma(n),u=function(e,t){return t.filter((function(t){return!vd(t,e)&&Fd(e,t)}))}(n,i),s=function(e,t){var n,r=[],a=[],o=H(t)
try{for(o.s();!(n=o.n()).done;){var i=n.value
!Fd(e,i)&&Za(e,i)&&"none"!==yd(i)&&(vd(e,i)?r.push(i):a.push(i))}}catch(e){o.e(e)}finally{o.f()}return{fullyObscuringElms:r,partialObscuringElms:a}}(n,i),l=s.fullyObscuringElms,c=s.partialObscuringElms
if(l.length&&!u.length)return this.relatedNodes(Ed(l)),this.data({messageKey:"obscured"}),!0
var d=!du(n)&&void 0
if(!o(a)&&!u.length)return this.data(O({minSize:r},bd(a))),d
var p=c.filter((function(e){return"widget"===pu(e)&&No(e)})),f=function(e,t){var n=e.boundingClientRect
return 0===t.length?null:function(e,t){return e.reduce((function(e,n){var r=wd(t,e)
return r!==wd(t,n)?r?e:n:e.width*e.height>n.width*n.height?e:n}))}(eo(n,t.map((function(e){return e.boundingClientRect}))))}(n,p)
if(u.length&&(l.length||!o(f||a)))return this.data({minSize:r,messageKey:"contentOverflow"}),void this.relatedNodes(Ed(u))
if(0!==p.length&&!o(f)){var h=p.every(du),m="partiallyObscured".concat(h?"":"NonTabbable")
return this.data(O({messageKey:m,minSize:r},bd(f))),this.relatedNodes(Ed(p)),h?d:void 0}return this.data(O({minSize:r},bd(f||a))),this.relatedNodes(Ed(p)),!0},"td-has-header-evaluate":function(e){var t=[],n=_d(e),r=wo(e)
return n.forEach((function(e){au(e)&&jd(e)&&!Dc(e)&&(Pd(e,r).some((function(e){return null!==e&&!!au(e)}))||t.push(e))})),!t.length||(this.relatedNodes(t),!1)},"td-headers-attr-evaluate":function(e){for(var t=[],n=[],r=[],a=0;a<e.rows.length;a++)for(var o=e.rows[a],i=0;i<o.cells.length;i++)t.push(o.cells[i])
var u=t.reduce((function(e,t){return t.getAttribute("id")&&e.push(t.getAttribute("id")),e}),[])
return t.forEach((function(e){var t=!1,a=!1
if(e.hasAttribute("headers")&&gi(e)){var o=e.getAttribute("headers").trim()
if(!o)return n.push(e)
var i=Wu(o)
0!==i.length&&(e.getAttribute("id")&&(t=-1!==i.indexOf(e.getAttribute("id").trim())),a=i.some((function(e){return!u.includes(e)})),(t||a)&&r.push(e))}})),r.length>0?(this.relatedNodes(r),!1):!n.length||void this.relatedNodes(n)},"th-has-data-cells-evaluate":function(e){var t=_d(e),n=this,r=[]
t.forEach((function(e){var t=e.getAttribute("headers")
t&&(r=r.concat(t.split(/\s+/)))
var n=e.getAttribute("aria-labelledby")
n&&(r=r.concat(n.split(/\s+/)))}))
var a=t.filter((function(e){return""!==ko(e.textContent)&&("TH"===e.nodeName.toUpperCase()||-1!==["rowheader","columnheader"].indexOf(e.getAttribute("role")))})),o=wo(e),i=!0
return a.forEach((function(e){if(!e.getAttribute("id")||!r.includes(e.getAttribute("id"))){var t=Eo(e,o),a=!1
xo(e)&&(a=Hd("down",t,o).find((function(t){return!xo(t)&&Pd(t,o).includes(e)}))),!a&&Ao(e)&&(a=Hd("right",t,o).find((function(t){return!Ao(t)&&Pd(t,o).includes(e)}))),a||n.relatedNodes(e),i=i&&a}})),!!i||void 0},"title-only-evaluate":function(e,t,n){var r=Gi(n),a=ni(n),o=n.attr("aria-describedby")
return!(r||!a&&!o)},"unique-frame-title-after":function(e){var t={}
return e.forEach((function(e){t[e.data]=void 0!==t[e.data]?++t[e.data]:0})),e.forEach((function(e){e.result=!!t[e.data]})),e},"unique-frame-title-evaluate":function(e,t,n){var r=ko(n.attr("title")).toLowerCase()
return this.data(r),!0},"unsupportedrole-evaluate":function(e,t,n){var r=ei(n,{dpub:!0,fallback:!0}),a=go(r)
return a&&this.data(r),a},"valid-lang-evaluate":function(e,t,n){var r=[]
return t.attributes.forEach((function(e){var a=n.attr(e)
if("string"==typeof a){var o=ns(a),i=t.value?!t.value.map(ns).includes(o):!Ol(o);(""!==o&&i||""!==a&&!ko(a))&&r.push(e+'="'+n.attr(e)+'"')}})),!(!r.length||"html"!==n.props.nodeName&&!ou(n)||(this.data(r),0))},"valid-scrollable-semantics-evaluate":function(e,t){return function(e,t){var n=yo(e)
return n&&(Nc[n]||t.roles.includes(n))||!1}(e,t)||function(e){var t=e.nodeName.toUpperCase()
return Tc[t]||!1}(e)},"widget-not-inline-matches":function(e,t){return rp.every((function(n){return n(e,t)}))},"window-is-top-matches":function(e){return e.ownerDocument.defaultView.self===e.ownerDocument.defaultView.top},"xml-lang-mismatch-evaluate":function(e,t,n){return ns(n.attr("lang"))===ns(n.attr("xml:lang"))},"xml-lang-mismatch-matches":function(e){var t=ns(e.getAttribute("lang")),n=ns(e.getAttribute("xml:lang"))
return Ol(t)&&Ol(n)}},up=ip,sp=function(e){this.id=e.id,this.data=null,this.relatedNodes=[],this.result=null}
function lp(e){if("string"==typeof e){if(up[e])return up[e]
if(/^\s*function[\s\w]*\(/.test(e))return new Function("return "+e+";")()
throw new ReferenceError("Function ID does not exist in the metadata-function-map: ".concat(e))}return e}function cp(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return(Array.isArray(e)||"object"!==o(e))&&(e={value:e}),e}function dp(e){e&&(this.id=e.id,this.configure(e))}dp.prototype.enabled=!0,dp.prototype.run=function(e,t,n,r,a){var o=(t=t||{}).hasOwnProperty("enabled")?t.enabled:this.enabled,i=this.getOptions(t.options)
if(o){var u,s=new sp(this),l=On(s,t,r,a)
try{u=this.evaluate.call(l,e.actualNode,i,e,n)}catch(t){return e&&e.actualNode&&(t.errorNode=new Sn(e).toJSON()),void a(t)}l.isAsync||(s.result=u,r(s))}else r(null)},dp.prototype.runSync=function(e,t,n){var r=(t=t||{}).enabled
if(!(void 0===r?this.enabled:r))return null
var a,o=this.getOptions(t.options),i=new sp(this),u=On(i,t)
u.async=function(){throw new Error("Cannot run async check while in a synchronous run")}
try{a=this.evaluate.call(u,e.actualNode,o,e,n)}catch(t){throw e&&e.actualNode&&(t.errorNode=new Sn(e).toJSON()),t}return i.result=a,i},dp.prototype.configure=function(e){var t=this
e.evaluate&&!up[e.evaluate]||(this._internalCheck=!0),e.hasOwnProperty("enabled")&&(this.enabled=e.enabled),e.hasOwnProperty("options")&&(this._internalCheck?this.options=cp(e.options):this.options=e.options),["evaluate","after"].filter((function(t){return e.hasOwnProperty(t)})).forEach((function(n){return t[n]=lp(e[n])}))},dp.prototype.getOptions=function(e){return this._internalCheck?Vr(this.options,cp(e||{})):e||this.options}
var pp=dp,fp=function(e){this.id=e.id,this.result=Bt.NA,this.pageLevel=e.pageLevel,this.impact=null,this.nodes=[]}
function hp(e,t){this._audit=t,this.id=e.id,this.selector=e.selector||"*",e.impact&&(Yt(Bt.impact.includes(e.impact),"Impact ".concat(e.impact," is not a valid impact")),this.impact=e.impact),this.excludeHidden="boolean"!=typeof e.excludeHidden||e.excludeHidden,this.enabled="boolean"!=typeof e.enabled||e.enabled,this.pageLevel="boolean"==typeof e.pageLevel&&e.pageLevel,this.reviewOnFail="boolean"==typeof e.reviewOnFail&&e.reviewOnFail,this.any=e.any||[],this.all=e.all||[],this.none=e.none||[],this.tags=e.tags||[],this.preload=!!e.preload,this.actIds=e.actIds,e.matches&&(this.matches=lp(e.matches))}function mp(e){if(e.length){var t=!1,n={}
return e.forEach((function(e){var r=e.results.filter((function(e){return e}))
n[e.type]=r,r.length&&(t=!0)})),t?n:null}}hp.prototype.matches=function(){return!0},hp.prototype.gather=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n="mark_gather_start_"+this.id,r="mark_gather_end_"+this.id,a="mark_isVisibleToScreenReaders_start_"+this.id,o="mark_isVisibleToScreenReaders_end_"+this.id
t.performanceTimer&&nl.mark(n)
var i=El(this.selector,e)
return this.excludeHidden&&(t.performanceTimer&&nl.mark(a),i=i.filter((function(e){return gi(e)})),t.performanceTimer&&(nl.mark(o),nl.measure("rule_"+this.id+"#gather_axe.utils.isVisibleToScreenReaders",a,o))),t.performanceTimer&&(nl.mark(r),nl.measure("rule_"+this.id+"#gather",n,r)),i},hp.prototype.runChecks=function(e,t,n,r,a,o){var i=this,u=nr()
this[e].forEach((function(e){var a=i._audit.checks[e.id||e],o=ds(a,i.id,n)
u.defer((function(e,n){a.run(t,o,r,e,n)}))})),u.then((function(t){t=t.filter((function(e){return e})),a({type:e,results:t})})).catch(o)},hp.prototype.runChecksSync=function(e,t,n,r){var a=this,o=[]
return this[e].forEach((function(e){var i=a._audit.checks[e.id||e],u=ds(i,a.id,n)
o.push(i.runSync(t,u,r))})),{type:e,results:o=o.filter((function(e){return e}))}},hp.prototype.run=function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0
n.performanceTimer&&this._trackPerformance()
var o,i=nr(),s=new fp(this)
try{o=this.gatherAndMatchNodes(e,n)}catch(e){return void a(new u({cause:e,ruleId:this.id}))}n.performanceTimer&&this._logGatherPerformance(o),o.forEach((function(r){i.defer((function(a,o){var i=nr();["any","all","none"].forEach((function(a){i.defer((function(o,i){t.runChecks(a,r,n,e,o,i)}))})),i.then((function(e){var o=mp(e)
o&&(o.node=new Sn(r,n),s.nodes.push(o),t.reviewOnFail&&(["any","all"].forEach((function(e){o[e].forEach((function(e){!1===e.result&&(e.result=void 0)}))})),o.none.forEach((function(e){!0===e.result&&(e.result=void 0)})))),a()})).catch((function(e){return o(e)}))}))})),i.defer((function(e){return setTimeout(e,0)})),n.performanceTimer&&this._logRulePerformance(),i.then((function(){return r(s)})).catch((function(e){return a(e)}))},hp.prototype.runSync=function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
n.performanceTimer&&this._trackPerformance()
var r,a=new fp(this)
try{r=this.gatherAndMatchNodes(e,n)}catch(e){throw new u({cause:e,ruleId:this.id})}return n.performanceTimer&&this._logGatherPerformance(r),r.forEach((function(r){var o=[];["any","all","none"].forEach((function(a){o.push(t.runChecksSync(a,r,n,e))}))
var i=mp(o)
i&&(i.node=r.actualNode?new Sn(r,n):null,a.nodes.push(i),t.reviewOnFail&&(["any","all"].forEach((function(e){i[e].forEach((function(e){!1===e.result&&(e.result=void 0)}))})),i.none.forEach((function(e){!0===e.result&&(e.result=void 0)}))))})),n.performanceTimer&&this._logRulePerformance(),a},hp.prototype._trackPerformance=function(){this._markStart="mark_rule_start_"+this.id,this._markEnd="mark_rule_end_"+this.id,this._markChecksStart="mark_runchecks_start_"+this.id,this._markChecksEnd="mark_runchecks_end_"+this.id},hp.prototype._logGatherPerformance=function(e){St("gather (",e.length,"):",nl.timeElapsed()+"ms"),nl.mark(this._markChecksStart)},hp.prototype._logRulePerformance=function(){nl.mark(this._markChecksEnd),nl.mark(this._markEnd),nl.measure("runchecks_"+this.id,this._markChecksStart,this._markChecksEnd),nl.measure("rule_"+this.id,this._markStart,this._markEnd)},hp.prototype.gatherAndMatchNodes=function(e,t){var n=this,r="mark_matches_start_"+this.id,a="mark_matches_end_"+this.id,o=this.gather(e,t)
return t.performanceTimer&&nl.mark(r),o=o.filter((function(t){return n.matches(t.actualNode,t,e)})),t.performanceTimer&&(nl.mark(a),nl.measure("rule_"+this.id+"#matches",r,a)),o},hp.prototype.after=function(e,t){var n,r=this,a=jr(n=this).map((function(e){var t=n._audit.checks[e.id||e]
return t&&"function"==typeof t.after?t:null})).filter(Boolean),o=this.id
return a.forEach((function(n){var a,i,u,s=(a=e.nodes,i=n.id,u=[],a.forEach((function(e){jr(e).forEach((function(t){t.id===i&&(t.node=e.node,u.push(t))}))})),u),l=ds(n,o,t),c=n.after(s,l)
r.reviewOnFail&&c.forEach((function(e){var t=(r.any.includes(e.id)||r.all.includes(e.id))&&!1===e.result,n=r.none.includes(e.id)&&!0===e.result;(t||n)&&(e.result=void 0)})),s.forEach((function(e){delete e.node,-1===c.indexOf(e)&&(e.filtered=!0)}))})),e.nodes=function(e){var t=["any","all","none"],n=e.nodes.filter((function(e){var n=0
return t.forEach((function(t){e[t]=e[t].filter((function(e){return!0!==e.filtered})),n+=e[t].length})),n>0}))
return e.pageLevel&&n.length&&(n=[n.reduce((function(e,n){if(e)return t.forEach((function(t){e[t].push.apply(e[t],n[t])})),e}))]),n}(e),e},hp.prototype.configure=function(e){e.hasOwnProperty("selector")&&(this.selector=e.selector),e.hasOwnProperty("excludeHidden")&&(this.excludeHidden="boolean"!=typeof e.excludeHidden||e.excludeHidden),e.hasOwnProperty("enabled")&&(this.enabled="boolean"!=typeof e.enabled||e.enabled),e.hasOwnProperty("pageLevel")&&(this.pageLevel="boolean"==typeof e.pageLevel&&e.pageLevel),e.hasOwnProperty("reviewOnFail")&&(this.reviewOnFail="boolean"==typeof e.reviewOnFail&&e.reviewOnFail),e.hasOwnProperty("any")&&(this.any=e.any),e.hasOwnProperty("all")&&(this.all=e.all),e.hasOwnProperty("none")&&(this.none=e.none),e.hasOwnProperty("tags")&&(this.tags=e.tags),e.hasOwnProperty("actIds")&&(this.actIds=e.actIds),e.hasOwnProperty("matches")&&(this.matches=lp(e.matches)),e.impact&&(Yt(Bt.impact.includes(e.impact),"Impact ".concat(e.impact," is not a valid impact")),this.impact=e.impact)}
var Dp=hp,gp=U(At()),vp=/\{\{.+?\}\}/g
function yp(){return n.origin?n.origin:n.location&&n.location.origin?n.location.origin:void 0}function bp(e,t,n){var r,a
for(r=0,a=e.length;r<a;r++)t[n](e[r])}var Fp=function(){function e(t){j(this,e),this.lang="en",this.defaultConfig=t,this.standards=Do,this._init(),this._defaultLocale=null}return q(e,[{key:"_setDefaultLocale",value:function(){if(!this._defaultLocale){for(var e={checks:{},rules:{},failureSummaries:{},incompleteFallbackMessage:"",lang:this.lang},t=Object.keys(this.data.checks),n=0;n<t.length;n++){var r=t[n],a=this.data.checks[r].messages,o=a.pass,i=a.fail,u=a.incomplete
e.checks[r]={pass:o,fail:i,incomplete:u}}for(var s=Object.keys(this.data.rules),l=0;l<s.length;l++){var c=s[l],d=this.data.rules[c],p=d.description,f=d.help
e.rules[c]={description:p,help:f}}for(var h=Object.keys(this.data.failureSummaries),m=0;m<h.length;m++){var D=h[m],g=this.data.failureSummaries[D].failureMessage
e.failureSummaries[D]={failureMessage:g}}e.incompleteFallbackMessage=this.data.incompleteFallbackMessage,this._defaultLocale=e}}},{key:"_resetLocale",value:function(){var e=this._defaultLocale
e&&this.applyLocale(e)}},{key:"_applyCheckLocale",value:function(e){for(var t,n,r,a,i=Object.keys(e),u=0;u<i.length;u++){var s=i[u]
if(!this.data.checks[s])throw new Error('Locale provided for unknown check: "'.concat(s,'"'))
this.data.checks[s]=(t=this.data.checks[s],r=void 0,a=void 0,r=(n=e[s]).pass,a=n.fail,"string"==typeof r&&vp.test(r)&&(r=gp.default.compile(r)),"string"==typeof a&&vp.test(a)&&(a=gp.default.compile(a)),O({},t,{messages:{pass:r||t.messages.pass,fail:a||t.messages.fail,incomplete:"object"===o(t.messages.incomplete)?O({},t.messages.incomplete,n.incomplete):n.incomplete}}))}}},{key:"_applyRuleLocale",value:function(e){for(var t,n,r,a,o=Object.keys(e),i=0;i<o.length;i++){var u=o[i]
if(!this.data.rules[u])throw new Error('Locale provided for unknown rule: "'.concat(u,'"'))
this.data.rules[u]=(t=this.data.rules[u],r=void 0,a=void 0,r=(n=e[u]).help,a=n.description,"string"==typeof r&&vp.test(r)&&(r=gp.default.compile(r)),"string"==typeof a&&vp.test(a)&&(a=gp.default.compile(a)),O({},t,{help:r||t.help,description:a||t.description}))}}},{key:"_applyFailureSummaries",value:function(e){for(var t,n,r=Object.keys(e),a=0;a<r.length;a++){var o=r[a]
if(!this.data.failureSummaries[o])throw new Error('Locale provided for unknown failureMessage: "'.concat(o,'"'))
this.data.failureSummaries[o]=(t=this.data.failureSummaries[o],n=void 0,"string"==typeof(n=e[o].failureMessage)&&vp.test(n)&&(n=gp.default.compile(n)),O({},t,{failureMessage:n||t.failureMessage}))}}},{key:"applyLocale",value:function(e){var t,n
this._setDefaultLocale(),e.checks&&this._applyCheckLocale(e.checks),e.rules&&this._applyRuleLocale(e.rules),e.failureSummaries&&this._applyFailureSummaries(e.failureSummaries,"failureSummaries"),e.incompleteFallbackMessage&&(this.data.incompleteFallbackMessage=(t=this.data.incompleteFallbackMessage,"string"==typeof(n=e.incompleteFallbackMessage)&&vp.test(n)&&(n=gp.default.compile(n)),n||t)),e.lang&&(this.lang=e.lang)}},{key:"setAllowedOrigins",value:function(e){var t=yp()
this.allowedOrigins=[]
var n,r=H(e)
try{for(r.s();!(n=r.n()).done;){var a=n.value
if(a===Bt.allOrigins)return void(this.allowedOrigins=["*"])
a!==Bt.sameOrigin?this.allowedOrigins.push(a):t&&this.allowedOrigins.push(t)}}catch(e){r.e(e)}finally{r.f()}}},{key:"_init",value:function(){var e=function(e){var t
if(e?(t=_n(e)).commons=e.commons:t={},t.reporter=t.reporter||null,t.noHtml=t.noHtml||!1,!t.allowedOrigins){var n=yp()
t.allowedOrigins=n?[n]:[]}return t.rules=t.rules||[],t.checks=t.checks||[],t.data=O({checks:{},rules:{}},t.data),t}(this.defaultConfig)
this.lang=e.lang||"en",this.reporter=e.reporter,this.commands={},this.rules=[],this.checks={},this.brand="axe",this.application="axeAPI",this.tagExclude=["experimental"],this.noHtml=e.noHtml,this.allowedOrigins=e.allowedOrigins,bp(e.rules,this,"addRule"),bp(e.checks,this,"addCheck"),this.data={},this.data.checks=e.data&&e.data.checks||{},this.data.rules=e.data&&e.data.rules||{},this.data.failureSummaries=e.data&&e.data.failureSummaries||{},this.data.incompleteFallbackMessage=e.data&&e.data.incompleteFallbackMessage||"",this._constructHelpUrls()}},{key:"registerCommand",value:function(e){this.commands[e.id]=e.callback}},{key:"addRule",value:function(e){e.metadata&&(this.data.rules[e.id]=e.metadata)
var t=this.getRule(e.id)
t?t.configure(e):this.rules.push(new Dp(e,this))}},{key:"addCheck",value:function(e){var t=e.metadata
"object"===o(t)&&(this.data.checks[e.id]=t,"object"===o(t.messages)&&Object.keys(t.messages).filter((function(e){return t.messages.hasOwnProperty(e)&&"string"==typeof t.messages[e]})).forEach((function(e){0===t.messages[e].indexOf("function")&&(t.messages[e]=new Function("return "+t.messages[e]+";")())}))),this.checks[e.id]?this.checks[e.id].configure(e):this.checks[e.id]=new pp(e)}},{key:"run",value:function(e,t,n,r){this.normalizeOptions(t),i._selectCache=[]
var a=function(e,t,n){return e.reduce((function(e,r){return bl(r,t,n)?r.preload?(e.later.push(r),e):(e.now.push(r),e):e}),{now:[],later:[]})}(this.rules,e,t),o=a.now,u=a.later,s=nr()
o.forEach((function(n){s.defer(wp(n,e,t))}))
var l=nr()
u.length&&l.defer((function(e){ml(t).then((function(t){return e(t)})).catch((function(t){console.warn("Couldn't load preload assets: ",t),e(void 0)}))}))
var c=nr()
c.defer(s),c.defer(l),c.then((function(a){var o=a.pop()
if(o&&o.length){var s=o[0]
s&&(e=O({},e,s))}var l=a[0]
if(!u.length)return i._selectCache=void 0,void n(l.filter((function(e){return!!e})))
var c=nr()
u.forEach((function(n){var r=wp(n,e,t)
c.defer(r)})),c.then((function(e){i._selectCache=void 0,n(l.concat(e).filter((function(e){return!!e})))})).catch(r)})).catch(r)}},{key:"after",value:function(e,t){var n=this.rules
return e.map((function(e){var r=Mr(n,"id",e.id)
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
var a=e.data.rules[r.id];("string"!=typeof a.helpUrl||t&&a.helpUrl===Ep(t,r.id,n))&&(a.helpUrl=Ep(e,r.id,n))}))}},{key:"resetRulesAndChecks",value:function(){this._init(),this._resetLocale()}}]),e}()
function wp(e,t,n){return n.performanceTimer&&nl.mark("mark_rule_start_"+e.id),function(r,a){e.run(t,n,(function(e){r(e)}),(function(t){if(n.debug)a(t)
else{var o=Object.assign(new fp(e),{result:Bt.CANTTELL,description:"An error occured while running this rule",message:t.message,stack:t.stack,error:t,errorNode:t.errorNode})
r(o)}}))}}function Ep(e,t,n){var r=e.brand,a=e.application,o=e.lang
return Bt.helpUrlBase+r+"/"+(n||i.version.substring(0,i.version.lastIndexOf(".")))+"/"+t+"?application="+encodeURIComponent(a)+(o&&"en"!==o?"&lang="+encodeURIComponent(o):"")}var Cp=Fp
function xp(e){var t=n&&"Node"in n&&"NodeList"in n,r=!!a
if(!t||!r){if(!e||!e.ownerDocument)throw new Error('Required "window" or "document" globals not defined and cannot be deduced from the context. Either set the globals before running or pass in a valid Element.')
r||(Tn.set("globalDocumentSet",!0),a=e.ownerDocument),t||(Tn.set("globalWindowSet",!0),n=a.defaultView)}}function Ap(){Tn.get("globalDocumentSet")&&(Tn.set("globalDocumentSet",!1),a=null),Tn.get("globalWindowSet")&&(Tn.set("globalWindowSet",!1),n=null)}var kp=function(){Ap(),i._memoizedFns.forEach((function(e){return e.clear()})),Tn.clear(),i._tree=void 0,i._selectorData=void 0,i._selectCache=void 0},Tp=function(e,t,n,r){try{e=new Rs(e),i._tree=e.flatTree,i._selectorData=Dn(e.flatTree)}catch(e){return kp(),r(e)}var a=nr(),o=i._audit
t.performanceTimer&&nl.auditStart(),e.frames.length&&!1!==t.iframes&&a.defer((function(n,r){Hr(e,t,"rules",null,n,r)})),a.defer((function(n,r){o.run(e,t,n,r)})),a.then((function(a){try{t.performanceTimer&&nl.auditEnd()
var i=Lr(a.map((function(e){return{results:e}})))
e.initiator&&((i=o.after(i,t)).forEach(gl),i=i.map(Vt))
try{n(i,kp)}catch(e){kp(),St(e)}}catch(e){kp(),r(e)}})).catch((function(e){kp(),r(e)}))}
function Np(e){this._run=e.run,this._collect=e.collect,this._registry={},e.commands.forEach((function(e){i._audit.registerCommand(e)}))}function Rp(e){var t,n,r,u,s=_(e,3),l=s[0],c=s[1],d=s[2],p=new TypeError("axe.run arguments are invalid")
if(!ys(u=l)&&!bs(u)){if(void 0!==d)throw p
d=c,c=l,l=a}if("object"!==o(c)){if(void 0!==d)throw p
d=c,c={}}if("function"!=typeof d&&void 0!==d)throw p
return(c=_n(c)).reporter=null!==(t=null!==(n=c.reporter)&&void 0!==n?n:null===(r=i._audit)||void 0===r?void 0:r.reporter)&&void 0!==t?t:"v1",{context:l,options:c,callback:d}}n.top!==n&&(Sr.subscribe("axe.start",(function(e,t,n){var r=n,o=function(e){e instanceof Error==0&&(e=new Error(e)),n(e)},u=e&&e.context||{}
u.hasOwnProperty("include")&&!u.include.length&&(u.include=[a])
var s=e&&e.options||{}
switch(e.command){case"rules":return Tp(u,s,(function(e,t){r(e),t()}),o)
case"cleanup-plugin":return Ul(r,o)
default:if(i._audit&&i._audit.commands&&i._audit.commands[e.command])return i._audit.commands[e.command](e,n)}})),Sr.subscribe("axe.ping",(function(e,t,n){n({axe:!0})}))),Np.prototype.run=function(){return this._run.apply(this,arguments)},Np.prototype.collect=function(){return this._collect.apply(this,arguments)},Np.prototype.cleanup=function(e){var t=i.utils.queue(),n=this
Object.keys(this._registry).forEach((function(e){t.defer((function(t){n._registry[e].cleanup(t)}))})),t.then(e)},Np.prototype.add=function(e){this._registry[e.id]=e}
var Bp=function(){}
function Sp(e){var t,n,r
return"function"==typeof Promise&&e===Bp?t=new Promise((function(e,t){n=t,r=e})):r=n=Bp,{thenable:t,reject:n,resolve:r}}function Op(e,t,n){var r=Yl(t.reporter)(e,t,n)
void 0!==r&&n(r)}function _p(e,t){if(Ap(),"function"!=typeof t||t===Bp)throw e
t(e.message)}function Ip(e){var t=e.node,n=R(e,D)
n.node=t.toJSON()
for(var r=0,a=["any","all","none"];r<a.length;r++){var o=a[r]
n[o]=n[o].map((function(e){var t=e.relatedNodes
return O({},R(e,g),{relatedNodes:t.map((function(e){return e.toJSON()}))})}))}return n}function Pp(e){var t,n=[],r=H(e)
try{for(r.s();!(t=r.n()).done;){var a=t.value,o=n.shift()
if(a){a.frameSpec=null!=o?o:null
var i=jp(a)
n.unshift.apply(n,B(i))}}}catch(e){r.e(e)}finally{r.f()}}function jp(e){var t=e.frames,n=e.frameSpec
return n?t.map((function(e){return Sn.mergeSpecs(e,n)})):t}function Mp(e,t){return new Promise((function(n){Yl(t.reporter)(e,t,n)}))}var qp=function(e,t,n){if("function"==typeof t&&(n=t,t={}),!e||!Array.isArray(e))return n(e)
n(e.map((function(e){for(var t=O({},e),n=0,r=["passes","violations","incomplete","inapplicable"];n<r.length;n++){var a=r[n]
t[a]&&Array.isArray(t[a])&&(t[a]=t[a].map((function(e){var t,n=e.node,r=R(e,b)
return O({node:n="function"==typeof(null===(t=n)||void 0===t?void 0:t.toJSON)?n.toJSON():n},r)})))}return t})))},Lp={base:{Audit:Cp,CheckResult:sp,Check:pp,Context:Rs,RuleResult:fp,Rule:Dp,metadataFunctionMap:up},public:{reporters:Wl},helpers:{failureSummary:rs,incompleteFallbackMessage:as,processAggregate:is},utils:{setDefaultFrameMessenger:Rr,cacheNodeSelectors:Ju,getNodesMatchingExpression:Yu,convertSelector:Un},commons:{dom:{nativelyHidden:ia,displayHidden:ua,visibilityHidden:sa,contentVisibiltyHidden:la,ariaHidden:ca,opacityHidden:da,scrollHidden:pa,overflowHidden:fa,clipHidden:ha,areaHidden:ma,detailsHidden:Da}}}
i._thisWillBeDeletedDoNotUse=Lp,i.constants=Bt,i.log=St,i.AbstractVirtualNode=_t,i.SerialVirtualNode=jl,i.VirtualNode=Uu,i._cache=Tn,i.imports=Ml,i.cleanup=Ul,i.configure=function(e){var t
if(!(t=i._audit))throw new Error("No audit configured")
if(e.axeVersion||e.ver){var n=e.axeVersion||e.ver
if(!/^\d+\.\d+\.\d+(-canary)?/.test(n))throw new Error("Invalid configured version ".concat(n))
var r=_(n.split("-"),2),a=r[0],o=r[1],u=_(a.split(".").map(Number),3),s=u[0],l=u[1],c=u[2],d=_(i.version.split("-"),2),p=d[0],f=d[1],h=_(p.split(".").map(Number),3),m=h[0],D=h[1],g=h[2]
if(s!==m||D<l||D===l&&g<c||s===m&&l===D&&c===g&&o&&o!==f)throw new Error("Configured version ".concat(n," is not compatible with current axe version ").concat(i.version))}if(e.reporter&&("function"==typeof e.reporter||Gl(e.reporter))&&(t.reporter=e.reporter),e.checks){if(!Array.isArray(e.checks))throw new TypeError("Checks property must be an array")
e.checks.forEach((function(e){if(!e.id)throw new TypeError("Configured check ".concat(JSON.stringify(e)," is invalid. Checks must be an object with at least an id property"))
t.addCheck(e)}))}var v,y=[]
if(e.rules){if(!Array.isArray(e.rules))throw new TypeError("Rules property must be an array")
e.rules.forEach((function(e){if(!e.id)throw new TypeError("Configured rule ".concat(JSON.stringify(e)," is invalid. Rules must be an object with at least an id property"))
y.push(e.id),t.addRule(e)}))}if(e.disableOtherRules&&t.rules.forEach((function(e){!1===y.includes(e.id)&&(e.enabled=!1)})),void 0!==e.branding?t.setBranding(e.branding):t._constructHelpUrls(),e.tagExclude&&(t.tagExclude=e.tagExclude),e.locale&&t.applyLocale(e.locale),e.standards&&(v=e.standards,Object.keys(mo).forEach((function(e){v[e]&&(mo[e]=Vr(mo[e],v[e]))}))),e.noHtml&&(t.noHtml=!0),e.allowedOrigins){if(!Array.isArray(e.allowedOrigins))throw new TypeError("Allowed origins property must be an array")
if(e.allowedOrigins.includes("*"))throw new Error('"*" is not allowed. Use "'.concat(Bt.allOrigins,'" instead'))
t.setAllowedOrigins(e.allowedOrigins)}},i.frameMessenger=function(e){Sr.updateMessenger(e)},i.getRules=function(e){var t=(e=e||[]).length?i._audit.rules.filter((function(t){return!!e.filter((function(e){return-1!==t.tags.indexOf(e)})).length})):i._audit.rules,n=i._audit.data.rules||{}
return t.map((function(e){var t=n[e.id]||{}
return{ruleId:e.id,description:t.description,help:t.help,helpUrl:t.helpUrl,tags:e.tags,actIds:e.actIds}}))},i._load=function(e){i._audit=new Cp(e)},i.plugins={},i.registerPlugin=function(e){i.plugins[e.id]=new Np(e)},i.hasReporter=Gl,i.getReporter=Yl,i.addReporter=function(e,t,n){Wl[e]=t,n&&(zl=t)},i.reset=function(){var e=i._audit
if(!e)throw new Error("No audit configured")
e.resetRulesAndChecks(),Object.keys(mo).forEach((function(e){mo[e]=ho[e]}))},i._runRules=Tp,i.runVirtualRule=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
n.reporter=n.reporter||i._audit.reporter||"v1",i._selectorData={},t instanceof _t||(t=new jl(t))
var r=Ss(e)
if(!r)throw new Error("unknown rule `"+e+"`")
var a={initiator:!0,include:[t],exclude:[],frames:[],page:!1,focusable:!0,size:{},flatTree:[]},o=(r=Object.create(r,{excludeHidden:{value:!1}})).runSync(a,n)
gl(o),Vt(o)
var u=Wt([o])
return u.violations.forEach((function(e){return e.nodes.forEach((function(e){e.failureSummary=rs(e)}))})),O({},ps(),u,{toolOptions:n})},i.run=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
xp(t[0])
var r=Rp(t),a=r.context,o=r.options,u=r.callback,s=void 0===u?Bp:u,l=Sp(s),c=l.thenable,d=l.resolve,p=l.reject
try{Yt(i._audit,"No audit configured"),Yt(!i._running,"Axe is already running. Use `await axe.run()` to wait for the previous run to finish before starting a new run.")}catch(e){return _p(e,s)}function f(e,t){o.performanceTimer&&i.utils.performanceTimer.end()
try{Op(e,o,(function(e){i._running=!1,t()
try{s(null,e)}catch(e){i.log(e)}d(e)}))}catch(e){i._running=!1,t(),s(e),p(e)}}function h(e){o.performanceTimer&&i.utils.performanceTimer.end(),i._running=!1,Ap(),s(e),p(e)}return i._running=!0,o.performanceTimer&&i.utils.performanceTimer.start(),i._runRules(a,o,f,h),c},i.setup=function(e){if(i._tree)throw new Error("Axe is already setup. Call `axe.teardown()` before calling `axe.setup` again.")
return i._tree=ts(e),i._selectorData=Dn(i._tree),i._tree[0]},i.teardown=kp,i.runPartial=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
var r=Rp(t),a=r.options,o=r.context
Yt(i._audit,"Axe is not configured. Audit is missing."),Yt(!i._running,"Axe is already running. Use `await axe.run()` to wait for the previous run to finish before starting a new run.")
var u=new Rs(o,i._tree)
return i._tree=u.flatTree,i._selectorData=Dn(u.flatTree),i._running=!0,new Promise((function(e,t){i._audit.run(u,a,e,t)})).then((function(e){e=e.map((function(e){var t=e.nodes,n=R(e,m)
return O({nodes:t.map(Ip)},n)}))
var t,n=u.frames.map((function(e){var t=e.node
return new Sn(t,a).toJSON()}))
return u.initiator&&(t=ps()),i._running=!1,kp(),{results:e,frames:n,environmentData:t}})).catch((function(e){return i._running=!1,kp(),Promise.reject(e)}))},i.finishRun=function(e){var t,n,r,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
a=_n(a)
var o=e.find((function(e){return e.environmentData}))||{},u=o.environmentData
i._audit.normalizeOptions(a),a.reporter=null!==(t=null!==(n=a.reporter)&&void 0!==n?n:null===(r=i._audit)||void 0===r?void 0:r.reporter)&&void 0!==t?t:"v1",Pp(e)
var s=Lr(e)
return(s=i._audit.after(s,a)).forEach(gl),Mp(s=s.map(Vt),O({environmentData:u},a))},i.commons=Nd,i.utils=It,i.addReporter("na",(function(e,t,n){console.warn('"na" reporter will be deprecated in axe v4.0. Use the "v2" reporter instead.'),"function"==typeof t&&(n=t,t={})
var r=t,a=r.environmentData,o=R(r,v)
n(O({},ps(a),{toolOptions:o},is(e,t)))})),i.addReporter("no-passes",(function(e,t,n){"function"==typeof t&&(n=t,t={})
var r=t,a=r.environmentData,o=R(r,y)
t.resultTypes=["violations"]
var i=is(e,t).violations
n(O({},ps(a),{toolOptions:o,violations:i}))})),i.addReporter("rawEnv",(function(e,t,n){"function"==typeof t&&(n=t,t={})
var r=t,a=r.environmentData,o=R(r,F)
qp(e,o,(function(e){var t=ps(a)
n({raw:e,env:t})}))})),i.addReporter("raw",qp),i.addReporter("v1",(function(e,t,n){"function"==typeof t&&(n=t,t={})
var r=t,a=r.environmentData,o=R(r,w),i=is(e,t),u=function(e){e.nodes.forEach((function(e){e.failureSummary=rs(e)}))}
i.incomplete.forEach(u),i.violations.forEach(u),n(O({},ps(a),{toolOptions:o},i))})),i.addReporter("v2",(function(e,t,n){"function"==typeof t&&(n=t,t={})
var r=t,a=r.environmentData,o=R(r,E),i=is(e,t)
n(O({},ps(a),{toolOptions:o},i))}),!0)}(),i._load({lang:"en",data:{rules:{accesskeys:{description:"Ensures every accesskey attribute value is unique",help:"accesskey attribute value should be unique"},"area-alt":{description:"Ensures <area> elements of image maps have alternate text",help:"Active <area> elements must have alternate text"},"aria-allowed-attr":{description:"Ensures ARIA attributes are allowed for an element's role",help:"Elements must only use allowed ARIA attributes"},"aria-allowed-role":{description:"Ensures role attribute has an appropriate value for the element",help:"ARIA role should be appropriate for the element"},"aria-command-name":{description:"Ensures every ARIA button, link and menuitem has an accessible name",help:"ARIA commands must have an accessible name"},"aria-dialog-name":{description:"Ensures every ARIA dialog and alertdialog node has an accessible name",help:"ARIA dialog and alertdialog nodes should have an accessible name"},"aria-hidden-body":{description:"Ensures aria-hidden='true' is not present on the document body.",help:"aria-hidden='true' must not be present on the document body"},"aria-hidden-focus":{description:"Ensures aria-hidden elements are not focusable nor contain focusable elements",help:"ARIA hidden element must not be focusable or contain focusable elements"},"aria-input-field-name":{description:"Ensures every ARIA input field has an accessible name",help:"ARIA input fields must have an accessible name"},"aria-meter-name":{description:"Ensures every ARIA meter node has an accessible name",help:"ARIA meter nodes must have an accessible name"},"aria-progressbar-name":{description:"Ensures every ARIA progressbar node has an accessible name",help:"ARIA progressbar nodes must have an accessible name"},"aria-required-attr":{description:"Ensures elements with ARIA roles have all required ARIA attributes",help:"Required ARIA attributes must be provided"},"aria-required-children":{description:"Ensures elements with an ARIA role that require child roles contain them",help:"Certain ARIA roles must contain particular children"},"aria-required-parent":{description:"Ensures elements with an ARIA role that require parent roles are contained by them",help:"Certain ARIA roles must be contained by particular parents"},"aria-roledescription":{description:"Ensure aria-roledescription is only used on elements with an implicit or explicit role",help:"aria-roledescription must be on elements with a semantic role"},"aria-roles":{description:"Ensures all elements with a role attribute use a valid value",help:"ARIA roles used must conform to valid values"},"aria-text":{description:'Ensures "role=text" is used on elements with no focusable descendants',help:'"role=text" should have no focusable descendants'},"aria-toggle-field-name":{description:"Ensures every ARIA toggle field has an accessible name",help:"ARIA toggle fields must have an accessible name"},"aria-tooltip-name":{description:"Ensures every ARIA tooltip node has an accessible name",help:"ARIA tooltip nodes must have an accessible name"},"aria-treeitem-name":{description:"Ensures every ARIA treeitem node has an accessible name",help:"ARIA treeitem nodes should have an accessible name"},"aria-valid-attr-value":{description:"Ensures all ARIA attributes have valid values",help:"ARIA attributes must conform to valid values"},"aria-valid-attr":{description:"Ensures attributes that begin with aria- are valid ARIA attributes",help:"ARIA attributes must conform to valid names"},"audio-caption":{description:"Ensures <audio> elements have captions",help:"<audio> elements must have a captions track"},"autocomplete-valid":{description:"Ensure the autocomplete attribute is correct and suitable for the form field",help:"autocomplete attribute must be used correctly"},"avoid-inline-spacing":{description:"Ensure that text spacing set through style attributes can be adjusted with custom stylesheets",help:"Inline text spacing must be adjustable with custom stylesheets"},blink:{description:"Ensures <blink> elements are not used",help:"<blink> elements are deprecated and must not be used"},"button-name":{description:"Ensures buttons have discernible text",help:"Buttons must have discernible text"},bypass:{description:"Ensures each page has at least one mechanism for a user to bypass navigation and jump straight to the content",help:"Page must have means to bypass repeated blocks"},"color-contrast-enhanced":{description:"Ensures the contrast between foreground and background colors meets WCAG 2 AAA contrast ratio thresholds",help:"Elements must have sufficient color contrast"},"color-contrast":{description:"Ensures the contrast between foreground and background colors meets WCAG 2 AA contrast ratio thresholds",help:"Elements must have sufficient color contrast"},"css-orientation-lock":{description:"Ensures content is not locked to any specific display orientation, and the content is operable in all display orientations",help:"CSS Media queries must not lock display orientation"},"definition-list":{description:"Ensures <dl> elements are structured correctly",help:"<dl> elements must only directly contain properly-ordered <dt> and <dd> groups, <script>, <template> or <div> elements"},dlitem:{description:"Ensures <dt> and <dd> elements are contained by a <dl>",help:"<dt> and <dd> elements must be contained by a <dl>"},"document-title":{description:"Ensures each HTML document contains a non-empty <title> element",help:"Documents must have <title> element to aid in navigation"},"duplicate-id-active":{description:"Ensures every id attribute value of active elements is unique",help:"IDs of active elements must be unique"},"duplicate-id-aria":{description:"Ensures every id attribute value used in ARIA and in labels is unique",help:"IDs used in ARIA and labels must be unique"},"duplicate-id":{description:"Ensures every id attribute value is unique",help:"id attribute value must be unique"},"empty-heading":{description:"Ensures headings have discernible text",help:"Headings should not be empty"},"empty-table-header":{description:"Ensures table headers have discernible text",help:"Table header text should not be empty"},"focus-order-semantics":{description:"Ensures elements in the focus order have a role appropriate for interactive content",help:"Elements in the focus order should have an appropriate role"},"form-field-multiple-labels":{description:"Ensures form field does not have multiple label elements",help:"Form field must not have multiple label elements"},"frame-focusable-content":{description:"Ensures <frame> and <iframe> elements with focusable content do not have tabindex=-1",help:"Frames with focusable content must not have tabindex=-1"},"frame-tested":{description:"Ensures <iframe> and <frame> elements contain the axe-core script",help:"Frames should be tested with axe-core"},"frame-title-unique":{description:"Ensures <iframe> and <frame> elements contain a unique title attribute",help:"Frames must have a unique title attribute"},"frame-title":{description:"Ensures <iframe> and <frame> elements have an accessible name",help:"Frames must have an accessible name"},"heading-order":{description:"Ensures the order of headings is semantically correct",help:"Heading levels should only increase by one"},"hidden-content":{description:"Informs users about hidden content.",help:"Hidden content on the page should be analyzed"},"html-has-lang":{description:"Ensures every HTML document has a lang attribute",help:"<html> element must have a lang attribute"},"html-lang-valid":{description:"Ensures the lang attribute of the <html> element has a valid value",help:"<html> element must have a valid value for the lang attribute"},"html-xml-lang-mismatch":{description:"Ensure that HTML elements with both valid lang and xml:lang attributes agree on the base language of the page",help:"HTML elements with lang and xml:lang must have the same base language"},"identical-links-same-purpose":{description:"Ensure that links with the same accessible name serve a similar purpose",help:"Links with the same name must have a similar purpose"},"image-alt":{description:"Ensures <img> elements have alternate text or a role of none or presentation",help:"Images must have alternate text"},"image-redundant-alt":{description:"Ensure image alternative is not repeated as text",help:"Alternative text of images should not be repeated as text"},"input-button-name":{description:"Ensures input buttons have discernible text",help:"Input buttons must have discernible text"},"input-image-alt":{description:'Ensures <input type="image"> elements have alternate text',help:"Image buttons must have alternate text"},"label-content-name-mismatch":{description:"Ensures that elements labelled through their content must have their visible text as part of their accessible name",help:"Elements must have their visible text as part of their accessible name"},"label-title-only":{description:"Ensures that every form element has a visible label and is not solely labeled using hidden labels, or the title or aria-describedby attributes",help:"Form elements should have a visible label"},label:{description:"Ensures every form element has a label",help:"Form elements must have labels"},"landmark-banner-is-top-level":{description:"Ensures the banner landmark is at top level",help:"Banner landmark should not be contained in another landmark"},"landmark-complementary-is-top-level":{description:"Ensures the complementary landmark or aside is at top level",help:"Aside should not be contained in another landmark"},"landmark-contentinfo-is-top-level":{description:"Ensures the contentinfo landmark is at top level",help:"Contentinfo landmark should not be contained in another landmark"},"landmark-main-is-top-level":{description:"Ensures the main landmark is at top level",help:"Main landmark should not be contained in another landmark"},"landmark-no-duplicate-banner":{description:"Ensures the document has at most one banner landmark",help:"Document should not have more than one banner landmark"},"landmark-no-duplicate-contentinfo":{description:"Ensures the document has at most one contentinfo landmark",help:"Document should not have more than one contentinfo landmark"},"landmark-no-duplicate-main":{description:"Ensures the document has at most one main landmark",help:"Document should not have more than one main landmark"},"landmark-one-main":{description:"Ensures the document has a main landmark",help:"Document should have one main landmark"},"landmark-unique":{help:"Ensures landmarks are unique",description:"Landmarks should have a unique role or role/label/title (i.e. accessible name) combination"},"link-in-text-block":{description:"Ensure links are distinguished from surrounding text in a way that does not rely on color",help:"Links must be distinguishable without relying on color"},"link-name":{description:"Ensures links have discernible text",help:"Links must have discernible text"},list:{description:"Ensures that lists are structured correctly",help:"<ul> and <ol> must only directly contain <li>, <script> or <template> elements"},listitem:{description:"Ensures <li> elements are used semantically",help:"<li> elements must be contained in a <ul> or <ol>"},marquee:{description:"Ensures <marquee> elements are not used",help:"<marquee> elements are deprecated and must not be used"},"meta-refresh-no-exceptions":{description:'Ensures <meta http-equiv="refresh"> is not used for delayed refresh',help:"Delayed refresh must not be used"},"meta-refresh":{description:'Ensures <meta http-equiv="refresh"> is not used for delayed refresh',help:"Delayed refresh under 20 hours must not be used"},"meta-viewport-large":{description:'Ensures <meta name="viewport"> can scale a significant amount',help:"Users should be able to zoom and scale the text up to 500%"},"meta-viewport":{description:'Ensures <meta name="viewport"> does not disable text scaling and zooming',help:"Zooming and scaling must not be disabled"},"nested-interactive":{description:"Ensures interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies",help:"Interactive controls must not be nested"},"no-autoplay-audio":{description:"Ensures <video> or <audio> elements do not autoplay audio for more than 3 seconds without a control mechanism to stop or mute the audio",help:"<video> or <audio> elements must not play automatically"},"object-alt":{description:"Ensures <object> elements have alternate text",help:"<object> elements must have alternate text"},"p-as-heading":{description:"Ensure bold, italic text and font-size is not used to style <p> elements as a heading",help:"Styled <p> elements must not be used as headings"},"page-has-heading-one":{description:"Ensure that the page, or at least one of its frames contains a level-one heading",help:"Page should contain a level-one heading"},"presentation-role-conflict":{description:"Elements marked as presentational should not have global ARIA or tabindex to ensure all screen readers ignore them",help:"Ensure elements marked as presentational are consistently ignored"},region:{description:"Ensures all page content is contained by landmarks",help:"All page content should be contained by landmarks"},"role-img-alt":{description:"Ensures [role='img'] elements have alternate text",help:"[role='img'] elements must have an alternative text"},"scope-attr-valid":{description:"Ensures the scope attribute is used correctly on tables",help:"scope attribute should be used correctly"},"scrollable-region-focusable":{description:"Ensure elements that have scrollable content are accessible by keyboard",help:"Scrollable region must have keyboard access"},"select-name":{description:"Ensures select element has an accessible name",help:"Select element must have an accessible name"},"server-side-image-map":{description:"Ensures that server-side image maps are not used",help:"Server-side image maps must not be used"},"skip-link":{description:"Ensure all skip links have a focusable target",help:"The skip-link target should exist and be focusable"},"svg-img-alt":{description:"Ensures <svg> elements with an img, graphics-document or graphics-symbol role have an accessible text",help:"<svg> elements with an img role must have an alternative text"},tabindex:{description:"Ensures tabindex attribute values are not greater than 0",help:"Elements should not have tabindex greater than zero"},"table-duplicate-name":{description:"Ensure the <caption> element does not contain the same text as the summary attribute",help:"tables should not have the same summary and caption"},"table-fake-caption":{description:"Ensure that tables with a caption use the <caption> element.",help:"Data or header cells must not be used to give caption to a data table."},"target-size":{description:"Ensure touch target have sufficient size and space",help:"All touch targets must be 24px large, or leave sufficient space"},"td-has-header":{description:"Ensure that each non-empty data cell in a <table> larger than 3 by 3  has one or more table headers",help:"Non-empty <td> elements in larger <table> must have an associated table header"},"td-headers-attr":{description:"Ensure that each cell in a table that uses the headers attribute refers only to other cells in that table",help:"Table cells that use the headers attribute must only refer to cells in the same table"},"th-has-data-cells":{description:"Ensure that <th> elements and elements with role=columnheader/rowheader have data cells they describe",help:"Table headers in a data table must refer to data cells"},"valid-lang":{description:"Ensures lang attributes have valid values",help:"lang attribute must have a valid value"},"video-caption":{description:"Ensures <video> elements have captions",help:"<video> elements must have captions"}},checks:{abstractrole:{impact:"serious",messages:{pass:"Abstract roles are not used",fail:{singular:"Abstract role cannot be directly used: ${data.values}",plural:"Abstract roles cannot be directly used: ${data.values}"}}},"aria-allowed-attr":{impact:"critical",messages:{pass:"ARIA attributes are used correctly for the defined role",fail:{singular:"ARIA attribute is not allowed: ${data.values}",plural:"ARIA attributes are not allowed: ${data.values}"},incomplete:"Check that there is no problem if the ARIA attribute is ignored on this element: ${data.values}"}},"aria-allowed-role":{impact:"minor",messages:{pass:"ARIA role is allowed for given element",fail:{singular:"ARIA role ${data.values} is not allowed for given element",plural:"ARIA roles ${data.values} are not allowed for given element"},incomplete:{singular:"ARIA role ${data.values} must be removed when the element is made visible, as it is not allowed for the element",plural:"ARIA roles ${data.values} must be removed when the element is made visible, as they are not allowed for the element"}}},"aria-busy":{impact:"serious",messages:{pass:"Element has an aria-busy attribute",fail:'Element has no aria-busy="true" attribute'}},"aria-errormessage":{impact:"critical",messages:{pass:"aria-errormessage exists and references elements visible to screen readers that use a supported aria-errormessage technique",fail:{singular:"aria-errormessage value `${data.values}` must use a technique to announce the message (e.g., aria-live, aria-describedby, role=alert, etc.)",plural:"aria-errormessage values `${data.values}` must use a technique to announce the message (e.g., aria-live, aria-describedby, role=alert, etc.)",hidden:"aria-errormessage value `${data.values}` cannot reference a hidden element"},incomplete:{singular:"ensure aria-errormessage value `${data.values}` references an existing element",plural:"ensure aria-errormessage values `${data.values}` reference existing elements",idrefs:"unable to determine if aria-errormessage element exists on the page: ${data.values}"}}},"aria-hidden-body":{impact:"critical",messages:{pass:"No aria-hidden attribute is present on document body",fail:"aria-hidden=true should not be present on the document body"}},"aria-level":{impact:"serious",messages:{pass:"aria-level values are valid",incomplete:"aria-level values greater than 6 are not supported in all screenreader and browser combinations"}},"aria-prohibited-attr":{impact:"serious",messages:{pass:"ARIA attribute is allowed",fail:{hasRolePlural:'${data.prohibited} attributes cannot be used with role "${data.role}".',hasRoleSingular:'${data.prohibited} attribute cannot be used with role "${data.role}".',noRolePlural:"${data.prohibited} attributes cannot be used on a ${data.nodeName} with no valid role attribute.",noRoleSingular:"${data.prohibited} attribute cannot be used on a ${data.nodeName} with no valid role attribute."},incomplete:{hasRoleSingular:'${data.prohibited} attribute is not well supported with role "${data.role}".',hasRolePlural:'${data.prohibited} attributes are not well supported with role "${data.role}".',noRoleSingular:"${data.prohibited} attribute is not well supported on a ${data.nodeName} with no valid role attribute.",noRolePlural:"${data.prohibited} attributes are not well supported on a ${data.nodeName} with no valid role attribute."}}},"aria-required-attr":{impact:"critical",messages:{pass:"All required ARIA attributes are present",fail:{singular:"Required ARIA attribute not present: ${data.values}",plural:"Required ARIA attributes not present: ${data.values}"}}},"aria-required-children":{impact:"critical",messages:{pass:"Required ARIA children are present",fail:{singular:"Required ARIA child role not present: ${data.values}",plural:"Required ARIA children role not present: ${data.values}",unallowed:"Element has children which are not allowed (see related nodes)"},incomplete:{singular:"Expecting ARIA child role to be added: ${data.values}",plural:"Expecting ARIA children role to be added: ${data.values}"}}},"aria-required-parent":{impact:"critical",messages:{pass:"Required ARIA parent role present",fail:{singular:"Required ARIA parent role not present: ${data.values}",plural:"Required ARIA parents role not present: ${data.values}"}}},"aria-roledescription":{impact:"serious",messages:{pass:"aria-roledescription used on a supported semantic role",incomplete:"Check that the aria-roledescription is announced by supported screen readers",fail:"Give the element a role that supports aria-roledescription"}},"aria-unsupported-attr":{impact:"critical",messages:{pass:"ARIA attribute is supported",fail:"ARIA attribute is not widely supported in screen readers and assistive technologies: ${data.values}"}},"aria-valid-attr-value":{impact:"critical",messages:{pass:"ARIA attribute values are valid",fail:{singular:"Invalid ARIA attribute value: ${data.values}",plural:"Invalid ARIA attribute values: ${data.values}"},incomplete:{noId:"ARIA attribute element ID does not exist on the page: ${data.needsReview}",noIdShadow:"ARIA attribute element ID does not exist on the page or is a descendant of a different shadow DOM tree: ${data.needsReview}",ariaCurrent:'ARIA attribute value is invalid and will be treated as "aria-current=true": ${data.needsReview}',idrefs:"Unable to determine if ARIA attribute element ID exists on the page: ${data.needsReview}",empty:"ARIA attribute value is ignored while empty: ${data.needsReview}"}}},"aria-valid-attr":{impact:"critical",messages:{pass:"ARIA attribute name is valid",fail:{singular:"Invalid ARIA attribute name: ${data.values}",plural:"Invalid ARIA attribute names: ${data.values}"}}},deprecatedrole:{impact:"minor",messages:{pass:"ARIA role is not deprecated",fail:"The role used is deprecated: ${data}"}},fallbackrole:{impact:"serious",messages:{pass:"Only one role value used",fail:"Use only one role value, since fallback roles are not supported in older browsers",incomplete:"Use only role 'presentation' or 'none' since they are synonymous."}},"has-global-aria-attribute":{impact:"minor",messages:{pass:{singular:"Element has global ARIA attribute: ${data.values}",plural:"Element has global ARIA attributes: ${data.values}"},fail:"Element does not have global ARIA attribute"}},"has-widget-role":{impact:"minor",messages:{pass:"Element has a widget role.",fail:"Element does not have a widget role."}},invalidrole:{impact:"critical",messages:{pass:"ARIA role is valid",fail:{singular:"Role must be one of the valid ARIA roles: ${data.values}",plural:"Roles must be one of the valid ARIA roles: ${data.values}"}}},"is-element-focusable":{impact:"minor",messages:{pass:"Element is focusable.",fail:"Element is not focusable."}},"no-implicit-explicit-label":{impact:"moderate",messages:{pass:"There is no mismatch between a <label> and accessible name",incomplete:"Check that the <label> does not need be part of the ARIA ${data} field's name"}},unsupportedrole:{impact:"critical",messages:{pass:"ARIA role is supported",fail:"The role used is not widely supported in screen readers and assistive technologies: ${data}"}},"valid-scrollable-semantics":{impact:"minor",messages:{pass:"Element has valid semantics for an element in the focus order.",fail:"Element has invalid semantics for an element in the focus order."}},"color-contrast-enhanced":{impact:"serious",messages:{pass:"Element has sufficient color contrast of ${data.contrastRatio}",fail:{default:"Element has insufficient color contrast of ${data.contrastRatio} (foreground color: ${data.fgColor}, background color: ${data.bgColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}",fgOnShadowColor:"Element has insufficient color contrast of ${data.contrastRatio} between the foreground and shadow color (foreground color: ${data.fgColor}, text-shadow color: ${data.shadowColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}",shadowOnBgColor:"Element has insufficient color contrast of ${data.contrastRatio} between the shadow color and background color (text-shadow color: ${data.shadowColor}, background color: ${data.bgColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}"},incomplete:{default:"Unable to determine contrast ratio",bgImage:"Element's background color could not be determined due to a background image",bgGradient:"Element's background color could not be determined due to a background gradient",imgNode:"Element's background color could not be determined because element contains an image node",bgOverlap:"Element's background color could not be determined because it is overlapped by another element",fgAlpha:"Element's foreground color could not be determined because of alpha transparency",elmPartiallyObscured:"Element's background color could not be determined because it's partially obscured by another element",elmPartiallyObscuring:"Element's background color could not be determined because it partially overlaps other elements",outsideViewport:"Element's background color could not be determined because it's outside the viewport",equalRatio:"Element has a 1:1 contrast ratio with the background",shortTextContent:"Element content is too short to determine if it is actual text content",nonBmp:"Element content contains only non-text characters",pseudoContent:"Element's background color could not be determined due to a pseudo element"}}},"color-contrast":{impact:"serious",messages:{pass:{default:"Element has sufficient color contrast of ${data.contrastRatio}",hidden:"Element is hidden"},fail:{default:"Element has insufficient color contrast of ${data.contrastRatio} (foreground color: ${data.fgColor}, background color: ${data.bgColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}",fgOnShadowColor:"Element has insufficient color contrast of ${data.contrastRatio} between the foreground and shadow color (foreground color: ${data.fgColor}, text-shadow color: ${data.shadowColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}",shadowOnBgColor:"Element has insufficient color contrast of ${data.contrastRatio} between the shadow color and background color (text-shadow color: ${data.shadowColor}, background color: ${data.bgColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}"},incomplete:{default:"Unable to determine contrast ratio",bgImage:"Element's background color could not be determined due to a background image",bgGradient:"Element's background color could not be determined due to a background gradient",imgNode:"Element's background color could not be determined because element contains an image node",bgOverlap:"Element's background color could not be determined because it is overlapped by another element",fgAlpha:"Element's foreground color could not be determined because of alpha transparency",elmPartiallyObscured:"Element's background color could not be determined because it's partially obscured by another element",elmPartiallyObscuring:"Element's background color could not be determined because it partially overlaps other elements",outsideViewport:"Element's background color could not be determined because it's outside the viewport",equalRatio:"Element has a 1:1 contrast ratio with the background",shortTextContent:"Element content is too short to determine if it is actual text content",nonBmp:"Element content contains only non-text characters",pseudoContent:"Element's background color could not be determined due to a pseudo element"}}},"link-in-text-block-style":{impact:"serious",messages:{pass:"Links can be distinguished from surrounding text by visual styling",fail:"The link has no styling (such as underline) to distinguish it from the surrounding text"}},"link-in-text-block":{impact:"serious",messages:{pass:"Links can be distinguished from surrounding text in some way other than by color",fail:{fgContrast:"The link has insufficient color contrast of ${data.contrastRatio}:1 with the surrounding text. (Minimum contrast is ${data.requiredContrastRatio}:1, link text: ${data.nodeColor}, surrounding text: ${data.parentColor})",bgContrast:"The link background has insufficient color contrast of ${data.contrastRatio} (Minimum contrast is ${data.requiredContrastRatio}:1, link background color: ${data.nodeBackgroundColor}, surrounding background color: ${data.parentBackgroundColor})"},incomplete:{default:"Element's foreground contrast ratio could not be determined",bgContrast:"Element's background contrast ratio could not be determined",bgImage:"Element's contrast ratio could not be determined due to a background image",bgGradient:"Element's contrast ratio could not be determined due to a background gradient",imgNode:"Element's contrast ratio could not be determined because element contains an image node",bgOverlap:"Element's contrast ratio could not be determined because of element overlap"}}},"autocomplete-appropriate":{impact:"serious",messages:{pass:"the autocomplete value is on an appropriate element",fail:"the autocomplete value is inappropriate for this type of input"}},"autocomplete-valid":{impact:"serious",messages:{pass:"the autocomplete attribute is correctly formatted",fail:"the autocomplete attribute is incorrectly formatted"}},accesskeys:{impact:"serious",messages:{pass:"Accesskey attribute value is unique",fail:"Document has multiple elements with the same accesskey"}},"focusable-content":{impact:"moderate",messages:{pass:"Element contains focusable elements",fail:"Element should have focusable content"}},"focusable-disabled":{impact:"serious",messages:{pass:"No focusable elements contained within element",incomplete:"Check if the focusable elements immediately move the focus indicator",fail:"Focusable content should be disabled or be removed from the DOM"}},"focusable-element":{impact:"moderate",messages:{pass:"Element is focusable",fail:"Element should be focusable"}},"focusable-modal-open":{impact:"serious",messages:{pass:"No focusable elements while a modal is open",incomplete:"Check that focusable elements are not tabbable in the current state"}},"focusable-no-name":{impact:"serious",messages:{pass:"Element is not in tab order or has accessible text",fail:"Element is in tab order and does not have accessible text",incomplete:"Unable to determine if element has an accessible name"}},"focusable-not-tabbable":{impact:"serious",messages:{pass:"No focusable elements contained within element",incomplete:"Check if the focusable elements immediately move the focus indicator",fail:"Focusable content should have tabindex='-1' or be removed from the DOM"}},"frame-focusable-content":{impact:"serious",messages:{pass:"Element does not have focusable descendants",fail:"Element has focusable descendants",incomplete:"Could not determine if element has descendants"}},"landmark-is-top-level":{impact:"moderate",messages:{pass:"The ${data.role} landmark is at the top level.",fail:"The ${data.role} landmark is contained in another landmark."}},"no-focusable-content":{impact:"serious",messages:{pass:"Element does not have focusable descendants",fail:{default:"Element has focusable descendants",notHidden:"Using a negative tabindex on an element inside an interactive control does not prevent assistive technologies from focusing the element (even with 'aria-hidden=true')"},incomplete:"Could not determine if element has descendants"}},"page-has-heading-one":{impact:"moderate",messages:{pass:"Page has at least one level-one heading",fail:"Page must have a level-one heading"}},"page-has-main":{impact:"moderate",messages:{pass:"Document has at least one main landmark",fail:"Document does not have a main landmark"}},"page-no-duplicate-banner":{impact:"moderate",messages:{pass:"Document does not have more than one banner landmark",fail:"Document has more than one banner landmark"}},"page-no-duplicate-contentinfo":{impact:"moderate",messages:{pass:"Document does not have more than one contentinfo landmark",fail:"Document has more than one contentinfo landmark"}},"page-no-duplicate-main":{impact:"moderate",messages:{pass:"Document does not have more than one main landmark",fail:"Document has more than one main landmark"}},tabindex:{impact:"serious",messages:{pass:"Element does not have a tabindex greater than 0",fail:"Element has a tabindex greater than 0"}},"alt-space-value":{impact:"critical",messages:{pass:"Element has a valid alt attribute value",fail:"Element has an alt attribute containing only a space character, which is not ignored by all screen readers"}},"duplicate-img-label":{impact:"minor",messages:{pass:"Element does not duplicate existing text in <img> alt text",fail:"Element contains <img> element with alt text that duplicates existing text"}},"explicit-label":{impact:"critical",messages:{pass:"Form element has an explicit <label>",fail:"Form element does not have an explicit <label>",incomplete:"Unable to determine if form element has an explicit <label>"}},"help-same-as-label":{impact:"minor",messages:{pass:"Help text (title or aria-describedby) does not duplicate label text",fail:"Help text (title or aria-describedby) text is the same as the label text"}},"hidden-explicit-label":{impact:"critical",messages:{pass:"Form element has a visible explicit <label>",fail:"Form element has explicit <label> that is hidden",incomplete:"Unable to determine if form element has explicit <label> that is hidden"}},"implicit-label":{impact:"critical",messages:{pass:"Form element has an implicit (wrapped) <label>",fail:"Form element does not have an implicit (wrapped) <label>",incomplete:"Unable to determine if form element has an implicit (wrapped} <label>"}},"label-content-name-mismatch":{impact:"serious",messages:{pass:"Element contains visible text as part of it's accessible name",fail:"Text inside the element is not included in the accessible name"}},"multiple-label":{impact:"moderate",messages:{pass:"Form field does not have multiple label elements",incomplete:"Multiple label elements is not widely supported in assistive technologies. Ensure the first label contains all necessary information."}},"title-only":{impact:"serious",messages:{pass:"Form element does not solely use title attribute for its label",fail:"Only title used to generate label for form element"}},"landmark-is-unique":{impact:"moderate",messages:{pass:"Landmarks must have a unique role or role/label/title (i.e. accessible name) combination",fail:"The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable"}},"has-lang":{impact:"serious",messages:{pass:"The <html> element has a lang attribute",fail:{noXHTML:"The xml:lang attribute is not valid on HTML pages, use the lang attribute.",noLang:"The <html> element does not have a lang attribute"}}},"valid-lang":{impact:"serious",messages:{pass:"Value of lang attribute is included in the list of valid languages",fail:"Value of lang attribute not included in the list of valid languages"}},"xml-lang-mismatch":{impact:"moderate",messages:{pass:"Lang and xml:lang attributes have the same base language",fail:"Lang and xml:lang attributes do not have the same base language"}},dlitem:{impact:"serious",messages:{pass:"Description list item has a <dl> parent element",fail:"Description list item does not have a <dl> parent element"}},listitem:{impact:"serious",messages:{pass:'List item has a <ul>, <ol> or role="list" parent element',fail:{default:"List item does not have a <ul>, <ol> parent element",roleNotValid:'List item does not have a <ul>, <ol> parent element without a role, or a role="list"'}}},"only-dlitems":{impact:"serious",messages:{pass:"dl element only has direct children that are allowed inside; <dt>, <dd>, or <div> elements",fail:"dl element has direct children that are not allowed: ${data.values}"}},"only-listitems":{impact:"serious",messages:{pass:"List element only has direct children that are allowed inside <li> elements",fail:"List element has direct children that are not allowed: ${data.values}"}},"structured-dlitems":{impact:"serious",messages:{pass:"When not empty, element has both <dt> and <dd> elements",fail:"When not empty, element does not have at least one <dt> element followed by at least one <dd> element"}},caption:{impact:"critical",messages:{pass:"The multimedia element has a captions track",incomplete:"Check that captions is available for the element"}},"frame-tested":{impact:"critical",messages:{pass:"The iframe was tested with axe-core",fail:"The iframe could not be tested with axe-core",incomplete:"The iframe still has to be tested with axe-core"}},"no-autoplay-audio":{impact:"moderate",messages:{pass:"<video> or <audio> does not output audio for more than allowed duration or has controls mechanism",fail:"<video> or <audio> outputs audio for more than allowed duration and does not have a controls mechanism",incomplete:"Check that the <video> or <audio> does not output audio for more than allowed duration or provides a controls mechanism"}},"css-orientation-lock":{impact:"serious",messages:{pass:"Display is operable, and orientation lock does not exist",fail:"CSS Orientation lock is applied, and makes display inoperable",incomplete:"CSS Orientation lock cannot be determined"}},"meta-viewport-large":{impact:"minor",messages:{pass:"<meta> tag does not prevent significant zooming on mobile devices",fail:"<meta> tag limits zooming on mobile devices"}},"meta-viewport":{impact:"critical",messages:{pass:"<meta> tag does not disable zooming on mobile devices",fail:"${data} on <meta> tag disables zooming on mobile devices"}},"target-offset":{impact:"serious",messages:{pass:"Target has sufficient offset from its closest neighbor (${data.closestOffset}px should be at least ${data.minOffset}px)",fail:"Target has insufficient offset from its closest neighbor (${data.closestOffset}px should be at least ${data.minOffset}px)",incomplete:{default:"Element with negative tabindex has insufficient offset from its closest neighbor (${data.closestOffset}px should be at least ${data.minOffset}px). Is this a target?",nonTabbableNeighbor:"Target has insufficient offset from a neighbor with negative tabindex (${data.closestOffset}px should be at least ${data.minOffset}px). Is the neighbor a target?"}}},"target-size":{impact:"serious",messages:{pass:{default:"Control has sufficient size (${data.width}px by ${data.height}px, should be at least ${data.minSize}px by ${data.minSize}px)",obscured:"Control is ignored because it is fully obscured and thus not clickable"},fail:{default:"Target has insufficient size (${data.width}px by ${data.height}px, should be at least ${data.minSize}px by ${data.minSize}px)",partiallyObscured:"Target has insufficient size because it is partially obscured (smallest space is ${data.width}px by ${data.height}px, should be at least ${data.minSize}px by ${data.minSize}px)"},incomplete:{default:"Element with negative tabindex has insufficient size (${data.width}px by ${data.height}px, should be at least ${data.minSize}px by ${data.minSize}px). Is this a target?",contentOverflow:"Element size could not be accurately determined due to overflow content",partiallyObscured:"Element with negative tabindex has insufficient size because it is partially obscured (smallest space is ${data.width}px by ${data.height}px, should be at least ${data.minSize}px by ${data.minSize}px). Is this a target?",partiallyObscuredNonTabbable:"Target has insufficient size because it is partially obscured by a neighbor with negative tabindex (smallest space is ${data.width}px by ${data.height}px, should be at least ${data.minSize}px by ${data.minSize}px). Is the neighbor a target?"}}},"header-present":{impact:"serious",messages:{pass:"Page has a heading",fail:"Page does not have a heading"}},"heading-order":{impact:"moderate",messages:{pass:"Heading order valid",fail:"Heading order invalid",incomplete:"Unable to determine previous heading"}},"identical-links-same-purpose":{impact:"minor",messages:{pass:"There are no other links with the same name, that go to a different URL",incomplete:"Check that links have the same purpose, or are intentionally ambiguous."}},"internal-link-present":{impact:"serious",messages:{pass:"Valid skip link found",fail:"No valid skip link found"}},landmark:{impact:"serious",messages:{pass:"Page has a landmark region",fail:"Page does not have a landmark region"}},"meta-refresh-no-exceptions":{impact:"minor",messages:{pass:"<meta> tag does not immediately refresh the page",fail:"<meta> tag forces timed refresh of page"}},"meta-refresh":{impact:"critical",messages:{pass:"<meta> tag does not immediately refresh the page",fail:"<meta> tag forces timed refresh of page (less than 20 hours)"}},"p-as-heading":{impact:"serious",messages:{pass:"<p> elements are not styled as headings",fail:"Heading elements should be used instead of styled <p> elements",incomplete:"Unable to determine if <p> elements are styled as headings"}},region:{impact:"moderate",messages:{pass:"All page content is contained by landmarks",fail:"Some page content is not contained by landmarks"}},"skip-link":{impact:"moderate",messages:{pass:"Skip link target exists",incomplete:"Skip link target should become visible on activation",fail:"No skip link target"}},"unique-frame-title":{impact:"serious",messages:{pass:"Element's title attribute is unique",fail:"Element's title attribute is not unique"}},"duplicate-id-active":{impact:"serious",messages:{pass:"Document has no active elements that share the same id attribute",fail:"Document has active elements with the same id attribute: ${data}"}},"duplicate-id-aria":{impact:"critical",messages:{pass:"Document has no elements referenced with ARIA or labels that share the same id attribute",fail:"Document has multiple elements referenced with ARIA with the same id attribute: ${data}"}},"duplicate-id":{impact:"minor",messages:{pass:"Document has no static elements that share the same id attribute",fail:"Document has multiple static elements with the same id attribute: ${data}"}},"aria-label":{impact:"serious",messages:{pass:"aria-label attribute exists and is not empty",fail:"aria-label attribute does not exist or is empty"}},"aria-labelledby":{impact:"serious",messages:{pass:"aria-labelledby attribute exists and references elements that are visible to screen readers",fail:"aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty",incomplete:"ensure aria-labelledby references an existing element"}},"avoid-inline-spacing":{impact:"serious",messages:{pass:"No inline styles with '!important' that affect text spacing has been specified",fail:{singular:"Remove '!important' from inline style ${data.values}, as overriding this is not supported by most browsers",plural:"Remove '!important' from inline styles ${data.values}, as overriding this is not supported by most browsers"}}},"button-has-visible-text":{impact:"critical",messages:{pass:"Element has inner text that is visible to screen readers",fail:"Element does not have inner text that is visible to screen readers",incomplete:"Unable to determine if element has children"}},"doc-has-title":{impact:"serious",messages:{pass:"Document has a non-empty <title> element",fail:"Document does not have a non-empty <title> element"}},exists:{impact:"minor",messages:{pass:"Element does not exist",incomplete:"Element exists"}},"has-alt":{impact:"critical",messages:{pass:"Element has an alt attribute",fail:"Element does not have an alt attribute"}},"has-visible-text":{impact:"minor",messages:{pass:"Element has text that is visible to screen readers",fail:"Element does not have text that is visible to screen readers",incomplete:"Unable to determine if element has children"}},"important-letter-spacing":{impact:"serious",messages:{pass:"Letter-spacing in the style attribute is not set to !important, or meets the minimum",fail:"letter-spacing in the style attribute must not use !important, or be at ${data.minValue}em (current ${data.value}em)"}},"important-line-height":{impact:"serious",messages:{pass:"line-height in the style attribute is not set to !important, or meets the minimum",fail:"line-height in the style attribute must not use !important, or be at ${data.minValue}em (current ${data.value}em)"}},"important-word-spacing":{impact:"serious",messages:{pass:"word-spacing in the style attribute is not set to !important, or meets the minimum",fail:"word-spacing in the style attribute must not use !important, or be at ${data.minValue}em (current ${data.value}em)"}},"is-on-screen":{impact:"serious",messages:{pass:"Element is not visible",fail:"Element is visible"}},"non-empty-alt":{impact:"critical",messages:{pass:"Element has a non-empty alt attribute",fail:{noAttr:"Element has no alt attribute",emptyAttr:"Element has an empty alt attribute"}}},"non-empty-if-present":{impact:"critical",messages:{pass:{default:"Element does not have a value attribute","has-label":"Element has a non-empty value attribute"},fail:"Element has a value attribute and the value attribute is empty"}},"non-empty-placeholder":{impact:"serious",messages:{pass:"Element has a placeholder attribute",fail:{noAttr:"Element has no placeholder attribute",emptyAttr:"Element has an empty placeholder attribute"}}},"non-empty-title":{impact:"serious",messages:{pass:"Element has a title attribute",fail:{noAttr:"Element has no title attribute",emptyAttr:"Element has an empty title attribute"}}},"non-empty-value":{impact:"critical",messages:{pass:"Element has a non-empty value attribute",fail:{noAttr:"Element has no value attribute",emptyAttr:"Element has an empty value attribute"}}},"presentational-role":{impact:"minor",messages:{pass:'Element\'s default semantics were overriden with role="${data.role}"',fail:{default:'Element\'s default semantics were not overridden with role="none" or role="presentation"',globalAria:"Element's role is not presentational because it has a global ARIA attribute",focusable:"Element's role is not presentational because it is focusable",both:"Element's role is not presentational because it has a global ARIA attribute and is focusable",iframe:'Using the "title" attribute on an ${data.nodeName} element with a presentational role behaves inconsistently between screen readers'}}},"role-none":{impact:"minor",messages:{pass:'Element\'s default semantics were overriden with role="none"',fail:'Element\'s default semantics were not overridden with role="none"'}},"role-presentation":{impact:"minor",messages:{pass:'Element\'s default semantics were overriden with role="presentation"',fail:'Element\'s default semantics were not overridden with role="presentation"'}},"svg-non-empty-title":{impact:"serious",messages:{pass:"Element has a child that is a title",fail:{noTitle:"Element has no child that is a title",emptyTitle:"Element child title is empty"},incomplete:"Unable to determine element has a child that is a title"}},"caption-faked":{impact:"serious",messages:{pass:"The first row of a table is not used as a caption",fail:"The first child of the table should be a caption instead of a table cell"}},"html5-scope":{impact:"moderate",messages:{pass:"Scope attribute is only used on table header elements (<th>)",fail:"In HTML 5, scope attributes may only be used on table header elements (<th>)"}},"same-caption-summary":{impact:"minor",messages:{pass:"Content of summary attribute and <caption> are not duplicated",fail:"Content of summary attribute and <caption> element are identical",incomplete:"Unable to determine if <table> element has a caption"}},"scope-value":{impact:"critical",messages:{pass:"Scope attribute is used correctly",fail:"The value of the scope attribute may only be 'row' or 'col'"}},"td-has-header":{impact:"critical",messages:{pass:"All non-empty data cells have table headers",fail:"Some non-empty data cells do not have table headers"}},"td-headers-attr":{impact:"serious",messages:{pass:"The headers attribute is exclusively used to refer to other cells in the table",incomplete:"The headers attribute is empty",fail:"The headers attribute is not exclusively used to refer to other cells in the table"}},"th-has-data-cells":{impact:"serious",messages:{pass:"All table header cells refer to data cells",fail:"Not all table header cells refer to data cells",incomplete:"Table data cells are missing or empty"}},"hidden-content":{impact:"minor",messages:{pass:"All content on the page has been analyzed.",fail:"There were problems analyzing the content on this page.",incomplete:"There is hidden content on the page that was not analyzed. You will need to trigger the display of this content in order to analyze it."}}},failureSummaries:{any:{failureMessage:function(e){var t="Fix any of the following:",n=e
if(n)for(var r=-1,a=n.length-1;r<a;)t+="\n  "+n[r+=1].split("\n").join("\n  ")
return t}},none:{failureMessage:function(e){var t="Fix all of the following:",n=e
if(n)for(var r=-1,a=n.length-1;r<a;)t+="\n  "+n[r+=1].split("\n").join("\n  ")
return t}}},incompleteFallbackMessage:"axe couldn't tell the reason. Time to break out the element inspector!"},rules:[{id:"accesskeys",selector:"[accesskey]",excludeHidden:!1,tags:["cat.keyboard","best-practice"],all:[],any:[],none:["accesskeys"]},{id:"area-alt",selector:"map area[href]",excludeHidden:!1,tags:["cat.text-alternatives","wcag2a","wcag244","wcag412","section508","section508.22.a","ACT"],actIds:["c487ae"],all:[],any:[{options:{attribute:"alt"},id:"non-empty-alt"},"aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"aria-allowed-attr",matches:"aria-allowed-attr-matches",tags:["cat.aria","wcag2a","wcag412"],actIds:["5c01ea"],all:[],any:[{options:{validTreeRowAttrs:["aria-posinset","aria-setsize","aria-expanded","aria-level"]},id:"aria-allowed-attr"}],none:["aria-unsupported-attr",{options:{elementsAllowedAriaLabel:["applet","input"]},id:"aria-prohibited-attr"}]},{id:"aria-allowed-role",excludeHidden:!1,selector:"[role]",matches:"aria-allowed-role-matches",tags:["cat.aria","best-practice"],all:[],any:[{options:{allowImplicit:!0,ignoredTags:[]},id:"aria-allowed-role"}],none:[]},{id:"aria-command-name",selector:'[role="link"], [role="button"], [role="menuitem"]',matches:"no-naming-method-matches",tags:["cat.aria","wcag2a","wcag412","ACT"],actIds:["97a4e1"],all:[],any:["has-visible-text","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"aria-dialog-name",selector:'[role="dialog"], [role="alertdialog"]',matches:"no-naming-method-matches",tags:["cat.aria","best-practice"],all:[],any:["aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"aria-hidden-body",selector:"body",excludeHidden:!1,matches:"is-initiator-matches",tags:["cat.aria","wcag2a","wcag412"],all:[],any:["aria-hidden-body"],none:[]},{id:"aria-hidden-focus",selector:'[aria-hidden="true"]',matches:"aria-hidden-focus-matches",excludeHidden:!1,tags:["cat.name-role-value","wcag2a","wcag412"],actIds:["6cfa84"],all:["focusable-modal-open","focusable-disabled","focusable-not-tabbable"],any:[],none:[]},{id:"aria-input-field-name",selector:'[role="combobox"], [role="listbox"], [role="searchbox"], [role="slider"], [role="spinbutton"], [role="textbox"]',matches:"no-naming-method-matches",tags:["cat.aria","wcag2a","wcag412","ACT"],actIds:["e086e5"],all:[],any:["aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:["no-implicit-explicit-label"]},{id:"aria-meter-name",selector:'[role="meter"]',matches:"no-naming-method-matches",tags:["cat.aria","wcag2a","wcag111"],all:[],any:["aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"aria-progressbar-name",selector:'[role="progressbar"]',matches:"no-naming-method-matches",tags:["cat.aria","wcag2a","wcag111"],all:[],any:["aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"aria-required-attr",selector:"[role]",tags:["cat.aria","wcag2a","wcag412"],actIds:["4e8ab6"],all:[],any:["aria-required-attr"],none:[]},{id:"aria-required-children",selector:"[role]",matches:"aria-required-children-matches",tags:["cat.aria","wcag2a","wcag131"],actIds:["bc4a75","ff89c9"],all:[],any:[{options:{reviewEmpty:["doc-bibliography","doc-endnotes","grid","list","listbox","menu","menubar","table","tablist","tree","treegrid","rowgroup"]},id:"aria-required-children"},"aria-busy"],none:[]},{id:"aria-required-parent",selector:"[role]",matches:"aria-required-parent-matches",tags:["cat.aria","wcag2a","wcag131"],actIds:["ff89c9"],all:[],any:[{options:{ownGroupRoles:["listitem","treeitem"]},id:"aria-required-parent"}],none:[]},{id:"aria-roledescription",selector:"[aria-roledescription]",tags:["cat.aria","wcag2a","wcag412"],all:[],any:[{options:{supportedRoles:["button","img","checkbox","radio","combobox","menuitemcheckbox","menuitemradio"]},id:"aria-roledescription"}],none:[]},{id:"aria-roles",selector:"[role]",matches:"no-empty-role-matches",tags:["cat.aria","wcag2a","wcag412"],actIds:["674b10"],all:[],any:[],none:["invalidrole","abstractrole","unsupportedrole","deprecatedrole"]},{id:"aria-text",selector:"[role=text]",tags:["cat.aria","best-practice"],all:[],any:["no-focusable-content"],none:[]},{id:"aria-toggle-field-name",selector:'[role="checkbox"], [role="menuitemcheckbox"], [role="menuitemradio"], [role="radio"], [role="switch"], [role="option"]',matches:"no-naming-method-matches",tags:["cat.aria","wcag2a","wcag412","ACT"],actIds:["e086e5"],all:[],any:["has-visible-text","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:["no-implicit-explicit-label"]},{id:"aria-tooltip-name",selector:'[role="tooltip"]',matches:"no-naming-method-matches",tags:["cat.aria","wcag2a","wcag412"],all:[],any:["has-visible-text","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"aria-treeitem-name",selector:'[role="treeitem"]',matches:"no-naming-method-matches",tags:["cat.aria","best-practice"],all:[],any:["has-visible-text","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"aria-valid-attr-value",matches:"aria-has-attr-matches",tags:["cat.aria","wcag2a","wcag412"],actIds:["6a7281"],all:[{options:[],id:"aria-valid-attr-value"},"aria-errormessage","aria-level"],any:[],none:[]},{id:"aria-valid-attr",matches:"aria-has-attr-matches",tags:["cat.aria","wcag2a","wcag412"],actIds:["5f99a7"],all:[],any:[{options:[],id:"aria-valid-attr"}],none:[]},{id:"audio-caption",selector:"audio",enabled:!1,excludeHidden:!1,tags:["cat.time-and-media","wcag2a","wcag121","section508","section508.22.a"],actIds:["2eb176","afb423"],all:[],any:[],none:["caption"]},{id:"autocomplete-valid",matches:"autocomplete-matches",tags:["cat.forms","wcag21aa","wcag135","ACT"],actIds:["73f2c2"],all:[{options:{stateTerms:["none","false","true","disabled","enabled","undefined","null"]},id:"autocomplete-valid"}],any:[],none:[]},{id:"avoid-inline-spacing",selector:"[style]",matches:"is-visible-on-screen-matches",tags:["cat.structure","wcag21aa","wcag1412","ACT"],actIds:["24afc2","9e45ec","78fd32"],all:[{options:{cssProperty:"letter-spacing",minValue:.12},id:"important-letter-spacing"},{options:{cssProperty:"word-spacing",minValue:.16},id:"important-word-spacing"},{options:{multiLineOnly:!0,cssProperty:"line-height",minValue:1.5,normalValue:1},id:"important-line-height"}],any:[],none:[]},{id:"blink",selector:"blink",excludeHidden:!1,tags:["cat.time-and-media","wcag2a","wcag222","section508","section508.22.j"],all:[],any:[],none:["is-on-screen"]},{id:"button-name",selector:"button",matches:"no-explicit-name-required-matches",tags:["cat.name-role-value","wcag2a","wcag412","section508","section508.22.a","ACT"],actIds:["97a4e1","m6b1q3"],all:[],any:["button-has-visible-text","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"},"presentational-role"],none:[]},{id:"bypass",selector:"html",pageLevel:!0,matches:"bypass-matches",reviewOnFail:!0,tags:["cat.keyboard","wcag2a","wcag241","section508","section508.22.o"],actIds:["cf77f2","047fe0","b40fd1","3e12e1","ye5d6e"],all:[],any:["internal-link-present",{options:{selector:":is(h1, h2, h3, h4, h5, h6):not([role]), [role=heading]"},id:"header-present"},{options:{selector:"main, [role=main]"},id:"landmark"}],none:[]},{id:"color-contrast-enhanced",matches:"color-contrast-matches",excludeHidden:!1,enabled:!1,tags:["cat.color","wcag2aaa","wcag146","ACT"],actIds:["09o5cg"],all:[],any:[{options:{ignoreUnicode:!0,ignoreLength:!1,ignorePseudo:!1,boldValue:700,boldTextPt:14,largeTextPt:18,contrastRatio:{normal:{expected:7,minThreshold:4.5},large:{expected:4.5,minThreshold:3}},pseudoSizeThreshold:.25,shadowOutlineEmMax:.1,textStrokeEmMin:.03},id:"color-contrast-enhanced"}],none:[]},{id:"color-contrast",matches:"color-contrast-matches",excludeHidden:!1,tags:["cat.color","wcag2aa","wcag143","ACT"],actIds:["afw4f7","09o5cg"],all:[],any:[{options:{ignoreUnicode:!0,ignoreLength:!1,ignorePseudo:!1,boldValue:700,boldTextPt:14,largeTextPt:18,contrastRatio:{normal:{expected:4.5},large:{expected:3}},pseudoSizeThreshold:.25,shadowOutlineEmMax:.2,textStrokeEmMin:.03},id:"color-contrast"}],none:[]},{id:"css-orientation-lock",selector:"html",tags:["cat.structure","wcag134","wcag21aa","experimental"],actIds:["b33eff"],all:[{options:{degreeThreshold:2},id:"css-orientation-lock"}],any:[],none:[],preload:!0},{id:"definition-list",selector:"dl",matches:"no-role-matches",tags:["cat.structure","wcag2a","wcag131"],all:[],any:[],none:["structured-dlitems",{options:{validRoles:["definition","term","listitem"],validNodeNames:["dt","dd"],divGroups:!0},id:"only-dlitems"}]},{id:"dlitem",selector:"dd, dt",matches:"no-role-matches",tags:["cat.structure","wcag2a","wcag131"],all:[],any:["dlitem"],none:[]},{id:"document-title",selector:"html",matches:"is-initiator-matches",tags:["cat.text-alternatives","wcag2a","wcag242","ACT"],actIds:["2779a5"],all:[],any:["doc-has-title"],none:[]},{id:"duplicate-id-active",selector:"[id]",matches:"duplicate-id-active-matches",excludeHidden:!1,tags:["cat.parsing","wcag2a","wcag411"],actIds:["3ea0c8"],all:[],any:["duplicate-id-active"],none:[]},{id:"duplicate-id-aria",selector:"[id]",matches:"duplicate-id-aria-matches",excludeHidden:!1,tags:["cat.parsing","wcag2a","wcag411"],actIds:["3ea0c8"],all:[],any:["duplicate-id-aria"],none:[]},{id:"duplicate-id",selector:"[id]",matches:"duplicate-id-misc-matches",excludeHidden:!1,tags:["cat.parsing","wcag2a","wcag411"],actIds:["3ea0c8"],all:[],any:["duplicate-id"],none:[]},{id:"empty-heading",selector:'h1, h2, h3, h4, h5, h6, [role="heading"]',matches:"heading-matches",tags:["cat.name-role-value","best-practice"],actIds:["ffd0e9"],impact:"minor",all:[],any:["has-visible-text","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"empty-table-header",selector:'th:not([role]), [role="rowheader"], [role="columnheader"]',tags:["cat.name-role-value","best-practice"],all:[],any:["has-visible-text"],none:[]},{id:"focus-order-semantics",selector:"div, h1, h2, h3, h4, h5, h6, [role=heading], p, span",matches:"inserted-into-focus-order-matches",tags:["cat.keyboard","best-practice","experimental"],all:[],any:[{options:[],id:"has-widget-role"},{options:{roles:["tooltip"]},id:"valid-scrollable-semantics"}],none:[]},{id:"form-field-multiple-labels",selector:"input, select, textarea",matches:"label-matches",tags:["cat.forms","wcag2a","wcag332"],all:[],any:[],none:["multiple-label"]},{id:"frame-focusable-content",selector:"html",matches:"frame-focusable-content-matches",tags:["cat.keyboard","wcag2a","wcag211"],actIds:["akn7bn"],all:[],any:["frame-focusable-content"],none:[]},{id:"frame-tested",selector:"html, frame, iframe",tags:["cat.structure","review-item","best-practice"],all:[{options:{isViolation:!1},id:"frame-tested"}],any:[],none:[]},{id:"frame-title-unique",selector:"frame[title], iframe[title]",matches:"frame-title-has-text-matches",tags:["cat.text-alternatives","wcag412","wcag2a"],actIds:["4b1c6c"],all:[],any:[],none:["unique-frame-title"],reviewOnFail:!0},{id:"frame-title",selector:"frame, iframe",matches:"no-negative-tabindex-matches",tags:["cat.text-alternatives","wcag2a","wcag412","section508","section508.22.i"],actIds:["cae760"],all:[],any:[{options:{attribute:"title"},id:"non-empty-title"},"aria-label","aria-labelledby","presentational-role"],none:[]},{id:"heading-order",selector:"h1, h2, h3, h4, h5, h6, [role=heading]",matches:"heading-matches",tags:["cat.semantics","best-practice"],all:[],any:["heading-order"],none:[]},{id:"hidden-content",selector:"*",excludeHidden:!1,tags:["cat.structure","experimental","review-item","best-practice"],all:[],any:["hidden-content"],none:[]},{id:"html-has-lang",selector:"html",matches:"is-initiator-matches",tags:["cat.language","wcag2a","wcag311","ACT"],actIds:["b5c3f8"],all:[],any:[{options:{attributes:["lang","xml:lang"]},id:"has-lang"}],none:[]},{id:"html-lang-valid",selector:'html[lang]:not([lang=""]), html[xml\\:lang]:not([xml\\:lang=""])',tags:["cat.language","wcag2a","wcag311","ACT"],actIds:["bf051a"],all:[],any:[],none:[{options:{attributes:["lang","xml:lang"]},id:"valid-lang"}]},{id:"html-xml-lang-mismatch",selector:"html[lang][xml\\:lang]",matches:"xml-lang-mismatch-matches",tags:["cat.language","wcag2a","wcag311","ACT"],actIds:["5b7ae0"],all:["xml-lang-mismatch"],any:[],none:[]},{id:"identical-links-same-purpose",selector:'a[href], area[href], [role="link"]',excludeHidden:!1,enabled:!1,matches:"identical-links-same-purpose-matches",tags:["cat.semantics","wcag2aaa","wcag249"],actIds:["b20e66"],all:["identical-links-same-purpose"],any:[],none:[]},{id:"image-alt",selector:"img",matches:"no-explicit-name-required-matches",tags:["cat.text-alternatives","wcag2a","wcag111","section508","section508.22.a","ACT"],actIds:["23a2a8"],all:[],any:["has-alt","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"},"presentational-role"],none:["alt-space-value"]},{id:"image-redundant-alt",selector:"img",tags:["cat.text-alternatives","best-practice"],all:[],any:[],none:[{options:{parentSelector:"button, [role=button], a[href], p, li, td, th"},id:"duplicate-img-label"}]},{id:"input-button-name",selector:'input[type="button"], input[type="submit"], input[type="reset"]',matches:"no-explicit-name-required-matches",tags:["cat.name-role-value","wcag2a","wcag412","section508","section508.22.a","ACT"],actIds:["97a4e1"],all:[],any:["non-empty-if-present",{options:{attribute:"value"},id:"non-empty-value"},"aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"},"presentational-role"],none:[]},{id:"input-image-alt",selector:'input[type="image"]',matches:"no-explicit-name-required-matches",tags:["cat.text-alternatives","wcag2a","wcag111","wcag412","section508","section508.22.a","ACT"],actIds:["59796f"],all:[],any:[{options:{attribute:"alt"},id:"non-empty-alt"},"aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"label-content-name-mismatch",matches:"label-content-name-mismatch-matches",tags:["cat.semantics","wcag21a","wcag253","experimental"],actIds:["2ee8b8"],all:[],any:[{options:{pixelThreshold:.1,occurrenceThreshold:3},id:"label-content-name-mismatch"}],none:[]},{id:"label-title-only",selector:"input, select, textarea",matches:"label-matches",tags:["cat.forms","best-practice"],all:[],any:[],none:["title-only"]},{id:"label",selector:"input, textarea",matches:"label-matches",tags:["cat.forms","wcag2a","wcag412","section508","section508.22.n","ACT"],actIds:["e086e5"],all:[],any:["implicit-label","explicit-label","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"},{options:{attribute:"placeholder"},id:"non-empty-placeholder"},"presentational-role"],none:["help-same-as-label","hidden-explicit-label"]},{id:"landmark-banner-is-top-level",selector:"header:not([role]), [role=banner]",matches:"landmark-has-body-context-matches",tags:["cat.semantics","best-practice"],all:[],any:["landmark-is-top-level"],none:[]},{id:"landmark-complementary-is-top-level",selector:"aside:not([role]), [role=complementary]",tags:["cat.semantics","best-practice"],all:[],any:["landmark-is-top-level"],none:[]},{id:"landmark-contentinfo-is-top-level",selector:"footer:not([role]), [role=contentinfo]",matches:"landmark-has-body-context-matches",tags:["cat.semantics","best-practice"],all:[],any:["landmark-is-top-level"],none:[]},{id:"landmark-main-is-top-level",selector:"main:not([role]), [role=main]",tags:["cat.semantics","best-practice"],all:[],any:["landmark-is-top-level"],none:[]},{id:"landmark-no-duplicate-banner",selector:"header:not([role]), [role=banner]",tags:["cat.semantics","best-practice"],all:[],any:[{options:{selector:"header:not([role]), [role=banner]",nativeScopeFilter:"article, aside, main, nav, section"},id:"page-no-duplicate-banner"}],none:[]},{id:"landmark-no-duplicate-contentinfo",selector:"footer:not([role]), [role=contentinfo]",tags:["cat.semantics","best-practice"],all:[],any:[{options:{selector:"footer:not([role]), [role=contentinfo]",nativeScopeFilter:"article, aside, main, nav, section"},id:"page-no-duplicate-contentinfo"}],none:[]},{id:"landmark-no-duplicate-main",selector:"main:not([role]), [role=main]",tags:["cat.semantics","best-practice"],all:[],any:[{options:{selector:"main:not([role]), [role='main']"},id:"page-no-duplicate-main"}],none:[]},{id:"landmark-one-main",selector:"html",tags:["cat.semantics","best-practice"],all:[{options:{selector:"main:not([role]), [role='main']",passForModal:!0},id:"page-has-main"}],any:[],none:[]},{id:"landmark-unique",selector:"[role=banner], [role=complementary], [role=contentinfo], [role=main], [role=navigation], [role=region], [role=search], [role=form], form, footer, header, aside, main, nav, section",tags:["cat.semantics","best-practice"],matches:"landmark-unique-matches",all:[],any:["landmark-is-unique"],none:[]},{id:"link-in-text-block",selector:"a[href], [role=link]",matches:"link-in-text-block-matches",excludeHidden:!1,tags:["cat.color","wcag2a","wcag141"],all:[],any:[{options:{requiredContrastRatio:3,allowSameColor:!0},id:"link-in-text-block"},"link-in-text-block-style"],none:[]},{id:"link-name",selector:"a[href]",tags:["cat.name-role-value","wcag2a","wcag412","wcag244","section508","section508.22.a","ACT"],actIds:["c487ae"],all:[],any:["has-visible-text","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:["focusable-no-name"]},{id:"list",selector:"ul, ol",matches:"no-role-matches",tags:["cat.structure","wcag2a","wcag131"],all:[],any:[],none:[{options:{validRoles:["listitem"],validNodeNames:["li"]},id:"only-listitems"}]},{id:"listitem",selector:"li",matches:"no-role-matches",tags:["cat.structure","wcag2a","wcag131"],all:[],any:["listitem"],none:[]},{id:"marquee",selector:"marquee",excludeHidden:!1,tags:["cat.parsing","wcag2a","wcag222"],all:[],any:[],none:["is-on-screen"]},{id:"meta-refresh-no-exceptions",selector:'meta[http-equiv="refresh"][content]',excludeHidden:!1,enabled:!1,tags:["cat.time-and-media","wcag2aaa","wcag224","wcag325"],actIds:["bisz58"],all:[],any:[{options:{minDelay:72e3,maxDelay:!1},id:"meta-refresh-no-exceptions"}],none:[]},{id:"meta-refresh",selector:'meta[http-equiv="refresh"][content]',excludeHidden:!1,tags:["cat.time-and-media","wcag2a","wcag221"],actIds:["bc659a","bisz58"],all:[],any:[{options:{minDelay:0,maxDelay:72e3},id:"meta-refresh"}],none:[]},{id:"meta-viewport-large",selector:'meta[name="viewport"]',matches:"is-initiator-matches",excludeHidden:!1,tags:["cat.sensory-and-visual-cues","best-practice"],all:[],any:[{options:{scaleMinimum:5,lowerBound:2},id:"meta-viewport-large"}],none:[]},{id:"meta-viewport",selector:'meta[name="viewport"]',matches:"is-initiator-matches",excludeHidden:!1,tags:["cat.sensory-and-visual-cues","wcag2aa","wcag144","ACT"],actIds:["b4f0c3"],all:[],any:[{options:{scaleMinimum:2},id:"meta-viewport"}],none:[]},{id:"nested-interactive",matches:"nested-interactive-matches",tags:["cat.keyboard","wcag2a","wcag412"],actIds:["307n5z"],all:[],any:["no-focusable-content"],none:[]},{id:"no-autoplay-audio",excludeHidden:!1,selector:"audio[autoplay], video[autoplay]",matches:"no-autoplay-audio-matches",reviewOnFail:!0,tags:["cat.time-and-media","wcag2a","wcag142","ACT"],actIds:["80f0bf"],preload:!0,all:[{options:{allowedDuration:3},id:"no-autoplay-audio"}],any:[],none:[]},{id:"object-alt",selector:"object[data]",matches:"object-is-loaded-matches",tags:["cat.text-alternatives","wcag2a","wcag111","section508","section508.22.a"],actIds:["8fc3b6"],all:[],any:["aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"},"presentational-role"],none:[]},{id:"p-as-heading",selector:"p",matches:"p-as-heading-matches",tags:["cat.semantics","wcag2a","wcag131","experimental"],all:[{options:{margins:[{weight:150,italic:!0},{weight:150,size:1.15},{italic:!0,size:1.15},{size:1.4}],passLength:1,failLength:.5},id:"p-as-heading"}],any:[],none:[]},{id:"page-has-heading-one",selector:"html",tags:["cat.semantics","best-practice"],all:[{options:{selector:"h1:not([role], [aria-level]), :is(h1, h2, h3, h4, h5, h6):not([role])[aria-level=1], [role=heading][aria-level=1]",passForModal:!0},id:"page-has-heading-one"}],any:[],none:[]},{id:"presentation-role-conflict",selector:'img[alt=\'\'], [role="none"], [role="presentation"]',matches:"has-implicit-chromium-role-matches",tags:["cat.aria","best-practice","ACT"],actIds:["46ca7f"],all:[],any:[],none:["is-element-focusable","has-global-aria-attribute"]},{id:"region",selector:"body *",tags:["cat.keyboard","best-practice"],all:[],any:[{options:{regionMatcher:"dialog, [role=dialog], [role=alertdialog], svg"},id:"region"}],none:[]},{id:"role-img-alt",selector:"[role='img']:not(img, area, input, object)",matches:"html-namespace-matches",tags:["cat.text-alternatives","wcag2a","wcag111","section508","section508.22.a","ACT"],actIds:["23a2a8"],all:[],any:["aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"scope-attr-valid",selector:"td[scope], th[scope]",tags:["cat.tables","best-practice"],all:["html5-scope",{options:{values:["row","col","rowgroup","colgroup"]},id:"scope-value"}],any:[],none:[]},{id:"scrollable-region-focusable",selector:"*:not(select,textarea)",matches:"scrollable-region-focusable-matches",tags:["cat.keyboard","wcag2a","wcag211"],actIds:["0ssw9k"],all:[],any:["focusable-content","focusable-element"],none:[]},{id:"select-name",selector:"select",tags:["cat.forms","wcag2a","wcag412","section508","section508.22.n","ACT"],actIds:["e086e5"],all:[],any:["implicit-label","explicit-label","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"},"presentational-role"],none:["help-same-as-label","hidden-explicit-label"]},{id:"server-side-image-map",selector:"img[ismap]",tags:["cat.text-alternatives","wcag2a","wcag211","section508","section508.22.f"],all:[],any:[],none:["exists"]},{id:"skip-link",selector:'a[href^="#"], a[href^="/#"]',matches:"skip-link-matches",tags:["cat.keyboard","best-practice"],all:[],any:["skip-link"],none:[]},{id:"svg-img-alt",selector:'[role="img"], [role="graphics-symbol"], svg[role="graphics-document"]',matches:"svg-namespace-matches",tags:["cat.text-alternatives","wcag2a","wcag111","section508","section508.22.a","ACT"],actIds:["7d6734"],all:[],any:["svg-non-empty-title","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"tabindex",selector:"[tabindex]",tags:["cat.keyboard","best-practice"],all:[],any:["tabindex"],none:[]},{id:"table-duplicate-name",selector:"table",tags:["cat.tables","best-practice"],all:[],any:[],none:["same-caption-summary"]},{id:"table-fake-caption",selector:"table",matches:"data-table-matches",tags:["cat.tables","experimental","wcag2a","wcag131","section508","section508.22.g"],all:["caption-faked"],any:[],none:[]},{id:"target-size",selector:"*",enabled:!1,matches:"widget-not-inline-matches",tags:["wcag22aa","wcag258","cat.sensory-and-visual-cues"],all:[],any:[{options:{minSize:24},id:"target-size"},{options:{minOffset:24},id:"target-offset"}],none:[]},{id:"td-has-header",selector:"table",matches:"data-table-large-matches",tags:["cat.tables","experimental","wcag2a","wcag131","section508","section508.22.g"],all:["td-has-header"],any:[],none:[]},{id:"td-headers-attr",selector:"table",matches:"table-or-grid-role-matches",tags:["cat.tables","wcag2a","wcag131","section508","section508.22.g"],actIds:["a25f45"],all:["td-headers-attr"],any:[],none:[]},{id:"th-has-data-cells",selector:"table",matches:"data-table-matches",tags:["cat.tables","wcag2a","wcag131","section508","section508.22.g"],actIds:["d0f69e"],all:["th-has-data-cells"],any:[],none:[]},{id:"valid-lang",selector:"[lang]:not(html), [xml\\:lang]:not(html)",tags:["cat.language","wcag2aa","wcag312","ACT"],actIds:["de46e4"],all:[],any:[],none:[{options:{attributes:["lang","xml:lang"]},id:"valid-lang"}]},{id:"video-caption",selector:"video",tags:["cat.text-alternatives","wcag2a","wcag122","section508","section508.22.a"],actIds:["eac66b"],all:[],any:[],none:["caption"]}],checks:[{id:"abstractrole",evaluate:"abstractrole-evaluate"},{id:"aria-allowed-attr",evaluate:"aria-allowed-attr-evaluate",options:{validTreeRowAttrs:["aria-posinset","aria-setsize","aria-expanded","aria-level"]}},{id:"aria-allowed-role",evaluate:"aria-allowed-role-evaluate",options:{allowImplicit:!0,ignoredTags:[]}},{id:"aria-busy",evaluate:"aria-busy-evaluate"},{id:"aria-errormessage",evaluate:"aria-errormessage-evaluate"},{id:"aria-hidden-body",evaluate:"aria-hidden-body-evaluate"},{id:"aria-level",evaluate:"aria-level-evaluate"},{id:"aria-prohibited-attr",evaluate:"aria-prohibited-attr-evaluate",options:{elementsAllowedAriaLabel:["applet","input"]}},{id:"aria-required-attr",evaluate:"aria-required-attr-evaluate"},{id:"aria-required-children",evaluate:"aria-required-children-evaluate",options:{reviewEmpty:["doc-bibliography","doc-endnotes","grid","list","listbox","menu","menubar","table","tablist","tree","treegrid","rowgroup"]}},{id:"aria-required-parent",evaluate:"aria-required-parent-evaluate",options:{ownGroupRoles:["listitem","treeitem"]}},{id:"aria-roledescription",evaluate:"aria-roledescription-evaluate",options:{supportedRoles:["button","img","checkbox","radio","combobox","menuitemcheckbox","menuitemradio"]}},{id:"aria-unsupported-attr",evaluate:"aria-unsupported-attr-evaluate"},{id:"aria-valid-attr-value",evaluate:"aria-valid-attr-value-evaluate",options:[]},{id:"aria-valid-attr",evaluate:"aria-valid-attr-evaluate",options:[]},{id:"deprecatedrole",evaluate:"deprecatedrole-evaluate"},{id:"fallbackrole",evaluate:"fallbackrole-evaluate"},{id:"has-global-aria-attribute",evaluate:"has-global-aria-attribute-evaluate"},{id:"has-widget-role",evaluate:"has-widget-role-evaluate",options:[]},{id:"invalidrole",evaluate:"invalidrole-evaluate"},{id:"is-element-focusable",evaluate:"is-element-focusable-evaluate"},{id:"no-implicit-explicit-label",evaluate:"no-implicit-explicit-label-evaluate"},{id:"unsupportedrole",evaluate:"unsupportedrole-evaluate"},{id:"valid-scrollable-semantics",evaluate:"valid-scrollable-semantics-evaluate",options:{roles:["tooltip"]}},{id:"color-contrast-enhanced",evaluate:"color-contrast-evaluate",options:{ignoreUnicode:!0,ignoreLength:!1,ignorePseudo:!1,boldValue:700,boldTextPt:14,largeTextPt:18,contrastRatio:{normal:{expected:7,minThreshold:4.5},large:{expected:4.5,minThreshold:3}},pseudoSizeThreshold:.25,shadowOutlineEmMax:.1,textStrokeEmMin:.03}},{id:"color-contrast",evaluate:"color-contrast-evaluate",options:{ignoreUnicode:!0,ignoreLength:!1,ignorePseudo:!1,boldValue:700,boldTextPt:14,largeTextPt:18,contrastRatio:{normal:{expected:4.5},large:{expected:3}},pseudoSizeThreshold:.25,shadowOutlineEmMax:.2,textStrokeEmMin:.03}},{id:"link-in-text-block-style",evaluate:"link-in-text-block-style-evaluate"},{id:"link-in-text-block",evaluate:"link-in-text-block-evaluate",options:{requiredContrastRatio:3,allowSameColor:!0}},{id:"autocomplete-appropriate",evaluate:"autocomplete-appropriate-evaluate",deprecated:!0},{id:"autocomplete-valid",evaluate:"autocomplete-valid-evaluate",options:{stateTerms:["none","false","true","disabled","enabled","undefined","null"]}},{id:"accesskeys",evaluate:"accesskeys-evaluate",after:"accesskeys-after"},{id:"focusable-content",evaluate:"focusable-content-evaluate"},{id:"focusable-disabled",evaluate:"focusable-disabled-evaluate"},{id:"focusable-element",evaluate:"focusable-element-evaluate"},{id:"focusable-modal-open",evaluate:"focusable-modal-open-evaluate"},{id:"focusable-no-name",evaluate:"focusable-no-name-evaluate"},{id:"focusable-not-tabbable",evaluate:"focusable-not-tabbable-evaluate"},{id:"frame-focusable-content",evaluate:"frame-focusable-content-evaluate"},{id:"landmark-is-top-level",evaluate:"landmark-is-top-level-evaluate"},{id:"no-focusable-content",evaluate:"no-focusable-content-evaluate"},{id:"page-has-heading-one",evaluate:"has-descendant-evaluate",after:"has-descendant-after",options:{selector:"h1:not([role], [aria-level]), :is(h1, h2, h3, h4, h5, h6):not([role])[aria-level=1], [role=heading][aria-level=1]",passForModal:!0}},{id:"page-has-main",evaluate:"has-descendant-evaluate",after:"has-descendant-after",options:{selector:"main:not([role]), [role='main']",passForModal:!0}},{id:"page-no-duplicate-banner",evaluate:"page-no-duplicate-evaluate",after:"page-no-duplicate-after",options:{selector:"header:not([role]), [role=banner]",nativeScopeFilter:"article, aside, main, nav, section"}},{id:"page-no-duplicate-contentinfo",evaluate:"page-no-duplicate-evaluate",after:"page-no-duplicate-after",options:{selector:"footer:not([role]), [role=contentinfo]",nativeScopeFilter:"article, aside, main, nav, section"}},{id:"page-no-duplicate-main",evaluate:"page-no-duplicate-evaluate",after:"page-no-duplicate-after",options:{selector:"main:not([role]), [role='main']"}},{id:"tabindex",evaluate:"tabindex-evaluate"},{id:"alt-space-value",evaluate:"alt-space-value-evaluate"},{id:"duplicate-img-label",evaluate:"duplicate-img-label-evaluate",options:{parentSelector:"button, [role=button], a[href], p, li, td, th"}},{id:"explicit-label",evaluate:"explicit-evaluate"},{id:"help-same-as-label",evaluate:"help-same-as-label-evaluate",enabled:!1},{id:"hidden-explicit-label",evaluate:"hidden-explicit-label-evaluate"},{id:"implicit-label",evaluate:"implicit-evaluate"},{id:"label-content-name-mismatch",evaluate:"label-content-name-mismatch-evaluate",options:{pixelThreshold:.1,occurrenceThreshold:3}},{id:"multiple-label",evaluate:"multiple-label-evaluate"},{id:"title-only",evaluate:"title-only-evaluate"},{id:"landmark-is-unique",evaluate:"landmark-is-unique-evaluate",after:"landmark-is-unique-after"},{id:"has-lang",evaluate:"has-lang-evaluate",options:{attributes:["lang","xml:lang"]}},{id:"valid-lang",evaluate:"valid-lang-evaluate",options:{attributes:["lang","xml:lang"]}},{id:"xml-lang-mismatch",evaluate:"xml-lang-mismatch-evaluate"},{id:"dlitem",evaluate:"dlitem-evaluate"},{id:"listitem",evaluate:"listitem-evaluate"},{id:"only-dlitems",evaluate:"invalid-children-evaluate",options:{validRoles:["definition","term","listitem"],validNodeNames:["dt","dd"],divGroups:!0}},{id:"only-listitems",evaluate:"invalid-children-evaluate",options:{validRoles:["listitem"],validNodeNames:["li"]}},{id:"structured-dlitems",evaluate:"structured-dlitems-evaluate"},{id:"caption",evaluate:"caption-evaluate"},{id:"frame-tested",evaluate:"frame-tested-evaluate",after:"frame-tested-after",options:{isViolation:!1}},{id:"no-autoplay-audio",evaluate:"no-autoplay-audio-evaluate",options:{allowedDuration:3}},{id:"css-orientation-lock",evaluate:"css-orientation-lock-evaluate",options:{degreeThreshold:2}},{id:"meta-viewport-large",evaluate:"meta-viewport-scale-evaluate",options:{scaleMinimum:5,lowerBound:2}},{id:"meta-viewport",evaluate:"meta-viewport-scale-evaluate",options:{scaleMinimum:2}},{id:"target-offset",evaluate:"target-offset-evaluate",options:{minOffset:24}},{id:"target-size",evaluate:"target-size-evaluate",options:{minSize:24}},{id:"header-present",evaluate:"has-descendant-evaluate",after:"has-descendant-after",options:{selector:":is(h1, h2, h3, h4, h5, h6):not([role]), [role=heading]"}},{id:"heading-order",evaluate:"heading-order-evaluate",after:"heading-order-after"},{id:"identical-links-same-purpose",evaluate:"identical-links-same-purpose-evaluate",after:"identical-links-same-purpose-after"},{id:"internal-link-present",evaluate:"internal-link-present-evaluate"},{id:"landmark",evaluate:"has-descendant-evaluate",options:{selector:"main, [role=main]"}},{id:"meta-refresh-no-exceptions",evaluate:"meta-refresh-evaluate",options:{minDelay:72e3,maxDelay:!1}},{id:"meta-refresh",evaluate:"meta-refresh-evaluate",options:{minDelay:0,maxDelay:72e3}},{id:"p-as-heading",evaluate:"p-as-heading-evaluate",options:{margins:[{weight:150,italic:!0},{weight:150,size:1.15},{italic:!0,size:1.15},{size:1.4}],passLength:1,failLength:.5}},{id:"region",evaluate:"region-evaluate",after:"region-after",options:{regionMatcher:"dialog, [role=dialog], [role=alertdialog], svg"}},{id:"skip-link",evaluate:"skip-link-evaluate"},{id:"unique-frame-title",evaluate:"unique-frame-title-evaluate",after:"unique-frame-title-after"},{id:"duplicate-id-active",evaluate:"duplicate-id-evaluate",after:"duplicate-id-after"},{id:"duplicate-id-aria",evaluate:"duplicate-id-evaluate",after:"duplicate-id-after"},{id:"duplicate-id",evaluate:"duplicate-id-evaluate",after:"duplicate-id-after"},{id:"aria-label",evaluate:"aria-label-evaluate"},{id:"aria-labelledby",evaluate:"aria-labelledby-evaluate"},{id:"avoid-inline-spacing",evaluate:"avoid-inline-spacing-evaluate",options:{cssProperties:["line-height","letter-spacing","word-spacing"]}},{id:"button-has-visible-text",evaluate:"has-text-content-evaluate"},{id:"doc-has-title",evaluate:"doc-has-title-evaluate"},{id:"exists",evaluate:"exists-evaluate"},{id:"has-alt",evaluate:"has-alt-evaluate"},{id:"has-visible-text",evaluate:"has-text-content-evaluate"},{id:"important-letter-spacing",evaluate:"inline-style-property-evaluate",options:{cssProperty:"letter-spacing",minValue:.12}},{id:"important-line-height",evaluate:"inline-style-property-evaluate",options:{multiLineOnly:!0,cssProperty:"line-height",minValue:1.5,normalValue:1}},{id:"important-word-spacing",evaluate:"inline-style-property-evaluate",options:{cssProperty:"word-spacing",minValue:.16}},{id:"is-on-screen",evaluate:"is-on-screen-evaluate"},{id:"non-empty-alt",evaluate:"attr-non-space-content-evaluate",options:{attribute:"alt"}},{id:"non-empty-if-present",evaluate:"non-empty-if-present-evaluate"},{id:"non-empty-placeholder",evaluate:"attr-non-space-content-evaluate",options:{attribute:"placeholder"}},{id:"non-empty-title",evaluate:"attr-non-space-content-evaluate",options:{attribute:"title"}},{id:"non-empty-value",evaluate:"attr-non-space-content-evaluate",options:{attribute:"value"}},{id:"presentational-role",evaluate:"presentational-role-evaluate"},{id:"role-none",evaluate:"matches-definition-evaluate",deprecated:!0,options:{matcher:{attributes:{role:"none"}}}},{id:"role-presentation",evaluate:"matches-definition-evaluate",deprecated:!0,options:{matcher:{attributes:{role:"presentation"}}}},{id:"svg-non-empty-title",evaluate:"svg-non-empty-title-evaluate"},{id:"caption-faked",evaluate:"caption-faked-evaluate"},{id:"html5-scope",evaluate:"html5-scope-evaluate"},{id:"same-caption-summary",evaluate:"same-caption-summary-evaluate"},{id:"scope-value",evaluate:"scope-value-evaluate",options:{values:["row","col","rowgroup","colgroup"]}},{id:"td-has-header",evaluate:"td-has-header-evaluate"},{id:"td-headers-attr",evaluate:"td-headers-attr-evaluate"},{id:"th-has-data-cells",evaluate:"th-has-data-cells-evaluate"},{id:"hidden-content",evaluate:"hidden-content-evaluate"}]})}("object"==typeof window?window:this)},163:function(e,t){var n
!function(t,n){"use strict"
"object"==typeof e.exports?e.exports=t.document?n(t,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document")
return n(e)}:n(t)}("undefined"!=typeof window?window:this,(function(r,a){"use strict"
var o=[],i=Object.getPrototypeOf,u=o.slice,s=o.flat?function(e){return o.flat.call(e)}:function(e){return o.concat.apply([],e)},l=o.push,c=o.indexOf,d={},p=d.toString,f=d.hasOwnProperty,h=f.toString,m=h.call(Object),D={},g=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},v=function(e){return null!=e&&e===e.window},y=r.document,b={type:!0,src:!0,nonce:!0,noModule:!0}
function F(e,t,n){var r,a,o=(n=n||y).createElement("script")
if(o.text=e,t)for(r in b)(a=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,a)
n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?d[p.call(e)]||"object":typeof e}var E="3.6.3",C=function(e,t){return new C.fn.init(e,t)}
function x(e){var t=!!e&&"length"in e&&e.length,n=w(e)
return!g(e)&&!v(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}C.fn=C.prototype={jquery:E,constructor:C,length:0,toArray:function(){return u.call(this)},get:function(e){return null==e?u.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=C.merge(this.constructor(),e)
return t.prevObject=this,t},each:function(e){return C.each(this,e)},map:function(e){return this.pushStack(C.map(this,(function(t,n){return e.call(t,n,t)})))},slice:function(){return this.pushStack(u.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(C.grep(this,(function(e,t){return(t+1)%2})))},odd:function(){return this.pushStack(C.grep(this,(function(e,t){return t%2})))},eq:function(e){var t=this.length,n=+e+(e<0?t:0)
return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:l,sort:o.sort,splice:o.splice},C.extend=C.fn.extend=function(){var e,t,n,r,a,o,i=arguments[0]||{},u=1,s=arguments.length,l=!1
for("boolean"==typeof i&&(l=i,i=arguments[u]||{},u++),"object"==typeof i||g(i)||(i={}),u===s&&(i=this,u--);u<s;u++)if(null!=(e=arguments[u]))for(t in e)r=e[t],"__proto__"!==t&&i!==r&&(l&&r&&(C.isPlainObject(r)||(a=Array.isArray(r)))?(n=i[t],o=a&&!Array.isArray(n)?[]:a||C.isPlainObject(n)?n:{},a=!1,i[t]=C.extend(l,o,r)):void 0!==r&&(i[t]=r))
return i},C.extend({expando:"jQuery"+(E+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n
return!(!e||"[object Object]"!==p.call(e)||(t=i(e))&&("function"!=typeof(n=f.call(t,"constructor")&&t.constructor)||h.call(n)!==m))},isEmptyObject:function(e){var t
for(t in e)return!1
return!0},globalEval:function(e,t,n){F(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0
if(x(e))for(n=e.length;r<n&&!1!==t.call(e[r],r,e[r]);r++);else for(r in e)if(!1===t.call(e[r],r,e[r]))break
return e},makeArray:function(e,t){var n=t||[]
return null!=e&&(x(Object(e))?C.merge(n,"string"==typeof e?[e]:e):l.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:c.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,a=e.length;r<n;r++)e[a++]=t[r]
return e.length=a,e},grep:function(e,t,n){for(var r=[],a=0,o=e.length,i=!n;a<o;a++)!t(e[a],a)!==i&&r.push(e[a])
return r},map:function(e,t,n){var r,a,o=0,i=[]
if(x(e))for(r=e.length;o<r;o++)null!=(a=t(e[o],o,n))&&i.push(a)
else for(o in e)null!=(a=t(e[o],o,n))&&i.push(a)
return s(i)},guid:1,support:D}),"function"==typeof Symbol&&(C.fn[Symbol.iterator]=o[Symbol.iterator]),C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),(function(e,t){d["[object "+t+"]"]=t.toLowerCase()}))
var A=function(e){var t,n,r,a,o,i,u,s,l,c,d,p,f,h,m,D,g,v,y,b="sizzle"+1*new Date,F=e.document,w=0,E=0,C=se(),x=se(),A=se(),k=se(),T=function(e,t){return e===t&&(d=!0),0},N={}.hasOwnProperty,R=[],B=R.pop,S=R.push,O=R.push,_=R.slice,I=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n
return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",j="[\\x20\\t\\r\\n\\f]",M="(?:\\\\[\\da-fA-F]{1,6}"+j+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",q="\\["+j+"*("+M+")(?:"+j+"*([*^$|!~]?=)"+j+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+j+"*\\]",L=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+q+")*)|.*)\\)|)",H=new RegExp(j+"+","g"),$=new RegExp("^"+j+"+|((?:^|[^\\\\])(?:\\\\.)*)"+j+"+$","g"),V=new RegExp("^"+j+"*,"+j+"*"),z=new RegExp("^"+j+"*([>+~]|"+j+")"+j+"*"),U=new RegExp(j+"|>"),W=new RegExp(L),G=new RegExp("^"+M+"$"),Y={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+q),PSEUDO:new RegExp("^"+L),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+j+"*(even|odd|(([+-]|)(\\d*)n|)"+j+"*(?:([+-]|)"+j+"*(\\d+)|))"+j+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+j+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+j+"*((?:-\\d)?\\d*)"+j+"*\\)|)(?=[^-]|$)","i")},Q=/HTML$/i,K=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,J=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+j+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536
return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ae=function(e,t){return t?"\0"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){p()},ie=be((function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()}),{dir:"parentNode",next:"legend"})
try{O.apply(R=_.call(F.childNodes),F.childNodes),R[F.childNodes.length].nodeType}catch(e){O={apply:R.length?function(e,t){S.apply(e,_.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}function ue(e,t,r,a){var o,u,l,c,d,h,g,v=t&&t.ownerDocument,F=t?t.nodeType:9
if(r=r||[],"string"!=typeof e||!e||1!==F&&9!==F&&11!==F)return r
if(!a&&(p(t),t=t||f,m)){if(11!==F&&(d=Z.exec(e)))if(o=d[1]){if(9===F){if(!(l=t.getElementById(o)))return r
if(l.id===o)return r.push(l),r}else if(v&&(l=v.getElementById(o))&&y(t,l)&&l.id===o)return r.push(l),r}else{if(d[2])return O.apply(r,t.getElementsByTagName(e)),r
if((o=d[3])&&n.getElementsByClassName&&t.getElementsByClassName)return O.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!k[e+" "]&&(!D||!D.test(e))&&(1!==F||"object"!==t.nodeName.toLowerCase())){if(g=e,v=t,1===F&&(U.test(e)||z.test(e))){for((v=ee.test(e)&&ge(t.parentNode)||t)===t&&n.scope||((c=t.getAttribute("id"))?c=c.replace(re,ae):t.setAttribute("id",c=b)),u=(h=i(e)).length;u--;)h[u]=(c?"#"+c:":scope")+" "+ye(h[u])
g=h.join(",")}try{if(n.cssSupportsSelector&&!CSS.supports("selector(:is("+g+"))"))throw new Error
return O.apply(r,v.querySelectorAll(g)),r}catch(t){k(e,!0)}finally{c===b&&t.removeAttribute("id")}}}return s(e.replace($,"$1"),t,r,a)}function se(){var e=[]
return function t(n,a){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=a}}function le(e){return e[b]=!0,e}function ce(e){var t=f.createElement("fieldset")
try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function de(e,t){for(var n=e.split("|"),a=n.length;a--;)r.attrHandle[n[a]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex
if(r)return r
if(n)for(;n=n.nextSibling;)if(n===t)return-1
return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function he(e){return function(t){var n=t.nodeName.toLowerCase()
return("input"===n||"button"===n)&&t.type===e}}function me(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function De(e){return le((function(t){return t=+t,le((function(n,r){for(var a,o=e([],n.length,t),i=o.length;i--;)n[a=o[i]]&&(n[a]=!(r[a]=n[a]))}))}))}function ge(e){return e&&void 0!==e.getElementsByTagName&&e}for(t in n=ue.support={},o=ue.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement
return!Q.test(t||n&&n.nodeName||"HTML")},p=ue.setDocument=function(e){var t,a,i=e?e.ownerDocument||e:F
return i!=f&&9===i.nodeType&&i.documentElement?(h=(f=i).documentElement,m=!o(f),F!=f&&(a=f.defaultView)&&a.top!==a&&(a.addEventListener?a.addEventListener("unload",oe,!1):a.attachEvent&&a.attachEvent("onunload",oe)),n.scope=ce((function(e){return h.appendChild(e).appendChild(f.createElement("div")),void 0!==e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length})),n.cssSupportsSelector=ce((function(){return CSS.supports("selector(*)")&&f.querySelectorAll(":is(:jqfake)")&&!CSS.supports("selector(:is(*,:jqfake))")})),n.attributes=ce((function(e){return e.className="i",!e.getAttribute("className")})),n.getElementsByTagName=ce((function(e){return e.appendChild(f.createComment("")),!e.getElementsByTagName("*").length})),n.getElementsByClassName=J.test(f.getElementsByClassName),n.getById=ce((function(e){return h.appendChild(e).id=b,!f.getElementsByName||!f.getElementsByName(b).length})),n.getById?(r.filter.ID=function(e){var t=e.replace(te,ne)
return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if(void 0!==t.getElementById&&m){var n=t.getElementById(e)
return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(te,ne)
return function(e){var n=void 0!==e.getAttributeNode&&e.getAttributeNode("id")
return n&&n.value===t}},r.find.ID=function(e,t){if(void 0!==t.getElementById&&m){var n,r,a,o=t.getElementById(e)
if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o]
for(a=t.getElementsByName(e),r=0;o=a[r++];)if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],a=0,o=t.getElementsByTagName(e)
if("*"===e){for(;n=o[a++];)1===n.nodeType&&r.push(n)
return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if(void 0!==t.getElementsByClassName&&m)return t.getElementsByClassName(e)},g=[],D=[],(n.qsa=J.test(f.querySelectorAll))&&(ce((function(e){var t
h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&D.push("[*^$]="+j+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||D.push("\\["+j+"*(?:value|"+P+")"),e.querySelectorAll("[id~="+b+"-]").length||D.push("~="),(t=f.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||D.push("\\["+j+"*name"+j+"*="+j+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||D.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||D.push(".#.+[+~]"),e.querySelectorAll("\\\f"),D.push("[\\r\\n\\f]")})),ce((function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>"
var t=f.createElement("input")
t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&D.push("name"+j+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&D.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&D.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),D.push(",.*:")}))),(n.matchesSelector=J.test(v=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ce((function(e){n.disconnectedMatch=v.call(e,"*"),v.call(e,"[s!='']:x"),g.push("!=",L)})),n.cssSupportsSelector||D.push(":has"),D=D.length&&new RegExp(D.join("|")),g=g.length&&new RegExp(g.join("|")),t=J.test(h.compareDocumentPosition),y=t||J.test(h.contains)?function(e,t){var n=9===e.nodeType&&e.documentElement||e,r=t&&t.parentNode
return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0
return!1},T=t?function(e,t){if(e===t)return d=!0,0
var r=!e.compareDocumentPosition-!t.compareDocumentPosition
return r||(1&(r=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e==f||e.ownerDocument==F&&y(F,e)?-1:t==f||t.ownerDocument==F&&y(F,t)?1:c?I(c,e)-I(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return d=!0,0
var n,r=0,a=e.parentNode,o=t.parentNode,i=[e],u=[t]
if(!a||!o)return e==f?-1:t==f?1:a?-1:o?1:c?I(c,e)-I(c,t):0
if(a===o)return pe(e,t)
for(n=e;n=n.parentNode;)i.unshift(n)
for(n=t;n=n.parentNode;)u.unshift(n)
for(;i[r]===u[r];)r++
return r?pe(i[r],u[r]):i[r]==F?-1:u[r]==F?1:0},f):f},ue.matches=function(e,t){return ue(e,null,null,t)},ue.matchesSelector=function(e,t){if(p(e),n.matchesSelector&&m&&!k[t+" "]&&(!g||!g.test(t))&&(!D||!D.test(t)))try{var r=v.call(e,t)
if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){k(t,!0)}return ue(t,f,null,[e]).length>0},ue.contains=function(e,t){return(e.ownerDocument||e)!=f&&p(e),y(e,t)},ue.attr=function(e,t){(e.ownerDocument||e)!=f&&p(e)
var a=r.attrHandle[t.toLowerCase()],o=a&&N.call(r.attrHandle,t.toLowerCase())?a(e,t,!m):void 0
return void 0!==o?o:n.attributes||!m?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},ue.escape=function(e){return(e+"").replace(re,ae)},ue.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},ue.uniqueSort=function(e){var t,r=[],a=0,o=0
if(d=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(T),d){for(;t=e[o++];)t===e[o]&&(a=r.push(o))
for(;a--;)e.splice(r[a],1)}return c=null,e},a=ue.getText=function(e){var t,n="",r=0,o=e.nodeType
if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent
for(e=e.firstChild;e;e=e.nextSibling)n+=a(e)}else if(3===o||4===o)return e.nodeValue}else for(;t=e[r++];)n+=a(t)
return n},r=ue.selectors={cacheLength:50,createPseudo:le,match:Y,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||ue.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&ue.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2]
return Y.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&W.test(n)&&(t=i(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase()
return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=C[e+" "]
return t||(t=new RegExp("(^|"+j+")"+e+"("+j+"|$)"))&&C(e,(function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")}))},ATTR:function(e,t,n){return function(r){var a=ue.attr(r,e)
return null==a?"!="===t:!t||(a+="","="===t?a===n:"!="===t?a!==n:"^="===t?n&&0===a.indexOf(n):"*="===t?n&&a.indexOf(n)>-1:"$="===t?n&&a.slice(-n.length)===n:"~="===t?(" "+a.replace(H," ")+" ").indexOf(n)>-1:"|="===t&&(a===n||a.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,a){var o="nth"!==e.slice(0,3),i="last"!==e.slice(-4),u="of-type"===t
return 1===r&&0===a?function(e){return!!e.parentNode}:function(t,n,s){var l,c,d,p,f,h,m=o!==i?"nextSibling":"previousSibling",D=t.parentNode,g=u&&t.nodeName.toLowerCase(),v=!s&&!u,y=!1
if(D){if(o){for(;m;){for(p=t;p=p[m];)if(u?p.nodeName.toLowerCase()===g:1===p.nodeType)return!1
h=m="only"===e&&!h&&"nextSibling"}return!0}if(h=[i?D.firstChild:D.lastChild],i&&v){for(y=(f=(l=(c=(d=(p=D)[b]||(p[b]={}))[p.uniqueID]||(d[p.uniqueID]={}))[e]||[])[0]===w&&l[1])&&l[2],p=f&&D.childNodes[f];p=++f&&p&&p[m]||(y=f=0)||h.pop();)if(1===p.nodeType&&++y&&p===t){c[e]=[w,f,y]
break}}else if(v&&(y=f=(l=(c=(d=(p=t)[b]||(p[b]={}))[p.uniqueID]||(d[p.uniqueID]={}))[e]||[])[0]===w&&l[1]),!1===y)for(;(p=++f&&p&&p[m]||(y=f=0)||h.pop())&&((u?p.nodeName.toLowerCase()!==g:1!==p.nodeType)||!++y||(v&&((c=(d=p[b]||(p[b]={}))[p.uniqueID]||(d[p.uniqueID]={}))[e]=[w,y]),p!==t)););return(y-=a)===r||y%r==0&&y/r>=0}}},PSEUDO:function(e,t){var n,a=r.pseudos[e]||r.setFilters[e.toLowerCase()]||ue.error("unsupported pseudo: "+e)
return a[b]?a(t):a.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?le((function(e,n){for(var r,o=a(e,t),i=o.length;i--;)e[r=I(e,o[i])]=!(n[r]=o[i])})):function(e){return a(e,0,n)}):a}},pseudos:{not:le((function(e){var t=[],n=[],r=u(e.replace($,"$1"))
return r[b]?le((function(e,t,n,a){for(var o,i=r(e,null,a,[]),u=e.length;u--;)(o=i[u])&&(e[u]=!(t[u]=o))})):function(e,a,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}})),has:le((function(e){return function(t){return ue(e,t).length>0}})),contains:le((function(e){return e=e.replace(te,ne),function(t){return(t.textContent||a(t)).indexOf(e)>-1}})),lang:le((function(e){return G.test(e||"")||ue.error("unsupported lang: "+e),e=e.replace(te,ne).toLowerCase(),function(t){var n
do{if(n=m?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType)
return!1}})),target:function(t){var n=e.location&&e.location.hash
return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:me(!1),disabled:me(!0),checked:function(e){var t=e.nodeName.toLowerCase()
return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1
return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return X.test(e.nodeName)},input:function(e){return K.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase()
return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t
return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:De((function(){return[0]})),last:De((function(e,t){return[t-1]})),eq:De((function(e,t,n){return[n<0?n+t:n]})),even:De((function(e,t){for(var n=0;n<t;n+=2)e.push(n)
return e})),odd:De((function(e,t){for(var n=1;n<t;n+=2)e.push(n)
return e})),lt:De((function(e,t,n){for(var r=n<0?n+t:n>t?t:n;--r>=0;)e.push(r)
return e})),gt:De((function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r)
return e}))}},r.pseudos.nth=r.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t)
for(t in{submit:!0,reset:!0})r.pseudos[t]=he(t)
function ve(){}function ye(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value
return r}function be(e,t,n){var r=t.dir,a=t.next,o=a||r,i=n&&"parentNode"===o,u=E++
return t.first?function(t,n,a){for(;t=t[r];)if(1===t.nodeType||i)return e(t,n,a)
return!1}:function(t,n,s){var l,c,d,p=[w,u]
if(s){for(;t=t[r];)if((1===t.nodeType||i)&&e(t,n,s))return!0}else for(;t=t[r];)if(1===t.nodeType||i)if(c=(d=t[b]||(t[b]={}))[t.uniqueID]||(d[t.uniqueID]={}),a&&a===t.nodeName.toLowerCase())t=t[r]||t
else{if((l=c[o])&&l[0]===w&&l[1]===u)return p[2]=l[2]
if(c[o]=p,p[2]=e(t,n,s))return!0}return!1}}function Fe(e){return e.length>1?function(t,n,r){for(var a=e.length;a--;)if(!e[a](t,n,r))return!1
return!0}:e[0]}function we(e,t,n,r,a){for(var o,i=[],u=0,s=e.length,l=null!=t;u<s;u++)(o=e[u])&&(n&&!n(o,r,a)||(i.push(o),l&&t.push(u)))
return i}function Ee(e,t,n,r,a,o){return r&&!r[b]&&(r=Ee(r)),a&&!a[b]&&(a=Ee(a,o)),le((function(o,i,u,s){var l,c,d,p=[],f=[],h=i.length,m=o||function(e,t,n){for(var r=0,a=t.length;r<a;r++)ue(e,t[r],n)
return n}(t||"*",u.nodeType?[u]:u,[]),D=!e||!o&&t?m:we(m,p,e,u,s),g=n?a||(o?e:h||r)?[]:i:D
if(n&&n(D,g,u,s),r)for(l=we(g,f),r(l,[],u,s),c=l.length;c--;)(d=l[c])&&(g[f[c]]=!(D[f[c]]=d))
if(o){if(a||e){if(a){for(l=[],c=g.length;c--;)(d=g[c])&&l.push(D[c]=d)
a(null,g=[],l,s)}for(c=g.length;c--;)(d=g[c])&&(l=a?I(o,d):p[c])>-1&&(o[l]=!(i[l]=d))}}else g=we(g===i?g.splice(h,g.length):g),a?a(null,i,g,s):O.apply(i,g)}))}function Ce(e){for(var t,n,a,o=e.length,i=r.relative[e[0].type],u=i||r.relative[" "],s=i?1:0,c=be((function(e){return e===t}),u,!0),d=be((function(e){return I(t,e)>-1}),u,!0),p=[function(e,n,r){var a=!i&&(r||n!==l)||((t=n).nodeType?c(e,n,r):d(e,n,r))
return t=null,a}];s<o;s++)if(n=r.relative[e[s].type])p=[be(Fe(p),n)]
else{if((n=r.filter[e[s].type].apply(null,e[s].matches))[b]){for(a=++s;a<o&&!r.relative[e[a].type];a++);return Ee(s>1&&Fe(p),s>1&&ye(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),n,s<a&&Ce(e.slice(s,a)),a<o&&Ce(e=e.slice(a)),a<o&&ye(e))}p.push(n)}return Fe(p)}return ve.prototype=r.filters=r.pseudos,r.setFilters=new ve,i=ue.tokenize=function(e,t){var n,a,o,i,u,s,l,c=x[e+" "]
if(c)return t?0:c.slice(0)
for(u=e,s=[],l=r.preFilter;u;){for(i in n&&!(a=V.exec(u))||(a&&(u=u.slice(a[0].length)||u),s.push(o=[])),n=!1,(a=z.exec(u))&&(n=a.shift(),o.push({value:n,type:a[0].replace($," ")}),u=u.slice(n.length)),r.filter)!(a=Y[i].exec(u))||l[i]&&!(a=l[i](a))||(n=a.shift(),o.push({value:n,type:i,matches:a}),u=u.slice(n.length))
if(!n)break}return t?u.length:u?ue.error(e):x(e,s).slice(0)},u=ue.compile=function(e,t){var n,a=[],o=[],u=A[e+" "]
if(!u){for(t||(t=i(e)),n=t.length;n--;)(u=Ce(t[n]))[b]?a.push(u):o.push(u)
u=A(e,function(e,t){var n=t.length>0,a=e.length>0,o=function(o,i,u,s,c){var d,h,D,g=0,v="0",y=o&&[],b=[],F=l,E=o||a&&r.find.TAG("*",c),C=w+=null==F?1:Math.random()||.1,x=E.length
for(c&&(l=i==f||i||c);v!==x&&null!=(d=E[v]);v++){if(a&&d){for(h=0,i||d.ownerDocument==f||(p(d),u=!m);D=e[h++];)if(D(d,i||f,u)){s.push(d)
break}c&&(w=C)}n&&((d=!D&&d)&&g--,o&&y.push(d))}if(g+=v,n&&v!==g){for(h=0;D=t[h++];)D(y,b,i,u)
if(o){if(g>0)for(;v--;)y[v]||b[v]||(b[v]=B.call(s))
b=we(b)}O.apply(s,b),c&&!o&&b.length>0&&g+t.length>1&&ue.uniqueSort(s)}return c&&(w=C,l=F),y}
return n?le(o):o}(o,a)),u.selector=e}return u},s=ue.select=function(e,t,n,a){var o,s,l,c,d,p="function"==typeof e&&e,f=!a&&i(e=p.selector||e)
if(n=n||[],1===f.length){if((s=f[0]=f[0].slice(0)).length>2&&"ID"===(l=s[0]).type&&9===t.nodeType&&m&&r.relative[s[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(te,ne),t)||[])[0]))return n
p&&(t=t.parentNode),e=e.slice(s.shift().value.length)}for(o=Y.needsContext.test(e)?0:s.length;o--&&(l=s[o],!r.relative[c=l.type]);)if((d=r.find[c])&&(a=d(l.matches[0].replace(te,ne),ee.test(s[0].type)&&ge(t.parentNode)||t))){if(s.splice(o,1),!(e=a.length&&ye(s)))return O.apply(n,a),n
break}}return(p||u(e,f))(a,t,!m,n,!t||ee.test(e)&&ge(t.parentNode)||t),n},n.sortStable=b.split("").sort(T).join("")===b,n.detectDuplicates=!!d,p(),n.sortDetached=ce((function(e){return 1&e.compareDocumentPosition(f.createElement("fieldset"))})),ce((function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")}))||de("type|href|height|width",(function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)})),n.attributes&&ce((function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")}))||de("value",(function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue})),ce((function(e){return null==e.getAttribute("disabled")}))||de(P,(function(e,t,n){var r
if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null})),ue}(r)
C.find=A,C.expr=A.selectors,C.expr[":"]=C.expr.pseudos,C.uniqueSort=C.unique=A.uniqueSort,C.text=A.getText,C.isXMLDoc=A.isXML,C.contains=A.contains,C.escapeSelector=A.escape
var k=function(e,t,n){for(var r=[],a=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(a&&C(e).is(n))break
r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e)
return n},N=C.expr.match.needsContext
function R(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var B=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i
function S(e,t,n){return g(t)?C.grep(e,(function(e,r){return!!t.call(e,r,e)!==n})):t.nodeType?C.grep(e,(function(e){return e===t!==n})):"string"!=typeof t?C.grep(e,(function(e){return c.call(t,e)>-1!==n})):C.filter(t,e,n)}C.filter=function(e,t,n){var r=t[0]
return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?C.find.matchesSelector(r,e)?[r]:[]:C.find.matches(e,C.grep(t,(function(e){return 1===e.nodeType})))},C.fn.extend({find:function(e){var t,n,r=this.length,a=this
if("string"!=typeof e)return this.pushStack(C(e).filter((function(){for(t=0;t<r;t++)if(C.contains(a[t],this))return!0})))
for(n=this.pushStack([]),t=0;t<r;t++)C.find(e,a[t],n)
return r>1?C.uniqueSort(n):n},filter:function(e){return this.pushStack(S(this,e||[],!1))},not:function(e){return this.pushStack(S(this,e||[],!0))},is:function(e){return!!S(this,"string"==typeof e&&N.test(e)?C(e):e||[],!1).length}})
var O,_=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(C.fn.init=function(e,t,n){var r,a
if(!e)return this
if(n=n||O,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:_.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e)
if(r[1]){if(t=t instanceof C?t[0]:t,C.merge(this,C.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:y,!0)),B.test(r[1])&&C.isPlainObject(t))for(r in t)g(this[r])?this[r](t[r]):this.attr(r,t[r])
return this}return(a=y.getElementById(r[2]))&&(this[0]=a,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(C):C.makeArray(e,this)}).prototype=C.fn,O=C(y)
var I=/^(?:parents|prev(?:Until|All))/,P={children:!0,contents:!0,next:!0,prev:!0}
function j(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}C.fn.extend({has:function(e){var t=C(e,this),n=t.length
return this.filter((function(){for(var e=0;e<n;e++)if(C.contains(this,t[e]))return!0}))},closest:function(e,t){var n,r=0,a=this.length,o=[],i="string"!=typeof e&&C(e)
if(!N.test(e))for(;r<a;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(i?i.index(n)>-1:1===n.nodeType&&C.find.matchesSelector(n,e))){o.push(n)
break}return this.pushStack(o.length>1?C.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?c.call(C(e),this[0]):c.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(C.uniqueSort(C.merge(this.get(),C(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),C.each({parent:function(e){var t=e.parentNode
return t&&11!==t.nodeType?t:null},parents:function(e){return k(e,"parentNode")},parentsUntil:function(e,t,n){return k(e,"parentNode",n)},next:function(e){return j(e,"nextSibling")},prev:function(e){return j(e,"previousSibling")},nextAll:function(e){return k(e,"nextSibling")},prevAll:function(e){return k(e,"previousSibling")},nextUntil:function(e,t,n){return k(e,"nextSibling",n)},prevUntil:function(e,t,n){return k(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&i(e.contentDocument)?e.contentDocument:(R(e,"template")&&(e=e.content||e),C.merge([],e.childNodes))}},(function(e,t){C.fn[e]=function(n,r){var a=C.map(this,t,n)
return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(a=C.filter(r,a)),this.length>1&&(P[e]||C.uniqueSort(a),I.test(e)&&a.reverse()),this.pushStack(a)}}))
var M=/[^\x20\t\r\n\f]+/g
function q(e){return e}function L(e){throw e}function H(e,t,n,r){var a
try{e&&g(a=e.promise)?a.call(e).done(t).fail(n):e&&g(a=e.then)?a.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}C.Callbacks=function(e){e="string"==typeof e?function(e){var t={}
return C.each(e.match(M)||[],(function(e,n){t[n]=!0})),t}(e):C.extend({},e)
var t,n,r,a,o=[],i=[],u=-1,s=function(){for(a=a||e.once,r=t=!0;i.length;u=-1)for(n=i.shift();++u<o.length;)!1===o[u].apply(n[0],n[1])&&e.stopOnFalse&&(u=o.length,n=!1)
e.memory||(n=!1),t=!1,a&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(u=o.length-1,i.push(n)),function t(n){C.each(n,(function(n,r){g(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==w(r)&&t(r)}))}(arguments),n&&!t&&s()),this},remove:function(){return C.each(arguments,(function(e,t){for(var n;(n=C.inArray(t,o,n))>-1;)o.splice(n,1),n<=u&&u--})),this},has:function(e){return e?C.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return a=i=[],o=n="",this},disabled:function(){return!o},lock:function(){return a=i=[],n||t||(o=n=""),this},locked:function(){return!!a},fireWith:function(e,n){return a||(n=[e,(n=n||[]).slice?n.slice():n],i.push(n),t||s()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}}
return l},C.extend({Deferred:function(e){var t=[["notify","progress",C.Callbacks("memory"),C.Callbacks("memory"),2],["resolve","done",C.Callbacks("once memory"),C.Callbacks("once memory"),0,"resolved"],["reject","fail",C.Callbacks("once memory"),C.Callbacks("once memory"),1,"rejected"]],n="pending",a={state:function(){return n},always:function(){return o.done(arguments).fail(arguments),this},catch:function(e){return a.then(null,e)},pipe:function(){var e=arguments
return C.Deferred((function(n){C.each(t,(function(t,r){var a=g(e[r[4]])&&e[r[4]]
o[r[1]]((function(){var e=a&&a.apply(this,arguments)
e&&g(e.promise)?e.promise().progress(n.notify).done(n.resolve).fail(n.reject):n[r[0]+"With"](this,a?[e]:arguments)}))})),e=null})).promise()},then:function(e,n,a){var o=0
function i(e,t,n,a){return function(){var u=this,s=arguments,l=function(){var r,l
if(!(e<o)){if((r=n.apply(u,s))===t.promise())throw new TypeError("Thenable self-resolution")
l=r&&("object"==typeof r||"function"==typeof r)&&r.then,g(l)?a?l.call(r,i(o,t,q,a),i(o,t,L,a)):(o++,l.call(r,i(o,t,q,a),i(o,t,L,a),i(o,t,q,t.notifyWith))):(n!==q&&(u=void 0,s=[r]),(a||t.resolveWith)(u,s))}},c=a?l:function(){try{l()}catch(r){C.Deferred.exceptionHook&&C.Deferred.exceptionHook(r,c.stackTrace),e+1>=o&&(n!==L&&(u=void 0,s=[r]),t.rejectWith(u,s))}}
e?c():(C.Deferred.getStackHook&&(c.stackTrace=C.Deferred.getStackHook()),r.setTimeout(c))}}return C.Deferred((function(r){t[0][3].add(i(0,r,g(a)?a:q,r.notifyWith)),t[1][3].add(i(0,r,g(e)?e:q)),t[2][3].add(i(0,r,g(n)?n:L))})).promise()},promise:function(e){return null!=e?C.extend(e,a):a}},o={}
return C.each(t,(function(e,r){var i=r[2],u=r[5]
a[r[1]]=i.add,u&&i.add((function(){n=u}),t[3-e][2].disable,t[3-e][3].disable,t[0][2].lock,t[0][3].lock),i.add(r[3].fire),o[r[0]]=function(){return o[r[0]+"With"](this===o?void 0:this,arguments),this},o[r[0]+"With"]=i.fireWith})),a.promise(o),e&&e.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),a=u.call(arguments),o=C.Deferred(),i=function(e){return function(n){r[e]=this,a[e]=arguments.length>1?u.call(arguments):n,--t||o.resolveWith(r,a)}}
if(t<=1&&(H(e,o.done(i(n)).resolve,o.reject,!t),"pending"===o.state()||g(a[n]&&a[n].then)))return o.then()
for(;n--;)H(a[n],i(n),o.reject)
return o.promise()}})
var $=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/
C.Deferred.exceptionHook=function(e,t){r.console&&r.console.warn&&e&&$.test(e.name)&&r.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},C.readyException=function(e){r.setTimeout((function(){throw e}))}
var V=C.Deferred()
function z(){y.removeEventListener("DOMContentLoaded",z),r.removeEventListener("load",z),C.ready()}C.fn.ready=function(e){return V.then(e).catch((function(e){C.readyException(e)})),this},C.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--C.readyWait:C.isReady)||(C.isReady=!0,!0!==e&&--C.readyWait>0||V.resolveWith(y,[C]))}}),C.ready.then=V.then,"complete"===y.readyState||"loading"!==y.readyState&&!y.documentElement.doScroll?r.setTimeout(C.ready):(y.addEventListener("DOMContentLoaded",z),r.addEventListener("load",z))
var U=function(e,t,n,r,a,o,i){var u=0,s=e.length,l=null==n
if("object"===w(n))for(u in a=!0,n)U(e,t,u,n[u],!0,o,i)
else if(void 0!==r&&(a=!0,g(r)||(i=!0),l&&(i?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(C(e),n)})),t))for(;u<s;u++)t(e[u],n,i?r:r.call(e[u],u,t(e[u],n)))
return a?e:l?t.call(e):s?t(e[0],n):o},W=/^-ms-/,G=/-([a-z])/g
function Y(e,t){return t.toUpperCase()}function Q(e){return e.replace(W,"ms-").replace(G,Y)}var K=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType}
function X(){this.expando=C.expando+X.uid++}X.uid=1,X.prototype={cache:function(e){var t=e[this.expando]
return t||(t={},K(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,a=this.cache(e)
if("string"==typeof t)a[Q(t)]=n
else for(r in t)a[Q(r)]=t[r]
return a},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][Q(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando]
if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(Q):(t=Q(t))in r?[t]:t.match(M)||[]).length
for(;n--;)delete r[t[n]]}(void 0===t||C.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando]
return void 0!==t&&!C.isEmptyObject(t)}}
var J=new X,Z=new X,ee=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,te=/[A-Z]/g
function ne(e,t,n){var r
if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(te,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=function(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:ee.test(e)?JSON.parse(e):e)}(n)}catch(e){}Z.set(e,t,n)}else n=void 0
return n}C.extend({hasData:function(e){return Z.hasData(e)||J.hasData(e)},data:function(e,t,n){return Z.access(e,t,n)},removeData:function(e,t){Z.remove(e,t)},_data:function(e,t,n){return J.access(e,t,n)},_removeData:function(e,t){J.remove(e,t)}}),C.fn.extend({data:function(e,t){var n,r,a,o=this[0],i=o&&o.attributes
if(void 0===e){if(this.length&&(a=Z.get(o),1===o.nodeType&&!J.get(o,"hasDataAttrs"))){for(n=i.length;n--;)i[n]&&0===(r=i[n].name).indexOf("data-")&&(r=Q(r.slice(5)),ne(o,r,a[r]))
J.set(o,"hasDataAttrs",!0)}return a}return"object"==typeof e?this.each((function(){Z.set(this,e)})):U(this,(function(t){var n
if(o&&void 0===t)return void 0!==(n=Z.get(o,e))||void 0!==(n=ne(o,e))?n:void 0
this.each((function(){Z.set(this,e,t)}))}),null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each((function(){Z.remove(this,e)}))}}),C.extend({queue:function(e,t,n){var r
if(e)return t=(t||"fx")+"queue",r=J.get(e,t),n&&(!r||Array.isArray(n)?r=J.access(e,t,C.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx"
var n=C.queue(e,t),r=n.length,a=n.shift(),o=C._queueHooks(e,t)
"inprogress"===a&&(a=n.shift(),r--),a&&("fx"===t&&n.unshift("inprogress"),delete o.stop,a.call(e,(function(){C.dequeue(e,t)}),o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks"
return J.get(e,n)||J.access(e,n,{empty:C.Callbacks("once memory").add((function(){J.remove(e,[t+"queue",n])}))})}}),C.fn.extend({queue:function(e,t){var n=2
return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?C.queue(this[0],e):void 0===t?this:this.each((function(){var n=C.queue(this,e,t)
C._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&C.dequeue(this,e)}))},dequeue:function(e){return this.each((function(){C.dequeue(this,e)}))},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,a=C.Deferred(),o=this,i=this.length,u=function(){--r||a.resolveWith(o,[o])}
for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";i--;)(n=J.get(o[i],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(u))
return u(),a.promise(t)}})
var re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ae=new RegExp("^(?:([+-])=|)("+re+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],ie=y.documentElement,ue=function(e){return C.contains(e.ownerDocument,e)},se={composed:!0}
ie.getRootNode&&(ue=function(e){return C.contains(e.ownerDocument,e)||e.getRootNode(se)===e.ownerDocument})
var le=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ue(e)&&"none"===C.css(e,"display")}
function ce(e,t,n,r){var a,o,i=20,u=r?function(){return r.cur()}:function(){return C.css(e,t,"")},s=u(),l=n&&n[3]||(C.cssNumber[t]?"":"px"),c=e.nodeType&&(C.cssNumber[t]||"px"!==l&&+s)&&ae.exec(C.css(e,t))
if(c&&c[3]!==l){for(s/=2,l=l||c[3],c=+s||1;i--;)C.style(e,t,c+l),(1-o)*(1-(o=u()/s||.5))<=0&&(i=0),c/=o
c*=2,C.style(e,t,c+l),n=n||[]}return n&&(c=+c||+s||0,a=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=a)),a}var de={}
function pe(e){var t,n=e.ownerDocument,r=e.nodeName,a=de[r]
return a||(t=n.body.appendChild(n.createElement(r)),a=C.css(t,"display"),t.parentNode.removeChild(t),"none"===a&&(a="block"),de[r]=a,a)}function fe(e,t){for(var n,r,a=[],o=0,i=e.length;o<i;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(a[o]=J.get(r,"display")||null,a[o]||(r.style.display="")),""===r.style.display&&le(r)&&(a[o]=pe(r))):"none"!==n&&(a[o]="none",J.set(r,"display",n)))
for(o=0;o<i;o++)null!=a[o]&&(e[o].style.display=a[o])
return e}C.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each((function(){le(this)?C(this).show():C(this).hide()}))}})
var he,me,De=/^(?:checkbox|radio)$/i,ge=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,ve=/^$|^module$|\/(?:java|ecma)script/i
he=y.createDocumentFragment().appendChild(y.createElement("div")),(me=y.createElement("input")).setAttribute("type","radio"),me.setAttribute("checked","checked"),me.setAttribute("name","t"),he.appendChild(me),D.checkClone=he.cloneNode(!0).cloneNode(!0).lastChild.checked,he.innerHTML="<textarea>x</textarea>",D.noCloneChecked=!!he.cloneNode(!0).lastChild.defaultValue,he.innerHTML="<option></option>",D.option=!!he.lastChild
var ye={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]}
function be(e,t){var n
return n=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&R(e,t)?C.merge([e],n):n}function Fe(e,t){for(var n=0,r=e.length;n<r;n++)J.set(e[n],"globalEval",!t||J.get(t[n],"globalEval"))}ye.tbody=ye.tfoot=ye.colgroup=ye.caption=ye.thead,ye.th=ye.td,D.option||(ye.optgroup=ye.option=[1,"<select multiple='multiple'>","</select>"])
var we=/<|&#?\w+;/
function Ee(e,t,n,r,a){for(var o,i,u,s,l,c,d=t.createDocumentFragment(),p=[],f=0,h=e.length;f<h;f++)if((o=e[f])||0===o)if("object"===w(o))C.merge(p,o.nodeType?[o]:o)
else if(we.test(o)){for(i=i||d.appendChild(t.createElement("div")),u=(ge.exec(o)||["",""])[1].toLowerCase(),s=ye[u]||ye._default,i.innerHTML=s[1]+C.htmlPrefilter(o)+s[2],c=s[0];c--;)i=i.lastChild
C.merge(p,i.childNodes),(i=d.firstChild).textContent=""}else p.push(t.createTextNode(o))
for(d.textContent="",f=0;o=p[f++];)if(r&&C.inArray(o,r)>-1)a&&a.push(o)
else if(l=ue(o),i=be(d.appendChild(o),"script"),l&&Fe(i),n)for(c=0;o=i[c++];)ve.test(o.type||"")&&n.push(o)
return d}var Ce=/^([^.]*)(?:\.(.+)|)/
function xe(){return!0}function Ae(){return!1}function ke(e,t){return e===function(){try{return y.activeElement}catch(e){}}()==("focus"===t)}function Te(e,t,n,r,a,o){var i,u
if("object"==typeof t){for(u in"string"!=typeof n&&(r=r||n,n=void 0),t)Te(e,u,n,r,t[u],o)
return e}if(null==r&&null==a?(a=n,r=n=void 0):null==a&&("string"==typeof n?(a=r,r=void 0):(a=r,r=n,n=void 0)),!1===a)a=Ae
else if(!a)return e
return 1===o&&(i=a,a=function(e){return C().off(e),i.apply(this,arguments)},a.guid=i.guid||(i.guid=C.guid++)),e.each((function(){C.event.add(this,t,a,r,n)}))}function Ne(e,t,n){n?(J.set(e,t,!1),C.event.add(e,t,{namespace:!1,handler:function(e){var r,a,o=J.get(this,t)
if(1&e.isTrigger&&this[t]){if(o.length)(C.event.special[t]||{}).delegateType&&e.stopPropagation()
else if(o=u.call(arguments),J.set(this,t,o),r=n(this,t),this[t](),o!==(a=J.get(this,t))||r?J.set(this,t,!1):a={},o!==a)return e.stopImmediatePropagation(),e.preventDefault(),a&&a.value}else o.length&&(J.set(this,t,{value:C.event.trigger(C.extend(o[0],C.Event.prototype),o.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===J.get(e,t)&&C.event.add(e,t,xe)}C.event={global:{},add:function(e,t,n,r,a){var o,i,u,s,l,c,d,p,f,h,m,D=J.get(e)
if(K(e))for(n.handler&&(n=(o=n).handler,a=o.selector),a&&C.find.matchesSelector(ie,a),n.guid||(n.guid=C.guid++),(s=D.events)||(s=D.events=Object.create(null)),(i=D.handle)||(i=D.handle=function(t){return void 0!==C&&C.event.triggered!==t.type?C.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(M)||[""]).length;l--;)f=m=(u=Ce.exec(t[l])||[])[1],h=(u[2]||"").split(".").sort(),f&&(d=C.event.special[f]||{},f=(a?d.delegateType:d.bindType)||f,d=C.event.special[f]||{},c=C.extend({type:f,origType:m,data:r,handler:n,guid:n.guid,selector:a,needsContext:a&&C.expr.match.needsContext.test(a),namespace:h.join(".")},o),(p=s[f])||((p=s[f]=[]).delegateCount=0,d.setup&&!1!==d.setup.call(e,r,h,i)||e.addEventListener&&e.addEventListener(f,i)),d.add&&(d.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),a?p.splice(p.delegateCount++,0,c):p.push(c),C.event.global[f]=!0)},remove:function(e,t,n,r,a){var o,i,u,s,l,c,d,p,f,h,m,D=J.hasData(e)&&J.get(e)
if(D&&(s=D.events)){for(l=(t=(t||"").match(M)||[""]).length;l--;)if(f=m=(u=Ce.exec(t[l])||[])[1],h=(u[2]||"").split(".").sort(),f){for(d=C.event.special[f]||{},p=s[f=(r?d.delegateType:d.bindType)||f]||[],u=u[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=o=p.length;o--;)c=p[o],!a&&m!==c.origType||n&&n.guid!==c.guid||u&&!u.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,d.remove&&d.remove.call(e,c))
i&&!p.length&&(d.teardown&&!1!==d.teardown.call(e,h,D.handle)||C.removeEvent(e,f,D.handle),delete s[f])}else for(f in s)C.event.remove(e,f+t[l],n,r,!0)
C.isEmptyObject(s)&&J.remove(e,"handle events")}},dispatch:function(e){var t,n,r,a,o,i,u=new Array(arguments.length),s=C.event.fix(e),l=(J.get(this,"events")||Object.create(null))[s.type]||[],c=C.event.special[s.type]||{}
for(u[0]=s,t=1;t<arguments.length;t++)u[t]=arguments[t]
if(s.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,s)){for(i=C.event.handlers.call(this,s,l),t=0;(a=i[t++])&&!s.isPropagationStopped();)for(s.currentTarget=a.elem,n=0;(o=a.handlers[n++])&&!s.isImmediatePropagationStopped();)s.rnamespace&&!1!==o.namespace&&!s.rnamespace.test(o.namespace)||(s.handleObj=o,s.data=o.data,void 0!==(r=((C.event.special[o.origType]||{}).handle||o.handler).apply(a.elem,u))&&!1===(s.result=r)&&(s.preventDefault(),s.stopPropagation()))
return c.postDispatch&&c.postDispatch.call(this,s),s.result}},handlers:function(e,t){var n,r,a,o,i,u=[],s=t.delegateCount,l=e.target
if(s&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],i={},n=0;n<s;n++)void 0===i[a=(r=t[n]).selector+" "]&&(i[a]=r.needsContext?C(a,this).index(l)>-1:C.find(a,this,null,[l]).length),i[a]&&o.push(r)
o.length&&u.push({elem:l,handlers:o})}return l=this,s<t.length&&u.push({elem:l,handlers:t.slice(s)}),u},addProp:function(e,t){Object.defineProperty(C.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[C.expando]?e:new C.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e
return De.test(t.type)&&t.click&&R(t,"input")&&Ne(t,"click",xe),!1},trigger:function(e){var t=this||e
return De.test(t.type)&&t.click&&R(t,"input")&&Ne(t,"click"),!0},_default:function(e){var t=e.target
return De.test(t.type)&&t.click&&R(t,"input")&&J.get(t,"click")||R(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},C.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},C.Event=function(e,t){if(!(this instanceof C.Event))return new C.Event(e,t)
e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?xe:Ae,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&C.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[C.expando]=!0},C.Event.prototype={constructor:C.Event,isDefaultPrevented:Ae,isPropagationStopped:Ae,isImmediatePropagationStopped:Ae,isSimulated:!1,preventDefault:function(){var e=this.originalEvent
this.isDefaultPrevented=xe,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent
this.isPropagationStopped=xe,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent
this.isImmediatePropagationStopped=xe,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},C.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},C.event.addProp),C.each({focus:"focusin",blur:"focusout"},(function(e,t){C.event.special[e]={setup:function(){return Ne(this,e,ke),!1},trigger:function(){return Ne(this,e),!0},_default:function(t){return J.get(t.target,e)},delegateType:t}})),C.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},(function(e,t){C.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,a=e.relatedTarget,o=e.handleObj
return a&&(a===r||C.contains(r,a))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}})),C.fn.extend({on:function(e,t,n,r){return Te(this,e,t,n,r)},one:function(e,t,n,r){return Te(this,e,t,n,r,1)},off:function(e,t,n){var r,a
if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,C(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this
if("object"==typeof e){for(a in e)this.off(a,t,e[a])
return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Ae),this.each((function(){C.event.remove(this,e,n,t)}))}})
var Re=/<script|<style|<link/i,Be=/checked\s*(?:[^=]|=\s*.checked.)/i,Se=/^\s*<!\[CDATA\[|\]\]>\s*$/g
function Oe(e,t){return R(e,"table")&&R(11!==t.nodeType?t:t.firstChild,"tr")&&C(e).children("tbody")[0]||e}function _e(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Ie(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Pe(e,t){var n,r,a,o,i,u
if(1===t.nodeType){if(J.hasData(e)&&(u=J.get(e).events))for(a in J.remove(t,"handle events"),u)for(n=0,r=u[a].length;n<r;n++)C.event.add(t,a,u[a][n])
Z.hasData(e)&&(o=Z.access(e),i=C.extend({},o),Z.set(t,i))}}function je(e,t){var n=t.nodeName.toLowerCase()
"input"===n&&De.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Me(e,t,n,r){t=s(t)
var a,o,i,u,l,c,d=0,p=e.length,f=p-1,h=t[0],m=g(h)
if(m||p>1&&"string"==typeof h&&!D.checkClone&&Be.test(h))return e.each((function(a){var o=e.eq(a)
m&&(t[0]=h.call(this,a,o.html())),Me(o,t,n,r)}))
if(p&&(o=(a=Ee(t,e[0].ownerDocument,!1,e,r)).firstChild,1===a.childNodes.length&&(a=o),o||r)){for(u=(i=C.map(be(a,"script"),_e)).length;d<p;d++)l=a,d!==f&&(l=C.clone(l,!0,!0),u&&C.merge(i,be(l,"script"))),n.call(e[d],l,d)
if(u)for(c=i[i.length-1].ownerDocument,C.map(i,Ie),d=0;d<u;d++)l=i[d],ve.test(l.type||"")&&!J.access(l,"globalEval")&&C.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?C._evalUrl&&!l.noModule&&C._evalUrl(l.src,{nonce:l.nonce||l.getAttribute("nonce")},c):F(l.textContent.replace(Se,""),l,c))}return e}function qe(e,t,n){for(var r,a=t?C.filter(t,e):e,o=0;null!=(r=a[o]);o++)n||1!==r.nodeType||C.cleanData(be(r)),r.parentNode&&(n&&ue(r)&&Fe(be(r,"script")),r.parentNode.removeChild(r))
return e}C.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,a,o,i,u=e.cloneNode(!0),s=ue(e)
if(!(D.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||C.isXMLDoc(e)))for(i=be(u),r=0,a=(o=be(e)).length;r<a;r++)je(o[r],i[r])
if(t)if(n)for(o=o||be(e),i=i||be(u),r=0,a=o.length;r<a;r++)Pe(o[r],i[r])
else Pe(e,u)
return(i=be(u,"script")).length>0&&Fe(i,!s&&be(e,"script")),u},cleanData:function(e){for(var t,n,r,a=C.event.special,o=0;void 0!==(n=e[o]);o++)if(K(n)){if(t=n[J.expando]){if(t.events)for(r in t.events)a[r]?C.event.remove(n,r):C.removeEvent(n,r,t.handle)
n[J.expando]=void 0}n[Z.expando]&&(n[Z.expando]=void 0)}}}),C.fn.extend({detach:function(e){return qe(this,e,!0)},remove:function(e){return qe(this,e)},text:function(e){return U(this,(function(e){return void 0===e?C.text(this):this.empty().each((function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)}))}),null,e,arguments.length)},append:function(){return Me(this,arguments,(function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Oe(this,e).appendChild(e)}))},prepend:function(){return Me(this,arguments,(function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Oe(this,e)
t.insertBefore(e,t.firstChild)}}))},before:function(){return Me(this,arguments,(function(e){this.parentNode&&this.parentNode.insertBefore(e,this)}))},after:function(){return Me(this,arguments,(function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)}))},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(C.cleanData(be(e,!1)),e.textContent="")
return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map((function(){return C.clone(this,e,t)}))},html:function(e){return U(this,(function(e){var t=this[0]||{},n=0,r=this.length
if(void 0===e&&1===t.nodeType)return t.innerHTML
if("string"==typeof e&&!Re.test(e)&&!ye[(ge.exec(e)||["",""])[1].toLowerCase()]){e=C.htmlPrefilter(e)
try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(C.cleanData(be(t,!1)),t.innerHTML=e)
t=0}catch(e){}}t&&this.empty().append(e)}),null,e,arguments.length)},replaceWith:function(){var e=[]
return Me(this,arguments,(function(t){var n=this.parentNode
C.inArray(this,e)<0&&(C.cleanData(be(this)),n&&n.replaceChild(t,this))}),e)}}),C.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},(function(e,t){C.fn[e]=function(e){for(var n,r=[],a=C(e),o=a.length-1,i=0;i<=o;i++)n=i===o?this:this.clone(!0),C(a[i])[t](n),l.apply(r,n.get())
return this.pushStack(r)}}))
var Le=new RegExp("^("+re+")(?!px)[a-z%]+$","i"),He=/^--/,$e=function(e){var t=e.ownerDocument.defaultView
return t&&t.opener||(t=r),t.getComputedStyle(e)},Ve=function(e,t,n){var r,a,o={}
for(a in t)o[a]=e.style[a],e.style[a]=t[a]
for(a in r=n.call(e),t)e.style[a]=o[a]
return r},ze=new RegExp(oe.join("|"),"i"),Ue="[\\x20\\t\\r\\n\\f]",We=new RegExp("^"+Ue+"+|((?:^|[^\\\\])(?:\\\\.)*)"+Ue+"+$","g")
function Ge(e,t,n){var r,a,o,i,u=He.test(t),s=e.style
return(n=n||$e(e))&&(i=n.getPropertyValue(t)||n[t],u&&i&&(i=i.replace(We,"$1")||void 0),""!==i||ue(e)||(i=C.style(e,t)),!D.pixelBoxStyles()&&Le.test(i)&&ze.test(t)&&(r=s.width,a=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=i,i=n.width,s.width=r,s.minWidth=a,s.maxWidth=o)),void 0!==i?i+"":i}function Ye(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments)
delete this.get}}}!function(){function e(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ie.appendChild(l).appendChild(c)
var e=r.getComputedStyle(c)
n="1%"!==e.top,s=12===t(e.marginLeft),c.style.right="60%",i=36===t(e.right),a=36===t(e.width),c.style.position="absolute",o=12===t(c.offsetWidth/3),ie.removeChild(l),c=null}}function t(e){return Math.round(parseFloat(e))}var n,a,o,i,u,s,l=y.createElement("div"),c=y.createElement("div")
c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",D.clearCloneStyle="content-box"===c.style.backgroundClip,C.extend(D,{boxSizingReliable:function(){return e(),a},pixelBoxStyles:function(){return e(),i},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),o},reliableTrDimensions:function(){var e,t,n,a
return null==u&&(e=y.createElement("table"),t=y.createElement("tr"),n=y.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",ie.appendChild(e).appendChild(t).appendChild(n),a=r.getComputedStyle(t),u=parseInt(a.height,10)+parseInt(a.borderTopWidth,10)+parseInt(a.borderBottomWidth,10)===t.offsetHeight,ie.removeChild(e)),u}}))}()
var Qe=["Webkit","Moz","ms"],Ke=y.createElement("div").style,Xe={}
function Je(e){return C.cssProps[e]||Xe[e]||(e in Ke?e:Xe[e]=function(e){for(var t=e[0].toUpperCase()+e.slice(1),n=Qe.length;n--;)if((e=Qe[n]+t)in Ke)return e}(e)||e)}var Ze=/^(none|table(?!-c[ea]).+)/,et={position:"absolute",visibility:"hidden",display:"block"},tt={letterSpacing:"0",fontWeight:"400"}
function nt(e,t,n){var r=ae.exec(t)
return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function rt(e,t,n,r,a,o){var i="width"===t?1:0,u=0,s=0
if(n===(r?"border":"content"))return 0
for(;i<4;i+=2)"margin"===n&&(s+=C.css(e,n+oe[i],!0,a)),r?("content"===n&&(s-=C.css(e,"padding"+oe[i],!0,a)),"margin"!==n&&(s-=C.css(e,"border"+oe[i]+"Width",!0,a))):(s+=C.css(e,"padding"+oe[i],!0,a),"padding"!==n?s+=C.css(e,"border"+oe[i]+"Width",!0,a):u+=C.css(e,"border"+oe[i]+"Width",!0,a))
return!r&&o>=0&&(s+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-s-u-.5))||0),s}function at(e,t,n){var r=$e(e),a=(!D.boxSizingReliable()||n)&&"border-box"===C.css(e,"boxSizing",!1,r),o=a,i=Ge(e,t,r),u="offset"+t[0].toUpperCase()+t.slice(1)
if(Le.test(i)){if(!n)return i
i="auto"}return(!D.boxSizingReliable()&&a||!D.reliableTrDimensions()&&R(e,"tr")||"auto"===i||!parseFloat(i)&&"inline"===C.css(e,"display",!1,r))&&e.getClientRects().length&&(a="border-box"===C.css(e,"boxSizing",!1,r),(o=u in e)&&(i=e[u])),(i=parseFloat(i)||0)+rt(e,t,n||(a?"border":"content"),o,r,i)+"px"}function ot(e,t,n,r,a){return new ot.prototype.init(e,t,n,r,a)}C.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Ge(e,"opacity")
return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var a,o,i,u=Q(t),s=He.test(t),l=e.style
if(s||(t=Je(u)),i=C.cssHooks[t]||C.cssHooks[u],void 0===n)return i&&"get"in i&&void 0!==(a=i.get(e,!1,r))?a:l[t]
"string"==(o=typeof n)&&(a=ae.exec(n))&&a[1]&&(n=ce(e,t,a),o="number"),null!=n&&n==n&&("number"!==o||s||(n+=a&&a[3]||(C.cssNumber[u]?"":"px")),D.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),i&&"set"in i&&void 0===(n=i.set(e,n,r))||(s?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var a,o,i,u=Q(t)
return He.test(t)||(t=Je(u)),(i=C.cssHooks[t]||C.cssHooks[u])&&"get"in i&&(a=i.get(e,!0,n)),void 0===a&&(a=Ge(e,t,r)),"normal"===a&&t in tt&&(a=tt[t]),""===n||n?(o=parseFloat(a),!0===n||isFinite(o)?o||0:a):a}}),C.each(["height","width"],(function(e,t){C.cssHooks[t]={get:function(e,n,r){if(n)return!Ze.test(C.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?at(e,t,r):Ve(e,et,(function(){return at(e,t,r)}))},set:function(e,n,r){var a,o=$e(e),i=!D.scrollboxSize()&&"absolute"===o.position,u=(i||r)&&"border-box"===C.css(e,"boxSizing",!1,o),s=r?rt(e,t,r,u,o):0
return u&&i&&(s-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-rt(e,t,"border",!1,o)-.5)),s&&(a=ae.exec(n))&&"px"!==(a[3]||"px")&&(e.style[t]=n,n=C.css(e,t)),nt(0,n,s)}}})),C.cssHooks.marginLeft=Ye(D.reliableMarginLeft,(function(e,t){if(t)return(parseFloat(Ge(e,"marginLeft"))||e.getBoundingClientRect().left-Ve(e,{marginLeft:0},(function(){return e.getBoundingClientRect().left})))+"px"})),C.each({margin:"",padding:"",border:"Width"},(function(e,t){C.cssHooks[e+t]={expand:function(n){for(var r=0,a={},o="string"==typeof n?n.split(" "):[n];r<4;r++)a[e+oe[r]+t]=o[r]||o[r-2]||o[0]
return a}},"margin"!==e&&(C.cssHooks[e+t].set=nt)})),C.fn.extend({css:function(e,t){return U(this,(function(e,t,n){var r,a,o={},i=0
if(Array.isArray(t)){for(r=$e(e),a=t.length;i<a;i++)o[t[i]]=C.css(e,t[i],!1,r)
return o}return void 0!==n?C.style(e,t,n):C.css(e,t)}),e,t,arguments.length>1)}}),C.Tween=ot,ot.prototype={constructor:ot,init:function(e,t,n,r,a,o){this.elem=e,this.prop=n,this.easing=a||C.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(C.cssNumber[n]?"":"px")},cur:function(){var e=ot.propHooks[this.prop]
return e&&e.get?e.get(this):ot.propHooks._default.get(this)},run:function(e){var t,n=ot.propHooks[this.prop]
return this.options.duration?this.pos=t=C.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):ot.propHooks._default.set(this),this}},ot.prototype.init.prototype=ot.prototype,ot.propHooks={_default:{get:function(e){var t
return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=C.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){C.fx.step[e.prop]?C.fx.step[e.prop](e):1!==e.elem.nodeType||!C.cssHooks[e.prop]&&null==e.elem.style[Je(e.prop)]?e.elem[e.prop]=e.now:C.style(e.elem,e.prop,e.now+e.unit)}}},ot.propHooks.scrollTop=ot.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},C.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},C.fx=ot.prototype.init,C.fx.step={}
var it,ut,st=/^(?:toggle|show|hide)$/,lt=/queueHooks$/
function ct(){ut&&(!1===y.hidden&&r.requestAnimationFrame?r.requestAnimationFrame(ct):r.setTimeout(ct,C.fx.interval),C.fx.tick())}function dt(){return r.setTimeout((function(){it=void 0})),it=Date.now()}function pt(e,t){var n,r=0,a={height:e}
for(t=t?1:0;r<4;r+=2-t)a["margin"+(n=oe[r])]=a["padding"+n]=e
return t&&(a.opacity=a.width=e),a}function ft(e,t,n){for(var r,a=(ht.tweeners[t]||[]).concat(ht.tweeners["*"]),o=0,i=a.length;o<i;o++)if(r=a[o].call(n,t,e))return r}function ht(e,t,n){var r,a,o=0,i=ht.prefilters.length,u=C.Deferred().always((function(){delete s.elem})),s=function(){if(a)return!1
for(var t=it||dt(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,i=l.tweens.length;o<i;o++)l.tweens[o].run(r)
return u.notifyWith(e,[l,r,n]),r<1&&i?n:(i||u.notifyWith(e,[l,1,0]),u.resolveWith(e,[l]),!1)},l=u.promise({elem:e,props:C.extend({},t),opts:C.extend(!0,{specialEasing:{},easing:C.easing._default},n),originalProperties:t,originalOptions:n,startTime:it||dt(),duration:n.duration,tweens:[],createTween:function(t,n){var r=C.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing)
return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0
if(a)return this
for(a=!0;n<r;n++)l.tweens[n].run(1)
return t?(u.notifyWith(e,[l,1,0]),u.resolveWith(e,[l,t])):u.rejectWith(e,[l,t]),this}}),c=l.props
for(function(e,t){var n,r,a,o,i
for(n in e)if(a=t[r=Q(n)],o=e[n],Array.isArray(o)&&(a=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(i=C.cssHooks[r])&&"expand"in i)for(n in o=i.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=a)
else t[r]=a}(c,l.opts.specialEasing);o<i;o++)if(r=ht.prefilters[o].call(l,e,c,l.opts))return g(r.stop)&&(C._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r
return C.map(c,ft,l),g(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),C.fx.timer(C.extend(s,{elem:e,anim:l,queue:l.opts.queue})),l}C.Animation=C.extend(ht,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t)
return ce(n.elem,e,ae.exec(t),n),n}]},tweener:function(e,t){g(e)?(t=e,e=["*"]):e=e.match(M)
for(var n,r=0,a=e.length;r<a;r++)n=e[r],ht.tweeners[n]=ht.tweeners[n]||[],ht.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,a,o,i,u,s,l,c,d="width"in t||"height"in t,p=this,f={},h=e.style,m=e.nodeType&&le(e),D=J.get(e,"fxshow")
for(r in n.queue||(null==(i=C._queueHooks(e,"fx")).unqueued&&(i.unqueued=0,u=i.empty.fire,i.empty.fire=function(){i.unqueued||u()}),i.unqueued++,p.always((function(){p.always((function(){i.unqueued--,C.queue(e,"fx").length||i.empty.fire()}))}))),t)if(a=t[r],st.test(a)){if(delete t[r],o=o||"toggle"===a,a===(m?"hide":"show")){if("show"!==a||!D||void 0===D[r])continue
m=!0}f[r]=D&&D[r]||C.style(e,r)}if((s=!C.isEmptyObject(t))||!C.isEmptyObject(f))for(r in d&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=D&&D.display)&&(l=J.get(e,"display")),"none"===(c=C.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=C.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===C.css(e,"float")&&(s||(p.done((function(){h.display=l})),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always((function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]}))),s=!1,f)s||(D?"hidden"in D&&(m=D.hidden):D=J.access(e,"fxshow",{display:l}),o&&(D.hidden=!m),m&&fe([e],!0),p.done((function(){for(r in m||fe([e]),J.remove(e,"fxshow"),f)C.style(e,r,f[r])}))),s=ft(m?D[r]:0,r,p),r in D||(D[r]=s.start,m&&(s.end=s.start,s.start=0))}],prefilter:function(e,t){t?ht.prefilters.unshift(e):ht.prefilters.push(e)}}),C.speed=function(e,t,n){var r=e&&"object"==typeof e?C.extend({},e):{complete:n||!n&&t||g(e)&&e,duration:e,easing:n&&t||t&&!g(t)&&t}
return C.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in C.fx.speeds?r.duration=C.fx.speeds[r.duration]:r.duration=C.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){g(r.old)&&r.old.call(this),r.queue&&C.dequeue(this,r.queue)},r},C.fn.extend({fadeTo:function(e,t,n,r){return this.filter(le).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var a=C.isEmptyObject(e),o=C.speed(t,n,r),i=function(){var t=ht(this,C.extend({},e),o);(a||J.get(this,"finish"))&&t.stop(!0)}
return i.finish=i,a||!1===o.queue?this.each(i):this.queue(o.queue,i)},stop:function(e,t,n){var r=function(e){var t=e.stop
delete e.stop,t(n)}
return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&this.queue(e||"fx",[]),this.each((function(){var t=!0,a=null!=e&&e+"queueHooks",o=C.timers,i=J.get(this)
if(a)i[a]&&i[a].stop&&r(i[a])
else for(a in i)i[a]&&i[a].stop&&lt.test(a)&&r(i[a])
for(a=o.length;a--;)o[a].elem!==this||null!=e&&o[a].queue!==e||(o[a].anim.stop(n),t=!1,o.splice(a,1))
!t&&n||C.dequeue(this,e)}))},finish:function(e){return!1!==e&&(e=e||"fx"),this.each((function(){var t,n=J.get(this),r=n[e+"queue"],a=n[e+"queueHooks"],o=C.timers,i=r?r.length:0
for(n.finish=!0,C.queue(this,e,[]),a&&a.stop&&a.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1))
for(t=0;t<i;t++)r[t]&&r[t].finish&&r[t].finish.call(this)
delete n.finish}))}}),C.each(["toggle","show","hide"],(function(e,t){var n=C.fn[t]
C.fn[t]=function(e,r,a){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(pt(t,!0),e,r,a)}})),C.each({slideDown:pt("show"),slideUp:pt("hide"),slideToggle:pt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},(function(e,t){C.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}})),C.timers=[],C.fx.tick=function(){var e,t=0,n=C.timers
for(it=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1)
n.length||C.fx.stop(),it=void 0},C.fx.timer=function(e){C.timers.push(e),C.fx.start()},C.fx.interval=13,C.fx.start=function(){ut||(ut=!0,ct())},C.fx.stop=function(){ut=null},C.fx.speeds={slow:600,fast:200,_default:400},C.fn.delay=function(e,t){return e=C.fx&&C.fx.speeds[e]||e,t=t||"fx",this.queue(t,(function(t,n){var a=r.setTimeout(t,e)
n.stop=function(){r.clearTimeout(a)}}))},function(){var e=y.createElement("input"),t=y.createElement("select").appendChild(y.createElement("option"))
e.type="checkbox",D.checkOn=""!==e.value,D.optSelected=t.selected,(e=y.createElement("input")).value="t",e.type="radio",D.radioValue="t"===e.value}()
var mt,Dt=C.expr.attrHandle
C.fn.extend({attr:function(e,t){return U(this,C.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each((function(){C.removeAttr(this,e)}))}}),C.extend({attr:function(e,t,n){var r,a,o=e.nodeType
if(3!==o&&8!==o&&2!==o)return void 0===e.getAttribute?C.prop(e,t,n):(1===o&&C.isXMLDoc(e)||(a=C.attrHooks[t.toLowerCase()]||(C.expr.match.bool.test(t)?mt:void 0)),void 0!==n?null===n?void C.removeAttr(e,t):a&&"set"in a&&void 0!==(r=a.set(e,n,t))?r:(e.setAttribute(t,n+""),n):a&&"get"in a&&null!==(r=a.get(e,t))?r:null==(r=C.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!D.radioValue&&"radio"===t&&R(e,"input")){var n=e.value
return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,a=t&&t.match(M)
if(a&&1===e.nodeType)for(;n=a[r++];)e.removeAttribute(n)}}),mt={set:function(e,t,n){return!1===t?C.removeAttr(e,n):e.setAttribute(n,n),n}},C.each(C.expr.match.bool.source.match(/\w+/g),(function(e,t){var n=Dt[t]||C.find.attr
Dt[t]=function(e,t,r){var a,o,i=t.toLowerCase()
return r||(o=Dt[i],Dt[i]=a,a=null!=n(e,t,r)?i:null,Dt[i]=o),a}}))
var gt=/^(?:input|select|textarea|button)$/i,vt=/^(?:a|area)$/i
function yt(e){return(e.match(M)||[]).join(" ")}function bt(e){return e.getAttribute&&e.getAttribute("class")||""}function Ft(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(M)||[]}C.fn.extend({prop:function(e,t){return U(this,C.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each((function(){delete this[C.propFix[e]||e]}))}}),C.extend({prop:function(e,t,n){var r,a,o=e.nodeType
if(3!==o&&8!==o&&2!==o)return 1===o&&C.isXMLDoc(e)||(t=C.propFix[t]||t,a=C.propHooks[t]),void 0!==n?a&&"set"in a&&void 0!==(r=a.set(e,n,t))?r:e[t]=n:a&&"get"in a&&null!==(r=a.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=C.find.attr(e,"tabindex")
return t?parseInt(t,10):gt.test(e.nodeName)||vt.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),D.optSelected||(C.propHooks.selected={get:function(e){var t=e.parentNode
return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode
t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),C.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],(function(){C.propFix[this.toLowerCase()]=this})),C.fn.extend({addClass:function(e){var t,n,r,a,o,i
return g(e)?this.each((function(t){C(this).addClass(e.call(this,t,bt(this)))})):(t=Ft(e)).length?this.each((function(){if(r=bt(this),n=1===this.nodeType&&" "+yt(r)+" "){for(o=0;o<t.length;o++)a=t[o],n.indexOf(" "+a+" ")<0&&(n+=a+" ")
i=yt(n),r!==i&&this.setAttribute("class",i)}})):this},removeClass:function(e){var t,n,r,a,o,i
return g(e)?this.each((function(t){C(this).removeClass(e.call(this,t,bt(this)))})):arguments.length?(t=Ft(e)).length?this.each((function(){if(r=bt(this),n=1===this.nodeType&&" "+yt(r)+" "){for(o=0;o<t.length;o++)for(a=t[o];n.indexOf(" "+a+" ")>-1;)n=n.replace(" "+a+" "," ")
i=yt(n),r!==i&&this.setAttribute("class",i)}})):this:this.attr("class","")},toggleClass:function(e,t){var n,r,a,o,i=typeof e,u="string"===i||Array.isArray(e)
return g(e)?this.each((function(n){C(this).toggleClass(e.call(this,n,bt(this),t),t)})):"boolean"==typeof t&&u?t?this.addClass(e):this.removeClass(e):(n=Ft(e),this.each((function(){if(u)for(o=C(this),a=0;a<n.length;a++)r=n[a],o.hasClass(r)?o.removeClass(r):o.addClass(r)
else void 0!==e&&"boolean"!==i||((r=bt(this))&&J.set(this,"__className__",r),this.setAttribute&&this.setAttribute("class",r||!1===e?"":J.get(this,"__className__")||""))})))},hasClass:function(e){var t,n,r=0
for(t=" "+e+" ";n=this[r++];)if(1===n.nodeType&&(" "+yt(bt(n))+" ").indexOf(t)>-1)return!0
return!1}})
var wt=/\r/g
C.fn.extend({val:function(e){var t,n,r,a=this[0]
return arguments.length?(r=g(e),this.each((function(n){var a
1===this.nodeType&&(null==(a=r?e.call(this,n,C(this).val()):e)?a="":"number"==typeof a?a+="":Array.isArray(a)&&(a=C.map(a,(function(e){return null==e?"":e+""}))),(t=C.valHooks[this.type]||C.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,a,"value")||(this.value=a))}))):a?(t=C.valHooks[a.type]||C.valHooks[a.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(a,"value"))?n:"string"==typeof(n=a.value)?n.replace(wt,""):null==n?"":n:void 0}}),C.extend({valHooks:{option:{get:function(e){var t=C.find.attr(e,"value")
return null!=t?t:yt(C.text(e))}},select:{get:function(e){var t,n,r,a=e.options,o=e.selectedIndex,i="select-one"===e.type,u=i?null:[],s=i?o+1:a.length
for(r=o<0?s:i?o:0;r<s;r++)if(((n=a[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!R(n.parentNode,"optgroup"))){if(t=C(n).val(),i)return t
u.push(t)}return u},set:function(e,t){for(var n,r,a=e.options,o=C.makeArray(t),i=a.length;i--;)((r=a[i]).selected=C.inArray(C.valHooks.option.get(r),o)>-1)&&(n=!0)
return n||(e.selectedIndex=-1),o}}}}),C.each(["radio","checkbox"],(function(){C.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=C.inArray(C(e).val(),t)>-1}},D.checkOn||(C.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})})),D.focusin="onfocusin"in r
var Et=/^(?:focusinfocus|focusoutblur)$/,Ct=function(e){e.stopPropagation()}
C.extend(C.event,{trigger:function(e,t,n,a){var o,i,u,s,l,c,d,p,h=[n||y],m=f.call(e,"type")?e.type:e,D=f.call(e,"namespace")?e.namespace.split("."):[]
if(i=p=u=n=n||y,3!==n.nodeType&&8!==n.nodeType&&!Et.test(m+C.event.triggered)&&(m.indexOf(".")>-1&&(D=m.split("."),m=D.shift(),D.sort()),l=m.indexOf(":")<0&&"on"+m,(e=e[C.expando]?e:new C.Event(m,"object"==typeof e&&e)).isTrigger=a?2:3,e.namespace=D.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+D.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:C.makeArray(t,[e]),d=C.event.special[m]||{},a||!d.trigger||!1!==d.trigger.apply(n,t))){if(!a&&!d.noBubble&&!v(n)){for(s=d.delegateType||m,Et.test(s+m)||(i=i.parentNode);i;i=i.parentNode)h.push(i),u=i
u===(n.ownerDocument||y)&&h.push(u.defaultView||u.parentWindow||r)}for(o=0;(i=h[o++])&&!e.isPropagationStopped();)p=i,e.type=o>1?s:d.bindType||m,(c=(J.get(i,"events")||Object.create(null))[e.type]&&J.get(i,"handle"))&&c.apply(i,t),(c=l&&i[l])&&c.apply&&K(i)&&(e.result=c.apply(i,t),!1===e.result&&e.preventDefault())
return e.type=m,a||e.isDefaultPrevented()||d._default&&!1!==d._default.apply(h.pop(),t)||!K(n)||l&&g(n[m])&&!v(n)&&((u=n[l])&&(n[l]=null),C.event.triggered=m,e.isPropagationStopped()&&p.addEventListener(m,Ct),n[m](),e.isPropagationStopped()&&p.removeEventListener(m,Ct),C.event.triggered=void 0,u&&(n[l]=u)),e.result}},simulate:function(e,t,n){var r=C.extend(new C.Event,n,{type:e,isSimulated:!0})
C.event.trigger(r,null,t)}}),C.fn.extend({trigger:function(e,t){return this.each((function(){C.event.trigger(e,t,this)}))},triggerHandler:function(e,t){var n=this[0]
if(n)return C.event.trigger(e,t,n,!0)}}),D.focusin||C.each({focus:"focusin",blur:"focusout"},(function(e,t){var n=function(e){C.event.simulate(t,e.target,C.event.fix(e))}
C.event.special[t]={setup:function(){var r=this.ownerDocument||this.document||this,a=J.access(r,t)
a||r.addEventListener(e,n,!0),J.access(r,t,(a||0)+1)},teardown:function(){var r=this.ownerDocument||this.document||this,a=J.access(r,t)-1
a?J.access(r,t,a):(r.removeEventListener(e,n,!0),J.remove(r,t))}}}))
var xt=r.location,At={guid:Date.now()},kt=/\?/
C.parseXML=function(e){var t,n
if(!e||"string"!=typeof e)return null
try{t=(new r.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||C.error("Invalid XML: "+(n?C.map(n.childNodes,(function(e){return e.textContent})).join("\n"):e)),t}
var Tt=/\[\]$/,Nt=/\r?\n/g,Rt=/^(?:submit|button|image|reset|file)$/i,Bt=/^(?:input|select|textarea|keygen)/i
function St(e,t,n,r){var a
if(Array.isArray(t))C.each(t,(function(t,a){n||Tt.test(e)?r(e,a):St(e+"["+("object"==typeof a&&null!=a?t:"")+"]",a,n,r)}))
else if(n||"object"!==w(t))r(e,t)
else for(a in t)St(e+"["+a+"]",t[a],n,r)}C.param=function(e,t){var n,r=[],a=function(e,t){var n=g(t)?t():t
r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)}
if(null==e)return""
if(Array.isArray(e)||e.jquery&&!C.isPlainObject(e))C.each(e,(function(){a(this.name,this.value)}))
else for(n in e)St(n,e[n],t,a)
return r.join("&")},C.fn.extend({serialize:function(){return C.param(this.serializeArray())},serializeArray:function(){return this.map((function(){var e=C.prop(this,"elements")
return e?C.makeArray(e):this})).filter((function(){var e=this.type
return this.name&&!C(this).is(":disabled")&&Bt.test(this.nodeName)&&!Rt.test(e)&&(this.checked||!De.test(e))})).map((function(e,t){var n=C(this).val()
return null==n?null:Array.isArray(n)?C.map(n,(function(e){return{name:t.name,value:e.replace(Nt,"\r\n")}})):{name:t.name,value:n.replace(Nt,"\r\n")}})).get()}})
var Ot=/%20/g,_t=/#.*$/,It=/([?&])_=[^&]*/,Pt=/^(.*?):[ \t]*([^\r\n]*)$/gm,jt=/^(?:GET|HEAD)$/,Mt=/^\/\//,qt={},Lt={},Ht="*/".concat("*"),$t=y.createElement("a")
function Vt(e){return function(t,n){"string"!=typeof t&&(n=t,t="*")
var r,a=0,o=t.toLowerCase().match(M)||[]
if(g(n))for(;r=o[a++];)"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function zt(e,t,n,r){var a={},o=e===Lt
function i(u){var s
return a[u]=!0,C.each(e[u]||[],(function(e,u){var l=u(t,n,r)
return"string"!=typeof l||o||a[l]?o?!(s=l):void 0:(t.dataTypes.unshift(l),i(l),!1)})),s}return i(t.dataTypes[0])||!a["*"]&&i("*")}function Ut(e,t){var n,r,a=C.ajaxSettings.flatOptions||{}
for(n in t)void 0!==t[n]&&((a[n]?e:r||(r={}))[n]=t[n])
return r&&C.extend(!0,e,r),e}$t.href=xt.href,C.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:xt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(xt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Ht,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":C.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Ut(Ut(e,C.ajaxSettings),t):Ut(C.ajaxSettings,e)},ajaxPrefilter:Vt(qt),ajaxTransport:Vt(Lt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{}
var n,a,o,i,u,s,l,c,d,p,f=C.ajaxSetup({},t),h=f.context||f,m=f.context&&(h.nodeType||h.jquery)?C(h):C.event,D=C.Deferred(),g=C.Callbacks("once memory"),v=f.statusCode||{},b={},F={},w="canceled",E={readyState:0,getResponseHeader:function(e){var t
if(l){if(!i)for(i={};t=Pt.exec(o);)i[t[1].toLowerCase()+" "]=(i[t[1].toLowerCase()+" "]||[]).concat(t[2])
t=i[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return l?o:null},setRequestHeader:function(e,t){return null==l&&(e=F[e.toLowerCase()]=F[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==l&&(f.mimeType=e),this},statusCode:function(e){var t
if(e)if(l)E.always(e[E.status])
else for(t in e)v[t]=[v[t],e[t]]
return this},abort:function(e){var t=e||w
return n&&n.abort(t),x(0,t),this}}
if(D.promise(E),f.url=((e||f.url||xt.href)+"").replace(Mt,xt.protocol+"//"),f.type=t.method||t.type||f.method||f.type,f.dataTypes=(f.dataType||"*").toLowerCase().match(M)||[""],null==f.crossDomain){s=y.createElement("a")
try{s.href=f.url,s.href=s.href,f.crossDomain=$t.protocol+"//"+$t.host!=s.protocol+"//"+s.host}catch(e){f.crossDomain=!0}}if(f.data&&f.processData&&"string"!=typeof f.data&&(f.data=C.param(f.data,f.traditional)),zt(qt,f,t,E),l)return E
for(d in(c=C.event&&f.global)&&0==C.active++&&C.event.trigger("ajaxStart"),f.type=f.type.toUpperCase(),f.hasContent=!jt.test(f.type),a=f.url.replace(_t,""),f.hasContent?f.data&&f.processData&&0===(f.contentType||"").indexOf("application/x-www-form-urlencoded")&&(f.data=f.data.replace(Ot,"+")):(p=f.url.slice(a.length),f.data&&(f.processData||"string"==typeof f.data)&&(a+=(kt.test(a)?"&":"?")+f.data,delete f.data),!1===f.cache&&(a=a.replace(It,"$1"),p=(kt.test(a)?"&":"?")+"_="+At.guid+++p),f.url=a+p),f.ifModified&&(C.lastModified[a]&&E.setRequestHeader("If-Modified-Since",C.lastModified[a]),C.etag[a]&&E.setRequestHeader("If-None-Match",C.etag[a])),(f.data&&f.hasContent&&!1!==f.contentType||t.contentType)&&E.setRequestHeader("Content-Type",f.contentType),E.setRequestHeader("Accept",f.dataTypes[0]&&f.accepts[f.dataTypes[0]]?f.accepts[f.dataTypes[0]]+("*"!==f.dataTypes[0]?", "+Ht+"; q=0.01":""):f.accepts["*"]),f.headers)E.setRequestHeader(d,f.headers[d])
if(f.beforeSend&&(!1===f.beforeSend.call(h,E,f)||l))return E.abort()
if(w="abort",g.add(f.complete),E.done(f.success),E.fail(f.error),n=zt(Lt,f,t,E)){if(E.readyState=1,c&&m.trigger("ajaxSend",[E,f]),l)return E
f.async&&f.timeout>0&&(u=r.setTimeout((function(){E.abort("timeout")}),f.timeout))
try{l=!1,n.send(b,x)}catch(e){if(l)throw e
x(-1,e)}}else x(-1,"No Transport")
function x(e,t,i,s){var d,p,y,b,F,w=t
l||(l=!0,u&&r.clearTimeout(u),n=void 0,o=s||"",E.readyState=e>0?4:0,d=e>=200&&e<300||304===e,i&&(b=function(e,t,n){for(var r,a,o,i,u=e.contents,s=e.dataTypes;"*"===s[0];)s.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"))
if(r)for(a in u)if(u[a]&&u[a].test(r)){s.unshift(a)
break}if(s[0]in n)o=s[0]
else{for(a in n){if(!s[0]||e.converters[a+" "+s[0]]){o=a
break}i||(i=a)}o=o||i}if(o)return o!==s[0]&&s.unshift(o),n[o]}(f,E,i)),!d&&C.inArray("script",f.dataTypes)>-1&&C.inArray("json",f.dataTypes)<0&&(f.converters["text script"]=function(){}),b=function(e,t,n,r){var a,o,i,u,s,l={},c=e.dataTypes.slice()
if(c[1])for(i in e.converters)l[i.toLowerCase()]=e.converters[i]
for(o=c.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!s&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),s=o,o=c.shift())if("*"===o)o=s
else if("*"!==s&&s!==o){if(!(i=l[s+" "+o]||l["* "+o]))for(a in l)if((u=a.split(" "))[1]===o&&(i=l[s+" "+u[0]]||l["* "+u[0]])){!0===i?i=l[a]:!0!==l[a]&&(o=u[0],c.unshift(u[1]))
break}if(!0!==i)if(i&&e.throws)t=i(t)
else try{t=i(t)}catch(e){return{state:"parsererror",error:i?e:"No conversion from "+s+" to "+o}}}return{state:"success",data:t}}(f,b,E,d),d?(f.ifModified&&((F=E.getResponseHeader("Last-Modified"))&&(C.lastModified[a]=F),(F=E.getResponseHeader("etag"))&&(C.etag[a]=F)),204===e||"HEAD"===f.type?w="nocontent":304===e?w="notmodified":(w=b.state,p=b.data,d=!(y=b.error))):(y=w,!e&&w||(w="error",e<0&&(e=0))),E.status=e,E.statusText=(t||w)+"",d?D.resolveWith(h,[p,w,E]):D.rejectWith(h,[E,w,y]),E.statusCode(v),v=void 0,c&&m.trigger(d?"ajaxSuccess":"ajaxError",[E,f,d?p:y]),g.fireWith(h,[E,w]),c&&(m.trigger("ajaxComplete",[E,f]),--C.active||C.event.trigger("ajaxStop")))}return E},getJSON:function(e,t,n){return C.get(e,t,n,"json")},getScript:function(e,t){return C.get(e,void 0,t,"script")}}),C.each(["get","post"],(function(e,t){C[t]=function(e,n,r,a){return g(n)&&(a=a||r,r=n,n=void 0),C.ajax(C.extend({url:e,type:t,dataType:a,data:n,success:r},C.isPlainObject(e)&&e))}})),C.ajaxPrefilter((function(e){var t
for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")})),C._evalUrl=function(e,t,n){return C.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){C.globalEval(e,t,n)}})},C.fn.extend({wrapAll:function(e){var t
return this[0]&&(g(e)&&(e=e.call(this[0])),t=C(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map((function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild
return e})).append(this)),this},wrapInner:function(e){return g(e)?this.each((function(t){C(this).wrapInner(e.call(this,t))})):this.each((function(){var t=C(this),n=t.contents()
n.length?n.wrapAll(e):t.append(e)}))},wrap:function(e){var t=g(e)
return this.each((function(n){C(this).wrapAll(t?e.call(this,n):e)}))},unwrap:function(e){return this.parent(e).not("body").each((function(){C(this).replaceWith(this.childNodes)})),this}}),C.expr.pseudos.hidden=function(e){return!C.expr.pseudos.visible(e)},C.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},C.ajaxSettings.xhr=function(){try{return new r.XMLHttpRequest}catch(e){}}
var Wt={0:200,1223:204},Gt=C.ajaxSettings.xhr()
D.cors=!!Gt&&"withCredentials"in Gt,D.ajax=Gt=!!Gt,C.ajaxTransport((function(e){var t,n
if(D.cors||Gt&&!e.crossDomain)return{send:function(a,o){var i,u=e.xhr()
if(u.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(i in e.xhrFields)u[i]=e.xhrFields[i]
for(i in e.mimeType&&u.overrideMimeType&&u.overrideMimeType(e.mimeType),e.crossDomain||a["X-Requested-With"]||(a["X-Requested-With"]="XMLHttpRequest"),a)u.setRequestHeader(i,a[i])
t=function(e){return function(){t&&(t=n=u.onload=u.onerror=u.onabort=u.ontimeout=u.onreadystatechange=null,"abort"===e?u.abort():"error"===e?"number"!=typeof u.status?o(0,"error"):o(u.status,u.statusText):o(Wt[u.status]||u.status,u.statusText,"text"!==(u.responseType||"text")||"string"!=typeof u.responseText?{binary:u.response}:{text:u.responseText},u.getAllResponseHeaders()))}},u.onload=t(),n=u.onerror=u.ontimeout=t("error"),void 0!==u.onabort?u.onabort=n:u.onreadystatechange=function(){4===u.readyState&&r.setTimeout((function(){t&&n()}))},t=t("abort")
try{u.send(e.hasContent&&e.data||null)}catch(e){if(t)throw e}},abort:function(){t&&t()}}})),C.ajaxPrefilter((function(e){e.crossDomain&&(e.contents.script=!1)})),C.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return C.globalEval(e),e}}}),C.ajaxPrefilter("script",(function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")})),C.ajaxTransport("script",(function(e){var t,n
if(e.crossDomain||e.scriptAttrs)return{send:function(r,a){t=C("<script>").attr(e.scriptAttrs||{}).prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&a("error"===e.type?404:200,e.type)}),y.head.appendChild(t[0])},abort:function(){n&&n()}}}))
var Yt,Qt=[],Kt=/(=)\?(?=&|$)|\?\?/
C.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Qt.pop()||C.expando+"_"+At.guid++
return this[e]=!0,e}}),C.ajaxPrefilter("json jsonp",(function(e,t,n){var a,o,i,u=!1!==e.jsonp&&(Kt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Kt.test(e.data)&&"data")
if(u||"jsonp"===e.dataTypes[0])return a=e.jsonpCallback=g(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,u?e[u]=e[u].replace(Kt,"$1"+a):!1!==e.jsonp&&(e.url+=(kt.test(e.url)?"&":"?")+e.jsonp+"="+a),e.converters["script json"]=function(){return i||C.error(a+" was not called"),i[0]},e.dataTypes[0]="json",o=r[a],r[a]=function(){i=arguments},n.always((function(){void 0===o?C(r).removeProp(a):r[a]=o,e[a]&&(e.jsonpCallback=t.jsonpCallback,Qt.push(a)),i&&g(o)&&o(i[0]),i=o=void 0})),"script"})),D.createHTMLDocument=((Yt=y.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Yt.childNodes.length),C.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(D.createHTMLDocument?((r=(t=y.implementation.createHTMLDocument("")).createElement("base")).href=y.location.href,t.head.appendChild(r)):t=y),o=!n&&[],(a=B.exec(e))?[t.createElement(a[1])]:(a=Ee([e],t,o),o&&o.length&&C(o).remove(),C.merge([],a.childNodes)))
var r,a,o},C.fn.load=function(e,t,n){var r,a,o,i=this,u=e.indexOf(" ")
return u>-1&&(r=yt(e.slice(u)),e=e.slice(0,u)),g(t)?(n=t,t=void 0):t&&"object"==typeof t&&(a="POST"),i.length>0&&C.ajax({url:e,type:a||"GET",dataType:"html",data:t}).done((function(e){o=arguments,i.html(r?C("<div>").append(C.parseHTML(e)).find(r):e)})).always(n&&function(e,t){i.each((function(){n.apply(this,o||[e.responseText,t,e])}))}),this},C.expr.pseudos.animated=function(e){return C.grep(C.timers,(function(t){return e===t.elem})).length},C.offset={setOffset:function(e,t,n){var r,a,o,i,u,s,l=C.css(e,"position"),c=C(e),d={}
"static"===l&&(e.style.position="relative"),u=c.offset(),o=C.css(e,"top"),s=C.css(e,"left"),("absolute"===l||"fixed"===l)&&(o+s).indexOf("auto")>-1?(i=(r=c.position()).top,a=r.left):(i=parseFloat(o)||0,a=parseFloat(s)||0),g(t)&&(t=t.call(e,n,C.extend({},u))),null!=t.top&&(d.top=t.top-u.top+i),null!=t.left&&(d.left=t.left-u.left+a),"using"in t?t.using.call(e,d):c.css(d)}},C.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each((function(t){C.offset.setOffset(this,e,t)}))
var t,n,r=this[0]
return r?r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],a={top:0,left:0}
if("fixed"===C.css(r,"position"))t=r.getBoundingClientRect()
else{for(t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;e&&(e===n.body||e===n.documentElement)&&"static"===C.css(e,"position");)e=e.parentNode
e&&e!==r&&1===e.nodeType&&((a=C(e).offset()).top+=C.css(e,"borderTopWidth",!0),a.left+=C.css(e,"borderLeftWidth",!0))}return{top:t.top-a.top-C.css(r,"marginTop",!0),left:t.left-a.left-C.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map((function(){for(var e=this.offsetParent;e&&"static"===C.css(e,"position");)e=e.offsetParent
return e||ie}))}}),C.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},(function(e,t){var n="pageYOffset"===t
C.fn[e]=function(r){return U(this,(function(e,r,a){var o
if(v(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===a)return o?o[t]:e[r]
o?o.scrollTo(n?o.pageXOffset:a,n?a:o.pageYOffset):e[r]=a}),e,r,arguments.length)}})),C.each(["top","left"],(function(e,t){C.cssHooks[t]=Ye(D.pixelPosition,(function(e,n){if(n)return n=Ge(e,t),Le.test(n)?C(e).position()[t]+"px":n}))})),C.each({Height:"height",Width:"width"},(function(e,t){C.each({padding:"inner"+e,content:t,"":"outer"+e},(function(n,r){C.fn[r]=function(a,o){var i=arguments.length&&(n||"boolean"!=typeof a),u=n||(!0===a||!0===o?"margin":"border")
return U(this,(function(t,n,a){var o
return v(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===a?C.css(t,n,u):C.style(t,n,a,u)}),t,i?a:void 0,i)}}))})),C.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],(function(e,t){C.fn[t]=function(e){return this.on(t,e)}})),C.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),(function(e,t){C.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}))
var Xt=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g
C.proxy=function(e,t){var n,r,a
if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return r=u.call(arguments,2),a=function(){return e.apply(t||this,r.concat(u.call(arguments)))},a.guid=e.guid=e.guid||C.guid++,a},C.holdReady=function(e){e?C.readyWait++:C.ready(!0)},C.isArray=Array.isArray,C.parseJSON=JSON.parse,C.nodeName=R,C.isFunction=g,C.isWindow=v,C.camelCase=Q,C.type=w,C.now=Date.now,C.isNumeric=function(e){var t=C.type(e)
return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},C.trim=function(e){return null==e?"":(e+"").replace(Xt,"$1")},void 0===(n=function(){return C}.apply(t,[]))||(e.exports=n)
var Jt=r.jQuery,Zt=r.$
return C.noConflict=function(e){return r.$===C&&(r.$=Zt),e&&r.jQuery===C&&(r.jQuery=Jt),C},void 0===a&&(r.jQuery=r.$=C),C}))},916:(e,t,n)=>{var r
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
return Array.isArray(e)&&e.forEach((function(e){t[e]=!0})),{add:function(e){t[e]=!0},has:function(e){return e in t},get size(){return Object.keys(t).length}}},w={warn:h?Function.prototype.bind.call(h.warn||h.log,h):function(){}},E=Object.prototype.toString,C=Object.prototype.hasOwnProperty,x=f&&void 0!==f.performance&&"function"==typeof f.performance.mark&&"function"==typeof f.performance.measure?f.performance:void 0,A={now:x?x.now.bind(x):Date.now,measure:x?function(e,t,n){try{x.measure(e,t,n)}catch(e){w.warn("performance.measure could not be executed because of ",e.message)}}:function(){},mark:x?x.mark.bind(x):function(){}}
function k(e,t){return e.filter((function(e){return-1===t.indexOf(e)}))}function T(e,t){return-1!==t.indexOf(e)}function N(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=t&&O("array",e)?[]:{}
for(var r in e)if(C.call(e,r)){var a=e[r]
n[r]=a===Object(a)?N(a,t):a}return n}function R(e,t){if(e!==Object(e))return e
var n={}
for(var r in t)C.call(t,r)&&C.call(e,r)&&(n[r]=R(e[r],t[r]))
return n}function B(e,t,n){for(var r in t)C.call(t,r)&&(void 0===t[r]?delete e[r]:n&&void 0!==e[r]||(e[r]=t[r]))
return e}function S(e){if(void 0===e)return"undefined"
if(null===e)return"null"
var t=E.call(e).match(/^\[object\s(.*)\]$/),n=t&&t[1]
switch(n){case"Number":return isNaN(e)?"nan":"number"
case"String":case"Boolean":case"Array":case"Set":case"Map":case"Date":case"RegExp":case"Function":case"Symbol":return n.toLowerCase()
default:return a(e)}}function O(e,t){return S(t)===e}function _(e,t){for(var n=e+""+t,r=0,a=0;a<n.length;a++)r=(r<<5)-r+n.charCodeAt(a),r|=0
var o=(4294967296+r).toString(16)
return o.length<8&&(o="0000000"+o),o.slice(-8)}function I(e){var t=String(e)
return"[object"===t.slice(0,7)?(e.name||"Error")+(e.message?": ".concat(e.message):""):t}var P=new F(["boolean","number","string"]),j=[]
function M(e,t){return e===t}function q(e,t){return e===t||e.valueOf()===t.valueOf()}function L(e){var t=Object.getPrototypeOf(e)
return t&&null!==t.constructor?e.constructor:Object}function H(e){return"flags"in e?e.flags:e.toString().match(/[gimuy]*$/)[0]}var $={undefined:M,null:M,boolean:q,number:function(e,t){return e===t||e.valueOf()===t.valueOf()||isNaN(e.valueOf())&&isNaN(t.valueOf())},string:q,symbol:M,date:q,nan:function(){return!0},regexp:function(e,t){return e.source===t.source&&H(e)===H(t)},function:M,array:function(e,t){if(e.length!==t.length)return!1
for(var n=0;n<e.length;n++)if(!z(e[n],t[n]))return!1
return!0},set:function(e,t){if(e.size!==t.size)return!1
var n=!0
return e.forEach((function(e){if(n){var r=!1
t.forEach((function(t){if(!r){var n=j
j=[],z(t,e)&&(r=!0),j=n}})),r||(n=!1)}})),n},map:function(e,t){if(e.size!==t.size)return!1
var n=!0
return e.forEach((function(e,r){if(n){var a=!1
t.forEach((function(t,n){if(!a){var o=j
j=[],$.array([t,n],[e,r])&&(a=!0),j=o}})),a||(n=!1)}})),n}},V={undefined:M,null:M,boolean:M,number:function(e,t){return e===t||isNaN(e)&&isNaN(t)},string:M,symbol:M,function:M,object:function(e,t){if(j.some((function(n){return n.a===e&&n.b===t})))return!0
j.push({a:e,b:t})
var n=S(e),r=S(t)
if("object"!==n||"object"!==r)return n===r&&$[n](e,t)
if(!1===function(e,t){return L(e)===L(t)}(e,t))return!1
var a=[],o=[]
for(var i in e)if(a.push(i),(e.constructor===Object||void 0===e.constructor||"function"!=typeof e[i]||"function"!=typeof t[i]||e[i].toString()!==t[i].toString())&&!z(e[i],t[i]))return!1
for(var u in t)o.push(u)
return $.array(a.sort(),o.sort())}}
function z(e,t){if(e===t)return!0
var n=a(e),r=a(t)
return n!==r?("object"===n&&P.has(S(e))?e.valueOf():e)===("object"===r&&P.has(S(t))?t.valueOf():t):V[n](e,t)}function U(e,t){var n=z(e,t)
return j=[],n}function W(e,t){if(2===arguments.length)return e===t||U(e,t)
for(var n=arguments.length-1;n>0;){if(!U(arguments[n-1],arguments[n]))return!1
n--}return!0}var G={altertitle:!0,collapse:!0,failOnZeroTests:!0,filter:void 0,maxDepth:5,module:void 0,moduleId:void 0,reorder:!0,requireExpects:!1,scrolltop:!0,storage:y,testId:void 0,urlConfig:[],currentModule:{name:"",tests:[],childModules:[],testsRun:0,testsIgnored:0,hooks:{before:[],beforeEach:[],afterEach:[],after:[]}},globalHooks:{},blocking:!0,callbacks:{},modules:[],queue:[],stats:{all:0,bad:0,testCount:0}},Y=p&&p.QUnit&&!p.QUnit.version&&p.QUnit.config
Y&&B(G,Y),G.modules.push(G.currentModule)
var Q=function(){function e(e){return'"'+e.toString().replace(/\\/g,"\\\\").replace(/"/g,'\\"')+'"'}function t(e){return e+""}function n(e,t,n){var r=i.separator(),a=i.indent(1)
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
return t=null===e?"null":void 0===e?"undefined":O("regexp",e)?"regexp":O("date",e)?"date":O("function",e)?"function":void 0!==e.setInterval&&void 0!==e.document&&void 0===e.nodeType?"window":9===e.nodeType?"document":e.nodeType?"node":function(e){return"[object Array]"===E.call(e)||"number"==typeof e.length&&void 0!==e.item&&(e.length?e.item(0)===e[0]:null===e.item(0)&&void 0===e[0])}(e)?"array":e.constructor===Error.prototype.constructor?"error":a(e),t},separator:function(){return this.multiline?this.HTML?"<br />":"\n":this.HTML?"&#160;":" "},indent:function(e){if(!this.multiline)return""
var t=this.indentChar
return this.HTML&&(t=t.replace(/\t/g,"   ").replace(/ /g,"&#160;")),new Array(this.depth+(e||0)).join(t)},up:function(e){this.depth+=e||1},down:function(e){this.depth-=e||1},setParser:function(e,t){this.parsers[e]=t},quote:e,literal:t,join:n,depth:1,maxDepth:G.maxDepth,parsers:{window:"[Window]",document:"[Document]",error:function(e){return'Error("'+e.message+'")'},unknown:"[Unknown]",null:"null",undefined:"undefined",function:function(e){var t="function",r="name"in e?e.name:(o.exec(e)||[])[1]
return r&&(t+=" "+r),n(t=[t+="(",i.parse(e,"functionArgs"),"){"].join(""),i.parse(e,"functionCode"),"}")},array:r,nodelist:r,arguments:r,object:function(e,t){var r=[]
if(i.maxDepth&&i.depth>i.maxDepth)return"[object Object]"
i.up()
var a=[]
for(var o in e)a.push(o)
var u=["message","name"]
for(var s in u){var l=u[s]
l in e&&!T(l,a)&&a.push(l)}a.sort()
for(var c=0;c<a.length;c++){var d=a[c],p=e[d]
r.push(i.parse(d,"key")+": "+i.parse(p,void 0,t))}return i.down(),n("{",r,"}")},node:function(e){var t=i.HTML?"&lt;":"<",n=i.HTML?"&gt;":">",r=e.nodeName.toLowerCase(),a=t+r,o=e.attributes
if(o)for(var u=0;u<o.length;u++){var s=o[u].nodeValue
s&&"inherit"!==s&&(a+=" "+o[u].nodeName+"="+i.parse(s,"attribute"))}return a+=n,3!==e.nodeType&&4!==e.nodeType||(a+=e.nodeValue),a+t+"/"+r+n},functionArgs:function(e){var t=e.length
if(!t)return""
for(var n=new Array(t);t--;)n[t]=String.fromCharCode(97+t)
return" "+n.join(", ")+" "},key:e,functionCode:"[code]",attribute:e,string:e,date:e,regexp:t,number:t,boolean:t,symbol:function(e){return e.toString()}},HTML:!1,indentChar:"  ",multiline:!0}
return i}(),K=function(){function e(t,n){o(this,e),this.name=t,this.fullName=n?n.fullName.concat(t):[],this.globalFailureCount=0,this.tests=[],this.childSuites=[],n&&n.pushChildSuite(this)}return u(e,[{key:"start",value:function(e){if(e){this._startTime=A.now()
var t=this.fullName.length
A.mark("qunit_suite_".concat(t,"_start"))}return{name:this.name,fullName:this.fullName.slice(),tests:this.tests.map((function(e){return e.start()})),childSuites:this.childSuites.map((function(e){return e.start()})),testCounts:{total:this.getTestCounts().total}}}},{key:"end",value:function(e){if(e){this._endTime=A.now()
var t=this.fullName.length,n=this.fullName.join(" – ")
A.mark("qunit_suite_".concat(t,"_end")),A.measure(0===t?"QUnit Test Run":"QUnit Test Suite: ".concat(n),"qunit_suite_".concat(t,"_start"),"qunit_suite_".concat(t,"_end"))}return{name:this.name,fullName:this.fullName.slice(),tests:this.tests.map((function(e){return e.end()})),childSuites:this.childSuites.map((function(e){return e.end()})),testCounts:this.getTestCounts(),runtime:this.getRuntime(),status:this.getStatus()}}},{key:"pushChildSuite",value:function(e){this.childSuites.push(e)}},{key:"pushTest",value:function(e){this.tests.push(e)}},{key:"getRuntime",value:function(){return Math.round(this._endTime-this._startTime)}},{key:"getTestCounts",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{passed:0,failed:0,skipped:0,todo:0,total:0}
return e.failed+=this.globalFailureCount,e.total+=this.globalFailureCount,e=this.tests.reduce((function(e,t){return t.valid&&(e[t.getStatus()]++,e.total++),e}),e),this.childSuites.reduce((function(e,t){return t.getTestCounts(e)}),e)}},{key:"getStatus",value:function(){var e=this.getTestCounts(),t=e.total,n=e.failed,r=e.skipped,a=e.todo
return n?"failed":r===t?"skipped":a===t?"todo":"passed"}}]),e}(),X=[],J=new K
function Z(e,t,n){var r=X.length?X.slice(-1)[0]:null,a=null!==r?[r.name,e].join(" > "):e,o=r?r.suiteReport:J,i=null!==r&&r.skip||n.skip,u=null!==r&&r.todo||n.todo,s={}
r&&B(s,r.testEnvironment),B(s,t)
var l={name:a,parentModule:r,hooks:{before:[],beforeEach:[],afterEach:[],after:[]},testEnvironment:s,tests:[],moduleId:_(a),testsRun:0,testsIgnored:0,childModules:[],suiteReport:new K(e,o),stats:null,skip:i,todo:!i&&u,ignored:n.ignored||!1}
return r&&r.childModules.push(l),G.modules.push(l),l}function ee(e,t,n){var r=t[n]
"function"==typeof r&&e[n].push(r),delete t[n]}function te(e,t){return function(n){G.currentModule!==e&&w.warn("The `"+t+"` hook was called inside the wrong module (`"+G.currentModule.name+"`). Instead, use hooks provided by the callback to the containing module (`"+e.name+"`). This will become an error in QUnit 3.0."),e.hooks[t].push(n)}}function ne(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}
"function"==typeof t&&(n=t,t=void 0)
var a=Z(e,t,r),o=a.testEnvironment,i=a.hooks
ee(i,o,"before"),ee(i,o,"beforeEach"),ee(i,o,"afterEach"),ee(i,o,"after")
var u={before:te(a,"before"),beforeEach:te(a,"beforeEach"),afterEach:te(a,"afterEach"),after:te(a,"after")},s=G.currentModule
if(G.currentModule=a,"function"==typeof n){X.push(a)
try{var l=n.call(a.testEnvironment,u)
l&&"function"==typeof l.then&&w.warn("Returning a promise from a module callback is not supported. Instead, use hooks for async behavior. This will become an error in QUnit 3.0.")}finally{X.pop(),G.currentModule=a.parentModule||s}}}var re=!1
function ae(e,t,n){var r,a=re&&(r=G.modules.filter((function(e){return!e.ignored})).map((function(e){return e.moduleId})),!X.some((function(e){return r.includes(e.moduleId)})))
ne(e,t,n,{ignored:a})}ae.only=function(){re||(G.modules.length=0,G.queue.length=0,G.currentModule.ignored=!0),re=!0,ne.apply(void 0,arguments)},ae.skip=function(e,t,n){re||ne(e,t,n,{skip:!0})},ae.todo=function(e,t,n){re||ne(e,t,n,{todo:!0})}
var oe=(ue(0)||"").replace(/(:\d+)+\)?/,"").replace(/.+[/\\]/,"")
function ie(e,t){if(t=void 0===t?4:t,e&&e.stack){var n=e.stack.split("\n")
if(/^error$/i.test(n[0])&&n.shift(),oe){for(var r=[],a=t;a<n.length&&-1===n[a].indexOf(oe);a++)r.push(n[a])
if(r.length)return r.join("\n")}return n[t]}}function ue(e){var t=new Error
if(!t.stack)try{throw t}catch(e){t=e}return ie(t,e)}var se=function(){function e(t){o(this,e),this.test=t}return u(e,[{key:"timeout",value:function(e){if("number"!=typeof e)throw new Error("You must pass a number as the duration to assert.timeout")
this.test.timeout=e,G.timeout&&(D(G.timeout),G.timeout=null,G.timeoutHandler&&this.test.timeout>0&&this.test.internalResetTimeout(this.test.timeout))}},{key:"step",value:function(e){var t=e,n=!!e
this.test.steps.push(e),void 0===e||""===e?t="You must provide a message to assert.step":"string"!=typeof e&&(t="You must provide a string value to assert.step",n=!1),this.pushResult({result:n,message:t})}},{key:"verifySteps",value:function(e,t){var n=this.test.steps.slice()
this.deepEqual(n,e,t),this.test.steps.length=0}},{key:"expect",value:function(e){if(1!==arguments.length)return this.test.expected
this.test.expected=e}},{key:"async",value:function(e){var t=void 0===e?1:e
return this.test.internalStop(t)}},{key:"push",value:function(t,n,r,a,o){return w.warn("assert.push is deprecated and will be removed in QUnit 3.0. Please use assert.pushResult instead (https://api.qunitjs.com/assert/pushResult)."),(this instanceof e?this:G.current.assert).pushResult({result:t,actual:n,expected:r,message:a,negative:o})}},{key:"pushResult",value:function(t){var n=this,r=n instanceof e&&n.test||G.current
if(!r)throw new Error("assertion outside test context, in "+ue(2))
return n instanceof e||(n=r.assert),n.test.pushResult(t)}},{key:"ok",value:function(e,t){t||(t=e?"okay":"failed, expected argument to be truthy, was: ".concat(Q.parse(e))),this.pushResult({result:!!e,actual:e,expected:!0,message:t})}},{key:"notOk",value:function(e,t){t||(t=e?"failed, expected argument to be falsy, was: ".concat(Q.parse(e)):"okay"),this.pushResult({result:!e,actual:e,expected:!1,message:t})}},{key:"true",value:function(e,t){this.pushResult({result:!0===e,actual:e,expected:!0,message:t})}},{key:"false",value:function(e,t){this.pushResult({result:!1===e,actual:e,expected:!1,message:t})}},{key:"equal",value:function(e,t,n){this.pushResult({result:t==e,actual:e,expected:t,message:n})}},{key:"notEqual",value:function(e,t,n){this.pushResult({result:t!=e,actual:e,expected:t,message:n,negative:!0})}},{key:"propEqual",value:function(e,t,n){e=N(e),t=N(t),this.pushResult({result:W(e,t),actual:e,expected:t,message:n})}},{key:"notPropEqual",value:function(e,t,n){e=N(e),t=N(t),this.pushResult({result:!W(e,t),actual:e,expected:t,message:n,negative:!0})}},{key:"propContains",value:function(e,t,n){e=R(e,t),t=N(t,!1),this.pushResult({result:W(e,t),actual:e,expected:t,message:n})}},{key:"notPropContains",value:function(e,t,n){e=R(e,t),t=N(t),this.pushResult({result:!W(e,t),actual:e,expected:t,message:n,negative:!0})}},{key:"deepEqual",value:function(e,t,n){this.pushResult({result:W(e,t),actual:e,expected:t,message:n})}},{key:"notDeepEqual",value:function(e,t,n){this.pushResult({result:!W(e,t),actual:e,expected:t,message:n,negative:!0})}},{key:"strictEqual",value:function(e,t,n){this.pushResult({result:t===e,actual:e,expected:t,message:n})}},{key:"notStrictEqual",value:function(e,t,n){this.pushResult({result:t!==e,actual:e,expected:t,message:n,negative:!0})}},{key:"throws",value:function(t,n,r){var a=s(le(n,r,"throws"),2)
n=a[0],r=a[1]
var o=this instanceof e&&this.test||G.current
if("function"==typeof t){var i,u=!1
o.ignoreGlobalErrors=!0
try{t.call(o.testEnvironment)}catch(e){i=e}if(o.ignoreGlobalErrors=!1,i){var l=s(ce(i,n,r),3)
u=l[0],n=l[1],r=l[2]}o.assert.pushResult({result:u,actual:i&&I(i),expected:n,message:r})}else o.assert.pushResult({result:!1,actual:t,message:'The value provided to `assert.throws` in "'+o.testName+'" was not a function.'})}},{key:"rejects",value:function(t,n,r){var a=s(le(n,r,"rejects"),2)
n=a[0],r=a[1]
var o=this instanceof e&&this.test||G.current,i=t&&t.then
if("function"==typeof i){var u=this.async()
return i.call(t,(function(){o.assert.pushResult({result:!1,message:'The promise returned by the `assert.rejects` callback in "'+o.testName+'" did not reject.',actual:t}),u()}),(function(e){var t,a=s(ce(e,n,r),3)
t=a[0],n=a[1],r=a[2],o.assert.pushResult({result:t,actual:e&&I(e),expected:n,message:r}),u()}))}o.assert.pushResult({result:!1,message:'The value provided to `assert.rejects` in "'+o.testName+'" was not a promise.',actual:t})}}]),e}()
function le(e,t,n){var r=S(e)
if("string"===r){if(void 0===t)return t=e,[e=void 0,t]
throw new Error("assert."+n+" does not accept a string value for the expected argument.\nUse a non-string object value (e.g. RegExp or validator function) instead if necessary.")}if(e&&"regexp"!==r&&"function"!==r&&"object"!==r)throw new Error("Invalid expected value type ("+r+") provided to assert."+n+".")
return[e,t]}function ce(e,t,n){var r=!1,a=S(t)
if(t){if("regexp"===a)r=t.test(I(e)),t=String(t)
else if("function"===a&&void 0!==t.prototype&&e instanceof t)r=!0
else if("object"===a)r=e instanceof t.constructor&&e.name===t.name&&e.message===t.message,t=I(t)
else if("function"===a)try{r=!0===t.call({},e),t=null}catch(e){t=I(e)}}else r=!0
return[r,t,n]}se.prototype.raises=se.prototype.throws
var de=Object.create(null),pe=["error","runStart","suiteStart","testStart","assertion","testEnd","suiteEnd","runEnd"]
function fe(e,t){if("string"!=typeof e)throw new TypeError("eventName must be a string when emitting an event")
for(var n=de[e],r=n?l(n):[],a=0;a<r.length;a++)r[a](t)}var he="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}
function me(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var De={exports:{}}
!function(){var e=function(){if("undefined"!=typeof globalThis)return globalThis
if("undefined"!=typeof self)return self
if("undefined"!=typeof window)return window
if(void 0!==he)return he
throw new Error("unable to locate global object")}()
if("function"!=typeof e.Promise){var t=setTimeout
o.prototype.catch=function(e){return this.then(null,e)},o.prototype.then=function(e,t){var n=new this.constructor(r)
return i(this,new c(e,t,n)),n},o.prototype.finally=function(e){var t=this.constructor
return this.then((function(n){return t.resolve(e()).then((function(){return n}))}),(function(n){return t.resolve(e()).then((function(){return t.reject(n)}))}))},o.all=function(e){return new o((function(t,r){if(!n(e))return r(new TypeError("Promise.all accepts an array"))
var o=Array.prototype.slice.call(e)
if(0===o.length)return t([])
var i=o.length
function u(e,n){try{if(n&&("object"===a(n)||"function"==typeof n)){var s=n.then
if("function"==typeof s)return void s.call(n,(function(t){u(e,t)}),r)}o[e]=n,0==--i&&t(o)}catch(e){r(e)}}for(var s=0;s<o.length;s++)u(s,o[s])}))},o.allSettled=function(e){return new this((function(t,n){if(!e||void 0===e.length)return n(new TypeError(a(e)+" "+e+" is not iterable(cannot read property Symbol(Symbol.iterator))"))
var r=Array.prototype.slice.call(e)
if(0===r.length)return t([])
var o=r.length
function i(e,n){if(n&&("object"===a(n)||"function"==typeof n)){var u=n.then
if("function"==typeof u)return void u.call(n,(function(t){i(e,t)}),(function(n){r[e]={status:"rejected",reason:n},0==--o&&t(r)}))}r[e]={status:"fulfilled",value:n},0==--o&&t(r)}for(var u=0;u<r.length;u++)i(u,r[u])}))},o.resolve=function(e){return e&&"object"===a(e)&&e.constructor===o?e:new o((function(t){t(e)}))},o.reject=function(e){return new o((function(t,n){n(e)}))},o.race=function(e){return new o((function(t,r){if(!n(e))return r(new TypeError("Promise.race accepts an array"))
for(var a=0,i=e.length;a<i;a++)o.resolve(e[a]).then(t,r)}))},o._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){t(e,0)},o._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},De.exports=o}else De.exports=e.Promise
function n(e){return Boolean(e&&void 0!==e.length)}function r(){}function o(e){if(!(this instanceof o))throw new TypeError("Promises must be constructed via new")
if("function"!=typeof e)throw new TypeError("not a function")
this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],d(e,this)}function i(e,t){for(;3===e._state;)e=e._value
0!==e._state?(e._handled=!0,o._immediateFn((function(){var n=1===e._state?t.onFulfilled:t.onRejected
if(null!==n){var r
try{r=n(e._value)}catch(e){return void s(t.promise,e)}u(t.promise,r)}else(1===e._state?u:s)(t.promise,e._value)}))):e._deferreds.push(t)}function u(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.")
if(t&&("object"===a(t)||"function"==typeof t)){var n=t.then
if(t instanceof o)return e._state=3,e._value=t,void l(e)
if("function"==typeof n)return void d((r=n,i=t,function(){r.apply(i,arguments)}),e)}e._state=1,e._value=t,l(e)}catch(t){s(e,t)}var r,i}function s(e,t){e._state=2,e._value=t,l(e)}function l(e){2===e._state&&0===e._deferreds.length&&o._immediateFn((function(){e._handled||o._unhandledRejectionFn(e._value)}))
for(var t=0,n=e._deferreds.length;t<n;t++)i(e,e._deferreds[t])
e._deferreds=null}function c(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function d(e,t){var n=!1
try{e((function(e){n||(n=!0,u(t,e))}),(function(e){n||(n=!0,s(t,e))}))}catch(e){if(n)return
n=!0,s(t,e)}}}()
var ge=De.exports
function ve(e,t){var n=G.callbacks[e]
if("log"!==e){var r=ge.resolve()
return n.forEach((function(e){r=r.then((function(){return ge.resolve(e(t))}))})),r}n.map((function(e){return e(t)}))}var ye,be=0,Fe=[]
function we(){var e,t
e=A.now(),G.depth=(G.depth||0)+1,Ee(e),G.depth--,Fe.length||G.blocking||G.current||(G.blocking||G.queue.length||0!==G.depth?(t=G.queue.shift()(),Fe.push.apply(Fe,l(t)),be>0&&be--,we()):function(){var e
if(0===G.stats.testCount&&!0===G.failOnZeroTests)return e=G.filter&&G.filter.length?new Error('No tests matched the filter "'.concat(G.filter,'".')):G.module&&G.module.length?new Error('No tests matched the module "'.concat(G.module,'".')):G.moduleId&&G.moduleId.length?new Error('No tests matched the moduleId "'.concat(G.moduleId,'".')):G.testId&&G.testId.length?new Error('No tests matched the testId "'.concat(G.testId,'".')):new Error("No tests were run."),Se("global failure",B((function(t){t.pushResult({result:!1,message:e.message,source:e.stack})}),{validTest:!0})),void we()
var t=G.storage,n=Math.round(A.now()-G.started),r=G.stats.all-G.stats.bad
Ce.finished=!0,fe("runEnd",J.end(!0)),ve("done",{passed:r,failed:G.stats.bad,total:G.stats.all,runtime:n}).then((function(){if(t&&0===G.stats.bad)for(var e=t.length-1;e>=0;e--){var n=t.key(e)
0===n.indexOf("qunit-test-")&&t.removeItem(n)}}))}())}function Ee(e){if(Fe.length&&!G.blocking){var t=A.now()-e
if(!m||G.updateRate<=0||t<G.updateRate){var n=Fe.shift()
ge.resolve(n()).then((function(){Fe.length?Ee(e):we()}))}else m(we)}}var Ce={finished:!1,add:function(e,t,n){if(t)G.queue.splice(be++,0,e)
else if(n){ye||(ye=function(e){var t=parseInt(_(e),16)||-1
return function(){return t^=t<<13,t^=t>>>17,(t^=t<<5)<0&&(t+=4294967296),t/4294967296}}(n))
var r=Math.floor(ye()*(G.queue.length-be+1))
G.queue.splice(be+r,0,e)}else G.queue.push(e)},advance:we,taskCount:function(){return Fe.length}},xe=function(){function e(t,n,r){o(this,e),this.name=t,this.suiteName=n.name,this.fullName=n.fullName.concat(t),this.runtime=0,this.assertions=[],this.skipped=!!r.skip,this.todo=!!r.todo,this.valid=r.valid,this._startTime=0,this._endTime=0,n.pushTest(this)}return u(e,[{key:"start",value:function(e){return e&&(this._startTime=A.now(),A.mark("qunit_test_start")),{name:this.name,suiteName:this.suiteName,fullName:this.fullName.slice()}}},{key:"end",value:function(e){if(e&&(this._endTime=A.now(),A)){A.mark("qunit_test_end")
var t=this.fullName.join(" – ")
A.measure("QUnit Test: ".concat(t),"qunit_test_start","qunit_test_end")}return B(this.start(),{runtime:this.getRuntime(),status:this.getStatus(),errors:this.getFailedAssertions(),assertions:this.getAssertions()})}},{key:"pushAssertion",value:function(e){this.assertions.push(e)}},{key:"getRuntime",value:function(){return Math.round(this._endTime-this._startTime)}},{key:"getStatus",value:function(){return this.skipped?"skipped":(this.getFailedAssertions().length>0?this.todo:!this.todo)?this.todo?"todo":"passed":"failed"}},{key:"getFailedAssertions",value:function(){return this.assertions.filter((function(e){return!e.passed}))}},{key:"getAssertions",value:function(){return this.assertions.slice()}},{key:"slimAssertions",value:function(){this.assertions=this.assertions.map((function(e){return delete e.actual,delete e.expected,e}))}}]),e}()
function Ae(e){if(this.expected=null,this.assertions=[],this.module=G.currentModule,this.steps=[],this.timeout=void 0,this.data=void 0,this.withData=!1,this.pauses=new b,this.nextPauseId=1,this.stackOffset=3,B(this,e),this.module.skip?(this.skip=!0,this.todo=!1):this.module.todo&&!this.skip&&(this.todo=!0),Ce.finished)w.warn("Unexpected test after runEnd. This is unstable and will fail in QUnit 3.0.")
else{if(!this.skip&&"function"!=typeof this.callback){var t=this.todo?"QUnit.todo":"QUnit.test"
throw new TypeError("You must provide a callback to ".concat(t,'("').concat(this.testName,'")'))}for(var n=0,r=this.module.tests;n<r.length;n++)this.module.tests[n].name===this.testName&&(this.testName+=" ")
this.testId=_(this.module.name,this.testName),++Ae.count,this.errorForStack=new Error,this.callback&&this.callback.validTest&&(this.errorForStack.stack=void 0),this.testReport=new xe(this.testName,this.module.suiteReport,{todo:this.todo,skip:this.skip,valid:this.valid()}),this.module.tests.push({name:this.testName,testId:this.testId,skip:!!this.skip}),this.skip?(this.callback=function(){},this.async=!1,this.expected=0):this.assert=new se(this)}}function ke(){if(!G.current)throw new Error("pushFailure() assertion outside test context, in "+ue(2))
var e=G.current
return e.pushFailure.apply(e,arguments)}function Te(){if(G.pollution=[],G.noglobals)for(var e in p)if(C.call(p,e)){if(/^qunit-test-output/.test(e))continue
G.pollution.push(e)}}Ae.count=0,Ae.prototype={get stack(){return ie(this.errorForStack,this.stackOffset)},before:function(){var e=this,t=this.module,n=function(e){for(var t=e,n=[];t&&0===t.testsRun;)n.push(t),t=t.parentModule
return n.reverse()}(t),r=ge.resolve()
return n.forEach((function(e){r=r.then((function(){return e.stats={all:0,bad:0,started:A.now()},fe("suiteStart",e.suiteReport.start(!0)),ve("moduleStart",{name:e.name,tests:e.tests})}))})),r.then((function(){return G.current=e,e.testEnvironment=B({},t.testEnvironment),e.started=A.now(),fe("testStart",e.testReport.start(!0)),ve("testStart",{name:e.testName,module:t.name,testId:e.testId,previousFailure:e.previousFailure}).then((function(){G.pollution||Te()}))}))},run:function(){if(G.current=this,G.notrycatch)e(this)
else try{e(this)}catch(e){this.pushFailure("Died on test #"+(this.assertions.length+1)+": "+(e.message||e)+"\n"+this.stack,ie(e,0)),Te(),G.blocking&&Ie(this)}function e(e){var t
t=e.withData?e.callback.call(e.testEnvironment,e.assert,e.data):e.callback.call(e.testEnvironment,e.assert),e.resolvePromise(t),0===e.timeout&&e.pauses.size>0&&ke("Test did not finish synchronously even though assert.timeout( 0 ) was used.",ue(2))}},after:function(){!function(){var e=G.pollution
Te()
var t=k(G.pollution,e)
t.length>0&&ke("Introduced global variable(s): "+t.join(", "))
var n=k(e,G.pollution)
n.length>0&&ke("Deleted global variable(s): "+n.join(", "))}()},queueGlobalHook:function(e,t){var n=this
return function(){var r
if(G.current=n,G.notrycatch)r=e.call(n.testEnvironment,n.assert)
else try{r=e.call(n.testEnvironment,n.assert)}catch(e){return void n.pushFailure("Global "+t+" failed on "+n.testName+": "+I(e),ie(e,0))}n.resolvePromise(r,t)}},queueHook:function(e,t,n){var r=this,a=function(){var n=e.call(r.testEnvironment,r.assert)
r.resolvePromise(n,t)}
return function(){if("before"===t){if(0!==n.testsRun)return
r.preserveEnvironment=!0}if("after"!==t||function(e){return e.testsRun===je(e).filter((function(e){return!e.skip})).length-1}(n)||!(G.queue.length>0||Ce.taskCount()>2))if(G.current=r,G.notrycatch)a()
else try{a()}catch(e){r.pushFailure(t+" failed on "+r.testName+": "+(e.message||e),ie(e,0))}}},hooks:function(e){var t=[]
return this.skip||(function(n){if(("beforeEach"===e||"afterEach"===e)&&G.globalHooks[e])for(var r=0;r<G.globalHooks[e].length;r++)t.push(n.queueGlobalHook(G.globalHooks[e][r],e))}(this),function n(r,a){if(a.parentModule&&n(r,a.parentModule),a.hooks[e].length)for(var o=0;o<a.hooks[e].length;o++)t.push(r.queueHook(a.hooks[e][o],e,a))}(this,this.module)),t},finish:function(){if(G.current=this,m&&(D(this.timeout),G.timeoutHandler=null),this.callback=void 0,this.steps.length){var e=this.steps.join(", ")
this.pushFailure("Expected assert.verifySteps() to be called before end of test "+"after using assert.step(). Unverified steps: ".concat(e),this.stack)}G.requireExpects&&null===this.expected?this.pushFailure("Expected number of assertions to be defined, but expect() was not called.",this.stack):null!==this.expected&&this.expected!==this.assertions.length?this.pushFailure("Expected "+this.expected+" assertions, but "+this.assertions.length+" were run",this.stack):null!==this.expected||this.assertions.length||this.pushFailure("Expected at least one assertion, but none were run - call expect(0) to accept zero assertions.",this.stack)
var t=this.module,n=t.name,r=this.testName,a=!!this.skip,o=!!this.todo,i=0,u=G.storage
this.runtime=Math.round(A.now()-this.started),G.stats.all+=this.assertions.length,G.stats.testCount+=1,t.stats.all+=this.assertions.length
for(var s=0;s<this.assertions.length;s++)this.assertions[s].result||(i++,G.stats.bad++,t.stats.bad++)
a?qe(t):function(e){for(e.testsRun++;e=e.parentModule;)e.testsRun++}(t),u&&(i?u.setItem("qunit-test-"+n+"-"+r,i):u.removeItem("qunit-test-"+n+"-"+r)),fe("testEnd",this.testReport.end(!0)),this.testReport.slimAssertions()
var c=this
return ve("testDone",{name:r,module:n,skipped:a,todo:o,failed:i,passed:this.assertions.length-i,total:this.assertions.length,runtime:a?0:this.runtime,assertions:this.assertions,testId:this.testId,get source(){return c.stack}}).then((function(){if(Me(t)){for(var e=[t],n=t.parentModule;n&&Me(n);)e.push(n),n=n.parentModule
var r=ge.resolve()
return e.forEach((function(e){r=r.then((function(){return function(e){for(var t=[e];t.length;){var n=t.shift()
n.hooks={},t.push.apply(t,l(n.childModules))}return fe("suiteEnd",e.suiteReport.end(!0)),ve("moduleDone",{name:e.name,tests:e.tests,failed:e.stats.bad,passed:e.stats.all-e.stats.bad,total:e.stats.all,runtime:Math.round(A.now()-e.stats.started)})}(e)}))})),r}})).then((function(){G.current=void 0}))},preserveTestEnvironment:function(){this.preserveEnvironment&&(this.module.testEnvironment=this.testEnvironment,this.testEnvironment=B({},this.module.testEnvironment))},queue:function(){var e=this
if(this.valid()){var t=G.storage&&+G.storage.getItem("qunit-test-"+this.module.name+"-"+this.testName),n=G.reorder&&!!t
this.previousFailure=!!t,Ce.add((function(){return[function(){return e.before()}].concat(l(e.hooks("before")),[function(){e.preserveTestEnvironment()}],l(e.hooks("beforeEach")),[function(){e.run()}],l(e.hooks("afterEach").reverse()),l(e.hooks("after").reverse()),[function(){e.after()},function(){return e.finish()}])}),n,G.seed)}else qe(this.module)},pushResult:function(e){if(this!==G.current){var t=e&&e.message||"",n=this&&this.testName||""
throw new Error("Assertion occurred after test finished.\n> Test: "+n+"\n> Message: "+t+"\n")}var r={module:this.module.name,name:this.testName,result:e.result,message:e.message,actual:e.actual,testId:this.testId,negative:e.negative||!1,runtime:Math.round(A.now()-this.started),todo:!!this.todo}
if(C.call(e,"expected")&&(r.expected=e.expected),!e.result){var a=e.source||ue()
a&&(r.source=a)}this.logAssertion(r),this.assertions.push({result:!!e.result,message:e.message})},pushFailure:function(e,t,n){if(!(this instanceof Ae))throw new Error("pushFailure() assertion outside test context, was "+ue(2))
this.pushResult({result:!1,message:e||"error",actual:n||null,source:t})},logAssertion:function(e){ve("log",e)
var t={passed:e.result,actual:e.actual,expected:e.expected,message:e.message,stack:e.source,todo:e.todo}
this.testReport.pushAssertion(t),fe("assertion",t)},internalResetTimeout:function(e){D(G.timeout),G.timeout=m(G.timeoutHandler(e),e)},internalStop:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1
G.blocking=!0
var t,n=this,r=this.nextPauseId++,a={cancelled:!1,remaining:e}
function o(){if(!a.cancelled){if(void 0===G.current)throw new Error("Unexpected release of async pause after tests finished.\n"+"> Test: ".concat(n.testName," [async #").concat(r,"]"))
if(G.current!==n)throw new Error("Unexpected release of async pause during a different test.\n"+"> Test: ".concat(n.testName," [async #").concat(r,"]"))
if(a.remaining<=0)throw new Error("Tried to release async pause that was already released.\n"+"> Test: ".concat(n.testName," [async #").concat(r,"]"))
a.remaining--,0===a.remaining&&n.pauses.delete(r),Pe(n)}}return n.pauses.set(r,a),m&&("number"==typeof n.timeout?t=n.timeout:"number"==typeof G.testTimeout&&(t=G.testTimeout),"number"==typeof t&&t>0&&(G.timeoutHandler=function(e){return function(){G.timeout=null,a.cancelled=!0,n.pauses.delete(r),n.pushFailure("Test took longer than ".concat(e,"ms; test timed out."),ue(2)),Pe(n)}},D(G.timeout),G.timeout=m(G.timeoutHandler(t),t))),o},resolvePromise:function(e,t){if(null!=e){var n=this,r=e.then
if("function"==typeof r){var a=n.internalStop(),o=function(){a()}
G.notrycatch?r.call(e,o):r.call(e,o,(function(e){var r="Promise rejected "+(t?t.replace(/Each$/,""):"during")+' "'+n.testName+'": '+(e&&e.message||e)
n.pushFailure(r,ie(e,0)),Te(),Ie(n)}))}}},valid:function(){if(this.callback&&this.callback.validTest)return!0
if(!function e(t,n){return!n||!n.length||T(t.moduleId,n)||t.parentModule&&e(t.parentModule,n)}(this.module,G.moduleId))return!1
if(G.testId&&G.testId.length&&!T(this.testId,G.testId))return!1
var e=G.module&&G.module.toLowerCase()
if(!function e(t,n){return!n||(t.name?t.name.toLowerCase():null)===n||!!t.parentModule&&e(t.parentModule,n)}(this.module,e))return!1
var t=G.filter
if(!t)return!0
var n=/^(!?)\/([\w\W]*)\/(i?$)/.exec(t),r=this.module.name+": "+this.testName
return n?this.regexFilter(!!n[1],n[2],n[3],r):this.stringFilter(t,r)},regexFilter:function(e,t,n,r){return new RegExp(t,n).test(r)!==e},stringFilter:function(e,t){e=e.toLowerCase(),t=t.toLowerCase()
var n="!"!==e.charAt(0)
return n||(e=e.slice(1)),-1!==t.indexOf(e)?n:!n}}
var Ne=!1
function Re(e){Ne||G.currentModule.ignored||new Ae(e).queue()}function Be(e){G.currentModule.ignored||(Ne||(G.queue.length=0,Ne=!0),new Ae(e).queue())}function Se(e,t){Re({testName:e,callback:t})}function Oe(e,t){return"".concat(e," [").concat(t,"]")}function _e(e,t){if(Array.isArray(e))for(var n=0;n<e.length;n++)t(e[n],n)
else{if("object"!==a(e)||null===e)throw new Error("test.each() expects an array or object as input, but\nfound ".concat(a(e)," instead."))
for(var r in e)t(e[r],r)}}function Ie(e){e.pauses.forEach((function(e){e.cancelled=!0})),e.pauses.clear(),Pe(e)}function Pe(e){e.pauses.size>0||(m?(D(G.timeout),G.timeout=m((function(){e.pauses.size>0||(D(G.timeout),G.timeout=null,G.blocking=!1,Ce.advance())}))):(G.blocking=!1,Ce.advance()))}function je(e){for(var t=[].concat(e.tests),n=l(e.childModules);n.length;){var r=n.shift()
t.push.apply(t,r.tests),n.push.apply(n,l(r.childModules))}return t}function Me(e){return e.testsRun+e.testsIgnored===je(e).length}function qe(e){for(e.testsIgnored++;e=e.parentModule;)e.testsIgnored++}B(Se,{todo:function(e,t){Re({testName:e,callback:t,todo:!0})},skip:function(e){Re({testName:e,skip:!0})},only:function(e,t){Be({testName:e,callback:t})},each:function(e,t,n){_e(t,(function(t,r){Re({testName:Oe(e,r),callback:n,withData:!0,stackOffset:5,data:t})}))}}),Se.todo.each=function(e,t,n){_e(t,(function(t,r){Re({testName:Oe(e,r),callback:n,todo:!0,withData:!0,stackOffset:5,data:t})}))},Se.skip.each=function(e,t){_e(t,(function(t,n){Re({testName:Oe(e,n),stackOffset:5,skip:!0})}))},Se.only.each=function(e,t,n){_e(t,(function(t,r){Be({testName:Oe(e,r),callback:n,withData:!0,stackOffset:5,data:t})}))}
var Le,He,$e,Ve,ze=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
o(this,e),this.log=n.log||Function.prototype.bind.call(h.log,h),t.on("error",this.onError.bind(this)),t.on("runStart",this.onRunStart.bind(this)),t.on("testStart",this.onTestStart.bind(this)),t.on("testEnd",this.onTestEnd.bind(this)),t.on("runEnd",this.onRunEnd.bind(this))}return u(e,[{key:"onError",value:function(e){this.log("error",e)}},{key:"onRunStart",value:function(e){this.log("runStart",e)}},{key:"onTestStart",value:function(e){this.log("testStart",e)}},{key:"onTestEnd",value:function(e){this.log("testEnd",e)}},{key:"onRunEnd",value:function(e){this.log("runEnd",e)}}],[{key:"init",value:function(t,n){return new e(t,n)}}]),e}(),Ue=!0
if("undefined"!=typeof process){var We=process.env||{}
Le=We.FORCE_COLOR,He=We.NODE_DISABLE_COLORS,$e=We.NO_COLOR,Ve=We.TERM,Ue=process.stdout&&process.stdout.isTTY}var Ge={enabled:!He&&null==$e&&"dumb"!==Ve&&(null!=Le&&"0"!==Le||Ue),reset:Qe(0,0),bold:Qe(1,22),dim:Qe(2,22),italic:Qe(3,23),underline:Qe(4,24),inverse:Qe(7,27),hidden:Qe(8,28),strikethrough:Qe(9,29),black:Qe(30,39),red:Qe(31,39),green:Qe(32,39),yellow:Qe(33,39),blue:Qe(34,39),magenta:Qe(35,39),cyan:Qe(36,39),white:Qe(37,39),gray:Qe(90,39),grey:Qe(90,39),bgBlack:Qe(40,49),bgRed:Qe(41,49),bgGreen:Qe(42,49),bgYellow:Qe(43,49),bgBlue:Qe(44,49),bgMagenta:Qe(45,49),bgCyan:Qe(46,49),bgWhite:Qe(47,49)}
function Ye(e,t){for(var n,r=0,a="",o="";r<e.length;r++)a+=(n=e[r]).open,o+=n.close,~t.indexOf(n.close)&&(t=t.replace(n.rgx,n.close+n.open))
return a+t+o}function Qe(e,t){var n={open:"[".concat(e,"m"),close:"[".concat(t,"m"),rgx:new RegExp("\\x1b\\[".concat(t,"m"),"g")}
return function(t){return void 0!==this&&void 0!==this.has?(~this.has.indexOf(e)||(this.has.push(e),this.keys.push(n)),void 0===t?this:Ge.enabled?Ye(this.keys,t+""):t+""):void 0===t?((r={has:[e],keys:[n]}).reset=Ge.reset.bind(r),r.bold=Ge.bold.bind(r),r.dim=Ge.dim.bind(r),r.italic=Ge.italic.bind(r),r.underline=Ge.underline.bind(r),r.inverse=Ge.inverse.bind(r),r.hidden=Ge.hidden.bind(r),r.strikethrough=Ge.strikethrough.bind(r),r.black=Ge.black.bind(r),r.red=Ge.red.bind(r),r.green=Ge.green.bind(r),r.yellow=Ge.yellow.bind(r),r.blue=Ge.blue.bind(r),r.magenta=Ge.magenta.bind(r),r.cyan=Ge.cyan.bind(r),r.white=Ge.white.bind(r),r.gray=Ge.gray.bind(r),r.grey=Ge.grey.bind(r),r.bgBlack=Ge.bgBlack.bind(r),r.bgRed=Ge.bgRed.bind(r),r.bgGreen=Ge.bgGreen.bind(r),r.bgYellow=Ge.bgYellow.bind(r),r.bgBlue=Ge.bgBlue.bind(r),r.bgMagenta=Ge.bgMagenta.bind(r),r.bgCyan=Ge.bgCyan.bind(r),r.bgWhite=Ge.bgWhite.bind(r),r):Ge.enabled?Ye([n],t+""):t+""
var r}}var Ke=Object.prototype.hasOwnProperty
function Xe(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4
if(void 0===e&&(e=String(e)),"number"!=typeof e||isFinite(e)||(e=String(e)),"number"==typeof e)return JSON.stringify(e)
if("string"==typeof e){var n=/['"\\/[{}\]\r\n]/,r=/[-?:,[\]{}#&*!|=>'"%@`]/,a=/(^\s|\s$)/,o=/^[\d._-]+$/,i=/^(true|false|y|n|yes|no|on|off)$/i
if(""===e||n.test(e)||r.test(e[0])||a.test(e)||o.test(e)||i.test(e)){if(!/\n/.test(e))return JSON.stringify(e)
var u=new Array(t+1).join(" "),s=e.match(/\n+$/),l=s?s[0].length:0
if(1===l){var c=e.replace(/\n$/,"").split("\n").map((function(e){return u+e}))
return"|\n"+c.join("\n")}var d=e.split("\n").map((function(e){return u+e}))
return"|+\n"+d.join("\n")}return e}return JSON.stringify(Je(e),null,2)}function Je(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]
if(-1!==t.indexOf(e))return"[Circular]"
var n,r=Object.prototype.toString.call(e).replace(/^\[.+\s(.+?)]$/,"$1").toLowerCase()
switch(r){case"array":t.push(e),n=e.map((function(e){return Je(e,t)})),t.pop()
break
case"object":t.push(e),n={},Object.keys(e).forEach((function(r){n[r]=Je(e[r],t)})),t.pop()
break
default:n=e}return n}var Ze=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
o(this,e),this.log=n.log||Function.prototype.bind.call(h.log,h),this.testCount=0,this.ended=!1,this.bailed=!1,t.on("error",this.onError.bind(this)),t.on("runStart",this.onRunStart.bind(this)),t.on("testEnd",this.onTestEnd.bind(this)),t.on("runEnd",this.onRunEnd.bind(this))}return u(e,[{key:"onRunStart",value:function(e){this.log("TAP version 13")}},{key:"onError",value:function(e){this.bailed||(this.bailed=!0,this.ended||(this.testCount=this.testCount+1,this.log(Ge.red("not ok ".concat(this.testCount," global failure"))),this.logError(e)),this.log("Bail out! "+I(e).split("\n")[0]),this.ended&&this.logError(e))}},{key:"onTestEnd",value:function(e){var t=this
this.testCount=this.testCount+1,"passed"===e.status?this.log("ok ".concat(this.testCount," ").concat(e.fullName.join(" > "))):"skipped"===e.status?this.log(Ge.yellow("ok ".concat(this.testCount," # SKIP ").concat(e.fullName.join(" > ")))):"todo"===e.status?(this.log(Ge.cyan("not ok ".concat(this.testCount," # TODO ").concat(e.fullName.join(" > ")))),e.errors.forEach((function(e){return t.logAssertion(e,"todo")}))):(this.log(Ge.red("not ok ".concat(this.testCount," ").concat(e.fullName.join(" > ")))),e.errors.forEach((function(e){return t.logAssertion(e)})))}},{key:"onRunEnd",value:function(e){this.ended=!0,this.log("1..".concat(e.testCounts.total)),this.log("# pass ".concat(e.testCounts.passed)),this.log(Ge.yellow("# skip ".concat(e.testCounts.skipped))),this.log(Ge.cyan("# todo ".concat(e.testCounts.todo))),this.log(Ge.red("# fail ".concat(e.testCounts.failed)))}},{key:"logAssertion",value:function(e,t){var n="  ---"
n+="\n  message: ".concat(Xe(e.message||"failed")),n+="\n  severity: ".concat(Xe(t||"failed")),Ke.call(e,"actual")&&(n+="\n  actual  : ".concat(Xe(e.actual))),Ke.call(e,"expected")&&(n+="\n  expected: ".concat(Xe(e.expected))),e.stack&&(n+="\n  stack: ".concat(Xe(e.stack+"\n"))),n+="\n  ...",this.log(n)}},{key:"logError",value:function(e){var t="  ---"
t+="\n  message: ".concat(Xe(I(e))),t+="\n  severity: ".concat(Xe("failed")),e&&e.stack&&(t+="\n  stack: ".concat(Xe(e.stack+"\n"))),t+="\n  ...",this.log(t)}}],[{key:"init",value:function(t,n){return new e(t,n)}}]),e}(),et={console:ze,tap:Ze}
function tt(e){return function(t){G.globalHooks[e]||(G.globalHooks[e]=[]),G.globalHooks[e].push(t)}}var nt={beforeEach:tt("beforeEach"),afterEach:tt("afterEach")}
function rt(e){G.current?G.current.assert.pushResult({result:!1,message:"global failure: ".concat(I(e)),source:e&&e.stack||ue(2)}):(J.globalFailureCount++,G.stats.bad++,G.stats.all++,fe("error",e))}var at={}
G.currentModule.suiteReport=J
var ot=!1,it=!1
function ut(){it=!0,m?m((function(){lt()})):lt()}function st(){G.blocking=!1,Ce.advance()}function lt(){if(G.started)st()
else{G.started=A.now(),""===G.modules[0].name&&0===G.modules[0].tests.length&&G.modules.shift()
for(var e=[],t=0;t<G.modules.length;t++)""!==G.modules[t].name&&e.push({name:G.modules[t].name,moduleId:G.modules[t].moduleId,tests:G.modules[t].tests})
fe("runStart",J.start(!0)),ve("begin",{totalTests:Ae.count,modules:e}).then(st)}}at.isLocal=f&&f.location&&"file:"===f.location.protocol,at.version="2.19.4",B(at,{config:G,dump:Q,equiv:W,reporters:et,hooks:nt,is:O,objectType:S,on:function(e,t){if("string"!=typeof e)throw new TypeError("eventName must be a string when registering a listener")
if(!T(e,pe)){var n=pe.join(", ")
throw new Error('"'.concat(e,'" is not a valid event; must be one of: ').concat(n,"."))}if("function"!=typeof t)throw new TypeError("callback must be a function when registering a listener")
de[e]||(de[e]=[]),T(t,de[e])||de[e].push(t)},onError:function(e){if(w.warn("QUnit.onError is deprecated and will be removed in QUnit 3.0. Please use QUnit.onUncaughtException instead."),G.current&&G.current.ignoreGlobalErrors)return!0
var t=new Error(e.message)
return t.stack=e.stacktrace||e.fileName+":"+e.lineNumber,rt(t),!1},onUncaughtException:rt,pushFailure:ke,assert:se.prototype,module:ae,test:Se,todo:Se.todo,skip:Se.skip,only:Se.only,start:function(e){if(G.current)throw new Error("QUnit.start cannot be called inside a test context.")
var t=ot
if(ot=!0,it)throw new Error("Called start() while test already started running")
if(t||e>1)throw new Error("Called start() outside of a test context too many times")
if(G.autostart)throw new Error("Called start() outside of a test context when QUnit.config.autostart was true")
if(!G.pageLoaded)return G.autostart=!0,void(g||at.load())
ut()},onUnhandledRejection:function(e){w.warn("QUnit.onUnhandledRejection is deprecated and will be removed in QUnit 3.0. Please use QUnit.onUncaughtException instead."),rt(e)},extend:function(){w.warn("QUnit.extend is deprecated and will be removed in QUnit 3.0. Please use Object.assign instead.")
for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return B.apply(this,t)},load:function(){G.pageLoaded=!0,B(G,{started:0,updateRate:1e3,autostart:!0,filter:""},!0),it||(G.blocking=!1,G.autostart&&ut())},stack:function(e){return ue(e=(e||0)+2)}}),function(e){var t=["begin","done","log","testStart","testDone","moduleStart","moduleDone"]
function n(e){return function(t){if("function"!=typeof t)throw new Error("Callback parameter must be a function")
G.callbacks[e].push(t)}}for(var r=0;r<t.length;r++){var a=t[r]
void 0===G.callbacks[a]&&(G.callbacks[a]=[]),e[a]=n(a)}}(at),function(a){if(f&&g){if(f.QUnit&&f.QUnit.version)throw new Error("QUnit has already been defined.")
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
t=he,n=function(){var e=void 0!==me&&"undefined"==typeof window,t="function"==typeof Map?Map:function(){var e=Object.create(null)
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
for(var S=new Array(b),O=b-1;O>=0;--O)S[O]=m.poll()
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
function ft(e){return e?(""+e).replace(/['"<>&]/g,(function(e){switch(e){case"'":return"&#039;"
case'"':return"&quot;"
case"<":return"&lt;"
case">":return"&gt;"
case"&":return"&amp;"}})):""}!function(){if(f&&g){var e=at.config,t=[],n=!1,r=Object.prototype.hasOwnProperty,a=T({filter:void 0,module:void 0,moduleId:void 0,testId:void 0}),o=null
at.on("runStart",(function(e){pt.defined=e.testCounts.total})),at.begin((function(t){!function(t){var n,i,u,s,c,d,h,y,E=C("qunit")
E&&(E.setAttribute("role","main"),E.innerHTML="<h1 id='qunit-header'>"+ft(g.title)+"</h1><h2 id='qunit-banner'></h2><div id='qunit-testrunner-toolbar' role='navigation'></div>"+(!(n=at.config.testId)||n.length<=0?"":"<div id='qunit-filteredTest'>Rerunning selected tests: "+ft(n.join(", "))+" <a id='qunit-clearFilter' href='"+ft(a)+"'>Run all tests</a></div>")+"<h2 id='qunit-userAgent'></h2><ol id='qunit-tests'></ol>"),(i=C("qunit-header"))&&(i.innerHTML="<a href='"+ft(a)+"'>"+i.innerHTML+"</a> "),(u=C("qunit-banner"))&&(u.className=""),h=C("qunit-tests"),(y=C("qunit-testresult"))&&y.parentNode.removeChild(y),h&&(h.innerHTML="",(y=g.createElement("p")).id="qunit-testresult",y.className="result",h.parentNode.insertBefore(y,h),y.innerHTML='<div id="qunit-testresult-display">Running...<br />&#160;</div><div id="qunit-testresult-controls"></div><div class="clearfix"></div>',c=C("qunit-testresult-controls")),c&&c.appendChild(((d=g.createElement("button")).id="qunit-abort-tests-button",d.innerHTML="Abort",p(d,"click",x),d)),(s=C("qunit-userAgent"))&&(s.innerHTML="",s.appendChild(g.createTextNode("QUnit "+at.version+"; "+v.userAgent))),function(t){var n,a,i,u,s,c=C("qunit-testrunner-toolbar")
if(c){c.appendChild(((s=g.createElement("span")).innerHTML=function(){for(var t=!1,n=e.urlConfig,a="",o=0;o<n.length;o++){var i=e.urlConfig[o]
"string"==typeof i&&(i={id:i,label:i})
var u=ft(i.id),s=ft(i.tooltip)
if(i.value&&"string"!=typeof i.value){if(a+="<label for='qunit-urlconfig-"+u+"' title='"+s+"'>"+i.label+": </label><select id='qunit-urlconfig-"+u+"' name='"+u+"' title='"+s+"'><option></option>",Array.isArray(i.value))for(var l=0;l<i.value.length;l++)a+="<option value='"+(u=ft(i.value[l]))+"'"+(e[i.id]===i.value[l]?(t=!0)&&" selected='selected'":"")+">"+u+"</option>"
else for(var c in i.value)r.call(i.value,c)&&(a+="<option value='"+ft(c)+"'"+(e[i.id]===c?(t=!0)&&" selected='selected'":"")+">"+ft(i.value[c])+"</option>")
e[i.id]&&!t&&(a+="<option value='"+(u=ft(e[i.id]))+"' selected='selected' disabled='disabled'>"+u+"</option>"),a+="</select>"}else a+="<label for='qunit-urlconfig-"+u+"' title='"+s+"'><input id='qunit-urlconfig-"+u+"' name='"+u+"' type='checkbox'"+(i.value?" value='"+ft(i.value)+"'":"")+(e[i.id]?" checked='checked'":"")+" title='"+s+"' />"+ft(i.label)+"</label>"}return a}(),F(s,"qunit-url-config"),D(s.getElementsByTagName("input"),"change",k),D(s.getElementsByTagName("select"),"change",k),s))
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
c.textContent="Apply",c.title="Re-run the selected test modules",p(c,"click",N)
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
o.selectedMap.forEach((function(e,n){t+=R(n,e,!0)}))
for(var n=0;n<e.length;n++){var r=e[n].obj
o.selectedMap.has(r.moduleId)||(t+=R(r.moduleId,r.name,!1))}return t}(""===e?o.options.slice(0,20).map((function(e){return{obj:e}})):dt.go(e,o.options,{limit:20,key:"name",allowTypo:!0}))}(i.value)}))}function k(e){var t=e&&e.target||null
t&&(t.checked?o.selectedMap.set(t.value,t.parentNode.textContent):o.selectedMap.delete(t.value),w(t.parentNode,"checked",t.checked))
var n=o.selectedMap.size?o.selectedMap.size+" "+(1===o.selectedMap.size?"module":"modules"):"All modules"
i.placeholder=n,i.title="Type to search through and reduce the list.",d.disabled=!o.isDirty(),h.style.display=o.selectedMap.size?"":"none"}return E.id="qunit-modulefilter",E.appendChild(u),E.appendChild(g.createTextNode(" ")),E.appendChild(s),p(E,"submit",A),p(E,"reset",(function(){o.selectedMap=new b(n),k(),x()})),E}(t))
var h=g.createElement("div")
h.className="clearfix",c.appendChild(d),c.appendChild(h)}}(t)}(t)})),at.on("runEnd",(function(t){var n,r,a,o=C("qunit-banner"),i=C("qunit-tests"),u=C("qunit-abort-tests-button"),s=e.stats.all-e.stats.bad,l=[t.testCounts.total," tests completed in ",t.runtime," milliseconds, with ",t.testCounts.failed," failed, ",t.testCounts.skipped," skipped, and ",t.testCounts.todo," todo.<br />","<span class='passed'>",s,"</span> assertions of <span class='total'>",e.stats.all,"</span> passed, <span class='failed'>",e.stats.bad,"</span> failed.",O(pt.failedTests)].join("")
if(u&&u.disabled){l="Tests aborted after "+t.runtime+" milliseconds."
for(var c=0;c<i.children.length;c++)""!==(n=i.children[c]).className&&"running"!==n.className||(n.className="aborted",a=n.getElementsByTagName("ol")[0],(r=g.createElement("li")).className="fail",r.innerHTML="Test aborted.",a.appendChild(r))}!o||u&&!1!==u.disabled||(o.className="failed"===t.status?"qunit-fail":"qunit-pass"),u&&u.parentNode.removeChild(u),i&&(C("qunit-testresult-display").innerHTML=l),e.altertitle&&g.title&&(g.title=["failed"===t.status?"✖":"✔",g.title.replace(/^[\u2714\u2716] /i,"")].join(" ")),e.scrolltop&&f.scrollTo&&f.scrollTo(0,0)})),at.testStart((function(e){var t,n
S(e.name,e.testId,e.module),(t=C("qunit-testresult-display"))&&(F(t,"running"),n=at.config.reorder&&e.previousFailure,t.innerHTML=[P(pt),n?"Rerunning previously failed test: <br />":"Running: ",_(e.name,e.module),O(pt.failedTests)].join(""))})),at.log((function(e){var t=C("qunit-test-output-"+e.testId)
if(t){var n,a,o,i=ft(e.message)||(e.result?"okay":"failed")
i="<span class='test-message'>"+i+"</span>",i+="<span class='runtime'>@ "+e.runtime+" ms</span>"
var u=!1
!e.result&&r.call(e,"expected")?(n=e.negative?"NOT "+at.dump.parse(e.expected):at.dump.parse(e.expected),a=at.dump.parse(e.actual),i+="<table><tr class='test-expected'><th>Expected: </th><td><pre>"+ft(n)+"</pre></td></tr>",a!==n?(i+="<tr class='test-actual'><th>Result: </th><td><pre>"+ft(a)+"</pre></td></tr>","number"==typeof e.actual&&"number"==typeof e.expected?isNaN(e.actual)||isNaN(e.expected)||(u=!0,o=((o=e.actual-e.expected)>0?"+":"")+o):"boolean"!=typeof e.actual&&"boolean"!=typeof e.expected&&(u=j(o=at.diff(n,a)).length!==j(n).length+j(a).length),u&&(i+="<tr class='test-diff'><th>Diff: </th><td><pre>"+o+"</pre></td></tr>")):-1!==n.indexOf("[object Array]")||-1!==n.indexOf("[object Object]")?i+="<tr class='test-message'><th>Message: </th><td>Diff suppressed as the depth of object is more than current max depth ("+at.config.maxDepth+").<p>Hint: Use <code>QUnit.dump.maxDepth</code> to  run with a higher max depth or <a href='"+ft(T({maxDepth:-1}))+"'>Rerun</a> without max depth.</p></td></tr>":i+="<tr class='test-message'><th>Message: </th><td>Diff suppressed as the expected and actual results have an equivalent serialization</td></tr>",e.source&&(i+="<tr class='test-source'><th>Source: </th><td><pre>"+ft(e.source)+"</pre></td></tr>"),i+="</table>"):!e.result&&e.source&&(i+="<table><tr class='test-source'><th>Source: </th><td><pre>"+ft(e.source)+"</pre></td></tr></table>")
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
v.innerHTML="<strong>Source: </strong>"+ft(r.source),F(v,"qunit-source"),c&&F(v,"qunit-collapsed"),p(d,"click",(function(){w(v,"qunit-collapsed")})),o.appendChild(v)}e.hidepassed&&("passed"===i||r.skipped)&&(t.push(o),a.removeChild(o))}})),at.on("error",(function(e){var t=S("global failure")
if(t){var n=ft(I(e))
n="<span class='test-message'>"+n+"</span>",e&&e.stack&&(n+="<table><tr class='test-source'><th>Source: </th><td><pre>"+ft(e.stack)+"</pre></td></tr></table>")
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
return t.value=d(t.value),N(),e&&e.preventDefault&&e.preventDefault(),!1}function k(){var n,r=this,a={}
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
for(var a in e=B(B({},at.urlParams),e))if(r.call(e,a)&&void 0!==e[a])for(var o=[].concat(e[a]),i=0;i<o.length;i++)t+=encodeURIComponent(a),!0!==o[i]&&(t+="="+encodeURIComponent(o[i])),t+="&"
return n.protocol+"//"+n.host+n.pathname+t.slice(0,-1)}function N(){var e=C("qunit-filter-input").value
f.location=T({filter:""===e?void 0:e,moduleId:l(o.selectedMap.keys()),module:void 0,testId:void 0})}function R(e,t,n){return'<li><label class="clickable'+(n?" checked":"")+'"><input type="checkbox" value="'+ft(e)+'"'+(n?' checked="checked"':"")+" />"+ft(t)+"</label></li>"}function S(e,t,n){var r=C("qunit-tests")
if(r){var a=g.createElement("strong")
a.innerHTML=_(e,n)
var o=g.createElement("li")
if(o.appendChild(a),void 0!==t){var i=g.createElement("a")
i.innerHTML="Rerun",i.href=T({testId:t}),o.id="qunit-test-output-"+t,o.appendChild(i)}var u=g.createElement("ol")
return u.className="qunit-assert-list",o.appendChild(u),r.appendChild(o),o}}function O(e){return 0===e.length?"":["<br /><a href='"+ft(T({testId:e}))+"'>",1===e.length?"Rerun 1 failed test":"Rerun "+e.length+" failed tests","</a>"].join("")}function _(e,t){var n=""
return t&&(n="<span class='module-name'>"+ft(t)+"</span>: "),n+"<span class='test-name'>"+ft(e)+"</span>"}function P(e){return[e.completed," / ",e.defined," tests completed.<br />"].join("")}function j(e){return e.replace(/<\/?[^>]+(>|$)/g,"").replace(/&quot;/g,"").replace(/\s+/g,"")}}(),at.diff=function(){function e(){}var t=-1,n=Object.prototype.hasOwnProperty
return e.prototype.DiffMain=function(e,t,n){var r=Date.now()+1e3
if(null===e||null===t)throw new Error("Cannot diff null input.")
if(e===t)return e?[[0,e]]:[]
void 0===n&&(n=!0)
var a=this.diffCommonPrefix(e,t),o=e.substring(0,a)
e=e.substring(a),t=t.substring(a),a=this.diffCommonSuffix(e,t)
var i=e.substring(e.length-a)
e=e.substring(0,e.length-a),t=t.substring(0,t.length-a)
var u=this.diffCompute(e,t,n,r)
return o&&u.unshift([0,o]),i&&u.push([0,i]),this.diffCleanupMerge(u),u},e.prototype.diffCleanupEfficiency=function(e){var n,r,a,o,i,u,s,l,c
for(n=!1,r=[],a=0,o=null,i=0,u=!1,s=!1,l=!1,c=!1;i<e.length;)0===e[i][0]?(e[i][1].length<4&&(l||c)?(r[a++]=i,u=l,s=c,o=e[i][1]):(a=0,o=null),l=c=!1):(e[i][0]===t?c=!0:l=!0,o&&(u&&s&&l&&c||o.length<2&&u+s+l+c===3)&&(e.splice(r[a-1],0,[t,o]),e[r[a-1]+1][0]=1,a--,o=null,u&&s?(l=c=!0,a=0):(i=--a>0?r[a-1]:-1,l=c=!1),n=!0)),i++
n&&this.diffCleanupMerge(e)},e.prototype.diffPrettyHtml=function(e){for(var n=[],r=0;r<e.length;r++){var a=e[r][0],o=e[r][1]
switch(a){case 1:n[r]="<ins>"+ft(o)+"</ins>"
break
case t:n[r]="<del>"+ft(o)+"</del>"
break
case 0:n[r]="<span>"+ft(o)+"</span>"}}return n.join("")},e.prototype.diffCommonPrefix=function(e,t){var n,r,a,o
if(!e||!t||e.charAt(0)!==t.charAt(0))return 0
for(a=0,n=r=Math.min(e.length,t.length),o=0;a<n;)e.substring(o,n)===t.substring(o,n)?o=a=n:r=n,n=Math.floor((r-a)/2+a)
return n},e.prototype.diffCommonSuffix=function(e,t){var n,r,a,o
if(!e||!t||e.charAt(e.length-1)!==t.charAt(t.length-1))return 0
for(a=0,n=r=Math.min(e.length,t.length),o=0;a<n;)e.substring(e.length-n,e.length-o)===t.substring(t.length-n,t.length-o)?o=a=n:r=n,n=Math.floor((r-a)/2+a)
return n},e.prototype.diffCompute=function(e,n,r,a){var o,i,u,s,l,c,d,p,f,h,m,D
return e?n?(i=e.length>n.length?e:n,u=e.length>n.length?n:e,-1!==(s=i.indexOf(u))?(o=[[1,i.substring(0,s)],[0,u],[1,i.substring(s+u.length)]],e.length>n.length&&(o[0][0]=o[2][0]=t),o):1===u.length?[[t,e],[1,n]]:(l=this.diffHalfMatch(e,n))?(c=l[0],p=l[1],d=l[2],f=l[3],h=l[4],m=this.DiffMain(c,d,r,a),D=this.DiffMain(p,f,r,a),m.concat([[0,h]],D)):r&&e.length>100&&n.length>100?this.diffLineMode(e,n,a):this.diffBisect(e,n,a)):[[t,e]]:[[1,n]]},e.prototype.diffHalfMatch=function(e,t){var n,r,a,o,i,u,s,l,c,d
if(n=e.length>t.length?e:t,r=e.length>t.length?t:e,n.length<4||2*r.length<n.length)return null
function p(e,t,n){var r,o,i,u,s,l,c,d,p
for(r=e.substring(n,n+Math.floor(e.length/4)),o=-1,i="";-1!==(o=t.indexOf(r,o+1));)u=a.diffCommonPrefix(e.substring(n),t.substring(o)),s=a.diffCommonSuffix(e.substring(0,n),t.substring(0,o)),i.length<s+u&&(i=t.substring(o-s,o)+t.substring(o,o+u),l=e.substring(0,n-s),c=e.substring(n+u),d=t.substring(0,o-s),p=t.substring(o+u))
return 2*i.length>=e.length?[l,c,d,p,i]:null}return a=this,l=p(n,r,Math.ceil(n.length/4)),c=p(n,r,Math.ceil(n.length/2)),l||c?(d=c?l&&l[4].length>c[4].length?l:c:l,e.length>t.length?(o=d[0],s=d[1],u=d[2],i=d[3]):(u=d[0],i=d[1],o=d[2],s=d[3]),[o,s,u,i,d[4]]):null},e.prototype.diffLineMode=function(e,n,r){var a,o,i,u,s,l,c,d,p
for(e=(a=this.diffLinesToChars(e,n)).chars1,n=a.chars2,i=a.lineArray,o=this.DiffMain(e,n,!1,r),this.diffCharsToLines(o,i),this.diffCleanupSemantic(o),o.push([0,""]),u=0,l=0,s=0,d="",c="";u<o.length;){switch(o[u][0]){case 1:s++,c+=o[u][1]
break
case t:l++,d+=o[u][1]
break
case 0:if(l>=1&&s>=1){for(o.splice(u-l-s,l+s),u=u-l-s,p=(a=this.DiffMain(d,c,!1,r)).length-1;p>=0;p--)o.splice(u,0,a[p])
u+=a.length}s=0,l=0,d="",c=""}u++}return o.pop(),o},e.prototype.diffBisect=function(e,n,r){var a,o,i,u,s,l,c,d,p,f,h,m,D,g,v,y,b,F,w,E,C,x,A
for(a=e.length,o=n.length,u=i=Math.ceil((a+o)/2),s=2*i,l=new Array(s),c=new Array(s),d=0;d<s;d++)l[d]=-1,c[d]=-1
for(l[u+1]=0,c[u+1]=0,f=(p=a-o)%2!=0,h=0,m=0,D=0,g=0,C=0;C<i&&!(Date.now()>r);C++){for(x=-C+h;x<=C-m;x+=2){for(y=u+x,w=(b=x===-C||x!==C&&l[y-1]<l[y+1]?l[y+1]:l[y-1]+1)-x;b<a&&w<o&&e.charAt(b)===n.charAt(w);)b++,w++
if(l[y]=b,b>a)m+=2
else if(w>o)h+=2
else if(f&&(v=u+p-x)>=0&&v<s&&-1!==c[v]&&b>=(F=a-c[v]))return this.diffBisectSplit(e,n,b,w,r)}for(A=-C+D;A<=C-g;A+=2){for(v=u+A,E=(F=A===-C||A!==C&&c[v-1]<c[v+1]?c[v+1]:c[v-1]+1)-A;F<a&&E<o&&e.charAt(a-F-1)===n.charAt(o-E-1);)F++,E++
if(c[v]=F,F>a)g+=2
else if(E>o)D+=2
else if(!f&&(y=u+p-A)>=0&&y<s&&-1!==l[y]&&(w=u+(b=l[y])-y,b>=(F=a-F)))return this.diffBisectSplit(e,n,b,w,r)}}return[[t,e],[1,n]]},e.prototype.diffBisectSplit=function(e,t,n,r,a){var o,i,u,s,l,c
return o=e.substring(0,n),u=t.substring(0,r),i=e.substring(n),s=t.substring(r),l=this.DiffMain(o,u,!1,a),c=this.DiffMain(i,s,!1,a),l.concat(c)},e.prototype.diffCleanupSemantic=function(e){for(var n,r,a,o,i=!1,u=[],s=0,l=null,c=0,d=0,p=0,f=0,h=0;c<e.length;)0===e[c][0]?(u[s++]=c,d=f,p=h,f=0,h=0,l=e[c][1]):(1===e[c][0]?f+=e[c][1].length:h+=e[c][1].length,l&&l.length<=Math.max(d,p)&&l.length<=Math.max(f,h)&&(e.splice(u[s-1],0,[t,l]),e[u[s-1]+1][0]=1,s--,c=--s>0?u[s-1]:-1,d=0,p=0,f=0,h=0,l=null,i=!0)),c++
for(i&&this.diffCleanupMerge(e),c=1;c<e.length;)e[c-1][0]===t&&1===e[c][0]&&(n=e[c-1][1],r=e[c][1],(a=this.diffCommonOverlap(n,r))>=(o=this.diffCommonOverlap(r,n))?(a>=n.length/2||a>=r.length/2)&&(e.splice(c,0,[0,r.substring(0,a)]),e[c-1][1]=n.substring(0,n.length-a),e[c+1][1]=r.substring(a),c++):(o>=n.length/2||o>=r.length/2)&&(e.splice(c,0,[0,n.substring(0,o)]),e[c-1][0]=1,e[c-1][1]=r.substring(0,r.length-o),e[c+1][0]=t,e[c+1][1]=n.substring(o),c++),c++),c++},e.prototype.diffCommonOverlap=function(e,t){var n=e.length,r=t.length
if(0===n||0===r)return 0
n>r?e=e.substring(n-r):n<r&&(t=t.substring(0,n))
var a=Math.min(n,r)
if(e===t)return a
for(var o=0,i=1;;){var u=e.substring(a-i),s=t.indexOf(u)
if(-1===s)return o
i+=s,0!==s&&e.substring(a-i)!==t.substring(0,i)||(o=i,i++)}},e.prototype.diffLinesToChars=function(e,t){var r=[],a={}
function o(e){for(var t="",o=0,i=-1,u=r.length;i<e.length-1;){-1===(i=e.indexOf("\n",o))&&(i=e.length-1)
var s=e.substring(o,i+1)
o=i+1,n.call(a,s)?t+=String.fromCharCode(a[s]):(t+=String.fromCharCode(u),a[s]=u,r[u++]=s)}return t}return r[0]="",{chars1:o(e),chars2:o(t),lineArray:r}},e.prototype.diffCharsToLines=function(e,t){for(var n=0;n<e.length;n++){for(var r=e[n][1],a=[],o=0;o<r.length;o++)a[o]=t[r.charCodeAt(o)]
e[n][1]=a.join("")}},e.prototype.diffCleanupMerge=function(e){e.push([0,""])
for(var n=0,r=0,a=0,o="",i="";n<e.length;)switch(e[n][0]){case 1:a++,i+=e[n][1],n++
break
case t:r++,o+=e[n][1],n++
break
case 0:if(r+a>1){if(0!==r&&0!==a){var u=this.diffCommonPrefix(i,o)
0!==u&&(n-r-a>0&&0===e[n-r-a-1][0]?e[n-r-a-1][1]+=i.substring(0,u):(e.splice(0,0,[0,i.substring(0,u)]),n++),i=i.substring(u),o=o.substring(u)),0!==(u=this.diffCommonSuffix(i,o))&&(e[n][1]=i.substring(i.length-u)+e[n][1],i=i.substring(0,i.length-u),o=o.substring(0,o.length-u))}0===r?e.splice(n-a,r+a,[1,i]):0===a?e.splice(n-r,r+a,[t,o]):e.splice(n-r-a,r+a,[t,o],[1,i]),n=n-r-a+(r?1:0)+(a?1:0)+1}else 0!==n&&0===e[n-1][0]?(e[n-1][1]+=e[n][1],e.splice(n,1)):n++
a=0,r=0,o="",i=""}""===e[e.length-1][1]&&e.pop()
var s=!1
for(n=1;n<e.length-1;){if(0===e[n-1][0]&&0===e[n+1][0]){var l=e[n][1]
l.substring(l.length-e[n-1][1].length)===e[n-1][1]?(e[n][1]=e[n-1][1]+e[n][1].substring(0,e[n][1].length-e[n-1][1].length),e[n+1][1]=e[n-1][1]+e[n+1][1],e.splice(n-1,1),s=!0):l.substring(0,e[n+1][1].length)===e[n+1][1]&&(e[n-1][1]+=e[n+1][1],e[n][1]=e[n][1].substring(e[n+1][1].length)+e[n+1][1],e.splice(n+1,1),s=!0)}n++}s&&this.diffCleanupMerge(e)},function(t,n){var r,a
return a=(r=new e).DiffMain(t,n),r.diffCleanupEfficiency(a),r.diffPrettyHtml(a)}}()}()}}])

//# sourceMappingURL=chunk.535.af3e8845fc3a0a466ddd.map