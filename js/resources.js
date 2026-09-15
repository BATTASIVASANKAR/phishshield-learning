/* ==========================================================================
   PHISHSHIELD - RESOURCE CENTER ENGINE (resources.js)
   Complete Resource Center with 15 educational resources, search, filters,
   modals, interactive checklists, progress tracking, badges, and downloads.
   ========================================================================== */

/* ======================== RESOURCE DATA ======================== */
const RESOURCES_DATA = [
  {
    id: "res-cybersecurity-beginner",
    title: "Cybersecurity Beginner Guide",
    category: "Cybersecurity Basics",
    icon: "fas fa-shield-halved",
    description: "A comprehensive introduction to cybersecurity fundamentals covering the CIA Triad, common threats, vulnerabilities, and essential security concepts every beginner must know.",
    difficulty: "Beginner",
    type: "Guide",
    keywords: ["cybersecurity", "beginner", "CIA triad", "threat", "vulnerability", "risk", "MFA", "encryption", "firewall", "malware"],
    fileName: "cybersecurity-beginner-guide.html",
    tableOfContents: [
      "What is Cybersecurity?", "The CIA Triad", "Threats & Vulnerabilities", "Risk & Attack Surface",
      "Authentication & Authorization", "Encryption & Hashing", "Multi-Factor Authentication",
      "Firewalls, IDS & IPS", "Malware & Phishing", "Cyber Hygiene Best Practices"
    ],
    keyTakeaways: [
      "Cybersecurity protects systems, networks, and data from digital attacks",
      "The CIA Triad (Confidentiality, Integrity, Availability) is the foundation of security",
      "Always use MFA and strong, unique passwords",
      "Keep software updated and practice good cyber hygiene",
      "Never click unknown links or download suspicious attachments"
    ],
    securityTips: [
      "Enable MFA on all critical accounts immediately",
      "Use a password manager for unique, long passwords",
      "Regularly update your operating system and applications",
      "Be cautious with public Wi-Fi networks — use a VPN"
    ],
    contentHTML: `
      <h3>What is Cybersecurity?</h3>
      <p>Cybersecurity is the practice of protecting systems, networks, programs, and data from digital attacks, unauthorized access, damage, or theft. It encompasses technologies, processes, and practices designed to safeguard information integrity, confidentiality, and availability.</p>

      <h3>The CIA Triad</h3>
      <p>The CIA Triad is the foundational model for information security:</p>
      <ul>
        <li><strong>Confidentiality:</strong> Ensuring that information is accessible only to authorized individuals. Methods include encryption, access controls, and data classification.</li>
        <li><strong>Integrity:</strong> Maintaining the accuracy and completeness of data. Achieved through hashing, checksums, digital signatures, and version control.</li>
        <li><strong>Availability:</strong> Ensuring that information and resources are accessible to authorized users when needed. Maintained through redundancy, backups, and disaster recovery plans.</li>
      </ul>

      <h3>Threats & Vulnerabilities</h3>
      <p><strong>Threat:</strong> Any potential cause of an unwanted incident that may result in harm to a system or organization. Examples include hackers, malware, insider threats, and natural disasters.</p>
      <p><strong>Vulnerability:</strong> A weakness in a system that can be exploited by a threat. Examples include unpatched software, weak passwords, misconfigured firewalls, and lack of encryption.</p>

      <h3>Risk & Attack Surface</h3>
      <p><strong>Risk</strong> = Threat × Vulnerability × Impact. Risk management involves identifying, assessing, and prioritizing risks followed by coordinated efforts to minimize impact.</p>
      <p><strong>Attack Surface:</strong> The total sum of all possible entry points where an unauthorized user could try to enter or extract data. This includes open ports, running services, web forms, APIs, and physical access points.</p>

      <h3>Authentication & Authorization</h3>
      <p><strong>Authentication:</strong> Verifying the identity of a user or system (Who are you?). Methods include passwords, biometrics, tokens, and certificates.</p>
      <p><strong>Authorization:</strong> Determining what an authenticated user is allowed to do (What can you access?). Implemented through role-based access control (RBAC) and permissions.</p>

      <h3>Encryption & Hashing</h3>
      <p><strong>Encryption:</strong> The process of converting plaintext into ciphertext using an algorithm and a key. It is reversible with the correct key. Common algorithms: AES-256, RSA, ChaCha20.</p>
      <p><strong>Hashing:</strong> A one-way function that converts data into a fixed-size hash value. It is irreversible. Used for password storage and integrity checks. Common algorithms: SHA-256, bcrypt, Argon2.</p>

      <h3>Multi-Factor Authentication (MFA)</h3>
      <p>MFA requires two or more independent factors to verify identity:</p>
      <ul>
        <li><strong>Something you know:</strong> Password, PIN</li>
        <li><strong>Something you have:</strong> Phone, hardware key (YubiKey)</li>
        <li><strong>Something you are:</strong> Fingerprint, face recognition</li>
      </ul>

      <h3>Firewalls, IDS & IPS</h3>
      <ul>
        <li><strong>Firewall:</strong> A network security device that monitors and filters incoming and outgoing traffic based on predefined rules. Types: packet filtering, stateful, application-layer, NGFW.</li>
        <li><strong>IDS (Intrusion Detection System):</strong> Monitors network traffic for suspicious activity and sends alerts. Does not block traffic.</li>
        <li><strong>IPS (Intrusion Prevention System):</strong> Actively blocks detected threats in real-time. Sits inline with network traffic.</li>
      </ul>

      <h3>Malware & Phishing</h3>
      <p><strong>Malware:</strong> Malicious software designed to harm, including viruses, worms, Trojans, ransomware, spyware, and adware.</p>
      <p><strong>Phishing:</strong> Social engineering attacks that trick users into revealing sensitive information through fake emails, websites, or messages.</p>
      <p><strong>Ransomware:</strong> Malware that encrypts victim's files and demands payment for the decryption key.</p>

      <h3>Cyber Hygiene Best Practices</h3>
      <ul>
        <li>Use strong, unique passwords for every account</li>
        <li>Enable MFA everywhere possible</li>
        <li>Keep all software and systems updated</li>
        <li>Back up data regularly using the 3-2-1 rule</li>
        <li>Verify email senders before clicking links</li>
        <li>Use antivirus and endpoint protection software</li>
        <li>Avoid using public Wi-Fi without a VPN</li>
        <li>Review app permissions and remove unused apps</li>
      </ul>
    `
  },
  {
    id: "res-phishing-awareness",
    title: "Phishing Awareness Guide",
    category: "Phishing",
    icon: "fas fa-fish",
    description: "Learn to identify and defend against all types of phishing attacks including email, spear, smishing, vishing, QR phishing, and AI-powered phishing techniques.",
    difficulty: "Beginner",
    type: "Guide",
    keywords: ["phishing", "email", "spear phishing", "smishing", "vishing", "social engineering", "fake links", "prevention"],
    fileName: "phishing-awareness-guide.html",
    tableOfContents: [
      "What is Phishing?", "How Phishing Works", "Email Phishing", "Spear Phishing",
      "Smishing (SMS Phishing)", "Vishing (Voice Phishing)", "QR Phishing (Quishing)",
      "Social Media Phishing", "AI-Powered Phishing", "Red Flags & Detection",
      "What To Do After Clicking", "Prevention Checklist"
    ],
    keyTakeaways: [
      "Phishing is the most common initial attack vector for data breaches",
      "Always verify sender identity before clicking any link",
      "Urgency and fear are primary manipulation tactics",
      "Hover over links to inspect true destinations before clicking",
      "Report suspicious messages to your IT/security team"
    ],
    securityTips: [
      "Never share OTPs or passwords via email, SMS, or phone",
      "Enable anti-phishing features in your email client",
      "Verify requests through official channels independently",
      "Use browser extensions that detect phishing URLs"
    ],
    contentHTML: `
      <h3>What is Phishing?</h3>
      <p>Phishing is a type of social engineering attack where attackers impersonate trusted entities to trick victims into revealing sensitive information such as passwords, credit card numbers, or personal data. It remains the #1 attack vector used in data breaches worldwide.</p>

      <h3>How Phishing Works</h3>
      <ol>
        <li><strong>Research:</strong> Attacker gathers information about the target from social media, data leaks, or public records.</li>
        <li><strong>Bait Creation:</strong> A convincing fake message (email, SMS, website) is crafted to mimic a trusted source.</li>
        <li><strong>Delivery:</strong> The phishing message is sent to the victim via email, SMS, phone call, or social media.</li>
        <li><strong>Exploitation:</strong> Victim clicks a malicious link, opens an attachment, or provides credentials.</li>
        <li><strong>Data Theft:</strong> Stolen information is used for identity theft, financial fraud, or further attacks.</li>
      </ol>

      <h3>Email Phishing</h3>
      <p>The most common form. Mass emails are sent impersonating banks, tech companies, or government agencies. They contain fake links leading to credential-harvesting websites that look identical to legitimate login pages.</p>

      <h3>Spear Phishing</h3>
      <p>Highly targeted attacks aimed at specific individuals or organizations. Attackers research their targets extensively to craft personalized, convincing messages. Much harder to detect than generic phishing.</p>

      <h3>Smishing (SMS Phishing)</h3>
      <p>Phishing via text messages. Common tactics include fake delivery notifications, bank alerts, OTP requests, and prize notifications. Links in SMS often lead to phishing websites or malware downloads.</p>

      <h3>Vishing (Voice Phishing)</h3>
      <p>Phone-based phishing where attackers call pretending to be bank representatives, tech support, or government officials. They use urgency and fear to extract sensitive information or convince victims to transfer money.</p>

      <h3>QR Phishing (Quishing)</h3>
      <p>Attackers create malicious QR codes that redirect to phishing websites when scanned. These can be placed on posters, menus, parking meters, or sent via email. Always verify QR code sources before scanning.</p>

      <h3>Social Media Phishing</h3>
      <p>Fake profiles, friend requests, and direct messages on platforms like LinkedIn, Facebook, and Instagram. Attackers may impersonate colleagues, recruiters, or celebrities to gain trust.</p>

      <h3>AI-Powered Phishing</h3>
      <p>Modern attackers use AI to generate highly convincing phishing emails with perfect grammar, personalized content, and deepfake voices or videos. AI tools can automate the creation of thousands of unique phishing messages.</p>

      <h3>Red Flags & Detection</h3>
      <ul>
        <li>Suspicious sender domain (e.g., @paypa1.com instead of @paypal.com)</li>
        <li>Urgent language: "Act now!", "Your account will be suspended!"</li>
        <li>Generic greetings: "Dear Customer" instead of your name</li>
        <li>Mismatched URLs when hovering over links</li>
        <li>Unexpected attachments (especially .exe, .zip, .macro-enabled docs)</li>
        <li>Spelling and grammar errors (though AI has reduced these)</li>
        <li>Requests for sensitive information (passwords, OTPs, SSN)</li>
        <li>Fake login pages with slightly different URLs</li>
      </ul>

      <h3>How to Verify Messages</h3>
      <ul>
        <li>Contact the organization directly using their official website or phone number</li>
        <li>Do NOT use contact information provided in the suspicious message</li>
        <li>Check email headers for sender IP and authentication results</li>
        <li>Use URL scanning tools like VirusTotal before clicking</li>
      </ul>

      <h3>What To Do After Clicking a Phishing Link</h3>
      <ol>
        <li>Disconnect from the internet immediately</li>
        <li>Change passwords for affected accounts</li>
        <li>Enable MFA on all accounts</li>
        <li>Run a full antivirus scan</li>
        <li>Monitor accounts for unauthorized activity</li>
        <li>Report to IT security team and relevant authorities</li>
        <li>Document the incident for future reference</li>
      </ol>

      <h3>Prevention Checklist</h3>
      <ul>
        <li>Verify sender identity before responding to any message</li>
        <li>Hover over links to check actual URL destinations</li>
        <li>Never share passwords, OTPs, or PINs via any channel</li>
        <li>Enable MFA on all accounts</li>
        <li>Keep security software updated</li>
        <li>Report suspicious messages immediately</li>
        <li>Use email filtering and anti-phishing tools</li>
        <li>Attend regular security awareness training</li>
      </ul>
    `
  },
  {
    id: "res-phishing-checklist",
    title: "Phishing Red Flags Checklist",
    category: "Phishing",
    icon: "fas fa-clipboard-check",
    description: "A printable, quick-reference checklist of 11 critical red flags to check before trusting any email, SMS, or message. Perfect for desk reference.",
    difficulty: "Beginner",
    type: "Checklist",
    keywords: ["phishing", "checklist", "red flags", "verification", "printable", "email safety"],
    fileName: "phishing-red-flags-checklist.html",
    tableOfContents: [
      "Sender Verification", "Domain Check", "Link Inspection", "Urgency Detection",
      "Attachment Safety", "Spelling & Grammar", "Independent Verification",
      "OTP Protection", "Password Protection", "MFA Enablement", "Reporting"
    ],
    keyTakeaways: [
      "Always verify sender email addresses character by character",
      "Hover over every link before clicking — compare with official URLs",
      "Urgency is the #1 manipulation tactic in phishing",
      "Never share OTPs or passwords with anyone, ever",
      "Enable MFA as your strongest defense layer"
    ],
    securityTips: [
      "Print this checklist and keep it at your desk",
      "Share it with family members and colleagues",
      "Review every unexpected email against this list",
      "When in doubt, verify independently through official channels"
    ],
    contentHTML: `
      <h3>Phishing Red Flags — Quick Reference</h3>
      <p>Use this checklist every time you receive a suspicious email, SMS, or message. Check each item carefully before taking any action.</p>

      <div class="highlight-box">
        <strong>⚠️ If ANY of these red flags are present, treat the message as potentially malicious.</strong>
      </div>

      <h3>✅ Checklist Items</h3>
      <ol>
        <li><strong>Verify Sender:</strong> Check the sender's display name AND full email address. Attackers often use names like "PayPal Support" with addresses like support@paypa1-secure.com.</li>
        <li><strong>Check Sender Domain:</strong> Inspect the domain after the @ symbol. Look for typosquatting: microsofft.com, amaz0n.com, g00gle.com. Compare with the official domain.</li>
        <li><strong>Inspect Links:</strong> Hover over all links WITHOUT clicking. The actual URL should match the expected domain. Watch for URL shorteners (bit.ly) hiding real destinations.</li>
        <li><strong>Watch for Urgent Language:</strong> "URGENT!", "Act within 24 hours!", "Your account will be terminated!" — Legitimate organizations rarely pressure you with extreme urgency.</li>
        <li><strong>Avoid Unexpected Attachments:</strong> Never open attachments you weren't expecting, especially .exe, .zip, .js, .scr, or macro-enabled documents (.docm, .xlsm).</li>
        <li><strong>Check Spelling & Grammar:</strong> While AI has improved phishing quality, many attacks still contain unusual phrasing, grammar mistakes, or formatting inconsistencies.</li>
        <li><strong>Verify Independently:</strong> If a message claims to be from your bank or a service provider, contact them directly using the phone number or website you already know — NOT the one in the message.</li>
        <li><strong>Never Share OTP:</strong> One-Time Passwords are for YOUR use only. No legitimate company will ever ask for your OTP via email, phone, or SMS.</li>
        <li><strong>Never Share Passwords:</strong> No bank, company, or IT department will ever ask for your password. If asked, it's a scam. Period.</li>
        <li><strong>Enable MFA:</strong> Multi-Factor Authentication is your strongest defense. Even if credentials are stolen, MFA prevents unauthorized access.</li>
        <li><strong>Report Suspicious Messages:</strong> Forward phishing emails to your IT security team, use the "Report Phishing" button in your email client, and report to relevant authorities.</li>
      </ol>

      <div class="warning-box">
        <strong>🚨 Remember:</strong> Phishing attacks are becoming increasingly sophisticated with AI. Even if a message looks perfect, always verify through independent channels before taking action.
      </div>
    `
  },
  {
    id: "res-password-security",
    title: "Password Security Guide",
    category: "Password Security",
    icon: "fas fa-key",
    description: "Master password security with this comprehensive guide covering strong password creation, password managers, MFA, passkeys, and protection against brute force and credential attacks.",
    difficulty: "Beginner",
    type: "Guide",
    keywords: ["password", "security", "MFA", "password manager", "brute force", "credential stuffing", "passkeys"],
    fileName: "password-security-guide.html",
    tableOfContents: [
      "Strong Password Principles", "Password Length & Complexity", "Password Managers",
      "Multi-Factor Authentication", "Passkeys", "OTP Security", "Password Reuse Dangers",
      "Brute Force Attacks", "Dictionary Attacks", "Credential Stuffing",
      "Account Recovery", "Password Security Checklist"
    ],
    keyTakeaways: [
      "Length is more important than complexity — aim for 16+ characters",
      "Never reuse passwords across different accounts",
      "Use a reputable password manager for all accounts",
      "Enable MFA on every account that supports it",
      "Passkeys are the future of passwordless authentication"
    ],
    securityTips: [
      "Use passphrases: 'correct-horse-battery-staple' is stronger and easier to remember",
      "Set up a password manager today — start with Bitwarden (free & open source)",
      "Check haveibeenpwned.com to see if your credentials have been leaked",
      "Use hardware security keys (YubiKey) for highest security accounts"
    ],
    contentHTML: `
      <h3>Strong Password Principles</h3>
      <p>A strong password is your first line of defense against unauthorized access. Modern password security goes beyond just mixing letters and numbers.</p>
      <ul>
        <li><strong>Length over complexity:</strong> A 20-character passphrase is stronger than an 8-character complex password</li>
        <li><strong>Uniqueness:</strong> Every account must have a different password</li>
        <li><strong>Unpredictability:</strong> Avoid personal information, dictionary words, and common patterns</li>
        <li><strong>Regular auditing:</strong> Check for compromised credentials periodically</li>
      </ul>

      <h3>Password Length & Complexity</h3>
      <p>Password cracking time increases exponentially with length:</p>
      <ul>
        <li>8 characters: Can be cracked in minutes to hours</li>
        <li>12 characters: Can take years to crack</li>
        <li>16+ characters: Practically impossible with current technology</li>
        <li>Use a mix of uppercase, lowercase, numbers, and special characters</li>
      </ul>

      <h3>Password Managers</h3>
      <p>Password managers generate, store, and auto-fill unique passwords for every account. You only need to remember one master password.</p>
      <ul>
        <li><strong>Bitwarden:</strong> Free, open source, cross-platform</li>
        <li><strong>1Password:</strong> Premium, excellent UI, travel mode</li>
        <li><strong>KeePass:</strong> Free, offline, highly customizable</li>
      </ul>

      <h3>Multi-Factor Authentication (MFA)</h3>
      <p>MFA adds additional verification layers beyond your password:</p>
      <ul>
        <li><strong>Best:</strong> Hardware security keys (YubiKey, Google Titan)</li>
        <li><strong>Good:</strong> Authenticator apps (Google Authenticator, Authy)</li>
        <li><strong>Acceptable:</strong> SMS-based OTP (vulnerable to SIM swapping)</li>
      </ul>

      <h3>Passkeys</h3>
      <p>Passkeys are a modern, phishing-resistant authentication method that replaces passwords entirely. They use cryptographic key pairs stored on your device, authenticated by biometrics or device PIN. Supported by Google, Apple, and Microsoft.</p>

      <h3>OTP Security</h3>
      <ul>
        <li>Never share OTPs with anyone, even if they claim to be from your bank</li>
        <li>OTPs expire quickly — this is by design for security</li>
        <li>Use authenticator apps instead of SMS-based OTP when possible</li>
        <li>Be suspicious of unsolicited OTP messages — someone may be trying to access your account</li>
      </ul>

      <h3>Password Reuse Dangers</h3>
      <p>When you reuse passwords, a breach at one service compromises all your accounts. In credential stuffing attacks, hackers use leaked username/password pairs to automatically try logging into thousands of other services.</p>

      <h3>Brute Force & Dictionary Attacks</h3>
      <p><strong>Brute Force:</strong> Systematically trying every possible character combination. Longer passwords make this impractical.</p>
      <p><strong>Dictionary Attacks:</strong> Using lists of common words, phrases, and previously leaked passwords. Avoid dictionary words and common substitutions (p@ssw0rd).</p>

      <h3>Credential Stuffing</h3>
      <p>Attackers use billions of leaked credentials from data breaches to automatically attempt logins across many websites. This succeeds because people reuse passwords. The solution: unique passwords for every account.</p>

      <h3>Account Recovery</h3>
      <ul>
        <li>Set up recovery email and phone number for important accounts</li>
        <li>Store backup codes for MFA in a secure location</li>
        <li>Use security questions with answers that aren't easily guessable</li>
        <li>Consider using a different email for account recovery than for daily use</li>
      </ul>

      <h3>Password Security Checklist</h3>
      <ul>
        <li>✅ Use 16+ character passwords or passphrases</li>
        <li>✅ Never reuse passwords across accounts</li>
        <li>✅ Use a password manager for all accounts</li>
        <li>✅ Enable MFA on every account possible</li>
        <li>✅ Check haveibeenpwned.com regularly</li>
        <li>✅ Use passkeys where supported</li>
        <li>✅ Store MFA backup codes securely</li>
        <li>✅ Never share passwords or OTPs with anyone</li>
      </ul>
    `
  },
  {
    id: "res-email-security",
    title: "Email Security Checklist",
    category: "Email Security",
    icon: "fas fa-envelope-open-text",
    description: "Complete email security checklist covering sender verification, SPF/DKIM/DMARC authentication, link inspection, attachment safety, and phishing detection techniques.",
    difficulty: "Intermediate",
    type: "Checklist",
    keywords: ["email", "security", "SPF", "DKIM", "DMARC", "phishing", "sender verification", "attachment"],
    fileName: "email-security-checklist.html",
    tableOfContents: [
      "Sender Verification", "Domain Verification", "Link Inspection", "Attachment Safety",
      "SPF (Sender Policy Framework)", "DKIM (DomainKeys Identified Mail)", "DMARC",
      "Reply-To Checking", "Phishing Detection", "Reporting Suspicious Emails"
    ],
    keyTakeaways: [
      "SPF, DKIM, and DMARC together provide strong email authentication",
      "Always verify the Reply-To address — it may differ from the sender",
      "Dangerous attachments include .exe, .scr, .js, .vbs, and macro-enabled docs",
      "Check email headers for authentication pass/fail results",
      "Report phishing to protect yourself and others"
    ],
    securityTips: [
      "Configure your email client to show full sender addresses",
      "Disable automatic image loading in emails",
      "Use email encryption (S/MIME or PGP) for sensitive communications",
      "Set up email alerts for login from new devices"
    ],
    contentHTML: `
      <h3>Sender Verification</h3>
      <p>Always check the full email address, not just the display name. Attackers can set any display name they want. Look for:</p>
      <ul>
        <li>Misspelled domains (microsofft.com, amaz0n.com)</li>
        <li>Extra subdomains (login.paypal.com.attacker.com)</li>
        <li>Free email services claiming to be companies (paypal.support@gmail.com)</li>
      </ul>

      <h3>Domain Verification</h3>
      <p>Verify the domain matches the organization's official domain. Cross-reference with the company's official website. Be aware of lookalike domains using special characters or alternative TLDs.</p>

      <h3>Link Inspection</h3>
      <ul>
        <li>Hover over links to preview the actual URL</li>
        <li>Check for HTTPS and valid SSL certificates</li>
        <li>Be wary of URL shorteners (bit.ly, tinyurl.com)</li>
        <li>Use URL scanners like VirusTotal before clicking suspicious links</li>
        <li>Compare the URL domain with the official domain</li>
      </ul>

      <h3>Attachment Safety</h3>
      <div class="warning-box">
        <strong>🚨 High-Risk File Types:</strong> .exe, .scr, .js, .vbs, .bat, .cmd, .msi, .ps1, .zip (containing executables), .docm, .xlsm (macro-enabled Office files)
      </div>
      <ul>
        <li>Never open unexpected attachments</li>
        <li>Scan attachments with antivirus before opening</li>
        <li>Be cautious of macro-enabled documents — disable macros by default</li>
        <li>Verify with the sender through a separate channel if unsure</li>
      </ul>

      <h3>SPF (Sender Policy Framework)</h3>
      <p>SPF allows domain owners to specify which mail servers are authorized to send emails on behalf of their domain. When an email arrives, the receiving server checks the SPF record to verify the sending server is authorized.</p>

      <h3>DKIM (DomainKeys Identified Mail)</h3>
      <p>DKIM adds a digital signature to outgoing emails. The receiving server can verify this signature against the public key in DNS to confirm the email was not altered in transit and was sent by an authorized server.</p>

      <h3>DMARC</h3>
      <p>DMARC builds on SPF and DKIM, telling receiving servers what to do when emails fail authentication (none, quarantine, or reject). It also provides reporting on email authentication results.</p>

      <h3>Reply-To Checking</h3>
      <p>The Reply-To address can be different from the sender address. Attackers may send from a legitimate-looking address but set the Reply-To to their own address to capture your responses.</p>

      <h3>Phishing Detection</h3>
      <ul>
        <li>Check for urgency and threatening language</li>
        <li>Look for spelling errors and unusual formatting</li>
        <li>Verify requests through official channels</li>
        <li>Be suspicious of requests for personal or financial information</li>
        <li>Check email headers for authentication results (SPF pass/fail)</li>
      </ul>

      <h3>Reporting Suspicious Emails</h3>
      <ul>
        <li>Use the "Report Phishing" button in your email client</li>
        <li>Forward phishing emails to your IT/security team</li>
        <li>Report to reportphishing@apwg.org (Anti-Phishing Working Group)</li>
        <li>Do not forward phishing emails to colleagues — report to IT only</li>
        <li>Document the incident with screenshots and email headers</li>
      </ul>
    `
  },
  {
    id: "res-network-security",
    title: "Network Security Basics",
    category: "Network Security",
    icon: "fas fa-network-wired",
    description: "Understand network security fundamentals including firewalls, IDS/IPS, VPN, proxy servers, secure protocols, ports, and network segmentation practices.",
    difficulty: "Intermediate",
    type: "Guide",
    keywords: ["network", "firewall", "IDS", "IPS", "VPN", "proxy", "NAT", "ports", "protocols", "segmentation"],
    fileName: "network-security-basics.html",
    tableOfContents: [
      "Network Security Fundamentals", "Firewalls", "IDS & IPS", "VPN", "Proxy Servers",
      "NAT", "Common Ports", "Secure Protocols", "Network Segmentation", "Best Practices"
    ],
    keyTakeaways: [
      "Defense-in-depth uses multiple security layers for comprehensive protection",
      "Firewalls are the first line of network defense",
      "VPNs encrypt traffic but don't make you anonymous",
      "Network segmentation limits the blast radius of breaches",
      "Always use secure protocols (HTTPS, SSH, SFTP) over insecure ones"
    ],
    securityTips: [
      "Change default passwords on all network devices",
      "Disable unused ports and services",
      "Use network monitoring tools to detect anomalies",
      "Implement the principle of least privilege for network access"
    ],
    contentHTML: `
      <h3>Network Security Fundamentals</h3>
      <p>Network security involves policies, practices, and technologies designed to protect the integrity, confidentiality, and accessibility of computer networks and data. It uses a defense-in-depth approach with multiple layers of protection.</p>

      <h3>Firewalls</h3>
      <p>Firewalls monitor and control incoming and outgoing network traffic based on predetermined security rules:</p>
      <ul>
        <li><strong>Packet Filtering:</strong> Examines individual packets based on source/destination IP, port, and protocol</li>
        <li><strong>Stateful Inspection:</strong> Tracks active connections and makes decisions based on context</li>
        <li><strong>Application Layer (WAF):</strong> Inspects application-level traffic (HTTP, HTTPS)</li>
        <li><strong>Next-Generation (NGFW):</strong> Combines traditional firewall with deep packet inspection, IPS, and application awareness</li>
      </ul>

      <h3>IDS & IPS</h3>
      <p><strong>IDS (Intrusion Detection System):</strong> Passively monitors network traffic and alerts administrators to suspicious activity. Does not block traffic. Types: Network-based (NIDS), Host-based (HIDS). Examples: Snort, Suricata.</p>
      <p><strong>IPS (Intrusion Prevention System):</strong> Actively blocks malicious traffic in real-time. Sits inline with network traffic. Can drop packets, reset connections, or block source IPs.</p>

      <h3>VPN (Virtual Private Network)</h3>
      <p>VPNs create encrypted tunnels between your device and a VPN server, protecting your traffic from eavesdropping on untrusted networks. Protocols: WireGuard, OpenVPN, IPSec/IKEv2.</p>

      <h3>Proxy Servers</h3>
      <p>Proxy servers act as intermediaries between users and the internet. They can filter content, cache data, and mask IP addresses. Types: Forward proxy, reverse proxy, transparent proxy, SOCKS proxy.</p>

      <h3>NAT (Network Address Translation)</h3>
      <p>NAT translates private IP addresses to public IP addresses, allowing multiple devices to share a single public IP. It provides a basic level of security by hiding internal network structure.</p>

      <h3>Common Ports</h3>
      <ul>
        <li><strong>20/21:</strong> FTP (File Transfer)</li>
        <li><strong>22:</strong> SSH (Secure Shell)</li>
        <li><strong>25:</strong> SMTP (Email Sending)</li>
        <li><strong>53:</strong> DNS (Domain Resolution)</li>
        <li><strong>80:</strong> HTTP (Web)</li>
        <li><strong>443:</strong> HTTPS (Secure Web)</li>
        <li><strong>3389:</strong> RDP (Remote Desktop)</li>
        <li><strong>3306:</strong> MySQL Database</li>
      </ul>

      <h3>Secure Protocols</h3>
      <ul>
        <li><strong>HTTPS</strong> instead of HTTP (encrypted web traffic)</li>
        <li><strong>SSH</strong> instead of Telnet (encrypted remote access)</li>
        <li><strong>SFTP/SCP</strong> instead of FTP (encrypted file transfer)</li>
        <li><strong>TLS 1.3</strong> for transport layer encryption</li>
        <li><strong>WPA3</strong> for Wi-Fi security</li>
      </ul>

      <h3>Network Segmentation</h3>
      <p>Dividing a network into smaller segments or subnets to limit the spread of threats. Use VLANs, firewalls, and access controls to isolate critical systems. The principle: if an attacker breaches one segment, they cannot easily access others.</p>

      <h3>Basic Network Security Best Practices</h3>
      <ul>
        <li>Change default credentials on all network devices</li>
        <li>Disable unused ports and services</li>
        <li>Implement network segmentation</li>
        <li>Use VPNs for remote access</li>
        <li>Monitor network traffic for anomalies</li>
        <li>Keep firmware and software updated</li>
        <li>Use strong Wi-Fi encryption (WPA3)</li>
        <li>Implement the principle of least privilege</li>
      </ul>
    `
  },
  {
    id: "res-safe-browsing",
    title: "Safe Browsing Guide",
    category: "Web Security",
    icon: "fas fa-globe",
    description: "Stay safe online with this guide covering HTTPS, TLS certificates, typosquatting, browser security settings, extensions, cookies, and privacy best practices.",
    difficulty: "Beginner",
    type: "Guide",
    keywords: ["browsing", "HTTPS", "TLS", "typosquatting", "cookies", "extensions", "privacy", "downloads", "browser"],
    fileName: "safe-browsing-guide.html",
    tableOfContents: [
      "HTTPS & TLS", "Domain Names & Typosquatting", "Browser Updates", "Extensions & Add-ons",
      "Safe Downloads", "Pop-ups & Redirects", "Cookies & Tracking", "Password Autofill",
      "Public Computer Safety", "Browser Privacy Settings"
    ],
    keyTakeaways: [
      "Always check for HTTPS and a valid certificate before entering credentials",
      "Typosquatting uses slightly misspelled domains to trick users",
      "Only install browser extensions from official stores with good reviews",
      "Clear cookies and browsing data regularly",
      "Use private/incognito mode on shared or public computers"
    ],
    securityTips: [
      "Install uBlock Origin to block malicious ads and trackers",
      "Enable 'HTTPS-Only Mode' in your browser settings",
      "Use a DNS service with malware blocking (e.g., Cloudflare 1.1.1.2)",
      "Review installed browser extensions monthly and remove unused ones"
    ],
    contentHTML: `
      <h3>HTTPS & TLS</h3>
      <p><strong>HTTPS (HyperText Transfer Protocol Secure)</strong> encrypts data between your browser and the website using TLS (Transport Layer Security). Always verify the padlock icon in the address bar before entering sensitive information.</p>
      <p><strong>Warning:</strong> HTTPS only means the connection is encrypted — it doesn't guarantee the website is legitimate. Phishing sites can also use HTTPS.</p>

      <h3>Domain Names & Typosquatting</h3>
      <p>Typosquatting is when attackers register domains that are slight misspellings of popular websites:</p>
      <ul>
        <li>gogle.com instead of google.com</li>
        <li>amaz0n.com instead of amazon.com</li>
        <li>faceb00k.com instead of facebook.com</li>
      </ul>
      <p>Always check the URL carefully, especially when clicking links from emails or messages.</p>

      <h3>Browser Updates</h3>
      <p>Keep your browser updated to the latest version. Browser updates patch critical security vulnerabilities that could be exploited by attackers. Enable automatic updates whenever possible.</p>

      <h3>Extensions & Add-ons</h3>
      <ul>
        <li>Only install extensions from official browser stores</li>
        <li>Check reviews, ratings, and number of users before installing</li>
        <li>Review extension permissions — be wary of extensions requesting broad access</li>
        <li>Remove extensions you no longer use</li>
        <li>Recommended security extensions: uBlock Origin, HTTPS Everywhere, Privacy Badger</li>
      </ul>

      <h3>Safe Downloads</h3>
      <ul>
        <li>Only download software from official websites or app stores</li>
        <li>Verify file checksums (SHA-256) when available</li>
        <li>Scan downloaded files with antivirus before opening</li>
        <li>Be cautious of "free" versions of paid software</li>
        <li>Avoid downloading from pop-up prompts or unknown sources</li>
      </ul>

      <h3>Pop-ups & Redirects</h3>
      <p>Enable pop-up blockers in your browser. Never click on pop-ups claiming your computer is infected or that you've won a prize. These are common social engineering tactics that lead to malware or scam sites.</p>

      <h3>Cookies & Tracking</h3>
      <ul>
        <li>Regularly clear cookies and browsing data</li>
        <li>Block third-party cookies in browser settings</li>
        <li>Use cookie management extensions to control which sites can store cookies</li>
        <li>Understand that cookies can track your activity across websites</li>
      </ul>

      <h3>Password Autofill</h3>
      <p>Be cautious with browser password autofill — it can be exploited by hidden form fields on malicious pages. Use a dedicated password manager instead of browser-built-in autofill for better security.</p>

      <h3>Public Computer Safety</h3>
      <ul>
        <li>Always use private/incognito browsing mode</li>
        <li>Never save passwords on public computers</li>
        <li>Log out of all accounts when finished</li>
        <li>Clear browsing data before leaving</li>
        <li>Avoid accessing sensitive accounts (banking) on public computers</li>
      </ul>

      <h3>Browser Privacy Settings</h3>
      <ul>
        <li>Enable Do Not Track requests</li>
        <li>Block third-party cookies</li>
        <li>Disable location sharing for untrusted sites</li>
        <li>Use HTTPS-Only mode</li>
        <li>Enable Enhanced Tracking Protection</li>
        <li>Consider using privacy-focused browsers (Firefox, Brave)</li>
      </ul>
    `
  },
  {
    id: "res-mobile-security",
    title: "Mobile Security Checklist",
    category: "Mobile Security",
    icon: "fas fa-mobile-screen-button",
    description: "Protect your mobile device with this comprehensive checklist covering app permissions, store safety, updates, lock screens, banking security, and public Wi-Fi protection.",
    difficulty: "Beginner",
    type: "Checklist",
    keywords: ["mobile", "phone", "app", "permissions", "banking", "QR", "SMS", "Wi-Fi", "backup", "security"],
    fileName: "mobile-security-checklist.html",
    tableOfContents: [
      "App Permissions", "Official App Stores", "Device Updates", "Screen Lock & Biometrics",
      "Multi-Factor Authentication", "Fake App Detection", "Banking Security",
      "QR Code Safety", "SMS Scam Protection", "Public Wi-Fi Safety", "Backup Strategy"
    ],
    keyTakeaways: [
      "Only install apps from official stores (Google Play, App Store)",
      "Review and minimize app permissions regularly",
      "Keep your device OS and apps updated at all times",
      "Use biometric authentication and strong PIN/password",
      "Avoid sensitive transactions on public Wi-Fi"
    ],
    securityTips: [
      "Enable remote wipe capability in case your phone is stolen",
      "Use a VPN when connecting to public Wi-Fi",
      "Turn off Bluetooth and NFC when not in use",
      "Enable automatic backups to a secure cloud or local storage"
    ],
    contentHTML: `
      <h3>App Permissions</h3>
      <ul>
        <li>Review permissions for each app in Settings → Apps → Permissions</li>
        <li>Deny unnecessary permissions (a flashlight app doesn't need camera access)</li>
        <li>Use "Allow only while using the app" for location permissions</li>
        <li>Revoke permissions from apps you haven't used recently</li>
      </ul>

      <h3>Official App Stores</h3>
      <p>Only download apps from Google Play Store or Apple App Store. Third-party app stores often contain malware-infected versions of popular apps. Even on official stores, check reviews, developer reputation, and download counts.</p>

      <h3>Device Updates</h3>
      <p>Enable automatic updates for both your operating system and apps. Updates patch critical security vulnerabilities. Delaying updates leaves your device exposed to known exploits.</p>

      <h3>Screen Lock & Biometrics</h3>
      <ul>
        <li>Use a 6+ digit PIN or strong alphanumeric password</li>
        <li>Enable fingerprint or face recognition for convenience with security</li>
        <li>Set auto-lock to 30 seconds or 1 minute</li>
        <li>Disable lock screen notification previews for sensitive apps</li>
      </ul>

      <h3>Multi-Factor Authentication</h3>
      <p>Enable MFA on all accounts accessible from your phone. Use authenticator apps (Google Authenticator, Microsoft Authenticator) instead of SMS-based OTP when possible.</p>

      <h3>Fake App Detection</h3>
      <ul>
        <li>Check the developer name and compare with the official company</li>
        <li>Look for spelling errors in app names and descriptions</li>
        <li>Read recent reviews for reports of malicious behavior</li>
        <li>Be suspicious of apps with very few downloads claiming to be popular services</li>
      </ul>

      <h3>Banking Security</h3>
      <ul>
        <li>Only use official banking apps downloaded from official stores</li>
        <li>Never access banking on public Wi-Fi without a VPN</li>
        <li>Enable transaction notifications for immediate fraud detection</li>
        <li>Log out of banking apps when not in use</li>
        <li>Enable biometric authentication for banking apps</li>
      </ul>

      <h3>QR Code Safety</h3>
      <ul>
        <li>Verify the source of QR codes before scanning</li>
        <li>Check if physical QR codes have been tampered with (sticker over sticker)</li>
        <li>Use a QR scanner that shows the URL before opening</li>
        <li>Never scan QR codes from unsolicited messages or random locations</li>
      </ul>

      <h3>SMS Scam Protection</h3>
      <ul>
        <li>Never click links in unexpected SMS messages</li>
        <li>Don't respond to messages asking for personal information</li>
        <li>Block and report spam SMS numbers</li>
        <li>Be suspicious of messages creating urgency about your accounts</li>
      </ul>

      <h3>Public Wi-Fi Safety</h3>
      <ul>
        <li>Avoid accessing sensitive accounts on public Wi-Fi</li>
        <li>Use a VPN when connecting to public networks</li>
        <li>Forget public Wi-Fi networks after use</li>
        <li>Disable auto-connect to open Wi-Fi networks</li>
        <li>Turn off file sharing and AirDrop on public networks</li>
      </ul>

      <h3>Backup Strategy</h3>
      <ul>
        <li>Enable automatic cloud backup (Google Drive / iCloud)</li>
        <li>Regularly create local backups to a computer</li>
        <li>Encrypt your backups</li>
        <li>Verify backup restoration works periodically</li>
        <li>Enable remote locate and remote wipe features</li>
      </ul>
    `
  },
  {
    id: "res-cloud-security",
    title: "Cloud Security Basics",
    category: "Cloud Security",
    icon: "fas fa-cloud",
    description: "Learn cloud security fundamentals including service models (SaaS, PaaS, IaaS), the Shared Responsibility Model, IAM, storage security, and cloud best practices.",
    difficulty: "Intermediate",
    type: "Guide",
    keywords: ["cloud", "SaaS", "PaaS", "IaaS", "shared responsibility", "IAM", "misconfiguration", "AWS", "Azure"],
    fileName: "cloud-security-basics.html",
    tableOfContents: [
      "Cloud Service Models", "Shared Responsibility Model", "Identity & Access Management (IAM)",
      "Cloud Storage Security", "Misconfiguration Risks", "Access Control",
      "Cloud Monitoring", "Cloud Security Best Practices"
    ],
    keyTakeaways: [
      "Cloud security is a shared responsibility between provider and customer",
      "Misconfiguration is the #1 cause of cloud security breaches",
      "IAM with least privilege access is critical in cloud environments",
      "Encrypt data both at rest and in transit in the cloud",
      "Enable logging and monitoring for all cloud resources"
    ],
    securityTips: [
      "Never leave S3 buckets or storage blobs publicly accessible",
      "Use cloud-native security tools (AWS GuardDuty, Azure Defender)",
      "Implement Infrastructure as Code (IaC) for consistent security configurations",
      "Rotate access keys and credentials regularly"
    ],
    contentHTML: `
      <h3>Cloud Service Models</h3>
      <ul>
        <li><strong>SaaS (Software as a Service):</strong> Complete applications delivered over the internet. Examples: Gmail, Microsoft 365, Salesforce. Users manage data and access; provider manages everything else.</li>
        <li><strong>PaaS (Platform as a Service):</strong> Development platforms in the cloud. Examples: Heroku, Google App Engine, Azure App Services. Users manage applications and data; provider manages infrastructure.</li>
        <li><strong>IaaS (Infrastructure as a Service):</strong> Virtualized computing resources. Examples: AWS EC2, Azure VMs, Google Compute Engine. Users manage OS, applications, and data; provider manages physical infrastructure.</li>
      </ul>

      <h3>Shared Responsibility Model</h3>
      <p>Security in the cloud is a shared responsibility between the cloud provider and the customer. The provider secures the infrastructure (physical security, networking, hypervisors), while the customer is responsible for securing their data, configurations, access controls, and applications.</p>
      <div class="highlight-box">
        <strong>Key Principle:</strong> The cloud provider is responsible for security OF the cloud. The customer is responsible for security IN the cloud.
      </div>

      <h3>Identity & Access Management (IAM)</h3>
      <ul>
        <li>Implement the principle of least privilege — users get only the access they need</li>
        <li>Use role-based access control (RBAC) for systematic permission management</li>
        <li>Enable MFA for all cloud console access</li>
        <li>Avoid using root/admin accounts for daily operations</li>
        <li>Regularly audit and review access permissions</li>
        <li>Implement just-in-time (JIT) access for privileged operations</li>
      </ul>

      <h3>Cloud Storage Security</h3>
      <ul>
        <li>Enable encryption at rest for all storage services</li>
        <li>Use server-side encryption with customer-managed keys (BYOK)</li>
        <li>Implement access policies and bucket policies correctly</li>
        <li>Enable versioning and logging for critical data</li>
        <li>Regularly audit public access settings</li>
      </ul>

      <h3>Misconfiguration Risks</h3>
      <p>Cloud misconfiguration is the #1 cause of cloud data breaches. Common misconfigurations:</p>
      <ul>
        <li>Publicly accessible storage buckets (S3, Blob Storage)</li>
        <li>Overly permissive security groups and firewall rules</li>
        <li>Unencrypted databases and storage</li>
        <li>Default credentials on cloud services</li>
        <li>Disabled logging and monitoring</li>
      </ul>

      <h3>Access Control</h3>
      <ul>
        <li>Implement network-level access controls (Security Groups, NACLs)</li>
        <li>Use private endpoints for services that don't need public access</li>
        <li>Implement VPC/VNet segmentation for workload isolation</li>
        <li>Use service-level access policies (S3 bucket policies, Azure RBAC)</li>
      </ul>

      <h3>Cloud Monitoring</h3>
      <ul>
        <li>Enable AWS CloudTrail / Azure Activity Log / GCP Audit Logs</li>
        <li>Set up alerts for security-relevant events</li>
        <li>Use cloud-native SIEM solutions</li>
        <li>Monitor for unusual API calls and access patterns</li>
        <li>Implement automated compliance checking</li>
      </ul>

      <h3>Cloud Security Best Practices</h3>
      <ul>
        <li>Follow the Shared Responsibility Model</li>
        <li>Implement least privilege access everywhere</li>
        <li>Encrypt data at rest and in transit</li>
        <li>Enable comprehensive logging and monitoring</li>
        <li>Use Infrastructure as Code for consistent configurations</li>
        <li>Regularly scan for misconfigurations</li>
        <li>Implement backup and disaster recovery plans</li>
        <li>Conduct regular security assessments and audits</li>
      </ul>
    `
  },
  {
    id: "res-incident-response",
    title: "Incident Response Quick Guide",
    category: "SOC & Incident Response",
    icon: "fas fa-bell",
    description: "Learn the 6-phase incident response lifecycle from preparation to lessons learned, plus practical steps for handling phishing, credential theft, and malware incidents.",
    difficulty: "Intermediate",
    type: "Guide",
    keywords: ["incident response", "SOC", "containment", "eradication", "recovery", "phishing response", "malware", "IR"],
    fileName: "incident-response-guide.html",
    tableOfContents: [
      "IR Lifecycle Overview", "Phase 1: Preparation", "Phase 2: Identification",
      "Phase 3: Containment", "Phase 4: Eradication", "Phase 5: Recovery",
      "Phase 6: Lessons Learned", "After Clicking a Phishing Link",
      "After Credential Theft", "After Malware Infection", "Evidence Preservation", "Incident Reporting"
    ],
    keyTakeaways: [
      "Preparation is the most important phase — have plans ready before incidents occur",
      "Containment should be swift to limit damage",
      "Document everything during incident response for the Lessons Learned phase",
      "Preserve evidence before eradication for forensic analysis",
      "Conduct post-incident reviews to improve future response"
    ],
    securityTips: [
      "Create and regularly test your incident response plan",
      "Build an IR team with clear roles and responsibilities",
      "Keep offline backups for recovery from ransomware",
      "Maintain updated contact lists for IR team and stakeholders"
    ],
    contentHTML: `
      <h3>Incident Response Lifecycle</h3>
      <div class="flow-diagram">
        <div class="flow-step">Preparation</div>
        <div class="flow-arrow">↓</div>
        <div class="flow-step">Identification</div>
        <div class="flow-arrow">↓</div>
        <div class="flow-step">Containment</div>
        <div class="flow-arrow">↓</div>
        <div class="flow-step">Eradication</div>
        <div class="flow-arrow">↓</div>
        <div class="flow-step">Recovery</div>
        <div class="flow-arrow">↓</div>
        <div class="flow-step">Lessons Learned</div>
      </div>

      <h3>Phase 1: Preparation</h3>
      <ul>
        <li>Develop and document incident response policies and procedures</li>
        <li>Establish an incident response team with clear roles</li>
        <li>Deploy security monitoring tools (SIEM, EDR, IDS/IPS)</li>
        <li>Conduct regular training and tabletop exercises</li>
        <li>Maintain up-to-date contact lists and escalation procedures</li>
        <li>Ensure backup systems are tested and functional</li>
      </ul>

      <h3>Phase 2: Identification</h3>
      <ul>
        <li>Detect potential incidents through alerts, logs, and user reports</li>
        <li>Determine if the event is a true security incident</li>
        <li>Assess scope, impact, and severity</li>
        <li>Classify the incident type (malware, phishing, unauthorized access, etc.)</li>
        <li>Document initial findings and timeline</li>
      </ul>

      <h3>Phase 3: Containment</h3>
      <ul>
        <li><strong>Short-term:</strong> Isolate affected systems from the network</li>
        <li><strong>Long-term:</strong> Apply temporary fixes while preparing for full remediation</li>
        <li>Preserve forensic evidence before making changes</li>
        <li>Block malicious IPs, domains, and hashes</li>
        <li>Disable compromised accounts</li>
      </ul>

      <h3>Phase 4: Eradication</h3>
      <ul>
        <li>Remove malware and malicious artifacts</li>
        <li>Patch exploited vulnerabilities</li>
        <li>Reset compromised credentials</li>
        <li>Remove unauthorized access points (backdoors)</li>
        <li>Verify complete removal using scanning tools</li>
      </ul>

      <h3>Phase 5: Recovery</h3>
      <ul>
        <li>Restore systems from verified clean backups</li>
        <li>Rebuild compromised systems if necessary</li>
        <li>Monitor systems closely for signs of reinfection</li>
        <li>Gradually restore normal operations</li>
        <li>Verify system integrity before returning to production</li>
      </ul>

      <h3>Phase 6: Lessons Learned</h3>
      <ul>
        <li>Conduct a post-incident review meeting</li>
        <li>Document what happened, what worked, and what didn't</li>
        <li>Update incident response procedures based on findings</li>
        <li>Implement additional controls to prevent recurrence</li>
        <li>Share relevant threat intelligence with the security community</li>
      </ul>

      <h3>What To Do After Clicking a Phishing Link</h3>
      <ol>
        <li>Disconnect from the internet immediately</li>
        <li>Do NOT enter any credentials if prompted</li>
        <li>Run a full antivirus scan</li>
        <li>Change passwords for any potentially compromised accounts</li>
        <li>Enable MFA on affected accounts</li>
        <li>Monitor accounts for unauthorized activity</li>
        <li>Report the incident to your IT/security team</li>
      </ol>

      <h3>What To Do After Credential Theft</h3>
      <ol>
        <li>Change the compromised password immediately</li>
        <li>Change the password on any other account using the same credentials</li>
        <li>Enable MFA on all accounts</li>
        <li>Check account activity for unauthorized actions</li>
        <li>Set up login alerts and notifications</li>
        <li>Consider placing a fraud alert on credit reports (if financial accounts)</li>
      </ol>

      <h3>What To Do After Malware Infection</h3>
      <ol>
        <li>Disconnect the device from the network</li>
        <li>Do NOT shut down — preserve memory evidence</li>
        <li>Run a full scan with updated antivirus software</li>
        <li>If enterprise: contact SOC/IR team for forensic investigation</li>
        <li>Reset credentials used on the infected device</li>
        <li>Restore from known clean backup if needed</li>
      </ol>

      <h3>Evidence Preservation</h3>
      <ul>
        <li>Take screenshots of suspicious activity</li>
        <li>Preserve email headers from phishing messages</li>
        <li>Save log files from affected systems</li>
        <li>Record network traffic if possible</li>
        <li>Document timeline of events</li>
        <li>Maintain chain of custody for all evidence</li>
      </ul>

      <h3>Incident Reporting</h3>
      <ul>
        <li>Report to internal IT/security team immediately</li>
        <li>File reports with relevant authorities (CERT, law enforcement)</li>
        <li>Notify affected stakeholders and data subjects if required</li>
        <li>Document the incident for compliance and regulatory requirements</li>
        <li>Share IOCs (Indicators of Compromise) with trusted partners</li>
      </ul>
    `
  },
  {
    id: "res-soc-roadmap",
    title: "SOC Analyst Beginner Roadmap",
    category: "Cybersecurity Careers",
    icon: "fas fa-road",
    description: "A structured career roadmap for aspiring SOC Analysts covering networking, operating systems, security fundamentals, SIEM, Splunk, incident response, and threat hunting.",
    difficulty: "Beginner",
    type: "Roadmap",
    keywords: ["SOC", "analyst", "career", "SIEM", "Splunk", "Sentinel", "threat hunting", "networking", "Linux"],
    fileName: "soc-analyst-roadmap.html",
    tableOfContents: [
      "Career Path Overview", "Networking Fundamentals", "Linux Essentials", "Windows Security",
      "Security Fundamentals", "Log Analysis", "SIEM Platforms", "Splunk & Microsoft Sentinel",
      "Incident Response", "Threat Intelligence", "Threat Hunting", "Required Skills & Tools"
    ],
    keyTakeaways: [
      "Start with solid networking and OS fundamentals before specializing",
      "SIEM platforms are the core tool of SOC operations",
      "Hands-on practice with Splunk and log analysis is essential",
      "Threat intelligence and hunting differentiate senior analysts",
      "Continuous learning is mandatory in cybersecurity"
    ],
    securityTips: [
      "Set up a home lab with VMs to practice — it's free and essential",
      "Get CompTIA Security+ as your first certification",
      "Practice with free SIEM labs (Splunk Free, ELK Stack)",
      "Join cybersecurity communities and CTF competitions"
    ],
    contentHTML: `
      <h3>SOC Analyst Career Path</h3>
      <div class="flow-diagram">
        <div class="flow-step">Networking</div>
        <div class="flow-arrow">↓</div>
        <div class="flow-step">Linux</div>
        <div class="flow-arrow">↓</div>
        <div class="flow-step">Windows</div>
        <div class="flow-arrow">↓</div>
        <div class="flow-step">Security Fundamentals</div>
        <div class="flow-arrow">↓</div>
        <div class="flow-step">Logs & Log Analysis</div>
        <div class="flow-arrow">↓</div>
        <div class="flow-step">SIEM Platforms</div>
        <div class="flow-arrow">↓</div>
        <div class="flow-step">Splunk / Microsoft Sentinel</div>
        <div class="flow-arrow">↓</div>
        <div class="flow-step">Incident Response</div>
        <div class="flow-arrow">↓</div>
        <div class="flow-step">Threat Intelligence</div>
        <div class="flow-arrow">↓</div>
        <div class="flow-step">Threat Hunting</div>
        <div class="flow-arrow">↓</div>
        <div class="flow-step">🎯 SOC Analyst</div>
      </div>

      <h3>Required Skills</h3>
      <ul>
        <li>TCP/IP networking, DNS, HTTP, and common protocols</li>
        <li>Linux command line and Windows event logs</li>
        <li>Log analysis and correlation</li>
        <li>SIEM query languages (SPL, KQL)</li>
        <li>Incident response methodology</li>
        <li>Threat intelligence frameworks (MITRE ATT&CK)</li>
        <li>Analytical and critical thinking</li>
        <li>Communication and report writing</li>
      </ul>

      <h3>Recommended Tools</h3>
      <ul>
        <li><strong>SIEM:</strong> Splunk, Microsoft Sentinel, QRadar, Elastic SIEM</li>
        <li><strong>EDR:</strong> CrowdStrike Falcon, Microsoft Defender for Endpoint, Carbon Black</li>
        <li><strong>Network:</strong> Wireshark, tcpdump, Zeek</li>
        <li><strong>Threat Intel:</strong> MISP, VirusTotal, AlienVault OTX</li>
        <li><strong>Ticketing:</strong> TheHive, ServiceNow, Jira</li>
      </ul>

      <h3>Beginner Topics</h3>
      <ul>
        <li>OSI model and TCP/IP stack</li>
        <li>Common ports and protocols</li>
        <li>Basic Linux commands and file system navigation</li>
        <li>Windows Event Log analysis</li>
        <li>CIA Triad and security fundamentals</li>
        <li>Introduction to SIEM and log management</li>
      </ul>

      <h3>Intermediate Topics</h3>
      <ul>
        <li>Writing SIEM detection rules and queries</li>
        <li>Alert triage and investigation workflows</li>
        <li>Malware analysis basics</li>
        <li>Network traffic analysis with Wireshark</li>
        <li>MITRE ATT&CK framework mapping</li>
        <li>Incident response procedures</li>
      </ul>

      <h3>Advanced Topics</h3>
      <ul>
        <li>Threat hunting methodologies</li>
        <li>Advanced persistent threat (APT) analysis</li>
        <li>Digital forensics (memory, disk, network)</li>
        <li>Security orchestration and automation (SOAR)</li>
        <li>Purple teaming exercises</li>
        <li>Cloud security monitoring (AWS, Azure, GCP)</li>
      </ul>

      <h3>Recommended Certifications</h3>
      <ul>
        <li><strong>Entry:</strong> CompTIA Security+, Google Cybersecurity Certificate</li>
        <li><strong>Intermediate:</strong> CompTIA CySA+, Splunk Core Certified User, SC-200</li>
        <li><strong>Advanced:</strong> GIAC GCIA, GIAC GCIH, OSDA, BTL1</li>
      </ul>
    `
  },
  {
    id: "res-ethical-hacking-roadmap",
    title: "Ethical Hacking Roadmap",
    category: "Cybersecurity Careers",
    icon: "fas fa-terminal",
    description: "A complete career roadmap for ethical hackers covering networking, Linux, Python, web security, OWASP, penetration testing tools, and professional certifications.",
    difficulty: "Intermediate",
    type: "Roadmap",
    keywords: ["ethical hacking", "pentesting", "OWASP", "Burp Suite", "Nmap", "career", "certification", "penetration testing"],
    fileName: "ethical-hacking-roadmap.html",
    tableOfContents: [
      "Career Path Overview", "Networking", "Linux", "Python Programming", "Web Security",
      "OWASP Top 10", "Burp Suite", "Nmap & Reconnaissance", "Vulnerability Assessment",
      "Penetration Testing", "Skills & Tools", "Learning Resources", "Certifications"
    ],
    keyTakeaways: [
      "Strong networking and Linux skills are prerequisites for ethical hacking",
      "Python is the most important programming language for ethical hackers",
      "Understanding OWASP Top 10 is essential for web application testing",
      "Always get written authorization before testing any system",
      "CEH and OSCP are the most recognized ethical hacking certifications"
    ],
    securityTips: [
      "Practice legally on platforms like HackTheBox, TryHackMe, and VulnHub",
      "Build a home lab for safe practice — use VirtualBox or VMware",
      "Document everything you learn in a personal knowledge base",
      "Participate in CTF competitions to sharpen your skills"
    ],
    contentHTML: `
      <h3>Ethical Hacking Career Path</h3>
      <div class="flow-diagram">
        <div class="flow-step">Networking</div>
        <div class="flow-arrow">↓</div>
        <div class="flow-step">Linux</div>
        <div class="flow-arrow">↓</div>
        <div class="flow-step">Python</div>
        <div class="flow-arrow">↓</div>
        <div class="flow-step">Web Security</div>
        <div class="flow-arrow">↓</div>
        <div class="flow-step">OWASP Top 10</div>
        <div class="flow-arrow">↓</div>
        <div class="flow-step">Burp Suite</div>
        <div class="flow-arrow">↓</div>
        <div class="flow-step">Nmap & Recon</div>
        <div class="flow-arrow">↓</div>
        <div class="flow-step">Vulnerability Assessment</div>
        <div class="flow-arrow">↓</div>
        <div class="flow-step">Penetration Testing</div>
        <div class="flow-arrow">↓</div>
        <div class="flow-step">🎯 Ethical Hacker</div>
      </div>

      <h3>Core Skills</h3>
      <ul>
        <li>TCP/IP networking, subnetting, routing, and DNS</li>
        <li>Linux command line mastery (Kali Linux)</li>
        <li>Python scripting for automation and exploit development</li>
        <li>Web technologies (HTTP, HTML, JavaScript, SQL)</li>
        <li>Vulnerability scanning and exploitation</li>
        <li>Report writing and communication</li>
      </ul>

      <h3>Essential Tools</h3>
      <ul>
        <li><strong>Reconnaissance:</strong> Nmap, Amass, Shodan, theHarvester, Recon-ng</li>
        <li><strong>Web Testing:</strong> Burp Suite, OWASP ZAP, Nikto, Dirb/Gobuster</li>
        <li><strong>Exploitation:</strong> Metasploit, SQLMap, Hydra, John the Ripper</li>
        <li><strong>Post-Exploitation:</strong> Mimikatz, BloodHound, Chisel</li>
        <li><strong>Wireless:</strong> Aircrack-ng, Wifite, Kismet</li>
        <li><strong>OS:</strong> Kali Linux, Parrot Security OS</li>
      </ul>

      <h3>Learning Resources</h3>
      <ul>
        <li><strong>Platforms:</strong> TryHackMe, HackTheBox, VulnHub, OverTheWire</li>
        <li><strong>Courses:</strong> TCM Security, PortSwigger Web Academy, SANS</li>
        <li><strong>Books:</strong> "The Web Application Hacker's Handbook", "Penetration Testing" by Georgia Weidman</li>
        <li><strong>YouTube:</strong> NetworkChuck, John Hammond, IppSec, The Cyber Mentor</li>
      </ul>

      <h3>Professional Certifications</h3>
      <ul>
        <li><strong>Entry:</strong> CompTIA PenTest+, eJPT (eLearnSecurity)</li>
        <li><strong>Intermediate:</strong> CEH (Certified Ethical Hacker), eCPPT</li>
        <li><strong>Advanced:</strong> OSCP (Offensive Security Certified Professional), OSWE, OSCE³</li>
        <li><strong>Expert:</strong> GXPN (GIAC), CREST CRT/CCT</li>
      </ul>

      <div class="warning-box">
        <strong>⚠️ Legal Warning:</strong> Always obtain written permission before testing any system. Unauthorized hacking is a criminal offense. Only practice on systems you own or have explicit authorization to test.
      </div>
    `
  },
  {
    id: "res-career-guide",
    title: "Cybersecurity Career Guide",
    category: "Cybersecurity Careers",
    icon: "fas fa-briefcase",
    description: "Explore 9 cybersecurity career roles with detailed breakdowns of responsibilities, required skills, tools, certifications, and career progression paths.",
    difficulty: "Beginner",
    type: "Guide",
    keywords: ["career", "jobs", "SOC analyst", "ethical hacker", "penetration tester", "forensics", "cloud security", "DevSecOps"],
    fileName: "cybersecurity-career-guide.html",
    tableOfContents: [
      "SOC Analyst", "Security Analyst", "Ethical Hacker", "Penetration Tester",
      "Digital Forensics Analyst", "Malware Analyst", "Cloud Security Engineer",
      "Security Engineer", "DevSecOps Engineer"
    ],
    keyTakeaways: [
      "Cybersecurity offers diverse career paths for different interests and skill levels",
      "Most roles require strong networking and OS fundamentals",
      "Certifications significantly boost career opportunities",
      "Hands-on experience through labs, CTFs, and projects is essential",
      "Continuous learning is required — the threat landscape constantly evolves"
    ],
    securityTips: [
      "Start with SOC Analyst or Security Analyst roles — they're the most accessible entry points",
      "Build a portfolio of projects and write-ups to showcase your skills",
      "Network with professionals through LinkedIn, conferences, and local meetups",
      "Consider specializing after 2-3 years of general security experience"
    ],
    contentHTML: `
      <h3>SOC Analyst</h3>
      <p><strong>Responsibilities:</strong> Monitor security alerts, triage incidents, investigate suspicious activity, escalate threats, and maintain SIEM systems.</p>
      <p><strong>Required Skills:</strong> Networking, log analysis, SIEM queries (SPL/KQL), incident response, MITRE ATT&CK</p>
      <p><strong>Tools:</strong> Splunk, Microsoft Sentinel, CrowdStrike, Wireshark, TheHive</p>
      <p><strong>Certifications:</strong> CompTIA Security+, CySA+, Splunk Core User, SC-200, BTL1</p>

      <h3>Security Analyst</h3>
      <p><strong>Responsibilities:</strong> Assess security posture, identify vulnerabilities, implement security controls, conduct risk assessments, and develop security policies.</p>
      <p><strong>Required Skills:</strong> Risk assessment, vulnerability management, security frameworks (NIST, ISO 27001), policy development</p>
      <p><strong>Tools:</strong> Nessus, Qualys, GRC platforms, vulnerability scanners</p>
      <p><strong>Certifications:</strong> CompTIA Security+, CISSP, CISM, CRISC</p>

      <h3>Ethical Hacker</h3>
      <p><strong>Responsibilities:</strong> Identify vulnerabilities in systems before malicious hackers do, conduct authorized testing, and provide remediation guidance.</p>
      <p><strong>Required Skills:</strong> Networking, Linux, Python, web security, exploitation techniques</p>
      <p><strong>Tools:</strong> Kali Linux, Burp Suite, Nmap, Metasploit, SQLMap</p>
      <p><strong>Certifications:</strong> CEH, OSCP, eJPT, eCPPT, PenTest+</p>

      <h3>Penetration Tester</h3>
      <p><strong>Responsibilities:</strong> Conduct structured penetration tests against networks, applications, and infrastructure. Document findings in detailed reports with remediation recommendations.</p>
      <p><strong>Required Skills:</strong> Advanced exploitation, web application testing, network penetration, social engineering, report writing</p>
      <p><strong>Tools:</strong> Burp Suite Pro, Cobalt Strike, BloodHound, Nmap, custom scripts</p>
      <p><strong>Certifications:</strong> OSCP, OSWE, GPEN, CREST CRT</p>

      <h3>Digital Forensics Analyst</h3>
      <p><strong>Responsibilities:</strong> Investigate cybercrimes, analyze digital evidence, recover data, and prepare forensic reports for legal proceedings.</p>
      <p><strong>Required Skills:</strong> Evidence handling, disk/memory forensics, timeline analysis, legal procedures, chain of custody</p>
      <p><strong>Tools:</strong> EnCase, FTK, Autopsy, Volatility, X-Ways Forensics</p>
      <p><strong>Certifications:</strong> GCFE, GCFA, CHFI, EnCE</p>

      <h3>Malware Analyst</h3>
      <p><strong>Responsibilities:</strong> Analyze malicious software to understand its behavior, capabilities, and origin. Create signatures and IOCs for detection.</p>
      <p><strong>Required Skills:</strong> Reverse engineering, assembly language, debugging, sandbox analysis, behavioral analysis</p>
      <p><strong>Tools:</strong> IDA Pro, Ghidra, x64dbg, OllyDbg, any.run, Cuckoo Sandbox</p>
      <p><strong>Certifications:</strong> GREM, CREA, eCMAP</p>

      <h3>Cloud Security Engineer</h3>
      <p><strong>Responsibilities:</strong> Secure cloud infrastructure, implement IAM policies, monitor cloud environments, and ensure compliance with security standards.</p>
      <p><strong>Required Skills:</strong> AWS/Azure/GCP security, IAM, IaC (Terraform), container security, cloud networking</p>
      <p><strong>Tools:</strong> AWS GuardDuty, Azure Defender, Prisma Cloud, Terraform, CloudFormation</p>
      <p><strong>Certifications:</strong> AWS Security Specialty, AZ-500, CCSP, Google Professional Cloud Security Engineer</p>

      <h3>Security Engineer</h3>
      <p><strong>Responsibilities:</strong> Design and implement security solutions, manage firewalls and IDS/IPS, automate security processes, and respond to security incidents.</p>
      <p><strong>Required Skills:</strong> Network security, system hardening, scripting (Python, Bash), security architecture, automation</p>
      <p><strong>Tools:</strong> Firewalls (Palo Alto, Fortinet), IDS/IPS (Snort, Suricata), SIEM, automation tools</p>
      <p><strong>Certifications:</strong> CISSP, CompTIA Security+, CCNP Security, GIAC GSEC</p>

      <h3>DevSecOps Engineer</h3>
      <p><strong>Responsibilities:</strong> Integrate security into the software development lifecycle (SDLC), automate security testing in CI/CD pipelines, and manage container/application security.</p>
      <p><strong>Required Skills:</strong> CI/CD pipelines, SAST/DAST, container security (Docker, Kubernetes), IaC, cloud security</p>
      <p><strong>Tools:</strong> Jenkins, GitLab CI, SonarQube, Snyk, Trivy, OWASP ZAP, HashiCorp Vault</p>
      <p><strong>Certifications:</strong> Certified DevSecOps Professional, AWS DevOps Professional, CKS</p>
    `
  },
  {
    id: "res-glossary",
    title: "Cybersecurity Glossary",
    category: "Cybersecurity Basics",
    icon: "fas fa-book",
    description: "A downloadable reference glossary of essential cybersecurity terms and definitions covering malware, phishing, encryption, SIEM, threat intelligence, and more.",
    difficulty: "Beginner",
    type: "Reference",
    keywords: ["glossary", "terms", "definitions", "malware", "phishing", "encryption", "SIEM", "SOC", "zero trust"],
    fileName: "cybersecurity-glossary.html",
    tableOfContents: [
      "Malware", "Phishing", "Exploit", "Vulnerability", "Risk", "Encryption",
      "Hashing", "Firewall", "SIEM", "SOC", "IDS", "IPS", "Honeypot",
      "Threat Intelligence", "Zero Trust", "MITM", "Botnet", "Ransomware"
    ],
    keyTakeaways: [
      "Understanding security terminology is the foundation of cybersecurity education",
      "These terms appear across certifications, job roles, and daily security work",
      "Keep this glossary as a quick reference for unfamiliar terms",
      "Many terms are interconnected — understanding one helps understand others"
    ],
    securityTips: [
      "Bookmark this glossary for quick reference",
      "Test yourself: can you explain each term without looking?",
      "Use these terms correctly in interviews and professional communication",
      "Expand your vocabulary by reading security news and advisories"
    ],
    contentHTML: `
      <h3>Malware</h3>
      <p>Short for "malicious software." Any software intentionally designed to cause harm, including viruses, worms, Trojans, ransomware, spyware, adware, and rootkits.</p>

      <h3>Phishing</h3>
      <p>A social engineering attack that uses fake emails, websites, or messages to trick users into revealing sensitive information like passwords, credit card numbers, or personal data.</p>

      <h3>Exploit</h3>
      <p>A piece of code, software, or technique that takes advantage of a vulnerability in a system to cause unintended behavior, such as unauthorized access or code execution.</p>

      <h3>Vulnerability</h3>
      <p>A weakness or flaw in a system, application, or process that can be exploited by a threat actor. Examples: unpatched software, misconfigurations, weak passwords, insecure code.</p>

      <h3>Risk</h3>
      <p>The potential for loss or damage when a threat exploits a vulnerability. Calculated as: Risk = Threat × Vulnerability × Impact. Risk management aims to reduce risk to acceptable levels.</p>

      <h3>Encryption</h3>
      <p>The process of converting readable data (plaintext) into an unreadable format (ciphertext) using a cryptographic algorithm and key. Only authorized parties with the correct key can decrypt it. Common algorithms: AES, RSA, ChaCha20.</p>

      <h3>Hashing</h3>
      <p>A one-way function that converts input data into a fixed-size hash value. Unlike encryption, hashing is irreversible. Used for password storage, data integrity verification, and digital signatures. Common algorithms: SHA-256, bcrypt, Argon2.</p>

      <h3>Firewall</h3>
      <p>A network security device or software that monitors and filters incoming and outgoing network traffic based on predefined security rules. Acts as a barrier between trusted internal networks and untrusted external networks.</p>

      <h3>SIEM (Security Information and Event Management)</h3>
      <p>A platform that collects, correlates, and analyzes security event data from multiple sources across an organization. Provides real-time monitoring, threat detection, and incident response capabilities. Examples: Splunk, Microsoft Sentinel, QRadar.</p>

      <h3>SOC (Security Operations Center)</h3>
      <p>A centralized team and facility responsible for monitoring, detecting, analyzing, and responding to cybersecurity incidents 24/7. SOC analysts use SIEM, EDR, and other tools to protect the organization.</p>

      <h3>IDS (Intrusion Detection System)</h3>
      <p>A system that monitors network traffic or system activities for malicious activity or policy violations and sends alerts. Operates passively — does not block traffic. Types: Network-based (NIDS), Host-based (HIDS).</p>

      <h3>IPS (Intrusion Prevention System)</h3>
      <p>Similar to IDS but actively blocks detected threats in real-time. Sits inline with network traffic and can drop malicious packets, reset connections, or block source IPs automatically.</p>

      <h3>Honeypot</h3>
      <p>A decoy system or resource designed to attract and trap attackers. Used to study attack techniques, divert attackers from real systems, and collect threat intelligence.</p>

      <h3>Threat Intelligence</h3>
      <p>Evidence-based knowledge about existing or emerging threats, including context, mechanisms, indicators of compromise (IOCs), and actionable recommendations. Used to inform security decisions and improve defenses.</p>

      <h3>Zero Trust</h3>
      <p>A security model based on the principle "never trust, always verify." Every user, device, and connection must be continuously authenticated and authorized, regardless of whether they are inside or outside the network perimeter.</p>

      <h3>MITM (Man-in-the-Middle)</h3>
      <p>An attack where the attacker secretly intercepts and potentially alters communications between two parties who believe they are communicating directly. Common on unsecured Wi-Fi networks.</p>

      <h3>Botnet</h3>
      <p>A network of compromised computers (bots/zombies) controlled by an attacker (botmaster). Used for DDoS attacks, spam distribution, cryptocurrency mining, and credential stuffing at massive scale.</p>

      <h3>Ransomware</h3>
      <p>Malware that encrypts a victim's files and demands payment (usually cryptocurrency) for the decryption key. Modern ransomware often includes double extortion — threatening to leak stolen data if ransom isn't paid.</p>
    `
  },
  {
    id: "res-cyber-safety-handbook",
    title: "Cyber Safety Handbook",
    category: "Cybersecurity Basics",
    icon: "fas fa-book-open",
    description: "A comprehensive, beginner-friendly handbook covering all aspects of personal cyber safety including account security, browser safety, mobile security, and incident response.",
    difficulty: "Beginner",
    type: "Handbook",
    keywords: ["cyber safety", "handbook", "beginner", "account security", "browser", "mobile", "social media", "banking", "Wi-Fi"],
    fileName: "cyber-safety-handbook.html",
    tableOfContents: [
      "Account Security", "Password Security", "Email Security", "Browser Security",
      "Mobile Security", "Social Media Safety", "Banking Safety", "Public Wi-Fi Safety",
      "File Safety", "Phishing Prevention", "Incident Response Basics"
    ],
    keyTakeaways: [
      "Cyber safety starts with strong, unique passwords and MFA on all accounts",
      "Be cautious with what you share on social media — attackers use it for targeting",
      "Keep all devices and software updated — patches fix known vulnerabilities",
      "When in doubt, verify independently through official channels",
      "Know what to do when something goes wrong — have a basic incident response plan"
    ],
    securityTips: [
      "Set up a password manager today — it's the single most impactful security improvement",
      "Enable MFA on email, banking, and social media accounts first",
      "Regularly check haveibeenpwned.com for compromised credentials",
      "Teach these practices to family members, especially elderly relatives"
    ],
    contentHTML: `
      <h3>Account Security</h3>
      <ul>
        <li>Use a unique, strong password for every account</li>
        <li>Enable MFA on all critical accounts (email, banking, social media)</li>
        <li>Review account activity and login history regularly</li>
        <li>Set up account recovery options (backup email, phone)</li>
        <li>Remove unused accounts to reduce your attack surface</li>
        <li>Be cautious with third-party app connections and permissions</li>
      </ul>

      <h3>Password Security</h3>
      <ul>
        <li>Use 16+ character passwords or passphrases</li>
        <li>Use a password manager (Bitwarden, 1Password, KeePass)</li>
        <li>Never reuse passwords across accounts</li>
        <li>Never share passwords with anyone</li>
        <li>Change passwords immediately if a service reports a breach</li>
        <li>Use passkeys where available</li>
      </ul>

      <h3>Email Security</h3>
      <ul>
        <li>Verify sender addresses before responding or clicking links</li>
        <li>Be suspicious of urgent or threatening language</li>
        <li>Never open unexpected attachments</li>
        <li>Hover over links to check actual URLs</li>
        <li>Use email filtering and anti-spam features</li>
        <li>Report phishing emails to your email provider</li>
      </ul>

      <h3>Browser Security</h3>
      <ul>
        <li>Keep your browser updated to the latest version</li>
        <li>Only install extensions from official stores</li>
        <li>Enable HTTPS-Only mode</li>
        <li>Block pop-ups and third-party cookies</li>
        <li>Clear browsing data regularly</li>
        <li>Use private browsing on shared computers</li>
      </ul>

      <h3>Mobile Security</h3>
      <ul>
        <li>Keep your phone OS and apps updated</li>
        <li>Only install apps from official stores</li>
        <li>Review and minimize app permissions</li>
        <li>Use biometric authentication and strong PIN</li>
        <li>Enable remote wipe and locate features</li>
        <li>Avoid sideloading apps from unknown sources</li>
      </ul>

      <h3>Social Media Safety</h3>
      <ul>
        <li>Limit personal information shared publicly</li>
        <li>Use strong privacy settings on all platforms</li>
        <li>Be cautious of friend requests from strangers</li>
        <li>Don't share vacation plans or location in real-time</li>
        <li>Be wary of quizzes and surveys that harvest personal data</li>
        <li>Enable login alerts and two-factor authentication</li>
      </ul>

      <h3>Banking Safety</h3>
      <ul>
        <li>Use official banking apps and websites only</li>
        <li>Enable transaction notifications and alerts</li>
        <li>Never share OTP, PIN, or CVV with anyone</li>
        <li>Verify UPI payment requests carefully before approving</li>
        <li>Don't conduct banking on public Wi-Fi without VPN</li>
        <li>Regularly check account statements for unauthorized transactions</li>
        <li>Set transaction limits for online payments</li>
      </ul>

      <h3>Public Wi-Fi Safety</h3>
      <ul>
        <li>Avoid accessing sensitive accounts on public Wi-Fi</li>
        <li>Use a VPN when connecting to public networks</li>
        <li>Disable auto-connect to open Wi-Fi networks</li>
        <li>Forget public networks after disconnecting</li>
        <li>Turn off file sharing on public networks</li>
        <li>Use mobile data for sensitive transactions when possible</li>
      </ul>

      <h3>File Safety</h3>
      <ul>
        <li>Scan downloaded files with antivirus before opening</li>
        <li>Be cautious with email attachments, especially executable files</li>
        <li>Back up important files using the 3-2-1 rule (3 copies, 2 media types, 1 offsite)</li>
        <li>Use cloud storage with encryption for sensitive files</li>
        <li>Don't plug in unknown USB drives</li>
      </ul>

      <h3>Phishing Prevention</h3>
      <ul>
        <li>Verify sender identity before clicking any link</li>
        <li>Be suspicious of urgent messages requesting immediate action</li>
        <li>Contact organizations directly using official channels to verify requests</li>
        <li>Use anti-phishing browser extensions and email filters</li>
        <li>Educate yourself about the latest phishing techniques</li>
        <li>Report phishing attempts to protect others</li>
      </ul>

      <h3>Incident Response Basics</h3>
      <ol>
        <li><strong>Stay Calm:</strong> Don't panic — quick, measured actions are more effective</li>
        <li><strong>Disconnect:</strong> If you suspect compromise, disconnect from the internet</li>
        <li><strong>Change Passwords:</strong> Change passwords for potentially affected accounts</li>
        <li><strong>Enable MFA:</strong> Add extra security layers to compromised accounts</li>
        <li><strong>Scan:</strong> Run a full antivirus/anti-malware scan</li>
        <li><strong>Monitor:</strong> Check accounts for unauthorized activity</li>
        <li><strong>Report:</strong> Notify your IT team, bank, or relevant authorities</li>
        <li><strong>Document:</strong> Keep records of what happened and actions taken</li>
        <li><strong>Learn:</strong> Understand how the incident happened and prevent recurrence</li>
      </ol>
    `
  }
];

