(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/address/list"],{"02b5":function(t,n,e){},"0642":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(e("a34a")),i=e("c15d");function a(t){return t&&t.__esModule?t:{default:t}}function o(t,n,e,r,i,a,o){try{var u=t[a](o),s=u.value}catch(c){return void e(c)}u.done?n(s):Promise.resolve(s).then(r,i)}function u(t){return function(){var n=this,e=arguments;return new Promise((function(r,i){var a=t.apply(n,e);function u(t){o(a,r,i,u,s,"next",t)}function s(t){o(a,r,i,u,s,"throw",t)}u(void 0)}))}}var s={data:function(){return{list:[]}},onLoad:function(t){this.isChoose=!!t.choose,this.choosedId=t.id,this.loadData()},methods:{address:function(t){return"".concat(t.address)},loadData:function(){var t=this;return u(r.default.mark((function n(){var e;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,(0,i.getAddress)();case 2:e=n.sent,t.list=e.result.address_lists,t.loaded=!0;case 5:case"end":return n.stop()}}),n)})))()},chooseAddress:function(n){this.isChoose&&(this.$util.prePage().setAddress(n),t.navigateBack())},deleteAddr:function(){var t=this;return u(r.default.mark((function n(){var e;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,(0,i.deleAddress)({id:t.list[t.curIndex].address_id});case 2:e=n.sent,t.$util.msg(e.msg),1===e.status&&(t.list.splice(t.curIndex,1),t.isChoose&&t.choosedId&&t.$util.prePage().setAddress({}));case 5:case"end":return n.stop()}}),n)})))()},editAddr:function(t){this.navTo("manage?data=".concat(JSON.stringify(t)))},showDelModal:function(t){this.curIndex=t,this.$refs.mixModal.open()}}};n.default=s}).call(this,e("543d")["default"])},"17a2":function(t,n,e){"use strict";e.r(n);var r=e("a1f0"),i=e("1b41");for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);e("4e9c"),e("cff2");var o,u=e("f0c5"),s=Object(u["a"])(i["default"],r["b"],r["c"],!1,null,"7a7c46cb",null,!1,r["a"],o);n["default"]=s.exports},"1b41":function(t,n,e){"use strict";e.r(n);var r=e("0642"),i=e.n(r);for(var a in r)"default"!==a&&function(t){e.d(n,t,(function(){return r[t]}))}(a);n["default"]=i.a},"4e9c":function(t,n,e){"use strict";var r=e("02b5"),i=e.n(r);i.a},5546:function(t,n,e){"use strict";(function(t){e("f37f");r(e("66fd"));var n=r(e("17a2"));function r(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=e,t(n.default)}).call(this,e("543d")["createPage"])},"5b9b":function(t,n,e){},a1f0:function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return r}));var r={mixButton:function(){return e.e("components/mix-button/mix-button").then(e.bind(null,"0975"))},mixModal:function(){return e.e("components/mix-modal/mix-modal").then(e.bind(null,"53f7"))},mixLoading:function(){return e.e("components/mix-loading/mix-loading").then(e.bind(null,"50c5"))},mixEmpty:function(){return e.e("components/mix-empty/mix-empty").then(e.bind(null,"0aab"))}},i=function(){var t=this,n=t.$createElement,e=(t._self._c,t.__map(t.list,(function(n,e){var r=t.__get_orig(n),i=t.address(n);return{$orig:r,m0:i}})));t.$mp.data=Object.assign({},{$root:{l0:e}})},a=[]},cff2:function(t,n,e){"use strict";var r=e("5b9b"),i=e.n(r);i.a}},[["5546","common/runtime","common/vendor"]]]);