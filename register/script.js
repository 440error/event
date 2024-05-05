// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAD1K-uxckmx1nZ-EibqB2MqD_zBugYNck",
  authDomain: "event-management-system-ed2df.firebaseapp.com",
  projectId: "event-management-system-ed2df",
  storageBucket: "event-management-system-ed2df.appspot.com",
  messagingSenderId: "1073160480566",
  appId: "1:1073160480566:web:47f91e8cd94c65c4cd7597",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


const submit = document.getElementById("submit");

submit.addEventListener("click", function (event) {
  event.preventDefault();

  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  // const phoneNumber = document.getElementById("phoneNumber").value;
  // const eventSelection = document.getElementById("eventSelection").value;

  createUserWithEmailAndPassword(
    auth,
    // fullName,
    email,
    password,
    // phoneNumber
    // ,eventSelection
  )
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      alert("Signing up...");
      
      // Redirect to the main webpage or any other page
      window.location.href = "../index.html";

      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      // ..
    });
});
