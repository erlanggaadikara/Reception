import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB06qzsJJcj2G6Vrwoqjn4jmXtud-61qTA",
  authDomain: "harimadu-15c91.firebaseapp.com",
  projectId: "harimadu-15c91",
  storageBucket: "harimadu-15c91.appspot.com",
  messagingSenderId: "543786985221",
  appId: "1:543786985221:web:b867cf425d1ba6cb59f96c",
  measurementId: "G-JXGTQXBZQK",
};

firebase.initializeApp(firebaseConfig);

export const storageBase = firebase.storage();
export const storageRef = storageBase.ref();
