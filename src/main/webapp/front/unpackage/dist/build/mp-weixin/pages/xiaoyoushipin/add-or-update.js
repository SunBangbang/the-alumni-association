(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/xiaoyoushipin/add-or-update"],{"04cc":function(e,n,i){"use strict";(function(e){i("8a11");r(i("66fd"));var n=r(i("f215"));function r(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,i("543d")["createPage"])},"1d34":function(e,n,i){"use strict";i.r(n);var r=i("719e"),t=i.n(r);for(var u in r)"default"!==u&&function(e){i.d(n,e,(function(){return r[e]}))}(u);n["default"]=t.a},4688:function(e,n,i){"use strict";i.d(n,"b",(function(){return t})),i.d(n,"c",(function(){return u})),i.d(n,"a",(function(){return r}));var r={wPicker:function(){return Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(i.bind(null,"7188"))}},t=function(){var e=this,n=e.$createElement;e._self._c},u=[]},6630:function(e,n,i){},"719e":function(e,n,i){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t(i("a34a"));function t(e){return e&&e.__esModule?e:{default:e}}function u(e,n,i,r,t,u,a){try{var o=e[u](a),c=o.value}catch(s){return void i(s)}o.done?n(c):Promise.resolve(c).then(r,t)}function a(e){return function(){var n=this,i=arguments;return new Promise((function(r,t){var a=e.apply(n,i);function o(e){u(a,r,t,o,c,"next",e)}function c(e){u(a,r,t,o,c,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(function(){return resolve(i("7188"))}.bind(null,i)).catch(i.oe)},c={data:function(){return{ruleForm:{biaoti:"",shipinfenlei:"",shipin:"",shipinfengmian:"",xiaoyouzhanghao:"",xiaoyouxingming:"",fabushijian:"",shipinjianjie:"",thumbsupnum:"",crazilynum:"",clicktime:"",clicknum:"",userid:""},shipinfenleiOptions:[],shipinfenleiIndex:0,user:{},ro:{biaoti:!1,shipinfenlei:!1,shipin:!1,shipinfengmian:!1,xiaoyouzhanghao:!1,xiaoyouxingming:!1,fabushijian:!1,shipinjianjie:!1,thumbsupnum:!1,crazilynum:!1,clicktime:!1,clicknum:!1,userid:!1}}},components:{wPicker:o},computed:{},onLoad:function(n){var i=this;return a(r.default.mark((function t(){var u,a,o,c;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return u=e.getStorageSync("nowTable"),t.next=3,i.$api.session(u);case 3:return a=t.sent,i.user=a.data,i.ruleForm.xiaoyouzhanghao=i.user.xiaoyouzhanghao,i.ruleForm.xiaoyouxingming=i.user.xiaoyouxingming,t.next=9,i.$api.option("shipinfenlei","shipinfenlei",{});case 9:if(a=t.sent,i.shipinfenleiOptions=a.data,i.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(i.ruleForm.refid=n.refid,i.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){t.next=19;break}return i.ruleForm.id=n.id,t.next=17,i.$api.info("xiaoyoushipin",i.ruleForm.id);case 17:a=t.sent,i.ruleForm=a.data;case 19:if(!n.cross){t.next=78;break}o=e.getStorageSync("crossObj"),t.t0=r.default.keys(o);case 22:if((t.t1=t.t0()).done){t.next=78;break}if(c=t.t1.value,"biaoti"!=c){t.next=28;break}return i.ruleForm.biaoti=o[c],i.ro.biaoti=!0,t.abrupt("continue",22);case 28:if("shipinfenlei"!=c){t.next=32;break}return i.ruleForm.shipinfenlei=o[c],i.ro.shipinfenlei=!0,t.abrupt("continue",22);case 32:if("shipin"!=c){t.next=36;break}return i.ruleForm.shipin=o[c],i.ro.shipin=!0,t.abrupt("continue",22);case 36:if("shipinfengmian"!=c){t.next=40;break}return i.ruleForm.shipinfengmian=o[c],i.ro.shipinfengmian=!0,t.abrupt("continue",22);case 40:if("xiaoyouzhanghao"!=c){t.next=44;break}return i.ruleForm.xiaoyouzhanghao=o[c],i.ro.xiaoyouzhanghao=!0,t.abrupt("continue",22);case 44:if("xiaoyouxingming"!=c){t.next=48;break}return i.ruleForm.xiaoyouxingming=o[c],i.ro.xiaoyouxingming=!0,t.abrupt("continue",22);case 48:if("fabushijian"!=c){t.next=52;break}return i.ruleForm.fabushijian=o[c],i.ro.fabushijian=!0,t.abrupt("continue",22);case 52:if("shipinjianjie"!=c){t.next=56;break}return i.ruleForm.shipinjianjie=o[c],i.ro.shipinjianjie=!0,t.abrupt("continue",22);case 56:if("thumbsupnum"!=c){t.next=60;break}return i.ruleForm.thumbsupnum=o[c],i.ro.thumbsupnum=!0,t.abrupt("continue",22);case 60:if("crazilynum"!=c){t.next=64;break}return i.ruleForm.crazilynum=o[c],i.ro.crazilynum=!0,t.abrupt("continue",22);case 64:if("clicktime"!=c){t.next=68;break}return i.ruleForm.clicktime=o[c],i.ro.clicktime=!0,t.abrupt("continue",22);case 68:if("clicknum"!=c){t.next=72;break}return i.ruleForm.clicknum=o[c],i.ro.clicknum=!0,t.abrupt("continue",22);case 72:if("userid"!=c){t.next=76;break}return i.ruleForm.userid=o[c],i.ro.userid=!0,t.abrupt("continue",22);case 76:t.next=22;break;case 78:i.styleChange();case 79:case"end":return t.stop()}}),t)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},fabushijianConfirm:function(e){console.log(e),this.ruleForm.fabushijian=e.result,this.$forceUpdate()},clicktimeConfirm:function(e){console.log(e),this.ruleForm.clicktime=e.result,this.$forceUpdate()},shipinfenleiChange:function(e){this.shipinfenleiIndex=e.target.value,this.ruleForm.shipinfenlei=this.shipinfenleiOptions[this.shipinfenleiIndex]},shipinTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.shipin=e.$base.url+"upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},shipinfengmianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.shipinfengmian=e.$base.url+"upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=this;return a(r.default.mark((function n(){return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!e.ruleForm.thumbsupnum||e.$validate.isIntNumer(e.ruleForm.thumbsupnum)){n.next=3;break}return e.$utils.msg("赞应输入整数"),n.abrupt("return");case 3:if(!e.ruleForm.crazilynum||e.$validate.isIntNumer(e.ruleForm.crazilynum)){n.next=6;break}return e.$utils.msg("踩应输入整数"),n.abrupt("return");case 6:if(!e.ruleForm.clicknum||e.$validate.isIntNumer(e.ruleForm.clicknum)){n.next=9;break}return e.$utils.msg("点击次数应输入整数"),n.abrupt("return");case 9:if(e.ruleForm.userid){n.next=12;break}return e.$utils.msg("用户id不能为空"),n.abrupt("return");case 12:if(!e.ruleForm.id){n.next=17;break}return n.next=15,e.$api.update("xiaoyoushipin",e.ruleForm);case 15:n.next=19;break;case 17:return n.next=19,e.$api.add("xiaoyoushipin",e.ruleForm);case 19:e.$utils.msgBack("提交成功");case 20:case"end":return n.stop()}}),n)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,i=n.getFullYear(),r=n.getMonth()+1,t=n.getDate();return"start"===e?i-=60:"end"===e&&(i+=2),r=r>9?r:"0"+r,t=t>9?t:"0"+t,"".concat(i,"-").concat(r,"-").concat(t)},toggleTab:function(e){this.$refs[e].show()}}};n.default=c}).call(this,i("543d")["default"])},9515:function(e,n,i){"use strict";var r=i("6630"),t=i.n(r);t.a},f215:function(e,n,i){"use strict";i.r(n);var r=i("4688"),t=i("1d34");for(var u in t)"default"!==u&&function(e){i.d(n,e,(function(){return t[e]}))}(u);i("9515");var a,o=i("f0c5"),c=Object(o["a"])(t["default"],r["b"],r["c"],!1,null,"755d9d3b",null,!1,r["a"],a);n["default"]=c.exports}},[["04cc","common/runtime","common/vendor"]]]);