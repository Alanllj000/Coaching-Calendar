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
self.addEventListener('push', (event) => {
    // On parse les données reçues
    let data = event.data ? event.data.json() : { title: 'Coach Pro', body: 'Nouveau message', url: '/' };
    
    console.log("SW Push reçu:", data);

    const options = {
        body: data.body,
        icon: './appicon-128x128.png',
        badge: './appicon-128x128.png', // Petite icône dans la barre de statut
        vibrate: [100, 50, 100],
        data: {
            url: data.url || '/' // IMPORTANT : On stocke l'URL dans la notification elle-même
        }
    };

    event.waitUntil(
        self.registration.showNotification(data.title, options)
    );
});

// --- GESTION DU CLIC SUR LA NOTIFICATION ---
self.addEventListener('notificationclick', (event) => {
    console.log("SW: Notification cliquée");
    
    event.notification.close(); // Ferme la bulle de notification

    // CONSTRUCTION DE L'URL ROBUSTE
    // On prend l'origine (https://alanllj000.github.io) 
    // et on y ajoute le chemin envoyé par la DB (/Coaching-Calendar/?event_id=...)
    const relativePath = event.notification.data.url || '/Coaching-Calendar/';
    const urlToOpen = new URL(relativePath, self.location.origin).href;

    console.log("SW: Tentative d'ouverture/navigation vers :", urlToOpen);

    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then((windowClients) => {
            // 1. Chercher si un onglet du site est déjà ouvert
            for (let client of windowClients) {
                // On vérifie si l'onglet appartient bien à notre application
                if (client.url.includes('Coaching-Calendar') && 'focus' in client) {
                    client.focus(); 
                    // On force la navigation vers la nouvelle URL (avec l'évent_id)
                    return client.navigate(urlToOpen);
                }
            }

            // 2. Si aucun onglet n'est ouvert, on en ouvre un nouveau
            if (clients.openWindow) {
                return clients.openWindow(urlToOpen);
            }
        })
    );
});
