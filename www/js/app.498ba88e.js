(function(n){function e(e){for(var t,r,d=e[0],i=e[1],u=e[2],s=0,h=[];s<d.length;s++)r=d[s],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&h.push(o[r][0]),o[r]=0;for(t in i)Object.prototype.hasOwnProperty.call(i,t)&&(n[t]=i[t]);f&&f(e);while(h.length)h.shift()();return a.push.apply(a,u||[]),c()}function c(){for(var n,e=0;e<a.length;e++){for(var c=a[e],t=!0,r=1;r<c.length;r++){var i=c[r];0!==o[i]&&(t=!1)}t&&(a.splice(e--,1),n=d(d.s=c[0]))}return n}var t={},o={app:0},a=[];function r(n){return d.p+"js/"+({about:"about","stencil-polyfills-css-shim":"stencil-polyfills-css-shim","stencil-polyfills-dom":"stencil-polyfills-dom"}[n]||n)+"."+{about:"f2823b55","chunk-01e28590":"b1377347","chunk-0471966a":"882f3daf","chunk-06caf0de":"8ae07cc9","chunk-0867d75f":"34a9ef8f","chunk-09cd0b70":"6f49170a","chunk-0a1eaca9":"1cf11452","chunk-0e072455":"bf710dee","chunk-0ffeab9f":"7150db4a","chunk-198e3942":"e0ee9383","chunk-1f16206c":"5eb3f3a0","chunk-1fbf062e":"781764d3","chunk-245db3ed":"b08d1189","chunk-268044d4":"6c2bac45","chunk-28a9e288":"cb331cb7","chunk-29757256":"6b029e7e","chunk-2a9b8bee":"48f32253","chunk-2aed0630":"9536cfa0","chunk-2d0aa1e4":"7ffc2a05","chunk-2d0ac931":"09ca39d7","chunk-2d0b20f8":"399963b1","chunk-2d0b9671":"e97aed71","chunk-2d0bdd44":"fc987283","chunk-2d0be327":"56ef3de8","chunk-2d0c0883":"4451a516","chunk-2d0c211b":"61242aa4","chunk-2d0c952b":"8112bc15","chunk-2d0cf315":"8f207d6a","chunk-2d0e1b06":"35074b90","chunk-2d0e9079":"27076129","chunk-2d0f060d":"40262321","chunk-2d0f0814":"4cf347e0","chunk-2d0f14f4":"05edcaf7","chunk-2d2095dd":"0cd32346","chunk-2d20fcba":"ad683338","chunk-2d213925":"6899b470","chunk-2d2140aa":"21ef09ee","chunk-2d217def":"2291ad8f","chunk-2d218418":"2801f6db","chunk-2d21a9aa":"0f3cb067","chunk-2d21e3aa":"bad48056","chunk-2d222525":"503597a1","chunk-2d222cca":"4193359a","chunk-2d22895d":"f8983873","chunk-2d2304b6":"ae79b9dc","chunk-2d23721e":"65a7d41b","chunk-3172533a":"85d9f095","chunk-32cdbffc":"3865f9f7","chunk-36da2acc":"9f5ba752","chunk-37ff8997":"2d213f8b","chunk-3b7db6f5":"61f45abd","chunk-3bd70db3":"5771d945","chunk-407ff52c":"3cc1fc1d","chunk-41729f35":"94cf1bde","chunk-41c90a6b":"c62d7be4","chunk-45636d0e":"e45a1afd","chunk-45df0daa":"96bda33a","chunk-469a106c":"d8e80bae","chunk-4960e528":"6f75a4f0","chunk-4d93dcb2":"2030cef7","chunk-4da36b15":"8a0a5e25","chunk-4f3678b7":"90af9a08","chunk-517be0f2":"d6ccbb9f","chunk-55fd9bc5":"c2ddf476","chunk-57a83ac0":"abb9c28d","chunk-5b23fdd4":"155fcbf2","chunk-6435f914":"e36be9b6","chunk-658c23da":"af06fe01","chunk-6a5dbffb":"45afe18a","chunk-6ae2b080":"68ac0353","chunk-6d44dfd7":"bf6dde96","chunk-6d941db0":"5be0b15d","chunk-6da41528":"9faa8add","chunk-6da41684":"16460d8e","chunk-784b7358":"d441c56e","chunk-793ec3d8":"5d46fc6f","chunk-7a234d26":"252fdc2a","chunk-7d21e4da":"4f645838","chunk-882768b0":"5c93aaa5","chunk-91f17c44":"51097387","chunk-972e2b1c":"466742b7","chunk-9f295fda":"d0657b45","chunk-a92a499c":"dc2eb462","chunk-a92d751a":"5c3c03b8","chunk-a9543e8c":"78c3df6b","chunk-a9591d90":"e2e640c8","chunk-ae124cc0":"28d7910d","chunk-bd819d48":"fa665d56","chunk-c377db64":"13f1cb29","chunk-d6be8784":"38d03c5d","chunk-dada39de":"f4d33b04","chunk-dd32cf7c":"568c0d13","chunk-de1eb938":"fd5ac7d2","chunk-dffd094a":"0271317b","chunk-ea2d3954":"2122fda6","chunk-efc7162e":"3dbdfb50","chunk-f71781cc":"14ba5c43","stencil-polyfills-css-shim":"42a8611d","stencil-polyfills-dom":"1ab07d90","chunk-2d0a4d7c":"8389c8a4","chunk-2d0aad2b":"711bc097","chunk-2d0b6574":"72edd69a","chunk-2d0cc79b":"5158809e","chunk-2d0da519":"30fc83bb","chunk-2d21ef46":"ed5d2331","chunk-2d224c4a":"31ef8aa5","chunk-2d230089":"6d6c8ae1","chunk-2d0bd627":"eae5cb9f"}[n]+".js"}function d(e){if(t[e])return t[e].exports;var c=t[e]={i:e,l:!1,exports:{}};return n[e].call(c.exports,c,c.exports,d),c.l=!0,c.exports}d.e=function(n){var e=[],c=o[n];if(0!==c)if(c)e.push(c[2]);else{var t=new Promise((function(e,t){c=o[n]=[e,t]}));e.push(c[2]=t);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,d.nc&&i.setAttribute("nonce",d.nc),i.src=r(n);var u=new Error;a=function(e){i.onerror=i.onload=null,clearTimeout(s);var c=o[n];if(0!==c){if(c){var t=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;u.message="Loading chunk "+n+" failed.\n("+t+": "+a+")",u.name="ChunkLoadError",u.type=t,u.request=a,c[1](u)}o[n]=void 0}};var s=setTimeout((function(){a({type:"timeout",target:i})}),12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(e)},d.m=n,d.c=t,d.d=function(n,e,c){d.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:c})},d.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},d.t=function(n,e){if(1&e&&(n=d(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var c=Object.create(null);if(d.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var t in n)d.d(c,t,function(e){return n[e]}.bind(null,t));return c},d.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return d.d(e,"a",e),e},d.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},d.p="/",d.oe=function(n){throw console.error(n),n};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var s=0;s<i.length;s++)e(i[s]);var f=u;a.push([0,"chunk-vendors"]),c()})({0:function(n,e,c){n.exports=c("56d7")},"56d7":function(n,e,c){"use strict";c.r(e);c("e260"),c("e6cf"),c("cca6"),c("a79d");var t=c("2b0e"),o=function(){var n=this,e=n.$createElement,c=n._self._c||e;return c("div",{attrs:{id:"app"}},[c("ion-app",[c("ion-vue-router",{attrs:{id:"main"}})],1)],1)},a=[],r=(c("5c0b"),c("2877")),d={},i=Object(r["a"])(d,o,a,!1,null,null,null),u=i.exports,s=c("9483");Object(s["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(n){console.error("Error during service worker registration:",n)}});c("d3b7");var f=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ion-page",[t("ion-header",[t("ion-toolbar",{staticClass:"toolbar-md-primary"},[t("ion-title",[n._v("HomePage")])],1)],1),t("ion-content",{staticClass:"content"},[t("div",{staticClass:"home"},[t("img",{attrs:{alt:"Vue logo",src:c("cf05")}}),t("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)])],1)},h=[],b=function(){var n=this,e=n.$createElement,c=n._self._c||e;return c("div",{staticClass:"ion-padding"},[c("ion-list",[c("ion-list-header",{attrs:{lines:"inset"}},[c("ion-label",[n._v(" Tickets ")])],1),n._l(n.tickets,(function(e){return c("ion-item",{key:"ticket-"+e.id},[c("ion-text",[c("span",[n._v("#"+n._s(e.id))]),c("span",[n._v(n._s(e.name))])]),c("ion-badge",{attrs:{slot:"end",color:"primary"},slot:"end"},[n._v(" "+n._s(e.messages_count)+" ")])],1)})),c("ion-item",{attrs:{slot:"end"},slot:"end"},[c("ion-button",{on:{click:n.loadMore}},[c("ion-icon",{attrs:{name:"add-circle"}})],1)],1),0==n.tickets.length?c("div",{staticClass:"ion-padding custom-skeleton"},[c("ion-skeleton-text",{attrs:{animated:""}})],1):n._e()],2)],1)},k=[],l=(c("4160"),c("159b"),c("96cf"),c("1da1")),p=c("bc3a"),m=c.n(p),y={name:"HelloWorld",data:function(){return{tickets:[]}},mounted:function(){var n=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.load();case 2:case"end":return e.stop()}}),e)})))()},methods:{load:function(){var n=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){var c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("http://dmv.test/api/debug/tickets");case 2:c=e.sent,c&&(window.console.log(c.data.tickets),n.$set(n.$data,"tickets",c.data.tickets));case 4:case"end":return e.stop()}}),e)})))()},loadMore:function(){var n=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){var c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("http://dmv.test/api/debug/tickets?more=true");case 2:c=e.sent,c&&(window.console.log(c.data.tickets),c.data.tickets.forEach((function(e){n.tickets.push(e)})));case 4:case"end":return e.stop()}}),e)})))()}}},j=y,v=Object(r["a"])(j,b,k,!1,null,"47429b01",null),g=v.exports,_={name:"Home",components:{HelloWorld:g}},w=_,O=Object(r["a"])(w,f,h,!1,null,null,null),x=O.exports,E=c("481b");t["a"].use(E["a"]);var P=[{path:"/",name:"Home",component:x},{path:"/about",name:"About",component:function(){return c.e("about").then(c.bind(null,"f820"))}}],C=new E["a"]({mode:"history",base:"/",routes:P}),M=C,N=c("2f62");t["a"].use(N["a"]);var T=new N["a"].Store({state:{},mutations:{},actions:{},modules:{}}),S=c("8537");c("24ec"),c("95ad");t["a"].use(E["b"]),t["a"].config.productionTip=!1,t["a"].config.ignoredElements.push(/^ion-/),new t["a"]({router:M,store:T,render:function(n){return n(u)}}).$mount("#app"),Object(S["a"])(window)},"5c0b":function(n,e,c){"use strict";var t=c("9c0c"),o=c.n(t);o.a},"5c3f":function(n,e,c){var t={"./pwa-action-sheet.entry.js":["cfc4","chunk-2d222cca"],"./pwa-camera-modal-instance.entry.js":["fa8e","chunk-2d23721e"],"./pwa-camera-modal.entry.js":["4977","chunk-2d0c211b"],"./pwa-camera.entry.js":["da8b","chunk-2d22895d"],"./pwa-toast.entry.js":["6357","chunk-2d0cf315"]};function o(n){if(!c.o(t,n))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=t[n],o=e[0];return c.e(e[1]).then((function(){return c(o)}))}o.keys=function(){return Object.keys(t)},o.id="5c3f",n.exports=o},"9c0c":function(n,e,c){},a334:function(n,e,c){var t={"./ion-icon.entry.js":["593d","chunk-2d0c952b"]};function o(n){if(!c.o(t,n))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=t[n],o=e[0];return c.e(e[1]).then((function(){return c(o)}))}o.keys=function(){return Object.keys(t)},o.id="a334",n.exports=o},cf05:function(n,e,c){n.exports=c.p+"img/logo.82b9c7a5.png"},ed97:function(n,e,c){var t={"./ion-action-sheet-controller_8.entry.js":["0d7e","chunk-0e072455"],"./ion-action-sheet-ios.entry.js":["6039","chunk-4f3678b7"],"./ion-action-sheet-md.entry.js":["2a5b","chunk-dffd094a"],"./ion-alert-ios.entry.js":["86e0","chunk-41729f35"],"./ion-alert-md.entry.js":["aab5","chunk-45df0daa"],"./ion-app_8-ios.entry.js":["daa4","chunk-407ff52c"],"./ion-app_8-md.entry.js":["d81a","chunk-01e28590"],"./ion-avatar_3-ios.entry.js":["7636","chunk-4da36b15"],"./ion-avatar_3-md.entry.js":["9ace","chunk-245db3ed"],"./ion-back-button-ios.entry.js":["76f7","chunk-4d93dcb2"],"./ion-back-button-md.entry.js":["bf96","chunk-268044d4"],"./ion-backdrop-ios.entry.js":["9bb0","chunk-2d0f060d"],"./ion-backdrop-md.entry.js":["3394","chunk-2d0b9671"],"./ion-button_2-ios.entry.js":["60a1","chunk-7a234d26"],"./ion-button_2-md.entry.js":["062c","chunk-57a83ac0"],"./ion-card_5-ios.entry.js":["df70","chunk-bd819d48"],"./ion-card_5-md.entry.js":["41e5","chunk-469a106c"],"./ion-checkbox-ios.entry.js":["aada","chunk-7d21e4da"],"./ion-checkbox-md.entry.js":["2f4c","chunk-6435f914"],"./ion-chip-ios.entry.js":["7fbb","chunk-6d941db0"],"./ion-chip-md.entry.js":["af74","chunk-29757256"],"./ion-col_3.entry.js":["7c04","chunk-2d0e1b06"],"./ion-datetime_3-ios.entry.js":["eed0","chunk-de1eb938"],"./ion-datetime_3-md.entry.js":["cabb","chunk-972e2b1c"],"./ion-fab_3-ios.entry.js":["4e51","chunk-0471966a"],"./ion-fab_3-md.entry.js":["38d3","chunk-3172533a"],"./ion-img.entry.js":["acf3","chunk-2d213925"],"./ion-infinite-scroll_2-ios.entry.js":["2803","chunk-a9591d90"],"./ion-infinite-scroll_2-md.entry.js":["b7c2","chunk-a92d751a"],"./ion-input-ios.entry.js":["5096","chunk-198e3942"],"./ion-input-md.entry.js":["2d16","chunk-ae124cc0"],"./ion-item-option_3-ios.entry.js":["c563","chunk-09cd0b70"],"./ion-item-option_3-md.entry.js":["3286","chunk-658c23da"],"./ion-item_8-ios.entry.js":["1af7","chunk-5b23fdd4"],"./ion-item_8-md.entry.js":["7c02","chunk-2a9b8bee"],"./ion-loading-ios.entry.js":["4d5d","chunk-0867d75f"],"./ion-loading-md.entry.js":["b6df","chunk-882768b0"],"./ion-menu_4-ios.entry.js":["9936","chunk-28a9e288"],"./ion-menu_4-md.entry.js":["9d0e","chunk-0ffeab9f"],"./ion-modal-ios.entry.js":["9cc9","chunk-784b7358"],"./ion-modal-md.entry.js":["c8bc","chunk-91f17c44"],"./ion-nav_5.entry.js":["f487","chunk-06caf0de"],"./ion-popover-ios.entry.js":["f31f","chunk-517be0f2"],"./ion-popover-md.entry.js":["3c61","chunk-1fbf062e"],"./ion-progress-bar-ios.entry.js":["53d4","chunk-0a1eaca9"],"./ion-progress-bar-md.entry.js":["77f1","chunk-36da2acc"],"./ion-radio_2-ios.entry.js":["5547","chunk-6a5dbffb"],"./ion-radio_2-md.entry.js":["dc25","chunk-f71781cc"],"./ion-range-ios.entry.js":["353f","chunk-32cdbffc"],"./ion-range-md.entry.js":["3323","chunk-ea2d3954"],"./ion-refresher_2-ios.entry.js":["dedf","chunk-a92a499c"],"./ion-refresher_2-md.entry.js":["6b32","chunk-a9543e8c"],"./ion-reorder_2-ios.entry.js":["677e","chunk-6da41528"],"./ion-reorder_2-md.entry.js":["6733","chunk-6da41684"],"./ion-ripple-effect.entry.js":["9d3f","chunk-2d0f0814"],"./ion-route_4.entry.js":["7c90","chunk-793ec3d8"],"./ion-searchbar-ios.entry.js":["9083","chunk-1f16206c"],"./ion-searchbar-md.entry.js":["5716","chunk-37ff8997"],"./ion-segment_2-ios.entry.js":["747c","chunk-c377db64"],"./ion-segment_2-md.entry.js":["8628","chunk-9f295fda"],"./ion-select_3-ios.entry.js":["045e","chunk-4960e528"],"./ion-select_3-md.entry.js":["4a00","chunk-55fd9bc5"],"./ion-slide_2-ios.entry.js":["2edb","chunk-2d0be327"],"./ion-slide_2-md.entry.js":["b4c5","chunk-2d20fcba"],"./ion-spinner.entry.js":["cdda","chunk-45636d0e"],"./ion-split-pane-ios.entry.js":["103b","chunk-2d0aa1e4"],"./ion-split-pane-md.entry.js":["41d4","chunk-2d0c0883"],"./ion-tab-bar_2-ios.entry.js":["db46","chunk-6d44dfd7"],"./ion-tab-bar_2-md.entry.js":["dd4b","chunk-efc7162e"],"./ion-tab_2.entry.js":["e0cb","chunk-dada39de"],"./ion-text.entry.js":["084e","chunk-d6be8784"],"./ion-textarea-ios.entry.js":["5d19","chunk-6ae2b080"],"./ion-textarea-md.entry.js":["e136","chunk-2aed0630"],"./ion-toast-ios.entry.js":["f878","chunk-41c90a6b"],"./ion-toast-md.entry.js":["d670","chunk-3bd70db3"],"./ion-toggle-ios.entry.js":["ecc3","chunk-dd32cf7c"],"./ion-toggle-md.entry.js":["072f","chunk-3b7db6f5"],"./ion-virtual-scroll.entry.js":["ec57","chunk-2d2304b6"]};function o(n){if(!c.o(t,n))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=t[n],o=e[0];return c.e(e[1]).then((function(){return c(o)}))}o.keys=function(){return Object.keys(t)},o.id="ed97",n.exports=o}});
//# sourceMappingURL=app.498ba88e.js.map