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