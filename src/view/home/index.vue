<template>
	<div>
		<van-search placeholder="请输入搜索关键词" style='background:  #f8f8f8;' />
		<van-swipe :autoplay="3000" indicator-color="white">
		<van-swipe-item ><img src="https://img.yzcdn.cn/public_files/2017/09/05/c0dab461920687911536621b345a0bc9.jpg" alt="" class="images"></van-swipe-item>
		<van-swipe-item><img src="https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg" alt=""  class="images"></van-swipe-item>
		<van-swipe-item><img src="https://img.yzcdn.cn/public_files/2017/09/05/fd08f07665ed67d50e11b32a21ce0682.jpg" alt="" class="images"></van-swipe-item>
	</van-swipe>
<van-row class='m-bv'>
  <van-col span="8" class='bv'><van-icon name="passed" class='pass' />精选品牌</van-col>
  <van-col span="8" class='bv'><van-icon name="passed" class='pass' />大V推荐</van-col>
  <van-col span="8" class='bv'><van-icon name="passed" class='pass' />无忧退货</van-col>
</van-row>

	
	
	</div>
</template>

<script>
import { Swipe, SwipeItem,Search,Row, Col,Icon } from 'vant';
	export default {
		components: {
			[Swipe.name]: Swipe,
			[SwipeItem.name]: SwipeItem,
			[Search.name]: Search,
			[Row.name]: Row,
			[Col.name]: Col,
			[Icon.name]: Icon
		}
	};
</script>
<style scoped>
	.images{width: 343px;height: 240px;}
	.van-swipe-item{text-align: center;background: #fff;}
	.m-bv{width: 100%;height: 40px;background: #fff;margin-top: 3px;line-height: 40px;}
	.bv{text-align: center;color: rgba(69,90,100,.6);font-size: 14px;}
	.pass{color: red;}
</style>