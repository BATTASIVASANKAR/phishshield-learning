/* ==========================================================================
   PHISHSHIELD - CYBERSECURITY GLOSSARY ENGINE (glossary.js)
   100+ Terms Database, Real-Time Search, Alphabetical A-Z Filter Bar,
   Category Filters, Interactive Term Detail Cards
   ========================================================================== */

const GLOSSARY_TERMS = [
  { term: "Adware", category: "Malware", definition: "Software that automatically displays or downloads advertising material (often unwanted pop-ups) when a user is online." },
  { term: "Air-Gapping", category: "Security Architecture", definition: "A physical security measure ensuring a secure computer network is physically isolated from unsecured networks such as the public internet." },
  { term: "Antivirus", category: "Endpoint Security", definition: "Software designed to detect, prevent, and remove malware from computer systems." },
  { term: "API Key", category: "Authentication", definition: "A unique code passed in by computer programs calling an API to identify the calling program, developer, or website." },
  { term: "APT (Advanced Persistent Threat)", category: "Threat Actors", definition: "A stealthy threat actor (often state-sponsored) who gains unauthorized access to a computer network and remains undetected for an extended period." },
  { term: "ARP Spoofing", category: "Network Security", definition: "A technique whereby an attacker sends fake ARP messages onto a Local Area Network to associate their MAC address with the IP address of a legitimate default gateway." },
  { term: "Asymmetric Encryption", category: "Cryptography", definition: "A cryptographic system that uses pairs of keys: Public Keys (which may be disseminated widely) and Private Keys (which are known only to the owner)." },
  { term: "Authentication", category: "Identity", definition: "The process or action of verifying the identity of a user, process, or device." },
  { term: "Authorization", category: "Identity", definition: "The function of specifying access rights and permissions to resources for authenticated users." },
  { term: "Backdoor", category: "Malware", definition: "A covert method of bypassing normal authentication or security controls in a computer system or embedded device." },
  { term: "Baiting", category: "Social Engineering", definition: "A social engineering attack where an attacker leaves malware-infected USB drives or media in public places hoping victims will insert them into their PCs." },
  { term: "Banner Grabbing", category: "Reconnaissance", definition: "A technique used to gain information about a computer system on a network and the service running on open ports." },
  { term: "Biometrics", category: "Authentication", definition: "Biological measurements or physical characteristics—such as fingerprints, facial recognition, or iris scans—used for automated identity verification." },
  { term: "BitLocker", category: "Endpoint Security", definition: "A full disk encryption feature included with Microsoft Windows designed to protect data by providing encryption for entire volumes." },
  { term: "Black Hat", category: "Threat Actors", definition: "A hacker who violates computer security for little reason beyond malicious intent or personal financial gain." },
  { term: "Botnet", category: "Network Security", definition: "A network of private computers infected with malicious software and controlled as a group without the owners' knowledge." },
  { term: "Buffer Overflow", category: "Vulnerabilities", definition: "An anomaly where a program writes more data to a block of memory (buffer) than allocated, overwriting adjacent memory locations and potentially executing malicious shellcode." },
  { term: "Burp Suite", category: "Tools", definition: "An integrated platform and web proxy tool used for testing the security of web applications." },
  { term: "Certificate Authority (CA)", category: "Cryptography", definition: "An entity that issues digital certificates confirming the cryptographic public key ownership of a domain." },
  { term: "CIA Triad", category: "Fundamentals", definition: "Confidentiality, Integrity, and Availability—the three core principles of information security." },
  { term: "Ciphertext", category: "Cryptography", definition: "The encrypted output of an encryption algorithm that is unreadable without the corresponding decryption key." },
  { term: "Cloud Security", category: "Cloud", definition: "A discipline of cybersecurity dedicated to securing cloud computing systems, data, and infrastructure." },
  { term: "Command and Control (C2)", category: "Malware", definition: "Infrastructure (servers/domains) used by threat actors to issue commands to systems compromised by malware." },
  { term: "Cookie Hijacking", category: "Web Security", definition: "The exploitation of a valid computer session token (cookie) to gain unauthorized access to information or services in a computer system." },
  { term: "Credential Stuffing", category: "Authentication", definition: "Automated injection of stolen username and password pairs into website login forms to gain unauthorized account access." },
  { term: "CRL (Certificate Revocation List)", category: "Cryptography", definition: "A list of digital certificates that have been revoked by the issuing CA before their scheduled expiration date." },
  { term: "Cross-Site Scripting (XSS)", category: "Web Security", definition: "A vulnerability enabling attackers to inject client-side scripts into web pages viewed by other users." },
  { term: "CSRF (Cross-Site Request Forgery)", category: "Web Security", definition: "An attack forcing an end user to execute unwanted actions on a web application in which they are currently authenticated." },
  { term: "CVE (Common Vulnerabilities and Exposures)", category: "Vulnerabilities", definition: "A dictionary of publicly disclosed cybersecurity vulnerabilities and exposures identified by unique numbers (e.g. CVE-2021-44228)." },
  { term: "CVSS (Common Vulnerability Scoring System)", category: "Vulnerabilities", definition: "An open framework for capturing the principal characteristics of a vulnerability and producing a numerical severity score from 0.0 to 10.0." },
  { term: "Cyber Espionage", category: "Threat Actors", definition: "The act or practice of obtaining secrets without the permission of the holder from individuals, competitors, or governments using cyber methods." },
  { term: "DAST (Dynamic Application Security Testing)", category: "Application Security", definition: "Black-box security testing analyzing a web application from the outside in its running state to find vulnerabilities." },
  { term: "Data Loss Prevention (DLP)", category: "Data Protection", definition: "A set of tools and processes used to ensure sensitive data is not lost, misused, or accessed by unauthorized users." },
  { term: "DDoS (Distributed Denial of Service)", category: "Network Security", definition: "A malicious attempt to disrupt the normal traffic of a server by overwhelming it with a flood of Internet traffic from multiple botnet nodes." },
  { term: "Deepfake", category: "Social Engineering", definition: "Synthetic media in which a person in an existing image or video is replaced with someone else's likeness using AI deep learning." },
  { term: "Default Password", category: "Hardening", definition: "Factory default login credentials assigned by manufacturers to network devices, representing a severe security risk if unchanged." },
  { term: "Demilitarized Zone (DMZ)", category: "Network Security", definition: "A physical or logical subnetwork that contains and exposes an organization's external-facing services to an untrusted network." },
  { term: "Denial of Service (DoS)", category: "Network Security", definition: "A cyberattack in which the perpetrator seeks to make a machine or network resource unavailable to its intended users." },
  { term: "Dictionary Attack", category: "Password Security", definition: "An attack technique trying thousands or millions of dictionary words and known leaked passwords to break into an account." },
  { term: "Digital Forensics", category: "DFIR", definition: "A branch of forensic science encompassing the recovery and investigation of material found in digital devices." },
  { term: "Digital Signature", category: "Cryptography", definition: "A mathematical scheme for demonstrating the authenticity of digital messages or documents." },
  { term: "DKIM (DomainKeys Identified Mail)", category: "Email Security", definition: "An email authentication method designed to detect forged sender addresses by adding cryptographic signatures to emails." },
  { term: "DMARC", category: "Email Security", definition: "An email authentication, policy, and reporting protocol built on top of SPF and DKIM." },
  { term: "DNS Poisoning", category: "Network Security", definition: "A form of computer security hacking in which corrupt Domain Name System data is introduced into the DNS resolver's cache." },
  { term: "Dumpster Diving", category: "Social Engineering", definition: "Searching through trash for discarded confidential documents, passwords, or hardware." },
  { term: "EDR (Endpoint Detection and Response)", category: "Endpoint Security", definition: "An integrated endpoint security solution combining real-time continuous monitoring and collection of endpoint data with rules-based automated response." },
  { term: "Encryption", category: "Cryptography", definition: "The process of encoding information so that only authorized parties can access it." },
  { term: "Endpoint", category: "Endpoint Security", definition: "Any remote device that communicates back and forth with a network to which it is connected (laptops, mobile phones, servers)." },
  { term: "Exploit", category: "Vulnerabilities", definition: "A piece of software, chunk of data, or sequence of commands that takes advantage of a bug or vulnerability to cause unintended behavior." },
  { term: "Firewall", category: "Network Security", definition: "A network security system that monitors and controls incoming and outgoing network traffic based on predetermined security rules." },
  { term: "Grey Hat", category: "Threat Actors", definition: "A computer hacker or security expert who may sometimes violate laws or ethical standards, but does not have the malicious intent typical of a black hat." },
  { term: "Hashing", category: "Cryptography", definition: "The process of converting a string of characters into a fixed-length value or key using a one-way mathematical algorithm (e.g. SHA-256)." },
  { term: "Honeypot", category: "Security Operations", definition: "A computer security mechanism set to detect, deflect, or, in some manner, study attempts at unauthorized use of information systems." },
  { term: "HSTS (HTTP Strict Transport Security)", category: "Web Security", definition: "A web security policy mechanism that helps protect websites against man-in-the-middle attacks and cookie hijacking by enforcing HTTPS." },
  { term: "IAM (Identity and Access Management)", category: "Identity", definition: "A framework of policies and technologies for ensuring that the right users have appropriate access to technology resources." },
  { term: "IDS (Intrusion Detection System)", category: "Network Security", definition: "A device or software application that monitors a network or systems for malicious activity or policy violations." },
  { term: "Incident Response (IR)", category: "Security Operations", definition: "An organized approach to addressing and managing the aftermath of a security breach or cyberattack." },
  { term: "IPS (Intrusion Prevention System)", category: "Network Security", definition: "A network security technology that continuously monitors network traffic for malicious activity and takes automated action to prevent it." },
  { term: "ISMS (Information Security Management System)", category: "Governance", definition: "A set of policies and procedures for systematically managing an organization's sensitive data (e.g. ISO 27001)." },
  { term: "Kali Linux", category: "Tools", definition: "A Debian-derived Linux distribution designed for digital forensics and penetration testing." },
  { term: "Keylogger", category: "Malware", definition: "A type of surveillance software or hardware device that has the capability to record every keystroke you make to a log file." },
  { term: "Log Analysis", category: "Security Operations", definition: "The art and science of reviewing computer-generated log records to audit security compliance and detect threat indicators." },
  { term: "Malware", category: "Malware", definition: "Short for malicious software; an umbrella term used to refer to viruses, worms, trojans, ransomware, and spyware." },
  { term: "Man-in-the-Middle (MITM)", category: "Network Security", definition: "An attack where the attacker secretly relays and possibly alters the communications between two parties who believe they are directly communicating." },
  { term: "Metasploit", category: "Tools", definition: "A penetration testing framework that makes vulnerability exploitation and security auditing easier." },
  { term: "MFA (Multi-Factor Authentication)", category: "Authentication", definition: "An electronic authentication method in which a user is granted access to a website or application only after successfully presenting two or more pieces of evidence." },
  { term: "NIST Cybersecurity Framework", category: "Governance", definition: "A set of guidelines for mitigating organizational cybersecurity risks based on five core functions: Identify, Protect, Detect, Respond, Recover." },
  { term: "Nmap", category: "Tools", definition: "A network scanner used to discover hosts and services on a computer network by sending packets and analyzing responses." },
  { term: "OSINT (Open Source Intelligence)", category: "Reconnaissance", definition: "Data collected from publicly available sources to be used in an intelligence context." },
  { term: "OWASP", category: "Web Security", definition: "An online community that produces freely-available articles, methodologies, documentation, tools, and technologies in the field of web application security." },
  { term: "Packet Sniffing", category: "Network Security", definition: "The practice of gathering, collecting, and inspecting raw network data packets using a tool like Wireshark." },
  { term: "Password Manager", category: "Password Security", definition: "A computer program or browser extension that allows users to store, generate, and manage their complex passwords for local applications and online services." },
  { term: "Patch Management", category: "Hardening", definition: "The process of distributing and applying updates to software to fix security vulnerabilities." },
  { term: "Penetration Testing", category: "Ethical Hacking", definition: "An authorized simulated cyberattack on a computer system, performed to evaluate its security posture." },
  { term: "Phishing", category: "Social Engineering", definition: "The fraudulent practice of sending emails purporting to be from reputable companies in order to induce individuals to reveal personal information." },
  { term: "Privilege Escalation", category: "Vulnerabilities", definition: "The act of exploiting a bug, design flaw, or configuration oversight in an operating system to gain elevated access to resources." },
  { term: "Proxy Server", category: "Network Security", definition: "A server application that acts as an intermediary for requests from clients seeking resources from other servers." },
  { term: "QR Code Scam (Quishing)", category: "Social Engineering", definition: "A phishing scam leveraging malicious QR codes designed to direct mobile users to fake credential-harvesting landing pages." },
  { term: "Ransomware", category: "Malware", definition: "A type of malicious software designed to block access to a computer system or files until a sum of money is paid." },
  { term: "Reconnaissance", category: "Ethical Hacking", definition: "The preliminary phase in security testing where an attacker gathers as much information as possible about a target system." },
  { term: "Red Team", category: "Ethical Hacking", definition: "An independent group that challenges an organization to improve its effectiveness by playing the role of an adversary in simulated attacks." },
  { term: "Rootkit", category: "Malware", definition: "A collection of computer software designed to enable access to a computer or an area of its software that is not otherwise allowed while actively masking its existence." },
  { term: "SAST (Static Application Security Testing)", category: "Application Security", definition: "White-box security testing that inspects source code for vulnerabilities without executing the program." },
  { term: "Security Operations Center (SOC)", category: "Security Operations", definition: "A centralized unit within an organization that deals with security issues on an organizational and technical level." },
  { term: "SIEM", category: "Security Operations", definition: "Security Information and Event Management software that aggregates log data from enterprise infrastructure to correlate alerts." },
  { term: "Smishing", category: "Social Engineering", definition: "Phishing attacks conducted over Short Message Service (SMS) text messaging." },
  { term: "Social Engineering", category: "Social Engineering", definition: "The psychological manipulation of people into performing actions or divulging confidential information." },
  { term: "Spear Phishing", category: "Social Engineering", definition: "An email-spoofing attack that targets a specific organization or individual, seeking unauthorized access to confidential data." },
  { term: "SPF (Sender Policy Framework)", category: "Email Security", definition: "An email authentication technique that specifies which mail servers are permitted to send email on behalf of your domain." },
  { term: "Splunk", category: "Tools", definition: "A software platform widely used for searching, analyzing, and visualizing machine-generated big data and SIEM logs." },
  { term: "Spyware", category: "Malware", definition: "Software that enables a user to obtain covert information about another's computer activities by transmitting data covertly from their hard drive." },
  { term: "SQL Injection", category: "Web Security", definition: "A code injection technique used to attack data-driven applications, in which malicious SQL statements are inserted into an entry field for execution." },
  { term: "SSL/TLS", category: "Cryptography", definition: "Cryptographic protocols designed to provide communications security over a computer network." },
  { term: "Symmetric Encryption", category: "Cryptography", definition: "A type of encryption where only one key (a secret key) is used to both encrypt and decrypt electronic data." },
  { term: "Threat Hunting", category: "Security Operations", definition: "The process of proactively searching through networks to detect and isolate advanced threats that evade existing security solutions." },
  { term: "Trojan", category: "Malware", definition: "A type of malware that is often disguised as legitimate software to trick users into installing it." },
  { term: "Typosquatting", category: "Social Engineering", definition: "A form of cybersquatting relying on mistakes such as typos made by Internet users when inputting a website address into a web browser." },
  { term: "Vulnerability", category: "Vulnerabilities", definition: "A weakness in an information system, security procedure, internal control, or implementation that can be exploited by a threat source." },
  { term: "Vulnerability Assessment", category: "Vulnerabilities", definition: "A systematic review of security weaknesses in an information system." },
  { term: "Wireshark", category: "Tools", definition: "A free and open-source packet analyzer used for network troubleshooting, analysis, and protocol development." },
  { term: "Worm", category: "Malware", definition: "A standalone malware computer program that replicates itself in order to spread to other computers without human intervention." },
  { term: "Zero-Day Vulnerability", category: "Vulnerabilities", definition: "A security flaw in software that is unknown to the software vendor and has no patch available." },
  { term: "Zero-Trust", category: "Security Architecture", definition: "A strategic initiative that helps prevent successful data breaches by eliminating the concept of trust from an organization's network architecture." }
];

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('glossary-grid')) {
    initGlossaryPage();
  }
});

