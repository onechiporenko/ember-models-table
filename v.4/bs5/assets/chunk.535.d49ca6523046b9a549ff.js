/*! For license information please see chunk.535.d49ca6523046b9a549ff.js.LICENSE.txt */
(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[535],{348:(e,t,n)=>{"use strict"
function r(e){return e&&e.isDescriptor?"descriptor":null===e?"null":typeof e}function a(e,t,n,a){var o={configurable:!0,enumerable:!0}
"undefined"!==r(a)?o.get=a:(o.writable=!1,o.value=n),Object.defineProperty(e,t,o)}function o(e,t){delete e.__parentTreeNode,t&&Object.defineProperty(e,"__parentTreeNode",{value:t,configurable:!0,enumerable:!1})}function i(e,t){this.blueprint=e,this.builders=t}n.r(t),n.d(t,{default:()=>l}),i.prototype={builderFor:function(e){return this.builders[r(e)]||this.builders.default},build:function(e){var t,n={}
return this.processNode({root:this.blueprint},n),o(t=n.root,e),t},processNode:function(e,t,n){var a=Object.keys(e),i=this
return a.forEach((function(n){var a,o,l,u=e[n]
a=i.builderFor(u),o=s[r(u)]||s.default,(l=a(t,n,u,o))&&i.processNode(l[1],l[0],t)})),o(t,n),t}}
const s={descriptor:function(e,t,n){"function"==typeof n.setup&&n.setup(e,t),n.value?a(e,t,n.value):a(e,t,void 0,(function(){return n.get.call(this,t)}))},object:function(e,t,n){var r,o,i={}
return a(e,t,i),r=i,o=t,Object.defineProperty(r,"__meta",{value:{key:o,type:"node"},configurable:!1,enumerable:!1}),[i,n]},default:function(e,t,n){a(e,t,n)}},l={defineProperty:a,create:function(e,t){var n=function(){for(var e,t=arguments[0],n=Array.prototype.slice.call(arguments,1),r=0;r<n.length;r++)if(e=n[r])for(var a in e)void 0!==e[a]&&(t[a]=e[a])
return t}({},s,(t=t||{}).builder)
return new i(e,n).build(t.parent)},parent:function(e){return function(e){if("object"==typeof e&&null!==e)return e.__parentTreeNode}(e)},meta:function(e){return function(e){if("object"==typeof e&&null!==e)return e.__meta}(e)}}},126:function(e,t){!function t(n){var r=n,a=n.document
function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}var i=i||{}
function s(e){this.name="SupportError",this.cause=e.cause,this.message="`".concat(e.cause,"` - feature unsupported in your environment."),e.ruleId&&(this.ruleId=e.ruleId,this.message+=" Skipping ".concat(this.ruleId," rule.")),this.stack=(new Error).stack}i.version="4.4.3","function"==typeof define&&define.amd&&define("axe-core",[],(function(){return i})),"object"===(void 0===e?"undefined":o(e))&&e.exports&&"function"==typeof t.toString&&(i.source="("+t.toString()+')(typeof window === "object" ? window : this);',e.exports=i),"function"==typeof n.getComputedStyle&&(n.axe=i),s.prototype=Object.create(Error.prototype),s.prototype.constructor=s
var l=["node"],u=["node"],c=["variant"],d=["matches"],p=["chromium"],f=["noImplicit"],h=["noPresentational"],m=["nodes"],g=["node"],v=["relatedNodes"],y=["environmentData"],b=["environmentData"],w=["node"],D=["environmentData"],x=["environmentData"],E=["environmentData"]
function C(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&A(e,t)}function A(e,t){return A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},A(e,t)}function k(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=F(e)
if(t){var a=F(this).constructor
n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments)
return T(this,n)}}function T(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return N(e)}function N(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function F(e){return F=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},F(e)}function R(e,t){if(null==e)return{}
var n,r,a=function(e,t){if(null==e)return{}
var n,r,a={},o=Object.keys(e)
for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n])
return a}(e,t)
if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e)
for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function S(e){return function(e){if(Array.isArray(e))return L(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||q(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null!=n){var r,a,o=[],i=!0,s=!1
try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(e){s=!0,a=e}finally{try{i||null==n.return||n.return()}finally{if(s)throw a}}return o}}(e,t)||q(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(){return _=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_.apply(this,arguments)}function I(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(e,t,n){return t&&P(e.prototype,t),n&&P(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function M(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(!n){if(Array.isArray(e)||(n=q(e))||t&&e&&"number"==typeof e.length){n&&(e=n)
var r=0,a=function(){}
return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,s=!1
return{s:function(){n=n.call(e)},n:function(){var e=n.next()
return i=e.done,e},e:function(e){s=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(s)throw o}}}}function q(e,t){if(e){if("string"==typeof e)return L(e,t)
var n=Object.prototype.toString.call(e).slice(8,-1)
return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?L(e,t):void 0}}function L(e,t){(null==t||t>e.length)&&(t=e.length)
for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n]
return r}function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}!function(){var e=Object.create,t=Object.defineProperty,A=Object.getPrototypeOf,T=Object.prototype.hasOwnProperty,F=Object.getOwnPropertyNames,P=Object.getOwnPropertyDescriptor,q=function(e){return t(e,"__esModule",{value:!0})},L=function(e,t){return function(){return t||e((t={exports:{}}).exports,t),t.exports}},B=function(e,n){for(var r in q(e),n)t(e,r,{get:n[r],enumerable:!0})},H=function(n){return n&&n.__esModule?n:function(e,n,r){if(q(e),"object"===o(n)||"function"==typeof n){var a,i=M(F(n))
try{var s=function(){var o=a.value
T.call(e,o)||"default"===o||t(e,o,{get:function(){return n[o]},enumerable:!(r=P(n,o))||r.enumerable})}
for(i.s();!(a=i.n()).done;)s()}catch(e){i.e(e)}finally{i.f()}}return e}(t(e(A(n)),"default",{value:n,enumerable:!0}),n)},U=L((function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.isIdentStart=function(e){return e>="a"&&e<="z"||e>="A"&&e<="Z"||"-"===e||"_"===e},e.isIdent=function(e){return e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||"-"===e||"_"===e},e.isHex=function(e){return e>="a"&&e<="f"||e>="A"&&e<="F"||e>="0"&&e<="9"},e.escapeIdentifier=function(t){for(var n=t.length,r="",a=0;a<n;){var o=t.charAt(a)
if(e.identSpecialChars[o])r+="\\"+o
else if("_"===o||"-"===o||o>="A"&&o<="Z"||o>="a"&&o<="z"||0!==a&&o>="0"&&o<="9")r+=o
else{var i=o.charCodeAt(0)
if(55296==(63488&i)){var s=t.charCodeAt(a++)
if(55296!=(64512&i)||56320!=(64512&s))throw Error("UCS-2(decode): illegal sequence")
i=((1023&i)<<10)+(1023&s)+65536}r+="\\"+i.toString(16)+" "}a++}return r},e.escapeStr=function(t){for(var n,r=t.length,a="",o=0;o<r;){var i=t.charAt(o)
'"'===i?i='\\"':"\\"===i?i="\\\\":void 0!==(n=e.strReplacementsRev[i])&&(i=n),a+=i,o++}return'"'+a+'"'},e.identSpecialChars={"!":!0,'"':!0,"#":!0,$:!0,"%":!0,"&":!0,"'":!0,"(":!0,")":!0,"*":!0,"+":!0,",":!0,".":!0,"/":!0,";":!0,"<":!0,"=":!0,">":!0,"?":!0,"@":!0,"[":!0,"\\":!0,"]":!0,"^":!0,"`":!0,"{":!0,"|":!0,"}":!0,"~":!0},e.strReplacementsRev={"\n":"\\n","\r":"\\r","\t":"\\t","\f":"\\f","\v":"\\v"},e.singleQuoteEscapeChars={n:"\n",r:"\r",t:"\t",f:"\f","\\":"\\","'":"'"},e.doubleQuotesEscapeChars={n:"\n",r:"\r",t:"\t",f:"\f","\\":"\\",'"':'"'}})),z=L((function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
var t=U()
e.parseCssSelector=function(e,n,r,a,o,i){var s=e.length,l=""
function u(r,a){var o=""
for(n++,l=e.charAt(n);n<s;){if(l===r)return n++,o
if("\\"===l){n++
var i=void 0
if((l=e.charAt(n))===r)o+=r
else if(void 0!==(i=a[l]))o+=i
else{if(t.isHex(l)){var u=l
for(n++,l=e.charAt(n);t.isHex(l);)u+=l,n++,l=e.charAt(n)
" "===l&&(n++,l=e.charAt(n)),o+=String.fromCharCode(parseInt(u,16))
continue}o+=l}}else o+=l
n++,l=e.charAt(n)}return o}function c(){var r=""
for(l=e.charAt(n);n<s;){if(t.isIdent(l))r+=l
else{if("\\"!==l)return r
if(++n>=s)throw Error("Expected symbol but end of file reached.")
if(l=e.charAt(n),t.identSpecialChars[l])r+=l
else{if(t.isHex(l)){var a=l
for(n++,l=e.charAt(n);t.isHex(l);)a+=l,n++,l=e.charAt(n)
" "===l&&(n++,l=e.charAt(n)),r+=String.fromCharCode(parseInt(a,16))
continue}r+=l}}n++,l=e.charAt(n)}return r}function d(){l=e.charAt(n)
for(var t=!1;" "===l||"\t"===l||"\n"===l||"\r"===l||"\f"===l;)t=!0,n++,l=e.charAt(n)
return t}function p(){var t=f()
if(!t)return null
var r=t
for(l=e.charAt(n);","===l;){if(n++,d(),"selectors"!==r.type&&(r={type:"selectors",selectors:[t]}),!(t=f()))throw Error('Rule expected after ",".')
r.selectors.push(t)}return r}function f(){d()
var t={type:"ruleSet"},r=h()
if(!r)return null
for(var a=t;r&&(r.type="rule",a.rule=r,a=r,d(),l=e.charAt(n),!(n>=s||","===l||")"===l));)if(o[l]){var i=l
if(n++,d(),!(r=h()))throw Error('Rule expected after "'+i+'".')
r.nestingOperator=i}else(r=h())&&(r.nestingOperator=null)
return t}function h(){for(var o=null;n<s;)if("*"===(l=e.charAt(n)))n++,(o=o||{}).tagName="*"
else if(t.isIdentStart(l)||"\\"===l)(o=o||{}).tagName=c()
else if("."===l)n++,((o=o||{}).classNames=o.classNames||[]).push(c())
else if("#"===l)n++,(o=o||{}).id=c()
else if("["===l){n++,d()
var f={name:c()}
if(d(),"]"===l)n++
else{var h=""
if(a[l]&&(h=l,n++,l=e.charAt(n)),n>=s)throw Error('Expected "=" but end of file reached.')
if("="!==l)throw Error('Expected "=" but "'+l+'" found.')
f.operator=h+"=",n++,d()
var m=""
if(f.valueType="string",'"'===l)m=u('"',t.doubleQuotesEscapeChars)
else if("'"===l)m=u("'",t.singleQuoteEscapeChars)
else if(i&&"$"===l)n++,m=c(),f.valueType="substitute"
else{for(;n<s&&"]"!==l;)m+=l,n++,l=e.charAt(n)
m=m.trim()}if(d(),n>=s)throw Error('Expected "]" but end of file reached.')
if("]"!==l)throw Error('Expected "]" but "'+l+'" found.')
n++,f.value=m}((o=o||{}).attrs=o.attrs||[]).push(f)}else{if(":"!==l)break
n++
var g=c(),v={name:g}
if("("===l){n++
var y=""
if(d(),"selector"===r[g])v.valueType="selector",y=p()
else{if(v.valueType=r[g]||"string",'"'===l)y=u('"',t.doubleQuotesEscapeChars)
else if("'"===l)y=u("'",t.singleQuoteEscapeChars)
else if(i&&"$"===l)n++,y=c(),v.valueType="substitute"
else{for(;n<s&&")"!==l;)y+=l,n++,l=e.charAt(n)
y=y.trim()}d()}if(n>=s)throw Error('Expected ")" but end of file reached.')
if(")"!==l)throw Error('Expected ")" but "'+l+'" found.')
n++,v.value=y}((o=o||{}).pseudos=o.pseudos||[]).push(v)}return o}return function(){var t=p()
if(n<s)throw Error('Rule expected but "'+e.charAt(n)+'" found.')
return t}()}})),$=L((function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
var t=U()
e.renderEntity=function e(n){var r=""
switch(n.type){case"ruleSet":for(var a=n.rule,o=[];a;)a.nestingOperator&&o.push(a.nestingOperator),o.push(e(a)),a=a.rule
r=o.join(" ")
break
case"selectors":r=n.selectors.map(e).join(", ")
break
case"rule":n.tagName&&(r="*"===n.tagName?"*":t.escapeIdentifier(n.tagName)),n.id&&(r+="#"+t.escapeIdentifier(n.id)),n.classNames&&(r+=n.classNames.map((function(e){return"."+t.escapeIdentifier(e)})).join("")),n.attrs&&(r+=n.attrs.map((function(e){return"operator"in e?"substitute"===e.valueType?"["+t.escapeIdentifier(e.name)+e.operator+"$"+e.value+"]":"["+t.escapeIdentifier(e.name)+e.operator+t.escapeStr(e.value)+"]":"["+t.escapeIdentifier(e.name)+"]"})).join("")),n.pseudos&&(r+=n.pseudos.map((function(n){return n.valueType?"selector"===n.valueType?":"+t.escapeIdentifier(n.name)+"("+e(n.value)+")":"substitute"===n.valueType?":"+t.escapeIdentifier(n.name)+"($"+n.value+")":"numeric"===n.valueType?":"+t.escapeIdentifier(n.name)+"("+n.value+")":":"+t.escapeIdentifier(n.name)+"("+t.escapeIdentifier(n.value)+")":":"+t.escapeIdentifier(n.name)})).join(""))
break
default:throw Error('Unknown entity type: "'+n.type+'".')}return r}})),V=L((function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
var t=z(),n=$(),r=function(){function e(){this.pseudos={},this.attrEqualityMods={},this.ruleNestingOperators={},this.substitutesEnabled=!1}return e.prototype.registerSelectorPseudos=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
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
e.CssSelectorParser=r})),W=L((function(e,t){"use strict"
t.exports=function(){}})),G=L((function(e,t){"use strict"
var n=W()()
t.exports=function(e){return e!==n&&null!==e}})),Y=L((function(e,t){"use strict"
var n=G(),r=Array.prototype.forEach,a=Object.create,o=function(e,t){var n
for(n in e)t[n]=e[n]}
t.exports=function(e){var t=a(null)
return r.call(arguments,(function(e){n(e)&&o(Object(e),t)})),t}})),Q=L((function(e,t){"use strict"
t.exports=function(){var e=Math.sign
return"function"==typeof e&&1===e(10)&&-1===e(-20)}})),X=L((function(e,t){"use strict"
t.exports=function(e){return e=Number(e),isNaN(e)||0===e?e:e>0?1:-1}})),K=L((function(e,t){"use strict"
t.exports=Q()()?Math.sign:X()})),J=L((function(e,t){"use strict"
var n=K(),r=Math.abs,a=Math.floor
t.exports=function(e){return isNaN(e)?0:0!==(e=Number(e))&&isFinite(e)?n(e)*a(r(e)):e}})),Z=L((function(e,t){"use strict"
var n=J(),r=Math.max
t.exports=function(e){return r(0,n(e))}})),ee=L((function(e,t){"use strict"
var n=Z()
t.exports=function(e,t,r){var a
return isNaN(e)?(a=t)>=0?r&&a?a-1:a:1:!1!==e&&n(e)}})),te=L((function(e,t){"use strict"
t.exports=function(e){if("function"!=typeof e)throw new TypeError(e+" is not a function")
return e}})),ne=L((function(e,t){"use strict"
var n=G()
t.exports=function(e){if(!n(e))throw new TypeError("Cannot use null or undefined")
return e}})),re=L((function(e,t){"use strict"
var n=te(),r=ne(),a=Function.prototype.bind,o=Function.prototype.call,i=Object.keys,s=Object.prototype.propertyIsEnumerable
t.exports=function(e,t){return function(l,u){var c,d=arguments[2],p=arguments[3]
return l=Object(r(l)),n(u),c=i(l),p&&c.sort("function"==typeof p?a.call(p,l):void 0),"function"!=typeof e&&(e=c[e]),o.call(e,c,(function(e,n){return s.call(l,e)?o.call(u,d,l[e],e,l,n):t}))}}})),ae=L((function(e,t){"use strict"
t.exports=re()("forEach")})),oe=L((function(){})),ie=L((function(e,t){"use strict"
t.exports=function(){var e,t=Object.assign
return"function"==typeof t&&(t(e={foo:"raz"},{bar:"dwa"},{trzy:"trzy"}),e.foo+e.bar+e.trzy==="razdwatrzy")}})),se=L((function(e,t){"use strict"
t.exports=function(){try{return Object.keys("primitive"),!0}catch(e){return!1}}})),le=L((function(e,t){"use strict"
var n=G(),r=Object.keys
t.exports=function(e){return r(n(e)?Object(e):e)}})),ue=L((function(e,t){"use strict"
t.exports=se()()?Object.keys:le()})),ce=L((function(e,t){"use strict"
var n=ue(),r=ne(),a=Math.max
t.exports=function(e,t){var o,i,s,l=a(arguments.length,2)
for(e=Object(r(e)),s=function(n){try{e[n]=t[n]}catch(e){o||(o=e)}},i=1;i<l;++i)n(t=arguments[i]).forEach(s)
if(void 0!==o)throw o
return e}})),de=L((function(e,t){"use strict"
t.exports=ie()()?Object.assign:ce()})),pe=L((function(e,t){"use strict"
var n=G(),r={function:!0,object:!0}
t.exports=function(e){return n(e)&&r[o(e)]||!1}})),fe=L((function(e,t){"use strict"
var n=de(),r=pe(),a=G(),o=Error.captureStackTrace
t.exports=function(e){var i=new Error(e),s=arguments[1],l=arguments[2]
return a(l)||r(s)&&(l=s,s=null),a(l)&&n(i,l),a(s)&&(i.code=s),o&&o(i,t.exports),i}})),he=L((function(e,t){"use strict"
var n=ne(),r=Object.defineProperty,a=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,i=Object.getOwnPropertySymbols
t.exports=function(e,t){var s,l=Object(n(t))
if(e=Object(n(e)),o(l).forEach((function(n){try{r(e,n,a(t,n))}catch(e){s=e}})),"function"==typeof i&&i(l).forEach((function(n){try{r(e,n,a(t,n))}catch(e){s=e}})),void 0!==s)throw s
return e}})),me=L((function(e,t){"use strict"
var n,r,a,o,i,s=Z(),l=function(e,t){return t}
try{Object.defineProperty(l,"length",{configurable:!0,writable:!1,enumerable:!1,value:1})}catch(e){}1===l.length?(n={configurable:!0,writable:!1,enumerable:!1},r=Object.defineProperty,t.exports=function(e,t){return t=s(t),e.length===t?e:(n.value=t,r(e,"length",n))}):(o=he(),i=[],a=function(e){var t,n=0
if(i[e])return i[e]
for(t=[];e--;)t.push("a"+(++n).toString(36))
return new Function("fn","return function ("+t.join(", ")+") { return fn.apply(this, arguments); };")},t.exports=function(e,t){var n
if(t=s(t),e.length===t)return e
n=a(t)(e)
try{o(n,e)}catch(e){}return n})})),ge=L((function(e,t){"use strict"
t.exports=function(e){return null!=e}})),ve=L((function(e,t){"use strict"
var n=ge(),r={object:!0,function:!0,undefined:!0}
t.exports=function(e){return!!n(e)&&hasOwnProperty.call(r,o(e))}})),ye=L((function(e,t){"use strict"
var n=ve()
t.exports=function(e){if(!n(e))return!1
try{return!!e.constructor&&e.constructor.prototype===e}catch(e){return!1}}})),be=L((function(e,t){"use strict"
var n=ye()
t.exports=function(e){if("function"!=typeof e)return!1
if(!hasOwnProperty.call(e,"length"))return!1
try{if("number"!=typeof e.length)return!1
if("function"!=typeof e.call)return!1
if("function"!=typeof e.apply)return!1}catch(e){return!1}return!n(e)}})),we=L((function(e,t){"use strict"
var n=be(),r=/^\s*class[\s{/}]/,a=Function.prototype.toString
t.exports=function(e){return!!n(e)&&!r.test(a.call(e))}})),De=L((function(e,t){"use strict"
var n="razdwatrzy"
t.exports=function(){return"function"==typeof n.contains&&!0===n.contains("dwa")&&!1===n.contains("foo")}})),xe=L((function(e,t){"use strict"
var n=String.prototype.indexOf
t.exports=function(e){return n.call(this,e,arguments[1])>-1}})),Ee=L((function(e,t){"use strict"
t.exports=De()()?String.prototype.contains:xe()})),Ce=L((function(e,t){"use strict"
var n=ge(),r=we(),a=de(),o=Y(),i=Ee(),s=t.exports=function(e,t){var r,s,l,u,c
return arguments.length<2||"string"!=typeof e?(u=t,t=e,e=null):u=arguments[2],n(e)?(r=i.call(e,"c"),s=i.call(e,"e"),l=i.call(e,"w")):(r=l=!0,s=!1),c={value:t,configurable:r,enumerable:s,writable:l},u?a(o(u),c):c}
s.gs=function(e,t,s){var l,u,c,d
return"string"!=typeof e?(c=s,s=t,t=e,e=null):c=arguments[3],n(t)?r(t)?n(s)?r(s)||(c=s,s=void 0):s=void 0:(c=t,t=s=void 0):t=void 0,n(e)?(l=i.call(e,"c"),u=i.call(e,"e")):(l=!0,u=!1),d={get:t,set:s,configurable:l,enumerable:u},c?a(o(c),d):d}})),Ae=L((function(e,t){"use strict"
var n,r,a,i,s,l,u,c=Ce(),d=te(),p=Function.prototype.apply,f=Function.prototype.call,h=Object.create,m=Object.defineProperty,g=Object.defineProperties,v=Object.prototype.hasOwnProperty,y={configurable:!0,enumerable:!1,writable:!0}
r=function(e,t){var r,o
return d(t),o=this,n.call(this,e,r=function(){a.call(o,e,r),p.call(t,this,arguments)}),r.__eeOnceListener__=t,this},a=function(e,t){var n,r,a,i
if(d(t),!v.call(this,"__ee__"))return this
if(!(n=this.__ee__)[e])return this
if(r=n[e],"object"===o(r))for(i=0;a=r[i];++i)a!==t&&a.__eeOnceListener__!==t||(2===r.length?n[e]=r[i?0:1]:r.splice(i,1))
else r!==t&&r.__eeOnceListener__!==t||delete n[e]
return this},i=function(e){var t,n,r,a,i
if(v.call(this,"__ee__")&&(a=this.__ee__[e]))if("object"===o(a)){for(n=arguments.length,i=new Array(n-1),t=1;t<n;++t)i[t-1]=arguments[t]
for(a=a.slice(),t=0;r=a[t];++t)p.call(r,this,i)}else switch(arguments.length){case 1:f.call(a,this)
break
case 2:f.call(a,this,arguments[1])
break
case 3:f.call(a,this,arguments[1],arguments[2])
break
default:for(n=arguments.length,i=new Array(n-1),t=1;t<n;++t)i[t-1]=arguments[t]
p.call(a,this,i)}},s={on:n=function(e,t){var n
return d(t),v.call(this,"__ee__")?n=this.__ee__:(n=y.value=h(null),m(this,"__ee__",y),y.value=null),n[e]?"object"===o(n[e])?n[e].push(t):n[e]=[n[e],t]:n[e]=t,this},once:r,off:a,emit:i},l={on:c(n),once:c(r),off:c(a),emit:c(i)},u=g({},l),t.exports=e=function(e){return null==e?h(u):g(Object(e),l)},e.methods=s})),ke=L((function(e,t){"use strict"
t.exports=function(){var e,t,n=Array.from
return"function"==typeof n&&(t=n(e=["raz","dwa"]),Boolean(t&&t!==e&&"dwa"===t[1]))}})),Te=L((function(e,t){"use strict"
t.exports=function(){return"object"===("undefined"==typeof globalThis?"undefined":o(globalThis))&&!!globalThis&&globalThis.Array===Array}})),Ne=L((function(e,t){var r=function(){if("object"===("undefined"==typeof self?"undefined":o(self))&&self)return self
if("object"===(void 0===n?"undefined":o(n))&&n)return n
throw new Error("Unable to resolve global `this`")}
t.exports=function(){if(this)return this
try{Object.defineProperty(Object.prototype,"__global__",{get:function(){return this},configurable:!0})}catch(e){return r()}try{return __global__||r()}finally{delete Object.prototype.__global__}}()})),Fe=L((function(e,t){"use strict"
t.exports=Te()()?globalThis:Ne()})),Re=L((function(e,t){"use strict"
var n=Fe(),r={object:!0,symbol:!0}
t.exports=function(){var e,t=n.Symbol
if("function"!=typeof t)return!1
e=t("test symbol")
try{String(e)}catch(e){return!1}return!!r[o(t.iterator)]&&!!r[o(t.toPrimitive)]&&!!r[o(t.toStringTag)]}})),Se=L((function(e,t){"use strict"
t.exports=function(e){return!!e&&("symbol"===o(e)||!!e.constructor&&"Symbol"===e.constructor.name&&"Symbol"===e[e.constructor.toStringTag])}})),Oe=L((function(e,t){"use strict"
var n=Se()
t.exports=function(e){if(!n(e))throw new TypeError(e+" is not a symbol")
return e}})),_e=L((function(e,t){"use strict"
var n=Ce(),r=Object.create,a=Object.defineProperty,o=Object.prototype,i=r(null)
t.exports=function(e){for(var t,r,s=0;i[e+(s||"")];)++s
return i[e+=s||""]=!0,a(o,t="@@"+e,n.gs(null,(function(e){r||(r=!0,a(this,t,n(e)),r=!1)}))),t}})),Ie=L((function(e,t){"use strict"
var n=Ce(),r=Fe().Symbol
t.exports=function(e){return Object.defineProperties(e,{hasInstance:n("",r&&r.hasInstance||e("hasInstance")),isConcatSpreadable:n("",r&&r.isConcatSpreadable||e("isConcatSpreadable")),iterator:n("",r&&r.iterator||e("iterator")),match:n("",r&&r.match||e("match")),replace:n("",r&&r.replace||e("replace")),search:n("",r&&r.search||e("search")),species:n("",r&&r.species||e("species")),split:n("",r&&r.split||e("split")),toPrimitive:n("",r&&r.toPrimitive||e("toPrimitive")),toStringTag:n("",r&&r.toStringTag||e("toStringTag")),unscopables:n("",r&&r.unscopables||e("unscopables"))})}})),Pe=L((function(e,t){"use strict"
var n=Ce(),r=Oe(),a=Object.create(null)
t.exports=function(e){return Object.defineProperties(e,{for:n((function(t){return a[t]?a[t]:a[t]=e(String(t))})),keyFor:n((function(e){var t
for(t in r(e),a)if(a[t]===e)return t}))})}})),je=L((function(e,t){"use strict"
var n,r,a,i=Ce(),s=Oe(),l=Fe().Symbol,u=_e(),c=Ie(),d=Pe(),p=Object.create,f=Object.defineProperties,h=Object.defineProperty
if("function"==typeof l)try{String(l()),a=!0}catch(e){}else l=null
r=function(e){if(this instanceof r)throw new TypeError("Symbol is not a constructor")
return n(e)},t.exports=n=function e(t){var n
if(this instanceof e)throw new TypeError("Symbol is not a constructor")
return a?l(t):(n=p(r.prototype),t=void 0===t?"":String(t),f(n,{__description__:i("",t),__name__:i("",u(t))}))},c(n),d(n),f(r.prototype,{constructor:i(n),toString:i("",(function(){return this.__name__}))}),f(n.prototype,{toString:i((function(){return"Symbol ("+s(this).__description__+")"})),valueOf:i((function(){return s(this)}))}),h(n.prototype,n.toPrimitive,i("",(function(){var e=s(this)
return"symbol"===o(e)?e:e.toString()}))),h(n.prototype,n.toStringTag,i("c","Symbol")),h(r.prototype,n.toStringTag,i("c",n.prototype[n.toStringTag])),h(r.prototype,n.toPrimitive,i("c",n.prototype[n.toPrimitive]))})),Me=L((function(e,t){"use strict"
t.exports=Re()()?Fe().Symbol:je()})),qe=L((function(e,t){"use strict"
var n=Object.prototype.toString,r=n.call(function(){return arguments}())
t.exports=function(e){return n.call(e)===r}})),Le=L((function(e,t){"use strict"
var n=Object.prototype.toString,r=RegExp.prototype.test.bind(/^[object [A-Za-z0-9]*Function]$/)
t.exports=function(e){return"function"==typeof e&&r(n.call(e))}})),Be=L((function(e,t){"use strict"
var n=Object.prototype.toString,r=n.call("")
t.exports=function(e){return"string"==typeof e||e&&"object"===o(e)&&(e instanceof String||n.call(e)===r)||!1}})),He=L((function(e,t){"use strict"
var n=Me().iterator,r=qe(),a=Le(),o=Z(),i=te(),s=ne(),l=G(),u=Be(),c=Array.isArray,d=Function.prototype.call,p={configurable:!0,enumerable:!0,writable:!0,value:null},f=Object.defineProperty
t.exports=function(e){var t,h,m,g,v,y,b,w,D,x,E=arguments[1],C=arguments[2]
if(e=Object(s(e)),l(E)&&i(E),this&&this!==Array&&a(this))t=this
else{if(!E){if(r(e))return 1!==(v=e.length)?Array.apply(null,e):((g=new Array(1))[0]=e[0],g)
if(c(e)){for(g=new Array(v=e.length),h=0;h<v;++h)g[h]=e[h]
return g}}g=[]}if(!c(e))if(void 0!==(D=e[n])){for(b=i(D).call(e),t&&(g=new t),w=b.next(),h=0;!w.done;)x=E?d.call(E,C,w.value,h):w.value,t?(p.value=x,f(g,h,p)):g[h]=x,w=b.next(),++h
v=h}else if(u(e)){for(v=e.length,t&&(g=new t),h=0,m=0;h<v;++h)x=e[h],h+1<v&&(y=x.charCodeAt(0))>=55296&&y<=56319&&(x+=e[++h]),x=E?d.call(E,C,x,m):x,t?(p.value=x,f(g,m,p)):g[m]=x,++m
v=m}if(void 0===v)for(v=o(e.length),t&&(g=new t(v)),h=0;h<v;++h)x=E?d.call(E,C,e[h],h):e[h],t?(p.value=x,f(g,h,p)):g[h]=x
return t&&(p.value=null,g.length=v),g}})),Ue=L((function(e,t){"use strict"
t.exports=ke()()?Array.from:He()})),ze=L((function(e,t){"use strict"
var n=Ue(),r=Array.isArray
t.exports=function(e){return r(e)?e:n(e)}})),$e=L((function(e,t){"use strict"
var n,r=ze(),a=G(),o=te(),i=Array.prototype.slice
n=function(e){return this.map((function(t,n){return t?t(e[n]):e[n]})).concat(i.call(e,this.length))},t.exports=function(e){return(e=r(e)).forEach((function(e){a(e)&&o(e)})),n.bind(e)}})),Ve=L((function(e,t){"use strict"
var n=te()
t.exports=function(e){var t
return"function"==typeof e?{set:e,get:e}:(t={get:n(e.get)},void 0!==e.set?(t.set=n(e.set),e.delete&&(t.delete=n(e.delete)),e.clear&&(t.clear=n(e.clear)),t):(t.set=t.get,t))}})),We=L((function(e,t){"use strict"
var n=fe(),r=me(),a=Ce(),o=Ae().methods,i=$e(),s=Ve(),l=Function.prototype.apply,u=Function.prototype.call,c=Object.create,d=Object.defineProperties,p=o.on,f=o.emit
t.exports=function(e,t,o){var h,m,g,v,y,b,w,D,x,E,C,A,k,T,N,F=c(null)
return m=!1!==t?t:isNaN(e.length)?1:e.length,o.normalizer&&(E=s(o.normalizer),g=E.get,v=E.set,y=E.delete,b=E.clear),null!=o.resolvers&&(N=i(o.resolvers)),T=g?r((function(t){var r,a,o=arguments
if(N&&(o=N(o)),null!==(r=g(o))&&hasOwnProperty.call(F,r))return C&&h.emit("get",r,o,this),F[r]
if(a=1===o.length?u.call(e,this,o[0]):l.call(e,this,o),null===r){if(null!==(r=g(o)))throw n("Circular invocation","CIRCULAR_INVOCATION")
r=v(o)}else if(hasOwnProperty.call(F,r))throw n("Circular invocation","CIRCULAR_INVOCATION")
return F[r]=a,A&&h.emit("set",r,null,a),a}),m):0===t?function(){var t
if(hasOwnProperty.call(F,"data"))return C&&h.emit("get","data",arguments,this),F.data
if(t=arguments.length?l.call(e,this,arguments):u.call(e,this),hasOwnProperty.call(F,"data"))throw n("Circular invocation","CIRCULAR_INVOCATION")
return F.data=t,A&&h.emit("set","data",null,t),t}:function(t){var r,a,o=arguments
if(N&&(o=N(arguments)),a=String(o[0]),hasOwnProperty.call(F,a))return C&&h.emit("get",a,o,this),F[a]
if(r=1===o.length?u.call(e,this,o[0]):l.call(e,this,o),hasOwnProperty.call(F,a))throw n("Circular invocation","CIRCULAR_INVOCATION")
return F[a]=r,A&&h.emit("set",a,null,r),r},h={original:e,memoized:T,profileName:o.profileName,get:function(e){return N&&(e=N(e)),g?g(e):String(e[0])},has:function(e){return hasOwnProperty.call(F,e)},delete:function(e){var t
hasOwnProperty.call(F,e)&&(y&&y(e),t=F[e],delete F[e],k&&h.emit("delete",e,t))},clear:function(){var e=F
b&&b(),F=c(null),h.emit("clear",e)},on:function(e,t){return"get"===e?C=!0:"set"===e?A=!0:"delete"===e&&(k=!0),p.call(this,e,t)},emit:f,updateEnv:function(){e=h.original}},w=g?r((function(e){var t,n=arguments
N&&(n=N(n)),null!==(t=g(n))&&h.delete(t)}),m):0===t?function(){return h.delete("data")}:function(e){return N&&(e=N(arguments)[0]),h.delete(e)},D=r((function(){var e,n=arguments
return 0===t?F.data:(N&&(n=N(n)),e=g?g(n):String(n[0]),F[e])})),x=r((function(){var e,n=arguments
return 0===t?h.has("data"):(N&&(n=N(n)),null!==(e=g?g(n):String(n[0]))&&h.has(e))})),d(T,{__memoized__:a(!0),delete:a(w),clear:a(h.clear),_get:a(D),_has:a(x)}),h}})),Ge=L((function(e,t){"use strict"
var n=te(),r=ae(),a=oe(),o=We(),i=ee()
t.exports=function e(t){var s,l,u
if(n(t),(s=Object(arguments[1])).async&&s.promise)throw new Error("Options 'async' and 'promise' cannot be used together")
return hasOwnProperty.call(t,"__memoized__")&&!s.force?t:(l=i(s.length,t.length,s.async&&a.async),u=o(t,l,s),r(a,(function(e,t){s[t]&&e(s[t],u,s)})),e.__profiler__&&e.__profiler__(u),u.updateEnv(),u.memoized)}})),Ye=L((function(e,t){"use strict"
t.exports=function(e){var t,n,r=e.length
if(!r)return""
for(t=String(e[n=0]);--r;)t+=""+e[++n]
return t}})),Qe=L((function(e,t){"use strict"
t.exports=function(e){return e?function(t){for(var n=String(t[0]),r=0,a=e;--a;)n+=""+t[++r]
return n}:function(){return""}}})),Xe=L((function(e,t){"use strict"
t.exports=function(){var e=Number.isNaN
return"function"==typeof e&&!e({})&&e(NaN)&&!e(34)}})),Ke=L((function(e,t){"use strict"
t.exports=function(e){return e!=e}})),Je=L((function(e,t){"use strict"
t.exports=Xe()()?Number.isNaN:Ke()})),Ze=L((function(e,t){"use strict"
var n=Je(),r=Z(),a=ne(),o=Array.prototype.indexOf,i=Object.prototype.hasOwnProperty,s=Math.abs,l=Math.floor
t.exports=function(e){var t,u,c,d
if(!n(e))return o.apply(this,arguments)
for(u=r(a(this).length),c=arguments[1],t=c=isNaN(c)?0:c>=0?l(c):r(this.length)-l(s(c));t<u;++t)if(i.call(this,t)&&(d=this[t],n(d)))return t
return-1}})),et=L((function(e,t){"use strict"
var n=Ze(),r=Object.create
t.exports=function(){var e=0,t=[],a=r(null)
return{get:function(e){var r,a=0,o=t,i=e.length
if(0===i)return o[i]||null
if(o=o[i]){for(;a<i-1;){if(-1===(r=n.call(o[0],e[a])))return null
o=o[1][r],++a}return-1===(r=n.call(o[0],e[a]))?null:o[1][r]||null}return null},set:function(r){var o,i=0,s=t,l=r.length
if(0===l)s[l]=++e
else{for(s[l]||(s[l]=[[],[]]),s=s[l];i<l-1;)-1===(o=n.call(s[0],r[i]))&&(o=s[0].push(r[i])-1,s[1].push([[],[]])),s=s[1][o],++i;-1===(o=n.call(s[0],r[i]))&&(o=s[0].push(r[i])-1),s[1][o]=++e}return a[e]=r,e},delete:function(e){var r,o=0,i=t,s=a[e],l=s.length,u=[]
if(0===l)delete i[l]
else if(i=i[l]){for(;o<l-1;){if(-1===(r=n.call(i[0],s[o])))return
u.push(i,r),i=i[1][r],++o}if(-1===(r=n.call(i[0],s[o])))return
for(e=i[1][r],i[0].splice(r,1),i[1].splice(r,1);!i[0].length&&u.length;)r=u.pop(),(i=u.pop())[0].splice(r,1),i[1].splice(r,1)}delete a[e]},clear:function(){t=[],a=r(null)}}}})),tt=L((function(e,t){"use strict"
var n=Ze()
t.exports=function(){var e=0,t=[],r=[]
return{get:function(e){var a=n.call(t,e[0])
return-1===a?null:r[a]},set:function(n){return t.push(n[0]),r.push(++e),e},delete:function(e){var a=n.call(r,e);-1!==a&&(t.splice(a,1),r.splice(a,1))},clear:function(){t=[],r=[]}}}})),nt=L((function(e,t){"use strict"
var n=Ze(),r=Object.create
t.exports=function(e){var t=0,a=[[],[]],o=r(null)
return{get:function(t){for(var r,o=0,i=a;o<e-1;){if(-1===(r=n.call(i[0],t[o])))return null
i=i[1][r],++o}return-1===(r=n.call(i[0],t[o]))?null:i[1][r]||null},set:function(r){for(var i,s=0,l=a;s<e-1;)-1===(i=n.call(l[0],r[s]))&&(i=l[0].push(r[s])-1,l[1].push([[],[]])),l=l[1][i],++s
return-1===(i=n.call(l[0],r[s]))&&(i=l[0].push(r[s])-1),l[1][i]=++t,o[t]=r,t},delete:function(t){for(var r,i=0,s=a,l=[],u=o[t];i<e-1;){if(-1===(r=n.call(s[0],u[i])))return
l.push(s,r),s=s[1][r],++i}if(-1!==(r=n.call(s[0],u[i]))){for(t=s[1][r],s[0].splice(r,1),s[1].splice(r,1);!s[0].length&&l.length;)r=l.pop(),(s=l.pop())[0].splice(r,1),s[1].splice(r,1)
delete o[t]}},clear:function(){a=[[],[]],o=r(null)}}}})),rt=L((function(e,t){"use strict"
var n=te(),r=ae(),a=Function.prototype.call
t.exports=function(e,t){var o={},i=arguments[2]
return n(t),r(e,(function(e,n,r,s){o[n]=a.call(t,i,e,n,r,s)})),o}})),at=L((function(e,t){"use strict"
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
if("function"==typeof WebKitMutationObserver)return r(WebKitMutationObserver)}return"function"==typeof setImmediate?function(e){setImmediate(n(e))}:"function"==typeof setTimeout||"object"===("undefined"==typeof setTimeout?"undefined":o(setTimeout))?function(e){setTimeout(n(e),0)}:null}()})),ot=L((function(){"use strict"
var e=Ue(),t=rt(),n=he(),r=me(),a=at(),o=Array.prototype.slice,i=Function.prototype.apply,s=Object.create
oe().async=function(l,u){var c,d,p,f=s(null),h=s(null),m=u.memoized,g=u.original
u.memoized=r((function(e){var t=arguments,n=t[t.length-1]
return"function"==typeof n&&(c=n,t=o.call(t,0,-1)),m.apply(d=this,p=t)}),m)
try{n(u.memoized,m)}catch(e){}u.on("get",(function(e){var t,n,r
if(c){if(f[e])return"function"==typeof f[e]?f[e]=[f[e],c]:f[e].push(c),void(c=null)
t=c,n=d,r=p,c=d=p=null,a((function(){var a
hasOwnProperty.call(h,e)?(a=h[e],u.emit("getasync",e,r,n),i.call(t,a.context,a.args)):(c=t,d=n,p=r,m.apply(n,r))}))}})),u.original=function(){var t,n,r,o
return c?(t=e(arguments),n=function t(n){var r,s,l=t.id
if(null!=l){if(delete t.id,r=f[l],delete f[l],r)return s=e(arguments),u.has(l)&&(n?u.delete(l):(h[l]={context:this,args:s},u.emit("setasync",l,"function"==typeof r?1:r.length))),"function"==typeof r?o=i.call(r,this,s):r.forEach((function(e){o=i.call(e,this,s)}),this),o}else a(i.bind(t,this,arguments))},r=c,c=d=p=null,t.push(n),o=i.call(g,this,t),n.cb=r,c=n,o):i.call(g,this,arguments)},u.on("set",(function(e){c?(f[e]?"function"==typeof f[e]?f[e]=[f[e],c.cb]:f[e].push(c.cb):f[e]=c.cb,delete c.cb,c.id=e,c=null):u.delete(e)})),u.on("delete",(function(e){var t
hasOwnProperty.call(f,e)||h[e]&&(t=h[e],delete h[e],u.emit("deleteasync",e,o.call(t.args,1)))})),u.on("clear",(function(){var e=h
h=s(null),u.emit("clearasync",t(e,(function(e){return o.call(e.args,1)})))}))}})),it=L((function(e,t){"use strict"
var n=Array.prototype.forEach,r=Object.create
t.exports=function(e){var t=r(null)
return n.call(arguments,(function(e){t[e]=!0})),t}})),st=L((function(e,t){"use strict"
t.exports=function(e){return"function"==typeof e}})),lt=L((function(e,t){"use strict"
var n=st()
t.exports=function(e){try{return e&&n(e.toString)?e.toString():String(e)}catch(e){throw new TypeError("Passed argument cannot be stringifed")}}})),ut=L((function(e,t){"use strict"
var n=ne(),r=lt()
t.exports=function(e){return r(n(e))}})),ct=L((function(e,t){"use strict"
var n=st()
t.exports=function(e){try{return e&&n(e.toString)?e.toString():String(e)}catch(e){return"<Non-coercible to string value>"}}})),dt=L((function(e,t){"use strict"
var n=ct(),r=/[\n\r\u2028\u2029]/g
t.exports=function(e){var t=n(e)
return t.length>100&&(t=t.slice(0,99)+"…"),t.replace(r,(function(e){return JSON.stringify(e).slice(1,-1)}))}})),pt=L((function(e,t){function n(e){return!!e&&("object"===o(e)||"function"==typeof e)&&"function"==typeof e.then}t.exports=n,t.exports.default=n})),ft=L((function(){"use strict"
var e=rt(),t=it(),n=ut(),r=dt(),a=pt(),o=at(),i=Object.create,s=t("then","then:finally","done","done:finally")
oe().promise=function(t,l){var u=i(null),c=i(null),d=i(null)
if(!0===t)t=null
else if(t=n(t),!s[t])throw new TypeError("'"+r(t)+"' is not valid promise mode")
l.on("set",(function(e,n,r){var i=!1
if(!a(r))return c[e]=r,void l.emit("setasync",e,1)
u[e]=1,d[e]=r
var s=function(t){var n=u[e]
if(i)throw new Error("Memoizee error: Detected unordered then|done & finally resolution, which in turn makes proper detection of success/failure impossible (when in 'done:finally' mode)\nConsider to rely on 'then' or 'done' mode instead.")
n&&(delete u[e],c[e]=t,l.emit("setasync",e,n))},p=function(){i=!0,u[e]&&(delete u[e],delete d[e],l.delete(e))},f=t
if(f||(f="then"),"then"===f){var h=function(){o(p)}
"function"==typeof(r=r.then((function(e){o(s.bind(this,e))}),h)).finally&&r.finally(h)}else if("done"===f){if("function"!=typeof r.done)throw new Error("Memoizee error: Retrieved promise does not implement 'done' in 'done' mode")
r.done(s,p)}else if("done:finally"===f){if("function"!=typeof r.done)throw new Error("Memoizee error: Retrieved promise does not implement 'done' in 'done:finally' mode")
if("function"!=typeof r.finally)throw new Error("Memoizee error: Retrieved promise does not implement 'finally' in 'done:finally' mode")
r.done(s),r.finally(p)}})),l.on("get",(function(e,t,n){var r
if(u[e])++u[e]
else{r=d[e]
var i=function(){l.emit("getasync",e,t,n)}
a(r)?"function"==typeof r.done?r.done(i):r.then((function(){o(i)})):i()}})),l.on("delete",(function(e){if(delete d[e],u[e])delete u[e]
else if(hasOwnProperty.call(c,e)){var t=c[e]
delete c[e],l.emit("deleteasync",e,[t])}})),l.on("clear",(function(){var t=c
c=i(null),u=i(null),d=i(null),l.emit("clearasync",e(t,(function(e){return[e]})))}))}})),ht=L((function(){"use strict"
var e=te(),t=ae(),n=oe(),r=Function.prototype.apply
n.dispose=function(a,o,i){var s
if(e(a),i.async&&n.async||i.promise&&n.promise)return o.on("deleteasync",s=function(e,t){r.call(a,null,t)}),void o.on("clearasync",(function(e){t(e,(function(e,t){s(t,e)}))}))
o.on("delete",s=function(e,t){a(t)}),o.on("clear",(function(e){t(e,(function(e,t){s(t,e)}))}))}})),mt=L((function(e,t){"use strict"
t.exports=2147483647})),gt=L((function(e,t){"use strict"
var n=Z(),r=mt()
t.exports=function(e){if((e=n(e))>r)throw new TypeError(e+" exceeds maximum possible timeout")
return e}})),vt=L((function(){"use strict"
var e=Ue(),t=ae(),n=at(),r=pt(),a=gt(),o=oe(),i=Function.prototype,s=Math.max,l=Math.min,u=Object.create
o.maxAge=function(c,d,p){var f,h,m,g;(c=a(c))&&(f=u(null),h=p.async&&o.async||p.promise&&o.promise?"async":"",d.on("set"+h,(function(e){f[e]=setTimeout((function(){d.delete(e)}),c),"function"==typeof f[e].unref&&f[e].unref(),g&&(g[e]&&"nextTick"!==g[e]&&clearTimeout(g[e]),g[e]=setTimeout((function(){delete g[e]}),m),"function"==typeof g[e].unref&&g[e].unref())})),d.on("delete"+h,(function(e){clearTimeout(f[e]),delete f[e],g&&("nextTick"!==g[e]&&clearTimeout(g[e]),delete g[e])})),p.preFetch&&(m=!0===p.preFetch||isNaN(p.preFetch)?.333:s(l(Number(p.preFetch),1),0))&&(g={},m=(1-m)*c,d.on("get"+h,(function(t,a,o){g[t]||(g[t]="nextTick",n((function(){var n
"nextTick"===g[t]&&(delete g[t],d.delete(t),p.async&&(a=e(a)).push(i),n=d.memoized.apply(o,a),p.promise&&r(n)&&("function"==typeof n.done?n.done(i,i):n.then(i,i)))})))}))),d.on("clear"+h,(function(){t(f,(function(e){clearTimeout(e)})),f={},g&&(t(g,(function(e){"nextTick"!==e&&clearTimeout(e)})),g={})})))}})),yt=L((function(e,t){"use strict"
var n=Z(),r=Object.create,a=Object.prototype.hasOwnProperty
t.exports=function(e){var t,o=0,i=1,s=r(null),l=r(null),u=0
return e=n(e),{hit:function(n){var r=l[n],c=++u
if(s[c]=n,l[n]=c,!r){if(++o<=e)return
return n=s[i],t(n),n}if(delete s[r],i===r)for(;!a.call(s,++i););},delete:t=function(e){var t=l[e]
if(t&&(delete s[t],delete l[e],--o,i===t)){if(!o)return u=0,void(i=1)
for(;!a.call(s,++i););}},clear:function(){o=0,i=1,s=r(null),l=r(null),u=0}}}})),bt=L((function(){"use strict"
var e=Z(),t=yt(),n=oe()
n.max=function(r,a,o){var i,s,l;(r=e(r))&&(s=t(r),i=o.async&&n.async||o.promise&&n.promise?"async":"",a.on("set"+i,l=function(e){void 0!==(e=s.hit(e))&&a.delete(e)}),a.on("get"+i,l),a.on("delete"+i,s.delete),a.on("clear"+i,s.clear))}})),wt=L((function(){"use strict"
var e=Ce(),t=oe(),n=Object.create,r=Object.defineProperties
t.refCounter=function(a,o,i){var s,l
s=n(null),l=i.async&&t.async||i.promise&&t.promise?"async":"",o.on("set"+l,(function(e,t){s[e]=t||1})),o.on("get"+l,(function(e){++s[e]})),o.on("delete"+l,(function(e){delete s[e]})),o.on("clear"+l,(function(){s={}})),r(o.memoized,{deleteRef:e((function(){var e=o.get(arguments)
return null===e?null:s[e]?!--s[e]&&(o.delete(e),!0):null})),getRefCount:e((function(){var e=o.get(arguments)
return null===e?0:s[e]?s[e]:0}))})}})),Dt=L((function(e,t){"use strict"
var n=Y(),r=ee(),a=Ge()
t.exports=function(e){var t,o=n(arguments[1])
return o.normalizer||0!==(t=o.length=r(o.length,e.length,o.async))&&(o.primitive?!1===t?o.normalizer=Ye():t>1&&(o.normalizer=Qe()(t)):o.normalizer=!1===t?et()():1===t?tt()():nt()(t)),o.async&&ot(),o.promise&&ft(),o.dispose&&ht(),o.maxAge&&vt(),o.max&&bt(),o.refCounter&&wt(),a(e,o)}})),xt=L((function(e,t){"use strict"
t.exports=function(){return/\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F|\uD83D\uDC68(?:\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFB|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|[\u2695\u2696\u2708]\uFE0F|\uD83D[\uDC66\uDC67]|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708])\uFE0F|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C[\uDFFB-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)\uD83C\uDFFB|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB\uDFFC])|\uD83D\uDC69(?:\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB-\uDFFD])|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|(?:(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)\uFE0F|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\u200D[\u2640\u2642])|\uD83C\uDFF4\u200D\u2620)\uFE0F|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF6\uD83C\uDDE6|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDB5\uDDB6\uDDBB\uDDD2-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5\uDEEB\uDEEC\uDEF4-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g}})),Et=L((function(e,t){!function(){"use strict"
var e={name:"doT",version:"1.1.1",templateSettings:{evaluate:/\{\{([\s\S]+?(\}?)+)\}\}/g,interpolate:/\{\{=([\s\S]+?)\}\}/g,encode:/\{\{!([\s\S]+?)\}\}/g,use:/\{\{#([\s\S]+?)\}\}/g,useParams:/(^|[^\w$])def(?:\.|\[[\'\"])([\w$\.]+)(?:[\'\"]\])?\s*\:\s*([\w$\.]+|\"[^\"]+\"|\'[^\']+\'|\{[^\}]+\})/g,define:/\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,defineParams:/^\s*([\w$]+):([\s\S]+)/,conditional:/\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,iterate:/\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,varname:"it",strip:!0,append:!0,selfcontained:!1,doNotSkipEncoded:!1},template:void 0,compile:void 0,log:!0}
!function(){if("object"!==("undefined"==typeof globalThis?"undefined":o(globalThis)))try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch(e){n.globalThis=function(){if("undefined"!=typeof self)return self
if(void 0!==n)return n
if(void 0!==r)return r
if(void 0!==this)return this
throw new Error("Unable to locate global `this`")}()}}(),e.encodeHTMLSource=function(e){var t={"&":"&#38;","<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","/":"&#47;"},n=e?/[&<>"'\/]/g:/&(?!#?\w+;)|<|>|"|'|\//g
return function(e){return e?e.toString().replace(n,(function(e){return t[e]||e})):""}},void 0!==t&&t.exports?t.exports=e:"function"==typeof define&&define.amd?define((function(){return e})):globalThis.doT=e
var a={append:{start:"'+(",end:")+'",startencode:"'+encodeHTML("},split:{start:"';out+=(",end:");out+='",startencode:"';out+=encodeHTML("}},i=/$^/
function s(e,t,n){return("string"==typeof t?t:t.toString()).replace(e.define||i,(function(t,r,a,o){return 0===r.indexOf("def.")&&(r=r.substring(4)),r in n||(":"===a?(e.defineParams&&o.replace(e.defineParams,(function(e,t,a){n[r]={arg:t,text:a}})),r in n||(n[r]=o)):new Function("def","def['"+r+"']="+o)(n)),""})).replace(e.use||i,(function(t,r){e.useParams&&(r=r.replace(e.useParams,(function(e,t,r,a){if(n[r]&&n[r].arg&&a){var o=(r+":"+a).replace(/'|\\/g,"_")
return n.__exp=n.__exp||{},n.__exp[o]=n[r].text.replace(new RegExp("(^|[^\\w$])"+n[r].arg+"([^\\w$])","g"),"$1"+a+"$2"),t+"def.__exp['"+o+"']"}})))
var a=new Function("def","return "+r)(n)
return a?s(e,a,n):a}))}function l(e){return e.replace(/\\('|\\)/g,"$1").replace(/[\r\t\n]/g," ")}e.template=function(t,n,r){var o,u,c=(n=n||e.templateSettings).append?a.append:a.split,d=0,p=n.use||n.define?s(n,t,r||{}):t
p=("var out='"+(n.strip?p.replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g," ").replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g,""):p).replace(/'|\\/g,"\\$&").replace(n.interpolate||i,(function(e,t){return c.start+l(t)+c.end})).replace(n.encode||i,(function(e,t){return o=!0,c.startencode+l(t)+c.end})).replace(n.conditional||i,(function(e,t,n){return t?n?"';}else if("+l(n)+"){out+='":"';}else{out+='":n?"';if("+l(n)+"){out+='":"';}out+='"})).replace(n.iterate||i,(function(e,t,n,r){return t?(d+=1,u=r||"i"+d,t=l(t),"';var arr"+d+"="+t+";if(arr"+d+"){var "+n+","+u+"=-1,l"+d+"=arr"+d+".length-1;while("+u+"<l"+d+"){"+n+"=arr"+d+"["+u+"+=1];out+='"):"';} } out+='"})).replace(n.evaluate||i,(function(e,t){return"';"+l(t)+"out+='"}))+"';return out;").replace(/\n/g,"\\n").replace(/\t/g,"\\t").replace(/\r/g,"\\r").replace(/(\s|;|\}|^|\{)out\+='';/g,"$1").replace(/\+''/g,""),o&&(n.selfcontained||!globalThis||globalThis._encodeHTML||(globalThis._encodeHTML=e.encodeHTMLSource(n.doNotSkipEncoded)),p="var encodeHTML = typeof _encodeHTML !== 'undefined' ? _encodeHTML : ("+e.encodeHTMLSource.toString()+"("+(n.doNotSkipEncoded||"")+"));"+p)
try{return new Function(n.varname,p)}catch(e){throw"undefined"!=typeof console&&console.log("Could not create a template function: "+p),e}},e.compile=function(t,n){return e.template(t,null,n)}}()})),Ct=L((function(e,t){var i,s
i=e,s=function(){"use strict"
function e(e){return"function"==typeof e}var t=Array.isArray?Array.isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)},i=0,s=void 0,l=void 0,u=function(e,t){g[i]=e,g[i+1]=t,2===(i+=2)&&(l?l(v):x())},c=void 0!==n?n:void 0,d=c||{},p=d.MutationObserver||d.WebKitMutationObserver,f="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),h="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel
function m(){var e=setTimeout
return function(){return e(v,1)}}var g=new Array(1e3)
function v(){for(var e=0;e<i;e+=2)(0,g[e])(g[e+1]),g[e]=void 0,g[e+1]=void 0
i=0}var y,b,w,D,x=void 0
function E(e,t){var n=this,r=new this.constructor(k)
void 0===r[A]&&M(r)
var a=n._state
if(a){var o=arguments[a-1]
u((function(){return P(a,r,o,n._result)}))}else _(n,r,e,t)
return r}function C(e){if(e&&"object"===o(e)&&e.constructor===this)return e
var t=new this(k)
return F(t,e),t}f?x=function(){return process.nextTick(v)}:p?(b=0,w=new p(v),D=a.createTextNode(""),w.observe(D,{characterData:!0}),x=function(){D.data=b=++b%2}):h?((y=new MessageChannel).port1.onmessage=v,x=function(){return y.port2.postMessage(0)}):x=void 0===c?function(){try{var e=Function("return this")().require("vertx")
return void 0!==(s=e.runOnLoop||e.runOnContext)?function(){s(v)}:m()}catch(e){return m()}}():m()
var A=Math.random().toString(36).substring(2)
function k(){}var T=void 0
function N(t,n,r){n.constructor===t.constructor&&r===E&&n.constructor.resolve===C?function(e,t){1===t._state?S(e,t._result):2===t._state?O(e,t._result):_(t,void 0,(function(t){return F(e,t)}),(function(t){return O(e,t)}))}(t,n):void 0===r?S(t,n):e(r)?function(e,t,n){u((function(e){var r=!1,a=function(n,a,o,i){try{n.call(a,(function(n){r||(r=!0,t!==n?F(e,n):S(e,n))}),(function(t){r||(r=!0,O(e,t))}))}catch(e){return e}}(n,t,0,0,e._label)
!r&&a&&(r=!0,O(e,a))}),e)}(t,n,r):S(t,n)}function F(e,t){if(e===t)O(e,new TypeError("You cannot resolve a promise with itself"))
else if(a=o(r=t),null===r||"object"!==a&&"function"!==a)S(e,t)
else{var n=void 0
try{n=t.then}catch(t){return void O(e,t)}N(e,t,n)}var r,a}function R(e){e._onerror&&e._onerror(e._result),I(e)}function S(e,t){e._state===T&&(e._result=t,e._state=1,0!==e._subscribers.length&&u(I,e))}function O(e,t){e._state===T&&(e._state=2,e._result=t,u(R,e))}function _(e,t,n,r){var a=e._subscribers,o=a.length
e._onerror=null,a[o]=t,a[o+1]=n,a[o+2]=r,0===o&&e._state&&u(I,e)}function I(e){var t=e._subscribers,n=e._state
if(0!==t.length){for(var r=void 0,a=void 0,o=e._result,i=0;i<t.length;i+=3)r=t[i],a=t[i+n],r?P(n,r,a,o):a(o)
e._subscribers.length=0}}function P(t,n,r,a){var o=e(r),i=void 0,s=void 0,l=!0
if(o){try{i=r(a)}catch(e){l=!1,s=e}if(n===i)return void O(n,new TypeError("A promises callback cannot return that same promise."))}else i=a
n._state!==T||(o&&l?F(n,i):!1===l?O(n,s):1===t?S(n,i):2===t&&O(n,i))}var j=0
function M(e){e[A]=j++,e._state=void 0,e._result=void 0,e._subscribers=[]}var q=function(){function e(e,n){this._instanceConstructor=e,this.promise=new e(k),this.promise[A]||M(this.promise),t(n)?(this.length=n.length,this._remaining=n.length,this._result=new Array(this.length),0===this.length?S(this.promise,this._result):(this.length=this.length||0,this._enumerate(n),0===this._remaining&&S(this.promise,this._result))):O(this.promise,new Error("Array Methods must be provided an Array"))}return e.prototype._enumerate=function(e){for(var t=0;this._state===T&&t<e.length;t++)this._eachEntry(e[t],t)},e.prototype._eachEntry=function(e,t){var n=this._instanceConstructor,r=n.resolve
if(r===C){var a=void 0,o=void 0,i=!1
try{a=e.then}catch(e){i=!0,o=e}if(a===E&&e._state!==T)this._settledAt(e._state,t,e._result)
else if("function"!=typeof a)this._remaining--,this._result[t]=e
else if(n===L){var s=new n(k)
i?O(s,o):N(s,e,a),this._willSettleAt(s,t)}else this._willSettleAt(new n((function(t){return t(e)})),t)}else this._willSettleAt(r(e),t)},e.prototype._settledAt=function(e,t,n){var r=this.promise
r._state===T&&(this._remaining--,2===e?O(r,n):this._result[t]=n),0===this._remaining&&S(r,this._result)},e.prototype._willSettleAt=function(e,t){var n=this
_(e,void 0,(function(e){return n._settledAt(1,t,e)}),(function(e){return n._settledAt(2,t,e)}))},e}(),L=function(){function t(e){this[A]=j++,this._result=this._state=void 0,this._subscribers=[],k!==e&&("function"!=typeof e&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof t?function(e,t){try{t((function(t){F(e,t)}),(function(t){O(e,t)}))}catch(t){O(e,t)}}(this,e):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return t.prototype.catch=function(e){return this.then(null,e)},t.prototype.finally=function(t){var n=this,r=n.constructor
return e(t)?n.then((function(e){return r.resolve(t()).then((function(){return e}))}),(function(e){return r.resolve(t()).then((function(){throw e}))})):n.then(t,t)},t}()
return L.prototype.then=E,L.all=function(e){return new q(this,e).promise},L.race=function(e){var n=this
return t(e)?new n((function(t,r){for(var a=e.length,o=0;o<a;o++)n.resolve(e[o]).then(t,r)})):new n((function(e,t){return t(new TypeError("You must pass an array to race."))}))},L.resolve=C,L.reject=function(e){var t=new this(k)
return O(t,e),t},L._setScheduler=function(e){l=e},L._setAsap=function(e){u=e},L._asap=u,L.polyfill=function(){var e=void 0
if(void 0!==r)e=r
else if("undefined"!=typeof self)e=self
else try{e=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var t=e.Promise
if(t){var n=null
try{n=Object.prototype.toString.call(t.resolve())}catch(e){}if("[object Promise]"===n&&!t.cast)return}e.Promise=L},L.Promise=L,L},"object"===o(e)&&void 0!==t?t.exports=s():"function"==typeof define&&define.amd?define(s):i.ES6Promise=s()})),At=L((function(e){var t,n,r,a=void 0,i=(t=Object.prototype.toString,n=Object.prototype.hasOwnProperty,{Class:function(e){return t.call(e).replace(/^\[object *|\]$/g,"")},HasProperty:function(e,t){return t in e},HasOwnProperty:function(e,t){return n.call(e,t)},IsCallable:function(e){return"function"==typeof e},ToInt32:function(e){return e>>0},ToUint32:function(e){return e>>>0}}),s=Math.LN2,l=Math.abs,u=Math.floor,c=Math.log,d=Math.min,p=Math.pow,f=Math.round
function h(e){if(m&&r){var t,n=m(e)
for(t=0;t<n.length;t+=1)r(e,n[t],{value:e[n[t]],writable:!1,enumerable:!1,configurable:!1})}}r=Object.defineProperty&&function(){try{return Object.defineProperty({},"x",{}),!0}catch(e){return!1}}()?Object.defineProperty:function(e,t,n){if(!e===Object(e))throw new TypeError("Object.defineProperty called on non-object")
return i.HasProperty(n,"get")&&Object.prototype.__defineGetter__&&Object.prototype.__defineGetter__.call(e,t,n.get),i.HasProperty(n,"set")&&Object.prototype.__defineSetter__&&Object.prototype.__defineSetter__.call(e,t,n.set),i.HasProperty(n,"value")&&(e[t]=n.value),e}
var m=Object.getOwnPropertyNames||function(e){if(e!==Object(e))throw new TypeError("Object.getOwnPropertyNames called on non-object")
var t,n=[]
for(t in e)i.HasOwnProperty(e,t)&&n.push(t)
return n}
function g(e){if(r){if(e.length>1e5)throw new RangeError("Array too large for polyfill")
var t
for(t=0;t<e.length;t+=1)n(t)}function n(t){r(e,t,{get:function(){return e._getter(t)},set:function(n){e._setter(t,n)},enumerable:!0,configurable:!1})}}function v(e,t){var n=32-t
return e<<n>>n}function y(e,t){var n=32-t
return e<<n>>>n}function b(e){return[255&e]}function w(e){return v(e[0],8)}function D(e){return[255&e]}function x(e){return y(e[0],8)}function E(e){return[(e=f(Number(e)))<0?0:e>255?255:255&e]}function C(e){return[e>>8&255,255&e]}function A(e){return v(e[0]<<8|e[1],16)}function k(e){return[e>>8&255,255&e]}function T(e){return y(e[0]<<8|e[1],16)}function N(e){return[e>>24&255,e>>16&255,e>>8&255,255&e]}function F(e){return v(e[0]<<24|e[1]<<16|e[2]<<8|e[3],32)}function R(e){return[e>>24&255,e>>16&255,e>>8&255,255&e]}function S(e){return y(e[0]<<24|e[1]<<16|e[2]<<8|e[3],32)}function O(e,t,n){var r,a,o,i,f,h,m,g=(1<<t-1)-1
function v(e){var t=u(e),n=e-t
return n<.5?t:n>.5||t%2?t+1:t}for(e!=e?(a=(1<<t)-1,o=p(2,n-1),r=0):e===1/0||e===-1/0?(a=(1<<t)-1,o=0,r=e<0?1:0):0===e?(a=0,o=0,r=1/e==-1/0?1:0):(r=e<0,(e=l(e))>=p(2,1-g)?(a=d(u(c(e)/s),1023),(o=v(e/p(2,a)*p(2,n)))/p(2,n)>=2&&(a+=1,o=1),a>g?(a=(1<<t)-1,o=0):(a+=g,o-=p(2,n))):(a=0,o=v(e/p(2,1-g-n)))),f=[],i=n;i;i-=1)f.push(o%2?1:0),o=u(o/2)
for(i=t;i;i-=1)f.push(a%2?1:0),a=u(a/2)
for(f.push(r?1:0),f.reverse(),h=f.join(""),m=[];h.length;)m.push(parseInt(h.substring(0,8),2)),h=h.substring(8)
return m}function _(e,t,n){var r,a,o,i,s,l,u,c,d=[]
for(r=e.length;r;r-=1)for(o=e[r-1],a=8;a;a-=1)d.push(o%2?1:0),o>>=1
return d.reverse(),i=d.join(""),s=(1<<t-1)-1,l=parseInt(i.substring(0,1),2)?-1:1,u=parseInt(i.substring(1,1+t),2),c=parseInt(i.substring(1+t),2),u===(1<<t)-1?0!==c?NaN:l*(1/0):u>0?l*p(2,u-s)*(1+c/p(2,n)):0!==c?l*p(2,-(s-1))*(c/p(2,n)):l<0?-0:0}function I(e){return _(e,11,52)}function P(e){return O(e,11,52)}function j(e){return _(e,8,23)}function M(e){return O(e,8,23)}!function(){var t=function(e){if((e=i.ToInt32(e))<0)throw new RangeError("ArrayBuffer size is not a small enough positive integer")
var t
for(this.byteLength=e,this._bytes=[],this._bytes.length=e,t=0;t<this.byteLength;t+=1)this._bytes[t]=0
h(this)}
e.ArrayBuffer=e.ArrayBuffer||t
var n=function(){}
function r(e,r,s){var l
return l=function(e,n,r){var a,s,u,c
if(arguments.length&&"number"!=typeof arguments[0])if("object"===o(arguments[0])&&arguments[0].constructor===l)for(a=arguments[0],this.length=a.length,this.byteLength=this.length*this.BYTES_PER_ELEMENT,this.buffer=new t(this.byteLength),this.byteOffset=0,u=0;u<this.length;u+=1)this._setter(u,a._getter(u))
else if("object"!==o(arguments[0])||arguments[0]instanceof t||"ArrayBuffer"===i.Class(arguments[0])){if("object"!==o(arguments[0])||!(arguments[0]instanceof t||"ArrayBuffer"===i.Class(arguments[0])))throw new TypeError("Unexpected argument type(s)")
if(this.buffer=e,this.byteOffset=i.ToUint32(n),this.byteOffset>this.buffer.byteLength)throw new RangeError("byteOffset out of range")
if(this.byteOffset%this.BYTES_PER_ELEMENT)throw new RangeError("ArrayBuffer length minus the byteOffset is not a multiple of the element size.")
if(arguments.length<3){if(this.byteLength=this.buffer.byteLength-this.byteOffset,this.byteLength%this.BYTES_PER_ELEMENT)throw new RangeError("length of buffer minus byteOffset not a multiple of the element size")
this.length=this.byteLength/this.BYTES_PER_ELEMENT}else this.length=i.ToUint32(r),this.byteLength=this.length*this.BYTES_PER_ELEMENT
if(this.byteOffset+this.byteLength>this.buffer.byteLength)throw new RangeError("byteOffset and length reference an area beyond the end of the buffer")}else for(s=arguments[0],this.length=i.ToUint32(s.length),this.byteLength=this.length*this.BYTES_PER_ELEMENT,this.buffer=new t(this.byteLength),this.byteOffset=0,u=0;u<this.length;u+=1)c=s[u],this._setter(u,Number(c))
else{if(this.length=i.ToInt32(arguments[0]),r<0)throw new RangeError("ArrayBufferView size is not a small enough positive integer")
this.byteLength=this.length*this.BYTES_PER_ELEMENT,this.buffer=new t(this.byteLength),this.byteOffset=0}this.constructor=l,h(this),g(this)},l.prototype=new n,l.prototype.BYTES_PER_ELEMENT=e,l.prototype._pack=r,l.prototype._unpack=s,l.BYTES_PER_ELEMENT=e,l.prototype._getter=function(e){if(arguments.length<1)throw new SyntaxError("Not enough arguments")
if((e=i.ToUint32(e))>=this.length)return a
var t,n,r=[]
for(t=0,n=this.byteOffset+e*this.BYTES_PER_ELEMENT;t<this.BYTES_PER_ELEMENT;t+=1,n+=1)r.push(this.buffer._bytes[n])
return this._unpack(r)},l.prototype.get=l.prototype._getter,l.prototype._setter=function(e,t){if(arguments.length<2)throw new SyntaxError("Not enough arguments")
if((e=i.ToUint32(e))>=this.length)return a
var n,r,o=this._pack(t)
for(n=0,r=this.byteOffset+e*this.BYTES_PER_ELEMENT;n<this.BYTES_PER_ELEMENT;n+=1,r+=1)this.buffer._bytes[r]=o[n]},l.prototype.set=function(e,t){if(arguments.length<1)throw new SyntaxError("Not enough arguments")
var n,r,a,s,l,u,c,d,p,f
if("object"===o(arguments[0])&&arguments[0].constructor===this.constructor){if(n=arguments[0],(a=i.ToUint32(arguments[1]))+n.length>this.length)throw new RangeError("Offset plus length of array is out of range")
if(d=this.byteOffset+a*this.BYTES_PER_ELEMENT,p=n.length*this.BYTES_PER_ELEMENT,n.buffer===this.buffer){for(f=[],l=0,u=n.byteOffset;l<p;l+=1,u+=1)f[l]=n.buffer._bytes[u]
for(l=0,c=d;l<p;l+=1,c+=1)this.buffer._bytes[c]=f[l]}else for(l=0,u=n.byteOffset,c=d;l<p;l+=1,u+=1,c+=1)this.buffer._bytes[c]=n.buffer._bytes[u]}else{if("object"!==o(arguments[0])||void 0===arguments[0].length)throw new TypeError("Unexpected argument type(s)")
if(r=arguments[0],s=i.ToUint32(r.length),(a=i.ToUint32(arguments[1]))+s>this.length)throw new RangeError("Offset plus length of array is out of range")
for(l=0;l<s;l+=1)u=r[l],this._setter(a+l,Number(u))}},l.prototype.subarray=function(e,t){function n(e,t,n){return e<t?t:e>n?n:e}e=i.ToInt32(e),t=i.ToInt32(t),arguments.length<1&&(e=0),arguments.length<2&&(t=this.length),e<0&&(e=this.length+e),t<0&&(t=this.length+t),e=n(e,0,this.length)
var r=(t=n(t,0,this.length))-e
return r<0&&(r=0),new this.constructor(this.buffer,this.byteOffset+e*this.BYTES_PER_ELEMENT,r)},l}var s=r(1,b,w),l=r(1,D,x),u=r(1,E,x),c=r(2,C,A),d=r(2,k,T),p=r(4,N,F),f=r(4,R,S),m=r(4,M,j),v=r(8,P,I)
e.Int8Array=e.Int8Array||s,e.Uint8Array=e.Uint8Array||l,e.Uint8ClampedArray=e.Uint8ClampedArray||u,e.Int16Array=e.Int16Array||c,e.Uint16Array=e.Uint16Array||d,e.Int32Array=e.Int32Array||p,e.Uint32Array=e.Uint32Array||f,e.Float32Array=e.Float32Array||m,e.Float64Array=e.Float64Array||v}(),function(){function t(e,t){return i.IsCallable(e.get)?e.get(t):e[t]}var n,r=(n=new e.Uint16Array([4660]),18===t(new e.Uint8Array(n.buffer),0)),a=function(t,n,r){if(0===arguments.length)t=new e.ArrayBuffer(0)
else if(!(t instanceof e.ArrayBuffer||"ArrayBuffer"===i.Class(t)))throw new TypeError("TypeError")
if(this.buffer=t||new e.ArrayBuffer(0),this.byteOffset=i.ToUint32(n),this.byteOffset>this.buffer.byteLength)throw new RangeError("byteOffset out of range")
if(this.byteLength=arguments.length<3?this.buffer.byteLength-this.byteOffset:i.ToUint32(r),this.byteOffset+this.byteLength>this.buffer.byteLength)throw new RangeError("byteOffset and length reference an area beyond the end of the buffer")
h(this)}
function o(n){return function(a,o){if((a=i.ToUint32(a))+n.BYTES_PER_ELEMENT>this.byteLength)throw new RangeError("Array index out of range")
a+=this.byteOffset
var s,l=new e.Uint8Array(this.buffer,a,n.BYTES_PER_ELEMENT),u=[]
for(s=0;s<n.BYTES_PER_ELEMENT;s+=1)u.push(t(l,s))
return Boolean(o)===Boolean(r)&&u.reverse(),t(new n(new e.Uint8Array(u).buffer),0)}}function s(n){return function(a,o,s){if((a=i.ToUint32(a))+n.BYTES_PER_ELEMENT>this.byteLength)throw new RangeError("Array index out of range")
var l,u=new n([o]),c=new e.Uint8Array(u.buffer),d=[]
for(l=0;l<n.BYTES_PER_ELEMENT;l+=1)d.push(t(c,l))
Boolean(s)===Boolean(r)&&d.reverse(),new e.Uint8Array(this.buffer,a,n.BYTES_PER_ELEMENT).set(d)}}a.prototype.getUint8=o(e.Uint8Array),a.prototype.getInt8=o(e.Int8Array),a.prototype.getUint16=o(e.Uint16Array),a.prototype.getInt16=o(e.Int16Array),a.prototype.getUint32=o(e.Uint32Array),a.prototype.getInt32=o(e.Int32Array),a.prototype.getFloat32=o(e.Float32Array),a.prototype.getFloat64=o(e.Float64Array),a.prototype.setUint8=s(e.Uint8Array),a.prototype.setInt8=s(e.Int8Array),a.prototype.setUint16=s(e.Uint16Array),a.prototype.setInt16=s(e.Int16Array),a.prototype.setUint32=s(e.Uint32Array),a.prototype.setInt32=s(e.Int32Array),a.prototype.setFloat32=s(e.Float32Array),a.prototype.setFloat64=s(e.Float64Array),e.DataView=e.DataView||a}()})),kt=L((function(e){!function(e){"use strict"
if(!e.WeakMap){var t=Object.prototype.hasOwnProperty,n=Object.defineProperty&&function(){try{return 1===Object.defineProperty({},"x",{value:1}).x}catch(e){}}(),r=function(e,t,r){n?Object.defineProperty(e,t,{configurable:!0,writable:!0,value:r}):e[t]=r}
e.WeakMap=function(){function e(){if(void 0===this)throw new TypeError("Constructor WeakMap requires 'new'")
if(r(this,"_id",i("_WeakMap")),arguments.length>0)throw new TypeError("WeakMap iterable is not supported")}function n(e,n){if(!a(e)||!t.call(e,"_id"))throw new TypeError(n+" method called on incompatible receiver "+o(e))}function i(e){return e+"_"+s()+"."+s()}function s(){return Math.random().toString().substring(2)}return r(e.prototype,"delete",(function(e){if(n(this,"delete"),!a(e))return!1
var t=e[this._id]
return!(!t||t[0]!==e||(delete e[this._id],0))})),r(e.prototype,"get",(function(e){if(n(this,"get"),a(e)){var t=e[this._id]
return t&&t[0]===e?t[1]:void 0}})),r(e.prototype,"has",(function(e){if(n(this,"has"),!a(e))return!1
var t=e[this._id]
return!(!t||t[0]!==e)})),r(e.prototype,"set",(function(e,t){if(n(this,"set"),!a(e))throw new TypeError("Invalid value used as weak map key")
var o=e[this._id]
return o&&o[0]===e?(o[1]=t,this):(r(e,this._id,[e,t]),this)})),r(e,"_polyfill",!0),e}()}function a(e){return Object(e)===e}}("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:void 0!==n?n:void 0!==r?r:e)})),Tt={helpUrlBase:"https://dequeuniversity.com/rules/",results:[],resultGroups:[],resultGroupMap:{},impact:Object.freeze(["minor","moderate","serious","critical"]),preload:Object.freeze({assets:["cssom","media"],timeout:1e4}),allOrigins:"<unsafe_all_origins>",sameOrigin:"<same_origin>"};[{name:"NA",value:"inapplicable",priority:0,group:"inapplicable"},{name:"PASS",value:"passed",priority:1,group:"passes"},{name:"CANTTELL",value:"cantTell",priority:2,group:"incomplete"},{name:"FAIL",value:"failed",priority:3,group:"violations"}].forEach((function(e){var t=e.name,n=e.value,r=e.priority,a=e.group
Tt[t]=n,Tt[t+"_PRIO"]=r,Tt[t+"_GROUP"]=a,Tt.results[r]=n,Tt.resultGroups[r]=a,Tt.resultGroupMap[n]=a})),Object.freeze(Tt.results),Object.freeze(Tt.resultGroups),Object.freeze(Tt.resultGroupMap),Object.freeze(Tt)
var Nt=Tt,Ft=function(){"object"===("undefined"==typeof console?"undefined":o(console))&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},Rt=/[\t\r\n\f]/g,St=function(){function e(){I(this,e),this.parent=void 0}return j(e,[{key:"props",get:function(){throw new Error('VirtualNode class must have a "props" object consisting of "nodeType" and "nodeName" properties')}},{key:"attrNames",get:function(){throw new Error('VirtualNode class must have an "attrNames" property')}},{key:"attr",value:function(){throw new Error('VirtualNode class must have an "attr" function')}},{key:"hasAttr",value:function(){throw new Error('VirtualNode class must have a "hasAttr" function')}},{key:"hasClass",value:function(e){var t=this.attr("class")
if(!t)return!1
var n=" "+e+" "
return(" "+t+" ").replace(Rt," ").indexOf(n)>=0}}]),e}(),Ot={}
B(Ot,{DqElement:function(){return or},aggregate:function(){return dn},aggregateChecks:function(){return vn},aggregateNodeResults:function(){return bn},aggregateResult:function(){return Dn},areStylesSet:function(){return xn},assert:function(){return Pt},checkHelper:function(){return ir},clone:function(){return sr},closest:function(){return xr},collectResultsFromFrames:function(){return qr},contains:function(){return Lr},convertSelector:function(){return yr},cssParser:function(){return ur},deepMerge:function(){return Br},escapeSelector:function(){return Cn},extendMetaData:function(){return Hr},filterHtmlAttrs:function(){return Ti},finalizeRuleResult:function(){return yn},findBy:function(){return Pr},getAllChecks:function(){return Ir},getAncestry:function(){return Kn},getBaseLang:function(){return vo},getCheckMessage:function(){return Ao},getCheckOption:function(){return ko},getEnvironmentData:function(){return To},getFlattenedTree:function(){return go},getFrameContexts:function(){return Po},getFriendlyUriEnd:function(){return Sn},getNodeAttributes:function(){return On},getNodeFromTree:function(){return nr},getPreloadConfig:function(){return wi},getRootNode:function(){return Vr},getRule:function(){return jo},getScroll:function(){return Mo},getScrollState:function(){return Bo},getSelector:function(){return Qn},getSelectorData:function(){return zn},getShadowSelector:function(){return Pn},getStandards:function(){return Ho},getStyleSheetFactory:function(){return zo},getXpath:function(){return Zn},injectStyle:function(){return $o},isHidden:function(){return Vo},isHtmlElement:function(){return Wo},isNodeInContext:function(){return Yo},isShadowRoot:function(){return zr},isValidLang:function(){return Mi},isXHTML:function(){return In},matchAncestry:function(){return Qo},matches:function(){return Dr},matchesExpression:function(){return wr},matchesSelector:function(){return _n},memoize:function(){return Ko},mergeResults:function(){return Mr},nodeSorter:function(){return Jo},parseCrossOriginStylesheet:function(){return ii},parseSameOriginStylesheet:function(){return Zo},parseStylesheet:function(){return oi},performanceTimer:function(){return li},pollyfillElementsFromPoint:function(){return ui},preload:function(){return Di},preloadCssom:function(){return hi},preloadMedia:function(){return yi},processMessage:function(){return Co},publishMetaData:function(){return Ei},querySelectorAll:function(){return Ci},querySelectorAllFilter:function(){return fi},queue:function(){return Tr},respondable:function(){return Fr},ruleShouldRun:function(){return ki},select:function(){return Fi},sendCommandToFrame:function(){return Sr},setScrollState:function(){return Ri},shadowSelect:function(){return Si},shouldPreload:function(){return bi},toArray:function(){return En},tokenList:function(){return _i},uniqueArray:function(){return ci},uuid:function(){return rn},validInputTypes:function(){return Ii},validLangs:function(){return ji}})
var _t=Object.freeze(["EvalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"])
function It(){var e="axeAPI",t=""
return void 0!==i&&i._audit&&i._audit.application&&(e=i._audit.application),void 0!==i&&(t=i.version),e+"."+t}var Pt=function(e,t){if(!e)throw new Error(t)}
function jt(e){qt(e),Pt(n.parent===e,"Source of the response must be the parent window.")}function Mt(e){qt(e),Pt(e.parent===n,"Respondable target must be a frame in the current window")}function qt(e){Pt(n!==e,"Messages can not be sent to the same window.")}var Lt,Bt,Ht={},Ut=n.crypto||n.msCrypto
if(!Bt&&Ut&&Ut.getRandomValues){var zt=new Uint8Array(16)
Bt=function(){return Ut.getRandomValues(zt),zt}}if(!Bt){var $t=new Array(16)
Bt=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),$t[t]=e>>>((3&t)<<3)&255
return $t}}for(var Vt="function"==typeof n.Buffer?n.Buffer:Array,Wt=[],Gt={},Yt=0;Yt<256;Yt++)Wt[Yt]=(Yt+256).toString(16).substr(1),Gt[Wt[Yt]]=Yt
function Qt(e,t){var n=t||0,r=Wt
return r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]}var Xt=Bt(),Kt=[1|Xt[0],Xt[1],Xt[2],Xt[3],Xt[4],Xt[5]],Jt=16383&(Xt[6]<<8|Xt[7]),Zt=0,en=0
function tn(e,t,n){var r=t&&n||0,a=t||[],o=null!=(e=e||{}).clockseq?e.clockseq:Jt,i=null!=e.msecs?e.msecs:(new Date).getTime(),s=null!=e.nsecs?e.nsecs:en+1,l=i-Zt+(s-en)/1e4
if(l<0&&null==e.clockseq&&(o=o+1&16383),(l<0||i>Zt)&&null==e.nsecs&&(s=0),s>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec")
Zt=i,en=s,Jt=o
var u=(1e4*(268435455&(i+=122192928e5))+s)%4294967296
a[r++]=u>>>24&255,a[r++]=u>>>16&255,a[r++]=u>>>8&255,a[r++]=255&u
var c=i/4294967296*1e4&268435455
a[r++]=c>>>8&255,a[r++]=255&c,a[r++]=c>>>24&15|16,a[r++]=c>>>16&255,a[r++]=o>>>8|128,a[r++]=255&o
for(var d=e.node||Kt,p=0;p<6;p++)a[r+p]=d[p]
return t||Qt(a)}function nn(e,t,n){var r=t&&n||0
"string"==typeof e&&(t="binary"==e?new Vt(16):null,e=null)
var a=(e=e||{}).random||(e.rng||Bt)()
if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,t)for(var o=0;o<16;o++)t[r+o]=a[o]
return t||Qt(a)}(Lt=nn).v1=tn,Lt.v4=nn,Lt.parse=function(e,t,n){var r=t&&n||0,a=0
for(t=t||[],e.toLowerCase().replace(/[0-9a-f]{2}/g,(function(e){a<16&&(t[r+a++]=Gt[e])}));a<16;)t[r+a++]=0
return t},Lt.unparse=Qt,Lt.BufferClass=Vt,i._uuid=tn()
var rn=nn,an=[]
function on(){var e="".concat(nn(),":").concat(nn())
return an.includes(e)?on():(an.push(e),e)}function sn(e,t,n,r){if("function"==typeof r&&function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2]
Pt(!Ht[e],"A replyHandler already exists for this message channel."),Ht[e]={replyHandler:t,sendToParent:n}}(t.channelId,r,n),n?jt(e):Mt(e),t.message instanceof Error&&!n)return i.log(t.message),!1
var a=function(e){var t=e.topic,n=e.channelId,r=e.message,a={channelId:n,topic:t,messageId:e.messageId,keepalive:!!e.keepalive,source:It()}
return r instanceof Error?a.error={name:r.name,message:r.message,stack:r.stack}:a.payload=r,JSON.stringify(a)}(_({messageId:on()},t)),o=i._audit.allowedOrigins
return!(!o||!o.length||(o.forEach((function(t){try{e.postMessage(a,t)}catch(n){if(n instanceof e.DOMException)throw new Error('allowedOrigins value "'.concat(t,'" is not a valid origin'))
throw n}})),0))}function ln(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2]
return function(r,a,o){sn(e,{channelId:t,message:r,keepalive:a},n,o)}}var un={open:function(e){if("function"==typeof n.addEventListener){var t=function(t){(function(e,t){var r,a=e.origin,s=e.data,l=e.source
try{var u=function(e){var t,r,a,i,s
try{t=JSON.parse(e)}catch(e){return}if(null!==(l=t)&&"object"===o(l)&&"string"==typeof l.channelId&&l.source===It()){var l,u=t,c=u.topic,d=u.channelId,p=u.messageId,f=u.keepalive
return{topic:c,message:"object"===o(t.error)?(r=t.error,a=r.message||"Unknown error occurred",i=_t.includes(r.name)?r.name:"Error",s=n[i]||Error,r.stack&&(a+="\n"+r.stack.replace(r.message,"")),new s(a)):t.payload,messageId:p,channelId:d,keepalive:!!f}}}(s)||{},c=u.channelId,d=u.message,p=u.messageId
if(!function(e){var t=i._audit.allowedOrigins
return t&&t.includes("*")||t.includes(e)}(a)||(r=p,an.includes(r)||(an.push(r),0)))return
if(d instanceof Error&&l.parent!==n)return i.log(d),!1
try{if(u.topic){var f=ln(l,c)
jt(l),t(u,f)}else!function(e,t){var n=t.channelId,r=t.message,a=t.keepalive,o=function(e){return Ht[e]}(n)||{},s=o.replyHandler,l=o.sendToParent
if(s){l?jt(e):Mt(e)
var u=ln(e,n,l)
!a&&n&&function(e){delete Ht[e]}(n)
try{s(r,a,u)}catch(e){i.log(e),u(e,a)}}}(l,u)}catch(e){!function(e,t,r){if(!e.parent!==n)return i.log(t)
try{sn(e,{topic:null,channelId:r,message:t,messageId:on(),keepalive:!0},!0)}catch(e){return i.log(e)}}(l,e,c)}}catch(e){return i.log(e),!1}})(t,e)}
return n.addEventListener("message",t,!1),function(){n.removeEventListener("message",t,!1)}}},post:function(e,t,r){return"function"==typeof n.addEventListener&&sn(e,t,!1,r)}}
function cn(e){e.updateMessenger(un)}var dn=function(e,t,n){t=t.slice(),n&&t.push(n)
var r=t.map((function(t){return e.indexOf(t)})).sort()
return e[r.pop()]},pn=Nt.CANTTELL_PRIO,fn=Nt.FAIL_PRIO,hn=[]
hn[Nt.PASS_PRIO]=!0,hn[Nt.CANTTELL_PRIO]=null,hn[Nt.FAIL_PRIO]=!1
var mn=["any","all","none"]
function gn(e,t){return mn.reduce((function(n,r){return n[r]=(e[r]||[]).map((function(e){return t(e,r)})),n}),{})}var vn=function(e){var t=Object.assign({},e)
gn(t,(function(e,t){var n=void 0===e.result?-1:hn.indexOf(e.result)
e.priority=-1!==n?n:Nt.CANTTELL_PRIO,"none"===t&&(e.priority===Nt.PASS_PRIO?e.priority=Nt.FAIL_PRIO:e.priority===Nt.FAIL_PRIO&&(e.priority=Nt.PASS_PRIO))}))
var n={all:t.all.reduce((function(e,t){return Math.max(e,t.priority)}),0),none:t.none.reduce((function(e,t){return Math.max(e,t.priority)}),0),any:t.any.reduce((function(e,t){return Math.min(e,t.priority)}),4)%4}
t.priority=Math.max(n.all,n.none,n.any)
var r=[]
return mn.forEach((function(e){t[e]=t[e].filter((function(r){return r.priority===t.priority&&r.priority===n[e]})),t[e].forEach((function(e){return r.push(e.impact)}))})),[pn,fn].includes(t.priority)?t.impact=dn(Nt.impact,r):t.impact=null,gn(t,(function(e){delete e.result,delete e.priority})),t.result=Nt.results[t.priority],delete t.priority,t},yn=function(e){var t=i._audit.rules.find((function(t){return t.id===e.id}))
return t&&t.impact&&e.nodes.forEach((function(e){["any","all","none"].forEach((function(n){(e[n]||[]).forEach((function(e){e.impact=t.impact}))}))})),Object.assign(e,bn(e.nodes)),delete e.nodes,e},bn=function(e){var t={}
if((e=e.map((function(e){if(e.any&&e.all&&e.none)return vn(e)
if(Array.isArray(e.node))return yn(e)
throw new TypeError("Invalid Result type")})))&&e.length){var n=e.map((function(e){return e.result}))
t.result=dn(Nt.results,n,t.result)}else t.result="inapplicable"
Nt.resultGroups.forEach((function(e){return t[e]=[]})),e.forEach((function(e){var n=Nt.resultGroupMap[e.result]
t[n].push(e)}))
var r=Nt.FAIL_GROUP
if(0===t[r].length&&(r=Nt.CANTTELL_GROUP),t[r].length>0){var a=t[r].map((function(e){return e.impact}))
t.impact=dn(Nt.impact,a)||null}else t.impact=null
return t}
function wn(e,t,n){var r=Object.assign({},t)
r.nodes=(r[n]||[]).concat(),Nt.resultGroups.forEach((function(e){delete r[e]})),e[n].push(r)}var Dn=function(e){var t={}
return Nt.resultGroups.forEach((function(e){return t[e]=[]})),e.forEach((function(e){e.error?wn(t,e,Nt.CANTTELL_GROUP):e.result===Nt.NA?wn(t,e,Nt.NA_GROUP):Nt.resultGroups.forEach((function(n){Array.isArray(e[n])&&e[n].length>0&&wn(t,e,n)}))})),t},xn=function e(t,r,a){var o=n.getComputedStyle(t,null)
if(!o)return!1
for(var i=0;i<r.length;++i){var s=r[i]
if(o.getPropertyValue(s.property)===s.value)return!0}return!(!t.parentNode||t.nodeName.toUpperCase()===a.toUpperCase())&&e(t.parentNode,r,a)},En=function(e){return Array.prototype.slice.call(e)},Cn=function(e){for(var t,n=String(e),r=n.length,a=-1,o="",i=n.charCodeAt(0);++a<r;)0!=(t=n.charCodeAt(a))?o+=t>=1&&t<=31||127==t||0==a&&t>=48&&t<=57||1==a&&t>=48&&t<=57&&45==i?"\\"+t.toString(16)+" ":0==a&&1==r&&45==t||!(t>=128||45==t||95==t||t>=48&&t<=57||t>=65&&t<=90||t>=97&&t<=122)?"\\"+n.charAt(a):n.charAt(a):o+="�"
return o}
function An(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:""
return 0!==e.length&&(e.match(/[0-9]/g)||"").length>=e.length/2}function kn(e,t){return[e.substring(0,t),e.substring(t)]}function Tn(e){return e.replace(/\s+$/,"")}function Nn(e){var t=e,n="",r="",a="",o="",i=""
if(e.includes("#")){var s=O(kn(e,e.indexOf("#")),2)
e=s[0],i=s[1]}if(e.includes("?")){var l=O(kn(e,e.indexOf("?")),2)
e=l[0],o=l[1]}if(e.includes("://")){var u=O(e.split("://"),2)
n=u[0]
var c=O(kn(e=u[1],e.indexOf("/")),2)
r=c[0],e=c[1]}else if("//"===e.substr(0,2)){var d=O(kn(e=e.substr(2),e.indexOf("/")),2)
r=d[0],e=d[1]}if("www."===r.substr(0,4)&&(r=r.substr(4)),r&&r.includes(":")){var p=O(kn(r,r.indexOf(":")),2)
r=p[0],a=p[1]}return{original:t,protocol:n,domain:r,port:a,path:e,query:o,hash:i}}var Fn,Rn,Sn=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
if(!(e.length<=1||"data:"===e.substr(0,5)||"javascript:"===e.substr(0,11)||e.includes("?"))){var n=t.currentDomain,r=t.maxLength,a=void 0===r?25:r,o=Nn(e),i=o.path,s=o.domain,l=o.hash,u=i.substr(i.substr(0,i.length-2).lastIndexOf("/")+1)
if(l)return u&&(u+l).length<=a?Tn(u+l):u.length<2&&l.length>2&&l.length<=a?Tn(l):void 0
if(s&&s.length<a&&i.length<=1)return Tn(s+i)
if(i==="/"+u&&s&&n&&s!==n&&(s+i).length<=a)return Tn(s+i)
var c=u.lastIndexOf(".")
return(-1===c||c>1)&&(-1!==c||u.length>2)&&u.length<=a&&!u.match(/index(\.[a-zA-Z]{2-4})?/)&&!An(u)?Tn(u):void 0}},On=function(e){return e.attributes instanceof n.NamedNodeMap?e.attributes:e.cloneNode(!1).attributes},_n=function(e,t){return Fn&&e[Fn]||(Fn=function(e){var t,n,r=["matches","matchesSelector","mozMatchesSelector","webkitMatchesSelector","msMatchesSelector"],a=r.length
for(t=0;t<a;t++)if(e[n=r[t]])return n}(e)),!!e[Fn]&&e[Fn](t)},In=function(e){return!!e.createElement&&"A"===e.createElement("A").localName},Pn=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
if(!t)return""
var r=t.getRootNode&&t.getRootNode()||a
if(11!==r.nodeType)return e(t,n,r)
for(var o=[];11===r.nodeType;){if(!r.host)return""
o.unshift({elm:t,doc:r}),r=(t=r.host).getRootNode()}return o.unshift({elm:t,doc:r}),o.map((function(t){var r=t.elm,a=t.doc
return e(r,n,a)}))},jn=["class","style","id","selected","checked","disabled","tabindex","aria-checked","aria-selected","aria-invalid","aria-activedescendant","aria-busy","aria-disabled","aria-expanded","aria-grabbed","aria-pressed","aria-valuenow"],Mn=/([\\"])/g,qn=/(\r\n|\r|\n)/g
function Ln(e){return e.replace(Mn,"\\$1").replace(qn,"\\a ")}function Bn(e,t){var n,r=t.name
if(-1!==r.indexOf("href")||-1!==r.indexOf("src")){var a=Sn(e.getAttribute(r))
n=a?Cn(t.name)+'$="'+Ln(a)+'"':Cn(t.name)+'="'+Ln(e.getAttribute(r))+'"'}else n=Cn(r)+'="'+Ln(t.value)+'"'
return n}function Hn(e,t){return e.count<t.count?-1:e.count===t.count?0:1}function Un(e){return!jn.includes(e.name)&&-1===e.name.indexOf(":")&&(!e.value||e.value.length<31)}function zn(e){for(var t={classes:{},tags:{},attributes:{}},n=(e=Array.isArray(e)?e:[e]).slice(),r=[],a=function(){var e=n.pop(),a=e.actualNode
if(a.querySelectorAll){var o=a.nodeName
t.tags[o]?t.tags[o]++:t.tags[o]=1,a.classList&&Array.from(a.classList).forEach((function(e){var n=Cn(e)
t.classes[n]?t.classes[n]++:t.classes[n]=1})),a.hasAttributes()&&Array.from(On(a)).filter(Un).forEach((function(e){var n=Bn(a,e)
n&&(t.attributes[n]?t.attributes[n]++:t.attributes[n]=1)}))}for(e.children.length&&(r.push(n),n=e.children.slice());!n.length&&r.length;)n=r.pop()};n.length;)a()
return t}function $n(e,t){var n=e.parentNode&&Array.from(e.parentNode.children||"")||[]
return n.find((function(n){return n!==e&&_n(n,t)}))?":nth-child("+(1+n.indexOf(e))+")":""}function Vn(e){if(e.getAttribute("id")){var t=e.getRootNode&&e.getRootNode()||a,n="#"+Cn(e.getAttribute("id")||"")
return n.match(/player_uid_/)||1!==t.querySelectorAll(n).length?void 0:n}}function Wn(e){return void 0===Rn&&(Rn=In(a)),Cn(Rn?e.localName:e.nodeName.toLowerCase())}function Gn(e,t){var n,r="",a=function(e,t){var n=[],r=t.classes,a=t.tags
return e.classList&&Array.from(e.classList).forEach((function(t){var o=Cn(t)
r[o]<a[e.nodeName]&&n.push({name:o,count:r[o],species:"class"})})),n.sort(Hn)}(e,t),o=function(e,t){var n=[],r=t.attributes,a=t.tags
return e.hasAttributes()&&Array.from(On(e)).filter(Un).forEach((function(t){var o=Bn(e,t)
o&&r[o]<a[e.nodeName]&&n.push({name:o,count:r[o],species:"attribute"})})),n.sort(Hn)}(e,t)
return a.length&&1===a[0].count?n=[a[0]]:o.length&&1===o[0].count?(n=[o[0]],r=Wn(e)):((n=a.concat(o)).sort(Hn),(n=n.slice(0,3)).some((function(e){return"class"===e.species}))?n.sort((function(e,t){return e.species!==t.species&&"class"===e.species?-1:e.species===t.species?0:1})):r=Wn(e)),r+n.reduce((function(e,t){switch(t.species){case"class":return e+"."+t.name
case"attribute":return e+"["+t.name+"]"}return e}),"")}function Yn(e,t,n){if(!i._selectorData)throw new Error("Expect axe._selectorData to be set up")
var r,a,o=t.toRoot,s=void 0!==o&&o
do{var l=Vn(e)
l||(l=Gn(e,i._selectorData),l+=$n(e,l)),r=r?l+" > "+r:l,a=a?a.filter((function(e){return _n(e,r)})):Array.from(n.querySelectorAll(r)),e=e.parentElement}while((a.length>1||s)&&e&&11!==e.nodeType)
return 1===a.length?r:-1!==r.indexOf(" > ")?":root"+r.substring(r.indexOf(" > ")):":root"}function Qn(e,t){return Pn(Yn,e,t)}function Xn(e){var t=e.nodeName.toLowerCase(),n=e.parentElement
if(!n)return t
var r=""
if("head"!==t&&"body"!==t&&n.children.length>1){var a=Array.prototype.indexOf.call(n.children,e)+1
r=":nth-child(".concat(a,")")}return Xn(n)+" > "+t+r}function Kn(e,t){return Pn(Xn,e,t)}function Jn(e,t){var n,r
if(!e)return[]
if(!t&&9===e.nodeType)return[{str:"html"}]
if(t=t||[],e.parentNode&&e.parentNode!==e&&(t=Jn(e.parentNode,t)),e.previousSibling){r=1,n=e.previousSibling
do{1===n.nodeType&&n.nodeName===e.nodeName&&r++,n=n.previousSibling}while(n)
1===r&&(r=null)}else if(e.nextSibling){n=e.nextSibling
do{1===n.nodeType&&n.nodeName===e.nodeName?(r=1,n=null):(r=null,n=n.previousSibling)}while(n)}if(1===e.nodeType){var a={}
a.str=e.nodeName.toLowerCase()
var o=e.getAttribute&&Cn(e.getAttribute("id"))
o&&1===e.ownerDocument.querySelectorAll("#"+o).length&&(a.id=e.getAttribute("id")),r>1&&(a.count=r),t.push(a)}return t}var Zn=function(e){return Jn(e).reduce((function(e,t){return t.id?"/".concat(t.str,"[@id='").concat(t.id,"']"):e+"/".concat(t.str)+(t.count>0?"[".concat(t.count,"]"):"")}),"")},er={},tr={set:function(e,t){er[e]=t},get:function(e){return er[e]},clear:function(){er={}}},nr=function(e,t){var n=t||e
return tr.get("nodeMap")?tr.get("nodeMap").get(n):null}
function rr(e){if(null==e||!e.outerHTML)return""
var t=e.outerHTML
return t||"function"!=typeof XMLSerializer||(t=(new XMLSerializer).serializeToString(e)),function(e,t){if(t=t||300,e.length>t){var n=e.indexOf(">")
e=e.substring(0,n+1)}return e}(t||"")}function ar(e){var t,n,r,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
this.spec=o,e instanceof St?(this._virtualNode=e,this._element=e.actualNode):(this._element=e,this._virtualNode=nr(e)),this.fromFrame=(null===(t=this.spec.selector)||void 0===t?void 0:t.length)>1,a.absolutePaths&&(this._options={toRoot:!0}),this.nodeIndexes=[],Array.isArray(this.spec.nodeIndexes)?this.nodeIndexes=this.spec.nodeIndexes:"number"==typeof(null===(n=this._virtualNode)||void 0===n?void 0:n.nodeIndex)&&(this.nodeIndexes=[this._virtualNode.nodeIndex]),this.source=null,i._audit.noHtml||(this.source=null!==(r=this.spec.source)&&void 0!==r?r:rr(this._element))}ar.prototype={get selector(){return this.spec.selector||[Qn(this.element,this._options)]},get ancestry(){return this.spec.ancestry||[Kn(this.element)]},get xpath(){return this.spec.xpath||[Zn(this.element)]},get element(){return this._element},toJSON:function(){return{selector:this.selector,source:this.source,xpath:this.xpath,ancestry:this.ancestry,nodeIndexes:this.nodeIndexes}}},ar.fromFrame=function(e,t,n){var r=ar.mergeSpecs(e,n)
return new ar(n.element,t,r)},ar.mergeSpecs=function(e,t){return _({},e,{selector:[].concat(S(t.selector),S(e.selector)),ancestry:[].concat(S(t.ancestry),S(e.ancestry)),xpath:[].concat(S(t.xpath),S(e.xpath)),nodeIndexes:[].concat(S(t.nodeIndexes),S(e.nodeIndexes))})}
var or=ar,ir=function(e,t,r,a){return{isAsync:!1,async:function(){return this.isAsync=!0,function(t){t instanceof Error==0?(e.result=t,r(e)):a(t)}},data:function(t){e.data=t},relatedNodes:function(r){n.Node&&(r=r instanceof n.Node?[r]:En(r)).every((function(e){return e instanceof n.Node||e.actualNode}))&&(e.relatedNodes=r.map((function(e){return new or(e,t)})))}}},sr=function e(t){var r,a,i,s,l=t
if(null!==(r=n)&&void 0!==r&&r.Node&&t instanceof n.Node||null!==(a=n)&&void 0!==a&&a.HTMLCollection&&t instanceof n.HTMLCollection)return t
if(null!==t&&"object"===o(t))if(Array.isArray(t))for(l=[],i=0,s=t.length;i<s;i++)l[i]=e(t[i])
else for(i in l={},t)l[i]=e(t[i])
return l},lr=new(H(V()).CssSelectorParser)
lr.registerSelectorPseudos("not"),lr.registerSelectorPseudos("is"),lr.registerNestingOperators(">"),lr.registerAttrEqualityMods("^","$","*","~")
var ur=lr
function cr(e,t){return function(e,t){return 1===e.props.nodeType&&("*"===t.tag||e.props.nodeName===t.tag)}(e,t)&&function(e,t){return!t.classes||t.classes.every((function(t){return e.hasClass(t.value)}))}(e,t)&&function(e,t){return!t.attributes||t.attributes.every((function(t){var n=e.attr(t.key)
return null!==n&&(!t.value||t.test(n))}))}(e,t)&&function(e,t){return!t.id||e.props.id===t.id}(e,t)&&(n=e,!((r=t).pseudos&&!r.pseudos.every((function(e){if("not"===e.name)return!e.expressions.some((function(e){return wr(n,e)}))
if("is"===e.name)return e.expressions.some((function(e){return wr(n,e)}))
throw new Error("the pseudo selector "+e.name+" has not yet been implemented")}))))
var n,r}var dr,pr=(dr=/(?=[\-\[\]{}()*+?.\\\^$|,#\s])/g,function(e){return e.replace(dr,"\\")}),fr=/\\/g
function hr(e){if(e)return e.map((function(e){var t,n,r=e.name.replace(fr,""),a=(e.value||"").replace(fr,"")
switch(e.operator){case"^=":n=new RegExp("^"+pr(a))
break
case"$=":n=new RegExp(pr(a)+"$")
break
case"~=":n=new RegExp("(^|\\s)"+pr(a)+"(\\s|$)")
break
case"|=":n=new RegExp("^"+pr(a)+"(-|$)")
break
case"=":t=function(e){return a===e}
break
case"*=":t=function(e){return e&&e.includes(a)}
break
case"!=":t=function(e){return a!==e}
break
default:t=function(e){return!!e}}return""===a&&/^[*$^]=$/.test(e.operator)&&(t=function(){return!1}),t||(t=function(e){return e&&n.test(e)}),{key:r,value:a,test:t}}))}function mr(e){if(e)return e.map((function(e){return{value:e=e.replace(fr,""),regexp:new RegExp("(^|\\s)"+pr(e)+"(\\s|$)")}}))}function gr(e){if(e)return e.map((function(e){var t
return["is","not"].includes(e.name)&&(t=vr(t=(t=e.value).selectors?t.selectors:[t])),{name:e.name,expressions:t,value:e.value}}))}function vr(e){return e.map((function(e){for(var t=[],n=e.rule;n;)t.push({tag:n.tagName?n.tagName.toLowerCase():"*",combinator:n.nestingOperator?n.nestingOperator:" ",id:n.id,attributes:hr(n.attrs),classes:mr(n.classNames),pseudos:gr(n.pseudos)}),n=n.rule
return t}))}function yr(e){var t=ur.parse(e)
return vr(t=t.selectors?t.selectors:[t])}function br(e,t,n,r){for(var a=Array.isArray(t)?t[n]:t,o=cr(e,a);!o&&r&&e.parent;)o=cr(e=e.parent,a)
if(n>0){if(!1===[" ",">"].includes(a.combinator))throw new Error("axe.utils.matchesExpression does not support the combinator: "+a.combinator)
o=o&&br(e.parent,t,n-1," "===a.combinator)}return o}function wr(e,t,n){return br(e,t,t.length-1,n)}var Dr=function(e,t){return yr(t).some((function(t){return wr(e,t)}))},xr=function(e,t){for(;e;){if(Dr(e,t))return e
if(void 0===e.parent)throw new TypeError("Cannot resolve parent for non-DOM nodes")
e=e.parent}return null}
function Er(){}function Cr(e){if("function"!=typeof e)throw new TypeError("Queue methods require functions as arguments")}var Ar,kr,Tr=function(){var e,t=[],n=0,r=0,a=Er,i=!1,s=function(t){e=t,setTimeout((function(){null!=e&&Ft("Uncaught error (of queue)",e)}),1)},l=s
function u(e){return function(n){t[e]=n,(r-=1)||a===Er||(i=!0,a(t))}}function c(e){return a=Er,l(e),t}var d={defer:function(a){if("object"===o(a)&&a.then&&a.catch){var s=a
a=function(e,t){s.then(e).catch(t)}}if(Cr(a),void 0===e){if(i)throw new Error("Queue already completed")
return t.push(a),++r,function(){for(var e=t.length;n<e;n++){var r=t[n]
try{r.call(null,u(n),c)}catch(e){c(e)}}}(),d}},then:function(n){if(Cr(n),a!==Er)throw new Error("queue `then` already set")
return e||(a=n,r||(i=!0,a(t))),d},catch:function(t){if(Cr(t),l!==s)throw new Error("queue `catch` already set")
return e?(t(e),e=null):l=t,d},abort:c}
return d},Nr={}
function Fr(e,t,n,r,a){var o={topic:t,message:n,channelId:"".concat(nn(),":").concat(nn()),keepalive:r}
return kr(e,o,a)}function Rr(e,t){var n=e.topic,r=e.message,a=e.keepalive,o=Nr[n]
if(o)try{o(r,a,t)}catch(e){i.log(e),t(e,a)}}function Sr(e,t,n,r){var a,o,i=e.contentWindow,s=null!==(a=null===(o=t.options)||void 0===o?void 0:o.pingWaitTime)&&void 0!==a?a:500
if(!i)return Ft("Frame does not have a content window",e),void n(null)
if(0!==s){var l=setTimeout((function(){l=setTimeout((function(){t.debug?r(_r("No response from frame",e)):n(null)}),0)}),s)
Fr(i,"axe.ping",null,void 0,(function(){clearTimeout(l),Or(e,t,n,r)}))}else Or(e,t,n,r)}function Or(e,t,n,r){var a,o,i=null!==(a=null===(o=t.options)||void 0===o?void 0:o.frameWaitTime)&&void 0!==a?a:6e4,s=e.contentWindow,l=setTimeout((function(){r(_r("Axe in frame timed out",e))}),i)
Fr(s,"axe.start",t,void 0,(function(e){clearTimeout(l),e instanceof Error==0?n(e):r(e)}))}function _r(e,t){var n
return i._tree&&(n=Qn(t)),new Error(e+": "+(n||t))}Fr.updateMessenger=function(e){var t=e.open,n=e.post
Pt("function"==typeof t,"open callback must be a function"),Pt("function"==typeof n,"post callback must be a function"),Ar&&Ar()
var r=t(Rr)
r?(Pt("function"==typeof r,"open callback must return a cleanup function"),Ar=r):Ar=null,kr=n},Fr.subscribe=function(e,t){Pt("function"==typeof t,"Subscriber callback must be a function"),Pt(!Nr[e],"Topic ".concat(e," is already registered to.")),Nr[e]=t},Fr.isInFrame=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n
return!!e.frameElement},cn(Fr)
var Ir=function(e){return[].concat(e.any||[]).concat(e.all||[]).concat(e.none||[])},Pr=function(e,t,n){if(Array.isArray(e))return e.find((function(e){return"object"===o(e)&&e[t]===n}))}
function jr(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=Math.max(null==e?void 0:e.length,null==t?void 0:t.length),r=0;r<n;r++){var a=null==e?void 0:e[r],o=null==t?void 0:t[r]
if("number"!=typeof a||isNaN(a))return 0===r?1:-1
if("number"!=typeof o||isNaN(o))return 0===r?-1:1
if(a!==o)return a-o}return 0}var Mr=function(e,t){var n=[]
return e.forEach((function(e){var r,a=(r=e)&&r.results?Array.isArray(r.results)?r.results.length?r.results:null:[r.results]:null
if(a&&a.length){var o=function(e,t){return e.frameElement?new or(e.frameElement,t):e.frameSpec?e.frameSpec:null}(e,t)
a.forEach((function(e){e.nodes&&o&&function(e,t,n){e.forEach((function(e){e.node=or.fromFrame(e.node,t,n),Ir(e).forEach((function(e){e.relatedNodes=e.relatedNodes.map((function(e){return or.fromFrame(e,t,n)}))}))}))}(e.nodes,t,o)
var r=Pr(n,"id",e.id)
r?e.nodes.length&&function(e,t){for(var n=t[0].node,r=0;r<e.length;r++){var a=e[r].node,o=jr(a.nodeIndexes,n.nodeIndexes)
if(o>0||0===o&&n.selector.length<a.selector.length)return void e.splice.apply(e,[r,0].concat(S(t)))}e.push.apply(e,S(t))}(r.nodes,e.nodes):n.push(e)}))}})),n.forEach((function(e){e.nodes&&e.nodes.sort((function(e,t){return jr(e.node.nodeIndexes,t.node.nodeIndexes)}))})),n}
function qr(e,t,n,r,a,o){var i=Tr()
e.frames.forEach((function(e){var a=e.node,o=R(e,l)
i.defer((function(e,i){Sr(a,{options:t,command:n,parameter:r,context:o},(function(t){return e(t?{results:t,frameElement:a}:null)}),i)}))})),i.then((function(e){a(Mr(e,t))})).catch(o)}function Lr(e,t){if(e.shadowId||t.shadowId){do{if(e.shadowId===t.shadowId)return!0
t=t.parent}while(t)
return!1}if(!e.actualNode)do{if(t===e)return!0
t=t.parent}while(t)
return"function"!=typeof e.actualNode.contains?!!(16&e.actualNode.compareDocumentPosition(t.actualNode)):e.actualNode.contains(t.actualNode)}var Br=function e(){for(var t={},n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a]
return r.forEach((function(n){if(n&&"object"===o(n)&&!Array.isArray(n))for(var r=0,a=Object.keys(n);r<a.length;r++){var i=a[r]
!t.hasOwnProperty(i)||"object"!==o(n[i])||Array.isArray(t[i])?t[i]=n[i]:t[i]=e(t[i],n[i])}})),t},Hr=function(e,t){Object.assign(e,t),Object.keys(t).filter((function(e){return"function"==typeof t[e]})).forEach((function(n){e[n]=null
try{e[n]=t[n](e)}catch(e){}}))},Ur=["article","aside","blockquote","body","div","footer","h1","h2","h3","h4","h5","h6","header","main","nav","p","section","span"],zr=function(e){if(e.shadowRoot){var t=e.nodeName.toLowerCase()
if(Ur.includes(t)||/^[a-z][a-z0-9_.-]*-[a-z0-9_.-]*$/.test(t))return!0}return!1},$r={}
B($r,{findElmsInContext:function(){return Gr},findUp:function(){return Qr},findUpVirtual:function(){return Yr},getComposedParent:function(){return Xr},getElementByReference:function(){return ea},getElementCoordinates:function(){return na},getElementStack:function(){return va},getRootNode:function(){return Wr},getScrollOffset:function(){return ta},getTabbableElements:function(){return ya},getTextElementStack:function(){return wa},getViewportSize:function(){return ra},hasContent:function(){return Na},hasContentVirtual:function(){return Ta},idrefs:function(){return Ea},insertedIntoFocusOrder:function(){return Pa},isCurrentPageLink:function(){return Zr},isFocusable:function(){return Ia},isHTML5:function(){return ja},isHiddenWithCSS:function(){return Sa},isInTextBlock:function(){return Ba},isModalOpen:function(){return Ha},isNativelyFocusable:function(){return _a},isNode:function(){return Ua},isOffscreen:function(){return aa},isOpaque:function(){return Za},isSkipLink:function(){return eo},isVisible:function(){return sa},isVisualContent:function(){return xa},reduceToElementsBelowFloating:function(){return to},shadowElementsFromPoint:function(){return oo},urlPropsFromAttribute:function(){return co},visuallyContains:function(){return no},visuallyOverlaps:function(){return po}})
var Vr=function(e){var t=e.getRootNode&&e.getRootNode()||a
return t===e&&(t=a),t},Wr=Vr,Gr=function(e){var t,n=e.context,r=e.value,a=e.attr,o=e.elm,i=void 0===o?"":o,s=Cn(r)
return t=9===n.nodeType||11===n.nodeType?n:Wr(n),Array.from(t.querySelectorAll(i+"["+a+"="+s+"]"))},Yr=function(e,t){var n
if(n=e.actualNode,!e.shadowId&&"function"==typeof e.actualNode.closest)return e.actualNode.closest(t)||null
do{(n=n.assignedSlot?n.assignedSlot:n.parentNode)&&11===n.nodeType&&(n=n.host)}while(n&&!_n(n,t)&&n!==a.documentElement)
return n&&_n(n,t)?n:null},Qr=function(e,t){return Yr(nr(e),t)},Xr=function e(t){if(t.assignedSlot)return e(t.assignedSlot)
if(t.parentNode){var n=t.parentNode
if(1===n.nodeType)return n
if(n.host)return n.host}return null},Kr=/^\/\#/,Jr=/^#[!/]/
function Zr(e){var t,r=e.getAttribute("href")
if(!r||"#"===r)return!1
if(Kr.test(r))return!0
var a=e.hash,o=e.protocol,i=e.hostname,s=e.port,l=e.pathname
if(Jr.test(a))return!1
if("#"===r.charAt(0))return!0
if("string"!=typeof(null===(t=n.location)||void 0===t?void 0:t.origin)||-1===n.location.origin.indexOf("://"))return null
var u,c=n.location.origin+n.location.pathname
return u=i?"".concat(o,"//").concat(i).concat(s?":".concat(s):""):n.location.origin,(u+=l?("/"!==l[0]?"/":"")+l:n.location.pathname)===c}var ea=function(e,t){var n=e.getAttribute(t)
if(!n)return null
if("href"===t&&!Zr(e))return null;-1!==n.indexOf("#")&&(n=decodeURIComponent(n.substr(n.indexOf("#")+1)))
var r=a.getElementById(n)
return r||((r=a.getElementsByName(n)).length?r[0]:null)},ta=function(e){if(!e.nodeType&&e.document&&(e=e.document),9===e.nodeType){var t=e.documentElement,n=e.body
return{left:t&&t.scrollLeft||n&&n.scrollLeft||0,top:t&&t.scrollTop||n&&n.scrollTop||0}}return{left:e.scrollLeft,top:e.scrollTop}},na=function(e){var t=ta(a),n=t.left,r=t.top,o=e.getBoundingClientRect()
return{top:o.top+r,right:o.right+n,bottom:o.bottom+r,left:o.left+n,width:o.right-o.left,height:o.bottom-o.top}},ra=function(e){var t=e.document,n=t.documentElement
if(e.innerWidth)return{width:e.innerWidth,height:e.innerHeight}
if(n)return{width:n.clientWidth,height:n.clientHeight}
var r=t.body
return{width:r.clientWidth,height:r.clientHeight}},aa=function(e){var t,r=a.documentElement,o=n.getComputedStyle(e),i=n.getComputedStyle(a.body||r).getPropertyValue("direction"),s=na(e)
if(s.bottom<0&&(function(e,t){for(e=Xr(e);e&&"html"!==e.nodeName.toLowerCase();){if(e.scrollTop&&(t+=e.scrollTop)>=0)return!1
e=Xr(e)}return!0}(e,s.bottom)||"absolute"===o.position))return!0
if(0===s.left&&0===s.right)return!1
if("ltr"===i){if(s.right<=0)return!0}else if(t=Math.max(r.scrollWidth,ra(n).width),s.left>=t)return!0
return!1},oa=/rect\s*\(([0-9]+)px,?\s*([0-9]+)px,?\s*([0-9]+)px,?\s*([0-9]+)px\s*\)/,ia=/(\w+)\((\d+)/,sa=function e(t,r,a){var o
if(!t)throw new TypeError("Cannot determine if element is visible for non-DOM nodes")
var s=t instanceof St?t:nr(t)
t=s?s.actualNode:t
var l="_isVisible"+(r?"ScreenReader":""),u=null!==(o=n.Node)&&void 0!==o?o:{},c=u.DOCUMENT_NODE,d=u.DOCUMENT_FRAGMENT_NODE,p=s?s.props.nodeType:t.nodeType,f=s?s.props.nodeName:t.nodeName.toLowerCase()
if(s&&void 0!==s[l])return s[l]
if(p===c)return!0
if(["style","script","noscript","template"].includes(f))return!1
if(t&&p===d&&(t=t.host),r&&"true"===(s?s.attr("aria-hidden"):t.getAttribute("aria-hidden")))return!1
if(!t){var h=s.parent,m=!0
return h&&(m=e(h,r,!0)),s&&(s[l]=m),m}var g=n.getComputedStyle(t,null)
if(null===g)return!1
if("area"===f)return function(t,n,r){var a=Qr(t,"map")
if(!a)return!1
var o=a.getAttribute("name")
if(!o)return!1
var s=Wr(t)
if(!s||9!==s.nodeType)return!1
var l=Ci(i._tree,'img[usemap="#'.concat(Cn(o),'"]'))
return!(!l||!l.length)&&l.some((function(t){return e(t.actualNode,n,r)}))}(t,r,a)
if("none"===g.getPropertyValue("display"))return!1
var v=parseInt(g.getPropertyValue("height")),y=parseInt(g.getPropertyValue("width")),b=Mo(t),w=b&&0===v,D=b&&0===y,x="absolute"===g.getPropertyValue("position")&&(v<2||y<2)&&"hidden"===g.getPropertyValue("overflow")
if(!r&&(function(e){var t=e.getPropertyValue("clip").match(oa),n=e.getPropertyValue("clip-path").match(ia)
if(t&&5===t.length){var r=e.getPropertyValue("position")
if(["fixed","absolute"].includes(r))return t[3]-t[1]<=0&&t[2]-t[4]<=0}if(n){var a=n[1],o=parseInt(n[2],10)
switch(a){case"inset":return o>=50
case"circle":return 0===o}}return!1}(g)||"0"===g.getPropertyValue("opacity")||w||D||x))return!1
if(!a&&("hidden"===g.getPropertyValue("visibility")||!r&&aa(t)))return!1
var E=t.assignedSlot?t.assignedSlot:t.parentNode,C=!1
return E&&(C=e(E,r,!0)),s&&(s[l]=C),C},la=200
function ua(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.body,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{container:null,cells:[]},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null
if(!r){var o=nr(a.documentElement)
if(o||(o=new ho(a.documentElement)),o._stackingOrder=[0],ga(t,o),Mo(o.actualNode)){var s={container:o,cells:[]}
o._subGrid=s}}for(var l=a.createTreeWalker(e,n.NodeFilter.SHOW_ELEMENT,null,!1),u=r?l.nextNode():l.currentNode;u;){var c=nr(u)
u.parentElement?r=nr(u.parentElement):u.parentNode&&nr(u.parentNode)&&(r=nr(u.parentNode)),c||(c=new i.VirtualNode(u,r)),c._stackingOrder=ha(c,r)
var d=ma(c,r),p=d?d._subGrid:t
if(Mo(c.actualNode)){var f={container:c,cells:[]}
c._subGrid=f}var h=c.boundingClientRect
0!==h.width&&0!==h.height&&sa(u)&&ga(p,c),zr(u)&&ua(u.shadowRoot,p,c),u=l.nextNode()}}function ca(e,t){var n,r,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=t.left+t.width/2,s=t.top+t.height/2,l=s/la|0,u=i/la|0
if(l>e.cells.length||u>e.numCols)throw new Error("Element midpoint exceeds the grid bounds")
var c=null!==(n=null===(r=e.cells[l][u])||void 0===r?void 0:r.filter((function(e){return e.clientRects.find((function(e){var t=e.left,n=e.top
return i<=t+e.width&&i>=t&&s<=n+e.height&&s>=n}))})))&&void 0!==n?n:[],d=e.container
return d&&(c=ca(d._grid,d.boundingClientRect,!0).concat(c)),o||(c=c.sort(fa).map((function(e){return e.actualNode})).concat(a.documentElement).filter((function(e,t,n){return n.indexOf(e)===t}))),c}function da(e){if(!e)return!1
if(void 0!==e._isFloated)return e._isFloated
if("none"!==e.getComputedStylePropertyValue("float"))return e._isFloated=!0,!0
var t=da(e.parent)
return e._isFloated=t,t}function pa(e){return-1!==e.getComputedStylePropertyValue("display").indexOf("inline")?2:da(e)?1:0}function fa(e,t){for(var r=Math.max(e._stackingOrder.length,t._stackingOrder.length),a=0;a<r;a++){if(void 0===t._stackingOrder[a])return-1
if(void 0===e._stackingOrder[a])return 1
if(t._stackingOrder[a]>e._stackingOrder[a])return 1
if(t._stackingOrder[a]<e._stackingOrder[a])return-1}var o=e.actualNode,i=t.actualNode
if(o.getRootNode&&o.getRootNode()!==i.getRootNode()){for(var s=[];o;)s.push({root:o.getRootNode(),node:o}),o=o.getRootNode().host
for(;i&&!s.find((function(e){return e.root===i.getRootNode()}));)i=i.getRootNode().host
if((o=s.find((function(e){return e.root===i.getRootNode()})).node)===i)return e.actualNode.getRootNode()!==o.getRootNode()?-1:1}var l=n.Node,u=l.DOCUMENT_POSITION_FOLLOWING,c=l.DOCUMENT_POSITION_CONTAINS,d=l.DOCUMENT_POSITION_CONTAINED_BY,p=o.compareDocumentPosition(i),f=p&u?1:-1,h=p&c||p&d,m=pa(e),g=pa(t)
return m===g||h?f:g-m}function ha(e,t){var n=t._stackingOrder.slice(),r=e.getComputedStylePropertyValue("z-index"),a="static"!==e.getComputedStylePropertyValue("position"),o="none"!==e.getComputedStylePropertyValue("float")
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
var s=e.getComputedStylePropertyValue("clip-path")
if(s&&"none"!==s)return!0
if("none"!==(e.getComputedStylePropertyValue("-webkit-mask")||e.getComputedStylePropertyValue("mask")||"none"))return!0
if("none"!==(e.getComputedStylePropertyValue("-webkit-mask-image")||e.getComputedStylePropertyValue("mask-image")||"none"))return!0
if("none"!==(e.getComputedStylePropertyValue("-webkit-mask-border")||e.getComputedStylePropertyValue("mask-border")||"none"))return!0
if("isolate"===e.getComputedStylePropertyValue("isolation"))return!0
var l=e.getComputedStylePropertyValue("will-change")
if("transform"===l||"opacity"===l)return!0
if("touch"===e.getComputedStylePropertyValue("-webkit-overflow-scrolling"))return!0
var u=e.getComputedStylePropertyValue("contain")
if(["layout","paint","strict","content"].includes(u))return!0
if("auto"!==r&&t){var c=t.getComputedStylePropertyValue("display")
if(["flex","inline-flex","inline flex","grid","inline-grid","inline grid"].includes(c))return!0}return!1}(e,t)?n.push(0):a?n.push(.5):o&&n.push(.25),n}function ma(e,t){for(var n=null,r=[e];t;){if(Mo(t.actualNode)){n=t
break}if(t._scrollRegionParent){n=t._scrollRegionParent
break}r.push(t),t=nr(t.actualNode.parentElement||t.actualNode.parentNode)}return r.forEach((function(e){return e._scrollRegionParent=n})),n}function ga(e,t){t._grid=e,t.clientRects.forEach((function(n){var r,a=n.left,o=n.top,i=o/la|0,s=a/la|0,l=(o+n.height)/la|0,u=(a+n.width)/la|0
e.numCols=Math.max(null!==(r=e.numCols)&&void 0!==r?r:0,u)
for(var c=i;c<=l;c++){e.cells[c]=e.cells[c]||[]
for(var d=s;d<=u;d++)e.cells[c][d]=e.cells[c][d]||[],e.cells[c][d].includes(t)||e.cells[c][d].push(t)}}))}var va=function(e){tr.get("gridCreated")||(ua(),tr.set("gridCreated",!0))
var t=nr(e),n=t._grid
return n?ca(n,t.boundingClientRect):[]},ya=function(e){return Ci(e,"*").filter((function(e){var t=e.isFocusable,n=e.actualNode.getAttribute("tabindex")
return(n=n&&!isNaN(parseInt(n,10))?parseInt(n):null)?t&&n>=0:t}))},ba=function(e){return e?e.replace(/\r\n/g,"\n").replace(/\u00A0/g," ").replace(/[\s]{2,}/g," ").trim():""},wa=function(e){tr.get("gridCreated")||(ua(),tr.set("gridCreated",!0))
var t=nr(e),n=t._grid
if(!n)return[]
var r=t.boundingClientRect,o=[]
return Array.from(e.childNodes).forEach((function(e){if(3===e.nodeType&&""!==ba(e.textContent)){var t=a.createRange()
t.selectNodeContents(e)
var n=t.getClientRects(),i=Array.from(n).some((function(e){var t=e.left+e.width/2,n=e.top+e.height/2
return t<r.left||t>r.right||n<r.top||n>r.bottom}))
if(i)return
for(var s=0;s<n.length;s++){var l=n[s]
l.width>=1&&l.height>=1&&o.push(l)}}})),o.length?o.map((function(e){return ca(n,e)})):[va(e)]},Da=["checkbox","img","radio","range","slider","spinbutton","textbox"],xa=function(e){var t=e.getAttribute("role")
if(t)return-1!==Da.indexOf(t)
switch(e.nodeName.toUpperCase()){case"IMG":case"IFRAME":case"OBJECT":case"VIDEO":case"AUDIO":case"CANVAS":case"SVG":case"MATH":case"BUTTON":case"SELECT":case"TEXTAREA":case"KEYGEN":case"PROGRESS":case"METER":return!0
case"INPUT":return"hidden"!==e.type
default:return!1}},Ea=function(e,t){e=e.actualNode||e
try{var n=Wr(e),r=[],a=e.getAttribute(t)
if(a){a=_i(a)
for(var o=0;o<a.length;o++)r.push(n.getElementById(a[o]))}return r}catch(e){throw new TypeError("Cannot resolve id references for non-DOM nodes")}},Ca=function e(t,n,r){var a=t instanceof St?t:nr(t),o=!t.actualNode||t.actualNode&&sa(t.actualNode,n),i=a.children.map((function(t){var a=t.props,i=a.nodeType,s=a.nodeValue
if(3===i){if(s&&o)return s}else if(!r)return e(t,n)})).join("")
return ba(i)},Aa=function(e){var t
return e.attr("aria-labelledby")&&(t=Ea(e.actualNode,"aria-labelledby").map((function(e){var t=nr(e)
return t?Ca(t):""})).join(" ").trim())||(t=e.attr("aria-label"))&&(t=ba(t))?t:null},ka=["HEAD","TITLE","TEMPLATE","SCRIPT","STYLE","IFRAME","OBJECT","VIDEO","AUDIO","NOSCRIPT"],Ta=function e(t,n,r){return function(e){if(!ka.includes(e.actualNode.nodeName.toUpperCase()))return e.children.some((function(e){var t=e.actualNode
return 3===t.nodeType&&t.nodeValue.trim()}))}(t)||xa(t.actualNode)||!r&&!!Aa(t)||!n&&t.children.some((function(t){return 1===t.actualNode.nodeType&&e(t)}))},Na=function(e,t,n){return e=nr(e),Ta(e,t,n)}
function Fa(e,t){var n=nr(e)
return n?(void 0===n._isHiddenWithCSS&&(n._isHiddenWithCSS=Ra(e,t)),n._isHiddenWithCSS):Ra(e,t)}function Ra(e,t){if(9===e.nodeType)return!1
if(11===e.nodeType&&(e=e.host),["STYLE","SCRIPT"].includes(e.nodeName.toUpperCase()))return!1
var r=n.getComputedStyle(e,null)
if(!r)throw new Error("Style does not exist for the given element.")
if("none"===r.getPropertyValue("display"))return!0
var a=["hidden","collapse"],o=r.getPropertyValue("visibility")
if(a.includes(o)&&!t)return!0
if(a.includes(o)&&t&&a.includes(t))return!0
var i=Xr(e)
return!(!i||a.includes(o))&&Fa(i,o)}var Sa=Fa,Oa=function(e){var t=e instanceof St?e:nr(e)
if(t.hasAttr("disabled"))return!0
for(var n=t.parent,r=[],a=!1;n&&n.shadowId===t.shadowId&&!a&&(r.push(n),"legend"!==n.props.nodeName);){if(void 0!==n._inDisabledFieldset){a=n._inDisabledFieldset
break}"fieldset"===n.props.nodeName&&n.hasAttr("disabled")&&(a=!0),n=n.parent}return r.forEach((function(e){return e._inDisabledFieldset=a})),!!a||"area"!==t.props.nodeName&&!!t.actualNode&&Sa(t.actualNode)},_a=function(e){var t=e instanceof St?e:nr(e)
if(!t||Oa(t))return!1
switch(t.props.nodeName){case"a":case"area":if(t.hasAttr("href"))return!0
break
case"input":return"hidden"!==t.props.type
case"textarea":case"select":case"summary":case"button":return!0
case"details":return!Ci(t,"summary").length}return!1},Ia=function(e){var t=e instanceof St?e:nr(e)
if(1!==t.props.nodeType)return!1
if(Oa(t))return!1
if(_a(t))return!0
var n=t.attr("tabindex")
return!(!n||isNaN(parseInt(n,10)))},Pa=function(e){return parseInt(e.getAttribute("tabindex"),10)>-1&&Ia(e)&&!_a(e)},ja=function(e){var t=e.doctype
return null!==t&&"html"===t.name&&!t.publicId&&!t.systemId}
function Ma(e,t){!1!==t(e.actualNode)&&e.children.forEach((function(e){return Ma(e,t)}))}var qa=["block","list-item","table","flex","grid","inline-block"]
function La(e){var t=n.getComputedStyle(e).getPropertyValue("display")
return qa.includes(t)||"table-"===t.substr(0,6)}var Ba=function(e){if(La(e))return!1
var t=function(e){for(var t=Xr(e);t&&!La(t);)t=Xr(t)
return nr(t)}(e),n="",r="",a=0
return Ma(t,(function(t){if(2===a)return!1
if(3===t.nodeType&&(n+=t.nodeValue),1===t.nodeType){var o=(t.nodeName||"").toUpperCase()
if(["BR","HR"].includes(o))0===a?(n="",r=""):a=2
else{if("none"===t.style.display||"hidden"===t.style.overflow||!["",null,"none"].includes(t.style.float)||!["",null,"relative"].includes(t.style.position))return!1
if("A"===o&&t.href||"link"===(t.getAttribute("role")||"").toLowerCase())return t===e&&(a=1),r+=t.textContent,!1}}})),n=ba(n),r=ba(r),n.length>r.length},Ha=function(e){var t=(e=e||{}).modalPercent||.75
if(tr.get("isModalOpen"))return tr.get("isModalOpen")
if(fi(i._tree[0],"dialog, [role=dialog], [aria-modal=true]",(function(e){return sa(e.actualNode)})).length)return tr.set("isModalOpen",!0),!0
for(var r=ra(n),s=r.width*t,l=r.height*t,u=(r.width-s)/2,c=(r.height-l)/2,d=[{x:u,y:c},{x:r.width-u,y:c},{x:r.width/2,y:r.height/2},{x:u,y:r.height-c},{x:r.width-u,y:r.height-c}].map((function(e){return Array.from(a.elementsFromPoint(e.x,e.y))})),p=function(e){var t=d[e].find((function(e){var t=n.getComputedStyle(e)
return parseInt(t.width,10)>=s&&parseInt(t.height,10)>=l&&"none"!==t.getPropertyValue("pointer-events")&&("absolute"===t.position||"fixed"===t.position)}))
if(t&&d.every((function(e){return e.includes(t)})))return tr.set("isModalOpen",!0),{v:!0}},f=0;f<d.length;f++){var h=p(f)
if("object"===o(h))return h.v}tr.set("isModalOpen",void 0)},Ua=function(e){return e instanceof n.Node},za={},$a={set:function(e,t){if("string"!=typeof e)throw new Error("Incomplete data: key must be a string")
return t&&(za[e]=t),za[e]},get:function(e){return za[e]},clear:function(){za={}}},Va=function(e,t){var r=e.nodeName.toUpperCase()
if(["IMG","CANVAS","OBJECT","IFRAME","VIDEO","SVG"].includes(r))return $a.set("bgColor","imgNode"),!0
var a=(t=t||n.getComputedStyle(e)).getPropertyValue("background-image"),o="none"!==a
if(o){var i=/gradient/.test(a)
$a.set("bgColor",i?"bgGradient":"bgImage")}return o},Wa={"aria-activedescendant":{type:"idref",allowEmpty:!0},"aria-atomic":{type:"boolean",global:!0},"aria-autocomplete":{type:"nmtoken",values:["inline","list","both","none"]},"aria-busy":{type:"boolean",global:!0},"aria-checked":{type:"nmtoken",values:["false","mixed","true","undefined"]},"aria-colcount":{type:"int",minValue:-1},"aria-colindex":{type:"int",minValue:1},"aria-colspan":{type:"int",minValue:1},"aria-controls":{type:"idrefs",allowEmpty:!0,global:!0},"aria-current":{type:"nmtoken",allowEmpty:!0,values:["page","step","location","date","time","true","false"],global:!0},"aria-describedby":{type:"idrefs",allowEmpty:!0,global:!0},"aria-details":{type:"idref",allowEmpty:!0,global:!0},"aria-disabled":{type:"boolean",global:!0},"aria-dropeffect":{type:"nmtokens",values:["copy","execute","link","move","none","popup"],global:!0},"aria-errormessage":{type:"idref",allowEmpty:!0,global:!0},"aria-expanded":{type:"nmtoken",values:["true","false","undefined"]},"aria-flowto":{type:"idrefs",allowEmpty:!0,global:!0},"aria-grabbed":{type:"nmtoken",values:["true","false","undefined"],global:!0},"aria-haspopup":{type:"nmtoken",allowEmpty:!0,values:["true","false","menu","listbox","tree","grid","dialog"],global:!0},"aria-hidden":{type:"nmtoken",values:["true","false","undefined"],global:!0},"aria-invalid":{type:"nmtoken",allowEmpty:!0,values:["grammar","false","spelling","true"],global:!0},"aria-keyshortcuts":{type:"string",allowEmpty:!0,global:!0},"aria-label":{type:"string",allowEmpty:!0,global:!0},"aria-labelledby":{type:"idrefs",allowEmpty:!0,global:!0},"aria-level":{type:"int",minValue:1},"aria-live":{type:"nmtoken",values:["assertive","off","polite"],global:!0},"aria-modal":{type:"boolean"},"aria-multiline":{type:"boolean"},"aria-multiselectable":{type:"boolean"},"aria-orientation":{type:"nmtoken",values:["horizontal","undefined","vertical"]},"aria-owns":{type:"idrefs",allowEmpty:!0,global:!0},"aria-placeholder":{type:"string",allowEmpty:!0},"aria-posinset":{type:"int",minValue:1},"aria-pressed":{type:"nmtoken",values:["false","mixed","true","undefined"]},"aria-readonly":{type:"boolean"},"aria-relevant":{type:"nmtokens",values:["additions","all","removals","text"],global:!0},"aria-required":{type:"boolean"},"aria-roledescription":{type:"string",allowEmpty:!0,global:!0},"aria-rowcount":{type:"int",minValue:-1},"aria-rowindex":{type:"int",minValue:1},"aria-rowspan":{type:"int",minValue:0},"aria-selected":{type:"nmtoken",values:["false","true","undefined"]},"aria-setsize":{type:"int",minValue:-1},"aria-sort":{type:"nmtoken",values:["ascending","descending","none","other"]},"aria-valuemax":{type:"decimal"},"aria-valuemin":{type:"decimal"},"aria-valuenow":{type:"decimal"},"aria-valuetext":{type:"string"}},Ga={alert:{type:"widget",allowedAttrs:["aria-expanded"],superclassRole:["section"]},alertdialog:{type:"widget",allowedAttrs:["aria-expanded","aria-modal"],superclassRole:["alert","dialog"],accessibleNameRequired:!0},application:{type:"landmark",allowedAttrs:["aria-activedescendant","aria-expanded"],superclassRole:["structure"],accessibleNameRequired:!0},article:{type:"structure",allowedAttrs:["aria-posinset","aria-setsize","aria-expanded"],superclassRole:["document"]},banner:{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},blockquote:{type:"structure",superclassRole:["section"]},button:{type:"widget",allowedAttrs:["aria-expanded","aria-pressed"],superclassRole:["command"],accessibleNameRequired:!0,nameFromContent:!0,childrenPresentational:!0},caption:{type:"structure",requiredContext:["figure","table","grid","treegrid"],superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},cell:{type:"structure",requiredContext:["row"],allowedAttrs:["aria-colindex","aria-colspan","aria-rowindex","aria-rowspan","aria-expanded"],superclassRole:["section"],nameFromContent:!0},checkbox:{type:"widget",allowedAttrs:["aria-checked","aria-readonly","aria-required"],superclassRole:["input"],accessibleNameRequired:!0,nameFromContent:!0,childrenPresentational:!0},code:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},columnheader:{type:"structure",requiredContext:["row"],allowedAttrs:["aria-sort","aria-colindex","aria-colspan","aria-expanded","aria-readonly","aria-required","aria-rowindex","aria-rowspan","aria-selected"],superclassRole:["cell","gridcell","sectionhead"],accessibleNameRequired:!1,nameFromContent:!0},combobox:{type:"composite",requiredAttrs:["aria-expanded","aria-controls"],allowedAttrs:["aria-owns","aria-autocomplete","aria-readonly","aria-required","aria-activedescendant","aria-orientation"],superclassRole:["select"],accessibleNameRequired:!0},command:{type:"abstract",superclassRole:["widget"]},complementary:{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},composite:{type:"abstract",superclassRole:["widget"]},contentinfo:{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},comment:{type:"structure",allowedAttrs:["aria-level","aria-posinset","aria-setsize"],superclassRole:["article"]},definition:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"]},deletion:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},dialog:{type:"widget",allowedAttrs:["aria-expanded","aria-modal"],superclassRole:["window"],accessibleNameRequired:!0},directory:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["list"],nameFromContent:!0},document:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["structure"]},emphasis:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},feed:{type:"structure",requiredOwned:["article"],allowedAttrs:["aria-expanded"],superclassRole:["list"]},figure:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"],nameFromContent:!0},form:{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},grid:{type:"composite",requiredOwned:["rowgroup","row"],allowedAttrs:["aria-level","aria-multiselectable","aria-readonly","aria-activedescendant","aria-colcount","aria-expanded","aria-rowcount"],superclassRole:["composite","table"],accessibleNameRequired:!1},gridcell:{type:"widget",requiredContext:["row"],allowedAttrs:["aria-readonly","aria-required","aria-selected","aria-colindex","aria-colspan","aria-expanded","aria-rowindex","aria-rowspan"],superclassRole:["cell","widget"],nameFromContent:!0},group:{type:"structure",allowedAttrs:["aria-activedescendant","aria-expanded"],superclassRole:["section"]},heading:{type:"structure",requiredAttrs:["aria-level"],allowedAttrs:["aria-expanded"],superclassRole:["sectionhead"],accessibleNameRequired:!1,nameFromContent:!0},img:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"],accessibleNameRequired:!0,childrenPresentational:!0},input:{type:"abstract",superclassRole:["widget"]},insertion:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},landmark:{type:"abstract",superclassRole:["section"]},link:{type:"widget",allowedAttrs:["aria-expanded"],superclassRole:["command"],accessibleNameRequired:!0,nameFromContent:!0},list:{type:"structure",requiredOwned:["group","listitem"],allowedAttrs:["aria-expanded"],superclassRole:["section"]},listbox:{type:"composite",requiredOwned:["group","option"],allowedAttrs:["aria-multiselectable","aria-readonly","aria-required","aria-activedescendant","aria-expanded","aria-orientation"],superclassRole:["select"],accessibleNameRequired:!0},listitem:{type:"structure",requiredContext:["list","group"],allowedAttrs:["aria-level","aria-posinset","aria-setsize","aria-expanded"],superclassRole:["section"],nameFromContent:!0},log:{type:"widget",allowedAttrs:["aria-expanded"],superclassRole:["section"]},main:{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},marquee:{type:"widget",allowedAttrs:["aria-expanded"],superclassRole:["section"]},math:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"],childrenPresentational:!0},menu:{type:"composite",requiredOwned:["group","menuitemradio","menuitem","menuitemcheckbox"],allowedAttrs:["aria-activedescendant","aria-expanded","aria-orientation"],superclassRole:["select"]},menubar:{type:"composite",requiredOwned:["group","menuitemradio","menuitem","menuitemcheckbox"],allowedAttrs:["aria-activedescendant","aria-expanded","aria-orientation"],superclassRole:["menu"]},menuitem:{type:"widget",requiredContext:["menu","menubar","group"],allowedAttrs:["aria-posinset","aria-setsize","aria-expanded"],superclassRole:["command"],accessibleNameRequired:!0,nameFromContent:!0},menuitemcheckbox:{type:"widget",requiredContext:["menu","menubar","group"],allowedAttrs:["aria-checked","aria-posinset","aria-readonly","aria-setsize"],superclassRole:["checkbox","menuitem"],accessibleNameRequired:!0,nameFromContent:!0,childrenPresentational:!0},menuitemradio:{type:"widget",requiredContext:["menu","menubar","group"],allowedAttrs:["aria-checked","aria-posinset","aria-readonly","aria-setsize"],superclassRole:["menuitemcheckbox","radio"],accessibleNameRequired:!0,nameFromContent:!0,childrenPresentational:!0},meter:{type:"structure",allowedAttrs:["aria-valuetext"],requiredAttrs:["aria-valuemax","aria-valuemin","aria-valuenow"],superclassRole:["range"],accessibleNameRequired:!0,childrenPresentational:!0},mark:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},navigation:{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},none:{type:"structure",superclassRole:["structure"],prohibitedAttrs:["aria-label","aria-labelledby"]},note:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"]},option:{type:"widget",requiredContext:["group","listbox"],allowedAttrs:["aria-selected","aria-checked","aria-posinset","aria-setsize"],superclassRole:["input"],accessibleNameRequired:!0,nameFromContent:!0,childrenPresentational:!0},paragraph:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},presentation:{type:"structure",superclassRole:["structure"],prohibitedAttrs:["aria-label","aria-labelledby"]},progressbar:{type:"widget",allowedAttrs:["aria-expanded","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext"],superclassRole:["range"],accessibleNameRequired:!0,childrenPresentational:!0},radio:{type:"widget",allowedAttrs:["aria-checked","aria-posinset","aria-setsize","aria-required"],superclassRole:["input"],accessibleNameRequired:!0,nameFromContent:!0,childrenPresentational:!0},radiogroup:{type:"composite",requiredOwned:["radio"],allowedAttrs:["aria-readonly","aria-required","aria-activedescendant","aria-expanded","aria-orientation"],superclassRole:["select"],accessibleNameRequired:!1},range:{type:"abstract",superclassRole:["widget"]},region:{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"],accessibleNameRequired:!1},roletype:{type:"abstract",superclassRole:[]},row:{type:"structure",requiredContext:["grid","rowgroup","table","treegrid"],requiredOwned:["cell","columnheader","gridcell","rowheader"],allowedAttrs:["aria-colindex","aria-level","aria-rowindex","aria-selected","aria-activedescendant","aria-expanded","aria-posinset","aria-setsize"],superclassRole:["group","widget"],nameFromContent:!0},rowgroup:{type:"structure",requiredContext:["grid","table","treegrid"],requiredOwned:["row"],superclassRole:["structure"],nameFromContent:!0},rowheader:{type:"structure",requiredContext:["row"],allowedAttrs:["aria-sort","aria-colindex","aria-colspan","aria-expanded","aria-readonly","aria-required","aria-rowindex","aria-rowspan","aria-selected"],superclassRole:["cell","gridcell","sectionhead"],accessibleNameRequired:!1,nameFromContent:!0},scrollbar:{type:"widget",requiredAttrs:["aria-valuenow"],allowedAttrs:["aria-controls","aria-orientation","aria-valuemax","aria-valuemin","aria-valuetext"],superclassRole:["range"],childrenPresentational:!0},search:{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},searchbox:{type:"widget",allowedAttrs:["aria-activedescendant","aria-autocomplete","aria-multiline","aria-placeholder","aria-readonly","aria-required"],superclassRole:["textbox"],accessibleNameRequired:!0},section:{type:"abstract",superclassRole:["structure"],nameFromContent:!0},sectionhead:{type:"abstract",superclassRole:["structure"],nameFromContent:!0},select:{type:"abstract",superclassRole:["composite","group"]},separator:{type:"structure",allowedAttrs:["aria-valuemax","aria-valuemin","aria-valuenow","aria-orientation","aria-valuetext"],superclassRole:["structure","widget"],childrenPresentational:!0},slider:{type:"widget",requiredAttrs:["aria-valuenow"],allowedAttrs:["aria-valuemax","aria-valuemin","aria-orientation","aria-readonly","aria-valuetext"],superclassRole:["input","range"],accessibleNameRequired:!0,childrenPresentational:!0},spinbutton:{type:"widget",requiredAttrs:["aria-valuenow"],allowedAttrs:["aria-valuemax","aria-valuemin","aria-readonly","aria-required","aria-activedescendant","aria-valuetext"],superclassRole:["composite","input","range"],accessibleNameRequired:!0},status:{type:"widget",allowedAttrs:["aria-expanded"],superclassRole:["section"]},strong:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},structure:{type:"abstract",superclassRole:["roletype"]},subscript:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},superscript:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},switch:{type:"widget",requiredAttrs:["aria-checked"],allowedAttrs:["aria-readonly"],superclassRole:["checkbox"],accessibleNameRequired:!0,nameFromContent:!0,childrenPresentational:!0},suggestion:{type:"structure",requiredOwned:["insertion","deletion"],superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},tab:{type:"widget",requiredContext:["tablist"],allowedAttrs:["aria-posinset","aria-selected","aria-setsize","aria-expanded"],superclassRole:["sectionhead","widget"],nameFromContent:!0,childrenPresentational:!0},table:{type:"structure",requiredOwned:["rowgroup","row"],allowedAttrs:["aria-colcount","aria-rowcount","aria-expanded"],superclassRole:["section"],accessibleNameRequired:!1,nameFromContent:!0},tablist:{type:"composite",requiredOwned:["tab"],allowedAttrs:["aria-level","aria-multiselectable","aria-orientation","aria-activedescendant","aria-expanded"],superclassRole:["composite"]},tabpanel:{type:"widget",allowedAttrs:["aria-expanded"],superclassRole:["section"],accessibleNameRequired:!1},term:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"],nameFromContent:!0},text:{type:"structure",superclassRole:["section"],nameFromContent:!0},textbox:{type:"widget",allowedAttrs:["aria-activedescendant","aria-autocomplete","aria-multiline","aria-placeholder","aria-readonly","aria-required"],superclassRole:["input"],accessibleNameRequired:!0},time:{type:"structure",superclassRole:["section"]},timer:{type:"widget",allowedAttrs:["aria-expanded"],superclassRole:["status"]},toolbar:{type:"structure",allowedAttrs:["aria-orientation","aria-activedescendant","aria-expanded"],superclassRole:["group"],accessibleNameRequired:!0},tooltip:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"],nameFromContent:!0},tree:{type:"composite",requiredOwned:["group","treeitem"],allowedAttrs:["aria-multiselectable","aria-required","aria-activedescendant","aria-expanded","aria-orientation"],superclassRole:["select"],accessibleNameRequired:!1},treegrid:{type:"composite",requiredOwned:["rowgroup","row"],allowedAttrs:["aria-activedescendant","aria-colcount","aria-expanded","aria-level","aria-multiselectable","aria-orientation","aria-readonly","aria-required","aria-rowcount"],superclassRole:["grid","tree"],accessibleNameRequired:!1},treeitem:{type:"widget",requiredContext:["group","tree"],allowedAttrs:["aria-checked","aria-expanded","aria-level","aria-posinset","aria-selected","aria-setsize"],superclassRole:["listitem","option"],accessibleNameRequired:!0,nameFromContent:!0},widget:{type:"abstract",superclassRole:["roletype"]},window:{type:"abstract",superclassRole:["roletype"]}},Ya={ariaAttrs:Wa,ariaRoles:_({},Ga,{"doc-abstract":{type:"section",allowedAttrs:["aria-expanded"],superclassRole:["section"]},"doc-acknowledgments":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-afterword":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-appendix":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-backlink":{type:"link",allowedAttrs:["aria-expanded"],nameFromContent:!0,superclassRole:["link"]},"doc-biblioentry":{type:"listitem",allowedAttrs:["aria-expanded","aria-level","aria-posinset","aria-setsize"],superclassRole:["listitem"],deprecated:!0},"doc-bibliography":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-biblioref":{type:"link",allowedAttrs:["aria-expanded"],nameFromContent:!0,superclassRole:["link"]},"doc-chapter":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-colophon":{type:"section",allowedAttrs:["aria-expanded"],superclassRole:["section"]},"doc-conclusion":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-cover":{type:"img",allowedAttrs:["aria-expanded"],superclassRole:["img"]},"doc-credit":{type:"section",allowedAttrs:["aria-expanded"],superclassRole:["section"]},"doc-credits":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-dedication":{type:"section",allowedAttrs:["aria-expanded"],superclassRole:["section"]},"doc-endnote":{type:"listitem",allowedAttrs:["aria-expanded","aria-level","aria-posinset","aria-setsize"],superclassRole:["listitem"],deprecated:!0},"doc-endnotes":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-epigraph":{type:"section",allowedAttrs:["aria-expanded"],superclassRole:["section"]},"doc-epilogue":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-errata":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-example":{type:"section",allowedAttrs:["aria-expanded"],superclassRole:["section"]},"doc-footnote":{type:"section",allowedAttrs:["aria-expanded"],superclassRole:["section"]},"doc-foreword":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-glossary":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-glossref":{type:"link",allowedAttrs:["aria-expanded"],nameFromContent:!0,superclassRole:["link"]},"doc-index":{type:"navigation",allowedAttrs:["aria-expanded"],superclassRole:["navigation"]},"doc-introduction":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-noteref":{type:"link",allowedAttrs:["aria-expanded"],nameFromContent:!0,superclassRole:["link"]},"doc-notice":{type:"note",allowedAttrs:["aria-expanded"],superclassRole:["note"]},"doc-pagebreak":{type:"separator",allowedAttrs:["aria-expanded","aria-orientation"],superclassRole:["separator"],childrenPresentational:!0},"doc-pagelist":{type:"navigation",allowedAttrs:["aria-expanded"],superclassRole:["navigation"]},"doc-part":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-preface":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-prologue":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-pullquote":{type:"none",superclassRole:["none"]},"doc-qna":{type:"section",allowedAttrs:["aria-expanded"],superclassRole:["section"]},"doc-subtitle":{type:"sectionhead",allowedAttrs:["aria-expanded"],superclassRole:["sectionhead"]},"doc-tip":{type:"note",allowedAttrs:["aria-expanded"],superclassRole:["note"]},"doc-toc":{type:"navigation",allowedAttrs:["aria-expanded"],superclassRole:["navigation"]}},{"graphics-document":{type:"structure",superclassRole:["document"],accessibleNameRequired:!0},"graphics-object":{type:"structure",superclassRole:["group"],nameFromContent:!0},"graphics-symbol":{type:"structure",superclassRole:["img"],accessibleNameRequired:!0,childrenPresentational:!0}}),htmlElms:{a:{variant:{href:{matches:"[href]",contentTypes:["interactive","phrasing","flow"],allowedRoles:["button","checkbox","menuitem","menuitemcheckbox","menuitemradio","option","radio","switch","tab","treeitem","doc-backlink","doc-biblioref","doc-glossref","doc-noteref"],namingMethods:["subtreeText"]},default:{contentTypes:["phrasing","flow"],allowedRoles:!0}}},abbr:{contentTypes:["phrasing","flow"],allowedRoles:!0},address:{contentTypes:["flow"],allowedRoles:!0},area:{variant:{href:{matches:"[href]",allowedRoles:!1},default:{allowedRoles:["button","link"]}},contentTypes:["phrasing","flow"],namingMethods:["altText"]},article:{contentTypes:["sectioning","flow"],allowedRoles:["feed","presentation","none","document","application","main","region"],shadowRoot:!0},aside:{contentTypes:["sectioning","flow"],allowedRoles:["feed","note","presentation","none","region","search","doc-dedication","doc-example","doc-footnote","doc-pullquote","doc-tip"]},audio:{variant:{controls:{matches:"[controls]",contentTypes:["interactive","embedded","phrasing","flow"]},default:{contentTypes:["embedded","phrasing","flow"]}},allowedRoles:["application"],chromiumRole:"Audio"},b:{contentTypes:["phrasing","flow"],allowedRoles:!0},base:{allowedRoles:!1,noAriaAttrs:!0},bdi:{contentTypes:["phrasing","flow"],allowedRoles:!0},bdo:{contentTypes:["phrasing","flow"],allowedRoles:!0},blockquote:{contentTypes:["flow"],allowedRoles:!0,shadowRoot:!0},body:{allowedRoles:!1,shadowRoot:!0},br:{contentTypes:["phrasing","flow"],allowedRoles:["presentation","none"],namingMethods:["titleText","singleSpace"]},button:{contentTypes:["interactive","phrasing","flow"],allowedRoles:["checkbox","link","menuitem","menuitemcheckbox","menuitemradio","option","radio","switch","tab"],namingMethods:["subtreeText"]},canvas:{allowedRoles:!0,contentTypes:["embedded","phrasing","flow"],chromiumRole:"Canvas"},caption:{allowedRoles:!1},cite:{contentTypes:["phrasing","flow"],allowedRoles:!0},code:{contentTypes:["phrasing","flow"],allowedRoles:!0},col:{allowedRoles:!1,noAriaAttrs:!0},colgroup:{allowedRoles:!1,noAriaAttrs:!0},data:{contentTypes:["phrasing","flow"],allowedRoles:!0},datalist:{contentTypes:["phrasing","flow"],allowedRoles:!1,implicitAttrs:{"aria-multiselectable":"false"}},dd:{allowedRoles:!1},del:{contentTypes:["phrasing","flow"],allowedRoles:!0},dfn:{contentTypes:["phrasing","flow"],allowedRoles:!0},details:{contentTypes:["interactive","flow"],allowedRoles:!1},dialog:{contentTypes:["flow"],allowedRoles:["alertdialog"]},div:{contentTypes:["flow"],allowedRoles:!0,shadowRoot:!0},dl:{contentTypes:["flow"],allowedRoles:["group","list","presentation","none"],chromiumRole:"DescriptionList"},dt:{allowedRoles:["listitem"]},em:{contentTypes:["phrasing","flow"],allowedRoles:!0},embed:{contentTypes:["interactive","embedded","phrasing","flow"],allowedRoles:["application","document","img","presentation","none"],chromiumRole:"EmbeddedObject"},fieldset:{contentTypes:["flow"],allowedRoles:["none","presentation","radiogroup"],namingMethods:["fieldsetLegendText"]},figcaption:{allowedRoles:["group","none","presentation"]},figure:{contentTypes:["flow"],allowedRoles:!0,namingMethods:["figureText","titleText"]},footer:{contentTypes:["flow"],allowedRoles:["group","none","presentation","doc-footnote"],shadowRoot:!0},form:{contentTypes:["flow"],allowedRoles:["search","none","presentation"]},h1:{contentTypes:["heading","flow"],allowedRoles:["none","presentation","tab","doc-subtitle"],shadowRoot:!0,implicitAttrs:{"aria-level":"1"}},h2:{contentTypes:["heading","flow"],allowedRoles:["none","presentation","tab","doc-subtitle"],shadowRoot:!0,implicitAttrs:{"aria-level":"2"}},h3:{contentTypes:["heading","flow"],allowedRoles:["none","presentation","tab","doc-subtitle"],shadowRoot:!0,implicitAttrs:{"aria-level":"3"}},h4:{contentTypes:["heading","flow"],allowedRoles:["none","presentation","tab","doc-subtitle"],shadowRoot:!0,implicitAttrs:{"aria-level":"4"}},h5:{contentTypes:["heading","flow"],allowedRoles:["none","presentation","tab","doc-subtitle"],shadowRoot:!0,implicitAttrs:{"aria-level":"5"}},h6:{contentTypes:["heading","flow"],allowedRoles:["none","presentation","tab","doc-subtitle"],shadowRoot:!0,implicitAttrs:{"aria-level":"6"}},head:{allowedRoles:!1,noAriaAttrs:!0},header:{contentTypes:["flow"],allowedRoles:["group","none","presentation","doc-footnote"],shadowRoot:!0},hgroup:{contentTypes:["heading","flow"],allowedRoles:!0},hr:{contentTypes:["flow"],allowedRoles:["none","presentation","doc-pagebreak"],namingMethods:["titleText","singleSpace"]},html:{allowedRoles:!1,noAriaAttrs:!0},i:{contentTypes:["phrasing","flow"],allowedRoles:!0},iframe:{contentTypes:["interactive","embedded","phrasing","flow"],allowedRoles:["application","document","img","none","presentation"],chromiumRole:"Iframe"},img:{variant:{nonEmptyAlt:{matches:[{attributes:{alt:"/.+/"}},{hasAccessibleName:!0}],allowedRoles:["button","checkbox","link","menuitem","menuitemcheckbox","menuitemradio","option","progressbar","radio","scrollbar","separator","slider","switch","tab","treeitem","doc-cover"]},usemap:{matches:"[usemap]",contentTypes:["interactive","embedded","flow"]},default:{allowedRoles:["presentation","none"],contentTypes:["embedded","flow"]}},namingMethods:["altText"]},input:{variant:{button:{matches:{properties:{type:"button"}},allowedRoles:["link","menuitem","menuitemcheckbox","menuitemradio","option","radio","switch","tab"]},buttonType:{matches:{properties:{type:["button","submit","reset"]}},namingMethods:["valueText","titleText","buttonDefaultText"]},checkboxPressed:{matches:{properties:{type:"checkbox"},attributes:{"aria-pressed":"/.*/"}},allowedRoles:["button","menuitemcheckbox","option","switch"],implicitAttrs:{"aria-checked":"false"}},checkbox:{matches:{properties:{type:"checkbox"},attributes:{"aria-pressed":null}},allowedRoles:["menuitemcheckbox","option","switch"],implicitAttrs:{"aria-checked":"false"}},noRoles:{matches:{properties:{type:["color","date","datetime-local","file","month","number","password","range","reset","submit","time","week"]}},allowedRoles:!1},hidden:{matches:{properties:{type:"hidden"}},contentTypes:["flow"],allowedRoles:!1,noAriaAttrs:!0},image:{matches:{properties:{type:"image"}},allowedRoles:["link","menuitem","menuitemcheckbox","menuitemradio","radio","switch"],namingMethods:["altText","valueText","labelText","titleText","buttonDefaultText"]},radio:{matches:{properties:{type:"radio"}},allowedRoles:["menuitemradio"],implicitAttrs:{"aria-checked":"false"}},textWithList:{matches:{properties:{type:"text"},attributes:{list:"/.*/"}},allowedRoles:!1},default:{contentTypes:["interactive","flow"],allowedRoles:["combobox","searchbox","spinbutton"],implicitAttrs:{"aria-valuenow":""},namingMethods:["labelText","placeholderText"]}}},ins:{contentTypes:["phrasing","flow"],allowedRoles:!0},kbd:{contentTypes:["phrasing","flow"],allowedRoles:!0},label:{contentTypes:["interactive","phrasing","flow"],allowedRoles:!1,chromiumRole:"Label"},legend:{allowedRoles:!1},li:{allowedRoles:["menuitem","menuitemcheckbox","menuitemradio","option","none","presentation","radio","separator","tab","treeitem","doc-biblioentry","doc-endnote"],implicitAttrs:{"aria-setsize":"1","aria-posinset":"1"}},link:{contentTypes:["phrasing","flow"],allowedRoles:!1,noAriaAttrs:!0},main:{contentTypes:["flow"],allowedRoles:!1,shadowRoot:!0},map:{contentTypes:["phrasing","flow"],allowedRoles:!1,noAriaAttrs:!0},math:{contentTypes:["embedded","phrasing","flow"],allowedRoles:!1},mark:{contentTypes:["phrasing","flow"],allowedRoles:!0},menu:{contentTypes:["flow"],allowedRoles:["directory","group","listbox","menu","menubar","none","presentation","radiogroup","tablist","toolbar","tree"]},meta:{variant:{itemprop:{matches:"[itemprop]",contentTypes:["phrasing","flow"]}},allowedRoles:!1,noAriaAttrs:!0},meter:{contentTypes:["phrasing","flow"],allowedRoles:!1,chromiumRole:"progressbar"},nav:{contentTypes:["sectioning","flow"],allowedRoles:["doc-index","doc-pagelist","doc-toc","menu","menubar","none","presentation","tablist"],shadowRoot:!0},noscript:{contentTypes:["phrasing","flow"],allowedRoles:!1,noAriaAttrs:!0},object:{variant:{usemap:{matches:"[usemap]",contentTypes:["interactive","embedded","phrasing","flow"]},default:{contentTypes:["embedded","phrasing","flow"]}},allowedRoles:["application","document","img"],chromiumRole:"PluginObject"},ol:{contentTypes:["flow"],allowedRoles:["directory","group","listbox","menu","menubar","none","presentation","radiogroup","tablist","toolbar","tree"]},optgroup:{allowedRoles:!1},option:{allowedRoles:!1,implicitAttrs:{"aria-selected":"false"}},output:{contentTypes:["phrasing","flow"],allowedRoles:!0,namingMethods:["subtreeText"]},p:{contentTypes:["flow"],allowedRoles:!0,shadowRoot:!0},param:{allowedRoles:!1,noAriaAttrs:!0},picture:{contentTypes:["phrasing","flow"],allowedRoles:!1,noAriaAttrs:!0},pre:{contentTypes:["flow"],allowedRoles:!0},progress:{contentTypes:["phrasing","flow"],allowedRoles:!1,implicitAttrs:{"aria-valuemax":"100","aria-valuemin":"0","aria-valuenow":"0"}},q:{contentTypes:["phrasing","flow"],allowedRoles:!0},rp:{allowedRoles:!0},rt:{allowedRoles:!0},ruby:{contentTypes:["phrasing","flow"],allowedRoles:!0},s:{contentTypes:["phrasing","flow"],allowedRoles:!0},samp:{contentTypes:["phrasing","flow"],allowedRoles:!0},script:{contentTypes:["phrasing","flow"],allowedRoles:!1,noAriaAttrs:!0},section:{contentTypes:["sectioning","flow"],allowedRoles:["alert","alertdialog","application","banner","complementary","contentinfo","dialog","document","feed","group","log","main","marquee","navigation","none","note","presentation","search","status","tabpanel","doc-abstract","doc-acknowledgments","doc-afterword","doc-appendix","doc-bibliography","doc-chapter","doc-colophon","doc-conclusion","doc-credit","doc-credits","doc-dedication","doc-endnotes","doc-epigraph","doc-epilogue","doc-errata","doc-example","doc-foreword","doc-glossary","doc-index","doc-introduction","doc-notice","doc-pagelist","doc-part","doc-preface","doc-prologue","doc-pullquote","doc-qna","doc-toc"],shadowRoot:!0},select:{variant:{combobox:{matches:{attributes:{multiple:null,size:[null,"1"]}},allowedRoles:["menu"]},default:{allowedRoles:!1}},contentTypes:["interactive","phrasing","flow"],implicitAttrs:{"aria-valuenow":""},namingMethods:["labelText"]},slot:{contentTypes:["phrasing","flow"],allowedRoles:!1,noAriaAttrs:!0},small:{contentTypes:["phrasing","flow"],allowedRoles:!0},source:{allowedRoles:!1,noAriaAttrs:!0},span:{contentTypes:["phrasing","flow"],allowedRoles:!0,shadowRoot:!0},strong:{contentTypes:["phrasing","flow"],allowedRoles:!0},style:{allowedRoles:!1,noAriaAttrs:!0},svg:{contentTypes:["embedded","phrasing","flow"],allowedRoles:!0,chromiumRole:"SVGRoot",namingMethods:["svgTitleText"]},sub:{contentTypes:["phrasing","flow"],allowedRoles:!0},summary:{allowedRoles:!1,namingMethods:["subtreeText"]},sup:{contentTypes:["phrasing","flow"],allowedRoles:!0},table:{contentTypes:["flow"],allowedRoles:!0,namingMethods:["tableCaptionText","tableSummaryText"]},tbody:{allowedRoles:!0},template:{contentTypes:["phrasing","flow"],allowedRoles:!1,noAriaAttrs:!0},textarea:{contentTypes:["interactive","phrasing","flow"],allowedRoles:!1,implicitAttrs:{"aria-valuenow":"","aria-multiline":"true"},namingMethods:["labelText","placeholderText"]},tfoot:{allowedRoles:!0},thead:{allowedRoles:!0},time:{contentTypes:["phrasing","flow"],allowedRoles:!0},title:{allowedRoles:!1,noAriaAttrs:!0},td:{allowedRoles:!0},th:{allowedRoles:!0},tr:{allowedRoles:!0},track:{allowedRoles:!1,noAriaAttrs:!0},u:{contentTypes:["phrasing","flow"],allowedRoles:!0},ul:{contentTypes:["flow"],allowedRoles:["directory","group","listbox","menu","menubar","none","presentation","radiogroup","tablist","toolbar","tree"]},var:{contentTypes:["phrasing","flow"],allowedRoles:!0},video:{variant:{controls:{matches:"[controls]",contentTypes:["interactive","embedded","phrasing","flow"]},default:{contentTypes:["embedded","phrasing","flow"]}},allowedRoles:["application"],chromiumRole:"video"},wbr:{contentTypes:["phrasing","flow"],allowedRoles:["presentation","none"]}},cssColors:{aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},Qa=_({},Ya),Xa=Qa,Ka=function(e,t,n,r){this.red=e,this.green=t,this.blue=n,this.alpha=r,this.toHexString=function(){var e=Math.round(this.red).toString(16),t=Math.round(this.green).toString(16),n=Math.round(this.blue).toString(16)
return"#"+(this.red>15.5?e:"0"+e)+(this.green>15.5?t:"0"+t)+(this.blue>15.5?n:"0"+n)}
var a=/^#[0-9a-f]{3,8}$/i,o=/^((?:rgb|hsl)a?)\s*\(([^\)]*)\)/i
this.parseString=function(e){if(Xa.cssColors[e]||"transparent"===e){var t=O(Xa.cssColors[e]||[0,0,0],3),n=t[0],r=t[1],i=t[2]
return this.red=n,this.green=r,this.blue=i,void(this.alpha="transparent"===e?0:1)}if(e.match(o))this.parseColorFnString(e)
else{if(!e.match(a))throw new Error('Unable to parse color "'.concat(e,'"'))
this.parseHexString(e)}},this.parseRgbString=function(e){if("transparent"===e)return this.red=0,this.green=0,this.blue=0,void(this.alpha=0)
this.parseColorFnString(e)},this.parseHexString=function(e){if(e.match(a)&&![6,8].includes(e.length)){if((e=e.replace("#","")).length<6){var t=O(e,4),n=t[0],r=t[1],o=t[2],i=t[3]
e=n+n+r+r+o+o,i&&(e+=i+i)}var s=e.match(/.{1,2}/g)
this.red=parseInt(s[0],16),this.green=parseInt(s[1],16),this.blue=parseInt(s[2],16),s[3]?this.alpha=parseInt(s[3],16)/255:this.alpha=1}},this.parseColorFnString=function(e){var t=O(e.match(o)||[],3),n=t[1],r=t[2]
if(n&&r){var a=r.split(/\s*[,\/\s]\s*/).map((function(e){return e.replace(",","").trim()})).filter((function(e){return""!==e})).map((function(e,t){return function(e,t,n){if(/%$/.test(t))return 3===n?parseFloat(t)/100:255*parseFloat(t)/100
if("h"===e[n]){if(/turn$/.test(t))return 360*parseFloat(t)
if(/rad$/.test(t))return 57.3*parseFloat(t)}return parseFloat(t)}(n,e,t)}))
"hsl"===n.substr(0,3)&&(a=function(e){var t=O(e,4),n=t[0],r=t[1],a=t[2],o=t[3]
r/=255,a/=255
var i=(1-Math.abs(2*a-1))*r,s=i*(1-Math.abs(n/60%2-1)),l=a-i/2
return(n<60?[i,s,0]:n<120?[s,i,0]:n<180?[0,i,s]:n<240?[0,s,i]:n<300?[s,0,i]:[i,0,s]).map((function(e){return Math.round(255*(e+l))})).concat(o)}(a)),this.red=a[0],this.green=a[1],this.blue=a[2],this.alpha="number"==typeof a[3]?a[3]:1}},this.getRelativeLuminance=function(){var e=this.red/255,t=this.green/255,n=this.blue/255
return.2126*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.7152*(t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))+.0722*(n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4))}},Ja=function(e){var t=new Ka
if(t.parseString(e.getPropertyValue("background-color")),0!==t.alpha){var n=e.getPropertyValue("opacity")
t.alpha=t.alpha*n}return t},Za=function(e){var t=n.getComputedStyle(e)
return Va(e,t)||1===Ja(t).alpha}
function eo(e){return!!e.href&&(void 0!==tr.get("firstPageLink")?t=tr.get("firstPageLink"):(t=n.location.origin?Ci(i._tree,'a[href]:not([href^="javascript:"])').find((function(e){return!Zr(e.actualNode)})):Ci(i._tree,'a:not([href^="#"]):not([href^="/#"]):not([href^="javascript:"])')[0],tr.set("firstPageLink",t||null)),!t||e.compareDocumentPosition(t.actualNode)===e.DOCUMENT_POSITION_FOLLOWING)
var t}var to=function(e,t){for(var r=["fixed","sticky"],a=[],o=!1,i=0;i<e.length;++i){var s=e[i]
s===t&&(o=!0)
var l=n.getComputedStyle(s)
o||-1===r.indexOf(l.position)?a.push(s):a=[]}return a}
function no(e,t){var n=ro(t)
do{var r=ro(e)
if(r===n||r===t)return ao(e,t)
e=r}while(e)
return!1}function ro(e){for(var t=nr(e).parent;t;){if(Mo(t.actualNode))return t.actualNode
t=t.parent}}function ao(e,t){var r=n.getComputedStyle(t),a=r.getPropertyValue("overflow")
if("inline"===r.getPropertyValue("display"))return!0
var o=Array.from(e.getClientRects()),i=t.getBoundingClientRect(),s={left:i.left,top:i.top,width:i.width,height:i.height}
return(["scroll","auto"].includes(a)||t instanceof n.HTMLHtmlElement)&&(s.width=t.scrollWidth,s.height=t.scrollHeight),1===o.length&&"hidden"===a&&"nowrap"===r.getPropertyValue("white-space")&&(o[0]=s),o.some((function(e){return!(Math.ceil(e.left)<Math.floor(s.left)||Math.ceil(e.top)<Math.floor(s.top)||Math.floor(e.left+e.width)>Math.ceil(s.left+s.width)||Math.floor(e.top+e.height)>Math.ceil(s.top+s.height))}))}var oo=function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0
if(o>999)throw new Error("Infinite loop detected")
return Array.from(r.elementsFromPoint(t,n)||[]).filter((function(e){return Wr(e)===r})).reduce((function(r,a){if(zr(a)){var i=e(t,n,a.shadowRoot,o+1);(r=r.concat(i)).length&&no(r[0],a)&&r.push(a)}else r.push(a)
return r}),[])}
function io(e){var t={}
if(!e||!e.length)return t
var n=e.substring(1).split("&")
if(!n||!n.length)return t
for(var r=0;r<n.length;r++){var a=O(n[r].split("="),2),o=a[0],i=a[1],s=void 0===i?"":i
t[decodeURIComponent(o)]=decodeURIComponent(s)}return t}function so(e){if(!e)return""
var t=e.match(/#!?\/?/g)
return t?"#"===O(t,1)[0]?"":e:""}var lo,uo,co=function(e,t){if(e.hasAttribute(t)){var n=e.nodeName.toUpperCase(),r=e;["A","AREA"].includes(n)&&!e.ownerSVGElement||((r=a.createElement("a")).href=e.getAttribute(t))
var o,i=["https:","ftps:"].includes(r.protocol)?r.protocol.replace(/s:$/,":"):r.protocol,s=function(e){var t=e.split("/").pop()
return t&&-1!==t.indexOf(".")?{pathname:e.replace(t,""),filename:/index./.test(t)?"":t}:{pathname:e,filename:""}}(/^\//.test(r.pathname)?r.pathname:"/".concat(r.pathname)),l=s.pathname,u=s.filename
return{protocol:i,hostname:r.hostname,port:(o=r.port,["443","80"].includes(o)?"":o),pathname:/\/$/.test(l)?l:"".concat(l,"/"),search:io(r.search),hash:so(r.hash),filename:u}}},po=function(e,t){var r=t.getBoundingClientRect(),a=r.top,o=r.left,i=a-t.scrollTop,s=a-t.scrollTop+t.scrollHeight,l=o-t.scrollLeft,u=o-t.scrollLeft+t.scrollWidth
if(e.left>u&&e.left>r.right||e.top>s&&e.top>r.bottom||e.right<l&&e.right<r.left||e.bottom<i&&e.bottom<r.top)return!1
var c=n.getComputedStyle(t)
return!(e.left>r.right||e.top>r.bottom)||"scroll"===c.overflow||"auto"===c.overflow||t instanceof n.HTMLBodyElement||t instanceof n.HTMLHtmlElement},fo=0,ho=function(e){C(r,e)
var t=k(r)
function r(e,n,a){var o
if(I(this,r),(o=t.call(this)).shadowId=a,o.children=[],o.actualNode=e,o.parent=n,n||(fo=0),o.nodeIndex=fo++,o._isHidden=null,o._cache={},void 0===lo&&(lo=In(e.ownerDocument)),o._isXHTML=lo,"input"===e.nodeName.toLowerCase()){var i=e.getAttribute("type")
i=o._isXHTML?i:(i||"").toLowerCase(),Ii().includes(i)||(i="text"),o._type=i}return tr.get("nodeMap")&&tr.get("nodeMap").set(e,N(o)),o}return j(r,[{key:"props",get:function(){if(!this._cache.hasOwnProperty("props")){var e=this.actualNode,t=e.nodeType,n=e.nodeName,r=e.id,a=e.multiple,o=e.nodeValue,i=e.value,s=e.selected
this._cache.props={nodeType:t,nodeName:this._isXHTML?n:n.toLowerCase(),id:r,type:this._type,multiple:a,nodeValue:o,value:i,selected:s}}return this._cache.props}},{key:"attr",value:function(e){return"function"!=typeof this.actualNode.getAttribute?null:this.actualNode.getAttribute(e)}},{key:"hasAttr",value:function(e){return"function"==typeof this.actualNode.hasAttribute&&this.actualNode.hasAttribute(e)}},{key:"attrNames",get:function(){var e
return this._cache.hasOwnProperty("attrNames")||(e=this.actualNode.attributes instanceof n.NamedNodeMap?this.actualNode.attributes:this.actualNode.cloneNode(!1).attributes,this._cache.attrNames=Array.from(e).map((function(e){return e.name}))),this._cache.attrNames}},{key:"getComputedStylePropertyValue",value:function(e){var t="computedStyle_"+e
return this._cache.hasOwnProperty(t)||(this._cache.hasOwnProperty("computedStyle")||(this._cache.computedStyle=n.getComputedStyle(this.actualNode)),this._cache[t]=this._cache.computedStyle.getPropertyValue(e)),this._cache[t]}},{key:"isFocusable",get:function(){return this._cache.hasOwnProperty("isFocusable")||(this._cache.isFocusable=Ia(this.actualNode)),this._cache.isFocusable}},{key:"tabbableElements",get:function(){return this._cache.hasOwnProperty("tabbableElements")||(this._cache.tabbableElements=ya(this)),this._cache.tabbableElements}},{key:"clientRects",get:function(){return this._cache.hasOwnProperty("clientRects")||(this._cache.clientRects=Array.from(this.actualNode.getClientRects()).filter((function(e){return e.width>0}))),this._cache.clientRects}},{key:"boundingClientRect",get:function(){return this._cache.hasOwnProperty("boundingClientRect")||(this._cache.boundingClientRect=this.actualNode.getBoundingClientRect()),this._cache.boundingClientRect}}]),r}(St)
function mo(e,t,r){var a,o,i
function s(e,n,r){var a=mo(n,t,r)
return a&&(e=e.concat(a)),e}return e.documentElement&&(e=e.documentElement),i=e.nodeName.toLowerCase(),zr(e)?(uo=!0,a=new ho(e,r,t),t="a"+Math.random().toString().substring(2),o=Array.from(e.shadowRoot.childNodes),a.children=o.reduce((function(e,t){return s(e,t,a)}),[]),[a]):"content"===i&&"function"==typeof e.getDistributedNodes?(o=Array.from(e.getDistributedNodes())).reduce((function(e,t){return s(e,t,r)}),[]):"slot"===i&&"function"==typeof e.assignedNodes?((o=Array.from(e.assignedNodes())).length||(o=function(e){var t=[]
for(e=e.firstChild;e;)t.push(e),e=e.nextSibling
return t}(e)),n.getComputedStyle(e),o.reduce((function(e,t){return s(e,t,r)}),[])):1===e.nodeType?(a=new ho(e,r,t),o=Array.from(e.childNodes),a.children=o.reduce((function(e,t){return s(e,t,a)}),[]),[a]):3===e.nodeType?[new ho(e,r)]:void 0}var go=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.documentElement,t=arguments.length>1?arguments[1]:void 0
uo=!1,tr.set("nodeMap",new WeakMap)
var n=mo(e,t,null)
return n[0]._hasShadowRoot=uo,n},vo=function(e){return e?e.trim().split("-")[0].toLowerCase():""},yo=function(e){var t={}
return t.none=e.none.concat(e.all),t.any=e.any,Object.keys(t).map((function(e){if(t[e].length){var n=i._audit.data.failureSummaries[e]
return n&&"function"==typeof n.failureMessage?n.failureMessage(t[e].map((function(e){return e.message||""}))):void 0}})).filter((function(e){return void 0!==e})).join("\n\n")}
function bo(){var e=i._audit.data.incompleteFallbackMessage
return"function"==typeof e&&(e=e()),"string"!=typeof e?"":e}var wo=Nt.resultGroups,Do=function(e,t){var n=i.utils.aggregateResult(e)
return wo.forEach((function(e){t.resultTypes&&!t.resultTypes.includes(e)&&(n[e]||[]).forEach((function(e){Array.isArray(e.nodes)&&e.nodes.length>0&&(e.nodes=[e.nodes[0]])})),n[e]=(n[e]||[]).map((function(e){return e=Object.assign({},e),Array.isArray(e.nodes)&&e.nodes.length>0&&(e.nodes=e.nodes.map((function(e){return"object"===o(e.node)&&(e.html=e.node.source,t.elementRef&&!e.node.fromFrame&&(e.element=e.node.element),(!1!==t.selectors||e.node.fromFrame)&&(e.target=e.node.selector),t.ancestry&&(e.ancestry=e.node.ancestry),t.xpath&&(e.xpath=e.node.xpath)),delete e.result,delete e.node,function(e,t){["any","all","none"].forEach((function(n){Array.isArray(e[n])&&e[n].filter((function(e){return Array.isArray(e.relatedNodes)})).forEach((function(e){e.relatedNodes=e.relatedNodes.map((function(e){var n={html:e.source}
return t.elementRef&&!e.fromFrame&&(n.element=e.element),(!1!==t.selectors||e.fromFrame)&&(n.target=e.selector),t.ancestry&&(n.ancestry=e.ancestry),t.xpath&&(n.xpath=e.xpath),n}))}))}))}(e,t),e}))),wo.forEach((function(t){return delete e[t]})),delete e.pageLevel,delete e.result,e}))})),n}
i._thisWillBeDeletedDoNotUse=i._thisWillBeDeletedDoNotUse||{},i._thisWillBeDeletedDoNotUse.helpers={failureSummary:yo,incompleteFallbackMessage:bo,processAggregate:Do}
var xo=/\$\{\s?data\s?\}/g
function Eo(e,t){if("string"==typeof t)return e.replace(xo,t)
for(var n in t)if(t.hasOwnProperty(n)){var r=new RegExp("\\${\\s?data\\."+n+"\\s?}","g"),a=void 0===t[n]?"":String(t[n])
e=e.replace(r,a)}return e}var Co=function e(t,n){if(t){if(Array.isArray(n))return n.values=n.join(", "),"string"==typeof t.singular&&"string"==typeof t.plural?Eo(1===n.length?t.singular:t.plural,n):Eo(t,n)
if("string"==typeof t)return Eo(t,n)
if("string"==typeof n)return Eo(t[n],n)
var r=t.default||bo()
return n&&n.messageKey&&t[n.messageKey]&&(r=t[n.messageKey]),e(r,n)}},Ao=function(e,t,n){var r=i._audit.data.checks[e]
if(!r)throw new Error("Cannot get message for unknown check: ".concat(e,"."))
if(!r.messages[t])throw new Error('Check "'.concat(e,'"" does not have a "').concat(t,'" message.'))
return Co(r.messages[t],n)},ko=function(e,t,n){var r=((n.rules&&n.rules[t]||{}).checks||{})[e.id],a=(n.checks||{})[e.id],o=e.enabled,i=e.options
return a&&(a.hasOwnProperty("enabled")&&(o=a.enabled),a.hasOwnProperty("options")&&(i=a.options)),r&&(r.hasOwnProperty("enabled")&&(o=r.enabled),r.hasOwnProperty("options")&&(i=r.options)),{enabled:o,options:i,absolutePaths:n.absolutePaths}}
function To(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n
return t&&"object"===o(t)?t:"object"!==o(r)?{}:{testEngine:{name:"axe-core",version:i.version},testRunner:{name:i._audit.brand},testEnvironment:No(r),timestamp:(new Date).toISOString(),url:null===(e=r.location)||void 0===e?void 0:e.href}}function No(e){if(!e.navigator||"object"!==o(e.navigator))return{}
var t,n=e.navigator,r=e.innerHeight,a=e.innerWidth,i=(t=e.screen).orientation||t.msOrientation||t.mozOrientation||{},s=i.angle,l=i.type
return{userAgent:n.userAgent,windowWidth:a,windowHeight:r,orientationAngle:s,orientationType:l}}function Fo(e,t){var n=t.focusable,r=t.page
return{node:e,include:[],exclude:[],initiator:!1,focusable:n&&Ro(e),size:So(e),page:r}}function Ro(e){var t=e.getAttribute("tabindex")
if(!t)return!0
var n=parseInt(t,10)
return isNaN(n)||n>=0}function So(e){var t=parseInt(e.getAttribute("width"),10),n=parseInt(e.getAttribute("height"),10)
if(isNaN(t)||isNaN(n)){var r=e.getBoundingClientRect()
t=isNaN(t)?r.width:t,n=isNaN(n)?r.height:n}return{width:t,height:n}}function Oo(e,t,n){e.frames=e.frames||[]
var r=n.shift(),o=a.querySelectorAll(r)
Array.from(o).forEach((function(r){if(e.frames.forEach((function(e){e.node===r&&e[t].push(n)})),!e.frames.find((function(e){return e.node===r}))){var a=Fo(r,e)
n&&a[t].push(n),e.frames.push(a)}}))}function _o(e,t){for(var r,o,i=[],s=0,l=e[t].length;s<l;s++){if("string"==typeof(r=e[t][s])){o=Array.from(a.querySelectorAll(r)),i=i.concat(o.map((function(e){return nr(e)})))
break}!r||!r.length||r instanceof n.Node?r instanceof n.Node&&(r.documentElement instanceof n.Node?i.push(e.flatTree[0]):i.push(nr(r))):r.length>1?Oo(e,t,r):(o=Array.from(a.querySelectorAll(r[0])),i=i.concat(o.map((function(e){return nr(e)}))))}return i.filter((function(e){return e}))}function Io(e,t){var r,i,s,l,u,c=this
e=sr(e),this.frames=[],this.page="boolean"==typeof(null===(r=e)||void 0===r?void 0:r.page)?e.page:void 0,this.initiator="boolean"!=typeof(null===(i=e)||void 0===i?void 0:i.initiator)||e.initiator,this.focusable="boolean"!=typeof(null===(s=e)||void 0===s?void 0:s.focusable)||e.focusable,this.size="object"===o(null===(l=e)||void 0===l?void 0:l.size)?e.size:{},e=function(e){if(e&&"object"===o(e)||e instanceof n.NodeList){if(e instanceof n.Node)return{include:[e],exclude:[]}
if(e.hasOwnProperty("include")||e.hasOwnProperty("exclude"))return{include:e.include&&+e.include.length?e.include:[a],exclude:e.exclude||[]}
if(e.length===+e.length)return{include:e,exclude:[]}}return"string"==typeof e?{include:[e],exclude:[]}:{include:[a],exclude:[]}}(e),this.flatTree=null!=t?t:go(function(e){for(var t=e.include,r=e.exclude,o=Array.from(t).concat(Array.from(r)),i=0;i<o.length;++i){var s=o[i]
if(s instanceof n.Element)return s.ownerDocument.documentElement
if(s instanceof n.Document)return s.documentElement}return a.documentElement}(e)),this.exclude=e.exclude,this.include=e.include,this.include=_o(this,"include"),this.exclude=_o(this,"exclude"),Fi("frame, iframe",this).forEach((function(e){Yo(e,c)&&function(e,t){Vo(t)||Pr(e.frames,"node",t)||e.frames.push(Fo(t,e))}(c,e.actualNode)})),void 0===this.page&&(this.page=1===(u=this.include).length&&u[0].actualNode===a.documentElement,this.frames.forEach((function(e){e.page=c.page})))
var d=function(e){if(0===e.include.length){if(0===e.frames.length){var t=Fr.isInFrame()?"frame":"page"
return new Error("No elements found for include in "+t+" Context")}e.frames.forEach((function(e,t){if(0===e.include.length)return new Error("No elements found for include in Context of frame "+t)}))}}(this)
if(d instanceof Error)throw d
Array.isArray(this.include)||(this.include=Array.from(this.include)),this.include.sort(Jo)}function Po(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
if(!1===t.iframes)return[]
var n=new Io(e),r=n.frames
return r.map((function(e){var t=e.node,n=R(e,u)
return n.initiator=!1,{frameSelector:Kn(t),frameContext:n}}))}var jo=function(e){var t=i._audit.rules.find((function(t){return t.id===e}))
if(!t)throw new Error("Cannot find rule by id: ".concat(e))
return t}
function Mo(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=e.scrollWidth>e.clientWidth+t,a=e.scrollHeight>e.clientHeight+t
if(r||a){var o=n.getComputedStyle(e),i=qo(o,"overflow-x"),s=qo(o,"overflow-y")
return r&&i||a&&s?{elm:e,top:e.scrollTop,left:e.scrollLeft}:void 0}}function qo(e,t){var n=e.getPropertyValue(t)
return["scroll","auto"].includes(n)}function Lo(e){return Array.from(e.children||e.childNodes||[]).reduce((function(e,t){var n=Mo(t)
return n&&e.push(n),e.concat(Lo(t))}),[])}var Bo=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n,t=e.document.documentElement,r=[void 0!==e.pageXOffset?{elm:e,top:e.pageYOffset,left:e.pageXOffset}:{elm:t,top:t.scrollTop,left:t.scrollLeft}]
return r.concat(Lo(a.body))}
function Ho(){return sr(Xa)}var Uo,zo=function(e){if(!e)throw new Error("axe.utils.getStyleSheetFactory should be invoked with an argument")
return function(t){var n=t.data,r=t.isCrossOrigin,a=void 0!==r&&r,o=t.shadowId,i=t.root,s=t.priority,l=t.isLink,u=void 0!==l&&l,c=e.createElement("style")
if(u){var d=e.createTextNode('@import "'.concat(n.href,'"'))
c.appendChild(d)}else c.appendChild(e.createTextNode(n))
return e.head.appendChild(c),{sheet:c.sheet,isCrossOrigin:a,shadowId:o,root:i,priority:s}}},$o=function(e){if(Uo&&Uo.parentNode)return void 0===Uo.styleSheet?Uo.appendChild(a.createTextNode(e)):Uo.styleSheet.cssText+=e,Uo
if(e){var t=a.head||a.getElementsByTagName("head")[0]
return(Uo=a.createElement("style")).type="text/css",void 0===Uo.styleSheet?Uo.appendChild(a.createTextNode(e)):Uo.styleSheet.cssText=e,t.appendChild(Uo),Uo}},Vo=function e(t,r){var a=nr(t)
if(9===t.nodeType)return!1
if(11===t.nodeType&&(t=t.host),a&&null!==a._isHidden)return a._isHidden
var o=n.getComputedStyle(t,null)
if(!o||!t.parentNode||"none"===o.getPropertyValue("display")||!r&&"hidden"===o.getPropertyValue("visibility")||"true"===t.getAttribute("aria-hidden"))return!0
var i=e(t.assignedSlot?t.assignedSlot:t.parentNode,!0)
return a&&(a._isHidden=i),i},Wo=function(e){var t,n,r=null!==(t=null===(n=e.props)||void 0===n?void 0:n.nodeName)&&void 0!==t?t:e.nodeName.toLowerCase()
return"http://www.w3.org/2000/svg"!==e.namespaceURI&&!!Xa.htmlElms[r]}
function Go(e){return e.sort((function(e,t){return Lr(e,t)?1:-1}))[0]}var Yo=function(e,t){var n=t.include&&Go(t.include.filter((function(t){return Lr(t,e)}))),r=t.exclude&&Go(t.exclude.filter((function(t){return Lr(t,e)})))
return!!(!r&&n||r&&Lr(r,n))},Qo=function(e,t){return e.length===t.length&&e.every((function(e,n){var r=t[n]
return Array.isArray(e)?e.length===r.length&&e.every((function(e,t){return r[t]===e})):e===r}))},Xo=H(Dt())
i._memoizedFns=[]
var Ko=function(e){var t=Xo.default(e)
return i._memoizedFns.push(t),t},Jo=function(e,t){return(e=e.actualNode||e)===(t=t.actualNode||t)?0:4&e.compareDocumentPosition(t)?-1:1},Zo=function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=Array.from(e.cssRules)
if(!o)return Promise.resolve()
var i=o.filter((function(e){return 3===e.type}))
if(!i.length)return Promise.resolve({isCrossOrigin:a,priority:n,root:t.rootNode,shadowId:t.shadowId,sheet:e})
var s=i.filter((function(e){return e.href})).map((function(e){return e.href})).filter((function(e){return!r.includes(e)})),l=s.map((function(e,a){var o=[].concat(S(n),[a]),i=/^https?:\/\/|^\/\//i.test(e)
return ii(e,t,o,r,i)})),u=o.filter((function(e){return 3!==e.type}))
return u.length?(l.push(Promise.resolve(t.convertDataToStylesheet({data:u.map((function(e){return e.cssText})).join(),isCrossOrigin:a,priority:n,root:t.rootNode,shadowId:t.shadowId}))),Promise.all(l)):Promise.all(l)}
function ei(e){try{return!(!e.cssRules&&e.href)}catch(e){return!1}}var ti,ni,ri,ai,oi=function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=ei(e)
return o?Zo(e,t,n,r,a):ii(e.href,t,n,r,!0)},ii=function(e,t,n,r,a){return r.push(e),new Promise((function(t,n){var r=new XMLHttpRequest
r.open("GET",e),r.timeout=Nt.preload.timeout,r.addEventListener("error",n),r.addEventListener("timeout",n),r.addEventListener("loadend",(function(e){if(e.loaded&&r.responseText)return t(r.responseText)
n(r.responseText)})),r.send()})).then((function(e){var o=t.convertDataToStylesheet({data:e,isCrossOrigin:a,priority:n,root:t.rootNode,shadowId:t.shadowId})
return oi(o.sheet,t,n,r,o.isCrossOrigin)}))},si=function(){function e(){if(n.performance&&n.performance)return n.performance.now()}var t=null,r=e()
return{start:function(){this.mark("mark_axe_start")},end:function(){this.mark("mark_axe_end"),this.measure("axe","mark_axe_start","mark_axe_end"),this.logMeasures("axe")},auditStart:function(){this.mark("mark_audit_start")},auditEnd:function(){this.mark("mark_audit_end"),this.measure("audit_start_to_end","mark_audit_start","mark_audit_end"),this.logMeasures()},mark:function(e){n.performance&&void 0!==n.performance.mark&&n.performance.mark(e)},measure:function(e,t,r){n.performance&&void 0!==n.performance.measure&&n.performance.measure(e,t,r)},logMeasures:function(e){function t(e){Ft("Measure "+e.name+" took "+e.duration+"ms")}if(n.performance&&void 0!==n.performance.getEntriesByType)for(var r=n.performance.getEntriesByName("mark_axe_start")[0],a=n.performance.getEntriesByType("measure").filter((function(e){return e.startTime>=r.startTime})),o=0;o<a.length;++o){var i=a[o]
if(i.name===e)return void t(i)
t(i)}},timeElapsed:function(){return e()-r},reset:function(){t||(t=e()),r=e()}}}(),li=si
function ui(){if(a.elementsFromPoint)return a.elementsFromPoint
if(a.msElementsFromPoint)return a.msElementsFromPoint
var e,t=((e=a.createElement("x")).style.cssText="pointer-events:auto","auto"===e.style.pointerEvents),n=t?"pointer-events":"visibility",r=t?"none":"hidden",o=a.createElement("style")
return o.innerHTML=t?"* { pointer-events: all }":"* { visibility: visible }",function(e,t){var i,s,l,u=[],c=[]
for(a.head.appendChild(o);(i=a.elementFromPoint(e,t))&&-1===u.indexOf(i);)u.push(i),c.push({value:i.style.getPropertyValue(n),priority:i.style.getPropertyPriority(n)}),i.style.setProperty(n,r,"important")
for(u.indexOf(a.documentElement)<u.length-1&&(u.splice(u.indexOf(a.documentElement),1),u.push(a.documentElement)),s=c.length;l=c[--s];)u[s].style.setProperty(n,l.value?l.value:"",l.priority)
return a.head.removeChild(o),u}}"function"!=typeof Object.assign&&(Object.assign=function(e){if(null==e)throw new TypeError("Cannot convert undefined or null to object")
for(var t=Object(e),n=1;n<arguments.length;n++){var r=arguments[n]
if(null!=r)for(var a in r)r.hasOwnProperty(a)&&(t[a]=r[a])}return t}),Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(e){if(null===this)throw new TypeError("Array.prototype.find called on null or undefined")
if("function"!=typeof e)throw new TypeError("predicate must be a function")
for(var t,n=Object(this),r=n.length>>>0,a=arguments[1],o=0;o<r;o++)if(t=n[o],e.call(a,t,o,n))return t}}),Array.prototype.findIndex||Object.defineProperty(Array.prototype,"findIndex",{value:function(e,t){if(null===this)throw new TypeError("Array.prototype.find called on null or undefined")
if("function"!=typeof e)throw new TypeError("predicate must be a function")
for(var n,r=Object(this),a=r.length>>>0,o=0;o<a;o++)if(n=r[o],e.call(t,n,o,r))return o
return-1}}),"function"==typeof n.addEventListener&&(a.elementsFromPoint=ui()),Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(e){var t=Object(this),n=parseInt(t.length,10)||0
if(0===n)return!1
var r,a,o=parseInt(arguments[1],10)||0
for(o>=0?r=o:(r=n+o)<0&&(r=0);r<n;){if(e===(a=t[r])||e!=e&&a!=a)return!0
r++}return!1}}),Array.prototype.some||Object.defineProperty(Array.prototype,"some",{value:function(e){if(null==this)throw new TypeError("Array.prototype.some called on null or undefined")
if("function"!=typeof e)throw new TypeError
for(var t=Object(this),n=t.length>>>0,r=arguments.length>=2?arguments[1]:void 0,a=0;a<n;a++)if(a in t&&e.call(r,t[a],a,t))return!0
return!1}}),Array.from||Object.defineProperty(Array,"from",{value:(ti=Object.prototype.toString,ni=function(e){return"function"==typeof e||"[object Function]"===ti.call(e)},ri=Math.pow(2,53)-1,ai=function(e){var t=function(e){var t=Number(e)
return isNaN(t)?0:0!==t&&isFinite(t)?(t>0?1:-1)*Math.floor(Math.abs(t)):t}(e)
return Math.min(Math.max(t,0),ri)},function(e){var t=this,n=Object(e)
if(null==e)throw new TypeError("Array.from requires an array-like object - not null or undefined")
var r,a=arguments.length>1?arguments[1]:void 0
if(void 0!==a){if(!ni(a))throw new TypeError("Array.from: when provided, the second argument must be a function")
arguments.length>2&&(r=arguments[2])}for(var o,i=ai(n.length),s=ni(t)?Object(new t(i)):new Array(i),l=0;l<i;)o=n[l],s[l]=a?void 0===r?a(o,l):a.call(r,o,l):o,l+=1
return s.length=i,s})}),String.prototype.includes||(String.prototype.includes=function(e,t){return"number"!=typeof t&&(t=0),!(t+e.length>this.length)&&-1!==this.indexOf(e,t)}),Array.prototype.flat||Object.defineProperty(Array.prototype,"flat",{configurable:!0,value:function e(){var t=isNaN(arguments[0])?1:Number(arguments[0])
return t?Array.prototype.reduce.call(this,(function(n,r){return Array.isArray(r)?n.push.apply(n,e.call(r,t-1)):n.push(r),n}),[]):Array.prototype.slice.call(this)},writable:!0})
var ci=function(e,t){return e.concat(t).filter((function(e,t,n){return n.indexOf(e)===t}))}
function di(e,t,n,r,a){var o=a||{}
return o.vNodes=e,o.vNodesIndex=0,o.anyLevel=t,o.thisLevel=n,o.parentShadowId=r,o}var pi=[],fi=function(e,t,n){return function(e,t,n){for(var r=[],a=di(Array.isArray(e)?e:[e],t,null,e[0].shadowId,pi.pop()),o=[];a.vNodesIndex<a.vNodes.length;){for(var i,s,l=a.vNodes[a.vNodesIndex++],u=null,c=null,d=((null===(i=a.anyLevel)||void 0===i?void 0:i.length)||0)+((null===(s=a.thisLevel)||void 0===s?void 0:s.length)||0),p=!1,f=0;f<d;f++){var h,m,g,v=f<((null===(h=a.anyLevel)||void 0===h?void 0:h.length)||0)?a.anyLevel[f]:a.thisLevel[f-((null===(m=a.anyLevel)||void 0===m?void 0:m.length)||0)]
if((!v[0].id||l.shadowId===a.parentShadowId)&&wr(l,v[0]))if(1===v.length)p||n&&!n(l)||(o.push(l),p=!0)
else{var y=v.slice(1)
if(!1===[" ",">"].includes(y[0].combinator))throw new Error("axe.utils.querySelectorAll does not support the combinator: "+v[1].combinator)
">"===y[0].combinator?(u=u||[]).push(y):(c=c||[]).push(y)}v[0].id&&l.shadowId!==a.parentShadowId||null===(g=a.anyLevel)||void 0===g||!g.includes(v)||(c=c||[]).push(v)}for(l.children&&l.children.length&&(r.push(a),a=di(l.children,c,u,l.shadowId,pi.pop()));a.vNodesIndex===a.vNodes.length&&r.length;)pi.push(a),a=r.pop()}return o}(e=Array.isArray(e)?e:[e],yr(t),n)},hi=function(e){var t=e.treeRoot,n=function(e){var t=[],n=fi(e,"*",(function(e){return!t.includes(e.shadowId)&&(t.push(e.shadowId),!0)})).map((function(e){return{shadowId:e.shadowId,rootNode:Vr(e.actualNode)}}))
return ci(n,[])}(void 0===t?i._tree[0]:t)
if(!n.length)return Promise.resolve()
var r=a.implementation.createHTMLDocument("Dynamic document for loading cssom")
return function(e,t){var n=[]
return e.forEach((function(e,r){var a=e.rootNode,o=e.shadowId,i=function(e,t,n){var r
return r=11===e.nodeType&&t?function(e,t){return Array.from(e.children).filter(gi).reduce((function(n,r){var a=r.nodeName.toUpperCase(),o="STYLE"===a?r.textContent:r,i=t({data:o,isLink:"LINK"===a,root:e})
return n.push(i.sheet),n}),[])}(e,n):function(e){return Array.from(e.styleSheets).filter((function(e){return vi(e.media.mediaText)}))}(e),function(e){var t=[]
return e.filter((function(e){return!e.href||!t.includes(e.href)&&(t.push(e.href),!0)}))}(r)}(a,o,t)
if(!i)return Promise.all(n)
var s=r+1,l={rootNode:a,shadowId:o,convertDataToStylesheet:t,rootIndex:s},u=[],c=Promise.all(i.map((function(e,t){return oi(e,l,[s,t],u)})))
n.push(c)})),Promise.all(n)}(n,zo(r)).then((function(e){return mi(e)}))}
function mi(e){return e.reduce((function(e,t){return Array.isArray(t)?e.concat(mi(t)):e.concat(t)}),[])}function gi(e){var t=e.nodeName.toUpperCase(),n=e.getAttribute("href"),r=e.getAttribute("rel"),a="LINK"===t&&n&&r&&e.rel.toUpperCase().includes("STYLESHEET")
return"STYLE"===t||a&&vi(e.media)}function vi(e){return!e||!e.toUpperCase().includes("PRINT")}var yi=function(e){var t=e.treeRoot,n=void 0===t?i._tree[0]:t,r=fi(n,"video, audio",(function(e){var t=e.actualNode
return t.hasAttribute("src")?!!t.getAttribute("src"):!(Array.from(t.getElementsByTagName("source")).filter((function(e){return!!e.getAttribute("src")})).length<=0)}))
return Promise.all(r.map((function(e){var t,n=e.actualNode
return t=n,new Promise((function(e){t.readyState>0&&e(t),t.addEventListener("loadedmetadata",(function n(){t.removeEventListener("loadedmetadata",n),e(t)}))}))})))}
function bi(e){return!e||void 0===e.preload||null===e.preload||("boolean"==typeof e.preload?e.preload:(t=e.preload,"object"===o(t)&&Array.isArray(t.assets)))
var t}function wi(e){var t=Nt.preload,n=t.assets,r=t.timeout,a={assets:n,timeout:r}
if(!e.preload)return a
if("boolean"==typeof e.preload)return a
if(!e.preload.assets.every((function(e){return n.includes(e.toLowerCase())})))throw new Error("Requested assets, not supported. Supported assets are: ".concat(n.join(", "),"."))
return a.assets=ci(e.preload.assets.map((function(e){return e.toLowerCase()})),[]),e.preload.timeout&&"number"==typeof e.preload.timeout&&!isNaN(e.preload.timeout)&&(a.timeout=e.preload.timeout),a}var Di=function(e){var t={cssom:hi,media:yi}
return bi(e)?new Promise((function(n,r){var a=wi(e),o=a.assets,i=a.timeout,s=setTimeout((function(){return r(new Error("Preload assets timed out."))}),i)
Promise.all(o.map((function(n){return t[n](e).then((function(e){return a=e,(r=n)in(t={})?Object.defineProperty(t,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[r]=a,t
var t,r,a}))}))).then((function(e){var t=e.reduce((function(e,t){return _({},e,t)}),{})
clearTimeout(s),n(t)})).catch((function(e){clearTimeout(s),r(e)}))})):Promise.resolve()}
function xi(e,t,n){return function(r){var a=e[r.id]||{},i=a.messages||{},s=Object.assign({},a)
delete s.messages,n.reviewOnFail||void 0!==r.result?s.message=r.result===t?i.pass:i.fail:("object"!==o(i.incomplete)||Array.isArray(r.data)||(s.message=function(e,t){function n(e){return e.incomplete&&e.incomplete.default?e.incomplete.default:bo()}if(!e||!e.missingData)return e&&e.messageKey?t.incomplete[e.messageKey]:n(t)
try{var r=t.incomplete[e.missingData[0].reason]
if(!r)throw new Error
return r}catch(r){return"string"==typeof e.missingData?t.incomplete[e.missingData]:n(t)}}(r.data,i)),s.message||(s.message=i.incomplete)),"function"!=typeof s.message&&(s.message=Co(s.message,r.data)),Hr(r,s)}}var Ei=function(e){var t=i._audit.data.checks||{},n=i._audit.data.rules||{},r=Pr(i._audit.rules,"id",e.id)||{}
e.tags=sr(r.tags||[])
var a=xi(t,!0,r),o=xi(t,!1,r)
e.nodes.forEach((function(e){e.any.forEach(a),e.all.forEach(a),e.none.forEach(o)})),Hr(e,sr(n[e.id]||{}))},Ci=function(e,t){return fi(e,t)}
function Ai(e,t){var n,r,a=i._audit&&i._audit.tagExclude?i._audit.tagExclude:[]
return t.hasOwnProperty("include")||t.hasOwnProperty("exclude")?(n=t.include||[],n=Array.isArray(n)?n:[n],r=t.exclude||[],r=(r=Array.isArray(r)?r:[r]).concat(a.filter((function(e){return-1===n.indexOf(e)})))):(n=Array.isArray(t)?t:[t],r=a.filter((function(e){return-1===n.indexOf(e)}))),!!(n.some((function(t){return-1!==e.tags.indexOf(t)}))||0===n.length&&!1!==e.enabled)&&r.every((function(t){return-1===e.tags.indexOf(t)}))}var ki=function(e,t,n){var r=n.runOnly||{},a=(n.rules||{})[e.id]
return!(e.pageLevel&&!t.page)&&("rule"===r.type?-1!==r.values.indexOf(e.id):a&&"boolean"==typeof a.enabled?a.enabled:"tag"===r.type&&r.values?Ai(e,r.values):Ai(e,[]))},Ti=function e(t,n){if(!n)return t
var r=t.cloneNode(!1),o=r.outerHTML,i=On(r)
return tr.get(o)?r=tr.get(o):i&&(r=a.createElement(r.nodeName),Array.from(i).forEach((function(e){(function(e,t,n){return void 0!==n[t]&&(!0===n[t]||_n(e,n[t]))})(t,e.name,n)||r.setAttribute(e.name,e.value)})),tr.set(o,r)),Array.from(t.childNodes).forEach((function(t){r.appendChild(e(t,n))})),r}
function Ni(e,t){var n
if(0===e.length)return t
e.length<t.length&&(n=e,e=t,t=n)
for(var r=0,a=t.length;r<a;r++)e.includes(t[r])||e.push(t[r])
return e}var Fi=function(e,t){var n,r=[]
if(i._selectCache)for(var a=0,o=i._selectCache.length;a<o;a++){var s=i._selectCache[a]
if(s.selector===e)return s.result}for(var l=t.include.reduce((function(e,t){return e.length&&Lr(e[e.length-1],t)||e.push(t),e}),[]),u=function(e){return e.exclude&&0!==e.exclude.length?function(t){return Yo(t,e)}:null}(t),c=0;c<l.length;c++)n=l[c],r=Ni(r,fi(n,e,u))
return i._selectCache&&i._selectCache.push({selector:e,result:r}),r},Ri=function(e){e.forEach((function(e){return function(e,t,r){if(e===n)return e.scroll(r,t)
e.scrollTop=t,e.scrollLeft=r}(e.elm,e.top,e.left)}))}
function Si(e){return Oi(Array.isArray(e)?S(e):[e],a)}function Oi(e,t){var n=e.shift(),r=n?t.querySelector(n):null
return 0===e.length?r:null!=r&&r.shadowRoot?Oi(e,r.shadowRoot):null}var _i=function(e){return(e||"").trim().replace(/\s{2,}/g," ").split(" ")},Ii=function(){return["hidden","text","search","tel","url","email","password","date","month","week","time","datetime-local","number","range","color","checkbox","radio","file","submit","image","reset","button"]},Pi=[,[,[1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,,1,1,1,1,1,1,,1],[1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,1,1,1,,1,1,,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,1,1,1,1,1,1,1,,1,,1,1,1,1,1,1,1,1,,1,1,1,1],[1,1,1,1,1,1,,,,,,1,1,1,1,,,1,1,1,,1,,1,,1,1],[1,1,1,,1,1,,1,1,1,,1,,,1,1,1,,,1,1,1,,,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,,,,1,1,1,,1,1,1,1,1,1,,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,1,1],[,1,,,,,,1,,1,,,,,1,,1,,,,1,1,,1,,,1],[1,,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,,,1,1,1,1,,,1,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,1,1,,,1,,,,,1,1,1,,1,,1,,1,,,,,,1],[1,,1,1,1,1,,,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[1,,1,,1,,,,,1,,1,1,1,1,1,,,,1,1,1,1],[,1,1,1,1,1,,1,1,1,,1,,1,1,1,,,1,1,1,1,1,1,1,1],[,,1,,,1,,1,,,,1,1,1,,,,,,,,,,,1],[1,1,1,1,1,1,,1,1,1,,1,1,,1,1,1,1,1,1,1,1,,,1,1,1],[1,1,1,1,1,,,1,,,1,,,1,1,1,,,,,1,,,,,,1]],[,[1,1,1,1,1,1,1,1,1,1,1,,1,,1,1,1,,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,,,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1],[,1,1,,1,,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1],[,1,1,1,1,1,,1,1,1,1,1,1,,1,1,,1,1,1,1,1,1,1,,1],[,1,,1,1,1,,1,1,,1,,1,1,1,1,1,1,1,1],[,1,,1,1,1,1,1,1,1,1,,,1,1,1,,,1,1,,,,,,1,1],[1,1,1,,,,,1,,,,1,1,,1,,,,,,1,,,,,1],[,1,,,1,,,1,,,,,,1],[,1,,1,,,,1,,,,1],[1,,1,1,1,,1,1,1,,1,1,1,1,1,1,1,1,1,,1,,,1,1,1,1],[,1,1,1,1,1,,,1,,,1,,1,1,,1,,1,,,,,1,,1],[,1,,,,1,,,1,1,,1,,1,1,1,1,,1,1,,,1,,,1],[,1,1,,,,,,1,,,,1,1,1,1,,1,1,1,1,1,1,,1,1,1],[,1,,1,1,1,,,1,1,1,1,1,1,,1,,,,,1,1,,1,,1],[,1,,1,,1,,1,,1,,1,1,1,1,1,,,1,1,1],[,1,1,1,,,,1,1,1,,1,1,,,1,1,,1,1,1,1,,1,1],[1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,,,1,1,1,1,1,1,1],[,1,1,1,,1,1,1,,1,,,,,1,1,1,,,1,,1,,,1,1],[,,,,1,,,,,,,,,,,,,,,,,1],[1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[,1,,1,1,1,,1,1,,,,1,1,1,1,1,,,1,1,1,,,,,1],[1,1,1,1,,,,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[1,,,,,,,1,,,,,,,1],[,1,1,,1,1,,1,,,,,,,,,,,,,1],,[1,1,1,,,,,,,,,,,,,1],[,,,,,,,,1,,,1,,,1,1,,,,,1]],[,[1,1,,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,,1,1,1,1,1,1],[,1,1,,1,1,1,1,,1,1,,1,1,1,1,1,1,1,,1,1,1,1,,1],[,,,1,,,,,,,,,,,,,,,1],[,1,,,1,1,,1,,1,1,,,,1,1,,,1,1,,,,1],[1,,,1,1,1,1,1,1,1,,1,1,1,1,,1,1,1,1,,,1,,,,1],,[,1,1,1,1,1,,1,1,1,,1,1,,1,1,,,1,1,1,1,,1,1,,1],[,1,,,1,,,1,,1,,,1,1,1,1,,,1,1,,1,1,1,1],[,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[,1,1,1,1,1,1,,,1,1,1,1,1,1,1,,,1,,,1,,1],[,1,,,,,,,,,,1,1,,,,,,1,1,,,,,1],[,,,,,,,1,,,,1,,1,1],[,1,1,1,1,1,1,1,,,,1,1,1,1,1,,,1,1,,1,1,1,1,1],[,1,,,1,1,,1,,1,1,1,,,1,1,,,1,,1,1,1,1,,1],[,1,1,1,,1,1,,1,1,,1,1,,1,1,1,1,1,1,1,,1,1,1,1,1],[,,,,,,,,,,,,,,,,1],,[,1,1,1,1,1,,1,1,1,,,1,,1,1,,1,1,1,1,1,,1,,1],[,,1,,,1,,,1,1,,,1,,1,1,,1],[,1,1,,1,,,,1,1,,1,,1,1,1,1,,1,1,1,1,,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1],[1,1],[,1,,,,,,,,,,1,1,,,,,,1,1,,1,,1,,1,1],,[,1,1,,1,,,1,,1,,,,1,1,1,,,,,,1,,,,1],[1,1,,,1,1,,1,,,,,1,,1]],[,[,1],[,,,1,,,,1,,,,1,,,,1,,,1,,,1],[,,,,,,,,,,,,,,,,,,1,1,,,,,,1],,[1,,,,,1],[,1,,,,1,,,,1],[,1,,,,,,,,,,,1,,,1,,,,,,,,,1,1],[,,,,,,,,,,,,,,,,,,,,,1],[,,,,,,,,,,,,,,,,1,,,,1,,1],[,1],[,1,,1,,1,,1,,1,,1,1,1,,1,1,,1,,,,,,,1],[1,,,,,1,,,1,1,,1,,1,,1,1,,,,,1,,,1],[,1,1,,,1,,1,,1,,1,,1,1,1,1,,,1,,1,,1,1,1],[1,1,1,1,1,,1,,1,,,,1,1,1,1,,1,1,,,1,1,1,1],[1,,,,,,,,,,,,,,,,,,,,1],[,,,,,,,,,1],,[,1,,,,,,1,1,1,,1,,,,1,,,1,1,1,,,1],[1,,,,,1,,1,1,1,,1,1,1,1,1,,1,,1,,1,,,1,1],[1,,1,1,,,,,1,,,,,,1,1,,,1,1,1,1,,,1,,1],[1,,,,,,,,,,,,,,,,,1],[,,,,,1,,,1,,,,,,1],[,,,,,,,,,,,,,,,1],[,,,,,,,,,,,,,,,,,,,,1],[,1,,,,,,,,,,,,,,1],[,1,,,,1]],[,[1,1,1,,1,,1,1,1,1,1,1,1,1,1,,1,,1,,1,1,,,1,1,1],[,,,,,,,,,,,,1],[,,,,,,,,,,,,,,,,,,,1],,[,,,,,,,,,,,,,,,,,,1],[1,,,,,,,,,1,,,,1],[,,,,,,,,,,,,,,,,,,1],,[1,1,,,,1,1,,,,,,1,,,,1,,1,,1,1,,1],[1],[,,,,,,,,,,,1,,,,,,,,,,,1],[,1,,,,,,,1,1,,,1,,1,,,,1,,,,,,,1],[,,,,,,,,,,,,,,,,1,,,,,1],[,,1,,,,,1,,1],[1,,,,1,,,,,1,,,,1,1,,,,1,1,,,,,1],[,,,,,1],[,,,,,,,,,,,,,,,,,,,1],[1,,,1,1,,,,,,,1,,1,,1,1,1,1,1,1],[,,,,,1,,,,,,,1,,,,,,,1],,[,,1,1,1,1,1,,1,1,1,,,1,1,,,1,1,,1,1,1,,,1],[,,,,,,,,,,,,,,,,,,1],[,1,,,,1],,[1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1],[,,,1,1,1,1,,,,,,1,,1,,,,1,,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,,,1],[,1,1,1,1,,1,1,1,1,1,1,1,1,,,,1,,1,,,1,1,1,1,1],[,,,,,,,,,,,1,,,,,,,,,1,,,,1],[,1,1,,1,1,,1,,,,1,1,,1,1,,,1,,1,1,,1],[,1,,1,,1,,,1,,,1,1,,1,1,,,1,1,1],[,1,1,1,1,1,,1,1,,,,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[,,,,,,,,,1,,1,,1,1,,,,1,,,1],[,1,,,1,1,,,,,,,,,1,1,1,,,,,1],[1,,,1,1,,,,1,1,1,1,1,,,1,,,1,,,1,,1,,1],[,1,1,,1,1,,1,1,,,,1,1,1,,,1,1,,,1,1,1,1,1,1],[1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,,1,1,,1,1,,1,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[,1,,,,1,,,,,,,,,1],[,1,,,,,,,,1,,,,,1,,,,1,,,1],[,1,1,1,1,,,1,1,1,1,1,,1,,1,,1,1,1,1,1,1,1,1,1,1],[,,,,,1,,1,,,,,1,1,1,1,1,,,1,,,,1],[,1,,,,,,,,1,,,,,,,,,,,,1],[1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1],[1,1,,1,,1,1,,,,1,,1,1,1,1,1,,1,1,,,,,,1],[,1,1,1,1,1,1,1,,1,1,,,1,1,,,,1,,1,1,,1,1],[,,,,,,,,,,,,,,,,,,,,,,,,1],[,1,1,,1,1,1,1,,1,,,1,1,1,1,,,1,,,,,,,1],[,1,,,,,,,,1,,,,,1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,1,1,1,1],[,1,1,,,,,,,,,,,,1,1,,,,,,1],[,1,,,,,,,1],[,,,,,,,,,,,,,,1,,,,,1,,,,,,1],[1,1,,,1,,,1,1,1,,,,1],,[,,,,,,,,,,,,,1,,,,,,,,,,1],[,,,,,,,,,1,,,,,,,,,1,,,,,,,1],[1,1,1,,1,,1,1,1,1,1,1,1,1,,1,,,1,,1,,,1,1],[,,,,,,,,,1],[,1,,,,1,,,,,,1,,,1,,,,,1],[,1,1,,1,1,,,,,,,,,,,,,,,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[,1,,,1,1,,1,1,1,1,,,,1,1,,,,1,,1],[1,1,1,1,1,1,,,1,1,1,1,1,1,,1,1,,1,1,1,,1,1,,1,1],[,,,,,,,,,,,,,,,1,,,,1],,[1,1,,1,,1,,,,,,1,,1,,1,1,,1,,1,1,,1,1,,1],[,,1,,,,,,1,,,,1,,1,,,,,1],[1,,,,,,,,,1,,,,,,1,,,,1,,1,,,1],[1,,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,,,1,,1,,,,,,1,,,1,,,,,,,,1],[,1,,1,,,,,,,,,,,,1],,[1,1,,,,,,,,,,,,,,,,,,,,,,1,1],[1]],[,[1,,,,,,,,,1,,,,,1,,1,,1],[,1,1,,1,1,,1,1,1,,,1,1,1,,,,1,,,1,,,,1],[,1,,,,,,,1,,,,1,,,,,,1],[1,1,1,1,1,1,,,,1,,,,,,,,,1,1,1,1],[1],[,1,1,,,1,1,,,,,1,,1,,,,,,,,1,,,,1],[1,,1,,,1,,1,,,,,1,1,1,1,,,,1,,,,1],[,,1,,,,,,,1,,,,,,,1,,,,,,,1],[1,,,,,,,,,,,,,,1,,,,1],[,,,1,,1,,,,,1,,,,1,1,,,,1],[1,,,,,1,,,,1,,1,1,,,1,1,,1,1,1,,1,1,1,,1],[,1,1,,,,,1,,1,,1,1,1,,1,1,,,1,,1,1,1],[,1,,,,1,,,,1,,,1,,1,1,,,1,1,,,,,,1],[1,,1,1,,1,,1,1,,1,,1,1,1,1,1,,,1,1,,,,,,1],[1,,,,,,,,,,,,,,,,,,1,,,1,,1],[,,,,,,,,,1,,,,,,1],[,,,,,,,,,,,,,,,,,,,,,1,,1],[,1,,,,1,,,1,1,,1,,,1,1,,,1,,,1,,,1,1],[1,1,,1,1,1,,1,1,1,,1,,1,1,1,,,1,,1,1],[1,,1,1,1,1,,,,1,,1,1,1,,1,,,1,1,1,,1,1,1,1,1],[1,,,,,,,,,,,,,1],[,,1,,,,,,,,,,,,,,,,,,,,1],[1,,,,,,,,,,,1,,1,,1,,,,1],[,,,1,,,,,,,,,1],[,1,,,,,,,,,,,,,,1,,,,,,,,,1],[,,,,,,,,1,1,,,,,,,,,1,,,,,,,,1]],[,[1,1,1,1,1,1,1,,1,,1,1,1,1,1,1,,1,1,1,1,1,,,1,1,1],[,,,,,1,,,,1,1,1,,,1,1,,,1,,1,1,,1],[,,,,,,,,,,,,,,,,,,,1,1],[,1,,,,,,1,,,,,,,,,,,,,1],[,,1,,,1,,1,1,1,,1,1,,1,,,,1,,1,1],,[,,1,,,1,,,,,,1,,,,1],[,,,,,,,,,1,,,,,,,,,,1],[1,1,1,1,1,1,,1,1,1,,,1,1,,1,,1,,,1,1,1,,,1],[,,,,,1,,,,,,,,,,,,,1],[,1,,,,,,,,,,,,1,,1,1,,1,,,1],[,,,,,1,,,,,,,,,,,,,,1],[,1,1,1,1,,,,,1,,,1,,1,,,,1,1,,,,1,1],[,1,,,1,,,1,,1,1,,1,,,,,,,1],[,,1,,1,,,1,,,,,,,,,,,1,1,,,,1],[,1,,,,,,,,,,,,,,,,,1,,,,,,1],[,,,,,,,,,,,,,,,,,,1],[,1,1,,,,,,,,,,,,,,,,1,,1,1],[,,,,,,,,,,,,1],,[,1,1,1,1,,,,1,1,,1,1,1,1,1,1,,1,1,1,1,,1,,1],[1,,,,1,,,,,,,,,,1],[1,,,,,,,,,1],,[,1,,,,1,,,,,,,,,,,,,,,,,,,,1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,,1,,1,1,1,1,,,,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,,1,1,,1,1,1,,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,,1,1,1,1,1,1,1,1,1,1,,,1,1,1,,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,,1,,1,1,1,1],[1,1,1,1,,1,1,1,,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1],[,,,1,1,1,1,,1,,,,1,1,,,1,1,,1],[,1,1,,1,,,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,,,,,,,,,,,,1],[1,1,1,,,,,1,1,1,,1,1,1,1,,,1,1,,1,1,,,,,1],[,1,,,,,,,1,1,,,1,1,1,,1,,,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,1,1,1,1,,1,1,1,1,1,1],[,1,,,,1,,,,1,,,1,,,,1,,,,,,,1,1],[,1,1,1,1,1,,,1,1,1,,1,1,1,1,,,1,1,1,1,,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,,1,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,1,1,1,1,1],[1,1,1,,1,,,1,1,1,1,,1,1,1,1,,,,1,,1,,1,,,1],[1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,,,1,,,,,,,,,1,1,,,,,,,,,1],,[,1,,1,,1,,1,,1,,1,1,1,1,1,,,1,,1,,1,,,,1],[,1,,,1,1,,1,1,1,,,1,1,1,1,1,,1,1,1,,1,,,1],[1,,,1,,,,1,1,1,,,,,1,1,,,,1,,1],[1,1,,1,1,1,1,,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[1,1,,,,,,,,1,,1,,,,,,,,1,,1],[,1,,,,1,,1,1,,,,1,1,,1,,,,1,1,1,,1],,[,1,,,,,,1,,,,,,,1],[,,,,,,,,1,,,,1,,1,,,,,,,,,,,,1]],[,[,1,1,,1,1,1,1,,1,1,1,,1,1,,1,1,,1,1,1,1,1,1,,1],[,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,,1,1,1,1,1,1,1,1,1,,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1],[,1,1,,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,,1],[1,1,1,1,1,,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,,1,1,1,1,1,1,1,1,1,1],[,1,,,1,,,,,,,,1,,,,,,1,,,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,,1,,1,1,1,1,1,1,,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1],[,1,1,,1,,,,1,1,1,,1,1,1,1,,,1,1,1,1,,,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,,1],[1,1,,1,,1,,1,,1,1,1,1,1,1,1,,1,1,,,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,,1,1],[,1,1,,,,,1,1,1,,,1,,1,1,,,,1,,1,,,1,1],[,,,,,,,1,,,,1,1,1,1,1,,1,,,,,,,,1],[1,1,1,1,,1,1,1,,1,,1,1,1,1,,1,,1,,1,1,,,1,,1],[,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,,,,1,1,,1,,1,1,1,,1,,1,1,,1,1,,1,,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,,,,,,,,1,,,,,1,,1],[,1,1,1,,1,,1,,1,,,,1,,1,,,1,,,,,,1,1],[,1,,,1,1,,1,,1,,1,1,1,1,1,,1,1,,,1,,,1],[1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,1,,,,,1,,1,,1,,,,,,1,,1,,,,1,1]],[,[,1,,1,,,,,,,,,,,,,,,1,,,,1],[,,,,,,,,,1,,1,1,1,,1,,,1,,1,1],[1,1,,,,,,,1,,,,,,,1,,,,,,1],[,1,,,,,,,,,,1,,,,,,,,,1,1],,[,,,,,,,,,,,,,,,1,,,,1,,1],[,,1,1,,1,,1,,,,,,,,1,,,,,,1],[,,,,,,,,,,,,,,,,,,,,1,1],[,1,,,,,,,,,,,,,1],[1,,1,1,,,,1,,,,,,,,,1,,,1,,,1,1],[,1,1,,1,1,,1,1,1,1,1,1,1,1,1,,,1,1,,1,1,,1],[,1,,,1,1,,,,,,1,,1,,1,,,1,,1,1],[1,1,1,1,,1,,1,,1,,1,1,,1,1,1,1,1,,1,1,1,1,1],[,1,1,,,1,,1,,1,1,1,,,1,1,1,,1,1,1,1,,1,1],[,,,,1,,,1,,,,,,,1,,,,1,1],[,1,,,,,,,,,,1,,1,,1,,,,,1,,,,,1],,[1,1,,1,,1,,1,1,,,,,,1,1,,,1,1,1,1,1,1,1,1,1],[1,1,,1,,,,,,1,,,,,,1,1,,,,1,1,,,1],[,1,1,,1,1,,,,1,,1,1,1,1,1,,1,1,1,1,1,,1,1,1,1],[,1,1,,,1,,,,1,,,,1,1],[,,,,1],[,,,,,,,,,1,,,1],,[,,1,,1,,,,,,,,,1,,,,,,,,,,,,1],[,,,,,,,,,,,,,1]],[,[1,1,1,1,1,1,1,1,1,1,,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,,1,1,,1,1,1,1,1,,,1,1,1,1,1,,1,1,1,1,1,,,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,,1,,,,,1],[,1,,1,,,,,,1,,,,,1,1,,,,,1,1],[,1,1,,1,1,1,1,1,1,1,1,1,1,,1,1,1,,1,,,1,,1,1,1],[,1,,,,1,,,,,,,1],[,1,,,1,,,1,,1,,1,1,,1,,,,,1,,1,,,,1,1],[,1,,,1,,,1,1,1,,1,1,1,1,1,,1,1,,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,,1,1,1,1,1,1,1,1,1],[,,,,,,,,,,,,,,,,,,,,1],[,1,1,1,,,,1,1,,,,,,1,1,1,,1,1,1,1],[1,1,1,1,1,1,1,1,1,,1,1,1,,1,1,1,1,1,1,1,1,1,1,,1,1],[,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,,1,1,1,1,1,,1,1,1,1],[,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,,,1,1,1,1,1,1,1,,1,,1,1,1,1,1,,1,1,,1,1,1,1,1],[,1,,,,1,,,,1,,1,1,1,1,1,1,1,1,1,1,1],[,1,,,,1,,,,,,,,1,,,,,,,,,,1],[,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[1,1,,1,1,1,,1,1,1,,,1,1,1,1,1,1,1,1,1,1,,1,,1],[1,1,,,,,,,1,1,,,,,1,1,1,1,1,,1,1,1,1,,1],[,1,1,1,1,1,1,1,,1,1,1,,1,,1,1,1,1,,1,1,,1,1,1,1],,[,1,1,,,,,1,,1,,,,1,1,1,,,1,,,,,1],[,,,,,,,,,,,,,1],[,,,,,1,,,,,,,,1,1,,,,,1,,1,,,1,1],[,,,,,,,,,,,,,,1]],[,[,1],,,,,,,,,,,,,,,,,,,,[1,1,1,1,1,,1,1,1,1,,1,1,1,1,,1,1,1,1,,,1,1,1,1,1],[,1,,1,,1,,,1,1,1,,1,1,1,1,1,,,1,,,,1,,1,1],[,1,,1,,1,,,1,,,,,1,,,,,,1,1],[,1,,1,,,,,1,,,,1,,1,1,1,1,1,1,1,1,,1],[,1,,,,,,,,,,,,,,,1]],[,[,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,,1,,,,,,,,,1,1,,,,1],[,,,,,,1],[,,1],[,1,1,,,1,,1,,1,1,,1,1,1,,,,1,1,1,,,,,1],,[,1,,,,1,,,,,,1,,,1,,,,1,1,,1],[,,,,,,,1,,,,,,,,,1],[,1,,,,1,1,,,,,,1,1,1,,,,1,,1,1],[,,,,,,,1,,1,,,,,,,,,,1],[,1,1,,,,,,1,1,,,,1,,,,,,,1,,,1],,[1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,,,1,,,1,,,,,1,,1,,1,,1,,,,,1],[1,1,1,1,1,1,1,1,,,,,1,1,,1,1,,1,,,1,,1],[,,,,,,,,,,,,,,1,,,,,,1],,[,,,,,,,,,1,,,,,,1,,,,,1],[,,1,,,,,,,1,,,1,1],[,,,1,,,,,1,,,,,1,,,,,,1,,,,1],[1,,1,1,,1,1,1,1,1,,1,,,,1,1,1,,,1,1,,,,1,1],,[1,1,,,,,,,,,,1,,1,,1,,,1],[,,,,1,,,,,,,,,,,,,,,,,,,1],[,,,,,,,,,,,,,,1,,,,,1,,1],[,,,,,,,,1]],[,[1,1,1,1,1,1,1,,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,,,1,1,1,1,1,,1,1,,1,1,1,1,,1,1,1,1,1,1],[1,1,1,1,,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[,,1,,,1,,,,,,,,1,,,,,,1,,,,1],[1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,,1,1,1,1],[1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,1,1,,1,,,,1,1,1,1,1,1,,1,1,1,1,,1],[1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,,1,1,1,1,1,1,1,1,,1,1,1,,1,1,1,1,1,1,,1,1,1,1],[1,1,1,1,1,,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[1,,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1],[1,1,1,1,1,1,,1,1,1,1,1,1,,1,1,1,1,1,1,,1,1,1,1,1,1],[,,1,1,1,1,,1,,1,,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[1,1,,,,,,,1,,1,1,,1,1,1,,1,1,1,1,1],[1,1,1,1,,1,1,1,1,1,,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1],[1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1],[1,1,1,1,,1,,1,,1,1,1,1,1,,,,1,1,1,1,,1,1,1,1,1],[1,1,1,1,,1,,,,,,1,,1,,,,,1,1,,,,,1],[1,,1,1,,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,,1,1,,1,,1,,,,1,1,1,1,1,,,1,1,,1,,1],[,1,1,1,1,,,,,1,,1,1,1,1,1,,,1,1,,,,1,1,1],[,1,1,1,1,1,,1,,,,,1,,1,,1,,,1,,,1,1,,1]],[,[1,1,1,1,1,1,1,1,,1,1,1,1,,1,1,1,1,1,1,,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,,1,1,1,,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,,1,1],[1,1,1,1,1,1,1,1,1,1,,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,,,,,,,,,1,,,,,1,1,,,1,,1],[1,1,1,1,1,1,1,1,1,1,1,,,,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,,,1,1,1,1,,1,1,,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1],[,1,,,,,,1,,1,1,,1,1,1,1,1,,,1,,1,,1],[1,1,1,,1,1,1,1,,,,1,1,1,1,,1,1,1,1,1,1,1,1,1,,1],[1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,,1,1,1,1,1,1,1,1,1,,1,1,,1,1,1,1,1,,1,1,1,1,1,1],[,1,,1,,1,1,1,,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1],[,,1,,,,,,,,,,1,1,1,1,1,1,1,,1,1,,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,,1,1,1,1,1,1,1,1],[,1,,,1,1,,,,,,1,1,1,1,1,,,,1,1,1,,1,1,1],[1,1,1,1,1,1,1,1,1,,,,1,1,1,1,1,1,1,,1,1,,1,1,1],[,1,1,1,,1,,1,1,1,1,,,1,1,1,,1,1,1,1,1,,,1,1],[1,1,,,,1,,,1,1,1,,1,,1,,1,,1,1,1,1,1,,1,,1],[,1,,,,,,,1,,1,,1,1,1,1,,,,,,,,,1]],[,[,,,,,,,,,,,,,1,1,,,,1],[,1,,,,,,,,1,,,1,,,,,,1,,,1,,,,1],,[,1,,,,1,,1,,1,1,,1,1,,,,,,,,1],[,,,,,,,,,,,,,,,,,,,1],[,,,,,,,,,1],[1,1,1,,,1,,,,,,,,,1,1,,,,,,,,,,1],[,1,,,,,,,,,,,,,1],[,,,,,,,,,,,,,,,,,,,1,,,1],[,,,,,,,,,1],[1,1,,,,,,1,1,1,,1,1,,,,1,1,,1,,1,1,1,,1],[,1,1,1,,1,1,,,1,,1,1,1,1,,,,,,,1,,1],[,1,1,1,1,,,1,,1,,,,1,1,1,1,,1,1,,1],[,1,,,1,1,,1,,,,1,,1,1,,1,,1,,,1,,,1,,1],[,,,,,,,,,,,1],[,,,,,,,,,1,,,,,,,,,,,,,1],,[1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,,1,,1,1,1,1,1,1,1],[,1,,,,,,,1,1,,1,,,,,1,,,1,,1],[,1,,,,1,,,1,,,,,,,,1,,1,,,1],[,,,,,,,,,,,,,1,1,,,,1,,,1],[,,,,,1,,,1,,,,1],[,1],,[,1],[1,,,,,,,,,,,,,,1,,,,,1]],[,[,1,,,,1,1,1,1,1,1,,1,1,1,1,1,,1,1,,1,1,,,1],[,,1,,,,,,,,,1],,,[1,,,1,1,,,,,,,,1,1,,1,1,,1],,[,,,,,,,,,,,,,,,,,,1,,1],,[1,,,1,1,,1,1,,,,,1,,1,,,,,1,1,,1],,[,1,,,,,,,,1,1,1,1,1,,1,1,,,,1,1],[,,,,,,,,,,,,,,,,1,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,1,1,1,,1,1,1,1,1,1],[,,,,,,,,,,,1,,1,,,1],[1,,,,,,,,,,,,,,,,,,1,,1],,,[,1,,,,,,,,,,,,,,1,,,,1,1],[,,,,,,,,,1,,,1,,,,,,,,,,1],[,,,,,,,,,,,,,,,1],[,,,,,,,,,,,,,1,1,,,,,,1],,[,1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,,1,1,,1,1,1,1,1,1,,,1,1,1,1,1,,1,1],[,1,,,,,,,,1],[,,,,1,,,1,,,1,1,,,,,,,,,,1,,,,1],[,1,,1,1,,,1,1,1,,,,1,1,1,1,,1,1,1,1,,1],[,,,,,,,1],[,1,1,,,,,1,,1,,,,,,1,,,,,,1,,1,,1],[,1,,,,,,1,,,,1,,,,,,,,,,1],[,,1,1,,1,1,1,1,1,1,1,1,1,1,,,,1,,1,1,1,1,,1],[,1,,,,,,,,1],[,1,1,,1,,,,,,,,1,,,,,,1,,,1,,1,,1],[,1,,1,,1,,1,1,1,,1,1,1,,1,,,1,1,,1,1,1,1,1],[,1,1,1,1,1,,,1,1,,,,1,1,1,,,,1,1,,,1,1],[,,1,1,1,1,,1,,1,,1,,1,1,1,1,,,,,1,,1,,1],[1,1,1,1,1,1,1,1,,1,,1,,1,1,1,,,1,1,,,,1,,1],[,,,1],,[,1,1,,1,,,1,1,1,,1,1,1,1,1,1,,1,1,,1,1,1,1,1,1],[,1,,,,,,1,,1,,1,,,,,,,1,1,,1,1],[,,,,,,1,,1,1,,1,,1,,,,,,,,,,1],[,1,1,,1,,,,1,,,,1,1,1,,,,1,,1,1,1,,1,1],,[,1,1,,,,,,,,,,,,,1,,,1,,,,,1],[,1,,,,,,,,,,,,,,,,,,,,,,1],[,1,1,,,,,,,1,,,,1,,,,,1,,,,,,,1]],[,[,1,1,1,1,1,,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1],[,1,1,1,1,1,,1,,1,1,,,1,1,1,1,,1,,,,,1,1,1],[,,1,1,,1,,1,1,,,,1,1,1,1,,,1,,1,1,1,1,,1],[,1,,1,,,,,,,,1,,1,,1,,,,,,,,,,1],[,,1,,1,,,1,,,,,1,1,,,1,,1,1,1,1],[,1],[,1,1,,1,,1,1,,1,,,1,1,1,,,,1,,,1,,1],[1,1,,1,1,1,,,,,,,,,,,,,1,,1,1,1],[,1,1,,,,,,,1,,,1,,1,,1,,1,1,,,1,,,1],[,,1,,,,,,,,,,,,,,,,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,,1,,1,,,,,1,1,1,,,1,,1,,,,1],[,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,1,,,1,1,1,,1,,1,1,1,,,1,1,1,1,,,,1,1],[,,,1,1,,,1,,1,,1,,1,1,1,1,,1,,,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,,,,,,,,,,,,,,,,,,1],[,1,1,,1,1,,1,,1,,,,1,1,,,1,1,,1,1,,1],[,1,1,1,1,1,,,1,1,1,,1,1,1,1,1,1,1,1,,1,1,,,1],[,1,1,1,1,1,,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[,1,1,,1,,,1,,,1,,1,1,1,1,1,,1,,1,1],[,,,,,1,,,,1,,,,,1,1,,,,1],[,1,,1,1,1,,1,,,1,1,1,,,1,,,1,,1,,,1],[,,1,,,,,,,,,1,,1,,,,,1,,1],[,1,1,,,,,,,,1,1,1,,,,,,,,1,,,,,1],[,,,,,,,,1,,,,,1,,,1]],[,[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,1,1,,,1,1,1,1,1,1,1,1,,,,,,,,,1,1],[,,,,,,,,1,,,,1,,1,,1],[,1,,,1,1,,1,,,,1,,,,,,,,1],[,1,,1,,1,,,,1,1,,1,,1,,,,1,1,1,1,1,,,1],,[,1,,,,,,,,1,,,1,1,,,1,,1,1,,1,,1],[,1,,,1,,,,,,,,1,,,,,,,1],[1,1,,,,,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,,1,1,1],,[,1,,,,,,1,,1,,1,1,1,1,1,,,1,,1,1,,,,1],[,1,1,,,1,,1,,1,,,1,1,1,1,,,1,,,1,,,,1],[,1,1,1,1,1,,1,1,1,,1,1,1,1,1,1,1,1,1,1,,,,1,,1],[,1,,,1,1,,1,1,,,1,1,,1,1,,1,,1,,1],[1,,1,,,,,1,,1,,1,1,1,1,,,,,1,1,,,,1,1],[,1,1,,,,,1,1,,,1,,1,1,1,1,,,,,,,,,,1],,[,1,1,,,1,,,,1,,1,1,1,1,1,,,,1,,,,1,,1],[,,,1,1,,,1,,,,,1,,1,1,1,,1,1,,,,,,1],[,1,,,,,,,,,,,1,,,,1,,,,,,,1,,1],[,1,1,1,1,1,1,1,,1,1,1,1,1,1,,1,1,1,,1,1,,1,1,1,1],[,1,,,,,,,,,,,,,,,,,,,1],[,1,,,,,,1,,,,,1,,1,,,1,1,,1,1,,1],[,1,,,,,,1,,,,,1,1,,,,,,,,1,,,,1],[,,,,,,,,,,,,,,,,,,1,,,1,,,,,1],[,,,,,,,1,,,,1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,1,,1,,,,,,,1,,,,,,,,1,,,1],[,1,,,,,,,1],[,,,,,,,,,,1],[,1,,,,,,1,1,,,,,,1],,[,1,1,,,,,,1,,,,,1,1,,,,1],[1,,1,,1,,,,,1,,,,,1,,,,,,,,,1,1],[,1,1,,,,,,,,,1,1,1,1,,,,1,,,,,1,,,1],,[,1,1,,1,,,1,1,,,1,,,1,1,1,,1,,1,1,1,,,,1],[,,,,,1,,,,,1,,,1,1,,,1,,1,,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,,1,1,,1,,,,1,,,,,,,,1],[,,,1,,,,,1,,,,,1,,1,,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,,,,,1],[,1,,,,,,1,,,,,,,1,1,1,,,1],[,1,,,,,,,,,,1,1,1,,,,,1,,,1],[,,,,,1,,1,,,,,1,1,1,,1,1,,1,1,1,,,1,1],[1,1,,,,,,,1,,,,,1,1,,,,,,,,,,,1],,[,1],[,,,,,,,,,,,,,,,,,,,,,,,,1],[,,1,,,,,1,,,1,,,,1,,1],[,1,,,,,,,,,1]]]
function ji(e){e=Array.isArray(e)?e:Pi
var t=[]
return e.forEach((function(e,n){var r=String.fromCharCode(n+96).replace("`","")
Array.isArray(e)?t=t.concat(ji(e).map((function(e){return r+e}))):t.push(r)})),t}var Mi=function(e){for(var t=Pi;e.length<3;)e+="`"
for(var n=0;n<=e.length-1;n++)if(!(t=t[e.charCodeAt(n)-96]))return!1
return!0}
i._thisWillBeDeletedDoNotUse=i._thisWillBeDeletedDoNotUse||{},i._thisWillBeDeletedDoNotUse.utils={setDefaultFrameMessenger:cn}
var qi=function(e){C(n,e)
var t=k(n)
function n(e){var r,a,i,s
return I(this,n),(r=t.call(this))._props=function(e){var t,n,r,a=null!==(t=e.nodeName)&&void 0!==t?t:Bi[e.nodeType],o=null!==(n=null!==(r=e.nodeType)&&void 0!==r?r:Li[e.nodeName])&&void 0!==n?n:1
Pt("number"==typeof o,"nodeType has to be a number, got '".concat(o,"'")),Pt("string"==typeof a,"nodeName has to be a string, got '".concat(a,"'"))
var i=null
"input"===(a=a.toLowerCase())&&(i=(e.type||e.attributes&&e.attributes.type||"").toLowerCase(),Ii().includes(i)||(i="text"))
var s=_({},e,{nodeType:o,nodeName:a})
return i&&(s.type=i),delete s.attributes,Object.freeze(s)}(e),r._attrs=(a=e.attributes,i=void 0===a?{}:a,s={htmlFor:"for",className:"class"},Object.keys(i).reduce((function(e,t){var n=i[t]
return Pt("object"!==o(n)||null===n,"expects attributes not to be an object, '".concat(t,"' was")),void 0!==n&&(e[s[t]||t]=null!==n?String(n):null),e}),{})),r}return j(n,[{key:"props",get:function(){return this._props}},{key:"attr",value:function(e){var t
return null!==(t=this._attrs[e])&&void 0!==t?t:null}},{key:"hasAttr",value:function(e){return void 0!==this._attrs[e]}},{key:"attrNames",get:function(){return Object.keys(this._attrs)}}]),n}(St),Li={"#cdata-section":2,"#text":3,"#comment":8,"#document":9,"#document-fragment":11},Bi={}
Object.keys(Li).forEach((function(e){Bi[Li[e]]=e}))
var Hi=qi,Ui={}
B(Ui,{allowedAttr:function(){return $i},arialabelText:function(){return Vi},arialabelledbyText:function(){return cl},getAccessibleRefs:function(){return Cl},getElementUnallowedRoles:function(){return Sl},getExplicitRole:function(){return Yi},getImplicitRole:function(){return bs},getOwnedVirtual:function(){return Fs},getRole:function(){return As},getRoleType:function(){return Al},getRolesByType:function(){return _l},getRolesWithNameFromContents:function(){return Pl},implicitNodes:function(){return Bl},implicitRole:function(){return bs},isAccessibleRef:function(){return Hl},isAriaRoleAllowedOnElement:function(){return kl},isUnsupportedRole:function(){return Wi},isValidRole:function(){return Gi},label:function(){return Ul},labelVirtual:function(){return Aa},lookupTable:function(){return Ll},namedFromContents:function(){return Ns},requiredAttr:function(){return zl},requiredContext:function(){return $l},requiredOwned:function(){return Vl},validateAttr:function(){return Gl},validateAttrValue:function(){return Wl}})
var zi=function(){if(tr.get("globalAriaAttrs"))return tr.get("globalAriaAttrs")
var e=Object.keys(Xa.ariaAttrs).filter((function(e){return Xa.ariaAttrs[e].global}))
return tr.set("globalAriaAttrs",e),e},$i=function(e){var t=Xa.ariaRoles[e],n=S(zi())
return t?(t.allowedAttrs&&n.push.apply(n,S(t.allowedAttrs)),t.requiredAttrs&&n.push.apply(n,S(t.requiredAttrs)),n):n},Vi=function(e){if(!(e instanceof St)){if(1!==e.nodeType)return""
e=nr(e)}return e.attr("aria-label")||""},Wi=function(e){var t=Xa.ariaRoles[e]
return!!t&&!!t.unsupported},Gi=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.allowAbstract,r=t.flagUnsupported,a=void 0!==r&&r,o=Xa.ariaRoles[e],i=Wi(e)
return!(!o||a&&i||!n&&"abstract"===o.type)},Yi=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.fallback,r=t.abstracts,a=t.dpub
if(1!==(e=e instanceof St?e:nr(e)).props.nodeType)return null
var o=(e.attr("role")||"").trim().toLowerCase(),i=n?_i(o):[o],s=i.find((function(e){return!(!a&&"doc-"===e.substr(0,4))&&Gi(e,{allowAbstract:r})}))
return s||null},Qi=function(e){return Object.keys(Xa.htmlElms).filter((function(t){var n=Xa.htmlElms[t]
return n.contentTypes?n.contentTypes.includes(e):!!n.variant&&!(!n.variant.default||!n.variant.default.contentTypes)&&n.variant.default.contentTypes.includes(e)}))},Xi=Ko((function(e){for(var t=[],n=e.rows,r=0,a=n.length;r<a;r++){var o=n[r].cells
t[r]=t[r]||[]
for(var i=0,s=0,l=o.length;s<l;s++)for(var u=0;u<o[s].colSpan;u++){for(var c=o[s].getAttribute("rowspan"),d=0===parseInt(c)||0===o[s].rowspan?n.length:o[s].rowSpan,p=0;p<d;p++){for(t[r+p]=t[r+p]||[];t[r+p][i];)i++
t[r+p][i]=o[s]}i++}}return t})),Ki=Ko((function(e,t){var n,r
for(t||(t=Xi(Qr(e,"table"))),n=0;n<t.length;n++)if(t[n]&&-1!==(r=t[n].indexOf(e)))return{x:r,y:n}})),Ji=function(e){var t=e.getAttribute("scope"),r=e.getAttribute("role")
if(e instanceof n.Element==0||-1===["TD","TH"].indexOf(e.nodeName.toUpperCase()))throw new TypeError("Expected TD or TH element")
if("columnheader"===r)return"col"
if("rowheader"===r)return"row"
if("col"===t||"row"===t)return t
if("TH"!==e.nodeName.toUpperCase())return!1
var a=Xi(Qr(e,"table")),o=Ki(e,a)
return a[o.y].reduce((function(e,t){return e&&"TH"===t.nodeName.toUpperCase()}),!0)?"col":a.map((function(e){return e[o.x]})).reduce((function(e,t){return e&&t&&"TH"===t.nodeName.toUpperCase()}),!0)?"row":"auto"},Zi=function(e){return-1!==["col","auto"].indexOf(Ji(e))},es=function(e){return["row","auto"].includes(Ji(e))},ts=Qi("sectioning").map((function(e){return"".concat(e,":not([role])")})).join(", ")+" , main:not([role]), [role=article], [role=complementary], [role=main], [role=navigation], [role=region]"
function ns(e){var t=ba(cl(e)),n=ba(Vi(e))
return!(!t&&!n)}var rs={a:function(e){return e.hasAttr("href")?"link":null},area:function(e){return e.hasAttr("href")?"link":null},article:"article",aside:"complementary",body:"document",button:"button",datalist:"listbox",dd:"definition",dfn:"term",details:"group",dialog:"dialog",dt:"term",fieldset:"group",figure:"figure",footer:function(e){return xr(e,ts)?null:"contentinfo"},form:function(e){return ns(e)?"form":null},h1:"heading",h2:"heading",h3:"heading",h4:"heading",h5:"heading",h6:"heading",header:function(e){return xr(e,ts)?null:"banner"},hr:"separator",img:function(e){var t=e.hasAttr("alt")&&!e.attr("alt"),n=zi().find((function(t){return e.hasAttr(t)}))
return!t||n||Ia(e)?"img":"presentation"},input:function(e){var t
if(e.hasAttr("list")){var n=Ea(e.actualNode,"list").filter((function(e){return!!e}))[0]
t=n&&"datalist"===n.nodeName.toLowerCase()}switch(e.props.type){case"checkbox":return"checkbox"
case"number":return"spinbutton"
case"radio":return"radio"
case"range":return"slider"
case"search":return t?"combobox":"searchbox"
case"button":case"image":case"reset":case"submit":return"button"
case"text":case"tel":case"url":case"email":case"":return t?"combobox":"textbox"
default:return"textbox"}},li:"listitem",main:"main",math:"math",menu:"list",nav:"navigation",ol:"list",optgroup:"group",option:"option",output:"status",progress:"progressbar",section:function(e){return ns(e)?"region":null},select:function(e){return e.hasAttr("multiple")||parseInt(e.attr("size"))>1?"listbox":"combobox"},summary:"button",table:"table",tbody:"rowgroup",td:function(e){var t=xr(e,"table"),n=Yi(t)
return["grid","treegrid"].includes(n)?"gridcell":"cell"},textarea:"textbox",tfoot:"rowgroup",th:function(e){return Zi(e.actualNode)?"columnheader":es(e.actualNode)?"rowheader":void 0},thead:"rowgroup",tr:"row",ul:"list"},as=function(e,t){var n=o(t)
if(Array.isArray(t)&&void 0!==e)return t.includes(e)
if("function"===n)return!!t(e)
if(null!=e){if(t instanceof RegExp)return t.test(e)
if(/^\/.*\/$/.test(t)){var r=t.substring(1,t.length-1)
return new RegExp(r).test(e)}}return t===e},os=function(e,t){return as(!!ll(e),t)},is=function(e,t){if("object"!==o(t)||Array.isArray(t)||t instanceof RegExp)throw new Error("Expect matcher to be an object")
return Object.keys(t).every((function(n){return as(e(n),t[n])}))},ss=function(e,t){return e instanceof St||(e=nr(e)),is((function(t){return e.attr(t)}),t)},ls=function(e,t){return!!t(e)},us=function(e,t){return as(Yi(e),t)},cs=function(e,t){return as(bs(e),t)},ds=function(e,t){return e instanceof St||(e=nr(e)),as(e.props.nodeName,t)},ps=function(e,t){return e instanceof St||(e=nr(e)),is((function(t){return e.props[t]}),t)},fs=function(e,t){return as(As(e),t)},hs={hasAccessibleName:os,attributes:ss,condition:ls,explicitRole:us,implicitRole:cs,nodeName:ds,properties:ps,semanticRole:fs},ms=function e(t,n){return t instanceof St||(t=nr(t)),Array.isArray(n)?n.some((function(n){return e(t,n)})):"string"==typeof n?Dr(t,n):Object.keys(n).every((function(e){if(!hs[e])throw new Error('Unknown matcher type "'.concat(e,'"'))
var r=hs[e],a=n[e]
return r(t,a)}))},gs=function(e,t){return ms(e,t)}
gs.hasAccessibleName=os,gs.attributes=ss,gs.condition=ls,gs.explicitRole=us,gs.fromDefinition=ms,gs.fromFunction=is,gs.fromPrimative=as,gs.implicitRole=cs,gs.nodeName=ds,gs.properties=ps,gs.semanticRole=fs
var vs=gs,ys=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.noMatchAccessibleName,r=void 0!==n&&n,a=Xa.htmlElms[e.props.nodeName]
if(!a)return{}
if(!a.variant)return a
var o=a.variant,i=R(a,c)
for(var s in o)if(o.hasOwnProperty(s)&&"default"!==s){for(var l=o[s],u=l.matches,p=R(l,d),f=Array.isArray(u)?u:[u],h=0;h<f.length&&r;h++)if(f[h].hasOwnProperty("hasAccessibleName"))return a
if(vs(e,u))for(var m in p)p.hasOwnProperty(m)&&(i[m]=p[m])}for(var g in o.default)o.default.hasOwnProperty(g)&&void 0===i[g]&&(i[g]=o.default[g])
return i},bs=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.chromium,r=e instanceof St?e:nr(e)
if(e=r.actualNode,!r)throw new ReferenceError("Cannot get implicit role of a node outside the current scope.")
var a=r.props.nodeName,o=rs[a]
if(!o&&n){var i=ys(r),s=i.chromiumRole
return s||null}return"function"==typeof o?o(r):o||null},ws={td:["tr"],th:["tr"],tr:["thead","tbody","tfoot","table"],thead:["table"],tbody:["table"],tfoot:["table"],li:["ol","ul"],dt:["dl","div"],dd:["dl","div"],div:["dl"]}
function Ds(e,t){var n=ws[e.props.nodeName]
if(!n)return null
if(!e.parent)throw new ReferenceError("Cannot determine role presentational inheritance of a required parent outside the current scope.")
if(!n.includes(e.parent.props.nodeName))return null
var r=Yi(e.parent,t)
return["none","presentation"].includes(r)&&!Es(e.parent)?r:r?null:Ds(e.parent,t)}function xs(e,t){var n=t.chromium,r=R(t,p),a=bs(e,{chromium:n})
return a?Ds(e,r)||a:null}function Es(e){return zi().some((function(t){return e.hasAttr(t)}))||Ia(e)}function Cs(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.noImplicit,r=R(t,f),a=e instanceof St?e:nr(e)
if(1!==a.props.nodeType)return null
var o=Yi(a,r)
return o?["presentation","none"].includes(o)&&Es(a)?n?null:xs(a,r):o:n?null:xs(a,r)}var As=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.noPresentational,r=R(t,h),a=Cs(e,r)
return n&&["presentation","none"].includes(a)?null:a},ks=["iframe"],Ts=function(e){var t=e instanceof St?e:nr(e)
return 1===t.props.nodeType&&e.hasAttr("title")?!gs(t,ks)&&["none","presentation"].includes(As(t))?"":t.attr("title"):""},Ns=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.strict
if(1!==(e=e instanceof St?e:nr(e)).props.nodeType)return!1
var r=As(e),a=Xa.ariaRoles[r]
return!(!a||!a.nameFromContent)||!n&&(!a||["presentation","none"].includes(r))},Fs=function(e){var t=e.actualNode,n=e.children
if(!n)throw new Error("getOwnedVirtual requires a virtual node")
if(e.hasAttr("aria-owns")){var r=Ea(t,"aria-owns").filter((function(e){return!!e})).map((function(e){return i.utils.getNodeFromTree(e)}))
return[].concat(S(n),S(r))}return S(n)},Rs=Qi("phrasing").concat(["#text"])
function Ss(e,t,n){var r=t.props.nodeName,a=ll(t,n)
return a?(Rs.includes(r)||(" "!==a[0]&&(a+=" "),e&&" "!==e[e.length-1]&&(a=" "+a)),e+a):e}var Os=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=ll.alreadyProcessed
t.startNode=t.startNode||e
var r=t,a=r.strict,o=r.inControlContext,i=r.inLabelledByContext,s=ys(e,{noMatchAccessibleName:!0}),l=s.contentTypes
if(n(e,t)||1!==e.props.nodeType||null!=l&&l.includes("embedded"))return""
if(!Ns(e,{strict:a})&&!t.subtreeDescendant)return""
if(!a){var u=!o&&!i
t=_({subtreeDescendant:u},t)}return Fs(e).reduce((function(e,n){return Ss(e,n,t)}),"")}
function _s(e){if(!e.attr("id"))return[]
if(!e.actualNode)throw new TypeError("Cannot resolve explicit label reference for non-DOM nodes")
return Gr({elm:"label",attr:"for",value:e.attr("id"),context:e.actualNode})}var Is=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=ll.alreadyProcessed
if(t.inControlContext||t.inLabelledByContext||n(e,t))return""
t.startNode||(t.startNode=e)
var r,a=_({inControlContext:!0},t),o=_s(e),i=xr(e,"label")
return i?(r=[].concat(S(o),[i.actualNode])).sort(Jo):r=o,r.map((function(e){return ul(e,a)})).filter((function(e){return""!==e})).join(" ")},Ps={submit:"Submit",image:"Submit",reset:"Reset",button:""}
function js(e,t){return t.attr(e)||""}function Ms(e,t,n){var r=t.actualNode,a=[e=e.toLowerCase(),r.nodeName.toLowerCase()].join(","),o=r.querySelector(a)
return o&&o.nodeName.toLowerCase()===e?ul(o,n):""}var qs={valueText:function(e){return e.actualNode.value||""},buttonDefaultText:function(e){var t=e.actualNode
return Ps[t.type]||""},tableCaptionText:Ms.bind(null,"caption"),figureText:Ms.bind(null,"figcaption"),svgTitleText:Ms.bind(null,"title"),fieldsetLegendText:Ms.bind(null,"legend"),altText:js.bind(null,"alt"),tableSummaryText:js.bind(null,"summary"),titleText:Ts,subtreeText:Os,labelText:Is,singleSpace:function(){return" "},placeholderText:js.bind(null,"placeholder")}
function Ls(e){return(ys(e,{noMatchAccessibleName:!0}).namingMethods||[]).map((function(e){return qs[e]}))}var Bs=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.actualNode
if(1!==e.props.nodeType||["presentation","none"].includes(As(e)))return""
var r=Ls(e),a=r.reduce((function(n,r){return n||r(e,t)}),"")
return t.debug&&i.log(a||"{empty-value}",n,t),a},Hs={accessibleNameFromFieldValue:["combobox","listbox","progressbar"]},Us=["button","checkbox","color","file","hidden","image","password","radio","reset","submit"],zs=function(e){var t=(e=e instanceof St?e:nr(e)).props.nodeName
return"textarea"===t||"input"===t&&!Us.includes((e.attr("type")||"").toLowerCase())},$s=function(e){return"select"===(e=e instanceof St?e:nr(e)).props.nodeName},Vs=function(e){return"textbox"===Yi(e)},Ws=function(e){return"listbox"===Yi(e)},Gs=function(e){return"combobox"===Yi(e)},Ys=["progressbar","scrollbar","slider","spinbutton"],Qs=function(e){var t=Yi(e)
return Ys.includes(t)},Xs=["textbox","progressbar","scrollbar","slider","spinbutton","combobox","listbox"],Ks={nativeTextboxValue:function(e){var t=e instanceof St?e:nr(e)
return zs(t)&&t.props.value||""},nativeSelectValue:function(e){var t=e instanceof St?e:nr(e)
if(!$s(t))return""
var n=Ci(t,"option"),r=n.filter((function(e){return e.props.selected}))
return r.length||r.push(n[0]),r.map((function(e){return Ca(e)})).join(" ")||""},ariaTextboxValue:function(e){var t=e instanceof St?e:nr(e),n=t.actualNode
return Vs(t)?!n||n&&!Sa(n)?Ca(t,!0):n.textContent:""},ariaListboxValue:Js,ariaComboboxValue:function(e,t){var n=e instanceof St?e:nr(e)
if(!Gs(n))return""
var r=Fs(n).filter((function(e){return"listbox"===As(e)}))[0]
return r?Js(r,t):""},ariaRangeValue:function(e){var t=e instanceof St?e:nr(e)
if(!Qs(t)||!t.hasAttr("aria-valuenow"))return""
var n=+t.attr("aria-valuenow")
return isNaN(n)?"0":String(n)}}
function Js(e,t){var n=e instanceof St?e:nr(e)
if(!Ws(n))return""
var r=Fs(n).filter((function(e){return"option"===As(e)&&"true"===e.attr("aria-selected")}))
return 0===r.length?"":ll(r[0],t)}var Zs=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.actualNode,r=Hs.accessibleNameFromFieldValue||[],a=As(e)
if(t.startNode===e||!Xs.includes(a)||r.includes(a))return""
var o=Object.keys(Ks).map((function(e){return Ks[e]})),i=o.reduce((function(n,r){return n||r(e,t)}),"")
return t.debug&&Ft(i||"{empty-value}",n,t),i},el=H(xt()),tl=function(e,t){var n=t.emoji,r=t.nonBmp,a=t.punctuations
return n?el.default().test(e):r?/[\u1D00-\u1D7F\u1D80-\u1DBF\u1DC0-\u1DFF\u20A0-\u20CF\u20D0-\u20FF\u2100-\u214F\u2150-\u218F\u2190-\u21FF\u2200-\u22FF\u2300-\u23FF\u2400-\u243F\u2440-\u245F\u2460-\u24FF\u2500-\u257F\u2580-\u259F\u25A0-\u25FF\u2600-\u26FF\u2700-\u27BF\uE000-\uF8FF]/g.test(e)||/[\uDB80-\uDBBF][\uDC00-\uDFFF]/g.test(e):!!a&&/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&\xa3\xa2\xa5\xa7\u20ac()*+,\-.\/:;<=>?@\[\]^_`{|}~\xb1]/g.test(e)},nl=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.15,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,o=e.actualNode.nodeValue.trim()
if(!ba(o)||tl(o,{emoji:!0,nonBmp:!0}))return!1
tr.get("canvasContext")||tr.set("canvasContext",a.createElement("canvas").getContext("2d"))
var i=tr.get("canvasContext"),s=i.canvas
tr.get("fonts")||tr.set("fonts",{})
var l=tr.get("fonts"),u=n.getComputedStyle(e.parent.actualNode),c=u.getPropertyValue("font-family")
l[c]||(l[c]={occurances:0,numLigatures:0})
var d=l[c]
if(d.occurances>=r){if(d.numLigatures/d.occurances==1)return!0
if(0===d.numLigatures)return!1}d.occurances++
var p=30,f="".concat(p,"px ").concat(c)
i.font=f
var h=o.charAt(0),m=i.measureText(h).width
if(m<30){var g=30/m
m*=g,f="".concat(p*=g,"px ").concat(c)}s.width=m,s.height=p,i.font=f,i.textAlign="left",i.textBaseline="top",i.fillText(h,0,0)
var v=new Uint32Array(i.getImageData(0,0,m,p).data.buffer)
if(!v.some((function(e){return e})))return d.numLigatures++,!0
i.clearRect(0,0,m,p),i.fillText(o,0,0)
var y=new Uint32Array(i.getImageData(0,0,m,p).data.buffer),b=v.reduce((function(e,t,n){return 0===t&&0===y[n]||0!==t&&0!==y[n]?e:++e}),0),w=o.split("").reduce((function(e,t){return e+i.measureText(t).width}),0),D=i.measureText(o).width,x=b/v.length,E=1-D/w
return x>=t&&E>=t&&(d.numLigatures++,!0)}
function rl(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.actualNode
if(t=sl(e,t),ol(e,t))return""
if(il(e,t))return""
var r=[cl,Vi,Bs,Zs,Os,al,Ts],a=r.reduce((function(n,r){return t.startNode===e&&(n=ba(n)),""!==n?n:r(e,t)}),"")
return t.debug&&i.log(a||"{empty-value}",n,t),a}function al(e){return 3!==e.props.nodeType?"":e.props.nodeValue}function ol(e,t){var n=e.actualNode
return!!n&&1===n.nodeType&&!t.includeHidden&&!sa(n,!0)}function il(e,t){var n=t.ignoreIconLigature,r=t.pixelThreshold,a=t.occuranceThreshold
return!(3!==e.props.nodeType||!n)&&nl(e,r,a)}function sl(e,t){var n=e.actualNode
return t.startNode||(t=_({startNode:e},t)),n?(1===n.nodeType&&t.inLabelledByContext&&void 0===t.includeHidden&&(t=_({includeHidden:!sa(n,!0)},t)),t):t}rl.alreadyProcessed=function(e,t){return t.processed=t.processed||[],!!t.processed.includes(e)||(t.processed.push(e),!1)}
var ll=rl,ul=function(e,t){var n=nr(e)
return ll(n,t)},cl=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
if(!(e instanceof St)){if(1!==e.nodeType)return""
e=nr(e)}if(1!==e.props.nodeType||t.inLabelledByContext||t.inControlContext||!e.attr("aria-labelledby"))return""
var n=Ea(e,"aria-labelledby").filter((function(e){return e}))
return n.reduce((function(n,r){var a=ul(r,_({inLabelledByContext:!0,startNode:t.startNode||e},t))
return n?"".concat(n," ").concat(a):a}),"")},dl={}
B(dl,{accessibleText:function(){return ul},accessibleTextVirtual:function(){return ll},autocomplete:function(){return ml},formControlValue:function(){return Zs},formControlValueMethods:function(){return Ks},hasUnicode:function(){return tl},isHumanInterpretable:function(){return hl},isIconLigature:function(){return nl},isValidAutocomplete:function(){return gl},label:function(){return bl},labelText:function(){return Is},labelVirtual:function(){return yl},nativeElementType:function(){return wl},nativeTextAlternative:function(){return Bs},nativeTextMethods:function(){return qs},removeUnicode:function(){return fl},sanitize:function(){return ba},subtreeText:function(){return Os},titleText:function(){return Ts},unsupported:function(){return Hs},visible:function(){return vl},visibleTextNodes:function(){return Dl},visibleVirtual:function(){return Ca}})
var pl=H(xt()),fl=function(e,t){var n=t.emoji,r=t.nonBmp,a=t.punctuations
return n&&(e=e.replace(pl.default(),"")),r&&(e=(e=e.replace(/[\u1D00-\u1D7F\u1D80-\u1DBF\u1DC0-\u1DFF\u20A0-\u20CF\u20D0-\u20FF\u2100-\u214F\u2150-\u218F\u2190-\u21FF\u2200-\u22FF\u2300-\u23FF\u2400-\u243F\u2440-\u245F\u2460-\u24FF\u2500-\u257F\u2580-\u259F\u25A0-\u25FF\u2600-\u26FF\u2700-\u27BF\uE000-\uF8FF]/g,"")).replace(/[\uDB80-\uDBBF][\uDC00-\uDFFF]/g,"")),a&&(e=e.replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&\xa3\xa2\xa5\xa7\u20ac()*+,\-.\/:;<=>?@\[\]^_`{|}~\xb1]/g,"")),e},hl=function(e){if(!e.length)return 0
if(["x","i"].includes(e))return 0
var t=fl(e,{emoji:!0,nonBmp:!0,punctuations:!0})
return ba(t)?1:0},ml={stateTerms:["on","off"],standaloneTerms:["name","honorific-prefix","given-name","additional-name","family-name","honorific-suffix","nickname","username","new-password","current-password","organization-title","organization","street-address","address-line1","address-line2","address-line3","address-level4","address-level3","address-level2","address-level1","country","country-name","postal-code","cc-name","cc-given-name","cc-additional-name","cc-family-name","cc-number","cc-exp","cc-exp-month","cc-exp-year","cc-csc","cc-type","transaction-currency","transaction-amount","language","bday","bday-day","bday-month","bday-year","sex","url","photo","one-time-code"],qualifiers:["home","work","mobile","fax","pager"],qualifiedTerms:["tel","tel-country-code","tel-national","tel-area-code","tel-local","tel-local-prefix","tel-local-suffix","tel-extension","email","impp"],locations:["billing","shipping"]},gl=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.looseTyped,r=void 0!==n&&n,a=t.stateTerms,o=void 0===a?[]:a,i=t.locations,s=void 0===i?[]:i,l=t.qualifiers,u=void 0===l?[]:l,c=t.standaloneTerms,d=void 0===c?[]:c,p=t.qualifiedTerms,f=void 0===p?[]:p
if(e=e.toLowerCase().trim(),(o=o.concat(ml.stateTerms)).includes(e)||""===e)return!0
u=u.concat(ml.qualifiers),s=s.concat(ml.locations),d=d.concat(ml.standaloneTerms),f=f.concat(ml.qualifiedTerms)
var h=e.split(/\s+/g)
if(!r&&(h[0].length>8&&"section-"===h[0].substr(0,8)&&h.shift(),s.includes(h[0])&&h.shift(),u.includes(h[0])&&(h.shift(),d=[]),1!==h.length))return!1
var m=h[h.length-1]
return d.includes(m)||f.includes(m)},vl=function(e,t,n){return e=nr(e),Ca(e,t,n)},yl=function(e){var t,n
if(n=Aa(e))return n
if(e.attr("id")){if(!e.actualNode)throw new TypeError("Cannot resolve explicit label reference for non-DOM nodes")
var r=Cn(e.attr("id"))
if(n=(t=Wr(e.actualNode).querySelector('label[for="'+r+'"]'))&&vl(t,!0))return n}return(n=(t=xr(e,"label"))&&Ca(t,!0))||null},bl=function(e){return e=nr(e),yl(e)},wl=[{matches:[{nodeName:"textarea"},{nodeName:"input",properties:{type:["text","password","search","tel","email","url"]}}],namingMethods:"labelText"},{matches:{nodeName:"input",properties:{type:["button","submit","reset"]}},namingMethods:["valueText","titleText","buttonDefaultText"]},{matches:{nodeName:"input",properties:{type:"image"}},namingMethods:["altText","valueText","labelText","titleText","buttonDefaultText"]},{matches:"button",namingMethods:"subtreeText"},{matches:"fieldset",namingMethods:"fieldsetLegendText"},{matches:"OUTPUT",namingMethods:"subtreeText"},{matches:[{nodeName:"select"},{nodeName:"input",properties:{type:/^(?!text|password|search|tel|email|url|button|submit|reset)/}}],namingMethods:"labelText"},{matches:"summary",namingMethods:"subtreeText"},{matches:"figure",namingMethods:["figureText","titleText"]},{matches:"img",namingMethods:"altText"},{matches:"table",namingMethods:["tableCaptionText","tableSummaryText"]},{matches:["hr","br"],namingMethods:["titleText","singleSpace"]}],Dl=function e(t){var n=sa(t.actualNode),r=[]
return t.children.forEach((function(t){3===t.actualNode.nodeType?n&&r.push(t):r=r.concat(e(t))})),r},xl=/^idrefs?$/
function El(e,t,n){if(e.hasAttribute){if("LABEL"===e.nodeName.toUpperCase()&&e.hasAttribute("for")){var r=e.getAttribute("for")
t[r]=t[r]||[],t[r].push(e)}for(var a=0;a<n.length;++a){var o=n[a],i=ba(e.getAttribute(o)||"")
if(i)for(var s=_i(i),l=0;l<s.length;++l)t[s[l]]=t[s[l]]||[],t[s[l]].push(e)}}for(var u=0;u<e.childNodes.length;u++)1===e.childNodes[u].nodeType&&El(e.childNodes[u],t,n)}var Cl=function(e){e=e.actualNode||e
var t=Wr(e)
t=t.documentElement||t
var n=tr.get("idRefsByRoot")
n||(n=new WeakMap,tr.set("idRefsByRoot",n))
var r=n.get(t)
return r||(r={},n.set(t,r),El(t,r,Object.keys(Xa.ariaAttrs).filter((function(e){var t=Xa.ariaAttrs[e].type
return xl.test(t)})))),r[e.id]||[]},Al=function(e){var t=Xa.ariaRoles[e]
return t?t.type:null},kl=function(e,t){var n=e instanceof St?e:nr(e),r=bs(n),a=ys(n)
return Array.isArray(a.allowedRoles)?a.allowedRoles.includes(t):t!==r&&!!a.allowedRoles},Tl=["doc-backlink","doc-biblioentry","doc-biblioref","doc-cover","doc-endnote","doc-glossref","doc-noteref"],Nl={header:"banner",footer:"contentinfo"}
function Fl(e){var t=[]
if(!e)return t
if(e.hasAttr("role")){var n=_i(e.attr("role").toLowerCase())
t=t.concat(n)}return t.filter((function(e){return Gi(e)}))}function Rl(e,t,n,r){return!(!n||e!==r)||(!Tl.includes(e)||Al(e)===r)&&kl(t,e)}var Sl=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=e instanceof St?e:nr(e)
if(!Wo(n))return[]
var r=n.props.nodeName,a=bs(n)||Nl[r],o=Fl(n)
return o.filter((function(e){return!Rl(e,n,t,a)}))},Ol=function(e){return Object.keys(Xa.ariaRoles).filter((function(t){return Xa.ariaRoles[t].type===e}))},_l=function(e){return Ol(e)},Il=function(){if(tr.get("ariaRolesNameFromContent"))return tr.get("ariaRolesNameFromContent")
var e=Object.keys(Xa.ariaRoles).filter((function(e){return Xa.ariaRoles[e].nameFromContent}))
return tr.set("ariaRolesNameFromContent",e),e},Pl=function(){return Il()},jl=function(e){return null===e},Ml=function(e){return null!==e},ql={attributes:{"aria-activedescendant":{type:"idref",allowEmpty:!0,unsupported:!1},"aria-atomic":{type:"boolean",values:["true","false"],unsupported:!1},"aria-autocomplete":{type:"nmtoken",values:["inline","list","both","none"],unsupported:!1},"aria-busy":{type:"boolean",values:["true","false"],unsupported:!1},"aria-checked":{type:"nmtoken",values:["true","false","mixed","undefined"],unsupported:!1},"aria-colcount":{type:"int",unsupported:!1},"aria-colindex":{type:"int",unsupported:!1},"aria-colspan":{type:"int",unsupported:!1},"aria-controls":{type:"idrefs",allowEmpty:!0,unsupported:!1},"aria-current":{type:"nmtoken",allowEmpty:!0,values:["page","step","location","date","time","true","false"],unsupported:!1},"aria-describedby":{type:"idrefs",allowEmpty:!0,unsupported:!1},"aria-describedat":{unsupported:!0,unstandardized:!0},"aria-details":{type:"idref",allowEmpty:!0,unsupported:!1},"aria-disabled":{type:"boolean",values:["true","false"],unsupported:!1},"aria-dropeffect":{type:"nmtokens",values:["copy","move","reference","execute","popup","none"],unsupported:!1},"aria-errormessage":{type:"idref",allowEmpty:!0,unsupported:!1},"aria-expanded":{type:"nmtoken",values:["true","false","undefined"],unsupported:!1},"aria-flowto":{type:"idrefs",allowEmpty:!0,unsupported:!1},"aria-grabbed":{type:"nmtoken",values:["true","false","undefined"],unsupported:!1},"aria-haspopup":{type:"nmtoken",allowEmpty:!0,values:["true","false","menu","listbox","tree","grid","dialog"],unsupported:!1},"aria-hidden":{type:"boolean",values:["true","false"],unsupported:!1},"aria-invalid":{type:"nmtoken",allowEmpty:!0,values:["true","false","spelling","grammar"],unsupported:!1},"aria-keyshortcuts":{type:"string",allowEmpty:!0,unsupported:!1},"aria-label":{type:"string",allowEmpty:!0,unsupported:!1},"aria-labelledby":{type:"idrefs",allowEmpty:!0,unsupported:!1},"aria-level":{type:"int",unsupported:!1},"aria-live":{type:"nmtoken",values:["off","polite","assertive"],unsupported:!1},"aria-modal":{type:"boolean",values:["true","false"],unsupported:!1},"aria-multiline":{type:"boolean",values:["true","false"],unsupported:!1},"aria-multiselectable":{type:"boolean",values:["true","false"],unsupported:!1},"aria-orientation":{type:"nmtoken",values:["horizontal","vertical"],unsupported:!1},"aria-owns":{type:"idrefs",allowEmpty:!0,unsupported:!1},"aria-placeholder":{type:"string",allowEmpty:!0,unsupported:!1},"aria-posinset":{type:"int",unsupported:!1},"aria-pressed":{type:"nmtoken",values:["true","false","mixed","undefined"],unsupported:!1},"aria-readonly":{type:"boolean",values:["true","false"],unsupported:!1},"aria-relevant":{type:"nmtokens",values:["additions","removals","text","all"],unsupported:!1},"aria-required":{type:"boolean",values:["true","false"],unsupported:!1},"aria-roledescription":{type:"string",allowEmpty:!0,unsupported:!1},"aria-rowcount":{type:"int",unsupported:!1},"aria-rowindex":{type:"int",unsupported:!1},"aria-rowspan":{type:"int",unsupported:!1},"aria-selected":{type:"nmtoken",values:["true","false","undefined"],unsupported:!1},"aria-setsize":{type:"int",unsupported:!1},"aria-sort":{type:"nmtoken",values:["ascending","descending","other","none"],unsupported:!1},"aria-valuemax":{type:"decimal",unsupported:!1},"aria-valuemin":{type:"decimal",unsupported:!1},"aria-valuenow":{type:"decimal",unsupported:!1},"aria-valuetext":{type:"string",unsupported:!1}},globalAttributes:["aria-atomic","aria-busy","aria-controls","aria-current","aria-describedby","aria-details","aria-disabled","aria-dropeffect","aria-flowto","aria-grabbed","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-live","aria-owns","aria-relevant","aria-roledescription"]}
ql.role={alert:{type:"widget",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},alertdialog:{type:"widget",attributes:{allowed:["aria-expanded","aria-modal","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["dialog","section"]},application:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage","aria-activedescendant"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["article","audio","embed","iframe","object","section","svg","video"]},article:{type:"structure",attributes:{allowed:["aria-expanded","aria-posinset","aria-setsize","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["article"],unsupported:!1},banner:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["header"],unsupported:!1,allowedElements:["section"]},button:{type:"widget",attributes:{allowed:["aria-expanded","aria-pressed","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,implicit:["button",'input[type="button"]','input[type="image"]','input[type="reset"]','input[type="submit"]',"summary"],unsupported:!1,allowedElements:[{nodeName:"a",attributes:{href:Ml}}]},cell:{type:"structure",attributes:{allowed:["aria-colindex","aria-colspan","aria-rowindex","aria-rowspan","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["row"],implicit:["td","th"],unsupported:!1},checkbox:{type:"widget",attributes:{allowed:["aria-checked","aria-required","aria-readonly","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,implicit:['input[type="checkbox"]'],unsupported:!1,allowedElements:["button"]},columnheader:{type:"structure",attributes:{allowed:["aria-colindex","aria-colspan","aria-expanded","aria-rowindex","aria-rowspan","aria-required","aria-readonly","aria-selected","aria-sort","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["row"],implicit:["th"],unsupported:!1},combobox:{type:"composite",attributes:{allowed:["aria-autocomplete","aria-required","aria-activedescendant","aria-orientation","aria-errormessage"],required:["aria-expanded"]},owned:{all:["listbox","tree","grid","dialog","textbox"]},nameFrom:["author"],context:null,unsupported:!1,allowedElements:[{nodeName:"input",properties:{type:["text","search","tel","url","email"]}}]},command:{nameFrom:["author"],type:"abstract",unsupported:!1},complementary:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["aside"],unsupported:!1,allowedElements:["section"]},composite:{nameFrom:["author"],type:"abstract",unsupported:!1},contentinfo:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["footer"],unsupported:!1,allowedElements:["section"]},definition:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["dd","dfn"],unsupported:!1},dialog:{type:"widget",attributes:{allowed:["aria-expanded","aria-modal","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["dialog"],unsupported:!1,allowedElements:["section"]},directory:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,unsupported:!1,allowedElements:["ol","ul"]},document:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["body"],unsupported:!1,allowedElements:["article","embed","iframe","object","section","svg"]},"doc-abstract":{type:"section",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-acknowledgments":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-afterword":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-appendix":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-backlink":{type:"link",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,unsupported:!1,allowedElements:[{nodeName:"a",attributes:{href:Ml}}]},"doc-biblioentry":{type:"listitem",attributes:{allowed:["aria-expanded","aria-level","aria-posinset","aria-setsize","aria-errormessage"]},owned:null,nameFrom:["author"],context:["doc-bibliography"],unsupported:!1,allowedElements:["li"]},"doc-bibliography":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:{one:["doc-biblioentry"]},nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-biblioref":{type:"link",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,unsupported:!1,allowedElements:[{nodeName:"a",attributes:{href:Ml}}]},"doc-chapter":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-colophon":{type:"section",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-conclusion":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-cover":{type:"img",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1},"doc-credit":{type:"section",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-credits":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-dedication":{type:"section",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-endnote":{type:"listitem",attributes:{allowed:["aria-expanded","aria-level","aria-posinset","aria-setsize","aria-errormessage"]},owned:null,namefrom:["author"],context:["doc-endnotes"],unsupported:!1,allowedElements:["li"]},"doc-endnotes":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:{one:["doc-endnote"]},namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-epigraph":{type:"section",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1},"doc-epilogue":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-errata":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-example":{type:"section",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["aside","section"]},"doc-footnote":{type:"section",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["aside","footer","header"]},"doc-foreword":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-glossary":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:["term","definition"],namefrom:["author"],context:null,unsupported:!1,allowedElements:["dl"]},"doc-glossref":{type:"link",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author","contents"],context:null,unsupported:!1,allowedElements:[{nodeName:"a",attributes:{href:Ml}}]},"doc-index":{type:"navigation",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["nav","section"]},"doc-introduction":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-noteref":{type:"link",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author","contents"],context:null,unsupported:!1,allowedElements:[{nodeName:"a",attributes:{href:Ml}}]},"doc-notice":{type:"note",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-pagebreak":{type:"separator",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["hr"]},"doc-pagelist":{type:"navigation",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["nav","section"]},"doc-part":{type:"landmark",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-preface":{type:"landmark",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-prologue":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-pullquote":{type:"none",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["aside","section"]},"doc-qna":{type:"section",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-subtitle":{type:"sectionhead",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:{nodeName:["h1","h2","h3","h4","h5","h6"]}},"doc-tip":{type:"note",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["aside"]},"doc-toc":{type:"navigation",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["nav","section"]},feed:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:{one:["article"]},nameFrom:["author"],context:null,unsupported:!1,allowedElements:["article","aside","section"]},figure:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,implicit:["figure"],unsupported:!1},form:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["form"],unsupported:!1},grid:{type:"composite",attributes:{allowed:["aria-activedescendant","aria-expanded","aria-colcount","aria-level","aria-multiselectable","aria-readonly","aria-rowcount","aria-errormessage"]},owned:{one:["rowgroup","row"]},nameFrom:["author"],context:null,implicit:["table"],unsupported:!1},gridcell:{type:"widget",attributes:{allowed:["aria-colindex","aria-colspan","aria-expanded","aria-rowindex","aria-rowspan","aria-selected","aria-readonly","aria-required","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["row"],implicit:["td","th"],unsupported:!1},group:{type:"structure",attributes:{allowed:["aria-activedescendant","aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["details","optgroup"],unsupported:!1,allowedElements:["dl","figcaption","fieldset","figure","footer","header","ol","ul"]},heading:{type:"structure",attributes:{required:["aria-level"],allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,implicit:["h1","h2","h3","h4","h5","h6"],unsupported:!1},img:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["img"],unsupported:!1,allowedElements:["embed","iframe","object","svg"]},input:{nameFrom:["author"],type:"abstract",unsupported:!1},landmark:{nameFrom:["author"],type:"abstract",unsupported:!1},link:{type:"widget",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,implicit:["a[href]","area[href]"],unsupported:!1,allowedElements:["button",{nodeName:"input",properties:{type:["image","button"]}}]},list:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:{all:["listitem"]},nameFrom:["author"],context:null,implicit:["ol","ul","dl"],unsupported:!1},listbox:{type:"composite",attributes:{allowed:["aria-activedescendant","aria-multiselectable","aria-readonly","aria-required","aria-expanded","aria-orientation","aria-errormessage"]},owned:{all:["option"]},nameFrom:["author"],context:null,implicit:["select"],unsupported:!1,allowedElements:["ol","ul"]},listitem:{type:"structure",attributes:{allowed:["aria-level","aria-posinset","aria-setsize","aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["list"],implicit:["li","dt"],unsupported:!1},log:{type:"widget",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},main:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["main"],unsupported:!1,allowedElements:["article","section"]},marquee:{type:"widget",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},math:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["math"],unsupported:!1},menu:{type:"composite",attributes:{allowed:["aria-activedescendant","aria-expanded","aria-orientation","aria-errormessage"]},owned:{one:["menuitem","menuitemradio","menuitemcheckbox"]},nameFrom:["author"],context:null,implicit:['menu[type="context"]'],unsupported:!1,allowedElements:["ol","ul"]},menubar:{type:"composite",attributes:{allowed:["aria-activedescendant","aria-expanded","aria-orientation","aria-errormessage"]},owned:{one:["menuitem","menuitemradio","menuitemcheckbox"]},nameFrom:["author"],context:null,unsupported:!1,allowedElements:["ol","ul"]},menuitem:{type:"widget",attributes:{allowed:["aria-posinset","aria-setsize","aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["menu","menubar"],implicit:['menuitem[type="command"]'],unsupported:!1,allowedElements:["button","li",{nodeName:"iput",properties:{type:["image","button"]}},{nodeName:"a",attributes:{href:Ml}}]},menuitemcheckbox:{type:"widget",attributes:{allowed:["aria-checked","aria-posinset","aria-setsize","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["menu","menubar"],implicit:['menuitem[type="checkbox"]'],unsupported:!1,allowedElements:[{nodeName:["button","li"]},{nodeName:"input",properties:{type:["checkbox","image","button"]}},{nodeName:"a",attributes:{href:Ml}}]},menuitemradio:{type:"widget",attributes:{allowed:["aria-checked","aria-selected","aria-posinset","aria-setsize","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["menu","menubar"],implicit:['menuitem[type="radio"]'],unsupported:!1,allowedElements:[{nodeName:["button","li"]},{nodeName:"input",properties:{type:["image","button","radio"]}},{nodeName:"a",attributes:{href:Ml}}]},navigation:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["nav"],unsupported:!1,allowedElements:["section"]},none:{type:"structure",attributes:null,owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:[{nodeName:["article","aside","dl","embed","figcaption","fieldset","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hr","iframe","li","ol","section","ul"]},{nodeName:"img",attributes:{alt:Ml}}]},note:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["aside"]},option:{type:"widget",attributes:{allowed:["aria-selected","aria-posinset","aria-setsize","aria-checked","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["listbox"],implicit:["option"],unsupported:!1,allowedElements:[{nodeName:["button","li"]},{nodeName:"input",properties:{type:["checkbox","button"]}},{nodeName:"a",attributes:{href:Ml}}]},presentation:{type:"structure",attributes:null,owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:[{nodeName:["article","aside","dl","embed","figcaption","fieldset","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hr","iframe","li","ol","section","ul"]},{nodeName:"img",attributes:{alt:Ml}}]},progressbar:{type:"widget",attributes:{allowed:["aria-valuetext","aria-valuenow","aria-valuemax","aria-valuemin","aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["progress"],unsupported:!1},radio:{type:"widget",attributes:{allowed:["aria-selected","aria-posinset","aria-setsize","aria-required","aria-errormessage","aria-checked"]},owned:null,nameFrom:["author","contents"],context:null,implicit:['input[type="radio"]'],unsupported:!1,allowedElements:[{nodeName:["button","li"]},{nodeName:"input",properties:{type:["image","button"]}}]},radiogroup:{type:"composite",attributes:{allowed:["aria-activedescendant","aria-required","aria-expanded","aria-readonly","aria-errormessage","aria-orientation"]},owned:{all:["radio"]},nameFrom:["author"],context:null,unsupported:!1,allowedElements:{nodeName:["ol","ul","fieldset"]}},range:{nameFrom:["author"],type:"abstract",unsupported:!1},region:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["section[aria-label]","section[aria-labelledby]","section[title]"],unsupported:!1,allowedElements:{nodeName:["article","aside"]}},roletype:{type:"abstract",unsupported:!1},row:{type:"structure",attributes:{allowed:["aria-activedescendant","aria-colindex","aria-expanded","aria-level","aria-selected","aria-rowindex","aria-errormessage"]},owned:{one:["cell","columnheader","rowheader","gridcell"]},nameFrom:["author","contents"],context:["rowgroup","grid","treegrid","table"],implicit:["tr"],unsupported:!1},rowgroup:{type:"structure",attributes:{allowed:["aria-activedescendant","aria-expanded","aria-errormessage"]},owned:{all:["row"]},nameFrom:["author","contents"],context:["grid","table","treegrid"],implicit:["tbody","thead","tfoot"],unsupported:!1},rowheader:{type:"structure",attributes:{allowed:["aria-colindex","aria-colspan","aria-expanded","aria-rowindex","aria-rowspan","aria-required","aria-readonly","aria-selected","aria-sort","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["row"],implicit:["th"],unsupported:!1},scrollbar:{type:"widget",attributes:{required:["aria-controls","aria-valuenow"],allowed:["aria-valuetext","aria-orientation","aria-errormessage","aria-valuemax","aria-valuemin"]},owned:null,nameFrom:["author"],context:null,unsupported:!1},search:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:{nodeName:["aside","form","section"]}},searchbox:{type:"widget",attributes:{allowed:["aria-activedescendant","aria-autocomplete","aria-multiline","aria-readonly","aria-required","aria-placeholder","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:['input[type="search"]'],unsupported:!1,allowedElements:{nodeName:"input",properties:{type:"text"}}},section:{nameFrom:["author","contents"],type:"abstract",unsupported:!1},sectionhead:{nameFrom:["author","contents"],type:"abstract",unsupported:!1},select:{nameFrom:["author"],type:"abstract",unsupported:!1},separator:{type:"structure",attributes:{allowed:["aria-expanded","aria-orientation","aria-valuenow","aria-valuemax","aria-valuemin","aria-valuetext","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["hr"],unsupported:!1,allowedElements:["li"]},slider:{type:"widget",attributes:{allowed:["aria-valuetext","aria-orientation","aria-readonly","aria-errormessage","aria-valuemax","aria-valuemin"],required:["aria-valuenow"]},owned:null,nameFrom:["author"],context:null,implicit:['input[type="range"]'],unsupported:!1},spinbutton:{type:"widget",attributes:{allowed:["aria-valuetext","aria-required","aria-readonly","aria-errormessage","aria-valuemax","aria-valuemin"],required:["aria-valuenow"]},owned:null,nameFrom:["author"],context:null,implicit:['input[type="number"]'],unsupported:!1,allowedElements:{nodeName:"input",properties:{type:["text","tel"]}}},status:{type:"widget",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["output"],unsupported:!1,allowedElements:["section"]},structure:{type:"abstract",unsupported:!1},switch:{type:"widget",attributes:{allowed:["aria-errormessage"],required:["aria-checked"]},owned:null,nameFrom:["author","contents"],context:null,unsupported:!1,allowedElements:["button",{nodeName:"input",properties:{type:["checkbox","image","button"]}},{nodeName:"a",attributes:{href:Ml}}]},tab:{type:"widget",attributes:{allowed:["aria-selected","aria-expanded","aria-setsize","aria-posinset","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["tablist"],unsupported:!1,allowedElements:[{nodeName:["button","h1","h2","h3","h4","h5","h6","li"]},{nodeName:"input",properties:{type:"button"}},{nodeName:"a",attributes:{href:Ml}}]},table:{type:"structure",attributes:{allowed:["aria-colcount","aria-rowcount","aria-errormessage"]},owned:{one:["rowgroup","row"]},nameFrom:["author","contents"],context:null,implicit:["table"],unsupported:!1},tablist:{type:"composite",attributes:{allowed:["aria-activedescendant","aria-expanded","aria-level","aria-multiselectable","aria-orientation","aria-errormessage"]},owned:{all:["tab"]},nameFrom:["author"],context:null,unsupported:!1,allowedElements:["ol","ul"]},tabpanel:{type:"widget",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},term:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,implicit:["dt"],unsupported:!1},textbox:{type:"widget",attributes:{allowed:["aria-activedescendant","aria-autocomplete","aria-multiline","aria-readonly","aria-required","aria-placeholder","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:['input[type="text"]','input[type="email"]','input[type="password"]','input[type="tel"]','input[type="url"]',"input:not([type])","textarea"],unsupported:!1},timer:{type:"widget",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1},toolbar:{type:"structure",attributes:{allowed:["aria-activedescendant","aria-expanded","aria-orientation","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:['menu[type="toolbar"]'],unsupported:!1,allowedElements:["ol","ul"]},tooltip:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,unsupported:!1},tree:{type:"composite",attributes:{allowed:["aria-activedescendant","aria-multiselectable","aria-required","aria-expanded","aria-orientation","aria-errormessage"]},owned:{all:["treeitem"]},nameFrom:["author"],context:null,unsupported:!1,allowedElements:["ol","ul"]},treegrid:{type:"composite",attributes:{allowed:["aria-activedescendant","aria-colcount","aria-expanded","aria-level","aria-multiselectable","aria-readonly","aria-required","aria-rowcount","aria-orientation","aria-errormessage"]},owned:{one:["rowgroup","row"]},nameFrom:["author"],context:null,unsupported:!1},treeitem:{type:"widget",attributes:{allowed:["aria-checked","aria-selected","aria-expanded","aria-level","aria-posinset","aria-setsize","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["group","tree"],unsupported:!1,allowedElements:["li",{nodeName:"a",attributes:{href:Ml}}]},widget:{type:"abstract",unsupported:!1},window:{nameFrom:["author"],type:"abstract",unsupported:!1}},ql.implicitHtmlRole=rs,ql.elementsAllowedNoRole=[{nodeName:["base","body","caption","col","colgroup","datalist","dd","details","dt","head","html","keygen","label","legend","main","map","math","meta","meter","noscript","optgroup","param","picture","progress","script","source","style","template","textarea","title","track"]},{nodeName:"area",attributes:{href:Ml}},{nodeName:"input",properties:{type:["color","data","datatime","file","hidden","month","number","password","range","reset","submit","time","week"]}},{nodeName:"link",attributes:{href:Ml}},{nodeName:"menu",attributes:{type:"context"}},{nodeName:"menuitem",attributes:{type:["command","checkbox","radio"]}},{nodeName:"select",condition:function(e){return e instanceof i.AbstractVirtualNode||(e=i.utils.getNodeFromTree(e)),Number(e.attr("size"))>1},properties:{multiple:!0}},{nodeName:["clippath","cursor","defs","desc","feblend","fecolormatrix","fecomponenttransfer","fecomposite","feconvolvematrix","fediffuselighting","fedisplacementmap","fedistantlight","fedropshadow","feflood","fefunca","fefuncb","fefuncg","fefuncr","fegaussianblur","feimage","femerge","femergenode","femorphology","feoffset","fepointlight","fespecularlighting","fespotlight","fetile","feturbulence","filter","hatch","hatchpath","lineargradient","marker","mask","meshgradient","meshpatch","meshrow","metadata","mpath","pattern","radialgradient","solidcolor","stop","switch","view"]}],ql.elementsAllowedAnyRole=[{nodeName:"a",attributes:{href:jl}},{nodeName:"img",attributes:{alt:jl}},{nodeName:["abbr","address","canvas","div","p","pre","blockquote","ins","del","output","span","table","tbody","thead","tfoot","td","em","strong","small","s","cite","q","dfn","abbr","time","code","var","samp","kbd","sub","sup","i","b","u","mark","ruby","rt","rp","bdi","bdo","br","wbr","th","tr"]}],ql.evaluateRoleForElement={A:function(e){var t=e.node,n=e.out
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
return!(!t.parentNode||"http://www.w3.org/2000/svg"!==t.parentNode.namespaceURI)||n}},ql.rolesOfType={widget:["button","checkbox","dialog","gridcell","link","log","marquee","menuitem","menuitemcheckbox","menuitemradio","option","progressbar","radio","scrollbar","searchbox","slider","spinbutton","status","switch","tab","tabpanel","textbox","timer","tooltip","tree","treeitem"]}
var Ll=ql,Bl=function(e){var t=null,n=Ll.role[e]
return n&&n.implicit&&(t=sr(n.implicit)),t},Hl=function(e){return!!Cl(e).length},Ul=function(e){return e=nr(e),Aa(e)},zl=function(e){var t=Xa.ariaRoles[e]
return t&&Array.isArray(t.requiredAttrs)?S(t.requiredAttrs):[]},$l=function(e){var t=Xa.ariaRoles[e]
return t&&Array.isArray(t.requiredContext)?S(t.requiredContext):null},Vl=function(e){var t=Xa.ariaRoles[e]
return t&&Array.isArray(t.requiredOwned)?S(t.requiredOwned):null},Wl=function(e,t){var n,r,a=(e=e instanceof St?e:nr(e)).attr(t),o=Xa.ariaAttrs[t]
if(!o)return!0
if(o.allowEmpty&&(!a||""===a.trim()))return!0
switch(o.type){case"boolean":return["true","false"].includes(a.toLowerCase())
case"nmtoken":return"string"==typeof a&&o.values.includes(a.toLowerCase())
case"nmtokens":return(r=_i(a)).reduce((function(e,t){return e&&o.values.includes(t)}),0!==r.length)
case"idref":try{var i=Wr(e.actualNode)
return!(!a||!i.getElementById(a))}catch(e){throw new TypeError("Cannot resolve id references for partial DOM")}case"idrefs":return Ea(e,t).some((function(e){return!!e}))
case"string":return""!==a.trim()
case"decimal":return!(!(n=a.match(/^[-+]?([0-9]*)\.?([0-9]*)$/))||!n[1]&&!n[2])
case"int":var s=void 0!==o.minValue?o.minValue:-1/0
return/^[-+]?[0-9]+$/.test(a)&&parseInt(a)>=s}},Gl=function(e){return!!Xa.ariaAttrs[e]}
function Yl(e,t,n){var r=Xa.ariaRoles[e]
return r?r.prohibitedAttrs||[]:e||n.includes(t)?[]:["aria-label","aria-labelledby"]}var Ql={}
function Xl(e,t,n,r){var a=Yi(e)
if(n||(n=$l(a)),!n)return null
for(var o=r?e:e.parent;o;){var i=As(o)
if(n.includes("group")&&"group"===i)t.includes(a)&&n.push(a),n=n.filter((function(e){return"group"!==e})),o=o.parent
else{if(n.includes(i))return null
if(i&&!["presentation","none"].includes(i))return n
o=o.parent}}return n}B(Ql,{getAriaRolesByType:function(){return Ol},getAriaRolesSupportingNameFromContent:function(){return Il},getElementSpec:function(){return ys},getElementsByContentType:function(){return Qi},getGlobalAriaAttrs:function(){return zi},implicitHtmlRoles:function(){return rs}})
var Kl={ARTICLE:!0,ASIDE:!0,NAV:!0,SECTION:!0},Jl={application:!0,banner:!1,complementary:!0,contentinfo:!0,form:!0,main:!0,navigation:!0,region:!0,search:!1},Zl={}
B(Zl,{Color:function(){return Ka},centerPointOfRect:function(){return eu},elementHasImage:function(){return Va},elementIsDistinct:function(){return nu},filteredRectStack:function(){return au},flattenColors:function(){return lu},flattenShadowColors:function(){return uu},getBackgroundColor:function(){return mu},getBackgroundStack:function(){return du},getContrast:function(){return bu},getForegroundColor:function(){return Du},getOwnBackgroundColor:function(){return Ja},getRectStack:function(){return ru},getTextShadowColors:function(){return hu},hasValidContrastRatio:function(){return xu},incompleteData:function(){return $a}})
var eu=function(e){if(!(e.left>n.innerWidth||e.top>n.innerHeight))return{x:Math.min(Math.ceil(e.left+e.width/2),n.innerWidth-1),y:Math.min(Math.ceil(e.top+e.height/2),n.innerHeight-1)}}
function tu(e){return e.getPropertyValue("font-family").split(/[,;]/g).map((function(e){return e.trim().toLowerCase()}))}var nu=function(e,t){var r=n.getComputedStyle(e)
if("none"!==r.getPropertyValue("background-image"))return!0
if(["border-bottom","border-top","outline"].reduce((function(e,t){var n=new Ka
return n.parseString(r.getPropertyValue(t+"-color")),e||"none"!==r.getPropertyValue(t+"-style")&&parseFloat(r.getPropertyValue(t+"-width"))>0&&0!==n.alpha}),!1))return!0
var a=n.getComputedStyle(t)
if(tu(r)[0]!==tu(a)[0])return!0
var o=["text-decoration-line","text-decoration-style","font-weight","font-style","font-size"].reduce((function(e,t){return e||r.getPropertyValue(t)!==a.getPropertyValue(t)}),!1),i=r.getPropertyValue("text-decoration")
return i.split(" ").length<3&&(o=o||i!==a.getPropertyValue("text-decoration")),o},ru=function(e){var t=va(e),n=wa(e)
return!n||n.length<=1?[t]:n.some((function(e){return void 0===e}))?null:(n.splice(0,0,t),n)},au=function(e){var t=ru(e)
if(t&&1===t.length)return t[0]
if(t&&t.length>1){var n,r=t.shift()
return t.forEach((function(a,o){if(0!==o){var i=t[o-1],s=t[o]
n=i.every((function(e,t){return e===s[t]}))||r.includes(e)}})),n?t[0]:($a.set("bgColor","elmPartiallyObscuring"),null)}return $a.set("bgColor","outsideViewport"),null}
function ou(e,t,n){return Math.min(Math.max(t,e),n)}var iu={normal:function(e,t){return t},multiply:function(e,t){return t*e},screen:function(e,t){return e+t-e*t},overlay:function(e,t){return this["hard-light"](t,e)},darken:function(e,t){return Math.min(e,t)},lighten:function(e,t){return Math.max(e,t)},"color-dodge":function(e,t){return 0===e?0:1===t?1:Math.min(1,e/(1-t))},"color-burn":function(e,t){return 1===e?1:0===t?0:1-Math.min(1,(1-e)/t)},"hard-light":function(e,t){return t<=.5?this.multiply(e,2*t):this.screen(e,2*t-1)},"soft-light":function(e,t){return t<=.5?e-(1-2*t)*e*(1-e):e+(2*t-1)*((e<=.25?((16*e-12)*e+4)*e:Math.sqrt(e))-e)},difference:function(e,t){return Math.abs(e-t)},exclusion:function(e,t){return e+t-2*e*t}}
function su(e,t,n,r,a){return t*(1-r)*e+t*r*iu[a](n/255,e/255)*255+(1-t)*r*n}var lu=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"normal",r=su(e.red,e.alpha,t.red,t.alpha,n),a=su(e.green,e.alpha,t.green,t.alpha,n),o=su(e.blue,e.alpha,t.blue,t.alpha,n),i=ou(e.alpha+t.alpha*(1-e.alpha),0,1),s=Math.round(r/i),l=Math.round(a/i),u=Math.round(o/i)
return new Ka(s,l,u,i)},uu=function(e,t){var n=e.alpha,r=(1-n)*t.red+n*e.red,a=(1-n)*t.green+n*e.green,o=(1-n)*t.blue+n*e.blue,i=e.alpha+t.alpha*(1-e.alpha)
return new Ka(r,a,o,i)}
function cu(e,t){var r=Node.DOCUMENT_POSITION_CONTAINED_BY
if(!(e.compareDocumentPosition(t)&r))return!1
var a=n.getComputedStyle(t)
return!!a.getPropertyValue("display").includes("inline")&&"static"===a.getPropertyValue("position")}var du=function(e){var t=au(e)
if(null===t)return null
var r=(t=function(e){var t=e.indexOf(a.body),r=e,o=Ja(n.getComputedStyle(a.documentElement))
if(t>1&&0===o.alpha&&!Va(a.documentElement)){t>1&&(r.splice(t,1),r.push(a.body))
var i=r.indexOf(a.documentElement)
i>0&&(r.splice(i,1),r.push(a.documentElement))}return r}(t=to(t,e))).indexOf(e)
return function(e,t,n){for(var r=e-1;r>=0;r--){if(!cu(n,t[r]))return!0
t.splice(r,1)}return!1}(r,t,e)?($a.set("bgColor","bgOverlap"),null):-1!==r?t:null}
function pu(e){var t={pixels:[]},n=e.trim(),r=[t]
if(!n)return[]
for(;n;){var a=n.match(/^rgba?\([0-9,.\s]+\)/i)||n.match(/^[a-z]+/i)||n.match(/^#[0-9a-f]+/i),o=n.match(/^([0-9.-]+)px/i)||n.match(/^(0)/)
if(a)Pt(!t.colorStr,"Multiple colors identified in text-shadow: ".concat(e)),n=n.replace(a[0],"").trim(),t.colorStr=a[0]
else if(o){Pt(t.pixels.length<3,"Too many pixel units in text-shadow: ".concat(e)),n=n.replace(o[0],"").trim()
var i=parseFloat(("."===o[1][0]?"0":"")+o[1])
t.pixels.push(i)}else{if(","!==n[0])throw new Error("Unable to process text-shadows: ".concat(e))
Pt(t.pixels.length>=2,"Missing pixel value in text-shadow: ".concat(e)),t={pixels:[]},r.push(t),n=n.substr(1).trim()}}return r}function fu(e){var t=e.colorStr,n=e.offsetX,r=e.offsetY,a=e.blurRadius,o=e.fontSize
if(n>a||r>a)return new Ka(0,0,0,0)
var i=new Ka
return i.parseString(t),i.alpha*=function(e,t){return 0===e?1:.185/(e/t+.4)}(a,o),i}var hu=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.minRatio,a=t.maxRatio,o=n.getComputedStyle(e),i=o.getPropertyValue("text-shadow")
if("none"===i)return[]
var s=o.getPropertyValue("font-size"),l=parseInt(s)
Pt(!1===isNaN(l),"Unable to determine font-size value ".concat(s))
var u=[],c=pu(i)
return c.forEach((function(e){var t=e.colorStr,n=e.pixels
t=t||o.getPropertyValue("color")
var i=O(n,3),s=i[0],c=i[1],d=i[2],p=void 0===d?0:d
if((!r||p>=l*r)&&(!a||p<l*a)){var f=fu({colorStr:t,offsetY:s,offsetX:c,blurRadius:p,fontSize:l})
u.push(f)}})),u}
function mu(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.1,i=hu(e,{minRatio:o})
i.length&&(i=[{color:i.reduce(uu)}])
var s=du(e)
if((s||[]).some((function(t){var a=n.getComputedStyle(t),o=Ja(a)
if(gu(e,t,o)||Va(t,a))return i=null,r.push(t),!0
if(0!==o.alpha){r.push(t)
var s=a.getPropertyValue("mix-blend-mode")
return i.unshift({color:o,blendMode:vu(s)}),1===o.alpha}return!1})),null===i||null===s)return null
var l=yu(e,s.includes(a.body))
if((t=i).unshift.apply(t,S(l)),0===i.length)return new Ka(255,255,255,1)
var u=i.reduce((function(e,t){return lu(t.color,e.color instanceof Ka?e.color:e,t.blendMode)}))
return lu(u.color instanceof Ka?u.color:u,new Ka(255,255,255,1))}function gu(e,t,n){var r=e!==t&&!no(e,t)&&0!==n.alpha
return r&&$a.set("bgColor","elmPartiallyObscured"),r}function vu(e){return e||void 0}function yu(e,t){var r=[]
if(!t){var o=a.documentElement,i=a.body,s=n.getComputedStyle(o),l=n.getComputedStyle(i),u=Ja(s),c=Ja(l),d=0!==c.alpha&&no(e,i);(0!==c.alpha&&0===u.alpha||d&&1!==c.alpha)&&r.unshift({color:c,blendMode:vu(l.getPropertyValue("mix-blend-mode"))}),0!==u.alpha&&(!d||d&&1!==c.alpha)&&r.unshift({color:u,blendMode:vu(s.getPropertyValue("mix-blend-mode"))})}return r}var bu=function(e,t){if(!t||!e)return null
t.alpha<1&&(t=lu(t,e))
var n=e.getRelativeLuminance(),r=t.getRelativeLuminance()
return(Math.max(r,n)+.05)/(Math.min(r,n)+.05)}
function wu(e){if(!e)return 1
var t=nr(e)
if(t&&void 0!==t._opacity&&null!==t._opacity)return t._opacity
var r=n.getComputedStyle(e).getPropertyValue("opacity")*wu(e.parentElement)
return t&&(t._opacity=r),r}var Du=function(e,t,r){var a=n.getComputedStyle(e),o=new Ka
o.parseString(a.getPropertyValue("color"))
var i=wu(e)
if(o.alpha=o.alpha*i,1===o.alpha)return o
if(r||(r=mu(e,[])),null===r){var s=$a.get("bgColor")
return $a.set("fgColor",s),null}if(o.alpha<1){var l=hu(e,{minRatio:0})
return[o].concat(S(l),[r]).reduce(uu)}return lu(o,r)},xu=function(e,t,n,r){var a=bu(e,t),o=r&&Math.ceil(72*n)/96<14||!r&&Math.ceil(72*n)/96<18?4.5:3
return{isValid:a>o,contrastRatio:a,expectedContrastRatio:o}},Eu=Ko((function(e,t){var r=n.getComputedStyle(e,t),a=function(e,t){return r.getPropertyValue(e)===t}
if(a("content","none")||a("display","none")||a("visibility","hidden")||!1===a("position","absolute"))return 0
if(0===Ja(r).alpha&&a("background-image","none"))return 0
var o=Cu(r.getPropertyValue("width")),i=Cu(r.getPropertyValue("height"))
return"px"!==o.unit||"px"!==i.unit?0===o.value||0===i.value?0:1/0:o.value*i.value}))
function Cu(e){var t=O(e.match(/^([0-9.]+)([a-z]+)$/i)||[],3),n=t[1],r=void 0===n?"":n,a=t[2],o=void 0===a?"":a
return{value:parseFloat(r),unit:o.toLowerCase()}}function Au(e,t){var n=e.getRelativeLuminance(),r=t.getRelativeLuminance()
return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}var ku=["block","list-item","table","flex","grid","inline-block"]
function Tu(e){var t=n.getComputedStyle(e).getPropertyValue("display")
return-1!==ku.indexOf(t)||"table-"===t.substr(0,6)}function Nu(e){if(Ia(e))return!0
if(!e.children){if(1===e.props.nodeType)throw new Error("Cannot determine children")
return!1}return e.children.some((function(e){return Nu(e)}))}function Fu(e){if(!e.children){if(1===e.props.nodeType)throw new Error("Cannot determine children")
return[]}var t=[]
return e.children.forEach((function(e){var n=As(e)
"widget"===Al(n)&&Ia(e)?t.push(e):t.push.apply(t,S(Fu(e)))})),t}function Ru(e){var t=parseInt(e.attr("tabindex"),10)
return!isNaN(t)&&t<0}function Su(e,t){var n=Ou(t),r=Ou(e)
return!(!n||!r)&&n.includes(r)}function Ou(e){var t=fl(e,{emoji:!0,nonBmp:!0,punctuations:!0})
return ba(t)}function _u(e){return""!==(e||"").trim()}function Iu(e,t){var n,r=null===(n=t.data)||void 0===n?void 0:n.headingOrder,a=ju(t.node.ancestry,1)
if(!r)return e
var o=r.map((function(e){return function(e,t){return _({},e,{ancestry:t.concat(e.ancestry)})}(e,a)})),i=function(e,t){for(;t.length;){var n=Pu(e,t)
if(-1!==n)return n
t=ju(t,1)}return-1}(e,a)
return-1===i?e.push.apply(e,S(o)):e.splice.apply(e,[i,0].concat(S(o))),e}function Pu(e,t){return e.findIndex((function(e){return Qo(e.ancestry,t)}))}function ju(e,t){return e.slice(0,e.length-t)}function Mu(e){var t=As(e),n=t&&t.includes("heading"),r=e.attr("aria-level"),a=parseInt(r,10),o=O(e.props.nodeName.match(/h(\d)/)||[],2)[1]
return n?o&&!r?parseInt(o,10):isNaN(a)||a<1?o?parseInt(o,10):2:a||-1:-1}function qu(e,t){if(!e||!t)return!1
var n=Object.getOwnPropertyNames(e),r=Object.getOwnPropertyNames(t)
return n.length===r.length&&n.every((function(n){var r=e[n],a=t[n]
return o(r)===o(a)&&("object"==typeof r||"object"==typeof a?qu(r,a):r===a)}))}var Lu={}
B(Lu,{aria:function(){return Ui},color:function(){return Zl},dom:function(){return $r},forms:function(){return Bu},matches:function(){return vs},standards:function(){return Ql},table:function(){return zu},text:function(){return dl},utils:function(){return Ot}})
var Bu={}
B(Bu,{isAriaCombobox:function(){return Gs},isAriaListbox:function(){return Ws},isAriaRange:function(){return Qs},isAriaTextbox:function(){return Vs},isDisabled:function(){return Uu},isNativeSelect:function(){return $s},isNativeTextbox:function(){return zs}})
var Hu=["fieldset","button","select","input","textarea"],Uu=function e(t){var n=t._isDisabled
if("boolean"==typeof n)return n
var r=t.props.nodeName,a=t.attr("aria-disabled")
return n=!(!Hu.includes(r)||!t.hasAttr("disabled"))||(a?"true"===a.toLowerCase():!!t.parent&&e(t.parent)),t._isDisabled=n,n},zu={}
B(zu,{getAllCells:function(){return $u},getCellPosition:function(){return Ki},getHeaders:function(){return Wu},getScope:function(){return Ji},isColumnHeader:function(){return Zi},isDataCell:function(){return Gu},isDataTable:function(){return Yu},isHeader:function(){return Qu},isRowHeader:function(){return es},toArray:function(){return Xi},toGrid:function(){return Xi},traverse:function(){return Ku}})
var $u=function(e){var t,n,r,a,o=[]
for(t=0,r=e.rows.length;t<r;t++)for(n=0,a=e.rows[t].cells.length;n<a;n++)o.push(e.rows[t].cells[n])
return o}
function Vu(e,t,n){for(var r,a="row"===e?"_rowHeaders":"_colHeaders",o="row"===e?es:Zi,s=n[t.y][t.x],l=s.colSpan-1,u=s.getAttribute("rowspan"),c=(0===parseInt(u)||0===s.rowspan?n.length:s.rowSpan)-1,d=t.y+c,p=t.x+l,f="row"===e?t.y:0,h="row"===e?0:t.x,m=[],g=d;g>=f&&!r;g--)for(var v=p;v>=h;v--){var y=n[g]?n[g][v]:void 0
if(y){var b=i.utils.getNodeFromTree(y)
if(b[a]){r=b[a]
break}m.push(y)}}return r=(r||[]).concat(m.filter(o)),m.forEach((function(e){i.utils.getNodeFromTree(e)[a]=r})),r}var Wu=function(e,t){if(e.getAttribute("headers")){var n=Ea(e,"headers")
if(n.filter((function(e){return e})).length)return n}t||(t=Xi(Qr(e,"table")))
var r=Ki(e,t),a=Vu("row",r,t),o=Vu("col",r,t)
return[].concat(a,o).reverse()},Gu=function(e){if(!e.children.length&&!e.textContent.trim())return!1
var t=e.getAttribute("role")
return Gi(t)?["cell","gridcell"].includes(t):"TD"===e.nodeName.toUpperCase()},Yu=function(e){var t=(e.getAttribute("role")||"").toLowerCase()
if(("presentation"===t||"none"===t)&&!Ia(e))return!1
if("true"===e.getAttribute("contenteditable")||Qr(e,'[contenteditable="true"]'))return!0
if("grid"===t||"treegrid"===t||"table"===t)return!0
if("landmark"===Al(t))return!0
if("0"===e.getAttribute("datatable"))return!1
if(e.getAttribute("summary"))return!0
if(e.tHead||e.tFoot||e.caption)return!0
for(var r=0,a=e.children.length;r<a;r++)if("COLGROUP"===e.children[r].nodeName.toUpperCase())return!0
for(var o,i,s=0,l=e.rows.length,u=!1,c=0;c<l;c++)for(var d=0,p=(o=e.rows[c]).cells.length;d<p;d++){if("TH"===(i=o.cells[d]).nodeName.toUpperCase())return!0
if(u||i.offsetWidth===i.clientWidth&&i.offsetHeight===i.clientHeight||(u=!0),i.getAttribute("scope")||i.getAttribute("headers")||i.getAttribute("abbr"))return!0
if(["columnheader","rowheader"].includes((i.getAttribute("role")||"").toLowerCase()))return!0
if(1===i.children.length&&"ABBR"===i.children[0].nodeName.toUpperCase())return!0
s++}if(e.getElementsByTagName("table").length)return!1
if(l<2)return!1
var f,h,m=e.rows[Math.ceil(l/2)]
if(1===m.cells.length&&1===m.cells[0].colSpan)return!1
if(m.cells.length>=5)return!0
if(u)return!0
for(c=0;c<l;c++){if(o=e.rows[c],f&&f!==n.getComputedStyle(o).getPropertyValue("background-color"))return!0
if(f=n.getComputedStyle(o).getPropertyValue("background-color"),h&&h!==n.getComputedStyle(o).getPropertyValue("background-image"))return!0
h=n.getComputedStyle(o).getPropertyValue("background-image")}return l>=20||!(na(e).width>.95*ra(n).width)&&!(s<10)&&!e.querySelector("object, embed, iframe, applet")},Qu=function(e){if(Zi(e)||es(e))return!0
if(e.getAttribute("id")){var t=Cn(e.getAttribute("id"))
return!!a.querySelector('[headers~="'.concat(t,'"]'))}return!1}
function Xu(e,t,n,r){var a,o=n[t.y]?n[t.y][t.x]:void 0
return o?"function"==typeof r&&!0===(a=r(o,t,n))?[o]:((a=Xu(e,{x:t.x+e.x,y:t.y+e.y},n,r)).unshift(o),a):[]}var Ku=function(e,t,n,r){if(Array.isArray(t)&&(r=n,n=t,t={x:0,y:0}),"string"==typeof e)switch(e){case"left":e={x:-1,y:0}
break
case"up":e={x:0,y:-1}
break
case"right":e={x:1,y:0}
break
case"down":e={x:0,y:1}}return Xu(e,{x:t.x+e.x,y:t.y+e.y},n,r)}
function Ju(e){switch(e){case"lighter":return 100
case"normal":return 400
case"bold":return 700
case"bolder":return 900}return e=parseInt(e),isNaN(e)?400:e}function Zu(e){var t=n.getComputedStyle(function(e){for(var t=e,n=e.textContent.trim(),r=n;r===n&&void 0!==t;){var a=-1
if(0===(e=t).children.length)return e
do{a++,r=e.children[a].textContent.trim()}while(""===r&&a+1<e.children.length)
t=e.children[a]}return e}(e))
return{fontWeight:Ju(t.getPropertyValue("font-weight")),fontSize:parseInt(t.getPropertyValue("font-size")),isItalic:"italic"===t.getPropertyValue("font-style")}}function ec(e,t,n){return n.reduce((function(n,r){return n||(!r.size||e.fontSize/r.size>t.fontSize)&&(!r.weight||e.fontWeight-r.weight>t.fontWeight)&&(!r.italic||e.isItalic&&!t.isItalic)}),!1)}var tc=Ol("landmark"),nc=["alert","log","status"]
function rc(e,t){var n=e.actualNode
if("button"===As(e)||function(e,t){var n=e.actualNode,r=As(e),a=(n.getAttribute("aria-live")||"").toLowerCase().trim()
return!!(["assertive","polite"].includes(a)||nc.includes(r)||tc.includes(r)||t.regionMatcher&&vs(e,t.regionMatcher))}(e,t)||["iframe","frame"].includes(e.props.nodeName)||eo(e.actualNode)&&ea(e.actualNode,"href")||!sa(n,!0)){for(var r=e;r;)r._hasRegionDescendant=!0,r=r.parent
return["iframe","frame"].includes(e.props.nodeName)?[e]:[]}return n!==a.body&&Na(n,!0)?[e]:e.children.filter((function(e){return 1===e.actualNode.nodeType})).map((function(e){return rc(e,t)})).reduce((function(e,t){return e.concat(t)}),[])}function ac(e){return!e||"true"!==e.getAttribute("aria-hidden")&&ac(Xr(e))}var oc=function(e,t,n){return n.initiator},ic=function(e,t){try{return"svg"===t.props.nodeName||!!xr(t,"svg")}catch(e){return!1}},sc={"abstractrole-evaluate":function(e,t,n){var r=_i(n.attr("role")).filter((function(e){return"abstract"===Al(e)}))
return r.length>0&&(this.data(r),!0)},"accesskeys-after":function(e){var t={}
return e.filter((function(e){if(!e.data)return!1
var n=e.data.toUpperCase()
return t[n]?(t[n].relatedNodes.push(e.relatedNodes[0]),!1):(t[n]=e,e.relatedNodes=[],!0)})).map((function(e){return e.result=!!e.relatedNodes.length,e}))},"accesskeys-evaluate":function(e){return sa(e,!1)&&(this.data(e.getAttribute("accesskey")),this.relatedNodes([e])),!0},"alt-space-value-evaluate":function(e,t,n){var r=n.attr("alt")
return"string"==typeof r&&/^\s+$/.test(r)},"aria-allowed-attr-evaluate":function(e,t,n){var r=[],a=As(n),o=n.attrNames,i=$i(a)
Array.isArray(t[a])&&(i=ci(t[a].concat(i)))
var s=tr.get("aria-allowed-attr-table")
function l(){if(n.parent&&"row"===a){var e=xr(n,'table, [role="treegrid"], [role="table"], [role="grid"]'),t=s.get(e)
if(e&&!t&&(t=As(e),s.set(e,t)),["table","grid"].includes(t)&&"row"===a)return!0}}s||(s=new WeakMap,tr.set("aria-allowed-attr-table",s))
var u=Array.isArray(t.validTreeRowAttrs)?t.validTreeRowAttrs:[],c={}
if(u.forEach((function(e){c[e]=l})),i)for(var d=0;d<o.length;d++){var p,f=o[d];(Gl(f)&&null!==(p=c[f])&&void 0!==p&&p.call(c)||Gl(f)&&!i.includes(f))&&r.push(f+'="'+n.attr(f)+'"')}if(r.length){if(this.data(r),!Wo(n)&&!a&&!Ia(n))return
return!1}return!0},"aria-allowed-attr-matches":function(e,t){var n=/^aria-/,r=t.attrNames
if(r.length)for(var a=0,o=r.length;a<o;a++)if(n.test(r[a]))return!0
return!1},"aria-allowed-role-evaluate":function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=t.allowImplicit,a=void 0===r||r,o=t.ignoredTags,i=void 0===o?[]:o,s=n.props.nodeName
if(i.map((function(e){return e.toLowerCase()})).includes(s))return!0
var l=Sl(n,a)
if(l.length){if(this.data(l),!sa(n,!0))return
return!1}return!0},"aria-allowed-role-matches":function(e,t){return null!==Yi(t,{dpub:!0,fallback:!0})},"aria-errormessage-evaluate":function(e,t,n){t=Array.isArray(t)?t:[]
var r=n.attr("aria-errormessage"),a=n.hasAttr("aria-errormessage"),o=n.attr("aria-invalid")
return!n.hasAttr("aria-invalid")||"false"===o||-1!==t.indexOf(r)||!a||(this.data(_i(r)),function(e){if(""===e.trim())return Xa.ariaAttrs["aria-errormessage"].allowEmpty
var t
try{t=e&&Ea(n,"aria-errormessage")[0]}catch(t){return void this.data({messageKey:"idrefs",values:_i(e)})}return t?sa(t,!0)?"alert"===t.getAttribute("role")||"assertive"===t.getAttribute("aria-live")||"polite"===t.getAttribute("aria-live")||_i(n.attr("aria-describedby")).indexOf(e)>-1:(this.data({messageKey:"hidden",values:_i(e)}),!1):void 0}.call(this,r))},"aria-has-attr-matches":function(e,t){var n=/^aria-/
return t.attrNames.some((function(e){return n.test(e)}))},"aria-hidden-body-evaluate":function(e,t,n){return"true"!==n.attr("aria-hidden")},"aria-hidden-focus-matches":function(e){return ac(Xr(e))},"aria-label-evaluate":function(e,t,n){return!!ba(Vi(n))},"aria-labelledby-evaluate":function(e,t,n){try{return!!ba(cl(n))}catch(e){return}},"aria-level-evaluate":function(e,t,n){var r=n.attr("aria-level")
if(!(parseInt(r,10)>6))return!0},"aria-prohibited-attr-evaluate":function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=(null==t?void 0:t.elementsAllowedAriaLabel)||[],a=n.props.nodeName,o=As(n,{chromium:!0}),i=Yl(o,a,r),s=i.filter((function(e){return!!n.attrNames.includes(e)&&""!==ba(n.attr(e))}))
if(0===s.length)return!1
var l=n.hasAttr("role")?"hasRole":"noRole"
l+=s.length>1?"Plural":"Singular",this.data({role:o,nodeName:a,messageKey:l,prohibited:s})
var u=Os(n,{subtreeDescendant:!0})
return""===ba(u)||void 0},"aria-required-attr-evaluate":function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=[],a=n.attrNames,o=Yi(n)
if(a.length){var i=zl(o),s=ys(n)
if(Array.isArray(t[o])&&(i=ci(t[o],i)),o&&i)for(var l=0,u=i.length;l<u;l++){var c=i[l]
n.attr(c)||s.implicitAttrs&&void 0!==s.implicitAttrs[c]||r.push(c)}}var d="combobox"===o&&r.includes("aria-controls")
return d&&(n.hasAttr("aria-owns")||"true"!==n.attr("aria-expanded"))&&r.splice(r.indexOf("aria-controls",1)),!r.length||(this.data(r),!1)},"aria-required-children-evaluate":function(e,t,n){var r=t&&Array.isArray(t.reviewEmpty)?t.reviewEmpty:[],a=Yi(n,{dpub:!0}),o=Vl(a)
if(null===o)return!0
var i=function(e,t){for(var n=[],r=Fs(e),a=function(e){var a=r[e],o=As(a,{noPresentational:!0})
!o||["group","rowgroup"].includes(o)&&t.some((function(e){return e===o}))?r.push.apply(r,S(a.children)):o&&n.push(o)},o=0;o<r.length;o++)a(o)
return n}(n,o),s=function(e,t,n,r){for(var a=0;a<r.length;a++){var o=r[a]
if(n.includes(o))return n=n.filter((function(e){return e!==o})),null}return n.length?n:null}(0,0,o,i)
return!s||(this.data(s),!(!r.includes(a)||Ta(n,!1,!0)||i.length||n.hasAttr("aria-owns")&&Ea(e,"aria-owns").length)&&void 0)},"aria-required-children-matches":function(e,t){var n=Yi(t,{dpub:!0})
return!!Vl(n)},"aria-required-parent-evaluate":function(e,t,n){var r=t&&Array.isArray(t.ownGroupRoles)?t.ownGroupRoles:[],a=Xl(n,r)
if(!a)return!0
var o=function(e){for(var t=[],n=null;e;){if(e.getAttribute("id")){var r=Cn(e.getAttribute("id"));(n=Wr(e).querySelector("[aria-owns~=".concat(r,"]")))&&t.push(n)}e=e.parentElement}return t.length?t:null}(e)
if(o)for(var i=0,s=o.length;i<s;i++)if(!(a=Xl(nr(o[i]),r,a,!0)))return!0
return this.data(a),!1},"aria-required-parent-matches":function(e,t){var n=Yi(t)
return!!$l(n)},"aria-roledescription-evaluate":function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=As(e),r=t.supportedRoles||[]
return!!r.includes(n)||!(!n||"presentation"===n||"none"===n)&&void 0},"aria-unsupported-attr-evaluate":function(e,t,n){var r=n.attrNames.filter((function(t){var n=Xa.ariaAttrs[t]
if(!Gl(t))return!1
var r=n.unsupported
return"object"!==o(r)?!!r:!vs(e,r.exceptions)}))
return!!r.length&&(this.data(r),!0)},"aria-valid-attr-evaluate":function(e,t,n){t=Array.isArray(t.value)?t.value:[]
var r=[],a=/^aria-/
return n.attrNames.forEach((function(e){-1===t.indexOf(e)&&a.test(e)&&!Gl(e)&&r.push(e)})),!r.length||(this.data(r),!1)},"aria-valid-attr-value-evaluate":function(e,t,n){t=Array.isArray(t.value)?t.value:[]
var r="",a="",o=[],s=/^aria-/,l=["aria-errormessage"],u={"aria-controls":function(){return"false"!==n.attr("aria-expanded")&&"false"!==n.attr("aria-selected")},"aria-current":function(e){e||(r='aria-current="'.concat(n.attr("aria-current"),'"'),a="ariaCurrent")},"aria-owns":function(){return"false"!==n.attr("aria-expanded")},"aria-describedby":function(e){e||(r='aria-describedby="'.concat(n.attr("aria-describedby"),'"'),a=i._tree&&i._tree[0]._hasShadowRoot?"noIdShadow":"noId")},"aria-labelledby":function(e){e||(r='aria-labelledby="'.concat(n.attr("aria-labelledby"),'"'),a=i._tree&&i._tree[0]._hasShadowRoot?"noIdShadow":"noId")}}
if(n.attrNames.forEach((function(e){if(!l.includes(e)&&!t.includes(e)&&s.test(e)){var i,c=n.attr(e)
try{i=Wl(n,e)}catch(t){r="".concat(e,'="').concat(c,'"'),a="idrefs"}u[e]&&!u[e](i)||i||o.push("".concat(e,'="').concat(c,'"'))}})),!r)return!o.length||(this.data(o),!1)
this.data({messageKey:a,needsReview:r})},"attr-non-space-content-evaluate":function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0
if(!t.attribute||"string"!=typeof t.attribute)throw new TypeError("attr-non-space-content requires options.attribute to be a string")
if(!n.hasAttr(t.attribute))return this.data({messageKey:"noAttr"}),!1
var r=n.attr(t.attribute),a=!ba(r)
return!a||(this.data({messageKey:"emptyAttr"}),!1)},"autocomplete-appropriate-evaluate":function(e,t,n){if("input"!==n.props.nodeName)return!0
var r=["text","search","number","tel"],a=["text","search","url"],i={bday:["text","search","date"],email:["text","search","email"],username:["text","search","email"],"street-address":["text"],tel:["text","search","tel"],"tel-country-code":["text","search","tel"],"tel-national":["text","search","tel"],"tel-area-code":["text","search","tel"],"tel-local":["text","search","tel"],"tel-local-prefix":["text","search","tel"],"tel-local-suffix":["text","search","tel"],"tel-extension":["text","search","tel"],"cc-number":r,"cc-exp":["text","search","month","tel"],"cc-exp-month":r,"cc-exp-year":r,"cc-csc":r,"transaction-amount":r,"bday-day":r,"bday-month":r,"bday-year":r,"new-password":["text","search","password"],"current-password":["text","search","password"],url:a,photo:a,impp:a}
"object"===o(t)&&Object.keys(t).forEach((function(e){i[e]||(i[e]=[]),i[e]=i[e].concat(t[e])}))
var s=n.attr("autocomplete").split(/\s+/g).map((function(e){return e.toLowerCase()})),l=s[s.length-1]
if(ml.stateTerms.includes(l))return!0
var u=i[l],c=n.hasAttr("type")?ba(n.attr("type")).toLowerCase():"text"
return c=Ii().includes(c)?c:"text",void 0===u?"text"===c:u.includes(c)},"autocomplete-matches":function(e,t){var n=t.attr("autocomplete")
if(!n||""===ba(n))return!1
var r=t.props.nodeName
if(!1===["textarea","input","select"].includes(r))return!1
if("input"===r&&["submit","reset","button","hidden"].includes(t.props.type))return!1
var a=t.attr("aria-disabled")||"false"
if(t.hasAttr("disabled")||"true"===a.toLowerCase())return!1
var o=t.attr("role"),i=t.attr("tabindex")
if("-1"===i&&o){var s=Xa.ariaRoles[o]
if(void 0===s||"widget"!==s.type)return!1}return!("-1"===i&&t.actualNode&&!sa(t.actualNode,!1)&&!sa(t.actualNode,!0))},"autocomplete-valid-evaluate":function(e,t,n){var r=n.attr("autocomplete")||""
return gl(r,t)},"avoid-inline-spacing-evaluate":function(e,t){var n=t.cssProperties.filter((function(t){if("important"===e.style.getPropertyPriority(t))return t}))
return!(n.length>0&&(this.data(n),1))},"bypass-matches":function(e,t,n){return!oc(0,0,n)||!!e.querySelector("a[href]")},"caption-evaluate":function(e,t,n){return!Ci(n,"track").some((function(e){return"captions"===(e.attr("kind")||"").toLowerCase()}))&&void 0},"caption-faked-evaluate":function(e){var t=Xi(e),n=t[0]
return t.length<=1||n.length<=1||e.rows.length<=1||n.reduce((function(e,t,r){return e||t!==n[r+1]&&void 0!==n[r+1]}),!1)},"color-contrast-evaluate":function(e,t,r){var a=t.ignoreUnicode,o=t.ignoreLength,i=t.ignorePseudo,s=t.boldValue,l=t.boldTextPt,u=t.largeTextPt,c=t.contrastRatio,d=t.shadowOutlineEmMax,p=t.pseudoSizeThreshold
if(!sa(e,!1))return this.data({messageKey:"hidden"}),!0
var f=Ca(r,!1,!0)
if(!a||!function(e){var t={nonBmp:!0},n=tl(e,t),r=""===ba(fl(e,t))
return n&&r}(f)){var h=n.getComputedStyle(e),m=parseFloat(h.getPropertyValue("font-size")),g=h.getPropertyValue("font-weight"),v=parseFloat(g)>=s||"bold"===g,y=Math.ceil(72*m)/96,b=v&&y<l||!v&&y<u?c.normal:c.large,w=b.expected,D=b.minThreshold,x=b.maxThreshold,E=function(e,t){var n=t.pseudoSizeThreshold,r=void 0===n?.25:n,a=t.ignorePseudo
if(void 0===a||!a){var o=e.boundingClientRect,i=o.width*o.height*r
do{if(Eu(e.actualNode,":before")+Eu(e.actualNode,":after")>i)return e}while(e=e.parent)}}(r,{ignorePseudo:i,pseudoSizeThreshold:p})
if(E)return this.data({fontSize:"".concat((72*m/96).toFixed(1),"pt (").concat(m,"px)"),fontWeight:v?"bold":"normal",messageKey:"pseudoContent",expectedContrastRatio:w+":1"}),void this.relatedNodes(E.actualNode)
var C=[],A=mu(e,C,d),k=Du(e,!1,A),T=hu(e,{minRatio:.001,maxRatio:d}),N=null,F=null,R=null
if(0===T.length)N=bu(A,k)
else if(k&&A){R=[].concat(S(T),[A]).reduce(uu)
var O=bu(A,k),_=bu(A,R),I=bu(R,k);(N=Math.max(O,_,I))!==O&&(F=_>I?"shadowOnBgColor":"fgOnShadowColor")}var P=N>w
if("number"==typeof D&&N<D||"number"==typeof x&&N>x)return this.data({contrastRatio:N}),!0
var j,M=Math.floor(100*N)/100
null===A?j=$a.get("bgColor"):P||(j=F)
var q=1===M,L=1===f.length
return q?j=$a.set("bgColor","equalRatio"):P||!L||o||(j="shortTextContent"),this.data({fgColor:k?k.toHexString():void 0,bgColor:A?A.toHexString():void 0,contrastRatio:M,fontSize:"".concat((72*m/96).toFixed(1),"pt (").concat(m,"px)"),fontWeight:v?"bold":"normal",messageKey:j,expectedContrastRatio:w+":1",shadowColor:R?R.toHexString():void 0}),null===k||null===A||q||L&&!o&&!P?(j=null,$a.clear(),void this.relatedNodes(C)):(P||this.relatedNodes(C),P)}this.data({messageKey:"nonBmp"})},"color-contrast-matches":function(e,t){var r=t.props,o=r.nodeName,i=r.type
if("option"===o)return!1
if("select"===o&&!e.options.length)return!1
if("input"===o&&["hidden","range","color","checkbox","radio","image"].includes(i))return!1
if(Uu(t))return!1
if(["input","select","textarea"].includes(o)){var s=n.getComputedStyle(e),l=parseInt(s.getPropertyValue("text-indent"),10)
if(l){var u=e.getBoundingClientRect()
if(u={top:u.top,bottom:u.bottom,left:u.left+l,right:u.right+l},!po(u,e))return!1}return!0}var c=Yr(t,"label")
if("label"===o||c){var d=c||e,p=c?nr(c):t
if(d.htmlFor){var f=Wr(d).getElementById(d.htmlFor),h=f&&nr(f)
if(h&&Uu(h))return!1}var m=Ci(p,'input:not([type="hidden"],[type="image"],[type="button"],[type="submit"],[type="reset"]), select, textarea')[0]
if(m&&Uu(m))return!1}for(var g=[],v=t;v;){if(v.props.id){var y=Cl(v).filter((function(e){return _i(e.getAttribute("aria-labelledby")||"").includes(v.props.id)})).map((function(e){return nr(e)}))
g.push.apply(g,S(y))}v=v.parent}if(g.length>0&&g.every(Uu))return!1
var b=Ca(t,!1,!0)
if(!b||!fl(b,{emoji:!0,nonBmp:!1,punctuations:!0}))return!1
for(var w=a.createRange(),D=t.children,x=0;x<D.length;x++){var E=D[x]
3===E.actualNode.nodeType&&""!==ba(E.actualNode.nodeValue)&&w.selectNodeContents(E.actualNode)}for(var C=w.getClientRects(),A=0;A<C.length;A++)if(po(C[A],e))return!0
return!1},"css-orientation-lock-evaluate":function(e,t,n,r){var a=(r||{}).cssom,o=void 0===a?void 0:a,i=(t||{}).degreeThreshold,s=void 0===i?0:i
if(o&&o.length){for(var l=!1,u=[],c=o.reduce((function(e,t){var n=t.sheet,r=t.root,a=t.shadowId||"topDocument"
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
var o=O(a,3),i=function(e,t){switch(e){case"rotate":case"rotateZ":return m(t)
case"rotate3d":var n=O(t.split(",").map((function(e){return e.trim()})),4),r=n[2],a=n[3]
if(0===parseInt(r))return
return m(a)
case"matrix":case"matrix3d":return function(e){var t=e.split(",")
if(t.length<=6){var n=O(t,2),r=n[0],a=n[1]
return g(Math.atan2(parseFloat(a),parseFloat(r)))}var o=parseFloat(t[8]),i=Math.asin(o),s=Math.cos(i)
return g(Math.acos(parseFloat(t[0])/s))}(t)
default:return}}(o[1],o[2])
return!!i&&(i=Math.abs(i),!(Math.abs(i-180)%180<=s)&&Math.abs(i-90)%90<=s)}(e)
if(t&&"HTML"!==e.selectorText.toUpperCase()){var r=Array.from(n.querySelectorAll(e.selectorText))||[]
u=u.concat(r)}l=l||t}))}))},p=0,f=Object.keys(c);p<f.length;p++)d()
return!l||(u.length&&this.relatedNodes(u),!1)}function h(e){var t=e.type,n=e.cssText
return 4===t&&(/orientation:\s*landscape/i.test(n)||/orientation:\s*portrait/i.test(n))}function m(e){var t,n=O(e.match(/(deg|grad|rad|turn)/)||[],1)[0]
if(n){var r,a=parseFloat(e.replace(n,""))
switch(n){case"rad":return g(a)
case"grad":return t=a,(t%=400)<0&&(t+=400),Math.round(t/400*360)
case"turn":return r=a,Math.round(360/(1/r))
default:return parseInt(a)}}}function g(e){return Math.round(e*(180/Math.PI))}},"data-table-large-matches":function(e){if(Yu(e)){var t=Xi(e)
return t.length>=3&&t[0].length>=3&&t[1].length>=3&&t[2].length>=3}return!1},"data-table-matches":function(e){return Yu(e)},"deprecatedrole-evaluate":function(e,t,n){var r=As(n,{dpub:!0,fallback:!0}),a=Xa.ariaRoles[r]
return!(null==a||!a.deprecated||(this.data(r),0))},"dlitem-evaluate":function(e){var t=Xr(e),n=t.nodeName.toUpperCase(),r=Yi(t)
return"DIV"===n&&["presentation","none",null].includes(r)&&(n=(t=Xr(t)).nodeName.toUpperCase(),r=Yi(t)),"DL"===n&&!(r&&!["presentation","none","list"].includes(r))},"doc-has-title-evaluate":function(){var e=a.title
return!!ba(e)},"duplicate-id-active-matches":function(e){var t=e.getAttribute("id").trim(),n='*[id="'.concat(Cn(t),'"]'),r=Array.from(Wr(e).querySelectorAll(n))
return!Hl(e)&&r.some(Ia)},"duplicate-id-after":function(e){var t=[]
return e.filter((function(e){return-1===t.indexOf(e.data)&&(t.push(e.data),!0)}))},"duplicate-id-aria-matches":function(e){return Hl(e)},"duplicate-id-evaluate":function(e){var t=e.getAttribute("id").trim()
if(!t)return!0
var n=Wr(e),r=Array.from(n.querySelectorAll('[id="'.concat(Cn(t),'"]'))).filter((function(t){return t!==e}))
return r.length&&this.relatedNodes(r),this.data(t),0===r.length},"duplicate-id-misc-matches":function(e){var t=e.getAttribute("id").trim(),n='*[id="'.concat(Cn(t),'"]'),r=Array.from(Wr(e).querySelectorAll(n))
return!Hl(e)&&r.every((function(e){return!Ia(e)}))},"duplicate-img-label-evaluate":function(e,t,n){if(["none","presentation"].includes(As(n)))return!1
var r=xr(n,t.parentSelector)
if(!r)return!1
var a=Ca(r,!0).toLowerCase()
return""!==a&&a===ll(n).toLowerCase()},"exists-evaluate":function(){},"explicit-evaluate":function(e,t,n){if(n.attr("id")){if(!n.actualNode)return
var r=Wr(n.actualNode),a=Cn(n.attr("id")),o=Array.from(r.querySelectorAll('label[for="'.concat(a,'"]')))
if(o.length)try{return o.some((function(e){return!sa(e)||!!ul(e)}))}catch(e){return}}return!1},"fallbackrole-evaluate":function(e,t,n){var r=_i(n.attr("role"))
return!(r.length<=1)&&(!function(e,t){return!bs(e)&&2===t.length&&t.includes("none")&&t.includes("presentation")}(n,r)||void 0)},"focusable-content-evaluate":function(e,t,n){var r=n.tabbableElements
return!!r&&r.filter((function(e){return e!==n})).length>0},"focusable-disabled-evaluate":function(e,t,n){var r=["BUTTON","FIELDSET","INPUT","SELECT","TEXTAREA"],a=n.tabbableElements
if(!a||!a.length)return!0
var o=a.reduce((function(e,t){var n=t.actualNode,a=n.nodeName.toUpperCase()
return r.includes(a)&&e.push(n),e}),[])
return this.relatedNodes(o),!(0!==o.length&&!Ha())||!!o.every((function(e){return e.onfocus}))&&void 0},"focusable-element-evaluate":function(e,t,n){if(n.hasAttr("contenteditable")&&function e(t){var r=t.attr("contenteditable")
if("true"===r||""===r)return!0
if("false"===r)return!1
var a=xr(n.parent,"[contenteditable]")
return!!a&&e(a)}(n))return!0
var r=n.isFocusable,a=parseInt(n.attr("tabindex"),10)
return(a=isNaN(a)?null:a)?r&&a>=0:r},"focusable-modal-open-evaluate":function(e,t,n){var r=n.tabbableElements.map((function(e){return e.actualNode}))
return!r||!r.length||!Ha()||void this.relatedNodes(r)},"focusable-no-name-evaluate":function(e,t,n){var r=n.attr("tabindex")
if(!(Ia(n)&&r>-1))return!1
try{return!ll(n)}catch(e){return}},"focusable-not-tabbable-evaluate":function(e,t,n){var r=["BUTTON","FIELDSET","INPUT","SELECT","TEXTAREA"],a=n.tabbableElements
if(!a||!a.length)return!0
var o=a.reduce((function(e,t){var n=t.actualNode,a=n.nodeName.toUpperCase()
return r.includes(a)||e.push(n),e}),[])
return this.relatedNodes(o),!(0!==o.length&&!Ha())||!!o.every((function(e){return e.onfocus}))&&void 0},"frame-focusable-content-evaluate":function(e,t,n){if(n.children)try{return!n.children.some((function(e){return Nu(e)}))}catch(e){return}},"frame-focusable-content-matches":function(e,t,n){var r,a
return!n.initiator&&!n.focusable&&(null===(r=n.size)||void 0===r?void 0:r.width)*(null===(a=n.size)||void 0===a?void 0:a.height)>1},"frame-tested-after":function(e){var t={}
return e.filter((function(e){if("html"!==e.node.ancestry[e.node.ancestry.length-1]){var n=e.node.ancestry.flat(1/0).join(" > ")
return t[n]=e,!0}var r=e.node.ancestry.slice(0,e.node.ancestry.length-1).flat(1/0).join(" > ")
return t[r]&&(t[r].result=!0),!1}))},"frame-tested-evaluate":function(e,t){return!t.isViolation&&void 0},"frame-title-has-text-matches":function(e){var t=e.getAttribute("title")
return!!ba(t)},"has-alt-evaluate":function(e,t,n){var r=n.props.nodeName
return!!["img","input","area"].includes(r)&&n.hasAttr("alt")},"has-descendant-after":function(e){return e.some((function(e){return!0===e.result}))&&e.forEach((function(e){e.result=!0})),e},"has-descendant-evaluate":function(e,t,n){if(!t||!t.selector||"string"!=typeof t.selector)throw new TypeError("has-descendant requires options.selector to be a string")
var r=fi(n,t.selector,(function(e){return sa(e.actualNode,!0)}))
return this.relatedNodes(r.map((function(e){return e.actualNode}))),r.length>0},"has-global-aria-attribute-evaluate":function(e,t,n){var r=zi().filter((function(e){return n.hasAttr(e)}))
return this.data(r),r.length>0},"has-implicit-chromium-role-matches":function(e,t){return null!==bs(t,{chromium:!0})},"has-lang-evaluate":function(e,t,n){var r=void 0!==a&&In(a)
return t.attributes.includes("xml:lang")&&t.attributes.includes("lang")&&_u(n.attr("xml:lang"))&&!_u(n.attr("lang"))&&!r?(this.data({messageKey:"noXHTML"}),!1):!!t.attributes.some((function(e){return _u(n.attr(e))}))||(this.data({messageKey:"noLang"}),!1)},"has-text-content-evaluate":function(e,t,n){try{return""!==ba(Os(n))}catch(e){return}},"has-widget-role-evaluate":function(e){var t=e.getAttribute("role")
if(null===t)return!1
var n=Al(t)
return"widget"===n||"composite"===n},"heading-matches":function(e){var t
return e.hasAttribute("role")&&(t=e.getAttribute("role").split(/\s+/i).filter(i.commons.aria.isValidRole)),t&&t.length>0?t.includes("heading"):"heading"===i.commons.aria.implicitRole(e)},"heading-order-after":function(e){var t=function(e){return(e=S(e)).sort((function(e,t){var n=e.node,r=t.node
return n.ancestry.length-r.ancestry.length})),e.reduce(Iu,[]).filter((function(e){return-1!==e.level}))}(e)
return e.forEach((function(e){e.result=function(e,t){var n,r,a,o,i=Pu(t,e.node.ancestry),s=null!==(n=null===(r=t[i])||void 0===r?void 0:r.level)&&void 0!==n?n:-1,l=null!==(a=null===(o=t[i-1])||void 0===o?void 0:o.level)&&void 0!==a?a:-1
return 0===i||(-1!==s?s-l<=1:void 0)}(e,t)})),e},"heading-order-evaluate":function(){var e=tr.get("headingOrder")
if(e)return!0
var t=fi(i._tree[0],"h1, h2, h3, h4, h5, h6, [role=heading], iframe, frame",(function(e){return sa(e.actualNode,!0)}))
return e=t.map((function(e){return{ancestry:[Kn(e.actualNode)],level:Mu(e)}})),this.data({headingOrder:e}),tr.set("headingOrder",t),!0},"help-same-as-label-evaluate":function(e,t,n){var r=yl(n),a=e.getAttribute("title")
return!!r&&(a||(a="",e.getAttribute("aria-describedby")&&(a=Ea(e,"aria-describedby").map((function(e){return e?ul(e):""})).join(""))),ba(a)===ba(r))},"hidden-content-evaluate":function(e,t,r){if(!["SCRIPT","HEAD","TITLE","NOSCRIPT","STYLE","TEMPLATE"].includes(e.nodeName.toUpperCase())&&Ta(r)){var a=n.getComputedStyle(e)
if("none"===a.getPropertyValue("display"))return
if("hidden"===a.getPropertyValue("visibility")){var o=Xr(e),i=o&&n.getComputedStyle(o)
if(!i||"hidden"!==i.getPropertyValue("visibility"))return}}return!0},"hidden-explicit-label-evaluate":function(e,t,n){if(n.hasAttr("id")){if(!n.actualNode)return
var r=Wr(e),a=Cn(e.getAttribute("id")),o=r.querySelector('label[for="'.concat(a,'"]'))
if(o&&!sa(o,!0)){var i
try{i=ll(n).trim()}catch(e){return}return""===i}}return!1},"html-namespace-matches":function(e,t){return!ic(0,t)},"html5-scope-evaluate":function(e){return!ja(a)||"TH"===e.nodeName.toUpperCase()},"identical-links-same-purpose-after":function(e){if(e.length<2)return e
for(var t=e.filter((function(e){return void 0!==e.result})),n=[],r={},a=function(e){var a,o=t[e],i=o.data,s=i.name,l=i.urlProps
if(r[s])return"continue"
var u=t.filter((function(t,n){return t.data.name===s&&n!==e})),c=u.every((function(e){return qu(e.data.urlProps,l)}))
u.length&&!c&&(o.result=void 0),o.relatedNodes=[],(a=o.relatedNodes).push.apply(a,S(u.map((function(e){return e.relatedNodes[0]})))),r[s]=u,n.push(o)},o=0;o<t.length;o++)a(o)
return n},"identical-links-same-purpose-evaluate":function(e,t,n){var r=dl.accessibleTextVirtual(n),a=dl.sanitize(dl.removeUnicode(r,{emoji:!0,nonBmp:!0,punctuations:!0})).toLowerCase()
if(a){var o={name:a,urlProps:$r.urlPropsFromAttribute(e,"href")}
return this.data(o),this.relatedNodes([e]),!0}},"identical-links-same-purpose-matches":function(e,t){if(!ll(t))return!1
var n=As(e)
return!n||"link"===n},"implicit-evaluate":function(e,t,n){try{var r=xr(n,"label")
return!!r&&!!ll(r,{inControlContext:!0})}catch(e){return}},"inserted-into-focus-order-matches":function(e){return Pa(e)},"internal-link-present-evaluate":function(e,t,n){return Ci(n,"a[href]").some((function(e){return/^#[^/!]/.test(e.attr("href"))}))},"invalidrole-evaluate":function(e,t,n){var r=_i(n.attr("role"))
return!!r.every((function(e){return!Gi(e,{allowAbstract:!0})}))&&(this.data(r),!0)},"is-element-focusable-evaluate":function(e,t,n){return Ia(n)},"is-initiator-matches":oc,"is-on-screen-evaluate":function(e){return sa(e,!1)&&!aa(e)},"label-content-name-mismatch-evaluate":function(e,t,n){var r=t||{},a=r.pixelThreshold,o=r.occuranceThreshold,i=ul(e).toLowerCase()
if(!(hl(i)<1)){var s=ba(Os(n,{subtreeDescendant:!0,ignoreIconLigature:!0,pixelThreshold:a,occuranceThreshold:o})).toLowerCase()
return!s||(hl(s)<1?!!Su(s,i)||void 0:Su(s,i))}},"label-content-name-mismatch-matches":function(e,t){var n=As(e)
return!!(n&&Ol("widget").includes(n)&&Il().includes(n)&&(ba(Vi(t))||ba(cl(e)))&&ba(Ca(t)))},"label-matches":function(e,t){if("input"!==t.props.nodeName||!1===t.hasAttr("type"))return!0
var n=t.attr("type").toLowerCase()
return!1===["hidden","image","button","submit","reset"].includes(n)},"landmark-has-body-context-matches":function(e,t){return e.hasAttribute("role")||!Yr(t,"article, aside, main, nav, section")},"landmark-is-top-level-evaluate":function(e){var t=Ol("landmark"),n=Xr(e),r=As(e)
for(this.data({role:r});n;){var a=n.getAttribute("role")
if(a||"FORM"===n.nodeName.toUpperCase()||(a=bs(n)),a&&t.includes(a)&&("main"!==a||"complementary"!==r))return!1
n=Xr(n)}return!0},"landmark-is-unique-after":function(e){var t=[]
return e.filter((function(e){var n=t.find((function(t){return e.data.role===t.data.role&&e.data.accessibleText===t.data.accessibleText}))
return n?(n.result=!1,n.relatedNodes.push(e.relatedNodes[0]),!1):(t.push(e),e.relatedNodes=[],!0)}))},"landmark-is-unique-evaluate":function(e,t,n){var r=As(e),a=ll(n)
return a=a?a.toLowerCase():null,this.data({role:r,accessibleText:a}),this.relatedNodes([e]),!0},"landmark-unique-matches":function(e,t){var n=["article","aside","main","nav","section"].join(",")
return function(e){var t=e.actualNode,r=Ol("landmark"),a=As(t)
if(!a)return!1
var o=t.nodeName.toUpperCase()
return"HEADER"===o||"FOOTER"===o?!Yr(e,n):"SECTION"===o||"FORM"===o?!!ll(e):r.indexOf(a)>=0||"region"===a}(t)&&sa(e,!0)},"layout-table-matches":function(e){return!Yu(e)&&!Ia(e)},"link-in-text-block-evaluate":function(e){if(Tu(e))return!1
for(var t,n,r=Xr(e);1===r.nodeType&&!Tu(r);)r=Xr(r)
if(this.relatedNodes([r]),nu(e,r))return!0
if(t=Du(e),n=Du(r),t&&n){var a,o=Au(t,n)
return 1===o||(o>=3?($a.set("fgColor","bgContrast"),this.data({messageKey:$a.get("fgColor")}),void $a.clear()):(t=mu(e),n=mu(r),(!t||!n||Au(t,n)>=3)&&(a=t&&n?"bgContrast":$a.get("bgColor"),$a.set("fgColor",a),this.data({messageKey:$a.get("fgColor")}),void $a.clear())))}},"link-in-text-block-matches":function(e){var t=ba(e.textContent),n=e.getAttribute("role")
return(!n||"link"===n)&&!!t&&!!sa(e,!1)&&Ba(e)},"listitem-evaluate":function(e,t,n){var r=n.parent
if(r){var a=r.props.nodeName,o=Yi(r)
return!!["presentation","none","list"].includes(o)||(o&&Gi(o)?(this.data({messageKey:"roleNotValid"}),!1):["ul","ol","menu"].includes(a))}},"matches-definition-evaluate":function(e,t,n){return vs(n,t.matcher)},"meta-refresh-evaluate":function(e,t,n){var r=n.attr("content")||"",a=r.split(/[;,]/)
return""===r||"0"===a[0]},"meta-viewport-scale-evaluate":function(e,t,n){var r=t||{},a=r.scaleMinimum,o=void 0===a?2:a,i=r.lowerBound,s=void 0!==i&&i,l=n.attr("content")||""
if(!l)return!0
var u=l.split(/[;,]/).reduce((function(e,t){var n=t.trim()
if(!n)return e
var r=O(n.split("="),2),a=r[0],o=r[1]
if(!a||!o)return e
var i=a.toLowerCase().trim(),s=o.toLowerCase().trim()
return"maximum-scale"===i&&"yes"===s&&(s=1),"maximum-scale"===i&&parseFloat(s)<0||(e[i]=s),e}),{})
if(s&&u["maximum-scale"]&&parseFloat(u["maximum-scale"])<s)return!0
if(!s&&"no"===u["user-scalable"])return this.data("user-scalable=no"),!1
var c=parseFloat(u["user-scalable"])
return!s&&u["user-scalable"]&&(c||0===c)&&c>-1&&c<1?(this.data("user-scalable"),!1):!(u["maximum-scale"]&&parseFloat(u["maximum-scale"])<o&&(this.data("maximum-scale"),1))},"multiple-label-evaluate":function(e){var t=Cn(e.getAttribute("id")),n=e.parentNode,r=Wr(e)
r=r.documentElement||r
var a=Array.from(r.querySelectorAll('label[for="'.concat(t,'"]')))
for(a.length&&(a=a.filter((function(e){return sa(e)})));n;)"LABEL"===n.nodeName.toUpperCase()&&-1===a.indexOf(n)&&a.push(n),n=n.parentNode
if(this.relatedNodes(a),a.length>1){var o=a.filter((function(e){return sa(e,!0)}))
if(o.length>1)return
return!Ea(e,"aria-labelledby").includes(o[0])&&void 0}return!1},"nested-interactive-matches":function(e,t){var n=As(t)
return!!n&&!!Xa.ariaRoles[n].childrenPresentational},"no-autoplay-audio-evaluate":function(e,t){if(e.duration){var n=t.allowedDuration,r=void 0===n?3:n
return function(e){if(!e.currentSrc)return 0
var t=function(e){var t=e.match(/#t=(.*)/)
if(t)return O(t,2)[1].split(",").map((function(e){return/:/.test(e)?function(e){for(var t=e.split(":"),n=0,r=1;t.length>0;)n+=r*parseInt(t.pop(),10),r*=60
return parseFloat(n)}(e):parseFloat(e)}))}(e.currentSrc)
return t?1===t.length?Math.abs(e.duration-t[0]):Math.abs(t[1]-t[0]):Math.abs(e.duration-(e.currentTime||0))}(e)<=r&&!e.hasAttribute("loop")||!!e.hasAttribute("controls")}console.warn("axe.utils.preloadMedia did not load metadata")},"no-autoplay-audio-matches":function(e){return!!e.currentSrc&&!e.hasAttribute("paused")&&!e.hasAttribute("muted")},"no-empty-role-matches":function(e,t){return!!t.hasAttr("role")&&!!t.attr("role").trim()},"no-explicit-name-required-matches":function(e,t){var n=Yi(t)
return!(n&&!["none","presentation"].includes(n)&&!(Ga[n]||{}).accessibleNameRequired&&!Ia(t))},"no-focusable-content-evaluate":function(e,t,n){if(n.children)try{var r=Fu(n)
if(!r.length)return!0
var a=r.filter(Ru)
return a.length>0?(this.data({messageKey:"notHidden"}),this.relatedNodes(a)):this.relatedNodes(r),!1}catch(e){return}},"no-implicit-explicit-label-evaluate":function(e,t,n){var r,a,o=As(n,{noImplicit:!0})
this.data(o)
try{r=ba(Is(n)).toLowerCase(),a=ba(ll(n)).toLowerCase()}catch(e){return}return!(!a&&!r)&&!((a||!r)&&a.includes(r))&&void 0},"no-naming-method-matches":function(e,t){var n=ys(t).namingMethods
return!(n&&0!==n.length||"combobox"===Yi(t)&&Ci(t,'input:not([type="hidden"])').length)},"no-role-matches":function(e){return!e.getAttribute("role")},"non-empty-if-present-evaluate":function(e,t,n){var r=n.props.nodeName,a=(n.attr("type")||"").toLowerCase(),o=n.attr("value")
return o&&this.data({messageKey:"has-label"}),!("input"!==r||!["submit","reset"].includes(a))&&null===o},"not-html-matches":function(e,t){return"html"!==t.props.nodeName},"only-dlitems-evaluate":function(e,t,n){var r=["definition","term","list"],a=n.children.reduce((function(e,t){var n=t.actualNode
return"DIV"===n.nodeName.toUpperCase()&&null===As(n)?e.concat(t.children):e.concat(t)}),[]).reduce((function(e,t){var n=t.actualNode,a=n.nodeName.toUpperCase()
if(1===n.nodeType&&sa(n,!0,!1)){var o=Yi(n);("DT"!==a&&"DD"!==a||o)&&(r.includes(o)||e.badNodes.push(n))}else 3===n.nodeType&&""!==n.nodeValue.trim()&&(e.hasNonEmptyTextNode=!0)
return e}),{badNodes:[],hasNonEmptyTextNode:!1})
return a.badNodes.length&&this.relatedNodes(a.badNodes),!!a.badNodes.length||a.hasNonEmptyTextNode},"only-listitems-evaluate":function(e,t,n){var r=!1,a=!1,o=!0,i=[],s=[],l=[]
return n.children.forEach((function(e){var t=e.actualNode
if(3!==t.nodeType||""===t.nodeValue.trim()){if(1===t.nodeType&&sa(t,!0,!1)){o=!1
var n="LI"===t.nodeName.toUpperCase(),u=As(e),c="listitem"===u
n||c||i.push(t),n&&!c&&(s.push(t),l.includes(u)||l.push(u)),c&&(a=!0)}}else r=!0})),r||i.length?(this.relatedNodes(i),!0):!o&&!a&&(this.relatedNodes(s),this.data({messageKey:"roleNotValid",roles:l.join(", ")}),!0)},"p-as-heading-evaluate":function(e,t,n){var r=Array.from(e.parentNode.children),a=r.indexOf(e),o=(t=t||{}).margins||[],i=r.slice(a+1).find((function(e){return"P"===e.nodeName.toUpperCase()})),s=r.slice(0,a).reverse().find((function(e){return"P"===e.nodeName.toUpperCase()})),l=Zu(e),u=i?Zu(i):null,c=s?Zu(s):null,d=t.passLength,p=t.failLength,f=e.textContent.trim().length,h=null==i?void 0:i.textContent.trim().length
if(f>h*d)return!0
if(!u||!ec(l,u,o))return!0
var m=Yr(n,"blockquote")
return!!(m&&"BLOCKQUOTE"===m.nodeName.toUpperCase()||c&&!ec(l,c,o)||f>h*p)&&void 0},"p-as-heading-matches":function(e){var t=Array.from(e.parentNode.childNodes),n=e.textContent.trim()
return!(0===n.length||(n.match(/[.!?:;](?![.!?:;])/g)||[]).length>=2)&&0!==t.slice(t.indexOf(e)+1).filter((function(e){return"P"===e.nodeName.toUpperCase()&&""!==e.textContent.trim()})).length},"page-no-duplicate-after":function(e){return e.filter((function(e){return"ignored"!==e.data}))},"page-no-duplicate-evaluate":function(e,t,n){if(!t||!t.selector||"string"!=typeof t.selector)throw new TypeError("page-no-duplicate requires options.selector to be a string")
var r="page-no-duplicate;"+t.selector
if(!tr.get(r)){tr.set(r,!0)
var a=fi(i._tree[0],t.selector,(function(e){return sa(e.actualNode,!0)}))
return"string"==typeof t.nativeScopeFilter&&(a=a.filter((function(e){return e.actualNode.hasAttribute("role")||!Yr(e,t.nativeScopeFilter)}))),this.relatedNodes(a.filter((function(e){return e!==n})).map((function(e){return e.actualNode}))),a.length<=1}this.data("ignored")},"presentation-role-conflict-matches":function(e,t){return null!==bs(t,{chromiumRoles:!0})},"presentational-role-evaluate":function(e,t,n){var r=As(n),a=Yi(n)
if(["presentation","none"].includes(r))return this.data({role:r}),!0
if(!["presentation","none"].includes(a))return!1
var o,i=zi().some((function(e){return n.hasAttr(e)})),s=Ia(n)
return o=i&&!s?"globalAria":!i&&s?"focusable":"both",this.data({messageKey:o,role:r}),!1},"region-after":function(e){var t=e.filter((function(e){return e.data.isIframe}))
return e.forEach((function(e){if(!e.result&&1!==e.node.ancestry.length){var n,r=e.node.ancestry.slice(0,-1),a=M(t)
try{for(a.s();!(n=a.n()).done;){var o=n.value
if(Qo(r,o.node.ancestry)){e.result=o.result
break}}}catch(e){a.e(e)}finally{a.f()}}})),t.forEach((function(e){e.result||(e.result=!0)})),e},"region-evaluate":function(e,t,n){var r=tr.get("regionlessNodes")
return this.data({isIframe:["iframe","frame"].includes(n.props.nodeName)}),r||(r=rc(i._tree[0],t).map((function(e){for(;e.parent&&!e.parent._hasRegionDescendant&&e.parent.actualNode!==a.body;)e=e.parent
return e})).filter((function(e,t,n){return n.indexOf(e)===t})),tr.set("regionlessNodes",r)),!r.includes(n)},"same-caption-summary-evaluate":function(e){return!(!e.summary||!e.caption)&&e.summary.toLowerCase()===ul(e.caption).toLowerCase()},"scope-value-evaluate":function(e,t){var n=e.getAttribute("scope").toLowerCase()
return-1!==t.values.indexOf(n)},"scrollable-region-focusable-matches":function(e,t){if(0==!!Mo(e,13))return!1
var n=Yi(t)
if(Wa["aria-haspopup"].values.includes(n)){if(xr(t,'[role~="combobox"]'))return!1
var r=t.attr("id")
if(r){var a=Vr(e)
if(Array.from(a.querySelectorAll('[aria-owns~="'.concat(r,'"], [aria-controls~="').concat(r,'"]'))).some((function(e){return _i(e.getAttribute("role")).includes("combobox")})))return!1}}return!!Ci(t,"*").some((function(e){return Ta(e,!0,!0)}))},"skip-link-evaluate":function(e){var t=ea(e,"href")
return!!t&&(sa(t,!0)||void 0)},"skip-link-matches":function(e){return eo(e)&&aa(e)},"structured-dlitems-evaluate":function(e,t,n){var r=n.children
if(!r||!r.length)return!1
for(var a,o=!1,i=!1,s=0;s<r.length;s++){if("DT"===(a=r[s].props.nodeName.toUpperCase())&&(o=!0),o&&"DD"===a)return!1
"DD"===a&&(i=!0)}return o||i},"svg-namespace-matches":ic,"svg-non-empty-title-evaluate":function(e,t,n){if(n.children){var r=n.children.find((function(e){return"title"===e.props.nodeName}))
if(!r)return this.data({messageKey:"noTitle"}),!1
try{if(""===Ca(r))return this.data({messageKey:"emptyTitle"}),!1}catch(e){return}return!0}},"tabindex-evaluate":function(e,t,n){var r=parseInt(n.attr("tabindex"),10)
return!!isNaN(r)||r<=0},"td-has-header-evaluate":function(e){var t=[],n=$u(e),r=Xi(e)
return n.forEach((function(e){Na(e)&&Gu(e)&&!Ul(e)&&(Wu(e,r).some((function(e){return null!==e&&!!Na(e)}))||t.push(e))})),!t.length||(this.relatedNodes(t),!1)},"td-headers-attr-evaluate":function(e){for(var t=[],n=[],r=[],a=0;a<e.rows.length;a++)for(var o=e.rows[a],i=0;i<o.cells.length;i++)t.push(o.cells[i])
var s=t.reduce((function(e,t){return t.getAttribute("id")&&e.push(t.getAttribute("id")),e}),[])
return t.forEach((function(e){var t=!1,a=!1
if(e.hasAttribute("headers")){var o=e.getAttribute("headers").trim()
if(!o)return n.push(e)
var i=_i(o)
0!==i.length&&(e.getAttribute("id")&&(t=-1!==i.indexOf(e.getAttribute("id").trim())),a=i.some((function(e){return!s.includes(e)})),(t||a)&&r.push(e))}})),r.length>0?(this.relatedNodes(r),!1):!n.length||void this.relatedNodes(n)},"th-has-data-cells-evaluate":function(e){var t=$u(e),n=this,r=[]
t.forEach((function(e){var t=e.getAttribute("headers")
t&&(r=r.concat(t.split(/\s+/)))
var n=e.getAttribute("aria-labelledby")
n&&(r=r.concat(n.split(/\s+/)))}))
var a=t.filter((function(e){return""!==ba(e.textContent)&&("TH"===e.nodeName.toUpperCase()||-1!==["rowheader","columnheader"].indexOf(e.getAttribute("role")))})),o=Xi(e),i=!0
return a.forEach((function(e){if(!e.getAttribute("id")||!r.includes(e.getAttribute("id"))){var t=Ki(e,o),a=!1
Zi(e)&&(a=Ku("down",t,o).find((function(t){return!Zi(t)&&Wu(t,o).includes(e)}))),!a&&es(e)&&(a=Ku("right",t,o).find((function(t){return!es(t)&&Wu(t,o).includes(e)}))),a||n.relatedNodes(e),i=i&&a}})),!!i||void 0},"title-only-evaluate":function(e,t,n){var r=yl(n),a=Ts(n),o=n.attr("aria-describedby")
return!(r||!a&&!o)},"unique-frame-title-after":function(e){var t={}
return e.forEach((function(e){t[e.data]=void 0!==t[e.data]?++t[e.data]:0})),e.forEach((function(e){e.result=!!t[e.data]})),e},"unique-frame-title-evaluate":function(e,t,n){var r=ba(n.attr("title")).toLowerCase()
return this.data(r),!0},"unsupportedrole-evaluate":function(e,t,n){return Wi(As(n))},"valid-lang-evaluate":function(e,t,n){var r=[]
return t.attributes.forEach((function(e){var a=n.attr(e)
if("string"==typeof a){var o=vo(a),i=t.value?!t.value.map(vo).includes(o):!Mi(o);(""!==o&&i||""!==a&&!ba(a))&&r.push(e+'="'+n.attr(e)+'"')}})),!!r.length&&(this.data(r),!0)},"valid-scrollable-semantics-evaluate":function(e,t){return function(e,t){var n=Yi(e)
return n&&(Jl[n]||t.roles.includes(n))||!1}(e,t)||function(e){var t=e.nodeName.toUpperCase()
return Kl[t]||!1}(e)},"window-is-top-matches":function(e){return e.ownerDocument.defaultView.self===e.ownerDocument.defaultView.top},"xml-lang-mismatch-evaluate":function(e,t,n){return vo(n.attr("lang"))===vo(n.attr("xml:lang"))},"xml-lang-mismatch-matches":function(e){var t=vo(e.getAttribute("lang")),n=vo(e.getAttribute("xml:lang"))
return Mi(t)&&Mi(n)}},lc=sc,uc=function(e){this.id=e.id,this.data=null,this.relatedNodes=[],this.result=null}
function cc(e){if("string"==typeof e){if(lc[e])return lc[e]
if(/^\s*function[\s\w]*\(/.test(e))return new Function("return "+e+";")()
throw new ReferenceError("Function ID does not exist in the metadata-function-map: ".concat(e))}return e}function dc(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return(Array.isArray(e)||"object"!==o(e))&&(e={value:e}),e}function pc(e){e&&(this.id=e.id,this.configure(e))}pc.prototype.enabled=!0,pc.prototype.run=function(e,t,n,r,a){var o=(t=t||{}).hasOwnProperty("enabled")?t.enabled:this.enabled,i=this.getOptions(t.options)
if(o){var s,l=new uc(this),u=ir(l,t,r,a)
try{s=this.evaluate.call(u,e.actualNode,i,e,n)}catch(t){return e&&e.actualNode&&(t.errorNode=new or(e).toJSON()),void a(t)}u.isAsync||(l.result=s,r(l))}else r(null)},pc.prototype.runSync=function(e,t,n){var r=(t=t||{}).enabled
if(!(void 0===r?this.enabled:r))return null
var a,o=this.getOptions(t.options),i=new uc(this),s=ir(i,t)
s.async=function(){throw new Error("Cannot run async check while in a synchronous run")}
try{a=this.evaluate.call(s,e.actualNode,o,e,n)}catch(t){throw e&&e.actualNode&&(t.errorNode=new or(e).toJSON()),t}return i.result=a,i},pc.prototype.configure=function(e){var t=this
e.evaluate&&!lc[e.evaluate]||(this._internalCheck=!0),e.hasOwnProperty("enabled")&&(this.enabled=e.enabled),e.hasOwnProperty("options")&&(this._internalCheck?this.options=dc(e.options):this.options=e.options),["evaluate","after"].filter((function(t){return e.hasOwnProperty(t)})).forEach((function(n){return t[n]=cc(e[n])}))},pc.prototype.getOptions=function(e){return this._internalCheck?Br(this.options,dc(e||{})):e||this.options}
var fc=pc,hc=function(e){this.id=e.id,this.result=Nt.NA,this.pageLevel=e.pageLevel,this.impact=null,this.nodes=[]}
function mc(e,t){this._audit=t,this.id=e.id,this.selector=e.selector||"*",e.impact&&(Pt(Nt.impact.includes(e.impact),"Impact ".concat(e.impact," is not a valid impact")),this.impact=e.impact),this.excludeHidden="boolean"!=typeof e.excludeHidden||e.excludeHidden,this.enabled="boolean"!=typeof e.enabled||e.enabled,this.pageLevel="boolean"==typeof e.pageLevel&&e.pageLevel,this.reviewOnFail="boolean"==typeof e.reviewOnFail&&e.reviewOnFail,this.any=e.any||[],this.all=e.all||[],this.none=e.none||[],this.tags=e.tags||[],this.preload=!!e.preload,e.matches&&(this.matches=cc(e.matches))}function gc(e){if(e.length){var t=!1,n={}
return e.forEach((function(e){var r=e.results.filter((function(e){return e}))
n[e.type]=r,r.length&&(t=!0)})),t?n:null}}mc.prototype.matches=function(){return!0},mc.prototype.gather=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n="mark_gather_start_"+this.id,r="mark_gather_end_"+this.id,a="mark_isHidden_start_"+this.id,o="mark_isHidden_end_"+this.id
t.performanceTimer&&li.mark(n)
var i=Fi(this.selector,e)
return this.excludeHidden&&(t.performanceTimer&&li.mark(a),i=i.filter((function(e){return!Vo(e.actualNode)})),t.performanceTimer&&(li.mark(o),li.measure("rule_"+this.id+"#gather_axe.utils.isHidden",a,o))),t.performanceTimer&&(li.mark(r),li.measure("rule_"+this.id+"#gather",n,r)),i},mc.prototype.runChecks=function(e,t,n,r,a,o){var i=this,s=Tr()
this[e].forEach((function(e){var a=i._audit.checks[e.id||e],o=ko(a,i.id,n)
s.defer((function(e,n){a.run(t,o,r,e,n)}))})),s.then((function(t){t=t.filter((function(e){return e})),a({type:e,results:t})})).catch(o)},mc.prototype.runChecksSync=function(e,t,n,r){var a=this,o=[]
return this[e].forEach((function(e){var i=a._audit.checks[e.id||e],s=ko(i,a.id,n)
o.push(i.runSync(t,s,r))})),{type:e,results:o=o.filter((function(e){return e}))}},mc.prototype.run=function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0
n.performanceTimer&&this._trackPerformance()
var o,i=Tr(),l=new hc(this)
try{o=this.gatherAndMatchNodes(e,n)}catch(e){return void a(new s({cause:e,ruleId:this.id}))}n.performanceTimer&&this._logGatherPerformance(o),o.forEach((function(r){i.defer((function(a,o){var i=Tr();["any","all","none"].forEach((function(a){i.defer((function(o,i){t.runChecks(a,r,n,e,o,i)}))})),i.then((function(e){var o=gc(e)
o&&(o.node=new or(r,n),l.nodes.push(o),t.reviewOnFail&&(["any","all"].forEach((function(e){o[e].forEach((function(e){!1===e.result&&(e.result=void 0)}))})),o.none.forEach((function(e){!0===e.result&&(e.result=void 0)})))),a()})).catch((function(e){return o(e)}))}))})),i.defer((function(e){return setTimeout(e,0)})),n.performanceTimer&&this._logRulePerformance(),i.then((function(){return r(l)})).catch((function(e){return a(e)}))},mc.prototype.runSync=function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
n.performanceTimer&&this._trackPerformance()
var r,a=new hc(this)
try{r=this.gatherAndMatchNodes(e,n)}catch(e){throw new s({cause:e,ruleId:this.id})}return n.performanceTimer&&this._logGatherPerformance(r),r.forEach((function(r){var o=[];["any","all","none"].forEach((function(a){o.push(t.runChecksSync(a,r,n,e))}))
var i=gc(o)
i&&(i.node=r.actualNode?new or(r,n):null,a.nodes.push(i),t.reviewOnFail&&(["any","all"].forEach((function(e){i[e].forEach((function(e){!1===e.result&&(e.result=void 0)}))})),i.none.forEach((function(e){!0===e.result&&(e.result=void 0)}))))})),n.performanceTimer&&this._logRulePerformance(),a},mc.prototype._trackPerformance=function(){this._markStart="mark_rule_start_"+this.id,this._markEnd="mark_rule_end_"+this.id,this._markChecksStart="mark_runchecks_start_"+this.id,this._markChecksEnd="mark_runchecks_end_"+this.id},mc.prototype._logGatherPerformance=function(e){Ft("gather (",e.length,"):",li.timeElapsed()+"ms"),li.mark(this._markChecksStart)},mc.prototype._logRulePerformance=function(){li.mark(this._markChecksEnd),li.mark(this._markEnd),li.measure("runchecks_"+this.id,this._markChecksStart,this._markChecksEnd),li.measure("rule_"+this.id,this._markStart,this._markEnd)},mc.prototype.gatherAndMatchNodes=function(e,t){var n=this,r="mark_matches_start_"+this.id,a="mark_matches_end_"+this.id,o=this.gather(e,t)
return t.performanceTimer&&li.mark(r),o=o.filter((function(t){return n.matches(t.actualNode,t,e)})),t.performanceTimer&&(li.mark(a),li.measure("rule_"+this.id+"#matches",r,a)),o},mc.prototype.after=function(e,t){var n,r=Ir(n=this).map((function(e){var t=n._audit.checks[e.id||e]
return t&&"function"==typeof t.after?t:null})).filter(Boolean),a=this.id
return r.forEach((function(n){var r,o,i,s=(r=e.nodes,o=n.id,i=[],r.forEach((function(e){Ir(e).forEach((function(t){t.id===o&&(t.node=e.node,i.push(t))}))})),i),l=ko(n,a,t),u=n.after(s,l)
s.forEach((function(e){delete e.node,-1===u.indexOf(e)&&(e.filtered=!0)}))})),e.nodes=function(e){var t=["any","all","none"],n=e.nodes.filter((function(e){var n=0
return t.forEach((function(t){e[t]=e[t].filter((function(e){return!0!==e.filtered})),n+=e[t].length})),n>0}))
return e.pageLevel&&n.length&&(n=[n.reduce((function(e,n){if(e)return t.forEach((function(t){e[t].push.apply(e[t],n[t])})),e}))]),n}(e),e},mc.prototype.configure=function(e){e.hasOwnProperty("selector")&&(this.selector=e.selector),e.hasOwnProperty("excludeHidden")&&(this.excludeHidden="boolean"!=typeof e.excludeHidden||e.excludeHidden),e.hasOwnProperty("enabled")&&(this.enabled="boolean"!=typeof e.enabled||e.enabled),e.hasOwnProperty("pageLevel")&&(this.pageLevel="boolean"==typeof e.pageLevel&&e.pageLevel),e.hasOwnProperty("reviewOnFail")&&(this.reviewOnFail="boolean"==typeof e.reviewOnFail&&e.reviewOnFail),e.hasOwnProperty("any")&&(this.any=e.any),e.hasOwnProperty("all")&&(this.all=e.all),e.hasOwnProperty("none")&&(this.none=e.none),e.hasOwnProperty("tags")&&(this.tags=e.tags),e.hasOwnProperty("matches")&&(this.matches=cc(e.matches)),e.impact&&(Pt(Nt.impact.includes(e.impact),"Impact ".concat(e.impact," is not a valid impact")),this.impact=e.impact)}
var vc=mc,yc=H(Et()),bc=/\{\{.+?\}\}/g
function wc(){return n.origin?n.origin:n.location&&n.location.origin?n.location.origin:void 0}function Dc(e,t,n){var r,a
for(r=0,a=e.length;r<a;r++)t[n](e[r])}var xc=function(){function e(t){I(this,e),this.lang="en",this.defaultConfig=t,this.standards=Xa,this._init(),this._defaultLocale=null}return j(e,[{key:"_setDefaultLocale",value:function(){if(!this._defaultLocale){for(var e={checks:{},rules:{},failureSummaries:{},incompleteFallbackMessage:"",lang:this.lang},t=Object.keys(this.data.checks),n=0;n<t.length;n++){var r=t[n],a=this.data.checks[r].messages,o=a.pass,i=a.fail,s=a.incomplete
e.checks[r]={pass:o,fail:i,incomplete:s}}for(var l=Object.keys(this.data.rules),u=0;u<l.length;u++){var c=l[u],d=this.data.rules[c],p=d.description,f=d.help
e.rules[c]={description:p,help:f}}for(var h=Object.keys(this.data.failureSummaries),m=0;m<h.length;m++){var g=h[m],v=this.data.failureSummaries[g].failureMessage
e.failureSummaries[g]={failureMessage:v}}e.incompleteFallbackMessage=this.data.incompleteFallbackMessage,this._defaultLocale=e}}},{key:"_resetLocale",value:function(){var e=this._defaultLocale
e&&this.applyLocale(e)}},{key:"_applyCheckLocale",value:function(e){for(var t,n,r,a,i=Object.keys(e),s=0;s<i.length;s++){var l=i[s]
if(!this.data.checks[l])throw new Error('Locale provided for unknown check: "'.concat(l,'"'))
this.data.checks[l]=(t=this.data.checks[l],r=void 0,a=void 0,r=(n=e[l]).pass,a=n.fail,"string"==typeof r&&bc.test(r)&&(r=yc.default.compile(r)),"string"==typeof a&&bc.test(a)&&(a=yc.default.compile(a)),_({},t,{messages:{pass:r||t.messages.pass,fail:a||t.messages.fail,incomplete:"object"===o(t.messages.incomplete)?_({},t.messages.incomplete,n.incomplete):n.incomplete}}))}}},{key:"_applyRuleLocale",value:function(e){for(var t,n,r,a,o=Object.keys(e),i=0;i<o.length;i++){var s=o[i]
if(!this.data.rules[s])throw new Error('Locale provided for unknown rule: "'.concat(s,'"'))
this.data.rules[s]=(t=this.data.rules[s],r=void 0,a=void 0,r=(n=e[s]).help,a=n.description,"string"==typeof r&&bc.test(r)&&(r=yc.default.compile(r)),"string"==typeof a&&bc.test(a)&&(a=yc.default.compile(a)),_({},t,{help:r||t.help,description:a||t.description}))}}},{key:"_applyFailureSummaries",value:function(e){for(var t,n,r=Object.keys(e),a=0;a<r.length;a++){var o=r[a]
if(!this.data.failureSummaries[o])throw new Error('Locale provided for unknown failureMessage: "'.concat(o,'"'))
this.data.failureSummaries[o]=(t=this.data.failureSummaries[o],n=void 0,"string"==typeof(n=e[o].failureMessage)&&bc.test(n)&&(n=yc.default.compile(n)),_({},t,{failureMessage:n||t.failureMessage}))}}},{key:"applyLocale",value:function(e){var t,n
this._setDefaultLocale(),e.checks&&this._applyCheckLocale(e.checks),e.rules&&this._applyRuleLocale(e.rules),e.failureSummaries&&this._applyFailureSummaries(e.failureSummaries,"failureSummaries"),e.incompleteFallbackMessage&&(this.data.incompleteFallbackMessage=(t=this.data.incompleteFallbackMessage,"string"==typeof(n=e.incompleteFallbackMessage)&&bc.test(n)&&(n=yc.default.compile(n)),n||t)),e.lang&&(this.lang=e.lang)}},{key:"setAllowedOrigins",value:function(e){var t=wc()
this.allowedOrigins=[]
var n,r=M(e)
try{for(r.s();!(n=r.n()).done;){var a=n.value
if(a===Nt.allOrigins)return void(this.allowedOrigins=["*"])
a!==Nt.sameOrigin?this.allowedOrigins.push(a):t&&this.allowedOrigins.push(t)}}catch(e){r.e(e)}finally{r.f()}}},{key:"_init",value:function(){var e=function(e){var t
if(e?(t=sr(e)).commons=e.commons:t={},t.reporter=t.reporter||null,t.noHtml=t.noHtml||!1,!t.allowedOrigins){var n=wc()
t.allowedOrigins=n?[n]:[]}return t.rules=t.rules||[],t.checks=t.checks||[],t.data=_({checks:{},rules:{}},t.data),t}(this.defaultConfig)
this.lang=e.lang||"en",this.reporter=e.reporter,this.commands={},this.rules=[],this.checks={},this.brand="axe",this.application="axeAPI",this.tagExclude=["experimental"],this.noHtml=e.noHtml,this.allowedOrigins=e.allowedOrigins,Dc(e.rules,this,"addRule"),Dc(e.checks,this,"addCheck"),this.data={},this.data.checks=e.data&&e.data.checks||{},this.data.rules=e.data&&e.data.rules||{},this.data.failureSummaries=e.data&&e.data.failureSummaries||{},this.data.incompleteFallbackMessage=e.data&&e.data.incompleteFallbackMessage||"",this._constructHelpUrls()}},{key:"registerCommand",value:function(e){this.commands[e.id]=e.callback}},{key:"addRule",value:function(e){e.metadata&&(this.data.rules[e.id]=e.metadata)
var t=this.getRule(e.id)
t?t.configure(e):this.rules.push(new vc(e,this))}},{key:"addCheck",value:function(e){var t=e.metadata
"object"===o(t)&&(this.data.checks[e.id]=t,"object"===o(t.messages)&&Object.keys(t.messages).filter((function(e){return t.messages.hasOwnProperty(e)&&"string"==typeof t.messages[e]})).forEach((function(e){0===t.messages[e].indexOf("function")&&(t.messages[e]=new Function("return "+t.messages[e]+";")())}))),this.checks[e.id]?this.checks[e.id].configure(e):this.checks[e.id]=new fc(e)}},{key:"run",value:function(e,t,n,r){this.normalizeOptions(t),i._selectCache=[]
var a=function(e,t,n){return e.reduce((function(e,r){return ki(r,t,n)?r.preload?(e.later.push(r),e):(e.now.push(r),e):e}),{now:[],later:[]})}(this.rules,e,t),o=a.now,s=a.later,l=Tr()
o.forEach((function(n){l.defer(Ec(n,e,t))}))
var u=Tr()
s.length&&u.defer((function(e){Di(t).then((function(t){return e(t)})).catch((function(t){console.warn("Couldn't load preload assets: ",t),e(void 0)}))}))
var c=Tr()
c.defer(l),c.defer(u),c.then((function(a){var o=a.pop()
if(o&&o.length){var l=o[0]
l&&(e=_({},e,l))}var u=a[0]
if(!s.length)return i._selectCache=void 0,void n(u.filter((function(e){return!!e})))
var c=Tr()
s.forEach((function(n){var r=Ec(n,e,t)
c.defer(r)})),c.then((function(e){i._selectCache=void 0,n(u.concat(e).filter((function(e){return!!e})))})).catch(r)})).catch(r)}},{key:"after",value:function(e,t){var n=this.rules
return e.map((function(e){var r=Pr(n,"id",e.id)
if(!r)throw new Error("Result for unknown rule. You may be running mismatch axe-core versions")
return r.after(e,t)}))}},{key:"getRule",value:function(e){return this.rules.find((function(t){return t.id===e}))}},{key:"normalizeOptions",value:function(e){var t=[],n=[]
if(this.rules.forEach((function(e){n.push(e.id),e.tags.forEach((function(e){t.includes(e)||t.push(e)}))})),["object","string"].includes(o(e.runOnly))){if("string"==typeof e.runOnly&&(e.runOnly=[e.runOnly]),Array.isArray(e.runOnly)){var r=e.runOnly.find((function(e){return t.includes(e)})),a=e.runOnly.find((function(e){return n.includes(e)}))
if(r&&a)throw new Error("runOnly cannot be both rules and tags")
e.runOnly=a?{type:"rule",values:e.runOnly}:{type:"tag",values:e.runOnly}}var s=e.runOnly
if(s.value&&!s.values&&(s.values=s.value,delete s.value),!Array.isArray(s.values)||0===s.values.length)throw new Error("runOnly.values must be a non-empty array")
if(["rule","rules"].includes(s.type))s.type="rule",s.values.forEach((function(e){if(!n.includes(e))throw new Error("unknown rule `"+e+"` in options.runOnly")}))
else{if(!["tag","tags",void 0].includes(s.type))throw new Error("Unknown runOnly type '".concat(s.type,"'"))
s.type="tag"
var l=s.values.filter((function(e){return!t.includes(e)&&!/wcag2[1-3]a{1,3}/.test(e)}))
0!==l.length&&i.log("Could not find tags `"+l.join("`, `")+"`")}}return"object"===o(e.rules)&&Object.keys(e.rules).forEach((function(e){if(!n.includes(e))throw new Error("unknown rule `"+e+"` in options.rules")})),e}},{key:"setBranding",value:function(e){var t={brand:this.brand,application:this.application}
"string"==typeof e&&(this.application=e),e&&e.hasOwnProperty("brand")&&e.brand&&"string"==typeof e.brand&&(this.brand=e.brand),e&&e.hasOwnProperty("application")&&e.application&&"string"==typeof e.application&&(this.application=e.application),this._constructHelpUrls(t)}},{key:"_constructHelpUrls",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=(i.version.match(/^[1-9][0-9]*\.[0-9]+/)||["x.y"])[0]
this.rules.forEach((function(r){e.data.rules[r.id]||(e.data.rules[r.id]={})
var a=e.data.rules[r.id];("string"!=typeof a.helpUrl||t&&a.helpUrl===Cc(t,r.id,n))&&(a.helpUrl=Cc(e,r.id,n))}))}},{key:"resetRulesAndChecks",value:function(){this._init(),this._resetLocale()}}]),e}()
function Ec(e,t,n){return n.performanceTimer&&li.mark("mark_rule_start_"+e.id),function(r,a){e.run(t,n,(function(e){r(e)}),(function(t){if(n.debug)a(t)
else{var o=Object.assign(new hc(e),{result:Nt.CANTTELL,description:"An error occured while running this rule",message:t.message,stack:t.stack,error:t,errorNode:t.errorNode})
r(o)}}))}}function Cc(e,t,n){var r=e.brand,a=e.application,o=e.lang
return Nt.helpUrlBase+r+"/"+(n||i.version.substring(0,i.version.lastIndexOf(".")))+"/"+t+"?application="+encodeURIComponent(a)+(o&&"en"!==o?"&lang="+encodeURIComponent(o):"")}var Ac=xc,kc={}
B(kc,{CssSelectorParser:function(){return Tc.CssSelectorParser},doT:function(){return Nc.default},emojiRegexText:function(){return Fc.default},memoize:function(){return Rc.default}})
var Tc=H(V()),Nc=H(Et()),Fc=H(xt()),Rc=H(Dt()),Sc=H(Ct()),Oc=H(At())
H(kt()),Nc.default.templateSettings.strip=!1,"Promise"in n||Sc.default.polyfill(),"Uint32Array"in n||(n.Uint32Array=Oc.Uint32Array),n.Uint32Array&&("some"in n.Uint32Array.prototype||Object.defineProperty(n.Uint32Array.prototype,"some",{value:Array.prototype.some}),"reduce"in n.Uint32Array.prototype||Object.defineProperty(n.Uint32Array.prototype,"reduce",{value:Array.prototype.reduce}))
var _c,Ic=function(e,t){if(e=e||function(){},t=t||i.log,!i._audit)throw new Error("No audit configured")
var n=i.utils.queue(),r=[]
Object.keys(i.plugins).forEach((function(e){n.defer((function(t){var n=function(e){r.push(e),t()}
try{i.plugins[e].cleanup(t,n)}catch(e){n(e)}}))}))
var o=i.utils.getFlattenedTree(a.body)
i.utils.querySelectorAll(o,"iframe, frame").forEach((function(e){n.defer((function(t,n){return i.utils.sendCommandToFrame(e.actualNode,{command:"cleanup-plugin"},t,n)}))})),n.then((function(n){0===r.length?e(n):t(r)})).catch(t)},Pc={}
function jc(e){return Pc.hasOwnProperty(e)}function Mc(e){return"string"==typeof e&&Pc[e]?Pc[e]:"function"==typeof e?e:_c}function qc(e){var t=n&&"Node"in n&&"NodeList"in n,r=!!a
if(!t||!r){if(!e||!e.ownerDocument)throw new Error('Required "window" or "document" globals not defined and cannot be deduced from the context. Either set the globals before running or pass in a valid Element.')
r||(tr.set("globalDocumentSet",!0),a=e.ownerDocument),t||(tr.set("globalWindowSet",!0),n=a.defaultView)}}function Lc(){tr.get("globalDocumentSet")&&(tr.set("globalDocumentSet",!1),a=null),tr.get("globalWindowSet")&&(tr.set("globalWindowSet",!1),n=null)}var Bc=function(){Lc(),i._memoizedFns.forEach((function(e){return e.clear()})),tr.clear(),i._tree=void 0,i._selectorData=void 0,i._selectCache=void 0},Hc=function(e,t,n,r){try{e=new Io(e),i._tree=e.flatTree,i._selectorData=zn(e.flatTree)}catch(e){return Bc(),r(e)}var a=Tr(),o=i._audit
t.performanceTimer&&li.auditStart(),e.frames.length&&!1!==t.iframes&&a.defer((function(n,r){qr(e,t,"rules",null,n,r)})),a.defer((function(n,r){o.run(e,t,n,r)})),a.then((function(a){try{t.performanceTimer&&li.auditEnd()
var i=Mr(a.map((function(e){return{results:e}})))
e.initiator&&((i=o.after(i,t)).forEach(Ei),i=i.map(yn))
try{n(i,Bc)}catch(e){Bc(),Ft(e)}}catch(e){Bc(),r(e)}})).catch((function(e){Bc(),r(e)}))}
function Uc(e){this._run=e.run,this._collect=e.collect,this._registry={},e.commands.forEach((function(e){i._audit.registerCommand(e)}))}function zc(e){var t,r,s,l=O(e,3),u=l[0],c=l[1],d=l[2],p=new TypeError("axe.run arguments are invalid")
if(!function(e){switch(!0){case"string"==typeof e:case Array.isArray(e):case n.Node&&e instanceof n.Node:case n.NodeList&&e instanceof n.NodeList:return!0
case"object"!==o(e):return!1
case void 0!==e.include:case void 0!==e.exclude:case"number"==typeof e.length:return!0
default:return!1}}(u)){if(void 0!==d)throw p
d=c,c=u,u=a}if("object"!==o(c)){if(void 0!==d)throw p
d=c,c={}}if("function"!=typeof d&&void 0!==d)throw p
return(c=sr(c)).reporter=null!==(t=null!==(r=c.reporter)&&void 0!==r?r:null===(s=i._audit)||void 0===s?void 0:s.reporter)&&void 0!==t?t:"v1",{context:u,options:c,callback:d}}n.top!==n&&(Fr.subscribe("axe.start",(function(e,t,n){var r=n,o=function(e){e instanceof Error==0&&(e=new Error(e)),n(e)},s=e&&e.context||{}
s.hasOwnProperty("include")&&!s.include.length&&(s.include=[a])
var l=e&&e.options||{}
switch(e.command){case"rules":return Hc(s,l,(function(e,t){r(e),t()}),o)
case"cleanup-plugin":return Ic(r,o)
default:if(i._audit&&i._audit.commands&&i._audit.commands[e.command])return i._audit.commands[e.command](e,n)}})),Fr.subscribe("axe.ping",(function(e,t,n){n({axe:!0})}))),Uc.prototype.run=function(){return this._run.apply(this,arguments)},Uc.prototype.collect=function(){return this._collect.apply(this,arguments)},Uc.prototype.cleanup=function(e){var t=i.utils.queue(),n=this
Object.keys(this._registry).forEach((function(e){t.defer((function(t){n._registry[e].cleanup(t)}))})),t.then(e)},Uc.prototype.add=function(e){this._registry[e.id]=e}
var $c=function(){}
function Vc(e){var t,n,r
return"function"==typeof Promise&&e===$c?t=new Promise((function(e,t){n=t,r=e})):r=n=$c,{thenable:t,reject:n,resolve:r}}function Wc(e,t,n){var r=Mc(t.reporter)(e,t,n)
void 0!==r&&n(r)}function Gc(e,t){if(Lc(),"function"!=typeof t||t===$c)throw e
t(e.message)}function Yc(e){var t=e.node,n=R(e,g)
n.node=t.toJSON()
for(var r=0,a=["any","all","none"];r<a.length;r++){var o=a[r]
n[o]=n[o].map((function(e){var t=e.relatedNodes
return _({},R(e,v),{relatedNodes:t.map((function(e){return e.toJSON()}))})}))}return n}function Qc(e){var t,n=[],r=M(e)
try{for(r.s();!(t=r.n()).done;){var a=t.value,o=n.shift()
if(a){a.frameSpec=null!=o?o:null
var i=Xc(a)
n.unshift.apply(n,S(i))}}}catch(e){r.e(e)}finally{r.f()}}function Xc(e){var t=e.frames,n=e.frameSpec
return n?t.map((function(e){return or.mergeSpecs(e,n)})):t}function Kc(e,t){return new Promise((function(n){Mc(t.reporter)(e,t,n)}))}var Jc=function(e,t,n){if("function"==typeof t&&(n=t,t={}),!e||!Array.isArray(e))return n(e)
n(e.map((function(e){for(var t=_({},e),n=0,r=["passes","violations","incomplete","inapplicable"];n<r.length;n++){var a=r[n]
t[a]&&Array.isArray(t[a])&&(t[a]=t[a].map((function(e){var t,n=e.node,r=R(e,w)
return _({node:n="function"==typeof(null===(t=n)||void 0===t?void 0:t.toJSON)?n.toJSON():n},r)})))}return t})))}
i.constants=Nt,i.log=Ft,i.AbstractVirtualNode=St,i.SerialVirtualNode=Hi,i.VirtualNode=ho,i._cache=tr,i._thisWillBeDeletedDoNotUse=i._thisWillBeDeletedDoNotUse||{},i._thisWillBeDeletedDoNotUse.base={Audit:Ac,CheckResult:uc,Check:fc,Context:Io,RuleResult:hc,Rule:vc,metadataFunctionMap:lc},i._thisWillBeDeletedDoNotUse.public={reporters:Pc},i.imports=kc,i.cleanup=Ic,i.configure=function(e){var t
if(!(t=i._audit))throw new Error("No audit configured")
if(e.axeVersion||e.ver){var n=e.axeVersion||e.ver
if(!/^\d+\.\d+\.\d+(-canary)?/.test(n))throw new Error("Invalid configured version ".concat(n))
var r=O(n.split("-"),2),a=r[0],o=r[1],s=O(a.split(".").map(Number),3),l=s[0],u=s[1],c=s[2],d=O(i.version.split("-"),2),p=d[0],f=d[1],h=O(p.split(".").map(Number),3),m=h[0],g=h[1],v=h[2]
if(l!==m||g<u||g===u&&v<c||l===m&&u===g&&c===v&&o&&o!==f)throw new Error("Configured version ".concat(n," is not compatible with current axe version ").concat(i.version))}if(e.reporter&&("function"==typeof e.reporter||jc(e.reporter))&&(t.reporter=e.reporter),e.checks){if(!Array.isArray(e.checks))throw new TypeError("Checks property must be an array")
e.checks.forEach((function(e){if(!e.id)throw new TypeError("Configured check ".concat(JSON.stringify(e)," is invalid. Checks must be an object with at least an id property"))
t.addCheck(e)}))}var y,b=[]
if(e.rules){if(!Array.isArray(e.rules))throw new TypeError("Rules property must be an array")
e.rules.forEach((function(e){if(!e.id)throw new TypeError("Configured rule ".concat(JSON.stringify(e)," is invalid. Rules must be an object with at least an id property"))
b.push(e.id),t.addRule(e)}))}if(e.disableOtherRules&&t.rules.forEach((function(e){!1===b.includes(e.id)&&(e.enabled=!1)})),void 0!==e.branding?t.setBranding(e.branding):t._constructHelpUrls(),e.tagExclude&&(t.tagExclude=e.tagExclude),e.locale&&t.applyLocale(e.locale),e.standards&&(y=e.standards,Object.keys(Qa).forEach((function(e){y[e]&&(Qa[e]=Br(Qa[e],y[e]))}))),e.noHtml&&(t.noHtml=!0),e.allowedOrigins){if(!Array.isArray(e.allowedOrigins))throw new TypeError("Allowed origins property must be an array")
if(e.allowedOrigins.includes("*"))throw new Error('"*" is not allowed. Use "'.concat(Nt.allOrigins,'" instead'))
t.setAllowedOrigins(e.allowedOrigins)}},i.frameMessenger=function(e){Fr.updateMessenger(e)},i.getRules=function(e){var t=(e=e||[]).length?i._audit.rules.filter((function(t){return!!e.filter((function(e){return-1!==t.tags.indexOf(e)})).length})):i._audit.rules,n=i._audit.data.rules||{}
return t.map((function(e){var t=n[e.id]||{}
return{ruleId:e.id,description:t.description,help:t.help,helpUrl:t.helpUrl,tags:e.tags}}))},i._load=function(e){i._audit=new Ac(e)},i.plugins={},i.registerPlugin=function(e){i.plugins[e.id]=new Uc(e)},i.hasReporter=jc,i.getReporter=Mc,i.addReporter=function(e,t,n){Pc[e]=t,n&&(_c=t)},i.reset=function(){var e=i._audit
if(!e)throw new Error("No audit configured")
e.resetRulesAndChecks(),Object.keys(Qa).forEach((function(e){Qa[e]=Ya[e]}))},i._runRules=Hc,i.runVirtualRule=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
n.reporter=n.reporter||i._audit.reporter||"v1",i._selectorData={},t instanceof St||(t=new Hi(t))
var r=jo(e)
if(!r)throw new Error("unknown rule `"+e+"`")
var a={initiator:!0,include:[t]},o=(r=Object.create(r,{excludeHidden:{value:!1}})).runSync(a,n)
Ei(o),yn(o)
var s=Dn([o])
return s.violations.forEach((function(e){return e.nodes.forEach((function(e){e.failureSummary=yo(e)}))})),_({},To(),s,{toolOptions:n})},i.run=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
qc(t[0])
var r=zc(t),a=r.context,o=r.options,s=r.callback,l=void 0===s?$c:s,u=Vc(l),c=u.thenable,d=u.resolve,p=u.reject
try{Pt(i._audit,"No audit configured"),Pt(!i._running,"Axe is already running. Use `await axe.run()` to wait for the previous run to finish before starting a new run.")}catch(e){return Gc(e,l)}function f(e,t){o.performanceTimer&&i.utils.performanceTimer.end()
try{Wc(e,o,(function(e){i._running=!1,t()
try{l(null,e)}catch(e){i.log(e)}d(e)}))}catch(e){i._running=!1,t(),l(e),p(e)}}function h(e){o.performanceTimer&&i.utils.performanceTimer.end(),i._running=!1,Lc(),l(e),p(e)}return i._running=!0,o.performanceTimer&&i.utils.performanceTimer.start(),i._runRules(a,o,f,h),c},i.setup=function(e){if(i._tree)throw new Error("Axe is already setup. Call `axe.teardown()` before calling `axe.setup` again.")
return i._tree=go(e),i._selectorData=zn(i._tree),i._tree[0]},i.teardown=Bc,i.runPartial=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
var r=zc(t),a=r.options,o=r.context
Pt(i._audit,"Axe is not configured. Audit is missing."),Pt(!i._running,"Axe is already running. Use `await axe.run()` to wait for the previous run to finish before starting a new run.")
var s=new Io(o,i._tree)
return i._tree=s.flatTree,i._selectorData=zn(s.flatTree),i._running=!0,new Promise((function(e,t){i._audit.run(s,a,e,t)})).then((function(e){e=e.map((function(e){var t=e.nodes,n=R(e,m)
return _({nodes:t.map(Yc)},n)}))
var t,n=s.frames.map((function(e){var t=e.node
return new or(t,a).toJSON()}))
return s.initiator&&(t=To()),i._running=!1,Bc(),{results:e,frames:n,environmentData:t}})).catch((function(e){return i._running=!1,Bc(),Promise.reject(e)}))},i.finishRun=function(e){var t,n,r,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
a=sr(a)
var o=e.find((function(e){return e.environmentData}))||{},s=o.environmentData
i._audit.normalizeOptions(a),a.reporter=null!==(t=null!==(n=a.reporter)&&void 0!==n?n:null===(r=i._audit)||void 0===r?void 0:r.reporter)&&void 0!==t?t:"v1",Qc(e)
var l=Mr(e)
return(l=i._audit.after(l,a)).forEach(Ei),Kc(l=l.map(yn),_({environmentData:s},a))},i.commons=Lu,i.utils=Ot,i.addReporter("na",(function(e,t,n){console.warn('"na" reporter will be deprecated in axe v4.0. Use the "v2" reporter instead.'),"function"==typeof t&&(n=t,t={})
var r=t,a=r.environmentData,o=R(r,y)
n(_({},To(a),{toolOptions:o},Do(e,t)))})),i.addReporter("no-passes",(function(e,t,n){"function"==typeof t&&(n=t,t={})
var r=t,a=r.environmentData,o=R(r,b)
t.resultTypes=["violations"]
var i=Do(e,t).violations
n(_({},To(a),{toolOptions:o,violations:i}))})),i.addReporter("rawEnv",(function(e,t,n){"function"==typeof t&&(n=t,t={})
var r=t,a=r.environmentData,o=R(r,D)
Jc(e,o,(function(e){var t=To(a)
n({raw:e,env:t})}))})),i.addReporter("raw",Jc),i.addReporter("v1",(function(e,t,n){"function"==typeof t&&(n=t,t={})
var r=t,a=r.environmentData,o=R(r,x),i=Do(e,t),s=function(e){e.nodes.forEach((function(e){e.failureSummary=yo(e)}))}
i.incomplete.forEach(s),i.violations.forEach(s),n(_({},To(a),{toolOptions:o},i))})),i.addReporter("v2",(function(e,t,n){"function"==typeof t&&(n=t,t={})
var r=t,a=r.environmentData,o=R(r,E),i=Do(e,t)
n(_({},To(a),{toolOptions:o},i))}),!0)}(),i._load({lang:"en",data:{rules:{accesskeys:{description:"Ensures every accesskey attribute value is unique",help:"accesskey attribute value should be unique"},"area-alt":{description:"Ensures <area> elements of image maps have alternate text",help:"Active <area> elements must have alternate text"},"aria-allowed-attr":{description:"Ensures ARIA attributes are allowed for an element's role",help:"Elements must only use allowed ARIA attributes"},"aria-allowed-role":{description:"Ensures role attribute has an appropriate value for the element",help:"ARIA role should be appropriate for the element"},"aria-command-name":{description:"Ensures every ARIA button, link and menuitem has an accessible name",help:"ARIA commands must have an accessible name"},"aria-dialog-name":{description:"Ensures every ARIA dialog and alertdialog node has an accessible name",help:"ARIA dialog and alertdialog nodes should have an accessible name"},"aria-hidden-body":{description:"Ensures aria-hidden='true' is not present on the document body.",help:"aria-hidden='true' must not be present on the document body"},"aria-hidden-focus":{description:"Ensures aria-hidden elements are not focusable nor contain focusable elements",help:"ARIA hidden element must not be focusable or contain focusable elements"},"aria-input-field-name":{description:"Ensures every ARIA input field has an accessible name",help:"ARIA input fields must have an accessible name"},"aria-meter-name":{description:"Ensures every ARIA meter node has an accessible name",help:"ARIA meter nodes must have an accessible name"},"aria-progressbar-name":{description:"Ensures every ARIA progressbar node has an accessible name",help:"ARIA progressbar nodes must have an accessible name"},"aria-required-attr":{description:"Ensures elements with ARIA roles have all required ARIA attributes",help:"Required ARIA attributes must be provided"},"aria-required-children":{description:"Ensures elements with an ARIA role that require child roles contain them",help:"Certain ARIA roles must contain particular children"},"aria-required-parent":{description:"Ensures elements with an ARIA role that require parent roles are contained by them",help:"Certain ARIA roles must be contained by particular parents"},"aria-roledescription":{description:"Ensure aria-roledescription is only used on elements with an implicit or explicit role",help:"aria-roledescription must be on elements with a semantic role"},"aria-roles":{description:"Ensures all elements with a role attribute use a valid value",help:"ARIA roles used must conform to valid values"},"aria-text":{description:'Ensures "role=text" is used on elements with no focusable descendants',help:'"role=text" should have no focusable descendants'},"aria-toggle-field-name":{description:"Ensures every ARIA toggle field has an accessible name",help:"ARIA toggle fields must have an accessible name"},"aria-tooltip-name":{description:"Ensures every ARIA tooltip node has an accessible name",help:"ARIA tooltip nodes must have an accessible name"},"aria-treeitem-name":{description:"Ensures every ARIA treeitem node has an accessible name",help:"ARIA treeitem nodes should have an accessible name"},"aria-valid-attr-value":{description:"Ensures all ARIA attributes have valid values",help:"ARIA attributes must conform to valid values"},"aria-valid-attr":{description:"Ensures attributes that begin with aria- are valid ARIA attributes",help:"ARIA attributes must conform to valid names"},"audio-caption":{description:"Ensures <audio> elements have captions",help:"<audio> elements must have a captions track"},"autocomplete-valid":{description:"Ensure the autocomplete attribute is correct and suitable for the form field",help:"autocomplete attribute must be used correctly"},"avoid-inline-spacing":{description:"Ensure that text spacing set through style attributes can be adjusted with custom stylesheets",help:"Inline text spacing must be adjustable with custom stylesheets"},blink:{description:"Ensures <blink> elements are not used",help:"<blink> elements are deprecated and must not be used"},"button-name":{description:"Ensures buttons have discernible text",help:"Buttons must have discernible text"},bypass:{description:"Ensures each page has at least one mechanism for a user to bypass navigation and jump straight to the content",help:"Page must have means to bypass repeated blocks"},"color-contrast-enhanced":{description:"Ensures the contrast between foreground and background colors meets WCAG 2 AAA contrast ratio thresholds",help:"Elements must have sufficient color contrast"},"color-contrast":{description:"Ensures the contrast between foreground and background colors meets WCAG 2 AA contrast ratio thresholds",help:"Elements must have sufficient color contrast"},"css-orientation-lock":{description:"Ensures content is not locked to any specific display orientation, and the content is operable in all display orientations",help:"CSS Media queries must not lock display orientation"},"definition-list":{description:"Ensures <dl> elements are structured correctly",help:"<dl> elements must only directly contain properly-ordered <dt> and <dd> groups, <script>, <template> or <div> elements"},dlitem:{description:"Ensures <dt> and <dd> elements are contained by a <dl>",help:"<dt> and <dd> elements must be contained by a <dl>"},"document-title":{description:"Ensures each HTML document contains a non-empty <title> element",help:"Documents must have <title> element to aid in navigation"},"duplicate-id-active":{description:"Ensures every id attribute value of active elements is unique",help:"IDs of active elements must be unique"},"duplicate-id-aria":{description:"Ensures every id attribute value used in ARIA and in labels is unique",help:"IDs used in ARIA and labels must be unique"},"duplicate-id":{description:"Ensures every id attribute value is unique",help:"id attribute value must be unique"},"empty-heading":{description:"Ensures headings have discernible text",help:"Headings should not be empty"},"empty-table-header":{description:"Ensures table headers have discernible text",help:"Table header text must not be empty"},"focus-order-semantics":{description:"Ensures elements in the focus order have a role appropriate for interactive content",help:"Elements in the focus order should have an appropriate role"},"form-field-multiple-labels":{description:"Ensures form field does not have multiple label elements",help:"Form field must not have multiple label elements"},"frame-focusable-content":{description:"Ensures <frame> and <iframe> elements with focusable content do not have tabindex=-1",help:"Frames with focusable content must not have tabindex=-1"},"frame-tested":{description:"Ensures <iframe> and <frame> elements contain the axe-core script",help:"Frames should be tested with axe-core"},"frame-title-unique":{description:"Ensures <iframe> and <frame> elements contain a unique title attribute",help:"Frames should have a unique title attribute"},"frame-title":{description:"Ensures <iframe> and <frame> elements have an accessible name",help:"Frames must have an accessible name"},"heading-order":{description:"Ensures the order of headings is semantically correct",help:"Heading levels should only increase by one"},"hidden-content":{description:"Informs users about hidden content.",help:"Hidden content on the page should be analyzed"},"html-has-lang":{description:"Ensures every HTML document has a lang attribute",help:"<html> element must have a lang attribute"},"html-lang-valid":{description:"Ensures the lang attribute of the <html> element has a valid value",help:"<html> element must have a valid value for the lang attribute"},"html-xml-lang-mismatch":{description:"Ensure that HTML elements with both valid lang and xml:lang attributes agree on the base language of the page",help:"HTML elements with lang and xml:lang must have the same base language"},"identical-links-same-purpose":{description:"Ensure that links with the same accessible name serve a similar purpose",help:"Links with the same name must have a similar purpose"},"image-alt":{description:"Ensures <img> elements have alternate text or a role of none or presentation",help:"Images must have alternate text"},"image-redundant-alt":{description:"Ensure image alternative is not repeated as text",help:"Alternative text of images should not be repeated as text"},"input-button-name":{description:"Ensures input buttons have discernible text",help:"Input buttons must have discernible text"},"input-image-alt":{description:'Ensures <input type="image"> elements have alternate text',help:"Image buttons must have alternate text"},"label-content-name-mismatch":{description:"Ensures that elements labelled through their content must have their visible text as part of their accessible name",help:"Elements must have their visible text as part of their accessible name"},"label-title-only":{description:"Ensures that every form element has a visible label and is not solely labeled using hidden labels, or the title or aria-describedby attributes",help:"Form elements should have a visible label"},label:{description:"Ensures every form element has a label",help:"Form elements must have labels"},"landmark-banner-is-top-level":{description:"Ensures the banner landmark is at top level",help:"Banner landmark should not be contained in another landmark"},"landmark-complementary-is-top-level":{description:"Ensures the complementary landmark or aside is at top level",help:"Aside should not be contained in another landmark"},"landmark-contentinfo-is-top-level":{description:"Ensures the contentinfo landmark is at top level",help:"Contentinfo landmark should not be contained in another landmark"},"landmark-main-is-top-level":{description:"Ensures the main landmark is at top level",help:"Main landmark should not be contained in another landmark"},"landmark-no-duplicate-banner":{description:"Ensures the document has at most one banner landmark",help:"Document should not have more than one banner landmark"},"landmark-no-duplicate-contentinfo":{description:"Ensures the document has at most one contentinfo landmark",help:"Document should not have more than one contentinfo landmark"},"landmark-no-duplicate-main":{description:"Ensures the document has at most one main landmark",help:"Document should not have more than one main landmark"},"landmark-one-main":{description:"Ensures the document has a main landmark",help:"Document should have one main landmark"},"landmark-unique":{help:"Ensures landmarks are unique",description:"Landmarks should have a unique role or role/label/title (i.e. accessible name) combination"},"link-in-text-block":{description:"Ensure links are distinguished from surrounding text in a way that does not rely on color",help:"Links must be distinguishable without relying on color"},"link-name":{description:"Ensures links have discernible text",help:"Links must have discernible text"},list:{description:"Ensures that lists are structured correctly",help:"<ul> and <ol> must only directly contain <li>, <script> or <template> elements"},listitem:{description:"Ensures <li> elements are used semantically",help:"<li> elements must be contained in a <ul> or <ol>"},marquee:{description:"Ensures <marquee> elements are not used",help:"<marquee> elements are deprecated and must not be used"},"meta-refresh":{description:'Ensures <meta http-equiv="refresh"> is not used',help:"Timed refresh must not exist"},"meta-viewport-large":{description:'Ensures <meta name="viewport"> can scale a significant amount',help:"Users should be able to zoom and scale the text up to 500%"},"meta-viewport":{description:'Ensures <meta name="viewport"> does not disable text scaling and zooming',help:"Zooming and scaling should not be disabled"},"nested-interactive":{description:"Ensures interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies",help:"Interactive controls must not be nested"},"no-autoplay-audio":{description:"Ensures <video> or <audio> elements do not autoplay audio for more than 3 seconds without a control mechanism to stop or mute the audio",help:"<video> or <audio> elements must not play automatically"},"object-alt":{description:"Ensures <object> elements have alternate text",help:"<object> elements must have alternate text"},"p-as-heading":{description:"Ensure bold, italic text and font-size is not used to style <p> elements as a heading",help:"Styled <p> elements must not be used as headings"},"page-has-heading-one":{description:"Ensure that the page, or at least one of its frames contains a level-one heading",help:"Page should contain a level-one heading"},"presentation-role-conflict":{description:"Flags elements whose role is none or presentation and which cause the role conflict resolution to trigger.",help:"Elements of role none or presentation should be flagged"},region:{description:"Ensures all page content is contained by landmarks",help:"All page content should be contained by landmarks"},"role-img-alt":{description:"Ensures [role='img'] elements have alternate text",help:"[role='img'] elements must have an alternative text"},"scope-attr-valid":{description:"Ensures the scope attribute is used correctly on tables",help:"scope attribute should be used correctly"},"scrollable-region-focusable":{description:"Ensure elements that have scrollable content are accessible by keyboard",help:"Scrollable region must have keyboard access"},"select-name":{description:"Ensures select element has an accessible name",help:"Select element must have an accessible name"},"server-side-image-map":{description:"Ensures that server-side image maps are not used",help:"Server-side image maps must not be used"},"skip-link":{description:"Ensure all skip links have a focusable target",help:"The skip-link target should exist and be focusable"},"svg-img-alt":{description:"Ensures <svg> elements with an img, graphics-document or graphics-symbol role have an accessible text",help:"<svg> elements with an img role must have an alternative text"},tabindex:{description:"Ensures tabindex attribute values are not greater than 0",help:"Elements should not have tabindex greater than zero"},"table-duplicate-name":{description:"Ensure the <caption> element does not contain the same text as the summary attribute",help:"tables should not have the same summary and caption"},"table-fake-caption":{description:"Ensure that tables with a caption use the <caption> element.",help:"Data or header cells must not be used to give caption to a data table."},"td-has-header":{description:"Ensure that each non-empty data cell in a <table> larger than 3 by 3  has one or more table headers",help:"Non-empty <td> elements in larger <table> must have an associated table header"},"td-headers-attr":{description:"Ensure that each cell in a table that uses the headers attribute refers only to other cells in that table",help:"Table cells that use the headers attribute must only refer to cells in the same table"},"th-has-data-cells":{description:"Ensure that <th> elements and elements with role=columnheader/rowheader have data cells they describe",help:"Table headers in a data table must refer to data cells"},"valid-lang":{description:"Ensures lang attributes have valid values",help:"lang attribute must have a valid value"},"video-caption":{description:"Ensures <video> elements have captions",help:"<video> elements must have captions"}},checks:{abstractrole:{impact:"serious",messages:{pass:"Abstract roles are not used",fail:{singular:"Abstract role cannot be directly used: ${data.values}",plural:"Abstract roles cannot be directly used: ${data.values}"}}},"aria-allowed-attr":{impact:"critical",messages:{pass:"ARIA attributes are used correctly for the defined role",fail:{singular:"ARIA attribute is not allowed: ${data.values}",plural:"ARIA attributes are not allowed: ${data.values}"},incomplete:"Check that there is no problem if the ARIA attribute is ignored on this element: ${data.values}"}},"aria-allowed-role":{impact:"minor",messages:{pass:"ARIA role is allowed for given element",fail:{singular:"ARIA role ${data.values} is not allowed for given element",plural:"ARIA roles ${data.values} are not allowed for given element"},incomplete:{singular:"ARIA role ${data.values} must be removed when the element is made visible, as it is not allowed for the element",plural:"ARIA roles ${data.values} must be removed when the element is made visible, as they are not allowed for the element"}}},"aria-errormessage":{impact:"critical",messages:{pass:"aria-errormessage exists and references elements visible to screen readers that use a supported aria-errormessage technique",fail:{singular:"aria-errormessage value `${data.values}` must use a technique to announce the message (e.g., aria-live, aria-describedby, role=alert, etc.)",plural:"aria-errormessage values `${data.values}` must use a technique to announce the message (e.g., aria-live, aria-describedby, role=alert, etc.)",hidden:"aria-errormessage value `${data.values}` cannot reference a hidden element"},incomplete:{singular:"ensure aria-errormessage value `${data.values}` references an existing element",plural:"ensure aria-errormessage values `${data.values}` reference existing elements",idrefs:"unable to determine if aria-errormessage element exists on the page: ${data.values}"}}},"aria-hidden-body":{impact:"critical",messages:{pass:"No aria-hidden attribute is present on document body",fail:"aria-hidden=true should not be present on the document body"}},"aria-level":{impact:"serious",messages:{pass:"aria-level values are valid",incomplete:"aria-level values greater than 6 are not supported in all screenreader and browser combinations"}},"aria-prohibited-attr":{impact:"serious",messages:{pass:"ARIA attribute is allowed",fail:{hasRolePlural:'${data.prohibited} attributes cannot be used with role "${data.role}".',hasRoleSingular:'${data.prohibited} attribute cannot be used with role "${data.role}".',noRolePlural:"${data.prohibited} attributes cannot be used on a ${data.nodeName} with no valid role attribute.",noRoleSingular:"${data.prohibited} attribute cannot be used on a ${data.nodeName} with no valid role attribute."},incomplete:{hasRoleSingular:'${data.prohibited} attribute is not well supported with role "${data.role}".',hasRolePlural:'${data.prohibited} attributes are not well supported with role "${data.role}".',noRoleSingular:"${data.prohibited} attribute is not well supported on a ${data.nodeName} with no valid role attribute.",noRolePlural:"${data.prohibited} attributes are not well supported on a ${data.nodeName} with no valid role attribute."}}},"aria-required-attr":{impact:"critical",messages:{pass:"All required ARIA attributes are present",fail:{singular:"Required ARIA attribute not present: ${data.values}",plural:"Required ARIA attributes not present: ${data.values}"}}},"aria-required-children":{impact:"critical",messages:{pass:"Required ARIA children are present",fail:{singular:"Required ARIA child role not present: ${data.values}",plural:"Required ARIA children role not present: ${data.values}"},incomplete:{singular:"Expecting ARIA child role to be added: ${data.values}",plural:"Expecting ARIA children role to be added: ${data.values}"}}},"aria-required-parent":{impact:"critical",messages:{pass:"Required ARIA parent role present",fail:{singular:"Required ARIA parent role not present: ${data.values}",plural:"Required ARIA parents role not present: ${data.values}"}}},"aria-roledescription":{impact:"serious",messages:{pass:"aria-roledescription used on a supported semantic role",incomplete:"Check that the aria-roledescription is announced by supported screen readers",fail:"Give the element a role that supports aria-roledescription"}},"aria-unsupported-attr":{impact:"critical",messages:{pass:"ARIA attribute is supported",fail:"ARIA attribute is not widely supported in screen readers and assistive technologies: ${data.values}"}},"aria-valid-attr-value":{impact:"critical",messages:{pass:"ARIA attribute values are valid",fail:{singular:"Invalid ARIA attribute value: ${data.values}",plural:"Invalid ARIA attribute values: ${data.values}"},incomplete:{noId:"ARIA attribute element ID does not exist on the page: ${data.needsReview}",noIdShadow:"ARIA attribute element ID does not exist on the page or is a descendant of a different shadow DOM tree: ${data.needsReview}",ariaCurrent:'ARIA attribute value is invalid and will be treated as "aria-current=true": ${data.needsReview}',idrefs:"Unable to determine if ARIA attribute element ID exists on the page: ${data.needsReview}"}}},"aria-valid-attr":{impact:"critical",messages:{pass:"ARIA attribute name is valid",fail:{singular:"Invalid ARIA attribute name: ${data.values}",plural:"Invalid ARIA attribute names: ${data.values}"}}},deprecatedrole:{impact:"minor",messages:{pass:"ARIA role is not deprecated",fail:"The role used is deprecated: ${data}"}},fallbackrole:{impact:"serious",messages:{pass:"Only one role value used",fail:"Use only one role value, since fallback roles are not supported in older browsers",incomplete:"Use only role 'presentation' or 'none' since they are synonymous."}},"has-global-aria-attribute":{impact:"minor",messages:{pass:{singular:"Element has global ARIA attribute: ${data.values}",plural:"Element has global ARIA attributes: ${data.values}"},fail:"Element does not have global ARIA attribute"}},"has-widget-role":{impact:"minor",messages:{pass:"Element has a widget role.",fail:"Element does not have a widget role."}},invalidrole:{impact:"critical",messages:{pass:"ARIA role is valid",fail:{singular:"Role must be one of the valid ARIA roles: ${data.values}",plural:"Roles must be one of the valid ARIA roles: ${data.values}"}}},"is-element-focusable":{impact:"minor",messages:{pass:"Element is focusable.",fail:"Element is not focusable."}},"no-implicit-explicit-label":{impact:"moderate",messages:{pass:"There is no mismatch between a <label> and accessible name",incomplete:"Check that the <label> does not need be part of the ARIA ${data} field's name"}},unsupportedrole:{impact:"critical",messages:{pass:"ARIA role is supported",fail:"The role used is not widely supported in screen readers and assistive technologies: ${data.values}"}},"valid-scrollable-semantics":{impact:"minor",messages:{pass:"Element has valid semantics for an element in the focus order.",fail:"Element has invalid semantics for an element in the focus order."}},"color-contrast-enhanced":{impact:"serious",messages:{pass:"Element has sufficient color contrast of ${data.contrastRatio}",fail:{default:"Element has insufficient color contrast of ${data.contrastRatio} (foreground color: ${data.fgColor}, background color: ${data.bgColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}",fgOnShadowColor:"Element has insufficient color contrast of ${data.contrastRatio} between the foreground and shadow color (foreground color: ${data.fgColor}, text-shadow color: ${data.shadowColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}",shadowOnBgColor:"Element has insufficient color contrast of ${data.contrastRatio} between the shadow color and background color (text-shadow color: ${data.shadowColor}, background color: ${data.bgColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}"},incomplete:{default:"Unable to determine contrast ratio",bgImage:"Element's background color could not be determined due to a background image",bgGradient:"Element's background color could not be determined due to a background gradient",imgNode:"Element's background color could not be determined because element contains an image node",bgOverlap:"Element's background color could not be determined because it is overlapped by another element",fgAlpha:"Element's foreground color could not be determined because of alpha transparency",elmPartiallyObscured:"Element's background color could not be determined because it's partially obscured by another element",elmPartiallyObscuring:"Element's background color could not be determined because it partially overlaps other elements",outsideViewport:"Element's background color could not be determined because it's outside the viewport",equalRatio:"Element has a 1:1 contrast ratio with the background",shortTextContent:"Element content is too short to determine if it is actual text content",nonBmp:"Element content contains only non-text characters",pseudoContent:"Element's background color could not be determined due to a pseudo element"}}},"color-contrast":{impact:"serious",messages:{pass:{default:"Element has sufficient color contrast of ${data.contrastRatio}",hidden:"Element is hidden"},fail:{default:"Element has insufficient color contrast of ${data.contrastRatio} (foreground color: ${data.fgColor}, background color: ${data.bgColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}",fgOnShadowColor:"Element has insufficient color contrast of ${data.contrastRatio} between the foreground and shadow color (foreground color: ${data.fgColor}, text-shadow color: ${data.shadowColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}",shadowOnBgColor:"Element has insufficient color contrast of ${data.contrastRatio} between the shadow color and background color (text-shadow color: ${data.shadowColor}, background color: ${data.bgColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}"},incomplete:{default:"Unable to determine contrast ratio",bgImage:"Element's background color could not be determined due to a background image",bgGradient:"Element's background color could not be determined due to a background gradient",imgNode:"Element's background color could not be determined because element contains an image node",bgOverlap:"Element's background color could not be determined because it is overlapped by another element",fgAlpha:"Element's foreground color could not be determined because of alpha transparency",elmPartiallyObscured:"Element's background color could not be determined because it's partially obscured by another element",elmPartiallyObscuring:"Element's background color could not be determined because it partially overlaps other elements",outsideViewport:"Element's background color could not be determined because it's outside the viewport",equalRatio:"Element has a 1:1 contrast ratio with the background",shortTextContent:"Element content is too short to determine if it is actual text content",nonBmp:"Element content contains only non-text characters",pseudoContent:"Element's background color could not be determined due to a pseudo element"}}},"link-in-text-block":{impact:"serious",messages:{pass:"Links can be distinguished from surrounding text in some way other than by color",fail:"Links need to be distinguished from surrounding text in some way other than by color",incomplete:{default:"Unable to determine contrast ratio",bgContrast:"Element's contrast ratio could not be determined. Check for a distinct hover/focus style",bgImage:"Element's contrast ratio could not be determined due to a background image",bgGradient:"Element's contrast ratio could not be determined due to a background gradient",imgNode:"Element's contrast ratio could not be determined because element contains an image node",bgOverlap:"Element's contrast ratio could not be determined because of element overlap"}}},"autocomplete-appropriate":{impact:"serious",messages:{pass:"the autocomplete value is on an appropriate element",fail:"the autocomplete value is inappropriate for this type of input"}},"autocomplete-valid":{impact:"serious",messages:{pass:"the autocomplete attribute is correctly formatted",fail:"the autocomplete attribute is incorrectly formatted"}},accesskeys:{impact:"serious",messages:{pass:"Accesskey attribute value is unique",fail:"Document has multiple elements with the same accesskey"}},"focusable-content":{impact:"moderate",messages:{pass:"Element contains focusable elements",fail:"Element should have focusable content"}},"focusable-disabled":{impact:"serious",messages:{pass:"No focusable elements contained within element",incomplete:"Check if the focusable elements immediately move the focus indicator",fail:"Focusable content should be disabled or be removed from the DOM"}},"focusable-element":{impact:"moderate",messages:{pass:"Element is focusable",fail:"Element should be focusable"}},"focusable-modal-open":{impact:"serious",messages:{pass:"No focusable elements while a modal is open",incomplete:"Check that focusable elements are not tabbable in the current state"}},"focusable-no-name":{impact:"serious",messages:{pass:"Element is not in tab order or has accessible text",fail:"Element is in tab order and does not have accessible text",incomplete:"Unable to determine if element has an accessible name"}},"focusable-not-tabbable":{impact:"serious",messages:{pass:"No focusable elements contained within element",incomplete:"Check if the focusable elements immediately move the focus indicator",fail:"Focusable content should have tabindex='-1' or be removed from the DOM"}},"frame-focusable-content":{impact:"serious",messages:{pass:"Element does not have focusable descendants",fail:"Element has focusable descendants",incomplete:"Could not determine if element has descendants"}},"landmark-is-top-level":{impact:"moderate",messages:{pass:"The ${data.role} landmark is at the top level.",fail:"The ${data.role} landmark is contained in another landmark."}},"no-focusable-content":{impact:"serious",messages:{pass:"Element does not have focusable descendants",fail:{default:"Element has focusable descendants",notHidden:"Using a negative tabindex on an element inside an interactive control does not prevent assistive technologies from focusing the element (even with 'aria-hidden=true')"},incomplete:"Could not determine if element has descendants"}},"page-has-heading-one":{impact:"moderate",messages:{pass:"Page has at least one level-one heading",fail:"Page must have a level-one heading"}},"page-has-main":{impact:"moderate",messages:{pass:"Document has at least one main landmark",fail:"Document does not have a main landmark"}},"page-no-duplicate-banner":{impact:"moderate",messages:{pass:"Document does not have more than one banner landmark",fail:"Document has more than one banner landmark"}},"page-no-duplicate-contentinfo":{impact:"moderate",messages:{pass:"Document does not have more than one contentinfo landmark",fail:"Document has more than one contentinfo landmark"}},"page-no-duplicate-main":{impact:"moderate",messages:{pass:"Document does not have more than one main landmark",fail:"Document has more than one main landmark"}},tabindex:{impact:"serious",messages:{pass:"Element does not have a tabindex greater than 0",fail:"Element has a tabindex greater than 0"}},"alt-space-value":{impact:"critical",messages:{pass:"Element has a valid alt attribute value",fail:"Element has an alt attribute containing only a space character, which is not ignored by all screen readers"}},"duplicate-img-label":{impact:"minor",messages:{pass:"Element does not duplicate existing text in <img> alt text",fail:"Element contains <img> element with alt text that duplicates existing text"}},"explicit-label":{impact:"critical",messages:{pass:"Form element has an explicit <label>",fail:"Form element does not have an explicit <label>",incomplete:"Unable to determine if form element has an explicit <label>"}},"help-same-as-label":{impact:"minor",messages:{pass:"Help text (title or aria-describedby) does not duplicate label text",fail:"Help text (title or aria-describedby) text is the same as the label text"}},"hidden-explicit-label":{impact:"critical",messages:{pass:"Form element has a visible explicit <label>",fail:"Form element has explicit <label> that is hidden",incomplete:"Unable to determine if form element has explicit <label> that is hidden"}},"implicit-label":{impact:"critical",messages:{pass:"Form element has an implicit (wrapped) <label>",fail:"Form element does not have an implicit (wrapped) <label>",incomplete:"Unable to determine if form element has an implicit (wrapped} <label>"}},"label-content-name-mismatch":{impact:"serious",messages:{pass:"Element contains visible text as part of it's accessible name",fail:"Text inside the element is not included in the accessible name"}},"multiple-label":{impact:"moderate",messages:{pass:"Form field does not have multiple label elements",incomplete:"Multiple label elements is not widely supported in assistive technologies. Ensure the first label contains all necessary information."}},"title-only":{impact:"serious",messages:{pass:"Form element does not solely use title attribute for its label",fail:"Only title used to generate label for form element"}},"landmark-is-unique":{impact:"moderate",messages:{pass:"Landmarks must have a unique role or role/label/title (i.e. accessible name) combination",fail:"The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable"}},"has-lang":{impact:"serious",messages:{pass:"The <html> element has a lang attribute",fail:{noXHTML:"The xml:lang attribute is not valid on HTML pages, use the lang attribute.",noLang:"The <html> element does not have a lang attribute"}}},"valid-lang":{impact:"serious",messages:{pass:"Value of lang attribute is included in the list of valid languages",fail:"Value of lang attribute not included in the list of valid languages"}},"xml-lang-mismatch":{impact:"moderate",messages:{pass:"Lang and xml:lang attributes have the same base language",fail:"Lang and xml:lang attributes do not have the same base language"}},dlitem:{impact:"serious",messages:{pass:"Description list item has a <dl> parent element",fail:"Description list item does not have a <dl> parent element"}},listitem:{impact:"serious",messages:{pass:'List item has a <ul>, <ol> or role="list" parent element',fail:{default:"List item does not have a <ul>, <ol> parent element",roleNotValid:'List item does not have a <ul>, <ol> parent element without a role, or a role="list"'}}},"only-dlitems":{impact:"serious",messages:{pass:"List element only has direct children that are allowed inside <dt> or <dd> elements",fail:"List element has direct children that are not allowed inside <dt> or <dd> elements"}},"only-listitems":{impact:"serious",messages:{pass:"List element only has direct children that are allowed inside <li> elements",fail:{default:"List element has direct children that are not allowed inside <li> elements",roleNotValid:"List element has direct children with a role that is not allowed: ${data.roles}"}}},"structured-dlitems":{impact:"serious",messages:{pass:"When not empty, element has both <dt> and <dd> elements",fail:"When not empty, element does not have at least one <dt> element followed by at least one <dd> element"}},caption:{impact:"critical",messages:{pass:"The multimedia element has a captions track",incomplete:"Check that captions is available for the element"}},"frame-tested":{impact:"critical",messages:{pass:"The iframe was tested with axe-core",fail:"The iframe could not be tested with axe-core",incomplete:"The iframe still has to be tested with axe-core"}},"no-autoplay-audio":{impact:"moderate",messages:{pass:"<video> or <audio> does not output audio for more than allowed duration or has controls mechanism",fail:"<video> or <audio> outputs audio for more than allowed duration and does not have a controls mechanism",incomplete:"Check that the <video> or <audio> does not output audio for more than allowed duration or provides a controls mechanism"}},"css-orientation-lock":{impact:"serious",messages:{pass:"Display is operable, and orientation lock does not exist",fail:"CSS Orientation lock is applied, and makes display inoperable",incomplete:"CSS Orientation lock cannot be determined"}},"meta-viewport-large":{impact:"minor",messages:{pass:"<meta> tag does not prevent significant zooming on mobile devices",fail:"<meta> tag limits zooming on mobile devices"}},"meta-viewport":{impact:"critical",messages:{pass:"<meta> tag does not disable zooming on mobile devices",fail:"${data} on <meta> tag disables zooming on mobile devices"}},"header-present":{impact:"serious",messages:{pass:"Page has a heading",fail:"Page does not have a heading"}},"heading-order":{impact:"moderate",messages:{pass:"Heading order valid",fail:"Heading order invalid",incomplete:"Unable to determine previous heading"}},"identical-links-same-purpose":{impact:"minor",messages:{pass:"There are no other links with the same name, that go to a different URL",incomplete:"Check that links have the same purpose, or are intentionally ambiguous."}},"internal-link-present":{impact:"serious",messages:{pass:"Valid skip link found",fail:"No valid skip link found"}},landmark:{impact:"serious",messages:{pass:"Page has a landmark region",fail:"Page does not have a landmark region"}},"meta-refresh":{impact:"critical",messages:{pass:"<meta> tag does not immediately refresh the page",fail:"<meta> tag forces timed refresh of page"}},"p-as-heading":{impact:"serious",messages:{pass:"<p> elements are not styled as headings",fail:"Heading elements should be used instead of styled <p> elements",incomplete:"Unable to determine if <p> elements are styled as headings"}},region:{impact:"moderate",messages:{pass:"All page content is contained by landmarks",fail:"Some page content is not contained by landmarks"}},"skip-link":{impact:"moderate",messages:{pass:"Skip link target exists",incomplete:"Skip link target should become visible on activation",fail:"No skip link target"}},"unique-frame-title":{impact:"serious",messages:{pass:"Element's title attribute is unique",fail:"Element's title attribute is not unique"}},"duplicate-id-active":{impact:"serious",messages:{pass:"Document has no active elements that share the same id attribute",fail:"Document has active elements with the same id attribute: ${data}"}},"duplicate-id-aria":{impact:"critical",messages:{pass:"Document has no elements referenced with ARIA or labels that share the same id attribute",fail:"Document has multiple elements referenced with ARIA with the same id attribute: ${data}"}},"duplicate-id":{impact:"minor",messages:{pass:"Document has no static elements that share the same id attribute",fail:"Document has multiple static elements with the same id attribute: ${data}"}},"aria-label":{impact:"serious",messages:{pass:"aria-label attribute exists and is not empty",fail:"aria-label attribute does not exist or is empty"}},"aria-labelledby":{impact:"serious",messages:{pass:"aria-labelledby attribute exists and references elements that are visible to screen readers",fail:"aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty",incomplete:"ensure aria-labelledby references an existing element"}},"avoid-inline-spacing":{impact:"serious",messages:{pass:"No inline styles with '!important' that affect text spacing has been specified",fail:{singular:"Remove '!important' from inline style ${data.values}, as overriding this is not supported by most browsers",plural:"Remove '!important' from inline styles ${data.values}, as overriding this is not supported by most browsers"}}},"button-has-visible-text":{impact:"critical",messages:{pass:"Element has inner text that is visible to screen readers",fail:"Element does not have inner text that is visible to screen readers",incomplete:"Unable to determine if element has children"}},"doc-has-title":{impact:"serious",messages:{pass:"Document has a non-empty <title> element",fail:"Document does not have a non-empty <title> element"}},exists:{impact:"minor",messages:{pass:"Element does not exist",incomplete:"Element exists"}},"has-alt":{impact:"critical",messages:{pass:"Element has an alt attribute",fail:"Element does not have an alt attribute"}},"has-visible-text":{impact:"minor",messages:{pass:"Element has text that is visible to screen readers",fail:"Element does not have text that is visible to screen readers",incomplete:"Unable to determine if element has children"}},"is-on-screen":{impact:"serious",messages:{pass:"Element is not visible",fail:"Element is visible"}},"non-empty-alt":{impact:"critical",messages:{pass:"Element has a non-empty alt attribute",fail:{noAttr:"Element has no alt attribute",emptyAttr:"Element has an empty alt attribute"}}},"non-empty-if-present":{impact:"critical",messages:{pass:{default:"Element does not have a value attribute","has-label":"Element has a non-empty value attribute"},fail:"Element has a value attribute and the value attribute is empty"}},"non-empty-placeholder":{impact:"serious",messages:{pass:"Element has a placeholder attribute",fail:{noAttr:"Element has no placeholder attribute",emptyAttr:"Element has an empty placeholder attribute"}}},"non-empty-title":{impact:"serious",messages:{pass:"Element has a title attribute",fail:{noAttr:"Element has no title attribute",emptyAttr:"Element has an empty title attribute"}}},"non-empty-value":{impact:"critical",messages:{pass:"Element has a non-empty value attribute",fail:{noAttr:"Element has no value attribute",emptyAttr:"Element has an empty value attribute"}}},"presentational-role":{impact:"minor",messages:{pass:'Element\'s default semantics were overriden with role="${data.role}"',fail:{default:'Element\'s default semantics were not overridden with role="none" or role="presentation"',globalAria:"Element's role is not presentational because it has a global ARIA attribute",focusable:"Element's role is not presentational because it is focusable",both:"Element's role is not presentational because it has a global ARIA attribute and is focusable"}}},"role-none":{impact:"minor",messages:{pass:'Element\'s default semantics were overriden with role="none"',fail:'Element\'s default semantics were not overridden with role="none"'}},"role-presentation":{impact:"minor",messages:{pass:'Element\'s default semantics were overriden with role="presentation"',fail:'Element\'s default semantics were not overridden with role="presentation"'}},"svg-non-empty-title":{impact:"serious",messages:{pass:"Element has a child that is a title",fail:{noTitle:"Element has no child that is a title",emptyTitle:"Element child title is empty"},incomplete:"Unable to determine element has a child that is a title"}},"caption-faked":{impact:"serious",messages:{pass:"The first row of a table is not used as a caption",fail:"The first child of the table should be a caption instead of a table cell"}},"html5-scope":{impact:"moderate",messages:{pass:"Scope attribute is only used on table header elements (<th>)",fail:"In HTML 5, scope attributes may only be used on table header elements (<th>)"}},"same-caption-summary":{impact:"minor",messages:{pass:"Content of summary attribute and <caption> are not duplicated",fail:"Content of summary attribute and <caption> element are identical"}},"scope-value":{impact:"critical",messages:{pass:"Scope attribute is used correctly",fail:"The value of the scope attribute may only be 'row' or 'col'"}},"td-has-header":{impact:"critical",messages:{pass:"All non-empty data cells have table headers",fail:"Some non-empty data cells do not have table headers"}},"td-headers-attr":{impact:"serious",messages:{pass:"The headers attribute is exclusively used to refer to other cells in the table",incomplete:"The headers attribute is empty",fail:"The headers attribute is not exclusively used to refer to other cells in the table"}},"th-has-data-cells":{impact:"serious",messages:{pass:"All table header cells refer to data cells",fail:"Not all table header cells refer to data cells",incomplete:"Table data cells are missing or empty"}},"hidden-content":{impact:"minor",messages:{pass:"All content on the page has been analyzed.",fail:"There were problems analyzing the content on this page.",incomplete:"There is hidden content on the page that was not analyzed. You will need to trigger the display of this content in order to analyze it."}}},failureSummaries:{any:{failureMessage:function(e){var t="Fix any of the following:",n=e
if(n)for(var r=-1,a=n.length-1;r<a;)t+="\n  "+n[r+=1].split("\n").join("\n  ")
return t}},none:{failureMessage:function(e){var t="Fix all of the following:",n=e
if(n)for(var r=-1,a=n.length-1;r<a;)t+="\n  "+n[r+=1].split("\n").join("\n  ")
return t}}},incompleteFallbackMessage:"axe couldn't tell the reason. Time to break out the element inspector!"},rules:[{id:"accesskeys",selector:"[accesskey]",excludeHidden:!1,tags:["cat.keyboard","best-practice"],all:[],any:[],none:["accesskeys"]},{id:"area-alt",selector:"map area[href]",excludeHidden:!1,tags:["cat.text-alternatives","wcag2a","wcag111","wcag244","wcag412","section508","section508.22.a","ACT"],actIds:["c487ae"],all:[],any:[{options:{attribute:"alt"},id:"non-empty-alt"},"aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"aria-allowed-attr",matches:"aria-allowed-attr-matches",tags:["cat.aria","wcag2a","wcag412"],actIds:["5c01ea"],all:[],any:[{options:{validTreeRowAttrs:["aria-posinset","aria-setsize","aria-expanded","aria-level"]},id:"aria-allowed-attr"}],none:["aria-unsupported-attr",{options:{elementsAllowedAriaLabel:["applet","input"]},id:"aria-prohibited-attr"}]},{id:"aria-allowed-role",excludeHidden:!1,selector:"[role]",matches:"aria-allowed-role-matches",tags:["cat.aria","best-practice"],all:[],any:[{options:{allowImplicit:!0,ignoredTags:[]},id:"aria-allowed-role"}],none:[]},{id:"aria-command-name",selector:'[role="link"], [role="button"], [role="menuitem"]',matches:"no-naming-method-matches",tags:["cat.aria","wcag2a","wcag412"],actIds:["97a4e1"],all:[],any:["has-visible-text","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"aria-dialog-name",selector:'[role="dialog"], [role="alertdialog"]',matches:"no-naming-method-matches",tags:["cat.aria","best-practice"],all:[],any:["aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"aria-hidden-body",selector:"body",excludeHidden:!1,matches:"is-initiator-matches",tags:["cat.aria","wcag2a","wcag412"],all:[],any:["aria-hidden-body"],none:[]},{id:"aria-hidden-focus",selector:'[aria-hidden="true"]',matches:"aria-hidden-focus-matches",excludeHidden:!1,tags:["cat.name-role-value","wcag2a","wcag412","wcag131"],actIds:["6cfa84"],all:["focusable-modal-open","focusable-disabled","focusable-not-tabbable"],any:[],none:[]},{id:"aria-input-field-name",selector:'[role="combobox"], [role="listbox"], [role="searchbox"], [role="slider"], [role="spinbutton"], [role="textbox"]',matches:"no-naming-method-matches",tags:["cat.aria","wcag2a","wcag412","ACT"],actIds:["e086e5"],all:[],any:["aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:["no-implicit-explicit-label"]},{id:"aria-meter-name",selector:'[role="meter"]',matches:"no-naming-method-matches",tags:["cat.aria","wcag2a","wcag111"],all:[],any:["aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"aria-progressbar-name",selector:'[role="progressbar"]',matches:"no-naming-method-matches",tags:["cat.aria","wcag2a","wcag111"],all:[],any:["aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"aria-required-attr",selector:"[role]",tags:["cat.aria","wcag2a","wcag412"],all:[],any:["aria-required-attr"],none:[]},{id:"aria-required-children",selector:"[role]",matches:"aria-required-children-matches",tags:["cat.aria","wcag2a","wcag131"],actIds:["ff89c9"],all:[],any:[{options:{reviewEmpty:["doc-bibliography","doc-endnotes","grid","list","listbox","table","tablist","tree","treegrid","rowgroup"]},id:"aria-required-children"}],none:[]},{id:"aria-required-parent",selector:"[role]",matches:"aria-required-parent-matches",tags:["cat.aria","wcag2a","wcag131"],actIds:["bc4a75","ff89c9"],all:[],any:[{options:{ownGroupRoles:["listitem","treeitem"]},id:"aria-required-parent"}],none:[]},{id:"aria-roledescription",selector:"[aria-roledescription]",tags:["cat.aria","wcag2a","wcag412"],all:[],any:[{options:{supportedRoles:["button","img","checkbox","radio","combobox","menuitemcheckbox","menuitemradio"]},id:"aria-roledescription"}],none:[]},{id:"aria-roles",selector:"[role]",matches:"no-empty-role-matches",tags:["cat.aria","wcag2a","wcag412"],all:[],any:[],none:["fallbackrole","invalidrole","abstractrole","unsupportedrole","deprecatedrole"]},{id:"aria-text",selector:"[role=text]",tags:["cat.aria","best-practice"],all:[],any:["no-focusable-content"],none:[]},{id:"aria-toggle-field-name",selector:'[role="checkbox"], [role="menuitemcheckbox"], [role="menuitemradio"], [role="radio"], [role="switch"], [role="option"]',matches:"no-naming-method-matches",tags:["cat.aria","wcag2a","wcag412","ACT"],all:[],any:["has-visible-text","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:["no-implicit-explicit-label"]},{id:"aria-tooltip-name",selector:'[role="tooltip"]',matches:"no-naming-method-matches",tags:["cat.aria","wcag2a","wcag412"],all:[],any:["has-visible-text","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"aria-treeitem-name",selector:'[role="treeitem"]',matches:"no-naming-method-matches",tags:["cat.aria","best-practice"],all:[],any:["has-visible-text","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"aria-valid-attr-value",matches:"aria-has-attr-matches",tags:["cat.aria","wcag2a","wcag412"],actIds:["5c01ea","c487ae"],all:[{options:[],id:"aria-valid-attr-value"},"aria-errormessage","aria-level"],any:[],none:[]},{id:"aria-valid-attr",matches:"aria-has-attr-matches",tags:["cat.aria","wcag2a","wcag412"],all:[],any:[{options:[],id:"aria-valid-attr"}],none:[]},{id:"audio-caption",selector:"audio",enabled:!1,excludeHidden:!1,tags:["cat.time-and-media","wcag2a","wcag121","section508","section508.22.a"],actIds:["c3232f","e7aa44"],all:[],any:[],none:["caption"]},{id:"autocomplete-valid",matches:"autocomplete-matches",tags:["cat.forms","wcag21aa","wcag135"],actIds:["73f2c2"],all:[{options:{stateTerms:["none","false","true","disabled","enabled","undefined","null"]},id:"autocomplete-valid"}],any:[],none:[]},{id:"avoid-inline-spacing",selector:"[style]",tags:["cat.structure","wcag21aa","wcag1412"],all:[{options:{cssProperties:["line-height","letter-spacing","word-spacing"]},id:"avoid-inline-spacing"}],any:[],none:[]},{id:"blink",selector:"blink",excludeHidden:!1,tags:["cat.time-and-media","wcag2a","wcag222","section508","section508.22.j"],all:[],any:[],none:["is-on-screen"]},{id:"button-name",selector:"button",matches:"no-explicit-name-required-matches",tags:["cat.name-role-value","wcag2a","wcag412","section508","section508.22.a","ACT"],actIds:["97a4e1","m6b1q3"],all:[],any:["button-has-visible-text","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"},"presentational-role"],none:[]},{id:"bypass",selector:"html",pageLevel:!0,matches:"bypass-matches",reviewOnFail:!0,tags:["cat.keyboard","wcag2a","wcag241","section508","section508.22.o"],all:[],any:["internal-link-present",{options:{selector:":is(h1, h2, h3, h4, h5, h6):not([role]), [role=heading]"},id:"header-present"},{options:{selector:"main, [role=main]"},id:"landmark"}],none:[]},{id:"color-contrast-enhanced",matches:"color-contrast-matches",excludeHidden:!1,enabled:!1,tags:["cat.color","wcag2aaa","wcag146"],all:[],any:[{options:{ignoreUnicode:!0,ignoreLength:!1,ignorePseudo:!1,boldValue:700,boldTextPt:14,largeTextPt:18,contrastRatio:{normal:{expected:7},large:{expected:4.5}},pseudoSizeThreshold:.25,shadowOutlineEmMax:.1},id:"color-contrast-enhanced"}],none:[]},{id:"color-contrast",matches:"color-contrast-matches",excludeHidden:!1,tags:["cat.color","wcag2aa","wcag143"],all:[],any:[{options:{ignoreUnicode:!0,ignoreLength:!1,ignorePseudo:!1,boldValue:700,boldTextPt:14,largeTextPt:18,contrastRatio:{normal:{expected:4.5},large:{expected:3}},pseudoSizeThreshold:.25,shadowOutlineEmMax:.2},id:"color-contrast"}],none:[]},{id:"css-orientation-lock",selector:"html",tags:["cat.structure","wcag134","wcag21aa","experimental"],actIds:["b33eff"],all:[{options:{degreeThreshold:2},id:"css-orientation-lock"}],any:[],none:[],preload:!0},{id:"definition-list",selector:"dl",matches:"no-role-matches",tags:["cat.structure","wcag2a","wcag131"],all:[],any:[],none:["structured-dlitems","only-dlitems"]},{id:"dlitem",selector:"dd, dt",matches:"no-role-matches",tags:["cat.structure","wcag2a","wcag131"],all:[],any:["dlitem"],none:[]},{id:"document-title",selector:"html",matches:"is-initiator-matches",tags:["cat.text-alternatives","wcag2a","wcag242","ACT"],actIds:["2779a5"],all:[],any:["doc-has-title"],none:[]},{id:"duplicate-id-active",selector:"[id]",matches:"duplicate-id-active-matches",excludeHidden:!1,tags:["cat.parsing","wcag2a","wcag411"],all:[],any:["duplicate-id-active"],none:[]},{id:"duplicate-id-aria",selector:"[id]",matches:"duplicate-id-aria-matches",excludeHidden:!1,tags:["cat.parsing","wcag2a","wcag411"],actIds:["3ea0c8"],all:[],any:["duplicate-id-aria"],none:[]},{id:"duplicate-id",selector:"[id]",matches:"duplicate-id-misc-matches",excludeHidden:!1,tags:["cat.parsing","wcag2a","wcag411"],all:[],any:["duplicate-id"],none:[]},{id:"empty-heading",selector:'h1, h2, h3, h4, h5, h6, [role="heading"]',matches:"heading-matches",tags:["cat.name-role-value","best-practice"],impact:"minor",all:[],any:["has-visible-text","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"empty-table-header",selector:'th, [role="rowheader"], [role="columnheader"]',tags:["wcag131","cat.aria"],reviewOnFail:!0,all:[],any:["has-visible-text"],none:[]},{id:"focus-order-semantics",selector:"div, h1, h2, h3, h4, h5, h6, [role=heading], p, span",matches:"inserted-into-focus-order-matches",tags:["cat.keyboard","best-practice","experimental"],all:[],any:[{options:[],id:"has-widget-role"},{options:{roles:["tooltip"]},id:"valid-scrollable-semantics"}],none:[]},{id:"form-field-multiple-labels",selector:"input, select, textarea",matches:"label-matches",tags:["cat.forms","wcag2a","wcag332"],all:[],any:[],none:["multiple-label"]},{id:"frame-focusable-content",selector:"html",matches:"frame-focusable-content-matches",tags:["cat.keyboard","wcag2a","wcag211"],all:[],any:["frame-focusable-content"],none:[]},{id:"frame-tested",selector:"html, frame, iframe",tags:["cat.structure","review-item","best-practice"],all:[{options:{isViolation:!1},id:"frame-tested"}],any:[],none:[]},{id:"frame-title-unique",selector:"frame[title], iframe[title]",matches:"frame-title-has-text-matches",tags:["cat.text-alternatives","best-practice"],all:[],any:[],none:["unique-frame-title"]},{id:"frame-title",selector:"frame, iframe",tags:["cat.text-alternatives","wcag2a","wcag241","wcag412","section508","section508.22.i"],all:[],any:[{options:{attribute:"title"},id:"non-empty-title"},"aria-label","aria-labelledby","presentational-role"],none:[]},{id:"heading-order",selector:"h1, h2, h3, h4, h5, h6, [role=heading]",matches:"heading-matches",tags:["cat.semantics","best-practice"],all:[],any:["heading-order"],none:[]},{id:"hidden-content",selector:"*",excludeHidden:!1,tags:["cat.structure","experimental","review-item","best-practice"],all:[],any:["hidden-content"],none:[]},{id:"html-has-lang",selector:"html",matches:"is-initiator-matches",tags:["cat.language","wcag2a","wcag311","ACT"],actIds:["b5c3f8"],all:[],any:[{options:{attributes:["lang","xml:lang"]},id:"has-lang"}],none:[]},{id:"html-lang-valid",selector:"html[lang], html[xml\\:lang]",tags:["cat.language","wcag2a","wcag311","ACT"],actIds:["bf051a"],all:[],any:[],none:[{options:{attributes:["lang","xml:lang"]},id:"valid-lang"}]},{id:"html-xml-lang-mismatch",selector:"html[lang][xml\\:lang]",matches:"xml-lang-mismatch-matches",tags:["cat.language","wcag2a","wcag311","ACT"],actIds:["5b7ae0"],all:["xml-lang-mismatch"],any:[],none:[]},{id:"identical-links-same-purpose",selector:'a[href], area[href], [role="link"]',excludeHidden:!1,matches:"identical-links-same-purpose-matches",tags:["cat.semantics","wcag2aaa","wcag249"],actIds:["b20e66","fd3a94"],all:["identical-links-same-purpose"],any:[],none:[]},{id:"image-alt",selector:"img",matches:"no-explicit-name-required-matches",tags:["cat.text-alternatives","wcag2a","wcag111","section508","section508.22.a","ACT"],actIds:["23a2a8"],all:[],any:["has-alt","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"},"presentational-role"],none:["alt-space-value"]},{id:"image-redundant-alt",selector:"img",tags:["cat.text-alternatives","best-practice"],all:[],any:[],none:[{options:{parentSelector:"button, [role=button], a[href], p, li, td, th"},id:"duplicate-img-label"}]},{id:"input-button-name",selector:'input[type="button"], input[type="submit"], input[type="reset"]',matches:"no-explicit-name-required-matches",tags:["cat.name-role-value","wcag2a","wcag412","section508","section508.22.a"],all:[],any:["non-empty-if-present",{options:{attribute:"value"},id:"non-empty-value"},"aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"},"presentational-role"],none:[]},{id:"input-image-alt",selector:'input[type="image"]',matches:"no-explicit-name-required-matches",tags:["cat.text-alternatives","wcag2a","wcag111","section508","section508.22.a","ACT"],actIds:["59796f"],all:[],any:[{options:{attribute:"alt"},id:"non-empty-alt"},"aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"label-content-name-mismatch",matches:"label-content-name-mismatch-matches",tags:["cat.semantics","wcag21a","wcag253","experimental"],actIds:["2ee8b8"],all:[],any:[{options:{pixelThreshold:.1,occuranceThreshold:3},id:"label-content-name-mismatch"}],none:[]},{id:"label-title-only",selector:"input, select, textarea",matches:"label-matches",tags:["cat.forms","best-practice"],all:[],any:[],none:["title-only"]},{id:"label",selector:"input, textarea",matches:"label-matches",tags:["cat.forms","wcag2a","wcag412","wcag131","section508","section508.22.n","ACT"],actIds:["e086e5","307n5z"],all:[],any:["implicit-label","explicit-label","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"},{options:{attribute:"placeholder"},id:"non-empty-placeholder"},"presentational-role"],none:["help-same-as-label","hidden-explicit-label"]},{id:"landmark-banner-is-top-level",selector:"header:not([role]), [role=banner]",matches:"landmark-has-body-context-matches",tags:["cat.semantics","best-practice"],all:[],any:["landmark-is-top-level"],none:[]},{id:"landmark-complementary-is-top-level",selector:"aside:not([role]), [role=complementary]",tags:["cat.semantics","best-practice"],all:[],any:["landmark-is-top-level"],none:[]},{id:"landmark-contentinfo-is-top-level",selector:"footer:not([role]), [role=contentinfo]",matches:"landmark-has-body-context-matches",tags:["cat.semantics","best-practice"],all:[],any:["landmark-is-top-level"],none:[]},{id:"landmark-main-is-top-level",selector:"main:not([role]), [role=main]",tags:["cat.semantics","best-practice"],all:[],any:["landmark-is-top-level"],none:[]},{id:"landmark-no-duplicate-banner",selector:"header:not([role]), [role=banner]",tags:["cat.semantics","best-practice"],all:[],any:[{options:{selector:"header:not([role]), [role=banner]",nativeScopeFilter:"article, aside, main, nav, section"},id:"page-no-duplicate-banner"}],none:[]},{id:"landmark-no-duplicate-contentinfo",selector:"footer:not([role]), [role=contentinfo]",tags:["cat.semantics","best-practice"],all:[],any:[{options:{selector:"footer:not([role]), [role=contentinfo]",nativeScopeFilter:"article, aside, main, nav, section"},id:"page-no-duplicate-contentinfo"}],none:[]},{id:"landmark-no-duplicate-main",selector:"main:not([role]), [role=main]",tags:["cat.semantics","best-practice"],all:[],any:[{options:{selector:"main:not([role]), [role='main']"},id:"page-no-duplicate-main"}],none:[]},{id:"landmark-one-main",selector:"html",tags:["cat.semantics","best-practice"],all:[{options:{selector:"main:not([role]), [role='main']"},id:"page-has-main"}],any:[],none:[]},{id:"landmark-unique",selector:"[role=banner], [role=complementary], [role=contentinfo], [role=main], [role=navigation], [role=region], [role=search], [role=form], form, footer, header, aside, main, nav, section",tags:["cat.semantics","best-practice"],matches:"landmark-unique-matches",all:[],any:["landmark-is-unique"],none:[]},{id:"link-in-text-block",selector:"a[href], [role=link]",matches:"link-in-text-block-matches",excludeHidden:!1,tags:["cat.color","experimental","wcag2a","wcag141"],all:["link-in-text-block"],any:[],none:[]},{id:"link-name",selector:"a[href]",tags:["cat.name-role-value","wcag2a","wcag412","wcag244","section508","section508.22.a","ACT"],actIds:["c487ae"],all:[],any:["has-visible-text","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:["focusable-no-name"]},{id:"list",selector:"ul, ol",matches:"no-role-matches",tags:["cat.structure","wcag2a","wcag131"],all:[],any:[],none:["only-listitems"]},{id:"listitem",selector:"li",matches:"no-role-matches",tags:["cat.structure","wcag2a","wcag131"],all:[],any:["listitem"],none:[]},{id:"marquee",selector:"marquee",excludeHidden:!1,tags:["cat.parsing","wcag2a","wcag222"],all:[],any:[],none:["is-on-screen"]},{id:"meta-refresh",selector:'meta[http-equiv="refresh"]',excludeHidden:!1,tags:["cat.time-and-media","wcag2a","wcag221","wcag224","wcag325"],all:[],any:["meta-refresh"],none:[]},{id:"meta-viewport-large",selector:'meta[name="viewport"]',matches:"is-initiator-matches",excludeHidden:!1,tags:["cat.sensory-and-visual-cues","best-practice"],all:[],any:[{options:{scaleMinimum:5,lowerBound:2},id:"meta-viewport-large"}],none:[]},{id:"meta-viewport",selector:'meta[name="viewport"]',matches:"is-initiator-matches",excludeHidden:!1,tags:["cat.sensory-and-visual-cues","best-practice","ACT"],actIds:["b4f0c3"],all:[],any:[{options:{scaleMinimum:2},id:"meta-viewport"}],none:[]},{id:"nested-interactive",matches:"nested-interactive-matches",tags:["cat.keyboard","wcag2a","wcag412"],actIds:["307n5z"],all:[],any:["no-focusable-content"],none:[]},{id:"no-autoplay-audio",excludeHidden:!1,selector:"audio[autoplay], video[autoplay]",matches:"no-autoplay-audio-matches",tags:["cat.time-and-media","wcag2a","wcag142","experimental"],actIds:["80f0bf"],preload:!0,all:[{options:{allowedDuration:3},id:"no-autoplay-audio"}],any:[],none:[]},{id:"object-alt",selector:"object",matches:"no-explicit-name-required-matches",tags:["cat.text-alternatives","wcag2a","wcag111","section508","section508.22.a"],actIds:["8fc3b6"],all:[],any:["aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"},"presentational-role"],none:[]},{id:"p-as-heading",selector:"p",matches:"p-as-heading-matches",tags:["cat.semantics","wcag2a","wcag131","experimental"],all:[{options:{margins:[{weight:150,italic:!0},{weight:150,size:1.15},{italic:!0,size:1.15},{size:1.4}],passLength:1,failLength:.5},id:"p-as-heading"}],any:[],none:[]},{id:"page-has-heading-one",selector:"html",tags:["cat.semantics","best-practice"],all:[{options:{selector:"h1:not([role], [aria-level]), :is(h1, h2, h3, h4, h5, h6):not([role])[aria-level=1], [role=heading][aria-level=1]"},id:"page-has-heading-one"}],any:[],none:[]},{id:"presentation-role-conflict",matches:"has-implicit-chromium-role-matches",selector:'[role="none"], [role="presentation"]',tags:["cat.aria","best-practice"],all:[],any:[],none:["is-element-focusable","has-global-aria-attribute"]},{id:"region",selector:"body *",tags:["cat.keyboard","best-practice"],all:[],any:[{options:{regionMatcher:"dialog, [role=dialog], [role=alertdialog], svg"},id:"region"}],none:[]},{id:"role-img-alt",selector:"[role='img']:not(img, area, input, object)",matches:"html-namespace-matches",tags:["cat.text-alternatives","wcag2a","wcag111","section508","section508.22.a","ACT"],actIds:["23a2a8"],all:[],any:["aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"scope-attr-valid",selector:"td[scope], th[scope]",tags:["cat.tables","best-practice"],all:["html5-scope",{options:{values:["row","col","rowgroup","colgroup"]},id:"scope-value"}],any:[],none:[]},{id:"scrollable-region-focusable",matches:"scrollable-region-focusable-matches",tags:["cat.keyboard","wcag2a","wcag211"],actIds:["0ssw9k"],all:[],any:["focusable-content","focusable-element"],none:[]},{id:"select-name",selector:"select",tags:["cat.forms","wcag2a","wcag412","wcag131","section508","section508.22.n","ACT"],actIds:["e086e5"],all:[],any:["implicit-label","explicit-label","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"},"presentational-role"],none:["help-same-as-label","hidden-explicit-label"]},{id:"server-side-image-map",selector:"img[ismap]",tags:["cat.text-alternatives","wcag2a","wcag211","section508","section508.22.f"],all:[],any:[],none:["exists"]},{id:"skip-link",selector:'a[href^="#"], a[href^="/#"]',matches:"skip-link-matches",tags:["cat.keyboard","best-practice"],all:[],any:["skip-link"],none:[]},{id:"svg-img-alt",selector:'[role="img"], [role="graphics-symbol"], svg[role="graphics-document"]',matches:"svg-namespace-matches",tags:["cat.text-alternatives","wcag2a","wcag111","section508","section508.22.a","ACT"],actIds:["7d6734"],all:[],any:["svg-non-empty-title","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"tabindex",selector:"[tabindex]",tags:["cat.keyboard","best-practice"],all:[],any:["tabindex"],none:[]},{id:"table-duplicate-name",selector:"table",tags:["cat.tables","best-practice"],all:[],any:[],none:["same-caption-summary"]},{id:"table-fake-caption",selector:"table",matches:"data-table-matches",tags:["cat.tables","experimental","wcag2a","wcag131","section508","section508.22.g"],all:["caption-faked"],any:[],none:[]},{id:"td-has-header",selector:"table",matches:"data-table-large-matches",tags:["cat.tables","experimental","wcag2a","wcag131","section508","section508.22.g"],all:["td-has-header"],any:[],none:[]},{id:"td-headers-attr",selector:"table",tags:["cat.tables","wcag2a","wcag131","section508","section508.22.g"],actIds:["a25f45"],all:["td-headers-attr"],any:[],none:[]},{id:"th-has-data-cells",selector:"table",matches:"data-table-matches",tags:["cat.tables","wcag2a","wcag131","section508","section508.22.g"],actIds:["d0f69e"],all:["th-has-data-cells"],any:[],none:[]},{id:"valid-lang",selector:"[lang], [xml\\:lang]",matches:"not-html-matches",tags:["cat.language","wcag2aa","wcag312"],all:[],any:[],none:[{options:{attributes:["lang","xml:lang"]},id:"valid-lang"}]},{id:"video-caption",selector:"video",excludeHidden:!1,tags:["cat.text-alternatives","wcag2a","wcag122","section508","section508.22.a"],actIds:["eac66b"],all:[],any:[],none:["caption"]}],checks:[{id:"abstractrole",evaluate:"abstractrole-evaluate"},{id:"aria-allowed-attr",evaluate:"aria-allowed-attr-evaluate",options:{validTreeRowAttrs:["aria-posinset","aria-setsize","aria-expanded","aria-level"]}},{id:"aria-allowed-role",evaluate:"aria-allowed-role-evaluate",options:{allowImplicit:!0,ignoredTags:[]}},{id:"aria-errormessage",evaluate:"aria-errormessage-evaluate"},{id:"aria-hidden-body",evaluate:"aria-hidden-body-evaluate"},{id:"aria-level",evaluate:"aria-level-evaluate"},{id:"aria-prohibited-attr",evaluate:"aria-prohibited-attr-evaluate",options:{elementsAllowedAriaLabel:["applet","input"]}},{id:"aria-required-attr",evaluate:"aria-required-attr-evaluate"},{id:"aria-required-children",evaluate:"aria-required-children-evaluate",options:{reviewEmpty:["doc-bibliography","doc-endnotes","grid","list","listbox","table","tablist","tree","treegrid","rowgroup"]}},{id:"aria-required-parent",evaluate:"aria-required-parent-evaluate",options:{ownGroupRoles:["listitem","treeitem"]}},{id:"aria-roledescription",evaluate:"aria-roledescription-evaluate",options:{supportedRoles:["button","img","checkbox","radio","combobox","menuitemcheckbox","menuitemradio"]}},{id:"aria-unsupported-attr",evaluate:"aria-unsupported-attr-evaluate"},{id:"aria-valid-attr-value",evaluate:"aria-valid-attr-value-evaluate",options:[]},{id:"aria-valid-attr",evaluate:"aria-valid-attr-evaluate",options:[]},{id:"deprecatedrole",evaluate:"deprecatedrole-evaluate"},{id:"fallbackrole",evaluate:"fallbackrole-evaluate"},{id:"has-global-aria-attribute",evaluate:"has-global-aria-attribute-evaluate"},{id:"has-widget-role",evaluate:"has-widget-role-evaluate",options:[]},{id:"invalidrole",evaluate:"invalidrole-evaluate"},{id:"is-element-focusable",evaluate:"is-element-focusable-evaluate"},{id:"no-implicit-explicit-label",evaluate:"no-implicit-explicit-label-evaluate"},{id:"unsupportedrole",evaluate:"unsupportedrole-evaluate"},{id:"valid-scrollable-semantics",evaluate:"valid-scrollable-semantics-evaluate",options:{roles:["tooltip"]}},{id:"color-contrast-enhanced",evaluate:"color-contrast-evaluate",options:{ignoreUnicode:!0,ignoreLength:!1,ignorePseudo:!1,boldValue:700,boldTextPt:14,largeTextPt:18,contrastRatio:{normal:{expected:7},large:{expected:4.5}},pseudoSizeThreshold:.25,shadowOutlineEmMax:.1}},{id:"color-contrast",evaluate:"color-contrast-evaluate",options:{ignoreUnicode:!0,ignoreLength:!1,ignorePseudo:!1,boldValue:700,boldTextPt:14,largeTextPt:18,contrastRatio:{normal:{expected:4.5},large:{expected:3}},pseudoSizeThreshold:.25,shadowOutlineEmMax:.2}},{id:"link-in-text-block",evaluate:"link-in-text-block-evaluate"},{id:"autocomplete-appropriate",evaluate:"autocomplete-appropriate-evaluate",deprecated:!0},{id:"autocomplete-valid",evaluate:"autocomplete-valid-evaluate",options:{stateTerms:["none","false","true","disabled","enabled","undefined","null"]}},{id:"accesskeys",evaluate:"accesskeys-evaluate",after:"accesskeys-after"},{id:"focusable-content",evaluate:"focusable-content-evaluate"},{id:"focusable-disabled",evaluate:"focusable-disabled-evaluate"},{id:"focusable-element",evaluate:"focusable-element-evaluate"},{id:"focusable-modal-open",evaluate:"focusable-modal-open-evaluate"},{id:"focusable-no-name",evaluate:"focusable-no-name-evaluate"},{id:"focusable-not-tabbable",evaluate:"focusable-not-tabbable-evaluate"},{id:"frame-focusable-content",evaluate:"frame-focusable-content-evaluate"},{id:"landmark-is-top-level",evaluate:"landmark-is-top-level-evaluate"},{id:"no-focusable-content",evaluate:"no-focusable-content-evaluate"},{id:"page-has-heading-one",evaluate:"has-descendant-evaluate",after:"has-descendant-after",options:{selector:"h1:not([role], [aria-level]), :is(h1, h2, h3, h4, h5, h6):not([role])[aria-level=1], [role=heading][aria-level=1]"}},{id:"page-has-main",evaluate:"has-descendant-evaluate",after:"has-descendant-after",options:{selector:"main:not([role]), [role='main']"}},{id:"page-no-duplicate-banner",evaluate:"page-no-duplicate-evaluate",after:"page-no-duplicate-after",options:{selector:"header:not([role]), [role=banner]",nativeScopeFilter:"article, aside, main, nav, section"}},{id:"page-no-duplicate-contentinfo",evaluate:"page-no-duplicate-evaluate",after:"page-no-duplicate-after",options:{selector:"footer:not([role]), [role=contentinfo]",nativeScopeFilter:"article, aside, main, nav, section"}},{id:"page-no-duplicate-main",evaluate:"page-no-duplicate-evaluate",after:"page-no-duplicate-after",options:{selector:"main:not([role]), [role='main']"}},{id:"tabindex",evaluate:"tabindex-evaluate"},{id:"alt-space-value",evaluate:"alt-space-value-evaluate"},{id:"duplicate-img-label",evaluate:"duplicate-img-label-evaluate",options:{parentSelector:"button, [role=button], a[href], p, li, td, th"}},{id:"explicit-label",evaluate:"explicit-evaluate"},{id:"help-same-as-label",evaluate:"help-same-as-label-evaluate",enabled:!1},{id:"hidden-explicit-label",evaluate:"hidden-explicit-label-evaluate"},{id:"implicit-label",evaluate:"implicit-evaluate"},{id:"label-content-name-mismatch",evaluate:"label-content-name-mismatch-evaluate",options:{pixelThreshold:.1,occuranceThreshold:3}},{id:"multiple-label",evaluate:"multiple-label-evaluate"},{id:"title-only",evaluate:"title-only-evaluate"},{id:"landmark-is-unique",evaluate:"landmark-is-unique-evaluate",after:"landmark-is-unique-after"},{id:"has-lang",evaluate:"has-lang-evaluate",options:{attributes:["lang","xml:lang"]}},{id:"valid-lang",evaluate:"valid-lang-evaluate",options:{attributes:["lang","xml:lang"]}},{id:"xml-lang-mismatch",evaluate:"xml-lang-mismatch-evaluate"},{id:"dlitem",evaluate:"dlitem-evaluate"},{id:"listitem",evaluate:"listitem-evaluate"},{id:"only-dlitems",evaluate:"only-dlitems-evaluate"},{id:"only-listitems",evaluate:"only-listitems-evaluate"},{id:"structured-dlitems",evaluate:"structured-dlitems-evaluate"},{id:"caption",evaluate:"caption-evaluate"},{id:"frame-tested",evaluate:"frame-tested-evaluate",after:"frame-tested-after",options:{isViolation:!1}},{id:"no-autoplay-audio",evaluate:"no-autoplay-audio-evaluate",options:{allowedDuration:3}},{id:"css-orientation-lock",evaluate:"css-orientation-lock-evaluate",options:{degreeThreshold:2}},{id:"meta-viewport-large",evaluate:"meta-viewport-scale-evaluate",options:{scaleMinimum:5,lowerBound:2}},{id:"meta-viewport",evaluate:"meta-viewport-scale-evaluate",options:{scaleMinimum:2}},{id:"header-present",evaluate:"has-descendant-evaluate",after:"has-descendant-after",options:{selector:":is(h1, h2, h3, h4, h5, h6):not([role]), [role=heading]"}},{id:"heading-order",evaluate:"heading-order-evaluate",after:"heading-order-after"},{id:"identical-links-same-purpose",evaluate:"identical-links-same-purpose-evaluate",after:"identical-links-same-purpose-after"},{id:"internal-link-present",evaluate:"internal-link-present-evaluate"},{id:"landmark",evaluate:"has-descendant-evaluate",options:{selector:"main, [role=main]"}},{id:"meta-refresh",evaluate:"meta-refresh-evaluate"},{id:"p-as-heading",evaluate:"p-as-heading-evaluate",options:{margins:[{weight:150,italic:!0},{weight:150,size:1.15},{italic:!0,size:1.15},{size:1.4}],passLength:1,failLength:.5}},{id:"region",evaluate:"region-evaluate",after:"region-after",options:{regionMatcher:"dialog, [role=dialog], [role=alertdialog], svg"}},{id:"skip-link",evaluate:"skip-link-evaluate"},{id:"unique-frame-title",evaluate:"unique-frame-title-evaluate",after:"unique-frame-title-after"},{id:"duplicate-id-active",evaluate:"duplicate-id-evaluate",after:"duplicate-id-after"},{id:"duplicate-id-aria",evaluate:"duplicate-id-evaluate",after:"duplicate-id-after"},{id:"duplicate-id",evaluate:"duplicate-id-evaluate",after:"duplicate-id-after"},{id:"aria-label",evaluate:"aria-label-evaluate"},{id:"aria-labelledby",evaluate:"aria-labelledby-evaluate"},{id:"avoid-inline-spacing",evaluate:"avoid-inline-spacing-evaluate",options:{cssProperties:["line-height","letter-spacing","word-spacing"]}},{id:"button-has-visible-text",evaluate:"has-text-content-evaluate"},{id:"doc-has-title",evaluate:"doc-has-title-evaluate"},{id:"exists",evaluate:"exists-evaluate"},{id:"has-alt",evaluate:"has-alt-evaluate"},{id:"has-visible-text",evaluate:"has-text-content-evaluate"},{id:"is-on-screen",evaluate:"is-on-screen-evaluate"},{id:"non-empty-alt",evaluate:"attr-non-space-content-evaluate",options:{attribute:"alt"}},{id:"non-empty-if-present",evaluate:"non-empty-if-present-evaluate"},{id:"non-empty-placeholder",evaluate:"attr-non-space-content-evaluate",options:{attribute:"placeholder"}},{id:"non-empty-title",evaluate:"attr-non-space-content-evaluate",options:{attribute:"title"}},{id:"non-empty-value",evaluate:"attr-non-space-content-evaluate",options:{attribute:"value"}},{id:"presentational-role",evaluate:"presentational-role-evaluate"},{id:"role-none",evaluate:"matches-definition-evaluate",deprecated:!0,options:{matcher:{attributes:{role:"none"}}}},{id:"role-presentation",evaluate:"matches-definition-evaluate",deprecated:!0,options:{matcher:{attributes:{role:"presentation"}}}},{id:"svg-non-empty-title",evaluate:"svg-non-empty-title-evaluate"},{id:"caption-faked",evaluate:"caption-faked-evaluate"},{id:"html5-scope",evaluate:"html5-scope-evaluate"},{id:"same-caption-summary",evaluate:"same-caption-summary-evaluate"},{id:"scope-value",evaluate:"scope-value-evaluate",options:{values:["row","col","rowgroup","colgroup"]}},{id:"td-has-header",evaluate:"td-has-header-evaluate"},{id:"td-headers-attr",evaluate:"td-headers-attr-evaluate"},{id:"th-has-data-cells",evaluate:"th-has-data-cells-evaluate"},{id:"hidden-content",evaluate:"hidden-content-evaluate"}]})}("object"==typeof window?window:this)},163:function(e,t){var n
!function(t,n){"use strict"
"object"==typeof e.exports?e.exports=t.document?n(t,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document")
return n(e)}:n(t)}("undefined"!=typeof window?window:this,(function(r,a){"use strict"
var o=[],i=Object.getPrototypeOf,s=o.slice,l=o.flat?function(e){return o.flat.call(e)}:function(e){return o.concat.apply([],e)},u=o.push,c=o.indexOf,d={},p=d.toString,f=d.hasOwnProperty,h=f.toString,m=h.call(Object),g={},v=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},y=function(e){return null!=e&&e===e.window},b=r.document,w={type:!0,src:!0,nonce:!0,noModule:!0}
function D(e,t,n){var r,a,o=(n=n||b).createElement("script")
if(o.text=e,t)for(r in w)(a=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,a)
n.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?d[p.call(e)]||"object":typeof e}var E="3.6.0",C=function(e,t){return new C.fn.init(e,t)}
function A(e){var t=!!e&&"length"in e&&e.length,n=x(e)
return!v(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}C.fn=C.prototype={jquery:E,constructor:C,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=C.merge(this.constructor(),e)
return t.prevObject=this,t},each:function(e){return C.each(this,e)},map:function(e){return this.pushStack(C.map(this,(function(t,n){return e.call(t,n,t)})))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(C.grep(this,(function(e,t){return(t+1)%2})))},odd:function(){return this.pushStack(C.grep(this,(function(e,t){return t%2})))},eq:function(e){var t=this.length,n=+e+(e<0?t:0)
return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:o.sort,splice:o.splice},C.extend=C.fn.extend=function(){var e,t,n,r,a,o,i=arguments[0]||{},s=1,l=arguments.length,u=!1
for("boolean"==typeof i&&(u=i,i=arguments[s]||{},s++),"object"==typeof i||v(i)||(i={}),s===l&&(i=this,s--);s<l;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&i!==r&&(u&&r&&(C.isPlainObject(r)||(a=Array.isArray(r)))?(n=i[t],o=a&&!Array.isArray(n)?[]:a||C.isPlainObject(n)?n:{},a=!1,i[t]=C.extend(u,o,r)):void 0!==r&&(i[t]=r))
return i},C.extend({expando:"jQuery"+(E+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n
return!(!e||"[object Object]"!==p.call(e)||(t=i(e))&&("function"!=typeof(n=f.call(t,"constructor")&&t.constructor)||h.call(n)!==m))},isEmptyObject:function(e){var t
for(t in e)return!1
return!0},globalEval:function(e,t,n){D(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0
if(A(e))for(n=e.length;r<n&&!1!==t.call(e[r],r,e[r]);r++);else for(r in e)if(!1===t.call(e[r],r,e[r]))break
return e},makeArray:function(e,t){var n=t||[]
return null!=e&&(A(Object(e))?C.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:c.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,a=e.length;r<n;r++)e[a++]=t[r]
return e.length=a,e},grep:function(e,t,n){for(var r=[],a=0,o=e.length,i=!n;a<o;a++)!t(e[a],a)!==i&&r.push(e[a])
return r},map:function(e,t,n){var r,a,o=0,i=[]
if(A(e))for(r=e.length;o<r;o++)null!=(a=t(e[o],o,n))&&i.push(a)
else for(o in e)null!=(a=t(e[o],o,n))&&i.push(a)
return l(i)},guid:1,support:g}),"function"==typeof Symbol&&(C.fn[Symbol.iterator]=o[Symbol.iterator]),C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),(function(e,t){d["[object "+t+"]"]=t.toLowerCase()}))
var k=function(e){var t,n,r,a,o,i,s,l,u,c,d,p,f,h,m,g,v,y,b,w="sizzle"+1*new Date,D=e.document,x=0,E=0,C=le(),A=le(),k=le(),T=le(),N=function(e,t){return e===t&&(d=!0),0},F={}.hasOwnProperty,R=[],S=R.pop,O=R.push,_=R.push,I=R.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n
return-1},j="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",q="(?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",L="\\[[\\x20\\t\\r\\n\\f]*("+q+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+q+"))|)"+M+"*\\]",B=":("+q+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+L+")*)|.*)\\)|)",H=new RegExp(M+"+","g"),U=new RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$","g"),z=new RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*"),$=new RegExp("^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*"),V=new RegExp(M+"|>"),W=new RegExp(B),G=new RegExp("^"+q+"$"),Y={ID:new RegExp("^#("+q+")"),CLASS:new RegExp("^\\.("+q+")"),TAG:new RegExp("^("+q+"|[*])"),ATTR:new RegExp("^"+L),PSEUDO:new RegExp("^"+B),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)","i"),bool:new RegExp("^(?:"+j+")$","i"),needsContext:new RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)","i")},Q=/HTML$/i,X=/^(?:input|select|textarea|button)$/i,K=/^h\d$/i,J=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536
return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ae=function(e,t){return t?"\0"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){p()},ie=we((function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()}),{dir:"parentNode",next:"legend"})
try{_.apply(R=I.call(D.childNodes),D.childNodes),R[D.childNodes.length].nodeType}catch(e){_={apply:R.length?function(e,t){O.apply(e,I.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}function se(e,t,r,a){var o,s,u,c,d,h,v,y=t&&t.ownerDocument,D=t?t.nodeType:9
if(r=r||[],"string"!=typeof e||!e||1!==D&&9!==D&&11!==D)return r
if(!a&&(p(t),t=t||f,m)){if(11!==D&&(d=Z.exec(e)))if(o=d[1]){if(9===D){if(!(u=t.getElementById(o)))return r
if(u.id===o)return r.push(u),r}else if(y&&(u=y.getElementById(o))&&b(t,u)&&u.id===o)return r.push(u),r}else{if(d[2])return _.apply(r,t.getElementsByTagName(e)),r
if((o=d[3])&&n.getElementsByClassName&&t.getElementsByClassName)return _.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!T[e+" "]&&(!g||!g.test(e))&&(1!==D||"object"!==t.nodeName.toLowerCase())){if(v=e,y=t,1===D&&(V.test(e)||$.test(e))){for((y=ee.test(e)&&ve(t.parentNode)||t)===t&&n.scope||((c=t.getAttribute("id"))?c=c.replace(re,ae):t.setAttribute("id",c=w)),s=(h=i(e)).length;s--;)h[s]=(c?"#"+c:":scope")+" "+be(h[s])
v=h.join(",")}try{return _.apply(r,y.querySelectorAll(v)),r}catch(t){T(e,!0)}finally{c===w&&t.removeAttribute("id")}}}return l(e.replace(U,"$1"),t,r,a)}function le(){var e=[]
return function t(n,a){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=a}}function ue(e){return e[w]=!0,e}function ce(e){var t=f.createElement("fieldset")
try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function de(e,t){for(var n=e.split("|"),a=n.length;a--;)r.attrHandle[n[a]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex
if(r)return r
if(n)for(;n=n.nextSibling;)if(n===t)return-1
return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function he(e){return function(t){var n=t.nodeName.toLowerCase()
return("input"===n||"button"===n)&&t.type===e}}function me(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function ge(e){return ue((function(t){return t=+t,ue((function(n,r){for(var a,o=e([],n.length,t),i=o.length;i--;)n[a=o[i]]&&(n[a]=!(r[a]=n[a]))}))}))}function ve(e){return e&&void 0!==e.getElementsByTagName&&e}for(t in n=se.support={},o=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement
return!Q.test(t||n&&n.nodeName||"HTML")},p=se.setDocument=function(e){var t,a,i=e?e.ownerDocument||e:D
return i!=f&&9===i.nodeType&&i.documentElement?(h=(f=i).documentElement,m=!o(f),D!=f&&(a=f.defaultView)&&a.top!==a&&(a.addEventListener?a.addEventListener("unload",oe,!1):a.attachEvent&&a.attachEvent("onunload",oe)),n.scope=ce((function(e){return h.appendChild(e).appendChild(f.createElement("div")),void 0!==e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length})),n.attributes=ce((function(e){return e.className="i",!e.getAttribute("className")})),n.getElementsByTagName=ce((function(e){return e.appendChild(f.createComment("")),!e.getElementsByTagName("*").length})),n.getElementsByClassName=J.test(f.getElementsByClassName),n.getById=ce((function(e){return h.appendChild(e).id=w,!f.getElementsByName||!f.getElementsByName(w).length})),n.getById?(r.filter.ID=function(e){var t=e.replace(te,ne)
return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if(void 0!==t.getElementById&&m){var n=t.getElementById(e)
return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(te,ne)
return function(e){var n=void 0!==e.getAttributeNode&&e.getAttributeNode("id")
return n&&n.value===t}},r.find.ID=function(e,t){if(void 0!==t.getElementById&&m){var n,r,a,o=t.getElementById(e)
if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o]
for(a=t.getElementsByName(e),r=0;o=a[r++];)if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],a=0,o=t.getElementsByTagName(e)
if("*"===e){for(;n=o[a++];)1===n.nodeType&&r.push(n)
return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if(void 0!==t.getElementsByClassName&&m)return t.getElementsByClassName(e)},v=[],g=[],(n.qsa=J.test(f.querySelectorAll))&&(ce((function(e){var t
h.appendChild(e).innerHTML="<a id='"+w+"'></a><select id='"+w+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&g.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"),e.querySelectorAll("[selected]").length||g.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|"+j+")"),e.querySelectorAll("[id~="+w+"-]").length||g.push("~="),(t=f.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||g.push("\\[[\\x20\\t\\r\\n\\f]*name[\\x20\\t\\r\\n\\f]*=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"),e.querySelectorAll(":checked").length||g.push(":checked"),e.querySelectorAll("a#"+w+"+*").length||g.push(".#.+[+~]"),e.querySelectorAll("\\\f"),g.push("[\\r\\n\\f]")})),ce((function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>"
var t=f.createElement("input")
t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&g.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&g.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")}))),(n.matchesSelector=J.test(y=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ce((function(e){n.disconnectedMatch=y.call(e,"*"),y.call(e,"[s!='']:x"),v.push("!=",B)})),g=g.length&&new RegExp(g.join("|")),v=v.length&&new RegExp(v.join("|")),t=J.test(h.compareDocumentPosition),b=t||J.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode
return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0
return!1},N=t?function(e,t){if(e===t)return d=!0,0
var r=!e.compareDocumentPosition-!t.compareDocumentPosition
return r||(1&(r=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e==f||e.ownerDocument==D&&b(D,e)?-1:t==f||t.ownerDocument==D&&b(D,t)?1:c?P(c,e)-P(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return d=!0,0
var n,r=0,a=e.parentNode,o=t.parentNode,i=[e],s=[t]
if(!a||!o)return e==f?-1:t==f?1:a?-1:o?1:c?P(c,e)-P(c,t):0
if(a===o)return pe(e,t)
for(n=e;n=n.parentNode;)i.unshift(n)
for(n=t;n=n.parentNode;)s.unshift(n)
for(;i[r]===s[r];)r++
return r?pe(i[r],s[r]):i[r]==D?-1:s[r]==D?1:0},f):f},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(p(e),n.matchesSelector&&m&&!T[t+" "]&&(!v||!v.test(t))&&(!g||!g.test(t)))try{var r=y.call(e,t)
if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){T(t,!0)}return se(t,f,null,[e]).length>0},se.contains=function(e,t){return(e.ownerDocument||e)!=f&&p(e),b(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=f&&p(e)
var a=r.attrHandle[t.toLowerCase()],o=a&&F.call(r.attrHandle,t.toLowerCase())?a(e,t,!m):void 0
return void 0!==o?o:n.attributes||!m?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},se.escape=function(e){return(e+"").replace(re,ae)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,r=[],a=0,o=0
if(d=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(N),d){for(;t=e[o++];)t===e[o]&&(a=r.push(o))
for(;a--;)e.splice(r[a],1)}return c=null,e},a=se.getText=function(e){var t,n="",r=0,o=e.nodeType
if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent
for(e=e.firstChild;e;e=e.nextSibling)n+=a(e)}else if(3===o||4===o)return e.nodeValue}else for(;t=e[r++];)n+=a(t)
return n},r=se.selectors={cacheLength:50,createPseudo:ue,match:Y,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2]
return Y.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&W.test(n)&&(t=i(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase()
return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=C[e+" "]
return t||(t=new RegExp("(^|[\\x20\\t\\r\\n\\f])"+e+"("+M+"|$)"))&&C(e,(function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")}))},ATTR:function(e,t,n){return function(r){var a=se.attr(r,e)
return null==a?"!="===t:!t||(a+="","="===t?a===n:"!="===t?a!==n:"^="===t?n&&0===a.indexOf(n):"*="===t?n&&a.indexOf(n)>-1:"$="===t?n&&a.slice(-n.length)===n:"~="===t?(" "+a.replace(H," ")+" ").indexOf(n)>-1:"|="===t&&(a===n||a.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,a){var o="nth"!==e.slice(0,3),i="last"!==e.slice(-4),s="of-type"===t
return 1===r&&0===a?function(e){return!!e.parentNode}:function(t,n,l){var u,c,d,p,f,h,m=o!==i?"nextSibling":"previousSibling",g=t.parentNode,v=s&&t.nodeName.toLowerCase(),y=!l&&!s,b=!1
if(g){if(o){for(;m;){for(p=t;p=p[m];)if(s?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1
h=m="only"===e&&!h&&"nextSibling"}return!0}if(h=[i?g.firstChild:g.lastChild],i&&y){for(b=(f=(u=(c=(d=(p=g)[w]||(p[w]={}))[p.uniqueID]||(d[p.uniqueID]={}))[e]||[])[0]===x&&u[1])&&u[2],p=f&&g.childNodes[f];p=++f&&p&&p[m]||(b=f=0)||h.pop();)if(1===p.nodeType&&++b&&p===t){c[e]=[x,f,b]
break}}else if(y&&(b=f=(u=(c=(d=(p=t)[w]||(p[w]={}))[p.uniqueID]||(d[p.uniqueID]={}))[e]||[])[0]===x&&u[1]),!1===b)for(;(p=++f&&p&&p[m]||(b=f=0)||h.pop())&&((s?p.nodeName.toLowerCase()!==v:1!==p.nodeType)||!++b||(y&&((c=(d=p[w]||(p[w]={}))[p.uniqueID]||(d[p.uniqueID]={}))[e]=[x,b]),p!==t)););return(b-=a)===r||b%r==0&&b/r>=0}}},PSEUDO:function(e,t){var n,a=r.pseudos[e]||r.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e)
return a[w]?a(t):a.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?ue((function(e,n){for(var r,o=a(e,t),i=o.length;i--;)e[r=P(e,o[i])]=!(n[r]=o[i])})):function(e){return a(e,0,n)}):a}},pseudos:{not:ue((function(e){var t=[],n=[],r=s(e.replace(U,"$1"))
return r[w]?ue((function(e,t,n,a){for(var o,i=r(e,null,a,[]),s=e.length;s--;)(o=i[s])&&(e[s]=!(t[s]=o))})):function(e,a,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}})),has:ue((function(e){return function(t){return se(e,t).length>0}})),contains:ue((function(e){return e=e.replace(te,ne),function(t){return(t.textContent||a(t)).indexOf(e)>-1}})),lang:ue((function(e){return G.test(e||"")||se.error("unsupported lang: "+e),e=e.replace(te,ne).toLowerCase(),function(t){var n
do{if(n=m?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType)
return!1}})),target:function(t){var n=e.location&&e.location.hash
return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:me(!1),disabled:me(!0),checked:function(e){var t=e.nodeName.toLowerCase()
return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1
return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return K.test(e.nodeName)},input:function(e){return X.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase()
return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t
return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ge((function(){return[0]})),last:ge((function(e,t){return[t-1]})),eq:ge((function(e,t,n){return[n<0?n+t:n]})),even:ge((function(e,t){for(var n=0;n<t;n+=2)e.push(n)
return e})),odd:ge((function(e,t){for(var n=1;n<t;n+=2)e.push(n)
return e})),lt:ge((function(e,t,n){for(var r=n<0?n+t:n>t?t:n;--r>=0;)e.push(r)
return e})),gt:ge((function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r)
return e}))}},r.pseudos.nth=r.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t)
for(t in{submit:!0,reset:!0})r.pseudos[t]=he(t)
function ye(){}function be(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value
return r}function we(e,t,n){var r=t.dir,a=t.next,o=a||r,i=n&&"parentNode"===o,s=E++
return t.first?function(t,n,a){for(;t=t[r];)if(1===t.nodeType||i)return e(t,n,a)
return!1}:function(t,n,l){var u,c,d,p=[x,s]
if(l){for(;t=t[r];)if((1===t.nodeType||i)&&e(t,n,l))return!0}else for(;t=t[r];)if(1===t.nodeType||i)if(c=(d=t[w]||(t[w]={}))[t.uniqueID]||(d[t.uniqueID]={}),a&&a===t.nodeName.toLowerCase())t=t[r]||t
else{if((u=c[o])&&u[0]===x&&u[1]===s)return p[2]=u[2]
if(c[o]=p,p[2]=e(t,n,l))return!0}return!1}}function De(e){return e.length>1?function(t,n,r){for(var a=e.length;a--;)if(!e[a](t,n,r))return!1
return!0}:e[0]}function xe(e,t,n,r,a){for(var o,i=[],s=0,l=e.length,u=null!=t;s<l;s++)(o=e[s])&&(n&&!n(o,r,a)||(i.push(o),u&&t.push(s)))
return i}function Ee(e,t,n,r,a,o){return r&&!r[w]&&(r=Ee(r)),a&&!a[w]&&(a=Ee(a,o)),ue((function(o,i,s,l){var u,c,d,p=[],f=[],h=i.length,m=o||function(e,t,n){for(var r=0,a=t.length;r<a;r++)se(e,t[r],n)
return n}(t||"*",s.nodeType?[s]:s,[]),g=!e||!o&&t?m:xe(m,p,e,s,l),v=n?a||(o?e:h||r)?[]:i:g
if(n&&n(g,v,s,l),r)for(u=xe(v,f),r(u,[],s,l),c=u.length;c--;)(d=u[c])&&(v[f[c]]=!(g[f[c]]=d))
if(o){if(a||e){if(a){for(u=[],c=v.length;c--;)(d=v[c])&&u.push(g[c]=d)
a(null,v=[],u,l)}for(c=v.length;c--;)(d=v[c])&&(u=a?P(o,d):p[c])>-1&&(o[u]=!(i[u]=d))}}else v=xe(v===i?v.splice(h,v.length):v),a?a(null,i,v,l):_.apply(i,v)}))}function Ce(e){for(var t,n,a,o=e.length,i=r.relative[e[0].type],s=i||r.relative[" "],l=i?1:0,c=we((function(e){return e===t}),s,!0),d=we((function(e){return P(t,e)>-1}),s,!0),p=[function(e,n,r){var a=!i&&(r||n!==u)||((t=n).nodeType?c(e,n,r):d(e,n,r))
return t=null,a}];l<o;l++)if(n=r.relative[e[l].type])p=[we(De(p),n)]
else{if((n=r.filter[e[l].type].apply(null,e[l].matches))[w]){for(a=++l;a<o&&!r.relative[e[a].type];a++);return Ee(l>1&&De(p),l>1&&be(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(U,"$1"),n,l<a&&Ce(e.slice(l,a)),a<o&&Ce(e=e.slice(a)),a<o&&be(e))}p.push(n)}return De(p)}return ye.prototype=r.filters=r.pseudos,r.setFilters=new ye,i=se.tokenize=function(e,t){var n,a,o,i,s,l,u,c=A[e+" "]
if(c)return t?0:c.slice(0)
for(s=e,l=[],u=r.preFilter;s;){for(i in n&&!(a=z.exec(s))||(a&&(s=s.slice(a[0].length)||s),l.push(o=[])),n=!1,(a=$.exec(s))&&(n=a.shift(),o.push({value:n,type:a[0].replace(U," ")}),s=s.slice(n.length)),r.filter)!(a=Y[i].exec(s))||u[i]&&!(a=u[i](a))||(n=a.shift(),o.push({value:n,type:i,matches:a}),s=s.slice(n.length))
if(!n)break}return t?s.length:s?se.error(e):A(e,l).slice(0)},s=se.compile=function(e,t){var n,a=[],o=[],s=k[e+" "]
if(!s){for(t||(t=i(e)),n=t.length;n--;)(s=Ce(t[n]))[w]?a.push(s):o.push(s)
s=k(e,function(e,t){var n=t.length>0,a=e.length>0,o=function(o,i,s,l,c){var d,h,g,v=0,y="0",b=o&&[],w=[],D=u,E=o||a&&r.find.TAG("*",c),C=x+=null==D?1:Math.random()||.1,A=E.length
for(c&&(u=i==f||i||c);y!==A&&null!=(d=E[y]);y++){if(a&&d){for(h=0,i||d.ownerDocument==f||(p(d),s=!m);g=e[h++];)if(g(d,i||f,s)){l.push(d)
break}c&&(x=C)}n&&((d=!g&&d)&&v--,o&&b.push(d))}if(v+=y,n&&y!==v){for(h=0;g=t[h++];)g(b,w,i,s)
if(o){if(v>0)for(;y--;)b[y]||w[y]||(w[y]=S.call(l))
w=xe(w)}_.apply(l,w),c&&!o&&w.length>0&&v+t.length>1&&se.uniqueSort(l)}return c&&(x=C,u=D),b}
return n?ue(o):o}(o,a)),s.selector=e}return s},l=se.select=function(e,t,n,a){var o,l,u,c,d,p="function"==typeof e&&e,f=!a&&i(e=p.selector||e)
if(n=n||[],1===f.length){if((l=f[0]=f[0].slice(0)).length>2&&"ID"===(u=l[0]).type&&9===t.nodeType&&m&&r.relative[l[1].type]){if(!(t=(r.find.ID(u.matches[0].replace(te,ne),t)||[])[0]))return n
p&&(t=t.parentNode),e=e.slice(l.shift().value.length)}for(o=Y.needsContext.test(e)?0:l.length;o--&&(u=l[o],!r.relative[c=u.type]);)if((d=r.find[c])&&(a=d(u.matches[0].replace(te,ne),ee.test(l[0].type)&&ve(t.parentNode)||t))){if(l.splice(o,1),!(e=a.length&&be(l)))return _.apply(n,a),n
break}}return(p||s(e,f))(a,t,!m,n,!t||ee.test(e)&&ve(t.parentNode)||t),n},n.sortStable=w.split("").sort(N).join("")===w,n.detectDuplicates=!!d,p(),n.sortDetached=ce((function(e){return 1&e.compareDocumentPosition(f.createElement("fieldset"))})),ce((function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")}))||de("type|href|height|width",(function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)})),n.attributes&&ce((function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")}))||de("value",(function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue})),ce((function(e){return null==e.getAttribute("disabled")}))||de(j,(function(e,t,n){var r
if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null})),se}(r)
C.find=k,C.expr=k.selectors,C.expr[":"]=C.expr.pseudos,C.uniqueSort=C.unique=k.uniqueSort,C.text=k.getText,C.isXMLDoc=k.isXML,C.contains=k.contains,C.escapeSelector=k.escape
var T=function(e,t,n){for(var r=[],a=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(a&&C(e).is(n))break
r.push(e)}return r},N=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e)
return n},F=C.expr.match.needsContext
function R(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var S=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i
function O(e,t,n){return v(t)?C.grep(e,(function(e,r){return!!t.call(e,r,e)!==n})):t.nodeType?C.grep(e,(function(e){return e===t!==n})):"string"!=typeof t?C.grep(e,(function(e){return c.call(t,e)>-1!==n})):C.filter(t,e,n)}C.filter=function(e,t,n){var r=t[0]
return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?C.find.matchesSelector(r,e)?[r]:[]:C.find.matches(e,C.grep(t,(function(e){return 1===e.nodeType})))},C.fn.extend({find:function(e){var t,n,r=this.length,a=this
if("string"!=typeof e)return this.pushStack(C(e).filter((function(){for(t=0;t<r;t++)if(C.contains(a[t],this))return!0})))
for(n=this.pushStack([]),t=0;t<r;t++)C.find(e,a[t],n)
return r>1?C.uniqueSort(n):n},filter:function(e){return this.pushStack(O(this,e||[],!1))},not:function(e){return this.pushStack(O(this,e||[],!0))},is:function(e){return!!O(this,"string"==typeof e&&F.test(e)?C(e):e||[],!1).length}})
var _,I=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(C.fn.init=function(e,t,n){var r,a
if(!e)return this
if(n=n||_,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:I.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e)
if(r[1]){if(t=t instanceof C?t[0]:t,C.merge(this,C.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:b,!0)),S.test(r[1])&&C.isPlainObject(t))for(r in t)v(this[r])?this[r](t[r]):this.attr(r,t[r])
return this}return(a=b.getElementById(r[2]))&&(this[0]=a,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):v(e)?void 0!==n.ready?n.ready(e):e(C):C.makeArray(e,this)}).prototype=C.fn,_=C(b)
var P=/^(?:parents|prev(?:Until|All))/,j={children:!0,contents:!0,next:!0,prev:!0}
function M(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}C.fn.extend({has:function(e){var t=C(e,this),n=t.length
return this.filter((function(){for(var e=0;e<n;e++)if(C.contains(this,t[e]))return!0}))},closest:function(e,t){var n,r=0,a=this.length,o=[],i="string"!=typeof e&&C(e)
if(!F.test(e))for(;r<a;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(i?i.index(n)>-1:1===n.nodeType&&C.find.matchesSelector(n,e))){o.push(n)
break}return this.pushStack(o.length>1?C.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?c.call(C(e),this[0]):c.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(C.uniqueSort(C.merge(this.get(),C(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),C.each({parent:function(e){var t=e.parentNode
return t&&11!==t.nodeType?t:null},parents:function(e){return T(e,"parentNode")},parentsUntil:function(e,t,n){return T(e,"parentNode",n)},next:function(e){return M(e,"nextSibling")},prev:function(e){return M(e,"previousSibling")},nextAll:function(e){return T(e,"nextSibling")},prevAll:function(e){return T(e,"previousSibling")},nextUntil:function(e,t,n){return T(e,"nextSibling",n)},prevUntil:function(e,t,n){return T(e,"previousSibling",n)},siblings:function(e){return N((e.parentNode||{}).firstChild,e)},children:function(e){return N(e.firstChild)},contents:function(e){return null!=e.contentDocument&&i(e.contentDocument)?e.contentDocument:(R(e,"template")&&(e=e.content||e),C.merge([],e.childNodes))}},(function(e,t){C.fn[e]=function(n,r){var a=C.map(this,t,n)
return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(a=C.filter(r,a)),this.length>1&&(j[e]||C.uniqueSort(a),P.test(e)&&a.reverse()),this.pushStack(a)}}))
var q=/[^\x20\t\r\n\f]+/g
function L(e){return e}function B(e){throw e}function H(e,t,n,r){var a
try{e&&v(a=e.promise)?a.call(e).done(t).fail(n):e&&v(a=e.then)?a.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}C.Callbacks=function(e){e="string"==typeof e?function(e){var t={}
return C.each(e.match(q)||[],(function(e,n){t[n]=!0})),t}(e):C.extend({},e)
var t,n,r,a,o=[],i=[],s=-1,l=function(){for(a=a||e.once,r=t=!0;i.length;s=-1)for(n=i.shift();++s<o.length;)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1)
e.memory||(n=!1),t=!1,a&&(o=n?[]:"")},u={add:function(){return o&&(n&&!t&&(s=o.length-1,i.push(n)),function t(n){C.each(n,(function(n,r){v(r)?e.unique&&u.has(r)||o.push(r):r&&r.length&&"string"!==x(r)&&t(r)}))}(arguments),n&&!t&&l()),this},remove:function(){return C.each(arguments,(function(e,t){for(var n;(n=C.inArray(t,o,n))>-1;)o.splice(n,1),n<=s&&s--})),this},has:function(e){return e?C.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return a=i=[],o=n="",this},disabled:function(){return!o},lock:function(){return a=i=[],n||t||(o=n=""),this},locked:function(){return!!a},fireWith:function(e,n){return a||(n=[e,(n=n||[]).slice?n.slice():n],i.push(n),t||l()),this},fire:function(){return u.fireWith(this,arguments),this},fired:function(){return!!r}}
return u},C.extend({Deferred:function(e){var t=[["notify","progress",C.Callbacks("memory"),C.Callbacks("memory"),2],["resolve","done",C.Callbacks("once memory"),C.Callbacks("once memory"),0,"resolved"],["reject","fail",C.Callbacks("once memory"),C.Callbacks("once memory"),1,"rejected"]],n="pending",a={state:function(){return n},always:function(){return o.done(arguments).fail(arguments),this},catch:function(e){return a.then(null,e)},pipe:function(){var e=arguments
return C.Deferred((function(n){C.each(t,(function(t,r){var a=v(e[r[4]])&&e[r[4]]
o[r[1]]((function(){var e=a&&a.apply(this,arguments)
e&&v(e.promise)?e.promise().progress(n.notify).done(n.resolve).fail(n.reject):n[r[0]+"With"](this,a?[e]:arguments)}))})),e=null})).promise()},then:function(e,n,a){var o=0
function i(e,t,n,a){return function(){var s=this,l=arguments,u=function(){var r,u
if(!(e<o)){if((r=n.apply(s,l))===t.promise())throw new TypeError("Thenable self-resolution")
u=r&&("object"==typeof r||"function"==typeof r)&&r.then,v(u)?a?u.call(r,i(o,t,L,a),i(o,t,B,a)):(o++,u.call(r,i(o,t,L,a),i(o,t,B,a),i(o,t,L,t.notifyWith))):(n!==L&&(s=void 0,l=[r]),(a||t.resolveWith)(s,l))}},c=a?u:function(){try{u()}catch(r){C.Deferred.exceptionHook&&C.Deferred.exceptionHook(r,c.stackTrace),e+1>=o&&(n!==B&&(s=void 0,l=[r]),t.rejectWith(s,l))}}
e?c():(C.Deferred.getStackHook&&(c.stackTrace=C.Deferred.getStackHook()),r.setTimeout(c))}}return C.Deferred((function(r){t[0][3].add(i(0,r,v(a)?a:L,r.notifyWith)),t[1][3].add(i(0,r,v(e)?e:L)),t[2][3].add(i(0,r,v(n)?n:B))})).promise()},promise:function(e){return null!=e?C.extend(e,a):a}},o={}
return C.each(t,(function(e,r){var i=r[2],s=r[5]
a[r[1]]=i.add,s&&i.add((function(){n=s}),t[3-e][2].disable,t[3-e][3].disable,t[0][2].lock,t[0][3].lock),i.add(r[3].fire),o[r[0]]=function(){return o[r[0]+"With"](this===o?void 0:this,arguments),this},o[r[0]+"With"]=i.fireWith})),a.promise(o),e&&e.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),a=s.call(arguments),o=C.Deferred(),i=function(e){return function(n){r[e]=this,a[e]=arguments.length>1?s.call(arguments):n,--t||o.resolveWith(r,a)}}
if(t<=1&&(H(e,o.done(i(n)).resolve,o.reject,!t),"pending"===o.state()||v(a[n]&&a[n].then)))return o.then()
for(;n--;)H(a[n],i(n),o.reject)
return o.promise()}})
var U=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/
C.Deferred.exceptionHook=function(e,t){r.console&&r.console.warn&&e&&U.test(e.name)&&r.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},C.readyException=function(e){r.setTimeout((function(){throw e}))}
var z=C.Deferred()
function $(){b.removeEventListener("DOMContentLoaded",$),r.removeEventListener("load",$),C.ready()}C.fn.ready=function(e){return z.then(e).catch((function(e){C.readyException(e)})),this},C.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--C.readyWait:C.isReady)||(C.isReady=!0,!0!==e&&--C.readyWait>0||z.resolveWith(b,[C]))}}),C.ready.then=z.then,"complete"===b.readyState||"loading"!==b.readyState&&!b.documentElement.doScroll?r.setTimeout(C.ready):(b.addEventListener("DOMContentLoaded",$),r.addEventListener("load",$))
var V=function(e,t,n,r,a,o,i){var s=0,l=e.length,u=null==n
if("object"===x(n))for(s in a=!0,n)V(e,t,s,n[s],!0,o,i)
else if(void 0!==r&&(a=!0,v(r)||(i=!0),u&&(i?(t.call(e,r),t=null):(u=t,t=function(e,t,n){return u.call(C(e),n)})),t))for(;s<l;s++)t(e[s],n,i?r:r.call(e[s],s,t(e[s],n)))
return a?e:u?t.call(e):l?t(e[0],n):o},W=/^-ms-/,G=/-([a-z])/g
function Y(e,t){return t.toUpperCase()}function Q(e){return e.replace(W,"ms-").replace(G,Y)}var X=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType}
function K(){this.expando=C.expando+K.uid++}K.uid=1,K.prototype={cache:function(e){var t=e[this.expando]
return t||(t={},X(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,a=this.cache(e)
if("string"==typeof t)a[Q(t)]=n
else for(r in t)a[Q(r)]=t[r]
return a},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][Q(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando]
if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(Q):(t=Q(t))in r?[t]:t.match(q)||[]).length
for(;n--;)delete r[t[n]]}(void 0===t||C.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando]
return void 0!==t&&!C.isEmptyObject(t)}}
var J=new K,Z=new K,ee=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,te=/[A-Z]/g
function ne(e,t,n){var r
if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(te,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=function(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:ee.test(e)?JSON.parse(e):e)}(n)}catch(e){}Z.set(e,t,n)}else n=void 0
return n}C.extend({hasData:function(e){return Z.hasData(e)||J.hasData(e)},data:function(e,t,n){return Z.access(e,t,n)},removeData:function(e,t){Z.remove(e,t)},_data:function(e,t,n){return J.access(e,t,n)},_removeData:function(e,t){J.remove(e,t)}}),C.fn.extend({data:function(e,t){var n,r,a,o=this[0],i=o&&o.attributes
if(void 0===e){if(this.length&&(a=Z.get(o),1===o.nodeType&&!J.get(o,"hasDataAttrs"))){for(n=i.length;n--;)i[n]&&0===(r=i[n].name).indexOf("data-")&&(r=Q(r.slice(5)),ne(o,r,a[r]))
J.set(o,"hasDataAttrs",!0)}return a}return"object"==typeof e?this.each((function(){Z.set(this,e)})):V(this,(function(t){var n
if(o&&void 0===t)return void 0!==(n=Z.get(o,e))||void 0!==(n=ne(o,e))?n:void 0
this.each((function(){Z.set(this,e,t)}))}),null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each((function(){Z.remove(this,e)}))}}),C.extend({queue:function(e,t,n){var r
if(e)return t=(t||"fx")+"queue",r=J.get(e,t),n&&(!r||Array.isArray(n)?r=J.access(e,t,C.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx"
var n=C.queue(e,t),r=n.length,a=n.shift(),o=C._queueHooks(e,t)
"inprogress"===a&&(a=n.shift(),r--),a&&("fx"===t&&n.unshift("inprogress"),delete o.stop,a.call(e,(function(){C.dequeue(e,t)}),o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks"
return J.get(e,n)||J.access(e,n,{empty:C.Callbacks("once memory").add((function(){J.remove(e,[t+"queue",n])}))})}}),C.fn.extend({queue:function(e,t){var n=2
return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?C.queue(this[0],e):void 0===t?this:this.each((function(){var n=C.queue(this,e,t)
C._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&C.dequeue(this,e)}))},dequeue:function(e){return this.each((function(){C.dequeue(this,e)}))},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,a=C.Deferred(),o=this,i=this.length,s=function(){--r||a.resolveWith(o,[o])}
for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";i--;)(n=J.get(o[i],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s))
return s(),a.promise(t)}})
var re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ae=new RegExp("^(?:([+-])=|)("+re+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],ie=b.documentElement,se=function(e){return C.contains(e.ownerDocument,e)},le={composed:!0}
ie.getRootNode&&(se=function(e){return C.contains(e.ownerDocument,e)||e.getRootNode(le)===e.ownerDocument})
var ue=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&se(e)&&"none"===C.css(e,"display")}
function ce(e,t,n,r){var a,o,i=20,s=r?function(){return r.cur()}:function(){return C.css(e,t,"")},l=s(),u=n&&n[3]||(C.cssNumber[t]?"":"px"),c=e.nodeType&&(C.cssNumber[t]||"px"!==u&&+l)&&ae.exec(C.css(e,t))
if(c&&c[3]!==u){for(l/=2,u=u||c[3],c=+l||1;i--;)C.style(e,t,c+u),(1-o)*(1-(o=s()/l||.5))<=0&&(i=0),c/=o
c*=2,C.style(e,t,c+u),n=n||[]}return n&&(c=+c||+l||0,a=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=u,r.start=c,r.end=a)),a}var de={}
function pe(e){var t,n=e.ownerDocument,r=e.nodeName,a=de[r]
return a||(t=n.body.appendChild(n.createElement(r)),a=C.css(t,"display"),t.parentNode.removeChild(t),"none"===a&&(a="block"),de[r]=a,a)}function fe(e,t){for(var n,r,a=[],o=0,i=e.length;o<i;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(a[o]=J.get(r,"display")||null,a[o]||(r.style.display="")),""===r.style.display&&ue(r)&&(a[o]=pe(r))):"none"!==n&&(a[o]="none",J.set(r,"display",n)))
for(o=0;o<i;o++)null!=a[o]&&(e[o].style.display=a[o])
return e}C.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each((function(){ue(this)?C(this).show():C(this).hide()}))}})
var he,me,ge=/^(?:checkbox|radio)$/i,ve=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,ye=/^$|^module$|\/(?:java|ecma)script/i
he=b.createDocumentFragment().appendChild(b.createElement("div")),(me=b.createElement("input")).setAttribute("type","radio"),me.setAttribute("checked","checked"),me.setAttribute("name","t"),he.appendChild(me),g.checkClone=he.cloneNode(!0).cloneNode(!0).lastChild.checked,he.innerHTML="<textarea>x</textarea>",g.noCloneChecked=!!he.cloneNode(!0).lastChild.defaultValue,he.innerHTML="<option></option>",g.option=!!he.lastChild
var be={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]}
function we(e,t){var n
return n=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&R(e,t)?C.merge([e],n):n}function De(e,t){for(var n=0,r=e.length;n<r;n++)J.set(e[n],"globalEval",!t||J.get(t[n],"globalEval"))}be.tbody=be.tfoot=be.colgroup=be.caption=be.thead,be.th=be.td,g.option||(be.optgroup=be.option=[1,"<select multiple='multiple'>","</select>"])
var xe=/<|&#?\w+;/
function Ee(e,t,n,r,a){for(var o,i,s,l,u,c,d=t.createDocumentFragment(),p=[],f=0,h=e.length;f<h;f++)if((o=e[f])||0===o)if("object"===x(o))C.merge(p,o.nodeType?[o]:o)
else if(xe.test(o)){for(i=i||d.appendChild(t.createElement("div")),s=(ve.exec(o)||["",""])[1].toLowerCase(),l=be[s]||be._default,i.innerHTML=l[1]+C.htmlPrefilter(o)+l[2],c=l[0];c--;)i=i.lastChild
C.merge(p,i.childNodes),(i=d.firstChild).textContent=""}else p.push(t.createTextNode(o))
for(d.textContent="",f=0;o=p[f++];)if(r&&C.inArray(o,r)>-1)a&&a.push(o)
else if(u=se(o),i=we(d.appendChild(o),"script"),u&&De(i),n)for(c=0;o=i[c++];)ye.test(o.type||"")&&n.push(o)
return d}var Ce=/^([^.]*)(?:\.(.+)|)/
function Ae(){return!0}function ke(){return!1}function Te(e,t){return e===function(){try{return b.activeElement}catch(e){}}()==("focus"===t)}function Ne(e,t,n,r,a,o){var i,s
if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ne(e,s,n,r,t[s],o)
return e}if(null==r&&null==a?(a=n,r=n=void 0):null==a&&("string"==typeof n?(a=r,r=void 0):(a=r,r=n,n=void 0)),!1===a)a=ke
else if(!a)return e
return 1===o&&(i=a,a=function(e){return C().off(e),i.apply(this,arguments)},a.guid=i.guid||(i.guid=C.guid++)),e.each((function(){C.event.add(this,t,a,r,n)}))}function Fe(e,t,n){n?(J.set(e,t,!1),C.event.add(e,t,{namespace:!1,handler:function(e){var r,a,o=J.get(this,t)
if(1&e.isTrigger&&this[t]){if(o.length)(C.event.special[t]||{}).delegateType&&e.stopPropagation()
else if(o=s.call(arguments),J.set(this,t,o),r=n(this,t),this[t](),o!==(a=J.get(this,t))||r?J.set(this,t,!1):a={},o!==a)return e.stopImmediatePropagation(),e.preventDefault(),a&&a.value}else o.length&&(J.set(this,t,{value:C.event.trigger(C.extend(o[0],C.Event.prototype),o.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===J.get(e,t)&&C.event.add(e,t,Ae)}C.event={global:{},add:function(e,t,n,r,a){var o,i,s,l,u,c,d,p,f,h,m,g=J.get(e)
if(X(e))for(n.handler&&(n=(o=n).handler,a=o.selector),a&&C.find.matchesSelector(ie,a),n.guid||(n.guid=C.guid++),(l=g.events)||(l=g.events=Object.create(null)),(i=g.handle)||(i=g.handle=function(t){return void 0!==C&&C.event.triggered!==t.type?C.event.dispatch.apply(e,arguments):void 0}),u=(t=(t||"").match(q)||[""]).length;u--;)f=m=(s=Ce.exec(t[u])||[])[1],h=(s[2]||"").split(".").sort(),f&&(d=C.event.special[f]||{},f=(a?d.delegateType:d.bindType)||f,d=C.event.special[f]||{},c=C.extend({type:f,origType:m,data:r,handler:n,guid:n.guid,selector:a,needsContext:a&&C.expr.match.needsContext.test(a),namespace:h.join(".")},o),(p=l[f])||((p=l[f]=[]).delegateCount=0,d.setup&&!1!==d.setup.call(e,r,h,i)||e.addEventListener&&e.addEventListener(f,i)),d.add&&(d.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),a?p.splice(p.delegateCount++,0,c):p.push(c),C.event.global[f]=!0)},remove:function(e,t,n,r,a){var o,i,s,l,u,c,d,p,f,h,m,g=J.hasData(e)&&J.get(e)
if(g&&(l=g.events)){for(u=(t=(t||"").match(q)||[""]).length;u--;)if(f=m=(s=Ce.exec(t[u])||[])[1],h=(s[2]||"").split(".").sort(),f){for(d=C.event.special[f]||{},p=l[f=(r?d.delegateType:d.bindType)||f]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=o=p.length;o--;)c=p[o],!a&&m!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,d.remove&&d.remove.call(e,c))
i&&!p.length&&(d.teardown&&!1!==d.teardown.call(e,h,g.handle)||C.removeEvent(e,f,g.handle),delete l[f])}else for(f in l)C.event.remove(e,f+t[u],n,r,!0)
C.isEmptyObject(l)&&J.remove(e,"handle events")}},dispatch:function(e){var t,n,r,a,o,i,s=new Array(arguments.length),l=C.event.fix(e),u=(J.get(this,"events")||Object.create(null))[l.type]||[],c=C.event.special[l.type]||{}
for(s[0]=l,t=1;t<arguments.length;t++)s[t]=arguments[t]
if(l.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,l)){for(i=C.event.handlers.call(this,l,u),t=0;(a=i[t++])&&!l.isPropagationStopped();)for(l.currentTarget=a.elem,n=0;(o=a.handlers[n++])&&!l.isImmediatePropagationStopped();)l.rnamespace&&!1!==o.namespace&&!l.rnamespace.test(o.namespace)||(l.handleObj=o,l.data=o.data,void 0!==(r=((C.event.special[o.origType]||{}).handle||o.handler).apply(a.elem,s))&&!1===(l.result=r)&&(l.preventDefault(),l.stopPropagation()))
return c.postDispatch&&c.postDispatch.call(this,l),l.result}},handlers:function(e,t){var n,r,a,o,i,s=[],l=t.delegateCount,u=e.target
if(l&&u.nodeType&&!("click"===e.type&&e.button>=1))for(;u!==this;u=u.parentNode||this)if(1===u.nodeType&&("click"!==e.type||!0!==u.disabled)){for(o=[],i={},n=0;n<l;n++)void 0===i[a=(r=t[n]).selector+" "]&&(i[a]=r.needsContext?C(a,this).index(u)>-1:C.find(a,this,null,[u]).length),i[a]&&o.push(r)
o.length&&s.push({elem:u,handlers:o})}return u=this,l<t.length&&s.push({elem:u,handlers:t.slice(l)}),s},addProp:function(e,t){Object.defineProperty(C.Event.prototype,e,{enumerable:!0,configurable:!0,get:v(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[C.expando]?e:new C.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e
return ge.test(t.type)&&t.click&&R(t,"input")&&Fe(t,"click",Ae),!1},trigger:function(e){var t=this||e
return ge.test(t.type)&&t.click&&R(t,"input")&&Fe(t,"click"),!0},_default:function(e){var t=e.target
return ge.test(t.type)&&t.click&&R(t,"input")&&J.get(t,"click")||R(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},C.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},C.Event=function(e,t){if(!(this instanceof C.Event))return new C.Event(e,t)
e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ae:ke,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&C.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[C.expando]=!0},C.Event.prototype={constructor:C.Event,isDefaultPrevented:ke,isPropagationStopped:ke,isImmediatePropagationStopped:ke,isSimulated:!1,preventDefault:function(){var e=this.originalEvent
this.isDefaultPrevented=Ae,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent
this.isPropagationStopped=Ae,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent
this.isImmediatePropagationStopped=Ae,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},C.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},C.event.addProp),C.each({focus:"focusin",blur:"focusout"},(function(e,t){C.event.special[e]={setup:function(){return Fe(this,e,Te),!1},trigger:function(){return Fe(this,e),!0},_default:function(){return!0},delegateType:t}})),C.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},(function(e,t){C.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,a=e.relatedTarget,o=e.handleObj
return a&&(a===r||C.contains(r,a))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}})),C.fn.extend({on:function(e,t,n,r){return Ne(this,e,t,n,r)},one:function(e,t,n,r){return Ne(this,e,t,n,r,1)},off:function(e,t,n){var r,a
if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,C(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this
if("object"==typeof e){for(a in e)this.off(a,t,e[a])
return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=ke),this.each((function(){C.event.remove(this,e,n,t)}))}})
var Re=/<script|<style|<link/i,Se=/checked\s*(?:[^=]|=\s*.checked.)/i,Oe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
function _e(e,t){return R(e,"table")&&R(11!==t.nodeType?t:t.firstChild,"tr")&&C(e).children("tbody")[0]||e}function Ie(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Pe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function je(e,t){var n,r,a,o,i,s
if(1===t.nodeType){if(J.hasData(e)&&(s=J.get(e).events))for(a in J.remove(t,"handle events"),s)for(n=0,r=s[a].length;n<r;n++)C.event.add(t,a,s[a][n])
Z.hasData(e)&&(o=Z.access(e),i=C.extend({},o),Z.set(t,i))}}function Me(e,t){var n=t.nodeName.toLowerCase()
"input"===n&&ge.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function qe(e,t,n,r){t=l(t)
var a,o,i,s,u,c,d=0,p=e.length,f=p-1,h=t[0],m=v(h)
if(m||p>1&&"string"==typeof h&&!g.checkClone&&Se.test(h))return e.each((function(a){var o=e.eq(a)
m&&(t[0]=h.call(this,a,o.html())),qe(o,t,n,r)}))
if(p&&(o=(a=Ee(t,e[0].ownerDocument,!1,e,r)).firstChild,1===a.childNodes.length&&(a=o),o||r)){for(s=(i=C.map(we(a,"script"),Ie)).length;d<p;d++)u=a,d!==f&&(u=C.clone(u,!0,!0),s&&C.merge(i,we(u,"script"))),n.call(e[d],u,d)
if(s)for(c=i[i.length-1].ownerDocument,C.map(i,Pe),d=0;d<s;d++)u=i[d],ye.test(u.type||"")&&!J.access(u,"globalEval")&&C.contains(c,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?C._evalUrl&&!u.noModule&&C._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},c):D(u.textContent.replace(Oe,""),u,c))}return e}function Le(e,t,n){for(var r,a=t?C.filter(t,e):e,o=0;null!=(r=a[o]);o++)n||1!==r.nodeType||C.cleanData(we(r)),r.parentNode&&(n&&se(r)&&De(we(r,"script")),r.parentNode.removeChild(r))
return e}C.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,a,o,i,s=e.cloneNode(!0),l=se(e)
if(!(g.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||C.isXMLDoc(e)))for(i=we(s),r=0,a=(o=we(e)).length;r<a;r++)Me(o[r],i[r])
if(t)if(n)for(o=o||we(e),i=i||we(s),r=0,a=o.length;r<a;r++)je(o[r],i[r])
else je(e,s)
return(i=we(s,"script")).length>0&&De(i,!l&&we(e,"script")),s},cleanData:function(e){for(var t,n,r,a=C.event.special,o=0;void 0!==(n=e[o]);o++)if(X(n)){if(t=n[J.expando]){if(t.events)for(r in t.events)a[r]?C.event.remove(n,r):C.removeEvent(n,r,t.handle)
n[J.expando]=void 0}n[Z.expando]&&(n[Z.expando]=void 0)}}}),C.fn.extend({detach:function(e){return Le(this,e,!0)},remove:function(e){return Le(this,e)},text:function(e){return V(this,(function(e){return void 0===e?C.text(this):this.empty().each((function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)}))}),null,e,arguments.length)},append:function(){return qe(this,arguments,(function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||_e(this,e).appendChild(e)}))},prepend:function(){return qe(this,arguments,(function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=_e(this,e)
t.insertBefore(e,t.firstChild)}}))},before:function(){return qe(this,arguments,(function(e){this.parentNode&&this.parentNode.insertBefore(e,this)}))},after:function(){return qe(this,arguments,(function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)}))},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(C.cleanData(we(e,!1)),e.textContent="")
return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map((function(){return C.clone(this,e,t)}))},html:function(e){return V(this,(function(e){var t=this[0]||{},n=0,r=this.length
if(void 0===e&&1===t.nodeType)return t.innerHTML
if("string"==typeof e&&!Re.test(e)&&!be[(ve.exec(e)||["",""])[1].toLowerCase()]){e=C.htmlPrefilter(e)
try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(C.cleanData(we(t,!1)),t.innerHTML=e)
t=0}catch(e){}}t&&this.empty().append(e)}),null,e,arguments.length)},replaceWith:function(){var e=[]
return qe(this,arguments,(function(t){var n=this.parentNode
C.inArray(this,e)<0&&(C.cleanData(we(this)),n&&n.replaceChild(t,this))}),e)}}),C.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},(function(e,t){C.fn[e]=function(e){for(var n,r=[],a=C(e),o=a.length-1,i=0;i<=o;i++)n=i===o?this:this.clone(!0),C(a[i])[t](n),u.apply(r,n.get())
return this.pushStack(r)}}))
var Be=new RegExp("^("+re+")(?!px)[a-z%]+$","i"),He=function(e){var t=e.ownerDocument.defaultView
return t&&t.opener||(t=r),t.getComputedStyle(e)},Ue=function(e,t,n){var r,a,o={}
for(a in t)o[a]=e.style[a],e.style[a]=t[a]
for(a in r=n.call(e),t)e.style[a]=o[a]
return r},ze=new RegExp(oe.join("|"),"i")
function $e(e,t,n){var r,a,o,i,s=e.style
return(n=n||He(e))&&(""!==(i=n.getPropertyValue(t)||n[t])||se(e)||(i=C.style(e,t)),!g.pixelBoxStyles()&&Be.test(i)&&ze.test(t)&&(r=s.width,a=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=i,i=n.width,s.width=r,s.minWidth=a,s.maxWidth=o)),void 0!==i?i+"":i}function Ve(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments)
delete this.get}}}!function(){function e(){if(c){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ie.appendChild(u).appendChild(c)
var e=r.getComputedStyle(c)
n="1%"!==e.top,l=12===t(e.marginLeft),c.style.right="60%",i=36===t(e.right),a=36===t(e.width),c.style.position="absolute",o=12===t(c.offsetWidth/3),ie.removeChild(u),c=null}}function t(e){return Math.round(parseFloat(e))}var n,a,o,i,s,l,u=b.createElement("div"),c=b.createElement("div")
c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",g.clearCloneStyle="content-box"===c.style.backgroundClip,C.extend(g,{boxSizingReliable:function(){return e(),a},pixelBoxStyles:function(){return e(),i},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),l},scrollboxSize:function(){return e(),o},reliableTrDimensions:function(){var e,t,n,a
return null==s&&(e=b.createElement("table"),t=b.createElement("tr"),n=b.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",ie.appendChild(e).appendChild(t).appendChild(n),a=r.getComputedStyle(t),s=parseInt(a.height,10)+parseInt(a.borderTopWidth,10)+parseInt(a.borderBottomWidth,10)===t.offsetHeight,ie.removeChild(e)),s}}))}()
var We=["Webkit","Moz","ms"],Ge=b.createElement("div").style,Ye={}
function Qe(e){return C.cssProps[e]||Ye[e]||(e in Ge?e:Ye[e]=function(e){for(var t=e[0].toUpperCase()+e.slice(1),n=We.length;n--;)if((e=We[n]+t)in Ge)return e}(e)||e)}var Xe=/^(none|table(?!-c[ea]).+)/,Ke=/^--/,Je={position:"absolute",visibility:"hidden",display:"block"},Ze={letterSpacing:"0",fontWeight:"400"}
function et(e,t,n){var r=ae.exec(t)
return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function tt(e,t,n,r,a,o){var i="width"===t?1:0,s=0,l=0
if(n===(r?"border":"content"))return 0
for(;i<4;i+=2)"margin"===n&&(l+=C.css(e,n+oe[i],!0,a)),r?("content"===n&&(l-=C.css(e,"padding"+oe[i],!0,a)),"margin"!==n&&(l-=C.css(e,"border"+oe[i]+"Width",!0,a))):(l+=C.css(e,"padding"+oe[i],!0,a),"padding"!==n?l+=C.css(e,"border"+oe[i]+"Width",!0,a):s+=C.css(e,"border"+oe[i]+"Width",!0,a))
return!r&&o>=0&&(l+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-l-s-.5))||0),l}function nt(e,t,n){var r=He(e),a=(!g.boxSizingReliable()||n)&&"border-box"===C.css(e,"boxSizing",!1,r),o=a,i=$e(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1)
if(Be.test(i)){if(!n)return i
i="auto"}return(!g.boxSizingReliable()&&a||!g.reliableTrDimensions()&&R(e,"tr")||"auto"===i||!parseFloat(i)&&"inline"===C.css(e,"display",!1,r))&&e.getClientRects().length&&(a="border-box"===C.css(e,"boxSizing",!1,r),(o=s in e)&&(i=e[s])),(i=parseFloat(i)||0)+tt(e,t,n||(a?"border":"content"),o,r,i)+"px"}function rt(e,t,n,r,a){return new rt.prototype.init(e,t,n,r,a)}C.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=$e(e,"opacity")
return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var a,o,i,s=Q(t),l=Ke.test(t),u=e.style
if(l||(t=Qe(s)),i=C.cssHooks[t]||C.cssHooks[s],void 0===n)return i&&"get"in i&&void 0!==(a=i.get(e,!1,r))?a:u[t]
"string"==(o=typeof n)&&(a=ae.exec(n))&&a[1]&&(n=ce(e,t,a),o="number"),null!=n&&n==n&&("number"!==o||l||(n+=a&&a[3]||(C.cssNumber[s]?"":"px")),g.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),i&&"set"in i&&void 0===(n=i.set(e,n,r))||(l?u.setProperty(t,n):u[t]=n))}},css:function(e,t,n,r){var a,o,i,s=Q(t)
return Ke.test(t)||(t=Qe(s)),(i=C.cssHooks[t]||C.cssHooks[s])&&"get"in i&&(a=i.get(e,!0,n)),void 0===a&&(a=$e(e,t,r)),"normal"===a&&t in Ze&&(a=Ze[t]),""===n||n?(o=parseFloat(a),!0===n||isFinite(o)?o||0:a):a}}),C.each(["height","width"],(function(e,t){C.cssHooks[t]={get:function(e,n,r){if(n)return!Xe.test(C.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?nt(e,t,r):Ue(e,Je,(function(){return nt(e,t,r)}))},set:function(e,n,r){var a,o=He(e),i=!g.scrollboxSize()&&"absolute"===o.position,s=(i||r)&&"border-box"===C.css(e,"boxSizing",!1,o),l=r?tt(e,t,r,s,o):0
return s&&i&&(l-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-tt(e,t,"border",!1,o)-.5)),l&&(a=ae.exec(n))&&"px"!==(a[3]||"px")&&(e.style[t]=n,n=C.css(e,t)),et(0,n,l)}}})),C.cssHooks.marginLeft=Ve(g.reliableMarginLeft,(function(e,t){if(t)return(parseFloat($e(e,"marginLeft"))||e.getBoundingClientRect().left-Ue(e,{marginLeft:0},(function(){return e.getBoundingClientRect().left})))+"px"})),C.each({margin:"",padding:"",border:"Width"},(function(e,t){C.cssHooks[e+t]={expand:function(n){for(var r=0,a={},o="string"==typeof n?n.split(" "):[n];r<4;r++)a[e+oe[r]+t]=o[r]||o[r-2]||o[0]
return a}},"margin"!==e&&(C.cssHooks[e+t].set=et)})),C.fn.extend({css:function(e,t){return V(this,(function(e,t,n){var r,a,o={},i=0
if(Array.isArray(t)){for(r=He(e),a=t.length;i<a;i++)o[t[i]]=C.css(e,t[i],!1,r)
return o}return void 0!==n?C.style(e,t,n):C.css(e,t)}),e,t,arguments.length>1)}}),C.Tween=rt,rt.prototype={constructor:rt,init:function(e,t,n,r,a,o){this.elem=e,this.prop=n,this.easing=a||C.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(C.cssNumber[n]?"":"px")},cur:function(){var e=rt.propHooks[this.prop]
return e&&e.get?e.get(this):rt.propHooks._default.get(this)},run:function(e){var t,n=rt.propHooks[this.prop]
return this.options.duration?this.pos=t=C.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rt.propHooks._default.set(this),this}},rt.prototype.init.prototype=rt.prototype,rt.propHooks={_default:{get:function(e){var t
return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=C.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){C.fx.step[e.prop]?C.fx.step[e.prop](e):1!==e.elem.nodeType||!C.cssHooks[e.prop]&&null==e.elem.style[Qe(e.prop)]?e.elem[e.prop]=e.now:C.style(e.elem,e.prop,e.now+e.unit)}}},rt.propHooks.scrollTop=rt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},C.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},C.fx=rt.prototype.init,C.fx.step={}
var at,ot,it=/^(?:toggle|show|hide)$/,st=/queueHooks$/
function lt(){ot&&(!1===b.hidden&&r.requestAnimationFrame?r.requestAnimationFrame(lt):r.setTimeout(lt,C.fx.interval),C.fx.tick())}function ut(){return r.setTimeout((function(){at=void 0})),at=Date.now()}function ct(e,t){var n,r=0,a={height:e}
for(t=t?1:0;r<4;r+=2-t)a["margin"+(n=oe[r])]=a["padding"+n]=e
return t&&(a.opacity=a.width=e),a}function dt(e,t,n){for(var r,a=(pt.tweeners[t]||[]).concat(pt.tweeners["*"]),o=0,i=a.length;o<i;o++)if(r=a[o].call(n,t,e))return r}function pt(e,t,n){var r,a,o=0,i=pt.prefilters.length,s=C.Deferred().always((function(){delete l.elem})),l=function(){if(a)return!1
for(var t=at||ut(),n=Math.max(0,u.startTime+u.duration-t),r=1-(n/u.duration||0),o=0,i=u.tweens.length;o<i;o++)u.tweens[o].run(r)
return s.notifyWith(e,[u,r,n]),r<1&&i?n:(i||s.notifyWith(e,[u,1,0]),s.resolveWith(e,[u]),!1)},u=s.promise({elem:e,props:C.extend({},t),opts:C.extend(!0,{specialEasing:{},easing:C.easing._default},n),originalProperties:t,originalOptions:n,startTime:at||ut(),duration:n.duration,tweens:[],createTween:function(t,n){var r=C.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing)
return u.tweens.push(r),r},stop:function(t){var n=0,r=t?u.tweens.length:0
if(a)return this
for(a=!0;n<r;n++)u.tweens[n].run(1)
return t?(s.notifyWith(e,[u,1,0]),s.resolveWith(e,[u,t])):s.rejectWith(e,[u,t]),this}}),c=u.props
for(function(e,t){var n,r,a,o,i
for(n in e)if(a=t[r=Q(n)],o=e[n],Array.isArray(o)&&(a=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(i=C.cssHooks[r])&&"expand"in i)for(n in o=i.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=a)
else t[r]=a}(c,u.opts.specialEasing);o<i;o++)if(r=pt.prefilters[o].call(u,e,c,u.opts))return v(r.stop)&&(C._queueHooks(u.elem,u.opts.queue).stop=r.stop.bind(r)),r
return C.map(c,dt,u),v(u.opts.start)&&u.opts.start.call(e,u),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always),C.fx.timer(C.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u}C.Animation=C.extend(pt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t)
return ce(n.elem,e,ae.exec(t),n),n}]},tweener:function(e,t){v(e)?(t=e,e=["*"]):e=e.match(q)
for(var n,r=0,a=e.length;r<a;r++)n=e[r],pt.tweeners[n]=pt.tweeners[n]||[],pt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,a,o,i,s,l,u,c,d="width"in t||"height"in t,p=this,f={},h=e.style,m=e.nodeType&&ue(e),g=J.get(e,"fxshow")
for(r in n.queue||(null==(i=C._queueHooks(e,"fx")).unqueued&&(i.unqueued=0,s=i.empty.fire,i.empty.fire=function(){i.unqueued||s()}),i.unqueued++,p.always((function(){p.always((function(){i.unqueued--,C.queue(e,"fx").length||i.empty.fire()}))}))),t)if(a=t[r],it.test(a)){if(delete t[r],o=o||"toggle"===a,a===(m?"hide":"show")){if("show"!==a||!g||void 0===g[r])continue
m=!0}f[r]=g&&g[r]||C.style(e,r)}if((l=!C.isEmptyObject(t))||!C.isEmptyObject(f))for(r in d&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(u=g&&g.display)&&(u=J.get(e,"display")),"none"===(c=C.css(e,"display"))&&(u?c=u:(fe([e],!0),u=e.style.display||u,c=C.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=u)&&"none"===C.css(e,"float")&&(l||(p.done((function(){h.display=u})),null==u&&(c=h.display,u="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always((function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]}))),l=!1,f)l||(g?"hidden"in g&&(m=g.hidden):g=J.access(e,"fxshow",{display:u}),o&&(g.hidden=!m),m&&fe([e],!0),p.done((function(){for(r in m||fe([e]),J.remove(e,"fxshow"),f)C.style(e,r,f[r])}))),l=dt(m?g[r]:0,r,p),r in g||(g[r]=l.start,m&&(l.end=l.start,l.start=0))}],prefilter:function(e,t){t?pt.prefilters.unshift(e):pt.prefilters.push(e)}}),C.speed=function(e,t,n){var r=e&&"object"==typeof e?C.extend({},e):{complete:n||!n&&t||v(e)&&e,duration:e,easing:n&&t||t&&!v(t)&&t}
return C.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in C.fx.speeds?r.duration=C.fx.speeds[r.duration]:r.duration=C.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){v(r.old)&&r.old.call(this),r.queue&&C.dequeue(this,r.queue)},r},C.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ue).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var a=C.isEmptyObject(e),o=C.speed(t,n,r),i=function(){var t=pt(this,C.extend({},e),o);(a||J.get(this,"finish"))&&t.stop(!0)}
return i.finish=i,a||!1===o.queue?this.each(i):this.queue(o.queue,i)},stop:function(e,t,n){var r=function(e){var t=e.stop
delete e.stop,t(n)}
return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&this.queue(e||"fx",[]),this.each((function(){var t=!0,a=null!=e&&e+"queueHooks",o=C.timers,i=J.get(this)
if(a)i[a]&&i[a].stop&&r(i[a])
else for(a in i)i[a]&&i[a].stop&&st.test(a)&&r(i[a])
for(a=o.length;a--;)o[a].elem!==this||null!=e&&o[a].queue!==e||(o[a].anim.stop(n),t=!1,o.splice(a,1))
!t&&n||C.dequeue(this,e)}))},finish:function(e){return!1!==e&&(e=e||"fx"),this.each((function(){var t,n=J.get(this),r=n[e+"queue"],a=n[e+"queueHooks"],o=C.timers,i=r?r.length:0
for(n.finish=!0,C.queue(this,e,[]),a&&a.stop&&a.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1))
for(t=0;t<i;t++)r[t]&&r[t].finish&&r[t].finish.call(this)
delete n.finish}))}}),C.each(["toggle","show","hide"],(function(e,t){var n=C.fn[t]
C.fn[t]=function(e,r,a){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ct(t,!0),e,r,a)}})),C.each({slideDown:ct("show"),slideUp:ct("hide"),slideToggle:ct("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},(function(e,t){C.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}})),C.timers=[],C.fx.tick=function(){var e,t=0,n=C.timers
for(at=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1)
n.length||C.fx.stop(),at=void 0},C.fx.timer=function(e){C.timers.push(e),C.fx.start()},C.fx.interval=13,C.fx.start=function(){ot||(ot=!0,lt())},C.fx.stop=function(){ot=null},C.fx.speeds={slow:600,fast:200,_default:400},C.fn.delay=function(e,t){return e=C.fx&&C.fx.speeds[e]||e,t=t||"fx",this.queue(t,(function(t,n){var a=r.setTimeout(t,e)
n.stop=function(){r.clearTimeout(a)}}))},function(){var e=b.createElement("input"),t=b.createElement("select").appendChild(b.createElement("option"))
e.type="checkbox",g.checkOn=""!==e.value,g.optSelected=t.selected,(e=b.createElement("input")).value="t",e.type="radio",g.radioValue="t"===e.value}()
var ft,ht=C.expr.attrHandle
C.fn.extend({attr:function(e,t){return V(this,C.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each((function(){C.removeAttr(this,e)}))}}),C.extend({attr:function(e,t,n){var r,a,o=e.nodeType
if(3!==o&&8!==o&&2!==o)return void 0===e.getAttribute?C.prop(e,t,n):(1===o&&C.isXMLDoc(e)||(a=C.attrHooks[t.toLowerCase()]||(C.expr.match.bool.test(t)?ft:void 0)),void 0!==n?null===n?void C.removeAttr(e,t):a&&"set"in a&&void 0!==(r=a.set(e,n,t))?r:(e.setAttribute(t,n+""),n):a&&"get"in a&&null!==(r=a.get(e,t))?r:null==(r=C.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!g.radioValue&&"radio"===t&&R(e,"input")){var n=e.value
return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,a=t&&t.match(q)
if(a&&1===e.nodeType)for(;n=a[r++];)e.removeAttribute(n)}}),ft={set:function(e,t,n){return!1===t?C.removeAttr(e,n):e.setAttribute(n,n),n}},C.each(C.expr.match.bool.source.match(/\w+/g),(function(e,t){var n=ht[t]||C.find.attr
ht[t]=function(e,t,r){var a,o,i=t.toLowerCase()
return r||(o=ht[i],ht[i]=a,a=null!=n(e,t,r)?i:null,ht[i]=o),a}}))
var mt=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i
function vt(e){return(e.match(q)||[]).join(" ")}function yt(e){return e.getAttribute&&e.getAttribute("class")||""}function bt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(q)||[]}C.fn.extend({prop:function(e,t){return V(this,C.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each((function(){delete this[C.propFix[e]||e]}))}}),C.extend({prop:function(e,t,n){var r,a,o=e.nodeType
if(3!==o&&8!==o&&2!==o)return 1===o&&C.isXMLDoc(e)||(t=C.propFix[t]||t,a=C.propHooks[t]),void 0!==n?a&&"set"in a&&void 0!==(r=a.set(e,n,t))?r:e[t]=n:a&&"get"in a&&null!==(r=a.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=C.find.attr(e,"tabindex")
return t?parseInt(t,10):mt.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),g.optSelected||(C.propHooks.selected={get:function(e){var t=e.parentNode
return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode
t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),C.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],(function(){C.propFix[this.toLowerCase()]=this})),C.fn.extend({addClass:function(e){var t,n,r,a,o,i,s,l=0
if(v(e))return this.each((function(t){C(this).addClass(e.call(this,t,yt(this)))}))
if((t=bt(e)).length)for(;n=this[l++];)if(a=yt(n),r=1===n.nodeType&&" "+vt(a)+" "){for(i=0;o=t[i++];)r.indexOf(" "+o+" ")<0&&(r+=o+" ")
a!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,a,o,i,s,l=0
if(v(e))return this.each((function(t){C(this).removeClass(e.call(this,t,yt(this)))}))
if(!arguments.length)return this.attr("class","")
if((t=bt(e)).length)for(;n=this[l++];)if(a=yt(n),r=1===n.nodeType&&" "+vt(a)+" "){for(i=0;o=t[i++];)for(;r.indexOf(" "+o+" ")>-1;)r=r.replace(" "+o+" "," ")
a!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e)
return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):v(e)?this.each((function(n){C(this).toggleClass(e.call(this,n,yt(this),t),t)})):this.each((function(){var t,a,o,i
if(r)for(a=0,o=C(this),i=bt(e);t=i[a++];)o.hasClass(t)?o.removeClass(t):o.addClass(t)
else void 0!==e&&"boolean"!==n||((t=yt(this))&&J.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":J.get(this,"__className__")||""))}))},hasClass:function(e){var t,n,r=0
for(t=" "+e+" ";n=this[r++];)if(1===n.nodeType&&(" "+vt(yt(n))+" ").indexOf(t)>-1)return!0
return!1}})
var wt=/\r/g
C.fn.extend({val:function(e){var t,n,r,a=this[0]
return arguments.length?(r=v(e),this.each((function(n){var a
1===this.nodeType&&(null==(a=r?e.call(this,n,C(this).val()):e)?a="":"number"==typeof a?a+="":Array.isArray(a)&&(a=C.map(a,(function(e){return null==e?"":e+""}))),(t=C.valHooks[this.type]||C.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,a,"value")||(this.value=a))}))):a?(t=C.valHooks[a.type]||C.valHooks[a.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(a,"value"))?n:"string"==typeof(n=a.value)?n.replace(wt,""):null==n?"":n:void 0}}),C.extend({valHooks:{option:{get:function(e){var t=C.find.attr(e,"value")
return null!=t?t:vt(C.text(e))}},select:{get:function(e){var t,n,r,a=e.options,o=e.selectedIndex,i="select-one"===e.type,s=i?null:[],l=i?o+1:a.length
for(r=o<0?l:i?o:0;r<l;r++)if(((n=a[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!R(n.parentNode,"optgroup"))){if(t=C(n).val(),i)return t
s.push(t)}return s},set:function(e,t){for(var n,r,a=e.options,o=C.makeArray(t),i=a.length;i--;)((r=a[i]).selected=C.inArray(C.valHooks.option.get(r),o)>-1)&&(n=!0)
return n||(e.selectedIndex=-1),o}}}}),C.each(["radio","checkbox"],(function(){C.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=C.inArray(C(e).val(),t)>-1}},g.checkOn||(C.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})})),g.focusin="onfocusin"in r
var Dt=/^(?:focusinfocus|focusoutblur)$/,xt=function(e){e.stopPropagation()}
C.extend(C.event,{trigger:function(e,t,n,a){var o,i,s,l,u,c,d,p,h=[n||b],m=f.call(e,"type")?e.type:e,g=f.call(e,"namespace")?e.namespace.split("."):[]
if(i=p=s=n=n||b,3!==n.nodeType&&8!==n.nodeType&&!Dt.test(m+C.event.triggered)&&(m.indexOf(".")>-1&&(g=m.split("."),m=g.shift(),g.sort()),u=m.indexOf(":")<0&&"on"+m,(e=e[C.expando]?e:new C.Event(m,"object"==typeof e&&e)).isTrigger=a?2:3,e.namespace=g.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:C.makeArray(t,[e]),d=C.event.special[m]||{},a||!d.trigger||!1!==d.trigger.apply(n,t))){if(!a&&!d.noBubble&&!y(n)){for(l=d.delegateType||m,Dt.test(l+m)||(i=i.parentNode);i;i=i.parentNode)h.push(i),s=i
s===(n.ownerDocument||b)&&h.push(s.defaultView||s.parentWindow||r)}for(o=0;(i=h[o++])&&!e.isPropagationStopped();)p=i,e.type=o>1?l:d.bindType||m,(c=(J.get(i,"events")||Object.create(null))[e.type]&&J.get(i,"handle"))&&c.apply(i,t),(c=u&&i[u])&&c.apply&&X(i)&&(e.result=c.apply(i,t),!1===e.result&&e.preventDefault())
return e.type=m,a||e.isDefaultPrevented()||d._default&&!1!==d._default.apply(h.pop(),t)||!X(n)||u&&v(n[m])&&!y(n)&&((s=n[u])&&(n[u]=null),C.event.triggered=m,e.isPropagationStopped()&&p.addEventListener(m,xt),n[m](),e.isPropagationStopped()&&p.removeEventListener(m,xt),C.event.triggered=void 0,s&&(n[u]=s)),e.result}},simulate:function(e,t,n){var r=C.extend(new C.Event,n,{type:e,isSimulated:!0})
C.event.trigger(r,null,t)}}),C.fn.extend({trigger:function(e,t){return this.each((function(){C.event.trigger(e,t,this)}))},triggerHandler:function(e,t){var n=this[0]
if(n)return C.event.trigger(e,t,n,!0)}}),g.focusin||C.each({focus:"focusin",blur:"focusout"},(function(e,t){var n=function(e){C.event.simulate(t,e.target,C.event.fix(e))}
C.event.special[t]={setup:function(){var r=this.ownerDocument||this.document||this,a=J.access(r,t)
a||r.addEventListener(e,n,!0),J.access(r,t,(a||0)+1)},teardown:function(){var r=this.ownerDocument||this.document||this,a=J.access(r,t)-1
a?J.access(r,t,a):(r.removeEventListener(e,n,!0),J.remove(r,t))}}}))
var Et=r.location,Ct={guid:Date.now()},At=/\?/
C.parseXML=function(e){var t,n
if(!e||"string"!=typeof e)return null
try{t=(new r.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||C.error("Invalid XML: "+(n?C.map(n.childNodes,(function(e){return e.textContent})).join("\n"):e)),t}
var kt=/\[\]$/,Tt=/\r?\n/g,Nt=/^(?:submit|button|image|reset|file)$/i,Ft=/^(?:input|select|textarea|keygen)/i
function Rt(e,t,n,r){var a
if(Array.isArray(t))C.each(t,(function(t,a){n||kt.test(e)?r(e,a):Rt(e+"["+("object"==typeof a&&null!=a?t:"")+"]",a,n,r)}))
else if(n||"object"!==x(t))r(e,t)
else for(a in t)Rt(e+"["+a+"]",t[a],n,r)}C.param=function(e,t){var n,r=[],a=function(e,t){var n=v(t)?t():t
r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)}
if(null==e)return""
if(Array.isArray(e)||e.jquery&&!C.isPlainObject(e))C.each(e,(function(){a(this.name,this.value)}))
else for(n in e)Rt(n,e[n],t,a)
return r.join("&")},C.fn.extend({serialize:function(){return C.param(this.serializeArray())},serializeArray:function(){return this.map((function(){var e=C.prop(this,"elements")
return e?C.makeArray(e):this})).filter((function(){var e=this.type
return this.name&&!C(this).is(":disabled")&&Ft.test(this.nodeName)&&!Nt.test(e)&&(this.checked||!ge.test(e))})).map((function(e,t){var n=C(this).val()
return null==n?null:Array.isArray(n)?C.map(n,(function(e){return{name:t.name,value:e.replace(Tt,"\r\n")}})):{name:t.name,value:n.replace(Tt,"\r\n")}})).get()}})
var St=/%20/g,Ot=/#.*$/,_t=/([?&])_=[^&]*/,It=/^(.*?):[ \t]*([^\r\n]*)$/gm,Pt=/^(?:GET|HEAD)$/,jt=/^\/\//,Mt={},qt={},Lt="*/".concat("*"),Bt=b.createElement("a")
function Ht(e){return function(t,n){"string"!=typeof t&&(n=t,t="*")
var r,a=0,o=t.toLowerCase().match(q)||[]
if(v(n))for(;r=o[a++];)"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function Ut(e,t,n,r){var a={},o=e===qt
function i(s){var l
return a[s]=!0,C.each(e[s]||[],(function(e,s){var u=s(t,n,r)
return"string"!=typeof u||o||a[u]?o?!(l=u):void 0:(t.dataTypes.unshift(u),i(u),!1)})),l}return i(t.dataTypes[0])||!a["*"]&&i("*")}function zt(e,t){var n,r,a=C.ajaxSettings.flatOptions||{}
for(n in t)void 0!==t[n]&&((a[n]?e:r||(r={}))[n]=t[n])
return r&&C.extend(!0,e,r),e}Bt.href=Et.href,C.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Et.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Lt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":C.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,C.ajaxSettings),t):zt(C.ajaxSettings,e)},ajaxPrefilter:Ht(Mt),ajaxTransport:Ht(qt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{}
var n,a,o,i,s,l,u,c,d,p,f=C.ajaxSetup({},t),h=f.context||f,m=f.context&&(h.nodeType||h.jquery)?C(h):C.event,g=C.Deferred(),v=C.Callbacks("once memory"),y=f.statusCode||{},w={},D={},x="canceled",E={readyState:0,getResponseHeader:function(e){var t
if(u){if(!i)for(i={};t=It.exec(o);)i[t[1].toLowerCase()+" "]=(i[t[1].toLowerCase()+" "]||[]).concat(t[2])
t=i[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return u?o:null},setRequestHeader:function(e,t){return null==u&&(e=D[e.toLowerCase()]=D[e.toLowerCase()]||e,w[e]=t),this},overrideMimeType:function(e){return null==u&&(f.mimeType=e),this},statusCode:function(e){var t
if(e)if(u)E.always(e[E.status])
else for(t in e)y[t]=[y[t],e[t]]
return this},abort:function(e){var t=e||x
return n&&n.abort(t),A(0,t),this}}
if(g.promise(E),f.url=((e||f.url||Et.href)+"").replace(jt,Et.protocol+"//"),f.type=t.method||t.type||f.method||f.type,f.dataTypes=(f.dataType||"*").toLowerCase().match(q)||[""],null==f.crossDomain){l=b.createElement("a")
try{l.href=f.url,l.href=l.href,f.crossDomain=Bt.protocol+"//"+Bt.host!=l.protocol+"//"+l.host}catch(e){f.crossDomain=!0}}if(f.data&&f.processData&&"string"!=typeof f.data&&(f.data=C.param(f.data,f.traditional)),Ut(Mt,f,t,E),u)return E
for(d in(c=C.event&&f.global)&&0==C.active++&&C.event.trigger("ajaxStart"),f.type=f.type.toUpperCase(),f.hasContent=!Pt.test(f.type),a=f.url.replace(Ot,""),f.hasContent?f.data&&f.processData&&0===(f.contentType||"").indexOf("application/x-www-form-urlencoded")&&(f.data=f.data.replace(St,"+")):(p=f.url.slice(a.length),f.data&&(f.processData||"string"==typeof f.data)&&(a+=(At.test(a)?"&":"?")+f.data,delete f.data),!1===f.cache&&(a=a.replace(_t,"$1"),p=(At.test(a)?"&":"?")+"_="+Ct.guid+++p),f.url=a+p),f.ifModified&&(C.lastModified[a]&&E.setRequestHeader("If-Modified-Since",C.lastModified[a]),C.etag[a]&&E.setRequestHeader("If-None-Match",C.etag[a])),(f.data&&f.hasContent&&!1!==f.contentType||t.contentType)&&E.setRequestHeader("Content-Type",f.contentType),E.setRequestHeader("Accept",f.dataTypes[0]&&f.accepts[f.dataTypes[0]]?f.accepts[f.dataTypes[0]]+("*"!==f.dataTypes[0]?", "+Lt+"; q=0.01":""):f.accepts["*"]),f.headers)E.setRequestHeader(d,f.headers[d])
if(f.beforeSend&&(!1===f.beforeSend.call(h,E,f)||u))return E.abort()
if(x="abort",v.add(f.complete),E.done(f.success),E.fail(f.error),n=Ut(qt,f,t,E)){if(E.readyState=1,c&&m.trigger("ajaxSend",[E,f]),u)return E
f.async&&f.timeout>0&&(s=r.setTimeout((function(){E.abort("timeout")}),f.timeout))
try{u=!1,n.send(w,A)}catch(e){if(u)throw e
A(-1,e)}}else A(-1,"No Transport")
function A(e,t,i,l){var d,p,b,w,D,x=t
u||(u=!0,s&&r.clearTimeout(s),n=void 0,o=l||"",E.readyState=e>0?4:0,d=e>=200&&e<300||304===e,i&&(w=function(e,t,n){for(var r,a,o,i,s=e.contents,l=e.dataTypes;"*"===l[0];)l.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"))
if(r)for(a in s)if(s[a]&&s[a].test(r)){l.unshift(a)
break}if(l[0]in n)o=l[0]
else{for(a in n){if(!l[0]||e.converters[a+" "+l[0]]){o=a
break}i||(i=a)}o=o||i}if(o)return o!==l[0]&&l.unshift(o),n[o]}(f,E,i)),!d&&C.inArray("script",f.dataTypes)>-1&&C.inArray("json",f.dataTypes)<0&&(f.converters["text script"]=function(){}),w=function(e,t,n,r){var a,o,i,s,l,u={},c=e.dataTypes.slice()
if(c[1])for(i in e.converters)u[i.toLowerCase()]=e.converters[i]
for(o=c.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())if("*"===o)o=l
else if("*"!==l&&l!==o){if(!(i=u[l+" "+o]||u["* "+o]))for(a in u)if((s=a.split(" "))[1]===o&&(i=u[l+" "+s[0]]||u["* "+s[0]])){!0===i?i=u[a]:!0!==u[a]&&(o=s[0],c.unshift(s[1]))
break}if(!0!==i)if(i&&e.throws)t=i(t)
else try{t=i(t)}catch(e){return{state:"parsererror",error:i?e:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}(f,w,E,d),d?(f.ifModified&&((D=E.getResponseHeader("Last-Modified"))&&(C.lastModified[a]=D),(D=E.getResponseHeader("etag"))&&(C.etag[a]=D)),204===e||"HEAD"===f.type?x="nocontent":304===e?x="notmodified":(x=w.state,p=w.data,d=!(b=w.error))):(b=x,!e&&x||(x="error",e<0&&(e=0))),E.status=e,E.statusText=(t||x)+"",d?g.resolveWith(h,[p,x,E]):g.rejectWith(h,[E,x,b]),E.statusCode(y),y=void 0,c&&m.trigger(d?"ajaxSuccess":"ajaxError",[E,f,d?p:b]),v.fireWith(h,[E,x]),c&&(m.trigger("ajaxComplete",[E,f]),--C.active||C.event.trigger("ajaxStop")))}return E},getJSON:function(e,t,n){return C.get(e,t,n,"json")},getScript:function(e,t){return C.get(e,void 0,t,"script")}}),C.each(["get","post"],(function(e,t){C[t]=function(e,n,r,a){return v(n)&&(a=a||r,r=n,n=void 0),C.ajax(C.extend({url:e,type:t,dataType:a,data:n,success:r},C.isPlainObject(e)&&e))}})),C.ajaxPrefilter((function(e){var t
for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")})),C._evalUrl=function(e,t,n){return C.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){C.globalEval(e,t,n)}})},C.fn.extend({wrapAll:function(e){var t
return this[0]&&(v(e)&&(e=e.call(this[0])),t=C(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map((function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild
return e})).append(this)),this},wrapInner:function(e){return v(e)?this.each((function(t){C(this).wrapInner(e.call(this,t))})):this.each((function(){var t=C(this),n=t.contents()
n.length?n.wrapAll(e):t.append(e)}))},wrap:function(e){var t=v(e)
return this.each((function(n){C(this).wrapAll(t?e.call(this,n):e)}))},unwrap:function(e){return this.parent(e).not("body").each((function(){C(this).replaceWith(this.childNodes)})),this}}),C.expr.pseudos.hidden=function(e){return!C.expr.pseudos.visible(e)},C.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},C.ajaxSettings.xhr=function(){try{return new r.XMLHttpRequest}catch(e){}}
var $t={0:200,1223:204},Vt=C.ajaxSettings.xhr()
g.cors=!!Vt&&"withCredentials"in Vt,g.ajax=Vt=!!Vt,C.ajaxTransport((function(e){var t,n
if(g.cors||Vt&&!e.crossDomain)return{send:function(a,o){var i,s=e.xhr()
if(s.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(i in e.xhrFields)s[i]=e.xhrFields[i]
for(i in e.mimeType&&s.overrideMimeType&&s.overrideMimeType(e.mimeType),e.crossDomain||a["X-Requested-With"]||(a["X-Requested-With"]="XMLHttpRequest"),a)s.setRequestHeader(i,a[i])
t=function(e){return function(){t&&(t=n=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o($t[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=t(),n=s.onerror=s.ontimeout=t("error"),void 0!==s.onabort?s.onabort=n:s.onreadystatechange=function(){4===s.readyState&&r.setTimeout((function(){t&&n()}))},t=t("abort")
try{s.send(e.hasContent&&e.data||null)}catch(e){if(t)throw e}},abort:function(){t&&t()}}})),C.ajaxPrefilter((function(e){e.crossDomain&&(e.contents.script=!1)})),C.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return C.globalEval(e),e}}}),C.ajaxPrefilter("script",(function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")})),C.ajaxTransport("script",(function(e){var t,n
if(e.crossDomain||e.scriptAttrs)return{send:function(r,a){t=C("<script>").attr(e.scriptAttrs||{}).prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&a("error"===e.type?404:200,e.type)}),b.head.appendChild(t[0])},abort:function(){n&&n()}}}))
var Wt,Gt=[],Yt=/(=)\?(?=&|$)|\?\?/
C.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Gt.pop()||C.expando+"_"+Ct.guid++
return this[e]=!0,e}}),C.ajaxPrefilter("json jsonp",(function(e,t,n){var a,o,i,s=!1!==e.jsonp&&(Yt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Yt.test(e.data)&&"data")
if(s||"jsonp"===e.dataTypes[0])return a=e.jsonpCallback=v(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,s?e[s]=e[s].replace(Yt,"$1"+a):!1!==e.jsonp&&(e.url+=(At.test(e.url)?"&":"?")+e.jsonp+"="+a),e.converters["script json"]=function(){return i||C.error(a+" was not called"),i[0]},e.dataTypes[0]="json",o=r[a],r[a]=function(){i=arguments},n.always((function(){void 0===o?C(r).removeProp(a):r[a]=o,e[a]&&(e.jsonpCallback=t.jsonpCallback,Gt.push(a)),i&&v(o)&&o(i[0]),i=o=void 0})),"script"})),g.createHTMLDocument=((Wt=b.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Wt.childNodes.length),C.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(g.createHTMLDocument?((r=(t=b.implementation.createHTMLDocument("")).createElement("base")).href=b.location.href,t.head.appendChild(r)):t=b),o=!n&&[],(a=S.exec(e))?[t.createElement(a[1])]:(a=Ee([e],t,o),o&&o.length&&C(o).remove(),C.merge([],a.childNodes)))
var r,a,o},C.fn.load=function(e,t,n){var r,a,o,i=this,s=e.indexOf(" ")
return s>-1&&(r=vt(e.slice(s)),e=e.slice(0,s)),v(t)?(n=t,t=void 0):t&&"object"==typeof t&&(a="POST"),i.length>0&&C.ajax({url:e,type:a||"GET",dataType:"html",data:t}).done((function(e){o=arguments,i.html(r?C("<div>").append(C.parseHTML(e)).find(r):e)})).always(n&&function(e,t){i.each((function(){n.apply(this,o||[e.responseText,t,e])}))}),this},C.expr.pseudos.animated=function(e){return C.grep(C.timers,(function(t){return e===t.elem})).length},C.offset={setOffset:function(e,t,n){var r,a,o,i,s,l,u=C.css(e,"position"),c=C(e),d={}
"static"===u&&(e.style.position="relative"),s=c.offset(),o=C.css(e,"top"),l=C.css(e,"left"),("absolute"===u||"fixed"===u)&&(o+l).indexOf("auto")>-1?(i=(r=c.position()).top,a=r.left):(i=parseFloat(o)||0,a=parseFloat(l)||0),v(t)&&(t=t.call(e,n,C.extend({},s))),null!=t.top&&(d.top=t.top-s.top+i),null!=t.left&&(d.left=t.left-s.left+a),"using"in t?t.using.call(e,d):c.css(d)}},C.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each((function(t){C.offset.setOffset(this,e,t)}))
var t,n,r=this[0]
return r?r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],a={top:0,left:0}
if("fixed"===C.css(r,"position"))t=r.getBoundingClientRect()
else{for(t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;e&&(e===n.body||e===n.documentElement)&&"static"===C.css(e,"position");)e=e.parentNode
e&&e!==r&&1===e.nodeType&&((a=C(e).offset()).top+=C.css(e,"borderTopWidth",!0),a.left+=C.css(e,"borderLeftWidth",!0))}return{top:t.top-a.top-C.css(r,"marginTop",!0),left:t.left-a.left-C.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map((function(){for(var e=this.offsetParent;e&&"static"===C.css(e,"position");)e=e.offsetParent
return e||ie}))}}),C.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},(function(e,t){var n="pageYOffset"===t
C.fn[e]=function(r){return V(this,(function(e,r,a){var o
if(y(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===a)return o?o[t]:e[r]
o?o.scrollTo(n?o.pageXOffset:a,n?a:o.pageYOffset):e[r]=a}),e,r,arguments.length)}})),C.each(["top","left"],(function(e,t){C.cssHooks[t]=Ve(g.pixelPosition,(function(e,n){if(n)return n=$e(e,t),Be.test(n)?C(e).position()[t]+"px":n}))})),C.each({Height:"height",Width:"width"},(function(e,t){C.each({padding:"inner"+e,content:t,"":"outer"+e},(function(n,r){C.fn[r]=function(a,o){var i=arguments.length&&(n||"boolean"!=typeof a),s=n||(!0===a||!0===o?"margin":"border")
return V(this,(function(t,n,a){var o
return y(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===a?C.css(t,n,s):C.style(t,n,a,s)}),t,i?a:void 0,i)}}))})),C.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],(function(e,t){C.fn[t]=function(e){return this.on(t,e)}})),C.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),(function(e,t){C.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}))
var Qt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
C.proxy=function(e,t){var n,r,a
if("string"==typeof t&&(n=e[t],t=e,e=n),v(e))return r=s.call(arguments,2),a=function(){return e.apply(t||this,r.concat(s.call(arguments)))},a.guid=e.guid=e.guid||C.guid++,a},C.holdReady=function(e){e?C.readyWait++:C.ready(!0)},C.isArray=Array.isArray,C.parseJSON=JSON.parse,C.nodeName=R,C.isFunction=v,C.isWindow=y,C.camelCase=Q,C.type=x,C.now=Date.now,C.isNumeric=function(e){var t=C.type(e)
return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},C.trim=function(e){return null==e?"":(e+"").replace(Qt,"")},void 0===(n=function(){return C}.apply(t,[]))||(e.exports=n)
var Xt=r.jQuery,Kt=r.$
return C.noConflict=function(e){return r.$===C&&(r.$=Kt),e&&r.jQuery===C&&(r.jQuery=Xt),C},void 0===a&&(r.jQuery=r.$=C),C}))},916:(e,t,n)=>{var r
e=n.nmd(e),function(){"use strict"
function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null!=n){var r,a,o=[],i=!0,s=!1
try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(e){s=!0,a=e}finally{try{i||null==n.return||n.return()}finally{if(s)throw a}}return o}}(e,t)||c(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||c(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){if(e){if("string"==typeof e)return d(e,t)
var n=Object.prototype.toString.call(e).slice(8,-1)
return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length)
for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n]
return r}var p=function(){if("undefined"!=typeof globalThis)return globalThis
if("undefined"!=typeof self)return self
if(void 0!==f)return f
if("undefined"!=typeof global)return global
throw new Error("Unable to locate global object")}(),f=p.window,h=p.console,m=p.setTimeout,g=p.clearTimeout,v=f&&f.document,y=f&&f.navigator,b=function(){var e="qunit-test-string"
try{return p.sessionStorage.setItem(e,e),p.sessionStorage.removeItem(e),p.sessionStorage}catch(e){return}}(),w="function"==typeof p.Map&&"function"==typeof p.Map.prototype.keys&&"function"==typeof p.Symbol&&"symbol"===a(p.Symbol.iterator)?p.Map:function(e){var t=this,n=Object.create(null),r=Object.prototype.hasOwnProperty
this.has=function(e){return r.call(n,e)},this.get=function(e){return n[e]},this.set=function(e,t){return r.call(n,e)||this.size++,n[e]=t,this},this.delete=function(e){r.call(n,e)&&(delete n[e],this.size--)},this.forEach=function(e){for(var t in n)e(n[t],t)},this.keys=function(){return Object.keys(n)},this.clear=function(){n=Object.create(null),this.size=0},this.size=0,e&&e.forEach((function(e,n){t.set(n,e)}))},D={warn:h?Function.prototype.bind.call(h.warn||h.log,h):function(){}},x=Object.prototype.toString,E=Object.prototype.hasOwnProperty,C=f&&void 0!==f.performance&&"function"==typeof f.performance.mark&&"function"==typeof f.performance.measure?f.performance:void 0,A={now:C?C.now.bind(C):Date.now,measure:C?function(e,t,n){try{C.measure(e,t,n)}catch(e){D.warn("performance.measure could not be executed because of ",e.message)}}:function(){},mark:C?C.mark.bind(C):function(){}}
function k(e,t){for(var n=e.slice(),r=0;r<n.length;r++)for(var a=0;a<t.length;a++)if(n[r]===t[a]){n.splice(r,1),r--
break}return n}function T(e,t){return-1!==t.indexOf(e)}function N(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=t&&O("array",e)?[]:{}
for(var r in e)if(E.call(e,r)){var a=e[r]
n[r]=a===Object(a)?N(a,t):a}return n}function F(e,t){if(e!==Object(e))return e
var n={}
for(var r in t)E.call(t,r)&&E.call(e,r)&&(n[r]=F(e[r],t[r]))
return n}function R(e,t,n){for(var r in t)E.call(t,r)&&(void 0===t[r]?delete e[r]:n&&void 0!==e[r]||(e[r]=t[r]))
return e}function S(e){if(void 0===e)return"undefined"
if(null===e)return"null"
var t=x.call(e).match(/^\[object\s(.*)\]$/),n=t&&t[1]
switch(n){case"Number":return isNaN(e)?"nan":"number"
case"String":case"Boolean":case"Array":case"Set":case"Map":case"Date":case"RegExp":case"Function":case"Symbol":return n.toLowerCase()
default:return a(e)}}function O(e,t){return S(t)===e}function _(e,t){for(var n=e+""+t,r=0,a=0;a<n.length;a++)r=(r<<5)-r+n.charCodeAt(a),r|=0
var o=(4294967296+r).toString(16)
return o.length<8&&(o="0000000"+o),o.slice(-8)}function I(e){var t=String(e)
return"[object"===t.slice(0,7)?(e.name||"Error")+(e.message?": ".concat(e.message):""):t}var P=function(){var e=[]
function t(e,t){return"object"===a(e)&&(e=e.valueOf()),"object"===a(t)&&(t=t.valueOf()),e===t}function n(e){return"flags"in e?e.flags:e.toString().match(/[gimuy]*$/)[0]}function r(t,n){return t===n||(-1===["object","array","map","set"].indexOf(S(t))?i(t,n):(e.every((function(e){return e.a!==t||e.b!==n}))&&e.push({a:t,b:n}),!0))}var o={string:t,boolean:t,number:t,null:t,undefined:t,symbol:t,date:t,nan:function(){return!0},regexp:function(e,t){return e.source===t.source&&n(e)===n(t)},function:function(){return!1},array:function(e,t){var n=e.length
if(n!==t.length)return!1
for(var a=0;a<n;a++)if(!r(e[a],t[a]))return!1
return!0},set:function(t,n){if(t.size!==n.size)return!1
var r=!0
return t.forEach((function(t){if(r){var a=!1
n.forEach((function(n){if(!a){var r=e
s(n,t)&&(a=!0),e=r}})),a||(r=!1)}})),r},map:function(t,n){if(t.size!==n.size)return!1
var r=!0
return t.forEach((function(t,a){if(r){var o=!1
n.forEach((function(n,r){if(!o){var i=e
s([n,r],[t,a])&&(o=!0),e=i}})),o||(r=!1)}})),r},object:function(e,t){if(!1===function(e,t){var n=Object.getPrototypeOf(e),r=Object.getPrototypeOf(t)
return e.constructor===t.constructor||(n&&null===n.constructor&&(n=null),r&&null===r.constructor&&(r=null),null===n&&r===Object.prototype||null===r&&n===Object.prototype)}(e,t))return!1
var n=[],a=[]
for(var o in e)if(n.push(o),(e.constructor===Object||void 0===e.constructor||"function"!=typeof e[o]||"function"!=typeof t[o]||e[o].toString()!==t[o].toString())&&!r(e[o],t[o]))return!1
for(var s in t)a.push(s)
return i(n.sort(),a.sort())}}
function i(e,t){var n=S(e)
return S(t)===n&&o[n](e,t)}function s(t,n){if(arguments.length<2)return!0
e=[{a:t,b:n}]
for(var r=0;r<e.length;r++){var a=e[r]
if(a.a!==a.b&&!i(a.a,a.b))return!1}return 2===arguments.length||s.apply(this,[].slice.call(arguments,1))}return function(){var t=s.apply(void 0,arguments)
return e.length=0,t}}(),j={altertitle:!0,collapse:!0,failOnZeroTests:!0,filter:void 0,maxDepth:5,module:void 0,moduleId:void 0,reorder:!0,requireExpects:!1,scrolltop:!0,storage:b,testId:void 0,urlConfig:[],currentModule:{name:"",tests:[],childModules:[],testsRun:0,testsIgnored:0,hooks:{before:[],beforeEach:[],afterEach:[],after:[]}},globalHooks:{},blocking:!0,callbacks:{},modules:[],queue:[],stats:{all:0,bad:0,testCount:0}},M=p&&p.QUnit&&!p.QUnit.version&&p.QUnit.config
M&&R(j,M),j.modules.push(j.currentModule)
var q=function(){function e(e){return'"'+e.toString().replace(/\\/g,"\\\\").replace(/"/g,'\\"')+'"'}function t(e){return e+""}function n(e,t,n){var r=i.separator(),a=i.indent(1)
return t.join&&(t=t.join(","+r+a)),t?[e,a+t,i.indent()+n].join(r):e+n}function r(e,t){if(i.maxDepth&&i.depth>i.maxDepth)return"[object Array]"
this.up()
for(var r=e.length,a=new Array(r);r--;)a[r]=this.parse(e[r],void 0,t)
return this.down(),n("[",a,"]")}var o=/^function (\w+)/,i={parse:function(e,t,n){var r=(n=n||[]).indexOf(e)
if(-1!==r)return"recursion(".concat(r-n.length,")")
t=t||this.typeOf(e)
var o=this.parsers[t],i=a(o)
if("function"===i){n.push(e)
var s=o.call(this,e,n)
return n.pop(),s}return"string"===i?o:"[ERROR: Missing QUnit.dump formatter for type "+t+"]"},typeOf:function(e){var t
return t=null===e?"null":void 0===e?"undefined":O("regexp",e)?"regexp":O("date",e)?"date":O("function",e)?"function":void 0!==e.setInterval&&void 0!==e.document&&void 0===e.nodeType?"window":9===e.nodeType?"document":e.nodeType?"node":function(e){return"[object Array]"===x.call(e)||"number"==typeof e.length&&void 0!==e.item&&(e.length?e.item(0)===e[0]:null===e.item(0)&&void 0===e[0])}(e)?"array":e.constructor===Error.prototype.constructor?"error":a(e),t},separator:function(){return this.multiline?this.HTML?"<br />":"\n":this.HTML?"&#160;":" "},indent:function(e){if(!this.multiline)return""
var t=this.indentChar
return this.HTML&&(t=t.replace(/\t/g,"   ").replace(/ /g,"&#160;")),new Array(this.depth+(e||0)).join(t)},up:function(e){this.depth+=e||1},down:function(e){this.depth-=e||1},setParser:function(e,t){this.parsers[e]=t},quote:e,literal:t,join:n,depth:1,maxDepth:j.maxDepth,parsers:{window:"[Window]",document:"[Document]",error:function(e){return'Error("'+e.message+'")'},unknown:"[Unknown]",null:"null",undefined:"undefined",function:function(e){var t="function",r="name"in e?e.name:(o.exec(e)||[])[1]
return r&&(t+=" "+r),n(t=[t+="(",i.parse(e,"functionArgs"),"){"].join(""),i.parse(e,"functionCode"),"}")},array:r,nodelist:r,arguments:r,object:function(e,t){var r=[]
if(i.maxDepth&&i.depth>i.maxDepth)return"[object Object]"
i.up()
var a=[]
for(var o in e)a.push(o)
var s=["message","name"]
for(var l in s){var u=s[l]
u in e&&!T(u,a)&&a.push(u)}a.sort()
for(var c=0;c<a.length;c++){var d=a[c],p=e[d]
r.push(i.parse(d,"key")+": "+i.parse(p,void 0,t))}return i.down(),n("{",r,"}")},node:function(e){var t=i.HTML?"&lt;":"<",n=i.HTML?"&gt;":">",r=e.nodeName.toLowerCase(),a=t+r,o=e.attributes
if(o)for(var s=0;s<o.length;s++){var l=o[s].nodeValue
l&&"inherit"!==l&&(a+=" "+o[s].nodeName+"="+i.parse(l,"attribute"))}return a+=n,3!==e.nodeType&&4!==e.nodeType||(a+=e.nodeValue),a+t+"/"+r+n},functionArgs:function(e){var t=e.length
if(!t)return""
for(var n=new Array(t);t--;)n[t]=String.fromCharCode(97+t)
return" "+n.join(", ")+" "},key:e,functionCode:"[code]",attribute:e,string:e,date:e,regexp:t,number:t,boolean:t,symbol:function(e){return e.toString()}},HTML:!1,indentChar:"  ",multiline:!0}
return i}(),L=function(){function e(t,n){o(this,e),this.name=t,this.fullName=n?n.fullName.concat(t):[],this.globalFailureCount=0,this.tests=[],this.childSuites=[],n&&n.pushChildSuite(this)}return s(e,[{key:"start",value:function(e){if(e){this._startTime=A.now()
var t=this.fullName.length
A.mark("qunit_suite_".concat(t,"_start"))}return{name:this.name,fullName:this.fullName.slice(),tests:this.tests.map((function(e){return e.start()})),childSuites:this.childSuites.map((function(e){return e.start()})),testCounts:{total:this.getTestCounts().total}}}},{key:"end",value:function(e){if(e){this._endTime=A.now()
var t=this.fullName.length,n=this.fullName.join(" – ")
A.mark("qunit_suite_".concat(t,"_end")),A.measure(0===t?"QUnit Test Run":"QUnit Test Suite: ".concat(n),"qunit_suite_".concat(t,"_start"),"qunit_suite_".concat(t,"_end"))}return{name:this.name,fullName:this.fullName.slice(),tests:this.tests.map((function(e){return e.end()})),childSuites:this.childSuites.map((function(e){return e.end()})),testCounts:this.getTestCounts(),runtime:this.getRuntime(),status:this.getStatus()}}},{key:"pushChildSuite",value:function(e){this.childSuites.push(e)}},{key:"pushTest",value:function(e){this.tests.push(e)}},{key:"getRuntime",value:function(){return Math.round(this._endTime-this._startTime)}},{key:"getTestCounts",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{passed:0,failed:0,skipped:0,todo:0,total:0}
return e.failed+=this.globalFailureCount,e.total+=this.globalFailureCount,e=this.tests.reduce((function(e,t){return t.valid&&(e[t.getStatus()]++,e.total++),e}),e),this.childSuites.reduce((function(e,t){return t.getTestCounts(e)}),e)}},{key:"getStatus",value:function(){var e=this.getTestCounts(),t=e.total,n=e.failed,r=e.skipped,a=e.todo
return n?"failed":r===t?"skipped":a===t?"todo":"passed"}}]),e}(),B=[],H=new L
function U(e,t,n){var r=B.length?B.slice(-1)[0]:null,a=null!==r?[r.name,e].join(" > "):e,o=r?r.suiteReport:H,i=null!==r&&r.skip||n.skip,s=null!==r&&r.todo||n.todo,l={}
r&&R(l,r.testEnvironment),R(l,t)
var u={name:a,parentModule:r,hooks:{before:[],beforeEach:[],afterEach:[],after:[]},testEnvironment:l,tests:[],moduleId:_(a),testsRun:0,testsIgnored:0,childModules:[],suiteReport:new L(e,o),stats:null,skip:i,todo:!i&&s,ignored:n.ignored||!1}
return r&&r.childModules.push(u),j.modules.push(u),u}function z(e,t,n){var r=t[n]
"function"==typeof r&&e[n].push(r),delete t[n]}function $(e,t){return function(n){j.currentModule!==e&&D.warn("The `"+t+"` hook was called inside the wrong module (`"+j.currentModule.name+"`). Instead, use hooks provided by the callback to the containing module (`"+e.name+"`). This will become an error in QUnit 3.0."),e.hooks[t].push(n)}}function V(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}
"function"==typeof t&&(n=t,t=void 0)
var a=U(e,t,r),o=a.testEnvironment,i=a.hooks
z(i,o,"before"),z(i,o,"beforeEach"),z(i,o,"afterEach"),z(i,o,"after")
var s={before:$(a,"before"),beforeEach:$(a,"beforeEach"),afterEach:$(a,"afterEach"),after:$(a,"after")},l=j.currentModule
if(j.currentModule=a,"function"==typeof n){B.push(a)
try{var u=n.call(a.testEnvironment,s)
u&&"function"==typeof u.then&&D.warn("Returning a promise from a module callback is not supported. Instead, use hooks for async behavior. This will become an error in QUnit 3.0.")}finally{B.pop(),j.currentModule=a.parentModule||l}}}var W=!1
function G(e,t,n){var r,a=W&&(r=j.modules.filter((function(e){return!e.ignored})).map((function(e){return e.moduleId})),!B.some((function(e){return r.includes(e.moduleId)})))
V(e,t,n,{ignored:a})}G.only=function(){W||(j.modules.length=0,j.queue.length=0,j.currentModule.ignored=!0),W=!0,V.apply(void 0,arguments)},G.skip=function(e,t,n){W||V(e,t,n,{skip:!0})},G.todo=function(e,t,n){W||V(e,t,n,{todo:!0})}
var Y=(X(0)||"").replace(/(:\d+)+\)?/,"").replace(/.+[/\\]/,"")
function Q(e,t){if(t=void 0===t?4:t,e&&e.stack){var n=e.stack.split("\n")
if(/^error$/i.test(n[0])&&n.shift(),Y){for(var r=[],a=t;a<n.length&&-1===n[a].indexOf(Y);a++)r.push(n[a])
if(r.length)return r.join("\n")}return n[t]}}function X(e){var t=new Error
if(!t.stack)try{throw t}catch(e){t=e}return Q(t,e)}var K=function(){function e(t){o(this,e),this.test=t}return s(e,[{key:"timeout",value:function(e){if("number"!=typeof e)throw new Error("You must pass a number as the duration to assert.timeout")
this.test.timeout=e,j.timeout&&(g(j.timeout),j.timeout=null,j.timeoutHandler&&this.test.timeout>0&&this.test.internalResetTimeout(this.test.timeout))}},{key:"step",value:function(e){var t=e,n=!!e
this.test.steps.push(e),void 0===e||""===e?t="You must provide a message to assert.step":"string"!=typeof e&&(t="You must provide a string value to assert.step",n=!1),this.pushResult({result:n,message:t})}},{key:"verifySteps",value:function(e,t){var n=this.test.steps.slice()
this.deepEqual(n,e,t),this.test.steps.length=0}},{key:"expect",value:function(e){if(1!==arguments.length)return this.test.expected
this.test.expected=e}},{key:"async",value:function(e){var t=void 0===e?1:e
return this.test.internalStop(t)}},{key:"push",value:function(t,n,r,a,o){return D.warn("assert.push is deprecated and will be removed in QUnit 3.0. Please use assert.pushResult instead (https://api.qunitjs.com/assert/pushResult)."),(this instanceof e?this:j.current.assert).pushResult({result:t,actual:n,expected:r,message:a,negative:o})}},{key:"pushResult",value:function(t){var n=this,r=n instanceof e&&n.test||j.current
if(!r)throw new Error("assertion outside test context, in "+X(2))
return n instanceof e||(n=r.assert),n.test.pushResult(t)}},{key:"ok",value:function(e,t){t||(t=e?"okay":"failed, expected argument to be truthy, was: ".concat(q.parse(e))),this.pushResult({result:!!e,actual:e,expected:!0,message:t})}},{key:"notOk",value:function(e,t){t||(t=e?"failed, expected argument to be falsy, was: ".concat(q.parse(e)):"okay"),this.pushResult({result:!e,actual:e,expected:!1,message:t})}},{key:"true",value:function(e,t){this.pushResult({result:!0===e,actual:e,expected:!0,message:t})}},{key:"false",value:function(e,t){this.pushResult({result:!1===e,actual:e,expected:!1,message:t})}},{key:"equal",value:function(e,t,n){var r=t==e
this.pushResult({result:r,actual:e,expected:t,message:n})}},{key:"notEqual",value:function(e,t,n){var r=t!=e
this.pushResult({result:r,actual:e,expected:t,message:n,negative:!0})}},{key:"propEqual",value:function(e,t,n){e=N(e),t=N(t),this.pushResult({result:P(e,t),actual:e,expected:t,message:n})}},{key:"notPropEqual",value:function(e,t,n){e=N(e),t=N(t),this.pushResult({result:!P(e,t),actual:e,expected:t,message:n,negative:!0})}},{key:"propContains",value:function(e,t,n){e=F(e,t),t=N(t,!1),this.pushResult({result:P(e,t),actual:e,expected:t,message:n})}},{key:"notPropContains",value:function(e,t,n){e=F(e,t),t=N(t),this.pushResult({result:!P(e,t),actual:e,expected:t,message:n,negative:!0})}},{key:"deepEqual",value:function(e,t,n){this.pushResult({result:P(e,t),actual:e,expected:t,message:n})}},{key:"notDeepEqual",value:function(e,t,n){this.pushResult({result:!P(e,t),actual:e,expected:t,message:n,negative:!0})}},{key:"strictEqual",value:function(e,t,n){this.pushResult({result:t===e,actual:e,expected:t,message:n})}},{key:"notStrictEqual",value:function(e,t,n){this.pushResult({result:t!==e,actual:e,expected:t,message:n,negative:!0})}},{key:"throws",value:function(t,n,r){var a=l(J(n,r,"throws"),2)
n=a[0],r=a[1]
var o=this instanceof e&&this.test||j.current
if("function"==typeof t){var i,s=!1
o.ignoreGlobalErrors=!0
try{t.call(o.testEnvironment)}catch(e){i=e}if(o.ignoreGlobalErrors=!1,i){var u=l(Z(i,n,r),3)
s=u[0],n=u[1],r=u[2]}o.assert.pushResult({result:s,actual:i&&I(i),expected:n,message:r})}else{var c='The value provided to `assert.throws` in "'+o.testName+'" was not a function.'
o.assert.pushResult({result:!1,actual:t,message:c})}}},{key:"rejects",value:function(t,n,r){var a=l(J(n,r,"rejects"),2)
n=a[0],r=a[1]
var o=this instanceof e&&this.test||j.current,i=t&&t.then
if("function"==typeof i){var s=this.async()
return i.call(t,(function(){var e='The promise returned by the `assert.rejects` callback in "'+o.testName+'" did not reject.'
o.assert.pushResult({result:!1,message:e,actual:t}),s()}),(function(e){var t,a=l(Z(e,n,r),3)
t=a[0],n=a[1],r=a[2],o.assert.pushResult({result:t,actual:e&&I(e),expected:n,message:r}),s()}))}var u='The value provided to `assert.rejects` in "'+o.testName+'" was not a promise.'
o.assert.pushResult({result:!1,message:u,actual:t})}}]),e}()
function J(e,t,n){var r=S(e)
if("string"===r){if(void 0===t)return t=e,[e=void 0,t]
throw new Error("assert."+n+" does not accept a string value for the expected argument.\nUse a non-string object value (e.g. RegExp or validator function) instead if necessary.")}if(e&&"regexp"!==r&&"function"!==r&&"object"!==r)throw new Error("Invalid expected value type ("+r+") provided to assert."+n+".")
return[e,t]}function Z(e,t,n){var r=!1,a=S(t)
if(t){if("regexp"===a)r=t.test(I(e)),t=String(t)
else if("function"===a&&void 0!==t.prototype&&e instanceof t)r=!0
else if("object"===a)r=e instanceof t.constructor&&e.name===t.name&&e.message===t.message,t=I(t)
else if("function"===a)try{r=!0===t.call({},e),t=null}catch(e){t=I(e)}}else r=!0
return[r,t,n]}K.prototype.raises=K.prototype.throws
var ee=Object.create(null),te=["error","runStart","suiteStart","testStart","assertion","testEnd","suiteEnd","runEnd"]
function ne(e,t){if("string"!=typeof e)throw new TypeError("eventName must be a string when emitting an event")
for(var n=ee[e],r=n?u(n):[],a=0;a<r.length;a++)r[a](t)}var re="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},ae={exports:{}}
!function(){var e=function(){if("undefined"!=typeof globalThis)return globalThis
if("undefined"!=typeof self)return self
if("undefined"!=typeof window)return window
if(void 0!==re)return re
throw new Error("unable to locate global object")}()
if("function"!=typeof e.Promise){var t=setTimeout
o.prototype.catch=function(e){return this.then(null,e)},o.prototype.then=function(e,t){var n=new this.constructor(r)
return i(this,new c(e,t,n)),n},o.prototype.finally=function(e){var t=this.constructor
return this.then((function(n){return t.resolve(e()).then((function(){return n}))}),(function(n){return t.resolve(e()).then((function(){return t.reject(n)}))}))},o.all=function(e){return new o((function(t,r){if(!n(e))return r(new TypeError("Promise.all accepts an array"))
var o=Array.prototype.slice.call(e)
if(0===o.length)return t([])
var i=o.length
function s(e,n){try{if(n&&("object"===a(n)||"function"==typeof n)){var l=n.then
if("function"==typeof l)return void l.call(n,(function(t){s(e,t)}),r)}o[e]=n,0==--i&&t(o)}catch(e){r(e)}}for(var l=0;l<o.length;l++)s(l,o[l])}))},o.allSettled=function(e){return new this((function(t,n){if(!e||void 0===e.length)return n(new TypeError(a(e)+" "+e+" is not iterable(cannot read property Symbol(Symbol.iterator))"))
var r=Array.prototype.slice.call(e)
if(0===r.length)return t([])
var o=r.length
function i(e,n){if(n&&("object"===a(n)||"function"==typeof n)){var s=n.then
if("function"==typeof s)return void s.call(n,(function(t){i(e,t)}),(function(n){r[e]={status:"rejected",reason:n},0==--o&&t(r)}))}r[e]={status:"fulfilled",value:n},0==--o&&t(r)}for(var s=0;s<r.length;s++)i(s,r[s])}))},o.resolve=function(e){return e&&"object"===a(e)&&e.constructor===o?e:new o((function(t){t(e)}))},o.reject=function(e){return new o((function(t,n){n(e)}))},o.race=function(e){return new o((function(t,r){if(!n(e))return r(new TypeError("Promise.race accepts an array"))
for(var a=0,i=e.length;a<i;a++)o.resolve(e[a]).then(t,r)}))},o._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){t(e,0)},o._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},ae.exports=o}else ae.exports=e.Promise
function n(e){return Boolean(e&&void 0!==e.length)}function r(){}function o(e){if(!(this instanceof o))throw new TypeError("Promises must be constructed via new")
if("function"!=typeof e)throw new TypeError("not a function")
this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],d(e,this)}function i(e,t){for(;3===e._state;)e=e._value
0!==e._state?(e._handled=!0,o._immediateFn((function(){var n=1===e._state?t.onFulfilled:t.onRejected
if(null!==n){var r
try{r=n(e._value)}catch(e){return void l(t.promise,e)}s(t.promise,r)}else(1===e._state?s:l)(t.promise,e._value)}))):e._deferreds.push(t)}function s(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.")
if(t&&("object"===a(t)||"function"==typeof t)){var n=t.then
if(t instanceof o)return e._state=3,e._value=t,void u(e)
if("function"==typeof n)return void d((r=n,i=t,function(){r.apply(i,arguments)}),e)}e._state=1,e._value=t,u(e)}catch(t){l(e,t)}var r,i}function l(e,t){e._state=2,e._value=t,u(e)}function u(e){2===e._state&&0===e._deferreds.length&&o._immediateFn((function(){e._handled||o._unhandledRejectionFn(e._value)}))
for(var t=0,n=e._deferreds.length;t<n;t++)i(e,e._deferreds[t])
e._deferreds=null}function c(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function d(e,t){var n=!1
try{e((function(e){n||(n=!0,s(t,e))}),(function(e){n||(n=!0,l(t,e))}))}catch(e){if(n)return
n=!0,l(t,e)}}}()
var oe=ae.exports
function ie(e,t){var n=j.callbacks[e]
if("log"!==e){var r=oe.resolve()
return n.forEach((function(e){r=r.then((function(){return oe.resolve(e(t))}))})),r}n.map((function(e){return e(t)}))}var se,le=0,ue=[]
function ce(){var e,t
e=A.now(),j.depth=(j.depth||0)+1,de(e),j.depth--,ue.length||j.blocking||j.current||(j.blocking||j.queue.length||0!==j.depth?(t=j.queue.shift()(),ue.push.apply(ue,u(t)),le>0&&le--,ce()):function(){var e
if(0===j.stats.testCount&&!0===j.failOnZeroTests)return e=j.filter&&j.filter.length?new Error('No tests matched the filter "'.concat(j.filter,'".')):j.module&&j.module.length?new Error('No tests matched the module "'.concat(j.module,'".')):j.moduleId&&j.moduleId.length?new Error('No tests matched the moduleId "'.concat(j.moduleId,'".')):j.testId&&j.testId.length?new Error('No tests matched the testId "'.concat(j.testId,'".')):new Error("No tests were run."),we("global failure",R((function(t){t.pushResult({result:!1,message:e.message,source:e.stack})}),{validTest:!0})),void ce()
var t=j.storage,n=Math.round(A.now()-j.started),r=j.stats.all-j.stats.bad
pe.finished=!0,ne("runEnd",H.end(!0)),ie("done",{passed:r,failed:j.stats.bad,total:j.stats.all,runtime:n}).then((function(){if(t&&0===j.stats.bad)for(var e=t.length-1;e>=0;e--){var n=t.key(e)
0===n.indexOf("qunit-test-")&&t.removeItem(n)}}))}())}function de(e){if(ue.length&&!j.blocking){var t=A.now()-e
if(!m||j.updateRate<=0||t<j.updateRate){var n=ue.shift()
oe.resolve(n()).then((function(){ue.length?de(e):ce()}))}else m(ce)}}var pe={finished:!1,add:function(e,t,n){if(t)j.queue.splice(le++,0,e)
else if(n){se||(se=function(e){var t=parseInt(_(e),16)||-1
return function(){return t^=t<<13,t^=t>>>17,(t^=t<<5)<0&&(t+=4294967296),t/4294967296}}(n))
var r=Math.floor(se()*(j.queue.length-le+1))
j.queue.splice(le+r,0,e)}else j.queue.push(e)},advance:ce,taskCount:function(){return ue.length}},fe=function(){function e(t,n,r){o(this,e),this.name=t,this.suiteName=n.name,this.fullName=n.fullName.concat(t),this.runtime=0,this.assertions=[],this.skipped=!!r.skip,this.todo=!!r.todo,this.valid=r.valid,this._startTime=0,this._endTime=0,n.pushTest(this)}return s(e,[{key:"start",value:function(e){return e&&(this._startTime=A.now(),A.mark("qunit_test_start")),{name:this.name,suiteName:this.suiteName,fullName:this.fullName.slice()}}},{key:"end",value:function(e){if(e&&(this._endTime=A.now(),A)){A.mark("qunit_test_end")
var t=this.fullName.join(" – ")
A.measure("QUnit Test: ".concat(t),"qunit_test_start","qunit_test_end")}return R(this.start(),{runtime:this.getRuntime(),status:this.getStatus(),errors:this.getFailedAssertions(),assertions:this.getAssertions()})}},{key:"pushAssertion",value:function(e){this.assertions.push(e)}},{key:"getRuntime",value:function(){return Math.round(this._endTime-this._startTime)}},{key:"getStatus",value:function(){return this.skipped?"skipped":(this.getFailedAssertions().length>0?this.todo:!this.todo)?this.todo?"todo":"passed":"failed"}},{key:"getFailedAssertions",value:function(){return this.assertions.filter((function(e){return!e.passed}))}},{key:"getAssertions",value:function(){return this.assertions.slice()}},{key:"slimAssertions",value:function(){this.assertions=this.assertions.map((function(e){return delete e.actual,delete e.expected,e}))}}]),e}()
function he(e){if(this.expected=null,this.assertions=[],this.module=j.currentModule,this.steps=[],this.timeout=void 0,this.data=void 0,this.withData=!1,this.pauses=new w,this.nextPauseId=1,this.stackOffset=3,R(this,e),this.module.skip?(this.skip=!0,this.todo=!1):this.module.todo&&!this.skip&&(this.todo=!0),pe.finished)D.warn("Unexpected test after runEnd. This is unstable and will fail in QUnit 3.0.")
else{if(!this.skip&&"function"!=typeof this.callback){var t=this.todo?"QUnit.todo":"QUnit.test"
throw new TypeError("You must provide a callback to ".concat(t,'("').concat(this.testName,'")'))}++he.count,this.errorForStack=new Error,this.callback&&this.callback.validTest&&(this.errorForStack.stack=void 0),this.testReport=new fe(this.testName,this.module.suiteReport,{todo:this.todo,skip:this.skip,valid:this.valid()})
for(var n=0,r=this.module.tests;n<r.length;n++)this.module.tests[n].name===this.testName&&(this.testName+=" ")
this.testId=_(this.module.name,this.testName),this.module.tests.push({name:this.testName,testId:this.testId,skip:!!this.skip}),this.skip?(this.callback=function(){},this.async=!1,this.expected=0):this.assert=new K(this)}}function me(){if(!j.current)throw new Error("pushFailure() assertion outside test context, in "+X(2))
var e=j.current
return e.pushFailure.apply(e,arguments)}function ge(){if(j.pollution=[],j.noglobals)for(var e in p)if(E.call(p,e)){if(/^qunit-test-output/.test(e))continue
j.pollution.push(e)}}he.count=0,he.prototype={get stack(){return Q(this.errorForStack,this.stackOffset)},before:function(){var e=this,t=this.module,n=function(e){for(var t=e,n=[];t&&0===t.testsRun;)n.push(t),t=t.parentModule
return n.reverse()}(t),r=oe.resolve()
return n.forEach((function(e){r=r.then((function(){return e.stats={all:0,bad:0,started:A.now()},ne("suiteStart",e.suiteReport.start(!0)),ie("moduleStart",{name:e.name,tests:e.tests})}))})),r.then((function(){return j.current=e,e.testEnvironment=R({},t.testEnvironment),e.started=A.now(),ne("testStart",e.testReport.start(!0)),ie("testStart",{name:e.testName,module:t.name,testId:e.testId,previousFailure:e.previousFailure}).then((function(){j.pollution||ge()}))}))},run:function(){if(j.current=this,j.notrycatch)e(this)
else try{e(this)}catch(e){this.pushFailure("Died on test #"+(this.assertions.length+1)+": "+(e.message||e)+"\n"+this.stack,Q(e,0)),ge(),j.blocking&&Ee(this)}function e(e){var t
t=e.withData?e.callback.call(e.testEnvironment,e.assert,e.data):e.callback.call(e.testEnvironment,e.assert),e.resolvePromise(t),0===e.timeout&&e.pauses.size>0&&me("Test did not finish synchronously even though assert.timeout( 0 ) was used.",X(2))}},after:function(){!function(){var e=j.pollution
ge()
var t=k(j.pollution,e)
t.length>0&&me("Introduced global variable(s): "+t.join(", "))
var n=k(e,j.pollution)
n.length>0&&me("Deleted global variable(s): "+n.join(", "))}()},queueGlobalHook:function(e,t){var n=this
return function(){var r
if(j.current=n,j.notrycatch)r=e.call(n.testEnvironment,n.assert)
else try{r=e.call(n.testEnvironment,n.assert)}catch(e){return void n.pushFailure("Global "+t+" failed on "+n.testName+": "+I(e),Q(e,0))}n.resolvePromise(r,t)}},queueHook:function(e,t,n){var r=this,a=function(){var n=e.call(r.testEnvironment,r.assert)
r.resolvePromise(n,t)}
return function(){if("before"===t){if(0!==n.testsRun)return
r.preserveEnvironment=!0}if("after"!==t||function(e){return e.testsRun===Ae(e).filter((function(e){return!e.skip})).length-1}(n)||!(j.queue.length>0||pe.taskCount()>2))if(j.current=r,j.notrycatch)a()
else try{a()}catch(e){r.pushFailure(t+" failed on "+r.testName+": "+(e.message||e),Q(e,0))}}},hooks:function(e){var t=[]
return this.skip||(function(n){if(("beforeEach"===e||"afterEach"===e)&&j.globalHooks[e])for(var r=0;r<j.globalHooks[e].length;r++)t.push(n.queueGlobalHook(j.globalHooks[e][r],e))}(this),function n(r,a){if(a.parentModule&&n(r,a.parentModule),a.hooks[e].length)for(var o=0;o<a.hooks[e].length;o++)t.push(r.queueHook(a.hooks[e][o],e,a))}(this,this.module)),t},finish:function(){if(j.current=this,this.callback=void 0,this.steps.length){var e=this.steps.join(", ")
this.pushFailure("Expected assert.verifySteps() to be called before end of test "+"after using assert.step(). Unverified steps: ".concat(e),this.stack)}j.requireExpects&&null===this.expected?this.pushFailure("Expected number of assertions to be defined, but expect() was not called.",this.stack):null!==this.expected&&this.expected!==this.assertions.length?this.pushFailure("Expected "+this.expected+" assertions, but "+this.assertions.length+" were run",this.stack):null!==this.expected||this.assertions.length||this.pushFailure("Expected at least one assertion, but none were run - call expect(0) to accept zero assertions.",this.stack)
var t=this.module,n=t.name,r=this.testName,a=!!this.skip,o=!!this.todo,i=0,s=j.storage
this.runtime=Math.round(A.now()-this.started),j.stats.all+=this.assertions.length,j.stats.testCount+=1,t.stats.all+=this.assertions.length
for(var l=0;l<this.assertions.length;l++)this.assertions[l].result||(i++,j.stats.bad++,t.stats.bad++)
a?Te(t):function(e){for(e.testsRun++;e=e.parentModule;)e.testsRun++}(t),s&&(i?s.setItem("qunit-test-"+n+"-"+r,i):s.removeItem("qunit-test-"+n+"-"+r)),ne("testEnd",this.testReport.end(!0)),this.testReport.slimAssertions()
var c=this
return ie("testDone",{name:r,module:n,skipped:a,todo:o,failed:i,passed:this.assertions.length-i,total:this.assertions.length,runtime:a?0:this.runtime,assertions:this.assertions,testId:this.testId,get source(){return c.stack}}).then((function(){if(ke(t)){for(var e=[t],n=t.parentModule;n&&ke(n);)e.push(n),n=n.parentModule
var r=oe.resolve()
return e.forEach((function(e){r=r.then((function(){return function(e){for(var t=[e];t.length;){var n=t.shift()
n.hooks={},t.push.apply(t,u(n.childModules))}return ne("suiteEnd",e.suiteReport.end(!0)),ie("moduleDone",{name:e.name,tests:e.tests,failed:e.stats.bad,passed:e.stats.all-e.stats.bad,total:e.stats.all,runtime:Math.round(A.now()-e.stats.started)})}(e)}))})),r}})).then((function(){j.current=void 0}))},preserveTestEnvironment:function(){this.preserveEnvironment&&(this.module.testEnvironment=this.testEnvironment,this.testEnvironment=R({},this.module.testEnvironment))},queue:function(){var e=this
if(this.valid()){var t=j.storage&&+j.storage.getItem("qunit-test-"+this.module.name+"-"+this.testName),n=j.reorder&&!!t
this.previousFailure=!!t,pe.add((function(){return[function(){return e.before()}].concat(u(e.hooks("before")),[function(){e.preserveTestEnvironment()}],u(e.hooks("beforeEach")),[function(){e.run()}],u(e.hooks("afterEach").reverse()),u(e.hooks("after").reverse()),[function(){e.after()},function(){return e.finish()}])}),n,j.seed)}else Te(this.module)},pushResult:function(e){if(this!==j.current){var t=e&&e.message||"",n=this&&this.testName||""
throw new Error("Assertion occurred after test finished.\n> Test: "+n+"\n> Message: "+t+"\n")}var r={module:this.module.name,name:this.testName,result:e.result,message:e.message,actual:e.actual,testId:this.testId,negative:e.negative||!1,runtime:Math.round(A.now()-this.started),todo:!!this.todo}
if(E.call(e,"expected")&&(r.expected=e.expected),!e.result){var a=e.source||X()
a&&(r.source=a)}this.logAssertion(r),this.assertions.push({result:!!e.result,message:e.message})},pushFailure:function(e,t,n){if(!(this instanceof he))throw new Error("pushFailure() assertion outside test context, was "+X(2))
this.pushResult({result:!1,message:e||"error",actual:n||null,source:t})},logAssertion:function(e){ie("log",e)
var t={passed:e.result,actual:e.actual,expected:e.expected,message:e.message,stack:e.source,todo:e.todo}
this.testReport.pushAssertion(t),ne("assertion",t)},internalResetTimeout:function(e){g(j.timeout),j.timeout=m(j.timeoutHandler(e),e)},internalStop:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1
j.blocking=!0
var t,n=this,r=this.nextPauseId++,a={cancelled:!1,remaining:e}
function o(){if(!a.cancelled){if(void 0===j.current)throw new Error("Unexpected release of async pause after tests finished.\n"+"> Test: ".concat(n.testName," [async #").concat(r,"]"))
if(j.current!==n)throw new Error("Unexpected release of async pause during a different test.\n"+"> Test: ".concat(n.testName," [async #").concat(r,"]"))
if(a.remaining<=0)throw new Error("Tried to release async pause that was already released.\n"+"> Test: ".concat(n.testName," [async #").concat(r,"]"))
a.remaining--,0===a.remaining&&n.pauses.delete(r),Ce(n)}}return n.pauses.set(r,a),m&&("number"==typeof n.timeout?t=n.timeout:"number"==typeof j.testTimeout&&(t=j.testTimeout),"number"==typeof t&&t>0&&(j.timeoutHandler=function(e){return function(){j.timeout=null,a.cancelled=!0,n.pauses.delete(r),n.pushFailure("Test took longer than ".concat(e,"ms; test timed out."),X(2)),Ce(n)}},g(j.timeout),j.timeout=m(j.timeoutHandler(t),t))),o},resolvePromise:function(e,t){if(null!=e){var n=this,r=e.then
if("function"==typeof r){var a=n.internalStop(),o=function(){a()}
j.notrycatch?r.call(e,o):r.call(e,o,(function(e){var r="Promise rejected "+(t?t.replace(/Each$/,""):"during")+' "'+n.testName+'": '+(e&&e.message||e)
n.pushFailure(r,Q(e,0)),ge(),Ee(n)}))}}},valid:function(){if(this.callback&&this.callback.validTest)return!0
if(!function e(t,n){return!n||!n.length||T(t.moduleId,n)||t.parentModule&&e(t.parentModule,n)}(this.module,j.moduleId))return!1
if(j.testId&&j.testId.length&&!T(this.testId,j.testId))return!1
var e=j.module&&j.module.toLowerCase()
if(!function e(t,n){return!n||(t.name?t.name.toLowerCase():null)===n||!!t.parentModule&&e(t.parentModule,n)}(this.module,e))return!1
var t=j.filter
if(!t)return!0
var n=/^(!?)\/([\w\W]*)\/(i?$)/.exec(t),r=this.module.name+": "+this.testName
return n?this.regexFilter(!!n[1],n[2],n[3],r):this.stringFilter(t,r)},regexFilter:function(e,t,n,r){return new RegExp(t,n).test(r)!==e},stringFilter:function(e,t){e=e.toLowerCase(),t=t.toLowerCase()
var n="!"!==e.charAt(0)
return n||(e=e.slice(1)),-1!==t.indexOf(e)?n:!n}}
var ve=!1
function ye(e){ve||j.currentModule.ignored||new he(e).queue()}function be(e){j.currentModule.ignored||(ve||(j.queue.length=0,ve=!0),new he(e).queue())}function we(e,t){ye({testName:e,callback:t})}function De(e,t){return"".concat(e," [").concat(t,"]")}function xe(e,t){if(Array.isArray(e))for(var n=0;n<e.length;n++)t(e[n],n)
else{if("object"!==a(e)||null===e)throw new Error("test.each() expects an array or object as input, but\nfound ".concat(a(e)," instead."))
for(var r in e)t(e[r],r)}}function Ee(e){e.pauses.forEach((function(e){e.cancelled=!0})),e.pauses.clear(),Ce(e)}function Ce(e){e.pauses.size>0||(m?(g(j.timeout),j.timeout=m((function(){e.pauses.size>0||(g(j.timeout),j.timeout=null,j.blocking=!1,pe.advance())}))):(j.blocking=!1,pe.advance()))}function Ae(e){for(var t=[].concat(e.tests),n=u(e.childModules);n.length;){var r=n.shift()
t.push.apply(t,r.tests),n.push.apply(n,u(r.childModules))}return t}function ke(e){return e.testsRun+e.testsIgnored===Ae(e).length}function Te(e){for(e.testsIgnored++;e=e.parentModule;)e.testsIgnored++}R(we,{todo:function(e,t){ye({testName:e,callback:t,todo:!0})},skip:function(e){ye({testName:e,skip:!0})},only:function(e,t){be({testName:e,callback:t})},each:function(e,t,n){xe(t,(function(t,r){ye({testName:De(e,r),callback:n,withData:!0,stackOffset:5,data:t})}))}}),we.todo.each=function(e,t,n){xe(t,(function(t,r){ye({testName:De(e,r),callback:n,todo:!0,withData:!0,stackOffset:5,data:t})}))},we.skip.each=function(e,t){xe(t,(function(t,n){ye({testName:De(e,n),stackOffset:5,skip:!0})}))},we.only.each=function(e,t,n){xe(t,(function(t,r){be({testName:De(e,r),callback:n,withData:!0,stackOffset:5,data:t})}))}
var Ne,Fe,Re,Se,Oe=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
o(this,e),this.log=n.log||Function.prototype.bind.call(h.log,h),t.on("error",this.onError.bind(this)),t.on("runStart",this.onRunStart.bind(this)),t.on("testStart",this.onTestStart.bind(this)),t.on("testEnd",this.onTestEnd.bind(this)),t.on("runEnd",this.onRunEnd.bind(this))}return s(e,[{key:"onError",value:function(e){this.log("error",e)}},{key:"onRunStart",value:function(e){this.log("runStart",e)}},{key:"onTestStart",value:function(e){this.log("testStart",e)}},{key:"onTestEnd",value:function(e){this.log("testEnd",e)}},{key:"onRunEnd",value:function(e){this.log("runEnd",e)}}],[{key:"init",value:function(t,n){return new e(t,n)}}]),e}(),_e=!0
if("undefined"!=typeof process){var Ie=process.env
Ne=Ie.FORCE_COLOR,Fe=Ie.NODE_DISABLE_COLORS,Re=Ie.NO_COLOR,Se=Ie.TERM,_e=process.stdout&&process.stdout.isTTY}var Pe={enabled:!Fe&&null==Re&&"dumb"!==Se&&(null!=Ne&&"0"!==Ne||_e),reset:Me(0,0),bold:Me(1,22),dim:Me(2,22),italic:Me(3,23),underline:Me(4,24),inverse:Me(7,27),hidden:Me(8,28),strikethrough:Me(9,29),black:Me(30,39),red:Me(31,39),green:Me(32,39),yellow:Me(33,39),blue:Me(34,39),magenta:Me(35,39),cyan:Me(36,39),white:Me(37,39),gray:Me(90,39),grey:Me(90,39),bgBlack:Me(40,49),bgRed:Me(41,49),bgGreen:Me(42,49),bgYellow:Me(43,49),bgBlue:Me(44,49),bgMagenta:Me(45,49),bgCyan:Me(46,49),bgWhite:Me(47,49)}
function je(e,t){for(var n,r=0,a="",o="";r<e.length;r++)a+=(n=e[r]).open,o+=n.close,~t.indexOf(n.close)&&(t=t.replace(n.rgx,n.close+n.open))
return a+t+o}function Me(e,t){var n={open:"[".concat(e,"m"),close:"[".concat(t,"m"),rgx:new RegExp("\\x1b\\[".concat(t,"m"),"g")}
return function(t){return void 0!==this&&void 0!==this.has?(~this.has.indexOf(e)||(this.has.push(e),this.keys.push(n)),void 0===t?this:Pe.enabled?je(this.keys,t+""):t+""):void 0===t?((r={has:[e],keys:[n]}).reset=Pe.reset.bind(r),r.bold=Pe.bold.bind(r),r.dim=Pe.dim.bind(r),r.italic=Pe.italic.bind(r),r.underline=Pe.underline.bind(r),r.inverse=Pe.inverse.bind(r),r.hidden=Pe.hidden.bind(r),r.strikethrough=Pe.strikethrough.bind(r),r.black=Pe.black.bind(r),r.red=Pe.red.bind(r),r.green=Pe.green.bind(r),r.yellow=Pe.yellow.bind(r),r.blue=Pe.blue.bind(r),r.magenta=Pe.magenta.bind(r),r.cyan=Pe.cyan.bind(r),r.white=Pe.white.bind(r),r.gray=Pe.gray.bind(r),r.grey=Pe.grey.bind(r),r.bgBlack=Pe.bgBlack.bind(r),r.bgRed=Pe.bgRed.bind(r),r.bgGreen=Pe.bgGreen.bind(r),r.bgYellow=Pe.bgYellow.bind(r),r.bgBlue=Pe.bgBlue.bind(r),r.bgMagenta=Pe.bgMagenta.bind(r),r.bgCyan=Pe.bgCyan.bind(r),r.bgWhite=Pe.bgWhite.bind(r),r):Pe.enabled?je([n],t+""):t+""
var r}}var qe=Object.prototype.hasOwnProperty
function Le(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4
if(void 0===e&&(e=String(e)),"number"!=typeof e||isFinite(e)||(e=String(e)),"number"==typeof e)return JSON.stringify(e)
if("string"==typeof e){var n=/['"\\/[{}\]\r\n]/,r=/[-?:,[\]{}#&*!|=>'"%@`]/,a=/(^\s|\s$)/,o=/^[\d._-]+$/,i=/^(true|false|y|n|yes|no|on|off)$/i
if(""===e||n.test(e)||r.test(e[0])||a.test(e)||o.test(e)||i.test(e)){if(!/\n/.test(e))return JSON.stringify(e)
var s=new Array(t+1).join(" "),l=e.match(/\n+$/),u=l?l[0].length:0
if(1===u){var c=e.replace(/\n$/,"").split("\n").map((function(e){return s+e}))
return"|\n"+c.join("\n")}var d=e.split("\n").map((function(e){return s+e}))
return"|+\n"+d.join("\n")}return e}return JSON.stringify(Be(e),null,2)}function Be(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]
if(-1!==t.indexOf(e))return"[Circular]"
var n,r=Object.prototype.toString.call(e).replace(/^\[.+\s(.+?)]$/,"$1").toLowerCase()
switch(r){case"array":t.push(e),n=e.map((function(e){return Be(e,t)})),t.pop()
break
case"object":t.push(e),n={},Object.keys(e).forEach((function(r){n[r]=Be(e[r],t)})),t.pop()
break
default:n=e}return n}var He=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
o(this,e),this.log=n.log||Function.prototype.bind.call(h.log,h),this.testCount=0,this.ended=!1,this.bailed=!1,t.on("error",this.onError.bind(this)),t.on("runStart",this.onRunStart.bind(this)),t.on("testEnd",this.onTestEnd.bind(this)),t.on("runEnd",this.onRunEnd.bind(this))}return s(e,[{key:"onRunStart",value:function(e){this.log("TAP version 13")}},{key:"onError",value:function(e){this.bailed||(this.bailed=!0,this.ended||(this.testCount=this.testCount+1,this.log(Pe.red("not ok ".concat(this.testCount," global failure"))),this.logError(e)),this.log("Bail out! "+I(e).split("\n")[0]),this.ended&&this.logError(e))}},{key:"onTestEnd",value:function(e){var t=this
this.testCount=this.testCount+1,"passed"===e.status?this.log("ok ".concat(this.testCount," ").concat(e.fullName.join(" > "))):"skipped"===e.status?this.log(Pe.yellow("ok ".concat(this.testCount," # SKIP ").concat(e.fullName.join(" > ")))):"todo"===e.status?(this.log(Pe.cyan("not ok ".concat(this.testCount," # TODO ").concat(e.fullName.join(" > ")))),e.errors.forEach((function(e){return t.logAssertion(e,"todo")}))):(this.log(Pe.red("not ok ".concat(this.testCount," ").concat(e.fullName.join(" > ")))),e.errors.forEach((function(e){return t.logAssertion(e)})))}},{key:"onRunEnd",value:function(e){this.ended=!0,this.log("1..".concat(e.testCounts.total)),this.log("# pass ".concat(e.testCounts.passed)),this.log(Pe.yellow("# skip ".concat(e.testCounts.skipped))),this.log(Pe.cyan("# todo ".concat(e.testCounts.todo))),this.log(Pe.red("# fail ".concat(e.testCounts.failed)))}},{key:"logAssertion",value:function(e,t){var n="  ---"
n+="\n  message: ".concat(Le(e.message||"failed")),n+="\n  severity: ".concat(Le(t||"failed")),qe.call(e,"actual")&&(n+="\n  actual  : ".concat(Le(e.actual))),qe.call(e,"expected")&&(n+="\n  expected: ".concat(Le(e.expected))),e.stack&&(n+="\n  stack: ".concat(Le(e.stack+"\n"))),n+="\n  ...",this.log(n)}},{key:"logError",value:function(e){var t="  ---"
t+="\n  message: ".concat(Le(I(e))),t+="\n  severity: ".concat(Le("failed")),e&&e.stack&&(t+="\n  stack: ".concat(Le(e.stack+"\n"))),t+="\n  ...",this.log(t)}}],[{key:"init",value:function(t,n){return new e(t,n)}}]),e}(),Ue={console:Oe,tap:He}
function ze(e){return function(t){j.globalHooks[e]||(j.globalHooks[e]=[]),j.globalHooks[e].push(t)}}var $e={beforeEach:ze("beforeEach"),afterEach:ze("afterEach")}
function Ve(e){j.current?j.current.assert.pushResult({result:!1,message:"global failure: ".concat(I(e)),source:e&&e.stack||X(2)}):(H.globalFailureCount++,j.stats.bad++,j.stats.all++,ne("error",e))}var We={}
j.currentModule.suiteReport=H
var Ge=!1,Ye=!1
function Qe(){Ye=!0,m?m((function(){Ke()})):Ke()}function Xe(){j.blocking=!1,pe.advance()}function Ke(){if(j.started)Xe()
else{j.started=A.now(),""===j.modules[0].name&&0===j.modules[0].tests.length&&j.modules.shift()
for(var e=[],t=0;t<j.modules.length;t++)""!==j.modules[t].name&&e.push({name:j.modules[t].name,moduleId:j.modules[t].moduleId,tests:j.modules[t].tests})
ne("runStart",H.start(!0)),ie("begin",{totalTests:he.count,modules:e}).then(Xe)}}We.isLocal=f&&f.location&&"file:"===f.location.protocol,We.version="2.19.1",R(We,{config:j,dump:q,equiv:P,reporters:Ue,hooks:$e,is:O,objectType:S,on:function(e,t){if("string"!=typeof e)throw new TypeError("eventName must be a string when registering a listener")
if(!T(e,te)){var n=te.join(", ")
throw new Error('"'.concat(e,'" is not a valid event; must be one of: ').concat(n,"."))}if("function"!=typeof t)throw new TypeError("callback must be a function when registering a listener")
ee[e]||(ee[e]=[]),T(t,ee[e])||ee[e].push(t)},onError:function(e){if(D.warn("QUnit.onError is deprecated and will be removed in QUnit 3.0. Please use QUnit.onUncaughtException instead."),j.current&&j.current.ignoreGlobalErrors)return!0
var t=new Error(e.message)
return t.stack=e.stacktrace||e.fileName+":"+e.lineNumber,Ve(t),!1},onUncaughtException:Ve,pushFailure:me,assert:K.prototype,module:G,test:we,todo:we.todo,skip:we.skip,only:we.only,start:function(e){if(j.current)throw new Error("QUnit.start cannot be called inside a test context.")
var t=Ge
if(Ge=!0,Ye)throw new Error("Called start() while test already started running")
if(t||e>1)throw new Error("Called start() outside of a test context too many times")
if(j.autostart)throw new Error("Called start() outside of a test context when QUnit.config.autostart was true")
if(!j.pageLoaded)return j.autostart=!0,void(v||We.load())
Qe()},onUnhandledRejection:function(e){D.warn("QUnit.onUnhandledRejection is deprecated and will be removed in QUnit 3.0. Please use QUnit.onUncaughtException instead."),Ve(e)},extend:function(){D.warn("QUnit.extend is deprecated and will be removed in QUnit 3.0. Please use Object.assign instead.")
for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return R.apply(this,t)},load:function(){j.pageLoaded=!0,R(j,{started:0,updateRate:1e3,autostart:!0,filter:""},!0),Ye||(j.blocking=!1,j.autostart&&Qe())},stack:function(e){return X(e=(e||0)+2)}}),function(e){var t=["begin","done","log","testStart","testDone","moduleStart","moduleDone"]
function n(e){return function(t){if("function"!=typeof t)throw new Error("Callback parameter must be a function")
j.callbacks[e].push(t)}}for(var r=0;r<t.length;r++){var a=t[r]
void 0===j.callbacks[a]&&(j.callbacks[a]=[]),e[a]=n(a)}}(We),function(a){if(f&&v){if(f.QUnit&&f.QUnit.version)throw new Error("QUnit has already been defined.")
f.QUnit=a}e&&e.exports&&(e.exports=a,e.exports.QUnit=a),t&&(t.QUnit=a),void 0===(r=function(){return a}.call(t,n,t,e))||(e.exports=r),a.config.autostart=!1}(We),function(){if(f&&v){var e=We.config,t=Object.prototype.hasOwnProperty
We.begin((function(){if(!t.call(e,"fixture")){var n=v.getElementById("qunit-fixture")
n&&(e.fixture=n.cloneNode(!0))}})),We.testStart((function(){if(null!=e.fixture){var t=v.getElementById("qunit-fixture")
if("string"===a(e.fixture)){var n=v.createElement("div")
n.setAttribute("id","qunit-fixture"),n.innerHTML=e.fixture,t.parentNode.replaceChild(n,t)}else{var r=e.fixture.cloneNode(!0)
t.parentNode.replaceChild(r,t)}}}))}}(),function(){var e=void 0!==f&&f.location
if(e){var t=function(){for(var t=Object.create(null),r=e.search.slice(1).split("&"),a=r.length,o=0;o<a;o++)if(r[o]){var i=r[o].split("="),s=n(i[0]),l=1===i.length||n(i.slice(1).join("="))
t[s]=s in t?[].concat(t[s],l):l}return t}()
We.urlParams=t,We.config.filter=t.filter,We.config.module=t.module,We.config.moduleId=[].concat(t.moduleId||[]),We.config.testId=[].concat(t.testId||[]),!0===t.seed?We.config.seed=Math.random().toString(36).slice(2):t.seed&&(We.config.seed=t.seed),We.config.urlConfig.push({id:"hidepassed",label:"Hide passed tests",tooltip:"Only show tests and assertions that fail. Stored as query-strings."},{id:"noglobals",label:"Check for Globals",tooltip:"Enabling this will test if any test introduces new properties on the global object (`window` in Browsers). Stored as query-strings."},{id:"notrycatch",label:"No try-catch",tooltip:"Enabling this will run tests outside of a try-catch block. Makes debugging exceptions in IE reasonable. Stored as query-strings."}),We.begin((function(){for(var e=We.config.urlConfig,n=0;n<e.length;n++){var r=We.config.urlConfig[n]
"string"!=typeof r&&(r=r.id),void 0===We.config[r]&&(We.config[r]=t[r])}}))}function n(e){return decodeURIComponent(e.replace(/\+/g,"%20"))}}()
var Je={exports:{}}
!function(e){var t,n
t=re,n=function(){var e="undefined"==typeof window,t="function"==typeof Map?Map:function(){var e=Object.create(null)
this.get=function(t){return e[t]},this.set=function(t,n){return e[t]=n,this},this.clear=function(){e=Object.create(null)}},n=new t,r=new t,o=[]
o.total=0
var i=[],s=[]
function l(){n.clear(),r.clear(),i=[],s=[]}function u(e){for(var t=-9007199254740991,n=e.length-1;n>=0;--n){var r=e[n]
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
var r=(e=h.prepareSearch(e))[0],i=n&&n.threshold||a&&a.threshold||-9007199254740991,s=n&&n.limit||a&&a.limit||9007199254740991,l=(n&&void 0!==n.allowTypo?n.allowTypo:!a||void 0===a.allowTypo||a.allowTypo)?h.algorithm:h.algorithmNoTypo,p=0,m=0,g=t.length
if(n&&n.keys)for(var v=n.scoreFn||u,y=n.keys,b=y.length,w=g-1;w>=0;--w){for(var D=t[w],x=new Array(b),E=b-1;E>=0;--E)(k=c(D,A=y[E]))?(d(k)||(k=h.getPrepared(k)),x[E]=l(e,k,r)):x[E]=null
x.obj=D
var C=v(x)
null!==C&&(C<i||(x.score=C,p<s?(f.add(x),++p):(++m,C>f.peek().score&&f.replaceTop(x))))}else if(n&&n.key){var A=n.key
for(w=g-1;w>=0;--w)(k=c(D=t[w],A))&&(d(k)||(k=h.getPrepared(k)),null!==(T=l(e,k,r))&&(T.score<i||(T={target:T.target,_targetLowerCodes:null,_nextBeginningIndexes:null,score:T.score,indexes:T.indexes,obj:D},p<s?(f.add(T),++p):(++m,T.score>f.peek().score&&f.replaceTop(T)))))}else for(w=g-1;w>=0;--w){var k,T;(k=t[w])&&(d(k)||(k=h.getPrepared(k)),null!==(T=l(e,k,r))&&(T.score<i||(p<s?(f.add(T),++p):(++m,T.score>f.peek().score&&f.replaceTop(T)))))}if(0===p)return o
var N=new Array(p)
for(w=p-1;w>=0;--w)N[w]=f.poll()
return N.total=p+m,N},goAsync:function(t,n,r){var i=!1,s=new Promise((function(s,l){if("farzher"==t)return s([{target:"farzher was here (^-^*)/",score:0,indexes:[0,1,2,3,4,5,6],obj:n?n[0]:null}])
if(!t)return s(o)
var f=(t=h.prepareSearch(t))[0],m=p(),g=n.length-1,v=r&&r.threshold||a&&a.threshold||-9007199254740991,y=r&&r.limit||a&&a.limit||9007199254740991,b=(r&&void 0!==r.allowTypo?r.allowTypo:!a||void 0===a.allowTypo||a.allowTypo)?h.algorithm:h.algorithmNoTypo,w=0,D=0
function x(){if(i)return l("canceled")
var a=Date.now()
if(r&&r.keys)for(var p=r.scoreFn||u,E=r.keys,C=E.length;g>=0;--g){if(g%1e3==0&&Date.now()-a>=10)return void(e?setImmediate(x):setTimeout(x))
for(var A=n[g],k=new Array(C),T=C-1;T>=0;--T)(R=c(A,F=E[T]))?(d(R)||(R=h.getPrepared(R)),k[T]=b(t,R,f)):k[T]=null
k.obj=A
var N=p(k)
null!==N&&(N<v||(k.score=N,w<y?(m.add(k),++w):(++D,N>m.peek().score&&m.replaceTop(k))))}else if(r&&r.key)for(var F=r.key;g>=0;--g){if(g%1e3==0&&Date.now()-a>=10)return void(e?setImmediate(x):setTimeout(x));(R=c(A=n[g],F))&&(d(R)||(R=h.getPrepared(R)),null!==(S=b(t,R,f))&&(S.score<v||(S={target:S.target,_targetLowerCodes:null,_nextBeginningIndexes:null,score:S.score,indexes:S.indexes,obj:A},w<y?(m.add(S),++w):(++D,S.score>m.peek().score&&m.replaceTop(S)))))}else for(;g>=0;--g){if(g%1e3==0&&Date.now()-a>=10)return void(e?setImmediate(x):setTimeout(x))
var R,S;(R=n[g])&&(d(R)||(R=h.getPrepared(R)),null!==(S=b(t,R,f))&&(S.score<v||(w<y?(m.add(S),++w):(++D,S.score>m.peek().score&&m.replaceTop(S)))))}if(0===w)return s(o)
for(var O=new Array(w),_=w-1;_>=0;--_)O[_]=m.poll()
O.total=w+D,s(O)}e?setImmediate(x):x()}))
return s.cancel=function(){i=!0},s},highlight:function(e,t,n){if("function"==typeof t)return h.highlightCallback(e,t)
if(null===e)return null
void 0===t&&(t="<b>"),void 0===n&&(n="</b>")
for(var r="",a=0,o=!1,i=e.target,s=i.length,l=e.indexes,u=0;u<s;++u){var c=i[u]
if(l[a]===u){if(o||(o=!0,r+=t),++a===l.length){r+=c+n+i.substr(u+1)
break}}else o&&(o=!1,r+=n)
r+=c}return r},highlightCallback:function(e,t){if(null===e)return null
for(var n=e.target,r=n.length,a=e.indexes,o="",i=0,s=0,l=!1,u=(e=[],0);u<r;++u){var c=n[u]
if(a[s]===u){if(++s,l||(l=!0,e.push(o),o=""),s===a.length){o+=c,e.push(t(o,i++)),o="",e.push(n.substr(u+1))
break}}else l&&(l=!1,e.push(t(o,i++)),o="")
o+=c}return e},prepare:function(e){return e?{target:e,_targetLowerCodes:h.prepareLowerCodes(e),_nextBeginningIndexes:null,score:null,indexes:null,obj:null}:{target:"",_targetLowerCodes:[0],_nextBeginningIndexes:null,score:null,indexes:null,obj:null}},prepareSlow:function(e){return e?{target:e,_targetLowerCodes:h.prepareLowerCodes(e),_nextBeginningIndexes:h.prepareNextBeginningIndexes(e),score:null,indexes:null,obj:null}:{target:"",_targetLowerCodes:[0],_nextBeginningIndexes:null,score:null,indexes:null,obj:null}},prepareSearch:function(e){return e||(e=""),h.prepareLowerCodes(e)},getPrepared:function(e){if(e.length>999)return h.prepare(e)
var t=n.get(e)
return void 0!==t||(t=h.prepare(e),n.set(e,t)),t},getPreparedSearch:function(e){if(e.length>999)return h.prepareSearch(e)
var t=r.get(e)
return void 0!==t||(t=h.prepareSearch(e),r.set(e,t)),t},algorithm:function(e,t,n){for(var r=t._targetLowerCodes,a=e.length,o=r.length,l=0,u=0,c=0,d=0;;){if(n===r[u]){if(i[d++]=u,++l===a)break
n=e[0===c?l:c===l?l+1:c===l-1?l-1:l]}if(++u>=o)for(;;){if(l<=1)return null
if(0===c){if(n===e[--l])continue
c=l}else{if(1===c)return null
if((n=e[1+(l=--c)])===e[l])continue}u=i[(d=l)-1]+1
break}}l=0
var p=0,f=!1,m=0,g=t._nextBeginningIndexes
null===g&&(g=t._nextBeginningIndexes=h.prepareNextBeginningIndexes(t.target))
var v=u=0===i[0]?0:g[i[0]-1]
if(u!==o)for(;;)if(u>=o){if(l<=0){if(++p>a-2)break
if(e[p]===e[p+1])continue
u=v
continue}--l,u=g[s[--m]]}else if(e[0===p?l:p===l?l+1:p===l-1?l-1:l]===r[u]){if(s[m++]=u,++l===a){f=!0
break}++u}else u=g[u]
if(f)var y=s,b=m
else y=i,b=d
for(var w=0,D=-1,x=0;x<a;++x)D!==(u=y[x])-1&&(w-=u),D=u
for(f?0!==p&&(w+=-20):(w*=1e3,0!==c&&(w+=-20)),w-=o-a,t.score=w,t.indexes=new Array(b),x=b-1;x>=0;--x)t.indexes[x]=y[x]
return t},algorithmNoTypo:function(e,t,n){for(var r=t._targetLowerCodes,a=e.length,o=r.length,l=0,u=0,c=0;;){if(n===r[u]){if(i[c++]=u,++l===a)break
n=e[l]}if(++u>=o)return null}l=0
var d=!1,p=0,f=t._nextBeginningIndexes
if(null===f&&(f=t._nextBeginningIndexes=h.prepareNextBeginningIndexes(t.target)),(u=0===i[0]?0:f[i[0]-1])!==o)for(;;)if(u>=o){if(l<=0)break;--l,u=f[s[--p]]}else if(e[l]===r[u]){if(s[p++]=u,++l===a){d=!0
break}++u}else u=f[u]
if(d)var m=s,g=p
else m=i,g=c
for(var v=0,y=-1,b=0;b<a;++b)y!==(u=m[b])-1&&(v-=u),y=u
for(d||(v*=1e3),v-=o-a,t.score=v,t.indexes=new Array(g),b=g-1;b>=0;--b)t.indexes[b]=m[b]
return t},prepareLowerCodes:function(e){for(var t=e.length,n=[],r=e.toLowerCase(),a=0;a<t;++a)n[a]=r.charCodeAt(a)
return n},prepareBeginningIndexes:function(e){for(var t=e.length,n=[],r=0,a=!1,o=!1,i=0;i<t;++i){var s=e.charCodeAt(i),l=s>=65&&s<=90,u=l||s>=97&&s<=122||s>=48&&s<=57,c=l&&!a||!o||!u
a=l,o=u,c&&(n[r++]=i)}return n},prepareNextBeginningIndexes:function(e){for(var t=e.length,n=h.prepareBeginningIndexes(e),r=[],a=n[0],o=0,i=0;i<t;++i)a>i?r[i]=a:(a=n[++o],r[i]=void 0===a?t:a)
return r},cleanup:l,new:t}
return h}()},e.exports?e.exports=n():t.fuzzysort=n()}(Je)
var Ze=Je.exports,et={failedTests:[],defined:0,completed:0}
function tt(e){return e?(""+e).replace(/['"<>&]/g,(function(e){switch(e){case"'":return"&#039;"
case'"':return"&quot;"
case"<":return"&lt;"
case">":return"&gt;"
case"&":return"&amp;"}})):""}!function(){if(f&&v){var e=We.config,t=[],n=!1,r=Object.prototype.hasOwnProperty,a=N({filter:void 0,module:void 0,moduleId:void 0,testId:void 0}),o=null
We.on("runStart",(function(e){et.defined=e.testCounts.total})),We.begin((function(t){!function(t){var n,i,s,l,c,d,h,b,E=C("qunit")
E&&(E.setAttribute("role","main"),E.innerHTML="<h1 id='qunit-header'>"+tt(v.title)+"</h1><h2 id='qunit-banner'></h2><div id='qunit-testrunner-toolbar' role='navigation'></div>"+(!(n=We.config.testId)||n.length<=0?"":"<div id='qunit-filteredTest'>Rerunning selected tests: "+tt(n.join(", "))+" <a id='qunit-clearFilter' href='"+tt(a)+"'>Run all tests</a></div>")+"<h2 id='qunit-userAgent'></h2><ol id='qunit-tests'></ol>"),(i=C("qunit-header"))&&(i.innerHTML="<a href='"+tt(a)+"'>"+i.innerHTML+"</a> "),(s=C("qunit-banner"))&&(s.className=""),h=C("qunit-tests"),(b=C("qunit-testresult"))&&b.parentNode.removeChild(b),h&&(h.innerHTML="",(b=v.createElement("p")).id="qunit-testresult",b.className="result",h.parentNode.insertBefore(b,h),b.innerHTML='<div id="qunit-testresult-display">Running...<br />&#160;</div><div id="qunit-testresult-controls"></div><div class="clearfix"></div>',c=C("qunit-testresult-controls")),c&&c.appendChild(((d=v.createElement("button")).id="qunit-abort-tests-button",d.innerHTML="Abort",p(d,"click",A),d)),(l=C("qunit-userAgent"))&&(l.innerHTML="",l.appendChild(v.createTextNode("QUnit "+We.version+"; "+y.userAgent))),function(t){var n,a,i,s,l,c=C("qunit-testrunner-toolbar")
if(c){c.appendChild(((l=v.createElement("span")).innerHTML=function(){for(var t=!1,n=e.urlConfig,a="",o=0;o<n.length;o++){var i=e.urlConfig[o]
"string"==typeof i&&(i={id:i,label:i})
var s=tt(i.id),l=tt(i.tooltip)
if(i.value&&"string"!=typeof i.value){if(a+="<label for='qunit-urlconfig-"+s+"' title='"+l+"'>"+i.label+": </label><select id='qunit-urlconfig-"+s+"' name='"+s+"' title='"+l+"'><option></option>",Array.isArray(i.value))for(var u=0;u<i.value.length;u++)a+="<option value='"+(s=tt(i.value[u]))+"'"+(e[i.id]===i.value[u]?(t=!0)&&" selected='selected'":"")+">"+s+"</option>"
else for(var c in i.value)r.call(i.value,c)&&(a+="<option value='"+tt(c)+"'"+(e[i.id]===c?(t=!0)&&" selected='selected'":"")+">"+tt(i.value[c])+"</option>")
e[i.id]&&!t&&(a+="<option value='"+(s=tt(e[i.id]))+"' selected='selected' disabled='disabled'>"+s+"</option>"),a+="</select>"}else a+="<label for='qunit-urlconfig-"+s+"' title='"+l+"'><input id='qunit-urlconfig-"+s+"' name='"+s+"' type='checkbox'"+(i.value?" value='"+tt(i.value)+"'":"")+(e[i.id]?" checked='checked'":"")+" title='"+l+"' />"+tt(i.label)+"</label>"}return a}(),D(l,"qunit-url-config"),g(l.getElementsByTagName("input"),"change",T),g(l.getElementsByTagName("select"),"change",T),l))
var d=v.createElement("span")
d.id="qunit-toolbar-filters",d.appendChild((n=v.createElement("form"),a=v.createElement("label"),i=v.createElement("input"),s=v.createElement("button"),D(n,"qunit-filter"),a.innerHTML="Filter: ",i.type="text",i.value=e.filter||"",i.name="filter",i.id="qunit-filter-input",s.innerHTML="Go",a.appendChild(i),n.appendChild(a),n.appendChild(v.createTextNode(" ")),n.appendChild(s),p(n,"submit",k),n)),d.appendChild(function(t){var n=null
if(o={options:t.modules.slice(),selectedMap:new w,isDirty:function(){return u(o.selectedMap.keys()).sort().join(",")!==u(n.keys()).sort().join(",")}},e.moduleId.length)for(var r=0;r<t.modules.length;r++){var a=t.modules[r];-1!==e.moduleId.indexOf(a.moduleId)&&o.selectedMap.set(a.moduleId,a.name)}n=new w(o.selectedMap)
var i=v.createElement("input")
i.id="qunit-modulefilter-search",i.autocomplete="off",p(i,"input",A),p(i,"input",C),p(i,"focus",C),p(i,"click",C)
var s=v.createElement("label")
s.htmlFor="qunit-modulefilter-search",s.textContent="Module:"
var l=v.createElement("span")
l.id="qunit-modulefilter-search-container",l.appendChild(i)
var c=v.createElement("button")
c.textContent="Apply",c.title="Re-run the selected test modules",p(c,"click",F)
var d=v.createElement("button")
d.textContent="Reset",d.type="reset",d.title="Restore the previous module selection"
var h=v.createElement("button")
h.textContent="Select none",h.type="button",h.title="Clear the current module selection",p(h,"click",(function(){o.selectedMap.clear(),T(),A()}))
var g=v.createElement("span")
g.id="qunit-modulefilter-actions",g.appendChild(c),g.appendChild(d),n.size&&g.appendChild(h)
var y=v.createElement("ul")
y.id="qunit-modulefilter-dropdown-list"
var b=v.createElement("div")
b.id="qunit-modulefilter-dropdown",b.style.display="none",b.appendChild(g),b.appendChild(y),p(b,"change",T),l.appendChild(b),T()
var D,E=v.createElement("form")
function C(){function e(t){var n=E.contains(t.target)
27!==t.keyCode&&n||(27===t.keyCode&&n&&i.focus(),b.style.display="none",m(v,"click",e),m(v,"keydown",e),i.value="",A())}"none"===b.style.display&&(A(),b.style.display="block",p(v,"click",e),p(v,"keydown",e))}function A(){f.clearTimeout(D),D=f.setTimeout((function(){y.innerHTML=function(e){return function(e){var t=""
o.selectedMap.forEach((function(e,n){t+=S(n,e,!0)}))
for(var n=0;n<e.length;n++){var r=e[n].obj
o.selectedMap.has(r.moduleId)||(t+=S(r.moduleId,r.name,!1))}return t}(""===e?o.options.slice(0,20).map((function(e){return{obj:e}})):Ze.go(e,o.options,{limit:20,key:"name",allowTypo:!0}))}(i.value)}))}function T(e){var t=e&&e.target||null
t&&(t.checked?o.selectedMap.set(t.value,t.parentNode.textContent):o.selectedMap.delete(t.value),x(t.parentNode,"checked",t.checked))
var n=o.selectedMap.size?o.selectedMap.size+" "+(1===o.selectedMap.size?"module":"modules"):"All modules"
i.placeholder=n,i.title="Type to search through and reduce the list.",d.disabled=!o.isDirty(),h.style.display=o.selectedMap.size?"":"none"}return E.id="qunit-modulefilter",E.appendChild(s),E.appendChild(v.createTextNode(" ")),E.appendChild(l),p(E,"submit",k),p(E,"reset",(function(){o.selectedMap=new w(n),T(),A()})),E}(t))
var h=v.createElement("div")
h.className="clearfix",c.appendChild(d),c.appendChild(h)}}(t)}(t)})),We.on("runEnd",(function(t){var n,r,a,o=C("qunit-banner"),i=C("qunit-tests"),s=C("qunit-abort-tests-button"),l=e.stats.all-e.stats.bad,u=[t.testCounts.total," tests completed in ",t.runtime," milliseconds, with ",t.testCounts.failed," failed, ",t.testCounts.skipped," skipped, and ",t.testCounts.todo," todo.<br />","<span class='passed'>",l,"</span> assertions of <span class='total'>",e.stats.all,"</span> passed, <span class='failed'>",e.stats.bad,"</span> failed.",_(et.failedTests)].join("")
if(s&&s.disabled){u="Tests aborted after "+t.runtime+" milliseconds."
for(var c=0;c<i.children.length;c++)""!==(n=i.children[c]).className&&"running"!==n.className||(n.className="aborted",a=n.getElementsByTagName("ol")[0],(r=v.createElement("li")).className="fail",r.innerHTML="Test aborted.",a.appendChild(r))}!o||s&&!1!==s.disabled||(o.className="failed"===t.status?"qunit-fail":"qunit-pass"),s&&s.parentNode.removeChild(s),i&&(C("qunit-testresult-display").innerHTML=u),e.altertitle&&v.title&&(v.title=["failed"===t.status?"✖":"✔",v.title.replace(/^[\u2714\u2716] /i,"")].join(" ")),e.scrolltop&&f.scrollTo&&f.scrollTo(0,0)})),We.testStart((function(e){var t,n
O(e.name,e.testId,e.module),(t=C("qunit-testresult-display"))&&(D(t,"running"),n=We.config.reorder&&e.previousFailure,t.innerHTML=[j(et),n?"Rerunning previously failed test: <br />":"Running: ",P(e.name,e.module),_(et.failedTests)].join(""))})),We.log((function(e){var t=C("qunit-test-output-"+e.testId)
if(t){var n,a,o,i=tt(e.message)||(e.result?"okay":"failed")
i="<span class='test-message'>"+i+"</span>",i+="<span class='runtime'>@ "+e.runtime+" ms</span>"
var s=!1
!e.result&&r.call(e,"expected")?(n=e.negative?"NOT "+We.dump.parse(e.expected):We.dump.parse(e.expected),a=We.dump.parse(e.actual),i+="<table><tr class='test-expected'><th>Expected: </th><td><pre>"+tt(n)+"</pre></td></tr>",a!==n?(i+="<tr class='test-actual'><th>Result: </th><td><pre>"+tt(a)+"</pre></td></tr>","number"==typeof e.actual&&"number"==typeof e.expected?isNaN(e.actual)||isNaN(e.expected)||(s=!0,o=((o=e.actual-e.expected)>0?"+":"")+o):"boolean"!=typeof e.actual&&"boolean"!=typeof e.expected&&(s=M(o=We.diff(n,a)).length!==M(n).length+M(a).length),s&&(i+="<tr class='test-diff'><th>Diff: </th><td><pre>"+o+"</pre></td></tr>")):-1!==n.indexOf("[object Array]")||-1!==n.indexOf("[object Object]")?i+="<tr class='test-message'><th>Message: </th><td>Diff suppressed as the depth of object is more than current max depth ("+We.config.maxDepth+").<p>Hint: Use <code>QUnit.dump.maxDepth</code> to  run with a higher max depth or <a href='"+tt(N({maxDepth:-1}))+"'>Rerun</a> without max depth.</p></td></tr>":i+="<tr class='test-message'><th>Message: </th><td>Diff suppressed as the expected and actual results have an equivalent serialization</td></tr>",e.source&&(i+="<tr class='test-source'><th>Source: </th><td><pre>"+tt(e.source)+"</pre></td></tr>"),i+="</table>"):!e.result&&e.source&&(i+="<table><tr class='test-source'><th>Source: </th><td><pre>"+tt(e.source)+"</pre></td></tr></table>")
var l=t.getElementsByTagName("ol")[0],u=v.createElement("li")
u.className=e.result?"pass":"fail",u.innerHTML=i,l.appendChild(u)}})),We.testDone((function(r){var a=C("qunit-tests"),o=C("qunit-test-output-"+r.testId)
if(a&&o){var i
E(o,"running"),i=r.failed>0?"failed":r.todo?"todo":r.skipped?"skipped":"passed"
var s=o.getElementsByTagName("ol")[0],l=r.passed,u=r.failed,c=r.failed>0?r.todo:!r.todo
c?D(s,"qunit-collapsed"):(et.failedTests.push(r.testId),e.collapse&&(n?D(s,"qunit-collapsed"):n=!0))
var d=o.firstChild,f=u?"<b class='failed'>"+u+"</b>, <b class='passed'>"+l+"</b>, ":""
if(d.innerHTML+=" <b class='counts'>("+f+r.assertions.length+")</b>",et.completed++,r.skipped){o.className="skipped"
var h=v.createElement("em")
h.className="qunit-skipped-label",h.innerHTML="skipped",o.insertBefore(h,d)}else{if(p(d,"click",(function(){x(s,"qunit-collapsed")})),o.className=c?"pass":"fail",r.todo){var m=v.createElement("em")
m.className="qunit-todo-label",m.innerHTML="todo",o.className+=" todo",o.insertBefore(m,d)}var g=v.createElement("span")
g.className="runtime",g.innerHTML=r.runtime+" ms",o.insertBefore(g,s)}if(r.source){var y=v.createElement("p")
y.innerHTML="<strong>Source: </strong>"+tt(r.source),D(y,"qunit-source"),c&&D(y,"qunit-collapsed"),p(d,"click",(function(){x(y,"qunit-collapsed")})),o.appendChild(y)}e.hidepassed&&("passed"===i||r.skipped)&&(t.push(o),a.removeChild(o))}})),We.on("error",(function(e){var t=O("global failure")
if(t){var n=tt(I(e))
n="<span class='test-message'>"+n+"</span>",e&&e.stack&&(n+="<table><tr class='test-source'><th>Source: </th><td><pre>"+tt(e.stack)+"</pre></td></tr></table>")
var r=t.getElementsByTagName("ol")[0],a=v.createElement("li")
a.className="fail",a.innerHTML=n,r.appendChild(a),t.className="fail"}}))
var i,s=(i=f.phantom)&&i.version&&i.version.major>0
s&&h.warn("Support for PhantomJS is deprecated and will be removed in QUnit 3.0."),s||"complete"!==v.readyState?p(f,"load",We.load):We.load()
var l=f.onerror
f.onerror=function(t,n,r,a,o){var i=!1
if(l){for(var s=arguments.length,u=new Array(s>5?s-5:0),c=5;c<s;c++)u[c-5]=arguments[c]
i=l.call.apply(l,[this,t,n,r,a,o].concat(u))}if(!0!==i){if(e.current&&e.current.ignoreGlobalErrors)return!0
var d=o||new Error(t)
!d.stack&&n&&r&&(d.stack="".concat(n,":").concat(r)),We.onUncaughtException(d)}return i},f.addEventListener("unhandledrejection",(function(e){We.onUncaughtException(e.reason)}))}function d(e){return"function"==typeof e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function p(e,t,n){e.addEventListener(t,n,!1)}function m(e,t,n){e.removeEventListener(t,n,!1)}function g(e,t,n){for(var r=e.length;r--;)p(e[r],t,n)}function b(e,t){return(" "+e.className+" ").indexOf(" "+t+" ")>=0}function D(e,t){b(e,t)||(e.className+=(e.className?" ":"")+t)}function x(e,t,n){n||void 0===n&&!b(e,t)?D(e,t):E(e,t)}function E(e,t){for(var n=" "+e.className+" ";n.indexOf(" "+t+" ")>=0;)n=n.replace(" "+t+" "," ")
e.className=d(n)}function C(e){return v.getElementById&&v.getElementById(e)}function A(){var e=C("qunit-abort-tests-button")
return e&&(e.disabled=!0,e.innerHTML="Aborting..."),We.config.queue.length=0,!1}function k(e){var t=C("qunit-filter-input")
return t.value=d(t.value),F(),e&&e.preventDefault&&e.preventDefault(),!1}function T(){var n,r=this,a={}
n="selectedIndex"in r?r.options[r.selectedIndex].value||void 0:r.checked?r.defaultValue||!0:void 0,a[r.name]=n
var o=N(a)
if("hidepassed"===r.name&&"replaceState"in f.history){We.urlParams[r.name]=n,e[r.name]=n||!1
var i=C("qunit-tests")
if(i){var s=i.children.length,l=i.children
if(r.checked){for(var u=0;u<s;u++){var d=l[u],p=d?d.className:"",h=p.indexOf("pass")>-1,m=p.indexOf("skipped")>-1;(h||m)&&t.push(d)}var g,v=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(!n){if(Array.isArray(e)||(n=c(e))){n&&(e=n)
var r=0,a=function(){}
return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,s=!1
return{s:function(){n=n.call(e)},n:function(){var e=n.next()
return i=e.done,e},e:function(e){s=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(s)throw o}}}}(t)
try{for(v.s();!(g=v.n()).done;){var y=g.value
i.removeChild(y)}}catch(e){v.e(e)}finally{v.f()}}else for(var b;null!=(b=t.pop());)i.appendChild(b)}f.history.replaceState(null,"",o)}else f.location=o}function N(e){var t="?",n=f.location
for(var a in e=R(R({},We.urlParams),e))if(r.call(e,a)&&void 0!==e[a])for(var o=[].concat(e[a]),i=0;i<o.length;i++)t+=encodeURIComponent(a),!0!==o[i]&&(t+="="+encodeURIComponent(o[i])),t+="&"
return n.protocol+"//"+n.host+n.pathname+t.slice(0,-1)}function F(){var e=C("qunit-filter-input").value
f.location=N({filter:""===e?void 0:e,moduleId:u(o.selectedMap.keys()),module:void 0,testId:void 0})}function S(e,t,n){return'<li><label class="clickable'+(n?" checked":"")+'"><input type="checkbox" value="'+tt(e)+'"'+(n?' checked="checked"':"")+" />"+tt(t)+"</label></li>"}function O(e,t,n){var r=C("qunit-tests")
if(r){var a=v.createElement("strong")
a.innerHTML=P(e,n)
var o=v.createElement("li")
if(o.appendChild(a),void 0!==t){var i=v.createElement("a")
i.innerHTML="Rerun",i.href=N({testId:t}),o.id="qunit-test-output-"+t,o.appendChild(i)}var s=v.createElement("ol")
return s.className="qunit-assert-list",o.appendChild(s),r.appendChild(o),o}}function _(e){return 0===e.length?"":["<br /><a href='"+tt(N({testId:e}))+"'>",1===e.length?"Rerun 1 failed test":"Rerun "+e.length+" failed tests","</a>"].join("")}function P(e,t){var n=""
return t&&(n="<span class='module-name'>"+tt(t)+"</span>: "),n+"<span class='test-name'>"+tt(e)+"</span>"}function j(e){return[e.completed," / ",e.defined," tests completed.<br />"].join("")}function M(e){return e.replace(/<\/?[^>]+(>|$)/g,"").replace(/&quot;/g,"").replace(/\s+/g,"")}}(),We.diff=function(){function e(){}var t=-1,n=Object.prototype.hasOwnProperty
return e.prototype.DiffMain=function(e,t,n){var r,a,o,i,s,l
if(r=(new Date).getTime()+1e3,null===e||null===t)throw new Error("Null input. (DiffMain)")
return e===t?e?[[0,e]]:[]:(void 0===n&&(n=!0),a=n,o=this.diffCommonPrefix(e,t),i=e.substring(0,o),e=e.substring(o),t=t.substring(o),o=this.diffCommonSuffix(e,t),s=e.substring(e.length-o),e=e.substring(0,e.length-o),t=t.substring(0,t.length-o),l=this.diffCompute(e,t,a,r),i&&l.unshift([0,i]),s&&l.push([0,s]),this.diffCleanupMerge(l),l)},e.prototype.diffCleanupEfficiency=function(e){var n,r,a,o,i,s,l,u,c
for(n=!1,r=[],a=0,o=null,i=0,s=!1,l=!1,u=!1,c=!1;i<e.length;)0===e[i][0]?(e[i][1].length<4&&(u||c)?(r[a++]=i,s=u,l=c,o=e[i][1]):(a=0,o=null),u=c=!1):(e[i][0]===t?c=!0:u=!0,o&&(s&&l&&u&&c||o.length<2&&s+l+u+c===3)&&(e.splice(r[a-1],0,[t,o]),e[r[a-1]+1][0]=1,a--,o=null,s&&l?(u=c=!0,a=0):(i=--a>0?r[a-1]:-1,u=c=!1),n=!0)),i++
n&&this.diffCleanupMerge(e)},e.prototype.diffPrettyHtml=function(e){for(var n=[],r=0;r<e.length;r++){var a=e[r][0],o=e[r][1]
switch(a){case 1:n[r]="<ins>"+tt(o)+"</ins>"
break
case t:n[r]="<del>"+tt(o)+"</del>"
break
case 0:n[r]="<span>"+tt(o)+"</span>"}}return n.join("")},e.prototype.diffCommonPrefix=function(e,t){var n,r,a,o
if(!e||!t||e.charAt(0)!==t.charAt(0))return 0
for(a=0,n=r=Math.min(e.length,t.length),o=0;a<n;)e.substring(o,n)===t.substring(o,n)?o=a=n:r=n,n=Math.floor((r-a)/2+a)
return n},e.prototype.diffCommonSuffix=function(e,t){var n,r,a,o
if(!e||!t||e.charAt(e.length-1)!==t.charAt(t.length-1))return 0
for(a=0,n=r=Math.min(e.length,t.length),o=0;a<n;)e.substring(e.length-n,e.length-o)===t.substring(t.length-n,t.length-o)?o=a=n:r=n,n=Math.floor((r-a)/2+a)
return n},e.prototype.diffCompute=function(e,n,r,a){var o,i,s,l,u,c,d,p,f,h,m,g
return e?n?(i=e.length>n.length?e:n,s=e.length>n.length?n:e,-1!==(l=i.indexOf(s))?(o=[[1,i.substring(0,l)],[0,s],[1,i.substring(l+s.length)]],e.length>n.length&&(o[0][0]=o[2][0]=t),o):1===s.length?[[t,e],[1,n]]:(u=this.diffHalfMatch(e,n))?(c=u[0],p=u[1],d=u[2],f=u[3],h=u[4],m=this.DiffMain(c,d,r,a),g=this.DiffMain(p,f,r,a),m.concat([[0,h]],g)):r&&e.length>100&&n.length>100?this.diffLineMode(e,n,a):this.diffBisect(e,n,a)):[[t,e]]:[[1,n]]},e.prototype.diffHalfMatch=function(e,t){var n,r,a,o,i,s,l,u,c,d
if(n=e.length>t.length?e:t,r=e.length>t.length?t:e,n.length<4||2*r.length<n.length)return null
function p(e,t,n){var r,o,i,s,l,u,c,d,p
for(r=e.substring(n,n+Math.floor(e.length/4)),o=-1,i="";-1!==(o=t.indexOf(r,o+1));)s=a.diffCommonPrefix(e.substring(n),t.substring(o)),l=a.diffCommonSuffix(e.substring(0,n),t.substring(0,o)),i.length<l+s&&(i=t.substring(o-l,o)+t.substring(o,o+s),u=e.substring(0,n-l),c=e.substring(n+s),d=t.substring(0,o-l),p=t.substring(o+s))
return 2*i.length>=e.length?[u,c,d,p,i]:null}return a=this,u=p(n,r,Math.ceil(n.length/4)),c=p(n,r,Math.ceil(n.length/2)),u||c?(d=c?u&&u[4].length>c[4].length?u:c:u,e.length>t.length?(o=d[0],l=d[1],s=d[2],i=d[3]):(s=d[0],i=d[1],o=d[2],l=d[3]),[o,l,s,i,d[4]]):null},e.prototype.diffLineMode=function(e,n,r){var a,o,i,s,l,u,c,d,p
for(e=(a=this.diffLinesToChars(e,n)).chars1,n=a.chars2,i=a.lineArray,o=this.DiffMain(e,n,!1,r),this.diffCharsToLines(o,i),this.diffCleanupSemantic(o),o.push([0,""]),s=0,u=0,l=0,d="",c="";s<o.length;){switch(o[s][0]){case 1:l++,c+=o[s][1]
break
case t:u++,d+=o[s][1]
break
case 0:if(u>=1&&l>=1){for(o.splice(s-u-l,u+l),s=s-u-l,p=(a=this.DiffMain(d,c,!1,r)).length-1;p>=0;p--)o.splice(s,0,a[p])
s+=a.length}l=0,u=0,d="",c=""}s++}return o.pop(),o},e.prototype.diffBisect=function(e,n,r){var a,o,i,s,l,u,c,d,p,f,h,m,g,v,y,b,w,D,x,E,C,A,k
for(a=e.length,o=n.length,s=i=Math.ceil((a+o)/2),l=2*i,u=new Array(l),c=new Array(l),d=0;d<l;d++)u[d]=-1,c[d]=-1
for(u[s+1]=0,c[s+1]=0,f=(p=a-o)%2!=0,h=0,m=0,g=0,v=0,C=0;C<i&&!((new Date).getTime()>r);C++){for(A=-C+h;A<=C-m;A+=2){for(b=s+A,x=(w=A===-C||A!==C&&u[b-1]<u[b+1]?u[b+1]:u[b-1]+1)-A;w<a&&x<o&&e.charAt(w)===n.charAt(x);)w++,x++
if(u[b]=w,w>a)m+=2
else if(x>o)h+=2
else if(f&&(y=s+p-A)>=0&&y<l&&-1!==c[y]&&w>=(D=a-c[y]))return this.diffBisectSplit(e,n,w,x,r)}for(k=-C+g;k<=C-v;k+=2){for(y=s+k,E=(D=k===-C||k!==C&&c[y-1]<c[y+1]?c[y+1]:c[y-1]+1)-k;D<a&&E<o&&e.charAt(a-D-1)===n.charAt(o-E-1);)D++,E++
if(c[y]=D,D>a)v+=2
else if(E>o)g+=2
else if(!f&&(b=s+p-k)>=0&&b<l&&-1!==u[b]&&(x=s+(w=u[b])-b,w>=(D=a-D)))return this.diffBisectSplit(e,n,w,x,r)}}return[[t,e],[1,n]]},e.prototype.diffBisectSplit=function(e,t,n,r,a){var o,i,s,l,u,c
return o=e.substring(0,n),s=t.substring(0,r),i=e.substring(n),l=t.substring(r),u=this.DiffMain(o,s,!1,a),c=this.DiffMain(i,l,!1,a),u.concat(c)},e.prototype.diffCleanupSemantic=function(e){var n,r,a,o,i,s,l,u,c,d,p,f,h
for(n=!1,r=[],a=0,o=null,i=0,u=0,c=0,s=0,l=0;i<e.length;)0===e[i][0]?(r[a++]=i,u=s,c=l,s=0,l=0,o=e[i][1]):(1===e[i][0]?s+=e[i][1].length:l+=e[i][1].length,o&&o.length<=Math.max(u,c)&&o.length<=Math.max(s,l)&&(e.splice(r[a-1],0,[t,o]),e[r[a-1]+1][0]=1,a--,i=--a>0?r[a-1]:-1,u=0,c=0,s=0,l=0,o=null,n=!0)),i++
for(n&&this.diffCleanupMerge(e),i=1;i<e.length;)e[i-1][0]===t&&1===e[i][0]&&(d=e[i-1][1],p=e[i][1],(f=this.diffCommonOverlap(d,p))>=(h=this.diffCommonOverlap(p,d))?(f>=d.length/2||f>=p.length/2)&&(e.splice(i,0,[0,p.substring(0,f)]),e[i-1][1]=d.substring(0,d.length-f),e[i+1][1]=p.substring(f),i++):(h>=d.length/2||h>=p.length/2)&&(e.splice(i,0,[0,d.substring(0,h)]),e[i-1][0]=1,e[i-1][1]=p.substring(0,p.length-h),e[i+1][0]=t,e[i+1][1]=d.substring(h),i++),i++),i++},e.prototype.diffCommonOverlap=function(e,t){var n,r,a,o,i,s,l
if(n=e.length,r=t.length,0===n||0===r)return 0
if(n>r?e=e.substring(n-r):n<r&&(t=t.substring(0,n)),a=Math.min(n,r),e===t)return a
for(o=0,i=1;;){if(s=e.substring(a-i),-1===(l=t.indexOf(s)))return o
i+=l,0!==l&&e.substring(a-i)!==t.substring(0,i)||(o=i,i++)}},e.prototype.diffLinesToChars=function(e,t){var r,a
function o(e){for(var t="",o=0,i=-1,s=r.length;i<e.length-1;){-1===(i=e.indexOf("\n",o))&&(i=e.length-1)
var l=e.substring(o,i+1)
o=i+1,n.call(a,l)?t+=String.fromCharCode(a[l]):(t+=String.fromCharCode(s),a[l]=s,r[s++]=l)}return t}return a={},(r=[])[0]="",{chars1:o(e),chars2:o(t),lineArray:r}},e.prototype.diffCharsToLines=function(e,t){var n,r,a,o
for(n=0;n<e.length;n++){for(r=e[n][1],a=[],o=0;o<r.length;o++)a[o]=t[r.charCodeAt(o)]
e[n][1]=a.join("")}},e.prototype.diffCleanupMerge=function(e){var n,r,a,o,i,s,l,u
for(e.push([0,""]),n=0,r=0,a=0,i="",o="";n<e.length;)switch(e[n][0]){case 1:a++,o+=e[n][1],n++
break
case t:r++,i+=e[n][1],n++
break
case 0:r+a>1?(0!==r&&0!==a&&(0!==(s=this.diffCommonPrefix(o,i))&&(n-r-a>0&&0===e[n-r-a-1][0]?e[n-r-a-1][1]+=o.substring(0,s):(e.splice(0,0,[0,o.substring(0,s)]),n++),o=o.substring(s),i=i.substring(s)),0!==(s=this.diffCommonSuffix(o,i))&&(e[n][1]=o.substring(o.length-s)+e[n][1],o=o.substring(0,o.length-s),i=i.substring(0,i.length-s))),0===r?e.splice(n-a,r+a,[1,o]):0===a?e.splice(n-r,r+a,[t,i]):e.splice(n-r-a,r+a,[t,i],[1,o]),n=n-r-a+(r?1:0)+(a?1:0)+1):0!==n&&0===e[n-1][0]?(e[n-1][1]+=e[n][1],e.splice(n,1)):n++,a=0,r=0,i="",o=""}for(""===e[e.length-1][1]&&e.pop(),l=!1,n=1;n<e.length-1;)0===e[n-1][0]&&0===e[n+1][0]&&((u=e[n][1]).substring(u.length-e[n-1][1].length)===e[n-1][1]?(e[n][1]=e[n-1][1]+e[n][1].substring(0,e[n][1].length-e[n-1][1].length),e[n+1][1]=e[n-1][1]+e[n+1][1],e.splice(n-1,1),l=!0):u.substring(0,e[n+1][1].length)===e[n+1][1]&&(e[n-1][1]+=e[n+1][1],e[n][1]=e[n][1].substring(e[n+1][1].length)+e[n+1][1],e.splice(n+1,1),l=!0)),n++
l&&this.diffCleanupMerge(e)},function(t,n){var r,a
return a=(r=new e).DiffMain(t,n),r.diffCleanupEfficiency(a),r.diffPrettyHtml(a)}}()}()}}])

//# sourceMappingURL=chunk.535.d49ca6523046b9a549ff.map