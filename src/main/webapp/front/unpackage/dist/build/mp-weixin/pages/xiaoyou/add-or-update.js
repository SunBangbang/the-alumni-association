(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/xiaoyou/add-or-update"],{"25f0":function(n,e,t){"use strict";var i=t("99ff"),r=t.n(i);r.a},"7ff2":function(n,e,t){"use strict";t.r(e);var i=t("e961"),r=t.n(i);for(var a in i)"default"!==a&&function(n){t.d(e,n,(function(){return i[n]}))}(a);e["default"]=r.a},"99ff":function(n,e,t){},abe1:function(n,e,t){"use strict";var i;t.d(e,"b",(function(){return r})),t.d(e,"c",(function(){return a})),t.d(e,"a",(function(){return i}));var r=function(){var n=this,e=n.$createElement;n._self._c},a=[]},cd80:function(n,e,t){"use strict";(function(n){t("8a11");i(t("66fd"));var e=i(t("dcb7"));function i(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("543d")["createPage"])},dcb7:function(n,e,t){"use strict";t.r(e);var i=t("abe1"),r=t("7ff2");for(var a in r)"default"!==a&&function(n){t.d(e,n,(function(){return r[n]}))}(a);t("25f0");var u,o=t("f0c5"),c=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,"02e9f6b4",null,!1,i["a"],u);e["default"]=c.exports},e961:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(t("a34a"));function r(n){return n&&n.__esModule?n:{default:n}}function a(n,e,t,i,r,a,u){try{var o=n[a](u),c=o.value}catch(s){return void t(s)}o.done?e(c):Promise.resolve(c).then(i,r)}function u(n){return function(){var e=this,t=arguments;return new Promise((function(i,r){var u=n.apply(e,t);function o(n){a(u,i,r,o,c,"next",n)}function c(n){a(u,i,r,o,c,"throw",n)}o(void 0)}))}}var o=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("7188"))}.bind(null,t)).catch(t.oe)},c={data:function(){return{ruleForm:{xiaoyouzhanghao:"",mima:"",xiaoyouxingming:"",xingbie:"",nianling:"",touxiang:"",lianxifangshi:""},xingbieOptions:[],xingbieIndex:0,user:{},ro:{xiaoyouzhanghao:!1,mima:!1,xiaoyouxingming:!1,xingbie:!1,nianling:!1,touxiang:!1,lianxifangshi:!1}}},components:{wPicker:o},computed:{},onLoad:function(e){var t=this;return u(i.default.mark((function r(){var a,u,o,c;return i.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=n.getStorageSync("nowTable"),r.next=3,t.$api.session(a);case 3:if(u=r.sent,t.user=u.data,t.xingbieOptions="男,女".split(","),t.ruleForm.userid=n.getStorageSync("userid"),e.refid&&(t.ruleForm.refid=e.refid,t.ruleForm.nickname=n.getStorageSync("nickname")),!e.id){r.next=14;break}return t.ruleForm.id=e.id,r.next=12,t.$api.info("xiaoyou",t.ruleForm.id);case 12:u=r.sent,t.ruleForm=u.data;case 14:if(!e.cross){r.next=49;break}o=n.getStorageSync("crossObj"),r.t0=i.default.keys(o);case 17:if((r.t1=r.t0()).done){r.next=49;break}if(c=r.t1.value,"xiaoyouzhanghao"!=c){r.next=23;break}return t.ruleForm.xiaoyouzhanghao=o[c],t.ro.xiaoyouzhanghao=!0,r.abrupt("continue",17);case 23:if("mima"!=c){r.next=27;break}return t.ruleForm.mima=o[c],t.ro.mima=!0,r.abrupt("continue",17);case 27:if("xiaoyouxingming"!=c){r.next=31;break}return t.ruleForm.xiaoyouxingming=o[c],t.ro.xiaoyouxingming=!0,r.abrupt("continue",17);case 31:if("xingbie"!=c){r.next=35;break}return t.ruleForm.xingbie=o[c],t.ro.xingbie=!0,r.abrupt("continue",17);case 35:if("nianling"!=c){r.next=39;break}return t.ruleForm.nianling=o[c],t.ro.nianling=!0,r.abrupt("continue",17);case 39:if("touxiang"!=c){r.next=43;break}return t.ruleForm.touxiang=o[c],t.ro.touxiang=!0,r.abrupt("continue",17);case 43:if("lianxifangshi"!=c){r.next=47;break}return t.ruleForm.lianxifangshi=o[c],t.ro.lianxifangshi=!0,r.abrupt("continue",17);case 47:r.next=17;break;case 49:t.styleChange();case 50:case"end":return r.stop()}}),r)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},xingbieChange:function(n){this.xingbieIndex=n.target.value,this.ruleForm.xingbie=this.xingbieOptions[this.xingbieIndex]},touxiangTap:function(){var n=this;this.$api.upload((function(e){n.ruleForm.touxiang=n.$base.url+"upload/"+e.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return u(i.default.mark((function e(){return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n.ruleForm.xiaoyouzhanghao){e.next=3;break}return n.$utils.msg("校友账号不能为空"),e.abrupt("return");case 3:if(n.ruleForm.mima){e.next=6;break}return n.$utils.msg("密码不能为空"),e.abrupt("return");case 6:if(!n.ruleForm.nianling||n.$validate.isIntNumer(n.ruleForm.nianling)){e.next=9;break}return n.$utils.msg("年龄应输入整数"),e.abrupt("return");case 9:if(!n.ruleForm.id){e.next=14;break}return e.next=12,n.$api.update("xiaoyou",n.ruleForm);case 12:e.next=16;break;case 14:return e.next=16,n.$api.add("xiaoyou",n.ruleForm);case 16:n.$utils.msgBack("提交成功");case 17:case"end":return e.stop()}}),e)})))()},optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var e=new Date,t=e.getFullYear(),i=e.getMonth()+1,r=e.getDate();return"start"===n?t-=60:"end"===n&&(t+=2),i=i>9?i:"0"+i,r=r>9?r:"0"+r,"".concat(t,"-").concat(i,"-").concat(r)},toggleTab:function(n){this.$refs[n].show()}}};e.default=c}).call(this,t("543d")["default"])}},[["cd80","common/runtime","common/vendor"]]]);