<template>
	<div>

		<van-row class='home-m-bv'>
			<van-col span="6" class='home-bv'>
				<van-icon name="passed" class='home-pass' />
				精选品牌
			</van-col>
			<van-col span="6" class='home-bv'>
				<van-icon name="passed" class='home-pass' />
				大V推荐
			</van-col>
			<van-col span="6" class='home-bv'>
				<van-icon name="passed" class='home-pass' />
				无忧退货
			</van-col>
			<van-col span="6" class='home-bv'>
				<van-icon name="passed" class='home-pass' />
				折扣优惠
			</van-col>
		</van-row>
		<van-checkbox-group class="card-goods" v-model="checkedGoods">
			<van-checkbox class="card-goods__item" v-for="item in cart" :key="item.id" :name="item.id">
				<van-swipe-cell :right-width="65" :on-close="onClose">
					<van-card :title="item.product_name" :desc="item.att_name" :num="item.num" :price="formatPrice(item.price)" :thumb="appUrl + '/' + item.sku_image" />
					<span slot="right">删除</span>
				</van-swipe-cell>
			</van-checkbox>
		</van-checkbox-group>

		<van-submit-bar :price="totalPrice" :disabled="!checkedGoods.length" :button-text="submitBarText" @submit="onSubmit" />
	</div>
</template>

<script>
	import {
		Checkbox,
		CheckboxGroup,
		Card,
		SubmitBar,
		Toast,
		SwipeCell,
		Row,
		Col,
		Icon,
		NavBar,
	} from 'vant';

	export default {
		components: {
			[Card.name]: Card,
			[Checkbox.name]: Checkbox,
			[SubmitBar.name]: SubmitBar,
			[CheckboxGroup.name]: CheckboxGroup,
			[SwipeCell.name]: SwipeCell,

			[Row.name]: Row,
			[Col.name]: Col,
			[Icon.name]: Icon,
			[NavBar.name]: NavBar,


		},

		data() {
			return {
				checkedGoods: ['1', '2', '3'],
				goods: [{
					id: '1',
					title: '进口香蕉',
					desc: '约250g，2根',
					price: 200,
					num: 1,
					thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/2f9a36046449dafb8608e99990b3c205.jpeg'
				}, {
					id: '2',
					title: '陕西蜜梨',
					desc: '约600g',
					price: 690,
					num: 1,
					thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/f6aabd6ac5521195e01e8e89ee9fc63f.jpeg'
				}, {
					id: '3',
					title: '美国伽力果',
					desc: '约680g/3个',
					price: 2680,
					num: 1,
					thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/320454216bbe9e25c7651e1fa51b31fd.jpeg'
				}],
				cart:[],
			};
		},

		computed: {
			submitBarText() {
				const count = this.checkedGoods.length;
				return '结算' + (count ? `(${count})` : '');
			},

			totalPrice() {
				return this.goods.reduce((total, item) => total + (this.checkedGoods.indexOf(item.id) !== -1 ? item.price : 0), 0);
			}
		},
		created() {
			this.getData();
		},
		methods: {
			onClickLeft() {
				this.$router.back(-1)
			},
			formatPrice(price) {
				//return (price / 100).toFixed(2);
				return price;
			},

			onSubmit() {
				this.$router.push({
					name: 'checkout',
					params: {
						id: '1'
					}
				});
			},
			onClose(clickPosition, instance) {
				switch (clickPosition) {
					case 'left':
					case 'cell':
					case 'outside':
						instance.close();
						break;
					case 'right':
						break;
				}
			},
			getData(){
				this.$axios.post('/api/cart/list', {
				
				}, {
					headers: {}
				}).then((res) => {
					this.cart = res.data.data;
					//this.htmlvalue = res.data.data.goods_info.description;
					
				})
			}
		}
	};
</script>

<style lang="less">
	.card-goods {
		background-color: #f8f8f8;

		&__item {
			position: relative;
			background-color: #fff;
			margin-top: 8px;

			.van-checkbox__label {
				width: 100%;
				height: auto; // temp
				padding: 0 10px 0 15px;
				box-sizing: border-box;
			}

			.van-checkbox__icon {
				top: 50%;
				left: 10px;
				z-index: 1;
				position: absolute;
				margin-top: -10px;
			}

			.van-card__price {
				color: #e4393c;
				font-weight: normal;
			}
		}

		.van-swipe-cell__right {
			color: white;
			font-size: 15px;
			width: 65px;
			height: 44px;
			display: inline-block;
			text-align: center;
			line-height: 44px;
			background-color: red;
			margin-top: 28px;
		}

		.van-card {
			background: #fff;
		}
	}

	.home-m-bv {
		width: 100%;
		height: 40px;
		background: #fff;
		margin-top: 3px;
		line-height: 40px;
	}

	.home-bv {
		text-align: center;
		color: rgba(69, 90, 100, .6);
		font-size: 14px;
	}

	.home-pass {
		color: red;
	}
	.van-card__title{
		font-weight:normal;
	}
	.van-submit-bar__price{
		color: #e4393c;
	}
	.van-button--danger{
		background:#e4393c ;
	}
</style>
