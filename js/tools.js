/* ==========================================================================
   PHISHSHIELD - CYBER SECURITY TOOLS LIBRARY ENGINE (tools.js)
   11+ Cyber Tools, Category Filtering, Search, Detail Modals
   ========================================================================== */

const CYBER_TOOLS_DATA = [
  {
    id: "wireshark",
    name: "Wireshark",
    category: "Network Security",
    skillLevel: "Intermediate",
    purpose: "World's foremost open-source network protocol analyzer.",
    keyFeatures: ["Deep packet inspection", "Live capture and offline analysis", "Display filter expressions", "Decryption support for IPsec, ISAKMP, Kerberos, SNMPv3, SSL/TLS"],
    typicalUse: "Troubleshooting network performance issues, analyzing suspicious packet captures (PCAP), inspecting unencrypted passwords in network traffic.",
    description: "Wireshark lets users inspect data from a live network or from a capture file on disk. It allows deep microscopic inspection of hundreds of network protocols."
  },
  {
    id: "nmap",
    name: "Nmap (Network Mapper)",
    category: "Network Security",
    skillLevel: "Beginner - Advanced",
    purpose: "Free and open-source utility for network discovery and vulnerability auditing.",
    keyFeatures: ["Host discovery (ping sweeps)", "Port scanning (TCP SYN, Connect, UDP)", "OS fingerprinting", "NSE (Nmap Scripting Engine) vulnerability scripts"],
    typicalUse: "Auditing network security, identifying open ports on remote servers, discovering active devices on a local subnet.",
    description: "Nmap uses raw IP packets to determine what hosts are available on the network, what services (application name and version) those hosts are offering, and what operating systems they are running."
  },
  {
    id: "burp",
    name: "Burp Suite",
    category: "Web Security",
    skillLevel: "Intermediate - Advanced",
    purpose: "Leading integrated platform for performing security testing of web applications.",
    keyFeatures: ["Interception Proxy", "Repeater & Intruder fuzzing tools", "Web vulnerability scanner (Pro)", "Target site mapping"],
    typicalUse: "Interception and manipulation of HTTP/HTTPS traffic between web browser and target web server to test for SQLi, XSS, and broken authentication.",
    description: "Burp Suite is the industry-standard toolkit for web application penetration testers and bug bounty hunters worldwide."
  },
  {
    id: "metasploit",
    name: "Metasploit Framework",
    category: "Penetration Testing",
    skillLevel: "Advanced",
    purpose: "Computer security project that provides information about security vulnerabilities and aids in penetration testing and IDS signature development.",
    keyFeatures: ["Vulnerability exploit database", "Payload generation (Meterpreter)", "Auxiliary scanner modules", "Post-exploitation modules"],
    typicalUse: "Simulating real-world cyberattacks against authorized systems to verify vulnerability patch effectiveness.",
    description: "Metasploit allows security teams to verify vulnerabilities, manage security assessments, and improve security awareness."
  },
  {
    id: "kali",
    name: "Kali Linux",
    category: "Penetration Testing",
    skillLevel: "Intermediate - Advanced",
    purpose: "Debian-derived Linux distribution designed for digital forensics and penetration testing.",
    keyFeatures: ["Pre-installed with 600+ penetration testing tools", "Custom kernel patched for wireless injection", "LUKS full disk encryption support"],
    typicalUse: "Operating system platform for security research, ethical hacking, digital forensics, and reverse engineering.",
    description: "Maintained and funded by Offensive Security, Kali Linux is the standard OS for ethical hackers worldwide."
  },
  {
    id: "splunk",
    name: "Splunk Enterprise Security",
    category: "SIEM",
    skillLevel: "Intermediate",
    purpose: "Data analytics platform used for searching, monitoring, and analyzing machine-generated big data.",
    keyFeatures: ["Real-time log aggregation", "Custom SPL (Search Processing Language)", "SOC Dashboards & alert triggers", "Incident response workflow management"],
    typicalUse: "SIEM (Security Information and Event Management) platform in modern Security Operations Centers (SOC) for correlation of enterprise event logs.",
    description: "Splunk enables security analysts to monitor enterprise networks, investigate threat indicators, and automate incident response."
  },
  {
    id: "sentinel",
    name: "Microsoft Sentinel",
    category: "SIEM",
    skillLevel: "Intermediate",
    purpose: "Scalable, cloud-native SIEM and Security Orchestration Automated Response (SOAR) solution.",
    keyFeatures: ["Cloud-native AI analytics", "KQL (Kusto Query Language) search", "Automated Playbooks (Logic Apps)", "Threat intelligence integration"],
    typicalUse: "Collecting security data across all cloud users, devices, applications, and infrastructure both on-premises and in multiple clouds.",
    description: "Microsoft Sentinel delivers intelligent security analytics and threat intelligence across the enterprise."
  },
  {
    id: "nessus",
    name: "Tenable Nessus",
    category: "Vulnerability Assessment",
    skillLevel: "Beginner - Intermediate",
    purpose: "Proprietary vulnerability scanner developed by Tenable Network Security.",
    keyFeatures: ["High-speed asset discovery", "Comprehensive vulnerability scanning", "Compliance auditing", "CVSS scoring reports"],
    typicalUse: "Scanning corporate subnets for unpatched software, misconfigurations, default passwords, and malware vulnerabilities.",
    description: "Nessus is one of the most widely deployed security technologies on the planet trusted by thousands of enterprise security teams."
  },
  {
    id: "openvas",
    name: "OpenVAS (Greenbone)",
    category: "Vulnerability Assessment",
    skillLevel: "Intermediate",
    purpose: "Full-featured open-source vulnerability scanner.",
    keyFeatures: ["Daily updated Network Vulnerability Tests (NVTs)", "Authenticated & unauthenticated scanning", "Customizable executive PDF reports"],
    typicalUse: "Open-source vulnerability management and network infrastructure security scanning.",
    description: "OpenVAS is a powerful open-source component of the Greenbone Vulnerability Management solution."
  },
  {
    id: "snort",
    name: "Snort",
    category: "IDS/IPS",
    skillLevel: "Intermediate - Advanced",
    purpose: "Open-source network intrusion detection and prevention system (IDS/IPS).",
    keyFeatures: ["Real-time traffic analysis", "Packet logging", "Protocol analysis", "Rule-based signature matching"],
    typicalUse: "Monitoring network interfaces for malicious signatures, buffer overflows, stealth port scans, and CGI attacks.",
    description: "Snort uses a rule-based language to analyze network traffic and block unauthorized intrusion attempts."
  },
  {
    id: "suricata",
    name: "Suricata",
    category: "IDS/IPS",
    skillLevel: "Intermediate - Advanced",
    purpose: "High-performance open-source Network Threat Detection engine.",
    keyFeatures: ["Multi-threaded architecture", "IDS/IPS & Network Security Monitoring (NSM)", "Lua scripting support", "JSON log output"],
    typicalUse: "High-speed multi-gigabit network intrusion prevention and deep packet inspection.",
    description: "Suricata is capable of real-time intrusion detection (IDS), inline intrusion prevention (IPS), and network security monitoring."
  }
];

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('tools-grid')) {
    initToolsPage();
  }
});

