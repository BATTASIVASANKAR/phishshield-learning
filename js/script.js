/* -------------------------------------------------------------
   PHISHSHIELD INTERACTIVE LOGIC
   Description: Manages responsive navigation, scroll reveal animations,
                spot-the-phish email simulator, real-life examples tab system,
                and interactive quiz functionality.
   ------------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {
    // Initialize elements
    initNavbar();
    initScrollEffects();
    initEmailSpotter();
    initTabs();
    initQuiz();
});

/* ==========================================
   1. NAVIGATION & HAMBURGER DRAWER
   ========================================== */
function initNavbar() {
    const hamburgerBtn = document.getElementById("hamburgerBtn");
    const navMenu = document.getElementById("navMenu");
    const navLinks = document.querySelectorAll(".nav-link");

    // Toggle menu active state
    if (hamburgerBtn && navMenu) {
        hamburgerBtn.addEventListener("click", () => {
            hamburgerBtn.classList.toggle("active");
            navMenu.classList.toggle("active");
        });
    }

    // Close menu when navigation link is clicked
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (hamburgerBtn && navMenu) {
                hamburgerBtn.classList.remove("active");
                navMenu.classList.remove("active");
            }
        });
    });
}

/* ==========================================
   2. SCROLL EVENTS & INTERSECTION OBSERVERS
   ========================================== */
function initScrollEffects() {
    const header = document.querySelector(".header");
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");
    const revealElements = document.querySelectorAll(".scroll-reveal");

    // Header active state on scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
        
        // Active link highlighting (Scrollspy)
        let currentSectionId = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute("id");
            }
        });

        if (currentSectionId) {
            navLinks.forEach(link => {
                link.classList.remove("active");
                if (link.getAttribute("href") === `#${currentSectionId}`) {
                    link.classList.add("active");
                }
            });
        }
    });

    // Reveal animations observer
    if ('IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                    revealObserver.unobserve(entry.target); // Trigger only once
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px"
        });

        revealElements.forEach(element => {
            revealObserver.observe(element);
        });
    } else {
        // Fallback for older browsers
        revealElements.forEach(element => {
            element.classList.add("active");
        });
    }
}

/* ==========================================
   3. INTERACTIVE SPOT-THE-PHISH EMAIL
   ========================================== */
function initEmailSpotter() {
    const highlights = document.querySelectorAll(".highlight-target");
    const flagDetailCard = document.getElementById("flagDetailCard");
    const flagDetailTitle = document.getElementById("flagDetailTitle");
    const flagDetailDesc = document.getElementById("flagDetailDesc");
    const closeFlagBtn = document.getElementById("closeFlagBtn");

    // Threat explanations dictionary
    const threatDatabase = {
        sender: {
            title: "Red Flag #1: Spoofed Sender Address",
            desc: "The display name claims to be 'Netflix Account Security', but the actual email address in the bracket is security-alert@netflix-billing.net. Netflix communications always come from a verified address ending in '@netflix.com'. Scammers buy lookalike domains to fool hasty readers."
        },
        subject: {
            title: "Red Flag #2: Artificial Urgency",
            desc: "The subject line contains capitalized alerts and threats: 'URGENT: Suspended Account Notice (Action Required in 24h)'. Phishers use urgency to induce stress, which prevents victims from checking credentials or links logically."
        },
        greeting: {
            title: "Red Flag #3: Generic Salutation",
            desc: "The email addresses the reader as 'Dear Netflix Customer' instead of their registered personal name. Large subscription platforms always address you by name because they have user account details in their secure databases."
        },
        button: {
            title: "Red Flag #4: Fake Link Destination",
            desc: "Hovering over the button reveals a tooltip pointing to 'http://secure-billing-netflix-accounts-refresh.com/login'. Phishers use HTML buttons to mask where the click really takes you. This url mimics Netflix but is a credential harvesting page."
        },
        attachment: {
            title: "Red Flag #5: Malicious Double Extension",
            desc: "The attachment is named 'invoice_renew_details_july2026.pdf.exe'. The real file extension is '.exe' (executable binary) but is named to look like a '.pdf'. Opening this attachment executes malware or spyware directly on your machine."
        }
    };

    // Toggle active markers and detail panel
    highlights.forEach(target => {
        target.addEventListener("click", (e) => {
            e.preventDefault();
            const flagKey = target.getAttribute("data-flag");
            
            // Remove active style from all highlights
            highlights.forEach(h => h.classList.remove("active"));
            
            // Activate this highlight
            target.classList.add("active");

            // Display details
            if (threatDatabase[flagKey]) {
                flagDetailTitle.textContent = threatDatabase[flagKey].title;
                flagDetailDesc.textContent = threatDatabase[flagKey].desc;
                flagDetailCard.classList.add("active");
            }
        });
    });

    // Close detail panel
    if (closeFlagBtn) {
        closeFlagBtn.addEventListener("click", () => {
            flagDetailCard.classList.remove("active");
            highlights.forEach(h => h.classList.remove("active"));
        });
    }
}