/* ======================== INTERACTIVE CHECKLISTS DATA ======================== */
const CHECKLISTS_DATA = [
  {
    id: "cl-phishing",
    name: "Phishing Safety",
    icon: "fas fa-fish",
    items: [
      "Verify sender email addresses before responding",
      "Hover over links to inspect actual URLs",
      "Never share passwords or OTPs via email",
      "Report suspicious emails to IT security",
      "Enable MFA on all email accounts",
      "Be suspicious of urgent/threatening messages",
      "Verify requests through official channels",
      "Check for spelling errors in sender domains"
    ]
  },
  {
    id: "cl-password",
    name: "Password Security",
    icon: "fas fa-key",
    items: [
      "Use 16+ character passwords or passphrases",
      "Enable MFA on all critical accounts",
      "Use a password manager for all accounts",
      "Never reuse passwords across services",
      "Check haveibeenpwned.com for breaches",
      "Store backup codes in a secure location",
      "Use passkeys where supported",
      "Change passwords after any reported breach"
    ]
  },
  {
    id: "cl-email",
    name: "Email Security",
    icon: "fas fa-envelope",
    items: [
      "Verify sender identity and domain",
      "Inspect links before clicking",
      "Never open unexpected attachments",
      "Check email authentication (SPF/DKIM/DMARC)",
      "Use email encryption for sensitive messages",
      "Disable automatic image loading",
      "Report phishing to your email provider",
      "Review email forwarding rules regularly"
    ]
  },
  {
    id: "cl-device",
    name: "Device Security",
    icon: "fas fa-laptop",
    items: [
      "Keep OS and software updated",
      "Enable automatic security updates",
      "Use antivirus and endpoint protection",
      "Enable full disk encryption",
      "Lock your device when unattended",
      "Disable unused services and ports",
      "Enable firewall on all devices",
      "Review installed applications regularly"
    ]
  },
  {
    id: "cl-browsing",
    name: "Safe Browsing",
    icon: "fas fa-globe",
    items: [
      "Check for HTTPS before entering credentials",
      "Keep browser updated to latest version",
      "Only install trusted browser extensions",
      "Enable pop-up blocker",
      "Block third-party cookies",
      "Clear browsing data regularly",
      "Use private mode on shared computers",
      "Enable HTTPS-Only mode"
    ]
  },
  {
    id: "cl-mobile",
    name: "Mobile Security",
    icon: "fas fa-mobile-screen-button",
    items: [
      "Install apps from official stores only",
      "Review and minimize app permissions",
      "Keep device OS and apps updated",
      "Enable biometric authentication",
      "Enable remote wipe and locate",
      "Avoid sensitive transactions on public Wi-Fi",
      "Turn off Bluetooth/NFC when not needed",
      "Enable automatic backups"
    ]
  },
  {
    id: "cl-remote-work",
    name: "Remote Work Security",
    icon: "fas fa-house-laptop",
    items: [
      "Use company VPN for all work connections",
      "Secure your home Wi-Fi with WPA3",
      "Lock your computer when stepping away",
      "Don't use personal devices for work data",
      "Keep work and personal accounts separate",
      "Attend security awareness training",
      "Report security incidents immediately",
      "Use encrypted communication tools"
    ]
  }
];

