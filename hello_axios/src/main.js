import { createApp } from 'vue'
import axios from 'axios'
import App from './App.vue'
import CRequest from './service/index'

const app = createApp(App)

app.mount('#app')

// CRequest.request({
//     url: 'http://123.207.32.32:8000/home/multidata',
//     method: 'get'
// }).then(res => {
//     console.log(res)
// })

CRequest.get({
    url: '/home/multidata'
}).then(res => {
    console.log(res)
})


