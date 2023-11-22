<script setup>
// get name from url params
const {params} = useRoute();

let pokemonData = ref({})
const getPokemon = async ()=>{
    const response = await useFetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
    
    pokemonData = response.data.value;
}
await getPokemon();

</script>

<template>
    <div>
         {{ pokemonData.id }}
        <!-- {{ pokemonData.sprites }}  -->
        {{ pokemonData.name }}
        <img :src="pokemonData.sprites.other.home.front_default" :alt="pokemonData.name">
        <!-- {{ pokemonData.types }}
        {{ pokemonData.abilities }} -->
    </div>
</template>