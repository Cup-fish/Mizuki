---
title: 加密文章示例
published: 2026-01-01
description: 这是一篇测试加密功能的文章
encrypted: true
pinned: false
password: "123456"
tags: ["示例", "加密"]
category: "技术"
---

这篇文章是加密的，需要输入密码才能查看内容。

密码是 `123456`，可以试试看～

## 加密功能说明

在文章的 Frontmatter 里添加以下字段就可以开启加密：

```yaml
encrypted: true
password: "你的密码"
```

这样访客需要输入正确密码才能阅读文章内容，适合写一些私密的记录。
