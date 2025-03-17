# Qinglan's Personal Portfolio Website

This is a modern personal portfolio website built with [Next.js](https://nextjs.org) and bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Description

This website serves as a personal portfolio for Qinglan, showcasing skills, projects, competition experiences, and providing a contact form for visitors. The website features an animated hero section, interactive UI components, and a responsive design using Tailwind CSS.

## Technologies Used

- [Next.js 15](https://nextjs.org/) - React framework with App Router
- [React 19](https://reactjs.org/) - UI library
- [TailwindCSS](https://tailwindcss.com/) - CSS framework for styling
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [React Scroll](https://www.npmjs.com/package/react-scroll) - Smooth scrolling functionality
- [React Typical](https://www.npmjs.com/package/react-typical) - Typing animation effect
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library
- [React LineTO](https://www.npmjs.com/package/react-lineto) - Create lines between components
- [TypeScript](https://www.typescriptlang.org/) - Type checking (dev dependency)
- [Turbopack](https://turbo.build/pack) - Fast bundler for development

## Project Structure

```
project-root/
├── app/                # Next.js App Router
│   ├── page.js         # Main page component
│   ├── layout.js       # Root layout with metadata
│   ├── globals.css     # Global CSS
│   └── HomePage.client.js # Client-side homepage component
├── components/         # Reusable UI components
│   ├── Navbar.js       # Navigation bar
│   ├── Hero.js         # Hero section with animations
│   ├── AboutMe.js      # About section
│   ├── ProjectsAndSkillsWithLines.js # Projects and skills with connecting lines
│   ├── Projects.js     # Projects showcase
│   ├── Skills.js       # Skills showcase
│   ├── CompetitionExperience.js # Competition experiences
│   └── ContactForm.js  # Contact form
├── public/             # Static files
├── tailwind.config.mjs # Tailwind CSS configuration
├── postcss.config.mjs  # PostCSS configuration
├── next.config.mjs     # Next.js configuration
├── jsconfig.json       # JavaScript configuration
├── eslint.config.mjs   # ESLint configuration
└── package.json        # Project dependencies
```

## Key Features

- Animated hero section with canvas-based comet/star animation
- Interactive and smooth scrolling navigation
- About me section with motion animations
- Projects and skills section with connecting lines visualization
- Competition experience showcase
- Contact form
- Responsive design for all device sizes
- Dynamic imports with loading placeholders
- Custom color scheme with primary color accent (#00FF6A)

## Getting Started

### Prerequisites

- Node.js (version 16.x or later)
- Yarn package manager (recommended)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/qinglan-website.git
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

3. Run the development server with Turbopack:
   ```bash
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Development

This project uses:
- ESLint for code linting with Next.js core web vitals configuration
- TailwindCSS for styling with custom color theme
- TypeScript for type checking
- Client-side components with 'use client' directive
- Dynamic imports for improved performance
- Framer Motion for animations

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

```bash
yarn build
```

