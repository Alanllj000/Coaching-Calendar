const CACHE_NAME = 'coachpro-v3';

// On vide la liste pour le test : si ça marche, on rajoutera les fichiers après
const ASSETS_TO_CACHE = [
    './',
    './index.html'
];

self.addEventListener('install', (event) => {
    alert("SW: Installation en cours..."); // Alerte spéciale SW (si ton tel le permet)
    self.skipWaiting(); 
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});

self.addEventListener('activate', (event) => {
    // FORCE l'activation immédiate
    event.waitUntil(clients.claim());
    console.log("SW: Activé !");
});

// Le reste (Push et NotificationClick) tu peux le laisser tel quel
self.addEventListener('push', (event) => {
    let data = event.data ? event.data.json() : { title: 'Coach Pro', body: 'Nouveau message' };
    event.waitUntil(
        self.registration.showNotification(data.title, {
            body: data.body,
            icon: './appicon-128x128.png'
        })
    );
});
