<template>
	<div>
		<div style="padding-bottom: 60px;">
			<van-nav-bar title="产品详情" left-text="返回" left-arrow @click-left="onClickLeft" />
			<van-swipe :autoplay="3000" indicator-color="white">
				<van-swipe-item v-for="item in skuData.goods_info.image" v-bind:key="item"><img v-bind:src="appUrl + '/' + item" alt="" class="detail-images"></van-swipe-item>
			</van-swipe>
			<div class="van-cell-group van-hairline--top-bottom">
				<div class="van-cell">
					<div class="van-cell__title"><span>{{skuData.goods_info.title}}</span>	
					</div>
				</div>
			</div>
			<div class="van-cell-group van-hairline--top-bottom">
				<div class="van-cell">
					<div class="van-cell__title" style="color: #e4393c;"><span>￥{{skuData.goods_info.price}}</span>
					</div>
				</div>
			</div>

			<van-row class='detail-m-bv'>
				<van-col span="6" class='detail-bv'>
					<van-icon name="passed" class='detail-pass' />
					精选品牌
				</van-col>
				<van-col span="6" class='detail-bv'>
					<van-icon name="passed" class='detail-pass' />
					大V推荐
				</van-col>
				<van-col span="6" class='detail-bv'>
					<van-icon name="passed" class='detail-pass' />
					无忧退货
				</van-col>
				<van-col span="6" class='detail-bv'>
					<van-icon name="passed" class='detail-pass' />
					折扣优惠
				</van-col>
			</van-row>
			<div v-html="htmlvalue" class='detail_edit'></div>

		</div>
		<van-goods-action>
			<van-goods-action-mini-btn icon="chat-o" text="客服" @click="onClickMiniBtn" />
			<van-goods-action-mini-btn icon="cart-o" text="购物车" @click="onClickMiniBtn" />
			<van-goods-action-big-btn text="加入购物车" @click="showBase = true" />
			<van-goods-action-big-btn primary text="立即购买" @click="onClickBigBtn" />
		</van-goods-action>

		<!-- 基础用法 -->
		<div class="sku-container">
			<van-sku v-model="showBase" :sku="skuData.sku" :goods="skuData.goods_info" :goods-id="skuData.goods_id" :hide-stock='1'
			 :quota="0" :quota-used="skuData.quota_used" reset-stepper-on-hide reset-selected-sku-on-hide
			 disable-stepper-input :close-on-click-overlay="closeOnClickOverlay" :message-config="messageConfig"
			 :custom-sku-validator="customSkuValidator" @buy-clicked="onBuyClicked" @add-cart="onAddCartClicked" />
		</div>

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
	import skuData from './data';

	import {
		LIMIT_TYPE
	} from './constants';
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
				productId: 0,
				htmlvalue: [],
				product: [],
				showBase: false,
				showCustom: false,
				showStepper: false,
				skuData: skuData,
				showSoldout: false,
				closeOnClickOverlay: true,
				initialSku: {
					s1: '30349',
					s2: '1193'
				},
				customSkuValidator: () => '请选择商品规格',
				customStepperConfig: {
					quotaText: '单次限购100件',
					stockFormatter: (stock) => `剩余${stock}件`,
					handleOverLimit: (data) => {
						const {
							action,
							limitType,
							quota
						} = data;
						if (action === 'minus') {
							this.$toast('至少选择一件商品');
						} else if (action === 'plus') {
							if (limitType === LIMIT_TYPE.QUOTA_LIMIT) {
								this.$toast(`限购${quota}件`);
							} else {
								this.$toast('库存不够了');
							}
						}
					}
				},
				messageConfig: {
					uploadImg: (file, img) => new Promise(resolve => {
						setTimeout(() => resolve(img), 1000);
					}),
					uploadMaxSize: 3
				}
			};
		},

		created() {
			//this.getData();
			this.productId = this.$route.params.id;
		},
		mounted() {
			this.getData();
		},
		methods: {
			getData() {
				this.url = '/api/product/detail';
				this.$axios.post(this.url, {
					id: this.productId,
				}, {
					headers: {}
				}).then((res) => {
					this.skuData = res.data.data;
					this.htmlvalue = res.data.data.goods_info.description;
				})

			},

			onClickLeft() {
				this.$router.back(-1)
			},
			onClickMiniBtn() {

			},

			onClickBigBtn() {

			},
			onBuyClicked(data) {
				//this.$toast(JSON.stringify(data));
			},
			onAddCartClicked(data) {
				this.$axios.post('/api/cart/add', {
					product: data.goodsId,
					num: data.selectedNum,
					skuid: data.selectedSkuComb.id,
				}, {
					headers: {}
				}).then((res) => {
					//this.skuData = res.data.data;
					//this.htmlvalue = res.data.data.goods_info.description;
					this.$toast('购物车加入成功');
				})
				
				
				
				//this.$toast(JSON.stringify(data));
			},
			onPointClicked() {
				this.$toast('积分兑换');
			}
		}
	};
</script>
<style>
	.detail-images {
		width: 300px;
		height: 300px;
	}
	/*	width: 343px;
		height: 240px;*/
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

	.van-hairline--top-bottom::after {
		border-width: 0;
	}

	.van-cell-group {
		background: #fff;
	}

	.van-swipe__indicator {
		background: #000000;
	}
	.van-stepper__input[disabled]{
		color: #333;
	}
	.detail_edit img{
		width: 100%;
	}
	.detail_edit p img{
		width: 100%;
	}
</style>
