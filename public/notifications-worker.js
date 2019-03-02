console.log(['notificationsWorker:fetched']);

self.addEventListener('push', async (event) => {
  console.log(['notificationsWorker:event:push'], event);
  const data = event.data.json();

  await self.registration.showNotification(data.title, data.notification);
});

self.addEventListener('install', (event) => {
  console.log(['notificationsWorker:event:install'], event);
});

self.addEventListener('activate', (event) => {
  console.log(['notificationsWorker:event:activate'], event);
});

self.addEventListener('fetch', (event) => {
  console.log(['notificationsWorker:event:fetch'], event);
});

self.addEventListener('message', (event) => {
  console.log(['notificationsWorker:event:message'], event);
});

self.addEventListener('redundant', (event) => {
  console.log(['notificationsWorker:event:redundant'], event);
});
