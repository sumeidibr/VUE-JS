<template>
    <div class="user-panel">
      <h2>Painel de Usuário</h2>
      <ul>
        <li v-for="book in books" :key="book.id" class="book-item">
          <div class="book-info">
            <strong>{{ book.title }}</strong> - {{ book.author }} ({{ book.year }}) - Gênero: {{ book.genre }}
            <span v-if="book.quantity === 0" class="unavailable">Livro não disponível no momento</span>
          </div>
          <div class="book-actions">
            <label>
              <input
                type="checkbox"
                :checked="book.read"
                @change="toggleRead(book.id)" 
              />
              Marcar como {{ book.read ? 'não lido' : 'lido' }}
            </label>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { useBookStore } from '../stores/bookStore.js'
  import { computed } from 'vue'
  
  export default {
    setup() {
      const bookStore = useBookStore()
  
      // Computed para obter a lista de livros reativa da store
      const books = computed(() => bookStore.books)
  
      // Método que chama a ação na store para alternar o estado de 'read' de um livro
      const toggleRead = (id) => {
        bookStore.toggleRead(id)
      }
  
      return {
        books,
        toggleRead
      }
    }
  }
  </script>
  
  <style scoped>
  .unavailable {
    color: red;
    font-weight: bold;
  }
  .book-item {
    margin-bottom: 1rem;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
  }
  </style>
  