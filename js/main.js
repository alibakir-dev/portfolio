// ==========================================================================
// 1. THEME TOGGLE (LIGHT / DARK)
// ==========================================================================

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

// ==========================================================================
// 2. MOBILE MENU TOGGLE
// ==========================================================================

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

    if(event.key === "Escape" && isExpanded) {
        setMenuState(false, true);
    }
})