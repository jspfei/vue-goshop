import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Example1 from "@/components/demo/Example1.vue";
import Example2 from "@/components/demo/Example2.vue";
import Example3 from "@/components/demo/Example3.vue";
import Example4 from "@/components/demo/Example4.vue";
import Example5 from "@/components/demo/Example5.vue";
import Example6 from "@/components/demo/Example6.vue";
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
    },
    {
      path: '/class/example4',
      name: 'Example4',
      component: Example4
    },
    {
      path: '/class/example5',
      name: 'Example5',
      component: Example5
    },
    {
      path: '/class/example6',
      name: 'Example6',
      component: Example6
    }
  ]
})
