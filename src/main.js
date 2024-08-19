import './assets/main.css'
import { createWebHistory, createRouter } from 'vue-router'
import { createApp } from 'vue'
import App from './App.vue'
import Bags from './components/Bags.vue'
import Electronics from './components/Electronics.vue'
import Dresses from './components/Dresses.vue'
import Trousers from './components/Trousers.vue'
import Accessories from './components/Accessories.vue'


const routes =[
    {path: '/categories', title: 'Categories', children: [
        {path: '/electronics', Component: Electronics, title: 'electronics'},
        {path: '/bags', Component: Bags, title: 'Bags'},
        {path: '/dresses', Component: Dresses, title: 'Dresses'},
        {path: '/trousers', Component: Trousers, title: 'Trousers'},
        {path: '/accessories', Component: Accessories, title: 'Accessories'}
    ]},
    {path: '/deals', title: 'Deals'},
    {path: '/whats-new', title: 'Whats\'s new'},
    {path: '/delivery', title: 'Delivery'},
]


const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App).use(router).mount('#app')
export { routes }
