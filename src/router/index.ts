import { createRouter, createWebHistory } from 'vue-router';

import home from './home';

const arr_routes = [home];

const routes = arr_routes.flat(1);

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;
