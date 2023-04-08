<template>
<!-- Main modal -->
<div id="authentication-modal" tabindex="-1" aria-hidden="true" class="fixed top-0 flex left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full justify-center items-center ">
    <div class="relative w-full  max-w-md md:h-auto">
        <!-- Modal content -->
        <div class="relative bg-gray-200 rounded-lg shadow">
            <!-- Modal header -->
            <div class="px-6 py-6 lg:px-8">
                <h3 class="mb-4 text-xl font-medium text-gray-600 text-center">Create A New Project</h3>
                <form class="space-y-6" @submit.prevent="createProject">

                    <div>
                        <label for="file" class="block mb-2 text-sm font-medium text-gray-600">Project Screenshot</label>
                        <input type="file" @change="fileUpdated" name="file" class="bg-white border border-gray-300 text-gray-600 text-sm rounded block w-full p-2.5" placeholder="TIPS Project" required>
                    </div>

                    <div>
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-600">Project Name</label>
                        <input type="text" v-model="name" name="name" class="bg-white border border-gray-300 text-gray-600 text-sm rounded block w-full p-2.5" placeholder="TIPS Project" required>
                    </div>

                    <div>
                        <label for="date" class="block mb-2 text-sm font-medium text-gray-600">Project Date</label>
                        <input type="date" v-model="date" name="date" class="bg-white border border-gray-300 text-gray-600 text-sm rounded block w-full p-2.5" required>
                    </div>

                    <div>
                        <label for="tags" class="block mb-2 text-sm font-medium text-gray-600">Used Technologies</label>
                        <Multiselect name="tags" v-model="tags" mode="tags" :close-on-select="false" :create-option="true" :searchable="true" placeholder="Frameworks & Languages" />
                    </div>

                    <div>
                        <label for="team" class="block mb-2 text-sm font-medium text-gray-600">Project Developers</label>
                        <Multiselect name="team" :options="options" v-model="team" mode="multiple" :close-on-select="false" :object="true" placeholder="Select Project Developers" />
                    </div>

                    <div>
                        <label for="github" class="block mb-2 text-sm font-medium text-gray-600">Github URL</label>
                        <input type="text" v-model="github" name="github" class="bg-white border border-gray-300 text-gray-600 text-sm rounded block w-full p-2.5" placeholder="https://github.com">
                    </div>

                    <div>
                        <label for="link" class="block mb-2 text-sm font-medium text-gray-600">Project URL</label>
                        <input type="text" v-model="link" name="link" class="bg-white border border-gray-300 text-gray-600 text-sm rounded block w-full p-2.5" placeholder="https://google.com">
                    </div>

                    
                    <div class="flex flex-row">
                        <button type="reset" class=" mx-1 w-full text-black bg-gray-300 hover:bg-gray-400 active:bg-slate-300 focus:outline-none font-medium rounded text-sm px-5 py-2.5 text-center" @click.prevent="$emit('toggleModal')">Cancel</button>

                        <button type="submit" :disabled="loading" class=" mx-1 w-full text-white bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-400 focus:outline-none font-medium rounded text-sm px-5 py-2.5 text-center">
                            <i v-if="loading" class="fa-solid fa-bolt fa-beat" style="color: #ffffff;"></i>
                            <span v-else >Create</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div> 

</template>


<script setup>
import Multiselect from '@vueform/multiselect'
import { storage } from '../fb';
import { ref as path, uploadBytesResumable, getDownloadURL } from '@firebase/storage';
import { onMounted, ref } from 'vue';
import { useProjectStore } from '../stores/ProjectStore';
import { useMemberStore } from '../stores/MemberStore';
const projectStore = useProjectStore();
const memberStore = useMemberStore();
const emit = defineEmits(["toggleModal"]);
const image = ref("");
const name = ref("");
const date = ref("");
const tags = ref([]);
const team = ref([]);
const github = ref("");
const link = ref("");
const file = ref(null);
const loading = ref(false);
const progress = ref(0);

const options = ref([]);



async function fileUpdated(e){
    file.value = e.target.files[0];

    // const fileName = "" + new Date().getTime()+file.value.name;
    // const uploadRef = path(storage, fileName);
    // await uploadBytesResumable(uploadRef, file.value);
    // const url = await getDownloadURL(uploadRef);
    // console.log(url);

    // uploadTask.on('state_changed', (snapshot) => {
    //     progress.value = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //     console.log('Upload is ' + progress.value + '% done');
    // }, (error) => {
    //     console.log(error);
    // }, async () => {
    //     const url = await getDownloadURL(uploadRef);
    //     console.log(url);
    // })
}

async function createProject(){
    
    if(tags.value.length == 0 || team.value.length == 0)
        return alert("Please fill all the fields");
    
    loading.value = true;

    // Upload image to firebase storage
    const fileName = new Date().getTime()+file.value.name;
    const uploadRef = path(storage, fileName);
    await uploadBytesResumable(uploadRef, file.value);
    image.value = await getDownloadURL(uploadRef);

    await projectStore.createProject({image: image.value, name: name.value, date: date.value, tags: tags.value, team: team.value, link: link.value, github: github.value});
    image.value = ""; name.value = ""; date.value = ""; tags.value = []; team.value = [];
    github.value=""; link.value = "";
    emit("toggleModal");

    loading.value = false;
}

onMounted(() => {
    memberStore.list.forEach(member => {
        options.value.push({value: member, label: member.name});
    });
})

</script>

<style src="@vueform/multiselect/themes/default.css"></style>