(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-xiaoyoushipin-add-or-update"],{"0087":function(i,e,t){"use strict";t.r(e);var r=t("19a6"),n=t.n(r);for(var o in r)"default"!==o&&function(i){t.d(e,i,(function(){return r[i]}))}(o);e["default"]=n.a},"0956":function(i,e,t){"use strict";var r={"w-picker":t("e2b1").default},n=function(){var i=this,e=i.$createElement,t=i._self._c||e;return t("v-uni-view",{staticClass:"content"},[t("v-uni-form",{staticClass:"app-update-pv"},[t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"#ccc",margin:"",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(41, 40, 40, 1)",textAlign:"left"}},[i._v("标题")]),t("v-uni-input",{style:{boxShadow:"0 0 16rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(40, 38, 38, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:i.ro.biaoti,placeholder:"标题"},model:{value:i.ruleForm.biaoti,callback:function(e){i.$set(i.ruleForm,"biaoti",e)},expression:"ruleForm.biaoti"}})],1),t("v-uni-view",{staticClass:"cu-form-group select",style:{boxShadow:"",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"rgba(252, 252, 252, 1)",margin:"",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(21, 20, 20, 1)",textAlign:"left"}},[i._v("视频分类")]),t("v-uni-picker",{attrs:{value:i.shipinfenleiIndex,range:i.shipinfenleiOptions},on:{change:function(e){arguments[0]=e=i.$handleEvent(e),i.shipinfenleiChange.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"uni-input",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(20, 19, 19, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"}},[i._v(i._s(i.ruleForm.shipinfenlei?i.ruleForm.shipinfenlei:"请选择视频分类"))])],1)],1),t("v-uni-view",{staticClass:"cu-form-group",class:"left"==i.left?"":"active",style:{boxShadow:"",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"#ccc",margin:"",borderWidth:"0",borderStyle:"solid",height:"108rpx"},on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i.shipinTap.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(23, 22, 22, 1)",textAlign:"left"}},[i._v("视频")]),t("v-uni-view",{staticClass:"right-input",staticStyle:{padding:"0"},style:{textAlign:"left"}},[i.ruleForm.shipin?t("v-uni-input",{style:{boxShadow:"0 0 16rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(40, 38, 38, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{placeholder:"视频"},model:{value:i.ruleForm.shipin,callback:function(e){i.$set(i.ruleForm,"shipin",e)},expression:"ruleForm.shipin"}}):t("v-uni-image",{staticClass:"avator",style:{width:"88rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"100%",textAlign:"left",height:"88rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1)],1),t("v-uni-view",{staticClass:"cu-form-group",class:"left"==i.left?"":"active",style:{boxShadow:"",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"#ccc",margin:"",borderWidth:"0",borderStyle:"solid",height:"108rpx"},on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i.shipinfengmianTap.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(23, 22, 22, 1)",textAlign:"left"}},[i._v("视频封面")]),t("v-uni-view",{staticClass:"right-input",staticStyle:{padding:"0"},style:{textAlign:"left"}},[i.ruleForm.shipinfengmian?t("v-uni-image",{staticClass:"avator",style:{width:"88rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"100%",textAlign:"left",height:"88rpx"},attrs:{src:i.ruleForm.shipinfengmian,mode:"aspectFill"}}):t("v-uni-image",{staticClass:"avator",style:{width:"88rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"100%",textAlign:"left",height:"88rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1)],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"#ccc",margin:"",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(41, 40, 40, 1)",textAlign:"left"}},[i._v("校友账号")]),t("v-uni-input",{style:{boxShadow:"0 0 16rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(40, 38, 38, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:i.ro.xiaoyouzhanghao,placeholder:"校友账号"},model:{value:i.ruleForm.xiaoyouzhanghao,callback:function(e){i.$set(i.ruleForm,"xiaoyouzhanghao",e)},expression:"ruleForm.xiaoyouzhanghao"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"#ccc",margin:"",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(41, 40, 40, 1)",textAlign:"left"}},[i._v("校友姓名")]),t("v-uni-input",{style:{boxShadow:"0 0 16rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(40, 38, 38, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:i.ro.xiaoyouxingming,placeholder:"校友姓名"},model:{value:i.ruleForm.xiaoyouxingming,callback:function(e){i.$set(i.ruleForm,"xiaoyouxingming",e)},expression:"ruleForm.xiaoyouxingming"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"#ccc",margin:"",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(41, 40, 40, 1)",textAlign:"left"}},[i._v("发布时间")]),t("v-uni-input",{style:{boxShadow:"0 0 16rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(40, 38, 38, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{placeholder:"发布时间"},on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i.toggleTab("fabushijian")}},model:{value:i.ruleForm.fabushijian,callback:function(e){i.$set(i.ruleForm,"fabushijian",e)},expression:"ruleForm.fabushijian"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"#ccc",margin:"",borderWidth:"0",borderStyle:"solid",height:"308rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(28, 27, 27, 1)",textAlign:"left"}},[i._v("视频简介")]),t("v-uni-textarea",{style:{boxShadow:"0 0 16rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 22, 22, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"280rpx"},attrs:{placeholder:"视频简介"},model:{value:i.ruleForm.shipinjianjie,callback:function(e){i.$set(i.ruleForm,"shipinjianjie",e)},expression:"ruleForm.shipinjianjie"}})],1),t("v-uni-view",{staticClass:"btn"},[t("v-uni-button",{staticClass:"bg-red",style:{boxShadow:"0 0 16rpx rgba(0,0,0,0) inset",backgroundColor:"#409EFF",borderColor:"#409EFF",borderRadius:"40rpx",color:"#fff",borderWidth:"1",width:"80%",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i.onSubmitTap.apply(void 0,arguments)}}},[i._v("提交")])],1)],1),t("w-picker",{ref:"fabushijian",attrs:{mode:"dateTime",step:"1",current:!1,hasSecond:!1,themeColor:"#333333"},on:{confirm:function(e){arguments[0]=e=i.$handleEvent(e),i.fabushijianConfirm.apply(void 0,arguments)}}}),t("w-picker",{ref:"clicktime",attrs:{mode:"dateTime",step:"1",current:!1,hasSecond:!1,themeColor:"#333333"},on:{confirm:function(e){arguments[0]=e=i.$handleEvent(e),i.clicktimeConfirm.apply(void 0,arguments)}}})],1)},o=[];t.d(e,"b",(function(){return n})),t.d(e,"c",(function(){return o})),t.d(e,"a",(function(){return r}))},"19a6":function(i,e,t){"use strict";var r=t("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,t("ac6a"),t("96cf");var n=r(t("3b8d")),o=r(t("e2b1")),a={data:function(){return{ruleForm:{biaoti:"",shipinfenlei:"",shipin:"",shipinfengmian:"",xiaoyouzhanghao:"",xiaoyouxingming:"",fabushijian:"",shipinjianjie:"",thumbsupnum:"",crazilynum:"",clicktime:"",clicknum:"",userid:""},shipinfenleiOptions:[],shipinfenleiIndex:0,user:{},ro:{biaoti:!1,shipinfenlei:!1,shipin:!1,shipinfengmian:!1,xiaoyouzhanghao:!1,xiaoyouxingming:!1,fabushijian:!1,shipinjianjie:!1,thumbsupnum:!1,crazilynum:!1,clicktime:!1,clicknum:!1,userid:!1}}},components:{wPicker:o.default},computed:{},onLoad:function(){var i=(0,n.default)(regeneratorRuntime.mark((function i(e){var t,r,n,o;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return t=uni.getStorageSync("nowTable"),i.next=3,this.$api.session(t);case 3:return r=i.sent,this.user=r.data,this.ruleForm.xiaoyouzhanghao=this.user.xiaoyouzhanghao,this.ruleForm.xiaoyouxingming=this.user.xiaoyouxingming,i.next=9,this.$api.option("shipinfenlei","shipinfenlei",{});case 9:if(r=i.sent,this.shipinfenleiOptions=r.data,this.ruleForm.userid=uni.getStorageSync("userid"),e.refid&&(this.ruleForm.refid=e.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!e.id){i.next=19;break}return this.ruleForm.id=e.id,i.next=17,this.$api.info("xiaoyoushipin",this.ruleForm.id);case 17:r=i.sent,this.ruleForm=r.data;case 19:if(!e.cross){i.next=78;break}n=uni.getStorageSync("crossObj"),i.t0=regeneratorRuntime.keys(n);case 22:if((i.t1=i.t0()).done){i.next=78;break}if(o=i.t1.value,"biaoti"!=o){i.next=28;break}return this.ruleForm.biaoti=n[o],this.ro.biaoti=!0,i.abrupt("continue",22);case 28:if("shipinfenlei"!=o){i.next=32;break}return this.ruleForm.shipinfenlei=n[o],this.ro.shipinfenlei=!0,i.abrupt("continue",22);case 32:if("shipin"!=o){i.next=36;break}return this.ruleForm.shipin=n[o],this.ro.shipin=!0,i.abrupt("continue",22);case 36:if("shipinfengmian"!=o){i.next=40;break}return this.ruleForm.shipinfengmian=n[o],this.ro.shipinfengmian=!0,i.abrupt("continue",22);case 40:if("xiaoyouzhanghao"!=o){i.next=44;break}return this.ruleForm.xiaoyouzhanghao=n[o],this.ro.xiaoyouzhanghao=!0,i.abrupt("continue",22);case 44:if("xiaoyouxingming"!=o){i.next=48;break}return this.ruleForm.xiaoyouxingming=n[o],this.ro.xiaoyouxingming=!0,i.abrupt("continue",22);case 48:if("fabushijian"!=o){i.next=52;break}return this.ruleForm.fabushijian=n[o],this.ro.fabushijian=!0,i.abrupt("continue",22);case 52:if("shipinjianjie"!=o){i.next=56;break}return this.ruleForm.shipinjianjie=n[o],this.ro.shipinjianjie=!0,i.abrupt("continue",22);case 56:if("thumbsupnum"!=o){i.next=60;break}return this.ruleForm.thumbsupnum=n[o],this.ro.thumbsupnum=!0,i.abrupt("continue",22);case 60:if("crazilynum"!=o){i.next=64;break}return this.ruleForm.crazilynum=n[o],this.ro.crazilynum=!0,i.abrupt("continue",22);case 64:if("clicktime"!=o){i.next=68;break}return this.ruleForm.clicktime=n[o],this.ro.clicktime=!0,i.abrupt("continue",22);case 68:if("clicknum"!=o){i.next=72;break}return this.ruleForm.clicknum=n[o],this.ro.clicknum=!0,i.abrupt("continue",22);case 72:if("userid"!=o){i.next=76;break}return this.ruleForm.userid=n[o],this.ro.userid=!0,i.abrupt("continue",22);case 76:i.next=22;break;case 78:this.styleChange();case 79:case"end":return i.stop()}}),i,this)})));function e(e){return i.apply(this,arguments)}return e}(),methods:{styleChange:function(){this.$nextTick((function(){}))},fabushijianConfirm:function(i){console.log(i),this.ruleForm.fabushijian=i.result,this.$forceUpdate()},clicktimeConfirm:function(i){console.log(i),this.ruleForm.clicktime=i.result,this.$forceUpdate()},shipinfenleiChange:function(i){this.shipinfenleiIndex=i.target.value,this.ruleForm.shipinfenlei=this.shipinfenleiOptions[this.shipinfenleiIndex]},shipinTap:function(){var i=this;this.$api.upload((function(e){i.ruleForm.shipin=i.$base.url+"upload/"+e.file,i.$forceUpdate(),i.$nextTick((function(){i.styleChange()}))}))},shipinfengmianTap:function(){var i=this;this.$api.upload((function(e){i.ruleForm.shipinfengmian=i.$base.url+"upload/"+e.file,i.$forceUpdate(),i.$nextTick((function(){i.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var i=(0,n.default)(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(!this.ruleForm.thumbsupnum||this.$validate.isIntNumer(this.ruleForm.thumbsupnum)){i.next=3;break}return this.$utils.msg("赞应输入整数"),i.abrupt("return");case 3:if(!this.ruleForm.crazilynum||this.$validate.isIntNumer(this.ruleForm.crazilynum)){i.next=6;break}return this.$utils.msg("踩应输入整数"),i.abrupt("return");case 6:if(!this.ruleForm.clicknum||this.$validate.isIntNumer(this.ruleForm.clicknum)){i.next=9;break}return this.$utils.msg("点击次数应输入整数"),i.abrupt("return");case 9:if(this.ruleForm.userid){i.next=12;break}return this.$utils.msg("用户id不能为空"),i.abrupt("return");case 12:if(!this.ruleForm.id){i.next=17;break}return i.next=15,this.$api.update("xiaoyoushipin",this.ruleForm);case 15:i.next=19;break;case 17:return i.next=19,this.$api.add("xiaoyoushipin",this.ruleForm);case 19:this.$utils.msgBack("提交成功");case 20:case"end":return i.stop()}}),i,this)})));function e(){return i.apply(this,arguments)}return e}(),optionsChange:function(i){this.index=i.target.value},bindDateChange:function(i){this.date=i.target.value},getDate:function(i){var e=new Date,t=e.getFullYear(),r=e.getMonth()+1,n=e.getDate();return"start"===i?t-=60:"end"===i&&(t+=2),r=r>9?r:"0"+r,n=n>9?n:"0"+n,"".concat(t,"-").concat(r,"-").concat(n)},toggleTab:function(i){this.$refs[i].show()}}};e.default=a},4945:function(i,e,t){"use strict";t.r(e);var r=t("0956"),n=t("0087");for(var o in n)"default"!==o&&function(i){t.d(e,i,(function(){return n[i]}))}(o);t("5e44");var a,s=t("f0c5"),u=Object(s["a"])(n["default"],r["b"],r["c"],!1,null,"0b7771b4",null,!1,r["a"],a);e["default"]=u.exports},"5e44":function(i,e,t){"use strict";var r=t("b3f5"),n=t.n(r);n.a},b3f5:function(i,e,t){var r=t("fa33");"string"===typeof r&&(r=[[i.i,r,""]]),r.locals&&(i.exports=r.locals);var n=t("4f06").default;n("616f25ed",r,!0,{sourceMap:!1,shadowMode:!1})},fa33:function(i,e,t){var r=t("24fb");e=r(!1),e.push([i.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-0b7771b4]{padding:%?20?%}.content[data-v-0b7771b4]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-attachment:fixed;background-size:cover;background-position:50%}uni-textarea[data-v-0b7771b4]{border:%?1?% solid #eee;border-radius:%?20?%;padding:%?20?%}.title[data-v-0b7771b4]{width:%?180?%}.avator[data-v-0b7771b4]{width:%?150?%;height:%?60?%}.right-input[data-v-0b7771b4]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left;padding:0 %?24?%}.cu-form-group.active[data-v-0b7771b4]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.btn[data-v-0b7771b4]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?20?% 0}.cu-form-group[data-v-0b7771b4]{padding:0 %?24?%;background-color:initial;min-height:inherit}.cu-form-group + .cu-form-group[data-v-0b7771b4]{border:0}.cu-form-group uni-input[data-v-0b7771b4]{padding:0 %?30?%}.uni-input[data-v-0b7771b4]{padding:0 %?30?%}.cu-form-group uni-textarea[data-v-0b7771b4]{padding:%?30?%;margin:0}.cu-form-group uni-picker[data-v-0b7771b4]::after{line-height:%?88?%}.select .uni-input[data-v-0b7771b4]{line-height:%?88?%}.input .right-input[data-v-0b7771b4]{line-height:%?88?%}',""]),i.exports=e}}]);