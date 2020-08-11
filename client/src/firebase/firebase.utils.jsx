import firebase from 'firebase/app'; //firebase keyword is going to give us access to the below
import 'firebase/firestore'; //import dependances for the database
import 'firebase/auth'; //import dependances for the authentification

const config = {
    apiKey: "AIzaSyCplMBR0PDYnSYWkQMJQwnVITsBbajyk-A",
    authDomain: "lavie-db.firebaseapp.com",
    databaseURL: "https://lavie-db.firebaseio.com",
    projectId: "lavie-db",
    storageBucket: "",
    messagingSenderId: "792040743338",
    appId: "1:792040743338:web:336ca3f57c94719b7c4bd3"
  };

  firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;