   self.addEventListener('install', e => {
     e.waitUntil(caches.open('web-ojol-v1').then(cache => {
       return cache.addAll(['/','/index.html','/icon-512.png']);
     }));
   });
   self.addEventListener('fetch', e => {
     e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
   });
