/* ==========================================================================
   PHISHSHIELD - CYBERSECURITY QUIZ SYSTEM ENGINE (quiz.js)
   50+ Questions Database, Category/Difficulty Filters, Countdown Timer,
   Immediate Explanations, High Score & Badge LocalStorage Persistence
   ========================================================================== */

const QUIZ_QUESTIONS = [
  // Cyber Basics (1-7)
  {
    category: "Cyber Basics",
    difficulty: "Easy",
    question: "What does the 'S' in HTTPS stand for?",
    options: ["System", "Secure", "Server", "Sockets"],
    answer: 1,
    explanation: "HTTPS stands for Hypertext Transfer Protocol Secure. The 'S' signifies that session communications between browser and server are encrypted using SSL/TLS."
  },
  {
    category: "Cyber Basics",
    difficulty: "Easy",
    question: "Which of the following is considered a strong password best practice?",
    options: ["Using your birth date and pet name", "Using 12+ characters combining uppercase, lowercase, numbers, and symbols", "Reusing the same password across 5 sites", "Changing your password every 3 days"],
    answer: 1,
    explanation: "Length and complexity entropy (12+ characters with mixed character sets) provide mathematical resistance against brute-force and dictionary attacks."
  },
  {
    category: "Cyber Basics",
    difficulty: "Easy",
    question: "What is Multi-Factor Authentication (MFA)?",
    options: ["Entering 2 passwords", "A security system requiring two or more distinct evidence factors to verify identity", "Logging in from 2 different computers", "Using two different web browsers"],
    answer: 1,
    explanation: "MFA requires two or more verification categories: Something you know (password), Something you have (authenticator app/security key), or Something you are (biometrics)."
  },
  {
    category: "Cyber Basics",
    difficulty: "Medium",
    question: "What is the primary function of a Firewall in a network?",
    options: ["To speed up internet connectivity", "To filter incoming and outgoing network traffic based on predefined security rules", "To store user passwords", "To automatically update operating system software"],
    answer: 1,
    explanation: "A firewall acts as a defensive barrier inspecting IP packet headers against established access control lists (ACLs) to block unauthorized network access."
  },
  {
    category: "Cyber Basics",
    difficulty: "Medium",
    question: "What is Zero-Trust Architecture?",
    options: ["A network where no computers are allowed", "A security framework operating on 'Never Trust, Always Verify' for every access request", "A cloud platform without password requirements", "A firewall that blocks 100% of websites"],
    answer: 1,
    explanation: "Zero-Trust assumes that threat actors exist both outside and inside the network boundary, requiring strict identity verification and least-privilege access for every request."
  },
  {
    category: "Cyber Basics",
    difficulty: "Easy",
    question: "What is Data Encryption?",
    options: ["Compressing a file to reduce its size", "Converting plain text into unreadable ciphertext using cryptographic algorithms", "Deleting confidential files permanently", "Backing up files to an external hard drive"],
    answer: 1,
    explanation: "Encryption transforms readable plaintext into unreadable ciphertext using a mathematical key, ensuring confidentiality even if intercepted."
  },
  {
    category: "Cyber Basics",
    difficulty: "Medium",
    question: "What is the CIA Triad in Information Security?",
    options: ["Central Intelligence Agency", "Confidentiality, Integrity, and Availability", "Control, Inspection, and Authentication", "Cloud, Internet, and Automation"],
    answer: 1,
    explanation: "The CIA Triad forms the foundational model for security policy: Confidentiality (data privacy), Integrity (preventing unauthorized modification), and Availability (system uptime)."
  },

  // Phishing (8-14)
  {
    category: "Phishing",
    difficulty: "Easy",
    question: "What is Spear Phishing?",
    options: ["Phishing aimed at catching oceanic fish", "A targeted phishing attack customized for a specific individual or organization", "Phishing via voice calls", "Mass automated email spam"],
    answer: 1,
    explanation: "Spear Phishing leverages customized personal details (gathered via OSINT) to craft highly convincing tailored fraudulent emails."
  },
  {
    category: "Phishing",
    difficulty: "Easy",
    question: "What is Smishing?",
    options: ["Phishing via Social Media", "Phishing conducted through SMS text messages", "Phishing through video calls", "Malicious software on smartphones"],
    answer: 1,
    explanation: "Smishing combines 'SMS' and 'Phishing', using fraudulent text messages with malicious links or urgent phone numbers."
  },
  {
    category: "Phishing",
    difficulty: "Medium",
    question: "What is Vishing?",
    options: ["Phishing via Voice phone calls", "Phishing using virtual reality", "Phishing targeting video games", "Phishing via email attachments"],
    answer: 0,
    explanation: "Vishing (Voice Phishing) uses phone calls or VoIP spoofing to trick victims into revealing financial data or credentials over the phone."
  },
  {
    category: "Phishing",
    difficulty: "Medium",
    question: "Which email header mechanism verifies whether a sending mail server IP is authorized by the domain owner?",
    options: ["DKIM", "SPF", "DMARC", "TLS"],
    answer: 1,
    explanation: "SPF (Sender Policy Framework) allows domain owners to publish a DNS TXT record listing authorized sending IP addresses."
  },
  {
    category: "Phishing",
    difficulty: "Hard",
    question: "What does DMARC do when an email fails SPF and DKIM checks?",
    options: ["Deletes the sender's domain", "Instructs the receiving mail server how to handle the email (None, Quarantine, or Reject)", "Automatically replies to the sender with a warning", "Encrypts the message"],
    answer: 1,
    explanation: "DMARC leverages SPF and DKIM authentication to define receiving policies (`p=none`, `p=quarantine`, or `p=reject`) against spoofed emails."
  },
  {
    category: "Phishing",
    difficulty: "Easy",
    question: "What is Typosquatting in phishing campaigns?",
    options: ["Typing too fast on a keyboard", "Registering domain names slightly misspelled from legitimate sites (e.g. paypa1.com)", "Sending emails with spelling mistakes", "Deleting typos in source code"],
    answer: 1,
    explanation: "Typosquatting relies on common user typing errors to direct victims to spoofed malicious web portals."
  },
  {
    category: "Phishing",
    difficulty: "Medium",
    question: "If an email claims urgent action required within 15 minutes to prevent account termination, this is an indicator of:",
    options: ["High quality customer service", "Social engineering artificially creating urgency to bypass critical thinking", "A server maintenance routine", "Standard bank protocol"],
    answer: 1,
    explanation: "Artificial urgency induces panic, encouraging victims to act recklessly before checking domain headers or link targets."
  },

  // Networking (15-21)
  {
    category: "Networking",
    difficulty: "Easy",
    question: "Which port does standard HTTP use by default?",
    options: ["Port 21", "Port 80", "Port 443", "Port 22"],
    answer: 1,
    explanation: "Unencrypted HTTP operates on TCP port 80, whereas encrypted HTTPS operates on TCP port 443."
  },
  {
    category: "Networking",
    difficulty: "Medium",
    question: "Which port does secure SSH (Secure Shell) use by default?",
    options: ["Port 22", "Port 23", "Port 53", "Port 3389"],
    answer: 0,
    explanation: "SSH uses TCP port 22 for encrypted CLI remote management, replacing unencrypted Telnet (port 23)."
  },
  {
    category: "Networking",
    difficulty: "Medium",
    question: "What is DNS (Domain Name System)?",
    options: ["A system that encrypts hard drives", "The phonebook of the internet that translates human domain names to IP addresses", "A network firewall protocol", "A web browser plugin"],
    answer: 1,
    explanation: "DNS resolves human-friendly hostnames (like `phishshield.org`) into machine-routable IP addresses (like `192.0.2.1`)."
  },
  {
    category: "Networking",
    difficulty: "Hard",
    question: "What occurs during a TCP 3-Way Handshake?",
    options: ["GET, POST, PUT", "SYN, SYN-ACK, ACK", "CONNECT, ACCEPT, CONFIRM", "PING, PONG, ACK"],
    answer: 1,
    explanation: "Establishing a TCP connection requires: 1. Client sends SYN, 2. Server responds SYN-ACK, 3. Client acknowledges with ACK."
  },
  {
    category: "Networking",
    difficulty: "Medium",
    question: "What does ARP (Address Resolution Protocol) resolve?",
    options: ["Domain names to IP addresses", "IP addresses to Physical MAC addresses", "MAC addresses to URLs", "Ports to Protocol names"],
    answer: 1,
    explanation: "ARP maps Layer 3 IPv4 addresses to Layer 2 physical Ethernet MAC addresses on local subnets."
  },
  {
    category: "Networking",
    difficulty: "Medium",
    question: "What is a Subnet Mask used for?",
    options: ["Hiding your identity online", "Dividing an IP address into Network ID and Host ID portions", "Encrypting Wi-Fi passwords", "Blocking malware downloads"],
    answer: 1,
    explanation: "A subnet mask (e.g. 255.255.255.0) separates the network address portion of an IP from the host portion."
  },
  {
    category: "Networking",
    difficulty: "Hard",
    question: "What protocol is used for safe, encrypted VPN tunnels at Layer 3?",
    options: ["IPsec", "HTTP", "FTP", "POP3"],
    answer: 0,
    explanation: "IPsec (Internet Protocol Security) authenticates and encrypts IPv4/IPv6 data packets at Layer 3."
  },

  // Ethical Hacking (22-28)
  {
    category: "Ethical Hacking",
    difficulty: "Easy",
    question: "What is a White Hat Hacker?",
    options: ["A cybercriminal stealing money", "An ethical security professional authorized to find and fix vulnerabilities", "A government spy", "A hacker who only targets mobile phones"],
    answer: 1,
    explanation: "White Hat hackers use offensive security techniques ethically and legally under written permission to help organizations patch flaws."
  },
  {
    category: "Ethical Hacking",
    difficulty: "Easy",
    question: "What is a Bug Bounty Program?",
    options: ["A reward given to farmers", "A deal offered by software vendors paying security researchers to report security vulnerabilities responsibly", "A virus removal software", "An illegal hacking contest"],
    answer: 1,
    explanation: "Bug bounty platforms (HackerOne, Bugcrowd) reward ethical hackers financially for disclosing vulnerabilities before exploit disclosure."
  },
  {
    category: "Ethical Hacking",
    difficulty: "Medium",
    question: "What is the first step in the Ethical Hacking Methodology?",
    options: ["Exploitation", "Reconnaissance (Information Gathering)", "Reporting", "Privilege Escalation"],
    answer: 1,
    explanation: "Reconnaissance gathers intelligence about target subnets, DNS records, and OSINT before initiating active scanning."
  },
  {
    category: "Ethical Hacking",
    difficulty: "Medium",
    question: "What is Penetration Testing?",
    options: ["Testing hard drive durability", "An authorized simulated cyberattack against computer systems to evaluate security", "Installing antivirus on 100 PCs", "Monitoring user web history"],
    answer: 1,
    explanation: "Penetration testing simulates real-world threat actor techniques to measure enterprise vulnerability resilience."
  },
  {
    category: "Ethical Hacking",
    difficulty: "Hard",
    question: "What is Lateral Movement during a penetration test?",
    options: ["Moving your laptop to another desk", "Pivoting through an internal network from a compromised host to access additional targets", "Rotating passwords every week", "Switching from Wi-Fi to Ethernet"],
    answer: 1,
    explanation: "Lateral movement involves leveraging credentials or exploits on a compromised machine to pivot to adjacent internal systems."
  },
  {
    category: "Ethical Hacking",
    difficulty: "Medium",
    question: "What is Privilege Escalation?",
    options: ["Upgrading your internet bandwidth", "Exploiting a bug or misconfiguration to gain elevated access (e.g. root/administrator) from a low-privilege user account", "Buying a new computer", "Creating a guest account"],
    answer: 1,
    explanation: "Privilege escalation allows an attacker to elevate standard user privileges to administrative / system root."
  },
  {
    category: "Ethical Hacking",
    difficulty: "Hard",
    question: "What does OSINT stand for in reconnaissance?",
    options: ["Operating System Integrated Network Topology", "Open Source Intelligence", "Optical Sensor Internal Node", "Offensive Security Interface Network"],
    answer: 1,
    explanation: "OSINT involves collecting publicly accessible data from search engines, social media, public records, and DNS registers."
  },

  // Web Security (29-35)
  {
    category: "Web Security",
    difficulty: "Medium",
    question: "What is SQL Injection (SQLi)?",
    options: ["Injecting viruses into a hard drive", "Inserting malicious SQL queries into input fields to bypass authentication or extract database content", "A method to speed up database queries", "A web browser crash bug"],
    answer: 1,
    explanation: "SQLi exploits improperly sanitized input concatenated into dynamic SQL statements, executing raw DB commands."
  },
  {
    category: "Web Security",
    difficulty: "Medium",
    question: "How do developers effectively prevent SQL Injection vulnerabilities?",
    options: ["By hiding form input boxes", "Using Prepared Statements (Parameterized Queries)", "Encrypting the server hard drive", "Disabling JavaScript in web browsers"],
    answer: 1,
    explanation: "Prepared statements parameterize inputs, ensuring user input is treated purely as data rather than executable SQL syntax."
  },
  {
    category: "Web Security",
    difficulty: "Medium",
    question: "What is Cross-Site Scripting (XSS)?",
    options: ["An attack executing malicious client-side JavaScript in a target user's web browser", "A network cable failure", "Deleting database backups", "Sending bulk spam emails"],
    answer: 0,
    explanation: "XSS occurs when unescaped user input is rendered in the DOM, executing malicious scripts in the victim's browser context."
  },
  {
    category: "Web Security",
    difficulty: "Hard",
    question: "Which HTTP header helps mitigate XSS attacks by restricting sources of executable scripts?",
    options: ["Content-Security-Policy (CSP)", "Access-Control-Allow-Origin", "Strict-Transport-Security (HSTS)", "Cache-Control"],
    answer: 0,
    explanation: "CSP headers define whitelisted trusted domains for scripts, styles, and media execution."
  },
  {
    category: "Web Security",
    difficulty: "Medium",
    question: "What cookie attribute prevents client-side JavaScript (like XSS scripts) from accessing sensitive session tokens?",
    options: ["Secure", "HTTPOnly", "SameSite", "Domain"],
    answer: 1,
    explanation: "The `HttpOnly` cookie flag blocks `document.cookie` access via JavaScript, protecting tokens against XSS theft."
  },
  {
    category: "Web Security",
    difficulty: "Hard",
    question: "What is Cross-Site Request Forgery (CSRF)?",
    options: ["Stealing server CPU processing power", "Forcing an authenticated victim's browser to send unauthorized HTTP requests to a vulnerable application", "Writing code in HTML", "Decrypting HTTPS traffic"],
    answer: 1,
    explanation: "CSRF exploits ambient session credentials (cookies) to execute unauthorized state-changing web requests."
  },
  {
    category: "Web Security",
    difficulty: "Medium",
    question: "What does OWASP stand for?",
    options: ["Online Web Application Security Protocol", "Open Web Application Security Project", "Official Worldwide Antivirus Security Platform", "Open Network Security Association"],
    answer: 1,
    explanation: "OWASP is a non-profit foundation producing open-source web application security standards (like the OWASP Top 10)."
  },

  // Password Security (36-40)
  {
    category: "Password Security",
    difficulty: "Easy",
    question: "What is a Brute-Force Attack?",
    options: ["Physically breaking a computer keyboard", "Systematically trying every possible character combination until the correct password is found", "Guessing a password based on a pet's name", "Stealing a USB drive"],
    answer: 1,
    explanation: "Brute-force attacks use automated computational scripts trying every combination (A-Z, 0-9, symbols) sequentially."
  },
  {
    category: "Password Security",
    difficulty: "Medium",
    question: "What is Cryptographic Password Salting?",
    options: ["Adding physical salt to hard drives", "Adding unique random characters to plaintext passwords before hashing to prevent Rainbow Table attacks", "Encrypting passwords twice", "Storing passwords in plain text"],
    answer: 1,
    explanation: "Salting ensures identical passwords produce completely unique cryptographic hashes, defeating precomputed rainbow tables."
  },
  {
    category: "Password Security",
    difficulty: "Easy",
    question: "Why should you use a Password Manager?",
    options: ["Because password managers auto-post on social media", "To generate and store unique, complex passwords for every site in an encrypted vault", "Because it speeds up internet downloads", "To share passwords with public users"],
    answer: 1,
    explanation: "Password managers eliminate password reuse vulnerabilities by generating and filling strong random credentials automatically."
  },
  {
    category: "Password Security",
    difficulty: "Medium",
    question: "What is a Dictionary Attack?",
    options: ["Searching a dictionary for word definitions", "An automated attack trying thousands of common dictionary words and leaked passwords", "Translating software to another language", "Searching source code comments"],
    answer: 1,
    explanation: "Dictionary attacks check lists of common words, phrases, and leaked password dumps (`rockyou.txt`) systematically."
  },
  {
    category: "Password Security",
    difficulty: "Hard",
    question: "Which password hashing algorithm is designed specifically to be computationally slow and resistant to GPU cracking?",
    options: ["MD5", "SHA-1", "bcrypt / Argon2", "CRC32"],
    answer: 2,
    explanation: "Algorithms like `bcrypt`, `Argon2`, and `PBKDF2` include configurable work factors (stretching) specifically slowing GPU mass cracking."
  },

  // Cloud & SOC (41-50)
  {
    category: "Cloud Security",
    difficulty: "Medium",
    question: "What is the Cloud Shared Responsibility Model?",
    options: ["The cloud provider is 100% responsible for all security", "Security responsibilities are shared: Provider manages cloud infrastructure, customer manages data & access", "The customer is 100% responsible for data center power", "No one is responsible for cloud security"],
    answer: 1,
    explanation: "In cloud computing (AWS/Azure), cloud providers secure underlying physical hardware and hypervisors, while customers secure IAM access and data."
  },
  {
    category: "Cloud Security",
    difficulty: "Easy",
    question: "What does SaaS stand for?",
    options: ["Software as a Service", "System as a Security", "Storage as a System", "Security as a Software"],
    answer: 0,
    explanation: "SaaS delivers hosted applications over the internet (e.g. Google Workspace, Microsoft 365) managed by vendor infrastructure."
  },
  {
    category: "Cloud Security",
    difficulty: "Medium",
    question: "What is an S3 Bucket Misconfiguration threat?",
    options: ["Overheating cloud servers", "Leaving public read/write permissions open on cloud storage buckets containing sensitive data", "Deleting S3 storage drives", "Using wrong credit cards for billing"],
    answer: 1,
    explanation: "Publicly accessible S3 buckets are a leading source of cloud data leaks due to weak IAM permission bucket policies."
  },
  {
    category: "SOC",
    difficulty: "Medium",
    question: "What does SIEM stand for?",
    options: ["Security Information and Event Management", "System Integration and Email Monitoring", "Secure Internet Enforcement Module", "Server Inspection and Execution Method"],
    answer: 0,
    explanation: "SIEM aggregates, analyzes, and correlates security logs from firewalls, servers, and applications across an enterprise."
  },
  {
    category: "SOC",
    difficulty: "Medium",
    question: "What is the primary role of a Tier 1 SOC Analyst?",
    options: ["Writing core Linux operating systems", "Triage incoming security alerts, inspect SIEM logs, and escalate verified threats", "Selling antivirus software to clients", "Designing electrical power grids"],
    answer: 1,
    explanation: "Tier 1 analysts continuously monitor SIEM alert queues, verify threat true-positives, and execute initial containment playbooks."
  },
  {
    category: "SOC",
    difficulty: "Hard",
    question: "What does IoC stand for in threat intelligence?",
    options: ["Indicator of Compromise", "Input of Control", "Integration of Cloud", "Inspection of Code"],
    answer: 0,
    explanation: "Indicators of Compromise (IoCs) are forensic artifacts (file SHA-256 hashes, malicious C2 IP addresses, suspicious domain names) indicating breach activity."
  },
  {
    category: "SOC",
    difficulty: "Hard",
    question: "What is Threat Hunting in modern SOC operations?",
    options: ["Hunting physical animals", "Proactively searching through network logs to discover hidden malicious activity that bypassed automated alerts", "Installing software updates", "Writing computer code"],
    answer: 1,
    explanation: "Threat hunting assumes attackers are already inside the perimeter and uses hypothesis-driven analytics to find stealthy threats."
  },
  {
    category: "Cloud Security",
    difficulty: "Medium",
    question: "What is IAM in Cloud Computing?",
    options: ["Identity and Access Management", "Internet Application Method", "Internal Anti-Malware", "Integrated System Monitor"],
    answer: 0,
    explanation: "IAM controls user identities, roles, and granular permissions defining who can access specific cloud resources."
  },
  {
    category: "SOC",
    difficulty: "Medium",
    question: "What is a False Positive alert in security monitoring?",
    options: ["An actual cyberattack that was ignored", "A benign event incorrectly flagged as suspicious by security tools", "A broken monitor screen", "A successful system backup"],
    answer: 1,
    explanation: "False Positives occur when harmless network activity triggers security alert signatures, requiring manual analyst triage."
  },
  {
    category: "SOC",
    difficulty: "Hard",
    question: "What is SOAR in SOC automation?",
    options: ["Security Orchestration, Automation, and Response", "System Operating and Recovery", "Software Organization and Analysis Report", "Secure Online Application Registry"],
    answer: 0,
    explanation: "SOAR platforms automate repetitive incident response tasks (blocking IPs, disabling compromised user accounts) via script playbooks."
  }
];

