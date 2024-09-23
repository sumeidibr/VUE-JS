<template>
    <div class="admin-panel">
      <h2>Painel do Administrador</h2>
      <h3>Usuários Registrados</h3>
      <ul>
        <li v-for="user in users" :key="user.id">
          {{ user.email }} - {{ user.perfil }}
          <button @click="removeUser(user.id)">Excluir</button>
        </li>
      </ul>
      
      <h3>Adicionar Novo Usuário</h3>
      <input v-model="newUserEmail" placeholder="Email" />
      <select v-model="newUserPerfil">
        <option value="Usuário">Usuário</option>
        <option value="Admin">Admin</option>
      </select>
      <button @click="addUser">Adicionar Usuário</button>
  
      <h3>Livros da Biblioteca</h3>
      <ul>
        <li v-for="book in books" :key="book.id">
          {{ book.title }} - {{ book.author }} ({{ book.year }}) - Gênero: {{ book.genre }}
          <button @click="removeBook(book.id)">Excluir</button>
        </li>
      </ul>
  
      <h3>Adicionar Novo Livro</h3>
      <input v-model="newBookTitle" placeholder="Título" />
      <input v-model="newBookAuthor" placeholder="Autor" />
      <input v-model="newBookGenre" placeholder="Gênero" />
      <input v-model="newBookYear" type="number" placeholder="Ano" />
      <input v-model="newBookQuantity" type="number" placeholder="Quantidade" />
      <button @click="addBook">Adicionar Livro</button>
    </div>
  </template>
  
  <script>
  import { useUserStore } from '@/stores/userStore'
  import { useBookStore } from '@/stores/bookStore'
  import { computed, ref } from 'vue'
  
  export default {
    setup() {
      const userStore = useUserStore()
      const bookStore = useBookStore()
  
      const users = computed(() => userStore.users)
      const books = computed(() => bookStore.books)
  
      const newUserEmail = ref('')
      const newUserPerfil = ref('Usuário')
  
      const newBookTitle = ref('')
      const newBookAuthor = ref('')
      const newBookGenre = ref('')
      const newBookYear = ref('')
      const newBookQuantity = ref(0)
  
      const addUser = () => {
        userStore.addUser(newUserEmail.value, newUserPerfil.value)
        newUserEmail.value = ''
        newUserPerfil.value = 'Usuário'
      }
  
      const removeUser = (id) => {
        userStore.removeUser(id)
      }
  
      const addBook = () => {
        bookStore.addBook(
          newBookTitle.value,
          newBookAuthor.value,
          newBookGenre.value,
          newBookYear.value,
          newBookQuantity.value
        )
        newBookTitle.value = ''
        newBookAuthor.value = ''
        newBookGenre.value = ''
        newBookYear.value = ''
        newBookQuantity.value = 0
      }
  
      const removeBook = (id) => {
        bookStore.removeBook(id)
      }
  
      return {
        users,
        books,
        newUserEmail,
        newUserPerfil,
        newBookTitle,
        newBookAuthor,
        newBookGenre,
        newBookYear,
        newBookQuantity,
        addUser,
        removeUser,
        addBook,
        removeBook
      }
    }
  }
  </script>
  
  <style scoped>
  .admin-panel {
    margin: 1rem;
  }
  .admin-panel h3 {
    margin-top: 1.5rem;
  }
  .admin-panel ul {
    list-style: none;
    padding: 0;
  }
  </style>
  