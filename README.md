# 🌐 Omimix – Bilingual Manufacturing Site

Omimix is a responsive, bilingual (Arabic ↔ English) Next.js experience for a Saudi plastic additives manufacturer. It ships with smooth animations, dark/light themes, and a polished content structure tailored for both marketing and conversions.

## ✨ Highlights
- 🈯 Full Arabic/English with `lang` + `dir` switching and RTL/LTR aware UI
- 🌓 Dark & Light themes with localStorage persistence
- 📱 Mobile-first layout, optimized hero/product/workflow sections
- 🎞️ Custom motion system (slide, rise, glow, shimmer) tuned for both themes
- ✉️ Validated contact form with honeypot & rate limiting
- ♿ Accessible patterns (semantic landmarks, focusable controls, contrast-minded)
- 🔍 SEO-ready metadata/OpenGraph and optimized assets

## 🧰 Tech Stack
- Framework: Next.js 16 (App Router)
- Styling: Tailwind CSS v4 + custom design tokens
- Lang/RTL: JSON locales + language provider
- Type Safety: TypeScript
- Icons: Lucide React
- Hosting: Vercel (recommended)

## 📂 Structure
```
app/                # App Router pages, layout, globals.css
components/         # UI sections (hero, products, sectors, workflow, etc.)
hooks/              # use-language, use-theme
lib/                # i18n helpers
locales/            # ar.json / en.json
public/             # static assets
```

## 🚀 Getting Started
```bash
git clone https://github.com/yourusername/omimix-website.git
cd omimix-website
npm install
cp .env.example .env.local
npm run dev
# open http://localhost:3000
```

### Environment (sample)
```
NEXT_PUBLIC_SITE_TITLE=Omimix
NEXT_PUBLIC_BASE_URL=https://omimix.sa
NEXT_PUBLIC_DEFAULT_LOCALE=en
NEXT_PUBLIC_ALTERNATE_LOCALE=ar

# Email (optional for production)
EMAIL_PROVIDER=nodemailer
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
CONTACT_RECIPIENTS=Mishalalmoisheer@omimix.sa,omaralminshaz@omimix.sa
```

## 🧭 Key User Flows
- **Language toggle:** header control flips locale, `lang`, and `dir` across the document.
- **Theme toggle:** header Moon/Sun button persists light/dark and updates CSS variables.
- **Contact form:** validates required fields, honeypot, and rate limiting to reduce spam.
- **Smooth navigation:** section links scroll with CSS `scroll-behavior: smooth`.
- **Animations:** reusable classes (slide-in, rise-in, shimmer, glow) to keep motion consistent in both themes.

## 🔧 Scripts
```bash
npm run dev       # dev server
npm run build     # production build
npm start         # start production
npm run lint      # lint (ESLint 9 flat config)
npm run format    # Prettier
npm run test      # Jest tests
npm run test:watch
```

## 🎨 Customization Pointers
- **Translations:** edit `locales/en.json` and `locales/ar.json` for copy updates.
- **Brand tokens:** tweak theme colors, radii, and shadows in `app/globals.css` (@theme inline tokens + custom utilities).
- **Sections:** add components under `components/`, import into `app/page.tsx`, and extend locales + header nav labels.
- **Animations:** use `animate-rise-in`, `animate-slide-in-up`, `animate-shimmer`, `card-ambient`, and `section-ambient` for consistent motion/lighting.

## ✅ Pre-Push Checklist
- `npm run lint` (only type `any` warnings may remain until typed)
- `npm run test` (ensure hooks/UI tests pass if added)
- Confirm light/dark theme readability (hero CTA & footer in light mode)
- Verify locale switching updates layout direction and copy
- Remove any temporary `.env.local` secrets from version control

## 🤝 Contributing
1. Fork & branch (`feature/your-change`)
2. Code + update locales if text changes
3. Run lint/tests
4. Open PR with a short summary + screenshots for UI updates

## 📜 License
MIT © Omimix

Built with ❤️ for innovators in sustainable plastics.
