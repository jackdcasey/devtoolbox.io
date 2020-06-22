import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Timenow from '@/components/tools/Timenow'
import Placeholder from '@/components/tools/Placeholder'
import Flipticks from '@/components/tools/Flipticks'

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
      path: '/timenow',
      name: 'TimeNow',
      component: Timenow
    },
    {
      path: '/flipticks',
      name: 'FlipTicks',
      component: Flipticks
    },
    {
      path: '/placeholder',
      name: 'Placeholder',
      component: Placeholder
    }
  ]
})
