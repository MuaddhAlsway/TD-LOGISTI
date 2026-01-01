# Quick Start Guide - TD Logistics React Website

## 🚀 Get Started in 3 Steps

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

The website will automatically open at `http://localhost:3000`

### Step 3: Start Building!
Edit files in `src/` and see changes instantly with hot reload.

---

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.jsx      # Navigation header
│   └── Footer.jsx      # Footer
├── pages/              # Page components
│   ├── HomePage.jsx    # Homepage
│   ├── ServicesPage.jsx
│   ├── PartnersPage.jsx
│   └── ContactPage.jsx
├── App.jsx             # Main app with routing
├── main.jsx            # Entry point
└── index.css           # Global styles
```

---

## 🎨 Styling with Tailwind

All styling uses Tailwind CSS utility classes. Examples:

```jsx
// Text colors
<h1 className="text-text-primary">Heading</h1>
<p className="text-text-secondary">Description</p>

// Background colors
<div className="bg-primary-red">Red background</div>
<div className="bg-bg-container-secondary">Light gray</div>

// Spacing
<div className="px-8 py-16">Padding</div>
<div className="gap-6">Gap between items</div>

// Shadows
<div className="shadow-subtle">Subtle shadow</div>
<div className="shadow-moderate">Moderate shadow</div>

// Responsive
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
  Responsive grid
</div>
```

---

## 🔗 Routing

Pages are automatically routed:

| Route | Component | Purpose |
|-------|-----------|---------|
| `/` | HomePage | Landing page |
| `/services` | ServicesPage | Service details |
| `/partners` | PartnersPage | B2B partnerships |
| `/contact` | ContactPage | Support & contact |

Add new routes in `src/App.jsx`:

```jsx
<Route path="/new-page" element={<NewPage />} />
```

---

## 🎯 Common Tasks

### Add a New Page

1. Create `src/pages/NewPage.jsx`:
```jsx
export default function NewPage() {
  return (
    <div className="w-full">
      {/* Your content */}
    </div>
  );
}
```

2. Add route in `src/App.jsx`:
```jsx
<Route path="/new-page" element={<NewPage />} />
```

3. Add navigation link in `src/components/Header.jsx`:
```jsx
<Link to="/new-page" className="...">New Page</Link>
```

### Add a New Component

1. Create `src/components/MyComponent.jsx`:
```jsx
export default function MyComponent() {
  return <div>Component content</div>;
}
```

2. Import and use in pages:
```jsx
import MyComponent from '../components/MyComponent';

export default function HomePage() {
  return <MyComponent />;
}
```

### Use Custom Colors

Colors are defined in `tailwind.config.js`. Use them:

```jsx
<div className="bg-primary-red text-white">
  Primary red background
</div>

<button className="bg-primary-red hover:bg-primary-red-hover">
  Button with hover state
</button>
```

### Add Icons

Using FontAwesome:
```jsx
<i className="fas fa-truck-fast"></i>
<i className="fab fa-whatsapp"></i>
<i className="fas fa-arrow-right"></i>
```

---

## 📦 Build for Production

```bash
npm run build
```

Output goes to `dist/` folder. Deploy this folder to any hosting service.

---

## 🌐 Deploy

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### GitHub Pages
Update `vite.config.js`:
```js
export default {
  base: '/repository-name/',
  // ...
}
```

---

## 🐛 Troubleshooting

### Port 3000 already in use?
```bash
npm run dev -- --port 3001
```

### Tailwind classes not working?
- Make sure file is in `src/` folder
- Check `tailwind.config.js` content paths
- Restart dev server

### Images not loading?
- Use full URLs (https://...)
- Or place images in `public/` folder and reference as `/image.jpg`

---

## 📚 Resources

- [React Docs](https://react.dev)
- [React Router](https://reactrouter.com)
- [Tailwind CSS](https://tailwindcss.com)
- [Vite](https://vitejs.dev)
- [FontAwesome Icons](https://fontawesome.com/icons)

---

## 💡 Tips

1. **Use Tailwind IntelliSense** - Install VS Code extension for autocomplete
2. **Keep components small** - Easier to maintain and reuse
3. **Use semantic HTML** - Better accessibility
4. **Test on mobile** - Use browser dev tools
5. **Commit often** - Use git for version control

---

## 🎓 Next Steps

1. Customize colors in `tailwind.config.js`
2. Add your own content and images
3. Connect forms to backend API
4. Add authentication
5. Deploy to production

---

Happy coding! 🚀
