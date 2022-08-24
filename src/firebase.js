import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: "AIzaSyCcbLdnCqBuaYD-D4ueK8W2IrOFl5pEFGA",
//   authDomain: "challenge-17d7f.firebaseapp.com",
//   projectId: "challenge-17d7f",
//   storageBucket: "challenge-17d7f.appspot.com",
//   messagingSenderId: "140561087965",
//   appId: "1:140561087965:web:3b511440162823af324a34",
//   measurementId: "G-R7MMXGRV6P"
// };

const firebaseConfig = {
  apiKey: "AIzaSyDtDao3DCwZyGkRlzbsHWiP41Q7LvCqxh8",
  authDomain: "clone-95d40.firebaseapp.com",
  projectId: "clone-95d40",
  storageBucket: "clone-95d40.appspot.com",
  messagingSenderId: "317822384892",
  appId: "1:317822384892:web:1dcb7cf89520542c517579",
  measurementId: "G-3V02M7VHJ1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();
const auth=firebase.auth();

export { db,auth };


// For Firebase JS SDK v7.20.0 and later, measurementId is optional

