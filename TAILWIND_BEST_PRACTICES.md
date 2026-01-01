# Tailwind CSS Best Practices

## ✅ Do's

### 1. Use Custom Colors from Config
```jsx
// ✅ GOOD - Uses custom color from tailwind.config.js
<div className="bg-primary-red text-white">
  Content
</div>

// ❌ BAD - Uses arbitrary color
<div className="bg-red-500 text-white">
  Content
</div>
```

### 2. Use Spacing Scale
```jsx
// ✅ GOOD - Uses defined spacing scale
<div className="px-8 py-16 gap-comfortable">
  Content
</div>

// ❌ BAD - Uses arbitrary spacing
<div className="px-7 py-15 gap-5">
  Content
</div>
```

### 3. Mobile-First Responsive Design
```jsx
// ✅ GOOD - Mobile first, then larger screens
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  {/* 1 col on mobile, 2 on tablet, 4 on desktop */}
</div>

// ❌ BAD - Desktop first
<div className="grid grid-cols-4 sm:grid-cols-2 xs:grid-cols-1">
  {/* Wrong approach */}
</div>
```

### 4. Combine Related Utilities
```jsx
// ✅ GOOD - Grouped logically
<button className="px-6 py-3 bg-primary-red text-white font-semibold rounded-sm hover:bg-primary-red-hover transition-colors">
  Button
</button>

// ❌ BAD - Random order
<button className="text-white rounded-sm py-3 hover:bg-primary-red-hover px-6 transition-colors font-semibold bg-primary-red">
  Button
</button>
```

### 5. Use State Variants
```jsx
// ✅ GOOD - Includes hover, focus, active states
<button className="bg-primary-red hover:bg-primary-red-hover focus:outline-2 active:scale-95 transition-all">
  Interactive
</button>

// ❌ BAD - No interactive states
<button className="bg-primary-red">
  Static
</button>
```

### 6. Use Transitions for Smooth Effects
```jsx
// ✅ GOOD - Smooth transitions
<div className="bg-white hover:shadow-moderate transition-shadow">
  Hover me
</div>

// ❌ BAD - Instant changes
<div className="bg-white hover:shadow-moderate">
  Hover me
</div>
```

### 7. Use Semantic HTML with Tailwind
```jsx
// ✅ GOOD - Semantic HTML + Tailwind
<nav className="flex items-center justify-between px-8 py-4">
  <a href="/" className="text-primary-red font-bold">Logo</a>
  <ul className="flex gap-8">
    <li><a href="/about">About</a></li>
  </ul>
</nav>

// ❌ BAD - Non-semantic HTML
<div className="flex items-center justify-between px-8 py-4">
  <div className="text-primary-red font-bold">Logo</div>
  <div className="flex gap-8">
    <div><div>About</div></div>
  </div>
</div>
```

### 8. Extract Repeated Patterns
```jsx
// ✅ GOOD - Create reusable component
function Card({ children }) {
  return (
    <div className="bg-white border border-border-default rounded-lg p-6 shadow-subtle hover:shadow-moderate transition-shadow">
      {children}
    </div>
  );
}

// ❌ BAD - Repeat same classes everywhere
<div className="bg-white border border-border-default rounded-lg p-6 shadow-subtle hover:shadow-moderate transition-shadow">
  Card 1
</div>
<div className="bg-white border border-border-default rounded-lg p-6 shadow-subtle hover:shadow-moderate transition-shadow">
  Card 2
</div>
```

### 9. Use Flexbox for Alignment
```jsx
// ✅ GOOD - Flexbox for alignment
<div className="flex items-center justify-between gap-4">
  <div>Left</div>
  <div>Right</div>
</div>

// ❌ BAD - Margin hacks
<div>
  <div style={{marginRight: 'auto'}}>Left</div>
  <div>Right</div>
</div>
```

### 10. Use Grid for Layouts
```jsx
// ✅ GOOD - Grid for multi-column layouts
<div className="grid grid-cols-3 gap-8">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
</div>

// ❌ BAD - Flexbox for grid layout
<div className="flex">
  <div style={{width: '33.33%'}}>Column 1</div>
  <div style={{width: '33.33%'}}>Column 2</div>
  <div style={{width: '33.33%'}}>Column 3</div>
</div>
```

---

## ❌ Don'ts

### 1. Don't Use Arbitrary Values
```jsx
// ❌ BAD - Arbitrary values
<div className="w-[347px] h-[412px] text-[#b23028]">

// ✅ GOOD - Use config values
<div className="w-full h-96 text-primary-red">
```

### 2. Don't Mix Inline Styles with Tailwind
```jsx
// ❌ BAD - Mixed approaches
<div className="flex items-center" style={{gap: '16px'}}>

// ✅ GOOD - Pure Tailwind
<div className="flex items-center gap-standard">
```

### 3. Don't Use !important
```jsx
// ❌ BAD - Using !important
<div className="bg-white !bg-primary-red">

// ✅ GOOD - Use specificity correctly
<div className="bg-primary-red">
```

### 4. Don't Nest Tailwind Classes
```jsx
// ❌ BAD - Nesting (doesn't work)
<div className="flex">
  <div className="flex items-center">
    <div className="text-primary-red">
      Text
    </div>
  </div>
</div>

// ✅ GOOD - Flat structure
<div className="flex items-center text-primary-red">
  Text
</div>
```

