<template>
  <div id="app">
    <LoginComponent v-if="!perfil" />
    <UserPanel v-if="perfil === 'Usuário'" />
    <AdminPanel v-if="perfil === 'Admin'" />
    <button v-if="perfil" @click="handleLogout">Logout</button>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useAuthStore } from '@/stores/auth'
import LoginComponent from './components/LoginComponent.vue'
import UserPanel from './components/UserPanel.vue'
import AdminPanel from './components/AdminPanel.vue'

export default {
  components: {
    LoginComponent,
    UserPanel,
    AdminPanel
  },
  setup() {
    const authStore = useAuthStore()
    const perfil = computed(() => authStore.perfil)

    const handleLogout = () => {
      authStore.logout()
    }

    return {
      perfil,
      handleLogout
    }
  }
}
</script>
