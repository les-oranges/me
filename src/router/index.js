import Vue from 'vue'
import Router from 'vue-router'
import startPage from '@/pages/admin/startpage'
import login from '@/pages/admin/login'
import register from '@/pages/admin/register'
import related from '@/pages/admin/related'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '*', redirect: '/startpage' },
    {path: '/startpage', name: 'startPage', component: startPage},
    {path: '/login', name: 'login', component: login},
    {path: '/register', name: 'register', component: register},
    {path: '/related', name: 'related', component: related}
  ]
})
