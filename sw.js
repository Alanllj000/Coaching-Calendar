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
    
    event.notification.close(); // On ferme la notification visuelle

    // On récupère l'URL qu'on a stockée dans 'options.data' juste au-dessus
    const urlToOpen = event.notification.data.url;

    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then((windowClients) => {
            // 1. Si l'application est déjà ouverte (même en arrière-plan)
            for (let client of windowClients) {
                // On vérifie si c'est notre URL de base (pour éviter de cibler d'autres sites)
                if (client.url.includes(self.registration.scope) && 'focus' in client) {
                    client.focus(); // On met la fenêtre au premier plan
                    return client.navigate(urlToOpen); // On charge la bonne page
                }
            }
            // 2. Si aucune fenêtre n'est ouverte, on en ouvre une nouvelle
            if (clients.openWindow) {
                return clients.openWindow(urlToOpen);
            }
        })
    );
});
