// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import StartPage from '@/views/StartPage.vue';

import { DiaryRouter } from '@/router/DiaryRouter';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: StartPage,
    },
    ...DiaryRouter,
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;