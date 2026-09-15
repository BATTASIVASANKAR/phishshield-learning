/* ==========================================================================
   PHISHSHIELD - SECURITY HUB INTERACTIVE TOOLS (security.js)
   1. Interactive Network Diagram Inspector
   2. Live Password Strength Meter & Generator
   3. Interactive Email Header Explorer
   4. Safe Banking & Browser Security Checklists
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initNetworkDiagram();
  initPasswordChecker();
  initEmailHeaderExplorer();
  initSecurityChecklists();
});

/* --- 1. INTERACTIVE NETWORK DIAGRAM --- */
const NETWORK_NODES = {
  internet: {
    title: "The Public Internet",
    status: "Untrusted Zone",
    color: "#ff3366",
    desc: "The global wide area network housing web servers, public users, and potential threat actors transmitting encrypted or unencrypted packets."
  },
  firewall: {
    title: "Next-Gen Perimeter Firewall",
    status: "First Line of Defense",
    color: "#00f0ff",
    desc: "Inspects incoming and outgoing IP packet headers against rule tables (SPI/Deep Packet Inspection). Drops unauthorized traffic on closed ports."
  },
  idsips: {
    title: "IDS / IPS System",
    status: "Deep Inspection Engine",
    color: "#8b5cf6",
    desc: "Intrusion Detection System (IDS) monitors packet signatures for malware patterns. Intrusion Prevention System (IPS) actively blocks suspicious sessions in real-time."
  },
  internalnet: {
    title: "DMZ & Internal LAN",
    status: "Protected Subnet",
    color: "#3b82f6",
    desc: "Segmented network architecture preventing lateral movement. Uses VLANs, NAT, and internal proxies to isolate corporate hosts."
  },
  device: {
    title: "Protected Endpoint Device",
    status: "Secured Host",
    color: "#10b981",
    desc: "Final workstation running Endpoint Detection and Response (EDR) agents, host firewalls, and local disk encryption (BitLocker/FileVault)."
  }
};

function initNetworkDiagram() {
  const nodeElements = document.querySelectorAll('.net-node');
  const infoBox = document.getElementById('network-node-info');

  if (nodeElements.length && infoBox) {
    nodeElements.forEach(node => {
      node.addEventListener('click', () => {
        nodeElements.forEach(n => n.classList.remove('active'));
        node.classList.add('active');

        const key = node.getAttribute('data-node');
        const data = NETWORK_NODES[key];

        if (data) {
          infoBox.innerHTML = `
            <div class="glass-card" style="border-left:4px solid ${data.color}; padding:1.25rem;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
                <h4 style="font-size:1.2rem; color:var(--text-primary);">${data.title}</h4>
                <span class="tag" style="background:${data.color}20; color:${data.color}; border:1px solid ${data.color};">${data.status}</span>
              </div>
              <p style="color:var(--text-secondary); font-size:0.95rem;">${data.desc}</p>
            </div>
          `;
        }
      });
    });
  }
}

/* --- 2. LIVE PASSWORD STRENGTH CHECKER & GENERATOR --- */
function initPasswordChecker() {
  const pwdInput = document.getElementById('pwd-input');
  const strengthMeter = document.getElementById('pwd-strength-bar');
  const scoreText = document.getElementById('pwd-score-text');
  const feedbackList = document.getElementById('pwd-feedback');

  const genBtn = document.getElementById('pwd-gen-btn');
  const genResult = document.getElementById('pwd-gen-result');
  const copyBtn = document.getElementById('pwd-copy-btn');

  if (pwdInput && strengthMeter) {
    pwdInput.addEventListener('input', () => {
      const pwd = pwdInput.value;
      const scoreData = analyzePassword(pwd);

      strengthMeter.style.width = `${scoreData.score}%`;
      strengthMeter.style.backgroundColor = scoreData.color;
      scoreText.textContent = `${scoreData.label} (${scoreData.score}/100)`;
      scoreText.style.color = scoreData.color;

      feedbackList.innerHTML = scoreData.suggestions.map(s => `
        <li style="font-size:0.85rem; color:${s.pass ? 'var(--success)' : 'var(--text-muted)'}; margin-bottom:0.25rem;">
          <i class="${s.pass ? 'fas fa-check-circle' : 'fas fa-circle'}" style="margin-right:0.4rem;"></i> ${s.text}
        </li>
      `).join('');
    });
  }

  if (genBtn && genResult) {
    genBtn.addEventListener('click', () => {
      const generated = generateSecurePassword(16);
      genResult.value = generated;
      if (typeof showToast === 'function') showToast('Generated 16-character secure password!', 'success');
    });
  }

  if (copyBtn && genResult) {
    copyBtn.addEventListener('click', () => {
      if (!genResult.value) return;
      navigator.clipboard.writeText(genResult.value);
      if (typeof showToast === 'function') showToast('Copied password to clipboard!', 'info');
    });
  }
}

