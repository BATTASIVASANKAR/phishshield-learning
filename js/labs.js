/* ==========================================================================
   PHISHSHIELD - INTERACTIVE SECURITY LABS ENGINE (labs.js)
   1. Lab 1: Fake Email Simulator
   2. Lab 2: Fake SMS Simulator
   3. Lab 3: Fake Website Detector
   4. Lab 4: QR Security Simulator
   5. Lab 5: Educational Local URL Heuristic Analyzer
   6. Lab 6: File Extension Safety Inspector
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initLab1Email();
  initLab2SMS();
  initLab3Website();
  initLab4QR();
  initLab5URL();
  initLab6File();
});

/* --- LAB 1: FAKE EMAIL SIMULATOR --- */
function initLab1Email() {
  const emailElements = document.querySelectorAll('.email-inspect-target');
  const feedbackBox = document.getElementById('email-lab-feedback');

  if (emailElements.length && feedbackBox) {
    emailElements.forEach(el => {
      el.addEventListener('click', () => {
        const isSuspicious = el.getAttribute('data-suspicious') === 'true';
        const explanation = el.getAttribute('data-explanation');

        el.style.border = isSuspicious ? '2px solid var(--danger)' : '2px solid var(--success)';
        el.style.backgroundColor = isSuspicious ? 'rgba(255, 51, 102, 0.15)' : 'rgba(16, 185, 129, 0.15)';

        feedbackBox.innerHTML = `
          <div class="glass-card" style="border-left:4px solid ${isSuspicious ? 'var(--danger)' : 'var(--success)'}; padding:1rem;">
            <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:0.4rem;">
              <i class="${isSuspicious ? 'fas fa-exclamation-triangle' : 'fas fa-check-circle'}" style="color:${isSuspicious ? 'var(--danger)' : 'var(--success)'}; font-size:1.2rem;"></i>
              <h5 style="color:${isSuspicious ? 'var(--danger)' : 'var(--success)'}; text-transform:uppercase;">${isSuspicious ? 'Suspicious Indicator Detected' : 'Verified Safe Element'}</h5>
            </div>
            <p style="color:var(--text-secondary); font-size:0.9rem;">${explanation}</p>
          </div>
        `;

        if (isSuspicious && typeof addXP === 'function') {
          addXP(25, "Identified suspicious phishing email indicator");
        }
      });
    });
  }
}

/* --- LAB 2: FAKE SMS SIMULATOR --- */
const SMS_EXAMPLES = [
  {
    id: "sms1",
    sender: "+1 (800) 555-0199 [ALERT]",
    message: "URGENT: Your HDFC Bank account #4829 has been SUSPENDED due to unusual activity. Click http://hdfc-verify-account.top/login immediately to restore access within 2 hours.",
    suspiciousFlags: [
      "Urgency & Threat of Suspension ('SUSPENDED', 'within 2 hours')",
      "Suspicious Non-Standard Domain (`.top` TLD instead of `hdfcbank.com`)",
      "Unsecured HTTP connection link",
      "Generic SMS number sending bank alert"
    ],
    verdict: "DANGEROUS PHISHING SMS (Smishing)"
  },
  {
    id: "sms2",
    sender: "AMAZON-REWARDS",
    message: "Congratulations! You have been selected as the 1,000,000th visitor! Claim your free iPhone 15 Pro Max now: http://bit.ly/claim-prize-today",
    suspiciousFlags: [
      "Unsolicited prize win ('1,000,000th visitor')",
      "Shortened Bitly link masking destination URL",
      "Classic lottery / prize scam model"
    ],
    verdict: "DANGEROUS PRIZE SCAM"
  }
];

function initLab2SMS() {
  const container = document.getElementById('sms-lab-container');
  const detailsBox = document.getElementById('sms-lab-details');

  if (container && detailsBox) {
    container.innerHTML = SMS_EXAMPLES.map(sms => `
      <div class="glass-card sms-card" data-id="${sms.id}" style="cursor:pointer; padding:1.25rem; margin-bottom:1rem;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
          <span style="font-weight:700; color:var(--accent-cyan); font-family:var(--font-mono);">${sms.sender}</span>
          <span class="tag tag-critical">SMISHING</span>
        </div>
        <p style="color:var(--text-primary); font-size:0.95rem; background:rgba(0,0,0,0.3); padding:0.75rem; border-radius:var(--radius-sm); border-left:3px solid var(--danger);">${sms.message}</p>
      </div>
    `).join('');

    const smsCards = container.querySelectorAll('.sms-card');
    smsCards.forEach(card => {
      card.addEventListener('click', () => {
        smsCards.forEach(c => c.style.borderColor = 'var(--border-color)');
        card.style.borderColor = 'var(--danger)';

        const id = card.getAttribute('data-id');
        const data = SMS_EXAMPLES.find(s => s.id === id);

        if (data) {
          detailsBox.innerHTML = `
            <div class="glass-card" style="border-left:4px solid var(--danger); padding:1.25rem;">
              <h4 style="color:var(--danger); margin-bottom:0.75rem;"><i class="fas fa-biohazard"></i> ${data.verdict}</h4>
              <h5 style="color:var(--text-primary); margin-bottom:0.5rem;">Suspicious Red Flags:</h5>
              <ul style="list-style:disc; margin-left:1.5rem; color:var(--text-secondary); font-size:0.9rem;">
                ${data.suspiciousFlags.map(flag => `<li style="margin-bottom:0.3rem;">${flag}</li>`).join('')}
              </ul>
            </div>
          `;
          if (typeof addXP === 'function') addXP(20, "Analyzed Smishing SMS scam pattern");
        }
      });
    });
  }
}

