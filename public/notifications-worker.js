self.addEventListener('push', async (event) => {
  const data = event.data.json();
  console.info(['push:data'], data);

  await self.registration.showNotification(data.title, data.notification);
});

self.addEventListener('notificationclick', function(e) {
  var notification = e.notification;
  var primaryKey = notification.data.primaryKey;
  var action = e.action;
  console.info(['notificationclick'], e);

  if (action === 'close') {
    console.info(['notificationclick.close']);
    notification.close();
  } else {
    clients.openWindow('http://www.example.com');
    notification.close();
  }
});
