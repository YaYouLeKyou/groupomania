import {
    createApp
} from 'vue'
import App from './App.vue'
import Login from "./components/Login.vue"
import Welcome from "./components/Welcome.vue"
import {
    createRouter,
    createWebHistory
} from "vue-router"

const routes = [{
        path: "/login",
        component: Login
    },
    {
        path: '/welcome',
        name: 'Welcome',
        component: Welcome
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


const app = createApp(App)
app.use(router)



app.mount('#app')