<template>
<div class="cursor-pointer card flex flex-col justify-between w-64 h-64 p-4 flex-grow rounded shadow last:flex" :class="event.color">
    <div>
        <p class="">{{ event.date.toLocaleString('default', { month: 'long' }) }}</p>
        <h1 class="text-5xl font-semibold">{{ event.date.getDate() }}</h1>
    </div>
    <div>
        <p class="text-xl">{{ event.name }}</p>
    </div>
    <div class="flex justify-between items-center text-sm">
        <div>
            <p>{{ event.time }}</p>
            <p>{{ event.location }}</p>
        </div>
        <div>
            <i class="text-xl mr-2 fa-solid fa-arrow-right"></i>
        </div>
    </div>
</div>
</template>

<script>
export default{
    props: ['event'],
}
</script>