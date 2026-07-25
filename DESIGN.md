# Kleinfeld Bridal Design System

Extracted from [Kleinfeld Bridal](https://kleinfeldbridal.com/) using the Impeccable design framework.

## 1. Aesthetic Vision & Brand Persona

* **Visual World**: High-Fashion Editorial Luxury & Bridal Elegance.
* **Core Contrast**: Stark black and charcoal typography set against pure white and warm alabaster backdrops, placing maximum visual emphasis on high-resolution bridal photography.
* **Mode**: Operate (E-commerce & Appointments) & Persuade (Luxury Storytelling).
* **Craft Signature**: Sharp zero border-radius controls, delicate 1px hairline borders, timeless serif headers (`Playfair`), high letter-spacing tracking on navigational links, and smooth image scale transitions on hover.

---

## 2. Design Tokens

### Colors
```css
:root {
  /* Brand Core Palette */
  --color-bg-primary: #FFFFFF;       /* Pure Ivory / White */
  --color-bg-secondary: #F9F8F6;     /* Warm Alabaster / Soft Silk */
  --color-bg-dark: #121212;          /* Midnight Jet Black */
  
  --color-text-primary: #000000;     /* Deep Black */
  --color-text-secondary: #666666;   /* Slate Gray */
  --color-text-muted: #888888;       /* Subtle Muted Gray */
  --color-text-inverse: #FFFFFF;     /* Pure White */

  /* Accents & Borders */
  --color-accent-gold: #C5A059;      /* Champagne Gold (VIP & Exclusive Badges) */
  --color-border-delicate: rgba(28, 28, 28, 0.15); /* Delicate 1px Hairline */
  --color-border-dark: #000000;
  
  /* Overlays */
  --color-overlay-light: rgba(0, 0, 0, 0.10);
  --color-overlay-medium: rgba(0, 0, 0, 0.25);
  --color-overlay-dark: rgba(0, 0, 0, 0.50);
}
```

### Typography System
```css
:root {
  /* Font Families */
  --heading-font-family: 'Playfair', Georgia, 'Times New Roman', serif;
  --text-font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

  /* Font Weights */
  --font-weight-light: 300;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-bold: 700;

  /* Tracking & Letter Spacing */
  --heading-letter-spacing: 0.05em;
  --smallcaps-letter-spacing: 0.1em;
  --nav-letter-spacing: 0.08em;

  /* Typography Scale */
  --text-h1: 2.75rem;     /* 44px, line-height 1.3 */
  --text-h2: 2.125rem;    /* 34px, line-height 1.4 */
  --text-h3: 1.5rem;      /* 24px, line-height 1.5 */
  --text-h4: 1.25rem;     /* 20px, line-height 1.6 */
  --text-base: 1.0rem;    /* 16px, line-height 1.65 */
  --text-sm: 0.875rem;    /* 14px, line-height 1.6 */
  --text-xs: 0.75rem;     /* 12px, line-height 1.5 */
  --text-xxs: 0.6875rem;  /* 11px */
}
```

### Grid, Layout & Containers
```css
:root {
  /* Container Max-Widths */
  --container-xxs-max-width: 27.5rem;   /* 440px */
  --container-xs-max-width: 42.5rem;    /* 680px */
  --container-sm-max-width: 61.25rem;   /* 980px */
  --container-md-max-width: 71.875rem;  /* 1150px */
  --container-lg-max-width: 78.75rem;   /* 1260px */
  --container-xl-max-width: 85.0rem;    /* 1360px */
  
  --container-gutter: 1.25rem;         /* 20px */
  --section-vertical-spacing: 3.5rem;   /* 56px */
  --section-stack-gap: 2.0rem;          /* 32px */
}
```

### Controls & Radii
```css
:root {
  /* Strict Sharp Geometry */
  --button-border-radius: 0px;
  --input-border-radius: 0px;
  
  /* Badges & Special Pills */
  --badge-border-radius: 24px;
  
  /* Input & Button Padding */
  --button-min-height: 48px;
  --input-padding-block: 0.65rem;
  --input-padding-inline: 0.8rem;
}
```

---

## 3. UI Component Specs

### 1. Primary Action Button (`.button`)
```css
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: var(--button-min-height);
  padding: 0.75rem 2.0rem;
  background-color: var(--color-text-primary);
  color: var(--color-text-inverse);
  border: 1px solid var(--color-text-primary);
  border-radius: var(--button-border-radius);
  font-family: var(--heading-font-family);
  font-size: var(--text-sm);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: var(--smallcaps-letter-spacing);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: pointer;
}

.button:hover {
  background-color: transparent;
  color: var(--color-text-primary);
}
```

### 2. Secondary Outline Button (`.button--outline`)
```css
.button--outline {
  background-color: transparent;
  color: var(--color-text-primary);
  border: 1px solid var(--color-text-primary);
}

.button--outline:hover {
  background-color: var(--color-text-primary);
  color: var(--color-text-inverse);
}
```

### 3. Collection / Product Card (`.collection-card`)
```css
.collection-card {
  position: relative;
  overflow: hidden;
  display: block;
  text-decoration: none;
}

.collection-card .zoom-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.collection-card:hover .zoom-image {
  transform: scale(1.04);
}

.collection-card__content {
  position: absolute;
  inset: 0;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(0,0,0,0.4) 100%);
  color: #FFFFFF;
}
```

### 4. Navigation Megamenu (`.megamenu`)
* **Header Structure**: Dual-tier navigation. Top alert bar (`#000` background, `#FFF` tracking text), followed by centered serif logo.
* **Categories**: Structured columns: *Silhouette* (A-Line, Ball Gown, Mermaid, Sheath, Fit & Flare), *Popular Details* (Corset, Lace, Sweetheart, Tulle), *Designers* (Pnina Tornai, Danielle Caprese, Tony Ward, Michelle Roth).
* **Hover State**: Subtle bottom hairline indicator on active category link.

---

## 4. Craft Rules & Quality Floor

1. **No Rounding on Primary UI**: Buttons, text inputs, select dropdowns, and card frames MUST feature sharp `0px` border-radius.
2. **Editorial Hairlines**: Dividers between sections and header tiers must be subtle `1px solid rgba(28, 28, 28, 0.15)`.
3. **High-Contrast Photography First**: Content frames are minimalist so that bridal gowns and photography remain the main visual heroes.
4. **Serif Dominance for Headings**: All titles (`h1`-`h4`) must render in `Playfair` serif with generous letter-spacing (`0.05em`).
