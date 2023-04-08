<template>
    <!-- Main modal -->
    <div id="authentication-modal" tabindex="-1" aria-hidden="true" class="fixed top-0 flex left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full justify-center items-center ">
        <div class="relative w-full  max-w-md md:h-auto">
            <!-- Modal content -->
            <div class="relative bg-gray-200 rounded-lg shadow">
                <!-- Modal header -->
                <div class="px-6 py-6 lg:px-8">
                    <h3 class="mb-4 text-xl font-medium text-gray-600 text-center">Add New Member To The Team</h3>
                    <form class="space-y-6" @submit.prevent="createMember">
    
                        <div>
                            <label for="file" class="block mb-2 text-sm font-medium text-gray-600">Member Picture</label>
                            <input type="file" @change="fileUpdated" name="file" class="bg-white border border-gray-300 text-gray-600 text-sm rounded block w-full p-2.5" placeholder="Member Picture" required>
                        </div>
    
                        <div>
                            <label for="name" class="block mb-2 text-sm font-medium text-gray-600">Member Name</label>
                            <input type="text" v-model="name" name="name" class="bg-white border border-gray-300 text-gray-600 text-sm rounded block w-full p-2.5" placeholder="Member Name" required>
                        </div>
    
                        <div>
                            <label for="role" class="block mb-2 text-sm font-medium text-gray-600">Member Role</label>
                            <input type="text" v-model="role" name="role" class="bg-white border border-gray-300 text-gray-600 text-sm rounded block w-full p-2.5" placeholder="Core Member" required>
                        </div>

                        <div>
                            <label for="year" class="block mb-2 text-sm font-medium text-gray-600">Joining Year</label>
                            <input type="text" v-model="year" name="year" class="bg-white border border-gray-300 text-gray-600 text-sm rounded block w-full p-2.5" placeholder="2022" required>
                        </div>
    
                        <div>
                            <label for="github" class="block mb-2 text-sm font-medium text-gray-600">Github URL</label>
                            <input type="text" v-model="github" name="github" class="bg-white border border-gray-300 text-gray-600 text-sm rounded block w-full p-2.5" placeholder="https://github.com">
                        </div>

                        <div>
                            <label for="linkedin" class="block mb-2 text-sm font-medium text-gray-600">Linkedin URL</label>
                            <input type="text" v-model="linkedin" name="linkedin" class="bg-white border border-gray-300 text-gray-600 text-sm rounded block w-full p-2.5" placeholder="https://linkedin.com">
                        </div>
    
                        <div>
                            <label for="link" class="block mb-2 text-sm font-medium text-gray-600">Portfolio URL</label>
                            <input type="text" v-model="link" name="link" class="bg-white border border-gray-300 text-gray-600 text-sm rounded block w-full p-2.5" placeholder="https://google.com">
                        </div>
    
                        
                        <div class="flex flex-row">
                            <button type="reset" class=" mx-1 w-full text-black bg-gray-300 hover:bg-gray-400 active:bg-slate-300 focus:outline-none font-medium rounded text-sm px-5 py-2.5 text-center" @click.prevent="$emit('toggleModal')">Cancel</button>
    
                            <button type="submit" :disabled="loading"  class=" mx-1 w-full text-white bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-400 focus:outline-none font-medium rounded text-sm px-5 py-2.5 text-center">
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
    import { storage } from '../fb';
    import { ref as path, uploadBytesResumable, getDownloadURL } from '@firebase/storage';
    import { ref } from 'vue';
    import { useMemberStore } from '../stores/MemberStore';
    const memberStore = useMemberStore();
    const emit = defineEmits(["toggleModal"]);
    const image = ref("");
    const name = ref("");
    const role = ref("");
    const year = ref("");
    const github = ref("");
    const linkedin = ref("");
    const link = ref("");
    const file = ref(null);
    const loading = ref(false);
    
    async function fileUpdated(e){
        file.value = e.target.files[0];
    }
    
    async function createMember(){
        loading.value = true;
    
        // Upload image to firebase storage
        const fileName = new Date().getTime()+file.value.name;
        const uploadRef = path(storage, fileName);
        await uploadBytesResumable(uploadRef, file.value);
        image.value = await getDownloadURL(uploadRef);
    
        await memberStore.createMember({image: image.value, name: name.value, role: role.value, year: year.value, linkedin: linkedin.value, link: link.value, github: github.value});
        image.value = ""; name.value = ""; role.value = ""; linkedin.value = "";
        github.value=""; link.value = ""; year.value = "";
        emit("toggleModal");
    
        loading.value = false;
    }
    
    </script>