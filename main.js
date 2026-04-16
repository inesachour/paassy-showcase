/* ─────────────────────────────────────────────
   PAASSY — Site Vitrine · main.js
   Logic for Theme, Language, Filtering, Forms & Animations
───────────────────────────────────────────── */

const translations = {
  fr: {
    // Nav
    nav_features: "Fonctionnalités",
    nav_events: "Événements",
    nav_how: "Comment ça marche",
    nav_pro: "Paassy Pro",
    nav_contact: "Contact",
    nav_download: "Télécharger",
    // Hero
    hero_available: "Disponible en Tunisie",
    hero_title_1: "Vivez chaque",
    hero_title_2: "moment",
    hero_title_3: "à fond.",
    hero_subtitle: "Découvrez, réservez et profitez des meilleurs événements tunisiens — concerts, festivals, spectacles et plus encore — directement depuis votre smartphone.",
    // App Mockup
    app_ticket_conf: "Billet confirmé!",
    app_qr_gen: "QR Code généré",
    app_sec_pay: "Paiement sécurisé",
    app_via: "Via Clictopay",
    // Features Section
    feat_badge: "Fonctionnalités",
    feat_title_1: "Tout ce dont vous avez",
    feat_title_2: "besoin",
    feat_subtitle: "Une expérience complète de la découverte au billet en main, pensée pour la Tunisie.",
    feat_1_title: "Découverte intelligente",
    feat_1_desc: "Explorez les événements tendance, filtrez par catégorie, ville, date et fourchette de prix. Des sections dédiées par genre musical, théâtre, sport et plus.",
    feat_1_chip1: "Concerts",
    feat_1_chip2: "Festivals",
    feat_1_chip3: "Spectacles",
    feat_1_chip4: "Sport",
    feat_1_chip5: "Expositions",
    feat_2_title: "Lieux & Venues",
    feat_2_desc: "Explorez les salles et lieux phares de Tunisie et accédez directement à leur programmation complète.",
    feat_3_title: "Panier express",
    feat_3_desc: "Réservez vos places en quelques gestes. Votre panier est sécurisé pendant 10 minutes, le temps de confirmer votre paiement.",
    feat_4_title: "Paiement sécurisé",
    feat_4_desc: "Payez en toute confiance via Clictopay, la solution de paiement en ligne de référence en Tunisie.",
    feat_5_title: "Billets numériques QR",
    feat_5_desc: "Vos billets arrivent instantanément dans l'app sous forme de QR codes. Présentez-les à l'entrée, sans impression requise.",
    feat_6_title: "Mode sombre & clair",
    feat_6_desc: "Profitez d'une interface élégante adaptée à votre préférence — disponible en mode clair ou sombre.",
    feat_7_title: "Bilingue FR / EN",
    feat_7_desc: "Naviguez en français ou en anglais. L'application s'adapte automatiquement à votre langue préférée.",

    // How it works
    how_badge: "Simple & Rapide",
    how_title_1: "Réservez en",
    how_title_2: "3 étapes",
    how_subtitle: "De la découverte au billet, tout se fait en quelques secondes.",
    how_1_title: "Découvrez",
    how_1_desc: "Parcourez les événements par tendances ou catégories. Filtrez par ville, dates et budget pour trouver exactement ce que vous cherchez.",
    how_2_title: "Réservez",
    how_2_desc: "Choisissez vos places, ajoutez-les au panier et confirmez votre paiement sécurisé via Clictopay en quelques tapages.",
    how_3_title: "Profitez",
    how_3_desc: "Recevez vos billets QR instantanément dans l'app. Présentez-les à l'entrée et vivez l'événement pleinement.",
    // Pro
    pro_badge: "Pour les professionnels",
    pro_title_1: "Gérez vos événements",
    pro_title_2: "avec Paassy Pro",
    pro_subtitle: "Une application dédiée aux organisateurs d'événements et au personnel de contrôle pour une gestion complète, en temps réel.",
    pro_1_title: "Tableau de bord & Statistiques",
    pro_1_desc: "Suivez les ventes de billets, les revenus et l'affluence en temps réel depuis votre tableau de bord.",
    pro_2_title: "Gestion des événements",
    pro_2_desc: "Créez et gérez vos événements, définissez les catégories de places et contrôlez la disponibilité.",
    pro_3_title: "Scanner QR instantané",
    pro_3_desc: "Le personnel valide les billets en un scan. Détection immédiate des billets valides ou invalides.",
    pro_btn: "Devenir partenaire",
    pro_visual_stats: "Tableau de bord",
    pro_visual_revenue: "Ventes",
    pro_visual_active: "Check-in",
    pro_visual_scanner: "Scanner",
    // Download
    dl_badge: "Téléchargez maintenant",
    dl_title_1: "Prêt à vivre",
    dl_title_2: "l'expérience Paassy",
    dl_subtitle: "Rejoignez des milliers de Tunisiens qui découvrent et réservent leurs événements préférés avec Paassy. Gratuit, simple et sécurisé.",
    dl_btn_sub: "Disponible sur",
    dl_my_tickets: "Mes Billets",
    dl_cat_place: "Catégorie A · Place 24",
    // Contact
    contact_badge: "Contact",
    contact_title_1: "Parlons de votre",
    contact_title_2: "prochain événement",
    contact_subtitle: "Organisateur, partenaire ou simple curiosité — notre équipe est là pour vous répondre.",
    contact_label_email: "Email",
    contact_label_phone: "Téléphone",
    contact_label_address: "Adresse",
    contact_label_hours: "Heures d'ouverture",
    contact_val_hours: "Lun – Ven, 9h00 – 18h00",
    contact_form_name: "Nom complet",
    contact_form_email: "Email",
    contact_form_subject: "Sujet",
    contact_form_msg: "Message",
    contact_form_placeholder_name: "Votre nom",
    contact_form_placeholder_msg: "Décrivez votre demande…",
    contact_form_opt_default: "Choisissez un sujet…",
    contact_form_opt_1: "Devenir organisateur / partenaire",
    contact_form_opt_2: "Support technique",
    contact_form_opt_3: "Presse & médias",
    contact_form_opt_4: "Autre",
    contact_form_btn: "Envoyer le message",
    contact_form_success: "✅ Message envoyé ! Nous vous répondrons sous 24h.",
    // Footer
    footer_tagline: "La billetterie événementielle tunisienne.",
    footer_app: "Application",
    footer_pro: "Professionnel",
    footer_company: "Entreprise",
    footer_copyright: "© 2025 Paassy. Tous droits réservés. Fait avec ❤️ en Tunisie.",
    footer_privacy: "Politique de confidentialité",
    footer_terms: "Conditions d'utilisation"
  },
  en: {
    // Nav
    nav_features: "Features",
    nav_events: "Events",
    nav_how: "How it works",
    nav_pro: "Paassy Pro",
    nav_contact: "Contact",
    nav_download: "Download",
    // Hero
    hero_available: "Available in Tunisia",
    hero_title_1: "Live every",
    hero_title_2: "moment",
    hero_title_3: "to the fullest.",
    hero_subtitle: "Discover, book and enjoy the best Tunisian events — concerts, festivals, shows and more — directly from your smartphone.",
    // App Mockup
    app_carthage_tun: "Carthage, Tunisia",
    app_ticket_conf: "Ticket confirmed!",
    app_qr_gen: "QR Code generated",
    app_sec_pay: "Secure Payment",
    app_via: "Via Clictopay",
    // Features Section
    feat_badge: "Features",
    feat_title_1: "Everything you",
    feat_title_2: "need",
    feat_subtitle: "A complete experience from discovery to ticket in hand, designed for Tunisia.",
    feat_1_title: "Smart Discovery",
    feat_1_desc: "Explore trending events, filter by category, city, date and price range. Dedicated sections by music genre, theater, sport and more.",
    feat_1_chip1: "Concerts",
    feat_1_chip2: "Festivals",
    feat_1_chip3: "Shows",
    feat_1_chip4: "Sport",
    feat_1_chip5: "Exhibitions",
    feat_2_title: "Venues & Places",
    feat_2_desc: "Explore the main halls and venues in Tunisia and access their full program directly.",
    feat_3_title: "Express Cart",
    feat_3_desc: "Book your seats in a few steps. Your cart is secured for 10 minutes, giving you time to confirm your payment.",
    feat_4_title: "Secure Payment",
    feat_4_desc: "Pay with confidence via Clictopay, the reference online payment solution in Tunisia.",
    feat_5_title: "QR Digital Tickets",
    feat_5_desc: "Your tickets arrive instantly in the app as QR codes. Show them at the entrance, no printing required.",
    feat_6_title: "Dark & Light Mode",
    feat_6_desc: "Enjoy a sleek interface tailored to your preference — available in light or dark mode.",
    feat_7_title: "Bilingual FR / EN",
    feat_7_desc: "Navigate in French or English. The application automatically adapts to your preferred language.",

    // How it works
    how_badge: "Simple & Fast",
    how_title_1: "Book in",
    how_title_2: "3 steps",
    how_subtitle: "From discovery to ticket, everything is done in seconds.",
    how_1_title: "Discover",
    how_1_desc: "Browse events by trends or categories. Filter by city, dates and budget to find exactly what you're looking for.",
    how_2_title: "Book",
    how_2_desc: "Choose your seats, add them to the cart and confirm your secure payment via Clictopay in a few taps.",
    how_3_title: "Enjoy",
    how_3_desc: "Receive your QR tickets instantly in the app. Show them at the entrance and live the event fully.",
    // Pro
    pro_badge: "For professionals",
    pro_title_1: "Manage your events",
    pro_title_2: "with Paassy Pro",
    pro_subtitle: "A dedicated app for event organizers and control staff for complete, real-time management.",
    pro_1_title: "Dashboard & Statistics",
    pro_1_desc: "Track ticket sales, revenue and attendance in real time from your dashboard.",
    pro_2_title: "Event Management",
    pro_2_desc: "Create and manage your events, define seat categories and control availability.",
    pro_3_title: "Instant QR Scanner",
    pro_3_desc: "Staff validate tickets in one scan. Immediate detection of valid or invalid tickets.",
    pro_btn: "Become a partner",
    pro_visual_stats: "Dashboard",
    pro_visual_revenue: "Ticket Sales",
    pro_visual_active: "Check-in",
    pro_visual_scanner: "Scanner",
    // Download
    dl_badge: "Download now",
    dl_title_1: "Ready to live the",
    dl_title_2: "Paassy experience",
    dl_subtitle: "Join thousands of Tunisians discovering and booking their favorite events with Paassy. Free, simple and secure.",
    dl_btn_sub: "Available on",
    dl_my_tickets: "My Tickets",
    dl_cat_place: "Category A · Seat 24",
    // Contact
    contact_badge: "Contact",
    contact_title_1: "Let's talk about your",
    contact_title_2: "next event",
    contact_subtitle: "Organizer, partner or just curious — our team is here to answer you.",
    contact_label_email: "Email",
    contact_label_phone: "Phone",
    contact_label_address: "Address",
    contact_label_hours: "Opening hours",
    contact_val_hours: "Mon – Fri, 9:00 AM – 6:00 PM",
    contact_form_name: "Full Name",
    contact_form_email: "Email",
    contact_form_subject: "Subject",
    contact_form_msg: "Message",
    contact_form_placeholder_name: "Your name",
    contact_form_placeholder_msg: "Describe your request…",
    contact_form_opt_default: "Choose a subject…",
    contact_form_opt_1: "Become an organizer / partner",
    contact_form_opt_2: "Technical support",
    contact_form_opt_3: "Press & media",
    contact_form_opt_4: "Other",
    contact_form_btn: "Send Message",
    contact_form_success: "✅ Message sent! We will reply within 24 hours.",
    // Footer
    footer_tagline: "The Tunisian event ticketing system.",
    footer_app: "Application",
    footer_pro: "Professional",
    footer_company: "Company",
    footer_copyright: "© 2025 Paassy. All rights reserved. Made with ❤️ in Tunisia.",
    footer_privacy: "Privacy Policy",
    footer_terms: "Terms of Use"
  }
};

