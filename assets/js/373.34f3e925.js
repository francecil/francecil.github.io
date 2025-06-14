(window.webpackJsonp=window.webpackJsonp||[]).push([[373],{1268:function(t,s,e){"use strict";e.r(s);var a=e(30),r=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),s("p",[t._v("遇到一个这样的场景：")]),t._v(" "),s("blockquote",[s("p",[t._v("往CAS系统进行认证需要带上当前（前端server）域名，拿到认证密钥后向后端发起鉴权，后端校验密钥时还会去校验鉴权url的 Host 和刚刚CAS认证时带的前端server域名是否一致，不一致的话即使密钥合法了也无用。")])]),t._v(" "),s("p",[t._v("旧平台是jsp项目，所以 鉴权url Host 和 前端server域名 是一样的。")]),t._v(" "),s("p",[t._v("前后端分离后，前端发起的鉴权url是通过代理转发到后端，代理没有额外处理的情况下，该请求的 Host 指的是后端地址，导致后端鉴权时两个 host 匹配不上")]),t._v(" "),s("h2",{attrs:{id:"解决方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[t._v("#")]),t._v(" 解决方案")]),t._v(" "),s("p",[t._v("一开始是在本地开发环境（webpack-dev-server）上，利用 proxyTable 进行接口代理，结果发现后端鉴权通过了")]),t._v(" "),s("p",[t._v("而用 nginx 却出现 host不匹配的情况。")]),t._v(" "),s("p",[t._v("经过分析发现 proxyTable 转发时会带上请求头 Host ,比如")]),t._v(" "),s("p",[s("code",[t._v("Host: localhost:3000")])]),t._v(" "),s("p",[t._v("那么 nginx 代理规则里面也加上即可")]),t._v(" "),s("div",{staticClass:"language-conf line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("proxy_set_header    Host    $host; # 80时不配端口，后端校验没有处理:80\n# proxy_set_header    Host    $host:$server_port; #当端口非80时这样配置\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("后面发现可以直接")]),t._v(" "),s("div",{staticClass:"language-conf line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("proxy_set_header    Host    $http_host;\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("就不用考虑是否非80了")]),t._v(" "),s("h2",{attrs:{id:"关于-host-和-http-host-的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关于-host-和-http-host-的区别"}},[t._v("#")]),t._v(" 关于 $host 和 $http_host 的区别")]),t._v(" "),s("h3",{attrs:{id:"host"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#host"}},[t._v("#")]),t._v(" $host")]),t._v(" "),s("p",[s("code",[t._v("$host")]),t._v(" 按以下顺序匹配")]),t._v(" "),s("ol",[s("li",[t._v("请求行中的 host name 部分")]),t._v(" "),s("li",[t._v("Host 请求头的 host name 部分")]),t._v(" "),s("li",[t._v("处理请求的 server 对应配置的 server_name")])]),t._v(" "),s("h3",{attrs:{id:"http-host"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-host"}},[t._v("#")]),t._v(" $http_host")]),t._v(" "),s("p",[s("code",[t._v("$http_host")]),t._v(" 定义在 "),s("code",[t._v("$http_")]),s("em",[s("code",[t._v("name")])])]),t._v(" "),s("blockquote",[s("p",[t._v("对应任意请求头字段。"),s("em",[s("code",[t._v("name")])]),t._v(" 为请求头字段名称转换为小写，短划线由下划线替换")])]),t._v(" "),s("blockquote",[s("p",[t._v("$http_host值为 Host 请求头数据")])]),t._v(" "),s("h3",{attrs:{id:"什么是请求行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是请求行"}},[t._v("#")]),t._v(" 什么是请求行？")]),t._v(" "),s("p",[t._v("如：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("GET /index.html HTTP/1.1\nGET www.test.com/index.html HTTP/1.1\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[s("strong",[t._v("请求行可以不带 host部分")])]),t._v(" "),s("h3",{attrs:{id:"host-请求头"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#host-请求头"}},[t._v("#")]),t._v(" Host 请求头")]),t._v(" "),s("blockquote",[s("p",[t._v("HTTP/1.0不支持Host请求头；")])]),t._v(" "),s("blockquote",[s("p",[t._v("而在HTTP/1.1中，Host请求头部必须存在，否则会 400")])]),t._v(" "),s("h3",{attrs:{id:"仅当以下情况-host-等于-http-host"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#仅当以下情况-host-等于-http-host"}},[t._v("#")]),t._v(" 仅当以下情况 "),s("code",[t._v("$host")]),t._v(" 等于 "),s("code",[t._v("$http_host")]),t._v("：")]),t._v(" "),s("ul",[s("li",[t._v("请求行中没有 host，Host请求头存在且其值为小写且不带端口号")])]),t._v(" "),s("blockquote",[s("p",[t._v("从0.8.17版本开始，$host 值总是小写.")])]),t._v(" "),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考：")]),t._v(" "),s("p",[s("a",{attrs:{href:"http://nginx.org/en/docs/http/ngx_http_core_module.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("nginx docs"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://stackoverflow.com/questions/15414810/whats-the-difference-of-host-and-http-host-in-nginx",target:"_blank",rel:"noopener noreferrer"}},[t._v("stackoverflow"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.jianshu.com/p/0850db5af284",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nginx $host变量详解"),s("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);