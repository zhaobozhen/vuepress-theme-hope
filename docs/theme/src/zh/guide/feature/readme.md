---
icon: discoverfill
category: feature
tags:
  - intro
  - feature
---

# 新增特性

- [**深色模式**](theme.md#深色模式)

- [**主题色**](theme.md#主题色)

- [**页面信息**](page-info.md)

- [**评论功能**](comment.md)

- [**页面增强**](page.md)

- [**加密功能**](encrypt.md)

- [**Markdown 增强**](markdown/readme.md)

- [**PWA 支持**](pwa.md)

- [**新增组件**](component.md)

- [**Seo 和 Sitemap 支持**](seo-sitemap.md)

- 图标支持

  整个主题在多处都添加了 FontClass 格式图标的支持。

  请在 `.vuepress/styles` 的 `index.styl` 中导入对应的图标 CSS 文件。例如:

  ```css
  @import "//at.alicdn.com/t/font_1446717_giwlq66d28j.css";
  ```

  图标会默认添加 `iconfont` 类名，图标 class 的前缀默认为 `icon-`，可以在主题配置中的 `iconPrefix` 字段进行更改。

- [**TypeScript 支持**](typescript.md)
