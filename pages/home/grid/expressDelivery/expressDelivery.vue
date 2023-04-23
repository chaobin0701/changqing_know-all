<template>
	<view class="expressDelivery-wrapper">
		<uni-card :is-shadow="false" is-full>
			<text class="uni-h6">uni-forms 组件一般由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据。</text>
		</uni-card>
		<uni-section title="基本用法" type="line">
			<view class="example">
				<!-- 基础用法，不包含校验规则 -->
				<uni-forms ref="baseForm" :modelValue="expressPickupForm">
					<uni-forms-item label="收件人姓名" required>
						<uni-easyinput v-model="expressPickupForm.name" placeholder="请输入收件人姓名" />
					</uni-forms-item>
					<uni-forms-item label="收件人电话" required>
						<uni-easyinput v-model="expressPickupForm.phone" placeholder="请输入收件人电话" />
					</uni-forms-item>
					<uni-forms-item label="收件地址" required>
						<uni-easyinput v-model="expressPickupForm.address" placeholder="请输入收件地址" />
					</uni-forms-item>
					<uni-forms-item label="快递预计重量" required>
						<uni-easyinput v-model="expressPickupForm.weight" placeholder="请输入快递预计重量" />
					</uni-forms-item>
					<uni-forms-item label="快递取件码" required>
						<uni-easyinput v-model="expressPickupForm.pickupCode" placeholder="请输入快递取件码" />
					</uni-forms-item>
					<uni-forms-item label="快递单号" required>
						<uni-easyinput v-model="expressPickupForm.trackingNumber" placeholder="请输入快递单号" />
					</uni-forms-item>
					<uni-forms-item label="代收时间段" required>
						<uni-easyinput v-model="expressPickupForm.pickupTime" placeholder="请输入代收时间段" />
					</uni-forms-item>
					<uni-forms-item label="快递公司" required>
						<uni-easyinput v-model="expressPickupForm.company" placeholder="请输入快递公司" />
					</uni-forms-item>
					<!-- <uni-forms-item label="收件地址" required>
						<uni-data-checkbox v-model="expressPickupForm.address" :localdata="sexs" />
					</uni-forms-item>
					<uni-forms-item label="兴趣爱好" required>
						<uni-data-checkbox v-model="expressPickupForm.hobby" multiple :localdata="hobbys" />
					</uni-forms-item>
					<uni-forms-item label="自我介绍">
						<uni-easyinput type="textarea" v-model="expressPickupForm.introduction" placeholder="请输入自我介绍" />
					</uni-forms-item>
					<uni-forms-item label="日期时间">
						<uni-datetime-picker type="datetime" return-type="timestamp"
							v-model="baseFormData.datetimesingle" />
					</uni-forms-item> -->
				</uni-forms>
			</view>
		</uni-section>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				expressPickupForm: { //快递代取服务
					"name": "收件人姓名（字符串类型）",
					"phone": "收件人电话（字符串类型，需要满足电话号码格式）",
					"address": "收件地址（字符串类型）",
					"weight": "快递预计重量（数值类型，单位为千克）",
					"pickupCode": "快递取件码（字符串类型）",
					"trackingNumber": "快递单号（可选属性，字符串类型）",
					"pickupTime": "代收时间段（字符串类型）",
					"company": "快递公司名称（字符串类型）"
				}

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.example {
		padding: 15px;
		background-color: #fff;
	}
</style>
