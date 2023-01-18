<template>
<div class="card flex flex-col justify-between w-64 h-64 p-4 flex-grow rounded shadow last:flex" :class="bgColor">
    <div>
        <p class="">{{ date.toLocaleString('default', { month: 'long' }) }}</p>
        <h1 class="text-5xl font-semibold">{{ date.getDate() }}</h1>
    </div>
    <div>
        <p class="text-xl">{{ name }}</p>
    </div>
    <div class="flex justify-between items-center text-sm">
        <div>
            <p>{{ note }}</p>
            <p>{{ venue }}</p>
        </div>
        <div>
            <span class="material-symbols-outlined">
                arrow_forward
            </span>
        </div>
    </div>
</div>
</template>

<script>
export default{
    props: ['bgColor'],
    data(){
        return {
            date: new Date(),
            name: "TIPS FRESHERS OF BATCH 2023",
            venue: "Hotel Raddison",
            note: "01:00 - 04:30",
            link: "https://aroxbit.com",
        }
    },
    
}
</script>