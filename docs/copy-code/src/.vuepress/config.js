const { config } = require("vuepress-theme-hope");

module.exports = config({
  title: "Quick Code Copy",
  description: "Quick Code Copy Plugin for vuepress",

  dest: "./dist",

  locales: {
    "/zh/": {
      title: "代码一键复制",
      description: "VuePress 的代码一键复制插件",
    },
  },

  /** 主题配置 */
  themeConfig: {
    /** 网站的logo */
    logo: "/logo.svg",

    author: "Mr.Hope",
    iconPrefix: "vuepress-",

    nav: [
      { text: "Home", icon: "homefill", link: "/" },
      {
        text: "Guide",
        icon: "creativefill",
        link: "/guide/",
      },
      {
        text: "Config",
        icon: "configuration",
        link: "/config/",
      },
    ],

    footer: {
      display: true,
      copyright: "MIT Licensed | Copyright © 2019-present Mr.Hope",
    },

    mdEnhance: {
      enableAll: true,
    },

    comment: {
      type: "valine",
      appId: "AOUpdmlh8YrLcu7lhMAnm4zN-gzGzoHsz",
      appKey: "eT8UQNRrAbur6O0fcf68Rg83",
    },

    locales: {
      "/zh/": {
        nav: [
          { text: "主页", icon: "homefill", link: "/zh/" },
          {
            text: "指南",
            icon: "creativefill",
            link: "/zh/guide/",
          },
          {
            text: "配置",
            icon: "configuration",
            link: "/zh/config/",
          },
        ],
      },
    },
    pwa: {
      favicon: "/favicon.ico",
      themeColor: "#46bd87",
      cachePic: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        name: "@mr-hope/vuepress-plugin-copy-code",
        short_name: "copy-code plugin",
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "Guide",
            short_name: "Guide",
            url: "/guide/",
            icons: [
              {
                src: "/assets/icon/guide-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
              {
                src: "/assets/icon/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
            ],
          },
          {
            name: "Config",
            short_name: "Config",
            url: "/config/",
            icons: [
              {
                src: "/assets/icon/config-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
              {
                src: "/assets/icon/config-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
            ],
          },
        ],
      },
    },

    hostname: "https://vuepress-copy-code.mrhope.site/",

    repo: "https://github.com/mister-hope/vuepress-theme-hope",
    docsDir: "docs/copy-code/src",
  },
});
