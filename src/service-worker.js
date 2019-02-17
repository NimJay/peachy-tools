/**
 * This Service Worker provides offline support.
 */

// TODO: Import polyfill for cache().

try {

    console.log("SW - Running...");

    const CACHE_NAME = 'peachytools1';
    const URLS_AVAILABLE_OFFLINE = [
        '/',

        // Tools
        '/character-counter',
        '/charades-generator',
        '/exam-timer',
        '/pearson-correlation-coefficient-calculator',
        '/pictionary-generator',
        '/random-number-generator',

        // JS
        '/js/v4/peachytools.js',
        '/js/v4/0.peachytools.js',
        '/js/v4/1.peachytools.js',
        '/js/v4/2.peachytools.js',
        '/js/v4/3.peachytools.js',
        '/js/v4/4.peachytools.js',

        '/css/peachytools.css?v=4',
        '/favicon.png',
        '/img/favicon-192.png',
    ];


    // Cache URLS during serviceWorker installation.
    self.addEventListener('install', function (e) {
        e.waitUntil(
            caches.open(CACHE_NAME).then(function (cache) {
                return cache.addAll(URLS_AVAILABLE_OFFLINE);
            })
        );
    });


    // Intercept slow fetches with cache.
    self.addEventListener('fetch', function (event) {
        let interceptions = fromNetwork(event.request, 3000).catch(function () {
            return fromCache(event.request);
        });
        event.respondWith(interceptions);
    });


    function fromNetwork(request, timeout) {
        return new Promise(function (fulfill, reject) {
            var timeoutId = setTimeout(reject, timeout);
            fetch(request).then(function (response) {
                console.log("SW - fromNetwork - ", request.url);
                clearTimeout(timeoutId);
                fulfill(response);
            }, reject);
        });
    }


    function fromCache(request) {
        console.log("SW - fromCache - ", request.url);
        return caches.open(CACHE_NAME).then(function (cache) {
            return cache.match(request).then(function (matching) {
                return matching || Promise.reject('SW - fromCache - ' + request.url);
            });
        });
    }

} catch (err) {
    console.log("SW - Error: ", err);
}
