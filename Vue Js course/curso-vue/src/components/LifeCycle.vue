<script setup>
// Importacoes
import { onMounted, ref } from 'vue';

let texto = ref('hello world');

// lifecycle onmounted

onMounted (() =>{

    setTimeout(() => {
        texto.value = 'alterando o texto inicial';
    }, 3000);

});

</script>

<template>
    <h1>{{ texto }}</h1>


</template>