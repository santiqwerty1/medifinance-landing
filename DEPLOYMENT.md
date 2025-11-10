# MediFinance Landing Page - Deployment Guide

## 🚀 Quick Start Deployment

### Prerequisites

1. Get an affordable domain name:
   - **Recommended registrars:**
     - [Namecheap](https://namecheap.com) - $8-15/year
     - [Porkbun](https://porkbun.com) - $8-12/year
     - [Cloudflare Registrar](https://www.cloudflare.com/products/registrar/) - At-cost pricing

   - **Domain suggestions:**
     - `medifinanceapp.com`
     - `medifinance.app` (.app domains start at ~$15/year)
     - `medi-finance.com`
     - `mffinance.com`
     - `gestor-medico.com` (Spanish market)

2. Choose a hosting platform (all have free tiers):
   - [Vercel](https://vercel.com) - **RECOMMENDED** (easiest)
   - [Netlify](https://netlify.com)
   - [Cloudflare Pages](https://pages.cloudflare.com)

---

## Option 1: Deploy to Vercel (Recommended) ⭐

### Why Vercel?
- Zero configuration
- Auto-detects Astro
- Free SSL certificates
- Global CDN
- Automatic deployments on git push
- Perfect for static sites

### Steps:

1. **Push code to GitHub**
   ```bash
   cd landing-page
   git init
   git add .
   git commit -m "Initial landing page"
   git branch -M main
   git remote add origin https://github.com/yourusername/medifinance-landing.git
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to https://vercel.com
   - Sign up with GitHub
   - Click "New Project"
   - Import your `medifinance-landing` repository
   - Vercel auto-detects Astro settings:
     - Framework Preset: Astro
     - Build Command: `npm run build`
     - Output Directory: `dist`
   - Click "Deploy"

3. **Add Custom Domain**
   - Project Settings → Domains
   - Add your domain (e.g., `medifinanceapp.com`)
   - Follow DNS configuration instructions
   - Vercel provides:
     - Automatic SSL certificate
     - www redirect (optional)

4. **Configure DNS** (at your registrar)
   ```
   Type  Name  Value
   A     @     76.76.21.21
   CNAME www   cname.vercel-dns.com
   ```

5. **Done!** 🎉
   - Your site is live at `https://medifinanceapp.com`
   - Auto-deploys on every git push

---

## Option 2: Deploy to Netlify

### Steps:

1. **Push to GitHub** (same as above)

2. **Deploy on Netlify**
   - Go to https://netlify.com
   - Sign up with GitHub
   - "Add new site" → "Import an existing project"
   - Connect to GitHub
   - Select your repository
   - Build settings:
     - Base directory: `landing-page`
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

3. **Add Custom Domain**
   - Site settings → Domain management
   - Add custom domain
   - Configure DNS:
     ```
     Type    Name  Value
     A       @     75.2.60.5
     CNAME   www   your-site.netlify.app
     ```

---

## Option 3: Deploy to Cloudflare Pages

### Steps:

1. **Push to GitHub**

2. **Deploy on Cloudflare Pages**
   - Go to https://dash.cloudflare.com
   - Pages → Create a project
   - Connect to GitHub
   - Select repository
   - Build settings:
     - Build command: `npm run build`
     - Build output directory: `dist`
   - Save and Deploy

3. **Add Custom Domain**
   - Project → Custom domains
   - Add domain
   - Follow DNS instructions

---

## Subdomain Setup

Once landing page is deployed, set up subdomain for the dashboard app:

### DNS Configuration

```
Landing page:  www.medifinanceapp.com  → Vercel (landing)
Dashboard app: app.medifinanceapp.com  → Vercel (current app)
```

### Steps:

1. **Add subdomain for dashboard** (in DNS):
   ```
   Type    Name  Value
   CNAME   app   cname.vercel-dns.com  # Point to your existing app
   ```

2. **Update dashboard Vercel project**:
   - Go to your existing MediFinance app in Vercel
   - Settings → Domains
   - Add `app.medifinanceapp.com`

3. **Update app URLs** in landing page:
   - Replace `https://app.medifinance.com` with `https://app.medifinanceapp.com`
   - Files to update:
     - `src/components/Hero.astro`
     - `src/components/Pricing.astro`
     - `src/components/CTA.astro`
     - `src/components/Footer.astro`

---

## Post-Deployment Checklist

### 1. Update URLs

- [ ] Update `site` in `astro.config.mjs`
- [ ] Update all CTAs to point to dashboard subdomain
- [ ] Update `robots.txt` with correct sitemap URL
- [ ] Update Open Graph images in Layout.astro

### 2. Add Screenshots

- [ ] Take screenshot of dashboard
- [ ] Save as `public/dashboard-screenshot.png`
- [ ] Update Hero.astro to use real image
- [ ] Create `public/og-image.png` (1200x630px)

### 3. SEO Optimization

- [ ] Install sitemap: `npm install @astrojs/sitemap`
- [ ] Add to `astro.config.mjs`:
  ```js
  import sitemap from '@astrojs/sitemap';
  export default defineConfig({
    site: 'https://medifinanceapp.com',
    integrations: [tailwind(), sitemap()],
  });
  ```
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools

### 4. Analytics

- [ ] Add Google Analytics (optional)
- [ ] Add Vercel Analytics (already included by default)
- [ ] Set up conversion tracking for "Start Free" button

### 5. Performance Testing

- [ ] Run Lighthouse audit (aim for 95+)
- [ ] Test on mobile devices
- [ ] Check load time (<2 seconds)
- [ ] Verify images are optimized

### 6. Legal Pages

Create these pages:
- [ ] `/legal/privacy` → Privacy Policy
- [ ] `/legal/terms` → Terms of Service
- [ ] `/legal/eula` → EULA

Copy from main app's `docs/` folder and convert to Astro pages.

---

## Cost Breakdown

### Cheapest Setup (Recommended for MVP):

| Service | Cost | Provider |
|---------|------|----------|
| Domain | $8-15/year | Namecheap/Porkbun |
| Landing Page Hosting | $0/month | Vercel Free |
| Dashboard Hosting | $0/month | Vercel Free |
| SSL Certificates | $0 | Included |
| **Total** | **~$10/year** | |

### If You Outgrow Free Tiers:

| Service | Cost |
|---------|------|
| Vercel Pro | $20/month (per member) |
| Custom email | $6/month (Google Workspace) |

---

## Domain Suggestions by Price

### Under $10/year:
- `.com` domains on sale
- `.app` domains (~$15/year, but looks professional)
- `.io` domains (if you target developers)

### Under $15/year:
- Most `.com` domains
- `.co` domains
- `.net` domains

### Avoid:
- Premium domains ($1000+)
- `.xyz` (looks unprofessional)
- `.biz` (outdated)

---

## Testing Before Domain Purchase

You can test the landing page using Vercel's free domain:

1. Deploy to Vercel (without custom domain)
2. You get: `medifinance-landing.vercel.app`
3. Test everything works
4. Share with beta users
5. Then buy domain when ready

---

## Monitoring & Maintenance

### After Launch:

1. **Monitor traffic**:
   - Vercel Analytics (free)
   - Google Analytics (optional)

2. **Track conversions**:
   - How many click "Start Free"?
   - Where do users drop off?

3. **A/B testing**:
   - Test different headlines
   - Test different CTA button text
   - Test pricing display

4. **Regular updates**:
   - Update screenshots as app evolves
   - Add testimonials when you get them
   - Update pricing if it changes

---

## Troubleshooting

### Build Fails on Vercel

```bash
# Locally test production build
npm run build

# Check for errors
# Fix any TypeScript/Astro errors
```

### DNS Not Propagating

- Wait 24-48 hours
- Use https://dnschecker.org to check
- Clear browser cache
- Try incognito mode

### SSL Certificate Issues

- Vercel auto-generates SSL (wait 5-10 min)
- Ensure DNS is correct
- Contact Vercel support if >24h

---

## Next Steps After Deployment

1. **Submit to directories**:
   - Product Hunt
   - BetaList
   - Indie Hackers

2. **Share on social media**:
   - Twitter/X with screenshots
   - LinkedIn for professional network
   - Facebook groups for therapists

3. **SEO improvements**:
   - Start a blog (Astro supports MDX)
   - Create content: "How therapists manage finances"
   - Build backlinks

4. **Collect testimonials**:
   - Ask beta users for feedback
   - Add to landing page
   - Use in marketing

---

**Good luck with your launch! 🚀**
