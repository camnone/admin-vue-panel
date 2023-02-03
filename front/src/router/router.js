import MainPage from '../pages/MainPage.vue';
import pwaList from '../pages/pwaList.vue';
import Auth from '../pages/Auth.vue';
import Registration from '../pages/Registration.vue';
import Template from '../pages/Template.vue';
import store from '../store/index'
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/',
    name:"dashboard",
    component: MainPage,
    meta: {
      requiresAuth: true
    }

  },
  {
    path: '/pwalist',
    name:"pwaList",
    component: pwaList,
    meta: {
      requiresAuth: true
    }

  },
  {
    path: '/auth',
    name:"auth",
    component: Auth,
    meta: {
      requiresAuth: false
    }


  },
  {
    path: '/registration',
    name:"register",
    component: Registration,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/template/:id',
    name:"template",
    component: Template,
    meta: {
      requiresAuth: false
    }
  },
]

const router = createRouter({
  routes,
  history: createWebHistory()
})



router.beforeEach(async (to, from, next) => { 
  let isAuth = store.state.isAuth
    if (to.matched.some(record => record.meta.requiresAuth)) {
      if (isAuth) {
        store.commit("setAuthUser", true)
        next();
      } else {
        router.push({ name: 'auth' });
      }
    } else {
      next();
    }
});

export default router