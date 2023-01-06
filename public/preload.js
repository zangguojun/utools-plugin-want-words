(()=>{var e={218:e=>{"use strict";function t(e,t){return function(){return e.apply(t,arguments)}}const{toString:n}=Object.prototype,{getPrototypeOf:r}=Object,o=(s=Object.create(null),e=>{const t=n.call(e);return s[t]||(s[t]=t.slice(8,-1).toLowerCase())});var s;const i=e=>(e=e.toLowerCase(),t=>o(t)===e),a=e=>t=>typeof t===e,{isArray:c}=Array,u=a("undefined"),l=i("ArrayBuffer"),f=a("string"),d=a("function"),p=a("number"),h=e=>null!==e&&"object"==typeof e,m=e=>{if("object"!==o(e))return!1;const t=r(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},g=i("Date"),y=i("File"),w=i("Blob"),b=i("FileList"),E=i("URLSearchParams");function O(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let r,o;if("object"!=typeof e&&(e=[e]),c(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let i;for(r=0;r<s;r++)i=o[r],t.call(null,e[i],i,e)}}function S(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,o=n.length;for(;o-- >0;)if(r=n[o],t===r.toLowerCase())return r;return null}const R="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:global,A=e=>!u(e)&&e!==R,v=(T="undefined"!=typeof Uint8Array&&r(Uint8Array),e=>T&&e instanceof T);var T;const x=i("HTMLFormElement"),j=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),N=i("RegExp"),C=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};O(n,((n,o)=>{!1!==t(n,o,e)&&(r[o]=n)})),Object.defineProperties(e,r)};var P={isArray:c,isArrayBuffer:l,isBuffer:function(e){return null!==e&&!u(e)&&null!==e.constructor&&!u(e.constructor)&&d(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{const t="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||n.call(e)===t||d(e.toString)&&e.toString()===t)},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&l(e.buffer),t},isString:f,isNumber:p,isBoolean:e=>!0===e||!1===e,isObject:h,isPlainObject:m,isUndefined:u,isDate:g,isFile:y,isBlob:w,isRegExp:N,isFunction:d,isStream:e=>h(e)&&d(e.pipe),isURLSearchParams:E,isTypedArray:v,isFileList:b,forEach:O,merge:function e(){const{caseless:t}=A(this)&&this||{},n={},r=(r,o)=>{const s=t&&S(n,o)||o;m(n[s])&&m(r)?n[s]=e(n[s],r):m(r)?n[s]=e({},r):c(r)?n[s]=r.slice():n[s]=r};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&O(arguments[e],r);return n},extend:(e,n,r,{allOwnKeys:o}={})=>(O(n,((n,o)=>{r&&d(n)?e[o]=t(n,r):e[o]=n}),{allOwnKeys:o}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,o)=>{let s,i,a;const c={};if(t=t||{},null==e)return t;do{for(s=Object.getOwnPropertyNames(e),i=s.length;i-- >0;)a=s[i],o&&!o(a,e,t)||c[a]||(t[a]=e[a],c[a]=!0);e=!1!==n&&r(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:o,kindOfTest:i,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(c(e))return e;let t=e.length;if(!p(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:x,hasOwnProperty:j,hasOwnProp:j,reduceDescriptors:C,freezeMethods:e=>{C(e,((t,n)=>{if(d(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];d(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return c(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>(e=+e,Number.isFinite(e)?e:t),findKey:S,global:R,isContextDefined:A,toJSONObject:e=>{const t=new Array(10),n=(e,r)=>{if(h(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const o=c(e)?[]:{};return O(e,((e,t)=>{const s=n(e,r+1);!u(s)&&(o[t]=s)})),t[r]=void 0,o}}return e};return n(e,0)}};function U(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}P.inherits(U,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:P.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const _=U.prototype,F={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{F[e]={value:e}})),Object.defineProperties(U,F),Object.defineProperty(_,"isAxiosError",{value:!0}),U.from=(e,t,n,r,o,s)=>{const i=Object.create(_);return P.toFlatObject(e,i,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),U.call(i,e.message,t,n,r,o),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};var L="object"==typeof self?self.FormData:window.FormData;function B(e){return P.isPlainObject(e)||P.isArray(e)}function D(e){return P.endsWith(e,"[]")?e.slice(0,-2):e}function k(e,t,n){return e?e.concat(t).map((function(e,t){return e=D(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const q=P.toFlatObject(P,{},null,(function(e){return/^is[A-Z]/.test(e)}));function z(e,t,n){if(!P.isObject(e))throw new TypeError("target must be an object");t=t||new(L||FormData);const r=(n=P.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!P.isUndefined(t[e])}))).metaTokens,o=n.visitor||l,s=n.dots,i=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&(c=t)&&P.isFunction(c.append)&&"FormData"===c[Symbol.toStringTag]&&c[Symbol.iterator];var c;if(!P.isFunction(o))throw new TypeError("visitor must be a function");function u(e){if(null===e)return"";if(P.isDate(e))return e.toISOString();if(!a&&P.isBlob(e))throw new U("Blob is not supported. Use a Buffer instead.");return P.isArrayBuffer(e)||P.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}function l(e,n,o){let a=e;if(e&&!o&&"object"==typeof e)if(P.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(P.isArray(e)&&function(e){return P.isArray(e)&&!e.some(B)}(e)||P.isFileList(e)||P.endsWith(n,"[]")&&(a=P.toArray(e)))return n=D(n),a.forEach((function(e,r){!P.isUndefined(e)&&null!==e&&t.append(!0===i?k([n],r,s):null===i?n:n+"[]",u(e))})),!1;return!!B(e)||(t.append(k(o,n,s),u(e)),!1)}const f=[],d=Object.assign(q,{defaultVisitor:l,convertValue:u,isVisitable:B});if(!P.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!P.isUndefined(n)){if(-1!==f.indexOf(n))throw Error("Circular reference detected in "+r.join("."));f.push(n),P.forEach(n,(function(n,s){!0===(!(P.isUndefined(n)||null===n)&&o.call(t,n,P.isString(s)?s.trim():s,r,d))&&e(n,r?r.concat(s):[s])})),f.pop()}}(e),t}function M(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function I(e,t){this._pairs=[],e&&z(e,this,t)}const J=I.prototype;function H(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function W(e,t,n){if(!t)return e;const r=n&&n.encode||H,o=n&&n.serialize;let s;if(s=o?o(t,n):P.isURLSearchParams(t)?t.toString():new I(t,n).toString(r),s){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}J.append=function(e,t){this._pairs.push([e,t])},J.toString=function(e){const t=e?function(t){return e.call(this,t,M)}:M;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};var K=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){P.forEach(this.handlers,(function(t){null!==t&&e(t)}))}},V={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},$="undefined"!=typeof URLSearchParams?URLSearchParams:I,Z=FormData;const G=(()=>{let e;return("undefined"==typeof navigator||"ReactNative"!==(e=navigator.product)&&"NativeScript"!==e&&"NS"!==e)&&"undefined"!=typeof window&&"undefined"!=typeof document})(),X="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts;var Q={isBrowser:!0,classes:{URLSearchParams:$,FormData:Z,Blob},isStandardBrowserEnv:G,isStandardBrowserWebWorkerEnv:X,protocols:["http","https","file","blob","url","data"]};function Y(e){function t(e,n,r,o){let s=e[o++];const i=Number.isFinite(+s),a=o>=e.length;return s=!s&&P.isArray(r)?r.length:s,a?(P.hasOwnProp(r,s)?r[s]=[r[s],n]:r[s]=n,!i):(r[s]&&P.isObject(r[s])||(r[s]=[]),t(e,n,r[s],o)&&P.isArray(r[s])&&(r[s]=function(e){const t={},n=Object.keys(e);let r;const o=n.length;let s;for(r=0;r<o;r++)s=n[r],t[s]=e[s];return t}(r[s])),!i)}if(P.isFormData(e)&&P.isFunction(e.entries)){const n={};return P.forEachEntry(e,((e,r)=>{t(function(e){return P.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),r,n,0)})),n}return null}const ee={"Content-Type":void 0},te={transitional:V,adapter:["xhr","http"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,o=P.isObject(e);if(o&&P.isHTMLForm(e)&&(e=new FormData(e)),P.isFormData(e))return r&&r?JSON.stringify(Y(e)):e;if(P.isArrayBuffer(e)||P.isBuffer(e)||P.isStream(e)||P.isFile(e)||P.isBlob(e))return e;if(P.isArrayBufferView(e))return e.buffer;if(P.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let s;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return z(e,new Q.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return Q.isNode&&P.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((s=P.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return z(s?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||r?(t.setContentType("application/json",!1),function(e,t,n){if(P.isString(e))try{return(0,JSON.parse)(e),P.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||te.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(e&&P.isString(e)&&(n&&!this.responseType||r)){const n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(e){if(n){if("SyntaxError"===e.name)throw U.from(e,U.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Q.classes.FormData,Blob:Q.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};P.forEach(["delete","get","head"],(function(e){te.headers[e]={}})),P.forEach(["post","put","patch"],(function(e){te.headers[e]=P.merge(ee)}));var ne=te;const re=P.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),oe=Symbol("internals");function se(e){return e&&String(e).trim().toLowerCase()}function ie(e){return!1===e||null==e?e:P.isArray(e)?e.map(ie):String(e)}function ae(e,t,n,r){return P.isFunction(r)?r.call(this,t,n):P.isString(t)?P.isString(r)?-1!==t.indexOf(r):P.isRegExp(r)?r.test(t):void 0:void 0}class ce{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function o(e,t,n){const o=se(t);if(!o)throw new Error("header name must be a non-empty string");const s=P.findKey(r,o);(!s||void 0===r[s]||!0===n||void 0===n&&!1!==r[s])&&(r[s||t]=ie(e))}const s=(e,t)=>P.forEach(e,((e,n)=>o(e,n,t)));return P.isPlainObject(e)||e instanceof this.constructor?s(e,t):P.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z]+$/.test(e.trim())?s((e=>{const t={};let n,r,o;return e&&e.split("\n").forEach((function(e){o=e.indexOf(":"),n=e.substring(0,o).trim().toLowerCase(),r=e.substring(o+1).trim(),!n||t[n]&&re[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t})(e),t):null!=e&&o(t,e,n),this}get(e,t){if(e=se(e)){const n=P.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if(P.isFunction(t))return t.call(this,e,n);if(P.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=se(e)){const n=P.findKey(this,e);return!(!n||t&&!ae(0,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function o(e){if(e=se(e)){const o=P.findKey(n,e);!o||t&&!ae(0,n[o],o,t)||(delete n[o],r=!0)}}return P.isArray(e)?e.forEach(o):o(e),r}clear(){return Object.keys(this).forEach(this.delete.bind(this))}normalize(e){const t=this,n={};return P.forEach(this,((r,o)=>{const s=P.findKey(n,o);if(s)return t[s]=ie(r),void delete t[o];const i=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(o):String(o).trim();i!==o&&delete t[o],t[i]=ie(r),n[i]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return P.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&P.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=(this[oe]=this[oe]={accessors:{}}).accessors,n=this.prototype;function r(e){const r=se(e);t[r]||(function(e,t){const n=P.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,o){return this[r].call(this,t,e,n,o)},configurable:!0})}))}(n,e),t[r]=!0)}return P.isArray(e)?e.forEach(r):r(e),this}}ce.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]),P.freezeMethods(ce.prototype),P.freezeMethods(ce);var ue=ce;function le(e,t){const n=this||ne,r=t||n,o=ue.from(r.headers);let s=r.data;return P.forEach(e,(function(e){s=e.call(n,s,o.normalize(),t?t.status:void 0)})),o.normalize(),s}function fe(e){return!(!e||!e.__CANCEL__)}function de(e,t,n){U.call(this,null==e?"canceled":e,U.ERR_CANCELED,t,n),this.name="CanceledError"}P.inherits(de,U,{__CANCEL__:!0});var pe=Q.isStandardBrowserEnv?{write:function(e,t,n,r,o,s){const i=[];i.push(e+"="+encodeURIComponent(t)),P.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),P.isString(r)&&i.push("path="+r),P.isString(o)&&i.push("domain="+o),!0===s&&i.push("secure"),document.cookie=i.join("; ")},read:function(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function he(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}var me=Q.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function r(n){let r=n;return e&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(e){const t=P.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0};function ge(e,t){let n=0;const r=function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o,s=0,i=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),u=r[i];o||(o=c),n[s]=a,r[s]=c;let l=i,f=0;for(;l!==s;)f+=n[l++],l%=e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),c-o<t)return;const d=u&&c-u;return d?Math.round(1e3*f/d):void 0}}(50,250);return o=>{const s=o.loaded,i=o.lengthComputable?o.total:void 0,a=s-n,c=r(a);n=s;const u={loaded:s,total:i,progress:i?s/i:void 0,bytes:a,rate:c||void 0,estimated:c&&i&&s<=i?(i-s)/c:void 0,event:o};u[t?"download":"upload"]=!0,e(u)}}const ye={http:null,xhr:"undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){let r=e.data;const o=ue.from(e.headers).normalize(),s=e.responseType;let i;function a(){e.cancelToken&&e.cancelToken.unsubscribe(i),e.signal&&e.signal.removeEventListener("abort",i)}P.isFormData(r)&&(Q.isStandardBrowserEnv||Q.isStandardBrowserWebWorkerEnv)&&o.setContentType(!1);let c=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(t+":"+n))}const u=he(e.baseURL,e.url);function l(){if(!c)return;const r=ue.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders());!function(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new U("Request failed with status code "+n.status,[U.ERR_BAD_REQUEST,U.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}((function(e){t(e),a()}),(function(e){n(e),a()}),{data:s&&"text"!==s&&"json"!==s?c.response:c.responseText,status:c.status,statusText:c.statusText,headers:r,config:e,request:c}),c=null}if(c.open(e.method.toUpperCase(),W(u,e.params,e.paramsSerializer),!0),c.timeout=e.timeout,"onloadend"in c?c.onloadend=l:c.onreadystatechange=function(){c&&4===c.readyState&&(0!==c.status||c.responseURL&&0===c.responseURL.indexOf("file:"))&&setTimeout(l)},c.onabort=function(){c&&(n(new U("Request aborted",U.ECONNABORTED,e,c)),c=null)},c.onerror=function(){n(new U("Network Error",U.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const r=e.transitional||V;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new U(t,r.clarifyTimeoutError?U.ETIMEDOUT:U.ECONNABORTED,e,c)),c=null},Q.isStandardBrowserEnv){const t=(e.withCredentials||me(u))&&e.xsrfCookieName&&pe.read(e.xsrfCookieName);t&&o.set(e.xsrfHeaderName,t)}void 0===r&&o.setContentType(null),"setRequestHeader"in c&&P.forEach(o.toJSON(),(function(e,t){c.setRequestHeader(t,e)})),P.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),s&&"json"!==s&&(c.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&c.addEventListener("progress",ge(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&c.upload&&c.upload.addEventListener("progress",ge(e.onUploadProgress)),(e.cancelToken||e.signal)&&(i=t=>{c&&(n(!t||t.type?new de(null,e,c):t),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(i),e.signal&&(e.signal.aborted?i():e.signal.addEventListener("abort",i)));const f=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(u);f&&-1===Q.protocols.indexOf(f)?n(new U("Unsupported protocol "+f+":",U.ERR_BAD_REQUEST,e)):c.send(r||null)}))}};P.forEach(ye,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}}));function we(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new de(null,e)}function be(e){return we(e),e.headers=ue.from(e.headers),e.data=le.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1),(e=>{e=P.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let o=0;o<t&&(n=e[o],!(r=P.isString(n)?ye[n.toLowerCase()]:n));o++);if(!r){if(!1===r)throw new U(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(P.hasOwnProp(ye,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`)}if(!P.isFunction(r))throw new TypeError("adapter is not a function");return r})(e.adapter||ne.adapter)(e).then((function(t){return we(e),t.data=le.call(e,e.transformResponse,t),t.headers=ue.from(t.headers),t}),(function(t){return fe(t)||(we(e),t&&t.response&&(t.response.data=le.call(e,e.transformResponse,t.response),t.response.headers=ue.from(t.response.headers))),Promise.reject(t)}))}const Ee=e=>e instanceof ue?e.toJSON():e;function Oe(e,t){t=t||{};const n={};function r(e,t,n){return P.isPlainObject(e)&&P.isPlainObject(t)?P.merge.call({caseless:n},e,t):P.isPlainObject(t)?P.merge({},t):P.isArray(t)?t.slice():t}function o(e,t,n){return P.isUndefined(t)?P.isUndefined(e)?void 0:r(void 0,e,n):r(e,t,n)}function s(e,t){if(!P.isUndefined(t))return r(void 0,t)}function i(e,t){return P.isUndefined(t)?P.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function a(n,o,s){return s in t?r(n,o):s in e?r(void 0,n):void 0}const c={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:a,headers:(e,t)=>o(Ee(e),Ee(t),!0)};return P.forEach(Object.keys(e).concat(Object.keys(t)),(function(r){const s=c[r]||o,i=s(e[r],t[r],r);P.isUndefined(i)&&s!==a||(n[r]=i)})),n}const Se={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{Se[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const Re={};Se.transitional=function(e,t,n){function r(e,t){return"[Axios v1.2.2] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,o,s)=>{if(!1===e)throw new U(r(o," has been removed"+(t?" in "+t:"")),U.ERR_DEPRECATED);return t&&!Re[o]&&(Re[o]=!0,console.warn(r(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,o,s)}};var Ae={assertOptions:function(e,t,n){if("object"!=typeof e)throw new U("options must be an object",U.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const s=r[o],i=t[s];if(i){const t=e[s],n=void 0===t||i(t,s,e);if(!0!==n)throw new U("option "+s+" must be "+n,U.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new U("Unknown option "+s,U.ERR_BAD_OPTION)}},validators:Se};const ve=Ae.validators;class Te{constructor(e){this.defaults=e,this.interceptors={request:new K,response:new K}}request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=Oe(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:o}=t;let s;void 0!==n&&Ae.assertOptions(n,{silentJSONParsing:ve.transitional(ve.boolean),forcedJSONParsing:ve.transitional(ve.boolean),clarifyTimeoutError:ve.transitional(ve.boolean)},!1),void 0!==r&&Ae.assertOptions(r,{encode:ve.function,serialize:ve.function},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase(),s=o&&P.merge(o.common,o[t.method]),s&&P.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete o[e]})),t.headers=ue.concat(s,o);const i=[];let a=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,i.unshift(e.fulfilled,e.rejected))}));const c=[];let u;this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)}));let l,f=0;if(!a){const e=[be.bind(this),void 0];for(e.unshift.apply(e,i),e.push.apply(e,c),l=e.length,u=Promise.resolve(t);f<l;)u=u.then(e[f++],e[f++]);return u}l=i.length;let d=t;for(f=0;f<l;){const e=i[f++],t=i[f++];try{d=e(d)}catch(e){t.call(this,e);break}}try{u=be.call(this,d)}catch(e){return Promise.reject(e)}for(f=0,l=c.length;f<l;)u=u.then(c[f++],c[f++]);return u}getUri(e){return W(he((e=Oe(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}P.forEach(["delete","get","head","options"],(function(e){Te.prototype[e]=function(t,n){return this.request(Oe(n||{},{method:e,url:t,data:(n||{}).data}))}})),P.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,o){return this.request(Oe(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}Te.prototype[e]=t(),Te.prototype[e+"Form"]=t(!0)}));var xe=Te;class je{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,o){n.reason||(n.reason=new de(e,r,o),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new je((function(t){e=t})),cancel:e}}}var Ne=je;const Ce={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ce).forEach((([e,t])=>{Ce[t]=e}));var Pe=Ce;const Ue=function e(n){const r=new xe(n),o=t(xe.prototype.request,r);return P.extend(o,xe.prototype,r,{allOwnKeys:!0}),P.extend(o,r,null,{allOwnKeys:!0}),o.create=function(t){return e(Oe(n,t))},o}(ne);Ue.Axios=xe,Ue.CanceledError=de,Ue.CancelToken=Ne,Ue.isCancel=fe,Ue.VERSION="1.2.2",Ue.toFormData=z,Ue.AxiosError=U,Ue.Cancel=Ue.CanceledError,Ue.all=function(e){return Promise.all(e)},Ue.spread=function(e){return function(t){return e.apply(null,t)}},Ue.isAxiosError=function(e){return P.isObject(e)&&!0===e.isAxiosError},Ue.mergeConfig=Oe,Ue.AxiosHeaders=ue,Ue.formToJSON=e=>Y(P.isHTMLForm(e)?new FormData(e):e),Ue.HttpStatusCode=Pe,Ue.default=Ue,e.exports=Ue},490:e=>{"use strict";e.exports=JSON.parse('{"name":"wantWords","pluginName":"wantWords反向词典","description":"反向词典","preload":"public/preload.js","logo":"public/logo.jpg","homepage":"https://github.com/zangguojun/utools-plugin-want-words","author":"zangguojun","features":[{"code":"ZhZh","explain":"汉语=>汉语","cmds":["汉转汉","ZhZh","zz"]},{"code":"ZhEn","explain":"汉语=>英语","cmds":["汉转英","ZhEn","ze"]},{"code":"EnEn","explain":"英语=>英语","cmds":["英转英","EnEn","ee"]},{"code":"EnZh","explain":"英语=>汉语","cmds":["英转汉","EnZh","ez"]}]}')}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,n),s.exports}(()=>{const e=n(218),{features:t}=n(490),r={汉语:"ChineseRD",英语:"EnglishRD"},o=t.reduce(((t,n)=>{const{code:o,explain:s}=n,[,i]=s.split("=>"),a={mode:"list",args:{search:async(t,n,s)=>{await(async t=>{const{data:n=[]}=await e.get(t);Array.isArray(n)?window.backSetList=n.slice(0,100).map((e=>({title:e.w,description:e.d,url:`https://openhownet.thunlp.org/search?keyword=${e.w}`}))):window.backSetList=[{title:n.message,description:n.details}]})(`https://wantwords.net/${r[i]}/?q=${n}&m=${o}&f=1`),s(window.backSetList)},select:async(t,n)=>{window.utools.hideMainWindow(),window.utools.copyText(n.title),await(async(t,n=window.backSetList[0])=>{await e.get(`https://wantwords.net/feedback/?c=${t.title}|2|||${n.title}&m=w`)})(n),window.utools.outPlugin()},placeholder:`请输入${input}`}};return{...t,[o]:a}}),{});console.log("🚀~ 50  config",o),window.exports=o})()})();