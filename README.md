# 知识卡片展示页面：两种方案

这里整理了两个可以直接上传到 GitHub Pages 预览的静态 HTML 项目。

## 1. knowledge-card-gallery

图库模式，适合快速浏览和查找。

特点：

- 主题卡片网格
- 每个主题内部 Swiper 轮播
- 点击图片进入大图预览
- 分类 / 标签筛选
- 手机端适配

适合：图片主题多、需要快速扫一遍、类似图库或素材库的场景。

## 2. knowledge-card-reader-pro

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

每个文件夹都是独立项目。任选一个文件夹，将里面的内容上传到 GitHub 仓库根目录：

```text
index.html
css/
js/
images/
README.md
.nojekyll
```

然后在 GitHub 仓库里开启 Pages：

1. 进入 `Settings`。
2. 点击 `Pages`。
3. Source 选择 `Deploy from a branch`。
4. Branch 选择 `main`。
5. Folder 选择 `/root`。
6. 保存并等待部署完成。

访问地址一般是：

```text
https://你的用户名.github.io/仓库名/
```

## 替换图片

把你的 PS 知识卡片图片放入：

```text
images/cards/主题文件夹/
```

然后修改：

```text
js/main.js
```

里面的 `knowledgeData` 数据即可。

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
