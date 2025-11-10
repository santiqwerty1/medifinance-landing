// i18n translations for MediFinance Landing Page
// Easy to extend: Add 'pt' and 'it' keys when ready

export const translations = {
  es: {
    // Meta
    siteTitle: 'MediFinance - Gestión Financiera para Profesionales de la Salud',
    siteDescription: 'Gestiona tus pacientes, sesiones e ingresos de forma simple y segura. Precios justos adaptados a tu país. Plan gratuito disponible para siempre.',

    // Navigation
    nav: {
      features: 'Características',
      pricing: 'Precios',
      faq: 'FAQ',
    },

    // Hero
    hero: {
      title: 'Gestión Financiera Simple para Profesionales de la Salud',
      subtitle: 'Controla tus pacientes, sesiones e ingresos desde web y móvil. Gratis para siempre hasta 20 pacientes.',
      cta: 'Comenzar Gratis',
      ctaSecondary: 'Ver Demo',
    },

    // Features
    features: {
      title: 'Todo lo que necesitas en un solo lugar',
      subtitle: 'Herramientas profesionales diseñadas para terapeutas, psicólogos y profesionales de la salud',
    },

    // Pricing
    pricing: {
      title: 'Precios justos para todos',
      subtitle: 'Precios adaptados a tu país con Purchasing Power Parity (PPP). Argentina paga en ARS, España en EUR, USA en USD. Justo para todos.',
      note: 'Disponible en Argentina, México, España, USA y más de 30 países',
      paymentNote: 'Pagos seguros con Mercado Pago (Argentina, LatAm) y Stripe (Global). Cancela cuando quieras. Sin permanencia ni contratos.',
    },

    // FAQ
    faq: {
      title: 'Preguntas Frecuentes',
      subtitle: '¿Tienes dudas? Aquí están las respuestas',
      moreQuestions: '¿Tienes más preguntas?',
      moreQuestionsText: 'Estamos aquí para ayudarte',
      contact: 'Contáctanos',
    },

    // CTA
    cta: {
      title: '¿Listo para simplificar tu gestión financiera?',
      subtitle: 'Únete a cientos de profesionales que ya confían en MediFinance',
      button: 'Comenzar Ahora - Es Gratis',
    },

    // Footer
    footer: {
      description: 'Gestión financiera simple y segura para profesionales de la salud',
      product: 'Producto',
      features: 'Características',
      pricing: 'Precios',
      faq: 'FAQ',
      legal: 'Legal',
      privacy: 'Privacidad',
      terms: 'Términos',
      support: 'Soporte',
      docs: 'Documentación',
      contact: 'Contacto',
      rights: 'Todos los derechos reservados.',
    },
  },

  en: {
    // Meta
    siteTitle: 'MediFinance - Financial Management for Healthcare Professionals',
    siteDescription: 'Manage your patients, sessions, and income simply and securely. Fair pricing adapted to your country. Free plan available forever.',

    // Navigation
    nav: {
      features: 'Features',
      pricing: 'Pricing',
      faq: 'FAQ',
    },

    // Hero
    hero: {
      title: 'Simple Financial Management for Healthcare Professionals',
      subtitle: 'Manage your patients, sessions, and income from web and mobile. Free forever for up to 20 patients.',
      cta: 'Start Free',
      ctaSecondary: 'View Demo',
    },

    // Features
    features: {
      title: 'Everything you need in one place',
      subtitle: 'Professional tools designed for therapists, psychologists, and healthcare professionals',
    },

    // Pricing
    pricing: {
      title: 'Fair pricing for everyone',
      subtitle: 'Pricing adapted to your country with Purchasing Power Parity (PPP). Argentina pays in ARS, Spain in EUR, USA in USD. Fair for everyone.',
      note: 'Available in Argentina, Mexico, Spain, USA, and 30+ countries',
      paymentNote: 'Secure payments with Mercado Pago (Argentina, LatAm) and Stripe (Global). Cancel anytime. No contracts or commitments.',
    },

    // FAQ
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Have questions? Here are the answers',
      moreQuestions: 'Have more questions?',
      moreQuestionsText: 'We\'re here to help',
      contact: 'Contact Us',
    },

    // CTA
    cta: {
      title: 'Ready to simplify your financial management?',
      subtitle: 'Join hundreds of professionals who already trust MediFinance',
      button: 'Get Started - It\'s Free',
    },

    // Footer
    footer: {
      description: 'Simple and secure financial management for healthcare professionals',
      product: 'Product',
      features: 'Features',
      pricing: 'Pricing',
      faq: 'FAQ',
      legal: 'Legal',
      privacy: 'Privacy',
      terms: 'Terms',
      support: 'Support',
      docs: 'Documentation',
      contact: 'Contact',
      rights: 'All rights reserved.',
    },
  },

  // Ready to add later:
  // pt: { ... },  // Portuguese
  // it: { ... },  // Italian
} as const;

export type Language = keyof typeof translations;
export type TranslationKeys = typeof translations.es;

export function getTranslations(lang: Language = 'es') {
  return translations[lang] || translations.es;
}
