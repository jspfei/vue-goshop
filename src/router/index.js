import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Example1 from "@/components/demo/Example1.vue";
import Example2 from "@/components/demo/Example2.vue";
import Example3 from "@/components/demo/Example3.vue";
Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/class/example1',
      name: 'Example1',
      component: Example1
    }
    ,
    {
      path: '/class/example2',
      name: 'Example2',
      component: Example2
    }
    ,
    {
      path: '/class/example3',
      name: 'Example3',
      component: Example3
    }
  ]
})
