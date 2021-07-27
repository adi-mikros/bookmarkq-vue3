import { createApp } from 'vue'
import router from './router/index'
import App from './App.vue'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import swal from 'sweetalert';

// createApp(App).mount('#app')

const app = createApp(App)
app.use(router)
app.mount('#app')
