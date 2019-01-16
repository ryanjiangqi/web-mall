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
			<van-goods-action-big-btn text="加入购物车" @click="showBase = true" />
			<van-goods-action-big-btn primary text="立即购买" @click="onClickBigBtn" />
		</van-goods-action>

		<!-- 基础用法 -->
		<div class="sku-container">
			<van-sku
					v-model="showBase"
					:sku="skuData.sku"
					:goods="skuData.goods_info"
					:goods-id="skuData.goods_id"
					:hide-stock="skuData.sku.hide_stock"
					:quota="skuData.quota"
					:quota-used="skuData.quota_used"
					reset-stepper-on-hide
					reset-selected-sku-on-hide
					disable-stepper-input
					:close-on-click-overlay="closeOnClickOverlay"
					:message-config="messageConfig"
					:custom-sku-validator="customSkuValidator"
					@buy-clicked="onBuyClicked"
					@add-cart="onAddCartClicked"
			/>
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
    import { LIMIT_TYPE } from './constants';
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
            this.skuData = skuData;
			return {
                showBase:false,
                showBase: false,
                showCustom: false,
                showStepper: false,
                showSoldout: false,
                closeOnClickOverlay: true,
                initialSku: {
                    s1: '30349',
                    s2: '1193'
                },
                customSkuValidator: () => '请选择xxx',
                customStepperConfig: {
                    quotaText: '单次限购100件',
                    stockFormatter: (stock) => `剩余${stock}件`,
                    handleOverLimit: (data) => {
                        const { action, limitType, quota } = data;
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
		methods: {
			onClickLeft() {
				this.$router.back(-1)
			},
			onClickMiniBtn() {
				
			},

			onClickBigBtn() {
				
			},
            onBuyClicked(data) {
                this.$toast(JSON.stringify(data));
            },
            onAddCartClicked(data) {
                this.$toast(JSON.stringify(data));
            },
            onPointClicked() {
                this.$toast('积分兑换');
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
	.van-hairline--top-bottom::after{
		border-width:0;
	}
</style>
