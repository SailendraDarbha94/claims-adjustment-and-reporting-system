import { initializeApp } from "firebase/app";
// import * as firebase from "firebase";
// Optionally import the services that you want to use
import { browserLocalPersistence, initializeAuth } from "firebase/auth";
import { getDatabase, ref } from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAgyEUYoCtW3YfPMQ_tGi0XA4ztCmpzOjE",
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  databaseURL: process.env.NEXT_PUBLIC_DATABASE_URL,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

const app = initializeApp(firebaseConfig);

export default app;
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

// export { firebase };
// const database = getDatabase(app)
// const auth = initializeAuth(app);
// auth.setPersistence(browserLocalPersistence);
// export default auth
// export const storage = getStorage(app)
// export const db = getDatabase(app)
//export const analytics = getAnalytics(app);
