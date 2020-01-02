export default [
    {
        path: '/',
        redirect: '/index',
    },
    {
        path: '/index',
        name: 'index',
        component: () => import ('../views/Index'),//懒加载
        redirect: '/home',
        children:[
            {
                path: '/home',
                name: 'home',
                component: () => import ('../views/Home'),
            },{
                path: '/from',
                name: 'from',
                component: () => import ('../views/From'),
            }
        ]

    }
]