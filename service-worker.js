"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/stream-2/index.html","de9b636cb4335f219ca5d4b413165a65"],["/stream-2/static/css/main.f7b545c6.css","f2a5d62fe8c287238790bdfd391b7d17"],["/stream-2/static/js/main.ac2b208d.js","e3aae41801c78374a966c9381e43dd09"],["/stream-2/static/media/ben.2713d020.png","2713d0208b432795cac6f60a1d7eace6"],["/stream-2/static/media/chris.c6f306bf.jpg","c6f306bf63bad19376491a4c2ceb6c7c"],["/stream-2/static/media/crx.de93e612.png","de93e6122af9b3f389ff3caea009fd44"],["/stream-2/static/media/facebook.91a05338.svg","91a053380208b6b1d29f510ecd0078bf"],["/stream-2/static/media/instagram.bc1ac4fd.svg","bc1ac4fdd0f7528999fa28fb83edf8e9"],["/stream-2/static/media/intro.587ac62e.png","587ac62e7f06d6a4cf72be266032c376"],["/stream-2/static/media/logo.2da15543.svg","2da15543a77ac8438d578e9ed942b14c"],["/stream-2/static/media/logo_simple.b4a2e29c.svg","b4a2e29c73fa790407aaf8fcfabe2668"],["/stream-2/static/media/performers.cfd71eff.svg","cfd71effdf5b19910841042a9ae2e751"],["/stream-2/static/media/solution.8a01d657.svg","8a01d657f28bd7d854d9a1dca33547c0"],["/stream-2/static/media/story.b8bd781e.svg","b8bd781ef2f448e4740d634a0c68d475"],["/stream-2/static/media/twitter.92593f47.svg","92593f47a6076cdf884701bdd8a8a1b2"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),n=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var r=new Request(a,{credentials:"same-origin"});return fetch(r).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/stream-2/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});