import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from "@/pages/Home.vue";
import Result from "@/pages/Result.vue";

Vue.use(VueRouter);

const routes = [
  {
    name: 'home',
    path: '/',
    component: Home
  },
  {
    name: 'result',
    path: '/result',
    component: Result,
    props: true,
  },
];

const router = new VueRouter({
  routes,
  base: process.env.BASE_URL,
  mode: 'history'
});

export default router;