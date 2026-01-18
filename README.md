# Construction Website - Frontend

## 📋 Projekta apraksts / Project Description

**LV:** Moderna landing page būvniecības uzņēmumam ar Next.js un Tailwind CSS. Iekļauj AI funkcionalitāti, kontaktu formu, un pilnu informāciju par pakalpojumiem.

**EN:** Modern landing page for construction company built with Next.js and Tailwind CSS. Includes AI functionality, contact form, and comprehensive service information.

---

## 🏗️ Tehnoloģiju steks / Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui (optional)
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod validation
- **Icons:** Lucide React / Heroicons
- **Deployment:** Vercel

---

## 📁 Projekta struktūra / Project Structure

```
construction-frontend/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Landing page
│   ├── globals.css             # Global styles
│   └── api/                    # API routes (optional)
│       └── contact/
│           └── route.ts        # Contact form handler
├── components/
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── ProblemSolutionSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── AiImplementationSection.tsx
│   │   ├── SocialProofSection.tsx
│   │   ├── AboutVisionSection.tsx
│   │   ├── FAQSection.tsx
│   │   ├── FinalCtaSection.tsx
│   │   └── Footer.tsx
│   └── ui/                     # Reusable UI components
│       ├── Button.tsx
│       ├── Card.tsx
│       └── Input.tsx
├── lib/
│   └── utils.ts                # Utility functions
├── public/
│   ├── images/
│   └── icons/
├── .env.local.example
├── package.json
├── tailwind.config.ts
└── README.md
```

---

## 🚀 Uzstādīšana / Setup

### 1. Klonē repozitoriju / Clone repository
```bash
git clone https://github.com/ojayWillow/construction-frontend.git
cd construction-frontend
```

### 2. Instalē atkarības / Install dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Konfigurē vides mainīgos / Configure environment variables
```bash
cp .env.local.example .env.local
```

Papildini `.env.local` failu:
```env
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_TELEGRAM_BOT_URL=https://t.me/your_bot
```

### 4. Palaid development serveri / Run dev server
```bash
npm run dev
```

Atver [http://localhost:3000](http://localhost:3000) pārlūkprogrammā.

---

## 📦 Landing Page Sections

### 1. Hero Section
- Galvenais virsraksts un apakšvirsraksts
- CTA pogas ("Sākt projektu", "Uzzināt vairāk")
- Background image vai video

### 2. Problem/Solution Section
- Identificē klienta problēmas
- Parāda risinājumu

### 3. Features Section
- Būvniecības pakalpojumi (kartītēs)
- Ikāpa iespamva ikona, virsraksts, apraksts

### 4. AI Implementation Section
- AI izmaksu aprēķins
- AI konsultācijas
- Projektu vadiba ar AI

### 5. Social Proof Section
- Klientu atsauksmes
- Pabeigto projektu skaits
- Gadu pieredze

### 6. About & Vision Section
- Par uzņēmumu
- Komandas informācija
- Misija un vīzija

### 7. FAQ Section
- Biežak uzdotie jautajumi
- Accordion style

### 8. Final CTA Section
- Kontaktu forma
- Tel. nr., e-pasts, adrese
- Telegram integrācija

### 9. Footer
- Nav links
- Social media links
- Copyright info

---

## 📝 Development Tasks (GitHub Issues)

### Fāze 1: Setup & Layout
- [ ] Inicializēt Next.js projektu ar Tailwind CSS
- [ ] Izveidot pamata layout un navigation
- [ ] Setup Tailwind konfigurāciju (krāsas, fonts)
- [ ] Izveidot `.env.local.example` failu

### Fāze 2: UI Components
- [ ] Izveidot reusable Button komponenti
- [ ] Izveidot Card komponenti
- [ ] Izveidot Input/Form komponentes

### Fāze 3: Landing Sections (seciba)
- [ ] HeroSection komponente + stili
- [ ] ProblemSolutionSection
- [ ] FeaturesSection (kartites ar ikonām)
- [ ] AiImplementationSection
- [ ] SocialProofSection (atsauksmes)
- [ ] AboutVisionSection
- [ ] FAQSection (accordion)
- [ ] FinalCtaSection (kontaktu forma)
- [ ] Footer komponente

### Fāze 4: Integrācijas
- [ ] Kontaktu formas validācija (React Hook Form + Zod)
- [ ] API integrācija ar backend
- [ ] Telegram "Send Further" poga
- [ ] Error handling

### Fāze 5: Polish & Optimizācija
- [ ] Animācijas (Framer Motion)
- [ ] Responsive design (mobile, tablet, desktop)
- [ ] SEO optmizacija (metadata)
- [ ] Performance optimization (images, lazy loading)
- [ ] Accessibility (a11y)

---

## 🎨 Design Guidelines

### Krāsu pallete (ieteikums)
```css
/* Tailwind config */
colors: {
  primary: '#FF6B35',    // Orange (construction)
  secondary: '#004E89',  // Blue (trust)
  accent: '#F7B801',     // Yellow (attention)
  dark: '#1A1A1A',
  light: '#F5F5F5',
}
```

### Fonts
- **Headings:** Inter Bold / Poppins Bold
- **Body:** Inter Regular / Open Sans

---

## 🧪 Testēšana / Testing

```bash
# Run tests (kad ieviests)
npm run test

# E2E tests
npm run test:e2e
```

---

## 📦 Deployment

### Vercel (ieteicams)
```bash
vercel deploy
```

Vai sync ar GitHub → auto-deploy

---

## 🔗 Saites / Links

- **Backend Repo:** [construction-backend](https://github.com/ojayWillow/construction-backend)
- **Live Site:** TBD
- **Design Mockup:** TBD

---

## 👤 Autors / Author

**ojayWillow**
- GitHub: [@ojayWillow](https://github.com/ojayWillow)

---

## 📄 Licence

MIT License
