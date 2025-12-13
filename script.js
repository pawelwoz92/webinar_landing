'use strict';

/* ==========================================================================
   ClientFlow Live — Portfolio Landing (demo)
   Refactor: no dead code, no ellipses, safe guards, small + readable
   ========================================================================== */

const $ = (sel, root = document) => root.querySelector(sel);

function setYear() {
  const year = $('#year');
  if (year) year.textContent = String(new Date().getFullYear());
}

function bindBuyAlert() {
  const btn = $('#buyBtn');
  if (!btn) return;
  btn.addEventListener('click', () => {
    alert('Demo only 🚧\nHere you\'d go to Shopify / checkout.');
  });
}



function bindDemoForms() {
  const forms = ['#signupForm', '#contactForm']
    .map((id) => $(id))
    .filter(Boolean);

  forms.forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert(
        'Demo only 🚧\nForm would be connected to an email service (e.g., Formspree / Netlify Forms).'
      );
    });
  });
}

function bindScrollToTop() {
  const toTop = $('#toTop');
  if (!toTop) return;

  const toggle = () => {
    // On mobile we hide via CSS; JS keeps desktop behavior.
    toTop.style.display = window.scrollY > 600 ? 'grid' : 'none';
  };

  window.addEventListener('scroll', toggle, { passive: true });
  toggle();

  toTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

setYear();
bindBuyAlert();
bindDemoForms();
bindScrollToTop();
