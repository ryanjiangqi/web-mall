<template>
	<div>
		<div style="padding-bottom: 60px;">
			<van-nav-bar title="标题" left-text="返回" left-arrow @click-left="onClickLeft" />
			<van-swipe :autoplay="3000" indicator-color="white">
				<van-swipe-item><img src="https://img.yzcdn.cn/public_files/2017/09/05/c0dab461920687911536621b345a0bc9.jpg" alt=""
					 class="detail-images"></van-swipe-item>
				<van-swipe-item><img src="https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg" alt=""
					 class="detail-images"></van-swipe-item>
				<van-swipe-item><img src="https://img.yzcdn.cn/public_files/2017/09/05/fd08f07665ed67d50e11b32a21ce0682.jpg" alt=""
					 class="detail-images"></van-swipe-item>
			</van-swipe>
			<van-cell-group>
				<van-cell title="商品名称" value="销量:88" label="商品描述商品描述商品描述商品描述商品描述" />
			</van-cell-group>
			<van-cell-group>
				<van-cell title="价格$88" value="库存:88" />
			</van-cell-group>

			<van-row class='detail-m-bv'>
				<van-col span="8" class='detail-bv'>
					<van-icon name="passed" class='detail-pass' />
					精选品牌
				</van-col>
				<van-col span="8" class='detail-bv'>
					<van-icon name="passed" class='detail-pass' />
					大V推荐
				</van-col>
				<van-col span="8" class='detail-bv'>
					<van-icon name="passed" class='detail-pass' />
					无忧退货
				</van-col>
			</van-row>

			<van-row class='detail-banner'>
				<van-col span="24"><img src="https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg" alt=""></van-col>
				<van-col span="24"><img src="https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg" alt=""></van-col>
				<van-col span="24"><img src="https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg" alt=""></van-col>
			</van-row>

		</div>
		<van-goods-action>
			<van-goods-action-mini-btn icon="chat-o" text="客服" @click="onClickMiniBtn" />
			<van-goods-action-mini-btn icon="cart-o" text="购物车" @click="onClickMiniBtn" />
			<van-goods-action-big-btn text="加入购物车" @click="onClickBigBtn" />
			<van-goods-action-big-btn primary text="立即购买" @click="onClickBigBtn" />
		</van-goods-action>

	</div>
</template>

<script>
	import {
		Swipe,
		SwipeItem,
		Cell,
		CellGroup,
		Row,
		Col,
		Icon,
		GoodsAction,
		GoodsActionBigBtn,
		GoodsActionMiniBtn,
		NavBar,
		Rate,
		Sku,
	} from 'vant';

	export default {
		components: {
			[Swipe.name]: Swipe,
			[SwipeItem.name]: SwipeItem,
			[CellGroup.name]: CellGroup,
			[Cell.name]: Cell,
			[Row.name]: Row,
			[Col.name]: Col,
			[Icon.name]: Icon,

			[GoodsAction.name]: GoodsAction,
			[GoodsActionBigBtn.name]: GoodsActionBigBtn,
			[GoodsActionMiniBtn.name]: GoodsActionMiniBtn,
			[NavBar.name]: NavBar,
			[Rate.name]: Rate,
			[Sku.name]: Sku,
		},
		data() {
			return {

			};
		},
		methods: {
			onClickLeft() {
				this.$router.back(-1)
			},
			onClickMiniBtn() {
				
			},

			onClickBigBtn() {
				
			}
		}
	};
</script>
<style>
	.detail-images {
		width: 343px;
		height: 240px;
	}

	.van-swipe-item {
		text-align: center;
		background: #fff;
	}

	.detail-m-bv {
		width: 100%;
		height: 40px;
		background: #fff;
		line-height: 40px;
	}

	.detail-bv {
		text-align: center;
		color: rgba(69, 90, 100, .6);
		font-size: 14px;
	}

	.detail-pass {
		color: red;
	}

	.detail-banner img {
		width: 100%;
		margin-top: 5px;
	}
</style>
