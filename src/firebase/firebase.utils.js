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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`/users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
