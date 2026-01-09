# Ana Pérez - Creative Portfolio

**Live Website:** [https://anaperezasensio04-droid.github.io/portfoliotemplatecreative/](https://anaperezasensio04-droid.github.io/portfoliotemplatecreative/)

## 🚀 Features

### Design System
- ✅ **Fluid Typography** with CSS `clamp()` function
- ✅ **Golden Ratio Heading Scale** (1.2 proportion ratio)
- ✅ **Glassmorphism Effects** with backdrop-filter
- ✅ **Custom Cursor** with SVG (frosted glass effect)
- ✅ **Animation System** with GSAP and CSS keyframes

### Responsive Architecture
- ✅ **Mobile-First Design** with min-width media queries
- ✅ **5-Point Breakpoint System** (480px, 768px, 1024px, 1280px, 1536px)
- ✅ **Touch-Friendly Interface** (44px minimum targets)
- ✅ **No Horizontal Scrolling** across all viewports
- ✅ **Viewport Coverage** from 320px to 2560px+

### Component Features
- ✅ **Responsive Navigation** with hamburger toggle
- ✅ **Animated Contact Form** with validation
- ✅ **Services Accordion** with smooth animations
- ✅ **Project Modal System** with full-screen support
- ✅ **Marquee Bar** with infinite scroll
- ✅ **Image Gallery** with responsive positioning

### Accessibility
- ✅ **WCAG 2.5.5 Level AAA** compliance
- ✅ **Touch Target Minimums** of 44px × 44px
- ✅ **Keyboard Navigation** support
- ✅ **Prefers-Reduced-Motion** support
- ✅ **Color Contrast** standards met

## 📁 Project Structure

```
portfoliotemplatecreative/
├── index.html                 # Main portfolio page
├── 404.html                   # Custom 404 error page
├── assets/
│   ├── css/
│   │   ├── index.css         # CSS barrel index
│   │   ├── reset.css         # CSS reset
│   │   ├── fonts.css         # Font declarations
│   │   ├── theme.css         # Design tokens & variables
│   │   ├── base.css          # Base element styles
│   │   ├── layout.css        # Page structure
│   │   ├── components.css    # UI components
│   │   ├── navigation.css    # Navigation styles
│   │   ├── modal.css         # Modal system
│   │   └── 404.css           # 404 page styles
│   ├── fonts/                # Custom font files (woff2)
│   └── js/
│       └── main.js           # JavaScript functionality
├── docs/                      # Documentation
│   ├── plan.md              # Project planning
│   ├── project-brief.md     # Project brief
│   └── project-inspiration.md # Inspiration references
├── RESPONSIVE_GUIDELINES.md   # Mobile-first guide
├── MOBILE_FIRST_UPDATES.md    # Implementation details
└── MOBILE_FIRST_SUMMARY.md    # Summary of changes
```

## 🎨 Design Tokens

### Colors
- **Primary Accent:** `#01fb3b` (Green)
- **Background:** `#0f0f0f` (Dark)
- **Text:** `#e0e0e0` (Light Gray)
- **Highlight:** `#00ff00` (Bright Green for contact section)

### Typography
- **Headline Font:** BBH Sans Bartle (woff2)
- **Body Font:** System fonts with fallback
- **Base Size:** `clamp(0.875rem, 2vw, 1.125rem)` (fluid scaling)

### Breakpoints
- **Mobile:** 480px
- **Tablet:** 768px
- **Desktop:** 1024px
- **Large Desktop:** 1280px
- **Extra Large:** 1536px

## 🔧 Technologies Used

### CSS
- **CSS Grid & Flexbox** for layouts
- **CSS Variables** for design tokens
- **CSS clamp()** for fluid scaling
- **CSS Media Queries** with mobile-first approach
- **CSS Animations** with `@keyframes`
- **backdrop-filter** for glassmorphism

### JavaScript
- **GSAP 3.12.5** for animations
- **IntersectionObserver** for scroll reveals
- **Vanilla JavaScript** (no frameworks)
- **CSS custom properties** for theming

### Fonts
- **BBH Sans Bartle** for headings (custom woff2)
- **System fonts** for body text

## 📱 Responsive Design

### Mobile First Strategy
All styles start with mobile defaults and enhance for larger screens:

```css
/* Mobile default */
.container { 
  padding: clamp(16px, 5vw, 48px); 
}

/* Tablet enhancement */
@media (min-width: 768px) {
  .container { 
    display: grid; 
  }
}

/* Desktop optimization */
@media (min-width: 1024px) {
  .container { 
    max-width: 1280px; 
  }
}
```

### Touch-Friendly Sizing
All interactive elements maintain 44px × 44px minimum:
- Buttons and links
- Form inputs
- Close buttons
- Navigation toggles

## 🎯 Key Sections

### Hero Section
- Full-viewport hero with background image
- Animated title and description
- Call-to-action button
- Scroll indicator animation

### Services
- Expandable accordion with service items
- Numbered list with descriptions
- Smooth open/close animations

### About
- Split layout with image and content
- Responsive image positioning
- Touch-friendly button

### Contact
- Single-column mobile layout
- Two-column desktop layout
- Glassmorphic form inputs
- Green background section

### Projects
- Responsive image gallery
- Clickable images for modal
- Project showcase with details
- Marquee bar with project titles

### Footer
- Editorial layout with information
- Responsive social links
- Contact details
- Newsletter signup option

## 🚀 Performance

- **Optimized CSS:** Removed educational comments, consolidated media queries
- **Fluid Typography:** No text jumping at breakpoints
- **Touch Optimization:** Reduced interaction errors on mobile
- **Accessibility:** Meets WCAG 2.5.5 Level AAA standards

## 📚 Documentation

Comprehensive documentation files are included:

1. **RESPONSIVE_GUIDELINES.md** - Mobile-first approach guide
2. **MOBILE_FIRST_UPDATES.md** - Component-by-component implementation
3. **MOBILE_FIRST_SUMMARY.md** - Quick reference and summary

## 🔄 Version Control

Project uses Git for version control with standard commit practices.

## 📝 License

This project is licensed under the MIT License - see LICENSE file for details.

---

**Last Updated:** January 2026  
**Version:** 2.0 - Mobile-First Responsive Architecture