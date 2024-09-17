<script setup>

function mensagem() {
    alert("Evento de clique");
}
</script>
<!--Usamos @keyup.tecla, na tecla colocamos a tecla que quando pressionada acionara o evento de clique -->
<template>
    <input type="text" @keyup.r="mensagem">
</template>