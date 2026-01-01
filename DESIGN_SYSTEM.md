# TD Logistics Design System

Complete design system documentation for the React website.

## Color Palette

### Primary Colors
```
Primary Red:        #b23028  (Brand color, CTAs, key elements)
Primary Red Hover:  #8f2620  (Hover states)
Primary Red Light:  rgba(178, 48, 40, 0.1)  (Backgrounds)
```

### Background Colors
```
Page Background:    #ffffff  (Main background)
Container Primary:  #ffffff  (Cards, containers)
Container Secondary: #FAFAFA (Alternate sections)
Container Tertiary: #e5e5e5  (Input fields, disabled states)
Footer:             #010101  (Dark footer)
```

### Text Colors
```
Text Primary:       #010101  (Headlines, body text)
Text Secondary:     rgba(1, 1, 1, 0.7)  (Supporting text)
Text Tertiary:      rgba(1, 1, 1, 0.5)  (Captions, hints)
Text on Dark:       #ffffff  (Text on dark backgrounds)
Text on Dark Secondary: rgba(255, 255, 255, 0.8)
Text Link:          #b23028  (Links, clickable text)
```

### Functional Colors
```
Success Default:    #2E7D32  (Delivery success, completed)
Success Light:      #E8F5E9  (Success backgrounds)

Warning Default:    #F57C00  (In-transit, pending)
Warning Light:      #FFF3E0  (Warning backgrounds)

Info Default:       #1976D2  (Information, tracking)
Info Light:         #E3F2FD  (Info backgrounds)

Error Default:      #C62828  (Errors, delays, alerts)
Error Light:        #FFEBEE  (Error backgrounds)
```

### Border Colors
```
Border Default:     #e5e5e5  (Standard borders)
Border Emphasis:    rgba(1, 1, 1, 0.2)  (Active states)
Border Primary:     #b23028  (Primary action borders)
```

## Typography

### Font Stack
```
-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, 
"Helvetica Neue", Arial, sans-serif
```

### Font Sizes & Weights

| Name | Size | Weight | Usage |
|------|------|--------|-------|
| Caption | 0.75rem | 400 | Metadata, timestamps |
| Body Small | 0.875rem | 400 | Compact info, labels |
| Body | 1rem | 400 | Standard body text |
| Body Emphasis | 1rem | 600 | Emphasized content |
| Subheading | 1.125rem | 600 | Card titles, section headers |
| Heading | 1.5rem | 600 | Page section headers |
| Page Title | 1.875rem | 700 | Main page titles |
| Display | 2.25rem | 700 | Hero headlines |
| Display Large | 3rem | 700 | Primary hero statements |

### Line Height
```
All text: 1.5
```

## Spacing Scale

Base unit: 4px

| Name | Value | Usage |
|------|-------|-------|
| Tight | 8px | Closely related elements |
| Compact | 12px | Component internal spacing |
| Standard | 16px | Default spacing between elements |
| Comfortable | 24px | Section spacing within modules |
| Spacious | 32px | Major section separations |
| Section | 48px | Large section gaps |
| Hero | 64px | Hero section padding |

## Border Radius

| Name | Value | Usage |
|------|-------|-------|
| None | 0px | Maintains professional appearance |
| Small | 4px | Buttons, tags, inputs |
| Medium | 8px | Cards, larger interactive elements |
| Large | 12px | Feature cards, image containers |

## Shadows

### Subtle Shadow
```
0 2px 8px rgba(0, 0, 0, 0.08)
```
Used for: Cards, elevated containers

### Moderate Shadow
```
0 4px 16px rgba(0, 0, 0, 0.12)
```
Used for: Dropdowns, modals, important interactive elements

### Strong Shadow
```
0 8px 24px rgba(0, 0, 0, 0.16)
```
Used for: Floating elements, overlays requiring strong emphasis

## Component Patterns

### Button (Primary)
```jsx
<button className="px-6 py-3 bg-primary-red text-white font-semibold rounded-sm hover:bg-primary-red-hover transition-colors">
  Button Label
</button>
```

### Button (Secondary)
```jsx
<button className="px-6 py-3 bg-transparent border-2 border-primary-red text-primary-red font-semibold rounded-sm hover:bg-primary-red-light transition-colors">
  Button Label
</button>
```

### Button (Text)
```jsx
<button className="text-primary-red font-semibold hover:text-primary-red-hover transition-colors">
  Button Label
</button>
```

### Input Field
```jsx
<input 
  className="w-full px-4 py-3 bg-bg-container-tertiary border border-border-default rounded-sm text-text-primary focus:outline-none focus:border-border-emphasis focus:bg-white transition-colors"
  type="text"
  placeholder="Placeholder text"
/>
```

### Card
```jsx
<div className="bg-white border border-border-default rounded-lg p-6 shadow-subtle hover:shadow-moderate transition-shadow">
  <h3 className="text-lg font-semibold text-text-primary mb-2">Title</h3>
  <p className="text-text-secondary">Description</p>
</div>
```

### Badge (Success)
```jsx
<span className="inline-flex items-center px-3 py-1 bg-success-light text-success-default text-sm font-medium rounded-sm">
  Success
</span>
```