function initToolsPage() {
  const grid = document.getElementById('tools-grid');
  const searchInput = document.getElementById('tool-search');
  const filterBtns = document.querySelectorAll('.tool-filter-btn');

  let currentCategory = 'all';
  let currentSearch = '';

  function renderTools() {
    grid.innerHTML = '';

    const filtered = CYBER_TOOLS_DATA.filter(tool => {
      const matchesCat = currentCategory === 'all' || tool.category.toLowerCase().replace(/\s+/g, '-') === currentCategory;
      const matchesSearch = tool.name.toLowerCase().includes(currentSearch) ||
                            tool.purpose.toLowerCase().includes(currentSearch) ||
                            tool.category.toLowerCase().includes(currentSearch);
      return matchesCat && matchesSearch;
    });

    if (filtered.length === 0) {
      grid.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding:3rem; color:var(--text-muted);">
        No cybersecurity tools found matching criteria.
      </div>`;
      return;
    }

    filtered.forEach(tool => {
      const card = document.createElement('div');
      card.className = 'glass-card tool-card';
      
      card.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:0.75rem;">
          <span class="tag" style="background:rgba(0,240,255,0.1); color:var(--accent-cyan); border:1px solid var(--border-cyan);">${tool.category}</span>
          <span style="font-size:0.75rem; color:var(--accent-purple); font-weight:600;">${tool.skillLevel}</span>
        </div>
        <h3 style="font-size:1.3rem; margin-bottom:0.5rem; color:var(--text-primary);">${tool.name}</h3>
        <p style="font-size:0.88rem; color:var(--text-secondary); margin-bottom:1.25rem; flex-grow:1;">${tool.purpose}</p>
        <button class="btn btn-outline btn-sm view-tool-btn" style="width:100%;">View Tool Overview <i class="fas fa-external-link-alt"></i></button>
      `;

      card.addEventListener('click', () => openToolModal(tool));
      grid.appendChild(card);
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-filter');
      renderTools();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value.trim().toLowerCase();
      renderTools();
    });
  }

  renderTools();
}

