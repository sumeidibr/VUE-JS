<script setup>

// Funcao para validar o formulario
function validaFormulario(event) {
    alert('Evento d submissao');
    
    event.preventDefault();
}


</script>

<template>
<form action="https://google.com" @submit="validaFormulario">
    <input type="submit" value="Enviar formulario">
</form>
</template>