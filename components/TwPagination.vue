<script setup>

// get props
const props = defineProps({
    previousPage: String,
    nextPage: String,
    totalItems: Number,
    limit: Number
})

const page = ref(1)
const items = ref(Array(props.totalItems))

defineEmits(["on-next-click", "on-previous-click"])


</script>

<template>
    <nav
              class="mt-12 mb-12 px-4 py-3 sm:px-5 md:px-5 lg:px-5"
              aria-label="Pagination"
            >
              <a
              v-if="previousPage != null"
                class="cursor-pointer border-solid border-2 border-sky-500 rounded  px-3 py-2"
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
    <!-- <div class="mt-12 mb-12">
        <UPagination v-model="page" :page-count="20" :total="items.length" />
    </div> -->
</template>