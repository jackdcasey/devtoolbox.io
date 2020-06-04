import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Tool1 from '@/components/Tool1'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/tool1',
      name: 'Tool1',
      component: Tool1
    }

  ]
})
