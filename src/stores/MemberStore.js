import { defineStore } from 'pinia'
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "../fb";

export const useMemberStore = defineStore({
    id: 'member',
    state: () => ({
        list: [],
    }),
    getters: {
        getMemberById: (state) => (id) => {
            return state.list.find((e) => e.id === id);
        },
        
    },
    actions: {
        async listMembers(){
            if(this.list.length > 0) return;
            const querySnapshot = await getDocs(collection(db, "members"));
            querySnapshot.forEach((doc) => {
                const newMember = {
                    id: doc.id,
                    image: doc.data().image,
                    name: doc.data().name,
                    role: doc.data().role,
                    year: doc.data().year,
                    github: doc.data().github,
                    linkedin: doc.data().linkedin,
                    link: doc.data().link
                }
                this.list.push(newMember);
            });
        },
        async createMember(member) {
            try {
                const docRef = await addDoc(collection(db, "members"), member);
                console.log("Document written with ID: ", docRef.id);
                member.id = docRef.id;
                this.list.push(member);
            } catch (e) { console.error("Error adding document: ", e); }
        },
        async deleteMember(id) {
            try {
                await deleteDoc(doc(db, "members", id));
                const index = this.list.findIndex((e) => e.id === id);
                this.list.splice(index, 1);
                console.log("Document successfully deleted!");
            }catch(e){ console.error("Error removing document: ", e);}

        }
    },
})