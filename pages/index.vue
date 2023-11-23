<!-- we can add a index page  -->
<script setup>
definePageMeta({
    layout: 'default'
})

useHead({
    title: 'Pokemon',
    meta: [
        { name: 'description', content: 'Here you can find pokemons' }
    ]
})
let pokemons = ref([])
let totalItems = ref(0);//total of pages
let nextPage = ref();
let previousPage = ref();


// vars for pagination
let currentPage = ref(1)
let limit=ref(20);
let offset= ref(20);
let pokeData = ref([])

// data fetching
const fetchData=async(limit,offset)=>{
    // validate dat
    let maxLimit= (limit !='')? `&limit=${limit}` : ''
    let offsetVal= (offset!='')? `?offset=${offset}`:''

    const response = await useFetch(`https://pokeapi.co/api/v2/pokemon${offsetVal}${maxLimit}`);
    const { count, next, previous, results } = await response.data.value
    // check if results has data and the response status is success
    if (results.length > 0 && response.status.value ==='success') {
        pokemons.value = results;
        nextPage.value= next;
        previousPage.value= previous;
        totalItems.value=count;
    }
}

await fetchData('','');

const onPreviousClick=async()=>{
    offset.value=offset.value-20;
       await fetchData(limit.value,offset.value);

}
const onNextClick=async()=>{
    offset.value=offset.value+20;
   await fetchData(limit.value,offset.value);
}

</script>
<template>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
       <CardPokemon v-for="(pokemon, index) in pokemons" :key="pokemon + index" :name="pokemon.name" />
    </div>
    <div class="flex justify-center items-center">
        <TwPagination
        :previousPage="previousPage"
        :nextPage="nextPage"
        :totalItems="totalItems"
        :limit="limit"
        @on-previous-click="onPreviousClick"
          @on-next-click="onNextClick"
        />
    </div>
</template>