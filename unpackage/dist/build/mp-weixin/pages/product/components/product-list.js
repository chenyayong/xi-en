(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/product/components/product-list"],{7372:function(t,n,e){"use strict";var i=e("9b73"),r=e.n(i);r.a},7687:function(t,n,e){"use strict";e.r(n);var i=e("cff1"),r=e.n(i);for(var c in i)"default"!==c&&function(t){e.d(n,t,(function(){return i[t]}))}(c);n["default"]=r.a},"9b73":function(t,n,e){},ac3d:function(t,n,e){"use strict";e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return c})),e.d(n,"a",(function(){return i}));var i={mixPriceView:function(){return e.e("components/mix-price-view/mix-price-view").then(e.bind(null,"7cca"))}},r=function(){var t=this,n=t.$createElement;t._self._c},c=[]},c99e:function(t,n,e){"use strict";e.r(n);var i=e("ac3d"),r=e("7687");for(var c in r)"default"!==c&&function(t){e.d(n,t,(function(){return r[t]}))}(c);e("7372");var o,u=e("f0c5"),a=Object(u["a"])(r["default"],i["b"],i["c"],!1,null,"86854da8",null,!1,i["a"],o);n["default"]=a.exports},cff1:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={name:"MixProductList",data:function(){return{loadType:"add",renderList:[],domain:this.$config.domain}},props:{list:{type:Array,default:function(){return[]}},listType:{type:String,default:"column"}},watch:{list:function(t){var n=this;"add"===this.loadType?this.renderList=this.renderList.concat(t.slice(this.renderList.length)):(this.renderList.forEach((function(e){t.find((function(t){if(t.goods_id===e.goods_id)return n.$set(t,"loaded",e.loaded),!0}))})),this.renderList=t)}},methods:{}};n.default=i}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/product/components/product-list-create-component',
    {
        'pages/product/components/product-list-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("c99e"))
        })
    },
    [['pages/product/components/product-list-create-component']]
]);
