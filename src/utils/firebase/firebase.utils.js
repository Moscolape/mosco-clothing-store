import {initializeApp} from 'firebase/app';
import {
  getAuth, 
  // signInWithRedirect, 
  signInWithPopup, 
  createUserWithEmailAndPassword,
  GoogleAuthProvider
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';


// My app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBn1A4rIbRcfSiOQPHXJemHwvsorclIFNk",
  authDomain: "mosco-clothing-store-db.firebaseapp.com",
  projectId: "mosco-clothing-store-db",
  storageBucket: "mosco-clothing-store-db.appspot.com",
  messagingSenderId: "39151990309",
  appId: "1:39151990309:web:5f97b6886721c79e4c71cc"
};


// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
// export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth, additionalInfo) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);

  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if(!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo = {displayName: 'Moses'}
      })
    } catch(error) {
      console.log('error encountered creating the user', error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};