let currentQuizState = {
  questions: [],
  currentIndex: 0,
  score: 0,
  answers: [],
  timerInterval: null,
  timeLeft: 30
};

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('quiz-app-container')) {
    initQuizPage();
  }
});

function initQuizPage() {
  const startBtn = document.getElementById('start-quiz-btn');
  const catFilter = document.getElementById('quiz-cat-filter');
  const diffFilter = document.getElementById('quiz-diff-filter');

  if (startBtn) {
    startBtn.addEventListener('click', () => {
      const category = catFilter ? catFilter.value : 'all';
      const diff = diffFilter ? diffFilter.value : 'all';
      startQuiz(category, diff);
    });
  }
}

function startQuiz(category, difficulty) {
  let filtered = [...QUIZ_QUESTIONS];

  if (category !== 'all') {
    filtered = filtered.filter(q => q.category === category);
  }
  if (difficulty !== 'all') {
    filtered = filtered.filter(q => q.difficulty === difficulty);
  }

  if (filtered.length === 0) {
    if (typeof showToast === 'function') showToast("No quiz questions found matching filter criteria", "warning");
    return;
  }

  // Shuffle questions randomly
  filtered.sort(() => Math.random() - 0.5);
  currentQuizState.questions = filtered.slice(0, 15); // Pick 15 random questions
  currentQuizState.currentIndex = 0;
  currentQuizState.score = 0;
  currentQuizState.answers = [];

  document.getElementById('quiz-start-screen').style.display = 'none';
  document.getElementById('quiz-active-screen').style.display = 'block';
  document.getElementById('quiz-result-screen').style.display = 'none';

  renderQuestion();
}