/* ======================== POPULAR RESOURCES IDS ======================== */
const POPULAR_IDS = [
  "res-phishing-checklist",
  "res-password-security",
  "res-cyber-safety-handbook",
  "res-soc-roadmap"
];

/* ======================== CATEGORIES ======================== */
const CATEGORIES = [
  "All", "Cybersecurity Basics", "Phishing", "Password Security",
  "Email Security", "Network Security", "Web Security", "Mobile Security",
  "Cloud Security", "SOC & Incident Response", "Cybersecurity Careers"
];

/* ======================== STATE ======================== */
let currentFilter = "All";
let currentSearch = "";

/* ======================== INITIALIZATION ======================== */
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('resources-grid')) {
    initResourcesPage();
  }
});

function initResourcesPage() {
  renderProgressTracker();
  renderSearchBar();
  renderFilterBar();
  renderPopularResources();
  renderResourceCards();
  renderChecklists();
  renderDisclaimer();
  loadChecklistState();
  updateProgressTracker();
}

/* ======================== PROGRESS TRACKER ======================== */
function getViewedResources() {
  try {
    return JSON.parse(localStorage.getItem('ps_viewed_resources') || '[]');
  } catch { return []; }
}

function markResourceViewed(id) {
  const viewed = getViewedResources();
  if (!viewed.includes(id)) {
    viewed.push(id);
    localStorage.setItem('ps_viewed_resources', JSON.stringify(viewed));
    updateProgressTracker();
  }
}

