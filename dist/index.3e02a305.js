function e(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},r=t.parcelRequireca0a;function s(e){return e=e||[],Array.isArray(e)?e:[e]}function o(e){return`[Vaadin.Router] ${e}`}null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){i[e]=t},t.parcelRequireca0a=r),r.register("27Lyk",(function(t,n){var i,r;e(t.exports,"register",(()=>i),(e=>i=e)),e(t.exports,"resolve",(()=>r),(e=>r=e));var s={};i=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)s[t[n]]=e[t[n]]},r=function(e){var t=s[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),r.register("f8zwL",(function(e,t){e.exports=new URL(r("27Lyk").resolve("ezCGa"),import.meta.url).toString()})),r.register("7EsYI",(function(e,t){e.exports=new URL(r("27Lyk").resolve("gzxIO"),import.meta.url).toString()})),r.register("7LgUJ",(function(e,t){e.exports=new URL(r("27Lyk").resolve("hRxV9"),import.meta.url).toString()})),r.register("2k3gL",(function(e,t){e.exports=new URL(r("27Lyk").resolve("ker4v"),import.meta.url).toString()})),r.register("cNX3E",(function(e,t){e.exports=new URL(r("27Lyk").resolve("56OK1"),import.meta.url).toString()})),r.register("gZkbp",(function(e,t){e.exports=new URL(r("27Lyk").resolve("2E5ap"),import.meta.url).toString()})),r("27Lyk").register(JSON.parse('{"eHDun":"index.3e02a305.js","ezCGa":"tijera.6a2fdda1.svg","gzxIO":"papel.5f79bbf0.svg","hRxV9":"piedra.c88f7ccf.svg","ker4v":"ganaste.a5669fde.svg","56OK1":"perdiste.9846907e.svg","2E5ap":"empataste.e1be417e.svg"}'));const a=["module","nomodule"];function c(e){if(!e.match(/.+\.[m]?js$/))throw new Error(o(`Unsupported type for bundle "${e}": .js or .mjs expected.`))}function l(e){if(!e||!f(e.path))throw new Error(o('Expected route config to be an object with a "path" string property, or an array of such objects'));const t=e.bundle,n=["component","redirect","bundle"];if(!(m(e.action)||Array.isArray(e.children)||m(e.children)||p(t)||n.some((t=>f(e[t])))))throw new Error(o(`Expected route config "${e.path}" to include either "${n.join('", "')}" or "action" function but none found.`));if(t)if(f(t))c(t);else{if(!a.some((e=>e in t)))throw new Error(o('Expected route bundle to include either "nomodule" or "module" keys, or both'));a.forEach((e=>e in t&&c(t[e])))}e.redirect&&["bundle","component"].forEach((t=>{t in e&&console.warn(o(`Route config "${e.path}" has both "redirect" and "${t}" properties, and "redirect" will always override the latter. Did you mean to only use "${t}"?`))}))}function h(e){s(e).forEach((e=>l(e)))}function d(e,t){let n=document.head.querySelector('script[src="'+e+'"][async]');return n||(n=document.createElement("script"),n.setAttribute("src",e),"module"===t?n.setAttribute("type","module"):"nomodule"===t&&n.setAttribute("nomodule",""),n.async=!0),new Promise(((e,t)=>{n.onreadystatechange=n.onload=t=>{n.__dynamicImportLoaded=!0,e(t)},n.onerror=e=>{n.parentNode&&n.parentNode.removeChild(n),t(e)},null===n.parentNode?document.head.appendChild(n):n.__dynamicImportLoaded&&e()}))}function u(e,t){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${e}`,{cancelable:"go"===e,detail:t}))}function p(e){return"object"==typeof e&&!!e}function m(e){return"function"==typeof e}function f(e){return"string"==typeof e}function _(e){const t=new Error(o(`Page not found (${e.pathname})`));return t.context=e,t.code=404,t}const g=new class{};function y(e){if(e.defaultPrevented)return;if(0!==e.button)return;if(e.shiftKey||e.ctrlKey||e.altKey||e.metaKey)return;let t=e.target;const n=e.composedPath?e.composedPath():e.path||[];for(let e=0;e<n.length;e++){const i=n[e];if(i.nodeName&&"a"===i.nodeName.toLowerCase()){t=i;break}}for(;t&&"a"!==t.nodeName.toLowerCase();)t=t.parentNode;if(!t||"a"!==t.nodeName.toLowerCase())return;if(t.target&&"_self"!==t.target.toLowerCase())return;if(t.hasAttribute("download"))return;if(t.hasAttribute("router-ignore"))return;if(t.pathname===window.location.pathname&&""!==t.hash)return;const i=t.origin||function(e){const t=e.port,n=e.protocol;return`${n}//${"http:"===n&&"80"===t||"https:"===n&&"443"===t?e.hostname:e.host}`}(t);if(i!==window.location.origin)return;const{pathname:r,search:s,hash:o}=t;u("go",{pathname:r,search:s,hash:o})&&(e.preventDefault(),e&&"click"===e.type&&window.scrollTo(0,0))}const v={activate(){window.document.addEventListener("click",y)},inactivate(){window.document.removeEventListener("click",y)}};function w(e){if("vaadin-router-ignore"===e.state)return;const{pathname:t,search:n,hash:i}=window.location;u("go",{pathname:t,search:n,hash:i})}/Trident/.test(navigator.userAgent)&&!m(window.PopStateEvent)&&(window.PopStateEvent=function(e,t){t=t||{};var n=document.createEvent("Event");return n.initEvent(e,Boolean(t.bubbles),Boolean(t.cancelable)),n.state=t.state||null,n},window.PopStateEvent.prototype=window.Event.prototype);const C={activate(){window.addEventListener("popstate",w)},inactivate(){window.removeEventListener("popstate",w)}};var b=A,E=k,T=function(e,t){return N(k(e,t))},I=N,x=D,S=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function k(e,t){for(var n,i=[],r=0,s=0,o="",a=t&&t.delimiter||"/",c=t&&t.delimiters||"./",l=!1;null!==(n=S.exec(e));){var h=n[0],d=n[1],u=n.index;if(o+=e.slice(s,u),s=u+h.length,d)o+=d[1],l=!0;else{var p="",m=e[s],f=n[2],_=n[3],g=n[4],y=n[5];if(!l&&o.length){var v=o.length-1;c.indexOf(o[v])>-1&&(p=o[v],o=o.slice(0,v))}o&&(i.push(o),o="",l=!1);var w=""!==p&&void 0!==m&&m!==p,C="+"===y||"*"===y,b="?"===y||"*"===y,E=p||a,T=_||g;i.push({name:f||r++,prefix:p,delimiter:E,optional:b,repeat:C,partial:w,pattern:T?P(T):"[^"+R(E)+"]+?"})}}return(o||s<e.length)&&i.push(o+e.substr(s)),i}function N(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,i){for(var r="",s=i&&i.encode||encodeURIComponent,o=0;o<e.length;o++){var a=e[o];if("string"!=typeof a){var c,l=n?n[a.name]:void 0;if(Array.isArray(l)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but got array');if(0===l.length){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var h=0;h<l.length;h++){if(c=s(l[h],a),!t[o].test(c))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'"');r+=(0===h?a.prefix:a.delimiter)+c}}else if("string"!=typeof l&&"number"!=typeof l&&"boolean"!=typeof l){if(!a.optional)throw new TypeError('Expected "'+a.name+'" to be '+(a.repeat?"an array":"a string"));a.partial&&(r+=a.prefix)}else{if(c=s(String(l),a),!t[o].test(c))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but got "'+c+'"');r+=a.prefix+c}}else r+=a}return r}}function R(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function P(e){return e.replace(/([=!:$/()])/g,"\\$1")}function L(e){return e&&e.sensitive?"":"i"}function D(e,t,n){for(var i=(n=n||{}).strict,r=!1!==n.start,s=!1!==n.end,o=R(n.delimiter||"/"),a=n.delimiters||"./",c=[].concat(n.endsWith||[]).map(R).concat("$").join("|"),l=r?"^":"",h=0===e.length,d=0;d<e.length;d++){var u=e[d];if("string"==typeof u)l+=R(u),h=d===e.length-1&&a.indexOf(u[u.length-1])>-1;else{var p=u.repeat?"(?:"+u.pattern+")(?:"+R(u.delimiter)+"(?:"+u.pattern+"))*":u.pattern;t&&t.push(u),u.optional?u.partial?l+=R(u.prefix)+"("+p+")?":l+="(?:"+R(u.prefix)+"("+p+"))?":l+=R(u.prefix)+"("+p+")"}}return s?(i||(l+="(?:"+o+")?"),l+="$"===c?"$":"(?="+c+")"):(i||(l+="(?:"+o+"(?="+c+"))?"),h||(l+="(?="+o+"|"+c+")")),new RegExp(l,L(n))}function A(e,t,n){return e instanceof RegExp?function(e,t){if(!t)return e;var n=e.source.match(/\((?!\?)/g);if(n)for(var i=0;i<n.length;i++)t.push({name:i,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return e}(e,t):Array.isArray(e)?function(e,t,n){for(var i=[],r=0;r<e.length;r++)i.push(A(e[r],t,n).source);return new RegExp("(?:"+i.join("|")+")",L(n))}(e,t,n):function(e,t,n){return D(k(e,n),t,n)}(e,t,n)}b.parse=E,b.compile=T,b.tokensToFunction=I,b.tokensToRegExp=x;const{hasOwnProperty:M}=Object.prototype,O=new Map;function F(e){try{return decodeURIComponent(e)}catch(t){return e}}function q(e,t,n,i,r){let s,o,a=0,c=e.path||"";return"/"===c.charAt(0)&&(n&&(c=c.substr(1)),n=!0),{next(l){if(e===l)return{done:!0};const h=e.__children=e.__children||e.children;if(!s&&(s=function(e,t,n,i,r){const s=`${e}|${n=!!n}`;let o=O.get(s);if(!o){const t=[];o={keys:t,pattern:b(e,t,{end:n,strict:""===e})},O.set(s,o)}const a=o.pattern.exec(t);if(!a)return null;const c=Object.assign({},r);for(let e=1;e<a.length;e++){const t=o.keys[e-1],n=t.name,i=a[e];void 0===i&&M.call(c,n)||(t.repeat?c[n]=i?i.split(t.delimiter).map(F):[]:c[n]=i?F(i):i)}return{path:a[0],keys:(i||[]).concat(o.keys),params:c}}(c,t,!h,i,r),s))return{done:!1,value:{route:e,keys:s.keys,params:s.params,path:s.path}};if(s&&h)for(;a<h.length;){if(!o){const i=h[a];i.parent=e;let r=s.path.length;r>0&&"/"===t.charAt(r)&&(r+=1),o=q(i,t.substr(r),n,s.keys,s.params)}const i=o.next(l);if(!i.done)return{done:!1,value:i.value};o=null,a++}return{done:!0}}}}function H(e){if(m(e.route.action))return e.route.action(e)}O.set("|false",{keys:[],pattern:/(?:)/});class j{constructor(e,t={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=t.baseUrl||"",this.errorHandler=t.errorHandler,this.resolveRoute=t.resolveRoute||H,this.context=Object.assign({resolver:this},t.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(e){h(e);const t=[...s(e)];this.root.__children=t}addRoutes(e){return h(e),this.root.__children.push(...s(e)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){const t=Object.assign({},this.context,f(e)?{pathname:e}:e),n=q(this.root,this.__normalizePathname(t.pathname),this.baseUrl),i=this.resolveRoute;let r=null,s=null,o=t;function a(e,c=r.value.route,l){const h=null===l&&r.value.route;return r=s||n.next(h),s=null,e||!r.done&&function(e,t){let n=t;for(;n;)if(n=n.parent,n===e)return!0;return!1}(c,r.value.route)?r.done?Promise.reject(_(t)):(o=Object.assign(o?{chain:o.chain?o.chain.slice(0):[]}:{},t,r.value),function(e,t){const{route:n,path:i}=t;if(n&&!n.__synthetic){const t={path:i,route:n};if(e.chain){if(n.parent){let t=e.chain.length;for(;t--&&e.chain[t].route&&e.chain[t].route!==n.parent;)e.chain.pop()}}else e.chain=[];e.chain.push(t)}}(o,r.value),Promise.resolve(i(o)).then((t=>null!=t&&t!==g?(o.result=t.result||t,o):a(e,c,t)))):(s=r,Promise.resolve(g))}return t.next=a,Promise.resolve().then((()=>a(!0,this.root))).catch((e=>{const t=function(e){let t=`Path '${e.pathname}' is not properly resolved due to an error.`;const n=(e.route||{}).path;return n&&(t+=` Resolution had failed on route: '${n}'`),t}(o);if(e?console.warn(t):e=new Error(t),e.context=e.context||o,e instanceof DOMException||(e.code=e.code||500),this.errorHandler)return o.result=this.errorHandler(e),o;throw e}))}static __createUrl(e,t){return new URL(e,t)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;const t=this.__effectiveBaseUrl,n=this.constructor.__createUrl(e,t).href;return n.slice(0,t.length)===t?n.slice(t.length):void 0}}j.pathToRegexp=b;const{pathToRegexp:U}=j,B=new Map;function W(e,t,n){const i=t.name||t.component;if(i&&(e.has(i)?e.get(i).push(t):e.set(i,[t])),Array.isArray(n))for(let i=0;i<n.length;i++){const r=n[i];r.parent=t,W(e,r,r.__children||r.children)}}function $(e,t){const n=e.get(t);if(n&&n.length>1)throw new Error(`Duplicate route with name "${t}". Try seting unique 'name' route properties.`);return n&&n[0]}function z(e){let t=e.path;return t=Array.isArray(t)?t[0]:t,void 0!==t?t:""}function V(e,t={}){if(!(e instanceof j))throw new TypeError("An instance of Resolver is expected");const n=new Map;return(i,r)=>{let s=$(n,i);if(!s&&(n.clear(),W(n,e.root,e.root.__children),s=$(n,i),!s))throw new Error(`Route "${i}" not found`);let o=B.get(s.fullPath);if(!o){let e=z(s),t=s.parent;for(;t;){const n=z(t);n&&(e=n.replace(/\/$/,"")+"/"+e.replace(/^\//,"")),t=t.parent}const n=U.parse(e),i=U.tokensToFunction(n),r=Object.create(null);for(let e=0;e<n.length;e++)f(n[e])||(r[n[e].name]=!0);o={toPath:i,keys:r},B.set(e,o),s.fullPath=e}let a=o.toPath(r,t)||"/";if(t.stringifyQueryParams&&r){const e={},n=Object.keys(r);for(let t=0;t<n.length;t++){const i=n[t];o.keys[i]||(e[i]=r[i])}const i=t.stringifyQueryParams(e);i&&(a+="?"===i.charAt(0)?i:`?${i}`)}return a}}let Y=[];function G(e,t){return e.classList.add(t),new Promise((n=>{if((e=>{const t=getComputedStyle(e).getPropertyValue("animation-name");return t&&"none"!==t})(e)){const i=e.getBoundingClientRect(),r=`height: ${i.bottom-i.top}px; width: ${i.right-i.left}px`;e.setAttribute("style",`position: absolute; ${r}`),((e,t)=>{const n=()=>{e.removeEventListener("animationend",n),t()};e.addEventListener("animationend",n)})(e,(()=>{e.classList.remove(t),e.removeAttribute("style"),n()}))}else e.classList.remove(t),n()}))}function K(e){return null!=e}function Q({pathname:e="",search:t="",hash:n="",chain:i=[],params:r={},redirectFrom:s,resolver:o},a){const c=i.map((e=>e.route));return{baseUrl:o&&o.baseUrl||"",pathname:e,search:t,hash:n,routes:c,route:a||c.length&&c[c.length-1]||null,params:r,redirectFrom:s,getUrl:(e={})=>te(ie.pathToRegexp.compile(ne(c))(Object.assign({},r,e)),o)}}function J(e,t){const n=Object.assign({},e.params);return{redirect:{pathname:t,from:e.pathname,params:n}}}function X(e,t,n){if(m(e))return e.apply(n,t)}function Z(e,t,n){return i=>i&&(i.cancel||i.redirect)?i:n?X(n[e],t,n):void 0}function ee(e){if(e&&e.length){const t=e[0].parentNode;for(let n=0;n<e.length;n++)t.removeChild(e[n])}}function te(e,t){const n=t.__effectiveBaseUrl;return n?t.constructor.__createUrl(e.replace(/^\//,""),n).pathname:e}function ne(e){return e.map((e=>e.path)).reduce(((e,t)=>t.length?e.replace(/\/$/,"")+"/"+t.replace(/^\//,""):e),"")}class ie extends j{constructor(e,t){const n=document.head.querySelector("base"),i=n&&n.getAttribute("href");super([],Object.assign({baseUrl:i&&j.__createUrl(i,document.URL).pathname.replace(/[^\/]*$/,"")},t)),this.resolveRoute=e=>this.__resolveRoute(e);const r=ie.NavigationTrigger;ie.setTriggers.apply(ie,Object.keys(r).map((e=>r[e]))),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=Q({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(e){const t=e.route;let n=Promise.resolve();m(t.children)&&(n=n.then((()=>t.children(function(e){const t=Object.assign({},e);return delete t.next,t}(e)))).then((e=>{K(e)||m(t.children)||(e=t.children),function(e,t){if(!Array.isArray(e)&&!p(e))throw new Error(o(`Incorrect "children" value for the route ${t.path}: expected array or object, but got ${e}`));t.__children=[];const n=s(e);for(let e=0;e<n.length;e++)l(n[e]),t.__children.push(n[e])}(e,t)})));const i={redirect:t=>J(e,t),component:e=>{const t=document.createElement(e);return this.__createdByRouter.set(t,!0),t}};return n.then((()=>{if(this.__isLatestRender(e))return X(t.action,[e,i],t)})).then((e=>{return K(e)&&(e instanceof HTMLElement||e.redirect||e===g)?e:f(t.redirect)?i.redirect(t.redirect):t.bundle?(n=t.bundle,f(n)?d(n):Promise.race(a.filter((e=>e in n)).map((e=>d(n[e],e))))).then((()=>{}),(()=>{throw new Error(o(`Bundle not found: ${t.bundle}. Check if the file name is correct`))})):void 0;var n})).then((e=>K(e)?e:f(t.component)?i.component(t.component):void 0))}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e,t=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(e),t||this.__onNavigationEvent(),this.ready}render(e,t){const n=++this.__lastStartedRenderId,i=Object.assign({search:"",hash:""},f(e)?{pathname:e}:e,{__renderId:n});return this.ready=this.resolve(i).then((e=>this.__fullyResolveChain(e))).then((e=>{if(this.__isLatestRender(e)){const i=this.__previousContext;if(e===i)return this.__updateBrowserHistory(i,!0),this.location;if(this.location=Q(e),t&&this.__updateBrowserHistory(e,1===n),u("location-changed",{router:this,location:this.location}),e.__skipAttach)return this.__copyUnchangedElements(e,i),this.__previousContext=e,this.location;this.__addAppearingContent(e,i);const r=this.__animateIfNeeded(e);return this.__runOnAfterEnterCallbacks(e),this.__runOnAfterLeaveCallbacks(e,i),r.then((()=>{if(this.__isLatestRender(e))return this.__removeDisappearingContent(),this.__previousContext=e,this.location}))}})).catch((e=>{if(n===this.__lastStartedRenderId)throw t&&this.__updateBrowserHistory(i),ee(this.__outlet&&this.__outlet.children),this.location=Q(Object.assign(i,{resolver:this})),u("error",Object.assign({router:this,error:e},i)),e})),this.ready}__fullyResolveChain(e,t=e){return this.__findComponentContextAfterAllRedirects(t).then((n=>{const i=n!==t?n:e,r=te(ne(n.chain),n.resolver)===n.pathname,s=(e,t=e.route,n)=>e.next(void 0,t,n).then((n=>null===n||n===g?r?e:null!==t.parent?s(e,t.parent,n):n:n));return s(n).then((e=>{if(null===e||e===g)throw _(i);return e&&e!==g&&e!==n?this.__fullyResolveChain(i,e):this.__amendWithOnBeforeCallbacks(n)}))}))}__findComponentContextAfterAllRedirects(e){const t=e.result;return t instanceof HTMLElement?(function(e,t){t.location=Q(e);const n=e.chain.map((e=>e.route)).indexOf(e.route);e.chain[n].element=t}(e,t),Promise.resolve(e)):t.redirect?this.__redirect(t.redirect,e.__redirectCount,e.__renderId).then((e=>this.__findComponentContextAfterAllRedirects(e))):t instanceof Error?Promise.reject(t):Promise.reject(new Error(o(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${function(e){if("object"!=typeof e)return String(e);const t=Object.prototype.toString.call(e).match(/ (.*)\]$/)[1];return"Object"===t||"Array"===t?`${t} ${JSON.stringify(e)}`:t}(t)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then((t=>t===this.__previousContext||t===e?t:this.__fullyResolveChain(t)))}__runOnBeforeCallbacks(e){const t=this.__previousContext||{},n=t.chain||[],i=e.chain;let r=Promise.resolve();const s=()=>({cancel:!0}),o=t=>J(e,t);if(e.__divergedChainIndex=0,e.__skipAttach=!1,n.length){for(let t=0;t<Math.min(n.length,i.length)&&(n[t].route===i[t].route&&(n[t].path===i[t].path||n[t].element===i[t].element)&&this.__isReusableElement(n[t].element,i[t].element));t=++e.__divergedChainIndex);if(e.__skipAttach=i.length===n.length&&e.__divergedChainIndex==i.length&&this.__isReusableElement(e.result,t.result),e.__skipAttach){for(let t=i.length-1;t>=0;t--)r=this.__runOnBeforeLeaveCallbacks(r,e,{prevent:s},n[t]);for(let t=0;t<i.length;t++)r=this.__runOnBeforeEnterCallbacks(r,e,{prevent:s,redirect:o},i[t]),n[t].element.location=Q(e,n[t].route)}else for(let t=n.length-1;t>=e.__divergedChainIndex;t--)r=this.__runOnBeforeLeaveCallbacks(r,e,{prevent:s},n[t])}if(!e.__skipAttach)for(let t=0;t<i.length;t++)t<e.__divergedChainIndex?t<n.length&&n[t].element&&(n[t].element.location=Q(e,n[t].route)):(r=this.__runOnBeforeEnterCallbacks(r,e,{prevent:s,redirect:o},i[t]),i[t].element&&(i[t].element.location=Q(e,i[t].route)));return r.then((t=>{if(t){if(t.cancel)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(t.redirect)return this.__redirect(t.redirect,e.__redirectCount,e.__renderId)}return e}))}__runOnBeforeLeaveCallbacks(e,t,n,i){const r=Q(t);return e.then((e=>{if(this.__isLatestRender(t)){return Z("onBeforeLeave",[r,n,this],i.element)(e)}})).then((e=>{if(!(e||{}).redirect)return e}))}__runOnBeforeEnterCallbacks(e,t,n,i){const r=Q(t,i.route);return e.then((e=>{if(this.__isLatestRender(t)){return Z("onBeforeEnter",[r,n,this],i.element)(e)}}))}__isReusableElement(e,t){return!(!e||!t)&&(this.__createdByRouter.get(e)&&this.__createdByRouter.get(t)?e.localName===t.localName:e===t)}__isLatestRender(e){return e.__renderId===this.__lastStartedRenderId}__redirect(e,t,n){if(t>256)throw new Error(o(`Too many redirects when rendering ${e.from}`));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(t||0)+1,__renderId:n})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw new TypeError(o(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory({pathname:e,search:t="",hash:n=""},i){if(window.location.pathname!==e||window.location.search!==t||window.location.hash!==n){const r=i?"replaceState":"pushState";window.history[r](null,document.title,e+t+n),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(e,t){let n=this.__outlet;for(let i=0;i<e.__divergedChainIndex;i++){const r=t&&t.chain[i].element;if(r){if(r.parentNode!==n)break;e.chain[i].element=r,n=r}}return n}__addAppearingContent(e,t){this.__ensureOutlet(),this.__removeAppearingContent();const n=this.__copyUnchangedElements(e,t);this.__appearingContent=[],this.__disappearingContent=Array.from(n.children).filter((t=>this.__addedByRouter.get(t)&&t!==e.result));let i=n;for(let t=e.__divergedChainIndex;t<e.chain.length;t++){const r=e.chain[t].element;r&&(i.appendChild(r),this.__addedByRouter.set(r,!0),i===n&&this.__appearingContent.push(r),i=r)}}__removeDisappearingContent(){this.__disappearingContent&&ee(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(ee(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,t){if(t)for(let n=t.chain.length-1;n>=e.__divergedChainIndex&&this.__isLatestRender(e);n--){const i=t.chain[n].element;if(i)try{const n=Q(e);X(i.onAfterLeave,[n,{},t.resolver],i)}finally{this.__disappearingContent.indexOf(i)>-1&&ee(i.children)}}}__runOnAfterEnterCallbacks(e){for(let t=e.__divergedChainIndex;t<e.chain.length&&this.__isLatestRender(e);t++){const n=e.chain[t].element||{},i=Q(e,e.chain[t].route);X(n.onAfterEnter,[i,{},e.resolver],n)}}__animateIfNeeded(e){const t=(this.__disappearingContent||[])[0],n=(this.__appearingContent||[])[0],i=[],r=e.chain;let s;for(let e=r.length;e>0;e--)if(r[e-1].route.animate){s=r[e-1].route.animate;break}if(t&&n&&s){const e=p(s)&&s.leave||"leaving",r=p(s)&&s.enter||"entering";i.push(G(t,e)),i.push(G(n,r))}return Promise.all(i).then((()=>e))}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){const{pathname:t,search:n,hash:i}=e?e.detail:window.location;f(this.__normalizePathname(t))&&(e&&e.preventDefault&&e.preventDefault(),this.render({pathname:t,search:n,hash:i},!0))}static setTriggers(...e){var t;t=e,Y.forEach((e=>e.inactivate())),t.forEach((e=>e.activate())),Y=t}urlForName(e,t){return this.__urlForName||(this.__urlForName=V(this)),te(this.__urlForName(e,t),this)}urlForPath(e,t){return te(ie.pathToRegexp.compile(e)(t),this)}static go(e){const{pathname:t,search:n,hash:i}=f(e)?this.__createUrl(e,"http://a"):e;return u("go",{pathname:t,search:n,hash:i})}}const re=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,se=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function oe(e,t){if("function"!=typeof e)return;const n=re.exec(e.toString());if(n)try{e=new Function(n[1])}catch(e){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",e)}return e(t)}window.Vaadin=window.Vaadin||{};const ae=function(e,t){if(window.Vaadin.developmentMode)return oe(e,t)};function ce(){}void 0===window.Vaadin.developmentMode&&(window.Vaadin.developmentMode=function(){try{return!!localStorage.getItem("vaadin.developmentmode.force")||["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0&&(se?!function(){if(se){if(Object.keys(se).map((e=>se[e])).filter((e=>e.productionMode)).length>0)return!0}return!1}():!oe((function(){return!0})))}catch(e){return!1}}());window.Vaadin=window.Vaadin||{},window.Vaadin.registrations=window.Vaadin.registrations||[],window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"}),ae(ce),ie.NavigationTrigger={POPSTATE:C,CLICK:v};new ie(document.querySelector(".root")).setRoutes([{path:"/",component:"home-page"},{path:"/access-room",component:"access-page"},{path:"/game-room",component:"game-room-page"},{path:"/pre-game-room",component:"pre-game-room-page"},{path:"/choose-room",component:"choose-room-page"},{path:"/instructions",component:"instructions-page"},{path:"/comparition",component:"comparition-page"},{path:"/waiting",component:"waiting-page"},{path:"/result",component:"result-room"},{path:"/path",component:"path-page"}]);class le extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}render(){this.shadow.innerHTML='\n      <div class="container">\n      <custom-text variant="title" class="title">Piedra Papel o Tijera</custom-text>\n      <welcome-form></welcome-form>\n      </div>\n    ';const e=document.createElement("style");e.innerHTML="\n      .container{\n        width: 100%;\n        height: 100vh;\n        overflow: hidden;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n      }\n    ",this.shadow.appendChild(e)}connectedCallback(){this.render()}}customElements.define("home-page",le);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const he=!1,de=!1,ue="${JSCORE_VERSION}",pe=function(e,t){if(!e)throw me(t)},me=function(e){return new Error("Firebase Database ("+ue+") INTERNAL ASSERT FAILED: "+e)},fe=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296==(64512&r)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},_e={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){const r=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,c=a?e[t+2]:0,l=r>>2,h=(3&r)<<4|o>>4;let d=(15&o)<<2|c>>6,u=63&c;a||(u=64,s||(d=64)),i.push(n[l],n[h],n[d],n[u])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(fe(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,i=0;for(;n<e.length;){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=((7&r)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(s>>10)),t[i++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){const r=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==r||null==s||null==o||null==a)throw Error();const c=r<<2|s>>4;if(i.push(c),64!==o){const e=s<<4&240|o>>2;if(i.push(e),64!==a){const e=o<<6&192|a;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},ge=function(e){const t=fe(e);return _e.encodeByteArray(t,!0)},ye=function(e){return ge(e).replace(/\./g,"")},ve=function(e){try{return _e.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function we(e){return Ce(void 0,e)}function Ce(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=Ce(e[n],t[n]));return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class be{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ee(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function Te(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ee())}function Ie(){return!0===he||!0===de}class xe extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,xe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Se.prototype.create)}}class Se{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],s=r?function(e,t){return e.replace(ke,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`;return new xe(i,o,n)}}const ke=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(e){return JSON.parse(e)}function Re(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pe=function(e){let t={},n={},i={},r="";try{const s=e.split(".");t=Ne(ve(s[0])||""),n=Ne(ve(s[1])||""),r=s[2],i=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:i,signature:r}},Le=function(e){const t=Pe(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},De=function(e){const t=Pe(e).claims;return"object"==typeof t&&!0===t.admin};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ae(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Me(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function Oe(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Fe(e,t,n){const i={};for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(i[r]=t.call(n,e[r],r,e));return i}function qe(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const n=e[r],s=t[r];if(He(n)&&He(s)){if(!qe(n,s))return!1}else if(n!==s)return!1}for(const e of i)if(!n.includes(e))return!1;return!0}function He(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ue{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"==typeof e)for(let i=0;i<16;i++)n[i]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let i=0;i<16;i++)n[i]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){const t=n[e-3]^n[e-8]^n[e-14]^n[e-16];n[e]=4294967295&(t<<1|t>>>31)}let i,r,s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],c=this.chain_[3],l=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(i=c^o&(a^c),r=1518500249):(i=o^a^c,r=1859775393):e<60?(i=o&a|c&(o|a),r=2400959708):(i=o^a^c,r=3395469782);const t=(s<<5|s>>>27)+i+l+r+n[e]&4294967295;l=c,c=a,a=4294967295&(o<<30|o>>>2),o=s,s=t}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let i=0;const r=this.buf_;let s=this.inbuf_;for(;i<t;){if(0===s)for(;i<=n;)this.compress_(e,i),i+=this.blockSize;if("string"==typeof e){for(;i<t;)if(r[s]=e.charCodeAt(i),++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}else for(;i<t;)if(r[s]=e[i],++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}this.inbuf_=s,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let i=24;i>=0;i-=8)e[n]=this.chain_[t]>>i&255,++n;return e}}function Be(e,t){return`${e} failed: ${t} argument `}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const We=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);if(r>=55296&&r<=56319){const t=r-55296;i++,pe(i<e.length,"Surrogate pair missing trail surrogate.");r=65536+(t<<10)+(e.charCodeAt(i)-56320)}r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):r<65536?(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},$e=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ze(e){return e&&e._delegate?e._delegate:e}class Ve{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ye{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new be;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&e(s,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=e,"[DEFAULT]"===i?void 0:i),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var i;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class Ge{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Ye(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ke=[];var Qe,Je;(Je=Qe||(Qe={}))[Je.DEBUG=0]="DEBUG",Je[Je.VERBOSE=1]="VERBOSE",Je[Je.INFO=2]="INFO",Je[Je.WARN=3]="WARN",Je[Je.ERROR=4]="ERROR",Je[Je.SILENT=5]="SILENT";const Xe={debug:Qe.DEBUG,verbose:Qe.VERBOSE,info:Qe.INFO,warn:Qe.WARN,error:Qe.ERROR,silent:Qe.SILENT},Ze=Qe.INFO,et={[Qe.DEBUG]:"log",[Qe.VERBOSE]:"log",[Qe.INFO]:"info",[Qe.WARN]:"warn",[Qe.ERROR]:"error"},tt=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),r=et[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${i}]  ${e.name}:`,...n)};class nt{constructor(e){this.name=e,this._logLevel=Ze,this._logHandler=tt,this._userLogHandler=null,Ke.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Qe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?Xe[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Qe.DEBUG,...e),this._logHandler(this,Qe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Qe.VERBOSE,...e),this._logHandler(this,Qe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Qe.INFO,...e),this._logHandler(this,Qe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Qe.WARN,...e),this._logHandler(this,Qe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Qe.ERROR,...e),this._logHandler(this,Qe.ERROR,...e)}}let it,rt;const st=new WeakMap,ot=new WeakMap,at=new WeakMap,ct=new WeakMap,lt=new WeakMap;let ht={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return ot.get(e);if("objectStoreNames"===t)return e.objectStoreNames||at.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return pt(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function dt(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(rt||(rt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(mt(this),t),pt(st.get(this))}:function(...t){return pt(e.apply(mt(this),t))}:function(t,...n){const i=e.call(mt(this),t,...n);return at.set(i,t.sort?t.sort():[t]),pt(i)}}function ut(e){return"function"==typeof e?dt(e):(e instanceof IDBTransaction&&function(e){if(ot.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",s),e.removeEventListener("abort",s)},r=()=>{t(),i()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",s),e.addEventListener("abort",s)}));ot.set(e,t)}(e),t=e,(it||(it=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,ht):e);var t}function pt(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",s)},r=()=>{t(pt(e.result)),i()},s=()=>{n(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&st.set(t,e)})).catch((()=>{})),lt.set(t,e),t}(e);if(ct.has(e))return ct.get(e);const t=ut(e);return t!==e&&(ct.set(e,t),lt.set(t,e)),t}const mt=e=>lt.get(e);function ft(e,t,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(e,t),a=pt(o);return i&&o.addEventListener("upgradeneeded",(e=>{i(pt(o.result),e.oldVersion,e.newVersion,pt(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((e=>{s&&e.addEventListener("close",(()=>s())),r&&e.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),a}const _t=["get","getKey","getAll","getAllKeys","count"],gt=["put","add","delete","clear"],yt=new Map;function vt(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(yt.get(t))return yt.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,r=gt.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!_t.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,r?"readwrite":"readonly");let o=s.store;return i&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),r&&s.done]))[0]};return yt.set(t,s),s}ht=(e=>({...e,get:(t,n,i)=>vt(t,n)||e.get(t,n,i),has:(t,n)=>!!vt(t,n)||e.has(t,n)}))(ht);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wt{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const Ct=new nt("@firebase/app"),bt={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Et=new Map,Tt=new Map;function It(e,t){try{e.container.addComponent(t)}catch(n){Ct.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function xt(e){const t=e.name;if(Tt.has(t))return Ct.debug(`There were multiple attempts to register component ${t}.`),!1;Tt.set(t,e);for(const t of Et.values())It(t,e);return!0}function St(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const kt=new Se("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","storage-delete":"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nt{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Ve("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw kt.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(e="[DEFAULT]"){const t=Et.get(e);if(!t)throw kt.create("no-app",{appName:e});return t}function Pt(e,t,n){var i;let r=null!==(i=bt[e])&&void 0!==i?i:e;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${r}" with version "${t}":`];return s&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Ct.warn(e.join(" "))}xt(new Ve(`${r}-version`,(()=>({library:r,version:t})),"VERSION"))}let Lt=null;function Dt(){return Lt||(Lt=ft("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore("firebase-heartbeat-store")}}).catch((e=>{throw kt.create("storage-open",{originalErrorMessage:e.message})}))),Lt}async function At(e,t){var n;try{const n=(await Dt()).transaction("firebase-heartbeat-store","readwrite"),i=n.objectStore("firebase-heartbeat-store");return await i.put(t,Mt(e)),n.done}catch(e){throw kt.create("storage-set",{originalErrorMessage:null===(n=e)||void 0===n?void 0:n.message})}}function Mt(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new qt(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=Ft();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Ft(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let i=e.slice();for(const r of e){const e=n.find((e=>e.agent===r.agent));if(e){if(e.dates.push(r.date),Ht(n)>t){e.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Ht(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=ye(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ft(){return(new Date).toISOString().substring(0,10)}class qt{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return"object"==typeof indexedDB&&new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){var t;try{return(await Dt()).transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get(Mt(e))}catch(e){throw kt.create("storage-get",{originalErrorMessage:null===(t=e)||void 0===t?void 0:t.message})}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return At(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return At(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Ht(e){return ye(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var jt;jt="",xt(new Ve("platform-logger",(e=>new wt(e)),"PRIVATE")),xt(new Ve("heartbeat",(e=>new Ot(e)),"PRIVATE")),Pt("@firebase/app","0.7.26",jt),Pt("@firebase/app","0.7.26","esm2017"),Pt("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Pt("firebase","9.8.3","app");var Ut,Bt,Wt,$t=Ut={};function zt(){throw new Error("setTimeout has not been defined")}function Vt(){throw new Error("clearTimeout has not been defined")}function Yt(e){if(Bt===setTimeout)return setTimeout(e,0);if((Bt===zt||!Bt)&&setTimeout)return Bt=setTimeout,setTimeout(e,0);try{return Bt(e,0)}catch(t){try{return Bt.call(null,e,0)}catch(t){return Bt.call(this,e,0)}}}!function(){try{Bt="function"==typeof setTimeout?setTimeout:zt}catch(e){Bt=zt}try{Wt="function"==typeof clearTimeout?clearTimeout:Vt}catch(e){Wt=Vt}}();var Gt,Kt=[],Qt=!1,Jt=-1;function Xt(){Qt&&Gt&&(Qt=!1,Gt.length?Kt=Gt.concat(Kt):Jt=-1,Kt.length&&Zt())}function Zt(){if(!Qt){var e=Yt(Xt);Qt=!0;for(var t=Kt.length;t;){for(Gt=Kt,Kt=[];++Jt<t;)Gt&&Gt[Jt].run();Jt=-1,t=Kt.length}Gt=null,Qt=!1,function(e){if(Wt===clearTimeout)return clearTimeout(e);if((Wt===Vt||!Wt)&&clearTimeout)return Wt=clearTimeout,clearTimeout(e);try{Wt(e)}catch(t){try{return Wt.call(null,e)}catch(t){return Wt.call(this,e)}}}(e)}}function en(e,t){this.fun=e,this.array=t}function tn(){}$t.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];Kt.push(new en(e,t)),1!==Kt.length||Qt||Yt(Zt)},en.prototype.run=function(){this.fun.apply(null,this.array)},$t.title="browser",$t.browser=!0,$t.env={},$t.argv=[],$t.version="",$t.versions={},$t.on=tn,$t.addListener=tn,$t.once=tn,$t.off=tn,$t.removeListener=tn,$t.removeAllListeners=tn,$t.emit=tn,$t.prependListener=tn,$t.prependOnceListener=tn,$t.listeners=function(e){return[]},$t.binding=function(e){throw new Error("process.binding is not supported")},$t.cwd=function(){return"/"},$t.chdir=function(e){throw new Error("process.chdir is not supported")},$t.umask=function(){return 0};
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nn="";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rn{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Re(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:Ne(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return Ae(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const on=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new rn(t)}}catch(e){}return new sn},an=on("localStorage"),cn=on("sessionStorage"),ln=new nt("@firebase/database"),hn=function(){let e=1;return function(){return e++}}(),dn=function(e){const t=We(e),n=new Ue;n.update(t);const i=n.digest();return _e.encodeByteArray(i)},un=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&"object"==typeof i&&"number"==typeof i.length?t+=un.apply(null,i):t+="object"==typeof i?Re(i):i,t+=" "}return t};let pn=null,mn=!0;const fn=function(e,t){pe(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(ln.logLevel=Qe.VERBOSE,pn=ln.log.bind(ln),t&&cn.set("logging_enabled",!0)):"function"==typeof e?pn=e:(pn=null,cn.remove("logging_enabled"))},_n=function(...e){if(!0===mn&&(mn=!1,null===pn&&!0===cn.get("logging_enabled")&&fn(!0)),pn){const t=un.apply(null,e);pn(t)}},gn=function(e){return function(...t){_n(e,...t)}},yn=function(...e){const t="FIREBASE INTERNAL ERROR: "+un(...e);ln.error(t)},vn=function(...e){const t=`FIREBASE FATAL ERROR: ${un(...e)}`;throw ln.error(t),new Error(t)},wn=function(...e){const t="FIREBASE WARNING: "+un(...e);ln.warn(t)},Cn=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},bn=function(e,t){if(e===t)return 0;if("[MIN_NAME]"===e||"[MAX_NAME]"===t)return-1;if("[MIN_NAME]"===t||"[MAX_NAME]"===e)return 1;{const n=Rn(e),i=Rn(t);return null!==n?null!==i?n-i==0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},En=function(e,t){return e===t?0:e<t?-1:1},Tn=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+Re(t))},In=function(e){if("object"!=typeof e||null===e)return Re(e);const t=[];for(const n in e)t.push(n);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=Re(t[i]),n+=":",n+=In(e[t[i]]);return n+="}",n},xn=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let r=0;r<n;r+=t)r+t>n?i.push(e.substring(r,n)):i.push(e.substring(r,r+t));return i};function Sn(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const kn=function(e){pe(!Cn(e),"Invalid JSON number");const t=1023;let n,i,r,s,o;0===e?(i=0,r=0,n=1/e==-1/0?1:0):(n=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(s=Math.min(Math.floor(Math.log(e)/Math.LN2),t),i=s+t,r=Math.round(e*Math.pow(2,52-s)-Math.pow(2,52))):(i=0,r=Math.round(e/Math.pow(2,-1074))));const a=[];for(o=52;o;o-=1)a.push(r%2?1:0),r=Math.floor(r/2);for(o=11;o;o-=1)a.push(i%2?1:0),i=Math.floor(i/2);a.push(n?1:0),a.reverse();const c=a.join("");let l="";for(o=0;o<64;o+=8){let e=parseInt(c.substr(o,8),2).toString(16);1===e.length&&(e="0"+e),l+=e}return l.toLowerCase()};const Nn=new RegExp("^-?(0*)\\d{1,10}$"),Rn=function(e){if(Nn.test(e)){const t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},Pn=function(e){try{e()}catch(e){setTimeout((()=>{const t=e.stack||"";throw wn("Exception was thrown by user callback.",t),e}),Math.floor(0))}},Ln=function(e,t){const n=setTimeout(e,t);return"object"==typeof n&&n.unref&&n.unref(),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Dn{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then((e=>this.appCheck=e))}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){wn(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(_n("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',wn(e)}}class Mn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Mn.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const On=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fn{constructor(e,t,n,i,r=!1,s="",o=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=an.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&an.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function qn(e,t,n){let i;if(pe("string"==typeof t,"typeof type must == string"),pe("object"==typeof n,"typeof params must == object"),"websocket"===t)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if("long_polling"!==t)throw new Error("Unknown connection type: "+t);i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);const r=[];return Sn(n,((e,t)=>{r.push(e+"="+t)})),i+r.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(){this.counters_={}}incrementCounter(e,t=1){Ae(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return we(this.counters_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn={},Un={};function Bn(e){const t=e.toString();return jn[t]||(jn[t]=new Hn),jn[t]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wn{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&Pn((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e,t,n,i,r,s,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=gn(e),this.stats_=Bn(t),this.urlFn=e=>(this.appCheckToken&&(e.ac=this.appCheckToken),qn(t,"long_polling",e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Wn(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if(Ie()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new zn(((...e)=>{const[t,n,i,r,s]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,"start"===t)this.id=n,this.password=i;else{if("close"!==t)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={start:"t"};e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v="5",this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e.ac=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&On.test(location.hostname)&&(e.r="f");const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){$n.forceAllow_=!0}static forceDisallow(){$n.forceDisallow_=!0}static isAvailable(){return!Ie()&&(!!$n.forceAllow_||!($n.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Re(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=ge(t),i=xn(n,1840);for(let e=0;e<i.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(Ie())return;this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Re(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class zn{constructor(e,t,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,Ie())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=hn(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=zn.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){n='<script>document.domain="'+document.domain+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(e){_n("frame writing exception"),e.stack&&_n(e.stack),_n(e)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||_n("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",i=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const e=this.pendingSegs.shift();n=n+"&seg"+i+"="+e.seg+"&ts"+i+"="+e.ts+"&d"+i+"="+e.d,i++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(25e3));this.addTag(e,(()=>{clearTimeout(i),n()}))}addTag(e,t){Ie()?this.doNodeLongPoll(e,t):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{_n("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(e){}}),Math.floor(1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vn=null;"undefined"!=typeof MozWebSocket?Vn=MozWebSocket:"undefined"!=typeof WebSocket&&(Vn=WebSocket);class Yn{constructor(e,t,n,i,r,s,o){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=gn(this.connId),this.stats_=Bn(t),this.connURL=Yn.connectionURL_(t,s,o,i,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,i,r){const s={v:"5"};return!Ie()&&"undefined"!=typeof location&&location.hostname&&On.test(location.hostname)&&(s.r="f"),t&&(s.s=t),n&&(s.ls=n),i&&(s.ac=i),r&&(s.p=r),qn(e,"websocket",s)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,an.set("previous_websocket_failure",!0);try{let e;if(Ie()){const e=this.nodeAdmin?"AdminNode":"Node",t={headers:{"User-Agent":`Firebase/5/${nn}/${Ut.platform}/${e}`,"X-Firebase-GMPID":this.applicationId||""}};this.authToken&&(t.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(t.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={},i=0===this.connURL.indexOf("wss://")?n.HTTPS_PROXY||n.https_proxy:n.HTTP_PROXY||n.http_proxy;i&&(t.proxy={origin:i})}this.mySock=new Vn(this.connURL,[],e)}catch(e){this.log_("Error instantiating WebSocket.");const t=e.message||e.data;return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){Yn.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==Vn&&!Yn.forceDisallow_}static previouslyFailed(){return an.isInMemoryStorage||!0===an.get("previous_websocket_failure")}markConnectionHealthy(){an.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=Ne(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(pe(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=Re(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=xn(t,16384);n.length>1&&this.sendString_(String(n.length));for(let e=0;e<n.length;e++)this.sendString_(n[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Yn.responsesRequiredToBeHealthy=2,Yn.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gn{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[$n,Yn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=Yn&&Yn.isAvailable();let n=t&&!Yn.previouslyFailed();if(e.webSocketOnly&&(t||wn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[Yn];else{const e=this.transports_=[];for(const t of Gn.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t);Gn.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Gn.globalTransportInitialized_=!1;class Kn{constructor(e,t,n,i,r,s,o,a,c,l){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=l,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=gn("c:"+this.id+":"),this.transportManager_=new Gn(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ln((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){const t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Tn("t",e),n=Tn("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Tn("t",e),n=Tn("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Tn("t",e);if("d"in e){const n=e.d;if("h"===t)this.onHandshake_(n);else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?yn("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):yn("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),"5"!==n&&wn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),Ln((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ln((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(an.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e){this.allowedEvents_=e,this.listeners_={},pe(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let e=0;e<i.length;e++)if(i[e].callback===t&&(!n||n===i[e].context))return void i.splice(e,1)}validateEventType_(e){pe(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends Jn{constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||Te()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new Xn}getInitialEvent(e){return pe("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function ei(){return new Zn("")}function ti(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function ni(e){return e.pieces_.length-e.pieceNum_}function ii(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new Zn(e.pieces_,t)}function ri(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function si(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function oi(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new Zn(t,0)}function ai(e,t){const n=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);if(t instanceof Zn)for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new Zn(n,0)}function ci(e){return e.pieceNum_>=e.pieces_.length}function li(e,t){const n=ti(e),i=ti(t);if(null===n)return t;if(n===i)return li(ii(e),ii(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function hi(e,t){if(ni(e)!==ni(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function di(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(ni(e)>ni(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class ui{constructor(e,t){this.errorPrefix_=t,this.parts_=si(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=$e(this.parts_[e]);pi(this)}}function pi(e){if(e.byteLength_>768)throw new Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+mi(e))}function mi(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi extends Jn{constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}static getInstance(){return new fi}getInitialEvent(e){return pe("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i extends Qn{constructor(e,t,n,i,r,s,o,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=s,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=_i.nextPersistentConnectionId_++,this.log_=gn("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=1e3,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!Ie())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");fi.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&Xn.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(Re(r)),pe(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();const t=new be,n={p:e._path.toString(),q:e._queryObject},i={action:"g",request:n,onComplete:e=>{const i=e.d;"ok"===e.s?(this.onDataUpdate_(n.p,i,!1,null),t.resolve(i)):t.reject(i)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_||setTimeout((()=>{const e=this.outstandingGets_[r];void 0!==e&&i===e&&(delete this.outstandingGets_[r],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),this.log_("get "+r+" timed out on connection"),t.reject(new Error("Client is offline.")))}),3e3),this.connected_&&this.sendGet_(r),t.promise}listen(e,t,n,i){this.initConnection_();const r=e._queryIdentifier,s=e._path.toString();this.log_("Listen called for "+s+" "+r),this.listens.has(s)||this.listens.set(s,new Map),pe(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),pe(!this.listens.get(s).has(r),"listen() called twice for same path/queryId.");const o={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(s).set(r,o),this.connected_&&this.sendListen_(o)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);const r={p:n};e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest("q",r,(r=>{const s=r.d,o=r.s;_i.warnOnListenWarnings_(s,t);(this.listens.get(n)&&this.listens.get(n).get(i))===e&&(this.log_("listen response",r),"ok"!==o&&this.removeListen_(n,i),e.onComplete&&e.onComplete(o,s))}))}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&Ae(e,"w")){const n=Me(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();wn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||De(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Le(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t.s,i=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),pe(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(n,i)&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e};i&&(r.q=n,r.t=i),this.sendRequest("n",r)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){const r={p:t,d:n};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,(e=>{i&&setTimeout((()=>{i(e.s,e.d)}),Math.floor(0))}))}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,r){this.initConnection_();const s={p:t,d:n};void 0!==r&&(s.h=r),this.outstandingPuts_.push({action:e,request:s,onComplete:i}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n.s,n.d)}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{if("ok"!==e.s){const t=e.d;this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Re(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):yn("Unrecognized action received from server: "+Re(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){pe(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=1e3),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+_i.nextConnectionId_++,r=this.lastSessionId;let s=!1,o=null;const a=function(){o?o.close():(s=!0,n())},c=function(e){pe(o,"sendRequest call when we're not connected not allowed."),o.sendRequest(e)};this.realtime_={close:a,sendRequest:c};const l=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[a,c]=await Promise.all([this.authTokenProvider_.getToken(l),this.appCheckTokenProvider_.getToken(l)]);s?_n("getToken() completed but was canceled"):(_n("getToken() completed. Creating connection."),this.authToken_=a&&a.accessToken,this.appCheckToken_=c&&c.token,o=new Kn(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{wn(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),r))}catch(e){this.log_("Failed to get token: "+e),s||(this.repoInfo_.nodeAdmin&&wn(e),a())}}}interrupt(e){_n("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){_n("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Oe(this.interruptReasons_)&&(this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>In(e))).join("$"):"default";const i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const n=new Zn(e).toString();let i;if(this.listens.has(n)){const e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){_n("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){_n("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";Ie()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+nn.replace(/\./g,"-")]=1,Te()?e["framework.cordova"]=1:"object"==typeof navigator&&"ReactNative"===navigator.product&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Xn.getInstance().currentlyOnline();return Oe(this.interruptReasons_)&&e}}_i.nextPersistentConnectionId_=0,_i.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gi{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new gi(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new gi("[MIN_NAME]",e),i=new gi("[MIN_NAME]",t);return 0!==this.compare(n,i)}minPost(){return gi.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vi;class wi extends yi{static get __EMPTY_NODE(){return vi}static set __EMPTY_NODE(e){vi=e}compare(e,t){return bn(e.name,t.name)}isDefinedOn(e){throw me("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return gi.MIN}maxPost(){return new gi("[MAX_NAME]",vi)}makePost(e,t){return pe("string"==typeof e,"KeyIndex indexValue must always be a string."),new gi(e,vi)}toString(){return".key"}}const Ci=new wi;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e,t,n,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,i&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right;else{if(0===s){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ei{constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:Ei.RED,this.left=null!=i?i:Ti.EMPTY_NODE,this.right=null!=r?r:Ti.EMPTY_NODE}copy(e,t,n,i,r){return new Ei(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const r=n(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ti.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,i;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return Ti.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ei.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ei.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ei.RED=!0,Ei.BLACK=!1;class Ti{constructor(e,t=Ti.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Ti(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Ei.BLACK,null,null))}remove(e){return new Ti(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ei.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return i?i.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new bi(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new bi(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new bi(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new bi(this.root_,null,this.comparator_,!0,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ii(e,t){return bn(e.name,t.name)}function xi(e,t){return bn(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Si;Ti.EMPTY_NODE=new class{copy(e,t,n,i,r){return this}insert(e,t,n){return new Ei(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const ki=function(e){return"number"==typeof e?"number:"+kn(e):"string:"+e},Ni=function(e){if(e.isLeafNode()){const t=e.val();pe("string"==typeof t||"number"==typeof t||"object"==typeof t&&Ae(t,".sv"),"Priority must be a string or number.")}else pe(e===Si||e.isEmpty(),"priority of unexpected type.");pe(e===Si||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Ri,Pi,Li;class Di{constructor(e,t=Di.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,pe(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Ni(this.priorityNode_)}static set __childrenNodeConstructor(e){Ri=e}static get __childrenNodeConstructor(){return Ri}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Di(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:Di.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ci(e)?this:".priority"===ti(e)?this.priorityNode_:Di.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:Di.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=ti(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(pe(".priority"!==n||1===ni(e),".priority must be the last token in a path"),this.updateImmediateChild(n,Di.__childrenNodeConstructor.EMPTY_NODE.updateChild(ii(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+ki(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?kn(this.value_):this.value_,this.lazyHash_=dn(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Di.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Di.__childrenNodeConstructor?-1:(pe(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,i=Di.VALUE_TYPE_ORDER.indexOf(t),r=Di.VALUE_TYPE_ORDER.indexOf(n);return pe(i>=0,"Unknown leaf type: "+t),pe(r>=0,"Unknown leaf type: "+n),i===r?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}Di.VALUE_TYPE_ORDER=["object","boolean","number","string"];const Ai=new class extends yi{compare(e,t){const n=e.node.getPriority(),i=t.node.getPriority(),r=n.compareTo(i);return 0===r?bn(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return gi.MIN}maxPost(){return new gi("[MAX_NAME]",new Di("[PRIORITY-POST]",Li))}makePost(e,t){const n=Pi(e);return new gi(t,new Di("[PRIORITY-POST]",n))}toString(){return".priority"}},Mi=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e){var t;this.count=(t=e+1,parseInt(Math.log(t)/Mi,10)),this.current_=this.count-1;const n=(i=this.count,parseInt(Array(i+1).join("1"),2));var i;this.bits_=e+1&n}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Fi=function(e,t,n,i){e.sort(t);const r=function(t,i){const s=i-t;let o,a;if(0===s)return null;if(1===s)return o=e[t],a=n?n(o):o,new Ei(a,o.node,Ei.BLACK,null,null);{const c=parseInt(s/2,10)+t,l=r(t,c),h=r(c+1,i);return o=e[c],a=n?n(o):o,new Ei(a,o.node,Ei.BLACK,l,h)}},s=function(t){let i=null,s=null,o=e.length;const a=function(t,i){const s=o-t,a=o;o-=t;const l=r(s+1,a),h=e[s],d=n?n(h):h;c(new Ei(d,h.node,i,null,l))},c=function(e){i?(i.left=e,i=e):(s=e,i=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,Ei.BLACK):(a(i,Ei.BLACK),a(i,Ei.RED))}return s}(new Oi(e.length));return new Ti(i||t,s)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qi;const Hi={};class ji{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return pe(Hi&&Ai,"ChildrenNode.ts has not been loaded"),qi=qi||new ji({".priority":Hi},{".priority":Ai}),qi}get(e){const t=Me(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Ti?t:null}hasIndex(e){return Ae(this.indexSet_,e.toString())}addIndex(e,t){pe(e!==Ci,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const r=t.getIterator(gi.Wrap);let s,o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),n.push(o),o=r.getNext();s=i?Fi(n,e.getCompare()):Hi;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const l=Object.assign({},this.indexes_);return l[a]=s,new ji(l,c)}addToIndexes(e,t){const n=Fe(this.indexes_,((n,i)=>{const r=Me(this.indexSet_,i);if(pe(r,"Missing index implementation for "+i),n===Hi){if(r.isDefinedOn(e.node)){const n=[],i=t.getIterator(gi.Wrap);let s=i.getNext();for(;s;)s.name!==e.name&&n.push(s),s=i.getNext();return n.push(e),Fi(n,r.getCompare())}return Hi}{const i=t.get(e.name);let r=n;return i&&(r=r.remove(new gi(e.name,i))),r.insert(e,e.node)}}));return new ji(n,this.indexSet_)}removeFromIndexes(e,t){const n=Fe(this.indexes_,(n=>{if(n===Hi)return n;{const i=t.get(e.name);return i?n.remove(new gi(e.name,i)):n}}));return new ji(n,this.indexSet_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ui;class Bi{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Ni(this.priorityNode_),this.children_.isEmpty()&&pe(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ui||(Ui=new Bi(new Ti(xi),null,ji.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ui}updatePriority(e){return this.children_.isEmpty()?this:new Bi(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?Ui:t}}getChild(e){const t=ti(e);return null===t?this:this.getImmediateChild(t).getChild(ii(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(pe(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new gi(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(n,this.children_));const s=i.isEmpty()?Ui:this.priorityNode_;return new Bi(i,s,r)}}updateChild(e,t){const n=ti(e);if(null===n)return t;{pe(".priority"!==ti(e)||1===ni(e),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(ii(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,i=0,r=!0;if(this.forEachChild(Ai,((s,o)=>{t[s]=o.val(e),n++,r&&Bi.INTEGER_REGEXP_.test(s)?i=Math.max(i,Number(s)):r=!1})),!e&&r&&i<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+ki(this.getPriority().val())+":"),this.forEachChild(Ai,((t,n)=>{const i=n.hash();""!==i&&(e+=":"+t+":"+i)})),this.lazyHash_=""===e?"":dn(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new gi(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new gi(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new gi(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,gi.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)<0;)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,gi.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)>0;)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Wi?-1:0}withIndex(e){if(e===Ci||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Bi(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Ci||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(Ai),n=t.getIterator(Ai);let i=e.getNext(),r=n.getNext();for(;i&&r;){if(i.name!==r.name||!i.node.equals(r.node))return!1;i=e.getNext(),r=n.getNext()}return null===i&&null===r}return!1}return!1}}resolveIndex_(e){return e===Ci?null:this.indexMap_.get(e.toString())}}Bi.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const Wi=new class extends Bi{constructor(){super(new Ti(xi),Bi.EMPTY_NODE,ji.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Bi.EMPTY_NODE}isEmpty(){return!1}};Object.defineProperties(gi,{MIN:{value:new gi("[MIN_NAME]",Bi.EMPTY_NODE)},MAX:{value:new gi("[MAX_NAME]",Wi)}}),wi.__EMPTY_NODE=Bi.EMPTY_NODE,Di.__childrenNodeConstructor=Bi,Si=Wi,function(e){Li=e}(Wi);function $i(e,t=null){if(null===e)return Bi.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),pe(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){return new Di(e,$i(t))}if(e instanceof Array){let n=Bi.EMPTY_NODE;return Sn(e,((t,i)=>{if(Ae(e,t)&&"."!==t.substring(0,1)){const e=$i(i);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority($i(t))}{const n=[];let i=!1;if(Sn(e,((e,t)=>{if("."!==e.substring(0,1)){const r=$i(t);r.isEmpty()||(i=i||!r.getPriority().isEmpty(),n.push(new gi(e,r)))}})),0===n.length)return Bi.EMPTY_NODE;const r=Fi(n,Ii,(e=>e.name),xi);if(i){const e=Fi(n,Ai.getCompare());return new Bi(r,$i(t),new ji({".priority":e},{".priority":Ai}))}return new Bi(r,$i(t),ji.Default)}}!function(e){Pi=e}($i);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zi extends yi{constructor(e){super(),this.indexPath_=e,pe(!ci(e)&&".priority"!==ti(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),i=this.extractChild(t.node),r=n.compareTo(i);return 0===r?bn(e.name,t.name):r}makePost(e,t){const n=$i(e),i=Bi.EMPTY_NODE.updateChild(this.indexPath_,n);return new gi(t,i)}maxPost(){const e=Bi.EMPTY_NODE.updateChild(this.indexPath_,Wi);return new gi("[MAX_NAME]",e)}toString(){return si(this.indexPath_,0).join("/")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vi=new class extends yi{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?bn(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return gi.MIN}maxPost(){return gi.MAX}makePost(e,t){const n=$i(e);return new gi(t,n)}toString(){return".value"}},Yi="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(){let e=0;const t=[]}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Gi(e){return{type:"value",snapshotNode:e}}function Ki(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function Qi(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function Ji(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xi{constructor(e){this.index_=e}updateChild(e,t,n,i,r,s){pe(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const o=e.getImmediateChild(t);return o.getChild(i).equals(n.getChild(i))&&o.isEmpty()===n.isEmpty()?e:(null!=s&&(n.isEmpty()?e.hasChild(t)?s.trackChildChange(Qi(t,o)):pe(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):o.isEmpty()?s.trackChildChange(Ki(t,n)):s.trackChildChange(Ji(t,n,o))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(Ai,((e,i)=>{t.hasChild(e)||n.trackChildChange(Qi(e,i))})),t.isLeafNode()||t.forEachChild(Ai,((t,i)=>{if(e.hasChild(t)){const r=e.getImmediateChild(t);r.equals(i)||n.trackChildChange(Ji(t,i,r))}else n.trackChildChange(Ki(t,i))}))),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?Bi.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e){this.indexedFilter_=new Xi(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Zi.getStartPost_(e),this.endPost_=Zi.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,t,n,i,r,s){return this.matches(new gi(t,n))||(n=Bi.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,i,r,s)}updateFullNode(e,t,n){t.isLeafNode()&&(t=Bi.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(Bi.EMPTY_NODE);const r=this;return t.forEachChild(Ai,((e,t)=>{r.matches(new gi(e,t))||(i=i.updateImmediateChild(e,Bi.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e){this.rangedFilter_=new Zi(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,t,n,i,r,s){return this.rangedFilter_.matches(new gi(t,n))||(n=Bi.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,i,r,s):this.fullLimitUpdateChild_(e,t,n,r,s)}updateFullNode(e,t,n){let i;if(t.isLeafNode()||t.isEmpty())i=Bi.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;i=Bi.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;for(;e.hasNext()&&n<this.limit_;){const t=e.getNext();let r;if(r=this.reverse_?this.index_.compare(this.rangedFilter_.getStartPost(),t)<=0:this.index_.compare(t,this.rangedFilter_.getEndPost())<=0,!r)break;i=i.updateImmediateChild(t.name,t.node),n++}}else{let e,n,r,s;if(i=t.withIndex(this.index_),i=i.updatePriority(Bi.EMPTY_NODE),this.reverse_){s=i.getReverseIterator(this.index_),e=this.rangedFilter_.getEndPost(),n=this.rangedFilter_.getStartPost();const t=this.index_.getCompare();r=(e,n)=>t(n,e)}else s=i.getIterator(this.index_),e=this.rangedFilter_.getStartPost(),n=this.rangedFilter_.getEndPost(),r=this.index_.getCompare();let o=0,a=!1;for(;s.hasNext();){const t=s.getNext();!a&&r(e,t)<=0&&(a=!0);a&&o<this.limit_&&r(t,n)<=0?o++:i=i.updateImmediateChild(t.name,Bi.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,i,r){let s;if(this.reverse_){const e=this.index_.getCompare();s=(t,n)=>e(n,t)}else s=this.index_.getCompare();const o=e;pe(o.numChildren()===this.limit_,"");const a=new gi(t,n),c=this.reverse_?o.getFirstChild(this.index_):o.getLastChild(this.index_),l=this.rangedFilter_.matches(a);if(o.hasChild(t)){const e=o.getImmediateChild(t);let h=i.getChildAfterChild(this.index_,c,this.reverse_);for(;null!=h&&(h.name===t||o.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const d=null==h?1:s(h,a);if(l&&!n.isEmpty()&&d>=0)return null!=r&&r.trackChildChange(Ji(t,n,e)),o.updateImmediateChild(t,n);{null!=r&&r.trackChildChange(Qi(t,e));const n=o.updateImmediateChild(t,Bi.EMPTY_NODE);return null!=h&&this.rangedFilter_.matches(h)?(null!=r&&r.trackChildChange(Ki(h.name,h.node)),n.updateImmediateChild(h.name,h.node)):n}}return n.isEmpty()?e:l&&s(c,a)>=0?(null!=r&&(r.trackChildChange(Qi(c.name,c.node)),r.trackChildChange(Ki(t,n))),o.updateImmediateChild(t,n).updateImmediateChild(c.name,Bi.EMPTY_NODE)):e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ai}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return pe(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return pe(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:"[MIN_NAME]"}hasEnd(){return this.endSet_}getIndexEndValue(){return pe(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return pe(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:"[MAX_NAME]"}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return pe(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ai}copy(){const e=new tr;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function nr(e){const t={};if(e.isDefault())return t;let n;return e.index_===Ai?n="$priority":e.index_===Vi?n="$value":e.index_===Ci?n="$key":(pe(e.index_ instanceof zi,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=Re(n),e.startSet_&&(t.startAt=Re(e.indexStartValue_),e.startNameSet_&&(t.startAt+=","+Re(e.indexStartName_))),e.endSet_&&(t.endAt=Re(e.indexEndValue_),e.endNameSet_&&(t.endAt+=","+Re(e.indexEndName_))),e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function ir(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_)),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_)),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==Ai&&(t.i=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr extends Qn{constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=gn("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(pe(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const s=rr.getListenId_(e,n),o={};this.listens_[s]=o;const a=nr(e._queryParams);this.restRequest_(r+".json",a,((e,t)=>{let a=t;if(404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(r,a,!1,n),Me(this.listens_,s)===o){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",i(t,null)}}))}unlisten(e,t){const n=rr.getListenId_(e,t);delete this.listens_[n]}get(e){const t=nr(e._queryParams),n=e._path.toString(),i=new be;return this.restRequest_(n+".json",t,((e,t)=>{let r=t;404===e&&(r=null,e=null),null===e?(this.onDataUpdate_(n,r,!1,null),i.resolve(r)):i.reject(new Error(r))})),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+je(t);this.log_("Sending REST request for "+s);const o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&4===o.readyState){this.log_("REST Response for "+s+" received. status:",o.status,"response:",o.responseText);let e=null;if(o.status>=200&&o.status<300){try{e=Ne(o.responseText)}catch(e){wn("Failed to parse JSON response for "+s+": "+o.responseText)}n(null,e)}else 401!==o.status&&404!==o.status&&wn("Got unsuccessful REST response for "+s+" Status: "+o.status),n(o.status);n=null}},o.open("GET",s,!0),o.send()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(){this.rootNode_=Bi.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(){return{value:null,children:new Map}}function ar(e,t,n){if(ci(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const i=ti(t);e.children.has(i)||e.children.set(i,or());ar(e.children.get(i),t=ii(t),n)}}function cr(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,((e,i)=>{cr(i,new Zn(t.toString()+"/"+e),n)}))}class lr{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Sn(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new lr(e);const n=1e4+2e4*Math.random();Ln(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;Sn(e,((e,i)=>{i>0&&Ae(this.statsToReport_,e)&&(t[e]=i,n=!0)})),n&&this.server_.reportStats(t),Ln(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var dr,ur;function pr(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(ur=dr||(dr={}))[ur.OVERWRITE=0]="OVERWRITE",ur[ur.MERGE=1]="MERGE",ur[ur.ACK_USER_WRITE=2]="ACK_USER_WRITE",ur[ur.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";class mr{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=dr.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}operationForChild(e){if(ci(this.path)){if(null!=this.affectedTree.value)return pe(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Zn(e));return new mr(ei(),t,this.revert)}}return pe(ti(this.path)===e,"operationForChild called for unrelated child."),new mr(ii(this.path),this.affectedTree,this.revert)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e,t){this.source=e,this.path=t,this.type=dr.LISTEN_COMPLETE}operationForChild(e){return ci(this.path)?new fr(this.source,ei()):new fr(this.source,ii(this.path))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=dr.OVERWRITE}operationForChild(e){return ci(this.path)?new _r(this.source,ei(),this.snap.getImmediateChild(e)):new _r(this.source,ii(this.path),this.snap)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=dr.MERGE}operationForChild(e){if(ci(this.path)){const t=this.children.subtree(new Zn(e));return t.isEmpty()?null:t.value?new _r(this.source,ei(),t.value):new gr(this.source,ei(),t)}return pe(ti(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new gr(this.source,ii(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ci(e))return this.isFullyInitialized()&&!this.filtered_;const t=ti(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function wr(e,t,n,i,r,s){const o=i.filter((e=>e.type===n));o.sort(((t,n)=>function(e,t,n){if(null==t.childName||null==n.childName)throw me("Should only compare child_ events.");const i=new gi(t.childName,t.snapshotNode),r=new gi(n.childName,n.snapshotNode);return e.index_.compare(i,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,n))),o.forEach((n=>{const i=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,s);r.forEach((r=>{r.respondsTo(n.type)&&t.push(r.createEvent(i,e.query_))}))}))}function Cr(e,t){return{eventCache:e,serverCache:t}}function br(e,t,n,i){return Cr(new yr(t,n,i),e.serverCache)}function Er(e,t,n,i){return Cr(e.eventCache,new yr(t,n,i))}function Tr(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function Ir(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xr;class Sr{constructor(e,t=(()=>(xr||(xr=new Ti(En)),xr))()){this.value=e,this.children=t}static fromObject(e){let t=new Sr(null);return Sn(e,((e,n)=>{t=t.set(new Zn(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:ei(),value:this.value};if(ci(e))return null;{const n=ti(e),i=this.children.get(n);if(null!==i){const r=i.findRootMostMatchingPathAndValue(ii(e),t);if(null!=r){return{path:ai(new Zn(n),r.path),value:r.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(ci(e))return this;{const t=ti(e),n=this.children.get(t);return null!==n?n.subtree(ii(e)):new Sr(null)}}set(e,t){if(ci(e))return new Sr(t,this.children);{const n=ti(e),i=(this.children.get(n)||new Sr(null)).set(ii(e),t),r=this.children.insert(n,i);return new Sr(this.value,r)}}remove(e){if(ci(e))return this.children.isEmpty()?new Sr(null):new Sr(null,this.children);{const t=ti(e),n=this.children.get(t);if(n){const i=n.remove(ii(e));let r;return r=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&r.isEmpty()?new Sr(null):new Sr(this.value,r)}return this}}get(e){if(ci(e))return this.value;{const t=ti(e),n=this.children.get(t);return n?n.get(ii(e)):null}}setTree(e,t){if(ci(e))return t;{const n=ti(e),i=(this.children.get(n)||new Sr(null)).setTree(ii(e),t);let r;return r=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new Sr(this.value,r)}}fold(e){return this.fold_(ei(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((i,r)=>{n[i]=r.fold_(ai(e,i),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,ei(),t)}findOnPath_(e,t,n){const i=!!this.value&&n(t,this.value);if(i)return i;if(ci(e))return null;{const i=ti(e),r=this.children.get(i);return r?r.findOnPath_(ii(e),ai(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ei(),t)}foreachOnPath_(e,t,n){if(ci(e))return this;{this.value&&n(t,this.value);const i=ti(e),r=this.children.get(i);return r?r.foreachOnPath_(ii(e),ai(t,i),n):new Sr(null)}}foreach(e){this.foreach_(ei(),e)}foreach_(e,t){this.children.inorderTraversal(((n,i)=>{i.foreach_(ai(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e){this.writeTree_=e}static empty(){return new kr(new Sr(null))}}function Nr(e,t,n){if(ci(t))return new kr(new Sr(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){const r=i.path;let s=i.value;const o=li(r,t);return s=s.updateChild(o,n),new kr(e.writeTree_.set(r,s))}{const i=new Sr(n),r=e.writeTree_.setTree(t,i);return new kr(r)}}}function Rr(e,t,n){let i=e;return Sn(n,((e,n)=>{i=Nr(i,ai(t,e),n)})),i}function Pr(e,t){if(ci(t))return kr.empty();{const n=e.writeTree_.setTree(t,new Sr(null));return new kr(n)}}function Lr(e,t){return null!=Dr(e,t)}function Dr(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(li(n.path,t)):null}function Ar(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(Ai,((e,n)=>{t.push(new gi(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new gi(e,n.value))})),t}function Mr(e,t){if(ci(t))return e;{const n=Dr(e,t);return new kr(null!=n?new Sr(n):e.writeTree_.subtree(t))}}function Or(e){return e.writeTree_.isEmpty()}function Fr(e,t){return qr(ei(),e.writeTree_,t)}function qr(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal(((t,r)=>{".priority"===t?(pe(null!==r.value,"Priority writes must always be leaf nodes"),i=r.value):n=qr(ai(e,t),r,n)})),n.getChild(e).isEmpty()||null===i||(n=n.updateChild(ai(e,".priority"),i)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hr(e,t){return Xr(t,e)}function jr(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));pe(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let r=i.visible,s=!1,o=e.allWrites.length-1;for(;r&&o>=0;){const t=e.allWrites[o];t.visible&&(o>=n&&Ur(t,i.path)?r=!1:di(i.path,t.path)&&(s=!0)),o--}if(r){if(s)return function(e){e.visibleWrites=Wr(e.allWrites,Br,ei()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;if(i.snap)e.visibleWrites=Pr(e.visibleWrites,i.path);else{Sn(i.children,(t=>{e.visibleWrites=Pr(e.visibleWrites,ai(i.path,t))}))}return!0}return!1}function Ur(e,t){if(e.snap)return di(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&di(ai(e.path,n),t))return!0;return!1}function Br(e){return e.visible}function Wr(e,t,n){let i=kr.empty();for(let r=0;r<e.length;++r){const s=e[r];if(t(s)){const e=s.path;let t;if(s.snap)di(n,e)?(t=li(n,e),i=Nr(i,t,s.snap)):di(e,n)&&(t=li(e,n),i=Nr(i,ei(),s.snap.getChild(t)));else{if(!s.children)throw me("WriteRecord should have .snap or .children");if(di(n,e))t=li(n,e),i=Rr(i,t,s.children);else if(di(e,n))if(t=li(e,n),ci(t))i=Rr(i,ei(),s.children);else{const e=Me(s.children,ti(t));if(e){const n=e.getChild(ii(t));i=Nr(i,ei(),n)}}}}}return i}function $r(e,t,n,i,r){if(i||r){const s=Mr(e.visibleWrites,t);if(!r&&Or(s))return n;if(r||null!=n||Lr(s,ei())){const s=function(e){return(e.visible||r)&&(!i||!~i.indexOf(e.writeId))&&(di(e.path,t)||di(t,e.path))};return Fr(Wr(e.allWrites,s,t),n||Bi.EMPTY_NODE)}return null}{const i=Dr(e.visibleWrites,t);if(null!=i)return i;{const i=Mr(e.visibleWrites,t);if(Or(i))return n;if(null!=n||Lr(i,ei())){return Fr(i,n||Bi.EMPTY_NODE)}return null}}}function zr(e,t,n,i){return $r(e.writeTree,e.treePath,t,n,i)}function Vr(e,t){return function(e,t,n){let i=Bi.EMPTY_NODE;const r=Dr(e.visibleWrites,t);if(r)return r.isLeafNode()||r.forEachChild(Ai,((e,t)=>{i=i.updateImmediateChild(e,t)})),i;if(n){const r=Mr(e.visibleWrites,t);return n.forEachChild(Ai,((e,t)=>{const n=Fr(Mr(r,new Zn(e)),t);i=i.updateImmediateChild(e,n)})),Ar(r).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}return Ar(Mr(e.visibleWrites,t)).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}(e.writeTree,e.treePath,t)}function Yr(e,t,n,i){return function(e,t,n,i,r){pe(i||r,"Either existingEventSnap or existingServerSnap must exist");const s=ai(t,n);if(Lr(e.visibleWrites,s))return null;{const t=Mr(e.visibleWrites,s);return Or(t)?r.getChild(n):Fr(t,r.getChild(n))}}(e.writeTree,e.treePath,t,n,i)}function Gr(e,t){return function(e,t){return Dr(e.visibleWrites,t)}(e.writeTree,ai(e.treePath,t))}function Kr(e,t,n,i,r,s){return function(e,t,n,i,r,s,o){let a;const c=Mr(e.visibleWrites,t),l=Dr(c,ei());if(null!=l)a=l;else{if(null==n)return[];a=Fr(c,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let c=n.getNext();for(;c&&e.length<r;)0!==t(c,i)&&e.push(c),c=n.getNext();return e}}(e.writeTree,e.treePath,t,n,i,r,s)}function Qr(e,t,n){return function(e,t,n,i){const r=ai(t,n),s=Dr(e.visibleWrites,r);if(null!=s)return s;if(i.isCompleteForChild(n))return Fr(Mr(e.visibleWrites,r),i.getNode().getImmediateChild(n));return null}(e.writeTree,e.treePath,t,n)}function Jr(e,t){return Xr(ai(e.treePath,t),e.writeTree)}function Xr(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;pe("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),pe(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const r=i.type;if("child_added"===t&&"child_removed"===r)this.changeMap.set(n,Ji(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===r)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===r)this.changeMap.set(n,Qi(n,i.oldSnap));else if("child_changed"===t&&"child_added"===r)this.changeMap.set(n,Ki(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==r)throw me("Illegal combination of changes: "+e+" occurred after "+i);this.changeMap.set(n,Ji(n,e.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class ts{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new yr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Qr(this.writes_,e,t)}}getChildAfterChild(e,t,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:Ir(this.viewCache_),r=Kr(this.writes_,i,t,1,n,e);return 0===r.length?null:r[0]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ns(e,t,n,i,r){const s=new Zr;let o,a;if(n.type===dr.OVERWRITE){const c=n;c.source.fromUser?o=ss(e,t,c.path,c.snap,i,r,s):(pe(c.source.fromServer,"Unknown source."),a=c.source.tagged||t.serverCache.isFiltered()&&!ci(c.path),o=rs(e,t,c.path,c.snap,i,r,a,s))}else if(n.type===dr.MERGE){const c=n;c.source.fromUser?o=function(e,t,n,i,r,s,o){let a=t;return i.foreach(((i,c)=>{const l=ai(n,i);os(t,ti(l))&&(a=ss(e,a,l,c,r,s,o))})),i.foreach(((i,c)=>{const l=ai(n,i);os(t,ti(l))||(a=ss(e,a,l,c,r,s,o))})),a}(e,t,c.path,c.children,i,r,s):(pe(c.source.fromServer,"Unknown source."),a=c.source.tagged||t.serverCache.isFiltered(),o=cs(e,t,c.path,c.children,i,r,a,s))}else if(n.type===dr.ACK_USER_WRITE){const a=n;o=a.revert?function(e,t,n,i,r,s){let o;if(null!=Gr(i,n))return t;{const a=new ts(i,t,r),c=t.eventCache.getNode();let l;if(ci(n)||".priority"===ti(n)){let n;if(t.serverCache.isFullyInitialized())n=zr(i,Ir(t));else{const e=t.serverCache.getNode();pe(e instanceof Bi,"serverChildren would be complete if leaf node"),n=Vr(i,e)}l=e.filter.updateFullNode(c,n,s)}else{const r=ti(n);let h=Qr(i,r,t.serverCache);null==h&&t.serverCache.isCompleteForChild(r)&&(h=c.getImmediateChild(r)),l=null!=h?e.filter.updateChild(c,r,h,ii(n),a,s):t.eventCache.getNode().hasChild(r)?e.filter.updateChild(c,r,Bi.EMPTY_NODE,ii(n),a,s):c,l.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=zr(i,Ir(t)),o.isLeafNode()&&(l=e.filter.updateFullNode(l,o,s)))}return o=t.serverCache.isFullyInitialized()||null!=Gr(i,ei()),br(t,l,o,e.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,a.path,i,r,s):function(e,t,n,i,r,s,o){if(null!=Gr(r,n))return t;const a=t.serverCache.isFiltered(),c=t.serverCache;if(null!=i.value){if(ci(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return rs(e,t,n,c.getNode().getChild(n),r,s,a,o);if(ci(n)){let i=new Sr(null);return c.getNode().forEachChild(Ci,((e,t)=>{i=i.set(new Zn(e),t)})),cs(e,t,n,i,r,s,a,o)}return t}{let l=new Sr(null);return i.foreach(((e,t)=>{const i=ai(n,e);c.isCompleteForPath(i)&&(l=l.set(e,c.getNode().getChild(i)))})),cs(e,t,n,l,r,s,a,o)}}(e,t,a.path,a.affectedTree,i,r,s)}else{if(n.type!==dr.LISTEN_COMPLETE)throw me("Unknown operation type: "+n.type);o=function(e,t,n,i,r){const s=t.serverCache,o=Er(t,s.getNode(),s.isFullyInitialized()||ci(n),s.isFiltered());return is(e,o,n,i,es,r)}(e,t,n.path,i,s)}const c=s.getChanges();return function(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=Tr(e);(n.length>0||!e.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push(Gi(Tr(t)))}}(t,o,c),{viewCache:o,changes:c}}function is(e,t,n,i,r,s){const o=t.eventCache;if(null!=Gr(i,n))return t;{let a,c;if(ci(n))if(pe(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=Ir(t),r=Vr(i,n instanceof Bi?n:Bi.EMPTY_NODE);a=e.filter.updateFullNode(t.eventCache.getNode(),r,s)}else{const n=zr(i,Ir(t));a=e.filter.updateFullNode(t.eventCache.getNode(),n,s)}else{const l=ti(n);if(".priority"===l){pe(1===ni(n),"Can't have a priority with additional path components");const r=o.getNode();c=t.serverCache.getNode();const s=Yr(i,n,r,c);a=null!=s?e.filter.updatePriority(r,s):o.getNode()}else{const h=ii(n);let d;if(o.isCompleteForChild(l)){c=t.serverCache.getNode();const e=Yr(i,n,o.getNode(),c);d=null!=e?o.getNode().getImmediateChild(l).updateChild(h,e):o.getNode().getImmediateChild(l)}else d=Qr(i,l,t.serverCache);a=null!=d?e.filter.updateChild(o.getNode(),l,d,h,r,s):o.getNode()}}return br(t,a,o.isFullyInitialized()||ci(n),e.filter.filtersNodes())}}function rs(e,t,n,i,r,s,o,a){const c=t.serverCache;let l;const h=o?e.filter:e.filter.getIndexedFilter();if(ci(n))l=h.updateFullNode(c.getNode(),i,null);else if(h.filtersNodes()&&!c.isFiltered()){const e=c.getNode().updateChild(n,i);l=h.updateFullNode(c.getNode(),e,null)}else{const e=ti(n);if(!c.isCompleteForPath(n)&&ni(n)>1)return t;const r=ii(n),s=c.getNode().getImmediateChild(e).updateChild(r,i);l=".priority"===e?h.updatePriority(c.getNode(),s):h.updateChild(c.getNode(),e,s,r,es,null)}const d=Er(t,l,c.isFullyInitialized()||ci(n),h.filtersNodes());return is(e,d,n,r,new ts(r,d,s),a)}function ss(e,t,n,i,r,s,o){const a=t.eventCache;let c,l;const h=new ts(r,t,s);if(ci(n))l=e.filter.updateFullNode(t.eventCache.getNode(),i,o),c=br(t,l,!0,e.filter.filtersNodes());else{const r=ti(n);if(".priority"===r)l=e.filter.updatePriority(t.eventCache.getNode(),i),c=br(t,l,a.isFullyInitialized(),a.isFiltered());else{const s=ii(n),l=a.getNode().getImmediateChild(r);let d;if(ci(s))d=i;else{const e=h.getCompleteChild(r);d=null!=e?".priority"===ri(s)&&e.getChild(oi(s)).isEmpty()?e:e.updateChild(s,i):Bi.EMPTY_NODE}if(l.equals(d))c=t;else{c=br(t,e.filter.updateChild(a.getNode(),r,d,s,h,o),a.isFullyInitialized(),e.filter.filtersNodes())}}}return c}function os(e,t){return e.eventCache.isCompleteForChild(t)}function as(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function cs(e,t,n,i,r,s,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let c,l=t;c=ci(n)?i:new Sr(null).setTree(n,i);const h=t.serverCache.getNode();return c.children.inorderTraversal(((n,i)=>{if(h.hasChild(n)){const c=as(0,t.serverCache.getNode().getImmediateChild(n),i);l=rs(e,l,new Zn(n),c,r,s,o,a)}})),c.children.inorderTraversal(((n,i)=>{const c=!t.serverCache.isCompleteForChild(n)&&void 0===i.value;if(!h.hasChild(n)&&!c){const c=as(0,t.serverCache.getNode().getImmediateChild(n),i);l=rs(e,l,new Zn(n),c,r,s,o,a)}})),l}class ls{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,i=new Xi(n.getIndex()),r=(s=n).loadsAllData()?new Xi(s.getIndex()):s.hasLimit()?new er(s):new Zi(s);var s;this.processor_=function(e){return{filter:e}}(r);const o=t.serverCache,a=t.eventCache,c=i.updateFullNode(Bi.EMPTY_NODE,o.getNode(),null),l=r.updateFullNode(Bi.EMPTY_NODE,a.getNode(),null),h=new yr(c,o.isFullyInitialized(),i.filtersNodes()),d=new yr(l,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Cr(d,h),this.eventGenerator_=new vr(this.query_)}get query(){return this.query_}}function hs(e,t){const n=Ir(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!ci(t)&&!n.getImmediateChild(ti(t)).isEmpty())?n.getChild(t):null}function ds(e){return 0===e.eventRegistrations_.length}function us(e,t,n){const i=[];if(n){pe(null==t,"A cancel should cancel all event registrations.");const r=e.query._path;e.eventRegistrations_.forEach((e=>{const t=e.createCancelEvent(n,r);t&&i.push(t)}))}if(t){let n=[];for(let i=0;i<e.eventRegistrations_.length;++i){const r=e.eventRegistrations_[i];if(r.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(i+1));break}}else n.push(r)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return i}function ps(e,t,n,i){t.type===dr.MERGE&&null!==t.source.queryId&&(pe(Ir(e.viewCache_),"We should always have a full cache before handling merges"),pe(Tr(e.viewCache_),"Missing event cache, even though we have a server cache"));const r=e.viewCache_,s=ns(e.processor_,r,t,n,i);var o,a;return o=e.processor_,a=s.viewCache,pe(a.eventCache.getNode().isIndexed(o.filter.getIndex()),"Event snap not indexed"),pe(a.serverCache.getNode().isIndexed(o.filter.getIndex()),"Server snap not indexed"),pe(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,ms(e,s.changes,s.viewCache.eventCache.getNode(),null)}function ms(e,t,n,i){const r=i?[i]:e.eventRegistrations_;return function(e,t,n,i){const r=[],s=[];return t.forEach((t=>{var n;"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&s.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),wr(e,r,"child_removed",t,i,n),wr(e,r,"child_added",t,i,n),wr(e,r,"child_moved",s,i,n),wr(e,r,"child_changed",t,i,n),wr(e,r,"value",t,i,n),r}(e.eventGenerator_,t,n,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fs,_s;class gs{constructor(){this.views=new Map}}function ys(e,t,n,i){const r=t.source.queryId;if(null!==r){const s=e.views.get(r);return pe(null!=s,"SyncTree gave us an op for an invalid query."),ps(s,t,n,i)}{let r=[];for(const s of e.views.values())r=r.concat(ps(s,t,n,i));return r}}function vs(e,t,n,i,r){const s=t._queryIdentifier,o=e.views.get(s);if(!o){let e=zr(n,r?i:null),s=!1;e?s=!0:i instanceof Bi?(e=Vr(n,i),s=!1):(e=Bi.EMPTY_NODE,s=!1);const o=Cr(new yr(e,s,!1),new yr(i,r,!1));return new ls(t,o)}return o}function ws(e,t,n,i,r,s){const o=vs(e,t,i,r,s);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),function(e,t){e.eventRegistrations_.push(t)}(o,n),function(e,t){const n=e.viewCache_.eventCache,i=[];n.getNode().isLeafNode()||n.getNode().forEachChild(Ai,((e,t)=>{i.push(Ki(e,t))}));return n.isFullyInitialized()&&i.push(Gi(n.getNode())),ms(e,i,n.getNode(),t)}(o,n)}function Cs(e,t,n,i){const r=t._queryIdentifier,s=[];let o=[];const a=xs(e);if("default"===r)for(const[t,r]of e.views.entries())o=o.concat(us(r,n,i)),ds(r)&&(e.views.delete(t),r.query._queryParams.loadsAllData()||s.push(r.query));else{const t=e.views.get(r);t&&(o=o.concat(us(t,n,i)),ds(t)&&(e.views.delete(r),t.query._queryParams.loadsAllData()||s.push(t.query)))}return a&&!xs(e)&&s.push(new(pe(fs,"Reference.ts has not been loaded"),fs)(t._repo,t._path)),{removed:s,events:o}}function bs(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function Es(e,t){let n=null;for(const i of e.views.values())n=n||hs(i,t);return n}function Ts(e,t){if(t._queryParams.loadsAllData())return Ss(e);{const n=t._queryIdentifier;return e.views.get(n)}}function Is(e,t){return null!=Ts(e,t)}function xs(e){return null!=Ss(e)}function Ss(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ks=1;class Ns{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Sr(null),this.pendingWriteTree_={visibleWrites:kr.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Rs(e,t,n,i,r){return function(e,t,n,i,r){pe(i>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===r&&(r=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:r}),r&&(e.visibleWrites=Nr(e.visibleWrites,t,n)),e.lastWriteId=i}(e.pendingWriteTree_,t,n,i,r),r?Os(e,new _r({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function Ps(e,t,n=!1){const i=function(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}(e.pendingWriteTree_,t);if(jr(e.pendingWriteTree_,t)){let t=new Sr(null);return null!=i.snap?t=t.set(ei(),!0):Sn(i.children,(e=>{t=t.set(new Zn(e),!0)})),Os(e,new mr(i.path,t,n))}return[]}function Ls(e,t,n){return Os(e,new _r({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function Ds(e,t,n,i){const r=t._path,s=e.syncPointTree_.get(r);let o=[];if(s&&("default"===t._queryIdentifier||Is(s,t))){const a=Cs(s,t,n,i);0===s.views.size&&(e.syncPointTree_=e.syncPointTree_.remove(r));const c=a.removed;o=a.events;const l=-1!==c.findIndex((e=>e._queryParams.loadsAllData())),h=e.syncPointTree_.findOnPath(r,((e,t)=>xs(t)));if(l&&!h){const t=e.syncPointTree_.subtree(r);if(!t.isEmpty()){const n=function(e){return e.fold(((e,t,n)=>{if(t&&xs(t)){return[Ss(t)]}{let e=[];return t&&(e=bs(t)),Sn(n,((t,n)=>{e=e.concat(n)})),e}}))}(t);for(let t=0;t<n.length;++t){const i=n[t],r=i.query,s=Hs(e,i);e.listenProvider_.startListening(zs(r),js(e,r),s.hashFn,s.onComplete)}}}if(!h&&c.length>0&&!i)if(l){const n=null;e.listenProvider_.stopListening(zs(t),n)}else c.forEach((t=>{const n=e.queryToTagMap.get(Us(t));e.listenProvider_.stopListening(zs(t),n)}));!function(e,t){for(let n=0;n<t.length;++n){const i=t[n];if(!i._queryParams.loadsAllData()){const t=Us(i),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}(e,c)}return o}function As(e,t,n){const i=t._path;let r=null,s=!1;e.syncPointTree_.foreachOnPath(i,((e,t)=>{const n=li(e,i);r=r||Es(t,n),s=s||xs(t)}));let o,a=e.syncPointTree_.get(i);if(a?(s=s||xs(a),r=r||Es(a,ei())):(a=new gs,e.syncPointTree_=e.syncPointTree_.set(i,a)),null!=r)o=!0;else{o=!1,r=Bi.EMPTY_NODE;e.syncPointTree_.subtree(i).foreachChild(((e,t)=>{const n=Es(t,ei());n&&(r=r.updateImmediateChild(e,n))}))}const c=Is(a,t);if(!c&&!t._queryParams.loadsAllData()){const n=Us(t);pe(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const i=ks++;e.queryToTagMap.set(n,i),e.tagToQueryMap.set(i,n)}let l=ws(a,t,n,Hr(e.pendingWriteTree_,i),r,o);if(!c&&!s){const n=Ts(a,t);l=l.concat(function(e,t,n){const i=t._path,r=js(e,t),s=Hs(e,n),o=e.listenProvider_.startListening(zs(t),r,s.hashFn,s.onComplete),a=e.syncPointTree_.subtree(i);if(r)pe(!xs(a.value),"If we're adding a query, it shouldn't be shadowed");else{const t=a.fold(((e,t,n)=>{if(!ci(e)&&t&&xs(t))return[Ss(t).query];{let e=[];return t&&(e=e.concat(bs(t).map((e=>e.query)))),Sn(n,((t,n)=>{e=e.concat(n)})),e}}));for(let n=0;n<t.length;++n){const i=t[n];e.listenProvider_.stopListening(zs(i),js(e,i))}}return o}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,n))}return l}function Ms(e,t,n){const i=e.pendingWriteTree_,r=e.syncPointTree_.findOnPath(t,((e,n)=>{const i=Es(n,li(e,t));if(i)return i}));return $r(i,t,r,n,!0)}function Os(e,t){return Fs(t,e.syncPointTree_,null,Hr(e.pendingWriteTree_,ei()))}function Fs(e,t,n,i){if(ci(e.path))return qs(e,t,n,i);{const r=t.get(ei());null==n&&null!=r&&(n=Es(r,ei()));let s=[];const o=ti(e.path),a=e.operationForChild(o),c=t.children.get(o);if(c&&a){const e=n?n.getImmediateChild(o):null,t=Jr(i,o);s=s.concat(Fs(a,c,e,t))}return r&&(s=s.concat(ys(r,e,i,n))),s}}function qs(e,t,n,i){const r=t.get(ei());null==n&&null!=r&&(n=Es(r,ei()));let s=[];return t.children.inorderTraversal(((t,r)=>{const o=n?n.getImmediateChild(t):null,a=Jr(i,t),c=e.operationForChild(t);c&&(s=s.concat(qs(c,r,o,a)))})),r&&(s=s.concat(ys(r,e,i,n))),s}function Hs(e,t){const n=t.query,i=js(e,n);return{hashFn:()=>{const e=function(e){return e.viewCache_.serverCache.getNode()}(t)||Bi.EMPTY_NODE;return e.hash()},onComplete:t=>{if("ok"===t)return i?function(e,t,n){const i=Bs(e,n);if(i){const n=Ws(i),r=n.path,s=n.queryId,o=li(r,t);return $s(e,r,new fr(pr(s),o))}return[]}(e,n._path,i):function(e,t){return Os(e,new fr({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t))}(e,n._path);{const i=function(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const i=new Error(e+" at "+t._path.toString()+": "+n);return i.code=e.toUpperCase(),i}(t,n);return Ds(e,n,null,i)}}}}function js(e,t){const n=Us(t);return e.queryToTagMap.get(n)}function Us(e){return e._path.toString()+"$"+e._queryIdentifier}function Bs(e,t){return e.tagToQueryMap.get(t)}function Ws(e){const t=e.indexOf("$");return pe(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new Zn(e.substr(0,t))}}function $s(e,t,n){const i=e.syncPointTree_.get(t);pe(i,"Missing sync point for query tag that we're tracking");return ys(i,n,Hr(e.pendingWriteTree_,t),null)}function zs(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(pe(_s,"Reference.ts has not been loaded"),_s)(e._repo,e._path):e}class Vs{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Vs(t)}node(){return this.node_}}class Ys{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=ai(this.path_,e);return new Ys(this.syncTree_,t)}node(){return Ms(this.syncTree_,this.path_)}}const Gs=function(e,t,n){return e&&"object"==typeof e?(pe(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?Ks(e[".sv"],t,n):"object"==typeof e[".sv"]?Qs(e[".sv"],t):void pe(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},Ks=function(e,t,n){if("timestamp"===e)return n.timestamp;pe(!1,"Unexpected server value: "+e)},Qs=function(e,t,n){e.hasOwnProperty("increment")||pe(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e.increment;"number"!=typeof i&&pe(!1,"Unexpected increment value: "+i);const r=t.node();if(pe(null!=r,"Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const s=r.getValue();return"number"!=typeof s?i:s+i},Js=function(e,t,n,i){return Zs(t,new Ys(n,e),i)},Xs=function(e,t,n){return Zs(e,new Vs(t),n)};function Zs(e,t,n){const i=e.getPriority().val(),r=Gs(i,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const i=e,s=Gs(i.getValue(),t,n);return s!==i.getValue()||r!==i.getPriority().val()?new Di(s,$i(r)):e}{const i=e;return s=i,r!==i.getPriority().val()&&(s=s.updatePriority(new Di(r))),i.forEachChild(Ai,((e,i)=>{const r=Zs(i,t.getImmediateChild(e),n);r!==i&&(s=s.updateImmediateChild(e,r))})),s}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function to(e,t){let n=t instanceof Zn?t:new Zn(t),i=e,r=ti(n);for(;null!==r;){const e=Me(i.node.children,r)||{children:{},childCount:0};i=new eo(r,i,e),n=ii(n),r=ti(n)}return i}function no(e){return e.node.value}function io(e,t){e.node.value=t,co(e)}function ro(e){return e.node.childCount>0}function so(e,t){Sn(e.node.children,((n,i)=>{t(new eo(n,e,i))}))}function oo(e,t,n,i){n&&!i&&t(e),so(e,(e=>{oo(e,t,!0,i)})),n&&i&&t(e)}function ao(e){return new Zn(null===e.parent?e.name:ao(e.parent)+"/"+e.name)}function co(e){null!==e.parent&&function(e,t,n){const i=function(e){return void 0===no(e)&&!ro(e)}(n),r=Ae(e.node.children,t);i&&r?(delete e.node.children[t],e.node.childCount--,co(e)):i||r||(e.node.children[t]=n.node,e.node.childCount++,co(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.parent,e.name,e)}const lo=/[\[\].#$\/\u0000-\u001F\u007F]/,ho=/[\[\].#$\u0000-\u001F\u007F]/,uo=function(e){return"string"==typeof e&&0!==e.length&&!lo.test(e)},po=function(e){return"string"==typeof e&&0!==e.length&&!ho.test(e)},mo=function(e,t,n){const i=n instanceof Zn?new ui(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+mi(i));if("function"==typeof t)throw new Error(e+"contains a function "+mi(i)+" with contents = "+t.toString());if(Cn(t))throw new Error(e+"contains "+t.toString()+" "+mi(i));if("string"==typeof t&&t.length>10485760/3&&$e(t)>10485760)throw new Error(e+"contains a string greater than 10485760 utf8 bytes "+mi(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,r=!1;if(Sn(t,((t,s)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(r=!0,!uo(t)))throw new Error(e+" contains an invalid key ("+t+") "+mi(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var o,a;a=t,(o=i).parts_.length>0&&(o.byteLength_+=1),o.parts_.push(a),o.byteLength_+=$e(a),pi(o),mo(e,s,i),function(e){const t=e.parts_.pop();e.byteLength_-=$e(t),e.parts_.length>0&&(e.byteLength_-=1)}(i)})),n&&r)throw new Error(e+' contains ".value" child '+mi(i)+" in addition to actual children.")}},fo=function(e,t,n,i){if(!(i&&void 0===n||po(n)))throw new Error(Be(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},_o=function(e,t){const n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!uo(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),po(e)}(n))throw new Error(Be(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class go{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function yo(e,t){let n=null;for(let i=0;i<t.length;i++){const r=t[i],s=r.getPath();null===n||hi(s,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(r)}n&&e.eventLists_.push(n)}function vo(e,t,n){yo(e,n),Co(e,(e=>hi(e,t)))}function wo(e,t,n){yo(e,n),Co(e,(e=>di(e,t)||di(t,e)))}function Co(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const r=e.eventLists_[i];if(r){t(r.path)?(bo(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function bo(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const i=n.getEventRunner();pn&&_n("event: "+n.toString()),Pn(i)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new go,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=or(),this.transactionQueueTree_=new eo,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function To(e,t,n){if(e.stats_=Bn(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new rr(e.repoInfo_,((t,n,i,r)=>{So(e,t,n,i,r)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>ko(e,!0)),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Re(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new _i(e.repoInfo_,t,((t,n,i,r)=>{So(e,t,n,i,r)}),(t=>{ko(e,t)}),(t=>{!function(e,t){Sn(t,((t,n)=>{No(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=function(e,t){const n=e.toString();return Un[n]||(Un[n]=t()),Un[n]}(e.repoInfo_,(()=>new hr(e.stats_,e.server_))),e.infoData_=new sr,e.infoSyncTree_=new Ns({startListening:(t,n,i,r)=>{let s=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(s=Ls(e.infoSyncTree_,t._path,o),setTimeout((()=>{r("ok")}),0)),s},stopListening:()=>{}}),No(e,"connected",!1),e.serverSyncTree_=new Ns({startListening:(t,n,i,r)=>(e.server_.listen(t,i,n,((n,i)=>{const s=r(n,i);wo(e.eventQueue_,t._path,s)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function Io(e){const t=e.infoData_.getNode(new Zn(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function xo(e){return(t=(t={timestamp:Io(e)})||{}).timestamp=t.timestamp||(new Date).getTime(),t;var t}function So(e,t,n,i,r){e.dataUpdateCount++;const s=new Zn(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(r)if(i){const t=Fe(n,(e=>$i(e)));o=function(e,t,n,i){const r=Bs(e,i);if(r){const i=Ws(r),s=i.path,o=i.queryId,a=li(s,t),c=Sr.fromObject(n);return $s(e,s,new gr(pr(o),a,c))}return[]}(e.serverSyncTree_,s,t,r)}else{const t=$i(n);o=function(e,t,n,i){const r=Bs(e,i);if(null!=r){const i=Ws(r),s=i.path,o=i.queryId,a=li(s,t);return $s(e,s,new _r(pr(o),a,n))}return[]}(e.serverSyncTree_,s,t,r)}else if(i){const t=Fe(n,(e=>$i(e)));o=function(e,t,n){const i=Sr.fromObject(n);return Os(e,new gr({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,i))}(e.serverSyncTree_,s,t)}else{const t=$i(n);o=Ls(e.serverSyncTree_,s,t)}let a=s;o.length>0&&(a=Oo(e,s)),wo(e.eventQueue_,a,o)}function ko(e,t){No(e,"connected",t),!1===t&&function(e){Do(e,"onDisconnectEvents");const t=xo(e),n=or();cr(e.onDisconnect_,ei(),((i,r)=>{const s=Js(i,r,e.serverSyncTree_,t);ar(n,i,s)}));let i=[];cr(n,ei(),((t,n)=>{i=i.concat(Ls(e.serverSyncTree_,t,n));const r=Uo(e,t);Oo(e,r)})),e.onDisconnect_=or(),wo(e.eventQueue_,ei(),i)}(e)}function No(e,t,n){const i=new Zn("/.info/"+t),r=$i(n);e.infoData_.updateSnapshot(i,r);const s=Ls(e.infoSyncTree_,i,r);wo(e.eventQueue_,i,s)}function Ro(e){return e.nextWriteId_++}function Po(e,t,n){let i;i=".info"===ti(t._path)?Ds(e.infoSyncTree_,t,n):Ds(e.serverSyncTree_,t,n),vo(e.eventQueue_,t._path,i)}function Lo(e){e.persistentConnection_&&e.persistentConnection_.interrupt("repo_interrupt")}function Do(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),_n(n,...t)}function Ao(e,t,n){return Ms(e.serverSyncTree_,t,n)||Bi.EMPTY_NODE}function Mo(e,t=e.transactionQueueTree_){if(t||jo(e,t),no(t)){const n=qo(e,t);pe(n.length>0,"Sending zero length transaction queue");n.every((e=>0===e.status))&&function(e,t,n){const i=n.map((e=>e.currentWriteId)),r=Ao(e,t,i);let s=r;const o=r.hash();for(let e=0;e<n.length;e++){const i=n[e];pe(0===i.status,"tryToSendTransactionQueue_: items in queue should all be run."),i.status=1,i.retryCount++;const r=li(t,i.path);s=s.updateChild(r,i.currentOutputSnapshotRaw)}const a=s.val(!0),c=t;e.server_.put(c.toString(),a,(i=>{Do(e,"transaction put response",{path:c.toString(),status:i});let r=[];if("ok"===i){const i=[];for(let t=0;t<n.length;t++)n[t].status=2,r=r.concat(Ps(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&i.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();jo(e,to(e.transactionQueueTree_,t)),Mo(e,e.transactionQueueTree_),wo(e.eventQueue_,t,r);for(let e=0;e<i.length;e++)Pn(i[e])}else{if("datastale"===i)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{wn("transaction at "+c.toString()+" failed: "+i);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=i}Oo(e,t)}}),o)}(e,ao(t),n)}else ro(t)&&so(t,(t=>{Mo(e,t)}))}function Oo(e,t){const n=Fo(e,t),i=ao(n);return function(e,t,n){if(0===t.length)return;const i=[];let r=[];const s=t.filter((e=>0===e.status)).map((e=>e.currentWriteId));for(let a=0;a<t.length;a++){const c=t[a],l=li(n,c.path);let h,d=!1;if(pe(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null."),4===c.status)d=!0,h=c.abortReason,r=r.concat(Ps(e.serverSyncTree_,c.currentWriteId,!0));else if(0===c.status)if(c.retryCount>=25)d=!0,h="maxretry",r=r.concat(Ps(e.serverSyncTree_,c.currentWriteId,!0));else{const n=Ao(e,c.path,s);c.currentInputSnapshot=n;const i=t[a].update(n.val());if(void 0!==i){mo("transaction failed: Data returned ",i,c.path);let t=$i(i);"object"==typeof i&&null!=i&&Ae(i,".priority")||(t=t.updatePriority(n.getPriority()));const o=c.currentWriteId,a=xo(e),l=Xs(t,n,a);c.currentOutputSnapshotRaw=t,c.currentOutputSnapshotResolved=l,c.currentWriteId=Ro(e),s.splice(s.indexOf(o),1),r=r.concat(Rs(e.serverSyncTree_,c.path,l,c.currentWriteId,c.applyLocally)),r=r.concat(Ps(e.serverSyncTree_,o,!0))}else d=!0,h="nodata",r=r.concat(Ps(e.serverSyncTree_,c.currentWriteId,!0))}wo(e.eventQueue_,n,r),r=[],d&&(t[a].status=2,o=t[a].unwatcher,setTimeout(o,Math.floor(0)),t[a].onComplete&&("nodata"===h?i.push((()=>t[a].onComplete(null,!1,t[a].currentInputSnapshot))):i.push((()=>t[a].onComplete(new Error(h),!1,null)))))}var o;jo(e,e.transactionQueueTree_);for(let e=0;e<i.length;e++)Pn(i[e]);Mo(e,e.transactionQueueTree_)}(e,qo(e,n),i),i}function Fo(e,t){let n,i=e.transactionQueueTree_;for(n=ti(t);null!==n&&void 0===no(i);)i=to(i,n),n=ti(t=ii(t));return i}function qo(e,t){const n=[];return Ho(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function Ho(e,t,n){const i=no(t);if(i)for(let e=0;e<i.length;e++)n.push(i[e]);so(t,(t=>{Ho(e,t,n)}))}function jo(e,t){const n=no(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,io(t,n.length>0?n:void 0)}so(t,(t=>{jo(e,t)}))}function Uo(e,t){const n=ao(Fo(e,t)),i=to(e.transactionQueueTree_,t);return function(e,t,n){let i=n?e:e.parent;for(;null!==i;){if(t(i))return!0;i=i.parent}}(i,(t=>{Bo(e,t)})),Bo(e,i),oo(i,(t=>{Bo(e,t)})),n}function Bo(e,t){const n=no(t);if(n){const i=[];let r=[],s=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(pe(s===t-1,"All SENT items should be at beginning of queue."),s=t,n[t].status=3,n[t].abortReason="set"):(pe(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),r=r.concat(Ps(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===s?io(t,void 0):n.length=s+1,wo(e.eventQueue_,ao(t),r);for(let e=0;e<i.length;e++)Pn(i[e])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wo=function(e,t){const n=$o(e),i=n.namespace;"firebase.com"===n.domain&&vn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||vn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&wn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const r="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new Fn(n.host,n.secure,i,r,t,"",i!==n.subdomain),path:new Zn(n.pathString)}},$o=function(e){let t="",n="",i="",r="",s="",o=!0,a="https",c=443;if("string"==typeof e){let l=e.indexOf("//");l>=0&&(a=e.substring(0,l-1),e=e.substring(l+2));let h=e.indexOf("/");-1===h&&(h=e.length);let d=e.indexOf("?");-1===d&&(d=e.length),t=e.substring(0,Math.min(h,d)),h<d&&(r=function(e){let t="";const n=e.split("/");for(let e=0;e<n.length;e++)if(n[e].length>0){let i=n[e];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(e){}t+="/"+i}return t}(e.substring(h,d)));const u=function(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):wn(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,d)));l=t.indexOf(":"),l>=0?(o="https"===a||"wss"===a,c=parseInt(t.substring(l+1),10)):l=t.length;const p=t.slice(0,l);if("localhost"===p.toLowerCase())n="localhost";else if(p.split(".").length<=2)n=p;else{const e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),s=i}"ns"in u&&(s=u.ns)}return{host:t,port:c,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zo{constructor(e,t,n,i){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=i}getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Re(this.snapshot.exportVal())}}class Vo{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return pe(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Go{constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}get key(){return ci(this._path)?null:ri(this._path)}get ref(){return new Ko(this._repo,this._path)}get _queryIdentifier(){const e=ir(this._queryParams),t=In(e);return"{}"===t?"default":t}get _queryObject(){return ir(this._queryParams)}isEqual(e){if(!((e=ze(e))instanceof Go))return!1;const t=this._repo===e._repo,n=hi(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}}class Ko extends Go{constructor(e,t){super(e,t,new tr,!1)}get parent(){const e=oi(this._path);return null===e?null:new Ko(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}}class Qo{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new Zn(e),n=Xo(this.ref,e);return new Qo(this._node.getChild(t),n,Ai)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;return!!this._node.forEachChild(this._index,((t,n)=>e(new Qo(n,Xo(this.ref,t),Ai))))}hasChild(e){const t=new Zn(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Jo(e,t){return(e=ze(e))._checkNotDeleted("ref"),void 0!==t?Xo(e._root,t):e._root}function Xo(e,t){var n,i,r,s;return null===ti((e=ze(e))._path)?(n="child",i="path",s=!1,(r=t)&&(r=r.replace(/^\/*\.info(\/|$)/,"/")),fo(n,i,r,s)):fo("child","path",t,!1),new Ko(e._repo,ai(e._path,t))}class Zo{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new zo("value",this,new Qo(e.snapshotNode,new Ko(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Vo(this,e,t):null}matches(e){return e instanceof Zo&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class ea{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Vo(this,e,t):null}createEvent(e,t){pe(null!=e.childName,"Child events should have a childName.");const n=Xo(new Ko(t._repo,t._path),e.childName),i=t._queryParams.getIndex();return new zo(e.type,this,new Qo(e.snapshotNode,n,i),e.prevName)}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof ea&&(this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)))}hasAnyCallback(){return!!this.callbackContext}}function ta(e,t,n,i,r){let s;if("object"==typeof i&&(s=void 0,r=i),"function"==typeof i&&(s=i),r&&r.onlyOnce){const t=n,i=(n,i)=>{Po(e._repo,e,a),t(n,i)};i.userCallback=n.userCallback,i.context=n.context,n=i}const o=new Yo(n,s||void 0),a="value"===t?new Zo(o):new ea(t,o);return function(e,t,n){let i;i=".info"===ti(t._path)?As(e.infoSyncTree_,t,n):As(e.serverSyncTree_,t,n),vo(e.eventQueue_,t._path,i)}(e._repo,e,a),()=>Po(e._repo,e,a)}function na(e,t,n,i){return ta(e,"value",t,n,i)}!function(e){pe(!fs,"__referenceConstructor has already been defined"),fs=e}(Ko),function(e){pe(!_s,"__referenceConstructor has already been defined"),_s=e}(Ko);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ia={};let ra=!1;function sa(e,t,n,i,r){let s=i||e.options.databaseURL;void 0===s&&(e.options.projectId||vn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),_n("Using default host for project ",e.options.projectId),s=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o,a,c=Wo(s,r),l=c.repoInfo;void 0!==Ut&&Ut.env&&(a=Ut.env.FIREBASE_DATABASE_EMULATOR_HOST),a?(o=!0,s=`http://${a}?ns=${l.namespace}`,c=Wo(s,r),l=c.repoInfo):o=!c.repoInfo.secure;const h=r&&o?new Mn(Mn.OWNER):new An(e.name,e.options,t);_o("Invalid Firebase Database URL",c),ci(c.path)||vn("Database URL must point to the root of a Firebase Database (not including a child path).");const d=function(e,t,n,i){let r=ia[t.name];r||(r={},ia[t.name]=r);let s=r[e.toURLString()];s&&vn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return s=new Eo(e,ra,n,i),r[e.toURLString()]=s,s}(l,e,h,new Dn(e.name,n));return new oa(d,e)}class oa{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(To(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ko(this._repo,ei())),this._rootInternal}_delete(){return null!==this._rootInternal&&(!function(e,t){const n=ia[t];n&&n[e.key]===e||vn(`Database ${t}(${e.repoInfo_}) has already been deleted.`),Lo(e),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&vn("Cannot call "+e+" on a deleted database.")}}_i.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},_i.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};!
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){nn="9.8.3",xt(new Ve("database",((e,{instanceIdentifier:t})=>sa(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t)),"PUBLIC").setMultipleInstances(!0)),Pt("@firebase/database","0.13.1",e),Pt("@firebase/database","0.13.1","esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */();const aa=function(e=Rt(),t){return St(e,"database").getImmediate({identifier:t})}(function(e,t={}){if("object"!=typeof t){t={name:t}}const n=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!=typeof i||!i)throw kt.create("bad-app-name",{appName:String(i)});const r=Et.get(i);if(r){if(qe(e,r.options)&&qe(n,r.config))return r;throw kt.create("duplicate-app",{appName:i})}const s=new Ge(i);for(const e of Tt.values())s.addComponent(e);const o=new Nt(e,n,s);return Et.set(i,o),o}({apiKey:"3Kqkb9z5Icx2cQvwBSUcnv5NgJw6uemItncCEDaI",authDomain:"mod6v4.firebaseapp.com",databaseURL:"https://mod6v4-default-rtdb.firebaseio.com",projectId:"mod6v4"}));const ca={data:{userId:"",roomId:"",rtdbRoomId:"",roomCreator:"",rtdbData:{},result:""},listeners:[],init(){const e=localStorage.getItem("saved-state");this.setState(JSON.parse(e))},listenRTDBData(){const e=this.getState();na(Jo(aa,`/gamerooms/${e.rtdbRoomId}/currentGame`),(t=>{const n=t.val();this.setState({...e,rtdbData:n})}))},getState(){return this.data},setNombreAndEmail(e,t){const n=this.getState();n.nombre=e,n.email=t,this.setState(n)},setState(e){this.data=e;for(const e of this.listeners)e();localStorage.setItem("saved-state",JSON.stringify(e)),console.log("Soy el state, he cambiado",this.data)},subscribe(e){this.listeners.push(e)},async createPlayer(e){try{const t=this.getState(),n=t.nombre,i=t.email,r="https://desafio-mod6.herokuapp.com/signup",s=await fetch(r,{mode:"cors",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:i,nombre:n})});await s.json();t.registrated=!0,this.setState(t),console.log("Player creado"),e&&e()}catch(e){console.error(e)}},async guestPlayer(e){const t=this.getState(),n=t.rtdbRoomId,i=t.nombre;await fetch("https://desafio-mod6.herokuapp.com/player-guest",{mode:"cors",method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({nombre:i,rtdbGameRoomId:n})}),e&&e()},async signIn(e){const t=this.getState();if(t.email){const n=await fetch("https://desafio-mod6.herokuapp.com/authorize",{mode:"cors",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t.email})}),i=await n.json();t.userId=i.id,this.setState(t),e&&e()}else console.error("no hay un mail en el state")},async askNewGameRoom(e){const t=this.getState();try{const n=await fetch("https://desafio-mod6.herokuapp.com/game-rooms",{method:"post",headers:{"content-type":"application/json"},body:JSON.stringify({userId:t.userId,nombre:t.nombre})}),i=await n.json();t.roomId=i.friendlyId,t.rtdbRoomId=i.longGameRoomId,t.roomCreator=!0,this.setState(t),e&&e()}catch(e){console.error(e)}},async accesToGameRoom(e){const t=this.getState(),n=t.roomId,i=t.userId,r=await fetch("https://desafio-mod6.herokuapp.com/game-rooms/"+n+"?userId="+i),s=await r.json();t.rtdbRoomId=s,t.roomId=n,this.setState(t),this.listenRTDBData(),e&&e()},async playerIsReady(e,t){const n=this.getState();await fetch("https://desafio-mod6.herokuapp.com/start",{mode:"cors",method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({player:e,rtdbRoomId:n.rtdbRoomId})});t&&t()},async playersChoice(e,t,n){const i=ca.getState().rtdbRoomId;await fetch("https://desafio-mod6.herokuapp.com/choice",{mode:"cors",method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({player:e,rtdbRoomId:i,choice:t})});n&&n()},async replay(e){const t=this.getState().rtdbRoomId;await fetch("https://desafio-mod6.herokuapp.com/replay",{mode:"cors",method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({rtdbRoomId:t})}),e&&e()},async cleaningReplay(e){const t=this.getState().rtdbRoomId;await fetch("https://desafio-mod6.herokuapp.com/clear-replay",{mode:"cors",method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({rtdbRoomId:t})}),e&&e()},async growScore(e,t){const n=this.getState(),i=n.rtdbRoomId,r=n.roomCreator?n.rtdbData.playerOne.score:n.rtdbData.playerTwo.score;await fetch("https://desafio-mod6.herokuapp.com/grow-score",{mode:"cors",method:"PATCH",headers:{"Content-type":"application/json"},body:JSON.stringify({player:e,rtdbRoomId:i,score:r+1})}),t&&t()},whoWins(e,t,n){const i=this.getState(),r="papel"==e&&"tijera"==t,s="piedra"==e&&"papel"==t,o="tijera"==e&&"piedra"==t,a=["piedra"==e&&"tijera"==t,"papel"==e&&"piedra"==t,"tijera"==e&&"papel"==t].includes(!0),c=[r,s,o].includes(!0),l=e&&t,h=i.roomCreator;a&&(h?ca.growScore("playerOne",(()=>{ca.setState({...i,result:"ganaste"}),ca.listenRTDBData(),n()})):h||(ca.setState({...i,result:"perdiste"}),ca.listenRTDBData(),n())),c&&(h?h&&(ca.setState({...i,result:"perdiste"}),ca.listenRTDBData(),n()):ca.growScore("playerTwo",(()=>{ca.setState({...i,result:"ganaste"}),ca.listenRTDBData(),n()}))),l&&(this.setState({...i,result:"empataste"}),ca.listenRTDBData(),n())}};class la extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.addListeners()}addListeners(){this.render();const e=this.shadow.querySelector(".form"),t=ca.getState();e.addEventListener("submit",(async e=>{e.preventDefault();const n=e.target.roomcode.value;t.roomId=n,t.roomCreator=!1,ca.setState(t),ca.signIn((()=>{ca.accesToGameRoom((()=>{ie.go("/game-room"),ca.guestPlayer()}))}))}))}render(){const e=document.createElement("style");this.shadow.innerHTML='\n        <div class="container">\n         <custom-text variant="title">Piedra Papel o Tijera</custom-text>\n         <div>\n         <form class="form">\n             <input type="text" name="roomcode" class="code"></>\n             <button class="button">Ingresar a la sala</button>\n         </form>\n     </div>\n        </div>\n      ',e.innerHTML="\n      .container{\n        height: 95vh;\n        width: 100%;\n        margin: 0;\n        display: flex;\n        flex-direction: column;\n        justify-content: space-around;\n        align-items: center;\n      }\n      .form{\n        height: 50vh;\n        width: 600px;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n      }\n      @media(max-width: 600px){\n        .form{\n          \n          width: 90vw;\n        }\n      }\n      .code{\n        width: 100%;\n        height: 45px;\n        border-radius: 15px;\n        border:none;\n        padding: 7px;\n        text-align: center;\n        box-shadow: 10px 5px 5px black;\n      }\n      .button{\n        width: 103%;\n        height: 60px;\n        background: #006CFC;\n        border: none;\n        border-radius: 15px;\n        margin-top: 20px;\n        color: white;\n        font-size: 20px;\n      }\n    ",this.shadow.appendChild(e)}}customElements.define("access-page",la);class ha extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}render(){const e=document.createElement("style");this.shadow.innerHTML='\n        <div class="container">\n         <div class="container-room-score">\n          <custom-marcador></custom-marcador>\n          <room-code></room-code>\n         </div>\n         <div class="share-message">\n          <custom-share-code-message></custom-share-code-message>\n         </div>\n         <custom-text class="cuandoEstesListo escondido">Ya tienes un contricante! Preciona Comenzar cuando estés listo.</custom-text>\n         <custom-button class="startGame escondido">Comenzar!</custom-button>\n         \n        </div>\n      ',e.innerHTML="\n    .container{\n      height: 100vh;\n      width: 100%;\n      margin: 0;\n      display: flex;\n      flex-direction: column;\n      justify-content: space-around;\n      align-items: center;\n    }\n    .container-room-score{\n      width: 90%;\n      margin: 0 auto;\n      display:flex;\n      align-items:center;\n      justify-content: space-between;\n    }\n    .escondido{\n      display:none;\n    }\n    .mostrado{\n      display:inherit;\n    }\n    ",this.shadow.appendChild(e)}beforeClose(){this.render();const e=ca.getState(),t=this.shadow.querySelector(".startGame"),n=this.shadow.querySelector(".share-message"),i=this.shadow.querySelector(".cuandoEstesListo");"playerTwo"!==e.rtdbData.playerTwo.nombre&&(n.classList.toggle("escondido"),i.classList.toggle("escondido"),i.classList.toggle("mostrado"),t.classList.toggle("escondido"),t.classList.toggle("mostrado")),t.addEventListener("click",(()=>{ie.go("/instructions")}))}connectedCallback(){ca.subscribe((()=>{this.beforeClose()})),this.beforeClose()}}customElements.define("game-room-page",ha);class da extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}render(){const e=document.createElement("style");this.shadow.innerHTML='\n      <div class="container">\n          <cuenta-regresiva></cuenta-regresiva>\n          <div class="contenedorDeManos">\n            <game-option variant="piedra" class="piedra"></game-option>\n            <game-option variant="papel" class="papel"></game-option>\n            <game-option variant="tijera" class="tijera"></game-option>\n          </div>\n        </div>\n      ',e.innerHTML="\n    .container{\n      height: 100vh;\n      width: 100%;\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n      align-items: center;\n    }\n    .contenedorDeManos {\n      display: flex;\n    }\n\n    ",this.shadow.appendChild(e)}setingChoice(){this.render();const e=ca.getState(),t=this.shadow.querySelector(".tijera"),n=this.shadow.querySelector(".papel"),i=this.shadow.querySelector(".piedra");t.addEventListener("click",(()=>{e.roomCreator?ca.playersChoice("playerOne","tijera",(()=>{ie.go("/waiting")})):ca.playersChoice("playerTwo","tijera",(()=>{ie.go("/waiting")}))})),n.addEventListener("click",(()=>{e.roomCreator?ca.playersChoice("playerOne","papel",(()=>{ie.go("/waiting")})):ca.playersChoice("playerTwo","papel",(()=>{ie.go("/waiting")}))})),i.addEventListener("click",(()=>{e.roomCreator?ca.playersChoice("playerOne","piedra",(()=>{ie.go("/waiting")})):ca.playersChoice("playerTwo","piedra",(()=>{ie.go("/waiting")}))}))}connectedCallback(){this.setingChoice()}}customElements.define("choose-room-page",da);class ua extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}render(){const e=document.createElement("style");this.shadow.innerHTML='\n          <div class="contenedor">\n            <custom-text>\n                Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.<br>\n                Suerte!\n            </custom-text>\n            <custom-button class="play-button">Jugar!</custom-button>\n          </div>\n        ',e.innerHTML="\n    .contenedor{\n      height: 100vh;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items:center;\n    }\n    .instructions{\n      font-size: 45px;\n      display: block;\n      height: auto;\n      max-width: 600px;\n      text-align: center;\n      animation: fade .7s ease;\n    }\n\n    @media(max-width:600px){\n      .play-button{\n        margin-top: 20px;\n      }\n    }\n\n    @keyframes fade{\n      0%{\n        opacity: 0;\n      }\n      100%{\n        opacity: 1;\n      }\n    }",this.shadow.appendChild(e)}userIsReady(){this.render();const e=ca.getState();this.shadow.querySelector(".play-button").addEventListener("click",(()=>{e.roomCreator?ca.playerIsReady("playerOne",(()=>{ie.go("/choose-room")})):e.roomCreator||ca.playerIsReady("playerTwo",(()=>{ie.go("/choose-room")}))}))}connectedCallback(){this.userIsReady()}}customElements.define("instructions-page",ua);class pa extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}render(){this.shadow.innerHTML="\n    <muestra-jugada></muestra-jugada>\n    "}connectedCallback(){this.render();const e=ca.getState();setTimeout((()=>{ca.whoWins(e.rtdbData.playerOne.choice,e.rtdbData.playerTwo.choice,(()=>{ie.go("/result"),ca.listenRTDBData()}))}),2e3)}}customElements.define("comparition-page",pa);class ma extends HTMLElement{cuentaRegresiva=15;constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}render(){const e=document.createElement("style");this.shadow.innerHTML=`\n            <div class="container">\n              <custom-text>Esperemos a que tu contrincante elija una opcion... \n              Si no elije en los siguientes ${this.cuentaRegresiva} \n              segundos ganas esta partida!</custom-text>\n            </div>\n        `,e.innerHTML="\n      .container{\n        display: flex;\n        justify-content:center;\n        align-items:center;\n        height: 100vh;\n        width: 100vw;\n      }\n    ",this.shadow.appendChild(e)}asksIfTheOtherPlayerChoosed(){const e=setInterval((()=>{this.render();const t=ca.getState(),n=t.rtdbData,i="none"!=n.playerOne.choice,r="none"!=n.playerTwo.choice,s=!i,o=!r;!t.roomCreator&&0==this.cuentaRegresiva&&s&&r||t.roomCreator&&0==this.cuentaRegresiva&&i&&o?(clearInterval(e),ie.go("/result")):i&&r&&(clearInterval(e),ie.go("/comparition")),this.cuentaRegresiva--}),1e3)}connectedCallback(){this.asksIfTheOtherPlayerChoosed()}}customElements.define("waiting-page",ma);class fa extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}render(){const e=document.createElement("style");this.shadow.innerHTML='\n    <div class="container">\n      <star-comp></star-comp>\n      <custom-score></custom-score>\n      <custom-button class="playAgainButton">Volver a jugar</custom-button>\n    </div>\n    ',e.innerHTML="\n      .container{\n        display:flex;\n        flex-direction: column;\n        justify-content:center;\n        align-items:center;\n        width: 100%;\n        height:100vh;\n      }\n    ",this.shadow.appendChild(e)}sync(){this.render(),ca.listenRTDBData();this.shadow.querySelector(".playAgainButton").addEventListener("click",(()=>{ca.replay((()=>{ie.go("/instructions")}))}))}connectedCallback(){this.sync()}}customElements.define("result-room",fa);class _a extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}render(){const e=document.createElement("style");this.shadow.innerHTML='\n      <div class="container">\n        <custom-questionary></custom-questionary>\n      </div>\n    ',e.innerHTML="\n      .container{\n        height: 100vh;\n        display:flex;\n        justify-content:center;\n        align-items:center;\n      }\n    ",this.shadow.appendChild(e)}connectedCallback(){this.render()}}customElements.define("path-page",_a);class ga extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}render(){const e=this.getAttribute("variant")||"body",t=document.createElement("div"),n=document.createElement("style");n.innerHTML="\n        .title{\n            font-size:80px;\n            font-weight: bold;\n            color: #009048;\n            transition: all 3s ease;\n          }\n          @media (max-width:600px){\n            .title{\n              width: 90%;\n              font-size:70px;\n              margin: 0 auto;\n              text-align: center;\n            }\n          }\n          .body{\n            text-align:center;\n            color: black;\n            font-size: 30px;\n            max-width: 600px;\n            margin-bottom: 20px;\n        }@media (max-width:600px){\n          .body{\n            width: 90%;\n            margin: 0 auto;\n          }\n        }\n      ",t.className=e,t.textContent=this.textContent,this.shadow.appendChild(t),this.shadow.appendChild(n)}connectedCallback(){this.render()}}customElements.define("custom-text",ga);class ya extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}render(){const e=document.createElement("style");this.shadow.innerHTML='\n    <button class="root"></button>\n    ';this.shadow.querySelector(".root").textContent=this.textContent||"ups!",e.innerHTML="\n      .root{\n        font-size: 18px;\n        border-radius: 4px;\n        padding: 17px 13px;\n        background-color:#006CFC;\n        color:#D8FCFC;\n        min-width: 600px;\n        border: 10px solid #001997;\n        border-radius: 4px;\n        animation: lower .4s ease ;\n        margin:auto;\n      }\n      @media screen and (max-width: 600px){\n        .root{\n          min-width: 90vw;\n          margin:0 5vw;\n        }\n      }\n      @keyframes lower{\n        0%{\n          transform: translateY(100%);\n        }\n        75%{\n          transform: translateY(-10%);\n        }\n        100%{\n          transform: translateY(0%);\n        }\n      }\n      ",this.shadow.appendChild(e)}connectedCallback(){this.render()}}customElements.define("custom-button",ya);class va extends HTMLElement{nombre="Player Name";constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}render(){this.shadow.innerHTML=`<p>${this.nombre}</p>`}syncWithState(){const e=ca.getState();this.nombre=e.nombre,this.render()}connectedCallback(){ca.subscribe((()=>{this.syncWithState()})),this.syncWithState()}}customElements.define("show-name",va);class wa extends HTMLElement{roomId="0000";constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}render(){const e=document.createElement("style");this.shadow.innerHTML=`<h3 class="code-container">SALA:${this.roomId}</h3>`,e.innerHTML="\n      .code-container{\n        padding: 15px;\n        background-color:#006CFC;\n        border: 10px solid #001997;\n        border-radius: 4px;\n        color: white;\n        margin-right: 15px;\n        font-family: sans-serif;\n      }\n    ",this.shadow.appendChild(e)}syncWithState(){const e=ca.getState();this.roomId=e.roomId,this.render()}connectedCallback(){ca.subscribe((()=>{this.syncWithState()})),this.syncWithState()}}customElements.define("room-code",wa);class Ca extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}render(){const e=document.createElement("style");this.shadow.innerHTML=`\n        <div class="marcador-container">\n            <div class="marcador-el local">${this.playerOneName}:${this.playerOneScore}</div>\n            <div class="marcador-el guest">${this.playerTwoName}:${this.playerTwoScore}</div>\n        </div>\n        `,e.innerHTML="\n        .marcador-container{\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            flex-direction:column;\n            height: 10vh;\n            width: auto;\n            margin: 20px;\n        }\n\n        .marcador-el{\n          color: black;\n          font-size: 25px;\n          font-family: sans-serif;\n          text-align:end;\n          width: 100%;;\n        }\n\n    ",this.shadow.appendChild(e)}syncWithState(){const e=ca.getState().rtdbData;this.playerOneName=e.playerOne.nombre,this.playerOneScore=e.playerOne.score,this.playerTwoName=e.playerTwo.nombre,this.playerTwoScore=e.playerTwo.score,this.render()}connectedCallback(){this.syncWithState()}}customElements.define("custom-marcador",Ca);class ba extends HTMLElement{roomId="0000";constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}render(){const e=document.createElement("style");this.shadow.innerHTML=`\n        <div class="message-container">\n          <p>Comparte este codigo con tu contrincante:</p> \n          <h3 class="code">${this.roomId}</h3> \n        </div>\n      `,e.innerHTML="\n      .message-container{\n        height: 40vh;\n        width: 90vw;\n        display: flex;\n        flex-direction: column;\n        justify-content:center;\n        align-items: center;\n      }\n      p{\n        font-size: 30px;\n      }\n\n      .code{\n        font-size: 70px;\n        color: #006CFC;\n        margin: 50px;\n      }\n    ",this.shadow.appendChild(e)}syncWhithState(){this.render();const e=ca.getState();this.roomId=e.roomId}connectedCallback(){ca.subscribe((()=>{this.syncWhithState()})),this.syncWhithState()}}customElements.define("custom-share-code-message",ba);class Ea extends HTMLElement{connectedCallback(){this.render()}render(){const e=r("f8zwL"),t=r("7EsYI"),n=r("7LgUJ"),i=this.getAttribute("variant"),s=document.createElement("style");"tijera"==i&&(this.imgURL=e),"piedra"==i&&(this.imgURL=n),"papel"==i&&(this.imgURL=t),this.innerHTML=`\n        <div class="gameObject">\n        <img class="image" src="${this.imgURL}">\n        </div>\n      `,s.innerHTML="\n    .gameObject {\n        width: auto;\n        min-height: 200px;\n        margin: 0 10px;\n        transition: all .2s ease-in;\n      }\n      .image{\n        height: 45vh;\n        width: auto;\n      }\n      @media (max-width: 600px){\n        .image{\n          height: 30vh;\n        }\n      }\n    \n    ",this.appendChild(s)}}customElements.define("game-option",Ea);class Ta extends HTMLElement{cuentaRegresiva=10;constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}render(){const e=document.createElement("style");this.shadow.innerHTML='\n    <div class="contador"></div>',e.innerHTML="\n    .contador{\n        height: 300px;\n        width: 300px;\n        border-radius: 50%;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        color: black;\n        font-size: 100px;\n        animation: fade .5s linear;\n      }\n      @keyframes fade{\n        0%{\n          transform: translateY(-100%)\n        }\n        100%{\n          transform: translateY(0%)\n        }\n      }\n      ",this.shadow.appendChild(e)}async cuentaAtras(){const e=setInterval((()=>{this.render();const t=this.shadow.querySelector(".contador"),n=ca.getState(),i=0==this.cuentaRegresiva,r="none"==n.rtdbData.playerOne.choice,s="none"==n.rtdbData.playerTwo.choice;i?(clearInterval(e),r&&s&&ie.go("/instructions"),n.roomCreator&&r&&ca.growScore("playerTwo",(()=>{n.result="perdiste",ca.setState(n),ie.go("/result")})),!n.roomCreator&&s&&ca.growScore("playerOne",(()=>{n.result="perdiste",ca.setState(n),ie.go("/result")}))):r||s||clearInterval(e),t.innerHTML=`${this.cuentaRegresiva}`,this.cuentaRegresiva--}),1e3)}connectedCallback(){this.cuentaAtras()}}customElements.define("cuenta-regresiva",Ta);class Ia extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}render(){const e=document.createElement("style");this.shadow.innerHTML=`\n      <div class="contenedor">\n        <game-option class="playerOneMove" variant=${this.playerOneChoice}></game-option>\n        <game-option class="playerTwoMove" variant=${this.playerTwoChoice}></game-option>\n      </div>\n    `,e.innerHTML="\n    .contenedor{\n      height: 70vh;\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n      \n    }\n    \n    .playerTwoMove{\n        margin: 0 auto;\n        animation: fade .5s linear;\n        transform: scale(1.3);\n        \n    }\n    .playerOneMove{\n        margin: 0 auto;\n        transform: rotate(180deg)\n                   scale(1.3);        \n        animation: fadeInverted .5s linear;\n    }\n\n    @keyframes fade{\n      0%{\n        transform: translateY(100%)\n                   scale(1.3);\n      }\n      100%{\n        transform: translateY(0%)\n                   scale(1.3);\n      }\n    }\n    @keyframes fadeInverted{\n        0%{\n            transform: translateY(-500%)\n                       rotate(180deg)\n                       scale(1.3);\n        }\n        100%{\n            transform: translateY(0%)\n                       rotate(180deg)\n                       scale(1.3);\n        }\n      }\n    ",this.shadow.appendChild(e)}sync(){const e=ca.getState();this.playerOneChoice=e.rtdbData.playerOne.choice,this.playerTwoChoice=e.rtdbData.playerTwo.choice,this.render()}connectedCallback(){ca.subscribe((()=>{this.sync()})),this.sync()}}customElements.define("muestra-jugada",Ia);class xa extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}render(){const e=document.createElement("style");this.shadow.innerHTML='\n        <div class="score-container">\n         <custom-text>Score</custom-text>\n         <custom-marcador>Score</custom-marcador>\n        </div>    \n        ',e.innerHTML="\n        .score-container{\n          width: 580px;\n          margin: 10px auto;\n          background: white;\n          text-align: center;\n          border: 10px solid #001997;\n          border-radius: 4px;\n          display:flex;\n          flex-direction:column;\n          align-items: center;\n        }\n        @media(max-width: 600px){\n          .score-container{\n            width: 86vw;\n          }\n        }\n        ",this.shadow.appendChild(e)}connectedCallback(){ca.subscribe((()=>{this.render()})),this.render()}}customElements.define("custom-score",xa);class Sa extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}render(){this.shadow.innerHTML=`\n      <div class="scoreCont">\n        <img class="starEl" src=${this.img}/>\n      </div>\n    `;const e=document.createElement("style");e.innerHTML='\n      .starEl{\n        height: 200px;\n        width: auto;\n        animation:lower 3s linear infinite;\n        z-index: 2;\n        background: url("../img/ganaste.svg");\n      }\n     .scoreCont{\n        height: 245px;\n        width: 100%;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n      @keyframes lower{\n        0%{\n          transform: translateY(0%);\n        }\n        50%{\n          transform: translateY(5%);\n        }\n        100%{\n          transform: translateY(0%);\n        }\n      }',this.shadow.appendChild(e)}sync(){const e=r("2k3gL"),t=r("cNX3E"),n=r("gZkbp"),i=ca.getState();"perdiste"==i.result&&(this.img=t),"ganaste"==i.result&&(this.img=e),"empataste"==i.result&&(this.img=n),this.render()}connectedCallback(){ca.subscribe((()=>{this.sync()})),this.sync()}}customElements.define("star-comp",Sa);class ka extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}render(){const e=document.createElement("style");this.shadow.innerHTML=' \n\n      <div class="form-container">\n        <form class="form">\n          <div class="input-container">\n            <label class="label">Tu Email</label>\n            <input type="text" name="email" class="input">\n          </div>\n          <div class="input-container">\n            <label class="label">Tu Nombre</label>\n            <input type="text" name="nombre" class="input">\n          </div>\n          <button class="form-button">Comenzar</button> \n        </form>\n      </>\n    ',e.innerHTML="\n    .form-container{\n      height: 70vh;\n      width: 100%;\n      margin: 0 auto;\n    }\n\n    @media(max-width:600px){\n      .form-container{\n        max-width: 90vw;\n        margin: 0 5vw;\n        overflow: hidden;\n        height: 50vh;\n      }\n    }\n\n    .form{\n      height: 100%;\n      width: 600px;\n      margin: 0;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items:center;\n    } \n    @media(max-width: 600px){\n      .form{\n        width: 90vw;\n      }\n    }\n\n    .input-container{\n      width: 100%;\n      margin: 20px auto 0 auto;\n    }\n\n    .input{\n      width: 99%;\n      height: 35px;\n      color: white;\n      font-size: 20px;\n      background: #006CFC;\n      border:none;\n      border-radius: 4px;\n      text-align: center;\n      margin: 0 auto;\n    }\n\n    @media(max-width: 600px){\n      .input-container{\n        width: 90vw;\n      }\n    }\n\n    label{\n      margin: 10px;\n      font-size: 20px;\n      font-family: sans-serif;\n      \n    }\n    button {\n      font-size: 18px;\n      border-radius: 4px;\n      padding: 17px 13px;\n      background-color: #006CFC;\n      color: #D8FCFC;\n      width: 600px;\n      border-radius: 4px;\n      animation: lower .4s ease;\n      margin: 20px auto 0 auto;\n      border: none;\n      box-shadow: 5px 5px 2px #c7c7c7;\n    }\n    \n    @media(max-width: 600px) {\n      button {\n        width: 90vw;\n      }\n    }\n    \n    @keyframes lower {\n      0% {\n        transform: translateY(100%);\n      }\n    \n      75% {\n        transform: translateY(-10%);\n      }\n    \n      100% {\n        transform: translateY(0%);\n      }\n    }\n    ",this.shadow.appendChild(e)}addListeners(){this.render();this.shadow.querySelector(".form").addEventListener("submit",(async e=>{e.preventDefault();const t=e.target,n=t.email.value,i=t.nombre.value;ie.go("/path"),ca.setNombreAndEmail(i,n),ca.createPlayer()}))}connectedCallback(){this.addListeners()}}customElements.define("welcome-form",ka);class Na extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}render(){this.shadow.innerHTML='\n            <div class="container">\n                <custom-button class="crear">Crear una nueva Sala</custom-button>\n                <custom-button class="test">Ingresar a una Sala</custom-button>\n            </div>\n        ';const e=document.createElement("style");e.innerHTML="\n      .container{\n        display:flex;\n        flex-direction: column;\n        justify-content:center;\n        align-items:center;\n      }\n      custom-button{\n        margin:10px;\n      }\n    ",this.shadow.appendChild(e)}addListeners(){this.render();const e=this.shadow.querySelector(".crear");this.shadow.querySelector(".test").addEventListener("click",(function(){ie.go("/access-room")})),e.addEventListener("click",(()=>{ca.signIn((()=>{ca.askNewGameRoom((()=>{ie.go("/game-room"),ca.accesToGameRoom()}))}))}))}connectedCallback(){this.addListeners()}}customElements.define("custom-questionary",Na);class Ra extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}render(){const e=document.createElement("style");this.shadow.innerHTML=`\n      <div id="container" class="${this.clasStyle}">\n        <custom-text>Tu contrincante quiere volver a jugar</custom-text>\n        <custom-text>... Te animas?</custom-text>\n        <custom-button class="aceptar">Aceptar</custom-button>\n      </div>\n      `,e.innerHTML="\n      .escondido{\n        display:none;\n      }\n      .mostrado{\n        display:flex;\n        flex-direction:column;\n        justify-content: center;\n        align-items:center;\n        background:black;\n        height:100vh;\n        width:100%;\n        position: absolute;\n        top:0;\n        z-index: 5;\n      }\n    ",this.shadow.appendChild(e)}listeners(){1==ca.getState().rtdbData.replay?this.clasStyle="mostrado":this.clasStyle="escondido",this.render();this.shadow.querySelector(".aceptar").addEventListener("click",(async()=>{await ca.cleaningReplay((()=>{ie.go("/instructions")}))}))}connectedCallback(){this.listeners()}}customElements.define("want-replay",Ra),localStorage.getItem("saved-state")?ca.init():ca.setState({userId:"",roomId:"",rtdbRoomId:"",roomCreator:"",rtdbData:{replay:!1,playerOne:{nombre:"playerOne",choice:"none",start:!1,creator:!0,score:0},playerTwo:{nombre:"playerTwo",choice:"none",start:!1,creator:!1,score:0}},result:""});
//# sourceMappingURL=index.3e02a305.js.map
