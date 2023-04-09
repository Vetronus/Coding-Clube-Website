import { defineStore } from 'pinia'
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "../fb";

export const useProjectStore = defineStore({
    id: 'project',
    state: () => ({
        list: [],
    }),
    actions: {
        async listProjects(){
            if(this.list.length > 0) return;
            const querySnapshot = await getDocs(collection(db, "projects"));
            querySnapshot.forEach((doc) => {
                const newProject = {
                    id: doc.id,
                    image: doc.data().image,
                    name: doc.data().name,
                    date: new Date(doc.data().date),
                    tags: doc.data().tags,
                    team: JSON.parse(doc.data().team),
                    link: doc.data().link,
                    github: doc.data().github
                }
                this.list.push(newProject);
            });
            this.list.sort((a, b) => b.date.getTime() - a.date.getTime());
        },
        async createProject(project) {
            try {
                console.log(project.team);
                project.team.forEach((element, index) => {
                    project.team[index] = element.value;
                });
                project.team = JSON.stringify(project.team);
                console.log(project.team);
                const docRef = await addDoc(collection(db, "projects"), project);
                console.log("Document written with ID: ", docRef.id);
                project.id = docRef.id;
                project.date = new Date(project.date);
                project.team = JSON.parse(project.team);
                console.log(project.team);
                this.list.push(project);
                this.list.sort((a, b) => b.date.getTime() - a.date.getTime());
            } catch (e) { console.error("Error adding document: ", e); }
        },
        async deleteProject(id) {
            try {
                await deleteDoc(doc(db, "projects", id));
                const index = this.list.findIndex((e) => e.id === id);
                this.list.splice(index, 1);
                console.log("Document successfully deleted!");
            }catch(e){ console.error("Error removing document: ", e);}

        }
    },
})