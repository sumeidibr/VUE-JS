<script setup>

let texto = '<p style="color: red;">aprendendo a deritiva v-html</p>';
</script>


<template>
    <div v-html="texto"></div>
    <div> {{ texto }}</div>
</template>