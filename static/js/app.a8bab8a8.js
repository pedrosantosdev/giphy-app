(function(e){function t(t){for(var o,i,s=t[0],c=t[1],u=t[2],l=0,f=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);p&&p(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(o=!1)}o&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},r={app:0},a=[];function i(e){return s.p+"static/js/"+({"error-pages":"error-pages","home-page":"home-page"}[e]||e)+"."+{"error-pages":"fb186a6a","home-page":"0eda527d"}[e]+".js"}function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=o);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(e);var u=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",u.name="ChunkLoadError",u.type=o,u.request=a,n[1](u)}r[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/giphy-app/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var p=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o,r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view"),n("Notification")],1)},i=[],s=n("d4ec"),c=n("262e"),u=n("2caf"),l=n("9ab4"),p=n("60a3"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"fade"}},[e.show?n("div",{staticClass:"notification",class:e.bgColor},[e._v(e._s(e.msg))]):e._e()])},h=[],m=n("bee2");(function(e){e["Alert"]="alert",e["Info"]="info",e["Success"]="success",e["Warning"]="warning"})(o||(o={}));var g=function(e){Object(c["a"])(n,e);var t=Object(u["a"])(n);function n(){return Object(s["a"])(this,n),t.apply(this,arguments)}return Object(m["a"])(n,[{key:"notification",get:function(){return this.$store.state.notification}},{key:"show",get:function(){return!!this.notification&&this.notification.show}},{key:"msg",get:function(){return this.notification?this.notification.msg:""}},{key:"type",get:function(){return this.notification?this.notification.type:o.Info}},{key:"time",get:function(){return this.notification?this.notification.time:1e3}},{key:"bgColor",get:function(){return"bg-".concat(this.type)}}]),n}(p["c"]);g=Object(l["a"])([p["a"]],g);var d=g,v=d,b=n("2877"),y=Object(b["a"])(v,f,h,!1,null,null,null),O=y.exports,j=function(e){Object(c["a"])(n,e);var t=Object(u["a"])(n);function n(){return Object(s["a"])(this,n),t.apply(this,arguments)}return n}(p["c"]);j=Object(l["a"])([Object(p["a"])({components:{Notification:O}})],j);var k=j,w=k,x=(n("cf25"),Object(b["a"])(w,a,i,!1,null,null,null)),A=x.exports,C=n("9483");Object(C["a"])("".concat("/giphy-app/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("45fc"),n("d3b7");var T=n("2f62"),L=n("5530"),_=n("6fc5"),E={msg:"Ops",type:o.Info,time:1e3,show:!1},I=function(e){Object(c["a"])(n,e);var t=Object(u["a"])(n);function n(){var e;return Object(s["a"])(this,n),e=t.apply(this,arguments),e.msg=E.msg,e.type=E.type,e.time=E.time,e.show=E.show,e}return Object(m["a"])(n,[{key:"setMsg",value:function(e){this.msg=e}},{key:"setType",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.Info;this.type=e}},{key:"setTime",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3;this.time=e}},{key:"setShow",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.show=e}},{key:"showNotification",value:function(e){e=Object(L["a"])(Object(L["a"])({},e),{},{show:!0});var t=this.context;t.dispatch("setNotification",e),setTimeout((function(){t.dispatch("setNotification",E)}),e.time)}},{key:"setNotification",value:function(e){this.context.commit("setMsg",e.msg),this.context.commit("setType",e.type),this.context.commit("setTime",e.time),this.context.commit("setShow",e.show)}}]),n}(_["d"]);Object(l["a"])([_["c"]],I.prototype,"setMsg",null),Object(l["a"])([_["c"]],I.prototype,"setType",null),Object(l["a"])([_["c"]],I.prototype,"setTime",null),Object(l["a"])([_["c"]],I.prototype,"setShow",null),Object(l["a"])([_["a"]],I.prototype,"showNotification",null),Object(l["a"])([_["a"]],I.prototype,"setNotification",null),I=Object(l["a"])([Object(_["b"])({namespaced:!0})],I);var P=I,S=(n("99af"),n("ac1f"),n("841c"),n("96cf"),n("1da1")),M=n("bc3a"),N=n.n(M),$=function(){function e(){Object(s["a"])(this,e),this.apikey="gD8d7HmBLpKfqxO2T612MwmMWMeLzzlF",this.uri="//api.giphy.com/v1/gifs",this.defaultParams={api_key:this.apikey}}return Object(m["a"])(e,[{key:"getSearch",value:function(){var e=Object(S["a"])(regeneratorRuntime.mark((function e(){var t,n,o,r,a,i,s,c,u,l=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=l.length>0&&void 0!==l[0]?l[0]:1,n=l.length>1&&void 0!==l[1]?l[1]:25,o=l.length>2&&void 0!==l[2]?l[2]:"",r=l.length>3&&void 0!==l[3]?l[3]:"g",a=(t-1)*n,i=o.length?"search":"trending",s=Object(L["a"])(Object(L["a"])({},this.defaultParams),{},{limit:n,offset:a,rating:r}),c="".concat(this.uri,"/").concat(i),o.length&&(s=Object(L["a"])(Object(L["a"])({},s),{},{q:o})),u=N.a.get(c,{params:s}).then((function(e){return e.data})),e.abrupt("return",u);case 11:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"getSuggestions",value:function(){var e=Object(S["a"])(regeneratorRuntime.mark((function e(){var t,n,o,r,a,i,s,c=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:1,n=c.length>1&&void 0!==c[1]?c[1]:25,o=c.length>2&&void 0!==c[2]?c[2]:"",r=(t-1)*n,a=Object(L["a"])(Object(L["a"])({},this.defaultParams),{},{limit:n,offset:r,q:o}),i="".concat(this.uri,"/search/tags"),s=N.a.get(i,{params:a}).then((function(e){return e.data})),e.abrupt("return",s);case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}],[{key:"getInstance",value:function(){return e.instance||(e.instance=new e),e.instance}}]),e}(),R=$.getInstance(),q=function(e){Object(c["a"])(n,e);var t=Object(u["a"])(n);function n(){var e;return Object(s["a"])(this,n),e=t.apply(this,arguments),e.isLoading=!1,e.search="",e.limit=25,e.max=e.limit,e.hasMore=!0,e.imgs=[],e.isEmpty=!1,e.hasError=!1,e}return Object(m["a"])(n,[{key:"setIsEmpty",value:function(){this.isEmpty=!this.imgs.length&&!this.isLoading}},{key:"setHasError",value:function(e){this.hasError=e}},{key:"setIsLoading",value:function(e){this.isLoading=e}},{key:"setSearch",value:function(e){this.search=e}},{key:"setLimit",value:function(e){this.limit=e||25}},{key:"setMax",value:function(e){this.max=e}},{key:"setHasMore",value:function(){this.hasMore=this.max>this.imgs.length}},{key:"setImgs",value:function(e){this.imgs=this.imgs.concat(e)}},{key:"clearImgs",value:function(){this.imgs=[]}},{key:"getGifs",value:function(){var e=Object(S["a"])(regeneratorRuntime.mark((function e(t){var n,o,r=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.context.commit("setIsLoading",t.page),this.context.commit("setLimit",t.limit),this.context.commit("setSearch",t.search),n=void 0!==t.page?t.page:1,o=void 0===t.append||t.append,this.hasMore||!o){e.next=7;break}return e.abrupt("return");case 7:o||this.context.commit("clearImgs"),this.context.commit("setIsLoading",!0),R.getSearch(n,this.limit,this.search).then((function(e){r.context.commit("setImgs",e.data),r.context.commit("setMax",e.pagination.total_count)})).catch((function(e){var t=e.response,n="Ocorreu um Erro!";t.status>400?n="Falha na comunicação":t.status>400&&(n="Parametro Necessario: <br/> ".concat(t.data.message)),r.context.commit("setHasError",!0),r.context.dispatch("notification/showNotification",{msg:n,type:"alert",time:2500},{root:!0})})).finally((function(){r.context.commit("setIsLoading",!1),r.context.commit("setHasMore"),r.context.commit("setIsEmpty")}));case 10:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}]),n}(_["d"]);Object(l["a"])([_["c"]],q.prototype,"setIsEmpty",null),Object(l["a"])([_["c"]],q.prototype,"setHasError",null),Object(l["a"])([_["c"]],q.prototype,"setIsLoading",null),Object(l["a"])([_["c"]],q.prototype,"setSearch",null),Object(l["a"])([_["c"]],q.prototype,"setLimit",null),Object(l["a"])([_["c"]],q.prototype,"setMax",null),Object(l["a"])([_["c"]],q.prototype,"setHasMore",null),Object(l["a"])([_["c"]],q.prototype,"setImgs",null),Object(l["a"])([_["c"]],q.prototype,"clearImgs",null),Object(l["a"])([_["a"]],q.prototype,"getGifs",null),q=Object(l["a"])([Object(_["b"])({namespaced:!0})],q);var H=q,W={isLogged:!1,accessToken:"",refreshToken:"",expiresAt:""},U=function(e){Object(c["a"])(n,e);var t=Object(u["a"])(n);function n(){var e;return Object(s["a"])(this,n),e=t.apply(this,arguments),e.isLogged=W.isLogged,e.accessToken=W.accessToken,e.refreshToken=W.refreshToken,e.expiresAt=W.expiresAt,e}return Object(m["a"])(n,[{key:"setIsLogged",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W.isLogged;this.isLogged=e}},{key:"setAccessToken",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W.accessToken;this.accessToken=e}},{key:"setRefreshToken",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W.refreshToken;this.refreshToken=e}},{key:"setExpiresAt",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W.expiresAt;this.expiresAt=e}},{key:"clearAuth",value:function(){this.context.dispatch("setAuth",W),localStorage.removeItem("auth")}},{key:"setAuth",value:function(e){this.context.commit("setIsLogged",e.isLogged),this.context.commit("setAccessToken",e.accessToken),this.context.commit("setRefreshToken",e.refreshToken),this.context.commit("setExpiresAt",e.expiresAt),localStorage.setItem("auth",JSON.stringify(e))}}]),n}(_["d"]);Object(l["a"])([_["c"]],U.prototype,"setIsLogged",null),Object(l["a"])([_["c"]],U.prototype,"setAccessToken",null),Object(l["a"])([_["c"]],U.prototype,"setRefreshToken",null),Object(l["a"])([_["c"]],U.prototype,"setExpiresAt",null),Object(l["a"])([_["a"]],U.prototype,"clearAuth",null),Object(l["a"])([_["a"]],U.prototype,"setAuth",null),U=Object(l["a"])([Object(_["b"])({namespaced:!0})],U);var z=U,B={notification:P,gif:H,auth:z};r["a"].use(T["a"]);var D=new T["a"].Store({strict:!1,modules:B}),F=function(){function e(){Object(s["a"])(this,e)}return Object(m["a"])(e,null,[{key:"isLogged",value:function(){var e=this.getUser();return!!e.isLogged}},{key:"getUser",value:function(){var e,t=D.state.auth;if(t&&t.isLogged)return t;var n=JSON.parse(null!==(e=localStorage.getItem("auth"))&&void 0!==e?e:"{}");return n&&n.isLogged?n:W}}]),e}(),J=n("8c4f");r["a"].use(J["a"]);var K=[{path:"/",name:"home",component:function(){return n.e("home-page").then(n.bind(null,"bb51"))},children:[{path:"page/:page"}]},{path:"/login",name:"login-page",component:function(){return n.e("home-page").then(n.bind(null,"a55b"))}},{path:"/dashboard",name:"dashboard-page",meta:{requiresAuth:!0},component:function(){return n.e("home-page").then(n.bind(null,"7277"))}},{path:"*",name:"404",component:function(){return n.e("error-pages").then(n.bind(null,"8cdb"))}}],G=new J["a"]({mode:"history",base:"/giphy-app/",routes:K});G.beforeEach((function(e,t,n){e.matched.some((function(e){return e.meta.requiresAuth}))?F.isLogged()?n():n({path:"/login",query:{redirect:e.fullPath}}):n()}));var V=G,Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{staticClass:"input-text"},["checkbox"===e.type?n("input",{directives:[{name:"model",rawName:"v-model",value:e.formControl.value,expression:"formControl.value"}],attrs:{placeholder:e.name?e.name:"placeholder",name:e.name,type:"checkbox"},domProps:{checked:Array.isArray(e.formControl.value)?e._i(e.formControl.value,null)>-1:e.formControl.value},on:{keyup:function(t){return e.$emit("keyup-input",e.formControl)},blur:function(t){return e.$emit("blur-input",e.formControl)},change:function(t){var n=e.formControl.value,o=t.target,r=!!o.checked;if(Array.isArray(n)){var a=null,i=e._i(n,a);o.checked?i<0&&e.$set(e.formControl,"value",n.concat([a])):i>-1&&e.$set(e.formControl,"value",n.slice(0,i).concat(n.slice(i+1)))}else e.$set(e.formControl,"value",r)}}}):"radio"===e.type?n("input",{directives:[{name:"model",rawName:"v-model",value:e.formControl.value,expression:"formControl.value"}],attrs:{placeholder:e.name?e.name:"placeholder",name:e.name,type:"radio"},domProps:{checked:e._q(e.formControl.value,null)},on:{keyup:function(t){return e.$emit("keyup-input",e.formControl)},blur:function(t){return e.$emit("blur-input",e.formControl)},change:function(t){return e.$set(e.formControl,"value",null)}}}):n("input",{directives:[{name:"model",rawName:"v-model",value:e.formControl.value,expression:"formControl.value"}],attrs:{placeholder:e.name?e.name:"placeholder",name:e.name,type:e.type},domProps:{value:e.formControl.value},on:{keyup:function(t){return e.$emit("keyup-input",e.formControl)},blur:function(t){return e.$emit("blur-input",e.formControl)},input:function(t){t.target.composing||e.$set(e.formControl,"value",t.target.value)}}}),n("span",{staticClass:"label"},[e._v(e._s(e.label))]),n("span",{directives:[{name:"show",rawName:"v-show",value:e.formattedErros,expression:"formattedErros"}],staticClass:"error"},[e._v(e._s(e.formattedErros))]),n("span",{staticClass:"focus-bg"})])},Q=[],X=(n("a15b"),function(e){Object(c["a"])(n,e);var t=Object(u["a"])(n);function n(){return Object(s["a"])(this,n),t.apply(this,arguments)}return Object(m["a"])(n,[{key:"formattedErros",get:function(){var e;return null===(e=this.formControl)||void 0===e?void 0:e.errors.join(", ")}}]),n}(p["c"]));Object(l["a"])([Object(p["b"])()],X.prototype,"label",void 0),Object(l["a"])([Object(p["b"])()],X.prototype,"name",void 0),Object(l["a"])([Object(p["b"])()],X.prototype,"type",void 0),Object(l["a"])([Object(p["b"])()],X.prototype,"formControl",void 0),X=Object(l["a"])([p["a"]],X);var Z=X,ee=Z,te=Object(b["a"])(ee,Y,Q,!1,null,null,null),ne=te.exports,oe=n("ecee"),re=n("c074");n("8a79"),n("2ca0");function ae(){var e=Object({VUE_APP_GIHPY_API_KEY:"gD8d7HmBLpKfqxO2T612MwmMWMeLzzlF",NODE_ENV:"production",BASE_URL:"/giphy-app/"}).VUE_APP_KTOR_API_URL;N.a.interceptors.request.use((function(t){if(t.url&&t.url.startsWith(e)&&(!t.url.endsWith("/oauth/auth")||!t.url.endsWith("/oauth/register"))){var n=F.getUser(),o=new Date(n.expiresAt),r=new Date;t.headers.Authorization="Bearer ".concat(r>o?n.refreshToken:n.accessToken)}return t}),(function(e){return Promise.reject(e)})),N.a.interceptors.response.use((function(e){return e}),(function(t){var n=t.request.responseURL;if(401===t.response.status&&n.startsWith(e)&&!n.endsWith("/oauth/auth")&&!n.endsWith("/oauth/register")){var o=t.config;return N()(o)}return Promise.reject(t)}))}oe["a"].watch(),oe["b"].add(re["a"]),r["a"].component("Input",ne),ae(),r["a"].config.productionTip=!1,new r["a"]({router:V,store:D,render:function(e){return e(A)}}).$mount("#app")},cf25:function(e,t,n){"use strict";n("fea6")},fea6:function(e,t,n){}});
//# sourceMappingURL=app.a8bab8a8.js.map