/* --- LAB 3: FAKE WEBSITE DETECTOR --- */
function initLab3Website() {
  const inspectBtns = document.querySelectorAll('.web-inspect-target');
  const outputBox = document.getElementById('web-lab-output');

  if (inspectBtns.length && outputBox) {
    inspectBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const title = btn.getAttribute('data-title');
        const desc = btn.getAttribute('data-desc');
        const isSafe = btn.getAttribute('data-safe') === 'true';

        outputBox.innerHTML = `
          <div class="glass-card" style="border-left:4px solid ${isSafe ? 'var(--success)' : 'var(--danger)'}; padding:1.25rem;">
            <h4 style="color:${isSafe ? 'var(--success)' : 'var(--danger)'}; margin-bottom:0.4rem;">
              <i class="${isSafe ? 'fas fa-check-shield' : 'fas fa-shield-virus'}"></i> ${title}
            </h4>
            <p style="color:var(--text-secondary); font-size:0.92rem;">${desc}</p>
          </div>
        `;
        if (typeof addXP === 'function') addXP(25, "Inspected website security indicators");
      });
    });
  }
}

/* --- LAB 4: QR SECURITY LAB --- */
function initLab4QR() {
  const qrCards = document.querySelectorAll('.qr-sample-card');
  const qrOutput = document.getElementById('qr-lab-output');

  if (qrCards.length && qrOutput) {
    qrCards.forEach(card => {
      card.addEventListener('click', () => {
        qrCards.forEach(c => c.style.borderColor = 'var(--border-color)');
        card.style.borderColor = 'var(--accent-cyan)';

        const targetUrl = card.getAttribute('data-url');
        const isSafe = card.getAttribute('data-safe') === 'true';
        const desc = card.getAttribute('data-desc');

        qrOutput.innerHTML = `
          <div class="glass-card" style="border-left:4px solid ${isSafe ? 'var(--success)' : 'var(--danger)'}; padding:1.25rem;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
              <span style="font-family:var(--font-mono); color:var(--text-primary); font-size:0.9rem;">Target: ${targetUrl}</span>
              <span class="tag ${isSafe ? 'tag-low' : 'tag-critical'}">${isSafe ? 'SAFE QR' : 'MALICIOUS QR'}</span>
            </div>
            <p style="color:var(--text-secondary); font-size:0.9rem;">${desc}</p>
          </div>
        `;
        if (typeof addXP === 'function') addXP(20, "Analyzed QR Code redirection target");
      });
    });
  }
}

/* --- LAB 5: EDUCATIONAL LOCAL URL HEURISTIC ANALYZER --- */
function initLab5URL() {
  const urlInput = document.getElementById('url-analyzer-input');
  const analyzeBtn = document.getElementById('url-analyzer-btn');
  const resultBox = document.getElementById('url-analyzer-result');

  if (analyzeBtn && urlInput && resultBox) {
    analyzeBtn.addEventListener('click', () => {
      const rawUrl = urlInput.value.trim();
      if (!rawUrl) {
        if (typeof showToast === 'function') showToast("Please enter a URL to analyze", "warning");
        return;
      }

      const analysis = analyzeURLHeuristics(rawUrl);

      let riskColor = 'var(--success)';
      if (analysis.riskLevel === 'SUSPICIOUS') riskColor = 'var(--warning)';
      if (analysis.riskLevel === 'HIGH RISK / DANGEROUS') riskColor = 'var(--danger)';

      resultBox.innerHTML = `
        <div class="glass-card" style="border-left:4px solid ${riskColor}; padding:1.5rem;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem;">
            <h4 style="color:${riskColor}; font-size:1.2rem;"><i class="fas fa-microchip"></i> Risk Assessment: ${analysis.riskLevel}</h4>
            <span style="font-family:var(--font-mono); font-weight:700; color:var(--text-primary);">Risk Score: ${analysis.score}/100</span>
          </div>
          
          <h5 style="color:var(--text-primary); margin-bottom:0.5rem;">Heuristic Findings:</h5>
          <ul style="list-style:disc; margin-left:1.5rem; color:var(--text-secondary); font-size:0.9rem; margin-bottom:1rem;">
            ${analysis.findings.map(f => `<li style="margin-bottom:0.25rem;">${f}</li>`).join('')}
          </ul>
          
          <div style="background:rgba(255,255,255,0.03); padding:0.75rem; border-radius:var(--radius-sm); font-size:0.8rem; color:var(--text-muted);">
            <i class="fas fa-info-circle"></i> <strong>Disclaimer:</strong> This is an educational simulation heuristic scanner executing client-side pattern rules.
          </div>
        </div>
      `;

      if (typeof addXP === 'function') addXP(30, "Executed Local Heuristic URL Risk Analysis");
    });
  }
}

