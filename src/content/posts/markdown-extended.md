---
title: Markdown 扩展语法示例
published: 2026-01-01
description: 演示博客支持的各种扩展 Markdown 语法
tags: [示例, Markdown]
category: 示例
draft: false
---

## GitHub 仓库卡片

可以用这个语法嵌入 GitHub 仓库卡片：

::github{repo="Cup-fish/witherwithwinter.github.io"}

```markdown
::github{repo="用户名/仓库名"}
```

## 提示框

支持以下几种提示框类型：

:::note
这是一条普通提示，用来补充说明一些信息。
:::

:::tip
这是一条小技巧，帮助你更顺利地完成操作。
:::

:::warning
这是一条警告，请注意这里可能有风险。
:::

:::important
这是重要信息，不要错过哦。
:::

:::caution
这是一条危险提示，操作前请三思。
:::

## 折叠剧透

内容 :spoiler[这里是隐藏的内容，点击可以显示]！

```markdown
内容 :spoiler[隐藏的文字]！
```

## 数学公式

行内公式：$E = mc^2$

块级公式：

$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$
