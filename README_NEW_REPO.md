# 🏥 MediFinance Landing Page

**Marketing website for MediFinance** - Open source financial management platform for medical professionals.

[![Live Demo](https://img.shields.io/badge/Demo-Live-success)](https://medifinance.vercel.app)
[![Built with Astro](https://img.shields.io/badge/Built%20with-Astro-FF5D01?logo=astro)](https://astro.build)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

---

## 🌐 About

This is the **public marketing landing page** for [MediFinance](https://github.com/santiqwerty1/medifinance), a modern financial management platform designed specifically for medical professionals (therapists, dentists, psychologists, and other healthcare providers).

**Main App Repository:** [medifinance](https://github.com/santiqwerty1/medifinance)

---

## ✨ Features

- 🎨 **Modern Design** - Clean, professional UI built with Tailwind CSS
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- ⚡ **Lightning Fast** - Static site generated with Astro
- 🌍 **PPP Pricing** - Purchasing Power Parity pricing for global markets
- 🔍 **SEO Optimized** - Meta tags, sitemap, structured data
- ♿ **Accessible** - WCAG compliant design

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/santiqwerty1/medifinance-landing.git
cd medifinance-landing

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:4321` to see the site.

---

## 📁 Project Structure

```
medifinance-landing/
├── src/
│   ├── components/
│   │   ├── Hero.astro         # Hero section
│   │   ├── Features.astro     # Feature showcase
│   │   ├── Pricing.astro      # Pricing tiers
│   │   ├── FAQ.astro          # Frequently asked questions
│   │   ├── CTA.astro          # Call-to-action
│   │   └── Footer.astro       # Footer
│   ├── layouts/
│   │   └── Layout.astro       # Base layout
│   └── pages/
│       └── index.astro        # Homepage
├── public/                    # Static assets
├── astro.config.mjs          # Astro configuration
├── tailwind.config.mjs       # Tailwind CSS config
└── package.json
```

---

## 🛠️ Tech Stack

- **[Astro 5.15](https://astro.build)** - Static site generator
- **[Tailwind CSS 4.1](https://tailwindcss.com)** - Utility-first CSS
- **[TypeScript 5.9](https://www.typescriptlang.org/)** - Type safety

---

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run astro` | Run Astro CLI commands |

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/santiqwerty1/medifinance-landing)

**Manual deployment:**

1. Push code to GitHub
2. Import repository in Vercel
3. Configure:
   - Framework: Astro
   - Build command: `npm run build`
   - Output directory: `dist`
4. Deploy!

### Deploy to Netlify

```bash
npm run build
# Upload ./dist folder to Netlify
```

### Deploy to Cloudflare Pages

```bash
npm run build
# Connect GitHub repo to Cloudflare Pages
# Build command: npm run build
# Output directory: dist
```

---

## 🎨 Customization

### Update Pricing

Edit `src/components/Pricing.astro`:

```astro
const pricingTiers = {
  tier1: { pro: '$9.99', business: '$19.99' },
  tier2: { pro: '€5.99', business: '€11.99' },
  tier3: { pro: '$2.99', business: '$5.99' },
};
```

### Update Features

Edit `src/components/Features.astro` to add/remove features.

### Update FAQ

Edit `src/components/FAQ.astro` to customize questions and answers.

---

## 🌍 Multi-Market Pricing

The landing page showcases **PPP (Purchasing Power Parity)** pricing:

| Market | Countries | Pro | Business |
|--------|-----------|-----|----------|
| Tier 1 | USA, Canada, Western Europe | $9.99 | $19.99 |
| Tier 2 | Spain, Chile, Eastern Europe | €5.99 | €11.99 |
| Tier 3 | Argentina, Mexico, LatAm | $2.99 | $5.99 |

---

## 🤝 Contributing

Contributions are welcome! This is a **public repository** to demonstrate transparency.

**How to contribute:**

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

**What you can contribute:**
- UI/UX improvements
- Accessibility enhancements
- SEO optimizations
- Translation to other languages
- Bug fixes

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

The landing page is separate from the main MediFinance application, which has its own licensing terms.

---

## 🔗 Links

- **Live Site:** [medifinance.vercel.app](https://medifinance.vercel.app)
- **Main App:** [github.com/santiqwerty1/medifinance](https://github.com/santiqwerty1/medifinance)
- **Documentation:** [Main repo docs](https://github.com/santiqwerty1/medifinance/tree/main/docs)
- **Support:** support@medifinance.app

---

## 🙏 Acknowledgments

- [Astro](https://astro.build) - Amazing static site generator
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- Medical professionals who inspired this project

---

<div align="center">

**Made with ❤️ for medical professionals worldwide**

[⭐ Star this repo](https://github.com/santiqwerty1/medifinance-landing) • [🐛 Report Bug](https://github.com/santiqwerty1/medifinance-landing/issues) • [💡 Request Feature](https://github.com/santiqwerty1/medifinance-landing/issues)

</div>