function openToolModal(tool) {
  let modalOverlay = document.querySelector('.tool-modal-overlay');
  if (!modalOverlay) {
    modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-overlay tool-modal-overlay';
    modalOverlay.innerHTML = `
      <div class="modal-content">
        <button class="modal-close"><i class="fas fa-times"></i></button>
        <div class="tool-modal-body"></div>
      </div>
    `;
    document.body.appendChild(modalOverlay);
    modalOverlay.querySelector('.modal-close').addEventListener('click', () => modalOverlay.classList.remove('active'));
    modalOverlay.addEventListener('click', (e) => { if (e.target === modalOverlay) modalOverlay.classList.remove('active'); });
  }

  const body = modalOverlay.querySelector('.tool-modal-body');
  body.innerHTML = `
    <div style="display:flex; align-items:center; gap:0.75rem; margin-bottom:0.5rem;">
      <span class="tag" style="background:rgba(0,240,255,0.1); color:var(--accent-cyan); border:1px solid var(--border-cyan);">${tool.category}</span>
      <span style="color:var(--accent-purple); font-size:0.85rem; font-weight:600;">Skill: ${tool.skillLevel}</span>
    </div>
    <h2 style="font-size:2rem; margin-bottom:1rem; color:var(--text-primary);">${tool.name}</h2>
    <p style="color:var(--text-secondary); font-size:1rem; margin-bottom:1.5rem;">${tool.description}</p>
    
    <div class="glass-card" style="padding:1.25rem; margin-bottom:1rem;">
      <h4 style="color:var(--accent-cyan); margin-bottom:0.75rem;"><i class="fas fa-star"></i> Key Features</h4>
      <ul style="list-style:disc; margin-left:1.5rem; color:var(--text-secondary); font-size:0.9rem;">
        ${tool.keyFeatures.map(f => `<li style="margin-bottom:0.3rem;">${f}</li>`).join('')}
      </ul>
    </div>

    <div class="glass-card" style="padding:1.25rem;">
      <h4 style="color:var(--accent-purple); margin-bottom:0.5rem;"><i class="fas fa-laptop-code"></i> Typical SOC / Lab Usage</h4>
      <p style="color:var(--text-secondary); font-size:0.92rem;">${tool.typicalUse}</p>
    </div>
  `;

  modalOverlay.classList.add('active');
}
