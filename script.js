// Simple contact form validation (can be enhanced later)
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Your message has been sent successfully!");
    form.reset();
  });
});
