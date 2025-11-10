# 🏥 MediFinance Landing Page

**Marketing website for MediFinance** - Modern financial management platform for medical professionals.

[![Built with Astro](https://img.shields.io/badge/Built%20with-Astro-FF5D01?logo=astro)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38B2AC?logo=tailwind-css)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?logo=typescript)](https://www.typescriptlang.org/)

---

## 🌐 About

This is the **public marketing landing page** for [MediFinance](https://github.com/santiqwerty1/medifinance), a financial management platform designed specifically for medical professionals (therapists, dentists, psychologists, and other healthcare providers).

**Main App Repository:** [medifinance](https://github.com/santiqwerty1/medifinance)

---

## ✨ Features

- ⚡ **Lightning Fast** - Static site generated with Astro (zero JS by default)
- 🎨 **Modern Design** - Beautiful gradient design with Tailwind CSS v4
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- 🌍 **PPP Pricing** - Purchasing Power Parity pricing for global markets
- 🔍 **SEO Optimized** - Meta tags, Open Graph, semantic HTML
- ♿ **Accessible** - WCAG compliant, follows accessibility best practices
- 🌙 **Dark Mode** - System-based dark mode support
- 🌐 **i18n Ready** - Spanish content with easy translation path

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
│   │   ├── Hero.astro         # Hero section with CTA
│   │   ├── Features.astro     # Feature showcase
│   │   ├── Pricing.astro      # Pricing tiers with PPP
│   │   ├── FAQ.astro          # Frequently asked questions
│   │   ├── CTA.astro          # Call-to-action section
│   │   └── Footer.astro       # Footer with links
│   ├── layouts/
│   │   └── Layout.astro       # Base layout with SEO tags
│   └── pages/
│       └── index.astro        # Homepage
├── public/                    # Static assets (images, favicon)
├── astro.config.mjs          # Astro configuration
├── tailwind.config.mjs       # Tailwind CSS config
└── package.json
```

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| **[Astro](https://astro.build)** | 5.15+ | Static site generator |
| **[Tailwind CSS](https://tailwindcss.com)** | 4.1+ | Utility-first CSS framework |
| **[TypeScript](https://www.typescriptlang.org/)** | 5.9+ | Type safety |

---

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run astro` | Run Astro CLI commands |

---

## 🚢 Deploy to Vercel (Recommended)

### Why Vercel?
- ✅ Zero configuration
- ✅ Auto-detects Astro
- ✅ Free SSL certificates
- ✅ Global CDN
- ✅ Automatic deployments on git push
- ✅ Perfect for static sites

### Deployment Steps

1. **Connect GitHub repository to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with GitHub
   - Click "New Project"
   - Import the `medifinance-landing` repository

2. **Configure build settings** (auto-detected)
   - Framework Preset: **Astro**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Deploy**
   - Click "Deploy"
   - Wait ~2 minutes for first build
   - Get your deployment URL: `medifinance-landing.vercel.app`

4. **Add custom domain** (when ready)
   - Project Settings → Domains
   - Add your domain (e.g., `medifinanceapp.com`)
   - Configure DNS at your registrar:
     ```
     Type  Name  Value
     A     @     76.76.21.21
     CNAME www   cname.vercel-dns.com
     ```
   - SSL certificate auto-generates in ~5 minutes

5. **Set up subdomain for dashboard app**
   ```
   Type    Name  Value
   CNAME   app   cname.vercel-dns.com
   ```
   Then add `app.yourdomain.com` in your main app's Vercel project.

---

## 🎨 Customization

### Update Domain

In `astro.config.mjs`, update the `site` URL:

```js
export default defineConfig({
  site: 'https://yourdomain.com', // Update this!
});
```

### Update App URLs

All CTA buttons point to the dashboard. Update in:
- `src/components/Hero.astro`
- `src/components/Pricing.astro`
- `src/components/CTA.astro`
- `src/components/Footer.astro`

Replace `https://app.medifinance.com` with your actual app URL.

### Update Colors

Colors are defined in `tailwind.config.mjs`. The primary purple gradient can be customized:

```js
colors: {
  primary: {
    500: '#8b5cf6', // Main purple
    600: '#7c3aed', // Darker purple
    // ... customize other shades
  },
}
```

### Update Content

All content is in component files for easy editing:

- **Hero headline**: `src/components/Hero.astro`
- **Features list**: `src/components/Features.astro`
- **Pricing plans**: `src/components/Pricing.astro`
- **FAQs**: `src/components/FAQ.astro`

### Add Screenshots

Replace placeholders with actual screenshots:

1. Take screenshot of your dashboard
2. Save as `public/dashboard-screenshot.png`
3. Create Open Graph image: `public/og-image.png` (1200x630px)
4. Update references in components

---

## 🌍 Multi-Market Pricing

The landing page showcases **PPP (Purchasing Power Parity)** pricing:

| Market | Countries | Pro | Business |
|--------|-----------|-----|----------|
| Tier 1 | USA, Canada, Western Europe | $9.99 | $19.99 |
| Tier 2 | Spain, Chile, Eastern Europe | €5.99 | €11.99 |
| Tier 3 | Argentina, Mexico, LatAm | $2.99 | $5.99 |

Edit pricing in `src/components/Pricing.astro`.

---

## 📊 SEO Optimization

### Sitemap

Add sitemap generation:

```bash
npm install @astrojs/sitemap
```

Update `astro.config.mjs`:

```js
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://yourdomain.com',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
```

### Analytics

Add Google Analytics to `src/layouts/Layout.astro`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

Or use **Vercel Analytics** (included by default in Vercel projects).

### Meta Tags

Update meta tags in `src/layouts/Layout.astro`:
- Title
- Description
- Open Graph image (`/public/og-image.png`)
- Twitter Card meta tags

---

## ✅ Post-Deployment Checklist

After deploying to Vercel:

- [x] Update `site` URL in `astro.config.mjs`
- [x] Update all CTA links to point to your dashboard
- [ ] Add real dashboard screenshots
- [ ] Create Open Graph image (`public/og-image.png`)
- [ ] Install and configure sitemap
- [ ] Add Google Analytics or Vercel Analytics
- [ ] Configure custom domain
- [ ] Set up `app.yourdomain.com` subdomain
- [ ] Test on mobile devices
- [ ] Run Lighthouse audit (aim for 95+ score)
- [ ] Submit sitemap to Google Search Console
- [ ] Create legal pages (Privacy Policy, Terms of Service)

---

## 🚀 Performance

This landing page is optimized for maximum performance:

- ✅ Static HTML generation (no JS unless needed)
- ✅ Tailwind CSS purging removes unused styles
- ✅ Optimized fonts
- ✅ Minimal dependencies
- ✅ Global CDN delivery via Vercel

**Expected Lighthouse scores:** 95-100 across all metrics.

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
- Documentation improvements

---

## 📄 License

This project is licensed under the **MIT License**.

The landing page is separate from the main MediFinance application, which has its own licensing terms.

---

## 🔗 Links

- **GitHub:** [medifinance-landing](https://github.com/santiqwerty1/medifinance-landing)
- **Main App:** [medifinance](https://github.com/santiqwerty1/medifinance)
- **Live Demo:** [Your Vercel URL]
- **Documentation:** [Main repo docs](https://github.com/santiqwerty1/medifinance/tree/main/docs)

---

## 🙏 Acknowledgments

- [Astro](https://astro.build) - Amazing static site generator
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- Medical professionals who inspired this project

---

## 💡 Tips for Success

### Before Launch
1. Test everything locally with `npm run build` and `npm run preview`
2. Check responsiveness on mobile devices
3. Verify all links work correctly
4. Optimize images (use WebP format)
5. Test dark mode

### After Launch
1. Monitor Vercel Analytics for traffic insights
2. Track conversion rates ("Start Free" button clicks)
3. Collect user feedback and testimonials
4. A/B test different headlines and CTAs
5. Update screenshots as your app evolves

### Marketing
1. Share on Product Hunt, Indie Hackers, BetaList
2. Post on social media (Twitter/X, LinkedIn)
3. Reach out to medical professional communities
4. Start a blog for SEO (Astro supports MDX)
5. Build backlinks through guest posts

---

<div align="center">

**Made with ❤️ for medical professionals worldwide**

[⭐ Star this repo](https://github.com/santiqwerty1/medifinance-landing) • [🐛 Report Bug](https://github.com/santiqwerty1/medifinance-landing/issues) • [💡 Request Feature](https://github.com/santiqwerty1/medifinance-landing/issues)

</div>
