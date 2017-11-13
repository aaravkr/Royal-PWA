'use strict';
var cacheName = 'royalPWA';
var cacheItems = [
     '/index.html',
     '/assets/img/icons/breakfast_01.png',
     '/assets/img/icons/breakfast_02.png',
     '/assets/img/icons/dinner_01.png',
     '/assets/img/icons/dinner_02.png',
     '/assets/img/icons/drinks_01.png',
     '/assets/img/icons/drinks_02.png',
     '/assets/img/icons/lunch_01.png',
    
     '/assets/img/abt-img1.jpg',
     '/assets/img/abt-img2.jpg',
     '/assets/img/absm-1.jpg',
     '/assets/img/coffee-4.jpg',
     '/assets/img/corner-left.png',
     '/assets/img/corner-right.png',
     '/assets/img/royallogo.png',
     '/assets/img/food-dish.png',
     '/assets/img/promo1.jpg',
     '/assets/img/divider-white.png',
     '/assets/img/e7.jpg',
     '/assets/img/d4.jpg',
     '/assets/css/bootstrap.min.css',
     '/assets/css/owl.carousel.css',
     '/assets/css/owl.theme.css',
     '/assets/css/owl.transitions.css',
     '/assets/css/main.css',
     '/assets/css/animate.css',
     '/assets/js/bootstrap.min.js',
     '/assets/js/moment.js',
     '/assets/js/owl.carousel.js',
     '/assets/js/scripts.js',
     '/assets/js/wow.min.js'
    ];

self.addEventListener('install', function(e) {
    e.waitUntil(
    caches.open(cacheName).then(function(cache) {
        console.log('[ServiceWorker] Caching app shell');
        return cache.addAll(cacheItems);
    })
  );
});

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
});

self.addEventListener('fetch', function(e) {
  console.log('[ServiceWorker] Fetch', e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
