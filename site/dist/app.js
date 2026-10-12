(() => {
  "use strict";
  const { t, pageUrl, publicUrl } = window.I18N;
  const content = window.SEMINAR_CONTENT;
  const currentSeminar = content.seminars.find((item) => item.id === document.body.dataset.seminarId);
  const siteBase = new URL(currentSeminar ? "../../" : "./", location.href);
  const escapeHTML = (value) => String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
  const icon = (name, className = "icon") => `<svg class="${className}" aria-hidden="true"><use href="#i-${name}"/></svg>`;
  const safeLink = (value) => {
    if (!value) return null;
    try { const url = new URL(value, location.href); return /^https?:$/.test(url.protocol) ? url.href : null; } catch { return null; }
  };
  const safeAsset = (value) => {
    if (!value) return null;
    try {
      const url = new URL(value, siteBase);
      const localAsset = siteBase.protocol === "file:" && url.protocol === "file:" && url.host === siteBase.host && url.pathname.startsWith(siteBase.pathname);
      return /^https?:$/.test(url.protocol) || localAsset ? url.href : null;
    } catch { return null; }
  };
  const person = (avatar, name) => {
    const source = safeAsset(avatar);
    return source ? `<img src="${escapeHTML(source)}" alt="${escapeHTML(name)}" loading="lazy" decoding="async" />` : icon("person", "person-icon");
  };
  const card = (seminar) => {
    const href = escapeHTML(pageUrl(`./seminars/${encodeURIComponent(seminar.id)}/index.html`));
    return `<article class="seminar-card${seminar.featured ? " featured" : ""}">
      <div class="seminar-number"><small>VOL.</small><strong>${escapeHTML(seminar.id)}</strong></div>
      <div class="seminar-main"><div class="seminar-category">${escapeHTML(seminar.category)}</div><h3><a href="${href}">${escapeHTML(seminar.title)}</a></h3><p>${escapeHTML(seminar.description)}</p><span class="seminar-chip">${escapeHTML(seminar.topicNote)} · ${escapeHTML(seminar.status)}</span></div>
      <div class="seminar-speaker"><div class="speaker-avatar">${person(seminar.avatar, seminar.speaker)}</div><div><strong>${escapeHTML(seminar.speaker || t("speaker.soon"))}</strong><small>${escapeHTML(seminar.shortAffiliation || seminar.affiliation || t("speaker.inviting"))}</small></div></div>
      <div class="seminar-meta"><span>${icon("calendar")}${escapeHTML(seminar.date || t("date.short"))}</span><span>${icon("screen")}${escapeHTML(seminar.format || t("format.pending"))}</span></div>
      <a class="seminar-detail-link" href="${href}" aria-label="${escapeHTML(t("card.aria", { id: seminar.id, title: seminar.title }))}">${t("card.open")}</a>
    </article>`;
  };
  const upcoming = content.seminars.filter((seminar) => !seminar.completed);
  const past = content.seminars.filter((seminar) => seminar.completed);
  if (document.querySelector("#seminar-list")) document.querySelector("#seminar-list").innerHTML = upcoming.length ? upcoming.map(card).join("") : `<div class="empty-state"><h3>${t("sessions.none.title")}</h3><p>${t("sessions.none.text")}</p></div>`;
  if (document.querySelector("#upcoming-count")) document.querySelector("#upcoming-count").textContent = String(upcoming.length).padStart(2, "0");
  if (past.length && document.querySelector("#past-panel")) document.querySelector("#past-panel").innerHTML = past.map(card).join("");
  if (document.querySelector("#committee-grid")) {
    document.querySelector("#committee-grid").innerHTML = content.committee.filter(Boolean).map((member) => `<article class="committee-member confirmed-member" data-member-id="${escapeHTML(member.id)}">
      <div class="committee-avatar">${person(member.avatar, member.name)}</div>
      <div class="member-details">
      <h4>${escapeHTML(member.name)}${member.name !== member.englishName ? `<span class="member-english">${escapeHTML(member.englishName)}</span>` : ""}</h4>
      <p class="member-affiliation">${escapeHTML(member.shortAffiliation || member.affiliation)}</p>
      <p class="member-research">${escapeHTML(member.research.join(" · "))}</p>
      <div class="member-actions"><button class="profile-button" data-member="${escapeHTML(member.id)}" aria-haspopup="dialog" aria-label="${escapeHTML(t("profile.aria", { name: member.name }))}">${t("profile.view")}</button></div>
      </div>
    </article>`).join("");
    document.querySelector("#committee-note").textContent = t("people.count", { count: content.committee.filter(Boolean).length });
  }
  if (document.querySelector("#founder-name")) document.querySelector("#founder-name").textContent = content.founder.name;
  if (document.querySelector("#founder-avatar")) document.querySelector("#founder-avatar").innerHTML = person(content.founder.avatar, content.founder.name);
  document.querySelector("#year").textContent = new Date().getFullYear();
  const acknowledgementStrip = document.querySelector("#acknowledgements");
  if (acknowledgementStrip && content.acknowledgements?.length) {
    const group = document.createElement("ul");
    group.className = "institution-group";
    group.innerHTML = content.acknowledgements.map((institution) => `<li class="institution" data-institution="${escapeHTML(institution.id)}"><div class="institution-logo"><img src="${escapeHTML(safeAsset(institution.logo))}" alt="${escapeHTML(institution.englishName)}" loading="lazy" decoding="async" /></div><span>${escapeHTML(institution.name)}</span></li>`).join("");
    const duplicate = group.cloneNode(true);
    duplicate.setAttribute("aria-hidden", "true");
    duplicate.setAttribute("inert", "");
    acknowledgementStrip.querySelector(".institution-track").append(group, duplicate);
    const pauseButton = acknowledgementStrip.querySelector(".institution-pause");
    pauseButton.hidden = false;
    pauseButton.addEventListener("click", () => {
      const paused = acknowledgementStrip.classList.toggle("is-paused");
      pauseButton.setAttribute("aria-pressed", String(paused));
      pauseButton.querySelector("span").textContent = t(paused ? "ack.resume" : "ack.pause");
    });
  }
  const tabs = [...document.querySelectorAll('.tabs [role="tab"]')];
  function selectTab(tab, focus = false) {
    for (const item of tabs) {
      const selected = item === tab;
      item.classList.toggle("active", selected);
      item.setAttribute("aria-selected", String(selected));
      item.tabIndex = selected ? 0 : -1;
      document.getElementById(item.getAttribute("aria-controls")).hidden = !selected;
    }
    if (focus) tab.focus();
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => selectTab(tab));
    tab.addEventListener("keydown", (event) => {
      if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
      event.preventDefault();
      const next = event.key === "Home" ? 0 : event.key === "End" ? tabs.length - 1 : (index + (event.key === "ArrowRight" ? 1 : -1) + tabs.length) % tabs.length;
      selectTab(tabs[next], true);
    });
  });
  document.querySelector("#back-upcoming")?.addEventListener("click", () => selectTab(tabs[0], true));
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileNav = document.querySelector("#mobile-nav");
  function closeMenu() { mobileNav.hidden = true; menuToggle.setAttribute("aria-expanded", "false"); menuToggle.setAttribute("aria-label", t("nav.open")); }
  menuToggle.addEventListener("click", () => {
    const open = menuToggle.getAttribute("aria-expanded") !== "true";
    mobileNav.hidden = !open;
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", t(open ? "nav.close" : "nav.open"));
  });
  mobileNav.addEventListener("click", (event) => { if (event.target.closest("a,button")) closeMenu(); });
  document.addEventListener("keydown", (event) => { if (event.key === "Escape" && !mobileNav.hidden) { closeMenu(); menuToggle.focus(); } });
  window.matchMedia("(min-width: 681px)").addEventListener("change", (event) => { if (event.matches) closeMenu(); });
  const dialog = document.querySelector("#info-dialog");
  const dialogBody = document.querySelector("#dialog-body");
  const dialogActions = document.querySelector("#dialog-actions");
  let lastFocus = null;
  let invitation = "";
  const inviteText = t("invite.text", {
    founder: content.founder.name,
    format: t("invite.format"),
    wechat: content.wechat.name, url: publicUrl()
  });
  function showDialog(eyebrow, title, body, actions) {
    document.querySelector("#dialog-eyebrow").textContent = eyebrow;
    document.querySelector("#dialog-title").textContent = title;
    dialogBody.innerHTML = body;
    dialogActions.innerHTML = actions;
    if (!dialog.open) {
      lastFocus = document.activeElement;
      dialog.showModal();
      document.body.style.overflow = "hidden";
    }
    dialog.scrollTop = 0;
  }
  function showJoin(mode = "attend") {
    if (!["attend", "speaker", "build"].includes(mode)) mode = "attend";
    invitation = mode === "attend" ? inviteText : t(`template.${mode}`);
    const email = mode === "build" ? content.collaborationEmail : content.speakerEmail;
    const subject = t(mode === "build" ? "email.subject.build" : "email.subject.speaker");
    const link = mode === "attend"
      ? safeLink(currentSeminar?.completed ? null : currentSeminar?.registrationUrl || content.registrationUrl)
      : `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(invitation)}`;
    const modeButtons = ["attend", "speaker", "build"].map((key) => `<button data-join="${key}" aria-pressed="${mode === key}">${t(`modal.tab.${key}`)}</button>`).join("");
    const notice = mode === "attend"
      ? `<div class="follow-channel"><button class="wechat-button" data-wechat aria-label="${escapeHTML(t("wechat.dynamic.aria", { name: content.wechat.name }))}">${icon("wechat")}<span><strong>${escapeHTML(content.wechat.name)}</strong><small>${t("wechat.button")}</small></span></button><p>${t("wechat.follow.note")}</p></div>`
      : `<p class="dialog-notice">${t(`email.notice.${mode}`)} <a class="email-link" href="mailto:${escapeHTML(email)}">${escapeHTML(email)}</a>.</p>`;
    const action = mode === "attend" ? t("action.register") : t(`action.email.${mode}`);
    showDialog("BE PART OF THE CONVERSATION", t(`modal.${mode}.title`),
      `<div class="join-modal-tabs" aria-label="${t("modal.tabs")}">${modeButtons}</div><p>${escapeHTML(t(`modal.${mode}.description`, { wechat: content.wechat.name }))}</p>${notice}<p class="template-label">${t(mode === "attend" ? "template.invite.label" : "template.label")}</p><div class="invitation-preview">${escapeHTML(invitation)}</div>`,
      `${link ? `<a class="button button-dark" href="${escapeHTML(link)}" ${mode === "attend" ? 'target="_blank" rel="noopener noreferrer"' : ""}>${action}</a>` : ""}<button class="button ${link ? "button-light" : "button-dark"}" data-copy>${icon("copy")}${t(mode === "attend" ? "action.copy.invite" : "action.copy.template")}</button><button class="button button-light" data-close>${t("action.close")}</button>`);
  }
  function showWechat() {
    const qrCode = safeAsset(content.wechat.qrCode);
    showDialog(t("wechat.eyebrow"), content.wechat.name,
      `<div class="wechat-qr"><img src="${escapeHTML(qrCode)}" alt="${escapeHTML(t("wechat.qr.alt", { name: content.wechat.name }))}" width="430" height="430"/><p>${t("wechat.scan")} <strong>${escapeHTML(content.wechat.name)}</strong><br/>${t("wechat.mobile")}</p></div><p class="dialog-notice">${t("wechat.notice")}</p>`,
      `<button class="button button-dark" data-close>${t("action.done")}</button>`);
  }
  function showMember(id) {
    const member = content.committee.find((item) => item?.id === id);
    if (!member) return;
    const homepage = safeLink(member.homepage);
    const name = member.name === member.englishName ? member.name : `${member.name} · ${member.englishName}`;
    showDialog(t("profile.eyebrow"), name,
      `<div class="member-dialog-identity" data-member-id="${escapeHTML(member.id)}"><div class="member-dialog-avatar">${person(member.avatar, member.name)}</div><div><span class="member-dialog-role">${escapeHTML(member.role)}</span><p>${escapeHTML(member.affiliation)}</p><p>${escapeHTML(member.title)}</p></div></div><div class="member-research-tags">${member.research.map((tag) => `<span>${escapeHTML(tag)}</span>`).join("")}</div><p class="member-dialog-bio">${escapeHTML(member.bio)}</p>`,
      `${homepage ? `<a class="button button-dark" href="${escapeHTML(homepage)}" target="_blank" rel="noopener noreferrer">${t("profile.website")}</a>` : ""}<button class="button button-light" data-close>${t("action.close")}</button>`);
  }
  function closeDialog() { if (dialog.open) dialog.close(); }
  document.querySelector(".dialog-close").addEventListener("click", closeDialog);
  dialog.addEventListener("close", () => { document.body.style.overflow = ""; if (lastFocus?.isConnected) lastFocus.focus({ preventScroll: true }); });
  dialog.addEventListener("click", (event) => { if (event.target === dialog) { const rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) closeDialog(); } });
  let toastTimeout;
  function toast(message) {
    const element = document.querySelector("#toast");
    element.textContent = message;
    element.classList.add("visible");
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => element.classList.remove("visible"), 3500);
  }
  document.addEventListener("click", async (event) => {
    const target = event.target.closest("button");
    if (!target) return;
    if (target.dataset.join) showJoin(target.dataset.join);
    if (target.hasAttribute("data-wechat")) showWechat();
    if (target.dataset.member) showMember(target.dataset.member);
    if (target.hasAttribute("data-close")) closeDialog();
    if (target.hasAttribute("data-copy")) {
      try { await navigator.clipboard.writeText(invitation); toast(t("copy.success")); }
      catch {
        const preview = dialog.querySelector(".invitation-preview");
        const range = document.createRange(); range.selectNodeContents(preview);
        const selection = window.getSelection(); selection.removeAllRanges(); selection.addRange(range);
        toast(t("copy.fallback"));
      }
    }
  });

  // Sections arrive gently as they enter the viewport. Content stays visible
  // without JavaScript or when the visitor requests reduced motion.
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (!document.body.classList.contains("episode-detail-page") && !reduceMotion.matches && "IntersectionObserver" in window) {
    const revealItems = [...document.querySelectorAll(".section-heading, .seminar-card, .about-intro, .principle, .founder-card, .committee-member, .join-section, .faq-section, .acknowledgements-heading, .episode-section-label, .episode-topic, .episode-person, .discussion-steps article, .episode-participate")];
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-revealed");
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: .08, rootMargin: "0px 0px -24px 0px" });
    revealItems.forEach((element) => {
      element.setAttribute("data-reveal", "");
      revealObserver.observe(element);
    });
    reduceMotion.addEventListener("change", (event) => {
      if (event.matches) {
        revealObserver.disconnect();
        revealItems.forEach((element) => element.classList.add("is-revealed"));
      }
    });
    window.addEventListener("beforeprint", () => {
      revealObserver.disconnect();
      revealItems.forEach((element) => element.classList.add("is-revealed"));
    });
  }

  // 本地绘制的数学结面，不依赖图片服务或第三方追踪。离屏与减少动态效果时停止动画。
  const canvas = document.querySelector("#science-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const art = canvas.closest(".hero-art");
  const pointer = { x: 0, y: 0, frame: 0 };
  function resetPointer() {
    if (pointer.frame) cancelAnimationFrame(pointer.frame);
    pointer.frame = 0;
    art.style.setProperty("--art-shift-x", "0px");
    art.style.setProperty("--art-shift-y", "0px");
  }
  art.addEventListener("pointermove", (event) => {
    if (reduceMotion.matches || event.pointerType === "touch") return;
    const rect = art.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    pointer.x = ((event.clientX - rect.left) / rect.width - .5) * 14;
    pointer.y = ((event.clientY - rect.top) / rect.height - .5) * 10;
    if (!pointer.frame) pointer.frame = requestAnimationFrame(() => {
      art.style.setProperty("--art-shift-x", `${pointer.x.toFixed(2)}px`);
      art.style.setProperty("--art-shift-y", `${pointer.y.toFixed(2)}px`);
      pointer.frame = 0;
    });
  });
  art.addEventListener("pointerleave", resetPointer);
  let width = 1, height = 1, visible = true, frame = 0, lastDraw = 0, angle = 0.35;
  const points = [];
  const tau = Math.PI * 2;
  const center = (t) => [(2 + .67 * Math.cos(3 * t)) * Math.cos(2 * t), (2 + .67 * Math.cos(3 * t)) * Math.sin(2 * t), .98 * Math.sin(3 * t)];
  const normalize = (v) => { const length = Math.hypot(...v) || 1; return v.map((x) => x / length); };
  const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
  for (let i = 0; i < 208; i++) {
    const t = i / 208 * tau;
    const c = center(t), d = center(t + .001);
    const tangent = normalize(d.map((value, index) => value - c[index]));
    const normal = normalize(cross(tangent, [0, 0, 1]));
    const binormal = normalize(cross(tangent, normal));
    for (let j = 0; j < 28; j++) {
      const u = j / 28 * tau;
      points.push(c.map((value, index) => value + .52 * (Math.cos(u) * normal[index] + Math.sin(u) * binormal[index])));
    }
  }
  function draw() {
    ctx.clearRect(0, 0, width, height);
    const scale = Math.min(width / 7.7, height / 7.7);
    const ca = Math.cos(angle), sa = Math.sin(angle), tilt = 1.05;
    const projected = points.map(([x, y, z]) => {
      const rx = x * ca - y * sa, ry = x * sa + y * ca;
      const fy = ry * Math.cos(tilt) - z * Math.sin(tilt);
      const fz = ry * Math.sin(tilt) + z * Math.cos(tilt);
      const perspective = 11 / (11 - fz);
      return [width * .5 + rx * scale * perspective, height * .48 + fy * scale * perspective, fz, perspective];
    }).sort((a, b) => a[2] - b[2]);
    for (const [x, y, z, perspective] of projected) {
      const depth = Math.max(0, Math.min(1, (z + 3.3) / 6.6));
      ctx.fillStyle = `rgba(${Math.round(103 - depth * 70)},${Math.round(137 - depth * 56)},${Math.round(78 - depth * 45)},${.25 + depth * .67})`;
      ctx.beginPath(); ctx.arc(x, y, Math.max(.45, scale / 65 * perspective * (.72 + depth * .4)), 0, tau); ctx.fill();
    }
  }
  function resize() {
    const rect = canvas.getBoundingClientRect(); width = rect.width; height = rect.height;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * dpr); canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0); draw();
  }
  function animate(time) {
    if (!visible || document.hidden || reduceMotion.matches) { frame = 0; return; }
    if (time - lastDraw >= 40) { angle += .0027; draw(); lastDraw = time; }
    frame = requestAnimationFrame(animate);
  }
  function updateAnimation() {
    if (frame) cancelAnimationFrame(frame);
    frame = 0;
    art.classList.toggle("is-on-screen", visible && !document.hidden && !reduceMotion.matches);
    if (reduceMotion.matches) resetPointer();
    if (visible && !document.hidden && !reduceMotion.matches) frame = requestAnimationFrame(animate);
    else draw();
  }
  new ResizeObserver(resize).observe(canvas);
  new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; updateAnimation(); }, { threshold: .05 }).observe(canvas);
  document.addEventListener("visibilitychange", updateAnimation);
  reduceMotion.addEventListener("change", updateAnimation);
  resize();
})();
