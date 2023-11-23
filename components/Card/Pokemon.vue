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
              <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2 text-white text-center">{{ name }}</div>
                </div>
            </div>

        </NuxtLink>
</div>
</template>