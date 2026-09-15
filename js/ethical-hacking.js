/* ==========================================================================
   PHISHSHIELD - ETHICAL HACKING MODULE (ethical-hacking.js)
   Interactive Hacking Methodology Timeline, Hacker Types Comparison,
   Bug Bounty & Responsible Disclosure Hub
   ========================================================================== */

const HACKING_STEPS = [
  {
    step: 1,
    title: "Reconnaissance (Information Gathering)",
    icon: "fas fa-search",
    description: "The initial passive or active gathering of target intelligence including domain names, IP subnets, email formats, DNS records, and social media footprint.",
    tools: ["OSINT", "Shodan", "Maltego", "WHOIS", "nslookup"],
    output: "Target Infrastructure Map & Employee Directory"
  },
  {
    step: 2,
    title: "Scanning & Footprinting",
    icon: "fas fa-radar",
    description: "Actively probing target hosts and networks for open ports, running services, operating system signatures, and active network topologies.",
    tools: ["Nmap", "Masscan", "RustScan", "Nessus"],
    output: "List of Open Ports, Active Services, & OS Versions"
  },
  {
    step: 3,
    title: "Enumeration & Vulnerability Analysis",
    icon: "fas fa-bug",
    description: "Correlating active services against CVE vulnerability databases to uncover potential security weaknesses, default configurations, or unpatched software.",
    tools: ["Nikto", "Burp Suite", "OpenVAS", "Searchsploit"],
    output: "Vulnerability Assessment Report & Exploitation Targets"
  },
  {
    step: 4,
    title: "Exploitation (Gaining Access)",
    icon: "fas fa-unlock-alt",
    description: "Controlled execution of exploit payloads against identified vulnerabilities to prove real-world exploitability and gain unauthorized shell access.",
    tools: ["Metasploit Framework", "SQLmap", "Custom Python Exploits"],
    output: "Initial Shell Access / Standard User Access"
  },
  {
    step: 5,
    title: "Post-Exploitation & Lateral Movement",
    icon: "fas fa-network-wired",
    description: "Escalating local privileges (from standard user to Administrator/root), gathering internal credentials, and pivoting to adjacent subnet hosts.",
    tools: ["Mimikatz", "BloodHound", "LinPeas / WinPeas", "Cobalt Strike"],
    output: "Domain Admin Access & Pivot Control"
  },
  {
    step: 6,
    title: "Reporting & Remediation Guidance",
    icon: "fas fa-file-contract",
    description: "Synthesizing penetration testing findings into a comprehensive executive and technical report detailing CVSS risk scores and step-by-step patch recommendations.",
    tools: ["Dradis", "Faraday", "Markdown Reporting Tools"],
    output: "Final Executive & Technical Pen Test Report"
  }
];

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('methodology-timeline')) {
    initEthicalHackingPage();
  }
});

function initEthicalHackingPage() {
  const timelineContainer = document.getElementById('methodology-timeline');
  const detailBox = document.getElementById('methodology-detail');

  timelineContainer.innerHTML = HACKING_STEPS.map(item => `
    <div class="timeline-step-card glass-card" data-step="${item.step}" style="cursor:pointer; padding:1.25rem;">
      <div style="display:flex; align-items:center; gap:1rem;">
        <div style="width:40px; height:40px; border-radius:50%; background:rgba(0,240,255,0.1); border:1px solid var(--border-cyan); display:flex; align-items:center; justify-content:center; color:var(--accent-cyan); font-weight:700;">
          ${item.step}
        </div>
        <div>
          <h4 style="font-size:1.1rem; color:var(--text-primary);">${item.title}</h4>
          <span style="font-size:0.8rem; color:var(--text-muted);"><i class="${item.icon}"></i> Phase ${item.step} of 6</span>
        </div>
      </div>
    </div>
  `).join('');

  const stepCards = timelineContainer.querySelectorAll('.timeline-step-card');

  function selectStep(stepNumber) {
    stepCards.forEach(c => c.style.borderColor = 'var(--border-color)');
    const selectedCard = timelineContainer.querySelector(`[data-step="${stepNumber}"]`);
    if (selectedCard) selectedCard.style.borderColor = 'var(--accent-cyan)';

    const data = HACKING_STEPS.find(s => s.step === stepNumber);
    if (data && detailBox) {
      detailBox.innerHTML = `
        <div class="glass-card" style="border-left:4px solid var(--accent-cyan);">
          <div style="display:flex; align-items:center; gap:0.75rem; margin-bottom:1rem;">
            <i class="${data.icon}" style="font-size:1.5rem; color:var(--accent-cyan);"></i>
            <h3 style="font-size:1.5rem; color:var(--text-primary);">Phase ${data.step}: ${data.title}</h3>
          </div>
          <p style="color:var(--text-secondary); font-size:1rem; margin-bottom:1.5rem;">${data.description}</p>
          
          <div style="display:grid; grid-template-columns: 1fr 1fr; gap:1rem;">
            <div>
              <h5 style="color:var(--accent-purple); margin-bottom:0.5rem;"><i class="fas fa-tools"></i> Key Tools Used</h5>
              <div style="display:flex; flex-wrap:wrap; gap:0.5rem;">
                ${data.tools.map(t => `<span class="tag" style="background:rgba(139,92,246,0.15); color:var(--accent-purple); border:1px solid var(--border-purple);">${t}</span>`).join('')}
              </div>
            </div>
            <div>
              <h5 style="color:var(--success); margin-bottom:0.5rem;"><i class="fas fa-flag-checkered"></i> Deliverable Output</h5>
              <p style="font-size:0.9rem; color:var(--text-primary); font-family:var(--font-mono);">${data.output}</p>
            </div>
          </div>
        </div>
      `;
    }
  }

  stepCards.forEach(card => {
    card.addEventListener('click', () => {
      selectStep(parseInt(card.getAttribute('data-step')));
    });
  });

  selectStep(1);
}