function renderProgressTracker() {
  const section = document.getElementById('res-progress-section');
  if (!section) return;

  const viewed = getViewedResources();
  const total = RESOURCES_DATA.length;
  const pct = total > 0 ? Math.round((viewed.length / total) * 100) : 0;

  let badge1 = viewed.length >= 3 ? 'earned' : '';
  let badge2 = viewed.length >= 7 ? 'earned purple' : '';
  let badge3 = viewed.length >= total ? 'earned gold' : '';

  section.innerHTML = `
    <div class="res-progress-info">
      <div class="res-progress-title">Resources Viewed</div>
      <div class="res-progress-count"><span>${viewed.length}</span> / ${total}</div>
    </div>
    <div class="res-progress-bar-wrap">
      <div class="res-progress-bar-bg">
        <div class="res-progress-bar-fill" style="width: ${pct}%"></div>
      </div>
      <div class="res-progress-pct">${pct}% Complete</div>
    </div>
    <div class="res-badges">
      <span class="res-badge ${badge1}" title="View 3 resources"><i class="fas fa-compass"></i> Resource Explorer</span>
      <span class="res-badge ${badge2}" title="View 7 resources"><i class="fas fa-graduation-cap"></i> Security Learner</span>
      <span class="res-badge ${badge3}" title="View all resources"><i class="fas fa-shield-halved"></i> Cyber Defender</span>
    </div>
  `;
}

