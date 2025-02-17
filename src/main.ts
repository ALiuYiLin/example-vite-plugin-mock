import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
createApp(App).mount('#app')

// production mock server
if (process.env.NODE_ENV === 'production') {
  import('./mockProdServer').then(({ setupProdMockServer }) => {
    setupProdMockServer()
  })
}
