(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/detail"],{"05b9":function(n,t,e){},"0751":function(n,t,e){"use strict";var o=e("ca64"),i=e.n(o);i.a},"0dbf":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=u(e("a34a")),i=u(e("8163")),r=e("5df6");function u(n){return n&&n.__esModule?n:{default:n}}function a(n,t,e,o,i,r,u){try{var a=n[r](u),c=a.value}catch(d){return void e(d)}a.done?t(c):Promise.resolve(c).then(o,i)}function c(n){return function(){var t=this,e=arguments;return new Promise((function(o,i){var r=n.apply(t,e);function u(n){a(r,o,i,u,c,"next",n)}function c(n){a(r,o,i,u,c,"throw",n)}u(void 0)}))}}var d=function(){e.e("pages/order/components/product-list").then(function(){return resolve(e("4fa1"))}.bind(null,e)).catch(e.oe)},f={components:{productList:d},mixins:[i.default],data:function(){return{modalText:"",addr:{address:{}},data:{products:[],price_data:{}},expressInfo:{},order_info:{}}},onLoad:function(n){this.id=n.id,this.loadData()},methods:{loadData:function(){var t=this;return c(o.default.mark((function e(){var i;return o.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,r.getOrderDetail)({order_id:t.id});case 2:if(i=e.sent,t.loaded=!0,0!==i.status){e.next=8;break}return t.$util.msg("订单不存在"),setTimeout((function(){n.navigateBack()}),1e3),e.abrupt("return");case 8:t.data=i.result.order_info,t.data.products=i.result.order_info.goods_list.map((function(n){return{thumb:n.original_img,goods_id:n.goods_id,title:n.goods_name,number:n.goods_num,price:n.goods_price}}));case 10:case"end":return e.stop()}}),e)})))()},copy:function(t){n.setClipboardData({data:t})}}};t.default=f}).call(this,e("543d")["default"])},"156e":function(n,t,e){"use strict";e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return r})),e.d(t,"a",(function(){return o}));var o={uniPopup:function(){return e.e("components/uni-popup/uni-popup").then(e.bind(null,"a3c4"))},mixTimeline:function(){return e.e("components/mix-timeline/mix-timeline").then(e.bind(null,"d065"))},mixLoading:function(){return e.e("components/mix-loading/mix-loading").then(e.bind(null,"50c5"))},mixModal:function(){return e.e("components/mix-modal/mix-modal").then(e.bind(null,"53f7"))},mixActionSheet:function(){return e.e("components/mix-action-sheet/mix-action-sheet").then(e.bind(null,"9bfd"))}},i=function(){var n=this,t=n.$createElement;n._self._c},r=[]},"547c":function(n,t,e){"use strict";e.r(t);var o=e("156e"),i=e("f445");for(var r in i)"default"!==r&&function(n){e.d(t,n,(function(){return i[n]}))}(r);e("8fbc"),e("0751");var u,a=e("f0c5"),c=Object(a["a"])(i["default"],o["b"],o["c"],!1,null,"406149d2",null,!1,o["a"],u);t["default"]=c.exports},"8fbc":function(n,t,e){"use strict";var o=e("05b9"),i=e.n(o);i.a},b9d9:function(n,t,e){"use strict";(function(n){e("f37f");o(e("66fd"));var t=o(e("547c"));function o(n){return n&&n.__esModule?n:{default:n}}wx.__webpack_require_UNI_MP_PLUGIN__=e,n(t.default)}).call(this,e("543d")["createPage"])},ca64:function(n,t,e){},f445:function(n,t,e){"use strict";e.r(t);var o=e("0dbf"),i=e.n(o);for(var r in o)"default"!==r&&function(n){e.d(t,n,(function(){return o[n]}))}(r);t["default"]=i.a}},[["b9d9","common/runtime","common/vendor"]]]);