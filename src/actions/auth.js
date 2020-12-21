import Swal from 'sweetalert2';

import {firebase, googleAuthProvider} from '../firebase/firebase-config'; 
import { types } from "../types/types";
import { finishLoading, startLoading } from "./ui";
import { noteLogout } from "./notes";

//una accion
export const startLoginEmailPassword=(email, password) =>{
     return (dispatch) => {

          dispatch(startLoading());  
          
          firebase.auth().signInWithEmailAndPassword(email, password)
          .then(({user})=>{
               dispatch(
                    login(user.uid, user.displayName)                 
               ); 
               dispatch(finishLoading());  
          })
          .catch(e=> {
               console.log(e); 
               dispatch(finishLoading());  
               Swal.fire('Error', e.message, 'error');
          })          
          //dispatch(login (email,password));
          
     }     
}

export const startRegisterWithEmailPasswordName=(email, password,name)=> {
return(dispatch) =>{
     firebase.auth().createUserWithEmailAndPassword(email, password)
     .then(async({user})=>{
          await user.updateProfile({displayName: name}); 
          console.log(user);          
          dispatch(
               login(user.uid, user.displayName) 
          ); 
     })
     .catch(e=> {
          console.log(e);
          Swal.fire('Error', e.message, 'error');
     })
} 
}

//otra accion
export const startGoogleLogin =()=>{
     return (dispatch) => {
          firebase.auth().signInWithPopup(googleAuthProvider)
          .then(({user})=>{
               dispatch(
                    login(user.uid, user.displayName)
               )
          }); 
     }
}

export const login=(uid, displayName) => ({
     type: types.login, 
     payload: {
          uid,
          displayName
     }
})

export const startLogout = () => {
     return(dispatch) => {
          firebase.auth().signOut(); 
          dispatch(noteLogout());
          dispatch(logout());
     }
}



export const logout = () => ({
     type: types.logout
})