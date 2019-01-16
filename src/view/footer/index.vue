<template>
	<div>
		<van-tabbar v-model="active">
			<van-tabbar-item icon="wap-home" url="#/home">首页</van-tabbar-item>
			<van-tabbar-item icon="apps-o" url="#/items">分类</van-tabbar-item>
			<van-tabbar-item icon="shopping-cart-o" info="5">购物袋</van-tabbar-item>
			<van-tabbar-item icon="user-o" info="20">我的</van-tabbar-item>
		</van-tabbar>


	</div>
</template>

<script>
	import {
		Tabbar,
		TabbarItem,

	} from 'vant';

	export default {
		props: {
			childActive: 0
		},
		components: {
			[TabbarItem.name]: TabbarItem,
			[Tabbar.name]: Tabbar,
		},
		data() {
			return {
				active: this.childActive
			};
		},
		methods: {}

	};
</script>
<style>
	.van-tabbar {
		background: #f8f8f8;
	}
</style>
