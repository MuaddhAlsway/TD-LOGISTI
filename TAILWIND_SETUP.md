# Tailwind CSS Setup & Configuration

## ✅ Current Setup Status

**Version**: Tailwind CSS 4.0.0 (Latest)
**Status**: ✅ Fully Configured and Ready

---

## 📦 Installation

Tailwind CSS is already installed via npm. To install dependencies:

```bash
npm install
```

This installs:
- `tailwindcss@^4.0.0` - Core framework
- `vite@^5.0.0` - Build tool with Tailwind support
- `@vitejs/plugin-react@^4.2.0` - React plugin for Vite

---

## 🎨 Custom Configuration

### Colors (Extended)

All custom colors are defined in `tailwind.config.js`:

```javascript
colors: {
  // Primary Brand
  'primary-red': '#b23028',
  'primary-red-hover': '#8f2620',
  'primary-red-light': 'rgba(178, 48, 40, 0.1)',
  
  // Backgrounds
  'bg-page': '#ffffff',
  'bg-container-primary': '#ffffff',
  'bg-container-secondary': '#FAFAFA',
  'bg-container-tertiary': '#e5e5e5',
  'bg-footer': '#010101',
  
  // Text
  'text-primary': '#010101',
  'text-secondary': 'rgba(1, 1, 1, 0.7)',
  'text-tertiary': 'rgba(1, 1, 1, 0.5)',
  'text-on-dark': '#ffffff',
  'text-on-dark-secondary': 'rgba(255, 255, 255, 0.8)',
  'text-link': '#b23028',
  
  // Functional
  'success-default': '#2E7D32',
  'success-light': '#E8F5E9',
  'warning-default': '#F57C00',
  'warning-light': '#FFF3E0',
  'info-default': '#1976D2',
  'info-light': '#E3F2FD',
  'error-default': '#C62828',
  'error-light': '#FFEBEE',
  
  // Borders
  'border-default': '#e5e5e5',
  'border-emphasis': 'rgba(1, 1, 1, 0.2)',
  'border-primary': '#b23028',
}
```

### Usage Examples

```jsx
// Background colors
<div className="bg-primary-red">Primary red background</div>
<div className="bg-bg-container-secondary">Light gray background</div>
<div className="bg-success-light">Success background</div>

// Text colors
<p className="text-text-primary">Primary text</p>
<p className="text-text-secondary">Secondary text</p>
<a className="text-text-link">Link text</a>

// Border colors
<div className="border border-border-default">Default border</div>
<div className="border-2 border-border-primary">Primary border</div>
```

---

## 📐 Typography

### Font Family

```javascript
fontFamily: {
  sans: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif'
  ],
}
```

### Font Sizes

```javascript
fontSize: {
  'caption': ['0.75rem', { lineHeight: '1.5' }],
  'body-sm': ['0.875rem', { lineHeight: '1.5' }],
  'body': ['1rem', { lineHeight: '1.5' }],
  'body-emphasis': ['1rem', { lineHeight: '1.5', fontWeight: '600' }],
  'subheading': ['1.125rem', { lineHeight: '1.5', fontWeight: '600' }],
  'heading': ['1.5rem', { lineHeight: '1.5', fontWeight: '600' }],
  'page-title': ['1.875rem', { lineHeight: '1.5', fontWeight: '700' }],
  'display': ['2.25rem', { lineHeight: '1.5', fontWeight: '700' }],
  'display-lg': ['3rem', { lineHeight: '1.5', fontWeight: '700' }],
}
```

### Usage Examples

```jsx
// Typography
<h1 className="text-display-lg font-bold">Main Headline</h1>
<h2 className="text-display font-bold">Section Headline</h2>
<h3 className="text-heading font-semibold">Subsection</h3>
<p className="text-body">Body text</p>
<p className="text-body-sm">Small text</p>
<p className="text-caption">Caption text</p>
```

---

## 📏 Spacing

### Spacing Scale

```javascript
spacing: {
  'tight': '8px',      // Closely related elements
  'compact': '12px',   // Component internal spacing
  'standard': '16px',  // Default spacing
  'comfortable': '24px', // Section spacing
  'spacious': '32px',  // Major separations
  'section': '48px',   // Large gaps
  'hero': '64px',      // Hero padding
}
```

### Usage Examples

```jsx
// Padding
<div className="p-standard">16px padding</div>
<div className="px-8 py-16">Horizontal 32px, Vertical 64px</div>

// Margin
<div className="m-comfortable">24px margin</div>
<div className="mb-section">48px margin-bottom</div>

// Gap (Flexbox/Grid)
<div className="flex gap-standard">16px gap</div>
<div className="grid gap-comfortable">24px gap</div>
```

---

## 🎭 Border Radius

```javascript
borderRadius: {
  'none': '0px',
  'sm': '4px',
  'md': '8px',
  'lg': '12px',
}
```

