<template>
	<div style="background: #f8f8f8;">
		<van-search placeholder="请输入搜索关键词" style='background:  #f8f8f8;' />
		<!-- <van-list v-model="loading" :finished="finished" finished-text="这是我的底线了" @load="onLoad"> -->
		<van-row class="list-cate">
			<van-col span="12" class='list-pro' v-for="item in product">
				<span class="list-cate-img"><a v-bind:href="'#/detail/id/'+item.id"><img v-bind:src="appUrl + '/' + item.cover_image" alt="" class="list-cate-images"></a></span>
				<span class="list-cate-title">{{item.name}}</span>
				<span class="list-cate-price">￥{{item.price}}</span>
			</van-col>
		</van-row>
		<!-- </van-list> -->
		<web-foot :childActive="active"></web-foot>
	</div>
</template>

<script>
	import {
		Search,
		Row,
		Col,
		List,
	} from 'vant';
	import webFoot from '../footer/index.vue';
	export default {
		components: {
			[Search.name]: Search,
			[Row.name]: Row,
			[Col.name]: Col,
			[List.name]: List,
			webFoot
		},
		data() {
			return {
				list: [],
				loading: false,
				finished: false,
				active: 1,
				product: [],
			};
		},
		created() {
			this.getData();
		},
		methods: {
			onLoad() {
				// 异步更新数据
				setTimeout(() => {
					console.log(this.check);
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
			},
			getData() {
				this.url = '/api/product';
				this.$axios.post(this.url, {}, {
					headers: {}
				}).then((res) => {
					this.product = res.data.data;
				})
			}
		}
	};
</script>
<style>
	.list-cate {
		text-align: center;
		padding-bottom: 60px;
	}

	.list-pro {
		margin-top: 10px;
	}

	.list-cate-title {
		font-size: 13px;
		width: 90%;
		float: left;
		text-align: left;
		margin-left: 10%;
	}

	.list-cate-img {
		width: 90%;
	}

	.list-cate-img img {
		width: 82%;
		border: 1px solid #dee2e6;
	}

	.list-cate-price {
		color: #e4393c;
		font-size: 14px;
		width: 90%;
		float: left;
		margin-left: 10%;
		text-align: left;
		margin-top: 5px;
	}
</style>
