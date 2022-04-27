<template>
	<view class="content">
		<form class="app-update-pv">
			
									<view :style='{"boxShadow":"","backgroundColor":"rgba(255, 255, 255, 0.56)","borderColor":"#ccc","margin":"","borderWidth":"0","borderStyle":"solid","height":"108rpx"}' class="cu-form-group">
				<view :style='{"width":"160rpx","fontSize":"28rpx","color":"rgba(41, 40, 40, 1)","textAlign":"left"}' class="title">标题</view>
				<input :style='{"boxShadow":"0 0 16rpx rgba(0,0,0,.6) inset","backgroundColor":"rgba(255, 255, 255, 0.56)","borderColor":"rgba(0,0,0,.6)","borderRadius":"16rpx","color":"rgba(40, 38, 38, 1)","textAlign":"left","borderWidth":"2rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' :disabled="ro.biaoti" v-model="ruleForm.biaoti" placeholder="标题"></input>
			</view>
												<view :style='{"boxShadow":"","backgroundColor":"rgba(255, 255, 255, 0.56)","borderColor":"rgba(252, 252, 252, 1)","margin":"","borderWidth":"0","borderStyle":"solid","height":"108rpx"}' class="cu-form-group select">
				<view :style='{"width":"160rpx","fontSize":"28rpx","color":"rgba(21, 20, 20, 1)","textAlign":"left"}' class="title">视频分类</view>
				<picker @change="shipinfenleiChange" :value="shipinfenleiIndex" :range="shipinfenleiOptions">
					<view :style='{"boxShadow":"0 0 16rpx rgba(0,0,0,.6) inset","backgroundColor":"rgba(255, 255, 255, 0.56)","borderColor":"rgba(0,0,0,.6)","borderRadius":"16rpx","color":"rgba(20, 19, 19, 1)","textAlign":"left","borderWidth":"2rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' class="uni-input">{{ruleForm.shipinfenlei?ruleForm.shipinfenlei:"请选择视频分类"}}</view>
				</picker>
			</view>
												<view :style='{"boxShadow":"","backgroundColor":"rgba(255, 255, 255, 0.56)","borderColor":"#ccc","margin":"","borderWidth":"0","borderStyle":"solid","height":"108rpx"}' class="cu-form-group" @tap="shipinTap" :class='left == "left"?"":"active"'>
				<view :style='{"width":"160rpx","fontSize":"28rpx","color":"rgba(23, 22, 22, 1)","textAlign":"left"}' class="title">视频</view>
				<view class="right-input" :style='{textAlign:"left"}' style="padding:0">
					<input :style='{"boxShadow":"0 0 16rpx rgba(0,0,0,.6) inset","backgroundColor":"rgba(255, 255, 255, 0.56)","borderColor":"rgba(0,0,0,.6)","borderRadius":"16rpx","color":"rgba(40, 38, 38, 1)","textAlign":"left","borderWidth":"2rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' v-if="ruleForm.shipin"  v-model="ruleForm.shipin" placeholder="视频"></input>
					<image :style='{"width":"88rpx","boxShadow":"0 0 16rpx rgba(0,0,0,.3)","borderRadius":"100%","textAlign":"left","height":"88rpx"}' class="avator" v-else src="../../static/gen/upload.png" mode="aspectFill"></image>
				</view>
			</view>
												<view :style='{"boxShadow":"","backgroundColor":"rgba(255, 255, 255, 0.56)","borderColor":"#ccc","margin":"","borderWidth":"0","borderStyle":"solid","height":"108rpx"}' class="cu-form-group" @tap="shipinfengmianTap" :class='left == "left"?"":"active"'>
				<view :style='{"width":"160rpx","fontSize":"28rpx","color":"rgba(23, 22, 22, 1)","textAlign":"left"}' class="title">视频封面</view>
				<view class="right-input" :style='{textAlign:"left"}' style="padding:0">
					<image :style='{"width":"88rpx","boxShadow":"0 0 16rpx rgba(0,0,0,.3)","borderRadius":"100%","textAlign":"left","height":"88rpx"}' class="avator" v-if="ruleForm.shipinfengmian" :src="ruleForm.shipinfengmian" mode="aspectFill"></image>
					<image :style='{"width":"88rpx","boxShadow":"0 0 16rpx rgba(0,0,0,.3)","borderRadius":"100%","textAlign":"left","height":"88rpx"}' class="avator" v-else src="../../static/gen/upload.png" mode="aspectFill"></image>
				</view>
			</view>
												<view :style='{"boxShadow":"","backgroundColor":"rgba(255, 255, 255, 0.56)","borderColor":"#ccc","margin":"","borderWidth":"0","borderStyle":"solid","height":"108rpx"}' class="cu-form-group">
				<view :style='{"width":"160rpx","fontSize":"28rpx","color":"rgba(41, 40, 40, 1)","textAlign":"left"}' class="title">校友账号</view>
				<input :style='{"boxShadow":"0 0 16rpx rgba(0,0,0,.6) inset","backgroundColor":"rgba(255, 255, 255, 0.56)","borderColor":"rgba(0,0,0,.6)","borderRadius":"16rpx","color":"rgba(40, 38, 38, 1)","textAlign":"left","borderWidth":"2rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' :disabled="ro.xiaoyouzhanghao" v-model="ruleForm.xiaoyouzhanghao" placeholder="校友账号"></input>
			</view>
												<view :style='{"boxShadow":"","backgroundColor":"rgba(255, 255, 255, 0.56)","borderColor":"#ccc","margin":"","borderWidth":"0","borderStyle":"solid","height":"108rpx"}' class="cu-form-group">
				<view :style='{"width":"160rpx","fontSize":"28rpx","color":"rgba(41, 40, 40, 1)","textAlign":"left"}' class="title">校友姓名</view>
				<input :style='{"boxShadow":"0 0 16rpx rgba(0,0,0,.6) inset","backgroundColor":"rgba(255, 255, 255, 0.56)","borderColor":"rgba(0,0,0,.6)","borderRadius":"16rpx","color":"rgba(40, 38, 38, 1)","textAlign":"left","borderWidth":"2rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' :disabled="ro.xiaoyouxingming" v-model="ruleForm.xiaoyouxingming" placeholder="校友姓名"></input>
			</view>
												<view :style='{"boxShadow":"","backgroundColor":"rgba(255, 255, 255, 0.56)","borderColor":"#ccc","margin":"","borderWidth":"0","borderStyle":"solid","height":"108rpx"}' class="cu-form-group">
				<view :style='{"width":"160rpx","fontSize":"28rpx","color":"rgba(41, 40, 40, 1)","textAlign":"left"}' class="title">发布时间</view>
				<input :style='{"boxShadow":"0 0 16rpx rgba(0,0,0,.6) inset","backgroundColor":"rgba(255, 255, 255, 0.56)","borderColor":"rgba(0,0,0,.6)","borderRadius":"16rpx","color":"rgba(40, 38, 38, 1)","textAlign":"left","borderWidth":"2rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' v-model="ruleForm.fabushijian" placeholder="发布时间" @tap="toggleTab('fabushijian')"></input>
			</view>
																																																															
			<!-- 否 -->
 
			
			          				          				          				          				          				          				          				          				          				          				          				          				          							
			          				          				          				          				          				          				          				          				<view :style='{"boxShadow":"","backgroundColor":"rgba(255, 255, 255, 0.56)","borderColor":"#ccc","margin":"","borderWidth":"0","borderStyle":"solid","height":"308rpx"}' class="cu-form-group">
				<view :style='{"width":"160rpx","fontSize":"28rpx","color":"rgba(28, 27, 27, 1)","textAlign":"left"}' class="title">视频简介</view>
				<textarea :style='{"boxShadow":"0 0 16rpx rgba(0,0,0,.6) inset","backgroundColor":"rgba(255, 255, 255, 0)","borderColor":"rgba(0,0,0,.6)","borderRadius":"16rpx","color":"rgba(23, 22, 22, 1)","textAlign":"left","borderWidth":"2rpx","fontSize":"28rpx","borderStyle":"solid","height":"280rpx"}' v-model="ruleForm.shipinjianjie" placeholder="视频简介"></textarea>
			</view>
						          				          				          				          				          							
			<view class="btn">
				<button :style='{"boxShadow":"0 0 16rpx rgba(0,0,0,0) inset","backgroundColor":"#409EFF","borderColor":"#409EFF","borderRadius":"40rpx","color":"#fff","borderWidth":"1","width":"80%","fontSize":"28rpx","borderStyle":"solid","height":"80rpx"}' @tap="onSubmitTap" class="bg-red">提交</button>
			</view>
		</form>

																														<w-picker mode="dateTime" step="1" :current="false" :hasSecond="false" @confirm="fabushijianConfirm" ref="fabushijian" themeColor="#333333"></w-picker>
																				<w-picker mode="dateTime" step="1" :current="false" :hasSecond="false" @confirm="clicktimeConfirm" ref="clicktime" themeColor="#333333"></w-picker>
															
	</view>
