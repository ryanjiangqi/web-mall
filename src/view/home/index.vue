<template>
	<div>
		<van-search placeholder="请输入搜索关键词" style='background:  #f8f8f8;' />
		<van-swipe :autoplay="3000" indicator-color="white">
				<van-swipe-item v-for="val in banner" :key="val.id" >
				<img v-bind:src="appUrl + '/' + val.image" alt="" class="home-images">
				</van-swipe-item>
		</van-swipe>
		<van-row class='home-m-bv'>
			<van-col span="8" class='home-bv'>
				<van-icon name="passed" class='home-pass' />
				精选品牌
			</van-col>
			<van-col span="8" class='home-bv'>
				<van-icon name="passed" class='home-pass' />
				大V推荐
			</van-col>
			<van-col span="8" class='home-bv'>
				<van-icon name="passed" class='home-pass' />
				无忧退货
			</van-col>
		</van-row>

		<van-row class="home-cate" style="margin-top: 10px;padding-bottom: 10px;">
			<van-col span="6" v-for="val in itemsList" :key="val.id">
				<span class="home-cate-img"><a href="/#/list"><img v-bind:src="appUrl + '/' + val.image" alt="" class="home-cate-images"></a></span>
				<span class="home-cate-title">{{val.items_name}}</span>
			</van-col>
			
		</van-row>

		<div class="load_class">
				<van-cell-group  style="margin-top: 5px;" v-for="value in product" :key="value.id">
					<div class="pro_img"><a v-bind:href="'#/detail/id/'+value.id"><img v-bind:src="appUrl + '/' + value.index_image" alt=""></a></div>
					<div class="pro_title">{{value.name}}</div>
					<div class="pro_desc">{{value.keyword}}</div>
					<div class="pro_price">
						<van-row type="flex" justify="space-between">
							<van-col span="6" style="text-indent: 15px;color: #e4393c;font-size: 14px;">￥{{value.price}}</van-col>
							<van-col span="6" style="margin-right:15px;">
								<a v-bind:href="'#/detail/id/'+value.id"><van-button type="danger">立即抢购</van-button></a>
							</van-col>
						</van-row>
					</div>
				</van-cell-group>
			
		</div>
		<web-foot :childActive="active"></web-foot>
	</div>
</template>

<script>
	import {
		Swipe,
		SwipeItem,
		Search,
		Row,
		Col,
		Icon,
		Cell,
		CellGroup,
		Card,
		List,
		Button,
	} from 'vant';
	import webFoot from '../footer/index.vue';
	export default {
		components: {
			[Swipe.name]: Swipe,
			[SwipeItem.name]: SwipeItem,
			[Search.name]: Search,
			[Row.name]: Row,
			[Col.name]: Col,
			[Icon.name]: Icon,
			[Cell.name]: Cell,
			[CellGroup.name]: CellGroup,
			[Card.name]: Card,
			[List.name]: List,
			[Button.name]: Button,
			webFoot,
		},
		data() {
			return {
				imageURL: 'https://img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg',
				active: 0,
				list: [],
				loading: false,
				finished: false,
				itemsList:[],
				product:[],
				banner:[],
			};
		},
		created(){
			this.getItems();
			this.getProduct();
			this.getBanner();
		},
		methods: {
			getItems(){
				this.url = '/api/items/child';
				this.$axios.post(this.url, {}, {
					headers: {}
				}).then((res) => {
					this.itemsList = res.data.data;
				})
			},
			getProduct(){
				this.url = '/api/product/index';
				this.$axios.post(this.url, {}, {
					headers: {}
				}).then((res) => {
					this.product = res.data.data;
				})
			},
			getBanner(){
				this.url = '/api/banner';
				this.$axios.post(this.url, {}, {
					headers: {}
				}).then((res) => {
					this.banner = res.data.data;
				})
			},
		}
	};
</script>
<style>
	.load_class {
		padding-bottom: 60px;
		font-size: 14px;
		margin-top: 10px;
	}

	.pro_title {
		padding: 5px 15px;
		
	}

	.pro_desc {
		padding: 5px 15px;
		color: rgba(69, 90, 100, .6);
	}

	.pro_price {
		line-height: 50px;
		width: 100%;
		
	}

	.pro_price_left {
		width: 40%;

	}

	.pro_price_right {
		width: 40%;

	}

	.pro_img {
		width: 100%;
	}

	.pro_img img {
		width: 100%;
	}

	.home-images {
		width: 100%;
	}

	.van-swipe-item {
		text-align: center;
		background: #fff;
	}

	.home-m-bv {
		width: 100%;
		height: 40px;
		background: #fff;
		margin-top: 3px;
		line-height: 40px;
		color: rgba(69, 90, 100, .6);
	}

	.home-bv {
		text-align: center;
		font-size: 14px;
	}

	.home-pass {
		color: red;
	}

	.home-cate {
		background: #fff;
		text-align: center;
	}

	.home-cate-images {
		padding: 5px 5px 0 5px;
		width: 40px;

	}

	.home-cate-title {
		font-size: 13px;
		width: 100%;
		float: left;
	}

	.home-cate-img {
		width: 100%;
		float: left;
	}

	.home-news {
		color: rgba(69, 90, 100, .6);
	}

	.home-banner {
		margin-top: 10px;
	}

	.home-banner img {
		width: 100%;
	}

	.home-van-card {
		font-size: 14px;
		font-weight: normal;
	}

	.home-van-card__title {
		font-weight: normal;
	}

	.home-van-card__price {
		font-weight: normal;
	}

	.home-van-card__desc {
		margin-top: 8px;
		font-size: 12px;
	}
	.home-cate-images {
		width: 40px;
	}
</style>