function updateProgressTracker() {
  renderProgressTracker();
}

/* ======================== SEARCH BAR ======================== */
function renderSearchBar() {
  const section = document.getElementById('res-search-section');
  if (!section) return;

  section.innerHTML = `
    <div class="res-search-wrap">
      <input type="text" class="res-search-bar" id="res-search-input" placeholder="Search cybersecurity resources..." autocomplete="off" />
      <i class="fas fa-search res-search-icon"></i>
      <button class="res-search-clear" id="res-search-clear"><i class="fas fa-times"></i></button>
    </div>
  `;

  const input = document.getElementById('res-search-input');
  const clearBtn = document.getElementById('res-search-clear');

  input.addEventListener('input', () => {
    currentSearch = input.value.trim().toLowerCase();
    clearBtn.classList.toggle('visible', currentSearch.length > 0);
    filterAndRender();
  });

  clearBtn.addEventListener('click', () => {
    input.value = '';
    currentSearch = '';
    clearBtn.classList.remove('visible');
    filterAndRender();
    input.focus();
  });
}

/* ======================== FILTER BAR ======================== */
function renderFilterBar() {
  const section = document.getElementById('res-filter-section');
  if (!section) return;

  section.innerHTML = CATEGORIES.map(cat =>
    `<button class="res-filter-btn${cat === 'All' ? ' active' : ''}" data-cat="${cat}">${cat}</button>`
  ).join('');

  section.querySelectorAll('.res-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      section.querySelectorAll('.res-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.cat;
      filterAndRender();
    });
  });
}