function analyzePassword(pwd) {
  if (!pwd) return { score: 0, label: 'Empty', color: '#64748b', suggestions: [] };

  let score = 0;
  const suggestions = [];

  const lenPass = pwd.length >= 12;
  if (pwd.length >= 8) score += 20;
  if (pwd.length >= 12) score += 20;
  if (pwd.length >= 16) score += 10;
  suggestions.push({ text: "At least 12 characters long", pass: lenPass });

  const upperPass = /[A-Z]/.test(pwd);
  if (upperPass) score += 15;
  suggestions.push({ text: "Includes Uppercase letters (A-Z)", pass: upperPass });

  const lowerPass = /[a-z]/.test(pwd);
  if (lowerPass) score += 10;
  suggestions.push({ text: "Includes Lowercase letters (a-z)", pass: lowerPass });

  const numPass = /[0-9]/.test(pwd);
  if (numPass) score += 12;
  suggestions.push({ text: "Includes Numbers (0-9)", pass: numPass });

  const symPass = /[^A-Za-z0-9]/.test(pwd);
  if (symPass) score += 13;
  suggestions.push({ text: "Includes Special Symbols (!@#$%^&*)", pass: symPass });

  // Common dictionary check
  const common = ['password', '123456', 'admin', 'welcome', 'login', 'qwerty', 'phishshield'];
  if (common.some(c => pwd.toLowerCase().includes(c))) {
    score = Math.max(10, score - 40);
  }

  score = Math.min(100, score);

  let label = 'Weak';
  let color = '#ff3366'; // danger
  if (score >= 40) { label = 'Moderate'; color = '#f59e0b'; } // warning
  if (score >= 70) { label = 'Strong'; color = '#3b82f6'; } // blue
  if (score >= 90) { label = 'Very Strong'; color = '#10b981'; } // success

  return { score, label, color, suggestions };
}

function generateSecurePassword(length = 16) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
  const array = new Uint32Array(length);
  window.crypto.getRandomValues(array);
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars[array[i] % chars.length];
  }
  return result;
}

/* --- 3. INTERACTIVE EMAIL HEADER EXPLORER --- */
const EMAIL_HEADER_EXPLANATIONS = {
  from: "Sender envelope address (`From: security@paypal-verify-alert.com`). In phishing emails, this display name often spoof legitimate companies while the domain differs.",
  replyto: "Reply-To Header (`Reply-To: attacker-inbox@mail-drop.ru`). Directs email replies to a different address than the displayed sender address.",
  spf: "Sender Policy Framework (`Received-SPF: pass` or `fail`). Validates whether the sending mail server IP is authorized by the domain's DNS SPF record.",
  dkim: "DomainKeys Identified Mail (`DKIM-Signature: v=1...`). Cryptographic digital signature confirming the email body has not been tampered with in transit.",
  dmarc: "DMARC Policy Alignment (`DMARC: pass`). Checks both SPF and DKIM authentication results and specifies how mail servers should handle failures (reject/quarantine).",
  received: "Received Hops (`Received: from mail.attacker.net by mx.google.com`). Traces every mail transfer agent (MTA) server the email traversed."
};

function initEmailHeaderExplorer() {
  const headerKeys = document.querySelectorAll('.email-header-key');
  const outputBox = document.getElementById('email-header-desc');

  if (headerKeys.length && outputBox) {
    headerKeys.forEach(keyEl => {
      keyEl.addEventListener('click', () => {
        headerKeys.forEach(k => k.classList.remove('active'));
        keyEl.classList.add('active');

        const tag = keyEl.getAttribute('data-header');
        const desc = EMAIL_HEADER_EXPLANATIONS[tag];

        if (desc) {
          outputBox.innerHTML = `
            <div class="glass-card" style="border-left:4px solid var(--accent-cyan); padding:1rem;">
              <h5 style="color:var(--accent-cyan); margin-bottom:0.4rem; text-transform:uppercase;">Header Field Breakdown</h5>
              <p style="color:var(--text-secondary); font-size:0.9rem;">${desc}</p>
            </div>
          `;
        }
      });
    });
  }
}

/* --- 4. CHECKLIST INTERACTIONS --- */
function initSecurityChecklists() {
  const checklistItems = document.querySelectorAll('.checklist-item input[type="checkbox"]');
  checklistItems.forEach(cb => {
    cb.addEventListener('change', () => {
      const parent = cb.closest('.checklist-item');
      if (cb.checked) {
        parent.style.opacity = '0.6';
        parent.style.textDecoration = 'line-through';
      } else {
        parent.style.opacity = '1';
        parent.style.textDecoration = 'none';
      }
    });
  });
}
