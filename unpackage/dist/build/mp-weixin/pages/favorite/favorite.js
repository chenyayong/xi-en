(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/favorite/favorite"],{"2cf8":function(n,t,e){},"55a9":function(n,t,e){"use strict";(function(n){e("f37f");r(e("66fd"));var t=r(e("625a"));function r(n){return n&&n.__esModule?n:{default:n}}wx.__webpack_require_UNI_MP_PLUGIN__=e,n(t.default)}).call(this,e("543d")["createPage"])},"625a":function(n,t,e){"use strict";e.r(t);var r=e("a294"),o=e("8e5a");for(var u in o)"default"!==u&&function(n){e.d(t,n,(function(){return o[n]}))}(u);e("90a2"),e("94b2");var i,a=e("f0c5"),c=Object(a["a"])(o["default"],r["b"],r["c"],!1,null,"2b331c02",null,!1,r["a"],i);t["default"]=c.exports},"8e5a":function(n,t,e){"use strict";e.r(t);var r=e("c165"),o=e.n(r);for(var u in r)"default"!==u&&function(n){e.d(t,n,(function(){return r[n]}))}(u);t["default"]=o.a},"90a2":function(n,t,e){"use strict";var r=e("b163"),o=e.n(r);o.a},"94b2":function(n,t,e){"use strict";var r=e("2cf8"),o=e.n(r);o.a},a294:function(n,t,e){"use strict";e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return u})),e.d(t,"a",(function(){return r}));var r={mixLoading:function(){return e.e("components/mix-loading/mix-loading").then(e.bind(null,"50c5"))}},o=function(){var n=this,t=n.$createElement;n._self._c},u=[]},b163:function(n,t,e){},c165:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(e("a34a")),o=i(e("393e")),u=e("eee9");function i(n){return n&&n.__esModule?n:{default:n}}function a(n,t,e,r,o,u,i){try{var a=n[u](i),c=a.value}catch(s){return void e(s)}a.done?t(c):Promise.resolve(c).then(r,o)}function c(n){return function(){var t=this,e=arguments;return new Promise((function(r,o){var u=n.apply(t,e);function i(n){a(u,r,o,i,c,"next",n)}function c(n){a(u,r,o,i,c,"throw",n)}i(void 0)}))}}var s=function(){e.e("pages/product/components/product-list").then(function(){return resolve(e("c99e"))}.bind(null,e)).catch(e.oe)},f={components:{productList:s},mixins:[o.default],data:function(){return{list:[],upOption:{auto:!1,page:{num:0,size:6},noMoreSize:6}}},methods:{loadList:function(n){var t=this;return c(r.default.mark((function e(){var o,i;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.$refs.productList&&(t.$refs.productList.loadType=1===n.num?"refresh":"add"),t.isLoading=!0,e.next=4,(0,u.getFavorites)();case 4:o=e.sent,t.isLoading=!1,i=o.result,1===n.num&&(t.list=[],t.loaded&&i.forEach((function(n){n.loaded=!0}))),t.list=t.list.concat(i),t.mescroll.endSuccess(i.length);case 10:case"end":return e.stop()}}),e)})))()},mescrollInit:function(n){this.isLoading=!0,this.mescroll=n,this.mescroll.resetUpScroll(!1)}}};t.default=f}},[["55a9","common/runtime","common/vendor"]]]);