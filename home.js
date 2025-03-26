import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-analytics.js";
import {getAuth, onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js";
import { getFirestore, addDoc, collection, serverTimestamp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyC6asReR34EOulDBdAJfhF5MtURFX8Tf9A",
  authDomain: "hoi-ae-sigma.firebaseapp.com",
  projectId: "hoi-ae-sigma",
  storageBucket: "hoi-ae-sigma.firebasestorage.app",
  messagingSenderId: "59887720496",
  appId: "1:59887720496:web:ef3a2bda2e95c57bff35f5",
  measurementId: "G-RPX935VH3V"
};

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const home = getAuth(app);
  const db = getFirestore(app);
onAuthStateChanged(home, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    const name = user.displayName;
    console.log(uid);
    console.log(name);
    let welcomeMsg = name;
    document.getElementById('name').textContent = welcomeMsg;
    // ...
  } else {
    console.log('User is signed out');
    window.location = 'login.html';
  }
});
const name = document.getElementById('name');
document.getElementById('logout').onclick = function () {
    signOut(home).then(() => {
        // Sign-out successful.
        window.location = 'login.html';
      }).catch((error) => {
        // An error happened.
      });
};
;