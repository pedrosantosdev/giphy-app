(function(e){function t(t){for(var r,i,s=t[0],c=t[1],u=t[2],l=0,f=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o=[];function i(e){return s.p+"static/js/"+({"error-pages":"error-pages","home-page":"home-page"}[e]||e)+"."+{"error-pages":"77dbc20e","home-page":"17973fa9"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(e);var u=new Error;o=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",u.name="ChunkLoadError",u.type=r,u.request=o,n[1](u)}a[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/giphy-app/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var p=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0613":function(e,t,n){"use strict";var r=n("2b0e"),a=n("2f62"),o=n("5530"),i=n("d4ec"),s=n("bee2"),c=n("262e"),u=n("2caf"),l=n("9ab4"),p=n("6fc5"),f=n("405a"),h={msg:"Ops",type:f["a"].Info,time:1e3,show:!1},d=function(e){Object(c["a"])(n,e);var t=Object(u["a"])(n);function n(){var e;return Object(i["a"])(this,n),e=t.apply(this,arguments),e.msg=h.msg,e.type=h.type,e.time=h.time,e.show=h.show,e}return Object(s["a"])(n,[{key:"setMsg",value:function(e){this.msg=e}},{key:"setType",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f["a"].Info;this.type=e}},{key:"setTime",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3;this.time=e}},{key:"setShow",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.show=e}},{key:"showNotification",value:function(e){e=Object(o["a"])(Object(o["a"])({},e),{},{show:!0});var t=this.context;t.dispatch("setNotification",e),setTimeout((function(){t.dispatch("setNotification",h)}),e.time)}},{key:"setNotification",value:function(e){this.context.commit("setMsg",e.msg),this.context.commit("setType",e.type),this.context.commit("setTime",e.time),this.context.commit("setShow",e.show)}}]),n}(p["d"]);Object(l["a"])([p["c"]],d.prototype,"setMsg",null),Object(l["a"])([p["c"]],d.prototype,"setType",null),Object(l["a"])([p["c"]],d.prototype,"setTime",null),Object(l["a"])([p["c"]],d.prototype,"setShow",null),Object(l["a"])([p["a"]],d.prototype,"showNotification",null),Object(l["a"])([p["a"]],d.prototype,"setNotification",null),d=Object(l["a"])([Object(p["b"])({namespaced:!0})],d);var m=d,g=n("1da1"),v=(n("96cf"),n("ac1f"),n("841c"),n("99af"),n("d3b7"),n("bc3a")),b=n.n(v),y=function(){function e(){Object(i["a"])(this,e),this.apikey="gD8d7HmBLpKfqxO2T612MwmMWMeLzzlF",this.uri="//api.giphy.com/v1/gifs",this.defaultParams={api_key:this.apikey}}return Object(s["a"])(e,[{key:"getSearch",value:function(){var e=Object(g["a"])(regeneratorRuntime.mark((function e(){var t,n,r,a,i,s,c,u,l,p=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=p.length>0&&void 0!==p[0]?p[0]:1,n=p.length>1&&void 0!==p[1]?p[1]:25,r=p.length>2&&void 0!==p[2]?p[2]:"",a=p.length>3&&void 0!==p[3]?p[3]:"g",i=(t-1)*n,s=r.length?"search":"trending",c=Object(o["a"])(Object(o["a"])({},this.defaultParams),{},{limit:n,offset:i,rating:a}),u="".concat(this.uri,"/").concat(s),r.length&&(c=Object(o["a"])(Object(o["a"])({},c),{},{q:r})),l=b.a.get(u,{params:c}).then((function(e){return e.data})),e.abrupt("return",l);case 11:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"getSuggestions",value:function(){var e=Object(g["a"])(regeneratorRuntime.mark((function e(){var t,n,r,a,i,s,c,u=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=u.length>0&&void 0!==u[0]?u[0]:1,n=u.length>1&&void 0!==u[1]?u[1]:25,r=u.length>2&&void 0!==u[2]?u[2]:"",a=(t-1)*n,i=Object(o["a"])(Object(o["a"])({},this.defaultParams),{},{limit:n,offset:a,q:r}),s="".concat(this.uri,"/search/tags"),c=b.a.get(s,{params:i}).then((function(e){return e.data})),e.abrupt("return",c);case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}],[{key:"getInstance",value:function(){return e.instance||(e.instance=new e),e.instance}}]),e}(),O=y.getInstance(),j=function(e){Object(c["a"])(n,e);var t=Object(u["a"])(n);function n(){var e;return Object(i["a"])(this,n),e=t.apply(this,arguments),e.isLoading=!1,e.search="",e.limit=25,e.max=e.limit,e.hasMore=!0,e.imgs=[],e.isEmpty=!1,e.hasError=!1,e}return Object(s["a"])(n,[{key:"setIsEmpty",value:function(){this.isEmpty=!this.imgs.length&&!this.isLoading}},{key:"setHasError",value:function(e){this.hasError=e}},{key:"setIsLoading",value:function(e){this.isLoading=e}},{key:"setSearch",value:function(e){this.search=e}},{key:"setLimit",value:function(e){this.limit=e||25}},{key:"setMax",value:function(e){this.max=e}},{key:"setHasMore",value:function(){this.hasMore=this.max>this.imgs.length}},{key:"setImgs",value:function(e){this.imgs=this.imgs.concat(e)}},{key:"clearImgs",value:function(){this.imgs=[]}},{key:"getGifs",value:function(){var e=Object(g["a"])(regeneratorRuntime.mark((function e(t){var n,r,a=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.context.commit("setIsLoading",t.page),this.context.commit("setLimit",t.limit),this.context.commit("setSearch",t.search),n=void 0!==t.page?t.page:1,r=void 0===t.append||t.append,this.hasMore||!r){e.next=7;break}return e.abrupt("return");case 7:r||this.context.commit("clearImgs"),this.context.commit("setIsLoading",!0),O.getSearch(n,this.limit,this.search).then((function(e){a.context.commit("setImgs",e.data),a.context.commit("setMax",e.pagination.total_count)})).catch((function(e){var t=e.response,n="Ocorreu um Erro!";t.status>400?n="Falha na comunicação":t.status>400&&(n="Parametro Necessario: <br/> ".concat(t.data.message)),a.context.commit("setHasError",!0),a.context.dispatch("notification/showNotification",{msg:n,type:"alert",time:2500},{root:!0})})).finally((function(){a.context.commit("setIsLoading",!1),a.context.commit("setHasMore"),a.context.commit("setIsEmpty")}));case 10:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}]),n}(p["d"]);Object(l["a"])([p["c"]],j.prototype,"setIsEmpty",null),Object(l["a"])([p["c"]],j.prototype,"setHasError",null),Object(l["a"])([p["c"]],j.prototype,"setIsLoading",null),Object(l["a"])([p["c"]],j.prototype,"setSearch",null),Object(l["a"])([p["c"]],j.prototype,"setLimit",null),Object(l["a"])([p["c"]],j.prototype,"setMax",null),Object(l["a"])([p["c"]],j.prototype,"setHasMore",null),Object(l["a"])([p["c"]],j.prototype,"setImgs",null),Object(l["a"])([p["c"]],j.prototype,"clearImgs",null),Object(l["a"])([p["a"]],j.prototype,"getGifs",null),j=Object(l["a"])([Object(p["b"])({namespaced:!0})],j);var k=j,w=n("2ce2"),x={notification:m,gif:k,auth:w["a"]};r["a"].use(a["a"]);t["a"]=new a["a"].Store({strict:!1,modules:x})},"1d07":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"modal-fade"}},[n("div",{staticClass:"modal-backdrop",on:{click:function(t){return t.target!==t.currentTarget?null:e.closeModal(!0)}}},[n("div",{staticClass:"modal",attrs:{role:"dialog","aria-labelledby":"modalTitle","aria-describedby":"modalDescription"}},[n("header",{staticClass:"modal-header",attrs:{id:"modalTitle"}},[e._t("header"),n("button",{staticClass:"btn-close",attrs:{type:"button","aria-label":"Close modal"},on:{click:function(t){return e.closeModal(!0)}}},[n("i",{staticClass:"fas fa-times"})])],2),n("section",{staticClass:"modal-body",attrs:{id:"modalDescription"}},[e._t("body")],2),e.showFooter?n("footer",{staticClass:"modal-footer"},[e._t("footer",(function(){return[n("button",{staticClass:"btn-green",attrs:{type:"button","aria-label":"OK modal"}},[e._v(" OK ! ")])]}))],2):e._e()])])])},a=[],o=n("2b0e"),i=o["a"].extend({name:"Modal",props:["sFooter","sHeader"],data:function(){var e,t;return{showFooter:null!==(e=this.sFooter)&&void 0!==e&&e,showHeader:null!==(t=this.sHeader)&&void 0!==t&&t}},methods:{closeModal:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e?this.$emit("close",e):this.$emit("ok")}}}),s=i,c=n("2877"),u=Object(c["a"])(s,r,a,!1,null,null,null);t["default"]=u.exports},2669:function(e,t,n){var r={"./Input.vue":"e4a6","./Modal.vue":"1d07"};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id="2669"},"2ce2":function(e,t,n){"use strict";n.d(t,"b",(function(){return l}));var r=n("5530"),a=n("d4ec"),o=n("bee2"),i=n("262e"),s=n("2caf"),c=n("9ab4"),u=n("6fc5"),l={isLogged:!1,accessToken:"",refreshToken:"",expiresAt:"",user:null},p=function(e){Object(i["a"])(n,e);var t=Object(s["a"])(n);function n(){var e;return Object(a["a"])(this,n),e=t.apply(this,arguments),e.isLogged=l.isLogged,e.accessToken=l.accessToken,e.refreshToken=l.refreshToken,e.expiresAt=l.expiresAt,e.user=l.user,e}return Object(o["a"])(n,[{key:"setIsLogged",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l.isLogged;this.isLogged=e}},{key:"setAccessToken",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l.accessToken;this.accessToken=e}},{key:"setRefreshToken",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l.refreshToken;this.refreshToken=e}},{key:"setExpiresAt",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l.expiresAt;this.expiresAt=e}},{key:"setUser",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l.user;this.user=e}},{key:"clearAuth",value:function(){this.context.dispatch("setAuth",l),localStorage.removeItem("auth")}},{key:"setAuth",value:function(e){this.context.commit("setIsLogged",e.isLogged),this.context.commit("setAccessToken",e.accessToken),this.context.commit("setRefreshToken",e.refreshToken),this.context.commit("setExpiresAt",e.expiresAt),localStorage.setItem("auth",JSON.stringify(e))}},{key:"setAuthUser",value:function(e){var t;this.context.commit("setUser",e);var n=JSON.parse(null!==(t=localStorage.getItem("auth"))&&void 0!==t?t:"");localStorage.setItem("auth",JSON.stringify(Object(r["a"])(Object(r["a"])({},n),{},{user:e})))}}]),n}(u["d"]);Object(c["a"])([u["c"]],p.prototype,"setIsLogged",null),Object(c["a"])([u["c"]],p.prototype,"setAccessToken",null),Object(c["a"])([u["c"]],p.prototype,"setRefreshToken",null),Object(c["a"])([u["c"]],p.prototype,"setExpiresAt",null),Object(c["a"])([u["c"]],p.prototype,"setUser",null),Object(c["a"])([u["a"]],p.prototype,"clearAuth",null),Object(c["a"])([u["a"]],p.prototype,"setAuth",null),Object(c["a"])([u["a"]],p.prototype,"setAuthUser",null),p=Object(c["a"])([Object(u["b"])({namespaced:!0})],p),t["a"]=p},"405a":function(e,t,n){"use strict";var r;n.d(t,"a",(function(){return r})),function(e){e["Alert"]="alert",e["Info"]="info",e["Success"]="success",e["Warning"]="warning"}(r||(r={}))},"7ad6":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("d4ec"),a=n("bee2"),o=n("ae5e"),i=n("0613"),s=n("2ce2"),c=function(){function e(){Object(r["a"])(this,e)}return Object(a["a"])(e,null,[{key:"isLogged",value:function(){var e=this.getAuth();return e.isLogged}},{key:"getAuth",value:function(){var e,t=i["a"].state.auth;if(t&&t.isLogged)return t;var n=JSON.parse(null!==(e=localStorage.getItem("auth"))&&void 0!==e?e:"{}");return n&&n.isLogged?(i["a"].dispatch("auth/setAuth",n),n):s["b"]}},{key:"getUser",value:function(){var e,t=i["a"].state.auth;if(t&&t.isLogged&&null!=t.user)return t.user;var n=JSON.parse(null!==(e=localStorage.getItem("auth"))&&void 0!==e?e:"{}");return n&&n.isLogged?(o["a"].getInstance().details().then((function(e){return i["a"].dispatch("auth/setAuthUser",e.data.user)})),i["a"].state.auth.user):null}},{key:"logout",value:function(){i["a"].dispatch("auth/clearAuth")}}]),e}()},ae5e:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("1da1"),a=n("d4ec"),o=n("bee2"),i=(n("96cf"),n("bc3a")),s=n.n(i),c=function(){function e(){Object(a["a"])(this,e),this.uri=Object({VUE_APP_GIHPY_API_KEY:"gD8d7HmBLpKfqxO2T612MwmMWMeLzzlF",NODE_ENV:"production",BASE_URL:"/giphy-app/"}).VUE_APP_KTOR_API_URL}return Object(o["a"])(e,[{key:"register",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n="".concat(this.uri,"/oauth/register"),r={"Content-Type":"application/form-data"},a=s.a.post(n,t,{headers:r}).then((function(e){return e.data})),e.abrupt("return",a);case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"login",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n="".concat(this.uri,"/oauth/auth"),r={"Content-Type":"application/form-data"},a=s.a.post(n,t,{headers:r}).then((function(e){return e.data})),e.abrupt("return",a);case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"refreshToken",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n,r,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n="".concat(this.uri,"/oauth/refresh-token"),r=new FormData,r.append("token",t),a={"Content-Type":"application/form-data"},o=s.a.post(n,r,{headers:a}).then((function(e){return e.data})),e.abrupt("return",o);case 6:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"details",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t="".concat(this.uri,"/oauth/me"),n=s.a.get(t).then((function(e){return e.data})),e.abrupt("return",n);case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}],[{key:"getInstance",value:function(){return e.instance||(e.instance=new e),e.instance}}]),e}()},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("159b"),n("d3b7"),n("ddb0"),n("ac1f"),n("1276"),n("5319");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view"),n("Notification")],1)},o=[],i=n("d4ec"),s=n("262e"),c=n("2caf"),u=n("9ab4"),l=n("60a3"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"fade"}},[e.show?n("div",{staticClass:"notification",class:e.bgColor},[e._v(e._s(e.msg))]):e._e()])},f=[],h=n("bee2"),d=n("405a"),m=function(e){Object(s["a"])(n,e);var t=Object(c["a"])(n);function n(){return Object(i["a"])(this,n),t.apply(this,arguments)}return Object(h["a"])(n,[{key:"notification",get:function(){return this.$store.state.notification}},{key:"show",get:function(){return!!this.notification&&this.notification.show}},{key:"msg",get:function(){return this.notification?this.notification.msg:""}},{key:"type",get:function(){return this.notification?this.notification.type:d["a"].Info}},{key:"time",get:function(){return this.notification?this.notification.time:1e3}},{key:"bgColor",get:function(){return"bg-".concat(this.type)}}]),n}(l["c"]);m=Object(u["a"])([l["a"]],m);var g=m,v=g,b=n("2877"),y=Object(b["a"])(v,p,f,!1,null,null,null),O=y.exports,j=function(e){Object(s["a"])(n,e);var t=Object(c["a"])(n);function n(){return Object(i["a"])(this,n),t.apply(this,arguments)}return n}(l["c"]);j=Object(u["a"])([Object(l["a"])({components:{Notification:O}})],j);var k=j,w=k,x=(n("cf25"),Object(b["a"])(w,a,o,!1,null,null,null)),_=x.exports,A=n("9483");Object(A["a"])("".concat("/giphy-app/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("3ca3");var C=n("7ad6"),T=n("8c4f");r["a"].use(T["a"]);var E=[{path:"/",name:"home",component:function(){return n.e("home-page").then(n.bind(null,"bb51"))},children:[{path:"page/:page"}]},{path:"/login",name:"login-page",component:function(){return n.e("home-page").then(n.bind(null,"a55b"))}},{path:"/dashboard",name:"dashboard-page",meta:{requiresAuth:!0},component:function(){return n.e("home-page").then(n.bind(null,"7277"))}},{path:"*",name:"404",component:function(){return n.e("error-pages").then(n.bind(null,"8cdb"))}}],L=new T["a"]({mode:"history",base:"/giphy-app/",routes:E});L.beforeEach((function(e,t,n){e.matched.some((function(e){return e.meta.requiresAuth}))?C["a"].isLogged()?n():n({path:"/login",query:{redirect:e.fullPath}}):n()}));var I=L,P=n("0613"),M=n("ecee"),S=n("c074"),N=n("8103"),R=n.n(N),$=n("bba4"),U=n.n($),H=(n("2ca0"),n("8a79"),n("bc3a")),q=n.n(H),D=n("ae5e");function F(){var e=Object({VUE_APP_GIHPY_API_KEY:"gD8d7HmBLpKfqxO2T612MwmMWMeLzzlF",NODE_ENV:"production",BASE_URL:"/giphy-app/"}).VUE_APP_KTOR_API_URL;q.a.interceptors.request.use((function(t){if(t.url&&t.url.startsWith(e)&&(!t.url.endsWith("/oauth/auth")||!t.url.endsWith("/oauth/register"))){var n=C["a"].getAuth(),r=new Date(n.expiresAt),a=new Date;if(a>r){D["a"].getInstance().refreshToken(n.refreshToken);var o=t;return q()(o)}t.headers.Authorization="Bearer ".concat(n.accessToken)}return t}),(function(e){return Promise.reject(e)})),q.a.interceptors.response.use((function(e){return e}),(function(t){var n=t.request.responseURL;return!n||!n.startsWith(e)||n.endsWith("/oauth/auth")&&n.endsWith("/oauth/register")||C["a"].logout(),Promise.reject(t)}))}var W=n("2669");W.keys().forEach((function(e){var t,n=W(e),a=R()(U()(null===(t=e.split("/").pop())||void 0===t?void 0:t.replace(/\.\w+$/,"")));r["a"].component(a,n.default||n)})),M["a"].watch(),M["b"].add(S["c"]),M["b"].add(S["a"]),M["b"].add(S["b"]),F(),r["a"].config.productionTip=!1,new r["a"]({router:I,store:P["a"],render:function(e){return e(_)}}).$mount("#app")},cf25:function(e,t,n){"use strict";n("fea6")},e4a6:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{staticClass:"input-text"},["checkbox"===e.type?n("input",{directives:[{name:"model",rawName:"v-model",value:e.formControl.value,expression:"formControl.value"}],attrs:{placeholder:e.name?e.name:"placeholder",name:e.name,type:"checkbox"},domProps:{checked:Array.isArray(e.formControl.value)?e._i(e.formControl.value,null)>-1:e.formControl.value},on:{keyup:function(t){return e.$emit("keyup-input",e.formControl)},blur:function(t){return e.$emit("blur-input",e.formControl)},change:function(t){var n=e.formControl.value,r=t.target,a=!!r.checked;if(Array.isArray(n)){var o=null,i=e._i(n,o);r.checked?i<0&&e.$set(e.formControl,"value",n.concat([o])):i>-1&&e.$set(e.formControl,"value",n.slice(0,i).concat(n.slice(i+1)))}else e.$set(e.formControl,"value",a)}}}):"radio"===e.type?n("input",{directives:[{name:"model",rawName:"v-model",value:e.formControl.value,expression:"formControl.value"}],attrs:{placeholder:e.name?e.name:"placeholder",name:e.name,type:"radio"},domProps:{checked:e._q(e.formControl.value,null)},on:{keyup:function(t){return e.$emit("keyup-input",e.formControl)},blur:function(t){return e.$emit("blur-input",e.formControl)},change:function(t){return e.$set(e.formControl,"value",null)}}}):n("input",{directives:[{name:"model",rawName:"v-model",value:e.formControl.value,expression:"formControl.value"}],attrs:{placeholder:e.name?e.name:"placeholder",name:e.name,type:e.type},domProps:{value:e.formControl.value},on:{keyup:function(t){return e.$emit("keyup-input",e.formControl)},blur:function(t){return e.$emit("blur-input",e.formControl)},input:function(t){t.target.composing||e.$set(e.formControl,"value",t.target.value)}}}),n("span",{staticClass:"label"},[e._v(e._s(e.label))]),n("span",{directives:[{name:"show",rawName:"v-show",value:e.formattedErros,expression:"formattedErros"}],staticClass:"error"},[e._v(e._s(e.formattedErros))]),n("span",{staticClass:"focus-bg"})])},a=[],o=n("d4ec"),i=n("bee2"),s=n("262e"),c=n("2caf"),u=(n("a15b"),n("9ab4")),l=n("60a3"),p=function(e){Object(s["a"])(n,e);var t=Object(c["a"])(n);function n(){return Object(o["a"])(this,n),t.apply(this,arguments)}return Object(i["a"])(n,[{key:"formattedErros",get:function(){var e;return null===(e=this.formControl)||void 0===e?void 0:e.errors.join(", ")}}]),n}(l["c"]);Object(u["a"])([Object(l["b"])()],p.prototype,"label",void 0),Object(u["a"])([Object(l["b"])()],p.prototype,"name",void 0),Object(u["a"])([Object(l["b"])()],p.prototype,"type",void 0),Object(u["a"])([Object(l["b"])()],p.prototype,"formControl",void 0),p=Object(u["a"])([l["a"]],p);var f=p,h=f,d=n("2877"),m=Object(d["a"])(h,r,a,!1,null,null,null);t["default"]=m.exports},fea6:function(e,t,n){}});
//# sourceMappingURL=app.db5be5e8.js.map