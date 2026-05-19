    const knowledgeData = [
  {
    id: "woocommerce-tabs",
    title: "WooCommerce 产品详情页 Tabs 问题",
    category: "WordPress",
    tags: ["WooCommerce", "Elementor", "产品详情页", "Bug记录"],
    date: "2026-05-18",
    description: "整理产品详情页缺少 Product Data Tabs 造成编辑异常、评论区和布局显示问题的排查过程。",
    images: [
      { title: "01 问题现象", src: "images/cards/woocommerce-tabs/01-problem.svg" },
      { title: "02 原因分析", src: "images/cards/woocommerce-tabs/02-reason.svg" },
      { title: "03 解决方法", src: "images/cards/woocommerce-tabs/03-solution.svg" },
      { title: "04 验证方法", src: "images/cards/woocommerce-tabs/04-verify.svg" }
    ]
  },
  {
    id: "product-image-slider",
    title: "产品图片缩略图横向滑动",
    category: "WordPress",
    tags: ["Elementor", "产品图片", "轮播", "CSS"],
    date: "2026-05-10",
    description: "解决产品主图下方缩略图换行的问题，改为单行横向滚动或滑动浏览。",
    images: [
      { title: "01 默认换行", src: "images/cards/product-image-slider/01-wrap.svg" },
      { title: "02 CSS 方案", src: "images/cards/product-image-slider/02-css.svg" },
      { title: "03 插件方案", src: "images/cards/product-image-slider/03-plugin.svg" }
    ]
  },
  {
    id: "elementor-copy",
    title: "Elementor 跨站复制内容方法",
    category: "WordPress",
    tags: ["Elementor", "跨站复制", "模板", "网站维护"],
    date: "2026-05-12",
    description: "整理从一个 Elementor 网站复制内容到另一个网站时，更稳定的模板导入和复制方案。",
    images: [
      { title: "01 直接复制的问题", src: "images/cards/elementor-copy/01-copy.svg" },
      { title: "02 模板导出导入", src: "images/cards/elementor-copy/02-template.svg" }
    ]
  },
  {
    id: "wpc-victoria",
    title: "澳大利亚维州气候与 WPC 优势",
    category: "产品知识",
    tags: ["WPC", "澳洲市场", "气候", "户外材料"],
    date: "2026-05-16",
    description: "分析维多利亚州的气候特点，以及 WPC 在户外使用中的防水、防腐、低维护优势。",
    images: [
      { title: "01 维州气候特点", src: "images/cards/wpc-victoria/01-climate.svg" },
      { title: "02 WPC 材料优势", src: "images/cards/wpc-victoria/02-advantage.svg" },
      { title: "03 应用场景", src: "images/cards/wpc-victoria/03-application.svg" }
    ]
  },
  {
    id: "material-board",
    title: "展示背景板材质选择",
    category: "设计参考",
    tags: ["MDF", "PVC发泡板", "铝扣板", "洞洞板", "展厅设计"],
    date: "2026-05-13",
    description: "对比 MDF 烤漆板、PVC 发泡板、白色工业板、洞洞板等展示背景材质的视觉效果。",
    images: [
      { title: "01 MDF 烤漆板", src: "images/cards/material-board/01-mdf.svg" },
      { title: "02 PVC 发泡板", src: "images/cards/material-board/02-pvc.svg" },
      { title: "03 洞洞板", src: "images/cards/material-board/03-pegboard.svg" },
      { title: "04 工业白板", src: "images/cards/material-board/04-industrial.svg" },
      { title: "05 颜色方案", src: "images/cards/material-board/05-color.svg" }
    ]
  },
  {
    id: "signage-lightbox",
    title: "布里斯班灯箱广告厚度参考",
    category: "广告标识",
    tags: ["灯箱", "广告牌", "澳洲", "施工参考"],
    date: "2026-05-14",
    description: "用于整理灯箱广告、品牌标识牌、厚度选择和安装结构的常用知识卡片。",
    images: [
      { title: "01 灯箱类型", src: "images/cards/signage-lightbox/01-type.svg" },
      { title: "02 厚度参考", src: "images/cards/signage-lightbox/02-thickness.svg" },
      { title: "03 安装注意", src: "images/cards/signage-lightbox/03-install.svg" }
    ]
  }
];

    const storage = {
      get(key, fallback) {
        try {
          return JSON.parse(localStorage.getItem(key)) ?? fallback;
        } catch {
          return fallback;
        }
      },
      set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
      }
    };

    const state = {
      currentId: knowledgeData[0].id,
      search: "",
      openCategories: new Set(knowledgeData.map(item => item.category)),
      recent: storage.get("knowledgeReaderRecent", []),
      favorites: storage.get("knowledgeReaderFavorites", []),
      lightboxIndex: 0
    };

    const $ = selector => document.querySelector(selector);

    const catalogSearch = $("#catalogSearch");
    const catalogTree = $("#catalogTree");
    const favoriteList = $("#favoriteList");
    const recentList = $("#recentList");
    const clearRecent = $("#clearRecent");

    const readerTitle = $("#readerTitle");
    const readerDesc = $("#readerDesc");
    const readerMeta = $("#readerMeta");
    const breadcrumb = $("#breadcrumb");
    const cardStack = $("#cardStack");
    const readerFavBtn = $("#readerFavBtn");
    const mobileFavBtn = $("#mobileFavBtn");
    const mobileCurrentTitle = $("#mobileCurrentTitle");
    const mobileCurrentMeta = $("#mobileCurrentMeta");
    const prevTopicBtn = $("#prevTopicBtn");
    const nextTopicBtn = $("#nextTopicBtn");
    const prevTopicText = $("#prevTopicText");
    const nextTopicText = $("#nextTopicText");

    const openDrawer = $("#openDrawer");
    const drawerBackdrop = $("#drawerBackdrop");

    const lightbox = $("#lightbox");
    const closeLightbox = $("#closeLightbox");
    const lightboxTitle = $("#lightboxTitle");
    const lightboxMeta = $("#lightboxMeta");
    const lightboxImg = $("#lightboxImg");
    const prevImage = $("#prevImage");
    const nextImage = $("#nextImage");

    function currentTopic() {
      return knowledgeData.find(item => item.id === state.currentId) || knowledgeData[0];
    }

    function unique(arr) {
      return [...new Set(arr)];
    }

    function groupedData() {
      const keyword = state.search.trim().toLowerCase();
      const filtered = knowledgeData.filter(item => {
        if (!keyword) return true;
        const text = [
          item.title,
          item.category,
          item.description,
          item.tags.join(" "),
          item.images.map(img => img.title).join(" ")
        ].join(" ").toLowerCase();
        return text.includes(keyword);
      });

      return unique(filtered.map(item => item.category)).map(category => ({
        category,
        items: filtered.filter(item => item.category === category)
      }));
    }

    function renderCatalog() {
      const groups = groupedData();

      if (!groups.length) {
        catalogTree.innerHTML = '<div class="no-result">没有找到匹配的主题</div>';
        return;
      }

      catalogTree.innerHTML = groups.map(group => {
        const isOpen = state.search ? true : state.openCategories.has(group.category);
        return `
          <div class="category-block ${isOpen ? "open" : ""}" data-category-block="${group.category}">
            <button class="category-toggle" data-category-toggle="${group.category}">
              <span class="caret"></span>
              <span class="category-name">${group.category}</span>
              <span class="category-num">${group.items.length}</span>
            </button>
            <div class="topic-list">
              ${group.items.map(item => `
                <div style="display:grid; grid-template-columns:minmax(0,1fr) auto; gap:4px; align-items:center;">
                  <button class="topic-btn ${item.id === state.currentId ? "active" : ""}" data-topic-id="${item.id}">
                    <span class="topic-title">${item.title}</span>
                    <span class="mini-count">${item.images.length}张</span>
                  </button>
                  <button class="fav-toggle ${state.favorites.includes(item.id) ? "active" : ""}" data-fav-id="${item.id}" aria-label="收藏 ${item.title}">★</button>
                </div>
              `).join("")}
            </div>
          </div>
        `;
      }).join("");
    }

    function renderQuickLists() {
      const favoriteItems = state.favorites
        .map(id => knowledgeData.find(item => item.id === id))
        .filter(Boolean);

      const recentItems = state.recent
        .map(id => knowledgeData.find(item => item.id === id))
        .filter(Boolean);

      favoriteList.classList.toggle("empty", favoriteItems.length === 0);
      favoriteList.innerHTML = favoriteItems.map(item => `
        <button class="quick-topic-btn" data-topic-id="${item.id}">
          <span>${item.title}</span>
          <span class="mini-count">${item.images.length}张</span>
        </button>
      `).join("");

      recentList.classList.toggle("empty", recentItems.length === 0);
      recentList.innerHTML = recentItems.map(item => `
        <button class="quick-topic-btn" data-topic-id="${item.id}">
          <span>${item.title}</span>
          <span class="mini-count">${item.images.length}张</span>
        </button>
      `).join("");
    }

    function renderReader() {
      const topic = currentTopic();
      const topicIndex = knowledgeData.findIndex(item => item.id === topic.id);
      const prevTopic = knowledgeData[(topicIndex - 1 + knowledgeData.length) % knowledgeData.length];
      const nextTopic = knowledgeData[(topicIndex + 1) % knowledgeData.length];

      breadcrumb.textContent = `${topic.category} / ${topic.title}`;
      readerTitle.textContent = topic.title;
      readerDesc.textContent = topic.description;
      readerMeta.innerHTML = `
        <span class="pill primary">${topic.category}</span>
        <span class="pill">${topic.date}</span>
        <span class="pill">${topic.images.length} 张卡片</span>
        ${topic.tags.map(tag => `<span class="pill">${tag}</span>`).join("")}
      `;

      cardStack.innerHTML = topic.images.map((image, index) => `
        <article class="knowledge-card">
          <div class="knowledge-card-header">
            <h3>${image.title}</h3>
            <span>${index + 1} / ${topic.images.length}</span>
          </div>
          <img src="${image.src}" alt="${topic.title} - ${image.title}" data-image-index="${index}" loading="lazy" />
        </article>
      `).join("");

      prevTopicText.textContent = prevTopic.title;
      nextTopicText.textContent = nextTopic.title;
      prevTopicBtn.dataset.topicId = prevTopic.id;
      nextTopicBtn.dataset.topicId = nextTopic.id;

      const isFav = state.favorites.includes(topic.id);
      readerFavBtn.classList.toggle("active", isFav);
      mobileFavBtn.classList.toggle("active", isFav);

      mobileCurrentTitle.textContent = topic.title;
      mobileCurrentMeta.textContent = `${topic.category} · ${topic.images.length} 张`;

      renderCatalog();
      renderQuickLists();
    }

    function openTopic(id, closeDrawer = true) {
      if (!knowledgeData.some(item => item.id === id)) return;
      state.currentId = id;
      addRecent(id);
      renderReader();
      if (closeDrawer) document.body.classList.remove("drawer-open");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function addRecent(id) {
      state.recent = [id, ...state.recent.filter(item => item !== id)].slice(0, 6);
      storage.set("knowledgeReaderRecent", state.recent);
    }

    function toggleFavorite(id) {
      if (state.favorites.includes(id)) {
        state.favorites = state.favorites.filter(item => item !== id);
      } else {
        state.favorites = [id, ...state.favorites].slice(0, 20);
      }
      storage.set("knowledgeReaderFavorites", state.favorites);
      renderReader();
    }

    function openLightbox(index) {
      const topic = currentTopic();
      state.lightboxIndex = index;
      lightbox.classList.add("show");
      document.body.style.overflow = "hidden";
      renderLightbox();
    }

    function renderLightbox() {
      const topic = currentTopic();
      const image = topic.images[state.lightboxIndex];
      lightboxTitle.textContent = topic.title;
      lightboxMeta.textContent = `${image.title} · ${state.lightboxIndex + 1} / ${topic.images.length}`;
      lightboxImg.classList.remove("zoomed");
      lightboxImg.src = image.src;
      lightboxImg.alt = `${topic.title} - ${image.title}`;
      prevImage.style.display = topic.images.length > 1 ? "block" : "none";
      nextImage.style.display = topic.images.length > 1 ? "block" : "none";
    }

    function moveLightbox(step) {
      const topic = currentTopic();
      state.lightboxIndex = (state.lightboxIndex + step + topic.images.length) % topic.images.length;
      renderLightbox();
    }

    function closeLightboxPanel() {
      lightbox.classList.remove("show");
      lightboxImg.classList.remove("zoomed");
      document.body.style.overflow = "";
    }

    catalogSearch.addEventListener("input", event => {
      state.search = event.target.value;
      renderCatalog();
    });

    clearRecent.addEventListener("click", () => {
      state.recent = [];
      storage.set("knowledgeReaderRecent", state.recent);
      renderQuickLists();
    });

    document.addEventListener("click", event => {
      const topicBtn = event.target.closest("[data-topic-id]");
      if (topicBtn) {
        openTopic(topicBtn.dataset.topicId);
        return;
      }

      const categoryToggle = event.target.closest("[data-category-toggle]");
      if (categoryToggle) {
        const category = categoryToggle.dataset.categoryToggle;
        if (state.openCategories.has(category)) state.openCategories.delete(category);
        else state.openCategories.add(category);
        renderCatalog();
        return;
      }

      const favBtn = event.target.closest("[data-fav-id]");
      if (favBtn) {
        event.stopPropagation();
        toggleFavorite(favBtn.dataset.favId);
        return;
      }

      const image = event.target.closest(".knowledge-card img");
      if (image) {
        openLightbox(Number(image.dataset.imageIndex));
      }
    });

    readerFavBtn.addEventListener("click", () => toggleFavorite(currentTopic().id));
    mobileFavBtn.addEventListener("click", () => toggleFavorite(currentTopic().id));

    openDrawer.addEventListener("click", () => document.body.classList.add("drawer-open"));
    drawerBackdrop.addEventListener("click", () => document.body.classList.remove("drawer-open"));

    closeLightbox.addEventListener("click", closeLightboxPanel);
    prevImage.addEventListener("click", () => moveLightbox(-1));
    nextImage.addEventListener("click", () => moveLightbox(1));
    lightboxImg.addEventListener("click", () => lightboxImg.classList.toggle("zoomed"));

    lightbox.addEventListener("click", event => {
      if (event.target === lightbox) closeLightboxPanel();
    });

    document.addEventListener("keydown", event => {
      if (event.key === "Escape") {
        if (lightbox.classList.contains("show")) closeLightboxPanel();
        document.body.classList.remove("drawer-open");
      }

      if (lightbox.classList.contains("show")) {
        if (event.key === "ArrowLeft") moveLightbox(-1);
        if (event.key === "ArrowRight") moveLightbox(1);
      }
    });

    addRecent(state.currentId);
    renderReader();
  
