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
      items: [
        {
          icon: '📊',
          title: 'Panel de Control en Tiempo Real',
          description: 'Visualiza tus ingresos mensuales, pacientes activos y sesiones con gráficos interactivos actualizados al instante.',
        },
        {
          icon: '👥',
          title: 'Gestión Completa de Pacientes',
          description: 'Organiza toda la información de tus pacientes: datos de contacto, historial de sesiones y notas privadas en un solo lugar.',
        },
        {
          icon: '💰',
          title: 'Seguimiento de Ingresos',
          description: 'Registra pagos en efectivo, transferencia o tarjeta. Exporta reportes mensuales en CSV para tu contador.',
        },
        {
          icon: '📱',
          title: 'Acceso Móvil Nativo',
          description: 'App Android disponible. Trabaja desde tu celular, tablet o computadora. Tus datos siempre sincronizados.',
        },
        {
          icon: '🔄',
          title: 'Sincronización Multi-Dispositivo',
          description: 'Actualización instantánea en todos tus dispositivos. Firestore real-time mantiene todo sincronizado automáticamente.',
        },
        {
          icon: '🌐',
          title: 'Soporte Bilingüe (ES/EN)',
          description: 'Interfaz en español e inglés. Perfecto para profesionales que atienden pacientes internacionales.',
        },
        {
          icon: '🔒',
          title: 'Seguridad y Privacidad',
          description: 'Autenticación segura con Firebase. Tus datos están encriptados y protegidos con estándares enterprise.',
        },
        {
          icon: '☁️',
          title: 'Backup Automático',
          description: 'Nunca pierdas información. Exporta e importa backups en JSON. Tus datos siempre seguros en la nube.',
        },
        {
          icon: '🎨',
          title: 'Modo Oscuro',
          description: 'Trabaja de noche sin cansar la vista. Alterna entre tema claro y oscuro con un solo clic.',
        },
      ],
    },

    // Pricing
    pricing: {
      title: 'Precios justos para todos',
      subtitle: 'Precios adaptados a tu país con Purchasing Power Parity (PPP). Argentina paga en ARS, España en EUR, USA en USD. Justo para todos.',
      note: 'Disponible en Argentina, México, España, USA y más de 30 países',
      paymentNote: 'Pagos seguros con Mercado Pago (Argentina, LatAm) y Stripe (Global). Cancela cuando quieras. Sin permanencia ni contratos.',
      plans: {
        free: {
          name: 'Free',
          period: 'gratis para siempre',
          description: 'Perfecto para comenzar',
          badge: '🚀 Comienza Aquí',
          cta: 'Comenzar Gratis',
          features: [
            'Hasta 20 pacientes',
            'Sesiones ilimitadas',
            'Exportar último mes',
            'Sincronización en tiempo real',
            'Web + App Android',
            'Soporte por email',
          ],
        },
        pro: {
          name: 'Pro',
          period: '/mes',
          priceNote: 'Desde $2.99/mes según tu país',
          description: 'Para profesionales en crecimiento',
          badge: '⭐ Más Popular',
          cta: 'Actualizar a Pro',
          features: [
            '✨ Pacientes ilimitados',
            '✨ Historial completo',
            '✨ Exportar todo',
            'Recordatorios WhatsApp (próximamente)',
            'PDF comprobantes (próximamente)',
            'Paquetes prepagos (próximamente)',
            'Soporte prioritario 24-48h',
          ],
        },
        business: {
          name: 'Business',
          period: '/mes',
          priceNote: 'Desde $5.99/mes según tu país',
          description: 'Para equipos y consultorios',
          badge: '🏢 Equipos',
          cta: 'Actualizar a Business',
          features: [
            '✨ Todo lo de Pro +',
            '👥 Hasta 5 usuarios',
            'Analíticas avanzadas (próximamente)',
            'Agenda citas (próximamente)',
            'Links de pago Mercado Pago (próximamente)',
            'Reportes sin marca',
            'Soporte prioritario 4h',
            'API access (próximamente)',
          ],
        },
      },
    },

    // FAQ
    faq: {
      title: 'Preguntas Frecuentes',
      subtitle: '¿Tienes dudas? Aquí están las respuestas',
      moreQuestions: '¿Tienes más preguntas?',
      moreQuestionsText: 'Estamos aquí para ayudarte',
      contact: 'Contáctanos',
      items: [
        {
          question: '¿Mis datos están seguros?',
          answer: 'Sí, absolutamente. Usamos Firebase Authentication y Firestore con encriptación enterprise. Tus datos están protegidos con los mismos estándares de seguridad que usan bancos y grandes empresas. Además, puedes exportar backups en cualquier momento.',
        },
        {
          question: '¿Funciona en mi celular?',
          answer: 'Sí! Tenemos app nativa para Android disponible para descargar. También funciona perfectamente desde el navegador de tu celular (iOS o Android). Todos tus datos se sincronizan automáticamente entre dispositivos.',
        },
        {
          question: '¿Cómo empiezo a usar MediFinance?',
          answer: 'Es súper simple: 1) Crea tu cuenta gratis (no necesitas tarjeta), 2) Agrega tus pacientes, 3) Registra las sesiones. ¡Listo! En menos de 5 minutos estarás gestionando tus finanzas profesionalmente.',
        },
        {
          question: '¿Cuánto cuesta realmente?',
          answer: 'El plan Free es gratis para siempre (hasta 20 pacientes). Pro cuesta desde $2.99/mes y Business desde $5.99/mes, dependiendo de tu país. Usamos precios justos adaptados al poder adquisitivo de cada región (PPP). Argentina paga en pesos argentinos, no en dólares.',
        },
        {
          question: '¿Puedo exportar mis datos?',
          answer: 'Sí! Puedes exportar tus pacientes y sesiones en formato CSV para enviar a tu contador. También puedes crear backups completos en JSON. En el plan Free puedes exportar el último mes, en Pro y Business todo el historial.',
        },
        {
          question: '¿Necesito instalar algo?',
          answer: 'No es necesario. La versión web funciona desde cualquier navegador (Chrome, Firefox, Safari, Edge). Si quieres la app Android, puedes descargarla. Ambas versiones se sincronizan automáticamente.',
        },
        {
          question: '¿Qué pasa si me quedo sin internet?',
          answer: 'La app continúa funcionando en modo offline. Puedes consultar tus datos (modo lectura). Cuando vuelvas a tener conexión, todo se sincronizará automáticamente.',
        },
        {
          question: '¿Puedo cambiar de plan después?',
          answer: 'Sí, puedes actualizar o bajar de plan cuando quieras. Si bajas de Pro a Free y tienes más de 20 pacientes, seguirás viendo todos tus datos pero no podrás agregar más pacientes hasta que estés por debajo del límite.',
        },
        {
          question: '¿Sirve para mi especialidad?',
          answer: 'MediFinance está diseñado para cualquier profesional de la salud que trabaje por sesiones: psicólogos, terapeutas, nutricionistas, fisioterapeutas, coaches, fonoaudiólogos, terapeutas ocupacionales, etc. Si cobras por sesión, te sirve.',
        },
        {
          question: '¿Cuándo llegan los recordatorios de WhatsApp y PDFs?',
          answer: 'Estas funciones están en desarrollo activo para el plan Pro. Suscribiéndote ahora al precio de lanzamiento, las tendrás incluidas cuando se liberen (próximos meses). El precio no aumentará para usuarios existentes.',
        },
      ],
    },

    // CTA
    cta: {
      title: '¿Listo para simplificar tu gestión financiera?',
      subtitle: 'Únete a cientos de profesionales que ya confían en MediFinance',
      button: 'Comenzar Ahora - Es Gratis',
    },

    // Footer
    footer: {
      description: 'Gestión financiera simple y profesional para terapeutas, psicólogos, nutricionistas y otros profesionales de la salud independientes.',
      product: 'Producto',
      features: 'Características',
      pricing: 'Precios',
      faq: 'FAQ',
      login: 'Iniciar Sesión',
      legal: 'Legal',
      privacy: 'Privacidad',
      terms: 'Términos',
      eula: 'EULA',
      support: 'Soporte',
      rights: 'Todos los derechos reservados.',
      madeWith: 'Hecho con ❤️ para profesionales de la salud',
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
      items: [
        {
          icon: '📊',
          title: 'Real-Time Dashboard',
          description: 'Visualize your monthly income, active patients, and sessions with interactive graphs updated instantly.',
        },
        {
          icon: '👥',
          title: 'Complete Patient Management',
          description: 'Organize all your patient information: contact details, session history, and private notes in one place.',
        },
        {
          icon: '💰',
          title: 'Income Tracking',
          description: 'Record cash, transfer, or card payments. Export monthly reports in CSV for your accountant.',
        },
        {
          icon: '📱',
          title: 'Native Mobile Access',
          description: 'Android app available. Work from your phone, tablet, or computer. Your data always synced.',
        },
        {
          icon: '🔄',
          title: 'Multi-Device Sync',
          description: 'Instant updates across all your devices. Firestore real-time keeps everything synced automatically.',
        },
        {
          icon: '🌐',
          title: 'Bilingual Support (ES/EN)',
          description: 'Interface in Spanish and English. Perfect for professionals serving international patients.',
        },
        {
          icon: '🔒',
          title: 'Security and Privacy',
          description: 'Secure authentication with Firebase. Your data is encrypted and protected with enterprise standards.',
        },
        {
          icon: '☁️',
          title: 'Automatic Backup',
          description: 'Never lose information. Export and import backups in JSON. Your data always safe in the cloud.',
        },
        {
          icon: '🎨',
          title: 'Dark Mode',
          description: 'Work at night without eye strain. Toggle between light and dark theme with one click.',
        },
      ],
    },

    // Pricing
    pricing: {
      title: 'Fair pricing for everyone',
      subtitle: 'Pricing adapted to your country with Purchasing Power Parity (PPP). Argentina pays in ARS, Spain in EUR, USA in USD. Fair for everyone.',
      note: 'Available in Argentina, Mexico, Spain, USA, and 30+ countries',
      paymentNote: 'Secure payments with Mercado Pago (Argentina, LatAm) and Stripe (Global). Cancel anytime. No contracts or commitments.',
      plans: {
        free: {
          name: 'Free',
          period: 'free forever',
          description: 'Perfect to get started',
          badge: '🚀 Start Here',
          cta: 'Start Free',
          features: [
            'Up to 20 patients',
            'Unlimited sessions',
            'Export last month',
            'Real-time sync',
            'Web + Android App',
            'Email support',
          ],
        },
        pro: {
          name: 'Pro',
          period: '/month',
          priceNote: 'From $2.99/month based on your country',
          description: 'For growing professionals',
          badge: '⭐ Most Popular',
          cta: 'Upgrade to Pro',
          features: [
            '✨ Unlimited patients',
            '✨ Complete history',
            '✨ Export everything',
            'WhatsApp reminders (coming soon)',
            'PDF receipts (coming soon)',
            'Prepaid packages (coming soon)',
            'Priority support 24-48h',
          ],
        },
        business: {
          name: 'Business',
          period: '/month',
          priceNote: 'From $5.99/month based on your country',
          description: 'For teams and clinics',
          badge: '🏢 Teams',
          cta: 'Upgrade to Business',
          features: [
            '✨ Everything in Pro +',
            '👥 Up to 5 users',
            'Advanced analytics (coming soon)',
            'Appointment scheduling (coming soon)',
            'Mercado Pago payment links (coming soon)',
            'White-label reports',
            'Priority support 4h',
            'API access (coming soon)',
          ],
        },
      },
    },

    // FAQ
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Have questions? Here are the answers',
      moreQuestions: 'Have more questions?',
      moreQuestionsText: 'We\'re here to help',
      contact: 'Contact Us',
      items: [
        {
          question: 'Is my data secure?',
          answer: 'Yes, absolutely. We use Firebase Authentication and Firestore with enterprise encryption. Your data is protected with the same security standards used by banks and large corporations. Additionally, you can export backups at any time.',
        },
        {
          question: 'Does it work on my phone?',
          answer: 'Yes! We have a native Android app available for download. It also works perfectly from your phone\'s browser (iOS or Android). All your data syncs automatically across devices.',
        },
        {
          question: 'How do I start using MediFinance?',
          answer: 'It\'s super simple: 1) Create your free account (no credit card needed), 2) Add your patients, 3) Record sessions. Done! In less than 5 minutes you\'ll be managing your finances professionally.',
        },
        {
          question: 'How much does it really cost?',
          answer: 'The Free plan is free forever (up to 20 patients). Pro costs from $2.99/month and Business from $5.99/month, depending on your country. We use fair pricing adapted to each region\'s purchasing power (PPP). Argentina pays in Argentine pesos, not dollars.',
        },
        {
          question: 'Can I export my data?',
          answer: 'Yes! You can export your patients and sessions in CSV format to send to your accountant. You can also create complete backups in JSON. In the Free plan you can export the last month, in Pro and Business the entire history.',
        },
        {
          question: 'Do I need to install anything?',
          answer: 'Not necessary. The web version works from any browser (Chrome, Firefox, Safari, Edge). If you want the Android app, you can download it. Both versions sync automatically.',
        },
        {
          question: 'What happens if I lose internet?',
          answer: 'The app continues working in offline mode. You can view your data (read-only mode). When you reconnect, everything syncs automatically.',
        },
        {
          question: 'Can I change plans later?',
          answer: 'Yes, you can upgrade or downgrade anytime. If you downgrade from Pro to Free and have more than 20 patients, you\'ll still see all your data but can\'t add more patients until you\'re below the limit.',
        },
        {
          question: 'Does it work for my specialty?',
          answer: 'MediFinance is designed for any healthcare professional who works by sessions: psychologists, therapists, nutritionists, physiotherapists, coaches, speech therapists, occupational therapists, etc. If you charge per session, it works for you.',
        },
        {
          question: 'When are WhatsApp reminders and PDFs coming?',
          answer: 'These features are in active development for the Pro plan. By subscribing now at launch pricing, you\'ll have them included when released (next few months). The price won\'t increase for existing users.',
        },
      ],
    },

    // CTA
    cta: {
      title: 'Ready to simplify your financial management?',
      subtitle: 'Join hundreds of professionals who already trust MediFinance',
      button: 'Get Started - It\'s Free',
    },

    // Footer
    footer: {
      description: 'Simple and professional financial management for therapists, psychologists, nutritionists and other independent healthcare professionals.',
      product: 'Product',
      features: 'Features',
      pricing: 'Pricing',
      faq: 'FAQ',
      login: 'Sign In',
      legal: 'Legal',
      privacy: 'Privacy',
      terms: 'Terms',
      eula: 'EULA',
      support: 'Support',
      rights: 'All rights reserved.',
      madeWith: 'Made with ❤️ for healthcare professionals',
    },
  },

  // Ready to add later:
  // pt: { ... },  // Portuguese
  // it: { ... },  // Italian
} as const;

export type Language = 'es' | 'en' | 'pt' | 'it';
export type TranslationKeys = typeof translations.es;

export function getTranslations(lang: Language = 'es') {
  return translations[lang as keyof typeof translations] || translations.es;
}
