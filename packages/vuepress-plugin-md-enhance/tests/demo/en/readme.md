---
home: true
title: vuepress-plugin-md-enhance
heroImage: /logo.svg
heroText: vuepress-plugin-md-enhance
tagline: Enhancement for markdown in VuePress
actionText: Get Started →
actionLink: /en/guide/
features:
  - title: Superscript and subscript support
    details: Your markdown now suppport superscript and subscript
  - title: DIY Align
    details: Let you decide to align paragraphs in the way you like
  - title: Flowchart Support
    details: Create your flowchart in markdown
  - title: Tex Support
    details: Markdown now have Tex Support so you can write your formula
footer: MIT Licensed | Copyright © 2019-present Mr.Hope
---

### Install

```bash
npm i -D vuepress-plugin-md-enhance
```

### Usage

```js
// .vuepress/config.js
module.exports = {
  plugins: [
    [
      "md-enhance",
      {
        // your options
      },
    ],
  ],
};
```
