"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","aed4238eaa2c81fa6ea0750210490223"],["/static/css/main.8e021999.css","dceda0f52368a2c65d14bab328e999e7"],["/static/js/main.a9e0429f.js","65c5714a5d0613914c93061f82e029bc"],["/static/media/ben.5e93069f.png","5e93069f9281343d0f2a1d1b2e8ad8e1"],["/static/media/chris.e2ada8f4.png","e2ada8f459ee79831adb846e09157b29"],["/static/media/facebook.09e83921.svg","09e839219c818f76ee557d4389ef43eb"],["/static/media/greg.7034bae5.png","7034bae5e07179fc65e48a5f5a063530"],["/static/media/instagram.93334058.svg","93334058cd1dc863368c25ea73e2934d"],["/static/media/intro.587ac62e.png","587ac62e7f06d6a4cf72be266032c376"],["/static/media/logo.f3a9bfb6.svg","f3a9bfb684820f4d3a351638dbe787a0"],["/static/media/logo_simple.40602cf4.svg","40602cf47296cc957ff9ababec946015"],["/static/media/performers.930ce75e.svg","930ce75e4244a4e8b74c4ba732650b71"],["/static/media/simar.97f73504.png","97f7350419d6649ed11790ac7c6c6d70"],["/static/media/solution.1252f2d7.svg","1252f2d717e1f7990bec5a312122c38f"],["/static/media/story.cb1af934.svg","cb1af9349c53b5eeb25b9a76df4c7ec6"],["/static/media/twitter.8d18b141.svg","8d18b141f1b5ea6af35ca0da3185b237"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});