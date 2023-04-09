<template>
    <div id="contact" class="lg:h-screen flex flex-row justify-center items-center bg-black text-white  ">
        <div class="lg:max-w-5xl rounded flex flex-col lg:flex-row justify-center items-center bg-gray-800 lg:m-8">

            <div class="flex flex-col lg:w-1/2 gap-6 p-8 lg:border-r lg:border-gray-500">

                <h1 class="text-4xl font-semibold text-indigo-500">CONTACT US</h1>
                <form class="flex flex-col gap-6">
                    <div class="flex md:flex-row flex-col gap-4">
                        <div class="flex flex-col">
                            <label for="name" class="mb-2">Name</label>
                            <input type="text" name="name" id="name" class="bg-gray-700 text-white py-1.5 px-2 border border-gray-500" placeholder="Full Name">
                        </div>
                        <div class="flex flex-col">
                            <label for="email" class="mb-2">Email</label>
                            <input type="email" name="email" id="email" class="bg-gray-700 text-white py-1.5 px-2 border border-gray-500" placeholder="mail@domain.com">
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <label for="message" class="mb-2">Message</label>
                        <textarea name="message" cols="30" rows="10" class="bg-gray-700 text-white p-2 border border-gray-500" placeholder="Enter your message here"></textarea>
                    </div>

                    <div class="flex flex-row">
                        <button class=" text-white w-full p-2 font-medium bg-indigo-500 rounded">SEND MESSAGE</button>
                    </div>

                </form>
            </div>

            <div class="flex flex-col lg:w-1/2 gap-6 p-8 justify-center items-center">
                <div class="flex flex-col gap-3">
                    <h1 class="text-4xl font-semibold text-indigo-500">CONTACT INFO</h1>
                    <div class="max-w-md">
                        <i class=" mr-2 fa-solid fa-location-dot"></i>
                        <span>Dwarka Sector 9, Institutional Area, Near Dwarka Sec. 10, Metro Station. New Delhi-110075</span>
                    </div>
                    <div>
                        <i class="mr-2 fa-solid fa-envelope"></i>
                        <span>tips@tips.edu.in</span>
                    </div>
                    <div>
                        <i class="mr-2 fa-solid fa-phone"></i>
                        <span>011- 45636921/22/23</span>
                    </div>
                    <div>
                        <i class="mr-2 fa-solid fa-mobile-screen-button"></i>
                        <span>9315911715</span>
                    </div>
                    <div>
                        <i class="mr-2 fa-solid fa-mobile-screen-button"></i>
                        <span>9315911714</span>
                    </div>
                </div>

                <div class="flex flex-col gap-3">
                    <h1 class="text-4xl font-semibold text-indigo-500">FOLLOW US</h1>
                    <div class="max-w-md">
                        <i class=" mr-2 fa-solid fa-location-dot"></i>
                        <span>Dwarka Sector 9, Institutional Area, Near Dwarka Sec. 10, Metro Station. New Delhi-110075</span>
                    </div>
                    <div>
                        <i class="mr-2 fa-solid fa-envelope"></i>
                        <span>tips@tips.edu.in</span>
                    </div>
                    <div>
                        <i class="mr-2 fa-solid fa-phone"></i>
                        <span>011- 45636921/22/23</span>
                    </div>
                    <div>
                        <i class="mr-2 fa-solid fa-mobile-screen-button"></i>
                        <span>9315911715</span>
                    </div>
                    <div>
                        <i class="mr-2 fa-solid fa-mobile-screen-button"></i>
                        <span>9315911714</span>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<style src="@vueform/multiselect/themes/default.css"></style>