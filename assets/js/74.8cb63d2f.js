(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{402:function(v,_,t){"use strict";t.r(_);var p=t(4),n=Object(p.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"面试答题模板"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#面试答题模板"}},[v._v("#")]),v._v(" 面试答题模板")]),v._v(" "),_("p",[v._v("这里以 chrome 为例，在进程线程方面的描述不一定是准确的（毕竟没有看过源码）")]),v._v(" "),_("p",[v._v("首先分为浏览器进程和渲染进程")]),v._v(" "),_("p",[v._v("浏览器ui控件，网络以及存储等交给浏览器进程去做")]),v._v(" "),_("p",[v._v("代码执行，页面渲染都是通过渲染进程去做")]),v._v(" "),_("p",[v._v("浏览器进程的ui线程处理用户输入，可能会调用网络线程去提前做 dns 解析。")]),v._v(" "),_("p",[v._v("按回车后，先通过存储线程去查有没有缓存，或者是不是 301 重定向，之后网络线程发起 url 请求")]),v._v(" "),_("p",[v._v("这个过程涉及 dns 解析，tcp建联，http请求发起，https 的话先进行 tls建联")]),v._v(" "),_("p",[v._v("响应返回的时候，先解析响应头，如果是重定向则重新发起请求，继续前面的过程")]),v._v(" "),_("p",[v._v("然后处理响应数据，通过 content-type 判断资源类型，不同资源有不同处理，这里以 html 为例")]),v._v(" "),_("p",[v._v("此时启动一个新的渲染进程，浏览器进程将响应内容发往渲染进程，直到渲染进程返回渲染确认的消息，导航过程结束，此时会调用ui线程去更新导航栏状态\n（不一定启动新的渲染进程，有个什么浏览上下文概念，可能复用）")]),v._v(" "),_("p",[v._v("渲染进程内部会创建浏览上下文对象和 Document 对象，并开始事件循环，首先发起一个 html 解析的任务")]),v._v(" "),_("p",[v._v("这个过程会进行流解析，令牌化，生成dom节点，构建dom树")]),v._v(" "),_("p",[v._v("发现资源的话通过浏览器进程的网络线程去获取资源，资源会排优先级（具体忘了）")]),v._v(" "),_("p",[v._v("同时还会进行样式树的构建")]),v._v(" "),_("p",[v._v("遇到同步脚本时，暂停html解析任务，将同步脚本作为任务排入事件循环（同步代码执行完毕还会去清空微任务队列）\n（注意，此时可能会进行预扫描查询后面的资源，并进行提前加载。这里有一套复杂的处理机制，不具体分析了。）")]),v._v(" "),_("p",[v._v("同步代码中可能还会触发回流和重绘")]),v._v(" "),_("p",[v._v("事件循环继续，再次执行 html 解析任务（这边规范没有详细定义，可能有的渲染引擎是其他任务如网络任务源先执行）")]),v._v(" "),_("p",[v._v("html 解析任务结束，触发domcontentload回调，进行 ui render")]),v._v(" "),_("p",[v._v("此时 dom 树和样式树会合成布局树")]),v._v(" "),_("p",[v._v("遍历布局树创建层树（比如通过 css3 某些属性创建单独层），每层单独渲染，然后交由合成器线程进行合并，最后显示在页面上")])])}),[],!1,null,null,null);_.default=n.exports}}]);