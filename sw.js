var appVersion = 'v1.00';
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
var cdn = 'cdn.souravrajbiswas.com';
var passToCdn = [
    'sw.js',
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(appVersion)
        .then(function(cache) {
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', function(event) {
    if (event.request.url.includes(passToCdn)) {
        console.log('includes passToCdn');
        var requestUrl = event.request.url;
        var domain = requestUrl.hostname;
        if (domain != cdn) {
            console.log('domain != cdn');
            var url = requestUrl.toString();
            console.log(url);
            var target = url.replace(domain, cdn);
            console.log(target);
            var newRequest = new Request(target);
            console.log(newRequest);
            event.respondWith(
                fetch(newRequest)
                .then(function(response) {
                    if (response) {
                        return response;
                        console.log('newRequest Ok');
                    }
                    return fetch(event.request);
                    console.log('newRequest Faild');
                }));

        } else {
            console.log('domain == cdn');
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
    } else {
        console.log('not passToCdn');
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
