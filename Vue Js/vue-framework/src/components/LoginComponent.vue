<template>
  <div class="login-container">
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
      </div>

      <div>
        <label for="password">Senha:</label>
        <input type="password" id="password" v-model="password" required />
      </div>

      <button type="submit">Entrar</button>
    </form>

    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    <p v-if="perfil">Perfil: {{ perfil }}</p>
  </div>
</template>

<script>
import { useAuthStore } from '../stores/auth.js'

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    perfil() {
      return this.authStore.perfil
    },
    errorMessage() {
      return this.authStore.errorMessage
    }
  },
  setup() {
    const authStore = useAuthStore()

    return {
      authStore
    }
  },
  methods: {
    handleLogin() {
      this.authStore.login(this.email, this.password)
    }
  }
}
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.error {
  color: red;
}
</style>
