import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAv5t0QUFRvqgKtrChzs-pYCZlK_zQW4Fc",
    authDomain: "vuewt-f7e90.firebaseapp.com",
    databaseURL: "https://vuewt-f7e90.firebaseio.com",
    projectId: "vuewt-f7e90",
    storageBucket: "vuewt-f7e90.appspot.com",
    messagingSenderId: "210961190253",
    appId: "1:210961190253:web:4f3db5309e388ea3859e64",
    measurementId: "G-RDPQ6BTR74"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();