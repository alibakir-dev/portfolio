# ROADMAP: Portfolio Site v1.0.0

Build the portfolio in `design/` with **plain HTML, CSS, and vanilla JavaScript**, using an industry-standard GitHub workflow, and deploy it to GitHub Pages.

> Save as `ROADMAP.md` in the root of the `portfolio` repo.
> Progress is not tracked in a file. The coach finds the current milestone by checking which "Done when" items are already true in the repo.

---

## 1. Scope decisions (already made, do not reopen)

| Topic | Decision |
|---|---|
| Stack | HTML, CSS, vanilla JS only. No framework, no library, no build step |
| Themes | Light and dark. Built with CSS custom properties; dark theme comes in M8 |
| Contact form | **Removed in v1.** It needs a backend. Contact is the email link plus LinkedIn and GitHub buttons |
| "Currently building" section | Every card must be true. "In progress" only if the repo exists and has at least one commit. Otherwise use "Planned" or hide the section |
| Case studies | Copy stays anonymized (NDA). No client names, no real discount amounts, no real data, no client screenshots. Consider generalizing "spirits brand" and "football" wording further |
| Hosting | GitHub Pages, project page URL (`https://<username>.github.io/portfolio/`). Use **relative** URLs everywhere (no leading `/`) |
| Language | Site copy in English |
| Reference | `design/` folder: screenshots plus `spec.md`. Visual reference only. Never copy generated code |
| Estimated effort | About 28 hours (about 2 weeks at 15 hours per week) |

## 2. What the design contains (build list)

**Layout:** one column on mobile, centered column (max width about 960px) on desktop, thin divider lines between sections, optional faint horizontal line texture in the background.

**Components:**
- Keycap link/button: rounded rectangle, darker solid bottom edge, pressed state moves down about 2px. Variants: primary (orange), secondary (sage), neutral (white or surface).
- Logo keycap "AB".
- Nav keycaps: About, Work, Skills, Building, Contact. Theme toggle keycap (half-circle icon and "Dark" / "Light"). Mobile "Menu" keycap that turns into "Close" when open and opens a panel of stacked keycap links.
- Eyebrow label with a short orange line ("SFMC → FULL STACK").
- Hero: large heading "Hi, I'm Ali Bakır." with an orange period, subtitle, short paragraph, two buttons, and four keycap tiles (SQL sage, API white, SSJS orange, TS dashed with a small "learning" label).
- Section header: orange numbered badge (01, 02, 03, 04), small uppercase eyebrow, H2.
- About: text column on the right on desktop, stacked on mobile.
- Case study card: sage header bar with number and "CLIENT DETAILS ANONYMIZED", title, one-line summary, tag chips, then three columns (Problem / What I did / Hard part) that stack on mobile, with a solid bottom edge.
- "Also built" callout with an orange left border.
- Skills: "Daily" panel (solid) and "Learning now" panel (dashed border), each with keycap tags.
- Project card: "In progress" badge, disabled GitHub button, title, description, tags.
- Contact: heading "Let's talk." with an orange period, email link, LinkedIn / GitHub / Download CV buttons.
- Footer: "© 2026 Ali Bakır" and "Back to top ↑".

## 3. Repo structure (target)

```
portfolio/
  index.html
  css/
    tokens.css        # custom properties (colors, fonts, spacing), light + dark
    base.css          # reset, typography, layout helpers
    components.css    # keycap buttons, tags, badges, cards
    sections.css      # section-specific layout
  js/
    main.js           # menu toggle, theme toggle
  assets/
    favicon.svg
    Ali-Bakir-CV.pdf
  design/
    spec.md
    light-desktop.png, dark-desktop.png, light-mobile.png, dark-mobile.png, menu-light.png, menu-dark.png
  .github/
    copilot-instructions.md
  README.md
  .gitignore
  ROADMAP.md
```

## 4. Conventions

