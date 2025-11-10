# MediFinance Landing Page

Beautiful, fast, and SEO-optimized landing page for MediFinance built with Astro and Tailwind CSS.

## 🚀 Features

- ⚡ **Blazing Fast** - Astro generates static HTML with zero JS by default
- 🎨 **Beautiful Design** - Modern gradient design with dark mode support
- 📱 **Fully Responsive** - Works perfectly on mobile, tablet, and desktop
- 🔍 **SEO Optimized** - Meta tags, Open Graph, and semantic HTML
- ♿ **Accessible** - Follows web accessibility best practices
- 🌐 **i18n Ready** - Spanish content with easy English translation path

## 📦 Project Structure

```
landing-page/
├── public/               # Static assets (images, favicon, etc.)
├── src/
│   ├── components/      # Astro components
│   │   ├── Hero.astro
│   │   ├── Features.astro
│   │   ├── Pricing.astro
│   │   ├── FAQ.astro
│   │   ├── CTA.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro # Base layout with SEO tags
│   └── pages/
│       └── index.astro  # Homepage
├── astro.config.mjs     # Astro configuration
├── tailwind.config.mjs  # Tailwind CSS configuration
└── package.json
```

## 🛠️ Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push this folder to a GitHub repository
2. Go to [Vercel](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Set root directory to `landing-page`
6. Deploy!

Vercel will auto-detect Astro and configure everything.

### Deploy to Netlify

1. Push to GitHub
2. Go to [Netlify](https://netlify.com)
3. Add new site from Git
4. Base directory: `landing-page`
5. Build command: `npm run build`
6. Publish directory: `dist`

### Deploy to Cloudflare Pages

1. Push to GitHub
2. Go to Cloudflare Pages
3. Connect repository
4. Build command: `npm run build`
5. Output directory: `dist`

## 🎨 Customization

### Update Domain

In `astro.config.mjs`, update the `site` URL:

```js
export default defineConfig({
  site: 'https://yourdomain.com', // Change this!
});
```

### Update App URL

All CTA buttons currently point to `https://app.medifinance.com`. Update these in:
- `src/components/Hero.astro`
- `src/components/Pricing.astro`
- `src/components/CTA.astro`

### Add Screenshots

Replace the placeholder in `src/components/Hero.astro` with actual screenshots:

1. Take screenshot of your dashboard
2. Save as `public/dashboard-screenshot.png`
3. Update the Hero component to use the image

### Update Colors

Colors are defined in `tailwind.config.mjs`. The primary purple gradient can be customized there.

### Add Dark Mode Toggle

Currently dark mode follows system preferences. To add a toggle button, you can use a script like:

```html
<script>
  // Add to Layout.astro
  const toggle = document.getElementById('dark-mode-toggle');
  toggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
  });
</script>
```

## 📊 SEO Optimization

### Meta Tags

Update meta tags in `src/layouts/Layout.astro`:
- Title
- Description
- Open Graph image (add to `/public/og-image.png`)

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
  integrations: [tailwind(), sitemap()],
});
```

### Analytics

Add analytics to `Layout.astro`:

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

## 🔗 Domain Setup

Once you get your domain (e.g., `medifinanceapp.com`):

1. **Point domain to hosting:**
   - Vercel: Add custom domain in project settings
   - Netlify: Add custom domain in site settings
   - Update DNS A/CNAME records

2. **SSL Certificate:**
   - Vercel/Netlify provide free SSL automatically

3. **Subdomain structure:**
   ```
   www.medifinanceapp.com  → Landing page
   app.medifinanceapp.com  → Dashboard app (your current app)
   ```

## 📝 Content Updates

All content is in the component files for easy editing:

- **Hero headline**: `src/components/Hero.astro`
- **Features list**: `src/components/Features.astro`
- **Pricing plans**: `src/components/Pricing.astro`
- **FAQs**: `src/components/FAQ.astro`

## 🚀 Performance

This landing page is optimized for performance:
- Static HTML generation (no JS unless needed)
- Tailwind CSS purging removes unused styles
- Lazy loading images
- Optimized fonts
- Minimal dependencies

Expected Lighthouse scores: 95-100 across all metrics.

## 📄 License

Same as main MediFinance project (Proprietary).

## 🆘 Support

For questions or issues with the landing page:
1. Check Astro docs: https://docs.astro.build
2. Check Tailwind docs: https://tailwindcss.com/docs

---

**Built with ❤️ for MediFinance**
