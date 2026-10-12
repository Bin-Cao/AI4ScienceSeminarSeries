(() => {
  "use strict";
  const { t } = window.I18N;
  const seminar = window.SEMINAR_CONTENT.seminars.find((item) => item.id === document.body.dataset.seminarId);
  if (!seminar) return;
  const set = (selector, text) => { document.querySelectorAll(selector).forEach((element) => { element.textContent = text; }); };
  set("[data-episode-number]", seminar.id);
  set("[data-episode-category]", seminar.category);
  set("[data-episode-title]", seminar.title);
  set("[data-episode-status]", seminar.status);
  set("[data-episode-note]", seminar.topicNote);
  set("[data-episode-description]", seminar.description);
  set("[data-episode-detail]", seminar.detail);
  if (seminar.confirmationNote) set("[data-episode-confirmation]", seminar.confirmationNote);
  if (seminar.outcome) set("[data-episode-outcome]", seminar.outcome);
  if (seminar.keywords) set("[data-episode-keywords]", seminar.keywords.join(" · "));
  set("[data-episode-date]", seminar.date || t("date.pending"));
  set("[data-episode-format]", seminar.format || t("format.pending"));
  set("[data-meeting-number]", seminar.meetingNumber || "");
  document.querySelectorAll("[data-meeting-number-row]").forEach((row) => { row.hidden = !seminar.meetingNumber; });
  set("[data-speaker-name]", seminar.speaker || t("speaker.pending"));
  set("[data-speaker-affiliation]", seminar.affiliation || t("speaker.inviting"));
  set("[data-speaker-title]", seminar.speakerTitle || "");
  set("[data-speaker-research]", seminar.speakerResearch?.join(" · ") || "");
  set("[data-speaker-bio]", seminar.speakerBio || t("speaker.bio.pending"));
  set("[data-host-name]", seminar.host?.name || t("host.pending"));
  set("[data-host-affiliation]", seminar.host?.affiliation || t("host.same"));
  set("[data-host-title]", seminar.host?.title || "");
  set("[data-host-research]", seminar.host?.research?.join(" · ") || "");
  set("[data-host-bio]", seminar.host?.bio || t("host.bio.pending"));
  if (seminar.registrationNote) set("[data-registration-note]", seminar.registrationNote);
  document.title = `VOL. ${seminar.id} · ${seminar.title} | ${t("brand.name")}`;
  document.querySelector('meta[name="description"]').content = `${seminar.description} ${t("episode.meta.suffix")}`;
  document.querySelector('meta[property="og:title"]').content = document.title;
  document.querySelector('meta[property="og:description"]').content = document.querySelector('meta[name="description"]').content;
  function portrait(selector, source, name) {
    if (!source) return;
    try {
      // All avatar paths in content.js are relative to the series homepage.
      const siteBase = new URL("../../", location.href);
      const url = new URL(source, siteBase);
      const localAsset = siteBase.protocol === "file:" && url.protocol === "file:" && url.host === siteBase.host && url.pathname.startsWith(siteBase.pathname);
      if (!/^https?:$/.test(url.protocol) && !localAsset) return;
      const img = document.createElement("img");
      img.src = url.href;
      img.alt = name || "";
      img.loading = "lazy";
      img.decoding = "async";
      document.querySelectorAll(selector).forEach((element) => element.replaceChildren(img.cloneNode(true)));
    } catch { /* Keep the intentional empty portrait when a URL is invalid. */ }
  }
  portrait("[data-speaker-avatar]", seminar.avatar, seminar.speaker);
  portrait("[data-host-avatar]", seminar.host?.avatar, seminar.host?.name);
  const topics = seminar.takeaways || [
    { title: t("topic.1.title"), text: t("topic.1.text") },
    { title: t("topic.2.title"), text: t("topic.2.text") },
    { title: t("topic.3.title"), text: t("topic.3.text") }
  ];
  const list = document.querySelector("#episode-topics");
  list.replaceChildren();
  topics.forEach((topic, index) => {
    const article = document.createElement("article");
    article.className = "episode-topic";
    const number = document.createElement("span");
    number.className = "mono";
    number.textContent = String(index + 1).padStart(2, "0");
    const title = document.createElement("h3");
    title.textContent = topic.title;
    const description = document.createElement("p");
    description.textContent = topic.text;
    article.append(number, title, description);
    list.append(article);
  });
  if (seminar.completed) {
    set("[data-attend-label]", t("episode.ended.action"));
    set("[data-registration-status]", t("episode.ended"));
    set("[data-registration-note]", t("episode.ended.note"));
  } else if (seminar.meetingUrl) {
    try {
      const url = new URL(seminar.meetingUrl);
      if (url.protocol !== "https:") throw new Error("Meeting links must use HTTPS");
      document.querySelectorAll("[data-meeting-link]").forEach((link) => {
        link.href = url.href;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.hidden = false;
      });
      document.querySelectorAll("[data-meeting-pending]").forEach((element) => { element.hidden = true; });
      document.querySelectorAll("[data-meeting-url]").forEach((link) => { link.href = url.href; link.textContent = url.href; link.target = "_blank"; link.rel = "noopener noreferrer"; link.hidden = false; });
      set("[data-registration-status]", t("meeting.ready"));
    } catch { /* Keep the pending state until a valid meeting URL is provided. */ }
  } else if (seminar.registrationUrl || window.SEMINAR_CONTENT.registrationUrl) {
    set("[data-registration-status]", t("registration.ready"));
    set("[data-registration-note]", t("registration.ready.note"));
  }
})();
