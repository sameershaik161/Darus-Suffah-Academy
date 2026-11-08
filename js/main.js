/**
 * Darus Suffah Academy - Main JavaScript
 * Online Quran and Islamic Studies Academy | Hyderabad, India
 * Phone: 8978679780 | 9347630184 | 40-Minute Free Trial
 * Vanilla JavaScript (No Frameworks, No Build Tools)
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Hamburger Menu & Drawer
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileOverlay = document.querySelector('.mobile-nav-overlay');

  function openMobileNav() {
    if (!hamburger || !mobileNav) return;
    hamburger.classList.add('is-active');
    hamburger.setAttribute('aria-expanded', 'true');
    mobileNav.classList.add('is-open');
    if (mobileOverlay) mobileOverlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileNav() {
    if (!hamburger || !mobileNav) return;
    hamburger.classList.remove('is-active');
    hamburger.setAttribute('aria-expanded', 'false');
    mobileNav.classList.remove('is-open');
    if (mobileOverlay) mobileOverlay.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobileNav && mobileNav.classList.contains('is-open');
      if (isOpen) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    });
  }

  if (mobileOverlay) {
    mobileOverlay.addEventListener('click', closeMobileNav);
  }

  // Close mobile nav when clicking a link inside it
  const mobileLinks = document.querySelectorAll('.mobile-menu-link, .mobile-submenu-link');
  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMobileNav);
  });

  // Close with Esc key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNav && mobileNav.classList.contains('is-open')) {
      closeMobileNav();
    }
  });

  // 2. Sticky Navbar Styling & Back to Top Visibility on Scroll
  const backToTopBtn = document.querySelector('.btn-back-to-top');
  const siteHeader = document.querySelector('.site-header');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY || window.pageYOffset;

    if (siteHeader) {
      if (scrollPos > 40) {
        siteHeader.style.boxShadow = '0 6px 20px rgba(7, 56, 38, 0.12)';
      } else {
        siteHeader.style.boxShadow = '0 4px 20px rgba(7, 56, 38, 0.06)';
      }
    }

    if (backToTopBtn) {
      if (scrollPos > 350) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    }
  }, { passive: true });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // 3. Smooth scrolling for anchor links with header offset
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;
      
      const targetElem = document.querySelector(targetId);
      if (targetElem) {
        e.preventDefault();
        const headerHeight = siteHeader ? siteHeader.offsetHeight : 80;
        const targetPos = targetElem.getBoundingClientRect().top + window.pageYOffset - headerHeight - 15;
        
        window.scrollTo({
          top: targetPos,
          behavior: 'smooth'
        });
      }
    });
  });

  // 4. Scroll-Reveal Animations (IntersectionObserver)
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length > 0) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    reveals.forEach(el => revealObserver.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('reveal-visible'));
  }

  // 5. Accordion for FAQs
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
            const otherBtn = otherItem.querySelector('.faq-question');
            if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          }
        });

        if (isActive) {
          item.classList.remove('active');
          questionBtn.setAttribute('aria-expanded', 'false');
        } else {
          item.classList.add('active');
          questionBtn.setAttribute('aria-expanded', 'true');
        }
      });
    }
  });

  // 6. Contact Form Validation & Handler
  const contactForms = document.querySelectorAll('.contact-form');
  contactForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const alertBox = form.querySelector('.form-alert');
      const nameInput = form.querySelector('[name="name"]');
      const emailInput = form.querySelector('[name="email"]');
      const phoneInput = form.querySelector('[name="phone"]');
      const consentBox = form.querySelector('[name="consent"]');
      const submitBtn = form.querySelector('button[type="submit"]');

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      let errors = [];

      if (!nameInput || nameInput.value.trim().length < 2) {
        errors.push('Please enter your full name (at least 2 characters).');
      }

      if (emailInput && emailInput.value.trim().length > 0 && !emailRegex.test(emailInput.value.trim())) {
        errors.push('Please enter a valid email address.');
      }

      if (!phoneInput || phoneInput.value.trim().length < 7) {
        errors.push('Please enter a valid contact phone number.');
      }

      if (consentBox && !consentBox.checked) {
        errors.push('Please agree to allow Darus Suffah Academy to store your submission to respond.');
      }

      if (alertBox) {
        if (errors.length > 0) {
          alertBox.className = 'form-alert error';
          alertBox.innerHTML = `<strong>Please fix the following:</strong><br>${errors.join('<br>')}`;
          alertBox.style.display = 'block';
          alertBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
          const originalBtnText = submitBtn ? submitBtn.innerHTML : 'Send Message';
          if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = 'Sending Message...';
          }

          setTimeout(() => {
            alertBox.className = 'form-alert success';
            alertBox.innerHTML = `
              <strong>Alhamdulillah! Jazakallahu Khair.</strong><br>
              Your message has been received by Darus Suffah Academy. Our team will reach out promptly via WhatsApp or Call (+91 8978679780 / +91 9347630184).
            `;
            alertBox.style.display = 'block';
            form.reset();
            if (submitBtn) {
              submitBtn.disabled = false;
              submitBtn.innerHTML = originalBtnText;
            }
            alertBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }, 800);
        }
      }
    });
  });

  // 7. Interactive Appointment Scheduling (scheduling.html) - 40 Minutes Free Trial
  const scheduleForm = document.querySelector('#schedule-appointment-form');
  if (scheduleForm) {
    const slotBtns = scheduleForm.querySelectorAll('.slot-btn');
    const selectedSlotInput = scheduleForm.querySelector('#selected-time-slot');
    const dateInput = scheduleForm.querySelector('#appointment-date');
    const confirmationBox = document.querySelector('#appointment-confirmation');

    if (dateInput) {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const yyyy = tomorrow.getFullYear();
      const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
      const dd = String(tomorrow.getDate()).padStart(2, '0');
      dateInput.min = `${yyyy}-${mm}-${dd}`;
      dateInput.value = `${yyyy}-${mm}-${dd}`;
    }

    slotBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        slotBtns.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        if (selectedSlotInput) {
          selectedSlotInput.value = btn.getAttribute('data-slot') || btn.innerText;
        }
      });
    });

    scheduleForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const alertBox = scheduleForm.querySelector('.form-alert');
      const course = scheduleForm.querySelector('#course-select')?.value;
      const date = dateInput?.value;
      const slot = selectedSlotInput?.value;
      const name = scheduleForm.querySelector('#student-name')?.value.trim();
      const phone = scheduleForm.querySelector('#student-phone')?.value.trim();
      const email = scheduleForm.querySelector('#student-email')?.value.trim() || 'N/A';

      if (!name || !phone || !date || !slot || !course) {
        if (alertBox) {
          alertBox.className = 'form-alert error';
          alertBox.innerText = 'Please select a course, date, preferred time slot, and enter your contact details.';
          alertBox.style.display = 'block';
        }
        return;
      }

      if (alertBox) alertBox.style.display = 'none';
      if (confirmationBox) {
        confirmationBox.innerHTML = `
          <div style="background: #e8f5e9; border: 2px solid #2e7d32; border-radius: 16px; padding: 2rem; text-align: center; margin-top: 2rem;">
            <div style="font-size: 2.5rem; color: #2e7d32; margin-bottom: 0.5rem;">✓</div>
            <h3 style="color: #073826; font-size: 1.5rem; margin-bottom: 0.5rem;">40-Minute Free Trial Session Scheduled!</h3>
            <p style="color: #53645b; margin-bottom: 1.5rem;">
              Barakallahu Feekum, <strong>${name}</strong>. Your complimentary 40-minute 1-on-1 trial class with Darus Suffah Academy is confirmed.
            </p>
            <div style="background: #ffffff; border-radius: 12px; padding: 1.25rem; max-width: 480px; margin: 0 auto; text-align: left; border: 1px solid #c59b27;">
              <p><strong>Academy:</strong> Darus Suffah Academy (دار الصفة)</p>
              <p><strong>Course:</strong> ${course}</p>
              <p><strong>Duration:</strong> 40 Minutes (Free Demo Class)</p>
              <p><strong>Scheduled Date:</strong> ${date}</p>
              <p><strong>Selected Time:</strong> ${slot} (IST)</p>
              <p><strong>WhatsApp / Phone:</strong> ${phone}</p>
            </div>
            <p style="font-size: 0.875rem; color: #53645b; margin-top: 1.25rem;">
              Our academic coordinator will WhatsApp you at <strong>${phone}</strong> (or call <strong>8978679780 / 9347630184</strong>) with your live Zoom or Google Meet classroom link.
            </p>
          </div>
        `;
        confirmationBox.style.display = 'block';
        confirmationBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
        scheduleForm.reset();
        slotBtns.forEach(b => b.classList.remove('selected'));
      }
    });
  }

  // 8. Student Intake Form Handler (intake-form.html)
  const intakeForm = document.querySelector('#student-intake-form');
  if (intakeForm) {
    intakeForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const alertBox = intakeForm.querySelector('.form-alert');
      const sName = intakeForm.querySelector('#intake-name')?.value.trim();
      const sAge = intakeForm.querySelector('#intake-age')?.value;
      const sCourse = intakeForm.querySelector('#intake-course')?.value;
      const sPhone = intakeForm.querySelector('#intake-phone')?.value.trim();

      if (!sName || !sAge || !sCourse || !sPhone) {
        if (alertBox) {
          alertBox.className = 'form-alert error';
          alertBox.innerText = 'Please fill out all required fields marked with an asterisk (*).';
          alertBox.style.display = 'block';
          alertBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        return;
      }

      if (alertBox) {
        alertBox.className = 'form-alert success';
        alertBox.innerHTML = `
          <strong>Alhamdulillah! Intake Application Submitted Successfully.</strong><br>
          Thank you, <strong>${sName}</strong>. Your profile has been received by the Academic Committee of Darus Suffah Academy. Our teachers will prepare your personalized 40-minute free evaluation and reach out at <strong>${sPhone}</strong>.
        `;
        alertBox.style.display = 'block';
        intakeForm.reset();
        alertBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  }
});