- **HTML:** semantic landmarks, one `h1`, sane heading order, `lang="en"`, meta viewport, `<button>` for actions, `<a>` for navigation.
- **CSS:** mobile-first (`min-width` media queries), BEM class names, custom properties for every color/font/spacing value, `rem` units, no `!important`, no inline styles, `:focus-visible` on every interactive element.
- **JS:** vanilla, `const`/`let`, no inline handlers, `data-js-*` hooks, ARIA state in sync (`aria-expanded`, `aria-controls`).
- **Accessibility:** keyboard works everywhere, text contrast at least 4.5:1, respect `prefers-reduced-motion` and `prefers-color-scheme`.
- **Git:** feature branch per milestone, Conventional Commits, PR plus squash merge, never commit to `main` (after M0).

---

## 5. Milestones

Each milestone is one **branch**, several **commits**, one **pull request**.

### M0: Setup and repo hygiene (about 1.5 h)
- **Branch:** work on `main` for this one step only (repo bootstrap).
- **Tasks:** 
  1. Put the 6 design screenshots in `design/`.
  2. Create `design/spec.md` with the live design URL and empty sections for colors, fonts, font sizes, spacing, radii, shadows.
  3. Open the live design in the browser, use DevTools (Inspect, Computed tab) to read the values for both themes, and fill `spec.md`.
  4. Install the VS Code extension **Live Server** to preview with auto-reload.
  5. Remove template leftovers (for example `DEVLOG.md`, memory files) and make sure `.gitignore` contains `.DS_Store`.
  6. Write a short `README.md` (title, one-line description, "work in progress").
  7. On GitHub: Settings → General → tick **Automatically delete head branches**. Then protect `main`: Settings → Branches (GitHub may call it **Rules / Rulesets**) → add a rule for `main` that requires a pull request before merging.
- **Done when:**
  - `design/spec.md` has real values for both themes.
  - `README.md` exists.
  - Branch protection or ruleset on `main` is active.
  - Working tree is clean and pushed.

### M1: HTML skeleton (about 2 h)
- **Branch:** `feat/html-skeleton`
- **Tasks:** write the full page structure with real copy and **no styling**: `head` (title, description, viewport, favicon link), skip link, `header` with `nav`, `main` with the sections (hero, about, work, skills, building, contact), `footer`. Add anchors (`id`) for navigation.
- **Done when:**
  - HTML passes the W3C validator with no errors.
  - Heading outline is correct (one `h1`, then `h2`s).
  - Every nav link jumps to its section.
  - Page is readable and keyboard-navigable without CSS.

### M2: Tokens and base styles (about 2.5 h)
- **Branch:** `feat/tokens-base`
- **Tasks:** load Roboto Mono (Google Fonts `<link>` with `preconnect`, weights 400/500/700, `display=swap`). Create `tokens.css` (light values on `:root`) and `base.css` (reset, typography scale in `rem`, container, spacing helpers, link styles).
- **Done when:**
  - No hard-coded colors outside `tokens.css`.
  - Body text is at least 14px and secondary text passes 4.5:1 contrast.
  - Page looks clean at 390px wide.

### M3: Components (about 3 h)
- **Branch:** `feat/components`
- **Tasks:** build in `components.css`: keycap button (primary, secondary, neutral) with hover, pressed, and focus-visible states; tag chip; number badge; eyebrow label; case study card shell; dashed panel.
- **Done when:**
  - Each component works with mouse and keyboard.
  - Pressed state is visible.
  - Class names follow BEM.
  - No styles are duplicated between components.

### M4: Header and hero (about 2.5 h)
- **Branch:** `feat/header-hero`
- **Tasks:** header with logo keycap and nav keycaps (desktop row, mobile layout with a Menu keycap, panel closed for now), hero with large heading, subtitle, paragraph, buttons, and the four keycap tiles.
- **Done when:**
  - Hero matches the design at 1440px and 390px.
  - Nav keycaps wrap or collapse without overflow at 320px.

### M5: About and selected work (about 3 h)
- **Branch:** `feat/about-work`
- **Tasks:** section headers with number badges, About layout, three case study cards (three columns on desktop, stacked on mobile), "Also built" callout.
- **Done when:**
  - Cards match the design.
  - No horizontal scroll at 320px.
  - Text stays readable at every width.

