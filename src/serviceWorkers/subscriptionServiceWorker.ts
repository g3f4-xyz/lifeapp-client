import { API_HOST } from '../constans';

const publicVapidKey = 'BJthRQ5myDgc7OSXzPCMftGw-n16F7zQBEN7EUD6XxcfTTvrLGWSIG7y_JxiWtVlCFua0S8MTB5rPziBqNx1qIo';

export const registerSubscription = async (): Promise<any> => {
  // Check for service worker
  if ('serviceWorker' in navigator) {
    // Register Service Worker
    const register = await navigator.serviceWorker.register('/subscriptionWorker.js', {
      scope: '/',
    });
    const subscription = await register.pushManager.getSubscription();

    if (subscription) {
      return null;
    }

    try {
      await send(register);
    } catch (e) {
      throw e;
    }
  }
};

// Register SW, Register Push, Send Push
async function send(register: any): Promise<any> {
  // Register Push
  try {
    const newSubscription = await register.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(publicVapidKey),
    });

    // Send Push Notification
    await fetch(`${API_HOST}/notifications`, {
      credentials: 'same-origin',
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newSubscription),
    });
  } catch (e) {
    throw e;
  }
}

function urlBase64ToUint8Array(base64String: any): any {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')// eslint-disable-line no-useless-escape
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}
