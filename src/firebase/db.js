import firebase from 'firebase/app'; // 파이어베이스 기능 불러오기
import 'firebase/firestore'; // 파이어베이스의 파이어스토어 기능 불러오기

const firebaseConfig = {
    apiKey: "AIzaSyBjtpHpV8seeDM5_mf5CymAj-6K2vNfXiw",
    authDomain: "my-todo1-ac1df.firebaseapp.com",
    projectId: "my-todo1-ac1df",
    storageBucket: "my-todo1-ac1df.appspot.com",
    messagingSenderId: "751446886677",
    appId: "1:751446886677:web:39967e5806fb3b68ad811c"
  };

export const db = firebase.initializeApp(firebaseConfig).firestore();