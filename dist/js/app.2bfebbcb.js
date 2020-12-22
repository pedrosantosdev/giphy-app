(function(e){function t(t){for(var r,o,c=t[0],s=t[1],u=t[2],l=0,g=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&g.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);f&&f(t);while(g.length)g.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},i=[];function o(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-2d0e95df":"4eb84f52"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var i,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=o(e);var u=new Error;i=function(t){s.onerror=s.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",u.name="ChunkLoadError",u.type=r,u.request=i,n[1](u)}a[e]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:s})}),12e4);s.onerror=s.onload=i,document.head.appendChild(s)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/giphy-app/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var f=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"1e31":function(e,t,n){e.exports=n.p+"img/loading.8adbf433.svg"},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r,a=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"is-hidden",attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")])],1),n("router-view"),n("Notification")],1)},o=[],c=n("d4ec"),s=n("262e"),u=n("2caf"),l=n("9ab4"),f=n("60a3"),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"fade"}},[e.show?n("div",{staticClass:"notification",class:e.bgColor},[e._v("Hi There")]):e._e()])},d=[],h=n("bee2");(function(e){e["Alert"]="alert",e["Info"]="info",e["Success"]="success",e["Warning"]="warning"})(r||(r={}));var p=function(e){Object(s["a"])(n,e);var t=Object(u["a"])(n);function n(){var e;return Object(c["a"])(this,n),e=t.apply(this,arguments),e.show=!1,e.msg="Ops",e.type=r.Alert,e.time=1e3,e}return Object(h["a"])(n,[{key:"bgColor",get:function(){return"bg-".concat(this.type)}}]),n}(a["a"]),A=p,m=n("2877"),b=Object(m["a"])(A,g,d,!1,null,null,null),v=b.exports,w=function(e){Object(s["a"])(n,e);var t=Object(u["a"])(n);function n(){return Object(c["a"])(this,n),t.apply(this,arguments)}return n}(a["a"]);w=Object(l["a"])([Object(f["a"])({components:{Notification:v}})],w);var O=w,j=O,y=(n("cf25"),Object(m["a"])(j,i,o,!1,null,null,null)),k=y.exports,B=n("9483");Object(B["a"])("".concat("/giphy-app/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7");var H=n("8c4f"),x=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("Navbar",{on:{search:e.onSearch}}),r("transition",{attrs:{name:"fade",mode:"out-in"}},[e.imgs.length||e.isLoading?r("div",{key:"GridImages",staticClass:"container",attrs:{id:"GridImages"}},[e._l(e.imgs,(function(e,t){return r("Gif",{key:t,attrs:{url:e.images.downsized.url}})})),r("div",{class:{"is-hidden":!e.isLoading},attrs:{id:"loading"}},[r("img",{attrs:{src:n("1e31"),alt:"Loading Animation"}})])],2):r("div",{key:"Empty-Results",staticClass:"full-size"},[r("h1",[e._v("No results found")])])])],1)},C=[],E=(n("4160"),n("ac1f"),n("5319"),n("841c"),n("159b"),n("96cf"),n("1da1")),S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("figure",[n("img",{attrs:{src:e.url,crossorigin:"Anonymous",loading:"lazy"}})])},M=[],T=function(e){Object(s["a"])(n,e);var t=Object(u["a"])(n);function n(){return Object(c["a"])(this,n),t.apply(this,arguments)}return n}(a["a"]);Object(l["a"])([Object(f["b"])()],T.prototype,"url",void 0),T=Object(l["a"])([f["a"]],T);var D=T,J=D,N=Object(m["a"])(J,S,M,!1,null,null,null),P=N.exports,z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"navbar"},[e._m(0),n("div",{staticClass:"search"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.searchText,expression:"searchText"}],staticClass:"input",attrs:{type:"text",placeholder:"Search"},domProps:{value:e.searchText},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.$emit("search",e.searchText)},input:function(t){t.target.composing||(e.searchText=t.target.value)}}}),n("button",{staticClass:"btn",on:{click:function(t){return e.$emit("search",e.searchText)}}},[n("i",{staticClass:"fas fa-search"})])])])},I=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"logo"},[r("img",{attrs:{src:n("cf05"),alt:"Home Logo",loading:"lazy"}})])}],L={data:function(){return{searchText:""}}},Q=L,G=Object(m["a"])(Q,z,I,!1,null,null,null),R=G.exports,X=(n("99af"),n("5530")),U=n("bc3a"),_=n.n(U),F=function(){function e(){Object(c["a"])(this,e),this.apikey="gD8d7HmBLpKfqxO2T612MwmMWMeLzzlF",this.uri="//api.giphy.com/v1/gifs",this.defaultParams={api_key:this.apikey}}return Object(h["a"])(e,[{key:"getSearch",value:function(){var e=Object(E["a"])(regeneratorRuntime.mark((function e(){var t,n,r,a,i,o,c,s,u,l=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=l.length>0&&void 0!==l[0]?l[0]:1,n=l.length>1&&void 0!==l[1]?l[1]:25,r=l.length>2&&void 0!==l[2]?l[2]:"",a=l.length>3&&void 0!==l[3]?l[3]:"g",i=(t-1)*n,o=r.length?"search":"trending",c=Object(X["a"])(Object(X["a"])({},this.defaultParams),{},{limit:n,offset:i,rating:a}),s="".concat(this.uri,"/").concat(o),r.length&&(c=Object(X["a"])(Object(X["a"])({},c),{},{q:r})),u=_.a.get(s,{params:c}).then((function(e){return e.data})),e.abrupt("return",u);case 11:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"getSuggestions",value:function(){var e=Object(E["a"])(regeneratorRuntime.mark((function e(){var t,n,r,a,i,o,c,s=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=s.length>0&&void 0!==s[0]?s[0]:1,n=s.length>1&&void 0!==s[1]?s[1]:25,r=s.length>2&&void 0!==s[2]?s[2]:"",a=(t-1)*n,i=Object(X["a"])(Object(X["a"])({},this.defaultParams),{},{limit:n,offset:a,q:r}),o="".concat(this.uri,"/search/tags"),c=_.a.get(o,{params:i}).then((function(e){return e.data})),e.abrupt("return",c);case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}]),e}(),W=function(e){Object(s["a"])(n,e);var t=Object(u["a"])(n);function n(){var e;return Object(c["a"])(this,n),e=t.call(this),e.imgs=[],e.page=e.$route.params.page?parseInt(e.$route.params.page,10):1,e.isLoading=!1,e.search="",e.limit=25,e.max=e.limit,e.hasMore=!0,e.giphyService=new F,e}return Object(h["a"])(n,[{key:"onSearch",value:function(e){this.page=1,this.max=this.limit,this.imgs=[],this.search=e,this.getGifs()}},{key:"getGifs",value:function(){var e=Object(E["a"])(regeneratorRuntime.mark((function e(){var t,n=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.isLoading=!0,e.next=3,this.giphyService.getSearch(this.page,this.limit,this.search).finally((function(){return n.isLoading=!1}));case 3:t=e.sent,this.appendImages(t.data);case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"appendImages",value:function(e){var t=this;e.forEach((function(e){return t.imgs.push(e)}))}},{key:"scroll",value:function(){var e=this;window.onscroll=function(){var t=document.documentElement.scrollTop+window.innerHeight,n=t+.4*window.innerHeight>=document.documentElement.offsetHeight;n&&e.hasMore&&(e.page+=1,e.getGifs())}}},{key:"beforeMounted",value:function(){isNaN(this.page)&&this.$router.replace("/not-found")}},{key:"mounted",value:function(){this.getGifs(),this.scroll()}}]),n}(a["a"]);W=Object(l["a"])([Object(f["a"])({components:{Gif:P,Navbar:R}})],W);var q=W,Y=q,V=Object(m["a"])(Y,x,C,!1,null,null,null),Z=V.exports;a["a"].use(H["a"]);var K=[{path:"/",name:"Home",component:Z},{path:"/page/:page",name:"Home Page Number",component:Z},{path:"*",name:"404",component:function(){return n.e("chunk-2d0e95df").then(n.bind(null,"8cdb"))}}],$=new H["a"]({mode:"history",base:"/giphy-app/",routes:K}),ee=$,te=n("2f62");a["a"].use(te["a"]);var ne=new te["a"].Store({state:{},mutations:{},actions:{},modules:{}}),re=n("ecee"),ae=n("c074");re["a"].watch(),re["b"].add(ae["a"]),a["a"].config.productionTip=!1,new a["a"]({router:ee,store:ne,render:function(e){return e(k)}}).$mount("#app")},cf05:function(e,t){e.exports="data:image/png;base64,iVBORwoaCgAAAA1JSERSAAAAnAAAAJwIBgAAAIq4wk0AAAVWSURBVHhe7d3dWeMwEIXh0AmdUQR1UASdcUEfu48TwgPBtjQj+Xik+bhdWz9nXo8TLwlPn5+f/y78kIAogSfAiZJmmmsCgAOCNAHASeNmMsBhQJoA4KRxMxngMCBNAHDSuJkMcBiQJgA4adxMBjgMSBMAnDRuJgMcBqQJAE4aN5MBDgPSBAAnjZvJAIcBaQJhwD2/vEg3rp7s4/1dPWXI+UKAmx3bUnnA3fwDTtQHAAc4EbXbNGvgnl9fLx9vb9J1nD0ZHU5UgS1wV4yJ0AEuALhM6AAXBFwWdIALBC4DOsAFAzc7OsAFBDczOsAFBTcrOsAFBjcjOsAFBzcbOsANAG4mdIAbBNws6AA3ELgZ0AFuMHCjowPcgOBGRge4QcGNig5wA4MbER3gBgc3GjrATQBuJHSAmwTcKOgANxG4EdABbjJw0dEBbkJwkdEBTgTuimDl0/fLRwWP+on4aTDAHVXtlXG3PgydCR3gAoATLuH0qQAnLkH2r3wAHOCkCQBOGvdtssxdDnAngLtPmREe4E4Ep546AnDAqat+4nyA+wo/wzdgnujse2rAAU7qEHCAA5w0AcBJ46bDAQ5w0gQAJ42bDgc4wEkTAJw0bjoc4AAnTQBw0rjpcIADnDQBwEnjpsMBDnDSBAAnjZsOBzjASRMAnDRuOhzgACdNAHDSuOlwgAOcNAHASeOmwwEOcNIEACeNmw4HOMBJEwCcNG46HOAAJ00AcNK46XCAA5w0AcBJ46bDAQ5w0gQAJ42bDgc4wEkTAJw0bjoc4AAnTQBw0rjpcIADnDQBwEnjpsMBDnDSBAAnjZsO1wlcbZC135ZeO55Vy9r8M8xlyWH4v9PgKVgJnmfMmtABd7kMC64VxR661rG38AFuUHC9QGyh6zX+IzzAAW61GQGu5gWC75jhbqm9MczadZT7stCbCpznFll6A7EW5hb6nmNZirh2LOB2ErQUylts73lngrPkUgO0992hZs7HY4bqcHuBlYrTcu5jaAq8y5ylPVkLDjjjg9+WQgMuxp8+n6LD1XaCFrA/u0mvcZYxe14IpY5HhxN2uL3i1oK9FxRwJdrb/56qw/lj+n0m4PxJAs6RHeAcoX2dAjhHdoBzhAY4f2iA82dHh3NkBzhHaHQ4f2iA82c3bYezPHOK+ljEU9Yzfs/Psk7AOf4LSdXhLIW8Hwu4itRqO4yl0HS4v8FbMqkom+sQOhwdzgXHexLgAOe14zoPcIBzwfGeNC24tUAsrwH3Au01zjIHvy3ipdtw3hFvGgDHm4ZNkoBbj6Y2l9prnXepX0nVBtt6K2s9/17YXuNwS629VDofBzg6XGdS+8MBDnCA20mAW6qfB49FAj+Hq+38teXnTYPwTUPP5110uFrif4+bosMt2yp1AwWS0hoszwZr9mQtOx3O2OH2HiN4fy2nJ5KeYwHOejkZjrcUqnSVPo5lPb70bMywrT+HWr9gxpJLzbpKWdSM0XrMULfUIzBYEbQEbp0LcC1p75xrDbbXlbo1b6/xH7cMuMTfgOl9zddyzQFuUHCtt9ZSR6XDtVxW++cO9xrucTtWHCVsrZj34qbDDdzhrPBqoB13XccY2XpxHrHq4TvcEaHMOibgHA9+Z8Wg2BfgAKdw9j0H4AAHOGkCgJPGTYcDHOCkCfyYjMcWxyYfobstOwzxWOTYqBk9UgKAi1SNBGsBXIIiR9oi4CJVI8FaAJegyJG2CLhI1UiwFsAlKHKkLQIuUjUSrAVwCYocaYuAi1SNBGsBXIIiR9oi4CJVI8FaAJegyJG2CLhI1UiwFsAlKHKkLQIuUjUSrAVwCYocaYv/AQIWshwRXmwrAAAAAElFTkSuQmCC"},cf25:function(e,t,n){"use strict";n("fea6")},fea6:function(e,t,n){}});
//# sourceMappingURL=app.2bfebbcb.js.map