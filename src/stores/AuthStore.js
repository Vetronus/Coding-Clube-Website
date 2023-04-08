import { defineStore } from 'pinia'
import { collection, getDocs, addDoc, Timestamp } from "firebase/firestore";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../fb";





export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        user: true//null,
    }),
    actions: {
        async login(email, password){
            if(this.user) await this.logout();
            
            try{
                const userCredential = await signInWithEmailAndPassword(auth, email, password)
                this.user = userCredential.user;
                const token = await userCredential.user.getIdToken();
            }
            catch(e){
                console.log(e);
                window.alert("Wrong ID or Password.");
            }

        },
        async logout() {
            await signOut(auth);
            this.user = null;
        },
        async signup() {
            
        },
    },
})