/* ======================== POPULAR RESOURCES ======================== */
function renderPopularResources() {
  const section = document.getElementById('res-popular-section');
  if (!section) return;

  const populars = POPULAR_IDS.map(id => RESOURCES_DATA.find(r => r.id === id)).filter(Boolean);

  section.innerHTML = `
    <div class="res-popular-title"><i class="fas fa-fire"></i> Most Popular Resources</div>
    <div class="res-popular-grid">
      ${populars.map(r => `
        <div class="res-popular-card" data-id="${r.id}">
          <span class="res-popular-badge">Popular</span>
          <div class="pop-icon"><i class="${r.icon}"></i></div>
          <div class="pop-title">${r.title}</div>
          <div class="pop-cat">${r.category}</div>
        </div>
      `).join('')}
    </div>
  `;

  section.querySelectorAll('.res-popular-card').forEach(card => {
    card.addEventListener('click', () => {
      const data = RESOURCES_DATA.find(r => r.id === card.dataset.id);
      if (data) openResourceModal(data);
    });
  });
}

/* ======================== RESOURCE CARDS ======================== */
function renderResourceCards() {
  filterAndRender();
}

function filterAndRender() {
  const grid = document.getElementById('resources-grid');
  if (!grid) return;

  let filtered = RESOURCES_DATA.filter(r => {
    const matchCat = currentFilter === 'All' || r.category === currentFilter;
    if (!matchCat) return false;
    if (!currentSearch) return true;
    const searchStr = `${r.title} ${r.description} ${r.category} ${r.keywords.join(' ')}`.toLowerCase();
    return searchStr.includes(currentSearch);
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="res-empty-state visible">
        <div class="res-empty-icon"><i class="fas fa-search"></i></div>
        <div class="res-empty-title">No resources found</div>
        <div class="res-empty-desc">Try another keyword or select a different category.</div>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map((r, i) => {
    const diffClass = r.difficulty === 'Beginner' ? 'difficulty-beginner' :
                      r.difficulty === 'Intermediate' ? 'difficulty-intermediate' : 'difficulty-advanced';
    return `
    <div class="resource-card" data-id="${r.id}" style="animation-delay: ${i * 0.06}s">
      <div class="res-card-header">
        <div class="res-card-icon"><i class="${r.icon}"></i></div>
        <span class="res-card-category">${r.category}</span>
      </div>
      <div class="res-card-title">${r.title}</div>
      <div class="res-card-desc">${r.description}</div>
      <div class="res-card-meta">
        <span class="res-meta-tag ${diffClass}"><i class="fas fa-signal"></i> ${r.difficulty}</span>
        <span class="res-meta-tag"><i class="fas fa-file-alt"></i> ${r.type}</span>
      </div>
      <div class="res-card-actions">
        <button class="btn btn-outline btn-sm res-view-btn" data-id="${r.id}"><i class="fas fa-eye"></i> View</button>
        <button class="btn btn-primary btn-sm res-download-btn" data-id="${r.id}"><i class="fas fa-download"></i> Download</button>
      </div>
    </div>`;
  }).join('');

  grid.querySelectorAll('.res-view-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const data = RESOURCES_DATA.find(r => r.id === btn.dataset.id);
      if (data) openResourceModal(data);
    });
  });

  grid.querySelectorAll('.res-download-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const data = RESOURCES_DATA.find(r => r.id === btn.dataset.id);
      if (data) downloadResource(data);
    });
  });
}

