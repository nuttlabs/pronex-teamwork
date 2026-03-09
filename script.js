const btnCta = document.getElementById('btn-cta');
const termsCheckbox = document.getElementById('terms-checkbox');
const termsError = document.getElementById('terms-error');

// Start disabled
btnCta.classList.add('disabled');

termsCheckbox.addEventListener('change', () => {
  if (termsCheckbox.checked) {
    btnCta.classList.remove('disabled');
    termsError.style.display = 'none';
  } else {
    btnCta.classList.add('disabled');
  }
});

btnCta.addEventListener('click', e => {
  if (!termsCheckbox.checked) {
    e.preventDefault();
    termsError.style.display = 'block';
  }
});

document.querySelectorAll('.faq-trigger').forEach(trigger => {
  trigger.addEventListener('click', () => {
    const item = trigger.closest('.faq-item');
    const isOpen = item.classList.contains('open');

    // Close all
    document.querySelectorAll('.faq-item').forEach(i => {
      i.classList.remove('open');
      i.querySelector('.faq-trigger').setAttribute('aria-expanded', 'false');
    });

    // Open clicked if it was closed
    if (!isOpen) {
      item.classList.add('open');
      trigger.setAttribute('aria-expanded', 'true');
    }
  });
});
