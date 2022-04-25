import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAX4zOhlraLiuKlODcwQM3rmCubqLBrXhg",
  authDomain: "tienda-5c11f.firebaseapp.com",
  projectId: "tienda-5c11f",
  storageBucket: "tienda-5c11f.appspot.com",
  messagingSenderId: "885539947055",
  appId: "1:885539947055:web:767e364bb2000331a3fcda"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth };
