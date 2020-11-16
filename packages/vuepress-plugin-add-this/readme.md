<!-- markdownlint-disable -->
<p align="center">
  <img width="240" src="https://vuepress-theme.mrhope.site/logo.svg" style="text-align: center;"/>
</p>
<h1 align="center">vuepress-plugin-add-this</h1>
<h4 align="center">VuePress add-this plugin💌 / VuePress AddThis 插件💌</h4>

[![Version](https://img.shields.io/npm/v/vuepress-plugin-add-this.svg?style=flat-square&logo=npm) ![Downloads](https://img.shields.io/npm/dm/vuepress-plugin-add-this.svg?style=flat-square&logo=npm) ![Size](https://img.shields.io/bundlephobia/min/vuepress-plugin-add-this?style=flat-square&logo=npm)](https://www.npmjs.com/package/vuepress-plugin-add-this)

<!-- markdownlint-restore -->

VuePress add-this plugin💌 / VuePress AddThis 插件 💌

## [Official Docs](https://vuepress-add-this.mrhope.site/) / [官方文档](https://vuepress-add-this.mrhope.site/zh/)

## How to use

### Install

```bash
npm i -D vuepress-plugin-add-this
```

Or

```bash
yarn add -D vuepress-plugin-add-this
```

### Usage

```js
// .vuepress/config.js
module.exports = {
  plugins: [
    [
      "add-this",
      {
        pubid: "your pubid",
      },
    ],
  ],
};
```

---

## 使用插件

### 安装

```bash
npm i -D vuepress-plugin-add-this
```

或

```bash
yarn add -D vuepress-plugin-add-this
```

### 使用

```js {7}
// .vuepress/config.js
module.exports = {
  plugins: [
    [
      "add-this",
      {
        pubid: "你的 pubid",
      },
    ],
  ],
};
```
