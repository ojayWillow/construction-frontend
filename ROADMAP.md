# 🗺️ Frontend Development Roadmap

## Project Overview
Construction Website Frontend - A modern Next.js website with Tailwind CSS for a construction company, featuring contact forms, service showcases, and future AI integration.

**Repository:** [construction-frontend](https://github.com/ojayWillow/construction-frontend)

---

## 📊 Progress Tracker

### Overall Progress
- **Phase 1:** ⬜ 0/6 tasks completed (0%)
- **Phase 2:** ⬜ 0/7 tasks completed (0%)
- **Phase 3:** ⬜ 0/5 tasks completed (0%)
- **Phase 4:** ⬜ 0/4 tasks completed (0%)
- **Phase 5:** ⬜ 0/3 tasks completed (0%)

**Total:** ⬜ 0/25 tasks completed (0%)

---

## 🎯 Phase 1: Project Setup & Configuration
**Goal:** Initialize Next.js project with TypeScript and Tailwind CSS
**Prerequisite:** ⚠️ Wait for Backend Phase 1 completion

### Tasks:
- [ ] **1.1** Initialize Next.js project with TypeScript
  ```bash
  npx create-next-app@latest . --typescript --tailwind --app --no-src-dir
  ```

- [ ] **1.2** Install additional dependencies
  ```bash
  npm install axios react-hook-form @hookform/resolvers zod
  npm install framer-motion lucide-react
  npm install -D @types/node
  ```

- [ ] **1.3** Configure Tailwind CSS
  - Customize `tailwind.config.ts`
  - Add custom colors (construction theme)
  - Configure fonts (Roboto/Open Sans)
  - Set up responsive breakpoints

- [ ] **1.4** Set up project folder structure
  ```
  app/
  ├── (pages)/
  ├── api/
  └── layout.tsx
  components/
  ├── ui/
  ├── forms/
  └── sections/
  lib/
  public/
  └── images/
  ```

- [ ] **1.5** Configure environment variables
  - Create `.env.local` (from `.env.local.example`)
  - Add `NEXT_PUBLIC_API_URL`
  - Add `.env.local` to `.gitignore`

- [ ] **1.6** Set up basic layout and metadata
  - Configure `app/layout.tsx`
  - Add favicon and meta tags
  - Set up Google Fonts
  - Add global styles

**Deliverable:** ✅ Clean Next.js project running on localhost:3000

---

## 🎨 Phase 2: Core Pages & Components
**Goal:** Build main website pages and reusable components

### Tasks:
- [ ] **2.1** Create reusable UI components
  - Button component (`components/ui/Button.tsx`)
  - Card component (`components/ui/Card.tsx`)
  - Container component (`components/ui/Container.tsx`)
  - Section component (`components/ui/Section.tsx`)

- [ ] **2.2** Build Header/Navigation
  - Logo and branding
  - Desktop navigation menu
  - Mobile hamburger menu
  - Smooth scroll to sections
  - Sticky header on scroll

- [ ] **2.3** Build Footer
  - Company information
  - Quick links
  - Social media icons
  - Contact information
  - Copyright notice

- [ ] **2.4** Create Home page (`app/page.tsx`)
  - Hero section with CTA
  - Services overview
  - About preview
  - Testimonials section
  - Call-to-action section

- [ ] **2.5** Create Services page (`app/services/page.tsx`)
  - Service cards with icons
  - Detailed descriptions
  - Image galleries
  - Pricing information (optional)

- [ ] **2.6** Create About page (`app/about/page.tsx`)
  - Company history
  - Team section
  - Values and mission
  - Certifications/credentials

- [ ] **2.7** Create Contact page (`app/contact/page.tsx`)
  - Page layout
  - Contact information display
  - Map integration (optional)
  - Placeholder for contact form

**Deliverable:** ✅ All main pages with responsive design

---

## 📝 Phase 3: Contact Form Integration
**Goal:** Build and connect contact form to backend API
**Prerequisite:** ⚠️ Backend Phase 2 & 3 must be completed

### Tasks:
- [ ] **3.1** Create form validation schema
  - Set up Zod schema (`lib/validations/contact.ts`)
  - Define field requirements
  - Add custom error messages in Latvian/English

- [ ] **3.2** Build Contact Form component
  - Create `components/forms/ContactForm.tsx`
  - Use react-hook-form
  - Add form fields (name, email, phone, message)
  - Style with Tailwind CSS
  - Add loading states

- [ ] **3.3** Create API service
  - Create `lib/api/contact.ts`
  - Implement axios POST request
  - Add error handling
  - Add timeout configuration

- [ ] **3.4** Integrate form with backend
  - Connect form submission to API
  - Handle success responses
  - Handle error responses
  - Add retry logic (optional)

- [ ] **3.5** Add user feedback
  - Success toast/modal
  - Error messages
  - Form reset after success
  - Loading spinner during submission

**Deliverable:** ✅ Working contact form sending data to Telegram

---

## 🖼️ Phase 4: Design & User Experience
**Goal:** Polish the design and improve user experience

### Tasks:
- [ ] **4.1** Add animations
  - Framer Motion page transitions
  - Scroll animations (fade-in, slide-up)
  - Hover effects on cards/buttons
  - Smooth navigation transitions

- [ ] **4.2** Optimize images
  - Use Next.js Image component
  - Add loading placeholders
  - Implement lazy loading
  - Optimize image formats (WebP)

- [ ] **4.3** Add SEO optimization
  - Meta tags for all pages
  - Open Graph tags
  - Structured data (JSON-LD)
  - Sitemap generation
  - robots.txt

- [ ] **4.4** Responsive design testing
  - Test on mobile devices
  - Test on tablets
  - Test on desktop (various sizes)
  - Fix any layout issues

**Deliverable:** ✅ Polished, responsive website with great UX

---

## 🚀 Phase 5: Testing & Deployment
**Goal:** Test thoroughly and deploy to production

### Tasks:
- [ ] **5.1** Cross-browser testing
  - Chrome
  - Firefox
  - Safari
  - Edge
  - Mobile browsers

- [ ] **5.2** Performance optimization
  - Run Lighthouse audit
  - Optimize bundle size
  - Add caching strategies
  - Improve Core Web Vitals

- [ ] **5.3** Deploy to Vercel
  - Connect GitHub repository
  - Configure environment variables
  - Set up custom domain (optional)
  - Enable analytics
  - Test production build

**Deliverable:** ✅ Live production website

---

## 🌟 Phase 6: Future Enhancements (Optional)
**Goal:** Add advanced features

### Planned Features:
- [ ] **6.1** Multi-language support
  - i18n setup (Latvian/English)
  - Language switcher
  - Translate all content

- [ ] **6.2** Project gallery/portfolio
  - Gallery page
  - Image lightbox
  - Project categories
  - Filtering system

- [ ] **6.3** Blog/News section
  - Blog listing page
  - Individual blog posts
  - CMS integration (optional)

- [ ] **6.4** AI Chatbot
  - Chat widget
  - Backend integration
  - Conversation history

- [ ] **6.5** Cost calculator
  - Interactive form
  - Real-time calculations
  - PDF quote generation

---

## 🎨 Design Guidelines

### Color Scheme (Construction Theme)
```css
/* Primary Colors */
--primary: #FF6B35;      /* Orange (construction) */
--secondary: #004E89;    /* Blue (trust) */
--accent: #F7B801;       /* Yellow (safety) */

/* Neutrals */
--dark: #1A1A1A;         /* Text */
--gray: #6B7280;         /* Secondary text */
--light-gray: #F3F4F6;   /* Backgrounds */
--white: #FFFFFF;
```

### Typography
- **Headings:** Roboto Bold
- **Body:** Open Sans Regular
- **Buttons:** Roboto Medium

### Components to Build
1. Hero section with full-width image
2. Service cards with icons
3. Testimonial carousel
4. Contact form with validation
5. Image gallery/lightbox
6. Call-to-action buttons
7. Mobile navigation

---

## 📝 Notes & Decisions

### Technology Choices
- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS (utility-first)
- **Forms:** React Hook Form + Zod (validation)
- **Animations:** Framer Motion (smooth)
- **Icons:** Lucide React (modern)
- **Deployment:** Vercel (optimized for Next.js)

### Environment Variables Needed
```env
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_SITE_NAME="Construction Company"
NEXT_PUBLIC_CONTACT_EMAIL=info@construction.lv
NEXT_PUBLIC_CONTACT_PHONE="+371 20000000"
```

---

## 🐛 Known Issues & Blockers
*Document any issues encountered during development*

- **Blocker:** Frontend development depends on backend API completion
- **Blocker:** Contact form testing requires deployed backend

---

## 📅 Timeline Estimate
- **Phase 1:** 1-2 days
- **Phase 2:** 4-5 days
- **Phase 3:** 2-3 days (after backend ready)
- **Phase 4:** 2-3 days
- **Phase 5:** 1-2 days

**Total:** ~10-15 days (excluding Phase 6)

---

## 🔗 Dependencies & Related Docs

### Backend Dependencies
- ⚠️ Backend API must be running for Phase 3
- API endpoint: `POST /api/contact`
- Expected response format documented

### Related Documentation
- [README.md](./README.md) - Project overview
- [Backend Roadmap](https://github.com/ojayWillow/construction-backend/blob/main/ROADMAP.md)
- [Design Mockups](./docs/design/) - Coming soon

---

## 📋 Development Order

**Recommended sequence:**
1. Start Phase 1 (can begin immediately)
2. Start Phase 2 while backend is in development
3. Wait for backend completion before Phase 3
4. Complete Phase 4 & 5 after form integration

---

**Last Updated:** January 18, 2026
**Status:** 🟡 Planning Phase
