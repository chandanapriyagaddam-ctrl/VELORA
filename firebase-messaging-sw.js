importScripts("https://www.gstatic.com/firebasejs/12.7.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/12.7.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyAB70oNmm0u_nZmkWMwqn1zTt6VSC3TL1s",
  authDomain: "velora-5ecc4.firebaseapp.com",
  projectId: "velora-5ecc4",
  storageBucket: "velora-5ecc4.appspot.com",
  messagingSenderId: "741786125820",
  appId: "1:741786125820:web:77ab1efe980f00bcdd5e79"
});

const messaging = firebase.messaging();

/* 🔔 Show notification when Firebase sends one */
messaging.onBackgroundMessage((payload) => {
  console.log("Received background message ", payload);

  const { title, body, icon } = payload.notification;

  self.registration.showNotification(title, {
    body,
    icon: icon || "/icon.png"
  });
});
