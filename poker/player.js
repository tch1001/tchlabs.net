// Poker podcast player — scroll transcript, current line centered & highlighted.
// URL: player.html?ch=<section-slug>. Manifest is nested (chapters → sections);
// we flatten the sections for prev/next navigation, autoplay, and sleep timer.

(async function () {
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
  const fmtTime = (s) => { s = Math.max(0, s|0); const m = (s/60)|0, ss = s%60; return `${m}:${String(ss).padStart(2,"0")}`; };

  const params = new URLSearchParams(location.search);
  const ch = params.get("ch");
  if (!ch) { document.body.innerHTML = "<p style='padding:2rem;color:#aaa'>Missing section.</p>"; return; }

  const transcriptEl = $("transcript");
  const audio = $("audio");
  const playBtn = $("playPause");
  const seek = $("seekBar");
  const curTime = $("curTime");
  const durTime = $("durTime");

  let manifest, sync, flat = [], idx = -1, lineEls = [], activeIdx = -1;
  let userScrolledAt = 0, userIsScrolling = false, scrollResetTimer = null;

  // ---- Autoplay + sleep-timer state (persist across section navigation) ----
  const AUTO_KEY = "poker_autoplay", SLEEP_KEY = "poker_sleep_deadline", RESUME_KEY = "poker_resume";
  let autoplayOn = sessionStorage.getItem(AUTO_KEY);
  autoplayOn = autoplayOn === null ? true : autoplayOn === "1";   // default ON
  const wantResume = sessionStorage.getItem(RESUME_KEY) === "1";  // arrived via autoplay/next
  sessionStorage.removeItem(RESUME_KEY);
  const rawDeadline = parseInt(sessionStorage.getItem(SLEEP_KEY) || "0", 10);
  const sleepExpired = rawDeadline > 0 && rawDeadline <= Date.now();
  const sleepActive = () => { const v = parseInt(sessionStorage.getItem(SLEEP_KEY)||"0",10); return v > Date.now() ? v : 0; };
  let sleepTimer = null;

  try {
    manifest = await (await fetch("manifest.json", { cache: "no-store" })).json();
    sync = await (await fetch(`sync/${ch}.json`, { cache: "no-store" })).json();
  } catch (e) {
    transcriptEl.innerHTML = `<p class='muted' style='padding:1rem'>Load failed: ${esc(e.message)}</p>`;
    return;
  }

  // flatten sections across chapters for navigation
  manifest.chapters.forEach(c => c.sections.forEach(s => flat.push({ ...s, chapter: c.title })));
  idx = flat.findIndex(s => s.slug === ch);
  const here = idx >= 0 ? flat[idx] : { chapter: manifest.title };

  $("topicTitle").textContent = here.chapter || manifest.title;
  $("chapterTitle").textContent = sync.title;
  document.title = `${sync.title} — ${manifest.title}`;

  audio.src = `audio/${ch}.mp3`;
  audio.load();

  transcriptEl.innerHTML = sync.lines.map((l, i) =>
    `<p class="line" data-i="${i}" data-t="${l.t}">${esc(l.text)}</p>`).join("");
  lineEls = Array.from(transcriptEl.querySelectorAll(".line"));

  transcriptEl.addEventListener("click", (e) => {
    const p = e.target.closest(".line");
    if (!p) return;
    const t = parseFloat(p.dataset.t);
    if (!isFinite(t)) return;
    audio.currentTime = t;
    if (audio.paused) audio.play().catch(()=>{});
    setActive(parseInt(p.dataset.i, 10), true);
  });

  transcriptEl.addEventListener("scroll", () => {
    userIsScrolling = true; userScrolledAt = performance.now();
    clearTimeout(scrollResetTimer);
    scrollResetTimer = setTimeout(() => { userIsScrolling = false; }, 3500);
  }, { passive: true });

  function setActive(i, force) {
    if (i === activeIdx) return;
    if (activeIdx >= 0 && lineEls[activeIdx]) lineEls[activeIdx].classList.remove("active");
    activeIdx = i;
    if (i < 0 || !lineEls[i]) return;
    const el = lineEls[i];
    el.classList.add("active");
    const sinceUser = performance.now() - userScrolledAt;
    if (force || (!userIsScrolling && sinceUser > 3000)) {
      const rect = el.getBoundingClientRect();
      const cr = transcriptEl.getBoundingClientRect();
      const target = transcriptEl.scrollTop + (rect.top - cr.top) - (cr.height * 0.35);
      transcriptEl.scrollTo({ top: target, behavior: "smooth" });
    }
  }

  function findActiveLine(t) {
    let lo = 0, hi = sync.lines.length - 1, ans = -1;
    while (lo <= hi) { const mid = (lo + hi) >> 1; if (sync.lines[mid].t <= t) { ans = mid; lo = mid + 1; } else hi = mid - 1; }
    return ans;
  }
  // Navigate to section j. If autoplay is on, flag the next page to resume playing.
  const go = (j, viaAutoplay) => {
    if (j < 0 || j >= flat.length) return;
    if (viaAutoplay || autoplayOn) sessionStorage.setItem(RESUME_KEY, "1");
    location.href = `player.html?ch=${encodeURIComponent(flat[j].slug)}`;
  };

  audio.addEventListener("timeupdate", () => {
    const t = audio.currentTime;
    setActive(findActiveLine(t), false);
    curTime.textContent = fmtTime(t);
    if (isFinite(audio.duration) && audio.duration > 0) seek.value = String(Math.round((t / audio.duration) * 1000));
  });
  audio.addEventListener("loadedmetadata", () => { durTime.textContent = fmtTime(audio.duration || sync.duration || 0); });
  audio.addEventListener("play",  () => { playBtn.textContent = "❚❚"; playBtn.setAttribute("aria-label","pause"); });
  audio.addEventListener("pause", () => { playBtn.textContent = "▶"; playBtn.setAttribute("aria-label","play"); });
  audio.addEventListener("ended", () => {
    playBtn.textContent = "▶";
    // Continue to the next section; the sleep timer (if set) still enforces stop independently.
    if (autoplayOn) go(idx + 1, true);
  });

  playBtn.addEventListener("click", () => { if (audio.paused) audio.play().catch(()=>{}); else audio.pause(); });
  $("back15").addEventListener("click", () => { audio.currentTime = Math.max(0, audio.currentTime - 15); });
  $("fwd15").addEventListener("click", () => { audio.currentTime = Math.min(audio.duration || 0, audio.currentTime + 15); });
  $("prevCh").addEventListener("click", () => go(idx - 1));
  $("nextCh").addEventListener("click", () => go(idx + 1));
  seek.addEventListener("input", () => { if (isFinite(audio.duration)) audio.currentTime = (parseInt(seek.value, 10) / 1000) * audio.duration; });

  document.querySelectorAll("#speedBtns button").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#speedBtns button").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      audio.playbackRate = parseFloat(btn.dataset.rate);
    });
  });

  // ---- Autoplay toggle ----
  const autoplayToggle = $("autoplayToggle");
  if (autoplayToggle) {
    autoplayToggle.checked = autoplayOn;
    autoplayToggle.addEventListener("change", () => {
      autoplayOn = autoplayToggle.checked;
      sessionStorage.setItem(AUTO_KEY, autoplayOn ? "1" : "0");
    });
  }

  // ---- Sleep timer ----
  const sleepRemainEl = $("sleepRemain");
  const sleepBtns = Array.from(document.querySelectorAll("#sleepBtns button"));
  function markSleepBtn(min) {
    sleepBtns.forEach(b => b.classList.toggle("active", parseInt(b.dataset.min,10) === min));
  }
  function clearSleep() {
    sessionStorage.removeItem(SLEEP_KEY);
    if (sleepTimer) { clearTimeout(sleepTimer); sleepTimer = null; }
    markSleepBtn(0);
    if (sleepRemainEl) sleepRemainEl.textContent = "";
  }
  function scheduleSleep() {
    if (sleepTimer) { clearTimeout(sleepTimer); sleepTimer = null; }
    const dl = sleepActive();
    if (!dl) return;
    sleepTimer = setTimeout(() => { audio.pause(); clearSleep(); }, Math.max(0, dl - Date.now()));
  }
  function setSleep(min) {
    if (!min) { clearSleep(); return; }
    sessionStorage.setItem(SLEEP_KEY, String(Date.now() + min * 60000));
    markSleepBtn(min);
    scheduleSleep();
  }
  sleepBtns.forEach(btn => btn.addEventListener("click", () => setSleep(parseInt(btn.dataset.min, 10))));
  // live countdown
  setInterval(() => {
    if (!sleepRemainEl) return;
    const dl = sleepActive();
    sleepRemainEl.textContent = dl ? fmtTime((dl - Date.now()) / 1000) : "";
  }, 1000);

  if (sleepExpired) { clearSleep(); }                 // timer elapsed on a prior section → stay stopped
  else if (sleepActive()) {                           // resume an in-progress timer from a prior section
    sleepBtns.forEach(b => b.classList.remove("active"));   // no preset highlighted; countdown shows remaining
    scheduleSleep();
  }

  // ---- Resume playback after autoplay/next navigation ----
  if (wantResume && !sleepExpired) {
    const tryPlay = () => audio.play().catch(() => {});
    if (audio.readyState >= 2) tryPlay();
    else audio.addEventListener("canplay", tryPlay, { once: true });
  }

  if ("mediaSession" in navigator) {
    navigator.mediaSession.metadata = new MediaMetadata({ title: sync.title, artist: here.chapter || "", album: manifest.title });
    navigator.mediaSession.setActionHandler("play",  () => audio.play());
    navigator.mediaSession.setActionHandler("pause", () => audio.pause());
    navigator.mediaSession.setActionHandler("seekbackward", (d) => { audio.currentTime = Math.max(0, audio.currentTime - (d.seekOffset || 15)); });
    navigator.mediaSession.setActionHandler("seekforward",  (d) => { audio.currentTime = Math.min(audio.duration||0, audio.currentTime + (d.seekOffset || 15)); });
    try {
      navigator.mediaSession.setActionHandler("previoustrack", () => go(idx - 1));
      navigator.mediaSession.setActionHandler("nexttrack",     () => go(idx + 1));
    } catch {}
  }
})();
