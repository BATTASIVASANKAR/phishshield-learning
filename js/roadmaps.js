/* ==========================================================================
   PHISHSHIELD - CAREER ROADMAPS HUB ENGINE (roadmaps.js)
   8 Interactive Career Pathways, Visual Node Steps, Required Skills & Certifications
   ========================================================================== */

const ROADMAPS_DATA = [
  {
    id: "soc",
    title: "SOC Analyst Career Path",
    role: "Tier 1/2 Security Operations Center Analyst",
    description: "Frontline defender responsible for monitoring enterprise network alerts, triaging SIEM incidents, and containing threats.",
    steps: ["Networking Fundamentals", "Linux Systems Administration", "Windows Internals & Event Logs", "Security Fundamentals (CompTIA Security+)", "SIEM Correlation (Splunk / Sentinel)", "Incident Response Playbooks", "Threat Hunting"],
    beginnerSkills: ["TCP/IP Subnetting", "OSI Model", "Wireshark packet capture", "Basic Command Line"],
    intermediateSkills: ["KQL / SPL Query Language", "Email Header Analysis", "Phishing triage", "Log Correlation"],
    advancedSkills: ["Memory Forensics (Volatility)", "YARA rules writing", "Malware Sandbox Analysis"],
    tools: ["Splunk", "Microsoft Sentinel", "Wireshark", "TheHive", "Any.Run"],
    certs: ["CompTIA Security+", "CySA+ (Cybersecurity Analyst)", "BJA (Blue Team Level 1)"],
    opportunities: "SOC Tier 1 Analyst, Incident Responder, Threat Detection Engineer."
  },
  {
    id: "hacker",
    title: "Ethical Hacker Career Path",
    role: "White Hat Hacker / Offensive Security Consultant",
    description: "Security specialist hired to legally breach corporate defenses and uncover vulnerabilities before malicious hackers exploit them.",
    steps: ["Networking Protocols", "Linux Command Line Mastery", "Python / Bash Scripting", "Web Security Fundamentals", "OWASP Top 10 Exploitation", "Burp Suite & Proxying", "Nmap & Vulnerability Scanning", "Ethical Hacker Certification"],
    beginnerSkills: ["HTML/JS Basics", "Linux Administration", "Nmap Port Scanning", "HTTP Protocol Methods"],
    intermediateSkills: ["Burp Suite Repeater", "SQL Injection", "XSS Exploitation", "Metasploit"],
    advancedSkills: ["Buffer Overflows", "Active Directory Attacks", "Privilege Escalation"],
    tools: ["Burp Suite", "Nmap", "Metasploit", "Kali Linux", "SQLmap"],
    certs: ["CEH (Certified Ethical Hacker)", "eJPT (Junior Penetration Tester)", "OSCP (Offensive Security Certified Professional)"],
    opportunities: "Ethical Hacker, Vulnerability Assessment Specialist, Bug Bounty Hunter."
  },
  {
    id: "pentester",
    title: "Penetration Tester Pathway",
    role: "Red Team Penetration Tester",
    description: "Offensive security expert conducting authorized simulated attacks against enterprise networks, firewalls, and applications.",
    steps: ["Networking & Routing", "Linux & Active Directory", "Enumeration & Port Scanning", "Vulnerability Assessment", "Web Application Security", "Exploitation & Shells", "Report Writing & Mitigation"],
    beginnerSkills: ["Network Mapping", "Service Banner Grabbing", "Vulnerability Scanning"],
    intermediateSkills: ["Privilege Escalation (LinPeas/WinPeas)", "Shell Payloads", "Web Proxying"],
    advancedSkills: ["EDR Evasion", "Custom Exploit Development", "Red Team Infrastructure"],
    tools: ["Cobalt Strike", "Burp Suite Pro", "Nmap", "BloodHound", "Empire"],
    certs: ["OSCP", "PNPT (Practical Network Penetration Tester)", "GPEN"],
    opportunities: "Red Team Operator, Penetration Tester, Security Consultant."
  },
  {
    id: "forensics",
    title: "Digital Forensics & Incident Response (DFIR)",
    role: "Digital Forensics Analyst",
    description: "Investigator uncovering digital evidence, reconstructing cyber breaches, and performing disk and volatile memory triage.",
    steps: ["Operating System Architecture", "File Systems (NTFS/ext4/APFS)", "Disk Imaging & Hashing", "Memory Analysis (RAM)", "Autopsy & Registry Analysis", "Volatility Framework", "Digital Forensics Certification"],
    beginnerSkills: ["Hash Verification (MD5/SHA256)", "Disk Imaging", "File Carving"],
    intermediateSkills: ["Windows Registry Forensics", "Event Log Analysis", "Browser History Reconstruction"],
    advancedSkills: ["Volatile Memory Analysis", "Timeline Analysis", "Anti-Forensics Bypass"],
    tools: ["Autopsy", "Volatility", "FTK Imager", "KAPE", "X-Ways"],
    certs: ["GCFA (GIAC Certified Forensic Analyst)", "CHFI", "CBTA"],
    opportunities: "Digital Forensics Investigator, Incident Response Lead, Cyber Crime Analyst."
  },
  {
    id: "malware",
    title: "Malware Analyst Pathway",
    role: "Reverse Engineer & Malware Analyst",
    description: "Specialist dissecting malicious binaries, ransomware, and spyware to understand execution flow and craft IoCs.",
    steps: ["C / C++ Programming", "x86 / x64 Assembly Language", "Windows Internals & API", "Static & Dynamic Analysis", "Disassemblers & Debuggers (Ghidra/x64dbg)", "Reverse Engineering Assembly", "YARA Rule Creation"],
    beginnerSkills: ["C Programming", "File Hashes", "PE Header Structure", "Basic Sandboxing"],
    intermediateSkills: ["Ghidra Disassembly", "x64dbg Debugging", "Unpacking Obfuscated Code"],
    advancedSkills: ["Kernel Driver Reverse Engineering", "Anti-Debugging Bypass", "Ransomware Decryption"],
    tools: ["Ghidra", "x64dbg", "IDA Pro", "PEStudio", "Process Hacker"],
    certs: ["GREM (GIAC Reverse Engineering Malware)", "eCRE"],
    opportunities: "Malware Analyst, Reverse Engineer, Threat Intelligence Researcher."
  },
  {
    id: "cloud",
    title: "Cloud Security Engineer Pathway",
    role: "Cloud Infrastructure Security Architect",
    description: "Professional securing public and hybrid cloud environments across AWS, Microsoft Azure, and Google Cloud Platform.",
    steps: ["Networking & Linux", "AWS / Azure Cloud Fundamentals", "Identity & Access Management (IAM)", "Cloud Monitoring & Logging", "Infrastructure as Code (Terraform) Security", "Cloud Security Engineer Certification"],
    beginnerSkills: ["Virtual Private Clouds (VPC)", "IAM Roles & Policies", "S3 Bucket Encryption"],
    intermediateSkills: ["CloudTrail Logging", "Container Security (Docker)", "GuardDuty Alerts"],
    advancedSkills: ["Multi-Cloud Architecture", "Serverless Security", "Kubernetes Security"],
    tools: ["AWS Security Hub", "Microsoft Defender for Cloud", "Prisma Cloud", "Terraform"],
    certs: ["AWS Certified Security - Specialty", "Microsoft Certified: Azure Security Engineer", "CCSP"],
    opportunities: "Cloud Security Engineer, Cloud Architect, DevSecOps Specialist."
  },
  {
    id: "securityeng",
    title: "Security Engineer Pathway",
    role: "Infrastructure Security Engineer",
    description: "Architect responsible for designing, deploying, and maintaining enterprise defensive security infrastructure.",
    steps: ["Networking & Protocols", "Linux & Windows Hardening", "Next-Gen Firewalls & VPNs", "IDS / IPS Deployment", "SIEM Architecture", "Security Automation (Python/Ansible)", "Security Engineer"],
    beginnerSkills: ["Firewall Rulesets", "SSH Key Management", "SSL/TLS Configuration"],
    intermediateSkills: ["VPN Tunnels", "IDS Rule Writing (Snort)", "Scripted Patch Automation"],
    advancedSkills: ["Zero Trust Architecture", "Cryptographic HSM Management", "SIEM Architecture"],
    tools: ["Palo Alto Networks", "Snort", "Splunk", "Ansible", "OpenVPN"],
    certs: ["CISSP", "CompTIA Security+", "CCNP Security"],
    opportunities: "Security Engineer, Infrastructure Architect, Systems Security Specialist."
  },
  {
    id: "devsecops",
    title: "DevSecOps Engineer Pathway",
    role: "DevSecOps & Application Security Engineer",
    description: "Integrates automated security testing directly into continuous integration and deployment (CI/CD) pipelines.",
    steps: ["Linux & Git", "Docker & Containerization", "CI/CD Pipeline Automation (GitHub Actions/Jenkins)", "SAST / DAST Automated Security Scanning", "Cloud Container Hardening", "DevSecOps Engineer"],
    beginnerSkills: ["Git Version Control", "Dockerfiles", "YAML Syntax"],
    intermediateSkills: ["Jenkins / GitHub Actions", "SonarQube SAST", "Dependency Scanning"],
    advancedSkills: ["Kubernetes Security (K8s)", "Policy as Code (OPA)", "Automated Compliance"],
    tools: ["SonarQube", "Trivy", "Snyk", "Docker", "GitHub Actions"],
    certs: ["Certified DevSecOps Professional (CDSP)", "CKA", "CASE"],
    opportunities: "DevSecOps Engineer, AppSec Engineer, CI/CD Security Specialist."
  }
];

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('roadmaps-grid')) {
    initRoadmapsPage();
  }
});

