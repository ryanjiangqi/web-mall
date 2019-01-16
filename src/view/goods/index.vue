<template>

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
        <van-button
          block
          type="primary"
          @click="showBase = true"
        >
        </van-button>
      </div>








</template>

<script>
	import {

		Sku,
		Button,
	} from 'vant';

import skuData from './data';
import { LIMIT_TYPE } from './constants';
export default {
	components: {

				[Sku.name]: Sku,
				[Button.name]:Button,
			},

  data() {
    this.skuData = skuData;
    return {
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

<style lang="less">
.demo-sku {
  .sku-container {
    padding: 0 15px;
  }
}
</style>