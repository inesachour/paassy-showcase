/* ─────────────────────────────────────────────
   PAASSY — Shared Components
   Navbar & Footer HTML strings for injection
   Now with dynamic path support for folder organization
───────────────────────────────────────────── */

// Detect if we are in a subfolder (e.g., /pages/)
const isSubfolder = window.location.pathname.includes('/pages/');
const basePath = isSubfolder ? '../' : '';

const navbarHTML = `
  <nav id="navbar" class="navbar">
    <div class="nav-inner container">
      <a href="${basePath}index.html" class="nav-logo" id="nav-logo-link">
        <img src="${basePath}assets/logos/paassy.png" alt="Paassy Logo" class="nav-logo-img" />
        <span class="logo-text">Paassy</span>
        <span class="logo-dot"></span>
      </a>
      <ul class="nav-links" id="nav-links">
        <li><a href="${basePath}index.html#features" class="nav-link" data-i18n="nav_features">Fonctionnalités</a></li>
        <li><a href="${basePath}index.html#how-it-works" class="nav-link" data-i18n="nav_how">Comment ça marche</a></li>
        <li><a href="${basePath}index.html#pro" class="nav-link" data-i18n="nav_pro">Paassy Pro</a></li>
        <li><a href="${basePath}index.html#contact" class="nav-link" data-i18n="nav_contact">Contact</a></li>
        <li>
          <div class="dl-btn-container">
            <a href="${basePath}index.html#download" class="nav-link cta-nav" data-i18n="nav_download">Télécharger</a>
            <span class="badge-soon" data-i18n="dl_soon">Bientôt</span>
          </div>
        </li>
      </ul>
      <div class="nav-actions">
        <button class="lang-toggle" id="lang-toggle" aria-label="Changer la langue">FR</button>
        <button class="theme-toggle" id="theme-toggle" aria-label="Basculer le thème">
          <span class="theme-icon theme-icon--sun"><i data-lucide="sun"></i></span>
          <span class="theme-icon theme-icon--moon"><i data-lucide="moon"></i></span>
        </button>
        <button class="hamburger" id="hamburger" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </nav>
`;

const footerHTML = `
  <footer class="footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-brand">
          <div class="footer-logo">
            <img src="${basePath}assets/logos/paassy.png" alt="Paassy" class="footer-logo-img" />
            Paassy<span class="logo-dot"></span>
          </div>
          <p class="footer-tagline" data-i18n="footer_tagline">La billetterie événementielle tunisienne.</p>
          <div class="footer-socials">
            <a href="#" class="social-link" aria-label="Facebook"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></a>
            <a href="#" class="social-link" aria-label="Instagram"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg></a>
          </div>
        </div>
        <div class="footer-links-group">
          <h4 data-i18n="footer_app">Application</h4>
          <ul>
            <li><a href="${basePath}index.html#features" data-i18n="nav_features">Fonctionnalités</a></li>
            <li><a href="${basePath}index.html#how-it-works" data-i18n="nav_how">Comment ça marche</a></li>
            <li><a href="${basePath}index.html#download" data-i18n="nav_download">Télécharger</a></li>
          </ul>
        </div>
        <div class="footer-links-group">
          <h4 data-i18n="footer_pro">Professionnel</h4>
          <ul>
            <li><a href="${basePath}index.html#pro" data-i18n="nav_pro">Paassy Pro</a></li>
          </ul>
        </div>
        <div class="footer-links-group">
          <h4 data-i18n="footer_company">Entreprise</h4>
          <ul>
            <li><a href="${basePath}index.html#contact" data-i18n="nav_contact">Contact</a></li>
            <li><a href="${basePath}pages/privacy-policy.html" data-i18n="footer_privacy">Politique de confidentialité</a></li>
            <li><a href="${basePath}pages/terms-of-use.html" data-i18n="footer_terms">Conditions d'utilisation</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p data-i18n="footer_copyright">© 2025 Paassy. Tous droits réservés. Fait avec ❤️ en Tunisie.</p>
      </div>
    </div>
  </footer>
`;
