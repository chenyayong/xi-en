(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/teams/index"],{4850:function(t,n,e){"use strict";var u=e("6e7e"),i=e.n(u);i.a},"54b7":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=r(e("a34a")),i=e("ef17");function r(t){return t&&t.__esModule?t:{default:t}}function a(t,n,e,u,i,r,a){try{var o=t[r](a),s=o.value}catch(c){return void e(c)}o.done?n(s):Promise.resolve(s).then(u,i)}function o(t){return function(){var n=this,e=arguments;return new Promise((function(u,i){var r=t.apply(n,e);function o(t){a(r,u,i,o,s,"next",t)}function s(t){a(r,u,i,o,s,"throw",t)}o(void 0)}))}}var s={data:function(){return{current:0,items:["直推客户数","团队明细"],count:0,params:{type:1,limit:10,offset:0},list:[]}},onLoad:function(){this.loadData()},onReachBottom:function(){var t=this;return o(u.default.mark((function n(){return u.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t.isLoading){n.next=4;break}return t.params.offset++,n.next=4,t.loadData("add");case 4:case"end":return n.stop()}}),n)})))()},methods:{loadData:function(t){var n=this;return o(u.default.mark((function e(){var r,a;return u.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n.isLoading=!0,e.next=3,(0,i.getGroupList)(n.params);case 3:r=e.sent,1===r.status?(n.count=r.result.count,"add"===t?(a=r.result.group_lis,n.list=n.list.concat(a||[])):n.list=r.result.group_list):n.$util.msg(r.msg),n.isLoading=!1;case 6:case"end":return e.stop()}}),e)})))()},onClickItem:function(t){this.current=t.currentIndex,this.params.offset=0,this.params.type=this.current+1,this.loadData()}}};n.default=s},"6c84":function(t,n,e){"use strict";e.r(n);var u=e("54b7"),i=e.n(u);for(var r in u)"default"!==r&&function(t){e.d(n,t,(function(){return u[t]}))}(r);n["default"]=i.a},"6e7e":function(t,n,e){},"76f4":function(t,n,e){"use strict";(function(t){e("f37f");u(e("66fd"));var n=u(e("87d0"));function u(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=e,t(n.default)}).call(this,e("543d")["createPage"])},"87d0":function(t,n,e){"use strict";e.r(n);var u=e("8a0a"),i=e("6c84");for(var r in i)"default"!==r&&function(t){e.d(n,t,(function(){return i[t]}))}(r);e("4850");var a,o=e("f0c5"),s=Object(o["a"])(i["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],a);n["default"]=s.exports},"8a0a":function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return u}));var u={uniSegmentedControl:function(){return e.e("uni_modules/uni-segmented-control/components/uni-segmented-control/uni-segmented-control").then(e.bind(null,"a209"))},uniList:function(){return e.e("uni_modules/uni-list/components/uni-list/uni-list").then(e.bind(null,"33d8"))},uniListItem:function(){return e.e("uni_modules/uni-list/components/uni-list-item/uni-list-item").then(e.bind(null,"7c2a"))},mixEmpty:function(){return e.e("components/mix-empty/mix-empty").then(e.bind(null,"0aab"))}},i=function(){var t=this,n=t.$createElement;t._self._c},r=[]}},[["76f4","common/runtime","common/vendor"]]]);