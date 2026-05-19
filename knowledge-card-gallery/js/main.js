// 数据管理说明：
// 1. 每个主题对应一个对象。
// 2. images 数组中填写你的知识卡片图片路径。
// 3. 后续把示例 SVG 替换为你自己的 JPG/PNG/WebP 即可。

const knowledgeData = [
  {
    id: "woocommerce-tabs",
    title: "WooCommerce 产品详情页 Tabs 问题",
    category: "WordPress",
    tags: ["WooCommerce", "Elementor", "产品详情页", "Bug记录"],
    date: "2026-05-18",
    images: [
      { title: "01 问题现象", src: "images/cards/woocommerce-tabs/01-problem.svg" },
      { title: "02 原因分析", src: "images/cards/woocommerce-tabs/02-reason.svg" },
      { title: "03 解决方法", src: "images/cards/woocommerce-tabs/03-solution.svg" },
      { title: "04 验证方法", src: "images/cards/woocommerce-tabs/04-verify.svg" }
    ]
  },
  {
    id: "wpc-victoria",
    title: "澳大利亚维州气候与 WPC 优势",
    category: "产品知识",
    tags: ["WPC", "澳洲市场", "气候", "户外材料"],
    date: "2026-05-16",
    images: [
      { title: "01 维州气候特点", src: "images/cards/wpc-victoria/01-climate.svg" },
      { title: "02 WPC 材料优势", src: "images/cards/wpc-victoria/02-advantage.svg" },
      { title: "03 应用场景", src: "images/cards/wpc-victoria/03-application.svg" }
    ]
  },
  {
    id: "signage-lightbox",
    title: "布里斯班灯箱广告厚度参考",
    category: "广告标识",
    tags: ["灯箱", "广告牌", "澳洲", "施工参考"],
    date: "2026-05-14",
    images: [
      { title: "01 灯箱类型", src: "images/cards/signage-lightbox/01-type.svg" },
      { title: "02 厚度参考", src: "images/cards/signage-lightbox/02-thickness.svg" },
      { title: "03 安装注意", src: "images/cards/signage-lightbox/03-install.svg" }
    ]
  },
  {
    id: "material-board",
    title: "展示背景板材质选择",
    category: "设计参考",
    tags: ["MDF", "PVC发泡板", "铝扣板", "洞洞板", "展厅设计"],
    date: "2026-05-13",
    images: [
      { title: "01 MDF 烤漆板", src: "images/cards/material-board/01-mdf.svg" },
      { title: "02 PVC 发泡板", src: "images/cards/material-board/02-pvc.svg" },
      { title: "03 洞洞板", src: "images/cards/material-board/03-pegboard.svg" },
      { title: "04 工业白板", src: "images/cards/material-board/04-industrial.svg" },
      { title: "05 颜色方案", src: "images/cards/material-board/05-color.svg" }
    ]
  },
  {
    id: "elementor-copy",
    title: "Elementor 跨站复制内容方法",
    category: "WordPress",
    tags: ["Elementor", "跨站复制", "模板", "网站维护"],
    date: "2026-05-12",
    images: [
      { title: "01 直接复制", src: "images/cards/elementor-copy/01-copy.svg" },
      { title: "02 模板导入", src: "images/cards/elementor-copy/02-template.svg" }
    ]
  },
  {
    id: "product-image-slider",
    title: "产品图片缩略图横向滑动",
    category: "WordPress",
    tags: ["Elementor", "产品图片", "轮播", "CSS"],
    date: "2026-05-10",
    images: [
      { title: "01 默认换行", src: "images/cards/product-image-slider/01-wrap.svg" },
      { title: "02 CSS 方案", src: "images/cards/product-image-slider/02-css.svg" },
      { title: "03 插件方案", src: "images/cards/product-image-slider/03-plugin.svg" }
    ]
  }
];

const state = {
  category: "全部",
  tag: "全部",
  currentTopic: null
};

