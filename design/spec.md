# Design Spec

## Live design

https://rigid-swarm-95572895.figma.site/

## Colors

### Light (`:root` default, `color-scheme: light`)

- page background (`--bg-canvas` / `--color-light-bg-primary`): `#f0ece2`
- page background alt (`--bg-surface-muted` / `--color-light-bg-muted`): `#ddd7ca`
- text (`--text-primary` / `--border-strong` / `--color-light-text-primary`): `#222618`
- text muted (`--text-secondary` / `--color-light-text-secondary`): `#4c5143`
- surface (`--bg-surface` / `--color-light-bg-surface`): `#fffdf8`
- sage (`--accent-secondary` / `--color-brand-sage-500`): `#8a9a86`
- sage surface (`--bg-surface-subtle` / `--color-light-bg-subtle`): `#dce2d9`
- sage shadow (`--accent-secondary-strong` / `--color-brand-sage-700`): `#596653`
- border (`--border-subtle` / `--color-light-border`): `#c9c8bd`
- disabled shadow (`--shadow-color-disabled` / `--color-light-disabled-shadow`): `#77786f`
- grid line (`--bg-grid` / `--color-light-grid`): `rgba(34, 38, 24, 0.035)`
- keycap shadow (`--border-strong` / `--border-static`): `#222618`

### Dark (`:root[data-theme="dark"]`, `color-scheme: dark`)

- page background (`--bg-canvas` / `--color-dark-bg-primary`): `#171912`
- page background alt (`--bg-surface-muted` / `--color-dark-bg-muted`): `#303428`
- text (`--text-primary` / `--border-strong` / `--color-dark-text-primary`): `#f1eee4`
- text muted (`--text-secondary` / `--color-dark-text-secondary`): `#c3c7b9`
- surface (`--bg-surface` / `--color-dark-bg-surface`): `#22251d`
- sage (`--accent-secondary` / `--color-brand-sage-400`): `#93a48e`
- sage surface (`--bg-surface-subtle` / `--color-dark-bg-subtle`): `#292f26`
- sage shadow (`--accent-secondary-strong` / `--color-brand-sage-700`): `#596653` (inherited)
- border (`--border-subtle` / `--color-dark-border`): `#44483d`
- disabled shadow (`--shadow-color-disabled` / `--color-dark-disabled-shadow`): `#11130e`
- grid line (`--bg-grid` / `--color-dark-grid`): `rgba(248, 246, 240, 0.045)`
- keycap shadow (`--border-strong`): `#f1eee4` (static variants use `--border-static`: `#222618`)

### Shared

- orange accent (`--accent-primary` / `--color-brand-orange-500`): `#f26e22`
- orange dark / hover (`--accent-primary-hover` / `--color-brand-orange-700`): `#a94310`
- text on keycap (`--text-on-accent` / `--color-static-ink`): `#222618`
- keycap border: `1px solid var(--border-static)` (`#222618`, same as static ink, not `--border-subtle`)

## Fonts

- family (`--font-family-mono`): `"Roboto Mono", ui-monospace, SFMono-Regular, monospace`
- weights used:
  - `--font-weight-regular`: `400`
  - `--font-weight-medium`: `500`
  - `--font-weight-semibold`: `600`
  - `--font-weight-bold`: `700`

## Font sizes

Base root font-size assumed as `16px` (`1rem = 16px`). Same in light and dark.

### Token Scale

**Core Fixed Scale (`rem`):**
- `--font-size-xs`: `0.5625rem` (9px)
- `--font-size-sm`: `0.625rem` (10px)
- `--font-size-md`: `0.6875rem` (11px)
- `--font-size-base`: `0.75rem` (12px)
- `--font-size-lg`: `0.9375rem` (15px)
- `--font-size-xl`: `1rem` (16px)
- `--font-size-2xl`: `1.25rem` (20px)

**Fluid Display Scale (`rem + vw`):**
- `--font-size-fluid-sm`: `clamp(0.9375rem, 3vw, 1.375rem)` (15px -> 22px)
- `--font-size-fluid-md`: `clamp(1.125rem, 2.4vw, 1.5625rem)` (18px -> 25px)
- `--font-size-fluid-lg`: `clamp(1.375rem, 4vw, 1.875rem)` (22px -> 30px)
- `--font-size-fluid-xl`: `clamp(1.6875rem, 5vw, 2.75rem)` (27px -> 44px)
- `--font-size-fluid-2xl`: `clamp(2.875rem, 9vw, 5.625rem)` (46px -> 90px)
- `--font-size-fluid-hero`: `clamp(3.25rem, 8.4vw, 6.5rem)` (52px -> 104px)

