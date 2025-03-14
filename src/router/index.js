// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';

import { DiaryRouter } from '@/router/DiaryRouter';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage,
    },
    ...DiaryRouter,
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;