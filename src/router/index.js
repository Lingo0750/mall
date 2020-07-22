import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index_start',
      component: ()=> import("../view/index_start.vue")
    },
    {
      path: '/login',
      name: 'intro',
      component: HelloWorld
    },

    {
      path: '/top',
      name: 'Top',
      component: ()=> import("../view/top.vue")
    },
    {
      path: '/intro/:nid',
      name: 'Intro',
      component: ()=> import("../view/intro.vue")
    },

    {
      path: '/search/:content',
      name: 'Search',
      component: ()=> import("../view/search.vue")
    },
    {
      path:'/detail',
      name:'Detail',
      component: ()=>import('../view/Detail.vue')
    }
  ]
})

