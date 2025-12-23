/**
 * Coach Pro App - Service Worker
 * Gère le cache (Offline) et les notifications Push (VAPID)
 */

const CACHE_NAME = 'coachpro-v2.1';
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './appicon-128x128.png'
];

// Installation : Mise en cache des ressources essentielles
self.addEventListener('install', (event) => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS_TO_CACHE).catch(err => {
                console.warn('SW: Certains fichiers n\'ont pas pu être mis en cache', err);
            });
        })
    );
});

// Activation : Nettoyage des anciens caches pour libérer de l'espace
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
    return self.clients.claim();
});

// Stratégie : Network First (Réseau d'abord)
self.addEventListener('fetch', (event) => {
    // On ne met pas en cache les appels API Supabase (toujours frais)
    if (event.request.url.includes('supabase.co')) return;

    event.respondWith(
        fetch(event.request)
            .then((response) => {
                if (response && response.status === 200 && response.type === 'basic') {
                    const responseToCache = response.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, responseToCache);
                    });
                }
                return response;
            })
            .catch(() => {
                return caches.match(event.request);
            })
    );
});

/**
 * GESTION DES NOTIFICATIONS PUSH
 * Reçoit les données envoyées par Supabase Edge Functions
 */
self.addEventListener('push', (event) => {
    let data = {};
    
    if (event.data) {
        try {
            data = event.data.json();
        } catch (e) {
            // Si ce n'est pas du JSON, on traite comme du texte brut
            data = { 
                title: 'Coach Pro', 
                body: event.data.text() 
            };
        }
    }

    const title = data.title || 'Rappel Coach Pro';
    const options = {
        body: data.body || 'Une nouvelle mise à jour est disponible.',
        icon: './appicon-128x128.png',
        badge: './appicon-128x128.png',
        vibrate: [200, 100, 200],
        tag: 'coach-pro-notif', // Évite d'empiler 50 notifs identiques
        renotify: true,
        data: {
            url: data.url || './'
        }
    };

    event.waitUntil(
        self.registration.showNotification(title, options)
    );
});

/**
 * ACTION AU CLIC
 * Redirige l'utilisateur vers l'application
 */
self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    
    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
            // Si l'app est déjà ouverte, on focus
            for (const client of clientList) {
                if ('focus' in client) {
                    return client.focus();
                }
            }
            // Sinon on ouvre une nouvelle fenêtre
            if (clients.openWindow) {
                return clients.openWindow(event.notification.data.url);
            }
        })
    );
});
