if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,d,i)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const f={uri:location.origin+a.slice(1)};return Promise.all(d.map(a=>{switch(a){case"exports":return s;case"module":return f;default:return e(a)}})).then(e=>{const a=i(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-32927a2a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.ecaa7db7.css",revision:"f0025f0bf439b0e553eb7ec7d91e7ad1"},{url:"assets/img/danger-dark.5fb01a54.svg",revision:"5fb01a54b1893112ce78f6bf6fe7b9b6"},{url:"assets/img/danger.6e8b05e0.svg",revision:"6e8b05e040e31db4b52092926ac89628"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.9cb8f08f.svg",revision:"9cb8f08f92e9e47faf596484d9af636a"},{url:"assets/img/info.b3407763.svg",revision:"b3407763d94949efc3654309e9a2202f"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.36f60759.svg",revision:"36f607593c4f5274775cb24f1edf4389"},{url:"assets/img/tip.fa255ccc.svg",revision:"fa255cccbbef66519a1bb90a5bed6f24"},{url:"assets/img/warning-dark.34208d06.svg",revision:"34208d0652668027b5e1797bdafd2da9"},{url:"assets/img/warning.950d1128.svg",revision:"950d1128cc862f2b631f5d54c3458174"},{url:"assets/js/125.a8b066ed.js",revision:"b92a1d9ee57a8f1acd166e625ccc00ff"},{url:"assets/js/126.683ba149.js",revision:"e00217722b10c90be2edd83d6be611a3"},{url:"assets/js/127.b650c9de.js",revision:"6305a309f46beb7b3f96ebfaffcf6753"},{url:"assets/js/128.d783d407.js",revision:"e2db3743a7d800608bc11a15dafb0895"},{url:"assets/js/app.cd84080b.js",revision:"e41d7cf4912e67c8033e9f9517871cbc"},{url:"assets/js/layout-Blog.06c2e75f.js",revision:"421d6602880fcdf21ca72dd71265ffc9"},{url:"assets/js/layout-Blog~layout-Layout.0a516b7e.js",revision:"4d476bb120020e1cb88365044983fcf1"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.b933480b.js",revision:"d6455ff8a32e44cda740044f7eed1dab"},{url:"assets/js/layout-Layout.6155a550.js",revision:"2494dc8743a508369c80ac1fc54de3a8"},{url:"assets/js/layout-NotFound.52c29617.js",revision:"efa109ca952d4cd6c50660e8be26f29e"},{url:"assets/js/page-AboutVuePress--4a71114e.5590ee72.js",revision:"8f2ca2ca3c0189e7ebf301fbc0b91596"},{url:"assets/js/page-Basic--770cb96b.8a9f859a.js",revision:"8e3615b4037f2851900e60cbb9513975"},{url:"assets/js/page-Bloghomepage--64265752.7141e934.js",revision:"2fdf6d7a859bd10659de48d0418f5efc"},{url:"assets/js/page-Blogrelated--17c260a2.5bff01f5.js",revision:"25a271b7d1da56cf3073ab04a4d2a3f5"},{url:"assets/js/page-CommentFunction--5bb6671c.e1cd37eb.js",revision:"5cb4df6145b3c61530fcfaeae1af94e3"},{url:"assets/js/page-Commonproblems--2b571e9b.37d8a120.js",revision:"0a6dea750baf00d22c3f50fea8f19ab4"},{url:"assets/js/page-Config--35a0a7d9.dc6a7685.js",revision:"6fdfe2dfcec8a15995205f8e086e3887"},{url:"assets/js/page-Customalignment--4f21aa5c.4c7b4748.js",revision:"a98220a46e4a10e4b926c192ae8307b2"},{url:"assets/js/page-DarkmodeandThemecolor--e23e731c.79369cf5.js",revision:"930ed3f1294b485118e3c8e54c6c6221"},{url:"assets/js/page-DefaultThemeConfig--3cbef5e2.c3201fb7.js",revision:"a95f6e57ea2b9a93f7a6359ace49d2b3"},{url:"assets/js/page-Demos--f328658e.18e28747.js",revision:"0de04a4f6c4147f26dac4abd935e96d5"},{url:"assets/js/page-EmojiList--41bb29b9.09eca8d0.js",revision:"720a39d879980b4dd0851536a55e9d82"},{url:"assets/js/page-Emoji列表--404e6737.149f13e5.js",revision:"9f91e10ad6195b2fe01d74f50172898f"},{url:"assets/js/page-Encryptionfunction--181bdc9c.9d2375d1.js",revision:"ca250d243dd291045ff820510f54854a"},{url:"assets/js/page-FileStructure--665a4f1c.4d348ce8.js",revision:"dda59dd2f13c21cb8c33a9e0ef3ab289"},{url:"assets/js/page-Flowchart--7ce6d974.07c3ef64.js",revision:"65cc7a90ac16c051987ff05d7a8d2312"},{url:"assets/js/page-Footnote--0c733e52.b27fdb7f.js",revision:"fdbe2ecfee2e386da5222d2fe2428bbf"},{url:"assets/js/page-HomePage--5834599c.e5bffba6.js",revision:"91c8c974f832dcba44cf6d2971535393"},{url:"assets/js/page-InstallUsage--0ab466d2.89eeef01.js",revision:"e7d10c21b34663e2cec83cc055eb4174"},{url:"assets/js/page-Introduction--d4910962.93886fe8.js",revision:"a2c728b9e287f6a7a0ce772e4b433012"},{url:"assets/js/page-Layout--12bd4f0e.9258f251.js",revision:"ee8f160ea07c5e907f062b5df43c996a"},{url:"assets/js/page-MarkdownDEMO--c3e1bfdc.8e41adce.js",revision:"297e177a1cb985c51b2f7c48acf49e5e"},{url:"assets/js/page-MarkdownEnhance--ad9dba8e.66489402.js",revision:"b92272987191cc9bd571437121aab52d"},{url:"assets/js/page-MarkdownIntroduction--270989ce.77680585.js",revision:"570a061179959e42a6362489915b1393"},{url:"assets/js/page-Markdown介绍--0e6891b6.3d367689.js",revision:"bbf04e5518af80aababe8e049c7200ff"},{url:"assets/js/page-Markdown增强--6162938f.284f19cf.js",revision:"510a80817b10940d3072220744cb1eb0"},{url:"assets/js/page-Markdown示例--5479fe88.88afc852.js",revision:"fc2e1dc2128eb3edd0c569f28e3df9aa"},{url:"assets/js/page-Markup--6b1f341c.e99b1673.js",revision:"bd7cb5ab66b0c169a0b6c93e2162db40"},{url:"assets/js/page-Nature--749fb09c.d0913059.js",revision:"a2bfbc3332c4f67fba495f29e1fad438"},{url:"assets/js/page-NavBar--c7bf87dc.1f4b49f0.js",revision:"99d9a4cc949482b00bc3dcc7d89abc4f"},{url:"assets/js/page-NewComponent--1d138c72.5f730dc0.js",revision:"cac83e2b510f7996a1a1578a3850cb68"},{url:"assets/js/page-Newfeature--5136c541.26291093.js",revision:"7363db759643d3ab5cd8c66c70a7904a"},{url:"assets/js/page-Object--16031ab2.4b9f4dfe.js",revision:"0dc7437b1cbaa733ee7ebf5ce4b2fbcd"},{url:"assets/js/page-Page--af17b59c.9307464f.js",revision:"00368e7af80f0648d0e917606ccaf0c4"},{url:"assets/js/page-PageConfiguration--0aacc152.0779b087.js",revision:"258bbcdec047619fdaf76797c4708c29"},{url:"assets/js/page-PageEnhance--03665ac8.9a3d9407.js",revision:"53fab7668d7c94d539455c7895649d52"},{url:"assets/js/page-Pageinformation--71efd5d2.7df72298.js",revision:"29309b5e66f3b25dff3ce3965e6f045e"},{url:"assets/js/page-People--2182769c.1231df62.js",revision:"e6e5ce91e9525bc7b27c75f67e5d4395"},{url:"assets/js/page-Place--951cdc00.e078c3e5.js",revision:"3e13c13bf9c3385dd402611a8df59ab9"},{url:"assets/js/page-PluginDescription--137c6c07.e36169f4.js",revision:"a461c71781392c9a5ecb8faa83d34323"},{url:"assets/js/page-Plugins--adbf415c.5d3eb584.js",revision:"fd1e1e99010ca97948679f05d946b1c8"},{url:"assets/js/page-Presentationsupport--8f8e54dc.19226103.js",revision:"9d84aba936e0b92271a8445c43697426"},{url:"assets/js/page-PWA--01089712.b2db4926.js",revision:"f2643fa205dc259287e6c4bb2d7d36da"},{url:"assets/js/page-PWA--243ef2b8.9235ddb2.js",revision:"e041f870743f1bfddeef2c6cc2235f7b"},{url:"assets/js/page-SEOandSitemap--5934b3b2.3568b590.js",revision:"404d4cc35ef911af07dd894f89bb6ac9"},{url:"assets/js/page-SEO和Sitemap--35ca8b22.3f464f4b.js",revision:"2f0612407b48bd3c88ab26e87f45e360"},{url:"assets/js/page-Sidebar--2fa1ea2c.7e363653.js",revision:"81d866257a7f48969ef664afd53738e1"},{url:"assets/js/page-stylusconfiguration--6796cdf2.8f804fdc.js",revision:"36590eaca968334008754b364ea0d4a9"},{url:"assets/js/page-stylus配置--0ce19a82.fb1365b9.js",revision:"77d6725002474a9e3f1483a0cc8ec161"},{url:"assets/js/page-SuperscriptandSubscript--895c91b8.7df3c17b.js",revision:"85cc07879a87c6033da3f6f8c39c748e"},{url:"assets/js/page-Symbol--a9259c5c.4b39bd16.js",revision:"c3e2224ad5b181f4e641e8928b77a7c8"},{url:"assets/js/page-TexSupport--64cb5e50.2e00f249.js",revision:"922bfac6fc4f72332c5dfec4897041be"},{url:"assets/js/page-Tex语法支持--1e02b152.091fe3d7.js",revision:"3aebb367c9fc05a1c136cbacfde13eb6"},{url:"assets/js/page-ThemeConfig--1120a0ce.4fd501d9.js",revision:"05f80e3712470f2278001648831db05b"},{url:"assets/js/page-ThemeConfig--1726e14e.ada844a5.js",revision:"e2b6f19dbe7745927044e53fcc851eff"},{url:"assets/js/page-ThemeFeatureConfig--2ccd2db8.98f832d6.js",revision:"95f6ad5280c795041788b09b27b05660"},{url:"assets/js/page-ThemeLayoutConfig--733513aa.801c2035.js",revision:"f1caf3a6bd99aeb95ecf3cefec80d1c9"},{url:"assets/js/page-ThemePluginConfig--958196dc.b959290d.js",revision:"956fbf01172356618231283ebff96e92"},{url:"assets/js/page-TSsupport--09728ac8.e8c83295.js",revision:"88f240b29311aa2f15a378fa5da765c2"},{url:"assets/js/page-TS支持--4625f812.fde39bea.js",revision:"2921e570fb3606c8e3fc7069ea3e08f7"},{url:"assets/js/page-VuePress--b7060eee.63db21dd.js",revision:"462bc1bfe7490330017e53d528e1d6bd"},{url:"assets/js/page-vuepress-plugin-container--31498112.bc6bbd6a.js",revision:"e98cf7c2003759462984a18e244a4193"},{url:"assets/js/page-vuepress-plugin-container--606dbc5c.be9ddb55.js",revision:"c1138c7421e6e8c87d2b7f9d443628d1"},{url:"assets/js/page-vuepress-plugin-copyright--5242f65c.caf7b79e.js",revision:"f6cf4f04288a6ea7515df713c7469485"},{url:"assets/js/page-vuepress-plugin-copyright--6d3913d0.1cc19d1b.js",revision:"5bf244ac8dc5df7f924c6f55e13fc62d"},{url:"assets/js/page-vuepress-theme-hope--354da24e.1d1343d5.js",revision:"7d79f9a735735a36c85f9871969691df"},{url:"assets/js/page-vuepress-theme-hope--776d8369.5c2c47fe.js",revision:"db5ace88310c320da90ee940d519cbd5"},{url:"assets/js/page-VuePressCases--082972f2.1022ba8b.js",revision:"b26f28a518ffa9a2c9d9424aaae2d998"},{url:"assets/js/page-VuePresscommands--9f3f316c.bf00735d.js",revision:"a2ca3a1aa8d22f9a08893dba037ccf92"},{url:"assets/js/page-VuePress案例--531d5f3e.6eaa96e7.js",revision:"c43ce7304e638b20ca50e723c20a2fbe"},{url:"assets/js/page-上下角标--8efed9dc.cb16c9a3.js",revision:"926b9e224379859fd4d49c8da6b19885"},{url:"assets/js/page-主题功能配置--5bb71452.caffd02e.js",revision:"dd671237f36193d8e91e795ab43bad72"},{url:"assets/js/page-主题布局配置--7db7eff2.1243cd2e.js",revision:"d039695432233526f00ec5465c75f91f"},{url:"assets/js/page-主题插件配置--1b0c3e98.0f8062ba.js",revision:"b1d849ec1e3b196c089f67a409adf8db"},{url:"assets/js/page-主题配置--21dc088d.10f7aab5.js",revision:"da28e6f7bc67f4a3fc0b961e1a787b44"},{url:"assets/js/page-主题配置--2c572572.c83a80a0.js",revision:"20d69c349b6832ef5252b9f94f4a791a"},{url:"assets/js/page-人物--b4fc27dc.2aa8e5c8.js",revision:"949993e4e7ffaa5fac0dd41a602fb4e8"},{url:"assets/js/page-介绍--2e99d139.db1f6658.js",revision:"a1e713ee6ad524586fee48cf8b644adf"},{url:"assets/js/page-侧边栏--43054cb2.a2f79a83.js",revision:"f207ebac380aef38e18a0ddcb7670be6"},{url:"assets/js/page-加密功能--2361b7e4.ccdbe545.js",revision:"14debb316194f6ea11e95dac2dba8364"},{url:"assets/js/page-博客相关--6a3fd4f2.0232cf75.js",revision:"328efa85a9189b191f4dc3fca4eae1be"},{url:"assets/js/page-博客首页--1eb2b298.58c5d1e6.js",revision:"306ae07bba29d5d8f39965c4f47d281e"},{url:"assets/js/page-地点--6710785c.06da872e.js",revision:"3e23b614bf44f50f04e477abb07aa180"},{url:"assets/js/page-基础知识--4d466a79.075d3e27.js",revision:"360290312dee3c4262e2fafa7792fc32"},{url:"assets/js/page-安装使用--76e0e5b0.c4cb3092.js",revision:"4a548e4050b949b1d797f95cfbd198e3"},{url:"assets/js/page-对象--e150da9c.981aa64a.js",revision:"89ad4b6c33d3c37154170ccbadf6cb13"},{url:"assets/js/page-导航栏--183844fc.6d16a941.js",revision:"1d417289b4a6ce64d1df80c4f4c9c98b"},{url:"assets/js/page-布局--fa93e36a.e6ddd0f8.js",revision:"2c3043973700c923b4a97832dbd7b972"},{url:"assets/js/page-常见问题--10ab790e.824b066a.js",revision:"7ccad63d0a16bb3da0c9c7ac716e19bf"},{url:"assets/js/page-幻灯片支持--5808e664.852e274a.js",revision:"b1a3b52b5e5cc44c99efadadfa4dc9d6"},{url:"assets/js/page-插件--32355f10.d4269e6a.js",revision:"7ce87e1489b8e010bb56d17fb5e09df2"},{url:"assets/js/page-插件说明--cbca1c8e.0df9d393.js",revision:"3c7f0df4edb7909411951343644e45a9"},{url:"assets/js/page-文件结构介绍--ed6a9eb4.3947e8f9.js",revision:"342e79ea6d8dbf5874045ef80814b5da"},{url:"assets/js/page-新增特性--30c6c799.f9c9006b.js",revision:"a9842b701e2d58c82ce7262e99f57dfe"},{url:"assets/js/page-新增组件--0979095e.be4225a5.js",revision:"7fb97b250a0eb053dc304f9685665725"},{url:"assets/js/page-标记--0ac52704.66f7c7ad.js",revision:"65d80c918fd623551c1e29d9ae4cd8dd"},{url:"assets/js/page-流程图支持--582eff1c.a6719eac.js",revision:"51f1096cd1101fdef62da2c72298c572"},{url:"assets/js/page-深色模式与主题色--01662674.e017d12b.js",revision:"27048ade2bbf423ba598c67c11c04367"},{url:"assets/js/page-符号--2db8fb80.67e39473.js",revision:"3ffd1e79aaa0d1548afd316ff8f6eedc"},{url:"assets/js/page-脚注--17d88350.71347a23.js",revision:"28916b62b8d00d1cf7e3d7b339d8c237"},{url:"assets/js/page-自定义对齐--048d31dc.6b56c7d7.js",revision:"7ae208e3bb22f6ef6645a1c148a2d28f"},{url:"assets/js/page-自然--7ec33be2.ef3cbd51.js",revision:"9f7879592d89cf226c62f96bd1a2ef0c"},{url:"assets/js/page-评论功能--350aff9a.bff7a2a7.js",revision:"14abdcf6b87a0d68470ec94140384895"},{url:"assets/js/page-配置--d315f8fe.bba737d7.js",revision:"57a2d2b387883b47c7516118118936f3"},{url:"assets/js/page-页面--78423bfe.387df1e9.js",revision:"19a8873ba6464ae193e2c30760c8b4c7"},{url:"assets/js/page-页面信息--455b9800.8d370ec6.js",revision:"1e0eceb2dc8db2db975ba766be0d8cca"},{url:"assets/js/page-页面增强--2e4cf75c.21b6b272.js",revision:"a3df2f4f84dabca60fa9b1efc1284e3e"},{url:"assets/js/page-页面配置--02399408.3750c7ba.js",revision:"504def7c968aa07721114ea9290ed98e"},{url:"assets/js/page-项目指令--2f3d7c1c.37a6cba4.js",revision:"bb5150d11b47f16ab64961dc7afeda99"},{url:"assets/js/page-项目案例--1f3d6482.f7700b0f.js",revision:"e6555c96596a22aa6dd252d860c0e175"},{url:"assets/js/page-首页--79a22944.0eabd387.js",revision:"9c510023218a9a95eaca81359c9eac58"},{url:"assets/js/page-默认主题配置--0d5b7f32.fb4fcbb5.js",revision:"0b9a6a89fa337d23fe2bb96e06019fa0"},{url:"assets/js/vendors~docsearch.4b52ed2d.js",revision:"1c0ae6697a371b061bc84f27cefe7052"},{url:"assets/js/vendors~flowchart.b3a5b488.js",revision:"cd2a0199cdc192734d9804a179c2628d"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.b9db2285.js",revision:"d4b4e2a0a77a0699abcead6ab5d46765"},{url:"assets/js/vendors~photo-swipe.60ed6540.js",revision:"05623cd149bcb2dfce573ddcbe586745"},{url:"assets/js/vendors~reveal.8827293d.js",revision:"a24e11d81260d3c8bbd2fd4146ad1422"},{url:"assets/js/vendors~valine.8cb10463.js",revision:"e7e3dfe0f64a8adff71d688b954f5c00"},{url:"logo.svg",revision:"e5d2cc16443a59035e0fa55c746f7d51"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"404.html",revision:"64fcdcb119b1417d39f42be09c88bb42"},{url:"article/index.html",revision:"0a5d58eb4522de82b7733b22bff0d6ed"},{url:"basic/index.html",revision:"888c7d9c41e7a1eb2249449fb9790a33"},{url:"basic/markdown/demo/index.html",revision:"ef787b713decb1c0c584d62cd5770850"},{url:"basic/markdown/emoji/index.html",revision:"bd59c0e47e7b32c3224d0777d8f3891c"},{url:"basic/markdown/emoji/nature/index.html",revision:"a46b2aaf2e9e1721367e51e953407f64"},{url:"basic/markdown/emoji/object/index.html",revision:"d50ff11a0d431ee76653a08267d3faa8"},{url:"basic/markdown/emoji/people/index.html",revision:"6fe3e6d6b5153b4ca6e40024224075d6"},{url:"basic/markdown/emoji/place/index.html",revision:"e68b38fa9b2781152f6f678b9333863e"},{url:"basic/markdown/emoji/symbol/index.html",revision:"e0c798cf9eee58188b53bd6244f4f319"},{url:"basic/markdown/index.html",revision:"2c06b86137cfca0b7dc79b04f7177de0"},{url:"basic/vuepress/case/index.html",revision:"a354b202f67286792e8393aa5d71559c"},{url:"basic/vuepress/command/index.html",revision:"cb9385ae7877db3217bba90207715fb4"},{url:"basic/vuepress/file/index.html",revision:"2d53f5fb2d91b1f0863b1d1034d6519f"},{url:"basic/vuepress/index.html",revision:"6076242477e564c141c91608c1981d2f"},{url:"basic/vuepress/plugin/index.html",revision:"35d8618524fef832a60517750d721c27"},{url:"basic/vuepress/theme/index.html",revision:"fd46790007e74d323178f618ef75d4e1"},{url:"category/basic/index.html",revision:"049819ebb8ec6ab8db6702938f3451ac"},{url:"category/basic/page/2/index.html",revision:"75f053dc534e1678538791599448fb54"},{url:"category/basic/page/3/index.html",revision:"ca96226eb85731a6f806b4f352c6d0c9"},{url:"category/config/index.html",revision:"29ef9fe8a0443d65f277dc9c57a4cf13"},{url:"category/config/page/2/index.html",revision:"3490fd019a682e7b24136a744bef6c86"},{url:"category/config/page/3/index.html",revision:"bbd35009b04b029ddc661e6b9aea5ded"},{url:"category/demo/index.html",revision:"43d4ebfe35d5eeef050450e027400cd6"},{url:"category/FAQ/index.html",revision:"8846bb7e183872a39dcaf0a1f493b16c"},{url:"category/feature/index.html",revision:"d0d733c6d1bb49c79ac89bc2e81dd94e"},{url:"category/feature/page/2/index.html",revision:"f226999e55f658627313977f186bd895"},{url:"category/feature/page/3/index.html",revision:"0cc05dfbfd3e22aa089fa7efd5d9eda6"},{url:"category/index.html",revision:"9326f48739c8ef99671146328d9623a8"},{url:"category/instruction/index.html",revision:"74ad4968f2dace24e5f04797fc03b5bf"},{url:"category/layout/index.html",revision:"46d4e6ea67ee2fbc9c77bf74bb561565"},{url:"category/layout/page/2/index.html",revision:"d2b9477bea6d2b3695ebb3748ac76072"},{url:"category/markdown/index.html",revision:"d261d09ec41b0d93e1e759af13d7748f"},{url:"config/index.html",revision:"a32db544314cd94e9c2f9de35456245c"},{url:"config/page/index.html",revision:"0bc31864779649e31df3aaefec2d49ca"},{url:"config/plugin/container/index.html",revision:"596b8fb061183284c4fab4719c5da5cd"},{url:"config/plugin/copyright/index.html",revision:"3db61a41690c864fe8d1f9c36c62e865"},{url:"config/plugin/index.html",revision:"1b2e8627ad6f977cb1ad5143052c9ffb"},{url:"config/stylus/index.html",revision:"4f6cec36b66821b4d2a3bf7e411b2e80"},{url:"config/theme/apperance/index.html",revision:"2bfe1b3cb6cd412a04309179879c86d6"},{url:"config/theme/default/index.html",revision:"50c62a0ded394b83991a054d75026a5b"},{url:"config/theme/feature/index.html",revision:"38652d8b848e2af1968077430c2ed0ed"},{url:"config/theme/index.html",revision:"31897503212d3bc7d9facb8eb377541f"},{url:"config/theme/plugin/index.html",revision:"fbd79bb811df098c306dda2661b6905c"},{url:"demo/index.html",revision:"7b14fa064ec35ea2b5f00585b6848495"},{url:"FAQ/index.html",revision:"681ae17d2d5b1d9c2967b87f76ae4c0d"},{url:"guide/feature/blog/index.html",revision:"cbfb9b5adb3cef30ce699da01e5ac94d"},{url:"guide/feature/comment/index.html",revision:"b962f3292754243cd0cb2fb3aa532c9b"},{url:"guide/feature/component/index.html",revision:"eb1d082fc9528d58ce663582e5646846"},{url:"guide/feature/encrypt/index.html",revision:"677c318f53feed87854b094c0c64a096"},{url:"guide/feature/index.html",revision:"08e47d439a900307e236afc35a057602"},{url:"guide/feature/markdown/align/index.html",revision:"3b0da2b7cd72c5bdd74e6b310f5014d2"},{url:"guide/feature/markdown/flowchart/index.html",revision:"1b1c271a589ce5e6d3027b6c7e449b45"},{url:"guide/feature/markdown/footnote/index.html",revision:"7e13afb216c6d8ba438f60f146dac29a"},{url:"guide/feature/markdown/index.html",revision:"e60d5574d1a0239f580dfe9999e04f64"},{url:"guide/feature/markdown/mark/index.html",revision:"66822267e08f090fbb52de4afd046d35"},{url:"guide/feature/markdown/presentation/index.html",revision:"86ad6d5a74b6d844a21cecbe0c46d3e4"},{url:"guide/feature/markdown/sup-sub/index.html",revision:"2a0af40af92d16e283496fa24c6d991a"},{url:"guide/feature/markdown/tex/index.html",revision:"8351d391b8151a64e6a0f34d42956bc6"},{url:"guide/feature/page-info/index.html",revision:"905b7c1ae317dae348ba4354b114782b"},{url:"guide/feature/page/index.html",revision:"9282a36ca5c32005532138354b1adef0"},{url:"guide/feature/pwa/index.html",revision:"b428b4172aae1d1f0fb00adf82ffec7c"},{url:"guide/feature/seoAndSitemap/index.html",revision:"6adfc0c5e316326a2c6e1e579ad6df44"},{url:"guide/feature/theme/index.html",revision:"4f0c33d943566d24a2b0289e92c29b23"},{url:"guide/feature/typescript/index.html",revision:"2c9232b2e429c141a1dbe20ebcd9df94"},{url:"guide/index.html",revision:"9886918ef9572731e85bcbd81574fd0b"},{url:"guide/install/index.html",revision:"e4fd2cad29c4a8c438f175ecef6a76e1"},{url:"guide/layout/blog/index.html",revision:"25daf115e43f9e44cce0f257a880ebb5"},{url:"guide/layout/home/index.html",revision:"bc0e6f0b92e6f39f8c33675a9f23c243"},{url:"guide/layout/index.html",revision:"2554aa3d283f3085111ece346b57ebf5"},{url:"guide/layout/navbar/index.html",revision:"8d1cb33b5f301b67cb41f27d4c0f9aea"},{url:"guide/layout/page/index.html",revision:"ee5ad7f737fb97572ccdb0e7d291a487"},{url:"guide/layout/sidebar/index.html",revision:"0f558aae0a8ebd84efa69c76cf60b3a7"},{url:"index.html",revision:"4979592ec82e68fe06ba64a3c2df30c9"},{url:"tag/blog/index.html",revision:"38dcbc6b4d0c2ef4850785dbbd577883"},{url:"tag/comment/index.html",revision:"9dfb68f9bf28395c780e115644dcc57b"},{url:"tag/components/index.html",revision:"f57f6b2a591f37f9f448a2eebdc13319"},{url:"tag/config/index.html",revision:"f66e8e9638b4e7c5a35a8e67d8713db0"},{url:"tag/config/page/2/index.html",revision:"911d2c05395beea2b65732c22714888a"},{url:"tag/config/page/3/index.html",revision:"f84f7bc7e04d0bdc8d38b503a112105d"},{url:"tag/emoji/index.html",revision:"a1186ff0ccbd31382c10ca35e1141606"},{url:"tag/emoji/page/2/index.html",revision:"65a83ec29ed637eb3f95f2e2752bea11"},{url:"tag/encrypt/index.html",revision:"d21d6dde35e5264b6f2f3413dd7a6fcd"},{url:"tag/feature/index.html",revision:"29b8f3843aa439b38b2dc5a163bde7cc"},{url:"tag/feature/page/2/index.html",revision:"8e2308db8206c62d20eb5361d4f9950f"},{url:"tag/feature/page/3/index.html",revision:"8e517e9b6eaf6780f580655af42e27d4"},{url:"tag/feature/page/4/index.html",revision:"0a3e90abd2928b594f831bf5639b1f7d"},{url:"tag/frontmatter/index.html",revision:"5fe064d7244c56ef8b91d8c62663d3d2"},{url:"tag/home/index.html",revision:"b869021b719447da293c465fcb690ff1"},{url:"tag/index.html",revision:"56eb00a04fc604ad87f72d9d933b3b55"},{url:"tag/intro/index.html",revision:"971810710626c606f81c6def60f9b40e"},{url:"tag/layout/index.html",revision:"32d3448d0c8cf0bd2056afd6c33308c1"},{url:"tag/layout/page/2/index.html",revision:"8498f78c91dd610ea00c754824c91f45"},{url:"tag/markdown/index.html",revision:"0b4ba4f98b13265fc7e00b398e5b9b84"},{url:"tag/markdown/page/2/index.html",revision:"c7f51b9755c1c6102a389fe691d68230"},{url:"tag/markdown/page/3/index.html",revision:"f78c2b9befc9c82a5dc608be842734ea"},{url:"tag/navbar/index.html",revision:"7e03df3c4bc4e7d98efc4885d184c138"},{url:"tag/page-info/index.html",revision:"238b0d53e91b695024e6df26ecd4a180"},{url:"tag/page/index.html",revision:"f4528646b113825540d066b413422010"},{url:"tag/plugin/index.html",revision:"956c4f80a8685f87104177be5f465f1e"},{url:"tag/pwa/index.html",revision:"8470d3bd6ebc679918b8dec4795bb974"},{url:"tag/seo/index.html",revision:"537ed6c10897ff02d96381902429fb97"},{url:"tag/sidebar/index.html",revision:"b5a0faa86b79292d884c507d6d7a4162"},{url:"tag/sitemap/index.html",revision:"df4bc546f215c138f3618a28854c9029"},{url:"tag/style/index.html",revision:"8af4e51b9327b4c9ba390cccbdfacdd4"},{url:"tag/themeConfig/index.html",revision:"5ebb87cfc7f91de5fc33b6878bbc26bc"},{url:"tag/typescript/index.html",revision:"917eaf6c7787316d9a526c7abec962c6"},{url:"tag/vuepress/index.html",revision:"69024a9803681667e696e0103cfaad53"},{url:"tag/vuepress/page/2/index.html",revision:"fd454a714f765470a81d79d8d009a6c0"},{url:"timeline/index.html",revision:"62a797c18eeaa841d4c141ddbf5b144f"},{url:"zh/basic/index.html",revision:"4671409eeafbfc05844f6793c1d7f6be"},{url:"zh/basic/markdown/demo/index.html",revision:"de8c2f3e417f8682aad8e2faf34d268e"},{url:"zh/basic/markdown/emoji/index.html",revision:"24ebab9fc9126078173ee8def4c2e287"},{url:"zh/basic/markdown/emoji/nature/index.html",revision:"e92e1cd90244c7892a89a3cdc0f87c79"},{url:"zh/basic/markdown/emoji/object/index.html",revision:"26bb3b7553f25761c585fcd56aec99be"},{url:"zh/basic/markdown/emoji/people/index.html",revision:"26b66091c053e6933fdd1675d769d605"},{url:"zh/basic/markdown/emoji/place/index.html",revision:"1047040b1a2132107d220bb32e0f97b7"},{url:"zh/basic/markdown/emoji/symbol/index.html",revision:"95ad9b42aa56a42948b90f0d53ea4e6f"},{url:"zh/basic/markdown/index.html",revision:"87f431c84ffa557eee51883fe4fe9eef"},{url:"zh/basic/vuepress/case/index.html",revision:"1a4d95482919505ae5dd343f143ef509"},{url:"zh/basic/vuepress/command/index.html",revision:"3e30963425ab9f69c2b627eb5eadbcfc"},{url:"zh/basic/vuepress/file/index.html",revision:"5e0eb7d196e8a353e23973c4eea89862"},{url:"zh/basic/vuepress/index.html",revision:"c9b0bf380807920bd3a3453eeaa3183d"},{url:"zh/basic/vuepress/plugin/index.html",revision:"67570168695abf03edd048a215902b3d"},{url:"zh/basic/vuepress/theme/index.html",revision:"8740842764508a053af71ba4e4695054"},{url:"zh/config/index.html",revision:"2925d02cb862703f6859daefb9252f78"},{url:"zh/config/page/index.html",revision:"eae01b4a19a07ba0a1122db6e233eb04"},{url:"zh/config/plugin/container/index.html",revision:"4ddeab44f769742761a343e5a9dee31b"},{url:"zh/config/plugin/copyright/index.html",revision:"bf5f9484193d427927cc371a5b4e62bc"},{url:"zh/config/plugin/index.html",revision:"74d4d77bc023382f3603240aac201834"},{url:"zh/config/stylus/index.html",revision:"518601777bccd14a28b2723d34ea6e2d"},{url:"zh/config/theme/apperance/index.html",revision:"c8a201d8862b1c6fba02f40ba83d3374"},{url:"zh/config/theme/default/index.html",revision:"783cc35895cfeabd9128143fafb94be6"},{url:"zh/config/theme/feature/index.html",revision:"ea1543b8102bde9bda261471f981a43b"},{url:"zh/config/theme/index.html",revision:"d614ccbcdc875df23dea57705612adc6"},{url:"zh/config/theme/plugin/index.html",revision:"c47076e6dba114f3fa2d7597feb77db0"},{url:"zh/demo/index.html",revision:"1ca2916b3f6692a37e638c583a435781"},{url:"zh/FAQ/index.html",revision:"ae02fbbaed749b82feb09fa3d4cda655"},{url:"zh/guide/feature/blog/index.html",revision:"4951f37ba9fd9057efa0b319326e97b3"},{url:"zh/guide/feature/comment/index.html",revision:"a8af040bc4a9384a71eea738debb3da5"},{url:"zh/guide/feature/component/index.html",revision:"b3cccbc752e6a423b537d642eadfb1af"},{url:"zh/guide/feature/encrypt/index.html",revision:"a285ede41d38f5bb730bb3aa79a4ad82"},{url:"zh/guide/feature/index.html",revision:"30b55c0074c57c2c5434257bc9d3029f"},{url:"zh/guide/feature/markdown/align/index.html",revision:"f02ee47909aacfe2d299cb520ec66909"},{url:"zh/guide/feature/markdown/flowchart/index.html",revision:"a80b502e2144bf2ed8fed8daddf993fe"},{url:"zh/guide/feature/markdown/footnote/index.html",revision:"c72f3e1e9bb3ab4b93f1ed83dfbf3f51"},{url:"zh/guide/feature/markdown/index.html",revision:"aae987ca696f1d54b437fc3effc6eb8f"},{url:"zh/guide/feature/markdown/mark/index.html",revision:"03ac8232d3a566433e55ed883e62a364"},{url:"zh/guide/feature/markdown/presentation/index.html",revision:"09e639627542425953785c26a5e0b581"},{url:"zh/guide/feature/markdown/sup-sub/index.html",revision:"23620ddb459f74bb1b898e236a7cd35c"},{url:"zh/guide/feature/markdown/tex/index.html",revision:"2a21d52a2603c7f1a5ffb6b015b62708"},{url:"zh/guide/feature/page-info/index.html",revision:"1e09e9ab3e01a05c8edb6b4793adafc6"},{url:"zh/guide/feature/page/index.html",revision:"40e1e682c50ffe6aa07f77fddbed9f14"},{url:"zh/guide/feature/pwa/index.html",revision:"680ec90608ee3995859b5fdc7c5ecefd"},{url:"zh/guide/feature/seoAndSitemap/index.html",revision:"2723b2020093ab114f50f72a9e8aa19d"},{url:"zh/guide/feature/theme/index.html",revision:"403047893edaf9f6b6f5003d36773fc8"},{url:"zh/guide/feature/typescript/index.html",revision:"5bcd4bdd66701dd54bbb77146a83a20b"},{url:"zh/guide/index.html",revision:"d144509473b21a53db0e1d56e07c67ef"},{url:"zh/guide/install/index.html",revision:"6d8dfaeaa1458324eaef14516f9a5782"},{url:"zh/guide/layout/blog/index.html",revision:"6ce496b8e528245d0a93945bee057e76"},{url:"zh/guide/layout/home/index.html",revision:"b252d885cc4e4c5afe34a083c1e47431"},{url:"zh/guide/layout/index.html",revision:"ffeb07e45a6a1f9554334ebbabd712f1"},{url:"zh/guide/layout/navbar/index.html",revision:"7eb3e2b2d45e9a6d812f761bd4737b89"},{url:"zh/guide/layout/page/index.html",revision:"5228a372db4722846a638ee29f55b498"},{url:"zh/guide/layout/sidebar/index.html",revision:"01cf9255d9962d8263b90bba0aca474d"},{url:"zh/index.html",revision:"190e40dc0a2dce5fce55c15fe3d79265"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/architecture.9a93cf6c.png",revision:"9a93cf6cea38878e19c5816d1af28b17"},{url:"assets/img/blog.28e68cac.png",revision:"28e68cacce1e0d9b91b68324cb73cd8a"},{url:"assets/img/category.02cce400.png",revision:"02cce400a63e98252eefb9437bd10fac"},{url:"assets/img/darkmode.067c07c8.png",revision:"067c07c843f68e66c6ff31374d6344ac"},{url:"assets/img/darkmode.baaa33ce.png",revision:"baaa33ced9083586bc60fa6e9a5cd013"},{url:"assets/img/home.3e7cd8a1.png",revision:"3e7cd8a1727edc0a8592d15ce87dab5d"},{url:"assets/img/home.f9d474ce.png",revision:"f9d474ce8ff32e58f5c5a8aec5b93540"},{url:"assets/img/homeImage.56f13b5d.jpg",revision:"56f13b5d598a4feab49dd969ac9fd2ff"},{url:"logo.png",revision:"a4106d3bbae58733d609f32044a86a39"}],{}),e.cleanupOutdatedCaches()}));
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
