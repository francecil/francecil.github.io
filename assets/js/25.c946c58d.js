(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{353:function(t,e,n){"use strict";n.r(e);var r=n(4),a=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("上次讲解了H5的视频直播，这次我们要讲的就是H5的音频直播啦.有没有很期待= =")]),t._v(" "),e("p",[t._v("下面是我的探索历程，不感兴趣的可以直接看最后一个方案。")]),t._v(" "),e("h1",{attrs:{id:"探索历程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#探索历程"}},[t._v("#")]),t._v(" 探索历程")]),t._v(" "),e("p",[t._v("注：本文使用的Server都是nodejs,如果不了解的请先看下基础教程")]),t._v(" "),e("p",[t._v("另外ffmpeg是必须的，不仅是用来测试，做流媒体开发的基本都要会用这个")]),t._v(" "),e("h2",{attrs:{id:"pcm音频直播"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pcm音频直播"}},[t._v("#")]),t._v(" PCM音频直播")]),t._v(" "),e("p",[t._v("流程：")]),t._v(" "),e("h3",{attrs:{id:"_1-server端接收ffmpeg推送的pcm流-这里我们把mp3文件推成pcm流-当然输入源任意"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-server端接收ffmpeg推送的pcm流-这里我们把mp3文件推成pcm流-当然输入源任意"}},[t._v("#")]),t._v(" 1.Server端接收ffmpeg推送的PCM流(这里我们把MP3文件推成PCM流，当然输入源任意")]),t._v(" "),e("p",[e("strong",[t._v("做法(1)")]),t._v(":Server开启一个端口如8088，ffmpeg执行该命令")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("ffmpeg -re -i D://A.mp3 -ac 1 -f f32le http://localhost:8088\n")])])]),e("p",[t._v("参数解析：")]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("-re")]),t._v(" 以MP3的实际帧率去转码输出 否则很快就传输完了\n"),e("strong",[t._v("-ac channels")]),t._v("   音频通道数 这边指定为1，对应的web端解码时也应该指定(因为pcm是裸数据，没有传输音频头来初始化\n"),e("strong",[t._v("-f f32le")]),t._v("  输出格式，pcm的 PCM 32-bit floating-point little-endian，对应的web端也要指定，后面会讲.更多格式请参考"),e("a",{attrs:{href:"https://trac.ffmpeg.org/wiki/audio%20types",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),e("OutboundLink")],1)])]),t._v(" "),e("p",[e("strong",[t._v("做法(2)")]),t._v(":nodejs直接利用命名把输出流通过管道输出，stdout监听数据传输事件\n代码如下：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('var child_process = require("child_process");\nvar ffmpeg = child_process.spawn("ffmpeg",[\n    "-re","-i",\n    "A.mp3",\n    "-ac","1","-f",\n    "f32le",\n    "pipe:1"                     // Output to STDOUT\n    ]);\n\n ffmpeg.stdout.on(\'data\', function(data)\n {\n    //处理数据.. 如输出到socket_client\n });\n')])])]),e("p",[t._v("WebSocket获取到音频数据message")]),t._v(" "),e("h3",{attrs:{id:"_2-server将数据输出给socket-client"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-server将数据输出给socket-client"}},[t._v("#")]),t._v(" 2.server将数据输出给socket_client.")]),t._v(" "),e("p",[t._v("当然，事先要先开启端口让web端连接")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("var ws = require('websocket.io'), \n//WebSocket 连接3000端口\nserver = ws.listen(3000);\nserver.on('connection', function (socket) \n{\n    //定义全局变量保存socket,在另开启的监听流媒体端口函数中将数据传给socket\n    //或者这里一连上就用上面的做法(2)直接推流给他\n    //两种方案按照自己选择\n    console.log('New client connected');\n}\n")])])]),e("h3",{attrs:{id:"方案-2-完整代码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#方案-2-完整代码"}},[t._v("#")]),t._v(" 方案(2)完整代码")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('var ws = require(\'websocket.io\'), \nserver = ws.listen(3000);\nvar child_process = require("child_process");\nvar i = 0;\nserver.on(\'connection\', function (socket) \n{\n\nconsole.log(\'New client connected\');\n\nvar ffmpeg = child_process.spawn("ffmpeg",[\n    "-re","-i",\n    "A.mp3",\n    "-ac","1","-f",\n    "f32le",\n    "pipe:1"                     // Output to STDOUT\n    ]);\n\n ffmpeg.stdout.on(\'data\', function(data)\n {\n    var buff = new Buffer(data);\n\t//做了base64编码，非必要\n    socket.send(buff.toString(\'base64\'));\n });\n});\n')])])]),e("h3",{attrs:{id:"_3-客户端websocket连接接收数据并处理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-客户端websocket连接接收数据并处理"}},[t._v("#")]),t._v(" 3.客户端WebSocket连接接收数据并处理")]),t._v(" "),e("p",[t._v("base64解码函数：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";\n\t\t\tvar base64DecodeChars = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);\n\n\t\t\t//base64解码 \n\t\t\tfunction base64decode(str) {\n\t\t\t\tvar c1, c2, c3, c4;\n\t\t\t\tvar i, len, out;\n\t\t\t\tlen = str.length;\n\t\t\t\ti = 0;\n\t\t\t\tout = "";\n\t\t\t\twhile(i < len) {\n\t\t\t\t\t/* c1 */\n\t\t\t\t\tdo {\n\t\t\t\t\t\tc1 = base64DecodeChars[str.charCodeAt(i++) & 0xff];\n\t\t\t\t\t}\n\t\t\t\t\twhile (i < len && c1 == -1);\n\t\t\t\t\tif(c1 == -1)\n\t\t\t\t\t\tbreak;\n\t\t\t\t\t/* c2 */\n\t\t\t\t\tdo {\n\t\t\t\t\t\tc2 = base64DecodeChars[str.charCodeAt(i++) & 0xff];\n\t\t\t\t\t}\n\t\t\t\t\twhile (i < len && c2 == -1);\n\t\t\t\t\tif(c2 == -1)\n\t\t\t\t\t\tbreak;\n\t\t\t\t\tout += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));\n\t\t\t\t\t/* c3 */\n\t\t\t\t\tdo {\n\t\t\t\t\t\tc3 = str.charCodeAt(i++) & 0xff;\n\t\t\t\t\t\tif(c3 == 61)\n\t\t\t\t\t\t\treturn out;\n\t\t\t\t\t\tc3 = base64DecodeChars[c3];\n\t\t\t\t\t}\n\t\t\t\t\twhile (i < len && c3 == -1);\n\t\t\t\t\tif(c3 == -1)\n\t\t\t\t\t\tbreak;\n\t\t\t\t\tout += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));\n\t\t\t\t\t/* c4 */\n\t\t\t\t\tdo {\n\t\t\t\t\t\tc4 = str.charCodeAt(i++) & 0xff;\n\t\t\t\t\t\tif(c4 == 61)\n\t\t\t\t\t\t\treturn out;\n\t\t\t\t\t\tc4 = base64DecodeChars[c4];\n\t\t\t\t\t}\n\t\t\t\t\twhile (i < len && c4 == -1);\n\t\t\t\t\tif(c4 == -1)\n\t\t\t\t\t\tbreak;\n\t\t\t\t\tout += String.fromCharCode(((c3 & 0x03) << 6) | c4);\n\t\t\t\t}\n\t\t\t\treturn out;\n\t\t\t}\n')])])]),e("p",[t._v("初始化AudioContext")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("var audio = document.querySelector('audio');\n\t\t\twindow.AudioContext = window.AudioContext || window.webkitAudioContext;\n\t\t\tvar context = new AudioContext();\n\t\t\tvar audioBuffer = null;\n\t\t\t//var context = null;\n\t\t\twindow.addEventListener('load', init, false);\n\n\t\t\tfunction init() {\n\t\t\t\ttry {\n\t\t\t\t\tcontext = new AudioContext();\n\t\t\t\t} catch(e) {\n\t\t\t\t\talert('Web Audio API is not supported in this browser');\n\t\t\t\t}\n\t\t\t}\n")])])]),e("p",[t._v("将base64解码后的string转为ArrayBuffer")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("function str2ab(str) {\n\t\t\t\tvar buf = new ArrayBuffer(str.length); // 2 bytes for each char\n\t\t\t\tvar bufView = new Uint8Array(buf);\n\t\t\t\tfor(var i = 0, strLen = str.length; i < strLen; i++) {\n\t\t\t\t\tbufView[i] = str.charCodeAt(i);\n\t\t\t\t}\n\t\t\t\treturn buf;\n\t\t\t}\n")])])]),e("p",[t._v("继续封装，作为context的数据源")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("var d1 = str2ab(decs)\n\t\t\t\tvar d2 = new DataView(d1);\n\t\t\t\t//PCM流为f32格式\n\t\t\t\tvar data = new Float32Array(d2.byteLength / Float32Array.BYTES_PER_ELEMENT);\n\t\t\t\tfor(var jj = 0; jj < data.length; ++jj) {\n\t\t\t\t\tdata[jj] = d2.getFloat32(jj * Float32Array.BYTES_PER_ELEMENT, true);\n\t\t\t\t}\n\n\t\t\t\tvar audioBuffer = context.createBuffer(2, data.length, 44100);\n\t\t\t\taudioBuffer.getChannelData(0).set(data);\n\n\t\t\t\tvar source = context.createBufferSource(); // creates a sound source\n\t\t\t\tsource.buffer = audioBuffer;\n\t\t\t\tsource.connect(context.destination); // connect the source to the context's destination (the speakers)\n\t\t\t\tsource.start(0);\n")])])]),e("p",[t._v("客户端完整代码")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('<!DOCTYPE html>\n<html>\n\n\t<head>\n\t\t<meta name="viewport" content="width=320, initial-scale=1" />\n\t\t<title>jsmpeg streaming</title>\n\t\t<style type="text/css">\n\t\t\tbody {\n\t\t\t\tbackground: #333;\n\t\t\t\ttext-align: center;\n\t\t\t\tmargin-top: 10%;\n\t\t\t}\n\t\t\t\n\t\t\t#videoCanvas {\n\t\t\t\t/* Always stretch the canvas to 640x480, regardless of its\n\t\t\tinternal size. */\n\t\t\t\twidth: 640px;\n\t\t\t\theight: 480px;\n\t\t\t}\n\t\t</style>\n\t\t<script src=\'http://code.jquery.com/jquery-1.9.1.min.js\'><\/script>\n\t</head>\n\n\t<body>\n\t\t\x3c!-- The Canvas size specified here is the "initial" internal resolution. jsmpeg will\n\t\tchange this internal resolution to whatever the source provides. The size the\n\t\tcanvas is displayed on the website is dictated by the CSS style.\n\t--\x3e\n\n\t\t<audio controls autoplay>\n\t\t\t<p>\n\t\t\t\tPlease use a browser that supports the Canvas Element, like\n\t\t\t\t<a href="http://www.google.com/chrome">Chrome</a>,\n\t\t\t\t<a href="http://www.mozilla.com/firefox/">Firefox</a>,\n\t\t\t\t<a href="http://www.apple.com/safari/">Safari</a> or Internet Explorer 10\n\t\t\t</p>\n\t\t</audio>\n\t\t<script type="text/javascript">\n\t\t\tvar base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";\n\t\t\tvar base64DecodeChars = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);\n\n\t\t\tfunction base64decode(str) {\n\t\t\t\tvar c1, c2, c3, c4;\n\t\t\t\tvar i, len, out;\n\t\t\t\tlen = str.length;\n\t\t\t\ti = 0;\n\t\t\t\tout = "";\n\t\t\t\twhile(i < len) {\n\t\t\t\t\t/* c1 */\n\t\t\t\t\tdo {\n\t\t\t\t\t\tc1 = base64DecodeChars[str.charCodeAt(i++) & 0xff];\n\t\t\t\t\t}\n\t\t\t\t\twhile (i < len && c1 == -1);\n\t\t\t\t\tif(c1 == -1)\n\t\t\t\t\t\tbreak;\n\t\t\t\t\t/* c2 */\n\t\t\t\t\tdo {\n\t\t\t\t\t\tc2 = base64DecodeChars[str.charCodeAt(i++) & 0xff];\n\t\t\t\t\t}\n\t\t\t\t\twhile (i < len && c2 == -1);\n\t\t\t\t\tif(c2 == -1)\n\t\t\t\t\t\tbreak;\n\t\t\t\t\tout += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));\n\t\t\t\t\t/* c3 */\n\t\t\t\t\tdo {\n\t\t\t\t\t\tc3 = str.charCodeAt(i++) & 0xff;\n\t\t\t\t\t\tif(c3 == 61)\n\t\t\t\t\t\t\treturn out;\n\t\t\t\t\t\tc3 = base64DecodeChars[c3];\n\t\t\t\t\t}\n\t\t\t\t\twhile (i < len && c3 == -1);\n\t\t\t\t\tif(c3 == -1)\n\t\t\t\t\t\tbreak;\n\t\t\t\t\tout += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));\n\t\t\t\t\t/* c4 */\n\t\t\t\t\tdo {\n\t\t\t\t\t\tc4 = str.charCodeAt(i++) & 0xff;\n\t\t\t\t\t\tif(c4 == 61)\n\t\t\t\t\t\t\treturn out;\n\t\t\t\t\t\tc4 = base64DecodeChars[c4];\n\t\t\t\t\t}\n\t\t\t\t\twhile (i < len && c4 == -1);\n\t\t\t\t\tif(c4 == -1)\n\t\t\t\t\t\tbreak;\n\t\t\t\t\tout += String.fromCharCode(((c3 & 0x03) << 6) | c4);\n\t\t\t\t}\n\t\t\t\treturn out;\n\t\t\t}\n\n\t\t\tvar audio = document.querySelector(\'audio\');\n\t\t\twindow.AudioContext = window.AudioContext || window.webkitAudioContext;\n\t\t\tvar context = new AudioContext();\n\t\t\tvar audioBuffer = null;\n\t\t\t//var context = null;\n\t\t\twindow.addEventListener(\'load\', init, false);\n\n\t\t\tfunction init() {\n\t\t\t\ttry {\n\t\t\t\t\tcontext = new AudioContext();\n\t\t\t\t} catch(e) {\n\t\t\t\t\talert(\'Web Audio API is not supported in this browser\');\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tfunction str2ab(str) {\n\t\t\t\tvar buf = new ArrayBuffer(str.length); // 2 bytes for each char\n\t\t\t\tvar bufView = new Uint8Array(buf);\n\t\t\t\tfor(var i = 0, strLen = str.length; i < strLen; i++) {\n\t\t\t\t\tbufView[i] = str.charCodeAt(i);\n\t\t\t\t}\n\t\t\t\treturn buf;\n\t\t\t}\n\t\t\tvar ws = new WebSocket("ws://localhost:3000/");\n\t\t\t//ws.binaryType = "arraybuffer";\n\t\t\tws.onmessage = function(message) {\n\t\t\t\t//console.log(message);\n\t\t\t\tvar decs = base64decode(message.data);\n\t\t\t\t//var obj = new Uint8Array();\n\t\t\t\t//obj= decs.split("");\n\t\t\t\tconsole.log(decs);\n\t\t\t\tvar d1 = str2ab(decs)\n\t\t\t\tvar d2 = new DataView(d1);\n\t\t\t\t//PCM流为f32格式\n\t\t\t\tvar data = new Float32Array(d2.byteLength / Float32Array.BYTES_PER_ELEMENT);\n\t\t\t\tfor(var jj = 0; jj < data.length; ++jj) {\n\t\t\t\t\tdata[jj] = d2.getFloat32(jj * Float32Array.BYTES_PER_ELEMENT, true);\n\t\t\t\t}\n\n\t\t\t\tvar audioBuffer = context.createBuffer(2, data.length, 44100);\n\t\t\t\taudioBuffer.getChannelData(0).set(data);\n\n\t\t\t\tvar source = context.createBufferSource(); // creates a sound source\n\t\t\t\tsource.buffer = audioBuffer;\n\t\t\t\tsource.connect(context.destination); // connect the source to the context\'s destination (the speakers)\n\t\t\t\tsource.start(0);\n\t\t\t};\n\t\t<\/script>\n\t</body>\n\n</html>\n')])])]),e("h3",{attrs:{id:"优缺点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#优缺点"}},[t._v("#")]),t._v(" 优缺点")]),t._v(" "),e("p",[t._v("数据量太大，不利于网络传输。\n实现简单，当然并没有什么卵用，权当学习。\n可能唯一有用的就是由于未压缩，音频无损。")]),t._v(" "),e("h2",{attrs:{id:"aac-mp3-flac-alac-直播"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#aac-mp3-flac-alac-直播"}},[t._v("#")]),t._v(" AAC/MP3/FLAC/ALAC 直播")]),t._v(" "),e("p",[t._v("上述编码格式压缩率高，适合网络传输。\n自己做解码肯定是不靠谱的，当然我们后面可以对其进行定制，后话了。\n网上找到了一个js音频解码框架aurora.js\n"),e("strong",[t._v("github wiki:")]),e("a",{attrs:{href:"https://github.com/audiocogs/aurora.js/wiki",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/audiocogs/aurora.js/wiki"),e("OutboundLink")],1),t._v("\n严格意义上来说，他只是用来初始化解码器和音频播放的。\n传输过来的音频数据，第一包会带有这些音频编码信息的数据，交由aurora.js处理后，识别是哪一种音频编码格式后，再调用具体的JS解码器去做解码，解码后的数据交由aurora去渲染。")]),t._v(" "),e("p",[t._v("注：JS解码器需要另外添加文件，aurora中并没有，需要解什么数据就引入相应的JS文件")]),t._v(" "),e("blockquote",[e("p",[t._v("这里是作者的"),e("a",{attrs:{href:"https://github.com/audiocogs",target:"_blank",rel:"noopener noreferrer"}},[t._v("所有工程"),e("OutboundLink")],1),t._v("，里面都可以找到src文件。\n当然，如果想直接用aac.js/mp3.js等，可以看这个"),e("a",{attrs:{href:"http://audiocogs.org/codecs/flac/",target:"_blank",rel:"noopener noreferrer"}},[t._v("demo"),e("OutboundLink")],1),t._v(",复制里面的js文件即可")])]),t._v(" "),e("h3",{attrs:{id:"先来个用xhr访问服务器文件-进行解码播放的。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#先来个用xhr访问服务器文件-进行解码播放的。"}},[t._v("#")]),t._v(" 先来个用XHR访问服务器文件，进行解码播放的。")]),t._v(" "),e("p",[t._v("很简单，把test.aac文件放到HTTP服务器下\n客户端这样写就可以了")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('<!DOCTYPE html>\n<html>\n\n\t<head>\n\t\t<meta charset="UTF-8">\n\t\t<title></title>\n\t\t<script src="aurora.js"><\/script>\n\t\t<script src="aac.js"><\/script>\n\t</head>\n\t\n\t<body>\n\t\t<script>\n\t\t\tvar player = AV.Player.fromURL(\'http://localhost/testAAC/test.aac\');\n\t\t\tplayer.play();\n\t\t<\/script>\n\t\t\n\t</body>\n\n</html>\n')])])]),e("h3",{attrs:{id:"用xhr的怎么能算是直播呢"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用xhr的怎么能算是直播呢"}},[t._v("#")]),t._v(" 用XHR的怎么能算是直播呢！")]),t._v(" "),e("p",[t._v("有人对aurora的数据获取过程做了一个修改，改用websocket\n见："),e("a",{attrs:{href:"https://github.com/fabienbrooke/aurora-websocket",target:"_blank",rel:"noopener noreferrer"}},[t._v("aurora-websocket"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("流程相对上面那个复杂一点点。\n1.server:D:\\nodejs\\projects\\aurora_ws_aac\\server.js\n代码应该很好懂，是live_pcm的第一种做法\n如下：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("var http = require('http');\nvar connect = require('connect');\nvar ws = require('ws');\n\n// Consume the ffmpeg audio stream\nvar audio_consumer = http.createServer( function(req, res) {\n    console.log('Audio Stream Connected: ' + req.socket.remoteAddress);\n    req.on('data', function(data){\n        //When video data arrives, send to all the producer's clients\n        for (var i in audio_producer.clients){\n            audio_producer.clients[i].send(data, {binary:true});\n        };\n    });\n\n    req.on('end', function () {\n        res.end(\"Thanks\");\n    }); \n\n    req.on('error', function(e) {\n        console.log(\"ERROR ERROR: \" + e.message);\n    });\n}).listen(8081, \"127.0.0.1\");\n\n\nvar audio_producer = new ws.Server({port: 8071});\naudio_producer.on('connection', function(socket) {\n\n    console.log('Audio Client Connected'); \n\n    socket.on('close', function(code, message){\n        console.log( 'Disconnected Audio WebSocket ('+audio_producer.clients.length+' total)' );\n    });\n});\n\nconsole.log('Awaiting ws Audio Connections on http://127.0.0.1:8071/');\n")])])]),e("p",[t._v("8071端口用于获取ffmpeg的推流**"),e("code",[t._v("[audio_producer]")]),t._v("**\n8081端口用于通过websocket推送数据给Web端**"),e("code",[t._v("[audio_consumer]")]),t._v("**\nWeb端也是很简单的代码：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('<!DOCTYPE html>\n<html>\n\n\t<head>\n\t\t<meta charset="UTF-8">\n\t\t<title></title>\n\t\t<script src="jquery-1.11.1.min.js"><\/script>\n\t\t<script src="aurora.js"><\/script>\n\t\t<script src="aac.js"><\/script>\n\t\t<script src="aurora-websocket.min.js"><\/script>\n\t\t<script type="text/javascript">\n\t\t\t//<![CDATA[\n\t\t\t$(document).ready(function() {\n\t\t\t\tvar player=AV.Player.fromWebSocket(\'ws://localhost:8071\');\n\t\t\t\tplayer.play();\n\t\t\t});\n\t\t\t//]]>\n\t\t<\/script>\n\t</head>\n\t\n\t<body>\n\t\t\x3c!--<script>\n\t\t\tvar player = AV.Player.fromURL(\'http://localhost/testAAC/test.aac\');\n\t\t\tplayer.play();\n\t\t<\/script>--\x3e\n\t\t\n\t</body>\n\n</html>\n')])])]),e("p",[t._v("好了，现在我们开启server，HTTP服务器，访问\nhttp://localhost/testAAC/test.html 。\n然后再进行ffmpeg推流")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("ffmpeg -re -i d://test.aac http://127.0.0.1:8081/a.aac\n")])])]),e("p",[e("strong",[t._v("a.aac解释：")]),t._v("\n反正要送到8081端口，后面可以指定一个a.aac，可以理解为文件容器吧。\n否则由于前面不指定-f，直接送到http://127.0.0.1:8081/会报*"),e("code",[t._v("Invalid argument错误")]),t._v("*")]),t._v(" "),e("h3",{attrs:{id:"测试结果"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#测试结果"}},[t._v("#")]),t._v(" "),e("strong",[t._v("测试结果：")])]),t._v(" "),e("p",[t._v("ffmpeg一进行推送，web端马上就可以播放。")]),t._v(" "),e("h3",{attrs:{id:"优点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[t._v("#")]),t._v(" "),e("strong",[t._v("优点：")])]),t._v(" "),e("p",[t._v("音频压缩率高，跨平台。这样应该算是绝对大的优势了吧。")]),t._v(" "),e("h3",{attrs:{id:"存在的问题及解决方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#存在的问题及解决方案"}},[t._v("#")]),t._v(" "),e("strong",[t._v("存在的问题及解决方案：")])]),t._v(" "),e("p",[e("strong",[t._v("问题1:不支持IE11。")]),t._v("\n描述：IE11虽然支持WebSocket,但是不支持Web Audio API。所以也就不能通过AudioContext播放解码后的pcm数据。\n"),e("strong",[t._v("解决方案：")]),t._v(" IE只存在于PC端，那么我们就没必要一定用H5的方案了，可以直接用flash的解决方案：rtmp")]),t._v(" "),e("p",[t._v("~~ "),e("strong",[t._v("问题2：client必须先连接server再进行推流，不是先推流client随时连上都可以播放。")]),t._v(" ~~\n~~ 描述：先连上再推流，是为了获取前几包里面的数据用来初始化解码器。如果没有获取到的话，会自动报错。目前我们的应用场景是后推流的，所以这个问题对我来说不是问题。当然考虑以后的拓展，有以下解决方案。~~\n~~ "),e("strong",[t._v("解决方案：")]),t._v(" ~~\n"),e("s",[t._v("(1)server获取ffmpeg推流的时候，保存前几包数据【当然这边需要了解编码格式】到内存。client connect连接后，server判断是否ffmpeg已经推流到server过了，推流过则补发编码信息包。")]),t._v(" "),e("s",[t._v("(2)js这边做一个限定，和live_pcm一样，编码信息都固定好，这样就比较没有可拓展性。")]),t._v("\n【20160825更新】")]),t._v(" "),e("blockquote",[e("p",[t._v("aac等编码有分带内传输还是带外传输。\n"),e("strong",[t._v("带内传输")]),t._v("就是每一帧都会带有编码信息，适应编码不断编码的情况，相应携带的数据就会比较多；\n"),e("strong",[t._v("带外传输")]),t._v("第一包就指定了编码信息，后面的帧都按这个编码信息来。不能适应编码修改情况，未处理情况下不能从流中间播放，相应的携带数据会比较少。\n实验测试aurora都是支持的。")])]),t._v(" "),e("h1",{attrs:{id:"aurora-js源码解析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#aurora-js源码解析"}},[t._v("#")]),t._v(" aurora.js源码解析")])])}),[],!1,null,null,null);e.default=a.exports}}]);