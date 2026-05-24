// Spotify-style player: scroll transcript, current line centered & highlighted.
// URL: player.html?slug=<book>&ch=<chapter-slug>

(async function () {
  const $ = (id) => document.getElementById(id);
  const escape = (s) => String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
  const fmtTime = (s) => { s = Math.max(0, s|0); const m = (s/60)|0, ss = s%60; return `${m}:${String(ss).padStart(2,"0")}`; };

  const params = new URLSearchParams(location.search);
  const slug = params.get("slug");
  const ch = params.get("ch");
  if (!slug || !ch) { document.body.innerHTML = "<p style='padding:2rem;color:#aaa'>Missing slug or ch.</p>"; return; }

  const back = $("backLink");
  back.href = `book.html?slug=${encodeURIComponent(slug)}`;

  const transcriptEl = $("transcript");
  const audio = $("audio");
  const playBtn = $("playPause");
  const seek = $("seekBar");
  const curTime = $("curTime");
  const durTime = $("durTime");

  let manifest, sync, chapterIdx = -1, lineEls = [], activeIdx = -1;
  let userScrolledAt = 0, userIsScrolling = false;
  let scrollResetTimer = null;

  try {
    const [mRes, sRes] = await Promise.all([
      fetch(`${slug}/manifest.json`, { cache: "no-store" }),
      fetch(`${slug}/sync/${ch}.json`, { cache: "no-store" }),
    ]);
    manifest = await mRes.json();
    sync = await sRes.json();
  } catch (e) {
    transcriptEl.innerHTML = `<p class='muted' style='padding:1rem'>Load failed: ${escape(e.message)}</p>`;
    return;
  }

  chapterIdx = manifest.chapters.findIndex(c => c.slug === ch);
  $("topicTitle").textContent = manifest.topic;
  $("chapterTitle").textContent = sync.title;
  document.title = `${sync.title} — ${manifest.topic}`;

  audio.src = `${slug}/audio/${ch}.mp3`;
  audio.load();

  // Render transcript
  transcriptEl.innerHTML = sync.lines.map((l, i) =>
    `<p class="line" data-i="${i}" data-t="${l.t}">${escape(l.text)}</p>`
  ).join("");
  lineEls = Array.from(transcriptEl.querySelectorAll(".line"));

  // Click line to seek
  transcriptEl.addEventListener("click", (e) => {
    const p = e.target.closest(".line");
    if (!p) return;
    const t = parseFloat(p.dataset.t);
    if (!isFinite(t)) return;
    audio.currentTime = t;
    if (audio.paused) audio.play().catch(()=>{});
    setActive(parseInt(p.dataset.i, 10), true);
  });

  // Detect manual scroll so auto-scroll doesn't fight the user
  transcriptEl.addEventListener("scroll", () => {
    userIsScrolling = true;
    userScrolledAt = performance.now();
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
    // Auto-scroll unless user just scrolled manually
    const sinceUser = performance.now() - userScrolledAt;
    if (force || (!userIsScrolling && sinceUser > 3000)) {
      const rect = el.getBoundingClientRect();
      const containerRect = transcriptEl.getBoundingClientRect();
      const target = transcriptEl.scrollTop + (rect.top - containerRect.top) - (containerRect.height * 0.35);
      transcriptEl.scrollTo({ top: target, behavior: "smooth" });
    }
  }

  function findActiveLine(t) {
    // Binary search for largest line whose t <= current
    let lo = 0, hi = sync.lines.length - 1, ans = -1;
    while (lo <= hi) {
      const mid = (lo + hi) >> 1;
      if (sync.lines[mid].t <= t) { ans = mid; lo = mid + 1; }
      else hi = mid - 1;
    }
    return ans;
  }

  audio.addEventListener("timeupdate", () => {
    const t = audio.currentTime;
    setActive(findActiveLine(t), false);
    curTime.textContent = fmtTime(t);
    if (isFinite(audio.duration) && audio.duration > 0) {
      seek.value = String(Math.round((t / audio.duration) * 1000));
    }
  });

  audio.addEventListener("loadedmetadata", () => {
    durTime.textContent = fmtTime(audio.duration || sync.duration || 0);
  });

  audio.addEventListener("play", () => { playBtn.textContent = "❚❚"; playBtn.setAttribute("aria-label","pause"); });
  audio.addEventListener("pause", () => { playBtn.textContent = "▶"; playBtn.setAttribute("aria-label","play"); });
  audio.addEventListener("ended", () => {
    playBtn.textContent = "▶";
    if (chapterIdx >= 0 && chapterIdx < manifest.chapters.length - 1) {
      const next = manifest.chapters[chapterIdx + 1];
      location.href = `player.html?slug=${encodeURIComponent(slug)}&ch=${encodeURIComponent(next.slug)}`;
    }
  });

  playBtn.addEventListener("click", () => {
    if (audio.paused) audio.play().catch(()=>{});
    else audio.pause();
  });
  $("back15").addEventListener("click", () => { audio.currentTime = Math.max(0, audio.currentTime - 15); });
  $("fwd15").addEventListener("click", () => { audio.currentTime = Math.min(audio.duration || 0, audio.currentTime + 15); });

  $("prevCh").addEventListener("click", () => {
    if (chapterIdx > 0) location.href = `player.html?slug=${encodeURIComponent(slug)}&ch=${encodeURIComponent(manifest.chapters[chapterIdx-1].slug)}`;
  });
  $("nextCh").addEventListener("click", () => {
    if (chapterIdx >= 0 && chapterIdx < manifest.chapters.length - 1)
      location.href = `player.html?slug=${encodeURIComponent(slug)}&ch=${encodeURIComponent(manifest.chapters[chapterIdx+1].slug)}`;
  });

  seek.addEventListener("input", () => {
    if (!isFinite(audio.duration)) return;
    audio.currentTime = (parseInt(seek.value, 10) / 1000) * audio.duration;
  });

  // Speed buttons
  document.querySelectorAll("#speedBtns button").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#speedBtns button").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      audio.playbackRate = parseFloat(btn.dataset.rate);
    });
  });

  // Media Session API for lock screen / Bluetooth controls
  if ("mediaSession" in navigator) {
    navigator.mediaSession.metadata = new MediaMetadata({
      title: sync.title,
      artist: manifest.topic,
      album: "tchlabs.net audiobook",
    });
    navigator.mediaSession.setActionHandler("play",  () => audio.play());
    navigator.mediaSession.setActionHandler("pause", () => audio.pause());
    navigator.mediaSession.setActionHandler("seekbackward",  (d) => { audio.currentTime = Math.max(0, audio.currentTime - (d.seekOffset || 15)); });
    navigator.mediaSession.setActionHandler("seekforward",   (d) => { audio.currentTime = Math.min(audio.duration||0, audio.currentTime + (d.seekOffset || 15)); });
    try {
      navigator.mediaSession.setActionHandler("previoustrack", () => $("prevCh").click());
      navigator.mediaSession.setActionHandler("nexttrack",     () => $("nextCh").click());
    } catch {}
  }
})();
