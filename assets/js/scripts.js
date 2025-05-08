// scripts.js
(function() {
  // Inject CSS dynamically
  const style = document.createElement('style');
  style.type = 'text/css';
  style.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
    
    :root {
      --color-bg: #f0f4f8;
      --color-panel: #ffffff;
      --color-primary: #2563eb;
      --color-accent: #f97316;
      --color-text: #1f2937;
      --color-muted: #64748b;
      --transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      --radius: 12px;
      --font-sans: 'Inter', sans-serif;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: var(--font-sans);
      background: var(--color-bg);
      color: var(--color-text);
      line-height: 1.6;
      scroll-behavior: smooth;
    }

    a {
      color: var(--color-primary);
      text-decoration: none;
      transition: color var(--transition);
    }

    a:hover {
      color: var(--color-accent);
    }

    .container {
      max-width: 1280px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    /* Header/Navbar */
    .header {
      position: sticky;
      top: 0;
      z-index: 100;
      background: var(--color-panel);
      box-shadow: 0 2px 20px rgba(0,0,0,0.08);
    }

    .navbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem 0;
    }

    .navbar .logo img {
      height: 60px;
      object-fit: contain;
      transition: transform 0.3s ease;
    }

    .navbar nav a {
      margin-left: 2rem;
      font-weight: 600;
      position: relative;
    }

    .navbar nav a::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 2px;
      background: var(--color-accent);
      transition: width 0.3s ease;
    }

    .navbar nav a:hover::after {
      width: 100%;
    }

    .navbar nav a.active {
      color: var(--color-accent) !important;
    }

    .navbar nav a.active::after {
      width: 100%;
    }

    /* Mobile Navigation */
    .navbar .burger {
      display: none;
      cursor: pointer;
      font-size: 1.5rem;
    }

    @media (max-width: 768px) {
      .navbar {
        position: relative;
        padding: 0.5rem 0;
      }

      .navbar nav {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: var(--color-panel);
        flex-direction: column;
        padding: 1rem;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        display: none;
      }

      .navbar nav.active {
        display: flex;
      }

      .navbar nav a {
        margin: 0.5rem 0;
        padding: 0.75rem;
        width: 100%;
        text-align: center;
        margin-left: 0;
      }

      .navbar .burger {
        display: block;
      }

      .navbar .logo img {
        height: 50px;
      }
    }

    @media (max-width: 480px) {
      .navbar .logo img {
        height: 45px;
      }
    }

    /* Hero Section */
    .hero {
      position: relative;
      min-height: 70vh;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      color: #fff;
      background-position: center;
      background-size: cover;
      isolation: isolate;
    }

    .hero::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(45deg, rgba(0,0,0,0.4), rgba(0,0,0,0.2));
      z-index: -1;
    }

    .hero-content {
      position: relative;
      max-width: 800px;
      padding: 2rem;
    }

    .hero h1 {
      font-size: 3.5rem;
      margin-bottom: 1.5rem;
      line-height: 1.2;
    }

    .hero .btn {
      display: inline-block;
      padding: 1rem 2rem;
      background: var(--color-accent);
      color: #fff !important;
      border-radius: var(--radius);
      font-weight: 600;
      transition: all var(--transition);
      text-transform: uppercase;
      letter-spacing: 0.5px;
      border: 2px solid transparent;
    }

    .hero .btn:hover {
      background: #dc5c11;
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(249, 115, 22, 0.3);
    }

    /* Service Sections */
    .service-section {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
      margin: 4rem 0;
      padding: 2.5rem;
      background: var(--color-panel);
      border-radius: var(--radius);
      box-shadow: 0 8px 40px rgba(0,0,0,0.06);
      transition: transform 0.3s ease;
    }

    .service-section:hover {
      transform: translateY(-5px);
    }

    .service-img {
      width: 100%;
      height: 400px;
      border-radius: var(--radius);
      object-fit: cover;
      box-shadow: 0 12px 24px rgba(0,0,0,0.08);
    }

    .service-content h2 {
      font-size: 2.25rem;
      margin-bottom: 1.5rem;
      position: relative;
      padding-bottom: 0.75rem;
    }

    .service-content h2::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 60px;
      height: 3px;
      background: var(--color-accent);
    }

    .service-content ul {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
      margin: 2rem 0;
      list-style: none;
      padding: 0;
    }

    .service-content li {
      padding: 1rem;
      background: rgba(241, 245, 249, 0.4);
      border-radius: 8px;
      display: flex;
      align-items: center;
      gap: 0.75rem;
      font-weight: 500;
    }

    .service-content li::before {
      content: '•';
      color: var(--color-accent);
      font-size: 1.4em;
    }

    /* Modern Grid */
    .modern-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin: 3rem 0;
    }

    .feature-card {
      padding: 2.5rem;
      background: var(--color-panel);
      border-radius: var(--radius);
      border-left: 4px solid var(--color-accent);
      box-shadow: 0 4px 24px rgba(0,0,0,0.06);
      transition: transform 0.3s ease;
      text-align: center;
    }

    .feature-card:hover {
      transform: translateY(-5px);
    }

    .feature-card i {
      font-size: 2.5rem;
      color: var(--color-accent);
      margin-bottom: 1.5rem;
    }

    /* Contact Form */
    .contact-form {
      background: var(--color-panel);
      padding: 2.5rem;
      border-radius: var(--radius);
      box-shadow: 0 8px 32px rgba(0,0,0,0.05);
      max-width: 600px;
      margin: 2rem auto;
    }

    .contact-form h3 {
      text-align: center;
      margin-bottom: 2rem;
      font-size: 1.75rem;
      color: var(--color-primary);
    }

    .form-group {
      margin-bottom: 1.5rem;
    }

    .form-group label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: 600;
    }

    .modern-input {
      width: 100%;
      padding: 1rem;
      border: 2px solid #e2e8f0;
      border-radius: 8px;
      transition: border-color 0.3s ease;
    }

    .modern-input:focus {
      border-color: var(--color-accent);
      outline: none;
      box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.1);
    }

    .btn-secondary {
      background: var(--color-primary);
      color: #fff !important;
      padding: 1rem 2rem;
      border-radius: var(--radius);
      border: none;
      cursor: pointer;
      transition: all var(--transition);
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      font-weight: 600;
      width: 100%;
      justify-content: center;
    }

    .btn-secondary:hover {
      background: #1e4bb8;
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(37, 99, 235, 0.3);
    }

    /* Footer */
    .footer {
      background: var(--color-panel);
      padding: 3rem 0;
      margin-top: 4rem;
      border-top: 1px solid #e2e8f0;
      text-align: center;
    }

    /* Animations */
    .fade-in {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }

    .fade-in.visible {
      opacity: 1;
      transform: translateY(0);
    }

    @keyframes fadeInUp {
      to { opacity: 1; transform: translateY(0); }
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .service-section {
        grid-template-columns: 1fr;
        padding: 1.5rem;
        gap: 2rem;
      }
      
      .service-img {
        height: 300px;
      }
      
      .service-content ul {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 480px) {
      .hero h1 {
        font-size: 2rem;
      }
      
      .service-content h2 {
        font-size: 1.75rem;
      }
      
      .feature-card {
        padding: 1.5rem;
      }
    }
  `;
  document.head.appendChild(style);

  // Initialize functionality after DOM loads
  document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navbar nav');

    if (burger && nav) {
      burger.addEventListener('click', (e) => {
        e.stopPropagation();
        nav.classList.toggle('active');
        burger.classList.toggle('active');
      });

      // Close menu when clicking outside
      document.addEventListener('click', (e) => {
        if (!e.target.closest('.navbar')) {
          nav.classList.remove('active');
          burger.classList.remove('active');
        }
      });

      // Close menu on resize
      window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
          nav.classList.remove('active');
          burger.classList.remove('active');
        }
      });
    }

    // Scroll Animations
    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = { threshold: 0.1 };

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      });
    }, appearOptions);

    faders.forEach(fader => appearOnScroll.observe(fader));

    // Form Handling
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const submitButton = form.querySelector('button[type="submit"]');
        const originalText = submitButton.innerHTML;

        // Show loading state
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitButton.disabled = true;

        try {
          const response = await fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
            headers: { 'Accept': 'application/json' }
          });

          if (response.ok) {
            alert('Message sent successfully! We will respond shortly.');
            form.reset();
          } else {
            alert('There was an error sending your message. Please try again.');
          }
        } catch (error) {
          alert('Network error. Please check your internet connection.');
        } finally {
          submitButton.innerHTML = originalText;
          submitButton.disabled = false;
        }
      });
    });
  });
})();