function renderQuestion() {
  clearInterval(currentQuizState.timerInterval);
  currentQuizState.timeLeft = 30;

  const state = currentQuizState;
  const q = state.questions[state.currentIndex];

  document.getElementById('quiz-progress-text').textContent = `Question ${state.currentIndex + 1} of ${state.questions.length}`;
  document.getElementById('quiz-category-tag').textContent = `${q.category} • ${q.difficulty}`;
  document.getElementById('quiz-question-text').textContent = q.question;
  document.getElementById('quiz-explanation-box').style.display = 'none';
  document.getElementById('quiz-next-btn').style.display = 'none';

  const timerEl = document.getElementById('quiz-timer');
  timerEl.textContent = `⏳ ${state.timeLeft}s`;
  timerEl.style.color = 'var(--accent-cyan)';

  state.timerInterval = setInterval(() => {
    state.timeLeft--;
    timerEl.textContent = `⏳ ${state.timeLeft}s`;
    if (state.timeLeft <= 10) timerEl.style.color = 'var(--danger)';

    if (state.timeLeft <= 0) {
      clearInterval(state.timerInterval);
      handleAnswerSelect(-1); // Time out
    }
  }, 1000);

  const optionsGrid = document.getElementById('quiz-options-grid');
  optionsGrid.innerHTML = q.options.map((opt, idx) => `
    <button class="glass-card quiz-option-btn" data-idx="${idx}" style="text-align:left; padding:1rem; font-size:0.95rem; width:100%;">
      <span style="font-weight:700; color:var(--accent-cyan); margin-right:0.5rem;">${String.fromCharCode(65 + idx)}.</span> ${opt}
    </button>
  `).join('');

  const optionBtns = optionsGrid.querySelectorAll('.quiz-option-btn');
  optionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedIdx = parseInt(btn.getAttribute('data-idx'));
      clearInterval(state.timerInterval);
      handleAnswerSelect(selectedIdx);
    });
  });
}

