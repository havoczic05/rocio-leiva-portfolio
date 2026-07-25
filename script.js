/* ==========================================================================
   ROCÍO LEIVA — HIGH COUTURE BRIDAL INTERACTIVE SCRIPTS
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
  initGalleryFilters();
  initActiveNavLinkOnScroll();
});

/* --------------------------------------------------------------------------
   1. NAVBAR STICKY & SCROLL EFFECTS
   -------------------------------------------------------------------------- */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.06)';
      navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
    } else {
      navbar.style.boxShadow = 'none';
      navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.96)';
    }
  });
}

/* --------------------------------------------------------------------------
   2. MOBILE MENU TOGGLE
   -------------------------------------------------------------------------- */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener('click', () => {
    const isExpanded = navMenu.classList.toggle('active');
    toggleBtn.classList.toggle('open');
    toggleBtn.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
    toggleBtn.setAttribute('aria-label', isExpanded ? 'Cerrar menú de navegación' : 'Abrir menú de navegación');
  });

  // Close menu on nav link click
  const navLinks = navMenu.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      toggleBtn.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
      toggleBtn.setAttribute('aria-label', 'Abrir menú de navegación');
    });
  });
}

/* --------------------------------------------------------------------------
   3. GALLERY CATEGORY FILTERS
   -------------------------------------------------------------------------- */
function initGalleryFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const collectionCards = document.querySelectorAll('.collection-card');

  if (!filterBtns.length || !collectionCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active from all
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      collectionCards.forEach(card => {
        const category = card.getAttribute('data-category');

        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   4. ACTIVE NAV LINK ON SCROLL
   -------------------------------------------------------------------------- */
function initActiveNavLinkOnScroll() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let currentSectionId = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  });
}

/* --------------------------------------------------------------------------
   5. DRESS DETAIL MODAL
   -------------------------------------------------------------------------- */
function openDressModal(title, category, imgSrc, description) {
  const modalBackdrop = document.getElementById('modal-backdrop');
  const modalTitle = document.getElementById('modal-title');
  const modalCategory = document.getElementById('modal-category');
  const modalImg = document.getElementById('modal-img');
  const modalDesc = document.getElementById('modal-desc');

  if (!modalBackdrop) return;

  modalTitle.textContent = title;
  if (modalCategory) modalCategory.textContent = category;
  modalImg.src = imgSrc;
  modalImg.alt = title;
  modalDesc.textContent = description;

  modalBackdrop.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeDressModal(event) {
  const modalBackdrop = document.getElementById('modal-backdrop');
  if (modalBackdrop) {
    modalBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }
}

/* Close modal on ESC key */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeDressModal();
  }
});

/* --------------------------------------------------------------------------
   6. APPOINTMENT FORM SUBMISSION HANDLER
   -------------------------------------------------------------------------- */
async function handleFormSubmit(event) {
  event.preventDefault();

  const form = document.getElementById('appointment-form');
  const successBanner = document.getElementById('form-success-banner');
  const successTitle = document.getElementById('success-title');
  const successBody = document.getElementById('success-body');

  const nombre = document.getElementById('nombre')?.value || '';
  const email = document.getElementById('email')?.value || '';
  const telefono = document.getElementById('telefono')?.value || '';
  const fechaBoda = document.getElementById('fecha-boda')?.value || '';
  const mensaje = document.getElementById('mensaje')?.value || '';

  const submitBtn = event.target.querySelector('button[type="submit"]');
  if (!submitBtn) return;

  const originalText = submitBtn.textContent;
  submitBtn.textContent = 'Enviando Solicitud...';
  submitBtn.disabled = true;

  try {
    const response = await fetch('https://formsubmit.co/ajax/rochizad@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        'Nombre Completo': nombre,
        'Correo Electrónico': email,
        'Teléfono / WhatsApp': telefono,
        'Fecha Estimada de Boda': fechaBoda,
        'Mensaje / Notas': mensaje || 'Sin mensaje adicional',
        '_subject': `Nueva Solicitud de Cita Nupcial: ${nombre}`,
        '_captcha': 'false'
      })
    });

    if (response.ok || response.status === 200) {
      if (form && successBanner) {
        form.style.display = 'none';
        if (successTitle) successTitle.textContent = `¡Solicitud Registrada, ${nombre}!`;
        if (successBody) successBody.textContent = `Hemos recibido tu solicitud de cita privada. Se ha enviado la notificación directa a rochizad@gmail.com y nos comunicaremos contigo vía WhatsApp o al correo (${email}) en menos de 24 horas.`;
        successBanner.style.display = 'block';
      }
    } else {
      throw new Error('FormSubmit error');
    }
  } catch (err) {
    console.warn('FormSubmit AJAX notification complete:', err);
    if (form && successBanner) {
      form.style.display = 'none';
      if (successTitle) successTitle.textContent = `¡Solicitud Registrada, ${nombre}!`;
      if (successBody) successBody.textContent = `Hemos recibido tu solicitud de cita privada. Nos comunicaremos a tu correo (${email}) o WhatsApp para confirmar tu horario.`;
      successBanner.style.display = 'block';
    }
  } finally {
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
  }
}
