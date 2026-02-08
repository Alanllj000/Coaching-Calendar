const CACHE_NAME = 'coachpro-v4';

// On vide la liste pour le test
const ASSETS_TO_CACHE = [
    './',
    './index.html'
];

self.addEventListener('install', (event) => {
    // Note: l'alerte ne s'affichera pas sur mobile, mieux vaut console.log
    console.log("SW: Installation en cours..."); 
    self.skipWaiting(); 
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});

self.addEventListener('activate', (event) => {
    console.log("SW: Nettoyage des anciennes versions...");
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    // Si le cache trouvé n'est pas la version actuelle (ex: v4)
                    if (cacheName !== CACHE_NAME) {
                        console.log("SW: Suppression du cache obsolète :", cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => {
            // Prend le contrôle immédiatement pour éviter les bugs d'affichage
            return self.clients.claim();
        })
    );
});

// --- GESTION DU PUSH REÇU ---
self.addEventListener('notificationclick', (event) => {
    event.notification.close();

    // On extrait l'ID de l'URL reçue (ex: /Coaching-Calendar/?event_id=123)
    const urlData = event.notification.data.url || '';
    const eventId = urlData.split('event_id=')[1]; // Récupère ce qu'il y a après 'event_id='

    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then((windowClients) => {
            for (let client of windowClients) {
                if (client.url.includes('Coaching-Calendar') && 'focus' in client) {
                    client.focus();
                    // ENVOI DU MESSAGE À L'APP
                    if (eventId) {
                        return client.postMessage({
                            type: 'OPEN_EVENT',
                            eventId: eventId
                        });
                    }
                    return;
                }
            }
            // Si l'app est fermée, on l'ouvre normalement sur la racine
            if (clients.openWindow) {
                return clients.openWindow('/Coaching-Calendar/');
            }
        })
    );
});
