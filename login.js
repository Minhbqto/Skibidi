  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-analytics.js";
  import { getAuth, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
  const auth = getAuth(app)
  const log = document.getElementById('log')

log.addEventListener("click", function(event) {
    event.preventDefault();
    let mail = document.getElementById('mail').value;
    let pass = document.getElementById('pass').value;
    signInWithEmailAndPassword(auth, mail, pass)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    window.location = 'index.html';
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("invalid email or password");
  });
  
});