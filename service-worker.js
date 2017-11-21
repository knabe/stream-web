"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","d413cea051a89f52357b06a079860532"],["/static/css/main.79737cb2.css","8611178d9c608b88489d7cd2cf7f3ae6"],["/static/js/main.176461f5.js","2de69b43a728a48a773983783abe9a8b"],["/static/media/BanklessTimes.dfe12d68.png","dfe12d6858a12d8b5e90a1de8de70a6c"],["/static/media/CoinDesk.1b041462.png","1b041462bc077a6b6ccc9d33f4c94ec7"],["/static/media/David.194ed5bd.png","194ed5bdafca9856ab942afdf8c066f8"],["/static/media/Forbes.b9710dc3.png","b9710dc3e09e9cd33a244ae86c1b9654"],["/static/media/HuffPost.91164528.png","91164528a19427ecc2232e04afd2bdd3"],["/static/media/Joey.e7da7a19.png","e7da7a192c9f9d7cfe21dd9ae01d3a3a"],["/static/media/Paul.1041a99b.png","1041a99b31ecc432ea90c81b4ccc8e8c"],["/static/media/PieChart.c62cb060.png","c62cb060bb7cda7b54e6943da72e6270"],["/static/media/Saureen.fa35727f.png","fa35727ff1f6ffce8c84ee743e6b7bc1"],["/static/media/TechStartups.51bc4853.png","51bc4853bec30299b251e3b57624102a"],["/static/media/ben.5b8b6b0d.png","5b8b6b0d30b2f40ad645cca86cbc4425"],["/static/media/chris.4135083e.png","4135083effa67d68be01cadf8f5d2976"],["/static/media/crx.8ec74569.png","8ec745699280e7a214dbd538f76a798e"],["/static/media/facebook.91a05338.svg","91a053380208b6b1d29f510ecd0078bf"],["/static/media/fenbushi_logo.ac820105.png","ac8201053e06e2f1f2d3294d42380fec"],["/static/media/greg.ef1d5687.png","ef1d568719febffbe570e75fa0599cd0"],["/static/media/instagram.bc1ac4fd.svg","bc1ac4fdd0f7528999fa28fb83edf8e9"],["/static/media/intro.228b7008.png","228b70088a37b5b4f1c3434423d0b379"],["/static/media/logo.2da15543.svg","2da15543a77ac8438d578e9ed942b14c"],["/static/media/logo_simple.b4a2e29c.svg","b4a2e29c73fa790407aaf8fcfabe2668"],["/static/media/performers.cfd71eff.svg","cfd71effdf5b19910841042a9ae2e751"],["/static/media/simar.af8c8a3e.png","af8c8a3eb4800f53655a5794f2c52f07"],["/static/media/solution.8a01d657.svg","8a01d657f28bd7d854d9a1dca33547c0"],["/static/media/story.b8bd781e.svg","b8bd781ef2f448e4740d634a0c68d475"],["/static/media/telegram.dd49c919.svg","dd49c919a77f62cde1db4e9409e86922"],["/static/media/twitter.92593f47.svg","92593f47a6076cdf884701bdd8a8a1b2"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});