---
title: 在文章中嵌入视频
published: 2026-01-01
description: 这篇文章演示如何在博客里嵌入 B 站或 YouTube 视频
tags: [示例, 视频]
category: 示例
draft: false
---

直接把视频的嵌入代码复制到 Markdown 文件里就好啦～

## B 站视频

```html
<iframe width="100%" height="468" 
  src="//player.bilibili.com/player.html?bvid=你的BV号&p=1&autoplay=0" 
  scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true">
</iframe>
```

<iframe width="100%" height="468" src="//player.bilibili.com/player.html?bvid=BV1fK4y1s7Qf&p=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>

## YouTube 视频

```html
<iframe width="100%" height="468" 
  src="https://www.youtube.com/embed/视频ID" 
  frameborder="0" allowfullscreen>
</iframe>
```
