---
title: 博客使用小指南
published: 2026-01-01
description: 简单记录一下这个博客的基本玩法。
image: ''
tags: [指南, 博客]
category: 日常
draft: false
---

## 写文章

新建一个 `.md` 文件放到 `src/content/posts/` 目录下就好了呢。

文件开头记得写好 Frontmatter：

```yaml
---
title: 文章标题
published: 2026-03-19
description: 简单说说这篇文章讲什么
tags: [标签1, 标签2]
category: 分类
draft: false
---
```

## 图片

文章封面图片可以放在文章同目录下，然后在 Frontmatter 里这样写：

```yaml
image: ./cover.jpg
```

也可以用网络图片地址。

## 草稿

写到一半不想发布，把 `draft` 设成 `true` 就行啦，这样只有本地开发模式能看到，部署之后不会公开呢。

## 置顶

想把某篇文章放到最上面，加上这个就好：

```yaml
pinned: true
```

---

慢慢来，想写什么就写什么，不用有压力的 🐟