### M6: Skills, building, contact, footer (about 2.5 h)
- **Branch:** `feat/skills-building-contact`
- **Tasks:** skills panels, project cards (honest status labels, see Scope), contact block with `mailto:` link, LinkedIn/GitHub/Download CV buttons (CV file in `assets/`), footer with Back to top.
- **Done when:**
  - All links work.
  - The CV downloads.
  - Project status labels are true.
  - Page is complete in the light theme.

### M7: Responsive polish (about 2.5 h)
- **Branch:** `fix/responsive-polish`
- **Tasks:** test at 320, 390, 768, 1024, 1440 in DevTools device mode and on a real phone (Live Server on the same Wi-Fi). Fix spacing, wrapping, and tap target size (at least 44px).
- **Done when:**
  - No horizontal scroll at any width.
  - Tap targets are large enough.
  - Layout matches the design at 390px and 1440px.

### M8: Interactions in JavaScript and dark theme (about 4 h)
- **Branch:** `feat/interactions`
- **Tasks:**
  1. Mobile menu: Menu button toggles the panel, `aria-expanded` and `aria-controls` stay in sync, Escape closes it, clicking a link closes it, focus returns to the button.
  2. Theme toggle: a `data-theme` attribute on `<html>`, initial value from `localStorage`, otherwise from `prefers-color-scheme`. A tiny script in `<head>` sets it before first paint to avoid a flash.
  3. Dark theme tokens in `tokens.css`, button label switches between "Dark" and "Light".
  4. Smooth scroll for anchor links only when `prefers-reduced-motion` is not set.
- **Done when:**
  - Menu and theme toggle work with mouse and keyboard.
  - Theme choice survives a page reload.
  - No flash of the wrong theme.
  - Dark theme matches the design and passes contrast.

### M9: Accessibility, performance, SEO (about 2.5 h)
- **Branch:** `chore/a11y-performance`
- **Tasks:** run Lighthouse in DevTools and fix findings. Add Open Graph tags (title, description, url, type) and a 1200×630 `og:image`. Check alt text, labels, focus order, contrast in both themes. Check font loading.
- **Done when:**
  - Lighthouse (mobile): Accessibility at least 95, Best Practices at least 95, SEO at least 95, Performance at least 90.
  - LinkedIn Post Inspector or similar shows a correct preview card.

### M10: Deploy (about 1.5 h)
- **Branch:** `chore/deploy-pages`
- **Tasks:** on GitHub: Settings → Pages → Build and deployment → Source: **Deploy from a branch** → Branch `main`, folder `/ (root)` → Save. After the PR is merged, open the live URL and fix any broken paths (use relative URLs). Add the live URL to the repo's About box (description and website). Tag the release: `v1.0.0`, push the tag, create a GitHub **Release**.
- **Done when:**
  - The live URL loads with styles, fonts, JS, and the CV download.
  - Tag `v1.0.0` and a Release exist.

### M11: README and polish (about 1 h)
- **Branch:** `docs/readme`
- **Tasks:** README with live link, screenshot, tech used (plain HTML/CSS/JS), what it demonstrates (semantic HTML, responsive CSS, a11y, themes), how to run locally. Add repo topics. Pin the repo on the GitHub profile. Add the site link to LinkedIn and CV.
- **Done when:**
  - README is complete.
  - The repo is pinned and linked.

---

## 6. Definition of done for v1.0.0

- [ ] Live on GitHub Pages
- [ ] Matches the design in both themes at 390px and 1440px
- [ ] Lighthouse scores met (M9)
- [ ] Keyboard-only navigation works, including the mobile menu
- [ ] No console errors
- [ ] No client names, real data, or client screenshots anywhere
- [ ] All links work, CV downloads
- [ ] Every change reached `main` through a pull request with Conventional Commit messages
- [ ] Tag `v1.0.0` and Release created
- [ ] README complete

## 7. Out of scope for v1

Contact form, animations beyond CSS transitions, blog, CMS, analytics, custom domain, any framework or library, any other project.
