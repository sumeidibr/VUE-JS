// src/stores/userStore.js
import { defineStore } from 'pinia'

export const useUserStore = defineStore('users', {
  state: () => ({
    users: [
      { id: 1, email: 'user@email.com', perfil: 'Usuário' },
      { id: 2, email: 'admin@email.com', perfil: 'Admin' }
    ]
  }),
  actions: {
    addUser(email, perfil) {
      const newUser = {
        id: this.users.length + 1, // Gera um novo ID
        email,
        perfil
      }
      this.users.push(newUser)
    },
    removeUser(id) {
      this.users = this.users.filter(user => user.id !== id)
    }
  }
})
