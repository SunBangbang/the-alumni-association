(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-xiaoyou-add-or-update"],{"1e8d":function(t,e,r){"use strict";r.r(e);var i=r("cfc0"),n=r("e505");for(var o in n)"default"!==o&&function(t){r.d(e,t,(function(){return n[t]}))}(o);r("352f");var a,u=r("f0c5"),l=Object(u["a"])(n["default"],i["b"],i["c"],!1,null,"3b43fb9f",null,!1,i["a"],a);e["default"]=l.exports},"352f":function(t,e,r){"use strict";var i=r("d877"),n=r.n(i);n.a},"7d08":function(t,e,r){"use strict";var i=r("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r("ac6a"),r("28a5"),r("96cf");var n=i(r("3b8d")),o=i(r("e2b1")),a={data:function(){return{ruleForm:{xiaoyouzhanghao:"",mima:"",xiaoyouxingming:"",xingbie:"",nianling:"",touxiang:"",lianxifangshi:""},xingbieOptions:[],xingbieIndex:0,user:{},ro:{xiaoyouzhanghao:!1,mima:!1,xiaoyouxingming:!1,xingbie:!1,nianling:!1,touxiang:!1,lianxifangshi:!1}}},components:{wPicker:o.default},computed:{},onLoad:function(){var t=(0,n.default)(regeneratorRuntime.mark((function t(e){var r,i,n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=uni.getStorageSync("nowTable"),t.next=3,this.$api.session(r);case 3:if(i=t.sent,this.user=i.data,this.xingbieOptions="男,女".split(","),this.ruleForm.userid=uni.getStorageSync("userid"),e.refid&&(this.ruleForm.refid=e.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!e.id){t.next=14;break}return this.ruleForm.id=e.id,t.next=12,this.$api.info("xiaoyou",this.ruleForm.id);case 12:i=t.sent,this.ruleForm=i.data;case 14:if(!e.cross){t.next=49;break}n=uni.getStorageSync("crossObj"),t.t0=regeneratorRuntime.keys(n);case 17:if((t.t1=t.t0()).done){t.next=49;break}if(o=t.t1.value,"xiaoyouzhanghao"!=o){t.next=23;break}return this.ruleForm.xiaoyouzhanghao=n[o],this.ro.xiaoyouzhanghao=!0,t.abrupt("continue",17);case 23:if("mima"!=o){t.next=27;break}return this.ruleForm.mima=n[o],this.ro.mima=!0,t.abrupt("continue",17);case 27:if("xiaoyouxingming"!=o){t.next=31;break}return this.ruleForm.xiaoyouxingming=n[o],this.ro.xiaoyouxingming=!0,t.abrupt("continue",17);case 31:if("xingbie"!=o){t.next=35;break}return this.ruleForm.xingbie=n[o],this.ro.xingbie=!0,t.abrupt("continue",17);case 35:if("nianling"!=o){t.next=39;break}return this.ruleForm.nianling=n[o],this.ro.nianling=!0,t.abrupt("continue",17);case 39:if("touxiang"!=o){t.next=43;break}return this.ruleForm.touxiang=n[o],this.ro.touxiang=!0,t.abrupt("continue",17);case 43:if("lianxifangshi"!=o){t.next=47;break}return this.ruleForm.lianxifangshi=n[o],this.ro.lianxifangshi=!0,t.abrupt("continue",17);case 47:t.next=17;break;case 49:this.styleChange();case 50:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),methods:{styleChange:function(){this.$nextTick((function(){}))},xingbieChange:function(t){this.xingbieIndex=t.target.value,this.ruleForm.xingbie=this.xingbieOptions[this.xingbieIndex]},touxiangTap:function(){var t=this;this.$api.upload((function(e){t.ruleForm.touxiang=t.$base.url+"upload/"+e.file,t.$forceUpdate(),t.$nextTick((function(){t.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var t=(0,n.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.ruleForm.xiaoyouzhanghao){t.next=3;break}return this.$utils.msg("校友账号不能为空"),t.abrupt("return");case 3:if(this.ruleForm.mima){t.next=6;break}return this.$utils.msg("密码不能为空"),t.abrupt("return");case 6:if(!this.ruleForm.nianling||this.$validate.isIntNumer(this.ruleForm.nianling)){t.next=9;break}return this.$utils.msg("年龄应输入整数"),t.abrupt("return");case 9:if(!this.ruleForm.id){t.next=14;break}return t.next=12,this.$api.update("xiaoyou",this.ruleForm);case 12:t.next=16;break;case 14:return t.next=16,this.$api.add("xiaoyou",this.ruleForm);case 16:this.$utils.msgBack("提交成功");case 17:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),optionsChange:function(t){this.index=t.target.value},bindDateChange:function(t){this.date=t.target.value},getDate:function(t){var e=new Date,r=e.getFullYear(),i=e.getMonth()+1,n=e.getDate();return"start"===t?r-=60:"end"===t&&(r+=2),i=i>9?i:"0"+i,n=n>9?n:"0"+n,"".concat(r,"-").concat(i,"-").concat(n)},toggleTab:function(t){this.$refs[t].show()}}};e.default=a},b855:function(t,e,r){var i=r("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-3b43fb9f]{padding:%?20?%}.content[data-v-3b43fb9f]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-attachment:fixed;background-size:cover;background-position:50%}uni-textarea[data-v-3b43fb9f]{border:%?1?% solid #eee;border-radius:%?20?%;padding:%?20?%}.title[data-v-3b43fb9f]{width:%?180?%}.avator[data-v-3b43fb9f]{width:%?150?%;height:%?60?%}.right-input[data-v-3b43fb9f]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left;padding:0 %?24?%}.cu-form-group.active[data-v-3b43fb9f]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.btn[data-v-3b43fb9f]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?20?% 0}.cu-form-group[data-v-3b43fb9f]{padding:0 %?24?%;background-color:initial;min-height:inherit}.cu-form-group + .cu-form-group[data-v-3b43fb9f]{border:0}.cu-form-group uni-input[data-v-3b43fb9f]{padding:0 %?30?%}.uni-input[data-v-3b43fb9f]{padding:0 %?30?%}.cu-form-group uni-textarea[data-v-3b43fb9f]{padding:%?30?%;margin:0}.cu-form-group uni-picker[data-v-3b43fb9f]::after{line-height:%?88?%}.select .uni-input[data-v-3b43fb9f]{line-height:%?88?%}.input .right-input[data-v-3b43fb9f]{line-height:%?88?%}',""]),t.exports=e},cfc0:function(t,e,r){"use strict";var i,n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-uni-view",{staticClass:"content"},[r("v-uni-form",{staticClass:"app-update-pv"},[r("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"#ccc",margin:"",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(41, 40, 40, 1)",textAlign:"left"}},[t._v("校友账号")]),r("v-uni-input",{style:{boxShadow:"0 0 16rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(40, 38, 38, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:t.ro.xiaoyouzhanghao,placeholder:"校友账号"},model:{value:t.ruleForm.xiaoyouzhanghao,callback:function(e){t.$set(t.ruleForm,"xiaoyouzhanghao",e)},expression:"ruleForm.xiaoyouzhanghao"}})],1),r("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"#ccc",margin:"",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(41, 40, 40, 1)",textAlign:"left"}},[t._v("密码")]),r("v-uni-input",{style:{boxShadow:"0 0 16rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(40, 38, 38, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:t.ro.mima,placeholder:"密码"},model:{value:t.ruleForm.mima,callback:function(e){t.$set(t.ruleForm,"mima",e)},expression:"ruleForm.mima"}})],1),r("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"#ccc",margin:"",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(41, 40, 40, 1)",textAlign:"left"}},[t._v("校友姓名")]),r("v-uni-input",{style:{boxShadow:"0 0 16rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(40, 38, 38, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:t.ro.xiaoyouxingming,placeholder:"校友姓名"},model:{value:t.ruleForm.xiaoyouxingming,callback:function(e){t.$set(t.ruleForm,"xiaoyouxingming",e)},expression:"ruleForm.xiaoyouxingming"}})],1),r("v-uni-view",{staticClass:"cu-form-group select",style:{boxShadow:"",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"rgba(252, 252, 252, 1)",margin:"",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(21, 20, 20, 1)",textAlign:"left"}},[t._v("性别")]),r("v-uni-picker",{attrs:{value:t.xingbieIndex,range:t.xingbieOptions},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.xingbieChange.apply(void 0,arguments)}}},[r("v-uni-view",{staticClass:"uni-input",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(20, 19, 19, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"}},[t._v(t._s(t.ruleForm.xingbie?t.ruleForm.xingbie:"请选择性别"))])],1)],1),r("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"#ccc",margin:"",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(41, 40, 40, 1)",textAlign:"left"}},[t._v("年龄")]),r("v-uni-input",{style:{boxShadow:"0 0 16rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(40, 38, 38, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:t.ro.nianling,placeholder:"年龄"},model:{value:t.ruleForm.nianling,callback:function(e){t.$set(t.ruleForm,"nianling",e)},expression:"ruleForm.nianling"}})],1),r("v-uni-view",{staticClass:"cu-form-group",class:"left"==t.left?"":"active",style:{boxShadow:"",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"#ccc",margin:"",borderWidth:"0",borderStyle:"solid",height:"108rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.touxiangTap.apply(void 0,arguments)}}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(23, 22, 22, 1)",textAlign:"left"}},[t._v("头像")]),r("v-uni-view",{staticClass:"right-input",staticStyle:{padding:"0"},style:{textAlign:"left"}},[t.ruleForm.touxiang?r("v-uni-image",{staticClass:"avator",style:{width:"88rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"100%",textAlign:"left",height:"88rpx"},attrs:{src:t.ruleForm.touxiang,mode:"aspectFill"}}):r("v-uni-image",{staticClass:"avator",style:{width:"88rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"100%",textAlign:"left",height:"88rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1)],1),r("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"#ccc",margin:"",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(41, 40, 40, 1)",textAlign:"left"}},[t._v("联系方式")]),r("v-uni-input",{style:{boxShadow:"0 0 16rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(40, 38, 38, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:t.ro.lianxifangshi,placeholder:"联系方式"},model:{value:t.ruleForm.lianxifangshi,callback:function(e){t.$set(t.ruleForm,"lianxifangshi",e)},expression:"ruleForm.lianxifangshi"}})],1),r("v-uni-view",{staticClass:"btn"},[r("v-uni-button",{staticClass:"bg-red",style:{boxShadow:"0 0 16rpx rgba(0,0,0,0) inset",backgroundColor:"#409EFF",borderColor:"#409EFF",borderRadius:"40rpx",color:"#fff",borderWidth:"1",width:"80%",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onSubmitTap.apply(void 0,arguments)}}},[t._v("提交")])],1)],1)],1)},o=[];r.d(e,"b",(function(){return n})),r.d(e,"c",(function(){return o})),r.d(e,"a",(function(){return i}))},d877:function(t,e,r){var i=r("b855");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=r("4f06").default;n("417e8636",i,!0,{sourceMap:!1,shadowMode:!1})},e505:function(t,e,r){"use strict";r.r(e);var i=r("7d08"),n=r.n(i);for(var o in i)"default"!==o&&function(t){r.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a}}]);