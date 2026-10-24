/**
 * ============================================================================
 * MAIN.JS
 * ============================================================================
 */

/* --- 1. Theme Toggle (Light / Dark) --- */

const root = document.documentElement;
const themeToggle = document.querySelector("[data-js-theme-toggle]");
const themeLabel = document.querySelector("[data-js-theme-label]");

function updateThemeLabel(theme) {
    const nextLabel = theme === "dark" ? "Light" : "Dark";
    themeLabel.textContent = nextLabel;
}

const initialTheme = root.getAttribute("data-theme") || "light";
updateThemeLabel(initialTheme);

themeToggle.addEventListener("click", () => {
    const currentTheme = root.getAttribute("data-theme");
    const nexTheme = currentTheme === "dark" ? "light" : "dark";

    root.setAttribute("data-theme", nexTheme);
    localStorage.setItem("theme", nexTheme);
    updateThemeLabel(nexTheme);
});


/* --- 2. Mobile Menu Toggle --- */

const menuToggle = document.querySelector("[data-js-menu-toggle]");
const menuIcon = document.querySelector("[data-js-menu-icon]");
const primaryNav = document.getElementById("primary-nav");

function setMenuState(isOpen, restoreFocus = false) {
    primaryNav.classList.toggle("is-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuIcon.textContent = isOpen ? "✕" : "☰";

    if (!isOpen && restoreFocus) {
        menuToggle.focus();
    }
}

menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    setMenuState(!isExpanded);
});

primaryNav.addEventListener("click", (event) => {
    const clickedLink = event.target.closest("a");
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";

    if (clickedLink && isExpanded) {
        setMenuState(false, true);
    }
});

document.addEventListener("keydown", (event) => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";

    if (event.key === "Escape" && isExpanded) {
        setMenuState(false, true);
    }
});

/* --- 3. Scroll-Spy Navigation (IntersectionObserver) --- */

const sections = document.querySelectorAll("main section");
const navLinks = document.querySelectorAll(".site-nav a[href^='#']");
const footer = document.querySelector(".site-footer");

let currentSectionId = "";
let isFooterVisible = false;

function setActiveNavLink(activeId) {
    navLinks.forEach((link) => {
        const isMatch = link.getAttribute("href") === `#${activeId}`;
        link.classList.toggle("is-active", isMatch);
        if (isMatch) {
            link.setAttribute("aria-current", "location");
        } else {
            link.removeAttribute("aria-current");
        }
    });
}


const sectionObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                currentSectionId = entry.target.id;
                if (!isFooterVisible) {
                    setActiveNavLink(currentSectionId);
                }
            }
        });
    },
    { rootMargin: "-50% 0px -50% 0px" }
);

const footerObserver = new IntersectionObserver((entries) => {
    isFooterVisible = entries[0].isIntersecting;
    setActiveNavLink(isFooterVisible ? "contact" : currentSectionId);
});

sections.forEach((section) => sectionObserver.observe(section));
footerObserver.observe(footer);

/* 4. Figma-Style Cursor Pill & 3-Strike Selection Easter Egg */

const cursorPill = document.querySelector("[data-js-cursor-pill]");
let pillHideTimerId = null;
let selectionDebounceId = null;
let lastSelectedText = ""

document.addEventListener("pointermove", (event) => {
    root.style.setProperty("--cursor-x", `${event.clientX + 14}px`);
    root.style.setProperty("--cursor-y", `${event.clientY + 18}px`);
}, { passive: true });

function showCursorPill(message) {
    if (!cursorPill) return;

    clearTimeout(pillHideTimerId);
    cursorPill.textContent = message;
    cursorPill.classList.add("is-visible");

    pillHideTimerId = setTimeout(() => {
        cursorPill.classList.remove("is-visible");
    }, 3500);
}

const selectionMessages = [
    "Oh, you read by selecting the text? Me too!",
    "You really like selecting texts, huh?",
    "OK, that was the last one."
]

document.addEventListener("selectionchange", () => {
    const currentCount = Number(sessionStorage.getItem("readerSelectionCount")) || 0;
    if (currentCount >= selectionMessages.length) return;

    clearTimeout(selectionDebounceId);

    selectionDebounceId = setTimeout(() => {
        const selectedText = window.getSelection().toString().trim();

        if (!selectedText) {
            lastSelectedText = "";
            cursorPill.classList.remove("is-visible");
            return;
        }

        if (selectedText.length >= 15 && selectedText !== lastSelectedText) {
            lastSelectedText = selectedText;
            const nextCount = currentCount + 1;
            sessionStorage.setItem("readerSelectionCount", String(nextCount));

            const message = selectionMessages[currentCount];

            showCursorPill(message);
        }
    }, 450);
})

/* --- 5. Direct Mail Click-to-Copy --- */

const copyEmailLink = document.querySelector("[data-js-copy-email]");
const copyBadge = document.querySelector("[data-js-copy-badge]");
let copyBadgeTimerId = null;

if (copyEmailLink) {
    copyEmailLink.addEventListener("click", async (event) => {
        event.preventDefault();

        const emailAddress = "alibakirwork@gmail.com";

        try {
            await navigator.clipboard.writeText(emailAddress);

            if (copyBadge) {
                clearTimeout(copyBadgeTimerId);
                copyBadge.textContent = "Copied to clipboard! ✓";
                copyEmailLink.classList.add("is-copied");

                copyBadgeTimerId = setTimeout(() => {
                    copyBadge.textContent = "Click to copy";
                    copyEmailLink.classList.remove("is-copied");
                }, 2500);
            }
            if (typeof showCursorPill === "function") {
                showCursorPill("Email copied to clipboard! 📋");
            }

        } catch (error) {
            if (copyBadge) copyBadge.textContent = "Copy failed";
        }
    });
}


/* --- 6. Contact Form Two-Way Mailer --- */

const contactForm = document.querySelector("[data-js-contact-form]");
const formSubbmitButton = document.querySelector("[data-js-form-submit]");
const formStatus = document.querySelector("[data-js-form-status]");

const GOOGLE_SCRIPT_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbxp-iugSlHV3B0pttSIgpZ7zP2j1sEFjxL9Ovzb6JUCmh-JEPj8l7yjLV57z0jAfryH/exec";

if (contactForm) {
    contactForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        // Client-side Validation
        if (!contactForm.checkValidity()) {
            formStatus.textContent = "Pleas fill in all required fields.";
            formStatus.className = "contact-form__status is-error";
            return;
        }

        // Getting all the form data
        const formData = new FormData(contactForm);
        const payload = Object.fromEntries(formData.entries());

        // Send Message to Sending...
        formSubbmitButton.disbled = true;
        formSubbmitButton.classList.add("keycap--disabled");
        const originalButtonHtml = formSubbmitButton.innerHTML;
        formSubbmitButton.innerHTML = "<span>Sending...</span>";
        formStatus.textContent = "Delivering your message...";
        formStatus.className = "contact-form__status";

        // Try to send the emails
        try {
            const response = await fetch(GOOGLE_SCRIPT_WEBHOOK_URL, {
                method: "POST",
                mode: "no-cors",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });

            // Success
            formStatus.textContent = "Message sent! Check your inbox for confirmation ✓";
            formStatus.className = "contact-form__status is-success";
            contactForm.reset();

        } catch (error) {
            formStatus.textContent = "Failed to send. Please mail me directly.";
            formStatus.className = "contact-form__status is-error";
        } finally {
            formSubbmitButton.disbled = false;
            formSubbmitButton.classList.remove("keycap--disabled");
            formSubbmitButton.innerHTML = originalButtonHtml;
        }
    })
}