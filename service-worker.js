self.addEventListener('install', function(event) {
  console.log('Service Worker instalado');
  event.waitUntil(
    caches.open('app-cache').then(function(cache) {
      return cache.addAll([
        '/app/index.html',
        '/app/manifest.json',
        '/app/logo192.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
