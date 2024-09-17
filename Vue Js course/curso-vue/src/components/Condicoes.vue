<script setup>
// Variaveis
let exibir = true;
let media = 4;
</script>

<!--  Usamos a condicao v-if para exibir ou nao os elementos, se for verdade exibira caso contrario nao exibira-->
<template>
    <h1 v-if="exibir"> Hello world</h1>

    <p v-if="media >= 7">Aprovado</p>
    <p v-else-if="media >= 5">Em exame</p>
    <p v-else>Reprovado</p>
</template>