function analyzeURLHeuristics(urlStr) {
  let score = 0;
  const findings = [];

  const lower = urlStr.toLowerCase();

  // Check Protocol
  if (lower.startsWith('http://')) {
    score += 25;
    findings.push("⚠️ Unencrypted HTTP protocol (Missing HTTPS SSL certificate)");
  } else if (lower.startsWith('https://')) {
    findings.push("✓ Uses encrypted HTTPS protocol");
  } else {
    score += 15;
    findings.push("⚠️ Missing protocol prefix (assumed unencrypted)");
  }

  // Check IP address usage instead of domain
  if (/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/.test(lower)) {
    score += 35;
    findings.push("🚨 Raw IP Address used instead of legitimate domain name!");
  }

  // Suspicious TLDs
  const suspiciousTLDs = ['.top', '.xyz', '.zip', '.tk', '.ml', '.ga', '.cf', '.gq', '.work', '.click'];
  if (suspiciousTLDs.some(tld => lower.includes(tld))) {
    score += 30;
    findings.push("⚠️ High-risk TLD commonly associated with automated spam/phishing hosting.");
  }

  // Typosquatting & Keyword traps
  const brandKeywords = ['paypal', 'bank', 'secure', 'verify', 'amazon', 'apple', 'google', 'login', 'account', 'update'];
  const matches = brandKeywords.filter(k => lower.includes(k));
  if (matches.length >= 2 && !lower.includes('paypal.com') && !lower.includes('amazon.com') && !lower.includes('google.com')) {
    score += 40;
    findings.push(`🚨 Suspicious domain spoofing keywords detected (${matches.join(', ')}) outside official domain!`);
  }

  // Excessive hyphens or @ symbols
  if ((lower.match(/-/g) || []).length > 3) {
    score += 15;
    findings.push("⚠️ Excessive hyphens in domain name (common in phishing obfuscation).");
  }

  if (lower.includes('@')) {
    score += 45;
    findings.push("🚨 Dangerous '@' character detected in URL (user-info credential tricking)!");
  }

  score = Math.min(100, score);

  let riskLevel = "SAFE / LOW RISK";
  if (score >= 30) riskLevel = "SUSPICIOUS";
  if (score >= 60) riskLevel = "HIGH RISK / DANGEROUS";

  if (findings.length === 1 && score === 0) {
    findings.push("✓ No suspicious typosquatting or IP pattern anomalies detected.");
  }

  return { score, riskLevel, findings };
}

/* --- LAB 6: FILE EXTENSION SAFETY INSPECTOR --- */
const FILE_RISK_MAP = {
  exe: { risk: "CRITICAL", desc: "Windows Executable Binary. Can execute arbitrary native compiled code, install viruses, keyloggers, or ransomware.", safe: false },
  bat: { risk: "HIGH", desc: "Batch Command Script. Executes automated Windows CLI commands capable of deleting files or altering system registries.", safe: false },
  scr: { risk: "CRITICAL", desc: "Windows Screensaver Executable. Often disguised as images/documents; full binary execution rights.", safe: false },
  vbs: { risk: "HIGH", desc: "Visual Basic Script. Automated scripting engine frequently abused in email phishing attachments.", safe: false },
  apk: { risk: "HIGH", desc: "Android Package Kit. Mobile app installer file. Side-loading unverified APKs bypasses Google Play Protect.", safe: false },
  pdf: { risk: "LOW", desc: "Portable Document Format. Standard document format. Generally safe, though active JavaScript macros inside PDFs should be disabled.", safe: true },
  png: { risk: "SAFE", desc: "Portable Network Graphics Image. Static raster image format. Completely safe unless buffer overflow exploit exists in image reader.", safe: true },
  docx: { risk: "LOW-MEDIUM", desc: "Microsoft Word Document. Generally safe unless macro code (.docm) is enabled upon opening.", safe: true }
};

function initLab6File() {
  const fileSelect = document.getElementById('file-ext-select');
  const checkBtn = document.getElementById('file-check-btn');
  const resultBox = document.getElementById('file-check-result');

  if (checkBtn && fileSelect && resultBox) {
    checkBtn.addEventListener('click', () => {
      const ext = fileSelect.value.toLowerCase().replace('.', '');
      const data = FILE_RISK_MAP[ext];

      if (data) {
        resultBox.innerHTML = `
          <div class="glass-card" style="border-left:4px solid ${data.safe ? 'var(--success)' : 'var(--danger)'}; padding:1.25rem;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem;">
              <h4 style="color:var(--text-primary); font-size:1.1rem; font-family:var(--font-mono);">Extension: .${ext.toUpperCase()}</h4>
              <span class="tag ${data.safe ? 'tag-low' : 'tag-critical'}">${data.risk} RISK</span>
            </div>
            <p style="color:var(--text-secondary); font-size:0.9rem;">${data.desc}</p>
          </div>
        `;
        if (typeof addXP === 'function') addXP(20, `Inspected .${ext} file extension risk profile`);
      }
    });
  }
}
