# 🌍 i18n Implementation Guide

This guide explains how internationalization (i18n) is implemented in the MediFinance landing page.

## Current Status

✅ **Implemented:**
- Spanish (es) - Default language at `/`
- English (en) - Available at `/en/`
- Infrastructure ready for Portuguese (pt) and Italian (it)

## Architecture

### Files Structure

```
src/
├── i18n/
│   ├── translations.ts    # All translations
│   └── utils.ts           # i18n helper functions
├── pages/
│   ├── index.astro        # Spanish (default)
│   └── en/
│       └── index.astro    # English
├── components/
│   └── LanguageSwitcher.astro  # Language selector
└── layouts/
    └── Layout.astro       # Multi-language support
```

### Configuration

**astro.config.mjs:**
```javascript
i18n: {
  defaultLocale: 'es',
  locales: ['es', 'en'],  // Add 'pt', 'it' when ready
  routing: {
    prefixDefaultLocale: false,  // Spanish at /, English at /en/
  },
}
```

## How It Works

### URL Structure

- Spanish (default): `https://medifinance.app/`
- English: `https://medifinance.app/en/`
- Portuguese (future): `https://medifinance.app/pt/`
- Italian (future): `https://medifinance.app/it/`

### Translations

All translations live in `src/i18n/translations.ts`:

```typescript
export const translations = {
  es: {
    siteTitle: 'MediFinance - Gestión Financiera...',
    hero: {
      title: 'Gestión Financiera Simple...',
      // ...
    },
  },
  en: {
    siteTitle: 'MediFinance - Financial Management...',
    hero: {
      title: 'Simple Financial Management...',
      // ...
    },
  },
  // Ready to add:
  // pt: { ... },
  // it: { ... },
};
```

### Using Translations

In any `.astro` file:

```astro
---
import { getTranslations } from '../i18n/translations';

const t = getTranslations('en');  // or 'es', 'pt', 'it'
---

<h1>{t.hero.title}</h1>
<p>{t.hero.subtitle}</p>
```

### SEO & hreflang

The Layout automatically generates hreflang tags:

```html
<link rel="alternate" hreflang="es" href="https://medifinance.app/" />
<link rel="alternate" hreflang="en" href="https://medifinance.app/en/" />
<link rel="alternate" hreflang="x-default" href="https://medifinance.app/" />
```

This tells Google:
- Serve Spanish to ALL Spanish speakers worldwide
- Serve English to ALL English speakers worldwide
- Default to Spanish for unknown languages

## Adding a New Language (Portuguese Example)

### Step 1: Update Config

**astro.config.mjs:**
```diff
  i18n: {
    defaultLocale: 'es',
-   locales: ['es', 'en'],
+   locales: ['es', 'en', 'pt'],
  },
```

### Step 2: Add Translations

**src/i18n/translations.ts:**
```typescript
export const translations = {
  es: { /* ... */ },
  en: { /* ... */ },
  pt: {
    siteTitle: 'MediFinance - Gestão Financeira para Profissionais de Saúde',
    siteDescription: 'Gerencie seus pacientes, sessões e renda de forma simples e segura...',
    hero: {
      title: 'Gestão Financeira Simples para Profissionais de Saúde',
      subtitle: 'Controle seus pacientes, sessões e receitas pela web e mobile...',
      cta: 'Começar Grátis',
    },
    // ... complete all translations
  },
};
```

### Step 3: Create Portuguese Page

Create `src/pages/pt/index.astro`:

```astro
---
import Layout from '../../layouts/Layout.astro';
import Hero from '../../components/Hero.astro';
// ... other imports
import { getTranslations } from '../../i18n/translations';

const t = getTranslations('pt');
---

<Layout
  title={t.siteTitle}
  description={t.siteDescription}
  lang="pt"
>
  <Hero lang="pt" />
  <Features lang="pt" />
  <!-- Use components with lang="pt" prop -->
</Layout>
```

