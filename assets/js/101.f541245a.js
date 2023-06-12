(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{835:function(e,t,o){"use strict";o.r(t);var s=o(27),r=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[t("s",[e._v("已提issue: https://github.com/vuejs/vue-router/issues/1951")])]),e._v(" "),t("h2",{attrs:{id:"现象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#现象"}},[e._v("#")]),e._v(" 现象")]),e._v(" "),t("p",[e._v("加载第一个组件（这里的第一个意思是浏览器历史记录的第一个，后文称为"),t("code",[e._v("待监听组件")]),e._v("）时，正常跳转其他页面可以触发beforeRouteLeave。\n"),t("strong",[e._v("但是")]),e._v("按浏览器的后退按钮监听不到该事件。")]),e._v(" "),t("h2",{attrs:{id:"解决方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[e._v("#")]),e._v(" 解决方案")]),e._v(" "),t("p",[e._v("目前采用比较土且不实用的解决方案。加一层组件，再router.push到"),t("code",[e._v("待监听组件")]),e._v("，使得"),t("code",[e._v("待监听组件")]),e._v("非第一个组件，可以正常监听beforeRouteLeave事件。\n###注意点：\n由于打乱了原来的路由。需要在main.js中添加全局的路由监听")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("router.beforeEach((to, from, next) => {\n  if (to is '用于跳转的组件' && from is '待监听组件') {\n    router.go(-1) \n    next(false)\n  } else {\n    next()\n  }\n  // 这样当从一个普通页面A进入待监听组件时，在待监听组件中按返回键时能正常进入A\n})\n")])])]),t("h3",{attrs:{id:"存在的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#存在的问题"}},[e._v("#")]),e._v(" 存在的问题：")]),e._v(" "),t("ol",[t("li",[e._v("若访问不是访问"),t("code",[e._v("中转组件")]),e._v("而是直接访问"),t("code",[e._v("待监听组件")]),e._v(",则没有效果")]),e._v(" "),t("li",[e._v("增加路由后，多了白屏时间。")])]),e._v(" "),t("p",[t("s",[e._v("可能官方有什么解决方案，或者我用错了。欢迎评论")])]),e._v(" "),t("h3",{attrs:{id:"后记"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#后记"}},[e._v("#")]),e._v(" 后记：")]),e._v(" "),t("p",[e._v("VUE路由控制是基于h5的"),t("code",[e._v("history API")]),e._v("实现")]),e._v(" "),t("p",[e._v("而"),t("code",[e._v("beforeRouteLeave")]),e._v("又是基于"),t("code",[e._v("window.onpopstate")])]),e._v(" "),t("p",[e._v("该事件的官方描述：")]),e._v(" "),t("blockquote",[t("p",[e._v("Note that just calling history.pushState() or history.replaceState() won't trigger a popstate event. The popstate event is only triggered by doing a browser action such as clicking on the back button (or calling history.back() in JavaScript). And the event is only triggered when the user navigates between two history entries for the same document.")])]),e._v(" "),t("p",[e._v("简而言之：该事件仅在"),t("code",[e._v("按了浏览器按钮")]),e._v("或者调用"),t("code",[e._v("history.back()")]),e._v("方法时生效，"),t("strong",[e._v("且在同一document的两条历史记录条目间的导航才会生效")]),e._v("，而上文出现的原因正是不属于同一document")])])}),[],!1,null,null,null);t.default=r.exports}}]);