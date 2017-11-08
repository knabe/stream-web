"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","16f003a249517badb210907817c7cd35"],["/static/css/main.1a5266e9.css","a1f641232695dc05527879716aa610d0"],["/static/js/main.a156a646.js","d02e6f87c76aff283bba042df026191f"],["/static/media/BanklessTimes.dfe12d68.png","dfe12d6858a12d8b5e90a1de8de70a6c"],["/static/media/CoinDesk.1b041462.png","1b041462bc077a6b6ccc9d33f4c94ec7"],["/static/media/Forbes.b9710dc3.png","b9710dc3e09e9cd33a244ae86c1b9654"],["/static/media/HuffPost.91164528.png","91164528a19427ecc2232e04afd2bdd3"],["/static/media/TechStartups.51bc4853.png","51bc4853bec30299b251e3b57624102a"],["/static/media/ben.5b8b6b0d.png","5b8b6b0d30b2f40ad645cca86cbc4425"],["/static/media/chris.4135083e.png","4135083effa67d68be01cadf8f5d2976"],["/static/media/crx.8ec74569.png","8ec745699280e7a214dbd538f76a798e"],["/static/media/facebook.91a05338.svg","91a053380208b6b1d29f510ecd0078bf"],["/static/media/fenbushi_logo.ac820105.png","ac8201053e06e2f1f2d3294d42380fec"],["/static/media/greg.ef1d5687.png","ef1d568719febffbe570e75fa0599cd0"],["/static/media/instagram.bc1ac4fd.svg","bc1ac4fdd0f7528999fa28fb83edf8e9"],["/static/media/intro.228b7008.png","228b70088a37b5b4f1c3434423d0b379"],["/static/media/logo.2da15543.svg","2da15543a77ac8438d578e9ed942b14c"],["/static/media/logo_simple.b4a2e29c.svg","b4a2e29c73fa790407aaf8fcfabe2668"],["/static/media/performers.cfd71eff.svg","cfd71effdf5b19910841042a9ae2e751"],["/static/media/simar.af8c8a3e.png","af8c8a3eb4800f53655a5794f2c52f07"],["/static/media/solution.8a01d657.svg","8a01d657f28bd7d854d9a1dca33547c0"],["/static/media/story.b8bd781e.svg","b8bd781ef2f448e4740d634a0c68d475"],["/static/media/telegram.dd49c919.svg","dd49c919a77f62cde1db4e9409e86922"],["/static/media/twitter.92593f47.svg","92593f47a6076cdf884701bdd8a8a1b2"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});