(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-auth-login"],{"0593":function(t,e,i){"use strict";i.r(e);var a=i("e3ef"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"0a83":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/* 配色 */.app[data-v-18f56aec]{padding-top:15vh;position:relative;width:100vw;height:100vh;overflow:hidden;background:#fff}.wrapper[data-v-18f56aec]{position:relative;z-index:90;padding-bottom:%?40?%}.back-btn[data-v-18f56aec]{position:absolute;left:%?20?%;top:calc(0px + %?20?%);z-index:90;padding:%?20?%;font-size:%?32?%;color:#606266}.left-top-sign[data-v-18f56aec]{font-size:%?120?%;color:#f8f8f8;position:relative;left:%?-12?%}.right-top-sign[data-v-18f56aec]{position:absolute;top:%?80?%;right:%?-30?%;z-index:95}.right-top-sign[data-v-18f56aec]:before, .right-top-sign[data-v-18f56aec]:after{display:block;content:"";width:%?400?%;height:%?80?%;background:#b4f3e2}.right-top-sign[data-v-18f56aec]:before{-webkit-transform:rotate(50deg);transform:rotate(50deg);border-top-right-radius:50px}.right-top-sign[data-v-18f56aec]:after{position:absolute;right:%?-198?%;top:0;-webkit-transform:rotate(-50deg);transform:rotate(-50deg);border-top-left-radius:50px}.left-bottom-sign[data-v-18f56aec]{position:absolute;left:%?-270?%;bottom:%?-320?%;border:%?100?% solid #d0d1fd;border-radius:50%;padding:%?180?%}.welcome[data-v-18f56aec]{position:relative;left:%?50?%;top:%?-90?%;font-size:%?46?%;color:#555;text-shadow:1px 0 1px rgba(0,0,0,.3)}.input-content[data-v-18f56aec]{padding:0 %?60?%}.input-item[data-v-18f56aec]{display:flex;flex-direction:column;align-items:flex-start;justify-content:center;padding:0 %?30?%;background:#f8f6fc;height:%?120?%;border-radius:4px;margin-bottom:%?50?%}.input-item[data-v-18f56aec]:last-child{margin-bottom:0}.input-item .row[data-v-18f56aec]{width:100%}.input-item .tit[data-v-18f56aec]{height:%?50?%;line-height:%?56?%;font-size:%?26?%;color:#606266}.input-item uni-input[data-v-18f56aec]{flex:1;height:%?60?%;font-size:%?30?%;color:#303133;width:100%}\n/* 其他登录方式 */.other-wrapper[data-v-18f56aec]{display:flex;flex-direction:column;align-items:center;padding-top:%?20?%;margin-top:%?30?%}.other-wrapper .line[data-v-18f56aec]{margin-bottom:%?40?%}.other-wrapper .line .tit[data-v-18f56aec]{margin:0 %?32?%;font-size:%?24?%;color:#606266}.other-wrapper .line[data-v-18f56aec]:before, .other-wrapper .line[data-v-18f56aec]:after{content:"";width:%?160?%;height:0;border-top:1px solid #e0e0e0}.other-wrapper .item[data-v-18f56aec]{font-size:%?24?%;color:#606266;background-color:#fff;border:0}.other-wrapper .item[data-v-18f56aec]:after{border:0}.other-wrapper .icon[data-v-18f56aec]{width:%?90?%;height:%?90?%;margin:0 %?24?% %?16?%}.agreement[data-v-18f56aec]{position:absolute;left:0;bottom:%?10?%;z-index:1;width:%?750?%;height:%?90?%;font-size:%?24?%;color:#999}.agreement .mix-icon[data-v-18f56aec]{font-size:%?36?%;color:#ccc;margin-right:%?8?%;margin-top:1px}.agreement .mix-icon.active[data-v-18f56aec]{color:#ff536f}.agreement .tit[data-v-18f56aec]{color:#40a2ff}',""]),t.exports=e},"10ae":function(t,e,i){var a=i("0a83");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("551af60a",a,!0,{sourceMap:!1,shadowMode:!1})},"1a02":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;i("ef17");var a={};e.default=a},"1b87":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,"uni-page-body[data-v-18f56aec]{background:#fff}body.?%PAGE?%[data-v-18f56aec]{background:#fff}",""]),t.exports=e},"38e6":function(t,e,i){"use strict";var a=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var n=a(i("1da1")),o=i("c4fc"),r=a(i("1a02")),c=a(i("8a33")),s=a(i("5883")),u=a(i("3a88")),d=i("ef17"),f={mixins:[r.default,c.default,s.default,u.default],data:function(){return{canUseAppleLogin:!1,agreement:!0,username:"",code:""}},methods:{loginSuccessCallBack:function(t){this.$util.msg("登陆成功"),this.$store.commit("setToken",t),setTimeout((function(){uni.navigateBack()}),1e3)},login:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function e(){var i,a,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.agreement){e.next=4;break}return t.$util.msg("请阅读并同意用户服务及隐私协议"),t.$refs.confirmBtn.stop(),e.abrupt("return");case 4:if(i=t.username,a=t.code,(0,o.checkStr)(i,"mobile")){e.next=9;break}return t.$util.msg("请输入正确的手机号码"),t.$refs.confirmBtn.stop(),e.abrupt("return");case 9:if((0,o.checkStr)(a,"mobileCode")){e.next=13;break}return t.$util.msg("验证码错误"),t.$refs.confirmBtn.stop(),e.abrupt("return");case 13:return n={mobile:i,mobile_code:a},n.platform=1,n.invite=t.$store.state.invite,n.platform=2,e.next=19,(0,d.userLogin)(n);case 19:r=e.sent,t.$refs.confirmBtn.stop(),1===r.status?t.loginSuccessCallBack({token:r.result}):t.$util.msg(r.msg);case 22:case"end":return e.stop()}}),e)})))()},navBack:function(){uni.navigateBack()},checkAgreement:function(){this.agreement=!this.agreement},navToAgreementDetail:function(t){this.navTo("/pages/public/article?param="+JSON.stringify({module:"article",operation:"getAgreement",data:{type:t}}))}}};e.default=f},"3a88":function(t,e,i){"use strict";var a=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var n=a(i("1da1")),o=i("ef17"),r={data:function(){return{mpCodeTimer:0,mpWxCode:""}},methods:{h5WxGetUserInfo:function(){var t=this;this.agreement?this.$util.throttle((0,n.default)(regeneratorRuntime.mark((function e(){var i,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i={invite:t.$store.state.invite,platform:2},e.next=3,(0,o.weixinLogin)(i);case 3:a=e.sent,window.location.href=a.result;case 5:case"end":return e.stop()}}),e)})))):this.$util.msg("请阅读并同意用户服务及隐私协议")}}};e.default=r},"43db":function(t,e,i){"use strict";var a=i("10ae"),n=i.n(a);n.a},"45cb":function(t,e,i){var a=i("52f2");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("12b2a3bf",a,!0,{sourceMap:!1,shadowMode:!1})},"50c5":function(t,e,i){"use strict";i.r(e);var a=i("6fd1"),n=i("0593");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("dcc0");var r,c=i("f0c5"),s=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"3dc5fe7c",null,!1,a["a"],r);e["default"]=s.exports},"52f2":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/* 配色 */.mix-loading[data-v-3dc5fe7c]{position:fixed;left:50vw;top:46vh;width:0;height:0;z-index:999}.mask[data-v-3dc5fe7c]{position:fixed;left:0;top:0;right:0;bottom:0}.chry[data-v-3dc5fe7c]{min-width:%?120?%;min-height:%?116?%;border-radius:%?10?%;background-color:rgba(17,17,17,.7)}.chry .icon[data-v-3dc5fe7c]{width:%?64?%;height:%?64?%;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgxMDB2MTAwSDB6Ii8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTlFOUU5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMwKSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iIzk4OTY5NyIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgzMCAxMDUuOTggNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjOUI5OTlBIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDYwIDc1Ljk4IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0EzQTFBMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA2NSA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNBQkE5QUEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDU4LjY2IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0IyQjJCMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgxNTAgNTQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjQkFCOEI5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA1MCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDMkMwQzEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE1MCA0NS45OCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDQkNCQ0IiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTEyMCA0MS4zNCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNEMkQyRDIiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDM1IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0RBREFEQSIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgtNjAgMjQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTJFMkUyIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKC0zMCAtNS45OCA2NSkiLz48L3N2Zz4=);background-repeat:no-repeat;background-size:100% 100%;-webkit-animation:mix-loading-data-v-3dc5fe7c 1s steps(12) infinite;animation:mix-loading-data-v-3dc5fe7c 1s steps(12) infinite}.chry .tit[data-v-3dc5fe7c]{margin:%?10?% 0 %?6?%;font-size:%?20?%;color:#e9e9e9}@-webkit-keyframes mix-loading-data-v-3dc5fe7c{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes mix-loading-data-v-3dc5fe7c{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.hamster[data-v-3dc5fe7c]{width:%?106?%;height:%?120?%}',""]),t.exports=e},5883:function(t,e,i){"use strict";var a=i("4ea4");i("c740"),i("ac1f"),i("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var n=a(i("1da1")),o={onLoad:function(){if("ios"===this.systemInfo.platform){var t=+this.systemInfo.system.split(".")[0];t>=13&&(this.canUseAppleLogin=!0)}},methods:{loginByApple:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.agreement){e.next=4;break}return t.$util.msg("请阅读并同意用户服务及隐私协议"),t.$refs.confirmBtn.stop(),e.abrupt("return");case 4:uni.login({provider:"apple",success:function(e){uni.getUserInfo({provider:"apple",success:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(i){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(i),e.next=3,t.$request("user","loginByApple",{authorizationCode:i.userInfo.authorizationCode,identityToken:i.userInfo.identityToken},{showLoading:!0});case 3:if(a=e.sent,console.log(a),t.appleLogout(),console.log(a),0!==a.status){e.next=10;break}return t.$util.msg(a.msg),e.abrupt("return");case 10:a.hasBindMobile&&a.data.token?t.loginSuccessCallBack({token:a.data.token,tokenExpired:a.data.tokenExpired}):t.navTo("/pages/auth/bindMobile?type=apple&data="+JSON.stringify(a.data));case 11:case"end":return e.stop()}}),e)})));function i(t){return e.apply(this,arguments)}return i}()})},fail:function(e){console.log(e),t.$util.msg("登录失败"),t.appleLogout()}});case 5:case"end":return e.stop()}}),e)})))()},appleLogout:function(){plus.oauth.getServices((function(t){var e=t.findIndex((function(t){return"apple"===t.id}));t[e].logout((function(t){console.log("appleLogout success=> ",t)}),(function(t){console.log("appleLogout error=> ",t)}))}))}}};e.default=o},"6fd1":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"mix-loading center"},[t.isTimeout?t._e():i("v-uni-view",{staticClass:"center"},[t.mask?i("v-uni-view",{staticClass:"mask",on:{click:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.stopPrevent.apply(void 0,arguments)},touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.stopPrevent.apply(void 0,arguments)}}}):t._e(),1===t.type?i("v-uni-view",{staticClass:"chry column center"},[i("v-uni-view",{staticClass:"icon"}),i("v-uni-text",{staticClass:"tit"},[t._v(t._s(t.title))])],1):2===t.type?i("v-uni-image",{staticClass:"hamster",attrs:{src:"/static/loading/hamster.gif"}}):t._e()],1)],1)},o=[]},"87e0":function(t,e,i){var a=i("1b87");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("6a56ce16",a,!0,{sourceMap:!1,shadowMode:!1})},"8a33":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={};e.default=a},a6ce:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var a={mixLoading:i("50c5").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"app"},[i("v-uni-view",{staticClass:"left-bottom-sign"}),i("v-uni-view",{staticClass:"back-btn mix-icon icon-guanbi",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navBack.apply(void 0,arguments)}}}),i("v-uni-view",{staticClass:"right-top-sign"}),i("v-uni-view",{staticClass:"agreement center"},[i("v-uni-text",{staticClass:"mix-icon icon-xuanzhong",class:{active:t.agreement},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.checkAgreement.apply(void 0,arguments)}}}),i("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.checkAgreement.apply(void 0,arguments)}}},[t._v("请认真阅读并同意")]),i("v-uni-text",{staticClass:"tit",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navToAgreementDetail(1)}}},[t._v("《用户服务协议》")]),i("v-uni-text",{staticClass:"tit",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navToAgreementDetail(2)}}},[t._v("《隐私权政策》")])],1),i("v-uni-view",{staticClass:"wrapper"},[i("v-uni-view",{staticClass:"left-top-sign"},[t._v("LOGIN")]),i("v-uni-view",{staticClass:"welcome"},[t._v("欢迎回来！")]),i("v-uni-view",{staticClass:"other-wrapper"},[i("v-uni-view",{staticClass:"line center"},[i("v-uni-text",{staticClass:"tit"},[t._v("快捷登录")])],1),i("v-uni-view",{staticClass:"list row"},[i("v-uni-view",{staticClass:"item column center",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.h5WxGetUserInfo.apply(void 0,arguments)}}},[i("v-uni-image",{staticClass:"icon",attrs:{src:"/static/icon/login-wx.png"}})],1)],1)],1)],1),t.isLoading?i("mix-loading"):t._e()],1)},o=[]},ab9f:function(t,e,i){"use strict";i.r(e);var a=i("a6ce"),n=i("d41d");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("e155"),i("43db");var r,c=i("f0c5"),s=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"18f56aec",null,!1,a["a"],r);e["default"]=s.exports},d41d:function(t,e,i){"use strict";i.r(e);var a=i("38e6"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},dcc0:function(t,e,i){"use strict";var a=i("45cb"),n=i.n(a);n.a},e155:function(t,e,i){"use strict";var a=i("87e0"),n=i.n(a);n.a},e3ef:function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"MixIconLoading",data:function(){return{isTimeout:!1}},props:{type:{type:Number,default:1},mask:{type:Boolean,default:!1},timeout:{type:Number,default:10},title:{type:String,default:"请稍候"}},created:function(){var t=this;this._timer=setTimeout((function(){t.isLoading&&(t.isTimeout=!0,uni.showToast({title:"加载超时，请重试",icon:"none"}))}),1e3*this.timeout)},destroyed:function(){this._timer&&clearTimeout(this._timer)}};e.default=a}}]);