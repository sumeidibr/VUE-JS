<!-- Script -->
<script setup>
// variaveis

let nome = 'Tobias';
let idade = 25;
let n1 = 10;
let n2 = 5;
</script>


<!-- Html -->
 <!-- O html e escrito dentro dessa tag template-->
 <template>
  <p>{{ 'Ola ' + nome + ' voce tem ' + idade + ' anos ' }}</p>
  <p>{{ n1*n2 }}</p>
 </template>