// On install - caching the application shell
self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('static').then(function(cache) {
        // cache any static files that make up the application shell
        return cache.addAll(
            [
                "./",
                "./app.js",
                "./script.js",
                "./images/icon64.png",
                "./images/icon512.png",
                "https://code.jquery.com/jquery-3.2.1.slim.min.js",
                "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js",
                "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js",
                "https://kit.fontawesome.com/4f7f0e7aa6.js",
                "https://img.icons8.com/pastel-glyph/2x/calculator.png",
                "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
                "./manifest.json"
            ]
        );
      })
    );
  });
  
  // On network request
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      // Try the cache
      caches.match(event.request).then(function(response) {
        //If response found return it, else fetch again
        return response || fetch(event.request);
      })
    );
  });