<template>
    <div style="background: #fff;">
        <van-search placeholder="请输入搜索关键词" style='background:  #f8f8f8;'/>
        <div style="padding-bottom: 60px;">
        <div v-for="value in itemsList">
            <van-row class='items-banner'>
            <van-col span="24"><img
                    v-bind:src="appUrl + '/' + value.image"
                    alt="" class="items-cate-images">
            </van-col>
            </van-row>
        <van-row class="items-cate">
            <van-col span="24">
                <span class="items-title">— {{value.items_name}} —</span>
            </van-col>
        </van-row>
        <van-row class="items-cate">
            <van-col span="6" v-for="val in value.child">
				<span class="items-cate-img"><a href="/#/list"><img
                        v-bind:src="appUrl + '/' + val.image"
                        alt="" class="items-cate-images"></a></span>
                <span class="items-cate-title">{{val.items_name}}</span>
            </van-col>
        </van-row>
        </div>
        </div>
        <web-foot :childActive="active"></web-foot>
    </div>
</template>

<script>
    import {

        Search,
        Row,
        Col,
        Tabbar,
        TabbarItem,

    } from 'vant';
    import webFoot from '../footer/index.vue';

    export default {
        components: {
            [Search.name]: Search,
            [Row.name]: Row,
            [Col.name]: Col,
            webFoot,
        },
        data() {
            return {
                active: 1,
                itemsList: [],
            };
        },
        created() {
            this.getData();
        },
        methods: {
            getData() {
                this.url = '/api/items';
                this.$axios.post(this.url, {}, {
                    headers: {}
                }).then((res) => {
                    this.itemsList = res.data.data;
                })
            }
        }

    };
</script>
<style>

    .items-banner {
    }

    .items-banner img {
        width: 100%;
        margin-top: 5px;
    }

    .items-cate {
        background: #fff;
        text-align: center;
        margin-top: 10px;
    }

    .items-cate-images {
        padding: 5px 5px 0 5px;
        width: 40px;

    }

    .items-cate-title {
        color: rgba(69, 90, 100, .6);
        font-size: 13px;
        width: 100%;
        float: left;
    }

    .items-cate-img {
        width: 100%;
        float: left;
    }

    .items-title {
        color: rgba(69, 90, 100, .6);
        font-size: 13px;
    }
</style>
<style scoped>

</style>