document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactform');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault(); // 🚫 Stop form from redirecting

      const data = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
      };

      try {
        const res = await fetch('http://localhost:5000/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });

        const msg = await res.text();
        alert(msg);
        form.reset(); // Clear form after success
      } catch (err) {
        console.error('Error:', err);
        alert('Failed to submit. Please try again.');
      }
    });
  }
});
