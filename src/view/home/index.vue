<template>
    <div>
        <van-search placeholder="请输入搜索关键词" style='background:  #f8f8f8;'/>
        <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item><img src="https://img.yzcdn.cn/public_files/2017/09/05/c0dab461920687911536621b345a0bc9.jpg"
                                 alt=""
                                 class="images"></van-swipe-item>
            <van-swipe-item><img src="https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg"
                                 alt=""
                                 class="images"></van-swipe-item>
            <van-swipe-item><img src="https://img.yzcdn.cn/public_files/2017/09/05/fd08f07665ed67d50e11b32a21ce0682.jpg"
                                 alt=""
                                 class="images"></van-swipe-item>
        </van-swipe>
        <van-row class='m-bv'>
            <van-col span="8" class='bv'>
                <van-icon name="passed" class='pass'/>
                精选品牌
            </van-col>
            <van-col span="8" class='bv'>
                <van-icon name="passed" class='pass'/>
                大V推荐
            </van-col>
            <van-col span="8" class='bv'>
                <van-icon name="passed" class='pass'/>
                无忧退货
            </van-col>
        </van-row>

        <van-row class="cate" style="margin-top: 10px;">
            <van-col span="6"><img
                    src="https://img.yzcdn.cn/public_files/2017/09/05/c0dab461920687911536621b345a0bc9.jpg" alt=""
                    class="cate-images"></van-col>
            <van-col span="6"><img
                    src="https://img.yzcdn.cn/public_files/2017/09/05/c0dab461920687911536621b345a0bc9.jpg" alt=""
                    class="cate-images"></van-col>
            <van-col span="6"><img
                    src="https://img.yzcdn.cn/public_files/2017/09/05/c0dab461920687911536621b345a0bc9.jpg" alt=""
                    class="cate-images"></van-col>
            <van-col span="6"><img
                    src="https://img.yzcdn.cn/public_files/2017/09/05/c0dab461920687911536621b345a0bc9.jpg" alt=""
                    class="cate-images"></van-col>
        </van-row>
        <van-row class="cate" >
            <van-col span="6"><img
                    src="https://img.yzcdn.cn/public_files/2017/09/05/c0dab461920687911536621b345a0bc9.jpg" alt=""
                    class="cate-images"></van-col>
            <van-col span="6"><img
                    src="https://img.yzcdn.cn/public_files/2017/09/05/c0dab461920687911536621b345a0bc9.jpg" alt=""
                    class="cate-images"></van-col>
            <van-col span="6"><img
                    src="https://img.yzcdn.cn/public_files/2017/09/05/c0dab461920687911536621b345a0bc9.jpg" alt=""
                    class="cate-images"></van-col>
            <van-col span="6"><img
                    src="https://img.yzcdn.cn/public_files/2017/09/05/c0dab461920687911536621b345a0bc9.jpg" alt=""
                    class="cate-images"></van-col>
        </van-row>

        <van-cell-group style="margin-top: 10px;">
            <van-cell class="news"  title="头条" value=""  is-link url="//youzan.github.io/vant/mobile.html" />
            <van-cell class="news"  title="单元格单元格单元格q1" value="" label="描述信息" />
            <van-cell class="news"  title="单元格单元元格q1" value="" label="描述信息" />
            <van-cell class="news"  title="单元格单元格格q1" value="" label="描述信息" />
            <van-cell class="news"  title="单元格单元格单元格q1" value="" label="描述信息" />
        </van-cell-group>

        <van-cell-group style="margin-top: 10px;">
            <van-cell class="news"  title="推荐" value=""  is-link url="//youzan.github.io/vant/mobile.html" />
        </van-cell-group>
        <van-card style="margin-top: 0;background: #fff;color: rgba(69, 90, 100, .6);"
                num="2"
                price="2.00"
                desc="描述信息"
                title="商品标题"
                :thumb="imageURL"
        />
        <van-card style="margin-top: 0;background: #fff;margin-top: 1px;color: rgba(69, 90, 100, .6);"
                  num="2"
                  price="2.00"
                  desc="描述信息"
                  title="商品标题"
                  :thumb="imageURL"
        />
        <van-card style="margin-top: 0;background: #fff;margin-top: 1px;color: rgba(69, 90, 100, .6);"
                  num="2"
                  price="2.00"
                  desc="描述信息"
                  title="商品标题"
                  :thumb="imageURL"
        />
        <van-card style="margin-top: 0;background: #fff;margin-top: 1px;color: rgba(69, 90, 100, .6);"
                  num="2"
                  price="2.00"
                  desc="描述信息"
                  title="商品标题"
                  :thumb="imageURL"
        />
        <van-card style="margin-top: 0;background: #fff;margin-top: 1px;color: rgba(69, 90, 100, .6);"
                  num="2"
                  price="2.00"
                  desc="描述信息"
                  title="商品标题"
                  :thumb="imageURL"
        />
        <van-card style="margin-top: 0;background: #fff;margin-top: 1px;color: rgba(69, 90, 100, .6);"
                  num="2"
                  price="2.00"
                  desc="描述信息描述信息描述信息描述信息描述信息描述信息"
                  title="商品标题"
                  :thumb="imageURL"
        />

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
        Cell, CellGroup,Card
    } from 'vant';

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
        },
        data() {
            return {
                imageURL: 'https://img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg'
            };
        },
    };
</script>
<style scoped>
    .images {
        width: 343px;
        height: 240px;
    }

    .van-swipe-item {
        text-align: center;
        background: #fff;
    }

    .m-bv {
        width: 100%;
        height: 40px;
        background: #fff;
        margin-top: 3px;
        line-height: 40px;
    }

    .bv {
        text-align: center;
        color: rgba(69, 90, 100, .6);
        font-size: 14px;
    }

    .pass {
        color: red;
    }

    .cate {
        background: #fff;
        text-align: center;
    }

    .cate-images {
        padding: 5px;
        width: 40px;
        height: 40px;
    }
    .news{
         color: rgba(69, 90, 100, .6);
    }
</style>
