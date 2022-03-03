
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

const apiKey = process.env.REACT_APP_FB_apiKey;
const authDomain = process.env.REACT_APP_FB_authDomain;
const projectId = process.env.REACT_APP_FB_projectId;
const storageBucket = process.env.REACT_APP_FB_storageBucket;
const messagingSenderId = process.env.REACT_APP_FB_messagingSenderId;
const appId = process.env.REACT_APP_FB_appId;
const measurementId = process.env.REACT_APP_FB_measurementId;

const FirebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId,
};

//console.log(apiKey);
//console.log(FirebaseConfig);
const app = initializeApp(FirebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
//const navigate = useNavigate();
const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};


const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent");
  } catch (err) {
    console.error(err);
    alert(err.messsage);
  }
};

export {signInWithGoogle, sendPasswordReset };
