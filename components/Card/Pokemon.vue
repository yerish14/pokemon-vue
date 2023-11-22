<script setup>
// get props
defineProps({
        name: String
})
</script>

<template>
    <div>
        <NuxtLink :to='`/pokemon/${name}`'>
            <div class="bg-indigo-700 max-w-sm rounded overflow-hidden shadow-lg shadow-blue-500/40 hover:shadow-indigo-500/40">
                <!-- <img class="w-full"
                    src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg"
                    alt="Sunset in the mountains"> -->
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2 text-white text-center">{{ name }}</div>
                    <!-- <p class="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p> -->
                </div>
                <!-- <div class="px-6 pt-4 pb-2">
                </div> -->
            </div>

        </NuxtLink>
</div>
</template>