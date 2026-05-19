# 知识卡片阅读器 Pro（Reader Pro）

这是一个适合系统阅读知识卡片的静态 HTML 页面。它把大量主题整理为可搜索、可折叠的目录，点击主题后在右侧连续阅读该主题下的所有知识卡片。

## 功能特点

- 左侧分类折叠目录
- 主题搜索
- 最近查看（使用 localStorage 保存）
- 收藏主题（使用 localStorage 保存）
- 目录区域内部滚动
- 手机端抽屉目录
- 图片连续阅读
- 点击图片大图预览
- 大图左右切换、点击放大、ESC 关闭
- CSS 和 JS 已拆分到独立文件夹
- 不依赖外部 CDN，适合上传 GitHub Pages 预览

## 文件结构

```text
knowledge-card-reader-pro/
├── index.html
├── README.md
├── .nojekyll
├── css/
│   └── style.css
├── js/
│   └── main.js
└── images/
    ├── icons/
    └── cards/
        ├── woocommerce-tabs/
        ├── wpc-victoria/
        ├── signage-lightbox/
        ├── material-board/
        ├── elementor-copy/
        └── product-image-slider/
```

## 如何替换为你的知识卡片

1. 把你的知识卡片图片放到 `images/cards/主题文件夹/`。
2. 打开 `js/main.js`。
3. 修改 `knowledgeData` 数据。

示例：

```js
{
  id: "your-topic-id",
  title: "你的主题标题",
  category: "分类名称",
  tags: ["标签1", "标签2"],
  date: "2026-05-19",
  description: "这个主题的简短说明。",
  images: [
    { title: "01 第一张", src: "images/cards/your-topic/01.jpg" },
    { title: "02 第二张", src: "images/cards/your-topic/02.jpg" }
  ]
}
```

建议图片格式使用：`jpg`、`png`、`webp`。

## 适合的使用场景

这个版本更适合：

- 一个主题包含多张连续知识卡片
- 希望用户像看文章一样从上往下阅读
- 主题数量很多，需要搜索、折叠目录、收藏、最近查看
- 教程、流程、案例复盘类内容

## 本地预览

可以直接双击 `index.html` 预览。

更推荐使用本地服务器预览：

```bash
python -m http.server 8000
```

然后访问：

```text
http://localhost:8000
```

## GitHub Pages 预览

1. 新建一个 GitHub 仓库。
2. 将本文件夹内的所有文件上传到仓库根目录。
3. 进入仓库 `Settings` → `Pages`。
4. Source 选择 `Deploy from a branch`。
5. Branch 选择 `main`，目录选择 `/root`。
6. 保存后等待 GitHub Pages 部署。

部署完成后，访问：

```text
https://你的用户名.github.io/仓库名/
```

## 注意事项

- `.nojekyll` 用于避免 GitHub Pages 对静态文件做 Jekyll 处理。
- 当前示例图片是 SVG 占位图。正式使用时可以替换为你的 PS 知识卡片图片。
- 收藏主题和最近查看保存在浏览器 localStorage 中，不需要数据库。
- 如果图片路径大小写不一致，在本地 Windows 可能正常，但上传到 GitHub 后可能 404。建议保持文件名和代码路径完全一致。
