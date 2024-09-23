<script setup>
import propinhos from './Props2.vue';

/// Variaveis
let cidade = 'mapurto';

let cidades = ['xai xai', 'matola', 'boane'];

function mensagem() {
    alert('Funcao criada no componenete props 1');
}
</script>

<template>
<propinhos nome="tobias" idade="22" :cidade="cidade" :vetor="cidades" :funcao="mensagem"></propinhos>
</template>