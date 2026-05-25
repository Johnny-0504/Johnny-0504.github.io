/* ═══════════════════════════════════════════════════════════
   MAIN.JS — Theme Toggle · Grid · Modal · Scroll Animations
   ═══════════════════════════════════════════════════════════ */

/* ── 1. DARK / LIGHT MODE TOGGLE ──────────────────────────── */
const html        = document.documentElement;
const themeToggle = document.getElementById('themeToggle');

// Gespeicherte Präferenz laden oder System-Präferenz nutzen
const savedTheme = localStorage.getItem('jk-theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
html.dataset.theme = savedTheme || (prefersDark ? 'dark' : 'light');

themeToggle.addEventListener('click', () => {
  const next = html.dataset.theme === 'dark' ? 'light' : 'dark';
  html.dataset.theme = next;
  localStorage.setItem('jk-theme', next);
});

/* ── 2. VIDEO GRID RENDERN ─────────────────────────────────── */
const grid = document.getElementById('videoGrid');

function getThumb(video) {
  if (video.thumb) return video.thumb;
  if (video.platform === 'youtube') {
    return `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`;
  }
  // Vimeo Thumbnails brauchen API-Aufruf; Fallback: leeres Bild
  return `https://vumbnail.com/${video.id}.jpg`;
}

function getEmbedUrl(video) {
  if (video.platform === 'youtube') {
    return `https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`;
  }
  return `https://player.vimeo.com/video/${video.id}?autoplay=1`;
}

VIDEOS.forEach((video, i) => {
  const card = document.createElement('article');
  card.className = 'video-card fade-up';
  card.style.transitionDelay = `${(i % 6) * 0.07}s`;
  card.innerHTML = `
    <img
      class="video-thumb"
      src="${getThumb(video)}"
      alt="${video.title}"
      loading="lazy"
    />
    <div class="video-play-btn"></div>
    <div class="video-meta">
      <p class="video-card-title">${video.title}</p>
      <p class="video-card-client">${video.client}</p>
    </div>
  `;
  card.addEventListener('click', () => openModal(video));
  grid.appendChild(card);
});

/* ── 3. MODAL ──────────────────────────────────────────────── */
const overlay       = document.getElementById('modalOverlay');
const modalClose    = document.getElementById('modalClose');
const modalVideoWrap = document.getElementById('modalVideoWrap');
const modalTitle    = document.getElementById('modalTitle');
const modalClient   = document.getElementById('modalClient');

function openModal(video) {
  modalTitle.textContent  = video.title;
  modalClient.textContent = video.client;
  modalVideoWrap.innerHTML = `
    <iframe
      src="${getEmbedUrl(video)}"
      allow="autoplay; fullscreen; picture-in-picture"
      allowfullscreen
    ></iframe>
  `;
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  overlay.classList.remove('active');
  document.body.style.overflow = '';
  // iframe stoppen
  setTimeout(() => { modalVideoWrap.innerHTML = ''; }, 350);
}

modalClose.addEventListener('click', closeModal);
overlay.addEventListener('click', (e) => {
  if (e.target === overlay) closeModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

/* ── 4. NAV SCROLL EFFECT ──────────────────────────────────── */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.style.borderBottomColor = window.scrollY > 60
    ? 'var(--border)'
    : 'transparent';
}, { passive: true });

/* ── 5. SCROLL-TRIGGERED FADE-IN ───────────────────────────── */
const fadeTargets = document.querySelectorAll('.fade-up, .video-card');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

// Warten bis Grid gerendert ist
requestAnimationFrame(() => {
  document.querySelectorAll('.fade-up, .video-card').forEach((el) => {
    observer.observe(el);
  });
});

/* ── 6. SECTION-ELEMENTE FÜR FADE-IN MARKIEREN ─────────────── */
document.querySelectorAll(
  '.section-title, .section-sub, .about-lead, .about-body, .clients, .gear-card, .contact-inner'
).forEach((el) => {
  el.classList.add('fade-up');
  observer.observe(el);
});
