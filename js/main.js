/* ==========================================================================
   PHISHSHIELD - GLOBAL JAVASCRIPT ENGINE (main.js)
   Theme Switcher, LocalStorage State, Mobile Navigation, Global Search Modal,
   Gamification System, Particle Background Canvas & Toast Notifications
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileNav();
  initScrollProgress();
  initGlobalSearch();
  initParticleCanvas();
  initGamification();
  initDailyCyberTip();
});

/* --- LOCALSTORAGE KEY NAMES --- */
const STORAGE_KEYS = {
  THEME: 'phishshield_theme',
  USER_XP: 'phishshield_xp',
  COMPLETED_LABS: 'phishshield_labs',
  QUIZ_SCORES: 'phishshield_quiz_scores',
  BADGES: 'phishshield_badges',
  DAILY_TIP_DATE: 'phishshield_tip_date'
};

/* --- THEME CONTROLLER --- */
function initTheme() {
  const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME) || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  const themeToggleBtns = document.querySelectorAll('.theme-toggle');
  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem(STORAGE_KEYS.THEME, newTheme);
      updateThemeIcon(newTheme);
      showToast(`Switched to ${newTheme.toUpperCase()} mode`, 'info');
    });
  });
}

function updateThemeIcon(theme) {
  const icons = document.querySelectorAll('.theme-toggle i');
  icons.forEach(icon => {
    if (theme === 'dark') {
      icon.className = 'fas fa-sun';
    } else {
      icon.className = 'fas fa-moon';
    }
  });
}

/* --- MOBILE NAVIGATION --- */
function initMobileNav() {
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-active');
      mobileToggle.classList.toggle('active');
    });
  }
}

