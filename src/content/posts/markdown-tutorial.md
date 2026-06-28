---
title: 写文章的一些小技巧
published: 2026-01-01
description: 记录一下博客写作常用的 Markdown 语法
tags: [Markdown, 写作, 示例]
category: 示例
draft: false
---

## 基础语法

### 标题

```markdown
# 一级标题
## 二级标题
### 三级标题
```

### 强调

**加粗文字** 和 *斜体文字*

```markdown
**加粗** 和 *斜体*
```

### 列表

无序列表：
- 第一项
- 第二项
- 第三项

有序列表：
1. 第一步
2. 第二步
3. 第三步

### 链接和图片

```markdown
[链接文字](https://example.com)
![图片描述](./cover.jpg)
```

### 引用

> 这是一段引用的文字。
> 可以用来引用别人说过的话，或者写个题词。

### 代码

行内代码：`console.log("Hello")`

代码块：

```javascript
function hello() {
  console.log("你好，世界！")
}
```

---

## 文章 Frontmatter

每篇文章开头都要写一段配置信息：

```yaml
---
title: 文章标题
published: 2026-01-01
description: 文章简介，会显示在列表页
image: ./cover.jpg  # 封面图，可以不填
tags: [标签1, 标签2]
category: 分类名称
draft: false  # true 表示草稿，不会公开
pinned: false  # true 表示置顶
---
```

就这些啦，其实写多了就熟了呢～