### Badge (Warning)
```jsx
<span className="inline-flex items-center px-3 py-1 bg-warning-light text-warning-default text-sm font-medium rounded-sm">
  Warning
</span>
```

### Badge (Info)
```jsx
<span className="inline-flex items-center px-3 py-1 bg-info-light text-info-default text-sm font-medium rounded-sm">
  Info
</span>
```

### Badge (Error)
```jsx
<span className="inline-flex items-center px-3 py-1 bg-error-light text-error-default text-sm font-medium rounded-sm">
  Error
</span>
```

### Navigation Menu
```jsx
<nav className="flex items-center justify-between w-full px-8 py-4 bg-white border-b border-border-default">
  {/* Logo */}
  {/* Menu items */}
  {/* Actions */}
</nav>
```

### Service Card
```jsx
<div className="bg-white border border-border-default rounded-lg p-6 hover:shadow-moderate transition-shadow">
  <div className="flex justify-center items-center w-12 h-12 bg-primary-red-light rounded-sm mb-4">
    <i className="fas fa-icon text-2xl text-primary-red"></i>
  </div>
  <h3 className="text-lg font-semibold text-text-primary mb-2">Service Title</h3>
  <p className="text-text-secondary mb-4">Description</p>
  <a href="#" className="text-primary-red font-semibold hover:text-primary-red-hover">
    Learn More →
  </a>
</div>
```

### Testimonial Card
```jsx
<div className="bg-white border border-border-default rounded-lg p-6 shadow-subtle">
  <div className="flex items-center gap-4 mb-4">
    <img src="avatar.jpg" alt="Name" className="w-15 h-15 object-cover rounded-full" />
    <div>
      <h4 className="text-base font-semibold text-text-primary">Name</h4>
      <p className="text-sm text-text-secondary">Title</p>
    </div>
  </div>
  <p className="text-text-secondary italic">"Quote text"</p>
</div>
```

## Layout Patterns

### Hero Section
```jsx
<section className="w-full bg-white px-8 py-16">
  <div className="max-w-6xl mx-auto">
    <div className="grid grid-cols-2 items-center gap-16">
      {/* Content */}
      {/* Image */}
    </div>
  </div>
</section>
```

### Feature Grid (2 Columns)
```jsx
<div className="grid grid-cols-2 gap-8">
  {/* Cards */}
</div>
```

### Feature Grid (3 Columns)
```jsx
<div className="grid grid-cols-3 gap-8">
  {/* Cards */}
</div>
```

### Feature Grid (4 Columns)
```jsx
<div className="grid grid-cols-4 gap-6">
  {/* Cards */}
</div>
```

## Responsive Breakpoints

Tailwind CSS default breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

Example responsive class:
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
  {/* Responsive grid */}
</div>
```

## Accessibility

### Color Contrast
- Primary red (#b23028) on white passes WCAG AA
- All text colors meet minimum contrast ratios
- Functional colors are not the only indicator

### Focus States
```jsx
<button className="focus:outline-2 focus:outline-offset-2 focus:outline-primary-red">
  Accessible button
</button>
```

### Semantic HTML
- Use `<button>` for buttons
- Use `<a>` for links
- Use `<nav>` for navigation
- Use `<main>` for main content
- Use `<footer>` for footer

### ARIA Labels
```jsx
<button aria-label="Close menu">
  <i className="fas fa-times"></i>
</button>
```

## Animation & Transitions

### Smooth Transitions
```jsx
<button className="transition-colors hover:bg-primary-red-hover">
  Hover me
</button>
```

### Transition Properties
- `transition-colors` - Color changes
- `transition-shadow` - Shadow changes
- `transition-all` - All properties
- `transition-opacity` - Opacity changes

## Best Practices

1. **Use Tailwind utilities** - Don't write custom CSS
2. **Follow the spacing scale** - Maintain consistency
3. **Use semantic colors** - Use functional colors for status
4. **Maintain contrast** - Ensure readability
5. **Keep it simple** - Don't over-complicate designs
6. **Test on mobile** - Ensure responsive design works
7. **Use icons consistently** - FontAwesome for all icons
8. **Group related elements** - Use spacing to create hierarchy

## Color Usage Guide

### When to use Primary Red
- Primary CTAs (buttons)
- Links
- Active navigation items
- Important highlights
- Brand elements

### When to use Success Green
- Completed actions
- Successful status
- Positive feedback
- Checkmarks

### When to use Warning Orange
- Pending actions
- In-transit status
- Caution messages
- Warnings

### When to use Info Blue
- Information messages
- Tracking updates
- Help text
- Additional details

### When to use Error Red
- Error messages
- Failed actions
- Alerts
- Delays

## Typography Usage Guide

### Display Large (3rem)
- Main hero headlines
- Page titles (only one per page)

### Display (2.25rem)
- Section headlines
- Important announcements

### Page Title (1.875rem)
- Page main titles
- Major section headers

### Heading (1.5rem)
- Section headers
- Card titles

### Subheading (1.125rem)
- Subsection headers
- Feature titles

### Body (1rem)
- Standard paragraph text
- Most content

### Body Small (0.875rem)
- Secondary information
- Labels
- Captions

### Caption (0.75rem)
- Metadata
- Timestamps
- Fine print

---

This design system ensures consistency, professionalism, and excellent user experience across the TD Logistics website.
