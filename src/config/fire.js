import firebase from 'firebase/compat/app';
import { auth } from 'firebase/compat/auth';
require("firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyDq1iHXuLnVjSrXiQpHSui9zgIcS9JmN1E",
    authDomain: "seeds-f7211.firebaseapp.com",
    projectId: "seeds-f7211",
    storageBucket: "seeds-f7211.appspot.com",
    messagingSenderId: "971382685265",
    appId: "1:971382685265:web:75be5c36838667957c8270",
    measurementId: "G-PP5W5L0JXW"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;