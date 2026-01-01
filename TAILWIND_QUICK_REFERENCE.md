# Tailwind CSS Quick Reference

## 🎨 Colors

### Primary Brand
```jsx
bg-primary-red          // #b23028
text-primary-red        // #b23028
hover:bg-primary-red-hover  // #8f2620
bg-primary-red-light    // rgba(178, 48, 40, 0.1)
```

### Backgrounds
```jsx
bg-white                // #ffffff
bg-bg-container-secondary  // #FAFAFA
bg-bg-container-tertiary   // #e5e5e5
bg-bg-footer            // #010101
```

### Text
```jsx
text-text-primary       // #010101
text-text-secondary     // rgba(1, 1, 1, 0.7)
text-text-tertiary      // rgba(1, 1, 1, 0.5)
text-text-on-dark       // #ffffff
text-text-link          // #b23028
```

### Status Colors
```jsx
// Success
bg-success-light        // #E8F5E9
text-success-default    // #2E7D32

// Warning
bg-warning-light        // #FFF3E0
text-warning-default    // #F57C00

// Info
bg-info-light           // #E3F2FD
text-info-default       // #1976D2

// Error
bg-error-light          // #FFEBEE
text-error-default      // #C62828
```

### Borders
```jsx
border-border-default   // #e5e5e5
border-border-emphasis  // rgba(1, 1, 1, 0.2)
border-border-primary   // #b23028
```

---

## 📝 Typography

### Font Sizes
```jsx
text-caption            // 0.75rem
text-body-sm            // 0.875rem
text-body               // 1rem
text-body-emphasis      // 1rem (semibold)
text-subheading         // 1.125rem (semibold)
text-heading            // 1.5rem (semibold)
text-page-title         // 1.875rem (bold)
text-display            // 2.25rem (bold)
text-display-lg         // 3rem (bold)
```

### Font Weights
```jsx
font-normal             // 400
font-medium             // 500
font-semibold           // 600
font-bold               // 700
```

### Line Height
```jsx
leading-tight           // 1.25
leading-normal          // 1.5
leading-relaxed         // 1.625
```

---

## 📏 Spacing

### Padding
```jsx
p-tight                 // 8px
p-compact               // 12px
p-standard              // 16px
p-comfortable           // 24px
p-spacious              // 32px
p-section               // 48px
p-hero                  // 64px

// Directional
px-8                    // 32px horizontal
py-16                   // 64px vertical
pt-4                    // 16px top
pb-8                    // 32px bottom
pl-6                    // 24px left
pr-6                    // 24px right
```

### Margin
```jsx
m-standard              // 16px
mx-auto                 // Auto horizontal (center)
my-comfortable          // 24px vertical
mt-4                    // 16px top
mb-8                    // 32px bottom
```

### Gap (Flex/Grid)
```jsx
gap-standard            // 16px
gap-comfortable         // 24px
gap-spacious            // 32px
gap-x-4                 // 16px horizontal
gap-y-8                 // 32px vertical
```

---

## 🎭 Border Radius

```jsx
rounded-none            // 0px
rounded-sm              // 4px
rounded-md              // 8px
rounded-lg              // 12px
rounded-full            // 50%
```

---

## 🌑 Shadows

```jsx
shadow-subtle           // 0 2px 8px rgba(0, 0, 0, 0.08)
shadow-moderate         // 0 4px 16px rgba(0, 0, 0, 0.12)
shadow-strong           // 0 8px 24px rgba(0, 0, 0, 0.16)
hover:shadow-moderate   // Hover effect
```

---

## 🔲 Layout

### Flexbox
```jsx
flex                    // display: flex
flex-col                // flex-direction: column
flex-row                // flex-direction: row
items-center            // align-items: center
items-start             // align-items: flex-start
items-end               // align-items: flex-end
justify-center          // justify-content: center
justify-between         // justify-content: space-between
justify-start           // justify-content: flex-start
justify-end             // justify-content: flex-end
gap-4                   // gap: 16px
```

### Grid
```jsx
grid                    // display: grid
grid-cols-1             // 1 column
grid-cols-2             // 2 columns
grid-cols-3             // 3 columns
grid-cols-4             // 4 columns
gap-8                   // gap: 32px
```

### Width/Height
```jsx
w-full                  // width: 100%
w-1/2                   // width: 50%
h-96                    // height: 384px
h-full                  // height: 100%
max-w-6xl               // max-width: 1152px
```

---

## 🎯 Common Components

