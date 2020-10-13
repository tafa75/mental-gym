import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyB7-nruCZx_5pOTHUsGljptrw_YixUa42M",
    authDomain: "mental-gym.firebaseapp.com",
    databaseURL: "https://mental-gym.firebaseio.com",
    projectId: "mental-gym",
    storageBucket: "mental-gym.appspot.com",
    messagingSenderId: "946422214142",
    appId: "1:946422214142:web:2cb844f8bff02f667d24af",
    measurementId: "G-DG02NV1PED"
};


let Firebase = {
    app: app.initializeApp(config),
    auth: app.auth(),
    db: app.firestore(),
    doCreateUserWithEmailAndPassword: (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password),
        

}



export default { Firebase }
