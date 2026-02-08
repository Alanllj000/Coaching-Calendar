const CACHE_NAME = 'coachpro-v4';
const ASSETS_TO_CACHE = ['./', './index.html'];

// --- INSTALLATION & ACTIVATION ---
self.addEventListener('install', (event) => {
    self.skipWaiting();
    event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE)));
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((names) => Promise.all(names.map(n => n !== CACHE_NAME && caches.delete(n))))
        .then(() => self.clients.claim())
    );
});

// --- 1. GESTION DU PUSH REÇU (LE BLOC MANQUANT) ---
self.addEventListener('push', (event) => {
    console.log("SW: Push reçu");
    let data = { title: 'Coach Pro', body: 'Nouveau message', url: '/Coaching-Calendar/' };

    try {
        if (event.data) {
            data = event.data.json();
        }
    } catch (e) {
        console.error("SW: Erreur parsing JSON push", e);
        // Backup si le payload n'est pas du JSON
        data.body = event.data.text();
    }

    const options = {
        body: data.body,
        icon: './appicon-128x128.png',
        badge: './appicon-128x128.png',
        vibrate: [100, 50, 100],
        data: { url: data.url || '/Coaching-Calendar/' }
    };

    event.waitUntil(self.registration.showNotification(data.title, options));
});

// --- 2. GESTION DU CLIC SUR LA NOTIFICATION ---
self.addEventListener('notificationclick', (event) => {
    event.notification.close();

    const urlData = event.notification.data.url || '';
    const eventId = urlData.split('event_id=')[1];

    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then((windowClients) => {
            for (let client of windowClients) {
                // Si l'onglet est déjà ouvert sur notre app
                if (client.url.includes('Coaching-Calendar') && 'focus' in client) {
                    client.focus();
                    if (eventId) {
                        return client.postMessage({ type: 'OPEN_EVENT', eventId: eventId });
                    }
                    return;
                }
            }
            // Si l'app est fermée, on ouvre la racine (la détection URL prendra le relais)
            if (clients.openWindow) {
                return clients.openWindow('/Coaching-Calendar/' + (eventId ? `?event_id=${eventId}` : ''));
            }
        })
    );
});
