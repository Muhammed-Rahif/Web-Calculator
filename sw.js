// Workbox import statement
importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.1.1/workbox-sw.js");
var staticAssets = [
  "./index.html",
  "./app.js",
  "./script.js",
  "./images/icon64.png",
  "./images/icon512.png",
];
workbox.precaching.precache(staticAssets);
workbox.routing.registerRoute(
  /.*\.(css)/,
  new workbox.strategies.CacheFirst({
    cacheName: "web-calculator-stylesheets",
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxAgeSeconds: 60 * 60 * 24 * 7, // cache for one week
        maxEntries: 20, // only cache 20 request
        purgeOnQuotaError: true,
      }),
    ],
  })
);
workbox.routing.registerRoute(
  /.*\.(js)/,
  new workbox.strategies.CacheFirst({
    cacheName: "web-calculator-Javascripts",
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxAgeSeconds: 60 * 60 * 24 * 7, // cache for one week
        maxEntries: 20, // only cache 20 request
        purgeOnQuotaError: true,
      }),
    ],
  })
);
workbox.routing.registerRoute(
  /.*\.(ttf|woff)/,
  new workbox.strategies.CacheFirst({
    cacheName: "web-calculator-Fonts",
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxAgeSeconds: 60 * 60 * 24 * 7, // cache for one week
        maxEntries: 20, // only cache 20 request
        purgeOnQuotaError: true,
      }),
    ],
  })
);
workbox.routing.registerRoute(
  /.*\.(html)/,
  new workbox.strategies.CacheFirst({
    cacheName: "web-calculator-html-documents",
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxAgeSeconds: 60 * 60 * 24 * 7,
        maxEntries: 50,
        purgeOnQuotaError: true,
      }),
    ],
  })
);
workbox.routing.registerRoute(
  /.*\.(png|jpg|jpeg|gif)/,
  new workbox.strategies.CacheFirst({
    cacheName: "web-calculator-image-documents",
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxAgeSeconds: 60 * 60 * 24 * 7,
        maxEntries: 50,
        purgeOnQuotaError: true,
      }),
    ],
  })
);