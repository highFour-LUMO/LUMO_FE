// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import StartPage from '@/views/StartPage.vue';
import CalendarPage from '@/views/CalendarPage.vue';
import DecoPage from '@/views/DecoPage.vue';
import FriendList from '@/views/FriendList.vue';
import { DiaryRouter } from '@/router/DiaryRouter';

const routes = [
    {
        // 시작하기 버튼 있는 페이지
        path: '/',
        name: 'Start',
        component: StartPage,
    },
    {
        path: '/calendar',
        name: 'Calendar',
        component: CalendarPage,
    },
    {
        path: '/deco',
        name: 'DecoPage',
        component: DecoPage,
    },
    {
        path: "/friends",
        name: "FriendList",
        component: FriendList,
    },
    ...DiaryRouter,
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;