<template>
	<div>
		<van-search placeholder="请输入搜索关键词" style='background:  #f8f8f8;' />

		<van-row class="list-cate" >
			<van-list v-model="loading" :finished="finished" finished-text="这是我的底线了" @load="onLoad">
				<van-col span="12" class='list-pro'  v-for="item in list">
						<span class="list-cate-img"><a href="/#/detail"><img src="https://img.yzcdn.cn/public_files/2017/09/05/c0dab461920687911536621b345a0bc9.jpg"
																			 alt="" class="list-cate-images"></a></span>
					<span class="list-cate-title">分类名分类名分类名分类名分类名</span>
					<span class="list-cate-price">分类名</span>
				</van-col>
			</van-list>
		</van-row>
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
				imageURL: 'https://img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg',
				list: [],
				loading: false,
				finished: false,
				active:1,
                product:[],
			};
		},
		created() {
            this.getData();
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
					if (this.list.length >= 30) {
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
<style scoped>
	.list-cate {
		text-align: center;
		margin-top: 10px;
		padding-bottom: 60px;
	}

	.list-pro {
	margin-top: 10px;
	}


	.list-cate-title {
		color: rgba(69, 90, 100, .6);
		font-size: 13px;
		width: 90%;
		float: left;
		text-align: left;
		margin-left: 10%;
	}

	.list-cate-img {
		width: 90%;
	}
	.list-cate-img img{
		width: 82%;

	}

	.list-cate-price {
		color: red;
		font-size: 13px;
		width: 90%;
		float: left;
		margin-left: 10%;
		text-align: left;
	}
</style>
