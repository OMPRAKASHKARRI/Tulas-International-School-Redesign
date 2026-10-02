# Tulas International School (TIS) — Homepage Redesign

A modern, responsive, and animated homepage redesign for **Tulas International School (TIS)**, built to deliver an engaging digital experience through refined UI design, smooth interactions, and performance-focused frontend architecture.

The project focuses on transforming the existing school website into a contemporary educational platform while retaining its core brand identity and verified content.

---

## 🌐 Project Links

| Resource | Link |
|---|---|
| Official Website | [Tulas International School](https://tis.edu.in/) |
| Live Demo | https://tulas-international-school-redesign.vercel.app/ |
| GitHub Repository | https://github.com/OMPRAKASHKARRI/Tulas-International-School-Redesign |


## Screesnshots
<img width="1907" height="902" alt="image" src="https://github.com/user-attachments/assets/c54ceb53-5f16-4744-bc87-c9c22cea45f3" />

<img width="1720" height="828" alt="image" src="https://github.com/user-attachments/assets/2ff84cd7-5f43-4cfa-8ace-b6ae101aec9e" />

<img width="1917" height="846" alt="image" src="https://github.com/user-attachments/assets/525d14f0-d993-4619-bde9-3fc7184f98fe" />




---

## ✨ Features

- **Modern UI/UX:** Premium educational website design with clean layouts, typography, and visual hierarchy.
- **Responsive Design:** Optimized layouts for mobile, tablet, and desktop devices.
- **Animated Hero Section:** Engaging landing experience with smooth entrance animations.
- **Custom Cursor:** Interactive cursor with hover-responsive effects on supported devices.
- **Scroll-Triggered Animations:** Smooth section reveals and staggered content transitions.
- **Dark/Light Theme:** Interactive theme switcher with saved user preferences.
- **Scroll Progress Indicator:** Visual indicator displaying the user's page scroll progress.
- **Interactive Navigation:** Sticky navbar, smooth section navigation, and responsive mobile menu.
- **Campus Showcase:** Image galleries highlighting the school's campus and activities.
- **Admissions CTA:** Dedicated calls to action for admissions and enquiries.
- **Reusable Components:** Modular architecture for maintainability and scalability.

---

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| React.js | Component-based frontend development |
| Vite | Development server and build tooling |
| JavaScript (ES6+) | Application logic |
| Tailwind CSS | Responsive styling and design system |
| Framer Motion | Animations and interactive transitions |
| Lucide React | Icon library |
| CSS | Custom styling and visual effects |
| localStorage | Theme preference persistence |
| Node.js | Development tooling and image download scripts |

---

## 📂 Project Architecture

```text
tis-redesign/
│
├── public/
│   └── images/
│       ├── school-logo.png
│       ├── campus.png
│       ├── at-tis.png
│       ├── gallery-1.webp
│       ├── gallery-2.webp
│       ├── gallery-polo.webp
│       ├── gallery-karate.webp
│       ├── gallery-swimming.webp
│       └── gallery-dance.webp
│
├── scripts/
│   └── fetch-images.mjs
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── ui/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   │
│   │   ├── sections/
│   │   │   ├── HeroSection.jsx
│   │   │   ├── AboutSection.jsx
│   │   │   ├── PhilosophySection.jsx
│   │   │   ├── AcademicsSection.jsx
│   │   │   ├── FacilitiesSection.jsx
│   │   │   ├── LearningSection.jsx
│   │   │   ├── TestimonialsSection.jsx
│   │   │   ├── AdmissionsSection.jsx
│   │   │   └── ContactSection.jsx
│   │   │
│   │   └── animation/
│   │       ├── CustomCursor.jsx
│   │       ├── ScrollProgress.jsx
│   │       └── Reveal.jsx
│   │
│   ├── context/
│   │   └── ThemeContext.jsx
│   │
│   ├── hooks/
│   │   ├── useTheme.js
│   │   └── useMediaQuery.js
│   │
│   ├── data/
│   │   ├── navigation.js
│   │   └── schoolContent.js
│   │
│   ├── styles/
│   │   └── index.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

---

## 🚀 Getting Started

Follow these instructions to run the project locally.

### Prerequisites

Ensure the following are installed:

- Node.js (LTS version recommended)
- npm
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/tis-redesign.git
```

### 2. Navigate to the Project Directory

```bash
cd tis-redesign
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Download Project Images

```bash
npm run fetch-images
```

This script downloads the configured school image assets into the `public/images/` directory.

If the required images are already included in the repository, this step may not be necessary.

### 5. Start the Development Server

```bash
npm run dev
```

Open the local development URL displayed in your terminal. By default, Vite uses:

```text
http://localhost:5173
```

### 6. Create a Production Build

```bash
npm run build
```

### 7. Preview the Production Build

```bash
npm run preview
```

---

## 🎨 Standout Features

### 1. Custom Cursor

An interactive cursor experience with smooth spring-based movement and hover-responsive states.

- Mouse-following animation.
- Interactive hover scaling.
- Disabled on touch-oriented devices.
- Designed not to interfere with normal interactions.

### 2. Scroll-Triggered Reveals

Framer Motion powers smooth entrance animations throughout the homepage.

- Fade-in transitions.
- Slide-up animations.
- Staggered card reveals.
- Viewport-based animation triggers.
- Reduced-motion considerations.

### 3. Dark/Light Theme Switcher

A theme management system providing two visual modes.

- Smooth theme transitions.
- Persistent theme preference using localStorage.
- System preference detection on first visit.
- Consistent styling across sections.

### 4. Scroll Progress Indicator

A lightweight scroll progress indicator fixed to the top of the viewport.

- Tracks page scrolling.
- Updates progress smoothly.
- Uses Framer Motion values.

---

## 📱 Responsive Design

The homepage is designed to support multiple screen sizes.

| Device | Target Viewport |
|---|---|
| Mobile | 375px |
| Tablet | 768px |
| Desktop | 1280px and above |

Responsive considerations include:

- Mobile-friendly navigation.
- Flexible grid layouts.
- Adaptive typography.
- Responsive image compositions.
- Touch-friendly interactive elements.
- Consistent spacing across breakpoints.

---

## ⚡ Performance & Accessibility

The project follows frontend development best practices:

- Reusable React components.
- Semantic HTML structure.
- Lazy loading for appropriate images.
- Accessible navigation and controls.
- Keyboard-friendly interactions.
- Reduced-motion support.
- Optimized animation behavior.
- Separation of content and presentation.
- Minimal unnecessary dependencies.

---

## 🧪 Testing & Quality Assurance

The following checks should be completed before final submission:

- [ ] Dependencies install successfully.
- [ ] Production build completes successfully.
- [ ] No browser console errors.
- [ ] All local images load correctly.
- [ ] Navigation links work correctly.
- [ ] Mobile menu works correctly.
- [ ] Theme switcher works and persists preferences.
- [ ] Custom cursor works on supported devices.
- [ ] Scroll animations work correctly.
- [ ] Scroll progress updates accurately.
- [ ] Mobile layout tested at 375px.
- [ ] Tablet layout tested at 768px.
- [ ] Desktop layout tested at 1280px+.
- [ ] Production deployment works correctly.

---

## 🚀 Deployment

The application can be deployed using **Vercel** or **Netlify**.

### Vercel

1. Push the project to GitHub.
2. Sign in to Vercel.
3. Import the GitHub repository.
4. Select Vite as the framework.
5. Configure the build command:

```bash
npm run build
```

6. Configure the output directory:

```text
dist
```

7. Deploy the application.

### Netlify

1. Connect your GitHub repository.
2. Set the build command to `npm run build`.
3. Set the publish directory to `dist`.
4. Deploy the project.

---

## 🎯 Project Objective

The objective of this project is to demonstrate practical frontend development skills through:

- Modern React application architecture.
- Responsive web design.
- Component reusability.
- Animation implementation.
- UI/UX design principles.
- Performance-conscious development.
- Production build and deployment workflows.

---

## 👨‍💻 Author

**Omprakash Karri**

Frontend Developer | React.js | JavaScript | Tailwind CSS

- GitHub: [OMPRAKASHKARRI](https://github.com/OMPRAKASHKARRI)

---

## 📄 Acknowledgement

This project was developed as part of a Frontend Developer assessment focused on redesigning the Tulas International School homepage.

Official Website: https://tis.edu.in/

---

**Built with React, creativity, and attention to detail.** 🚀
