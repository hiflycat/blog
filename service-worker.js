if(!self.define){let e,i={};const s=(s,r)=>(s=new URL(s+".js",r).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,c)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let n={};const a=e=>s(e,d),o={module:{uri:d},exports:n,require:a};i[d]=Promise.all(r.map((e=>o[e]||a(e)))).then((e=>(c(...e),n)))}}define(["./workbox-d4c5e7e1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"7b3e911ee840363c755b169700d95de5"},{url:"archives/2022/01/index.html",revision:"c4055d77df09310e6683c15f80823c8f"},{url:"archives/2022/index.html",revision:"b5b5878688a89e9ca46ea58262fa67e3"},{url:"archives/index.html",revision:"bed13722c1a1a15e037a7a6bf5c08235"},{url:"categories/index.html",revision:"cf4a16875c493034cfd12515274117e6"},{url:"css/index.css",revision:"b9d59f88838e96723d5a934deaefcee5"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"images/bg.jpg",revision:"0f89ff51e4da0f70ae1aeaf3a96b6a67"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"664ea104a7f90f2cff02563033deecd7"},{url:"js/main.js",revision:"67ef93b7026979d99da673cfd9fd85de"},{url:"js/search/algolia.js",revision:"d36a279469bce7854189f9481d3d0860"},{url:"js/search/local-search.js",revision:"1685cd43da0de7abd4a649dd5b2d81db"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"9f465e7dd29ec62dbc6af321882c2b59"},{url:"link/index.html",revision:"aec6d236c12fbe06e57525b661d1240b"},{url:"posts/1243066710.html",revision:"08a8e491dc18342683176257716c393b"},{url:"tags/index.html",revision:"f1fa597288d4106565076ba089cf55e7"}],{}),e.registerRoute(/^https:\/\/www\.coopoc\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
