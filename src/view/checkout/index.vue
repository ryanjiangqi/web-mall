<template>
	<div>
		<van-cell-group style="margin-top: 20px;">
			<van-cell class="checkout-news" title="地址选择" is-link url="#/addresslist" />
		</van-cell-group>
		
		
		<van-cell-group style="margin-top: 20px;">
			<van-cell class="checkout-news" title="商品合计" value="123" />
			<van-cell class="checkout-news" title="优惠券选择" is-link url="//youzan.github.io/vant/mobile.html" />
			<van-cell class="checkout-news" title="运费" value="123" />
			<van-cell class="checkout-news" title="优惠" value="123" />
		</van-cell-group>
		<van-card style="margin-top: 0;background: #fff;color: rgba(69, 90, 100, .6);" price="2.00" desc="描述信息描述信息描述信息描述信息描述信息"
		 title="商品标题" :thumb="imageURL" />
		<van-card style="margin-top: 0;background: #fff;color: rgba(69, 90, 100, .6);" price="2.00" desc="描述信息描述信息描述信息描述信息描述信息"
		 title="商品标题" :thumb="imageURL" />
		<van-card style="margin-top: 0;background: #fff;color: rgba(69, 90, 100, .6);" price="2.00" desc="描述信息描述信息描述信息描述信息描述信息"
		 title="商品标题" :thumb="imageURL" />
		<van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit" />
	</div>
</template>

<script>
	import {
		Cell,
		CellGroup,
		Card,
		SubmitBar,
	} from 'vant';

	export default {
		components: {
			[Cell.name]: Cell,
			[CellGroup.name]: CellGroup,
			[Card.name]: Card,
			[SubmitBar.name]: SubmitBar,
		},
		data() {
			return {
				imageURL: 'https://img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg',
			};
		},

		computed: {

		},

		methods: {
			onSubmit(){
				
			}
		}
	};
</script>

<style lang="less">

	.checkout-news {
		color: rgba(69, 90, 100, .6);
	}
</style>