/* ======================== RESOURCE VIEW MODAL ======================== */
function openResourceModal(res) {
  markResourceViewed(res.id);

  let overlay = document.querySelector('.res-modal-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'res-modal-overlay';
    overlay.innerHTML = `<div class="res-modal"></div>`;
    document.body.appendChild(overlay);
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeModal();
    });
  }

  const modal = overlay.querySelector('.res-modal');
  const diffClass = res.difficulty === 'Beginner' ? 'difficulty-beginner' :
                    res.difficulty === 'Intermediate' ? 'difficulty-intermediate' : 'difficulty-advanced';

  modal.innerHTML = `
    <div class="res-modal-header">
      <button class="res-modal-close"><i class="fas fa-times"></i></button>
      <div class="res-modal-meta">
        <span class="tag" style="background:rgba(0,240,255,0.1); color:var(--accent-cyan); border:1px solid var(--border-cyan);">${res.category}</span>
        <span class="res-meta-tag ${diffClass}"><i class="fas fa-signal"></i> ${res.difficulty}</span>
        <span class="res-meta-tag"><i class="fas fa-file-alt"></i> ${res.type}</span>
      </div>
      <h2 class="res-modal-title">${res.title}</h2>
    </div>
    <div class="res-modal-body">
      ${res.tableOfContents ? `
        <div class="res-modal-toc">
          <h4><i class="fas fa-list"></i> Table of Contents</h4>
          <ol>${res.tableOfContents.map(t => `<li>${t}</li>`).join('')}</ol>
        </div>
      ` : ''}
      <div class="res-modal-content">${res.contentHTML}</div>
      ${res.keyTakeaways ? `
        <div class="res-modal-takeaways">
          <h4><i class="fas fa-lightbulb"></i> Key Takeaways</h4>
          <ul>${res.keyTakeaways.map(t => `<li>${t}</li>`).join('')}</ul>
        </div>
      ` : ''}
      ${res.securityTips ? `
        <div class="res-modal-tips">
          <h4><i class="fas fa-shield-halved"></i> Security Tips</h4>
          <ul>${res.securityTips.map(t => `<li>${t}</li>`).join('')}</ul>
        </div>
      ` : ''}
    </div>
    <div class="res-modal-footer">
      <button class="btn btn-secondary btn-sm res-modal-print"><i class="fas fa-print"></i> Print Resource</button>
      <button class="btn btn-primary btn-sm res-modal-download"><i class="fas fa-download"></i> Download Resource</button>
      <button class="btn btn-outline btn-sm res-modal-close-btn"><i class="fas fa-times"></i> Close</button>
    </div>
  `;

  modal.querySelector('.res-modal-close').addEventListener('click', closeModal);
  modal.querySelector('.res-modal-close-btn').addEventListener('click', closeModal);
  modal.querySelector('.res-modal-print').addEventListener('click', () => window.print());
  modal.querySelector('.res-modal-download').addEventListener('click', () => downloadResource(res));

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';

  document.addEventListener('keydown', escHandler);
}

