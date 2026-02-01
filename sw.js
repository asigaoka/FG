const CACHE_NAME = "fg-trainer-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./videos/highlow_main_low.mp4",
  "./videos/highlow_main_mid.mp4",
  "./videos/highlow_success.mp4",
  "./videos/highlow_fail.mp4",
  "./videos/oki_main_move.mp4",
  "./videos/oki_main_stay.mp4",
  "./videos/oki_success.mp4",
  "./videos/oki_fail.mp4"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
