import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import MenuView from '@/views/MenuView.vue';
import LoginView from '../views/Login.vue';
import PegawaiView from '../views/PegawaiView.vue';
import BarangView from '../views/BarangView.vue';
import FormBukuView from '@/views/FormBukuView.vue';
import BukuView from '@/views/BukuView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/menu',
      name: 'menu',
      component: MenuView,
    },
    {
      path: '/barang',
      name: 'barang',
      component: BarangView,
    },
    {
      path: '/pegawai',
      name: 'pegawai',
      component: PegawaiView,
    },
    {
      path: '/buku',
      name: 'buku',
      component: BukuView,
    },
    {
      path: '/bukuview/:theisbn',
      name: 'bukuview',
      component: FormBukuView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
});

export default router;
