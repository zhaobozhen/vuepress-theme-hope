if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,d,i)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const f={uri:location.origin+a.slice(1)};return Promise.all(d.map(a=>{switch(a){case"exports":return s;case"module":return f;default:return e(a)}})).then(e=>{const a=i(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-32927a2a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"c5fc18a92bfac5d71958b1e3a585c416"},{url:"article/index.html",revision:"81f9b7345049a1e631e1394c0bdf912e"},{url:"assets/css/0.styles.8a51d0c5.css",revision:"9a4f0d70ee0ab71fb408b6c7a9bbc607"},{url:"assets/js/123.b32219bd.js",revision:"4e83c3afa94342ae2420d848821a6da6"},{url:"assets/js/124.ab08a133.js",revision:"8a570acc4574c0209010f8d85ebe6b8d"},{url:"assets/js/125.51c734a6.js",revision:"9028f958434e341d5acef62a7e87d14f"},{url:"assets/js/126.b8c60af4.js",revision:"c024735c9f018d7e83fe49f492fd152d"},{url:"assets/js/app.f45ac1a2.js",revision:"f22ee188197050f0903730272d030053"},{url:"assets/js/layout-Blog.06c2e75f.js",revision:"421d6602880fcdf21ca72dd71265ffc9"},{url:"assets/js/layout-Blog~layout-Layout.0a516b7e.js",revision:"4d476bb120020e1cb88365044983fcf1"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.8785490a.js",revision:"d6e90d4e8b69c9f3292431de0a6726d0"},{url:"assets/js/layout-Layout.0a2e1b0b.js",revision:"4c67c0bfd670e86315fae1f4d6035aa3"},{url:"assets/js/layout-NotFound.52c29617.js",revision:"efa109ca952d4cd6c50660e8be26f29e"},{url:"assets/js/page-@mr-hopeplugin-pwa--051692f2.60690f66.js",revision:"54c73d97be23d36e9420f54539951fe4"},{url:"assets/js/page-@mr-hopepwa--afe3f12c.b677c1c4.js",revision:"997324783fc4faa06214b1661f9398e9"},{url:"assets/js/page-AboutVuePress--4a71114e.c15e2d4f.js",revision:"1cae30022fad6435dabce6188a409dee"},{url:"assets/js/page-Basic--770cb96b.ddacb0a5.js",revision:"ba5597fd2755e548f16dc28f12bb9904"},{url:"assets/js/page-Bloghomepage--64265752.9c1a39d5.js",revision:"f5e3a418e406009e91b2d1d6642e4dfc"},{url:"assets/js/page-Blogrelated--17c260a2.8c6337af.js",revision:"1826951207b86cafbc2d2f1c8404a5e2"},{url:"assets/js/page-CommentFunction--5bb6671c.d30f2559.js",revision:"2fe0f2852d4cbfbb6fcbbf7be48727ab"},{url:"assets/js/page-Commonproblems--2b571e9b.43e60239.js",revision:"86ed5a038a4e0df76ce7c485454def46"},{url:"assets/js/page-Config--35a0a7d9.c49ac51d.js",revision:"bc5e6f7cf2d3975229aae267a6ca9623"},{url:"assets/js/page-Customalignment--4f21aa5c.287965cf.js",revision:"5f14a8276614f8d60e68ab967a1dc205"},{url:"assets/js/page-DarkmodeandThemecolor--e23e731c.31156b47.js",revision:"adc068f3466c213aca998a2c96eec1f2"},{url:"assets/js/page-DefaultThemeConfig--3cbef5e2.79107c0e.js",revision:"d422c3b660577672d7247073d35476dd"},{url:"assets/js/page-Demos--f328658e.fa34aed8.js",revision:"d244177a1f9ba01bddf0e50880704207"},{url:"assets/js/page-EmojiList--41bb29b9.2f0d9921.js",revision:"865a111a99081233036279eebf477301"},{url:"assets/js/page-Emoji列表--404e6737.695cd49e.js",revision:"f566f0e558bd6a07ef60544accf1b418"},{url:"assets/js/page-Encryptionfunction--181bdc9c.297c704c.js",revision:"5b43c1f8180b328604cbeaeaf75739ac"},{url:"assets/js/page-FileStructure--665a4f1c.745009af.js",revision:"74ef1a979d8bd52d2839d399606529fe"},{url:"assets/js/page-Flowchart--7ce6d974.fa303154.js",revision:"30c68bf766e8676b93d250a7a2306d45"},{url:"assets/js/page-Footnote--0c733e52.55cd2698.js",revision:"bb506e871a6bc4a81bce714282ed6993"},{url:"assets/js/page-HomePage--5834599c.db1d7124.js",revision:"278072ec2d1e64805180a62cdfeebd49"},{url:"assets/js/page-InstallUsage--0ab466d2.9eb17186.js",revision:"2da2645a13414f06a04c745303da6ad8"},{url:"assets/js/page-Introduction--d4910962.bff9768a.js",revision:"686d40a4f1bd5085e6c4e6a12c4ccaff"},{url:"assets/js/page-Layout--12bd4f0e.f3b1da33.js",revision:"961d5fdc27326bd259cdf7e02f5b7b25"},{url:"assets/js/page-MarkdownDEMO--c3e1bfdc.08354604.js",revision:"7e5d36d21117c4573c2556a532ed1202"},{url:"assets/js/page-MarkdownEnhance--ad9dba8e.65a74131.js",revision:"92361f8837721d4b5642e75aad6dfcec"},{url:"assets/js/page-MarkdownIntroduction--270989ce.28bd05b6.js",revision:"974f9be1e67559d26967c811557c8353"},{url:"assets/js/page-Markdown介绍--0e6891b6.67b6d451.js",revision:"75f800cdeefe2f887388ae77db806465"},{url:"assets/js/page-Markdown增强--6162938f.53fe7941.js",revision:"151360f7aeb4cf95a91ff22373bf22d7"},{url:"assets/js/page-Markdown示例--5479fe88.402d384c.js",revision:"889d67f5d20c51d4d2060d20c32b6f71"},{url:"assets/js/page-Markup--6b1f341c.fdcd131c.js",revision:"c6678a59f75fe806311214144dfd107b"},{url:"assets/js/page-Nature--749fb09c.3c9590f2.js",revision:"bf488779f793a67f01362aafff2b4ab7"},{url:"assets/js/page-NavBar--c7bf87dc.26c4e383.js",revision:"7b02e34f6160724de9c0356b62ebccb9"},{url:"assets/js/page-NewComponent--1d138c72.b04464d7.js",revision:"c7608c263aae241d2d7eb9bc1764a1a6"},{url:"assets/js/page-Newfeature--5136c541.ecd9125f.js",revision:"634aa6bb9dca088c4f7d6a14215bf549"},{url:"assets/js/page-Object--16031ab2.3e336fb5.js",revision:"884ef760130f2a52e11d3eac659bd97c"},{url:"assets/js/page-Page--af17b59c.7156c3dc.js",revision:"f68036edcd696c02d092c7fd5f582ca5"},{url:"assets/js/page-PageConfiguration--0aacc152.669c817a.js",revision:"c029c11e86d70377e8022e158373f1a8"},{url:"assets/js/page-Pageinformation--71efd5d2.270d082f.js",revision:"a094f7c715a05a30acc2f8dc42f26c9a"},{url:"assets/js/page-People--2182769c.7f40af7f.js",revision:"f53c4576c0818b25ca2abe94c0772504"},{url:"assets/js/page-Place--951cdc00.7c7b7281.js",revision:"6ac01ce6a2948404efc0caf9944e0a5e"},{url:"assets/js/page-PluginDescription--137c6c07.2f1aa5f0.js",revision:"c9a937380f7ad8323c831d73c304cad3"},{url:"assets/js/page-Plugins--adbf415c.87b596fd.js",revision:"db530eaf7c2a063209c98ddabb517540"},{url:"assets/js/page-Presentationsupport--8f8e54dc.f3d2506b.js",revision:"c61f17682aebf04e8a9828cc9ecb9505"},{url:"assets/js/page-SEOandSitemap--5934b3b2.852d1187.js",revision:"32763ad84357546bedb64fb10ddcef74"},{url:"assets/js/page-SEO和Sitemap--35ca8b22.9bb385e5.js",revision:"b22216326543f23fd64d938fdada4b2e"},{url:"assets/js/page-Sidebar--2fa1ea2c.37e3278a.js",revision:"36735e7dcb984ed1d8b3fe54e2ad2446"},{url:"assets/js/page-stylusconfiguration--6796cdf2.c7f38cb5.js",revision:"87923b8cbd111fc2487079e38233397f"},{url:"assets/js/page-stylus配置--0ce19a82.fe28c3ff.js",revision:"d8988b7c6c13811c3fbf4aa381c1ce98"},{url:"assets/js/page-SuperscriptandSubscript--895c91b8.52b6e441.js",revision:"dcbc96fedb70edf6d56eed06082b9278"},{url:"assets/js/page-Symbol--a9259c5c.f1382c58.js",revision:"e3bca0043bd82bcadaac61b114fd942a"},{url:"assets/js/page-TexSupport--64cb5e50.d1a649b8.js",revision:"59bc53a8a8108ba1a92c327f3253c514"},{url:"assets/js/page-Tex语法支持--1e02b152.ad47ac25.js",revision:"ace04d3e7eea6ab78414f4b711bc007f"},{url:"assets/js/page-ThemeConfig--1120a0ce.7a94e3d8.js",revision:"034ff0bd917967d19b95e9a706ca35fb"},{url:"assets/js/page-ThemeConfig--1726e14e.c125aef2.js",revision:"aa0d67175e67052a3127086b68ef93a2"},{url:"assets/js/page-ThemeFeatureConfig--2ccd2db8.d33bdac4.js",revision:"412abbe434756a1a17bf90b0a12a7c5e"},{url:"assets/js/page-ThemeLayoutConfig--733513aa.c0202393.js",revision:"b1789637d9555ff425f0e685c421b86f"},{url:"assets/js/page-ThemePluginConfig--958196dc.d10d7342.js",revision:"fab4def496d3ae30b9e8f2cb4a7d06ca"},{url:"assets/js/page-TSsupport--09728ac8.2ba881a9.js",revision:"5d2b3dbf14f012c8aa430b38aefc809f"},{url:"assets/js/page-TS支持--4625f812.feef1296.js",revision:"5ce2ac431998f56e7c747caa3553cfa1"},{url:"assets/js/page-VuePress--b7060eee.1273f3cd.js",revision:"ecaba8f45bfa427a430261aec91ff64a"},{url:"assets/js/page-vuepress-plugin-container--31498112.2abee8d4.js",revision:"c4a2aaa83bd2b87dcde3eaa2ef0aa4a3"},{url:"assets/js/page-vuepress-plugin-container--606dbc5c.8e6798f0.js",revision:"27228b5eb6d8d2cc0a86117d7c95c031"},{url:"assets/js/page-vuepress-plugin-copyright--5242f65c.3a3b5dc8.js",revision:"351df30272aa25fea68016a29bb70a8e"},{url:"assets/js/page-vuepress-plugin-copyright--6d3913d0.95f84dde.js",revision:"c31a457cb8211b687f59168c7b3ce390"},{url:"assets/js/page-vuepress-theme-hope--354da24e.df26737f.js",revision:"6a75b81bbc47c245404eb1990f271181"},{url:"assets/js/page-vuepress-theme-hope--776d8369.a93559ca.js",revision:"475e6edfb6c5acba5769c8fe5349fdda"},{url:"assets/js/page-VuePressCases--082972f2.bdda760e.js",revision:"f5deb9dd3ea997ae7f336dfa552fda79"},{url:"assets/js/page-VuePresscommands--9f3f316c.4d356e20.js",revision:"e058dac7b1bac2b4e2763c7d2963c398"},{url:"assets/js/page-VuePress案例--531d5f3e.e1820e26.js",revision:"44eb33cbe1f8e0475c1df0af94daff43"},{url:"assets/js/page-上下角标--8efed9dc.84b29423.js",revision:"f0963c28228c8a127660da350817f9b7"},{url:"assets/js/page-主题功能配置--5bb71452.978bd1fa.js",revision:"a53f13c81c156cb3d1a8b1a1a9b8f976"},{url:"assets/js/page-主题布局配置--7db7eff2.cc947502.js",revision:"3167516a24239cb50f4ba7d308fcf3c7"},{url:"assets/js/page-主题插件配置--1b0c3e98.17b85f0d.js",revision:"24284ffeb84459fd149a1399a6a8dc48"},{url:"assets/js/page-主题配置--21dc088d.c98b83eb.js",revision:"785ec29d7f07f87e6554493525e6f50d"},{url:"assets/js/page-主题配置--2c572572.846c1c05.js",revision:"ae903fe1c06c6739cc771012c9934d42"},{url:"assets/js/page-人物--b4fc27dc.ceb79a81.js",revision:"ef3da1994ffcc630d0d4f0549243dc79"},{url:"assets/js/page-介绍--2e99d139.ddd78a06.js",revision:"930f501014a9d0c06447d9c1dd2fe6e9"},{url:"assets/js/page-侧边栏--43054cb2.fde550b9.js",revision:"c78854ee054fd15d77efb0c1e6980605"},{url:"assets/js/page-加密功能--2361b7e4.46470cf2.js",revision:"18ea607a0c91db7cbfd658a0fda2bbcf"},{url:"assets/js/page-博客相关--6a3fd4f2.1735a369.js",revision:"292ae36b5298a922c39fcab03b384e1a"},{url:"assets/js/page-博客首页--1eb2b298.cb746b67.js",revision:"e316eb648723830adfbc2ff2d8648fd7"},{url:"assets/js/page-地点--6710785c.fa811c42.js",revision:"b2d64daf6f2b77be6ff40638cfbc8bd0"},{url:"assets/js/page-基础知识--4d466a79.6e3f9c82.js",revision:"5b9e4e7530397365fc40bd0df98b1c10"},{url:"assets/js/page-安装使用--76e0e5b0.8856efb8.js",revision:"47aa6476d394dc92d8297cde710bc816"},{url:"assets/js/page-对象--e150da9c.612b92b9.js",revision:"734d1baa00c87aa1ec3770d69921e994"},{url:"assets/js/page-导航栏--183844fc.dfc5824b.js",revision:"73eb3708329022ec8b81c60f6eb58f80"},{url:"assets/js/page-布局--fa93e36a.1441510c.js",revision:"864389c15213bf3348a0879ad8b68b0d"},{url:"assets/js/page-常见问题--10ab790e.686a2ef0.js",revision:"9feb16a2614edb6f31bae18036cb6654"},{url:"assets/js/page-幻灯片支持--5808e664.c1ab7d9d.js",revision:"a83d0894d8f3ecaf05fd3a3c35c01ea1"},{url:"assets/js/page-插件--32355f10.2bb47f65.js",revision:"9e5bea6e19756b9a94f0c557089f4ad0"},{url:"assets/js/page-插件说明--cbca1c8e.92b7f8c6.js",revision:"ada9c7f503edd8e2c8a5472e9a0a5a0a"},{url:"assets/js/page-文件结构介绍--ed6a9eb4.dfe64b00.js",revision:"27c92ae636a8ad57b3a5c778ab97ba11"},{url:"assets/js/page-新增特性--30c6c799.233e013b.js",revision:"9dab0ca74ade3b6474f37107c8fac8bd"},{url:"assets/js/page-新增组件--0979095e.17c72846.js",revision:"217349b098a1dc746d9317f3f4790ea9"},{url:"assets/js/page-标记--0ac52704.5714061e.js",revision:"2efb77e39ca418810d2a21c3ff9a0991"},{url:"assets/js/page-流程图支持--582eff1c.5d600e24.js",revision:"9d77a62831c191de83e80a36d3088c35"},{url:"assets/js/page-深色模式与主题色--01662674.c37fa111.js",revision:"2d13922f3eb5192c673f3519ad829698"},{url:"assets/js/page-符号--2db8fb80.5b4fa331.js",revision:"aa7a57be63772ba32bbc6a43e8708b96"},{url:"assets/js/page-脚注--17d88350.8a9e1921.js",revision:"99794c75264f6287681575b0c4b92f68"},{url:"assets/js/page-自定义对齐--048d31dc.159edcd1.js",revision:"80aedf46d03e0ccd56bf4d6296b4c049"},{url:"assets/js/page-自然--7ec33be2.6bc7706d.js",revision:"7a6264075fbe72a0ea21e785d962cd8b"},{url:"assets/js/page-评论功能--350aff9a.bfcb371b.js",revision:"e4dec43dd34f517f4b8c80636ebb7ae9"},{url:"assets/js/page-配置--d315f8fe.1fa66a7d.js",revision:"f4fb2b878df6d147bf36e363987b0fc8"},{url:"assets/js/page-页面--78423bfe.bea57908.js",revision:"f551c5334c79c85bddb1a61adb18043e"},{url:"assets/js/page-页面信息--455b9800.0451dbe2.js",revision:"665279caae747f87fc27bef2b0a3f863"},{url:"assets/js/page-页面配置--02399408.c08b205e.js",revision:"db7e068bc055161547a48da561197056"},{url:"assets/js/page-项目指令--2f3d7c1c.3982a6e1.js",revision:"369eeb49b122bda24643cb68e5813780"},{url:"assets/js/page-项目案例--1f3d6482.660978e9.js",revision:"a22a3895049a0482d763aae4c3c3923e"},{url:"assets/js/page-首页--79a22944.30125ece.js",revision:"4d7abb63963eedffde0abae0514ad018"},{url:"assets/js/page-默认主题配置--0d5b7f32.d7604113.js",revision:"47ed15d839369fcdc00c764eb88023a1"},{url:"assets/js/vendors~docsearch.4c4065ee.js",revision:"ea805627d0da8d19d65a9113dc75b01b"},{url:"assets/js/vendors~flowchart.9552a0fe.js",revision:"ca1e865cc6944441556bbe760e5a82fc"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.b9db2285.js",revision:"d4b4e2a0a77a0699abcead6ab5d46765"},{url:"assets/js/vendors~photo-swipe.36f9d5dc.js",revision:"4a67927e6c9b3dd950cdd1a6e0f3dc24"},{url:"assets/js/vendors~reveal.e1918b2e.js",revision:"1ee9e814527bfb4c7a22f89d939b64c1"},{url:"assets/js/vendors~valine.43eaf4e5.js",revision:"b6ba8607ae1642a56c4999b2f2903755"},{url:"basic/index.html",revision:"6475dfb90da7744c8e088f9e35d046e8"},{url:"basic/markdown/demo/index.html",revision:"e2429685a7ad9d9d4d658feaf3526a84"},{url:"basic/markdown/emoji/index.html",revision:"22ff56fc1e07ae71b47f6baf5f8df92c"},{url:"basic/markdown/emoji/nature/index.html",revision:"c71f5bb095a92cb9c7850a6d6f785960"},{url:"basic/markdown/emoji/object/index.html",revision:"0de1f4df85b7858d40bf03f81e3662f8"},{url:"basic/markdown/emoji/people/index.html",revision:"32746604b36838e6056b4db6ba20642c"},{url:"basic/markdown/emoji/place/index.html",revision:"8efd3d286343f5475883ddd49a10ea16"},{url:"basic/markdown/emoji/symbol/index.html",revision:"cf9ce524ec8c278354256b7d78ae741e"},{url:"basic/markdown/index.html",revision:"30f6e512bea93a005f494afd6df8b719"},{url:"basic/vuepress/case/index.html",revision:"0c40d591ccf29daa1d1574c2c3587e54"},{url:"basic/vuepress/command/index.html",revision:"3b2c52ae6d6ff669a9935a830ad41f99"},{url:"basic/vuepress/file/index.html",revision:"3a117fc02605c8677411912f310b8c87"},{url:"basic/vuepress/index.html",revision:"5cda15899d18b17fa2cbc224427fc211"},{url:"basic/vuepress/plugin/index.html",revision:"62fbd2fe8c63c23bf1d9afba6a53c5e0"},{url:"basic/vuepress/theme/index.html",revision:"b2f0518739e9cc95effc4e4158f1396b"},{url:"category/basic/index.html",revision:"24585fd7340e461cadf51ede1de355ae"},{url:"category/basic/page/2/index.html",revision:"446e0c595562a313511d0c7ebd84f998"},{url:"category/basic/page/3/index.html",revision:"619074c9763ab9e5e41da4903c598e50"},{url:"category/config/index.html",revision:"5432a808abed91f841ed00648f96df3f"},{url:"category/config/page/2/index.html",revision:"65db1653bdc867fc8e60ecb44c1426ee"},{url:"category/config/page/3/index.html",revision:"b8ae7ca37e9e9209ac9cb87eb4bd06c8"},{url:"category/demo/index.html",revision:"eb4c8b4e32ba97e8aba4e7a57b8515df"},{url:"category/FAQ/index.html",revision:"10b8e8e01835ca725f573d615741fa05"},{url:"category/feature/index.html",revision:"f2d130ec5cf3f6e472c7ef06adb5a007"},{url:"category/feature/page/2/index.html",revision:"e26ac96900dfc026b9715daf1c8e4c33"},{url:"category/index.html",revision:"bde9afc3ce0dc913c194ebf8be428e1b"},{url:"category/instruction/index.html",revision:"e5dd5ad8a494998322c98e457c41c1c4"},{url:"category/layout/index.html",revision:"9cb9d4a0a4320c03813e7404db0e22f8"},{url:"category/layout/page/2/index.html",revision:"d217a3d1313716de06df418e9f19472f"},{url:"category/markdown/index.html",revision:"22a3f1d3b923a0c72b2e388aa56e2da4"},{url:"config/index.html",revision:"b81f8580ad5a3c759ace47b94dc99661"},{url:"config/page/index.html",revision:"9a63bfd3d954cd0c1f8f61dfba13e126"},{url:"config/plugin/container/index.html",revision:"c0dceb814254aed68e5a7eba2f4d39b2"},{url:"config/plugin/copyright/index.html",revision:"aa8cba3ed20d96162a397c18003026c3"},{url:"config/plugin/index.html",revision:"f3b0c1e35701b87c3fd02f285435a458"},{url:"config/plugin/pwa/index.html",revision:"69afba1af53f9828154b694c3c7a121c"},{url:"config/stylus/index.html",revision:"97d326b39b8bfa51e05b3714c1d52919"},{url:"config/theme/apperance/index.html",revision:"06e6d9f31c8fc68f38fe5326a79ee942"},{url:"config/theme/default/index.html",revision:"3c5e91be8722ca2f52df43035a8ba707"},{url:"config/theme/feature/index.html",revision:"5f044ce77901089db0eca6a99cd76b1b"},{url:"config/theme/index.html",revision:"3e046a9698f4c6d2b53c412a465bbf1c"},{url:"config/theme/plugin/index.html",revision:"4a3b2b8c6a23c658420ad349d69ce3b4"},{url:"demo/index.html",revision:"285e7dfa31cc28c2841f6807fa186cdd"},{url:"FAQ/index.html",revision:"726c720153b4ddf5d00c4cf759605bc2"},{url:"guide/feature/blog/index.html",revision:"3893cf45ecd89f7ad803c7fdfed1e464"},{url:"guide/feature/comment/index.html",revision:"ef3ddd3127868e10d7e5f877adbbdfc3"},{url:"guide/feature/component/index.html",revision:"fecc5cc78d205cb25d488522de5c6542"},{url:"guide/feature/encrypt/index.html",revision:"78901ae605af5e974726c6c782c036c0"},{url:"guide/feature/index.html",revision:"a6340ba33dce483b94460287d6fb8087"},{url:"guide/feature/markdown/align/index.html",revision:"c5ae7534382d0ecf9fc00662e799f7fb"},{url:"guide/feature/markdown/flowchart/index.html",revision:"9ba57f9c837d20251aedfb0f51ff7483"},{url:"guide/feature/markdown/footnote/index.html",revision:"3cb7a42e5f81dc541b2a2a4a14da5c45"},{url:"guide/feature/markdown/index.html",revision:"62e8405919c855f089ff969415313b5f"},{url:"guide/feature/markdown/mark/index.html",revision:"b6e6dcbd060caba105b6d116586ba95f"},{url:"guide/feature/markdown/presentation/index.html",revision:"e29c5772d2417f0f35e57676e679fd0e"},{url:"guide/feature/markdown/sup-sub/index.html",revision:"c948b018dddf5309fc68a6f978326f44"},{url:"guide/feature/markdown/tex/index.html",revision:"4e3969f69511649c5342c9962ffc73ba"},{url:"guide/feature/page-info/index.html",revision:"b9d91c61fb5a6bfaa4732fa481a3734c"},{url:"guide/feature/seoAndSitemap/index.html",revision:"6edd8e4eb854a58750ce77e9a7b717e9"},{url:"guide/feature/theme/index.html",revision:"cf4b1b096378675a8742704c3c697902"},{url:"guide/feature/typescript/index.html",revision:"95191f426bfc3f6db8b3c72150a964f6"},{url:"guide/index.html",revision:"3c1d56963aeeb606fbbbb8ac65cce09d"},{url:"guide/install/index.html",revision:"55e3af6cf0231c9a32d060cd7768c335"},{url:"guide/layout/blog/index.html",revision:"9ca9bfb5ab715d7da3447bebd42eca7d"},{url:"guide/layout/home/index.html",revision:"831ef4415419ef8b420a86ee8449f7f4"},{url:"guide/layout/index.html",revision:"d5ce2e394381c08f19ea11745aa0b4d8"},{url:"guide/layout/navbar/index.html",revision:"eff55d7690dc82d590c687ad8a489035"},{url:"guide/layout/page/index.html",revision:"157e95446610a4fadf6f95e7a1e93cfe"},{url:"guide/layout/sidebar/index.html",revision:"79f4ccac9c8e88ccaf3526442e5c326a"},{url:"index.html",revision:"61908463a41ffb01af15345b39643ec8"},{url:"tag/blog/index.html",revision:"f5469a95fb27443c2b2bcaefee185cb4"},{url:"tag/comment/index.html",revision:"1ffe7558354bee5d9d77a6977dfb0ad6"},{url:"tag/components/index.html",revision:"bc97c08f20e7ffd2941593f763214798"},{url:"tag/config/index.html",revision:"5c26355a97ebe8bc97bc5322d67a67e9"},{url:"tag/config/page/2/index.html",revision:"7f17be9f9b72191c5431ef2e4bb79c27"},{url:"tag/config/page/3/index.html",revision:"6ea7799a4670a8bb2799c68fc5aedb4d"},{url:"tag/emoji/index.html",revision:"b1b998a5fe5bb6039bfaf17a5cdead9d"},{url:"tag/emoji/page/2/index.html",revision:"a80e5a43edfd2744f3aaded898454fa3"},{url:"tag/encrypt/index.html",revision:"90274a72fc72fffb1636de9d6525475e"},{url:"tag/feature/index.html",revision:"678448188c93ecf7ad4310a02e7ed199"},{url:"tag/feature/page/2/index.html",revision:"2aca9ec09ad3b51d0da2b0fc6f2ffeb2"},{url:"tag/frontmatter/index.html",revision:"25bbaee0561fade29b905248d6bf3db3"},{url:"tag/function/index.html",revision:"fec0f2731d85e394d7b0b2bb8db0e429"},{url:"tag/function/page/2/index.html",revision:"25f490f001c575815d16ee2fc3fca8ac"},{url:"tag/home/index.html",revision:"706198486b5bc746035b273e7e3dc5cc"},{url:"tag/index.html",revision:"5b0c23b8f3408699e58f1e61209b0acc"},{url:"tag/intro/index.html",revision:"a5638e3c0c77915b7be3747fdb6b1eaf"},{url:"tag/layout/index.html",revision:"51416ba03d730cb75d03af0346b9166a"},{url:"tag/layout/page/2/index.html",revision:"11cda4fab0500e916af57d4d47b14546"},{url:"tag/markdown/index.html",revision:"27ed1f2431bf0b74d89712a51d673cfe"},{url:"tag/markdown/page/2/index.html",revision:"d12e5a0e82baf121051adffa63726b4c"},{url:"tag/markdown/page/3/index.html",revision:"83d4fd73c905936a68bb32491e40b07b"},{url:"tag/navbar/index.html",revision:"8afacdc0270b64d2202d040f7fdb4c29"},{url:"tag/page-info/index.html",revision:"e67bfd4bc94dedd6a15bb86bb5350117"},{url:"tag/plugin/index.html",revision:"9f19f2d18dd7cc50be02e458acb51434"},{url:"tag/seo/index.html",revision:"627d0fa937ef3a9462e11f6602bd353c"},{url:"tag/sidebar/index.html",revision:"6dc189e9dd10e28476c8363a02d2f593"},{url:"tag/sitemap/index.html",revision:"2de92ef2fc4a031289d08a37c564b7f5"},{url:"tag/style/index.html",revision:"cbf2d3059aeada14229b06211f7ae2ea"},{url:"tag/themeConfig/index.html",revision:"02bbc2ec1421e40e2047d771b06d23ee"},{url:"tag/typescript/index.html",revision:"a232398185fa1685c92d499aa5d5caaf"},{url:"tag/vuepress/index.html",revision:"b6e595a201b5dcf1dcf968b64a9431f5"},{url:"tag/vuepress/page/2/index.html",revision:"831b89f4cd220846e0af9d25a346ca36"},{url:"timeline/index.html",revision:"3745661822d01f070eaae8f3d78cc92b"},{url:"zh/basic/index.html",revision:"6e74b2c2565830d764ecb16f2c61db66"},{url:"zh/basic/markdown/demo/index.html",revision:"60e12f5acd18e9d383868b58e04adaa9"},{url:"zh/basic/markdown/emoji/index.html",revision:"82ec842180b2a58fac1718ab8f0a576e"},{url:"zh/basic/markdown/emoji/nature/index.html",revision:"53efef67bd66f58c82305c623cd74265"},{url:"zh/basic/markdown/emoji/object/index.html",revision:"a0356b150f20dc89fce81e8e56da95b5"},{url:"zh/basic/markdown/emoji/people/index.html",revision:"97f14eea34685ddb98fb23bf9de591af"},{url:"zh/basic/markdown/emoji/place/index.html",revision:"f6d660f3d0b0ab20b061a9992a2bd605"},{url:"zh/basic/markdown/emoji/symbol/index.html",revision:"0cdfbffd137c0a2e88fa5b38bce7c699"},{url:"zh/basic/markdown/index.html",revision:"d99d309e85400f4192363bfd1063f0ea"},{url:"zh/basic/vuepress/case/index.html",revision:"86076fd2126338ac88b9fc3caa1e998b"},{url:"zh/basic/vuepress/command/index.html",revision:"d18eb1a7c056d032dc67f896f3053839"},{url:"zh/basic/vuepress/file/index.html",revision:"b33ceb00dcf761c2535238472f1d6de7"},{url:"zh/basic/vuepress/index.html",revision:"b6b69301c9bceed251fcbcf66c451a10"},{url:"zh/basic/vuepress/plugin/index.html",revision:"d167764e5fd97619f78bba34d567a0ef"},{url:"zh/basic/vuepress/theme/index.html",revision:"fb6af5c7118e569fe3573faa64e7a939"},{url:"zh/config/index.html",revision:"15feb1693cdbd9e1e329d49985939525"},{url:"zh/config/page/index.html",revision:"ca2051e97f298e1e40f6e9f60e741138"},{url:"zh/config/plugin/container/index.html",revision:"4a118c95673540c3d9e4432def4da606"},{url:"zh/config/plugin/copyright/index.html",revision:"bcf031eaa49da1014e74e3796cf1a096"},{url:"zh/config/plugin/index.html",revision:"d1ff0e2924cd826e1a607f6d51c2d55a"},{url:"zh/config/plugin/pwa/index.html",revision:"9b80a5524c7ab651a31ba8abe45bff23"},{url:"zh/config/stylus/index.html",revision:"68aabbf19115792ad2e382ab259c2ae7"},{url:"zh/config/theme/apperance/index.html",revision:"5f677f76fa14eca5676b7b209327a8db"},{url:"zh/config/theme/default/index.html",revision:"2b23d5869a9412f7dc24a569364e2cdd"},{url:"zh/config/theme/feature/index.html",revision:"c61a69091969e3e5211b0acbe47e80ae"},{url:"zh/config/theme/index.html",revision:"1013984703d3f9156118b82dca67a3a2"},{url:"zh/config/theme/plugin/index.html",revision:"2216ac7d72db2c8dd8c4da1dd792e1d0"},{url:"zh/demo/index.html",revision:"14b7df0c032dafc46c82c31055e3d9f1"},{url:"zh/FAQ/index.html",revision:"d34eeb1c8efb7b3edfb8e17bd9e36227"},{url:"zh/guide/feature/blog/index.html",revision:"af4dfba72b12afb6d7db905f2d13d43c"},{url:"zh/guide/feature/comment/index.html",revision:"0eb39ba61d958ba10f42d14431900555"},{url:"zh/guide/feature/component/index.html",revision:"750297815f524796307d473310c95f1b"},{url:"zh/guide/feature/encrypt/index.html",revision:"47f62dee6d428fccd8cdf2fc5b60bc96"},{url:"zh/guide/feature/index.html",revision:"559ced16617c8a6ba651352416a46637"},{url:"zh/guide/feature/markdown/align/index.html",revision:"07bf2a0a898bc02a7b51a86e9540c6ee"},{url:"zh/guide/feature/markdown/flowchart/index.html",revision:"38a8853c80d6333bfb30b5eaa4da9681"},{url:"zh/guide/feature/markdown/footnote/index.html",revision:"002975e2358722e0b71ad35114561541"},{url:"zh/guide/feature/markdown/index.html",revision:"2dfa29c3ff6b39316e4875e18eb3f472"},{url:"zh/guide/feature/markdown/mark/index.html",revision:"5124a1e9e769feca32d1607d0e5202de"},{url:"zh/guide/feature/markdown/presentation/index.html",revision:"05d53f2d84a17b34e65bbb7843c3b1ea"},{url:"zh/guide/feature/markdown/sup-sub/index.html",revision:"36b4692b34c65f9cfa4f1f4f26b5f7e7"},{url:"zh/guide/feature/markdown/tex/index.html",revision:"fd85287725ef3df8846fb6273ac30231"},{url:"zh/guide/feature/page-info/index.html",revision:"184af67c391f71099ee2c78a5db58b67"},{url:"zh/guide/feature/seoAndSitemap/index.html",revision:"b1762039739381c22c85ac421e7103ce"},{url:"zh/guide/feature/theme/index.html",revision:"486b0fe86b319d89f7e07535c61f4f37"},{url:"zh/guide/feature/typescript/index.html",revision:"ed575bc15bae3dfb7be6c0fb7ddac64f"},{url:"zh/guide/index.html",revision:"b1636169cf761451f9a3df1f451f8303"},{url:"zh/guide/install/index.html",revision:"c9fbc527612e2aea3cb15fb550912fcf"},{url:"zh/guide/layout/blog/index.html",revision:"f2e86c126423a42335ddf956f426187b"},{url:"zh/guide/layout/home/index.html",revision:"83a5e675bf88abbe11ad17e78e7dd476"},{url:"zh/guide/layout/index.html",revision:"303b6722b731ce90ed9ff7467a96f668"},{url:"zh/guide/layout/navbar/index.html",revision:"0c1aa8be2f27006f3bf38b4358ee8688"},{url:"zh/guide/layout/page/index.html",revision:"c69cd4594e6d350b242dabf7be5caf24"},{url:"zh/guide/layout/sidebar/index.html",revision:"a675847cfa891941520e48a4eae4d9b2"},{url:"zh/index.html",revision:"171df8f2dbaceabd50516f70874052fc"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
addEventListener("message", (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting")
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});
