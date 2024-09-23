<template>
    <div>
      <h1>Contador: {{ count }}</h1>
      <button @click="increment">Incrementar</button>
    </div>
  </template>
  
  <script>
  import { useCounterStore } from '@/stores/counter'
  
  export default {
    setup() {
      const counterStore = useCounterStore()
  
      return {
        count: counterStore.count,
        increment: counterStore.increment
      }
    }
  }
  </script>
  