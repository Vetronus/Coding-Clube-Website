<template>
<!-- Main modal -->
<div v-if="props.show" id="authentication-modal" tabindex="-1" aria-hidden="true" class="fixed top-0 flex left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full justify-center items-center ">
    <div class="relative w-full  max-w-md md:h-auto">
        <!-- Modal content -->
        <div class="relative bg-gray-200 rounded-lg shadow">
            <!-- Modal header -->
            <div class="px-6 py-6 lg:px-8">
                <h3 class="mb-4 text-xl font-medium text-gray-600 text-center">Create A New Event</h3>
                <form class="space-y-6" action="#">
                    <div>
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-600">Event Name</label>
                        <input type="text" v-model="name" name="name" id="name" class="bg-white border border-gray-300 text-gray-600 text-sm rounded block w-full p-2.5" placeholder="TIPS Event" required>
                    </div>

                    <div>
                        <label for="date" class="block mb-2 text-sm font-medium text-gray-600">Event Date</label>
                        <input type="date" v-model="date" name="date" id="date" class="bg-white border border-gray-300 text-gray-600 text-sm rounded block w-full p-2.5" required>
                    </div>

                    <div>
                        <label for="time" class="block mb-2 text-sm font-medium text-gray-600">Event Timing</label>
                        <input type="text" v-model="time" name="time" id="time" class="bg-white border border-gray-300 text-gray-600 text-sm rounded block w-full p-2.5" placeholder="01:00 - 03:00 PM" required>
                    </div>

                    <div>
                        <label for="location" class="block mb-2 text-sm font-medium text-gray-600">Event Location</label>
                        <input type="text" v-model="location" name="location" id="location" class="bg-white border border-gray-300 text-gray-600 text-sm rounded block w-full p-2.5" placeholder="Hotel Raddison" required>
                    </div>

                    <div>
                        <label for="link" class="block mb-2 text-sm font-medium text-gray-600">Event URL</label>
                        <input type="text" v-model="link" name="link" id="link" class="bg-white border border-gray-300 text-gray-600 text-sm rounded block w-full p-2.5" placeholder="https://google.com">
                    </div>

                    
                    <div class="flex flex-row">
                        <button type="button" class=" mx-1 w-full text-black bg-gray-300 hover:bg-gray-400 active:bg-slate-300 focus:outline-none font-medium rounded text-sm px-5 py-2.5 text-center" @click.prevent="$emit('toggleModal')">Cancel</button>

                        <button type="button" :disabled="loading" @click.prevent="createEvent" class=" mx-1 w-full text-white bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-400 focus:outline-none font-medium rounded text-sm px-5 py-2.5 text-center">
                            <i v-if="loading" class="fa-solid fa-bolt fa-beat" style="color: #ffffff;"></i>
                            <span>Create</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div> 

</template>


<script setup>
import { ref } from 'vue'
import { useEventStore } from '../stores/EventStore';
const eventStore = useEventStore();
const props = defineProps(["show"]);
const emit = defineEmits(["toggleModal"]);
const name = ref("");
const date = ref("");
const time = ref("");
const location = ref("");
const link = ref("");
const loading = ref(false);

async function createEvent(){
    loading.value = true;
    await eventStore.createEvent({name: name.value, date: date.value, time: time.value, location: location.value, link: link.value});
    name.value = ""; date.value = ""; time.value = ""; location.value = ""; link.value = "";
    emit("toggleModal");
    loading.value = false;
}

</script>