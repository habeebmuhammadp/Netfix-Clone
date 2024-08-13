
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {addDoc, getFirestore} from "firebase/firestore";
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "AIzaSyDWLLWNbS-Boj__1rhHNz7gGbYkRJvGvjw",
  authDomain: "netflix-7f660.firebaseapp.com",
  projectId: "netflix-7f660",
  storageBucket: "netflix-7f660.appspot.com",
  messagingSenderId: "469176413274",
  appId: "1:469176413274:web:1e9639ce4372184baffc63",
  measurementId: "G-1RPBZ2B3WX"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth= getAuth(app)
const db = getFirestore(app)

const signup = async (name,email,password)=>{
    try{
        const res = await createUserWithEmailAndPassword(auth,email,password);
        const user = res.user
        await addDoc(collection(db,"user"),{
            uid:user.uid,
            name,
            authProvider:"local",
            email,
        })
    } catch (error){
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "))
    }
}
const login = async(email,password)=>{
    try{
        await signInWithEmailAndPassword(auth,email,password)
    }catch(error){
        console.log(error)
        toast.error(error.code.split('/')[1].split('-').join(" "))
    }
}
const logout=()=>{
    signOut(auth)
}
export {auth, db, login, signup, logout};