/* --- SCROLL PROGRESS & BACK TO TOP --- */
function initScrollProgress() {
  const progressBar = document.createElement('div');
  progressBar.className = 'scroll-progress-bar';
  document.body.appendChild(progressBar);

  const backToTopBtn = document.createElement('button');
  backToTopBtn.className = 'back-to-top';
  backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
  backToTopBtn.setAttribute('aria-label', 'Back to top');
  document.body.appendChild(backToTopBtn);

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY;
    const scrollPercentage = (scrollPosition / totalHeight) * 100;

    progressBar.style.width = `${Math.min(100, Math.max(0, scrollPercentage))}%`;

    if (scrollPosition > 400) {
      backToTopBtn.classList.add('active');
    } else {
      backToTopBtn.classList.remove('active');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* --- GLOBAL SEARCH SYSTEM --- */
const GLOBAL_SEARCH_INDEX = [
  { title: 'Phishing Attacks', url: 'attacks.html#phishing', category: 'Cyber Attacks' },
  { title: 'Ransomware', url: 'attacks.html#ransomware', category: 'Cyber Attacks' },
  { title: 'SQL Injection (SQLi)', url: 'attacks.html#sqli', category: 'Web Attack' },
  { title: 'Cross-Site Scripting (XSS)', url: 'attacks.html#xss', category: 'Web Attack' },
  { title: 'Zero-Day Vulnerability', url: 'attacks.html#zeroday', category: 'Attack Vector' },
  { title: 'White Hat vs Black Hat Hackers', url: 'ethical-hacking.html#types', category: 'Ethical Hacking' },
  { title: 'Penetration Testing Methodology', url: 'ethical-hacking.html#timeline', category: 'Ethical Hacking' },
  { title: 'Interactive Network Security Diagram', url: 'security.html#network', category: 'Security Hub' },
  { title: 'Password Strength Checker & Generator', url: 'security.html#password', category: 'Security Tools' },
  { title: 'Email Header Explorer (SPF, DKIM, DMARC)', url: 'security.html#email', category: 'Security Hub' },
  { title: 'Lab 1: Fake Email Simulator', url: 'labs.html#lab-email', category: 'Interactive Lab' },
  { title: 'Lab 2: Fake SMS Simulator', url: 'labs.html#lab-sms', category: 'Interactive Lab' },
  { title: 'Lab 3: Fake Website Detector', url: 'labs.html#lab-website', category: 'Interactive Lab' },
  { title: 'Lab 5: Local Heuristic URL Risk Analyzer', url: 'labs.html#lab-url', category: 'Interactive Lab' },
  { title: 'Wireshark Packet Analyzer', url: 'tools.html#wireshark', category: 'Cyber Tools' },
  { title: 'Nmap Port Scanner', url: 'tools.html#nmap', category: 'Cyber Tools' },
  { title: 'Burp Suite Web Proxy', url: 'tools.html#burp', category: 'Cyber Tools' },
  { title: 'SOC Analyst Career Path', url: 'roadmaps.html#soc', category: 'Career Roadmap' },
  { title: 'Ethical Hacker Career Path', url: 'roadmaps.html#hacker', category: 'Career Roadmap' },
  { title: '50-Question Cyber Security Quiz', url: 'quiz.html', category: 'Quiz' },
  { title: 'Cyber Security Glossary (100+ Terms)', url: 'glossary.html', category: 'Glossary' }
];

function initGlobalSearch() {
  const searchTriggers = document.querySelectorAll('.search-trigger');
  
  // Create search modal dynamically if not present
  let modal = document.querySelector('.search-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.className = 'search-modal';
    modal.innerHTML = `
      <div class="search-modal-container">
        <div class="search-header">
          <i class="fas fa-search"></i>
          <input type="text" class="search-input" placeholder="Search PhishShield (Attacks, Tools, Labs, Roadmaps...)" />
          <button class="modal-close" style="position:static;"><i class="fas fa-times"></i></button>
        </div>
        <div class="search-results"></div>
      </div>
    `;
    document.body.appendChild(modal);
  }

  const searchInput = modal.querySelector('.search-input');
  const searchResults = modal.querySelector('.search-results');
  const closeBtn = modal.querySelector('.modal-close');

  const openSearch = () => {
    modal.classList.add('active');
    searchInput.focus();
    renderSearchResults('');
  };

  const closeSearch = () => {
    modal.classList.remove('active');
    searchInput.value = '';
  };

  searchTriggers.forEach(btn => btn.addEventListener('click', openSearch));
  if (closeBtn) closeBtn.addEventListener('click', closeSearch);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeSearch();
  });

  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      openSearch();
    }
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeSearch();
    }
  });

  searchInput.addEventListener('input', (e) => {
    renderSearchResults(e.target.value.trim().toLowerCase());
  });

  function renderSearchResults(query) {
    if (!query) {
      searchResults.innerHTML = '<p style="color:var(--text-muted); padding:1rem; text-align:center;">Type to search PhishShield portal resources...</p>';
      return;
    }

    const matches = GLOBAL_SEARCH_INDEX.filter(item => 
      item.title.toLowerCase().includes(query) || 
      item.category.toLowerCase().includes(query)
    );

    if (matches.length === 0) {
      searchResults.innerHTML = '<p style="color:var(--text-muted); padding:1rem; text-align:center;">No cyber security matching topics found.</p>';
      return;
    }

    searchResults.innerHTML = matches.map(item => `
      <a href="${item.url}" class="search-result-item" onclick="document.querySelector('.search-modal').classList.remove('active')">
        <span class="search-result-title">${item.title}</span>
        <span class="search-result-cat">${item.category}</span>
      </a>
    `).join('');
  }
}

/* --- GAMIFICATION & LOCALSTORAGE XP ENGINE --- */
function initGamification() {
  const currentXP = parseInt(localStorage.getItem(STORAGE_KEYS.USER_XP) || '150');
  updateXPDisplay(currentXP);
}

function addXP(amount, reason) {
  let currentXP = parseInt(localStorage.getItem(STORAGE_KEYS.USER_XP) || '150');
  currentXP += amount;
  localStorage.setItem(STORAGE_KEYS.USER_XP, currentXP.toString());
  updateXPDisplay(currentXP);
  showToast(`+${amount} XP Earned: ${reason}!`, 'success');
  checkBadgeUnlocks(currentXP);
}

