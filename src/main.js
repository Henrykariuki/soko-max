import './assets/main.css'
import { createWebHistory, createRouter } from 'vue-router'
import { createApp } from 'vue'
import App from './App.vue'
import Bags from './pages/categories/Bags.vue'
import Electronics from './pages/categories/Electronics.vue'
import Dresses from './pages/categories/Dresses.vue'
import Trousers from './pages/categories/Trousers.vue'
import Accessories from './pages/categories/Accessories.vue'
import Deals from './pages/Deals.vue'
import WhatsNew from './pages/WhatsNew.vue'
import Delivery from './pages/Delivery.vue'



const routes = [
    {
        path: '/categories', title: 'Categories', children: [
            { path: '/electronics', component: Electronics, title: 'electronics' },
            { path: '/bags', component: Bags, title: 'Bags' },
            { path: '/dresses', component: Dresses, title: 'Dresses' },
            { path: '/trousers', component: Trousers, title: 'Trousers' },
            { path: '/accessories', component: Accessories, title: 'Accessories' }
        ]
    },
    { path: '/deals', component: Deals, title: 'Deals' },
    { path: '/whats-new', component: WhatsNew, title: 'Whats\'s new' },
    { path: '/delivery', component: Delivery, title: 'Delivery' },
]


const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App).use(router).mount('#app')
export { routes }
