import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup, 
  GoogleAuthProvider,
  createUserWithEmailAndPassword
}from 'firebase/auth';
import {getFirestore,doc,getDoc,setDoc} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD8S-ktchTSi18FnJuB1TJjM-Qx7LyegW8",
    authDomain: "crown-clothing-db-fedb9.firebaseapp.com",
    projectId: "crown-clothing-db-fedb9",
    storageBucket: "crown-clothing-db-fedb9.appspot.com",
    messagingSenderId: "130932637270",
    appId: "1:130932637270:web:b707ad6e7e5062722dc5f7"
  };
  const firebaseapp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();

  export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);
  // Initialize Firebase
  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    if(!userAuth) return;
    const userDocRef = doc(db,'users',userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()){
        const {displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            });
        }catch(error){
            console.log('error creating the user' ,error.message)
        }

    }
    return userDocRef;
  }

  export const createAuthUserWithEmailAndPassword = async (email, password) =>{
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
  }