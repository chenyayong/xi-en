(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/magic/magic-swiper/index"],{"48b1":function(t,n,e){},"9c07":function(t,n,e){"use strict";e.r(n);var a=e("9feb"),r=e.n(a);for(var c in a)"default"!==c&&function(t){e.d(n,t,(function(){return a[t]}))}(c);n["default"]=r.a},"9feb":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={name:"MagicSwiper",data:function(){return{current:0}},props:{componentData:{type:Object,default:function(){}}},computed:{padding:function(){var t;if(this.componentData&&this.componentData.data){var n=this.$util.px2rpx(this.componentData.data.padding);t=n+"rpx"}return t}},methods:{onSwiperChange:function(t){this.current=t.detail.current}}};n.default=a},bdec:function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return c})),e.d(n,"a",(function(){return a}));var r=function(){var t=this,n=t.$createElement;t._self._c},c=[]},e240:function(t,n,e){"use strict";e.r(n);var a=e("bdec"),r=e("9c07");for(var c in r)"default"!==c&&function(t){e.d(n,t,(function(){return r[t]}))}(c);e("f8af");var u,i=e("f0c5"),o=Object(i["a"])(r["default"],a["b"],a["c"],!1,null,"271f06d3",null,!1,a["a"],u);n["default"]=o.exports},f8af:function(t,n,e){"use strict";var a=e("48b1"),r=e.n(a);r.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/magic/magic-swiper/index-create-component',
    {
        'components/magic/magic-swiper/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("e240"))
        })
    },
    [['components/magic/magic-swiper/index-create-component']]
]);
