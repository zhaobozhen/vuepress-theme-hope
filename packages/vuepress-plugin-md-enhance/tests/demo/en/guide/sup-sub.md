# Superscript and Subscript <MyBadge text="V0.0.8" />

Let the Markdown file in your VuePress site support Subscript and Superscript.

## Configuration

```js
module.exports = {
  plugins: [
    [
      "md-enhance",
      {
        // Enable Subscript
        sub: true,
        // Enable  Superscript
        sup: true,
      },
    ],
  ],
};
```

## Syntax

- Use `^ ^` to mark the superscript.
- Use `~ ~` to mark the subscript.

## Demo

- 19^th^
- H~2~O

```md
- 19^th^
- H~2~O
```