### Usage Examples

```jsx
<button className="rounded-sm">4px radius</button>
<div className="rounded-md">8px radius</div>
<div className="rounded-lg">12px radius</div>
```

---

## 🌑 Shadows

```javascript
boxShadow: {
  'subtle': '0 2px 8px rgba(0, 0, 0, 0.08)',
  'moderate': '0 4px 16px rgba(0, 0, 0, 0.12)',
  'strong': '0 8px 24px rgba(0, 0, 0, 0.16)',
}
```

### Usage Examples

```jsx
<div className="shadow-subtle">Subtle shadow</div>
<div className="shadow-moderate">Moderate shadow</div>
<div className="shadow-strong">Strong shadow</div>
<div className="hover:shadow-moderate">Hover effect</div>
```

---

## 🔧 How Tailwind Works

### 1. Content Scanning

Tailwind scans these files for class names:
```javascript
content: [
  "./index.html",
  "./src/**/*.{js,jsx}",
]
```

### 2. Class Generation

Only classes used in your code are generated in the final CSS.

### 3. Purging

Unused styles are automatically removed in production builds.

---

## 💡 Common Patterns

### Responsive Design

```jsx
// Mobile first
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
  {/* 1 column on mobile, 2 on tablet, 4 on desktop */}
</div>
```

### Hover States

```jsx
<button className="bg-primary-red hover:bg-primary-red-hover transition-colors">
  Hover me
</button>
```

### Transitions

```jsx
<div className="transition-all duration-300 ease-in-out">
  Smooth transition
</div>
```

### Flexbox

```jsx
<div className="flex items-center justify-between gap-4">
  <div>Left</div>
  <div>Right</div>
</div>
```

### Grid

```jsx
<div className="grid grid-cols-3 gap-8">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
</div>
```

---

## 🚀 Development Workflow

### Start Dev Server

```bash
npm run dev
```

Tailwind watches for changes and recompiles automatically.

### Build for Production

```bash
npm run build
```

Tailwind purges unused styles and optimizes the CSS.

### Preview Build

```bash
npm run preview
```

Test the production build locally.

---

## 📚 Tailwind CSS Features Used

### ✅ Utility Classes

All styling uses utility classes:
```jsx
<div className="flex items-center justify-between px-8 py-4 bg-white border border-border-default rounded-lg shadow-subtle">
  Content
</div>
```

### ✅ Responsive Utilities

```jsx
<div className="text-base md:text-lg lg:text-xl">
  Responsive text size
</div>
```

### ✅ State Variants

```jsx
<button className="bg-primary-red hover:bg-primary-red-hover focus:outline-2 active:scale-95">
  Interactive button
</button>
```

### ✅ Dark Mode Ready

```jsx
<div className="bg-white dark:bg-gray-900">
  Light/dark mode support
</div>
```

---

## 🎯 Best Practices

### 1. Use Custom Colors

```jsx
// ✅ Good
<div className="bg-primary-red text-white">

// ❌ Avoid
<div className="bg-red-500 text-white">
```

### 2. Use Spacing Scale

```jsx
// ✅ Good
<div className="p-standard gap-comfortable">

// ❌ Avoid
<div className="p-4 gap-6">
```

### 3. Combine Utilities

```jsx
// ✅ Good
<button className="px-6 py-3 bg-primary-red text-white font-semibold rounded-sm hover:bg-primary-red-hover transition-colors">

// ❌ Avoid
<button style={{padding: '12px 24px', backgroundColor: '#b23028'}}>
```

### 4. Use Responsive Classes

```jsx
// ✅ Good
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

// ❌ Avoid
<div style={{display: 'grid', gridTemplateColumns: '1fr'}}>
```

---

## 🔍 Debugging

### Check Generated CSS

The generated CSS is in `dist/` after building:
```bash
npm run build
# Check dist/index.css
```

### Verify Classes

Use browser DevTools to inspect elements and see applied classes.

### Common Issues

**Classes not working?**
- Make sure file is in `src/` folder
- Check spelling of class names
- Restart dev server

**Styles not updating?**
- Clear browser cache
- Restart dev server
- Check `tailwind.config.js` content paths

---

## 📖 Resources

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Tailwind CSS Configuration](https://tailwindcss.com/docs/configuration)
- [Tailwind CSS Utilities](https://tailwindcss.com/docs/utility-first)
- [Responsive Design](https://tailwindcss.com/docs/responsive-design)

---

## ✨ Summary

**Tailwind CSS 4.0** is fully configured with:
- ✅ Custom color palette
- ✅ Typography system
- ✅ Spacing scale
- ✅ Shadow definitions
- ✅ Border radius options
- ✅ Responsive utilities
- ✅ State variants
- ✅ Production optimization

Everything is ready to use. Just run `npm install && npm run dev` to start!
