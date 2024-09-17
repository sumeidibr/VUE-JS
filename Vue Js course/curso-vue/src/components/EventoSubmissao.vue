<script setup>

// Funcao para validar o formulario
function validaFormulario() {
    alert('Evento d submissao');
    
}
</script>

<template>
<form @submit="validaFormulario">
    <input type="submit" value="Enviar formulario">
</form>
</template>