(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/magic/magic-button-group/index"],{"1ad2":function(t,n,a){"use strict";var o=a("8a9b"),i=a.n(o);i.a},"1f04":function(t,n,a){"use strict";a.r(n);var o=a("f372"),i=a("f9f7");for(var e in i)"default"!==e&&function(t){a.d(n,t,(function(){return i[t]}))}(e);a("1ad2");var r,u=a("f0c5"),c=Object(u["a"])(i["default"],o["b"],o["c"],!1,null,"19e6def9",null,!1,o["a"],r);n["default"]=c.exports},"8a9b":function(t,n,a){},e1af:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={name:"MagicButtonGroup",props:{componentData:{type:Object,default:function(){}}},computed:{paddingTop:function(){var t;if(this.componentData&&this.componentData.data){var n=this.$util.px2rpx(this.componentData.data.padding_top);t=n+"rpx"}return t},paddingBottom:function(){var t;if(this.componentData&&this.componentData.data){var n=this.$util.px2rpx(this.componentData.data.padding_bottom);t=n+"rpx"}return t},background:function(){var t;return this.componentData&&this.componentData.data&&(t=this.componentData.data.background),t},swiperSlides:function(){var t=[];if(this.componentData&&this.componentData.data){var n=this.componentData.data.items,a=n.length,o=this.componentData.data.row_swiper,i=this.componentData.data.row_button_count,e=o*i,r=1;if(this.componentData.data.swiper){r=Math.ceil(a/e),console.log(r,a,e);for(var u=0;u<r;u++){var c=u*e,p=(u+1)*e,s=n.slice(c,p);t.push(s)}}else t=[n];console.log("swiperSlides",t)}return t},imgSize:function(){var t;return this.componentData&&this.componentData.data&&(t=this.$util.px2rpx(this.componentData.data.button_size)+"rpx"),t},imgRound:function(){var t;return this.componentData&&this.componentData.data&&(t=this.$util.px2rpx(this.componentData.data.button_round)+"rpx"),t},textColor:function(){var t;return this.componentData&&this.componentData.data&&(t=this.componentData.data.text_color),t},textSize:function(){var t;return this.componentData&&this.componentData.data&&(t=this.$util.px2rpx(this.componentData.data.text_size)+"rpx"),t},swiperHeight:function(){var t;if(this.componentData&&this.componentData.data){var n=this.componentData.data,a=n.padding_top,o=n.padding_bottom,i=n.button_size,e=n.text_size,r=Math.ceil(this.swiperSlides[0].length/n.row_button_count);t=(a+o+i+e+10)*r,t=this.$util.px2rpx(t)+"rpx"}return t}}};n.default=o},f372:function(t,n,a){"use strict";a.d(n,"b",(function(){return i})),a.d(n,"c",(function(){return e})),a.d(n,"a",(function(){return o}));var o={uniGrid:function(){return a.e("uni_modules/uni-grid/components/uni-grid/uni-grid").then(a.bind(null,"1f09"))},uniGridItem:function(){return a.e("uni_modules/uni-grid/components/uni-grid-item/uni-grid-item").then(a.bind(null,"61d4"))}},i=function(){var t=this,n=t.$createElement;t._self._c},e=[]},f9f7:function(t,n,a){"use strict";a.r(n);var o=a("e1af"),i=a.n(o);for(var e in o)"default"!==e&&function(t){a.d(n,t,(function(){return o[t]}))}(e);n["default"]=i.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/magic/magic-button-group/index-create-component',
    {
        'components/magic/magic-button-group/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("1f04"))
        })
    },
    [['components/magic/magic-button-group/index-create-component']]
]);