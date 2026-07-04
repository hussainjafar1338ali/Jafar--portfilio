# Jafar Hussain — Portfolio

A modern, dark, glassmorphic personal portfolio built with React, Vite, Tailwind CSS, and Framer Motion.

## Tech Stack
- React 18 + Vite
- Tailwind CSS
- Framer Motion (animations)
- React Icons

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build for production

```bash
npm run build
npm run preview
```

The production build is output to `dist/`, ready to deploy on Vercel, Netlify, GitHub Pages, etc.

## Folder Structure

```
src/
  components/     Reusable UI components (one per section + shared widgets)
  data/           Static content: profile.js, skills.js, projects.js
  hooks/          Custom hooks (e.g. useTypewriter)
  App.jsx         Composes all sections
  main.jsx        React entry point
  index.css       Tailwind base + custom utility classes
public/
  favicon.svg
  resume.pdf      <-- Add your real resume PDF here (referenced by the Hero "Download Resume" button)
```

## Customizing Content

All personal content lives in `src/data/`:
- `profile.js` — name, title, tagline, contact info, social links, About/Education/Experience/Certifications
- `skills.js` — skill categories and icons
- `projects.js` — project cards, tech stack, GitHub/demo links

Update these files to change site content without touching component code.

## Notes
- Add your real resume as `public/resume.pdf` so the "Download Resume" button works.
- Replace the `JH` avatar placeholder in `Hero.jsx` with an `<img>` tag pointing to your photo once available.
- Update project GitHub/demo links in `src/data/projects.js`.
- The contact form is front-end only; wire it to a service like Formspree, EmailJS, or your own backend to actually send messages.
