<script setup>
    import { onMounted, ref} from 'vue';     
    // vetor contendo as postagens 
    let vetor = ref ([]);

    onMounted(() => {
        fetch('https://jsonplaceholder.typicode.com/posts').then(retorno => retorno.json()).then(retorno => vetor.value = retorno)
    });

</script>


<template>
    <H1>Requisicoes</H1>
    <table>
        <tr v-for="v in vetor">
            <td>{{ v.userId }}</td>
            <td>{{ v.id }}</td>
            <td>{{ v.title }}</td>
            <td>{{ v.body }}</td>
        </tr>
    </table>
</template>