(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{396:function(v,_,a){"use strict";a.r(_);var t=a(4),s=Object(t.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("p",[v._v("本文主要描述思维导图实现的要素")]),v._v(" "),_("p",[v._v("偏向于概要设计")]),v._v(" "),_("h2",{attrs:{id:"定义"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#定义"}},[v._v("#")]),v._v(" 定义")]),v._v(" "),_("h3",{attrs:{id:"元素定义"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#元素定义"}},[v._v("#")]),v._v(" 元素定义")]),v._v(" "),_("ol",[_("li",[v._v("中心节点\n"),_("blockquote",[_("p",[v._v("处于主树干，唯一，不可删除")])])]),v._v(" "),_("li",[v._v("主树干\n"),_("blockquote",[_("p",[v._v("以中心节点为根节点构成的树")])])]),v._v(" "),_("li",[v._v("游离树\n"),_("blockquote",[_("p",[v._v("非主树干的树，其根节点由拖动、粘贴、空白处创建 生成")])])]),v._v(" "),_("li",[v._v("普通节点\n"),_("blockquote",[_("p",[v._v("包括主树干节点和游离树节点"),_("br"),v._v("\n含一个缩放按钮，控制子孙节点的展示")])])]),v._v(" "),_("li",[v._v("连接线\n"),_("blockquote",[_("p",[v._v("父子节点之间的连线，无箭头，无标题")])])]),v._v(" "),_("li",[v._v("关联线\n"),_("blockquote",[_("p",[v._v("任意两节点之间的连线，带箭头，带标题")])])])]),v._v(" "),_("h3",{attrs:{id:"状态定义"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#状态定义"}},[v._v("#")]),v._v(" 状态定义")]),v._v(" "),_("ol",[_("li",[v._v("选择状态")]),v._v(" "),_("li",[v._v("编辑状态")])]),v._v(" "),_("p",[v._v("两个状态互斥")]),v._v(" "),_("h2",{attrs:{id:"创建"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#创建"}},[v._v("#")]),v._v(" 创建")]),v._v(" "),_("h3",{attrs:{id:"普通节点创建方式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#普通节点创建方式"}},[v._v("#")]),v._v(" 普通节点创建方式")]),v._v(" "),_("ol",[_("li",[v._v("节点选择状态，按回车键，创建同级节点")]),v._v(" "),_("li",[v._v("节点选择状态，鼠标右键，可以创建同级节点或子节点")]),v._v(" "),_("li",[v._v("在空白处鼠标右键，选择创建节点选项，将创建游离的普通节点")]),v._v(" "),_("li",[v._v("界面左侧预设一些节点，可以将其拖动过来。这些节点主要是带一些通用图标")]),v._v(" "),_("li",[v._v("节点粘贴：已进行节点复制操作，在节点选择状态或者空白处鼠标右键，进行元素粘贴")])]),v._v(" "),_("h3",{attrs:{id:"连接线创建方式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#连接线创建方式"}},[v._v("#")]),v._v(" 连接线创建方式")]),v._v(" "),_("ol",[_("li",[v._v("自动创建：当节点创建时不是游离树根节点时，自动进行连接线创建")]),v._v(" "),_("li",[v._v("手动创建：鼠标右键处于主树干的普通节点，选择创建连接线，拖动至游离树根节点")])]),v._v(" "),_("h3",{attrs:{id:"关联线创建方式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#关联线创建方式"}},[v._v("#")]),v._v(" 关联线创建方式")]),v._v(" "),_("p",[v._v("鼠标右键普通节点，选择创建关联线，拉动并连上其他普通节点，将创建连接并进入节点标题编辑状态")]),v._v(" "),_("h2",{attrs:{id:"删除"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#删除"}},[v._v("#")]),v._v(" 删除")]),v._v(" "),_("ol",[_("li",[v._v("父节点删除，子节点自动删除")]),v._v(" "),_("li",[v._v("节点选择状态：按Delete键，进行元素删除")])]),v._v(" "),_("h2",{attrs:{id:"选择"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#选择"}},[v._v("#")]),v._v(" 选择")]),v._v(" "),_("p",[v._v("按住CTRL键，点击节点，可进行多节点的选择。")]),v._v(" "),_("p",[v._v("同时选择父节点和子节点，对于后续各种操作，都只操作父节点。")]),v._v(" "),_("p",[v._v("例如，")]),v._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("A—A1\n|—A2\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br"),_("span",{staticClass:"line-number"},[v._v("2")]),_("br")])]),_("p",[v._v("选择A和A2节点，拖动至B节点，此时A节点为B节点的子节点，A1,A2仍是A的子节点。即"),_("strong",[v._v("只操作了父节点")]),v._v("。")]),v._v(" "),_("h2",{attrs:{id:"拖动"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#拖动"}},[v._v("#")]),v._v(" 拖动")]),v._v(" "),_("p",[v._v("拖动中心节点，则主树干进行移动，游离树不动")]),v._v(" "),_("p",[v._v("拖动普通节点至空白处，则位置进行调整；其子节点视情况调整（制定策略，有一定工作量），连接线和关联线自动调整。")]),v._v(" "),_("blockquote",[_("p",[v._v("支持多个节点同时拖动")])]),v._v(" "),_("p",[v._v("拖动普通节点至节点处，当前节点会变为该节点的子节点")]),v._v(" "),_("p",[v._v("同时选择中心节点和游离树节点，则这些树一起拖动,且不能拖动至普通节点")]),v._v(" "),_("p",[v._v("连接线无法拖动")]),v._v(" "),_("p",[v._v("关联线可拖动，利用左右两个拉杆（参考processon")]),v._v(" "),_("h2",{attrs:{id:"复制与粘贴"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#复制与粘贴"}},[v._v("#")]),v._v(" 复制与粘贴")]),v._v(" "),_("h3",{attrs:{id:"复制"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#复制"}},[v._v("#")]),v._v(" 复制")]),v._v(" "),_("p",[v._v("选择节点后，CTRL+C或者鼠标右键点复制，可进行节点的复制。")]),v._v(" "),_("p",[v._v("会同时复制这些节点的子孙节点")]),v._v(" "),_("h3",{attrs:{id:"粘贴"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#粘贴"}},[v._v("#")]),v._v(" 粘贴")]),v._v(" "),_("ul",[_("li",[v._v("鼠标右键普通节点，选择粘贴，会将复制的节点作为该节点的子节点")]),v._v(" "),_("li",[v._v("鼠标右键空白处，选择粘贴。若复制的父节点超过一个，自动创建一个游离树根节点，并将这些节点作为根节点的子节点，否则直接粘贴。")])]),v._v(" "),_("h2",{attrs:{id:"保存-撤销-重做"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#保存-撤销-重做"}},[v._v("#")]),v._v(" 保存，撤销，重做")]),v._v(" "),_("p",[v._v("一次操作定义：")]),v._v(" "),_("ul",[_("li",[v._v("组件创建")]),v._v(" "),_("li",[v._v("组件拖动至鼠标松开")]),v._v(" "),_("li",[v._v("组件属性修改：标题、样式")])]),v._v(" "),_("p",[v._v("缩放操作仅针对本地显示，不涉及"),_("code",[v._v("一次操作")])]),v._v(" "),_("p",[v._v("历史记录：操作步骤的记录，index记录当前处于历史记录的哪个操作")]),v._v(" "),_("h3",{attrs:{id:"保存"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#保存"}},[v._v("#")]),v._v(" 保存")]),v._v(" "),_("p",[v._v("每次操作结束，通过websocket发送当前操作到服务端，进行自动保存（autosave）。")]),v._v(" "),_("blockquote",[_("p",[v._v("可用于多人操作及防止意外关闭")])]),v._v(" "),_("p",[v._v("点击保存按钮或按"),_("code",[v._v("CTRL+S")]),v._v("进行文件保存，会将当前整个文件结构上传（save），并清空"),_("code",[v._v("历史记录")])]),v._v(" "),_("h3",{attrs:{id:"撤销"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#撤销"}},[v._v("#")]),v._v(" 撤销")]),v._v(" "),_("p",[v._v("撤销（undo）一次操作，并进行自动保存（autosave）")]),v._v(" "),_("blockquote",[_("p",[v._v("历史记录回退，若进行新的操作，index其后的历史记录会被舍弃")])]),v._v(" "),_("h3",{attrs:{id:"重做"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#重做"}},[v._v("#")]),v._v(" 重做")]),v._v(" "),_("p",[v._v("在处于撤销情况下进行还原操作（redo），并进行自动保存")]),v._v(" "),_("h2",{attrs:{id:"展开与缩略"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#展开与缩略"}},[v._v("#")]),v._v(" 展开与缩略")]),v._v(" "),_("p",[v._v("普通节点旁显示一个展开按钮"),_("code",[v._v("+")]),v._v("或缩略按钮"),_("code",[v._v("-")])]),v._v(" "),_("p",[v._v("点击展开按钮，展开当前节点的下一级节点")]),v._v(" "),_("p",[v._v("点击缩略按钮，缩略当前节点的所有子孙节点")]),v._v(" "),_("h2",{attrs:{id:"快捷操作"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#快捷操作"}},[v._v("#")]),v._v(" 快捷操作")]),v._v(" "),_("ol",[_("li",[v._v("节点选择状态：按回车键，自动创建同级节点并处于节点编辑状态；显示删除按钮")]),v._v(" "),_("li",[v._v("节点选择状态：按Tap键，自动创建子节点并处于节点编辑状态")]),v._v(" "),_("li",[v._v("节点选择状态：按Delete键，进行元素删除")]),v._v(" "),_("li",[v._v("节点编辑状态：按回车键，保存节点标题并处于节点选择状态")]),v._v(" "),_("li",[v._v("双击节点，进入节点标题编辑状态")]),v._v(" "),_("li",[v._v("按住CTRL，可以选择多个节点")]),v._v(" "),_("li",[v._v("CTRL+A 进行所有节点的选择")])]),v._v(" "),_("h2",{attrs:{id:"样式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#样式"}},[v._v("#")]),v._v(" 样式")]),v._v(" "),_("ul",[_("li",[v._v("画布初始化一定大小，中心节点处于中心。画布可无限拉伸")]),v._v(" "),_("li",[v._v("普通节点支持")])])])}),[],!1,null,null,null);_.default=s.exports}}]);