(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-set-about"],{3038:function(t,e,i){var a=i("6c74");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("89c38a7c",a,!0,{sourceMap:!1,shadowMode:!1})},"38fc":function(t,e,i){"use strict";i.r(e);var a=i("5aff"),n=i("6ec6");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("7771"),i("8d5d");var c,s=i("f0c5"),r=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"1d22415c",null,!1,a["a"],c);e["default"]=r.exports},"5aff":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"logo-wrapper"},[i("v-uni-image",{staticClass:"logo",attrs:{src:"https://www.xiensw.com/public/static/images/logo.png "}}),i("v-uni-text",{staticClass:"version"},[t._v("版本 v"+t._s(t.version))])],1),i("v-uni-view",{staticClass:"list-cell b-b",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navToAgreementDetail(1)}}},[i("v-uni-text",{staticClass:"cell-tit"},[t._v("用户服务协议")]),i("v-uni-text",{staticClass:"mix-icon icon-you"})],1),i("v-uni-view",{staticClass:"list-cell",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navToAgreementDetail(2)}}},[i("v-uni-text",{staticClass:"cell-tit"},[t._v("隐私权政策")]),i("v-uni-text",{staticClass:"mix-icon icon-you"})],1),i("v-uni-view",{staticClass:"bus center fix-bot"},[i("v-uni-image",{staticClass:"icon",attrs:{src:"/static/logo-b-w.png"}})],1)],1)},o=[]},6601:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{version:""}},onLoad:function(){this.version=this.$config.version},methods:{navToAgreementDetail:function(t){this.navTo("/pages/public/article?param="+JSON.stringify({module:"article",operation:"getAgreement",data:{type:t}}))}}};e.default=a},"6c74":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/* 配色 */uni-page-body[data-v-1d22415c]{background:#f8f8f8}body.?%PAGE?%[data-v-1d22415c]{background:#f8f8f8}',""]),t.exports=e},"6ec6":function(t,e,i){"use strict";i.r(e);var a=i("6601"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},7771:function(t,e,i){"use strict";var a=i("3038"),n=i.n(a);n.a},"8d5d":function(t,e,i){"use strict";var a=i("a5e7"),n=i.n(a);n.a},"9b20":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/* 配色 */.logo-wrapper[data-v-1d22415c]{display:flex;align-items:center;justify-content:center;flex-direction:column;height:%?320?%}.logo-wrapper .logo[data-v-1d22415c]{width:%?140?%;height:%?140?%;background-color:#fff;border-radius:%?16?%}.logo-wrapper .version[data-v-1d22415c]{font-size:%?24?%;color:#888;margin-top:%?26?%}.list-cell[data-v-1d22415c]{display:flex;align-items:center;padding:0 %?40?%;width:100%;height:%?94?%;position:relative;background:#fff;justify-content:center}.list-cell.b-b[data-v-1d22415c]:after{left:%?40?%}.list-cell .icon-you[data-v-1d22415c]{font-size:%?24?%;color:#999;margin-left:%?10?%}.list-cell .cell-tit[data-v-1d22415c]{flex:1;font-size:%?30?%;color:#333;margin-right:%?10?%}.bus[data-v-1d22415c]{display:flex;justify-content:center;font-size:%?26?%;color:#999;position:absolute;left:0;bottom:%?60?%;width:100%}.bus .icon[data-v-1d22415c]{width:%?40?%;height:%?40?%;margin-right:%?10?%}',""]),t.exports=e},a5e7:function(t,e,i){var a=i("9b20");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("b352c17a",a,!0,{sourceMap:!1,shadowMode:!1})}}]);