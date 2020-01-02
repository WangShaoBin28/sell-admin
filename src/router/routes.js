export default [
    {
        path: '/',
        name: 'home',
        component: () => import ('../views/Home.vue')//懒加载
    }
]