</template>

<script>
	import wPicker from "@/components/w-picker/w-picker.vue";

	export default {
		data() {
			return {
				ruleForm: {
												biaoti: '',
																shipinfenlei: '',
																shipin: '',
																shipinfengmian: '',
																xiaoyouzhanghao: '',
																xiaoyouxingming: '',
																fabushijian: '',
																shipinjianjie: '',
																thumbsupnum: '',
																crazilynum: '',
																clicktime: '',
																clicknum: '',
																userid: '',
												},
																				shipinfenleiOptions: [],
				shipinfenleiIndex: 0,
																																																																																																				// 登陆用户信息
				user: {},
                                ro:{
                                   biaoti : false,
                                   shipinfenlei : false,
                                   shipin : false,
                                   shipinfengmian : false,
                                   xiaoyouzhanghao : false,
                                   xiaoyouxingming : false,
                                   fabushijian : false,
                                   shipinjianjie : false,
                                   thumbsupnum : false,
                                   crazilynum : false,
                                   clicktime : false,
                                   clicknum : false,
                                   userid : false,
                                },
			}
		},
		components: {
			wPicker
		},
		computed: {
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
					},
		async onLoad(options) {
			let table = uni.getStorageSync("nowTable");
			// 获取用户信息
			let res = await this.$api.session(table);
			this.user = res.data;
			
						// ss读取
																																	this.ruleForm.xiaoyouzhanghao = this.user.xiaoyouzhanghao
												this.ruleForm.xiaoyouxingming = this.user.xiaoyouxingming
																																																			
																		// 下拉框
			res = await this.$api.option(`shipinfenlei`,`shipinfenlei`,{});
			this.shipinfenleiOptions = res.data;
																																																																											
			// 如果有登陆，获取登陆后保存的userid
			this.ruleForm.userid = uni.getStorageSync("userid")
			if (options.refid) {
				// 如果上一级页面传递了refid，获取改refid数据信息
				this.ruleForm.refid = options.refid;
				this.ruleForm.nickname = uni.getStorageSync("nickname");
			}
			// 如果是更新操作
			if (options.id) {
				this.ruleForm.id = options.id;
				// 获取信息
				res = await this.$api.info(`xiaoyoushipin`, this.ruleForm.id);
				this.ruleForm = res.data;
			}
			// 跨表
			if(options.cross){
				var obj = uni.getStorageSync('crossObj');
				for (var o in obj){
					if(o=='biaoti'){
					this.ruleForm.biaoti = obj[o];
					this.ro.biaoti = true;
					continue;
					}
					if(o=='shipinfenlei'){
					this.ruleForm.shipinfenlei = obj[o];
					this.ro.shipinfenlei = true;
					continue;
					}
					if(o=='shipin'){
					this.ruleForm.shipin = obj[o];
					this.ro.shipin = true;
					continue;
					}
					if(o=='shipinfengmian'){
					this.ruleForm.shipinfengmian = obj[o];
					this.ro.shipinfengmian = true;
					continue;
					}
					if(o=='xiaoyouzhanghao'){
					this.ruleForm.xiaoyouzhanghao = obj[o];
					this.ro.xiaoyouzhanghao = true;
					continue;
					}
					if(o=='xiaoyouxingming'){
					this.ruleForm.xiaoyouxingming = obj[o];
					this.ro.xiaoyouxingming = true;
					continue;
					}
					if(o=='fabushijian'){
					this.ruleForm.fabushijian = obj[o];
					this.ro.fabushijian = true;
					continue;
					}
					if(o=='shipinjianjie'){
					this.ruleForm.shipinjianjie = obj[o];
					this.ro.shipinjianjie = true;
					continue;
					}
					if(o=='thumbsupnum'){
					this.ruleForm.thumbsupnum = obj[o];
					this.ro.thumbsupnum = true;
					continue;
					}
					if(o=='crazilynum'){
					this.ruleForm.crazilynum = obj[o];
					this.ro.crazilynum = true;
					continue;
					}
					if(o=='clicktime'){
					this.ruleForm.clicktime = obj[o];
					this.ro.clicktime = true;
					continue;
					}
					if(o=='clicknum'){
					this.ruleForm.clicknum = obj[o];
					this.ro.clicknum = true;
					continue;
					}
					if(o=='userid'){
					this.ruleForm.userid = obj[o];
					this.ro.userid = true;
					continue;
					}
				}
			}
			this.styleChange()
		},
		methods: {
			styleChange() {
				this.$nextTick(()=>{
					// document.querySelectorAll('.app-update-pv .cu-form-group .uni-input-input').forEach(el=>{
					//   el.style.backgroundColor = this.addUpdateForm.input.content.backgroundColor
					// })
				})
			},
																																																																																				
			// 多级联动参数
																																																																																				
																																																																																	
																																													// 日长控件选择日期时间
			fabushijianConfirm(val) {
				console.log(val)
				this.ruleForm.fabushijian = val.result;
				this.$forceUpdate();
			},
																														// 日长控件选择日期时间
			clicktimeConfirm(val) {
				console.log(val)
				this.ruleForm.clicktime = val.result;
				this.$forceUpdate();
			},
																		
															// 下拉变化
			shipinfenleiChange(e) {
				this.shipinfenleiIndex = e.target.value
				this.ruleForm.shipinfenlei = this.shipinfenleiOptions[this.shipinfenleiIndex]
			},
																																																																								
																											shipinTap() {
				let _this = this;
				this.$api.upload(function(res) {
					_this.ruleForm.shipin = _this.$base.url + 'upload/' + res.file;
					_this.$forceUpdate();
					_this.$nextTick(()=>{
						_this.styleChange()
					})
				});
			},
															shipinfengmianTap() {
				let _this = this;
				this.$api.upload(function(res) {
					_this.ruleForm.shipinfengmian = _this.$base.url + 'upload/' + res.file;
					_this.$forceUpdate();
					_this.$nextTick(()=>{
						_this.styleChange()
					})
				});
			},
																																																																																										
			getUUID () {
				return new Date().getTime();
			},
			async onSubmitTap() {
																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																				if(this.ruleForm.thumbsupnum&&(!this.$validate.isIntNumer(this.ruleForm.thumbsupnum))){
					this.$utils.msg(`赞应输入整数`);
					return
				}
																																								if(this.ruleForm.crazilynum&&(!this.$validate.isIntNumer(this.ruleForm.crazilynum))){
					this.$utils.msg(`踩应输入整数`);
					return
				}
																																																																								if(this.ruleForm.clicknum&&(!this.$validate.isIntNumer(this.ruleForm.clicknum))){
					this.$utils.msg(`点击次数应输入整数`);
					return
				}
																																				if((!this.ruleForm.userid)){
					this.$utils.msg(`用户id不能为空`);
					return
				}
																																				if(this.ruleForm.id){
					await this.$api.update(`xiaoyoushipin`, this.ruleForm);
				}else{
					await this.$api.add(`xiaoyoushipin`, this.ruleForm);
				}
				this.$utils.msgBack('提交成功');
			},
			optionsChange(e) {
				this.index = e.target.value
			},
			bindDateChange(e) {
				this.date = e.target.value
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			toggleTab(str) {
				this.$refs[str].show();
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		padding: 20upx;
	}
	
	.content:after {
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		content: '';
				background-attachment: fixed;
		background-size: cover;
		background-position: center;
	}

	textarea {
		border: 1upx solid #EEEEEE;
		border-radius: 20upx;
		padding: 20upx;
	}

	.title {
		width: 180upx;
	}

	.avator {
		width: 150upx;
		height: 60upx;
	}

	.right-input {
		flex: 1;
		text-align: left;
		padding: 0 24upx;
	}
	
	.cu-form-group.active {
		justify-content: space-between;
	}
	
	.btn {
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  flex-wrap: wrap;
	  padding: 20upx 0;
	}
	
	.cu-form-group {
		padding: 0 24upx;
		background-color: transparent;
		min-height: inherit;
	}
	
	.cu-form-group+.cu-form-group {
		border: 0;
	}
	
	.cu-form-group uni-input {
		padding: 0 30upx;
	}
	
	.uni-input {
		padding: 0 30upx;
	}
	
	.cu-form-group uni-textarea {
		padding: 30upx;
		margin: 0;
	}
	
	.cu-form-group uni-picker::after {
		line-height: 88rpx;
	}
	
	.select .uni-input {
		line-height: 88rpx;
	}
	
	.input .right-input {
		line-height: 88rpx;
	}
</style>
