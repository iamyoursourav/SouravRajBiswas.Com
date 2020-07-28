var appVersion = 'v4.00';

var workerUrl = 'https://cdn.souravrajbiswas.com/sw.js';

var urlsToCache = [
    'https://1.bp.blogspot.com/-PyzQRd1mKC4/XwTLEivYvFI/AAAAAAAADgk/JUmGVGZV3igFHkC20o5aLR9fYocepBCngCK4BGAYYCw/w300/Sourav-Raj-Biswas-Logo.png',
    'https://fonts.gstatic.com/s/nunitosans/v5/pe0qMImSLYBIv1o4X1M8cfe5.woff',
    'https://fonts.gstatic.com/s/nunitosans/v5/pe0qMImSLYBIv1o4X1M8cce9I9s.woff2',
    'https://fonts.gstatic.com/s/nunitosans/v5/pe03MImSLYBIv1o4X1M8cc8GBv5p.woff',
    'https://fonts.gstatic.com/s/nunitosans/v5/pe03MImSLYBIv1o4X1M8cc8GBs5tU1E.woff2',
    'https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver%2CNodeList.prototype.forEach%2CPromise%2CArray.from%2CSet%2CArray.isArray%2CURL%2CURLSearchParams%2CXMLHttpRequest%2Cfetch%2ClocalStorage',
    'https://cdn.souravrajbiswas.com/style.css',
    '//2.bp.blogspot.com/-OMDtRcenaJc/XwKjAX_kt8I/AAAAAAAADeQ/LsY920mLp6sgk63PeJGT-4wYqE0g5umUQCK4BGAYYCw/w100-h100-p-k-no-nu/70514788_2662143583804258_2908732881427759104_o.jpg',
    'https://checkout.razorpay.com/v1/checkout.js',
];

var worker = 'worker';

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(appVersion)
        .then(function(cache) {
            return cache.addAll(urlsToCache);
        })
    );
});



self.addEventListener('activate', function(event) {
    var cachesToKeep = [appVersion, worker];
    event.waitUntil(
        caches.keys().then(function(keyList) {
            return Promise.all(keyList.map(function(key) {
                if (cachesToKeep.indexOf(key) === -1) {
                    return caches.delete(key);
                }
            }));
        })
    );
});


self.addEventListener('activate', function(event) {
    var cachesToKeep = [appVersion, worker];
    event.waitUntil(
        caches.open(worker)
        .then(function(cache) {
            cache.delete(workerUrl).then(function(response) {
                caches.open(worker).then(function(cache) {
                    return cache.add(workerUrl);
                })
            })
        }))
});


self.addEventListener('fetch', function(event) {
    if (url.origin == location.origin && url.pathname == '/sw.js') {
        var url = new URL(event.request.url);
        event.respondWith(caches.match('/sw.js'));
    } else {
        event.respondWith(
            caches.match(event.request)
            .then(function(response) {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
        );
    }

});
