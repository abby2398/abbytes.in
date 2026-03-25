// NAV SCROLL
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', window.scrollY > 10), { passive: true });

// HAMBURGER
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
if (hamburger) {
  hamburger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
  document.querySelectorAll('.mobile-link').forEach(l => l.addEventListener('click', () => mobileMenu.classList.remove('open')));
}

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if (t) { e.preventDefault(); window.scrollTo({ top: t.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' }); }
  });
});

// FADE IN ON SCROLL
const fadeObserver = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); fadeObserver.unobserve(e.target); } });
}, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

document.querySelectorAll('.service-card, .project-card, .blog-card, .lab-card, .section-header, .about-content, .about-skills, .contact-info, .contact-form, .stat-flat').forEach((el, i) => {
  el.classList.add('fade-in');
  el.style.transitionDelay = `${(i % 5) * 55}ms`;
  fadeObserver.observe(el);
});


// ACTIVE NAV HIGHLIGHT
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const id = e.target.getAttribute('id');
      navLinks.forEach(l => { l.style.color = l.getAttribute('href') === `#${id}` ? 'var(--text)' : ''; });
    }
  });
}, { threshold: 0.35 });
sections.forEach(s => sectionObserver.observe(s));

// CONTACT FORM
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const isDemo = form.action.includes('YOUR_FORM_ID');
    if (isDemo) {
      btn.textContent = 'Message Sent ✓';
      btn.style.background = '#16a34a';
      setTimeout(() => { btn.textContent = 'Send Message'; btn.style.background = ''; form.reset(); }, 3000);
      return;
    }
    btn.textContent = 'Sending...'; btn.disabled = true;
    try {
      const res = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
      if (res.ok) {
        btn.textContent = 'Message Sent ✓'; btn.style.background = '#16a34a'; form.reset();
        setTimeout(() => { btn.textContent = 'Send Message'; btn.style.background = ''; btn.disabled = false; }, 4000);
      } else throw new Error();
    } catch {
      btn.textContent = 'Error — Try Again'; btn.style.background = '#dc2626'; btn.disabled = false;
      setTimeout(() => { btn.textContent = 'Send Message'; btn.style.background = ''; }, 3000);
    }
  });
}
