if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,i,d)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const c={uri:location.origin+a.slice(1)};return Promise.all(i.map(a=>{switch(a){case"exports":return s;case"module":return c;default:return e(a)}})).then(e=>{const a=d(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-2328f127"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"404.html",revision:"bb6699945ecdc5d501ddf698bd8259e1"},{url:"article/index.html",revision:"4c234534ed6615005e903e958db591a3"},{url:"assets/css/0.styles.b6acfb0d.css",revision:"2ccea82a8cff5bf34f8234eff7fc23cc"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"assets/icon/appleIcon152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/msIcon144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/architecture.9a93cf6c.png",revision:"9a93cf6cea38878e19c5816d1af28b17"},{url:"assets/img/blog.28e68cac.png",revision:"28e68cacce1e0d9b91b68324cb73cd8a"},{url:"assets/img/bulb.fa255ccc.svg",revision:"fa255cccbbef66519a1bb90a5bed6f24"},{url:"assets/img/category.02cce400.png",revision:"02cce400a63e98252eefb9437bd10fac"},{url:"assets/img/danger.950d1128.svg",revision:"950d1128cc862f2b631f5d54c3458174"},{url:"assets/img/darkmode.067c07c8.png",revision:"067c07c843f68e66c6ff31374d6344ac"},{url:"assets/img/darkmode.baaa33ce.png",revision:"baaa33ced9083586bc60fa6e9a5cd013"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/home.3e7cd8a1.png",revision:"3e7cd8a1727edc0a8592d15ce87dab5d"},{url:"assets/img/home.f9d474ce.png",revision:"f9d474ce8ff32e58f5c5a8aec5b93540"},{url:"assets/img/homeImage.56f13b5d.jpg",revision:"56f13b5d598a4feab49dd969ac9fd2ff"},{url:"assets/img/info.b3407763.svg",revision:"b3407763d94949efc3654309e9a2202f"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/stop.6e8b05e0.svg",revision:"6e8b05e040e31db4b52092926ac89628"},{url:"assets/js/110.bbc7e1f1.js",revision:"c52ba9a6bac4666f60c7d22fbcc27d25"},{url:"assets/js/app.512887ff.js",revision:"553b6abcefcce360e991b2b5cc6e9fb6"},{url:"assets/js/layout-Blog.74aded26.js",revision:"e224ec92f22e2a4987d24f2af02cc9f5"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.b7b52f30.js",revision:"ba9b44595ba678b3f5f9a3d02aaff4a3"},{url:"assets/js/layout-Layout.007f63cf.js",revision:"29d5293c00472370fd2e3093307fa419"},{url:"assets/js/layout-NotFound.a36f4f75.js",revision:"6ec461e7e893afee10557bb9bce1cda7"},{url:"assets/js/page-@mr-hopeplugin-pwa--051692f2.0196a6ec.js",revision:"9dd11794862945dfe4b88e33386d69f5"},{url:"assets/js/page-@mr-hopepwa--afe3f12c.1f4ada8d.js",revision:"f1dc68e6e1cab26de25f9f165794ad35"},{url:"assets/js/page-AboutVuepress--4a71114e.4a7e05c0.js",revision:"a17360f4785ec548895516e89ccfe8d2"},{url:"assets/js/page-Basic--770cb96b.010edae7.js",revision:"9106cdb811f5e0b943980612cd0b7c7f"},{url:"assets/js/page-Bloghomepage--64265752.a8670b33.js",revision:"1f4ad2b7c8ee6fce8874573e7f5ba8dc"},{url:"assets/js/page-Blogrelated--17c260a2.13e58000.js",revision:"9be6a9e74109256c317258d79269a230"},{url:"assets/js/page-CommentFunction--5bb6671c.1212ac3b.js",revision:"8cffbba3802cf26f007eb3186bad7bec"},{url:"assets/js/page-Commonproblems--2b571e9b.dc2c9dbb.js",revision:"c98ac64cfc853adc9708a78eb732da32"},{url:"assets/js/page-ConfigDocs--35a0a7d9.45c50ba6.js",revision:"7180e72371dd7099b5e7189c7c88ba60"},{url:"assets/js/page-Customalignment--4f21aa5c.9a3190a9.js",revision:"67bf82107e2a28b48a86a8702d180f29"},{url:"assets/js/page-DarkmodeandThemecolor--e23e731c.311e9fe1.js",revision:"1ac99003921c5c3aea9d64d27f10a473"},{url:"assets/js/page-Demos--f328658e.ef33a74e.js",revision:"5a7e6a1d8253988d3718824b6fb3147d"},{url:"assets/js/page-EmojiList--41bb29b9.0d8b974c.js",revision:"17dd03fa19e4a574f7db9d1e8fc4cb9b"},{url:"assets/js/page-Emoji列表--404e6737.0da6633e.js",revision:"dc47881d802d398bb5944480cf060240"},{url:"assets/js/page-Encryptionfunction--181bdc9c.761e0f44.js",revision:"79ab17cb406c68b040899f984ea8d618"},{url:"assets/js/page-FileStructure--665a4f1c.5d011f86.js",revision:"7328a43f991b6927cdbba7483eabb068"},{url:"assets/js/page-Flowchart--7ce6d974.458f2748.js",revision:"0575f075f10dd055bd9b56a337e7b93f"},{url:"assets/js/page-Footnote--0c733e52.a2a80b36.js",revision:"5e176913b4554adff745406f800c5672"},{url:"assets/js/page-HomePage--5834599c.2f9fcd0f.js",revision:"73a80aae49a724a8be44b49bf03c11ef"},{url:"assets/js/page-InstallUsage--0ab466d2.c87b16ab.js",revision:"fdf94954d625bb274334c62fb814cbf2"},{url:"assets/js/page-Introduction--d4910962.8ebb2a34.js",revision:"28d3028c6104b4b61456fff3abd2c336"},{url:"assets/js/page-Layout--12bd4f0e.6edff760.js",revision:"337346ca47fe0382f6678782e871a725"},{url:"assets/js/page-MarkdownDEMO--c3e1bfdc.2d99f1f9.js",revision:"621e351bf19832545d4743918fef7daf"},{url:"assets/js/page-MarkdownEnhance--ad9dba8e.c0813a10.js",revision:"e3b96de861c7e9880a945390013c9245"},{url:"assets/js/page-MarkdownIntroduction--270989ce.6bf05a38.js",revision:"58f7676c3d4231e11d9d06c4e1f42faa"},{url:"assets/js/page-Markdown介绍--0e6891b6.ba35ffbe.js",revision:"3898a1f5f648995b98515638f8547975"},{url:"assets/js/page-Markdown增强--6162938f.f726ed0c.js",revision:"c84328c7672ecadb9cab9c28188a0ceb"},{url:"assets/js/page-Markdown示例--5479fe88.7fda1398.js",revision:"8dcb6d6bc82b95f48f30c57bb861193d"},{url:"assets/js/page-Markup--6b1f341c.299b83b4.js",revision:"870da7986dfe465e65d648869a7fe447"},{url:"assets/js/page-Nature--749fb09c.566e767f.js",revision:"3de0289ee1d3e36f90a611a4676413b5"},{url:"assets/js/page-NavBar--c7bf87dc.32e745c0.js",revision:"9ddc17a8c1f306080aea7aa3f3dfb3f4"},{url:"assets/js/page-NewComponent--1d138c72.76d85772.js",revision:"f1f5b41ceb96fdfc0dd3dba7045ec03c"},{url:"assets/js/page-Newfeature--5136c541.eb3151af.js",revision:"123bd8cd0c55ae5bd43bda08e19d86af"},{url:"assets/js/page-Object--16031ab2.b389c0de.js",revision:"981947650d1266d3bab88685629b670f"},{url:"assets/js/page-Page--af17b59c.4509d848.js",revision:"3a938855f21ba44f3434fdbe95ed01c6"},{url:"assets/js/page-PageConfiguration--0aacc152.833a8d99.js",revision:"24f842cbb4b2bbf45a1ef8b6965710a4"},{url:"assets/js/page-Pageinformation--71efd5d2.d635ea28.js",revision:"d5ac6df2b6389eba4f2d98bd339528d8"},{url:"assets/js/page-People--2182769c.61cd0f3e.js",revision:"0a47eca8ecdc2c727898cd6e73d854ef"},{url:"assets/js/page-Place--951cdc00.a27f565d.js",revision:"9ef845179dfedd271355af4636e3bbb6"},{url:"assets/js/page-PluginDescription--137c6c07.9fa4b083.js",revision:"47c342d3eb8c4b05a28f8e61790a23f1"},{url:"assets/js/page-Plugins--adbf415c.68e8904b.js",revision:"401e13db9c39313f662fdd440f36b410"},{url:"assets/js/page-SEOandSitemap--5934b3b2.2f47e7cc.js",revision:"0e0099252f296e489e4b7caa7d84faac"},{url:"assets/js/page-SEO和Sitemap--35ca8b22.035a4d30.js",revision:"df09b73c0ee3d2c78bc8504d75b4e798"},{url:"assets/js/page-Sidebar--2fa1ea2c.27d7d2a4.js",revision:"d5adf63cd1767e87cc35e50e7847fd11"},{url:"assets/js/page-stylusconfiguration--6796cdf2.1626d8db.js",revision:"8edc3e7aaef272ceb50ccb71b22795ce"},{url:"assets/js/page-stylus配置--0ce19a82.ac850b49.js",revision:"efcd11bcd335b79fd5dd58aaf4f248cc"},{url:"assets/js/page-SuperscriptandSubscript--895c91b8.5ee7c6a7.js",revision:"d96ef190d39c59704bee45f4e845ed14"},{url:"assets/js/page-Symbol--a9259c5c.27209898.js",revision:"3f5717558cb95484c9bc7b58c4c5bf7c"},{url:"assets/js/page-TexSupport--64cb5e50.04230264.js",revision:"24229a90dab06b51085c485956a575bf"},{url:"assets/js/page-Tex语法支持--1e02b152.cdf03a3e.js",revision:"4456e223b8ada68b0fe023d657480b63"},{url:"assets/js/page-ThemeConfig--1120a0ce.e9610e49.js",revision:"a71bc307a5e0ded2e9e63a77325d1229"},{url:"assets/js/page-ThemeConfig--1a859dfc.75734c72.js",revision:"580397b706bc2dc4f58bb4cc90f0fe83"},{url:"assets/js/page-TSsupport--09728ac8.c94bd310.js",revision:"d92b8ae8e1e96bff3b2816a75e857696"},{url:"assets/js/page-TS支持--4625f812.852619de.js",revision:"098bba0666058a8eb5e97e46713c2021"},{url:"assets/js/page-Vuepress--b7060eee.1de1a2b3.js",revision:"a75da8068c3d5842eabd2caf10d38050"},{url:"assets/js/page-vuepress-plugin-container--31498112.e1007ca3.js",revision:"27b80b786dd588973296a536e0f9e51a"},{url:"assets/js/page-vuepress-plugin-container--606dbc5c.7ab52e26.js",revision:"1043106681bce3022eda366ca9e97c30"},{url:"assets/js/page-vuepress-plugin-copyright--5242f65c.bdf9c687.js",revision:"0d6114e22517d0eaeef739b2612a7bf7"},{url:"assets/js/page-vuepress-plugin-copyright--6d3913d0.d6ede531.js",revision:"c9f0d3d4730dcd6e7e7851698b716628"},{url:"assets/js/page-vuepress-theme-hope--354da24e.67a508c8.js",revision:"2d8ecf9b4254878ba4acc96bf210bec2"},{url:"assets/js/page-vuepress-theme-hope--776d8369.838ae650.js",revision:"630eb212d125ae4e2837306f60d5680b"},{url:"assets/js/page-VuepressCases--082972f2.5e30afaa.js",revision:"becedfdd9ec341dc71cb4b6975757f22"},{url:"assets/js/page-Vuepresscommands--9f3f316c.83277c05.js",revision:"8d0206229ca227972873bd60c0058f17"},{url:"assets/js/page-Vuepress案例--531d5f3e.2a256d80.js",revision:"c70f82d7bdd4c3199c5d4472496d29cc"},{url:"assets/js/page-上下角标--8efed9dc.7f6d7c82.js",revision:"ffc8193d90470ce6b545763259e402ac"},{url:"assets/js/page-主题配置--2c572572.1b1572e0.js",revision:"1fc8388e923cc48ffa7ca596b8b72cb4"},{url:"assets/js/page-主题配置--6ad2aa1c.b1b2e7b0.js",revision:"19444a8ef0b3e0ffb82a3ded46402dd7"},{url:"assets/js/page-人物--b4fc27dc.11d5aecc.js",revision:"37be24b204e83ed4fc9aa3da7223a8fe"},{url:"assets/js/page-介绍--2e99d139.c916f3dd.js",revision:"91efddbe801dfc2e01b5b2a711fb78af"},{url:"assets/js/page-侧边栏--43054cb2.3cdc45bd.js",revision:"58ce273318f234a22299c7d11774ecf7"},{url:"assets/js/page-加密功能--2361b7e4.025fc02c.js",revision:"593f303b03b6e6a547b3eab7be13638b"},{url:"assets/js/page-博客相关--6a3fd4f2.f94fbf55.js",revision:"f623fe7257bccddae12aa7cabc3588e6"},{url:"assets/js/page-博客首页--1eb2b298.d9f8cbd5.js",revision:"87ae997b05e1f3f9a5a4254e7cc5e1ed"},{url:"assets/js/page-地点--6710785c.64060acf.js",revision:"2f20001b74cf7c3d298eb6d6c972fd63"},{url:"assets/js/page-基础知识--4d466a79.8bdae648.js",revision:"e9421e08648f6fc677434311b1568bae"},{url:"assets/js/page-安装使用--76e0e5b0.fd8418b1.js",revision:"fdc6ab7cb0d948abfd82c5eb98e98f63"},{url:"assets/js/page-对象--e150da9c.8b8d93ff.js",revision:"40416cb92f6074672bec246c42c6b9d5"},{url:"assets/js/page-导航栏--183844fc.e047059c.js",revision:"8c4baaa867e321f06743f2983c5ff9f0"},{url:"assets/js/page-布局--fa93e36a.708b225d.js",revision:"ee123a778c114125be4b7c88123837d4"},{url:"assets/js/page-常见问题--10ab790e.468fb1e8.js",revision:"1a72e1982a7fb2573567e94e1662545a"},{url:"assets/js/page-插件--32355f10.d6a436a3.js",revision:"11ff4e1cd499f61ac38b46dc37f72d63"},{url:"assets/js/page-插件说明--cbca1c8e.72d0d7a2.js",revision:"a656f9dd13c3191a7c43d9fe85e91870"},{url:"assets/js/page-文件结构介绍--ed6a9eb4.9021f58e.js",revision:"e044a403e8ad645947640c3c6acb79c4"},{url:"assets/js/page-新增特性--30c6c799.f2b457e4.js",revision:"b6215079ed20031c268189ecd0d4b277"},{url:"assets/js/page-新增组件--0979095e.8dde022c.js",revision:"47f4940569afb9bcd1e0a444d8933449"},{url:"assets/js/page-标记--0ac52704.c879ca43.js",revision:"6d687b25417185b0758540b3797f5d48"},{url:"assets/js/page-流程图支持--582eff1c.0198c234.js",revision:"ce12224ca7c6206aeb536e02d8b3911d"},{url:"assets/js/page-深色模式与主题色--01662674.97de25a9.js",revision:"3dbd7491809b266e6362d1d9424b1154"},{url:"assets/js/page-符号--2db8fb80.00cf2517.js",revision:"ba865aa3e26e297c1f0d429fb09654c5"},{url:"assets/js/page-脚注--17d88350.ddda29a2.js",revision:"b8df003e33e1f7c857d7d1dbd80e9375"},{url:"assets/js/page-自定义对齐--048d31dc.71ada306.js",revision:"ed0363fb61c4fee6607a7d17893ab30c"},{url:"assets/js/page-自然--7ec33be2.df7681df.js",revision:"8e7ce534520670bfaa10b744767f9f6b"},{url:"assets/js/page-评论功能--350aff9a.3f53f281.js",revision:"454c2307dcb493fbe33099d4eb97d068"},{url:"assets/js/page-配置文档--d315f8fe.a5198bc7.js",revision:"e223edf540731a07ad88aa2137d2b8e6"},{url:"assets/js/page-页面--78423bfe.48c579c3.js",revision:"e6171cd9d90f3a73a8791ebbdbafbd56"},{url:"assets/js/page-页面信息--455b9800.64b25f0d.js",revision:"5a9c09310514c1fd8d7f204143eb7090"},{url:"assets/js/page-页面配置--02399408.e6e03256.js",revision:"1742e03e41d1ccf8589ff1ca2bc3d0b8"},{url:"assets/js/page-项目指令--2f3d7c1c.d703f1e9.js",revision:"bd984199f5ae08462d9d95ff36040e46"},{url:"assets/js/page-项目案例--1f3d6482.6916e326.js",revision:"4793c491689ebc8815886fc0f36606fe"},{url:"assets/js/page-首页--79a22944.e245fcaf.js",revision:"7c3bcea1845839906517d005dbcb4661"},{url:"assets/js/vendors~docsearch.25c0da0f.js",revision:"387d31bcf787c450c317edfb31986c54"},{url:"assets/js/vendors~flowchart.9955b15c.js",revision:"d5910fc2c3043e93496086d9e21a1a9f"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.fe61a2e3.js",revision:"3e58fabca4835023e31aac66329bf1b4"},{url:"assets/js/vendors~layout-Layout.e5193eb3.js",revision:"f16ee1d65aa9882f6631526c60e003dc"},{url:"basic/index.html",revision:"39c6d978a846aaa61d2d85d62cef191d"},{url:"basic/markdown/demo/index.html",revision:"d030ba01dfb526b436bd50d0d992c775"},{url:"basic/markdown/emoji/index.html",revision:"22f5ea6cb9011a3849c0e6b8362babec"},{url:"basic/markdown/emoji/nature/index.html",revision:"b5a9b4864ec393c4b0dea685d557fab5"},{url:"basic/markdown/emoji/object/index.html",revision:"1824aceee3ad533a2a29c330ca2fc65d"},{url:"basic/markdown/emoji/people/index.html",revision:"cc3ad8bafb8cf815388540b9bec8fcf2"},{url:"basic/markdown/emoji/place/index.html",revision:"e7802b788bf3e8a2b94a66cdff21d829"},{url:"basic/markdown/emoji/symbol/index.html",revision:"ee1d829a98b330b5245b9af9c96a2560"},{url:"basic/markdown/index.html",revision:"ba7ec52e7d738a4723466fdcccefee7f"},{url:"basic/vuepress/case/index.html",revision:"63b02261506d64df5f367376c3ebaa4f"},{url:"basic/vuepress/command/index.html",revision:"32c402908a7dff8c80ca51f8d2e7cd5e"},{url:"basic/vuepress/file/index.html",revision:"967880d60f8bc4ecd72077eb009bcb90"},{url:"basic/vuepress/index.html",revision:"c249a6ff0f98d4a3fd48ea96d18b1032"},{url:"basic/vuepress/plugin/index.html",revision:"d9eb8b8b94c49e562b8585b56011e6c8"},{url:"basic/vuepress/theme/index.html",revision:"82d8d8dfd01047c458d712098e319e4e"},{url:"category/basic/index.html",revision:"c40e5ca988d3857970e55ef01ab775c0"},{url:"category/basic/page/2/index.html",revision:"b97e92651e25bded9c9a86ea89e22db2"},{url:"category/basic/page/3/index.html",revision:"2956f125f1e8f136d9ceeafdcf33946c"},{url:"category/config/index.html",revision:"a8ed82d501d610f86d2951fd8b9da5a3"},{url:"category/config/page/2/index.html",revision:"522ffc2ccf07dd0cce6b215c56b2dd88"},{url:"category/demo/index.html",revision:"706f2731fb31d30855b62bb24e6e07aa"},{url:"category/FAQ/index.html",revision:"ea00cb819265838880996bcd60dbf370"},{url:"category/feature/index.html",revision:"d56880db2a765b4b3ddd1dd3946fa7fe"},{url:"category/feature/page/2/index.html",revision:"db21a7e09730430c971ab270eb718050"},{url:"category/index.html",revision:"8c8c4bfee61a73bd770b3da2634cc0f7"},{url:"category/instruction/index.html",revision:"82724880a44036ab30284a548b564713"},{url:"category/layout/index.html",revision:"245427a0cbea4446737b1089e0d93906"},{url:"category/layout/page/2/index.html",revision:"ccf3f8fa583c06e3aac6fe870fc86d07"},{url:"category/markdown/index.html",revision:"488775da0463ec550cbc7885cd015714"},{url:"config/index.html",revision:"d3cbd5cc3032a598a52438b46ced49bf"},{url:"config/page/index.html",revision:"dbd2fd5c841e5ee223de85561eb62cb1"},{url:"config/plugin/container/index.html",revision:"386a61f1bb0ef9b669051cb2a10c0ec3"},{url:"config/plugin/copyright/index.html",revision:"89560b697501b1a61c203c5bfda9e8d1"},{url:"config/plugin/index.html",revision:"d64973e520ca74c12dd6b70f2b849319"},{url:"config/plugin/pwa/index.html",revision:"946e60d31539ef2c211df9d5f5ae8789"},{url:"config/stylus/index.html",revision:"5172352938fced73090f54665ab6d485"},{url:"config/themeConfig/index.html",revision:"bbab734444d2030082288bf4db41206b"},{url:"demo/index.html",revision:"524d965e6d179fdc5560256b282168b5"},{url:"FAQ/index.html",revision:"0aca9e863fe22bee2a48cb02a652d6e5"},{url:"guide/feature/blog/index.html",revision:"224e82234d05f5c4f300d46d8c8eaff3"},{url:"guide/feature/comment/index.html",revision:"cfce5a535e872bdbd67e22e6fc231560"},{url:"guide/feature/component/index.html",revision:"96b9b6ef860157cda7b60fb7f8a62e77"},{url:"guide/feature/encrypt/index.html",revision:"f31dbd2085a34edf4f97f0965845bed3"},{url:"guide/feature/index.html",revision:"7b9c0606d90e605fac13d362d8339d82"},{url:"guide/feature/markdown/align/index.html",revision:"d2a50ec9a1931a734edd44a2decc8b22"},{url:"guide/feature/markdown/flowchart/index.html",revision:"d366c9823de31746744a4e1f4b6207c3"},{url:"guide/feature/markdown/footnote/index.html",revision:"34fc8a6a6e964a31ebc2fe5031460995"},{url:"guide/feature/markdown/index.html",revision:"b30eba846a72c007440f09f6ef6c341a"},{url:"guide/feature/markdown/mark/index.html",revision:"683b9a1d81b722e449136cc73785722b"},{url:"guide/feature/markdown/sup-sub/index.html",revision:"5c2a4b70e315e81d292d56c45bf61812"},{url:"guide/feature/markdown/tex/index.html",revision:"c1b7db0cad28c6d3194c7ebd5ac648be"},{url:"guide/feature/page-info/index.html",revision:"315409f4aa22147914eecbd658b1a96c"},{url:"guide/feature/seoAndSitemap/index.html",revision:"e23fbcc0cf5df2ff26e2847b8c48131f"},{url:"guide/feature/theme/index.html",revision:"ca805b02fbb25628155aa74ec48f9dbf"},{url:"guide/feature/typescript/index.html",revision:"0a1b75ab7527be4f7bbd71afd9a953db"},{url:"guide/index.html",revision:"239cd5f32eddeae2b6d4fbfe20915a4b"},{url:"guide/install/index.html",revision:"165dbccc0a12e2409323f7b11618fffa"},{url:"guide/layout/blog/index.html",revision:"7f188913f19540d0a4301fd287e89a27"},{url:"guide/layout/home/index.html",revision:"61547f8e63ce8bf452ccf5baea343398"},{url:"guide/layout/index.html",revision:"38580ecd110b867edcf64d350350ab6d"},{url:"guide/layout/navbar/index.html",revision:"921740f055681400e3ec902dd95597a6"},{url:"guide/layout/page/index.html",revision:"84d6087bca53189b397f2146dafd79e1"},{url:"guide/layout/sidebar/index.html",revision:"c5f077adce7d4806375b14c70f8082d1"},{url:"index.html",revision:"9a9f0dc04a5acc30d4676a66c9350a4a"},{url:"logo.png",revision:"a4106d3bbae58733d609f32044a86a39"},{url:"logo.svg",revision:"e5d2cc16443a59035e0fa55c746f7d51"},{url:"tag/blog/index.html",revision:"f0375cf32cc21c2e4ff5e8abae88bc59"},{url:"tag/comment/index.html",revision:"92d4c5c27bc189d3d744e79cb1fb0f3c"},{url:"tag/components/index.html",revision:"05267d676b06bc08d9a1ac18b97c01e7"},{url:"tag/config/index.html",revision:"1ae7410b504ee0fc0a219e82f165b997"},{url:"tag/config/page/2/index.html",revision:"d0e2be6e36486373599625913f72be1d"},{url:"tag/emoji/index.html",revision:"139ed3b4771dd1c28297f9301a15a7b5"},{url:"tag/emoji/page/2/index.html",revision:"05f07ecfbff30386c61f4e5470fb1b06"},{url:"tag/encrypt/index.html",revision:"71fc03831fd94f4122c76c3d5a5b8c74"},{url:"tag/feature/index.html",revision:"fd5acc3f70f4ee2e46e3971a4e5ef3c0"},{url:"tag/feature/page/2/index.html",revision:"c3a5fd3aaad1f2c85469af4f7040b474"},{url:"tag/frontmatter/index.html",revision:"072d1495ab75a1c9b0c1b1a9590f7817"},{url:"tag/function/index.html",revision:"13403f90101ecea714ab9b707f3e02a2"},{url:"tag/function/page/2/index.html",revision:"4bf14ac68f6cbaad82a96338f110fe85"},{url:"tag/home/index.html",revision:"1c2b0c7802182df148c639a7d91e5642"},{url:"tag/index.html",revision:"75206622bf1b560b4c6efed61da175a8"},{url:"tag/intro/index.html",revision:"623aebce2f5c46a1493444f64bca8c5d"},{url:"tag/layout/index.html",revision:"985e16e52ad2b3fc2e125d225671e3fd"},{url:"tag/layout/page/2/index.html",revision:"c6b0c60e27a125ec28a3bd57908d22de"},{url:"tag/markdown/index.html",revision:"cf636adf4ee256b56ab06b2196c2085f"},{url:"tag/markdown/page/2/index.html",revision:"ce9b9c63997e77b2881319830fe6a380"},{url:"tag/markdown/page/3/index.html",revision:"71f772b5515f52dbe5920e17e6d3287c"},{url:"tag/navbar/index.html",revision:"e0516e41c7385b2535bdf7a76ab4b47e"},{url:"tag/page-info/index.html",revision:"15de4f2418686ae3ea05f3ee03a891b1"},{url:"tag/plugin/index.html",revision:"7b4bc2c200f103da118cce6e447fae36"},{url:"tag/seo/index.html",revision:"a127a32f1cdf5f6ea4124493439f9411"},{url:"tag/sidebar/index.html",revision:"a3f7f24134b17f25442acb2f989989a6"},{url:"tag/sitemap/index.html",revision:"73a233f5b0df1ee44bcf71ea3758ebc5"},{url:"tag/style/index.html",revision:"6ad13e5a3a290e97257f40a2795a4a2a"},{url:"tag/themeConfig/index.html",revision:"aeaaa3abb475101ce8b47bdcfe400ce7"},{url:"tag/typescript/index.html",revision:"e909153a064eacdb92fa5f9bcb26161b"},{url:"tag/vuepress/index.html",revision:"43c82bc3b87b881d7bbb8b69f8cbdc41"},{url:"tag/vuepress/page/2/index.html",revision:"6cbee9b8ba988a168c2c930b8e78b991"},{url:"timeline/index.html",revision:"40e06367b2b9e97f87c7b7500f9716f9"},{url:"zh/basic/index.html",revision:"ae0a855b1c9adb24dd17a2ee7620fb49"},{url:"zh/basic/markdown/demo/index.html",revision:"9766be56c351958773d1b9644ed240b2"},{url:"zh/basic/markdown/emoji/index.html",revision:"07cbe98063e52388b5f7ce11c2b99af6"},{url:"zh/basic/markdown/emoji/nature/index.html",revision:"3d287ead3e1dfa30dadbd842c675fb68"},{url:"zh/basic/markdown/emoji/object/index.html",revision:"60137b76374702ec3bd14d84e0c71477"},{url:"zh/basic/markdown/emoji/people/index.html",revision:"5f6c4e6c1bb51a8055396f459549f58a"},{url:"zh/basic/markdown/emoji/place/index.html",revision:"0a27d9f91796874e45f27554a78b5ee7"},{url:"zh/basic/markdown/emoji/symbol/index.html",revision:"360811aa7674fc2b70d82daecca1ccb5"},{url:"zh/basic/markdown/index.html",revision:"809e12ed27605ba5f1a11514233d021b"},{url:"zh/basic/vuepress/case/index.html",revision:"e820caf2495141176b245caf834c196a"},{url:"zh/basic/vuepress/command/index.html",revision:"5d21188e1a0fe00530f6a4a24d08c3f3"},{url:"zh/basic/vuepress/file/index.html",revision:"f0ff5cfdd3e31944f7e138f559dae8fb"},{url:"zh/basic/vuepress/index.html",revision:"e8b4375ea55dbb23312cadda6a8ee54f"},{url:"zh/basic/vuepress/plugin/index.html",revision:"f71b9e0a37d83888f35fee5d4405a4c8"},{url:"zh/basic/vuepress/theme/index.html",revision:"496037b947f9039b1900d33211224278"},{url:"zh/config/index.html",revision:"0ee56e525a2cf1195e466c3cbdd10acf"},{url:"zh/config/page/index.html",revision:"1364119ed57e539fe5af5d24059ddf4f"},{url:"zh/config/plugin/container/index.html",revision:"6dba3501df7e69377117feeb1055db02"},{url:"zh/config/plugin/copyright/index.html",revision:"3145781fc0b675c6590f0b44d69608a1"},{url:"zh/config/plugin/index.html",revision:"da3b094de33d56ee39b7fa323cfccd32"},{url:"zh/config/plugin/pwa/index.html",revision:"d4dfb777dd98fa671badd7cf24a2912c"},{url:"zh/config/stylus/index.html",revision:"948f478efe4e0e56687234da641859d0"},{url:"zh/config/themeConfig/index.html",revision:"a88a2f0288da0571876b08b183afb651"},{url:"zh/demo/index.html",revision:"c9cc4bb607f5f475044cc7c586a66b83"},{url:"zh/FAQ/index.html",revision:"f5633d21a69f37289903c6824d20d033"},{url:"zh/guide/feature/blog/index.html",revision:"6395bb20f3e725e42de3879ad4260c29"},{url:"zh/guide/feature/comment/index.html",revision:"9ba1377f4befe1d9ecede3f49d3ecea5"},{url:"zh/guide/feature/component/index.html",revision:"0184ff1469b081f10f79823be0c54e9a"},{url:"zh/guide/feature/encrypt/index.html",revision:"dd78c63b7269993f8b495072cbf60e0c"},{url:"zh/guide/feature/index.html",revision:"8adc33d75c38b558c18364198250ac99"},{url:"zh/guide/feature/markdown/align/index.html",revision:"32cc06a70c997f3cd60faf6035bb34f9"},{url:"zh/guide/feature/markdown/flowchart/index.html",revision:"f96e3a8400b9e965d89827cd7c26efd0"},{url:"zh/guide/feature/markdown/footnote/index.html",revision:"ad9e50ca490435c08b272fe2f317ef4d"},{url:"zh/guide/feature/markdown/index.html",revision:"4b2b60249ce31287001c375291ad0c58"},{url:"zh/guide/feature/markdown/mark/index.html",revision:"adcc8b8bcde599070aaa899855bbe5cd"},{url:"zh/guide/feature/markdown/sup-sub/index.html",revision:"7bbe7794b5ed7c6e00a84ab16558222d"},{url:"zh/guide/feature/markdown/tex/index.html",revision:"2c111556775407b92501c4747280f18a"},{url:"zh/guide/feature/page-info/index.html",revision:"a7bae8128ca8e530367072c716c884bd"},{url:"zh/guide/feature/seoAndSitemap/index.html",revision:"b05028dcf38e7fb2c05a8c4bf62c93be"},{url:"zh/guide/feature/theme/index.html",revision:"57cd687993e1f4983cbed93c963452b5"},{url:"zh/guide/feature/typescript/index.html",revision:"10ef57a96c3462de8ae177e0be74eb7d"},{url:"zh/guide/index.html",revision:"4f13c9813d083fe3acdeca20a0d84843"},{url:"zh/guide/install/index.html",revision:"36e8d6b36fc09689f78547c4605c8487"},{url:"zh/guide/layout/blog/index.html",revision:"fe4f9239bf39fdf8fcd4240085d7ba59"},{url:"zh/guide/layout/home/index.html",revision:"71530aa3079cd81173253b0c1943a001"},{url:"zh/guide/layout/index.html",revision:"322a997588972af52633be071035e59a"},{url:"zh/guide/layout/navbar/index.html",revision:"d2b4bcd19efd28c2c44cfc1e97f0f9cb"},{url:"zh/guide/layout/page/index.html",revision:"430da93be311c5d38c7a77741817f4c2"},{url:"zh/guide/layout/sidebar/index.html",revision:"b17bda41edea48ca369e1dda8437b25d"},{url:"zh/index.html",revision:"507bfe6303cd8d21505cc8bdaff1c2a6"}],{})}));
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
