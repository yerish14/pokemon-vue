<script setup>

// get props
defineProps({
    previousPage: String,
    nextPage: String
})

defineEmits(["on-next-click","on-previous-click"])
</script>

<template>
    <nav
      class="mt-12 mb-12 px-4 py-3 sm:px-5 md:px-5 lg:px-5"
      aria-label="Pagination"
    >
      <a
      v-if="previousPage != null"
        class="cursor-pointer rounded border-solid border-2 border-sky-500 rounded border px-3 py-2"
      @click="$emit('on-previous-click')">
        <span>Previus</span>
      </a>
      <a v-if="nextPage !=null"
        class=" cursor-pointer rounded border-solid border-2 border-sky-500 ml-3 px-3 py-2"
       @click="$emit('on-next-click')"
        >
        <span>Next</span>
      </a>
    </nav>
  </template>