<script setup>
    let validacao = true;
</script>

<!--- CSS-->
<style>
.ok{
    color: green;
}

.falha{
    color: red;
}
</style>

<template>
<p :class="validacao ? 'ok' : 'falha'">Utilizando a diretiva de classe</p>
</template>