function handleAnswerSelect(selectedIdx) {
  const state = currentQuizState;
  const q = state.questions[state.currentIndex];
  const optionBtns = document.querySelectorAll('.quiz-option-btn');

  optionBtns.forEach(btn => btn.disabled = true);

  const isCorrect = selectedIdx === q.answer;
  if (isCorrect) {
    state.score++;
  }

  state.answers.push({ question: q.question, selected: selectedIdx, correct: q.answer, isCorrect });

  optionBtns.forEach((btn, idx) => {
    if (idx === q.answer) {
      btn.style.borderColor = 'var(--success)';
      btn.style.backgroundColor = 'rgba(16, 185, 129, 0.2)';
    } else if (idx === selectedIdx && !isCorrect) {
      btn.style.borderColor = 'var(--danger)';
      btn.style.backgroundColor = 'rgba(255, 51, 102, 0.2)';
    }
  });

  const expBox = document.getElementById('quiz-explanation-box');
  expBox.style.display = 'block';
  expBox.className = `glass-card ${isCorrect ? 'correct-exp' : 'incorrect-exp'}`;
  expBox.style.borderLeft = `4px solid ${isCorrect ? 'var(--success)' : 'var(--danger)'}`;
  expBox.style.marginTop = '1rem';
  expBox.innerHTML = `
    <h4 style="color:${isCorrect ? 'var(--success)' : 'var(--danger)'}; margin-bottom:0.4rem;">
      <i class="${isCorrect ? 'fas fa-check-circle' : 'fas fa-times-circle'}"></i> ${isCorrect ? 'Correct Answer!' : (selectedIdx === -1 ? 'Time Expired!' : 'Incorrect Answer')}
    </h4>
    <p style="color:var(--text-secondary); font-size:0.9rem;">${q.explanation}</p>
  `;

  const nextBtn = document.getElementById('quiz-next-btn');
  nextBtn.style.display = 'inline-flex';
  nextBtn.onclick = () => {
    state.currentIndex++;
    if (state.currentIndex < state.questions.length) {
      renderQuestion();
    } else {
      finishQuiz();
    }
  };
}

