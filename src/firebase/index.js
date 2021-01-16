var firebaseConfig = {
  apiKey: "AIzaSyCUfZiBiPAXGfLWWwjapard-HkAK35pf00",
  authDomain: "authapp-27029.firebaseapp.com",
  projectId: "authapp-27029",
  storageBucket: "authapp-27029.appspot.com",
  messagingSenderId: "671001250755",
  appId: "1:671001250755:web:4ba1b3c0f9affe44c04b76",
  measurementId: "G-89HCZ9LT7Z",
};

var firebase = global.firebase;
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
console.log("in firebase app");