### 5. Don't Use Deprecated Classes
```jsx
// ❌ BAD - Old Tailwind syntax
<div className="text-center">

// ✅ GOOD - Modern approach
<div className="flex justify-center">
```

### 6. Don't Ignore Accessibility
```jsx
// ❌ BAD - No focus states
<button className="bg-primary-red text-white">
  Click me
</button>

// ✅ GOOD - Includes focus states
<button className="bg-primary-red text-white focus:outline-2 focus:outline-offset-2 focus:outline-primary-red">
  Click me
</button>
```

### 7. Don't Hardcode Colors
```jsx
// ❌ BAD - Hardcoded color
<div className="bg-[#b23028]">

// ✅ GOOD - Use config color
<div className="bg-primary-red">
```

### 8. Don't Use Margin for Spacing Between Elements
```jsx
// ❌ BAD - Margin for spacing
<div>
  <div className="mb-4">Item 1</div>
  <div className="mb-4">Item 2</div>
  <div>Item 3</div>
</div>

// ✅ GOOD - Use gap in parent
<div className="flex flex-col gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

### 9. Don't Forget Responsive Prefixes
```jsx
// ❌ BAD - Only desktop
<div className="grid grid-cols-4">

// ✅ GOOD - Responsive
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
```

### 10. Don't Ignore Performance
```jsx
// ❌ BAD - Unused classes
<div className="bg-red-500 bg-blue-500 bg-green-500">

// ✅ GOOD - Only used classes
<div className="bg-primary-red">
```

---

## 🎯 Performance Tips

### 1. Purge Unused Styles
Tailwind automatically purges unused styles in production. Make sure `content` in `tailwind.config.js` includes all your files:

```javascript
content: [
  "./index.html",
  "./src/**/*.{js,jsx}",
]
```

### 2. Use Production Build
```bash
npm run build  // Optimized CSS
npm run dev    // Full CSS for development
```

### 3. Avoid Dynamic Class Names
```jsx
// ❌ BAD - Dynamic classes won't be detected
const color = 'primary-red';
<div className={`bg-${color}`}>

// ✅ GOOD - Static class names
<div className="bg-primary-red">
```

### 4. Use CSS Variables for Dynamic Values
```jsx
// ✅ GOOD - Use CSS variables
<div style={{color: 'var(--primary-red)'}}>
  Dynamic color
</div>
```

---

## 🔍 Debugging Tips

### 1. Check Generated CSS
```bash
npm run build
# Check dist/index.css for generated styles
```

### 2. Use Browser DevTools
- Inspect element
- Check "Styles" panel
- Look for Tailwind classes

### 3. Verify Config
```javascript
// tailwind.config.js
console.log(config.theme.colors);
```

### 4. Check Content Paths
Make sure all files are included in `content`:
```javascript
content: [
  "./index.html",
  "./src/**/*.{js,jsx}",  // Make sure this matches your files
]
```

---

## 📋 Code Review Checklist

- ✅ Uses custom colors from config
- ✅ Uses spacing scale
- ✅ Mobile-first responsive design
- ✅ Includes hover/focus states
- ✅ Uses transitions
- ✅ Semantic HTML
- ✅ No inline styles
- ✅ No arbitrary values
- ✅ Proper accessibility
- ✅ No unused classes

---

## 🚀 Optimization Checklist

- ✅ Production build optimized
- ✅ CSS is purged
- ✅ No unused utilities
- ✅ Proper breakpoints used
- ✅ Images optimized
- ✅ No console errors
- ✅ Lighthouse score > 90

---

## 📚 Resources

- [Tailwind CSS Best Practices](https://tailwindcss.com/docs/utility-first)
- [Performance Optimization](https://tailwindcss.com/docs/optimizing-for-production)
- [Responsive Design](https://tailwindcss.com/docs/responsive-design)
- [Customization](https://tailwindcss.com/docs/configuration)

---

## 💡 Common Mistakes

### Mistake 1: Using Arbitrary Values
```jsx
// ❌ Wrong
<div className="w-[347px]">

// ✅ Right
<div className="w-full">
```

### Mistake 2: Forgetting Responsive Prefixes
```jsx
// ❌ Wrong
<div className="grid grid-cols-4">

// ✅ Right
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
```

### Mistake 3: Not Using Gap
```jsx
// ❌ Wrong
<div className="flex">
  <div className="mr-4">Item 1</div>
  <div>Item 2</div>
</div>

// ✅ Right
<div className="flex gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

### Mistake 4: Mixing Approaches
```jsx
// ❌ Wrong
<div className="flex" style={{gap: '16px'}}>

// ✅ Right
<div className="flex gap-standard">
```

### Mistake 5: Ignoring Accessibility
```jsx
// ❌ Wrong
<button className="bg-primary-red">Click</button>

// ✅ Right
<button className="bg-primary-red focus:outline-2 focus:outline-offset-2">
  Click
</button>
```

---

## ✨ Summary

**Key Principles:**
1. Use custom config values
2. Mobile-first responsive
3. Semantic HTML
4. State variants
5. Smooth transitions
6. No arbitrary values
7. Accessibility first
8. Performance optimized

**Result:** Clean, maintainable, performant CSS!
