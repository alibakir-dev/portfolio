# Design Spec

## Live design

https://rigid-swarm-95572895.figma.site/

## Colors

### Light

- page background: #F0ECE2
- page background alt: #DDD7CA
- text: #222618
- text muted: #4C5143
- surface: #FFFDF8
- sage: #8A9A86
- sage surface: #DCE2D9
- sage shadow: #596653
- border: #C9C8BD
- disabled shadow: #77786F
- grid line: rgba(34, 38, 24, 0.035)
- keycap shadow: #222618

### Dark

- page background: #171912
- page background alt: #303428
- text: #F1EEE4
- text muted: #C3C7B9
- surface: #22251D
- sage: #93A48E
- sage surface: #292F26
- sage shadow: #596653
- border: #44483D
- disabled shadow: #11130E
- grid line: rgba(248, 246, 240, 0.045)
- keycap shadow: #F1EEE4

### Shared

- orange accent: #F26E22
- orange dark: #A94310 (unverified)
- text on keycap: #222618

## Fonts

- family: Roboto Mono, monospace
- weights used: 400, 500, 600, 700

## Font sizes

Same in light and dark. Format: size: weights.

- 8px: 600
- 9px: 600, 700
- 10px: 400, 700
- 11px: 400, 700
- 12px: 400, 700
- 13px: 400
- 15px: 400, 700
- 16px: 400, 700
- 18px: 700
- 19px: 500
- 20px: 400
- 22px: 600
- 25px: 700
- 30px: 400
- 44px: 400
- 90px: 400
- 104px: 700

## Spacing

Same in light and dark. The design does not use a clean scale; values are measured per role.

### Scale (most used)

- 6, 8, 9, 11, 12, 13, 16, 18, 22, 24, 28, 64, 72, 88, 96, 112, 132

### Desktop (1440px)

- container width: 960px, centered (no side padding, auto margins)
- header padding: 28px top, 32px bottom
- hero padding: 116px top, 132px bottom
- section vertical padding: 132px (contact: 112px)
- section title margin-bottom: 64px
- section title gap (number / text): 18px
- hero actions gap: 16px
- hero keys: margin-top 72px, gap 18px
- nav keycap padding: 9px 12px (gap between keycaps: 10px)
- theme toggle padding: 8px 10px
- button keycap padding: 12px 18px
- tag padding: 6px 9px (tag row gap: 8px)
- case study list gap: 28px
- case study header padding: 16px 22px
- case study detail column padding: 24px 22px (3 equal columns, no gap)
- skill group padding: 38px (gap between groups: 22px)
- building list: 2 columns, gap 22px
- also built callout: padding-left 20px, margin-top 46px
- footer padding: 28px top, 34px bottom

### Mobile (390px)

- container side margin: 20px
- header padding: 24px top, 28px bottom
- hero padding: 88px top, 96px bottom
- section vertical padding: 88px (contact: 96px)
- section title margin-bottom: 48px
- hero keys: margin-top 60px, gap 8px (4 equal columns)
- case study detail column padding: 24px 22px (stacked, 1 column)
- skill group padding: 24px 20px
- building list: 1 column, gap 22px
- everything else same as desktop

## Radii

Same in light and dark.

- keycap (logo, nav, theme toggle, buttons): 6px
- tech key (SQL, API, SSJS, TS): 10px
- case study card, building card, skill group panel: 10px
- section number badge: 4px
- tag chip: 4px
- skill key: 6px
- "In progress" badge: 999px (pill)
- theme icon: 50% (circle)

## Shadows

All shadows are solid offsets with no blur and no spread. Format: offset-x offset-y blur spread color.

### Light

- keycap (logo, nav, theme toggle): 0 4px 0 0 #222618
- disabled keycap: 0 3px 0 0 #77786F
- tech key (SQL, API, SSJS): 0 6px 0 0 #222618
- section number badge: 0 3px 0 0 #222618
- case study card, building card: 0 6px 0 0 #596653

### Dark

- keycap (logo, nav, theme toggle): 0 4px 0 0 #F1EEE4
- disabled keycap: 0 3px 0 0 #11130E
- tech key (SQL, API, SSJS): 0 6px 0 0 #222618
- section number badge: 0 3px 0 0 #222618
- case study card, building card: 0 6px 0 0 #596653

### No shadow

- tech key "TS learning" (dashed border), skill group panels, tag chips, skill keys, progress badge