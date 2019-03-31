/**
 * swoff.js
 * A Service Worker that provides offline usage by caching GET responses.
 *
 * @version 1.0.0
 * @author Nim Jayawardena - Feel free to bother me with questions!
 */


const CACHE_NAME = 'peachytools8';


/**
 * Only URL listed in URL_CACHE_INFO will be cached.
 * Only GET requests will be cached.
 *
 * @typedef {Object} UrlCacheInfo
 * @property {string} url
 * @property {boolean} cacheAsap - If true, Swoff will cache as soon as possible.
 */
const URL_CACHE_INFO = [
  { url: '/', cacheAsap: true },

  // Tools
  { url: '/bingo-generator' },
  { url: '/character-counter' },
  { url: '/charades-generator' },
  { url: '/combinations-generator' },
  { url: '/exam-timer' },
  { url: '/permutations-generator' },
  { url: '/pictionary-generator' },
  { url: '/random-number-generator' },
  { url: '/recipe-converter' },

  // JS
  { url: '/js/v8/peachytools.js', cacheAsap: true },
  { url: '/js/v8/bingo-generator.peachytools.js' },
  { url: '/js/v8/character-counter.peachytools.js' },
  { url: '/js/v8/charades-generator.peachytools.js' },
  { url: '/js/v8/combinations-generator.peachytools.js' },
  { url: '/js/v8/exam-timer.peachytools.js' },
  { url: '/js/v8/permutations-generator.peachytools.js' },
  { url: '/js/v8/pictionary-generator.peachytools.js' },
  { url: '/js/v8/random-number-generator.peachytools.js' },
  { url: '/js/v8/recipe-converter.peachytools.js' },

  { url: '/css/peachytools.css?v=8', cacheAsap: true },
  { url: '/favicon.png', cacheAsap: true },
  { url: '/img/favicon-192.png', cacheAsap: true },
];


const LOG = true; // Disable/Enable console.log()s as you like.


function log(msg) {
  if (LOG) {
    console.log(`%cSwoff %c${msg}`, 'text-shadow: 0px 0px 5px #79dc64;', '');
  }
}


function main() {
  log('Running...');
  self.addEventListener('install', (event) => {
    log('Installing...');
    cacheAsaps(event);
  });
  interceptFetches();
}


/**
 * @param {string} relUrl - Something like "/path/to/file".
 * @returns {string} - Something like "https://my-app.com/path/to/file"
 */
function relUrlToAbsUrl(relUrl) {
  return location.origin + relUrl;
}


function getUrlCacheInfo(url) {
  log(`getUrlCacheInfo(${url})`);
  return URL_CACHE_INFO.find((urlInfo) => {
    const absoluteUrl = relUrlToAbsUrl(urlInfo.url);
    return absoluteUrl === url;
  });
}


function cacheAsaps() {
  return caches.open(CACHE_NAME).then((cache) => {
    const urlsToCache = URL_CACHE_INFO
      .filter(urlInfo => urlInfo.cacheAsap)
      .map(urlInfo => urlInfo.url);
    // TODO: See if there's a cleaner way to handle empty urlsToCache.
    log(`Caching all of ${urlsToCache.join(', ')}.`);
    return cache.addAll(urlsToCache);
  });
}


function interceptFetches() {
  self.addEventListener('fetch', (event) => {
    log(`Intercepting fetch of ${event.request.url}`);
    const interception = fetchFromNetwork(event.request)
      .catch(() => fetchFromCache(event.request));
    event.respondWith(interception);
  });
}


function fetchFromNetwork(request) {
  return new Promise((resolve, reject) => {
    if (!navigator.onLine) {
      log('We are offline.');
      return reject();
    }

    const timeoutId = setTimeout(reject, 5000);
    let fetchedResponse = null;

    log(`Fetching from network ${request.url}.`);
    fetch(request)
      .then((response) => {
        fetchedResponse = response;
        clearTimeout(timeoutId);
        return cacheUrl(request.url);
      })
      .then(() => resolve(fetchedResponse));
  });
}


function fetchFromCache(request) {
  log(`Fetching from cache: ${request.url}.`);
  return caches.open(CACHE_NAME)
    .then(cache => cache.match(request))
    .then((matching) => {
      if (!matching) { log(`Cache missed for ${request.url}.`); }
      return matching || Promise.reject();
    });
}


function cacheUrl(url) {
  return caches.open(CACHE_NAME).then((cache) => {
    const cacheInfo = getUrlCacheInfo(url);
    if (cacheInfo) {
      log(`Caching ${url}.`);
      return cache.add(url);
    }
    log(`Not caching ${url}.`);
  });
}


try {
  main();
} catch (err) {
  log('Failed to run.');
}
