self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('todo-v1').then(cache =>
      cache.addAll(['todo.html', 'manifest.json', 'icon.png'])
    )
  );
  self.skipWaiting();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
