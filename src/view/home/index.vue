<template>
	<div>
		<van-search placeholder="请输入搜索关键词" style='background:  #f8f8f8;' />
		<van-swipe :autoplay="3000" indicator-color="white">
			<van-swipe-item><img src="https://img.yzcdn.cn/public_files/2017/09/05/c0dab461920687911536621b345a0bc9.jpg" alt=""
				 class="home-images"></van-swipe-item>
			<van-swipe-item><img src="https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg" alt=""
				 class="home-images"></van-swipe-item>
			<van-swipe-item><img src="https://img.yzcdn.cn/public_files/2017/09/05/fd08f07665ed67d50e11b32a21ce0682.jpg" alt=""
				 class="home-images"></van-swipe-item>
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

		<van-row class="home-cate" style="margin-top: 10px;">
			<van-col span="6">
				<span class="home-cate-img"><a href="/#/goods"><img src="https://img.yzcdn.cn/public_files/2017/09/05/c0dab461920687911536621b345a0bc9.jpg"
					 alt="" class="home-cate-images"></a></span>
				<span class="home-cate-title">分类名</span>
			</van-col>
			<van-col span="6">
				<span class="home-cate-img"><img src="https://img.yzcdn.cn/public_files/2017/09/05/c0dab461920687911536621b345a0bc9.jpg"
					 alt="" class="home-cate-images"></span>
				<span class="home-cate-title">分类名</span>
			</van-col>
			<van-col span="6">
				<span class="home-cate-img"><img src="https://img.yzcdn.cn/public_files/2017/09/05/c0dab461920687911536621b345a0bc9.jpg"
					 alt="" class="home-cate-images"></span>
				<span class="home-cate-title">分类名</span>
			</van-col>
			<van-col span="6">
				<span class="home-cate-img"><img src="https://img.yzcdn.cn/public_files/2017/09/05/c0dab461920687911536621b345a0bc9.jpg"
					 alt="" class="home-cate-images"></span>
				<span class="home-cate-title">分类名</span>
			</van-col>
		</van-row>
		<van-row class="home-cate" style="padding-top: 5px;padding-bottom: 5px;">
			<van-col span="6">
				<span class="home-cate-img"><img src="https://img.yzcdn.cn/public_files/2017/09/05/c0dab461920687911536621b345a0bc9.jpg"
					 alt="" class="home-cate-images"></span>
				<span class="home-cate-title">分类名</span>
			</van-col>
			<van-col span="6">
				<span class="home-cate-img"><img src="https://img.yzcdn.cn/public_files/2017/09/05/c0dab461920687911536621b345a0bc9.jpg"
					 alt="" class="home-cate-images"></span>
				<span class="home-cate-title">分类名</span>
			</van-col>
			<van-col span="6">
				<span class="home-cate-img"><img src="https://img.yzcdn.cn/public_files/2017/09/05/c0dab461920687911536621b345a0bc9.jpg"
					 alt="" class="home-cate-images"></span>
				<span class="home-cate-title">分类名</span>
			</van-col>
			<van-col span="6">
				<span class="home-cate-img"><img src="https://img.yzcdn.cn/public_files/2017/09/05/c0dab461920687911536621b345a0bc9.jpg"
					 alt="" class="home-cate-images"></span>
				<span class="home-cate-title">分类名</span>
			</van-col>
		</van-row>

		<van-cell-group style="margin-top: 10px;">
			<van-cell class="home-news" title="头条" value="" is-link url="//youzan.github.io/vant/mobile.html" />
			<van-cell class="home-news" title="单元格单元格单元格q1单元格单元格单元格q1单元格单元格单元格" label="描述信息" />
			<van-cell class="home-news" title="单元格单元元格q1" label="描述信息" />
			<van-cell class="home-news" title="单元格单元格格q1" label="描述信息" />
			<van-cell class="home-news" title="单元格单元格单元格q1" label="描述信息" />
		</van-cell-group>
		<van-row class='home-banner'>
			<van-col span="24"><img src="https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg" alt=""></van-col>
		</van-row>
		<van-cell-group style="margin-top: 10px;">
			<van-cell class="home-news" title="推荐" value="" is-link url="//youzan.github.io/vant/mobile.html" />
		</van-cell-group>

		<div style="padding-bottom: 60px;">
			<van-list v-model="loading" :finished="finished" finished-text="这是我的底线了" @load="onLoad">
				<van-card v-for="item in list" style="margin-top: 0;background: #fff;color: rgba(69, 90, 100, .6);" tag='热销' price="2.00"
				 desc="描述信息描述信息描述信息描述信息描述信息" title="商品标题" :thumb="imageURL" />
			</van-list>
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
			webFoot,
		},
		data() {
			return {
				imageURL: 'https://img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg',
				active: 0,
				list: [],
				loading: false,
				finished: false
			};
		},
		methods: {
			onLoad() {
				// 异步更新数据
				setTimeout(() => {
					for (let i = 0; i < 10; i++) {
						this.list.push(this.list.length + 1);
					}
					// 加载状态结束
					this.loading = false;

					// 数据全部加载完成
					if (this.list.length >= 40) {
						this.finished = true;
					}
				}, 500);
			}
		}
	};
</script>
<style>
	.home-images {
		width: 343px;
		height: 240px;
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
	}

	.home-bv {
		text-align: center;
		color: rgba(69, 90, 100, .6);
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
		color: rgba(69, 90, 100, .6);
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

	
</style>
