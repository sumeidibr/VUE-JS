<script setup>
// vetor
let nomes= ['tobias', 'zucula', 'mphemo'];
</script>


<template>
    <ul>
        <li v-for="nome  in nomes">{{ nome}}</li>
    </ul>
</template>