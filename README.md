# TD Logistics - React Website

A professional, fully responsive React website for TD Logistics built with Tailwind CSS, following the comprehensive style guide and design specifications.

## Project Structure

```
td-logistics/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation header with logo and menu
│   │   └── Footer.jsx          # Footer with links and social media
│   ├── pages/
│   │   ├── HomePage.jsx        # Homepage with hero, services, testimonials
│   │   ├── ServicesPage.jsx    # Detailed services overview
│   │   ├── PartnersPage.jsx    # B2B partnership and quote form
│   │   └── ContactPage.jsx     # Contact information and support
│   ├── App.jsx                 # Main app with routing
│   ├── main.jsx                # React entry point
│   └── index.css               # Global styles
├── index.html                  # HTML template
├── package.json                # Dependencies
├── tailwind.config.js          # Tailwind configuration
├── vite.config.js              # Vite configuration
└── README.md                   # This file
```

## Features

### Pages Implemented

1. **Homepage** (`/`)
   - Hero section with tracking module
   - Trusted brands showcase
   - Service overview cards
   - Why Choose Us section
   - Client testimonials
   - Call-to-action section

2. **Services** (`/services`)
   - Complete service overview
   - Last-Mile Delivery details
   - E-commerce Solutions
   - Customized Delivery
   - Technology Features
   - Why Choose TD Logistics

3. **Partners** (`/partners`)
   - Partnership value proposition
   - Multi-step quote request form
   - Why Partner section
   - Client success stories

4. **Contact** (`/contact`)
   - Multiple contact methods (phone, WhatsApp, email)
   - Contact form
   - Office locations
   - FAQ section
   - Emergency support

### Design System

- **Colors**: Primary red (#b23028), professional grays, success/warning/error states
- **Typography**: System font stack with proper hierarchy
- **Spacing**: 8px base unit with consistent scale
- **Shadows**: Subtle, moderate, and strong shadow levels
- **Border Radius**: 4px, 8px, 12px options
- **Components**: Buttons, cards, forms, badges, testimonials

## Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```
   The app will open at `http://localhost:3000`

3. **Build for production**
   ```bash
   npm run build
   ```

4. **Preview production build**
   ```bash
   npm run preview
   ```

## Technology Stack

- **React 18** - UI library
- **React Router v6** - Client-side routing
- **Tailwind CSS 4** - Utility-first CSS framework
- **Vite** - Build tool and dev server
- **FontAwesome 6.7** - Icon library
- **Iconify** - Additional icon support

## Styling Approach

All styling uses Tailwind CSS utility classes with custom color and spacing configurations defined in `tailwind.config.js`. The design follows the TD Logistics Professional Style Guide with:

- Custom color palette matching brand identity
- Extended spacing scale
- Custom shadow definitions
- Professional typography system
- Responsive grid layouts

## Key Components

### Header
- Logo with icon
- Navigation menu with active state
- Client login button
- Get Quote CTA

### Footer
- Brand information
- Service links
- Company links
- Legal links
- Social media icons

### Service Cards
- Icon with background
- Title and description
- Learn More link
- Hover effects

### Testimonial Cards
- Client avatar
- Name and role
- Quote text
- Shadow on hover

### Forms
- Multi-step quote form
- Input validation styling
- Checkbox and select elements
- Progress indicators

## Responsive Design

The website is built mobile-first with Tailwind's responsive utilities. All components adapt gracefully to different screen sizes.

## Accessibility

- Semantic HTML structure
- ARIA labels where appropriate
- Focus states on interactive elements
- Color contrast compliance
- Keyboard navigation support

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- Add form submission handling
- Implement tracking functionality
- Add blog section
- Integrate with backend API
- Add animations and transitions
- Implement dark mode
- Add Arabic language support (RTL)

## License

© 2024 TD Logistics. All rights reserved.
