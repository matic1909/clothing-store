import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDn0PhLVp1L2Um3nxiVbrV43fNqdwC4Y0A",
  authDomain: "crown-db-c4991.firebaseapp.com",
  databaseURL: "https://crown-db-c4991.firebaseio.com",
  projectId: "crown-db-c4991",
  storageBucket: "crown-db-c4991.appspot.com",
  messagingSenderId: "506349807692",
  appId: "1:506349807692:web:740b526edbb55465996ce9",
  measurementId: "G-02GDT83Q1F",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
