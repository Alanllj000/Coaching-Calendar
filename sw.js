// Nom du cache pour la gestion hors-ligne
const CACHE_NAME = 'sportif-v1';

// Liste des ressources à mettre en cache pour un accès rapide
const ASSETS_TO_CACHE = [
    '/Coaching-Calendar/',
    '/Coaching-Calendar/index.html',
    '/Coaching-Calendar/manifest.json',
    '/Coaching-Calendar/appicon-128x128.png'
];

// Installation du Service Worker
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});

// Activation et nettoyage des anciens caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});

// Stratégie de récupération : Réseau d'abord, sinon Cache
self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request).catch(() => {
            return caches.match(event.request);
        })
    );
});

// Gestion des notifications Push
self.addEventListener('push', (event) => {
    const data = event.data ? event.data.json() : {};
    const title = data.title || 'Calendrier Sportif';
    const options = {
        body: data.body || 'Vous avez une nouvelle mise à jour de votre programme !',
        icon: '/Coaching-Calendar/appicon-128x128.png',
        badge: '/Coaching-Calendar/appicon-128x128.png',
        data: {
            url: '/Coaching-Calendar/'
        }
    };

    event.waitUntil(
        self.registration.showNotification(title, options)
    );
});

// Action au clic sur une notification
self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    event.waitUntil(
        clients.openWindow(event.notification.data.url)
    );
});