**Line Heights (Unitless):**
- `--leading-none`: `1`
- `--leading-tight`: `1.12`
- `--leading-snug`: `1.25`
- `--leading-normal`: `1.4`
- `--leading-relaxed`: `1.65`
- `--leading-loose`: `1.75`

**Letter Spacing:**
- `--tracking-tighter`: `-0.075em`
- `--tracking-tight`: `-0.055em`
- `--tracking-snug`: `-0.04em`
- `--tracking-wide`: `0.04em`
- `--tracking-wider`: `0.08em`
- `--tracking-widest`: `0.14em`

### Measured Sizes & Weights Used

Format: size: weights.

- 8px: 600
- 9px (`--font-size-xs`): 600, 700
- 10px (`--font-size-sm`): 400, 700
- 11px (`--font-size-md`): 400, 700
- 12px (`--font-size-base`): 400, 700
- 13px: 400
- 15px (`--font-size-lg` / `--font-size-fluid-sm` min): 400, 700
- 16px (`--font-size-xl`): 400, 700
- 18px (`--font-size-fluid-md` min): 700
- 19px: 500
- 20px (`--font-size-2xl`): 400
- 22px (`--font-size-fluid-sm` max / `--font-size-fluid-lg` min): 600
- 25px (`--font-size-fluid-md` max): 700
- 27px (`--font-size-fluid-xl` min): 400
- 30px (`--font-size-fluid-lg` max): 400
- 44px (`--font-size-fluid-xl` max): 400
- 46px (`--font-size-fluid-2xl` min): 400
- 52px (`--font-size-fluid-hero` min): 700
- 90px (`--font-size-fluid-2xl` max): 400
- 104px (`--font-size-fluid-hero` max): 700

### Roles

Fluid sizes use `clamp(min mobile, vw, max desktop)`. Format: size / line-height / weight / letter-spacing. Source of truth for tokens: `css/tokens.css`.

- body: `--font-size-xl` (`1rem`) / `1.5` / `--font-weight-regular` (`400`) / `normal`
- h1: `--font-size-fluid-hero` (`clamp(3.25rem, 8.4vw, 6.5rem)`) / `--leading-none` (`1`, or `0.98`) / `--font-weight-bold` (`700`) / `--tracking-tighter` (`-0.075em`)
- h2: `--font-size-fluid-xl` (`clamp(1.6875rem, 5vw, 2.75rem)`) / `--leading-tight` (`1.12`) / `--font-weight-regular` (`400`) / `--tracking-tight` (`-0.055em`)
- h3: `--font-size-fluid-lg` (`clamp(1.375rem, 4vw, 1.875rem)`) / `--leading-snug` (`1.25`) / `--font-weight-regular` (`400`) / `--tracking-snug` (`-0.04em`)
- h4 (column label): `--font-size-sm` (`0.625rem`) / `1.5` / `--font-weight-regular` (`400`) / `--tracking-wider` (`0.08em`) / `uppercase`
- eyebrow / overline: `--font-size-md` (`0.6875rem`) / `1.5` / `--font-weight-bold` (`700`) / `--tracking-widest` (`0.14em`) / `uppercase`
- hero subtitle: `--font-size-fluid-md` (`clamp(1.125rem, 2.4vw, 1.5625rem)`) / `--leading-normal` (`1.4`) / `--font-weight-bold` (`700`) / `--tracking-snug` (`-0.04em`)
- hero intro: `--font-size-lg` (`0.9375rem`) / `1.7` / `--font-weight-regular` (`400`) / `normal`
- about text: `1.1875rem` / `--leading-loose` (`1.75`) / `--font-weight-medium` (`500`) / `normal`
- case summary: `0.8125rem` / `--leading-relaxed` (`1.65`) / `--font-weight-regular` (`400`) / `normal`
- tag: `--font-size-xs` (`0.5625rem`) / `1.5` / `--font-weight-bold` (`700`) / `normal`
- keycap, hero button: `--font-size-md` (`0.6875rem`) / `1.5` / `--font-weight-bold` (`700`) / `normal` / `uppercase`
- keycap, nav link: `--font-size-sm` (`0.625rem`) / `1.5` / `--font-weight-bold` (`700`) / `uppercase`
- keycap, theme toggle and menu: `--font-size-xs` (`0.5625rem`) / `1.5` / `--font-weight-bold` (`700`) / `uppercase`
- keycap, AB logo: `--font-size-lg` (`0.9375rem`) / `1.5` / `--font-weight-bold` (`700`) / `-0.08em`

