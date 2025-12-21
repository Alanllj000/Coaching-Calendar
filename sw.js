// Nom du cache
const CACHE_NAME = 'sportif-v2';

// Liste des ressources essentielles
// Note: Utiliser des chemins relatifs "./" est plus sûr pour GitHub Pages
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './manifest.json',
    './appicon-128x128.png'
];

// Installation : Mise en cache des ressources
self.addEventListener('install', (event) => {
    // Force le SW à devenir actif immédiatement
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            // On utilise addAll mais on peut aussi ajouter un catch pour éviter que 
            // l'échec d'un seul fichier (ex: icône manquante) ne bloque toute l'installation
            return cache.addAll(ASSETS_TO_CACHE).catch(err => {
                console.warn('Certains fichiers n\'ont pas pu être mis en cache', err);
            });
        })
    );
});

// Activation : Nettoyage des anciens caches
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
    // Prend le contrôle des pages immédiatement
    return self.clients.claim();
});

// Stratégie : Network First (Réseau d'abord) avec fallback sur Cache
self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request)
            .then((response) => {
                // Si on a une réponse valide, on la clone dans le cache
                if (response && response.status === 200 && response.type === 'basic') {
                    const responseToCache = response.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, responseToCache);
                    });
                }
                return response;
            })
            .catch(() => {
                // Si le réseau échoue, on regarde dans le cache
                return caches.match(event.request);
            })
    );
});

// Gestion des notifications Push
self.addEventListener('push', (event) => {
    let data = {};
    if (event.data) {
        try {
            data = event.data.json();
        } catch (e) {
            data = { title: 'Calendrier Sportif', body: event.data.text() };
        }
    }

    const title = data.title || 'Calendrier Sportif';
    const options = {
        body: data.body || 'Nouvelle séance disponible !',
        icon: './appicon-128x128.png',
        badge: './appicon-128x128.png',
        vibrate: [100, 50, 100],
        data: {
            url: './'
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
        clients.matchAll({ type: 'window' }).then((clientList) => {
            // Si une fenêtre est déjà ouverte, on se focalise dessus
            for (const client of clientList) {
                if (client.url.includes('/Coaching-Calendar/') && 'focus' in client) {
                    return client.focus();
                }
            }
            // Sinon on ouvre une nouvelle fenêtre
            if (clients.openWindow) {
                return clients.openWindow('./');
            }
        })
    );
});
