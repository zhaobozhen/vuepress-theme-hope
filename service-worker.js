if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,d,i)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const c={uri:location.origin+a.slice(1)};return Promise.all(d.map(a=>{switch(a){case"exports":return s;case"module":return c;default:return e(a)}})).then(e=>{const a=i(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-2328f127"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"404.html",revision:"90faab3b09f5909e76f3d76597853918"},{url:"article/index.html",revision:"c732f5d6a668d852549e2b02335b087b"},{url:"assets/css/0.styles.a9b280f0.css",revision:"e3af4490ec876ca39036f816eba8bc43"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"assets/icon/appleIcon152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/msIcon144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/architecture.9a93cf6c.png",revision:"9a93cf6cea38878e19c5816d1af28b17"},{url:"assets/img/blog.28e68cac.png",revision:"28e68cacce1e0d9b91b68324cb73cd8a"},{url:"assets/img/category.02cce400.png",revision:"02cce400a63e98252eefb9437bd10fac"},{url:"assets/img/danger-dark.5fb01a54.svg",revision:"5fb01a54b1893112ce78f6bf6fe7b9b6"},{url:"assets/img/danger.6e8b05e0.svg",revision:"6e8b05e040e31db4b52092926ac89628"},{url:"assets/img/darkmode.067c07c8.png",revision:"067c07c843f68e66c6ff31374d6344ac"},{url:"assets/img/darkmode.baaa33ce.png",revision:"baaa33ced9083586bc60fa6e9a5cd013"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/home.3e7cd8a1.png",revision:"3e7cd8a1727edc0a8592d15ce87dab5d"},{url:"assets/img/home.f9d474ce.png",revision:"f9d474ce8ff32e58f5c5a8aec5b93540"},{url:"assets/img/homeImage.56f13b5d.jpg",revision:"56f13b5d598a4feab49dd969ac9fd2ff"},{url:"assets/img/info-dark.9cb8f08f.svg",revision:"9cb8f08f92e9e47faf596484d9af636a"},{url:"assets/img/info.b3407763.svg",revision:"b3407763d94949efc3654309e9a2202f"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.36f60759.svg",revision:"36f607593c4f5274775cb24f1edf4389"},{url:"assets/img/tip.fa255ccc.svg",revision:"fa255cccbbef66519a1bb90a5bed6f24"},{url:"assets/img/warning-dark.34208d06.svg",revision:"34208d0652668027b5e1797bdafd2da9"},{url:"assets/img/warning.950d1128.svg",revision:"950d1128cc862f2b631f5d54c3458174"},{url:"assets/js/118.4c032feb.js",revision:"f63690fa47714c151d0994b5cc6ef49a"},{url:"assets/js/app.b6a257cd.js",revision:"97d9a350155790eb14d1530ca3f50900"},{url:"assets/js/layout-Blog.f3ed5a98.js",revision:"a01c9b58648379b09485f5e729b12e89"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.a6dabb35.js",revision:"62abcae17a4ea3bc2a37c3172467724f"},{url:"assets/js/layout-Layout.7b97d312.js",revision:"d6e2d91665d7e47c78c6ff4dd26e9c6a"},{url:"assets/js/layout-NotFound.59cb869c.js",revision:"cd3347c0b197153a848a9e07c4626c7b"},{url:"assets/js/page-@mr-hopeplugin-pwa--051692f2.f8d75d5a.js",revision:"02428d5e7e3edb6084e554c3f9c9c934"},{url:"assets/js/page-@mr-hopepwa--afe3f12c.5497b05d.js",revision:"94be80d6f8819cebb5441c413c2f95d5"},{url:"assets/js/page-AboutVuePress--4a71114e.d4855300.js",revision:"e669ce0e3e107de21da090f0d960c3de"},{url:"assets/js/page-Basic--770cb96b.a0fa5235.js",revision:"f8794294d91a5f0820ab0f624fcc7109"},{url:"assets/js/page-Bloghomepage--64265752.5c23b14b.js",revision:"45d7b68636a7f21c1ae1e3d31aafd2f5"},{url:"assets/js/page-Blogrelated--17c260a2.57c55aca.js",revision:"8ed54cbb5a7d3e3cebad8f88308bb630"},{url:"assets/js/page-CommentFunction--5bb6671c.a0eeb85d.js",revision:"e9fff994fc28a0fc9258041f10cc0841"},{url:"assets/js/page-Commonproblems--2b571e9b.901cc116.js",revision:"86d69e03a2438111a6f0d2b237c74be9"},{url:"assets/js/page-Config--35a0a7d9.bce3c7dd.js",revision:"946c4a59a29ec134ab6e5dcc06658161"},{url:"assets/js/page-Customalignment--4f21aa5c.d43cd864.js",revision:"af3560fa040f22652a6b7f6253534314"},{url:"assets/js/page-DarkmodeandThemecolor--e23e731c.c63da1f1.js",revision:"02162c40648ee92efc2309f632b8e7ea"},{url:"assets/js/page-DefaultThemeConfig--3cbef5e2.1d572899.js",revision:"1cab9e166953d01a336c047f3052b628"},{url:"assets/js/page-Demos--f328658e.ae56482b.js",revision:"8ebc8d23aef20c19487a034f5510fd1c"},{url:"assets/js/page-EmojiList--41bb29b9.399a765f.js",revision:"9219193a25c35bfabf2fc0fb1b592ab3"},{url:"assets/js/page-Emoji列表--404e6737.6db3f554.js",revision:"967e3112dc71e1d2b64db7f310713d03"},{url:"assets/js/page-Encryptionfunction--181bdc9c.81e16b62.js",revision:"057f6a9cd303e190354498c8eba07c41"},{url:"assets/js/page-FileStructure--665a4f1c.6785bdf0.js",revision:"a2ad8e2aa4a3bc8f8248af4b08cd2978"},{url:"assets/js/page-Flowchart--7ce6d974.fd1a2587.js",revision:"7362af17e009f87d60504463bf4b9d47"},{url:"assets/js/page-Footnote--0c733e52.9a759eff.js",revision:"91ccf443c4a847a4ee3c80af428ae4a2"},{url:"assets/js/page-HomePage--5834599c.bb07e9fd.js",revision:"25a8c21c88c6876195382c0b838e035d"},{url:"assets/js/page-InstallUsage--0ab466d2.76e4b487.js",revision:"1dc93f35e796036b524b6f1350f40663"},{url:"assets/js/page-Introduction--d4910962.c1515a50.js",revision:"bbcbb7c74ca9de796cc902164fc490bd"},{url:"assets/js/page-Layout--12bd4f0e.8cb91120.js",revision:"1a320082f043cc81c7af30bccec5f9ba"},{url:"assets/js/page-MarkdownDEMO--c3e1bfdc.1e08bd9b.js",revision:"32e1b6988b2c4f0fdd2f7b6718cdba39"},{url:"assets/js/page-MarkdownEnhance--ad9dba8e.c2c7024d.js",revision:"90b5936566f52e68d86e675e1fbfcda4"},{url:"assets/js/page-MarkdownIntroduction--270989ce.541bc8dc.js",revision:"6e0d5531c2380039b8cb00e752ae2d77"},{url:"assets/js/page-Markdown介绍--0e6891b6.1765f307.js",revision:"8e0d890c3b65617e1723321ce35cd85b"},{url:"assets/js/page-Markdown增强--6162938f.05c03b8a.js",revision:"4a46021bd2373ab7fcbf3927445f8c0f"},{url:"assets/js/page-Markdown示例--5479fe88.21dfcbf6.js",revision:"a69e9741eadad8eee15aff9f7548a767"},{url:"assets/js/page-Markup--6b1f341c.6ec65133.js",revision:"03d82af3f5f2cebf62811f7a09700b6d"},{url:"assets/js/page-Nature--749fb09c.533252da.js",revision:"46b91bbc2963c8792ff7fee24e90dba2"},{url:"assets/js/page-NavBar--c7bf87dc.cc3ae3e1.js",revision:"6d76d0973318ff64e390b051ea857bf0"},{url:"assets/js/page-NewComponent--1d138c72.41985f14.js",revision:"dd7b56d3cb664e99e9261f10e852a14b"},{url:"assets/js/page-Newfeature--5136c541.b9a5f663.js",revision:"a78f2c58895ab705862b51208e566be6"},{url:"assets/js/page-Object--16031ab2.f8e7fc89.js",revision:"a33fd95ca18d8d275ae705de0e7103b0"},{url:"assets/js/page-Page--af17b59c.ce8f9af6.js",revision:"d22dae4817bfdaee4a6ddc8f16434edc"},{url:"assets/js/page-PageConfiguration--0aacc152.791ccaed.js",revision:"7ecbbbec4d98ba3eb9c5898a052a8092"},{url:"assets/js/page-Pageinformation--71efd5d2.14d02db9.js",revision:"58b4133d5c7c263cbc2e70211ce64b1b"},{url:"assets/js/page-People--2182769c.07f0ebad.js",revision:"dd860a34b3cc3f8839474177eea99e86"},{url:"assets/js/page-Place--951cdc00.30bd23dc.js",revision:"a834cd6934a96de4f758eff60346bdde"},{url:"assets/js/page-PluginDescription--137c6c07.ee9ec366.js",revision:"dfc2b3545ac6777ad3e046d1fa9279a4"},{url:"assets/js/page-Plugins--adbf415c.a671d309.js",revision:"9786622874316d9c49fe9052dadd6085"},{url:"assets/js/page-SEOandSitemap--5934b3b2.8ca655f9.js",revision:"de0f1e2444319795cc6147b91c2185a3"},{url:"assets/js/page-SEO和Sitemap--35ca8b22.5238e605.js",revision:"217a8079f4e12e55fc0fe40c2d7f95e2"},{url:"assets/js/page-Sidebar--2fa1ea2c.51ccab07.js",revision:"5d0408d23ca75f82bb9c1fbc75641a8d"},{url:"assets/js/page-stylusconfiguration--6796cdf2.72a513ae.js",revision:"3f421ac5d2726965ed1aecbd37460106"},{url:"assets/js/page-stylus配置--0ce19a82.8c436b4d.js",revision:"cbb0f4f663cd11c23a03aaab273e6259"},{url:"assets/js/page-SuperscriptandSubscript--895c91b8.cd8a01e3.js",revision:"95819f8782122b23cede71c3de5a3077"},{url:"assets/js/page-Symbol--a9259c5c.97a0e6c0.js",revision:"517ea19a7df2395e14820398ac0b4ae9"},{url:"assets/js/page-TexSupport--64cb5e50.acf5d745.js",revision:"af54106f72f5d297909718a057af755d"},{url:"assets/js/page-Tex语法支持--1e02b152.11ef9f65.js",revision:"9900f32654def85643067107c34caa5b"},{url:"assets/js/page-ThemeConfig--1120a0ce.9648a8ec.js",revision:"83724bca3848e2fcdd5236f33b7daa79"},{url:"assets/js/page-ThemeConfig--1726e14e.95048c61.js",revision:"3b3bd46f0020d4fea2d7d5014fd1dbc1"},{url:"assets/js/page-ThemeFeatureConfig--2ccd2db8.4bc739a8.js",revision:"e3c96fcf6f2bc5f1a35eaddc1f68a102"},{url:"assets/js/page-ThemeLayoutConfig--a3ab449c.393ed864.js",revision:"c277916f6b6d56eccfaf5d8d847bd323"},{url:"assets/js/page-ThemePluginConfig--958196dc.854c7f9d.js",revision:"13c1a3394ab359077d3c27a2c0a00674"},{url:"assets/js/page-TSsupport--09728ac8.ac6ad222.js",revision:"79944a4a856d2026a512adc87e4bdf6b"},{url:"assets/js/page-TS支持--4625f812.d14ea2b3.js",revision:"04c117e1a092e652c08f459edeb90c3e"},{url:"assets/js/page-VuePress--b7060eee.9bd4e83b.js",revision:"146f5e1e62b1362ffe0547be152661df"},{url:"assets/js/page-vuepress-plugin-container--31498112.f41c071d.js",revision:"4861d15024117eb3a1a55ef970fa2194"},{url:"assets/js/page-vuepress-plugin-container--606dbc5c.f78bb2d3.js",revision:"558e4f92cd73941b606c288025980b10"},{url:"assets/js/page-vuepress-plugin-copyright--5242f65c.b8f81b66.js",revision:"2b23fec31b44a389a2cc0ccca0ae93ce"},{url:"assets/js/page-vuepress-plugin-copyright--6d3913d0.b0cb2f5a.js",revision:"33af6a12b90b5aa3119ca0ce223b1958"},{url:"assets/js/page-vuepress-theme-hope--354da24e.036e40e6.js",revision:"09b723f33dea6e4352fb41f6cc5ccdb6"},{url:"assets/js/page-vuepress-theme-hope--776d8369.80dcd4b1.js",revision:"dcaa4e57d3a8a0605c9f9b7eebdadaff"},{url:"assets/js/page-VuePressCases--082972f2.d9f1253f.js",revision:"030e4b374639a7a48724f894b78af1b8"},{url:"assets/js/page-VuePresscommands--9f3f316c.85dd07f1.js",revision:"f1a841e3245511d4dd0587ab4d7ea93d"},{url:"assets/js/page-VuePress案例--531d5f3e.4eeac7c3.js",revision:"288c07b48e38f519ccb326541a9bbfda"},{url:"assets/js/page-上下角标--8efed9dc.3fcd69b2.js",revision:"62e85bd6bf83f8bbeac8b6b798719a44"},{url:"assets/js/page-主题功能配置--5bb71452.bbd4aaf0.js",revision:"6d8f941c41db481590f56c7a3a4b6535"},{url:"assets/js/page-主题布局配置--0ac082da.44969023.js",revision:"c67df899f8fcc9991cfb722350d08b01"},{url:"assets/js/page-主题插件配置--1b0c3e98.7e7e49cb.js",revision:"95559b3316bd931914378ecbc40750f6"},{url:"assets/js/page-主题配置--21dc088d.154d1418.js",revision:"a5f191bde9f1680252d28e21198b46e5"},{url:"assets/js/page-主题配置--2c572572.d0caf375.js",revision:"fa7237a68743ac753fd4e289e1bd14e1"},{url:"assets/js/page-人物--b4fc27dc.a8759b1c.js",revision:"ed8326accde652ba32eacad7827025fe"},{url:"assets/js/page-介绍--2e99d139.4007975d.js",revision:"2c6c29928c1ee2543dfb477a71b79489"},{url:"assets/js/page-侧边栏--43054cb2.5db0ade1.js",revision:"7595019946fca70d039ee339acf2743b"},{url:"assets/js/page-加密功能--2361b7e4.9f514497.js",revision:"a51d468bbf04eeaa3e60c3e959ee9430"},{url:"assets/js/page-博客相关--6a3fd4f2.c3e41c15.js",revision:"2861b5124b0a6f691b05729230f76c2d"},{url:"assets/js/page-博客首页--1eb2b298.6e5335f5.js",revision:"7f80bf35dac2d9d7f9a527f5f6ab1e91"},{url:"assets/js/page-地点--6710785c.cb5f47ef.js",revision:"dd60f0ddc9777712545e4bbc1fc4a905"},{url:"assets/js/page-基础知识--4d466a79.47403139.js",revision:"7fd786dcb03d2e8e39ef7f891efeb171"},{url:"assets/js/page-安装使用--76e0e5b0.58d970d6.js",revision:"19530f8a573509466748c03d1084ef3e"},{url:"assets/js/page-对象--e150da9c.da493ef9.js",revision:"17477dd1c776f3230f0e7100e1915c0d"},{url:"assets/js/page-导航栏--183844fc.906915c5.js",revision:"3bf8ddd5b46fd7cd91edc47ed6eeeb65"},{url:"assets/js/page-布局--fa93e36a.d3cff189.js",revision:"b13a335c7dc169208102a1e056a755b3"},{url:"assets/js/page-常见问题--10ab790e.1d85a1fb.js",revision:"ab6fbce70667d64d96023d9d6d8f6d9e"},{url:"assets/js/page-插件--32355f10.9f3d4e26.js",revision:"5c6e015e04ff3ae2221e684af7796308"},{url:"assets/js/page-插件说明--cbca1c8e.cba18c71.js",revision:"b9a60006486fc6b21944b9679148a28c"},{url:"assets/js/page-文件结构介绍--ed6a9eb4.cebaf959.js",revision:"2b02e0496b4c697790f18f681833a6c8"},{url:"assets/js/page-新增特性--30c6c799.44b24516.js",revision:"7142096a07c44db100d85147498438ec"},{url:"assets/js/page-新增组件--0979095e.3a585d4e.js",revision:"5b8f78a484748d477967b4735240e365"},{url:"assets/js/page-标记--0ac52704.4fa587ec.js",revision:"796de793a1af206fc5872abc05cb9940"},{url:"assets/js/page-流程图支持--582eff1c.760eac7d.js",revision:"97769750fe35f97a6ff6ec8f6e8fe53f"},{url:"assets/js/page-深色模式与主题色--01662674.9067bbdd.js",revision:"ec8e495cdee76757dc699b84c77bc38c"},{url:"assets/js/page-符号--2db8fb80.de028017.js",revision:"e66032eda764a96bc15188c1e4a22990"},{url:"assets/js/page-脚注--17d88350.2f3af8b5.js",revision:"a19be6c6a10d03a94d4f0bb9222ca89b"},{url:"assets/js/page-自定义对齐--048d31dc.da5c6064.js",revision:"f451b54263029d1db3bf3885ad051419"},{url:"assets/js/page-自然--7ec33be2.a5cc91fb.js",revision:"bea67a2eab0d573124fb95ed37f4970c"},{url:"assets/js/page-评论功能--350aff9a.bd9f8d98.js",revision:"abb173fa4dbe75c8cb87c60608a87744"},{url:"assets/js/page-配置--d315f8fe.754bb8e0.js",revision:"775c09bb122aa1e54cbdfb0d341406ad"},{url:"assets/js/page-页面--78423bfe.aa33c279.js",revision:"eec42c8cccb621ce784a249ca406f2a6"},{url:"assets/js/page-页面信息--455b9800.15fd7a89.js",revision:"ebe824680aeca38385c6bfd9c063ab7a"},{url:"assets/js/page-页面配置--02399408.dd7be0fe.js",revision:"bd8d778601b0d027fe4923532db55b52"},{url:"assets/js/page-项目指令--2f3d7c1c.a41b19d5.js",revision:"1805e75c466936707d430c600ca20926"},{url:"assets/js/page-项目案例--1f3d6482.fb37cdf8.js",revision:"2072fe23d3d147f0e93d1fa9b239b80a"},{url:"assets/js/page-首页--79a22944.f3f3cbfe.js",revision:"1d633a38c8bc66c62f9fb3697f9cd653"},{url:"assets/js/page-默认主题配置--0d5b7f32.6cb42db9.js",revision:"d04a254834084f14e84d3d08accdf403"},{url:"assets/js/vendors~docsearch.3a86a372.js",revision:"e8ebdb7e7051a4c08486a058eb49a2dc"},{url:"assets/js/vendors~flowchart.a1ed6ede.js",revision:"fd46f549c3b521ddc96f0ed8f46dea21"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.f40f9fbc.js",revision:"b69d87aec1bbeaee065563be5a3ac4bc"},{url:"assets/js/vendors~layout-Layout.5c00ed3c.js",revision:"b3040d50d8df646858a9cd8edbfea924"},{url:"basic/index.html",revision:"974ea016c84f5939d68f3719065cc62f"},{url:"basic/markdown/demo/index.html",revision:"4c80b4874f45488f7c5420ac7c9b3ebf"},{url:"basic/markdown/emoji/index.html",revision:"d52086ae71679b3c5e631f4a87f06118"},{url:"basic/markdown/emoji/nature/index.html",revision:"9845e8cc6351058d7e33925b9c18b240"},{url:"basic/markdown/emoji/object/index.html",revision:"17a82930cfaca98f567716d53146dff6"},{url:"basic/markdown/emoji/people/index.html",revision:"c2fadb11799a3cf968520164d8a2917d"},{url:"basic/markdown/emoji/place/index.html",revision:"d254817c4b5a50b2d7d93905dfefc865"},{url:"basic/markdown/emoji/symbol/index.html",revision:"bf78434dacd39be038e48901d483fcd6"},{url:"basic/markdown/index.html",revision:"cabdebaf5139778ad666d3551ba06861"},{url:"basic/vuepress/case/index.html",revision:"9a9969095d18f92ac29b865a70f16897"},{url:"basic/vuepress/command/index.html",revision:"387d3ad541e5ff780ae4ca72025bf2d5"},{url:"basic/vuepress/file/index.html",revision:"f9a6b736f40313ee2bdbc1520661bd2a"},{url:"basic/vuepress/index.html",revision:"aca3fd2ea255b2e876c8603d7b00903f"},{url:"basic/vuepress/plugin/index.html",revision:"dae296d32f50852bb7f4cfe882cb50e7"},{url:"basic/vuepress/theme/index.html",revision:"b4afa5ff9314b960a5d699e20e646323"},{url:"category/basic/index.html",revision:"7fc60e66f4292ead78afd8bb5324282b"},{url:"category/basic/page/2/index.html",revision:"e6faeafb947931556493d5803f02e96a"},{url:"category/basic/page/3/index.html",revision:"6f8e3294c6dd109b518cf2ae1a2524ef"},{url:"category/config/index.html",revision:"f2fb0948ce66c50eb84bc7e06cb14d22"},{url:"category/config/page/2/index.html",revision:"0c4fb96b597b6dcd15e3864f4be2c799"},{url:"category/config/page/3/index.html",revision:"df1355d3baaf726cae4b6cd740c19640"},{url:"category/demo/index.html",revision:"6900d5c7101edc1c966f98cb78950a65"},{url:"category/FAQ/index.html",revision:"ed655dfc8faf99ac720647dbe4ef25e4"},{url:"category/feature/index.html",revision:"e54ac0cec8151090b6a7e70264fbaa32"},{url:"category/feature/page/2/index.html",revision:"bb2acea0aa2be96f1d5d9d075b771c1f"},{url:"category/index.html",revision:"0ad1b057fdf1108267a8894102eacef6"},{url:"category/instruction/index.html",revision:"53bc8b465a7502ec0c8acd9ce770fccd"},{url:"category/layout/index.html",revision:"6327d3d47664f34efed4ae0b06c3bef3"},{url:"category/layout/page/2/index.html",revision:"46b73949a3b2e3d9ee2b30a95284acd1"},{url:"category/markdown/index.html",revision:"25b08cca5bd78391009a6a9ae0648017"},{url:"config/index.html",revision:"edebdd512b8a37839c57c71ac2b034e1"},{url:"config/page/index.html",revision:"38f8fc3a5f0932dbe9610dd00535e604"},{url:"config/plugin/container/index.html",revision:"ef417a75bf171f78ab44439ebf6742fc"},{url:"config/plugin/copyright/index.html",revision:"cf371068eb46cf31b73c7891e8b03ef1"},{url:"config/plugin/index.html",revision:"c459fff2006bf3e31831134b88f16d3c"},{url:"config/plugin/pwa/index.html",revision:"d66e57f0ad6447ba583a5656c840f74c"},{url:"config/stylus/index.html",revision:"2fa6ce3b288ec5901111c83e9bed6ff9"},{url:"config/theme/appearence/index.html",revision:"6584e28f6c64dac8e51e204f7a83a7e2"},{url:"config/theme/default/index.html",revision:"bc1fa7da3fddfb7161623d0dcd02ad07"},{url:"config/theme/feature/index.html",revision:"13741f2f9538f79525e62ab01c8b4101"},{url:"config/theme/index.html",revision:"fa58005d054dfc978cbce609c40cef2f"},{url:"config/theme/plugin/index.html",revision:"2c96bc94a891b9a11f72861b26e86f00"},{url:"demo/index.html",revision:"54e6cb9c3d1cc1cadb6a8123aa804efd"},{url:"FAQ/index.html",revision:"63a2f19eace487759ead97379a8b1c86"},{url:"guide/feature/blog/index.html",revision:"3d390fdacf0d3e336be4843027790806"},{url:"guide/feature/comment/index.html",revision:"694691941adb2ebab6ac255eb9b82ae0"},{url:"guide/feature/component/index.html",revision:"7cac59009f18ced555fadb82f7978d23"},{url:"guide/feature/encrypt/index.html",revision:"ce93762cbd1cfbfdf70c326b94a0267b"},{url:"guide/feature/index.html",revision:"38e5c773414b6121869cdacfd6632522"},{url:"guide/feature/markdown/align/index.html",revision:"48d92668dd4d07edf463faef0aa91436"},{url:"guide/feature/markdown/flowchart/index.html",revision:"3444ddf1d21e9e4fdecb7fa313239359"},{url:"guide/feature/markdown/footnote/index.html",revision:"ebe23255c12ebf89ee7c5ae6c9d2456c"},{url:"guide/feature/markdown/index.html",revision:"7a15a16652515150492341330654047a"},{url:"guide/feature/markdown/mark/index.html",revision:"b4a2a5474efe34d1310058eeb32875df"},{url:"guide/feature/markdown/sup-sub/index.html",revision:"5ea21e073592ea19f005dba34aea46df"},{url:"guide/feature/markdown/tex/index.html",revision:"7cde17a642c31cd12030e4038b71b55e"},{url:"guide/feature/page-info/index.html",revision:"dfec14ae479ba49fb7236195d36c704b"},{url:"guide/feature/seoAndSitemap/index.html",revision:"6a6fe5a5dc29afabf1ef1137a4d4724d"},{url:"guide/feature/theme/index.html",revision:"3fee82da4a952008a57ce62aa4d878a0"},{url:"guide/feature/typescript/index.html",revision:"168f3636dd9ccfa6e4899b9b4bd2d26f"},{url:"guide/index.html",revision:"421fda34388ac823e6d00382de77c97a"},{url:"guide/install/index.html",revision:"7bd97930a107dcd3f388c1ec4a1d19d2"},{url:"guide/layout/blog/index.html",revision:"a4bb97dac1406cd67b269b8f639e4b2d"},{url:"guide/layout/home/index.html",revision:"68d34ee7ea229e2956f3b516781bfdb1"},{url:"guide/layout/index.html",revision:"f79b270f469bcf5fd571162dc2d141a9"},{url:"guide/layout/navbar/index.html",revision:"cd571dc0ed67dded857f9c6252fb2401"},{url:"guide/layout/page/index.html",revision:"a518c3d24962a9df50246de9b989131b"},{url:"guide/layout/sidebar/index.html",revision:"8839e5a4f774740204ddd5becbee6cfc"},{url:"index.html",revision:"670c65d2d2de26ad0c24a6b8220ab224"},{url:"logo.png",revision:"a4106d3bbae58733d609f32044a86a39"},{url:"logo.svg",revision:"e5d2cc16443a59035e0fa55c746f7d51"},{url:"tag/blog/index.html",revision:"74fdd6440057b8b9d21b8f60d0ca21d7"},{url:"tag/comment/index.html",revision:"45f7a4655d2244ecf3d65bb9b5a68fa2"},{url:"tag/components/index.html",revision:"95800100fbcddc9e13ef2a1660a19b3e"},{url:"tag/config/index.html",revision:"304598b49ba550abb1512317dd2a5253"},{url:"tag/config/page/2/index.html",revision:"c7e4ac714ae5017949152dda81a21e3e"},{url:"tag/config/page/3/index.html",revision:"469dd395360fa7ad662f8cbc2b6d43b5"},{url:"tag/emoji/index.html",revision:"10901761cb8177e4a3cc3005e24f1a2d"},{url:"tag/emoji/page/2/index.html",revision:"a5e87f32c032605c602e5afe1ca7beaf"},{url:"tag/encrypt/index.html",revision:"9d0b6f40119d01384934e78927705bcb"},{url:"tag/feature/index.html",revision:"e505c362a2f8692852e085558a0be530"},{url:"tag/feature/page/2/index.html",revision:"a06abb312c76efe18d11b7c998cebbbc"},{url:"tag/frontmatter/index.html",revision:"738de6d36649c817c651c2c1742d91d9"},{url:"tag/function/index.html",revision:"efbe9884809ee9ac7c13c1eb167fecf7"},{url:"tag/function/page/2/index.html",revision:"289db223e402ea3ef3010dac44009edb"},{url:"tag/home/index.html",revision:"a9aa6d04c3faa7d7a4db2b6fb4c14f01"},{url:"tag/index.html",revision:"d5b3ff989b2acda08117f994b58df428"},{url:"tag/intro/index.html",revision:"fa62fff11612f38de9971f2a15b5c578"},{url:"tag/layout/index.html",revision:"369d6c6bd7b5857cb2213be0d14c3944"},{url:"tag/layout/page/2/index.html",revision:"f6eb13ceb54f5bc0e9431c4c8b11f489"},{url:"tag/markdown/index.html",revision:"e5bddbb8edcb30fcc87988acd10c4f7c"},{url:"tag/markdown/page/2/index.html",revision:"b3a3d7304de5ffe28b104afc655acc31"},{url:"tag/markdown/page/3/index.html",revision:"f606c1159c5b1d5f374134c42b505ed5"},{url:"tag/navbar/index.html",revision:"321954d7e402d2a50d089bd2a23dfa5a"},{url:"tag/page-info/index.html",revision:"60bd81fad5e1aabc2111dd511b8d553a"},{url:"tag/plugin/index.html",revision:"4fd17b965281c908216b32a16be5c545"},{url:"tag/seo/index.html",revision:"e5adca59dd813514562d2552b7117bf0"},{url:"tag/sidebar/index.html",revision:"da98d386d2a6822d1f6be5555a5b9a98"},{url:"tag/sitemap/index.html",revision:"cad5597756017a6392967494d1496e47"},{url:"tag/style/index.html",revision:"d5aaf9da8cc6fcd4efe2a089434c3db0"},{url:"tag/themeConfig/index.html",revision:"bde3d99ff5226c734947d9b50bca6e4d"},{url:"tag/typescript/index.html",revision:"e9dc4f075ff78b3b9b06fe179cc1d047"},{url:"tag/vuepress/index.html",revision:"41aef609db8a613fd7a834f820ea8c5a"},{url:"tag/vuepress/page/2/index.html",revision:"bc417407fef53fbd2caf7c3a0d817c9f"},{url:"timeline/index.html",revision:"08576bef6ddd30a3b50de3b3a7aa315d"},{url:"zh/basic/index.html",revision:"102f60174e7134c516891aef9c9a02c8"},{url:"zh/basic/markdown/demo/index.html",revision:"b9edf152aa5353545ec17d6bb3b466e0"},{url:"zh/basic/markdown/emoji/index.html",revision:"cda5f7c39e8940d2ce515c3c1d6974b1"},{url:"zh/basic/markdown/emoji/nature/index.html",revision:"4015b616ccc6bc89a79167431faabe2f"},{url:"zh/basic/markdown/emoji/object/index.html",revision:"a72d48535f3ece07bc4eb9e764fa982c"},{url:"zh/basic/markdown/emoji/people/index.html",revision:"c9a64f63495999c5545a1b2d6bd61cc1"},{url:"zh/basic/markdown/emoji/place/index.html",revision:"40c27f62592b2757b0f74bff42c15b63"},{url:"zh/basic/markdown/emoji/symbol/index.html",revision:"30f134e48b07d9c6b37d5d30e5e9f8d1"},{url:"zh/basic/markdown/index.html",revision:"ed8e6c36d7e32271771d7ba52c529bc3"},{url:"zh/basic/vuepress/case/index.html",revision:"f2054854cf41a477edc517bd61462c76"},{url:"zh/basic/vuepress/command/index.html",revision:"222a14cf4c3425577bb476687dfa77c2"},{url:"zh/basic/vuepress/file/index.html",revision:"61ef7288ded4eaa14274732294797c05"},{url:"zh/basic/vuepress/index.html",revision:"1515b6e11476ac392c92906918fad43b"},{url:"zh/basic/vuepress/plugin/index.html",revision:"5be14ab0631b25dd21adfff94c310c3b"},{url:"zh/basic/vuepress/theme/index.html",revision:"04fe073210c9db18ca26e3356d36404d"},{url:"zh/config/index.html",revision:"d9ac8e1e022f7eb0638cf95e3abda24d"},{url:"zh/config/page/index.html",revision:"42422697573f4b68eac0678cb1e98f7b"},{url:"zh/config/plugin/container/index.html",revision:"91c08adb1afbae555480bf1e4890b11e"},{url:"zh/config/plugin/copyright/index.html",revision:"9b8b98e9506657f62937d868e69c43e5"},{url:"zh/config/plugin/index.html",revision:"cf8c03425e95222e5951b84af2f04ea4"},{url:"zh/config/plugin/pwa/index.html",revision:"89f6e62fe13682d13dbbaeff45bdb8f8"},{url:"zh/config/stylus/index.html",revision:"6afa2de612eaa23da6984d4f77eceb10"},{url:"zh/config/theme/appearence/index.html",revision:"455db0dfa14c965705936c420bbef3b2"},{url:"zh/config/theme/default/index.html",revision:"cd9030b7a8e8cacf02f57339ba1db0ae"},{url:"zh/config/theme/feature/index.html",revision:"5e90df244f2b9c0f77a8ecd2d33832f6"},{url:"zh/config/theme/index.html",revision:"ca3fd64f733f35ca6c60bc9cab339c1f"},{url:"zh/config/theme/plugin/index.html",revision:"7a031a822f80ca5c55a844d1eceb342c"},{url:"zh/demo/index.html",revision:"f007d87f75dbb540a59df5aeacb90223"},{url:"zh/FAQ/index.html",revision:"b11b10cb544125aeea58fdb23a1ecbb6"},{url:"zh/guide/feature/blog/index.html",revision:"701eb22afd02f6a78811ff790006bd1f"},{url:"zh/guide/feature/comment/index.html",revision:"983ba8889c58ade7438dfc945dc04cde"},{url:"zh/guide/feature/component/index.html",revision:"b5d882a09d10f0e1c5560719a558aa73"},{url:"zh/guide/feature/encrypt/index.html",revision:"3eef42db32c3f79814782bbf102b9199"},{url:"zh/guide/feature/index.html",revision:"0dd9bc42ba67c955eae38d6abd2da653"},{url:"zh/guide/feature/markdown/align/index.html",revision:"3cdde892ee14e5ec035e228fb4f4563c"},{url:"zh/guide/feature/markdown/flowchart/index.html",revision:"2892732508b4465a675d38715bf0bde1"},{url:"zh/guide/feature/markdown/footnote/index.html",revision:"4cef5e301f698d741969002891826868"},{url:"zh/guide/feature/markdown/index.html",revision:"c317f05412007dba59986da0fb0d5f6a"},{url:"zh/guide/feature/markdown/mark/index.html",revision:"2c145577effdf30420a0f8f28f6e6686"},{url:"zh/guide/feature/markdown/sup-sub/index.html",revision:"5b164c9705bcfc9313f1a57d233180ef"},{url:"zh/guide/feature/markdown/tex/index.html",revision:"4cc99a036b08fe142a74dd5115efb8c3"},{url:"zh/guide/feature/page-info/index.html",revision:"89947184115dc28b236e9de10d4d84c9"},{url:"zh/guide/feature/seoAndSitemap/index.html",revision:"28bea67d6d730e3ccd9936ab86557df4"},{url:"zh/guide/feature/theme/index.html",revision:"b43491644f5cda9d00a0d3a0a53a03a1"},{url:"zh/guide/feature/typescript/index.html",revision:"eca1473272861c8862616c93d459eb6c"},{url:"zh/guide/index.html",revision:"0093ba632fed5b9eca6c8756ff8e5b16"},{url:"zh/guide/install/index.html",revision:"85021f34151b222c7217e81f0ab7b568"},{url:"zh/guide/layout/blog/index.html",revision:"f6b78ab2930126dffd35945ce5ef9935"},{url:"zh/guide/layout/home/index.html",revision:"f4bd522159bd6ae8a30154fe1f7633b1"},{url:"zh/guide/layout/index.html",revision:"4f5d15105d1c4f7c4807d5abb47eaf9b"},{url:"zh/guide/layout/navbar/index.html",revision:"9cd9dfc87d282da1940b464549b4640c"},{url:"zh/guide/layout/page/index.html",revision:"d879a90212490a52a01cd0a4ec38b72d"},{url:"zh/guide/layout/sidebar/index.html",revision:"cedd673aa7c4290653e0117f2fcd5690"},{url:"zh/index.html",revision:"36c6ef423b4921bb6e5840b2d19e92ce"}],{})}));
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
