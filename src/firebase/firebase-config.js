import firebase from 'firebase/app'; 
import 'firebase/firestore'; 
import 'firebase/auth'; 

const firebaseConfig = {
     apiKey: "AIzaSyAui4BunSA5KW3-F6xC8FA-STiOA6p-QLg",
     authDomain: "react-app-demos.firebaseapp.com",
     databaseURL: "https://react-app-demos.firebaseio.com",
     projectId: "react-app-demos",
     storageBucket: "react-app-demos.appspot.com",
     messagingSenderId: "658327330118",
     appId: "1:658327330118:web:c35bd775560210730a5947"
   };
   firebase.initializeApp(firebaseConfig);

   const db=firebase.firestore(); 
   const googleAuthProvider= new firebase.auth.GoogleAuthProvider(); 

   export {
        db,
        googleAuthProvider, 
        firebase

   }