### Button (Primary)
```jsx
<button className="px-6 py-3 bg-primary-red text-white font-semibold rounded-sm hover:bg-primary-red-hover transition-colors">
  Button
</button>
```

### Button (Secondary)
```jsx
<button className="px-6 py-3 border-2 border-primary-red text-primary-red font-semibold rounded-sm hover:bg-primary-red-light transition-colors">
  Button
</button>
```

### Card
```jsx
<div className="bg-white border border-border-default rounded-lg p-6 shadow-subtle hover:shadow-moderate transition-shadow">
  Content
</div>
```

### Input
```jsx
<input 
  className="w-full px-4 py-3 bg-bg-container-tertiary border border-border-default rounded-sm text-text-primary focus:outline-none focus:border-border-emphasis focus:bg-white transition-colors"
  type="text"
  placeholder="Placeholder"
/>
```

### Badge (Success)
```jsx
<span className="inline-flex items-center px-3 py-1 bg-success-light text-success-default text-sm font-medium rounded-sm">
  Success
</span>
```

### Hero Section
```jsx
<section className="w-full bg-white px-8 py-16">
  <div className="max-w-6xl mx-auto">
    <div className="grid grid-cols-2 items-center gap-16">
      {/* Content */}
    </div>
  </div>
</section>
```

---

## 📱 Responsive Design

### Breakpoints
```jsx
// Mobile first (default)
<div className="text-base">

// Tablet and up
md:text-lg

// Desktop and up
lg:text-xl

// Large desktop
xl:text-2xl
```

### Responsive Grid
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  {/* 1 col mobile, 2 col tablet, 4 col desktop */}
</div>
```

### Responsive Padding
```jsx
<div className="px-4 md:px-8 lg:px-16 py-8 md:py-12 lg:py-16">
  {/* Responsive padding */}
</div>
```

---

## 🎨 State Variants

### Hover
```jsx
hover:bg-primary-red-hover
hover:text-primary-red
hover:shadow-moderate
```

### Focus
```jsx
focus:outline-2
focus:outline-offset-2
focus:outline-primary-red
```

### Active
```jsx
active:scale-95
active:opacity-75
```

### Disabled
```jsx
disabled:opacity-50
disabled:cursor-not-allowed
```

---

## 🔄 Transitions

### Transition Properties
```jsx
transition-colors       // Color changes
transition-shadow       // Shadow changes
transition-all          // All properties
transition-opacity      // Opacity changes
```

### Duration
```jsx
duration-300            // 300ms
duration-500            // 500ms
```

### Easing
```jsx
ease-in                 // ease-in
ease-out                // ease-out
ease-in-out             // ease-in-out
```

---

## 🎯 Utility Combinations

### Centered Container
```jsx
<div className="max-w-6xl mx-auto">
  {/* Centered, max width 1152px */}
</div>
```

### Flex Center
```jsx
<div className="flex items-center justify-center">
  {/* Centered content */}
</div>
```

### Grid with Gap
```jsx
<div className="grid grid-cols-3 gap-8">
  {/* 3 columns with 32px gap */}
</div>
```

### Card with Hover
```jsx
<div className="bg-white border border-border-default rounded-lg p-6 shadow-subtle hover:shadow-moderate transition-shadow">
  {/* Card with hover effect */}
</div>
```

### Button with Icon
```jsx
<button className="flex items-center gap-2 px-6 py-3 bg-primary-red text-white font-semibold rounded-sm hover:bg-primary-red-hover transition-colors">
  <i className="fas fa-arrow-right"></i>
  Button
</button>
```

---

## ✅ Checklist

- ✅ Use custom colors from config
- ✅ Use spacing scale (not arbitrary values)
- ✅ Use responsive classes (mobile-first)
- ✅ Use state variants (hover, focus, active)
- ✅ Use transitions for smooth effects
- ✅ Use semantic HTML with Tailwind
- ✅ Keep classes organized and readable
- ✅ Test on mobile devices

---

## 🚀 Quick Start

```jsx
// Import Tailwind in index.css
@import "tailwindcss";

// Use in components
<div className="flex items-center justify-between px-8 py-4 bg-white border border-border-default rounded-lg shadow-subtle">
  <h1 className="text-heading font-bold text-text-primary">Title</h1>
  <button className="px-6 py-3 bg-primary-red text-white font-semibold rounded-sm hover:bg-primary-red-hover transition-colors">
    Action
  </button>
</div>
```

---

## 📚 More Info

- Full config: `tailwind.config.js`
- Global styles: `src/index.css`
- Design system: `DESIGN_SYSTEM.md`
- Setup guide: `TAILWIND_SETUP.md`
