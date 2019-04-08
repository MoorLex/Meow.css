import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('./templates/Home/main');
const Admin = () => import('./templates/Admin/main');

Vue.use(Router);

export default new Router({
  linkActiveClass: 'active',
  hashbang: false,
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    }
  ]
});
