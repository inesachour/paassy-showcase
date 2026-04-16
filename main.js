/* ─────────────────────────────────────────────
   PAASSY — Site Vitrine · main.js
   Logic for Theme, Filtering, Forms & Animations
───────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {

  /* ── 1. THEME TOGGLE ── */
  const themeToggle = document.getElementById('theme-toggle');
  const htmlElement = document.documentElement;

  // Initialize theme from localStorage
  const currentTheme = localStorage.getItem('theme') || 'dark';
  htmlElement.setAttribute('data-theme', currentTheme);

  themeToggle.addEventListener('click', () => {
    const isDark = htmlElement.getAttribute('data-theme') === 'dark';
    const newTheme = isDark ? 'light' : 'dark';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Optional: Visual feedback for the toggle button
    themeToggle.style.transform = 'scale(0.9) rotate(20deg)';
    setTimeout(() => { themeToggle.style.transform = ''; }, 150);
  });


  /* ── 2. NAVBAR SCROLL EFFECT ── */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 30);
  }, { passive: true });


  /* ── 3. MOBILE HAMBURGER ── */
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('nav-links');
  
  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    const spans = hamburger.querySelectorAll('span');
    
    if (isOpen) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity   = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      spans[0].style.transform = '';
      spans[1].style.opacity   = '1';
      spans[2].style.transform = '';
    }
  });

  // Close on nav link click
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.querySelectorAll('span').forEach(s => { 
        s.style.transform = ''; 
        s.style.opacity = ''; 
      });
    });
  });


  /* ── 4. EVENT FILTERING ── */
  const tabs = document.querySelectorAll('.event-tab');
  const cards = document.querySelectorAll('.ev-card');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const filter = tab.getAttribute('data-tab');

      // Update active tab
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Filter cards
      cards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.classList.remove('hidden');
          // Trigger AOS-like animation for reappearing cards
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });


  /* ── 5. CONTACT FORM HANDLING ── */
  const contactForm = document.getElementById('contact-form');
  const formSuccess = document.getElementById('form-success');
  const submitBtn   = document.getElementById('contact-submit');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Visual feedback for submission
      submitBtn.innerHTML = 'Envoi en cours...';
      submitBtn.disabled = true;

      // Simulate API call
      setTimeout(() => {
        contactForm.reset();
        submitBtn.innerHTML = 'Envoyer le message <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>';
        submitBtn.disabled = false;
        
        formSuccess.classList.add('show');
        setTimeout(() => {
          formSuccess.classList.remove('show');
        }, 5000);
      }, 1500);
    });
  }


  /* ── 6. ANIMATED PARTICLES ── */
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
      
      p.style.cssText = `
        left: ${x}%;
        --dur: ${dur}s;
        --dx: ${dx}px;
        animation-delay: -${del}s;
        width: ${sz}px; height: ${sz}px;
      `;
      particleContainer.appendChild(p);
    }
  }


  /* ── 7. AOS (Animate On Scroll) ── */
  const aosElements = document.querySelectorAll('[data-aos]');
  if (aosElements.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('aos-animate');
          // Only unobserve if we don't want to re-animate on scroll back
          // observer.unobserve(entry.target); 
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    aosElements.forEach(el => observer.observe(el));
  }


  /* ── 8. COUNTER ANIMATION ── */
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
        el.textContent = Math.floor(easeOut(progress) * target).toLocaleString('fr-FR');
        if (progress < 1) requestAnimationFrame(step);
        else el.textContent = target.toLocaleString('fr-FR');
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


  /* ── 9. CURSOR GLOW (Desktop Only) ── */
  if (!window.matchMedia('(hover: none)').matches) {
    const glow = document.createElement('div');
    glow.style.cssText = `
      position: fixed; width: 400px; height: 400px; border-radius: 50%;
      background: radial-gradient(circle, rgba(91,19,236,0.06) 0%, transparent 70%);
      pointer-events: none; z-index: 0; top: 0; left: 0;
      transform: translate(-50%, -50%);
      transition: transform 0.15s cubic-bezier(0.2, 0.49, 0.32, 0.99);
    `;
    document.body.appendChild(glow);

    window.addEventListener('mousemove', (e) => {
      glow.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`;
    }, { passive: true });
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
