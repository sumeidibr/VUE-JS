// src/stores/auth.js
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    perfil: localStorage.getItem('perfil') || null,
    errorMessage: ''
  }),
  actions: {
    login(email, password) {
      if (email === 'user@email.com' && password === '12345678') {
        this.perfil = 'Usuário'
        localStorage.setItem('perfil', this.perfil)
        this.errorMessage = ''
      } else if (email === 'admin@email.com' && password === '12345678') {
        this.perfil = 'Admin'
        localStorage.setItem('perfil', this.perfil)
        this.errorMessage = ''
      } else {
        this.errorMessage = 'Credenciais inválidas'
      }
    },
    logout() {
      this.perfil = null
      localStorage.removeItem('perfil')
      this.errorMessage = ''
    }
  }
})