## Spacing & Layout

Same in light and dark. Core spacing and layout scales are tokenized in `tokens.css`, supplemented by specific per-role measurements.

### Tokenized Component Scale (`rem`)

- `--space-2xs`: `0.25rem` (4px)
- `--space-xs`: `0.375rem` (6px)
- `--space-sm`: `0.5rem` (8px)
- `--space-md`: `0.75rem` (12px)
- `--space-lg`: `1rem` (16px)
- `--space-xl`: `1.25rem` (20px)
- `--space-2xl`: `1.5rem` (24px)
- `--space-3xl`: `1.75rem` (28px)
- `--space-4xl`: `2rem` (32px)
- `--space-5xl`: `3rem` (48px)
- `--space-6xl`: `4rem` (64px)

### Tokenized Fluid Layout Scale & Constraints

- `--space-section`: `clamp(5.5rem, 10vw, 8.25rem)` (88px -> 132px)
- `--space-hero-top`: `clamp(5.5rem, 9vw, 7.25rem)` (88px -> 116px)
- `--space-hero-bottom`: `clamp(6rem, 10vw, 8.25rem)` (96px -> 132px)
- `--space-page-gutter`: `clamp(2.5rem, 6vw, 5rem)` (40px -> 80px)
- `--layout-max-width`: `60rem` (960px)
- `--layout-prose-width`: `65ch`

### Measured Values (Most Used in px)

- 4, 6, 8, 9, 11, 12, 13, 16, 18, 20, 22, 24, 28, 32, 48, 64, 72, 88, 96, 112, 116, 132

### Desktop (1440px)

- container width: `960px` (`--layout-max-width`), centered (no side padding, auto margins)
- header padding: `28px` (`--space-3xl`) top, `32px` (`--space-4xl`) bottom
- hero padding: `116px` (`--space-hero-top` max) top, `132px` (`--space-hero-bottom` max) bottom
- section vertical padding: `132px` (`--space-section` max; contact: `112px`)
- section title margin-bottom: `64px` (`--space-6xl`)
- section title gap (number / text): `18px`
- hero actions gap: `16px` (`--space-lg`)
- hero keys: margin-top `72px`, gap `18px`
- nav keycap padding: `9px 12px` (gap between keycaps: `10px`)
- theme toggle padding: `8px 10px`
- button keycap padding: `12px 18px`
- tag padding: `6px 9px` (tag row gap: `8px` / `--space-sm`)
- case study list gap: `28px` (`--space-3xl`)
- case study header padding: `16px 22px`
- case study detail column padding: `24px 22px` (3 equal columns, no gap)
- skill group padding: `38px` (gap between groups: `22px`)
- building list: 2 columns, gap `22px`
- also built callout: padding-left `20px` (`--space-xl`), margin-top `46px`
- footer padding: `28px` (`--space-3xl`) top, `34px` bottom

### Mobile (390px)

- container side margin: `20px` (`--space-xl`, or fluid `--space-page-gutter` min `40px`)
- header padding: `24px` (`--space-2xl`) top, `28px` (`--space-3xl`) bottom
- hero padding: `88px` (`--space-hero-top` min) top, `96px` (`--space-hero-bottom` min) bottom
- section vertical padding: `88px` (`--space-section` min; contact: `96px`)
- section title margin-bottom: `48px` (`--space-5xl`)
- hero keys: margin-top `60px`, gap `8px` (`--space-sm`, 4 equal columns)
- case study detail column padding: `24px 22px` (stacked, 1 column)
- skill group padding: `24px 20px` (`--space-2xl --space-xl`)
- building list: 1 column, gap `22px`
- everything else same as desktop

## Keycap behavior

