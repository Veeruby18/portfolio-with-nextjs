# Next.js Portfolio Spec

## Overview
A Next.js–based portfolio showcasing personal info, projects, and contact form. Implements styling, image optimization, file-based routing, and SSR where appropriate.

## Goals
- Initialize with `create-next-app`
- Use Next.js Image component for optimized images
- Style with CSS Modules or global CSS
- Create pages: Home, About, Projects, Contact
- Build reusable Layout with Header and Footer
- Implement server-side rendering for Projects page (getStaticProps)
- Deploy to Vercel or Netlify

## Pages & Features
1. **Home** (`pages/index.js`)
   - Hero section with profile image and intro
   - Call-to-action buttons to Projects and Contact
2. **About** (`pages/about.js`)
   - Biography, skills list
3. **Projects** (`pages/projects.js`)
   - Fetch a list of projects via `getStaticProps`
   - Display each in a `ProjectCard` component
4. **Contact** (`pages/contact.js`)
   - Simple contact form (no backend integration)

## Components
- **Layout**: wraps pages, includes Header and Footer
- **Header**: navigation links to pages
- **Footer**: social links and copyright
- **ProjectCard**: image, title, description, link

## Technical Stack
- Next.js
- React
- CSS Modules (e.g. `Home.module.css`)
- Next/Image for images

## Open Questions
- Form submission handling? (e.g., EmailJS)
- Dark mode toggle? (future)