function finishQuiz() {
  const state = currentQuizState;
  document.getElementById('quiz-active-screen').style.display = 'none';
  document.getElementById('quiz-result-screen').style.display = 'block';

  const total = state.questions.length;
  const percentage = Math.round((state.score / total) * 100);

  document.getElementById('quiz-score-num').textContent = `${state.score} / ${total}`;
  document.getElementById('quiz-percentage').textContent = `${percentage}%`;

  let rank = "Beginner";
  let color = "var(--text-muted)";
  if (percentage >= 50) { rank = "Defender"; color = "var(--accent-cyan)"; }
  if (percentage >= 70) { rank = "Guardian"; color = "var(--accent-blue)"; }
  if (percentage >= 85) { rank = "Sentinel"; color = "var(--accent-purple)"; }
  if (percentage >= 95) { rank = "Cyber Expert"; color = "var(--danger)"; }

  document.getElementById('quiz-rank-badge').innerHTML = `
    <span class="tag" style="background:${color}20; color:${color}; border:1px solid ${color}; font-size:1rem; padding:0.5rem 1.25rem;">
      🏆 Achievement Level: ${rank}
    </span>
  `;

  // Award XP based on score
  const earnedXP = state.score * 15;
  if (typeof addXP === 'function') addXP(earnedXP, `Completed Cybersecurity Quiz (${percentage}%)`);

  // Persist score to LocalStorage
  const prevScores = JSON.parse(localStorage.getItem(STORAGE_KEYS.QUIZ_SCORES) || '[]');
  prevScores.push({ date: new Date().toLocaleDateString(), score: state.score, total, percentage });
  localStorage.setItem(STORAGE_KEYS.QUIZ_SCORES, JSON.stringify(prevScores));

  document.getElementById('quiz-retry-btn').onclick = () => {
    document.getElementById('quiz-result-screen').style.display = 'none';
    document.getElementById('quiz-start-screen').style.display = 'block';
  };
}
