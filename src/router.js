import { createRouter, createWebHistory } from 'vue-router';
import CoachesList from './pages/coaches/CoachesList.vue';
import store from './store/store.js';

const NotFound = () =>
  import('./pages/NotFound.vue');
const CoachDetail = () =>
  import('./pages/coaches/CoachDetail.vue');
const CoachRegistration = () =>
  import('./pages/coaches/CoachRegistration.vue');
const ContactCoach = () =>
  import('./pages/requests/ContactCoach.vue');
const RequestsReceived = () =>
  import('./pages/requests/RequestsReceived.vue');
const UserAuth = () =>
  import('./pages/auth/UserAuth.vue');

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesList},
    {
      path: '/coaches/:id',
      component: CoachDetail,
      props: true,
      children: [
        { path: 'contact', component: ContactCoach }
      ]
    },
    { path: '/register', component: CoachRegistration , meta: { requiresAuth: true }},
    { path: '/requests', component: RequestsReceived , meta: { requiresAuth: true }},
    { path: '/auth' , component:UserAuth, meta: { requiresUnauth: true }},
    { path: '/:catchAll(.*)', component: NotFound },
    { path:'/not-found' , component:NotFound}
  ]
});
router.beforeEach((to, _, next) => {
  if (to.meta.requiresAuth && !store.getters['auth/isAuthenticated']) {
    next('/auth');
  } else if (to.meta.requiresUnauth && store.getters['auth/isAuthenticated']) {
    next('/coaches');
  } else {
    next();
  }
});
export default router;
