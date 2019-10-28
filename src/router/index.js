import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/index' 

Vue.use(Router)
const router = new Router({
  routes: [
        {
            path: '/',
            meta: { title: '首页'},
            component: () => import('../views/index'),
        },
        {
            path: '/index',
            meta: { title: '首页'},
            component: () => import('../views/index'),
        },
        {
            path: '/service',
            meta: { title: '服务'},
            component: () => import('../views/service/service'),
        },
        {
            path: '/mine',
            meta: { title: '我的'},
            component: () => import('../views/mine/mine'),
        }
    ]
})
router.afterEach(route => {
	// Loading.close();
    // 设置页面标题
    document.title = route.meta.title ? route.meta.title +' - 中国人寿财产保险股份有限公司': '中国人寿财产保险股份有限公司';

});
export default router;
