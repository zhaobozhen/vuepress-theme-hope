if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,i,d)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const f={uri:location.origin+a.slice(1)};return Promise.all(i.map(a=>{switch(a){case"exports":return s;case"module":return f;default:return e(a)}})).then(e=>{const a=d(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-32927a2a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.a9201435.css",revision:"bca2e663abb410983e9b0b75e2d57d77"},{url:"assets/img/danger-dark.5fb01a54.svg",revision:"5fb01a54b1893112ce78f6bf6fe7b9b6"},{url:"assets/img/danger.6e8b05e0.svg",revision:"6e8b05e040e31db4b52092926ac89628"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.9cb8f08f.svg",revision:"9cb8f08f92e9e47faf596484d9af636a"},{url:"assets/img/info.b3407763.svg",revision:"b3407763d94949efc3654309e9a2202f"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.36f60759.svg",revision:"36f607593c4f5274775cb24f1edf4389"},{url:"assets/img/tip.fa255ccc.svg",revision:"fa255cccbbef66519a1bb90a5bed6f24"},{url:"assets/img/warning-dark.34208d06.svg",revision:"34208d0652668027b5e1797bdafd2da9"},{url:"assets/img/warning.950d1128.svg",revision:"950d1128cc862f2b631f5d54c3458174"},{url:"assets/js/125.a8b066ed.js",revision:"b92a1d9ee57a8f1acd166e625ccc00ff"},{url:"assets/js/126.683ba149.js",revision:"e00217722b10c90be2edd83d6be611a3"},{url:"assets/js/127.b650c9de.js",revision:"6305a309f46beb7b3f96ebfaffcf6753"},{url:"assets/js/128.d783d407.js",revision:"e2db3743a7d800608bc11a15dafb0895"},{url:"assets/js/app.c946ae1a.js",revision:"6402f067623881d887e5d2abff6e0d7c"},{url:"assets/js/layout-Blog.06c2e75f.js",revision:"421d6602880fcdf21ca72dd71265ffc9"},{url:"assets/js/layout-Blog~layout-Layout.cab721f5.js",revision:"0da1e89432094572bde3172b1d5f068b"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.990d8a87.js",revision:"e9104a5253adbc38bccb2e237415e89d"},{url:"assets/js/layout-Layout.6155a550.js",revision:"2494dc8743a508369c80ac1fc54de3a8"},{url:"assets/js/layout-NotFound.52c29617.js",revision:"efa109ca952d4cd6c50660e8be26f29e"},{url:"assets/js/page-AboutVuePress--4a71114e.5590ee72.js",revision:"8f2ca2ca3c0189e7ebf301fbc0b91596"},{url:"assets/js/page-Basic--770cb96b.8a9f859a.js",revision:"8e3615b4037f2851900e60cbb9513975"},{url:"assets/js/page-Bloghomepage--64265752.7141e934.js",revision:"2fdf6d7a859bd10659de48d0418f5efc"},{url:"assets/js/page-Blogrelated--17c260a2.5bff01f5.js",revision:"25a271b7d1da56cf3073ab04a4d2a3f5"},{url:"assets/js/page-CommentFunction--5bb6671c.e1cd37eb.js",revision:"5cb4df6145b3c61530fcfaeae1af94e3"},{url:"assets/js/page-Commonproblems--2b571e9b.37d8a120.js",revision:"0a6dea750baf00d22c3f50fea8f19ab4"},{url:"assets/js/page-Config--35a0a7d9.dc6a7685.js",revision:"6fdfe2dfcec8a15995205f8e086e3887"},{url:"assets/js/page-Customalignment--4f21aa5c.4c7b4748.js",revision:"a98220a46e4a10e4b926c192ae8307b2"},{url:"assets/js/page-DarkmodeandThemecolor--e23e731c.79369cf5.js",revision:"930ed3f1294b485118e3c8e54c6c6221"},{url:"assets/js/page-DefaultThemeConfig--3cbef5e2.c3201fb7.js",revision:"a95f6e57ea2b9a93f7a6359ace49d2b3"},{url:"assets/js/page-Demos--f328658e.18e28747.js",revision:"0de04a4f6c4147f26dac4abd935e96d5"},{url:"assets/js/page-EmojiList--41bb29b9.09eca8d0.js",revision:"720a39d879980b4dd0851536a55e9d82"},{url:"assets/js/page-Emoji列表--404e6737.149f13e5.js",revision:"9f91e10ad6195b2fe01d74f50172898f"},{url:"assets/js/page-Encryptionfunction--181bdc9c.777f2966.js",revision:"6bbda5b401eb5a5d16a36540c4660b4f"},{url:"assets/js/page-FileStructure--665a4f1c.4d348ce8.js",revision:"dda59dd2f13c21cb8c33a9e0ef3ab289"},{url:"assets/js/page-Flowchart--7ce6d974.07c3ef64.js",revision:"65cc7a90ac16c051987ff05d7a8d2312"},{url:"assets/js/page-Footnote--0c733e52.b27fdb7f.js",revision:"fdbe2ecfee2e386da5222d2fe2428bbf"},{url:"assets/js/page-HomePage--5834599c.3d0093d3.js",revision:"665131c8e316127dd6e64a7f90feefba"},{url:"assets/js/page-InstallUsage--0ab466d2.89eeef01.js",revision:"e7d10c21b34663e2cec83cc055eb4174"},{url:"assets/js/page-Introduction--d4910962.151827e6.js",revision:"3f5c8324e3ac7ed62215143032d0a0c8"},{url:"assets/js/page-Layout--12bd4f0e.9258f251.js",revision:"ee8f160ea07c5e907f062b5df43c996a"},{url:"assets/js/page-MarkdownDEMO--c3e1bfdc.c5ac001e.js",revision:"3d82995925a561bb74ecb3ddc0a8ae37"},{url:"assets/js/page-MarkdownEnhance--ad9dba8e.66489402.js",revision:"b92272987191cc9bd571437121aab52d"},{url:"assets/js/page-MarkdownIntroduction--270989ce.77680585.js",revision:"570a061179959e42a6362489915b1393"},{url:"assets/js/page-Markdown介绍--0e6891b6.23c918d1.js",revision:"59708ee9805526146895153bf4740774"},{url:"assets/js/page-Markdown增强--6162938f.284f19cf.js",revision:"510a80817b10940d3072220744cb1eb0"},{url:"assets/js/page-Markdown示例--5479fe88.2f6d5a04.js",revision:"519a0600d628adc7d76b53baee3af102"},{url:"assets/js/page-Markup--6b1f341c.e99b1673.js",revision:"bd7cb5ab66b0c169a0b6c93e2162db40"},{url:"assets/js/page-Nature--749fb09c.7da489f3.js",revision:"8e67500b1d9dae05a916d7ed5b8544a6"},{url:"assets/js/page-NavBar--c7bf87dc.9513dac1.js",revision:"f34f1077ce2e12caea3f1db007e57a41"},{url:"assets/js/page-NewComponent--1d138c72.5f730dc0.js",revision:"cac83e2b510f7996a1a1578a3850cb68"},{url:"assets/js/page-Newfeature--5136c541.cd947b89.js",revision:"e88555f0942ca2b252663a729d679a7d"},{url:"assets/js/page-Object--16031ab2.4b9f4dfe.js",revision:"0dc7437b1cbaa733ee7ebf5ce4b2fbcd"},{url:"assets/js/page-Page--af17b59c.9307464f.js",revision:"00368e7af80f0648d0e917606ccaf0c4"},{url:"assets/js/page-PageConfiguration--0aacc152.3cc254ed.js",revision:"3e233caf11be7411365f728e123b9338"},{url:"assets/js/page-PageEnhance--03665ac8.53fb3fce.js",revision:"5dd51c4fd74a130200b33ad06965d94b"},{url:"assets/js/page-Pageinformation--71efd5d2.e6422c81.js",revision:"88e66dbc5e0911d5f9f79e3f08876941"},{url:"assets/js/page-People--2182769c.1231df62.js",revision:"e6e5ce91e9525bc7b27c75f67e5d4395"},{url:"assets/js/page-Place--951cdc00.e078c3e5.js",revision:"3e13c13bf9c3385dd402611a8df59ab9"},{url:"assets/js/page-PluginDescription--137c6c07.01b2c445.js",revision:"d8e6b18b1261537c1525a1244053f5f7"},{url:"assets/js/page-Plugins--adbf415c.5d3eb584.js",revision:"fd1e1e99010ca97948679f05d946b1c8"},{url:"assets/js/page-Presentationsupport--8f8e54dc.1af68842.js",revision:"2325ce6b281ccad80b2f60a3d2512485"},{url:"assets/js/page-PWA--01089712.3aef2acc.js",revision:"f57dd9c551744c0ddef4b89698e4a458"},{url:"assets/js/page-PWA--243ef2b8.9ca84475.js",revision:"9207c113620ebb7e5aac0705e6b361cd"},{url:"assets/js/page-SEOandSitemap--ccd3659c.903fd8f0.js",revision:"d1eecd20d089fc87c467016a01fa7d06"},{url:"assets/js/page-SEO和Sitemap--2853f164.c9aabb77.js",revision:"2f0612407b48bd3c88ab26e87f45e360"},{url:"assets/js/page-Sidebar--2fa1ea2c.f3ded2e1.js",revision:"24a41fd282b4537a9cecc3c54d95e334"},{url:"assets/js/page-stylusconfiguration--6796cdf2.8f804fdc.js",revision:"36590eaca968334008754b364ea0d4a9"},{url:"assets/js/page-stylus配置--0ce19a82.fb1365b9.js",revision:"77d6725002474a9e3f1483a0cc8ec161"},{url:"assets/js/page-SuperscriptandSubscript--895c91b8.7df3c17b.js",revision:"85cc07879a87c6033da3f6f8c39c748e"},{url:"assets/js/page-Symbol--a9259c5c.4b39bd16.js",revision:"c3e2224ad5b181f4e641e8928b77a7c8"},{url:"assets/js/page-TexSupport--64cb5e50.2e00f249.js",revision:"922bfac6fc4f72332c5dfec4897041be"},{url:"assets/js/page-Tex语法支持--1e02b152.091fe3d7.js",revision:"3aebb367c9fc05a1c136cbacfde13eb6"},{url:"assets/js/page-ThemeConfig--1120a0ce.4fd501d9.js",revision:"05f80e3712470f2278001648831db05b"},{url:"assets/js/page-ThemeConfig--1726e14e.ada844a5.js",revision:"e2b6f19dbe7745927044e53fcc851eff"},{url:"assets/js/page-ThemeFeatureConfig--2ccd2db8.98f832d6.js",revision:"95f6ad5280c795041788b09b27b05660"},{url:"assets/js/page-ThemeLayoutConfig--733513aa.801c2035.js",revision:"f1caf3a6bd99aeb95ecf3cefec80d1c9"},{url:"assets/js/page-ThemePluginConfig--958196dc.df11a3d4.js",revision:"3f48271ac77c7477be59142322273c68"},{url:"assets/js/page-TSsupport--09728ac8.e8c83295.js",revision:"88f240b29311aa2f15a378fa5da765c2"},{url:"assets/js/page-TS支持--4625f812.fde39bea.js",revision:"2921e570fb3606c8e3fc7069ea3e08f7"},{url:"assets/js/page-VuePress--b7060eee.63db21dd.js",revision:"462bc1bfe7490330017e53d528e1d6bd"},{url:"assets/js/page-vuepress-plugin-container--31498112.03c6ca2d.js",revision:"35979ed0670867efcbc90f01c50f54d6"},{url:"assets/js/page-vuepress-plugin-container--606dbc5c.be9ddb55.js",revision:"c1138c7421e6e8c87d2b7f9d443628d1"},{url:"assets/js/page-vuepress-plugin-copyright--5242f65c.20794f6d.js",revision:"63d13f038b906bd75e9076084b61a585"},{url:"assets/js/page-vuepress-plugin-copyright--6d3913d0.1cc19d1b.js",revision:"5bf244ac8dc5df7f924c6f55e13fc62d"},{url:"assets/js/page-vuepress-theme-hope--354da24e.5cecb56c.js",revision:"590f95cc5ed8b896c3f91e223b9e6312"},{url:"assets/js/page-vuepress-theme-hope--776d8369.5c2c47fe.js",revision:"db5ace88310c320da90ee940d519cbd5"},{url:"assets/js/page-VuePressCases--082972f2.58c04256.js",revision:"b2d087a8f3fbccf07fe3ae93de8f7524"},{url:"assets/js/page-VuePresscommands--9f3f316c.bf00735d.js",revision:"a2ca3a1aa8d22f9a08893dba037ccf92"},{url:"assets/js/page-VuePress案例--531d5f3e.f99009bb.js",revision:"ec2615f72e8f90f8854d807474bd5198"},{url:"assets/js/page-上下角标--8efed9dc.cb16c9a3.js",revision:"926b9e224379859fd4d49c8da6b19885"},{url:"assets/js/page-主题功能配置--5bb71452.caffd02e.js",revision:"dd671237f36193d8e91e795ab43bad72"},{url:"assets/js/page-主题布局配置--7db7eff2.1243cd2e.js",revision:"d039695432233526f00ec5465c75f91f"},{url:"assets/js/page-主题插件配置--1b0c3e98.87836940.js",revision:"86b293ceca2f3034f5e0e93c836fdf67"},{url:"assets/js/page-主题配置--21dc088d.10f7aab5.js",revision:"da28e6f7bc67f4a3fc0b961e1a787b44"},{url:"assets/js/page-主题配置--2c572572.c83a80a0.js",revision:"20d69c349b6832ef5252b9f94f4a791a"},{url:"assets/js/page-人物--b4fc27dc.2aa8e5c8.js",revision:"949993e4e7ffaa5fac0dd41a602fb4e8"},{url:"assets/js/page-介绍--2e99d139.fee37cf6.js",revision:"8f8af6fb25ff7310b30a175ff9bb8dbe"},{url:"assets/js/page-侧边栏--43054cb2.b68034a7.js",revision:"370feb7849783e4859439cb7868235cc"},{url:"assets/js/page-加密功能--2361b7e4.ccdbe545.js",revision:"14debb316194f6ea11e95dac2dba8364"},{url:"assets/js/page-博客相关--6a3fd4f2.0232cf75.js",revision:"328efa85a9189b191f4dc3fca4eae1be"},{url:"assets/js/page-博客首页--1eb2b298.58c5d1e6.js",revision:"306ae07bba29d5d8f39965c4f47d281e"},{url:"assets/js/page-地点--6710785c.06da872e.js",revision:"3e23b614bf44f50f04e477abb07aa180"},{url:"assets/js/page-基础知识--4d466a79.075d3e27.js",revision:"360290312dee3c4262e2fafa7792fc32"},{url:"assets/js/page-安装使用--76e0e5b0.c4cb3092.js",revision:"4a548e4050b949b1d797f95cfbd198e3"},{url:"assets/js/page-对象--e150da9c.981aa64a.js",revision:"89ad4b6c33d3c37154170ccbadf6cb13"},{url:"assets/js/page-导航栏--183844fc.c5c3ae36.js",revision:"9fc1090a8613a0ee57bf45fa4353264a"},{url:"assets/js/page-布局--fa93e36a.21de1988.js",revision:"7bea1001838c8bc29030e7f0ff5bf576"},{url:"assets/js/page-常见问题--10ab790e.824b066a.js",revision:"7ccad63d0a16bb3da0c9c7ac716e19bf"},{url:"assets/js/page-幻灯片支持--5808e664.e56385f8.js",revision:"d19ea143198b93951d6b258dece3c70b"},{url:"assets/js/page-插件--32355f10.d4269e6a.js",revision:"7ce87e1489b8e010bb56d17fb5e09df2"},{url:"assets/js/page-插件说明--cbca1c8e.0df9d393.js",revision:"3c7f0df4edb7909411951343644e45a9"},{url:"assets/js/page-文件结构介绍--ed6a9eb4.3947e8f9.js",revision:"342e79ea6d8dbf5874045ef80814b5da"},{url:"assets/js/page-新增特性--30c6c799.fe0da505.js",revision:"f0aaf692c54f14aee1d3cb0b1a0b935e"},{url:"assets/js/page-新增组件--0979095e.be4225a5.js",revision:"7fb97b250a0eb053dc304f9685665725"},{url:"assets/js/page-标记--0ac52704.66f7c7ad.js",revision:"65d80c918fd623551c1e29d9ae4cd8dd"},{url:"assets/js/page-流程图支持--582eff1c.a6719eac.js",revision:"51f1096cd1101fdef62da2c72298c572"},{url:"assets/js/page-深色模式与主题色--01662674.e017d12b.js",revision:"27048ade2bbf423ba598c67c11c04367"},{url:"assets/js/page-符号--2db8fb80.67e39473.js",revision:"3ffd1e79aaa0d1548afd316ff8f6eedc"},{url:"assets/js/page-脚注--17d88350.71347a23.js",revision:"28916b62b8d00d1cf7e3d7b339d8c237"},{url:"assets/js/page-自定义对齐--048d31dc.6b56c7d7.js",revision:"7ae208e3bb22f6ef6645a1c148a2d28f"},{url:"assets/js/page-自然--7ec33be2.ef3cbd51.js",revision:"9f7879592d89cf226c62f96bd1a2ef0c"},{url:"assets/js/page-评论功能--350aff9a.bff7a2a7.js",revision:"14abdcf6b87a0d68470ec94140384895"},{url:"assets/js/page-配置--d315f8fe.bba737d7.js",revision:"57a2d2b387883b47c7516118118936f3"},{url:"assets/js/page-页面--78423bfe.8fef43d5.js",revision:"0e3db7500c6ba09e40577820fa46f030"},{url:"assets/js/page-页面信息--455b9800.8d370ec6.js",revision:"1e0eceb2dc8db2db975ba766be0d8cca"},{url:"assets/js/page-页面增强--2e4cf75c.cab65c4d.js",revision:"4e857dd6829b54022897ce152ad9eaeb"},{url:"assets/js/page-页面配置--02399408.3750c7ba.js",revision:"504def7c968aa07721114ea9290ed98e"},{url:"assets/js/page-项目指令--2f3d7c1c.37a6cba4.js",revision:"bb5150d11b47f16ab64961dc7afeda99"},{url:"assets/js/page-项目案例--1f3d6482.f7700b0f.js",revision:"e6555c96596a22aa6dd252d860c0e175"},{url:"assets/js/page-首页--79a22944.4eb6614c.js",revision:"878b8fb376ab07ccd99195b6aae36f82"},{url:"assets/js/page-默认主题配置--0d5b7f32.fb4fcbb5.js",revision:"0b9a6a89fa337d23fe2bb96e06019fa0"},{url:"assets/js/vendors~docsearch.4b52ed2d.js",revision:"1c0ae6697a371b061bc84f27cefe7052"},{url:"assets/js/vendors~flowchart.b3a5b488.js",revision:"cd2a0199cdc192734d9804a179c2628d"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.b9db2285.js",revision:"d4b4e2a0a77a0699abcead6ab5d46765"},{url:"assets/js/vendors~photo-swipe.60ed6540.js",revision:"05623cd149bcb2dfce573ddcbe586745"},{url:"assets/js/vendors~reveal.8827293d.js",revision:"a24e11d81260d3c8bbd2fd4146ad1422"},{url:"assets/js/vendors~valine.8cb10463.js",revision:"e7e3dfe0f64a8adff71d688b954f5c00"},{url:"logo.svg",revision:"e5d2cc16443a59035e0fa55c746f7d51"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"404.html",revision:"7f0266477de9b3fb4e171a723af8323f"},{url:"article/index.html",revision:"ea0e0574c070f60d213854ab665441e4"},{url:"basic/index.html",revision:"c97174fd950e4f3b6e204d5877430de4"},{url:"basic/markdown/demo/index.html",revision:"d24faa123aecf7a2a32aa5427f307b78"},{url:"basic/markdown/emoji/index.html",revision:"43a47ec82e731b5c711120f77a028b05"},{url:"basic/markdown/emoji/nature/index.html",revision:"06f041e5d3fc171974cae6b8a1b57ac7"},{url:"basic/markdown/emoji/object/index.html",revision:"d84dae22a50fca4c40e4dfe00132a374"},{url:"basic/markdown/emoji/people/index.html",revision:"410201ca0096096eabd817ffd23747be"},{url:"basic/markdown/emoji/place/index.html",revision:"d6b46f672717dbf967b2319533ec0359"},{url:"basic/markdown/emoji/symbol/index.html",revision:"8557d2c003b914c07156cff65f065519"},{url:"basic/markdown/index.html",revision:"b113c5569dc53bc72f9632ad5fee74ac"},{url:"basic/vuepress/case/index.html",revision:"6c255b12e3ebac39757979d451ab82e9"},{url:"basic/vuepress/command/index.html",revision:"9a3bc4b406a3e2ec3525b92f37e520ca"},{url:"basic/vuepress/file/index.html",revision:"43daf0bfb099ab11d6d3ac9c621f98ca"},{url:"basic/vuepress/index.html",revision:"8bb76cf0fbe9751a99fcacb5dd1164a6"},{url:"basic/vuepress/plugin/index.html",revision:"41afc82cf1e7c98154e62f33f99c8859"},{url:"basic/vuepress/theme/index.html",revision:"1c25eab419474179a18dca826f50426c"},{url:"category/basic/index.html",revision:"c8ff114dd9d849768941660b508f342b"},{url:"category/basic/page/2/index.html",revision:"95b21ff1001580befeea1bbdce0908e1"},{url:"category/basic/page/3/index.html",revision:"7dee9812c338b7dcd91a8b93fec1ef52"},{url:"category/config/index.html",revision:"20ea9b834322552697d971537da26c61"},{url:"category/config/page/2/index.html",revision:"148e2d4f974123757668bd9677ed02e2"},{url:"category/config/page/3/index.html",revision:"a0044b1738e5b861dfd7ab8e492282aa"},{url:"category/demo/index.html",revision:"6a99a71004c9d034dc28f595563db62a"},{url:"category/FAQ/index.html",revision:"278db8b7b590e6befeb3154b52211117"},{url:"category/feature/index.html",revision:"1c1e88b109c54211bd339665cad1f2c1"},{url:"category/feature/page/2/index.html",revision:"a370f60fade7ca5480084a9010f14be6"},{url:"category/feature/page/3/index.html",revision:"2ffb9946e219168302d93a0ec217dd3f"},{url:"category/index.html",revision:"3860ddab9ec447459d5b3169d1c6f2f2"},{url:"category/instruction/index.html",revision:"343428dee1548c6bcb0eb258ec7a0ebe"},{url:"category/layout/index.html",revision:"7dfb1b5680f48a3d36399f4a8e22b9e9"},{url:"category/layout/page/2/index.html",revision:"1c53519834e4b7fd68c9606149899e6f"},{url:"category/markdown/index.html",revision:"3e8bc9fefdf3f0c4f24885fda7ad5566"},{url:"config/index.html",revision:"fa64e7d1827713822210b48576c2fb9a"},{url:"config/page/index.html",revision:"53cde385ec81536815562becfca280ed"},{url:"config/plugin/container/index.html",revision:"0abca7b18b0e86a623bf79a1a8fe5ff2"},{url:"config/plugin/copyright/index.html",revision:"de041c4d0f9f23facf154f2e089b7604"},{url:"config/plugin/index.html",revision:"d70e4955de77508880e6ce1861628da9"},{url:"config/stylus/index.html",revision:"dfeb41dcf2f51e8de0e9850dc78c04a2"},{url:"config/theme/apperance/index.html",revision:"087f4ba84382c6927c920017df94f23c"},{url:"config/theme/default/index.html",revision:"c6ec9da235d9d6dfba1145405bb72e9b"},{url:"config/theme/feature/index.html",revision:"25c9ae060d527df35a8dab810269ba32"},{url:"config/theme/index.html",revision:"f2b5f9359acccd238a40a6f729c8f41a"},{url:"config/theme/plugin/index.html",revision:"384850b5aa5e94709714d184c8acbe78"},{url:"demo/index.html",revision:"cd7c07cab85484207540b4b624f81611"},{url:"FAQ/index.html",revision:"054e0375b6e815757dfa2c3201de5ab2"},{url:"guide/feature/blog/index.html",revision:"cef4dc3c536527fe5797f626ae9dbc1c"},{url:"guide/feature/comment/index.html",revision:"0de0a33e3caec9dedf5fbeeb3519d0dd"},{url:"guide/feature/component/index.html",revision:"d04a75609d7cac74f96df9d46801ca84"},{url:"guide/feature/encrypt/index.html",revision:"028483d8754be45302c87b745fcf1797"},{url:"guide/feature/index.html",revision:"d6584b5a18b471ceaabb4b3723dbecd9"},{url:"guide/feature/markdown/align/index.html",revision:"11a7f45ce383c827a2fd462d22d12050"},{url:"guide/feature/markdown/flowchart/index.html",revision:"43b7443a6d0ef17058882224588ff3ed"},{url:"guide/feature/markdown/footnote/index.html",revision:"956f2809aa2d7a25e5749a1feb696bb6"},{url:"guide/feature/markdown/index.html",revision:"98561c168742d78b8ace0baf1bf12cf9"},{url:"guide/feature/markdown/mark/index.html",revision:"e168a7e81b1582183364d5f5f76e20b4"},{url:"guide/feature/markdown/presentation/index.html",revision:"fe91178af8e3a1b0bd71d40380e170c6"},{url:"guide/feature/markdown/sup-sub/index.html",revision:"e118abd41c4965974a37aaa7c89be305"},{url:"guide/feature/markdown/tex/index.html",revision:"a5ff995e7d20f362595021ce0dab4dfa"},{url:"guide/feature/page-info/index.html",revision:"61e1a8eee5891d5f1323e04848ec9399"},{url:"guide/feature/page/index.html",revision:"900f2fc9bdcb620f5e53a7b73ea98588"},{url:"guide/feature/pwa/index.html",revision:"8e11a055500afc282ccba7419e0a22d8"},{url:"guide/feature/seo-sitemap/index.html",revision:"5001fae0772971d287a95a27f27cbc0f"},{url:"guide/feature/theme/index.html",revision:"77fc24437aaa9873babdf714c0341fd7"},{url:"guide/feature/typescript/index.html",revision:"ee3a9bbf5bc09b5c8d2f4f38d25c0282"},{url:"guide/index.html",revision:"644995bbdd9f7ee2a2c699bc705aaad4"},{url:"guide/install/index.html",revision:"ac084fdfdfd1d5c3adda5a347efbcea8"},{url:"guide/layout/blog/index.html",revision:"fff0fd6aacb74401c70f74dde4d5cb9f"},{url:"guide/layout/home/index.html",revision:"29e1c00dcc809eea6693f30fb53800b1"},{url:"guide/layout/index.html",revision:"d05c8f92f1e7066120afa71948e77ac7"},{url:"guide/layout/navbar/index.html",revision:"e7e0790dde13a0e307d78ac00627cd72"},{url:"guide/layout/page/index.html",revision:"23d29d05f0f5b88d7a4a18f84b635be5"},{url:"guide/layout/sidebar/index.html",revision:"e7beac65937f617b54636ce71d926fa4"},{url:"index.html",revision:"e132feb97abd081cab6d08f6b1ef25c1"},{url:"tag/blog/index.html",revision:"c8ef4814006ea6b1d677037d64e80f06"},{url:"tag/comment/index.html",revision:"bc3320a4cf520d69486ced0ab50e0945"},{url:"tag/components/index.html",revision:"ab95302d3a9fc1dc934a4dbdb02d4719"},{url:"tag/config/index.html",revision:"29f9c10669cecf9d87cded5a68e27adb"},{url:"tag/config/page/2/index.html",revision:"d3fdbb62adfbe290a8bcb7347171d682"},{url:"tag/config/page/3/index.html",revision:"1e875dc11c3e5e8c351068ac337fdc3e"},{url:"tag/emoji/index.html",revision:"ffc547f35efbd5bc1af0aaabb5f265e6"},{url:"tag/emoji/page/2/index.html",revision:"2173b3f7deae0958e1b91139daccdf28"},{url:"tag/encrypt/index.html",revision:"43bf5312a84f732ef0cb3d1e18829a63"},{url:"tag/feature/index.html",revision:"a30271ae5ee09a0073e3532b08a21fac"},{url:"tag/feature/page/2/index.html",revision:"e95bbb36a924110ba1b51ae643fc9865"},{url:"tag/feature/page/3/index.html",revision:"5a1a8d53c3155277c9dd87d6c533c9e0"},{url:"tag/feature/page/4/index.html",revision:"7d7880fb9b9ce0bb3e2eb03f85d5fd01"},{url:"tag/frontmatter/index.html",revision:"4ef1830a6ba243383473136ad09f40a1"},{url:"tag/home/index.html",revision:"c06e1a50acd72353589f44853aade7de"},{url:"tag/index.html",revision:"ce491ea0b502cead9d3bbe17b6dce972"},{url:"tag/intro/index.html",revision:"fa13249db8faea49cea866ec1efc8852"},{url:"tag/layout/index.html",revision:"8492e3b7a8799e70c5a0975eec4d07fc"},{url:"tag/layout/page/2/index.html",revision:"71e98ca865ab7192205807677ae0e4fd"},{url:"tag/markdown/index.html",revision:"9125387c787ca96504fd17d2b33d7b88"},{url:"tag/markdown/page/2/index.html",revision:"e9dce4fae7deb8755eecfc814e385def"},{url:"tag/markdown/page/3/index.html",revision:"8bc58f0b69942b2457ca6a42a2feba2e"},{url:"tag/navbar/index.html",revision:"e7005b9372472c455b1aec16342089cd"},{url:"tag/page-info/index.html",revision:"38f29e701e236c4809a8c7ec763e2360"},{url:"tag/page/index.html",revision:"035117f3c3d58d205af1524be3790e08"},{url:"tag/plugin/index.html",revision:"9b1a489a21dfa3ecb1318b5d6c307de1"},{url:"tag/pwa/index.html",revision:"bfd64b778c9020bb47e4d3f6e595806a"},{url:"tag/seo/index.html",revision:"47ad8448cf48625d1ecc2f82299b48fe"},{url:"tag/sidebar/index.html",revision:"f2fea3a53a09e53b028b7c4ac4a71702"},{url:"tag/sitemap/index.html",revision:"476e0a1cfe51e8a0403fb2ff6901d3ba"},{url:"tag/style/index.html",revision:"2f8b404e41483fa373ea04986b3acedb"},{url:"tag/themeConfig/index.html",revision:"0de0baa690f0e4987668a77a2b20bf2f"},{url:"tag/typescript/index.html",revision:"14739dfe39c5a0fddce7f42573b6f906"},{url:"tag/vuepress/index.html",revision:"fe8f33e513a653f2d93efbe4bf4d59d9"},{url:"tag/vuepress/page/2/index.html",revision:"e9e244767a1ecdc1bb136a8ae1b22bc3"},{url:"timeline/index.html",revision:"de6f81864dd582ec00b4de86735c3812"},{url:"zh/basic/index.html",revision:"770039bd2f47af34bc1b0627f393babd"},{url:"zh/basic/markdown/demo/index.html",revision:"710070772d92b6ad672574422be68ef0"},{url:"zh/basic/markdown/emoji/index.html",revision:"2d638e73195a75e503b6463af1651b31"},{url:"zh/basic/markdown/emoji/nature/index.html",revision:"27b14abde114b8054968bb2872754a1b"},{url:"zh/basic/markdown/emoji/object/index.html",revision:"d4adc3c76677dbf22a9d42799be039e5"},{url:"zh/basic/markdown/emoji/people/index.html",revision:"86849c3d954e5987e400a18268ac4830"},{url:"zh/basic/markdown/emoji/place/index.html",revision:"25563bd76318adb3a1fdc6fa9e02e9c6"},{url:"zh/basic/markdown/emoji/symbol/index.html",revision:"07ec808a91091ab23ba476201fe1d7aa"},{url:"zh/basic/markdown/index.html",revision:"6fdc64bf4534602d7dcea4ed49122de8"},{url:"zh/basic/vuepress/case/index.html",revision:"daf599007a6dd53fc8b1b2dca1ec876a"},{url:"zh/basic/vuepress/command/index.html",revision:"bfbed89e85daadab3aa819c64dc4ef45"},{url:"zh/basic/vuepress/file/index.html",revision:"3270f043dc360705c1b9dc384fb4c972"},{url:"zh/basic/vuepress/index.html",revision:"f6b4290f9d2b818d5154ae003dd2ce28"},{url:"zh/basic/vuepress/plugin/index.html",revision:"797e4f35e17603f81b84e3b72a98dcc5"},{url:"zh/basic/vuepress/theme/index.html",revision:"95b47ada20adc400b103ee85cd0accee"},{url:"zh/config/index.html",revision:"98e28a1703c001d9358895198bf3b36a"},{url:"zh/config/page/index.html",revision:"bef3b488063ab9f78533955a460c2919"},{url:"zh/config/plugin/container/index.html",revision:"6544878b8e08fbbf72db43be344731b0"},{url:"zh/config/plugin/copyright/index.html",revision:"69122e707f740a0a690a17d3e9dbdfc3"},{url:"zh/config/plugin/index.html",revision:"af82cf7faaa5db5806cb21c2cad4283b"},{url:"zh/config/stylus/index.html",revision:"d56257c9f36779f6d68e46a29e80e13b"},{url:"zh/config/theme/apperance/index.html",revision:"50486dd3b9133edb19b39331730b3b6e"},{url:"zh/config/theme/default/index.html",revision:"7953f7cdd4a4f50ad3f81bcc927430d5"},{url:"zh/config/theme/feature/index.html",revision:"a3b3f30e5137e8da40304872c95d86fd"},{url:"zh/config/theme/index.html",revision:"50fcfefc2484023537dda171203003ab"},{url:"zh/config/theme/plugin/index.html",revision:"a92b1b264ebd7b27dbe5d971e7005edf"},{url:"zh/demo/index.html",revision:"67f1e414cef87e64dd2955ffbc010dab"},{url:"zh/FAQ/index.html",revision:"02ea31d00b4b50dc7e29fc56eeba594a"},{url:"zh/guide/feature/blog/index.html",revision:"0491f7c1dbef144aa9a08f4b542e32dc"},{url:"zh/guide/feature/comment/index.html",revision:"8dec10ffe3428a49efab72cb2d5f2c65"},{url:"zh/guide/feature/component/index.html",revision:"142be71d17f1b23054e4a875422d1a8f"},{url:"zh/guide/feature/encrypt/index.html",revision:"b9828b15918c52e94b26c4ab62d44c66"},{url:"zh/guide/feature/index.html",revision:"ad52bac4647cc2c3a0c235efd69af627"},{url:"zh/guide/feature/markdown/align/index.html",revision:"009c9f2fd7f1f92ef8e0222e167ffa53"},{url:"zh/guide/feature/markdown/flowchart/index.html",revision:"28606ef47bc1591681bcd162b331528e"},{url:"zh/guide/feature/markdown/footnote/index.html",revision:"202c36ff2c8e7d54957758fcf3e62527"},{url:"zh/guide/feature/markdown/index.html",revision:"8e4cfbbdc6a423f9151ce45b5f0f8e4f"},{url:"zh/guide/feature/markdown/mark/index.html",revision:"a900f9447eefd399698d8de640a71ec6"},{url:"zh/guide/feature/markdown/presentation/index.html",revision:"84ea4d6991dad3adb16a675c678ce2f8"},{url:"zh/guide/feature/markdown/sup-sub/index.html",revision:"a946deb4d8df02076cdb575b98683ece"},{url:"zh/guide/feature/markdown/tex/index.html",revision:"00f1090d540a35de2038fa971474cf7c"},{url:"zh/guide/feature/page-info/index.html",revision:"f255169202ea837278f0e6b851e901fe"},{url:"zh/guide/feature/page/index.html",revision:"16215dbcfec5db1af8c6ca9029cc295e"},{url:"zh/guide/feature/pwa/index.html",revision:"1762cc9ef9e5fb37dc152456c3217427"},{url:"zh/guide/feature/seo-sitemap/index.html",revision:"87c178737af1ece93852517a063b1ffd"},{url:"zh/guide/feature/theme/index.html",revision:"dc3768ba690d692e75c7bb1fa435b414"},{url:"zh/guide/feature/typescript/index.html",revision:"d37633d0eb1f6e3d9d6cb892d15f3013"},{url:"zh/guide/index.html",revision:"b0a53945653025829376058d070a8e11"},{url:"zh/guide/install/index.html",revision:"29c11273c10208fa0df709c8466bc28a"},{url:"zh/guide/layout/blog/index.html",revision:"1f1cc52341ae271a9851f2bb122637e3"},{url:"zh/guide/layout/home/index.html",revision:"b15978d6f702a703a69b803087482cdd"},{url:"zh/guide/layout/index.html",revision:"7fdd29b40c5cb94b12a232fac1f952e7"},{url:"zh/guide/layout/navbar/index.html",revision:"c5103ad5c5c2148cf4ed68605431d336"},{url:"zh/guide/layout/page/index.html",revision:"3276110abcf12c0ce4e44a7cf60b5eea"},{url:"zh/guide/layout/sidebar/index.html",revision:"6c6bd6f67f7b13d4f31e61cb82db7304"},{url:"zh/index.html",revision:"b27da612c2ff55a55a07af97758913f2"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/basic-maskable.png",revision:"f8d551d8ef147c1646f1e2c58fe2505a"},{url:"assets/icon/basic-monochrome.png",revision:"87fc5134cac865cffd6b509007f232a0"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/config-maskable.png",revision:"ce366917fddedd9a219002bc85e30f7e"},{url:"assets/icon/config-monochrome.png",revision:"e1cfbcd831e4b4d09daab55617268e10"},{url:"assets/icon/guide-maskable.png",revision:"58005fdee0b6a97ce98c290895823947"},{url:"assets/icon/guide-monochrome.png",revision:"7e7eb82d5ef0a4f21d939eab32acd1c4"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/architecture.9a93cf6c.png",revision:"9a93cf6cea38878e19c5816d1af28b17"},{url:"assets/img/category.02cce400.png",revision:"02cce400a63e98252eefb9437bd10fac"},{url:"assets/img/darkmode.067c07c8.png",revision:"067c07c843f68e66c6ff31374d6344ac"},{url:"assets/img/darkmode.baaa33ce.png",revision:"baaa33ced9083586bc60fa6e9a5cd013"},{url:"assets/img/home.3e7cd8a1.png",revision:"3e7cd8a1727edc0a8592d15ce87dab5d"},{url:"assets/img/home.f9d474ce.png",revision:"f9d474ce8ff32e58f5c5a8aec5b93540"},{url:"assets/img/homeImage.56f13b5d.jpg",revision:"56f13b5d598a4feab49dd969ac9fd2ff"},{url:"logo.png",revision:"a4106d3bbae58733d609f32044a86a39"}],{}),e.cleanupOutdatedCaches()}));
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
