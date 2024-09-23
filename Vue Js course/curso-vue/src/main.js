
// Modulo CreateApp
import { createApp } from 'vue'

// importar arquivo app.vue
import App from './App.vue'

// importando pinia
import{createPinia} from 'pinia';
// Render 
createApp(App).use(createPinia()).mount('#app')
