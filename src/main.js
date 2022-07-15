import { createApp } from 'vue'
import App from './App.vue'
import { Button,Image as VanImage} from 'vant';
const app=createApp()
app.use(Button)
app.use(VanImage)


createApp(App).mount('#app')