function initGlossaryPage() {
  const grid = document.getElementById('glossary-grid');
  const searchInput = document.getElementById('glossary-search');
  const azBar = document.getElementById('az-bar');

  let currentLetter = 'ALL';
  let currentSearch = '';

  // Render A-Z Bar
  const alphabet = ['ALL', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')];
  if (azBar) {
    azBar.innerHTML = alphabet.map(letter => `
      <button class="az-btn ${letter === 'ALL' ? 'active' : ''}" data-letter="${letter}">${letter}</button>
    `).join('');

    azBar.querySelectorAll('.az-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        azBar.querySelectorAll('.az-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentLetter = btn.getAttribute('data-letter');
        renderTerms();
      });
    });
  }

  function renderTerms() {
    grid.innerHTML = '';

    const filtered = GLOSSARY_TERMS.filter(item => {
      const matchesLetter = currentLetter === 'ALL' || item.term.toUpperCase().startsWith(currentLetter);
      const matchesSearch = item.term.toLowerCase().includes(currentSearch) ||
                            item.definition.toLowerCase().includes(currentSearch) ||
                            item.category.toLowerCase().includes(currentSearch);
      return matchesLetter && matchesSearch;
    });

    if (filtered.length === 0) {
      grid.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding:3rem; color:var(--text-muted);">
        No cybersecurity terms found matching criteria.
      </div>`;
      return;
    }

    filtered.forEach(item => {
      const card = document.createElement('div');
      card.className = 'glass-card glossary-card';
      card.style.padding = '1.25rem';

      card.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:0.5rem;">
          <h3 style="font-size:1.25rem; color:var(--text-primary);">${item.term}</h3>
          <span class="tag" style="background:rgba(139,92,246,0.15); color:var(--accent-purple); border:1px solid var(--border-purple); font-size:0.7rem;">${item.category}</span>
        </div>
        <p style="color:var(--text-secondary); font-size:0.9rem; line-height:1.5;">${item.definition}</p>
      `;

      grid.appendChild(card);
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value.trim().toLowerCase();
      renderTerms();
    });
  }

  renderTerms();
}
