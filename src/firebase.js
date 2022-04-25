import firebase from "firebase";

const firebaseConfig = {
  // apiKey: "AIzaSyDCKZ5Sp7JeIpI_KxlJ0hyxVoDqxi5y86Q",
  // authDomain: "test-rl4.firebaseapp.com",
  // projectId: "test-rl4",
  // storageBucket: "test-rl4.appspot.com",
  // messagingSenderId: "928359458039",
  // appId: "1:928359458039:web:0d4b0114688787e97b5ff2",

  apiKey: "AIzaSyBmuWW2Qn7ZpCzwwKX5PNWtTDEoQ1u7J9s",
  authDomain: "taller-web-2022-verano.firebaseapp.com",
  projectId: "taller-web-2022-verano",
  storageBucket: "taller-web-2022-verano.appspot.com",
  messagingSenderId: "544726746862",
  appId: "1:544726746862:web:55098842c135dc95c8d5ff"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth };
