<template>

	<div style="margin-top: 10px;">
		<van-address-edit :area-list="areaList" show-postal show-delete show-set-default show-search-result :search-result="searchResult"
		 @save="onSave" @delete="onDelete" @change-detail="onChangeDetail" />
	</div>
</template>

<script>
	import areaList from '../../area';
	import {
		AddressEdit,
	} from 'vant';
	export default {
		components: {
			[AddressEdit.name]: AddressEdit,
		},
		data() {
			return {
				areaList,
				searchResult: [{
					name: '黄龙万科中心',
					address: '杭州市西湖区'
				}, {
					name: '黄龙万科中心G座'
				}, {
					name: '黄龙万科中心H座',
					address: '杭州市西湖区'
				}]
			};
		},
		methods: {
			onSave() {
				//this.$toast(this.$t('save'));
			},
			onDelete() {
				//this.$toast(this.$t('delete'));
			},
			onChangeDetail(val) {
				//this.searchResult = val ? this.$t('searchResult') : [];
			}
		}
	};
</script>
