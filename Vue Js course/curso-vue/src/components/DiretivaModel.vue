<script setup>

    // importar ref
    import { ref } from 'vue';

  var texto = ref('');

</script>


<template>
    <input type="text" v-model="texto">
    <p>{{ texto }}</p>
</template>