// document.addEventListener('DOMContentLoaded', () => {
//   const form = document.getElementById('contactform');

//   if (form) {
//     form.addEventListener('submit', async (e) => {
//       e.preventDefault(); // 🚫 Stop form from redirecting

//       const data = {
//         name: document.getElementById('name').value,
//         email: document.getElementById('email').value,
//         subject: document.getElementById('subject').value,
//         message: document.getElementById('message').value,
//       };

//       try {
//         const res = await fetch('http://localhost:5000/contact', {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify(data),
//         });

//         const msg = await res.text();
//         alert(msg);
//         form.reset(); // Clear form after success
//       } catch (err) {
//         console.error('Error:', err);
//         alert('Failed to submit. Please try again.');
//       }
//     });
//   }
// });

// ==========================================
// UI Animations & Enhancements
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // 1. Scroll Reveal Animation for all main components
    const revealElements = document.querySelectorAll('section, .service-card, .project-card, .experience-card, .education-card, .skill');
    
    // Add base class to all matching elements initially
    revealElements.forEach(el => {
        el.classList.add('reveal');
    });

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.1, // Trigger when 10% visible
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // 2. Animate Skill Bars on Scroll
    const skillBars = document.querySelectorAll('.skill-bar-fill');
    
    const skillObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Save original width, set to 0, then restore to trigger CSS transition
                const targetWidth = entry.target.style.width || entry.target.getAttribute('data-width');
                
                if (targetWidth) {
                    entry.target.setAttribute('data-width', targetWidth);
                    entry.target.style.width = '0%';
                    
                    // Small delay to allow browser to register the 0% width before animating
                    setTimeout(() => {
                        entry.target.style.width = targetWidth;
                    }, 100);
                }
                
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });
});