/* ==========================================
   4. CASE SCENARIOS TAB SYSTEM
   ========================================== */
function initTabs() {
    const tabBtns = document.querySelectorAll(".tab-btn");
    const tabContents = document.querySelectorAll(".tab-content");

    tabBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const targetTab = btn.getAttribute("data-tab");

            // Update button states
            tabBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            // Update content states
            tabContents.forEach(content => {
                content.classList.remove("active");
                if (content.getAttribute("id") === targetTab) {
                    content.classList.add("active");
                }
            });
        });
    });
}

/* ==========================================
   5. INTERACTIVE AWARENESS QUIZ SYSTEM
   ========================================== */
function initQuiz() {
    // Quiz Questions Data (5 Questions)
    const questions = [
        {
            question: "You receive an email from 'IT Security' demanding you click a link to update your corporate password immediately to prevent account suspension. What is the most critical check?",
            choices: [
                "The font style and size of the email signature.",
                "The actual sender email domain (e.g. check for '@yourcompany.com' vs '@yourcompany-sec-update.com').",
                "The date and time of the email delivery.",
                "The name of the software application used to compose the email."
            ],
            correctIndex: 1,
            explanation: "Phishers use deceptive sender names but cannot use the company's real domain name. Always inspect the sender domain details in the actual address headers."
        },
        {
            question: "What does the term 'Smishing' refer to?",
            choices: [
                "Credential theft targeting high-level corporate directors.",
                "Attacks attempting to download malicious packages over Wi-Fi.",
                "Phishing campaigns conducted via SMS text messages.",
                "Unsolicited telephone calls impersonating bank authorities."
            ],
            correctIndex: 2,
            explanation: "Smishing is SMS Phishing—attacks conducted through text messages, often containing links to fake package trackers or bank verification pages."
        },
        {
            question: "A text message claims your package delivery is on hold. To redirect, you must pay $1.50 redirection fees via a link. What is the safest response?",
            choices: [
                "Pay the low fee immediately to avoid courier delays.",
                "Ignore the message link, go to the official courier site, and search the tracking number.",
                "Text back asking the sender to confirm their courier identity.",
                "Forward the SMS text message directly to all your phone contacts."
            ],
            correctIndex: 1,
            explanation: "Never click text links for package alerts. Navigate to the official website of the courier service and input the tracking code directly to check delivery status."
        },
        {
            question: "How does Multi-Factor Authentication (MFA) protect you if you accidentally enter credentials into a phishing webpage?",
            choices: [
                "MFA flags the fake webpage and blocks internet routers.",
                "It immediately deletes your stolen username and password.",
                "It restricts login access because the attacker still lacks your secondary verification code (like OTP).",
                "MFA triggers a background browser utility to change your bank password."
            ],
            correctIndex: 2,
            explanation: "Even if an attacker gets your username and password, MFA stops them because they cannot access your physical device or authenticator app to get the OTP."
        },
        {
            question: "What is the key difference between general Phishing and Spear Phishing?",
            choices: [
                "General phishing targets specific executives, while spear phishing targets banks.",
                "Spear phishing is highly targeted and customized to a specific individual or organization based on research.",
                "General phishing uses voice calls, whereas spear phishing only uses SMS texts.",
                "Spear phishing uses physical letters sent through standard post boxes."
            ],
            correctIndex: 1,
            explanation: "Spear phishing is high-precision engineering. Attackers research targets (using social media, corporate directories) to write personalized, highly convincing emails."
        }
    ];

    // Quiz State Variables
    let currentIdx = 0;
    let score = 0;
    let selectedAns = null; // Holds the chosen index for the current question
    let questionReviews = []; // Track answers for results list

    // DOM Elements
    const quizWelcomeScreen = document.getElementById("quizWelcomeScreen");
    const quizQuestionScreen = document.getElementById("quizQuestionScreen");
    const quizResultsScreen = document.getElementById("quizResultsScreen");
    
    const startQuizBtn = document.getElementById("startQuizBtn");
    const nextQuestionBtn = document.getElementById("nextQuestionBtn");
    const restartQuizBtn = document.getElementById("restartQuizBtn");

    const questionTracker = document.getElementById("questionTracker");
    const scoreTracker = document.getElementById("scoreTracker");
    const quizProgressFill = document.getElementById("quizProgressFill");
    const questionText = document.getElementById("questionText");
    const quizOptionsContainer = document.getElementById("quizOptionsContainer");
    
    const quizFeedbackBox = document.getElementById("quizFeedbackBox");
    const feedbackIcon = document.getElementById("feedbackIcon");
    const feedbackText = document.getElementById("feedbackText");
    const feedbackExplanation = document.getElementById("feedbackExplanation");

    const scorePercent = document.getElementById("scorePercent");
    const scoreFraction = document.getElementById("scoreFraction");
    const resultsProgressRing = document.getElementById("resultsProgressRing");
    const resultsGradeTitle = document.getElementById("resultsGradeTitle");
    const resultsSummaryText = document.getElementById("resultsSummaryText");
    const quizReviewContainer = document.getElementById("quizReviewContainer");

    // SVG Circle properties
    const ringRadius = 70;
    const ringCircumference = 2 * Math.PI * ringRadius; // ~439.82

    // Attach Event Listeners
    if (startQuizBtn) startQuizBtn.addEventListener("click", startQuiz);
    if (nextQuestionBtn) nextQuestionBtn.addEventListener("click", handleNextClick);
    if (restartQuizBtn) restartQuizBtn.addEventListener("click", restartQuiz);

    // Initialize state
    resetQuizState();

    function startQuiz() {
        quizWelcomeScreen.classList.remove("active");
        quizResultsScreen.classList.remove("active");
        quizQuestionScreen.classList.add("active");
        loadQuestion();
    }

    function resetQuizState() {
        currentIdx = 0;
        score = 0;
        selectedAns = null;
        questionReviews = [];
        
        quizWelcomeScreen.classList.add("active");
        quizQuestionScreen.classList.remove("active");
        quizResultsScreen.classList.remove("active");
        
        if (scoreTracker) scoreTracker.textContent = "Score: 0";
    }

    function loadQuestion() {
        const q = questions[currentIdx];
        selectedAns = null;

        // Reset elements
        questionTracker.textContent = `Question ${currentIdx + 1} of ${questions.length}`;
        scoreTracker.textContent = `Score: ${score}`;
        
        const progressPct = ((currentIdx + 1) / questions.length) * 100;
        quizProgressFill.style.width = `${progressPct}%`;
        
        questionText.textContent = q.question;
        quizOptionsContainer.innerHTML = "";
        
        // Hide feedback
        quizFeedbackBox.classList.add("hidden");
        quizFeedbackBox.className = "quiz-feedback-box hidden";
        
        // Disable next button initially
        nextQuestionBtn.disabled = true;
        nextQuestionBtn.innerHTML = currentIdx === questions.length - 1 ? 
            'Finish Assessment <i class="fa-solid fa-flag-checkered btn-icon"></i>' : 
            'Next Question <i class="fa-solid fa-arrow-right btn-icon"></i>';

        // Render Options
        const optionPrefixes = ["A", "B", "C", "D"];
        q.choices.forEach((choice, index) => {
            const btn = document.createElement("button");
            btn.className = "quiz-opt-btn";
            btn.innerHTML = `
                <div>
                    <span class="opt-letter">${optionPrefixes[index]}.</span>
                    <span class="opt-text">${escapeHTML(choice)}</span>
                </div>
                <span class="opt-status-icon"></span>
            `;
            btn.addEventListener("click", () => handleOptionSelection(index, btn));
            quizOptionsContainer.appendChild(btn);
        });
    }

    function handleOptionSelection(chosenIndex, selectedButton) {
        if (selectedAns !== null) return; // Prevent double clicking
        
        selectedAns = chosenIndex;
        const q = questions[currentIdx];
        const buttons = quizOptionsContainer.querySelectorAll(".quiz-opt-btn");
        const isCorrect = chosenIndex === q.correctIndex;

        // Save review details
        questionReviews.push({
            question: q.question,
            isCorrect: isCorrect,
            userChoice: q.choices[chosenIndex],
            correctChoice: q.choices[q.correctIndex],
            explanation: q.explanation
        });

        // Update score
        if (isCorrect) {
            score++;
            scoreTracker.textContent = `Score: ${score}`;
            
            // Style selected button
            selectedButton.classList.add("correct");
            selectedButton.querySelector(".opt-status-icon").innerHTML = '<i class="fa-solid fa-circle-check text-success"></i>';
            
            // Show Feedback
            showFeedbackPanel(true, q.explanation);
        } else {
            // Style selected button
            selectedButton.classList.add("incorrect");
            selectedButton.querySelector(".opt-status-icon").innerHTML = '<i class="fa-solid fa-circle-xmark text-danger"></i>';
            
            // Highlight the correct one
            buttons[q.correctIndex].classList.add("correct");
            buttons[q.correctIndex].querySelector(".opt-status-icon").innerHTML = '<i class="fa-solid fa-circle-check text-success"></i>';
            
            // Show Feedback
            showFeedbackPanel(false, q.explanation);
        }

        // Disable all buttons
        buttons.forEach(btn => btn.disabled = true);
        
        // Enable next button
        nextQuestionBtn.disabled = false;
    }

    function showFeedbackPanel(isCorrect, explanation) {
        quizFeedbackBox.classList.remove("hidden");
        if (isCorrect) {
            quizFeedbackBox.classList.add("correct-feedback");
            feedbackIcon.className = "fa-solid fa-shield-halved";
            feedbackText.textContent = "Defense Successful!";
            feedbackExplanation.textContent = explanation;
        } else {
            quizFeedbackBox.classList.add("incorrect-feedback");
            feedbackIcon.className = "fa-solid fa-circle-exclamation";
            feedbackText.textContent = "System Breach Detoured!";
            feedbackExplanation.textContent = `Incorrect. ${explanation}`;
        }
    }

    function handleNextClick() {
        if (currentIdx < questions.length - 1) {
            currentIdx++;
            loadQuestion();
        } else {
            showResults();
        }
    }

    function showResults() {
        quizQuestionScreen.classList.remove("active");
        quizResultsScreen.classList.add("active");

        const finalPct = Math.round((score / questions.length) * 100);
        
        // Update Ring
        const ringOffset = ringCircumference - (finalPct / 100) * ringCircumference;
        resultsProgressRing.style.strokeDashoffset = ringOffset;
        
        // Color transition for result ring
        if (finalPct === 100) {
            resultsProgressRing.style.stroke = "var(--accent-green)";
        } else if (finalPct >= 60) {
            resultsProgressRing.style.stroke = "var(--primary)";
        } else {
            resultsProgressRing.style.stroke = "var(--accent-red)";
        }

        // Update Score numbers
        scorePercent.textContent = `${finalPct}%`;
        scoreFraction.textContent = `${score}/${questions.length} Correct`;

        // Profile Grading
        let gradeTitle = "";
        let summaryText = "";
        
        if (finalPct === 100) {
            gradeTitle = "Rank: Cyber Sentinel";
            summaryText = "Flawless score! You have demonstrated exceptional digital defense skills. You are well-equipped to spot and intercept sophisticated phishing campaigns.";
        } else if (finalPct >= 80) {
            gradeTitle = "Rank: Secure Defender";
            summaryText = "Great job! You recognize core phishing markers and text scams. Stay attentive to details to prevent complex spear phishing targets.";
        } else if (finalPct >= 60) {
            gradeTitle = "Rank: Alert Resident";
            summaryText = "Passed. You possess foundational security awareness, but some red flags slipped through. Review the examples below to strengthen your defenses.";
        } else {
            gradeTitle = "Rank: High Risk System";
            summaryText = "Breach Vulnerable! Scammers could easily trick you using urgency hooks or masked domains. We highly recommend reviewing our 'Security Tips' and retaking the quiz.";
        }

        resultsGradeTitle.textContent = gradeTitle;
        resultsSummaryText.textContent = summaryText;

        // Render Review cards
        quizReviewContainer.innerHTML = "";
        questionReviews.forEach((review, idx) => {
            const item = document.createElement("div");
            item.className = `review-item ${review.isCorrect ? 'correct' : 'incorrect'}`;
            item.innerHTML = `
                <div class="review-header ${review.isCorrect ? 'correct' : 'incorrect'}">
                    <span>Question ${idx + 1}</span>
                    <span>${review.isCorrect ? '<i class="fa-solid fa-circle-check"></i> Correct' : '<i class="fa-solid fa-circle-xmark"></i> Incorrect'}</span>
                </div>
                <div class="review-question">${review.question}</div>
                <div class="review-explanation"><strong>Analysis:</strong> ${review.explanation}</div>
            `;
            quizReviewContainer.appendChild(item);
        });
    }

    function restartQuiz() {
        resetQuizState();
        startQuiz();
    }

    // Helper: Escape HTML to prevent injection
    function escapeHTML(str) {
        return str
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }
}
