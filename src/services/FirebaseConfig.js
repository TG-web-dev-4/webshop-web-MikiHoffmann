import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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
const app = initializeApp(FirebaseConfig);
//console.log(apiKey);
//console.log(FirebaseConfig);
export const auth = getAuth(app);
