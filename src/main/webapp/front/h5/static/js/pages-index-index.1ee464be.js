(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"0d9b":function(i,t,e){"use strict";var a=e("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,e("ac4d"),e("8a81"),e("ac6a"),e("96cf");var n=a(e("3b8d"));e("651d");var o=a(e("b704")),r={components:{uniIcons:o.default},data:function(){return{autoplaySwiper:!1,intervalSwiper:5e3,swiperList:[],xiaoyoushipinlist:[],homexiaoyoufengcailist:[],homexiaoyoushipinlist:[],news:[]}},onShow:function(){var i=(0,n.default)(regeneratorRuntime.mark((function i(){var t,e,a,n,o,r,s,l;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return t=[],i.next=3,this.$api.page("config",{page:1,limit:5});case 3:for(e=i.sent,a=!0,n=!1,o=void 0,i.prev=7,r=e.data.list[Symbol.iterator]();!(a=(s=r.next()).done);a=!0)l=s.value,l.name.indexOf("picture")>=0&&l.value&&""!=l.value&&null!=l.value&&t.push({img:l.value});i.next=15;break;case 11:i.prev=11,i.t0=i["catch"](7),n=!0,o=i.t0;case 15:i.prev=15,i.prev=16,a||null==r.return||r.return();case 18:if(i.prev=18,!n){i.next=21;break}throw o;case 21:return i.finish(18);case 22:return i.finish(15);case 23:return t&&(this.swiperList=t),i.next=26,this.$api.recommend("xiaoyoushipin",1,6);case 26:return e=i.sent,this.xiaoyoushipinlist=e.data.list,i.next=30,this.$api.list("xiaoyoufengcai",{page:1,limit:4});case 30:return e=i.sent,this.homexiaoyoufengcailist=e.data.list,i.next=34,this.$api.list("xiaoyoushipin",{page:1,limit:4});case 34:e=i.sent,this.homexiaoyoushipinlist=e.data.list;case 36:case"end":return i.stop()}}),i,this,[[7,11,15,23],[16,,18,22]])})));function t(){return i.apply(this,arguments)}return t}(),methods:{onSwiperTap:function(i){},onNewsDetailTap:function(i){this.$utils.jump("../news-detail/news-detail?id=".concat(i))},onDetailTap:function(i,t){this.$utils.jump("../".concat(i,"/detail?id=").concat(t))},onPageTap:function(i){uni.navigateTo({url:"../".concat(i,"/list"),fail:function(){uni.switchTab({url:"../".concat(i,"/list")})}})}}};t.default=r},"1e19":function(i,t,e){"use strict";var a=e("536f"),n=e.n(a);n.a},"47d9":function(i,t,e){"use strict";var a,n=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("v-uni-view",{staticClass:"uni-padding-wrap"},[e("v-uni-view",{staticClass:"header"},[e("v-uni-view",{staticClass:"headerb"},[e("v-uni-swiper",{staticClass:"swiper",attrs:{"indicator-dots":!0,autoplay:i.autoplaySwiper,circular:!0,"indicator-active-color":"rgba(45, 234, 234, 1)","indicator-color":"rgba(0, 0, 0, .3)",duration:1e3,interval:i.intervalSwiper,vertical:!0}},i._l(i.swiperList,(function(t,a){return e("v-uni-swiper-item",{key:a,on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i.onSwiperTap(t)}}},[e("v-uni-image",{attrs:{mode:"aspectFill",src:t.img}})],1)})),1)],1)],1),e("v-uni-view",{staticClass:"pl15 col3",staticStyle:{padding:"0 12px","box-sizing":"border-box"},style:{backgroundColor:"rgba(74, 209, 242, 1)",borderColor:"rgba(132, 122, 122, 1)",color:"rgba(255, 255, 255, 0.64)",borderRadius:0,textAlign:"center",borderWidth:"2rpx",fontSize:"32rpx",lineHeight:"72rpx",borderStyle:"solid"}},[i._v("校友视频推荐")]),e("v-uni-view",{staticClass:"uni-product-list",class:"active",style:{borderRadius:0,backgroundColor:"rgba(135, 128, 128, 0.34)"}},i._l(i.xiaoyoushipinlist,(function(t,a){return e("v-uni-view",{key:a,staticClass:"uni-product",style:{borderRadius:"12rpx",backgroundColor:"#fff"},on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i.onDetailTap("xiaoyoushipin",t.id)}}},[e("v-uni-view",{staticClass:"uni-product-title",style:{fontSize:"28rpx",lineHeight:"56rpx",color:"#333",textAlign:"center"}},[i._v(i._s(t.biaoti))]),e("v-uni-view",{staticClass:"image-view",style:{borderRadius:"20rpx",height:"320rpx"}},[e("v-uni-image",{staticClass:"uni-product-image",style:{borderRadius:"20rpx",height:"320rpx"},attrs:{mode:"aspectFill",src:t.shipinfengmian?t.shipinfengmian.split(",")[0]:""}})],1)],1)})),1),i._e(),e("v-uni-view",{staticClass:"pl15 col3 header-title",staticStyle:{padding:"0 12px","box-sizing":"border-box"},style:{backgroundColor:"rgba(74, 209, 242, 1)",borderColor:"rgba(55, 186, 177, 0.5)",color:"rgba(255, 255, 255, 1)",borderRadius:0,borderWidth:"2rpx",fontSize:"32rpx",lineHeight:"72rpx",borderStyle:"solid"}},[e("v-uni-view",{staticClass:"left",style:{fontSize:"32rpx",color:"rgba(255, 255, 255, 1)"}},[i._v("校友风采")]),e("v-uni-view",{staticClass:"right-content",style:{fontSize:"32rpx",color:"rgba(255, 255, 255, 1)"},on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.onPageTap("xiaoyoufengcai")}}},[i._v("查看更多")])],1),e("v-uni-view",{staticClass:"uni-product-list",class:"",style:{borderRadius:0,backgroundColor:"rgba(135, 128, 128, 0.34)"}},i._l(i.homexiaoyoufengcailist,(function(t,a){return e("v-uni-view",{key:a,staticClass:"uni-product",style:{borderRadius:"12rpx",backgroundColor:"#fff"},on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i.onDetailTap("xiaoyoufengcai",t.id)}}},[e("v-uni-view",{staticClass:"uni-product-title",style:{fontSize:"28rpx",lineHeight:"56rpx",color:"#333",textAlign:"center"}},[i._v(i._s(t.xiaoyouxingming))]),e("v-uni-view",{staticClass:"image-view",style:{borderRadius:"20rpx",height:"320rpx"}},[e("v-uni-image",{staticClass:"uni-product-image",style:{borderRadius:"20rpx",height:"320rpx"},attrs:{mode:"aspectFill",src:t.touxiang?t.touxiang.split(",")[0]:""}})],1)],1)})),1),i._e(),e("v-uni-view",{staticClass:"pl15 col3 header-title",staticStyle:{padding:"0 12px","box-sizing":"border-box"},style:{backgroundColor:"rgba(74, 209, 242, 1)",borderColor:"rgba(55, 186, 177, 0.5)",color:"rgba(255, 255, 255, 1)",borderRadius:0,borderWidth:"2rpx",fontSize:"32rpx",lineHeight:"72rpx",borderStyle:"solid"}},[e("v-uni-view",{staticClass:"left",style:{fontSize:"32rpx",color:"rgba(255, 255, 255, 1)"}},[i._v("校友视频")]),e("v-uni-view",{staticClass:"right-content",style:{fontSize:"32rpx",color:"rgba(255, 255, 255, 1)"},on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.onPageTap("xiaoyoushipin")}}},[i._v("查看更多")])],1),e("v-uni-view",{staticClass:"uni-product-list",class:"",style:{borderRadius:0,backgroundColor:"rgba(135, 128, 128, 0.34)"}},i._l(i.homexiaoyoushipinlist,(function(t,a){return e("v-uni-view",{key:a,staticClass:"uni-product",style:{borderRadius:"12rpx",backgroundColor:"#fff"},on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i.onDetailTap("xiaoyoushipin",t.id)}}},[e("v-uni-view",{staticClass:"uni-product-title",style:{fontSize:"28rpx",lineHeight:"56rpx",color:"#333",textAlign:"center"}},[i._v(i._s(t.biaoti))]),e("v-uni-view",{staticClass:"image-view",style:{borderRadius:"20rpx",height:"320rpx"}},[e("v-uni-image",{staticClass:"uni-product-image",style:{borderRadius:"20rpx",height:"320rpx"},attrs:{mode:"aspectFill",src:t.shipinfengmian?t.shipinfengmian.split(",")[0]:""}})],1)],1)})),1),i._e()],1)},o=[];e.d(t,"b",(function(){return n})),e.d(t,"c",(function(){return o})),e.d(t,"a",(function(){return a}))},"536f":function(i,t,e){var a=e("c738");"string"===typeof a&&(a=[[i.i,a,""]]),a.locals&&(i.exports=a.locals);var n=e("4f06").default;n("6fce15a0",a,!0,{sourceMap:!1,shadowMode:!1})},8069:function(i,t,e){"use strict";e.r(t);var a=e("0d9b"),n=e.n(a);for(var o in a)"default"!==o&&function(i){e.d(t,i,(function(){return a[i]}))}(o);t["default"]=n.a},c738:function(i,t,e){var a=e("24fb");t=a(!1),t.push([i.i,'uni-page-body[data-v-6365332c]{background:#f8f8f8}.uni-padding-wrap[data-v-6365332c]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-attachment:fixed;background-size:cover;background-position:50%}uni-view[data-v-6365332c]{font-family:"\\5FAE\\8F6F\\96C5\\9ED1";font-size:%?30?%}.header[data-v-6365332c]{background:#eee;padding:0 0 %?300?% 0;margin-bottom:%?20?%;position:relative}.ssbox[data-v-6365332c]{background:hsla(0,0%,100%,.35);width:%?530?%;border-radius:%?60?%;padding:%?10?% %?15?%;box-sizing:border-box}.ss_input[data-v-6365332c]{border:none;width:%?450?%;font-size:%?30?%;color:#fff;background:none;height:%?45?%;line-break:%?45?%}.headerb[data-v-6365332c]{position:absolute;left:0;width:100%;box-sizing:border-box}.headerb uni-image[data-v-6365332c]{width:100%;position:relative;z-index:10}.headerb .swiper[data-v-6365332c]{height:%?300?%}.swiper[data-v-6365332c] .uni-swiper-dot{width:%?16?%;height:%?16?%;broder-radius:50%}.notice[data-v-6365332c]{position:relative;z-index:5;padding:0 %?50?%}.noticem[data-v-6365332c]{background:#fff;padding:%?55?% %?30?% %?15?%;border-radius:%?10?%;margin-top:%?-45?%}.noticer[data-v-6365332c]{width:%?480?%;height:%?50?%}.noticer .swiper-item[data-v-6365332c]{white-space:nowrap;text-overflow:ellipsis;overflow:hidden;height:%?50?%;line-height:%?50?%;font-size:%?24?%}.list[data-v-6365332c]{padding:%?20?% %?20?% %?20?%}.listm[data-v-6365332c]{background:#fff;border-radius:%?15?%;box-shadow:0 0 %?2?% rgba(0,0,0,.1);margin-bottom:%?20?%;padding:%?30?%}.listmpic[data-v-6365332c]{border-radius:%?10?%;width:%?166?%;margin-right:%?20?%}.listmr[data-v-6365332c]{\n\t/* width: 460upx; */display:inline-block;-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}\n\n\n\n\n\n\n\n\n\n.uni-product-list[data-v-6365332c]{display:-webkit-box;display:-webkit-flex;display:flex;width:100%;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;margin-top:0;padding:0 %?14?%;box-sizing:border-box}.uni-product-list.active[data-v-6365332c]{padding:0 %?12?%}.uni-product[data-v-6365332c]{padding:%?10?%;margin:%?10?%;width:%?341?%;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;background:#fff}.uni-product-list.active .uni-product[data-v-6365332c]{width:%?222?%}.image-view[data-v-6365332c]{height:%?321?%;width:%?321?%;\n\t/* margin: 12upx 0; */display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;overflow:hidden}.uni-product-list.active .image-view[data-v-6365332c]{height:%?202?%;width:%?202?%;overflow:hidden}.uni-product-image[data-v-6365332c]{height:100%;width:100%;margin:0 auto;display:block}.uni-product-title[data-v-6365332c]{width:100%;word-break:break-all;display:-webkit-box;overflow:hidden;line-height:1.5;text-overflow:ellipsis;-webkit-box-orient:vertical;-webkit-line-clamp:1}.uni-product-price[data-v-6365332c]{width:100%;margin-top:%?10?%;font-size:%?28?%;line-height:1.5;position:relative}.uni-product-price-original[data-v-6365332c]{color:#e80080}.uni-product-price-favour[data-v-6365332c]{color:#888;text-decoration:line-through;margin-left:%?10?%}.uni-product-tip[data-v-6365332c]{position:absolute;right:%?10?%;background-color:#f33;color:#fff;padding:0 %?10?%;border-radius:%?5?%}.header-title[data-v-6365332c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;text-align:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:0 %?40?%}body.?%PAGE?%[data-v-6365332c]{background:#f8f8f8}',""]),i.exports=t},f75a:function(i,t,e){"use strict";e.r(t);var a=e("47d9"),n=e("8069");for(var o in n)"default"!==o&&function(i){e.d(t,i,(function(){return n[i]}))}(o);e("1e19");var r,s=e("f0c5"),l=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"6365332c",null,!1,a["a"],r);t["default"]=l.exports}}]);