document.addEventListener('DOMContentLoaded', () => {

  /* ── 0. COMPONENT INJECTION ── */
  const navbarPlaceholder = document.getElementById('navbar-placeholder');
  const footerPlaceholder = document.getElementById('footer-placeholder');

  if (navbarPlaceholder && typeof navbarHTML !== 'undefined') {
    navbarPlaceholder.innerHTML = navbarHTML;
  }
  if (footerPlaceholder && typeof footerHTML !== 'undefined') {
    footerPlaceholder.innerHTML = footerHTML;
  }

  /* ── 1. THEME TOGGLE ── */
  const themeToggle = document.getElementById('theme-toggle');
  const htmlElement = document.documentElement;

  const currentTheme = localStorage.getItem('theme') || 'dark';
  htmlElement.setAttribute('data-theme', currentTheme);

  themeToggle.addEventListener('click', () => {
    const isDark = htmlElement.getAttribute('data-theme') === 'dark';
    const newTheme = isDark ? 'light' : 'dark';
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    // Swap Screenshots
    const discoverImg = document.getElementById('screenshot-discover');
    const detailsImg = document.getElementById('screenshot-details');
    if (discoverImg) discoverImg.src = `assets/screenshots/${newTheme}/discover_screen.png`;
    if (detailsImg) detailsImg.src = `assets/screenshots/${newTheme}/event_details_screen.png`;
  });

  // Init Screenshots
  const discoverImg = document.getElementById('screenshot-discover');
  const detailsImg = document.getElementById('screenshot-details');
  if (discoverImg) discoverImg.src = `assets/screenshots/${currentTheme}/discover_screen.png`;
  if (detailsImg) detailsImg.src = `assets/screenshots/${currentTheme}/event_details_screen.png`;


  /* ── 2. LANGUAGE SWITCHER ── */
  const langToggle = document.getElementById('lang-toggle');
  let currentLang = localStorage.getItem('lang') || 'fr';

  function updateLanguage(lang) {
    currentLang = lang;
    htmlElement.setAttribute('lang', lang);
    localStorage.setItem('lang', lang);

    // Update button text
    langToggle.textContent = lang.toUpperCase();

    // Update all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        // Use innerHTML only if needed, otherwise textContent for safety
        if (key.includes('title_') || key.includes('_desc') || key.includes('_text') || key.includes('notice') || key.includes('app_from')) {
          el.innerHTML = translations[lang][key];
        } else {
          el.textContent = translations[lang][key];
        }
      }
    });

    // Handle Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (translations[lang][key]) {
        el.placeholder = translations[lang][key];
      }
    });
  }

  langToggle.addEventListener('click', () => {
    updateLanguage(currentLang === 'fr' ? 'en' : 'fr');
  });

  // Init Language
  updateLanguage(currentLang);


  /* ── 3. NAVBAR SCROLL EFFECT ── */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 30);
  }, { passive: true });


  /* ── 4. MOBILE HAMBURGER ── */
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    const spans = hamburger.querySelectorAll('span');
    if (isOpen) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      spans[0].style.transform = '';
      spans[1].style.opacity = '1';
      spans[2].style.transform = '';
    }
  });





  /* ── 6. CONTACT FORM HANDLING ── */
  const contactForm = document.getElementById('contact-form');
  const formSuccess = document.getElementById('form-success');
  const submitBtn = document.getElementById('contact-submit');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const originalText = submitBtn.innerHTML;
      submitBtn.textContent = currentLang === 'fr' ? 'Envoi en cours...' : 'Sending...';
      submitBtn.disabled = true;

      setTimeout(() => {
        contactForm.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        formSuccess.classList.add('show');
        setTimeout(() => formSuccess.classList.remove('show'), 5000);
      }, 1500);
    });
  }


  /* ── 7. ANIMATED PARTICLES ── */
  const particleContainer = document.getElementById('particles');
  if (particleContainer) {
    const count = 40;
    for (let i = 0; i < count; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      const x = Math.random() * 100;
      const dur = 6 + Math.random() * 12;
      const dx = (Math.random() - 0.5) * 60;
      const del = Math.random() * 12;
      const sz = Math.random() > 0.7 ? 3 : 2;
      p.style.cssText = `left: ${x}%; --dur: ${dur}s; --dx: ${dx}px; animation-delay: -${del}s; width: ${sz}px; height: ${sz}px;`;
      particleContainer.appendChild(p);
    }
  }


  /* ── 8. AOS (Animate On Scroll) ── */
  const aosElements = document.querySelectorAll('[data-aos]');
  if (aosElements.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('aos-animate');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    aosElements.forEach(el => observer.observe(el));
  }


  /* ── 9. COUNTER ANIMATION ── */
  const counters = document.querySelectorAll('.stat-number[data-target]');
  if (counters.length) {
    const easeOut = (t) => 1 - Math.pow(1 - t, 3);
    const animateCounter = (el) => {
      const target = parseInt(el.getAttribute('data-target'), 10);
      const duration = 2000;
      let start = null;
      const step = (timestamp) => {
        if (!start) start = timestamp;
        const elapsed = timestamp - start;
        const progress = Math.min(elapsed / duration, 1);
        el.textContent = Math.floor(easeOut(progress) * target).toLocaleString(currentLang === 'fr' ? 'fr-FR' : 'en-US');
        if (progress < 1) requestAnimationFrame(step);
        else el.textContent = target.toLocaleString(currentLang === 'fr' ? 'fr-FR' : 'en-US');
      };
      requestAnimationFrame(step);
    };
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(el => counterObserver.observe(el));
  }


  /* ── 10. CARD TILT EFFECT (Desktop) ── */
  if (!window.matchMedia('(hover: none)').matches) {
    const tiltCards = document.querySelectorAll('.feature-card, .step-card, .ev-card, .privacy-card');
    tiltCards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -4;
        const rotateY = ((x - centerX) / centerX) * 4;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
        card.style.transition = 'none';
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
        card.style.transition = 'transform 0.5s ease';
      });
    });
  }

});
