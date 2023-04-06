<template>
    <!-- Main modal -->
    <div v-if="props.show" id="authentication-modal" tabindex="-1" aria-hidden="true" class="fixed top-0 flex left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full justify-center items-center ">
        <div class="relative w-full  max-w-md md:h-auto">
            <!-- Modal content -->
            <div class="relative bg-gray-200 rounded-lg shadow">
                <!-- Modal header -->
                <div class="px-6 py-6 lg:px-8">
                    <h3 class="mb-4 text-xl font-medium text-gray-600 text-center">Member Login</h3>
                    <form class="space-y-6" action="#">
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-600">Member Email</label>
                            <input type="email" v-model="email" name="email" id="email" class="bg-white border border-gray-300 text-gray-600 text-sm rounded block w-full p-2.5" placeholder="email@domain.com" required>
                        </div>
    
                        <div>
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-600">Member Password</label>
                            <input type="password" v-model="password" name="password" id="password" class="bg-white border border-gray-300 text-gray-600 text-sm rounded block w-full p-2.5" placeholder="********" required>
                        </div>
                        
                        <div class="flex flex-row">
                            <button type="button" class=" mx-1 w-full text-black bg-gray-300 hover:bg-gray-400 active:bg-slate-300 focus:outline-none font-medium rounded text-sm px-5 py-2.5 text-center" @click.prevent="$emit('toggleLoginForm')">Cancel</button>
    
                            <button type="button" :disabled="loading" @click.prevent="login" class=" mx-1 w-full text-white bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-400 focus:outline-none font-medium rounded text-sm px-5 py-2.5 text-center">
                                <i v-if="loading" class="fa-solid fa-bolt fa-beat" style="color: #ffffff;"></i>
                                <span v-else>Login</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div> 
    
    </template>

<script setup>
import { ref, defineEmits } from 'vue'
import { useAuthStore } from '../stores/AuthStore';
const authStore = useAuthStore();
const props = defineProps(["show"]);
const emit = defineEmits(["toggleLoginForm"]);
const email = ref("");
const password = ref("");
const loading = ref(false);

async function login(){
    loading.value = true;
    await authStore.login(email.value, password.value);
    if(authStore.user){
        emit("toggleLoginForm");
        email.value = '';
    }
    password.value = '';
    loading.value = false;
}

// async function createEvent(){
//     console.log(name.value, date.value, time.value, location.value, link.value);
//     await eventStore.createEvent({name: name.value, date: date.value, time: time.value, location: location.value, link: link.value});
//     name.value = ""; date.value = ""; time.value = ""; location.value = ""; link.value = "";
//     emit("toggleModal");
// }

</script>