function initRoadmapsPage() {
  const grid = document.getElementById('roadmaps-grid');
  const detailBox = document.getElementById('roadmap-detail-box');

  grid.innerHTML = ROADMAPS_DATA.map((r, idx) => `
    <div class="glass-card roadmap-card" data-id="${r.id}" style="cursor:pointer; padding:1.5rem; border-top:3px solid var(--accent-cyan);">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
        <span class="tag" style="background:rgba(139,92,246,0.15); color:var(--accent-purple); border:1px solid var(--border-purple);">Path ${idx+1}</span>
        <i class="fas fa-chevron-right" style="color:var(--accent-cyan);"></i>
      </div>
      <h3 style="font-size:1.3rem; margin-bottom:0.4rem; color:var(--text-primary);">${r.title}</h3>
      <p style="font-size:0.88rem; color:var(--text-secondary); line-clamp:2; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden;">${r.description}</p>
    </div>
  `).join('');

  const cards = grid.querySelectorAll('.roadmap-card');

  function renderRoadmapDetail(id) {
    cards.forEach(c => c.style.borderColor = 'var(--border-color)');
    const card = grid.querySelector(`[data-id="${id}"]`);
    if (card) card.style.borderColor = 'var(--accent-cyan)';

    const data = ROADMAPS_DATA.find(r => r.id === id);
    if (data && detailBox) {
      detailBox.innerHTML = `
        <div class="glass-card" style="border-left:4px solid var(--accent-cyan); padding:2rem;">
          <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:1rem;">
            <div>
              <span class="section-badge">${data.role}</span>
              <h2 style="font-size:2rem; color:var(--text-primary); margin-top:0.25rem;">${data.title}</h2>
            </div>
          </div>
          <p style="color:var(--text-secondary); font-size:1rem; margin-bottom:2rem;">${data.description}</p>

          <h4 style="color:var(--accent-cyan); margin-bottom:1rem;"><i class="fas fa-route"></i> Step-by-Step Learning Node Roadmap</h4>
          <div style="display:flex; flex-direction:column; gap:0.75rem; margin-bottom:2rem;">
            ${data.steps.map((step, sIdx) => `
              <div style="display:flex; align-items:center; gap:1rem; background:rgba(255,255,255,0.03); padding:0.75rem 1rem; border-radius:var(--radius-sm); border:1px solid var(--border-color);">
                <span style="width:28px; height:28px; border-radius:50%; background:rgba(0,240,255,0.15); color:var(--accent-cyan); display:flex; align-items:center; justify-content:center; font-weight:700; font-size:0.85rem; flex-shrink:0;">${sIdx+1}</span>
                <span style="color:var(--text-primary); font-weight:600; font-size:0.95rem;">${step}</span>
              </div>
            `).join('')}
          </div>

          <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap:1rem; margin-bottom:1.5rem;">
            <div class="glass-card" style="padding:1rem;">
              <h5 style="color:var(--success); margin-bottom:0.5rem;"><i class="fas fa-seedling"></i> Beginner Skills</h5>
              <ul style="font-size:0.85rem; color:var(--text-secondary); list-style:disc; margin-left:1.2rem;">
                ${data.beginnerSkills.map(s => `<li>${s}</li>`).join('')}
              </ul>
            </div>
            <div class="glass-card" style="padding:1rem;">
              <h5 style="color:var(--accent-blue); margin-bottom:0.5rem;"><i class="fas fa-layer-group"></i> Intermediate Skills</h5>
              <ul style="font-size:0.85rem; color:var(--text-secondary); list-style:disc; margin-left:1.2rem;">
                ${data.intermediateSkills.map(s => `<li>${s}</li>`).join('')}
              </ul>
            </div>
            <div class="glass-card" style="padding:1rem;">
              <h5 style="color:var(--accent-purple); margin-bottom:0.5rem;"><i class="fas fa-crown"></i> Advanced Skills</h5>
              <ul style="font-size:0.85rem; color:var(--text-secondary); list-style:disc; margin-left:1.2rem;">
                ${data.advancedSkills.map(s => `<li>${s}</li>`).join('')}
              </ul>
            </div>
          </div>

          <div style="display:grid; grid-template-columns: 1fr 1fr; gap:1rem;">
            <div class="glass-card" style="padding:1rem;">
              <h5 style="color:var(--warning); margin-bottom:0.4rem;"><i class="fas fa-certificate"></i> Recommended Industry Certifications</h5>
              <div style="display:flex; flex-wrap:wrap; gap:0.4rem;">
                ${data.certs.map(c => `<span class="tag" style="background:rgba(245,158,11,0.15); color:var(--warning); border:1px solid var(--warning);">${c}</span>`).join('')}
              </div>
            </div>
            <div class="glass-card" style="padding:1rem;">
              <h5 style="color:var(--accent-cyan); margin-bottom:0.4rem;"><i class="fas fa-briefcase"></i> Career Opportunities</h5>
              <p style="font-size:0.88rem; color:var(--text-secondary);">${data.opportunities}</p>
            </div>
          </div>
        </div>
      `;
    }
  }

  cards.forEach(c => {
    c.addEventListener('click', () => {
      renderRoadmapDetail(c.getAttribute('data-id'));
    });
  });

  renderRoadmapDetail("soc");
}
