// Firebase Compat - يعمل على iPad وكل المتصفحات
const firebaseConfig = {
  apiKey: "AIzaSyAW-GQ4bLU-AnpO8EN8NxU-DvKxIpMMMHI",
  authDomain: "almwatnh-e2a3b.firebaseapp.com",
  projectId: "almwatnh-e2a3b",
  storageBucket: "almwatnh-e2a3b.firebasestorage.app",
  messagingSenderId: "669085630920",
  appId: "1:669085630920:web:22b0068089f72ef72e80fd"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// توليد كود غرفة
function generateRoomCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 6; i++) code += chars.charAt(Math.floor(Math.random() * chars.length));
  return code;
}

// حماية HTML
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}
