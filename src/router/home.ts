import DefaultLayout from '@/layouts/Default.vue';

export default [
    {
        path: '',
        name: 'home',
        component: () => import('@/pages/index.vue'),
        meta: {
            group: 'home',
            title: 'Home',
            layout: DefaultLayout,
        },
    },
];