### Step 4: Update Layout

**src/layouts/Layout.astro:** (already prepared)

Uncomment the Portuguese hreflang:
```diff
+ <link rel="alternate" hreflang="pt" href={alternateUrls.pt} />
```

### Step 5: Update Language Switcher

**src/components/LanguageSwitcher.astro:**

Uncomment Portuguese:
```diff
  const languages = [
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
+   { code: 'pt', name: 'Português', flag: '🇧🇷' },
  ];
```

### Step 6: Build & Test

```bash
npm run build
npm run preview
```

Visit:
- `http://localhost:4321/` (Spanish)
- `http://localhost:4321/en/` (English)
- `http://localhost:4321/pt/` (Portuguese)

## Making Components Translatable

Currently, most components have hardcoded Spanish text. To make them fully translatable:

### Example: Hero Component

**Before (Spanish only):**
```astro
<h1>Gestión Financiera Simple</h1>
```

**After (i18n ready):**
```astro
---
import { getTranslations } from '../i18n/translations';

interface Props {
  lang?: 'es' | 'en' | 'pt' | 'it';
}

const { lang = 'es' } = Astro.props;
const t = getTranslations(lang);
---

<h1>{t.hero.title}</h1>
<p>{t.hero.subtitle}</p>
<a href="https://app.medifinance.app">{t.hero.cta}</a>
```

## Translation Checklist

When adding a new language, translate ALL of these:

- [ ] `siteTitle` - Page title
- [ ] `siteDescription` - Meta description
- [ ] `nav.*` - Navigation links
- [ ] `hero.*` - Hero section
- [ ] `features.*` - Features section
- [ ] `pricing.*` - Pricing section
- [ ] `faq.*` - FAQ section
- [ ] `cta.*` - Call-to-action
- [ ] `footer.*` - Footer

## FAQ Components with i18n

The FAQ component needs special attention because it has 10 questions. You'll need to translate ALL questions and answers.

Example structure in `translations.ts`:

```typescript
faqItems: [
  {
    question: '¿Mis datos están seguros?',
    answer: 'Sí, absolutamente...',
  },
  // ... 9 more
],
```

## Best Practices

1. **Always provide default:** Use `lang = 'es'` as fallback
2. **Keep keys consistent:** Same keys across all languages
3. **Test all languages:** Build and preview each language
4. **Update sitemap:** Astro automatically includes all language versions
5. **Check hreflang:** Verify with Google Search Console

## Quick Reference

| Task | Command/File |
|------|-------------|
| Add language | `astro.config.mjs` → `locales` |
| Add translations | `src/i18n/translations.ts` |
| Create new page | `src/pages/{lang}/index.astro` |
| Get translations | `getTranslations('en')` |
| Language switcher | `<LanguageSwitcher />` |

## Current Components Status

| Component | i18n Ready? | Notes |
|-----------|-------------|-------|
| Layout | ✅ Yes | Fully supports all languages |
| LanguageSwitcher | ✅ Yes | Shows es/en (add pt/it when ready) |
| Hero | ⚠️ Partial | Needs lang prop implementation |
| Features | ⚠️ Partial | Needs lang prop implementation |
| Pricing | ⚠️ Partial | Needs lang prop implementation |
| FAQ | ⚠️ Partial | Needs lang prop + translation array |
| CTA | ⚠️ Partial | Needs lang prop implementation |
| Footer | ⚠️ Partial | Needs lang prop implementation |

## Next Steps

To fully complete i18n:

1. ✅ Infrastructure (Done!)
2. ⏳ Update each component to accept `lang` prop
3. ⏳ Use `getTranslations(lang)` in components
4. ⏳ Add Portuguese translations
5. ⏳ Add Italian translations
6. ⏳ Test all language versions thoroughly

---

**Ready to add Portuguese and Italian whenever you need!** 🇧🇷 🇮🇹
