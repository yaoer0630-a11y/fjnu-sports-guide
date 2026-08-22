(() => {
  "use strict";

  const data = window.SPORTS_GUIDE;
  const serviceMap = new Map(data.services.map((item) => [item.id, item]));
  const state = {
    view: "home",
    history: [],
    serviceCategory: "全部",
    campus: "全部",
    topicServiceId: null
  };

  const escapeHtml = (value) => String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

  const refreshIcons = () => {
    if (window.lucide) window.lucide.createIcons();
  };

  const iconMarkup = (name) => `<i data-lucide="${escapeHtml(name)}"></i>`;

  function serviceTile(item) {
    if (item.href) {
      return `
      <a class="service-tile" href="${escapeHtml(item.href)}" aria-label="打开${escapeHtml(item.title)}">
        <span class="tile-icon">${iconMarkup(item.icon)}</span>
        <span>${escapeHtml(item.title)}</span>
      </a>`;
    }
    return `
      <button class="service-tile" type="button" data-open-service="${escapeHtml(item.id)}">
        <span class="tile-icon">${iconMarkup(item.icon)}</span>
        <span>${escapeHtml(item.title)}</span>
      </button>`;
  }

  function serviceRow(item) {
    if (item.href) {
      return `
      <a class="service-row" href="${escapeHtml(item.href)}" aria-label="打开${escapeHtml(item.title)}">
        <span class="row-icon">${iconMarkup(item.icon)}</span>
        <span class="row-copy">
          <strong>${escapeHtml(item.title)}</strong>
          <span>${escapeHtml(item.summary)}</span>
          <span class="status">${escapeHtml(item.status)}</span>
        </span>
        ${iconMarkup("chevron-right")}
      </a>`;
    }
    return `
      <button class="service-row" type="button" data-open-service="${escapeHtml(item.id)}">
        <span class="row-icon">${iconMarkup(item.icon)}</span>
        <span class="row-copy">
          <strong>${escapeHtml(item.title)}</strong>
          <span>${escapeHtml(item.summary)}</span>
          <span class="status">${escapeHtml(item.status)}</span>
        </span>
        ${iconMarkup("chevron-right")}
      </button>`;
  }

  function renderHome() {
    document.querySelector("#home-service-grid").innerHTML = data.homeServices
      .map((id) => serviceMap.get(id))
      .filter(Boolean)
      .map(serviceTile)
      .join("");

    document.querySelector("#comic-story-grid").innerHTML = data.comicStories.map((story) => `
      <button class="comic-story-card" type="button" data-open-comic="${escapeHtml(story.id)}">
        <img src="${escapeHtml(story.image)}" alt="${escapeHtml(story.title)}">
        <strong>${escapeHtml(story.title)}</strong>
        <span>${escapeHtml(story.short)}</span>
      </button>`).join("");

    refreshIcons();
  }

  function openComicStory(id) {
    const story = data.comicStories.find((item) => item.id === id);
    if (!story) return;
    document.querySelector("#detail-kicker").textContent = "打破流言小故事";
    document.querySelector("#detail-title").textContent = story.title;
    const sections = story.sections.map((section) => `
      <section class="detail-section"><h3>${escapeHtml(section.title)}</h3>
        <div class="answer-questions">${section.items.map((text) => `<details><summary>${escapeHtml(text)}</summary><p>${escapeHtml(text)}</p></details>`).join("")}</div>
      </section>`).join("");
    document.querySelector("#detail-content").innerHTML = `
      <div class="comic-detail-image"><img src="${escapeHtml(story.image)}" alt="${escapeHtml(story.title)}"></div>
      <div class="detail-hero"><p>${escapeHtml(story.lead)}</p></div>
      ${sections}
      ${renderSources(story.sourceIds)}
      <button class="secondary-button" type="button" data-nav="home">回到首页</button>`;
    navigate("detail");
  }

  function renderServices() {
    const categories = ["全部", ...new Set(data.services
      .filter((item) => !["说明", "教师端"].includes(item.category))
      .map((item) => item.category))];

    document.querySelector("#service-filters").innerHTML = categories.map((category) => `
      <button type="button" class="${state.serviceCategory === category ? "active" : ""}" data-service-filter="${escapeHtml(category)}">
        ${escapeHtml(category)}
      </button>`).join("");

    const items = data.services.filter((item) => {
      if (["说明", "教师端"].includes(item.category)) return false;
      return state.serviceCategory === "全部" || item.category === state.serviceCategory;
    });

    document.querySelector("#service-list").innerHTML = items.map(serviceRow).join("");
    refreshIcons();
  }

  function renderTopic(item) {
    const questions = data.faq.filter((faq) => faq.serviceId === item.id);
    const sections = item.sections || [];
    document.querySelector("#topic-kicker").textContent = item.kicker || item.category;
    document.querySelector("#topic-title").textContent = item.title;
    document.querySelector("#topic-lead").textContent = item.lead || item.summary;
    const faqCards = questions.map((faq) => `<button class="topic-question" type="button" data-open-question="${escapeHtml(faq.q)}"><span class="question-index">${iconMarkup("help-circle")}</span><span><strong>${escapeHtml(faq.q)}</strong><small>${escapeHtml(faq.status)}</small></span>${iconMarkup("chevron-right")}</button>`);
    const sectionCards = sections.map((section, index) => `<button class="topic-question" type="button" data-open-section="${index}"><span class="question-index">${iconMarkup(item.icon)}</span><span><strong>${escapeHtml(section.title)}</strong><small>${escapeHtml(item.status || "专题说明")}</small></span>${iconMarkup("chevron-right")}</button>`);
    document.querySelector("#topic-question-grid").innerHTML = [...faqCards, ...sectionCards].join("") || `<p class="empty-topic">本专题正在整理，已确认信息发布后会显示在这里。</p>`;
    refreshIcons();
  }

  function renderTeacher() {
    document.querySelector("#teacher-tool-list").innerHTML = data.teacherTools.map((item) => `
      <button class="service-tile teacher-service-tile" type="button" data-open-teacher-tool="${escapeHtml(item.title)}">
        <span class="tile-icon">${iconMarkup(item.icon)}</span><span>${escapeHtml(item.title)}</span>
      </button>`).join("");

    document.querySelector("#experience-grid").innerHTML = data.experienceDimensions.map((item) => `
      <article class="experience-item"><strong>${escapeHtml(item.title)}</strong><p>${escapeHtml(item.text)}</p></article>`).join("");
  }

  function mapUrls(keyword) {
    const q = encodeURIComponent(keyword);
    return {
      browser: `https://apis.map.qq.com/uri/v1/search?keyword=${q}&region=${encodeURIComponent("福州")}`,
      baidu: `https://map.baidu.com/search/${q}`,
      google: `https://www.google.com/maps/search/?api=1&query=${q}`
    };
  }

  function renderVenues() {
    const campuses = ["全部", ...new Set(data.venues.map((item) => item.campus))];
    document.querySelector("#campus-filters").innerHTML = campuses.map((campus) => `
      <button type="button" class="${state.campus === campus ? "active" : ""}" data-campus-filter="${escapeHtml(campus)}">${escapeHtml(campus)}</button>`).join("");

    const venues = data.venues.filter((item) => state.campus === "全部" || item.campus === state.campus);
    document.querySelector("#venue-list").innerHTML = venues.map((item) => `
      <article class="venue-card">
        <header><h3>${escapeHtml(item.name)}</h3><span class="campus-tag">${escapeHtml(item.campus)}校区</span></header>
        <p>${escapeHtml(item.purpose)}</p>
        <div class="venue-actions"><a href="${escapeHtml(mapUrls(item.keyword).browser)}" target="_blank" rel="noopener noreferrer">${iconMarkup("map")}浏览器地图</a><a href="${escapeHtml(mapUrls(item.keyword).baidu)}" target="_blank" rel="noopener noreferrer">${iconMarkup("navigation")}百度地图</a><button type="button" data-copy-place="${escapeHtml(item.keyword)}">${iconMarkup("copy")}复制地点</button></div>
        <p class="route-note">路线提示：打开地图后搜索该具体场馆名称；如果地图无法定位，请复制地点到手机自带地图或微信位置搜索。</p>
      </article>`).join("");
    refreshIcons();
  }

  function openTeacherTool(title) {
    const item = data.teacherTools.find((tool) => tool.title === title);
    if (!item) return;
    const isRpe = item.title.includes("强度测量");
    document.querySelector("#teacher-rpe-section").hidden = !isRpe;
    if (isRpe) {
      document.querySelector("#teacher-rpe-section").scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    renderDetail({
      title: item.title,
      kicker: "教师帮助",
      category: "教师端",
      lead: item.text,
      sections: [{ title: "可查看内容", items: item.items || [] }]
    });
    navigate("detail");
  }

  function renderSources(sourceIds) {
    const sources = (sourceIds || []).map((id) => data.sources[id]).filter(Boolean);
    if (!sources.length) return "";
    return `
      <section class="detail-section">
        <h3>来源与核验状态</h3>
        <div class="source-list">
          ${sources.map((source) => `
            <a class="source-link" href="${escapeHtml(source.url)}" target="_blank" rel="noopener noreferrer">
              <span><strong>${escapeHtml(source.title)}</strong><span>${escapeHtml(source.issuer)} · ${escapeHtml(source.date)} · ${escapeHtml(source.status)}</span></span>
              ${iconMarkup("external-link")}
            </a>`).join("")}
        </div>
      </section>`;
  }

  function renderDetail(item) {
    document.querySelector("#detail-kicker").textContent = item.kicker || item.category;
    document.querySelector("#detail-title").textContent = item.title;

    const sections = (item.sections || []).map((section) => `
      <section class="detail-section">
        <h3>${escapeHtml(section.title)}</h3>
        ${section.items ? `<div class="answer-questions">${section.items.map((text, index) => `<details><summary>${escapeHtml(text.split("：")[0] || `问题${index + 1}`)}</summary><p>${escapeHtml(text)}</p></details>`).join("")}</div>` : ""}
        ${section.text ? `<p>${escapeHtml(section.text)}</p>` : ""}
      </section>`).join("");

    let actions = "";
    if (item.id === "health-class") {
      actions = `
        <div class="venue-actions">
          <a href="https://sdyy.fjnu.edu.cn/4e/37/c12387a216631/page.htm" target="_blank" rel="noopener noreferrer">${iconMarkup("file-text")}打开申请表</a>
          <a href="https://sdyy.fjnu.edu.cn/4e/55/c11959a216661/page.htm" target="_blank" rel="noopener noreferrer">${iconMarkup("list-checks")}查看办理说明</a>
          <a href="tel:059122868273">${iconMarkup("phone")}拨打电话</a>
          <a href="#" data-inline-nav="map">${iconMarkup("map-pinned")}场馆导航</a>
        </div>`;
    } else if (item.id === "emergency") {
      actions = `<div class="venue-actions"><a class="danger-link" href="tel:120">${iconMarkup("phone-call")}拨打120</a><a href="#" data-inline-nav="map">${iconMarkup("map-pinned")}查看校园场馆</a></div>`;
    } else if (["fitness-score", "graduate-score"].includes(item.id)) {
      actions = `<button class="primary-button" type="button" data-inline-nav="calc">进入成绩核算</button>`;
    } else if (item.id === "venues") {
      actions = `<button class="primary-button" type="button" data-inline-nav="map">打开场馆导航</button>`;
    } else if (item.id === "teacher-support") {
      actions = `<button class="primary-button" type="button" data-inline-nav="teacher">进入教师端</button>`;
    }
    const answerText = `${item.q || ""} ${item.answer || ""}`;
    if (!actions && (item.serviceId === "health-class" || /保健体育|保健班/.test(answerText))) {
      actions = `<div class="venue-actions"><a href="https://sdyy.fjnu.edu.cn/4e/37/c12387a216631/page.htm" target="_blank" rel="noopener noreferrer">${iconMarkup("file-text")}打开申请表</a><a href="tel:059122868273">${iconMarkup("phone")}拨打咨询电话</a><a href="#" data-inline-nav="map">${iconMarkup("map-pinned")}查看办理地点</a></div>`;
    } else if (!actions && /地点|鸣华|场馆|导航/.test(answerText)) {
      actions = `<button class="primary-button" type="button" data-inline-nav="map">${iconMarkup("map-pinned")}打开场馆导航</button>`;
    }

    document.querySelector("#detail-content").innerHTML = `
      <div class="detail-hero"><p>${escapeHtml(item.lead)}</p></div>
      ${sections}
      ${item.warning ? `<div class="detail-warning">${escapeHtml(item.warning)}</div>` : ""}
      ${actions}
      ${renderSources(item.sourceIds)}`;
    refreshIcons();
  }

  function navigate(view, options = {}) {
    const target = document.querySelector(`[data-view="${view}"]`);
    if (!target) return;

    if (options.push !== false && state.view !== view) state.history.push(state.view);
    state.view = view;
    document.querySelectorAll("[data-view]").forEach((element) => element.classList.toggle("active", element === target));
    document.querySelectorAll(".bottom-nav [data-nav]").forEach((button) => {
      button.classList.toggle("active", button.dataset.nav === view);
    });

    if (view === "services") renderServices();
    if (view === "map") renderVenues();
    window.scrollTo({ top: 0, behavior: "instant" });
    refreshIcons();
  }

  function back() {
    const previous = state.history.pop() || "home";
    navigate(previous, { push: false });
  }

  function openService(id) {
    const item = serviceMap.get(id);
    if (!item) return;
    state.topicServiceId = id;
    renderTopic(item);
    navigate("topic");
  }

  function openQuestion(question) {
    const item = data.faq.find((faq) => faq.q === question);
    if (!item) return;
    let action = "";
    if (["fitness-score", "graduate-score"].includes(item.serviceId)) action = `<button class="primary-button" type="button" data-inline-nav="calc">进入体测成绩核算</button>`;
    if (item.serviceId === "venues") action = `<button class="primary-button" type="button" data-inline-nav="map">打开具体场馆导航</button>`;
    if (item.serviceId === "teacher-support") action = `<button class="primary-button" type="button" data-inline-nav="teacher">进入教师与辅导员端</button>`;
    if (item.serviceId === "health-class") action = `<a class="primary-link" href="tel:059122868273">拨打保健体育咨询电话</a>`;
    document.querySelector("#detail-kicker").textContent = item.status || "信息问答";
    document.querySelector("#detail-title").textContent = item.q;
    document.querySelector("#detail-content").innerHTML = `
      <div class="detail-hero"><p>${escapeHtml(item.answer)}</p></div>
      <section class="detail-section"><h3>信息状态</h3><p>${escapeHtml(item.status || "已整理信息")}</p></section>
      ${action}
      ${item.serviceId ? `<button class="secondary-button" type="button" data-open-service="${escapeHtml(item.serviceId)}">返回本专题问题</button>` : ""}
      ${renderSources(item.sourceIds)}`;
    navigate("detail");
  }

  function openSection(index) {
    const service = serviceMap.get(state.topicServiceId);
    const section = service?.sections?.[Number(index)];
    if (!service || !section) return;
    document.querySelector("#detail-kicker").textContent = service.status || service.category;
    document.querySelector("#detail-title").textContent = section.title;
    document.querySelector("#detail-content").innerHTML = `
      <div class="detail-hero"><p>${escapeHtml(section.text || section.items?.[0] || service.lead)}</p></div>
      ${section.items?.length > 1 ? `<section class="detail-section"><h3>详细说明</h3><ul>${section.items.map((text) => `<li>${escapeHtml(text)}</li>`).join("")}</ul></section>` : ""}
      <section class="detail-section"><h3>信息状态</h3><p>${escapeHtml(service.status || "已整理信息")}</p></section>
      ${service.id === "venues" ? `<button class="primary-button" type="button" data-inline-nav="map">打开具体场馆导航</button>` : ""}
      <button class="secondary-button" type="button" data-open-service="${escapeHtml(service.id)}">返回本专题问题</button>
      ${renderSources(service.sourceIds)}`;
    navigate("detail");
  }

  function normalize(text) {
    return String(text || "").toLowerCase().replace(/[\s，。？！、,.?!：:；;（）()]/g, "");
  }

  function findAnswer(query) {
    const clean = normalize(query);
    if (!clean) return null;

    const ranked = data.faq.map((item) => {
      let score = 0;
      const question = normalize(item.q);
      if (question.includes(clean) || clean.includes(question)) score += 40;
      item.keywords.forEach((keyword) => {
        const key = normalize(keyword);
        if (clean.includes(key)) score += Math.max(6, key.length * 4);
        else if (clean.length >= 2 && key.includes(clean)) score += clean.length * 2;
      });
      return { item, score };
    }).sort((a, b) => b.score - a.score);

    return ranked[0]?.score > 0 ? ranked[0].item : null;
  }

  function showAnswer(query) {
    const item = findAnswer(query);
    const panel = document.querySelector("#answer-panel");
    if (!item) {
      panel.innerHTML = `
        <div class="answer-empty">
          ${iconMarkup("circle-help")}
          <p>暂未命中已整理答案。可换成“免测材料”“保健体育成绩”“毕业体测”“校园跑”等关键词。</p>
        </div>`;
      refreshIcons();
      return;
    }

    const sourceNames = (item.sourceIds || []).map((id) => data.sources[id]?.title).filter(Boolean);
    panel.innerHTML = `
      <h3>${escapeHtml(item.q)}</h3>
      <span class="answer-status">${escapeHtml(item.status)}</span>
      <p>${escapeHtml(item.answer)}</p>
      ${sourceNames.length ? `<p class="answer-source">依据：${escapeHtml(sourceNames.join("；"))}</p>` : ""}
      ${item.serviceId ? `<button type="button" data-open-service="${escapeHtml(item.serviceId)}">查看完整说明 →</button>` : ""}`;
    refreshIcons();
  }

  function renderQa() {
    const quick = [
      "体测免测怎么申请？",
      "保健体育上什么内容？",
      "保健体育还要校园跑吗？",
      "毕业体测成绩怎么算？",
      "减肥是不是只要跑步？"
    ];
    document.querySelector("#quick-questions").innerHTML = quick.map((text) => `
      <button type="button" data-quick-question="${escapeHtml(text)}">${escapeHtml(text)}</button>`).join("");
  }

  function renderScoreInputs() {
    const container = document.querySelector("#score-inputs");
    if (!container) return;
    container.innerHTML = data.scoreItems.map((item) => `
      <label>${escapeHtml(item.label)}（${Math.round(item.weight * 100)}%）
        <input type="number" data-score-item="${escapeHtml(item.id)}" min="0" max="100" step="0.1" required>
      </label>`).join("");
  }

  const scoreBand = (value, bands, lowerBetter = false) => {
    const ordered = [...bands].sort((a, b) => lowerBetter ? a[0] - b[0] : b[0] - a[0]);
    for (const band of ordered) if (lowerBetter ? value <= band[0] : value >= band[0]) return band[1];
    return 10;
  };
  const parseTime = (raw) => { const m = String(raw).trim().match(/^(\d+):([0-5]\d)$/); return m ? Number(m[1]) * 60 + Number(m[2]) : Number(raw); };
  const rawScore = (sex, id, value) => {
    const tables = {
      vital: sex === "male" ? [[5040,100],[4920,95],[4800,90],[4550,85],[4300,80],[4180,78],[4060,76],[3940,74],[3820,72],[3700,70],[3580,68],[3460,66],[3340,64],[3220,62],[3100,60],[2940,50],[2780,40],[2620,30],[2460,20]] : [[3400,100],[3350,95],[3300,90],[3150,85],[3000,80],[2900,78],[2800,76],[2700,74],[2600,72],[2500,70],[2400,68],[2300,66],[2200,64],[2100,62],[2000,60],[1960,50],[1920,40],[1880,30],[1840,20]],
      sprint: sex === "male" ? [[6.7,100],[6.8,95],[6.9,90],[7,85],[7.1,80],[7.3,78],[7.5,76],[7.7,74],[7.9,72],[8.1,70],[8.3,68],[8.5,66],[8.7,64],[8.9,62],[9.1,60],[9.3,50],[9.5,40],[9.7,30],[9.9,20]] : [[7.5,100],[7.6,95],[7.7,90],[8,85],[8.3,80],[8.5,78],[8.7,76],[8.9,74],[9.1,72],[9.3,70],[9.5,68],[9.7,66],[9.9,64],[10.1,62],[10.3,60],[10.5,50],[10.7,40],[10.9,30],[11.1,20]],
      reach: sex === "male" ? [[24.9,100],[23.1,95],[21.3,90],[19.5,85],[17.7,80],[16.3,78],[14.9,76],[13.5,74],[12.1,72],[10.7,70],[9.3,68],[7.9,66],[6.5,64],[5.1,62],[3.7,60],[2.7,50],[1.7,40],[.7,30],[-.3,20]] : [[25.8,100],[24,95],[22.2,90],[20.6,85],[19,80],[17.7,78],[16.4,76],[15.1,74],[13.8,72],[12.5,70],[11.2,68],[9.9,66],[8.6,64],[7.3,62],[6,60],[5.2,50],[4.4,40],[3.6,30],[2.8,20]],
      jump: sex === "male" ? [[273,100],[268,95],[263,90],[256,85],[248,80],[244,78],[240,76],[236,74],[232,72],[228,70],[224,68],[220,66],[216,64],[212,62],[208,60],[203,50],[198,40],[193,30],[188,20]] : [[207,100],[201,95],[195,90],[188,85],[181,80],[178,78],[175,76],[172,74],[169,72],[166,70],[163,68],[160,66],[157,64],[154,62],[151,60],[146,50],[141,40],[136,30],[131,20]],
      strength: sex === "male" ? [[19,100],[18,95],[17,90],[15,80],[13,70],[10,60],[7,50],[5,40],[3,30],[1,20]] : [[70,100],[68,95],[65,90],[60,80],[55,70],[50,60],[45,50],[40,40],[35,30],[25,20]],
      endurance: sex === "male" ? [[197,100],[202,95],[207,90],[214,85],[222,80],[227,78],[232,76],[237,74],[242,72],[247,70],[252,68],[257,66],[262,64],[267,62],[272,60],[292,50],[312,40],[332,30],[352,20]] : [[218,100],[223,95],[228,90],[237,85],[246,80],[251,78],[256,76],[261,74],[266,72],[271,70],[276,68],[281,66],[286,64],[291,62],[296,60],[316,50],[336,40],[356,30],[376,20]]
    };
    if (id === "sprint" || id === "endurance") return scoreBand(value, tables[id], true);
    return scoreBand(value, tables[id]);
  };

  function truncateOne(value) {
    return Math.floor((value + Number.EPSILON) * 10) / 10;
  }

  function grade(score) {
    if (score >= 90) return "优秀";
    if (score >= 80) return "良好";
    if (score >= 60) return "及格";
    return "不及格";
  }

  function showCalcResult(element, headline, detail, note = "") {
    element.classList.add("active");
    element.innerHTML = `<strong>${escapeHtml(headline)}</strong><span>${escapeHtml(detail)}</span>${note ? `<p>${escapeHtml(note)}</p>` : ""}`;
  }

  function calculateYearScore(event) {
    event.preventDefault();
    const sex = document.querySelector("#score-sex").value;
    const year = document.querySelector("#score-year").value;
    const height = Number(document.querySelector("#score-height").value) / 100;
    const weight = Number(document.querySelector("#score-weight").value);
    const bmi = weight / (height * height);
    const bmiScore = bmi < (sex === "male" ? 17.9 : 17.2) ? 80 : bmi >= 28 ? 60 : bmi >= 24 ? 80 : 100;
    const raw = { bmi: bmiScore, vital: Number(document.querySelector("#score-vital").value), sprint: Number(document.querySelector("#score-sprint").value), reach: Number(document.querySelector("#score-reach").value), jump: Number(document.querySelector("#score-jump").value), strength: Number(document.querySelector("#score-strength").value), endurance: parseTime(document.querySelector("#score-endurance").value) };
    const scores = { bmi: raw.bmi, vital: rawScore(sex, "vital", raw.vital), sprint: rawScore(sex, "sprint", raw.sprint), sitReach: rawScore(sex, "reach", raw.reach), jump: rawScore(sex, "jump", raw.jump), strength: rawScore(sex, "strength", raw.strength), endurance: rawScore(sex, "endurance", raw.endurance) };
    if (Object.values(raw).some((value) => !Number.isFinite(value))) return;
    const weights = { bmi: .15, vital: .15, sprint: .2, sitReach: .1, jump: .1, strength: .1, endurance: .2 };
    let standard = Object.entries(weights).reduce((sum, [key, weightValue]) => sum + scores[key] * weightValue, 0);
    const strengthBonus = Math.min(10, Math.max(0, Number(document.querySelector("#strength-bonus").value) || 0));
    const enduranceBonus = Math.min(10, Math.max(0, Number(document.querySelector("#endurance-bonus").value) || 0));
    const total = truncateOne(Math.min(120, standard + strengthBonus + enduranceBonus));
    showCalcResult(
      document.querySelector("#year-score-result"),
      `${total.toFixed(1)} 分 · ${grade(total)}`,
      `BMI ${bmi.toFixed(1)}；单项分 ${Object.values(scores).join("、")}；标准分 ${truncateOne(standard).toFixed(1)}，附加分 ${(strengthBonus + enduranceBonus).toFixed(1)}。`,
      `${year === "3" ? "当前大三/大四仍暂按大一/大二参考档位试算；" : "按学校体育科学学院转载的《国家学生体质健康标准》大一/大二档位试算；"}大三/大四阈值略有差异，最终以体测系统发布成绩为准。`
    );
  }

  function calculateBmi(event) {
    event.preventDefault();
    const sex = document.querySelector("#bmi-sex").value;
    const height = Number(document.querySelector("#bmi-height").value) / 100;
    const weight = Number(document.querySelector("#bmi-weight").value);
    if (!Number.isFinite(height) || !Number.isFinite(weight) || height <= 0 || weight <= 0) return;
    const bmi = truncateOne(weight / (height * height));
    const lowCutoff = sex === "male" ? 17.9 : 17.2;
    let category = "正常";
    let score = 100;
    if (bmi < lowCutoff) { category = "低体重"; score = 80; }
    else if (bmi >= 28) { category = "肥胖"; score = 60; }
    else if (bmi >= 24) { category = "超重"; score = 80; }
    showCalcResult(
      document.querySelector("#bmi-result"),
      `BMI ${bmi.toFixed(1)} · ${category}`,
      `按国家学生体质健康标准大学组，BMI单项得分为 ${score} 分。`,
      "BMI只是一项筛查指标，不能单独诊断健康状况。"
    );
  }

  function calculateGraduate(event) {
    event.preventDefault();
    const values = [...document.querySelectorAll("[data-year-score]")].map((input) => {
      if (input.value.trim() === "") return null;
      const value = Number(input.value);
      return Number.isFinite(value) && value >= 0 && value <= 120 ? value : null;
    });
    const earlier = values.slice(0, 3).filter((value) => value !== null);
    const senior = values[3];
    const result = document.querySelector("#graduate-result");

    if (!earlier.length && senior === null) {
      showCalcResult(result, "无法计算", "请至少填写一个非免测学年的成绩。", "四年均免测时，最终状态应在体测系统中显示为免测。 ");
      return;
    }

    let score;
    let detail;
    let note = "最终毕业成绩以学校体测系统认定为准。";
    if (senior !== null && earlier.length) {
      const average = earlier.reduce((sum, value) => sum + value, 0) / earlier.length;
      score = senior * 0.5 + average * 0.5;
      detail = `其他有效学年平均分 ${truncateOne(average).toFixed(1)}×50% + 大四 ${senior.toFixed(1)}×50%。`;
    } else if (senior !== null) {
      score = senior;
      detail = "其他学年均留空，按学生Wiki提供的免测样例，仅显示大四有效成绩。";
      note = "该情形属于经验参照，必须以学校体测系统为准。";
    } else {
      score = earlier.reduce((sum, value) => sum + value, 0) / earlier.length;
      detail = "大四留空，按学生Wiki提供的免测样例，显示前三学年有效成绩平均值。";
      note = "大四免测时的处理属于经验参照，必须以学校体测系统为准。";
    }

    const finalScore = truncateOne(score);
    showCalcResult(result, `${finalScore.toFixed(1)} 分`, `${detail} ${finalScore >= 50 ? "达到50分参考线。" : "低于50分参考线。"}`, note);
  }

  function calculateRpe(event) {
    event.preventDefault();
    const duration = Number(document.querySelector("#rpe-duration").value);
    const rpe = Number(document.querySelector("#rpe-value").value);
    const result = document.querySelector("#rpe-result");
    const load = duration * rpe;
    const level = rpe <= 3 ? "较低主观强度" : rpe <= 6 ? "中等主观强度" : "较高主观强度";
    result.innerHTML = `<strong>${load} 训练负荷单位</strong><p>${duration} 分钟 × RPE ${rpe}，属于${level}参考。</p><small>仅用于课程记录和交流，不替代心率监测、校医院意见或急救判断。</small>`;
    result.classList.add("active");
  }

  function initializeEvents() {
    document.addEventListener("click", (event) => {
      const openQr = event.target.closest("[data-open-qr]");
      if (openQr) {
        const modal = document.querySelector("#group-qr-modal");
        modal.hidden = false;
        document.body.classList.add("modal-open");
        modal.querySelector("[data-close-qr]")?.focus();
        refreshIcons();
        return;
      }
      const closeQr = event.target.closest("[data-close-qr]");
      if (closeQr) {
        document.querySelector("#group-qr-modal").hidden = true;
        document.body.classList.remove("modal-open");
        return;
      }

      const nav = event.target.closest("[data-nav]");
      if (nav) navigate(nav.dataset.nav);

      const backButton = event.target.closest("[data-back]");
      if (backButton) back();

      const serviceButton = event.target.closest("[data-open-service]");
      if (serviceButton) openService(serviceButton.dataset.openService);

      const teacherTool = event.target.closest("[data-open-teacher-tool]");
      if (teacherTool) openTeacherTool(teacherTool.dataset.openTeacherTool);

      const comicStory = event.target.closest("[data-open-comic]");
      if (comicStory) openComicStory(comicStory.dataset.openComic);

      const questionButton = event.target.closest("[data-open-question]");
      if (questionButton) openQuestion(questionButton.dataset.openQuestion);

      const detailButton = event.target.closest("[data-open-detail]");
      if (detailButton) {
        const item = serviceMap.get(detailButton.dataset.openDetail);
        if (item) { renderDetail(item); navigate("detail"); }
      }

      const sectionButton = event.target.closest("[data-open-section]");
      if (sectionButton) openSection(sectionButton.dataset.openSection);

      const serviceFilter = event.target.closest("[data-service-filter]");
      if (serviceFilter) {
        state.serviceCategory = serviceFilter.dataset.serviceFilter;
        renderServices();
      }

      const campusFilter = event.target.closest("[data-campus-filter]");
      if (campusFilter) {
        state.campus = campusFilter.dataset.campusFilter;
        renderVenues();
      }

      const quickQuestion = event.target.closest("[data-quick-question]");
      if (quickQuestion) {
        document.querySelector("#qa-input").value = quickQuestion.dataset.quickQuestion;
        showAnswer(quickQuestion.dataset.quickQuestion);
      }

      const calcTab = event.target.closest("[data-calc-tab]");
      if (calcTab) {
        document.querySelectorAll("[data-calc-tab]").forEach((button) => button.classList.toggle("active", button === calcTab));
        document.querySelectorAll("[data-calc-panel]").forEach((panel) => panel.classList.toggle("active", panel.dataset.calcPanel === calcTab.dataset.calcTab));
      }

      const inlineNav = event.target.closest("[data-inline-nav]");
      if (inlineNav) {
        event.preventDefault();
        navigate(inlineNav.dataset.inlineNav);
      }

      const copyPlace = event.target.closest("[data-copy-place]");
      if (copyPlace) { navigator.clipboard?.writeText(copyPlace.dataset.copyPlace); copyPlace.textContent = "已复制地点"; }
      const support = event.target.closest("[data-open-support]");
      if (support) openSupport(support.dataset.openSupport);
    });

    document.querySelector("#home-search-form").addEventListener("submit", (event) => {
      event.preventDefault();
      const query = document.querySelector("#home-search").value.trim();
      if (!query) return;
      document.querySelector("#qa-input").value = query;
      showAnswer(query);
      navigate("qa");
    });

    document.querySelector("#qa-form").addEventListener("submit", (event) => {
      event.preventDefault();
      showAnswer(document.querySelector("#qa-input").value.trim());
    });

    document.querySelector("#year-score-form").addEventListener("submit", calculateYearScore);
    document.querySelector("#bmi-form").addEventListener("submit", calculateBmi);
    document.querySelector("#graduate-form").addEventListener("submit", calculateGraduate);
    document.querySelector("#rpe-form").addEventListener("submit", calculateRpe);
    document.querySelector("#score-sex").addEventListener("change", (event) => {
      const female = event.target.value === "female";
      document.querySelector("#strength-label").firstChild.textContent = female ? "仰卧起坐（次）" : "引体向上（次）";
      document.querySelector("#endurance-label").firstChild.textContent = female ? "800米（分:秒，如 4:30）" : "1000米（分:秒，如 4:30）";
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !document.querySelector("#group-qr-modal").hidden) {
        document.querySelector("#group-qr-modal").hidden = true;
        document.body.classList.remove("modal-open");
      }
    });
  }

  function openSupport(id) {
    const pages = {
      admin: { title: "行政与信息支持", lead: "把申请、免测、预约和联系方式集中到一个入口。", sections: [{ title: "可查询", items: ["保健体育申请对象、材料、时间和办理地点。", "体测免测、缓测、补测和正式系统入口。", "电话咨询优先，本站不代办、不上传个人材料。"] }] },
      course: { title: "课程与教学支持", lead: "了解保健体育课程、普通体育调整、动作替代和考核边界。", sections: [{ title: "可查询", items: ["《保健体育》课程制度、学分和成绩规则。", "常见低冲击练习仅作经验参照，具体由任课教师调整。", "身体限制应以校医院和教师已确认的信息为依据。"] }] },
      venue: { title: "场地与硬件支持", lead: "提供具体场馆名称、浏览器地图和文字路线。", sections: [{ title: "核验边界", items: ["场馆开放时间、无障碍设施和器材情况没有统一公开时，标记为待确认。", "打开地图后搜索具体场馆，不要求安装特定地图App。"] }] },
      activity: { title: "组织与群体活动支持", lead: "集中说明校园跑、社团、校运会和课外体育活动入口。", sections: [{ title: "可查询", items: ["校园跑学期规则、有效条件和保健体育学生处理以当学期通知为准。", "社团、校运会和课外活动可参与方式若无正式说明，网页标记待确认。"] }] },
      teacher: { title: "师资、激励与风险保障", lead: "提供教师沟通、教学调整、风险提示和转介信息。", sections: [{ title: "可查询", items: ["开课前核对清单、第一次沟通问题和课堂调整案例。", "出现胸痛、晕厥、明显呼吸困难等情况应停止活动并求助。", "评优、奖学金和保险责任不作绝对承诺，以正式文件为准。"] }] },
      all: { title: "五维体育支持", lead: "本站是信息支持载体，补齐可公开查询的信息，不声称已经改变学校制度。", sections: [{ title: "五个维度", items: ["行政与信息支持", "课程与教学支持", "场地与硬件支持", "组织与群体活动支持", "师资、激励与风险保障支持"] }] }
    };
    renderDetail(pages[id] || pages.all); navigate("detail");
  }

  function initialize() {
    renderHome();
    renderServices();
    renderQa();
    renderTeacher();
    renderVenues();
    renderScoreInputs();
    initializeEvents();
    refreshIcons();
  }

  initialize();
})();