function getRankTitle(xp) {
  if (xp >= 2000) return { title: 'Cyber Expert', badge: 'fas fa-crown', color: '#ff3366' };
  if (xp >= 1200) return { title: 'Sentinel', badge: 'fas fa-shield-alt', color: '#8b5cf6' };
  if (xp >= 600) return { title: 'Guardian', badge: 'fas fa-user-shield', color: '#3b82f6' };
  if (xp >= 300) return { title: 'Defender', badge: 'fas fa-user-lock', color: '#00f0ff' };
  return { title: 'Beginner', badge: 'fas fa-seedling', color: '#10b981' };
}

function updateXPDisplay(xp) {
  const rank = getRankTitle(xp);
  const badges = document.querySelectorAll('.user-xp-badge');
  badges.forEach(b => {
    b.innerHTML = `<i class="${rank.badge}" style="color:${rank.color}"></i> ${rank.title} (${xp} XP)`;
  });
}

function checkBadgeUnlocks(xp) {
  const unlocked = JSON.parse(localStorage.getItem(STORAGE_KEYS.BADGES) || '[]');
  const newBadges = [];

  if (xp >= 300 && !unlocked.includes('Defender')) newBadges.push('Defender');
  if (xp >= 600 && !unlocked.includes('Guardian')) newBadges.push('Guardian');
  if (xp >= 1200 && !unlocked.includes('Sentinel')) newBadges.push('Sentinel');
  if (xp >= 2000 && !unlocked.includes('Cyber Expert')) newBadges.push('Cyber Expert');

  if (newBadges.length > 0) {
    const updated = [...unlocked, ...newBadges];
    localStorage.setItem(STORAGE_KEYS.BADGES, JSON.stringify(updated));
    newBadges.forEach(b => {
      showToast(`🏆 UNLOCKED BADGE: ${b}!`, 'success');
    });
  }
}

/* --- DAILY CYBER TIP & CHALLENGE ENGINE --- */
const DAILY_TIPS = [
  "Always verify email sender addresses carefully before opening attachments or clicking embedded links.",
  "Enable Multi-Factor Authentication (MFA) on all financial, work, and personal accounts.",
  "Never scan unknown QR codes in public places without previewing the destination URL.",
  "Use a reputable open-source password manager rather than reusing weak passwords.",
  "Keep your operating system, web browsers, and antivirus software updated with the latest security patches.",
  "Be suspicious of any urgent request asking for OTPs, wire transfers, or sensitive credential confirmations."
];

function initDailyCyberTip() {
  const tipContainer = document.querySelector('.daily-tip-text');
  if (tipContainer) {
    const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    const tipIndex = dayOfYear % DAILY_TIPS.length;
    tipContainer.textContent = DAILY_TIPS[tipIndex];
  }
}

/* --- TOAST SYSTEM --- */
function showToast(message, type = 'info') {
  let toastContainer = document.querySelector('.toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  let icon = 'fas fa-info-circle';
  if (type === 'success') icon = 'fas fa-check-circle';
  if (type === 'warning') icon = 'fas fa-exclamation-triangle';
  if (type === 'danger') icon = 'fas fa-biohazard';

  toast.innerHTML = `<i class="${icon}"></i> <span>${message}</span>`;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

/* --- CYBER PARTICLE CANVAS BACKGROUND --- */
function initParticleCanvas() {
  const canvas = document.createElement('canvas');
  canvas.id = 'particle-canvas';
  document.body.prepend(canvas);
  const ctx = canvas.getContext('2d');

  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const particleCount = Math.min(50, Math.floor(width / 35));

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 1.8 + 0.8,
      color: Math.random() > 0.5 ? 'rgba(0, 240, 255, ' : 'rgba(139, 92, 246, '
    });
  }

  function animateParticles() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particleCount; i++) {
      let p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color + '0.6)';
      ctx.fill();

      // Connect near particles with faint cyber lines
      for (let j = i + 1; j < particleCount; j++) {
        let p2 = particles[j];
        let dx = p.x - p2.x;
        let dy = p.y - p2.y;
        let dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = p.color + (1 - dist / 120) * 0.15 + ')';
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animateParticles);
  }

  animateParticles();
}