let cardSwipers = [];
let lightboxSwiper = null;

const $ = selector => document.querySelector(selector);
const grid = $("#grid");
const empty = $("#empty");
const categoryList = $("#categoryList");
const mobileFilters = $("#mobileFilters");
const tagCloud = $("#tagCloud");
const pageTitle = $("#pageTitle");
const resultText = $("#resultText");
const lightbox = $("#lightbox");
const closeLightbox = $("#closeLightbox");
const lightboxTitle = $("#lightboxTitle");
const lightboxMeta = $("#lightboxMeta");
const lightboxWrapper = $("#lightboxWrapper");

function unique(arr) {
  return [...new Set(arr)];
}

function getCategories() {
  return ["全部", ...unique(knowledgeData.map(item => item.category))];
}

function getTags() {
  return ["全部", ...unique(knowledgeData.flatMap(item => item.tags))];
}

function countByCategory(category) {
  if (category === "全部") return knowledgeData.length;
  return knowledgeData.filter(item => item.category === category).length;
}

function getFilteredData() {
  return knowledgeData
    .filter(item => state.category === "全部" || item.category === state.category)
    .filter(item => state.tag === "全部" || item.tags.includes(state.tag))
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

function renderFilters() {
  const categories = getCategories();

  categoryList.innerHTML = categories.map(category => `
    <button class="filter-btn ${state.category === category ? "active" : ""}" data-category="${category}">
      <span>${category}</span>
      <span class="count">${countByCategory(category)}</span>
    </button>
  `).join("");

  mobileFilters.innerHTML = categories.map(category => `
    <button class="tag-btn ${state.category === category ? "active" : ""}" data-category="${category}">${category}</button>
  `).join("");

  tagCloud.innerHTML = getTags().map(tag => `
    <button class="tag-btn ${state.tag === tag ? "active" : ""}" data-tag="${tag}">${tag}</button>
  `).join("");
}

function destroyCardSwipers() {
  cardSwipers.forEach(swiper => swiper.destroy(true, true));
  cardSwipers = [];
}

function renderGrid() {
  destroyCardSwipers();

  const data = getFilteredData();
  const imageTotal = data.reduce((sum, item) => sum + item.images.length, 0);

  pageTitle.textContent = state.category === "全部" ? "全部知识卡片" : state.category;
  resultText.textContent = `共 ${data.length} 个主题，${imageTotal} 张知识卡片`;

  grid.innerHTML = data.map(item => `
    <article class="topic-card">
      <div class="card-swiper-wrap">
        <span class="image-count">${item.images.length} 张</span>
        <span class="zoom-hint">点击放大</span>

        <div class="swiper card-swiper" data-topic-id="${item.id}">
          <div class="swiper-wrapper">
            ${item.images.map((image, index) => `
              <div class="swiper-slide" data-topic-id="${item.id}" data-image-index="${index}">
                <img src="${image.src}" alt="${item.title} - ${image.title}" loading="lazy" />
              </div>
            `).join("")}
          </div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
          <div class="swiper-pagination"></div>
        </div>
      </div>

      <div class="card-body">
        <div class="meta-row">
          <span class="category">${item.category}</span>
          <span class="date">${item.date}</span>
        </div>
        <h2>${item.title}</h2>
        <div class="tag-row">
          ${item.tags.slice(0, 4).map(tag => `<span class="pill">${tag}</span>`).join("")}
        </div>
      </div>
    </article>
  `).join("");

  empty.classList.toggle("show", data.length === 0);
  initCardSwipers();
}

function initCardSwipers() {
  document.querySelectorAll(".card-swiper").forEach(el => {
    const imageCount = el.querySelectorAll(".swiper-slide").length;
    const swiper = new Swiper(el, {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: imageCount > 1,
      speed: 360,
      grabCursor: true,
      resistanceRatio: 0.82,
      watchOverflow: true,
      navigation: {
        nextEl: el.querySelector(".swiper-button-next"),
        prevEl: el.querySelector(".swiper-button-prev")
      },
      pagination: {
        el: el.querySelector(".swiper-pagination"),
        clickable: true
      }
    });
    cardSwipers.push(swiper);
  });
}

function openLightbox(topicId, initialIndex = 0) {
  const topic = knowledgeData.find(item => item.id === topicId);
  if (!topic) return;

  state.currentTopic = topic;
  lightboxTitle.textContent = topic.title;
  lightboxWrapper.innerHTML = topic.images.map(image => `
    <div class="swiper-slide">
      <div class="swiper-zoom-container">
        <img src="${image.src}" alt="${topic.title} - ${image.title}" />
      </div>
    </div>
  `).join("");

  if (lightboxSwiper) {
    lightboxSwiper.destroy(true, true);
    lightboxSwiper = null;
  }

  lightbox.classList.add("show");
  document.body.style.overflow = "hidden";

  lightboxSwiper = new Swiper("#lightboxSwiper", {
    initialSlide: initialIndex,
    slidesPerView: 1,
    spaceBetween: 24,
    speed: 360,
    keyboard: {
      enabled: true
    },
    zoom: {
      maxRatio: 3,
      minRatio: 1
    },
    navigation: {
      nextEl: "#lightboxSwiper .swiper-button-next",
      prevEl: "#lightboxSwiper .swiper-button-prev"
    },
    pagination: {
      el: ".lightbox-pagination",
      clickable: true
    },
    on: {
      init(swiper) {
        updateLightboxMeta(swiper);
      },
      slideChange(swiper) {
        updateLightboxMeta(swiper);
      }
    }
  });
}

function updateLightboxMeta(swiper) {
  const topic = state.currentTopic;
  if (!topic) return;

  const index = swiper.realIndex ?? swiper.activeIndex;
  const image = topic.images[index];
  lightboxMeta.textContent = `${image.title} · ${index + 1} / ${topic.images.length} · 点击图片可放大，左右滑动切换`;
}

function closeLightboxPanel() {
  lightbox.classList.remove("show");
  document.body.style.overflow = "";

  if (lightboxSwiper) {
    lightboxSwiper.destroy(true, true);
    lightboxSwiper = null;
  }
}

function renderAll() {
  renderFilters();
  renderGrid();
}

document.addEventListener("click", event => {
  const categoryBtn = event.target.closest("[data-category]");
  if (categoryBtn) {
    state.category = categoryBtn.dataset.category;
    renderAll();
    return;
  }

  const tagBtn = event.target.closest("[data-tag]");
  if (tagBtn) {
    state.tag = tagBtn.dataset.tag;
    renderAll();
    return;
  }

  // 点击 Swiper 导航和分页时，不触发大图预览
  if (event.target.closest(".swiper-button-prev, .swiper-button-next, .swiper-pagination")) {
    return;
  }

  const slide = event.target.closest(".card-swiper .swiper-slide");
  if (slide) {
    const swiperEl = slide.closest(".card-swiper");
    const swiper = swiperEl && swiperEl.swiper;
    const index = swiper ? swiper.realIndex : Number(slide.dataset.imageIndex || 0);
    openLightbox(slide.dataset.topicId, index);
    return;
  }

  const zoomContainer = event.target.closest(".lightbox-swiper .swiper-zoom-container");
  if (zoomContainer && lightboxSwiper && lightboxSwiper.zoom) {
    if (lightboxSwiper.zoom.scale && lightboxSwiper.zoom.scale !== 1) {
      lightboxSwiper.zoom.out();
    } else {
      lightboxSwiper.zoom.in();
    }
  }
});

closeLightbox.addEventListener("click", closeLightboxPanel);

lightbox.addEventListener("click", event => {
  if (event.target === lightbox) {
    closeLightboxPanel();
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && lightbox.classList.contains("show")) {
    closeLightboxPanel();
  }
});

renderAll();
