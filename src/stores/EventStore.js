import { defineStore } from 'pinia'
import { collection, getDocs, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../fb";


let colors = [
    "bg-gradient-to-r from-emerald-400 to-cyan-400",
    "bg-gradient-to-r from-cyan-400 to-blue-400",
    "bg-gradient-to-r from-blue-400 to-violet-400",
    "bg-gradient-to-r from-violet-400 to-fuchsia-400",
    "bg-gradient-to-r from-fuchsia-400 to-rose-400",
    "bg-gradient-to-r from-rose-400 to-orange-400"
]

export const useEventStore = defineStore({
    id: 'event',
    state: () => ({
        list: [],
    }),
    actions: {
        async listEvents(num){
            if(this.list.length > 0) return;
            
            let i = 0;
            const querySnapshot = await getDocs(collection(db, "events"));
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data().name}`);
                const nev = {
                    id: doc.id,
                    name: doc.data().name,
                    date: new Date(doc.data().date),
                    time: doc.data().time,
                    location: doc.data().location,
                    link: doc.data().link,
                    color: colors[i - (parseInt(i/6)*6)]
                }
                i++;
                this.list.push(nev);
            });
        },
        async createEvent(event) {
            const i = this.list.length;
            
            try {
                const docRef = await addDoc(collection(db, "events"), event);
                console.log("Document written with ID: ", docRef.id);
                event.id = docRef.id;
                event.date = new Date(event.date);
                event.color = colors[i - (parseInt(i/6)*6)];
                this.list.push(event);
            } catch (e) { console.error("Error adding document: ", e); }
        },
    },
})