function closeModal() {
  const overlay = document.querySelector('.res-modal-overlay');
  if (overlay) {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    document.removeEventListener('keydown', escHandler);
  }
}

function escHandler(e) {
  if (e.key === 'Escape') closeModal();
}

/* ======================== DOWNLOAD SYSTEM ======================== */
function downloadResource(res) {
  const htmlContent = generateDownloadHTML(res);
  const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = res.fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  showToast(`Downloaded: ${res.title}`, 'success');
}

function generateDownloadHTML(res) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${res.title} | PhishShield Resources</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.7; color: #1e293b; max-width: 800px; margin: 0 auto; padding: 2rem; }
    h1 { font-size: 1.8rem; color: #0f172a; margin-bottom: 0.5rem; border-bottom: 3px solid #0ea5e9; padding-bottom: 0.5rem; }
    h2 { font-size: 1rem; color: #64748b; margin-bottom: 1.5rem; }
    h3 { font-size: 1.2rem; color: #0f172a; margin: 1.5rem 0 0.75rem; padding-bottom: 0.4rem; border-bottom: 1px solid #e2e8f0; }
    p { margin-bottom: 0.75rem; font-size: 0.95rem; }
    ul, ol { padding-left: 1.5rem; margin-bottom: 1rem; }
    li { margin-bottom: 0.4rem; font-size: 0.92rem; }
    strong { color: #0f172a; }
    .meta { display: flex; gap: 1rem; margin-bottom: 1.5rem; flex-wrap: wrap; }
    .meta span { font-size: 0.8rem; padding: 0.25rem 0.75rem; border-radius: 4px; background: #f1f5f9; color: #475569; border: 1px solid #e2e8f0; }
    .takeaways { background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 1.25rem; margin-top: 1.5rem; }
    .takeaways h4 { color: #166534; margin-bottom: 0.5rem; }
    .takeaways li::before { content: '✓ '; color: #16a34a; font-weight: bold; }
    .takeaways ul { list-style: none; padding-left: 0; }
    .tips { background: #faf5ff; border: 1px solid #e9d5ff; border-radius: 8px; padding: 1.25rem; margin-top: 1rem; }
    .tips h4 { color: #7c3aed; margin-bottom: 0.5rem; }
    .tips li::before { content: '🛡️ '; }
    .tips ul { list-style: none; padding-left: 0; }
    .footer { margin-top: 2rem; padding-top: 1rem; border-top: 1px solid #e2e8f0; font-size: 0.8rem; color: #94a3b8; text-align: center; }
    .highlight-box { background: #f0f9ff; border: 1px solid #bae6fd; border-radius: 8px; padding: 1rem; margin: 1rem 0; }
    .warning-box { background: #fef2f2; border: 1px solid #fecaca; border-radius: 8px; padding: 1rem; margin: 1rem 0; }
    .flow-diagram { display: flex; flex-direction: column; align-items: center; gap: 0.25rem; margin: 1rem 0; padding: 1rem; background: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0; }
    .flow-step { background: #e0f2fe; border: 1px solid #7dd3fc; border-radius: 6px; padding: 0.5rem 1.5rem; color: #0369a1; font-weight: 600; text-align: center; }
    .flow-arrow { color: #94a3b8; font-size: 1.2rem; }
    @media print { body { padding: 1rem; } h1 { font-size: 1.5rem; } }
  </style>
</head>
<body>
  <h1>${res.title}</h1>
  <h2>PhishShield — Cybersecurity Education Resource</h2>
  <div class="meta">
    <span>📂 ${res.category}</span>
    <span>📊 ${res.difficulty}</span>
    <span>📄 ${res.type}</span>
  </div>
  ${res.tableOfContents ? `<h3>Table of Contents</h3><ol>${res.tableOfContents.map(t => `<li>${t}</li>`).join('')}</ol>` : ''}
  ${res.contentHTML}
  ${res.keyTakeaways ? `<div class="takeaways"><h4>✅ Key Takeaways</h4><ul>${res.keyTakeaways.map(t => `<li>${t}</li>`).join('')}</ul></div>` : ''}
  ${res.securityTips ? `<div class="tips"><h4>🛡️ Security Tips</h4><ul>${res.securityTips.map(t => `<li>${t}</li>`).join('')}</ul></div>` : ''}
  <div class="footer">
    <p>© 2026 PhishShield — Cybersecurity Awareness Portal</p>
    <p>All resources are for cybersecurity education and awareness purposes only.</p>
  </div>
</body>
</html>`;
}

/* ======================== INTERACTIVE CHECKLISTS ======================== */
function renderChecklists() {
  const section = document.getElementById('res-checklists-section');
  if (!section) return;

  section.innerHTML = `
    <div class="res-checklists-title"><i class="fas fa-clipboard-list"></i> Interactive Security Checklists</div>
    <div class="res-checklists-grid">
      ${CHECKLISTS_DATA.map(cl => `
        <div class="res-checklist-card" data-cl-id="${cl.id}">
          <div class="res-cl-header">
            <div class="res-cl-name"><i class="${cl.icon}"></i> ${cl.name}</div>
            <span class="res-cl-progress-text" id="pct-${cl.id}">0%</span>
          </div>
          <div class="res-cl-progress-bar">
            <div class="res-cl-progress-fill" id="bar-${cl.id}"></div>
          </div>
          <div class="res-cl-items" id="items-${cl.id}">
            ${cl.items.map((item, idx) => `
              <div class="res-cl-item" data-cl="${cl.id}" data-idx="${idx}">
                <div class="res-cl-checkbox"><i class="fas fa-check"></i></div>
                <span class="res-cl-label">${item}</span>
              </div>
            `).join('')}
          </div>
          <div class="res-cl-actions">
            <button class="btn btn-outline btn-sm res-cl-reset" data-cl="${cl.id}"><i class="fas fa-undo"></i> Reset</button>
            <button class="btn btn-secondary btn-sm res-cl-print" data-cl="${cl.id}"><i class="fas fa-print"></i> Print</button>
          </div>
        </div>
      `).join('')}
    </div>
  `;

  // Item click handlers
  section.querySelectorAll('.res-cl-item').forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('checked');
      saveChecklistState(item.dataset.cl);
      updateChecklistProgress(item.dataset.cl);
    });
  });

  // Reset handlers
  section.querySelectorAll('.res-cl-reset').forEach(btn => {
    btn.addEventListener('click', () => {
      const clId = btn.dataset.cl;
      document.querySelectorAll(`.res-cl-item[data-cl="${clId}"]`).forEach(item => {
        item.classList.remove('checked');
      });
      saveChecklistState(clId);
      updateChecklistProgress(clId);
    });
  });

  // Print handlers
  section.querySelectorAll('.res-cl-print').forEach(btn => {
    btn.addEventListener('click', () => {
      const clId = btn.dataset.cl;
      const cl = CHECKLISTS_DATA.find(c => c.id === clId);
      if (cl) printChecklist(cl);
    });
  });
}

function saveChecklistState(clId) {
  const items = document.querySelectorAll(`.res-cl-item[data-cl="${clId}"]`);
  const state = Array.from(items).map(item => item.classList.contains('checked'));
  localStorage.setItem(`ps_cl_${clId}`, JSON.stringify(state));
}

function loadChecklistState() {
  CHECKLISTS_DATA.forEach(cl => {
    try {
      const state = JSON.parse(localStorage.getItem(`ps_cl_${cl.id}`) || '[]');
      const items = document.querySelectorAll(`.res-cl-item[data-cl="${cl.id}"]`);
      items.forEach((item, idx) => {
        if (state[idx]) item.classList.add('checked');
      });
      updateChecklistProgress(cl.id);
    } catch {}
  });
}

function updateChecklistProgress(clId) {
  const items = document.querySelectorAll(`.res-cl-item[data-cl="${clId}"]`);
  const checked = document.querySelectorAll(`.res-cl-item[data-cl="${clId}"].checked`).length;
  const total = items.length;
  const pct = total > 0 ? Math.round((checked / total) * 100) : 0;

  const pctEl = document.getElementById(`pct-${clId}`);
  const barEl = document.getElementById(`bar-${clId}`);
  if (pctEl) pctEl.textContent = `${pct}%`;
  if (barEl) barEl.style.width = `${pct}%`;
}

function printChecklist(cl) {
  const checked = [];
  document.querySelectorAll(`.res-cl-item[data-cl="${cl.id}"]`).forEach(item => {
    checked.push(item.classList.contains('checked'));
  });

  const printHTML = `<!DOCTYPE html><html><head><title>${cl.name} Checklist — PhishShield</title>
    <style>body{font-family:sans-serif;padding:2rem;max-width:700px;margin:0 auto}h1{font-size:1.5rem;border-bottom:2px solid #0ea5e9;padding-bottom:0.5rem}
    .item{display:flex;align-items:center;gap:0.75rem;padding:0.5rem 0;border-bottom:1px solid #f1f5f9}
    .box{width:18px;height:18px;border:2px solid #94a3b8;border-radius:3px;display:flex;align-items:center;justify-content:center;font-size:12px}
    .checked .box{background:#10b981;border-color:#10b981;color:#fff}
    .checked .label{text-decoration:line-through;color:#94a3b8}
    .footer{margin-top:2rem;font-size:0.8rem;color:#94a3b8;text-align:center;border-top:1px solid #e2e8f0;padding-top:1rem}</style></head>
    <body><h1>${cl.name} Checklist</h1><p style="color:#64748b;margin-bottom:1.5rem">PhishShield Security Checklist</p>
    ${cl.items.map((item, i) => `<div class="item${checked[i] ? ' checked' : ''}"><div class="box">${checked[i] ? '✓' : ''}</div><span class="label">${item}</span></div>`).join('')}
    <div class="footer">© 2026 PhishShield — For educational and cybersecurity awareness purposes only.</div></body></html>`;

  const w = window.open('', '_blank');
  w.document.write(printHTML);
  w.document.close();
  w.setTimeout(() => { w.print(); }, 300);
}

/* ======================== DISCLAIMER ======================== */
function renderDisclaimer() {
  const section = document.getElementById('res-disclaimer-section');
  if (!section) return;
  section.innerHTML = `
    <div class="res-disclaimer">
      <p><i class="fas fa-info-circle"></i> All resources provided by PhishShield are intended for cybersecurity education and awareness purposes. Examples and simulations are provided for learning and security awareness only.</p>
    </div>
  `;
}