Same in light and dark except theme-aware surface and shadow tokens (see Shadows).

- neutral: background `var(--bg-surface)` (`#fffdf8` light / `#22251d` dark), padding `9px 12px`, hover background `var(--bg-surface-subtle)` (`#dce2d9` light / `#292f26` dark)
- primary: background `var(--accent-primary)` (`#f26e22`), padding `12px 18px`, hover `var(--accent-primary-hover)` (`#a94310`) or `brightness(1.04)`
- secondary: background `var(--accent-secondary)` (`#8a9a86` light / `#93a48e` dark), padding `12px 18px`, hover `brightness(1.04)`
- all: `1px solid` border, radius `var(--radius-sm)` (`6px`), text `var(--text-on-accent)` (`#222618`), `uppercase`
- pressed: `translateY(2px)` and shadow `var(--shadow-key-active)` (`0 2px 0 var(--border-strong)`)
- focus ring: `var(--shadow-focus)` (`0 0 0 6px var(--accent-primary)`)
- transition: `transform var(--transition-fast)` (`100ms ease`), `box-shadow var(--transition-fast)` (`100ms ease`), `background-color var(--transition-normal)` (`150ms ease`)
- font-synthesis: `none` (only 4 weights loaded)

## Radii

Same in light and dark. Fixed `px` values for crisp geometry.

- section number badge, tag chip (`--radius-xs`): `4px`
- keycap (logo, nav, theme toggle, buttons), skill key (`--radius-sm`): `6px`
- tech key (SQL, API, SSJS, TS), case study card, building card, skill group panel (`--radius-md`): `10px`
- "In progress" badge (`--radius-pill`): `999px` (pill)
- theme icon (`--radius-full`): `50%` (circle)

## Shadows

All elevation shadows use solid `px` offsets with `0` blur. Format: `offset-x offset-y blur color`.

### Semantic Shadow Tokens

- `--shadow-key-active`: `0 2px 0 var(--border-strong)`
- `--shadow-key-sm`: `0 3px 0 var(--border-static)`
- `--shadow-key-md`: `0 4px 0 var(--border-strong)`
- `--shadow-key-lg`: `0 6px 0 var(--border-strong)`
- `--shadow-key-static`: `0 6px 0 var(--border-static)`
- `--shadow-card`: `0 6px 0 var(--accent-secondary-strong)`
- `--shadow-disabled`: `0 3px 0 var(--shadow-color-disabled)`
- `--shadow-focus`: `0 0 0 6px var(--accent-primary)`

### Light

- keycap (all variants: neutral, primary, secondary, logo, nav, theme toggle) (`--shadow-key-md`): `0 4px 0 #222618`
- keycap pressed (`--shadow-key-active`): `0 2px 0 #222618`
- disabled keycap (`--shadow-disabled`): `0 3px 0 #77786f`
- tech key (SQL, API, SSJS) (`--shadow-key-static` / `--shadow-key-lg`): `0 6px 0 #222618`
- section number badge (`--shadow-key-sm`): `0 3px 0 #222618`
- case study card, building card (`--shadow-card`): `0 6px 0 #596653`
- focus state (`--shadow-focus`): `0 0 0 6px #f26e22`

### Dark

- keycap (all variants) (`--shadow-key-md`): `0 4px 0 #f1eee4`
- keycap pressed (`--shadow-key-active`): `0 2px 0 #f1eee4`
- disabled keycap (`--shadow-disabled`): `0 3px 0 #11130e`
- tech key (SQL, API, SSJS) (`--shadow-key-static`): `0 6px 0 #222618` (or `--shadow-key-lg` for `#f1eee4`)
- section number badge (`--shadow-key-sm`): `0 3px 0 #222618`
- case study card, building card (`--shadow-card`): `0 6px 0 #596653`
- focus state (`--shadow-focus`): `0 0 0 6px #f26e22`

### No shadow

- tech key "TS learning" (dashed border), skill group panels, tag chips, skill keys, progress badge

## Motion & Z-Index

### Transitions

- `--transition-fast`: `100ms ease`
- `--transition-normal`: `150ms ease`
- `--transition-slow`: `180ms ease`

### Z-Index Scale

- `--z-base`: `0`
- `--z-dropdown`: `10`
- `--z-sticky`: `20`
- `--z-modal`: `50`