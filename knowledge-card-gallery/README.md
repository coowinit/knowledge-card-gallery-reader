# 知识卡片图库（Swiper Gallery）

这是一个适合快速浏览知识卡片的静态 HTML 页面。每个主题以卡片形式展示，卡片内部使用 Swiper 轮播，点击图片可以进入大图预览。

## 功能特点

- 主题卡片网格展示
- 每个主题内图片 Swiper 轮播
- 点击图片大图预览
- 大图左右切换、点击放大
- 分类筛选、标签筛选
- 手机端自适应
- 左右箭头和关闭按钮使用纯 CSS 绘制，不依赖外部图标文件
- Swiper CSS/JS 已放在本地文件夹，方便上传 GitHub Pages 预览

## 文件结构

```text
knowledge-card-gallery/
├── index.html
├── README.md
├── .nojekyll
├── css/
│   ├── style.css
│   └── swiper-bundle.min.css
├── js/
│   ├── main.js
│   └── swiper-bundle.min.js
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

1. 把 PS 导出的图片放到 `images/cards/主题文件夹/`。
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
  images: [
    { title: "01 第一张", src: "images/cards/your-topic/01.jpg" },
    { title: "02 第二张", src: "images/cards/your-topic/02.jpg" }
  ]
}
```

建议图片格式使用：`jpg`、`png`、`webp`。

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
- 当前示例图片是 SVG 占位图。正式使用时可以替换为你的知识卡片图片。
- 如果图片路径大小写不一致，在本地 Windows 可能正常，但上传到 GitHub 后可能 404。建议保持文件名和代码路径完全一致。
