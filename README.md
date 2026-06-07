# Ayush Nair — Portfolio Website

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)](https://vercel.com)
[![Built with React](https://img.shields.io/badge/React-18-61DAFB?logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-38BDF8?logo=tailwindcss)](https://tailwindcss.com)

A modern, dark-mode portfolio website built for job applications and recruiter outreach. Showcases skills, projects, experience, and achievements.

## 🚀 Live Demo

> Deploy to Vercel using the steps below.

## 🛠 Tech Stack

- **Framework**: React 18 + TypeScript
- **Styling**: Tailwind CSS v4 (PostCSS)
- **Build Tool**: Vite 5
- **Icons**: Lucide React + custom SVG icons
- **Deployment**: Vercel

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx          # Responsive navbar with scroll spy
│   ├── Hero.tsx            # Landing section with typewriter + floating tags
│   ├── About.tsx           # Bio, education, quick info
│   ├── Skills.tsx          # Filterable skill cards with progress bars
│   ├── Projects.tsx        # Clickable cards with detailed modal
│   ├── Experience.tsx      # Timeline view of work history
│   ├── Achievements.tsx    # Hackathons, OSS contributions
│   ├── Resume.tsx          # Download + preview section
│   ├── Contact.tsx         # Contact form + social links
│   ├── Footer.tsx          # Minimal footer
│   └── SocialIcons.tsx     # GitHub / LinkedIn SVG icons
├── data/
│   └── projects.ts         # All project data (edit here to add projects)
├── App.tsx
├── main.tsx
└── index.css               # Global styles + Tailwind + custom animations
```

## 🏃 Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## 📦 Deploy to Vercel

### Option 1: Vercel CLI
```bash
npm install -g vercel
vercel
```

### Option 2: GitHub Import
1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import the repo — Vercel auto-detects Vite config
4. Click **Deploy** ✅

The `vercel.json` at the root handles SPA routing automatically.

## ➕ Adding a New Project

Edit [`src/data/projects.ts`](src/data/projects.ts) and add a new entry to the `projects` array:

```typescript
{
  id: 'my-new-project',
  title: 'My New Project',
  tagline: 'Short description',
  category: 'Full Stack',
  year: '2025',
  overview: '...',
  features: ['Feature 1', 'Feature 2'],
  techStack: [{ category: 'Frontend', items: ['React', 'TypeScript'] }],
  architecture: 'Architecture description...',
  challenges: 'What was hard...',
  learnings: ['Learning 1', 'Learning 2'],
  github: 'https://github.com/...',
  status: 'completed',
  highlight: true,
  tags: ['React', 'TypeScript'],
  color: 'from-indigo-600 to-violet-600',
  icon: '🚀',
  metrics: [{ label: 'Users', value: '1000+' }],
}
```

## 📄 Resume

Place your resume PDF at `public/AyushNair_Resume.pdf` — it will be linked from the Resume and Navbar sections.

## 🎨 Customization

- **Colors & tokens**: Edit `src/index.css` (`@theme` block)
- **Profile photo**: Replace `public/profile.png`
- **Personal info**: Update `src/components/About.tsx`, `Hero.tsx`, `Contact.tsx`
- **SEO metadata**: Update `index.html` meta tags

---

Built with ❤️ by Ayush Nair
