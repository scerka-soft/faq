(function(e){function t(t){for(var a,u,l=t[0],c=t[1],i=t[2],d=0,v=[];d<l.length;d++)u=l[d],Object.prototype.hasOwnProperty.call(n,u)&&n[u]&&v.push(n[u][0]),n[u]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);s&&s(t);while(v.length)v.shift()();return o.push.apply(o,i||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],a=!0,u=1;u<r.length;u++){var c=r[u];0!==n[c]&&(a=!1)}a&&(o.splice(t--,1),e=l(l.s=r[0]))}return e}var a={},n={app:0},o=[];function u(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"90b284f2"}[e]+".js"}function l(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.e=function(e){var t=[],r=n[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,a){r=n[e]=[t,a]}));t.push(r[2]=a);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=u(e);var i=new Error;o=function(t){c.onerror=c.onload=null,clearTimeout(d);var r=n[e];if(0!==r){if(r){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",i.name="ChunkLoadError",i.type=a,i.request=o,r[1](i)}n[e]=void 0}};var d=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(t)},l.m=e,l.c=a,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(r,a,function(t){return e[t]}.bind(null,a));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var s=i;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"1f32":function(e,t,r){},"3b9e":function(e,t,r){"use strict";r("e292")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("7a23"),n={id:"nav"},o=Object(a["f"])("Home"),u=Object(a["f"])(" | "),l=Object(a["f"])("About");function c(e,t){var r=Object(a["v"])("router-link"),c=Object(a["v"])("router-view");return Object(a["p"])(),Object(a["d"])(a["a"],null,[Object(a["g"])("div",n,[Object(a["g"])(r,{to:"/"},{default:Object(a["A"])((function(){return[o]})),_:1}),u,Object(a["g"])(r,{to:"/about"},{default:Object(a["A"])((function(){return[l]})),_:1})]),Object(a["g"])(c)],64)}r("f4c1");const i={};i.render=c;var d=i,s=(r("d3b7"),r("6c02")),v=r("cf05"),p=r.n(v),f={class:"home"},b=Object(a["g"])("img",{alt:"Vue logo",src:p.a},null,-1);function h(e,t,r,n,o,u){var l=Object(a["v"])("HelloWorld");return Object(a["p"])(),Object(a["d"])("div",f,[b,Object(a["g"])(l,{msg:"Welcome to Your Vue.js App"})])}var g=Object(a["B"])("data-v-566e8d16");Object(a["s"])("data-v-566e8d16");var j={class:"hello"},m=Object(a["e"])('<p data-v-566e8d16> For a guide and recipes on how to configure / customize this project,<br data-v-566e8d16> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-566e8d16>vue-cli documentation</a>. </p><h3 data-v-566e8d16>Installed CLI Plugins</h3><ul data-v-566e8d16><li data-v-566e8d16><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-566e8d16>babel</a></li><li data-v-566e8d16><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener" data-v-566e8d16>router</a></li><li data-v-566e8d16><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener" data-v-566e8d16>eslint</a></li></ul><h3 data-v-566e8d16>Essential Links</h3><ul data-v-566e8d16><li data-v-566e8d16><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-566e8d16>Core Docs</a></li><li data-v-566e8d16><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-566e8d16>Forum</a></li><li data-v-566e8d16><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-566e8d16>Community Chat</a></li><li data-v-566e8d16><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-566e8d16>Twitter</a></li><li data-v-566e8d16><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-566e8d16>News</a></li></ul><h3 data-v-566e8d16>Ecosystem</h3><ul data-v-566e8d16><li data-v-566e8d16><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-566e8d16>vue-router</a></li><li data-v-566e8d16><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-566e8d16>vuex</a></li><li data-v-566e8d16><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-566e8d16>vue-devtools</a></li><li data-v-566e8d16><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-566e8d16>vue-loader</a></li><li data-v-566e8d16><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-566e8d16>awesome-vue</a></li></ul>',7);Object(a["q"])();var O=g((function(e,t,r,n,o,u){return Object(a["p"])(),Object(a["d"])("div",j,[Object(a["g"])("h1",null,Object(a["x"])(r.msg),1),m])})),k={name:"HelloWorld",props:{msg:String}};r("3b9e");k.render=O,k.__scopeId="data-v-566e8d16";var y=k,_={name:"Home",components:{HelloWorld:y}};_.render=h;var w=_,x=[{path:"/",name:"Home",component:w},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],P=Object(s["a"])({history:Object(s["b"])("/"),routes:x}),A=P;Object(a["c"])(d).use(A).mount("#app")},cf05:function(e,t,r){e.exports=r.p+"img/logo.82b9c7a5.png"},e292:function(e,t,r){},f4c1:function(e,t,r){"use strict";r("1f32")}});
//# sourceMappingURL=app.b38d84bc.js.map