import Vue from 'vue'
import Router from 'vue-router'
import { menuRoutes } from '@/modules/menu/router';

Vue.use(Router)

declare const process: any;

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
     ...menuRoutes
  ]
})
