<template>
	<div style="margin-top: 10px;">
		<van-address-list v-model="chosenAddressId" :list="list" 
		 @add="onAdd" @edit="onEdit" />
	</div>
</template>

<script>
	import {
		AddressList,
	} from 'vant';
	export default {
		components: {
			[AddressList.name]: AddressList,
		},
		data() {
			return {
				chosenAddressId: '1',
				list: [{
						id: '1',
						name: '张三',
						tel: '13000000000',
						address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
					},
					{
						id: '2',
						name: '李四',
						tel: '1310000000',
						address: '浙江省杭州市拱墅区莫干山路 50 号'
					}
				],
				add: '新增地址',
				edit: '编辑地址',
				disabledText: '以下地址超出配送范围'
			};
		},
		methods: {
			onAdd() {
				this.$router.push({
					name: 'add_address',
					params: {
						id: '1'
					}
				});
			},
			onEdit(item, index) {

			}
		}
	};
</script>
