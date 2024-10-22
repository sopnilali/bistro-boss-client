// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvJhTfFTjMe4iOoKMeULFG-ERvwyylzHY",
  authDomain: "bistro-boss-fc11e.firebaseapp.com",
  projectId: "bistro-boss-fc11e",
  storageBucket: "bistro-boss-fc11e.appspot.com",
  messagingSenderId: "639803565433",
  appId: "1:639803565433:web:507fa6b4d0c553d533bba8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth