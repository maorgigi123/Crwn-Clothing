import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup, 
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
}from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD8S-ktchTSi18FnJuB1TJjM-Qx7LyegW8",
    authDomain: "crown-clothing-db-fedb9.firebaseapp.com",
    projectId: "crown-clothing-db-fedb9",
    storageBucket: "crown-clothing-db-fedb9.appspot.com",
    messagingSenderId: "130932637270",
    appId: "1:130932637270:web:b707ad6e7e5062722dc5f7"
  };
  const firebaseapp = initializeApp(firebaseConfig);

  const googleProvider = new GoogleAuthProvider();

  googleProvider.setCustomParameters({
    prompt: 'select_account',
  });

  export const auth = getAuth();

  export const signInWithGooglePopUp = () => signInWithPopup(auth, googleProvider);
  // Initialize Firebase
  export const db = getFirestore();

  export const addCollectionAndDocuments = async(collectionKey, objectToAdd) => {
    const collectionRef = collection(db, collectionKey);
    const bath = writeBatch(db);

    objectToAdd.forEach((object) => {
      const docRef = doc(collectionRef,object.title.toLowerCase())
      bath.set(docRef,object);
    });

    await bath.commit();
  } 
  
  export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(docSnapshot => docSnapshot.data());
  

    // return categoryMap;
  }

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

  export const signInAuthUserWithEmailAndPassword = async (email, password) =>{
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
  }

  export const signOutUser = async() => await signOut(auth);

  export const onAuthStateChangedListener =  (callback) => {
    onAuthStateChanged(auth,callback);
  }