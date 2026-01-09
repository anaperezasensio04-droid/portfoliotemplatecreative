# Mobile-First Responsive Layout System

## Overview
This project uses a **mobile-first responsive design approach** with fluid typography (clamp()) and consistent breakpoints.

## Breakpoints (CSS Variables)
Define in `:root` of `theme.css`:

```css
--bp-sm: 480px;    /* Small phones (iPhone SE, etc.) */
--bp-md: 768px;    /* Tablets (iPad, etc.) */
--bp-lg: 1024px;   /* Small laptops */
--bp-xl: 1280px;   /* Standard desktop */
--bp-2xl: 1536px;  /* Large screens (27"+ monitors) */
```

## Media Query Pattern (Mobile-First)

### ✅ CORRECT - Mobile First
```css
/* Default: Mobile styles (320px and up) */
.component {
    padding: var(--space-md);
    font-size: var(--text-sm);
}

/* Tablets and up */
@media (min-width: 768px) {
    .component {
        padding: var(--space-lg);
        font-size: var(--text-base);
    }
}

/* Desktop and up */
@media (min-width: 1024px) {
    .component {
        padding: var(--space-xl);
        font-size: var(--text-lg);
    }
}
```

### ❌ AVOID - Desktop-First (Old Approach)
```css
/* DON'T use max-width in new code */
@media (max-width: 1024px) { }
```

## Responsive Padding Pattern
Instead of fixed values, use `clamp()`:

```css
/* Fluid padding that scales from 16px → 96px */
padding: clamp(16px, 5vw, 96px);

/* Responsive gap */
gap: clamp(12px, 2vw, 32px);
```

## Fluid Typography
All typography uses CSS variables with clamp():

```css
/* From theme.css */
--text-sm: clamp(0.8rem, 1.5vw, 1rem);
--heading-2: clamp(2.07rem, 4.97vw, 2.49rem);
```

Usage:
```css
.component {
    font-size: var(--text-base);  /* Automatic scaling */
}
```

## Component Structure Examples

### Full Width Section (Mobile-First)
```css
.section {
    padding: clamp(1.5rem, 5vw, 3rem);  /* Mobile: 24px, Desktop: 96px */
    width: 100%;
}

.section-container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 clamp(16px, 5vw, 96px);
}

/* Tablet and up: 2-column layout */
@media (min-width: 768px) {
    .grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: clamp(16px, 4vw, 48px);
    }
}

/* Desktop and up: 3-column layout */
@media (min-width: 1024px) {
    .grid {
        grid-template-columns: 1fr 1fr 1fr;
    }
}
```

### Navigation (Mobile-First)
```css
/* Mobile: Hamburger menu */
.nav-links {
    display: none;
    position: absolute;
}

.nav-toggle {
    display: block;
}

.nav.open .nav-links {
    display: flex;
}

/* Tablet and up: Full nav */
@media (min-width: 768px) {
    .nav-links {
        display: flex;
        position: static;
    }

    .nav-toggle {
        display: none;
    }
}
```

## Touch-Friendly Sizes (Mobile-First)
- Buttons: minimum 44px height/width (touch targets)
- Spacing: 16px minimum between interactive elements
- Font size: minimum 16px for inputs (prevents zoom on iOS)

```css
.button {
    min-height: 44px;
    padding: clamp(8px, 2vw, 16px) clamp(12px, 3vw, 24px);
}

input, textarea {
    font-size: 16px;  /* Prevent iOS zoom */
}
```

## Common Responsive Patterns

### Container Query (Alternative to Media Queries)
```css
@container (min-width: 600px) {
    .component {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
}
```

### Aspect Ratio Responsive
```css
.image-container {
    aspect-ratio: 16 / 9;
    width: 100%;
    overflow: hidden;
}
```

### Flexible Typography Size
```css
/* Single declaration scales across all viewports */
font-size: clamp(1rem, 5vw, 3rem);

/* Formula breakdown:
   - Minimum: 1rem (fallback)
   - Preferred: 5vw (scales with viewport)
   - Maximum: 3rem (cap at large screens)
*/
```

## Testing Checklist
- [ ] Test on mobile (320px - 480px)
- [ ] Test on tablet (768px)
- [ ] Test on desktop (1024px+)
- [ ] Test landscape orientation
- [ ] Test with browser zoom (100%, 150%, 200%)
- [ ] Test keyboard navigation
- [ ] Test touch interactions
- [ ] Verify no horizontal scroll
- [ ] Check line lengths (optimal: 50-75 characters)

## Performance Notes
- Use clamp() instead of many media queries
- Avoid layout shifts by defining aspect ratios
- Use `will-change` sparingly for animations
- Lazy load images on mobile

## Modern CSS Features Used
- ✅ CSS Variables (Custom Properties)
- ✅ clamp() for fluid sizing
- ✅ Grid and Flexbox for layouts
- ✅ @media for responsive breakpoints
- ✅ aspect-ratio for media containers
- ✅ min-width media queries (mobile-first)

## Resources
- [MDN: Responsive Design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)
- [MDN: CSS clamp()](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp)
- [Web.dev: Responsive Web Design Basics](https://web.dev/responsive-web-design-basics/)
