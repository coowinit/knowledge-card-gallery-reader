# Knowledge Card Gallery Reader

这是一个用于展示视觉知识卡片的静态 HTML 项目，包含两种展示方案：

1. **Knowledge Card Gallery**：图库模式，适合快速浏览和查找。
2. **Knowledge Card Reader Pro**：阅读器模式，适合主题较多、需要系统阅读的知识库。

仓库根目录新增了 `index.html`，用于 GitHub Pages 首页预览。部署后访问仓库根地址，即可点击进入两个不同的卡片展示效果。

## 在线预览路径

开启 GitHub Pages 后，访问地址通常是：

```text
https://你的用户名.github.io/knowledge-card-gallery-reader/
```

两个子页面路径分别是：

```text
/knowledge-card-gallery/
/knowledge-card-reader-pro/
```

## 项目结构

```text
knowledge-card-gallery-reader/
├── index.html                         # GitHub Pages 根目录预览页
├── README.md                          # 项目总说明
├── .nojekyll                          # GitHub Pages 静态资源支持
├── knowledge-card-gallery/            # 图库模式
│   ├── index.html
│   ├── README.md
│   ├── css/
│   ├── js/
│   └── images/
└── knowledge-card-reader-pro/         # 阅读器 Pro 模式
    ├── index.html
    ├── README.md
    ├── css/
    ├── js/
    └── images/
```

## 1. Knowledge Card Gallery

图库模式，适合快速浏览和查找。

特点：

- 主题卡片网格
- 每个主题内部 Swiper 轮播
- 点击图片进入大图预览
- 分类 / 标签筛选
- 手机端适配

适合：图片主题多、需要快速扫一遍、类似图库或素材库的场景。

## 2. Knowledge Card Reader Pro

阅读器模式，适合系统阅读和主题很多的知识库。

特点：

- 主题搜索
- 分类折叠目录
- 最近查看
- 收藏主题
- 手机端抽屉目录
- 主题内图片连续阅读

适合：一个主题有多张连续知识卡片、内容更像教程或知识专辑的场景。

## GitHub Pages 使用方法

1. 上传本项目所有文件到 GitHub 仓库根目录。
2. 进入仓库 `Settings`。
3. 点击 `Pages`。
4. Source 选择 `Deploy from a branch`。
5. Branch 选择 `main`。
6. Folder 选择 `/root`。
7. 保存并等待部署完成。

部署完成后，访问仓库 GitHub Pages 地址即可看到根目录预览页。

## 替换图片

知识卡片图片放入对应项目的：

```text
images/cards/主题文件夹/
```

然后修改对应项目里的：

```text
js/main.js
```

找到 `knowledgeData` 数据，把图片路径、标题、分类、标签替换成自己的内容即可。

## 图片路径注意

GitHub Pages 对文件路径大小写敏感。例如：

```text
images/cards/demo/01.jpg
```

不要在代码里写成：

```text
Images/Cards/Demo/01.JPG
```

否则本地 Windows 可能正常，但上传后会 404。
