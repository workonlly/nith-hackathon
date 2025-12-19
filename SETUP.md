# NIT Hamirpur Hackathon Website

This is a React + Vite application for the NIT Hamirpur Hackathon on Mobile Device and Application Security, based on the IIT Jammu Hackathon-ISEA theme.

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Images

Create the following image folders in your `public` directory:

```
public/
├── images/
│   ├── nith-logo.png          (NIT Hamirpur header logo)
│   ├── nith-footer-logo.png   (NIT Hamirpur footer logo)
│   └── slider/
│       └── cyber-security.png  (Hero banner image)
```

**Image Requirements:**
- **nith-logo.png**: Header logo (recommended: 200x80px or similar aspect ratio)
- **nith-footer-logo.png**: Footer logo (recommended: 150x60px)
- **cyber-security.png**: Hero slider image (recommended: 1800x713px or 16:9 aspect ratio)

### 3. Run Development Server
```bash
npm run dev
```

## Project Structure

```
src/
├── components/
│   ├── Header.jsx       - Desktop & Mobile navigation
│   ├── TopBar.jsx       - Top bar with contact info
│   ├── HeroSlider.jsx   - Hero image section
│   ├── MainContent.jsx  - About, Timeline, Objectives
│   ├── Sidebar.jsx      - News & Updates sidebar
│   └── Footer.jsx       - Footer with links
├── App.jsx              - Main app component
├── App.css              - Custom styles
└── index.css            - Tailwind imports
```

## Components Overview

### Header
- Responsive navigation with mobile menu
- Sticky header on desktop
- Links to all main pages

### TopBar
- Contact email
- Event information
- Only visible on desktop

### HeroSlider
- Large hero image for the hackathon
- Responsive sizing

### MainContent
- About Hackathon section
- Hackathon objectives
- Timeline and structure (4 phases)
- Event timeline table
- About NIT Hamirpur

### Sidebar
- News and updates widget
- Contact information widget
- Sticky on desktop

### Footer
- Institute information
- Quick links
- Copyright information

## Customization

### Colors
The main color scheme uses:
- Primary: `#192f59` (Dark blue)
- Secondary: `#2c7ec6` (Light blue)
- Accent: `#223d71` (Medium blue)

You can customize these in the Tailwind classes throughout the components.

### Content
Update the following in respective components:
- Email addresses: `TopBar.jsx`, `Sidebar.jsx`, `Footer.jsx`
- Institute name: Change "NIT Hamirpur" throughout
- Event dates: `MainContent.jsx`
- Navigation links: `Header.jsx`, `Footer.jsx`

## Building for Production

```bash
npm run build
```

The build will be created in the `dist` folder.

## Technologies Used

- React 18
- Vite
- Tailwind CSS (v4 with @tailwindcss/vite)
- Modern JavaScript (ES6+)

## Next Steps

1. Add the remaining pages (Problem Statements, Registration, Accommodation, Committee, Contact)
2. Replace placeholder image paths with actual images
3. Add routing (React Router) for multi-page navigation
4. Add form functionality for registration
5. Integrate any backend APIs if needed

## License

Copyright 2025 NIT Hamirpur. All rights reserved.
