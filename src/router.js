import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
  {
    path: '*',
    redirect: '/home'
  },
  {
    name: 'user',
    component: () => import('./view/user'),
    meta: {
      title: '会员中心'
    }
  },
  {
    name: 'cart',
    component: () => import('./view/cart'),
    meta: {
      title: '购物车'
    }
  },
  {
    name: 'goods',
    component: () => import('./view/goods'),
    meta: {
      title: '商品详情'
    }
  },
	{
		name: 'home',
		component: () => import('./view/home'),
		meta: {
			title: '首页'
		}
	},
	{
		name: 'items',
		component: () => import('./view/items'),
		meta: {
			title: '分类'
		}
	},
	{
		name: 'list',
		component: () => import('./view/list'),
		meta: {
			title: '商品列表'
		}
	},
	{
		name: 'detail/id/:id',
		component: () => import('./view/detail'),
		meta: {
			title: '商品详情'
		}
	},
	{
		name: 'checkout',
		component: () => import('./view/checkout'),
		meta: {
			title: '商品详情'
		}
	},
	{
		name: 'addresslist',
		component: () => import('./view/address_list'),
		meta: {
			title: '商品详情'
		}
	},
	{
		name: 'add_address',
		component: () => import('./view/add_address'),
		meta: {
			title: '商品详情'
		}
	}
	
	
];

// add route path
routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '');
});

const router = new Router({ routes });

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }
  next();
});

export {
  router
};
