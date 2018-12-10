const staticCacheName = "udacitynd001p5";

let cachePayload = [
  "/",
  "./index.html",
  "./restaurant.html",
  "./css/styles.css",
  "./data/restaurants.json",
  "./js/main.js",
  "./js/restaurant_info.js",
  "./js/dbhelper.js",
  "./js/reg-sw.js",
  "./img/1.jpg",
  "./img/2.jpg",
  "./img/3.jpg",
  "./img/4.jpg",
  "./img/5.jpg",
  "./img/6.jpg",
  "./img/7.jpg",
  "./img/8.jpg",
  "./img/9.jpg",
  "./img/10.jpg"
];

self.addEventListener('install', function(event) {
	event.waitUntil(
		caches.open(`${staticCacheName}`).then(function(cache) {
			return cache.addAll(cachePayload);
        })
    );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
      caches.match(event.request).then(function(response) {
        if(response){
          return response;
        }else{
          return fetch(event.request).then(function(response){
            let clone = response.clone();
            caches.open(`${staticCacheName}`).then(function(cache){
              cache.put(event.request, clone);
            });
            return response;
          });
        }
      })
  );
});