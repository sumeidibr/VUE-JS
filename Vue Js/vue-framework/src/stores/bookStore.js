// src/stores/bookStore.js
import { defineStore } from 'pinia'

export const useBookStore = defineStore('books', {
  state: () => ({
    books: [
      { id: 1, title: 'Livro A', author: 'Autor A', genre: 'Gênero A', year: 2020, quantity: 5, read: false },
      { id: 2, title: 'Livro B', author: 'Autor B', genre: 'Gênero B', year: 2019, quantity: 0, read: false },
      { id: 3, title: 'Livro C', author: 'Autor C', genre: 'Gênero C', year: 2021, quantity: 3, read: false }
    ]
  }),
  actions: {
    toggleRead(id) {
      const book = this.books.find(book => book.id === id)
      if (book) {
        book.read = !book.read
      }
    },
    addBook(title, author, genre, year, quantity) {
      const newBook = {
        id: this.books.length + 1,
        title,
        author,
        genre,
        year,
        quantity,
        read: false
      }
      this.books.push(newBook)
    },
    removeBook(id) {
      this.books = this.books.filter(book => book.id !== id)
    }
  }
})
