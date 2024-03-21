import {createRouter, createWebHistory} from 'vue-router'
import Menu from '../views/Menu.vue'
import Vue3 from '../views/Vue3.vue'

const router = createRouter({
  history: createWebHistory(),
  routes:[
    {path:'/',component: Menu},
    {path: '/vue3',component: Vue3}
  ]
})

export default router