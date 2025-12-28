// script.js - small interactivity
document.getElementById('year').textContent = new Date().getFullYear();

// Toggle mobile nav (basic)
const menuToggle = document.getElementById('menu-toggle');
menuToggle && menuToggle.addEventListener('click', () => {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  if (nav.style.display === 'block') nav.style.display = '';
  else nav.style.display = 'block';
});

// Simple form submission feedback (if using Formspree this will still redirect)
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    // Let default action occur (Formspree / other service). Show quick toast:
    setTimeout(() => alert('Thanks — your message is being sent!'), 50);
  });
}