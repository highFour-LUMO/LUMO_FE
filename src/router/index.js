// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import StartPage from '@/views/StartPage.vue';
import HomePage from '@/views/HomePage.vue';
import DecoPage from '@/views/DecoPage.vue';

import { DiaryRouter } from '@/router/DiaryRouter';

const routes = [
    {
        path: '/',
        name: 'Start',
        component: StartPage,
    },
    {
        path: '/home',
        name: 'Home',
        component: HomePage,
    },
    {
        path: '/deco',
        name: 'DecoPage',
        component: DecoPage,
    },
    ...DiaryRouter,
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;